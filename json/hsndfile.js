[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e type class that abstracts the array type that is being used for I/O. For concrete instances see for example the \u003cem\u003ehsndfile-vector\u003c/em\u003e package \u003ca\u003ehttp://hackage.haskell.org/package/hsndfile-vector\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "module",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html",
        "fct-type": "module",
        "title": "Buffer"
      },
      "index": {
        "description": "This module provides the Buffer type class that abstracts the array type that is being used for For concrete instances see for example the hsndfile-vector package http hackage.haskell.org package hsndfile-vector",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "Buffer",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#t:Buffer",
      "description": {
        "fct-descr": "\u003cp\u003eBuffer class for I/O on soundfile handles.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "class",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#Buffer",
        "fct-type": "class",
        "title": "Buffer"
      },
      "index": {
        "description": "Buffer class for on soundfile handles",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "Buffer",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#t:Sample",
      "description": {
        "fct-descr": "\u003cp\u003eThe class Sample is used for polymorphic I/O on a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e, and is parameterized with the element type that is to be read from a file.\n\u003c/p\u003e\u003cp\u003eIt is important to note that the data type used by the calling program and the data format of the file do not need to be the same. For instance, it is possible to open a 16 bit PCM encoded WAV file and read the data in floating point format. The library seamlessly converts between the two formats on-the-fly; the Haskell interface currently supports reading and writing \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e floating point values, as well as \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e integer values.\n\u003c/p\u003e\u003cp\u003eWhen converting between integer data and floating point data, the following rules apply: The default behaviour when reading floating point data from a file with integer data is normalisation. Regardless of whether data in the file is 8, 16, 24 or 32 bit wide, the data will be read as floating point data in the range [-1.0, 1.0]. Similarly, data in the range [-1.0, 1.0] will be written to an integer PCM file so that a data value of 1.0 will be the largest allowable integer for the given bit width. This normalisation can be turned on or off using the command interface (\u003cem\u003eimplementation missing in Haskell\u003c/em\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehGetSamples\u003c/code\u003e and \u003ccode\u003ehGetFrames\u003c/code\u003e return the number of items read. Unless the end of the file was reached during the read, the return value should equal the number of items requested. Attempts to read beyond the end of the file will not result in an error but will cause the read functions to return less than the number of items requested or 0 if already at the end of the file.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "class",
        "fct-source": "src/Sound-File-Sndfile-Buffer-Sample.html#Sample",
        "fct-type": "class",
        "title": "Sample"
      },
      "index": {
        "description": "The class Sample is used for polymorphic on Handle and is parameterized with the element type that is to be read from file It is important to note that the data type used by the calling program and the data format of the file do not need to be the same For instance it is possible to open bit PCM encoded WAV file and read the data in floating point format The library seamlessly converts between the two formats on-the-fly the Haskell interface currently supports reading and writing Double or Float floating point values as well as Int16 and Int32 integer values When converting between integer data and floating point data the following rules apply The default behaviour when reading floating point data from file with integer data is normalisation Regardless of whether data in the file is or bit wide the data will be read as floating point data in the range Similarly data in the range will be written to an integer PCM file so that data value of will be the largest allowable integer for the given bit width This normalisation can be turned on or off using the command interface implementation missing in Haskell hGetSamples and hGetFrames return the number of items read Unless the end of the file was reached during the read the return value should equal the number of items requested Attempts to read beyond the end of the file will not result in an error but will cause the read functions to return less than the number of items requested or if already at the end of the file",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "Sample",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:fromForeignPtr",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a buffer from a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e, a start index and the element count.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "ForeignPtr e -\u003e Int -\u003e Int -\u003e IO (a e)",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#fromForeignPtr",
        "fct-type": "method",
        "title": "fromForeignPtr"
      },
      "index": {
        "description": "Construct buffer from ForeignPtr start index and the element count",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "fromForeignPtr",
        "normalized": "ForeignPtr a-\u003eInt-\u003eInt-\u003eIO(b a)",
        "package": "hsndfile",
        "partial": "Foreign Ptr",
        "signature": "ForeignPtr e-\u003eInt-\u003eInt-\u003eIO(a e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hGetBuf",
      "description": {
        "fct-descr": "\u003cp\u003eRead a buffer of frames.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e Ptr e -\u003e Count -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Buffer-Sample.html#hGetBuf",
        "fct-type": "method",
        "title": "hGetBuf"
      },
      "index": {
        "description": "Read buffer of frames",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "hGetBuf",
        "normalized": "Handle-\u003ePtr a-\u003eCount-\u003eIO Count",
        "package": "hsndfile",
        "partial": "Get Buf",
        "signature": "Handle-\u003ePtr e-\u003eCount-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hGetBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an buffer with the requested number of frames of data.\n\u003c/p\u003e\u003cp\u003eThe resulting buffer size is equal to the product of the number of frames \u003ccode\u003en\u003c/code\u003e and the number of channels in the soundfile.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e Count -\u003e IO (Maybe (a e))",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#hGetBuffer",
        "fct-type": "function",
        "title": "hGetBuffer"
      },
      "index": {
        "description": "Return an buffer with the requested number of frames of data The resulting buffer size is equal to the product of the number of frames and the number of channels in the soundfile",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "hGetBuffer",
        "normalized": "Handle-\u003eCount-\u003eIO(Maybe(a b))",
        "package": "hsndfile",
        "partial": "Get Buffer",
        "signature": "Handle-\u003eCount-\u003eIO(Maybe(a e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the contents of a handle open for reading in a single buffer.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e IO (Info, Maybe (a e))",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Return the contents of handle open for reading in single buffer",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "hGetContents",
        "normalized": "Handle-\u003eIO(Info,Maybe(a b))",
        "package": "hsndfile",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO(Info,Maybe(a e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hPutBuf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a buffer of frames.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e Ptr e -\u003e Count -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Buffer-Sample.html#hPutBuf",
        "fct-type": "method",
        "title": "hPutBuf"
      },
      "index": {
        "description": "Write buffer of frames",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "hPutBuf",
        "normalized": "Handle-\u003ePtr a-\u003eCount-\u003eIO Count",
        "package": "hsndfile",
        "partial": "Put Buf",
        "signature": "Handle-\u003ePtr e-\u003eCount-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hPutBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the contents of a buffer to a handle open for writing.\n\u003c/p\u003e\u003cp\u003eReturn the number of frames written.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e a e -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#hPutBuffer",
        "fct-type": "function",
        "title": "hPutBuffer"
      },
      "index": {
        "description": "Write the contents of buffer to handle open for writing Return the number of frames written",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "hPutBuffer",
        "normalized": "Handle-\u003ea b-\u003eIO Count",
        "package": "hsndfile",
        "partial": "Put Buffer",
        "signature": "Handle-\u003ea e-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the contents of a file in a single buffer.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "FilePath -\u003e IO (Info, Maybe (a e))",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "Return the contents of file in single buffer",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO(Info,Maybe(a b))",
        "package": "hsndfile",
        "partial": "File",
        "signature": "FilePath-\u003eIO(Info,Maybe(a e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:toForeignPtr",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve from a buffer a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e pointing to its data, a start index and an element count.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "a e -\u003e IO (ForeignPtr e, Int, Int)",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#toForeignPtr",
        "fct-type": "method",
        "title": "toForeignPtr"
      },
      "index": {
        "description": "Retrieve from buffer ForeignPtr pointing to its data start index and an element count",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "toForeignPtr",
        "normalized": "a b-\u003eIO(ForeignPtr b,Int,Int)",
        "package": "hsndfile",
        "partial": "Foreign Ptr",
        "signature": "a e-\u003eIO(ForeignPtr e,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the contents of a buffer to a file.\n Return the number of frames written.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile.Buffer",
        "fct-package": "hsndfile",
        "fct-signature": "Info -\u003e FilePath -\u003e a e -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "Write the contents of buffer to file Return the number of frames written",
        "hierarchy": "Sound File Sndfile Buffer",
        "module": "Sound.File.Sndfile.Buffer",
        "name": "writeFile",
        "normalized": "Info-\u003eFilePath-\u003ea b-\u003eIO Count",
        "package": "hsndfile",
        "partial": "File",
        "signature": "Info-\u003eFilePath-\u003ea e-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eSound.File.Sndfile\u003c/a\u003e provides a Haskell interface to the libsndfile\n   library by Erik de Castro Lopo (\u003ca\u003ehttp://www.mega-nerd.com/libsndfile/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe API is modeled after the original \u003cem\u003eC\u003c/em\u003e API, but type and function\n   identifiers follow Haskell naming conventions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "module",
        "fct-source": "src/Sound-File-Sndfile.html",
        "fct-type": "module",
        "title": "Sndfile"
      },
      "index": {
        "description": "Sound.File.Sndfile provides Haskell interface to the libsndfile library by Erik de Castro Lopo http www.mega-nerd.com libsndfile The API is modeled after the original API but type and function identifiers follow Haskell naming conventions",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Sndfile",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sndfile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Buffer",
      "description": {
        "fct-descr": "\u003cp\u003eBuffer class for I/O on soundfile handles.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "class",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#Buffer",
        "fct-type": "class",
        "title": "Buffer"
      },
      "index": {
        "description": "Buffer class for on soundfile handles",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Buffer",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Count",
      "description": {
        "fct-descr": "\u003cp\u003eType for expressing sample counts.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "type",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Count",
        "fct-type": "type",
        "title": "Count"
      },
      "index": {
        "description": "Type for expressing sample counts",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Count",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:EndianFormat",
      "description": {
        "fct-descr": "\u003cp\u003eEndianness.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
        "fct-type": "data",
        "title": "EndianFormat"
      },
      "index": {
        "description": "Endianness",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "EndianFormat",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Endian Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Exception",
      "description": {
        "fct-descr": "\u003cp\u003eValues of type \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e are thrown by the library when an error occurs.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003ecatch\u003c/code\u003e to catch only exceptions of this type.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Exception.html#Exception",
        "fct-type": "data",
        "title": "Exception"
      },
      "index": {
        "description": "Values of type Exception are thrown by the library when an error occurs Use catch to catch only exceptions of this type",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Exception",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eStream format specification, consisting of header, sample and endianness formats.\n\u003c/p\u003e\u003cp\u003eNot all combinations of header, sample and endianness formats are valid;\n valid combinations can be checked with the \u003ccode\u003e\u003ca\u003echeckFormat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "Stream format specification consisting of header sample and endianness formats Not all combinations of header sample and endianness formats are valid valid combinations can be checked with the checkFormat function",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Format",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Handle",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract file handle.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Handle",
        "fct-type": "data",
        "title": "Handle"
      },
      "index": {
        "description": "Abstract file handle",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Handle",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:HeaderFormat",
      "description": {
        "fct-descr": "\u003cp\u003eHeader format.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "data",
        "title": "HeaderFormat"
      },
      "index": {
        "description": "Header format",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormat",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:IOMode",
      "description": {
        "fct-descr": "\u003cp\u003eI/O mode.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#IOMode",
        "fct-type": "data",
        "title": "IOMode"
      },
      "index": {
        "description": "mode",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "IOMode",
        "normalized": "",
        "package": "hsndfile",
        "partial": "IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Index",
      "description": {
        "fct-descr": "\u003cp\u003eType for expressing sample indices.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "type",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Index",
        "fct-type": "type",
        "title": "Index"
      },
      "index": {
        "description": "Type for expressing sample indices",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Index",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Info",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e structure is for passing data between the calling function and\n   the library when opening a stream for reading or writing.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Info",
        "fct-type": "data",
        "title": "Info"
      },
      "index": {
        "description": "The Info structure is for passing data between the calling function and the library when opening stream for reading or writing",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Info",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Sample",
      "description": {
        "fct-descr": "\u003cp\u003eThe class Sample is used for polymorphic I/O on a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e, and is parameterized with the element type that is to be read from a file.\n\u003c/p\u003e\u003cp\u003eIt is important to note that the data type used by the calling program and the data format of the file do not need to be the same. For instance, it is possible to open a 16 bit PCM encoded WAV file and read the data in floating point format. The library seamlessly converts between the two formats on-the-fly; the Haskell interface currently supports reading and writing \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e floating point values, as well as \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e integer values.\n\u003c/p\u003e\u003cp\u003eWhen converting between integer data and floating point data, the following rules apply: The default behaviour when reading floating point data from a file with integer data is normalisation. Regardless of whether data in the file is 8, 16, 24 or 32 bit wide, the data will be read as floating point data in the range [-1.0, 1.0]. Similarly, data in the range [-1.0, 1.0] will be written to an integer PCM file so that a data value of 1.0 will be the largest allowable integer for the given bit width. This normalisation can be turned on or off using the command interface (\u003cem\u003eimplementation missing in Haskell\u003c/em\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehGetSamples\u003c/code\u003e and \u003ccode\u003ehGetFrames\u003c/code\u003e return the number of items read. Unless the end of the file was reached during the read, the return value should equal the number of items requested. Attempts to read beyond the end of the file will not result in an error but will cause the read functions to return less than the number of items requested or 0 if already at the end of the file.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "class",
        "fct-source": "src/Sound-File-Sndfile-Buffer-Sample.html#Sample",
        "fct-type": "class",
        "title": "Sample"
      },
      "index": {
        "description": "The class Sample is used for polymorphic on Handle and is parameterized with the element type that is to be read from file It is important to note that the data type used by the calling program and the data format of the file do not need to be the same For instance it is possible to open bit PCM encoded WAV file and read the data in floating point format The library seamlessly converts between the two formats on-the-fly the Haskell interface currently supports reading and writing Double or Float floating point values as well as Int16 and Int32 integer values When converting between integer data and floating point data the following rules apply The default behaviour when reading floating point data from file with integer data is normalisation Regardless of whether data in the file is or bit wide the data will be read as floating point data in the range Similarly data in the range will be written to an integer PCM file so that data value of will be the largest allowable integer for the given bit width This normalisation can be turned on or off using the command interface implementation missing in Haskell hGetSamples and hGetFrames return the number of items read Unless the end of the file was reached during the read the return value should equal the number of items requested Attempts to read beyond the end of the file will not result in an error but will cause the read functions to return less than the number of items requested or if already at the end of the file",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Sample",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:SampleFormat",
      "description": {
        "fct-descr": "\u003cp\u003eSample format.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "data",
        "title": "SampleFormat"
      },
      "index": {
        "description": "Sample format",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormat",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:SeekMode",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SeekMode",
        "fct-type": "data",
        "title": "SeekMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SeekMode",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Seek Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:StringType",
      "description": {
        "fct-descr": "\u003cp\u003eHeader string field types.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#StringType",
        "fct-type": "data",
        "title": "StringType"
      },
      "index": {
        "description": "Header string field types",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "StringType",
        "normalized": "",
        "package": "hsndfile",
        "partial": "String Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:AbsoluteSeek",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "AbsoluteSeek",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SeekMode",
        "fct-type": "function",
        "title": "AbsoluteSeek"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "AbsoluteSeek",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Absolute Seek",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:EndianBig",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "EndianBig",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
        "fct-type": "function",
        "title": "EndianBig"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "EndianBig",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Endian Big",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:EndianCpu",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "EndianCpu",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
        "fct-type": "function",
        "title": "EndianCpu"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "EndianCpu",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Endian Cpu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:EndianFile",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "EndianFile",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
        "fct-type": "function",
        "title": "EndianFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "EndianFile",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Endian File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:EndianLittle",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "EndianLittle",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
        "fct-type": "function",
        "title": "EndianLittle"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "EndianLittle",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Endian Little",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:Exception",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Exception",
        "fct-source": "src/Sound-File-Sndfile-Exception.html#Exception",
        "fct-type": "function",
        "title": "Exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Exception",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:Format",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Format",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Format",
        "fct-type": "function",
        "title": "Format"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Format",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatAiff",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatAiff",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatAiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatAiff",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Aiff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatAu",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatAu",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatAu"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatAu",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Au",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatAvr",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatAvr",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatAvr"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatAvr",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Avr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatCaf",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatCaf",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatCaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatCaf",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Caf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatFlac",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatFlac",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatFlac"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatFlac",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Flac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatHtk",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatHtk",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatHtk"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatHtk",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Htk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatIrcam",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatIrcam",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatIrcam"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatIrcam",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Ircam",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatMat4",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatMat4",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatMat4"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatMat4",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Mat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatMat5",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatMat5",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatMat5"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatMat5",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Mat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatMpc2k",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatMpc2k",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatMpc2k"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatMpc2k",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Mpc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatNist",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatNist",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatNist"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatNist",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Nist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatNone",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatNone",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatNone",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatOgg",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatOgg",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatOgg"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatOgg",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Ogg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatPaf",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatPaf",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatPaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatPaf",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Paf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatPvf",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatPvf",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatPvf"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatPvf",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Pvf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatRaw",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatRaw",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatRaw",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatRf64",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatRf64",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatRf64"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatRf64",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Rf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatSd2",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatSd2",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatSd2"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatSd2",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Sd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatSds",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatSds",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatSds"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatSds",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Sds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatSvx",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatSvx",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatSvx"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatSvx",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Svx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatVoc",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatVoc",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatVoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatVoc",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Voc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatW64",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatW64",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatW64"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatW64",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatWav",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatWav",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatWav"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatWav",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Wav",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatWavex",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatWavex",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatWavex"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatWavex",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Wavex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatWve",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatWve",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatWve"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatWve",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Wve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatXi",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormatXi",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
        "fct-type": "function",
        "title": "HeaderFormatXi"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "HeaderFormatXi",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Header Format Xi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:Info",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Info",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Info",
        "fct-type": "function",
        "title": "Info"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "Info",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:MalformedFile",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "MalformedFile",
        "fct-source": "src/Sound-File-Sndfile-Exception.html#Exception",
        "fct-type": "function",
        "title": "MalformedFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "MalformedFile",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Malformed File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:ReadMode",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "ReadMode",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#IOMode",
        "fct-type": "function",
        "title": "ReadMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "ReadMode",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Read Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:ReadWriteMode",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "ReadWriteMode",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#IOMode",
        "fct-type": "function",
        "title": "ReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "ReadWriteMode",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:RelativeSeek",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "RelativeSeek",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SeekMode",
        "fct-type": "function",
        "title": "RelativeSeek"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "RelativeSeek",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Relative Seek",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatAlaw",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatAlaw",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatAlaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatAlaw",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Alaw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDouble",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatDouble",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatDouble",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDwvw12",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatDwvw12",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatDwvw12"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatDwvw12",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Dwvw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDwvw16",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatDwvw16",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatDwvw16"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatDwvw16",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Dwvw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDwvw24",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatDwvw24",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatDwvw24"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatDwvw24",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Dwvw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDwvwN",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatDwvwN",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatDwvwN"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatDwvwN",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Dwvw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatFloat",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatFloat",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatFloat",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatFormatDpcm16",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatFormatDpcm16",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatFormatDpcm16"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatFormatDpcm16",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Format Dpcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatFormatDpcm8",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatFormatDpcm8",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatFormatDpcm8"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatFormatDpcm8",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Format Dpcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatG72132",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatG72132",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatG72132"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatG72132",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatG72324",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatG72324",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatG72324"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatG72324",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatG72340",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatG72340",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatG72340"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatG72340",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatGsm610",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatGsm610",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatGsm610"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatGsm610",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Gsm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatImaAdpcm",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatImaAdpcm",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatImaAdpcm"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatImaAdpcm",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Ima Adpcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatMsAdpcm",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatMsAdpcm",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatMsAdpcm"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatMsAdpcm",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Ms Adpcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatNone",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatNone",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatNone",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcm16",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatPcm16",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatPcm16"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatPcm16",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Pcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcm24",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatPcm24",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatPcm24"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatPcm24",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Pcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcm32",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatPcm32",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatPcm32"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatPcm32",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Pcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcmS8",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatPcmS8",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatPcmS8"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatPcmS8",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Pcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcmU8",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatPcmU8",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatPcmU8"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatPcmU8",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Pcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatUlaw",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatUlaw",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatUlaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatUlaw",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Ulaw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatVorbis",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatVorbis",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatVorbis"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatVorbis",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Vorbis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatVoxAdpcm",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormatVoxAdpcm",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
        "fct-type": "function",
        "title": "SampleFormatVoxAdpcm"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SampleFormatVoxAdpcm",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Sample Format Vox Adpcm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SeekFromEnd",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SeekFromEnd",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#SeekMode",
        "fct-type": "function",
        "title": "SeekFromEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SeekFromEnd",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Seek From End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrArtist",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "StrArtist",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#StringType",
        "fct-type": "function",
        "title": "StrArtist"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "StrArtist",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Str Artist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrComment",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "StrComment",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#StringType",
        "fct-type": "function",
        "title": "StrComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "StrComment",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Str Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrCopyright",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "StrCopyright",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#StringType",
        "fct-type": "function",
        "title": "StrCopyright"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "StrCopyright",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Str Copyright",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrDate",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "StrDate",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#StringType",
        "fct-type": "function",
        "title": "StrDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "StrDate",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Str Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrSoftware",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "StrSoftware",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#StringType",
        "fct-type": "function",
        "title": "StrSoftware"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "StrSoftware",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Str Software",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrTitle",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "StrTitle",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#StringType",
        "fct-type": "function",
        "title": "StrTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "StrTitle",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Str Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SystemError",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SystemError",
        "fct-source": "src/Sound-File-Sndfile-Exception.html#Exception",
        "fct-type": "function",
        "title": "SystemError"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "SystemError",
        "normalized": "",
        "package": "hsndfile",
        "partial": "System Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:UnrecognisedFormat",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "UnrecognisedFormat",
        "fct-source": "src/Sound-File-Sndfile-Exception.html#Exception",
        "fct-type": "function",
        "title": "UnrecognisedFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "UnrecognisedFormat",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Unrecognised Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:UnsupportedEncoding",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "UnsupportedEncoding",
        "fct-source": "src/Sound-File-Sndfile-Exception.html#Exception",
        "fct-type": "function",
        "title": "UnsupportedEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "UnsupportedEncoding",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Unsupported Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:WriteMode",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "WriteMode",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#IOMode",
        "fct-type": "function",
        "title": "WriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "WriteMode",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:channels",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of channels\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Int",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Info",
        "fct-type": "function",
        "title": "channels"
      },
      "index": {
        "description": "Number of channels",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "channels",
        "normalized": "",
        "package": "hsndfile",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:checkFormat",
      "description": {
        "fct-descr": "\u003cp\u003eThis function allows the caller to check if a set of parameters in the\n   \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e struct is valid before calling \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003echeckFormat\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the parameters are valid and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Info -\u003e Bool",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#checkFormat",
        "fct-type": "function",
        "title": "checkFormat"
      },
      "index": {
        "description": "This function allows the caller to check if set of parameters in the Info struct is valid before calling openFile WriteMode checkFormat returns True if the parameters are valid and False otherwise",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "checkFormat",
        "normalized": "Info-\u003eBool",
        "package": "hsndfile",
        "partial": "Format",
        "signature": "Info-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:defaultFormat",
      "description": {
        "fct-descr": "\u003cp\u003eDefault 'empty' format, useful when opening files for reading with \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Format",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#defaultFormat",
        "fct-type": "function",
        "title": "defaultFormat"
      },
      "index": {
        "description": "Default empty format useful when opening files for reading with ReadMode",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "defaultFormat",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:defaultInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefault 'empty' info, useful when opening files for reading with \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Info",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#defaultInfo",
        "fct-type": "function",
        "title": "defaultInfo"
      },
      "index": {
        "description": "Default empty info useful when opening files for reading with ReadMode",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "defaultInfo",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:duration",
      "description": {
        "fct-descr": "\u003cp\u003eReturn soundfile duration in seconds computed via the \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e fields\n   \u003ccode\u003e\u003ca\u003eframes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esamplerate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Info -\u003e Double",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#duration",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "Return soundfile duration in seconds computed via the Info fields frames and samplerate",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "duration",
        "normalized": "Info-\u003eDouble",
        "package": "hsndfile",
        "partial": "",
        "signature": "Info-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:endianFormat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "EndianFormat",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Format",
        "fct-type": "function",
        "title": "endianFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "endianFormat",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:errorString",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "String",
        "fct-source": "src/Sound-File-Sndfile-Exception.html#Exception",
        "fct-type": "function",
        "title": "errorString"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "errorString",
        "normalized": "",
        "package": "hsndfile",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:format",
      "description": {
        "fct-descr": "\u003cp\u003eHeader and sample format\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Format",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Info",
        "fct-type": "function",
        "title": "format"
      },
      "index": {
        "description": "Header and sample format",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "format",
        "normalized": "",
        "package": "hsndfile",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:frames",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of frames in file\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Count",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Info",
        "fct-type": "function",
        "title": "frames"
      },
      "index": {
        "description": "Number of frames in file",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "frames",
        "normalized": "",
        "package": "hsndfile",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:fromForeignPtr",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a buffer from a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e, a start index and the element count.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "ForeignPtr e -\u003e Int -\u003e Int -\u003e IO (a e)",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#fromForeignPtr",
        "fct-type": "method",
        "title": "fromForeignPtr"
      },
      "index": {
        "description": "Construct buffer from ForeignPtr start index and the element count",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "fromForeignPtr",
        "normalized": "ForeignPtr a-\u003eInt-\u003eInt-\u003eIO(b a)",
        "package": "hsndfile",
        "partial": "Foreign Ptr",
        "signature": "ForeignPtr e-\u003eInt-\u003eInt-\u003eIO(a e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:getFileInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet header format information associated with file.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "FilePath -\u003e IO Info",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#getFileInfo",
        "fct-type": "function",
        "title": "getFileInfo"
      },
      "index": {
        "description": "Get header format information associated with file",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "getFileInfo",
        "normalized": "FilePath-\u003eIO Info",
        "package": "hsndfile",
        "partial": "File Info",
        "signature": "FilePath-\u003eIO Info"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:getString",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetString\u003c/a\u003e\u003c/code\u003e function returns the specified string from the stream header in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e monad if it exists and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e StringType -\u003e IO (Maybe String)",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#getString",
        "fct-type": "function",
        "title": "getString"
      },
      "index": {
        "description": "The getString function returns the specified string from the stream header in the Maybe monad if it exists and Nothing otherwise",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "getString",
        "normalized": "Handle-\u003eStringType-\u003eIO(Maybe String)",
        "package": "hsndfile",
        "partial": "String",
        "signature": "Handle-\u003eStringType-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hClose",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e function closes the stream, deallocates its internal buffers\n   and returns () on success or signals an \u003ccode\u003eException\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#hClose",
        "fct-type": "function",
        "title": "hClose"
      },
      "index": {
        "description": "The hClose function closes the stream deallocates its internal buffers and returns on success or signals an Exception otherwise",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hClose",
        "normalized": "Handle-\u003eIO()",
        "package": "hsndfile",
        "partial": "Close",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hFlush",
      "description": {
        "fct-descr": "\u003cp\u003eIf the stream is opened with \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e, call the\n   operating system's function to force the writing of all file cache\n   buffers to disk. If the file is opened with \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e no action is\n   taken.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#hFlush",
        "fct-type": "function",
        "title": "hFlush"
      },
      "index": {
        "description": "If the stream is opened with WriteMode or ReadWriteMode call the operating system function to force the writing of all file cache buffers to disk If the file is opened with ReadMode no action is taken",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hFlush",
        "normalized": "Handle-\u003eIO()",
        "package": "hsndfile",
        "partial": "Flush",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hGetBuf",
      "description": {
        "fct-descr": "\u003cp\u003eRead a buffer of frames.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e Ptr e -\u003e Count -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Buffer-Sample.html#hGetBuf",
        "fct-type": "method",
        "title": "hGetBuf"
      },
      "index": {
        "description": "Read buffer of frames",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hGetBuf",
        "normalized": "Handle-\u003ePtr a-\u003eCount-\u003eIO Count",
        "package": "hsndfile",
        "partial": "Get Buf",
        "signature": "Handle-\u003ePtr e-\u003eCount-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hGetBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an buffer with the requested number of frames of data.\n\u003c/p\u003e\u003cp\u003eThe resulting buffer size is equal to the product of the number of frames \u003ccode\u003en\u003c/code\u003e and the number of channels in the soundfile.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e Count -\u003e IO (Maybe (a e))",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#hGetBuffer",
        "fct-type": "function",
        "title": "hGetBuffer"
      },
      "index": {
        "description": "Return an buffer with the requested number of frames of data The resulting buffer size is equal to the product of the number of frames and the number of channels in the soundfile",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hGetBuffer",
        "normalized": "Handle-\u003eCount-\u003eIO(Maybe(a b))",
        "package": "hsndfile",
        "partial": "Get Buffer",
        "signature": "Handle-\u003eCount-\u003eIO(Maybe(a e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the contents of a handle open for reading in a single buffer.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e IO (Info, Maybe (a e))",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Return the contents of handle open for reading in single buffer",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hGetContents",
        "normalized": "Handle-\u003eIO(Info,Maybe(a b))",
        "package": "hsndfile",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO(Info,Maybe(a e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hInfo",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the stream \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e associated with the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e Info",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#hInfo",
        "fct-type": "function",
        "title": "hInfo"
      },
      "index": {
        "description": "Return the stream Info associated with the Handle",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hInfo",
        "normalized": "Handle-\u003eInfo",
        "package": "hsndfile",
        "partial": "Info",
        "signature": "Handle-\u003eInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hIsSeekable",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#hIsSeekable",
        "fct-type": "function",
        "title": "hIsSeekable"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hIsSeekable",
        "normalized": "Handle-\u003eIO Bool",
        "package": "hsndfile",
        "partial": "Is Seekable",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hPutBuf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a buffer of frames.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e Ptr e -\u003e Count -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Buffer-Sample.html#hPutBuf",
        "fct-type": "method",
        "title": "hPutBuf"
      },
      "index": {
        "description": "Write buffer of frames",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hPutBuf",
        "normalized": "Handle-\u003ePtr a-\u003eCount-\u003eIO Count",
        "package": "hsndfile",
        "partial": "Put Buf",
        "signature": "Handle-\u003ePtr e-\u003eCount-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hPutBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the contents of a buffer to a handle open for writing.\n\u003c/p\u003e\u003cp\u003eReturn the number of frames written.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e a e -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#hPutBuffer",
        "fct-type": "function",
        "title": "hPutBuffer"
      },
      "index": {
        "description": "Write the contents of buffer to handle open for writing Return the number of frames written",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hPutBuffer",
        "normalized": "Handle-\u003ea b-\u003eIO Count",
        "package": "hsndfile",
        "partial": "Put Buffer",
        "signature": "Handle-\u003ea e-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hSeek",
      "description": {
        "fct-descr": "\u003cp\u003eThe file seek functions work much like \u003ccode\u003e\u003ca\u003ehseek\u003c/a\u003e\u003c/code\u003e with the\n   exception that the non-audio data is ignored and the seek only moves\n   within the audio data section of the file. In addition, seeks are defined\n   in number of (multichannel) frames. Therefore, a seek in a stereo file\n   from the current position forward with an offset of 1 would skip forward\n   by one sample of both channels.\n\u003c/p\u003e\u003cp\u003elike lseek(), the whence parameter can be any one of the following three values:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eAbsoluteSeek\u003c/a\u003e\u003c/code\u003e - The offset is set to the start of the audio data plus offset (multichannel) frames.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRelativeSeek\u003c/a\u003e\u003c/code\u003e - The offset is set to its current location plus offset (multichannel) frames.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSeekFromEnd\u003c/a\u003e\u003c/code\u003e - The offset is set to the end of the data plus offset (multichannel) frames.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eInternally, libsndfile keeps track of the read and write locations using\n   separate read and write pointers. If a file has been opened with a mode\n   of \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e, calling either \u003ccode\u003e\u003ca\u003ehSeekRead\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehSeekWrite\u003c/a\u003e\u003c/code\u003e allows the\n   read and write pointers to be modified separately. \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e modifies both\n   the read and the write pointer.\n\u003c/p\u003e\u003cp\u003eNote that the frames offset can be negative and in fact should be when\n   SeekFromEnd is used for the whence parameter.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e will return the offset in (multichannel) frames from the start of\n   the audio data, or signal an error when an attempt is made to seek\n   beyond the start or end of the file.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e SeekMode -\u003e Count -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#hSeek",
        "fct-type": "function",
        "title": "hSeek"
      },
      "index": {
        "description": "The file seek functions work much like hseek with the exception that the non-audio data is ignored and the seek only moves within the audio data section of the file In addition seeks are defined in number of multichannel frames Therefore seek in stereo file from the current position forward with an offset of would skip forward by one sample of both channels like lseek the whence parameter can be any one of the following three values AbsoluteSeek The offset is set to the start of the audio data plus offset multichannel frames RelativeSeek The offset is set to its current location plus offset multichannel frames SeekFromEnd The offset is set to the end of the data plus offset multichannel frames Internally libsndfile keeps track of the read and write locations using separate read and write pointers If file has been opened with mode of ReadWriteMode calling either hSeekRead or hSeekWrite allows the read and write pointers to be modified separately hSeek modifies both the read and the write pointer Note that the frames offset can be negative and in fact should be when SeekFromEnd is used for the whence parameter hSeek will return the offset in multichannel frames from the start of the audio data or signal an error when an attempt is made to seek beyond the start or end of the file",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hSeek",
        "normalized": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count",
        "package": "hsndfile",
        "partial": "Seek",
        "signature": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hSeekRead",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e, but only the read pointer is modified.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e SeekMode -\u003e Count -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#hSeekRead",
        "fct-type": "function",
        "title": "hSeekRead"
      },
      "index": {
        "description": "Like hSeek but only the read pointer is modified",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hSeekRead",
        "normalized": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count",
        "package": "hsndfile",
        "partial": "Seek Read",
        "signature": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hSeekWrite",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e, but only the write pointer is modified.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e SeekMode -\u003e Count -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#hSeekWrite",
        "fct-type": "function",
        "title": "hSeekWrite"
      },
      "index": {
        "description": "Like hSeek but only the write pointer is modified",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "hSeekWrite",
        "normalized": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count",
        "package": "hsndfile",
        "partial": "Seek Write",
        "signature": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:headerFormat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "HeaderFormat",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Format",
        "fct-type": "function",
        "title": "headerFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "headerFormat",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:openFile",
      "description": {
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "FilePath -\u003e IOMode -\u003e Info -\u003e IO Handle",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#openFile",
        "fct-type": "function",
        "title": "openFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "openFile",
        "normalized": "FilePath-\u003eIOMode-\u003eInfo-\u003eIO Handle",
        "package": "hsndfile",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003eInfo-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the contents of a file in a single buffer.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "FilePath -\u003e IO (Info, Maybe (a e))",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "Return the contents of file in single buffer",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO(Info,Maybe(a b))",
        "package": "hsndfile",
        "partial": "File",
        "signature": "FilePath-\u003eIO(Info,Maybe(a e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:sampleFormat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "SampleFormat",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Format",
        "fct-type": "function",
        "title": "sampleFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "sampleFormat",
        "normalized": "",
        "package": "hsndfile",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:samplerate",
      "description": {
        "fct-descr": "\u003cp\u003eAudio sample rate\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Int",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Info",
        "fct-type": "function",
        "title": "samplerate"
      },
      "index": {
        "description": "Audio sample rate",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "samplerate",
        "normalized": "",
        "package": "hsndfile",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:sections",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of sections\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Int",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Info",
        "fct-type": "function",
        "title": "sections"
      },
      "index": {
        "description": "Number of sections",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "sections",
        "normalized": "",
        "package": "hsndfile",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:seekable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when stream is seekable (e.g. local files)\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Bool",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#Info",
        "fct-type": "function",
        "title": "seekable"
      },
      "index": {
        "description": "True when stream is seekable e.g local files",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "seekable",
        "normalized": "",
        "package": "hsndfile",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:setString",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esetString\u003c/a\u003e\u003c/code\u003e function sets the string data associated with the respective \u003ccode\u003e\u003ca\u003eStringType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Handle -\u003e StringType -\u003e String -\u003e IO ()",
        "fct-source": "src/Sound-File-Sndfile-Interface.html#setString",
        "fct-type": "function",
        "title": "setString"
      },
      "index": {
        "description": "The setString function sets the string data associated with the respective StringType",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "setString",
        "normalized": "Handle-\u003eStringType-\u003eString-\u003eIO()",
        "package": "hsndfile",
        "partial": "String",
        "signature": "Handle-\u003eStringType-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:toForeignPtr",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve from a buffer a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e pointing to its data, a start index and an element count.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "a e -\u003e IO (ForeignPtr e, Int, Int)",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#toForeignPtr",
        "fct-type": "method",
        "title": "toForeignPtr"
      },
      "index": {
        "description": "Retrieve from buffer ForeignPtr pointing to its data start index and an element count",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "toForeignPtr",
        "normalized": "a b-\u003eIO(ForeignPtr b,Int,Int)",
        "package": "hsndfile",
        "partial": "Foreign Ptr",
        "signature": "a e-\u003eIO(ForeignPtr e,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the contents of a buffer to a file.\n Return the number of frames written.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Sndfile",
        "fct-package": "hsndfile",
        "fct-signature": "Info -\u003e FilePath -\u003e a e -\u003e IO Count",
        "fct-source": "src/Sound-File-Sndfile-Buffer.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "Write the contents of buffer to file Return the number of frames written",
        "hierarchy": "Sound File Sndfile",
        "module": "Sound.File.Sndfile",
        "name": "writeFile",
        "normalized": "Info-\u003eFilePath-\u003ea b-\u003eIO Count",
        "package": "hsndfile",
        "partial": "File",
        "signature": "Info-\u003eFilePath-\u003ea e-\u003eIO Count"
      }
    }
  }
]