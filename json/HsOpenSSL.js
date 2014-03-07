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
        "word": "HsOpenSSL"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBN - multiprecision integer arithmetics\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.BN",
          "name": "BN",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-BN.html",
          "type": "module"
        },
        "index": {
          "description": "BN multiprecision integer arithmetics",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "BN",
          "package": "HsOpenSSL",
          "partial": "BN",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBigNum\u003c/a\u003e\u003c/code\u003e is an opaque object representing a big number.\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "BigNum",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-BN.html#BigNum",
          "type": "data"
        },
        "index": {
          "description": "BigNum is an opaque object representing big number",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "BigNum",
          "package": "HsOpenSSL",
          "partial": "Big Num",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#t:BigNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eallocaBN\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e allocates a \u003ccode\u003e\u003ca\u003eBigNum\u003c/a\u003e\u003c/code\u003e and computes \u003ccode\u003ef\u003c/code\u003e. Then it\n frees the \u003ccode\u003e\u003ca\u003eBigNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "allocaBN",
          "package": "HsOpenSSL",
          "signature": "(BigNum -\u003e IO a) -\u003e IO a",
          "source": "src/OpenSSL-BN.html#allocaBN",
          "type": "function"
        },
        "index": {
          "description": "allocaBN allocates BigNum and computes Then it frees the BigNum",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "allocaBN",
          "normalized": "(BigNum-\u003eIO a)-\u003eIO a",
          "package": "HsOpenSSL",
          "partial": "BN",
          "signature": "(BigNum-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:allocaBN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a BIGNUM to an Integer\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "bnToInteger",
          "package": "HsOpenSSL",
          "signature": "BigNum -\u003e IO Integer",
          "source": "src/OpenSSL-BN.html#bnToInteger",
          "type": "function"
        },
        "index": {
          "description": "Convert BIGNUM to an Integer",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "bnToInteger",
          "normalized": "BigNum-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "To Integer",
          "signature": "BigNum-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:bnToInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a GHC specific, fast conversion between Integers and OpenSSL\n   bignums. It returns a malloced BigNum.\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "integerToBN",
          "package": "HsOpenSSL",
          "signature": "Integer -\u003e IO BigNum",
          "source": "src/OpenSSL-BN.html#integerToBN",
          "type": "function"
        },
        "index": {
          "description": "This is GHC specific fast conversion between Integers and OpenSSL bignums It returns malloced BigNum",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "integerToBN",
          "normalized": "Integer-\u003eIO BigNum",
          "package": "HsOpenSSL",
          "partial": "To BN",
          "signature": "Integer-\u003eIO BigNum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:integerToBN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an Integer to an MPI. See bnToMPI for the format\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "integerToMPI",
          "package": "HsOpenSSL",
          "signature": "Integer -\u003e IO ByteString",
          "source": "src/OpenSSL-BN.html#integerToMPI",
          "type": "function"
        },
        "index": {
          "description": "Convert an Integer to an MPI See bnToMPI for the format",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "integerToMPI",
          "normalized": "Integer-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "To MPI",
          "signature": "Integer-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:integerToMPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emodexp\u003c/a\u003e\u003c/code\u003e a p m\u003c/code\u003e computes \u003ccode\u003ea\u003c/code\u003e to the \u003ccode\u003ep\u003c/code\u003e-th power modulo \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "modexp",
          "package": "HsOpenSSL",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/OpenSSL-BN.html#modexp",
          "type": "function"
        },
        "index": {
          "description": "modexp computes to the th power modulo",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "modexp",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "HsOpenSSL",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:modexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an MPI to an Integer. See bnToMPI for the format\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "mpiToInteger",
          "package": "HsOpenSSL",
          "signature": "ByteString -\u003e IO Integer",
          "source": "src/OpenSSL-BN.html#mpiToInteger",
          "type": "function"
        },
        "index": {
          "description": "Convert an MPI to an Integer See bnToMPI for the format",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "mpiToInteger",
          "normalized": "ByteString-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "To Integer",
          "signature": "ByteString-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:mpiToInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an alias to \u003ccode\u003e\u003ca\u003eintegerToBN\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "newBN",
          "package": "HsOpenSSL",
          "signature": "Integer -\u003e IO BigNum",
          "source": "src/OpenSSL-BN.html#newBN",
          "type": "function"
        },
        "index": {
          "description": "This is an alias to integerToBN",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "newBN",
          "normalized": "Integer-\u003eIO BigNum",
          "package": "HsOpenSSL",
          "partial": "BN",
          "signature": "Integer-\u003eIO BigNum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:newBN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an alias to \u003ccode\u003e\u003ca\u003ebnToInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "peekBN",
          "package": "HsOpenSSL",
          "signature": "BigNum -\u003e IO Integer",
          "source": "src/OpenSSL-BN.html#peekBN",
          "type": "function"
        },
        "index": {
          "description": "This is an alias to bnToInteger",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "peekBN",
          "normalized": "BigNum-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "BN",
          "signature": "BigNum-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:peekBN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a random number in the range 0 \u003c x \u003c n\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "prandIntegerOneToNMinusOne",
          "package": "HsOpenSSL",
          "signature": "Integer -\u003e IO Integer",
          "source": "src/OpenSSL-BN.html#prandIntegerOneToNMinusOne",
          "type": "function"
        },
        "index": {
          "description": "Return random number in the range",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "prandIntegerOneToNMinusOne",
          "normalized": "Integer-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "Integer One To NMinus One",
          "signature": "Integer-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:prandIntegerOneToNMinusOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a random number in the range 0 \u003c= x \u003c n where the given\n   filter function returns true.\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "prandIntegerUptoNMinusOneSuchThat",
          "package": "HsOpenSSL",
          "signature": "(Integer -\u003e Bool)-\u003e Integer-\u003e IO Integer",
          "type": "function"
        },
        "index": {
          "description": "Return random number in the range where the given filter function returns true",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "prandIntegerUptoNMinusOneSuchThat",
          "normalized": "(Integer-\u003eBool)-\u003eInteger-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "Integer Upto NMinus One Such That",
          "signature": "(Integer-\u003eBool)-\u003eInteger-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:prandIntegerUptoNMinusOneSuchThat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a random number in the range 0 \u003c= x \u003c n\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "prandIntegerZeroToNMinusOne",
          "package": "HsOpenSSL",
          "signature": "Integer -\u003e IO Integer",
          "source": "src/OpenSSL-BN.html#prandIntegerZeroToNMinusOne",
          "type": "function"
        },
        "index": {
          "description": "Return random number in the range",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "prandIntegerZeroToNMinusOne",
          "normalized": "Integer-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "Integer Zero To NMinus One",
          "signature": "Integer-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:prandIntegerZeroToNMinusOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a strongly random number in the range 0 \u003c x \u003c n\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "randIntegerOneToNMinusOne",
          "package": "HsOpenSSL",
          "signature": "Integer -\u003e IO Integer",
          "source": "src/OpenSSL-BN.html#randIntegerOneToNMinusOne",
          "type": "function"
        },
        "index": {
          "description": "Return strongly random number in the range",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "randIntegerOneToNMinusOne",
          "normalized": "Integer-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "Integer One To NMinus One",
          "signature": "Integer-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:randIntegerOneToNMinusOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a strongly random number in the range 0 \u003c= x \u003c n where the given\n   filter function returns true.\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "randIntegerUptoNMinusOneSuchThat",
          "package": "HsOpenSSL",
          "signature": "(Integer -\u003e Bool)-\u003e Integer-\u003e IO Integer",
          "type": "function"
        },
        "index": {
          "description": "Return strongly random number in the range where the given filter function returns true",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "randIntegerUptoNMinusOneSuchThat",
          "normalized": "(Integer-\u003eBool)-\u003eInteger-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "Integer Upto NMinus One Such That",
          "signature": "(Integer-\u003eBool)-\u003eInteger-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:randIntegerUptoNMinusOneSuchThat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a strongly random number in the range 0 \u003c= x \u003c n\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "randIntegerZeroToNMinusOne",
          "package": "HsOpenSSL",
          "signature": "Integer -\u003e IO Integer",
          "source": "src/OpenSSL-BN.html#randIntegerZeroToNMinusOne",
          "type": "function"
        },
        "index": {
          "description": "Return strongly random number in the range",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "randIntegerZeroToNMinusOne",
          "normalized": "Integer-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "Integer Zero To NMinus One",
          "signature": "Integer-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:randIntegerZeroToNMinusOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithBN\u003c/a\u003e\u003c/code\u003e n f\u003c/code\u003e converts n to a \u003ccode\u003e\u003ca\u003eBigNum\u003c/a\u003e\u003c/code\u003e and computes \u003ccode\u003ef\u003c/code\u003e. Then it\n frees the \u003ccode\u003e\u003ca\u003eBigNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.BN",
          "name": "withBN",
          "package": "HsOpenSSL",
          "signature": "Integer -\u003e (BigNum -\u003e IO a) -\u003e IO a",
          "source": "src/OpenSSL-BN.html#withBN",
          "type": "function"
        },
        "index": {
          "description": "withBN converts to BigNum and computes Then it frees the BigNum",
          "hierarchy": "OpenSSL BN",
          "module": "OpenSSL.BN",
          "name": "withBN",
          "normalized": "Integer-\u003e(BigNum-\u003eIO a)-\u003eIO a",
          "package": "HsOpenSSL",
          "partial": "BN",
          "signature": "Integer-\u003e(BigNum-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-BN.html#v:withBN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module interfaces to some of the OpenSSL ciphers without using\n   EVP (see OpenSSL.EVP.Cipher). The EVP ciphers are easier to use,\n   however, in some cases you cannot do without using the OpenSSL\n   fuctions directly.\n\u003c/p\u003e\u003cp\u003eOne of these cases (and the motivating example\n   for this module) is that the EVP CBC functions try to encode the\n   length of the input string in the output (thus hiding the fact that the\n   cipher is, in fact, block based and needs padding). This means that the\n   EVP CBC functions cannot, in some cases, interface with other users\n   which don't use that system (like SSH).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.Cipher",
          "name": "Cipher",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Cipher.html",
          "type": "module"
        },
        "index": {
          "description": "This module interfaces to some of the OpenSSL ciphers without using EVP see OpenSSL.EVP.Cipher The EVP ciphers are easier to use however in some cases you cannot do without using the OpenSSL fuctions directly One of these cases and the motivating example for this module is that the EVP CBC functions try to encode the length of the input string in the output thus hiding the fact that the cipher is in fact block based and needs padding This means that the EVP CBC functions cannot in some cases interface with other users which don use that system like SSH",
          "hierarchy": "OpenSSL Cipher",
          "module": "OpenSSL.Cipher",
          "name": "Cipher",
          "package": "HsOpenSSL",
          "partial": "Cipher",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Cipher.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Cipher",
          "name": "AESCtx",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Cipher.html#AESCtx",
          "type": "data"
        },
        "index": {
          "hierarchy": "OpenSSL Cipher",
          "module": "OpenSSL.Cipher",
          "name": "AESCtx",
          "package": "HsOpenSSL",
          "partial": "AESCtx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Cipher.html#t:AESCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Cipher",
          "name": "Mode",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Cipher.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "OpenSSL Cipher",
          "module": "OpenSSL.Cipher",
          "name": "Mode",
          "package": "HsOpenSSL",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Cipher.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Cipher",
          "name": "Decrypt",
          "package": "HsOpenSSL",
          "signature": "Decrypt",
          "source": "src/OpenSSL-Cipher.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Cipher",
          "module": "OpenSSL.Cipher",
          "name": "Decrypt",
          "package": "HsOpenSSL",
          "partial": "Decrypt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Cipher.html#v:Decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Cipher",
          "name": "Encrypt",
          "package": "HsOpenSSL",
          "signature": "Encrypt",
          "source": "src/OpenSSL-Cipher.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Cipher",
          "module": "OpenSSL.Cipher",
          "name": "Encrypt",
          "package": "HsOpenSSL",
          "partial": "Encrypt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Cipher.html#v:Encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt some number of blocks using CBC. This is an IO function because\n   the context is destructivly updated.\n\u003c/p\u003e",
          "module": "OpenSSL.Cipher",
          "name": "aesCBC",
          "package": "HsOpenSSL",
          "signature": "AESCtx-\u003e ByteString-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encrypt some number of blocks using CBC This is an IO function because the context is destructivly updated",
          "hierarchy": "OpenSSL Cipher",
          "module": "OpenSSL.Cipher",
          "name": "aesCBC",
          "normalized": "AESCtx-\u003eByteString-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "CBC",
          "signature": "AESCtx-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Cipher.html#v:aesCBC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt some number of bytes using CTR mode. This is an IO function\n   because the context is destructivly updated.\n\u003c/p\u003e",
          "module": "OpenSSL.Cipher",
          "name": "aesCTR",
          "package": "HsOpenSSL",
          "signature": "AESCtx-\u003e ByteString-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encrypt some number of bytes using CTR mode This is an IO function because the context is destructivly updated",
          "hierarchy": "OpenSSL Cipher",
          "module": "OpenSSL.Cipher",
          "name": "aesCTR",
          "normalized": "AESCtx-\u003eByteString-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "CTR",
          "signature": "AESCtx-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Cipher.html#v:aesCTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new context which holds the key schedule and IV.\n\u003c/p\u003e",
          "module": "OpenSSL.Cipher",
          "name": "newAESCtx",
          "package": "HsOpenSSL",
          "signature": "Mode-\u003e ByteString-\u003e ByteString-\u003e IO AESCtx",
          "type": "function"
        },
        "index": {
          "description": "Construct new context which holds the key schedule and IV",
          "hierarchy": "OpenSSL Cipher",
          "module": "OpenSSL.Cipher",
          "name": "newAESCtx",
          "normalized": "Mode-\u003eByteString-\u003eByteString-\u003eIO AESCtx",
          "package": "HsOpenSSL",
          "partial": "AESCtx",
          "signature": "Mode-\u003eByteString-\u003eByteString-\u003eIO AESCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Cipher.html#v:newAESCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDiffie-Hellman key exchange\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.DH",
          "name": "DH",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-DH.html",
          "type": "module"
        },
        "index": {
          "description": "Diffie-Hellman key exchange",
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "DH",
          "package": "HsOpenSSL",
          "partial": "DH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.DH",
          "name": "DH",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-DH-Internal.html#DH",
          "type": "data"
        },
        "index": {
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "DH",
          "package": "HsOpenSSL",
          "partial": "DH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#t:DH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.DH",
          "name": "DHGen",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-DH.html#DHGen",
          "type": "data"
        },
        "index": {
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "DHGen",
          "package": "HsOpenSSL",
          "partial": "DHGen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#t:DHGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.DH",
          "name": "DHP",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-DH-Internal.html#DHP",
          "type": "data"
        },
        "index": {
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "DHP",
          "package": "HsOpenSSL",
          "partial": "DHP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#t:DHP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.DH",
          "name": "DHGen2",
          "package": "HsOpenSSL",
          "signature": "DHGen2",
          "source": "src/OpenSSL-DH.html#DHGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "DHGen2",
          "package": "HsOpenSSL",
          "partial": "DHGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#v:DHGen2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.DH",
          "name": "DHGen5",
          "package": "HsOpenSSL",
          "signature": "DHGen5",
          "source": "src/OpenSSL-DH.html#DHGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "DHGen5",
          "package": "HsOpenSSL",
          "partial": "DHGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#v:DHGen5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that DH parameters are coherent.\n\u003c/p\u003e",
          "module": "OpenSSL.DH",
          "name": "checkDHParams",
          "package": "HsOpenSSL",
          "signature": "DHP -\u003e IO Bool",
          "source": "src/OpenSSL-DH.html#checkDHParams",
          "type": "function"
        },
        "index": {
          "description": "Check that DH parameters are coherent",
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "checkDHParams",
          "normalized": "DHP-\u003eIO Bool",
          "package": "HsOpenSSL",
          "partial": "DHParams",
          "signature": "DHP-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#v:checkDHParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the shared key using the other party's public key.\n\u003c/p\u003e",
          "module": "OpenSSL.DH",
          "name": "computeDHKey",
          "package": "HsOpenSSL",
          "signature": "DH -\u003e Integer -\u003e IO ByteString",
          "source": "src/OpenSSL-DH.html#computeDHKey",
          "type": "function"
        },
        "index": {
          "description": "Compute the shared key using the other party public key",
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "computeDHKey",
          "normalized": "DH-\u003eInteger-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "DHKey",
          "signature": "DH-\u003eInteger-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#v:computeDHKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first step of a key exchange. Public and private keys are generated.\n\u003c/p\u003e",
          "module": "OpenSSL.DH",
          "name": "genDH",
          "package": "HsOpenSSL",
          "signature": "DHP -\u003e IO DH",
          "source": "src/OpenSSL-DH.html#genDH",
          "type": "function"
        },
        "index": {
          "description": "The first step of key exchange Public and private keys are generated",
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "genDH",
          "normalized": "DHP-\u003eIO DH",
          "package": "HsOpenSSL",
          "partial": "DH",
          "signature": "DHP-\u003eIO DH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#v:genDH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egenDHParams\u003c/a\u003e\u003c/code\u003e gen n\u003c/code\u003e generates \u003ccode\u003en\u003c/code\u003e-bit long DH parameters.\n\u003c/p\u003e",
          "module": "OpenSSL.DH",
          "name": "genDHParams",
          "package": "HsOpenSSL",
          "signature": "DHGen -\u003e Int -\u003e IO DHP",
          "source": "src/OpenSSL-DH.html#genDHParams",
          "type": "function"
        },
        "index": {
          "description": "genDHParams gen generates bit long DH parameters",
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "genDHParams",
          "normalized": "DHGen-\u003eInt-\u003eIO DHP",
          "package": "HsOpenSSL",
          "partial": "DHParams",
          "signature": "DHGen-\u003eInt-\u003eIO DHP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#v:genDHParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet DH parameters length (in bits).\n\u003c/p\u003e",
          "module": "OpenSSL.DH",
          "name": "getDHLength",
          "package": "HsOpenSSL",
          "signature": "DHP -\u003e IO Int",
          "source": "src/OpenSSL-DH.html#getDHLength",
          "type": "function"
        },
        "index": {
          "description": "Get DH parameters length in bits",
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "getDHLength",
          "normalized": "DHP-\u003eIO Int",
          "package": "HsOpenSSL",
          "partial": "DHLength",
          "signature": "DHP-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#v:getDHLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet parameters of a key exchange.\n\u003c/p\u003e",
          "module": "OpenSSL.DH",
          "name": "getDHParams",
          "package": "HsOpenSSL",
          "signature": "DH -\u003e DHP",
          "source": "src/OpenSSL-DH.html#getDHParams",
          "type": "function"
        },
        "index": {
          "description": "Get parameters of key exchange",
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "getDHParams",
          "normalized": "DH-\u003eDHP",
          "package": "HsOpenSSL",
          "partial": "DHParams",
          "signature": "DH-\u003eDHP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#v:getDHParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the public key.\n\u003c/p\u003e",
          "module": "OpenSSL.DH",
          "name": "getDHPublicKey",
          "package": "HsOpenSSL",
          "signature": "DH -\u003e IO Integer",
          "source": "src/OpenSSL-DH.html#getDHPublicKey",
          "type": "function"
        },
        "index": {
          "description": "Get the public key",
          "hierarchy": "OpenSSL DH",
          "module": "OpenSSL.DH",
          "name": "getDHPublicKey",
          "normalized": "DH-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "DHPublic Key",
          "signature": "DH-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DH.html#v:getDHPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Digital Signature Algorithm (FIPS 186-2).\n   See \u003ca\u003ehttp://www.openssl.org/docs/crypto/dsa.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.DSA",
          "name": "DSA",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-DSA.html",
          "type": "module"
        },
        "index": {
          "description": "The Digital Signature Algorithm FIPS See http www.openssl.org docs crypto dsa.html",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "DSA",
          "package": "HsOpenSSL",
          "partial": "DSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eDSAKey\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eDSAPubKey\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDSAKeyPair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "DSAKey",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-DSA.html#DSAKey",
          "type": "class"
        },
        "index": {
          "description": "DSAKey is either DSAPubKey or DSAKeyPair",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "DSAKey",
          "package": "HsOpenSSL",
          "partial": "DSAKey",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#t:DSAKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a DSA keypair, includes parameters p, q, g, public and private.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "DSAKeyPair",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-DSA.html#DSAKeyPair",
          "type": "data"
        },
        "index": {
          "description": "The type of DSA keypair includes parameters public and private",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "DSAKeyPair",
          "package": "HsOpenSSL",
          "partial": "DSAKey Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#t:DSAKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a DSA public key, includes parameters p, q, g and public.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "DSAPubKey",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-DSA.html#DSAPubKey",
          "type": "data"
        },
        "index": {
          "description": "The type of DSA public key includes parameters and public",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "DSAPubKey",
          "package": "HsOpenSSL",
          "partial": "DSAPub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#t:DSAPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.DSA",
          "name": "absorbDSAPtr",
          "package": "HsOpenSSL",
          "signature": "Ptr DSA -\u003e IO (Maybe k)",
          "source": "src/OpenSSL-DSA.html#absorbDSAPtr",
          "type": "method"
        },
        "index": {
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "absorbDSAPtr",
          "normalized": "Ptr DSA-\u003eIO(Maybe a)",
          "package": "HsOpenSSL",
          "partial": "DSAPtr",
          "signature": "Ptr DSA-\u003eIO(Maybe k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:absorbDSAPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the public generator of subgroup of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "dsaG",
          "package": "HsOpenSSL",
          "signature": "k -\u003e Integer",
          "source": "src/OpenSSL-DSA.html#dsaG",
          "type": "method"
        },
        "index": {
          "description": "Return the public generator of subgroup of the key",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "dsaG",
          "normalized": "a-\u003eInteger",
          "package": "HsOpenSSL",
          "signature": "k-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:dsaG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a DSAKeyPair object to a tuple of its members in the\n   order p, q, g, public and private.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "dsaKeyPairToTuple",
          "package": "HsOpenSSL",
          "signature": "DSAKeyPair -\u003e (Integer, Integer, Integer, Integer, Integer)",
          "source": "src/OpenSSL-DSA.html#dsaKeyPairToTuple",
          "type": "function"
        },
        "index": {
          "description": "Convert DSAKeyPair object to tuple of its members in the order public and private",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "dsaKeyPairToTuple",
          "normalized": "DSAKeyPair-\u003e(Integer,Integer,Integer,Integer,Integer)",
          "package": "HsOpenSSL",
          "partial": "Key Pair To Tuple",
          "signature": "DSAKeyPair-\u003e(Integer,Integer,Integer,Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:dsaKeyPairToTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the public prime number of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "dsaP",
          "package": "HsOpenSSL",
          "signature": "k -\u003e Integer",
          "source": "src/OpenSSL-DSA.html#dsaP",
          "type": "method"
        },
        "index": {
          "description": "Return the public prime number of the key",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "dsaP",
          "normalized": "a-\u003eInteger",
          "package": "HsOpenSSL",
          "signature": "k-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:dsaP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the private key \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "dsaPrivate",
          "package": "HsOpenSSL",
          "signature": "DSAKeyPair -\u003e Integer",
          "source": "src/OpenSSL-DSA.html#dsaPrivate",
          "type": "function"
        },
        "index": {
          "description": "Return the private key",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "dsaPrivate",
          "normalized": "DSAKeyPair-\u003eInteger",
          "package": "HsOpenSSL",
          "partial": "Private",
          "signature": "DSAKeyPair-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:dsaPrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a DSAPubKey object to a tuple of its members in the\n   order p, q, g, and public.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "dsaPubKeyToTuple",
          "package": "HsOpenSSL",
          "signature": "DSAKeyPair -\u003e (Integer, Integer, Integer, Integer)",
          "source": "src/OpenSSL-DSA.html#dsaPubKeyToTuple",
          "type": "function"
        },
        "index": {
          "description": "Convert DSAPubKey object to tuple of its members in the order and public",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "dsaPubKeyToTuple",
          "normalized": "DSAKeyPair-\u003e(Integer,Integer,Integer,Integer)",
          "package": "HsOpenSSL",
          "partial": "Pub Key To Tuple",
          "signature": "DSAKeyPair-\u003e(Integer,Integer,Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:dsaPubKeyToTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the public key \u003ccode\u003ey = g^x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "dsaPublic",
          "package": "HsOpenSSL",
          "signature": "k -\u003e Integer",
          "source": "src/OpenSSL-DSA.html#dsaPublic",
          "type": "method"
        },
        "index": {
          "description": "Return the public key",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "dsaPublic",
          "normalized": "a-\u003eInteger",
          "package": "HsOpenSSL",
          "partial": "Public",
          "signature": "k-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:dsaPublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the public 160-bit subprime, \u003ccode\u003eq | p - 1\u003c/code\u003e of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "dsaQ",
          "package": "HsOpenSSL",
          "signature": "k -\u003e Integer",
          "source": "src/OpenSSL-DSA.html#dsaQ",
          "type": "method"
        },
        "index": {
          "description": "Return the public bit subprime of the key",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "dsaQ",
          "normalized": "a-\u003eInteger",
          "package": "HsOpenSSL",
          "signature": "k-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:dsaQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length of key.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "dsaSize",
          "package": "HsOpenSSL",
          "signature": "k -\u003e Int",
          "source": "src/OpenSSL-DSA.html#dsaSize",
          "type": "method"
        },
        "index": {
          "description": "Return the length of key",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "dsaSize",
          "normalized": "a-\u003eInt",
          "package": "HsOpenSSL",
          "partial": "Size",
          "signature": "k-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:dsaSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new DSA keypair, given valid parameters\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "generateDSAKey",
          "package": "HsOpenSSL",
          "signature": "Integer-\u003e Integer-\u003e Integer-\u003e IO DSAKeyPair",
          "type": "function"
        },
        "index": {
          "description": "Generate new DSA keypair given valid parameters",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "generateDSAKey",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eIO DSAKeyPair",
          "package": "HsOpenSSL",
          "partial": "DSAKey",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eIO DSAKeyPair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:generateDSAKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate DSA parameters (*not* a key, but required for a key). This is a\n   compute intensive operation. See FIPS 186-2, app 2. This agrees with the\n   test vectors given in FIP 186-2, app 5\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "generateDSAParameters",
          "package": "HsOpenSSL",
          "signature": "Int-\u003e Maybe ByteString-\u003e IO (Int, Int, Integer, Integer, Integer)",
          "type": "function"
        },
        "index": {
          "description": "Generate DSA parameters not key but required for key This is compute intensive operation See FIPS app This agrees with the test vectors given in FIP app",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "generateDSAParameters",
          "normalized": "Int-\u003eMaybe ByteString-\u003eIO(Int,Int,Integer,Integer,Integer)",
          "package": "HsOpenSSL",
          "partial": "DSAParameters",
          "signature": "Int-\u003eMaybe ByteString-\u003eIO(Int,Int,Integer,Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:generateDSAParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA utility function to generate both the parameters and the key pair at the\n   same time. Saves serialising and deserialising the parameters too\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "generateDSAParametersAndKey",
          "package": "HsOpenSSL",
          "signature": "Int-\u003e Maybe ByteString-\u003e IO DSAKeyPair",
          "type": "function"
        },
        "index": {
          "description": "utility function to generate both the parameters and the key pair at the same time Saves serialising and deserialising the parameters too",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "generateDSAParametersAndKey",
          "normalized": "Int-\u003eMaybe ByteString-\u003eIO DSAKeyPair",
          "package": "HsOpenSSL",
          "partial": "DSAParameters And Key",
          "signature": "Int-\u003eMaybe ByteString-\u003eIO DSAKeyPair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:generateDSAParametersAndKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.DSA",
          "name": "peekDSAPtr",
          "package": "HsOpenSSL",
          "signature": "Ptr DSA -\u003e IO (Maybe k)",
          "source": "src/OpenSSL-DSA.html#peekDSAPtr",
          "type": "method"
        },
        "index": {
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "peekDSAPtr",
          "normalized": "Ptr DSA-\u003eIO(Maybe a)",
          "package": "HsOpenSSL",
          "partial": "DSAPtr",
          "signature": "Ptr DSA-\u003eIO(Maybe k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:peekDSAPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign pre-digested data. The DSA specs call for SHA1 to be used so, if you\n   use anything else, YMMV. Returns a pair of Integers which, together, are\n   the signature\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "signDigestedDataWithDSA",
          "package": "HsOpenSSL",
          "signature": "DSAKeyPair -\u003e ByteString -\u003e IO (Integer, Integer)",
          "source": "src/OpenSSL-DSA.html#signDigestedDataWithDSA",
          "type": "function"
        },
        "index": {
          "description": "Sign pre-digested data The DSA specs call for SHA1 to be used so if you use anything else YMMV Returns pair of Integers which together are the signature",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "signDigestedDataWithDSA",
          "normalized": "DSAKeyPair-\u003eByteString-\u003eIO(Integer,Integer)",
          "package": "HsOpenSSL",
          "partial": "Digested Data With DSA",
          "signature": "DSAKeyPair-\u003eByteString-\u003eIO(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:signDigestedDataWithDSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tuple of members (in the same format as from\n   \u003ccode\u003e\u003ca\u003edsaPubKeyToTuple\u003c/a\u003e\u003c/code\u003e) into a DSAPubKey object\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "tupleToDSAKeyPair",
          "package": "HsOpenSSL",
          "signature": "(Integer, Integer, Integer, Integer, Integer) -\u003e DSAKeyPair",
          "source": "src/OpenSSL-DSA.html#tupleToDSAKeyPair",
          "type": "function"
        },
        "index": {
          "description": "Convert tuple of members in the same format as from dsaPubKeyToTuple into DSAPubKey object",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "tupleToDSAKeyPair",
          "normalized": "(Integer,Integer,Integer,Integer,Integer)-\u003eDSAKeyPair",
          "package": "HsOpenSSL",
          "partial": "To DSAKey Pair",
          "signature": "(Integer,Integer,Integer,Integer,Integer)-\u003eDSAKeyPair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:tupleToDSAKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tuple of members (in the same format as from\n   \u003ccode\u003e\u003ca\u003edsaPubKeyToTuple\u003c/a\u003e\u003c/code\u003e) into a DSAPubKey object\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "tupleToDSAPubKey",
          "package": "HsOpenSSL",
          "signature": "(Integer, Integer, Integer, Integer) -\u003e DSAPubKey",
          "source": "src/OpenSSL-DSA.html#tupleToDSAPubKey",
          "type": "function"
        },
        "index": {
          "description": "Convert tuple of members in the same format as from dsaPubKeyToTuple into DSAPubKey object",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "tupleToDSAPubKey",
          "normalized": "(Integer,Integer,Integer,Integer)-\u003eDSAPubKey",
          "package": "HsOpenSSL",
          "partial": "To DSAPub Key",
          "signature": "(Integer,Integer,Integer,Integer)-\u003eDSAPubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:tupleToDSAPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify pre-digested data given a signature.\n\u003c/p\u003e",
          "module": "OpenSSL.DSA",
          "name": "verifyDigestedDataWithDSA",
          "package": "HsOpenSSL",
          "signature": "k -\u003e ByteString -\u003e (Integer, Integer) -\u003e IO Bool",
          "source": "src/OpenSSL-DSA.html#verifyDigestedDataWithDSA",
          "type": "function"
        },
        "index": {
          "description": "Verify pre-digested data given signature",
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "verifyDigestedDataWithDSA",
          "normalized": "a-\u003eByteString-\u003e(Integer,Integer)-\u003eIO Bool",
          "package": "HsOpenSSL",
          "partial": "Digested Data With DSA",
          "signature": "k-\u003eByteString-\u003e(Integer,Integer)-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:verifyDigestedDataWithDSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.DSA",
          "name": "withDSAPtr",
          "package": "HsOpenSSL",
          "signature": "k -\u003e (Ptr DSA -\u003e IO a) -\u003e IO a",
          "source": "src/OpenSSL-DSA.html#withDSAPtr",
          "type": "method"
        },
        "index": {
          "hierarchy": "OpenSSL DSA",
          "module": "OpenSSL.DSA",
          "name": "withDSAPtr",
          "normalized": "a-\u003e(Ptr DSA-\u003eIO b)-\u003eIO b",
          "package": "HsOpenSSL",
          "partial": "DSAPtr",
          "signature": "k-\u003e(Ptr DSA-\u003eIO a)-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-DSA.html#v:withDSAPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to Base64 codec.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.EVP.Base64",
          "name": "Base64",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Base64.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to Base64 codec",
          "hierarchy": "OpenSSL EVP Base64",
          "module": "OpenSSL.EVP.Base64",
          "name": "Base64",
          "package": "HsOpenSSL",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Base64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeBase64\u003c/a\u003e\u003c/code\u003e str\u003c/code\u003e lazilly decodes a stream of data from\n Base64. The string doesn't have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Base64",
          "name": "decodeBase64",
          "package": "HsOpenSSL",
          "signature": "String -\u003e String",
          "source": "src/OpenSSL-EVP-Base64.html#decodeBase64",
          "type": "function"
        },
        "index": {
          "description": "decodeBase64 str lazilly decodes stream of data from Base64 The string doesn have to be finite",
          "hierarchy": "OpenSSL EVP Base64",
          "module": "OpenSSL.EVP.Base64",
          "name": "decodeBase64",
          "normalized": "String-\u003eString",
          "package": "HsOpenSSL",
          "partial": "Base",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Base64.html#v:decodeBase64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeBase64BS\u003c/a\u003e\u003c/code\u003e bs\u003c/code\u003e strictly decodes a chunk of data from\n Base64.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Base64",
          "name": "decodeBase64BS",
          "package": "HsOpenSSL",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/OpenSSL-EVP-Base64.html#decodeBase64BS",
          "type": "function"
        },
        "index": {
          "description": "decodeBase64BS bs strictly decodes chunk of data from Base64",
          "hierarchy": "OpenSSL EVP Base64",
          "module": "OpenSSL.EVP.Base64",
          "name": "decodeBase64BS",
          "normalized": "ByteString-\u003eByteString",
          "package": "HsOpenSSL",
          "partial": "Base BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Base64.html#v:decodeBase64BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeBase64LBS\u003c/a\u003e\u003c/code\u003e lbs\u003c/code\u003e lazilly decodes a stream of data from\n Base64. The string doesn't have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Base64",
          "name": "decodeBase64LBS",
          "package": "HsOpenSSL",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/OpenSSL-EVP-Base64.html#decodeBase64LBS",
          "type": "function"
        },
        "index": {
          "description": "decodeBase64LBS lbs lazilly decodes stream of data from Base64 The string doesn have to be finite",
          "hierarchy": "OpenSSL EVP Base64",
          "module": "OpenSSL.EVP.Base64",
          "name": "decodeBase64LBS",
          "normalized": "ByteString-\u003eByteString",
          "package": "HsOpenSSL",
          "partial": "Base LBS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Base64.html#v:decodeBase64LBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eencodeBase64\u003c/a\u003e\u003c/code\u003e str\u003c/code\u003e lazilly encodes a stream of data to\n Base64. The string doesn't have to be finite. Note that the string\n must not contain any letters which aren't in the range of U+0000 -\n U+00FF.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Base64",
          "name": "encodeBase64",
          "package": "HsOpenSSL",
          "signature": "String -\u003e String",
          "source": "src/OpenSSL-EVP-Base64.html#encodeBase64",
          "type": "function"
        },
        "index": {
          "description": "encodeBase64 str lazilly encodes stream of data to Base64 The string doesn have to be finite Note that the string must not contain any letters which aren in the range of FF",
          "hierarchy": "OpenSSL EVP Base64",
          "module": "OpenSSL.EVP.Base64",
          "name": "encodeBase64",
          "normalized": "String-\u003eString",
          "package": "HsOpenSSL",
          "partial": "Base",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Base64.html#v:encodeBase64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eencodeBase64BS\u003c/a\u003e\u003c/code\u003e bs\u003c/code\u003e strictly encodes a chunk of data to Base64.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Base64",
          "name": "encodeBase64BS",
          "package": "HsOpenSSL",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/OpenSSL-EVP-Base64.html#encodeBase64BS",
          "type": "function"
        },
        "index": {
          "description": "encodeBase64BS bs strictly encodes chunk of data to Base64",
          "hierarchy": "OpenSSL EVP Base64",
          "module": "OpenSSL.EVP.Base64",
          "name": "encodeBase64BS",
          "normalized": "ByteString-\u003eByteString",
          "package": "HsOpenSSL",
          "partial": "Base BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Base64.html#v:encodeBase64BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eencodeBase64LBS\u003c/a\u003e\u003c/code\u003e lbs\u003c/code\u003e lazilly encodes a stream of data to\n Base64. The string doesn't have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Base64",
          "name": "encodeBase64LBS",
          "package": "HsOpenSSL",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/OpenSSL-EVP-Base64.html#encodeBase64LBS",
          "type": "function"
        },
        "index": {
          "description": "encodeBase64LBS lbs lazilly encodes stream of data to Base64 The string doesn have to be finite",
          "hierarchy": "OpenSSL EVP Base64",
          "module": "OpenSSL.EVP.Base64",
          "name": "encodeBase64LBS",
          "normalized": "ByteString-\u003eByteString",
          "package": "HsOpenSSL",
          "partial": "Base LBS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Base64.html#v:encodeBase64LBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to symmetric cipher algorithms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.EVP.Cipher",
          "name": "Cipher",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Cipher.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to symmetric cipher algorithms",
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "Cipher",
          "package": "HsOpenSSL",
          "partial": "Cipher",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCipher\u003c/code\u003e is an opaque object that represents an algorithm of\n symmetric cipher.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Cipher",
          "name": "Cipher",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Internal.html#Cipher",
          "type": "data"
        },
        "index": {
          "description": "Cipher is an opaque object that represents an algorithm of symmetric cipher",
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "Cipher",
          "package": "HsOpenSSL",
          "partial": "Cipher",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#t:Cipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCryptoMode\u003c/code\u003e represents instruction to \u003ccode\u003e\u003ca\u003ecipher\u003c/a\u003e\u003c/code\u003e and such like.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Cipher",
          "name": "CryptoMode",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Cipher.html#CryptoMode",
          "type": "data"
        },
        "index": {
          "description": "CryptoMode represents instruction to cipher and such like",
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "CryptoMode",
          "package": "HsOpenSSL",
          "partial": "Crypto Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#t:CryptoMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.EVP.Cipher",
          "name": "Decrypt",
          "package": "HsOpenSSL",
          "signature": "Decrypt",
          "source": "src/OpenSSL-EVP-Cipher.html#CryptoMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "Decrypt",
          "package": "HsOpenSSL",
          "partial": "Decrypt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#v:Decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.EVP.Cipher",
          "name": "Encrypt",
          "package": "HsOpenSSL",
          "signature": "Encrypt",
          "source": "src/OpenSSL-EVP-Cipher.html#CryptoMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "Encrypt",
          "package": "HsOpenSSL",
          "partial": "Encrypt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#v:Encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecipher\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e lazilly encrypts or decrypts a stream of data. The\n input string doesn't necessarily have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Cipher",
          "name": "cipher",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e String-\u003e String-\u003e CryptoMode-\u003e String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "cipher lazilly encrypts or decrypts stream of data The input string doesn necessarily have to be finite",
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "cipher",
          "normalized": "Cipher-\u003eString-\u003eString-\u003eCryptoMode-\u003eString-\u003eIO String",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003eString-\u003eString-\u003eCryptoMode-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#v:cipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecipherBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e strictly encrypts or decrypts a chunk of data.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Cipher",
          "name": "cipherBS",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e String-\u003e String-\u003e CryptoMode-\u003e ByteString-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "cipherBS strictly encrypts or decrypts chunk of data",
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "cipherBS",
          "normalized": "Cipher-\u003eString-\u003eString-\u003eCryptoMode-\u003eByteString-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "BS",
          "signature": "Cipher-\u003eString-\u003eString-\u003eCryptoMode-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#v:cipherBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecipherLBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e lazilly encrypts or decrypts a stream of data. The\n input string doesn't necessarily have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Cipher",
          "name": "cipherLBS",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e String-\u003e String-\u003e CryptoMode-\u003e ByteString-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "cipherLBS lazilly encrypts or decrypts stream of data The input string doesn necessarily have to be finite",
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "cipherLBS",
          "normalized": "Cipher-\u003eString-\u003eString-\u003eCryptoMode-\u003eByteString-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "LBS",
          "signature": "Cipher-\u003eString-\u003eString-\u003eCryptoMode-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#v:cipherLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt a lazy bytestring in a strict manner. Does not leak the keys.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Cipher",
          "name": "cipherStrictLBS",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e ByteString-\u003e ByteString-\u003e CryptoMode-\u003e ByteString-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encrypt lazy bytestring in strict manner Does not leak the keys",
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "cipherStrictLBS",
          "normalized": "Cipher-\u003eByteString-\u003eByteString-\u003eCryptoMode-\u003eByteString-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "Strict LBS",
          "signature": "Cipher-\u003eByteString-\u003eByteString-\u003eCryptoMode-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#v:cipherStrictLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetCipherByName\u003c/a\u003e\u003c/code\u003e name\u003c/code\u003e returns a symmetric cipher algorithm\n whose name is \u003ccode\u003ename\u003c/code\u003e. If no algorithms are found, the result is\n \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Cipher",
          "name": "getCipherByName",
          "package": "HsOpenSSL",
          "signature": "String -\u003e IO (Maybe Cipher)",
          "source": "src/OpenSSL-EVP-Cipher.html#getCipherByName",
          "type": "function"
        },
        "index": {
          "description": "getCipherByName name returns symmetric cipher algorithm whose name is name If no algorithms are found the result is Nothing",
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "getCipherByName",
          "normalized": "String-\u003eIO(Maybe Cipher)",
          "package": "HsOpenSSL",
          "partial": "Cipher By Name",
          "signature": "String-\u003eIO(Maybe Cipher)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#v:getCipherByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetCipherNames\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e returns a list of name of symmetric cipher\n algorithms.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Cipher",
          "name": "getCipherNames",
          "package": "HsOpenSSL",
          "signature": "IO [String]",
          "source": "src/OpenSSL-EVP-Cipher.html#getCipherNames",
          "type": "function"
        },
        "index": {
          "description": "getCipherNames returns list of name of symmetric cipher algorithms",
          "hierarchy": "OpenSSL EVP Cipher",
          "module": "OpenSSL.EVP.Cipher",
          "name": "getCipherNames",
          "normalized": "IO[String]",
          "package": "HsOpenSSL",
          "partial": "Cipher Names",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Cipher.html#v:getCipherNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to message digest algorithms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "Digest",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Digest.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to message digest algorithms",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "Digest",
          "package": "HsOpenSSL",
          "partial": "Digest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eDigest\u003c/code\u003e is an opaque object that represents an algorithm of\n message digest.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "Digest",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Internal.html#Digest",
          "type": "data"
        },
        "index": {
          "description": "Digest is an opaque object that represents an algorithm of message digest",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "Digest",
          "package": "HsOpenSSL",
          "partial": "Digest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#t:Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edigest\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e digests a stream of data. The string must\n not contain any letters which aren't in the range of U+0000 -\n U+00FF.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "digest",
          "package": "HsOpenSSL",
          "signature": "Digest -\u003e String -\u003e String",
          "source": "src/OpenSSL-EVP-Digest.html#digest",
          "type": "function"
        },
        "index": {
          "description": "digest digests stream of data The string must not contain any letters which aren in the range of FF",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "digest",
          "normalized": "Digest-\u003eString-\u003eString",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#v:digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edigestBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e digests a chunk of data.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "digestBS",
          "package": "HsOpenSSL",
          "signature": "Digest -\u003e ByteString -\u003e String",
          "source": "src/OpenSSL-EVP-Digest.html#digestBS",
          "type": "function"
        },
        "index": {
          "description": "digestBS digests chunk of data",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "digestBS",
          "normalized": "Digest-\u003eByteString-\u003eString",
          "package": "HsOpenSSL",
          "partial": "BS",
          "signature": "Digest-\u003eByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#v:digestBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edigestBS\u003c/a\u003e\u003c/code\u003e but returns \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "digestBS'",
          "package": "HsOpenSSL",
          "signature": "Digest -\u003e ByteString -\u003e ByteString",
          "source": "src/OpenSSL-EVP-Digest.html#digestBS%27",
          "type": "function"
        },
        "index": {
          "description": "Same as digestBS but returns ByteString instead",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "digestBS'",
          "normalized": "Digest-\u003eByteString-\u003eByteString",
          "package": "HsOpenSSL",
          "partial": "BS'",
          "signature": "Digest-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#v:digestBS-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edigestLBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e digests a stream of data.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "digestLBS",
          "package": "HsOpenSSL",
          "signature": "Digest -\u003e ByteString -\u003e String",
          "source": "src/OpenSSL-EVP-Digest.html#digestLBS",
          "type": "function"
        },
        "index": {
          "description": "digestLBS digests stream of data",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "digestLBS",
          "normalized": "Digest-\u003eByteString-\u003eString",
          "package": "HsOpenSSL",
          "partial": "LBS",
          "signature": "Digest-\u003eByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#v:digestLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetDigestByName\u003c/a\u003e\u003c/code\u003e name\u003c/code\u003e returns a message digest algorithm whose\n name is \u003ccode\u003ename\u003c/code\u003e. If no algorithms are found, the result is\n \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "getDigestByName",
          "package": "HsOpenSSL",
          "signature": "String -\u003e IO (Maybe Digest)",
          "source": "src/OpenSSL-EVP-Digest.html#getDigestByName",
          "type": "function"
        },
        "index": {
          "description": "getDigestByName name returns message digest algorithm whose name is name If no algorithms are found the result is Nothing",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "getDigestByName",
          "normalized": "String-\u003eIO(Maybe Digest)",
          "package": "HsOpenSSL",
          "partial": "Digest By Name",
          "signature": "String-\u003eIO(Maybe Digest)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#v:getDigestByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetDigestNames\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e returns a list of name of message digest\n algorithms.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "getDigestNames",
          "package": "HsOpenSSL",
          "signature": "IO [String]",
          "source": "src/OpenSSL-EVP-Digest.html#getDigestNames",
          "type": "function"
        },
        "index": {
          "description": "getDigestNames returns list of name of message digest algorithms",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "getDigestNames",
          "normalized": "IO[String]",
          "package": "HsOpenSSL",
          "partial": "Digest Names",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#v:getDigestNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a private key signing using the HMAC template with a given hash\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "hmacBS",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003e ByteString-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Perform private key signing using the HMAC template with given hash",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "hmacBS",
          "normalized": "Digest-\u003eByteString-\u003eByteString-\u003eByteString",
          "package": "HsOpenSSL",
          "partial": "BS",
          "signature": "Digest-\u003eByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#v:hmacBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a PKCS5-PBKDF2 SHA1-HMAC suitable for password hashing.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Digest",
          "name": "pkcs5_pbkdf2_hmac_sha1",
          "package": "HsOpenSSL",
          "signature": "ByteString-\u003e ByteString-\u003e Int-\u003e Int-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Calculate PKCS5-PBKDF2 SHA1-HMAC suitable for password hashing",
          "hierarchy": "OpenSSL EVP Digest",
          "module": "OpenSSL.EVP.Digest",
          "name": "pkcs5_pbkdf2_hmac_sha1",
          "normalized": "ByteString-\u003eByteString-\u003eInt-\u003eInt-\u003eByteString",
          "package": "HsOpenSSL",
          "signature": "ByteString-\u003eByteString-\u003eInt-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Digest.html#v:pkcs5_pbkdf2_hmac_sha1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAsymmetric cipher decryption using encrypted symmetric key. This\n is an opposite of \u003ca\u003eOpenSSL.EVP.Seal\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.EVP.Open",
          "name": "Open",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Open.html",
          "type": "module"
        },
        "index": {
          "description": "Asymmetric cipher decryption using encrypted symmetric key This is an opposite of OpenSSL.EVP.Seal",
          "hierarchy": "OpenSSL EVP Open",
          "module": "OpenSSL.EVP.Open",
          "name": "Open",
          "package": "HsOpenSSL",
          "partial": "Open",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Open.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e lazilly decrypts a stream of data. The input string\n doesn't necessarily have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Open",
          "name": "open",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e String-\u003e String-\u003e key-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "open lazilly decrypts stream of data The input string doesn necessarily have to be finite",
          "hierarchy": "OpenSSL EVP Open",
          "module": "OpenSSL.EVP.Open",
          "name": "open",
          "normalized": "Cipher-\u003eString-\u003eString-\u003ea-\u003eString-\u003eString",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003eString-\u003eString-\u003ekey-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Open.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eopenBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e decrypts a chunk of data.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Open",
          "name": "openBS",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e String-\u003e String-\u003e key-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "openBS decrypts chunk of data",
          "hierarchy": "OpenSSL EVP Open",
          "module": "OpenSSL.EVP.Open",
          "name": "openBS",
          "normalized": "Cipher-\u003eString-\u003eString-\u003ea-\u003eByteString-\u003eByteString",
          "package": "HsOpenSSL",
          "partial": "BS",
          "signature": "Cipher-\u003eString-\u003eString-\u003ekey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Open.html#v:openBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eopenLBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e lazilly decrypts a stream of data. The input string\n doesn't necessarily have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Open",
          "name": "openLBS",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e String-\u003e String-\u003e key-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "openLBS lazilly decrypts stream of data The input string doesn necessarily have to be finite",
          "hierarchy": "OpenSSL EVP Open",
          "module": "OpenSSL.EVP.Open",
          "name": "openLBS",
          "normalized": "Cipher-\u003eString-\u003eString-\u003ea-\u003eByteString-\u003eByteString",
          "package": "HsOpenSSL",
          "partial": "LBS",
          "signature": "Cipher-\u003eString-\u003eString-\u003ekey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Open.html#v:openLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to asymmetric cipher keypair.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.EVP.PKey",
          "name": "PKey",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-PKey.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to asymmetric cipher keypair",
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "PKey",
          "package": "HsOpenSSL",
          "partial": "PKey",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of this class has both of public and private portions of\n a keypair.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.PKey",
          "name": "KeyPair",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-PKey.html#KeyPair",
          "type": "class"
        },
        "index": {
          "description": "Instances of this class has both of public and private portions of keypair",
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "KeyPair",
          "package": "HsOpenSSL",
          "partial": "Key Pair",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#t:KeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.EVP.PKey",
          "name": "PKey",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Internal.html#PKey",
          "type": "class"
        },
        "index": {
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "PKey",
          "package": "HsOpenSSL",
          "partial": "PKey",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#t:PKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of this class has at least public portion of a\n keypair. They might or might not have the private key.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.PKey",
          "name": "PublicKey",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-PKey.html#PublicKey",
          "type": "class"
        },
        "index": {
          "description": "Instances of this class has at least public portion of keypair They might or might not have the private key",
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "PublicKey",
          "package": "HsOpenSSL",
          "partial": "Public Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#t:PublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an opaque type to hold an arbitrary keypair in it. The\n actual key type can be safelly type-casted using \u003ccode\u003e\u003ca\u003etoKeyPair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.PKey",
          "name": "SomeKeyPair",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-PKey.html#SomeKeyPair",
          "type": "data"
        },
        "index": {
          "description": "This is an opaque type to hold an arbitrary keypair in it The actual key type can be safelly type-casted using toKeyPair",
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "SomeKeyPair",
          "package": "HsOpenSSL",
          "partial": "Some Key Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#t:SomeKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an opaque type to hold an arbitrary public key in it. The\n actual key type can be safelly type-casted using \u003ccode\u003e\u003ca\u003etoPublicKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.PKey",
          "name": "SomePublicKey",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-PKey.html#SomePublicKey",
          "type": "data"
        },
        "index": {
          "description": "This is an opaque type to hold an arbitrary public key in it The actual key type can be safelly type-casted using toPublicKey",
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "SomePublicKey",
          "package": "HsOpenSSL",
          "partial": "Some Public Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#t:SomePublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an arbitrary keypair into polymorphic type \u003ccode\u003e\u003ca\u003eSomeKeyPair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.PKey",
          "name": "fromKeyPair",
          "package": "HsOpenSSL",
          "signature": "a -\u003e SomeKeyPair",
          "source": "src/OpenSSL-EVP-PKey.html#fromKeyPair",
          "type": "method"
        },
        "index": {
          "description": "Wrap an arbitrary keypair into polymorphic type SomeKeyPair",
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "fromKeyPair",
          "normalized": "a-\u003eSomeKeyPair",
          "package": "HsOpenSSL",
          "partial": "Key Pair",
          "signature": "a-\u003eSomeKeyPair",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#v:fromKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an arbitrary public key into polymorphic type\n \u003ccode\u003e\u003ca\u003eSomePublicKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.PKey",
          "name": "fromPublicKey",
          "package": "HsOpenSSL",
          "signature": "k -\u003e SomePublicKey",
          "source": "src/OpenSSL-EVP-PKey.html#fromPublicKey",
          "type": "method"
        },
        "index": {
          "description": "Wrap an arbitrary public key into polymorphic type SomePublicKey",
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "fromPublicKey",
          "normalized": "a-\u003eSomePublicKey",
          "package": "HsOpenSSL",
          "partial": "Public Key",
          "signature": "k-\u003eSomePublicKey",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#v:fromPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast from the polymorphic type \u003ccode\u003e\u003ca\u003eSomeKeyPair\u003c/a\u003e\u003c/code\u003e to the concrete\n type. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if failed.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.PKey",
          "name": "toKeyPair",
          "package": "HsOpenSSL",
          "signature": "SomeKeyPair -\u003e Maybe a",
          "source": "src/OpenSSL-EVP-PKey.html#toKeyPair",
          "type": "method"
        },
        "index": {
          "description": "Cast from the polymorphic type SomeKeyPair to the concrete type Return Nothing if failed",
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "toKeyPair",
          "normalized": "SomeKeyPair-\u003eMaybe a",
          "package": "HsOpenSSL",
          "partial": "Key Pair",
          "signature": "SomeKeyPair-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#v:toKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast from the polymorphic type \u003ccode\u003e\u003ca\u003eSomePublicKey\u003c/a\u003e\u003c/code\u003e to the concrete\n type. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if failed.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.PKey",
          "name": "toPublicKey",
          "package": "HsOpenSSL",
          "signature": "SomePublicKey -\u003e Maybe k",
          "source": "src/OpenSSL-EVP-PKey.html#toPublicKey",
          "type": "method"
        },
        "index": {
          "description": "Cast from the polymorphic type SomePublicKey to the concrete type Return Nothing if failed",
          "hierarchy": "OpenSSL EVP PKey",
          "module": "OpenSSL.EVP.PKey",
          "name": "toPublicKey",
          "normalized": "SomePublicKey-\u003eMaybe a",
          "package": "HsOpenSSL",
          "partial": "Public Key",
          "signature": "SomePublicKey-\u003eMaybe k",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-PKey.html#v:toPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAsymmetric cipher decryption using encrypted symmetric key. This\n is an opposite of \u003ca\u003eOpenSSL.EVP.Open\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.EVP.Seal",
          "name": "Seal",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Seal.html",
          "type": "module"
        },
        "index": {
          "description": "Asymmetric cipher decryption using encrypted symmetric key This is an opposite of OpenSSL.EVP.Open",
          "hierarchy": "OpenSSL EVP Seal",
          "module": "OpenSSL.EVP.Seal",
          "name": "Seal",
          "package": "HsOpenSSL",
          "partial": "Seal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Seal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eseal\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e lazilly encrypts a stream of data. The input string\n doesn't necessarily have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Seal",
          "name": "seal",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e [SomePublicKey]-\u003e String-\u003e IO (String, [String], String)",
          "type": "function"
        },
        "index": {
          "description": "seal lazilly encrypts stream of data The input string doesn necessarily have to be finite",
          "hierarchy": "OpenSSL EVP Seal",
          "module": "OpenSSL.EVP.Seal",
          "name": "seal",
          "normalized": "Cipher-\u003e[SomePublicKey]-\u003eString-\u003eIO(String,[String],String)",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e[SomePublicKey]-\u003eString-\u003eIO(String,[String],String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Seal.html#v:seal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esealBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e strictly encrypts a chunk of data.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Seal",
          "name": "sealBS",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e [SomePublicKey]-\u003e ByteString-\u003e IO (ByteString, [String], String)",
          "type": "function"
        },
        "index": {
          "description": "sealBS strictly encrypts chunk of data",
          "hierarchy": "OpenSSL EVP Seal",
          "module": "OpenSSL.EVP.Seal",
          "name": "sealBS",
          "normalized": "Cipher-\u003e[SomePublicKey]-\u003eByteString-\u003eIO(ByteString,[String],String)",
          "package": "HsOpenSSL",
          "partial": "BS",
          "signature": "Cipher-\u003e[SomePublicKey]-\u003eByteString-\u003eIO(ByteString,[String],String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Seal.html#v:sealBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esealLBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e lazilly encrypts a stream of data. The input string\n doesn't necessarily have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Seal",
          "name": "sealLBS",
          "package": "HsOpenSSL",
          "signature": "Cipher-\u003e [SomePublicKey]-\u003e ByteString-\u003e IO (ByteString, [String], String)",
          "type": "function"
        },
        "index": {
          "description": "sealLBS lazilly encrypts stream of data The input string doesn necessarily have to be finite",
          "hierarchy": "OpenSSL EVP Seal",
          "module": "OpenSSL.EVP.Seal",
          "name": "sealLBS",
          "normalized": "Cipher-\u003e[SomePublicKey]-\u003eByteString-\u003eIO(ByteString,[String],String)",
          "package": "HsOpenSSL",
          "partial": "LBS",
          "signature": "Cipher-\u003e[SomePublicKey]-\u003eByteString-\u003eIO(ByteString,[String],String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Seal.html#v:sealLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMessage signing using asymmetric cipher and message digest\n algorithm. This is an opposite of \u003ca\u003eOpenSSL.EVP.Verify\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.EVP.Sign",
          "name": "Sign",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Sign.html",
          "type": "module"
        },
        "index": {
          "description": "Message signing using asymmetric cipher and message digest algorithm This is an opposite of OpenSSL.EVP.Verify",
          "hierarchy": "OpenSSL EVP Sign",
          "module": "OpenSSL.EVP.Sign",
          "name": "Sign",
          "package": "HsOpenSSL",
          "partial": "Sign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Sign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esign\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e generates a signature from a stream of data. The string\n must not contain any letters which aren't in the range of U+0000 -\n U+00FF.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Sign",
          "name": "sign",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003e key-\u003e String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "sign generates signature from stream of data The string must not contain any letters which aren in the range of FF",
          "hierarchy": "OpenSSL EVP Sign",
          "module": "OpenSSL.EVP.Sign",
          "name": "sign",
          "normalized": "Digest-\u003ea-\u003eString-\u003eIO String",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003ekey-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Sign.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esignBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e generates a signature from a chunk of data.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Sign",
          "name": "signBS",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003e key-\u003e ByteString-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "signBS generates signature from chunk of data",
          "hierarchy": "OpenSSL EVP Sign",
          "module": "OpenSSL.EVP.Sign",
          "name": "signBS",
          "normalized": "Digest-\u003ea-\u003eByteString-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "BS",
          "signature": "Digest-\u003ekey-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Sign.html#v:signBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esignLBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e generates a signature from a stream of data.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Sign",
          "name": "signLBS",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003e key-\u003e ByteString-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "signLBS generates signature from stream of data",
          "hierarchy": "OpenSSL EVP Sign",
          "module": "OpenSSL.EVP.Sign",
          "name": "signLBS",
          "normalized": "Digest-\u003ea-\u003eByteString-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "LBS",
          "signature": "Digest-\u003ekey-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Sign.html#v:signLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMessage verification using asymmetric cipher and message digest\n algorithm. This is an opposite of \u003ca\u003eOpenSSL.EVP.Sign\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.EVP.Verify",
          "name": "Verify",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Verify.html",
          "type": "module"
        },
        "index": {
          "description": "Message verification using asymmetric cipher and message digest algorithm This is an opposite of OpenSSL.EVP.Sign",
          "hierarchy": "OpenSSL EVP Verify",
          "module": "OpenSSL.EVP.Verify",
          "name": "Verify",
          "package": "HsOpenSSL",
          "partial": "Verify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Verify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eVerifyStatus\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a result of verification.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Verify",
          "name": "VerifyStatus",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-EVP-Verify.html#VerifyStatus",
          "type": "data"
        },
        "index": {
          "description": "VerifyStatus represents result of verification",
          "hierarchy": "OpenSSL EVP Verify",
          "module": "OpenSSL.EVP.Verify",
          "name": "VerifyStatus",
          "package": "HsOpenSSL",
          "partial": "Verify Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Verify.html#t:VerifyStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.EVP.Verify",
          "name": "VerifyFailure",
          "package": "HsOpenSSL",
          "signature": "VerifyFailure",
          "source": "src/OpenSSL-EVP-Verify.html#VerifyStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL EVP Verify",
          "module": "OpenSSL.EVP.Verify",
          "name": "VerifyFailure",
          "package": "HsOpenSSL",
          "partial": "Verify Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Verify.html#v:VerifyFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.EVP.Verify",
          "name": "VerifySuccess",
          "package": "HsOpenSSL",
          "signature": "VerifySuccess",
          "source": "src/OpenSSL-EVP-Verify.html#VerifyStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL EVP Verify",
          "module": "OpenSSL.EVP.Verify",
          "name": "VerifySuccess",
          "package": "HsOpenSSL",
          "partial": "Verify Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Verify.html#v:VerifySuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003everify\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e verifies a signature and a stream of data. The string\n must not contain any letters which aren't in the range of U+0000 -\n U+00FF.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Verify",
          "name": "verify",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003e String-\u003e key-\u003e String-\u003e IO VerifyStatus",
          "type": "function"
        },
        "index": {
          "description": "verify verifies signature and stream of data The string must not contain any letters which aren in the range of FF",
          "hierarchy": "OpenSSL EVP Verify",
          "module": "OpenSSL.EVP.Verify",
          "name": "verify",
          "normalized": "Digest-\u003eString-\u003ea-\u003eString-\u003eIO VerifyStatus",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003eString-\u003ekey-\u003eString-\u003eIO VerifyStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Verify.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003everifyBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e verifies a signature and a chunk of data.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Verify",
          "name": "verifyBS",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003e String-\u003e key-\u003e ByteString-\u003e IO VerifyStatus",
          "type": "function"
        },
        "index": {
          "description": "verifyBS verifies signature and chunk of data",
          "hierarchy": "OpenSSL EVP Verify",
          "module": "OpenSSL.EVP.Verify",
          "name": "verifyBS",
          "normalized": "Digest-\u003eString-\u003ea-\u003eByteString-\u003eIO VerifyStatus",
          "package": "HsOpenSSL",
          "partial": "BS",
          "signature": "Digest-\u003eString-\u003ekey-\u003eByteString-\u003eIO VerifyStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Verify.html#v:verifyBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003everifyLBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e verifies a signature of a stream of data.\n\u003c/p\u003e",
          "module": "OpenSSL.EVP.Verify",
          "name": "verifyLBS",
          "package": "HsOpenSSL",
          "signature": "Digest-\u003e String-\u003e key-\u003e ByteString-\u003e IO VerifyStatus",
          "type": "function"
        },
        "index": {
          "description": "verifyLBS verifies signature of stream of data",
          "hierarchy": "OpenSSL EVP Verify",
          "module": "OpenSSL.EVP.Verify",
          "name": "verifyLBS",
          "normalized": "Digest-\u003eString-\u003ea-\u003eByteString-\u003eIO VerifyStatus",
          "package": "HsOpenSSL",
          "partial": "LBS",
          "signature": "Digest-\u003eString-\u003ekey-\u003eByteString-\u003eIO VerifyStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-EVP-Verify.html#v:verifyLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to PEM routines.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.PEM",
          "name": "PEM",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PEM.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to PEM routines",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PEM",
          "package": "HsOpenSSL",
          "partial": "PEM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePemPasswordCallback\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a callback function to supply a\n password.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eInt\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The maximum length of the password to be accepted.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ePemPasswordRWState\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The context.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eIO String\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The resulting password.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "OpenSSL.PEM",
          "name": "PemPasswordCallback",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PEM.html#PemPasswordCallback",
          "type": "type"
        },
        "index": {
          "description": "PemPasswordCallback represents callback function to supply password Int The maximum length of the password to be accepted PemPasswordRWState The context IO String The resulting password",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PemPasswordCallback",
          "package": "HsOpenSSL",
          "partial": "Pem Password Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#t:PemPasswordCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePemPasswordRWState\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a context of\n \u003ccode\u003e\u003ca\u003ePemPasswordCallback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PemPasswordRWState",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PEM.html#PemPasswordRWState",
          "type": "data"
        },
        "index": {
          "description": "PemPasswordRWState represents context of PemPasswordCallback",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PemPasswordRWState",
          "package": "HsOpenSSL",
          "partial": "Pem Password RWState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#t:PemPasswordRWState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePemPasswordSupply\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a way to supply password.\n\u003c/p\u003e\u003cp\u003eFIXME: using PwTTY causes an error but I don't know why:\n \"error:0906406D:PEM routines:DEF_CALLBACK:problems getting\n password\"\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PemPasswordSupply",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PEM.html#PemPasswordSupply",
          "type": "data"
        },
        "index": {
          "description": "PemPasswordSupply represents way to supply password FIXME using PwTTY causes an error but don know why error PEM routines DEF CALLBACK problems getting password",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PemPasswordSupply",
          "package": "HsOpenSSL",
          "partial": "Pem Password Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#t:PemPasswordSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePemX509ReqFormat\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents format of PKCS#10 certificate\n request.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PemX509ReqFormat",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PEM.html#PemX509ReqFormat",
          "type": "data"
        },
        "index": {
          "description": "PemX509ReqFormat represents format of PKCS certificate request",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PemX509ReqFormat",
          "package": "HsOpenSSL",
          "partial": "Pem Req Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#t:PemX509ReqFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epassword in a static bytestring.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PwBS",
          "package": "HsOpenSSL",
          "signature": "PwBS ByteString",
          "source": "src/OpenSSL-PEM.html#PemPasswordSupply",
          "type": "function"
        },
        "index": {
          "description": "password in static bytestring",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PwBS",
          "package": "HsOpenSSL",
          "partial": "Pw BS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:PwBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget a\n   password\n   by a\n   callback\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PwCallback",
          "package": "HsOpenSSL",
          "signature": "PwCallback PemPasswordCallback",
          "source": "src/OpenSSL-PEM.html#PemPasswordSupply",
          "type": "function"
        },
        "index": {
          "description": "get password by callback",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PwCallback",
          "package": "HsOpenSSL",
          "partial": "Pw Callback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:PwCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno password\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PwNone",
          "package": "HsOpenSSL",
          "signature": "PwNone",
          "source": "src/OpenSSL-PEM.html#PemPasswordSupply",
          "type": "function"
        },
        "index": {
          "description": "no password",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PwNone",
          "package": "HsOpenSSL",
          "partial": "Pw None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:PwNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe callback was called to get\n   a password to read something\n   encrypted.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PwRead",
          "package": "HsOpenSSL",
          "signature": "PwRead",
          "source": "src/OpenSSL-PEM.html#PemPasswordRWState",
          "type": "function"
        },
        "index": {
          "description": "The callback was called to get password to read something encrypted",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PwRead",
          "package": "HsOpenSSL",
          "partial": "Pw Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:PwRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epassword in a static string\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PwStr",
          "package": "HsOpenSSL",
          "signature": "PwStr String",
          "source": "src/OpenSSL-PEM.html#PemPasswordSupply",
          "type": "function"
        },
        "index": {
          "description": "password in static string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PwStr",
          "package": "HsOpenSSL",
          "partial": "Pw Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:PwStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a password from TTY\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PwTTY",
          "package": "HsOpenSSL",
          "signature": "PwTTY",
          "source": "src/OpenSSL-PEM.html#PemPasswordSupply",
          "type": "function"
        },
        "index": {
          "description": "read password from TTY",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PwTTY",
          "package": "HsOpenSSL",
          "partial": "Pw TTY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:PwTTY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe callback was called to get\n   a password to encrypt\n   something.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "PwWrite",
          "package": "HsOpenSSL",
          "signature": "PwWrite",
          "source": "src/OpenSSL-PEM.html#PemPasswordRWState",
          "type": "function"
        },
        "index": {
          "description": "The callback was called to get password to encrypt something",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "PwWrite",
          "package": "HsOpenSSL",
          "partial": "Pw Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:PwWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe new format, whose header is \"NEW\n   CERTIFICATE REQUEST\".\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "ReqNewFormat",
          "package": "HsOpenSSL",
          "signature": "ReqNewFormat",
          "source": "src/OpenSSL-PEM.html#PemX509ReqFormat",
          "type": "function"
        },
        "index": {
          "description": "The new format whose header is NEW CERTIFICATE REQUEST",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "ReqNewFormat",
          "package": "HsOpenSSL",
          "partial": "Req New Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:ReqNewFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe old format, whose header is \"CERTIFICATE\n   REQUEST\".\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "ReqOldFormat",
          "package": "HsOpenSSL",
          "signature": "ReqOldFormat",
          "source": "src/OpenSSL-PEM.html#PemX509ReqFormat",
          "type": "function"
        },
        "index": {
          "description": "The old format whose header is CERTIFICATE REQUEST",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "ReqOldFormat",
          "package": "HsOpenSSL",
          "partial": "Req Old Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:ReqOldFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadCRL\u003c/a\u003e\u003c/code\u003e pem\u003c/code\u003e reads a Certificate Revocation List in PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "readCRL",
          "package": "HsOpenSSL",
          "signature": "String -\u003e IO CRL",
          "source": "src/OpenSSL-PEM.html#readCRL",
          "type": "function"
        },
        "index": {
          "description": "readCRL pem reads Certificate Revocation List in PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "readCRL",
          "normalized": "String-\u003eIO CRL",
          "package": "HsOpenSSL",
          "partial": "CRL",
          "signature": "String-\u003eIO CRL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:readCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadDHParams\u003c/a\u003e\u003c/code\u003e pem\u003c/code\u003e reads DH parameters in PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "readDHParams",
          "package": "HsOpenSSL",
          "signature": "String -\u003e IO DHP",
          "source": "src/OpenSSL-PEM.html#readDHParams",
          "type": "function"
        },
        "index": {
          "description": "readDHParams pem reads DH parameters in PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "readDHParams",
          "normalized": "String-\u003eIO DHP",
          "package": "HsOpenSSL",
          "partial": "DHParams",
          "signature": "String-\u003eIO DHP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:readDHParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadPkcs7\u003c/a\u003e\u003c/code\u003e pem\u003c/code\u003e reads a PKCS#7 structure in PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "readPkcs7",
          "package": "HsOpenSSL",
          "signature": "String -\u003e IO Pkcs7",
          "source": "src/OpenSSL-PEM.html#readPkcs7",
          "type": "function"
        },
        "index": {
          "description": "readPkcs7 pem reads PKCS structure in PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "readPkcs7",
          "normalized": "String-\u003eIO Pkcs",
          "package": "HsOpenSSL",
          "partial": "Pkcs",
          "signature": "String-\u003eIO Pkcs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:readPkcs7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadPrivateKey\u003c/a\u003e\u003c/code\u003e pem supply\u003c/code\u003e reads a private key in PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "readPrivateKey",
          "package": "HsOpenSSL",
          "signature": "String -\u003e PemPasswordSupply -\u003e IO SomeKeyPair",
          "source": "src/OpenSSL-PEM.html#readPrivateKey",
          "type": "function"
        },
        "index": {
          "description": "readPrivateKey pem supply reads private key in PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "readPrivateKey",
          "normalized": "String-\u003ePemPasswordSupply-\u003eIO SomeKeyPair",
          "package": "HsOpenSSL",
          "partial": "Private Key",
          "signature": "String-\u003ePemPasswordSupply-\u003eIO SomeKeyPair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:readPrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadPublicKey\u003c/a\u003e\u003c/code\u003e pem\u003c/code\u003e reads a public key in PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "readPublicKey",
          "package": "HsOpenSSL",
          "signature": "String -\u003e IO SomePublicKey",
          "source": "src/OpenSSL-PEM.html#readPublicKey",
          "type": "function"
        },
        "index": {
          "description": "readPublicKey pem reads public key in PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "readPublicKey",
          "normalized": "String-\u003eIO SomePublicKey",
          "package": "HsOpenSSL",
          "partial": "Public Key",
          "signature": "String-\u003eIO SomePublicKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:readPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadX509\u003c/a\u003e\u003c/code\u003e pem\u003c/code\u003e reads an X.509 certificate in PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "readX509",
          "package": "HsOpenSSL",
          "signature": "String -\u003e IO X509",
          "source": "src/OpenSSL-PEM.html#readX509",
          "type": "function"
        },
        "index": {
          "description": "readX509 pem reads an X.509 certificate in PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "readX509",
          "normalized": "String-\u003eIO X",
          "package": "HsOpenSSL",
          "signature": "String-\u003eIO X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:readX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadX509Req\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e reads a PKCS#10 certificate request in PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "readX509Req",
          "package": "HsOpenSSL",
          "signature": "String -\u003e IO X509Req",
          "source": "src/OpenSSL-PEM.html#readX509Req",
          "type": "function"
        },
        "index": {
          "description": "readX509Req reads PKCS certificate request in PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "readX509Req",
          "normalized": "String-\u003eIO X Req",
          "package": "HsOpenSSL",
          "partial": "Req",
          "signature": "String-\u003eIO X Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:readX509Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriteCRL\u003c/a\u003e\u003c/code\u003e crl\u003c/code\u003e writes a Certificate Revocation List to PEM\n string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "writeCRL",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e IO String",
          "source": "src/OpenSSL-PEM.html#writeCRL",
          "type": "function"
        },
        "index": {
          "description": "writeCRL crl writes Certificate Revocation List to PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "writeCRL",
          "normalized": "CRL-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "CRL",
          "signature": "CRL-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:writeCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriteDHParams\u003c/a\u003e\u003c/code\u003e dh\u003c/code\u003e writes DH parameters to PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "writeDHParams",
          "package": "HsOpenSSL",
          "signature": "DHP -\u003e IO String",
          "source": "src/OpenSSL-PEM.html#writeDHParams",
          "type": "function"
        },
        "index": {
          "description": "writeDHParams dh writes DH parameters to PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "writeDHParams",
          "normalized": "DHP-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "DHParams",
          "signature": "DHP-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:writeDHParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewritePKCS8PrivateKey\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e writes a private key to PEM string in\n PKCS#8 format.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "writePKCS8PrivateKey",
          "package": "HsOpenSSL",
          "signature": "key-\u003e Maybe (Cipher, PemPasswordSupply)-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "writePKCS8PrivateKey writes private key to PEM string in PKCS format",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "writePKCS8PrivateKey",
          "normalized": "a-\u003eMaybe(Cipher,PemPasswordSupply)-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "PKCS Private Key",
          "signature": "key-\u003eMaybe(Cipher,PemPasswordSupply)-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:writePKCS8PrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewritePkcs7\u003c/a\u003e\u003c/code\u003e p7\u003c/code\u003e writes a PKCS#7 structure to PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "writePkcs7",
          "package": "HsOpenSSL",
          "signature": "Pkcs7 -\u003e IO String",
          "source": "src/OpenSSL-PEM.html#writePkcs7",
          "type": "function"
        },
        "index": {
          "description": "writePkcs7 p7 writes PKCS structure to PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "writePkcs7",
          "normalized": "Pkcs-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "Pkcs",
          "signature": "Pkcs-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:writePkcs7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewritePublicKey\u003c/a\u003e\u003c/code\u003e pubkey\u003c/code\u003e writes a public to PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "writePublicKey",
          "package": "HsOpenSSL",
          "signature": "key -\u003e IO String",
          "source": "src/OpenSSL-PEM.html#writePublicKey",
          "type": "function"
        },
        "index": {
          "description": "writePublicKey pubkey writes public to PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "writePublicKey",
          "normalized": "a-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "Public Key",
          "signature": "key-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:writePublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriteX509\u003c/a\u003e\u003c/code\u003e cert\u003c/code\u003e writes an X.509 certificate to PEM string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "writeX509",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e IO String",
          "source": "src/OpenSSL-PEM.html#writeX509",
          "type": "function"
        },
        "index": {
          "description": "writeX509 cert writes an X.509 certificate to PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "writeX509",
          "normalized": "X-\u003eIO String",
          "package": "HsOpenSSL",
          "signature": "X-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:writeX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriteX509Req\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e writes a PKCS#10 certificate request to PEM\n string.\n\u003c/p\u003e",
          "module": "OpenSSL.PEM",
          "name": "writeX509Req",
          "package": "HsOpenSSL",
          "signature": "X509Req-\u003e PemX509ReqFormat-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "writeX509Req writes PKCS certificate request to PEM string",
          "hierarchy": "OpenSSL PEM",
          "module": "OpenSSL.PEM",
          "name": "writeX509Req",
          "normalized": "X Req-\u003ePemX ReqFormat-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "Req",
          "signature": "X Req-\u003ePemX ReqFormat-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PEM.html#v:writeX509Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to PKCS#7 structure and S/MIME message.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "PKCS7",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PKCS7.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to PKCS structure and MIME message",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "PKCS7",
          "package": "HsOpenSSL",
          "partial": "PKCS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "PKCS7",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PKCS7.html#PKCS7",
          "type": "data"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "PKCS7",
          "package": "HsOpenSSL",
          "partial": "PKCS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#t:PKCS7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePkcs7\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents an abstract PKCS#7 structure. The concrete\n type of structure is hidden in the object: such polymorphism isn't\n very haskellish but please get it out of your mind since OpenSSL is\n written in C.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7",
          "type": "data"
        },
        "index": {
          "description": "Pkcs7 represents an abstract PKCS structure The concrete type of structure is hidden in the object such polymorphism isn very haskellish but please get it out of your mind since OpenSSL is written in",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7",
          "package": "HsOpenSSL",
          "partial": "Pkcs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#t:Pkcs7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePkcs7Flag\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a set of flags that are used in many operations\n related to PKCS#7.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7Flag",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "data"
        },
        "index": {
          "description": "Pkcs7Flag is set of flags that are used in many operations related to PKCS",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7Flag",
          "package": "HsOpenSSL",
          "partial": "Pkcs Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#t:Pkcs7Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePkcs7VerifyStatus\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a result of PKCS#7\n verification. See \u003ccode\u003e\u003ca\u003epkcs7Verify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7VerifyStatus",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7VerifyStatus",
          "type": "data"
        },
        "index": {
          "description": "Pkcs7VerifyStatus represents result of PKCS verification See pkcs7Verify",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7VerifyStatus",
          "package": "HsOpenSSL",
          "partial": "Pkcs Verify Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#t:Pkcs7VerifyStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7Binary",
          "package": "HsOpenSSL",
          "signature": "Pkcs7Binary",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7Binary",
          "package": "HsOpenSSL",
          "partial": "Pkcs Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7CRLFEOL",
          "package": "HsOpenSSL",
          "signature": "Pkcs7CRLFEOL",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7CRLFEOL",
          "package": "HsOpenSSL",
          "partial": "Pkcs CRLFEOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7CRLFEOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7Detached",
          "package": "HsOpenSSL",
          "signature": "Pkcs7Detached",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7Detached",
          "package": "HsOpenSSL",
          "partial": "Pkcs Detached",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7Detached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoAttr",
          "package": "HsOpenSSL",
          "signature": "Pkcs7NoAttr",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoAttr",
          "package": "HsOpenSSL",
          "partial": "Pkcs No Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7NoAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoCerts",
          "package": "HsOpenSSL",
          "signature": "Pkcs7NoCerts",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoCerts",
          "package": "HsOpenSSL",
          "partial": "Pkcs No Certs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7NoCerts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoChain",
          "package": "HsOpenSSL",
          "signature": "Pkcs7NoChain",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoChain",
          "package": "HsOpenSSL",
          "partial": "Pkcs No Chain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7NoChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoIntern",
          "package": "HsOpenSSL",
          "signature": "Pkcs7NoIntern",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoIntern",
          "package": "HsOpenSSL",
          "partial": "Pkcs No Intern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7NoIntern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoOldMimeType",
          "package": "HsOpenSSL",
          "signature": "Pkcs7NoOldMimeType",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoOldMimeType",
          "package": "HsOpenSSL",
          "partial": "Pkcs No Old Mime Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7NoOldMimeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoSigs",
          "package": "HsOpenSSL",
          "signature": "Pkcs7NoSigs",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoSigs",
          "package": "HsOpenSSL",
          "partial": "Pkcs No Sigs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7NoSigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoSmimeCap",
          "package": "HsOpenSSL",
          "signature": "Pkcs7NoSmimeCap",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoSmimeCap",
          "package": "HsOpenSSL",
          "partial": "Pkcs No Smime Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7NoSmimeCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoVerify",
          "package": "HsOpenSSL",
          "signature": "Pkcs7NoVerify",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7NoVerify",
          "package": "HsOpenSSL",
          "partial": "Pkcs No Verify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7NoVerify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7Text",
          "package": "HsOpenSSL",
          "signature": "Pkcs7Text",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7Text",
          "package": "HsOpenSSL",
          "partial": "Pkcs Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7VerifyFailure",
          "package": "HsOpenSSL",
          "signature": "Pkcs7VerifyFailure",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7VerifyStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7VerifyFailure",
          "package": "HsOpenSSL",
          "partial": "Pkcs Verify Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7VerifyFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing if the PKCS#7\n   signature was a detached\n   signature, and \u003ccode\u003eJust content\u003c/code\u003e\n   if it wasn't.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7VerifySuccess",
          "package": "HsOpenSSL",
          "signature": "Pkcs7VerifySuccess (Maybe String)",
          "source": "src/OpenSSL-PKCS7.html#Pkcs7VerifyStatus",
          "type": "function"
        },
        "index": {
          "description": "Nothing if the PKCS signature was detached signature and Just content if it wasn",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "Pkcs7VerifySuccess",
          "package": "HsOpenSSL",
          "partial": "Pkcs Verify Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:Pkcs7VerifySuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epkcs7Decrypt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e decrypts content from PKCS#7 envelopedData\n structure.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "pkcs7Decrypt",
          "package": "HsOpenSSL",
          "signature": "Pkcs7-\u003e key-\u003e X509-\u003e [Pkcs7Flag]-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "pkcs7Decrypt decrypts content from PKCS envelopedData structure",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "pkcs7Decrypt",
          "normalized": "Pkcs-\u003ea-\u003eX-\u003e[Pkcs Flag]-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "Decrypt",
          "signature": "Pkcs-\u003ekey-\u003eX-\u003e[Pkcs Flag]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:pkcs7Decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epkcs7Encrypt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e creates a PKCS#7 envelopedData structure.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "pkcs7Encrypt",
          "package": "HsOpenSSL",
          "signature": "[X509]-\u003e String-\u003e Cipher-\u003e [Pkcs7Flag]-\u003e IO Pkcs7",
          "type": "function"
        },
        "index": {
          "description": "pkcs7Encrypt creates PKCS envelopedData structure",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "pkcs7Encrypt",
          "normalized": "[X]-\u003eString-\u003eCipher-\u003e[Pkcs Flag]-\u003eIO Pkcs",
          "package": "HsOpenSSL",
          "partial": "Encrypt",
          "signature": "[X]-\u003eString-\u003eCipher-\u003e[Pkcs Flag]-\u003eIO Pkcs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:pkcs7Encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epkcs7Sign\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e creates a PKCS#7 signedData structure.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "pkcs7Sign",
          "package": "HsOpenSSL",
          "signature": "X509-\u003e key-\u003e [X509]-\u003e String-\u003e [Pkcs7Flag]-\u003e IO Pkcs7",
          "type": "function"
        },
        "index": {
          "description": "pkcs7Sign creates PKCS signedData structure",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "pkcs7Sign",
          "normalized": "X-\u003ea-\u003e[X]-\u003eString-\u003e[Pkcs Flag]-\u003eIO Pkcs",
          "package": "HsOpenSSL",
          "partial": "Sign",
          "signature": "X-\u003ekey-\u003e[X]-\u003eString-\u003e[Pkcs Flag]-\u003eIO Pkcs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:pkcs7Sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epkcs7Verify\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e verifies a PKCS#7 signedData structure.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "pkcs7Verify",
          "package": "HsOpenSSL",
          "signature": "Pkcs7-\u003e [X509]-\u003e X509Store-\u003e Maybe String-\u003e [Pkcs7Flag]-\u003e IO Pkcs7VerifyStatus",
          "type": "function"
        },
        "index": {
          "description": "pkcs7Verify verifies PKCS signedData structure",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "pkcs7Verify",
          "normalized": "Pkcs-\u003e[X]-\u003eX Store-\u003eMaybe String-\u003e[Pkcs Flag]-\u003eIO Pkcs VerifyStatus",
          "package": "HsOpenSSL",
          "partial": "Verify",
          "signature": "Pkcs-\u003e[X]-\u003eX Store-\u003eMaybe String-\u003e[Pkcs Flag]-\u003eIO Pkcs VerifyStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:pkcs7Verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadSmime\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e parses S/MIME message.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "readSmime",
          "package": "HsOpenSSL",
          "signature": "String-\u003e IO (Pkcs7, Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "readSmime parses MIME message",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "readSmime",
          "normalized": "String-\u003eIO(Pkcs,Maybe String)",
          "package": "HsOpenSSL",
          "partial": "Smime",
          "signature": "String-\u003eIO(Pkcs,Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:readSmime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "withPkcs7Ptr",
          "package": "HsOpenSSL",
          "signature": "Pkcs7 -\u003e (Ptr PKCS7 -\u003e IO a) -\u003e IO a",
          "source": "src/OpenSSL-PKCS7.html#withPkcs7Ptr",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "withPkcs7Ptr",
          "normalized": "Pkcs-\u003e(Ptr PKCS-\u003eIO a)-\u003eIO a",
          "package": "HsOpenSSL",
          "partial": "Pkcs Ptr",
          "signature": "Pkcs-\u003e(Ptr PKCS-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:withPkcs7Ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.PKCS7",
          "name": "wrapPkcs7Ptr",
          "package": "HsOpenSSL",
          "signature": "Ptr PKCS7 -\u003e IO Pkcs7",
          "source": "src/OpenSSL-PKCS7.html#wrapPkcs7Ptr",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "wrapPkcs7Ptr",
          "normalized": "Ptr PKCS-\u003eIO Pkcs",
          "package": "HsOpenSSL",
          "partial": "Pkcs Ptr",
          "signature": "Ptr PKCS-\u003eIO Pkcs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:wrapPkcs7Ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriteSmime\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e writes PKCS#7 structure to S/MIME message.\n\u003c/p\u003e",
          "module": "OpenSSL.PKCS7",
          "name": "writeSmime",
          "package": "HsOpenSSL",
          "signature": "Pkcs7-\u003e Maybe String-\u003e [Pkcs7Flag]-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "writeSmime writes PKCS structure to MIME message",
          "hierarchy": "OpenSSL PKCS7",
          "module": "OpenSSL.PKCS7",
          "name": "writeSmime",
          "normalized": "Pkcs-\u003eMaybe String-\u003e[Pkcs Flag]-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "Smime",
          "signature": "Pkcs-\u003eMaybe String-\u003e[Pkcs Flag]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-PKCS7.html#v:writeSmime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to RSA public key generator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.RSA",
          "name": "RSA",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-RSA.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to RSA public key generator",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "RSA",
          "package": "HsOpenSSL",
          "partial": "RSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eRSAGenKeyCallback\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a callback function to get\n informed the progress of RSA key generation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ecallback 0 i\u003c/code\u003e is called after generating the \u003ccode\u003ei\u003c/code\u003e-th potential\n   prime number.\n\u003c/li\u003e\u003cli\u003e While the number is being tested for primality, \u003ccode\u003ecallback 1 j\u003c/code\u003e is\n   called after the \u003ccode\u003ej\u003c/code\u003e-th iteration (j = 0, 1, ...).\n\u003c/li\u003e\u003cli\u003e When the \u003ccode\u003en\u003c/code\u003e-th randomly generated prime is rejected as not\n   suitable for the key, \u003ccode\u003ecallback 2 n\u003c/code\u003e is called.\n\u003c/li\u003e\u003cli\u003e When a random \u003ccode\u003ep\u003c/code\u003e has been found with \u003ccode\u003ep\u003c/code\u003e-1 relatively prime to\n   \u003ccode\u003ee\u003c/code\u003e, it is called as \u003ccode\u003ecallback 3 0\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The process is then repeated for prime \u003ccode\u003eq\u003c/code\u003e with \u003ccode\u003ecallback 3 1\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "OpenSSL.RSA",
          "name": "RSAGenKeyCallback",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-RSA.html#RSAGenKeyCallback",
          "type": "type"
        },
        "index": {
          "description": "RSAGenKeyCallback represents callback function to get informed the progress of RSA key generation callback is called after generating the th potential prime number While the number is being tested for primality callback is called after the th iteration When the th randomly generated prime is rejected as not suitable for the key callback is called When random has been found with relatively prime to it is called as callback The process is then repeated for prime with callback",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "RSAGenKeyCallback",
          "package": "HsOpenSSL",
          "partial": "RSAGen Key Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#t:RSAGenKeyCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eRSAKey\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eRSAPubKey\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eRSAKeyPair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "RSAKey",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-RSA.html#RSAKey",
          "type": "class"
        },
        "index": {
          "description": "RSAKey is either RSAPubKey or RSAKeyPair",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "RSAKey",
          "package": "HsOpenSSL",
          "partial": "RSAKey",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#t:RSAKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eRSAKeyPair\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an opaque object that represents RSA keypair.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "RSAKeyPair",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-RSA.html#RSAKeyPair",
          "type": "data"
        },
        "index": {
          "description": "RSAKeyPair is an opaque object that represents RSA keypair",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "RSAKeyPair",
          "package": "HsOpenSSL",
          "partial": "RSAKey Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#t:RSAKeyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eRSAPubKey\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an opaque object that represents RSA public key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "RSAPubKey",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-RSA.html#RSAPubKey",
          "type": "data"
        },
        "index": {
          "description": "RSAPubKey is an opaque object that represents RSA public key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "RSAPubKey",
          "package": "HsOpenSSL",
          "partial": "RSAPub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#t:RSAPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.RSA",
          "name": "absorbRSAPtr",
          "package": "HsOpenSSL",
          "signature": "Ptr RSA -\u003e IO (Maybe k)",
          "source": "src/OpenSSL-RSA.html#absorbRSAPtr",
          "type": "method"
        },
        "index": {
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "absorbRSAPtr",
          "normalized": "Ptr RSA-\u003eIO(Maybe a)",
          "package": "HsOpenSSL",
          "partial": "RSAPtr",
          "signature": "Ptr RSA-\u003eIO(Maybe k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:absorbRSAPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egenerateRSAKey\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e generates an RSA keypair.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "generateRSAKey",
          "package": "HsOpenSSL",
          "signature": "Int-\u003e Int-\u003e Maybe RSAGenKeyCallback-\u003e IO RSAKeyPair",
          "type": "function"
        },
        "index": {
          "description": "generateRSAKey generates an RSA keypair",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "generateRSAKey",
          "normalized": "Int-\u003eInt-\u003eMaybe RSAGenKeyCallback-\u003eIO RSAKeyPair",
          "package": "HsOpenSSL",
          "partial": "RSAKey",
          "signature": "Int-\u003eInt-\u003eMaybe RSAGenKeyCallback-\u003eIO RSAKeyPair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:generateRSAKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simplified alternative to \u003ccode\u003e\u003ca\u003egenerateRSAKey\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "generateRSAKey'",
          "package": "HsOpenSSL",
          "signature": "Int-\u003e Int-\u003e IO RSAKeyPair",
          "type": "function"
        },
        "index": {
          "description": "simplified alternative to generateRSAKey",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "generateRSAKey'",
          "normalized": "Int-\u003eInt-\u003eIO RSAKeyPair",
          "package": "HsOpenSSL",
          "partial": "RSAKey'",
          "signature": "Int-\u003eInt-\u003eIO RSAKeyPair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:generateRSAKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.RSA",
          "name": "peekRSAPtr",
          "package": "HsOpenSSL",
          "signature": "Ptr RSA -\u003e IO (Maybe k)",
          "source": "src/OpenSSL-RSA.html#peekRSAPtr",
          "type": "method"
        },
        "index": {
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "peekRSAPtr",
          "normalized": "Ptr RSA-\u003eIO(Maybe a)",
          "package": "HsOpenSSL",
          "partial": "RSAPtr",
          "signature": "Ptr RSA-\u003eIO(Maybe k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:peekRSAPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a copy of the public parameters of the given key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaCopyPublic",
          "package": "HsOpenSSL",
          "signature": "key -\u003e IO RSAPubKey",
          "source": "src/OpenSSL-RSA.html#rsaCopyPublic",
          "type": "function"
        },
        "index": {
          "description": "Make copy of the public parameters of the given key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaCopyPublic",
          "normalized": "a-\u003eIO RSAPubKey",
          "package": "HsOpenSSL",
          "partial": "Copy Public",
          "signature": "key-\u003eIO RSAPubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaCopyPublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ersaD\u003c/a\u003e\u003c/code\u003e privKey\u003c/code\u003e returns the private exponent of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaD",
          "package": "HsOpenSSL",
          "signature": "RSAKeyPair -\u003e Integer",
          "source": "src/OpenSSL-RSA.html#rsaD",
          "type": "function"
        },
        "index": {
          "description": "rsaD privKey returns the private exponent of the key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaD",
          "normalized": "RSAKeyPair-\u003eInteger",
          "package": "HsOpenSSL",
          "signature": "RSAKeyPair-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ersaDMP1\u003c/a\u003e\u003c/code\u003e privkey\u003c/code\u003e returns \u003ccode\u003ed mod (p-1)\u003c/code\u003e of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaDMP1",
          "package": "HsOpenSSL",
          "signature": "RSAKeyPair -\u003e Maybe Integer",
          "source": "src/OpenSSL-RSA.html#rsaDMP1",
          "type": "function"
        },
        "index": {
          "description": "rsaDMP1 privkey returns mod p-1 of the key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaDMP1",
          "normalized": "RSAKeyPair-\u003eMaybe Integer",
          "package": "HsOpenSSL",
          "partial": "DMP",
          "signature": "RSAKeyPair-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaDMP1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ersaDMQ1\u003c/a\u003e\u003c/code\u003e privkey\u003c/code\u003e returns \u003ccode\u003ed mod (q-1)\u003c/code\u003e of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaDMQ1",
          "package": "HsOpenSSL",
          "signature": "RSAKeyPair -\u003e Maybe Integer",
          "source": "src/OpenSSL-RSA.html#rsaDMQ1",
          "type": "function"
        },
        "index": {
          "description": "rsaDMQ1 privkey returns mod q-1 of the key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaDMQ1",
          "normalized": "RSAKeyPair-\u003eMaybe Integer",
          "package": "HsOpenSSL",
          "partial": "DMQ",
          "signature": "RSAKeyPair-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaDMQ1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ersaE\u003c/a\u003e\u003c/code\u003e key\u003c/code\u003e returns the public exponent of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaE",
          "package": "HsOpenSSL",
          "signature": "k -\u003e Integer",
          "source": "src/OpenSSL-RSA.html#rsaE",
          "type": "method"
        },
        "index": {
          "description": "rsaE key returns the public exponent of the key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaE",
          "normalized": "a-\u003eInteger",
          "package": "HsOpenSSL",
          "signature": "k-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ersaIQMP\u003c/a\u003e\u003c/code\u003e privkey\u003c/code\u003e returns \u003ccode\u003eq^-1 mod p\u003c/code\u003e of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaIQMP",
          "package": "HsOpenSSL",
          "signature": "RSAKeyPair -\u003e Maybe Integer",
          "source": "src/OpenSSL-RSA.html#rsaIQMP",
          "type": "function"
        },
        "index": {
          "description": "rsaIQMP privkey returns mod of the key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaIQMP",
          "normalized": "RSAKeyPair-\u003eMaybe Integer",
          "package": "HsOpenSSL",
          "partial": "IQMP",
          "signature": "RSAKeyPair-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaIQMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ersaN\u003c/a\u003e\u003c/code\u003e key\u003c/code\u003e returns the public modulus of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaN",
          "package": "HsOpenSSL",
          "signature": "k -\u003e Integer",
          "source": "src/OpenSSL-RSA.html#rsaN",
          "type": "method"
        },
        "index": {
          "description": "rsaN key returns the public modulus of the key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaN",
          "normalized": "a-\u003eInteger",
          "package": "HsOpenSSL",
          "signature": "k-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ersaP\u003c/a\u003e\u003c/code\u003e privkey\u003c/code\u003e returns the secret prime factor \u003ccode\u003ep\u003c/code\u003e of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaP",
          "package": "HsOpenSSL",
          "signature": "RSAKeyPair -\u003e Integer",
          "source": "src/OpenSSL-RSA.html#rsaP",
          "type": "function"
        },
        "index": {
          "description": "rsaP privkey returns the secret prime factor of the key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaP",
          "normalized": "RSAKeyPair-\u003eInteger",
          "package": "HsOpenSSL",
          "signature": "RSAKeyPair-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ersaQ\u003c/a\u003e\u003c/code\u003e privkey\u003c/code\u003e returns the secret prime factor \u003ccode\u003eq\u003c/code\u003e of the key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaQ",
          "package": "HsOpenSSL",
          "signature": "RSAKeyPair -\u003e Integer",
          "source": "src/OpenSSL-RSA.html#rsaQ",
          "type": "function"
        },
        "index": {
          "description": "rsaQ privkey returns the secret prime factor of the key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaQ",
          "normalized": "RSAKeyPair-\u003eInteger",
          "package": "HsOpenSSL",
          "signature": "RSAKeyPair-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ersaSize\u003c/a\u003e\u003c/code\u003e key\u003c/code\u003e returns the length of key.\n\u003c/p\u003e",
          "module": "OpenSSL.RSA",
          "name": "rsaSize",
          "package": "HsOpenSSL",
          "signature": "k -\u003e Int",
          "source": "src/OpenSSL-RSA.html#rsaSize",
          "type": "method"
        },
        "index": {
          "description": "rsaSize key returns the length of key",
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "rsaSize",
          "normalized": "a-\u003eInt",
          "package": "HsOpenSSL",
          "partial": "Size",
          "signature": "k-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:rsaSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.RSA",
          "name": "withRSAPtr",
          "package": "HsOpenSSL",
          "signature": "k -\u003e (Ptr RSA -\u003e IO a) -\u003e IO a",
          "source": "src/OpenSSL-RSA.html#withRSAPtr",
          "type": "method"
        },
        "index": {
          "hierarchy": "OpenSSL RSA",
          "module": "OpenSSL.RSA",
          "name": "withRSAPtr",
          "normalized": "a-\u003e(Ptr RSA-\u003eIO b)-\u003eIO b",
          "package": "HsOpenSSL",
          "partial": "RSAPtr",
          "signature": "k-\u003e(Ptr RSA-\u003eIO a)-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-RSA.html#v:withRSAPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePRNG services\n   See \u003ca\u003ehttp://www.openssl.org/docs/crypto/rand.html\u003c/a\u003e\n   For random Integer generation, see \u003ca\u003eOpenSSL.BN\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.Random",
          "name": "Random",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Random.html",
          "type": "module"
        },
        "index": {
          "description": "PRNG services See http www.openssl.org docs crypto rand.html For random Integer generation see OpenSSL.BN",
          "hierarchy": "OpenSSL Random",
          "module": "OpenSSL.Random",
          "name": "Random",
          "package": "HsOpenSSL",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd data to the entropy pool. It's safe to add sensitive information\n   (e.g. user passwords etc) to the pool. Also, adding data with an entropy\n   of 0 can never hurt.\n\u003c/p\u003e",
          "module": "OpenSSL.Random",
          "name": "add",
          "package": "HsOpenSSL",
          "signature": "ByteString-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Add data to the entropy pool It safe to add sensitive information e.g user passwords etc to the pool Also adding data with an entropy of can never hurt",
          "hierarchy": "OpenSSL Random",
          "module": "OpenSSL.Random",
          "name": "add",
          "normalized": "ByteString-\u003eInt-\u003eIO()",
          "package": "HsOpenSSL",
          "signature": "ByteString-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Random.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a bytestring consisting of the given number of pseudo random\n   bytes\n\u003c/p\u003e",
          "module": "OpenSSL.Random",
          "name": "prandBytes",
          "package": "HsOpenSSL",
          "signature": "Int-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Return bytestring consisting of the given number of pseudo random bytes",
          "hierarchy": "OpenSSL Random",
          "module": "OpenSSL.Random",
          "name": "prandBytes",
          "normalized": "Int-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "Bytes",
          "signature": "Int-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Random.html#v:prandBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a bytestring consisting of the given number of strongly random\n   bytes\n\u003c/p\u003e",
          "module": "OpenSSL.Random",
          "name": "randBytes",
          "package": "HsOpenSSL",
          "signature": "Int-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Return bytestring consisting of the given number of strongly random bytes",
          "hierarchy": "OpenSSL Random",
          "module": "OpenSSL.Random",
          "name": "randBytes",
          "normalized": "Int-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "Bytes",
          "signature": "Int-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Random.html#v:randBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for handling SSL connections. These functions use GHC specific\n   calls to cooperative the with the scheduler so that \u003ccode\u003eblocking\u003c/code\u003e functions\n   only actually block the Haskell thread, not a whole OS thread.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.Session",
          "name": "Session",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Session.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for handling SSL connections These functions use GHC specific calls to cooperative the with the scheduler so that blocking functions only actually block the Haskell thread not whole OS thread",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "Session",
          "package": "HsOpenSSL",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe peer uncleanly terminated the connection without sending the\n \"close notify\" alert.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "ConnectionAbruptlyTerminated",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Session.html#ConnectionAbruptlyTerminated",
          "type": "data"
        },
        "index": {
          "description": "The peer uncleanly terminated the connection without sending the close notify alert",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "ConnectionAbruptlyTerminated",
          "package": "HsOpenSSL",
          "partial": "Connection Abruptly Terminated",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#t:ConnectionAbruptlyTerminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA failure in the SSL library occurred, usually a protocol\n error.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "ProtocolError",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Session.html#ProtocolError",
          "type": "data"
        },
        "index": {
          "description": "failure in the SSL library occurred usually protocol error",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "ProtocolError",
          "package": "HsOpenSSL",
          "partial": "Protocol Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#t:ProtocolError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the type of an SSL connection\n\u003c/p\u003e\u003cp\u003eIO with SSL objects is non-blocking and many SSL functions return a error\n   code which signifies that it needs to read or write more data. We handle\n   these calls and call threadWaitRead and threadWaitWrite at the correct\n   times. Thus multiple OS threads can be \u003ccode\u003e\u003ca\u003eblocked\u003c/a\u003e\u003c/code\u003e inside IO in the same SSL\n   object at a time, because they aren't really in the SSL object, they are\n   waiting for the RTS to wake the Haskell thread.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "SSL",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Session.html#SSL",
          "type": "data"
        },
        "index": {
          "description": "This is the type of an SSL connection IO with SSL objects is non-blocking and many SSL functions return error code which signifies that it needs to read or write more data We handle these calls and call threadWaitRead and threadWaitWrite at the correct times Thus multiple OS threads can be blocked inside IO in the same SSL object at time because they aren really in the SSL object they are waiting for the RTS to wake the Haskell thread",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "SSL",
          "package": "HsOpenSSL",
          "partial": "SSL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#t:SSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SSL context. Contexts carry configuration such as a server's private\n   key, root CA certiifcates etc. Contexts are stateful IO objects; they\n   start empty and various options are set on them by the functions in this\n   module. Note that an empty context will pretty much cause any operation to\n   fail since it doesn't even have any ciphers enabled.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "SSLContext",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Session.html#SSLContext",
          "type": "data"
        },
        "index": {
          "description": "An SSL context Contexts carry configuration such as server private key root CA certiifcates etc Contexts are stateful IO objects they start empty and various options are set on them by the functions in this module Note that an empty context will pretty much cause any operation to fail since it doesn even have any ciphers enabled",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "SSLContext",
          "package": "HsOpenSSL",
          "partial": "SSLContext",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#t:SSLContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the type of an SSL IO operation. Errors are handled by\n exceptions while everything else is one of these. Note that reading\n from an SSL socket can result in WantWrite and vice versa.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "SSLResult",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Session.html#SSLResult",
          "type": "data"
        },
        "index": {
          "description": "This is the type of an SSL IO operation Errors are handled by exceptions while everything else is one of these Note that reading from an SSL socket can result in WantWrite and vice versa",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "SSLResult",
          "package": "HsOpenSSL",
          "partial": "SSLResult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#t:SSLResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Session",
          "name": "ShutdownType",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Session.html#ShutdownType",
          "type": "data"
        },
        "index": {
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "ShutdownType",
          "package": "HsOpenSSL",
          "partial": "Shutdown Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#t:ShutdownType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe root exception type for all SSL exceptions.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "SomeSSLException",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Session.html#SomeSSLException",
          "type": "data"
        },
        "index": {
          "description": "The root exception type for all SSL exceptions",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "SomeSSLException",
          "package": "HsOpenSSL",
          "partial": "Some SSLException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#t:SomeSSLException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://www.openssl.org/docs/ssl/SSL_CTX_set_verify.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "VerificationMode",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-Session.html#VerificationMode",
          "type": "data"
        },
        "index": {
          "description": "See http www.openssl.org docs ssl SSL CTX set verify.html",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "VerificationMode",
          "package": "HsOpenSSL",
          "partial": "Verification Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#t:VerificationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewait for the peer to also shutdown\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "Bidirectional",
          "package": "HsOpenSSL",
          "signature": "Bidirectional",
          "source": "src/OpenSSL-Session.html#ShutdownType",
          "type": "function"
        },
        "index": {
          "description": "wait for the peer to also shutdown",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "Bidirectional",
          "package": "HsOpenSSL",
          "partial": "Bidirectional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:Bidirectional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Session",
          "name": "ProtocolError",
          "package": "HsOpenSSL",
          "signature": "ProtocolError !String",
          "source": "src/OpenSSL-Session.html#ProtocolError",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "ProtocolError",
          "package": "HsOpenSSL",
          "partial": "Protocol Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:ProtocolError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoperation finished successfully\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "SSLDone",
          "package": "HsOpenSSL",
          "signature": "SSLDone a",
          "source": "src/OpenSSL-Session.html#SSLResult",
          "type": "function"
        },
        "index": {
          "description": "operation finished successfully",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "SSLDone",
          "package": "HsOpenSSL",
          "partial": "SSLDone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:SSLDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly send our shutdown\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "Unidirectional",
          "package": "HsOpenSSL",
          "signature": "Unidirectional",
          "source": "src/OpenSSL-Session.html#ShutdownType",
          "type": "function"
        },
        "index": {
          "description": "only send our shutdown",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "Unidirectional",
          "package": "HsOpenSSL",
          "partial": "Unidirectional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:Unidirectional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Session",
          "name": "VerifyNone",
          "package": "HsOpenSSL",
          "signature": "VerifyNone",
          "source": "src/OpenSSL-Session.html#VerificationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "VerifyNone",
          "package": "HsOpenSSL",
          "partial": "Verify None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:VerifyNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Session",
          "name": "VerifyPeer",
          "package": "HsOpenSSL",
          "signature": "VerifyPeer",
          "source": "src/OpenSSL-Session.html#VerificationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "VerifyPeer",
          "package": "HsOpenSSL",
          "partial": "Verify Peer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:VerifyPeer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eneeds more data from the network\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "WantRead",
          "package": "HsOpenSSL",
          "signature": "WantRead",
          "source": "src/OpenSSL-Session.html#SSLResult",
          "type": "function"
        },
        "index": {
          "description": "needs more data from the network",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "WantRead",
          "package": "HsOpenSSL",
          "partial": "Want Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:WantRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eneeds more outgoing buffer space\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "WantWrite",
          "package": "HsOpenSSL",
          "signature": "WantWrite",
          "source": "src/OpenSSL-Session.html#SSLResult",
          "type": "function"
        },
        "index": {
          "description": "needs more outgoing buffer space",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "WantWrite",
          "package": "HsOpenSSL",
          "partial": "Want Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:WantWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an SSL server handshake\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "accept",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#accept",
          "type": "function"
        },
        "index": {
          "description": "Perform an SSL server handshake",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "accept",
          "normalized": "SSL-\u003eIO()",
          "package": "HsOpenSSL",
          "signature": "SSL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an SSL client handshake\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "connect",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Perform an SSL client handshake",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "connect",
          "normalized": "SSL-\u003eIO()",
          "package": "HsOpenSSL",
          "signature": "SSL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a Socket in an SSL connection. Reading and writing to the Socket\n   after this will cause weird errors in the SSL code. The SSL object\n   carries a handle to the Socket so you need not worry about the garbage\n   collector closing the file descriptor out from under you.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "connection",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e Socket -\u003e IO SSL",
          "source": "src/OpenSSL-Session.html#connection",
          "type": "function"
        },
        "index": {
          "description": "Wrap Socket in an SSL connection Reading and writing to the Socket after this will cause weird errors in the SSL code The SSL object carries handle to the Socket so you need not worry about the garbage collector closing the file descriptor out from under you",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "connection",
          "normalized": "SSLContext-\u003eSocket-\u003eIO SSL",
          "package": "HsOpenSSL",
          "signature": "SSLContext-\u003eSocket-\u003eIO SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new SSL context.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "context",
          "package": "HsOpenSSL",
          "signature": "IO SSLContext",
          "source": "src/OpenSSL-Session.html#context",
          "type": "function"
        },
        "index": {
          "description": "Create new SSL context",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "context",
          "package": "HsOpenSSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn true iff the private key installed in the given context matches the\n   certificate also installed.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextCheckPrivateKey",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e IO Bool",
          "source": "src/OpenSSL-Session.html#contextCheckPrivateKey",
          "type": "function"
        },
        "index": {
          "description": "Return true iff the private key installed in the given context matches the certificate also installed",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextCheckPrivateKey",
          "normalized": "SSLContext-\u003eIO Bool",
          "package": "HsOpenSSL",
          "partial": "Check Private Key",
          "signature": "SSLContext-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextCheckPrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a reference to, not a copy of, the X.509 certificate storage\n   in the SSL context.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextGetCAStore",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e IO X509Store",
          "source": "src/OpenSSL-Session.html#contextGetCAStore",
          "type": "function"
        },
        "index": {
          "description": "Get reference to not copy of the X.509 certificate storage in the SSL context",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextGetCAStore",
          "normalized": "SSLContext-\u003eIO X Store",
          "package": "HsOpenSSL",
          "partial": "Get CAStore",
          "signature": "SSLContext-\u003eIO X Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextGetCAStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the path to a directory which contains the PEM encoded CA root\n   certificates. This is an alternative to \u003ccode\u003e\u003ca\u003econtextSetCAFile\u003c/a\u003e\u003c/code\u003e. See\n   \u003ca\u003ehttp://www.openssl.org/docs/ssl/SSL_CTX_load_verify_locations.html\u003c/a\u003e for\n   details of the file naming scheme\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextSetCADirectory",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e FilePath -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetCADirectory",
          "type": "function"
        },
        "index": {
          "description": "Set the path to directory which contains the PEM encoded CA root certificates This is an alternative to contextSetCAFile See http www.openssl.org docs ssl SSL CTX load verify locations.html for details of the file naming scheme",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetCADirectory",
          "normalized": "SSLContext-\u003eFilePath-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set CADirectory",
          "signature": "SSLContext-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetCADirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the location of a PEM encoded list of CA certificates to be used when\n   verifying a server's certificate\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextSetCAFile",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e FilePath -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetCAFile",
          "type": "function"
        },
        "index": {
          "description": "Set the location of PEM encoded list of CA certificates to be used when verifying server certificate",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetCAFile",
          "normalized": "SSLContext-\u003eFilePath-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set CAFile",
          "signature": "SSLContext-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetCAFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a certificate (public key) into a context.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextSetCertificate",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e X509 -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetCertificate",
          "type": "function"
        },
        "index": {
          "description": "Install certificate public key into context",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetCertificate",
          "normalized": "SSLContext-\u003eX-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set Certificate",
          "signature": "SSLContext-\u003eX-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a certificate chain in a context. The certificates must be in PEM\n format and must be sorted starting with the subject's certificate (actual\n client or server certificate), followed by intermediate CA certificates if\n applicable, and ending at the highest level (root) CA.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextSetCertificateChainFile",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e FilePath -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetCertificateChainFile",
          "type": "function"
        },
        "index": {
          "description": "Install certificate chain in context The certificates must be in PEM format and must be sorted starting with the subject certificate actual client or server certificate followed by intermediate CA certificates if applicable and ending at the highest level root CA",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetCertificateChainFile",
          "normalized": "SSLContext-\u003eFilePath-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set Certificate Chain File",
          "signature": "SSLContext-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetCertificateChainFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a certificate (public key) file in a context. The key is given as\n   a path to the file which contains the key. The file is parsed first as PEM\n   and, if that fails, as ASN1. If both fail, an exception is raised.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextSetCertificateFile",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e FilePath -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetCertificateFile",
          "type": "function"
        },
        "index": {
          "description": "Install certificate public key file in context The key is given as path to the file which contains the key The file is parsed first as PEM and if that fails as ASN1 If both fail an exception is raised",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetCertificateFile",
          "normalized": "SSLContext-\u003eFilePath-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set Certificate File",
          "signature": "SSLContext-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetCertificateFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the ciphers to be used by the given context. The string argument is a\n   list of ciphers, comma separated, as given at\n   http:\u003cem/\u003ewww.openssl.org\u003cem\u003edocs\u003c/em\u003eapps/ciphers.html\n\u003c/p\u003e\u003cp\u003eUnrecognised ciphers are ignored. If no ciphers from the list are\n   recognised, an exception is raised.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextSetCiphers",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e String -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetCiphers",
          "type": "function"
        },
        "index": {
          "description": "Set the ciphers to be used by the given context The string argument is list of ciphers comma separated as given at http www.openssl.org docs apps ciphers.html Unrecognised ciphers are ignored If no ciphers from the list are recognised an exception is raised",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetCiphers",
          "normalized": "SSLContext-\u003eString-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set Ciphers",
          "signature": "SSLContext-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetCiphers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Session",
          "name": "contextSetDefaultCiphers",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetDefaultCiphers",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetDefaultCiphers",
          "normalized": "SSLContext-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set Default Ciphers",
          "signature": "SSLContext-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetDefaultCiphers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a private key into a context.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextSetPrivateKey",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e k -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetPrivateKey",
          "type": "function"
        },
        "index": {
          "description": "Install private key into context",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetPrivateKey",
          "normalized": "SSLContext-\u003ea-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set Private Key",
          "signature": "SSLContext-\u003ek-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetPrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a private key file in a context. The key is given as a path to the\n   file which contains the key. The file is parsed first as PEM and, if that\n   fails, as ASN1. If both fail, an exception is raised.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "contextSetPrivateKeyFile",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e FilePath -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetPrivateKeyFile",
          "type": "function"
        },
        "index": {
          "description": "Install private key file in context The key is given as path to the file which contains the key The file is parsed first as PEM and if that fails as ASN1 If both fail an exception is raised",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetPrivateKeyFile",
          "normalized": "SSLContext-\u003eFilePath-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set Private Key File",
          "signature": "SSLContext-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetPrivateKeyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Session",
          "name": "contextSetVerificationMode",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e VerificationMode -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#contextSetVerificationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "contextSetVerificationMode",
          "normalized": "SSLContext-\u003eVerificationMode-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Set Verification Mode",
          "signature": "SSLContext-\u003eVerificationMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:contextSetVerificationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a socket Fd in an SSL connection.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "fdConnection",
          "package": "HsOpenSSL",
          "signature": "SSLContext -\u003e Fd -\u003e IO SSL",
          "source": "src/OpenSSL-Session.html#fdConnection",
          "type": "function"
        },
        "index": {
          "description": "Wrap socket Fd in an SSL connection",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "fdConnection",
          "normalized": "SSLContext-\u003eFd-\u003eIO SSL",
          "package": "HsOpenSSL",
          "partial": "Connection",
          "signature": "SSLContext-\u003eFd-\u003eIO SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:fdConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter a successful connection, get the certificate of the other party. If\n   this is a server connection, you probably won't get a certificate unless\n   you asked for it with contextSetVerificationMode\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "getPeerCertificate",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e IO (Maybe X509)",
          "source": "src/OpenSSL-Session.html#getPeerCertificate",
          "type": "function"
        },
        "index": {
          "description": "After successful connection get the certificate of the other party If this is server connection you probably won get certificate unless you asked for it with contextSetVerificationMode",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "getPeerCertificate",
          "normalized": "SSL-\u003eIO(Maybe X)",
          "package": "HsOpenSSL",
          "partial": "Peer Certificate",
          "signature": "SSL-\u003eIO(Maybe X)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:getPeerCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the result of verifing the peer's certificate. This is mostly for\n   clients to verify the certificate of the server that they have connected\n   it. You must set a list of root CA certificates with contextSetCA... for\n   this to make sense.\n\u003c/p\u003e\u003cp\u003eNote that this returns True iff the peer's certificate has a valid chain\n   to a root CA. You also need to check that the certificate is correct (i.e.\n   has the correct hostname in it) with getPeerCertificate.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "getVerifyResult",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e IO Bool",
          "source": "src/OpenSSL-Session.html#getVerifyResult",
          "type": "function"
        },
        "index": {
          "description": "Get the result of verifing the peer certificate This is mostly for clients to verify the certificate of the server that they have connected it You must set list of root CA certificates with contextSetCA for this to make sense Note that this returns True iff the peer certificate has valid chain to root CA You also need to check that the certificate is correct i.e has the correct hostname in it with getPeerCertificate",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "getVerifyResult",
          "normalized": "SSL-\u003eIO Bool",
          "package": "HsOpenSSL",
          "partial": "Verify Result",
          "signature": "SSL-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:getVerifyResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read all data until reaching EOF. If the connection dies\n   without a graceful SSL shutdown, an exception is raised.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "lazyRead",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e IO ByteString",
          "source": "src/OpenSSL-Session.html#lazyRead",
          "type": "function"
        },
        "index": {
          "description": "Lazily read all data until reaching EOF If the connection dies without graceful SSL shutdown an exception is raised",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "lazyRead",
          "normalized": "SSL-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "partial": "Read",
          "signature": "SSL-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:lazyRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a lazy ByteString to the SSL connection. In contrast to\n   \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e, there is a chance that the string is written partway and\n   then an exception is raised for an error. The string doesn't\n   necessarily have to be finite.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "lazyWrite",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e ByteString -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#lazyWrite",
          "type": "function"
        },
        "index": {
          "description": "Write lazy ByteString to the SSL connection In contrast to write there is chance that the string is written partway and then an exception is raised for an error The string doesn necessarily have to be finite",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "lazyWrite",
          "normalized": "SSL-\u003eByteString-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Write",
          "signature": "SSL-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:lazyWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to read the given number of bytes from an SSL connection. On EOF an\n   empty ByteString is returned. If the connection dies without a graceful\n   SSL shutdown, an exception is raised.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "read",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e Int -\u003e IO ByteString",
          "source": "src/OpenSSL-Session.html#read",
          "type": "function"
        },
        "index": {
          "description": "Try to read the given number of bytes from an SSL connection On EOF an empty ByteString is returned If the connection dies without graceful SSL shutdown an exception is raised",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "read",
          "normalized": "SSL-\u003eInt-\u003eIO ByteString",
          "package": "HsOpenSSL",
          "signature": "SSL-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead some data into a raw pointer buffer.\n Retrns the number of bytes read.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "readPtr",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e Ptr a -\u003e Int -\u003e IO Int",
          "source": "src/OpenSSL-Session.html#readPtr",
          "type": "function"
        },
        "index": {
          "description": "Read some data into raw pointer buffer Retrns the number of bytes read",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "readPtr",
          "normalized": "SSL-\u003ePtr a-\u003eInt-\u003eIO Int",
          "package": "HsOpenSSL",
          "partial": "Ptr",
          "signature": "SSL-\u003ePtr a-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:readPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCleanly shutdown an SSL connection. Note that SSL has a concept of a\n   secure shutdown, which is distinct from just closing the TCP connection.\n   This performs the former and should always be preferred.\n\u003c/p\u003e\u003cp\u003eThis can either just send a shutdown, or can send and wait for the peer's\n   shutdown message.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "shutdown",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e ShutdownType -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#shutdown",
          "type": "function"
        },
        "index": {
          "description": "Cleanly shutdown an SSL connection Note that SSL has concept of secure shutdown which is distinct from just closing the TCP connection This performs the former and should always be preferred This can either just send shutdown or can send and wait for the peer shutdown message",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "shutdown",
          "normalized": "SSL-\u003eShutdownType-\u003eIO()",
          "package": "HsOpenSSL",
          "signature": "SSL-\u003eShutdownType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the underlying socket Fd\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "sslFd",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e Fd",
          "source": "src/OpenSSL-Session.html#sslFd",
          "type": "function"
        },
        "index": {
          "description": "Get the underlying socket Fd",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "sslFd",
          "normalized": "SSL-\u003eFd",
          "package": "HsOpenSSL",
          "partial": "Fd",
          "signature": "SSL-\u003eFd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:sslFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the socket underlying an SSL connection\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "sslSocket",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e Maybe Socket",
          "source": "src/OpenSSL-Session.html#sslSocket",
          "type": "function"
        },
        "index": {
          "description": "Get the socket underlying an SSL connection",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "sslSocket",
          "normalized": "SSL-\u003eMaybe Socket",
          "package": "HsOpenSSL",
          "partial": "Socket",
          "signature": "SSL-\u003eMaybe Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:sslSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to perform an SSL server handshake without blocking\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "tryAccept",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e IO (SSLResult ())",
          "source": "src/OpenSSL-Session.html#tryAccept",
          "type": "function"
        },
        "index": {
          "description": "Try to perform an SSL server handshake without blocking",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "tryAccept",
          "normalized": "SSL-\u003eIO(SSLResult())",
          "package": "HsOpenSSL",
          "partial": "Accept",
          "signature": "SSL-\u003eIO(SSLResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:tryAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to perform an SSL client handshake without blocking\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "tryConnect",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e IO (SSLResult ())",
          "source": "src/OpenSSL-Session.html#tryConnect",
          "type": "function"
        },
        "index": {
          "description": "Try to perform an SSL client handshake without blocking",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "tryConnect",
          "normalized": "SSL-\u003eIO(SSLResult())",
          "package": "HsOpenSSL",
          "partial": "Connect",
          "signature": "SSL-\u003eIO(SSLResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:tryConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to read the given number of bytes from an SSL connection\n   without blocking.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "tryRead",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e Int -\u003e IO (SSLResult ByteString)",
          "source": "src/OpenSSL-Session.html#tryRead",
          "type": "function"
        },
        "index": {
          "description": "Try to read the given number of bytes from an SSL connection without blocking",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "tryRead",
          "normalized": "SSL-\u003eInt-\u003eIO(SSLResult ByteString)",
          "package": "HsOpenSSL",
          "partial": "Read",
          "signature": "SSL-\u003eInt-\u003eIO(SSLResult ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:tryRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to read some data into a raw pointer buffer, without blocking.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "tryReadPtr",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e Ptr a -\u003e Int -\u003e IO (SSLResult Int)",
          "source": "src/OpenSSL-Session.html#tryReadPtr",
          "type": "function"
        },
        "index": {
          "description": "Try to read some data into raw pointer buffer without blocking",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "tryReadPtr",
          "normalized": "SSL-\u003ePtr a-\u003eInt-\u003eIO(SSLResult Int)",
          "package": "HsOpenSSL",
          "partial": "Read Ptr",
          "signature": "SSL-\u003ePtr a-\u003eInt-\u003eIO(SSLResult Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:tryReadPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to cleanly shutdown an SSL connection without blocking.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "tryShutdown",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e ShutdownType -\u003e IO (SSLResult ())",
          "source": "src/OpenSSL-Session.html#tryShutdown",
          "type": "function"
        },
        "index": {
          "description": "Try to cleanly shutdown an SSL connection without blocking",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "tryShutdown",
          "normalized": "SSL-\u003eShutdownType-\u003eIO(SSLResult())",
          "package": "HsOpenSSL",
          "partial": "Shutdown",
          "signature": "SSL-\u003eShutdownType-\u003eIO(SSLResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:tryShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to write a given ByteString to the SSL connection without blocking.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "tryWrite",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e ByteString -\u003e IO (SSLResult ())",
          "source": "src/OpenSSL-Session.html#tryWrite",
          "type": "function"
        },
        "index": {
          "description": "Try to write given ByteString to the SSL connection without blocking",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "tryWrite",
          "normalized": "SSL-\u003eByteString-\u003eIO(SSLResult())",
          "package": "HsOpenSSL",
          "partial": "Write",
          "signature": "SSL-\u003eByteString-\u003eIO(SSLResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:tryWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend some data from a raw pointer buffer, without blocking.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "tryWritePtr",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e Ptr a -\u003e Int -\u003e IO (SSLResult ())",
          "source": "src/OpenSSL-Session.html#tryWritePtr",
          "type": "function"
        },
        "index": {
          "description": "Send some data from raw pointer buffer without blocking",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "tryWritePtr",
          "normalized": "SSL-\u003ePtr a-\u003eInt-\u003eIO(SSLResult())",
          "package": "HsOpenSSL",
          "partial": "Write Ptr",
          "signature": "SSL-\u003ePtr a-\u003eInt-\u003eIO(SSLResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:tryWritePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptional callback\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "vpCallback",
          "package": "HsOpenSSL",
          "signature": "Maybe (Bool -\u003e X509StoreCtx -\u003e IO Bool)",
          "source": "src/OpenSSL-Session.html#VerificationMode",
          "type": "function"
        },
        "index": {
          "description": "optional callback",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "vpCallback",
          "normalized": "Maybe(Bool-\u003eX StoreCtx-\u003eIO Bool)",
          "package": "HsOpenSSL",
          "partial": "Callback",
          "signature": "Maybe(Bool-\u003eX StoreCtx-\u003eIO Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:vpCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly request once per connection\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "vpClientOnce",
          "package": "HsOpenSSL",
          "signature": "Bool",
          "source": "src/OpenSSL-Session.html#VerificationMode",
          "type": "function"
        },
        "index": {
          "description": "only request once per connection",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "vpClientOnce",
          "package": "HsOpenSSL",
          "partial": "Client Once",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:vpClientOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis a certificate required\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "vpFailIfNoPeerCert",
          "package": "HsOpenSSL",
          "signature": "Bool",
          "source": "src/OpenSSL-Session.html#VerificationMode",
          "type": "function"
        },
        "index": {
          "description": "is certificate required",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "vpFailIfNoPeerCert",
          "package": "HsOpenSSL",
          "partial": "Fail If No Peer Cert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:vpFailIfNoPeerCert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a given ByteString to the SSL connection. Either all the data is\n   written or an exception is raised because of an error.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "write",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e ByteString -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#write",
          "type": "function"
        },
        "index": {
          "description": "Write given ByteString to the SSL connection Either all the data is written or an exception is raised because of an error",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "write",
          "normalized": "SSL-\u003eByteString-\u003eIO()",
          "package": "HsOpenSSL",
          "signature": "SSL-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend some data from a raw pointer buffer.\n\u003c/p\u003e",
          "module": "OpenSSL.Session",
          "name": "writePtr",
          "package": "HsOpenSSL",
          "signature": "SSL -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/OpenSSL-Session.html#writePtr",
          "type": "function"
        },
        "index": {
          "description": "Send some data from raw pointer buffer",
          "hierarchy": "OpenSSL Session",
          "module": "OpenSSL.Session",
          "name": "writePtr",
          "normalized": "SSL-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Ptr",
          "signature": "SSL-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-Session.html#v:writePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to PKCS#10 certificate request.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "Request",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-X509-Request.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to PKCS certificate request",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "Request",
          "package": "HsOpenSSL",
          "partial": "Request",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eX509Req\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an opaque object that represents PKCS#10\n certificate request.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "X509Req",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-X509-Request.html#X509Req",
          "type": "data"
        },
        "index": {
          "description": "X509Req is an opaque object that represents PKCS certificate request",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "X509Req",
          "package": "HsOpenSSL",
          "partial": "Req",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#t:X509Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetPublicKey\u003c/a\u003e\u003c/code\u003e req\u003c/code\u003e returns the public key of the subject of\n certificate request.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "getPublicKey",
          "package": "HsOpenSSL",
          "signature": "X509Req -\u003e IO SomePublicKey",
          "source": "src/OpenSSL-X509-Request.html#getPublicKey",
          "type": "function"
        },
        "index": {
          "description": "getPublicKey req returns the public key of the subject of certificate request",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "getPublicKey",
          "normalized": "X Req-\u003eIO SomePublicKey",
          "package": "HsOpenSSL",
          "partial": "Public Key",
          "signature": "X Req-\u003eIO SomePublicKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:getPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSubjectName\u003c/a\u003e\u003c/code\u003e req wantLongName\u003c/code\u003e returns the subject name of\n certificate request. See \u003ccode\u003e\u003ca\u003egetSubjectName\u003c/a\u003e\u003c/code\u003e of\n \u003ca\u003eOpenSSL.X509\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "getSubjectName",
          "package": "HsOpenSSL",
          "signature": "X509Req -\u003e Bool -\u003e IO [(String, String)]",
          "source": "src/OpenSSL-X509-Request.html#getSubjectName",
          "type": "function"
        },
        "index": {
          "description": "getSubjectName req wantLongName returns the subject name of certificate request See getSubjectName of OpenSSL.X509",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "getSubjectName",
          "normalized": "X Req-\u003eBool-\u003eIO[(String,String)]",
          "package": "HsOpenSSL",
          "partial": "Subject Name",
          "signature": "X Req-\u003eBool-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:getSubjectName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetVersion\u003c/a\u003e\u003c/code\u003e req\u003c/code\u003e returns the version number of certificate\n request.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "getVersion",
          "package": "HsOpenSSL",
          "signature": "X509Req -\u003e IO Int",
          "source": "src/OpenSSL-X509-Request.html#getVersion",
          "type": "function"
        },
        "index": {
          "description": "getVersion req returns the version number of certificate request",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "getVersion",
          "normalized": "X Req-\u003eIO Int",
          "package": "HsOpenSSL",
          "partial": "Version",
          "signature": "X Req-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:getVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emakeX509FromReq\u003c/a\u003e\u003c/code\u003e req cert\u003c/code\u003e creates an empty X.509 certificate\n and copies as much data from the request as possible. The resulting\n certificate doesn't have the following data and it isn't signed so\n you must fill them and sign it yourself.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Serial number\n\u003c/li\u003e\u003cli\u003e Validity (Not Before and Not After)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e import Data.Time.Clock\n\n genCert :: X509 -\u003e EvpPKey -\u003e Integer -\u003e Int -\u003e X509Req -\u003e IO X509\n genCert caCert caKey serial days req\n     = do cert \u003c- makeX509FromReq req caCert\n          now  \u003c- getCurrentTime\n          setSerialNumber cert serial\n          setNotBefore cert $ addUTCTime (-1) now\n          setNotAfter  cert $ addUTCTime (days * 24 * 60 * 60) now\n          signX509 cert caKey Nothing\n          return cert\n\u003c/pre\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "makeX509FromReq",
          "package": "HsOpenSSL",
          "signature": "X509Req -\u003e X509 -\u003e IO X509",
          "source": "src/OpenSSL-X509-Request.html#makeX509FromReq",
          "type": "function"
        },
        "index": {
          "description": "makeX509FromReq req cert creates an empty X.509 certificate and copies as much data from the request as possible The resulting certificate doesn have the following data and it isn signed so you must fill them and sign it yourself Serial number Validity Not Before and Not After Example import Data.Time.Clock genCert X509 EvpPKey Integer Int X509Req IO X509 genCert caCert caKey serial days req do cert makeX509FromReq req caCert now getCurrentTime setSerialNumber cert serial setNotBefore cert addUTCTime now setNotAfter cert addUTCTime days now signX509 cert caKey Nothing return cert",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "makeX509FromReq",
          "normalized": "X Req-\u003eX-\u003eIO X",
          "package": "HsOpenSSL",
          "partial": "From Req",
          "signature": "X Req-\u003eX-\u003eIO X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:makeX509FromReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enewX509Req\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e creates an empty certificate request. You must set\n the following properties to and sign it (see \u003ccode\u003e\u003ca\u003esignX509Req\u003c/a\u003e\u003c/code\u003e) to\n actually use the certificate request.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eVersion\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetVersion\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eSubject Name\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetSubjectName\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ePublic Key\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetPublicKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "newX509Req",
          "package": "HsOpenSSL",
          "signature": "IO X509Req",
          "source": "src/OpenSSL-X509-Request.html#newX509Req",
          "type": "function"
        },
        "index": {
          "description": "newX509Req creates an empty certificate request You must set the following properties to and sign it see signX509Req to actually use the certificate request Version See setVersion Subject Name See setSubjectName Public Key See setPublicKey",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "newX509Req",
          "package": "HsOpenSSL",
          "partial": "Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:newX509Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eprintX509Req\u003c/a\u003e\u003c/code\u003e req\u003c/code\u003e translates a certificate request into\n human-readable format.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "printX509Req",
          "package": "HsOpenSSL",
          "signature": "X509Req -\u003e IO String",
          "source": "src/OpenSSL-X509-Request.html#printX509Req",
          "type": "function"
        },
        "index": {
          "description": "printX509Req req translates certificate request into human-readable format",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "printX509Req",
          "normalized": "X Req-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "Req",
          "signature": "X Req-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:printX509Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetPublicKey\u003c/a\u003e\u003c/code\u003e req\u003c/code\u003e updates the public key of the subject of\n certificate request.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "setPublicKey",
          "package": "HsOpenSSL",
          "signature": "X509Req -\u003e key -\u003e IO ()",
          "source": "src/OpenSSL-X509-Request.html#setPublicKey",
          "type": "function"
        },
        "index": {
          "description": "setPublicKey req updates the public key of the subject of certificate request",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "setPublicKey",
          "normalized": "X Req-\u003ea-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Public Key",
          "signature": "X Req-\u003ekey-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:setPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetSubjectName\u003c/a\u003e\u003c/code\u003e req name\u003c/code\u003e updates the subject name of\n certificate request. See \u003ccode\u003e\u003ca\u003esetSubjectName\u003c/a\u003e\u003c/code\u003e of\n \u003ca\u003eOpenSSL.X509\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "setSubjectName",
          "package": "HsOpenSSL",
          "signature": "X509Req -\u003e [(String, String)] -\u003e IO ()",
          "source": "src/OpenSSL-X509-Request.html#setSubjectName",
          "type": "function"
        },
        "index": {
          "description": "setSubjectName req name updates the subject name of certificate request See setSubjectName of OpenSSL.X509",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "setSubjectName",
          "normalized": "X Req-\u003e[(String,String)]-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Subject Name",
          "signature": "X Req-\u003e[(String,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:setSubjectName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetVersion\u003c/a\u003e\u003c/code\u003e req ver\u003c/code\u003e updates the version number of certificate\n request.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "setVersion",
          "package": "HsOpenSSL",
          "signature": "X509Req -\u003e Int -\u003e IO ()",
          "source": "src/OpenSSL-X509-Request.html#setVersion",
          "type": "function"
        },
        "index": {
          "description": "setVersion req ver updates the version number of certificate request",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "setVersion",
          "normalized": "X Req-\u003eInt-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Version",
          "signature": "X Req-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:setVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esignX509Req\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e signs a certificate request with a subject private\n key.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "signX509Req",
          "package": "HsOpenSSL",
          "signature": "X509Req-\u003e key-\u003e Maybe Digest-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "signX509Req signs certificate request with subject private key",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "signX509Req",
          "normalized": "X Req-\u003ea-\u003eMaybe Digest-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Req",
          "signature": "X Req-\u003ekey-\u003eMaybe Digest-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:signX509Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003everifyX509Req\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e verifies a signature of certificate request with\n a subject public key.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Request",
          "name": "verifyX509Req",
          "package": "HsOpenSSL",
          "signature": "X509Req-\u003e key-\u003e IO VerifyStatus",
          "type": "function"
        },
        "index": {
          "description": "verifyX509Req verifies signature of certificate request with subject public key",
          "hierarchy": "OpenSSL X509 Request",
          "module": "OpenSSL.X509.Request",
          "name": "verifyX509Req",
          "normalized": "X Req-\u003ea-\u003eIO VerifyStatus",
          "package": "HsOpenSSL",
          "partial": "Req",
          "signature": "X Req-\u003ekey-\u003eIO VerifyStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Request.html#v:verifyX509Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to Certificate Revocation List.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "Revocation",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-X509-Revocation.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to Certificate Revocation List",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "Revocation",
          "package": "HsOpenSSL",
          "partial": "Revocation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eCRL\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an opaque object that represents Certificate Revocation\n List.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "CRL",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-X509-Revocation.html#CRL",
          "type": "data"
        },
        "index": {
          "description": "CRL is an opaque object that represents Certificate Revocation List",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "CRL",
          "package": "HsOpenSSL",
          "partial": "CRL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#t:CRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eRevokedCertificate\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a revoked certificate in a\n list. Each certificates are supposed to be distinguishable by\n issuer name and serial number, so it is sufficient to have only\n serial number on each entries.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "RevokedCertificate",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-X509-Revocation.html#RevokedCertificate",
          "type": "data"
        },
        "index": {
          "description": "RevokedCertificate represents revoked certificate in list Each certificates are supposed to be distinguishable by issuer name and serial number so it is sufficient to have only serial number on each entries",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "RevokedCertificate",
          "package": "HsOpenSSL",
          "partial": "Revoked Certificate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#t:RevokedCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.X509.Revocation",
          "name": "RevokedCertificate",
          "package": "HsOpenSSL",
          "signature": "RevokedCertificate",
          "source": "src/OpenSSL-X509-Revocation.html#RevokedCertificate",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "RevokedCertificate",
          "package": "HsOpenSSL",
          "partial": "Revoked Certificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:RevokedCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddRevoked\u003c/a\u003e\u003c/code\u003e crl revoked\u003c/code\u003e add the certificate to the revocation\n list.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "addRevoked",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e RevokedCertificate -\u003e IO ()",
          "source": "src/OpenSSL-X509-Revocation.html#addRevoked",
          "type": "function"
        },
        "index": {
          "description": "addRevoked crl revoked add the certificate to the revocation list",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "addRevoked",
          "normalized": "CRL-\u003eRevokedCertificate-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Revoked",
          "signature": "CRL-\u003eRevokedCertificate-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:addRevoked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetIssuerName\u003c/a\u003e\u003c/code\u003e crl wantLongName\u003c/code\u003e returns the issuer name of\n revocation list. See \u003ccode\u003e\u003ca\u003egetIssuerName\u003c/a\u003e\u003c/code\u003e of\n \u003ca\u003eOpenSSL.X509\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "getIssuerName",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e Bool -\u003e IO [(String, String)]",
          "source": "src/OpenSSL-X509-Revocation.html#getIssuerName",
          "type": "function"
        },
        "index": {
          "description": "getIssuerName crl wantLongName returns the issuer name of revocation list See getIssuerName of OpenSSL.X509",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "getIssuerName",
          "normalized": "CRL-\u003eBool-\u003eIO[(String,String)]",
          "package": "HsOpenSSL",
          "partial": "Issuer Name",
          "signature": "CRL-\u003eBool-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:getIssuerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetLastUpdate\u003c/a\u003e\u003c/code\u003e crl\u003c/code\u003e returns the time when the revocation list\n has last been updated.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "getLastUpdate",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e IO UTCTime",
          "source": "src/OpenSSL-X509-Revocation.html#getLastUpdate",
          "type": "function"
        },
        "index": {
          "description": "getLastUpdate crl returns the time when the revocation list has last been updated",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "getLastUpdate",
          "normalized": "CRL-\u003eIO UTCTime",
          "package": "HsOpenSSL",
          "partial": "Last Update",
          "signature": "CRL-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:getLastUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetNextUpdate\u003c/a\u003e\u003c/code\u003e crl\u003c/code\u003e returns the time when the revocation list\n will next be updated.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "getNextUpdate",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e IO UTCTime",
          "source": "src/OpenSSL-X509-Revocation.html#getNextUpdate",
          "type": "function"
        },
        "index": {
          "description": "getNextUpdate crl returns the time when the revocation list will next be updated",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "getNextUpdate",
          "normalized": "CRL-\u003eIO UTCTime",
          "package": "HsOpenSSL",
          "partial": "Next Update",
          "signature": "CRL-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:getNextUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetRevoked\u003c/a\u003e\u003c/code\u003e crl serial\u003c/code\u003e looks up the corresponding revocation.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "getRevoked",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e Integer -\u003e IO (Maybe RevokedCertificate)",
          "source": "src/OpenSSL-X509-Revocation.html#getRevoked",
          "type": "function"
        },
        "index": {
          "description": "getRevoked crl serial looks up the corresponding revocation",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "getRevoked",
          "normalized": "CRL-\u003eInteger-\u003eIO(Maybe RevokedCertificate)",
          "package": "HsOpenSSL",
          "partial": "Revoked",
          "signature": "CRL-\u003eInteger-\u003eIO(Maybe RevokedCertificate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:getRevoked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetRevokedList\u003c/a\u003e\u003c/code\u003e crl\u003c/code\u003e returns the list of revoked certificates.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "getRevokedList",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e IO [RevokedCertificate]",
          "source": "src/OpenSSL-X509-Revocation.html#getRevokedList",
          "type": "function"
        },
        "index": {
          "description": "getRevokedList crl returns the list of revoked certificates",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "getRevokedList",
          "normalized": "CRL-\u003eIO[RevokedCertificate]",
          "package": "HsOpenSSL",
          "partial": "Revoked List",
          "signature": "CRL-\u003eIO[RevokedCertificate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:getRevokedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetVersion\u003c/a\u003e\u003c/code\u003e crl\u003c/code\u003e returns the version number of revocation list.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "getVersion",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e IO Int",
          "source": "src/OpenSSL-X509-Revocation.html#getVersion",
          "type": "function"
        },
        "index": {
          "description": "getVersion crl returns the version number of revocation list",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "getVersion",
          "normalized": "CRL-\u003eIO Int",
          "package": "HsOpenSSL",
          "partial": "Version",
          "signature": "CRL-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:getVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enewCRL\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e creates an empty revocation list. You must set the\n following properties to and sign it (see \u003ccode\u003e\u003ca\u003esignCRL\u003c/a\u003e\u003c/code\u003e) to actually use\n the revocation list. If you have any certificates to be listed, you\n must of course add them (see \u003ccode\u003e\u003ca\u003eaddRevoked\u003c/a\u003e\u003c/code\u003e) before signing the list.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eVersion\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetVersion\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eLast Update\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetLastUpdate\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eNext Update\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetNextUpdate\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eIssuer Name\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetIssuerName\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "newCRL",
          "package": "HsOpenSSL",
          "signature": "IO CRL",
          "source": "src/OpenSSL-X509-Revocation.html#newCRL",
          "type": "function"
        },
        "index": {
          "description": "newCRL creates an empty revocation list You must set the following properties to and sign it see signCRL to actually use the revocation list If you have any certificates to be listed you must of course add them see addRevoked before signing the list Version See setVersion Last Update See setLastUpdate Next Update See setNextUpdate Issuer Name See setIssuerName",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "newCRL",
          "package": "HsOpenSSL",
          "partial": "CRL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:newCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eprintCRL\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e translates a revocation list into human-readable\n format.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "printCRL",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e IO String",
          "source": "src/OpenSSL-X509-Revocation.html#printCRL",
          "type": "function"
        },
        "index": {
          "description": "printCRL translates revocation list into human-readable format",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "printCRL",
          "normalized": "CRL-\u003eIO String",
          "package": "HsOpenSSL",
          "partial": "CRL",
          "signature": "CRL-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:printCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.X509.Revocation",
          "name": "revRevocationDate",
          "package": "HsOpenSSL",
          "signature": "UTCTime",
          "source": "src/OpenSSL-X509-Revocation.html#RevokedCertificate",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "revRevocationDate",
          "package": "HsOpenSSL",
          "partial": "Revocation Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:revRevocationDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.X509.Revocation",
          "name": "revSerialNumber",
          "package": "HsOpenSSL",
          "signature": "Integer",
          "source": "src/OpenSSL-X509-Revocation.html#RevokedCertificate",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "revSerialNumber",
          "package": "HsOpenSSL",
          "partial": "Serial Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:revSerialNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetIssuerName\u003c/a\u003e\u003c/code\u003e crl name\u003c/code\u003e updates the issuer name of revocation\n list. See \u003ccode\u003e\u003ca\u003esetIssuerName\u003c/a\u003e\u003c/code\u003e of \u003ca\u003eOpenSSL.X509\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "setIssuerName",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e [(String, String)] -\u003e IO ()",
          "source": "src/OpenSSL-X509-Revocation.html#setIssuerName",
          "type": "function"
        },
        "index": {
          "description": "setIssuerName crl name updates the issuer name of revocation list See setIssuerName of OpenSSL.X509",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "setIssuerName",
          "normalized": "CRL-\u003e[(String,String)]-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Issuer Name",
          "signature": "CRL-\u003e[(String,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:setIssuerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetLastUpdate\u003c/a\u003e\u003c/code\u003e crl utc\u003c/code\u003e updates the time when the revocation\n list has last been updated.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "setLastUpdate",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e UTCTime -\u003e IO ()",
          "source": "src/OpenSSL-X509-Revocation.html#setLastUpdate",
          "type": "function"
        },
        "index": {
          "description": "setLastUpdate crl utc updates the time when the revocation list has last been updated",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "setLastUpdate",
          "normalized": "CRL-\u003eUTCTime-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Last Update",
          "signature": "CRL-\u003eUTCTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:setLastUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetNextUpdate\u003c/a\u003e\u003c/code\u003e crl utc\u003c/code\u003e updates the time when the revocation\n list will next be updated.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "setNextUpdate",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e UTCTime -\u003e IO ()",
          "source": "src/OpenSSL-X509-Revocation.html#setNextUpdate",
          "type": "function"
        },
        "index": {
          "description": "setNextUpdate crl utc updates the time when the revocation list will next be updated",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "setNextUpdate",
          "normalized": "CRL-\u003eUTCTime-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Next Update",
          "signature": "CRL-\u003eUTCTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:setNextUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetVersion\u003c/a\u003e\u003c/code\u003e crl ver\u003c/code\u003e updates the version number of revocation\n list.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "setVersion",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e Int -\u003e IO ()",
          "source": "src/OpenSSL-X509-Revocation.html#setVersion",
          "type": "function"
        },
        "index": {
          "description": "setVersion crl ver updates the version number of revocation list",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "setVersion",
          "normalized": "CRL-\u003eInt-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Version",
          "signature": "CRL-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:setVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esignCRL\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e signs a revocation list with an issuer private key.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "signCRL",
          "package": "HsOpenSSL",
          "signature": "CRL-\u003e key-\u003e Maybe Digest-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "signCRL signs revocation list with an issuer private key",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "signCRL",
          "normalized": "CRL-\u003ea-\u003eMaybe Digest-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "CRL",
          "signature": "CRL-\u003ekey-\u003eMaybe Digest-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:signCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esortCRL\u003c/a\u003e\u003c/code\u003e crl\u003c/code\u003e sorts the certificates in the revocation list.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "sortCRL",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e IO ()",
          "source": "src/OpenSSL-X509-Revocation.html#sortCRL",
          "type": "function"
        },
        "index": {
          "description": "sortCRL crl sorts the certificates in the revocation list",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "sortCRL",
          "normalized": "CRL-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "CRL",
          "signature": "CRL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:sortCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003everifyCRL\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e verifies a signature of revocation list with an\n issuer public key.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Revocation",
          "name": "verifyCRL",
          "package": "HsOpenSSL",
          "signature": "CRL -\u003e key -\u003e IO VerifyStatus",
          "source": "src/OpenSSL-X509-Revocation.html#verifyCRL",
          "type": "function"
        },
        "index": {
          "description": "verifyCRL verifies signature of revocation list with an issuer public key",
          "hierarchy": "OpenSSL X509 Revocation",
          "module": "OpenSSL.X509.Revocation",
          "name": "verifyCRL",
          "normalized": "CRL-\u003ea-\u003eIO VerifyStatus",
          "package": "HsOpenSSL",
          "partial": "CRL",
          "signature": "CRL-\u003ekey-\u003eIO VerifyStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Revocation.html#v:verifyCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to X.509 certificate store.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.X509.Store",
          "name": "Store",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-X509-Store.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to X.509 certificate store",
          "hierarchy": "OpenSSL X509 Store",
          "module": "OpenSSL.X509.Store",
          "name": "Store",
          "package": "HsOpenSSL",
          "partial": "Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Store.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eX509Store\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an opaque object that represents X.509\n certificate store. The certificate store is usually used for chain\n verification.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Store",
          "name": "X509Store",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-X509-Store.html#X509Store",
          "type": "data"
        },
        "index": {
          "description": "X509Store is an opaque object that represents X.509 certificate store The certificate store is usually used for chain verification",
          "hierarchy": "OpenSSL X509 Store",
          "module": "OpenSSL.X509.Store",
          "name": "X509Store",
          "package": "HsOpenSSL",
          "partial": "Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Store.html#t:X509Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddCRLToStore\u003c/a\u003e\u003c/code\u003e store crl\u003c/code\u003e adds a revocation list to store.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Store",
          "name": "addCRLToStore",
          "package": "HsOpenSSL",
          "signature": "X509Store -\u003e CRL -\u003e IO ()",
          "source": "src/OpenSSL-X509-Store.html#addCRLToStore",
          "type": "function"
        },
        "index": {
          "description": "addCRLToStore store crl adds revocation list to store",
          "hierarchy": "OpenSSL X509 Store",
          "module": "OpenSSL.X509.Store",
          "name": "addCRLToStore",
          "normalized": "X Store-\u003eCRL-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "CRLTo Store",
          "signature": "X Store-\u003eCRL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Store.html#v:addCRLToStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddCertToStore\u003c/a\u003e\u003c/code\u003e store cert\u003c/code\u003e adds a certificate to store.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Store",
          "name": "addCertToStore",
          "package": "HsOpenSSL",
          "signature": "X509Store -\u003e X509 -\u003e IO ()",
          "source": "src/OpenSSL-X509-Store.html#addCertToStore",
          "type": "function"
        },
        "index": {
          "description": "addCertToStore store cert adds certificate to store",
          "hierarchy": "OpenSSL X509 Store",
          "module": "OpenSSL.X509.Store",
          "name": "addCertToStore",
          "normalized": "X Store-\u003eX-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Cert To Store",
          "signature": "X Store-\u003eX-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Store.html#v:addCertToStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enewX509Store\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e creates an empty X.509 certificate store.\n\u003c/p\u003e",
          "module": "OpenSSL.X509.Store",
          "name": "newX509Store",
          "package": "HsOpenSSL",
          "signature": "IO X509Store",
          "source": "src/OpenSSL-X509-Store.html#newX509Store",
          "type": "function"
        },
        "index": {
          "description": "newX509Store creates an empty X.509 certificate store",
          "hierarchy": "OpenSSL X509 Store",
          "module": "OpenSSL.X509.Store",
          "name": "newX509Store",
          "package": "HsOpenSSL",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509-Store.html#v:newX509Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to X.509 certificate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.X509",
          "name": "X509",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-X509.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to X.509 certificate",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "X509",
          "package": "HsOpenSSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eX509\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an opaque object that represents X.509 certificate.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "X509",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL-X509.html#X509",
          "type": "data"
        },
        "index": {
          "description": "X509 is an opaque object that represents X.509 certificate",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "X509",
          "package": "HsOpenSSL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#t:X509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecompareX509\u003c/a\u003e\u003c/code\u003e cert1 cert2\u003c/code\u003e compares two certificates.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "compareX509",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e X509 -\u003e IO Ordering",
          "source": "src/OpenSSL-X509.html#compareX509",
          "type": "function"
        },
        "index": {
          "description": "compareX509 cert1 cert2 compares two certificates",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "compareX509",
          "normalized": "X-\u003eX-\u003eIO Ordering",
          "package": "HsOpenSSL",
          "signature": "X-\u003eX-\u003eIO Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:compareX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetIssuerName\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e returns the issuer name of certificate.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "getIssuerName",
          "package": "HsOpenSSL",
          "signature": "X509-\u003e Bool-\u003e IO [(String, String)]",
          "type": "function"
        },
        "index": {
          "description": "getIssuerName returns the issuer name of certificate",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "getIssuerName",
          "normalized": "X-\u003eBool-\u003eIO[(String,String)]",
          "package": "HsOpenSSL",
          "partial": "Issuer Name",
          "signature": "X-\u003eBool-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:getIssuerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetNotAfter\u003c/a\u003e\u003c/code\u003e cert\u003c/code\u003e returns the time when the certificate\n expires.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "getNotAfter",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e IO UTCTime",
          "source": "src/OpenSSL-X509.html#getNotAfter",
          "type": "function"
        },
        "index": {
          "description": "getNotAfter cert returns the time when the certificate expires",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "getNotAfter",
          "normalized": "X-\u003eIO UTCTime",
          "package": "HsOpenSSL",
          "partial": "Not After",
          "signature": "X-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:getNotAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetNotBefore\u003c/a\u003e\u003c/code\u003e cert\u003c/code\u003e returns the time when the certificate begins\n to be valid.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "getNotBefore",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e IO UTCTime",
          "source": "src/OpenSSL-X509.html#getNotBefore",
          "type": "function"
        },
        "index": {
          "description": "getNotBefore cert returns the time when the certificate begins to be valid",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "getNotBefore",
          "normalized": "X-\u003eIO UTCTime",
          "package": "HsOpenSSL",
          "partial": "Not Before",
          "signature": "X-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:getNotBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetPublicKey\u003c/a\u003e\u003c/code\u003e cert\u003c/code\u003e returns the public key of the subject of\n certificate.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "getPublicKey",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e IO SomePublicKey",
          "source": "src/OpenSSL-X509.html#getPublicKey",
          "type": "function"
        },
        "index": {
          "description": "getPublicKey cert returns the public key of the subject of certificate",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "getPublicKey",
          "normalized": "X-\u003eIO SomePublicKey",
          "package": "HsOpenSSL",
          "partial": "Public Key",
          "signature": "X-\u003eIO SomePublicKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:getPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSerialNumber\u003c/a\u003e\u003c/code\u003e cert\u003c/code\u003e returns the serial number of certificate.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "getSerialNumber",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e IO Integer",
          "source": "src/OpenSSL-X509.html#getSerialNumber",
          "type": "function"
        },
        "index": {
          "description": "getSerialNumber cert returns the serial number of certificate",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "getSerialNumber",
          "normalized": "X-\u003eIO Integer",
          "package": "HsOpenSSL",
          "partial": "Serial Number",
          "signature": "X-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:getSerialNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSubjectEmail\u003c/a\u003e\u003c/code\u003e cert\u003c/code\u003e returns every subject email addresses in\n the certificate.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "getSubjectEmail",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e IO [String]",
          "source": "src/OpenSSL-X509.html#getSubjectEmail",
          "type": "function"
        },
        "index": {
          "description": "getSubjectEmail cert returns every subject email addresses in the certificate",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "getSubjectEmail",
          "normalized": "X-\u003eIO[String]",
          "package": "HsOpenSSL",
          "partial": "Subject Email",
          "signature": "X-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:getSubjectEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSubjectName\u003c/a\u003e\u003c/code\u003e cert wantLongName\u003c/code\u003e returns the subject name of\n certificate. See \u003ccode\u003e\u003ca\u003egetIssuerName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "getSubjectName",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e Bool -\u003e IO [(String, String)]",
          "source": "src/OpenSSL-X509.html#getSubjectName",
          "type": "function"
        },
        "index": {
          "description": "getSubjectName cert wantLongName returns the subject name of certificate See getIssuerName",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "getSubjectName",
          "normalized": "X-\u003eBool-\u003eIO[(String,String)]",
          "package": "HsOpenSSL",
          "partial": "Subject Name",
          "signature": "X-\u003eBool-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:getSubjectName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetVersion\u003c/a\u003e\u003c/code\u003e cert\u003c/code\u003e returns the version number of certificate. It\n seems the number is 0-origin: version 2 means X.509 v3.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "getVersion",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e IO Int",
          "source": "src/OpenSSL-X509.html#getVersion",
          "type": "function"
        },
        "index": {
          "description": "getVersion cert returns the version number of certificate It seems the number is origin version means X.509 v3",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "getVersion",
          "normalized": "X-\u003eIO Int",
          "package": "HsOpenSSL",
          "partial": "Version",
          "signature": "X-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:getVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enewX509\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e creates an empty certificate. You must set the\n following properties to and sign it (see \u003ccode\u003e\u003ca\u003esignX509\u003c/a\u003e\u003c/code\u003e) to actually\n use the certificate.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eVersion\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetVersion\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eSerial number\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetSerialNumber\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eIssuer name\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetIssuerName\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eSubject name\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetSubjectName\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eValidity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetNotBefore\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetNotAfter\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ePublic Key\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e See \u003ccode\u003e\u003ca\u003esetPublicKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "OpenSSL.X509",
          "name": "newX509",
          "package": "HsOpenSSL",
          "signature": "IO X509",
          "source": "src/OpenSSL-X509.html#newX509",
          "type": "function"
        },
        "index": {
          "description": "newX509 creates an empty certificate You must set the following properties to and sign it see signX509 to actually use the certificate Version See setVersion Serial number See setSerialNumber Issuer name See setIssuerName Subject name See setSubjectName Validity See setNotBefore and setNotAfter Public Key See setPublicKey",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "newX509",
          "package": "HsOpenSSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:newX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eprintX509\u003c/a\u003e\u003c/code\u003e cert\u003c/code\u003e translates a certificate into human-readable\n format.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "printX509",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e IO String",
          "source": "src/OpenSSL-X509.html#printX509",
          "type": "function"
        },
        "index": {
          "description": "printX509 cert translates certificate into human-readable format",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "printX509",
          "normalized": "X-\u003eIO String",
          "package": "HsOpenSSL",
          "signature": "X-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:printX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetIssuerName\u003c/a\u003e\u003c/code\u003e cert name\u003c/code\u003e updates the issuer name of\n certificate. Keys of each parts may be of either long form or short\n form. See \u003ccode\u003e\u003ca\u003egetIssuerName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "setIssuerName",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e [(String, String)] -\u003e IO ()",
          "source": "src/OpenSSL-X509.html#setIssuerName",
          "type": "function"
        },
        "index": {
          "description": "setIssuerName cert name updates the issuer name of certificate Keys of each parts may be of either long form or short form See getIssuerName",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "setIssuerName",
          "normalized": "X-\u003e[(String,String)]-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Issuer Name",
          "signature": "X-\u003e[(String,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:setIssuerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetNotAfter\u003c/a\u003e\u003c/code\u003e cert utc\u003c/code\u003e updates the time when the certificate\n expires.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "setNotAfter",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e UTCTime -\u003e IO ()",
          "source": "src/OpenSSL-X509.html#setNotAfter",
          "type": "function"
        },
        "index": {
          "description": "setNotAfter cert utc updates the time when the certificate expires",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "setNotAfter",
          "normalized": "X-\u003eUTCTime-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Not After",
          "signature": "X-\u003eUTCTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:setNotAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetNotBefore\u003c/a\u003e\u003c/code\u003e cert utc\u003c/code\u003e updates the time when the certificate\n begins to be valid.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "setNotBefore",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e UTCTime -\u003e IO ()",
          "source": "src/OpenSSL-X509.html#setNotBefore",
          "type": "function"
        },
        "index": {
          "description": "setNotBefore cert utc updates the time when the certificate begins to be valid",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "setNotBefore",
          "normalized": "X-\u003eUTCTime-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Not Before",
          "signature": "X-\u003eUTCTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:setNotBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetPublicKey\u003c/a\u003e\u003c/code\u003e cert pubkey\u003c/code\u003e updates the public key of the subject\n of certificate.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "setPublicKey",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e key -\u003e IO ()",
          "source": "src/OpenSSL-X509.html#setPublicKey",
          "type": "function"
        },
        "index": {
          "description": "setPublicKey cert pubkey updates the public key of the subject of certificate",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "setPublicKey",
          "normalized": "X-\u003ea-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Public Key",
          "signature": "X-\u003ekey-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:setPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetSerialNumber\u003c/a\u003e\u003c/code\u003e cert num\u003c/code\u003e updates the serial number of\n certificate.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "setSerialNumber",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e Integer -\u003e IO ()",
          "source": "src/OpenSSL-X509.html#setSerialNumber",
          "type": "function"
        },
        "index": {
          "description": "setSerialNumber cert num updates the serial number of certificate",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "setSerialNumber",
          "normalized": "X-\u003eInteger-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Serial Number",
          "signature": "X-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:setSerialNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetSubjectName\u003c/a\u003e\u003c/code\u003e cert name\u003c/code\u003e updates the subject name of\n certificate. See \u003ccode\u003e\u003ca\u003esetIssuerName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "setSubjectName",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e [(String, String)] -\u003e IO ()",
          "source": "src/OpenSSL-X509.html#setSubjectName",
          "type": "function"
        },
        "index": {
          "description": "setSubjectName cert name updates the subject name of certificate See setIssuerName",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "setSubjectName",
          "normalized": "X-\u003e[(String,String)]-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Subject Name",
          "signature": "X-\u003e[(String,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:setSubjectName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetVersion\u003c/a\u003e\u003c/code\u003e cert ver\u003c/code\u003e updates the version number of certificate.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "setVersion",
          "package": "HsOpenSSL",
          "signature": "X509 -\u003e Int -\u003e IO ()",
          "source": "src/OpenSSL-X509.html#setVersion",
          "type": "function"
        },
        "index": {
          "description": "setVersion cert ver updates the version number of certificate",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "setVersion",
          "normalized": "X-\u003eInt-\u003eIO()",
          "package": "HsOpenSSL",
          "partial": "Version",
          "signature": "X-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:setVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esignX509\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e signs a certificate with an issuer private key.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "signX509",
          "package": "HsOpenSSL",
          "signature": "X509-\u003e key-\u003e Maybe Digest-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "signX509 signs certificate with an issuer private key",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "signX509",
          "normalized": "X-\u003ea-\u003eMaybe Digest-\u003eIO()",
          "package": "HsOpenSSL",
          "signature": "X-\u003ekey-\u003eMaybe Digest-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:signX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003everifyX509\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e verifies a signature of certificate with an issuer\n public key.\n\u003c/p\u003e",
          "module": "OpenSSL.X509",
          "name": "verifyX509",
          "package": "HsOpenSSL",
          "signature": "X509-\u003e key-\u003e IO VerifyStatus",
          "type": "function"
        },
        "index": {
          "description": "verifyX509 verifies signature of certificate with an issuer public key",
          "hierarchy": "OpenSSL X509",
          "module": "OpenSSL.X509",
          "name": "verifyX509",
          "normalized": "X-\u003ea-\u003eIO VerifyStatus",
          "package": "HsOpenSSL",
          "signature": "X-\u003ekey-\u003eIO VerifyStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL-X509.html#v:verifyX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHsOpenSSL is an OpenSSL binding for Haskell. It can generate RSA\n and DSA keys, read and write PEM files, generate message digests,\n sign and verify messages, encrypt and decrypt messages.\n\u003c/p\u003e\u003cp\u003ePlease note that this project has started at the time when there\n were no pure-Haskell implementations of TLS. Now there is tls\n package (\u003ca\u003ehttp://hackage.haskell.org/package/tls\u003c/a\u003e), which looks\n pretty saner than HsOpenSSL especially for initialisation and error\n handlings. So PHO (the initial author of HsOpenSSL) wants to\n encourage you to use and improve the tls package instead as long as\n possible. The only problem is that the tls package has not received\n as much review as OpenSSL from cryptography specialists yet, thus\n we can't assume it's secure enough.\n\u003c/p\u003e\u003cp\u003eFeatures that aren't (yet) supported:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eSSL network connection\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e ssl(3) functionalities aren't fully\n   covered yet. See \u003ca\u003eOpenSSL.Session\u003c/a\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eComplete coverage of Low-level API to symmetric ciphers\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e Only\n   high-level APIs (EVP and BIO) are fully available. But I believe\n   no one will be lost without functions like \u003ccode\u003eDES_set_odd_parity\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eLow-level API to asymmetric ciphers\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e Only a high-level API\n   (EVP) is available. But I believe no one will complain about the\n   absence of functions like \u003ccode\u003eRSA_public_encrypt\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eKey generation of Diffie-Hellman algorithm\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e Only RSA and DSA\n   keys can currently be generated.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eX.509 v3 extension handling\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e It should be supported in the\n   future.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eLow-level API to message digest functions\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e Just use EVP\n   instead of something like \u003ccode\u003eMD5_Update\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eAPI to PKCS#12 functionality\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e It should be covered someday.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eBIO\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e BIO isn't needed because we are Haskell hackers. Though\n   HsOpenSSL itself uses BIO internally.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eENGINE cryptographic module\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e The default implementations work\n   very well, don't they?\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "OpenSSL",
          "name": "OpenSSL",
          "package": "HsOpenSSL",
          "source": "src/OpenSSL.html",
          "type": "module"
        },
        "index": {
          "description": "HsOpenSSL is an OpenSSL binding for Haskell It can generate RSA and DSA keys read and write PEM files generate message digests sign and verify messages encrypt and decrypt messages Please note that this project has started at the time when there were no pure-Haskell implementations of TLS Now there is tls package http hackage.haskell.org package tls which looks pretty saner than HsOpenSSL especially for initialisation and error handlings So PHO the initial author of HsOpenSSL wants to encourage you to use and improve the tls package instead as long as possible The only problem is that the tls package has not received as much review as OpenSSL from cryptography specialists yet thus we can assume it secure enough Features that aren yet supported SSL network connection ssl functionalities aren fully covered yet See OpenSSL.Session Complete coverage of Low-level API to symmetric ciphers Only high-level APIs EVP and BIO are fully available But believe no one will be lost without functions like DES set odd parity Low-level API to asymmetric ciphers Only high-level API EVP is available But believe no one will complain about the absence of functions like RSA public encrypt Key generation of Diffie-Hellman algorithm Only RSA and DSA keys can currently be generated X.509 v3 extension handling It should be supported in the future Low-level API to message digest functions Just use EVP instead of something like MD5 Update API to PKCS functionality It should be covered someday BIO BIO isn needed because we are Haskell hackers Though HsOpenSSL itself uses BIO internally ENGINE cryptographic module The default implementations work very well don they",
          "hierarchy": "OpenSSL",
          "module": "OpenSSL",
          "name": "OpenSSL",
          "package": "HsOpenSSL",
          "partial": "Open SSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithOpenSSL\u003c/a\u003e\u003c/code\u003e action\u003c/code\u003e initializes the OpenSSL\n library as necessary, and computes \u003ccode\u003eaction\u003c/code\u003e. Every application that\n uses HsOpenSSL must wrap any operations involving OpenSSL with\n \u003ccode\u003e\u003ca\u003ewithOpenSSL\u003c/a\u003e\u003c/code\u003e, or they might crash:\n\u003c/p\u003e\u003cpre\u003e module Main where\n import OpenSSL\n\n main :: IO ()\n main = withOpenSSL $\n        do ...\n\u003c/pre\u003e\u003cp\u003eSince 0.10.3.5, \u003ccode\u003e\u003ca\u003ewithOpenSSL\u003c/a\u003e\u003c/code\u003e is safe to be applied\n redundantly. Library authors may wish to wrap their functions not\n to force their users to think about initialization:\n\u003c/p\u003e\u003cpre\u003e get :: URI -\u003e IO Response\n get uri = withOpenSSL $ internalImplementationOfGet uri\n\u003c/pre\u003e",
          "module": "OpenSSL",
          "name": "withOpenSSL",
          "package": "HsOpenSSL",
          "signature": "IO a -\u003e IO a",
          "source": "src/OpenSSL.html#withOpenSSL",
          "type": "function"
        },
        "index": {
          "description": "Computation of withOpenSSL action initializes the OpenSSL library as necessary and computes action Every application that uses HsOpenSSL must wrap any operations involving OpenSSL with withOpenSSL or they might crash module Main where import OpenSSL main IO main withOpenSSL do Since withOpenSSL is safe to be applied redundantly Library authors may wish to wrap their functions not to force their users to think about initialization get URI IO Response get uri withOpenSSL internalImplementationOfGet uri",
          "hierarchy": "OpenSSL",
          "module": "OpenSSL",
          "name": "withOpenSSL",
          "normalized": "IO a-\u003eIO a",
          "package": "HsOpenSSL",
          "partial": "Open SSL",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsOpenSSL/docs/OpenSSL.html#v:withOpenSSL"
      }
    }
  ]
]