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
        "word": "mersenne-random-pure64"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 6.8.3\n\u003c/p\u003e\u003cp\u003eA purely functional binding 64 bit binding to the classic mersenne\n twister random number generator. This is more flexible than the\n impure 'mersenne-random' library, at the cost of being a bit slower.\n This generator is however, many times faster than System.Random,\n and yields high quality randoms with a long period.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "Base",
          "package": "mersenne-random-pure64",
          "source": "src/System-Random-Mersenne-Pure64-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC purely functional binding bit binding to the classic mersenne twister random number generator This is more flexible than the impure mersenne-random library at the cost of being bit slower This generator is however many times faster than System.Random and yields high quality randoms with long period",
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "Base",
          "package": "mersenne-random-pure64",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "MTState",
          "package": "mersenne-random-pure64",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#MTState",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "MTState",
          "package": "mersenne-random-pure64",
          "partial": "MTState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#t:MTState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "UInt64",
          "package": "mersenne-random-pure64",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#UInt64",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "UInt64",
          "package": "mersenne-random-pure64",
          "partial": "UInt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#t:UInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elength of an MT block\n\u003c/p\u003e",
          "module": "[\"System.Random.Mersenne.Pure64.Base\",\"System.Random.Mersenne.Pure64.MTBlock\"]",
          "name": "blockLen",
          "package": "mersenne-random-pure64",
          "signature": "Int",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#blockLen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:blockLen\",\"http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-MTBlock.html#v:blockLen\"]"
        },
        "index": {
          "description": "length of an MT block",
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "blockLen",
          "package": "mersenne-random-pure64",
          "partial": "Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:blockLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esize of an MT block, in bytes\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "blockSize",
          "package": "mersenne-random-pure64",
          "signature": "Int",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#blockSize",
          "type": "function"
        },
        "index": {
          "description": "size of an MT block in bytes",
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "blockSize",
          "package": "mersenne-random-pure64",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_genrand64_int64",
          "package": "mersenne-random-pure64",
          "signature": "Ptr MTState -\u003e IO UInt64",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_genrand64_int64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_genrand64_int64",
          "normalized": "Ptr MTState-\u003eIO UInt",
          "package": "mersenne-random-pure64",
          "signature": "Ptr MTState-\u003eIO UInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_genrand64_int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_genrand64_int64_unsafe",
          "package": "mersenne-random-pure64",
          "signature": "IO UInt64",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_genrand64_int64_unsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_genrand64_int64_unsafe",
          "package": "mersenne-random-pure64",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_genrand64_int64_unsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_genrand64_real2",
          "package": "mersenne-random-pure64",
          "signature": "Ptr MTState -\u003e IO CDouble",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_genrand64_real2",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_genrand64_real2",
          "normalized": "Ptr MTState-\u003eIO CDouble",
          "package": "mersenne-random-pure64",
          "signature": "Ptr MTState-\u003eIO CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_genrand64_real2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_genrand64_real2_unsafe",
          "package": "mersenne-random-pure64",
          "signature": "IO CDouble",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_genrand64_real2_unsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_genrand64_real2_unsafe",
          "package": "mersenne-random-pure64",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_genrand64_real2_unsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_init_genrand64",
          "package": "mersenne-random-pure64",
          "signature": "Ptr MTState -\u003e UInt64 -\u003e IO ()",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_init_genrand64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_init_genrand64",
          "normalized": "Ptr MTState-\u003eUInt-\u003eIO()",
          "package": "mersenne-random-pure64",
          "signature": "Ptr MTState-\u003eUInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_init_genrand64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_init_genrand64_unsafe",
          "package": "mersenne-random-pure64",
          "signature": "UInt64 -\u003e IO ()",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_init_genrand64_unsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_init_genrand64_unsafe",
          "normalized": "UInt-\u003eIO()",
          "package": "mersenne-random-pure64",
          "signature": "UInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_init_genrand64_unsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_memcpy",
          "package": "mersenne-random-pure64",
          "signature": "Ptr Word8 -\u003e Ptr Word8 -\u003e CSize -\u003e IO (Ptr Word8)",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_memcpy",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_memcpy",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eCSize-\u003eIO(Ptr Word)",
          "package": "mersenne-random-pure64",
          "signature": "Ptr Word-\u003ePtr Word-\u003eCSize-\u003eIO(Ptr Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_memcpy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_mix_word64",
          "package": "mersenne-random-pure64",
          "signature": "Word64 -\u003e Word64",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_mix_word64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_mix_word64",
          "normalized": "Word-\u003eWord",
          "package": "mersenne-random-pure64",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_mix_word64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_next_genrand64_block",
          "package": "mersenne-random-pure64",
          "signature": "Ptr a -\u003e Ptr a -\u003e IO ()",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_next_genrand64_block",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_next_genrand64_block",
          "normalized": "Ptr a-\u003ePtr a-\u003eIO()",
          "package": "mersenne-random-pure64",
          "signature": "Ptr a-\u003ePtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_next_genrand64_block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_seed_genrand64_block",
          "package": "mersenne-random-pure64",
          "signature": "Ptr a -\u003e Word64 -\u003e IO ()",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#c_seed_genrand64_block",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "c_seed_genrand64_block",
          "normalized": "Ptr a-\u003eWord-\u003eIO()",
          "package": "mersenne-random-pure64",
          "signature": "Ptr a-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:c_seed_genrand64_block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "sizeof_MTState",
          "package": "mersenne-random-pure64",
          "signature": "Int",
          "source": "src/System-Random-Mersenne-Pure64-Base.html#sizeof_MTState",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 Base",
          "module": "System.Random.Mersenne.Pure64.Base",
          "name": "sizeof_MTState",
          "package": "mersenne-random-pure64",
          "partial": "MTState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-Base.html#v:sizeof_MTState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA purely functional binding 64 bit binding to the classic mersenne\n twister random number generator. This is more flexible than the\n impure 'mersenne-random' library, at the cost of being a bit slower.\n This generator is however, many times faster than System.Random,\n and yields high quality randoms with a long period.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "MTBlock",
          "package": "mersenne-random-pure64",
          "source": "src/System-Random-Mersenne-Pure64-MTBlock.html",
          "type": "module"
        },
        "index": {
          "description": "purely functional binding bit binding to the classic mersenne twister random number generator This is more flexible than the impure mersenne-random library at the cost of being bit slower This generator is however many times faster than System.Random and yields high quality randoms with long period",
          "hierarchy": "System Random Mersenne Pure64 MTBlock",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "MTBlock",
          "package": "mersenne-random-pure64",
          "partial": "MTBlock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-MTBlock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "MTBlock",
          "package": "mersenne-random-pure64",
          "source": "src/System-Random-Mersenne-Pure64-MTBlock.html#MTBlock",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Random Mersenne Pure64 MTBlock",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "MTBlock",
          "package": "mersenne-random-pure64",
          "partial": "MTBlock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-MTBlock.html#t:MTBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elook up an element of an MT block\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "lookupBlock",
          "package": "mersenne-random-pure64",
          "signature": "MTBlock -\u003e Int -\u003e Word64",
          "source": "src/System-Random-Mersenne-Pure64-MTBlock.html#lookupBlock",
          "type": "function"
        },
        "index": {
          "description": "look up an element of an MT block",
          "hierarchy": "System Random Mersenne Pure64 MTBlock",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "lookupBlock",
          "normalized": "MTBlock-\u003eInt-\u003eWord",
          "package": "mersenne-random-pure64",
          "partial": "Block",
          "signature": "MTBlock-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-MTBlock.html#v:lookupBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMT's word mix function.\n\u003c/p\u003e\u003cp\u003e(MT applies this function to each Word64 from the buffer before returning it)\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "mixWord64",
          "package": "mersenne-random-pure64",
          "signature": "Word64 -\u003e Word64",
          "source": "src/System-Random-Mersenne-Pure64-MTBlock.html#mixWord64",
          "type": "function"
        },
        "index": {
          "description": "MT word mix function MT applies this function to each Word64 from the buffer before returning it",
          "hierarchy": "System Random Mersenne Pure64 MTBlock",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "mixWord64",
          "normalized": "Word-\u003eWord",
          "package": "mersenne-random-pure64",
          "partial": "Word",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-MTBlock.html#v:mixWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estep: create a new MTBlock buffer from the previous one\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "nextBlock",
          "package": "mersenne-random-pure64",
          "signature": "MTBlock -\u003e MTBlock",
          "source": "src/System-Random-Mersenne-Pure64-MTBlock.html#nextBlock",
          "type": "function"
        },
        "index": {
          "description": "step create new MTBlock buffer from the previous one",
          "hierarchy": "System Random Mersenne Pure64 MTBlock",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "nextBlock",
          "normalized": "MTBlock-\u003eMTBlock",
          "package": "mersenne-random-pure64",
          "partial": "Block",
          "signature": "MTBlock-\u003eMTBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-MTBlock.html#v:nextBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new MT block, seeded with the given Word64 value\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "seedBlock",
          "package": "mersenne-random-pure64",
          "signature": "Word64 -\u003e MTBlock",
          "source": "src/System-Random-Mersenne-Pure64-MTBlock.html#seedBlock",
          "type": "function"
        },
        "index": {
          "description": "create new MT block seeded with the given Word64 value",
          "hierarchy": "System Random Mersenne Pure64 MTBlock",
          "module": "System.Random.Mersenne.Pure64.MTBlock",
          "name": "seedBlock",
          "normalized": "Word-\u003eMTBlock",
          "package": "mersenne-random-pure64",
          "partial": "Block",
          "signature": "Word-\u003eMTBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64-MTBlock.html#v:seedBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 6.8.3\n\u003c/p\u003e\u003cp\u003eA purely functional binding 64 bit binding to the classic mersenne\n twister random number generator. This is more flexible than the\n impure 'mersenne-random' library, at the cost of being a bit slower.\n This generator is however, many times faster than System.Random,\n and yields high quality randoms with a long period.\n\u003c/p\u003e\u003cp\u003eThis generator may be used with System.Random, however, that is\n likely to be slower than using it directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.Mersenne.Pure64",
          "name": "Pure64",
          "package": "mersenne-random-pure64",
          "source": "src/System-Random-Mersenne-Pure64.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC purely functional binding bit binding to the classic mersenne twister random number generator This is more flexible than the impure mersenne-random library at the cost of being bit slower This generator is however many times faster than System.Random and yields high quality randoms with long period This generator may be used with System.Random however that is likely to be slower than using it directly",
          "hierarchy": "System Random Mersenne Pure64",
          "module": "System.Random.Mersenne.Pure64",
          "name": "Pure64",
          "package": "mersenne-random-pure64",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePureMT\u003c/a\u003e\u003c/code\u003e, a pure mersenne twister pseudo-random number generator\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64",
          "name": "PureMT",
          "package": "mersenne-random-pure64",
          "source": "src/System-Random-Mersenne-Pure64.html#PureMT",
          "type": "data"
        },
        "index": {
          "description": "PureMT pure mersenne twister pseudo-random number generator",
          "hierarchy": "System Random Mersenne Pure64",
          "module": "System.Random.Mersenne.Pure64",
          "name": "PureMT",
          "package": "mersenne-random-pure64",
          "partial": "Pure MT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64.html#t:PureMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new PureMT generator, using the clocktime as the base for the seed.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64",
          "name": "newPureMT",
          "package": "mersenne-random-pure64",
          "signature": "IO PureMT",
          "source": "src/System-Random-Mersenne-Pure64.html#newPureMT",
          "type": "function"
        },
        "index": {
          "description": "Create new PureMT generator using the clocktime as the base for the seed",
          "hierarchy": "System Random Mersenne Pure64",
          "module": "System.Random.Mersenne.Pure64",
          "name": "newPureMT",
          "package": "mersenne-random-pure64",
          "partial": "Pure MT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64.html#v:newPureMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a PureMT generator from a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e seed.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64",
          "name": "pureMT",
          "package": "mersenne-random-pure64",
          "signature": "Word64 -\u003e PureMT",
          "source": "src/System-Random-Mersenne-Pure64.html#pureMT",
          "type": "function"
        },
        "index": {
          "description": "Create PureMT generator from Word64 seed",
          "hierarchy": "System Random Mersenne Pure64",
          "module": "System.Random.Mersenne.Pure64",
          "name": "pureMT",
          "normalized": "Word-\u003ePureMT",
          "package": "mersenne-random-pure64",
          "partial": "MT",
          "signature": "Word-\u003ePureMT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64.html#v:pureMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently yield a new 53-bit precise \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value, and a new generator.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomDouble",
          "package": "mersenne-random-pure64",
          "signature": "PureMT -\u003e (Double, PureMT)",
          "source": "src/System-Random-Mersenne-Pure64.html#randomDouble",
          "type": "function"
        },
        "index": {
          "description": "Efficiently yield new bit precise Double value and new generator",
          "hierarchy": "System Random Mersenne Pure64",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomDouble",
          "normalized": "PureMT-\u003e(Double,PureMT)",
          "package": "mersenne-random-pure64",
          "partial": "Double",
          "signature": "PureMT-\u003e(Double,PureMT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64.html#v:randomDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value from the generator, returning a new\n generator and that \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. The full 64 bits will be used on a 64 bit machine.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomInt",
          "package": "mersenne-random-pure64",
          "signature": "PureMT -\u003e (Int, PureMT)",
          "source": "src/System-Random-Mersenne-Pure64.html#randomInt",
          "type": "function"
        },
        "index": {
          "description": "Yield new Int value from the generator returning new generator and that Int The full bits will be used on bit machine",
          "hierarchy": "System Random Mersenne Pure64",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomInt",
          "normalized": "PureMT-\u003e(Int,PureMT)",
          "package": "mersenne-random-pure64",
          "partial": "Int",
          "signature": "PureMT-\u003e(Int,PureMT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64.html#v:randomInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e value from the generator, returning a new\n generator and that \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomInt64",
          "package": "mersenne-random-pure64",
          "signature": "PureMT -\u003e (Int64, PureMT)",
          "source": "src/System-Random-Mersenne-Pure64.html#randomInt64",
          "type": "function"
        },
        "index": {
          "description": "Yield new Int64 value from the generator returning new generator and that Int64",
          "hierarchy": "System Random Mersenne Pure64",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomInt64",
          "normalized": "PureMT-\u003e(Int,PureMT)",
          "package": "mersenne-random-pure64",
          "partial": "Int",
          "signature": "PureMT-\u003e(Int,PureMT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64.html#v:randomInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e value from the generator, returning a new\n generator and that \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomWord",
          "package": "mersenne-random-pure64",
          "signature": "PureMT -\u003e (Word, PureMT)",
          "source": "src/System-Random-Mersenne-Pure64.html#randomWord",
          "type": "function"
        },
        "index": {
          "description": "Yield new Word value from the generator returning new generator and that Word",
          "hierarchy": "System Random Mersenne Pure64",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomWord",
          "normalized": "PureMT-\u003e(Word,PureMT)",
          "package": "mersenne-random-pure64",
          "partial": "Word",
          "signature": "PureMT-\u003e(Word,PureMT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64.html#v:randomWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e value from the generator, returning a new\n generator and that \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomWord64",
          "package": "mersenne-random-pure64",
          "signature": "PureMT -\u003e (Word64, PureMT)",
          "source": "src/System-Random-Mersenne-Pure64.html#randomWord64",
          "type": "function"
        },
        "index": {
          "description": "Yield new Word64 value from the generator returning new generator and that Word64",
          "hierarchy": "System Random Mersenne Pure64",
          "module": "System.Random.Mersenne.Pure64",
          "name": "randomWord64",
          "normalized": "PureMT-\u003e(Word,PureMT)",
          "package": "mersenne-random-pure64",
          "partial": "Word",
          "signature": "PureMT-\u003e(Word,PureMT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random-pure64/docs/System-Random-Mersenne-Pure64.html#v:randomWord64"
      }
    }
  ]
]