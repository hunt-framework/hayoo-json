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
        "word": "pngload"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.CRC",
          "name": "CRC",
          "package": "pngload",
          "source": "src/Codec-Image-PNG-Internal-CRC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal CRC",
          "module": "Codec.Image.PNG.Internal.CRC",
          "name": "CRC",
          "package": "pngload",
          "partial": "CRC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-CRC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.CRC",
          "name": "crc",
          "package": "pngload",
          "signature": "ByteString -\u003e Word32",
          "source": "src/Codec-Image-PNG-Internal-CRC.html#crc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal CRC",
          "module": "Codec.Image.PNG.Internal.CRC",
          "name": "crc",
          "normalized": "ByteString-\u003eWord",
          "package": "pngload",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-CRC.html#v:crc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.CRC",
          "name": "update_crc",
          "package": "pngload",
          "signature": "Word32 -\u003e ByteString -\u003e Word32",
          "source": "src/Codec-Image-PNG-Internal-CRC.html#update_crc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal CRC",
          "module": "Codec.Image.PNG.Internal.CRC",
          "name": "update_crc",
          "normalized": "Word-\u003eByteString-\u003eWord",
          "package": "pngload",
          "signature": "Word-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-CRC.html#v:update_crc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Filters",
          "name": "Filters",
          "package": "pngload",
          "source": "src/Codec-Image-PNG-Internal-Filters.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Filters",
          "module": "Codec.Image.PNG.Internal.Filters",
          "name": "Filters",
          "package": "pngload",
          "partial": "Filters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Filters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefilter filtered PNG data (data includes scanlines prepended with filter\n   types).\n\u003c/p\u003e",
          "module": "Codec.Image.PNG.Internal.Filters",
          "name": "defilter_scanlines_arr",
          "package": "pngload",
          "signature": "(Width, Height) -\u003e Int -\u003e ByteString -\u003e IO (StorableArray (Width, Height) Word8)",
          "source": "src/Codec-Image-PNG-Internal-Filters.html#defilter_scanlines_arr",
          "type": "function"
        },
        "index": {
          "description": "Defilter filtered PNG data data includes scanlines prepended with filter types",
          "hierarchy": "Codec Image PNG Internal Filters",
          "module": "Codec.Image.PNG.Internal.Filters",
          "name": "defilter_scanlines_arr",
          "normalized": "(Width,Height)-\u003eInt-\u003eByteString-\u003eIO(StorableArray(Width,Height)Word)",
          "package": "pngload",
          "signature": "(Width,Height)-\u003eInt-\u003eByteString-\u003eIO(StorableArray(Width,Height)Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Filters.html#v:defilter_scanlines_arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "Parser",
          "package": "pngload",
          "source": "src/Codec-Image-PNG-Internal-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "Parser",
          "package": "pngload",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "Parser",
          "package": "pngload",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "Parser",
          "package": "pngload",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "allowedValues",
          "package": "pngload",
          "signature": "(a -\u003e Parser a) -\u003e [(a, b)] -\u003e Parser b",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#allowedValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "allowedValues",
          "normalized": "(a-\u003eParser a)-\u003e[(a,b)]-\u003eParser b",
          "package": "pngload",
          "partial": "Values",
          "signature": "(a-\u003eParser a)-\u003e[(a,b)]-\u003eParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:allowedValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "anyWord16",
          "package": "pngload",
          "signature": "ParsecT ByteString u m Word16",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#anyWord16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "anyWord16",
          "package": "pngload",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:anyWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "anyWord32",
          "package": "pngload",
          "signature": "ParsecT ByteString u m Word32",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#anyWord32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "anyWord32",
          "package": "pngload",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:anyWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "anyWord8",
          "package": "pngload",
          "signature": "ParsecT ByteString u m Word8",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#anyWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "anyWord8",
          "package": "pngload",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:anyWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "block",
          "package": "pngload",
          "signature": "Int -\u003e ParsecT ByteString u m ByteString",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "block",
          "normalized": "Int-\u003eParsecT ByteString a b ByteString",
          "package": "pngload",
          "signature": "Int-\u003eParsecT ByteString u m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "parseFromFile",
          "package": "pngload",
          "signature": "Parser a -\u003e FilePath -\u003e IO (Either String a)",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#parseFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "parseFromFile",
          "normalized": "Parser a-\u003eFilePath-\u003eIO(Either String a)",
          "package": "pngload",
          "partial": "From File",
          "signature": "Parser a-\u003eFilePath-\u003eIO(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:parseFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "satisfy",
          "package": "pngload",
          "signature": "(Word8 -\u003e Bool) -\u003e ParsecT ByteString u m Word8",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#satisfy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "satisfy",
          "normalized": "(Word-\u003eBool)-\u003eParsecT ByteString a b Word",
          "package": "pngload",
          "signature": "(Word-\u003eBool)-\u003eParsecT ByteString u m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "string",
          "package": "pngload",
          "signature": "ByteString -\u003e ParsecT ByteString u m ByteString",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "string",
          "normalized": "ByteString-\u003eParsecT ByteString a b ByteString",
          "package": "pngload",
          "signature": "ByteString-\u003eParsecT ByteString u m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "word16",
          "package": "pngload",
          "signature": "Word16 -\u003e ParsecT ByteString u m Word16",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#word16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "word16",
          "normalized": "Word-\u003eParsecT ByteString a b Word",
          "package": "pngload",
          "signature": "Word-\u003eParsecT ByteString u m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:word16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "word32",
          "package": "pngload",
          "signature": "Word32 -\u003e ParsecT ByteString u m Word32",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#word32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "word32",
          "normalized": "Word-\u003eParsecT ByteString a b Word",
          "package": "pngload",
          "signature": "Word-\u003eParsecT ByteString u m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "word8",
          "package": "pngload",
          "signature": "Word8 -\u003e ParsecT ByteString u m Word8",
          "source": "src/Codec-Image-PNG-Internal-Parser.html#word8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PNG Internal Parser",
          "module": "Codec.Image.PNG.Internal.Parser",
          "name": "word8",
          "normalized": "Word-\u003eParsecT ByteString a b Word",
          "package": "pngload",
          "signature": "Word-\u003eParsecT ByteString u m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG-Internal-Parser.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple, pure Haskell PNG loader. Currently supports 24bit RGB(A) images\n with no interlacing. Also lacks support for color indexed (paletted) images.\n\u003c/p\u003e\u003cp\u003eThe image is stored in a StorableArray for compatibility with OpenGL (the\n array supports getting Ptr Word8 to the image data using withStorableArray\n function).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Image.PNG",
          "name": "PNG",
          "package": "pngload",
          "source": "src/Codec-Image-PNG.html",
          "type": "module"
        },
        "index": {
          "description": "simple pure Haskell PNG loader Currently supports bit RGB images with no interlacing Also lacks support for color indexed paletted images The image is stored in StorableArray for compatibility with OpenGL the array supports getting Ptr Word8 to the image data using withStorableArray function",
          "hierarchy": "Codec Image PNG",
          "module": "Codec.Image.PNG",
          "name": "PNG",
          "package": "pngload",
          "partial": "PNG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG",
          "name": "Height",
          "package": "pngload",
          "source": "src/Codec-Image-PNG.html#Height",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Image PNG",
          "module": "Codec.Image.PNG",
          "name": "Height",
          "package": "pngload",
          "partial": "Height",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG.html#t:Height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG",
          "name": "PNGImage",
          "package": "pngload",
          "source": "src/Codec-Image-PNG.html#PNGImage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Image PNG",
          "module": "Codec.Image.PNG",
          "name": "PNGImage",
          "package": "pngload",
          "partial": "PNGImage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG.html#t:PNGImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PNG",
          "name": "Width",
          "package": "pngload",
          "source": "src/Codec-Image-PNG.html#Width",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Image PNG",
          "module": "Codec.Image.PNG",
          "name": "Width",
          "package": "pngload",
          "partial": "Width",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG.html#t:Width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet dimensions of the image (in pixels)\n\u003c/p\u003e",
          "module": "Codec.Image.PNG",
          "name": "dimensions",
          "package": "pngload",
          "signature": "PNGImage -\u003e (Width, Height)",
          "source": "src/Codec-Image-PNG.html#dimensions",
          "type": "function"
        },
        "index": {
          "description": "Get dimensions of the image in pixels",
          "hierarchy": "Codec Image PNG",
          "module": "Codec.Image.PNG",
          "name": "dimensions",
          "normalized": "PNGImage-\u003e(Width,Height)",
          "package": "pngload",
          "signature": "PNGImage-\u003e(Width,Height)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG.html#v:dimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the image has alpha channel\n\u003c/p\u003e",
          "module": "Codec.Image.PNG",
          "name": "hasAlphaChannel",
          "package": "pngload",
          "signature": "PNGImage -\u003e Bool",
          "source": "src/Codec-Image-PNG.html#hasAlphaChannel",
          "type": "function"
        },
        "index": {
          "description": "Check if the image has alpha channel",
          "hierarchy": "Codec Image PNG",
          "module": "Codec.Image.PNG",
          "name": "hasAlphaChannel",
          "normalized": "PNGImage-\u003eBool",
          "package": "pngload",
          "partial": "Alpha Channel",
          "signature": "PNGImage-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG.html#v:hasAlphaChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet image data as C-compatible StorableArray\n\u003c/p\u003e",
          "module": "Codec.Image.PNG",
          "name": "imageData",
          "package": "pngload",
          "signature": "PNGImage -\u003e StorableArray (Int, Int) Word8",
          "source": "src/Codec-Image-PNG.html#imageData",
          "type": "function"
        },
        "index": {
          "description": "Get image data as C-compatible StorableArray",
          "hierarchy": "Codec Image PNG",
          "module": "Codec.Image.PNG",
          "name": "imageData",
          "normalized": "PNGImage-\u003eStorableArray(Int,Int)Word",
          "package": "pngload",
          "partial": "Data",
          "signature": "PNGImage-\u003eStorableArray(Int,Int)Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG.html#v:imageData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a PNG file, Left value contains a description of a problem as a String,\n if any\n\u003c/p\u003e",
          "module": "Codec.Image.PNG",
          "name": "loadPNGFile",
          "package": "pngload",
          "signature": "FilePath -\u003e IO (Either String PNGImage)",
          "source": "src/Codec-Image-PNG.html#loadPNGFile",
          "type": "function"
        },
        "index": {
          "description": "Load PNG file Left value contains description of problem as String if any",
          "hierarchy": "Codec Image PNG",
          "module": "Codec.Image.PNG",
          "name": "loadPNGFile",
          "normalized": "FilePath-\u003eIO(Either String PNGImage)",
          "package": "pngload",
          "partial": "PNGFile",
          "signature": "FilePath-\u003eIO(Either String PNGImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pngload/docs/Codec-Image-PNG.html#v:loadPNGFile"
      }
    }
  ]
]