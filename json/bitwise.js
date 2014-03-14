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
        "word": "bitwise"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncode and decode both versions (binary P4 and plain P1) of PBM: the\nportable bitmap lowest common denominator monochrome image file format.\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e pbm(5)\n\u003c/li\u003e\u003cli\u003e The PBM Format \u003ca\u003ehttp://netpbm.sourceforge.net/doc/pbm.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBugs:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This implementation is not fully compliant with the PBM specification,\n    with respect to point 8 in the second reference above which states that\n    \u003cem\u003ea comment can actually be in the middle of what you might consider a token\u003c/em\u003e\n    Such a pathological PBM file might be rejected by \u003ccode\u003e\u003ca\u003edecodePBM\u003c/a\u003e\u003c/code\u003e, but\n    may instead be wrongly decoded if (for example) the comment were in\n    the middle of the image width token, leading to it being interpreted\n    as a (smaller) width and height.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Codec.Image.PBM",
          "name": "PBM",
          "package": "bitwise",
          "source": "src/Codec-Image-PBM.html",
          "type": "module"
        },
        "index": {
          "description": "Encode and decode both versions binary P4 and plain P1 of PBM the portable bitmap lowest common denominator monochrome image file format References pbm The PBM Format http netpbm.sourceforge.net doc pbm.html Bugs This implementation is not fully compliant with the PBM specification with respect to point in the second reference above which states that comment can actually be in the middle of what you might consider token Such pathological PBM file might be rejected by decodePBM but may instead be wrongly decoded if for example the comment were in the middle of the image width token leading to it being interpreted as smaller width and height",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "PBM",
          "package": "bitwise",
          "partial": "PBM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible reasons for decoding to fail, with the input that failed.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "DecodeError",
          "package": "bitwise",
          "source": "src/Codec-Image-PBM.html#DecodeError",
          "type": "data"
        },
        "index": {
          "description": "Possible reasons for decoding to fail with the input that failed",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "DecodeError",
          "package": "bitwise",
          "partial": "Decode Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#t:DecodeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible reasons for encoding to fail.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "EncodeError",
          "package": "bitwise",
          "source": "src/Codec-Image-PBM.html#EncodeError",
          "type": "data"
        },
        "index": {
          "description": "Possible reasons for encoding to fail",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "EncodeError",
          "package": "bitwise",
          "partial": "Encode Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#t:EncodeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA decoded PBM image.  \u003ccode\u003e\u003ca\u003epbmWidth\u003c/a\u003e\u003c/code\u003e must be less or equal to the\n   width of the \u003ccode\u003e\u003ca\u003epbmPixels\u003c/a\u003e\u003c/code\u003e array (which has its first index in Y\n   and the second in X, with lowest coordinates at the top left).\n\u003c/p\u003e\u003cp\u003eFalse pixels are white, True pixels are black.  Pixels to the\n   right of \u003ccode\u003e\u003ca\u003epbmWidth\u003c/a\u003e\u003c/code\u003e are don't care padding bits.  However, these\n   padding bits are likely to invalidate aggregrate \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e\n   operations.  See \u003ccode\u003e\u003ca\u003etrimPBM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "PBM",
          "package": "bitwise",
          "source": "src/Codec-Image-PBM.html#PBM",
          "type": "data"
        },
        "index": {
          "description": "decoded PBM image pbmWidth must be less or equal to the width of the pbmPixels array which has its first index in and the second in with lowest coordinates at the top left False pixels are white True pixels are black Pixels to the right of pbmWidth are don care padding bits However these padding bits are likely to invalidate aggregrate fold operations See trimPBM",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "PBM",
          "package": "bitwise",
          "partial": "PBM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#t:PBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe height could not be parsed, or was non-positive.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "BadHeight",
          "package": "bitwise",
          "signature": "BadHeight a",
          "source": "src/Codec-Image-PBM.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "The height could not be parsed or was non-positive",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "BadHeight",
          "package": "bitwise",
          "partial": "Bad Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimage width is larger than array width\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "BadLargeWidth",
          "package": "bitwise",
          "signature": "BadLargeWidth",
          "source": "src/Codec-Image-PBM.html#EncodeError",
          "type": "function"
        },
        "index": {
          "description": "image width is larger than array width",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "BadLargeWidth",
          "package": "bitwise",
          "partial": "Bad Large Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadLargeWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond character was not 4 (binary) or 1 (plain).\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "BadMagicN",
          "package": "bitwise",
          "signature": "BadMagicN a",
          "source": "src/Codec-Image-PBM.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "Second character was not binary or plain",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "BadMagicN",
          "package": "bitwise",
          "partial": "Bad Magic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadMagicN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst character was not P.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "BadMagicP",
          "package": "bitwise",
          "signature": "BadMagicP a",
          "source": "src/Codec-Image-PBM.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "First character was not",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "BadMagicP",
          "package": "bitwise",
          "partial": "Bad Magic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadMagicP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003earray width is not a multiple of 8 bits\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "BadPixelWidth",
          "package": "bitwise",
          "signature": "BadPixelWidth",
          "source": "src/Codec-Image-PBM.html#EncodeError",
          "type": "function"
        },
        "index": {
          "description": "array width is not multiple of bits",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "BadPixelWidth",
          "package": "bitwise",
          "partial": "Bad Pixel Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadPixelWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere weren't enough bytes of pixel data.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "BadPixels",
          "package": "bitwise",
          "signature": "BadPixels a",
          "source": "src/Codec-Image-PBM.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "There weren enough bytes of pixel data",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "BadPixels",
          "package": "bitwise",
          "partial": "Bad Pixels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadPixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimage width is too smaller than array width\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "BadSmallWidth",
          "package": "bitwise",
          "signature": "BadSmallWidth",
          "source": "src/Codec-Image-PBM.html#EncodeError",
          "type": "function"
        },
        "index": {
          "description": "image width is too smaller than array width",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "BadSmallWidth",
          "package": "bitwise",
          "partial": "Bad Small Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadSmallWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing failed at the space before the pixel data.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "BadSpace",
          "package": "bitwise",
          "signature": "BadSpace a",
          "source": "src/Codec-Image-PBM.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "Parsing failed at the space before the pixel data",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "BadSpace",
          "package": "bitwise",
          "partial": "Bad Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe width could not be parsed, or was non-positive.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "BadWidth",
          "package": "bitwise",
          "signature": "BadWidth a",
          "source": "src/Codec-Image-PBM.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "The width could not be parsed or was non-positive",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "BadWidth",
          "package": "bitwise",
          "partial": "Bad Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PBM",
          "name": "PBM",
          "package": "bitwise",
          "signature": "PBM",
          "source": "src/Codec-Image-PBM.html#PBM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "PBM",
          "package": "bitwise",
          "partial": "PBM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:PBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a binary PBM (P4) image.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "decodePBM",
          "package": "bitwise",
          "signature": "ByteString -\u003e Either (DecodeError ByteString) (PBM, ByteString)",
          "source": "src/Codec-Image-PBM.html#decodePBM",
          "type": "function"
        },
        "index": {
          "description": "Decode binary PBM P4 image",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "decodePBM",
          "normalized": "ByteString-\u003eEither(DecodeError ByteString)(PBM,ByteString)",
          "package": "bitwise",
          "partial": "PBM",
          "signature": "ByteString-\u003eEither(DecodeError ByteString)(PBM,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:decodePBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a sequence of binary PBM (P4) images.\n\u003c/p\u003e\u003cp\u003eKeeps decoding until end of input (in which case the \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e of the\n   result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) or an error occurred.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "decodePBMs",
          "package": "bitwise",
          "signature": "ByteString -\u003e ([PBM], Maybe (DecodeError ByteString))",
          "source": "src/Codec-Image-PBM.html#decodePBMs",
          "type": "function"
        },
        "index": {
          "description": "Decode sequence of binary PBM P4 images Keeps decoding until end of input in which case the snd of the result is Nothing or an error occurred",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "decodePBMs",
          "normalized": "ByteString-\u003e([PBM],Maybe(DecodeError ByteString))",
          "package": "bitwise",
          "partial": "PBMs",
          "signature": "ByteString-\u003e([PBM],Maybe(DecodeError ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:decodePBMs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a plain PBM (P1) image.\n\u003c/p\u003e\u003cp\u003eNote that the pixel array size is kept as-is (with the width not\n   necessarily a multiple of 8 bits).\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "decodePlainPBM",
          "package": "bitwise",
          "signature": "String -\u003e Either (DecodeError String) (PBM, String)",
          "source": "src/Codec-Image-PBM.html#decodePlainPBM",
          "type": "function"
        },
        "index": {
          "description": "Decode plain PBM P1 image Note that the pixel array size is kept as-is with the width not necessarily multiple of bits",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "decodePlainPBM",
          "normalized": "String-\u003eEither(DecodeError String)(PBM,String)",
          "package": "bitwise",
          "partial": "Plain PBM",
          "signature": "String-\u003eEither(DecodeError String)(PBM,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:decodePlainPBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PBM",
          "name": "encErrPBM",
          "package": "bitwise",
          "signature": "PBM",
          "source": "src/Codec-Image-PBM.html#EncodeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "encErrPBM",
          "package": "bitwise",
          "partial": "Err PBM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:encErrPBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a binary PBM (P4) image, padding rows to multiples of 8\n   bits as necessary.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "encodePBM",
          "package": "bitwise",
          "signature": "BitArray (Int, Int)-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encode binary PBM P4 image padding rows to multiples of bits as necessary",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "encodePBM",
          "normalized": "BitArray(Int,Int)-\u003eByteString",
          "package": "bitwise",
          "partial": "PBM",
          "signature": "BitArray(Int,Int)-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:encodePBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a pre-padded \u003ccode\u003e\u003ca\u003ePBM\u003c/a\u003e\u003c/code\u003e to a binary PBM (P4) image.\n\u003c/p\u003e\u003cp\u003eThe pixels array must have a multiple of 8 bits per row.  The image\n   width may be less than the pixel array width, with up to 7 padding\n   bits at the end of each row.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "encodePBM'",
          "package": "bitwise",
          "signature": "PBM -\u003e Either EncodeError ByteString",
          "source": "src/Codec-Image-PBM.html#encodePBM%27",
          "type": "function"
        },
        "index": {
          "description": "Encode pre-padded PBM to binary PBM P4 image The pixels array must have multiple of bits per row The image width may be less than the pixel array width with up to padding bits at the end of each row",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "encodePBM'",
          "normalized": "PBM-\u003eEither EncodeError ByteString",
          "package": "bitwise",
          "partial": "PBM'",
          "signature": "PBM-\u003eEither EncodeError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:encodePBM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a plain PBM (P1) image.\n\u003c/p\u003e\u003cp\u003eNo restrictions on pixels array size, but the file format is\n   exceedingly wasteful of space.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "encodePlainPBM",
          "package": "bitwise",
          "signature": "BitArray (Int, Int)-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Encode plain PBM P1 image No restrictions on pixels array size but the file format is exceedingly wasteful of space",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "encodePlainPBM",
          "normalized": "BitArray(Int,Int)-\u003eString",
          "package": "bitwise",
          "partial": "Plain PBM",
          "signature": "BitArray(Int,Int)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:encodePlainPBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd padding bits at the end of each row to make the array width a\n   multiple of 8 bits, required for binary PBM (P4) encoding.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "padPBM",
          "package": "bitwise",
          "signature": "PBM -\u003e PBM",
          "source": "src/Codec-Image-PBM.html#padPBM",
          "type": "function"
        },
        "index": {
          "description": "Add padding bits at the end of each row to make the array width multiple of bits required for binary PBM P4 encoding",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "padPBM",
          "normalized": "PBM-\u003ePBM",
          "package": "bitwise",
          "partial": "PBM",
          "signature": "PBM-\u003ePBM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:padPBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PBM",
          "name": "pbmPixels",
          "package": "bitwise",
          "signature": "(BitArray (Int, Int))",
          "source": "src/Codec-Image-PBM.html#PBM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "pbmPixels",
          "normalized": "(BitArray(Int,Int))",
          "package": "bitwise",
          "partial": "Pixels",
          "signature": "(BitArray(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:pbmPixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PBM",
          "name": "pbmWidth",
          "package": "bitwise",
          "signature": "Int",
          "source": "src/Codec-Image-PBM.html#PBM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "pbmWidth",
          "package": "bitwise",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:pbmWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim then pad.  The resulting \u003ccode\u003e\u003ca\u003ePBM\u003c/a\u003e\u003c/code\u003e (if any) is suitable for\n   encoding to binary PBM (P4), moreover its padding bits will\n   be cleared.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "repadPBM",
          "package": "bitwise",
          "signature": "PBM -\u003e Maybe PBM",
          "source": "src/Codec-Image-PBM.html#repadPBM",
          "type": "function"
        },
        "index": {
          "description": "Trim then pad The resulting PBM if any is suitable for encoding to binary PBM P4 moreover its padding bits will be cleared",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "repadPBM",
          "normalized": "PBM-\u003eMaybe PBM",
          "package": "bitwise",
          "partial": "PBM",
          "signature": "PBM-\u003eMaybe PBM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:repadPBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim any padding bits, required for \u003ccode\u003efold\u003c/code\u003e operations to give\n   meaningful results.\n\u003c/p\u003e\u003cp\u003eFails for invalid \u003ccode\u003e\u003ca\u003ePBM\u003c/a\u003e\u003c/code\u003e with image width greater than array width.\n\u003c/p\u003e",
          "module": "Codec.Image.PBM",
          "name": "trimPBM",
          "package": "bitwise",
          "signature": "PBM -\u003e Maybe PBM",
          "source": "src/Codec-Image-PBM.html#trimPBM",
          "type": "function"
        },
        "index": {
          "description": "Trim any padding bits required for fold operations to give meaningful results Fails for invalid PBM with image width greater than array width",
          "hierarchy": "Codec Image PBM",
          "module": "Codec.Image.PBM",
          "name": "trimPBM",
          "normalized": "PBM-\u003eMaybe PBM",
          "package": "bitwise",
          "partial": "PBM",
          "signature": "PBM-\u003eMaybe PBM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:trimPBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCopy bit array data to and from ByteStrings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.BitArray.ByteString",
          "name": "ByteString",
          "package": "bitwise",
          "source": "src/Data-Array-BitArray-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Copy bit array data to and from ByteStrings",
          "hierarchy": "Data Array BitArray ByteString",
          "module": "Data.Array.BitArray.ByteString",
          "name": "ByteString",
          "package": "bitwise",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy from a ByteString.  Much like \u003ccode\u003elistArray\u003c/code\u003e but with packed bits.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ByteString",
          "name": "fromByteString",
          "package": "bitwise",
          "signature": "(i, i)-\u003e ByteString-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "Copy from ByteString Much like listArray but with packed bits",
          "hierarchy": "Data Array BitArray ByteString",
          "module": "Data.Array.BitArray.ByteString",
          "name": "fromByteString",
          "normalized": "(a,a)-\u003eByteString-\u003eBitArray a",
          "package": "bitwise",
          "partial": "Byte String",
          "signature": "(i,i)-\u003eByteString-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy from a ByteString.  Much like \u003ccode\u003enewListArray\u003c/code\u003e but with packed bits.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ByteString",
          "name": "fromByteStringIO",
          "package": "bitwise",
          "signature": "(i, i)-\u003e ByteString-\u003e IO (IOBitArray i)",
          "type": "function"
        },
        "index": {
          "description": "Copy from ByteString Much like newListArray but with packed bits",
          "hierarchy": "Data Array BitArray ByteString",
          "module": "Data.Array.BitArray.ByteString",
          "name": "fromByteStringIO",
          "normalized": "(a,a)-\u003eByteString-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "partial": "Byte String IO",
          "signature": "(i,i)-\u003eByteString-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#v:fromByteStringIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy to a ByteString.  The most significant bits of the last byte\n   are padded with 0 unless the array was a multiple of 8 bits in size.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ByteString",
          "name": "toByteString",
          "package": "bitwise",
          "signature": "BitArray i -\u003e ByteString",
          "source": "src/Data-Array-BitArray-ByteString.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "Copy to ByteString The most significant bits of the last byte are padded with unless the array was multiple of bits in size",
          "hierarchy": "Data Array BitArray ByteString",
          "module": "Data.Array.BitArray.ByteString",
          "name": "toByteString",
          "normalized": "BitArray a-\u003eByteString",
          "package": "bitwise",
          "partial": "Byte String",
          "signature": "BitArray i-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy to a ByteString.  The most significant bits of the last byte\n   are padded with 0 unless the array was a multiple of 8 bits in size.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ByteString",
          "name": "toByteStringIO",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO ByteString",
          "source": "src/Data-Array-BitArray-ByteString.html#toByteStringIO",
          "type": "function"
        },
        "index": {
          "description": "Copy to ByteString The most significant bits of the last byte are padded with unless the array was multiple of bits in size",
          "hierarchy": "Data Array BitArray ByteString",
          "module": "Data.Array.BitArray.ByteString",
          "name": "toByteStringIO",
          "normalized": "IOBitArray a-\u003eIO ByteString",
          "package": "bitwise",
          "partial": "Byte String IO",
          "signature": "IOBitArray i-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#v:toByteStringIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnboxed mutable bit arrays in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "IO",
          "package": "bitwise",
          "source": "src/Data-Array-BitArray-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Unboxed mutable bit arrays in the IO monad",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "IO",
          "package": "bitwise",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of mutable bit arrays in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "IOBitArray",
          "package": "bitwise",
          "source": "src/Data-Array-BitArray-Internal.html#IOBitArray",
          "type": "data"
        },
        "index": {
          "description": "The type of mutable bit arrays in the IO monad",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "IOBitArray",
          "package": "bitwise",
          "partial": "IOBit Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#t:IOBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit bitwise reduction: False when any bit is False.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "and",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO Bool",
          "source": "src/Data-Array-BitArray-IO.html#and",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit bitwise reduction False when any bit is False",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "and",
          "normalized": "IOBitArray a-\u003eIO Bool",
          "package": "bitwise",
          "signature": "IOBitArray i-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy an array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "copy",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO (IOBitArray i)",
          "source": "src/Data-Array-BitArray-Internal.html#copy",
          "type": "function"
        },
        "index": {
          "description": "Copy an array",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "copy",
          "normalized": "IOBitArray a-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "signature": "IOBitArray i-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill an array with a uniform value.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "fill",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e Bool -\u003e IO ()",
          "source": "src/Data-Array-BitArray-IO.html#fill",
          "type": "function"
        },
        "index": {
          "description": "Fill an array with uniform value",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "fill",
          "normalized": "IOBitArray a-\u003eBool-\u003eIO()",
          "package": "bitwise",
          "signature": "IOBitArray i-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise reduction with an associative commutative boolean operator.\n   Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and folds large chunks\n   at a time.  Each bit is used as a source exactly once.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "fold",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool -\u003e Bool)-\u003e IOBitArray i-\u003e IO (Maybe Bool)",
          "type": "function"
        },
        "index": {
          "description": "Bitwise reduction with an associative commutative boolean operator Implementation lifts from Bool to Bits and folds large chunks at time Each bit is used as source exactly once",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "fold",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eIOBitArray a-\u003eIO(Maybe Bool)",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eIOBitArray i-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnapshot the array into an immutable form.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "freeze",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO (BitArray i)",
          "source": "src/Data-Array-BitArray-Internal.html#freeze",
          "type": "function"
        },
        "index": {
          "description": "Snapshot the array into an immutable form",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "freeze",
          "normalized": "IOBitArray a-\u003eIO(BitArray a)",
          "package": "bitwise",
          "signature": "IOBitArray i-\u003eIO(BitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all (index, element) pairs.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "getAssocs",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO [(i, Bool)]",
          "source": "src/Data-Array-BitArray-IO.html#getAssocs",
          "type": "function"
        },
        "index": {
          "description": "Get list of all index element pairs",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "getAssocs",
          "normalized": "IOBitArray a-\u003eIO[(a,Bool)]",
          "package": "bitwise",
          "partial": "Assocs",
          "signature": "IOBitArray i-\u003eIO[(i,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:getAssocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the bounds of a bit array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "getBounds",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO (i, i)",
          "source": "src/Data-Array-BitArray-Internal.html#getBounds",
          "type": "function"
        },
        "index": {
          "description": "Get the bounds of bit array",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "getBounds",
          "normalized": "IOBitArray a-\u003eIO(a,a)",
          "package": "bitwise",
          "partial": "Bounds",
          "signature": "IOBitArray i-\u003eIO(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:getBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all elements of an array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "getElems",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO [Bool]",
          "source": "src/Data-Array-BitArray-IO.html#getElems",
          "type": "function"
        },
        "index": {
          "description": "Get list of all elements of an array",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "getElems",
          "normalized": "IOBitArray a-\u003eIO[Bool]",
          "package": "bitwise",
          "partial": "Elems",
          "signature": "IOBitArray i-\u003eIO[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:getElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit bitwise reduction: \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when any bits differ,\n   \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e when all bits are the same.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "isUniform",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO (Maybe Bool)",
          "source": "src/Data-Array-BitArray-IO.html#isUniform",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit bitwise reduction Nothing when any bits differ Just when all bits are the same",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "isUniform",
          "normalized": "IOBitArray a-\u003eIO(Maybe Bool)",
          "package": "bitwise",
          "partial": "Uniform",
          "signature": "IOBitArray i-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:isUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise map.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and maps\n   large chunks at a time.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "map",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool) -\u003e IOBitArray i -\u003e IO (IOBitArray i)",
          "source": "src/Data-Array-BitArray-IO.html#map",
          "type": "function"
        },
        "index": {
          "description": "Bitwise map Implementation lifts from Bool to Bits and maps large chunks at time",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "map",
          "normalized": "(Bool-\u003eBool)-\u003eIOBitArray a-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool)-\u003eIOBitArray i-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "mapArray",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool) -\u003e IOBitArray i -\u003e IO (IOBitArray i)",
          "source": "src/Data-Array-BitArray-IO.html#mapArray",
          "type": "function"
        },
        "index": {
          "description": "Alias for map",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "mapArray",
          "normalized": "(Bool-\u003eBool)-\u003eIOBitArray a-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "partial": "Array",
          "signature": "(Bool-\u003eBool)-\u003eIOBitArray i-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:mapArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array by reading from another.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "mapIndices",
          "package": "bitwise",
          "signature": "(i, i)-\u003e (i -\u003e j)-\u003e IOBitArray j-\u003e IO (IOBitArray i)",
          "type": "function"
        },
        "index": {
          "description": "Create new array by reading from another",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "mapIndices",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003eIOBitArray b-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "partial": "Indices",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003eIOBitArray j-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:mapIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array filled with an initial value.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "newArray",
          "package": "bitwise",
          "signature": "(i, i)-\u003e Bool-\u003e IO (IOBitArray i)",
          "type": "function"
        },
        "index": {
          "description": "Create new array filled with an initial value",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "newArray",
          "normalized": "(a,a)-\u003eBool-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "partial": "Array",
          "signature": "(i,i)-\u003eBool-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array filled with unspecified initial values.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "newArray_",
          "package": "bitwise",
          "signature": "(i, i)-\u003e IO (IOBitArray i)",
          "type": "function"
        },
        "index": {
          "description": "Create new array filled with unspecified initial values",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "newArray_",
          "normalized": "(a,a)-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "partial": "Array",
          "signature": "(i,i)-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:newArray_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array filled with values from a list.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "newListArray",
          "package": "bitwise",
          "signature": "(i, i)-\u003e [Bool]-\u003e IO (IOBitArray i)",
          "type": "function"
        },
        "index": {
          "description": "Create new array filled with values from list",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "newListArray",
          "normalized": "(a,a)-\u003e[Bool]-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "partial": "List Array",
          "signature": "(i,i)-\u003e[Bool]-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:newListArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit bitwise reduction: True when any bit is True.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "or",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO Bool",
          "source": "src/Data-Array-BitArray-IO.html#or",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit bitwise reduction True when any bit is True",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "or",
          "normalized": "IOBitArray a-\u003eIO Bool",
          "package": "bitwise",
          "signature": "IOBitArray i-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from an array at an index.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "readArray",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e i -\u003e IO Bool",
          "source": "src/Data-Array-BitArray-IO.html#readArray",
          "type": "function"
        },
        "index": {
          "description": "Read from an array at an index",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "readArray",
          "normalized": "IOBitArray a-\u003ea-\u003eIO Bool",
          "package": "bitwise",
          "partial": "Array",
          "signature": "IOBitArray i-\u003ei-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:readArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array from immutable form.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "thaw",
          "package": "bitwise",
          "signature": "BitArray i -\u003e IO (IOBitArray i)",
          "source": "src/Data-Array-BitArray-Internal.html#thaw",
          "type": "function"
        },
        "index": {
          "description": "Convert an array from immutable form",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "thaw",
          "normalized": "BitArray a-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "signature": "BitArray i-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnapshot the array into an immutable form.  Unsafe when the source\n   array can be modified later.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "unsafeFreeze",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO (BitArray i)",
          "source": "src/Data-Array-BitArray-Internal.html#unsafeFreeze",
          "type": "function"
        },
        "index": {
          "description": "Snapshot the array into an immutable form Unsafe when the source array can be modified later",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "unsafeFreeze",
          "normalized": "IOBitArray a-\u003eIO(BitArray a)",
          "package": "bitwise",
          "partial": "Freeze",
          "signature": "IOBitArray i-\u003eIO(BitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all elements of an array.  Unsafe when the source\n   array can be modified later.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "unsafeGetElems",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e IO [Bool]",
          "source": "src/Data-Array-BitArray-IO.html#unsafeGetElems",
          "type": "function"
        },
        "index": {
          "description": "Get list of all elements of an array Unsafe when the source array can be modified later",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "unsafeGetElems",
          "normalized": "IOBitArray a-\u003eIO[Bool]",
          "package": "bitwise",
          "partial": "Get Elems",
          "signature": "IOBitArray i-\u003eIO[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:unsafeGetElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from an array at an index without bounds checking.  Unsafe.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "unsafeReadArray",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e i -\u003e IO Bool",
          "source": "src/Data-Array-BitArray-IO.html#unsafeReadArray",
          "type": "function"
        },
        "index": {
          "description": "Read from an array at an index without bounds checking Unsafe",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "unsafeReadArray",
          "normalized": "IOBitArray a-\u003ea-\u003eIO Bool",
          "package": "bitwise",
          "partial": "Read Array",
          "signature": "IOBitArray i-\u003ei-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:unsafeReadArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array from immutable form.  Unsafe to modify the result\n   unless the source array is never used later.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "unsafeThaw",
          "package": "bitwise",
          "signature": "BitArray i -\u003e IO (IOBitArray i)",
          "source": "src/Data-Array-BitArray-Internal.html#unsafeThaw",
          "type": "function"
        },
        "index": {
          "description": "Convert an array from immutable form Unsafe to modify the result unless the source array is never used later",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "unsafeThaw",
          "normalized": "BitArray a-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "partial": "Thaw",
          "signature": "BitArray i-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:unsafeThaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to an array at an index.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "writeArray",
          "package": "bitwise",
          "signature": "IOBitArray i -\u003e i -\u003e Bool -\u003e IO ()",
          "source": "src/Data-Array-BitArray-IO.html#writeArray",
          "type": "function"
        },
        "index": {
          "description": "Write to an array at an index",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "writeArray",
          "normalized": "IOBitArray a-\u003ea-\u003eBool-\u003eIO()",
          "package": "bitwise",
          "partial": "Array",
          "signature": "IOBitArray i-\u003ei-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:writeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise zipWith.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and\n   combines large chunks at a time.\n\u003c/p\u003e\u003cp\u003eThe bounds of the source arrays must be identical.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.IO",
          "name": "zipWith",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e IOBitArray i -\u003e IOBitArray i -\u003e IO (IOBitArray i)",
          "source": "src/Data-Array-BitArray-IO.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Bitwise zipWith Implementation lifts from Bool to Bits and combines large chunks at time The bounds of the source arrays must be identical",
          "hierarchy": "Data Array BitArray IO",
          "module": "Data.Array.BitArray.IO",
          "name": "zipWith",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eIOBitArray a-\u003eIOBitArray a-\u003eIO(IOBitArray a)",
          "package": "bitwise",
          "partial": "With",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eIOBitArray i-\u003eIOBitArray i-\u003eIO(IOBitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnboxed mutable bit arrays in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "ST",
          "package": "bitwise",
          "source": "src/Data-Array-BitArray-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Unboxed mutable bit arrays in the ST monad",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "ST",
          "package": "bitwise",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of mutable bit arrays.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "STBitArray",
          "package": "bitwise",
          "source": "src/Data-Array-BitArray-ST.html#STBitArray",
          "type": "data"
        },
        "index": {
          "description": "The type of mutable bit arrays",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "STBitArray",
          "package": "bitwise",
          "partial": "STBit Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#t:STBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit bitwise reduction: False when any bit is False.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "and",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s Bool",
          "source": "src/Data-Array-BitArray-ST.html#and",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit bitwise reduction False when any bit is False",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "and",
          "normalized": "STBitArray a b-\u003eST a Bool",
          "package": "bitwise",
          "signature": "STBitArray s i-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy an array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "copy",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s (STBitArray s i)",
          "source": "src/Data-Array-BitArray-ST.html#copy",
          "type": "function"
        },
        "index": {
          "description": "Copy an array",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "copy",
          "normalized": "STBitArray a b-\u003eST a(STBitArray a b)",
          "package": "bitwise",
          "signature": "STBitArray s i-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill an array with a uniform value.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "fill",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e Bool -\u003e ST s ()",
          "source": "src/Data-Array-BitArray-ST.html#fill",
          "type": "function"
        },
        "index": {
          "description": "Fill an array with uniform value",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "fill",
          "normalized": "STBitArray a b-\u003eBool-\u003eST a()",
          "package": "bitwise",
          "signature": "STBitArray s i-\u003eBool-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise reduction with an associative commutative boolean operator.\n   Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and folds large chunks\n   at a time.  Each bit is used as a source exactly once.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "fold",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool -\u003e Bool)-\u003e STBitArray s i-\u003e ST s (Maybe Bool)",
          "type": "function"
        },
        "index": {
          "description": "Bitwise reduction with an associative commutative boolean operator Implementation lifts from Bool to Bits and folds large chunks at time Each bit is used as source exactly once",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "fold",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eSTBitArray a b-\u003eST a(Maybe Bool)",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eSTBitArray s i-\u003eST s(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnapshot the array into an immutable form.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "freeze",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s (BitArray i)",
          "source": "src/Data-Array-BitArray-ST.html#freeze",
          "type": "function"
        },
        "index": {
          "description": "Snapshot the array into an immutable form",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "freeze",
          "normalized": "STBitArray a b-\u003eST a(BitArray b)",
          "package": "bitwise",
          "signature": "STBitArray s i-\u003eST s(BitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all (index, element) pairs.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "getAssocs",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s [(i, Bool)]",
          "source": "src/Data-Array-BitArray-ST.html#getAssocs",
          "type": "function"
        },
        "index": {
          "description": "Get list of all index element pairs",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "getAssocs",
          "normalized": "STBitArray a b-\u003eST a[(b,Bool)]",
          "package": "bitwise",
          "partial": "Assocs",
          "signature": "STBitArray s i-\u003eST s[(i,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:getAssocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the bounds of a bit array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "getBounds",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s (i, i)",
          "source": "src/Data-Array-BitArray-ST.html#getBounds",
          "type": "function"
        },
        "index": {
          "description": "Get the bounds of bit array",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "getBounds",
          "normalized": "STBitArray a b-\u003eST a(b,b)",
          "package": "bitwise",
          "partial": "Bounds",
          "signature": "STBitArray s i-\u003eST s(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:getBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all elements of an array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "getElems",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s [Bool]",
          "source": "src/Data-Array-BitArray-ST.html#getElems",
          "type": "function"
        },
        "index": {
          "description": "Get list of all elements of an array",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "getElems",
          "normalized": "STBitArray a b-\u003eST a[Bool]",
          "package": "bitwise",
          "partial": "Elems",
          "signature": "STBitArray s i-\u003eST s[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:getElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit bitwise reduction: \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when any bits differ,\n   \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e when all bits are the same.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "isUniform",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s (Maybe Bool)",
          "source": "src/Data-Array-BitArray-ST.html#isUniform",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit bitwise reduction Nothing when any bits differ Just when all bits are the same",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "isUniform",
          "normalized": "STBitArray a b-\u003eST a(Maybe Bool)",
          "package": "bitwise",
          "partial": "Uniform",
          "signature": "STBitArray s i-\u003eST s(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:isUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise map.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and maps\n   large chunks at a time.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "map",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool) -\u003e STBitArray s i -\u003e ST s (STBitArray s i)",
          "source": "src/Data-Array-BitArray-ST.html#map",
          "type": "function"
        },
        "index": {
          "description": "Bitwise map Implementation lifts from Bool to Bits and maps large chunks at time",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "map",
          "normalized": "(Bool-\u003eBool)-\u003eSTBitArray a b-\u003eST a(STBitArray a b)",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool)-\u003eSTBitArray s i-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "mapArray",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool) -\u003e STBitArray s i -\u003e ST s (STBitArray s i)",
          "source": "src/Data-Array-BitArray-ST.html#mapArray",
          "type": "function"
        },
        "index": {
          "description": "Alias for map",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "mapArray",
          "normalized": "(Bool-\u003eBool)-\u003eSTBitArray a b-\u003eST a(STBitArray a b)",
          "package": "bitwise",
          "partial": "Array",
          "signature": "(Bool-\u003eBool)-\u003eSTBitArray s i-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:mapArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array by reading from another.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "mapIndices",
          "package": "bitwise",
          "signature": "(i, i)-\u003e (i -\u003e j)-\u003e STBitArray s j-\u003e ST s (STBitArray s i)",
          "type": "function"
        },
        "index": {
          "description": "Create new array by reading from another",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "mapIndices",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003eSTBitArray c b-\u003eST c(STBitArray c a)",
          "package": "bitwise",
          "partial": "Indices",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003eSTBitArray s j-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:mapIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array filled with an initial value.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "newArray",
          "package": "bitwise",
          "signature": "(i, i)-\u003e Bool-\u003e ST s (STBitArray s i)",
          "type": "function"
        },
        "index": {
          "description": "Create new array filled with an initial value",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "newArray",
          "normalized": "(a,a)-\u003eBool-\u003eST b(STBitArray b a)",
          "package": "bitwise",
          "partial": "Array",
          "signature": "(i,i)-\u003eBool-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array filled with a default initial value (\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "newArray_",
          "package": "bitwise",
          "signature": "(i, i)-\u003e ST s (STBitArray s i)",
          "type": "function"
        },
        "index": {
          "description": "Create new array filled with default initial value False",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "newArray_",
          "normalized": "(a,a)-\u003eST b(STBitArray b a)",
          "package": "bitwise",
          "partial": "Array",
          "signature": "(i,i)-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:newArray_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array filled with values from a list.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "newListArray",
          "package": "bitwise",
          "signature": "(i, i)-\u003e [Bool]-\u003e ST s (STBitArray s i)",
          "type": "function"
        },
        "index": {
          "description": "Create new array filled with values from list",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "newListArray",
          "normalized": "(a,a)-\u003e[Bool]-\u003eST b(STBitArray b a)",
          "package": "bitwise",
          "partial": "List Array",
          "signature": "(i,i)-\u003e[Bool]-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:newListArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit bitwise reduction: True when any bit is True.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "or",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s Bool",
          "source": "src/Data-Array-BitArray-ST.html#or",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit bitwise reduction True when any bit is True",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "or",
          "normalized": "STBitArray a b-\u003eST a Bool",
          "package": "bitwise",
          "signature": "STBitArray s i-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from an array at an index.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "readArray",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e i -\u003e ST s Bool",
          "source": "src/Data-Array-BitArray-ST.html#readArray",
          "type": "function"
        },
        "index": {
          "description": "Read from an array at an index",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "readArray",
          "normalized": "STBitArray a b-\u003eb-\u003eST a Bool",
          "package": "bitwise",
          "partial": "Array",
          "signature": "STBitArray s i-\u003ei-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:readArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array from immutable form.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "thaw",
          "package": "bitwise",
          "signature": "BitArray i -\u003e ST s (STBitArray s i)",
          "source": "src/Data-Array-BitArray-ST.html#thaw",
          "type": "function"
        },
        "index": {
          "description": "Convert an array from immutable form",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "thaw",
          "normalized": "BitArray a-\u003eST b(STBitArray b a)",
          "package": "bitwise",
          "signature": "BitArray i-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnapshot the array into an immutable form.  Unsafe when the source\n   array can be modified later.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "unsafeFreeze",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s (BitArray i)",
          "source": "src/Data-Array-BitArray-ST.html#unsafeFreeze",
          "type": "function"
        },
        "index": {
          "description": "Snapshot the array into an immutable form Unsafe when the source array can be modified later",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "unsafeFreeze",
          "normalized": "STBitArray a b-\u003eST a(BitArray b)",
          "package": "bitwise",
          "partial": "Freeze",
          "signature": "STBitArray s i-\u003eST s(BitArray i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all elements of an array without copying.  Unsafe when\n   the source array can be modified later.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "unsafeGetElems",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e ST s [Bool]",
          "source": "src/Data-Array-BitArray-ST.html#unsafeGetElems",
          "type": "function"
        },
        "index": {
          "description": "Get list of all elements of an array without copying Unsafe when the source array can be modified later",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "unsafeGetElems",
          "normalized": "STBitArray a b-\u003eST a[Bool]",
          "package": "bitwise",
          "partial": "Get Elems",
          "signature": "STBitArray s i-\u003eST s[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:unsafeGetElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from an array at an index without bounds checking.  Unsafe.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "unsafeReadArray",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e i -\u003e ST s Bool",
          "source": "src/Data-Array-BitArray-ST.html#unsafeReadArray",
          "type": "function"
        },
        "index": {
          "description": "Read from an array at an index without bounds checking Unsafe",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "unsafeReadArray",
          "normalized": "STBitArray a b-\u003eb-\u003eST a Bool",
          "package": "bitwise",
          "partial": "Read Array",
          "signature": "STBitArray s i-\u003ei-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:unsafeReadArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array from immutable form.  Unsafe to modify the result\n   unless the source array is never used later.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "unsafeThaw",
          "package": "bitwise",
          "signature": "BitArray i -\u003e ST s (STBitArray s i)",
          "source": "src/Data-Array-BitArray-ST.html#unsafeThaw",
          "type": "function"
        },
        "index": {
          "description": "Convert an array from immutable form Unsafe to modify the result unless the source array is never used later",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "unsafeThaw",
          "normalized": "BitArray a-\u003eST b(STBitArray b a)",
          "package": "bitwise",
          "partial": "Thaw",
          "signature": "BitArray i-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:unsafeThaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to an array at an index.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "writeArray",
          "package": "bitwise",
          "signature": "STBitArray s i -\u003e i -\u003e Bool -\u003e ST s ()",
          "source": "src/Data-Array-BitArray-ST.html#writeArray",
          "type": "function"
        },
        "index": {
          "description": "Write to an array at an index",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "writeArray",
          "normalized": "STBitArray a b-\u003eb-\u003eBool-\u003eST a()",
          "package": "bitwise",
          "partial": "Array",
          "signature": "STBitArray s i-\u003ei-\u003eBool-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:writeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise zipWith.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and\n   combines large chunks at a time.\n\u003c/p\u003e\u003cp\u003eThe bounds of the source arrays must be identical.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray.ST",
          "name": "zipWith",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e STBitArray s i -\u003e STBitArray s i -\u003e ST s (STBitArray s i)",
          "source": "src/Data-Array-BitArray-ST.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Bitwise zipWith Implementation lifts from Bool to Bits and combines large chunks at time The bounds of the source arrays must be identical",
          "hierarchy": "Data Array BitArray ST",
          "module": "Data.Array.BitArray.ST",
          "name": "zipWith",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eSTBitArray a b-\u003eSTBitArray a b-\u003eST a(STBitArray a b)",
          "package": "bitwise",
          "partial": "With",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eSTBitArray s i-\u003eSTBitArray s i-\u003eST s(STBitArray s i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable unboxed packed bit arrays using bitwise operations to\nmanipulate large chunks at a time much more quickly than individually\nunpacking and repacking bits would allow.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.BitArray",
          "name": "BitArray",
          "package": "bitwise",
          "source": "src/Data-Array-BitArray.html",
          "type": "module"
        },
        "index": {
          "description": "Immutable unboxed packed bit arrays using bitwise operations to manipulate large chunks at time much more quickly than individually unpacking and repacking bits would allow",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "BitArray",
          "package": "bitwise",
          "partial": "Bit Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of immutable bit arrays.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "BitArray",
          "package": "bitwise",
          "source": "src/Data-Array-BitArray-Internal.html#BitArray",
          "type": "data"
        },
        "index": {
          "description": "The type of immutable bit arrays",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "BitArray",
          "package": "bitwise",
          "partial": "Bit Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#t:BitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBit array indexing.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "(!)",
          "package": "bitwise",
          "signature": "BitArray i -\u003e i -\u003e Bool",
          "source": "src/Data-Array-BitArray.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Bit array indexing",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "(!) !",
          "normalized": "BitArray a-\u003ea-\u003eBool",
          "package": "bitwise",
          "signature": "BitArray i-\u003ei-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBit array indexing without bounds checking.  Unsafe.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "(!!!)",
          "package": "bitwise",
          "signature": "BitArray i -\u003e i -\u003e Bool",
          "source": "src/Data-Array-BitArray.html#%21%21%21",
          "type": "function"
        },
        "index": {
          "description": "Bit array indexing without bounds checking Unsafe",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "(!!!) !!!",
          "normalized": "BitArray a-\u003ea-\u003eBool",
          "package": "bitwise",
          "signature": "BitArray i-\u003ei-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:-33--33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBounds checking combined with array indexing.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "(!?)",
          "package": "bitwise",
          "signature": "BitArray i -\u003e i -\u003e Maybe Bool",
          "source": "src/Data-Array-BitArray.html#%21%3F",
          "type": "function"
        },
        "index": {
          "description": "Bounds checking combined with array indexing",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "(!?) !?",
          "normalized": "BitArray a-\u003ea-\u003eMaybe Bool",
          "package": "bitwise",
          "signature": "BitArray i-\u003ei-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:-33--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new array with updated values at the supplied indices.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "(//)",
          "package": "bitwise",
          "signature": "BitArray i-\u003e [(i, Bool)]-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "new array with updated values at the supplied indices",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "(//) //",
          "normalized": "BitArray a-\u003e[(a,Bool)]-\u003eBitArray a",
          "package": "bitwise",
          "signature": "BitArray i-\u003e[(i,Bool)]-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate with an operation and a list of (index, operand).\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "accum",
          "package": "bitwise",
          "signature": "(Bool -\u003e a -\u003e Bool)-\u003e BitArray i-\u003e [(i, a)]-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "Accumulate with an operation and list of index operand",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "accum",
          "normalized": "(Bool-\u003ea-\u003eBool)-\u003eBitArray b-\u003e[(b,a)]-\u003eBitArray b",
          "package": "bitwise",
          "signature": "(Bool-\u003ea-\u003eBool)-\u003eBitArray i-\u003e[(i,a)]-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an array by accumulating a list of (index, operand) pairs\n   from a default seed with an operation.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "accumArray",
          "package": "bitwise",
          "signature": "(Bool -\u003e a -\u003e Bool)-\u003e Bool-\u003e (i, i)-\u003e [(i, a)]-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "Create an array by accumulating list of index operand pairs from default seed with an operation",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "accumArray",
          "normalized": "(Bool-\u003ea-\u003eBool)-\u003eBool-\u003e(b,b)-\u003e[(b,a)]-\u003eBitArray b",
          "package": "bitwise",
          "partial": "Array",
          "signature": "(Bool-\u003ea-\u003eBool)-\u003eBool-\u003e(i,i)-\u003e[(i,a)]-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:accumArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "amap",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool) -\u003e BitArray i -\u003e BitArray i",
          "source": "src/Data-Array-BitArray.html#amap",
          "type": "function"
        },
        "index": {
          "description": "Alias for map",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "amap",
          "normalized": "(Bool-\u003eBool)-\u003eBitArray a-\u003eBitArray a",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool)-\u003eBitArray i-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:amap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit bitwise reduction: False if any bit is False.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "and",
          "package": "bitwise",
          "signature": "BitArray i -\u003e Bool",
          "source": "src/Data-Array-BitArray.html#and",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit bitwise reduction False if any bit is False",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "and",
          "normalized": "BitArray a-\u003eBool",
          "package": "bitwise",
          "signature": "BitArray i-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an array from a list of (index, element) pairs.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "array",
          "package": "bitwise",
          "signature": "(i, i)-\u003e [(i, Bool)]-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "Create an array from list of index element pairs",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "array",
          "normalized": "(a,a)-\u003e[(a,Bool)]-\u003eBitArray a",
          "package": "bitwise",
          "signature": "(i,i)-\u003e[(i,Bool)]-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of the (index, element) pairs in this array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "assocs",
          "package": "bitwise",
          "signature": "BitArray i -\u003e [(i, Bool)]",
          "source": "src/Data-Array-BitArray.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "list of the index element pairs in this array",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "assocs",
          "normalized": "BitArray a-\u003e[(a,Bool)]",
          "package": "bitwise",
          "signature": "BitArray i-\u003e[(i,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds of an array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "bounds",
          "package": "bitwise",
          "signature": "BitArray i -\u003e (i, i)",
          "source": "src/Data-Array-BitArray.html#bounds",
          "type": "function"
        },
        "index": {
          "description": "The bounds of an array",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "bounds",
          "normalized": "BitArray a-\u003e(a,a)",
          "package": "bitwise",
          "signature": "BitArray i-\u003e(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of the elements in this array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "elems",
          "package": "bitwise",
          "signature": "BitArray i -\u003e [Bool]",
          "source": "src/Data-Array-BitArray.html#elems",
          "type": "function"
        },
        "index": {
          "description": "list of the elements in this array",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "elems",
          "normalized": "BitArray a-\u003e[Bool]",
          "package": "bitwise",
          "signature": "BitArray i-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA uniform array of \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "false",
          "package": "bitwise",
          "signature": "(i, i)-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "uniform array of False",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "false",
          "normalized": "(a,a)-\u003eBitArray a",
          "package": "bitwise",
          "signature": "(i,i)-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA uniform array of bits.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "fill",
          "package": "bitwise",
          "signature": "(i, i)-\u003e Bool-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "uniform array of bits",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "fill",
          "normalized": "(a,a)-\u003eBool-\u003eBitArray a",
          "package": "bitwise",
          "signature": "(i,i)-\u003eBool-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise reduction with an associative commutative boolean operator.\n   Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and folds large chunks\n   at a time.  Each bit is used as a source exactly once.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "fold",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e BitArray i -\u003e Maybe Bool",
          "source": "src/Data-Array-BitArray.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Bitwise reduction with an associative commutative boolean operator Implementation lifts from Bool to Bits and folds large chunks at time Each bit is used as source exactly once",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "fold",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eBitArray a-\u003eMaybe Bool",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eBitArray i-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of all the valid indices for this array.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "indices",
          "package": "bitwise",
          "signature": "BitArray i -\u003e [i]",
          "source": "src/Data-Array-BitArray.html#indices",
          "type": "function"
        },
        "index": {
          "description": "list of all the valid indices for this array",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "indices",
          "normalized": "BitArray a-\u003e[a]",
          "package": "bitwise",
          "signature": "BitArray i-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit bitwise reduction: Nothing if any bits differ.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "isUniform",
          "package": "bitwise",
          "signature": "BitArray i -\u003e Maybe Bool",
          "source": "src/Data-Array-BitArray.html#isUniform",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit bitwise reduction Nothing if any bits differ",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "isUniform",
          "normalized": "BitArray a-\u003eMaybe Bool",
          "package": "bitwise",
          "partial": "Uniform",
          "signature": "BitArray i-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:isUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array by mapping indices into a source array..\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "ixmap",
          "package": "bitwise",
          "signature": "(i, i)-\u003e (i -\u003e j)-\u003e BitArray j-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "Create new array by mapping indices into source array",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "ixmap",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003eBitArray b-\u003eBitArray a",
          "package": "bitwise",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003eBitArray j-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:ixmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an array from a list of elements.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "listArray",
          "package": "bitwise",
          "signature": "(i, i)-\u003e [Bool]-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "Create an array from list of elements",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "listArray",
          "normalized": "(a,a)-\u003e[Bool]-\u003eBitArray a",
          "package": "bitwise",
          "partial": "Array",
          "signature": "(i,i)-\u003e[Bool]-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:listArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise map.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and maps\n   large chunks at a time.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "map",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool) -\u003e BitArray i -\u003e BitArray i",
          "source": "src/Data-Array-BitArray.html#map",
          "type": "function"
        },
        "index": {
          "description": "Bitwise map Implementation lifts from Bool to Bits and maps large chunks at time",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "map",
          "normalized": "(Bool-\u003eBool)-\u003eBitArray a-\u003eBitArray a",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool)-\u003eBitArray i-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuit bitwise reduction: True if any bit is True.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "or",
          "package": "bitwise",
          "signature": "BitArray i -\u003e Bool",
          "source": "src/Data-Array-BitArray.html#or",
          "type": "function"
        },
        "index": {
          "description": "Short-circuit bitwise reduction True if any bit is True",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "or",
          "normalized": "BitArray a-\u003eBool",
          "package": "bitwise",
          "signature": "BitArray i-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA uniform array of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "true",
          "package": "bitwise",
          "signature": "(i, i)-\u003e BitArray i",
          "type": "function"
        },
        "index": {
          "description": "uniform array of True",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "true",
          "normalized": "(a,a)-\u003eBitArray a",
          "package": "bitwise",
          "signature": "(i,i)-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise zipWith.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and\n   combines large chunks at a time.\n\u003c/p\u003e\u003cp\u003eThe bounds of the source arrays must be identical.\n\u003c/p\u003e",
          "module": "Data.Array.BitArray",
          "name": "zipWith",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e BitArray i -\u003e BitArray i -\u003e BitArray i",
          "source": "src/Data-Array-BitArray.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Bitwise zipWith Implementation lifts from Bool to Bits and combines large chunks at time The bounds of the source arrays must be identical",
          "hierarchy": "Data Array BitArray",
          "module": "Data.Array.BitArray",
          "name": "zipWith",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eBitArray a-\u003eBitArray a-\u003eBitArray a",
          "package": "bitwise",
          "partial": "With",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eBitArray i-\u003eBitArray i-\u003eBitArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLifting boolean operations on \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to bitwise operations on \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePacking bits into words, and unpacking words into bits.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "Bitwise",
          "package": "bitwise",
          "source": "src/Data-Bits-Bitwise.html",
          "type": "module"
        },
        "index": {
          "description": "Lifting boolean operations on Bool to bitwise operations on Bits Packing bits into words and unpacking words into bits",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "Bitwise",
          "package": "bitwise",
          "partial": "Bitwise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when the predicate is true for all bits.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "all",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool)-\u003e b-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "True when the predicate is true for all bits",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "all",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003eBool",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool)-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when all bits are set.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "and",
          "package": "bitwise",
          "signature": "b -\u003e Bool",
          "source": "src/Data-Bits-Bitwise.html#and",
          "type": "function"
        },
        "index": {
          "description": "True when all bits are set",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "and",
          "normalized": "a-\u003eBool",
          "package": "bitwise",
          "signature": "b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when the predicate is true for any bit.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "any",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool)-\u003e b-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "True when the predicate is true for any bit",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "any",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003eBool",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool)-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe least significant bit.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "fromBool",
          "package": "bitwise",
          "signature": "Bool -\u003e b",
          "source": "src/Data-Bits-Bitwise.html#fromBool",
          "type": "function"
        },
        "index": {
          "description": "The least significant bit",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "fromBool",
          "normalized": "Bool-\u003ea",
          "package": "bitwise",
          "partial": "Bool",
          "signature": "Bool-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a big-endian list of bits to \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "fromListBE",
          "package": "bitwise",
          "signature": "[Bool]-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Convert big-endian list of bits to Bits",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "fromListBE",
          "normalized": "[Bool]-\u003ea",
          "package": "bitwise",
          "partial": "List BE",
          "signature": "[Bool]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:fromListBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a little-endian list of bits to \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "fromListLE",
          "package": "bitwise",
          "signature": "[Bool]-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Convert little-endian list of bits to Bits",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "fromListLE",
          "normalized": "[Bool]-\u003ea",
          "package": "bitwise",
          "partial": "List LE",
          "signature": "[Bool]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:fromListLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e is all 1s, all 0s, or neither.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "isUniform",
          "package": "bitwise",
          "signature": "b -\u003e Maybe Bool",
          "source": "src/Data-Bits-Bitwise.html#isUniform",
          "type": "function"
        },
        "index": {
          "description": "Determine if Bits is all all or neither",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "isUniform",
          "normalized": "a-\u003eMaybe Bool",
          "package": "bitwise",
          "partial": "Uniform",
          "signature": "b-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:isUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin lsb with msb to make a word.  Assumes lsb has no set bits\n   above the join point.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "joinAt",
          "package": "bitwise",
          "signature": "Int-\u003e b-\u003e b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Join lsb with msb to make word Assumes lsb has no set bits above the join point",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "joinAt",
          "normalized": "Int-\u003ea-\u003ea-\u003ea",
          "package": "bitwise",
          "partial": "At",
          "signature": "Int-\u003eb-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:joinAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a unary boolean operation to a bitwise operation.\n\u003c/p\u003e\u003cp\u003eThe implementation is by exhaustive input/output case analysis:\n   thus the operation provided must be total.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "map",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool)-\u003e b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Lift unary boolean operation to bitwise operation The implementation is by exhaustive input output case analysis thus the operation provided must be total",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "map",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitwise",
          "signature": "(Bool-\u003eBool)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mask with count least significant bits set.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "mask",
          "package": "bitwise",
          "signature": "Int-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "mask with count least significant bits set",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "mask",
          "normalized": "Int-\u003ea",
          "package": "bitwise",
          "signature": "Int-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when any bit is set.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "or",
          "package": "bitwise",
          "signature": "b -\u003e Bool",
          "source": "src/Data-Bits-Bitwise.html#or",
          "type": "function"
        },
        "index": {
          "description": "True when any bit is set",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "or",
          "normalized": "a-\u003eBool",
          "package": "bitwise",
          "signature": "b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack bits into a byte in big-endian order.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "packWord8BE",
          "package": "bitwise",
          "signature": "Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Word8",
          "type": "function"
        },
        "index": {
          "description": "Pack bits into byte in big-endian order",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "packWord8BE",
          "normalized": "Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eWord",
          "package": "bitwise",
          "partial": "Word BE",
          "signature": "Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:packWord8BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack bits into a byte in little-endian order.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "packWord8LE",
          "package": "bitwise",
          "signature": "Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Word8",
          "type": "function"
        },
        "index": {
          "description": "Pack bits into byte in little-endian order",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "packWord8LE",
          "normalized": "Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eWord",
          "package": "bitwise",
          "partial": "Word LE",
          "signature": "Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:packWord8LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a boolean constant to a bitwise constant.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "repeat",
          "package": "bitwise",
          "signature": "Bool -\u003e b",
          "source": "src/Data-Bits-Bitwise.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "Lift boolean constant to bitwise constant",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "repeat",
          "normalized": "Bool-\u003ea",
          "package": "bitwise",
          "signature": "Bool-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a word into (lsb, msb).  Ensures lsb has no set bits\n   above the split point.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "splitAt",
          "package": "bitwise",
          "signature": "Int-\u003e b-\u003e (b, b)",
          "type": "function"
        },
        "index": {
          "description": "Split word into lsb msb Ensures lsb has no set bits above the split point",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "splitAt",
          "normalized": "Int-\u003ea-\u003e(a,a)",
          "package": "bitwise",
          "partial": "At",
          "signature": "Int-\u003eb-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e (with a defined \u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e) to a list of bits, in\n   big-endian order.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "toListBE",
          "package": "bitwise",
          "signature": "b-\u003e [Bool]",
          "type": "function"
        },
        "index": {
          "description": "Convert Bits with defined bitSize to list of bits in big-endian order",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "toListBE",
          "normalized": "a-\u003e[Bool]",
          "package": "bitwise",
          "partial": "List BE",
          "signature": "b-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:toListBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e (with a defined \u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e) to a list of bits, in\n   little-endian order.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "toListLE",
          "package": "bitwise",
          "signature": "b-\u003e [Bool]",
          "type": "function"
        },
        "index": {
          "description": "Convert Bits with defined bitSize to list of bits in little-endian order",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "toListLE",
          "normalized": "a-\u003e[Bool]",
          "package": "bitwise",
          "partial": "List LE",
          "signature": "b-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:toListLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the bits from a byte in big-endian order.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "unpackWord8BE",
          "package": "bitwise",
          "signature": "Word8-\u003e (Bool, Bool, Bool, Bool, Bool, Bool, Bool, Bool)",
          "type": "function"
        },
        "index": {
          "description": "Extract the bits from byte in big-endian order",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "unpackWord8BE",
          "normalized": "Word-\u003e(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)",
          "package": "bitwise",
          "partial": "Word BE",
          "signature": "Word-\u003e(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:unpackWord8BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the bits from a byte in little-endian order.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "unpackWord8LE",
          "package": "bitwise",
          "signature": "Word8-\u003e (Bool, Bool, Bool, Bool, Bool, Bool, Bool, Bool)",
          "type": "function"
        },
        "index": {
          "description": "Extract the bits from byte in little-endian order",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "unpackWord8LE",
          "normalized": "Word-\u003e(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)",
          "package": "bitwise",
          "partial": "Word LE",
          "signature": "Word-\u003e(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:unpackWord8LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a binary boolean operation to a bitwise operation.\n\u003c/p\u003e\u003cp\u003eThe implementation is by exhaustive input/output case analysis:\n   thus the operation provided must be total.\n\u003c/p\u003e",
          "module": "Data.Bits.Bitwise",
          "name": "zipWith",
          "package": "bitwise",
          "signature": "(Bool -\u003e Bool -\u003e Bool)-\u003e b-\u003e b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Lift binary boolean operation to bitwise operation The implementation is by exhaustive input output case analysis thus the operation provided must be total",
          "hierarchy": "Data Bits Bitwise",
          "module": "Data.Bits.Bitwise",
          "name": "zipWith",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003ea-\u003ea-\u003ea",
          "package": "bitwise",
          "partial": "With",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eb-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:zipWith"
      }
    }
  ]
]