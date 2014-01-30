[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-BMP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReading and writing arrays as uncompressed 24 or 32 bit Windows BMP files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Repa.IO.BMP",
        "fct-package": "repa-io",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-IO-BMP.html",
        "fct-type": "module",
        "title": "BMP"
      },
      "index": {
        "description": "Reading and writing arrays as uncompressed or bit Windows BMP files",
        "hierarchy": "Data Array Repa IO BMP",
        "module": "Data.Array.Repa.IO.BMP",
        "name": "BMP",
        "normalized": "",
        "package": "repa-io",
        "partial": "BMP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-BMP.html#v:readImageFromBMP",
      "description": {
        "fct-descr": "\u003cp\u003eRead RGB components from a BMP file.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.BMP",
        "fct-package": "repa-io",
        "fct-signature": "FilePath -\u003e IO (Either Error (Array U DIM2 (Word8, Word8, Word8)))",
        "fct-source": "src/Data-Array-Repa-IO-BMP.html#readImageFromBMP",
        "fct-type": "function",
        "title": "readImageFromBMP"
      },
      "index": {
        "description": "Read RGB components from BMP file",
        "hierarchy": "Data Array Repa IO BMP",
        "module": "Data.Array.Repa.IO.BMP",
        "name": "readImageFromBMP",
        "normalized": "FilePath-\u003eIO(Either Error(Array U DIM(Word,Word,Word)))",
        "package": "repa-io",
        "partial": "Image From BMP",
        "signature": "FilePath-\u003eIO(Either Error(Array U DIM(Word,Word,Word)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-BMP.html#v:writeImageToBMP",
      "description": {
        "fct-descr": "\u003cp\u003eWrite RGB components to a BMP file.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.BMP",
        "fct-package": "repa-io",
        "fct-signature": "FilePath -\u003e Array U DIM2 (Word8, Word8, Word8) -\u003e IO ()",
        "fct-source": "src/Data-Array-Repa-IO-BMP.html#writeImageToBMP",
        "fct-type": "function",
        "title": "writeImageToBMP"
      },
      "index": {
        "description": "Write RGB components to BMP file",
        "hierarchy": "Data Array Repa IO BMP",
        "module": "Data.Array.Repa.IO.BMP",
        "name": "writeImageToBMP",
        "normalized": "FilePath-\u003eArray U DIM(Word,Word,Word)-\u003eIO()",
        "package": "repa-io",
        "partial": "Image To BMP",
        "signature": "FilePath-\u003eArray U DIM(Word,Word,Word)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Binary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReading and writing Repa arrays as binary files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Repa.IO.Binary",
        "fct-package": "repa-io",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-IO-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "Reading and writing Repa arrays as binary files",
        "hierarchy": "Data Array Repa IO Binary",
        "module": "Data.Array.Repa.IO.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "repa-io",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Binary.html#v:readArrayFromStorableFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead an array from a file.\n   Data appears in host byte order.\n   If the file size does match the provided shape then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Binary",
        "fct-package": "repa-io",
        "fct-signature": "FilePath -\u003e sh -\u003e IO (Array F sh a)",
        "fct-source": "src/Data-Array-Repa-IO-Binary.html#readArrayFromStorableFile",
        "fct-type": "function",
        "title": "readArrayFromStorableFile"
      },
      "index": {
        "description": "Read an array from file Data appears in host byte order If the file size does match the provided shape then error",
        "hierarchy": "Data Array Repa IO Binary",
        "module": "Data.Array.Repa.IO.Binary",
        "name": "readArrayFromStorableFile",
        "normalized": "FilePath-\u003ea-\u003eIO(Array F a b)",
        "package": "repa-io",
        "partial": "Array From Storable File",
        "signature": "FilePath-\u003esh-\u003eIO(Array F sh a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Binary.html#v:writeArrayToStorableFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an array to a file.\n   Data appears in host byte order.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Binary",
        "fct-package": "repa-io",
        "fct-signature": "FilePath -\u003e Array r sh a -\u003e IO ()",
        "fct-source": "src/Data-Array-Repa-IO-Binary.html#writeArrayToStorableFile",
        "fct-type": "function",
        "title": "writeArrayToStorableFile"
      },
      "index": {
        "description": "Write an array to file Data appears in host byte order",
        "hierarchy": "Data Array Repa IO Binary",
        "module": "Data.Array.Repa.IO.Binary",
        "name": "writeArrayToStorableFile",
        "normalized": "FilePath-\u003eArray a b c-\u003eIO()",
        "package": "repa-io",
        "partial": "Array To Storable File",
        "signature": "FilePath-\u003eArray r sh a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Matrix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write matrices as ASCII text files.\n\u003c/p\u003e\u003cp\u003eThe file format is like:\n\u003c/p\u003e\u003cpre\u003e\n\tMATRIX\t\t\t-- header\n\t100 100\t\t\t-- width and height\n\t1.23 1.56 1.23 ...\t-- data, separated by whitespace\n\t....\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Repa.IO.Matrix",
        "fct-package": "repa-io",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-IO-Matrix.html",
        "fct-type": "module",
        "title": "Matrix"
      },
      "index": {
        "description": "Read and write matrices as ASCII text files The file format is like MATRIX header width and height data separated by whitespace",
        "hierarchy": "Data Array Repa IO Matrix",
        "module": "Data.Array.Repa.IO.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "repa-io",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Matrix.html#v:readMatrixFromTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a matrix from a text file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e WARNING: This is implemented fairly naively, just using \u003ccode\u003eStrings\u003c/code\u003e \n     under the covers. It will be slow for large data files.\n\u003c/li\u003e\u003cli\u003e It also doesn't do graceful error handling.\n     If the file has the wrong format you'll get a confusing \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Repa.IO.Matrix",
        "fct-package": "repa-io",
        "fct-signature": "FilePath -\u003e IO (Array U DIM2 e)",
        "fct-source": "src/Data-Array-Repa-IO-Matrix.html#readMatrixFromTextFile",
        "fct-type": "function",
        "title": "readMatrixFromTextFile"
      },
      "index": {
        "description": "Read matrix from text file WARNING This is implemented fairly naively just using Strings under the covers It will be slow for large data files It also doesn do graceful error handling If the file has the wrong format you ll get confusing error",
        "hierarchy": "Data Array Repa IO Matrix",
        "module": "Data.Array.Repa.IO.Matrix",
        "name": "readMatrixFromTextFile",
        "normalized": "FilePath-\u003eIO(Array U DIM a)",
        "package": "repa-io",
        "partial": "Matrix From Text File",
        "signature": "FilePath-\u003eIO(Array U DIM e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Matrix.html#v:writeMatrixToTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a matrix as a text file.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Matrix",
        "fct-package": "repa-io",
        "fct-signature": "FilePath -\u003e Array r DIM2 e -\u003e IO ()",
        "fct-source": "src/Data-Array-Repa-IO-Matrix.html#writeMatrixToTextFile",
        "fct-type": "function",
        "title": "writeMatrixToTextFile"
      },
      "index": {
        "description": "Write matrix as text file",
        "hierarchy": "Data Array Repa IO Matrix",
        "module": "Data.Array.Repa.IO.Matrix",
        "name": "writeMatrixToTextFile",
        "normalized": "FilePath-\u003eArray a DIM b-\u003eIO()",
        "package": "repa-io",
        "partial": "Matrix To Text File",
        "signature": "FilePath-\u003eArray r DIM e-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTiming utilities used for benchmarks in the \u003ccode\u003erepa-examples\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html",
        "fct-type": "module",
        "title": "Timing"
      },
      "index": {
        "description": "Timing utilities used for benchmarks in the repa-examples package",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "Timing",
        "normalized": "",
        "package": "repa-io",
        "partial": "Timing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#t:Time",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract representation of process time.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#Time",
        "fct-type": "data",
        "title": "Time"
      },
      "index": {
        "description": "Abstract representation of process time",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "Time",
        "normalized": "",
        "package": "repa-io",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:cpuTime",
      "description": {
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "TimeUnit -\u003e Time -\u003e Integer",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#cpuTime",
        "fct-type": "function",
        "title": "cpuTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "cpuTime",
        "normalized": "TimeUnit-\u003eTime-\u003eInteger",
        "package": "repa-io",
        "partial": "Time",
        "signature": "TimeUnit-\u003eTime-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:microseconds",
      "description": {
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "TimeUnit",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#microseconds",
        "fct-type": "function",
        "title": "microseconds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "microseconds",
        "normalized": "",
        "package": "repa-io",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:milliseconds",
      "description": {
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "TimeUnit",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#milliseconds",
        "fct-type": "function",
        "title": "milliseconds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "milliseconds",
        "normalized": "",
        "package": "repa-io",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:minus",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract second time from the first.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "Time -\u003e Time -\u003e Time",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#minus",
        "fct-type": "function",
        "title": "minus"
      },
      "index": {
        "description": "Subtract second time from the first",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "minus",
        "normalized": "Time-\u003eTime-\u003eTime",
        "package": "repa-io",
        "partial": "",
        "signature": "Time-\u003eTime-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:plus",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two times.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "Time -\u003e Time -\u003e Time",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#plus",
        "fct-type": "function",
        "title": "plus"
      },
      "index": {
        "description": "Add two times",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "plus",
        "normalized": "Time-\u003eTime-\u003eTime",
        "package": "repa-io",
        "partial": "",
        "signature": "Time-\u003eTime-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:prettyTime",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the times, in milliseconds.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "Time -\u003e String",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#prettyTime",
        "fct-type": "function",
        "title": "prettyTime"
      },
      "index": {
        "description": "Pretty print the times in milliseconds",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "prettyTime",
        "normalized": "Time-\u003eString",
        "package": "repa-io",
        "partial": "Time",
        "signature": "Time-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:showTime",
      "description": {
        "fct-descr": "\u003cp\u003eShow a time as a string, in milliseconds.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "Time -\u003e String",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#showTime",
        "fct-type": "function",
        "title": "showTime"
      },
      "index": {
        "description": "Show time as string in milliseconds",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "showTime",
        "normalized": "Time-\u003eString",
        "package": "repa-io",
        "partial": "Time",
        "signature": "Time-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:time",
      "description": {
        "fct-descr": "\u003cp\u003eTime some IO action.\n   Make sure to deepseq the result before returning it from the action. If you\n   don't do this then there's a good chance that you'll just pass a suspension\n   out of the action, and the computation time will be zero.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "IO a -\u003e IO (a, Time)",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "Time some IO action Make sure to deepseq the result before returning it from the action If you don do this then there good chance that you ll just pass suspension out of the action and the computation time will be zero",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "time",
        "normalized": "IO a-\u003eIO(a,Time)",
        "package": "repa-io",
        "partial": "",
        "signature": "IO a-\u003eIO(a,Time)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Timing.html#v:wallTime",
      "description": {
        "fct-module": "Data.Array.Repa.IO.Timing",
        "fct-package": "repa-io",
        "fct-signature": "TimeUnit -\u003e Time -\u003e Integer",
        "fct-source": "src/Data-Array-Repa-IO-Timing.html#wallTime",
        "fct-type": "function",
        "title": "wallTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa IO Timing",
        "module": "Data.Array.Repa.IO.Timing",
        "name": "wallTime",
        "normalized": "TimeUnit-\u003eTime-\u003eInteger",
        "package": "repa-io",
        "partial": "Time",
        "signature": "TimeUnit-\u003eTime-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write vectors as ASCII text files.\n\u003c/p\u003e\u003cp\u003eThe file format is like:\n\u003c/p\u003e\u003cpre\u003e\n\tVECTOR\t\t\t-- header\n\t100\t\t\t-- length of vector\n\t1.23 1.56 1.23 ...\t-- data, separated by whitespace\n\t....\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Repa.IO.Vector",
        "fct-package": "repa-io",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-IO-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "Read and write vectors as ASCII text files The file format is like VECTOR header length of vector data separated by whitespace",
        "hierarchy": "Data Array Repa IO Vector",
        "module": "Data.Array.Repa.IO.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "repa-io",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Vector.html#v:readVectorFromTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a vector from a text file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e WARNING: This is implemented fairly naively, just using \u003ccode\u003eStrings\u003c/code\u003e \n     under the covers. It will be slow for large data files.\n\u003c/li\u003e\u003cli\u003e It also doesn't do graceful error handling.\n     If the file has the wrong format you'll get a confusing \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Repa.IO.Vector",
        "fct-package": "repa-io",
        "fct-signature": "FilePath -\u003e IO (Array U DIM1 e)",
        "fct-source": "src/Data-Array-Repa-IO-Vector.html#readVectorFromTextFile",
        "fct-type": "function",
        "title": "readVectorFromTextFile"
      },
      "index": {
        "description": "Read vector from text file WARNING This is implemented fairly naively just using Strings under the covers It will be slow for large data files It also doesn do graceful error handling If the file has the wrong format you ll get confusing error",
        "hierarchy": "Data Array Repa IO Vector",
        "module": "Data.Array.Repa.IO.Vector",
        "name": "readVectorFromTextFile",
        "normalized": "FilePath-\u003eIO(Array U DIM a)",
        "package": "repa-io",
        "partial": "Vector From Text File",
        "signature": "FilePath-\u003eIO(Array U DIM e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-io/docs/Data-Array-Repa-IO-Vector.html#v:writeVectorToTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a vector as a text file.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.Vector",
        "fct-package": "repa-io",
        "fct-signature": "Array r DIM1 e -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Data-Array-Repa-IO-Vector.html#writeVectorToTextFile",
        "fct-type": "function",
        "title": "writeVectorToTextFile"
      },
      "index": {
        "description": "Write vector as text file",
        "hierarchy": "Data Array Repa IO Vector",
        "module": "Data.Array.Repa.IO.Vector",
        "name": "writeVectorToTextFile",
        "normalized": "Array a DIM b-\u003eFilePath-\u003eIO()",
        "package": "repa-io",
        "partial": "Vector To Text File",
        "signature": "Array r DIM e-\u003eFilePath-\u003eIO()"
      }
    }
  }
]