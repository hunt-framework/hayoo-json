[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eGraphics.Pgm\u003c/a\u003e is a pure Haskell library to read and write PGM images.  It\n   properly supports both 8 bit and 16 bit pixels, and multiple PGMs per\n   file.  The PGM is the lowest common denominator of useful image file\n   formats.  It consists of a header of the form\n\u003c/p\u003e\u003cpre\u003eP5 width height maxVal\u003c/pre\u003e\u003cp\u003efollowed by a single whitespace character, usually a newline, where\n   \u003ccode\u003ewidth\u003c/code\u003e, \u003ccode\u003eheight\u003c/code\u003e, and \u003ccode\u003emaxVal\u003c/code\u003e are positive integers consisting of digits\n   only giving the number of columns, number of rows, and the highest grey\n   level in the image to follow.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003emaxVal\u003c/code\u003e \u003c 256, then the format uses 1 byte per pixel; otherwise it\n   uses 2.  The routines in this library properly handle both, including\n   automatically determining which to write when writing an array to disk.\n\u003c/p\u003e\u003cp\u003eThe header can also contain comments, starting with \u003ccode\u003e#\u003c/code\u003e on a new line, and\n   continuing to the end of the line.  These are read out and returned as a\n   \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e with newlines kept intact (except for the last newline of the\n   last comment line, which is removed).  Comments from anywhere between the\n   header fields are concatenated into the same document.  \u003ccode\u003e\u003ca\u003epgmToArray\u003c/a\u003e\u003c/code\u003e\n   ignores comments; \u003ccode\u003e\u003ca\u003epgmToArrayWithComments\u003c/a\u003e\u003c/code\u003e reads them.\n\u003c/p\u003e\u003cp\u003eAfter the header, the pixel data is written in big-endian binary form,\n   most significant byte first for 16 bit pixels.  The pixels are a single\n   row-major raster through the image.\n\u003c/p\u003e\u003cp\u003eTo put multiple PGMs in a file, append them.  This module allows you to\n   put white space between them, though this might choke other\n   implementations.\n\u003c/p\u003e\u003cp\u003eAll arrays returned by this library from PGMs have pixel type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, since\n   this is simply more useful for most purposes.  If you want to write a PGM\n   back out, you must first coerce your pixel type to \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e!  There are\n   too many possible ways of handling negative values, larger depths, or\n   other things beyond the comprehension of \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e to handle with a simple\n   wrapper function.  If you know you have positive values less than 2^16,\n   then you can coerce an array \u003ccode\u003earr\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e with\n\u003c/p\u003e\u003cpre\u003e amap (fromIntegral :: Int -\u003e Word16) arr\n\u003c/pre\u003e\u003cp\u003eThe array's indices (of the form (row,column)) start at (0,0) and run to\n   (\u003ccode\u003eheight\u003c/code\u003e-1,\u003ccode\u003ewidth\u003c/code\u003e-1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Pgm.html",
        "fct-type": "module",
        "title": "Pgm"
      },
      "index": {
        "description": "Graphics.Pgm is pure Haskell library to read and write PGM images It properly supports both bit and bit pixels and multiple PGMs per file The PGM is the lowest common denominator of useful image file formats It consists of header of the form P5 width height maxVal followed by single whitespace character usually newline where width height and maxVal are positive integers consisting of digits only giving the number of columns number of rows and the highest grey level in the image to follow If maxVal then the format uses byte per pixel otherwise it uses The routines in this library properly handle both including automatically determining which to write when writing an array to disk The header can also contain comments starting with on new line and continuing to the end of the line These are read out and returned as String with newlines kept intact except for the last newline of the last comment line which is removed Comments from anywhere between the header fields are concatenated into the same document pgmToArray ignores comments pgmToArrayWithComments reads them After the header the pixel data is written in big-endian binary form most significant byte first for bit pixels The pixels are single row-major raster through the image To put multiple PGMs in file append them This module allows you to put white space between them though this might choke other implementations All arrays returned by this library from PGMs have pixel type Int since this is simply more useful for most purposes If you want to write PGM back out you must first coerce your pixel type to Word16 There are too many possible ways of handling negative values larger depths or other things beyond the comprehension of Word16 to handle with simple wrapper function If you know you have positive values less than then you can coerce an array arr to Word16 with amap fromIntegral Int Word16 arr The array indices of the form row column start at and run to height width",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "Pgm",
        "normalized": "",
        "package": "pgm",
        "partial": "Pgm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:arrayToFile",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003earrayToHandle\u003c/a\u003e\u003c/code\u003e which opens the file to write to, then\n   closes it afterwards.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "String -\u003e m (Int, Int) Word16 -\u003e IO ()",
        "fct-source": "src/Graphics-Pgm.html#arrayToFile",
        "fct-type": "function",
        "title": "arrayToFile"
      },
      "index": {
        "description": "wrapper around arrayToHandle which opens the file to write to then closes it afterwards",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "arrayToFile",
        "normalized": "String-\u003ea(Int,Int)Word-\u003eIO()",
        "package": "pgm",
        "partial": "To File",
        "signature": "String-\u003em(Int,Int)Word-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:arrayToHandle",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single array to a given handle.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "Handle -\u003e m (Int, Int) Word16 -\u003e IO ()",
        "fct-source": "src/Graphics-Pgm.html#arrayToHandle",
        "fct-type": "function",
        "title": "arrayToHandle"
      },
      "index": {
        "description": "Write single array to given handle",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "arrayToHandle",
        "normalized": "Handle-\u003ea(Int,Int)Word-\u003eIO()",
        "package": "pgm",
        "partial": "To Handle",
        "signature": "Handle-\u003em(Int,Int)Word-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:arrayToPgm",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an array (which must already be coerced to have element type\n   \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e) and produces a \u003ccode\u003eByteString\u003c/code\u003e encoding of that array as a PGM.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "m (Int, Int) Word16 -\u003e ByteString",
        "fct-source": "src/Graphics-Pgm.html#arrayToPgm",
        "fct-type": "function",
        "title": "arrayToPgm"
      },
      "index": {
        "description": "Takes an array which must already be coerced to have element type Word16 and produces ByteString encoding of that array as PGM",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "arrayToPgm",
        "normalized": "a(Int,Int)Word-\u003eByteString",
        "package": "pgm",
        "partial": "To Pgm",
        "signature": "m(Int,Int)Word-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:arrayToPgmWithComment",
      "description": {
        "fct-descr": "\u003cp\u003ePrecisely the same as \u003ccode\u003e\u003ca\u003earrayToPgm\u003c/a\u003e\u003c/code\u003e, but takes a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to encode into\n   the file header as a comment after the magic number but before the width\n   field.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "m (Int, Int) Word16 -\u003e String -\u003e ByteString",
        "fct-source": "src/Graphics-Pgm.html#arrayToPgmWithComment",
        "fct-type": "function",
        "title": "arrayToPgmWithComment"
      },
      "index": {
        "description": "Precisely the same as arrayToPgm but takes String to encode into the file header as comment after the magic number but before the width field",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "arrayToPgmWithComment",
        "normalized": "a(Int,Int)Word-\u003eString-\u003eByteString",
        "package": "pgm",
        "partial": "To Pgm With Comment",
        "signature": "m(Int,Int)Word-\u003eString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:arraysToFile",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003earraysToHandle\u003c/a\u003e\u003c/code\u003e which opens and closes the file to write\n   to.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "String -\u003e [m (Int, Int) Word16] -\u003e IO ()",
        "fct-source": "src/Graphics-Pgm.html#arraysToFile",
        "fct-type": "function",
        "title": "arraysToFile"
      },
      "index": {
        "description": "wrapper around arraysToHandle which opens and closes the file to write to",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "arraysToFile",
        "normalized": "String-\u003e[a(Int,Int)Word]-\u003eIO()",
        "package": "pgm",
        "partial": "To File",
        "signature": "String-\u003e[m(Int,Int)Word]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:arraysToHandle",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a list of arrays to a given handle.  Note that most implementations\n   of PGM will ignore all but the first when they read this file.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "Handle -\u003e [m (Int, Int) Word16] -\u003e IO ()",
        "fct-source": "src/Graphics-Pgm.html#arraysToHandle",
        "fct-type": "function",
        "title": "arraysToHandle"
      },
      "index": {
        "description": "Writes list of arrays to given handle Note that most implementations of PGM will ignore all but the first when they read this file",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "arraysToHandle",
        "normalized": "Handle-\u003e[a(Int,Int)Word]-\u003eIO()",
        "package": "pgm",
        "partial": "To Handle",
        "signature": "Handle-\u003e[m(Int,Int)Word]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:pgmToArray",
      "description": {
        "fct-descr": "\u003cp\u003eParse the first (and possible only) PGM in a \u003ccode\u003eByteString\u003c/code\u003e into an array.\n   If the parsing succeeds, you will still need to match on the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\n   constructor to get the array.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "ByteString -\u003e Either ParseError (UArray (Int, Int) a)",
        "fct-source": "src/Graphics-Pgm.html#pgmToArray",
        "fct-type": "function",
        "title": "pgmToArray"
      },
      "index": {
        "description": "Parse the first and possible only PGM in ByteString into an array If the parsing succeeds you will still need to match on the Right constructor to get the array",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "pgmToArray",
        "normalized": "ByteString-\u003eEither ParseError(UArray(Int,Int)a)",
        "package": "pgm",
        "partial": "To Array",
        "signature": "ByteString-\u003eEither ParseError(UArray(Int,Int)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:pgmToArrayWithComments",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003epgmToArray\u003c/a\u003e\u003c/code\u003e, but taking also returning the comments in the\n   PGM file as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "ByteString -\u003e Either ParseError (UArray (Int, Int) a, String)",
        "fct-source": "src/Graphics-Pgm.html#pgmToArrayWithComments",
        "fct-type": "function",
        "title": "pgmToArrayWithComments"
      },
      "index": {
        "description": "The same as pgmToArray but taking also returning the comments in the PGM file as String",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "pgmToArrayWithComments",
        "normalized": "ByteString-\u003eEither ParseError(UArray(Int,Int)a,String)",
        "package": "pgm",
        "partial": "To Array With Comments",
        "signature": "ByteString-\u003eEither ParseError(UArray(Int,Int)a,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:pgmsFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003epgmsFromHandle\u003c/a\u003e\u003c/code\u003e which also opens the file to read from.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "String -\u003e IO (Either ParseError [UArray (Int, Int) Int])",
        "fct-source": "src/Graphics-Pgm.html#pgmsFromFile",
        "fct-type": "function",
        "title": "pgmsFromFile"
      },
      "index": {
        "description": "wrapper around pgmsFromHandle which also opens the file to read from",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "pgmsFromFile",
        "normalized": "String-\u003eIO(Either ParseError[UArray(Int,Int)Int])",
        "package": "pgm",
        "partial": "From File",
        "signature": "String-\u003eIO(Either ParseError[UArray(Int,Int)Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:pgmsFromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eParse all PGMs in the contents of a handle, and return them as a list of\n   arrays.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "Handle -\u003e IO (Either ParseError [UArray (Int, Int) Int])",
        "fct-source": "src/Graphics-Pgm.html#pgmsFromHandle",
        "fct-type": "function",
        "title": "pgmsFromHandle"
      },
      "index": {
        "description": "Parse all PGMs in the contents of handle and return them as list of arrays",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "pgmsFromHandle",
        "normalized": "Handle-\u003eIO(Either ParseError[UArray(Int,Int)Int])",
        "package": "pgm",
        "partial": "From Handle",
        "signature": "Handle-\u003eIO(Either ParseError[UArray(Int,Int)Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:pgmsToArrays",
      "description": {
        "fct-descr": "\u003cp\u003ePrecisely the same as \u003ccode\u003e\u003ca\u003epgmToArray\u003c/a\u003e\u003c/code\u003e, but this time fetches all the PGMs in\n   the file, and returns them as a list of arrays.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "ByteString -\u003e Either ParseError [UArray (Int, Int) a]",
        "fct-source": "src/Graphics-Pgm.html#pgmsToArrays",
        "fct-type": "function",
        "title": "pgmsToArrays"
      },
      "index": {
        "description": "Precisely the same as pgmToArray but this time fetches all the PGMs in the file and returns them as list of arrays",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "pgmsToArrays",
        "normalized": "ByteString-\u003eEither ParseError[UArray(Int,Int)a]",
        "package": "pgm",
        "partial": "To Arrays",
        "signature": "ByteString-\u003eEither ParseError[UArray(Int,Int)a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pgm/docs/Graphics-Pgm.html#v:pgmsToArraysWithComments",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003epgmsToArrays\u003c/a\u003e\u003c/code\u003e, but again returning comments.\n\u003c/p\u003e",
        "fct-module": "Graphics.Pgm",
        "fct-package": "pgm",
        "fct-signature": "ByteString -\u003e Either ParseError [(UArray (Int, Int) a, String)]",
        "fct-source": "src/Graphics-Pgm.html#pgmsToArraysWithComments",
        "fct-type": "function",
        "title": "pgmsToArraysWithComments"
      },
      "index": {
        "description": "Same as pgmsToArrays but again returning comments",
        "hierarchy": "Graphics Pgm",
        "module": "Graphics.Pgm",
        "name": "pgmsToArraysWithComments",
        "normalized": "ByteString-\u003eEither ParseError[(UArray(Int,Int)a,String)]",
        "package": "pgm",
        "partial": "To Arrays With Comments",
        "signature": "ByteString-\u003eEither ParseError[(UArray(Int,Int)a,String)]"
      }
    }
  }
]