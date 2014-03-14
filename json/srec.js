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
        "word": "srec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing and processing s-records.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SRec",
          "name": "SRec",
          "package": "srec",
          "source": "src/Data-SRec.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing and processing s-records",
          "hierarchy": "Data SRec",
          "module": "Data.SRec",
          "name": "SRec",
          "package": "srec",
          "partial": "SRec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SRec",
          "name": "SRec",
          "package": "srec",
          "source": "src/Data-SRec.html#SRec",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data SRec",
          "module": "Data.SRec",
          "name": "SRec",
          "package": "srec",
          "partial": "SRec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#t:SRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting address of block and block data.\n\u003c/p\u003e",
          "module": "Data.SRec",
          "name": "SRec",
          "package": "srec",
          "signature": "SRec [(Int, ByteString)]",
          "source": "src/Data-SRec.html#SRec",
          "type": "function"
        },
        "index": {
          "description": "Starting address of block and block data",
          "hierarchy": "Data SRec",
          "module": "Data.SRec",
          "name": "SRec",
          "normalized": "SRec[(Int,ByteString)]",
          "package": "srec",
          "partial": "SRec",
          "signature": "SRec[(Int,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:SRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge all blocks in s-record into one.\n\u003c/p\u003e",
          "module": "Data.SRec",
          "name": "mergeAllBlocks",
          "package": "srec",
          "signature": "Word8 -\u003e SRec -\u003e SRec",
          "source": "src/Data-SRec.html#mergeAllBlocks",
          "type": "function"
        },
        "index": {
          "description": "Merge all blocks in s-record into one",
          "hierarchy": "Data SRec",
          "module": "Data.SRec",
          "name": "mergeAllBlocks",
          "normalized": "Word-\u003eSRec-\u003eSRec",
          "package": "srec",
          "partial": "All Blocks",
          "signature": "Word-\u003eSRec-\u003eSRec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:mergeAllBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge consecutive blocks into one.  If blocks are not contiguous, the padding byte is used to fill in the extra space.  If the blocks overlap, an error is thrown.\n\u003c/p\u003e",
          "module": "Data.SRec",
          "name": "mergeBlocks",
          "package": "srec",
          "signature": "Word8 -\u003e [(Int, ByteString)] -\u003e (Int, ByteString)",
          "source": "src/Data-SRec.html#mergeBlocks",
          "type": "function"
        },
        "index": {
          "description": "Merge consecutive blocks into one If blocks are not contiguous the padding byte is used to fill in the extra space If the blocks overlap an error is thrown",
          "hierarchy": "Data SRec",
          "module": "Data.SRec",
          "name": "mergeBlocks",
          "normalized": "Word-\u003e[(Int,ByteString)]-\u003e(Int,ByteString)",
          "package": "srec",
          "partial": "Blocks",
          "signature": "Word-\u003e[(Int,ByteString)]-\u003e(Int,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:mergeBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge contiguous consecutive blocks.\n\u003c/p\u003e",
          "module": "Data.SRec",
          "name": "mergeContiguousBlocks",
          "package": "srec",
          "signature": "[(Int, ByteString)] -\u003e [(Int, ByteString)]",
          "source": "src/Data-SRec.html#mergeContiguousBlocks",
          "type": "function"
        },
        "index": {
          "description": "Merge contiguous consecutive blocks",
          "hierarchy": "Data SRec",
          "module": "Data.SRec",
          "name": "mergeContiguousBlocks",
          "normalized": "[(Int,ByteString)]-\u003e[(Int,ByteString)]",
          "package": "srec",
          "partial": "Contiguous Blocks",
          "signature": "[(Int,ByteString)]-\u003e[(Int,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:mergeContiguousBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an s-record.\n\u003c/p\u003e",
          "module": "Data.SRec",
          "name": "parseSRec",
          "package": "srec",
          "signature": "String -\u003e SRec",
          "source": "src/Data-SRec.html#parseSRec",
          "type": "function"
        },
        "index": {
          "description": "Parse an s-record",
          "hierarchy": "Data SRec",
          "module": "Data.SRec",
          "name": "parseSRec",
          "normalized": "String-\u003eSRec",
          "package": "srec",
          "partial": "SRec",
          "signature": "String-\u003eSRec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:parseSRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints (formats) an s-record file.\n\u003c/p\u003e",
          "module": "Data.SRec",
          "name": "printSRec",
          "package": "srec",
          "signature": "SRec -\u003e String",
          "source": "src/Data-SRec.html#printSRec",
          "type": "function"
        },
        "index": {
          "description": "Prints formats an s-record file",
          "hierarchy": "Data SRec",
          "module": "Data.SRec",
          "name": "printSRec",
          "normalized": "SRec-\u003eString",
          "package": "srec",
          "partial": "SRec",
          "signature": "SRec-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:printSRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a block into sub-blocks given a block length.\n\u003c/p\u003e",
          "module": "Data.SRec",
          "name": "splitBlock",
          "package": "srec",
          "signature": "Int -\u003e (Int, ByteString) -\u003e [(Int, ByteString)]",
          "source": "src/Data-SRec.html#splitBlock",
          "type": "function"
        },
        "index": {
          "description": "Split block into sub-blocks given block length",
          "hierarchy": "Data SRec",
          "module": "Data.SRec",
          "name": "splitBlock",
          "normalized": "Int-\u003e(Int,ByteString)-\u003e[(Int,ByteString)]",
          "package": "srec",
          "partial": "Block",
          "signature": "Int-\u003e(Int,ByteString)-\u003e[(Int,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:splitBlock"
      }
    }
  ]
]