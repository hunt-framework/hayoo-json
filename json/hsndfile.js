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
        "word": "hsndfile"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e type class that abstracts the array type that is being used for I/O. For concrete instances see for example the \u003cem\u003ehsndfile-vector\u003c/em\u003e package \u003ca\u003ehttp://hackage.haskell.org/package/hsndfile-vector\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "Buffer",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Buffer.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the Buffer type class that abstracts the array type that is being used for For concrete instances see for example the hsndfile-vector package http hackage.haskell.org package hsndfile-vector",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "Buffer",
          "package": "hsndfile",
          "partial": "Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuffer class for I/O on soundfile handles.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "Buffer",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Buffer.html#Buffer",
          "type": "class"
        },
        "index": {
          "description": "Buffer class for on soundfile handles",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "Buffer",
          "package": "hsndfile",
          "partial": "Buffer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class Sample is used for polymorphic I/O on a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e, and is parameterized with the element type that is to be read from a file.\n\u003c/p\u003e\u003cp\u003eIt is important to note that the data type used by the calling program and the data format of the file do not need to be the same. For instance, it is possible to open a 16 bit PCM encoded WAV file and read the data in floating point format. The library seamlessly converts between the two formats on-the-fly; the Haskell interface currently supports reading and writing \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e floating point values, as well as \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e integer values.\n\u003c/p\u003e\u003cp\u003eWhen converting between integer data and floating point data, the following rules apply: The default behaviour when reading floating point data from a file with integer data is normalisation. Regardless of whether data in the file is 8, 16, 24 or 32 bit wide, the data will be read as floating point data in the range [-1.0, 1.0]. Similarly, data in the range [-1.0, 1.0] will be written to an integer PCM file so that a data value of 1.0 will be the largest allowable integer for the given bit width. This normalisation can be turned on or off using the command interface (\u003cem\u003eimplementation missing in Haskell\u003c/em\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehGetSamples\u003c/code\u003e and \u003ccode\u003ehGetFrames\u003c/code\u003e return the number of items read. Unless the end of the file was reached during the read, the return value should equal the number of items requested. Attempts to read beyond the end of the file will not result in an error but will cause the read functions to return less than the number of items requested or 0 if already at the end of the file.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "Sample",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Buffer-Sample.html#Sample",
          "type": "class"
        },
        "index": {
          "description": "The class Sample is used for polymorphic on Handle and is parameterized with the element type that is to be read from file It is important to note that the data type used by the calling program and the data format of the file do not need to be the same For instance it is possible to open bit PCM encoded WAV file and read the data in floating point format The library seamlessly converts between the two formats on-the-fly the Haskell interface currently supports reading and writing Double or Float floating point values as well as Int16 and Int32 integer values When converting between integer data and floating point data the following rules apply The default behaviour when reading floating point data from file with integer data is normalisation Regardless of whether data in the file is or bit wide the data will be read as floating point data in the range Similarly data in the range will be written to an integer PCM file so that data value of will be the largest allowable integer for the given bit width This normalisation can be turned on or off using the command interface implementation missing in Haskell hGetSamples and hGetFrames return the number of items read Unless the end of the file was reached during the read the return value should equal the number of items requested Attempts to read beyond the end of the file will not result in an error but will cause the read functions to return less than the number of items requested or if already at the end of the file",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "Sample",
          "package": "hsndfile",
          "partial": "Sample",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a buffer from a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e, a start index and the element count.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "fromForeignPtr",
          "package": "hsndfile",
          "signature": "ForeignPtr e -\u003e Int -\u003e Int -\u003e IO (a e)",
          "source": "src/Sound-File-Sndfile-Buffer.html#fromForeignPtr",
          "type": "method"
        },
        "index": {
          "description": "Construct buffer from ForeignPtr start index and the element count",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "fromForeignPtr",
          "normalized": "ForeignPtr a-\u003eInt-\u003eInt-\u003eIO(b a)",
          "package": "hsndfile",
          "partial": "Foreign Ptr",
          "signature": "ForeignPtr e-\u003eInt-\u003eInt-\u003eIO(a e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:fromForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a buffer of frames.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "hGetBuf",
          "package": "hsndfile",
          "signature": "Handle -\u003e Ptr e -\u003e Count -\u003e IO Count",
          "source": "src/Sound-File-Sndfile-Buffer-Sample.html#hGetBuf",
          "type": "method"
        },
        "index": {
          "description": "Read buffer of frames",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "hGetBuf",
          "normalized": "Handle-\u003ePtr a-\u003eCount-\u003eIO Count",
          "package": "hsndfile",
          "partial": "Get Buf",
          "signature": "Handle-\u003ePtr e-\u003eCount-\u003eIO Count",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hGetBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an buffer with the requested number of frames of data.\n\u003c/p\u003e\u003cp\u003eThe resulting buffer size is equal to the product of the number of frames \u003ccode\u003en\u003c/code\u003e and the number of channels in the soundfile.\n\u003c/p\u003e",
          "module": "[\"Sound.File.Sndfile.Buffer\",\"Sound.File.Sndfile\"]",
          "name": "hGetBuffer",
          "package": "hsndfile",
          "signature": "Handle -\u003e Count -\u003e IO (Maybe (a e))",
          "source": "src/Sound-File-Sndfile-Buffer.html#hGetBuffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hGetBuffer\",\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hGetBuffer\"]"
        },
        "index": {
          "description": "Return an buffer with the requested number of frames of data The resulting buffer size is equal to the product of the number of frames and the number of channels in the soundfile",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "hGetBuffer",
          "normalized": "Handle-\u003eCount-\u003eIO(Maybe(a b))",
          "package": "hsndfile",
          "partial": "Get Buffer",
          "signature": "Handle-\u003eCount-\u003eIO(Maybe(a e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hGetBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the contents of a handle open for reading in a single buffer.\n\u003c/p\u003e",
          "module": "[\"Sound.File.Sndfile.Buffer\",\"Sound.File.Sndfile\"]",
          "name": "hGetContents",
          "package": "hsndfile",
          "signature": "Handle -\u003e IO (Info, Maybe (a e))",
          "source": "src/Sound-File-Sndfile-Buffer.html#hGetContents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hGetContents\",\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hGetContents\"]"
        },
        "index": {
          "description": "Return the contents of handle open for reading in single buffer",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO(Info,Maybe(a b))",
          "package": "hsndfile",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO(Info,Maybe(a e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a buffer of frames.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "hPutBuf",
          "package": "hsndfile",
          "signature": "Handle -\u003e Ptr e -\u003e Count -\u003e IO Count",
          "source": "src/Sound-File-Sndfile-Buffer-Sample.html#hPutBuf",
          "type": "method"
        },
        "index": {
          "description": "Write buffer of frames",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "hPutBuf",
          "normalized": "Handle-\u003ePtr a-\u003eCount-\u003eIO Count",
          "package": "hsndfile",
          "partial": "Put Buf",
          "signature": "Handle-\u003ePtr e-\u003eCount-\u003eIO Count",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hPutBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the contents of a buffer to a handle open for writing.\n\u003c/p\u003e\u003cp\u003eReturn the number of frames written.\n\u003c/p\u003e",
          "module": "[\"Sound.File.Sndfile.Buffer\",\"Sound.File.Sndfile\"]",
          "name": "hPutBuffer",
          "package": "hsndfile",
          "signature": "Handle -\u003e a e -\u003e IO Count",
          "source": "src/Sound-File-Sndfile-Buffer.html#hPutBuffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hPutBuffer\",\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hPutBuffer\"]"
        },
        "index": {
          "description": "Write the contents of buffer to handle open for writing Return the number of frames written",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "hPutBuffer",
          "normalized": "Handle-\u003ea b-\u003eIO Count",
          "package": "hsndfile",
          "partial": "Put Buffer",
          "signature": "Handle-\u003ea e-\u003eIO Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:hPutBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the contents of a file in a single buffer.\n\u003c/p\u003e",
          "module": "[\"Sound.File.Sndfile.Buffer\",\"Sound.File.Sndfile\"]",
          "name": "readFile",
          "package": "hsndfile",
          "signature": "FilePath -\u003e IO (Info, Maybe (a e))",
          "source": "src/Sound-File-Sndfile-Buffer.html#readFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:readFile\",\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:readFile\"]"
        },
        "index": {
          "description": "Return the contents of file in single buffer",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO(Info,Maybe(a b))",
          "package": "hsndfile",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Info,Maybe(a e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve from a buffer a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e pointing to its data, a start index and an element count.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "toForeignPtr",
          "package": "hsndfile",
          "signature": "a e -\u003e IO (ForeignPtr e, Int, Int)",
          "source": "src/Sound-File-Sndfile-Buffer.html#toForeignPtr",
          "type": "method"
        },
        "index": {
          "description": "Retrieve from buffer ForeignPtr pointing to its data start index and an element count",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "toForeignPtr",
          "normalized": "a b-\u003eIO(ForeignPtr b,Int,Int)",
          "package": "hsndfile",
          "partial": "Foreign Ptr",
          "signature": "a e-\u003eIO(ForeignPtr e,Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:toForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the contents of a buffer to a file.\n Return the number of frames written.\n\u003c/p\u003e",
          "module": "[\"Sound.File.Sndfile.Buffer\",\"Sound.File.Sndfile\"]",
          "name": "writeFile",
          "package": "hsndfile",
          "signature": "Info -\u003e FilePath -\u003e a e -\u003e IO Count",
          "source": "src/Sound-File-Sndfile-Buffer.html#writeFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:writeFile\",\"http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:writeFile\"]"
        },
        "index": {
          "description": "Write the contents of buffer to file Return the number of frames written",
          "hierarchy": "Sound File Sndfile Buffer",
          "module": "Sound.File.Sndfile.Buffer",
          "name": "writeFile",
          "normalized": "Info-\u003eFilePath-\u003ea b-\u003eIO Count",
          "package": "hsndfile",
          "partial": "File",
          "signature": "Info-\u003eFilePath-\u003ea e-\u003eIO Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile-Buffer.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eSound.File.Sndfile\u003c/a\u003e provides a Haskell interface to the libsndfile\n   library by Erik de Castro Lopo (\u003ca\u003ehttp://www.mega-nerd.com/libsndfile/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe API is modeled after the original \u003cem\u003eC\u003c/em\u003e API, but type and function\n   identifiers follow Haskell naming conventions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.Sndfile",
          "name": "Sndfile",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile.html",
          "type": "module"
        },
        "index": {
          "description": "Sound.File.Sndfile provides Haskell interface to the libsndfile library by Erik de Castro Lopo http www.mega-nerd.com libsndfile The API is modeled after the original API but type and function identifiers follow Haskell naming conventions",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Sndfile",
          "package": "hsndfile",
          "partial": "Sndfile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuffer class for I/O on soundfile handles.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "Buffer",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Buffer.html#Buffer",
          "type": "class"
        },
        "index": {
          "description": "Buffer class for on soundfile handles",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Buffer",
          "package": "hsndfile",
          "partial": "Buffer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for expressing sample counts.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "Count",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#Count",
          "type": "type"
        },
        "index": {
          "description": "Type for expressing sample counts",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Count",
          "package": "hsndfile",
          "partial": "Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEndianness.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "EndianFormat",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
          "type": "data"
        },
        "index": {
          "description": "Endianness",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "EndianFormat",
          "package": "hsndfile",
          "partial": "Endian Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:EndianFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues of type \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e are thrown by the library when an error occurs.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003ecatch\u003c/code\u003e to catch only exceptions of this type.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "Exception",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Exception.html#Exception",
          "type": "data"
        },
        "index": {
          "description": "Values of type Exception are thrown by the library when an error occurs Use catch to catch only exceptions of this type",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Exception",
          "package": "hsndfile",
          "partial": "Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream format specification, consisting of header, sample and endianness formats.\n\u003c/p\u003e\u003cp\u003eNot all combinations of header, sample and endianness formats are valid;\n valid combinations can be checked with the \u003ccode\u003e\u003ca\u003echeckFormat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "Format",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#Format",
          "type": "data"
        },
        "index": {
          "description": "Stream format specification consisting of header sample and endianness formats Not all combinations of header sample and endianness formats are valid valid combinations can be checked with the checkFormat function",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Format",
          "package": "hsndfile",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract file handle.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "Handle",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#Handle",
          "type": "data"
        },
        "index": {
          "description": "Abstract file handle",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Handle",
          "package": "hsndfile",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader format.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormat",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "data"
        },
        "index": {
          "description": "Header format",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormat",
          "package": "hsndfile",
          "partial": "Header Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:HeaderFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O mode.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "IOMode",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#IOMode",
          "type": "data"
        },
        "index": {
          "description": "mode",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "IOMode",
          "package": "hsndfile",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for expressing sample indices.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "Index",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#Index",
          "type": "type"
        },
        "index": {
          "description": "Type for expressing sample indices",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Index",
          "package": "hsndfile",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e structure is for passing data between the calling function and\n   the library when opening a stream for reading or writing.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "Info",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#Info",
          "type": "data"
        },
        "index": {
          "description": "The Info structure is for passing data between the calling function and the library when opening stream for reading or writing",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Info",
          "package": "hsndfile",
          "partial": "Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class Sample is used for polymorphic I/O on a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e, and is parameterized with the element type that is to be read from a file.\n\u003c/p\u003e\u003cp\u003eIt is important to note that the data type used by the calling program and the data format of the file do not need to be the same. For instance, it is possible to open a 16 bit PCM encoded WAV file and read the data in floating point format. The library seamlessly converts between the two formats on-the-fly; the Haskell interface currently supports reading and writing \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e floating point values, as well as \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e integer values.\n\u003c/p\u003e\u003cp\u003eWhen converting between integer data and floating point data, the following rules apply: The default behaviour when reading floating point data from a file with integer data is normalisation. Regardless of whether data in the file is 8, 16, 24 or 32 bit wide, the data will be read as floating point data in the range [-1.0, 1.0]. Similarly, data in the range [-1.0, 1.0] will be written to an integer PCM file so that a data value of 1.0 will be the largest allowable integer for the given bit width. This normalisation can be turned on or off using the command interface (\u003cem\u003eimplementation missing in Haskell\u003c/em\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehGetSamples\u003c/code\u003e and \u003ccode\u003ehGetFrames\u003c/code\u003e return the number of items read. Unless the end of the file was reached during the read, the return value should equal the number of items requested. Attempts to read beyond the end of the file will not result in an error but will cause the read functions to return less than the number of items requested or 0 if already at the end of the file.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "Sample",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Buffer-Sample.html#Sample",
          "type": "class"
        },
        "index": {
          "description": "The class Sample is used for polymorphic on Handle and is parameterized with the element type that is to be read from file It is important to note that the data type used by the calling program and the data format of the file do not need to be the same For instance it is possible to open bit PCM encoded WAV file and read the data in floating point format The library seamlessly converts between the two formats on-the-fly the Haskell interface currently supports reading and writing Double or Float floating point values as well as Int16 and Int32 integer values When converting between integer data and floating point data the following rules apply The default behaviour when reading floating point data from file with integer data is normalisation Regardless of whether data in the file is or bit wide the data will be read as floating point data in the range Similarly data in the range will be written to an integer PCM file so that data value of will be the largest allowable integer for the given bit width This normalisation can be turned on or off using the command interface implementation missing in Haskell hGetSamples and hGetFrames return the number of items read Unless the end of the file was reached during the read the return value should equal the number of items requested Attempts to read beyond the end of the file will not result in an error but will cause the read functions to return less than the number of items requested or if already at the end of the file",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Sample",
          "package": "hsndfile",
          "partial": "Sample",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample format.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormat",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "data"
        },
        "index": {
          "description": "Sample format",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormat",
          "package": "hsndfile",
          "partial": "Sample Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:SampleFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SeekMode",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#SeekMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SeekMode",
          "package": "hsndfile",
          "partial": "Seek Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:SeekMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader string field types.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "StringType",
          "package": "hsndfile",
          "source": "src/Sound-File-Sndfile-Interface.html#StringType",
          "type": "data"
        },
        "index": {
          "description": "Header string field types",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "StringType",
          "package": "hsndfile",
          "partial": "String Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#t:StringType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "AbsoluteSeek",
          "package": "hsndfile",
          "signature": "AbsoluteSeek",
          "source": "src/Sound-File-Sndfile-Interface.html#SeekMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "AbsoluteSeek",
          "package": "hsndfile",
          "partial": "Absolute Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:AbsoluteSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "EndianBig",
          "package": "hsndfile",
          "signature": "EndianBig",
          "source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "EndianBig",
          "package": "hsndfile",
          "partial": "Endian Big",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:EndianBig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "EndianCpu",
          "package": "hsndfile",
          "signature": "EndianCpu",
          "source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "EndianCpu",
          "package": "hsndfile",
          "partial": "Endian Cpu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:EndianCpu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "EndianFile",
          "package": "hsndfile",
          "signature": "EndianFile",
          "source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "EndianFile",
          "package": "hsndfile",
          "partial": "Endian File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:EndianFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "EndianLittle",
          "package": "hsndfile",
          "signature": "EndianLittle",
          "source": "src/Sound-File-Sndfile-Interface.html#EndianFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "EndianLittle",
          "package": "hsndfile",
          "partial": "Endian Little",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:EndianLittle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "Exception",
          "package": "hsndfile",
          "signature": "Exception",
          "source": "src/Sound-File-Sndfile-Exception.html#Exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Exception",
          "package": "hsndfile",
          "partial": "Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "Format",
          "package": "hsndfile",
          "signature": "Format",
          "source": "src/Sound-File-Sndfile-Interface.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Format",
          "package": "hsndfile",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatAiff",
          "package": "hsndfile",
          "signature": "HeaderFormatAiff",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatAiff",
          "package": "hsndfile",
          "partial": "Header Format Aiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatAiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatAu",
          "package": "hsndfile",
          "signature": "HeaderFormatAu",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatAu",
          "package": "hsndfile",
          "partial": "Header Format Au",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatAu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatAvr",
          "package": "hsndfile",
          "signature": "HeaderFormatAvr",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatAvr",
          "package": "hsndfile",
          "partial": "Header Format Avr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatAvr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatCaf",
          "package": "hsndfile",
          "signature": "HeaderFormatCaf",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatCaf",
          "package": "hsndfile",
          "partial": "Header Format Caf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatCaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatFlac",
          "package": "hsndfile",
          "signature": "HeaderFormatFlac",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatFlac",
          "package": "hsndfile",
          "partial": "Header Format Flac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatFlac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatHtk",
          "package": "hsndfile",
          "signature": "HeaderFormatHtk",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatHtk",
          "package": "hsndfile",
          "partial": "Header Format Htk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatHtk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatIrcam",
          "package": "hsndfile",
          "signature": "HeaderFormatIrcam",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatIrcam",
          "package": "hsndfile",
          "partial": "Header Format Ircam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatIrcam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatMat4",
          "package": "hsndfile",
          "signature": "HeaderFormatMat4",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatMat4",
          "package": "hsndfile",
          "partial": "Header Format Mat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatMat4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatMat5",
          "package": "hsndfile",
          "signature": "HeaderFormatMat5",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatMat5",
          "package": "hsndfile",
          "partial": "Header Format Mat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatMat5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatMpc2k",
          "package": "hsndfile",
          "signature": "HeaderFormatMpc2k",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatMpc2k",
          "package": "hsndfile",
          "partial": "Header Format Mpc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatMpc2k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatNist",
          "package": "hsndfile",
          "signature": "HeaderFormatNist",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatNist",
          "package": "hsndfile",
          "partial": "Header Format Nist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatNist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatNone",
          "package": "hsndfile",
          "signature": "HeaderFormatNone",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatNone",
          "package": "hsndfile",
          "partial": "Header Format None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatOgg",
          "package": "hsndfile",
          "signature": "HeaderFormatOgg",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatOgg",
          "package": "hsndfile",
          "partial": "Header Format Ogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatOgg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatPaf",
          "package": "hsndfile",
          "signature": "HeaderFormatPaf",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatPaf",
          "package": "hsndfile",
          "partial": "Header Format Paf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatPaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatPvf",
          "package": "hsndfile",
          "signature": "HeaderFormatPvf",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatPvf",
          "package": "hsndfile",
          "partial": "Header Format Pvf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatPvf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatRaw",
          "package": "hsndfile",
          "signature": "HeaderFormatRaw",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatRaw",
          "package": "hsndfile",
          "partial": "Header Format Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatRf64",
          "package": "hsndfile",
          "signature": "HeaderFormatRf64",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatRf64",
          "package": "hsndfile",
          "partial": "Header Format Rf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatRf64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatSd2",
          "package": "hsndfile",
          "signature": "HeaderFormatSd2",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatSd2",
          "package": "hsndfile",
          "partial": "Header Format Sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatSd2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatSds",
          "package": "hsndfile",
          "signature": "HeaderFormatSds",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatSds",
          "package": "hsndfile",
          "partial": "Header Format Sds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatSds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatSvx",
          "package": "hsndfile",
          "signature": "HeaderFormatSvx",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatSvx",
          "package": "hsndfile",
          "partial": "Header Format Svx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatSvx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatVoc",
          "package": "hsndfile",
          "signature": "HeaderFormatVoc",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatVoc",
          "package": "hsndfile",
          "partial": "Header Format Voc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatVoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatW64",
          "package": "hsndfile",
          "signature": "HeaderFormatW64",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatW64",
          "package": "hsndfile",
          "partial": "Header Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatW64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatWav",
          "package": "hsndfile",
          "signature": "HeaderFormatWav",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatWav",
          "package": "hsndfile",
          "partial": "Header Format Wav",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatWav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatWavex",
          "package": "hsndfile",
          "signature": "HeaderFormatWavex",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatWavex",
          "package": "hsndfile",
          "partial": "Header Format Wavex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatWavex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatWve",
          "package": "hsndfile",
          "signature": "HeaderFormatWve",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatWve",
          "package": "hsndfile",
          "partial": "Header Format Wve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatWve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatXi",
          "package": "hsndfile",
          "signature": "HeaderFormatXi",
          "source": "src/Sound-File-Sndfile-Interface.html#HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "HeaderFormatXi",
          "package": "hsndfile",
          "partial": "Header Format Xi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:HeaderFormatXi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "Info",
          "package": "hsndfile",
          "signature": "Info",
          "source": "src/Sound-File-Sndfile-Interface.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "Info",
          "package": "hsndfile",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "MalformedFile",
          "package": "hsndfile",
          "signature": "MalformedFile",
          "source": "src/Sound-File-Sndfile-Exception.html#Exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "MalformedFile",
          "package": "hsndfile",
          "partial": "Malformed File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:MalformedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "ReadMode",
          "package": "hsndfile",
          "signature": "ReadMode",
          "source": "src/Sound-File-Sndfile-Interface.html#IOMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "ReadMode",
          "package": "hsndfile",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "ReadWriteMode",
          "package": "hsndfile",
          "signature": "ReadWriteMode",
          "source": "src/Sound-File-Sndfile-Interface.html#IOMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "ReadWriteMode",
          "package": "hsndfile",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "RelativeSeek",
          "package": "hsndfile",
          "signature": "RelativeSeek",
          "source": "src/Sound-File-Sndfile-Interface.html#SeekMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "RelativeSeek",
          "package": "hsndfile",
          "partial": "Relative Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:RelativeSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatAlaw",
          "package": "hsndfile",
          "signature": "SampleFormatAlaw",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatAlaw",
          "package": "hsndfile",
          "partial": "Sample Format Alaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatAlaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDouble",
          "package": "hsndfile",
          "signature": "SampleFormatDouble",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDouble",
          "package": "hsndfile",
          "partial": "Sample Format Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDwvw12",
          "package": "hsndfile",
          "signature": "SampleFormatDwvw12",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDwvw12",
          "package": "hsndfile",
          "partial": "Sample Format Dwvw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDwvw12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDwvw16",
          "package": "hsndfile",
          "signature": "SampleFormatDwvw16",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDwvw16",
          "package": "hsndfile",
          "partial": "Sample Format Dwvw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDwvw16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDwvw24",
          "package": "hsndfile",
          "signature": "SampleFormatDwvw24",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDwvw24",
          "package": "hsndfile",
          "partial": "Sample Format Dwvw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDwvw24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDwvwN",
          "package": "hsndfile",
          "signature": "SampleFormatDwvwN",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatDwvwN",
          "package": "hsndfile",
          "partial": "Sample Format Dwvw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatDwvwN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatFloat",
          "package": "hsndfile",
          "signature": "SampleFormatFloat",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatFloat",
          "package": "hsndfile",
          "partial": "Sample Format Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatFormatDpcm16",
          "package": "hsndfile",
          "signature": "SampleFormatFormatDpcm16",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatFormatDpcm16",
          "package": "hsndfile",
          "partial": "Sample Format Format Dpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatFormatDpcm16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatFormatDpcm8",
          "package": "hsndfile",
          "signature": "SampleFormatFormatDpcm8",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatFormatDpcm8",
          "package": "hsndfile",
          "partial": "Sample Format Format Dpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatFormatDpcm8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatG72132",
          "package": "hsndfile",
          "signature": "SampleFormatG72132",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatG72132",
          "package": "hsndfile",
          "partial": "Sample Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatG72132"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatG72324",
          "package": "hsndfile",
          "signature": "SampleFormatG72324",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatG72324",
          "package": "hsndfile",
          "partial": "Sample Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatG72324"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatG72340",
          "package": "hsndfile",
          "signature": "SampleFormatG72340",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatG72340",
          "package": "hsndfile",
          "partial": "Sample Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatG72340"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatGsm610",
          "package": "hsndfile",
          "signature": "SampleFormatGsm610",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatGsm610",
          "package": "hsndfile",
          "partial": "Sample Format Gsm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatGsm610"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatImaAdpcm",
          "package": "hsndfile",
          "signature": "SampleFormatImaAdpcm",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatImaAdpcm",
          "package": "hsndfile",
          "partial": "Sample Format Ima Adpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatImaAdpcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatMsAdpcm",
          "package": "hsndfile",
          "signature": "SampleFormatMsAdpcm",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatMsAdpcm",
          "package": "hsndfile",
          "partial": "Sample Format Ms Adpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatMsAdpcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatNone",
          "package": "hsndfile",
          "signature": "SampleFormatNone",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatNone",
          "package": "hsndfile",
          "partial": "Sample Format None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcm16",
          "package": "hsndfile",
          "signature": "SampleFormatPcm16",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcm16",
          "package": "hsndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcm16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcm24",
          "package": "hsndfile",
          "signature": "SampleFormatPcm24",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcm24",
          "package": "hsndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcm24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcm32",
          "package": "hsndfile",
          "signature": "SampleFormatPcm32",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcm32",
          "package": "hsndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcm32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcmS8",
          "package": "hsndfile",
          "signature": "SampleFormatPcmS8",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcmS8",
          "package": "hsndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcmS8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcmU8",
          "package": "hsndfile",
          "signature": "SampleFormatPcmU8",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatPcmU8",
          "package": "hsndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatPcmU8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatUlaw",
          "package": "hsndfile",
          "signature": "SampleFormatUlaw",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatUlaw",
          "package": "hsndfile",
          "partial": "Sample Format Ulaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatUlaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatVorbis",
          "package": "hsndfile",
          "signature": "SampleFormatVorbis",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatVorbis",
          "package": "hsndfile",
          "partial": "Sample Format Vorbis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatVorbis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatVoxAdpcm",
          "package": "hsndfile",
          "signature": "SampleFormatVoxAdpcm",
          "source": "src/Sound-File-Sndfile-Interface.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SampleFormatVoxAdpcm",
          "package": "hsndfile",
          "partial": "Sample Format Vox Adpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SampleFormatVoxAdpcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SeekFromEnd",
          "package": "hsndfile",
          "signature": "SeekFromEnd",
          "source": "src/Sound-File-Sndfile-Interface.html#SeekMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SeekFromEnd",
          "package": "hsndfile",
          "partial": "Seek From End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SeekFromEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "StrArtist",
          "package": "hsndfile",
          "signature": "StrArtist",
          "source": "src/Sound-File-Sndfile-Interface.html#StringType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "StrArtist",
          "package": "hsndfile",
          "partial": "Str Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "StrComment",
          "package": "hsndfile",
          "signature": "StrComment",
          "source": "src/Sound-File-Sndfile-Interface.html#StringType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "StrComment",
          "package": "hsndfile",
          "partial": "Str Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "StrCopyright",
          "package": "hsndfile",
          "signature": "StrCopyright",
          "source": "src/Sound-File-Sndfile-Interface.html#StringType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "StrCopyright",
          "package": "hsndfile",
          "partial": "Str Copyright",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrCopyright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "StrDate",
          "package": "hsndfile",
          "signature": "StrDate",
          "source": "src/Sound-File-Sndfile-Interface.html#StringType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "StrDate",
          "package": "hsndfile",
          "partial": "Str Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "StrSoftware",
          "package": "hsndfile",
          "signature": "StrSoftware",
          "source": "src/Sound-File-Sndfile-Interface.html#StringType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "StrSoftware",
          "package": "hsndfile",
          "partial": "Str Software",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrSoftware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "StrTitle",
          "package": "hsndfile",
          "signature": "StrTitle",
          "source": "src/Sound-File-Sndfile-Interface.html#StringType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "StrTitle",
          "package": "hsndfile",
          "partial": "Str Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:StrTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "SystemError",
          "package": "hsndfile",
          "signature": "SystemError",
          "source": "src/Sound-File-Sndfile-Exception.html#Exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "SystemError",
          "package": "hsndfile",
          "partial": "System Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:SystemError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "UnrecognisedFormat",
          "package": "hsndfile",
          "signature": "UnrecognisedFormat",
          "source": "src/Sound-File-Sndfile-Exception.html#Exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "UnrecognisedFormat",
          "package": "hsndfile",
          "partial": "Unrecognised Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:UnrecognisedFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "UnsupportedEncoding",
          "package": "hsndfile",
          "signature": "UnsupportedEncoding",
          "source": "src/Sound-File-Sndfile-Exception.html#Exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "UnsupportedEncoding",
          "package": "hsndfile",
          "partial": "Unsupported Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:UnsupportedEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "WriteMode",
          "package": "hsndfile",
          "signature": "WriteMode",
          "source": "src/Sound-File-Sndfile-Interface.html#IOMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "WriteMode",
          "package": "hsndfile",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of channels\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "channels",
          "package": "hsndfile",
          "signature": "Int",
          "source": "src/Sound-File-Sndfile-Interface.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of channels",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "channels",
          "package": "hsndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:channels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function allows the caller to check if a set of parameters in the\n   \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e struct is valid before calling \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003echeckFormat\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the parameters are valid and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "checkFormat",
          "package": "hsndfile",
          "signature": "Info -\u003e Bool",
          "source": "src/Sound-File-Sndfile-Interface.html#checkFormat",
          "type": "function"
        },
        "index": {
          "description": "This function allows the caller to check if set of parameters in the Info struct is valid before calling openFile WriteMode checkFormat returns True if the parameters are valid and False otherwise",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "checkFormat",
          "normalized": "Info-\u003eBool",
          "package": "hsndfile",
          "partial": "Format",
          "signature": "Info-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:checkFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault 'empty' format, useful when opening files for reading with \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "defaultFormat",
          "package": "hsndfile",
          "signature": "Format",
          "source": "src/Sound-File-Sndfile-Interface.html#defaultFormat",
          "type": "function"
        },
        "index": {
          "description": "Default empty format useful when opening files for reading with ReadMode",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "defaultFormat",
          "package": "hsndfile",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:defaultFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault 'empty' info, useful when opening files for reading with \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "defaultInfo",
          "package": "hsndfile",
          "signature": "Info",
          "source": "src/Sound-File-Sndfile-Interface.html#defaultInfo",
          "type": "function"
        },
        "index": {
          "description": "Default empty info useful when opening files for reading with ReadMode",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "defaultInfo",
          "package": "hsndfile",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:defaultInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn soundfile duration in seconds computed via the \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e fields\n   \u003ccode\u003e\u003ca\u003eframes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esamplerate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "duration",
          "package": "hsndfile",
          "signature": "Info -\u003e Double",
          "source": "src/Sound-File-Sndfile-Interface.html#duration",
          "type": "function"
        },
        "index": {
          "description": "Return soundfile duration in seconds computed via the Info fields frames and samplerate",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "duration",
          "normalized": "Info-\u003eDouble",
          "package": "hsndfile",
          "signature": "Info-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "endianFormat",
          "package": "hsndfile",
          "signature": "EndianFormat",
          "source": "src/Sound-File-Sndfile-Interface.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "endianFormat",
          "package": "hsndfile",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:endianFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "errorString",
          "package": "hsndfile",
          "signature": "String",
          "source": "src/Sound-File-Sndfile-Exception.html#Exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "errorString",
          "package": "hsndfile",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:errorString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader and sample format\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "format",
          "package": "hsndfile",
          "signature": "Format",
          "source": "src/Sound-File-Sndfile-Interface.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Header and sample format",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "format",
          "package": "hsndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of frames in file\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "frames",
          "package": "hsndfile",
          "signature": "Count",
          "source": "src/Sound-File-Sndfile-Interface.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of frames in file",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "frames",
          "package": "hsndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:frames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a buffer from a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e, a start index and the element count.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "fromForeignPtr",
          "package": "hsndfile",
          "signature": "ForeignPtr e -\u003e Int -\u003e Int -\u003e IO (a e)",
          "source": "src/Sound-File-Sndfile-Buffer.html#fromForeignPtr",
          "type": "method"
        },
        "index": {
          "description": "Construct buffer from ForeignPtr start index and the element count",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "fromForeignPtr",
          "normalized": "ForeignPtr a-\u003eInt-\u003eInt-\u003eIO(b a)",
          "package": "hsndfile",
          "partial": "Foreign Ptr",
          "signature": "ForeignPtr e-\u003eInt-\u003eInt-\u003eIO(a e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:fromForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet header format information associated with file.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "getFileInfo",
          "package": "hsndfile",
          "signature": "FilePath -\u003e IO Info",
          "source": "src/Sound-File-Sndfile-Interface.html#getFileInfo",
          "type": "function"
        },
        "index": {
          "description": "Get header format information associated with file",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "getFileInfo",
          "normalized": "FilePath-\u003eIO Info",
          "package": "hsndfile",
          "partial": "File Info",
          "signature": "FilePath-\u003eIO Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:getFileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetString\u003c/a\u003e\u003c/code\u003e function returns the specified string from the stream header in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e monad if it exists and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "getString",
          "package": "hsndfile",
          "signature": "Handle -\u003e StringType -\u003e IO (Maybe String)",
          "source": "src/Sound-File-Sndfile-Interface.html#getString",
          "type": "function"
        },
        "index": {
          "description": "The getString function returns the specified string from the stream header in the Maybe monad if it exists and Nothing otherwise",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "getString",
          "normalized": "Handle-\u003eStringType-\u003eIO(Maybe String)",
          "package": "hsndfile",
          "partial": "String",
          "signature": "Handle-\u003eStringType-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:getString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e function closes the stream, deallocates its internal buffers\n   and returns () on success or signals an \u003ccode\u003eException\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "hClose",
          "package": "hsndfile",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Sound-File-Sndfile-Interface.html#hClose",
          "type": "function"
        },
        "index": {
          "description": "The hClose function closes the stream deallocates its internal buffers and returns on success or signals an Exception otherwise",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "hClose",
          "normalized": "Handle-\u003eIO()",
          "package": "hsndfile",
          "partial": "Close",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the stream is opened with \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e, call the\n   operating system's function to force the writing of all file cache\n   buffers to disk. If the file is opened with \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e no action is\n   taken.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "hFlush",
          "package": "hsndfile",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Sound-File-Sndfile-Interface.html#hFlush",
          "type": "function"
        },
        "index": {
          "description": "If the stream is opened with WriteMode or ReadWriteMode call the operating system function to force the writing of all file cache buffers to disk If the file is opened with ReadMode no action is taken",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "hFlush",
          "normalized": "Handle-\u003eIO()",
          "package": "hsndfile",
          "partial": "Flush",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a buffer of frames.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "hGetBuf",
          "package": "hsndfile",
          "signature": "Handle -\u003e Ptr e -\u003e Count -\u003e IO Count",
          "source": "src/Sound-File-Sndfile-Buffer-Sample.html#hGetBuf",
          "type": "method"
        },
        "index": {
          "description": "Read buffer of frames",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "hGetBuf",
          "normalized": "Handle-\u003ePtr a-\u003eCount-\u003eIO Count",
          "package": "hsndfile",
          "partial": "Get Buf",
          "signature": "Handle-\u003ePtr e-\u003eCount-\u003eIO Count",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hGetBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the stream \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e associated with the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "hInfo",
          "package": "hsndfile",
          "signature": "Handle -\u003e Info",
          "source": "src/Sound-File-Sndfile-Interface.html#hInfo",
          "type": "function"
        },
        "index": {
          "description": "Return the stream Info associated with the Handle",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "hInfo",
          "normalized": "Handle-\u003eInfo",
          "package": "hsndfile",
          "partial": "Info",
          "signature": "Handle-\u003eInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "hIsSeekable",
          "package": "hsndfile",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/Sound-File-Sndfile-Interface.html#hIsSeekable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "hIsSeekable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "hsndfile",
          "partial": "Is Seekable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hIsSeekable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a buffer of frames.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "hPutBuf",
          "package": "hsndfile",
          "signature": "Handle -\u003e Ptr e -\u003e Count -\u003e IO Count",
          "source": "src/Sound-File-Sndfile-Buffer-Sample.html#hPutBuf",
          "type": "method"
        },
        "index": {
          "description": "Write buffer of frames",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "hPutBuf",
          "normalized": "Handle-\u003ePtr a-\u003eCount-\u003eIO Count",
          "package": "hsndfile",
          "partial": "Put Buf",
          "signature": "Handle-\u003ePtr e-\u003eCount-\u003eIO Count",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hPutBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file seek functions work much like \u003ccode\u003e\u003ca\u003ehseek\u003c/a\u003e\u003c/code\u003e with the\n   exception that the non-audio data is ignored and the seek only moves\n   within the audio data section of the file. In addition, seeks are defined\n   in number of (multichannel) frames. Therefore, a seek in a stereo file\n   from the current position forward with an offset of 1 would skip forward\n   by one sample of both channels.\n\u003c/p\u003e\u003cp\u003elike lseek(), the whence parameter can be any one of the following three values:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eAbsoluteSeek\u003c/a\u003e\u003c/code\u003e - The offset is set to the start of the audio data plus offset (multichannel) frames.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRelativeSeek\u003c/a\u003e\u003c/code\u003e - The offset is set to its current location plus offset (multichannel) frames.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSeekFromEnd\u003c/a\u003e\u003c/code\u003e - The offset is set to the end of the data plus offset (multichannel) frames.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eInternally, libsndfile keeps track of the read and write locations using\n   separate read and write pointers. If a file has been opened with a mode\n   of \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e, calling either \u003ccode\u003e\u003ca\u003ehSeekRead\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehSeekWrite\u003c/a\u003e\u003c/code\u003e allows the\n   read and write pointers to be modified separately. \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e modifies both\n   the read and the write pointer.\n\u003c/p\u003e\u003cp\u003eNote that the frames offset can be negative and in fact should be when\n   SeekFromEnd is used for the whence parameter.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e will return the offset in (multichannel) frames from the start of\n   the audio data, or signal an error when an attempt is made to seek\n   beyond the start or end of the file.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "hSeek",
          "package": "hsndfile",
          "signature": "Handle -\u003e SeekMode -\u003e Count -\u003e IO Count",
          "source": "src/Sound-File-Sndfile-Interface.html#hSeek",
          "type": "function"
        },
        "index": {
          "description": "The file seek functions work much like hseek with the exception that the non-audio data is ignored and the seek only moves within the audio data section of the file In addition seeks are defined in number of multichannel frames Therefore seek in stereo file from the current position forward with an offset of would skip forward by one sample of both channels like lseek the whence parameter can be any one of the following three values AbsoluteSeek The offset is set to the start of the audio data plus offset multichannel frames RelativeSeek The offset is set to its current location plus offset multichannel frames SeekFromEnd The offset is set to the end of the data plus offset multichannel frames Internally libsndfile keeps track of the read and write locations using separate read and write pointers If file has been opened with mode of ReadWriteMode calling either hSeekRead or hSeekWrite allows the read and write pointers to be modified separately hSeek modifies both the read and the write pointer Note that the frames offset can be negative and in fact should be when SeekFromEnd is used for the whence parameter hSeek will return the offset in multichannel frames from the start of the audio data or signal an error when an attempt is made to seek beyond the start or end of the file",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "hSeek",
          "normalized": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count",
          "package": "hsndfile",
          "partial": "Seek",
          "signature": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e, but only the read pointer is modified.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "hSeekRead",
          "package": "hsndfile",
          "signature": "Handle -\u003e SeekMode -\u003e Count -\u003e IO Count",
          "source": "src/Sound-File-Sndfile-Interface.html#hSeekRead",
          "type": "function"
        },
        "index": {
          "description": "Like hSeek but only the read pointer is modified",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "hSeekRead",
          "normalized": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count",
          "package": "hsndfile",
          "partial": "Seek Read",
          "signature": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hSeekRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e, but only the write pointer is modified.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "hSeekWrite",
          "package": "hsndfile",
          "signature": "Handle -\u003e SeekMode -\u003e Count -\u003e IO Count",
          "source": "src/Sound-File-Sndfile-Interface.html#hSeekWrite",
          "type": "function"
        },
        "index": {
          "description": "Like hSeek but only the write pointer is modified",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "hSeekWrite",
          "normalized": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count",
          "package": "hsndfile",
          "partial": "Seek Write",
          "signature": "Handle-\u003eSeekMode-\u003eCount-\u003eIO Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:hSeekWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "headerFormat",
          "package": "hsndfile",
          "signature": "HeaderFormat",
          "source": "src/Sound-File-Sndfile-Interface.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "headerFormat",
          "package": "hsndfile",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:headerFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "openFile",
          "package": "hsndfile",
          "signature": "FilePath -\u003e IOMode -\u003e Info -\u003e IO Handle",
          "source": "src/Sound-File-Sndfile-Interface.html#openFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "openFile",
          "normalized": "FilePath-\u003eIOMode-\u003eInfo-\u003eIO Handle",
          "package": "hsndfile",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003eInfo-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:openFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile",
          "name": "sampleFormat",
          "package": "hsndfile",
          "signature": "SampleFormat",
          "source": "src/Sound-File-Sndfile-Interface.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "sampleFormat",
          "package": "hsndfile",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:sampleFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudio sample rate\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "samplerate",
          "package": "hsndfile",
          "signature": "Int",
          "source": "src/Sound-File-Sndfile-Interface.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Audio sample rate",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "samplerate",
          "package": "hsndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:samplerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of sections\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "sections",
          "package": "hsndfile",
          "signature": "Int",
          "source": "src/Sound-File-Sndfile-Interface.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of sections",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "sections",
          "package": "hsndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:sections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when stream is seekable (e.g. local files)\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "seekable",
          "package": "hsndfile",
          "signature": "Bool",
          "source": "src/Sound-File-Sndfile-Interface.html#Info",
          "type": "function"
        },
        "index": {
          "description": "True when stream is seekable e.g local files",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "seekable",
          "package": "hsndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:seekable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esetString\u003c/a\u003e\u003c/code\u003e function sets the string data associated with the respective \u003ccode\u003e\u003ca\u003eStringType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "setString",
          "package": "hsndfile",
          "signature": "Handle -\u003e StringType -\u003e String -\u003e IO ()",
          "source": "src/Sound-File-Sndfile-Interface.html#setString",
          "type": "function"
        },
        "index": {
          "description": "The setString function sets the string data associated with the respective StringType",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "setString",
          "normalized": "Handle-\u003eStringType-\u003eString-\u003eIO()",
          "package": "hsndfile",
          "partial": "String",
          "signature": "Handle-\u003eStringType-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:setString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve from a buffer a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e pointing to its data, a start index and an element count.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile",
          "name": "toForeignPtr",
          "package": "hsndfile",
          "signature": "a e -\u003e IO (ForeignPtr e, Int, Int)",
          "source": "src/Sound-File-Sndfile-Buffer.html#toForeignPtr",
          "type": "method"
        },
        "index": {
          "description": "Retrieve from buffer ForeignPtr pointing to its data start index and an element count",
          "hierarchy": "Sound File Sndfile",
          "module": "Sound.File.Sndfile",
          "name": "toForeignPtr",
          "normalized": "a b-\u003eIO(ForeignPtr b,Int,Int)",
          "package": "hsndfile",
          "partial": "Foreign Ptr",
          "signature": "a e-\u003eIO(ForeignPtr e,Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile/docs/Sound-File-Sndfile.html#v:toForeignPtr"
      }
    }
  ]
]