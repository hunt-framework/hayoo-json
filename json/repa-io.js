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
        "word": "repa-io"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReading and writing arrays as uncompressed 24 or 32 bit Windows BMP files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.IO.BMP",
          "name": "BMP",
          "package": "repa-io",
          "source": "src/Data-Array-Repa-IO-BMP.html",
          "type": "module"
        },
        "index": {
          "description": "Reading and writing arrays as uncompressed or bit Windows BMP files",
          "hierarchy": "Data Array Repa IO BMP",
          "module": "Data.Array.Repa.IO.BMP",
          "name": "BMP",
          "package": "repa-io",
          "partial": "BMP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-BMP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead RGB components from a BMP file.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.BMP",
          "name": "readImageFromBMP",
          "package": "repa-io",
          "signature": "FilePath -\u003e IO (Either Error (Array U DIM2 (Word8, Word8, Word8)))",
          "source": "src/Data-Array-Repa-IO-BMP.html#readImageFromBMP",
          "type": "function"
        },
        "index": {
          "description": "Read RGB components from BMP file",
          "hierarchy": "Data Array Repa IO BMP",
          "module": "Data.Array.Repa.IO.BMP",
          "name": "readImageFromBMP",
          "normalized": "FilePath-\u003eIO(Either Error(Array U DIM(Word,Word,Word)))",
          "package": "repa-io",
          "partial": "Image From BMP",
          "signature": "FilePath-\u003eIO(Either Error(Array U DIM(Word,Word,Word)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-BMP.html#v:readImageFromBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite RGB components to a BMP file.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.BMP",
          "name": "writeImageToBMP",
          "package": "repa-io",
          "signature": "FilePath -\u003e Array U DIM2 (Word8, Word8, Word8) -\u003e IO ()",
          "source": "src/Data-Array-Repa-IO-BMP.html#writeImageToBMP",
          "type": "function"
        },
        "index": {
          "description": "Write RGB components to BMP file",
          "hierarchy": "Data Array Repa IO BMP",
          "module": "Data.Array.Repa.IO.BMP",
          "name": "writeImageToBMP",
          "normalized": "FilePath-\u003eArray U DIM(Word,Word,Word)-\u003eIO()",
          "package": "repa-io",
          "partial": "Image To BMP",
          "signature": "FilePath-\u003eArray U DIM(Word,Word,Word)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-BMP.html#v:writeImageToBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReading and writing Repa arrays as binary files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.IO.Binary",
          "name": "Binary",
          "package": "repa-io",
          "source": "src/Data-Array-Repa-IO-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Reading and writing Repa arrays as binary files",
          "hierarchy": "Data Array Repa IO Binary",
          "module": "Data.Array.Repa.IO.Binary",
          "name": "Binary",
          "package": "repa-io",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an array from a file.\n   Data appears in host byte order.\n   If the file size does match the provided shape then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Binary",
          "name": "readArrayFromStorableFile",
          "package": "repa-io",
          "signature": "FilePath -\u003e sh -\u003e IO (Array F sh a)",
          "source": "src/Data-Array-Repa-IO-Binary.html#readArrayFromStorableFile",
          "type": "function"
        },
        "index": {
          "description": "Read an array from file Data appears in host byte order If the file size does match the provided shape then error",
          "hierarchy": "Data Array Repa IO Binary",
          "module": "Data.Array.Repa.IO.Binary",
          "name": "readArrayFromStorableFile",
          "normalized": "FilePath-\u003ea-\u003eIO(Array F a b)",
          "package": "repa-io",
          "partial": "Array From Storable File",
          "signature": "FilePath-\u003esh-\u003eIO(Array F sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Binary.html#v:readArrayFromStorableFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an array to a file.\n   Data appears in host byte order.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Binary",
          "name": "writeArrayToStorableFile",
          "package": "repa-io",
          "signature": "FilePath -\u003e Array r sh a -\u003e IO ()",
          "source": "src/Data-Array-Repa-IO-Binary.html#writeArrayToStorableFile",
          "type": "function"
        },
        "index": {
          "description": "Write an array to file Data appears in host byte order",
          "hierarchy": "Data Array Repa IO Binary",
          "module": "Data.Array.Repa.IO.Binary",
          "name": "writeArrayToStorableFile",
          "normalized": "FilePath-\u003eArray a b c-\u003eIO()",
          "package": "repa-io",
          "partial": "Array To Storable File",
          "signature": "FilePath-\u003eArray r sh a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Binary.html#v:writeArrayToStorableFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write matrices as ASCII text files.\n\u003c/p\u003e\u003cp\u003eThe file format is like:\n\u003c/p\u003e\u003cpre\u003e\n\tMATRIX\t\t\t-- header\n\t100 100\t\t\t-- width and height\n\t1.23 1.56 1.23 ...\t-- data, separated by whitespace\n\t....\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.IO.Matrix",
          "name": "Matrix",
          "package": "repa-io",
          "source": "src/Data-Array-Repa-IO-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write matrices as ASCII text files The file format is like MATRIX header width and height data separated by whitespace",
          "hierarchy": "Data Array Repa IO Matrix",
          "module": "Data.Array.Repa.IO.Matrix",
          "name": "Matrix",
          "package": "repa-io",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a matrix from a text file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e WARNING: This is implemented fairly naively, just using \u003ccode\u003eStrings\u003c/code\u003e \n     under the covers. It will be slow for large data files.\n\u003c/li\u003e\u003cli\u003e It also doesn't do graceful error handling.\n     If the file has the wrong format you'll get a confusing \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.IO.Matrix",
          "name": "readMatrixFromTextFile",
          "package": "repa-io",
          "signature": "FilePath -\u003e IO (Array U DIM2 e)",
          "source": "src/Data-Array-Repa-IO-Matrix.html#readMatrixFromTextFile",
          "type": "function"
        },
        "index": {
          "description": "Read matrix from text file WARNING This is implemented fairly naively just using Strings under the covers It will be slow for large data files It also doesn do graceful error handling If the file has the wrong format you ll get confusing error",
          "hierarchy": "Data Array Repa IO Matrix",
          "module": "Data.Array.Repa.IO.Matrix",
          "name": "readMatrixFromTextFile",
          "normalized": "FilePath-\u003eIO(Array U DIM a)",
          "package": "repa-io",
          "partial": "Matrix From Text File",
          "signature": "FilePath-\u003eIO(Array U DIM e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Matrix.html#v:readMatrixFromTextFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a matrix as a text file.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Matrix",
          "name": "writeMatrixToTextFile",
          "package": "repa-io",
          "signature": "FilePath -\u003e Array r DIM2 e -\u003e IO ()",
          "source": "src/Data-Array-Repa-IO-Matrix.html#writeMatrixToTextFile",
          "type": "function"
        },
        "index": {
          "description": "Write matrix as text file",
          "hierarchy": "Data Array Repa IO Matrix",
          "module": "Data.Array.Repa.IO.Matrix",
          "name": "writeMatrixToTextFile",
          "normalized": "FilePath-\u003eArray a DIM b-\u003eIO()",
          "package": "repa-io",
          "partial": "Matrix To Text File",
          "signature": "FilePath-\u003eArray r DIM e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Matrix.html#v:writeMatrixToTextFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTiming utilities used for benchmarks in the \u003ccode\u003erepa-examples\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "Timing",
          "package": "repa-io",
          "source": "src/Data-Array-Repa-IO-Timing.html",
          "type": "module"
        },
        "index": {
          "description": "Timing utilities used for benchmarks in the repa-examples package",
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "Timing",
          "package": "repa-io",
          "partial": "Timing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract representation of process time.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "Time",
          "package": "repa-io",
          "source": "src/Data-Array-Repa-IO-Timing.html#Time",
          "type": "data"
        },
        "index": {
          "description": "Abstract representation of process time",
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "Time",
          "package": "repa-io",
          "partial": "Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Timing",
          "name": "cpuTime",
          "package": "repa-io",
          "signature": "TimeUnit -\u003e Time -\u003e Integer",
          "source": "src/Data-Array-Repa-IO-Timing.html#cpuTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "cpuTime",
          "normalized": "TimeUnit-\u003eTime-\u003eInteger",
          "package": "repa-io",
          "partial": "Time",
          "signature": "TimeUnit-\u003eTime-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:cpuTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Timing",
          "name": "microseconds",
          "package": "repa-io",
          "signature": "TimeUnit",
          "source": "src/Data-Array-Repa-IO-Timing.html#microseconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "microseconds",
          "package": "repa-io",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:microseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Timing",
          "name": "milliseconds",
          "package": "repa-io",
          "signature": "TimeUnit",
          "source": "src/Data-Array-Repa-IO-Timing.html#milliseconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "milliseconds",
          "package": "repa-io",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:milliseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract second time from the first.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "minus",
          "package": "repa-io",
          "signature": "Time -\u003e Time -\u003e Time",
          "source": "src/Data-Array-Repa-IO-Timing.html#minus",
          "type": "function"
        },
        "index": {
          "description": "Subtract second time from the first",
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "minus",
          "normalized": "Time-\u003eTime-\u003eTime",
          "package": "repa-io",
          "signature": "Time-\u003eTime-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two times.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "plus",
          "package": "repa-io",
          "signature": "Time -\u003e Time -\u003e Time",
          "source": "src/Data-Array-Repa-IO-Timing.html#plus",
          "type": "function"
        },
        "index": {
          "description": "Add two times",
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "plus",
          "normalized": "Time-\u003eTime-\u003eTime",
          "package": "repa-io",
          "signature": "Time-\u003eTime-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the times, in milliseconds.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "prettyTime",
          "package": "repa-io",
          "signature": "Time -\u003e String",
          "source": "src/Data-Array-Repa-IO-Timing.html#prettyTime",
          "type": "function"
        },
        "index": {
          "description": "Pretty print the times in milliseconds",
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "prettyTime",
          "normalized": "Time-\u003eString",
          "package": "repa-io",
          "partial": "Time",
          "signature": "Time-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:prettyTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a time as a string, in milliseconds.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "showTime",
          "package": "repa-io",
          "signature": "Time -\u003e String",
          "source": "src/Data-Array-Repa-IO-Timing.html#showTime",
          "type": "function"
        },
        "index": {
          "description": "Show time as string in milliseconds",
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "showTime",
          "normalized": "Time-\u003eString",
          "package": "repa-io",
          "partial": "Time",
          "signature": "Time-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:showTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime some IO action.\n   Make sure to deepseq the result before returning it from the action. If you\n   don't do this then there's a good chance that you'll just pass a suspension\n   out of the action, and the computation time will be zero.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "time",
          "package": "repa-io",
          "signature": "IO a -\u003e IO (a, Time)",
          "source": "src/Data-Array-Repa-IO-Timing.html#time",
          "type": "function"
        },
        "index": {
          "description": "Time some IO action Make sure to deepseq the result before returning it from the action If you don do this then there good chance that you ll just pass suspension out of the action and the computation time will be zero",
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "time",
          "normalized": "IO a-\u003eIO(a,Time)",
          "package": "repa-io",
          "signature": "IO a-\u003eIO(a,Time)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.Timing",
          "name": "wallTime",
          "package": "repa-io",
          "signature": "TimeUnit -\u003e Time -\u003e Integer",
          "source": "src/Data-Array-Repa-IO-Timing.html#wallTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO Timing",
          "module": "Data.Array.Repa.IO.Timing",
          "name": "wallTime",
          "normalized": "TimeUnit-\u003eTime-\u003eInteger",
          "package": "repa-io",
          "partial": "Time",
          "signature": "TimeUnit-\u003eTime-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:wallTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write vectors as ASCII text files.\n\u003c/p\u003e\u003cp\u003eThe file format is like:\n\u003c/p\u003e\u003cpre\u003e\n\tVECTOR\t\t\t-- header\n\t100\t\t\t-- length of vector\n\t1.23 1.56 1.23 ...\t-- data, separated by whitespace\n\t....\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.IO.Vector",
          "name": "Vector",
          "package": "repa-io",
          "source": "src/Data-Array-Repa-IO-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write vectors as ASCII text files The file format is like VECTOR header length of vector data separated by whitespace",
          "hierarchy": "Data Array Repa IO Vector",
          "module": "Data.Array.Repa.IO.Vector",
          "name": "Vector",
          "package": "repa-io",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a vector from a text file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e WARNING: This is implemented fairly naively, just using \u003ccode\u003eStrings\u003c/code\u003e \n     under the covers. It will be slow for large data files.\n\u003c/li\u003e\u003cli\u003e It also doesn't do graceful error handling.\n     If the file has the wrong format you'll get a confusing \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.IO.Vector",
          "name": "readVectorFromTextFile",
          "package": "repa-io",
          "signature": "FilePath -\u003e IO (Array U DIM1 e)",
          "source": "src/Data-Array-Repa-IO-Vector.html#readVectorFromTextFile",
          "type": "function"
        },
        "index": {
          "description": "Read vector from text file WARNING This is implemented fairly naively just using Strings under the covers It will be slow for large data files It also doesn do graceful error handling If the file has the wrong format you ll get confusing error",
          "hierarchy": "Data Array Repa IO Vector",
          "module": "Data.Array.Repa.IO.Vector",
          "name": "readVectorFromTextFile",
          "normalized": "FilePath-\u003eIO(Array U DIM a)",
          "package": "repa-io",
          "partial": "Vector From Text File",
          "signature": "FilePath-\u003eIO(Array U DIM e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Vector.html#v:readVectorFromTextFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a vector as a text file.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.Vector",
          "name": "writeVectorToTextFile",
          "package": "repa-io",
          "signature": "Array r DIM1 e -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-Array-Repa-IO-Vector.html#writeVectorToTextFile",
          "type": "function"
        },
        "index": {
          "description": "Write vector as text file",
          "hierarchy": "Data Array Repa IO Vector",
          "module": "Data.Array.Repa.IO.Vector",
          "name": "writeVectorToTextFile",
          "normalized": "Array a DIM b-\u003eFilePath-\u003eIO()",
          "package": "repa-io",
          "partial": "Vector To Text File",
          "signature": "Array r DIM e-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Vector.html#v:writeVectorToTextFile"
      }
    }
  ]
]