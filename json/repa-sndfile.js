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
        "word": "repa-sndfile"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write audio file with repa arrays using libsndfile via hsndfile.\nNote that this module re-exports header related types from hsndfile.\n\u003c/p\u003e\u003cp\u003eFor more info about supported format, visit libsndfile web site:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e libsndfile: \u003ca\u003ehttp://www.mega-nerd.com/libsndfile/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e hsndfile \u003ca\u003ehttp://haskell.org/haskellwiki/Hsndfile\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Sndfile",
          "package": "repa-sndfile",
          "source": "src/Data-Array-Repa-IO-Sndfile.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write audio file with repa arrays using libsndfile via hsndfile Note that this module re-exports header related types from hsndfile For more info about supported format visit libsndfile web site libsndfile http www.mega-nerd.com libsndfile hsndfile http haskell.org haskellwiki Hsndfile",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Sndfile",
          "package": "repa-sndfile",
          "partial": "Sndfile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for expressing sample counts.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Count",
          "package": "repa-sndfile",
          "type": "type"
        },
        "index": {
          "description": "Type for expressing sample counts",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Count",
          "package": "repa-sndfile",
          "partial": "Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#t:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEndianness.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianFormat",
          "package": "repa-sndfile",
          "type": "data"
        },
        "index": {
          "description": "Endianness",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianFormat",
          "package": "repa-sndfile",
          "partial": "Endian Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#t:EndianFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream format specification, consisting of header, sample and endianness formats.\n\u003c/p\u003e\u003cp\u003eNot all combinations of header, sample and endianness formats are valid;\n valid combinations can be checked with the \u003ccode\u003e\u003ca\u003echeckFormat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Format",
          "package": "repa-sndfile",
          "type": "data"
        },
        "index": {
          "description": "Stream format specification consisting of header sample and endianness formats Not all combinations of header sample and endianness formats are valid valid combinations can be checked with the checkFormat function",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Format",
          "package": "repa-sndfile",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader format.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormat",
          "package": "repa-sndfile",
          "type": "data"
        },
        "index": {
          "description": "Header format",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormat",
          "package": "repa-sndfile",
          "partial": "Header Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#t:HeaderFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e structure is for passing data between the calling function and\n   the library when opening a stream for reading or writing.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Info",
          "package": "repa-sndfile",
          "type": "data"
        },
        "index": {
          "description": "The Info structure is for passing data between the calling function and the library when opening stream for reading or writing",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Info",
          "package": "repa-sndfile",
          "partial": "Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#t:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample format.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormat",
          "package": "repa-sndfile",
          "type": "data"
        },
        "index": {
          "description": "Sample format",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormat",
          "package": "repa-sndfile",
          "partial": "Sample Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#t:SampleFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianBig",
          "package": "repa-sndfile",
          "signature": "EndianBig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianBig",
          "package": "repa-sndfile",
          "partial": "Endian Big",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:EndianBig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianCpu",
          "package": "repa-sndfile",
          "signature": "EndianCpu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianCpu",
          "package": "repa-sndfile",
          "partial": "Endian Cpu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:EndianCpu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianFile",
          "package": "repa-sndfile",
          "signature": "EndianFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianFile",
          "package": "repa-sndfile",
          "partial": "Endian File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:EndianFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianLittle",
          "package": "repa-sndfile",
          "signature": "EndianLittle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "EndianLittle",
          "package": "repa-sndfile",
          "partial": "Endian Little",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:EndianLittle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Format",
          "package": "repa-sndfile",
          "signature": "Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Format",
          "package": "repa-sndfile",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatAiff",
          "package": "repa-sndfile",
          "signature": "HeaderFormatAiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatAiff",
          "package": "repa-sndfile",
          "partial": "Header Format Aiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatAiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatAu",
          "package": "repa-sndfile",
          "signature": "HeaderFormatAu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatAu",
          "package": "repa-sndfile",
          "partial": "Header Format Au",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatAu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatAvr",
          "package": "repa-sndfile",
          "signature": "HeaderFormatAvr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatAvr",
          "package": "repa-sndfile",
          "partial": "Header Format Avr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatAvr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatCaf",
          "package": "repa-sndfile",
          "signature": "HeaderFormatCaf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatCaf",
          "package": "repa-sndfile",
          "partial": "Header Format Caf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatCaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatFlac",
          "package": "repa-sndfile",
          "signature": "HeaderFormatFlac",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatFlac",
          "package": "repa-sndfile",
          "partial": "Header Format Flac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatFlac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatHtk",
          "package": "repa-sndfile",
          "signature": "HeaderFormatHtk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatHtk",
          "package": "repa-sndfile",
          "partial": "Header Format Htk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatHtk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatIrcam",
          "package": "repa-sndfile",
          "signature": "HeaderFormatIrcam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatIrcam",
          "package": "repa-sndfile",
          "partial": "Header Format Ircam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatIrcam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatMat4",
          "package": "repa-sndfile",
          "signature": "HeaderFormatMat4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatMat4",
          "package": "repa-sndfile",
          "partial": "Header Format Mat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatMat4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatMat5",
          "package": "repa-sndfile",
          "signature": "HeaderFormatMat5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatMat5",
          "package": "repa-sndfile",
          "partial": "Header Format Mat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatMat5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatMpc2k",
          "package": "repa-sndfile",
          "signature": "HeaderFormatMpc2k",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatMpc2k",
          "package": "repa-sndfile",
          "partial": "Header Format Mpc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatMpc2k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatNist",
          "package": "repa-sndfile",
          "signature": "HeaderFormatNist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatNist",
          "package": "repa-sndfile",
          "partial": "Header Format Nist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatNist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatNone",
          "package": "repa-sndfile",
          "signature": "HeaderFormatNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatNone",
          "package": "repa-sndfile",
          "partial": "Header Format None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatOgg",
          "package": "repa-sndfile",
          "signature": "HeaderFormatOgg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatOgg",
          "package": "repa-sndfile",
          "partial": "Header Format Ogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatOgg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatPaf",
          "package": "repa-sndfile",
          "signature": "HeaderFormatPaf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatPaf",
          "package": "repa-sndfile",
          "partial": "Header Format Paf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatPaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatPvf",
          "package": "repa-sndfile",
          "signature": "HeaderFormatPvf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatPvf",
          "package": "repa-sndfile",
          "partial": "Header Format Pvf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatPvf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatRaw",
          "package": "repa-sndfile",
          "signature": "HeaderFormatRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatRaw",
          "package": "repa-sndfile",
          "partial": "Header Format Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatRf64",
          "package": "repa-sndfile",
          "signature": "HeaderFormatRf64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatRf64",
          "package": "repa-sndfile",
          "partial": "Header Format Rf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatRf64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatSd2",
          "package": "repa-sndfile",
          "signature": "HeaderFormatSd2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatSd2",
          "package": "repa-sndfile",
          "partial": "Header Format Sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatSd2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatSds",
          "package": "repa-sndfile",
          "signature": "HeaderFormatSds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatSds",
          "package": "repa-sndfile",
          "partial": "Header Format Sds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatSds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatSvx",
          "package": "repa-sndfile",
          "signature": "HeaderFormatSvx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatSvx",
          "package": "repa-sndfile",
          "partial": "Header Format Svx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatSvx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatVoc",
          "package": "repa-sndfile",
          "signature": "HeaderFormatVoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatVoc",
          "package": "repa-sndfile",
          "partial": "Header Format Voc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatVoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatW64",
          "package": "repa-sndfile",
          "signature": "HeaderFormatW64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatW64",
          "package": "repa-sndfile",
          "partial": "Header Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatW64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatWav",
          "package": "repa-sndfile",
          "signature": "HeaderFormatWav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatWav",
          "package": "repa-sndfile",
          "partial": "Header Format Wav",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatWav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatWavex",
          "package": "repa-sndfile",
          "signature": "HeaderFormatWavex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatWavex",
          "package": "repa-sndfile",
          "partial": "Header Format Wavex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatWavex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatWve",
          "package": "repa-sndfile",
          "signature": "HeaderFormatWve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatWve",
          "package": "repa-sndfile",
          "partial": "Header Format Wve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatWve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatXi",
          "package": "repa-sndfile",
          "signature": "HeaderFormatXi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "HeaderFormatXi",
          "package": "repa-sndfile",
          "partial": "Header Format Xi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:HeaderFormatXi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Info",
          "package": "repa-sndfile",
          "signature": "Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "Info",
          "package": "repa-sndfile",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatAlaw",
          "package": "repa-sndfile",
          "signature": "SampleFormatAlaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatAlaw",
          "package": "repa-sndfile",
          "partial": "Sample Format Alaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatAlaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDouble",
          "package": "repa-sndfile",
          "signature": "SampleFormatDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDouble",
          "package": "repa-sndfile",
          "partial": "Sample Format Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDwvw12",
          "package": "repa-sndfile",
          "signature": "SampleFormatDwvw12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDwvw12",
          "package": "repa-sndfile",
          "partial": "Sample Format Dwvw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatDwvw12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDwvw16",
          "package": "repa-sndfile",
          "signature": "SampleFormatDwvw16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDwvw16",
          "package": "repa-sndfile",
          "partial": "Sample Format Dwvw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatDwvw16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDwvw24",
          "package": "repa-sndfile",
          "signature": "SampleFormatDwvw24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDwvw24",
          "package": "repa-sndfile",
          "partial": "Sample Format Dwvw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatDwvw24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDwvwN",
          "package": "repa-sndfile",
          "signature": "SampleFormatDwvwN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatDwvwN",
          "package": "repa-sndfile",
          "partial": "Sample Format Dwvw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatDwvwN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatFloat",
          "package": "repa-sndfile",
          "signature": "SampleFormatFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatFloat",
          "package": "repa-sndfile",
          "partial": "Sample Format Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatFormatDpcm16",
          "package": "repa-sndfile",
          "signature": "SampleFormatFormatDpcm16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatFormatDpcm16",
          "package": "repa-sndfile",
          "partial": "Sample Format Format Dpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatFormatDpcm16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatFormatDpcm8",
          "package": "repa-sndfile",
          "signature": "SampleFormatFormatDpcm8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatFormatDpcm8",
          "package": "repa-sndfile",
          "partial": "Sample Format Format Dpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatFormatDpcm8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatG72132",
          "package": "repa-sndfile",
          "signature": "SampleFormatG72132",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatG72132",
          "package": "repa-sndfile",
          "partial": "Sample Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatG72132"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatG72324",
          "package": "repa-sndfile",
          "signature": "SampleFormatG72324",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatG72324",
          "package": "repa-sndfile",
          "partial": "Sample Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatG72324"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatG72340",
          "package": "repa-sndfile",
          "signature": "SampleFormatG72340",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatG72340",
          "package": "repa-sndfile",
          "partial": "Sample Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatG72340"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatGsm610",
          "package": "repa-sndfile",
          "signature": "SampleFormatGsm610",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatGsm610",
          "package": "repa-sndfile",
          "partial": "Sample Format Gsm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatGsm610"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatImaAdpcm",
          "package": "repa-sndfile",
          "signature": "SampleFormatImaAdpcm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatImaAdpcm",
          "package": "repa-sndfile",
          "partial": "Sample Format Ima Adpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatImaAdpcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatMsAdpcm",
          "package": "repa-sndfile",
          "signature": "SampleFormatMsAdpcm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatMsAdpcm",
          "package": "repa-sndfile",
          "partial": "Sample Format Ms Adpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatMsAdpcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatNone",
          "package": "repa-sndfile",
          "signature": "SampleFormatNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatNone",
          "package": "repa-sndfile",
          "partial": "Sample Format None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcm16",
          "package": "repa-sndfile",
          "signature": "SampleFormatPcm16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcm16",
          "package": "repa-sndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatPcm16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcm24",
          "package": "repa-sndfile",
          "signature": "SampleFormatPcm24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcm24",
          "package": "repa-sndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatPcm24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcm32",
          "package": "repa-sndfile",
          "signature": "SampleFormatPcm32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcm32",
          "package": "repa-sndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatPcm32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcmS8",
          "package": "repa-sndfile",
          "signature": "SampleFormatPcmS8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcmS8",
          "package": "repa-sndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatPcmS8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcmU8",
          "package": "repa-sndfile",
          "signature": "SampleFormatPcmU8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatPcmU8",
          "package": "repa-sndfile",
          "partial": "Sample Format Pcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatPcmU8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatUlaw",
          "package": "repa-sndfile",
          "signature": "SampleFormatUlaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatUlaw",
          "package": "repa-sndfile",
          "partial": "Sample Format Ulaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatUlaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatVorbis",
          "package": "repa-sndfile",
          "signature": "SampleFormatVorbis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatVorbis",
          "package": "repa-sndfile",
          "partial": "Sample Format Vorbis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatVorbis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatVoxAdpcm",
          "package": "repa-sndfile",
          "signature": "SampleFormatVoxAdpcm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "SampleFormatVoxAdpcm",
          "package": "repa-sndfile",
          "partial": "Sample Format Vox Adpcm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:SampleFormatVoxAdpcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of channels\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "channels",
          "package": "repa-sndfile",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Number of channels",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "channels",
          "package": "repa-sndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:channels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "endianFormat",
          "package": "repa-sndfile",
          "signature": "EndianFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "endianFormat",
          "package": "repa-sndfile",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:endianFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader and sample format\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "format",
          "package": "repa-sndfile",
          "signature": "Format",
          "type": "function"
        },
        "index": {
          "description": "Header and sample format",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "format",
          "package": "repa-sndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of frames in file\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "frames",
          "package": "repa-sndfile",
          "signature": "Count",
          "type": "function"
        },
        "index": {
          "description": "Number of frames in file",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "frames",
          "package": "repa-sndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:frames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts multi channel signal to vector signal.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "fromMC",
          "package": "repa-sndfile",
          "signature": "Array r1 DIM2 e -\u003e m (Array r2 DIM1 e)",
          "source": "src/Data-Array-Repa-IO-Sndfile.html#fromMC",
          "type": "function"
        },
        "index": {
          "description": "Converts multi channel signal to vector signal",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "fromMC",
          "normalized": "Array a DIM b-\u003ec(Array a DIM b)",
          "package": "repa-sndfile",
          "partial": "MC",
          "signature": "Array r DIM e-\u003em(Array r DIM e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:fromMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "headerFormat",
          "package": "repa-sndfile",
          "signature": "HeaderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "headerFormat",
          "package": "repa-sndfile",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:headerFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead sound file from given path.\n\u003c/p\u003e\u003cp\u003eReturns a tuple of Info and array containing the samples of sound\n file.  Returned pair contains sound file information and array which\n is indexed with channel number and frame.  Info could used later for\n writing sound file.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "readSF",
          "package": "repa-sndfile",
          "signature": "FilePath -\u003e IO (Info, Array r DIM2 a)",
          "source": "src/Data-Array-Repa-IO-Sndfile.html#readSF",
          "type": "function"
        },
        "index": {
          "description": "Read sound file from given path Returns tuple of Info and array containing the samples of sound file Returned pair contains sound file information and array which is indexed with channel number and frame Info could used later for writing sound file",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "readSF",
          "normalized": "FilePath-\u003eIO(Info,Array a DIM b)",
          "package": "repa-sndfile",
          "partial": "SF",
          "signature": "FilePath-\u003eIO(Info,Array r DIM a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:readSF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "sampleFormat",
          "package": "repa-sndfile",
          "signature": "SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "sampleFormat",
          "package": "repa-sndfile",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:sampleFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudio sample rate\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "samplerate",
          "package": "repa-sndfile",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Audio sample rate",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "samplerate",
          "package": "repa-sndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:samplerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of sections\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "sections",
          "package": "repa-sndfile",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Number of sections",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "sections",
          "package": "repa-sndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:sections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when stream is seekable (e.g. local files)\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "seekable",
          "package": "repa-sndfile",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "True when stream is seekable e.g local files",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "seekable",
          "package": "repa-sndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:seekable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts vector signal to multi channel signal.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "toMC",
          "package": "repa-sndfile",
          "signature": "Int -\u003e Array r1 DIM1 e -\u003e m (Array r2 DIM2 e)",
          "source": "src/Data-Array-Repa-IO-Sndfile.html#toMC",
          "type": "function"
        },
        "index": {
          "description": "Converts vector signal to multi channel signal",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "toMC",
          "normalized": "Int-\u003eArray a DIM b-\u003ec(Array a DIM b)",
          "package": "repa-sndfile",
          "partial": "MC",
          "signature": "Int-\u003eArray r DIM e-\u003em(Array r DIM e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:toMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16 bit MS wave, single channel, sampling rate = 48000.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "wav16",
          "package": "repa-sndfile",
          "signature": "Info",
          "source": "src/Data-Array-Repa-IO-Sndfile.html#wav16",
          "type": "function"
        },
        "index": {
          "description": "bit MS wave single channel sampling rate",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "wav16",
          "package": "repa-sndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:wav16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32 bit MS wave, single channel, sampling rate = 48000.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "wav32",
          "package": "repa-sndfile",
          "signature": "Info",
          "source": "src/Data-Array-Repa-IO-Sndfile.html#wav32",
          "type": "function"
        },
        "index": {
          "description": "bit MS wave single channel sampling rate",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "wav32",
          "package": "repa-sndfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:wav32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for invoking array with reading sound file.\n\u003c/p\u003e\u003cp\u003ePerforms given action using sound file info and samples as arguments.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "withSF",
          "package": "repa-sndfile",
          "signature": "FilePath -\u003e (Info -\u003e Array r DIM2 a -\u003e IO b) -\u003e IO b",
          "source": "src/Data-Array-Repa-IO-Sndfile.html#withSF",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for invoking array with reading sound file Performs given action using sound file info and samples as arguments",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "withSF",
          "normalized": "FilePath-\u003e(Info-\u003eArray a DIM b-\u003eIO c)-\u003eIO c",
          "package": "repa-sndfile",
          "partial": "SF",
          "signature": "FilePath-\u003e(Info-\u003eArray r DIM a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:withSF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite array contents to sound file with given header information.\n\u003c/p\u003e\u003cp\u003eExpecting an array indexed with channel and frame, as returned from readSF.\n i.e. 2-dimensional array with its contents indexed with channel.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "writeSF",
          "package": "repa-sndfile",
          "signature": "FilePath -\u003e Info -\u003e Array r DIM2 a -\u003e IO ()",
          "source": "src/Data-Array-Repa-IO-Sndfile.html#writeSF",
          "type": "function"
        },
        "index": {
          "description": "Write array contents to sound file with given header information Expecting an array indexed with channel and frame as returned from readSF i.e dimensional array with its contents indexed with channel",
          "hierarchy": "Data Array Repa IO Sndfile",
          "module": "Data.Array.Repa.IO.Sndfile",
          "name": "writeSF",
          "normalized": "FilePath-\u003eInfo-\u003eArray a DIM b-\u003eIO()",
          "package": "repa-sndfile",
          "partial": "SF",
          "signature": "FilePath-\u003eInfo-\u003eArray r DIM a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-sndfile/docs/Data-Array-Repa-IO-Sndfile.html#v:writeSF"
      }
    }
  ]
]