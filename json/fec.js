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
        "word": "fec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides k of n encoding - a way to generate (n - k) secondary\n blocks of data from k primary blocks such that any k blocks (primary or\n secondary) are sufficient to regenerate all blocks.\n\u003c/p\u003e\u003cp\u003eAll blocks must be the same length and you need to keep track of which\n blocks you have in order to tell decode. By convention, the blocks are\n numbered 0..(n - 1) and blocks numbered \u003c k are the primary blocks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.FEC",
          "name": "FEC",
          "package": "fec",
          "source": "src/Codec-FEC.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides of encoding way to generate secondary blocks of data from primary blocks such that any blocks primary or secondary are sufficient to regenerate all blocks All blocks must be the same length and you need to keep track of which blocks you have in order to tell decode By convention the blocks are numbered and blocks numbered are the primary blocks",
          "hierarchy": "Codec FEC",
          "module": "Codec.FEC",
          "name": "FEC",
          "package": "fec",
          "partial": "FEC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fec/docs/Codec-FEC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.FEC",
          "name": "FECParams",
          "package": "fec",
          "source": "src/Codec-FEC.html#FECParams",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec FEC",
          "module": "Codec.FEC",
          "name": "FECParams",
          "package": "fec",
          "partial": "FECParams",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fec/docs/Codec-FEC.html#t:FECParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverses the operation of \u003ccode\u003eenFEC\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.FEC",
          "name": "deFEC",
          "package": "fec",
          "signature": "Int-\u003e Int-\u003e [ByteString]-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Reverses the operation of enFEC",
          "hierarchy": "Codec FEC",
          "module": "Codec.FEC",
          "name": "deFEC",
          "normalized": "Int-\u003eInt-\u003e[ByteString]-\u003eByteString",
          "package": "fec",
          "partial": "FEC",
          "signature": "Int-\u003eInt-\u003e[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fec/docs/Codec-FEC.html#v:deFEC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecover the primary blocks from a list of \u003ccode\u003ek\u003c/code\u003e blocks. Each block must be\n   tagged with its number (see the module comments about block numbering)\n\u003c/p\u003e",
          "module": "Codec.FEC",
          "name": "decode",
          "package": "fec",
          "signature": "FECParams-\u003e [(Int, ByteString)]-\u003e [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "Recover the primary blocks from list of blocks Each block must be tagged with its number see the module comments about block numbering",
          "hierarchy": "Codec FEC",
          "module": "Codec.FEC",
          "name": "decode",
          "normalized": "FECParams-\u003e[(Int,ByteString)]-\u003e[ByteString]",
          "package": "fec",
          "signature": "FECParams-\u003e[(Int,ByteString)]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fec/docs/Codec-FEC.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA utility function which takes an arbitary input and FEC encodes it into a\n   number of blocks. The order the resulting blocks doesn't matter so long\n   as you have enough to present to \u003ccode\u003edeFEC\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.FEC",
          "name": "enFEC",
          "package": "fec",
          "signature": "Int-\u003e Int-\u003e ByteString-\u003e [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "utility function which takes an arbitary input and FEC encodes it into number of blocks The order the resulting blocks doesn matter so long as you have enough to present to deFEC",
          "hierarchy": "Codec FEC",
          "module": "Codec.FEC",
          "name": "enFEC",
          "normalized": "Int-\u003eInt-\u003eByteString-\u003e[ByteString]",
          "package": "fec",
          "partial": "FEC",
          "signature": "Int-\u003eInt-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fec/docs/Codec-FEC.html#v:enFEC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the secondary blocks from a list of the primary blocks. The\n   primary blocks must be in order and all of the same size. There must be\n   \u003ccode\u003ek\u003c/code\u003e primary blocks.\n\u003c/p\u003e",
          "module": "Codec.FEC",
          "name": "encode",
          "package": "fec",
          "signature": "FECParams-\u003e [ByteString]-\u003e [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "Generate the secondary blocks from list of the primary blocks The primary blocks must be in order and all of the same size There must be primary blocks",
          "hierarchy": "Codec FEC",
          "module": "Codec.FEC",
          "name": "encode",
          "normalized": "FECParams-\u003e[ByteString]-\u003e[ByteString]",
          "package": "fec",
          "signature": "FECParams-\u003e[ByteString]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fec/docs/Codec-FEC.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a FEC with the given parameters.\n\u003c/p\u003e",
          "module": "Codec.FEC",
          "name": "fec",
          "package": "fec",
          "signature": "Int-\u003e Int-\u003e FECParams",
          "type": "function"
        },
        "index": {
          "description": "Return FEC with the given parameters",
          "hierarchy": "Codec FEC",
          "module": "Codec.FEC",
          "name": "fec",
          "normalized": "Int-\u003eInt-\u003eFECParams",
          "package": "fec",
          "signature": "Int-\u003eInt-\u003eFECParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fec/docs/Codec-FEC.html#v:fec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse the operation of secureDivide. The order of the inputs doesn't\n   matter, but they must all be the same length\n\u003c/p\u003e",
          "module": "Codec.FEC",
          "name": "secureCombine",
          "package": "fec",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Codec-FEC.html#secureCombine",
          "type": "function"
        },
        "index": {
          "description": "Reverse the operation of secureDivide The order of the inputs doesn matter but they must all be the same length",
          "hierarchy": "Codec FEC",
          "module": "Codec.FEC",
          "name": "secureCombine",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "fec",
          "partial": "Combine",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fec/docs/Codec-FEC.html#v:secureCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a ByteString into \u003ccode\u003en\u003c/code\u003e parts, equal in length to the original, such\n   that all \u003ccode\u003en\u003c/code\u003e are required to reconstruct the original, but having less\n   than \u003ccode\u003en\u003c/code\u003e parts reveals no information about the orginal.\n\u003c/p\u003e\u003cp\u003eThis code works in IO monad because it needs a source of random bytes,\n   which it gets from \u003cem\u003edev\u003c/em\u003eurandom. If this file doesn't exist an\n   exception results\n\u003c/p\u003e\u003cp\u003eNot terribly fast - probably best to do it with short inputs (e.g. an\n   encryption key)\n\u003c/p\u003e",
          "module": "Codec.FEC",
          "name": "secureDivide",
          "package": "fec",
          "signature": "Int-\u003e ByteString-\u003e IO [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into parts equal in length to the original such that all are required to reconstruct the original but having less than parts reveals no information about the orginal This code works in IO monad because it needs source of random bytes which it gets from dev urandom If this file doesn exist an exception results Not terribly fast probably best to do it with short inputs e.g an encryption key",
          "hierarchy": "Codec FEC",
          "module": "Codec.FEC",
          "name": "secureDivide",
          "normalized": "Int-\u003eByteString-\u003eIO[ByteString]",
          "package": "fec",
          "partial": "Divide",
          "signature": "Int-\u003eByteString-\u003eIO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fec/docs/Codec-FEC.html#v:secureDivide"
      }
    }
  ]
]