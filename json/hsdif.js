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
        "word": "hsdif"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eByte level SDIF frame data structure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "Frame",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Byte-Frame.html",
          "type": "module"
        },
        "index": {
          "description": "Byte level SDIF frame data structure",
          "hierarchy": "Sound SDIF Byte Frame",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "Frame",
          "package": "hsdif",
          "partial": "Frame",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Frame.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract frame data segment from SDIF frame byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_data",
          "package": "hsdif",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Sound-SDIF-Byte-Frame.html#frame_b_data",
          "type": "function"
        },
        "index": {
          "description": "Extract frame data segment from SDIF frame byte stream",
          "hierarchy": "Sound SDIF Byte Frame",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_data",
          "normalized": "ByteString-\u003eByteString",
          "package": "hsdif",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Frame.html#v:frame_b_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract identifier from SDIF frame byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_id",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-SDIF-Byte-Frame.html#frame_b_id",
          "type": "function"
        },
        "index": {
          "description": "Extract identifier from SDIF frame byte stream",
          "hierarchy": "Sound SDIF Byte Frame",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_id",
          "normalized": "ByteString-\u003eInt",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Frame.html#v:frame_b_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract matrix count from SDIF frame byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_matrices",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-SDIF-Byte-Frame.html#frame_b_matrices",
          "type": "function"
        },
        "index": {
          "description": "Extract matrix count from SDIF frame byte stream",
          "hierarchy": "Sound SDIF Byte Frame",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_matrices",
          "normalized": "ByteString-\u003eInt",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Frame.html#v:frame_b_matrices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract frame matrix \u003cem\u003e(start,end)\u003c/em\u003e indices from SDIF frame byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_matrix_i",
          "package": "hsdif",
          "signature": "ByteString -\u003e [(Int, Int)]",
          "source": "src/Sound-SDIF-Byte-Frame.html#frame_b_matrix_i",
          "type": "function"
        },
        "index": {
          "description": "Extract frame matrix start end indices from SDIF frame byte stream",
          "hierarchy": "Sound SDIF Byte Frame",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_matrix_i",
          "normalized": "ByteString-\u003e[(Int,Int)]",
          "package": "hsdif",
          "signature": "ByteString-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Frame.html#v:frame_b_matrix_i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract size from SDIF frame byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_size",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-SDIF-Byte-Frame.html#frame_b_size",
          "type": "function"
        },
        "index": {
          "description": "Extract size from SDIF frame byte stream",
          "hierarchy": "Sound SDIF Byte Frame",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_size",
          "normalized": "ByteString-\u003eInt",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Frame.html#v:frame_b_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract time stamp from SDIF frame byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_time",
          "package": "hsdif",
          "signature": "ByteString -\u003e Float",
          "source": "src/Sound-SDIF-Byte-Frame.html#frame_b_time",
          "type": "function"
        },
        "index": {
          "description": "Extract time stamp from SDIF frame byte stream",
          "hierarchy": "Sound SDIF Byte Frame",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_time",
          "normalized": "ByteString-\u003eFloat",
          "package": "hsdif",
          "signature": "ByteString-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Frame.html#v:frame_b_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract type string from SDIF frame byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_type",
          "package": "hsdif",
          "signature": "ByteString -\u003e String",
          "source": "src/Sound-SDIF-Byte-Frame.html#frame_b_type",
          "type": "function"
        },
        "index": {
          "description": "Extract type string from SDIF frame byte stream",
          "hierarchy": "Sound SDIF Byte Frame",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "frame_b_type",
          "normalized": "ByteString-\u003eString",
          "package": "hsdif",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Frame.html#v:frame_b_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData integrity check for SDIF frame data stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "is_frame_b",
          "package": "hsdif",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Sound-SDIF-Byte-Frame.html#is_frame_b",
          "type": "function"
        },
        "index": {
          "description": "Data integrity check for SDIF frame data stream",
          "hierarchy": "Sound SDIF Byte Frame",
          "module": "Sound.SDIF.Byte.Frame",
          "name": "is_frame_b",
          "normalized": "ByteString-\u003eBool",
          "package": "hsdif",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Frame.html#v:is_frame_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eByte level SDIF frame data structure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "Matrix",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Byte-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "Byte level SDIF frame data structure",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "Matrix",
          "package": "hsdif",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData integrity check for SDIF matix byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "is_matrix_b",
          "package": "hsdif",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Sound-SDIF-Byte-Matrix.html#is_matrix_b",
          "type": "function"
        },
        "index": {
          "description": "Data integrity check for SDIF matix byte stream",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "is_matrix_b",
          "normalized": "ByteString-\u003eBool",
          "package": "hsdif",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:is_matrix_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract matrix column count.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_columns",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_columns",
          "type": "function"
        },
        "index": {
          "description": "Extract matrix column count",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_columns",
          "normalized": "ByteString-\u003eInt",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate size of matrix data store (ie. elements by \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e size).\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_data_size",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_data_size",
          "type": "function"
        },
        "index": {
          "description": "Calculate size of matrix data store ie elements by Type size",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_data_size",
          "normalized": "ByteString-\u003eInt",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_data_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract matrix element data \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_data_type",
          "package": "hsdif",
          "signature": "ByteString -\u003e Type",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_data_type",
          "type": "function"
        },
        "index": {
          "description": "Extract matrix element data Type",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_data_type",
          "normalized": "ByteString-\u003eType",
          "package": "hsdif",
          "signature": "ByteString-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_data_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract matrix element count (ie. rows by columns).\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_elements",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_elements",
          "type": "function"
        },
        "index": {
          "description": "Extract matrix element count ie rows by columns",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_elements",
          "normalized": "ByteString-\u003eInt",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract matrix header byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_header",
          "package": "hsdif",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_header",
          "type": "function"
        },
        "index": {
          "description": "Extract matrix header byte stream",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_header",
          "normalized": "ByteString-\u003eByteString",
          "package": "hsdif",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix header size (constant).\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_header_size",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_header_size",
          "type": "function"
        },
        "index": {
          "description": "Matrix header size constant",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_header_size",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_header_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract matrix row count.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_rows",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_rows",
          "type": "function"
        },
        "index": {
          "description": "Extract matrix row count",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_rows",
          "normalized": "ByteString-\u003eInt",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ematrix_b_data_size\u003c/a\u003e\u003c/code\u003e taking into account required padding.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_storage_size",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_storage_size",
          "type": "function"
        },
        "index": {
          "description": "Variant of matrix data size taking into account required padding",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_storage_size",
          "normalized": "ByteString-\u003eInt",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_storage_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract matrix data from byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_to_matrix_v",
          "package": "hsdif",
          "signature": "ByteString -\u003e [Datum]",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_to_matrix_v",
          "type": "function"
        },
        "index": {
          "description": "Extract matrix data from byte stream",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_to_matrix_v",
          "normalized": "ByteString-\u003e[Datum]",
          "package": "hsdif",
          "signature": "ByteString-\u003e[Datum]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_to_matrix_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract matrix type string.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_type",
          "package": "hsdif",
          "signature": "ByteString -\u003e String",
          "source": "src/Sound-SDIF-Byte-Matrix.html#matrix_b_type",
          "type": "function"
        },
        "index": {
          "description": "Extract matrix type string",
          "hierarchy": "Sound SDIF Byte Matrix",
          "module": "Sound.SDIF.Byte.Matrix",
          "name": "matrix_b_type",
          "normalized": "ByteString-\u003eString",
          "package": "hsdif",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-Matrix.html#v:matrix_b_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eByte level SDIF data structure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SDIF.Byte.SDIF",
          "name": "SDIF",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Byte-SDIF.html",
          "type": "module"
        },
        "index": {
          "description": "Byte level SDIF data structure",
          "hierarchy": "Sound SDIF Byte SDIF",
          "module": "Sound.SDIF.Byte.SDIF",
          "name": "SDIF",
          "package": "hsdif",
          "partial": "SDIF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-SDIF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck signature of SDIF byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.SDIF",
          "name": "is_sdif_b",
          "package": "hsdif",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Sound-SDIF-Byte-SDIF.html#is_sdif_b",
          "type": "function"
        },
        "index": {
          "description": "Check signature of SDIF byte stream",
          "hierarchy": "Sound SDIF Byte SDIF",
          "module": "Sound.SDIF.Byte.SDIF",
          "name": "is_sdif_b",
          "normalized": "ByteString-\u003eBool",
          "package": "hsdif",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-SDIF.html#v:is_sdif_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract start and end indices for \u003cem\u003en\u003c/em\u003e frames at SDIF byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.SDIF",
          "name": "sdif_b_frame_i",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int -\u003e [(Int, Int)]",
          "source": "src/Sound-SDIF-Byte-SDIF.html#sdif_b_frame_i",
          "type": "function"
        },
        "index": {
          "description": "Extract start and end indices for frames at SDIF byte stream",
          "hierarchy": "Sound SDIF Byte SDIF",
          "module": "Sound.SDIF.Byte.SDIF",
          "name": "sdif_b_frame_i",
          "normalized": "ByteString-\u003eInt-\u003e[(Int,Int)]",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-SDIF.html#v:sdif_b_frame_i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount number of frames at SDIF byte stream.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Byte.SDIF",
          "name": "sdif_b_frames",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-SDIF-Byte-SDIF.html#sdif_b_frames",
          "type": "function"
        },
        "index": {
          "description": "Count number of frames at SDIF byte stream",
          "hierarchy": "Sound SDIF Byte SDIF",
          "module": "Sound.SDIF.Byte.SDIF",
          "name": "sdif_b_frames",
          "normalized": "ByteString-\u003eInt",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Byte-SDIF.html#v:sdif_b_frames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSDIF frame functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SDIF.Frame",
          "name": "Frame",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Frame.html",
          "type": "module"
        },
        "index": {
          "description": "SDIF frame functions",
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "Frame",
          "package": "hsdif",
          "partial": "Frame",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSDIF frame data store\n\u003c/p\u003e",
          "module": "Sound.SDIF.Frame",
          "name": "Frame",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "data"
        },
        "index": {
          "description": "SDIF frame data store",
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "Frame",
          "package": "hsdif",
          "partial": "Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#t:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Frame",
          "name": "Frame",
          "package": "hsdif",
          "signature": "Frame",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "Frame",
          "package": "hsdif",
          "partial": "Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode SDIF \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Frame",
          "name": "decode_frame",
          "package": "hsdif",
          "signature": "ByteString -\u003e Frame",
          "source": "src/Sound-SDIF-Frame.html#decode_frame",
          "type": "function"
        },
        "index": {
          "description": "Decode SDIF Frame",
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "decode_frame",
          "normalized": "ByteString-\u003eFrame",
          "package": "hsdif",
          "signature": "ByteString-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:decode_frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Frame",
          "name": "frame_b",
          "package": "hsdif",
          "signature": "ByteString",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_b",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Frame",
          "name": "frame_id",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_id",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrices",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrices",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_matrices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract and decode \u003cem\u003en\u003c/em\u003eth matrix of \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrix",
          "package": "hsdif",
          "signature": "Frame -\u003e Int -\u003e Matrix",
          "source": "src/Sound-SDIF-Frame.html#frame_matrix",
          "type": "function"
        },
        "index": {
          "description": "Extract and decode th matrix of Frame",
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrix",
          "normalized": "Frame-\u003eInt-\u003eMatrix",
          "package": "hsdif",
          "signature": "Frame-\u003eInt-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003cem\u003en\u003c/em\u003eth matrix of \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrix_b",
          "package": "hsdif",
          "signature": "Frame -\u003e Int -\u003e ByteString",
          "source": "src/Sound-SDIF-Frame.html#frame_matrix_b",
          "type": "function"
        },
        "index": {
          "description": "Extract th matrix of Frame",
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrix_b",
          "normalized": "Frame-\u003eInt-\u003eByteString",
          "package": "hsdif",
          "signature": "Frame-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_matrix_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrix_c",
          "package": "hsdif",
          "signature": "[Matrix]",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrix_c",
          "normalized": "[Matrix]",
          "package": "hsdif",
          "signature": "[Matrix]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_matrix_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrix_i",
          "package": "hsdif",
          "signature": "[(Int, Int)]",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_matrix_i",
          "normalized": "[(Int,Int)]",
          "package": "hsdif",
          "signature": "[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_matrix_i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Frame",
          "name": "frame_size",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_size",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Frame",
          "name": "frame_time",
          "package": "hsdif",
          "signature": "Float",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_time",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Frame",
          "name": "frame_type",
          "package": "hsdif",
          "signature": "String",
          "source": "src/Sound-SDIF-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Frame",
          "module": "Sound.SDIF.Frame",
          "name": "frame_type",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Frame.html#v:frame_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSDIF matrix functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SDIF.Matrix",
          "name": "Matrix",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "SDIF matrix functions",
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "Matrix",
          "package": "hsdif",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSDIF matrix data store.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Matrix",
          "name": "Matrix",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "data"
        },
        "index": {
          "description": "SDIF matrix data store",
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "Matrix",
          "package": "hsdif",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "Matrix",
          "package": "hsdif",
          "signature": "Matrix",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "Matrix",
          "package": "hsdif",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Matrix",
          "name": "decode_matrix",
          "package": "hsdif",
          "signature": "ByteString -\u003e Matrix",
          "source": "src/Sound-SDIF-Matrix.html#decode_matrix",
          "type": "function"
        },
        "index": {
          "description": "Decode Matrix",
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "decode_matrix",
          "normalized": "ByteString-\u003eMatrix",
          "package": "hsdif",
          "signature": "ByteString-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:decode_matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSection of list from \u003cem\u003ei\u003c/em\u003eth to \u003cem\u003ej\u003c/em\u003eth indices.\n\u003c/p\u003e\u003cpre\u003e list_section [1..9] 4 6 == [5,6]\n\u003c/pre\u003e",
          "module": "Sound.SDIF.Matrix",
          "name": "list_section",
          "package": "hsdif",
          "signature": "[a] -\u003e Int -\u003e Int -\u003e [a]",
          "source": "src/Sound-SDIF-Matrix.html#list_section",
          "type": "function"
        },
        "index": {
          "description": "Section of list from th to th indices list section",
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "list_section",
          "normalized": "[a]-\u003eInt-\u003eInt-\u003e[a]",
          "package": "hsdif",
          "signature": "[a]-\u003eInt-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:list_section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_b",
          "package": "hsdif",
          "signature": "ByteString",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_b",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003cem\u003en\u003c/em\u003eth column of \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_column",
          "package": "hsdif",
          "signature": "Matrix -\u003e Int -\u003e [Datum]",
          "source": "src/Sound-SDIF-Matrix.html#matrix_column",
          "type": "function"
        },
        "index": {
          "description": "Extract th column of Matrix",
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_column",
          "normalized": "Matrix-\u003eInt-\u003e[Datum]",
          "package": "hsdif",
          "signature": "Matrix-\u003eInt-\u003e[Datum]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_columns",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_columns",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_data_size",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_data_size",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_data_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_data_type",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_data_type",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_data_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_elements",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_elements",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003cem\u003en\u003c/em\u003eth row of \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_row",
          "package": "hsdif",
          "signature": "Matrix -\u003e Int -\u003e [Datum]",
          "source": "src/Sound-SDIF-Matrix.html#matrix_row",
          "type": "function"
        },
        "index": {
          "description": "Extract th row of Matrix",
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_row",
          "normalized": "Matrix-\u003eInt-\u003e[Datum]",
          "package": "hsdif",
          "signature": "Matrix-\u003eInt-\u003e[Datum]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_rows",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_rows",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_storage_size",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_storage_size",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_storage_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_type",
          "package": "hsdif",
          "signature": "String",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_type",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_v",
          "package": "hsdif",
          "signature": "[Datum]",
          "source": "src/Sound-SDIF-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Matrix",
          "module": "Sound.SDIF.Matrix",
          "name": "matrix_v",
          "normalized": "[Datum]",
          "package": "hsdif",
          "signature": "[Datum]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Matrix.html#v:matrix_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSDIF related data types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SDIF.Type",
          "name": "Type",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Type.html",
          "type": "module"
        },
        "index": {
          "description": "SDIF related data types",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "Type",
          "package": "hsdif",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniversal type for element data.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Type",
          "name": "Datum",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "data"
        },
        "index": {
          "description": "Universal type for element data",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "Datum",
          "package": "hsdif",
          "partial": "Datum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#t:Datum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData element type.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Type",
          "name": "Type",
          "package": "hsdif",
          "source": "src/Sound-SDIF-Type.html#Type",
          "type": "type"
        },
        "index": {
          "description": "Data element type",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "Type",
          "package": "hsdif",
          "partial": "Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Type",
          "name": "F32",
          "package": "hsdif",
          "signature": "F32 Float",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "F32",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:F32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Type",
          "name": "F64",
          "package": "hsdif",
          "signature": "F64 Double",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "F64",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:F64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Type",
          "name": "I16",
          "package": "hsdif",
          "signature": "I16 Int",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "I16",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:I16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Type",
          "name": "I32",
          "package": "hsdif",
          "signature": "I32 Int",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "I32",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:I32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Type",
          "name": "I64",
          "package": "hsdif",
          "signature": "I64 Int64",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "I64",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:I64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Type",
          "name": "I8",
          "package": "hsdif",
          "signature": "I8 Int",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "I8",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:I8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Type",
          "name": "U32",
          "package": "hsdif",
          "signature": "U32 Int",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "U32",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:U32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Type",
          "name": "U64",
          "package": "hsdif",
          "signature": "U64 Word64",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "U64",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:U64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF.Type",
          "name": "U8",
          "package": "hsdif",
          "signature": "U8 Word8",
          "source": "src/Sound-SDIF-Type.html#Datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "U8",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:U8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoder for indicated data element type to \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Type",
          "name": "data_type_decoder",
          "package": "hsdif",
          "signature": "Type -\u003e ByteString -\u003e Datum",
          "source": "src/Sound-SDIF-Type.html#data_type_decoder",
          "type": "function"
        },
        "index": {
          "description": "Decoder for indicated data element type to Datum",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "data_type_decoder",
          "normalized": "Type-\u003eByteString-\u003eDatum",
          "package": "hsdif",
          "signature": "Type-\u003eByteString-\u003eDatum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:data_type_decoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSDIF encoder for \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Type",
          "name": "data_type_encoder",
          "package": "hsdif",
          "signature": "Datum -\u003e ByteString",
          "source": "src/Sound-SDIF-Type.html#data_type_encoder",
          "type": "function"
        },
        "index": {
          "description": "SDIF encoder for Datum",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "data_type_encoder",
          "normalized": "Datum-\u003eByteString",
          "package": "hsdif",
          "signature": "Datum-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:data_type_encoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize (in bytes) of data element type.\n\u003c/p\u003e\u003cpre\u003e data_type_size 0x008 == 8\n\u003c/pre\u003e",
          "module": "Sound.SDIF.Type",
          "name": "data_type_size",
          "package": "hsdif",
          "signature": "Type -\u003e Int",
          "source": "src/Sound-SDIF-Type.html#data_type_size",
          "type": "function"
        },
        "index": {
          "description": "Size in bytes of data element type data type size x008",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "data_type_size",
          "normalized": "Type-\u003eInt",
          "package": "hsdif",
          "signature": "Type-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:data_type_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs data element type standard.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Type",
          "name": "data_type_standard_p",
          "package": "hsdif",
          "signature": "Type -\u003e Bool",
          "source": "src/Sound-SDIF-Type.html#data_type_standard_p",
          "type": "function"
        },
        "index": {
          "description": "Is data element type standard",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "data_type_standard_p",
          "normalized": "Type-\u003eBool",
          "package": "hsdif",
          "signature": "Type-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:data_type_standard_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString describing indicated data element type.\n\u003c/p\u003e\u003cpre\u003e data_type_string 0x008 == \"real number\"\n\u003c/pre\u003e",
          "module": "Sound.SDIF.Type",
          "name": "data_type_string",
          "package": "hsdif",
          "signature": "Type -\u003e String",
          "source": "src/Sound-SDIF-Type.html#data_type_string",
          "type": "function"
        },
        "index": {
          "description": "String describing indicated data element type data type string x008 real number",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "data_type_string",
          "normalized": "Type-\u003eString",
          "package": "hsdif",
          "signature": "Type-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:data_type_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSection of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from \u003cem\u003ei\u003c/em\u003eth to \u003cem\u003ej\u003c/em\u003eth indices.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Type",
          "name": "section",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int64 -\u003e Int64 -\u003e ByteString",
          "source": "src/Sound-SDIF-Type.html#section",
          "type": "function"
        },
        "index": {
          "description": "Section of ByteString from th to th indices",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "section",
          "normalized": "ByteString-\u003eInt-\u003eInt-\u003eByteString",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e based variant of \u003ccode\u003e\u003ca\u003esection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF.Type",
          "name": "section'",
          "package": "hsdif",
          "signature": "ByteString -\u003e Int -\u003e Int -\u003e ByteString",
          "source": "src/Sound-SDIF-Type.html#section%27",
          "type": "function"
        },
        "index": {
          "description": "Int based variant of section",
          "hierarchy": "Sound SDIF Type",
          "module": "Sound.SDIF.Type",
          "name": "section'",
          "normalized": "ByteString-\u003eInt-\u003eInt-\u003eByteString",
          "package": "hsdif",
          "signature": "ByteString-\u003eInt-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF-Type.html#v:section-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSDIF (Sound Description Interchange Format)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SDIF",
          "name": "SDIF",
          "package": "hsdif",
          "source": "src/Sound-SDIF.html",
          "type": "module"
        },
        "index": {
          "description": "SDIF Sound Description Interchange Format",
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "SDIF",
          "package": "hsdif",
          "partial": "SDIF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSDIF data store.\n\u003c/p\u003e",
          "module": "Sound.SDIF",
          "name": "SDIF",
          "package": "hsdif",
          "source": "src/Sound-SDIF.html#SDIF",
          "type": "data"
        },
        "index": {
          "description": "SDIF data store",
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "SDIF",
          "package": "hsdif",
          "partial": "SDIF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#t:SDIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF",
          "name": "SDIF",
          "package": "hsdif",
          "signature": "SDIF",
          "source": "src/Sound-SDIF.html#SDIF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "SDIF",
          "package": "hsdif",
          "partial": "SDIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:SDIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eSDIF\u003c/a\u003e\u003c/code\u003e data stream.\n\u003c/p\u003e\u003cpre\u003e b \u003c- B.readFile \"/home/rohan/sw/hsdif/Help/crotale.sdif\"\n sdif_frames (decode_sdif b) == 2\n\u003c/pre\u003e",
          "module": "Sound.SDIF",
          "name": "decode_sdif",
          "package": "hsdif",
          "signature": "ByteString -\u003e SDIF",
          "source": "src/Sound-SDIF.html#decode_sdif",
          "type": "function"
        },
        "index": {
          "description": "Decode SDIF data stream B.readFile home rohan sw hsdif Help crotale.sdif sdif frames decode sdif",
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "decode_sdif",
          "normalized": "ByteString-\u003eSDIF",
          "package": "hsdif",
          "signature": "ByteString-\u003eSDIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:decode_sdif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF",
          "name": "sdif_b",
          "package": "hsdif",
          "signature": "ByteString",
          "source": "src/Sound-SDIF.html#SDIF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "sdif_b",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:sdif_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract and decode \u003cem\u003en\u003c/em\u003eth frame from \u003ccode\u003e\u003ca\u003eSDIF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e frame_type (sdif_frame s 0) == \"SDIF\"\n\u003c/pre\u003e",
          "module": "Sound.SDIF",
          "name": "sdif_frame",
          "package": "hsdif",
          "signature": "SDIF -\u003e Int -\u003e Frame",
          "source": "src/Sound-SDIF.html#sdif_frame",
          "type": "function"
        },
        "index": {
          "description": "Extract and decode th frame from SDIF frame type sdif frame SDIF",
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "sdif_frame",
          "normalized": "SDIF-\u003eInt-\u003eFrame",
          "package": "hsdif",
          "signature": "SDIF-\u003eInt-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:sdif_frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003cem\u003en\u003c/em\u003eth frame data from \u003ccode\u003e\u003ca\u003eSDIF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SDIF",
          "name": "sdif_frame_b",
          "package": "hsdif",
          "signature": "SDIF -\u003e Int -\u003e ByteString",
          "source": "src/Sound-SDIF.html#sdif_frame_b",
          "type": "function"
        },
        "index": {
          "description": "Extract th frame data from SDIF",
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "sdif_frame_b",
          "normalized": "SDIF-\u003eInt-\u003eByteString",
          "package": "hsdif",
          "signature": "SDIF-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:sdif_frame_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF",
          "name": "sdif_frame_c",
          "package": "hsdif",
          "signature": "[Frame]",
          "source": "src/Sound-SDIF.html#SDIF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "sdif_frame_c",
          "normalized": "[Frame]",
          "package": "hsdif",
          "signature": "[Frame]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:sdif_frame_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF",
          "name": "sdif_frame_i",
          "package": "hsdif",
          "signature": "[(Int, Int)]",
          "source": "src/Sound-SDIF.html#SDIF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "sdif_frame_i",
          "normalized": "[(Int,Int)]",
          "package": "hsdif",
          "signature": "[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:sdif_frame_i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SDIF",
          "name": "sdif_frames",
          "package": "hsdif",
          "signature": "Int",
          "source": "src/Sound-SDIF.html#SDIF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "sdif_frames",
          "package": "hsdif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:sdif_frames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract and decode \u003cem\u003ej\u003c/em\u003eth matrix from \u003cem\u003ei\u003c/em\u003eth frame from \u003ccode\u003e\u003ca\u003eSDIF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e matrix_type (sdif_matrix s 1 0) == \"1RES\"\n\u003c/pre\u003e",
          "module": "Sound.SDIF",
          "name": "sdif_matrix",
          "package": "hsdif",
          "signature": "SDIF -\u003e Int -\u003e Int -\u003e Matrix",
          "source": "src/Sound-SDIF.html#sdif_matrix",
          "type": "function"
        },
        "index": {
          "description": "Extract and decode th matrix from th frame from SDIF matrix type sdif matrix RES",
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "sdif_matrix",
          "normalized": "SDIF-\u003eInt-\u003eInt-\u003eMatrix",
          "package": "hsdif",
          "signature": "SDIF-\u003eInt-\u003eInt-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:sdif_matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003ematrix_v\u003c/a\u003e\u003c/code\u003e on result of \u003ccode\u003e\u003ca\u003esdif_matrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e length (sdif_matrix_v s 1 0) == 200\n\u003c/pre\u003e",
          "module": "Sound.SDIF",
          "name": "sdif_matrix_v",
          "package": "hsdif",
          "signature": "SDIF -\u003e Int -\u003e Int -\u003e [Datum]",
          "source": "src/Sound-SDIF.html#sdif_matrix_v",
          "type": "function"
        },
        "index": {
          "description": "Run matrix on result of sdif matrix length sdif matrix",
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "sdif_matrix_v",
          "normalized": "SDIF-\u003eInt-\u003eInt-\u003e[Datum]",
          "package": "hsdif",
          "signature": "SDIF-\u003eInt-\u003eInt-\u003e[Datum]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:sdif_matrix_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead and decode \u003ccode\u003e\u003ca\u003eSDIF\u003c/a\u003e\u003c/code\u003e from named file.\n\u003c/p\u003e\u003cpre\u003e s \u003c- sdif_read_file \"/home/rohan/sw/hsdif/Help/crotale.sdif\"\n sdif_frame_i s == [(0,16),(16,856)]\n\u003c/pre\u003e",
          "module": "Sound.SDIF",
          "name": "sdif_read_file",
          "package": "hsdif",
          "signature": "FilePath -\u003e IO SDIF",
          "source": "src/Sound-SDIF.html#sdif_read_file",
          "type": "function"
        },
        "index": {
          "description": "Read and decode SDIF from named file sdif read file home rohan sw hsdif Help crotale.sdif sdif frame",
          "hierarchy": "Sound SDIF",
          "module": "Sound.SDIF",
          "name": "sdif_read_file",
          "normalized": "FilePath-\u003eIO SDIF",
          "package": "hsdif",
          "signature": "FilePath-\u003eIO SDIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdif/docs/Sound-SDIF.html#v:sdif_read_file"
      }
    }
  ]
]