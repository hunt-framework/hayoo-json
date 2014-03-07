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
        "word": "MissingH"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with threads.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Thread.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Control-Concurrent-Thread-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with threads Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Control Concurrent Thread Utils",
          "module": "Control.Concurrent.Thread.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Control-Concurrent-Thread-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a IO action and a function.  The IO action will be called in a \nseparate thread.  When it is completed, the specified function is called with\nits result.  This is a simple way of doing callbacks. \n\u003c/p\u003e",
          "module": "Control.Concurrent.Thread.Utils",
          "name": "runInThread",
          "package": "MissingH",
          "signature": "IO a -\u003e (a -\u003e IO b) -\u003e IO ThreadId",
          "source": "src/Control-Concurrent-Thread-Utils.html#runInThread",
          "type": "function"
        },
        "index": {
          "description": "Takes IO action and function The IO action will be called in separate thread When it is completed the specified function is called with its result This is simple way of doing callbacks",
          "hierarchy": "Control Concurrent Thread Utils",
          "module": "Control.Concurrent.Thread.Utils",
          "name": "runInThread",
          "normalized": "IO a-\u003e(a-\u003eIO b)-\u003eIO ThreadId",
          "package": "MissingH",
          "partial": "In Thread",
          "signature": "IO a-\u003e(a-\u003eIO b)-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Control-Concurrent-Thread-Utils.html#v:runInThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for packing into bins\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis module is designed to solve this type of problem: Given a bunch of\nobjects of varying sizes, what is the best possible way to pack them into\nfixed-size bins?  This can be used, for instance, by the datapacker program\nto pack files onto CDs or DVDs; by manufacturing environments to pack\nphysical items into physicl bins; etc.\n\u003c/p\u003e\u003cp\u003eA description of bin packing algorithms can be found at\n\u003ca\u003ehttp://en.wikipedia.org/wiki/Bin_packing_problem\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BinPacking",
          "name": "BinPacking",
          "package": "MissingH",
          "source": "src/Data-BinPacking.html",
          "type": "module"
        },
        "index": {
          "description": "Tools for packing into bins Written by John Goerzen jgoerzen@complete.org This module is designed to solve this type of problem Given bunch of objects of varying sizes what is the best possible way to pack them into fixed-size bins This can be used for instance by the datapacker program to pack files onto CDs or DVDs by manufacturing environments to pack physical items into physicl bins etc description of bin packing algorithms can be found at http en.wikipedia.org wiki Bin packing problem",
          "hierarchy": "Data BinPacking",
          "module": "Data.BinPacking",
          "name": "BinPacking",
          "package": "MissingH",
          "partial": "Bin Packing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe primary type for bin-packing functions.\n\u003c/p\u003e\u003cp\u003eThese functions take a list of size of bins.  If every bin is the same size,\nyou can pass \u003ccode\u003erepeat binSize\u003c/code\u003e to pass an infinite list of bins if the\nsame size.  Any surplus bins will simply be ignored. \n\u003c/p\u003e\u003cpre\u003e [size] is the sizes of bins\n [(size, obj)] is the sizes and objects\n result is Either error or results\n\u003c/pre\u003e",
          "module": "Data.BinPacking",
          "name": "BinPacker",
          "package": "MissingH",
          "source": "src/Data-BinPacking.html#BinPacker",
          "type": "type"
        },
        "index": {
          "description": "The primary type for bin-packing functions These functions take list of size of bins If every bin is the same size you can pass repeat binSize to pass an infinite list of bins if the same size Any surplus bins will simply be ignored size is the sizes of bins size obj is the sizes and objects result is Either error or results",
          "hierarchy": "Data BinPacking",
          "module": "Data.BinPacking",
          "name": "BinPacker",
          "package": "MissingH",
          "partial": "Bin Packer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#t:BinPacker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePotential errors returned as Left values by \u003ccode\u003e\u003ca\u003eBinPacker\u003c/a\u003e\u003c/code\u003e functions. \nCalling \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e on this value will produce a nice error message suitable for\ndisplay. \n\u003c/p\u003e",
          "module": "Data.BinPacking",
          "name": "BinPackerError",
          "package": "MissingH",
          "source": "src/Data-BinPacking.html#BinPackerError",
          "type": "data"
        },
        "index": {
          "description": "Potential errors returned as Left values by BinPacker functions Calling show on this value will produce nice error message suitable for display",
          "hierarchy": "Data BinPacking",
          "module": "Data.BinPacking",
          "name": "BinPackerError",
          "package": "MissingH",
          "partial": "Bin Packer Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#t:BinPackerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther error\n\u003c/p\u003e",
          "module": "Data.BinPacking",
          "name": "BPOther",
          "package": "MissingH",
          "signature": "BPOther String",
          "source": "src/Data-BinPacking.html#BinPackerError",
          "type": "function"
        },
        "index": {
          "description": "Other error",
          "hierarchy": "Data BinPacking",
          "module": "Data.BinPacking",
          "name": "BPOther",
          "package": "MissingH",
          "partial": "BPOther",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:BPOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBin size1 exceeded by at least the given object and size\n\u003c/p\u003e",
          "module": "Data.BinPacking",
          "name": "BPSizeTooLarge",
          "package": "MissingH",
          "signature": "BPSizeTooLarge size (size, obj)",
          "source": "src/Data-BinPacking.html#BinPackerError",
          "type": "function"
        },
        "index": {
          "description": "Bin size1 exceeded by at least the given object and size",
          "hierarchy": "Data BinPacking",
          "module": "Data.BinPacking",
          "name": "BPSizeTooLarge",
          "normalized": "BPSizeTooLarge a(a,b)",
          "package": "MissingH",
          "partial": "BPSize Too Large",
          "signature": "BPSizeTooLarge size(size,obj)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:BPSizeTooLarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRan out of bins; attached value is the list of objects that do not fit\n\u003c/p\u003e",
          "module": "Data.BinPacking",
          "name": "BPTooFewBins",
          "package": "MissingH",
          "signature": "BPTooFewBins [(size, obj)]",
          "source": "src/Data-BinPacking.html#BinPackerError",
          "type": "function"
        },
        "index": {
          "description": "Ran out of bins attached value is the list of objects that do not fit",
          "hierarchy": "Data BinPacking",
          "module": "Data.BinPacking",
          "name": "BPTooFewBins",
          "normalized": "BPTooFewBins[(a,b)]",
          "package": "MissingH",
          "partial": "BPToo Few Bins",
          "signature": "BPTooFewBins[(size,obj)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:BPTooFewBins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack objects into bins, preserving order.  Objects will be taken from the\ninput list one by one, and added to each bin until the bin is full.  Work will\nthen proceed on the next bin.  No attempt is made to optimize allocations to\nbins.  This is the simplest and most naive bin-packing algorithm, but\nmay not make very good use of bin space. \n\u003c/p\u003e",
          "module": "Data.BinPacking",
          "name": "packByOrder",
          "package": "MissingH",
          "signature": "BinPacker",
          "source": "src/Data-BinPacking.html#packByOrder",
          "type": "function"
        },
        "index": {
          "description": "Pack objects into bins preserving order Objects will be taken from the input list one by one and added to each bin until the bin is full Work will then proceed on the next bin No attempt is made to optimize allocations to bins This is the simplest and most naive bin-packing algorithm but may not make very good use of bin space",
          "hierarchy": "Data BinPacking",
          "module": "Data.BinPacking",
          "name": "packByOrder",
          "package": "MissingH",
          "partial": "By Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:packByOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack objects into bins.  For each bin, start with the largest objects,\nand keep packing the largest object from the remainder until no object can\nbe found to put in the bin.  This is substantially more efficient than\n\u003ccode\u003e\u003ca\u003epackByOrder\u003c/a\u003e\u003c/code\u003e, but requires sorting the input. \n\u003c/p\u003e",
          "module": "Data.BinPacking",
          "name": "packLargeFirst",
          "package": "MissingH",
          "signature": "BinPacker",
          "source": "src/Data-BinPacking.html#packLargeFirst",
          "type": "function"
        },
        "index": {
          "description": "Pack objects into bins For each bin start with the largest objects and keep packing the largest object from the remainder until no object can be found to put in the bin This is substantially more efficient than packByOrder but requires sorting the input",
          "hierarchy": "Data BinPacking",
          "module": "Data.BinPacking",
          "name": "packLargeFirst",
          "package": "MissingH",
          "partial": "Large First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:packLargeFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBit-related utilities\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bits.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Data-Bits-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Bit-related utilities Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data Bits Utils",
          "module": "Data.Bits.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Char to a Word8. \n\u003c/p\u003e",
          "module": "Data.Bits.Utils",
          "name": "c2w8",
          "package": "MissingH",
          "signature": "Char -\u003e Word8",
          "source": "src/Data-Bits-Utils.html#c2w8",
          "type": "function"
        },
        "index": {
          "description": "Converts Char to Word8",
          "hierarchy": "Data Bits Utils",
          "module": "Data.Bits.Utils",
          "name": "c2w8",
          "normalized": "Char-\u003eWord",
          "package": "MissingH",
          "signature": "Char-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:c2w8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opposite of \u003ccode\u003e\u003ca\u003egetBytes\u003c/a\u003e\u003c/code\u003e, this function builds a number based on\nits component bytes.\n\u003c/p\u003e\u003cp\u003eResults are undefined if any components of the input list are \u003e 0xff!\n\u003c/p\u003e",
          "module": "Data.Bits.Utils",
          "name": "fromBytes",
          "package": "MissingH",
          "signature": "[a] -\u003e a",
          "source": "src/Data-Bits-Utils.html#fromBytes",
          "type": "function"
        },
        "index": {
          "description": "The opposite of getBytes this function builds number based on its component bytes Results are undefined if any components of the input list are xff",
          "hierarchy": "Data Bits Utils",
          "module": "Data.Bits.Utils",
          "name": "fromBytes",
          "normalized": "[a]-\u003ea",
          "package": "MissingH",
          "partial": "Bytes",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:fromBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list representing the bytes that comprise a data type.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e getBytes (0x12345678::Int) -\u003e [0x12, 0x34, 0x56, 0x78]\n\u003c/pre\u003e",
          "module": "Data.Bits.Utils",
          "name": "getBytes",
          "package": "MissingH",
          "signature": "a -\u003e [a]",
          "source": "src/Data-Bits-Utils.html#getBytes",
          "type": "function"
        },
        "index": {
          "description": "Returns list representing the bytes that comprise data type Example getBytes x12345678 Int x12 x34 x56 x78",
          "hierarchy": "Data Bits Utils",
          "module": "Data.Bits.Utils",
          "name": "getBytes",
          "normalized": "a-\u003e[a]",
          "package": "MissingH",
          "partial": "Bytes",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:getBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a String to a [Word8]. \n\u003c/p\u003e",
          "module": "Data.Bits.Utils",
          "name": "s2w8",
          "package": "MissingH",
          "signature": "String -\u003e [Word8]",
          "source": "src/Data-Bits-Utils.html#s2w8",
          "type": "function"
        },
        "index": {
          "description": "Converts String to Word8",
          "hierarchy": "Data Bits Utils",
          "module": "Data.Bits.Utils",
          "name": "s2w8",
          "normalized": "String-\u003e[Word]",
          "package": "MissingH",
          "signature": "String-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:s2w8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Word8 to a Char. \n\u003c/p\u003e",
          "module": "Data.Bits.Utils",
          "name": "w82c",
          "package": "MissingH",
          "signature": "Word8 -\u003e Char",
          "source": "src/Data-Bits-Utils.html#w82c",
          "type": "function"
        },
        "index": {
          "description": "Converts Word8 to Char",
          "hierarchy": "Data Bits Utils",
          "module": "Data.Bits.Utils",
          "name": "w82c",
          "normalized": "Word-\u003eChar",
          "package": "MissingH",
          "signature": "Word-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:w82c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a [Word8] to a String. \n\u003c/p\u003e",
          "module": "Data.Bits.Utils",
          "name": "w82s",
          "package": "MissingH",
          "signature": "[Word8] -\u003e String",
          "source": "src/Data-Bits-Utils.html#w82s",
          "type": "function"
        },
        "index": {
          "description": "Converts Word8 to String",
          "hierarchy": "Data Bits Utils",
          "module": "Data.Bits.Utils",
          "name": "w82s",
          "normalized": "[Word]-\u003eString",
          "package": "MissingH",
          "signature": "[Word]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:w82s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell Parsec parsers for comma-separated value (CSV) files.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CSV",
          "name": "CSV",
          "package": "MissingH",
          "source": "src/Data-CSV.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell Parsec parsers for comma-separated value CSV files Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data CSV",
          "module": "Data.CSV",
          "name": "CSV",
          "package": "MissingH",
          "partial": "CSV",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-CSV.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a Comma-Separated Value (CSV) file.  The return value is a list of\nlines; each line is a list of cells; and each cell is a String.\n\u003c/p\u003e\u003cp\u003ePlease note that CSV files may have a different number of cells on each line.\nAlso, it is impossible to distinguish a CSV line that has a call with no data\nfrom a CSV line that has no cells.\n\u003c/p\u003e\u003cp\u003eHere are some examples:\n\u003c/p\u003e\u003cpre\u003eInput (literal strings)          Parses As (Haskell String syntax)\n-------------------------------- ---------------------------------\n1,2,3                            [[\"1\", \"2\", \"3\"]]\n\nl1                               [[\"l1\"], [\"l2\"]]\nl2\n\n (empty line)                    [[\"\"]]\n\nNQ,\"Quoted\"                      [[\"NQ\", \"Quoted\"]]\n\nNQ,\"Embedded\"\"Quote\"             [[\"NQ\", \"Embedded\\\"Quote\"]]\n\u003c/pre\u003e\u003cp\u003eTo parse a String, you might use:\n\u003c/p\u003e\u003cpre\u003eimport Text.ParserCombinators.Parsec\nimport Data.String.CSV\n....\nparse csvFile \"\" mystring\n\u003c/pre\u003e\u003cp\u003eTo parse a file, you might instead use:\n\u003c/p\u003e\u003cpre\u003edo result \u003c- parseFromFile csvFile \"/path/to/file\"\n\u003c/pre\u003e\u003cp\u003ePlease note that the result of parsing will be of type\n(Either ParseError [[String]]).  A Left result indicates an error.\nFor more details, see the Parsec information.\n\u003c/p\u003e",
          "module": "Data.CSV",
          "name": "csvFile",
          "package": "MissingH",
          "signature": "CharParser st [[String]]",
          "source": "src/Data-CSV.html#csvFile",
          "type": "function"
        },
        "index": {
          "description": "Parse Comma-Separated Value CSV file The return value is list of lines each line is list of cells and each cell is String Please note that CSV files may have different number of cells on each line Also it is impossible to distinguish CSV line that has call with no data from CSV line that has no cells Here are some examples Input literal strings Parses As Haskell String syntax l1 l1 l2 l2 empty line NQ Quoted NQ Quoted NQ Embedded Quote NQ Embedded Quote To parse String you might use import Text.ParserCombinators.Parsec import Data.String.CSV parse csvFile mystring To parse file you might instead use do result parseFromFile csvFile path to file Please note that the result of parsing will be of type Either ParseError String Left result indicates an error For more details see the Parsec information",
          "hierarchy": "Data CSV",
          "module": "Data.CSV",
          "name": "csvFile",
          "normalized": "CharParser a[[String]]",
          "package": "MissingH",
          "partial": "File",
          "signature": "CharParser st[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-CSV.html#v:csvFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate CSV data for a file.  The resulting string can be\nwritten out to disk directly. \n\u003c/p\u003e",
          "module": "Data.CSV",
          "name": "genCsvFile",
          "package": "MissingH",
          "signature": "[[String]] -\u003e String",
          "source": "src/Data-CSV.html#genCsvFile",
          "type": "function"
        },
        "index": {
          "description": "Generate CSV data for file The resulting string can be written out to disk directly",
          "hierarchy": "Data CSV",
          "module": "Data.CSV",
          "name": "genCsvFile",
          "normalized": "[[String]]-\u003eString",
          "package": "MissingH",
          "partial": "Csv File",
          "signature": "[[String]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-CSV.html#v:genCsvFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : \u003ca\u003eigloo@earth.li\u003c/a\u003e\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003eInflate algorithm implementation\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2004 Ian Lynagh\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Compression.Inflate",
          "name": "Inflate",
          "package": "MissingH",
          "source": "src/Data-Compression-Inflate.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer igloo@earth.li Stability provisional Portability portable Inflate algorithm implementation Copyright Ian Lynagh",
          "hierarchy": "Data Compression Inflate",
          "module": "Data.Compression.Inflate",
          "name": "Inflate",
          "package": "MissingH",
          "partial": "Inflate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compression.Inflate",
          "name": "Bit",
          "package": "MissingH",
          "source": "src/Data-Compression-Inflate.html#Bit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Compression Inflate",
          "module": "Data.Compression.Inflate",
          "name": "Bit",
          "package": "MissingH",
          "partial": "Bit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#t:Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compression.Inflate",
          "name": "Output",
          "package": "MissingH",
          "source": "src/Data-Compression-Inflate.html#Output",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Compression Inflate",
          "module": "Data.Compression.Inflate",
          "name": "Output",
          "package": "MissingH",
          "partial": "Output",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compression.Inflate",
          "name": "bits_to_word32",
          "package": "MissingH",
          "signature": "[Bit] -\u003e Word32",
          "source": "src/Data-Compression-Inflate.html#bits_to_word32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compression Inflate",
          "module": "Data.Compression.Inflate",
          "name": "bits_to_word32",
          "normalized": "[Bit]-\u003eWord",
          "package": "MissingH",
          "signature": "[Bit]-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#v:bits_to_word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compression.Inflate",
          "name": "inflate",
          "package": "MissingH",
          "signature": "[Int] -\u003e (Output, [Bit])",
          "source": "src/Data-Compression-Inflate.html#inflate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compression Inflate",
          "module": "Data.Compression.Inflate",
          "name": "inflate",
          "normalized": "[Int]-\u003e(Output,[Bit])",
          "package": "MissingH",
          "signature": "[Int]-\u003e(Output,[Bit])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#v:inflate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compression.Inflate",
          "name": "inflate_string",
          "package": "MissingH",
          "signature": "String -\u003e String",
          "source": "src/Data-Compression-Inflate.html#inflate_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compression Inflate",
          "module": "Data.Compression.Inflate",
          "name": "inflate_string",
          "normalized": "String-\u003eString",
          "package": "MissingH",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#v:inflate_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns (Data, Remainder)\n\u003c/p\u003e",
          "module": "Data.Compression.Inflate",
          "name": "inflate_string_remainder",
          "package": "MissingH",
          "signature": "String -\u003e (String, String)",
          "source": "src/Data-Compression-Inflate.html#inflate_string_remainder",
          "type": "function"
        },
        "index": {
          "description": "Returns Data Remainder",
          "hierarchy": "Data Compression Inflate",
          "module": "Data.Compression.Inflate",
          "name": "inflate_string_remainder",
          "normalized": "String-\u003e(String,String)",
          "package": "MissingH",
          "signature": "String-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#v:inflate_string_remainder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with the Either data type\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Either.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Data-Either-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with the Either data type",
          "hierarchy": "Data Either Utils",
          "module": "Data.Either.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an either and transforms it into something of the more generic\nMonadError class. \n\u003c/p\u003e",
          "module": "Data.Either.Utils",
          "name": "eitherToMonadError",
          "package": "MissingH",
          "signature": "Either e a -\u003e m a",
          "source": "src/Data-Either-Utils.html#eitherToMonadError",
          "type": "function"
        },
        "index": {
          "description": "Takes an either and transforms it into something of the more generic MonadError class",
          "hierarchy": "Data Either Utils",
          "module": "Data.Either.Utils",
          "name": "eitherToMonadError",
          "normalized": "Either a b-\u003ec b",
          "package": "MissingH",
          "partial": "To Monad Error",
          "signature": "Either e a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:eitherToMonadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePulls a \u003ca\u003eRight\u003c/a\u003e value out of an Either value.  If the Either value is\nLeft, raises an exception with \u003ca\u003eerror\u003c/a\u003e. \n\u003c/p\u003e",
          "module": "Data.Either.Utils",
          "name": "forceEither",
          "package": "MissingH",
          "signature": "Either e a -\u003e a",
          "source": "src/Data-Either-Utils.html#forceEither",
          "type": "function"
        },
        "index": {
          "description": "Pulls Right value out of an Either value If the Either value is Left raises an exception with error",
          "hierarchy": "Data Either Utils",
          "module": "Data.Either.Utils",
          "name": "forceEither",
          "normalized": "Either a b-\u003eb",
          "package": "MissingH",
          "partial": "Either",
          "signature": "Either e a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:forceEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eforceEither\u003c/a\u003e\u003c/code\u003e, but can raise a specific message with the error. \n\u003c/p\u003e",
          "module": "Data.Either.Utils",
          "name": "forceEitherMsg",
          "package": "MissingH",
          "signature": "String -\u003e Either e a -\u003e a",
          "source": "src/Data-Either-Utils.html#forceEitherMsg",
          "type": "function"
        },
        "index": {
          "description": "Like forceEither but can raise specific message with the error",
          "hierarchy": "Data Either Utils",
          "module": "Data.Either.Utils",
          "name": "forceEitherMsg",
          "normalized": "String-\u003eEither a b-\u003eb",
          "package": "MissingH",
          "partial": "Either Msg",
          "signature": "String-\u003eEither e a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:forceEitherMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake an Either, and return the value inside it\n\u003c/p\u003e",
          "module": "Data.Either.Utils",
          "name": "fromEither",
          "package": "MissingH",
          "signature": "Either a a -\u003e a",
          "source": "src/Data-Either-Utils.html#fromEither",
          "type": "function"
        },
        "index": {
          "description": "Take an Either and return the value inside it",
          "hierarchy": "Data Either Utils",
          "module": "Data.Either.Utils",
          "name": "fromEither",
          "normalized": "Either a a-\u003ea",
          "package": "MissingH",
          "partial": "Either",
          "signature": "Either a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:fromEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a Left to a value, crashes on a Right\n\u003c/p\u003e",
          "module": "Data.Either.Utils",
          "name": "fromLeft",
          "package": "MissingH",
          "signature": "Either a b -\u003e a",
          "source": "src/Data-Either-Utils.html#fromLeft",
          "type": "function"
        },
        "index": {
          "description": "Take Left to value crashes on Right",
          "hierarchy": "Data Either Utils",
          "module": "Data.Either.Utils",
          "name": "fromLeft",
          "normalized": "Either a b-\u003ea",
          "package": "MissingH",
          "partial": "Left",
          "signature": "Either a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:fromLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a Right to a value, crashes on a Left\n\u003c/p\u003e",
          "module": "Data.Either.Utils",
          "name": "fromRight",
          "package": "MissingH",
          "signature": "Either a b -\u003e b",
          "source": "src/Data-Either-Utils.html#fromRight",
          "type": "function"
        },
        "index": {
          "description": "Take Right to value crashes on Left",
          "hierarchy": "Data Either Utils",
          "module": "Data.Either.Utils",
          "name": "fromRight",
          "normalized": "Either a b-\u003eb",
          "package": "MissingH",
          "partial": "Right",
          "signature": "Either a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:fromRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Maybe value to an Either value, using the supplied parameter\nas the Left value if the Maybe is Nothing.\n\u003c/p\u003e\u003cp\u003eThis function can be interpreted as:\n\u003c/p\u003e\u003cpre\u003emaybeToEither :: e -\u003e Maybe a -\u003e Either e a\u003c/pre\u003e\u003cp\u003eIts definition is given as it is so that it can be used in the Error and related monads.\n\u003c/p\u003e",
          "module": "Data.Either.Utils",
          "name": "maybeToEither",
          "package": "MissingH",
          "signature": "e-\u003e Maybe a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Converts Maybe value to an Either value using the supplied parameter as the Left value if the Maybe is Nothing This function can be interpreted as maybeToEither Maybe Either Its definition is given as it is so that it can be used in the Error and related monads",
          "hierarchy": "Data Either Utils",
          "module": "Data.Either.Utils",
          "name": "maybeToEither",
          "normalized": "a-\u003eMaybe b-\u003ec b",
          "package": "MissingH",
          "partial": "To Either",
          "signature": "e-\u003eMaybe a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:maybeToEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCRC32 checksumming using the GZIP/PKZIP algorithm as used in both\nISO 3309 and section 8.1.1.6.2 of ITU-T V.42 and referenced in \nRFC1952.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Hash.CRC32.GZip",
          "name": "GZip",
          "package": "MissingH",
          "source": "src/Data-Hash-CRC32-GZip.html",
          "type": "module"
        },
        "index": {
          "description": "CRC32 checksumming using the GZIP PKZIP algorithm as used in both ISO and section of ITU-T V.42 and referenced in RFC1952",
          "hierarchy": "Data Hash CRC32 GZip",
          "module": "Data.Hash.CRC32.GZip",
          "name": "GZip",
          "package": "MissingH",
          "partial": "GZip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32.GZip",
          "name": "calc_crc32",
          "package": "MissingH",
          "signature": "[Char] -\u003e Word32",
          "source": "src/Data-Hash-CRC32-GZip.html#calc_crc32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32 GZip",
          "module": "Data.Hash.CRC32.GZip",
          "name": "calc_crc32",
          "normalized": "[Char]-\u003eWord",
          "package": "MissingH",
          "signature": "[Char]-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#v:calc_crc32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32.GZip",
          "name": "gzipcrctab",
          "package": "MissingH",
          "signature": "Array Int Word32",
          "source": "src/Data-Hash-CRC32-GZip.html#gzipcrctab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32 GZip",
          "module": "Data.Hash.CRC32.GZip",
          "name": "gzipcrctab",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#v:gzipcrctab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32.GZip",
          "name": "update_crc",
          "package": "MissingH",
          "signature": "Word32 -\u003e Char -\u003e Word32",
          "source": "src/Data-Hash-CRC32-GZip.html#update_crc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32 GZip",
          "module": "Data.Hash.CRC32.GZip",
          "name": "update_crc",
          "normalized": "Word-\u003eChar-\u003eWord",
          "package": "MissingH",
          "signature": "Word-\u003eChar-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#v:update_crc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32.GZip",
          "name": "update_crc_list",
          "package": "MissingH",
          "signature": "Word32 -\u003e [Char] -\u003e Word32",
          "source": "src/Data-Hash-CRC32-GZip.html#update_crc_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32 GZip",
          "module": "Data.Hash.CRC32.GZip",
          "name": "update_crc_list",
          "normalized": "Word-\u003e[Char]-\u003eWord",
          "package": "MissingH",
          "signature": "Word-\u003e[Char]-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#v:update_crc_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCRC32 checksumming using POSIX 1003.2-1992 algorithm for the polynomial { 32 26\n23 22 16 12 11 10 8 7 5 4 2 1 }, also defined in  ISO 8802-3: 1989.\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2002 HardCore SoftWare, Doug Hoyte\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Hash.CRC32.Posix",
          "name": "Posix",
          "package": "MissingH",
          "source": "src/Data-Hash-CRC32-Posix.html",
          "type": "module"
        },
        "index": {
          "description": "CRC32 checksumming using POSIX algorithm for the polynomial also defined in ISO Copyright HardCore SoftWare Doug Hoyte",
          "hierarchy": "Data Hash CRC32 Posix",
          "module": "Data.Hash.CRC32.Posix",
          "name": "Posix",
          "package": "MissingH",
          "partial": "Posix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32.Posix",
          "name": "calc_crc32",
          "package": "MissingH",
          "signature": "[Char] -\u003e Word32 -\u003e Word32 -\u003e Word32",
          "source": "src/Data-Hash-CRC32-Posix.html#calc_crc32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32 Posix",
          "module": "Data.Hash.CRC32.Posix",
          "name": "calc_crc32",
          "normalized": "[Char]-\u003eWord-\u003eWord-\u003eWord",
          "package": "MissingH",
          "signature": "[Char]-\u003eWord-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#v:calc_crc32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32.Posix",
          "name": "crc32",
          "package": "MissingH",
          "signature": "[Char] -\u003e Word32",
          "source": "src/Data-Hash-CRC32-Posix.html#crc32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32 Posix",
          "module": "Data.Hash.CRC32.Posix",
          "name": "crc32",
          "normalized": "[Char]-\u003eWord",
          "package": "MissingH",
          "signature": "[Char]-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#v:crc32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32.Posix",
          "name": "crctab",
          "package": "MissingH",
          "signature": "Array Int Word32",
          "source": "src/Data-Hash-CRC32-Posix.html#crctab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32 Posix",
          "module": "Data.Hash.CRC32.Posix",
          "name": "crctab",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#v:crctab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32.Posix",
          "name": "iter_crc32",
          "package": "MissingH",
          "signature": "Word32 -\u003e Char -\u003e Word32",
          "source": "src/Data-Hash-CRC32-Posix.html#iter_crc32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32 Posix",
          "module": "Data.Hash.CRC32.Posix",
          "name": "iter_crc32",
          "normalized": "Word-\u003eChar-\u003eWord",
          "package": "MissingH",
          "signature": "Word-\u003eChar-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#v:iter_crc32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5.Zord64_HARD",
          "name": "Zord64_HARD",
          "package": "MissingH",
          "source": "src/Data-Hash-MD5-Zord64_HARD.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Hash MD5 Zord64_HARD",
          "module": "Data.Hash.MD5.Zord64_HARD",
          "name": "Zord64_HARD",
          "package": "MissingH",
          "partial": "Zord HARD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5-Zord64_HARD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5.Zord64_HARD",
          "name": "Zord64",
          "package": "MissingH",
          "source": "src/Data-Hash-MD5-Zord64_HARD.html#Zord64",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Hash MD5 Zord64_HARD",
          "module": "Data.Hash.MD5.Zord64_HARD",
          "name": "Zord64",
          "package": "MissingH",
          "partial": "Zord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5-Zord64_HARD.html#t:Zord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneration of MD5sums\n\u003c/p\u003e\u003cp\u003eWritten by Ian Lynagh, igloo@earth.li\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Hash.MD5",
          "name": "MD5",
          "package": "MissingH",
          "source": "src/Data-Hash-MD5.html",
          "type": "module"
        },
        "index": {
          "description": "Generation of MD5sums Written by Ian Lynagh igloo@earth.li",
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "MD5",
          "package": "MissingH",
          "partial": "MD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "ABCD",
          "package": "MissingH",
          "source": "src/Data-Hash-MD5.html#ABCD",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "ABCD",
          "package": "MissingH",
          "partial": "ABCD",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:ABCD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "BoolList",
          "package": "MissingH",
          "source": "src/Data-Hash-MD5.html#BoolList",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "BoolList",
          "package": "MissingH",
          "partial": "Bool List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:BoolList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnything we want to work out the MD5 of must be an instance of class MD5\n\u003c/p\u003e",
          "module": "Data.Hash.MD5",
          "name": "MD5",
          "package": "MissingH",
          "source": "src/Data-Hash-MD5.html#MD5",
          "type": "class"
        },
        "index": {
          "description": "Anything we want to work out the MD5 of must be an instance of class MD5",
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "MD5",
          "package": "MissingH",
          "partial": "MD",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:MD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "Str",
          "package": "MissingH",
          "source": "src/Data-Hash-MD5.html#Str",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "Str",
          "package": "MissingH",
          "partial": "Str",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "WordList",
          "package": "MissingH",
          "source": "src/Data-Hash-MD5.html#WordList",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "WordList",
          "package": "MissingH",
          "partial": "Word List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:WordList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "Zord64",
          "package": "MissingH",
          "source": "src/Data-Hash-MD5.html#Zord64",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "Zord64",
          "package": "MissingH",
          "partial": "Zord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:Zord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "ABCD",
          "package": "MissingH",
          "signature": "ABCD (Word32, Word32, Word32, Word32)",
          "source": "src/Data-Hash-MD5.html#ABCD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "ABCD",
          "normalized": "ABCD(Word,Word,Word,Word)",
          "package": "MissingH",
          "partial": "ABCD",
          "signature": "ABCD(Word,Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:ABCD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "BoolList",
          "package": "MissingH",
          "signature": "BoolList [Bool]",
          "source": "src/Data-Hash-MD5.html#BoolList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "BoolList",
          "normalized": "BoolList[Bool]",
          "package": "MissingH",
          "partial": "Bool List",
          "signature": "BoolList[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:BoolList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "Str",
          "package": "MissingH",
          "signature": "Str String",
          "source": "src/Data-Hash-MD5.html#Str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "Str",
          "package": "MissingH",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "WordList",
          "package": "MissingH",
          "signature": "WordList ([Word32], Zord64)",
          "source": "src/Data-Hash-MD5.html#WordList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "WordList",
          "normalized": "WordList([Word],Zord)",
          "package": "MissingH",
          "partial": "Word List",
          "signature": "WordList([Word],Zord)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:WordList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "finished",
          "package": "MissingH",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Hash-MD5.html#finished",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "finished",
          "normalized": "a-\u003eBool",
          "package": "MissingH",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "get_next",
          "package": "MissingH",
          "signature": "a -\u003e ([Word32], Int, a)",
          "source": "src/Data-Hash-MD5.html#get_next",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "get_next",
          "normalized": "a-\u003e([Word],Int,a)",
          "package": "MissingH",
          "signature": "a-\u003e([Word],Int,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:get_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.MD5",
          "name": "len_pad",
          "package": "MissingH",
          "signature": "Zord64 -\u003e a -\u003e a",
          "source": "src/Data-Hash-MD5.html#len_pad",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "len_pad",
          "normalized": "Zord-\u003ea-\u003ea",
          "package": "MissingH",
          "signature": "Zord-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:len_pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simplest function, gives you the MD5 of a string as 4-tuple of\n  32bit words. \n\u003c/p\u003e",
          "module": "Data.Hash.MD5",
          "name": "md5",
          "package": "MissingH",
          "signature": "a -\u003e ABCD",
          "source": "src/Data-Hash-MD5.html#md5",
          "type": "function"
        },
        "index": {
          "description": "The simplest function gives you the MD5 of string as tuple of bit words",
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "md5",
          "normalized": "a-\u003eABCD",
          "package": "MissingH",
          "signature": "a-\u003eABCD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:md5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an integer equivalent to hex number from \u003ccode\u003e\u003ca\u003emd5s\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Hash.MD5",
          "name": "md5i",
          "package": "MissingH",
          "signature": "a -\u003e Integer",
          "source": "src/Data-Hash-MD5.html#md5i",
          "type": "function"
        },
        "index": {
          "description": "Returns an integer equivalent to hex number from md5s",
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "md5i",
          "normalized": "a-\u003eInteger",
          "package": "MissingH",
          "signature": "a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:md5i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a hex number ala the md5sum program. \n\u003c/p\u003e",
          "module": "Data.Hash.MD5",
          "name": "md5s",
          "package": "MissingH",
          "signature": "a -\u003e String",
          "source": "src/Data-Hash-MD5.html#md5s",
          "type": "function"
        },
        "index": {
          "description": "Returns hex number ala the md5sum program",
          "hierarchy": "Data Hash MD5",
          "module": "Data.Hash.MD5",
          "name": "md5s",
          "normalized": "a-\u003eString",
          "package": "MissingH",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:md5s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with lists.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Data-List-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with lists Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type used for functions for \u003ccode\u003e\u003ca\u003ewholeMap\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003ewholeMap\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "WholeFunc",
          "package": "MissingH",
          "source": "src/Data-List-Utils.html#WholeFunc",
          "type": "newtype"
        },
        "index": {
          "description": "The type used for functions for wholeMap See wholeMap for details",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "WholeFunc",
          "package": "MissingH",
          "partial": "Whole Func",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#t:WholeFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Utils",
          "name": "WholeFunc",
          "package": "MissingH",
          "signature": "WholeFunc ([a] -\u003e (WholeFunc a b, [a], [b]))",
          "source": "src/Data-List-Utils.html#WholeFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "WholeFunc",
          "normalized": "WholeFunc([a]-\u003e(WholeFunc a b,[a],[b]))",
          "package": "MissingH",
          "partial": "Whole Func",
          "signature": "WholeFunc([a]-\u003e(WholeFunc a b,[a],[b]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:WholeFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the specified (key, value) pair to the given list, removing any\nexisting pair with the same key already present. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "addToAL",
          "package": "MissingH",
          "signature": "[(key, elt)] -\u003e key -\u003e elt -\u003e [(key, elt)]",
          "source": "src/Data-List-Utils.html#addToAL",
          "type": "function"
        },
        "index": {
          "description": "Adds the specified key value pair to the given list removing any existing pair with the same key already present",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "addToAL",
          "normalized": "[(a,b)]-\u003ea-\u003eb-\u003e[(a,b)]",
          "package": "MissingH",
          "partial": "To AL",
          "signature": "[(key,elt)]-\u003ekey-\u003eelt-\u003e[(key,elt)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:addToAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike elemRIndex, but returns -1 if there is nothing\nfound. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "alwaysElemRIndex",
          "package": "MissingH",
          "signature": "a -\u003e [a] -\u003e Int",
          "source": "src/Data-List-Utils.html#alwaysElemRIndex",
          "type": "function"
        },
        "index": {
          "description": "Like elemRIndex but returns if there is nothing found",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "alwaysElemRIndex",
          "normalized": "a-\u003e[a]-\u003eInt",
          "package": "MissingH",
          "partial": "Elem RIndex",
          "signature": "a-\u003e[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:alwaysElemRIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to Data.List.break, but performs the test on the entire remaining\nlist instead of just one element.\n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "breakList",
          "package": "MissingH",
          "signature": "([a] -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Data-List-Utils.html#breakList",
          "type": "function"
        },
        "index": {
          "description": "Similar to Data.List.break but performs the test on the entire remaining list instead of just one element",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "breakList",
          "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "MissingH",
          "partial": "List",
          "signature": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:breakList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.List.isInfixOf, will be removed in MissingH 1.1.0\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eReturns true if the given parameter is a sublist of the given list;\nfalse otherwise.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e contains \"Haskell\" \"I really like Haskell.\" -\u003e True\n contains \"Haskell\" \"OCaml is great.\" -\u003e False\n\u003c/pre\u003e\u003cp\u003eThis function was submitted to GHC and was applied as\n\u003ccode\u003e\u003ca\u003eisInfixOf\u003c/a\u003e\u003c/code\u003e.  This function therefore is deprecated and will\nbe removed in future versions.\n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "contains",
          "package": "MissingH",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-List-Utils.html#contains",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.List.isInfixOf will be removed in MissingH Returns true if the given parameter is sublist of the given list false otherwise Example contains Haskell really like Haskell True contains Haskell OCaml is great False This function was submitted to GHC and was applied as isInfixOf This function therefore is deprecated and will be removed in future versions",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "contains",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "MissingH",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a count of the number of times the given element occured in the\ngiven list. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "countElem",
          "package": "MissingH",
          "signature": "a -\u003e [a] -\u003e Int",
          "source": "src/Data-List-Utils.html#countElem",
          "type": "function"
        },
        "index": {
          "description": "Returns count of the number of times the given element occured in the given list",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "countElem",
          "normalized": "a-\u003e[a]-\u003eInt",
          "package": "MissingH",
          "partial": "Elem",
          "signature": "a-\u003e[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:countElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all (key, value) pairs from the given list where the key\nmatches the given one. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "delFromAL",
          "package": "MissingH",
          "signature": "[(key, a)] -\u003e key -\u003e [(key, a)]",
          "source": "src/Data-List-Utils.html#delFromAL",
          "type": "function"
        },
        "index": {
          "description": "Removes all key value pairs from the given list where the key matches the given one",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "delFromAL",
          "normalized": "[(a,b)]-\u003ea-\u003e[(a,b)]",
          "package": "MissingH",
          "partial": "From AL",
          "signature": "[(key,a)]-\u003ekey-\u003e[(key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:delFromAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to Data.List.dropWhile, drops elements while the func is true.\nThe function is given the remainder of the list to examine. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "dropWhileList",
          "package": "MissingH",
          "signature": "([a] -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Utils.html#dropWhileList",
          "type": "function"
        },
        "index": {
          "description": "Similar to Data.List.dropWhile drops elements while the func is true The function is given the remainder of the list to examine",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "dropWhileList",
          "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "MissingH",
          "partial": "While List",
          "signature": "([a]-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:dropWhileList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the rightmost index of the given element in the\ngiven list. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "elemRIndex",
          "package": "MissingH",
          "signature": "a -\u003e [a] -\u003e Maybe Int",
          "source": "src/Data-List-Utils.html#elemRIndex",
          "type": "function"
        },
        "index": {
          "description": "Returns the rightmost index of the given element in the given list",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "elemRIndex",
          "normalized": "a-\u003e[a]-\u003eMaybe Int",
          "package": "MissingH",
          "partial": "RIndex",
          "signature": "a-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:elemRIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the given list ends with the specified elements;\nfalse otherwise.  (This is an alias for \u003ca\u003eData.List.isSuffixOf\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e endswith \"lo\" \"Hello\" -\u003e True\n\u003c/pre\u003e",
          "module": "[\"Data.List.Utils\",\"Data.String.Utils\"]",
          "name": "endswith",
          "package": "MissingH",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-List-Utils.html#endswith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:endswith\",\"http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:endswith\"]"
        },
        "index": {
          "description": "Returns true if the given list ends with the specified elements false otherwise This is an alias for Data.List.isSuffixOf Example endswith lo Hello True",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "endswith",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "MissingH",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:endswith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser designed to process fixed-width input fields.  Use it with\n\u003ccode\u003e\u003ca\u003ewholeMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe Int list passed to this function is the list of the field widths desired\nfrom the input.  The result is a list of those widths, if possible.  If any\nof the input remains after processing this list, it is added on as the final\nelement in the result list.  If the input is less than the sum of the requested\nwidths, then the result list will be short the appropriate number of elements,\nand its final element may be shorter than requested.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003ewholeMap (fixedWidth [1, 2, 3]) \"1234567890\"\n --\u003e [\"1\",\"23\",\"456\",\"7890\"]\nwholeMap (fixedWidth (repeat 2)) \"123456789\"\n --\u003e [\"12\",\"34\",\"56\",\"78\",\"9\"]\nwholeMap (fixedWidth []) \"123456789\"\n --\u003e [\"123456789\"]\nwholeMap (fixedWidth [5, 3, 6, 1]) \"Hello, This is a test.\"\n --\u003e [\"Hello\",\", T\",\"his is\",\" \",\"a test.\"]\n\u003c/pre\u003e",
          "module": "Data.List.Utils",
          "name": "fixedWidth",
          "package": "MissingH",
          "signature": "[Int] -\u003e WholeFunc a [a]",
          "source": "src/Data-List-Utils.html#fixedWidth",
          "type": "function"
        },
        "index": {
          "description": "parser designed to process fixed-width input fields Use it with wholeMap The Int list passed to this function is the list of the field widths desired from the input The result is list of those widths if possible If any of the input remains after processing this list it is added on as the final element in the result list If the input is less than the sum of the requested widths then the result list will be short the appropriate number of elements and its final element may be shorter than requested Examples wholeMap fixedWidth wholeMap fixedWidth repeat wholeMap fixedWidth wholeMap fixedWidth Hello This is test Hello his is test",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "fixedWidth",
          "normalized": "[Int]-\u003eWholeFunc a[a]",
          "package": "MissingH",
          "partial": "Width",
          "signature": "[Int]-\u003eWholeFunc a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:fixedWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlips an association list.  Converts (key1, val), (key2, val) pairs\nto (val, [key1, key2]). \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "flipAL",
          "package": "MissingH",
          "signature": "[(key, val)] -\u003e [(val, [key])]",
          "source": "src/Data-List-Utils.html#flipAL",
          "type": "function"
        },
        "index": {
          "description": "Flips an association list Converts key1 val key2 val pairs to val key1 key2",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "flipAL",
          "normalized": "[(a,b)]-\u003e[(b,[a])]",
          "package": "MissingH",
          "partial": "AL",
          "signature": "[(key,val)]-\u003e[(val,[key])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:flipAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e, but works with a list of anything showable, converting\nit to a String.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e genericJoin \", \" [1, 2, 3, 4] -\u003e \"1, 2, 3, 4\"\n genericJoin \"|\" [\"foo\", \"bar\", \"baz\"] -\u003e \"\\\"foo\\\"|\\\"bar\\\"|\\\"baz\\\"\"\n\u003c/pre\u003e",
          "module": "Data.List.Utils",
          "name": "genericJoin",
          "package": "MissingH",
          "signature": "String -\u003e [a] -\u003e String",
          "source": "src/Data-List-Utils.html#genericJoin",
          "type": "function"
        },
        "index": {
          "description": "Like join but works with list of anything showable converting it to String Examples genericJoin genericJoin foo bar baz foo bar baz",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "genericJoin",
          "normalized": "String-\u003e[a]-\u003eString",
          "package": "MissingH",
          "partial": "Join",
          "signature": "String-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:genericJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelps you pick out fixed-width components from a list.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003econv :: String -\u003e (String,String)\nconv = runState $\n        do f3 \u003c- grab 3\n           n2 \u003c- grab 2\n           return $ f3 ++ \",\" ++ n2\n\nmain = print $ conv \"TestIng\"\n\u003c/pre\u003e\u003cp\u003ePrints:\n\u003c/p\u003e\u003cpre\u003e(\"Tes,tI\",\"ng\")\n\u003c/pre\u003e",
          "module": "Data.List.Utils",
          "name": "grab",
          "package": "MissingH",
          "signature": "Int -\u003e State [a] [a]",
          "source": "src/Data-List-Utils.html#grab",
          "type": "function"
        },
        "index": {
          "description": "Helps you pick out fixed-width components from list Example conv String String String conv runState do f3 grab n2 grab return f3 n2 main print conv TestIng Prints Tes tI ng",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "grab",
          "normalized": "Int-\u003eState[a][a]",
          "package": "MissingH",
          "signature": "Int-\u003eState[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:grab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the given list contains any of the elements in the search\nlist. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "hasAny",
          "package": "MissingH",
          "signature": "[a]-\u003e [a]-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the given list contains any of the elements in the search list",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "hasAny",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "MissingH",
          "partial": "Any",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:hasAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether or not the given key is in the AL. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "hasKeyAL",
          "package": "MissingH",
          "signature": "a -\u003e [(a, b)] -\u003e Bool",
          "source": "src/Data-List-Utils.html#hasKeyAL",
          "type": "function"
        },
        "index": {
          "description": "Indicates whether or not the given key is in the AL",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "hasKeyAL",
          "normalized": "a-\u003e[(a,b)]-\u003eBool",
          "package": "MissingH",
          "partial": "Key AL",
          "signature": "a-\u003e[(a,b)]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:hasKeyAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a delimiter and a list of items (or strings), join the items\nby using the delimiter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e join \"|\" [\"foo\", \"bar\", \"baz\"] -\u003e \"foo|bar|baz\"\n\u003c/pre\u003e",
          "module": "[\"Data.List.Utils\",\"Data.String.Utils\"]",
          "name": "join",
          "package": "MissingH",
          "signature": "[a] -\u003e [[a]] -\u003e [a]",
          "source": "src/Data-List-Utils.html#join",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:join\",\"http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:join\"]"
        },
        "index": {
          "description": "Given delimiter and list of items or strings join the items by using the delimiter Example join foo bar baz foo bar baz",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "join",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "MissingH",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the keys that comprise the (key, value) pairs of the given AL.\n\u003c/p\u003e\u003cp\u003eSame as:\n\u003c/p\u003e\u003cpre\u003emap fst\n\u003c/pre\u003e",
          "module": "Data.List.Utils",
          "name": "keysAL",
          "package": "MissingH",
          "signature": "[(key, a)] -\u003e [key]",
          "source": "src/Data-List-Utils.html#keysAL",
          "type": "function"
        },
        "index": {
          "description": "Returns the keys that comprise the key value pairs of the given AL Same as map fst",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "keysAL",
          "normalized": "[(a,b)]-\u003e[a]",
          "package": "MissingH",
          "partial": "AL",
          "signature": "[(key,a)]-\u003e[key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:keysAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two sorted lists into a single, sorted whole.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e merge [1,3,5] [1,2,4,6] -\u003e [1,1,2,3,4,5,6]\n\u003c/pre\u003e\u003cp\u003eQuickCheck test property:\n\u003c/p\u003e\u003cp\u003eprop_merge xs ys =\n    merge (sort xs) (sort ys) == sort (xs ++ ys)\n          where types = xs :: [Int]\n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "merge",
          "package": "MissingH",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Utils.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merge two sorted lists into single sorted whole Example merge QuickCheck test property prop merge xs ys merge sort xs sort ys sort xs ys where types xs Int",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "merge",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "MissingH",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two sorted lists using into a single, sorted whole,\nallowing the programmer to specify the comparison function.\n\u003c/p\u003e\u003cp\u003eQuickCheck test property:\n\u003c/p\u003e\u003cp\u003eprop_mergeBy xs ys =\n    mergeBy cmp (sortBy cmp xs) (sortBy cmp ys) == sortBy cmp (xs ++ ys)\n          where types = xs :: [ (Int, Int) ]\n                cmp (x1,_) (x2,_) = compare x1 x2\n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "mergeBy",
          "package": "MissingH",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Utils.html#mergeBy",
          "type": "function"
        },
        "index": {
          "description": "Merge two sorted lists using into single sorted whole allowing the programmer to specify the comparison function QuickCheck test property prop mergeBy xs ys mergeBy cmp sortBy cmp xs sortBy cmp ys sortBy cmp xs ys where types xs Int Int cmp x1 x2 compare x1 x2",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "mergeBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "MissingH",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:mergeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list and a replacement list, replaces each occurance of the search\nlist with the replacement list in the operation list.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003ereplace \",\" \".\" \"127,0,0,1\" -\u003e \"127.0.0.1\"\n\u003c/pre\u003e\u003cp\u003eThis could logically be thought of as:\n\u003c/p\u003e\u003cpre\u003ereplace old new l = join new . split old $ l\n\u003c/pre\u003e",
          "module": "[\"Data.List.Utils\",\"Data.String.Utils\"]",
          "name": "replace",
          "package": "MissingH",
          "signature": "[a] -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Utils.html#replace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:replace\",\"http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:replace\"]"
        },
        "index": {
          "description": "Given list and replacement list replaces each occurance of the search list with the replacement list in the operation list Example replace This could logically be thought of as replace old new join new split old",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "replace",
          "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "MissingH",
          "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces the evaluation of the entire list. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "seqList",
          "package": "MissingH",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-List-Utils.html#seqList",
          "type": "function"
        },
        "index": {
          "description": "Forces the evaluation of the entire list",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "seqList",
          "normalized": "[a]-\u003e[a]",
          "package": "MissingH",
          "partial": "List",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:seqList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to Data.List.span, but performs the test on the entire remaining\nlist instead of just one element. \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003espanList p xs\u003c/code\u003e is the same as \u003ccode\u003e(takeWhileList p xs, dropWhileList p xs)\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "spanList",
          "package": "MissingH",
          "signature": "([a] -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Data-List-Utils.html#spanList",
          "type": "function"
        },
        "index": {
          "description": "Similar to Data.List.span but performs the test on the entire remaining list instead of just one element spanList xs is the same as takeWhileList xs dropWhileList xs",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "spanList",
          "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "MissingH",
          "partial": "List",
          "signature": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:spanList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a delimiter and a list (or string), split into components.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e split \",\" \"foo,bar,,baz,\" -\u003e [\"foo\", \"bar\", \"\", \"baz\", \"\"]\n\u003c/pre\u003e\u003cpre\u003e split \"ba\" \",foo,bar,,baz,\" -\u003e [\",foo,\",\"r,,\",\"z,\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Utils\",\"Data.String.Utils\"]",
          "name": "split",
          "package": "MissingH",
          "signature": "[a] -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Utils.html#split",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:split\",\"http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:split\"]"
        },
        "index": {
          "description": "Given delimiter and list or string split into components Example split foo bar baz foo bar baz split ba foo bar baz foo",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "split",
          "normalized": "[a]-\u003e[a]-\u003e[[a]]",
          "package": "MissingH",
          "signature": "[a]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the given list starts with the specified elements;\nfalse otherwise.  (This is an alias for \u003ca\u003eData.List.isPrefixOf\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e startswith \"He\" \"Hello\" -\u003e True\n\u003c/pre\u003e",
          "module": "[\"Data.List.Utils\",\"Data.String.Utils\"]",
          "name": "startswith",
          "package": "MissingH",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-List-Utils.html#startswith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:startswith\",\"http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:startswith\"]"
        },
        "index": {
          "description": "Returns true if the given list starts with the specified elements false otherwise This is an alias for Data.List.isPrefixOf Example startswith He Hello True",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "startswith",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "MissingH",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:startswith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an association list to a string.  The string will have\none pair per line, with the key and value both represented as a Haskell string.\n\u003c/p\u003e\u003cp\u003eThis function is designed to work with [(String, String)] association lists,\nbut may work with other types as well. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "strFromAL",
          "package": "MissingH",
          "signature": "[(a, b)] -\u003e String",
          "source": "src/Data-List-Utils.html#strFromAL",
          "type": "function"
        },
        "index": {
          "description": "Converts an association list to string The string will have one pair per line with the key and value both represented as Haskell string This function is designed to work with String String association lists but may work with other types as well",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "strFromAL",
          "normalized": "[(a,b)]-\u003eString",
          "package": "MissingH",
          "partial": "From AL",
          "signature": "[(a,b)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:strFromAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003estrFromAL\u003c/a\u003e\u003c/code\u003e, this function reads a string and outputs the\nappropriate association list. \n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003estrFromAL\u003c/a\u003e\u003c/code\u003e, this is designed to work with [(String, String)] association\nlists but may also work with other objects with simple representations.\n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "strToAL",
          "package": "MissingH",
          "signature": "String -\u003e [(a, b)]",
          "source": "src/Data-List-Utils.html#strToAL",
          "type": "function"
        },
        "index": {
          "description": "The inverse of strFromAL this function reads string and outputs the appropriate association list Like strFromAL this is designed to work with String String association lists but may also work with other objects with simple representations",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "strToAL",
          "normalized": "String-\u003e[(a,b)]",
          "package": "MissingH",
          "partial": "To AL",
          "signature": "String-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:strToAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to Data.List.elemIndex.  Instead of looking for one element in a\nlist, this function looks for the first occurance of a sublist in the list,\nand returns the index of the first element of that occurance.  If there is no\nsuch list, returns Nothing.\n\u003c/p\u003e\u003cp\u003eIf the list to look for is the empty list, will return Just 0 regardless\nof the content of the list to search.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003esubIndex \"foo\" \"asdfoobar\" -\u003e Just 3\nsubIndex \"foo\" [] -\u003e Nothing\nsubIndex \"\" [] -\u003e Just 0\nsubIndex \"\" \"asdf\" -\u003e Just 0\nsubIndex \"test\" \"asdftestbartest\" -\u003e Just 4\nsubIndex [(1::Int), 2] [0, 5, 3, 2, 1, 2, 4] -\u003e Just 4\n\u003c/pre\u003e",
          "module": "Data.List.Utils",
          "name": "subIndex",
          "package": "MissingH",
          "signature": "[a] -\u003e [a] -\u003e Maybe Int",
          "source": "src/Data-List-Utils.html#subIndex",
          "type": "function"
        },
        "index": {
          "description": "Similar to Data.List.elemIndex Instead of looking for one element in list this function looks for the first occurance of sublist in the list and returns the index of the first element of that occurance If there is no such list returns Nothing If the list to look for is the empty list will return Just regardless of the content of the list to search Examples subIndex foo asdfoobar Just subIndex foo Nothing subIndex Just subIndex asdf Just subIndex test asdftestbartest Just subIndex Int Just",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "subIndex",
          "normalized": "[a]-\u003e[a]-\u003eMaybe Int",
          "package": "MissingH",
          "partial": "Index",
          "signature": "[a]-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:subIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to Data.List.takeWhile, takes elements while the func is true.\nThe function is given the remainder of the list to examine. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "takeWhileList",
          "package": "MissingH",
          "signature": "([a] -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Utils.html#takeWhileList",
          "type": "function"
        },
        "index": {
          "description": "Similar to Data.List.takeWhile takes elements while the func is true The function is given the remainder of the list to examine",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "takeWhileList",
          "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "MissingH",
          "partial": "While List",
          "signature": "([a]-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:takeWhileList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list, returns a new list with all duplicate elements removed.\nFor example:\n\u003c/p\u003e\u003cpre\u003euniq \"Mississippi\" -\u003e \"Misp\"\n\u003c/pre\u003e\u003cp\u003eYou should not rely on this function necessarily preserving order, though\nthe current implementation happens to.\n\u003c/p\u003e\u003cp\u003eThis function is not compatible with infinite lists.\n\u003c/p\u003e\u003cp\u003eThis is presently an alias for Data.List.nub\n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "uniq",
          "package": "MissingH",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-List-Utils.html#uniq",
          "type": "function"
        },
        "index": {
          "description": "Given list returns new list with all duplicate elements removed For example uniq Mississippi Misp You should not rely on this function necessarily preserving order though the current implementation happens to This function is not compatible with infinite lists This is presently an alias for Data.List.nub",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "uniq",
          "normalized": "[a]-\u003e[a]",
          "package": "MissingH",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:uniq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the values the comprise the (key, value) pairs of the given\nAL.\n\u003c/p\u003e\u003cp\u003eSame as:\n\u003c/p\u003e\u003cpre\u003emap snd\n\u003c/pre\u003e",
          "module": "Data.List.Utils",
          "name": "valuesAL",
          "package": "MissingH",
          "signature": "[(a, value)] -\u003e [value]",
          "source": "src/Data-List-Utils.html#valuesAL",
          "type": "function"
        },
        "index": {
          "description": "Returns the values the comprise the key value pairs of the given AL Same as map snd",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "valuesAL",
          "normalized": "[(a,b)]-\u003e[b]",
          "package": "MissingH",
          "partial": "AL",
          "signature": "[(a,value)]-\u003e[value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:valuesAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an enhanced version of the concatMap or map functions in \nData.List.\n\u003c/p\u003e\u003cp\u003eUnlike those functions, this one:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Can consume a varying number of elements from the input list during\n   each iteration\n\u003c/li\u003e\u003cli\u003e Can arbitrarily decide when to stop processing data\n\u003c/li\u003e\u003cli\u003e Can return a varying number of elements to insert into the output list\n\u003c/li\u003e\u003cli\u003e Can actually switch processing functions mid-stream\n\u003c/li\u003e\u003cli\u003e Is not even restricted to processing the input list intact\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe function used by wholeMap, of type \u003ccode\u003e\u003ca\u003eWholeFunc\u003c/a\u003e\u003c/code\u003e, is repeatedly called\nwith the input list.  The function returns three things: the function\nto call for the next iteration (if any), what remains of the input list,\nand the list of output elements generated during this iteration.  The return\nvalue of \u003ccode\u003e\u003ca\u003ewholeMap\u003c/a\u003e\u003c/code\u003e is the concatenation of the output element lists from\nall iterations.\n\u003c/p\u003e\u003cp\u003eProcessing stops when the remaining input list is empty.  An example\nof a \u003ccode\u003e\u003ca\u003eWholeFunc\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003efixedWidth\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.List.Utils",
          "name": "wholeMap",
          "package": "MissingH",
          "signature": "WholeFunc a b -\u003e [a] -\u003e [b]",
          "source": "src/Data-List-Utils.html#wholeMap",
          "type": "function"
        },
        "index": {
          "description": "This is an enhanced version of the concatMap or map functions in Data.List Unlike those functions this one Can consume varying number of elements from the input list during each iteration Can arbitrarily decide when to stop processing data Can return varying number of elements to insert into the output list Can actually switch processing functions mid-stream Is not even restricted to processing the input list intact The function used by wholeMap of type WholeFunc is repeatedly called with the input list The function returns three things the function to call for the next iteration if any what remains of the input list and the list of output elements generated during this iteration The return value of wholeMap is the concatenation of the output element lists from all iterations Processing stops when the remaining input list is empty An example of WholeFunc is fixedWidth",
          "hierarchy": "Data List Utils",
          "module": "Data.List.Utils",
          "name": "wholeMap",
          "normalized": "WholeFunc a b-\u003e[a]-\u003e[b]",
          "package": "MissingH",
          "partial": "Map",
          "signature": "WholeFunc a b-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:wholeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for guessing MIME types of files.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MIME.Types",
          "name": "Types",
          "package": "MissingH",
          "source": "src/Data-MIME-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for guessing MIME types of files Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "Types",
          "package": "MissingH",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn value from guessing a file's type.\n\u003c/p\u003e\u003cp\u003eThe first element of the tuple gives the MIME type.  It is Nothing if no\nsuitable type could be found.\n\u003c/p\u003e\u003cp\u003eThe second element gives the encoding.  It is Nothing if there was no particular\nencoding for the file, or if no encoding could be found.\n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "MIMEResults",
          "package": "MissingH",
          "source": "src/Data-MIME-Types.html#MIMEResults",
          "type": "type"
        },
        "index": {
          "description": "Return value from guessing file type The first element of the tuple gives the MIME type It is Nothing if no suitable type could be found The second element gives the encoding It is Nothing if there was no particular encoding for the file or if no encoding could be found",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "MIMEResults",
          "package": "MissingH",
          "partial": "MIMEResults",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#t:MIMEResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MIME.Types",
          "name": "MIMETypeData",
          "package": "MissingH",
          "source": "src/Data-MIME-Types.html#MIMETypeData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "MIMETypeData",
          "package": "MissingH",
          "partial": "MIMEType Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#t:MIMETypeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MIME.Types",
          "name": "MIMETypeData",
          "package": "MissingH",
          "signature": "MIMETypeData",
          "source": "src/Data-MIME-Types.html#MIMETypeData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "MIMETypeData",
          "package": "MissingH",
          "partial": "MIMEType Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:MIMETypeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping used to augment the \u003ccode\u003e\u003ca\u003etypesMap\u003c/a\u003e\u003c/code\u003e when non-strict\n lookups are used.\n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "commonTypesMap",
          "package": "MissingH",
          "signature": "Map String String",
          "source": "src/Data-MIME-Types.html#MIMETypeData",
          "type": "function"
        },
        "index": {
          "description": "mapping used to augment the typesMap when non-strict lookups are used",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "commonTypesMap",
          "package": "MissingH",
          "partial": "Types Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:commonTypesMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault MIME type data to use \n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "defaultmtd",
          "package": "MissingH",
          "signature": "MIMETypeData",
          "source": "src/Data-MIME-Types.html#defaultmtd",
          "type": "function"
        },
        "index": {
          "description": "Default MIME type data to use",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "defaultmtd",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:defaultmtd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping used to determine the encoding of a file.\n This is used, for instance, to map \u003ca\u003e.gz\u003c/a\u003e to \u003ca\u003egzip\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "encodingsMap",
          "package": "MissingH",
          "signature": "Map String String",
          "source": "src/Data-MIME-Types.html#MIMETypeData",
          "type": "function"
        },
        "index": {
          "description": "mapping used to determine the encoding of file This is used for instance to map gz to gzip",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "encodingsMap",
          "package": "MissingH",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:encodingsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eguessExtension\u003c/a\u003e\u003c/code\u003e, but returns a list of all possible matching\nextensions, or the empty list if there are no matches. \n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "guessAllExtensions",
          "package": "MissingH",
          "signature": "MIMETypeData-\u003e Bool-\u003e String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Similar to guessExtension but returns list of all possible matching extensions or the empty list if there are no matches",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "guessAllExtensions",
          "normalized": "MIMETypeData-\u003eBool-\u003eString-\u003e[String]",
          "package": "MissingH",
          "partial": "All Extensions",
          "signature": "MIMETypeData-\u003eBool-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:guessAllExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuess the extension of a file based on its MIME type.\n   The return value includes the leading dot.\n\u003c/p\u003e\u003cp\u003eReturns Nothing if no extension could be found.\n\u003c/p\u003e\u003cp\u003eIn the event that multiple possible extensions are available,\n   one of them will be picked and returned.  The logic to select one\n   of these should be considered undefined. \n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "guessExtension",
          "package": "MissingH",
          "signature": "MIMETypeData-\u003e Bool-\u003e String-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Guess the extension of file based on its MIME type The return value includes the leading dot Returns Nothing if no extension could be found In the event that multiple possible extensions are available one of them will be picked and returned The logic to select one of these should be considered undefined",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "guessExtension",
          "normalized": "MIMETypeData-\u003eBool-\u003eString-\u003eMaybe String",
          "package": "MissingH",
          "partial": "Extension",
          "signature": "MIMETypeData-\u003eBool-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:guessExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuess the type of a file given a filename or URL.  The file\n   is not opened; only the name is considered. \n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "guessType",
          "package": "MissingH",
          "signature": "MIMETypeData-\u003e Bool-\u003e String-\u003e MIMEResults",
          "type": "function"
        },
        "index": {
          "description": "Guess the type of file given filename or URL The file is not opened only the name is considered",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "guessType",
          "normalized": "MIMETypeData-\u003eBool-\u003eString-\u003eMIMEResults",
          "package": "MissingH",
          "partial": "Type",
          "signature": "MIMETypeData-\u003eBool-\u003eString-\u003eMIMEResults",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:guessType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a mime.types file from an already-open handle. \n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "hReadMIMETypes",
          "package": "MissingH",
          "signature": "MIMETypeData-\u003e Bool-\u003e Handle-\u003e IO MIMETypeData",
          "type": "function"
        },
        "index": {
          "description": "Load mime.types file from an already-open handle",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "hReadMIMETypes",
          "normalized": "MIMETypeData-\u003eBool-\u003eHandle-\u003eIO MIMETypeData",
          "package": "MissingH",
          "partial": "Read MIMETypes",
          "signature": "MIMETypeData-\u003eBool-\u003eHandle-\u003eIO MIMETypeData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:hReadMIMETypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the given mime.types file and add it to an existing object.\nReturns new object. \n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "readMIMETypes",
          "package": "MissingH",
          "signature": "MIMETypeData-\u003e Bool-\u003e FilePath-\u003e IO MIMETypeData",
          "type": "function"
        },
        "index": {
          "description": "Read the given mime.types file and add it to an existing object Returns new object",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "readMIMETypes",
          "normalized": "MIMETypeData-\u003eBool-\u003eFilePath-\u003eIO MIMETypeData",
          "package": "MissingH",
          "partial": "MIMETypes",
          "signature": "MIMETypeData-\u003eBool-\u003eFilePath-\u003eIO MIMETypeData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:readMIMETypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the system's default mime.types files, and add the data contained\ntherein to the passed object, then return the new one. \n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "readSystemMIMETypes",
          "package": "MissingH",
          "signature": "MIMETypeData -\u003e IO MIMETypeData",
          "source": "src/Data-MIME-Types.html#readSystemMIMETypes",
          "type": "function"
        },
        "index": {
          "description": "Read the system default mime.types files and add the data contained therein to the passed object then return the new one",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "readSystemMIMETypes",
          "normalized": "MIMETypeData-\u003eIO MIMETypeData",
          "package": "MissingH",
          "partial": "System MIMETypes",
          "signature": "MIMETypeData-\u003eIO MIMETypeData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:readSystemMIMETypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping used to expand common suffixes into equivolent,\n better-parsed versions.  For instance, \u003ca\u003e.tgz\u003c/a\u003e would expand\n into \u003ca\u003e.tar.gz\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "suffixMap",
          "package": "MissingH",
          "signature": "Map String String",
          "source": "src/Data-MIME-Types.html#MIMETypeData",
          "type": "function"
        },
        "index": {
          "description": "mapping used to expand common suffixes into equivolent better-parsed versions For instance tgz would expand into tar.gz",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "suffixMap",
          "package": "MissingH",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:suffixMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping used to map extensions to MIME types.\n\u003c/p\u003e",
          "module": "Data.MIME.Types",
          "name": "typesMap",
          "package": "MissingH",
          "signature": "Map String String",
          "source": "src/Data-MIME-Types.html#MIMETypeData",
          "type": "function"
        },
        "index": {
          "description": "mapping used to map extensions to MIME types",
          "hierarchy": "Data MIME Types",
          "module": "Data.MIME.Types",
          "name": "typesMap",
          "package": "MissingH",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:typesMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with Data.Maps.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Map.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Data-Map-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with Data.Maps Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data Map Utils",
          "module": "Data.Map.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlips a Map.  See \u003ccode\u003e\u003ca\u003eflipAL\u003c/a\u003e\u003c/code\u003e for more on the similar\nfunction for lists. \n\u003c/p\u003e",
          "module": "Data.Map.Utils",
          "name": "flipM",
          "package": "MissingH",
          "signature": "Map key val -\u003e Map val [key]",
          "source": "src/Data-Map-Utils.html#flipM",
          "type": "function"
        },
        "index": {
          "description": "Flips Map See flipAL for more on the similar function for lists",
          "hierarchy": "Data Map Utils",
          "module": "Data.Map.Utils",
          "name": "flipM",
          "normalized": "Map a b-\u003eMap b[a]",
          "package": "MissingH",
          "signature": "Map key val-\u003eMap val[key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:flipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all keys in the Map whose value matches the\nparameter. If the value does not occur in the Map, the empty\nlist is returned. \n\u003c/p\u003e",
          "module": "Data.Map.Utils",
          "name": "flippedLookupM",
          "package": "MissingH",
          "signature": "val -\u003e Map key val -\u003e [key]",
          "source": "src/Data-Map-Utils.html#flippedLookupM",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all keys in the Map whose value matches the parameter If the value does not occur in the Map the empty list is returned",
          "hierarchy": "Data Map Utils",
          "module": "Data.Map.Utils",
          "name": "flippedLookupM",
          "normalized": "a-\u003eMap b a-\u003e[b]",
          "package": "MissingH",
          "partial": "Lookup",
          "signature": "val-\u003eMap key val-\u003e[key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:flippedLookupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a lookup, and raises an exception (with an error message\nprepended with the given string) if the key could not be found.\n\u003c/p\u003e",
          "module": "Data.Map.Utils",
          "name": "forceLookupM",
          "package": "MissingH",
          "signature": "String -\u003e key -\u003e Map key elt -\u003e elt",
          "source": "src/Data-Map-Utils.html#forceLookupM",
          "type": "function"
        },
        "index": {
          "description": "Performs lookup and raises an exception with an error message prepended with the given string if the key could not be found",
          "hierarchy": "Data Map Utils",
          "module": "Data.Map.Utils",
          "name": "forceLookupM",
          "normalized": "String-\u003ea-\u003eMap a b-\u003eb",
          "package": "MissingH",
          "partial": "Lookup",
          "signature": "String-\u003ekey-\u003eMap key elt-\u003eelt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:forceLookupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a String, String Map into a string representation.\nSee \u003ccode\u003e\u003ca\u003estrFromAL\u003c/a\u003e\u003c/code\u003e for more on the similar function for\nassociation lists.  This implementation is simple:\n\u003c/p\u003e\u003cpre\u003estrFromM = strFromAL . Data.Map.toList\n\u003c/pre\u003e\u003cp\u003eThis function is designed to work with Map String String objects,\nbut may also work with other objects with simple representations. \n\u003c/p\u003e",
          "module": "Data.Map.Utils",
          "name": "strFromM",
          "package": "MissingH",
          "signature": "Map a b -\u003e String",
          "source": "src/Data-Map-Utils.html#strFromM",
          "type": "function"
        },
        "index": {
          "description": "Converts String String Map into string representation See strFromAL for more on the similar function for association lists This implementation is simple strFromM strFromAL Data.Map.toList This function is designed to work with Map String String objects but may also work with other objects with simple representations",
          "hierarchy": "Data Map Utils",
          "module": "Data.Map.Utils",
          "name": "strFromM",
          "normalized": "Map a b-\u003eString",
          "package": "MissingH",
          "partial": "From",
          "signature": "Map a b-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:strFromM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a String into a String, String Map.  See\n\u003ccode\u003e\u003ca\u003estrToAL\u003c/a\u003e\u003c/code\u003e for more on the similar function for association\nlists.\n\u003c/p\u003e\u003cp\u003eThis implementation is simple:\n\u003c/p\u003e\u003cpre\u003estrToM = Data.Map.fromList . strToAL\n\u003c/pre\u003e\u003cp\u003eThis function is designed to work with Map String String objects,\nbut may work with other key/value combinations if they have simple\nrepresentations.  \n\u003c/p\u003e",
          "module": "Data.Map.Utils",
          "name": "strToM",
          "package": "MissingH",
          "signature": "String -\u003e Map a b",
          "source": "src/Data-Map-Utils.html#strToM",
          "type": "function"
        },
        "index": {
          "description": "Converts String into String String Map See strToAL for more on the similar function for association lists This implementation is simple strToM Data.Map.fromList strToAL This function is designed to work with Map String String objects but may work with other key value combinations if they have simple representations",
          "hierarchy": "Data Map Utils",
          "module": "Data.Map.Utils",
          "name": "strToM",
          "normalized": "String-\u003eMap a b",
          "package": "MissingH",
          "partial": "To",
          "signature": "String-\u003eMap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:strToM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with the Either data type\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Maybe.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Data-Maybe-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with the Either data type",
          "hierarchy": "Data Maybe Utils",
          "module": "Data.Maybe.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Maybe-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePulls a Just value out of a Maybe value.  If the Maybe value is\nNothing, raises an exception with error. \n\u003c/p\u003e",
          "module": "Data.Maybe.Utils",
          "name": "forceMaybe",
          "package": "MissingH",
          "signature": "Maybe a -\u003e a",
          "source": "src/Data-Maybe-Utils.html#forceMaybe",
          "type": "function"
        },
        "index": {
          "description": "Pulls Just value out of Maybe value If the Maybe value is Nothing raises an exception with error",
          "hierarchy": "Data Maybe Utils",
          "module": "Data.Maybe.Utils",
          "name": "forceMaybe",
          "normalized": "Maybe a-\u003ea",
          "package": "MissingH",
          "partial": "Maybe",
          "signature": "Maybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Maybe-Utils.html#v:forceMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eforceMaybe\u003c/a\u003e\u003c/code\u003e, but lets you customize the error message raised if\nNothing is supplied. \n\u003c/p\u003e",
          "module": "Data.Maybe.Utils",
          "name": "forceMaybeMsg",
          "package": "MissingH",
          "signature": "String -\u003e Maybe a -\u003e a",
          "source": "src/Data-Maybe-Utils.html#forceMaybeMsg",
          "type": "function"
        },
        "index": {
          "description": "Like forceMaybe but lets you customize the error message raised if Nothing is supplied",
          "hierarchy": "Data Maybe Utils",
          "module": "Data.Maybe.Utils",
          "name": "forceMaybeMsg",
          "normalized": "String-\u003eMaybe a-\u003ea",
          "package": "MissingH",
          "partial": "Maybe Msg",
          "signature": "String-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Maybe-Utils.html#v:forceMaybeMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTool for maintaining a status bar, supporting multiple simultaneous tasks,\nas a layer atop \u003ca\u003eData.Progress.Tracker\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Progress.Meter",
          "name": "Meter",
          "package": "MissingH",
          "source": "src/Data-Progress-Meter.html",
          "type": "module"
        },
        "index": {
          "description": "Tool for maintaining status bar supporting multiple simultaneous tasks as layer atop Data.Progress.Tracker Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "Meter",
          "package": "MissingH",
          "partial": "Meter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Progress.Meter",
          "name": "ProgressMeter",
          "package": "MissingH",
          "source": "src/Data-Progress-Meter.html#ProgressMeter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "ProgressMeter",
          "package": "MissingH",
          "partial": "Progress Meter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#t:ProgressMeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new component to the list of components. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "addComponent",
          "package": "MissingH",
          "signature": "ProgressMeter -\u003e Progress -\u003e IO ()",
          "source": "src/Data-Progress-Meter.html#addComponent",
          "type": "function"
        },
        "index": {
          "description": "Add new component to the list of components",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "addComponent",
          "normalized": "ProgressMeter-\u003eProgress-\u003eIO()",
          "package": "MissingH",
          "partial": "Component",
          "signature": "ProgressMeter-\u003eProgress-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:addComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a thread that updates the meter every n seconds by calling\nthe specified function.  Note: \u003ccode\u003edisplayMeter stdout\u003c/code\u003e\nis an ideal function here.\n\u003c/p\u003e\u003cp\u003eSave this threadID and use it later to call \u003ccode\u003estopAutoDisplayMeter\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "autoDisplayMeter",
          "package": "MissingH",
          "signature": "ProgressMeter-\u003e Int-\u003e (ProgressMeter -\u003e IO ())-\u003e IO ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Starts thread that updates the meter every seconds by calling the specified function Note displayMeter stdout is an ideal function here Save this threadID and use it later to call stopAutoDisplayMeter",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "autoDisplayMeter",
          "normalized": "ProgressMeter-\u003eInt-\u003e(ProgressMeter-\u003eIO())-\u003eIO ThreadId",
          "package": "MissingH",
          "partial": "Display Meter",
          "signature": "ProgressMeter-\u003eInt-\u003e(ProgressMeter-\u003eIO())-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:autoDisplayMeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears the meter -- outputs CR, spaces equal to the width - 1,\nthen another CR.\n\u003c/p\u003e\u003cp\u003ePass stdout as the handle for regular display to the screen. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "clearMeter",
          "package": "MissingH",
          "signature": "Handle -\u003e ProgressMeter -\u003e IO ()",
          "source": "src/Data-Progress-Meter.html#clearMeter",
          "type": "function"
        },
        "index": {
          "description": "Clears the meter outputs CR spaces equal to the width then another CR Pass stdout as the handle for regular display to the screen",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "clearMeter",
          "normalized": "Handle-\u003eProgressMeter-\u003eIO()",
          "package": "MissingH",
          "partial": "Meter",
          "signature": "Handle-\u003eProgressMeter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:clearMeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike renderMeter, but prints it to the screen instead of returning it.\n\u003c/p\u003e\u003cp\u003eThis function will output CR, then the meter.\n\u003c/p\u003e\u003cp\u003ePass stdout as the handle for regular display to the screen. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "displayMeter",
          "package": "MissingH",
          "signature": "Handle -\u003e ProgressMeter -\u003e IO ()",
          "source": "src/Data-Progress-Meter.html#displayMeter",
          "type": "function"
        },
        "index": {
          "description": "Like renderMeter but prints it to the screen instead of returning it This function will output CR then the meter Pass stdout as the handle for regular display to the screen",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "displayMeter",
          "normalized": "Handle-\u003eProgressMeter-\u003eIO()",
          "package": "MissingH",
          "partial": "Meter",
          "signature": "Handle-\u003eProgressMeter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:displayMeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops the specified meter from displaying.\n\u003c/p\u003e\u003cp\u003eYou should probably call \u003ccode\u003e\u003ca\u003eclearMeter\u003c/a\u003e\u003c/code\u003e after a call to this. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "killAutoDisplayMeter",
          "package": "MissingH",
          "signature": "ProgressMeter -\u003e ThreadId -\u003e IO ()",
          "source": "src/Data-Progress-Meter.html#killAutoDisplayMeter",
          "type": "function"
        },
        "index": {
          "description": "Stops the specified meter from displaying You should probably call clearMeter after call to this",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "killAutoDisplayMeter",
          "normalized": "ProgressMeter-\u003eThreadId-\u003eIO()",
          "package": "MissingH",
          "partial": "Auto Display Meter",
          "signature": "ProgressMeter-\u003eThreadId-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:killAutoDisplayMeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up a new status bar. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "newMeter",
          "package": "MissingH",
          "signature": "Progress-\u003e String-\u003e Int-\u003e ([Integer] -\u003e [String])-\u003e IO ProgressMeter",
          "type": "function"
        },
        "index": {
          "description": "Set up new status bar",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "newMeter",
          "normalized": "Progress-\u003eString-\u003eInt-\u003e([Integer]-\u003e[String])-\u003eIO ProgressMeter",
          "package": "MissingH",
          "partial": "Meter",
          "signature": "Progress-\u003eString-\u003eInt-\u003e([Integer]-\u003e[String])-\u003eIO ProgressMeter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:newMeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a component by name. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "removeComponent",
          "package": "MissingH",
          "signature": "ProgressMeter -\u003e String -\u003e IO ()",
          "source": "src/Data-Progress-Meter.html#removeComponent",
          "type": "function"
        },
        "index": {
          "description": "Remove component by name",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "removeComponent",
          "normalized": "ProgressMeter-\u003eString-\u003eIO()",
          "package": "MissingH",
          "partial": "Component",
          "signature": "ProgressMeter-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:removeComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the current status. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "renderMeter",
          "package": "MissingH",
          "signature": "ProgressMeter -\u003e IO String",
          "source": "src/Data-Progress-Meter.html#renderMeter",
          "type": "function"
        },
        "index": {
          "description": "Render the current status",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "renderMeter",
          "normalized": "ProgressMeter-\u003eIO String",
          "package": "MissingH",
          "partial": "Meter",
          "signature": "ProgressMeter-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:renderMeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the list of components of this \u003ccode\u003e\u003ca\u003eProgressMeter\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "setComponents",
          "package": "MissingH",
          "signature": "ProgressMeter -\u003e [Progress] -\u003e IO ()",
          "source": "src/Data-Progress-Meter.html#setComponents",
          "type": "function"
        },
        "index": {
          "description": "Adjust the list of components of this ProgressMeter",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "setComponents",
          "normalized": "ProgressMeter-\u003e[Progress]-\u003eIO()",
          "package": "MissingH",
          "partial": "Components",
          "signature": "ProgressMeter-\u003e[Progress]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:setComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjusts the width of this \u003ccode\u003e\u003ca\u003eProgressMeter\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "setWidth",
          "package": "MissingH",
          "signature": "ProgressMeter -\u003e Int -\u003e IO ()",
          "source": "src/Data-Progress-Meter.html#setWidth",
          "type": "function"
        },
        "index": {
          "description": "Adjusts the width of this ProgressMeter",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "setWidth",
          "normalized": "ProgressMeter-\u003eInt-\u003eIO()",
          "package": "MissingH",
          "partial": "Width",
          "signature": "ProgressMeter-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:setWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up a new status bar using defaults:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The given tracker\n\u003c/li\u003e\u003cli\u003e Width 80\n\u003c/li\u003e\u003cli\u003e Data.Quantity.renderNums binaryOpts 1\n\u003c/li\u003e\u003cli\u003e Unit inticator \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Progress.Meter",
          "name": "simpleNewMeter",
          "package": "MissingH",
          "signature": "Progress -\u003e IO ProgressMeter",
          "source": "src/Data-Progress-Meter.html#simpleNewMeter",
          "type": "function"
        },
        "index": {
          "description": "Set up new status bar using defaults The given tracker Width Data.Quantity.renderNums binaryOpts Unit inticator",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "simpleNewMeter",
          "normalized": "Progress-\u003eIO ProgressMeter",
          "package": "MissingH",
          "partial": "New Meter",
          "signature": "Progress-\u003eIO ProgressMeter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:simpleNewMeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears the meter, writes the given string, then restores the meter.\nThe string is assumed to contain a trailing newline.\n\u003c/p\u003e\u003cp\u003ePass stdout as the handle for regular display to the screen. \n\u003c/p\u003e",
          "module": "Data.Progress.Meter",
          "name": "writeMeterString",
          "package": "MissingH",
          "signature": "Handle -\u003e ProgressMeter -\u003e String -\u003e IO ()",
          "source": "src/Data-Progress-Meter.html#writeMeterString",
          "type": "function"
        },
        "index": {
          "description": "Clears the meter writes the given string then restores the meter The string is assumed to contain trailing newline Pass stdout as the handle for regular display to the screen",
          "hierarchy": "Data Progress Meter",
          "module": "Data.Progress.Meter",
          "name": "writeMeterString",
          "normalized": "Handle-\u003eProgressMeter-\u003eString-\u003eIO()",
          "package": "MissingH",
          "partial": "Meter String",
          "signature": "Handle-\u003eProgressMeter-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:writeMeterString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for tracking the status of a long operation.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org \n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eData.Progress.Meter\u003c/a\u003e \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Progress.Tracker",
          "name": "Tracker",
          "package": "MissingH",
          "source": "src/Data-Progress-Tracker.html",
          "type": "module"
        },
        "index": {
          "description": "Tools for tracking the status of long operation Written by John Goerzen jgoerzen@complete.org See also Data.Progress.Meter",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "Tracker",
          "package": "MissingH",
          "partial": "Tracker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main Progress object. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "Progress",
          "package": "MissingH",
          "source": "src/Data-Progress-Tracker.html#Progress",
          "type": "data"
        },
        "index": {
          "description": "The main Progress object",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "Progress",
          "package": "MissingH",
          "partial": "Progress",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for a callback function for the progress tracker.\nWhen given at creation time to 'newProgress\\'' or when added via \u003ccode\u003e\u003ca\u003eaddCallback\u003c/a\u003e\u003c/code\u003e,\nthese functions get called every time the status of the tracker changes.\n\u003c/p\u003e\u003cp\u003eThis function is passed two \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e records: the first\nreflects the status prior to the update, and the second reflects\nthe status after the update.\n\u003c/p\u003e\u003cp\u003ePlease note that the owning \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object will be locked while the\ncallback is running, so the callback will not be able to make changes to it. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "ProgressCallback",
          "package": "MissingH",
          "source": "src/Data-Progress-Tracker.html#ProgressCallback",
          "type": "type"
        },
        "index": {
          "description": "The type for callback function for the progress tracker When given at creation time to newProgress or when added via addCallback these functions get called every time the status of the tracker changes This function is passed two ProgressStatus records the first reflects the status prior to the update and the second reflects the status after the update Please note that the owning Progress object will be locked while the callback is running so the callback will not be able to make changes to it",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "ProgressCallback",
          "package": "MissingH",
          "partial": "Progress Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:ProgressCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main progress status record. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "ProgressStatus",
          "package": "MissingH",
          "source": "src/Data-Progress-Tracker.html#ProgressStatus",
          "type": "data"
        },
        "index": {
          "description": "The main progress status record",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "ProgressStatus",
          "package": "MissingH",
          "partial": "Progress Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:ProgressStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Progress.Tracker",
          "name": "ProgressStatuses",
          "package": "MissingH",
          "source": "src/Data-Progress-Tracker.html#ProgressStatuses",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "ProgressStatuses",
          "package": "MissingH",
          "partial": "Progress Statuses",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:ProgressStatuses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that, when called, yields the current time. \nThe default is \u003ccode\u003e\u003ca\u003edefaultTimeSource\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "ProgressTimeSource",
          "package": "MissingH",
          "source": "src/Data-Progress-Tracker.html#ProgressTimeSource",
          "type": "type"
        },
        "index": {
          "description": "function that when called yields the current time The default is defaultTimeSource",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "ProgressTimeSource",
          "package": "MissingH",
          "partial": "Progress Time Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:ProgressTimeSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Progress.Tracker",
          "name": "ProgressStatus",
          "package": "MissingH",
          "signature": "ProgressStatus",
          "source": "src/Data-Progress-Tracker.html#ProgressStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "ProgressStatus",
          "package": "MissingH",
          "partial": "Progress Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:ProgressStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an new callback to an existing \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e.  The callback will be\ncalled whenever the object's status is updated, except by the call to finishP.\n\u003c/p\u003e\u003cp\u003ePlease note that the Progress object will be locked while the callback is \nrunning, so the callback will not be able to make any modifications to it.\n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "addCallback",
          "package": "MissingH",
          "signature": "Progress -\u003e ProgressCallback -\u003e IO ()",
          "source": "src/Data-Progress-Tracker.html#addCallback",
          "type": "function"
        },
        "index": {
          "description": "Adds an new callback to an existing Progress The callback will be called whenever the object status is updated except by the call to finishP Please note that the Progress object will be locked while the callback is running so the callback will not be able to make any modifications to it",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "addCallback",
          "normalized": "Progress-\u003eProgressCallback-\u003eIO()",
          "package": "MissingH",
          "partial": "Callback",
          "signature": "Progress-\u003eProgressCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:addCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a new parent to an existing \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e.  The parent\nwill automatically have its completed and total counters incremented\nby the value of those counters in the existing \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "addParent",
          "package": "MissingH",
          "signature": "Progress-\u003e Progress-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Adds new parent to an existing Progress The parent will automatically have its completed and total counters incremented by the value of those counters in the existing Progress",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "addParent",
          "normalized": "Progress-\u003eProgress-\u003eIO()",
          "package": "MissingH",
          "partial": "Parent",
          "signature": "Progress-\u003eProgress-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:addParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Progress.Tracker",
          "name": "completedUnits",
          "package": "MissingH",
          "signature": "Integer",
          "source": "src/Data-Progress-Tracker.html#ProgressStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "completedUnits",
          "package": "MissingH",
          "partial": "Units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:completedUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default time source for the system.  This is defined as:\n\u003c/p\u003e\u003cpre\u003egetClockTime \u003e\u003e= (return . clockTimeToEpoch)\n\u003c/pre\u003e",
          "module": "Data.Progress.Tracker",
          "name": "defaultTimeSource",
          "package": "MissingH",
          "signature": "ProgressTimeSource",
          "source": "src/Data-Progress-Tracker.html#defaultTimeSource",
          "type": "function"
        },
        "index": {
          "description": "The default time source for the system This is defined as getClockTime return clockTimeToEpoch",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "defaultTimeSource",
          "package": "MissingH",
          "partial": "Time Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:defaultTimeSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall this when you are finished with the object.  It is especially\nimportant to do this when parent objects are involved.\n\u003c/p\u003e\u003cp\u003eThis will simply set the totalUnits to the current completedUnits count,\nbut will not call the callbacks.  It will additionally propogate\nany adjustment in totalUnits to the parents, whose callbacks \u003cem\u003ewill\u003c/em\u003e be\ncalled.\n\u003c/p\u003e\u003cp\u003eThis ensures that the total expected counts on the parent are always correct.\nWithout doing this, if, say, a transfer ended earlier than expected, ETA \nvalues on the parent would be off since it would be expecting more data than\nactually arrived. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "finishP",
          "package": "MissingH",
          "signature": "Progress -\u003e IO ()",
          "source": "src/Data-Progress-Tracker.html#finishP",
          "type": "function"
        },
        "index": {
          "description": "Call this when you are finished with the object It is especially important to do this when parent objects are involved This will simply set the totalUnits to the current completedUnits count but will not call the callbacks It will additionally propogate any adjustment in totalUnits to the parents whose callbacks will be called This ensures that the total expected counts on the parent are always correct Without doing this if say transfer ended earlier than expected ETA values on the parent would be off since it would be expecting more data than actually arrived",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "finishP",
          "normalized": "Progress-\u003eIO()",
          "package": "MissingH",
          "signature": "Progress-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:finishP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the estimated system clock time of completion, in standard\ntime units.  Returns the current time whenever \u003ccode\u003e\u003ca\u003egetETR\u003c/a\u003e\u003c/code\u003e would return 0.\n\u003c/p\u003e\u003cp\u003eSee the comments under \u003ccode\u003e\u003ca\u003egetSpeed\u003c/a\u003e\u003c/code\u003e for information about this function's type\nand result. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "getETA",
          "package": "MissingH",
          "signature": "a -\u003e IO Integer",
          "source": "src/Data-Progress-Tracker.html#getETA",
          "type": "function"
        },
        "index": {
          "description": "Returns the estimated system clock time of completion in standard time units Returns the current time whenever getETR would return See the comments under getSpeed for information about this function type and result",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "getETA",
          "normalized": "a-\u003eIO Integer",
          "package": "MissingH",
          "partial": "ETA",
          "signature": "a-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:getETA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the estimated time remaining, in standard time units. \n\u003c/p\u003e\u003cp\u003eReturns 0 whenever \u003ccode\u003e\u003ca\u003egetSpeed\u003c/a\u003e\u003c/code\u003e would return 0.\n\u003c/p\u003e\u003cp\u003eSee the comments under \u003ccode\u003e\u003ca\u003egetSpeed\u003c/a\u003e\u003c/code\u003e for information about this function's type\nand result. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "getETR",
          "package": "MissingH",
          "signature": "a -\u003e IO Integer",
          "source": "src/Data-Progress-Tracker.html#getETR",
          "type": "function"
        },
        "index": {
          "description": "Returns the estimated time remaining in standard time units Returns whenever getSpeed would return See the comments under getSpeed for information about this function type and result",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "getETR",
          "normalized": "a-\u003eIO Integer",
          "package": "MissingH",
          "partial": "ETR",
          "signature": "a-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:getETR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the speed in units processed per time unit.  (If you are\nusing the default time source, this would be units processed per second).\nThis obtains the current speed solely from analyzing the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eIf no time has elapsed yet, returns 0.\n\u003c/p\u003e\u003cp\u003eYou can use this against either a \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object or a \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e\nobject.  This is in the IO monad because the speed is based on the current\ntime.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e getSpeed progressobj \u003e\u003e= print\n\u003c/pre\u003e\u003cp\u003eDon't let the type of this function confuse you.  It is a fancy way of saying\nthat it can take either a \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e object, and returns\na number that is valid as any Fractional type, such as a Double, Float, or\nRational. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "getSpeed",
          "package": "MissingH",
          "signature": "a -\u003e IO b",
          "source": "src/Data-Progress-Tracker.html#getSpeed",
          "type": "function"
        },
        "index": {
          "description": "Returns the speed in units processed per time unit If you are using the default time source this would be units processed per second This obtains the current speed solely from analyzing the Progress object If no time has elapsed yet returns You can use this against either Progress object or ProgressStatus object This is in the IO monad because the speed is based on the current time Example getSpeed progressobj print Don let the type of this function confuse you It is fancy way of saying that it can take either Progress or ProgressStatus object and returns number that is valid as any Fractional type such as Double Float or Rational",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "getSpeed",
          "normalized": "a-\u003eIO b",
          "package": "MissingH",
          "partial": "Speed",
          "signature": "a-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:getSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the completed unit count in the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object\nby the amount given.  If the value as given exceeds the total, then\nthe total will also be raised to match this value so that the \ncompleted count never exceeds the total.\n\u003c/p\u003e\u003cp\u003eYou can decrease the completed unit count by supplying a negative number\nhere. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "incrP",
          "package": "MissingH",
          "signature": "Progress -\u003e Integer -\u003e IO ()",
          "source": "src/Data-Progress-Tracker.html#incrP",
          "type": "function"
        },
        "index": {
          "description": "Increment the completed unit count in the Progress object by the amount given If the value as given exceeds the total then the total will also be raised to match this value so that the completed count never exceeds the total You can decrease the completed unit count by supplying negative number here",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "incrP",
          "normalized": "Progress-\u003eInteger-\u003eIO()",
          "package": "MissingH",
          "signature": "Progress-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:incrP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eincrP\u003c/a\u003e\u003c/code\u003e, but never modify the total. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "incrP'",
          "package": "MissingH",
          "signature": "Progress -\u003e Integer -\u003e IO ()",
          "source": "src/Data-Progress-Tracker.html#incrP%27",
          "type": "function"
        },
        "index": {
          "description": "Like incrP but never modify the total",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "incrP'",
          "normalized": "Progress-\u003eInteger-\u003eIO()",
          "package": "MissingH",
          "partial": "P'",
          "signature": "Progress-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:incrP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the total unit count in the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object by the amount\ngiven.  This would rarely be needed, but could be needed in some special cases \nwhen the total number of units is not known in advance. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "incrTotal",
          "package": "MissingH",
          "signature": "Progress -\u003e Integer -\u003e IO ()",
          "source": "src/Data-Progress-Tracker.html#incrTotal",
          "type": "function"
        },
        "index": {
          "description": "Increment the total unit count in the Progress object by the amount given This would rarely be needed but could be needed in some special cases when the total number of units is not known in advance",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "incrTotal",
          "normalized": "Progress-\u003eInteger-\u003eIO()",
          "package": "MissingH",
          "partial": "Total",
          "signature": "Progress-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:incrTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object with the given name and number\nof total units initialized as given.  The start time will be initialized\nwith the current time at the present moment according to the system clock.\nThe units completed will be set to 0, the time source will be set to the\nsystem clock, and the parents and callbacks will be empty.\n\u003c/p\u003e\u003cp\u003eIf you need more control, see 'newProgress\\''.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e prog \u003c- newProgress \"mytracker\" 1024\n\u003c/pre\u003e",
          "module": "Data.Progress.Tracker",
          "name": "newProgress",
          "package": "MissingH",
          "signature": "String-\u003e Integer-\u003e IO Progress",
          "type": "function"
        },
        "index": {
          "description": "Create new Progress object with the given name and number of total units initialized as given The start time will be initialized with the current time at the present moment according to the system clock The units completed will be set to the time source will be set to the system clock and the parents and callbacks will be empty If you need more control see newProgress Example prog newProgress mytracker",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "newProgress",
          "normalized": "String-\u003eInteger-\u003eIO Progress",
          "package": "MissingH",
          "partial": "Progress",
          "signature": "String-\u003eInteger-\u003eIO Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:newProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object initialized with the given status and \ncallbacks.\nNo adjustment to the \u003ccode\u003e\u003ca\u003estartTime\u003c/a\u003e\u003c/code\u003e will be made.  If you\nwant to use the system clock, you can initialize \u003ccode\u003e\u003ca\u003estartTime\u003c/a\u003e\u003c/code\u003e with\nthe return value of \u003ccode\u003e\u003ca\u003edefaultTimeSource\u003c/a\u003e\u003c/code\u003e and also pass \u003ccode\u003e\u003ca\u003edefaultTimeSource\u003c/a\u003e\u003c/code\u003e\nas the timing source. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "newProgress'",
          "package": "MissingH",
          "signature": "ProgressStatus -\u003e [ProgressCallback] -\u003e IO Progress",
          "source": "src/Data-Progress-Tracker.html#newProgress%27",
          "type": "function"
        },
        "index": {
          "description": "Create new Progress object initialized with the given status and callbacks No adjustment to the startTime will be made If you want to use the system clock you can initialize startTime with the return value of defaultTimeSource and also pass defaultTimeSource as the timing source",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "newProgress'",
          "normalized": "ProgressStatus-\u003e[ProgressCallback]-\u003eIO Progress",
          "package": "MissingH",
          "partial": "Progress'",
          "signature": "ProgressStatus-\u003e[ProgressCallback]-\u003eIO Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:newProgress-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the completed unit count in the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object to the specified\nvalue.  Unlike \u003ccode\u003e\u003ca\u003eincrP\u003c/a\u003e\u003c/code\u003e, this function sets the count to a specific value,\nrather than adding to the existing value.  If this value exceeds the total,\nthen the total will also be raised to match this value so that the completed\ncount never exceeds teh total. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "setP",
          "package": "MissingH",
          "signature": "Progress -\u003e Integer -\u003e IO ()",
          "source": "src/Data-Progress-Tracker.html#setP",
          "type": "function"
        },
        "index": {
          "description": "Set the completed unit count in the Progress object to the specified value Unlike incrP this function sets the count to specific value rather than adding to the existing value If this value exceeds the total then the total will also be raised to match this value so that the completed count never exceeds teh total",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "setP",
          "normalized": "Progress-\u003eInteger-\u003eIO()",
          "package": "MissingH",
          "signature": "Progress-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:setP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetP\u003c/a\u003e\u003c/code\u003e, but never modify the total. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "setP'",
          "package": "MissingH",
          "signature": "Progress -\u003e Integer -\u003e IO ()",
          "source": "src/Data-Progress-Tracker.html#setP%27",
          "type": "function"
        },
        "index": {
          "description": "Like setP but never modify the total",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "setP'",
          "normalized": "Progress-\u003eInteger-\u003eIO()",
          "package": "MissingH",
          "partial": "P'",
          "signature": "Progress-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:setP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the total unit count in the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object to the specified\nvalue.  Like \u003ccode\u003e\u003ca\u003eincrTotal\u003c/a\u003e\u003c/code\u003e, this would rarely be needed. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "setTotal",
          "package": "MissingH",
          "signature": "Progress -\u003e Integer -\u003e IO ()",
          "source": "src/Data-Progress-Tracker.html#setTotal",
          "type": "function"
        },
        "index": {
          "description": "Set the total unit count in the Progress object to the specified value Like incrTotal this would rarely be needed",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "setTotal",
          "normalized": "Progress-\u003eInteger-\u003eIO()",
          "package": "MissingH",
          "partial": "Total",
          "signature": "Progress-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:setTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Progress.Tracker",
          "name": "startTime",
          "package": "MissingH",
          "signature": "Integer",
          "source": "src/Data-Progress-Tracker.html#ProgressStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "startTime",
          "package": "MissingH",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:startTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Progress.Tracker",
          "name": "timeSource",
          "package": "MissingH",
          "signature": "ProgressTimeSource",
          "source": "src/Data-Progress-Tracker.html#ProgressStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "timeSource",
          "package": "MissingH",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:timeSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Progress.Tracker",
          "name": "totalUnits",
          "package": "MissingH",
          "signature": "Integer",
          "source": "src/Data-Progress-Tracker.html#ProgressStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "totalUnits",
          "package": "MissingH",
          "partial": "Units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:totalUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifying string\n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "trackerName",
          "package": "MissingH",
          "signature": "String",
          "source": "src/Data-Progress-Tracker.html#ProgressStatus",
          "type": "function"
        },
        "index": {
          "description": "An identifying string",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "trackerName",
          "package": "MissingH",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:trackerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLets you examine the \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e that is contained \n       within a \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object.  You can simply pass\n       a \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object and a function to \u003ccode\u003e\u003ca\u003ewithStatus\u003c/a\u003e\u003c/code\u003e, and\n       \u003ccode\u003e\u003ca\u003ewithStatus\u003c/a\u003e\u003c/code\u003e will lock the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object (blocking any\n       modifications while you are reading it), then pass the object\n       to your function.  If you happen to already have a \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e\n       object, withStatus will also accept it and simply pass it unmodified\n       to the function. \n\u003c/p\u003e",
          "module": "Data.Progress.Tracker",
          "name": "withStatus",
          "package": "MissingH",
          "signature": "a -\u003e (ProgressStatus -\u003e b) -\u003e b",
          "source": "src/Data-Progress-Tracker.html#withStatus",
          "type": "method"
        },
        "index": {
          "description": "Lets you examine the ProgressStatus that is contained within Progress object You can simply pass Progress object and function to withStatus and withStatus will lock the Progress object blocking any modifications while you are reading it then pass the object to your function If you happen to already have ProgressStatus object withStatus will also accept it and simply pass it unmodified to the function",
          "hierarchy": "Data Progress Tracker",
          "module": "Data.Progress.Tracker",
          "name": "withStatus",
          "normalized": "a-\u003e(ProgressStatus-\u003eb)-\u003eb",
          "package": "MissingH",
          "partial": "Status",
          "signature": "a-\u003e(ProgressStatus-\u003eb)-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:withStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for rendering sizes\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Quantity",
          "name": "Quantity",
          "package": "MissingH",
          "source": "src/Data-Quantity.html",
          "type": "module"
        },
        "index": {
          "description": "Tools for rendering sizes Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "Quantity",
          "package": "MissingH",
          "partial": "Quantity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe options for \u003ccode\u003e\u003ca\u003equantifyNum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "SizeOpts",
          "package": "MissingH",
          "source": "src/Data-Quantity.html#SizeOpts",
          "type": "data"
        },
        "index": {
          "description": "The options for quantifyNum and renderNum",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "SizeOpts",
          "package": "MissingH",
          "partial": "Size Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#t:SizeOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Quantity",
          "name": "SizeOpts",
          "package": "MissingH",
          "signature": "SizeOpts",
          "source": "src/Data-Quantity.html#SizeOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "SizeOpts",
          "package": "MissingH",
          "partial": "Size Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:SizeOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base from which calculations are made\n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "base",
          "package": "MissingH",
          "signature": "Int",
          "source": "src/Data-Quantity.html#SizeOpts",
          "type": "function"
        },
        "index": {
          "description": "The base from which calculations are made",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "base",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredefined definitions for byte measurement in groups of 1024, from 0 to\n2**80 \n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "binaryOpts",
          "package": "MissingH",
          "signature": "SizeOpts",
          "source": "src/Data-Quantity.html#binaryOpts",
          "type": "function"
        },
        "index": {
          "description": "Predefined definitions for byte measurement in groups of from to",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "binaryOpts",
          "package": "MissingH",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:binaryOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first power for which suffixes are given\n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "firstPower",
          "package": "MissingH",
          "signature": "Int",
          "source": "src/Data-Quantity.html#SizeOpts",
          "type": "function"
        },
        "index": {
          "description": "The first power for which suffixes are given",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "firstPower",
          "package": "MissingH",
          "partial": "Power",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:firstPower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a String, possibly generated by \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e.  Parses the suffix\nand applies it to the number, which is read via the Read class.\n\u003c/p\u003e\u003cp\u003eReturns Left \u003ca\u003eerror message\u003c/a\u003e on error, or Right number on successful parse.\n\u003c/p\u003e\u003cp\u003eIf you want an Integral result, the convenience function \u003ccode\u003e\u003ca\u003eparseNumInt\u003c/a\u003e\u003c/code\u003e is for\nyou.\n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "parseNum",
          "package": "MissingH",
          "signature": "SizeOpts-\u003e Bool-\u003e String-\u003e Either String a",
          "type": "function"
        },
        "index": {
          "description": "Parses String possibly generated by renderNum Parses the suffix and applies it to the number which is read via the Read class Returns Left error message on error or Right number on successful parse If you want an Integral result the convenience function parseNumInt is for you",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "parseNum",
          "normalized": "SizeOpts-\u003eBool-\u003eString-\u003eEither String a",
          "package": "MissingH",
          "partial": "Num",
          "signature": "SizeOpts-\u003eBool-\u003eString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:parseNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a number as with \u003ccode\u003e\u003ca\u003eparseNum\u003c/a\u003e\u003c/code\u003e, but return the result as\nan \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e.  Any type such as Integer, Int, etc. can be used for the\nresult type.\n\u003c/p\u003e\u003cp\u003eThis function simply calls \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e on the result of \u003ccode\u003e\u003ca\u003eparseNum\u003c/a\u003e\u003c/code\u003e.  A\n\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e is used internally for the parsing of the numeric component.\n\u003c/p\u003e\u003cp\u003eBy using this function, a user can still say something like 1.5M and get an\nintegral result. \n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "parseNumInt",
          "package": "MissingH",
          "signature": "SizeOpts-\u003e Bool-\u003e String-\u003e Either String a",
          "type": "function"
        },
        "index": {
          "description": "Parse number as with parseNum but return the result as an Integral Any type such as Integer Int etc can be used for the result type This function simply calls round on the result of parseNum Double is used internally for the parsing of the numeric component By using this function user can still say something like and get an integral result",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "parseNumInt",
          "normalized": "SizeOpts-\u003eBool-\u003eString-\u003eEither String a",
          "package": "MissingH",
          "partial": "Num Int",
          "signature": "SizeOpts-\u003eBool-\u003eString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:parseNumInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe increment to the power for each new suffix\n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "powerIncr",
          "package": "MissingH",
          "signature": "Int",
          "source": "src/Data-Quantity.html#SizeOpts",
          "type": "function"
        },
        "index": {
          "description": "The increment to the power for each new suffix",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "powerIncr",
          "package": "MissingH",
          "partial": "Incr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:powerIncr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a number and returns a new (quantity, suffix) combination.\nThe space character is used as the suffix for items around 0. \n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "quantifyNum",
          "package": "MissingH",
          "signature": "SizeOpts -\u003e a -\u003e (b, Char)",
          "source": "src/Data-Quantity.html#quantifyNum",
          "type": "function"
        },
        "index": {
          "description": "Takes number and returns new quantity suffix combination The space character is used as the suffix for items around",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "quantifyNum",
          "normalized": "SizeOpts-\u003ea-\u003e(b,Char)",
          "package": "MissingH",
          "partial": "Num",
          "signature": "SizeOpts-\u003ea-\u003e(b,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:quantifyNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equantifyNum\u003c/a\u003e\u003c/code\u003e, but takes a list of numbers.  The first number in\nthe list will be evaluated for the suffix.  The same suffix and scale will\nbe used for the remaining items in the list.  Please see \u003ccode\u003e\u003ca\u003erenderNums\u003c/a\u003e\u003c/code\u003e for\nan example of how this works.\n\u003c/p\u003e\u003cp\u003eIt is invalid to use this function on an empty list. \n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "quantifyNums",
          "package": "MissingH",
          "signature": "SizeOpts -\u003e [a] -\u003e ([b], Char)",
          "source": "src/Data-Quantity.html#quantifyNums",
          "type": "function"
        },
        "index": {
          "description": "Like quantifyNum but takes list of numbers The first number in the list will be evaluated for the suffix The same suffix and scale will be used for the remaining items in the list Please see renderNums for an example of how this works It is invalid to use this function on an empty list",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "quantifyNums",
          "normalized": "SizeOpts-\u003e[a]-\u003e([b],Char)",
          "package": "MissingH",
          "partial": "Nums",
          "signature": "SizeOpts-\u003e[a]-\u003e([b],Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:quantifyNums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a number into a string, based on the given quantities.  This is\nuseful for displaying quantities in terms of bytes or in SI units.  Give this\nfunction the \u003ccode\u003e\u003ca\u003eSizeOpts\u003c/a\u003e\u003c/code\u003e for the desired output, and a precision (number of\ndigits to the right of the decimal point), and you get a string output.\n\u003c/p\u003e\u003cp\u003eHere are some examples:\n\u003c/p\u003e\u003cpre\u003e Data.Quantity\u003e renderNum binaryOpts 0 1048576\n \"1M\"\n Data.Quantity\u003e renderNum binaryOpts 2 10485760\n \"10.00M\"\n Data.Quantity\u003e renderNum binaryOpts 3 1048576\n \"1.000M\"\n Data.Quantity\u003e renderNum binaryOpts 3 1500000\n \"1.431M\"\n Data.Quantity\u003e renderNum binaryOpts 2 (1500 ** 3)\n \"3.14G\"\n\u003c/pre\u003e\u003cpre\u003e Data.Quantity\u003e renderNum siOpts 2 1024\n \"1.02k\"\n Data.Quantity\u003e renderNum siOpts 2 1048576\n \"1.05M\"\n Data.Quantity\u003e renderNum siOpts 2 0.001\n \"1.00m\"\n Data.Quantity\u003e renderNum siOpts 2 0.0001\n \"100.00u\"\n\u003c/pre\u003e\u003cp\u003eIf you want more control over the output, see \u003ccode\u003e\u003ca\u003equantifyNum\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "renderNum",
          "package": "MissingH",
          "signature": "SizeOpts-\u003e Int-\u003e a-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Render number into string based on the given quantities This is useful for displaying quantities in terms of bytes or in SI units Give this function the SizeOpts for the desired output and precision number of digits to the right of the decimal point and you get string output Here are some examples Data.Quantity renderNum binaryOpts Data.Quantity renderNum binaryOpts Data.Quantity renderNum binaryOpts Data.Quantity renderNum binaryOpts Data.Quantity renderNum binaryOpts Data.Quantity renderNum siOpts Data.Quantity renderNum siOpts Data.Quantity renderNum siOpts Data.Quantity renderNum siOpts If you want more control over the output see quantifyNum",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "renderNum",
          "normalized": "SizeOpts-\u003eInt-\u003ea-\u003eString",
          "package": "MissingH",
          "partial": "Num",
          "signature": "SizeOpts-\u003eInt-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:renderNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e, but operates on a list of numbers.  The first number\nin the list will be evaluated for the suffix.  The same suffix and scale will\nbe used for the remaining items in the list.  See \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e for more\nexamples.\n\u003c/p\u003e\u003cp\u003eAlso, unlike \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e, the %f instead of %g printf format is used so that\n\"scientific\" notation is avoided in the output.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e *Data.Quantity\u003e renderNums binaryOpts 3 [1500000, 10240, 104857600]\n [\"1.431M\",\"0.010M\",\"100.000M\"]\n *Data.Quantity\u003e renderNums binaryOpts 3 [1500, 10240, 104857600]\n [\"1.465K\",\"10.000K\",\"102400.000K\"]\n\u003c/pre\u003e",
          "module": "Data.Quantity",
          "name": "renderNums",
          "package": "MissingH",
          "signature": "SizeOpts-\u003e Int-\u003e [a]-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Like renderNum but operates on list of numbers The first number in the list will be evaluated for the suffix The same suffix and scale will be used for the remaining items in the list See renderNum for more examples Also unlike renderNum the instead of printf format is used so that scientific notation is avoided in the output Examples Data.Quantity renderNums binaryOpts Data.Quantity renderNums binaryOpts",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "renderNums",
          "normalized": "SizeOpts-\u003eInt-\u003e[a]-\u003e[String]",
          "package": "MissingH",
          "partial": "Nums",
          "signature": "SizeOpts-\u003eInt-\u003e[a]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:renderNums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredefined definitions for SI measurement, from 10**-24 to 10**24. \n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "siOpts",
          "package": "MissingH",
          "signature": "SizeOpts",
          "source": "src/Data-Quantity.html#siOpts",
          "type": "function"
        },
        "index": {
          "description": "Predefined definitions for SI measurement from to",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "siOpts",
          "package": "MissingH",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:siOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe suffixes themselves\n\u003c/p\u003e",
          "module": "Data.Quantity",
          "name": "suffixes",
          "package": "MissingH",
          "signature": "String",
          "source": "src/Data-Quantity.html#SizeOpts",
          "type": "function"
        },
        "index": {
          "description": "The suffixes themselves",
          "hierarchy": "Data Quantity",
          "module": "Data.Quantity",
          "name": "suffixes",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:suffixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with strings.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.String.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Data-String-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with strings Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data String Utils",
          "module": "Data.String.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape all characters in the input pattern that are not alphanumeric.\n\u003c/p\u003e\u003cp\u003eDoes not make special allowances for NULL, which isn't valid in a\nHaskell regular expression pattern. \n\u003c/p\u003e",
          "module": "Data.String.Utils",
          "name": "escapeRe",
          "package": "MissingH",
          "signature": "String -\u003e String",
          "source": "src/Data-String-Utils.html#escapeRe",
          "type": "function"
        },
        "index": {
          "description": "Escape all characters in the input pattern that are not alphanumeric Does not make special allowances for NULL which isn valid in Haskell regular expression pattern",
          "hierarchy": "Data String Utils",
          "module": "Data.String.Utils",
          "name": "escapeRe",
          "normalized": "String-\u003eString",
          "package": "MissingH",
          "partial": "Re",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:escapeRe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estrip\u003c/a\u003e\u003c/code\u003e, but applies only to the left side of the string.\n\u003c/p\u003e",
          "module": "Data.String.Utils",
          "name": "lstrip",
          "package": "MissingH",
          "signature": "String -\u003e String",
          "source": "src/Data-String-Utils.html#lstrip",
          "type": "function"
        },
        "index": {
          "description": "Same as strip but applies only to the left side of the string",
          "hierarchy": "Data String Utils",
          "module": "Data.String.Utils",
          "name": "lstrip",
          "normalized": "String-\u003eString",
          "package": "MissingH",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:lstrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to parse a value from the front of the string.\n\u003c/p\u003e",
          "module": "Data.String.Utils",
          "name": "maybeRead",
          "package": "MissingH",
          "signature": "String -\u003e Maybe a",
          "source": "src/Data-String-Utils.html#maybeRead",
          "type": "function"
        },
        "index": {
          "description": "Attempts to parse value from the front of the string",
          "hierarchy": "Data String Utils",
          "module": "Data.String.Utils",
          "name": "maybeRead",
          "normalized": "String-\u003eMaybe a",
          "package": "MissingH",
          "partial": "Read",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:maybeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estrip\u003c/a\u003e\u003c/code\u003e, but applies only to the right side of the string.\n\u003c/p\u003e",
          "module": "Data.String.Utils",
          "name": "rstrip",
          "package": "MissingH",
          "signature": "String -\u003e String",
          "source": "src/Data-String-Utils.html#rstrip",
          "type": "function"
        },
        "index": {
          "description": "Same as strip but applies only to the right side of the string",
          "hierarchy": "Data String Utils",
          "module": "Data.String.Utils",
          "name": "rstrip",
          "normalized": "String-\u003eString",
          "package": "MissingH",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:rstrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a string around whitespace.  Empty elements in the result\nlist are automatically removed. \n\u003c/p\u003e",
          "module": "Data.String.Utils",
          "name": "splitWs",
          "package": "MissingH",
          "signature": "String -\u003e [String]",
          "source": "src/Data-String-Utils.html#splitWs",
          "type": "function"
        },
        "index": {
          "description": "Splits string around whitespace Empty elements in the result list are automatically removed",
          "hierarchy": "Data String Utils",
          "module": "Data.String.Utils",
          "name": "splitWs",
          "normalized": "String-\u003e[String]",
          "package": "MissingH",
          "partial": "Ws",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:splitWs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves any whitespace characters that are present at the start\nor end of a string. Does not alter the internal contents of a\nstring. If no whitespace characters are present at the start or end\nof a string, returns the original string unmodified. Safe to use on\nany string.\n\u003c/p\u003e\u003cp\u003eNote that this may differ from some other similar\nfunctions from other authors in that:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e If multiple whitespace\ncharacters are present all in a row, they are all removed;\n\u003c/li\u003e\u003cli\u003e If no\nwhitespace characters are present, nothing is done.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.String.Utils",
          "name": "strip",
          "package": "MissingH",
          "signature": "String -\u003e String",
          "source": "src/Data-String-Utils.html#strip",
          "type": "function"
        },
        "index": {
          "description": "Removes any whitespace characters that are present at the start or end of string Does not alter the internal contents of string If no whitespace characters are present at the start or end of string returns the original string unmodified Safe to use on any string Note that this may differ from some other similar functions from other authors in that If multiple whitespace characters are present all in row they are all removed If no whitespace characters are present nothing is done",
          "hierarchy": "Data String Utils",
          "module": "Data.String.Utils",
          "name": "strip",
          "normalized": "String-\u003eString",
          "package": "MissingH",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:strip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with lists.\n\u003c/p\u003e\u003cp\u003eWritten by Neil Mitchell, \u003ca\u003ehttp://www.cs.york.ac.uk/~ndm/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tuple.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Data-Tuple-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with lists Written by Neil Mitchell http www.cs.york.ac.uk ndm",
          "hierarchy": "Data Tuple Utils",
          "module": "Data.Tuple.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Tuple-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the first item out of a 3 element tuple\n\u003c/p\u003e",
          "module": "Data.Tuple.Utils",
          "name": "fst3",
          "package": "MissingH",
          "signature": "(a, b, c) -\u003e a",
          "source": "src/Data-Tuple-Utils.html#fst3",
          "type": "function"
        },
        "index": {
          "description": "Take the first item out of element tuple",
          "hierarchy": "Data Tuple Utils",
          "module": "Data.Tuple.Utils",
          "name": "fst3",
          "normalized": "(a,b,c)-\u003ea",
          "package": "MissingH",
          "signature": "(a,b,c)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Tuple-Utils.html#v:fst3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the second item out of a 3 element tuple\n\u003c/p\u003e",
          "module": "Data.Tuple.Utils",
          "name": "snd3",
          "package": "MissingH",
          "signature": "(a, b, c) -\u003e b",
          "source": "src/Data-Tuple-Utils.html#snd3",
          "type": "function"
        },
        "index": {
          "description": "Take the second item out of element tuple",
          "hierarchy": "Data Tuple Utils",
          "module": "Data.Tuple.Utils",
          "name": "snd3",
          "normalized": "(a,b,c)-\u003eb",
          "package": "MissingH",
          "signature": "(a,b,c)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Tuple-Utils.html#v:snd3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the third item out of a 3 element tuple\n\u003c/p\u003e",
          "module": "Data.Tuple.Utils",
          "name": "thd3",
          "package": "MissingH",
          "signature": "(a, b, c) -\u003e c",
          "source": "src/Data-Tuple-Utils.html#thd3",
          "type": "function"
        },
        "index": {
          "description": "Take the third item out of element tuple",
          "hierarchy": "Data Tuple Utils",
          "module": "Data.Tuple.Utils",
          "name": "thd3",
          "normalized": "(a,b,c)-\u003ec",
          "package": "MissingH",
          "signature": "(a,b,c)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Tuple-Utils.html#v:thd3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral support for e-mail mailboxes\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Email.Mailbox",
          "name": "Mailbox",
          "package": "MissingH",
          "source": "src/Network-Email-Mailbox.html",
          "type": "module"
        },
        "index": {
          "description": "General support for e-mail mailboxes Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "Mailbox",
          "package": "MissingH",
          "partial": "Mailbox",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe flags which may be assigned to a message. \n\u003c/p\u003e",
          "module": "Network.Email.Mailbox",
          "name": "Flag",
          "package": "MissingH",
          "source": "src/Network-Email-Mailbox.html#Flag",
          "type": "data"
        },
        "index": {
          "description": "The flags which may be assigned to message",
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "Flag",
          "package": "MissingH",
          "partial": "Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience shortcut \n\u003c/p\u003e",
          "module": "Network.Email.Mailbox",
          "name": "Flags",
          "package": "MissingH",
          "source": "src/Network-Email-Mailbox.html#Flags",
          "type": "type"
        },
        "index": {
          "description": "Convenience shortcut",
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "Flags",
          "package": "MissingH",
          "partial": "Flags",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain class for readable mailboxes. \n\u003c/p\u003e\u003cp\u003eThe mailbox object \u003cem\u003ea\u003c/em\u003e represents zero or more \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003es.  Each message\nhas a unique identifier \u003cem\u003eb\u003c/em\u003e in a format specific to each given mailbox.\nThis identifier may or may not be persistent.\n\u003c/p\u003e\u003cp\u003eFunctions which return a list are encouraged -- but not guaranteed -- to\ndo so lazily.\n\u003c/p\u003e\u003cp\u003eImplementing classes must provide, at minimum, \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Email.Mailbox",
          "name": "MailboxReader",
          "package": "MissingH",
          "source": "src/Network-Email-Mailbox.html#MailboxReader",
          "type": "class"
        },
        "index": {
          "description": "Main class for readable mailboxes The mailbox object represents zero or more Message Each message has unique identifier in format specific to each given mailbox This identifier may or may not be persistent Functions which return list are encouraged but not guaranteed to do so lazily Implementing classes must provide at minimum getAll",
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "MailboxReader",
          "package": "MissingH",
          "partial": "Mailbox Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:MailboxReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "MailboxWriter",
          "package": "MissingH",
          "source": "src/Network-Email-Mailbox.html#MailboxWriter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "MailboxWriter",
          "package": "MissingH",
          "partial": "Mailbox Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:MailboxWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Message is represented as a simple String. \n\u003c/p\u003e",
          "module": "Network.Email.Mailbox",
          "name": "Message",
          "package": "MissingH",
          "source": "src/Network-Email-Mailbox.html#Message",
          "type": "type"
        },
        "index": {
          "description": "Message is represented as simple String",
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "Message",
          "package": "MissingH",
          "partial": "Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "ANSWERED",
          "package": "MissingH",
          "signature": "ANSWERED",
          "source": "src/Network-Email-Mailbox.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "ANSWERED",
          "package": "MissingH",
          "partial": "ANSWERED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:ANSWERED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "DELETED",
          "package": "MissingH",
          "signature": "DELETED",
          "source": "src/Network-Email-Mailbox.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "DELETED",
          "package": "MissingH",
          "partial": "DELETED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:DELETED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "DRAFT",
          "package": "MissingH",
          "signature": "DRAFT",
          "source": "src/Network-Email-Mailbox.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "DRAFT",
          "package": "MissingH",
          "partial": "DRAFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:DRAFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "FLAGGED",
          "package": "MissingH",
          "signature": "FLAGGED",
          "source": "src/Network-Email-Mailbox.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "FLAGGED",
          "package": "MissingH",
          "partial": "FLAGGED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:FLAGGED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "FORWARDED",
          "package": "MissingH",
          "signature": "FORWARDED",
          "source": "src/Network-Email-Mailbox.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "FORWARDED",
          "package": "MissingH",
          "partial": "FORWARDED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:FORWARDED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "OTHERFLAG",
          "package": "MissingH",
          "signature": "OTHERFLAG String",
          "source": "src/Network-Email-Mailbox.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "OTHERFLAG",
          "package": "MissingH",
          "partial": "OTHERFLAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:OTHERFLAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "SEEN",
          "package": "MissingH",
          "signature": "SEEN",
          "source": "src/Network-Email-Mailbox.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "SEEN",
          "package": "MissingH",
          "partial": "SEEN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:SEEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "addFlags",
          "package": "MissingH",
          "signature": "a -\u003e [b] -\u003e Flags -\u003e IO ()",
          "source": "src/Network-Email-Mailbox.html#addFlags",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "addFlags",
          "normalized": "a-\u003e[b]-\u003eFlags-\u003eIO()",
          "package": "MissingH",
          "partial": "Flags",
          "signature": "a-\u003e[b]-\u003eFlags-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:addFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "appendMessages",
          "package": "MissingH",
          "signature": "a -\u003e [(Flags, Message)] -\u003e IO [b]",
          "source": "src/Network-Email-Mailbox.html#appendMessages",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "appendMessages",
          "normalized": "a-\u003e[(Flags,Message)]-\u003eIO[b]",
          "package": "MissingH",
          "partial": "Messages",
          "signature": "a-\u003e[(Flags,Message)]-\u003eIO[b]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:appendMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "deleteMessages",
          "package": "MissingH",
          "signature": "a -\u003e [b] -\u003e IO ()",
          "source": "src/Network-Email-Mailbox.html#deleteMessages",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "deleteMessages",
          "normalized": "a-\u003e[b]-\u003eIO()",
          "package": "MissingH",
          "partial": "Messages",
          "signature": "a-\u003e[b]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:deleteMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all messages, including their content,\n       flags, and unique identifiers. \n\u003c/p\u003e",
          "module": "Network.Email.Mailbox",
          "name": "getAll",
          "package": "MissingH",
          "signature": "a -\u003e IO [(b, Flags, Message)]",
          "source": "src/Network-Email-Mailbox.html#getAll",
          "type": "method"
        },
        "index": {
          "description": "Returns list of all messages including their content flags and unique identifiers",
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "getAll",
          "normalized": "a-\u003eIO[(b,Flags,Message)]",
          "package": "MissingH",
          "partial": "All",
          "signature": "a-\u003eIO[(b,Flags,Message)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:getAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns information about specific messages. \n\u003c/p\u003e",
          "module": "Network.Email.Mailbox",
          "name": "getMessages",
          "package": "MissingH",
          "signature": "a -\u003e [b] -\u003e IO [(b, Flags, Message)]",
          "source": "src/Network-Email-Mailbox.html#getMessages",
          "type": "method"
        },
        "index": {
          "description": "Returns information about specific messages",
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "getMessages",
          "normalized": "a-\u003e[b]-\u003eIO[(b,Flags,Message)]",
          "package": "MissingH",
          "partial": "Messages",
          "signature": "a-\u003e[b]-\u003eIO[(b,Flags,Message)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:getMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all unique identifiers. \n\u003c/p\u003e",
          "module": "Network.Email.Mailbox",
          "name": "listIDs",
          "package": "MissingH",
          "signature": "a -\u003e IO [b]",
          "source": "src/Network-Email-Mailbox.html#listIDs",
          "type": "method"
        },
        "index": {
          "description": "Returns list of all unique identifiers",
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "listIDs",
          "normalized": "a-\u003eIO[b]",
          "package": "MissingH",
          "partial": "IDs",
          "signature": "a-\u003eIO[b]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:listIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all unique identifiers as well as all flags. \n\u003c/p\u003e",
          "module": "Network.Email.Mailbox",
          "name": "listMessageFlags",
          "package": "MissingH",
          "signature": "a -\u003e IO [(b, Flags)]",
          "source": "src/Network-Email-Mailbox.html#listMessageFlags",
          "type": "method"
        },
        "index": {
          "description": "Returns list of all unique identifiers as well as all flags",
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "listMessageFlags",
          "normalized": "a-\u003eIO[(b,Flags)]",
          "package": "MissingH",
          "partial": "Message Flags",
          "signature": "a-\u003eIO[(b,Flags)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:listMessageFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "removeFlags",
          "package": "MissingH",
          "signature": "a -\u003e [b] -\u003e Flags -\u003e IO ()",
          "source": "src/Network-Email-Mailbox.html#removeFlags",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "removeFlags",
          "normalized": "a-\u003e[b]-\u003eFlags-\u003eIO()",
          "package": "MissingH",
          "partial": "Flags",
          "signature": "a-\u003e[b]-\u003eFlags-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:removeFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Mailbox",
          "name": "setFlags",
          "package": "MissingH",
          "signature": "a -\u003e [b] -\u003e Flags -\u003e IO ()",
          "source": "src/Network-Email-Mailbox.html#setFlags",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Email Mailbox",
          "module": "Network.Email.Mailbox",
          "name": "setFlags",
          "normalized": "a-\u003e[b]-\u003eFlags-\u003eIO()",
          "package": "MissingH",
          "partial": "Flags",
          "signature": "a-\u003e[b]-\u003eFlags-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:setFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell module provides an interface to transmitting a mail message.\n\u003c/p\u003e\u003cp\u003eThis is not compatible with Windows at this time.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Email.Sendmail",
          "name": "Sendmail",
          "package": "MissingH",
          "source": "src/Network-Email-Sendmail.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell module provides an interface to transmitting mail message This is not compatible with Windows at this time Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Network Email Sendmail",
          "module": "Network.Email.Sendmail",
          "name": "Sendmail",
          "package": "MissingH",
          "partial": "Sendmail",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Sendmail.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransmits an e-mail message using the system's mail transport agent.\n\u003c/p\u003e\u003cp\u003eThis function takes a message, a list of recipients, and an optional sender,\nand transmits it using the system's MTA, sendmail.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003esendmail\u003c/code\u003e is on the \u003ccode\u003ePATH\u003c/code\u003e, it will be used; otherwise, a list of system\ndefault locations will be searched.\n\u003c/p\u003e\u003cp\u003eA failure will be logged, since this function uses \u003ccode\u003e\u003ca\u003esafeSystem\u003c/a\u003e\u003c/code\u003e\ninternally.\n\u003c/p\u003e\u003cp\u003eThis function will first try \u003ccode\u003esendmail\u003c/code\u003e.  If it does not exist, an error is\nlogged under \u003ccode\u003eSystem.Cmd.Utils.pOpen3\u003c/code\u003e and various default \u003ccode\u003esendmail\u003c/code\u003e locations\nare tried.  If that still fails, an error is logged and an exception raised.\n\u003c/p\u003e",
          "module": "Network.Email.Sendmail",
          "name": "sendmail",
          "package": "MissingH",
          "signature": "Maybe String-\u003e [String]-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Transmits an e-mail message using the system mail transport agent This function takes message list of recipients and an optional sender and transmits it using the system MTA sendmail If sendmail is on the PATH it will be used otherwise list of system default locations will be searched failure will be logged since this function uses safeSystem internally This function will first try sendmail If it does not exist an error is logged under System.Cmd.Utils.pOpen3 and various default sendmail locations are tried If that still fails an error is logged and an exception raised",
          "hierarchy": "Network Email Sendmail",
          "module": "Network.Email.Sendmail",
          "name": "sendmail",
          "normalized": "Maybe String-\u003e[String]-\u003eString-\u003eIO()",
          "package": "MissingH",
          "signature": "Maybe String-\u003e[String]-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Sendmail.html#v:sendmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an infrastructure to simplify server design.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003ePlease note: this module is designed to work with TCP, UDP, and Unix domain\nsockets, but only TCP sockets have been tested to date.\n\u003c/p\u003e\u003cp\u003eThis module is presently under-documented.  For an example of usage, please\nsee the description of \u003ca\u003eNetwork.FTP.Server\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SocketServer",
          "name": "SocketServer",
          "package": "MissingH",
          "source": "src/Network-SocketServer.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides an infrastructure to simplify server design Written by John Goerzen jgoerzen@complete.org Please note this module is designed to work with TCP UDP and Unix domain sockets but only TCP sockets have been tested to date This module is presently under-documented For an example of usage please see the description of Network.FTP.Server",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "SocketServer",
          "package": "MissingH",
          "partial": "Socket Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main handler type.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the socket itself.\n\u003c/p\u003e\u003cp\u003eThe second is the address of the remote endpoint.\n\u003c/p\u003e\u003cp\u003eThe third is the address of the local endpoint.\n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "HandlerT",
          "package": "MissingH",
          "source": "src/Network-SocketServer.html#HandlerT",
          "type": "type"
        },
        "index": {
          "description": "The main handler type The first parameter is the socket itself The second is the address of the remote endpoint The third is the address of the local endpoint",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "HandlerT",
          "package": "MissingH",
          "partial": "Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#t:HandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for your server. \n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "InetServerOptions",
          "package": "MissingH",
          "source": "src/Network-SocketServer.html#InetServerOptions",
          "type": "data"
        },
        "index": {
          "description": "Options for your server",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "InetServerOptions",
          "package": "MissingH",
          "partial": "Inet Server Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#t:InetServerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "SocketServer",
          "package": "MissingH",
          "source": "src/Network-SocketServer.html#SocketServer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "SocketServer",
          "package": "MissingH",
          "partial": "Socket Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#t:SocketServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "InetServerOptions",
          "package": "MissingH",
          "signature": "InetServerOptions",
          "source": "src/Network-SocketServer.html#InetServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "InetServerOptions",
          "package": "MissingH",
          "partial": "Inet Server Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:InetServerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "SocketServer",
          "package": "MissingH",
          "signature": "SocketServer",
          "source": "src/Network-SocketServer.html#SocketServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "SocketServer",
          "package": "MissingH",
          "partial": "Socket Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:SocketServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the socket server.  Does not terminate active\nhandlers, if any. \n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "closeSocketServer",
          "package": "MissingH",
          "signature": "SocketServer -\u003e IO ()",
          "source": "src/Network-SocketServer.html#closeSocketServer",
          "type": "function"
        },
        "index": {
          "description": "Close the socket server Does not terminate active handlers if any",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "closeSocketServer",
          "normalized": "SocketServer-\u003eIO()",
          "package": "MissingH",
          "partial": "Socket Server",
          "signature": "SocketServer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:closeSocketServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "family",
          "package": "MissingH",
          "signature": "Family",
          "source": "src/Network-SocketServer.html#InetServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "family",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive your handler function a Handle instead of a Socket.\n\u003c/p\u003e\u003cp\u003eThe Handle will be opened with ReadWriteMode (you use one handle for both\ndirections of the Socket).  Also, it will be initialized with LineBuffering.\n\u003c/p\u003e\u003cp\u003eUnlike other handlers, the handle will be closed when the function returns.\nTherefore, if you are doing threading, you should to it before you call this\nhandler.\n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "handleHandler",
          "package": "MissingH",
          "signature": "(Handle -\u003e SockAddr -\u003e SockAddr -\u003e IO ())-\u003e HandlerT",
          "type": "function"
        },
        "index": {
          "description": "Give your handler function Handle instead of Socket The Handle will be opened with ReadWriteMode you use one handle for both directions of the Socket Also it will be initialized with LineBuffering Unlike other handlers the handle will be closed when the function returns Therefore if you are doing threading you should to it before you call this handler",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "handleHandler",
          "normalized": "(Handle-\u003eSockAddr-\u003eSockAddr-\u003eIO())-\u003eHandlerT",
          "package": "MissingH",
          "partial": "Handler",
          "signature": "(Handle-\u003eSockAddr-\u003eSockAddr-\u003eIO())-\u003eHandlerT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:handleHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle one incoming request from the given \u003ccode\u003e\u003ca\u003eSocketServer\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "handleOne",
          "package": "MissingH",
          "signature": "SocketServer -\u003e HandlerT -\u003e IO ()",
          "source": "src/Network-SocketServer.html#handleOne",
          "type": "function"
        },
        "index": {
          "description": "Handle one incoming request from the given SocketServer",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "handleOne",
          "normalized": "SocketServer-\u003eHandlerT-\u003eIO()",
          "package": "MissingH",
          "partial": "One",
          "signature": "SocketServer-\u003eHandlerT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:handleOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "interface",
          "package": "MissingH",
          "signature": "HostAddress",
          "source": "src/Network-SocketServer.html#InetServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "interface",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "listenQueueSize",
          "package": "MissingH",
          "signature": "Int",
          "source": "src/Network-SocketServer.html#InetServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "listenQueueSize",
          "package": "MissingH",
          "partial": "Queue Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:listenQueueSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog each incoming connection using the interface in\n\u003ca\u003eSystem.Log.Logger\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eLog when the incoming connection disconnects.\n\u003c/p\u003e\u003cp\u003eAlso, log any failures that may occur in the child handler. \n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "loggingHandler",
          "package": "MissingH",
          "signature": "String-\u003e Priority-\u003e HandlerT-\u003e HandlerT",
          "type": "function"
        },
        "index": {
          "description": "Log each incoming connection using the interface in System.Log.Logger Log when the incoming connection disconnects Also log any failures that may occur in the child handler",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "loggingHandler",
          "normalized": "String-\u003ePriority-\u003eHandlerT-\u003eHandlerT",
          "package": "MissingH",
          "partial": "Handler",
          "signature": "String-\u003ePriority-\u003eHandlerT-\u003eHandlerT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:loggingHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "optionsSS",
          "package": "MissingH",
          "signature": "InetServerOptions",
          "source": "src/Network-SocketServer.html#SocketServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "optionsSS",
          "package": "MissingH",
          "partial": "SS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:optionsSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "portNumber",
          "package": "MissingH",
          "signature": "PortNumber",
          "source": "src/Network-SocketServer.html#InetServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "portNumber",
          "package": "MissingH",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:portNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "protoStr",
          "package": "MissingH",
          "signature": "String",
          "source": "src/Network-SocketServer.html#InetServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "protoStr",
          "package": "MissingH",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:protoStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "reuse",
          "package": "MissingH",
          "signature": "Bool",
          "source": "src/Network-SocketServer.html#InetServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "reuse",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:reuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle all incoming requests from the given \u003ccode\u003e\u003ca\u003eSocketServer\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "serveForever",
          "package": "MissingH",
          "signature": "SocketServer -\u003e HandlerT -\u003e IO ()",
          "source": "src/Network-SocketServer.html#serveForever",
          "type": "function"
        },
        "index": {
          "description": "Handle all incoming requests from the given SocketServer",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "serveForever",
          "normalized": "SocketServer-\u003eHandlerT-\u003eIO()",
          "package": "MissingH",
          "partial": "Forever",
          "signature": "SocketServer-\u003eHandlerT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:serveForever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to completely set up a TCP\n\u003ccode\u003e\u003ca\u003eSocketServer\u003c/a\u003e\u003c/code\u003e and handle all incoming requests.\n\u003c/p\u003e\u003cp\u003eThis function is literally this:\n\u003c/p\u003e\u003cpre\u003eserveTCPforever options func =\n    do sockserv \u003c- setupSocketServer options\n       serveForever sockserv func\n\u003c/pre\u003e",
          "module": "Network.SocketServer",
          "name": "serveTCPforever",
          "package": "MissingH",
          "signature": "InetServerOptions-\u003e HandlerT-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Convenience function to completely set up TCP SocketServer and handle all incoming requests This function is literally this serveTCPforever options func do sockserv setupSocketServer options serveForever sockserv func",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "serveTCPforever",
          "normalized": "InetServerOptions-\u003eHandlerT-\u003eIO()",
          "package": "MissingH",
          "partial": "TCPforever",
          "signature": "InetServerOptions-\u003eHandlerT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:serveTCPforever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes some options and sets up the \u003ccode\u003e\u003ca\u003eSocketServer\u003c/a\u003e\u003c/code\u003e.  I will bind\nand begin listening, but will not accept any connections itself. \n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "setupSocketServer",
          "package": "MissingH",
          "signature": "InetServerOptions -\u003e IO SocketServer",
          "source": "src/Network-SocketServer.html#setupSocketServer",
          "type": "function"
        },
        "index": {
          "description": "Takes some options and sets up the SocketServer will bind and begin listening but will not accept any connections itself",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "setupSocketServer",
          "normalized": "InetServerOptions-\u003eIO SocketServer",
          "package": "MissingH",
          "partial": "Socket Server",
          "signature": "InetServerOptions-\u003eIO SocketServer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:setupSocketServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Default options.  You can always modify it later. \n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "simpleTCPOptions",
          "package": "MissingH",
          "signature": "Int-\u003e InetServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Get Default options You can always modify it later",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "simpleTCPOptions",
          "normalized": "Int-\u003eInetServerOptions",
          "package": "MissingH",
          "partial": "TCPOptions",
          "signature": "Int-\u003eInetServerOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:simpleTCPOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "sockSS",
          "package": "MissingH",
          "signature": "Socket",
          "source": "src/Network-SocketServer.html#SocketServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "sockSS",
          "package": "MissingH",
          "partial": "SS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:sockSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SocketServer",
          "name": "sockType",
          "package": "MissingH",
          "signature": "SocketType",
          "source": "src/Network-SocketServer.html#InetServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "sockType",
          "package": "MissingH",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:sockType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle each incoming connection in its own thread to\n make the server multi-tasking.\n\u003c/p\u003e",
          "module": "Network.SocketServer",
          "name": "threadedHandler",
          "package": "MissingH",
          "signature": "HandlerT-\u003e HandlerT",
          "type": "function"
        },
        "index": {
          "description": "Handle each incoming connection in its own thread to make the server multi-tasking",
          "hierarchy": "Network SocketServer",
          "module": "Network.SocketServer",
          "name": "threadedHandler",
          "normalized": "HandlerT-\u003eHandlerT",
          "package": "MissingH",
          "partial": "Handler",
          "signature": "HandlerT-\u003eHandlerT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:threadedHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with networking\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Network-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with networking Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Network Utils",
          "module": "Network.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Utils",
          "name": "connectTCP",
          "package": "MissingH",
          "signature": "HostName -\u003e PortNumber -\u003e IO Socket",
          "source": "src/Network-Utils.html#connectTCP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Utils",
          "module": "Network.Utils",
          "name": "connectTCP",
          "normalized": "HostName-\u003ePortNumber-\u003eIO Socket",
          "package": "MissingH",
          "partial": "TCP",
          "signature": "HostName-\u003ePortNumber-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:connectTCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Utils",
          "name": "connectTCPAddr",
          "package": "MissingH",
          "signature": "SockAddr -\u003e IO Socket",
          "source": "src/Network-Utils.html#connectTCPAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Utils",
          "module": "Network.Utils",
          "name": "connectTCPAddr",
          "normalized": "SockAddr-\u003eIO Socket",
          "package": "MissingH",
          "partial": "TCPAddr",
          "signature": "SockAddr-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:connectTCPAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Utils",
          "name": "listenTCPAddr",
          "package": "MissingH",
          "signature": "SockAddr -\u003e Int -\u003e IO Socket",
          "source": "src/Network-Utils.html#listenTCPAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Utils",
          "module": "Network.Utils",
          "name": "listenTCPAddr",
          "normalized": "SockAddr-\u003eInt-\u003eIO Socket",
          "package": "MissingH",
          "partial": "TCPAddr",
          "signature": "SockAddr-\u003eInt-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:listenTCPAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets up the system for networking.  Similar to the built-in\nwithSocketsDo (and actually, calls it), but also sets the SIGPIPE\nhandler so that signal is ignored.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e main = niceSocketsDo $ do { ... }\n\u003c/pre\u003e",
          "module": "Network.Utils",
          "name": "niceSocketsDo",
          "package": "MissingH",
          "signature": "IO a -\u003e IO a",
          "source": "src/Network-Utils.html#niceSocketsDo",
          "type": "function"
        },
        "index": {
          "description": "Sets up the system for networking Similar to the built-in withSocketsDo and actually calls it but also sets the SIGPIPE handler so that signal is ignored Example main niceSocketsDo do",
          "hierarchy": "Network Utils",
          "module": "Network.Utils",
          "name": "niceSocketsDo",
          "normalized": "IO a-\u003eIO a",
          "package": "MissingH",
          "partial": "Sockets Do",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:niceSocketsDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Utils",
          "name": "showSockAddr",
          "package": "MissingH",
          "signature": "SockAddr -\u003e IO String",
          "source": "src/Network-Utils.html#showSockAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Utils",
          "module": "Network.Utils",
          "name": "showSockAddr",
          "normalized": "SockAddr-\u003eIO String",
          "package": "MissingH",
          "partial": "Sock Addr",
          "signature": "SockAddr-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:showSockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommand invocation utilities.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003ePlease note: Most of this module is not compatible with Hugs.\n\u003c/p\u003e\u003cp\u003eCommand lines executed will be logged using \u003ca\u003eSystem.Log.Logger\u003c/a\u003e at the\nDEBUG level.  Failure messages will be logged at the WARNING level in addition\nto being raised as an exception.  Both are logged under\n\"System.Cmd.Utils.funcname\" -- for instance,\n\"System.Cmd.Utils.safeSystem\".  If you wish to suppress these messages\nglobally, you can simply run:\n\u003c/p\u003e\u003cpre\u003e updateGlobalLogger \"System.Cmd.Utils.safeSystem\"\n                     (setLevel CRITICAL)\n\u003c/pre\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003eupdateGlobalLogger\u003c/a\u003e\u003c/code\u003e,\n\u003ca\u003eSystem.Log.Logger\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIt is possible to set up pipelines with these utilities.  Example:\n\u003c/p\u003e\u003cpre\u003e (pid1, x1) \u003c- pipeFrom \"ls\" [\"/etc\"]\n (pid2, x2) \u003c- pipeBoth \"grep\" [\"x\"] x1\n putStr x2\n ... the grep output is displayed ...\n forceSuccess pid2\n forceSuccess pid1\n\u003c/pre\u003e\u003cp\u003eRemember, when you use the functions that return a String, you must not call\n\u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e until after all data from the String has been consumed.  Failure\nto wait will cause your program to appear to hang.\n\u003c/p\u003e\u003cp\u003eHere is an example of the wrong way to do it:\n\u003c/p\u003e\u003cpre\u003e (pid, x) \u003c- pipeFrom \"ls\" [\"/etc\"]\n forceSuccess pid         -- Hangs; the called program hasn't terminated yet\n processTheData x\n\u003c/pre\u003e\u003cp\u003eYou must instead process the data before calling \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen using the hPipe family of functions, this is probably more obvious.\n\u003c/p\u003e\u003cp\u003eMost of this module will be incompatible with Windows.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Cmd.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/System-Cmd-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Command invocation utilities Written by John Goerzen jgoerzen@complete.org Please note Most of this module is not compatible with Hugs Command lines executed will be logged using System.Log.Logger at the DEBUG level Failure messages will be logged at the WARNING level in addition to being raised as an exception Both are logged under System.Cmd.Utils.funcname for instance System.Cmd.Utils.safeSystem If you wish to suppress these messages globally you can simply run updateGlobalLogger System.Cmd.Utils.safeSystem setLevel CRITICAL See also updateGlobalLogger System.Log.Logger It is possible to set up pipelines with these utilities Example pid1 x1 pipeFrom ls etc pid2 x2 pipeBoth grep x1 putStr x2 the grep output is displayed forceSuccess pid2 forceSuccess pid1 Remember when you use the functions that return String you must not call forceSuccess until after all data from the String has been consumed Failure to wait will cause your program to appear to hang Here is an example of the wrong way to do it pid pipeFrom ls etc forceSuccess pid Hangs the called program hasn terminated yet processTheData You must instead process the data before calling forceSuccess When using the hPipe family of functions this is probably more obvious Most of this module will be incompatible with Windows",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn value from \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipeLinesFrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipeTo\u003c/a\u003e\u003c/code\u003e, or\n\u003ccode\u003e\u003ca\u003epipeBoth\u003c/a\u003e\u003c/code\u003e.  Contains both a ProcessID and the original command that was\nexecuted.  If you prefer not to use \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e on the result of one\nof these pipe calls, you can use (processID ph), assuming ph is your \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e,\nas a parameter to \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "PipeHandle",
          "package": "MissingH",
          "source": "src/System-Cmd-Utils.html#PipeHandle",
          "type": "data"
        },
        "index": {
          "description": "Return value from pipeFrom pipeLinesFrom pipeTo or pipeBoth Contains both ProcessID and the original command that was executed If you prefer not to use forceSuccess on the result of one of these pipe calls you can use processID ph assuming ph is your PipeHandle as parameter to getProcessStatus",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "PipeHandle",
          "package": "MissingH",
          "partial": "Pipe Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#t:PipeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cmd.Utils",
          "name": "PipeMode",
          "package": "MissingH",
          "source": "src/System-Cmd-Utils.html#PipeMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "PipeMode",
          "package": "MissingH",
          "partial": "Pipe Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#t:PipeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cmd.Utils",
          "name": "PipeHandle",
          "package": "MissingH",
          "signature": "PipeHandle",
          "source": "src/System-Cmd-Utils.html#PipeHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "PipeHandle",
          "package": "MissingH",
          "partial": "Pipe Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:PipeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cmd.Utils",
          "name": "ReadFromPipe",
          "package": "MissingH",
          "signature": "ReadFromPipe",
          "source": "src/System-Cmd-Utils.html#PipeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "ReadFromPipe",
          "package": "MissingH",
          "partial": "Read From Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:ReadFromPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cmd.Utils",
          "name": "WriteToPipe",
          "package": "MissingH",
          "signature": "WriteToPipe",
          "source": "src/System-Cmd-Utils.html#PipeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "WriteToPipe",
          "package": "MissingH",
          "partial": "Write To Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:WriteToPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e to obtain the exit status\nof the given process ID.  If the process terminated normally, does nothing.\nOtherwise, raises an exception with an appropriate error message.\n\u003c/p\u003e\u003cp\u003eThis call will block waiting for the given pid to terminate.\n\u003c/p\u003e\u003cp\u003eNot available on Windows. \n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "forceSuccess",
          "package": "MissingH",
          "signature": "PipeHandle -\u003e IO ()",
          "source": "src/System-Cmd-Utils.html#forceSuccess",
          "type": "function"
        },
        "index": {
          "description": "Uses getProcessStatus to obtain the exit status of the given process ID If the process terminated normally does nothing Otherwise raises an exception with an appropriate error message This call will block waiting for the given pid to terminate Not available on Windows",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "forceSuccess",
          "normalized": "PipeHandle-\u003eIO()",
          "package": "MissingH",
          "partial": "Success",
          "signature": "PipeHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:forceSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvokes the specified command in a subprocess, without waiting for\nthe result.  Returns the PID of the subprocess -- it is YOUR responsibility\nto use getProcessStatus or getAnyProcessStatus on that at some point.  Failure\nto do so will lead to resource leakage (zombie processes).\n\u003c/p\u003e\u003cp\u003eThis function does nothing with signals.  That too is up to you.\n\u003c/p\u003e\u003cp\u003eLogs as System.Cmd.Utils.forkRawSystem \n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "forkRawSystem",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e IO ProcessID",
          "source": "src/System-Cmd-Utils.html#forkRawSystem",
          "type": "function"
        },
        "index": {
          "description": "Invokes the specified command in subprocess without waiting for the result Returns the PID of the subprocess it is YOUR responsibility to use getProcessStatus or getAnyProcessStatus on that at some point Failure to do so will lead to resource leakage zombie processes This function does nothing with signals That too is up to you Logs as System.Cmd.Utils.forkRawSystem",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "forkRawSystem",
          "normalized": "FilePath-\u003e[String]-\u003eIO ProcessID",
          "package": "MissingH",
          "partial": "Raw System",
          "signature": "FilePath-\u003e[String]-\u003eIO ProcessID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:forkRawSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike a combination of \u003ccode\u003e\u003ca\u003ehPipeTo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehPipeFrom\u003c/a\u003e\u003c/code\u003e; returns\na 3-tuple of (\u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e, Data From Pipe, Data To Pipe).\n\u003c/p\u003e\u003cp\u003eWhen done, you must hClose both handles, and then use either \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e or\ngetProcessStatus on the \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.  Zombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eHint: you will usually need to ForkIO a thread to handle one of the Handles;\notherwise, deadlock can result.\n\u003c/p\u003e\u003cp\u003eThis function logs as pipeBoth.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "hPipeBoth",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, Handle, Handle)",
          "source": "src/System-Cmd-Utils.html#hPipeBoth",
          "type": "function"
        },
        "index": {
          "description": "Like combination of hPipeTo and hPipeFrom returns tuple of PipeHandle Data From Pipe Data To Pipe When done you must hClose both handles and then use either forceSuccess or getProcessStatus on the PipeHandle Zombies will result otherwise Hint you will usually need to ForkIO thread to handle one of the Handles otherwise deadlock can result This function logs as pipeBoth Not available on Windows",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "hPipeBoth",
          "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle,Handle)",
          "package": "MissingH",
          "partial": "Pipe Both",
          "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:hPipeBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead data from a pipe.  Returns a Handle and a \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen done, you must hClose the handle, and then use either \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e or\ngetProcessStatus on the \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.  Zombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eThis function logs as pipeFrom.\n\u003c/p\u003e\u003cp\u003eNot available on Windows or with Hugs.\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "hPipeFrom",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, Handle)",
          "source": "src/System-Cmd-Utils.html#hPipeFrom",
          "type": "function"
        },
        "index": {
          "description": "Read data from pipe Returns Handle and PipeHandle When done you must hClose the handle and then use either forceSuccess or getProcessStatus on the PipeHandle Zombies will result otherwise This function logs as pipeFrom Not available on Windows or with Hugs",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "hPipeFrom",
          "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle)",
          "package": "MissingH",
          "partial": "Pipe From",
          "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:hPipeFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data to a pipe.  Returns a \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e and a new Handle to write\nto.\n\u003c/p\u003e\u003cp\u003eWhen done, you must hClose the handle, and then use either \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e or\ngetProcessStatus on the \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.  Zombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eThis function logs as pipeTo.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "hPipeTo",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, Handle)",
          "source": "src/System-Cmd-Utils.html#hPipeTo",
          "type": "function"
        },
        "index": {
          "description": "Write data to pipe Returns PipeHandle and new Handle to write to When done you must hClose the handle and then use either forceSuccess or getProcessStatus on the PipeHandle Zombies will result otherwise This function logs as pipeTo Not available on Windows",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "hPipeTo",
          "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle)",
          "package": "MissingH",
          "partial": "Pipe To",
          "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:hPipeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a pipe to the specified command.\n\u003c/p\u003e\u003cp\u003ePasses the handle on to the specified function.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePipeMode\u003c/a\u003e\u003c/code\u003e specifies what you will be doing.  That is, specifing \u003ccode\u003e\u003ca\u003eReadFromPipe\u003c/a\u003e\u003c/code\u003e\nsets up a pipe from stdin, and \u003ccode\u003e\u003ca\u003eWriteToPipe\u003c/a\u003e\u003c/code\u003e sets up a pipe from stdout.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "pOpen",
          "package": "MissingH",
          "signature": "PipeMode -\u003e FilePath -\u003e [String] -\u003e (Handle -\u003e IO a) -\u003e IO a",
          "source": "src/System-Cmd-Utils.html#pOpen",
          "type": "function"
        },
        "index": {
          "description": "Open pipe to the specified command Passes the handle on to the specified function The PipeMode specifies what you will be doing That is specifing ReadFromPipe sets up pipe from stdin and WriteToPipe sets up pipe from stdout Not available on Windows",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "pOpen",
          "normalized": "PipeMode-\u003eFilePath-\u003e[String]-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "MissingH",
          "partial": "Open",
          "signature": "PipeMode-\u003eFilePath-\u003e[String]-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a command, redirecting things to pipes.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e\u003cp\u003eNote that you may not use the same fd on more than one item.  If you\nwant to redirect stdout and stderr, dup it first.\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "pOpen3",
          "package": "MissingH",
          "signature": "Maybe Fd-\u003e Maybe Fd-\u003e Maybe Fd-\u003e FilePath-\u003e [String]-\u003e (ProcessID -\u003e IO a)-\u003e IO ()-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Runs command redirecting things to pipes Not available on Windows Note that you may not use the same fd on more than one item If you want to redirect stdout and stderr dup it first",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "pOpen3",
          "normalized": "Maybe Fd-\u003eMaybe Fd-\u003eMaybe Fd-\u003eFilePath-\u003e[String]-\u003e(ProcessID-\u003eIO a)-\u003eIO()-\u003eIO a",
          "package": "MissingH",
          "partial": "Open",
          "signature": "Maybe Fd-\u003eMaybe Fd-\u003eMaybe Fd-\u003eFilePath-\u003e[String]-\u003e(ProcessID-\u003eIO a)-\u003eIO()-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pOpen3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a command, redirecting things to pipes.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e\u003cp\u003eReturns immediately with the PID of the child.  Using \u003ccode\u003ewaitProcess\u003c/code\u003e on it\nis YOUR responsibility!\n\u003c/p\u003e\u003cp\u003eNote that you may not use the same fd on more than one item.  If you\nwant to redirect stdout and stderr, dup it first.\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "pOpen3Raw",
          "package": "MissingH",
          "signature": "Maybe Fd-\u003e Maybe Fd-\u003e Maybe Fd-\u003e FilePath-\u003e [String]-\u003e IO ()-\u003e IO ProcessID",
          "type": "function"
        },
        "index": {
          "description": "Runs command redirecting things to pipes Not available on Windows Returns immediately with the PID of the child Using waitProcess on it is YOUR responsibility Note that you may not use the same fd on more than one item If you want to redirect stdout and stderr dup it first",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "pOpen3Raw",
          "normalized": "Maybe Fd-\u003eMaybe Fd-\u003eMaybe Fd-\u003eFilePath-\u003e[String]-\u003eIO()-\u003eIO ProcessID",
          "package": "MissingH",
          "partial": "Open Raw",
          "signature": "Maybe Fd-\u003eMaybe Fd-\u003eMaybe Fd-\u003eFilePath-\u003e[String]-\u003eIO()-\u003eIO ProcessID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pOpen3Raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cmd.Utils",
          "name": "phArgs",
          "package": "MissingH",
          "signature": "[String]",
          "source": "src/System-Cmd-Utils.html#PipeHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "phArgs",
          "normalized": "[String]",
          "package": "MissingH",
          "partial": "Args",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:phArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cmd.Utils",
          "name": "phCommand",
          "package": "MissingH",
          "signature": "FilePath",
          "source": "src/System-Cmd-Utils.html#PipeHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "phCommand",
          "package": "MissingH",
          "partial": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:phCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that created it\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "phCreator",
          "package": "MissingH",
          "signature": "String",
          "source": "src/System-Cmd-Utils.html#PipeHandle",
          "type": "function"
        },
        "index": {
          "description": "Function that created it",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "phCreator",
          "package": "MissingH",
          "partial": "Creator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:phCreator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike a combination of \u003ccode\u003e\u003ca\u003epipeTo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e; forks an IO thread\nto send data to the piped program, and simultaneously returns its output\nstream.\n\u003c/p\u003e\u003cp\u003eThe same note about checking the return status applies here as with \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNot available on Windows. \n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "pipeBoth",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e String -\u003e IO (PipeHandle, String)",
          "source": "src/System-Cmd-Utils.html#pipeBoth",
          "type": "function"
        },
        "index": {
          "description": "Like combination of pipeTo and pipeFrom forks an IO thread to send data to the piped program and simultaneously returns its output stream The same note about checking the return status applies here as with pipeFrom Not available on Windows",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "pipeBoth",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO(PipeHandle,String)",
          "package": "MissingH",
          "partial": "Both",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO(PipeHandle,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pipeBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead data from a pipe.  Returns a lazy string and a \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eONLY AFTER the string has been read completely, You must call either\n\u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.\nZombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "pipeFrom",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, String)",
          "source": "src/System-Cmd-Utils.html#pipeFrom",
          "type": "function"
        },
        "index": {
          "description": "Read data from pipe Returns lazy string and PipeHandle ONLY AFTER the string has been read completely You must call either getProcessStatus or forceSuccess on the PipeHandle Zombies will result otherwise Not available on Windows",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "pipeFrom",
          "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,String)",
          "package": "MissingH",
          "partial": "From",
          "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pipeFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e, but returns data in lines instead of just a String.\nShortcut for calling lines on the result from \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: this function logs as pipeFrom.\n\u003c/p\u003e\u003cp\u003eNot available on Windows. \n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "pipeLinesFrom",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, [String])",
          "source": "src/System-Cmd-Utils.html#pipeLinesFrom",
          "type": "function"
        },
        "index": {
          "description": "Like pipeFrom but returns data in lines instead of just String Shortcut for calling lines on the result from pipeFrom Note this function logs as pipeFrom Not available on Windows",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "pipeLinesFrom",
          "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,[String])",
          "package": "MissingH",
          "partial": "Lines From",
          "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pipeLinesFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data to a pipe.  Returns a ProcessID.\n\u003c/p\u003e\u003cp\u003eYou must call either\n\u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e on the ProcessID.\nZombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "pipeTo",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e String -\u003e IO PipeHandle",
          "source": "src/System-Cmd-Utils.html#pipeTo",
          "type": "function"
        },
        "index": {
          "description": "Write data to pipe Returns ProcessID You must call either getProcessStatus or forceSuccess on the ProcessID Zombies will result otherwise Not available on Windows",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "pipeTo",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO PipeHandle",
          "package": "MissingH",
          "partial": "To",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO PipeHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pipeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvokes the specified command in a subprocess, waiting for the result.\nReturn the result status.  Never raises an exception.  Only available\non POSIX platforms.\n\u003c/p\u003e\u003cp\u003eLike system(3), this command ignores SIGINT and SIGQUIT and blocks SIGCHLD\nduring its execution.\n\u003c/p\u003e\u003cp\u003eLogs as System.Cmd.Utils.posixRawSystem \n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "posixRawSystem",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e IO ProcessStatus",
          "source": "src/System-Cmd-Utils.html#posixRawSystem",
          "type": "function"
        },
        "index": {
          "description": "Invokes the specified command in subprocess waiting for the result Return the result status Never raises an exception Only available on POSIX platforms Like system this command ignores SIGINT and SIGQUIT and blocks SIGCHLD during its execution Logs as System.Cmd.Utils.posixRawSystem",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "posixRawSystem",
          "normalized": "FilePath-\u003e[String]-\u003eIO ProcessStatus",
          "package": "MissingH",
          "partial": "Raw System",
          "signature": "FilePath-\u003e[String]-\u003eIO ProcessStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:posixRawSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cmd.Utils",
          "name": "processID",
          "package": "MissingH",
          "signature": "ProcessID",
          "source": "src/System-Cmd-Utils.html#PipeHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "processID",
          "package": "MissingH",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:processID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvokes the specified command in a subprocess, waiting for the result.\nIf the command terminated successfully, return normally.  Otherwise,\nraises a userError with the problem.\n\u003c/p\u003e\u003cp\u003eImplemented in terms of \u003ccode\u003e\u003ca\u003eposixRawSystem\u003c/a\u003e\u003c/code\u003e where supported, and System.Posix.rawSystem otherwise.\n\u003c/p\u003e",
          "module": "System.Cmd.Utils",
          "name": "safeSystem",
          "package": "MissingH",
          "signature": "FilePath -\u003e [String] -\u003e IO ()",
          "source": "src/System-Cmd-Utils.html#safeSystem",
          "type": "function"
        },
        "index": {
          "description": "Invokes the specified command in subprocess waiting for the result If the command terminated successfully return normally Otherwise raises userError with the problem Implemented in terms of posixRawSystem where supported and System.Posix.rawSystem otherwise",
          "hierarchy": "System Cmd Utils",
          "module": "System.Cmd.Utils",
          "name": "safeSystem",
          "normalized": "FilePath-\u003e[String]-\u003eIO()",
          "package": "MissingH",
          "partial": "System",
          "signature": "FilePath-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:safeSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eUtilities for command-line parsing, including wrappers around\nthe standard System.Console.GetOpt module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.GetOpt.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/System-Console-GetOpt-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Written by John Goerzen jgoerzen@complete.org Utilities for command-line parsing including wrappers around the standard System.Console.GetOpt module",
          "hierarchy": "System Console GetOpt Utils",
          "module": "System.Console.GetOpt.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type to standardize some common uses of GetOpt.\n\u003c/p\u003e\u003cp\u003eThe first component of the tuple is the long name of the option.\n\u003c/p\u003e\u003cp\u003eThe second component is empty if there is no arg, or has the arg otherwise. \n\u003c/p\u003e",
          "module": "System.Console.GetOpt.Utils",
          "name": "StdOption",
          "package": "MissingH",
          "source": "src/System-Console-GetOpt-Utils.html#StdOption",
          "type": "type"
        },
        "index": {
          "description": "type to standardize some common uses of GetOpt The first component of the tuple is the long name of the option The second component is empty if there is no arg or has the arg otherwise",
          "hierarchy": "System Console GetOpt Utils",
          "module": "System.Console.GetOpt.Utils",
          "name": "StdOption",
          "package": "MissingH",
          "partial": "Std Option",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#t:StdOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple command line parser -- a basic wrapper around the system's\ndefault getOpt.  See the System.Console.GetOpt manual for a description of the\nfirst two parameters.\n\u003c/p\u003e\u003cp\u003eThe third parameter is a usage information header.\n\u003c/p\u003e\u003cp\u003eThe return value consists of the list of parsed flags and a list of\nnon-option arguments. \n\u003c/p\u003e",
          "module": "System.Console.GetOpt.Utils",
          "name": "parseCmdLine",
          "package": "MissingH",
          "signature": "ArgOrder a -\u003e [OptDescr a] -\u003e String -\u003e IO ([a], [String])",
          "source": "src/System-Console-GetOpt-Utils.html#parseCmdLine",
          "type": "function"
        },
        "index": {
          "description": "Simple command line parser basic wrapper around the system default getOpt See the System.Console.GetOpt manual for description of the first two parameters The third parameter is usage information header The return value consists of the list of parsed flags and list of non-option arguments",
          "hierarchy": "System Console GetOpt Utils",
          "module": "System.Console.GetOpt.Utils",
          "name": "parseCmdLine",
          "normalized": "ArgOrder a-\u003e[OptDescr a]-\u003eString-\u003eIO([a],[String])",
          "package": "MissingH",
          "partial": "Cmd Line",
          "signature": "ArgOrder a-\u003e[OptDescr a]-\u003eString-\u003eIO([a],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#v:parseCmdLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle an optional argument. \n\u003c/p\u003e",
          "module": "System.Console.GetOpt.Utils",
          "name": "stdOptional",
          "package": "MissingH",
          "signature": "String-\u003e Maybe String-\u003e StdOption",
          "type": "function"
        },
        "index": {
          "description": "Handle an optional argument",
          "hierarchy": "System Console GetOpt Utils",
          "module": "System.Console.GetOpt.Utils",
          "name": "stdOptional",
          "normalized": "String-\u003eMaybe String-\u003eStdOption",
          "package": "MissingH",
          "partial": "Optional",
          "signature": "String-\u003eMaybe String-\u003eStdOption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#v:stdOptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a required argument. \n\u003c/p\u003e",
          "module": "System.Console.GetOpt.Utils",
          "name": "stdRequired",
          "package": "MissingH",
          "signature": "String-\u003e String-\u003e StdOption",
          "type": "function"
        },
        "index": {
          "description": "Handle required argument",
          "hierarchy": "System Console GetOpt Utils",
          "module": "System.Console.GetOpt.Utils",
          "name": "stdRequired",
          "normalized": "String-\u003eString-\u003eStdOption",
          "package": "MissingH",
          "partial": "Required",
          "signature": "String-\u003eString-\u003eStdOption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#v:stdRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eparseCmdLine\u003c/a\u003e\u003c/code\u003e, but takes an additional function that validates\nthe post-parse command-line arguments.  This is useful, for example, in\nsituations where there are two arguments that are mutually-exclusive and only\none may legitimately be given at a time.\n\u003c/p\u003e\u003cp\u003eThe return value of the function indicates whether or not it detected an\nerror condition.  If it returns Nothing, there is no error.  If it returns\nJust String, there was an error, described by the String.\n\u003c/p\u003e",
          "module": "System.Console.GetOpt.Utils",
          "name": "validateCmdLine",
          "package": "MissingH",
          "signature": "ArgOrder a -\u003e [OptDescr a] -\u003e String -\u003e (([a], [String]) -\u003e Maybe String) -\u003e IO ([a], [String])",
          "source": "src/System-Console-GetOpt-Utils.html#validateCmdLine",
          "type": "function"
        },
        "index": {
          "description": "Similar to parseCmdLine but takes an additional function that validates the post-parse command-line arguments This is useful for example in situations where there are two arguments that are mutually-exclusive and only one may legitimately be given at time The return value of the function indicates whether or not it detected an error condition If it returns Nothing there is no error If it returns Just String there was an error described by the String",
          "hierarchy": "System Console GetOpt Utils",
          "module": "System.Console.GetOpt.Utils",
          "name": "validateCmdLine",
          "normalized": "ArgOrder a-\u003e[OptDescr a]-\u003eString-\u003e(([a],[String])-\u003eMaybe String)-\u003eIO([a],[String])",
          "package": "MissingH",
          "partial": "Cmd Line",
          "signature": "ArgOrder a-\u003e[OptDescr a]-\u003eString-\u003e(([a],[String])-\u003eMaybe String)-\u003eIO([a],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#v:validateCmdLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for writing daemons/server processes\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003ePlease note: Most of this module is not compatible with Hugs.\n\u003c/p\u003e\u003cp\u003eMessages from this module are logged under \u003ccode\u003eSystem.Daemon\u003c/code\u003e.  See\n\u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eBased on background\nfrom \u003ca\u003ehttp://www.erlenstar.demon.co.uk/unix/faq_2.html#SEC16\u003c/a\u003e and\n\u003ca\u003ehttp://www.haskell.org/hawiki/HaskellUnixDaemon\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is not available on Windows.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Daemon",
          "name": "Daemon",
          "package": "MissingH",
          "source": "src/System-Daemon.html",
          "type": "module"
        },
        "index": {
          "description": "Tools for writing daemons server processes Written by John Goerzen jgoerzen@complete.org Please note Most of this module is not compatible with Hugs Messages from this module are logged under System.Daemon See Logger for details Based on background from http www.erlenstar.demon.co.uk unix faq html SEC16 and http www.haskell.org hawiki HaskellUnixDaemon This module is not available on Windows",
          "hierarchy": "System Daemon",
          "module": "System.Daemon",
          "name": "Daemon",
          "package": "MissingH",
          "partial": "Daemon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Daemon.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetach the process from a controlling terminal and run it in the\nbackground, handling it with standard Unix deamon semantics.\n\u003c/p\u003e\u003cp\u003eAfter running this, please note the following side-effects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The PID of the running process will change\n\u003c/li\u003e\u003cli\u003e stdin, stdout, and stderr will not work (they'll be set to\n   /dev/null)\n\u003c/li\u003e\u003cli\u003e CWD will be changed to /\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eI \u003cem\u003ehighly\u003c/em\u003e suggest running this function before starting any threads.\n\u003c/p\u003e\u003cp\u003eNote that this is not intended for a daemon invoked from inetd(1).\n\u003c/p\u003e",
          "module": "System.Daemon",
          "name": "detachDaemon",
          "package": "MissingH",
          "signature": "IO ()",
          "source": "src/System-Daemon.html#detachDaemon",
          "type": "function"
        },
        "index": {
          "description": "Detach the process from controlling terminal and run it in the background handling it with standard Unix deamon semantics After running this please note the following side-effects The PID of the running process will change stdin stdout and stderr will not work they ll be set to dev null CWD will be changed to highly suggest running this function before starting any threads Note that this is not intended for daemon invoked from inetd",
          "hierarchy": "System Daemon",
          "module": "System.Daemon",
          "name": "detachDaemon",
          "normalized": "IO()",
          "package": "MissingH",
          "partial": "Daemon",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Daemon.html#v:detachDaemon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with Debian\nfiles and programs.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Debian.ControlParser",
          "name": "ControlParser",
          "package": "MissingH",
          "source": "src/System-Debian-ControlParser.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with Debian files and programs Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "System Debian ControlParser",
          "module": "System.Debian.ControlParser",
          "name": "ControlParser",
          "package": "MissingH",
          "partial": "Control Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian-ControlParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain parser for the control file \n\u003c/p\u003e",
          "module": "System.Debian.ControlParser",
          "name": "control",
          "package": "MissingH",
          "signature": "CharParser a [(String, String)]",
          "source": "src/System-Debian-ControlParser.html#control",
          "type": "function"
        },
        "index": {
          "description": "Main parser for the control file",
          "hierarchy": "System Debian ControlParser",
          "module": "System.Debian.ControlParser",
          "name": "control",
          "normalized": "CharParser a[(String,String)]",
          "package": "MissingH",
          "signature": "CharParser a[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian-ControlParser.html#v:control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDependency parser.\n\u003c/p\u003e\u003cp\u003eReturns (package name, Maybe version, arch list)\n\u003c/p\u003e\u003cp\u003eversion is (operator, operand) \n\u003c/p\u003e",
          "module": "System.Debian.ControlParser",
          "name": "depPart",
          "package": "MissingH",
          "signature": "CharParser a (String, Maybe (String, String), [String])",
          "source": "src/System-Debian-ControlParser.html#depPart",
          "type": "function"
        },
        "index": {
          "description": "Dependency parser Returns package name Maybe version arch list version is operator operand",
          "hierarchy": "System Debian ControlParser",
          "module": "System.Debian.ControlParser",
          "name": "depPart",
          "normalized": "CharParser a(String,Maybe(String,String),[String])",
          "package": "MissingH",
          "partial": "Part",
          "signature": "CharParser a(String,Maybe(String,String),[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian-ControlParser.html#v:depPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with Debian\nfiles and programs.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Debian",
          "name": "Debian",
          "package": "MissingH",
          "source": "src/System-Debian.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with Debian files and programs Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "System Debian",
          "module": "System.Debian",
          "name": "Debian",
          "package": "MissingH",
          "partial": "Debian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type representing the contents of a Debian control file,\nor any control-like file (such as the output from apt-cache show, etc.) \n\u003c/p\u003e",
          "module": "System.Debian",
          "name": "ControlFile",
          "package": "MissingH",
          "source": "src/System-Debian.html#ControlFile",
          "type": "type"
        },
        "index": {
          "description": "The type representing the contents of Debian control file or any control-like file such as the output from apt-cache show etc",
          "hierarchy": "System Debian",
          "module": "System.Debian",
          "name": "ControlFile",
          "package": "MissingH",
          "partial": "Control File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#t:ControlFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type representing a Debian version number.  This type is an instance\nof \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e, but you can also use \u003ccode\u003e\u003ca\u003ecompareDebVersion\u003c/a\u003e\u003c/code\u003e if you prefer. \n\u003c/p\u003e",
          "module": "System.Debian",
          "name": "DebVersion",
          "package": "MissingH",
          "source": "src/System-Debian.html#DebVersion",
          "type": "data"
        },
        "index": {
          "description": "The type representing Debian version number This type is an instance of Ord but you can also use compareDebVersion if you prefer",
          "hierarchy": "System Debian",
          "module": "System.Debian",
          "name": "DebVersion",
          "package": "MissingH",
          "partial": "Deb Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#t:DebVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Debian",
          "name": "checkDebVersion",
          "package": "MissingH",
          "signature": "String-\u003e String-\u003e String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Debian",
          "module": "System.Debian",
          "name": "checkDebVersion",
          "normalized": "String-\u003eString-\u003eString-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Deb Version",
          "signature": "String-\u003eString-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#v:checkDebVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare the versions of two packages. \n\u003c/p\u003e",
          "module": "System.Debian",
          "name": "compareDebVersion",
          "package": "MissingH",
          "signature": "String -\u003e String -\u003e IO Ordering",
          "source": "src/System-Debian.html#compareDebVersion",
          "type": "function"
        },
        "index": {
          "description": "Compare the versions of two packages",
          "hierarchy": "System Debian",
          "module": "System.Debian",
          "name": "compareDebVersion",
          "normalized": "String-\u003eString-\u003eIO Ordering",
          "package": "MissingH",
          "partial": "Deb Version",
          "signature": "String-\u003eString-\u003eIO Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#v:compareDebVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGZip file decompression\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThe GZip format is described in RFC1952.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.FileArchive.GZip",
          "name": "GZip",
          "package": "MissingH",
          "source": "src/System-FileArchive-GZip.html",
          "type": "module"
        },
        "index": {
          "description": "GZip file decompression Copyright John Goerzen jgoerzen@complete.org The GZip format is described in RFC1952",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "GZip",
          "package": "MissingH",
          "partial": "GZip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStored on-disk at the end of each section. \n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "Footer",
          "package": "MissingH",
          "source": "src/System-FileArchive-GZip.html#Footer",
          "type": "data"
        },
        "index": {
          "description": "Stored on-disk at the end of each section",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "Footer",
          "package": "MissingH",
          "partial": "Footer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#t:Footer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileArchive.GZip",
          "name": "GZipError",
          "package": "MissingH",
          "source": "src/System-FileArchive-GZip.html#GZipError",
          "type": "data"
        },
        "index": {
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "GZipError",
          "package": "MissingH",
          "partial": "GZip Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#t:GZipError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure representing the GZip header.  This occurs\nat the beginning of each \u003ccode\u003e\u003ca\u003eSection\u003c/a\u003e\u003c/code\u003e on disk. \n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "Header",
          "package": "MissingH",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "data"
        },
        "index": {
          "description": "The data structure representing the GZip header This occurs at the beginning of each Section on disk",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "Header",
          "package": "MissingH",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA section represents a compressed component in a GZip file.\nEvery GZip file has at least one. \n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "Section",
          "package": "MissingH",
          "source": "src/System-FileArchive-GZip.html#Section",
          "type": "type"
        },
        "index": {
          "description": "section represents compressed component in GZip file Every GZip file has at least one",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "Section",
          "package": "MissingH",
          "partial": "Section",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#t:Section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCRC-32 check failed\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "CRCError",
          "package": "MissingH",
          "signature": "CRCError",
          "source": "src/System-FileArchive-GZip.html#GZipError",
          "type": "function"
        },
        "index": {
          "description": "CRC-32 check failed",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "CRCError",
          "package": "MissingH",
          "partial": "CRCError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:CRCError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileArchive.GZip",
          "name": "Footer",
          "package": "MissingH",
          "signature": "Footer",
          "source": "src/System-FileArchive-GZip.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "Footer",
          "package": "MissingH",
          "partial": "Footer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:Footer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileArchive.GZip",
          "name": "Header",
          "package": "MissingH",
          "signature": "Header",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "Header",
          "package": "MissingH",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCouldn't find a GZip header\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "NotGZIPFile",
          "package": "MissingH",
          "signature": "NotGZIPFile",
          "source": "src/System-FileArchive-GZip.html#GZipError",
          "type": "function"
        },
        "index": {
          "description": "Couldn find GZip header",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "NotGZIPFile",
          "package": "MissingH",
          "partial": "Not GZIPFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:NotGZIPFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther problem arose\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "UnknownError",
          "package": "MissingH",
          "signature": "UnknownError String",
          "source": "src/System-FileArchive-GZip.html#GZipError",
          "type": "function"
        },
        "index": {
          "description": "Other problem arose",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "UnknownError",
          "package": "MissingH",
          "partial": "Unknown Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:UnknownError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompressed with something other than method 8 (deflate)\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "UnknownMethod",
          "package": "MissingH",
          "signature": "UnknownMethod",
          "source": "src/System-FileArchive-GZip.html#GZipError",
          "type": "function"
        },
        "index": {
          "description": "Compressed with something other than method deflate",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "UnknownMethod",
          "package": "MissingH",
          "partial": "Unknown Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:UnknownMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileArchive.GZip",
          "name": "comment",
          "package": "MissingH",
          "signature": "Maybe String",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "comment",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe stored GZip CRC-32 of the original, decompressed data\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "crc32",
          "package": "MissingH",
          "signature": "Word32",
          "source": "src/System-FileArchive-GZip.html#Footer",
          "type": "function"
        },
        "index": {
          "description": "The stored GZip CRC-32 of the original decompressed data",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "crc32",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:crc32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not the stored CRC-32 matches the calculated CRC-32 of the data\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "crc32valid",
          "package": "MissingH",
          "signature": "Bool",
          "source": "src/System-FileArchive-GZip.html#Footer",
          "type": "function"
        },
        "index": {
          "description": "Whether or not the stored CRC-32 matches the calculated CRC-32 of the data",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "crc32valid",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:crc32valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a GZip file, decompressing all sections that are found.\n\u003c/p\u003e\u003cp\u003eReturns a decompresed data stream and Nothing, or an unreliable string\nand Just (error).  If you get anything other than Nothing, the String\nreturned should be discarded.\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "decompress",
          "package": "MissingH",
          "signature": "String -\u003e (String, Maybe GZipError)",
          "source": "src/System-FileArchive-GZip.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Read GZip file decompressing all sections that are found Returns decompresed data stream and Nothing or an unreliable string and Just error If you get anything other than Nothing the String returned should be discarded",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "decompress",
          "normalized": "String-\u003e(String,Maybe GZipError)",
          "package": "MissingH",
          "signature": "String-\u003e(String,Maybe GZipError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileArchive.GZip",
          "name": "extra",
          "package": "MissingH",
          "signature": "Maybe String",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "extra",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:extra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileArchive.GZip",
          "name": "filename",
          "package": "MissingH",
          "signature": "Maybe String",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "filename",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileArchive.GZip",
          "name": "flags",
          "package": "MissingH",
          "signature": "Int",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "flags",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a GZip file, decompressing all sections found.\n\u003c/p\u003e\u003cp\u003eWrites the decompressed data stream to the given output handle.\n\u003c/p\u003e\u003cp\u003eReturns Nothing if the action was successful, or Just GZipError if there\nwas a problem.  If there was a problem, the data written to the output\nhandle should be discarded.\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "hDecompress",
          "package": "MissingH",
          "signature": "Handle-\u003e Handle-\u003e IO (Maybe GZipError)",
          "type": "function"
        },
        "index": {
          "description": "Read GZip file decompressing all sections found Writes the decompressed data stream to the given output handle Returns Nothing if the action was successful or Just GZipError if there was problem If there was problem the data written to the output handle should be discarded",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "hDecompress",
          "normalized": "Handle-\u003eHandle-\u003eIO(Maybe GZipError)",
          "package": "MissingH",
          "partial": "Decompress",
          "signature": "Handle-\u003eHandle-\u003eIO(Maybe GZipError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:hDecompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompression method.  Only 8 is defined at present.\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "method",
          "package": "MissingH",
          "signature": "Int",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "function"
        },
        "index": {
          "description": "Compression method Only is defined at present",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "method",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModification time of the original file\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "mtime",
          "package": "MissingH",
          "signature": "Word32",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "function"
        },
        "index": {
          "description": "Modification time of the original file",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "mtime",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:mtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating operating system\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "os",
          "package": "MissingH",
          "signature": "Int",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "function"
        },
        "index": {
          "description": "Creating operating system",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "os",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:os"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the GZip header.  Return (Header, Remainder).\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "read_header",
          "package": "MissingH",
          "signature": "String -\u003e Either GZipError (Header, String)",
          "source": "src/System-FileArchive-GZip.html#read_header",
          "type": "function"
        },
        "index": {
          "description": "Read the GZip header Return Header Remainder",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "read_header",
          "normalized": "String-\u003eEither GZipError(Header,String)",
          "package": "MissingH",
          "signature": "String-\u003eEither GZipError(Header,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:read_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one section, returning (ThisSection, Remainder)\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "read_section",
          "package": "MissingH",
          "signature": "String -\u003e Either GZipError (Section, String)",
          "source": "src/System-FileArchive-GZip.html#read_section",
          "type": "function"
        },
        "index": {
          "description": "Read one section returning ThisSection Remainder",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "read_section",
          "normalized": "String-\u003eEither GZipError(Section,String)",
          "package": "MissingH",
          "signature": "String-\u003eEither GZipError(Section,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:read_section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead all sections.\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "read_sections",
          "package": "MissingH",
          "signature": "String -\u003e Either GZipError [Section]",
          "source": "src/System-FileArchive-GZip.html#read_sections",
          "type": "function"
        },
        "index": {
          "description": "Read all sections",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "read_sections",
          "normalized": "String-\u003eEither GZipError[Section]",
          "package": "MissingH",
          "signature": "String-\u003eEither GZipError[Section]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:read_sections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the original, decompressed data\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "size",
          "package": "MissingH",
          "signature": "Word32",
          "source": "src/System-FileArchive-GZip.html#Footer",
          "type": "function"
        },
        "index": {
          "description": "The size of the original decompressed data",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "size",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra flags\n\u003c/p\u003e",
          "module": "System.FileArchive.GZip",
          "name": "xfl",
          "package": "MissingH",
          "signature": "Int",
          "source": "src/System-FileArchive-GZip.html#Header",
          "type": "function"
        },
        "index": {
          "description": "Extra flags",
          "hierarchy": "System FileArchive GZip",
          "module": "System.FileArchive.GZip",
          "name": "xfl",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:xfl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with binary\ninput and output.\n\u003c/p\u003e\u003cp\u003eYou can use this module to deal with binary blocks of data as either Strings\nor lists of Word8.  The BinaryConvertible class provides this abstraction.\n\u003c/p\u003e\u003cp\u003eWherever you see HVIO, you can transparently substite a regular Handle.\nThis module can work with any HVIO object, however.  See\n\u003ca\u003eSystem.IO.HVIO\u003c/a\u003e for more details.\n\u003c/p\u003e\u003cp\u003eVersions of MissingH prior 0.11.6 lacked the \u003ccode\u003e\u003ca\u003eBinaryConvertible\u003c/a\u003e\u003c/code\u003e class\nand worked only with Strings and Handles.\n\u003c/p\u003e\u003cp\u003eImportant note: /binary functions are not supported in all Haskell\nimplementations/.  Do not import or use this module unless you know you\nare using an implementation that supports them.  At this time, here\nis the support status:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e GHC 6.2 and above: yes\n\u003c/li\u003e\u003cli\u003e GHC 6.x, earlier versions: unknown\n\u003c/li\u003e\u003cli\u003e GHC 5.x: no\n\u003c/li\u003e\u003cli\u003e nhc98: no\n\u003c/li\u003e\u003cli\u003e Hugs: partial (maybe complete; needs more testing)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNon-binary functions may be found in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ca\u003eSystem.IO.BlockIO\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.Binary",
          "name": "Binary",
          "package": "MissingH",
          "source": "src/System-IO-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with binary input and output You can use this module to deal with binary blocks of data as either Strings or lists of Word8 The BinaryConvertible class provides this abstraction Wherever you see HVIO you can transparently substite regular Handle This module can work with any HVIO object however See System.IO.HVIO for more details Versions of MissingH prior lacked the BinaryConvertible class and worked only with Strings and Handles Important note binary functions are not supported in all Haskell implementations Do not import or use this module unless you know you are using an implementation that supports them At this time here is the support status GHC and above yes GHC earlier versions unknown GHC no nhc98 no Hugs partial maybe complete needs more testing Non-binary functions may be found in System.IO See also System.IO.BlockIO Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "Binary",
          "package": "MissingH",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides support for handling binary blocks with convenient\ntypes.\n\u003c/p\u003e\u003cp\u003eThis module provides implementations for Strings and for [Word8] (lists of\nWord8s). \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "BinaryConvertible",
          "package": "MissingH",
          "source": "src/System-IO-Binary.html#BinaryConvertible",
          "type": "class"
        },
        "index": {
          "description": "Provides support for handling binary blocks with convenient types This module provides implementations for Strings and for Word8 lists of Word8s",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "BinaryConvertible",
          "package": "MissingH",
          "partial": "Binary Convertible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#t:BinaryConvertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e using binary blocks of the given size.\nAn alias for \u003ccode\u003e\u003ca\u003ehBlockCopy\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "blockCopy",
          "package": "MissingH",
          "signature": "Int -\u003e IO ()",
          "source": "src/System-IO-Binary.html#blockCopy",
          "type": "function"
        },
        "index": {
          "description": "Copies from stdin to stdout using binary blocks of the given size An alias for hBlockCopy over stdin and stdout",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "blockCopy",
          "normalized": "Int-\u003eIO()",
          "package": "MissingH",
          "partial": "Copy",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:blockCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehBlockInteract\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "blockInteract",
          "package": "MissingH",
          "signature": "Int -\u003e ([[b]] -\u003e [[c]]) -\u003e IO ()",
          "source": "src/System-IO-Binary.html#blockInteract",
          "type": "function"
        },
        "index": {
          "description": "An alias for hBlockInteract over stdin and stdout",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "blockInteract",
          "normalized": "Int-\u003e([[a]]-\u003e[[b]])-\u003eIO()",
          "package": "MissingH",
          "partial": "Interact",
          "signature": "Int-\u003e([[b]]-\u003e[[c]])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:blockInteract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies one filename to another in binary mode.\n\u003c/p\u003e\u003cp\u003ePlease note that the Unix permission bits on the output file cannot\nbe set due to a limitation of the Haskell \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e\nfunction.  Therefore, you may need to adjust those bits after the copy\nyourself.\n\u003c/p\u003e\u003cp\u003eThis function is implemented using \u003ccode\u003e\u003ca\u003ehBlockCopy\u003c/a\u003e\u003c/code\u003e internally. \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "copyFileBlocksToFile",
          "package": "MissingH",
          "signature": "Int -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-Binary.html#copyFileBlocksToFile",
          "type": "function"
        },
        "index": {
          "description": "Copies one filename to another in binary mode Please note that the Unix permission bits on the output file cannot be set due to limitation of the Haskell openBinaryFile function Therefore you may need to adjust those bits after the copy yourself This function is implemented using hBlockCopy internally",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "copyFileBlocksToFile",
          "normalized": "Int-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "File Blocks To File",
          "signature": "Int-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:copyFileBlocksToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Binary",
          "name": "fromBuf",
          "package": "MissingH",
          "signature": "Int -\u003e (Ptr CChar -\u003e IO Int) -\u003e IO [a]",
          "source": "src/System-IO-Binary.html#fromBuf",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "fromBuf",
          "normalized": "Int-\u003e(Ptr CChar-\u003eIO Int)-\u003eIO[a]",
          "package": "MissingH",
          "partial": "Buf",
          "signature": "Int-\u003e(Ptr CChar-\u003eIO Int)-\u003eIO[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:fromBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehFullBlockInteract\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "fullBlockInteract",
          "package": "MissingH",
          "signature": "Int -\u003e ([[b]] -\u003e [[c]]) -\u003e IO ()",
          "source": "src/System-IO-Binary.html#fullBlockInteract",
          "type": "function"
        },
        "index": {
          "description": "An alias for hFullBlockInteract over stdin and stdout",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "fullBlockInteract",
          "normalized": "Int-\u003e([[a]]-\u003e[[b]])-\u003eIO()",
          "package": "MissingH",
          "partial": "Block Interact",
          "signature": "Int-\u003e([[b]]-\u003e[[c]])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:fullBlockInteract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehFullGetBlocks\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "fullGetBlocks",
          "package": "MissingH",
          "signature": "Int -\u003e IO [[b]]",
          "source": "src/System-IO-Binary.html#fullGetBlocks",
          "type": "function"
        },
        "index": {
          "description": "An alias for hFullGetBlocks stdin",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "fullGetBlocks",
          "normalized": "Int-\u003eIO[[a]]",
          "package": "MissingH",
          "partial": "Get Blocks",
          "signature": "Int-\u003eIO[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:fullGetBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehFullGetBufStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "fullGetBufStr",
          "package": "MissingH",
          "signature": "Int -\u003e IO [b]",
          "source": "src/System-IO-Binary.html#fullGetBufStr",
          "type": "function"
        },
        "index": {
          "description": "An alias for hFullGetBufStr stdin",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "fullGetBufStr",
          "normalized": "Int-\u003eIO[a]",
          "package": "MissingH",
          "partial": "Get Buf Str",
          "signature": "Int-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:fullGetBufStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehGetBlocks\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "getBlocks",
          "package": "MissingH",
          "signature": "Int -\u003e IO [[b]]",
          "source": "src/System-IO-Binary.html#getBlocks",
          "type": "function"
        },
        "index": {
          "description": "An alias for hGetBlocks stdin",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "getBlocks",
          "normalized": "Int-\u003eIO[[a]]",
          "package": "MissingH",
          "partial": "Blocks",
          "signature": "Int-\u003eIO[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:getBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehGetBufStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "getBufStr",
          "package": "MissingH",
          "signature": "Int -\u003e IO [b]",
          "source": "src/System-IO-Binary.html#getBufStr",
          "type": "function"
        },
        "index": {
          "description": "An alias for hGetBufStr stdin",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "getBufStr",
          "normalized": "Int-\u003eIO[a]",
          "package": "MissingH",
          "partial": "Buf Str",
          "signature": "Int-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:getBufStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies everything from the input handle to the output handle using binary\nblocks of the given size.  This was once the following\nbeautiful implementation:\n\u003c/p\u003e\u003cpre\u003e hBlockCopy bs hin hout = hBlockInteract bs hin hout id\n\u003c/pre\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e is the built-in Haskell function that just returns whatever is given\nto it)\n\u003c/p\u003e\u003cp\u003eIn more recent versions of MissingH, it uses a more optimized routine that\navoids ever having to convert the binary buffer at all.\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "hBlockCopy",
          "package": "MissingH",
          "signature": "Int -\u003e a -\u003e b -\u003e IO ()",
          "source": "src/System-IO-Binary.html#hBlockCopy",
          "type": "function"
        },
        "index": {
          "description": "Copies everything from the input handle to the output handle using binary blocks of the given size This was once the following beautiful implementation hBlockCopy bs hin hout hBlockInteract bs hin hout id id is the built-in Haskell function that just returns whatever is given to it In more recent versions of MissingH it uses more optimized routine that avoids ever having to convert the binary buffer at all",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "hBlockCopy",
          "normalized": "Int-\u003ea-\u003eb-\u003eIO()",
          "package": "MissingH",
          "partial": "Block Copy",
          "signature": "Int-\u003ea-\u003eb-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hBlockCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary block-based interaction.  This is useful for scenarios that\ntake binary blocks, manipulate them in some way, and then write them\nout.  Take a look at \u003ccode\u003e\u003ca\u003ehBlockCopy\u003c/a\u003e\u003c/code\u003e for an example.  The integer argument\nis the size of input binary blocks.  This function uses \u003ccode\u003e\u003ca\u003ehGetBlocks\u003c/a\u003e\u003c/code\u003e\ninternally.\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "hBlockInteract",
          "package": "MissingH",
          "signature": "Int -\u003e a -\u003e d -\u003e ([[b]] -\u003e [[c]]) -\u003e IO ()",
          "source": "src/System-IO-Binary.html#hBlockInteract",
          "type": "function"
        },
        "index": {
          "description": "Binary block-based interaction This is useful for scenarios that take binary blocks manipulate them in some way and then write them out Take look at hBlockCopy for an example The integer argument is the size of input binary blocks This function uses hGetBlocks internally",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "hBlockInteract",
          "normalized": "Int-\u003ea-\u003eb-\u003e([[c]]-\u003e[[d]])-\u003eIO()",
          "package": "MissingH",
          "partial": "Block Interact",
          "signature": "Int-\u003ea-\u003ed-\u003e([[b]]-\u003e[[c]])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hBlockInteract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehBlockInteract\u003c/a\u003e\u003c/code\u003e, but uses \u003ccode\u003e\u003ca\u003ehFullGetBlocks\u003c/a\u003e\u003c/code\u003e instead of\n\u003ccode\u003e\u003ca\u003ehGetBlocks\u003c/a\u003e\u003c/code\u003e internally. \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "hFullBlockInteract",
          "package": "MissingH",
          "signature": "Int -\u003e a -\u003e d -\u003e ([[b]] -\u003e [[c]]) -\u003e IO ()",
          "source": "src/System-IO-Binary.html#hFullBlockInteract",
          "type": "function"
        },
        "index": {
          "description": "Same as hBlockInteract but uses hFullGetBlocks instead of hGetBlocks internally",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "hFullBlockInteract",
          "normalized": "Int-\u003ea-\u003eb-\u003e([[c]]-\u003e[[d]])-\u003eIO()",
          "package": "MissingH",
          "partial": "Full Block Interact",
          "signature": "Int-\u003ea-\u003ed-\u003e([[b]]-\u003e[[c]])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hFullBlockInteract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehGetBlocks\u003c/a\u003e\u003c/code\u003e, but using \u003ccode\u003e\u003ca\u003ehFullGetBufStr\u003c/a\u003e\u003c/code\u003e underneath. \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "hFullGetBlocks",
          "package": "MissingH",
          "signature": "a -\u003e Int -\u003e IO [[b]]",
          "source": "src/System-IO-Binary.html#hFullGetBlocks",
          "type": "function"
        },
        "index": {
          "description": "Same as hGetBlocks but using hFullGetBufStr underneath",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "hFullGetBlocks",
          "normalized": "a-\u003eInt-\u003eIO[[b]]",
          "package": "MissingH",
          "partial": "Full Get Blocks",
          "signature": "a-\u003eInt-\u003eIO[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hFullGetBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehGetBufStr\u003c/a\u003e\u003c/code\u003e, but guarantees that it will only return fewer than\nthe requested number of bytes when EOF is encountered. \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "hFullGetBufStr",
          "package": "MissingH",
          "signature": "a -\u003e Int -\u003e IO [b]",
          "source": "src/System-IO-Binary.html#hFullGetBufStr",
          "type": "function"
        },
        "index": {
          "description": "Like hGetBufStr but guarantees that it will only return fewer than the requested number of bytes when EOF is encountered",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "hFullGetBufStr",
          "normalized": "a-\u003eInt-\u003eIO[b]",
          "package": "MissingH",
          "partial": "Full Get Buf Str",
          "signature": "a-\u003eInt-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hFullGetBufStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003ehPutBlocks\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\nputBlocks :: (BinaryConvertible b) =\u003e [[b]] -\u003e IO ()\nputBlocks = hPutBlocks stdout \n\u003c/p\u003e\u003cp\u003eReturns a lazily-evaluated list of all blocks in the input file,\nas read by \u003ccode\u003e\u003ca\u003ehGetBufStr\u003c/a\u003e\u003c/code\u003e.  There will be no 0-length block in this list.\nThe list simply ends at EOF. \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "hGetBlocks",
          "package": "MissingH",
          "signature": "a -\u003e Int -\u003e IO [[b]]",
          "source": "src/System-IO-Binary.html#hGetBlocks",
          "type": "function"
        },
        "index": {
          "description": "An alias for hPutBlocks stdout putBlocks BinaryConvertible IO putBlocks hPutBlocks stdout Returns lazily-evaluated list of all blocks in the input file as read by hGetBufStr There will be no length block in this list The list simply ends at EOF",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "hGetBlocks",
          "normalized": "a-\u003eInt-\u003eIO[[b]]",
          "package": "MissingH",
          "partial": "Get Blocks",
          "signature": "a-\u003eInt-\u003eIO[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hGetBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs a wrapper around the standard function \u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e,\nthis function returns a standard Haskell String (or [Word8]) instead of\nmodifying\na 'Ptr a' buffer.  The length is the maximum length to read and the\nsemantice are the same as with \u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e; namely, the empty string\nis returned with EOF is reached, and any given read may read fewer\nbytes than the given length.\n\u003c/p\u003e\u003cp\u003e(Actually, it's a wrapper around \u003ccode\u003e\u003ca\u003evGetBuf\u003c/a\u003e\u003c/code\u003e) \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "hGetBufStr",
          "package": "MissingH",
          "signature": "a -\u003e Int -\u003e IO [b]",
          "source": "src/System-IO-Binary.html#hGetBufStr",
          "type": "function"
        },
        "index": {
          "description": "Acts wrapper around the standard function hGetBuf this function returns standard Haskell String or Word8 instead of modifying Ptr buffer The length is the maximum length to read and the semantice are the same as with hGetBuf namely the empty string is returned with EOF is reached and any given read may read fewer bytes than the given length Actually it wrapper around vGetBuf",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "hGetBufStr",
          "normalized": "a-\u003eInt-\u003eIO[b]",
          "package": "MissingH",
          "partial": "Get Buf Str",
          "signature": "a-\u003eInt-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hGetBufStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs a wrapper around the standard function \u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e,\nthis function takes a standard Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e instead of the far less\nconvenient \u003ccode\u003ePtr a\u003c/code\u003e.  The entire contents of the string will be written\nas a binary buffer using \u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e.  The length of the output will be\nthe length of the passed String or list.\n\u003c/p\u003e\u003cp\u003eIf it helps, you can thing of this function as being of type\n\u003ccode\u003eHandle -\u003e String -\u003e IO ()\u003c/code\u003e \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "hPutBufStr",
          "package": "MissingH",
          "signature": "a -\u003e [b] -\u003e IO ()",
          "source": "src/System-IO-Binary.html#hPutBufStr",
          "type": "function"
        },
        "index": {
          "description": "As wrapper around the standard function hPutBuf this function takes standard Haskell String instead of the far less convenient Ptr The entire contents of the string will be written as binary buffer using hPutBuf The length of the output will be the length of the passed String or list If it helps you can thing of this function as being of type Handle String IO",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "hPutBufStr",
          "normalized": "a-\u003e[b]-\u003eIO()",
          "package": "MissingH",
          "partial": "Put Buf Str",
          "signature": "a-\u003e[b]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hPutBufStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehPutBufStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "putBufStr",
          "package": "MissingH",
          "signature": "[b] -\u003e IO ()",
          "source": "src/System-IO-Binary.html#putBufStr",
          "type": "function"
        },
        "index": {
          "description": "An alias for hPutBufStr stdout",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "putBufStr",
          "normalized": "[a]-\u003eIO()",
          "package": "MissingH",
          "partial": "Buf Str",
          "signature": "[b]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:putBufStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the built-in \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e, but opens the file in binary instead\nof text mode. \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "readBinaryFile",
          "package": "MissingH",
          "signature": "FilePath -\u003e IO String",
          "source": "src/System-IO-Binary.html#readBinaryFile",
          "type": "function"
        },
        "index": {
          "description": "Like the built-in readFile but opens the file in binary instead of text mode",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "readBinaryFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "MissingH",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:readBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Binary",
          "name": "toBuf",
          "package": "MissingH",
          "signature": "[a] -\u003e (Ptr CChar -\u003e IO c) -\u003e IO c",
          "source": "src/System-IO-Binary.html#toBuf",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "toBuf",
          "normalized": "[a]-\u003e(Ptr CChar-\u003eIO b)-\u003eIO b",
          "package": "MissingH",
          "partial": "Buf",
          "signature": "[a]-\u003e(Ptr CChar-\u003eIO c)-\u003eIO c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:toBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the built-in \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e, but opens the file in binary instead\nof text mode. \n\u003c/p\u003e",
          "module": "System.IO.Binary",
          "name": "writeBinaryFile",
          "package": "MissingH",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/System-IO-Binary.html#writeBinaryFile",
          "type": "function"
        },
        "index": {
          "description": "Like the built-in writeFile but opens the file in binary instead of text mode",
          "hierarchy": "System IO Binary",
          "module": "System.IO.Binary",
          "name": "writeBinaryFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "MissingH",
          "partial": "Binary File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:writeBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for combining different HVFS modules together\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004-2005 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.HVFS.Combinators",
          "name": "Combinators",
          "package": "MissingH",
          "source": "src/System-IO-HVFS-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Support for combining different HVFS modules together Copyright John Goerzen jgoerzen@complete.org",
          "hierarchy": "System IO HVFS Combinators",
          "module": "System.IO.HVFS.Combinators",
          "name": "Combinators",
          "package": "MissingH",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess a subdirectory of a real filesystem as if it was the root\nof that filesystem. \n\u003c/p\u003e",
          "module": "System.IO.HVFS.Combinators",
          "name": "HVFSChroot",
          "package": "MissingH",
          "source": "src/System-IO-HVFS-Combinators.html#HVFSChroot",
          "type": "data"
        },
        "index": {
          "description": "Access subdirectory of real filesystem as if it was the root of that filesystem",
          "hierarchy": "System IO HVFS Combinators",
          "module": "System.IO.HVFS.Combinators",
          "name": "HVFSChroot",
          "package": "MissingH",
          "partial": "HVFSChroot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#t:HVFSChroot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict access to the underlying filesystem to be strictly\nread-only.  Any write-type operations will cause an error.\n\u003c/p\u003e\u003cp\u003eNo constructor is required; just say \u003ccode\u003eHVFSReadOnly fs\u003c/code\u003e to make a\nnew read-only wrapper around the \u003ccode\u003e\u003ca\u003eHVFS\u003c/a\u003e\u003c/code\u003e instance \u003ccode\u003efs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.HVFS.Combinators",
          "name": "HVFSReadOnly",
          "package": "MissingH",
          "source": "src/System-IO-HVFS-Combinators.html#HVFSReadOnly",
          "type": "data"
        },
        "index": {
          "description": "Restrict access to the underlying filesystem to be strictly read-only Any write-type operations will cause an error No constructor is required just say HVFSReadOnly fs to make new read-only wrapper around the HVFS instance fs",
          "hierarchy": "System IO HVFS Combinators",
          "module": "System.IO.HVFS.Combinators",
          "name": "HVFSReadOnly",
          "package": "MissingH",
          "partial": "HVFSRead Only",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#t:HVFSReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS.Combinators",
          "name": "HVFSReadOnly",
          "package": "MissingH",
          "signature": "HVFSReadOnly a",
          "source": "src/System-IO-HVFS-Combinators.html#HVFSReadOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO HVFS Combinators",
          "module": "System.IO.HVFS.Combinators",
          "name": "HVFSReadOnly",
          "package": "MissingH",
          "partial": "HVFSRead Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#v:HVFSReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eHVFSChroot\u003c/a\u003e\u003c/code\u003e object. \n\u003c/p\u003e",
          "module": "System.IO.HVFS.Combinators",
          "name": "newHVFSChroot",
          "package": "MissingH",
          "signature": "a-\u003e FilePath-\u003e IO (HVFSChroot a)",
          "type": "function"
        },
        "index": {
          "description": "Create new HVFSChroot object",
          "hierarchy": "System IO HVFS Combinators",
          "module": "System.IO.HVFS.Combinators",
          "name": "newHVFSChroot",
          "normalized": "a-\u003eFilePath-\u003eIO(HVFSChroot a)",
          "package": "MissingH",
          "partial": "HVFSChroot",
          "signature": "a-\u003eFilePath-\u003eIO(HVFSChroot a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#v:newHVFSChroot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for creating instances of the items defined in\n\u003ca\u003eSystem.IO.HVFS\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "InstanceHelpers",
          "package": "MissingH",
          "source": "src/System-IO-HVFS-InstanceHelpers.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for creating instances of the items defined in System.IO.HVFS",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "InstanceHelpers",
          "package": "MissingH",
          "partial": "Instance Helpers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe content of a file or directory in a \u003ccode\u003e\u003ca\u003eMemoryVFS\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryEntry",
          "package": "MissingH",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryEntry",
          "type": "data"
        },
        "index": {
          "description": "The content of file or directory in MemoryVFS",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryEntry",
          "package": "MissingH",
          "partial": "Memory Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#t:MemoryEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic node of a \u003ccode\u003e\u003ca\u003eMemoryVFS\u003c/a\u003e\u003c/code\u003e.  The String corresponds to the filename,\nand the entry to the contents. \n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryNode",
          "package": "MissingH",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryNode",
          "type": "type"
        },
        "index": {
          "description": "The basic node of MemoryVFS The String corresponds to the filename and the entry to the contents",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryNode",
          "package": "MissingH",
          "partial": "Memory Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#t:MemoryNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn in-memory read/write filesystem.  Think of it as a dynamically\nresizable ramdisk written in Haskell. \n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryVFS",
          "package": "MissingH",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryVFS",
          "type": "data"
        },
        "index": {
          "description": "An in-memory read write filesystem Think of it as dynamically resizable ramdisk written in Haskell",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryVFS",
          "package": "MissingH",
          "partial": "Memory VFS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#t:MemoryVFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple \u003ca\u003eSystem.IO.HVFS.HVFSStat\u003c/a\u003e\nclass that assumes that everything is either a file\nor a directory. \n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "SimpleStat",
          "package": "MissingH",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#SimpleStat",
          "type": "data"
        },
        "index": {
          "description": "simple System.IO.HVFS.HVFSStat class that assumes that everything is either file or directory",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "SimpleStat",
          "package": "MissingH",
          "partial": "Simple Stat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#t:SimpleStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryDirectory",
          "package": "MissingH",
          "signature": "MemoryDirectory [MemoryNode]",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryDirectory",
          "normalized": "MemoryDirectory[MemoryNode]",
          "package": "MissingH",
          "partial": "Memory Directory",
          "signature": "MemoryDirectory[MemoryNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:MemoryDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryFile",
          "package": "MissingH",
          "signature": "MemoryFile String",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "MemoryFile",
          "package": "MissingH",
          "partial": "Memory File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:MemoryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "SimpleStat",
          "package": "MissingH",
          "signature": "SimpleStat",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#SimpleStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "SimpleStat",
          "package": "MissingH",
          "partial": "Simple Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:SimpleStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet to 0 if unknown or a directory\n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "fileSize",
          "package": "MissingH",
          "signature": "FileOffset",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#SimpleStat",
          "type": "function"
        },
        "index": {
          "description": "Set to if unknown or directory",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "fileSize",
          "package": "MissingH",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:fileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a full path, after investigating the cwd.\n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "getFullPath",
          "package": "MissingH",
          "signature": "a -\u003e String -\u003e IO String",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#getFullPath",
          "type": "function"
        },
        "index": {
          "description": "Gets full path after investigating the cwd",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "getFullPath",
          "normalized": "a-\u003eString-\u003eIO String",
          "package": "MissingH",
          "partial": "Full Path",
          "signature": "a-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:getFullPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the full path via \u003ccode\u003e\u003ca\u003egetFullPath\u003c/a\u003e\u003c/code\u003e, then splits it via \u003ccode\u003e\u003ca\u003enice_slice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "getFullSlice",
          "package": "MissingH",
          "signature": "a -\u003e String -\u003e IO [String]",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#getFullSlice",
          "type": "function"
        },
        "index": {
          "description": "Gets the full path via getFullPath then splits it via nice slice",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "getFullSlice",
          "normalized": "a-\u003eString-\u003eIO[String]",
          "package": "MissingH",
          "partial": "Full Slice",
          "signature": "a-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:getFullSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if file, False if directory\n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "isFile",
          "package": "MissingH",
          "signature": "Bool",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#SimpleStat",
          "type": "function"
        },
        "index": {
          "description": "True if file False if directory",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "isFile",
          "package": "MissingH",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:isFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eMemoryVFS\u003c/a\u003e\u003c/code\u003e object from an existing tree.\n An empty filesystem may be created by using \u003ccode\u003e[]\u003c/code\u003e for the parameter.\n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "newMemoryVFS",
          "package": "MissingH",
          "signature": "[MemoryNode] -\u003e IO MemoryVFS",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#newMemoryVFS",
          "type": "function"
        },
        "index": {
          "description": "Create new MemoryVFS object from an existing tree An empty filesystem may be created by using for the parameter",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "newMemoryVFS",
          "normalized": "[MemoryNode]-\u003eIO MemoryVFS",
          "package": "MissingH",
          "partial": "Memory VFS",
          "signature": "[MemoryNode]-\u003eIO MemoryVFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:newMemoryVFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eMemoryVFS\u003c/a\u003e\u003c/code\u003e object using an IORef to an\n existing tree.\n\u003c/p\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "newMemoryVFSRef",
          "package": "MissingH",
          "signature": "IORef [MemoryNode] -\u003e IO MemoryVFS",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#newMemoryVFSRef",
          "type": "function"
        },
        "index": {
          "description": "Create new MemoryVFS object using an IORef to an existing tree",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "newMemoryVFSRef",
          "normalized": "IORef[MemoryNode]-\u003eIO MemoryVFS",
          "package": "MissingH",
          "partial": "Memory VFSRef",
          "signature": "IORef[MemoryNode]-\u003eIO MemoryVFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:newMemoryVFSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eNameManip\u003c/a\u003e\u003c/code\u003e but the first element\nwon't be \u003ccode\u003e/\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003enice_slice \"/\" -\u003e []\nnice_slice \"/foo/bar\" -\u003e [\"foo\", \"bar\"]\n\u003c/pre\u003e",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "nice_slice",
          "package": "MissingH",
          "signature": "String -\u003e [String]",
          "source": "src/System-IO-HVFS-InstanceHelpers.html#nice_slice",
          "type": "function"
        },
        "index": {
          "description": "Similar to NameManip but the first element won be nice slice nice slice foo bar foo bar",
          "hierarchy": "System IO HVFS InstanceHelpers",
          "module": "System.IO.HVFS.InstanceHelpers",
          "name": "nice_slice",
          "normalized": "String-\u003e[String]",
          "package": "MissingH",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:nice_slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing \nfilesystems.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eTo operate on your system's main filesystem, just pass SystemFS as the\nfirst parameter to these functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.HVFS.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/System-IO-HVFS-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing filesystems Written by John Goerzen jgoerzen@complete.org To operate on your system main filesystem just pass SystemFS as the first parameter to these functions",
          "hierarchy": "System IO HVFS Utils",
          "module": "System.IO.HVFS.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS.Utils",
          "name": "SystemFS",
          "package": "MissingH",
          "source": "src/System-IO-HVFS.html#SystemFS",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO HVFS Utils",
          "module": "System.IO.HVFS.Utils",
          "name": "SystemFS",
          "package": "MissingH",
          "partial": "System FS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#t:SystemFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.IO.HVFS.Utils\",\"System.IO.HVFS\"]",
          "name": "SystemFS",
          "package": "MissingH",
          "signature": "SystemFS",
          "source": "src/System-IO-HVFS.html#SystemFS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:SystemFS\",\"http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:SystemFS\"]"
        },
        "index": {
          "hierarchy": "System IO HVFS Utils",
          "module": "System.IO.HVFS.Utils",
          "name": "SystemFS",
          "package": "MissingH",
          "partial": "System FS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:SystemFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a result similar to the command ls -l over a directory.\n\u003c/p\u003e\u003cp\u003eKnown bug: setuid bit semantics are inexact compared with standard ls.\n\u003c/p\u003e",
          "module": "System.IO.HVFS.Utils",
          "name": "lsl",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO String",
          "source": "src/System-IO-HVFS-Utils.html#lsl",
          "type": "function"
        },
        "index": {
          "description": "Provide result similar to the command ls over directory Known bug setuid bit semantics are inexact compared with standard ls",
          "hierarchy": "System IO HVFS Utils",
          "module": "System.IO.HVFS.Utils",
          "name": "lsl",
          "normalized": "a-\u003eFilePath-\u003eIO String",
          "package": "MissingH",
          "signature": "a-\u003eFilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:lsl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a recursive listing of all files/directories beneath \nthe specified directory.  The traversal is depth-first\nand the original\nitem is always present in the returned list.\n\u003c/p\u003e\u003cp\u003eIf the passed value is not a directory, the return value\nbe only that value.\n\u003c/p\u003e\u003cp\u003eThe \".\" and \"..\" entries are removed from the data returned.\n\u003c/p\u003e",
          "module": "[\"System.IO.HVFS.Utils\",\"System.Path\"]",
          "name": "recurseDir",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO [FilePath]",
          "source": "src/System-IO-HVFS-Utils.html#recurseDir",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:recurseDir\",\"http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:recurseDir\"]"
        },
        "index": {
          "description": "Obtain recursive listing of all files directories beneath the specified directory The traversal is depth-first and the original item is always present in the returned list If the passed value is not directory the return value be only that value The and entries are removed from the data returned",
          "hierarchy": "System IO HVFS Utils",
          "module": "System.IO.HVFS.Utils",
          "name": "recurseDir",
          "normalized": "a-\u003eFilePath-\u003eIO[FilePath]",
          "package": "MissingH",
          "partial": "Dir",
          "signature": "a-\u003eFilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:recurseDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erecurseDir\u003c/a\u003e\u003c/code\u003e, but return the stat() (System.Posix.Files.FileStatus)\ninformation with them.  This is an optimization if you will be statting files\nyourself later.\n\u003c/p\u003e\u003cp\u003eThe items are returned lazily.\n\u003c/p\u003e\u003cp\u003eWARNING: do not change your current working directory until you have consumed\nall the items.  Doing so could cause strange effects.\n\u003c/p\u003e\u003cp\u003eAlternatively, you may wish to pass an absolute path to this function.\n\u003c/p\u003e",
          "module": "[\"System.IO.HVFS.Utils\",\"System.Path\"]",
          "name": "recurseDirStat",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO [(FilePath, HVFSStatEncap)]",
          "source": "src/System-IO-HVFS-Utils.html#recurseDirStat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:recurseDirStat\",\"http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:recurseDirStat\"]"
        },
        "index": {
          "description": "Like recurseDir but return the stat System.Posix.Files.FileStatus information with them This is an optimization if you will be statting files yourself later The items are returned lazily WARNING do not change your current working directory until you have consumed all the items Doing so could cause strange effects Alternatively you may wish to pass an absolute path to this function",
          "hierarchy": "System IO HVFS Utils",
          "module": "System.IO.HVFS.Utils",
          "name": "recurseDirStat",
          "normalized": "a-\u003eFilePath-\u003eIO[(FilePath,HVFSStatEncap)]",
          "package": "MissingH",
          "partial": "Dir Stat",
          "signature": "a-\u003eFilePath-\u003eIO[(FilePath,HVFSStatEncap)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:recurseDirStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a file or a directory.  If a directory, also removes all its\nchild files/directories.\n\u003c/p\u003e",
          "module": "[\"System.IO.HVFS.Utils\",\"System.Path\"]",
          "name": "recursiveRemove",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-HVFS-Utils.html#recursiveRemove",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:recursiveRemove\",\"http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:recursiveRemove\"]"
        },
        "index": {
          "description": "Removes file or directory If directory also removes all its child files directories",
          "hierarchy": "System IO HVFS Utils",
          "module": "System.IO.HVFS.Utils",
          "name": "recursiveRemove",
          "normalized": "a-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "Remove",
          "signature": "a-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:recursiveRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell Virtual FS -- generic support for real or virtual filesystem in Haskell\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004-2005 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThe idea of this module is to provide virtualization of filesystem calls.\nIn addition to the \"real\" system filesystem, you can also provide access\nto other, virtual, filesystems using the same set of calls.  Examples of\nsuch virtual filesystems might include a remote FTP server, WebDAV server,\na local Hashtable, a ConfigParser object, or any other data structure\nyou can represent as a tree of named nodes containing strings.\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eHVFS\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eHVFS\u003c/a\u003e\u003c/code\u003e \"handle\" (\u003ccode\u003e\u003ca\u003eHVFS\u003c/a\u003e\u003c/code\u003e instance) as its\nfirst parameter.  If you wish to operate on the standard system filesystem,\nyou can just use \u003ccode\u003e\u003ca\u003eSystemFS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003eMissingH.HVFS.IO.InstanceHelpers\u003c/a\u003e module contains some code to help\nyou make your own HVFS instances.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHVFSOpenable\u003c/a\u003e\u003c/code\u003e class works together with the \u003ca\u003eSystem.IO.HVIO\u003c/a\u003e module\nto provide a complete virtual filesystem and I/O model that allows you\nto open up virtual filesystem files and act upon them in a manner similar\nto standard Handles.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.HVFS",
          "name": "HVFS",
          "package": "MissingH",
          "source": "src/System-IO-HVFS.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell Virtual FS generic support for real or virtual filesystem in Haskell Copyright John Goerzen jgoerzen@complete.org The idea of this module is to provide virtualization of filesystem calls In addition to the real system filesystem you can also provide access to other virtual filesystems using the same set of calls Examples of such virtual filesystems might include remote FTP server WebDAV server local Hashtable ConfigParser object or any other data structure you can represent as tree of named nodes containing strings Each HVFS function takes HVFS handle HVFS instance as its first parameter If you wish to operate on the standard system filesystem you can just use SystemFS The MissingH.HVFS.IO.InstanceHelpers module contains some code to help you make your own HVFS instances The HVFSOpenable class works together with the System.IO.HVIO module to provide complete virtual filesystem and model that allows you to open up virtual filesystem files and act upon them in manner similar to standard Handles",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "HVFS",
          "package": "MissingH",
          "partial": "HVFS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "DeviceID",
          "package": "MissingH",
          "type": "type"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "DeviceID",
          "package": "MissingH",
          "partial": "Device ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:DeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "EpochTime",
          "package": "MissingH",
          "type": "type"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "EpochTime",
          "package": "MissingH",
          "partial": "Epoch Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:EpochTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "FileID",
          "package": "MissingH",
          "type": "type"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "FileID",
          "package": "MissingH",
          "partial": "File ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:FileID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "FileMode",
          "package": "MissingH",
          "type": "type"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "FileMode",
          "package": "MissingH",
          "partial": "File Mode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:FileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "FileOffset",
          "package": "MissingH",
          "type": "type"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "FileOffset",
          "package": "MissingH",
          "partial": "File Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:FileOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "FilePath",
          "package": "MissingH",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "FilePath",
          "package": "MissingH",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "GroupID",
          "package": "MissingH",
          "type": "type"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "GroupID",
          "package": "MissingH",
          "partial": "Group ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:GroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main HVFS class.\n\u003c/p\u003e\u003cp\u003eDefault implementations of these functions are provided:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evGetModificationTime\u003c/a\u003e\u003c/code\u003e -- implemented in terms of \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evRaiseError\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evDoesFileExist\u003c/a\u003e\u003c/code\u003e -- implemented in terms of \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evDoesDirectoryExist\u003c/a\u003e\u003c/code\u003e -- implemented in terms of \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evDoesExist\u003c/a\u003e\u003c/code\u003e -- implemented in terms of \u003ccode\u003e\u003ca\u003evGetSymbolicLinkStatus\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evGetSymbolicLinkStatus\u003c/a\u003e\u003c/code\u003e -- set to call \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDefault implementations of all other functions\nwill generate an isIllegalOperation error, since they are assumed to be\nun-implemented.\n\u003c/p\u003e\u003cp\u003eYou should always provide at least a \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e call, and almost\ncertainly several of the others.\n\u003c/p\u003e\u003cp\u003eMost of these functions correspond to functions in System.Directory or\nSystem.Posix.Files.  Please see detailed documentation on them there.\n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "HVFS",
          "package": "MissingH",
          "source": "src/System-IO-HVFS.html#HVFS",
          "type": "class"
        },
        "index": {
          "description": "The main HVFS class Default implementations of these functions are provided vGetModificationTime implemented in terms of vGetFileStatus vRaiseError vDoesFileExist implemented in terms of vGetFileStatus vDoesDirectoryExist implemented in terms of vGetFileStatus vDoesExist implemented in terms of vGetSymbolicLinkStatus vGetSymbolicLinkStatus set to call vGetFileStatus Default implementations of all other functions will generate an isIllegalOperation error since they are assumed to be un-implemented You should always provide at least vGetFileStatus call and almost certainly several of the others Most of these functions correspond to functions in System.Directory or System.Posix.Files Please see detailed documentation on them there",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "HVFS",
          "package": "MissingH",
          "partial": "HVFS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eHVFSStatEncap\u003c/a\u003e\u003c/code\u003e, but for \u003ccode\u003e\u003ca\u003evOpen\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "HVFSOpenEncap",
          "package": "MissingH",
          "source": "src/System-IO-HVFS.html#HVFSOpenEncap",
          "type": "data"
        },
        "index": {
          "description": "Similar to HVFSStatEncap but for vOpen result",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "HVFSOpenEncap",
          "package": "MissingH",
          "partial": "HVFSOpen Encap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFSOpenEncap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes that can open a HVIO object should be instances of this class.\nYou need only implement \u003ccode\u003e\u003ca\u003evOpen\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "HVFSOpenable",
          "package": "MissingH",
          "source": "src/System-IO-HVFS.html#HVFSOpenable",
          "type": "class"
        },
        "index": {
          "description": "Types that can open HVIO object should be instances of this class You need only implement vOpen",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "HVFSOpenable",
          "package": "MissingH",
          "partial": "HVFSOpenable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFSOpenable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluating types of files and information about them.\n\u003c/p\u003e\u003cp\u003eThis corresponds to the System.Posix.Types.FileStatus type, and indeed,\nthat is one instance of this class.\n\u003c/p\u003e\u003cp\u003eInplementators must, at minimum, implement \u003ccode\u003e\u003ca\u003evIsDirectory\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003evIsRegularFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefault implementations of everything else are provided, returning\nreasonable values.\n\u003c/p\u003e\u003cp\u003eA default implementation of this is not currently present on Windows.\n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "HVFSStat",
          "package": "MissingH",
          "source": "src/System-IO-HVFS.html#HVFSStat",
          "type": "class"
        },
        "index": {
          "description": "Evaluating types of files and information about them This corresponds to the System.Posix.Types.FileStatus type and indeed that is one instance of this class Inplementators must at minimum implement vIsDirectory and vIsRegularFile Default implementations of everything else are provided returning reasonable values default implementation of this is not currently present on Windows",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "HVFSStat",
          "package": "MissingH",
          "partial": "HVFSStat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFSStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulate a \u003ccode\u003e\u003ca\u003eHVFSStat\u003c/a\u003e\u003c/code\u003e result.  This is required due to Haskell\ntyping restrictions.  You can get at it with:\n\u003c/p\u003e\u003cpre\u003e case encap of\n    HVFSStatEncap x -\u003e -- now use x\n\u003c/pre\u003e",
          "module": "System.IO.HVFS",
          "name": "HVFSStatEncap",
          "package": "MissingH",
          "source": "src/System-IO-HVFS.html#HVFSStatEncap",
          "type": "data"
        },
        "index": {
          "description": "Encapsulate HVFSStat result This is required due to Haskell typing restrictions You can get at it with case encap of HVFSStatEncap now use",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "HVFSStatEncap",
          "package": "MissingH",
          "partial": "HVFSStat Encap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFSStatEncap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "IOMode",
          "package": "MissingH",
          "type": "data"
        },
        "index": {
          "description": "See openFile",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "IOMode",
          "package": "MissingH",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "LinkCount",
          "package": "MissingH",
          "type": "type"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "LinkCount",
          "package": "MissingH",
          "partial": "Link Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:LinkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "SystemFS",
          "package": "MissingH",
          "source": "src/System-IO-HVFS.html#SystemFS",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "SystemFS",
          "package": "MissingH",
          "partial": "System FS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:SystemFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "UserID",
          "package": "MissingH",
          "type": "type"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "UserID",
          "package": "MissingH",
          "partial": "User ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:UserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "HVFSOpenEncap",
          "package": "MissingH",
          "signature": "HVFSOpenEncap a",
          "source": "src/System-IO-HVFS.html#HVFSOpenEncap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "HVFSOpenEncap",
          "package": "MissingH",
          "partial": "HVFSOpen Encap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:HVFSOpenEncap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "HVFSStatEncap",
          "package": "MissingH",
          "signature": "HVFSStatEncap a",
          "source": "src/System-IO-HVFS.html#HVFSStatEncap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "HVFSStatEncap",
          "package": "MissingH",
          "partial": "HVFSStat Encap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:HVFSStatEncap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vAccessTime",
          "package": "MissingH",
          "signature": "a -\u003e EpochTime",
          "source": "src/System-IO-HVFS.html#vAccessTime",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vAccessTime",
          "normalized": "a-\u003eEpochTime",
          "package": "MissingH",
          "partial": "Access Time",
          "signature": "a-\u003eEpochTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vAccessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vCreateDirectory",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-HVFS.html#vCreateDirectory",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vCreateDirectory",
          "normalized": "a-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "Create Directory",
          "signature": "a-\u003eFilePath-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vCreateDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vCreateLink",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-HVFS.html#vCreateLink",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vCreateLink",
          "normalized": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "Create Link",
          "signature": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vCreateLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vCreateSymbolicLink",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-HVFS.html#vCreateSymbolicLink",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vCreateSymbolicLink",
          "normalized": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "Create Symbolic Link",
          "signature": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vCreateSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vDeviceID",
          "package": "MissingH",
          "signature": "a -\u003e DeviceID",
          "source": "src/System-IO-HVFS.html#vDeviceID",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vDeviceID",
          "normalized": "a-\u003eDeviceID",
          "package": "MissingH",
          "partial": "Device ID",
          "signature": "a-\u003eDeviceID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vDoesDirectoryExist",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO Bool",
          "source": "src/System-IO-HVFS.html#vDoesDirectoryExist",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vDoesDirectoryExist",
          "normalized": "a-\u003eFilePath-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Does Directory Exist",
          "signature": "a-\u003eFilePath-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vDoesDirectoryExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the file exists, regardless of what type it is.\n       This is even True if the given path is a broken symlink. \n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "vDoesExist",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO Bool",
          "source": "src/System-IO-HVFS.html#vDoesExist",
          "type": "method"
        },
        "index": {
          "description": "True if the file exists regardless of what type it is This is even True if the given path is broken symlink",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vDoesExist",
          "normalized": "a-\u003eFilePath-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Does Exist",
          "signature": "a-\u003eFilePath-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vDoesExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vDoesFileExist",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO Bool",
          "source": "src/System-IO-HVFS.html#vDoesFileExist",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vDoesFileExist",
          "normalized": "a-\u003eFilePath-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Does File Exist",
          "signature": "a-\u003eFilePath-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vDoesFileExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vFileGroup",
          "package": "MissingH",
          "signature": "a -\u003e GroupID",
          "source": "src/System-IO-HVFS.html#vFileGroup",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vFileGroup",
          "normalized": "a-\u003eGroupID",
          "package": "MissingH",
          "partial": "File Group",
          "signature": "a-\u003eGroupID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vFileID",
          "package": "MissingH",
          "signature": "a -\u003e FileID",
          "source": "src/System-IO-HVFS.html#vFileID",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vFileID",
          "normalized": "a-\u003eFileID",
          "package": "MissingH",
          "partial": "File ID",
          "signature": "a-\u003eFileID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefers to file permissions, NOT the st_mode field from stat(2) \n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "vFileMode",
          "package": "MissingH",
          "signature": "a -\u003e FileMode",
          "source": "src/System-IO-HVFS.html#vFileMode",
          "type": "method"
        },
        "index": {
          "description": "Refers to file permissions NOT the st mode field from stat",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vFileMode",
          "normalized": "a-\u003eFileMode",
          "package": "MissingH",
          "partial": "File Mode",
          "signature": "a-\u003eFileMode",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vFileOwner",
          "package": "MissingH",
          "signature": "a -\u003e UserID",
          "source": "src/System-IO-HVFS.html#vFileOwner",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vFileOwner",
          "normalized": "a-\u003eUserID",
          "package": "MissingH",
          "partial": "File Owner",
          "signature": "a-\u003eUserID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vFileSize",
          "package": "MissingH",
          "signature": "a -\u003e FileOffset",
          "source": "src/System-IO-HVFS.html#vFileSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vFileSize",
          "normalized": "a-\u003eFileOffset",
          "package": "MissingH",
          "partial": "File Size",
          "signature": "a-\u003eFileOffset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vGetCurrentDirectory",
          "package": "MissingH",
          "signature": "a -\u003e IO FilePath",
          "source": "src/System-IO-HVFS.html#vGetCurrentDirectory",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vGetCurrentDirectory",
          "normalized": "a-\u003eIO FilePath",
          "package": "MissingH",
          "partial": "Get Current Directory",
          "signature": "a-\u003eIO FilePath",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetCurrentDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vGetDirectoryContents",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO [FilePath]",
          "source": "src/System-IO-HVFS.html#vGetDirectoryContents",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vGetDirectoryContents",
          "normalized": "a-\u003eFilePath-\u003eIO[FilePath]",
          "package": "MissingH",
          "partial": "Get Directory Contents",
          "signature": "a-\u003eFilePath-\u003eIO[FilePath]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetDirectoryContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vGetFileStatus",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO HVFSStatEncap",
          "source": "src/System-IO-HVFS.html#vGetFileStatus",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vGetFileStatus",
          "normalized": "a-\u003eFilePath-\u003eIO HVFSStatEncap",
          "package": "MissingH",
          "partial": "Get File Status",
          "signature": "a-\u003eFilePath-\u003eIO HVFSStatEncap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetFileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vGetModificationTime",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO ClockTime",
          "source": "src/System-IO-HVFS.html#vGetModificationTime",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vGetModificationTime",
          "normalized": "a-\u003eFilePath-\u003eIO ClockTime",
          "package": "MissingH",
          "partial": "Get Modification Time",
          "signature": "a-\u003eFilePath-\u003eIO ClockTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetModificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vGetSymbolicLinkStatus",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO HVFSStatEncap",
          "source": "src/System-IO-HVFS.html#vGetSymbolicLinkStatus",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vGetSymbolicLinkStatus",
          "normalized": "a-\u003eFilePath-\u003eIO HVFSStatEncap",
          "package": "MissingH",
          "partial": "Get Symbolic Link Status",
          "signature": "a-\u003eFilePath-\u003eIO HVFSStatEncap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetSymbolicLinkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vIsBlockDevice",
          "package": "MissingH",
          "signature": "a -\u003e Bool",
          "source": "src/System-IO-HVFS.html#vIsBlockDevice",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vIsBlockDevice",
          "normalized": "a-\u003eBool",
          "package": "MissingH",
          "partial": "Is Block Device",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsBlockDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vIsCharacterDevice",
          "package": "MissingH",
          "signature": "a -\u003e Bool",
          "source": "src/System-IO-HVFS.html#vIsCharacterDevice",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vIsCharacterDevice",
          "normalized": "a-\u003eBool",
          "package": "MissingH",
          "partial": "Is Character Device",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsCharacterDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vIsDirectory",
          "package": "MissingH",
          "signature": "a -\u003e Bool",
          "source": "src/System-IO-HVFS.html#vIsDirectory",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vIsDirectory",
          "normalized": "a-\u003eBool",
          "package": "MissingH",
          "partial": "Is Directory",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vIsNamedPipe",
          "package": "MissingH",
          "signature": "a -\u003e Bool",
          "source": "src/System-IO-HVFS.html#vIsNamedPipe",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vIsNamedPipe",
          "normalized": "a-\u003eBool",
          "package": "MissingH",
          "partial": "Is Named Pipe",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsNamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vIsRegularFile",
          "package": "MissingH",
          "signature": "a -\u003e Bool",
          "source": "src/System-IO-HVFS.html#vIsRegularFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vIsRegularFile",
          "normalized": "a-\u003eBool",
          "package": "MissingH",
          "partial": "Is Regular File",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsRegularFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vIsSocket",
          "package": "MissingH",
          "signature": "a -\u003e Bool",
          "source": "src/System-IO-HVFS.html#vIsSocket",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vIsSocket",
          "normalized": "a-\u003eBool",
          "package": "MissingH",
          "partial": "Is Socket",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vIsSymbolicLink",
          "package": "MissingH",
          "signature": "a -\u003e Bool",
          "source": "src/System-IO-HVFS.html#vIsSymbolicLink",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vIsSymbolicLink",
          "normalized": "a-\u003eBool",
          "package": "MissingH",
          "partial": "Is Symbolic Link",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vLinkCount",
          "package": "MissingH",
          "signature": "a -\u003e LinkCount",
          "source": "src/System-IO-HVFS.html#vLinkCount",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vLinkCount",
          "normalized": "a-\u003eLinkCount",
          "package": "MissingH",
          "partial": "Link Count",
          "signature": "a-\u003eLinkCount",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vLinkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vModificationTime",
          "package": "MissingH",
          "signature": "a -\u003e EpochTime",
          "source": "src/System-IO-HVFS.html#vModificationTime",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vModificationTime",
          "normalized": "a-\u003eEpochTime",
          "package": "MissingH",
          "partial": "Modification Time",
          "signature": "a-\u003eEpochTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vModificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vOpen",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IOMode -\u003e IO HVFSOpenEncap",
          "source": "src/System-IO-HVFS.html#vOpen",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vOpen",
          "normalized": "a-\u003eFilePath-\u003eIOMode-\u003eIO HVFSOpenEncap",
          "package": "MissingH",
          "partial": "Open",
          "signature": "a-\u003eFilePath-\u003eIOMode-\u003eIO HVFSOpenEncap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vOpenBinaryFile",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IOMode -\u003e IO HVFSOpenEncap",
          "source": "src/System-IO-HVFS.html#vOpenBinaryFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vOpenBinaryFile",
          "normalized": "a-\u003eFilePath-\u003eIOMode-\u003eIO HVFSOpenEncap",
          "package": "MissingH",
          "partial": "Open Binary File",
          "signature": "a-\u003eFilePath-\u003eIOMode-\u003eIO HVFSOpenEncap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vOpenBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an error relating to actions on this class. \n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "vRaiseError",
          "package": "MissingH",
          "signature": "a -\u003e IOErrorType -\u003e String -\u003e Maybe FilePath -\u003e IO c",
          "source": "src/System-IO-HVFS.html#vRaiseError",
          "type": "method"
        },
        "index": {
          "description": "Raise an error relating to actions on this class",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vRaiseError",
          "normalized": "a-\u003eIOErrorType-\u003eString-\u003eMaybe FilePath-\u003eIO b",
          "package": "MissingH",
          "partial": "Raise Error",
          "signature": "a-\u003eIOErrorType-\u003eString-\u003eMaybe FilePath-\u003eIO c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRaiseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vReadFile",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO String",
          "source": "src/System-IO-HVFS.html#vReadFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vReadFile",
          "normalized": "a-\u003eFilePath-\u003eIO String",
          "package": "MissingH",
          "partial": "Read File",
          "signature": "a-\u003eFilePath-\u003eIO String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vReadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vReadSymbolicLink",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO FilePath",
          "source": "src/System-IO-HVFS.html#vReadSymbolicLink",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vReadSymbolicLink",
          "normalized": "a-\u003eFilePath-\u003eIO FilePath",
          "package": "MissingH",
          "partial": "Read Symbolic Link",
          "signature": "a-\u003eFilePath-\u003eIO FilePath",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vReadSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vRemoveDirectory",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-HVFS.html#vRemoveDirectory",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vRemoveDirectory",
          "normalized": "a-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "Remove Directory",
          "signature": "a-\u003eFilePath-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRemoveDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vRemoveFile",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-HVFS.html#vRemoveFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vRemoveFile",
          "normalized": "a-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "Remove File",
          "signature": "a-\u003eFilePath-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRemoveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vRenameDirectory",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-HVFS.html#vRenameDirectory",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vRenameDirectory",
          "normalized": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "Rename Directory",
          "signature": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRenameDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vRenameFile",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-HVFS.html#vRenameFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vRenameFile",
          "normalized": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "Rename File",
          "signature": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRenameFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vSetCurrentDirectory",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-HVFS.html#vSetCurrentDirectory",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vSetCurrentDirectory",
          "normalized": "a-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "Set Current Directory",
          "signature": "a-\u003eFilePath-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vSetCurrentDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vSpecialDeviceID",
          "package": "MissingH",
          "signature": "a -\u003e DeviceID",
          "source": "src/System-IO-HVFS.html#vSpecialDeviceID",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vSpecialDeviceID",
          "normalized": "a-\u003eDeviceID",
          "package": "MissingH",
          "partial": "Special Device ID",
          "signature": "a-\u003eDeviceID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vSpecialDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vStatusChangeTime",
          "package": "MissingH",
          "signature": "a -\u003e EpochTime",
          "source": "src/System-IO-HVFS.html#vStatusChangeTime",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vStatusChangeTime",
          "normalized": "a-\u003eEpochTime",
          "package": "MissingH",
          "partial": "Status Change Time",
          "signature": "a-\u003eEpochTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vStatusChangeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.HVFS",
          "name": "vWriteFile",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e String -\u003e IO ()",
          "source": "src/System-IO-HVFS.html#vWriteFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "vWriteFile",
          "normalized": "a-\u003eFilePath-\u003eString-\u003eIO()",
          "package": "MissingH",
          "partial": "Write File",
          "signature": "a-\u003eFilePath-\u003eString-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vWriteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewithStat\u003c/a\u003e\u003c/code\u003e, but for the \u003ccode\u003e\u003ca\u003evOpen\u003c/a\u003e\u003c/code\u003e result. \n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "withOpen",
          "package": "MissingH",
          "signature": "a -\u003e b) -\u003e b",
          "source": "src/System-IO-HVFS.html#withOpen",
          "type": "function"
        },
        "index": {
          "description": "Similar to withStat but for the vOpen result",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "withOpen",
          "normalized": "a-\u003eb)-\u003eb",
          "package": "MissingH",
          "partial": "Open",
          "signature": "a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:withOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for working with stat -- takes a stat result\nand a function that uses it, and returns the result. \n\u003c/p\u003e\u003cp\u003eHere is an example from the HVFS source:\n\u003c/p\u003e\u003cpre\u003e    vGetModificationTime fs fp = \n       do s \u003c- vGetFileStatus fs fp\n          return $ epochToClockTime (withStat s vModificationTime)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eepochToClockTime\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "System.IO.HVFS",
          "name": "withStat",
          "package": "MissingH",
          "signature": "a -\u003e b) -\u003e b",
          "source": "src/System-IO-HVFS.html#withStat",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for working with stat takes stat result and function that uses it and returns the result Here is an example from the HVFS source vGetModificationTime fs fp do vGetFileStatus fs fp return epochToClockTime withStat vModificationTime See epochToClockTime for more information",
          "hierarchy": "System IO HVFS",
          "module": "System.IO.HVFS",
          "name": "withStat",
          "normalized": "a-\u003eb)-\u003eb",
          "package": "MissingH",
          "partial": "Stat",
          "signature": "a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:withStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell Virtual I/O -- a system to increase the flexibility of input and\noutput in Haskell\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004-2005 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eHVIO provides the following general features:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The ability to use a single set of functions on various different\n   types of objects, including standard Handles, in-memory buffers,\n   compressed files, network data streams, etc.\n\u003c/li\u003e\u003cli\u003e The ability to transparently add filters to the I/O process.\n   These filters could include things such as character set conversions,\n   compression or decompression of a data stream, and more.\n\u003c/li\u003e\u003cli\u003e The ability to define new objects that have the properties\n   of I/O objects and can be used interchangably with them.\n\u003c/li\u003e\u003cli\u003e Specification compatibility with, and complete support for,\n   existing I/O on Handles.\n\u003c/li\u003e\u003cli\u003e Provide easier unit testing capabilities for I/O actions\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHVIO defines several basic type classes that you can use.  You will mostly\nbe interested in \u003ccode\u003e\u003ca\u003eHVIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt's trivial to adapt old code to work with HVIO.  For instance, consider\nthis example of old and new code:\n\u003c/p\u003e\u003cpre\u003eprintMsg :: Handle -\u003e String -\u003e IO ()\nprintMsg h msg = hPutStr h (\"msg: \" ++ msg)\n\u003c/pre\u003e\u003cp\u003eAnd now, the new way:\n\u003c/p\u003e\u003cpre\u003eprintMsg :: HVIO h =\u003e h -\u003e String -\u003e IO ()\nprintMsg h msg = vPutStr h (\"msg: \" ++ msg)\n\u003c/pre\u003e\u003cp\u003eThere are several points to note about this conversion:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The new method can still accept a Handle in exactly the same way as\n   the old method.  Changing your functions to use HVIO will require no\n   changes from functions that call them with Handles.\n\u003c/li\u003e\u003cli\u003e Most \"h\" functions have equivolent \"v\" functions that operate\n   on HVIO classes instead of the more specific Handle.  The \"v\" functions\n   behave identically to the \"h\" functions whenever possible.\n\u003c/li\u003e\u003cli\u003e There is no equivolent of \"openFile\" in any HVIO class.  You must\n   create your Handle (or other HVIO object) using normal means.\n   This is because the creation is so different that it cannot be standardized.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn addition to Handle, there are several pre-defined classes for your use.\n\u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e is a particularly interesting one.  At creation time, you pass\nit a String.  Its contents are read lazily whenever a read call is made.  It\ncan be used, therefore, to implement filters (simply initialize it with the\nresult from, say, a map over hGetContents from another HVIO object), codecs,\nand simple I/O testing.  Because it is lazy, it need not hold the entire\nstring in memory.  You can create a \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e with a call to\n\u003ccode\u003e\u003ca\u003enewStreamReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e is a similar class, but with a different purpose.  It provides\na full interface like Handle (it implements \u003ccode\u003eHVIOReader\u003c/code\u003e, \u003ccode\u003eHVIOWriter\u003c/code\u003e,\nand \u003ccode\u003eHVIOSeeker\u003c/code\u003e).  However, it maintains an in-memory buffer with the\ncontents of the file, rather than an actual on-disk file.  You can access\nthe entire contents of this buffer at any time.  This can be quite useful\nfor testing I/O code, or for cases where existing APIs use I/O, but you\nprefer a String representation.  You can create a \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e with a call\nto \u003ccode\u003e\u003ca\u003enewMemoryBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFinally, there are pipes.  These pipes are analogous to the Unix\npipes that are available from System.Posix, but don't require Unix and work\nonly in Haskell.  When you create a pipe, you actually get two HVIO objects:\na \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e.  You must use the \u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e in one\nthread and the \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e in another thread.  Data that's written to the\n\u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e will then be available for reading with the \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e.  The\npipes are implemented completely with existing Haskell threading primitives,\nand require no special operating system support.  Unlike Unix pipes, these\npipes cannot be used across a fork().  Also unlike Unix pipes, these pipes\nare portable and interact well with Haskell threads.  A new pipe can be created\nwith a call to \u003ccode\u003e\u003ca\u003enewHVIOPipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTogether with \u003ca\u003eSystem.IO.HVFS\u003c/a\u003e, this module is part of a complete\nvirtual filesystem solution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.HVIO",
          "name": "HVIO",
          "package": "MissingH",
          "source": "src/System-IO-HVIO.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell Virtual system to increase the flexibility of input and output in Haskell Copyright John Goerzen jgoerzen@complete.org HVIO provides the following general features The ability to use single set of functions on various different types of objects including standard Handles in-memory buffers compressed files network data streams etc The ability to transparently add filters to the process These filters could include things such as character set conversions compression or decompression of data stream and more The ability to define new objects that have the properties of objects and can be used interchangably with them Specification compatibility with and complete support for existing on Handles Provide easier unit testing capabilities for actions HVIO defines several basic type classes that you can use You will mostly be interested in HVIO It trivial to adapt old code to work with HVIO For instance consider this example of old and new code printMsg Handle String IO printMsg msg hPutStr msg msg And now the new way printMsg HVIO String IO printMsg msg vPutStr msg msg There are several points to note about this conversion The new method can still accept Handle in exactly the same way as the old method Changing your functions to use HVIO will require no changes from functions that call them with Handles Most functions have equivolent functions that operate on HVIO classes instead of the more specific Handle The functions behave identically to the functions whenever possible There is no equivolent of openFile in any HVIO class You must create your Handle or other HVIO object using normal means This is because the creation is so different that it cannot be standardized In addition to Handle there are several pre-defined classes for your use StreamReader is particularly interesting one At creation time you pass it String Its contents are read lazily whenever read call is made It can be used therefore to implement filters simply initialize it with the result from say map over hGetContents from another HVIO object codecs and simple testing Because it is lazy it need not hold the entire string in memory You can create StreamReader with call to newStreamReader MemoryBuffer is similar class but with different purpose It provides full interface like Handle it implements HVIOReader HVIOWriter and HVIOSeeker However it maintains an in-memory buffer with the contents of the file rather than an actual on-disk file You can access the entire contents of this buffer at any time This can be quite useful for testing code or for cases where existing APIs use but you prefer String representation You can create MemoryBuffer with call to newMemoryBuffer Finally there are pipes These pipes are analogous to the Unix pipes that are available from System.Posix but don require Unix and work only in Haskell When you create pipe you actually get two HVIO objects PipeReader and PipeWriter You must use the PipeWriter in one thread and the PipeReader in another thread Data that written to the PipeWriter will then be available for reading with the PipeReader The pipes are implemented completely with existing Haskell threading primitives and require no special operating system support Unlike Unix pipes these pipes cannot be used across fork Also unlike Unix pipes these pipes are portable and interact well with Haskell threads new pipe can be created with call to newHVIOPipe Together with System.IO.HVFS this module is part of complete virtual filesystem solution",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "HVIO",
          "package": "MissingH",
          "partial": "HVIO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the generic I/O support class.  All objects that are to be used\nin the HVIO system must provide an instance of \u003ccode\u003e\u003ca\u003eHVIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFunctions in this class provide an interface with the same specification as\nthe similar functions in System.IO.  Please refer to that documentation\nfor a more complete specification than is provided here.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eHVIO\u003c/a\u003e\u003c/code\u003e must provide \u003ccode\u003e\u003ca\u003evClose\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evIsEOF\u003c/a\u003e\u003c/code\u003e, and either\n\u003ccode\u003e\u003ca\u003evIsOpen\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evIsClosed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eImplementators of readable objects must provide at least \u003ccode\u003e\u003ca\u003evGetChar\u003c/a\u003e\u003c/code\u003e\nand \u003ccode\u003e\u003ca\u003evIsReadable\u003c/a\u003e\u003c/code\u003e.\nAn implementation of \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e is also highly suggested, since\nthe default cannot implement proper partial closing semantics.\n\u003c/p\u003e\u003cp\u003eImplementators of writable objects must provide at least \u003ccode\u003e\u003ca\u003evPutChar\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003evIsWritable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eImplementators of seekable objects must provide at least\n\u003ccode\u003e\u003ca\u003evIsSeekable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evTell\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003evSeek\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "HVIO",
          "package": "MissingH",
          "source": "src/System-IO-HVIO.html#HVIO",
          "type": "class"
        },
        "index": {
          "description": "This is the generic support class All objects that are to be used in the HVIO system must provide an instance of HVIO Functions in this class provide an interface with the same specification as the similar functions in System.IO Please refer to that documentation for more complete specification than is provided here Instances of HVIO must provide vClose vIsEOF and either vIsOpen or vIsClosed Implementators of readable objects must provide at least vGetChar and vIsReadable An implementation of vGetContents is also highly suggested since the default cannot implement proper partial closing semantics Implementators of writable objects must provide at least vPutChar and vIsWritable Implementators of seekable objects must provide at least vIsSeekable vTell and vSeek",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "HVIO",
          "package": "MissingH",
          "partial": "HVIO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:HVIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e simulates true I/O, but uses an in-memory buffer instead\nof on-disk storage.\n\u003c/p\u003e\u003cp\u003eIt provides\na full interface like Handle (it implements \u003ccode\u003eHVIOReader\u003c/code\u003e, \u003ccode\u003eHVIOWriter\u003c/code\u003e,\nand \u003ccode\u003eHVIOSeeker\u003c/code\u003e).  However, it maintains an in-memory buffer with the\ncontents of the file, rather than an actual on-disk file.  You can access\nthe entire contents of this buffer at any time.  This can be quite useful\nfor testing I/O code, or for cases where existing APIs use I/O, but you\nprefer a String representation.  You can create a \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e with a call\nto \u003ccode\u003e\u003ca\u003enewMemoryBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe present \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e implementation is rather inefficient, particularly\nwhen reading towards the end of large files.  It's best used for smallish\ndata storage.  This problem will be fixed eventually.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "MemoryBuffer",
          "package": "MissingH",
          "source": "src/System-IO-HVIO.html#MemoryBuffer",
          "type": "data"
        },
        "index": {
          "description": "MemoryBuffer simulates true but uses an in-memory buffer instead of on-disk storage It provides full interface like Handle it implements HVIOReader HVIOWriter and HVIOSeeker However it maintains an in-memory buffer with the contents of the file rather than an actual on-disk file You can access the entire contents of this buffer at any time This can be quite useful for testing code or for cases where existing APIs use but you prefer String representation You can create MemoryBuffer with call to newMemoryBuffer The present MemoryBuffer implementation is rather inefficient particularly when reading towards the end of large files It best used for smallish data storage This problem will be fixed eventually",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "MemoryBuffer",
          "package": "MissingH",
          "partial": "Memory Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:MemoryBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reading side of a Haskell pipe.  Please see \u003ccode\u003e\u003ca\u003enewHVIOPipe\u003c/a\u003e\u003c/code\u003e for more\ndetails. \n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "PipeReader",
          "package": "MissingH",
          "source": "src/System-IO-HVIO.html#PipeReader",
          "type": "data"
        },
        "index": {
          "description": "The reading side of Haskell pipe Please see newHVIOPipe for more details",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "PipeReader",
          "package": "MissingH",
          "partial": "Pipe Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:PipeReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe writing side of a Haskell pipe.  Please see \u003ccode\u003e\u003ca\u003enewHVIOPipe\u003c/a\u003e\u003c/code\u003e for more\ndetails. \n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "PipeWriter",
          "package": "MissingH",
          "source": "src/System-IO-HVIO.html#PipeWriter",
          "type": "data"
        },
        "index": {
          "description": "The writing side of Haskell pipe Please see newHVIOPipe for more details",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "PipeWriter",
          "package": "MissingH",
          "partial": "Pipe Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:PipeWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimulate I/O based on a string buffer.\n\u003c/p\u003e\u003cp\u003eWhen a \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e is created, it is initialized based on the contents of\na \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  Its contents are read lazily whenever a request is made to read\nsomething from the \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e.    It\ncan be used, therefore, to implement filters (simply initialize it with the\nresult from, say, a map over hGetContents from another HVIO object), codecs,\nand simple I/O testing.  Because it is lazy, it need not hold the entire\nstring in memory.  You can create a \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e with a call to\n\u003ccode\u003e\u003ca\u003enewStreamReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "StreamReader",
          "package": "MissingH",
          "source": "src/System-IO-HVIO.html#StreamReader",
          "type": "data"
        },
        "index": {
          "description": "Simulate based on string buffer When StreamReader is created it is initialized based on the contents of String Its contents are read lazily whenever request is made to read something from the StreamReader It can be used therefore to implement filters simply initialize it with the result from say map over hGetContents from another HVIO object codecs and simple testing Because it is lazy it need not hold the entire string in memory You can create StreamReader with call to newStreamReader",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "StreamReader",
          "package": "MissingH",
          "partial": "Stream Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:StreamReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab the entire contents of the buffer as a string.\nUnlike \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e, this has no effect on the open status of the\nitem, the EOF status, or the current position of the file pointer. \n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "getMemoryBuffer",
          "package": "MissingH",
          "signature": "MemoryBuffer -\u003e IO String",
          "source": "src/System-IO-HVIO.html#getMemoryBuffer",
          "type": "function"
        },
        "index": {
          "description": "Grab the entire contents of the buffer as string Unlike vGetContents this has no effect on the open status of the item the EOF status or the current position of the file pointer",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "getMemoryBuffer",
          "normalized": "MemoryBuffer-\u003eIO String",
          "package": "MissingH",
          "partial": "Memory Buffer",
          "signature": "MemoryBuffer-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:getMemoryBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault (no-op) memory buf close function. \n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "mbDefaultCloseFunc",
          "package": "MissingH",
          "signature": "String -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#mbDefaultCloseFunc",
          "type": "function"
        },
        "index": {
          "description": "Default no-op memory buf close function",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "mbDefaultCloseFunc",
          "normalized": "String-\u003eIO()",
          "package": "MissingH",
          "partial": "Default Close Func",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:mbDefaultCloseFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Haskell pipe.\n\u003c/p\u003e\u003cp\u003eThese pipes are analogous to the Unix\npipes that are available from System.Posix, but don't require Unix and work\nonly in Haskell.  When you create a pipe, you actually get two HVIO objects:\na \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e.  You must use the \u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e in one\nthread and the \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e in another thread.  Data that's written to the\n\u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e will then be available for reading with the \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e.  The\npipes are implemented completely with existing Haskell threading primitives,\nand require no special operating system support.  Unlike Unix pipes, these\npipes cannot be used across a fork().  Also unlike Unix pipes, these pipes\nare portable and interact well with Haskell threads. \n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "newHVIOPipe",
          "package": "MissingH",
          "signature": "IO (PipeReader, PipeWriter)",
          "source": "src/System-IO-HVIO.html#newHVIOPipe",
          "type": "function"
        },
        "index": {
          "description": "Create Haskell pipe These pipes are analogous to the Unix pipes that are available from System.Posix but don require Unix and work only in Haskell When you create pipe you actually get two HVIO objects PipeReader and PipeWriter You must use the PipeWriter in one thread and the PipeReader in another thread Data that written to the PipeWriter will then be available for reading with the PipeReader The pipes are implemented completely with existing Haskell threading primitives and require no special operating system support Unlike Unix pipes these pipes cannot be used across fork Also unlike Unix pipes these pipes are portable and interact well with Haskell threads",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "newHVIOPipe",
          "normalized": "IO(PipeReader,PipeWriter)",
          "package": "MissingH",
          "partial": "HVIOPipe",
          "signature": "IO(PipeReader,PipeWriter)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:newHVIOPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e instance.  The buffer is initialized\nto the value passed, and the pointer is placed at the beginning of the file.\n\u003c/p\u003e\u003cp\u003eYou can put things in it by using the normal \u003ccode\u003e\u003ca\u003evPutStr\u003c/a\u003e\u003c/code\u003e calls, and reset to\nthe beginning by using the normal \u003ccode\u003e\u003ca\u003evRewind\u003c/a\u003e\u003c/code\u003e call.\n\u003c/p\u003e\u003cp\u003eThe function is called when \u003ccode\u003e\u003ca\u003evClose\u003c/a\u003e\u003c/code\u003e is called, and is passed the contents of\nthe buffer at close time.  You can use \u003ccode\u003e\u003ca\u003embDefaultCloseFunc\u003c/a\u003e\u003c/code\u003e if you don't want to\ndo anything.\n\u003c/p\u003e\u003cp\u003eTo create an empty buffer, pass the initial value \u003ccode\u003e\"\"\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "newMemoryBuffer",
          "package": "MissingH",
          "signature": "String-\u003e (String -\u003e IO ())-\u003e IO MemoryBuffer",
          "type": "function"
        },
        "index": {
          "description": "Create new MemoryBuffer instance The buffer is initialized to the value passed and the pointer is placed at the beginning of the file You can put things in it by using the normal vPutStr calls and reset to the beginning by using the normal vRewind call The function is called when vClose is called and is passed the contents of the buffer at close time You can use mbDefaultCloseFunc if you don want to do anything To create an empty buffer pass the initial value",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "newMemoryBuffer",
          "normalized": "String-\u003e(String-\u003eIO())-\u003eIO MemoryBuffer",
          "package": "MissingH",
          "partial": "Memory Buffer",
          "signature": "String-\u003e(String-\u003eIO())-\u003eIO MemoryBuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:newMemoryBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e object. \n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "newStreamReader",
          "package": "MissingH",
          "signature": "String-\u003e IO StreamReader",
          "type": "function"
        },
        "index": {
          "description": "Create new StreamReader object",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "newStreamReader",
          "normalized": "String-\u003eIO StreamReader",
          "package": "MissingH",
          "partial": "Stream Reader",
          "signature": "String-\u003eIO StreamReader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:newStreamReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a file\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vClose",
          "package": "MissingH",
          "signature": "a -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vClose",
          "type": "method"
        },
        "index": {
          "description": "Close file",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vClose",
          "normalized": "a-\u003eIO()",
          "package": "MissingH",
          "partial": "Close",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlush any output buffers.\n Note: implementations should assure that a vFlush is automatically\n performed\n on file close, if necessary to ensure all data sent is written.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vFlush",
          "package": "MissingH",
          "signature": "a -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vFlush",
          "type": "method"
        },
        "index": {
          "description": "Flush any output buffers Note implementations should assure that vFlush is automatically performed on file close if necessary to ensure all data sent is written",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vFlush",
          "normalized": "a-\u003eIO()",
          "package": "MissingH",
          "partial": "Flush",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary input: read the specified number of octets from the\n specified buffer location, continuing to read\n until it either consumes that much data or EOF is encountered.\n Returns the number of octets actually read.  EOF errors are never\n raised; fewer bytes than requested are returned on EOF.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vGetBuf",
          "package": "MissingH",
          "signature": "a -\u003e Ptr b -\u003e Int -\u003e IO Int",
          "source": "src/System-IO-HVIO.html#vGetBuf",
          "type": "method"
        },
        "index": {
          "description": "Binary input read the specified number of octets from the specified buffer location continuing to read until it either consumes that much data or EOF is encountered Returns the number of octets actually read EOF errors are never raised fewer bytes than requested are returned on EOF",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vGetBuf",
          "normalized": "a-\u003ePtr b-\u003eInt-\u003eIO Int",
          "package": "MissingH",
          "partial": "Get Buf",
          "signature": "a-\u003ePtr b-\u003eInt-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet buffering; the default action always returns NoBuffering.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vGetBuffering",
          "package": "MissingH",
          "signature": "a -\u003e IO BufferMode",
          "source": "src/System-IO-HVIO.html#vGetBuffering",
          "type": "method"
        },
        "index": {
          "description": "Get buffering the default action always returns NoBuffering",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vGetBuffering",
          "normalized": "a-\u003eIO BufferMode",
          "package": "MissingH",
          "partial": "Get Buffering",
          "signature": "a-\u003eIO BufferMode",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one character\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vGetChar",
          "package": "MissingH",
          "signature": "a -\u003e IO Char",
          "source": "src/System-IO-HVIO.html#vGetChar",
          "type": "method"
        },
        "index": {
          "description": "Read one character",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vGetChar",
          "normalized": "a-\u003eIO Char",
          "package": "MissingH",
          "partial": "Get Char",
          "signature": "a-\u003eIO Char",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the remaining contents.  Please note that as a user of this\n       function, the same partial-closing semantics as are used in the\n       standard \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e are \u003cem\u003eencouraged\u003c/em\u003e from implementators,\n       but are not \u003cem\u003erequired\u003c/em\u003e.  That means that, for instance,\n       a \u003ccode\u003e\u003ca\u003evGetChar\u003c/a\u003e\u003c/code\u003e after a \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e may return some undefined\n       result instead of the error you would normally get.  You should\n       use caution to make sure your code doesn't fall into that trap,\n       or make sure to test your code with Handle or one of the\n       default instances defined in this module.  Also, some implementations\n       may essentially provide a complete close after a call to \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e.\n       The bottom line: after a call to \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e, you should do nothing\n       else with the object save closing it with \u003ccode\u003e\u003ca\u003evClose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor implementators, you are highly encouraged to provide a correct\n       implementation. \n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vGetContents",
          "package": "MissingH",
          "signature": "a -\u003e IO String",
          "source": "src/System-IO-HVIO.html#vGetContents",
          "type": "method"
        },
        "index": {
          "description": "Get the remaining contents Please note that as user of this function the same partial-closing semantics as are used in the standard hGetContents are encouraged from implementators but are not required That means that for instance vGetChar after vGetContents may return some undefined result instead of the error you would normally get You should use caution to make sure your code doesn fall into that trap or make sure to test your code with Handle or one of the default instances defined in this module Also some implementations may essentially provide complete close after call to vGetContents The bottom line after call to vGetContents you should do nothing else with the object save closing it with vClose For implementators you are highly encouraged to provide correct implementation",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vGetContents",
          "normalized": "a-\u003eIO String",
          "package": "MissingH",
          "partial": "Get Contents",
          "signature": "a-\u003eIO String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the filename/object/whatever that this corresponds to.\n May be Nothing.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vGetFP",
          "package": "MissingH",
          "signature": "a -\u003e IO (Maybe FilePath)",
          "source": "src/System-IO-HVIO.html#vGetFP",
          "type": "method"
        },
        "index": {
          "description": "Get the filename object whatever that this corresponds to May be Nothing",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vGetFP",
          "normalized": "a-\u003eIO(Maybe FilePath)",
          "package": "MissingH",
          "partial": "Get FP",
          "signature": "a-\u003eIO(Maybe FilePath)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one line\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vGetLine",
          "package": "MissingH",
          "signature": "a -\u003e IO String",
          "source": "src/System-IO-HVIO.html#vGetLine",
          "type": "method"
        },
        "index": {
          "description": "Read one line",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vGetLine",
          "normalized": "a-\u003eIO String",
          "package": "MissingH",
          "partial": "Get Line",
          "signature": "a-\u003eIO String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a file is closed\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vIsClosed",
          "package": "MissingH",
          "signature": "a -\u003e IO Bool",
          "source": "src/System-IO-HVIO.html#vIsClosed",
          "type": "method"
        },
        "index": {
          "description": "Test if file is closed",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vIsClosed",
          "normalized": "a-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Is Closed",
          "signature": "a-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not we're at EOF.  This may raise on exception\n on some items, most notably write-only Handles such as stdout.\n In general, this is most reliable on items opened for reading.\n vIsEOF implementations must implicitly call vTestOpen.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vIsEOF",
          "package": "MissingH",
          "signature": "a -\u003e IO Bool",
          "source": "src/System-IO-HVIO.html#vIsEOF",
          "type": "method"
        },
        "index": {
          "description": "Whether or not we re at EOF This may raise on exception on some items most notably write-only Handles such as stdout In general this is most reliable on items opened for reading vIsEOF implementations must implicitly call vTestOpen",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vIsEOF",
          "normalized": "a-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Is EOF",
          "signature": "a-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a file is open\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vIsOpen",
          "package": "MissingH",
          "signature": "a -\u003e IO Bool",
          "source": "src/System-IO-HVIO.html#vIsOpen",
          "type": "method"
        },
        "index": {
          "description": "Test if file is open",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vIsOpen",
          "normalized": "a-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Is Open",
          "signature": "a-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether a particular item is available for reading.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vIsReadable",
          "package": "MissingH",
          "signature": "a -\u003e IO Bool",
          "source": "src/System-IO-HVIO.html#vIsReadable",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether particular item is available for reading",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vIsReadable",
          "normalized": "a-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Is Readable",
          "signature": "a-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether this instance supports seeking.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vIsSeekable",
          "package": "MissingH",
          "signature": "a -\u003e IO Bool",
          "source": "src/System-IO-HVIO.html#vIsSeekable",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether this instance supports seeking",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vIsSeekable",
          "normalized": "a-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Is Seekable",
          "signature": "a-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsSeekable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not this particular object supports writing.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vIsWritable",
          "package": "MissingH",
          "signature": "a -\u003e IO Bool",
          "source": "src/System-IO-HVIO.html#vIsWritable",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether or not this particular object supports writing",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vIsWritable",
          "normalized": "a-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Is Writable",
          "signature": "a-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an IOError.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vMkIOError",
          "package": "MissingH",
          "signature": "a -\u003e IOErrorType -\u003e String -\u003e Maybe FilePath -\u003e IOError",
          "source": "src/System-IO-HVIO.html#vMkIOError",
          "type": "method"
        },
        "index": {
          "description": "Make an IOError",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vMkIOError",
          "normalized": "a-\u003eIOErrorType-\u003eString-\u003eMaybe FilePath-\u003eIOError",
          "package": "MissingH",
          "partial": "Mk IOError",
          "signature": "a-\u003eIOErrorType-\u003eString-\u003eMaybe FilePath-\u003eIOError",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vMkIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string representation of the argument, plus a newline.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vPrint",
          "package": "MissingH",
          "signature": "a -\u003e b -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vPrint",
          "type": "method"
        },
        "index": {
          "description": "Write string representation of the argument plus newline",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vPrint",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "MissingH",
          "partial": "Print",
          "signature": "a-\u003eb-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary output: write the specified number of octets from the specified\n buffer location.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vPutBuf",
          "package": "MissingH",
          "signature": "a -\u003e Ptr b -\u003e Int -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vPutBuf",
          "type": "method"
        },
        "index": {
          "description": "Binary output write the specified number of octets from the specified buffer location",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vPutBuf",
          "normalized": "a-\u003ePtr b-\u003eInt-\u003eIO()",
          "package": "MissingH",
          "partial": "Put Buf",
          "signature": "a-\u003ePtr b-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPutBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite one character\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vPutChar",
          "package": "MissingH",
          "signature": "a -\u003e Char -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vPutChar",
          "type": "method"
        },
        "index": {
          "description": "Write one character",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vPutChar",
          "normalized": "a-\u003eChar-\u003eIO()",
          "package": "MissingH",
          "partial": "Put Char",
          "signature": "a-\u003eChar-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vPutStr",
          "package": "MissingH",
          "signature": "a -\u003e String -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vPutStr",
          "type": "method"
        },
        "index": {
          "description": "Write string",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vPutStr",
          "normalized": "a-\u003eString-\u003eIO()",
          "package": "MissingH",
          "partial": "Put Str",
          "signature": "a-\u003eString-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string with newline character after it\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vPutStrLn",
          "package": "MissingH",
          "signature": "a -\u003e String -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vPutStrLn",
          "type": "method"
        },
        "index": {
          "description": "Write string with newline character after it",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vPutStrLn",
          "normalized": "a-\u003eString-\u003eIO()",
          "package": "MissingH",
          "partial": "Put Str Ln",
          "signature": "a-\u003eString-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether at least one item is ready for reading.\n This will always be True for a great many implementations.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vReady",
          "package": "MissingH",
          "signature": "a -\u003e IO Bool",
          "source": "src/System-IO-HVIO.html#vReady",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether at least one item is ready for reading This will always be True for great many implementations",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vReady",
          "normalized": "a-\u003eIO Bool",
          "package": "MissingH",
          "partial": "Ready",
          "signature": "a-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to reset the file pointer to the beginning\n of the file.  A call to \u003ccode\u003evRewind h\u003c/code\u003e is the\n same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003evSeek\u003c/a\u003e\u003c/code\u003e h AbsoluteSeek 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vRewind",
          "package": "MissingH",
          "signature": "a -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vRewind",
          "type": "method"
        },
        "index": {
          "description": "Convenience function to reset the file pointer to the beginning of the file call to vRewind is the same as vSeek AbsoluteSeek",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vRewind",
          "normalized": "a-\u003eIO()",
          "package": "MissingH",
          "partial": "Rewind",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vRewind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeek to a specific location.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vSeek",
          "package": "MissingH",
          "signature": "a -\u003e SeekMode -\u003e Integer -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vSeek",
          "type": "method"
        },
        "index": {
          "description": "Seek to specific location",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vSeek",
          "normalized": "a-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "package": "MissingH",
          "partial": "Seek",
          "signature": "a-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet buffering; the default action is a no-op.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vSetBuffering",
          "package": "MissingH",
          "signature": "a -\u003e BufferMode -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vSetBuffering",
          "type": "method"
        },
        "index": {
          "description": "Set buffering the default action is no-op",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vSetBuffering",
          "normalized": "a-\u003eBufferMode-\u003eIO()",
          "package": "MissingH",
          "partial": "Set Buffering",
          "signature": "a-\u003eBufferMode-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vSetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed show output.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vShow",
          "package": "MissingH",
          "signature": "a -\u003e IO String",
          "source": "src/System-IO-HVIO.html#vShow",
          "type": "method"
        },
        "index": {
          "description": "Detailed show output",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vShow",
          "normalized": "a-\u003eIO String",
          "package": "MissingH",
          "partial": "Show",
          "signature": "a-\u003eIO String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current position.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vTell",
          "package": "MissingH",
          "signature": "a -\u003e IO Integer",
          "source": "src/System-IO-HVIO.html#vTell",
          "type": "method"
        },
        "index": {
          "description": "Get the current position",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vTell",
          "normalized": "a-\u003eIO Integer",
          "package": "MissingH",
          "partial": "Tell",
          "signature": "a-\u003eIO Integer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an isEOFError if we're at EOF; returns nothing otherwise.\n If an implementation overrides the default, make sure that it\n calls vTestOpen at some point.  The default implementation is\n a wrapper around a call to \u003ccode\u003e\u003ca\u003evIsEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vTestEOF",
          "package": "MissingH",
          "signature": "a -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vTestEOF",
          "type": "method"
        },
        "index": {
          "description": "Throw an isEOFError if we re at EOF returns nothing otherwise If an implementation overrides the default make sure that it calls vTestOpen at some point The default implementation is wrapper around call to vIsEOF",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vTestEOF",
          "normalized": "a-\u003eIO()",
          "package": "MissingH",
          "partial": "Test EOF",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vTestEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an error if the file is not open.\n This is a new HVIO function and is implemented in terms of\n \u003ccode\u003e\u003ca\u003evIsOpen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vTestOpen",
          "package": "MissingH",
          "signature": "a -\u003e IO ()",
          "source": "src/System-IO-HVIO.html#vTestOpen",
          "type": "method"
        },
        "index": {
          "description": "Raise an error if the file is not open This is new HVIO function and is implemented in terms of vIsOpen",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vTestOpen",
          "normalized": "a-\u003eIO()",
          "package": "MissingH",
          "partial": "Test Open",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vTestOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an IOError.\n\u003c/p\u003e",
          "module": "System.IO.HVIO",
          "name": "vThrow",
          "package": "MissingH",
          "signature": "a -\u003e IOErrorType -\u003e IO b",
          "source": "src/System-IO-HVIO.html#vThrow",
          "type": "method"
        },
        "index": {
          "description": "Throw an IOError",
          "hierarchy": "System IO HVIO",
          "module": "System.IO.HVIO",
          "name": "vThrow",
          "normalized": "a-\u003eIOErrorType-\u003eIO b",
          "package": "MissingH",
          "partial": "Throw",
          "signature": "a-\u003eIOErrorType-\u003eIO b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOn Unix, exports System.Posix.Types and System.Posix.Files.\n\u003c/p\u003e\u003cp\u003eOn Windows, exports System.Posix.Types and \u003ca\u003eSystem.IO.WindowsCompat\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe result should be roughly the same set of defined variables and types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.PlafCompat",
          "name": "PlafCompat",
          "package": "MissingH",
          "source": "src/System-IO-PlafCompat.html",
          "type": "module"
        },
        "index": {
          "description": "On Unix exports System.Posix.Types and System.Posix.Files On Windows exports System.Posix.Types and System.IO.WindowsCompat The result should be roughly the same set of defined variables and types",
          "hierarchy": "System IO PlafCompat",
          "module": "System.IO.PlafCompat",
          "name": "PlafCompat",
          "package": "MissingH",
          "partial": "Plaf Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-PlafCompat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the null device.  NUL: on Windows, /dev/null everywhere else.\n\u003c/p\u003e",
          "module": "System.IO.PlafCompat",
          "name": "nullFileName",
          "package": "MissingH",
          "signature": "String",
          "source": "src/System-IO-PlafCompat.html#nullFileName",
          "type": "function"
        },
        "index": {
          "description": "The name of the null device NUL on Windows dev null everywhere else",
          "hierarchy": "System IO PlafCompat",
          "module": "System.IO.PlafCompat",
          "name": "nullFileName",
          "package": "MissingH",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-PlafCompat.html#v:nullFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide a stat-like structure for use in MissingH.  Especially\nuseful with HVFS and on Windows.  See also \u003ca\u003eSystem.IO.WindowsCompat\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.StatCompat",
          "name": "StatCompat",
          "package": "MissingH",
          "source": "src/System-IO-StatCompat.html",
          "type": "module"
        },
        "index": {
          "description": "Provide stat-like structure for use in MissingH Especially useful with HVFS and on Windows See also System.IO.WindowsCompat",
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "StatCompat",
          "package": "MissingH",
          "partial": "Stat Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "FileStatusCompat",
          "package": "MissingH",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "FileStatusCompat",
          "package": "MissingH",
          "partial": "File Status Compat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#t:FileStatusCompat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "FileStatusCompat",
          "package": "MissingH",
          "signature": "FileStatusCompat",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "FileStatusCompat",
          "package": "MissingH",
          "partial": "File Status Compat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:FileStatusCompat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "accessTime",
          "package": "MissingH",
          "signature": "EpochTime",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "accessTime",
          "package": "MissingH",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:accessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "deviceID",
          "package": "MissingH",
          "signature": "DeviceID",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "deviceID",
          "package": "MissingH",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:deviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "fileGroup",
          "package": "MissingH",
          "signature": "GroupID",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "fileGroup",
          "package": "MissingH",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "fileID",
          "package": "MissingH",
          "signature": "FileID",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "fileID",
          "package": "MissingH",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "fileMode",
          "package": "MissingH",
          "signature": "FileMode",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "fileMode",
          "package": "MissingH",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "fileOwner",
          "package": "MissingH",
          "signature": "UserID",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "fileOwner",
          "package": "MissingH",
          "partial": "Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "fileSize",
          "package": "MissingH",
          "signature": "FileOffset",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "fileSize",
          "package": "MissingH",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "isBlockDevice",
          "package": "MissingH",
          "signature": "FileStatusCompat -\u003e Bool",
          "source": "src/System-IO-StatCompat.html#isBlockDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "isBlockDevice",
          "normalized": "FileStatusCompat-\u003eBool",
          "package": "MissingH",
          "partial": "Block Device",
          "signature": "FileStatusCompat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isBlockDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "isCharacterDevice",
          "package": "MissingH",
          "signature": "FileStatusCompat -\u003e Bool",
          "source": "src/System-IO-StatCompat.html#isCharacterDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "isCharacterDevice",
          "normalized": "FileStatusCompat-\u003eBool",
          "package": "MissingH",
          "partial": "Character Device",
          "signature": "FileStatusCompat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isCharacterDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "isDirectory",
          "package": "MissingH",
          "signature": "FileStatusCompat -\u003e Bool",
          "source": "src/System-IO-StatCompat.html#isDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "isDirectory",
          "normalized": "FileStatusCompat-\u003eBool",
          "package": "MissingH",
          "partial": "Directory",
          "signature": "FileStatusCompat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "isNamedPipe",
          "package": "MissingH",
          "signature": "FileStatusCompat -\u003e Bool",
          "source": "src/System-IO-StatCompat.html#isNamedPipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "isNamedPipe",
          "normalized": "FileStatusCompat-\u003eBool",
          "package": "MissingH",
          "partial": "Named Pipe",
          "signature": "FileStatusCompat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isNamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "isRegularFile",
          "package": "MissingH",
          "signature": "FileStatusCompat -\u003e Bool",
          "source": "src/System-IO-StatCompat.html#isRegularFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "isRegularFile",
          "normalized": "FileStatusCompat-\u003eBool",
          "package": "MissingH",
          "partial": "Regular File",
          "signature": "FileStatusCompat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isRegularFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "isSocket",
          "package": "MissingH",
          "signature": "FileStatusCompat -\u003e Bool",
          "source": "src/System-IO-StatCompat.html#isSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "isSocket",
          "normalized": "FileStatusCompat-\u003eBool",
          "package": "MissingH",
          "partial": "Socket",
          "signature": "FileStatusCompat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "isSymbolicLink",
          "package": "MissingH",
          "signature": "FileStatusCompat -\u003e Bool",
          "source": "src/System-IO-StatCompat.html#isSymbolicLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "isSymbolicLink",
          "normalized": "FileStatusCompat-\u003eBool",
          "package": "MissingH",
          "partial": "Symbolic Link",
          "signature": "FileStatusCompat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "linkCount",
          "package": "MissingH",
          "signature": "LinkCount",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "linkCount",
          "package": "MissingH",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:linkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "modificationTime",
          "package": "MissingH",
          "signature": "EpochTime",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "modificationTime",
          "package": "MissingH",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:modificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "sc_helper",
          "package": "MissingH",
          "signature": "FileMode -\u003e FileStatusCompat -\u003e Bool",
          "source": "src/System-IO-StatCompat.html#sc_helper",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "sc_helper",
          "normalized": "FileMode-\u003eFileStatusCompat-\u003eBool",
          "package": "MissingH",
          "signature": "FileMode-\u003eFileStatusCompat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:sc_helper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "specialDeviceID",
          "package": "MissingH",
          "signature": "DeviceID",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "specialDeviceID",
          "package": "MissingH",
          "partial": "Device ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:specialDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.StatCompat",
          "name": "statusChangeTime",
          "package": "MissingH",
          "signature": "EpochTime",
          "source": "src/System-IO-StatCompat.html#FileStatusCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO StatCompat",
          "module": "System.IO.StatCompat",
          "name": "statusChangeTime",
          "package": "MissingH",
          "partial": "Change Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:statusChangeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/System-IO-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies one filename to another in text mode.\n\u003c/p\u003e\u003cp\u003ePlease note that the Unix permission bits are set at a default; you may\nneed to adjust them after the copy yourself.\n\u003c/p\u003e\u003cp\u003eThis function is implemented using \u003ccode\u003e\u003ca\u003ehLineCopy\u003c/a\u003e\u003c/code\u003e internally. \n\u003c/p\u003e",
          "module": "System.IO.Utils",
          "name": "copyFileLinesToFile",
          "package": "MissingH",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-IO-Utils.html#copyFileLinesToFile",
          "type": "function"
        },
        "index": {
          "description": "Copies one filename to another in text mode Please note that the Unix permission bits are set at default you may need to adjust them after the copy yourself This function is implemented using hLineCopy internally",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "copyFileLinesToFile",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "MissingH",
          "partial": "File Lines To File",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:copyFileLinesToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies from one handle to another in raw mode (using\nhGetContents).\n\u003c/p\u003e",
          "module": "System.IO.Utils",
          "name": "hCopy",
          "package": "MissingH",
          "signature": "a -\u003e b -\u003e IO ()",
          "source": "src/System-IO-Utils.html#hCopy",
          "type": "function"
        },
        "index": {
          "description": "Copies from one handle to another in raw mode using hGetContents",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "hCopy",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "MissingH",
          "partial": "Copy",
          "signature": "a-\u003eb-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies from one handle to another in raw mode (using hGetContents).\nTakes a function to provide progress updates to the user.\n\u003c/p\u003e",
          "module": "System.IO.Utils",
          "name": "hCopyProgress",
          "package": "MissingH",
          "signature": "b-\u003e c-\u003e (Maybe a -\u003e Integer -\u003e Bool -\u003e IO ())-\u003e Int-\u003e Maybe a-\u003e IO Integer",
          "type": "function"
        },
        "index": {
          "description": "Copies from one handle to another in raw mode using hGetContents Takes function to provide progress updates to the user",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "hCopyProgress",
          "normalized": "a-\u003eb-\u003e(Maybe c-\u003eInteger-\u003eBool-\u003eIO())-\u003eInt-\u003eMaybe c-\u003eIO Integer",
          "package": "MissingH",
          "partial": "Copy Progress",
          "signature": "b-\u003ec-\u003e(Maybe a-\u003eInteger-\u003eBool-\u003eIO())-\u003eInt-\u003eMaybe a-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hCopyProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a handle, returns a list of all the lines in that handle.\nThanks to lazy evaluation, this list does not have to be read all at once.\n\u003c/p\u003e\u003cp\u003eCombined with \u003ccode\u003e\u003ca\u003ehPutStrLns\u003c/a\u003e\u003c/code\u003e, this can make a powerful way to develop\nfilters.  See the \u003ccode\u003e\u003ca\u003elineInteract\u003c/a\u003e\u003c/code\u003e function for more on that concept.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e main = do\n        l \u003c- hGetLines stdin\n        hPutStrLns stdout $ filter (startswith \"1\") l\n\u003c/pre\u003e",
          "module": "System.IO.Utils",
          "name": "hGetLines",
          "package": "MissingH",
          "signature": "a -\u003e IO [String]",
          "source": "src/System-IO-Utils.html#hGetLines",
          "type": "function"
        },
        "index": {
          "description": "Given handle returns list of all the lines in that handle Thanks to lazy evaluation this list does not have to be read all at once Combined with hPutStrLns this can make powerful way to develop filters See the lineInteract function for more on that concept Example main do hGetLines stdin hPutStrLns stdout filter startswith",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "hGetLines",
          "normalized": "a-\u003eIO[String]",
          "package": "MissingH",
          "partial": "Get Lines",
          "signature": "a-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hGetLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is similar to the built-in \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e, but works\non any handle, not just stdin and stdout.\n\u003c/p\u003e\u003cp\u003eIn other words:\n\u003c/p\u003e\u003cpre\u003e interact = hInteract stdin stdout\n\u003c/pre\u003e",
          "module": "System.IO.Utils",
          "name": "hInteract",
          "package": "MissingH",
          "signature": "a -\u003e b -\u003e (String -\u003e String) -\u003e IO ()",
          "source": "src/System-IO-Utils.html#hInteract",
          "type": "function"
        },
        "index": {
          "description": "This is similar to the built-in interact but works on any handle not just stdin and stdout In other words interact hInteract stdin stdout",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "hInteract",
          "normalized": "a-\u003eb-\u003e(String-\u003eString)-\u003eIO()",
          "package": "MissingH",
          "partial": "Interact",
          "signature": "a-\u003eb-\u003e(String-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hInteract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies from one handle to another in text mode (with lines).\nLike \u003ccode\u003ehBlockCopy\u003c/code\u003e, this implementation is nice:\n\u003c/p\u003e\u003cpre\u003e hLineCopy hin hout = hLineInteract hin hout id\n\u003c/pre\u003e",
          "module": "System.IO.Utils",
          "name": "hLineCopy",
          "package": "MissingH",
          "signature": "a -\u003e b -\u003e IO ()",
          "source": "src/System-IO-Utils.html#hLineCopy",
          "type": "function"
        },
        "index": {
          "description": "Copies from one handle to another in text mode with lines Like hBlockCopy this implementation is nice hLineCopy hin hout hLineInteract hin hout id",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "hLineCopy",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "MissingH",
          "partial": "Line Copy",
          "signature": "a-\u003eb-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hLineCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine-based interaction over arbitrary handles.  This is similar\nto wrapping hInteract with \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOne could view this function like this:\n\u003c/p\u003e\u003cpre\u003e hLineInteract finput foutput func =\n     let newf = unlines . func . lines in\n         hInteract finput foutput newf\n\u003c/pre\u003e\u003cp\u003eThough the actual implementation is this for efficiency:\n\u003c/p\u003e\u003cpre\u003e hLineInteract finput foutput func =\n     do\n     lines \u003c- hGetLines finput\n     hPutStrLns foutput (func lines)\n\u003c/pre\u003e",
          "module": "System.IO.Utils",
          "name": "hLineInteract",
          "package": "MissingH",
          "signature": "a -\u003e b -\u003e ([String] -\u003e [String]) -\u003e IO ()",
          "source": "src/System-IO-Utils.html#hLineInteract",
          "type": "function"
        },
        "index": {
          "description": "Line-based interaction over arbitrary handles This is similar to wrapping hInteract with lines and unlines One could view this function like this hLineInteract finput foutput func let newf unlines func lines in hInteract finput foutput newf Though the actual implementation is this for efficiency hLineInteract finput foutput func do lines hGetLines finput hPutStrLns foutput func lines",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "hLineInteract",
          "normalized": "a-\u003eb-\u003e([String]-\u003e[String])-\u003eIO()",
          "package": "MissingH",
          "partial": "Line Interact",
          "signature": "a-\u003eb-\u003e([String]-\u003e[String])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hLineInteract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of strings, output a line containing each item, adding\nnewlines as appropriate.  The list is not expected to have newlines already.\n\u003c/p\u003e",
          "module": "System.IO.Utils",
          "name": "hPutStrLns",
          "package": "MissingH",
          "signature": "a -\u003e [String] -\u003e IO ()",
          "source": "src/System-IO-Utils.html#hPutStrLns",
          "type": "function"
        },
        "index": {
          "description": "Given list of strings output line containing each item adding newlines as appropriate The list is not expected to have newlines already",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "hPutStrLns",
          "normalized": "a-\u003e[String]-\u003eIO()",
          "package": "MissingH",
          "partial": "Put Str Lns",
          "signature": "a-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hPutStrLns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a given function to every item in a list, and returns\nthe new list.  Unlike the system's mapM, items are evaluated lazily. \n\u003c/p\u003e",
          "module": "System.IO.Utils",
          "name": "lazyMapM",
          "package": "MissingH",
          "signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [b]",
          "source": "src/System-IO-Utils.html#lazyMapM",
          "type": "function"
        },
        "index": {
          "description": "Applies given function to every item in list and returns the new list Unlike the system mapM items are evaluated lazily",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "lazyMapM",
          "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
          "package": "MissingH",
          "partial": "Map",
          "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:lazyMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e using lines.  An alias for \u003ccode\u003e\u003ca\u003ehLineCopy\u003c/a\u003e\u003c/code\u003e\nover \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "System.IO.Utils",
          "name": "lineCopy",
          "package": "MissingH",
          "signature": "IO ()",
          "source": "src/System-IO-Utils.html#lineCopy",
          "type": "function"
        },
        "index": {
          "description": "Copies from stdin to stdout using lines An alias for hLineCopy over stdin and stdout",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "lineCopy",
          "normalized": "IO()",
          "package": "MissingH",
          "partial": "Copy",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:lineCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine-based interaction.  This is similar to wrapping your\ninteract functions with \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e.  This equality holds:\n\u003c/p\u003e\u003cpre\u003e lineInteract = hLineInteract stdin stdout\n\u003c/pre\u003e\u003cp\u003eHere's an example:\n\u003c/p\u003e\u003cpre\u003e main = lineInteract (filter (startswith \"1\"))\n\u003c/pre\u003e\u003cp\u003eThis will act as a simple version of grep -- all lines that start with 1\nwill be displayed; all others will be ignored.\n\u003c/p\u003e",
          "module": "System.IO.Utils",
          "name": "lineInteract",
          "package": "MissingH",
          "signature": "([String] -\u003e [String]) -\u003e IO ()",
          "source": "src/System-IO-Utils.html#lineInteract",
          "type": "function"
        },
        "index": {
          "description": "Line-based interaction This is similar to wrapping your interact functions with lines and unlines This equality holds lineInteract hLineInteract stdin stdout Here an example main lineInteract filter startswith This will act as simple version of grep all lines that start with will be displayed all others will be ignored",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "lineInteract",
          "normalized": "([String]-\u003e[String])-\u003eIO()",
          "package": "MissingH",
          "partial": "Interact",
          "signature": "([String]-\u003e[String])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:lineInteract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets stdin and stdout to be block-buffered.  This can save a huge amount\nof system resources since far fewer syscalls are made, and can make programs\nrun much faster. \n\u003c/p\u003e",
          "module": "System.IO.Utils",
          "name": "optimizeForBatch",
          "package": "MissingH",
          "signature": "IO ()",
          "source": "src/System-IO-Utils.html#optimizeForBatch",
          "type": "function"
        },
        "index": {
          "description": "Sets stdin and stdout to be block-buffered This can save huge amount of system resources since far fewer syscalls are made and can make programs run much faster",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "optimizeForBatch",
          "normalized": "IO()",
          "package": "MissingH",
          "partial": "For Batch",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:optimizeForBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets stdin and stdout to be line-buffered.  This saves resources\non stdout, but not many on stdin, since it it still looking for newlines. \n\u003c/p\u003e",
          "module": "System.IO.Utils",
          "name": "optimizeForInteraction",
          "package": "MissingH",
          "signature": "IO ()",
          "source": "src/System-IO-Utils.html#optimizeForInteraction",
          "type": "function"
        },
        "index": {
          "description": "Sets stdin and stdout to be line-buffered This saves resources on stdout but not many on stdin since it it still looking for newlines",
          "hierarchy": "System IO Utils",
          "module": "System.IO.Utils",
          "name": "optimizeForInteraction",
          "normalized": "IO()",
          "package": "MissingH",
          "partial": "For Interaction",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:optimizeForInteraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides some types and related items on Windows to be compatible with\nthe System.Posix.* libraries\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eSystem.IO.StatCompat\u003c/a\u003e, which this module re-exports.\n\u003c/p\u003e\u003cp\u003eOn non-Windows platforms, this module does nothing.\n\u003c/p\u003e\u003cp\u003eOn Windows, it re-exports \u003ca\u003eSystem.IO.StatCompat\u003c/a\u003e.  It also provides various\nfile type information modes that are otherwise in \u003ca\u003eSystem.Posix.Types\u003c/a\u003e or\n\u003ca\u003eSystem.Posix.Files\u003c/a\u003e.  It also provides\na rudimentary implemention of getFileStatus that emulates the Posix call\nto stat(2).\n\u003c/p\u003e\u003cp\u003eCommon usage might be like this:\n\u003c/p\u003e\u003cpre\u003eimport System.Posix.Types\n#if (defined(mingw32_HOST_OS) || defined(mingw32_TARGET_OS) || defined(__MINGW32__))\nimport System.IO.WindowsCompat\n#else\nimport System.Posix.Files\n#endif\n\u003c/pre\u003e\u003cp\u003eOr, to avoid having to use CPP and make things even easier, just import\n\u003ca\u003eSystem.IO.PlafCompat\u003c/a\u003e, which essentially does the above.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.WindowsCompat",
          "name": "WindowsCompat",
          "package": "MissingH",
          "source": "src/System-IO-WindowsCompat.html",
          "type": "module"
        },
        "index": {
          "description": "Provides some types and related items on Windows to be compatible with the System.Posix libraries See also System.IO.StatCompat which this module re-exports On non-Windows platforms this module does nothing On Windows it re-exports System.IO.StatCompat It also provides various file type information modes that are otherwise in System.Posix.Types or System.Posix.Files It also provides rudimentary implemention of getFileStatus that emulates the Posix call to stat Common usage might be like this import System.Posix.Types if defined mingw32 HOST OS defined mingw32 TARGET OS defined MINGW32 import System.IO.WindowsCompat else import System.Posix.Files endif Or to avoid having to use CPP and make things even easier just import System.IO.PlafCompat which essentially does the above",
          "hierarchy": "System IO WindowsCompat",
          "module": "System.IO.WindowsCompat",
          "name": "WindowsCompat",
          "package": "MissingH",
          "partial": "Windows Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-WindowsCompat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for expanding wildcards, filenames, and pathnames.\n\u003c/p\u003e\u003cp\u003eFor information on the metacharacters recognized, please see the notes\nin \u003ca\u003eSystem.Path.WildMatch\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Path.Glob",
          "name": "Glob",
          "package": "MissingH",
          "source": "src/System-Path-Glob.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for expanding wildcards filenames and pathnames For information on the metacharacters recognized please see the notes in System.Path.WildMatch",
          "hierarchy": "System Path Glob",
          "module": "System.Path.Glob",
          "name": "Glob",
          "package": "MissingH",
          "partial": "Glob",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-Glob.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a pattern.  Returns a list of names that match that pattern.\nThe pattern is evaluated by \u003ca\u003eSystem.Path.WildMatch\u003c/a\u003e.  This function\ndoes not perform tilde or environment variable expansion.\n\u003c/p\u003e\u003cp\u003eFilenames that begin with a dot are not included in the result set unless\nthat component of the pattern also begins with a dot.\n\u003c/p\u003e\u003cp\u003eIn MissingH, this function is defined as:\n\u003c/p\u003e\u003cpre\u003eglob = vGlob SystemFS\n\u003c/pre\u003e",
          "module": "System.Path.Glob",
          "name": "glob",
          "package": "MissingH",
          "signature": "FilePath -\u003e IO [FilePath]",
          "source": "src/System-Path-Glob.html#glob",
          "type": "function"
        },
        "index": {
          "description": "Takes pattern Returns list of names that match that pattern The pattern is evaluated by System.Path.WildMatch This function does not perform tilde or environment variable expansion Filenames that begin with dot are not included in the result set unless that component of the pattern also begins with dot In MissingH this function is defined as glob vGlob SystemFS",
          "hierarchy": "System Path Glob",
          "module": "System.Path.Glob",
          "name": "glob",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "MissingH",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-Glob.html#v:glob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eglob\u003c/a\u003e\u003c/code\u003e, but works on both the system (\u003ca\u003ereal\u003c/a\u003e) and HVFS virtual\nfilesystems. \n\u003c/p\u003e",
          "module": "System.Path.Glob",
          "name": "vGlob",
          "package": "MissingH",
          "signature": "a -\u003e FilePath -\u003e IO [FilePath]",
          "source": "src/System-Path-Glob.html#vGlob",
          "type": "function"
        },
        "index": {
          "description": "Like glob but works on both the system real and HVFS virtual filesystems",
          "hierarchy": "System Path Glob",
          "module": "System.Path.Glob",
          "name": "vGlob",
          "normalized": "a-\u003eFilePath-\u003eIO[FilePath]",
          "package": "MissingH",
          "partial": "Glob",
          "signature": "a-\u003eFilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-Glob.html#v:vGlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level path name manipulations.\n\u003c/p\u003e\u003cp\u003eWritten by Volker Wysk\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Path.NameManip",
          "name": "NameManip",
          "package": "MissingH",
          "source": "src/System-Path-NameManip.html",
          "type": "module"
        },
        "index": {
          "description": "Low-level path name manipulations Written by Volker Wysk",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "NameManip",
          "package": "MissingH",
          "partial": "Name Manip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a path absolute, using the current working directory.\n\u003c/p\u003e\u003cp\u003eThis makes a relative path absolute with respect to the current\nworking directory. An absolute path is returned unmodified.\n\u003c/p\u003e\u003cp\u003eThe current working directory is determined with \u003ccode\u003egetCurrentDirectory\u003c/code\u003e\nwhich means that symbolic links in it are expanded and the path is\nnormalised. This is different from \u003ccode\u003epwd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "absolute_path",
          "package": "MissingH",
          "signature": "String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Make path absolute using the current working directory This makes relative path absolute with respect to the current working directory An absolute path is returned unmodified The current working directory is determined with getCurrentDirectory which means that symbolic links in it are expanded and the path is normalised This is different from pwd",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "absolute_path",
          "normalized": "String-\u003eIO String",
          "package": "MissingH",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:absolute_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a path absolute.\n\u003c/p\u003e\u003cp\u003eThis makes a relative path absolute with respect to a specified\ndirectory. An absolute path is returned unmodified.\n\u003c/p\u003e\u003cp\u003eThe order of the arguments can be confusing. You should rather use \u003ccode\u003e\u003ca\u003eabsolute_path_by\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eabsolute_path'\u003c/code\u003e is included for backwards compatibility.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "absolute_path'",
          "package": "MissingH",
          "signature": "String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Make path absolute This makes relative path absolute with respect to specified directory An absolute path is returned unmodified The order of the arguments can be confusing You should rather use absolute path by absolute path is included for backwards compatibility",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "absolute_path'",
          "normalized": "String-\u003eString-\u003eString",
          "package": "MissingH",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:absolute_path-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a path absolute.\n\u003c/p\u003e\u003cp\u003eThis makes a relative path absolute with respect to a specified\ndirectory. An absolute path is returned unmodified.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "absolute_path_by",
          "package": "MissingH",
          "signature": "String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Make path absolute This makes relative path absolute with respect to specified directory An absolute path is returned unmodified",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "absolute_path_by",
          "normalized": "String-\u003eString-\u003eString",
          "package": "MissingH",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:absolute_path_by"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the directory part of a path.\n\u003c/p\u003e\u003cpre\u003edir_part = fst . split_path\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "dir_part",
          "package": "MissingH",
          "signature": "String -\u003e String",
          "source": "src/System-Path-NameManip.html#dir_part",
          "type": "function"
        },
        "index": {
          "description": "Get the directory part of path dir part fst split path See split path",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "dir_part",
          "normalized": "String-\u003eString",
          "package": "MissingH",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:dir_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last path component of a path.\n\u003c/p\u003e\u003cpre\u003efilename_part = snd . split_path\n\u003c/pre\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003efilename_part \"foo/bar\" == \"bar\"\nfilename_part \".\"       == \".\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "filename_part",
          "package": "MissingH",
          "signature": "String -\u003e String",
          "source": "src/System-Path-NameManip.html#filename_part",
          "type": "function"
        },
        "index": {
          "description": "Get the last path component of path filename part snd split path Examples filename part foo bar bar filename part See split path",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "filename_part",
          "normalized": "String-\u003eString",
          "package": "MissingH",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:filename_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuess the \u003ccode\u003e\"..\"\u003c/code\u003e-component free, normalised form of a path. The transformation is purely syntactic. \u003ccode\u003e\"..\"\u003c/code\u003e path components will be removed, along\n   with their preceding path components. This will produce\n   erroneous results when the path contains symlinks. If the path contains leading \u003ccode\u003e\"..\"\u003c/code\u003e components, or more \u003ccode\u003e\"..\"\u003c/code\u003e components than preceeding normal\n   components, then the \u003ccode\u003e\"..\"\u003c/code\u003e components can't be normalised away. In this case, the result is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eguess_dotdot = fmap unslice_path . guess_dotdot_comps . slice_path\n\u003c/pre\u003e",
          "module": "System.Path.NameManip",
          "name": "guess_dotdot",
          "package": "MissingH",
          "signature": "String-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Guess the component free normalised form of path The transformation is purely syntactic path components will be removed along with their preceding path components This will produce erroneous results when the path contains symlinks If the path contains leading components or more components than preceeding normal components then the components can be normalised away In this case the result is Nothing guess dotdot fmap unslice path guess dotdot comps slice path",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "guess_dotdot",
          "normalized": "String-\u003eMaybe String",
          "package": "MissingH",
          "signature": "String-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:guess_dotdot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuess the \u003ccode\u003e\"..\"\u003c/code\u003e-component free form of a path, specified as a list of path components, by syntactically removing them, along with the preceding\n   path components. This will produce\n   erroneous results when the path contains symlinks. If the path contains leading \u003ccode\u003e\"..\"\u003c/code\u003e components, or more \u003ccode\u003e\"..\"\u003c/code\u003e components than preceeding normal\n   components, then the \u003ccode\u003e\"..\"\u003c/code\u003e components can't be normalised away. In this case, the result is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "guess_dotdot_comps",
          "package": "MissingH",
          "signature": "[String]-\u003e Maybe [String]",
          "type": "function"
        },
        "index": {
          "description": "Guess the component free form of path specified as list of path components by syntactically removing them along with the preceding path components This will produce erroneous results when the path contains symlinks If the path contains leading components or more components than preceeding normal components then the components can be normalised away In this case the result is Nothing",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "guess_dotdot_comps",
          "normalized": "[String]-\u003eMaybe[String]",
          "package": "MissingH",
          "signature": "[String]-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:guess_dotdot_comps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise a path. This is done by reducing repeated \u003ccode\u003e/\u003c/code\u003e characters to one, and removing\n\u003ccode\u003e.\u003c/code\u003e path components. \u003ccode\u003e..\u003c/code\u003e path components are left intact, because of possible symlinks.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enormalise_path\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "System.Path.NameManip",
          "name": "normalise_path",
          "package": "MissingH",
          "signature": "String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Normalise path This is done by reducing repeated characters to one and removing path components path components are left intact because of possible symlinks normalise path unslice path slice path",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "normalise_path",
          "normalized": "String-\u003eString",
          "package": "MissingH",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:normalise_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a file name in components. This are the base file name and the\nsuffixes, which are separated by dots. If the name starts with a dot, it is\nregarded as part of the base name. The result is a list of file name\ncomponents. The filename may be a path. In this case, everything up to the\nlast path component will be returned as part of the base file name. The\npath gets normalised thereby.\n\u003c/p\u003e\u003cp\u003eNo empty suffixes are returned. If the file name contains several\nconsecutive dots, they are regared as part of the preceding file name\ncomponent.\n\u003c/p\u003e\u003cp\u003eConcateneting the name components and adding dots, reproduces the\noriginal name, with a normalised path:\n\u003ccode\u003econcat . intersperse \".\" . \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003enormalise\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the last path component might be \"\u003ccode\u003e..\u003c/code\u003e\". Then it is not\npossible to deduce the refered directory's name from the path. An IO\naction for getting the real path is then necessary.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e \"a.b//./.foo.tar.gz\" == [\"a.b/.foo\",\"tar\",\"gz\"]\n\u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e \".x..y.\"             == [\".x.\", \"y.\"]\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunslice_filename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eslice_filename'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "slice_filename",
          "package": "MissingH",
          "signature": "String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Split file name in components This are the base file name and the suffixes which are separated by dots If the name starts with dot it is regarded as part of the base name The result is list of file name components The filename may be path In this case everything up to the last path component will be returned as part of the base file name The path gets normalised thereby No empty suffixes are returned If the file name contains several consecutive dots they are regared as part of the preceding file name component Concateneting the name components and adding dots reproduces the original name with normalised path concat intersperse slice filename normalise Note that the last path component might be Then it is not possible to deduce the refered directory name from the path An IO action for getting the real path is then necessary Examples slice filename a.b foo.tar.gz a.b foo tar gz slice filename x..y See unslice filename slice filename",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "slice_filename",
          "normalized": "String-\u003e[String]",
          "package": "MissingH",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:slice_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a variant of \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e. It is like \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e, except for\nbeing more efficient, and the filename must not contain any preceding path,\nsince this case isn't considered.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunslice_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "slice_filename'",
          "package": "MissingH",
          "signature": "String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "This is variant of slice filename It is like slice filename except for being more efficient and the filename must not contain any preceding path since this case isn considered See slice filename unslice filename",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "slice_filename'",
          "normalized": "String-\u003e[String]",
          "package": "MissingH",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:slice_filename-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path in components. Repeated \"\u003ccode\u003e/\u003c/code\u003e\" characters don't lead to empty\ncomponents. \"\u003ccode\u003e.\u003c/code\u003e\" path components are removed. If the path is absolute, the first component\nwill start with \"\u003ccode\u003e/\u003c/code\u003e\". \"\u003ccode\u003e..\u003c/code\u003e\" components are left intact. They can't be simply\nremoved, because the preceding component might be a symlink. In this case,\n\u003ccode\u003erealpath\u003c/code\u003e is probably what you need.\n\u003c/p\u003e\u003cp\u003eThe case that the path is empty, is probably an error. However, it is\ntreated like \"\u003ccode\u003e.\u003c/code\u003e\", yielding an empty path components list.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003eslice_path \"/\"        = [\"/\"]\nslice_path \"/foo/bar\" = [\"/foo\",\"bar\"]\nslice_path \"..//./\"   = [\"..\"]\nslice_path \".\"        = []\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003erealpath\u003c/code\u003e, \u003ccode\u003erealpath_s\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "slice_path",
          "package": "MissingH",
          "signature": "String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Split path in components Repeated characters don lead to empty components path components are removed If the path is absolute the first component will start with components are left intact They can be simply removed because the preceding component might be symlink In this case realpath is probably what you need The case that the path is empty is probably an error However it is treated like yielding an empty path components list Examples slice path slice path foo bar foo bar slice path slice path See unslice path realpath realpath",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "slice_path",
          "normalized": "String-\u003e[String]",
          "package": "MissingH",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:slice_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path in directory, base file name and suffix.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "split3",
          "package": "MissingH",
          "signature": "String-\u003e (String, String, String)",
          "type": "function"
        },
        "index": {
          "description": "Split path in directory base file name and suffix",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "split3",
          "normalized": "String-\u003e(String,String,String)",
          "package": "MissingH",
          "signature": "String-\u003e(String,String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:split3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a file name in prefix and suffix. If there isn't any suffix in\nthe file name, then return an empty suffix. A dot at the beginning or at\nthe end is not regarded as introducing a suffix.\n\u003c/p\u003e\u003cp\u003eThe last path component is what is being split. This isn't the same as\nsplitting the string at the last dot. For instance, if the file name\ndoesn't contain any dot, dots in previous path component's aren't mistaken\nas introducing suffixes.\n\u003c/p\u003e\u003cp\u003eThe path part is returned in normalised form. This means, \u003ccode\u003e\".\"\u003c/code\u003e components\nare removed, and multiple \"\u003ccode\u003e/\u003c/code\u003e\"s are reduced to one.\n\u003c/p\u003e\u003cp\u003eNote that there isn't any plausibility check performed on the suffix. If the file name doesn't have a suffix, but happens to contain a dot, then this\ndot is mistaken as introducing a suffix.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003esplit_filename \"path/to/foo.bar\"                             = (\"path/to/foo\",\"bar\")\nsplit_filename \"path/to/foo\"                                 = (\"path/to/foo\",\"\")\nsplit_filename \"/path.to/foo\"                                = (\"/path.to/foo\",\"\")\nsplit_filename \"a///./x\"                                     = (\"a/x\",\"\")\nsplit_filename \"dir.suffix/./\"                               = (\"dir\",\"suffix\")\nsplit_filename \"Photographie, Das 20. Jahrhundert (300 dpi)\" = (\"Photographie, Das 20\", \" Jahrhundert (300 dpi)\")\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e, 'split_filename\\''\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "split_filename",
          "package": "MissingH",
          "signature": "String-\u003e (String, String)",
          "type": "function"
        },
        "index": {
          "description": "Split file name in prefix and suffix If there isn any suffix in the file name then return an empty suffix dot at the beginning or at the end is not regarded as introducing suffix The last path component is what is being split This isn the same as splitting the string at the last dot For instance if the file name doesn contain any dot dots in previous path component aren mistaken as introducing suffixes The path part is returned in normalised form This means components are removed and multiple are reduced to one Note that there isn any plausibility check performed on the suffix If the file name doesn have suffix but happens to contain dot then this dot is mistaken as introducing suffix Examples split filename path to foo.bar path to foo bar split filename path to foo path to foo split filename path.to foo path.to foo split filename split filename dir.suffix dir suffix split filename Photographie Das Jahrhundert dpi Photographie Das Jahrhundert dpi See slice path split filename",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "split_filename",
          "normalized": "String-\u003e(String,String)",
          "package": "MissingH",
          "signature": "String-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:split_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e. This is a more efficient version\nof \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e, for the case that you know the string is\nis a pure file name without any slashes.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "split_filename'",
          "package": "MissingH",
          "signature": "String-\u003e (String, String)",
          "type": "function"
        },
        "index": {
          "description": "Variant of split filename This is more efficient version of split filename for the case that you know the string is is pure file name without any slashes See split filename",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "split_filename'",
          "normalized": "String-\u003e(String,String)",
          "package": "MissingH",
          "signature": "String-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:split_filename-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path in directory and file name. Only in the case that the\nsupplied path is empty, both parts are empty strings. Otherwise, \u003ccode\u003e\".\"\u003c/code\u003e is filled in\nfor the corresponding part, if necessary. Unless the path is empty,\nconcatenating the returned path and file name components with a slash in\nbetween, makes a valid path to the file.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esplit_path\u003c/code\u003e splits off the last path component. This\nisn't the same as the text after the last \u003ccode\u003e/\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the last path component might be \u003ccode\u003e\"..\"\u003c/code\u003e. Then it is not\npossible to deduce the refered directory's name from the path. Then an IO\naction for getting the real path is necessary.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003esplit_path \"/a/b/c\"      == (\"/a/b\", \"c\")\nsplit_path \"foo\"         == (\".\", \"foo\")\nsplit_path \"foo/bar\"     == (\"foo\", \"bar\")\nsplit_path \"foo/..\"      == (\"foo\", \"..\")\nsplit_path \".\"           == (\".\", \".\")\nsplit_path \"\"            == (\"\", \"\")\nsplit_path \"/foo\"        == (\"/\", \"foo\")\nsplit_path \"foo/\"        == (\".\", \"foo\")\nsplit_path \"foo/.\"       == (\".\", \"foo\")\nsplit_path \"foo///./bar\" == (\"foo\", \"bar\")\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "split_path",
          "package": "MissingH",
          "signature": "String-\u003e (String, String)",
          "type": "function"
        },
        "index": {
          "description": "Split path in directory and file name Only in the case that the supplied path is empty both parts are empty strings Otherwise is filled in for the corresponding part if necessary Unless the path is empty concatenating the returned path and file name components with slash in between makes valid path to the file split path splits off the last path component This isn the same as the text after the last Note that the last path component might be Then it is not possible to deduce the refered directory name from the path Then an IO action for getting the real path is necessary Examples split path split path foo foo split path foo bar foo bar split path foo foo split path split path split path foo foo split path foo foo split path foo foo split path foo bar foo bar See slice path",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "split_path",
          "normalized": "String-\u003e(String,String)",
          "package": "MissingH",
          "signature": "String-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:split_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a path for a specific suffix and split it off.\n\u003c/p\u003e\u003cp\u003eIf the path ends with the suffix, then the result is \u003ccode\u003eJust\nprefix\u003c/code\u003e, where \u003ccode\u003eprefix\u003c/code\u003e is the normalised path\nwithout the suffix. Otherwise it's \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "test_suffix",
          "package": "MissingH",
          "signature": "String-\u003e String-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Test path for specific suffix and split it off If the path ends with the suffix then the result is Just prefix where prefix is the normalised path without the suffix Otherwise it Nothing",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "test_suffix",
          "normalized": "String-\u003eString-\u003eMaybe String",
          "package": "MissingH",
          "signature": "String-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:test_suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm file name from file name components, interspersing dots. This is\nthe inverse of \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e, except for normalisation of any path.\n\u003c/p\u003e\u003cpre\u003e unslice_filename = concat . intersperse \".\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "unslice_filename",
          "package": "MissingH",
          "signature": "[String]-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Form file name from file name components interspersing dots This is the inverse of slice filename except for normalisation of any path unslice filename concat intersperse See slice filename",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "unslice_filename",
          "normalized": "[String]-\u003eString",
          "package": "MissingH",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unslice_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a path from path components. This isn't the inverse\nof \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e, since \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\nnormalises the path.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "unslice_path",
          "package": "MissingH",
          "signature": "[String]-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Form path from path components This isn the inverse of slice path since unslice path slice path normalises the path See slice path",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "unslice_path",
          "normalized": "[String]-\u003eString",
          "package": "MissingH",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unslice_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm path from directory, base file name and suffix parts.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "unsplit3",
          "package": "MissingH",
          "signature": "(String, String, String)-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Form path from directory base file name and suffix parts",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "unsplit3",
          "normalized": "(String,String,String)-\u003eString",
          "package": "MissingH",
          "signature": "(String,String,String)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unsplit3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e. Concatenate prefix and suffix, adding\na dot in between, iff the suffix is not empty. The path part of the prefix is\nnormalised.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "unsplit_filename",
          "package": "MissingH",
          "signature": "(String, String)-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Inverse of split filename Concatenate prefix and suffix adding dot in between iff the suffix is not empty The path part of the prefix is normalised See split filename",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "unsplit_filename",
          "normalized": "(String,String)-\u003eString",
          "package": "MissingH",
          "signature": "(String,String)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unsplit_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e, except for normalisation.\n\u003c/p\u003e\u003cp\u003eThis concatenates two paths, and takes care of \u003ccode\u003e\".\"\u003c/code\u003e and empty paths. When the two components are the result of \u003ccode\u003esplit_path\u003c/code\u003e, then \u003ccode\u003eunsplit_path\u003c/code\u003e\ncreates a normalised path. It is best documented by its definition:\n\u003c/p\u003e\u003cpre\u003eunsplit_path (\".\", \"\") = \".\"\nunsplit_path (\"\", \".\") = \".\"\nunsplit_path (\".\", q)  = q\nunsplit_path (\"\", q)   = q\nunsplit_path (p, \"\")   = p\nunsplit_path (p, \".\")  = p\nunsplit_path (p, q)    = p ++ \"/\" ++ q\n\u003c/pre\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003eunsplit_path (\"\", \"\")     == \"\"\nunsplit_path (\".\", \"\")    == \".\"\nunsplit_path (\".\", \".\")   == \".\"\nunsplit_path (\"foo\", \".\") == \"foo\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Path.NameManip",
          "name": "unsplit_path",
          "package": "MissingH",
          "signature": "(String, String)-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Inverse of split path except for normalisation This concatenates two paths and takes care of and empty paths When the two components are the result of split path then unsplit path creates normalised path It is best documented by its definition unsplit path unsplit path unsplit path unsplit path unsplit path unsplit path unsplit path Examples unsplit path unsplit path unsplit path unsplit path foo foo See split path",
          "hierarchy": "System Path NameManip",
          "module": "System.Path.NameManip",
          "name": "unsplit_path",
          "normalized": "(String,String)-\u003eString",
          "package": "MissingH",
          "signature": "(String,String)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unsplit_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMatching filenames with wildcards.  See also \u003ca\u003eSystem.Path.Glob\u003c/a\u003e for\nsupport for generating lists of files based on wildcards.\n\u003c/p\u003e\u003cp\u003eInspired by fnmatch.py, part of the Python standard library.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThe input wildcard for functions in this module is expected to be in\nthe standard style of Posix shells.\n\u003c/p\u003e\u003cp\u003eThat is:\n\u003c/p\u003e\u003cpre\u003e? matches exactly one character\n\\* matches zero or more characters\n[list] matches any character in list\n[!list] matches any character not in the list\n\u003c/pre\u003e\u003cp\u003eThe returned regular expression will always end in $ but never begins\nwith ^, making it suitable for appending to the end of paths.  If you want to\nmatch a given filename directly, you should prepend the ^ character to the\nreturned value from this function.\n\u003c/p\u003e\u003cp\u003ePlease note:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Neither the path separator (the slash or backslash) nor the period carry\nany special meaning for the functions in this module.  That is, \u003ccode\u003e*\u003c/code\u003e will\nmatch \u003ccode\u003e/\u003c/code\u003e in a filename.  If this is not the behavior you want, you probably\nwant \u003ca\u003eSystem.Path.Glob\u003c/a\u003e instead of this module.\n\u003c/li\u003e\u003cli\u003e Unlike the Unix shell, filenames that begin with a period are not ignored\nby this module.  That is, \u003ccode\u003e*.txt\u003c/code\u003e will match \u003ccode\u003e.test.txt\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e This module does not current permit escaping of special characters.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.Path.WildMatch",
          "name": "WildMatch",
          "package": "MissingH",
          "source": "src/System-Path-WildMatch.html",
          "type": "module"
        },
        "index": {
          "description": "Matching filenames with wildcards See also System.Path.Glob for support for generating lists of files based on wildcards Inspired by fnmatch.py part of the Python standard library Written by John Goerzen jgoerzen@complete.org The input wildcard for functions in this module is expected to be in the standard style of Posix shells That is matches exactly one character matches zero or more characters list matches any character in list list matches any character not in the list The returned regular expression will always end in but never begins with making it suitable for appending to the end of paths If you want to match given filename directly you should prepend the character to the returned value from this function Please note Neither the path separator the slash or backslash nor the period carry any special meaning for the functions in this module That is will match in filename If this is not the behavior you want you probably want System.Path.Glob instead of this module Unlike the Unix shell filenames that begin with period are not ignored by this module That is txt will match test.txt This module does not current permit escaping of special characters",
          "hierarchy": "System Path WildMatch",
          "module": "System.Path.WildMatch",
          "name": "WildMatch",
          "package": "MissingH",
          "partial": "Wild Match",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-WildMatch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the given name against the given pattern, being case-sensitive.\n\u003c/p\u003e\u003cp\u003eThe given pattern is forced to match the given name starting at the beginning.\n\u003c/p\u003e",
          "module": "System.Path.WildMatch",
          "name": "wildCheckCase",
          "package": "MissingH",
          "signature": "String-\u003e String-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check the given name against the given pattern being case-sensitive The given pattern is forced to match the given name starting at the beginning",
          "hierarchy": "System Path WildMatch",
          "module": "System.Path.WildMatch",
          "name": "wildCheckCase",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "MissingH",
          "partial": "Check Case",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-WildMatch.html#v:wildCheckCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a wildcard to an (uncompiled) regular expression.\n\u003c/p\u003e",
          "module": "System.Path.WildMatch",
          "name": "wildToRegex",
          "package": "MissingH",
          "signature": "String -\u003e String",
          "source": "src/System-Path-WildMatch.html#wildToRegex",
          "type": "function"
        },
        "index": {
          "description": "Convert wildcard to an uncompiled regular expression",
          "hierarchy": "System Path WildMatch",
          "module": "System.Path.WildMatch",
          "name": "wildToRegex",
          "normalized": "String-\u003eString",
          "package": "MissingH",
          "partial": "To Regex",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-WildMatch.html#v:wildToRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with path and\nfile names, directories, and related support.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Path",
          "name": "Path",
          "package": "MissingH",
          "source": "src/System-Path.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various helpful utilities for dealing with path and file names directories and related support Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "Path",
          "package": "MissingH",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an absolute, normalized version of a path with all double slashes,\ndot, and dotdot entries removed.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the base for the absolut calculation; in many cases,\nit would correspond to the current working directory.\n\u003c/p\u003e\u003cp\u003eThe second parameter is the pathname to transform.  If it is already absolute,\nthe first parameter is ignored.\n\u003c/p\u003e\u003cp\u003eNothing may be returned if there's an error; for instance, too many \u003ccode\u003e..\u003c/code\u003e entries\nfor the given path.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "absNormPath",
          "package": "MissingH",
          "signature": "String-\u003e String-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Make an absolute normalized version of path with all double slashes dot and dotdot entries removed The first parameter is the base for the absolut calculation in many cases it would correspond to the current working directory The second parameter is the pathname to transform If it is already absolute the first parameter is ignored Nothing may be returned if there an error for instance too many entries for the given path",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "absNormPath",
          "normalized": "String-\u003eString-\u003eMaybe String",
          "package": "MissingH",
          "partial": "Norm Path",
          "signature": "String-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:absNormPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the current working directory to the given path,\nexecutes the given I/O action, then changes back to the original directory,\neven if the I/O action raised an exception. \n\u003c/p\u003e",
          "module": "System.Path",
          "name": "bracketCWD",
          "package": "MissingH",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Path.html#bracketCWD",
          "type": "function"
        },
        "index": {
          "description": "Changes the current working directory to the given path executes the given action then changes back to the original directory even if the action raised an exception",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "bracketCWD",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "MissingH",
          "partial": "CWD",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:bracketCWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a temporary directory for your use via \u003ccode\u003e\u003ca\u003emktmpdir\u003c/a\u003e\u003c/code\u003e,\nruns the specified action (passing in the directory name), then\nremoves the directory and all its contents when the action completes (or raises\nan exception. \n\u003c/p\u003e",
          "module": "System.Path",
          "name": "brackettmpdir",
          "package": "MissingH",
          "signature": "String -\u003e (String -\u003e IO a) -\u003e IO a",
          "source": "src/System-Path.html#brackettmpdir",
          "type": "function"
        },
        "index": {
          "description": "Creates temporary directory for your use via mktmpdir runs the specified action passing in the directory name then removes the directory and all its contents when the action completes or raises an exception",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "brackettmpdir",
          "normalized": "String-\u003e(String-\u003eIO a)-\u003eIO a",
          "package": "MissingH",
          "signature": "String-\u003e(String-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:brackettmpdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given I/O action with the CWD set to the given tmp dir,\nremoving the tmp dir and changing CWD back afterwards, even if there\nwas an exception. \n\u003c/p\u003e",
          "module": "System.Path",
          "name": "brackettmpdirCWD",
          "package": "MissingH",
          "signature": "String -\u003e IO a -\u003e IO a",
          "source": "src/System-Path.html#brackettmpdirCWD",
          "type": "function"
        },
        "index": {
          "description": "Runs the given action with the CWD set to the given tmp dir removing the tmp dir and changing CWD back afterwards even if there was an exception",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "brackettmpdirCWD",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "MissingH",
          "partial": "CWD",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:brackettmpdirCWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a temporary directory for your use.\n\u003c/p\u003e\u003cp\u003eThe passed string should be a template suitable for mkstemp; that is, end with\n\u003ccode\u003e\"XXXXXX\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYour string should probably start with the value returned from\nSystem.Directory.getTemporaryDirectory.\n\u003c/p\u003e\u003cp\u003eThe name of the directory created will be returned.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "mktmpdir",
          "package": "MissingH",
          "signature": "String -\u003e IO String",
          "source": "src/System-Path.html#mktmpdir",
          "type": "function"
        },
        "index": {
          "description": "Creates temporary directory for your use The passed string should be template suitable for mkstemp that is end with XXXXXX Your string should probably start with the value returned from System.Directory.getTemporaryDirectory The name of the directory created will be returned",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "mktmpdir",
          "normalized": "String-\u003eIO String",
          "package": "MissingH",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:mktmpdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike absNormPath, but returns Nothing if the generated result is not\nthe passed base path or a subdirectory thereof. \n\u003c/p\u003e",
          "module": "System.Path",
          "name": "secureAbsNormPath",
          "package": "MissingH",
          "signature": "String-\u003e String-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Like absNormPath but returns Nothing if the generated result is not the passed base path or subdirectory thereof",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "secureAbsNormPath",
          "normalized": "String-\u003eString-\u003eMaybe String",
          "package": "MissingH",
          "partial": "Abs Norm Path",
          "signature": "String-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:secureAbsNormPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a pathname into a tuple representing the root of the name and\nthe extension.  The extension is considered to be all characters from the last\ndot after the last slash to the end.  Either returned string may be empty. \n\u003c/p\u003e",
          "module": "System.Path",
          "name": "splitExt",
          "package": "MissingH",
          "signature": "String -\u003e (String, String)",
          "source": "src/System-Path.html#splitExt",
          "type": "function"
        },
        "index": {
          "description": "Splits pathname into tuple representing the root of the name and the extension The extension is considered to be all characters from the last dot after the last slash to the end Either returned string may be empty",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "splitExt",
          "normalized": "String-\u003e(String,String)",
          "package": "MissingH",
          "partial": "Ext",
          "signature": "String-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:splitExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExports some POSIX constants and functions that are not exported in fptools\nby default.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Consts",
          "name": "Consts",
          "package": "MissingH",
          "source": "src/System-Posix-Consts.html",
          "type": "module"
        },
        "index": {
          "description": "Exports some POSIX constants and functions that are not exported in fptools by default",
          "hierarchy": "System Posix Consts",
          "module": "System.Posix.Consts",
          "name": "Consts",
          "package": "MissingH",
          "partial": "Consts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Consts",
          "name": "blockSpecialMode",
          "package": "MissingH",
          "signature": "FileMode",
          "source": "src/System-Posix-Consts.html#blockSpecialMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Consts",
          "module": "System.Posix.Consts",
          "name": "blockSpecialMode",
          "package": "MissingH",
          "partial": "Special Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:blockSpecialMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Consts",
          "name": "characterSpecialMode",
          "package": "MissingH",
          "signature": "FileMode",
          "source": "src/System-Posix-Consts.html#characterSpecialMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Consts",
          "module": "System.Posix.Consts",
          "name": "characterSpecialMode",
          "package": "MissingH",
          "partial": "Special Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:characterSpecialMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Consts",
          "name": "directoryMode",
          "package": "MissingH",
          "signature": "FileMode",
          "source": "src/System-Posix-Consts.html#directoryMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Consts",
          "module": "System.Posix.Consts",
          "name": "directoryMode",
          "package": "MissingH",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:directoryMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Consts",
          "name": "fileTypeModes",
          "package": "MissingH",
          "signature": "FileMode",
          "source": "src/System-Posix-Consts.html#fileTypeModes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Consts",
          "module": "System.Posix.Consts",
          "name": "fileTypeModes",
          "package": "MissingH",
          "partial": "Type Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:fileTypeModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Consts",
          "name": "namedPipeMode",
          "package": "MissingH",
          "signature": "FileMode",
          "source": "src/System-Posix-Consts.html#namedPipeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Consts",
          "module": "System.Posix.Consts",
          "name": "namedPipeMode",
          "package": "MissingH",
          "partial": "Pipe Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:namedPipeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Consts",
          "name": "regularFileMode",
          "package": "MissingH",
          "signature": "FileMode",
          "source": "src/System-Posix-Consts.html#regularFileMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Consts",
          "module": "System.Posix.Consts",
          "name": "regularFileMode",
          "package": "MissingH",
          "partial": "File Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:regularFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Consts",
          "name": "socketMode",
          "package": "MissingH",
          "signature": "FileMode",
          "source": "src/System-Posix-Consts.html#socketMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Consts",
          "module": "System.Posix.Consts",
          "name": "socketMode",
          "package": "MissingH",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:socketMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Consts",
          "name": "symbolicLinkMode",
          "package": "MissingH",
          "signature": "FileMode",
          "source": "src/System-Posix-Consts.html#symbolicLinkMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Consts",
          "module": "System.Posix.Consts",
          "name": "symbolicLinkMode",
          "package": "MissingH",
          "partial": "Link Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:symbolicLinkMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility for parsing dates.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Time.ParseDate",
          "name": "ParseDate",
          "package": "MissingH",
          "source": "src/System-Time-ParseDate.html",
          "type": "module"
        },
        "index": {
          "description": "Utility for parsing dates",
          "hierarchy": "System Time ParseDate",
          "module": "System.Time.ParseDate",
          "name": "ParseDate",
          "package": "MissingH",
          "partial": "Parse Date",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-ParseDate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date string as formatted by \u003ccode\u003e\u003ca\u003eformatCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe resulting \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e will only have those fields set that\n   are represented by a format specifier in the format string, and those\n   fields will be set to the values given in the date string.\n   If the same field is specified multiple times, the rightmost\n   occurence takes precedence.\n\u003c/p\u003e\u003cp\u003eThe resulting date is not neccessarily a valid date. For example,\n   if there is no day of the week specifier in the format string,\n   the value of \u003ccode\u003e\u003ca\u003ectWDay\u003c/a\u003e\u003c/code\u003e will most likely be invalid.\n\u003c/p\u003e\u003cp\u003eFormat specifiers are % followed by some character. All other\n   characters are treated literally. Whitespace in the format string\n   matches zero or more arbitrary whitespace characters.\n\u003c/p\u003e\u003cp\u003eFormat specifiers marked with * are matched, but do not set any\n   field in the output.\n\u003c/p\u003e\u003cp\u003eSome of the format specifiers are marked as space-padded or\n   zero-padded. Regardless of this, space-padded, zero-padded\n   or unpadded inputs are accepted. Note that strings using\n   unpadded fields without separating the fields may cause\n   strange parsing.\n\u003c/p\u003e\u003cp\u003eSupported format specfiers:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e%%\u003c/dt\u003e\u003cdd\u003e   a % character.\n\u003c/dd\u003e\u003cdt\u003e%a\u003c/dt\u003e\u003cdd\u003e   locale's abbreviated weekday name (Sun ... Sat)\n\u003c/dd\u003e\u003cdt\u003e%A\u003c/dt\u003e\u003cdd\u003e   locale's full weekday name (Sunday .. Saturday)\n\u003c/dd\u003e\u003cdt\u003e%b\u003c/dt\u003e\u003cdd\u003e   locale's abbreviated month name (Jan..Dec)\n\u003c/dd\u003e\u003cdt\u003e%B\u003c/dt\u003e\u003cdd\u003e   locale's full month name (January..December)\n\u003c/dd\u003e\u003cdt\u003e%c\u003c/dt\u003e\u003cdd\u003e   locale's date and time format (Thu Mar 25 17:47:03 CET 2004)\n\u003c/dd\u003e\u003cdt\u003e%C\u003c/dt\u003e\u003cdd\u003e   century [00-99]\n\u003c/dd\u003e\u003cdt\u003e%d\u003c/dt\u003e\u003cdd\u003e   day of month, zero padded (01..31)\n\u003c/dd\u003e\u003cdt\u003e%D\u003c/dt\u003e\u003cdd\u003e   date (%m/%d/%y)\n\u003c/dd\u003e\u003cdt\u003e%e\u003c/dt\u003e\u003cdd\u003e   day of month, space padded ( 1..31)\n\u003c/dd\u003e\u003cdt\u003e%h\u003c/dt\u003e\u003cdd\u003e   same as %b\n\u003c/dd\u003e\u003cdt\u003e%H\u003c/dt\u003e\u003cdd\u003e   hour, 24-hour clock, zero padded (00..23)\n\u003c/dd\u003e\u003cdt\u003e%I\u003c/dt\u003e\u003cdd\u003e   hour, 12-hour clock, zero padded (01..12)\n\u003c/dd\u003e\u003cdt\u003e%j\u003c/dt\u003e\u003cdd\u003e   day of the year, zero padded (001..366)\n\u003c/dd\u003e\u003cdt\u003e%k\u003c/dt\u003e\u003cdd\u003e   hour, 24-hour clock, space padded ( 0..23)\n\u003c/dd\u003e\u003cdt\u003e%l\u003c/dt\u003e\u003cdd\u003e   hour, 12-hour clock, space padded ( 1..12)\n\u003c/dd\u003e\u003cdt\u003e%m\u003c/dt\u003e\u003cdd\u003e   month, zero padded (01..12)\n\u003c/dd\u003e\u003cdt\u003e%M\u003c/dt\u003e\u003cdd\u003e   minute, zero padded (00..59)\n\u003c/dd\u003e\u003cdt\u003e%n\u003c/dt\u003e\u003cdd\u003e   a newline character\n\u003c/dd\u003e\u003cdt\u003e%p\u003c/dt\u003e\u003cdd\u003e   locale's AM or PM indicator\n\u003c/dd\u003e\u003cdt\u003e%r\u003c/dt\u003e\u003cdd\u003e   locale's 12-hour time format (hh:mm:ss AM/PM)\n\u003c/dd\u003e\u003cdt\u003e%R\u003c/dt\u003e\u003cdd\u003e   hours and minutes, 24-hour clock (hh:mm)\n\u003c/dd\u003e\u003cdt\u003e%s\u003c/dt\u003e\u003cdd\u003e   * seconds since '00:00:00 1970-01-01 UTC'\n\u003c/dd\u003e\u003cdt\u003e%S\u003c/dt\u003e\u003cdd\u003e   seconds, zero padded (00..59)\n\u003c/dd\u003e\u003cdt\u003e%t\u003c/dt\u003e\u003cdd\u003e   a horizontal tab character\n\u003c/dd\u003e\u003cdt\u003e%T\u003c/dt\u003e\u003cdd\u003e   time, 24-hour clock (hh:mm:ss)\n\u003c/dd\u003e\u003cdt\u003e%u\u003c/dt\u003e\u003cdd\u003e   numeric day of the week (1=Monday, 7=Sunday)\n\u003c/dd\u003e\u003cdt\u003e%U\u003c/dt\u003e\u003cdd\u003e   * week number, weeks starting on Sunday, zero padded (01-53)\n\u003c/dd\u003e\u003cdt\u003e%V\u003c/dt\u003e\u003cdd\u003e   * week number (as per ISO-8601),\n             week 1 is the first week with a Thursday,\n             zero padded, (01-53)\n\u003c/dd\u003e\u003cdt\u003e%w\u003c/dt\u003e\u003cdd\u003e   numeric day of the week, (0=Sunday, 6=Monday)\n\u003c/dd\u003e\u003cdt\u003e%W\u003c/dt\u003e\u003cdd\u003e   * week number, weeks starting on Monday, zero padded (01-53)\n\u003c/dd\u003e\u003cdt\u003e%x\u003c/dt\u003e\u003cdd\u003e   locale's preferred way of printing dates (%m/%d/%y)\n\u003c/dd\u003e\u003cdt\u003e%X\u003c/dt\u003e\u003cdd\u003e   locale's preferred way of printing time. (%H:%M:%S)\n\u003c/dd\u003e\u003cdt\u003e%y\u003c/dt\u003e\u003cdd\u003e   year, within century, zero padded (00..99)\n\u003c/dd\u003e\u003cdt\u003e%Y\u003c/dt\u003e\u003cdd\u003e   year, including century. Not padded\n           (this is probably a bug, but formatCalendarTime does\n           it this way). (0-9999)\n\u003c/dd\u003e\u003cdt\u003e%Z\u003c/dt\u003e\u003cdd\u003e   time zone abbreviation (e.g. CET) or RFC-822 style numeric\n           timezone (-0500) \n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Time.ParseDate",
          "name": "parseCalendarTime",
          "package": "MissingH",
          "signature": "TimeLocale-\u003e String-\u003e String-\u003e Maybe CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Parse date string as formatted by formatCalendarTime The resulting CalendarTime will only have those fields set that are represented by format specifier in the format string and those fields will be set to the values given in the date string If the same field is specified multiple times the rightmost occurence takes precedence The resulting date is not neccessarily valid date For example if there is no day of the week specifier in the format string the value of ctWDay will most likely be invalid Format specifiers are followed by some character All other characters are treated literally Whitespace in the format string matches zero or more arbitrary whitespace characters Format specifiers marked with are matched but do not set any field in the output Some of the format specifiers are marked as space-padded or zero-padded Regardless of this space-padded zero-padded or unpadded inputs are accepted Note that strings using unpadded fields without separating the fields may cause strange parsing Supported format specfiers character locale abbreviated weekday name Sun Sat locale full weekday name Sunday Saturday locale abbreviated month name Jan..Dec locale full month name January..December locale date and time format Thu Mar CET century day of month zero padded date day of month space padded same as hour hour clock zero padded hour hour clock zero padded day of the year zero padded hour hour clock space padded hour hour clock space padded month zero padded minute zero padded newline character locale AM or PM indicator locale hour time format hh mm ss AM PM hours and minutes hour clock hh mm seconds since UTC seconds zero padded horizontal tab character time hour clock hh mm ss numeric day of the week Monday Sunday week number weeks starting on Sunday zero padded week number as per ISO-8601 week is the first week with Thursday zero padded numeric day of the week Sunday Monday week number weeks starting on Monday zero padded locale preferred way of printing dates locale preferred way of printing time year within century zero padded year including century Not padded this is probably bug but formatCalendarTime does it this way time zone abbreviation e.g CET or RFC-822 style numeric timezone",
          "hierarchy": "System Time ParseDate",
          "module": "System.Time.ParseDate",
          "name": "parseCalendarTime",
          "normalized": "TimeLocale-\u003eString-\u003eString-\u003eMaybe CalendarTime",
          "package": "MissingH",
          "partial": "Calendar Time",
          "signature": "TimeLocale-\u003eString-\u003eString-\u003eMaybe CalendarTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-ParseDate.html#v:parseCalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various Haskell utilities for dealing with times and\ndates.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Time.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/System-Time-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various Haskell utilities for dealing with times and dates Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "System Time Utils",
          "module": "System.Time.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a ClockTime to something represented with an arbitrary Real.\nThe result could be treated as a CTime from Foreign.C.Types or EpochTime from\nSystem.Posix.Types.  The inverse of \u003ccode\u003e\u003ca\u003eepochToClockTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFractions of a second are not preserved by this function. \n\u003c/p\u003e",
          "module": "System.Time.Utils",
          "name": "clockTimeToEpoch",
          "package": "MissingH",
          "signature": "ClockTime -\u003e a",
          "source": "src/System-Time-Utils.html#clockTimeToEpoch",
          "type": "function"
        },
        "index": {
          "description": "Converts ClockTime to something represented with an arbitrary Real The result could be treated as CTime from Foreign.C.Types or EpochTime from System.Posix.Types The inverse of epochToClockTime Fractions of second are not preserved by this function",
          "hierarchy": "System Time Utils",
          "module": "System.Time.Utils",
          "name": "clockTimeToEpoch",
          "normalized": "ClockTime-\u003ea",
          "package": "MissingH",
          "partial": "Time To Epoch",
          "signature": "ClockTime-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:clockTimeToEpoch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJanuary 1, 1970, midnight, UTC, represented as a CalendarTime. \n\u003c/p\u003e",
          "module": "System.Time.Utils",
          "name": "epoch",
          "package": "MissingH",
          "signature": "CalendarTime",
          "source": "src/System-Time-Utils.html#epoch",
          "type": "function"
        },
        "index": {
          "description": "January midnight UTC represented as CalendarTime",
          "hierarchy": "System Time Utils",
          "module": "System.Time.Utils",
          "name": "epoch",
          "package": "MissingH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:epoch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an Epoch time represented with an arbitrary Real to a ClockTime.\nThis input could be a CTime from Foreign.C.Types or an EpochTime from\nSystem.Posix.Types. \n\u003c/p\u003e",
          "module": "System.Time.Utils",
          "name": "epochToClockTime",
          "package": "MissingH",
          "signature": "a -\u003e ClockTime",
          "source": "src/System-Time-Utils.html#epochToClockTime",
          "type": "function"
        },
        "index": {
          "description": "Converts an Epoch time represented with an arbitrary Real to ClockTime This input could be CTime from Foreign.C.Types or an EpochTime from System.Posix.Types",
          "hierarchy": "System Time Utils",
          "module": "System.Time.Utils",
          "name": "epochToClockTime",
          "normalized": "a-\u003eClockTime",
          "package": "MissingH",
          "partial": "To Clock Time",
          "signature": "a-\u003eClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:epochToClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a number of seconds as a human-readable amount.  Shows the two\nmost significant places.  For instance:\n\u003c/p\u003e\u003cpre\u003erenderSecs 121 = \"2m1s\"\n\u003c/pre\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003erenderTD\u003c/a\u003e\u003c/code\u003e for a function that works on a TimeDiff.\n\u003c/p\u003e",
          "module": "System.Time.Utils",
          "name": "renderSecs",
          "package": "MissingH",
          "signature": "Integer -\u003e String",
          "source": "src/System-Time-Utils.html#renderSecs",
          "type": "function"
        },
        "index": {
          "description": "Render number of seconds as human-readable amount Shows the two most significant places For instance renderSecs m1s See also renderTD for function that works on TimeDiff",
          "hierarchy": "System Time Utils",
          "module": "System.Time.Utils",
          "name": "renderSecs",
          "normalized": "Integer-\u003eString",
          "package": "MissingH",
          "partial": "Secs",
          "signature": "Integer-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:renderSecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erenderSecs\u003c/a\u003e\u003c/code\u003e, but takes a TimeDiff instead of an integer second\ncount. \n\u003c/p\u003e",
          "module": "System.Time.Utils",
          "name": "renderTD",
          "package": "MissingH",
          "signature": "TimeDiff -\u003e String",
          "source": "src/System-Time-Utils.html#renderTD",
          "type": "function"
        },
        "index": {
          "description": "Like renderSecs but takes TimeDiff instead of an integer second count",
          "hierarchy": "System Time Utils",
          "module": "System.Time.Utils",
          "name": "renderTD",
          "normalized": "TimeDiff-\u003eString",
          "package": "MissingH",
          "partial": "TD",
          "signature": "TimeDiff-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:renderTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the given timeDiff to the number of seconds it represents. \n\u003c/p\u003e\u003cp\u003eUses the same algorithm as normalizeTimeDiff in GHC. \n\u003c/p\u003e",
          "module": "System.Time.Utils",
          "name": "timeDiffToSecs",
          "package": "MissingH",
          "signature": "TimeDiff -\u003e Integer",
          "source": "src/System-Time-Utils.html#timeDiffToSecs",
          "type": "function"
        },
        "index": {
          "description": "Converts the given timeDiff to the number of seconds it represents Uses the same algorithm as normalizeTimeDiff in GHC",
          "hierarchy": "System Time Utils",
          "module": "System.Time.Utils",
          "name": "timeDiffToSecs",
          "normalized": "TimeDiff-\u003eInteger",
          "package": "MissingH",
          "partial": "Diff To Secs",
          "signature": "TimeDiff-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:timeDiffToSecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the specified CalendarTime (see System.Time) to seconds-since-epoch time.\n\u003c/p\u003e\u003cp\u003eThis conversion does respect the timezone specified on the input object.\nIf you want a conversion from UTC, specify ctTZ = 0 and ctIsDST = False.\n\u003c/p\u003e\u003cp\u003eWhen called like that, the behavior is equivolent to the GNU C function\ntimegm().  Unlike the C library, Haskell's CalendarTime supports\ntimezone information, so if such information is specified, it will impact\nthe result.\n\u003c/p\u003e",
          "module": "System.Time.Utils",
          "name": "timegm",
          "package": "MissingH",
          "signature": "CalendarTime -\u003e Integer",
          "source": "src/System-Time-Utils.html#timegm",
          "type": "function"
        },
        "index": {
          "description": "Converts the specified CalendarTime see System.Time to seconds-since-epoch time This conversion does respect the timezone specified on the input object If you want conversion from UTC specify ctTZ and ctIsDST False When called like that the behavior is equivolent to the GNU function timegm Unlike the library Haskell CalendarTime supports timezone information so if such information is specified it will impact the result",
          "hierarchy": "System Time Utils",
          "module": "System.Time.Utils",
          "name": "timegm",
          "normalized": "CalendarTime-\u003eInteger",
          "package": "MissingH",
          "signature": "CalendarTime-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:timegm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the specified CalendarTime (see System.Time) to \nseconds-since-epoch format.\n\u003c/p\u003e\u003cp\u003eThe input CalendarTime is assumed to be the time as given in your local\ntimezone.  All timezone and DST fields in the object are ignored.\n\u003c/p\u003e\u003cp\u003eThis behavior is equivolent to the timelocal() and mktime() functions that\nC programmers are accustomed to.\n\u003c/p\u003e\u003cp\u003ePlease note that the behavior for this function during the hour immediately\nbefore or after a DST switchover may produce a result with a different hour\nthan you expect.\n\u003c/p\u003e",
          "module": "System.Time.Utils",
          "name": "timelocal",
          "package": "MissingH",
          "signature": "CalendarTime -\u003e IO Integer",
          "source": "src/System-Time-Utils.html#timelocal",
          "type": "function"
        },
        "index": {
          "description": "Converts the specified CalendarTime see System.Time to seconds-since-epoch format The input CalendarTime is assumed to be the time as given in your local timezone All timezone and DST fields in the object are ignored This behavior is equivolent to the timelocal and mktime functions that programmers are accustomed to Please note that the behavior for this function during the hour immediately before or after DST switchover may produce result with different hour than you expect",
          "hierarchy": "System Time Utils",
          "module": "System.Time.Utils",
          "name": "timelocal",
          "normalized": "CalendarTime-\u003eIO Integer",
          "package": "MissingH",
          "signature": "CalendarTime-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:timelocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "Utils",
          "package": "MissingH",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "Utils",
          "package": "MissingH",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "GeneralizedToken",
          "package": "MissingH",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#GeneralizedToken",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "GeneralizedToken",
          "package": "MissingH",
          "partial": "Generalized Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#t:GeneralizedToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "GeneralizedTokenParser",
          "package": "MissingH",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#GeneralizedTokenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "GeneralizedTokenParser",
          "package": "MissingH",
          "partial": "Generalized Token Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#t:GeneralizedTokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches all items and returns them \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "allg",
          "package": "MissingH",
          "signature": "GeneralizedTokenParser a st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#allg",
          "type": "function"
        },
        "index": {
          "description": "Matches all items and returns them",
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "allg",
          "normalized": "GeneralizedTokenParser a b[a]",
          "package": "MissingH",
          "signature": "GeneralizedTokenParser a st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:allg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches one item not in a list and returns it. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "noneOfg",
          "package": "MissingH",
          "signature": "[a] -\u003e GeneralizedTokenParser a st a",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#noneOfg",
          "type": "function"
        },
        "index": {
          "description": "Matches one item not in list and returns it",
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "noneOfg",
          "normalized": "[a]-\u003eGeneralizedTokenParser a b a",
          "package": "MissingH",
          "partial": "Ofg",
          "signature": "[a]-\u003eGeneralizedTokenParser a st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:noneOfg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRunning \u003ccode\u003enotMatching p msg\u003c/code\u003e will try to apply parser p.\nIf it fails, returns ().  If it succeds, cause a failure and raise\nthe given error message.  It will not consume input in either case. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "notMatching",
          "package": "MissingH",
          "signature": "GenParser a b c -\u003e String -\u003e GenParser a b ()",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#notMatching",
          "type": "function"
        },
        "index": {
          "description": "Running notMatching msg will try to apply parser If it fails returns If it succeds cause failure and raise the given error message It will not consume input in either case",
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "notMatching",
          "normalized": "GenParser a b c-\u003eString-\u003eGenParser a b()",
          "package": "MissingH",
          "partial": "Matching",
          "signature": "GenParser a b c-\u003eString-\u003eGenParser a b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:notMatching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches one item in a list and returns it. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "oneOfg",
          "package": "MissingH",
          "signature": "[a] -\u003e GeneralizedTokenParser a st a",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#oneOfg",
          "type": "function"
        },
        "index": {
          "description": "Matches one item in list and returns it",
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "oneOfg",
          "normalized": "[a]-\u003eGeneralizedTokenParser a b a",
          "package": "MissingH",
          "partial": "Ofg",
          "signature": "[a]-\u003eGeneralizedTokenParser a st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:oneOfg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shortcut to \u003ccode\u003e\u003ca\u003etokeng\u003c/a\u003e\u003c/code\u003e; the test here is just a function that returns\na Bool.  If the result is true; return that value -- otherwise, an error.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "satisfyg",
          "package": "MissingH",
          "signature": "(a -\u003e Bool) -\u003e GeneralizedTokenParser a st a",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#satisfyg",
          "type": "function"
        },
        "index": {
          "description": "shortcut to tokeng the test here is just function that returns Bool If the result is true return that value otherwise an error",
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "satisfyg",
          "normalized": "(a-\u003eBool)-\u003eGeneralizedTokenParser a b a",
          "package": "MissingH",
          "signature": "(a-\u003eBool)-\u003eGeneralizedTokenParser a st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:satisfyg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches one specific token and returns it. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "specificg",
          "package": "MissingH",
          "signature": "a -\u003e GeneralizedTokenParser a st a",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#specificg",
          "type": "function"
        },
        "index": {
          "description": "Matches one specific token and returns it",
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "specificg",
          "normalized": "a-\u003eGeneralizedTokenParser a b a",
          "package": "MissingH",
          "signature": "a-\u003eGeneralizedTokenParser a st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:specificg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate (return) a \u003ccode\u003e\u003ca\u003eGeneralizedToken\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "togtok",
          "package": "MissingH",
          "signature": "a -\u003e GenParser b st (GeneralizedToken a)",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#togtok",
          "type": "function"
        },
        "index": {
          "description": "Generate return GeneralizedToken",
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "togtok",
          "normalized": "a-\u003eGenParser b c(GeneralizedToken a)",
          "package": "MissingH",
          "signature": "a-\u003eGenParser b st(GeneralizedToken a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:togtok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the next token from a \u003ccode\u003e\u003ca\u003eGeneralizedToken\u003c/a\u003e\u003c/code\u003e stream.\n   The given function should return the value to use, or Nothing\n   to cause an error. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "tokeng",
          "package": "MissingH",
          "signature": "(a -\u003e Maybe b) -\u003e GeneralizedTokenParser a st b",
          "source": "src/Text-ParserCombinators-Parsec-Utils.html#tokeng",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the next token from GeneralizedToken stream The given function should return the value to use or Nothing to cause an error",
          "hierarchy": "Text ParserCombinators Parsec Utils",
          "module": "Text.ParserCombinators.Parsec.Utils",
          "name": "tokeng",
          "normalized": "(a-\u003eMaybe b)-\u003eGeneralizedTokenParser a c b",
          "package": "MissingH",
          "signature": "(a-\u003eMaybe b)-\u003eGeneralizedTokenParser a st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:tokeng"
      }
    }
  ]
]