[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing and processing s-records.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SRec",
        "fct-package": "srec",
        "fct-signature": "module",
        "fct-source": "src/Data-SRec.html",
        "fct-type": "module",
        "title": "SRec"
      },
      "index": {
        "description": "Parsing and processing s-records",
        "hierarchy": "Data SRec",
        "module": "Data.SRec",
        "name": "SRec",
        "normalized": "",
        "package": "srec",
        "partial": "SRec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#t:SRec",
      "description": {
        "fct-module": "Data.SRec",
        "fct-package": "srec",
        "fct-signature": "newtype",
        "fct-source": "src/Data-SRec.html#SRec",
        "fct-type": "newtype",
        "title": "SRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SRec",
        "module": "Data.SRec",
        "name": "SRec",
        "normalized": "",
        "package": "srec",
        "partial": "SRec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:SRec",
      "description": {
        "fct-descr": "\u003cp\u003eStarting address of block and block data.\n\u003c/p\u003e",
        "fct-module": "Data.SRec",
        "fct-package": "srec",
        "fct-signature": "SRec [(Int, ByteString)]",
        "fct-source": "src/Data-SRec.html#SRec",
        "fct-type": "function",
        "title": "SRec"
      },
      "index": {
        "description": "Starting address of block and block data",
        "hierarchy": "Data SRec",
        "module": "Data.SRec",
        "name": "SRec",
        "normalized": "SRec[(Int,ByteString)]",
        "package": "srec",
        "partial": "SRec",
        "signature": "SRec[(Int,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:mergeAllBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eMerge all blocks in s-record into one.\n\u003c/p\u003e",
        "fct-module": "Data.SRec",
        "fct-package": "srec",
        "fct-signature": "Word8 -\u003e SRec -\u003e SRec",
        "fct-source": "src/Data-SRec.html#mergeAllBlocks",
        "fct-type": "function",
        "title": "mergeAllBlocks"
      },
      "index": {
        "description": "Merge all blocks in s-record into one",
        "hierarchy": "Data SRec",
        "module": "Data.SRec",
        "name": "mergeAllBlocks",
        "normalized": "Word-\u003eSRec-\u003eSRec",
        "package": "srec",
        "partial": "All Blocks",
        "signature": "Word-\u003eSRec-\u003eSRec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:mergeBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eMerge consecutive blocks into one.  If blocks are not contiguous, the padding byte is used to fill in the extra space.  If the blocks overlap, an error is thrown.\n\u003c/p\u003e",
        "fct-module": "Data.SRec",
        "fct-package": "srec",
        "fct-signature": "Word8 -\u003e [(Int, ByteString)] -\u003e (Int, ByteString)",
        "fct-source": "src/Data-SRec.html#mergeBlocks",
        "fct-type": "function",
        "title": "mergeBlocks"
      },
      "index": {
        "description": "Merge consecutive blocks into one If blocks are not contiguous the padding byte is used to fill in the extra space If the blocks overlap an error is thrown",
        "hierarchy": "Data SRec",
        "module": "Data.SRec",
        "name": "mergeBlocks",
        "normalized": "Word-\u003e[(Int,ByteString)]-\u003e(Int,ByteString)",
        "package": "srec",
        "partial": "Blocks",
        "signature": "Word-\u003e[(Int,ByteString)]-\u003e(Int,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:mergeContiguousBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eMerge contiguous consecutive blocks.\n\u003c/p\u003e",
        "fct-module": "Data.SRec",
        "fct-package": "srec",
        "fct-signature": "[(Int, ByteString)] -\u003e [(Int, ByteString)]",
        "fct-source": "src/Data-SRec.html#mergeContiguousBlocks",
        "fct-type": "function",
        "title": "mergeContiguousBlocks"
      },
      "index": {
        "description": "Merge contiguous consecutive blocks",
        "hierarchy": "Data SRec",
        "module": "Data.SRec",
        "name": "mergeContiguousBlocks",
        "normalized": "[(Int,ByteString)]-\u003e[(Int,ByteString)]",
        "package": "srec",
        "partial": "Contiguous Blocks",
        "signature": "[(Int,ByteString)]-\u003e[(Int,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:parseSRec",
      "description": {
        "fct-descr": "\u003cp\u003eParse an s-record.\n\u003c/p\u003e",
        "fct-module": "Data.SRec",
        "fct-package": "srec",
        "fct-signature": "String -\u003e SRec",
        "fct-source": "src/Data-SRec.html#parseSRec",
        "fct-type": "function",
        "title": "parseSRec"
      },
      "index": {
        "description": "Parse an s-record",
        "hierarchy": "Data SRec",
        "module": "Data.SRec",
        "name": "parseSRec",
        "normalized": "String-\u003eSRec",
        "package": "srec",
        "partial": "SRec",
        "signature": "String-\u003eSRec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:printSRec",
      "description": {
        "fct-descr": "\u003cp\u003ePrints (formats) an s-record file.\n\u003c/p\u003e",
        "fct-module": "Data.SRec",
        "fct-package": "srec",
        "fct-signature": "SRec -\u003e String",
        "fct-source": "src/Data-SRec.html#printSRec",
        "fct-type": "function",
        "title": "printSRec"
      },
      "index": {
        "description": "Prints formats an s-record file",
        "hierarchy": "Data SRec",
        "module": "Data.SRec",
        "name": "printSRec",
        "normalized": "SRec-\u003eString",
        "package": "srec",
        "partial": "SRec",
        "signature": "SRec-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/srec/docs/Data-SRec.html#v:splitBlock",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a block into sub-blocks given a block length.\n\u003c/p\u003e",
        "fct-module": "Data.SRec",
        "fct-package": "srec",
        "fct-signature": "Int -\u003e (Int, ByteString) -\u003e [(Int, ByteString)]",
        "fct-source": "src/Data-SRec.html#splitBlock",
        "fct-type": "function",
        "title": "splitBlock"
      },
      "index": {
        "description": "Split block into sub-blocks given block length",
        "hierarchy": "Data SRec",
        "module": "Data.SRec",
        "name": "splitBlock",
        "normalized": "Int-\u003e(Int,ByteString)-\u003e[(Int,ByteString)]",
        "package": "srec",
        "partial": "Block",
        "signature": "Int-\u003e(Int,ByteString)-\u003e[(Int,ByteString)]"
      }
    }
  }
]