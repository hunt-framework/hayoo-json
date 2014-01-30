[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Control-Concurrent-Thread-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with threads.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Thread.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Thread-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with threads Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Control Concurrent Thread Utils",
        "module": "Control.Concurrent.Thread.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Control-Concurrent-Thread-Utils.html#v:runInThread",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a IO action and a function.  The IO action will be called in a \nseparate thread.  When it is completed, the specified function is called with\nits result.  This is a simple way of doing callbacks. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Utils",
        "fct-package": "MissingH",
        "fct-signature": "IO a -\u003e (a -\u003e IO b) -\u003e IO ThreadId",
        "fct-source": "src/Control-Concurrent-Thread-Utils.html#runInThread",
        "fct-type": "function",
        "title": "runInThread"
      },
      "index": {
        "description": "Takes IO action and function The IO action will be called in separate thread When it is completed the specified function is called with its result This is simple way of doing callbacks",
        "hierarchy": "Control Concurrent Thread Utils",
        "module": "Control.Concurrent.Thread.Utils",
        "name": "runInThread",
        "normalized": "IO a-\u003e(a-\u003eIO b)-\u003eIO ThreadId",
        "package": "MissingH",
        "partial": "In Thread",
        "signature": "IO a-\u003e(a-\u003eIO b)-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for packing into bins\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis module is designed to solve this type of problem: Given a bunch of\nobjects of varying sizes, what is the best possible way to pack them into\nfixed-size bins?  This can be used, for instance, by the datapacker program\nto pack files onto CDs or DVDs; by manufacturing environments to pack\nphysical items into physicl bins; etc.\n\u003c/p\u003e\u003cp\u003eA description of bin packing algorithms can be found at\n\u003ca\u003ehttp://en.wikipedia.org/wiki/Bin_packing_problem\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BinPacking",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-BinPacking.html",
        "fct-type": "module",
        "title": "BinPacking"
      },
      "index": {
        "description": "Tools for packing into bins Written by John Goerzen jgoerzen@complete.org This module is designed to solve this type of problem Given bunch of objects of varying sizes what is the best possible way to pack them into fixed-size bins This can be used for instance by the datapacker program to pack files onto CDs or DVDs by manufacturing environments to pack physical items into physicl bins etc description of bin packing algorithms can be found at http en.wikipedia.org wiki Bin packing problem",
        "hierarchy": "Data BinPacking",
        "module": "Data.BinPacking",
        "name": "BinPacking",
        "normalized": "",
        "package": "MissingH",
        "partial": "Bin Packing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#t:BinPacker",
      "description": {
        "fct-descr": "\u003cp\u003eThe primary type for bin-packing functions.\n\u003c/p\u003e\u003cp\u003eThese functions take a list of size of bins.  If every bin is the same size,\nyou can pass \u003ccode\u003erepeat binSize\u003c/code\u003e to pass an infinite list of bins if the\nsame size.  Any surplus bins will simply be ignored. \n\u003c/p\u003e\u003cpre\u003e [size] is the sizes of bins\n [(size, obj)] is the sizes and objects\n result is Either error or results\n\u003c/pre\u003e",
        "fct-module": "Data.BinPacking",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Data-BinPacking.html#BinPacker",
        "fct-type": "type",
        "title": "BinPacker"
      },
      "index": {
        "description": "The primary type for bin-packing functions These functions take list of size of bins If every bin is the same size you can pass repeat binSize to pass an infinite list of bins if the same size Any surplus bins will simply be ignored size is the sizes of bins size obj is the sizes and objects result is Either error or results",
        "hierarchy": "Data BinPacking",
        "module": "Data.BinPacking",
        "name": "BinPacker",
        "normalized": "",
        "package": "MissingH",
        "partial": "Bin Packer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#t:BinPackerError",
      "description": {
        "fct-descr": "\u003cp\u003ePotential errors returned as Left values by \u003ccode\u003e\u003ca\u003eBinPacker\u003c/a\u003e\u003c/code\u003e functions. \nCalling \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e on this value will produce a nice error message suitable for\ndisplay. \n\u003c/p\u003e",
        "fct-module": "Data.BinPacking",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Data-BinPacking.html#BinPackerError",
        "fct-type": "data",
        "title": "BinPackerError"
      },
      "index": {
        "description": "Potential errors returned as Left values by BinPacker functions Calling show on this value will produce nice error message suitable for display",
        "hierarchy": "Data BinPacking",
        "module": "Data.BinPacking",
        "name": "BinPackerError",
        "normalized": "",
        "package": "MissingH",
        "partial": "Bin Packer Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:BPOther",
      "description": {
        "fct-descr": "\u003cp\u003eOther error\n\u003c/p\u003e",
        "fct-module": "Data.BinPacking",
        "fct-package": "MissingH",
        "fct-signature": "BPOther String",
        "fct-source": "src/Data-BinPacking.html#BinPackerError",
        "fct-type": "function",
        "title": "BPOther"
      },
      "index": {
        "description": "Other error",
        "hierarchy": "Data BinPacking",
        "module": "Data.BinPacking",
        "name": "BPOther",
        "normalized": "",
        "package": "MissingH",
        "partial": "BPOther",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:BPSizeTooLarge",
      "description": {
        "fct-descr": "\u003cp\u003eBin size1 exceeded by at least the given object and size\n\u003c/p\u003e",
        "fct-module": "Data.BinPacking",
        "fct-package": "MissingH",
        "fct-signature": "BPSizeTooLarge size (size, obj)",
        "fct-source": "src/Data-BinPacking.html#BinPackerError",
        "fct-type": "function",
        "title": "BPSizeTooLarge"
      },
      "index": {
        "description": "Bin size1 exceeded by at least the given object and size",
        "hierarchy": "Data BinPacking",
        "module": "Data.BinPacking",
        "name": "BPSizeTooLarge",
        "normalized": "BPSizeTooLarge a(a,b)",
        "package": "MissingH",
        "partial": "BPSize Too Large",
        "signature": "BPSizeTooLarge size(size,obj)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:BPTooFewBins",
      "description": {
        "fct-descr": "\u003cp\u003eRan out of bins; attached value is the list of objects that do not fit\n\u003c/p\u003e",
        "fct-module": "Data.BinPacking",
        "fct-package": "MissingH",
        "fct-signature": "BPTooFewBins [(size, obj)]",
        "fct-source": "src/Data-BinPacking.html#BinPackerError",
        "fct-type": "function",
        "title": "BPTooFewBins"
      },
      "index": {
        "description": "Ran out of bins attached value is the list of objects that do not fit",
        "hierarchy": "Data BinPacking",
        "module": "Data.BinPacking",
        "name": "BPTooFewBins",
        "normalized": "BPTooFewBins[(a,b)]",
        "package": "MissingH",
        "partial": "BPToo Few Bins",
        "signature": "BPTooFewBins[(size,obj)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:packByOrder",
      "description": {
        "fct-descr": "\u003cp\u003ePack objects into bins, preserving order.  Objects will be taken from the\ninput list one by one, and added to each bin until the bin is full.  Work will\nthen proceed on the next bin.  No attempt is made to optimize allocations to\nbins.  This is the simplest and most naive bin-packing algorithm, but\nmay not make very good use of bin space. \n\u003c/p\u003e",
        "fct-module": "Data.BinPacking",
        "fct-package": "MissingH",
        "fct-signature": "BinPacker",
        "fct-source": "src/Data-BinPacking.html#packByOrder",
        "fct-type": "function",
        "title": "packByOrder"
      },
      "index": {
        "description": "Pack objects into bins preserving order Objects will be taken from the input list one by one and added to each bin until the bin is full Work will then proceed on the next bin No attempt is made to optimize allocations to bins This is the simplest and most naive bin-packing algorithm but may not make very good use of bin space",
        "hierarchy": "Data BinPacking",
        "module": "Data.BinPacking",
        "name": "packByOrder",
        "normalized": "",
        "package": "MissingH",
        "partial": "By Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-BinPacking.html#v:packLargeFirst",
      "description": {
        "fct-descr": "\u003cp\u003ePack objects into bins.  For each bin, start with the largest objects,\nand keep packing the largest object from the remainder until no object can\nbe found to put in the bin.  This is substantially more efficient than\n\u003ccode\u003e\u003ca\u003epackByOrder\u003c/a\u003e\u003c/code\u003e, but requires sorting the input. \n\u003c/p\u003e",
        "fct-module": "Data.BinPacking",
        "fct-package": "MissingH",
        "fct-signature": "BinPacker",
        "fct-source": "src/Data-BinPacking.html#packLargeFirst",
        "fct-type": "function",
        "title": "packLargeFirst"
      },
      "index": {
        "description": "Pack objects into bins For each bin start with the largest objects and keep packing the largest object from the remainder until no object can be found to put in the bin This is substantially more efficient than packByOrder but requires sorting the input",
        "hierarchy": "Data BinPacking",
        "module": "Data.BinPacking",
        "name": "packLargeFirst",
        "normalized": "",
        "package": "MissingH",
        "partial": "Large First",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBit-related utilities\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bits.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Bits-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Bit-related utilities Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Data Bits Utils",
        "module": "Data.Bits.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:c2w8",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Char to a Word8. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Char -\u003e Word8",
        "fct-source": "src/Data-Bits-Utils.html#c2w8",
        "fct-type": "function",
        "title": "c2w8"
      },
      "index": {
        "description": "Converts Char to Word8",
        "hierarchy": "Data Bits Utils",
        "module": "Data.Bits.Utils",
        "name": "c2w8",
        "normalized": "Char-\u003eWord",
        "package": "MissingH",
        "partial": "",
        "signature": "Char-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:fromBytes",
      "description": {
        "fct-descr": "\u003cp\u003eThe opposite of \u003ccode\u003e\u003ca\u003egetBytes\u003c/a\u003e\u003c/code\u003e, this function builds a number based on\nits component bytes.\n\u003c/p\u003e\u003cp\u003eResults are undefined if any components of the input list are \u003e 0xff!\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-Bits-Utils.html#fromBytes",
        "fct-type": "function",
        "title": "fromBytes"
      },
      "index": {
        "description": "The opposite of getBytes this function builds number based on its component bytes Results are undefined if any components of the input list are xff",
        "hierarchy": "Data Bits Utils",
        "module": "Data.Bits.Utils",
        "name": "fromBytes",
        "normalized": "[a]-\u003ea",
        "package": "MissingH",
        "partial": "Bytes",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:getBytes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list representing the bytes that comprise a data type.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e getBytes (0x12345678::Int) -\u003e [0x12, 0x34, 0x56, 0x78]\n\u003c/pre\u003e",
        "fct-module": "Data.Bits.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Data-Bits-Utils.html#getBytes",
        "fct-type": "function",
        "title": "getBytes"
      },
      "index": {
        "description": "Returns list representing the bytes that comprise data type Example getBytes x12345678 Int x12 x34 x56 x78",
        "hierarchy": "Data Bits Utils",
        "module": "Data.Bits.Utils",
        "name": "getBytes",
        "normalized": "a-\u003e[a]",
        "package": "MissingH",
        "partial": "Bytes",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:s2w8",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a String to a [Word8]. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e [Word8]",
        "fct-source": "src/Data-Bits-Utils.html#s2w8",
        "fct-type": "function",
        "title": "s2w8"
      },
      "index": {
        "description": "Converts String to Word8",
        "hierarchy": "Data Bits Utils",
        "module": "Data.Bits.Utils",
        "name": "s2w8",
        "normalized": "String-\u003e[Word]",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:w82c",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Word8 to a Char. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Word8 -\u003e Char",
        "fct-source": "src/Data-Bits-Utils.html#w82c",
        "fct-type": "function",
        "title": "w82c"
      },
      "index": {
        "description": "Converts Word8 to Char",
        "hierarchy": "Data Bits Utils",
        "module": "Data.Bits.Utils",
        "name": "w82c",
        "normalized": "Word-\u003eChar",
        "package": "MissingH",
        "partial": "",
        "signature": "Word-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Bits-Utils.html#v:w82s",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a [Word8] to a String. \n\u003c/p\u003e",
        "fct-module": "Data.Bits.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[Word8] -\u003e String",
        "fct-source": "src/Data-Bits-Utils.html#w82s",
        "fct-type": "function",
        "title": "w82s"
      },
      "index": {
        "description": "Converts Word8 to String",
        "hierarchy": "Data Bits Utils",
        "module": "Data.Bits.Utils",
        "name": "w82s",
        "normalized": "[Word]-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "[Word]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-CSV.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell Parsec parsers for comma-separated value (CSV) files.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CSV",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-CSV.html",
        "fct-type": "module",
        "title": "CSV"
      },
      "index": {
        "description": "Haskell Parsec parsers for comma-separated value CSV files Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Data CSV",
        "module": "Data.CSV",
        "name": "CSV",
        "normalized": "",
        "package": "MissingH",
        "partial": "CSV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-CSV.html#v:csvFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse a Comma-Separated Value (CSV) file.  The return value is a list of\nlines; each line is a list of cells; and each cell is a String.\n\u003c/p\u003e\u003cp\u003ePlease note that CSV files may have a different number of cells on each line.\nAlso, it is impossible to distinguish a CSV line that has a call with no data\nfrom a CSV line that has no cells.\n\u003c/p\u003e\u003cp\u003eHere are some examples:\n\u003c/p\u003e\u003cpre\u003eInput (literal strings)          Parses As (Haskell String syntax)\n-------------------------------- ---------------------------------\n1,2,3                            [[\"1\", \"2\", \"3\"]]\n\nl1                               [[\"l1\"], [\"l2\"]]\nl2\n\n (empty line)                    [[\"\"]]\n\nNQ,\"Quoted\"                      [[\"NQ\", \"Quoted\"]]\n\nNQ,\"Embedded\"\"Quote\"             [[\"NQ\", \"Embedded\\\"Quote\"]]\n\u003c/pre\u003e\u003cp\u003eTo parse a String, you might use:\n\u003c/p\u003e\u003cpre\u003eimport Text.ParserCombinators.Parsec\nimport Data.String.CSV\n....\nparse csvFile \"\" mystring\n\u003c/pre\u003e\u003cp\u003eTo parse a file, you might instead use:\n\u003c/p\u003e\u003cpre\u003edo result \u003c- parseFromFile csvFile \"/path/to/file\"\n\u003c/pre\u003e\u003cp\u003ePlease note that the result of parsing will be of type\n(Either ParseError [[String]]).  A Left result indicates an error.\nFor more details, see the Parsec information.\n\u003c/p\u003e",
        "fct-module": "Data.CSV",
        "fct-package": "MissingH",
        "fct-signature": "CharParser st [[String]]",
        "fct-source": "src/Data-CSV.html#csvFile",
        "fct-type": "function",
        "title": "csvFile"
      },
      "index": {
        "description": "Parse Comma-Separated Value CSV file The return value is list of lines each line is list of cells and each cell is String Please note that CSV files may have different number of cells on each line Also it is impossible to distinguish CSV line that has call with no data from CSV line that has no cells Here are some examples Input literal strings Parses As Haskell String syntax l1 l1 l2 l2 empty line NQ Quoted NQ Quoted NQ Embedded Quote NQ Embedded Quote To parse String you might use import Text.ParserCombinators.Parsec import Data.String.CSV parse csvFile mystring To parse file you might instead use do result parseFromFile csvFile path to file Please note that the result of parsing will be of type Either ParseError String Left result indicates an error For more details see the Parsec information",
        "hierarchy": "Data CSV",
        "module": "Data.CSV",
        "name": "csvFile",
        "normalized": "CharParser a[[String]]",
        "package": "MissingH",
        "partial": "File",
        "signature": "CharParser st[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-CSV.html#v:genCsvFile",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate CSV data for a file.  The resulting string can be\nwritten out to disk directly. \n\u003c/p\u003e",
        "fct-module": "Data.CSV",
        "fct-package": "MissingH",
        "fct-signature": "[[String]] -\u003e String",
        "fct-source": "src/Data-CSV.html#genCsvFile",
        "fct-type": "function",
        "title": "genCsvFile"
      },
      "index": {
        "description": "Generate CSV data for file The resulting string can be written out to disk directly",
        "hierarchy": "Data CSV",
        "module": "Data.CSV",
        "name": "genCsvFile",
        "normalized": "[[String]]-\u003eString",
        "package": "MissingH",
        "partial": "Csv File",
        "signature": "[[String]]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : \u003ca\u003eigloo@earth.li\u003c/a\u003e\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003eInflate algorithm implementation\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2004 Ian Lynagh\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Compression.Inflate",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Compression-Inflate.html",
        "fct-type": "module",
        "title": "Inflate"
      },
      "index": {
        "description": "Maintainer igloo@earth.li Stability provisional Portability portable Inflate algorithm implementation Copyright Ian Lynagh",
        "hierarchy": "Data Compression Inflate",
        "module": "Data.Compression.Inflate",
        "name": "Inflate",
        "normalized": "",
        "package": "MissingH",
        "partial": "Inflate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#t:Bit",
      "description": {
        "fct-module": "Data.Compression.Inflate",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Data-Compression-Inflate.html#Bit",
        "fct-type": "data",
        "title": "Bit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Compression Inflate",
        "module": "Data.Compression.Inflate",
        "name": "Bit",
        "normalized": "",
        "package": "MissingH",
        "partial": "Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#t:Output",
      "description": {
        "fct-module": "Data.Compression.Inflate",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Data-Compression-Inflate.html#Output",
        "fct-type": "type",
        "title": "Output"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Compression Inflate",
        "module": "Data.Compression.Inflate",
        "name": "Output",
        "normalized": "",
        "package": "MissingH",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#v:bits_to_word32",
      "description": {
        "fct-module": "Data.Compression.Inflate",
        "fct-package": "MissingH",
        "fct-signature": "[Bit] -\u003e Word32",
        "fct-source": "src/Data-Compression-Inflate.html#bits_to_word32",
        "fct-type": "function",
        "title": "bits_to_word32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Compression Inflate",
        "module": "Data.Compression.Inflate",
        "name": "bits_to_word32",
        "normalized": "[Bit]-\u003eWord",
        "package": "MissingH",
        "partial": "",
        "signature": "[Bit]-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#v:inflate",
      "description": {
        "fct-module": "Data.Compression.Inflate",
        "fct-package": "MissingH",
        "fct-signature": "[Int] -\u003e (Output, [Bit])",
        "fct-source": "src/Data-Compression-Inflate.html#inflate",
        "fct-type": "function",
        "title": "inflate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Compression Inflate",
        "module": "Data.Compression.Inflate",
        "name": "inflate",
        "normalized": "[Int]-\u003e(Output,[Bit])",
        "package": "MissingH",
        "partial": "",
        "signature": "[Int]-\u003e(Output,[Bit])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#v:inflate_string",
      "description": {
        "fct-module": "Data.Compression.Inflate",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-Compression-Inflate.html#inflate_string",
        "fct-type": "function",
        "title": "inflate_string"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Compression Inflate",
        "module": "Data.Compression.Inflate",
        "name": "inflate_string",
        "normalized": "String-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Compression-Inflate.html#v:inflate_string_remainder",
      "description": {
        "fct-descr": "\u003cp\u003eReturns (Data, Remainder)\n\u003c/p\u003e",
        "fct-module": "Data.Compression.Inflate",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e (String, String)",
        "fct-source": "src/Data-Compression-Inflate.html#inflate_string_remainder",
        "fct-type": "function",
        "title": "inflate_string_remainder"
      },
      "index": {
        "description": "Returns Data Remainder",
        "hierarchy": "Data Compression Inflate",
        "module": "Data.Compression.Inflate",
        "name": "inflate_string_remainder",
        "normalized": "String-\u003e(String,String)",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with the Either data type\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Either.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Either-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Utilities for working with the Either data type",
        "hierarchy": "Data Either Utils",
        "module": "Data.Either.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:eitherToMonadError",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an either and transforms it into something of the more generic\nMonadError class. \n\u003c/p\u003e",
        "fct-module": "Data.Either.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Either e a -\u003e m a",
        "fct-source": "src/Data-Either-Utils.html#eitherToMonadError",
        "fct-type": "function",
        "title": "eitherToMonadError"
      },
      "index": {
        "description": "Takes an either and transforms it into something of the more generic MonadError class",
        "hierarchy": "Data Either Utils",
        "module": "Data.Either.Utils",
        "name": "eitherToMonadError",
        "normalized": "Either a b-\u003ec b",
        "package": "MissingH",
        "partial": "To Monad Error",
        "signature": "Either e a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:forceEither",
      "description": {
        "fct-descr": "\u003cp\u003ePulls a \u003ca\u003eRight\u003c/a\u003e value out of an Either value.  If the Either value is\nLeft, raises an exception with \u003ca\u003eerror\u003c/a\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Either.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Either e a -\u003e a",
        "fct-source": "src/Data-Either-Utils.html#forceEither",
        "fct-type": "function",
        "title": "forceEither"
      },
      "index": {
        "description": "Pulls Right value out of an Either value If the Either value is Left raises an exception with error",
        "hierarchy": "Data Either Utils",
        "module": "Data.Either.Utils",
        "name": "forceEither",
        "normalized": "Either a b-\u003eb",
        "package": "MissingH",
        "partial": "Either",
        "signature": "Either e a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:forceEitherMsg",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eforceEither\u003c/a\u003e\u003c/code\u003e, but can raise a specific message with the error. \n\u003c/p\u003e",
        "fct-module": "Data.Either.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e Either e a -\u003e a",
        "fct-source": "src/Data-Either-Utils.html#forceEitherMsg",
        "fct-type": "function",
        "title": "forceEitherMsg"
      },
      "index": {
        "description": "Like forceEither but can raise specific message with the error",
        "hierarchy": "Data Either Utils",
        "module": "Data.Either.Utils",
        "name": "forceEitherMsg",
        "normalized": "String-\u003eEither a b-\u003eb",
        "package": "MissingH",
        "partial": "Either Msg",
        "signature": "String-\u003eEither e a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:fromEither",
      "description": {
        "fct-descr": "\u003cp\u003eTake an Either, and return the value inside it\n\u003c/p\u003e",
        "fct-module": "Data.Either.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Either a a -\u003e a",
        "fct-source": "src/Data-Either-Utils.html#fromEither",
        "fct-type": "function",
        "title": "fromEither"
      },
      "index": {
        "description": "Take an Either and return the value inside it",
        "hierarchy": "Data Either Utils",
        "module": "Data.Either.Utils",
        "name": "fromEither",
        "normalized": "Either a a-\u003ea",
        "package": "MissingH",
        "partial": "Either",
        "signature": "Either a a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:fromLeft",
      "description": {
        "fct-descr": "\u003cp\u003eTake a Left to a value, crashes on a Right\n\u003c/p\u003e",
        "fct-module": "Data.Either.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Either a b -\u003e a",
        "fct-source": "src/Data-Either-Utils.html#fromLeft",
        "fct-type": "function",
        "title": "fromLeft"
      },
      "index": {
        "description": "Take Left to value crashes on Right",
        "hierarchy": "Data Either Utils",
        "module": "Data.Either.Utils",
        "name": "fromLeft",
        "normalized": "Either a b-\u003ea",
        "package": "MissingH",
        "partial": "Left",
        "signature": "Either a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:fromRight",
      "description": {
        "fct-descr": "\u003cp\u003eTake a Right to a value, crashes on a Left\n\u003c/p\u003e",
        "fct-module": "Data.Either.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Either a b -\u003e b",
        "fct-source": "src/Data-Either-Utils.html#fromRight",
        "fct-type": "function",
        "title": "fromRight"
      },
      "index": {
        "description": "Take Right to value crashes on Left",
        "hierarchy": "Data Either Utils",
        "module": "Data.Either.Utils",
        "name": "fromRight",
        "normalized": "Either a b-\u003eb",
        "package": "MissingH",
        "partial": "Right",
        "signature": "Either a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Either-Utils.html#v:maybeToEither",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Maybe value to an Either value, using the supplied parameter\nas the Left value if the Maybe is Nothing.\n\u003c/p\u003e\u003cp\u003eThis function can be interpreted as:\n\u003c/p\u003e\u003cpre\u003emaybeToEither :: e -\u003e Maybe a -\u003e Either e a\u003c/pre\u003e\u003cp\u003eIts definition is given as it is so that it can be used in the Error and related monads.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Utils",
        "fct-package": "MissingH",
        "fct-signature": "e-\u003e Maybe a-\u003e m a",
        "fct-type": "function",
        "title": "maybeToEither"
      },
      "index": {
        "description": "Converts Maybe value to an Either value using the supplied parameter as the Left value if the Maybe is Nothing This function can be interpreted as maybeToEither Maybe Either Its definition is given as it is so that it can be used in the Error and related monads",
        "hierarchy": "Data Either Utils",
        "module": "Data.Either.Utils",
        "name": "maybeToEither",
        "normalized": "a-\u003eMaybe b-\u003ec b",
        "package": "MissingH",
        "partial": "To Either",
        "signature": "e-\u003eMaybe a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCRC32 checksumming using the GZIP/PKZIP algorithm as used in both\nISO 3309 and section 8.1.1.6.2 of ITU-T V.42 and referenced in \nRFC1952.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Hash.CRC32.GZip",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Hash-CRC32-GZip.html",
        "fct-type": "module",
        "title": "GZip"
      },
      "index": {
        "description": "CRC32 checksumming using the GZIP PKZIP algorithm as used in both ISO and section of ITU-T V.42 and referenced in RFC1952",
        "hierarchy": "Data Hash CRC32 GZip",
        "module": "Data.Hash.CRC32.GZip",
        "name": "GZip",
        "normalized": "",
        "package": "MissingH",
        "partial": "GZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#v:calc_crc32",
      "description": {
        "fct-module": "Data.Hash.CRC32.GZip",
        "fct-package": "MissingH",
        "fct-signature": "[Char] -\u003e Word32",
        "fct-source": "src/Data-Hash-CRC32-GZip.html#calc_crc32",
        "fct-type": "function",
        "title": "calc_crc32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash CRC32 GZip",
        "module": "Data.Hash.CRC32.GZip",
        "name": "calc_crc32",
        "normalized": "[Char]-\u003eWord",
        "package": "MissingH",
        "partial": "",
        "signature": "[Char]-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#v:gzipcrctab",
      "description": {
        "fct-module": "Data.Hash.CRC32.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Array Int Word32",
        "fct-source": "src/Data-Hash-CRC32-GZip.html#gzipcrctab",
        "fct-type": "function",
        "title": "gzipcrctab"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash CRC32 GZip",
        "module": "Data.Hash.CRC32.GZip",
        "name": "gzipcrctab",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#v:update_crc",
      "description": {
        "fct-module": "Data.Hash.CRC32.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Word32 -\u003e Char -\u003e Word32",
        "fct-source": "src/Data-Hash-CRC32-GZip.html#update_crc",
        "fct-type": "function",
        "title": "update_crc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash CRC32 GZip",
        "module": "Data.Hash.CRC32.GZip",
        "name": "update_crc",
        "normalized": "Word-\u003eChar-\u003eWord",
        "package": "MissingH",
        "partial": "",
        "signature": "Word-\u003eChar-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-GZip.html#v:update_crc_list",
      "description": {
        "fct-module": "Data.Hash.CRC32.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Word32 -\u003e [Char] -\u003e Word32",
        "fct-source": "src/Data-Hash-CRC32-GZip.html#update_crc_list",
        "fct-type": "function",
        "title": "update_crc_list"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash CRC32 GZip",
        "module": "Data.Hash.CRC32.GZip",
        "name": "update_crc_list",
        "normalized": "Word-\u003e[Char]-\u003eWord",
        "package": "MissingH",
        "partial": "",
        "signature": "Word-\u003e[Char]-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCRC32 checksumming using POSIX 1003.2-1992 algorithm for the polynomial { 32 26\n23 22 16 12 11 10 8 7 5 4 2 1 }, also defined in  ISO 8802-3: 1989.\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2002 HardCore SoftWare, Doug Hoyte\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Hash.CRC32.Posix",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Hash-CRC32-Posix.html",
        "fct-type": "module",
        "title": "Posix"
      },
      "index": {
        "description": "CRC32 checksumming using POSIX algorithm for the polynomial also defined in ISO Copyright HardCore SoftWare Doug Hoyte",
        "hierarchy": "Data Hash CRC32 Posix",
        "module": "Data.Hash.CRC32.Posix",
        "name": "Posix",
        "normalized": "",
        "package": "MissingH",
        "partial": "Posix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#v:calc_crc32",
      "description": {
        "fct-module": "Data.Hash.CRC32.Posix",
        "fct-package": "MissingH",
        "fct-signature": "[Char] -\u003e Word32 -\u003e Word32 -\u003e Word32",
        "fct-source": "src/Data-Hash-CRC32-Posix.html#calc_crc32",
        "fct-type": "function",
        "title": "calc_crc32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash CRC32 Posix",
        "module": "Data.Hash.CRC32.Posix",
        "name": "calc_crc32",
        "normalized": "[Char]-\u003eWord-\u003eWord-\u003eWord",
        "package": "MissingH",
        "partial": "",
        "signature": "[Char]-\u003eWord-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#v:crc32",
      "description": {
        "fct-module": "Data.Hash.CRC32.Posix",
        "fct-package": "MissingH",
        "fct-signature": "[Char] -\u003e Word32",
        "fct-source": "src/Data-Hash-CRC32-Posix.html#crc32",
        "fct-type": "function",
        "title": "crc32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash CRC32 Posix",
        "module": "Data.Hash.CRC32.Posix",
        "name": "crc32",
        "normalized": "[Char]-\u003eWord",
        "package": "MissingH",
        "partial": "",
        "signature": "[Char]-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#v:crctab",
      "description": {
        "fct-module": "Data.Hash.CRC32.Posix",
        "fct-package": "MissingH",
        "fct-signature": "Array Int Word32",
        "fct-source": "src/Data-Hash-CRC32-Posix.html#crctab",
        "fct-type": "function",
        "title": "crctab"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash CRC32 Posix",
        "module": "Data.Hash.CRC32.Posix",
        "name": "crctab",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-CRC32-Posix.html#v:iter_crc32",
      "description": {
        "fct-module": "Data.Hash.CRC32.Posix",
        "fct-package": "MissingH",
        "fct-signature": "Word32 -\u003e Char -\u003e Word32",
        "fct-source": "src/Data-Hash-CRC32-Posix.html#iter_crc32",
        "fct-type": "function",
        "title": "iter_crc32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash CRC32 Posix",
        "module": "Data.Hash.CRC32.Posix",
        "name": "iter_crc32",
        "normalized": "Word-\u003eChar-\u003eWord",
        "package": "MissingH",
        "partial": "",
        "signature": "Word-\u003eChar-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5-Zord64_HARD.html#",
      "description": {
        "fct-module": "Data.Hash.MD5.Zord64_HARD",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Hash-MD5-Zord64_HARD.html",
        "fct-type": "module",
        "title": "Zord64_HARD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5 Zord64_HARD",
        "module": "Data.Hash.MD5.Zord64_HARD",
        "name": "Zord64_HARD",
        "normalized": "",
        "package": "MissingH",
        "partial": "Zord HARD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5-Zord64_HARD.html#t:Zord64",
      "description": {
        "fct-module": "Data.Hash.MD5.Zord64_HARD",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Data-Hash-MD5-Zord64_HARD.html#Zord64",
        "fct-type": "data",
        "title": "Zord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5 Zord64_HARD",
        "module": "Data.Hash.MD5.Zord64_HARD",
        "name": "Zord64",
        "normalized": "",
        "package": "MissingH",
        "partial": "Zord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneration of MD5sums\n\u003c/p\u003e\u003cp\u003eWritten by Ian Lynagh, igloo@earth.li\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Hash-MD5.html",
        "fct-type": "module",
        "title": "MD5"
      },
      "index": {
        "description": "Generation of MD5sums Written by Ian Lynagh igloo@earth.li",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "MD5",
        "normalized": "",
        "package": "MissingH",
        "partial": "MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:ABCD",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Hash-MD5.html#ABCD",
        "fct-type": "newtype",
        "title": "ABCD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "ABCD",
        "normalized": "",
        "package": "MissingH",
        "partial": "ABCD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:BoolList",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Hash-MD5.html#BoolList",
        "fct-type": "newtype",
        "title": "BoolList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "BoolList",
        "normalized": "",
        "package": "MissingH",
        "partial": "Bool List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:MD5",
      "description": {
        "fct-descr": "\u003cp\u003eAnything we want to work out the MD5 of must be an instance of class MD5\n\u003c/p\u003e",
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "class",
        "fct-source": "src/Data-Hash-MD5.html#MD5",
        "fct-type": "class",
        "title": "MD5"
      },
      "index": {
        "description": "Anything we want to work out the MD5 of must be an instance of class MD5",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "MD5",
        "normalized": "",
        "package": "MissingH",
        "partial": "MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:Str",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Hash-MD5.html#Str",
        "fct-type": "newtype",
        "title": "Str"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "Str",
        "normalized": "",
        "package": "MissingH",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:WordList",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Hash-MD5.html#WordList",
        "fct-type": "newtype",
        "title": "WordList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "WordList",
        "normalized": "",
        "package": "MissingH",
        "partial": "Word List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#t:Zord64",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Data-Hash-MD5.html#Zord64",
        "fct-type": "type",
        "title": "Zord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "Zord64",
        "normalized": "",
        "package": "MissingH",
        "partial": "Zord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:ABCD",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "ABCD (Word32, Word32, Word32, Word32)",
        "fct-source": "src/Data-Hash-MD5.html#ABCD",
        "fct-type": "function",
        "title": "ABCD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "ABCD",
        "normalized": "ABCD(Word,Word,Word,Word)",
        "package": "MissingH",
        "partial": "ABCD",
        "signature": "ABCD(Word,Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:BoolList",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "BoolList [Bool]",
        "fct-source": "src/Data-Hash-MD5.html#BoolList",
        "fct-type": "function",
        "title": "BoolList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "BoolList",
        "normalized": "BoolList[Bool]",
        "package": "MissingH",
        "partial": "Bool List",
        "signature": "BoolList[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:Str",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "Str String",
        "fct-source": "src/Data-Hash-MD5.html#Str",
        "fct-type": "function",
        "title": "Str"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "Str",
        "normalized": "",
        "package": "MissingH",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:WordList",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "WordList ([Word32], Zord64)",
        "fct-source": "src/Data-Hash-MD5.html#WordList",
        "fct-type": "function",
        "title": "WordList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "WordList",
        "normalized": "WordList([Word],Zord)",
        "package": "MissingH",
        "partial": "Word List",
        "signature": "WordList([Word],Zord)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:finished",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Data-Hash-MD5.html#finished",
        "fct-type": "method",
        "title": "finished"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "finished",
        "normalized": "a-\u003eBool",
        "package": "MissingH",
        "partial": "",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:get_next",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e ([Word32], Int, a)",
        "fct-source": "src/Data-Hash-MD5.html#get_next",
        "fct-type": "method",
        "title": "get_next"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "get_next",
        "normalized": "a-\u003e([Word],Int,a)",
        "package": "MissingH",
        "partial": "",
        "signature": "a-\u003e([Word],Int,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:len_pad",
      "description": {
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "Zord64 -\u003e a -\u003e a",
        "fct-source": "src/Data-Hash-MD5.html#len_pad",
        "fct-type": "method",
        "title": "len_pad"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "len_pad",
        "normalized": "Zord-\u003ea-\u003ea",
        "package": "MissingH",
        "partial": "",
        "signature": "Zord-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:md5",
      "description": {
        "fct-descr": "\u003cp\u003eThe simplest function, gives you the MD5 of a string as 4-tuple of\n  32bit words. \n\u003c/p\u003e",
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e ABCD",
        "fct-source": "src/Data-Hash-MD5.html#md5",
        "fct-type": "function",
        "title": "md5"
      },
      "index": {
        "description": "The simplest function gives you the MD5 of string as tuple of bit words",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "md5",
        "normalized": "a-\u003eABCD",
        "package": "MissingH",
        "partial": "",
        "signature": "a-\u003eABCD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:md5i",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an integer equivalent to hex number from \u003ccode\u003e\u003ca\u003emd5s\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Integer",
        "fct-source": "src/Data-Hash-MD5.html#md5i",
        "fct-type": "function",
        "title": "md5i"
      },
      "index": {
        "description": "Returns an integer equivalent to hex number from md5s",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "md5i",
        "normalized": "a-\u003eInteger",
        "package": "MissingH",
        "partial": "",
        "signature": "a-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Hash-MD5.html#v:md5s",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a hex number ala the md5sum program. \n\u003c/p\u003e",
        "fct-module": "Data.Hash.MD5",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-Hash-MD5.html#md5s",
        "fct-type": "function",
        "title": "md5s"
      },
      "index": {
        "description": "Returns hex number ala the md5sum program",
        "hierarchy": "Data Hash MD5",
        "module": "Data.Hash.MD5",
        "name": "md5s",
        "normalized": "a-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with lists.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-List-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with lists Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#t:WholeFunc",
      "description": {
        "fct-descr": "\u003cp\u003eThe type used for functions for \u003ccode\u003e\u003ca\u003ewholeMap\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003ewholeMap\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "newtype",
        "fct-source": "src/Data-List-Utils.html#WholeFunc",
        "fct-type": "newtype",
        "title": "WholeFunc"
      },
      "index": {
        "description": "The type used for functions for wholeMap See wholeMap for details",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "WholeFunc",
        "normalized": "",
        "package": "MissingH",
        "partial": "Whole Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:WholeFunc",
      "description": {
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "WholeFunc ([a] -\u003e (WholeFunc a b, [a], [b]))",
        "fct-source": "src/Data-List-Utils.html#WholeFunc",
        "fct-type": "function",
        "title": "WholeFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "WholeFunc",
        "normalized": "WholeFunc([a]-\u003e(WholeFunc a b,[a],[b]))",
        "package": "MissingH",
        "partial": "Whole Func",
        "signature": "WholeFunc([a]-\u003e(WholeFunc a b,[a],[b]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:addToAL",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the specified (key, value) pair to the given list, removing any\nexisting pair with the same key already present. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[(key, elt)] -\u003e key -\u003e elt -\u003e [(key, elt)]",
        "fct-source": "src/Data-List-Utils.html#addToAL",
        "fct-type": "function",
        "title": "addToAL"
      },
      "index": {
        "description": "Adds the specified key value pair to the given list removing any existing pair with the same key already present",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "addToAL",
        "normalized": "[(a,b)]-\u003ea-\u003eb-\u003e[(a,b)]",
        "package": "MissingH",
        "partial": "To AL",
        "signature": "[(key,elt)]-\u003ekey-\u003eelt-\u003e[(key,elt)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:alwaysElemRIndex",
      "description": {
        "fct-descr": "\u003cp\u003eLike elemRIndex, but returns -1 if there is nothing\nfound. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [a] -\u003e Int",
        "fct-source": "src/Data-List-Utils.html#alwaysElemRIndex",
        "fct-type": "function",
        "title": "alwaysElemRIndex"
      },
      "index": {
        "description": "Like elemRIndex but returns if there is nothing found",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "alwaysElemRIndex",
        "normalized": "a-\u003e[a]-\u003eInt",
        "package": "MissingH",
        "partial": "Elem RIndex",
        "signature": "a-\u003e[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:breakList",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to Data.List.break, but performs the test on the entire remaining\nlist instead of just one element.\n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "([a] -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Data-List-Utils.html#breakList",
        "fct-type": "function",
        "title": "breakList"
      },
      "index": {
        "description": "Similar to Data.List.break but performs the test on the entire remaining list instead of just one element",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "breakList",
        "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "MissingH",
        "partial": "List",
        "signature": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:contains",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.List.isInfixOf, will be removed in MissingH 1.1.0\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eReturns true if the given parameter is a sublist of the given list;\nfalse otherwise.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e contains \"Haskell\" \"I really like Haskell.\" -\u003e True\n contains \"Haskell\" \"OCaml is great.\" -\u003e False\n\u003c/pre\u003e\u003cp\u003eThis function was submitted to GHC and was applied as\n\u003ccode\u003e\u003ca\u003eisInfixOf\u003c/a\u003e\u003c/code\u003e.  This function therefore is deprecated and will\nbe removed in future versions.\n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Utils.html#contains",
        "fct-type": "function",
        "title": "contains"
      },
      "index": {
        "description": "Deprecated Use Data.List.isInfixOf will be removed in MissingH Returns true if the given parameter is sublist of the given list false otherwise Example contains Haskell really like Haskell True contains Haskell OCaml is great False This function was submitted to GHC and was applied as isInfixOf This function therefore is deprecated and will be removed in future versions",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "contains",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:countElem",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a count of the number of times the given element occured in the\ngiven list. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [a] -\u003e Int",
        "fct-source": "src/Data-List-Utils.html#countElem",
        "fct-type": "function",
        "title": "countElem"
      },
      "index": {
        "description": "Returns count of the number of times the given element occured in the given list",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "countElem",
        "normalized": "a-\u003e[a]-\u003eInt",
        "package": "MissingH",
        "partial": "Elem",
        "signature": "a-\u003e[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:delFromAL",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves all (key, value) pairs from the given list where the key\nmatches the given one. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[(key, a)] -\u003e key -\u003e [(key, a)]",
        "fct-source": "src/Data-List-Utils.html#delFromAL",
        "fct-type": "function",
        "title": "delFromAL"
      },
      "index": {
        "description": "Removes all key value pairs from the given list where the key matches the given one",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "delFromAL",
        "normalized": "[(a,b)]-\u003ea-\u003e[(a,b)]",
        "package": "MissingH",
        "partial": "From AL",
        "signature": "[(key,a)]-\u003ekey-\u003e[(key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:dropWhileList",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to Data.List.dropWhile, drops elements while the func is true.\nThe function is given the remainder of the list to examine. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "([a] -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#dropWhileList",
        "fct-type": "function",
        "title": "dropWhileList"
      },
      "index": {
        "description": "Similar to Data.List.dropWhile drops elements while the func is true The function is given the remainder of the list to examine",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "dropWhileList",
        "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "MissingH",
        "partial": "While List",
        "signature": "([a]-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:elemRIndex",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the rightmost index of the given element in the\ngiven list. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [a] -\u003e Maybe Int",
        "fct-source": "src/Data-List-Utils.html#elemRIndex",
        "fct-type": "function",
        "title": "elemRIndex"
      },
      "index": {
        "description": "Returns the rightmost index of the given element in the given list",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "elemRIndex",
        "normalized": "a-\u003e[a]-\u003eMaybe Int",
        "package": "MissingH",
        "partial": "RIndex",
        "signature": "a-\u003e[a]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:endswith",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the given list ends with the specified elements;\nfalse otherwise.  (This is an alias for \u003ca\u003eData.List.isSuffixOf\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e endswith \"lo\" \"Hello\" -\u003e True\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Utils.html#endswith",
        "fct-type": "function",
        "title": "endswith"
      },
      "index": {
        "description": "Returns true if the given list ends with the specified elements false otherwise This is an alias for Data.List.isSuffixOf Example endswith lo Hello True",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "endswith",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:fixedWidth",
      "description": {
        "fct-descr": "\u003cp\u003eA parser designed to process fixed-width input fields.  Use it with\n\u003ccode\u003e\u003ca\u003ewholeMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe Int list passed to this function is the list of the field widths desired\nfrom the input.  The result is a list of those widths, if possible.  If any\nof the input remains after processing this list, it is added on as the final\nelement in the result list.  If the input is less than the sum of the requested\nwidths, then the result list will be short the appropriate number of elements,\nand its final element may be shorter than requested.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003ewholeMap (fixedWidth [1, 2, 3]) \"1234567890\"\n --\u003e [\"1\",\"23\",\"456\",\"7890\"]\nwholeMap (fixedWidth (repeat 2)) \"123456789\"\n --\u003e [\"12\",\"34\",\"56\",\"78\",\"9\"]\nwholeMap (fixedWidth []) \"123456789\"\n --\u003e [\"123456789\"]\nwholeMap (fixedWidth [5, 3, 6, 1]) \"Hello, This is a test.\"\n --\u003e [\"Hello\",\", T\",\"his is\",\" \",\"a test.\"]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[Int] -\u003e WholeFunc a [a]",
        "fct-source": "src/Data-List-Utils.html#fixedWidth",
        "fct-type": "function",
        "title": "fixedWidth"
      },
      "index": {
        "description": "parser designed to process fixed-width input fields Use it with wholeMap The Int list passed to this function is the list of the field widths desired from the input The result is list of those widths if possible If any of the input remains after processing this list it is added on as the final element in the result list If the input is less than the sum of the requested widths then the result list will be short the appropriate number of elements and its final element may be shorter than requested Examples wholeMap fixedWidth wholeMap fixedWidth repeat wholeMap fixedWidth wholeMap fixedWidth Hello This is test Hello his is test",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "fixedWidth",
        "normalized": "[Int]-\u003eWholeFunc a[a]",
        "package": "MissingH",
        "partial": "Width",
        "signature": "[Int]-\u003eWholeFunc a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:flipAL",
      "description": {
        "fct-descr": "\u003cp\u003eFlips an association list.  Converts (key1, val), (key2, val) pairs\nto (val, [key1, key2]). \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[(key, val)] -\u003e [(val, [key])]",
        "fct-source": "src/Data-List-Utils.html#flipAL",
        "fct-type": "function",
        "title": "flipAL"
      },
      "index": {
        "description": "Flips an association list Converts key1 val key2 val pairs to val key1 key2",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "flipAL",
        "normalized": "[(a,b)]-\u003e[(b,[a])]",
        "package": "MissingH",
        "partial": "AL",
        "signature": "[(key,val)]-\u003e[(val,[key])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:genericJoin",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e, but works with a list of anything showable, converting\nit to a String.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e genericJoin \", \" [1, 2, 3, 4] -\u003e \"1, 2, 3, 4\"\n genericJoin \"|\" [\"foo\", \"bar\", \"baz\"] -\u003e \"\\\"foo\\\"|\\\"bar\\\"|\\\"baz\\\"\"\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e [a] -\u003e String",
        "fct-source": "src/Data-List-Utils.html#genericJoin",
        "fct-type": "function",
        "title": "genericJoin"
      },
      "index": {
        "description": "Like join but works with list of anything showable converting it to String Examples genericJoin genericJoin foo bar baz foo bar baz",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "genericJoin",
        "normalized": "String-\u003e[a]-\u003eString",
        "package": "MissingH",
        "partial": "Join",
        "signature": "String-\u003e[a]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:grab",
      "description": {
        "fct-descr": "\u003cp\u003eHelps you pick out fixed-width components from a list.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003econv :: String -\u003e (String,String)\nconv = runState $\n        do f3 \u003c- grab 3\n           n2 \u003c- grab 2\n           return $ f3 ++ \",\" ++ n2\n\nmain = print $ conv \"TestIng\"\n\u003c/pre\u003e\u003cp\u003ePrints:\n\u003c/p\u003e\u003cpre\u003e(\"Tes,tI\",\"ng\")\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e State [a] [a]",
        "fct-source": "src/Data-List-Utils.html#grab",
        "fct-type": "function",
        "title": "grab"
      },
      "index": {
        "description": "Helps you pick out fixed-width components from list Example conv String String String conv runState do f3 grab n2 grab return f3 n2 main print conv TestIng Prints Tes tI ng",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "grab",
        "normalized": "Int-\u003eState[a][a]",
        "package": "MissingH",
        "partial": "",
        "signature": "Int-\u003eState[a][a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:hasAny",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the given list contains any of the elements in the search\nlist. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a]-\u003e [a]-\u003e Bool",
        "fct-type": "function",
        "title": "hasAny"
      },
      "index": {
        "description": "Returns true if the given list contains any of the elements in the search list",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "hasAny",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "MissingH",
        "partial": "Any",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:hasKeyAL",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates whether or not the given key is in the AL. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [(a, b)] -\u003e Bool",
        "fct-source": "src/Data-List-Utils.html#hasKeyAL",
        "fct-type": "function",
        "title": "hasKeyAL"
      },
      "index": {
        "description": "Indicates whether or not the given key is in the AL",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "hasKeyAL",
        "normalized": "a-\u003e[(a,b)]-\u003eBool",
        "package": "MissingH",
        "partial": "Key AL",
        "signature": "a-\u003e[(a,b)]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a delimiter and a list of items (or strings), join the items\nby using the delimiter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e join \"|\" [\"foo\", \"bar\", \"baz\"] -\u003e \"foo|bar|baz\"\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [[a]] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Given delimiter and list of items or strings join the items by using the delimiter Example join foo bar baz foo bar baz",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "join",
        "normalized": "[a]-\u003e[[a]]-\u003e[a]",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:keysAL",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the keys that comprise the (key, value) pairs of the given AL.\n\u003c/p\u003e\u003cp\u003eSame as:\n\u003c/p\u003e\u003cpre\u003emap fst\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[(key, a)] -\u003e [key]",
        "fct-source": "src/Data-List-Utils.html#keysAL",
        "fct-type": "function",
        "title": "keysAL"
      },
      "index": {
        "description": "Returns the keys that comprise the key value pairs of the given AL Same as map fst",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "keysAL",
        "normalized": "[(a,b)]-\u003e[a]",
        "package": "MissingH",
        "partial": "AL",
        "signature": "[(key,a)]-\u003e[key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two sorted lists into a single, sorted whole.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e merge [1,3,5] [1,2,4,6] -\u003e [1,1,2,3,4,5,6]\n\u003c/pre\u003e\u003cp\u003eQuickCheck test property:\n\u003c/p\u003e\u003cp\u003eprop_merge xs ys =\n    merge (sort xs) (sort ys) == sort (xs ++ ys)\n          where types = xs :: [Int]\n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Merge two sorted lists into single sorted whole Example merge QuickCheck test property prop merge xs ys merge sort xs sort ys sort xs ys where types xs Int",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "merge",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:mergeBy",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two sorted lists using into a single, sorted whole,\nallowing the programmer to specify the comparison function.\n\u003c/p\u003e\u003cp\u003eQuickCheck test property:\n\u003c/p\u003e\u003cp\u003eprop_mergeBy xs ys =\n    mergeBy cmp (sortBy cmp xs) (sortBy cmp ys) == sortBy cmp (xs ++ ys)\n          where types = xs :: [ (Int, Int) ]\n                cmp (x1,_) (x2,_) = compare x1 x2\n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#mergeBy",
        "fct-type": "function",
        "title": "mergeBy"
      },
      "index": {
        "description": "Merge two sorted lists using into single sorted whole allowing the programmer to specify the comparison function QuickCheck test property prop mergeBy xs ys mergeBy cmp sortBy cmp xs sortBy cmp ys sortBy cmp xs ys where types xs Int Int cmp x1 x2 compare x1 x2",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "mergeBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "MissingH",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list and a replacement list, replaces each occurance of the search\nlist with the replacement list in the operation list.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003ereplace \",\" \".\" \"127,0,0,1\" -\u003e \"127.0.0.1\"\n\u003c/pre\u003e\u003cp\u003eThis could logically be thought of as:\n\u003c/p\u003e\u003cpre\u003ereplace old new l = join new . split old $ l\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Given list and replacement list replaces each occurance of the search list with the replacement list in the operation list Example replace This could logically be thought of as replace old new join new split old",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "replace",
        "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:seqList",
      "description": {
        "fct-descr": "\u003cp\u003eForces the evaluation of the entire list. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#seqList",
        "fct-type": "function",
        "title": "seqList"
      },
      "index": {
        "description": "Forces the evaluation of the entire list",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "seqList",
        "normalized": "[a]-\u003e[a]",
        "package": "MissingH",
        "partial": "List",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:spanList",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to Data.List.span, but performs the test on the entire remaining\nlist instead of just one element. \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003espanList p xs\u003c/code\u003e is the same as \u003ccode\u003e(takeWhileList p xs, dropWhileList p xs)\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "([a] -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Data-List-Utils.html#spanList",
        "fct-type": "function",
        "title": "spanList"
      },
      "index": {
        "description": "Similar to Data.List.span but performs the test on the entire remaining list instead of just one element spanList xs is the same as takeWhileList xs dropWhileList xs",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "spanList",
        "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "MissingH",
        "partial": "List",
        "signature": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a delimiter and a list (or string), split into components.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e split \",\" \"foo,bar,,baz,\" -\u003e [\"foo\", \"bar\", \"\", \"baz\", \"\"]\n\u003c/pre\u003e\u003cpre\u003e split \"ba\" \",foo,bar,,baz,\" -\u003e [\",foo,\",\"r,,\",\"z,\"]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Utils.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Given delimiter and list or string split into components Example split foo bar baz foo bar baz split ba foo bar baz foo",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "split",
        "normalized": "[a]-\u003e[a]-\u003e[[a]]",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:startswith",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the given list starts with the specified elements;\nfalse otherwise.  (This is an alias for \u003ca\u003eData.List.isPrefixOf\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e startswith \"He\" \"Hello\" -\u003e True\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Utils.html#startswith",
        "fct-type": "function",
        "title": "startswith"
      },
      "index": {
        "description": "Returns true if the given list starts with the specified elements false otherwise This is an alias for Data.List.isPrefixOf Example startswith He Hello True",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "startswith",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:strFromAL",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an association list to a string.  The string will have\none pair per line, with the key and value both represented as a Haskell string.\n\u003c/p\u003e\u003cp\u003eThis function is designed to work with [(String, String)] association lists,\nbut may work with other types as well. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[(a, b)] -\u003e String",
        "fct-source": "src/Data-List-Utils.html#strFromAL",
        "fct-type": "function",
        "title": "strFromAL"
      },
      "index": {
        "description": "Converts an association list to string The string will have one pair per line with the key and value both represented as Haskell string This function is designed to work with String String association lists but may work with other types as well",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "strFromAL",
        "normalized": "[(a,b)]-\u003eString",
        "package": "MissingH",
        "partial": "From AL",
        "signature": "[(a,b)]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:strToAL",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003estrFromAL\u003c/a\u003e\u003c/code\u003e, this function reads a string and outputs the\nappropriate association list. \n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003estrFromAL\u003c/a\u003e\u003c/code\u003e, this is designed to work with [(String, String)] association\nlists but may also work with other objects with simple representations.\n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e [(a, b)]",
        "fct-source": "src/Data-List-Utils.html#strToAL",
        "fct-type": "function",
        "title": "strToAL"
      },
      "index": {
        "description": "The inverse of strFromAL this function reads string and outputs the appropriate association list Like strFromAL this is designed to work with String String association lists but may also work with other objects with simple representations",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "strToAL",
        "normalized": "String-\u003e[(a,b)]",
        "package": "MissingH",
        "partial": "To AL",
        "signature": "String-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:subIndex",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to Data.List.elemIndex.  Instead of looking for one element in a\nlist, this function looks for the first occurance of a sublist in the list,\nand returns the index of the first element of that occurance.  If there is no\nsuch list, returns Nothing.\n\u003c/p\u003e\u003cp\u003eIf the list to look for is the empty list, will return Just 0 regardless\nof the content of the list to search.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003esubIndex \"foo\" \"asdfoobar\" -\u003e Just 3\nsubIndex \"foo\" [] -\u003e Nothing\nsubIndex \"\" [] -\u003e Just 0\nsubIndex \"\" \"asdf\" -\u003e Just 0\nsubIndex \"test\" \"asdftestbartest\" -\u003e Just 4\nsubIndex [(1::Int), 2] [0, 5, 3, 2, 1, 2, 4] -\u003e Just 4\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e Maybe Int",
        "fct-source": "src/Data-List-Utils.html#subIndex",
        "fct-type": "function",
        "title": "subIndex"
      },
      "index": {
        "description": "Similar to Data.List.elemIndex Instead of looking for one element in list this function looks for the first occurance of sublist in the list and returns the index of the first element of that occurance If there is no such list returns Nothing If the list to look for is the empty list will return Just regardless of the content of the list to search Examples subIndex foo asdfoobar Just subIndex foo Nothing subIndex Just subIndex asdf Just subIndex test asdftestbartest Just subIndex Int Just",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "subIndex",
        "normalized": "[a]-\u003e[a]-\u003eMaybe Int",
        "package": "MissingH",
        "partial": "Index",
        "signature": "[a]-\u003e[a]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:takeWhileList",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to Data.List.takeWhile, takes elements while the func is true.\nThe function is given the remainder of the list to examine. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "([a] -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#takeWhileList",
        "fct-type": "function",
        "title": "takeWhileList"
      },
      "index": {
        "description": "Similar to Data.List.takeWhile takes elements while the func is true The function is given the remainder of the list to examine",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "takeWhileList",
        "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "MissingH",
        "partial": "While List",
        "signature": "([a]-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:uniq",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list, returns a new list with all duplicate elements removed.\nFor example:\n\u003c/p\u003e\u003cpre\u003euniq \"Mississippi\" -\u003e \"Misp\"\n\u003c/pre\u003e\u003cp\u003eYou should not rely on this function necessarily preserving order, though\nthe current implementation happens to.\n\u003c/p\u003e\u003cp\u003eThis function is not compatible with infinite lists.\n\u003c/p\u003e\u003cp\u003eThis is presently an alias for Data.List.nub\n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#uniq",
        "fct-type": "function",
        "title": "uniq"
      },
      "index": {
        "description": "Given list returns new list with all duplicate elements removed For example uniq Mississippi Misp You should not rely on this function necessarily preserving order though the current implementation happens to This function is not compatible with infinite lists This is presently an alias for Data.List.nub",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "uniq",
        "normalized": "[a]-\u003e[a]",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:valuesAL",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the values the comprise the (key, value) pairs of the given\nAL.\n\u003c/p\u003e\u003cp\u003eSame as:\n\u003c/p\u003e\u003cpre\u003emap snd\n\u003c/pre\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[(a, value)] -\u003e [value]",
        "fct-source": "src/Data-List-Utils.html#valuesAL",
        "fct-type": "function",
        "title": "valuesAL"
      },
      "index": {
        "description": "Returns the values the comprise the key value pairs of the given AL Same as map snd",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "valuesAL",
        "normalized": "[(a,b)]-\u003e[b]",
        "package": "MissingH",
        "partial": "AL",
        "signature": "[(a,value)]-\u003e[value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-List-Utils.html#v:wholeMap",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an enhanced version of the concatMap or map functions in \nData.List.\n\u003c/p\u003e\u003cp\u003eUnlike those functions, this one:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Can consume a varying number of elements from the input list during\n   each iteration\n\u003c/li\u003e\u003cli\u003e Can arbitrarily decide when to stop processing data\n\u003c/li\u003e\u003cli\u003e Can return a varying number of elements to insert into the output list\n\u003c/li\u003e\u003cli\u003e Can actually switch processing functions mid-stream\n\u003c/li\u003e\u003cli\u003e Is not even restricted to processing the input list intact\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe function used by wholeMap, of type \u003ccode\u003e\u003ca\u003eWholeFunc\u003c/a\u003e\u003c/code\u003e, is repeatedly called\nwith the input list.  The function returns three things: the function\nto call for the next iteration (if any), what remains of the input list,\nand the list of output elements generated during this iteration.  The return\nvalue of \u003ccode\u003e\u003ca\u003ewholeMap\u003c/a\u003e\u003c/code\u003e is the concatenation of the output element lists from\nall iterations.\n\u003c/p\u003e\u003cp\u003eProcessing stops when the remaining input list is empty.  An example\nof a \u003ccode\u003e\u003ca\u003eWholeFunc\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003efixedWidth\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.List.Utils",
        "fct-package": "MissingH",
        "fct-signature": "WholeFunc a b -\u003e [a] -\u003e [b]",
        "fct-source": "src/Data-List-Utils.html#wholeMap",
        "fct-type": "function",
        "title": "wholeMap"
      },
      "index": {
        "description": "This is an enhanced version of the concatMap or map functions in Data.List Unlike those functions this one Can consume varying number of elements from the input list during each iteration Can arbitrarily decide when to stop processing data Can return varying number of elements to insert into the output list Can actually switch processing functions mid-stream Is not even restricted to processing the input list intact The function used by wholeMap of type WholeFunc is repeatedly called with the input list The function returns three things the function to call for the next iteration if any what remains of the input list and the list of output elements generated during this iteration The return value of wholeMap is the concatenation of the output element lists from all iterations Processing stops when the remaining input list is empty An example of WholeFunc is fixedWidth",
        "hierarchy": "Data List Utils",
        "module": "Data.List.Utils",
        "name": "wholeMap",
        "normalized": "WholeFunc a b-\u003e[a]-\u003e[b]",
        "package": "MissingH",
        "partial": "Map",
        "signature": "WholeFunc a b-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for guessing MIME types of files.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-MIME-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Utilities for guessing MIME types of files Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "Types",
        "normalized": "",
        "package": "MissingH",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#t:MIMEResults",
      "description": {
        "fct-descr": "\u003cp\u003eReturn value from guessing a file's type.\n\u003c/p\u003e\u003cp\u003eThe first element of the tuple gives the MIME type.  It is Nothing if no\nsuitable type could be found.\n\u003c/p\u003e\u003cp\u003eThe second element gives the encoding.  It is Nothing if there was no particular\nencoding for the file, or if no encoding could be found.\n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Data-MIME-Types.html#MIMEResults",
        "fct-type": "type",
        "title": "MIMEResults"
      },
      "index": {
        "description": "Return value from guessing file type The first element of the tuple gives the MIME type It is Nothing if no suitable type could be found The second element gives the encoding It is Nothing if there was no particular encoding for the file or if no encoding could be found",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "MIMEResults",
        "normalized": "",
        "package": "MissingH",
        "partial": "MIMEResults",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#t:MIMETypeData",
      "description": {
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Data-MIME-Types.html#MIMETypeData",
        "fct-type": "data",
        "title": "MIMETypeData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "MIMETypeData",
        "normalized": "",
        "package": "MissingH",
        "partial": "MIMEType Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:MIMETypeData",
      "description": {
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "MIMETypeData",
        "fct-source": "src/Data-MIME-Types.html#MIMETypeData",
        "fct-type": "function",
        "title": "MIMETypeData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "MIMETypeData",
        "normalized": "",
        "package": "MissingH",
        "partial": "MIMEType Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:commonTypesMap",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping used to augment the \u003ccode\u003e\u003ca\u003etypesMap\u003c/a\u003e\u003c/code\u003e when non-strict\n lookups are used.\n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "Map String String",
        "fct-source": "src/Data-MIME-Types.html#MIMETypeData",
        "fct-type": "function",
        "title": "commonTypesMap"
      },
      "index": {
        "description": "mapping used to augment the typesMap when non-strict lookups are used",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "commonTypesMap",
        "normalized": "",
        "package": "MissingH",
        "partial": "Types Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:defaultmtd",
      "description": {
        "fct-descr": "\u003cp\u003eDefault MIME type data to use \n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "MIMETypeData",
        "fct-source": "src/Data-MIME-Types.html#defaultmtd",
        "fct-type": "function",
        "title": "defaultmtd"
      },
      "index": {
        "description": "Default MIME type data to use",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "defaultmtd",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:encodingsMap",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping used to determine the encoding of a file.\n This is used, for instance, to map \u003ca\u003e.gz\u003c/a\u003e to \u003ca\u003egzip\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "Map String String",
        "fct-source": "src/Data-MIME-Types.html#MIMETypeData",
        "fct-type": "function",
        "title": "encodingsMap"
      },
      "index": {
        "description": "mapping used to determine the encoding of file This is used for instance to map gz to gzip",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "encodingsMap",
        "normalized": "",
        "package": "MissingH",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:guessAllExtensions",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eguessExtension\u003c/a\u003e\u003c/code\u003e, but returns a list of all possible matching\nextensions, or the empty list if there are no matches. \n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "MIMETypeData-\u003e Bool-\u003e String-\u003e [String]",
        "fct-type": "function",
        "title": "guessAllExtensions"
      },
      "index": {
        "description": "Similar to guessExtension but returns list of all possible matching extensions or the empty list if there are no matches",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "guessAllExtensions",
        "normalized": "MIMETypeData-\u003eBool-\u003eString-\u003e[String]",
        "package": "MissingH",
        "partial": "All Extensions",
        "signature": "MIMETypeData-\u003eBool-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:guessExtension",
      "description": {
        "fct-descr": "\u003cp\u003eGuess the extension of a file based on its MIME type.\n   The return value includes the leading dot.\n\u003c/p\u003e\u003cp\u003eReturns Nothing if no extension could be found.\n\u003c/p\u003e\u003cp\u003eIn the event that multiple possible extensions are available,\n   one of them will be picked and returned.  The logic to select one\n   of these should be considered undefined. \n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "MIMETypeData-\u003e Bool-\u003e String-\u003e Maybe String",
        "fct-type": "function",
        "title": "guessExtension"
      },
      "index": {
        "description": "Guess the extension of file based on its MIME type The return value includes the leading dot Returns Nothing if no extension could be found In the event that multiple possible extensions are available one of them will be picked and returned The logic to select one of these should be considered undefined",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "guessExtension",
        "normalized": "MIMETypeData-\u003eBool-\u003eString-\u003eMaybe String",
        "package": "MissingH",
        "partial": "Extension",
        "signature": "MIMETypeData-\u003eBool-\u003eString-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:guessType",
      "description": {
        "fct-descr": "\u003cp\u003eGuess the type of a file given a filename or URL.  The file\n   is not opened; only the name is considered. \n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "MIMETypeData-\u003e Bool-\u003e String-\u003e MIMEResults",
        "fct-type": "function",
        "title": "guessType"
      },
      "index": {
        "description": "Guess the type of file given filename or URL The file is not opened only the name is considered",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "guessType",
        "normalized": "MIMETypeData-\u003eBool-\u003eString-\u003eMIMEResults",
        "package": "MissingH",
        "partial": "Type",
        "signature": "MIMETypeData-\u003eBool-\u003eString-\u003eMIMEResults"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:hReadMIMETypes",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a mime.types file from an already-open handle. \n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "MIMETypeData-\u003e Bool-\u003e Handle-\u003e IO MIMETypeData",
        "fct-type": "function",
        "title": "hReadMIMETypes"
      },
      "index": {
        "description": "Load mime.types file from an already-open handle",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "hReadMIMETypes",
        "normalized": "MIMETypeData-\u003eBool-\u003eHandle-\u003eIO MIMETypeData",
        "package": "MissingH",
        "partial": "Read MIMETypes",
        "signature": "MIMETypeData-\u003eBool-\u003eHandle-\u003eIO MIMETypeData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:readMIMETypes",
      "description": {
        "fct-descr": "\u003cp\u003eRead the given mime.types file and add it to an existing object.\nReturns new object. \n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "MIMETypeData-\u003e Bool-\u003e FilePath-\u003e IO MIMETypeData",
        "fct-type": "function",
        "title": "readMIMETypes"
      },
      "index": {
        "description": "Read the given mime.types file and add it to an existing object Returns new object",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "readMIMETypes",
        "normalized": "MIMETypeData-\u003eBool-\u003eFilePath-\u003eIO MIMETypeData",
        "package": "MissingH",
        "partial": "MIMETypes",
        "signature": "MIMETypeData-\u003eBool-\u003eFilePath-\u003eIO MIMETypeData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:readSystemMIMETypes",
      "description": {
        "fct-descr": "\u003cp\u003eRead the system's default mime.types files, and add the data contained\ntherein to the passed object, then return the new one. \n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "MIMETypeData -\u003e IO MIMETypeData",
        "fct-source": "src/Data-MIME-Types.html#readSystemMIMETypes",
        "fct-type": "function",
        "title": "readSystemMIMETypes"
      },
      "index": {
        "description": "Read the system default mime.types files and add the data contained therein to the passed object then return the new one",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "readSystemMIMETypes",
        "normalized": "MIMETypeData-\u003eIO MIMETypeData",
        "package": "MissingH",
        "partial": "System MIMETypes",
        "signature": "MIMETypeData-\u003eIO MIMETypeData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:suffixMap",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping used to expand common suffixes into equivolent,\n better-parsed versions.  For instance, \u003ca\u003e.tgz\u003c/a\u003e would expand\n into \u003ca\u003e.tar.gz\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "Map String String",
        "fct-source": "src/Data-MIME-Types.html#MIMETypeData",
        "fct-type": "function",
        "title": "suffixMap"
      },
      "index": {
        "description": "mapping used to expand common suffixes into equivolent better-parsed versions For instance tgz would expand into tar.gz",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "suffixMap",
        "normalized": "",
        "package": "MissingH",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-MIME-Types.html#v:typesMap",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping used to map extensions to MIME types.\n\u003c/p\u003e",
        "fct-module": "Data.MIME.Types",
        "fct-package": "MissingH",
        "fct-signature": "Map String String",
        "fct-source": "src/Data-MIME-Types.html#MIMETypeData",
        "fct-type": "function",
        "title": "typesMap"
      },
      "index": {
        "description": "mapping used to map extensions to MIME types",
        "hierarchy": "Data MIME Types",
        "module": "Data.MIME.Types",
        "name": "typesMap",
        "normalized": "",
        "package": "MissingH",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with Data.Maps.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Map.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Map-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with Data.Maps Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Data Map Utils",
        "module": "Data.Map.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:flipM",
      "description": {
        "fct-descr": "\u003cp\u003eFlips a Map.  See \u003ccode\u003e\u003ca\u003eflipAL\u003c/a\u003e\u003c/code\u003e for more on the similar\nfunction for lists. \n\u003c/p\u003e",
        "fct-module": "Data.Map.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Map key val -\u003e Map val [key]",
        "fct-source": "src/Data-Map-Utils.html#flipM",
        "fct-type": "function",
        "title": "flipM"
      },
      "index": {
        "description": "Flips Map See flipAL for more on the similar function for lists",
        "hierarchy": "Data Map Utils",
        "module": "Data.Map.Utils",
        "name": "flipM",
        "normalized": "Map a b-\u003eMap b[a]",
        "package": "MissingH",
        "partial": "",
        "signature": "Map key val-\u003eMap val[key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:flippedLookupM",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all keys in the Map whose value matches the\nparameter. If the value does not occur in the Map, the empty\nlist is returned. \n\u003c/p\u003e",
        "fct-module": "Data.Map.Utils",
        "fct-package": "MissingH",
        "fct-signature": "val -\u003e Map key val -\u003e [key]",
        "fct-source": "src/Data-Map-Utils.html#flippedLookupM",
        "fct-type": "function",
        "title": "flippedLookupM"
      },
      "index": {
        "description": "Returns list of all keys in the Map whose value matches the parameter If the value does not occur in the Map the empty list is returned",
        "hierarchy": "Data Map Utils",
        "module": "Data.Map.Utils",
        "name": "flippedLookupM",
        "normalized": "a-\u003eMap b a-\u003e[b]",
        "package": "MissingH",
        "partial": "Lookup",
        "signature": "val-\u003eMap key val-\u003e[key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:forceLookupM",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a lookup, and raises an exception (with an error message\nprepended with the given string) if the key could not be found.\n\u003c/p\u003e",
        "fct-module": "Data.Map.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e key -\u003e Map key elt -\u003e elt",
        "fct-source": "src/Data-Map-Utils.html#forceLookupM",
        "fct-type": "function",
        "title": "forceLookupM"
      },
      "index": {
        "description": "Performs lookup and raises an exception with an error message prepended with the given string if the key could not be found",
        "hierarchy": "Data Map Utils",
        "module": "Data.Map.Utils",
        "name": "forceLookupM",
        "normalized": "String-\u003ea-\u003eMap a b-\u003eb",
        "package": "MissingH",
        "partial": "Lookup",
        "signature": "String-\u003ekey-\u003eMap key elt-\u003eelt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:strFromM",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a String, String Map into a string representation.\nSee \u003ccode\u003e\u003ca\u003estrFromAL\u003c/a\u003e\u003c/code\u003e for more on the similar function for\nassociation lists.  This implementation is simple:\n\u003c/p\u003e\u003cpre\u003estrFromM = strFromAL . Data.Map.toList\n\u003c/pre\u003e\u003cp\u003eThis function is designed to work with Map String String objects,\nbut may also work with other objects with simple representations. \n\u003c/p\u003e",
        "fct-module": "Data.Map.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Map a b -\u003e String",
        "fct-source": "src/Data-Map-Utils.html#strFromM",
        "fct-type": "function",
        "title": "strFromM"
      },
      "index": {
        "description": "Converts String String Map into string representation See strFromAL for more on the similar function for association lists This implementation is simple strFromM strFromAL Data.Map.toList This function is designed to work with Map String String objects but may also work with other objects with simple representations",
        "hierarchy": "Data Map Utils",
        "module": "Data.Map.Utils",
        "name": "strFromM",
        "normalized": "Map a b-\u003eString",
        "package": "MissingH",
        "partial": "From",
        "signature": "Map a b-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Map-Utils.html#v:strToM",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a String into a String, String Map.  See\n\u003ccode\u003e\u003ca\u003estrToAL\u003c/a\u003e\u003c/code\u003e for more on the similar function for association\nlists.\n\u003c/p\u003e\u003cp\u003eThis implementation is simple:\n\u003c/p\u003e\u003cpre\u003estrToM = Data.Map.fromList . strToAL\n\u003c/pre\u003e\u003cp\u003eThis function is designed to work with Map String String objects,\nbut may work with other key/value combinations if they have simple\nrepresentations.  \n\u003c/p\u003e",
        "fct-module": "Data.Map.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e Map a b",
        "fct-source": "src/Data-Map-Utils.html#strToM",
        "fct-type": "function",
        "title": "strToM"
      },
      "index": {
        "description": "Converts String into String String Map See strToAL for more on the similar function for association lists This implementation is simple strToM Data.Map.fromList strToAL This function is designed to work with Map String String objects but may work with other key value combinations if they have simple representations",
        "hierarchy": "Data Map Utils",
        "module": "Data.Map.Utils",
        "name": "strToM",
        "normalized": "String-\u003eMap a b",
        "package": "MissingH",
        "partial": "To",
        "signature": "String-\u003eMap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Maybe-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with the Either data type\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Maybe.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Maybe-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Utilities for working with the Either data type",
        "hierarchy": "Data Maybe Utils",
        "module": "Data.Maybe.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Maybe-Utils.html#v:forceMaybe",
      "description": {
        "fct-descr": "\u003cp\u003ePulls a Just value out of a Maybe value.  If the Maybe value is\nNothing, raises an exception with error. \n\u003c/p\u003e",
        "fct-module": "Data.Maybe.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Maybe a -\u003e a",
        "fct-source": "src/Data-Maybe-Utils.html#forceMaybe",
        "fct-type": "function",
        "title": "forceMaybe"
      },
      "index": {
        "description": "Pulls Just value out of Maybe value If the Maybe value is Nothing raises an exception with error",
        "hierarchy": "Data Maybe Utils",
        "module": "Data.Maybe.Utils",
        "name": "forceMaybe",
        "normalized": "Maybe a-\u003ea",
        "package": "MissingH",
        "partial": "Maybe",
        "signature": "Maybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Maybe-Utils.html#v:forceMaybeMsg",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eforceMaybe\u003c/a\u003e\u003c/code\u003e, but lets you customize the error message raised if\nNothing is supplied. \n\u003c/p\u003e",
        "fct-module": "Data.Maybe.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e Maybe a -\u003e a",
        "fct-source": "src/Data-Maybe-Utils.html#forceMaybeMsg",
        "fct-type": "function",
        "title": "forceMaybeMsg"
      },
      "index": {
        "description": "Like forceMaybe but lets you customize the error message raised if Nothing is supplied",
        "hierarchy": "Data Maybe Utils",
        "module": "Data.Maybe.Utils",
        "name": "forceMaybeMsg",
        "normalized": "String-\u003eMaybe a-\u003ea",
        "package": "MissingH",
        "partial": "Maybe Msg",
        "signature": "String-\u003eMaybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTool for maintaining a status bar, supporting multiple simultaneous tasks,\nas a layer atop \u003ca\u003eData.Progress.Tracker\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Progress-Meter.html",
        "fct-type": "module",
        "title": "Meter"
      },
      "index": {
        "description": "Tool for maintaining status bar supporting multiple simultaneous tasks as layer atop Data.Progress.Tracker Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "Meter",
        "normalized": "",
        "package": "MissingH",
        "partial": "Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#t:ProgressMeter",
      "description": {
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Data-Progress-Meter.html#ProgressMeter",
        "fct-type": "type",
        "title": "ProgressMeter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "ProgressMeter",
        "normalized": "",
        "package": "MissingH",
        "partial": "Progress Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:addComponent",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new component to the list of components. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "ProgressMeter -\u003e Progress -\u003e IO ()",
        "fct-source": "src/Data-Progress-Meter.html#addComponent",
        "fct-type": "function",
        "title": "addComponent"
      },
      "index": {
        "description": "Add new component to the list of components",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "addComponent",
        "normalized": "ProgressMeter-\u003eProgress-\u003eIO()",
        "package": "MissingH",
        "partial": "Component",
        "signature": "ProgressMeter-\u003eProgress-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:autoDisplayMeter",
      "description": {
        "fct-descr": "\u003cp\u003eStarts a thread that updates the meter every n seconds by calling\nthe specified function.  Note: \u003ccode\u003edisplayMeter stdout\u003c/code\u003e\nis an ideal function here.\n\u003c/p\u003e\u003cp\u003eSave this threadID and use it later to call \u003ccode\u003estopAutoDisplayMeter\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "ProgressMeter-\u003e Int-\u003e (ProgressMeter -\u003e IO ())-\u003e IO ThreadId",
        "fct-type": "function",
        "title": "autoDisplayMeter"
      },
      "index": {
        "description": "Starts thread that updates the meter every seconds by calling the specified function Note displayMeter stdout is an ideal function here Save this threadID and use it later to call stopAutoDisplayMeter",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "autoDisplayMeter",
        "normalized": "ProgressMeter-\u003eInt-\u003e(ProgressMeter-\u003eIO())-\u003eIO ThreadId",
        "package": "MissingH",
        "partial": "Display Meter",
        "signature": "ProgressMeter-\u003eInt-\u003e(ProgressMeter-\u003eIO())-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:clearMeter",
      "description": {
        "fct-descr": "\u003cp\u003eClears the meter -- outputs CR, spaces equal to the width - 1,\nthen another CR.\n\u003c/p\u003e\u003cp\u003ePass stdout as the handle for regular display to the screen. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "Handle -\u003e ProgressMeter -\u003e IO ()",
        "fct-source": "src/Data-Progress-Meter.html#clearMeter",
        "fct-type": "function",
        "title": "clearMeter"
      },
      "index": {
        "description": "Clears the meter outputs CR spaces equal to the width then another CR Pass stdout as the handle for regular display to the screen",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "clearMeter",
        "normalized": "Handle-\u003eProgressMeter-\u003eIO()",
        "package": "MissingH",
        "partial": "Meter",
        "signature": "Handle-\u003eProgressMeter-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:displayMeter",
      "description": {
        "fct-descr": "\u003cp\u003eLike renderMeter, but prints it to the screen instead of returning it.\n\u003c/p\u003e\u003cp\u003eThis function will output CR, then the meter.\n\u003c/p\u003e\u003cp\u003ePass stdout as the handle for regular display to the screen. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "Handle -\u003e ProgressMeter -\u003e IO ()",
        "fct-source": "src/Data-Progress-Meter.html#displayMeter",
        "fct-type": "function",
        "title": "displayMeter"
      },
      "index": {
        "description": "Like renderMeter but prints it to the screen instead of returning it This function will output CR then the meter Pass stdout as the handle for regular display to the screen",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "displayMeter",
        "normalized": "Handle-\u003eProgressMeter-\u003eIO()",
        "package": "MissingH",
        "partial": "Meter",
        "signature": "Handle-\u003eProgressMeter-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:killAutoDisplayMeter",
      "description": {
        "fct-descr": "\u003cp\u003eStops the specified meter from displaying.\n\u003c/p\u003e\u003cp\u003eYou should probably call \u003ccode\u003e\u003ca\u003eclearMeter\u003c/a\u003e\u003c/code\u003e after a call to this. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "ProgressMeter -\u003e ThreadId -\u003e IO ()",
        "fct-source": "src/Data-Progress-Meter.html#killAutoDisplayMeter",
        "fct-type": "function",
        "title": "killAutoDisplayMeter"
      },
      "index": {
        "description": "Stops the specified meter from displaying You should probably call clearMeter after call to this",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "killAutoDisplayMeter",
        "normalized": "ProgressMeter-\u003eThreadId-\u003eIO()",
        "package": "MissingH",
        "partial": "Auto Display Meter",
        "signature": "ProgressMeter-\u003eThreadId-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:newMeter",
      "description": {
        "fct-descr": "\u003cp\u003eSet up a new status bar. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "Progress-\u003e String-\u003e Int-\u003e ([Integer] -\u003e [String])-\u003e IO ProgressMeter",
        "fct-type": "function",
        "title": "newMeter"
      },
      "index": {
        "description": "Set up new status bar",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "newMeter",
        "normalized": "Progress-\u003eString-\u003eInt-\u003e([Integer]-\u003e[String])-\u003eIO ProgressMeter",
        "package": "MissingH",
        "partial": "Meter",
        "signature": "Progress-\u003eString-\u003eInt-\u003e([Integer]-\u003e[String])-\u003eIO ProgressMeter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:removeComponent",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a component by name. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "ProgressMeter -\u003e String -\u003e IO ()",
        "fct-source": "src/Data-Progress-Meter.html#removeComponent",
        "fct-type": "function",
        "title": "removeComponent"
      },
      "index": {
        "description": "Remove component by name",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "removeComponent",
        "normalized": "ProgressMeter-\u003eString-\u003eIO()",
        "package": "MissingH",
        "partial": "Component",
        "signature": "ProgressMeter-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:renderMeter",
      "description": {
        "fct-descr": "\u003cp\u003eRender the current status. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "ProgressMeter -\u003e IO String",
        "fct-source": "src/Data-Progress-Meter.html#renderMeter",
        "fct-type": "function",
        "title": "renderMeter"
      },
      "index": {
        "description": "Render the current status",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "renderMeter",
        "normalized": "ProgressMeter-\u003eIO String",
        "package": "MissingH",
        "partial": "Meter",
        "signature": "ProgressMeter-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:setComponents",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust the list of components of this \u003ccode\u003e\u003ca\u003eProgressMeter\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "ProgressMeter -\u003e [Progress] -\u003e IO ()",
        "fct-source": "src/Data-Progress-Meter.html#setComponents",
        "fct-type": "function",
        "title": "setComponents"
      },
      "index": {
        "description": "Adjust the list of components of this ProgressMeter",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "setComponents",
        "normalized": "ProgressMeter-\u003e[Progress]-\u003eIO()",
        "package": "MissingH",
        "partial": "Components",
        "signature": "ProgressMeter-\u003e[Progress]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:setWidth",
      "description": {
        "fct-descr": "\u003cp\u003eAdjusts the width of this \u003ccode\u003e\u003ca\u003eProgressMeter\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "ProgressMeter -\u003e Int -\u003e IO ()",
        "fct-source": "src/Data-Progress-Meter.html#setWidth",
        "fct-type": "function",
        "title": "setWidth"
      },
      "index": {
        "description": "Adjusts the width of this ProgressMeter",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "setWidth",
        "normalized": "ProgressMeter-\u003eInt-\u003eIO()",
        "package": "MissingH",
        "partial": "Width",
        "signature": "ProgressMeter-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:simpleNewMeter",
      "description": {
        "fct-descr": "\u003cp\u003eSet up a new status bar using defaults:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The given tracker\n\u003c/li\u003e\u003cli\u003e Width 80\n\u003c/li\u003e\u003cli\u003e Data.Quantity.renderNums binaryOpts 1\n\u003c/li\u003e\u003cli\u003e Unit inticator \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "Progress -\u003e IO ProgressMeter",
        "fct-source": "src/Data-Progress-Meter.html#simpleNewMeter",
        "fct-type": "function",
        "title": "simpleNewMeter"
      },
      "index": {
        "description": "Set up new status bar using defaults The given tracker Width Data.Quantity.renderNums binaryOpts Unit inticator",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "simpleNewMeter",
        "normalized": "Progress-\u003eIO ProgressMeter",
        "package": "MissingH",
        "partial": "New Meter",
        "signature": "Progress-\u003eIO ProgressMeter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Meter.html#v:writeMeterString",
      "description": {
        "fct-descr": "\u003cp\u003eClears the meter, writes the given string, then restores the meter.\nThe string is assumed to contain a trailing newline.\n\u003c/p\u003e\u003cp\u003ePass stdout as the handle for regular display to the screen. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Meter",
        "fct-package": "MissingH",
        "fct-signature": "Handle -\u003e ProgressMeter -\u003e String -\u003e IO ()",
        "fct-source": "src/Data-Progress-Meter.html#writeMeterString",
        "fct-type": "function",
        "title": "writeMeterString"
      },
      "index": {
        "description": "Clears the meter writes the given string then restores the meter The string is assumed to contain trailing newline Pass stdout as the handle for regular display to the screen",
        "hierarchy": "Data Progress Meter",
        "module": "Data.Progress.Meter",
        "name": "writeMeterString",
        "normalized": "Handle-\u003eProgressMeter-\u003eString-\u003eIO()",
        "package": "MissingH",
        "partial": "Meter String",
        "signature": "Handle-\u003eProgressMeter-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for tracking the status of a long operation.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org \n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eData.Progress.Meter\u003c/a\u003e \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Progress-Tracker.html",
        "fct-type": "module",
        "title": "Tracker"
      },
      "index": {
        "description": "Tools for tracking the status of long operation Written by John Goerzen jgoerzen@complete.org See also Data.Progress.Meter",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "Tracker",
        "normalized": "",
        "package": "MissingH",
        "partial": "Tracker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:Progress",
      "description": {
        "fct-descr": "\u003cp\u003eThe main Progress object. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Data-Progress-Tracker.html#Progress",
        "fct-type": "data",
        "title": "Progress"
      },
      "index": {
        "description": "The main Progress object",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "Progress",
        "normalized": "",
        "package": "MissingH",
        "partial": "Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:ProgressCallback",
      "description": {
        "fct-descr": "\u003cp\u003eThe type for a callback function for the progress tracker.\nWhen given at creation time to 'newProgress\\'' or when added via \u003ccode\u003e\u003ca\u003eaddCallback\u003c/a\u003e\u003c/code\u003e,\nthese functions get called every time the status of the tracker changes.\n\u003c/p\u003e\u003cp\u003eThis function is passed two \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e records: the first\nreflects the status prior to the update, and the second reflects\nthe status after the update.\n\u003c/p\u003e\u003cp\u003ePlease note that the owning \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object will be locked while the\ncallback is running, so the callback will not be able to make changes to it. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressCallback",
        "fct-type": "type",
        "title": "ProgressCallback"
      },
      "index": {
        "description": "The type for callback function for the progress tracker When given at creation time to newProgress or when added via addCallback these functions get called every time the status of the tracker changes This function is passed two ProgressStatus records the first reflects the status prior to the update and the second reflects the status after the update Please note that the owning Progress object will be locked while the callback is running so the callback will not be able to make changes to it",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "ProgressCallback",
        "normalized": "",
        "package": "MissingH",
        "partial": "Progress Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:ProgressStatus",
      "description": {
        "fct-descr": "\u003cp\u003eThe main progress status record. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressStatus",
        "fct-type": "data",
        "title": "ProgressStatus"
      },
      "index": {
        "description": "The main progress status record",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "ProgressStatus",
        "normalized": "",
        "package": "MissingH",
        "partial": "Progress Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:ProgressStatuses",
      "description": {
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "class",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressStatuses",
        "fct-type": "class",
        "title": "ProgressStatuses"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "ProgressStatuses",
        "normalized": "",
        "package": "MissingH",
        "partial": "Progress Statuses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#t:ProgressTimeSource",
      "description": {
        "fct-descr": "\u003cp\u003eA function that, when called, yields the current time. \nThe default is \u003ccode\u003e\u003ca\u003edefaultTimeSource\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressTimeSource",
        "fct-type": "type",
        "title": "ProgressTimeSource"
      },
      "index": {
        "description": "function that when called yields the current time The default is defaultTimeSource",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "ProgressTimeSource",
        "normalized": "",
        "package": "MissingH",
        "partial": "Progress Time Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:ProgressStatus",
      "description": {
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "ProgressStatus",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressStatus",
        "fct-type": "function",
        "title": "ProgressStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "ProgressStatus",
        "normalized": "",
        "package": "MissingH",
        "partial": "Progress Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:addCallback",
      "description": {
        "fct-descr": "\u003cp\u003eAdds an new callback to an existing \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e.  The callback will be\ncalled whenever the object's status is updated, except by the call to finishP.\n\u003c/p\u003e\u003cp\u003ePlease note that the Progress object will be locked while the callback is \nrunning, so the callback will not be able to make any modifications to it.\n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Progress -\u003e ProgressCallback -\u003e IO ()",
        "fct-source": "src/Data-Progress-Tracker.html#addCallback",
        "fct-type": "function",
        "title": "addCallback"
      },
      "index": {
        "description": "Adds an new callback to an existing Progress The callback will be called whenever the object status is updated except by the call to finishP Please note that the Progress object will be locked while the callback is running so the callback will not be able to make any modifications to it",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "addCallback",
        "normalized": "Progress-\u003eProgressCallback-\u003eIO()",
        "package": "MissingH",
        "partial": "Callback",
        "signature": "Progress-\u003eProgressCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:addParent",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a new parent to an existing \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e.  The parent\nwill automatically have its completed and total counters incremented\nby the value of those counters in the existing \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Progress-\u003e Progress-\u003e IO ()",
        "fct-type": "function",
        "title": "addParent"
      },
      "index": {
        "description": "Adds new parent to an existing Progress The parent will automatically have its completed and total counters incremented by the value of those counters in the existing Progress",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "addParent",
        "normalized": "Progress-\u003eProgress-\u003eIO()",
        "package": "MissingH",
        "partial": "Parent",
        "signature": "Progress-\u003eProgress-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:completedUnits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Integer",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressStatus",
        "fct-type": "function",
        "title": "completedUnits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "completedUnits",
        "normalized": "",
        "package": "MissingH",
        "partial": "Units",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:defaultTimeSource",
      "description": {
        "fct-descr": "\u003cp\u003eThe default time source for the system.  This is defined as:\n\u003c/p\u003e\u003cpre\u003egetClockTime \u003e\u003e= (return . clockTimeToEpoch)\n\u003c/pre\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "ProgressTimeSource",
        "fct-source": "src/Data-Progress-Tracker.html#defaultTimeSource",
        "fct-type": "function",
        "title": "defaultTimeSource"
      },
      "index": {
        "description": "The default time source for the system This is defined as getClockTime return clockTimeToEpoch",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "defaultTimeSource",
        "normalized": "",
        "package": "MissingH",
        "partial": "Time Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:finishP",
      "description": {
        "fct-descr": "\u003cp\u003eCall this when you are finished with the object.  It is especially\nimportant to do this when parent objects are involved.\n\u003c/p\u003e\u003cp\u003eThis will simply set the totalUnits to the current completedUnits count,\nbut will not call the callbacks.  It will additionally propogate\nany adjustment in totalUnits to the parents, whose callbacks \u003cem\u003ewill\u003c/em\u003e be\ncalled.\n\u003c/p\u003e\u003cp\u003eThis ensures that the total expected counts on the parent are always correct.\nWithout doing this, if, say, a transfer ended earlier than expected, ETA \nvalues on the parent would be off since it would be expecting more data than\nactually arrived. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Progress -\u003e IO ()",
        "fct-source": "src/Data-Progress-Tracker.html#finishP",
        "fct-type": "function",
        "title": "finishP"
      },
      "index": {
        "description": "Call this when you are finished with the object It is especially important to do this when parent objects are involved This will simply set the totalUnits to the current completedUnits count but will not call the callbacks It will additionally propogate any adjustment in totalUnits to the parents whose callbacks will be called This ensures that the total expected counts on the parent are always correct Without doing this if say transfer ended earlier than expected ETA values on the parent would be off since it would be expecting more data than actually arrived",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "finishP",
        "normalized": "Progress-\u003eIO()",
        "package": "MissingH",
        "partial": "",
        "signature": "Progress-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:getETA",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the estimated system clock time of completion, in standard\ntime units.  Returns the current time whenever \u003ccode\u003e\u003ca\u003egetETR\u003c/a\u003e\u003c/code\u003e would return 0.\n\u003c/p\u003e\u003cp\u003eSee the comments under \u003ccode\u003e\u003ca\u003egetSpeed\u003c/a\u003e\u003c/code\u003e for information about this function's type\nand result. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Integer",
        "fct-source": "src/Data-Progress-Tracker.html#getETA",
        "fct-type": "function",
        "title": "getETA"
      },
      "index": {
        "description": "Returns the estimated system clock time of completion in standard time units Returns the current time whenever getETR would return See the comments under getSpeed for information about this function type and result",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "getETA",
        "normalized": "a-\u003eIO Integer",
        "package": "MissingH",
        "partial": "ETA",
        "signature": "a-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:getETR",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the estimated time remaining, in standard time units. \n\u003c/p\u003e\u003cp\u003eReturns 0 whenever \u003ccode\u003e\u003ca\u003egetSpeed\u003c/a\u003e\u003c/code\u003e would return 0.\n\u003c/p\u003e\u003cp\u003eSee the comments under \u003ccode\u003e\u003ca\u003egetSpeed\u003c/a\u003e\u003c/code\u003e for information about this function's type\nand result. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Integer",
        "fct-source": "src/Data-Progress-Tracker.html#getETR",
        "fct-type": "function",
        "title": "getETR"
      },
      "index": {
        "description": "Returns the estimated time remaining in standard time units Returns whenever getSpeed would return See the comments under getSpeed for information about this function type and result",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "getETR",
        "normalized": "a-\u003eIO Integer",
        "package": "MissingH",
        "partial": "ETR",
        "signature": "a-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:getSpeed",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the speed in units processed per time unit.  (If you are\nusing the default time source, this would be units processed per second).\nThis obtains the current speed solely from analyzing the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eIf no time has elapsed yet, returns 0.\n\u003c/p\u003e\u003cp\u003eYou can use this against either a \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object or a \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e\nobject.  This is in the IO monad because the speed is based on the current\ntime.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e getSpeed progressobj \u003e\u003e= print\n\u003c/pre\u003e\u003cp\u003eDon't let the type of this function confuse you.  It is a fancy way of saying\nthat it can take either a \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e object, and returns\na number that is valid as any Fractional type, such as a Double, Float, or\nRational. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO b",
        "fct-source": "src/Data-Progress-Tracker.html#getSpeed",
        "fct-type": "function",
        "title": "getSpeed"
      },
      "index": {
        "description": "Returns the speed in units processed per time unit If you are using the default time source this would be units processed per second This obtains the current speed solely from analyzing the Progress object If no time has elapsed yet returns You can use this against either Progress object or ProgressStatus object This is in the IO monad because the speed is based on the current time Example getSpeed progressobj print Don let the type of this function confuse you It is fancy way of saying that it can take either Progress or ProgressStatus object and returns number that is valid as any Fractional type such as Double Float or Rational",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "getSpeed",
        "normalized": "a-\u003eIO b",
        "package": "MissingH",
        "partial": "Speed",
        "signature": "a-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:incrP",
      "description": {
        "fct-descr": "\u003cp\u003eIncrement the completed unit count in the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object\nby the amount given.  If the value as given exceeds the total, then\nthe total will also be raised to match this value so that the \ncompleted count never exceeds the total.\n\u003c/p\u003e\u003cp\u003eYou can decrease the completed unit count by supplying a negative number\nhere. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Progress -\u003e Integer -\u003e IO ()",
        "fct-source": "src/Data-Progress-Tracker.html#incrP",
        "fct-type": "function",
        "title": "incrP"
      },
      "index": {
        "description": "Increment the completed unit count in the Progress object by the amount given If the value as given exceeds the total then the total will also be raised to match this value so that the completed count never exceeds the total You can decrease the completed unit count by supplying negative number here",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "incrP",
        "normalized": "Progress-\u003eInteger-\u003eIO()",
        "package": "MissingH",
        "partial": "",
        "signature": "Progress-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:incrP-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eincrP\u003c/a\u003e\u003c/code\u003e, but never modify the total. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Progress -\u003e Integer -\u003e IO ()",
        "fct-source": "src/Data-Progress-Tracker.html#incrP%27",
        "fct-type": "function",
        "title": "incrP'"
      },
      "index": {
        "description": "Like incrP but never modify the total",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "incrP'",
        "normalized": "Progress-\u003eInteger-\u003eIO()",
        "package": "MissingH",
        "partial": "P'",
        "signature": "Progress-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:incrTotal",
      "description": {
        "fct-descr": "\u003cp\u003eIncrement the total unit count in the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object by the amount\ngiven.  This would rarely be needed, but could be needed in some special cases \nwhen the total number of units is not known in advance. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Progress -\u003e Integer -\u003e IO ()",
        "fct-source": "src/Data-Progress-Tracker.html#incrTotal",
        "fct-type": "function",
        "title": "incrTotal"
      },
      "index": {
        "description": "Increment the total unit count in the Progress object by the amount given This would rarely be needed but could be needed in some special cases when the total number of units is not known in advance",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "incrTotal",
        "normalized": "Progress-\u003eInteger-\u003eIO()",
        "package": "MissingH",
        "partial": "Total",
        "signature": "Progress-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:newProgress",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object with the given name and number\nof total units initialized as given.  The start time will be initialized\nwith the current time at the present moment according to the system clock.\nThe units completed will be set to 0, the time source will be set to the\nsystem clock, and the parents and callbacks will be empty.\n\u003c/p\u003e\u003cp\u003eIf you need more control, see 'newProgress\\''.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e prog \u003c- newProgress \"mytracker\" 1024\n\u003c/pre\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e Integer-\u003e IO Progress",
        "fct-type": "function",
        "title": "newProgress"
      },
      "index": {
        "description": "Create new Progress object with the given name and number of total units initialized as given The start time will be initialized with the current time at the present moment according to the system clock The units completed will be set to the time source will be set to the system clock and the parents and callbacks will be empty If you need more control see newProgress Example prog newProgress mytracker",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "newProgress",
        "normalized": "String-\u003eInteger-\u003eIO Progress",
        "package": "MissingH",
        "partial": "Progress",
        "signature": "String-\u003eInteger-\u003eIO Progress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:newProgress-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object initialized with the given status and \ncallbacks.\nNo adjustment to the \u003ccode\u003e\u003ca\u003estartTime\u003c/a\u003e\u003c/code\u003e will be made.  If you\nwant to use the system clock, you can initialize \u003ccode\u003e\u003ca\u003estartTime\u003c/a\u003e\u003c/code\u003e with\nthe return value of \u003ccode\u003e\u003ca\u003edefaultTimeSource\u003c/a\u003e\u003c/code\u003e and also pass \u003ccode\u003e\u003ca\u003edefaultTimeSource\u003c/a\u003e\u003c/code\u003e\nas the timing source. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "ProgressStatus -\u003e [ProgressCallback] -\u003e IO Progress",
        "fct-source": "src/Data-Progress-Tracker.html#newProgress%27",
        "fct-type": "function",
        "title": "newProgress'"
      },
      "index": {
        "description": "Create new Progress object initialized with the given status and callbacks No adjustment to the startTime will be made If you want to use the system clock you can initialize startTime with the return value of defaultTimeSource and also pass defaultTimeSource as the timing source",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "newProgress'",
        "normalized": "ProgressStatus-\u003e[ProgressCallback]-\u003eIO Progress",
        "package": "MissingH",
        "partial": "Progress'",
        "signature": "ProgressStatus-\u003e[ProgressCallback]-\u003eIO Progress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:setP",
      "description": {
        "fct-descr": "\u003cp\u003eSet the completed unit count in the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object to the specified\nvalue.  Unlike \u003ccode\u003e\u003ca\u003eincrP\u003c/a\u003e\u003c/code\u003e, this function sets the count to a specific value,\nrather than adding to the existing value.  If this value exceeds the total,\nthen the total will also be raised to match this value so that the completed\ncount never exceeds teh total. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Progress -\u003e Integer -\u003e IO ()",
        "fct-source": "src/Data-Progress-Tracker.html#setP",
        "fct-type": "function",
        "title": "setP"
      },
      "index": {
        "description": "Set the completed unit count in the Progress object to the specified value Unlike incrP this function sets the count to specific value rather than adding to the existing value If this value exceeds the total then the total will also be raised to match this value so that the completed count never exceeds teh total",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "setP",
        "normalized": "Progress-\u003eInteger-\u003eIO()",
        "package": "MissingH",
        "partial": "",
        "signature": "Progress-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:setP-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetP\u003c/a\u003e\u003c/code\u003e, but never modify the total. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Progress -\u003e Integer -\u003e IO ()",
        "fct-source": "src/Data-Progress-Tracker.html#setP%27",
        "fct-type": "function",
        "title": "setP'"
      },
      "index": {
        "description": "Like setP but never modify the total",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "setP'",
        "normalized": "Progress-\u003eInteger-\u003eIO()",
        "package": "MissingH",
        "partial": "P'",
        "signature": "Progress-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:setTotal",
      "description": {
        "fct-descr": "\u003cp\u003eSet the total unit count in the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object to the specified\nvalue.  Like \u003ccode\u003e\u003ca\u003eincrTotal\u003c/a\u003e\u003c/code\u003e, this would rarely be needed. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Progress -\u003e Integer -\u003e IO ()",
        "fct-source": "src/Data-Progress-Tracker.html#setTotal",
        "fct-type": "function",
        "title": "setTotal"
      },
      "index": {
        "description": "Set the total unit count in the Progress object to the specified value Like incrTotal this would rarely be needed",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "setTotal",
        "normalized": "Progress-\u003eInteger-\u003eIO()",
        "package": "MissingH",
        "partial": "Total",
        "signature": "Progress-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:startTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Integer",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressStatus",
        "fct-type": "function",
        "title": "startTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "startTime",
        "normalized": "",
        "package": "MissingH",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:timeSource",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "ProgressTimeSource",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressStatus",
        "fct-type": "function",
        "title": "timeSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "timeSource",
        "normalized": "",
        "package": "MissingH",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:totalUnits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "Integer",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressStatus",
        "fct-type": "function",
        "title": "totalUnits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "totalUnits",
        "normalized": "",
        "package": "MissingH",
        "partial": "Units",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:trackerName",
      "description": {
        "fct-descr": "\u003cp\u003eAn identifying string\n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "String",
        "fct-source": "src/Data-Progress-Tracker.html#ProgressStatus",
        "fct-type": "function",
        "title": "trackerName"
      },
      "index": {
        "description": "An identifying string",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "trackerName",
        "normalized": "",
        "package": "MissingH",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Progress-Tracker.html#v:withStatus",
      "description": {
        "fct-descr": "\u003cp\u003eLets you examine the \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e that is contained \n       within a \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object.  You can simply pass\n       a \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object and a function to \u003ccode\u003e\u003ca\u003ewithStatus\u003c/a\u003e\u003c/code\u003e, and\n       \u003ccode\u003e\u003ca\u003ewithStatus\u003c/a\u003e\u003c/code\u003e will lock the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e object (blocking any\n       modifications while you are reading it), then pass the object\n       to your function.  If you happen to already have a \u003ccode\u003e\u003ca\u003eProgressStatus\u003c/a\u003e\u003c/code\u003e\n       object, withStatus will also accept it and simply pass it unmodified\n       to the function. \n\u003c/p\u003e",
        "fct-module": "Data.Progress.Tracker",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e (ProgressStatus -\u003e b) -\u003e b",
        "fct-source": "src/Data-Progress-Tracker.html#withStatus",
        "fct-type": "method",
        "title": "withStatus"
      },
      "index": {
        "description": "Lets you examine the ProgressStatus that is contained within Progress object You can simply pass Progress object and function to withStatus and withStatus will lock the Progress object blocking any modifications while you are reading it then pass the object to your function If you happen to already have ProgressStatus object withStatus will also accept it and simply pass it unmodified to the function",
        "hierarchy": "Data Progress Tracker",
        "module": "Data.Progress.Tracker",
        "name": "withStatus",
        "normalized": "a-\u003e(ProgressStatus-\u003eb)-\u003eb",
        "package": "MissingH",
        "partial": "Status",
        "signature": "a-\u003e(ProgressStatus-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for rendering sizes\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Quantity.html",
        "fct-type": "module",
        "title": "Quantity"
      },
      "index": {
        "description": "Tools for rendering sizes Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "Quantity",
        "normalized": "",
        "package": "MissingH",
        "partial": "Quantity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#t:SizeOpts",
      "description": {
        "fct-descr": "\u003cp\u003eThe options for \u003ccode\u003e\u003ca\u003equantifyNum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Data-Quantity.html#SizeOpts",
        "fct-type": "data",
        "title": "SizeOpts"
      },
      "index": {
        "description": "The options for quantifyNum and renderNum",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "SizeOpts",
        "normalized": "",
        "package": "MissingH",
        "partial": "Size Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:SizeOpts",
      "description": {
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "SizeOpts",
        "fct-source": "src/Data-Quantity.html#SizeOpts",
        "fct-type": "function",
        "title": "SizeOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "SizeOpts",
        "normalized": "",
        "package": "MissingH",
        "partial": "Size Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:base",
      "description": {
        "fct-descr": "\u003cp\u003eThe base from which calculations are made\n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "Int",
        "fct-source": "src/Data-Quantity.html#SizeOpts",
        "fct-type": "function",
        "title": "base"
      },
      "index": {
        "description": "The base from which calculations are made",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "base",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:binaryOpts",
      "description": {
        "fct-descr": "\u003cp\u003ePredefined definitions for byte measurement in groups of 1024, from 0 to\n2**80 \n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "SizeOpts",
        "fct-source": "src/Data-Quantity.html#binaryOpts",
        "fct-type": "function",
        "title": "binaryOpts"
      },
      "index": {
        "description": "Predefined definitions for byte measurement in groups of from to",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "binaryOpts",
        "normalized": "",
        "package": "MissingH",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:firstPower",
      "description": {
        "fct-descr": "\u003cp\u003eThe first power for which suffixes are given\n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "Int",
        "fct-source": "src/Data-Quantity.html#SizeOpts",
        "fct-type": "function",
        "title": "firstPower"
      },
      "index": {
        "description": "The first power for which suffixes are given",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "firstPower",
        "normalized": "",
        "package": "MissingH",
        "partial": "Power",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:parseNum",
      "description": {
        "fct-descr": "\u003cp\u003eParses a String, possibly generated by \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e.  Parses the suffix\nand applies it to the number, which is read via the Read class.\n\u003c/p\u003e\u003cp\u003eReturns Left \u003ca\u003eerror message\u003c/a\u003e on error, or Right number on successful parse.\n\u003c/p\u003e\u003cp\u003eIf you want an Integral result, the convenience function \u003ccode\u003e\u003ca\u003eparseNumInt\u003c/a\u003e\u003c/code\u003e is for\nyou.\n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "SizeOpts-\u003e Bool-\u003e String-\u003e Either String a",
        "fct-type": "function",
        "title": "parseNum"
      },
      "index": {
        "description": "Parses String possibly generated by renderNum Parses the suffix and applies it to the number which is read via the Read class Returns Left error message on error or Right number on successful parse If you want an Integral result the convenience function parseNumInt is for you",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "parseNum",
        "normalized": "SizeOpts-\u003eBool-\u003eString-\u003eEither String a",
        "package": "MissingH",
        "partial": "Num",
        "signature": "SizeOpts-\u003eBool-\u003eString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:parseNumInt",
      "description": {
        "fct-descr": "\u003cp\u003eParse a number as with \u003ccode\u003e\u003ca\u003eparseNum\u003c/a\u003e\u003c/code\u003e, but return the result as\nan \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e.  Any type such as Integer, Int, etc. can be used for the\nresult type.\n\u003c/p\u003e\u003cp\u003eThis function simply calls \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e on the result of \u003ccode\u003e\u003ca\u003eparseNum\u003c/a\u003e\u003c/code\u003e.  A\n\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e is used internally for the parsing of the numeric component.\n\u003c/p\u003e\u003cp\u003eBy using this function, a user can still say something like 1.5M and get an\nintegral result. \n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "SizeOpts-\u003e Bool-\u003e String-\u003e Either String a",
        "fct-type": "function",
        "title": "parseNumInt"
      },
      "index": {
        "description": "Parse number as with parseNum but return the result as an Integral Any type such as Integer Int etc can be used for the result type This function simply calls round on the result of parseNum Double is used internally for the parsing of the numeric component By using this function user can still say something like and get an integral result",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "parseNumInt",
        "normalized": "SizeOpts-\u003eBool-\u003eString-\u003eEither String a",
        "package": "MissingH",
        "partial": "Num Int",
        "signature": "SizeOpts-\u003eBool-\u003eString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:powerIncr",
      "description": {
        "fct-descr": "\u003cp\u003eThe increment to the power for each new suffix\n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "Int",
        "fct-source": "src/Data-Quantity.html#SizeOpts",
        "fct-type": "function",
        "title": "powerIncr"
      },
      "index": {
        "description": "The increment to the power for each new suffix",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "powerIncr",
        "normalized": "",
        "package": "MissingH",
        "partial": "Incr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:quantifyNum",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a number and returns a new (quantity, suffix) combination.\nThe space character is used as the suffix for items around 0. \n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "SizeOpts -\u003e a -\u003e (b, Char)",
        "fct-source": "src/Data-Quantity.html#quantifyNum",
        "fct-type": "function",
        "title": "quantifyNum"
      },
      "index": {
        "description": "Takes number and returns new quantity suffix combination The space character is used as the suffix for items around",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "quantifyNum",
        "normalized": "SizeOpts-\u003ea-\u003e(b,Char)",
        "package": "MissingH",
        "partial": "Num",
        "signature": "SizeOpts-\u003ea-\u003e(b,Char)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:quantifyNums",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equantifyNum\u003c/a\u003e\u003c/code\u003e, but takes a list of numbers.  The first number in\nthe list will be evaluated for the suffix.  The same suffix and scale will\nbe used for the remaining items in the list.  Please see \u003ccode\u003e\u003ca\u003erenderNums\u003c/a\u003e\u003c/code\u003e for\nan example of how this works.\n\u003c/p\u003e\u003cp\u003eIt is invalid to use this function on an empty list. \n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "SizeOpts -\u003e [a] -\u003e ([b], Char)",
        "fct-source": "src/Data-Quantity.html#quantifyNums",
        "fct-type": "function",
        "title": "quantifyNums"
      },
      "index": {
        "description": "Like quantifyNum but takes list of numbers The first number in the list will be evaluated for the suffix The same suffix and scale will be used for the remaining items in the list Please see renderNums for an example of how this works It is invalid to use this function on an empty list",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "quantifyNums",
        "normalized": "SizeOpts-\u003e[a]-\u003e([b],Char)",
        "package": "MissingH",
        "partial": "Nums",
        "signature": "SizeOpts-\u003e[a]-\u003e([b],Char)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:renderNum",
      "description": {
        "fct-descr": "\u003cp\u003eRender a number into a string, based on the given quantities.  This is\nuseful for displaying quantities in terms of bytes or in SI units.  Give this\nfunction the \u003ccode\u003e\u003ca\u003eSizeOpts\u003c/a\u003e\u003c/code\u003e for the desired output, and a precision (number of\ndigits to the right of the decimal point), and you get a string output.\n\u003c/p\u003e\u003cp\u003eHere are some examples:\n\u003c/p\u003e\u003cpre\u003e Data.Quantity\u003e renderNum binaryOpts 0 1048576\n \"1M\"\n Data.Quantity\u003e renderNum binaryOpts 2 10485760\n \"10.00M\"\n Data.Quantity\u003e renderNum binaryOpts 3 1048576\n \"1.000M\"\n Data.Quantity\u003e renderNum binaryOpts 3 1500000\n \"1.431M\"\n Data.Quantity\u003e renderNum binaryOpts 2 (1500 ** 3)\n \"3.14G\"\n\u003c/pre\u003e\u003cpre\u003e Data.Quantity\u003e renderNum siOpts 2 1024\n \"1.02k\"\n Data.Quantity\u003e renderNum siOpts 2 1048576\n \"1.05M\"\n Data.Quantity\u003e renderNum siOpts 2 0.001\n \"1.00m\"\n Data.Quantity\u003e renderNum siOpts 2 0.0001\n \"100.00u\"\n\u003c/pre\u003e\u003cp\u003eIf you want more control over the output, see \u003ccode\u003e\u003ca\u003equantifyNum\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "SizeOpts-\u003e Int-\u003e a-\u003e String",
        "fct-type": "function",
        "title": "renderNum"
      },
      "index": {
        "description": "Render number into string based on the given quantities This is useful for displaying quantities in terms of bytes or in SI units Give this function the SizeOpts for the desired output and precision number of digits to the right of the decimal point and you get string output Here are some examples Data.Quantity renderNum binaryOpts Data.Quantity renderNum binaryOpts Data.Quantity renderNum binaryOpts Data.Quantity renderNum binaryOpts Data.Quantity renderNum binaryOpts Data.Quantity renderNum siOpts Data.Quantity renderNum siOpts Data.Quantity renderNum siOpts Data.Quantity renderNum siOpts If you want more control over the output see quantifyNum",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "renderNum",
        "normalized": "SizeOpts-\u003eInt-\u003ea-\u003eString",
        "package": "MissingH",
        "partial": "Num",
        "signature": "SizeOpts-\u003eInt-\u003ea-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:renderNums",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e, but operates on a list of numbers.  The first number\nin the list will be evaluated for the suffix.  The same suffix and scale will\nbe used for the remaining items in the list.  See \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e for more\nexamples.\n\u003c/p\u003e\u003cp\u003eAlso, unlike \u003ccode\u003e\u003ca\u003erenderNum\u003c/a\u003e\u003c/code\u003e, the %f instead of %g printf format is used so that\n\"scientific\" notation is avoided in the output.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e *Data.Quantity\u003e renderNums binaryOpts 3 [1500000, 10240, 104857600]\n [\"1.431M\",\"0.010M\",\"100.000M\"]\n *Data.Quantity\u003e renderNums binaryOpts 3 [1500, 10240, 104857600]\n [\"1.465K\",\"10.000K\",\"102400.000K\"]\n\u003c/pre\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "SizeOpts-\u003e Int-\u003e [a]-\u003e [String]",
        "fct-type": "function",
        "title": "renderNums"
      },
      "index": {
        "description": "Like renderNum but operates on list of numbers The first number in the list will be evaluated for the suffix The same suffix and scale will be used for the remaining items in the list See renderNum for more examples Also unlike renderNum the instead of printf format is used so that scientific notation is avoided in the output Examples Data.Quantity renderNums binaryOpts Data.Quantity renderNums binaryOpts",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "renderNums",
        "normalized": "SizeOpts-\u003eInt-\u003e[a]-\u003e[String]",
        "package": "MissingH",
        "partial": "Nums",
        "signature": "SizeOpts-\u003eInt-\u003e[a]-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:siOpts",
      "description": {
        "fct-descr": "\u003cp\u003ePredefined definitions for SI measurement, from 10**-24 to 10**24. \n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "SizeOpts",
        "fct-source": "src/Data-Quantity.html#siOpts",
        "fct-type": "function",
        "title": "siOpts"
      },
      "index": {
        "description": "Predefined definitions for SI measurement from to",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "siOpts",
        "normalized": "",
        "package": "MissingH",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Quantity.html#v:suffixes",
      "description": {
        "fct-descr": "\u003cp\u003eThe suffixes themselves\n\u003c/p\u003e",
        "fct-module": "Data.Quantity",
        "fct-package": "MissingH",
        "fct-signature": "String",
        "fct-source": "src/Data-Quantity.html#SizeOpts",
        "fct-type": "function",
        "title": "suffixes"
      },
      "index": {
        "description": "The suffixes themselves",
        "hierarchy": "Data Quantity",
        "module": "Data.Quantity",
        "name": "suffixes",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with strings.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-String-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with strings Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:endswith",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the given list ends with the specified elements;\nfalse otherwise.  (This is an alias for \u003ca\u003eData.List.isSuffixOf\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e endswith \"lo\" \"Hello\" -\u003e True\n\u003c/pre\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Utils.html#endswith",
        "fct-type": "function",
        "title": "endswith"
      },
      "index": {
        "description": "Returns true if the given list ends with the specified elements false otherwise This is an alias for Data.List.isSuffixOf Example endswith lo Hello True",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "endswith",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:escapeRe",
      "description": {
        "fct-descr": "\u003cp\u003eEscape all characters in the input pattern that are not alphanumeric.\n\u003c/p\u003e\u003cp\u003eDoes not make special allowances for NULL, which isn't valid in a\nHaskell regular expression pattern. \n\u003c/p\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-String-Utils.html#escapeRe",
        "fct-type": "function",
        "title": "escapeRe"
      },
      "index": {
        "description": "Escape all characters in the input pattern that are not alphanumeric Does not make special allowances for NULL which isn valid in Haskell regular expression pattern",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "escapeRe",
        "normalized": "String-\u003eString",
        "package": "MissingH",
        "partial": "Re",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a delimiter and a list of items (or strings), join the items\nby using the delimiter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e join \"|\" [\"foo\", \"bar\", \"baz\"] -\u003e \"foo|bar|baz\"\n\u003c/pre\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [[a]] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Given delimiter and list of items or strings join the items by using the delimiter Example join foo bar baz foo bar baz",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "join",
        "normalized": "[a]-\u003e[[a]]-\u003e[a]",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:lstrip",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estrip\u003c/a\u003e\u003c/code\u003e, but applies only to the left side of the string.\n\u003c/p\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-String-Utils.html#lstrip",
        "fct-type": "function",
        "title": "lstrip"
      },
      "index": {
        "description": "Same as strip but applies only to the left side of the string",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "lstrip",
        "normalized": "String-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:maybeRead",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to parse a value from the front of the string.\n\u003c/p\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e Maybe a",
        "fct-source": "src/Data-String-Utils.html#maybeRead",
        "fct-type": "function",
        "title": "maybeRead"
      },
      "index": {
        "description": "Attempts to parse value from the front of the string",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "maybeRead",
        "normalized": "String-\u003eMaybe a",
        "package": "MissingH",
        "partial": "Read",
        "signature": "String-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list and a replacement list, replaces each occurance of the search\nlist with the replacement list in the operation list.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003ereplace \",\" \".\" \"127,0,0,1\" -\u003e \"127.0.0.1\"\n\u003c/pre\u003e\u003cp\u003eThis could logically be thought of as:\n\u003c/p\u003e\u003cpre\u003ereplace old new l = join new . split old $ l\n\u003c/pre\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Utils.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Given list and replacement list replaces each occurance of the search list with the replacement list in the operation list Example replace This could logically be thought of as replace old new join new split old",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "replace",
        "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:rstrip",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estrip\u003c/a\u003e\u003c/code\u003e, but applies only to the right side of the string.\n\u003c/p\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-String-Utils.html#rstrip",
        "fct-type": "function",
        "title": "rstrip"
      },
      "index": {
        "description": "Same as strip but applies only to the right side of the string",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "rstrip",
        "normalized": "String-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a delimiter and a list (or string), split into components.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e split \",\" \"foo,bar,,baz,\" -\u003e [\"foo\", \"bar\", \"\", \"baz\", \"\"]\n\u003c/pre\u003e\u003cpre\u003e split \"ba\" \",foo,bar,,baz,\" -\u003e [\",foo,\",\"r,,\",\"z,\"]\n\u003c/pre\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Utils.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Given delimiter and list or string split into components Example split foo bar baz foo bar baz split ba foo bar baz foo",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "split",
        "normalized": "[a]-\u003e[a]-\u003e[[a]]",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:splitWs",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a string around whitespace.  Empty elements in the result\nlist are automatically removed. \n\u003c/p\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Data-String-Utils.html#splitWs",
        "fct-type": "function",
        "title": "splitWs"
      },
      "index": {
        "description": "Splits string around whitespace Empty elements in the result list are automatically removed",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "splitWs",
        "normalized": "String-\u003e[String]",
        "package": "MissingH",
        "partial": "Ws",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:startswith",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the given list starts with the specified elements;\nfalse otherwise.  (This is an alias for \u003ca\u003eData.List.isPrefixOf\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e startswith \"He\" \"Hello\" -\u003e True\n\u003c/pre\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Utils.html#startswith",
        "fct-type": "function",
        "title": "startswith"
      },
      "index": {
        "description": "Returns true if the given list starts with the specified elements false otherwise This is an alias for Data.List.isPrefixOf Example startswith He Hello True",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "startswith",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "MissingH",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-String-Utils.html#v:strip",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves any whitespace characters that are present at the start\nor end of a string. Does not alter the internal contents of a\nstring. If no whitespace characters are present at the start or end\nof a string, returns the original string unmodified. Safe to use on\nany string.\n\u003c/p\u003e\u003cp\u003eNote that this may differ from some other similar\nfunctions from other authors in that:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e If multiple whitespace\ncharacters are present all in a row, they are all removed;\n\u003c/li\u003e\u003cli\u003e If no\nwhitespace characters are present, nothing is done.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Data.String.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-String-Utils.html#strip",
        "fct-type": "function",
        "title": "strip"
      },
      "index": {
        "description": "Removes any whitespace characters that are present at the start or end of string Does not alter the internal contents of string If no whitespace characters are present at the start or end of string returns the original string unmodified Safe to use on any string Note that this may differ from some other similar functions from other authors in that If multiple whitespace characters are present all in row they are all removed If no whitespace characters are present nothing is done",
        "hierarchy": "Data String Utils",
        "module": "Data.String.Utils",
        "name": "strip",
        "normalized": "String-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Tuple-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with lists.\n\u003c/p\u003e\u003cp\u003eWritten by Neil Mitchell, \u003ca\u003ehttp://www.cs.york.ac.uk/~ndm/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Tuple.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Data-Tuple-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with lists Written by Neil Mitchell http www.cs.york.ac.uk ndm",
        "hierarchy": "Data Tuple Utils",
        "module": "Data.Tuple.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Tuple-Utils.html#v:fst3",
      "description": {
        "fct-descr": "\u003cp\u003eTake the first item out of a 3 element tuple\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Utils",
        "fct-package": "MissingH",
        "fct-signature": "(a, b, c) -\u003e a",
        "fct-source": "src/Data-Tuple-Utils.html#fst3",
        "fct-type": "function",
        "title": "fst3"
      },
      "index": {
        "description": "Take the first item out of element tuple",
        "hierarchy": "Data Tuple Utils",
        "module": "Data.Tuple.Utils",
        "name": "fst3",
        "normalized": "(a,b,c)-\u003ea",
        "package": "MissingH",
        "partial": "",
        "signature": "(a,b,c)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Tuple-Utils.html#v:snd3",
      "description": {
        "fct-descr": "\u003cp\u003eTake the second item out of a 3 element tuple\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Utils",
        "fct-package": "MissingH",
        "fct-signature": "(a, b, c) -\u003e b",
        "fct-source": "src/Data-Tuple-Utils.html#snd3",
        "fct-type": "function",
        "title": "snd3"
      },
      "index": {
        "description": "Take the second item out of element tuple",
        "hierarchy": "Data Tuple Utils",
        "module": "Data.Tuple.Utils",
        "name": "snd3",
        "normalized": "(a,b,c)-\u003eb",
        "package": "MissingH",
        "partial": "",
        "signature": "(a,b,c)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Data-Tuple-Utils.html#v:thd3",
      "description": {
        "fct-descr": "\u003cp\u003eTake the third item out of a 3 element tuple\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Utils",
        "fct-package": "MissingH",
        "fct-signature": "(a, b, c) -\u003e c",
        "fct-source": "src/Data-Tuple-Utils.html#thd3",
        "fct-type": "function",
        "title": "thd3"
      },
      "index": {
        "description": "Take the third item out of element tuple",
        "hierarchy": "Data Tuple Utils",
        "module": "Data.Tuple.Utils",
        "name": "thd3",
        "normalized": "(a,b,c)-\u003ec",
        "package": "MissingH",
        "partial": "",
        "signature": "(a,b,c)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral support for e-mail mailboxes\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Network-Email-Mailbox.html",
        "fct-type": "module",
        "title": "Mailbox"
      },
      "index": {
        "description": "General support for e-mail mailboxes Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "Mailbox",
        "normalized": "",
        "package": "MissingH",
        "partial": "Mailbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:Flag",
      "description": {
        "fct-descr": "\u003cp\u003eThe flags which may be assigned to a message. \n\u003c/p\u003e",
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Network-Email-Mailbox.html#Flag",
        "fct-type": "data",
        "title": "Flag"
      },
      "index": {
        "description": "The flags which may be assigned to message",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "Flag",
        "normalized": "",
        "package": "MissingH",
        "partial": "Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:Flags",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience shortcut \n\u003c/p\u003e",
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Network-Email-Mailbox.html#Flags",
        "fct-type": "type",
        "title": "Flags"
      },
      "index": {
        "description": "Convenience shortcut",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "Flags",
        "normalized": "",
        "package": "MissingH",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:MailboxReader",
      "description": {
        "fct-descr": "\u003cp\u003eMain class for readable mailboxes. \n\u003c/p\u003e\u003cp\u003eThe mailbox object \u003cem\u003ea\u003c/em\u003e represents zero or more \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003es.  Each message\nhas a unique identifier \u003cem\u003eb\u003c/em\u003e in a format specific to each given mailbox.\nThis identifier may or may not be persistent.\n\u003c/p\u003e\u003cp\u003eFunctions which return a list are encouraged -- but not guaranteed -- to\ndo so lazily.\n\u003c/p\u003e\u003cp\u003eImplementing classes must provide, at minimum, \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "class",
        "fct-source": "src/Network-Email-Mailbox.html#MailboxReader",
        "fct-type": "class",
        "title": "MailboxReader"
      },
      "index": {
        "description": "Main class for readable mailboxes The mailbox object represents zero or more Message Each message has unique identifier in format specific to each given mailbox This identifier may or may not be persistent Functions which return list are encouraged but not guaranteed to do so lazily Implementing classes must provide at minimum getAll",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "MailboxReader",
        "normalized": "",
        "package": "MissingH",
        "partial": "Mailbox Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:MailboxWriter",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "class",
        "fct-source": "src/Network-Email-Mailbox.html#MailboxWriter",
        "fct-type": "class",
        "title": "MailboxWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "MailboxWriter",
        "normalized": "",
        "package": "MissingH",
        "partial": "Mailbox Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eA Message is represented as a simple String. \n\u003c/p\u003e",
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Network-Email-Mailbox.html#Message",
        "fct-type": "type",
        "title": "Message"
      },
      "index": {
        "description": "Message is represented as simple String",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "Message",
        "normalized": "",
        "package": "MissingH",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:ANSWERED",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "ANSWERED",
        "fct-source": "src/Network-Email-Mailbox.html#Flag",
        "fct-type": "function",
        "title": "ANSWERED"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "ANSWERED",
        "normalized": "",
        "package": "MissingH",
        "partial": "ANSWERED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:DELETED",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "DELETED",
        "fct-source": "src/Network-Email-Mailbox.html#Flag",
        "fct-type": "function",
        "title": "DELETED"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "DELETED",
        "normalized": "",
        "package": "MissingH",
        "partial": "DELETED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:DRAFT",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "DRAFT",
        "fct-source": "src/Network-Email-Mailbox.html#Flag",
        "fct-type": "function",
        "title": "DRAFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "DRAFT",
        "normalized": "",
        "package": "MissingH",
        "partial": "DRAFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:FLAGGED",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "FLAGGED",
        "fct-source": "src/Network-Email-Mailbox.html#Flag",
        "fct-type": "function",
        "title": "FLAGGED"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "FLAGGED",
        "normalized": "",
        "package": "MissingH",
        "partial": "FLAGGED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:FORWARDED",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "FORWARDED",
        "fct-source": "src/Network-Email-Mailbox.html#Flag",
        "fct-type": "function",
        "title": "FORWARDED"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "FORWARDED",
        "normalized": "",
        "package": "MissingH",
        "partial": "FORWARDED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:OTHERFLAG",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "OTHERFLAG String",
        "fct-source": "src/Network-Email-Mailbox.html#Flag",
        "fct-type": "function",
        "title": "OTHERFLAG"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "OTHERFLAG",
        "normalized": "",
        "package": "MissingH",
        "partial": "OTHERFLAG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:SEEN",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "SEEN",
        "fct-source": "src/Network-Email-Mailbox.html#Flag",
        "fct-type": "function",
        "title": "SEEN"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "SEEN",
        "normalized": "",
        "package": "MissingH",
        "partial": "SEEN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:addFlags",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [b] -\u003e Flags -\u003e IO ()",
        "fct-source": "src/Network-Email-Mailbox.html#addFlags",
        "fct-type": "method",
        "title": "addFlags"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "addFlags",
        "normalized": "a-\u003e[b]-\u003eFlags-\u003eIO()",
        "package": "MissingH",
        "partial": "Flags",
        "signature": "a-\u003e[b]-\u003eFlags-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:appendMessages",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [(Flags, Message)] -\u003e IO [b]",
        "fct-source": "src/Network-Email-Mailbox.html#appendMessages",
        "fct-type": "method",
        "title": "appendMessages"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "appendMessages",
        "normalized": "a-\u003e[(Flags,Message)]-\u003eIO[b]",
        "package": "MissingH",
        "partial": "Messages",
        "signature": "a-\u003e[(Flags,Message)]-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:deleteMessages",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [b] -\u003e IO ()",
        "fct-source": "src/Network-Email-Mailbox.html#deleteMessages",
        "fct-type": "method",
        "title": "deleteMessages"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "deleteMessages",
        "normalized": "a-\u003e[b]-\u003eIO()",
        "package": "MissingH",
        "partial": "Messages",
        "signature": "a-\u003e[b]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:getAll",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all messages, including their content,\n       flags, and unique identifiers. \n\u003c/p\u003e",
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO [(b, Flags, Message)]",
        "fct-source": "src/Network-Email-Mailbox.html#getAll",
        "fct-type": "method",
        "title": "getAll"
      },
      "index": {
        "description": "Returns list of all messages including their content flags and unique identifiers",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "getAll",
        "normalized": "a-\u003eIO[(b,Flags,Message)]",
        "package": "MissingH",
        "partial": "All",
        "signature": "a-\u003eIO[(b,Flags,Message)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:getMessages",
      "description": {
        "fct-descr": "\u003cp\u003eReturns information about specific messages. \n\u003c/p\u003e",
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [b] -\u003e IO [(b, Flags, Message)]",
        "fct-source": "src/Network-Email-Mailbox.html#getMessages",
        "fct-type": "method",
        "title": "getMessages"
      },
      "index": {
        "description": "Returns information about specific messages",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "getMessages",
        "normalized": "a-\u003e[b]-\u003eIO[(b,Flags,Message)]",
        "package": "MissingH",
        "partial": "Messages",
        "signature": "a-\u003e[b]-\u003eIO[(b,Flags,Message)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:listIDs",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all unique identifiers. \n\u003c/p\u003e",
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO [b]",
        "fct-source": "src/Network-Email-Mailbox.html#listIDs",
        "fct-type": "method",
        "title": "listIDs"
      },
      "index": {
        "description": "Returns list of all unique identifiers",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "listIDs",
        "normalized": "a-\u003eIO[b]",
        "package": "MissingH",
        "partial": "IDs",
        "signature": "a-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:listMessageFlags",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all unique identifiers as well as all flags. \n\u003c/p\u003e",
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO [(b, Flags)]",
        "fct-source": "src/Network-Email-Mailbox.html#listMessageFlags",
        "fct-type": "method",
        "title": "listMessageFlags"
      },
      "index": {
        "description": "Returns list of all unique identifiers as well as all flags",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "listMessageFlags",
        "normalized": "a-\u003eIO[(b,Flags)]",
        "package": "MissingH",
        "partial": "Message Flags",
        "signature": "a-\u003eIO[(b,Flags)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:removeFlags",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [b] -\u003e Flags -\u003e IO ()",
        "fct-source": "src/Network-Email-Mailbox.html#removeFlags",
        "fct-type": "method",
        "title": "removeFlags"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "removeFlags",
        "normalized": "a-\u003e[b]-\u003eFlags-\u003eIO()",
        "package": "MissingH",
        "partial": "Flags",
        "signature": "a-\u003e[b]-\u003eFlags-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Mailbox.html#v:setFlags",
      "description": {
        "fct-module": "Network.Email.Mailbox",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [b] -\u003e Flags -\u003e IO ()",
        "fct-source": "src/Network-Email-Mailbox.html#setFlags",
        "fct-type": "method",
        "title": "setFlags"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Email Mailbox",
        "module": "Network.Email.Mailbox",
        "name": "setFlags",
        "normalized": "a-\u003e[b]-\u003eFlags-\u003eIO()",
        "package": "MissingH",
        "partial": "Flags",
        "signature": "a-\u003e[b]-\u003eFlags-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Sendmail.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell module provides an interface to transmitting a mail message.\n\u003c/p\u003e\u003cp\u003eThis is not compatible with Windows at this time.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Email.Sendmail",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Network-Email-Sendmail.html",
        "fct-type": "module",
        "title": "Sendmail"
      },
      "index": {
        "description": "This Haskell module provides an interface to transmitting mail message This is not compatible with Windows at this time Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Network Email Sendmail",
        "module": "Network.Email.Sendmail",
        "name": "Sendmail",
        "normalized": "",
        "package": "MissingH",
        "partial": "Sendmail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Email-Sendmail.html#v:sendmail",
      "description": {
        "fct-descr": "\u003cp\u003eTransmits an e-mail message using the system's mail transport agent.\n\u003c/p\u003e\u003cp\u003eThis function takes a message, a list of recipients, and an optional sender,\nand transmits it using the system's MTA, sendmail.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003esendmail\u003c/code\u003e is on the \u003ccode\u003ePATH\u003c/code\u003e, it will be used; otherwise, a list of system\ndefault locations will be searched.\n\u003c/p\u003e\u003cp\u003eA failure will be logged, since this function uses \u003ccode\u003e\u003ca\u003esafeSystem\u003c/a\u003e\u003c/code\u003e\ninternally.\n\u003c/p\u003e\u003cp\u003eThis function will first try \u003ccode\u003esendmail\u003c/code\u003e.  If it does not exist, an error is\nlogged under \u003ccode\u003eSystem.Cmd.Utils.pOpen3\u003c/code\u003e and various default \u003ccode\u003esendmail\u003c/code\u003e locations\nare tried.  If that still fails, an error is logged and an exception raised.\n\u003c/p\u003e",
        "fct-module": "Network.Email.Sendmail",
        "fct-package": "MissingH",
        "fct-signature": "Maybe String-\u003e [String]-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "sendmail"
      },
      "index": {
        "description": "Transmits an e-mail message using the system mail transport agent This function takes message list of recipients and an optional sender and transmits it using the system MTA sendmail If sendmail is on the PATH it will be used otherwise list of system default locations will be searched failure will be logged since this function uses safeSystem internally This function will first try sendmail If it does not exist an error is logged under System.Cmd.Utils.pOpen3 and various default sendmail locations are tried If that still fails an error is logged and an exception raised",
        "hierarchy": "Network Email Sendmail",
        "module": "Network.Email.Sendmail",
        "name": "sendmail",
        "normalized": "Maybe String-\u003e[String]-\u003eString-\u003eIO()",
        "package": "MissingH",
        "partial": "",
        "signature": "Maybe String-\u003e[String]-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an infrastructure to simplify server design.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003ePlease note: this module is designed to work with TCP, UDP, and Unix domain\nsockets, but only TCP sockets have been tested to date.\n\u003c/p\u003e\u003cp\u003eThis module is presently under-documented.  For an example of usage, please\nsee the description of \u003ca\u003eNetwork.FTP.Server\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Network-SocketServer.html",
        "fct-type": "module",
        "title": "SocketServer"
      },
      "index": {
        "description": "This module provides an infrastructure to simplify server design Written by John Goerzen jgoerzen@complete.org Please note this module is designed to work with TCP UDP and Unix domain sockets but only TCP sockets have been tested to date This module is presently under-documented For an example of usage please see the description of Network.FTP.Server",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "SocketServer",
        "normalized": "",
        "package": "MissingH",
        "partial": "Socket Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#t:HandlerT",
      "description": {
        "fct-descr": "\u003cp\u003eThe main handler type.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the socket itself.\n\u003c/p\u003e\u003cp\u003eThe second is the address of the remote endpoint.\n\u003c/p\u003e\u003cp\u003eThe third is the address of the local endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Network-SocketServer.html#HandlerT",
        "fct-type": "type",
        "title": "HandlerT"
      },
      "index": {
        "description": "The main handler type The first parameter is the socket itself The second is the address of the remote endpoint The third is the address of the local endpoint",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "HandlerT",
        "normalized": "",
        "package": "MissingH",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#t:InetServerOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for your server. \n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Network-SocketServer.html#InetServerOptions",
        "fct-type": "data",
        "title": "InetServerOptions"
      },
      "index": {
        "description": "Options for your server",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "InetServerOptions",
        "normalized": "",
        "package": "MissingH",
        "partial": "Inet Server Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#t:SocketServer",
      "description": {
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/Network-SocketServer.html#SocketServer",
        "fct-type": "data",
        "title": "SocketServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "SocketServer",
        "normalized": "",
        "package": "MissingH",
        "partial": "Socket Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:InetServerOptions",
      "description": {
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "InetServerOptions",
        "fct-source": "src/Network-SocketServer.html#InetServerOptions",
        "fct-type": "function",
        "title": "InetServerOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "InetServerOptions",
        "normalized": "",
        "package": "MissingH",
        "partial": "Inet Server Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:SocketServer",
      "description": {
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "SocketServer",
        "fct-source": "src/Network-SocketServer.html#SocketServer",
        "fct-type": "function",
        "title": "SocketServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "SocketServer",
        "normalized": "",
        "package": "MissingH",
        "partial": "Socket Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:closeSocketServer",
      "description": {
        "fct-descr": "\u003cp\u003eClose the socket server.  Does not terminate active\nhandlers, if any. \n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "SocketServer -\u003e IO ()",
        "fct-source": "src/Network-SocketServer.html#closeSocketServer",
        "fct-type": "function",
        "title": "closeSocketServer"
      },
      "index": {
        "description": "Close the socket server Does not terminate active handlers if any",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "closeSocketServer",
        "normalized": "SocketServer-\u003eIO()",
        "package": "MissingH",
        "partial": "Socket Server",
        "signature": "SocketServer-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:family",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "Family",
        "fct-source": "src/Network-SocketServer.html#InetServerOptions",
        "fct-type": "function",
        "title": "family"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "family",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:handleHandler",
      "description": {
        "fct-descr": "\u003cp\u003eGive your handler function a Handle instead of a Socket.\n\u003c/p\u003e\u003cp\u003eThe Handle will be opened with ReadWriteMode (you use one handle for both\ndirections of the Socket).  Also, it will be initialized with LineBuffering.\n\u003c/p\u003e\u003cp\u003eUnlike other handlers, the handle will be closed when the function returns.\nTherefore, if you are doing threading, you should to it before you call this\nhandler.\n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "(Handle -\u003e SockAddr -\u003e SockAddr -\u003e IO ())-\u003e HandlerT",
        "fct-type": "function",
        "title": "handleHandler"
      },
      "index": {
        "description": "Give your handler function Handle instead of Socket The Handle will be opened with ReadWriteMode you use one handle for both directions of the Socket Also it will be initialized with LineBuffering Unlike other handlers the handle will be closed when the function returns Therefore if you are doing threading you should to it before you call this handler",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "handleHandler",
        "normalized": "(Handle-\u003eSockAddr-\u003eSockAddr-\u003eIO())-\u003eHandlerT",
        "package": "MissingH",
        "partial": "Handler",
        "signature": "(Handle-\u003eSockAddr-\u003eSockAddr-\u003eIO())-\u003eHandlerT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:handleOne",
      "description": {
        "fct-descr": "\u003cp\u003eHandle one incoming request from the given \u003ccode\u003e\u003ca\u003eSocketServer\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "SocketServer -\u003e HandlerT -\u003e IO ()",
        "fct-source": "src/Network-SocketServer.html#handleOne",
        "fct-type": "function",
        "title": "handleOne"
      },
      "index": {
        "description": "Handle one incoming request from the given SocketServer",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "handleOne",
        "normalized": "SocketServer-\u003eHandlerT-\u003eIO()",
        "package": "MissingH",
        "partial": "One",
        "signature": "SocketServer-\u003eHandlerT-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:interface",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "HostAddress",
        "fct-source": "src/Network-SocketServer.html#InetServerOptions",
        "fct-type": "function",
        "title": "interface"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "interface",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:listenQueueSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "Int",
        "fct-source": "src/Network-SocketServer.html#InetServerOptions",
        "fct-type": "function",
        "title": "listenQueueSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "listenQueueSize",
        "normalized": "",
        "package": "MissingH",
        "partial": "Queue Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:loggingHandler",
      "description": {
        "fct-descr": "\u003cp\u003eLog each incoming connection using the interface in\n\u003ca\u003eSystem.Log.Logger\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eLog when the incoming connection disconnects.\n\u003c/p\u003e\u003cp\u003eAlso, log any failures that may occur in the child handler. \n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e Priority-\u003e HandlerT-\u003e HandlerT",
        "fct-type": "function",
        "title": "loggingHandler"
      },
      "index": {
        "description": "Log each incoming connection using the interface in System.Log.Logger Log when the incoming connection disconnects Also log any failures that may occur in the child handler",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "loggingHandler",
        "normalized": "String-\u003ePriority-\u003eHandlerT-\u003eHandlerT",
        "package": "MissingH",
        "partial": "Handler",
        "signature": "String-\u003ePriority-\u003eHandlerT-\u003eHandlerT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:optionsSS",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "InetServerOptions",
        "fct-source": "src/Network-SocketServer.html#SocketServer",
        "fct-type": "function",
        "title": "optionsSS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "optionsSS",
        "normalized": "",
        "package": "MissingH",
        "partial": "SS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:portNumber",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "PortNumber",
        "fct-source": "src/Network-SocketServer.html#InetServerOptions",
        "fct-type": "function",
        "title": "portNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "portNumber",
        "normalized": "",
        "package": "MissingH",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:protoStr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "String",
        "fct-source": "src/Network-SocketServer.html#InetServerOptions",
        "fct-type": "function",
        "title": "protoStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "protoStr",
        "normalized": "",
        "package": "MissingH",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:reuse",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "Bool",
        "fct-source": "src/Network-SocketServer.html#InetServerOptions",
        "fct-type": "function",
        "title": "reuse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "reuse",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:serveForever",
      "description": {
        "fct-descr": "\u003cp\u003eHandle all incoming requests from the given \u003ccode\u003e\u003ca\u003eSocketServer\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "SocketServer -\u003e HandlerT -\u003e IO ()",
        "fct-source": "src/Network-SocketServer.html#serveForever",
        "fct-type": "function",
        "title": "serveForever"
      },
      "index": {
        "description": "Handle all incoming requests from the given SocketServer",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "serveForever",
        "normalized": "SocketServer-\u003eHandlerT-\u003eIO()",
        "package": "MissingH",
        "partial": "Forever",
        "signature": "SocketServer-\u003eHandlerT-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:serveTCPforever",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function to completely set up a TCP\n\u003ccode\u003e\u003ca\u003eSocketServer\u003c/a\u003e\u003c/code\u003e and handle all incoming requests.\n\u003c/p\u003e\u003cp\u003eThis function is literally this:\n\u003c/p\u003e\u003cpre\u003eserveTCPforever options func =\n    do sockserv \u003c- setupSocketServer options\n       serveForever sockserv func\n\u003c/pre\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "InetServerOptions-\u003e HandlerT-\u003e IO ()",
        "fct-type": "function",
        "title": "serveTCPforever"
      },
      "index": {
        "description": "Convenience function to completely set up TCP SocketServer and handle all incoming requests This function is literally this serveTCPforever options func do sockserv setupSocketServer options serveForever sockserv func",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "serveTCPforever",
        "normalized": "InetServerOptions-\u003eHandlerT-\u003eIO()",
        "package": "MissingH",
        "partial": "TCPforever",
        "signature": "InetServerOptions-\u003eHandlerT-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:setupSocketServer",
      "description": {
        "fct-descr": "\u003cp\u003eTakes some options and sets up the \u003ccode\u003e\u003ca\u003eSocketServer\u003c/a\u003e\u003c/code\u003e.  I will bind\nand begin listening, but will not accept any connections itself. \n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "InetServerOptions -\u003e IO SocketServer",
        "fct-source": "src/Network-SocketServer.html#setupSocketServer",
        "fct-type": "function",
        "title": "setupSocketServer"
      },
      "index": {
        "description": "Takes some options and sets up the SocketServer will bind and begin listening but will not accept any connections itself",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "setupSocketServer",
        "normalized": "InetServerOptions-\u003eIO SocketServer",
        "package": "MissingH",
        "partial": "Socket Server",
        "signature": "InetServerOptions-\u003eIO SocketServer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:simpleTCPOptions",
      "description": {
        "fct-descr": "\u003cp\u003eGet Default options.  You can always modify it later. \n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "Int-\u003e InetServerOptions",
        "fct-type": "function",
        "title": "simpleTCPOptions"
      },
      "index": {
        "description": "Get Default options You can always modify it later",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "simpleTCPOptions",
        "normalized": "Int-\u003eInetServerOptions",
        "package": "MissingH",
        "partial": "TCPOptions",
        "signature": "Int-\u003eInetServerOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:sockSS",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "Socket",
        "fct-source": "src/Network-SocketServer.html#SocketServer",
        "fct-type": "function",
        "title": "sockSS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "sockSS",
        "normalized": "",
        "package": "MissingH",
        "partial": "SS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:sockType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "SocketType",
        "fct-source": "src/Network-SocketServer.html#InetServerOptions",
        "fct-type": "function",
        "title": "sockType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "sockType",
        "normalized": "",
        "package": "MissingH",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-SocketServer.html#v:threadedHandler",
      "description": {
        "fct-descr": "\u003cp\u003eHandle each incoming connection in its own thread to\n make the server multi-tasking.\n\u003c/p\u003e",
        "fct-module": "Network.SocketServer",
        "fct-package": "MissingH",
        "fct-signature": "HandlerT-\u003e HandlerT",
        "fct-type": "function",
        "title": "threadedHandler"
      },
      "index": {
        "description": "Handle each incoming connection in its own thread to make the server multi-tasking",
        "hierarchy": "Network SocketServer",
        "module": "Network.SocketServer",
        "name": "threadedHandler",
        "normalized": "HandlerT-\u003eHandlerT",
        "package": "MissingH",
        "partial": "Handler",
        "signature": "HandlerT-\u003eHandlerT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with networking\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Network-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with networking Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Network Utils",
        "module": "Network.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:connectTCP",
      "description": {
        "fct-module": "Network.Utils",
        "fct-package": "MissingH",
        "fct-signature": "HostName -\u003e PortNumber -\u003e IO Socket",
        "fct-source": "src/Network-Utils.html#connectTCP",
        "fct-type": "function",
        "title": "connectTCP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Utils",
        "module": "Network.Utils",
        "name": "connectTCP",
        "normalized": "HostName-\u003ePortNumber-\u003eIO Socket",
        "package": "MissingH",
        "partial": "TCP",
        "signature": "HostName-\u003ePortNumber-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:connectTCPAddr",
      "description": {
        "fct-module": "Network.Utils",
        "fct-package": "MissingH",
        "fct-signature": "SockAddr -\u003e IO Socket",
        "fct-source": "src/Network-Utils.html#connectTCPAddr",
        "fct-type": "function",
        "title": "connectTCPAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Utils",
        "module": "Network.Utils",
        "name": "connectTCPAddr",
        "normalized": "SockAddr-\u003eIO Socket",
        "package": "MissingH",
        "partial": "TCPAddr",
        "signature": "SockAddr-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:listenTCPAddr",
      "description": {
        "fct-module": "Network.Utils",
        "fct-package": "MissingH",
        "fct-signature": "SockAddr -\u003e Int -\u003e IO Socket",
        "fct-source": "src/Network-Utils.html#listenTCPAddr",
        "fct-type": "function",
        "title": "listenTCPAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Utils",
        "module": "Network.Utils",
        "name": "listenTCPAddr",
        "normalized": "SockAddr-\u003eInt-\u003eIO Socket",
        "package": "MissingH",
        "partial": "TCPAddr",
        "signature": "SockAddr-\u003eInt-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:niceSocketsDo",
      "description": {
        "fct-descr": "\u003cp\u003eSets up the system for networking.  Similar to the built-in\nwithSocketsDo (and actually, calls it), but also sets the SIGPIPE\nhandler so that signal is ignored.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e main = niceSocketsDo $ do { ... }\n\u003c/pre\u003e",
        "fct-module": "Network.Utils",
        "fct-package": "MissingH",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/Network-Utils.html#niceSocketsDo",
        "fct-type": "function",
        "title": "niceSocketsDo"
      },
      "index": {
        "description": "Sets up the system for networking Similar to the built-in withSocketsDo and actually calls it but also sets the SIGPIPE handler so that signal is ignored Example main niceSocketsDo do",
        "hierarchy": "Network Utils",
        "module": "Network.Utils",
        "name": "niceSocketsDo",
        "normalized": "IO a-\u003eIO a",
        "package": "MissingH",
        "partial": "Sockets Do",
        "signature": "IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Network-Utils.html#v:showSockAddr",
      "description": {
        "fct-module": "Network.Utils",
        "fct-package": "MissingH",
        "fct-signature": "SockAddr -\u003e IO String",
        "fct-source": "src/Network-Utils.html#showSockAddr",
        "fct-type": "function",
        "title": "showSockAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Utils",
        "module": "Network.Utils",
        "name": "showSockAddr",
        "normalized": "SockAddr-\u003eIO String",
        "package": "MissingH",
        "partial": "Sock Addr",
        "signature": "SockAddr-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommand invocation utilities.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003ePlease note: Most of this module is not compatible with Hugs.\n\u003c/p\u003e\u003cp\u003eCommand lines executed will be logged using \u003ca\u003eSystem.Log.Logger\u003c/a\u003e at the\nDEBUG level.  Failure messages will be logged at the WARNING level in addition\nto being raised as an exception.  Both are logged under\n\"System.Cmd.Utils.funcname\" -- for instance,\n\"System.Cmd.Utils.safeSystem\".  If you wish to suppress these messages\nglobally, you can simply run:\n\u003c/p\u003e\u003cpre\u003e updateGlobalLogger \"System.Cmd.Utils.safeSystem\"\n                     (setLevel CRITICAL)\n\u003c/pre\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003eupdateGlobalLogger\u003c/a\u003e\u003c/code\u003e,\n\u003ca\u003eSystem.Log.Logger\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIt is possible to set up pipelines with these utilities.  Example:\n\u003c/p\u003e\u003cpre\u003e (pid1, x1) \u003c- pipeFrom \"ls\" [\"/etc\"]\n (pid2, x2) \u003c- pipeBoth \"grep\" [\"x\"] x1\n putStr x2\n ... the grep output is displayed ...\n forceSuccess pid2\n forceSuccess pid1\n\u003c/pre\u003e\u003cp\u003eRemember, when you use the functions that return a String, you must not call\n\u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e until after all data from the String has been consumed.  Failure\nto wait will cause your program to appear to hang.\n\u003c/p\u003e\u003cp\u003eHere is an example of the wrong way to do it:\n\u003c/p\u003e\u003cpre\u003e (pid, x) \u003c- pipeFrom \"ls\" [\"/etc\"]\n forceSuccess pid         -- Hangs; the called program hasn't terminated yet\n processTheData x\n\u003c/pre\u003e\u003cp\u003eYou must instead process the data before calling \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen using the hPipe family of functions, this is probably more obvious.\n\u003c/p\u003e\u003cp\u003eMost of this module will be incompatible with Windows.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Cmd-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Command invocation utilities Written by John Goerzen jgoerzen@complete.org Please note Most of this module is not compatible with Hugs Command lines executed will be logged using System.Log.Logger at the DEBUG level Failure messages will be logged at the WARNING level in addition to being raised as an exception Both are logged under System.Cmd.Utils.funcname for instance System.Cmd.Utils.safeSystem If you wish to suppress these messages globally you can simply run updateGlobalLogger System.Cmd.Utils.safeSystem setLevel CRITICAL See also updateGlobalLogger System.Log.Logger It is possible to set up pipelines with these utilities Example pid1 x1 pipeFrom ls etc pid2 x2 pipeBoth grep x1 putStr x2 the grep output is displayed forceSuccess pid2 forceSuccess pid1 Remember when you use the functions that return String you must not call forceSuccess until after all data from the String has been consumed Failure to wait will cause your program to appear to hang Here is an example of the wrong way to do it pid pipeFrom ls etc forceSuccess pid Hangs the called program hasn terminated yet processTheData You must instead process the data before calling forceSuccess When using the hPipe family of functions this is probably more obvious Most of this module will be incompatible with Windows",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#t:PipeHandle",
      "description": {
        "fct-descr": "\u003cp\u003eReturn value from \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipeLinesFrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipeTo\u003c/a\u003e\u003c/code\u003e, or\n\u003ccode\u003e\u003ca\u003epipeBoth\u003c/a\u003e\u003c/code\u003e.  Contains both a ProcessID and the original command that was\nexecuted.  If you prefer not to use \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e on the result of one\nof these pipe calls, you can use (processID ph), assuming ph is your \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e,\nas a parameter to \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-Cmd-Utils.html#PipeHandle",
        "fct-type": "data",
        "title": "PipeHandle"
      },
      "index": {
        "description": "Return value from pipeFrom pipeLinesFrom pipeTo or pipeBoth Contains both ProcessID and the original command that was executed If you prefer not to use forceSuccess on the result of one of these pipe calls you can use processID ph assuming ph is your PipeHandle as parameter to getProcessStatus",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "PipeHandle",
        "normalized": "",
        "package": "MissingH",
        "partial": "Pipe Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#t:PipeMode",
      "description": {
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-Cmd-Utils.html#PipeMode",
        "fct-type": "data",
        "title": "PipeMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "PipeMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "Pipe Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:PipeHandle",
      "description": {
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "PipeHandle",
        "fct-source": "src/System-Cmd-Utils.html#PipeHandle",
        "fct-type": "function",
        "title": "PipeHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "PipeHandle",
        "normalized": "",
        "package": "MissingH",
        "partial": "Pipe Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:ReadFromPipe",
      "description": {
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "ReadFromPipe",
        "fct-source": "src/System-Cmd-Utils.html#PipeMode",
        "fct-type": "function",
        "title": "ReadFromPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "ReadFromPipe",
        "normalized": "",
        "package": "MissingH",
        "partial": "Read From Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:WriteToPipe",
      "description": {
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "WriteToPipe",
        "fct-source": "src/System-Cmd-Utils.html#PipeMode",
        "fct-type": "function",
        "title": "WriteToPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "WriteToPipe",
        "normalized": "",
        "package": "MissingH",
        "partial": "Write To Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:forceSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e to obtain the exit status\nof the given process ID.  If the process terminated normally, does nothing.\nOtherwise, raises an exception with an appropriate error message.\n\u003c/p\u003e\u003cp\u003eThis call will block waiting for the given pid to terminate.\n\u003c/p\u003e\u003cp\u003eNot available on Windows. \n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "PipeHandle -\u003e IO ()",
        "fct-source": "src/System-Cmd-Utils.html#forceSuccess",
        "fct-type": "function",
        "title": "forceSuccess"
      },
      "index": {
        "description": "Uses getProcessStatus to obtain the exit status of the given process ID If the process terminated normally does nothing Otherwise raises an exception with an appropriate error message This call will block waiting for the given pid to terminate Not available on Windows",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "forceSuccess",
        "normalized": "PipeHandle-\u003eIO()",
        "package": "MissingH",
        "partial": "Success",
        "signature": "PipeHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:forkRawSystem",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes the specified command in a subprocess, without waiting for\nthe result.  Returns the PID of the subprocess -- it is YOUR responsibility\nto use getProcessStatus or getAnyProcessStatus on that at some point.  Failure\nto do so will lead to resource leakage (zombie processes).\n\u003c/p\u003e\u003cp\u003eThis function does nothing with signals.  That too is up to you.\n\u003c/p\u003e\u003cp\u003eLogs as System.Cmd.Utils.forkRawSystem \n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e IO ProcessID",
        "fct-source": "src/System-Cmd-Utils.html#forkRawSystem",
        "fct-type": "function",
        "title": "forkRawSystem"
      },
      "index": {
        "description": "Invokes the specified command in subprocess without waiting for the result Returns the PID of the subprocess it is YOUR responsibility to use getProcessStatus or getAnyProcessStatus on that at some point Failure to do so will lead to resource leakage zombie processes This function does nothing with signals That too is up to you Logs as System.Cmd.Utils.forkRawSystem",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "forkRawSystem",
        "normalized": "FilePath-\u003e[String]-\u003eIO ProcessID",
        "package": "MissingH",
        "partial": "Raw System",
        "signature": "FilePath-\u003e[String]-\u003eIO ProcessID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:hPipeBoth",
      "description": {
        "fct-descr": "\u003cp\u003eLike a combination of \u003ccode\u003e\u003ca\u003ehPipeTo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehPipeFrom\u003c/a\u003e\u003c/code\u003e; returns\na 3-tuple of (\u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e, Data From Pipe, Data To Pipe).\n\u003c/p\u003e\u003cp\u003eWhen done, you must hClose both handles, and then use either \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e or\ngetProcessStatus on the \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.  Zombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eHint: you will usually need to ForkIO a thread to handle one of the Handles;\notherwise, deadlock can result.\n\u003c/p\u003e\u003cp\u003eThis function logs as pipeBoth.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, Handle, Handle)",
        "fct-source": "src/System-Cmd-Utils.html#hPipeBoth",
        "fct-type": "function",
        "title": "hPipeBoth"
      },
      "index": {
        "description": "Like combination of hPipeTo and hPipeFrom returns tuple of PipeHandle Data From Pipe Data To Pipe When done you must hClose both handles and then use either forceSuccess or getProcessStatus on the PipeHandle Zombies will result otherwise Hint you will usually need to ForkIO thread to handle one of the Handles otherwise deadlock can result This function logs as pipeBoth Not available on Windows",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "hPipeBoth",
        "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle,Handle)",
        "package": "MissingH",
        "partial": "Pipe Both",
        "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:hPipeFrom",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from a pipe.  Returns a Handle and a \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen done, you must hClose the handle, and then use either \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e or\ngetProcessStatus on the \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.  Zombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eThis function logs as pipeFrom.\n\u003c/p\u003e\u003cp\u003eNot available on Windows or with Hugs.\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, Handle)",
        "fct-source": "src/System-Cmd-Utils.html#hPipeFrom",
        "fct-type": "function",
        "title": "hPipeFrom"
      },
      "index": {
        "description": "Read data from pipe Returns Handle and PipeHandle When done you must hClose the handle and then use either forceSuccess or getProcessStatus on the PipeHandle Zombies will result otherwise This function logs as pipeFrom Not available on Windows or with Hugs",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "hPipeFrom",
        "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle)",
        "package": "MissingH",
        "partial": "Pipe From",
        "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:hPipeTo",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data to a pipe.  Returns a \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e and a new Handle to write\nto.\n\u003c/p\u003e\u003cp\u003eWhen done, you must hClose the handle, and then use either \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e or\ngetProcessStatus on the \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.  Zombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eThis function logs as pipeTo.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, Handle)",
        "fct-source": "src/System-Cmd-Utils.html#hPipeTo",
        "fct-type": "function",
        "title": "hPipeTo"
      },
      "index": {
        "description": "Write data to pipe Returns PipeHandle and new Handle to write to When done you must hClose the handle and then use either forceSuccess or getProcessStatus on the PipeHandle Zombies will result otherwise This function logs as pipeTo Not available on Windows",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "hPipeTo",
        "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle)",
        "package": "MissingH",
        "partial": "Pipe To",
        "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pOpen",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a pipe to the specified command.\n\u003c/p\u003e\u003cp\u003ePasses the handle on to the specified function.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePipeMode\u003c/a\u003e\u003c/code\u003e specifies what you will be doing.  That is, specifing \u003ccode\u003e\u003ca\u003eReadFromPipe\u003c/a\u003e\u003c/code\u003e\nsets up a pipe from stdin, and \u003ccode\u003e\u003ca\u003eWriteToPipe\u003c/a\u003e\u003c/code\u003e sets up a pipe from stdout.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "PipeMode -\u003e FilePath -\u003e [String] -\u003e (Handle -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-Cmd-Utils.html#pOpen",
        "fct-type": "function",
        "title": "pOpen"
      },
      "index": {
        "description": "Open pipe to the specified command Passes the handle on to the specified function The PipeMode specifies what you will be doing That is specifing ReadFromPipe sets up pipe from stdin and WriteToPipe sets up pipe from stdout Not available on Windows",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "pOpen",
        "normalized": "PipeMode-\u003eFilePath-\u003e[String]-\u003e(Handle-\u003eIO a)-\u003eIO a",
        "package": "MissingH",
        "partial": "Open",
        "signature": "PipeMode-\u003eFilePath-\u003e[String]-\u003e(Handle-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pOpen3",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a command, redirecting things to pipes.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e\u003cp\u003eNote that you may not use the same fd on more than one item.  If you\nwant to redirect stdout and stderr, dup it first.\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Maybe Fd-\u003e Maybe Fd-\u003e Maybe Fd-\u003e FilePath-\u003e [String]-\u003e (ProcessID -\u003e IO a)-\u003e IO ()-\u003e IO a",
        "fct-type": "function",
        "title": "pOpen3"
      },
      "index": {
        "description": "Runs command redirecting things to pipes Not available on Windows Note that you may not use the same fd on more than one item If you want to redirect stdout and stderr dup it first",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "pOpen3",
        "normalized": "Maybe Fd-\u003eMaybe Fd-\u003eMaybe Fd-\u003eFilePath-\u003e[String]-\u003e(ProcessID-\u003eIO a)-\u003eIO()-\u003eIO a",
        "package": "MissingH",
        "partial": "Open",
        "signature": "Maybe Fd-\u003eMaybe Fd-\u003eMaybe Fd-\u003eFilePath-\u003e[String]-\u003e(ProcessID-\u003eIO a)-\u003eIO()-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pOpen3Raw",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a command, redirecting things to pipes.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e\u003cp\u003eReturns immediately with the PID of the child.  Using \u003ccode\u003ewaitProcess\u003c/code\u003e on it\nis YOUR responsibility!\n\u003c/p\u003e\u003cp\u003eNote that you may not use the same fd on more than one item.  If you\nwant to redirect stdout and stderr, dup it first.\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Maybe Fd-\u003e Maybe Fd-\u003e Maybe Fd-\u003e FilePath-\u003e [String]-\u003e IO ()-\u003e IO ProcessID",
        "fct-type": "function",
        "title": "pOpen3Raw"
      },
      "index": {
        "description": "Runs command redirecting things to pipes Not available on Windows Returns immediately with the PID of the child Using waitProcess on it is YOUR responsibility Note that you may not use the same fd on more than one item If you want to redirect stdout and stderr dup it first",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "pOpen3Raw",
        "normalized": "Maybe Fd-\u003eMaybe Fd-\u003eMaybe Fd-\u003eFilePath-\u003e[String]-\u003eIO()-\u003eIO ProcessID",
        "package": "MissingH",
        "partial": "Open Raw",
        "signature": "Maybe Fd-\u003eMaybe Fd-\u003eMaybe Fd-\u003eFilePath-\u003e[String]-\u003eIO()-\u003eIO ProcessID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:phArgs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[String]",
        "fct-source": "src/System-Cmd-Utils.html#PipeHandle",
        "fct-type": "function",
        "title": "phArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "phArgs",
        "normalized": "[String]",
        "package": "MissingH",
        "partial": "Args",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:phCommand",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath",
        "fct-source": "src/System-Cmd-Utils.html#PipeHandle",
        "fct-type": "function",
        "title": "phCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "phCommand",
        "normalized": "",
        "package": "MissingH",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:phCreator",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that created it\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String",
        "fct-source": "src/System-Cmd-Utils.html#PipeHandle",
        "fct-type": "function",
        "title": "phCreator"
      },
      "index": {
        "description": "Function that created it",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "phCreator",
        "normalized": "",
        "package": "MissingH",
        "partial": "Creator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pipeBoth",
      "description": {
        "fct-descr": "\u003cp\u003eLike a combination of \u003ccode\u003e\u003ca\u003epipeTo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e; forks an IO thread\nto send data to the piped program, and simultaneously returns its output\nstream.\n\u003c/p\u003e\u003cp\u003eThe same note about checking the return status applies here as with \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNot available on Windows. \n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e String -\u003e IO (PipeHandle, String)",
        "fct-source": "src/System-Cmd-Utils.html#pipeBoth",
        "fct-type": "function",
        "title": "pipeBoth"
      },
      "index": {
        "description": "Like combination of pipeTo and pipeFrom forks an IO thread to send data to the piped program and simultaneously returns its output stream The same note about checking the return status applies here as with pipeFrom Not available on Windows",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "pipeBoth",
        "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO(PipeHandle,String)",
        "package": "MissingH",
        "partial": "Both",
        "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO(PipeHandle,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pipeFrom",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from a pipe.  Returns a lazy string and a \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eONLY AFTER the string has been read completely, You must call either\n\u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003ePipeHandle\u003c/a\u003e\u003c/code\u003e.\nZombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, String)",
        "fct-source": "src/System-Cmd-Utils.html#pipeFrom",
        "fct-type": "function",
        "title": "pipeFrom"
      },
      "index": {
        "description": "Read data from pipe Returns lazy string and PipeHandle ONLY AFTER the string has been read completely You must call either getProcessStatus or forceSuccess on the PipeHandle Zombies will result otherwise Not available on Windows",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "pipeFrom",
        "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,String)",
        "package": "MissingH",
        "partial": "From",
        "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pipeLinesFrom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e, but returns data in lines instead of just a String.\nShortcut for calling lines on the result from \u003ccode\u003e\u003ca\u003epipeFrom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: this function logs as pipeFrom.\n\u003c/p\u003e\u003cp\u003eNot available on Windows. \n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e IO (PipeHandle, [String])",
        "fct-source": "src/System-Cmd-Utils.html#pipeLinesFrom",
        "fct-type": "function",
        "title": "pipeLinesFrom"
      },
      "index": {
        "description": "Like pipeFrom but returns data in lines instead of just String Shortcut for calling lines on the result from pipeFrom Note this function logs as pipeFrom Not available on Windows",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "pipeLinesFrom",
        "normalized": "FilePath-\u003e[String]-\u003eIO(PipeHandle,[String])",
        "package": "MissingH",
        "partial": "Lines From",
        "signature": "FilePath-\u003e[String]-\u003eIO(PipeHandle,[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:pipeTo",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data to a pipe.  Returns a ProcessID.\n\u003c/p\u003e\u003cp\u003eYou must call either\n\u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eforceSuccess\u003c/a\u003e\u003c/code\u003e on the ProcessID.\nZombies will result otherwise.\n\u003c/p\u003e\u003cp\u003eNot available on Windows.\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e String -\u003e IO PipeHandle",
        "fct-source": "src/System-Cmd-Utils.html#pipeTo",
        "fct-type": "function",
        "title": "pipeTo"
      },
      "index": {
        "description": "Write data to pipe Returns ProcessID You must call either getProcessStatus or forceSuccess on the ProcessID Zombies will result otherwise Not available on Windows",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "pipeTo",
        "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO PipeHandle",
        "package": "MissingH",
        "partial": "To",
        "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO PipeHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:posixRawSystem",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes the specified command in a subprocess, waiting for the result.\nReturn the result status.  Never raises an exception.  Only available\non POSIX platforms.\n\u003c/p\u003e\u003cp\u003eLike system(3), this command ignores SIGINT and SIGQUIT and blocks SIGCHLD\nduring its execution.\n\u003c/p\u003e\u003cp\u003eLogs as System.Cmd.Utils.posixRawSystem \n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e IO ProcessStatus",
        "fct-source": "src/System-Cmd-Utils.html#posixRawSystem",
        "fct-type": "function",
        "title": "posixRawSystem"
      },
      "index": {
        "description": "Invokes the specified command in subprocess waiting for the result Return the result status Never raises an exception Only available on POSIX platforms Like system this command ignores SIGINT and SIGQUIT and blocks SIGCHLD during its execution Logs as System.Cmd.Utils.posixRawSystem",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "posixRawSystem",
        "normalized": "FilePath-\u003e[String]-\u003eIO ProcessStatus",
        "package": "MissingH",
        "partial": "Raw System",
        "signature": "FilePath-\u003e[String]-\u003eIO ProcessStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:processID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "ProcessID",
        "fct-source": "src/System-Cmd-Utils.html#PipeHandle",
        "fct-type": "function",
        "title": "processID"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "processID",
        "normalized": "",
        "package": "MissingH",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Cmd-Utils.html#v:safeSystem",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes the specified command in a subprocess, waiting for the result.\nIf the command terminated successfully, return normally.  Otherwise,\nraises a userError with the problem.\n\u003c/p\u003e\u003cp\u003eImplemented in terms of \u003ccode\u003e\u003ca\u003eposixRawSystem\u003c/a\u003e\u003c/code\u003e where supported, and System.Posix.rawSystem otherwise.\n\u003c/p\u003e",
        "fct-module": "System.Cmd.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e [String] -\u003e IO ()",
        "fct-source": "src/System-Cmd-Utils.html#safeSystem",
        "fct-type": "function",
        "title": "safeSystem"
      },
      "index": {
        "description": "Invokes the specified command in subprocess waiting for the result If the command terminated successfully return normally Otherwise raises userError with the problem Implemented in terms of posixRawSystem where supported and System.Posix.rawSystem otherwise",
        "hierarchy": "System Cmd Utils",
        "module": "System.Cmd.Utils",
        "name": "safeSystem",
        "normalized": "FilePath-\u003e[String]-\u003eIO()",
        "package": "MissingH",
        "partial": "System",
        "signature": "FilePath-\u003e[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eUtilities for command-line parsing, including wrappers around\nthe standard System.Console.GetOpt module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.GetOpt.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Console-GetOpt-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Written by John Goerzen jgoerzen@complete.org Utilities for command-line parsing including wrappers around the standard System.Console.GetOpt module",
        "hierarchy": "System Console GetOpt Utils",
        "module": "System.Console.GetOpt.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#t:StdOption",
      "description": {
        "fct-descr": "\u003cp\u003eA type to standardize some common uses of GetOpt.\n\u003c/p\u003e\u003cp\u003eThe first component of the tuple is the long name of the option.\n\u003c/p\u003e\u003cp\u003eThe second component is empty if there is no arg, or has the arg otherwise. \n\u003c/p\u003e",
        "fct-module": "System.Console.GetOpt.Utils",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/System-Console-GetOpt-Utils.html#StdOption",
        "fct-type": "type",
        "title": "StdOption"
      },
      "index": {
        "description": "type to standardize some common uses of GetOpt The first component of the tuple is the long name of the option The second component is empty if there is no arg or has the arg otherwise",
        "hierarchy": "System Console GetOpt Utils",
        "module": "System.Console.GetOpt.Utils",
        "name": "StdOption",
        "normalized": "",
        "package": "MissingH",
        "partial": "Std Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#v:parseCmdLine",
      "description": {
        "fct-descr": "\u003cp\u003eSimple command line parser -- a basic wrapper around the system's\ndefault getOpt.  See the System.Console.GetOpt manual for a description of the\nfirst two parameters.\n\u003c/p\u003e\u003cp\u003eThe third parameter is a usage information header.\n\u003c/p\u003e\u003cp\u003eThe return value consists of the list of parsed flags and a list of\nnon-option arguments. \n\u003c/p\u003e",
        "fct-module": "System.Console.GetOpt.Utils",
        "fct-package": "MissingH",
        "fct-signature": "ArgOrder a -\u003e [OptDescr a] -\u003e String -\u003e IO ([a], [String])",
        "fct-source": "src/System-Console-GetOpt-Utils.html#parseCmdLine",
        "fct-type": "function",
        "title": "parseCmdLine"
      },
      "index": {
        "description": "Simple command line parser basic wrapper around the system default getOpt See the System.Console.GetOpt manual for description of the first two parameters The third parameter is usage information header The return value consists of the list of parsed flags and list of non-option arguments",
        "hierarchy": "System Console GetOpt Utils",
        "module": "System.Console.GetOpt.Utils",
        "name": "parseCmdLine",
        "normalized": "ArgOrder a-\u003e[OptDescr a]-\u003eString-\u003eIO([a],[String])",
        "package": "MissingH",
        "partial": "Cmd Line",
        "signature": "ArgOrder a-\u003e[OptDescr a]-\u003eString-\u003eIO([a],[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#v:stdOptional",
      "description": {
        "fct-descr": "\u003cp\u003eHandle an optional argument. \n\u003c/p\u003e",
        "fct-module": "System.Console.GetOpt.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e Maybe String-\u003e StdOption",
        "fct-type": "function",
        "title": "stdOptional"
      },
      "index": {
        "description": "Handle an optional argument",
        "hierarchy": "System Console GetOpt Utils",
        "module": "System.Console.GetOpt.Utils",
        "name": "stdOptional",
        "normalized": "String-\u003eMaybe String-\u003eStdOption",
        "package": "MissingH",
        "partial": "Optional",
        "signature": "String-\u003eMaybe String-\u003eStdOption"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#v:stdRequired",
      "description": {
        "fct-descr": "\u003cp\u003eHandle a required argument. \n\u003c/p\u003e",
        "fct-module": "System.Console.GetOpt.Utils",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e String-\u003e StdOption",
        "fct-type": "function",
        "title": "stdRequired"
      },
      "index": {
        "description": "Handle required argument",
        "hierarchy": "System Console GetOpt Utils",
        "module": "System.Console.GetOpt.Utils",
        "name": "stdRequired",
        "normalized": "String-\u003eString-\u003eStdOption",
        "package": "MissingH",
        "partial": "Required",
        "signature": "String-\u003eString-\u003eStdOption"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Console-GetOpt-Utils.html#v:validateCmdLine",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eparseCmdLine\u003c/a\u003e\u003c/code\u003e, but takes an additional function that validates\nthe post-parse command-line arguments.  This is useful, for example, in\nsituations where there are two arguments that are mutually-exclusive and only\none may legitimately be given at a time.\n\u003c/p\u003e\u003cp\u003eThe return value of the function indicates whether or not it detected an\nerror condition.  If it returns Nothing, there is no error.  If it returns\nJust String, there was an error, described by the String.\n\u003c/p\u003e",
        "fct-module": "System.Console.GetOpt.Utils",
        "fct-package": "MissingH",
        "fct-signature": "ArgOrder a -\u003e [OptDescr a] -\u003e String -\u003e (([a], [String]) -\u003e Maybe String) -\u003e IO ([a], [String])",
        "fct-source": "src/System-Console-GetOpt-Utils.html#validateCmdLine",
        "fct-type": "function",
        "title": "validateCmdLine"
      },
      "index": {
        "description": "Similar to parseCmdLine but takes an additional function that validates the post-parse command-line arguments This is useful for example in situations where there are two arguments that are mutually-exclusive and only one may legitimately be given at time The return value of the function indicates whether or not it detected an error condition If it returns Nothing there is no error If it returns Just String there was an error described by the String",
        "hierarchy": "System Console GetOpt Utils",
        "module": "System.Console.GetOpt.Utils",
        "name": "validateCmdLine",
        "normalized": "ArgOrder a-\u003e[OptDescr a]-\u003eString-\u003e(([a],[String])-\u003eMaybe String)-\u003eIO([a],[String])",
        "package": "MissingH",
        "partial": "Cmd Line",
        "signature": "ArgOrder a-\u003e[OptDescr a]-\u003eString-\u003e(([a],[String])-\u003eMaybe String)-\u003eIO([a],[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Daemon.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for writing daemons/server processes\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003ePlease note: Most of this module is not compatible with Hugs.\n\u003c/p\u003e\u003cp\u003eMessages from this module are logged under \u003ccode\u003eSystem.Daemon\u003c/code\u003e.  See\n\u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eBased on background\nfrom \u003ca\u003ehttp://www.erlenstar.demon.co.uk/unix/faq_2.html#SEC16\u003c/a\u003e and\n\u003ca\u003ehttp://www.haskell.org/hawiki/HaskellUnixDaemon\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is not available on Windows.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Daemon.html",
        "fct-type": "module",
        "title": "Daemon"
      },
      "index": {
        "description": "Tools for writing daemons server processes Written by John Goerzen jgoerzen@complete.org Please note Most of this module is not compatible with Hugs Messages from this module are logged under System.Daemon See Logger for details Based on background from http www.erlenstar.demon.co.uk unix faq html SEC16 and http www.haskell.org hawiki HaskellUnixDaemon This module is not available on Windows",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "Daemon",
        "normalized": "",
        "package": "MissingH",
        "partial": "Daemon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Daemon.html#v:detachDaemon",
      "description": {
        "fct-descr": "\u003cp\u003eDetach the process from a controlling terminal and run it in the\nbackground, handling it with standard Unix deamon semantics.\n\u003c/p\u003e\u003cp\u003eAfter running this, please note the following side-effects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The PID of the running process will change\n\u003c/li\u003e\u003cli\u003e stdin, stdout, and stderr will not work (they'll be set to\n   /dev/null)\n\u003c/li\u003e\u003cli\u003e CWD will be changed to /\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eI \u003cem\u003ehighly\u003c/em\u003e suggest running this function before starting any threads.\n\u003c/p\u003e\u003cp\u003eNote that this is not intended for a daemon invoked from inetd(1).\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "MissingH",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Daemon.html#detachDaemon",
        "fct-type": "function",
        "title": "detachDaemon"
      },
      "index": {
        "description": "Detach the process from controlling terminal and run it in the background handling it with standard Unix deamon semantics After running this please note the following side-effects The PID of the running process will change stdin stdout and stderr will not work they ll be set to dev null CWD will be changed to highly suggest running this function before starting any threads Note that this is not intended for daemon invoked from inetd",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "detachDaemon",
        "normalized": "IO()",
        "package": "MissingH",
        "partial": "Daemon",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian-ControlParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with Debian\nfiles and programs.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Debian.ControlParser",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Debian-ControlParser.html",
        "fct-type": "module",
        "title": "ControlParser"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with Debian files and programs Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "System Debian ControlParser",
        "module": "System.Debian.ControlParser",
        "name": "ControlParser",
        "normalized": "",
        "package": "MissingH",
        "partial": "Control Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian-ControlParser.html#v:control",
      "description": {
        "fct-descr": "\u003cp\u003eMain parser for the control file \n\u003c/p\u003e",
        "fct-module": "System.Debian.ControlParser",
        "fct-package": "MissingH",
        "fct-signature": "CharParser a [(String, String)]",
        "fct-source": "src/System-Debian-ControlParser.html#control",
        "fct-type": "function",
        "title": "control"
      },
      "index": {
        "description": "Main parser for the control file",
        "hierarchy": "System Debian ControlParser",
        "module": "System.Debian.ControlParser",
        "name": "control",
        "normalized": "CharParser a[(String,String)]",
        "package": "MissingH",
        "partial": "",
        "signature": "CharParser a[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian-ControlParser.html#v:depPart",
      "description": {
        "fct-descr": "\u003cp\u003eDependency parser.\n\u003c/p\u003e\u003cp\u003eReturns (package name, Maybe version, arch list)\n\u003c/p\u003e\u003cp\u003eversion is (operator, operand) \n\u003c/p\u003e",
        "fct-module": "System.Debian.ControlParser",
        "fct-package": "MissingH",
        "fct-signature": "CharParser a (String, Maybe (String, String), [String])",
        "fct-source": "src/System-Debian-ControlParser.html#depPart",
        "fct-type": "function",
        "title": "depPart"
      },
      "index": {
        "description": "Dependency parser Returns package name Maybe version arch list version is operator operand",
        "hierarchy": "System Debian ControlParser",
        "module": "System.Debian.ControlParser",
        "name": "depPart",
        "normalized": "CharParser a(String,Maybe(String,String),[String])",
        "package": "MissingH",
        "partial": "Part",
        "signature": "CharParser a(String,Maybe(String,String),[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with Debian\nfiles and programs.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Debian",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Debian.html",
        "fct-type": "module",
        "title": "Debian"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with Debian files and programs Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "System Debian",
        "module": "System.Debian",
        "name": "Debian",
        "normalized": "",
        "package": "MissingH",
        "partial": "Debian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#t:ControlFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe type representing the contents of a Debian control file,\nor any control-like file (such as the output from apt-cache show, etc.) \n\u003c/p\u003e",
        "fct-module": "System.Debian",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/System-Debian.html#ControlFile",
        "fct-type": "type",
        "title": "ControlFile"
      },
      "index": {
        "description": "The type representing the contents of Debian control file or any control-like file such as the output from apt-cache show etc",
        "hierarchy": "System Debian",
        "module": "System.Debian",
        "name": "ControlFile",
        "normalized": "",
        "package": "MissingH",
        "partial": "Control File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#t:DebVersion",
      "description": {
        "fct-descr": "\u003cp\u003eThe type representing a Debian version number.  This type is an instance\nof \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e, but you can also use \u003ccode\u003e\u003ca\u003ecompareDebVersion\u003c/a\u003e\u003c/code\u003e if you prefer. \n\u003c/p\u003e",
        "fct-module": "System.Debian",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-Debian.html#DebVersion",
        "fct-type": "data",
        "title": "DebVersion"
      },
      "index": {
        "description": "The type representing Debian version number This type is an instance of Ord but you can also use compareDebVersion if you prefer",
        "hierarchy": "System Debian",
        "module": "System.Debian",
        "name": "DebVersion",
        "normalized": "",
        "package": "MissingH",
        "partial": "Deb Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#v:checkDebVersion",
      "description": {
        "fct-module": "System.Debian",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e String-\u003e String-\u003e IO Bool",
        "fct-type": "function",
        "title": "checkDebVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "System Debian",
        "module": "System.Debian",
        "name": "checkDebVersion",
        "normalized": "String-\u003eString-\u003eString-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Deb Version",
        "signature": "String-\u003eString-\u003eString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Debian.html#v:compareDebVersion",
      "description": {
        "fct-descr": "\u003cp\u003eCompare the versions of two packages. \n\u003c/p\u003e",
        "fct-module": "System.Debian",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e String -\u003e IO Ordering",
        "fct-source": "src/System-Debian.html#compareDebVersion",
        "fct-type": "function",
        "title": "compareDebVersion"
      },
      "index": {
        "description": "Compare the versions of two packages",
        "hierarchy": "System Debian",
        "module": "System.Debian",
        "name": "compareDebVersion",
        "normalized": "String-\u003eString-\u003eIO Ordering",
        "package": "MissingH",
        "partial": "Deb Version",
        "signature": "String-\u003eString-\u003eIO Ordering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGZip file decompression\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThe GZip format is described in RFC1952.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-FileArchive-GZip.html",
        "fct-type": "module",
        "title": "GZip"
      },
      "index": {
        "description": "GZip file decompression Copyright John Goerzen jgoerzen@complete.org The GZip format is described in RFC1952",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "GZip",
        "normalized": "",
        "package": "MissingH",
        "partial": "GZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#t:Footer",
      "description": {
        "fct-descr": "\u003cp\u003eStored on-disk at the end of each section. \n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-FileArchive-GZip.html#Footer",
        "fct-type": "data",
        "title": "Footer"
      },
      "index": {
        "description": "Stored on-disk at the end of each section",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "Footer",
        "normalized": "",
        "package": "MissingH",
        "partial": "Footer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#t:GZipError",
      "description": {
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-FileArchive-GZip.html#GZipError",
        "fct-type": "data",
        "title": "GZipError"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "GZipError",
        "normalized": "",
        "package": "MissingH",
        "partial": "GZip Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#t:Header",
      "description": {
        "fct-descr": "\u003cp\u003eThe data structure representing the GZip header.  This occurs\nat the beginning of each \u003ccode\u003e\u003ca\u003eSection\u003c/a\u003e\u003c/code\u003e on disk. \n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "data",
        "title": "Header"
      },
      "index": {
        "description": "The data structure representing the GZip header This occurs at the beginning of each Section on disk",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "Header",
        "normalized": "",
        "package": "MissingH",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#t:Section",
      "description": {
        "fct-descr": "\u003cp\u003eA section represents a compressed component in a GZip file.\nEvery GZip file has at least one. \n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/System-FileArchive-GZip.html#Section",
        "fct-type": "type",
        "title": "Section"
      },
      "index": {
        "description": "section represents compressed component in GZip file Every GZip file has at least one",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "Section",
        "normalized": "",
        "package": "MissingH",
        "partial": "Section",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:CRCError",
      "description": {
        "fct-descr": "\u003cp\u003eCRC-32 check failed\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "CRCError",
        "fct-source": "src/System-FileArchive-GZip.html#GZipError",
        "fct-type": "function",
        "title": "CRCError"
      },
      "index": {
        "description": "CRC-32 check failed",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "CRCError",
        "normalized": "",
        "package": "MissingH",
        "partial": "CRCError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:Footer",
      "description": {
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Footer",
        "fct-source": "src/System-FileArchive-GZip.html#Footer",
        "fct-type": "function",
        "title": "Footer"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "Footer",
        "normalized": "",
        "package": "MissingH",
        "partial": "Footer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:Header",
      "description": {
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Header",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "function",
        "title": "Header"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "Header",
        "normalized": "",
        "package": "MissingH",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:NotGZIPFile",
      "description": {
        "fct-descr": "\u003cp\u003eCouldn't find a GZip header\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "NotGZIPFile",
        "fct-source": "src/System-FileArchive-GZip.html#GZipError",
        "fct-type": "function",
        "title": "NotGZIPFile"
      },
      "index": {
        "description": "Couldn find GZip header",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "NotGZIPFile",
        "normalized": "",
        "package": "MissingH",
        "partial": "Not GZIPFile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:UnknownError",
      "description": {
        "fct-descr": "\u003cp\u003eOther problem arose\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "UnknownError String",
        "fct-source": "src/System-FileArchive-GZip.html#GZipError",
        "fct-type": "function",
        "title": "UnknownError"
      },
      "index": {
        "description": "Other problem arose",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "UnknownError",
        "normalized": "",
        "package": "MissingH",
        "partial": "Unknown Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:UnknownMethod",
      "description": {
        "fct-descr": "\u003cp\u003eCompressed with something other than method 8 (deflate)\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "UnknownMethod",
        "fct-source": "src/System-FileArchive-GZip.html#GZipError",
        "fct-type": "function",
        "title": "UnknownMethod"
      },
      "index": {
        "description": "Compressed with something other than method deflate",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "UnknownMethod",
        "normalized": "",
        "package": "MissingH",
        "partial": "Unknown Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:comment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "comment",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:crc32",
      "description": {
        "fct-descr": "\u003cp\u003eThe stored GZip CRC-32 of the original, decompressed data\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Word32",
        "fct-source": "src/System-FileArchive-GZip.html#Footer",
        "fct-type": "function",
        "title": "crc32"
      },
      "index": {
        "description": "The stored GZip CRC-32 of the original decompressed data",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "crc32",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:crc32valid",
      "description": {
        "fct-descr": "\u003cp\u003eWhether or not the stored CRC-32 matches the calculated CRC-32 of the data\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Bool",
        "fct-source": "src/System-FileArchive-GZip.html#Footer",
        "fct-type": "function",
        "title": "crc32valid"
      },
      "index": {
        "description": "Whether or not the stored CRC-32 matches the calculated CRC-32 of the data",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "crc32valid",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eRead a GZip file, decompressing all sections that are found.\n\u003c/p\u003e\u003cp\u003eReturns a decompresed data stream and Nothing, or an unreliable string\nand Just (error).  If you get anything other than Nothing, the String\nreturned should be discarded.\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e (String, Maybe GZipError)",
        "fct-source": "src/System-FileArchive-GZip.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Read GZip file decompressing all sections that are found Returns decompresed data stream and Nothing or an unreliable string and Just error If you get anything other than Nothing the String returned should be discarded",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "decompress",
        "normalized": "String-\u003e(String,Maybe GZipError)",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e(String,Maybe GZipError)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:extra",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "function",
        "title": "extra"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "extra",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:filename",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "function",
        "title": "filename"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "filename",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:flags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Int",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "function",
        "title": "flags"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "flags",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:hDecompress",
      "description": {
        "fct-descr": "\u003cp\u003eRead a GZip file, decompressing all sections found.\n\u003c/p\u003e\u003cp\u003eWrites the decompressed data stream to the given output handle.\n\u003c/p\u003e\u003cp\u003eReturns Nothing if the action was successful, or Just GZipError if there\nwas a problem.  If there was a problem, the data written to the output\nhandle should be discarded.\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Handle-\u003e Handle-\u003e IO (Maybe GZipError)",
        "fct-type": "function",
        "title": "hDecompress"
      },
      "index": {
        "description": "Read GZip file decompressing all sections found Writes the decompressed data stream to the given output handle Returns Nothing if the action was successful or Just GZipError if there was problem If there was problem the data written to the output handle should be discarded",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "hDecompress",
        "normalized": "Handle-\u003eHandle-\u003eIO(Maybe GZipError)",
        "package": "MissingH",
        "partial": "Decompress",
        "signature": "Handle-\u003eHandle-\u003eIO(Maybe GZipError)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:method",
      "description": {
        "fct-descr": "\u003cp\u003eCompression method.  Only 8 is defined at present.\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Int",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "function",
        "title": "method"
      },
      "index": {
        "description": "Compression method Only is defined at present",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "method",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:mtime",
      "description": {
        "fct-descr": "\u003cp\u003eModification time of the original file\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Word32",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "function",
        "title": "mtime"
      },
      "index": {
        "description": "Modification time of the original file",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "mtime",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:os",
      "description": {
        "fct-descr": "\u003cp\u003eCreating operating system\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Int",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "function",
        "title": "os"
      },
      "index": {
        "description": "Creating operating system",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "os",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:read_header",
      "description": {
        "fct-descr": "\u003cp\u003eRead the GZip header.  Return (Header, Remainder).\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e Either GZipError (Header, String)",
        "fct-source": "src/System-FileArchive-GZip.html#read_header",
        "fct-type": "function",
        "title": "read_header"
      },
      "index": {
        "description": "Read the GZip header Return Header Remainder",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "read_header",
        "normalized": "String-\u003eEither GZipError(Header,String)",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eEither GZipError(Header,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:read_section",
      "description": {
        "fct-descr": "\u003cp\u003eRead one section, returning (ThisSection, Remainder)\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e Either GZipError (Section, String)",
        "fct-source": "src/System-FileArchive-GZip.html#read_section",
        "fct-type": "function",
        "title": "read_section"
      },
      "index": {
        "description": "Read one section returning ThisSection Remainder",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "read_section",
        "normalized": "String-\u003eEither GZipError(Section,String)",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eEither GZipError(Section,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:read_sections",
      "description": {
        "fct-descr": "\u003cp\u003eRead all sections.\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e Either GZipError [Section]",
        "fct-source": "src/System-FileArchive-GZip.html#read_sections",
        "fct-type": "function",
        "title": "read_sections"
      },
      "index": {
        "description": "Read all sections",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "read_sections",
        "normalized": "String-\u003eEither GZipError[Section]",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eEither GZipError[Section]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the original, decompressed data\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Word32",
        "fct-source": "src/System-FileArchive-GZip.html#Footer",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The size of the original decompressed data",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "size",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-FileArchive-GZip.html#v:xfl",
      "description": {
        "fct-descr": "\u003cp\u003eExtra flags\n\u003c/p\u003e",
        "fct-module": "System.FileArchive.GZip",
        "fct-package": "MissingH",
        "fct-signature": "Int",
        "fct-source": "src/System-FileArchive-GZip.html#Header",
        "fct-type": "function",
        "title": "xfl"
      },
      "index": {
        "description": "Extra flags",
        "hierarchy": "System FileArchive GZip",
        "module": "System.FileArchive.GZip",
        "name": "xfl",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with binary\ninput and output.\n\u003c/p\u003e\u003cp\u003eYou can use this module to deal with binary blocks of data as either Strings\nor lists of Word8.  The BinaryConvertible class provides this abstraction.\n\u003c/p\u003e\u003cp\u003eWherever you see HVIO, you can transparently substite a regular Handle.\nThis module can work with any HVIO object, however.  See\n\u003ca\u003eSystem.IO.HVIO\u003c/a\u003e for more details.\n\u003c/p\u003e\u003cp\u003eVersions of MissingH prior 0.11.6 lacked the \u003ccode\u003e\u003ca\u003eBinaryConvertible\u003c/a\u003e\u003c/code\u003e class\nand worked only with Strings and Handles.\n\u003c/p\u003e\u003cp\u003eImportant note: /binary functions are not supported in all Haskell\nimplementations/.  Do not import or use this module unless you know you\nare using an implementation that supports them.  At this time, here\nis the support status:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e GHC 6.2 and above: yes\n\u003c/li\u003e\u003cli\u003e GHC 6.x, earlier versions: unknown\n\u003c/li\u003e\u003cli\u003e GHC 5.x: no\n\u003c/li\u003e\u003cli\u003e nhc98: no\n\u003c/li\u003e\u003cli\u003e Hugs: partial (maybe complete; needs more testing)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNon-binary functions may be found in \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ca\u003eSystem.IO.BlockIO\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with binary input and output You can use this module to deal with binary blocks of data as either Strings or lists of Word8 The BinaryConvertible class provides this abstraction Wherever you see HVIO you can transparently substite regular Handle This module can work with any HVIO object however See System.IO.HVIO for more details Versions of MissingH prior lacked the BinaryConvertible class and worked only with Strings and Handles Important note binary functions are not supported in all Haskell implementations Do not import or use this module unless you know you are using an implementation that supports them At this time here is the support status GHC and above yes GHC earlier versions unknown GHC no nhc98 no Hugs partial maybe complete needs more testing Non-binary functions may be found in System.IO See also System.IO.BlockIO Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "MissingH",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#t:BinaryConvertible",
      "description": {
        "fct-descr": "\u003cp\u003eProvides support for handling binary blocks with convenient\ntypes.\n\u003c/p\u003e\u003cp\u003eThis module provides implementations for Strings and for [Word8] (lists of\nWord8s). \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "class",
        "fct-source": "src/System-IO-Binary.html#BinaryConvertible",
        "fct-type": "class",
        "title": "BinaryConvertible"
      },
      "index": {
        "description": "Provides support for handling binary blocks with convenient types This module provides implementations for Strings and for Word8 lists of Word8s",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "BinaryConvertible",
        "normalized": "",
        "package": "MissingH",
        "partial": "Binary Convertible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:blockCopy",
      "description": {
        "fct-descr": "\u003cp\u003eCopies from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e using binary blocks of the given size.\nAn alias for \u003ccode\u003e\u003ca\u003ehBlockCopy\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#blockCopy",
        "fct-type": "function",
        "title": "blockCopy"
      },
      "index": {
        "description": "Copies from stdin to stdout using binary blocks of the given size An alias for hBlockCopy over stdin and stdout",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "blockCopy",
        "normalized": "Int-\u003eIO()",
        "package": "MissingH",
        "partial": "Copy",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:blockInteract",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehBlockInteract\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e ([[b]] -\u003e [[c]]) -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#blockInteract",
        "fct-type": "function",
        "title": "blockInteract"
      },
      "index": {
        "description": "An alias for hBlockInteract over stdin and stdout",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "blockInteract",
        "normalized": "Int-\u003e([[a]]-\u003e[[b]])-\u003eIO()",
        "package": "MissingH",
        "partial": "Interact",
        "signature": "Int-\u003e([[b]]-\u003e[[c]])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:copyFileBlocksToFile",
      "description": {
        "fct-descr": "\u003cp\u003eCopies one filename to another in binary mode.\n\u003c/p\u003e\u003cp\u003ePlease note that the Unix permission bits on the output file cannot\nbe set due to a limitation of the Haskell \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e\nfunction.  Therefore, you may need to adjust those bits after the copy\nyourself.\n\u003c/p\u003e\u003cp\u003eThis function is implemented using \u003ccode\u003e\u003ca\u003ehBlockCopy\u003c/a\u003e\u003c/code\u003e internally. \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#copyFileBlocksToFile",
        "fct-type": "function",
        "title": "copyFileBlocksToFile"
      },
      "index": {
        "description": "Copies one filename to another in binary mode Please note that the Unix permission bits on the output file cannot be set due to limitation of the Haskell openBinaryFile function Therefore you may need to adjust those bits after the copy yourself This function is implemented using hBlockCopy internally",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "copyFileBlocksToFile",
        "normalized": "Int-\u003eFilePath-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "File Blocks To File",
        "signature": "Int-\u003eFilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:fromBuf",
      "description": {
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e (Ptr CChar -\u003e IO Int) -\u003e IO [a]",
        "fct-source": "src/System-IO-Binary.html#fromBuf",
        "fct-type": "method",
        "title": "fromBuf"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "fromBuf",
        "normalized": "Int-\u003e(Ptr CChar-\u003eIO Int)-\u003eIO[a]",
        "package": "MissingH",
        "partial": "Buf",
        "signature": "Int-\u003e(Ptr CChar-\u003eIO Int)-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:fullBlockInteract",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehFullBlockInteract\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e ([[b]] -\u003e [[c]]) -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#fullBlockInteract",
        "fct-type": "function",
        "title": "fullBlockInteract"
      },
      "index": {
        "description": "An alias for hFullBlockInteract over stdin and stdout",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "fullBlockInteract",
        "normalized": "Int-\u003e([[a]]-\u003e[[b]])-\u003eIO()",
        "package": "MissingH",
        "partial": "Block Interact",
        "signature": "Int-\u003e([[b]]-\u003e[[c]])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:fullGetBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehFullGetBlocks\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e IO [[b]]",
        "fct-source": "src/System-IO-Binary.html#fullGetBlocks",
        "fct-type": "function",
        "title": "fullGetBlocks"
      },
      "index": {
        "description": "An alias for hFullGetBlocks stdin",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "fullGetBlocks",
        "normalized": "Int-\u003eIO[[a]]",
        "package": "MissingH",
        "partial": "Get Blocks",
        "signature": "Int-\u003eIO[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:fullGetBufStr",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehFullGetBufStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e IO [b]",
        "fct-source": "src/System-IO-Binary.html#fullGetBufStr",
        "fct-type": "function",
        "title": "fullGetBufStr"
      },
      "index": {
        "description": "An alias for hFullGetBufStr stdin",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "fullGetBufStr",
        "normalized": "Int-\u003eIO[a]",
        "package": "MissingH",
        "partial": "Get Buf Str",
        "signature": "Int-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:getBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehGetBlocks\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e IO [[b]]",
        "fct-source": "src/System-IO-Binary.html#getBlocks",
        "fct-type": "function",
        "title": "getBlocks"
      },
      "index": {
        "description": "An alias for hGetBlocks stdin",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "getBlocks",
        "normalized": "Int-\u003eIO[[a]]",
        "package": "MissingH",
        "partial": "Blocks",
        "signature": "Int-\u003eIO[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:getBufStr",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehGetBufStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e IO [b]",
        "fct-source": "src/System-IO-Binary.html#getBufStr",
        "fct-type": "function",
        "title": "getBufStr"
      },
      "index": {
        "description": "An alias for hGetBufStr stdin",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "getBufStr",
        "normalized": "Int-\u003eIO[a]",
        "package": "MissingH",
        "partial": "Buf Str",
        "signature": "Int-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hBlockCopy",
      "description": {
        "fct-descr": "\u003cp\u003eCopies everything from the input handle to the output handle using binary\nblocks of the given size.  This was once the following\nbeautiful implementation:\n\u003c/p\u003e\u003cpre\u003e hBlockCopy bs hin hout = hBlockInteract bs hin hout id\n\u003c/pre\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e is the built-in Haskell function that just returns whatever is given\nto it)\n\u003c/p\u003e\u003cp\u003eIn more recent versions of MissingH, it uses a more optimized routine that\navoids ever having to convert the binary buffer at all.\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e a -\u003e b -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#hBlockCopy",
        "fct-type": "function",
        "title": "hBlockCopy"
      },
      "index": {
        "description": "Copies everything from the input handle to the output handle using binary blocks of the given size This was once the following beautiful implementation hBlockCopy bs hin hout hBlockInteract bs hin hout id id is the built-in Haskell function that just returns whatever is given to it In more recent versions of MissingH it uses more optimized routine that avoids ever having to convert the binary buffer at all",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "hBlockCopy",
        "normalized": "Int-\u003ea-\u003eb-\u003eIO()",
        "package": "MissingH",
        "partial": "Block Copy",
        "signature": "Int-\u003ea-\u003eb-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hBlockInteract",
      "description": {
        "fct-descr": "\u003cp\u003eBinary block-based interaction.  This is useful for scenarios that\ntake binary blocks, manipulate them in some way, and then write them\nout.  Take a look at \u003ccode\u003e\u003ca\u003ehBlockCopy\u003c/a\u003e\u003c/code\u003e for an example.  The integer argument\nis the size of input binary blocks.  This function uses \u003ccode\u003e\u003ca\u003ehGetBlocks\u003c/a\u003e\u003c/code\u003e\ninternally.\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e a -\u003e d -\u003e ([[b]] -\u003e [[c]]) -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#hBlockInteract",
        "fct-type": "function",
        "title": "hBlockInteract"
      },
      "index": {
        "description": "Binary block-based interaction This is useful for scenarios that take binary blocks manipulate them in some way and then write them out Take look at hBlockCopy for an example The integer argument is the size of input binary blocks This function uses hGetBlocks internally",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "hBlockInteract",
        "normalized": "Int-\u003ea-\u003eb-\u003e([[c]]-\u003e[[d]])-\u003eIO()",
        "package": "MissingH",
        "partial": "Block Interact",
        "signature": "Int-\u003ea-\u003ed-\u003e([[b]]-\u003e[[c]])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hFullBlockInteract",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehBlockInteract\u003c/a\u003e\u003c/code\u003e, but uses \u003ccode\u003e\u003ca\u003ehFullGetBlocks\u003c/a\u003e\u003c/code\u003e instead of\n\u003ccode\u003e\u003ca\u003ehGetBlocks\u003c/a\u003e\u003c/code\u003e internally. \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "Int -\u003e a -\u003e d -\u003e ([[b]] -\u003e [[c]]) -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#hFullBlockInteract",
        "fct-type": "function",
        "title": "hFullBlockInteract"
      },
      "index": {
        "description": "Same as hBlockInteract but uses hFullGetBlocks instead of hGetBlocks internally",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "hFullBlockInteract",
        "normalized": "Int-\u003ea-\u003eb-\u003e([[c]]-\u003e[[d]])-\u003eIO()",
        "package": "MissingH",
        "partial": "Full Block Interact",
        "signature": "Int-\u003ea-\u003ed-\u003e([[b]]-\u003e[[c]])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hFullGetBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehGetBlocks\u003c/a\u003e\u003c/code\u003e, but using \u003ccode\u003e\u003ca\u003ehFullGetBufStr\u003c/a\u003e\u003c/code\u003e underneath. \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Int -\u003e IO [[b]]",
        "fct-source": "src/System-IO-Binary.html#hFullGetBlocks",
        "fct-type": "function",
        "title": "hFullGetBlocks"
      },
      "index": {
        "description": "Same as hGetBlocks but using hFullGetBufStr underneath",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "hFullGetBlocks",
        "normalized": "a-\u003eInt-\u003eIO[[b]]",
        "package": "MissingH",
        "partial": "Full Get Blocks",
        "signature": "a-\u003eInt-\u003eIO[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hFullGetBufStr",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehGetBufStr\u003c/a\u003e\u003c/code\u003e, but guarantees that it will only return fewer than\nthe requested number of bytes when EOF is encountered. \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Int -\u003e IO [b]",
        "fct-source": "src/System-IO-Binary.html#hFullGetBufStr",
        "fct-type": "function",
        "title": "hFullGetBufStr"
      },
      "index": {
        "description": "Like hGetBufStr but guarantees that it will only return fewer than the requested number of bytes when EOF is encountered",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "hFullGetBufStr",
        "normalized": "a-\u003eInt-\u003eIO[b]",
        "package": "MissingH",
        "partial": "Full Get Buf Str",
        "signature": "a-\u003eInt-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hGetBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003ehPutBlocks\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\nputBlocks :: (BinaryConvertible b) =\u003e [[b]] -\u003e IO ()\nputBlocks = hPutBlocks stdout \n\u003c/p\u003e\u003cp\u003eReturns a lazily-evaluated list of all blocks in the input file,\nas read by \u003ccode\u003e\u003ca\u003ehGetBufStr\u003c/a\u003e\u003c/code\u003e.  There will be no 0-length block in this list.\nThe list simply ends at EOF. \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Int -\u003e IO [[b]]",
        "fct-source": "src/System-IO-Binary.html#hGetBlocks",
        "fct-type": "function",
        "title": "hGetBlocks"
      },
      "index": {
        "description": "An alias for hPutBlocks stdout putBlocks BinaryConvertible IO putBlocks hPutBlocks stdout Returns lazily-evaluated list of all blocks in the input file as read by hGetBufStr There will be no length block in this list The list simply ends at EOF",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "hGetBlocks",
        "normalized": "a-\u003eInt-\u003eIO[[b]]",
        "package": "MissingH",
        "partial": "Get Blocks",
        "signature": "a-\u003eInt-\u003eIO[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hGetBufStr",
      "description": {
        "fct-descr": "\u003cp\u003eActs a wrapper around the standard function \u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e,\nthis function returns a standard Haskell String (or [Word8]) instead of\nmodifying\na 'Ptr a' buffer.  The length is the maximum length to read and the\nsemantice are the same as with \u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e; namely, the empty string\nis returned with EOF is reached, and any given read may read fewer\nbytes than the given length.\n\u003c/p\u003e\u003cp\u003e(Actually, it's a wrapper around \u003ccode\u003e\u003ca\u003evGetBuf\u003c/a\u003e\u003c/code\u003e) \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Int -\u003e IO [b]",
        "fct-source": "src/System-IO-Binary.html#hGetBufStr",
        "fct-type": "function",
        "title": "hGetBufStr"
      },
      "index": {
        "description": "Acts wrapper around the standard function hGetBuf this function returns standard Haskell String or Word8 instead of modifying Ptr buffer The length is the maximum length to read and the semantice are the same as with hGetBuf namely the empty string is returned with EOF is reached and any given read may read fewer bytes than the given length Actually it wrapper around vGetBuf",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "hGetBufStr",
        "normalized": "a-\u003eInt-\u003eIO[b]",
        "package": "MissingH",
        "partial": "Get Buf Str",
        "signature": "a-\u003eInt-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:hPutBufStr",
      "description": {
        "fct-descr": "\u003cp\u003eAs a wrapper around the standard function \u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e,\nthis function takes a standard Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e instead of the far less\nconvenient \u003ccode\u003ePtr a\u003c/code\u003e.  The entire contents of the string will be written\nas a binary buffer using \u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e.  The length of the output will be\nthe length of the passed String or list.\n\u003c/p\u003e\u003cp\u003eIf it helps, you can thing of this function as being of type\n\u003ccode\u003eHandle -\u003e String -\u003e IO ()\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [b] -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#hPutBufStr",
        "fct-type": "function",
        "title": "hPutBufStr"
      },
      "index": {
        "description": "As wrapper around the standard function hPutBuf this function takes standard Haskell String instead of the far less convenient Ptr The entire contents of the string will be written as binary buffer using hPutBuf The length of the output will be the length of the passed String or list If it helps you can thing of this function as being of type Handle String IO",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "hPutBufStr",
        "normalized": "a-\u003e[b]-\u003eIO()",
        "package": "MissingH",
        "partial": "Put Buf Str",
        "signature": "a-\u003e[b]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:putBufStr",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ehPutBufStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "[b] -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#putBufStr",
        "fct-type": "function",
        "title": "putBufStr"
      },
      "index": {
        "description": "An alias for hPutBufStr stdout",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "putBufStr",
        "normalized": "[a]-\u003eIO()",
        "package": "MissingH",
        "partial": "Buf Str",
        "signature": "[b]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:readBinaryFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike the built-in \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e, but opens the file in binary instead\nof text mode. \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/System-IO-Binary.html#readBinaryFile",
        "fct-type": "function",
        "title": "readBinaryFile"
      },
      "index": {
        "description": "Like the built-in readFile but opens the file in binary instead of text mode",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "readBinaryFile",
        "normalized": "FilePath-\u003eIO String",
        "package": "MissingH",
        "partial": "Binary File",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:toBuf",
      "description": {
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e (Ptr CChar -\u003e IO c) -\u003e IO c",
        "fct-source": "src/System-IO-Binary.html#toBuf",
        "fct-type": "method",
        "title": "toBuf"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "toBuf",
        "normalized": "[a]-\u003e(Ptr CChar-\u003eIO b)-\u003eIO b",
        "package": "MissingH",
        "partial": "Buf",
        "signature": "[a]-\u003e(Ptr CChar-\u003eIO c)-\u003eIO c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Binary.html#v:writeBinaryFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike the built-in \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e, but opens the file in binary instead\nof text mode. \n\u003c/p\u003e",
        "fct-module": "System.IO.Binary",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-Binary.html#writeBinaryFile",
        "fct-type": "function",
        "title": "writeBinaryFile"
      },
      "index": {
        "description": "Like the built-in writeFile but opens the file in binary instead of text mode",
        "hierarchy": "System IO Binary",
        "module": "System.IO.Binary",
        "name": "writeBinaryFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "MissingH",
        "partial": "Binary File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for combining different HVFS modules together\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004-2005 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.HVFS.Combinators",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-HVFS-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Support for combining different HVFS modules together Copyright John Goerzen jgoerzen@complete.org",
        "hierarchy": "System IO HVFS Combinators",
        "module": "System.IO.HVFS.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "MissingH",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#t:HVFSChroot",
      "description": {
        "fct-descr": "\u003cp\u003eAccess a subdirectory of a real filesystem as if it was the root\nof that filesystem. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.Combinators",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVFS-Combinators.html#HVFSChroot",
        "fct-type": "data",
        "title": "HVFSChroot"
      },
      "index": {
        "description": "Access subdirectory of real filesystem as if it was the root of that filesystem",
        "hierarchy": "System IO HVFS Combinators",
        "module": "System.IO.HVFS.Combinators",
        "name": "HVFSChroot",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFSChroot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#t:HVFSReadOnly",
      "description": {
        "fct-descr": "\u003cp\u003eRestrict access to the underlying filesystem to be strictly\nread-only.  Any write-type operations will cause an error.\n\u003c/p\u003e\u003cp\u003eNo constructor is required; just say \u003ccode\u003eHVFSReadOnly fs\u003c/code\u003e to make a\nnew read-only wrapper around the \u003ccode\u003e\u003ca\u003eHVFS\u003c/a\u003e\u003c/code\u003e instance \u003ccode\u003efs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.Combinators",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVFS-Combinators.html#HVFSReadOnly",
        "fct-type": "data",
        "title": "HVFSReadOnly"
      },
      "index": {
        "description": "Restrict access to the underlying filesystem to be strictly read-only Any write-type operations will cause an error No constructor is required just say HVFSReadOnly fs to make new read-only wrapper around the HVFS instance fs",
        "hierarchy": "System IO HVFS Combinators",
        "module": "System.IO.HVFS.Combinators",
        "name": "HVFSReadOnly",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFSRead Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#v:HVFSReadOnly",
      "description": {
        "fct-module": "System.IO.HVFS.Combinators",
        "fct-package": "MissingH",
        "fct-signature": "HVFSReadOnly a",
        "fct-source": "src/System-IO-HVFS-Combinators.html#HVFSReadOnly",
        "fct-type": "function",
        "title": "HVFSReadOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS Combinators",
        "module": "System.IO.HVFS.Combinators",
        "name": "HVFSReadOnly",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFSRead Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Combinators.html#v:newHVFSChroot",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eHVFSChroot\u003c/a\u003e\u003c/code\u003e object. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.Combinators",
        "fct-package": "MissingH",
        "fct-signature": "a-\u003e FilePath-\u003e IO (HVFSChroot a)",
        "fct-type": "function",
        "title": "newHVFSChroot"
      },
      "index": {
        "description": "Create new HVFSChroot object",
        "hierarchy": "System IO HVFS Combinators",
        "module": "System.IO.HVFS.Combinators",
        "name": "newHVFSChroot",
        "normalized": "a-\u003eFilePath-\u003eIO(HVFSChroot a)",
        "package": "MissingH",
        "partial": "HVFSChroot",
        "signature": "a-\u003eFilePath-\u003eIO(HVFSChroot a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for creating instances of the items defined in\n\u003ca\u003eSystem.IO.HVFS\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html",
        "fct-type": "module",
        "title": "InstanceHelpers"
      },
      "index": {
        "description": "Utilities for creating instances of the items defined in System.IO.HVFS",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "InstanceHelpers",
        "normalized": "",
        "package": "MissingH",
        "partial": "Instance Helpers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#t:MemoryEntry",
      "description": {
        "fct-descr": "\u003cp\u003eThe content of a file or directory in a \u003ccode\u003e\u003ca\u003eMemoryVFS\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryEntry",
        "fct-type": "data",
        "title": "MemoryEntry"
      },
      "index": {
        "description": "The content of file or directory in MemoryVFS",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "MemoryEntry",
        "normalized": "",
        "package": "MissingH",
        "partial": "Memory Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#t:MemoryNode",
      "description": {
        "fct-descr": "\u003cp\u003eThe basic node of a \u003ccode\u003e\u003ca\u003eMemoryVFS\u003c/a\u003e\u003c/code\u003e.  The String corresponds to the filename,\nand the entry to the contents. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryNode",
        "fct-type": "type",
        "title": "MemoryNode"
      },
      "index": {
        "description": "The basic node of MemoryVFS The String corresponds to the filename and the entry to the contents",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "MemoryNode",
        "normalized": "",
        "package": "MissingH",
        "partial": "Memory Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#t:MemoryVFS",
      "description": {
        "fct-descr": "\u003cp\u003eAn in-memory read/write filesystem.  Think of it as a dynamically\nresizable ramdisk written in Haskell. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryVFS",
        "fct-type": "data",
        "title": "MemoryVFS"
      },
      "index": {
        "description": "An in-memory read write filesystem Think of it as dynamically resizable ramdisk written in Haskell",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "MemoryVFS",
        "normalized": "",
        "package": "MissingH",
        "partial": "Memory VFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#t:SimpleStat",
      "description": {
        "fct-descr": "\u003cp\u003eA simple \u003ca\u003eSystem.IO.HVFS.HVFSStat\u003c/a\u003e\nclass that assumes that everything is either a file\nor a directory. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#SimpleStat",
        "fct-type": "data",
        "title": "SimpleStat"
      },
      "index": {
        "description": "simple System.IO.HVFS.HVFSStat class that assumes that everything is either file or directory",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "SimpleStat",
        "normalized": "",
        "package": "MissingH",
        "partial": "Simple Stat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:MemoryDirectory",
      "description": {
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "MemoryDirectory [MemoryNode]",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryEntry",
        "fct-type": "function",
        "title": "MemoryDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "MemoryDirectory",
        "normalized": "MemoryDirectory[MemoryNode]",
        "package": "MissingH",
        "partial": "Memory Directory",
        "signature": "MemoryDirectory[MemoryNode]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:MemoryFile",
      "description": {
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "MemoryFile String",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#MemoryEntry",
        "fct-type": "function",
        "title": "MemoryFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "MemoryFile",
        "normalized": "",
        "package": "MissingH",
        "partial": "Memory File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:SimpleStat",
      "description": {
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "SimpleStat",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#SimpleStat",
        "fct-type": "function",
        "title": "SimpleStat"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "SimpleStat",
        "normalized": "",
        "package": "MissingH",
        "partial": "Simple Stat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:fileSize",
      "description": {
        "fct-descr": "\u003cp\u003eSet to 0 if unknown or a directory\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "FileOffset",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#SimpleStat",
        "fct-type": "function",
        "title": "fileSize"
      },
      "index": {
        "description": "Set to if unknown or directory",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "fileSize",
        "normalized": "",
        "package": "MissingH",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:getFullPath",
      "description": {
        "fct-descr": "\u003cp\u003eGets a full path, after investigating the cwd.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e String -\u003e IO String",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#getFullPath",
        "fct-type": "function",
        "title": "getFullPath"
      },
      "index": {
        "description": "Gets full path after investigating the cwd",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "getFullPath",
        "normalized": "a-\u003eString-\u003eIO String",
        "package": "MissingH",
        "partial": "Full Path",
        "signature": "a-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:getFullSlice",
      "description": {
        "fct-descr": "\u003cp\u003eGets the full path via \u003ccode\u003e\u003ca\u003egetFullPath\u003c/a\u003e\u003c/code\u003e, then splits it via \u003ccode\u003e\u003ca\u003enice_slice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e String -\u003e IO [String]",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#getFullSlice",
        "fct-type": "function",
        "title": "getFullSlice"
      },
      "index": {
        "description": "Gets the full path via getFullPath then splits it via nice slice",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "getFullSlice",
        "normalized": "a-\u003eString-\u003eIO[String]",
        "package": "MissingH",
        "partial": "Full Slice",
        "signature": "a-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:isFile",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if file, False if directory\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "Bool",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#SimpleStat",
        "fct-type": "function",
        "title": "isFile"
      },
      "index": {
        "description": "True if file False if directory",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "isFile",
        "normalized": "",
        "package": "MissingH",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:newMemoryVFS",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eMemoryVFS\u003c/a\u003e\u003c/code\u003e object from an existing tree.\n An empty filesystem may be created by using \u003ccode\u003e[]\u003c/code\u003e for the parameter.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "[MemoryNode] -\u003e IO MemoryVFS",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#newMemoryVFS",
        "fct-type": "function",
        "title": "newMemoryVFS"
      },
      "index": {
        "description": "Create new MemoryVFS object from an existing tree An empty filesystem may be created by using for the parameter",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "newMemoryVFS",
        "normalized": "[MemoryNode]-\u003eIO MemoryVFS",
        "package": "MissingH",
        "partial": "Memory VFS",
        "signature": "[MemoryNode]-\u003eIO MemoryVFS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:newMemoryVFSRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eMemoryVFS\u003c/a\u003e\u003c/code\u003e object using an IORef to an\n existing tree.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "IORef [MemoryNode] -\u003e IO MemoryVFS",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#newMemoryVFSRef",
        "fct-type": "function",
        "title": "newMemoryVFSRef"
      },
      "index": {
        "description": "Create new MemoryVFS object using an IORef to an existing tree",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "newMemoryVFSRef",
        "normalized": "IORef[MemoryNode]-\u003eIO MemoryVFS",
        "package": "MissingH",
        "partial": "Memory VFSRef",
        "signature": "IORef[MemoryNode]-\u003eIO MemoryVFS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-InstanceHelpers.html#v:nice_slice",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eNameManip\u003c/a\u003e\u003c/code\u003e but the first element\nwon't be \u003ccode\u003e/\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003enice_slice \"/\" -\u003e []\nnice_slice \"/foo/bar\" -\u003e [\"foo\", \"bar\"]\n\u003c/pre\u003e",
        "fct-module": "System.IO.HVFS.InstanceHelpers",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/System-IO-HVFS-InstanceHelpers.html#nice_slice",
        "fct-type": "function",
        "title": "nice_slice"
      },
      "index": {
        "description": "Similar to NameManip but the first element won be nice slice nice slice foo bar foo bar",
        "hierarchy": "System IO HVFS InstanceHelpers",
        "module": "System.IO.HVFS.InstanceHelpers",
        "name": "nice_slice",
        "normalized": "String-\u003e[String]",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing \nfilesystems.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eTo operate on your system's main filesystem, just pass SystemFS as the\nfirst parameter to these functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.HVFS.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-HVFS-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing filesystems Written by John Goerzen jgoerzen@complete.org To operate on your system main filesystem just pass SystemFS as the first parameter to these functions",
        "hierarchy": "System IO HVFS Utils",
        "module": "System.IO.HVFS.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#t:SystemFS",
      "description": {
        "fct-module": "System.IO.HVFS.Utils",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVFS.html#SystemFS",
        "fct-type": "data",
        "title": "SystemFS"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS Utils",
        "module": "System.IO.HVFS.Utils",
        "name": "SystemFS",
        "normalized": "",
        "package": "MissingH",
        "partial": "System FS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:SystemFS",
      "description": {
        "fct-module": "System.IO.HVFS.Utils",
        "fct-package": "MissingH",
        "fct-signature": "SystemFS",
        "fct-source": "src/System-IO-HVFS.html#SystemFS",
        "fct-type": "function",
        "title": "SystemFS"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS Utils",
        "module": "System.IO.HVFS.Utils",
        "name": "SystemFS",
        "normalized": "",
        "package": "MissingH",
        "partial": "System FS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:lsl",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a result similar to the command ls -l over a directory.\n\u003c/p\u003e\u003cp\u003eKnown bug: setuid bit semantics are inexact compared with standard ls.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO String",
        "fct-source": "src/System-IO-HVFS-Utils.html#lsl",
        "fct-type": "function",
        "title": "lsl"
      },
      "index": {
        "description": "Provide result similar to the command ls over directory Known bug setuid bit semantics are inexact compared with standard ls",
        "hierarchy": "System IO HVFS Utils",
        "module": "System.IO.HVFS.Utils",
        "name": "lsl",
        "normalized": "a-\u003eFilePath-\u003eIO String",
        "package": "MissingH",
        "partial": "",
        "signature": "a-\u003eFilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:recurseDir",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a recursive listing of all files/directories beneath \nthe specified directory.  The traversal is depth-first\nand the original\nitem is always present in the returned list.\n\u003c/p\u003e\u003cp\u003eIf the passed value is not a directory, the return value\nbe only that value.\n\u003c/p\u003e\u003cp\u003eThe \".\" and \"..\" entries are removed from the data returned.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO [FilePath]",
        "fct-source": "src/System-IO-HVFS-Utils.html#recurseDir",
        "fct-type": "function",
        "title": "recurseDir"
      },
      "index": {
        "description": "Obtain recursive listing of all files directories beneath the specified directory The traversal is depth-first and the original item is always present in the returned list If the passed value is not directory the return value be only that value The and entries are removed from the data returned",
        "hierarchy": "System IO HVFS Utils",
        "module": "System.IO.HVFS.Utils",
        "name": "recurseDir",
        "normalized": "a-\u003eFilePath-\u003eIO[FilePath]",
        "package": "MissingH",
        "partial": "Dir",
        "signature": "a-\u003eFilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:recurseDirStat",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erecurseDir\u003c/a\u003e\u003c/code\u003e, but return the stat() (System.Posix.Files.FileStatus)\ninformation with them.  This is an optimization if you will be statting files\nyourself later.\n\u003c/p\u003e\u003cp\u003eThe items are returned lazily.\n\u003c/p\u003e\u003cp\u003eWARNING: do not change your current working directory until you have consumed\nall the items.  Doing so could cause strange effects.\n\u003c/p\u003e\u003cp\u003eAlternatively, you may wish to pass an absolute path to this function.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO [(FilePath, HVFSStatEncap)]",
        "fct-source": "src/System-IO-HVFS-Utils.html#recurseDirStat",
        "fct-type": "function",
        "title": "recurseDirStat"
      },
      "index": {
        "description": "Like recurseDir but return the stat System.Posix.Files.FileStatus information with them This is an optimization if you will be statting files yourself later The items are returned lazily WARNING do not change your current working directory until you have consumed all the items Doing so could cause strange effects Alternatively you may wish to pass an absolute path to this function",
        "hierarchy": "System IO HVFS Utils",
        "module": "System.IO.HVFS.Utils",
        "name": "recurseDirStat",
        "normalized": "a-\u003eFilePath-\u003eIO[(FilePath,HVFSStatEncap)]",
        "package": "MissingH",
        "partial": "Dir Stat",
        "signature": "a-\u003eFilePath-\u003eIO[(FilePath,HVFSStatEncap)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS-Utils.html#v:recursiveRemove",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves a file or a directory.  If a directory, also removes all its\nchild files/directories.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS-Utils.html#recursiveRemove",
        "fct-type": "function",
        "title": "recursiveRemove"
      },
      "index": {
        "description": "Removes file or directory If directory also removes all its child files directories",
        "hierarchy": "System IO HVFS Utils",
        "module": "System.IO.HVFS.Utils",
        "name": "recursiveRemove",
        "normalized": "a-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Remove",
        "signature": "a-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell Virtual FS -- generic support for real or virtual filesystem in Haskell\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004-2005 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThe idea of this module is to provide virtualization of filesystem calls.\nIn addition to the \"real\" system filesystem, you can also provide access\nto other, virtual, filesystems using the same set of calls.  Examples of\nsuch virtual filesystems might include a remote FTP server, WebDAV server,\na local Hashtable, a ConfigParser object, or any other data structure\nyou can represent as a tree of named nodes containing strings.\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eHVFS\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eHVFS\u003c/a\u003e\u003c/code\u003e \"handle\" (\u003ccode\u003e\u003ca\u003eHVFS\u003c/a\u003e\u003c/code\u003e instance) as its\nfirst parameter.  If you wish to operate on the standard system filesystem,\nyou can just use \u003ccode\u003e\u003ca\u003eSystemFS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003eMissingH.HVFS.IO.InstanceHelpers\u003c/a\u003e module contains some code to help\nyou make your own HVFS instances.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHVFSOpenable\u003c/a\u003e\u003c/code\u003e class works together with the \u003ca\u003eSystem.IO.HVIO\u003c/a\u003e module\nto provide a complete virtual filesystem and I/O model that allows you\nto open up virtual filesystem files and act upon them in a manner similar\nto standard Handles.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-HVFS.html",
        "fct-type": "module",
        "title": "HVFS"
      },
      "index": {
        "description": "Haskell Virtual FS generic support for real or virtual filesystem in Haskell Copyright John Goerzen jgoerzen@complete.org The idea of this module is to provide virtualization of filesystem calls In addition to the real system filesystem you can also provide access to other virtual filesystems using the same set of calls Examples of such virtual filesystems might include remote FTP server WebDAV server local Hashtable ConfigParser object or any other data structure you can represent as tree of named nodes containing strings Each HVFS function takes HVFS handle HVFS instance as its first parameter If you wish to operate on the standard system filesystem you can just use SystemFS The MissingH.HVFS.IO.InstanceHelpers module contains some code to help you make your own HVFS instances The HVFSOpenable class works together with the System.IO.HVIO module to provide complete virtual filesystem and model that allows you to open up virtual filesystem files and act upon them in manner similar to standard Handles",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "HVFS",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:DeviceID",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "DeviceID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "DeviceID",
        "normalized": "",
        "package": "MissingH",
        "partial": "Device ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:EpochTime",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "EpochTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "EpochTime",
        "normalized": "",
        "package": "MissingH",
        "partial": "Epoch Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:FileID",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "FileID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "FileID",
        "normalized": "",
        "package": "MissingH",
        "partial": "File ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:FileMode",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "FileMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "FileMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "File Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:FileOffset",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "FileOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "FileOffset",
        "normalized": "",
        "package": "MissingH",
        "partial": "File Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:FilePath",
      "description": {
        "fct-descr": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "FilePath"
      },
      "index": {
        "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "FilePath",
        "normalized": "",
        "package": "MissingH",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:GroupID",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "GroupID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "GroupID",
        "normalized": "",
        "package": "MissingH",
        "partial": "Group ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFS",
      "description": {
        "fct-descr": "\u003cp\u003eThe main HVFS class.\n\u003c/p\u003e\u003cp\u003eDefault implementations of these functions are provided:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evGetModificationTime\u003c/a\u003e\u003c/code\u003e -- implemented in terms of \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evRaiseError\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evDoesFileExist\u003c/a\u003e\u003c/code\u003e -- implemented in terms of \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evDoesDirectoryExist\u003c/a\u003e\u003c/code\u003e -- implemented in terms of \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evDoesExist\u003c/a\u003e\u003c/code\u003e -- implemented in terms of \u003ccode\u003e\u003ca\u003evGetSymbolicLinkStatus\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003evGetSymbolicLinkStatus\u003c/a\u003e\u003c/code\u003e -- set to call \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDefault implementations of all other functions\nwill generate an isIllegalOperation error, since they are assumed to be\nun-implemented.\n\u003c/p\u003e\u003cp\u003eYou should always provide at least a \u003ccode\u003e\u003ca\u003evGetFileStatus\u003c/a\u003e\u003c/code\u003e call, and almost\ncertainly several of the others.\n\u003c/p\u003e\u003cp\u003eMost of these functions correspond to functions in System.Directory or\nSystem.Posix.Files.  Please see detailed documentation on them there.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "class",
        "fct-source": "src/System-IO-HVFS.html#HVFS",
        "fct-type": "class",
        "title": "HVFS"
      },
      "index": {
        "description": "The main HVFS class Default implementations of these functions are provided vGetModificationTime implemented in terms of vGetFileStatus vRaiseError vDoesFileExist implemented in terms of vGetFileStatus vDoesDirectoryExist implemented in terms of vGetFileStatus vDoesExist implemented in terms of vGetSymbolicLinkStatus vGetSymbolicLinkStatus set to call vGetFileStatus Default implementations of all other functions will generate an isIllegalOperation error since they are assumed to be un-implemented You should always provide at least vGetFileStatus call and almost certainly several of the others Most of these functions correspond to functions in System.Directory or System.Posix.Files Please see detailed documentation on them there",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "HVFS",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFSOpenEncap",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eHVFSStatEncap\u003c/a\u003e\u003c/code\u003e, but for \u003ccode\u003e\u003ca\u003evOpen\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVFS.html#HVFSOpenEncap",
        "fct-type": "data",
        "title": "HVFSOpenEncap"
      },
      "index": {
        "description": "Similar to HVFSStatEncap but for vOpen result",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "HVFSOpenEncap",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFSOpen Encap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFSOpenable",
      "description": {
        "fct-descr": "\u003cp\u003eTypes that can open a HVIO object should be instances of this class.\nYou need only implement \u003ccode\u003e\u003ca\u003evOpen\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "class",
        "fct-source": "src/System-IO-HVFS.html#HVFSOpenable",
        "fct-type": "class",
        "title": "HVFSOpenable"
      },
      "index": {
        "description": "Types that can open HVIO object should be instances of this class You need only implement vOpen",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "HVFSOpenable",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFSOpenable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFSStat",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluating types of files and information about them.\n\u003c/p\u003e\u003cp\u003eThis corresponds to the System.Posix.Types.FileStatus type, and indeed,\nthat is one instance of this class.\n\u003c/p\u003e\u003cp\u003eInplementators must, at minimum, implement \u003ccode\u003e\u003ca\u003evIsDirectory\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003evIsRegularFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefault implementations of everything else are provided, returning\nreasonable values.\n\u003c/p\u003e\u003cp\u003eA default implementation of this is not currently present on Windows.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "class",
        "fct-source": "src/System-IO-HVFS.html#HVFSStat",
        "fct-type": "class",
        "title": "HVFSStat"
      },
      "index": {
        "description": "Evaluating types of files and information about them This corresponds to the System.Posix.Types.FileStatus type and indeed that is one instance of this class Inplementators must at minimum implement vIsDirectory and vIsRegularFile Default implementations of everything else are provided returning reasonable values default implementation of this is not currently present on Windows",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "HVFSStat",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFSStat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:HVFSStatEncap",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulate a \u003ccode\u003e\u003ca\u003eHVFSStat\u003c/a\u003e\u003c/code\u003e result.  This is required due to Haskell\ntyping restrictions.  You can get at it with:\n\u003c/p\u003e\u003cpre\u003e case encap of\n    HVFSStatEncap x -\u003e -- now use x\n\u003c/pre\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVFS.html#HVFSStatEncap",
        "fct-type": "data",
        "title": "HVFSStatEncap"
      },
      "index": {
        "description": "Encapsulate HVFSStat result This is required due to Haskell typing restrictions You can get at it with case encap of HVFSStatEncap now use",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "HVFSStatEncap",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFSStat Encap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:IOMode",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IOMode"
      },
      "index": {
        "description": "See openFile",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "IOMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:LinkCount",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LinkCount"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "LinkCount",
        "normalized": "",
        "package": "MissingH",
        "partial": "Link Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:SystemFS",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVFS.html#SystemFS",
        "fct-type": "data",
        "title": "SystemFS"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "SystemFS",
        "normalized": "",
        "package": "MissingH",
        "partial": "System FS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#t:UserID",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "UserID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "UserID",
        "normalized": "",
        "package": "MissingH",
        "partial": "User ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:HVFSOpenEncap",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "HVFSOpenEncap a",
        "fct-source": "src/System-IO-HVFS.html#HVFSOpenEncap",
        "fct-type": "function",
        "title": "HVFSOpenEncap"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "HVFSOpenEncap",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFSOpen Encap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:HVFSStatEncap",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "HVFSStatEncap a",
        "fct-source": "src/System-IO-HVFS.html#HVFSStatEncap",
        "fct-type": "function",
        "title": "HVFSStatEncap"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "HVFSStatEncap",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVFSStat Encap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:SystemFS",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "SystemFS",
        "fct-source": "src/System-IO-HVFS.html#SystemFS",
        "fct-type": "function",
        "title": "SystemFS"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "SystemFS",
        "normalized": "",
        "package": "MissingH",
        "partial": "System FS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vAccessTime",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e EpochTime",
        "fct-source": "src/System-IO-HVFS.html#vAccessTime",
        "fct-type": "method",
        "title": "vAccessTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vAccessTime",
        "normalized": "a-\u003eEpochTime",
        "package": "MissingH",
        "partial": "Access Time",
        "signature": "a-\u003eEpochTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vCreateDirectory",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS.html#vCreateDirectory",
        "fct-type": "method",
        "title": "vCreateDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vCreateDirectory",
        "normalized": "a-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Create Directory",
        "signature": "a-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vCreateLink",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS.html#vCreateLink",
        "fct-type": "method",
        "title": "vCreateLink"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vCreateLink",
        "normalized": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Create Link",
        "signature": "a-\u003eFilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vCreateSymbolicLink",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS.html#vCreateSymbolicLink",
        "fct-type": "method",
        "title": "vCreateSymbolicLink"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vCreateSymbolicLink",
        "normalized": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Create Symbolic Link",
        "signature": "a-\u003eFilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vDeviceID",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e DeviceID",
        "fct-source": "src/System-IO-HVFS.html#vDeviceID",
        "fct-type": "method",
        "title": "vDeviceID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vDeviceID",
        "normalized": "a-\u003eDeviceID",
        "package": "MissingH",
        "partial": "Device ID",
        "signature": "a-\u003eDeviceID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vDoesDirectoryExist",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO Bool",
        "fct-source": "src/System-IO-HVFS.html#vDoesDirectoryExist",
        "fct-type": "method",
        "title": "vDoesDirectoryExist"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vDoesDirectoryExist",
        "normalized": "a-\u003eFilePath-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Does Directory Exist",
        "signature": "a-\u003eFilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vDoesExist",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the file exists, regardless of what type it is.\n       This is even True if the given path is a broken symlink. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO Bool",
        "fct-source": "src/System-IO-HVFS.html#vDoesExist",
        "fct-type": "method",
        "title": "vDoesExist"
      },
      "index": {
        "description": "True if the file exists regardless of what type it is This is even True if the given path is broken symlink",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vDoesExist",
        "normalized": "a-\u003eFilePath-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Does Exist",
        "signature": "a-\u003eFilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vDoesFileExist",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO Bool",
        "fct-source": "src/System-IO-HVFS.html#vDoesFileExist",
        "fct-type": "method",
        "title": "vDoesFileExist"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vDoesFileExist",
        "normalized": "a-\u003eFilePath-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Does File Exist",
        "signature": "a-\u003eFilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileGroup",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e GroupID",
        "fct-source": "src/System-IO-HVFS.html#vFileGroup",
        "fct-type": "method",
        "title": "vFileGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vFileGroup",
        "normalized": "a-\u003eGroupID",
        "package": "MissingH",
        "partial": "File Group",
        "signature": "a-\u003eGroupID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileID",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FileID",
        "fct-source": "src/System-IO-HVFS.html#vFileID",
        "fct-type": "method",
        "title": "vFileID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vFileID",
        "normalized": "a-\u003eFileID",
        "package": "MissingH",
        "partial": "File ID",
        "signature": "a-\u003eFileID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileMode",
      "description": {
        "fct-descr": "\u003cp\u003eRefers to file permissions, NOT the st_mode field from stat(2) \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FileMode",
        "fct-source": "src/System-IO-HVFS.html#vFileMode",
        "fct-type": "method",
        "title": "vFileMode"
      },
      "index": {
        "description": "Refers to file permissions NOT the st mode field from stat",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vFileMode",
        "normalized": "a-\u003eFileMode",
        "package": "MissingH",
        "partial": "File Mode",
        "signature": "a-\u003eFileMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileOwner",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e UserID",
        "fct-source": "src/System-IO-HVFS.html#vFileOwner",
        "fct-type": "method",
        "title": "vFileOwner"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vFileOwner",
        "normalized": "a-\u003eUserID",
        "package": "MissingH",
        "partial": "File Owner",
        "signature": "a-\u003eUserID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vFileSize",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FileOffset",
        "fct-source": "src/System-IO-HVFS.html#vFileSize",
        "fct-type": "method",
        "title": "vFileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vFileSize",
        "normalized": "a-\u003eFileOffset",
        "package": "MissingH",
        "partial": "File Size",
        "signature": "a-\u003eFileOffset"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetCurrentDirectory",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO FilePath",
        "fct-source": "src/System-IO-HVFS.html#vGetCurrentDirectory",
        "fct-type": "method",
        "title": "vGetCurrentDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vGetCurrentDirectory",
        "normalized": "a-\u003eIO FilePath",
        "package": "MissingH",
        "partial": "Get Current Directory",
        "signature": "a-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetDirectoryContents",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO [FilePath]",
        "fct-source": "src/System-IO-HVFS.html#vGetDirectoryContents",
        "fct-type": "method",
        "title": "vGetDirectoryContents"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vGetDirectoryContents",
        "normalized": "a-\u003eFilePath-\u003eIO[FilePath]",
        "package": "MissingH",
        "partial": "Get Directory Contents",
        "signature": "a-\u003eFilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetFileStatus",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO HVFSStatEncap",
        "fct-source": "src/System-IO-HVFS.html#vGetFileStatus",
        "fct-type": "method",
        "title": "vGetFileStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vGetFileStatus",
        "normalized": "a-\u003eFilePath-\u003eIO HVFSStatEncap",
        "package": "MissingH",
        "partial": "Get File Status",
        "signature": "a-\u003eFilePath-\u003eIO HVFSStatEncap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetModificationTime",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO ClockTime",
        "fct-source": "src/System-IO-HVFS.html#vGetModificationTime",
        "fct-type": "method",
        "title": "vGetModificationTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vGetModificationTime",
        "normalized": "a-\u003eFilePath-\u003eIO ClockTime",
        "package": "MissingH",
        "partial": "Get Modification Time",
        "signature": "a-\u003eFilePath-\u003eIO ClockTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vGetSymbolicLinkStatus",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO HVFSStatEncap",
        "fct-source": "src/System-IO-HVFS.html#vGetSymbolicLinkStatus",
        "fct-type": "method",
        "title": "vGetSymbolicLinkStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vGetSymbolicLinkStatus",
        "normalized": "a-\u003eFilePath-\u003eIO HVFSStatEncap",
        "package": "MissingH",
        "partial": "Get Symbolic Link Status",
        "signature": "a-\u003eFilePath-\u003eIO HVFSStatEncap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsBlockDevice",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/System-IO-HVFS.html#vIsBlockDevice",
        "fct-type": "method",
        "title": "vIsBlockDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vIsBlockDevice",
        "normalized": "a-\u003eBool",
        "package": "MissingH",
        "partial": "Is Block Device",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsCharacterDevice",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/System-IO-HVFS.html#vIsCharacterDevice",
        "fct-type": "method",
        "title": "vIsCharacterDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vIsCharacterDevice",
        "normalized": "a-\u003eBool",
        "package": "MissingH",
        "partial": "Is Character Device",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsDirectory",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/System-IO-HVFS.html#vIsDirectory",
        "fct-type": "method",
        "title": "vIsDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vIsDirectory",
        "normalized": "a-\u003eBool",
        "package": "MissingH",
        "partial": "Is Directory",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsNamedPipe",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/System-IO-HVFS.html#vIsNamedPipe",
        "fct-type": "method",
        "title": "vIsNamedPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vIsNamedPipe",
        "normalized": "a-\u003eBool",
        "package": "MissingH",
        "partial": "Is Named Pipe",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsRegularFile",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/System-IO-HVFS.html#vIsRegularFile",
        "fct-type": "method",
        "title": "vIsRegularFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vIsRegularFile",
        "normalized": "a-\u003eBool",
        "package": "MissingH",
        "partial": "Is Regular File",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsSocket",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/System-IO-HVFS.html#vIsSocket",
        "fct-type": "method",
        "title": "vIsSocket"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vIsSocket",
        "normalized": "a-\u003eBool",
        "package": "MissingH",
        "partial": "Is Socket",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vIsSymbolicLink",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/System-IO-HVFS.html#vIsSymbolicLink",
        "fct-type": "method",
        "title": "vIsSymbolicLink"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vIsSymbolicLink",
        "normalized": "a-\u003eBool",
        "package": "MissingH",
        "partial": "Is Symbolic Link",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vLinkCount",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e LinkCount",
        "fct-source": "src/System-IO-HVFS.html#vLinkCount",
        "fct-type": "method",
        "title": "vLinkCount"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vLinkCount",
        "normalized": "a-\u003eLinkCount",
        "package": "MissingH",
        "partial": "Link Count",
        "signature": "a-\u003eLinkCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vModificationTime",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e EpochTime",
        "fct-source": "src/System-IO-HVFS.html#vModificationTime",
        "fct-type": "method",
        "title": "vModificationTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vModificationTime",
        "normalized": "a-\u003eEpochTime",
        "package": "MissingH",
        "partial": "Modification Time",
        "signature": "a-\u003eEpochTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vOpen",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IOMode -\u003e IO HVFSOpenEncap",
        "fct-source": "src/System-IO-HVFS.html#vOpen",
        "fct-type": "method",
        "title": "vOpen"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vOpen",
        "normalized": "a-\u003eFilePath-\u003eIOMode-\u003eIO HVFSOpenEncap",
        "package": "MissingH",
        "partial": "Open",
        "signature": "a-\u003eFilePath-\u003eIOMode-\u003eIO HVFSOpenEncap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vOpenBinaryFile",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IOMode -\u003e IO HVFSOpenEncap",
        "fct-source": "src/System-IO-HVFS.html#vOpenBinaryFile",
        "fct-type": "method",
        "title": "vOpenBinaryFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vOpenBinaryFile",
        "normalized": "a-\u003eFilePath-\u003eIOMode-\u003eIO HVFSOpenEncap",
        "package": "MissingH",
        "partial": "Open Binary File",
        "signature": "a-\u003eFilePath-\u003eIOMode-\u003eIO HVFSOpenEncap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRaiseError",
      "description": {
        "fct-descr": "\u003cp\u003eRaise an error relating to actions on this class. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IOErrorType -\u003e String -\u003e Maybe FilePath -\u003e IO c",
        "fct-source": "src/System-IO-HVFS.html#vRaiseError",
        "fct-type": "method",
        "title": "vRaiseError"
      },
      "index": {
        "description": "Raise an error relating to actions on this class",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vRaiseError",
        "normalized": "a-\u003eIOErrorType-\u003eString-\u003eMaybe FilePath-\u003eIO b",
        "package": "MissingH",
        "partial": "Raise Error",
        "signature": "a-\u003eIOErrorType-\u003eString-\u003eMaybe FilePath-\u003eIO c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vReadFile",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO String",
        "fct-source": "src/System-IO-HVFS.html#vReadFile",
        "fct-type": "method",
        "title": "vReadFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vReadFile",
        "normalized": "a-\u003eFilePath-\u003eIO String",
        "package": "MissingH",
        "partial": "Read File",
        "signature": "a-\u003eFilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vReadSymbolicLink",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO FilePath",
        "fct-source": "src/System-IO-HVFS.html#vReadSymbolicLink",
        "fct-type": "method",
        "title": "vReadSymbolicLink"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vReadSymbolicLink",
        "normalized": "a-\u003eFilePath-\u003eIO FilePath",
        "package": "MissingH",
        "partial": "Read Symbolic Link",
        "signature": "a-\u003eFilePath-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRemoveDirectory",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS.html#vRemoveDirectory",
        "fct-type": "method",
        "title": "vRemoveDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vRemoveDirectory",
        "normalized": "a-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Remove Directory",
        "signature": "a-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRemoveFile",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS.html#vRemoveFile",
        "fct-type": "method",
        "title": "vRemoveFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vRemoveFile",
        "normalized": "a-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Remove File",
        "signature": "a-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRenameDirectory",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS.html#vRenameDirectory",
        "fct-type": "method",
        "title": "vRenameDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vRenameDirectory",
        "normalized": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Rename Directory",
        "signature": "a-\u003eFilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vRenameFile",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS.html#vRenameFile",
        "fct-type": "method",
        "title": "vRenameFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vRenameFile",
        "normalized": "a-\u003eFilePath-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Rename File",
        "signature": "a-\u003eFilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vSetCurrentDirectory",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS.html#vSetCurrentDirectory",
        "fct-type": "method",
        "title": "vSetCurrentDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vSetCurrentDirectory",
        "normalized": "a-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Set Current Directory",
        "signature": "a-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vSpecialDeviceID",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e DeviceID",
        "fct-source": "src/System-IO-HVFS.html#vSpecialDeviceID",
        "fct-type": "method",
        "title": "vSpecialDeviceID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vSpecialDeviceID",
        "normalized": "a-\u003eDeviceID",
        "package": "MissingH",
        "partial": "Special Device ID",
        "signature": "a-\u003eDeviceID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vStatusChangeTime",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e EpochTime",
        "fct-source": "src/System-IO-HVFS.html#vStatusChangeTime",
        "fct-type": "method",
        "title": "vStatusChangeTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vStatusChangeTime",
        "normalized": "a-\u003eEpochTime",
        "package": "MissingH",
        "partial": "Status Change Time",
        "signature": "a-\u003eEpochTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:vWriteFile",
      "description": {
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS.html#vWriteFile",
        "fct-type": "method",
        "title": "vWriteFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "vWriteFile",
        "normalized": "a-\u003eFilePath-\u003eString-\u003eIO()",
        "package": "MissingH",
        "partial": "Write File",
        "signature": "a-\u003eFilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:withOpen",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewithStat\u003c/a\u003e\u003c/code\u003e, but for the \u003ccode\u003e\u003ca\u003evOpen\u003c/a\u003e\u003c/code\u003e result. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e b) -\u003e b",
        "fct-source": "src/System-IO-HVFS.html#withOpen",
        "fct-type": "function",
        "title": "withOpen"
      },
      "index": {
        "description": "Similar to withStat but for the vOpen result",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "withOpen",
        "normalized": "a-\u003eb)-\u003eb",
        "package": "MissingH",
        "partial": "Open",
        "signature": "a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVFS.html#v:withStat",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for working with stat -- takes a stat result\nand a function that uses it, and returns the result. \n\u003c/p\u003e\u003cp\u003eHere is an example from the HVFS source:\n\u003c/p\u003e\u003cpre\u003e    vGetModificationTime fs fp = \n       do s \u003c- vGetFileStatus fs fp\n          return $ epochToClockTime (withStat s vModificationTime)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eepochToClockTime\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVFS",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e b) -\u003e b",
        "fct-source": "src/System-IO-HVFS.html#withStat",
        "fct-type": "function",
        "title": "withStat"
      },
      "index": {
        "description": "Convenience function for working with stat takes stat result and function that uses it and returns the result Here is an example from the HVFS source vGetModificationTime fs fp do vGetFileStatus fs fp return epochToClockTime withStat vModificationTime See epochToClockTime for more information",
        "hierarchy": "System IO HVFS",
        "module": "System.IO.HVFS",
        "name": "withStat",
        "normalized": "a-\u003eb)-\u003eb",
        "package": "MissingH",
        "partial": "Stat",
        "signature": "a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell Virtual I/O -- a system to increase the flexibility of input and\noutput in Haskell\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004-2005 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eHVIO provides the following general features:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The ability to use a single set of functions on various different\n   types of objects, including standard Handles, in-memory buffers,\n   compressed files, network data streams, etc.\n\u003c/li\u003e\u003cli\u003e The ability to transparently add filters to the I/O process.\n   These filters could include things such as character set conversions,\n   compression or decompression of a data stream, and more.\n\u003c/li\u003e\u003cli\u003e The ability to define new objects that have the properties\n   of I/O objects and can be used interchangably with them.\n\u003c/li\u003e\u003cli\u003e Specification compatibility with, and complete support for,\n   existing I/O on Handles.\n\u003c/li\u003e\u003cli\u003e Provide easier unit testing capabilities for I/O actions\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHVIO defines several basic type classes that you can use.  You will mostly\nbe interested in \u003ccode\u003e\u003ca\u003eHVIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt's trivial to adapt old code to work with HVIO.  For instance, consider\nthis example of old and new code:\n\u003c/p\u003e\u003cpre\u003eprintMsg :: Handle -\u003e String -\u003e IO ()\nprintMsg h msg = hPutStr h (\"msg: \" ++ msg)\n\u003c/pre\u003e\u003cp\u003eAnd now, the new way:\n\u003c/p\u003e\u003cpre\u003eprintMsg :: HVIO h =\u003e h -\u003e String -\u003e IO ()\nprintMsg h msg = vPutStr h (\"msg: \" ++ msg)\n\u003c/pre\u003e\u003cp\u003eThere are several points to note about this conversion:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The new method can still accept a Handle in exactly the same way as\n   the old method.  Changing your functions to use HVIO will require no\n   changes from functions that call them with Handles.\n\u003c/li\u003e\u003cli\u003e Most \"h\" functions have equivolent \"v\" functions that operate\n   on HVIO classes instead of the more specific Handle.  The \"v\" functions\n   behave identically to the \"h\" functions whenever possible.\n\u003c/li\u003e\u003cli\u003e There is no equivolent of \"openFile\" in any HVIO class.  You must\n   create your Handle (or other HVIO object) using normal means.\n   This is because the creation is so different that it cannot be standardized.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn addition to Handle, there are several pre-defined classes for your use.\n\u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e is a particularly interesting one.  At creation time, you pass\nit a String.  Its contents are read lazily whenever a read call is made.  It\ncan be used, therefore, to implement filters (simply initialize it with the\nresult from, say, a map over hGetContents from another HVIO object), codecs,\nand simple I/O testing.  Because it is lazy, it need not hold the entire\nstring in memory.  You can create a \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e with a call to\n\u003ccode\u003e\u003ca\u003enewStreamReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e is a similar class, but with a different purpose.  It provides\na full interface like Handle (it implements \u003ccode\u003eHVIOReader\u003c/code\u003e, \u003ccode\u003eHVIOWriter\u003c/code\u003e,\nand \u003ccode\u003eHVIOSeeker\u003c/code\u003e).  However, it maintains an in-memory buffer with the\ncontents of the file, rather than an actual on-disk file.  You can access\nthe entire contents of this buffer at any time.  This can be quite useful\nfor testing I/O code, or for cases where existing APIs use I/O, but you\nprefer a String representation.  You can create a \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e with a call\nto \u003ccode\u003e\u003ca\u003enewMemoryBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFinally, there are pipes.  These pipes are analogous to the Unix\npipes that are available from System.Posix, but don't require Unix and work\nonly in Haskell.  When you create a pipe, you actually get two HVIO objects:\na \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e.  You must use the \u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e in one\nthread and the \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e in another thread.  Data that's written to the\n\u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e will then be available for reading with the \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e.  The\npipes are implemented completely with existing Haskell threading primitives,\nand require no special operating system support.  Unlike Unix pipes, these\npipes cannot be used across a fork().  Also unlike Unix pipes, these pipes\nare portable and interact well with Haskell threads.  A new pipe can be created\nwith a call to \u003ccode\u003e\u003ca\u003enewHVIOPipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTogether with \u003ca\u003eSystem.IO.HVFS\u003c/a\u003e, this module is part of a complete\nvirtual filesystem solution.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-HVIO.html",
        "fct-type": "module",
        "title": "HVIO"
      },
      "index": {
        "description": "Haskell Virtual system to increase the flexibility of input and output in Haskell Copyright John Goerzen jgoerzen@complete.org HVIO provides the following general features The ability to use single set of functions on various different types of objects including standard Handles in-memory buffers compressed files network data streams etc The ability to transparently add filters to the process These filters could include things such as character set conversions compression or decompression of data stream and more The ability to define new objects that have the properties of objects and can be used interchangably with them Specification compatibility with and complete support for existing on Handles Provide easier unit testing capabilities for actions HVIO defines several basic type classes that you can use You will mostly be interested in HVIO It trivial to adapt old code to work with HVIO For instance consider this example of old and new code printMsg Handle String IO printMsg msg hPutStr msg msg And now the new way printMsg HVIO String IO printMsg msg vPutStr msg msg There are several points to note about this conversion The new method can still accept Handle in exactly the same way as the old method Changing your functions to use HVIO will require no changes from functions that call them with Handles Most functions have equivolent functions that operate on HVIO classes instead of the more specific Handle The functions behave identically to the functions whenever possible There is no equivolent of openFile in any HVIO class You must create your Handle or other HVIO object using normal means This is because the creation is so different that it cannot be standardized In addition to Handle there are several pre-defined classes for your use StreamReader is particularly interesting one At creation time you pass it String Its contents are read lazily whenever read call is made It can be used therefore to implement filters simply initialize it with the result from say map over hGetContents from another HVIO object codecs and simple testing Because it is lazy it need not hold the entire string in memory You can create StreamReader with call to newStreamReader MemoryBuffer is similar class but with different purpose It provides full interface like Handle it implements HVIOReader HVIOWriter and HVIOSeeker However it maintains an in-memory buffer with the contents of the file rather than an actual on-disk file You can access the entire contents of this buffer at any time This can be quite useful for testing code or for cases where existing APIs use but you prefer String representation You can create MemoryBuffer with call to newMemoryBuffer Finally there are pipes These pipes are analogous to the Unix pipes that are available from System.Posix but don require Unix and work only in Haskell When you create pipe you actually get two HVIO objects PipeReader and PipeWriter You must use the PipeWriter in one thread and the PipeReader in another thread Data that written to the PipeWriter will then be available for reading with the PipeReader The pipes are implemented completely with existing Haskell threading primitives and require no special operating system support Unlike Unix pipes these pipes cannot be used across fork Also unlike Unix pipes these pipes are portable and interact well with Haskell threads new pipe can be created with call to newHVIOPipe Together with System.IO.HVFS this module is part of complete virtual filesystem solution",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "HVIO",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:HVIO",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the generic I/O support class.  All objects that are to be used\nin the HVIO system must provide an instance of \u003ccode\u003e\u003ca\u003eHVIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFunctions in this class provide an interface with the same specification as\nthe similar functions in System.IO.  Please refer to that documentation\nfor a more complete specification than is provided here.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eHVIO\u003c/a\u003e\u003c/code\u003e must provide \u003ccode\u003e\u003ca\u003evClose\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evIsEOF\u003c/a\u003e\u003c/code\u003e, and either\n\u003ccode\u003e\u003ca\u003evIsOpen\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evIsClosed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eImplementators of readable objects must provide at least \u003ccode\u003e\u003ca\u003evGetChar\u003c/a\u003e\u003c/code\u003e\nand \u003ccode\u003e\u003ca\u003evIsReadable\u003c/a\u003e\u003c/code\u003e.\nAn implementation of \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e is also highly suggested, since\nthe default cannot implement proper partial closing semantics.\n\u003c/p\u003e\u003cp\u003eImplementators of writable objects must provide at least \u003ccode\u003e\u003ca\u003evPutChar\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003evIsWritable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eImplementators of seekable objects must provide at least\n\u003ccode\u003e\u003ca\u003evIsSeekable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evTell\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003evSeek\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "class",
        "fct-source": "src/System-IO-HVIO.html#HVIO",
        "fct-type": "class",
        "title": "HVIO"
      },
      "index": {
        "description": "This is the generic support class All objects that are to be used in the HVIO system must provide an instance of HVIO Functions in this class provide an interface with the same specification as the similar functions in System.IO Please refer to that documentation for more complete specification than is provided here Instances of HVIO must provide vClose vIsEOF and either vIsOpen or vIsClosed Implementators of readable objects must provide at least vGetChar and vIsReadable An implementation of vGetContents is also highly suggested since the default cannot implement proper partial closing semantics Implementators of writable objects must provide at least vPutChar and vIsWritable Implementators of seekable objects must provide at least vIsSeekable vTell and vSeek",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "HVIO",
        "normalized": "",
        "package": "MissingH",
        "partial": "HVIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:MemoryBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e simulates true I/O, but uses an in-memory buffer instead\nof on-disk storage.\n\u003c/p\u003e\u003cp\u003eIt provides\na full interface like Handle (it implements \u003ccode\u003eHVIOReader\u003c/code\u003e, \u003ccode\u003eHVIOWriter\u003c/code\u003e,\nand \u003ccode\u003eHVIOSeeker\u003c/code\u003e).  However, it maintains an in-memory buffer with the\ncontents of the file, rather than an actual on-disk file.  You can access\nthe entire contents of this buffer at any time.  This can be quite useful\nfor testing I/O code, or for cases where existing APIs use I/O, but you\nprefer a String representation.  You can create a \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e with a call\nto \u003ccode\u003e\u003ca\u003enewMemoryBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe present \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e implementation is rather inefficient, particularly\nwhen reading towards the end of large files.  It's best used for smallish\ndata storage.  This problem will be fixed eventually.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVIO.html#MemoryBuffer",
        "fct-type": "data",
        "title": "MemoryBuffer"
      },
      "index": {
        "description": "MemoryBuffer simulates true but uses an in-memory buffer instead of on-disk storage It provides full interface like Handle it implements HVIOReader HVIOWriter and HVIOSeeker However it maintains an in-memory buffer with the contents of the file rather than an actual on-disk file You can access the entire contents of this buffer at any time This can be quite useful for testing code or for cases where existing APIs use but you prefer String representation You can create MemoryBuffer with call to newMemoryBuffer The present MemoryBuffer implementation is rather inefficient particularly when reading towards the end of large files It best used for smallish data storage This problem will be fixed eventually",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "MemoryBuffer",
        "normalized": "",
        "package": "MissingH",
        "partial": "Memory Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:PipeReader",
      "description": {
        "fct-descr": "\u003cp\u003eThe reading side of a Haskell pipe.  Please see \u003ccode\u003e\u003ca\u003enewHVIOPipe\u003c/a\u003e\u003c/code\u003e for more\ndetails. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVIO.html#PipeReader",
        "fct-type": "data",
        "title": "PipeReader"
      },
      "index": {
        "description": "The reading side of Haskell pipe Please see newHVIOPipe for more details",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "PipeReader",
        "normalized": "",
        "package": "MissingH",
        "partial": "Pipe Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:PipeWriter",
      "description": {
        "fct-descr": "\u003cp\u003eThe writing side of a Haskell pipe.  Please see \u003ccode\u003e\u003ca\u003enewHVIOPipe\u003c/a\u003e\u003c/code\u003e for more\ndetails. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVIO.html#PipeWriter",
        "fct-type": "data",
        "title": "PipeWriter"
      },
      "index": {
        "description": "The writing side of Haskell pipe Please see newHVIOPipe for more details",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "PipeWriter",
        "normalized": "",
        "package": "MissingH",
        "partial": "Pipe Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#t:StreamReader",
      "description": {
        "fct-descr": "\u003cp\u003eSimulate I/O based on a string buffer.\n\u003c/p\u003e\u003cp\u003eWhen a \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e is created, it is initialized based on the contents of\na \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  Its contents are read lazily whenever a request is made to read\nsomething from the \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e.    It\ncan be used, therefore, to implement filters (simply initialize it with the\nresult from, say, a map over hGetContents from another HVIO object), codecs,\nand simple I/O testing.  Because it is lazy, it need not hold the entire\nstring in memory.  You can create a \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e with a call to\n\u003ccode\u003e\u003ca\u003enewStreamReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-HVIO.html#StreamReader",
        "fct-type": "data",
        "title": "StreamReader"
      },
      "index": {
        "description": "Simulate based on string buffer When StreamReader is created it is initialized based on the contents of String Its contents are read lazily whenever request is made to read something from the StreamReader It can be used therefore to implement filters simply initialize it with the result from say map over hGetContents from another HVIO object codecs and simple testing Because it is lazy it need not hold the entire string in memory You can create StreamReader with call to newStreamReader",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "StreamReader",
        "normalized": "",
        "package": "MissingH",
        "partial": "Stream Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:getMemoryBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eGrab the entire contents of the buffer as a string.\nUnlike \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e, this has no effect on the open status of the\nitem, the EOF status, or the current position of the file pointer. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "MemoryBuffer -\u003e IO String",
        "fct-source": "src/System-IO-HVIO.html#getMemoryBuffer",
        "fct-type": "function",
        "title": "getMemoryBuffer"
      },
      "index": {
        "description": "Grab the entire contents of the buffer as string Unlike vGetContents this has no effect on the open status of the item the EOF status or the current position of the file pointer",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "getMemoryBuffer",
        "normalized": "MemoryBuffer-\u003eIO String",
        "package": "MissingH",
        "partial": "Memory Buffer",
        "signature": "MemoryBuffer-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:mbDefaultCloseFunc",
      "description": {
        "fct-descr": "\u003cp\u003eDefault (no-op) memory buf close function. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#mbDefaultCloseFunc",
        "fct-type": "function",
        "title": "mbDefaultCloseFunc"
      },
      "index": {
        "description": "Default no-op memory buf close function",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "mbDefaultCloseFunc",
        "normalized": "String-\u003eIO()",
        "package": "MissingH",
        "partial": "Default Close Func",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:newHVIOPipe",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a Haskell pipe.\n\u003c/p\u003e\u003cp\u003eThese pipes are analogous to the Unix\npipes that are available from System.Posix, but don't require Unix and work\nonly in Haskell.  When you create a pipe, you actually get two HVIO objects:\na \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e.  You must use the \u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e in one\nthread and the \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e in another thread.  Data that's written to the\n\u003ccode\u003e\u003ca\u003ePipeWriter\u003c/a\u003e\u003c/code\u003e will then be available for reading with the \u003ccode\u003e\u003ca\u003ePipeReader\u003c/a\u003e\u003c/code\u003e.  The\npipes are implemented completely with existing Haskell threading primitives,\nand require no special operating system support.  Unlike Unix pipes, these\npipes cannot be used across a fork().  Also unlike Unix pipes, these pipes\nare portable and interact well with Haskell threads. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "IO (PipeReader, PipeWriter)",
        "fct-source": "src/System-IO-HVIO.html#newHVIOPipe",
        "fct-type": "function",
        "title": "newHVIOPipe"
      },
      "index": {
        "description": "Create Haskell pipe These pipes are analogous to the Unix pipes that are available from System.Posix but don require Unix and work only in Haskell When you create pipe you actually get two HVIO objects PipeReader and PipeWriter You must use the PipeWriter in one thread and the PipeReader in another thread Data that written to the PipeWriter will then be available for reading with the PipeReader The pipes are implemented completely with existing Haskell threading primitives and require no special operating system support Unlike Unix pipes these pipes cannot be used across fork Also unlike Unix pipes these pipes are portable and interact well with Haskell threads",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "newHVIOPipe",
        "normalized": "IO(PipeReader,PipeWriter)",
        "package": "MissingH",
        "partial": "HVIOPipe",
        "signature": "IO(PipeReader,PipeWriter)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:newMemoryBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eMemoryBuffer\u003c/a\u003e\u003c/code\u003e instance.  The buffer is initialized\nto the value passed, and the pointer is placed at the beginning of the file.\n\u003c/p\u003e\u003cp\u003eYou can put things in it by using the normal \u003ccode\u003e\u003ca\u003evPutStr\u003c/a\u003e\u003c/code\u003e calls, and reset to\nthe beginning by using the normal \u003ccode\u003e\u003ca\u003evRewind\u003c/a\u003e\u003c/code\u003e call.\n\u003c/p\u003e\u003cp\u003eThe function is called when \u003ccode\u003e\u003ca\u003evClose\u003c/a\u003e\u003c/code\u003e is called, and is passed the contents of\nthe buffer at close time.  You can use \u003ccode\u003e\u003ca\u003embDefaultCloseFunc\u003c/a\u003e\u003c/code\u003e if you don't want to\ndo anything.\n\u003c/p\u003e\u003cp\u003eTo create an empty buffer, pass the initial value \u003ccode\u003e\"\"\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e (String -\u003e IO ())-\u003e IO MemoryBuffer",
        "fct-type": "function",
        "title": "newMemoryBuffer"
      },
      "index": {
        "description": "Create new MemoryBuffer instance The buffer is initialized to the value passed and the pointer is placed at the beginning of the file You can put things in it by using the normal vPutStr calls and reset to the beginning by using the normal vRewind call The function is called when vClose is called and is passed the contents of the buffer at close time You can use mbDefaultCloseFunc if you don want to do anything To create an empty buffer pass the initial value",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "newMemoryBuffer",
        "normalized": "String-\u003e(String-\u003eIO())-\u003eIO MemoryBuffer",
        "package": "MissingH",
        "partial": "Memory Buffer",
        "signature": "String-\u003e(String-\u003eIO())-\u003eIO MemoryBuffer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:newStreamReader",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eStreamReader\u003c/a\u003e\u003c/code\u003e object. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e IO StreamReader",
        "fct-type": "function",
        "title": "newStreamReader"
      },
      "index": {
        "description": "Create new StreamReader object",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "newStreamReader",
        "normalized": "String-\u003eIO StreamReader",
        "package": "MissingH",
        "partial": "Stream Reader",
        "signature": "String-\u003eIO StreamReader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vClose",
      "description": {
        "fct-descr": "\u003cp\u003eClose a file\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vClose",
        "fct-type": "method",
        "title": "vClose"
      },
      "index": {
        "description": "Close file",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vClose",
        "normalized": "a-\u003eIO()",
        "package": "MissingH",
        "partial": "Close",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vFlush",
      "description": {
        "fct-descr": "\u003cp\u003eFlush any output buffers.\n Note: implementations should assure that a vFlush is automatically\n performed\n on file close, if necessary to ensure all data sent is written.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vFlush",
        "fct-type": "method",
        "title": "vFlush"
      },
      "index": {
        "description": "Flush any output buffers Note implementations should assure that vFlush is automatically performed on file close if necessary to ensure all data sent is written",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vFlush",
        "normalized": "a-\u003eIO()",
        "package": "MissingH",
        "partial": "Flush",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetBuf",
      "description": {
        "fct-descr": "\u003cp\u003eBinary input: read the specified number of octets from the\n specified buffer location, continuing to read\n until it either consumes that much data or EOF is encountered.\n Returns the number of octets actually read.  EOF errors are never\n raised; fewer bytes than requested are returned on EOF.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Ptr b -\u003e Int -\u003e IO Int",
        "fct-source": "src/System-IO-HVIO.html#vGetBuf",
        "fct-type": "method",
        "title": "vGetBuf"
      },
      "index": {
        "description": "Binary input read the specified number of octets from the specified buffer location continuing to read until it either consumes that much data or EOF is encountered Returns the number of octets actually read EOF errors are never raised fewer bytes than requested are returned on EOF",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vGetBuf",
        "normalized": "a-\u003ePtr b-\u003eInt-\u003eIO Int",
        "package": "MissingH",
        "partial": "Get Buf",
        "signature": "a-\u003ePtr b-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetBuffering",
      "description": {
        "fct-descr": "\u003cp\u003eGet buffering; the default action always returns NoBuffering.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO BufferMode",
        "fct-source": "src/System-IO-HVIO.html#vGetBuffering",
        "fct-type": "method",
        "title": "vGetBuffering"
      },
      "index": {
        "description": "Get buffering the default action always returns NoBuffering",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vGetBuffering",
        "normalized": "a-\u003eIO BufferMode",
        "package": "MissingH",
        "partial": "Get Buffering",
        "signature": "a-\u003eIO BufferMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetChar",
      "description": {
        "fct-descr": "\u003cp\u003eRead one character\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Char",
        "fct-source": "src/System-IO-HVIO.html#vGetChar",
        "fct-type": "method",
        "title": "vGetChar"
      },
      "index": {
        "description": "Read one character",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vGetChar",
        "normalized": "a-\u003eIO Char",
        "package": "MissingH",
        "partial": "Get Char",
        "signature": "a-\u003eIO Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eGet the remaining contents.  Please note that as a user of this\n       function, the same partial-closing semantics as are used in the\n       standard \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e are \u003cem\u003eencouraged\u003c/em\u003e from implementators,\n       but are not \u003cem\u003erequired\u003c/em\u003e.  That means that, for instance,\n       a \u003ccode\u003e\u003ca\u003evGetChar\u003c/a\u003e\u003c/code\u003e after a \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e may return some undefined\n       result instead of the error you would normally get.  You should\n       use caution to make sure your code doesn't fall into that trap,\n       or make sure to test your code with Handle or one of the\n       default instances defined in this module.  Also, some implementations\n       may essentially provide a complete close after a call to \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e.\n       The bottom line: after a call to \u003ccode\u003e\u003ca\u003evGetContents\u003c/a\u003e\u003c/code\u003e, you should do nothing\n       else with the object save closing it with \u003ccode\u003e\u003ca\u003evClose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor implementators, you are highly encouraged to provide a correct\n       implementation. \n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO String",
        "fct-source": "src/System-IO-HVIO.html#vGetContents",
        "fct-type": "method",
        "title": "vGetContents"
      },
      "index": {
        "description": "Get the remaining contents Please note that as user of this function the same partial-closing semantics as are used in the standard hGetContents are encouraged from implementators but are not required That means that for instance vGetChar after vGetContents may return some undefined result instead of the error you would normally get You should use caution to make sure your code doesn fall into that trap or make sure to test your code with Handle or one of the default instances defined in this module Also some implementations may essentially provide complete close after call to vGetContents The bottom line after call to vGetContents you should do nothing else with the object save closing it with vClose For implementators you are highly encouraged to provide correct implementation",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vGetContents",
        "normalized": "a-\u003eIO String",
        "package": "MissingH",
        "partial": "Get Contents",
        "signature": "a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetFP",
      "description": {
        "fct-descr": "\u003cp\u003eGet the filename/object/whatever that this corresponds to.\n May be Nothing.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO (Maybe FilePath)",
        "fct-source": "src/System-IO-HVIO.html#vGetFP",
        "fct-type": "method",
        "title": "vGetFP"
      },
      "index": {
        "description": "Get the filename object whatever that this corresponds to May be Nothing",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vGetFP",
        "normalized": "a-\u003eIO(Maybe FilePath)",
        "package": "MissingH",
        "partial": "Get FP",
        "signature": "a-\u003eIO(Maybe FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vGetLine",
      "description": {
        "fct-descr": "\u003cp\u003eRead one line\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO String",
        "fct-source": "src/System-IO-HVIO.html#vGetLine",
        "fct-type": "method",
        "title": "vGetLine"
      },
      "index": {
        "description": "Read one line",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vGetLine",
        "normalized": "a-\u003eIO String",
        "package": "MissingH",
        "partial": "Get Line",
        "signature": "a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsClosed",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a file is closed\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/System-IO-HVIO.html#vIsClosed",
        "fct-type": "method",
        "title": "vIsClosed"
      },
      "index": {
        "description": "Test if file is closed",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vIsClosed",
        "normalized": "a-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Is Closed",
        "signature": "a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsEOF",
      "description": {
        "fct-descr": "\u003cp\u003eWhether or not we're at EOF.  This may raise on exception\n on some items, most notably write-only Handles such as stdout.\n In general, this is most reliable on items opened for reading.\n vIsEOF implementations must implicitly call vTestOpen.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/System-IO-HVIO.html#vIsEOF",
        "fct-type": "method",
        "title": "vIsEOF"
      },
      "index": {
        "description": "Whether or not we re at EOF This may raise on exception on some items most notably write-only Handles such as stdout In general this is most reliable on items opened for reading vIsEOF implementations must implicitly call vTestOpen",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vIsEOF",
        "normalized": "a-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Is EOF",
        "signature": "a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsOpen",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a file is open\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/System-IO-HVIO.html#vIsOpen",
        "fct-type": "method",
        "title": "vIsOpen"
      },
      "index": {
        "description": "Test if file is open",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vIsOpen",
        "normalized": "a-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Is Open",
        "signature": "a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsReadable",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate whether a particular item is available for reading.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/System-IO-HVIO.html#vIsReadable",
        "fct-type": "method",
        "title": "vIsReadable"
      },
      "index": {
        "description": "Indicate whether particular item is available for reading",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vIsReadable",
        "normalized": "a-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Is Readable",
        "signature": "a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsSeekable",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate whether this instance supports seeking.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/System-IO-HVIO.html#vIsSeekable",
        "fct-type": "method",
        "title": "vIsSeekable"
      },
      "index": {
        "description": "Indicate whether this instance supports seeking",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vIsSeekable",
        "normalized": "a-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Is Seekable",
        "signature": "a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vIsWritable",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate whether or not this particular object supports writing.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/System-IO-HVIO.html#vIsWritable",
        "fct-type": "method",
        "title": "vIsWritable"
      },
      "index": {
        "description": "Indicate whether or not this particular object supports writing",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vIsWritable",
        "normalized": "a-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Is Writable",
        "signature": "a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vMkIOError",
      "description": {
        "fct-descr": "\u003cp\u003eMake an IOError.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IOErrorType -\u003e String -\u003e Maybe FilePath -\u003e IOError",
        "fct-source": "src/System-IO-HVIO.html#vMkIOError",
        "fct-type": "method",
        "title": "vMkIOError"
      },
      "index": {
        "description": "Make an IOError",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vMkIOError",
        "normalized": "a-\u003eIOErrorType-\u003eString-\u003eMaybe FilePath-\u003eIOError",
        "package": "MissingH",
        "partial": "Mk IOError",
        "signature": "a-\u003eIOErrorType-\u003eString-\u003eMaybe FilePath-\u003eIOError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPrint",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string representation of the argument, plus a newline.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e b -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vPrint",
        "fct-type": "method",
        "title": "vPrint"
      },
      "index": {
        "description": "Write string representation of the argument plus newline",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vPrint",
        "normalized": "a-\u003eb-\u003eIO()",
        "package": "MissingH",
        "partial": "Print",
        "signature": "a-\u003eb-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPutBuf",
      "description": {
        "fct-descr": "\u003cp\u003eBinary output: write the specified number of octets from the specified\n buffer location.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Ptr b -\u003e Int -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vPutBuf",
        "fct-type": "method",
        "title": "vPutBuf"
      },
      "index": {
        "description": "Binary output write the specified number of octets from the specified buffer location",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vPutBuf",
        "normalized": "a-\u003ePtr b-\u003eInt-\u003eIO()",
        "package": "MissingH",
        "partial": "Put Buf",
        "signature": "a-\u003ePtr b-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPutChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite one character\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e Char -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vPutChar",
        "fct-type": "method",
        "title": "vPutChar"
      },
      "index": {
        "description": "Write one character",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vPutChar",
        "normalized": "a-\u003eChar-\u003eIO()",
        "package": "MissingH",
        "partial": "Put Char",
        "signature": "a-\u003eChar-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vPutStr",
        "fct-type": "method",
        "title": "vPutStr"
      },
      "index": {
        "description": "Write string",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vPutStr",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "MissingH",
        "partial": "Put Str",
        "signature": "a-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string with newline character after it\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vPutStrLn",
        "fct-type": "method",
        "title": "vPutStrLn"
      },
      "index": {
        "description": "Write string with newline character after it",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vPutStrLn",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "MissingH",
        "partial": "Put Str Ln",
        "signature": "a-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vReady",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate whether at least one item is ready for reading.\n This will always be True for a great many implementations.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/System-IO-HVIO.html#vReady",
        "fct-type": "method",
        "title": "vReady"
      },
      "index": {
        "description": "Indicate whether at least one item is ready for reading This will always be True for great many implementations",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vReady",
        "normalized": "a-\u003eIO Bool",
        "package": "MissingH",
        "partial": "Ready",
        "signature": "a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vRewind",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function to reset the file pointer to the beginning\n of the file.  A call to \u003ccode\u003evRewind h\u003c/code\u003e is the\n same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003evSeek\u003c/a\u003e\u003c/code\u003e h AbsoluteSeek 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vRewind",
        "fct-type": "method",
        "title": "vRewind"
      },
      "index": {
        "description": "Convenience function to reset the file pointer to the beginning of the file call to vRewind is the same as vSeek AbsoluteSeek",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vRewind",
        "normalized": "a-\u003eIO()",
        "package": "MissingH",
        "partial": "Rewind",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vSeek",
      "description": {
        "fct-descr": "\u003cp\u003eSeek to a specific location.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e SeekMode -\u003e Integer -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vSeek",
        "fct-type": "method",
        "title": "vSeek"
      },
      "index": {
        "description": "Seek to specific location",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vSeek",
        "normalized": "a-\u003eSeekMode-\u003eInteger-\u003eIO()",
        "package": "MissingH",
        "partial": "Seek",
        "signature": "a-\u003eSeekMode-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vSetBuffering",
      "description": {
        "fct-descr": "\u003cp\u003eSet buffering; the default action is a no-op.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e BufferMode -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vSetBuffering",
        "fct-type": "method",
        "title": "vSetBuffering"
      },
      "index": {
        "description": "Set buffering the default action is no-op",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vSetBuffering",
        "normalized": "a-\u003eBufferMode-\u003eIO()",
        "package": "MissingH",
        "partial": "Set Buffering",
        "signature": "a-\u003eBufferMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vShow",
      "description": {
        "fct-descr": "\u003cp\u003eDetailed show output.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO String",
        "fct-source": "src/System-IO-HVIO.html#vShow",
        "fct-type": "method",
        "title": "vShow"
      },
      "index": {
        "description": "Detailed show output",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vShow",
        "normalized": "a-\u003eIO String",
        "package": "MissingH",
        "partial": "Show",
        "signature": "a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vTell",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current position.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO Integer",
        "fct-source": "src/System-IO-HVIO.html#vTell",
        "fct-type": "method",
        "title": "vTell"
      },
      "index": {
        "description": "Get the current position",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vTell",
        "normalized": "a-\u003eIO Integer",
        "package": "MissingH",
        "partial": "Tell",
        "signature": "a-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vTestEOF",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an isEOFError if we're at EOF; returns nothing otherwise.\n If an implementation overrides the default, make sure that it\n calls vTestOpen at some point.  The default implementation is\n a wrapper around a call to \u003ccode\u003e\u003ca\u003evIsEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vTestEOF",
        "fct-type": "method",
        "title": "vTestEOF"
      },
      "index": {
        "description": "Throw an isEOFError if we re at EOF returns nothing otherwise If an implementation overrides the default make sure that it calls vTestOpen at some point The default implementation is wrapper around call to vIsEOF",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vTestEOF",
        "normalized": "a-\u003eIO()",
        "package": "MissingH",
        "partial": "Test EOF",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vTestOpen",
      "description": {
        "fct-descr": "\u003cp\u003eRaise an error if the file is not open.\n This is a new HVIO function and is implemented in terms of\n \u003ccode\u003e\u003ca\u003evIsOpen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-IO-HVIO.html#vTestOpen",
        "fct-type": "method",
        "title": "vTestOpen"
      },
      "index": {
        "description": "Raise an error if the file is not open This is new HVIO function and is implemented in terms of vIsOpen",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vTestOpen",
        "normalized": "a-\u003eIO()",
        "package": "MissingH",
        "partial": "Test Open",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-HVIO.html#v:vThrow",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an IOError.\n\u003c/p\u003e",
        "fct-module": "System.IO.HVIO",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IOErrorType -\u003e IO b",
        "fct-source": "src/System-IO-HVIO.html#vThrow",
        "fct-type": "method",
        "title": "vThrow"
      },
      "index": {
        "description": "Throw an IOError",
        "hierarchy": "System IO HVIO",
        "module": "System.IO.HVIO",
        "name": "vThrow",
        "normalized": "a-\u003eIOErrorType-\u003eIO b",
        "package": "MissingH",
        "partial": "Throw",
        "signature": "a-\u003eIOErrorType-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-PlafCompat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOn Unix, exports System.Posix.Types and System.Posix.Files.\n\u003c/p\u003e\u003cp\u003eOn Windows, exports System.Posix.Types and \u003ca\u003eSystem.IO.WindowsCompat\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe result should be roughly the same set of defined variables and types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.PlafCompat",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-PlafCompat.html",
        "fct-type": "module",
        "title": "PlafCompat"
      },
      "index": {
        "description": "On Unix exports System.Posix.Types and System.Posix.Files On Windows exports System.Posix.Types and System.IO.WindowsCompat The result should be roughly the same set of defined variables and types",
        "hierarchy": "System IO PlafCompat",
        "module": "System.IO.PlafCompat",
        "name": "PlafCompat",
        "normalized": "",
        "package": "MissingH",
        "partial": "Plaf Compat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-PlafCompat.html#v:nullFileName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the null device.  NUL: on Windows, /dev/null everywhere else.\n\u003c/p\u003e",
        "fct-module": "System.IO.PlafCompat",
        "fct-package": "MissingH",
        "fct-signature": "String",
        "fct-source": "src/System-IO-PlafCompat.html#nullFileName",
        "fct-type": "function",
        "title": "nullFileName"
      },
      "index": {
        "description": "The name of the null device NUL on Windows dev null everywhere else",
        "hierarchy": "System IO PlafCompat",
        "module": "System.IO.PlafCompat",
        "name": "nullFileName",
        "normalized": "",
        "package": "MissingH",
        "partial": "File Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide a stat-like structure for use in MissingH.  Especially\nuseful with HVFS and on Windows.  See also \u003ca\u003eSystem.IO.WindowsCompat\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-StatCompat.html",
        "fct-type": "module",
        "title": "StatCompat"
      },
      "index": {
        "description": "Provide stat-like structure for use in MissingH Especially useful with HVFS and on Windows See also System.IO.WindowsCompat",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "StatCompat",
        "normalized": "",
        "package": "MissingH",
        "partial": "Stat Compat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#t:FileStatusCompat",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "data",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "data",
        "title": "FileStatusCompat"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "FileStatusCompat",
        "normalized": "",
        "package": "MissingH",
        "partial": "File Status Compat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:FileStatusCompat",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileStatusCompat",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "FileStatusCompat"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "FileStatusCompat",
        "normalized": "",
        "package": "MissingH",
        "partial": "File Status Compat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:accessTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "EpochTime",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "accessTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "accessTime",
        "normalized": "",
        "package": "MissingH",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:deviceID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "DeviceID",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "deviceID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "deviceID",
        "normalized": "",
        "package": "MissingH",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileGroup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "GroupID",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "fileGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "fileGroup",
        "normalized": "",
        "package": "MissingH",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileID",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "fileID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "fileID",
        "normalized": "",
        "package": "MissingH",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileMode",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "fileMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "fileMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileOwner",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "UserID",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "fileOwner"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "fileOwner",
        "normalized": "",
        "package": "MissingH",
        "partial": "Owner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:fileSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileOffset",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "fileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "fileSize",
        "normalized": "",
        "package": "MissingH",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isBlockDevice",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileStatusCompat -\u003e Bool",
        "fct-source": "src/System-IO-StatCompat.html#isBlockDevice",
        "fct-type": "function",
        "title": "isBlockDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "isBlockDevice",
        "normalized": "FileStatusCompat-\u003eBool",
        "package": "MissingH",
        "partial": "Block Device",
        "signature": "FileStatusCompat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isCharacterDevice",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileStatusCompat -\u003e Bool",
        "fct-source": "src/System-IO-StatCompat.html#isCharacterDevice",
        "fct-type": "function",
        "title": "isCharacterDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "isCharacterDevice",
        "normalized": "FileStatusCompat-\u003eBool",
        "package": "MissingH",
        "partial": "Character Device",
        "signature": "FileStatusCompat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isDirectory",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileStatusCompat -\u003e Bool",
        "fct-source": "src/System-IO-StatCompat.html#isDirectory",
        "fct-type": "function",
        "title": "isDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "isDirectory",
        "normalized": "FileStatusCompat-\u003eBool",
        "package": "MissingH",
        "partial": "Directory",
        "signature": "FileStatusCompat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isNamedPipe",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileStatusCompat -\u003e Bool",
        "fct-source": "src/System-IO-StatCompat.html#isNamedPipe",
        "fct-type": "function",
        "title": "isNamedPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "isNamedPipe",
        "normalized": "FileStatusCompat-\u003eBool",
        "package": "MissingH",
        "partial": "Named Pipe",
        "signature": "FileStatusCompat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isRegularFile",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileStatusCompat -\u003e Bool",
        "fct-source": "src/System-IO-StatCompat.html#isRegularFile",
        "fct-type": "function",
        "title": "isRegularFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "isRegularFile",
        "normalized": "FileStatusCompat-\u003eBool",
        "package": "MissingH",
        "partial": "Regular File",
        "signature": "FileStatusCompat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isSocket",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileStatusCompat -\u003e Bool",
        "fct-source": "src/System-IO-StatCompat.html#isSocket",
        "fct-type": "function",
        "title": "isSocket"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "isSocket",
        "normalized": "FileStatusCompat-\u003eBool",
        "package": "MissingH",
        "partial": "Socket",
        "signature": "FileStatusCompat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:isSymbolicLink",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileStatusCompat -\u003e Bool",
        "fct-source": "src/System-IO-StatCompat.html#isSymbolicLink",
        "fct-type": "function",
        "title": "isSymbolicLink"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "isSymbolicLink",
        "normalized": "FileStatusCompat-\u003eBool",
        "package": "MissingH",
        "partial": "Symbolic Link",
        "signature": "FileStatusCompat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:linkCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "LinkCount",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "linkCount"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "linkCount",
        "normalized": "",
        "package": "MissingH",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:modificationTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "EpochTime",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "modificationTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "modificationTime",
        "normalized": "",
        "package": "MissingH",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:sc_helper",
      "description": {
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "FileMode -\u003e FileStatusCompat -\u003e Bool",
        "fct-source": "src/System-IO-StatCompat.html#sc_helper",
        "fct-type": "function",
        "title": "sc_helper"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "sc_helper",
        "normalized": "FileMode-\u003eFileStatusCompat-\u003eBool",
        "package": "MissingH",
        "partial": "",
        "signature": "FileMode-\u003eFileStatusCompat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:specialDeviceID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "DeviceID",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "specialDeviceID"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "specialDeviceID",
        "normalized": "",
        "package": "MissingH",
        "partial": "Device ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-StatCompat.html#v:statusChangeTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.StatCompat",
        "fct-package": "MissingH",
        "fct-signature": "EpochTime",
        "fct-source": "src/System-IO-StatCompat.html#FileStatusCompat",
        "fct-type": "function",
        "title": "statusChangeTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO StatCompat",
        "module": "System.IO.StatCompat",
        "name": "statusChangeTime",
        "normalized": "",
        "package": "MissingH",
        "partial": "Change Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#",
      "description": {
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:copyFileLinesToFile",
      "description": {
        "fct-descr": "\u003cp\u003eCopies one filename to another in text mode.\n\u003c/p\u003e\u003cp\u003ePlease note that the Unix permission bits are set at a default; you may\nneed to adjust them after the copy yourself.\n\u003c/p\u003e\u003cp\u003eThis function is implemented using \u003ccode\u003e\u003ca\u003ehLineCopy\u003c/a\u003e\u003c/code\u003e internally. \n\u003c/p\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-Utils.html#copyFileLinesToFile",
        "fct-type": "function",
        "title": "copyFileLinesToFile"
      },
      "index": {
        "description": "Copies one filename to another in text mode Please note that the Unix permission bits are set at default you may need to adjust them after the copy yourself This function is implemented using hLineCopy internally",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "copyFileLinesToFile",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "File Lines To File",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hCopy",
      "description": {
        "fct-descr": "\u003cp\u003eCopies from one handle to another in raw mode (using\nhGetContents).\n\u003c/p\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e b -\u003e IO ()",
        "fct-source": "src/System-IO-Utils.html#hCopy",
        "fct-type": "function",
        "title": "hCopy"
      },
      "index": {
        "description": "Copies from one handle to another in raw mode using hGetContents",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "hCopy",
        "normalized": "a-\u003eb-\u003eIO()",
        "package": "MissingH",
        "partial": "Copy",
        "signature": "a-\u003eb-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hCopyProgress",
      "description": {
        "fct-descr": "\u003cp\u003eCopies from one handle to another in raw mode (using hGetContents).\nTakes a function to provide progress updates to the user.\n\u003c/p\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "b-\u003e c-\u003e (Maybe a -\u003e Integer -\u003e Bool -\u003e IO ())-\u003e Int-\u003e Maybe a-\u003e IO Integer",
        "fct-type": "function",
        "title": "hCopyProgress"
      },
      "index": {
        "description": "Copies from one handle to another in raw mode using hGetContents Takes function to provide progress updates to the user",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "hCopyProgress",
        "normalized": "a-\u003eb-\u003e(Maybe c-\u003eInteger-\u003eBool-\u003eIO())-\u003eInt-\u003eMaybe c-\u003eIO Integer",
        "package": "MissingH",
        "partial": "Copy Progress",
        "signature": "b-\u003ec-\u003e(Maybe a-\u003eInteger-\u003eBool-\u003eIO())-\u003eInt-\u003eMaybe a-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hGetLines",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a handle, returns a list of all the lines in that handle.\nThanks to lazy evaluation, this list does not have to be read all at once.\n\u003c/p\u003e\u003cp\u003eCombined with \u003ccode\u003e\u003ca\u003ehPutStrLns\u003c/a\u003e\u003c/code\u003e, this can make a powerful way to develop\nfilters.  See the \u003ccode\u003e\u003ca\u003elineInteract\u003c/a\u003e\u003c/code\u003e function for more on that concept.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e main = do\n        l \u003c- hGetLines stdin\n        hPutStrLns stdout $ filter (startswith \"1\") l\n\u003c/pre\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e IO [String]",
        "fct-source": "src/System-IO-Utils.html#hGetLines",
        "fct-type": "function",
        "title": "hGetLines"
      },
      "index": {
        "description": "Given handle returns list of all the lines in that handle Thanks to lazy evaluation this list does not have to be read all at once Combined with hPutStrLns this can make powerful way to develop filters See the lineInteract function for more on that concept Example main do hGetLines stdin hPutStrLns stdout filter startswith",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "hGetLines",
        "normalized": "a-\u003eIO[String]",
        "package": "MissingH",
        "partial": "Get Lines",
        "signature": "a-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hInteract",
      "description": {
        "fct-descr": "\u003cp\u003eThis is similar to the built-in \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e, but works\non any handle, not just stdin and stdout.\n\u003c/p\u003e\u003cp\u003eIn other words:\n\u003c/p\u003e\u003cpre\u003e interact = hInteract stdin stdout\n\u003c/pre\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e b -\u003e (String -\u003e String) -\u003e IO ()",
        "fct-source": "src/System-IO-Utils.html#hInteract",
        "fct-type": "function",
        "title": "hInteract"
      },
      "index": {
        "description": "This is similar to the built-in interact but works on any handle not just stdin and stdout In other words interact hInteract stdin stdout",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "hInteract",
        "normalized": "a-\u003eb-\u003e(String-\u003eString)-\u003eIO()",
        "package": "MissingH",
        "partial": "Interact",
        "signature": "a-\u003eb-\u003e(String-\u003eString)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hLineCopy",
      "description": {
        "fct-descr": "\u003cp\u003eCopies from one handle to another in text mode (with lines).\nLike \u003ccode\u003ehBlockCopy\u003c/code\u003e, this implementation is nice:\n\u003c/p\u003e\u003cpre\u003e hLineCopy hin hout = hLineInteract hin hout id\n\u003c/pre\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e b -\u003e IO ()",
        "fct-source": "src/System-IO-Utils.html#hLineCopy",
        "fct-type": "function",
        "title": "hLineCopy"
      },
      "index": {
        "description": "Copies from one handle to another in text mode with lines Like hBlockCopy this implementation is nice hLineCopy hin hout hLineInteract hin hout id",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "hLineCopy",
        "normalized": "a-\u003eb-\u003eIO()",
        "package": "MissingH",
        "partial": "Line Copy",
        "signature": "a-\u003eb-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hLineInteract",
      "description": {
        "fct-descr": "\u003cp\u003eLine-based interaction over arbitrary handles.  This is similar\nto wrapping hInteract with \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOne could view this function like this:\n\u003c/p\u003e\u003cpre\u003e hLineInteract finput foutput func =\n     let newf = unlines . func . lines in\n         hInteract finput foutput newf\n\u003c/pre\u003e\u003cp\u003eThough the actual implementation is this for efficiency:\n\u003c/p\u003e\u003cpre\u003e hLineInteract finput foutput func =\n     do\n     lines \u003c- hGetLines finput\n     hPutStrLns foutput (func lines)\n\u003c/pre\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e b -\u003e ([String] -\u003e [String]) -\u003e IO ()",
        "fct-source": "src/System-IO-Utils.html#hLineInteract",
        "fct-type": "function",
        "title": "hLineInteract"
      },
      "index": {
        "description": "Line-based interaction over arbitrary handles This is similar to wrapping hInteract with lines and unlines One could view this function like this hLineInteract finput foutput func let newf unlines func lines in hInteract finput foutput newf Though the actual implementation is this for efficiency hLineInteract finput foutput func do lines hGetLines finput hPutStrLns foutput func lines",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "hLineInteract",
        "normalized": "a-\u003eb-\u003e([String]-\u003e[String])-\u003eIO()",
        "package": "MissingH",
        "partial": "Line Interact",
        "signature": "a-\u003eb-\u003e([String]-\u003e[String])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:hPutStrLns",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of strings, output a line containing each item, adding\nnewlines as appropriate.  The list is not expected to have newlines already.\n\u003c/p\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e [String] -\u003e IO ()",
        "fct-source": "src/System-IO-Utils.html#hPutStrLns",
        "fct-type": "function",
        "title": "hPutStrLns"
      },
      "index": {
        "description": "Given list of strings output line containing each item adding newlines as appropriate The list is not expected to have newlines already",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "hPutStrLns",
        "normalized": "a-\u003e[String]-\u003eIO()",
        "package": "MissingH",
        "partial": "Put Str Lns",
        "signature": "a-\u003e[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:lazyMapM",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a given function to every item in a list, and returns\nthe new list.  Unlike the system's mapM, items are evaluated lazily. \n\u003c/p\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [b]",
        "fct-source": "src/System-IO-Utils.html#lazyMapM",
        "fct-type": "function",
        "title": "lazyMapM"
      },
      "index": {
        "description": "Applies given function to every item in list and returns the new list Unlike the system mapM items are evaluated lazily",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "lazyMapM",
        "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
        "package": "MissingH",
        "partial": "Map",
        "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:lineCopy",
      "description": {
        "fct-descr": "\u003cp\u003eCopies from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e using lines.  An alias for \u003ccode\u003e\u003ca\u003ehLineCopy\u003c/a\u003e\u003c/code\u003e\nover \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "IO ()",
        "fct-source": "src/System-IO-Utils.html#lineCopy",
        "fct-type": "function",
        "title": "lineCopy"
      },
      "index": {
        "description": "Copies from stdin to stdout using lines An alias for hLineCopy over stdin and stdout",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "lineCopy",
        "normalized": "IO()",
        "package": "MissingH",
        "partial": "Copy",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:lineInteract",
      "description": {
        "fct-descr": "\u003cp\u003eLine-based interaction.  This is similar to wrapping your\ninteract functions with \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e.  This equality holds:\n\u003c/p\u003e\u003cpre\u003e lineInteract = hLineInteract stdin stdout\n\u003c/pre\u003e\u003cp\u003eHere's an example:\n\u003c/p\u003e\u003cpre\u003e main = lineInteract (filter (startswith \"1\"))\n\u003c/pre\u003e\u003cp\u003eThis will act as a simple version of grep -- all lines that start with 1\nwill be displayed; all others will be ignored.\n\u003c/p\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "([String] -\u003e [String]) -\u003e IO ()",
        "fct-source": "src/System-IO-Utils.html#lineInteract",
        "fct-type": "function",
        "title": "lineInteract"
      },
      "index": {
        "description": "Line-based interaction This is similar to wrapping your interact functions with lines and unlines This equality holds lineInteract hLineInteract stdin stdout Here an example main lineInteract filter startswith This will act as simple version of grep all lines that start with will be displayed all others will be ignored",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "lineInteract",
        "normalized": "([String]-\u003e[String])-\u003eIO()",
        "package": "MissingH",
        "partial": "Interact",
        "signature": "([String]-\u003e[String])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:optimizeForBatch",
      "description": {
        "fct-descr": "\u003cp\u003eSets stdin and stdout to be block-buffered.  This can save a huge amount\nof system resources since far fewer syscalls are made, and can make programs\nrun much faster. \n\u003c/p\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "IO ()",
        "fct-source": "src/System-IO-Utils.html#optimizeForBatch",
        "fct-type": "function",
        "title": "optimizeForBatch"
      },
      "index": {
        "description": "Sets stdin and stdout to be block-buffered This can save huge amount of system resources since far fewer syscalls are made and can make programs run much faster",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "optimizeForBatch",
        "normalized": "IO()",
        "package": "MissingH",
        "partial": "For Batch",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-Utils.html#v:optimizeForInteraction",
      "description": {
        "fct-descr": "\u003cp\u003eSets stdin and stdout to be line-buffered.  This saves resources\non stdout, but not many on stdin, since it it still looking for newlines. \n\u003c/p\u003e",
        "fct-module": "System.IO.Utils",
        "fct-package": "MissingH",
        "fct-signature": "IO ()",
        "fct-source": "src/System-IO-Utils.html#optimizeForInteraction",
        "fct-type": "function",
        "title": "optimizeForInteraction"
      },
      "index": {
        "description": "Sets stdin and stdout to be line-buffered This saves resources on stdout but not many on stdin since it it still looking for newlines",
        "hierarchy": "System IO Utils",
        "module": "System.IO.Utils",
        "name": "optimizeForInteraction",
        "normalized": "IO()",
        "package": "MissingH",
        "partial": "For Interaction",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-IO-WindowsCompat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides some types and related items on Windows to be compatible with\nthe System.Posix.* libraries\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eSystem.IO.StatCompat\u003c/a\u003e, which this module re-exports.\n\u003c/p\u003e\u003cp\u003eOn non-Windows platforms, this module does nothing.\n\u003c/p\u003e\u003cp\u003eOn Windows, it re-exports \u003ca\u003eSystem.IO.StatCompat\u003c/a\u003e.  It also provides various\nfile type information modes that are otherwise in \u003ca\u003eSystem.Posix.Types\u003c/a\u003e or\n\u003ca\u003eSystem.Posix.Files\u003c/a\u003e.  It also provides\na rudimentary implemention of getFileStatus that emulates the Posix call\nto stat(2).\n\u003c/p\u003e\u003cp\u003eCommon usage might be like this:\n\u003c/p\u003e\u003cpre\u003eimport System.Posix.Types\n#if (defined(mingw32_HOST_OS) || defined(mingw32_TARGET_OS) || defined(__MINGW32__))\nimport System.IO.WindowsCompat\n#else\nimport System.Posix.Files\n#endif\n\u003c/pre\u003e\u003cp\u003eOr, to avoid having to use CPP and make things even easier, just import\n\u003ca\u003eSystem.IO.PlafCompat\u003c/a\u003e, which essentially does the above.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.WindowsCompat",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-IO-WindowsCompat.html",
        "fct-type": "module",
        "title": "WindowsCompat"
      },
      "index": {
        "description": "Provides some types and related items on Windows to be compatible with the System.Posix libraries See also System.IO.StatCompat which this module re-exports On non-Windows platforms this module does nothing On Windows it re-exports System.IO.StatCompat It also provides various file type information modes that are otherwise in System.Posix.Types or System.Posix.Files It also provides rudimentary implemention of getFileStatus that emulates the Posix call to stat Common usage might be like this import System.Posix.Types if defined mingw32 HOST OS defined mingw32 TARGET OS defined MINGW32 import System.IO.WindowsCompat else import System.Posix.Files endif Or to avoid having to use CPP and make things even easier just import System.IO.PlafCompat which essentially does the above",
        "hierarchy": "System IO WindowsCompat",
        "module": "System.IO.WindowsCompat",
        "name": "WindowsCompat",
        "normalized": "",
        "package": "MissingH",
        "partial": "Windows Compat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-Glob.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for expanding wildcards, filenames, and pathnames.\n\u003c/p\u003e\u003cp\u003eFor information on the metacharacters recognized, please see the notes\nin \u003ca\u003eSystem.Path.WildMatch\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Path.Glob",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Path-Glob.html",
        "fct-type": "module",
        "title": "Glob"
      },
      "index": {
        "description": "Functions for expanding wildcards filenames and pathnames For information on the metacharacters recognized please see the notes in System.Path.WildMatch",
        "hierarchy": "System Path Glob",
        "module": "System.Path.Glob",
        "name": "Glob",
        "normalized": "",
        "package": "MissingH",
        "partial": "Glob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-Glob.html#v:glob",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a pattern.  Returns a list of names that match that pattern.\nThe pattern is evaluated by \u003ca\u003eSystem.Path.WildMatch\u003c/a\u003e.  This function\ndoes not perform tilde or environment variable expansion.\n\u003c/p\u003e\u003cp\u003eFilenames that begin with a dot are not included in the result set unless\nthat component of the pattern also begins with a dot.\n\u003c/p\u003e\u003cp\u003eIn MissingH, this function is defined as:\n\u003c/p\u003e\u003cpre\u003eglob = vGlob SystemFS\n\u003c/pre\u003e",
        "fct-module": "System.Path.Glob",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e IO [FilePath]",
        "fct-source": "src/System-Path-Glob.html#glob",
        "fct-type": "function",
        "title": "glob"
      },
      "index": {
        "description": "Takes pattern Returns list of names that match that pattern The pattern is evaluated by System.Path.WildMatch This function does not perform tilde or environment variable expansion Filenames that begin with dot are not included in the result set unless that component of the pattern also begins with dot In MissingH this function is defined as glob vGlob SystemFS",
        "hierarchy": "System Path Glob",
        "module": "System.Path.Glob",
        "name": "glob",
        "normalized": "FilePath-\u003eIO[FilePath]",
        "package": "MissingH",
        "partial": "",
        "signature": "FilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-Glob.html#v:vGlob",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eglob\u003c/a\u003e\u003c/code\u003e, but works on both the system (\u003ca\u003ereal\u003c/a\u003e) and HVFS virtual\nfilesystems. \n\u003c/p\u003e",
        "fct-module": "System.Path.Glob",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO [FilePath]",
        "fct-source": "src/System-Path-Glob.html#vGlob",
        "fct-type": "function",
        "title": "vGlob"
      },
      "index": {
        "description": "Like glob but works on both the system real and HVFS virtual filesystems",
        "hierarchy": "System Path Glob",
        "module": "System.Path.Glob",
        "name": "vGlob",
        "normalized": "a-\u003eFilePath-\u003eIO[FilePath]",
        "package": "MissingH",
        "partial": "Glob",
        "signature": "a-\u003eFilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level path name manipulations.\n\u003c/p\u003e\u003cp\u003eWritten by Volker Wysk\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Path-NameManip.html",
        "fct-type": "module",
        "title": "NameManip"
      },
      "index": {
        "description": "Low-level path name manipulations Written by Volker Wysk",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "NameManip",
        "normalized": "",
        "package": "MissingH",
        "partial": "Name Manip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:absolute_path",
      "description": {
        "fct-descr": "\u003cp\u003eMake a path absolute, using the current working directory.\n\u003c/p\u003e\u003cp\u003eThis makes a relative path absolute with respect to the current\nworking directory. An absolute path is returned unmodified.\n\u003c/p\u003e\u003cp\u003eThe current working directory is determined with \u003ccode\u003egetCurrentDirectory\u003c/code\u003e\nwhich means that symbolic links in it are expanded and the path is\nnormalised. This is different from \u003ccode\u003epwd\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e IO String",
        "fct-type": "function",
        "title": "absolute_path"
      },
      "index": {
        "description": "Make path absolute using the current working directory This makes relative path absolute with respect to the current working directory An absolute path is returned unmodified The current working directory is determined with getCurrentDirectory which means that symbolic links in it are expanded and the path is normalised This is different from pwd",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "absolute_path",
        "normalized": "String-\u003eIO String",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:absolute_path-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMake a path absolute.\n\u003c/p\u003e\u003cp\u003eThis makes a relative path absolute with respect to a specified\ndirectory. An absolute path is returned unmodified.\n\u003c/p\u003e\u003cp\u003eThe order of the arguments can be confusing. You should rather use \u003ccode\u003e\u003ca\u003eabsolute_path_by\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eabsolute_path'\u003c/code\u003e is included for backwards compatibility.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e String-\u003e String",
        "fct-type": "function",
        "title": "absolute_path'"
      },
      "index": {
        "description": "Make path absolute This makes relative path absolute with respect to specified directory An absolute path is returned unmodified The order of the arguments can be confusing You should rather use absolute path by absolute path is included for backwards compatibility",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "absolute_path'",
        "normalized": "String-\u003eString-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:absolute_path_by",
      "description": {
        "fct-descr": "\u003cp\u003eMake a path absolute.\n\u003c/p\u003e\u003cp\u003eThis makes a relative path absolute with respect to a specified\ndirectory. An absolute path is returned unmodified.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e String-\u003e String",
        "fct-type": "function",
        "title": "absolute_path_by"
      },
      "index": {
        "description": "Make path absolute This makes relative path absolute with respect to specified directory An absolute path is returned unmodified",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "absolute_path_by",
        "normalized": "String-\u003eString-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:dir_part",
      "description": {
        "fct-descr": "\u003cp\u003eGet the directory part of a path.\n\u003c/p\u003e\u003cpre\u003edir_part = fst . split_path\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/System-Path-NameManip.html#dir_part",
        "fct-type": "function",
        "title": "dir_part"
      },
      "index": {
        "description": "Get the directory part of path dir part fst split path See split path",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "dir_part",
        "normalized": "String-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:filename_part",
      "description": {
        "fct-descr": "\u003cp\u003eGet the last path component of a path.\n\u003c/p\u003e\u003cpre\u003efilename_part = snd . split_path\n\u003c/pre\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003efilename_part \"foo/bar\" == \"bar\"\nfilename_part \".\"       == \".\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/System-Path-NameManip.html#filename_part",
        "fct-type": "function",
        "title": "filename_part"
      },
      "index": {
        "description": "Get the last path component of path filename part snd split path Examples filename part foo bar bar filename part See split path",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "filename_part",
        "normalized": "String-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:guess_dotdot",
      "description": {
        "fct-descr": "\u003cp\u003eGuess the \u003ccode\u003e\"..\"\u003c/code\u003e-component free, normalised form of a path. The transformation is purely syntactic. \u003ccode\u003e\"..\"\u003c/code\u003e path components will be removed, along\n   with their preceding path components. This will produce\n   erroneous results when the path contains symlinks. If the path contains leading \u003ccode\u003e\"..\"\u003c/code\u003e components, or more \u003ccode\u003e\"..\"\u003c/code\u003e components than preceeding normal\n   components, then the \u003ccode\u003e\"..\"\u003c/code\u003e components can't be normalised away. In this case, the result is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eguess_dotdot = fmap unslice_path . guess_dotdot_comps . slice_path\n\u003c/pre\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e Maybe String",
        "fct-type": "function",
        "title": "guess_dotdot"
      },
      "index": {
        "description": "Guess the component free normalised form of path The transformation is purely syntactic path components will be removed along with their preceding path components This will produce erroneous results when the path contains symlinks If the path contains leading components or more components than preceeding normal components then the components can be normalised away In this case the result is Nothing guess dotdot fmap unslice path guess dotdot comps slice path",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "guess_dotdot",
        "normalized": "String-\u003eMaybe String",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:guess_dotdot_comps",
      "description": {
        "fct-descr": "\u003cp\u003eGuess the \u003ccode\u003e\"..\"\u003c/code\u003e-component free form of a path, specified as a list of path components, by syntactically removing them, along with the preceding\n   path components. This will produce\n   erroneous results when the path contains symlinks. If the path contains leading \u003ccode\u003e\"..\"\u003c/code\u003e components, or more \u003ccode\u003e\"..\"\u003c/code\u003e components than preceeding normal\n   components, then the \u003ccode\u003e\"..\"\u003c/code\u003e components can't be normalised away. In this case, the result is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "[String]-\u003e Maybe [String]",
        "fct-type": "function",
        "title": "guess_dotdot_comps"
      },
      "index": {
        "description": "Guess the component free form of path specified as list of path components by syntactically removing them along with the preceding path components This will produce erroneous results when the path contains symlinks If the path contains leading components or more components than preceeding normal components then the components can be normalised away In this case the result is Nothing",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "guess_dotdot_comps",
        "normalized": "[String]-\u003eMaybe[String]",
        "package": "MissingH",
        "partial": "",
        "signature": "[String]-\u003eMaybe[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:normalise_path",
      "description": {
        "fct-descr": "\u003cp\u003eNormalise a path. This is done by reducing repeated \u003ccode\u003e/\u003c/code\u003e characters to one, and removing\n\u003ccode\u003e.\u003c/code\u003e path components. \u003ccode\u003e..\u003c/code\u003e path components are left intact, because of possible symlinks.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enormalise_path\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e String",
        "fct-type": "function",
        "title": "normalise_path"
      },
      "index": {
        "description": "Normalise path This is done by reducing repeated characters to one and removing path components path components are left intact because of possible symlinks normalise path unslice path slice path",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "normalise_path",
        "normalized": "String-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:slice_filename",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a file name in components. This are the base file name and the\nsuffixes, which are separated by dots. If the name starts with a dot, it is\nregarded as part of the base name. The result is a list of file name\ncomponents. The filename may be a path. In this case, everything up to the\nlast path component will be returned as part of the base file name. The\npath gets normalised thereby.\n\u003c/p\u003e\u003cp\u003eNo empty suffixes are returned. If the file name contains several\nconsecutive dots, they are regared as part of the preceding file name\ncomponent.\n\u003c/p\u003e\u003cp\u003eConcateneting the name components and adding dots, reproduces the\noriginal name, with a normalised path:\n\u003ccode\u003econcat . intersperse \".\" . \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003enormalise\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the last path component might be \"\u003ccode\u003e..\u003c/code\u003e\". Then it is not\npossible to deduce the refered directory's name from the path. An IO\naction for getting the real path is then necessary.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e \"a.b//./.foo.tar.gz\" == [\"a.b/.foo\",\"tar\",\"gz\"]\n\u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e \".x..y.\"             == [\".x.\", \"y.\"]\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunslice_filename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eslice_filename'\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e [String]",
        "fct-type": "function",
        "title": "slice_filename"
      },
      "index": {
        "description": "Split file name in components This are the base file name and the suffixes which are separated by dots If the name starts with dot it is regarded as part of the base name The result is list of file name components The filename may be path In this case everything up to the last path component will be returned as part of the base file name The path gets normalised thereby No empty suffixes are returned If the file name contains several consecutive dots they are regared as part of the preceding file name component Concateneting the name components and adding dots reproduces the original name with normalised path concat intersperse slice filename normalise Note that the last path component might be Then it is not possible to deduce the refered directory name from the path An IO action for getting the real path is then necessary Examples slice filename a.b foo.tar.gz a.b foo tar gz slice filename x..y See unslice filename slice filename",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "slice_filename",
        "normalized": "String-\u003e[String]",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:slice_filename-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a variant of \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e. It is like \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e, except for\nbeing more efficient, and the filename must not contain any preceding path,\nsince this case isn't considered.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunslice_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e [String]",
        "fct-type": "function",
        "title": "slice_filename'"
      },
      "index": {
        "description": "This is variant of slice filename It is like slice filename except for being more efficient and the filename must not contain any preceding path since this case isn considered See slice filename unslice filename",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "slice_filename'",
        "normalized": "String-\u003e[String]",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:slice_path",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a path in components. Repeated \"\u003ccode\u003e/\u003c/code\u003e\" characters don't lead to empty\ncomponents. \"\u003ccode\u003e.\u003c/code\u003e\" path components are removed. If the path is absolute, the first component\nwill start with \"\u003ccode\u003e/\u003c/code\u003e\". \"\u003ccode\u003e..\u003c/code\u003e\" components are left intact. They can't be simply\nremoved, because the preceding component might be a symlink. In this case,\n\u003ccode\u003erealpath\u003c/code\u003e is probably what you need.\n\u003c/p\u003e\u003cp\u003eThe case that the path is empty, is probably an error. However, it is\ntreated like \"\u003ccode\u003e.\u003c/code\u003e\", yielding an empty path components list.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003eslice_path \"/\"        = [\"/\"]\nslice_path \"/foo/bar\" = [\"/foo\",\"bar\"]\nslice_path \"..//./\"   = [\"..\"]\nslice_path \".\"        = []\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003erealpath\u003c/code\u003e, \u003ccode\u003erealpath_s\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e [String]",
        "fct-type": "function",
        "title": "slice_path"
      },
      "index": {
        "description": "Split path in components Repeated characters don lead to empty components path components are removed If the path is absolute the first component will start with components are left intact They can be simply removed because the preceding component might be symlink In this case realpath is probably what you need The case that the path is empty is probably an error However it is treated like yielding an empty path components list Examples slice path slice path foo bar foo bar slice path slice path See unslice path realpath realpath",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "slice_path",
        "normalized": "String-\u003e[String]",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:split3",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a path in directory, base file name and suffix.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e (String, String, String)",
        "fct-type": "function",
        "title": "split3"
      },
      "index": {
        "description": "Split path in directory base file name and suffix",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "split3",
        "normalized": "String-\u003e(String,String,String)",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e(String,String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:split_filename",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a file name in prefix and suffix. If there isn't any suffix in\nthe file name, then return an empty suffix. A dot at the beginning or at\nthe end is not regarded as introducing a suffix.\n\u003c/p\u003e\u003cp\u003eThe last path component is what is being split. This isn't the same as\nsplitting the string at the last dot. For instance, if the file name\ndoesn't contain any dot, dots in previous path component's aren't mistaken\nas introducing suffixes.\n\u003c/p\u003e\u003cp\u003eThe path part is returned in normalised form. This means, \u003ccode\u003e\".\"\u003c/code\u003e components\nare removed, and multiple \"\u003ccode\u003e/\u003c/code\u003e\"s are reduced to one.\n\u003c/p\u003e\u003cp\u003eNote that there isn't any plausibility check performed on the suffix. If the file name doesn't have a suffix, but happens to contain a dot, then this\ndot is mistaken as introducing a suffix.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003esplit_filename \"path/to/foo.bar\"                             = (\"path/to/foo\",\"bar\")\nsplit_filename \"path/to/foo\"                                 = (\"path/to/foo\",\"\")\nsplit_filename \"/path.to/foo\"                                = (\"/path.to/foo\",\"\")\nsplit_filename \"a///./x\"                                     = (\"a/x\",\"\")\nsplit_filename \"dir.suffix/./\"                               = (\"dir\",\"suffix\")\nsplit_filename \"Photographie, Das 20. Jahrhundert (300 dpi)\" = (\"Photographie, Das 20\", \" Jahrhundert (300 dpi)\")\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e, 'split_filename\\''\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e (String, String)",
        "fct-type": "function",
        "title": "split_filename"
      },
      "index": {
        "description": "Split file name in prefix and suffix If there isn any suffix in the file name then return an empty suffix dot at the beginning or at the end is not regarded as introducing suffix The last path component is what is being split This isn the same as splitting the string at the last dot For instance if the file name doesn contain any dot dots in previous path component aren mistaken as introducing suffixes The path part is returned in normalised form This means components are removed and multiple are reduced to one Note that there isn any plausibility check performed on the suffix If the file name doesn have suffix but happens to contain dot then this dot is mistaken as introducing suffix Examples split filename path to foo.bar path to foo bar split filename path to foo path to foo split filename path.to foo path.to foo split filename split filename dir.suffix dir suffix split filename Photographie Das Jahrhundert dpi Photographie Das Jahrhundert dpi See slice path split filename",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "split_filename",
        "normalized": "String-\u003e(String,String)",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:split_filename-39-",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e. This is a more efficient version\nof \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e, for the case that you know the string is\nis a pure file name without any slashes.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e (String, String)",
        "fct-type": "function",
        "title": "split_filename'"
      },
      "index": {
        "description": "Variant of split filename This is more efficient version of split filename for the case that you know the string is is pure file name without any slashes See split filename",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "split_filename'",
        "normalized": "String-\u003e(String,String)",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:split_path",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a path in directory and file name. Only in the case that the\nsupplied path is empty, both parts are empty strings. Otherwise, \u003ccode\u003e\".\"\u003c/code\u003e is filled in\nfor the corresponding part, if necessary. Unless the path is empty,\nconcatenating the returned path and file name components with a slash in\nbetween, makes a valid path to the file.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esplit_path\u003c/code\u003e splits off the last path component. This\nisn't the same as the text after the last \u003ccode\u003e/\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the last path component might be \u003ccode\u003e\"..\"\u003c/code\u003e. Then it is not\npossible to deduce the refered directory's name from the path. Then an IO\naction for getting the real path is necessary.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003esplit_path \"/a/b/c\"      == (\"/a/b\", \"c\")\nsplit_path \"foo\"         == (\".\", \"foo\")\nsplit_path \"foo/bar\"     == (\"foo\", \"bar\")\nsplit_path \"foo/..\"      == (\"foo\", \"..\")\nsplit_path \".\"           == (\".\", \".\")\nsplit_path \"\"            == (\"\", \"\")\nsplit_path \"/foo\"        == (\"/\", \"foo\")\nsplit_path \"foo/\"        == (\".\", \"foo\")\nsplit_path \"foo/.\"       == (\".\", \"foo\")\nsplit_path \"foo///./bar\" == (\"foo\", \"bar\")\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e (String, String)",
        "fct-type": "function",
        "title": "split_path"
      },
      "index": {
        "description": "Split path in directory and file name Only in the case that the supplied path is empty both parts are empty strings Otherwise is filled in for the corresponding part if necessary Unless the path is empty concatenating the returned path and file name components with slash in between makes valid path to the file split path splits off the last path component This isn the same as the text after the last Note that the last path component might be Then it is not possible to deduce the refered directory name from the path Then an IO action for getting the real path is necessary Examples split path split path foo foo split path foo bar foo bar split path foo foo split path split path split path foo foo split path foo foo split path foo foo split path foo bar foo bar See slice path",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "split_path",
        "normalized": "String-\u003e(String,String)",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:test_suffix",
      "description": {
        "fct-descr": "\u003cp\u003eTest a path for a specific suffix and split it off.\n\u003c/p\u003e\u003cp\u003eIf the path ends with the suffix, then the result is \u003ccode\u003eJust\nprefix\u003c/code\u003e, where \u003ccode\u003eprefix\u003c/code\u003e is the normalised path\nwithout the suffix. Otherwise it's \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e String-\u003e Maybe String",
        "fct-type": "function",
        "title": "test_suffix"
      },
      "index": {
        "description": "Test path for specific suffix and split it off If the path ends with the suffix then the result is Just prefix where prefix is the normalised path without the suffix Otherwise it Nothing",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "test_suffix",
        "normalized": "String-\u003eString-\u003eMaybe String",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eString-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unslice_filename",
      "description": {
        "fct-descr": "\u003cp\u003eForm file name from file name components, interspersing dots. This is\nthe inverse of \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e, except for normalisation of any path.\n\u003c/p\u003e\u003cpre\u003e unslice_filename = concat . intersperse \".\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "[String]-\u003e String",
        "fct-type": "function",
        "title": "unslice_filename"
      },
      "index": {
        "description": "Form file name from file name components interspersing dots This is the inverse of slice filename except for normalisation of any path unslice filename concat intersperse See slice filename",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "unslice_filename",
        "normalized": "[String]-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unslice_path",
      "description": {
        "fct-descr": "\u003cp\u003eForm a path from path components. This isn't the inverse\nof \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e, since \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\nnormalises the path.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "[String]-\u003e String",
        "fct-type": "function",
        "title": "unslice_path"
      },
      "index": {
        "description": "Form path from path components This isn the inverse of slice path since unslice path slice path normalises the path See slice path",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "unslice_path",
        "normalized": "[String]-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unsplit3",
      "description": {
        "fct-descr": "\u003cp\u003eForm path from directory, base file name and suffix parts.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "(String, String, String)-\u003e String",
        "fct-type": "function",
        "title": "unsplit3"
      },
      "index": {
        "description": "Form path from directory base file name and suffix parts",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "unsplit3",
        "normalized": "(String,String,String)-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "(String,String,String)-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unsplit_filename",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e. Concatenate prefix and suffix, adding\na dot in between, iff the suffix is not empty. The path part of the prefix is\nnormalised.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "(String, String)-\u003e String",
        "fct-type": "function",
        "title": "unsplit_filename"
      },
      "index": {
        "description": "Inverse of split filename Concatenate prefix and suffix adding dot in between iff the suffix is not empty The path part of the prefix is normalised See split filename",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "unsplit_filename",
        "normalized": "(String,String)-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "(String,String)-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-NameManip.html#v:unsplit_path",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e, except for normalisation.\n\u003c/p\u003e\u003cp\u003eThis concatenates two paths, and takes care of \u003ccode\u003e\".\"\u003c/code\u003e and empty paths. When the two components are the result of \u003ccode\u003esplit_path\u003c/code\u003e, then \u003ccode\u003eunsplit_path\u003c/code\u003e\ncreates a normalised path. It is best documented by its definition:\n\u003c/p\u003e\u003cpre\u003eunsplit_path (\".\", \"\") = \".\"\nunsplit_path (\"\", \".\") = \".\"\nunsplit_path (\".\", q)  = q\nunsplit_path (\"\", q)   = q\nunsplit_path (p, \"\")   = p\nunsplit_path (p, \".\")  = p\nunsplit_path (p, q)    = p ++ \"/\" ++ q\n\u003c/pre\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003eunsplit_path (\"\", \"\")     == \"\"\nunsplit_path (\".\", \"\")    == \".\"\nunsplit_path (\".\", \".\")   == \".\"\nunsplit_path (\"foo\", \".\") == \"foo\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Path.NameManip",
        "fct-package": "MissingH",
        "fct-signature": "(String, String)-\u003e String",
        "fct-type": "function",
        "title": "unsplit_path"
      },
      "index": {
        "description": "Inverse of split path except for normalisation This concatenates two paths and takes care of and empty paths When the two components are the result of split path then unsplit path creates normalised path It is best documented by its definition unsplit path unsplit path unsplit path unsplit path unsplit path unsplit path unsplit path Examples unsplit path unsplit path unsplit path unsplit path foo foo See split path",
        "hierarchy": "System Path NameManip",
        "module": "System.Path.NameManip",
        "name": "unsplit_path",
        "normalized": "(String,String)-\u003eString",
        "package": "MissingH",
        "partial": "",
        "signature": "(String,String)-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-WildMatch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMatching filenames with wildcards.  See also \u003ca\u003eSystem.Path.Glob\u003c/a\u003e for\nsupport for generating lists of files based on wildcards.\n\u003c/p\u003e\u003cp\u003eInspired by fnmatch.py, part of the Python standard library.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThe input wildcard for functions in this module is expected to be in\nthe standard style of Posix shells.\n\u003c/p\u003e\u003cp\u003eThat is:\n\u003c/p\u003e\u003cpre\u003e? matches exactly one character\n\\* matches zero or more characters\n[list] matches any character in list\n[!list] matches any character not in the list\n\u003c/pre\u003e\u003cp\u003eThe returned regular expression will always end in $ but never begins\nwith ^, making it suitable for appending to the end of paths.  If you want to\nmatch a given filename directly, you should prepend the ^ character to the\nreturned value from this function.\n\u003c/p\u003e\u003cp\u003ePlease note:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Neither the path separator (the slash or backslash) nor the period carry\nany special meaning for the functions in this module.  That is, \u003ccode\u003e*\u003c/code\u003e will\nmatch \u003ccode\u003e/\u003c/code\u003e in a filename.  If this is not the behavior you want, you probably\nwant \u003ca\u003eSystem.Path.Glob\u003c/a\u003e instead of this module.\n\u003c/li\u003e\u003cli\u003e Unlike the Unix shell, filenames that begin with a period are not ignored\nby this module.  That is, \u003ccode\u003e*.txt\u003c/code\u003e will match \u003ccode\u003e.test.txt\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e This module does not current permit escaping of special characters.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "System.Path.WildMatch",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Path-WildMatch.html",
        "fct-type": "module",
        "title": "WildMatch"
      },
      "index": {
        "description": "Matching filenames with wildcards See also System.Path.Glob for support for generating lists of files based on wildcards Inspired by fnmatch.py part of the Python standard library Written by John Goerzen jgoerzen@complete.org The input wildcard for functions in this module is expected to be in the standard style of Posix shells That is matches exactly one character matches zero or more characters list matches any character in list list matches any character not in the list The returned regular expression will always end in but never begins with making it suitable for appending to the end of paths If you want to match given filename directly you should prepend the character to the returned value from this function Please note Neither the path separator the slash or backslash nor the period carry any special meaning for the functions in this module That is will match in filename If this is not the behavior you want you probably want System.Path.Glob instead of this module Unlike the Unix shell filenames that begin with period are not ignored by this module That is txt will match test.txt This module does not current permit escaping of special characters",
        "hierarchy": "System Path WildMatch",
        "module": "System.Path.WildMatch",
        "name": "WildMatch",
        "normalized": "",
        "package": "MissingH",
        "partial": "Wild Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-WildMatch.html#v:wildCheckCase",
      "description": {
        "fct-descr": "\u003cp\u003eCheck the given name against the given pattern, being case-sensitive.\n\u003c/p\u003e\u003cp\u003eThe given pattern is forced to match the given name starting at the beginning.\n\u003c/p\u003e",
        "fct-module": "System.Path.WildMatch",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e String-\u003e Bool",
        "fct-type": "function",
        "title": "wildCheckCase"
      },
      "index": {
        "description": "Check the given name against the given pattern being case-sensitive The given pattern is forced to match the given name starting at the beginning",
        "hierarchy": "System Path WildMatch",
        "module": "System.Path.WildMatch",
        "name": "wildCheckCase",
        "normalized": "String-\u003eString-\u003eBool",
        "package": "MissingH",
        "partial": "Check Case",
        "signature": "String-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path-WildMatch.html#v:wildToRegex",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a wildcard to an (uncompiled) regular expression.\n\u003c/p\u003e",
        "fct-module": "System.Path.WildMatch",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/System-Path-WildMatch.html#wildToRegex",
        "fct-type": "function",
        "title": "wildToRegex"
      },
      "index": {
        "description": "Convert wildcard to an uncompiled regular expression",
        "hierarchy": "System Path WildMatch",
        "module": "System.Path.WildMatch",
        "name": "wildToRegex",
        "normalized": "String-\u003eString",
        "package": "MissingH",
        "partial": "To Regex",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various helpful utilities for dealing with path and\nfile names, directories, and related support.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Path.html",
        "fct-type": "module",
        "title": "Path"
      },
      "index": {
        "description": "This module provides various helpful utilities for dealing with path and file names directories and related support Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "Path",
        "normalized": "",
        "package": "MissingH",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:absNormPath",
      "description": {
        "fct-descr": "\u003cp\u003eMake an absolute, normalized version of a path with all double slashes,\ndot, and dotdot entries removed.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the base for the absolut calculation; in many cases,\nit would correspond to the current working directory.\n\u003c/p\u003e\u003cp\u003eThe second parameter is the pathname to transform.  If it is already absolute,\nthe first parameter is ignored.\n\u003c/p\u003e\u003cp\u003eNothing may be returned if there's an error; for instance, too many \u003ccode\u003e..\u003c/code\u003e entries\nfor the given path.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e String-\u003e Maybe String",
        "fct-type": "function",
        "title": "absNormPath"
      },
      "index": {
        "description": "Make an absolute normalized version of path with all double slashes dot and dotdot entries removed The first parameter is the base for the absolut calculation in many cases it would correspond to the current working directory The second parameter is the pathname to transform If it is already absolute the first parameter is ignored Nothing may be returned if there an error for instance too many entries for the given path",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "absNormPath",
        "normalized": "String-\u003eString-\u003eMaybe String",
        "package": "MissingH",
        "partial": "Norm Path",
        "signature": "String-\u003eString-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:bracketCWD",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the current working directory to the given path,\nexecutes the given I/O action, then changes back to the original directory,\neven if the I/O action raised an exception. \n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "FilePath -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-Path.html#bracketCWD",
        "fct-type": "function",
        "title": "bracketCWD"
      },
      "index": {
        "description": "Changes the current working directory to the given path executes the given action then changes back to the original directory even if the action raised an exception",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "bracketCWD",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "MissingH",
        "partial": "CWD",
        "signature": "FilePath-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:brackettmpdir",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a temporary directory for your use via \u003ccode\u003e\u003ca\u003emktmpdir\u003c/a\u003e\u003c/code\u003e,\nruns the specified action (passing in the directory name), then\nremoves the directory and all its contents when the action completes (or raises\nan exception. \n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e (String -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-Path.html#brackettmpdir",
        "fct-type": "function",
        "title": "brackettmpdir"
      },
      "index": {
        "description": "Creates temporary directory for your use via mktmpdir runs the specified action passing in the directory name then removes the directory and all its contents when the action completes or raises an exception",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "brackettmpdir",
        "normalized": "String-\u003e(String-\u003eIO a)-\u003eIO a",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003e(String-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:brackettmpdirCWD",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given I/O action with the CWD set to the given tmp dir,\nremoving the tmp dir and changing CWD back afterwards, even if there\nwas an exception. \n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-Path.html#brackettmpdirCWD",
        "fct-type": "function",
        "title": "brackettmpdirCWD"
      },
      "index": {
        "description": "Runs the given action with the CWD set to the given tmp dir removing the tmp dir and changing CWD back afterwards even if there was an exception",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "brackettmpdirCWD",
        "normalized": "String-\u003eIO a-\u003eIO a",
        "package": "MissingH",
        "partial": "CWD",
        "signature": "String-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:mktmpdir",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a temporary directory for your use.\n\u003c/p\u003e\u003cp\u003eThe passed string should be a template suitable for mkstemp; that is, end with\n\u003ccode\u003e\"XXXXXX\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYour string should probably start with the value returned from\nSystem.Directory.getTemporaryDirectory.\n\u003c/p\u003e\u003cp\u003eThe name of the directory created will be returned.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e IO String",
        "fct-source": "src/System-Path.html#mktmpdir",
        "fct-type": "function",
        "title": "mktmpdir"
      },
      "index": {
        "description": "Creates temporary directory for your use The passed string should be template suitable for mkstemp that is end with XXXXXX Your string should probably start with the value returned from System.Directory.getTemporaryDirectory The name of the directory created will be returned",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "mktmpdir",
        "normalized": "String-\u003eIO String",
        "package": "MissingH",
        "partial": "",
        "signature": "String-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:recurseDir",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a recursive listing of all files/directories beneath \nthe specified directory.  The traversal is depth-first\nand the original\nitem is always present in the returned list.\n\u003c/p\u003e\u003cp\u003eIf the passed value is not a directory, the return value\nbe only that value.\n\u003c/p\u003e\u003cp\u003eThe \".\" and \"..\" entries are removed from the data returned.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO [FilePath]",
        "fct-source": "src/System-IO-HVFS-Utils.html#recurseDir",
        "fct-type": "function",
        "title": "recurseDir"
      },
      "index": {
        "description": "Obtain recursive listing of all files directories beneath the specified directory The traversal is depth-first and the original item is always present in the returned list If the passed value is not directory the return value be only that value The and entries are removed from the data returned",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "recurseDir",
        "normalized": "a-\u003eFilePath-\u003eIO[FilePath]",
        "package": "MissingH",
        "partial": "Dir",
        "signature": "a-\u003eFilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:recurseDirStat",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erecurseDir\u003c/a\u003e\u003c/code\u003e, but return the stat() (System.Posix.Files.FileStatus)\ninformation with them.  This is an optimization if you will be statting files\nyourself later.\n\u003c/p\u003e\u003cp\u003eThe items are returned lazily.\n\u003c/p\u003e\u003cp\u003eWARNING: do not change your current working directory until you have consumed\nall the items.  Doing so could cause strange effects.\n\u003c/p\u003e\u003cp\u003eAlternatively, you may wish to pass an absolute path to this function.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO [(FilePath, HVFSStatEncap)]",
        "fct-source": "src/System-IO-HVFS-Utils.html#recurseDirStat",
        "fct-type": "function",
        "title": "recurseDirStat"
      },
      "index": {
        "description": "Like recurseDir but return the stat System.Posix.Files.FileStatus information with them This is an optimization if you will be statting files yourself later The items are returned lazily WARNING do not change your current working directory until you have consumed all the items Doing so could cause strange effects Alternatively you may wish to pass an absolute path to this function",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "recurseDirStat",
        "normalized": "a-\u003eFilePath-\u003eIO[(FilePath,HVFSStatEncap)]",
        "package": "MissingH",
        "partial": "Dir Stat",
        "signature": "a-\u003eFilePath-\u003eIO[(FilePath,HVFSStatEncap)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:recursiveRemove",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves a file or a directory.  If a directory, also removes all its\nchild files/directories.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-IO-HVFS-Utils.html#recursiveRemove",
        "fct-type": "function",
        "title": "recursiveRemove"
      },
      "index": {
        "description": "Removes file or directory If directory also removes all its child files directories",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "recursiveRemove",
        "normalized": "a-\u003eFilePath-\u003eIO()",
        "package": "MissingH",
        "partial": "Remove",
        "signature": "a-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:secureAbsNormPath",
      "description": {
        "fct-descr": "\u003cp\u003eLike absNormPath, but returns Nothing if the generated result is not\nthe passed base path or a subdirectory thereof. \n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "String-\u003e String-\u003e Maybe String",
        "fct-type": "function",
        "title": "secureAbsNormPath"
      },
      "index": {
        "description": "Like absNormPath but returns Nothing if the generated result is not the passed base path or subdirectory thereof",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "secureAbsNormPath",
        "normalized": "String-\u003eString-\u003eMaybe String",
        "package": "MissingH",
        "partial": "Abs Norm Path",
        "signature": "String-\u003eString-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Path.html#v:splitExt",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a pathname into a tuple representing the root of the name and\nthe extension.  The extension is considered to be all characters from the last\ndot after the last slash to the end.  Either returned string may be empty. \n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "MissingH",
        "fct-signature": "String -\u003e (String, String)",
        "fct-source": "src/System-Path.html#splitExt",
        "fct-type": "function",
        "title": "splitExt"
      },
      "index": {
        "description": "Splits pathname into tuple representing the root of the name and the extension The extension is considered to be all characters from the last dot after the last slash to the end Either returned string may be empty",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "splitExt",
        "normalized": "String-\u003e(String,String)",
        "package": "MissingH",
        "partial": "Ext",
        "signature": "String-\u003e(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExports some POSIX constants and functions that are not exported in fptools\nby default.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Consts",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Consts.html",
        "fct-type": "module",
        "title": "Consts"
      },
      "index": {
        "description": "Exports some POSIX constants and functions that are not exported in fptools by default",
        "hierarchy": "System Posix Consts",
        "module": "System.Posix.Consts",
        "name": "Consts",
        "normalized": "",
        "package": "MissingH",
        "partial": "Consts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:blockSpecialMode",
      "description": {
        "fct-module": "System.Posix.Consts",
        "fct-package": "MissingH",
        "fct-signature": "FileMode",
        "fct-source": "src/System-Posix-Consts.html#blockSpecialMode",
        "fct-type": "function",
        "title": "blockSpecialMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Consts",
        "module": "System.Posix.Consts",
        "name": "blockSpecialMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "Special Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:characterSpecialMode",
      "description": {
        "fct-module": "System.Posix.Consts",
        "fct-package": "MissingH",
        "fct-signature": "FileMode",
        "fct-source": "src/System-Posix-Consts.html#characterSpecialMode",
        "fct-type": "function",
        "title": "characterSpecialMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Consts",
        "module": "System.Posix.Consts",
        "name": "characterSpecialMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "Special Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:directoryMode",
      "description": {
        "fct-module": "System.Posix.Consts",
        "fct-package": "MissingH",
        "fct-signature": "FileMode",
        "fct-source": "src/System-Posix-Consts.html#directoryMode",
        "fct-type": "function",
        "title": "directoryMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Consts",
        "module": "System.Posix.Consts",
        "name": "directoryMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:fileTypeModes",
      "description": {
        "fct-module": "System.Posix.Consts",
        "fct-package": "MissingH",
        "fct-signature": "FileMode",
        "fct-source": "src/System-Posix-Consts.html#fileTypeModes",
        "fct-type": "function",
        "title": "fileTypeModes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Consts",
        "module": "System.Posix.Consts",
        "name": "fileTypeModes",
        "normalized": "",
        "package": "MissingH",
        "partial": "Type Modes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:namedPipeMode",
      "description": {
        "fct-module": "System.Posix.Consts",
        "fct-package": "MissingH",
        "fct-signature": "FileMode",
        "fct-source": "src/System-Posix-Consts.html#namedPipeMode",
        "fct-type": "function",
        "title": "namedPipeMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Consts",
        "module": "System.Posix.Consts",
        "name": "namedPipeMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "Pipe Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:regularFileMode",
      "description": {
        "fct-module": "System.Posix.Consts",
        "fct-package": "MissingH",
        "fct-signature": "FileMode",
        "fct-source": "src/System-Posix-Consts.html#regularFileMode",
        "fct-type": "function",
        "title": "regularFileMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Consts",
        "module": "System.Posix.Consts",
        "name": "regularFileMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "File Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:socketMode",
      "description": {
        "fct-module": "System.Posix.Consts",
        "fct-package": "MissingH",
        "fct-signature": "FileMode",
        "fct-source": "src/System-Posix-Consts.html#socketMode",
        "fct-type": "function",
        "title": "socketMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Consts",
        "module": "System.Posix.Consts",
        "name": "socketMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Posix-Consts.html#v:symbolicLinkMode",
      "description": {
        "fct-module": "System.Posix.Consts",
        "fct-package": "MissingH",
        "fct-signature": "FileMode",
        "fct-source": "src/System-Posix-Consts.html#symbolicLinkMode",
        "fct-type": "function",
        "title": "symbolicLinkMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Consts",
        "module": "System.Posix.Consts",
        "name": "symbolicLinkMode",
        "normalized": "",
        "package": "MissingH",
        "partial": "Link Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-ParseDate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility for parsing dates.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Time.ParseDate",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Time-ParseDate.html",
        "fct-type": "module",
        "title": "ParseDate"
      },
      "index": {
        "description": "Utility for parsing dates",
        "hierarchy": "System Time ParseDate",
        "module": "System.Time.ParseDate",
        "name": "ParseDate",
        "normalized": "",
        "package": "MissingH",
        "partial": "Parse Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-ParseDate.html#v:parseCalendarTime",
      "description": {
        "fct-descr": "\u003cp\u003eParse a date string as formatted by \u003ccode\u003e\u003ca\u003eformatCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe resulting \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e will only have those fields set that\n   are represented by a format specifier in the format string, and those\n   fields will be set to the values given in the date string.\n   If the same field is specified multiple times, the rightmost\n   occurence takes precedence.\n\u003c/p\u003e\u003cp\u003eThe resulting date is not neccessarily a valid date. For example,\n   if there is no day of the week specifier in the format string,\n   the value of \u003ccode\u003e\u003ca\u003ectWDay\u003c/a\u003e\u003c/code\u003e will most likely be invalid.\n\u003c/p\u003e\u003cp\u003eFormat specifiers are % followed by some character. All other\n   characters are treated literally. Whitespace in the format string\n   matches zero or more arbitrary whitespace characters.\n\u003c/p\u003e\u003cp\u003eFormat specifiers marked with * are matched, but do not set any\n   field in the output.\n\u003c/p\u003e\u003cp\u003eSome of the format specifiers are marked as space-padded or\n   zero-padded. Regardless of this, space-padded, zero-padded\n   or unpadded inputs are accepted. Note that strings using\n   unpadded fields without separating the fields may cause\n   strange parsing.\n\u003c/p\u003e\u003cp\u003eSupported format specfiers:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e%%\u003c/dt\u003e\u003cdd\u003e   a % character.\n\u003c/dd\u003e\u003cdt\u003e%a\u003c/dt\u003e\u003cdd\u003e   locale's abbreviated weekday name (Sun ... Sat)\n\u003c/dd\u003e\u003cdt\u003e%A\u003c/dt\u003e\u003cdd\u003e   locale's full weekday name (Sunday .. Saturday)\n\u003c/dd\u003e\u003cdt\u003e%b\u003c/dt\u003e\u003cdd\u003e   locale's abbreviated month name (Jan..Dec)\n\u003c/dd\u003e\u003cdt\u003e%B\u003c/dt\u003e\u003cdd\u003e   locale's full month name (January..December)\n\u003c/dd\u003e\u003cdt\u003e%c\u003c/dt\u003e\u003cdd\u003e   locale's date and time format (Thu Mar 25 17:47:03 CET 2004)\n\u003c/dd\u003e\u003cdt\u003e%C\u003c/dt\u003e\u003cdd\u003e   century [00-99]\n\u003c/dd\u003e\u003cdt\u003e%d\u003c/dt\u003e\u003cdd\u003e   day of month, zero padded (01..31)\n\u003c/dd\u003e\u003cdt\u003e%D\u003c/dt\u003e\u003cdd\u003e   date (%m/%d/%y)\n\u003c/dd\u003e\u003cdt\u003e%e\u003c/dt\u003e\u003cdd\u003e   day of month, space padded ( 1..31)\n\u003c/dd\u003e\u003cdt\u003e%h\u003c/dt\u003e\u003cdd\u003e   same as %b\n\u003c/dd\u003e\u003cdt\u003e%H\u003c/dt\u003e\u003cdd\u003e   hour, 24-hour clock, zero padded (00..23)\n\u003c/dd\u003e\u003cdt\u003e%I\u003c/dt\u003e\u003cdd\u003e   hour, 12-hour clock, zero padded (01..12)\n\u003c/dd\u003e\u003cdt\u003e%j\u003c/dt\u003e\u003cdd\u003e   day of the year, zero padded (001..366)\n\u003c/dd\u003e\u003cdt\u003e%k\u003c/dt\u003e\u003cdd\u003e   hour, 24-hour clock, space padded ( 0..23)\n\u003c/dd\u003e\u003cdt\u003e%l\u003c/dt\u003e\u003cdd\u003e   hour, 12-hour clock, space padded ( 1..12)\n\u003c/dd\u003e\u003cdt\u003e%m\u003c/dt\u003e\u003cdd\u003e   month, zero padded (01..12)\n\u003c/dd\u003e\u003cdt\u003e%M\u003c/dt\u003e\u003cdd\u003e   minute, zero padded (00..59)\n\u003c/dd\u003e\u003cdt\u003e%n\u003c/dt\u003e\u003cdd\u003e   a newline character\n\u003c/dd\u003e\u003cdt\u003e%p\u003c/dt\u003e\u003cdd\u003e   locale's AM or PM indicator\n\u003c/dd\u003e\u003cdt\u003e%r\u003c/dt\u003e\u003cdd\u003e   locale's 12-hour time format (hh:mm:ss AM/PM)\n\u003c/dd\u003e\u003cdt\u003e%R\u003c/dt\u003e\u003cdd\u003e   hours and minutes, 24-hour clock (hh:mm)\n\u003c/dd\u003e\u003cdt\u003e%s\u003c/dt\u003e\u003cdd\u003e   * seconds since '00:00:00 1970-01-01 UTC'\n\u003c/dd\u003e\u003cdt\u003e%S\u003c/dt\u003e\u003cdd\u003e   seconds, zero padded (00..59)\n\u003c/dd\u003e\u003cdt\u003e%t\u003c/dt\u003e\u003cdd\u003e   a horizontal tab character\n\u003c/dd\u003e\u003cdt\u003e%T\u003c/dt\u003e\u003cdd\u003e   time, 24-hour clock (hh:mm:ss)\n\u003c/dd\u003e\u003cdt\u003e%u\u003c/dt\u003e\u003cdd\u003e   numeric day of the week (1=Monday, 7=Sunday)\n\u003c/dd\u003e\u003cdt\u003e%U\u003c/dt\u003e\u003cdd\u003e   * week number, weeks starting on Sunday, zero padded (01-53)\n\u003c/dd\u003e\u003cdt\u003e%V\u003c/dt\u003e\u003cdd\u003e   * week number (as per ISO-8601),\n             week 1 is the first week with a Thursday,\n             zero padded, (01-53)\n\u003c/dd\u003e\u003cdt\u003e%w\u003c/dt\u003e\u003cdd\u003e   numeric day of the week, (0=Sunday, 6=Monday)\n\u003c/dd\u003e\u003cdt\u003e%W\u003c/dt\u003e\u003cdd\u003e   * week number, weeks starting on Monday, zero padded (01-53)\n\u003c/dd\u003e\u003cdt\u003e%x\u003c/dt\u003e\u003cdd\u003e   locale's preferred way of printing dates (%m/%d/%y)\n\u003c/dd\u003e\u003cdt\u003e%X\u003c/dt\u003e\u003cdd\u003e   locale's preferred way of printing time. (%H:%M:%S)\n\u003c/dd\u003e\u003cdt\u003e%y\u003c/dt\u003e\u003cdd\u003e   year, within century, zero padded (00..99)\n\u003c/dd\u003e\u003cdt\u003e%Y\u003c/dt\u003e\u003cdd\u003e   year, including century. Not padded\n           (this is probably a bug, but formatCalendarTime does\n           it this way). (0-9999)\n\u003c/dd\u003e\u003cdt\u003e%Z\u003c/dt\u003e\u003cdd\u003e   time zone abbreviation (e.g. CET) or RFC-822 style numeric\n           timezone (-0500) \n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.Time.ParseDate",
        "fct-package": "MissingH",
        "fct-signature": "TimeLocale-\u003e String-\u003e String-\u003e Maybe CalendarTime",
        "fct-type": "function",
        "title": "parseCalendarTime"
      },
      "index": {
        "description": "Parse date string as formatted by formatCalendarTime The resulting CalendarTime will only have those fields set that are represented by format specifier in the format string and those fields will be set to the values given in the date string If the same field is specified multiple times the rightmost occurence takes precedence The resulting date is not neccessarily valid date For example if there is no day of the week specifier in the format string the value of ctWDay will most likely be invalid Format specifiers are followed by some character All other characters are treated literally Whitespace in the format string matches zero or more arbitrary whitespace characters Format specifiers marked with are matched but do not set any field in the output Some of the format specifiers are marked as space-padded or zero-padded Regardless of this space-padded zero-padded or unpadded inputs are accepted Note that strings using unpadded fields without separating the fields may cause strange parsing Supported format specfiers character locale abbreviated weekday name Sun Sat locale full weekday name Sunday Saturday locale abbreviated month name Jan..Dec locale full month name January..December locale date and time format Thu Mar CET century day of month zero padded date day of month space padded same as hour hour clock zero padded hour hour clock zero padded day of the year zero padded hour hour clock space padded hour hour clock space padded month zero padded minute zero padded newline character locale AM or PM indicator locale hour time format hh mm ss AM PM hours and minutes hour clock hh mm seconds since UTC seconds zero padded horizontal tab character time hour clock hh mm ss numeric day of the week Monday Sunday week number weeks starting on Sunday zero padded week number as per ISO-8601 week is the first week with Thursday zero padded numeric day of the week Sunday Monday week number weeks starting on Monday zero padded locale preferred way of printing dates locale preferred way of printing time year within century zero padded year including century Not padded this is probably bug but formatCalendarTime does it this way time zone abbreviation e.g CET or RFC-822 style numeric timezone",
        "hierarchy": "System Time ParseDate",
        "module": "System.Time.ParseDate",
        "name": "parseCalendarTime",
        "normalized": "TimeLocale-\u003eString-\u003eString-\u003eMaybe CalendarTime",
        "package": "MissingH",
        "partial": "Calendar Time",
        "signature": "TimeLocale-\u003eString-\u003eString-\u003eMaybe CalendarTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various Haskell utilities for dealing with times and\ndates.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Time.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/System-Time-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module provides various Haskell utilities for dealing with times and dates Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "System Time Utils",
        "module": "System.Time.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:clockTimeToEpoch",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a ClockTime to something represented with an arbitrary Real.\nThe result could be treated as a CTime from Foreign.C.Types or EpochTime from\nSystem.Posix.Types.  The inverse of \u003ccode\u003e\u003ca\u003eepochToClockTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFractions of a second are not preserved by this function. \n\u003c/p\u003e",
        "fct-module": "System.Time.Utils",
        "fct-package": "MissingH",
        "fct-signature": "ClockTime -\u003e a",
        "fct-source": "src/System-Time-Utils.html#clockTimeToEpoch",
        "fct-type": "function",
        "title": "clockTimeToEpoch"
      },
      "index": {
        "description": "Converts ClockTime to something represented with an arbitrary Real The result could be treated as CTime from Foreign.C.Types or EpochTime from System.Posix.Types The inverse of epochToClockTime Fractions of second are not preserved by this function",
        "hierarchy": "System Time Utils",
        "module": "System.Time.Utils",
        "name": "clockTimeToEpoch",
        "normalized": "ClockTime-\u003ea",
        "package": "MissingH",
        "partial": "Time To Epoch",
        "signature": "ClockTime-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:epoch",
      "description": {
        "fct-descr": "\u003cp\u003eJanuary 1, 1970, midnight, UTC, represented as a CalendarTime. \n\u003c/p\u003e",
        "fct-module": "System.Time.Utils",
        "fct-package": "MissingH",
        "fct-signature": "CalendarTime",
        "fct-source": "src/System-Time-Utils.html#epoch",
        "fct-type": "function",
        "title": "epoch"
      },
      "index": {
        "description": "January midnight UTC represented as CalendarTime",
        "hierarchy": "System Time Utils",
        "module": "System.Time.Utils",
        "name": "epoch",
        "normalized": "",
        "package": "MissingH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:epochToClockTime",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an Epoch time represented with an arbitrary Real to a ClockTime.\nThis input could be a CTime from Foreign.C.Types or an EpochTime from\nSystem.Posix.Types. \n\u003c/p\u003e",
        "fct-module": "System.Time.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e ClockTime",
        "fct-source": "src/System-Time-Utils.html#epochToClockTime",
        "fct-type": "function",
        "title": "epochToClockTime"
      },
      "index": {
        "description": "Converts an Epoch time represented with an arbitrary Real to ClockTime This input could be CTime from Foreign.C.Types or an EpochTime from System.Posix.Types",
        "hierarchy": "System Time Utils",
        "module": "System.Time.Utils",
        "name": "epochToClockTime",
        "normalized": "a-\u003eClockTime",
        "package": "MissingH",
        "partial": "To Clock Time",
        "signature": "a-\u003eClockTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:renderSecs",
      "description": {
        "fct-descr": "\u003cp\u003eRender a number of seconds as a human-readable amount.  Shows the two\nmost significant places.  For instance:\n\u003c/p\u003e\u003cpre\u003erenderSecs 121 = \"2m1s\"\n\u003c/pre\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003erenderTD\u003c/a\u003e\u003c/code\u003e for a function that works on a TimeDiff.\n\u003c/p\u003e",
        "fct-module": "System.Time.Utils",
        "fct-package": "MissingH",
        "fct-signature": "Integer -\u003e String",
        "fct-source": "src/System-Time-Utils.html#renderSecs",
        "fct-type": "function",
        "title": "renderSecs"
      },
      "index": {
        "description": "Render number of seconds as human-readable amount Shows the two most significant places For instance renderSecs m1s See also renderTD for function that works on TimeDiff",
        "hierarchy": "System Time Utils",
        "module": "System.Time.Utils",
        "name": "renderSecs",
        "normalized": "Integer-\u003eString",
        "package": "MissingH",
        "partial": "Secs",
        "signature": "Integer-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:renderTD",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erenderSecs\u003c/a\u003e\u003c/code\u003e, but takes a TimeDiff instead of an integer second\ncount. \n\u003c/p\u003e",
        "fct-module": "System.Time.Utils",
        "fct-package": "MissingH",
        "fct-signature": "TimeDiff -\u003e String",
        "fct-source": "src/System-Time-Utils.html#renderTD",
        "fct-type": "function",
        "title": "renderTD"
      },
      "index": {
        "description": "Like renderSecs but takes TimeDiff instead of an integer second count",
        "hierarchy": "System Time Utils",
        "module": "System.Time.Utils",
        "name": "renderTD",
        "normalized": "TimeDiff-\u003eString",
        "package": "MissingH",
        "partial": "TD",
        "signature": "TimeDiff-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:timeDiffToSecs",
      "description": {
        "fct-descr": "\u003cp\u003eConverts the given timeDiff to the number of seconds it represents. \n\u003c/p\u003e\u003cp\u003eUses the same algorithm as normalizeTimeDiff in GHC. \n\u003c/p\u003e",
        "fct-module": "System.Time.Utils",
        "fct-package": "MissingH",
        "fct-signature": "TimeDiff -\u003e Integer",
        "fct-source": "src/System-Time-Utils.html#timeDiffToSecs",
        "fct-type": "function",
        "title": "timeDiffToSecs"
      },
      "index": {
        "description": "Converts the given timeDiff to the number of seconds it represents Uses the same algorithm as normalizeTimeDiff in GHC",
        "hierarchy": "System Time Utils",
        "module": "System.Time.Utils",
        "name": "timeDiffToSecs",
        "normalized": "TimeDiff-\u003eInteger",
        "package": "MissingH",
        "partial": "Diff To Secs",
        "signature": "TimeDiff-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:timegm",
      "description": {
        "fct-descr": "\u003cp\u003eConverts the specified CalendarTime (see System.Time) to seconds-since-epoch time.\n\u003c/p\u003e\u003cp\u003eThis conversion does respect the timezone specified on the input object.\nIf you want a conversion from UTC, specify ctTZ = 0 and ctIsDST = False.\n\u003c/p\u003e\u003cp\u003eWhen called like that, the behavior is equivolent to the GNU C function\ntimegm().  Unlike the C library, Haskell's CalendarTime supports\ntimezone information, so if such information is specified, it will impact\nthe result.\n\u003c/p\u003e",
        "fct-module": "System.Time.Utils",
        "fct-package": "MissingH",
        "fct-signature": "CalendarTime -\u003e Integer",
        "fct-source": "src/System-Time-Utils.html#timegm",
        "fct-type": "function",
        "title": "timegm"
      },
      "index": {
        "description": "Converts the specified CalendarTime see System.Time to seconds-since-epoch time This conversion does respect the timezone specified on the input object If you want conversion from UTC specify ctTZ and ctIsDST False When called like that the behavior is equivolent to the GNU function timegm Unlike the library Haskell CalendarTime supports timezone information so if such information is specified it will impact the result",
        "hierarchy": "System Time Utils",
        "module": "System.Time.Utils",
        "name": "timegm",
        "normalized": "CalendarTime-\u003eInteger",
        "package": "MissingH",
        "partial": "",
        "signature": "CalendarTime-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/System-Time-Utils.html#v:timelocal",
      "description": {
        "fct-descr": "\u003cp\u003eConverts the specified CalendarTime (see System.Time) to \nseconds-since-epoch format.\n\u003c/p\u003e\u003cp\u003eThe input CalendarTime is assumed to be the time as given in your local\ntimezone.  All timezone and DST fields in the object are ignored.\n\u003c/p\u003e\u003cp\u003eThis behavior is equivolent to the timelocal() and mktime() functions that\nC programmers are accustomed to.\n\u003c/p\u003e\u003cp\u003ePlease note that the behavior for this function during the hour immediately\nbefore or after a DST switchover may produce a result with a different hour\nthan you expect.\n\u003c/p\u003e",
        "fct-module": "System.Time.Utils",
        "fct-package": "MissingH",
        "fct-signature": "CalendarTime -\u003e IO Integer",
        "fct-source": "src/System-Time-Utils.html#timelocal",
        "fct-type": "function",
        "title": "timelocal"
      },
      "index": {
        "description": "Converts the specified CalendarTime see System.Time to seconds-since-epoch format The input CalendarTime is assumed to be the time as given in your local timezone All timezone and DST fields in the object are ignored This behavior is equivolent to the timelocal and mktime functions that programmers are accustomed to Please note that the behavior for this function during the hour immediately before or after DST switchover may produce result with different hour than you expect",
        "hierarchy": "System Time Utils",
        "module": "System.Time.Utils",
        "name": "timelocal",
        "normalized": "CalendarTime-\u003eIO Integer",
        "package": "MissingH",
        "partial": "",
        "signature": "CalendarTime-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "module",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "MissingH",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#t:GeneralizedToken",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#GeneralizedToken",
        "fct-type": "type",
        "title": "GeneralizedToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "GeneralizedToken",
        "normalized": "",
        "package": "MissingH",
        "partial": "Generalized Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#t:GeneralizedTokenParser",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "type",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#GeneralizedTokenParser",
        "fct-type": "type",
        "title": "GeneralizedTokenParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "GeneralizedTokenParser",
        "normalized": "",
        "package": "MissingH",
        "partial": "Generalized Token Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:allg",
      "description": {
        "fct-descr": "\u003cp\u003eMatches all items and returns them \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "GeneralizedTokenParser a st [a]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#allg",
        "fct-type": "function",
        "title": "allg"
      },
      "index": {
        "description": "Matches all items and returns them",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "allg",
        "normalized": "GeneralizedTokenParser a b[a]",
        "package": "MissingH",
        "partial": "",
        "signature": "GeneralizedTokenParser a st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:noneOfg",
      "description": {
        "fct-descr": "\u003cp\u003eMatches one item not in a list and returns it. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e GeneralizedTokenParser a st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#noneOfg",
        "fct-type": "function",
        "title": "noneOfg"
      },
      "index": {
        "description": "Matches one item not in list and returns it",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "noneOfg",
        "normalized": "[a]-\u003eGeneralizedTokenParser a b a",
        "package": "MissingH",
        "partial": "Ofg",
        "signature": "[a]-\u003eGeneralizedTokenParser a st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:notMatching",
      "description": {
        "fct-descr": "\u003cp\u003eRunning \u003ccode\u003enotMatching p msg\u003c/code\u003e will try to apply parser p.\nIf it fails, returns ().  If it succeds, cause a failure and raise\nthe given error message.  It will not consume input in either case. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "GenParser a b c -\u003e String -\u003e GenParser a b ()",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#notMatching",
        "fct-type": "function",
        "title": "notMatching"
      },
      "index": {
        "description": "Running notMatching msg will try to apply parser If it fails returns If it succeds cause failure and raise the given error message It will not consume input in either case",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "notMatching",
        "normalized": "GenParser a b c-\u003eString-\u003eGenParser a b()",
        "package": "MissingH",
        "partial": "Matching",
        "signature": "GenParser a b c-\u003eString-\u003eGenParser a b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:oneOfg",
      "description": {
        "fct-descr": "\u003cp\u003eMatches one item in a list and returns it. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "[a] -\u003e GeneralizedTokenParser a st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#oneOfg",
        "fct-type": "function",
        "title": "oneOfg"
      },
      "index": {
        "description": "Matches one item in list and returns it",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "oneOfg",
        "normalized": "[a]-\u003eGeneralizedTokenParser a b a",
        "package": "MissingH",
        "partial": "Ofg",
        "signature": "[a]-\u003eGeneralizedTokenParser a st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:satisfyg",
      "description": {
        "fct-descr": "\u003cp\u003eA shortcut to \u003ccode\u003e\u003ca\u003etokeng\u003c/a\u003e\u003c/code\u003e; the test here is just a function that returns\na Bool.  If the result is true; return that value -- otherwise, an error.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "(a -\u003e Bool) -\u003e GeneralizedTokenParser a st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#satisfyg",
        "fct-type": "function",
        "title": "satisfyg"
      },
      "index": {
        "description": "shortcut to tokeng the test here is just function that returns Bool If the result is true return that value otherwise an error",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "satisfyg",
        "normalized": "(a-\u003eBool)-\u003eGeneralizedTokenParser a b a",
        "package": "MissingH",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eGeneralizedTokenParser a st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:specificg",
      "description": {
        "fct-descr": "\u003cp\u003eMatches one specific token and returns it. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e GeneralizedTokenParser a st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#specificg",
        "fct-type": "function",
        "title": "specificg"
      },
      "index": {
        "description": "Matches one specific token and returns it",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "specificg",
        "normalized": "a-\u003eGeneralizedTokenParser a b a",
        "package": "MissingH",
        "partial": "",
        "signature": "a-\u003eGeneralizedTokenParser a st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:togtok",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate (return) a \u003ccode\u003e\u003ca\u003eGeneralizedToken\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "a -\u003e GenParser b st (GeneralizedToken a)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#togtok",
        "fct-type": "function",
        "title": "togtok"
      },
      "index": {
        "description": "Generate return GeneralizedToken",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "togtok",
        "normalized": "a-\u003eGenParser b c(GeneralizedToken a)",
        "package": "MissingH",
        "partial": "",
        "signature": "a-\u003eGenParser b st(GeneralizedToken a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MissingH/docs/Text-ParserCombinators-Parsec-Utils.html#v:tokeng",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the next token from a \u003ccode\u003e\u003ca\u003eGeneralizedToken\u003c/a\u003e\u003c/code\u003e stream.\n   The given function should return the value to use, or Nothing\n   to cause an error. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Utils",
        "fct-package": "MissingH",
        "fct-signature": "(a -\u003e Maybe b) -\u003e GeneralizedTokenParser a st b",
        "fct-source": "src/Text-ParserCombinators-Parsec-Utils.html#tokeng",
        "fct-type": "function",
        "title": "tokeng"
      },
      "index": {
        "description": "Retrieve the next token from GeneralizedToken stream The given function should return the value to use or Nothing to cause an error",
        "hierarchy": "Text ParserCombinators Parsec Utils",
        "module": "Text.ParserCombinators.Parsec.Utils",
        "name": "tokeng",
        "normalized": "(a-\u003eMaybe b)-\u003eGeneralizedTokenParser a c b",
        "package": "MissingH",
        "partial": "",
        "signature": "(a-\u003eMaybe b)-\u003eGeneralizedTokenParser a st b"
      }
    }
  }
]