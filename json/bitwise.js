[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncode and decode both versions (binary P4 and plain P1) of PBM: the\nportable bitmap lowest common denominator monochrome image file format.\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e pbm(5)\n\u003c/li\u003e\u003cli\u003e The PBM Format \u003ca\u003ehttp://netpbm.sourceforge.net/doc/pbm.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBugs:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This implementation is not fully compliant with the PBM specification,\n    with respect to point 8 in the second reference above which states that\n    \u003cem\u003ea comment can actually be in the middle of what you might consider a token\u003c/em\u003e\n    Such a pathological PBM file might be rejected by \u003ccode\u003e\u003ca\u003edecodePBM\u003c/a\u003e\u003c/code\u003e, but\n    may instead be wrongly decoded if (for example) the comment were in\n    the middle of the image width token, leading to it being interpreted\n    as a (smaller) width and height.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "module",
        "fct-source": "src/Codec-Image-PBM.html",
        "fct-type": "module",
        "title": "PBM"
      },
      "index": {
        "description": "Encode and decode both versions binary P4 and plain P1 of PBM the portable bitmap lowest common denominator monochrome image file format References pbm The PBM Format http netpbm.sourceforge.net doc pbm.html Bugs This implementation is not fully compliant with the PBM specification with respect to point in the second reference above which states that comment can actually be in the middle of what you might consider token Such pathological PBM file might be rejected by decodePBM but may instead be wrongly decoded if for example the comment were in the middle of the image width token leading to it being interpreted as smaller width and height",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "PBM",
        "normalized": "",
        "package": "bitwise",
        "partial": "PBM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#t:DecodeError",
      "description": {
        "fct-descr": "\u003cp\u003ePossible reasons for decoding to fail, with the input that failed.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "data",
        "fct-source": "src/Codec-Image-PBM.html#DecodeError",
        "fct-type": "data",
        "title": "DecodeError"
      },
      "index": {
        "description": "Possible reasons for decoding to fail with the input that failed",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "DecodeError",
        "normalized": "",
        "package": "bitwise",
        "partial": "Decode Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#t:EncodeError",
      "description": {
        "fct-descr": "\u003cp\u003ePossible reasons for encoding to fail.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "data",
        "fct-source": "src/Codec-Image-PBM.html#EncodeError",
        "fct-type": "data",
        "title": "EncodeError"
      },
      "index": {
        "description": "Possible reasons for encoding to fail",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "EncodeError",
        "normalized": "",
        "package": "bitwise",
        "partial": "Encode Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#t:PBM",
      "description": {
        "fct-descr": "\u003cp\u003eA decoded PBM image.  \u003ccode\u003e\u003ca\u003epbmWidth\u003c/a\u003e\u003c/code\u003e must be less or equal to the\n   width of the \u003ccode\u003e\u003ca\u003epbmPixels\u003c/a\u003e\u003c/code\u003e array (which has its first index in Y\n   and the second in X, with lowest coordinates at the top left).\n\u003c/p\u003e\u003cp\u003eFalse pixels are white, True pixels are black.  Pixels to the\n   right of \u003ccode\u003e\u003ca\u003epbmWidth\u003c/a\u003e\u003c/code\u003e are don't care padding bits.  However, these\n   padding bits are likely to invalidate aggregrate \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e\n   operations.  See \u003ccode\u003e\u003ca\u003etrimPBM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "data",
        "fct-source": "src/Codec-Image-PBM.html#PBM",
        "fct-type": "data",
        "title": "PBM"
      },
      "index": {
        "description": "decoded PBM image pbmWidth must be less or equal to the width of the pbmPixels array which has its first index in and the second in with lowest coordinates at the top left False pixels are white True pixels are black Pixels to the right of pbmWidth are don care padding bits However these padding bits are likely to invalidate aggregrate fold operations See trimPBM",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "PBM",
        "normalized": "",
        "package": "bitwise",
        "partial": "PBM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadHeight",
      "description": {
        "fct-descr": "\u003cp\u003eThe height could not be parsed, or was non-positive.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BadHeight a",
        "fct-source": "src/Codec-Image-PBM.html#DecodeError",
        "fct-type": "function",
        "title": "BadHeight"
      },
      "index": {
        "description": "The height could not be parsed or was non-positive",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "BadHeight",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bad Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadLargeWidth",
      "description": {
        "fct-descr": "\u003cp\u003eimage width is larger than array width\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BadLargeWidth",
        "fct-source": "src/Codec-Image-PBM.html#EncodeError",
        "fct-type": "function",
        "title": "BadLargeWidth"
      },
      "index": {
        "description": "image width is larger than array width",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "BadLargeWidth",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bad Large Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadMagicN",
      "description": {
        "fct-descr": "\u003cp\u003eSecond character was not 4 (binary) or 1 (plain).\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BadMagicN a",
        "fct-source": "src/Codec-Image-PBM.html#DecodeError",
        "fct-type": "function",
        "title": "BadMagicN"
      },
      "index": {
        "description": "Second character was not binary or plain",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "BadMagicN",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bad Magic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadMagicP",
      "description": {
        "fct-descr": "\u003cp\u003eFirst character was not P.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BadMagicP a",
        "fct-source": "src/Codec-Image-PBM.html#DecodeError",
        "fct-type": "function",
        "title": "BadMagicP"
      },
      "index": {
        "description": "First character was not",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "BadMagicP",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bad Magic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadPixelWidth",
      "description": {
        "fct-descr": "\u003cp\u003earray width is not a multiple of 8 bits\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BadPixelWidth",
        "fct-source": "src/Codec-Image-PBM.html#EncodeError",
        "fct-type": "function",
        "title": "BadPixelWidth"
      },
      "index": {
        "description": "array width is not multiple of bits",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "BadPixelWidth",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bad Pixel Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadPixels",
      "description": {
        "fct-descr": "\u003cp\u003eThere weren't enough bytes of pixel data.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BadPixels a",
        "fct-source": "src/Codec-Image-PBM.html#DecodeError",
        "fct-type": "function",
        "title": "BadPixels"
      },
      "index": {
        "description": "There weren enough bytes of pixel data",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "BadPixels",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bad Pixels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadSmallWidth",
      "description": {
        "fct-descr": "\u003cp\u003eimage width is too smaller than array width\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BadSmallWidth",
        "fct-source": "src/Codec-Image-PBM.html#EncodeError",
        "fct-type": "function",
        "title": "BadSmallWidth"
      },
      "index": {
        "description": "image width is too smaller than array width",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "BadSmallWidth",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bad Small Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadSpace",
      "description": {
        "fct-descr": "\u003cp\u003eParsing failed at the space before the pixel data.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BadSpace a",
        "fct-source": "src/Codec-Image-PBM.html#DecodeError",
        "fct-type": "function",
        "title": "BadSpace"
      },
      "index": {
        "description": "Parsing failed at the space before the pixel data",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "BadSpace",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bad Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:BadWidth",
      "description": {
        "fct-descr": "\u003cp\u003eThe width could not be parsed, or was non-positive.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BadWidth a",
        "fct-source": "src/Codec-Image-PBM.html#DecodeError",
        "fct-type": "function",
        "title": "BadWidth"
      },
      "index": {
        "description": "The width could not be parsed or was non-positive",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "BadWidth",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bad Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:PBM",
      "description": {
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "PBM",
        "fct-source": "src/Codec-Image-PBM.html#PBM",
        "fct-type": "function",
        "title": "PBM"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "PBM",
        "normalized": "",
        "package": "bitwise",
        "partial": "PBM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:decodePBM",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a binary PBM (P4) image.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "ByteString -\u003e Either (DecodeError ByteString) (PBM, ByteString)",
        "fct-source": "src/Codec-Image-PBM.html#decodePBM",
        "fct-type": "function",
        "title": "decodePBM"
      },
      "index": {
        "description": "Decode binary PBM P4 image",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "decodePBM",
        "normalized": "ByteString-\u003eEither(DecodeError ByteString)(PBM,ByteString)",
        "package": "bitwise",
        "partial": "PBM",
        "signature": "ByteString-\u003eEither(DecodeError ByteString)(PBM,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:decodePBMs",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a sequence of binary PBM (P4) images.\n\u003c/p\u003e\u003cp\u003eKeeps decoding until end of input (in which case the \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e of the\n   result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) or an error occurred.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "ByteString -\u003e ([PBM], Maybe (DecodeError ByteString))",
        "fct-source": "src/Codec-Image-PBM.html#decodePBMs",
        "fct-type": "function",
        "title": "decodePBMs"
      },
      "index": {
        "description": "Decode sequence of binary PBM P4 images Keeps decoding until end of input in which case the snd of the result is Nothing or an error occurred",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "decodePBMs",
        "normalized": "ByteString-\u003e([PBM],Maybe(DecodeError ByteString))",
        "package": "bitwise",
        "partial": "PBMs",
        "signature": "ByteString-\u003e([PBM],Maybe(DecodeError ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:decodePlainPBM",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a plain PBM (P1) image.\n\u003c/p\u003e\u003cp\u003eNote that the pixel array size is kept as-is (with the width not\n   necessarily a multiple of 8 bits).\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "String -\u003e Either (DecodeError String) (PBM, String)",
        "fct-source": "src/Codec-Image-PBM.html#decodePlainPBM",
        "fct-type": "function",
        "title": "decodePlainPBM"
      },
      "index": {
        "description": "Decode plain PBM P1 image Note that the pixel array size is kept as-is with the width not necessarily multiple of bits",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "decodePlainPBM",
        "normalized": "String-\u003eEither(DecodeError String)(PBM,String)",
        "package": "bitwise",
        "partial": "Plain PBM",
        "signature": "String-\u003eEither(DecodeError String)(PBM,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:encErrPBM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "PBM",
        "fct-source": "src/Codec-Image-PBM.html#EncodeError",
        "fct-type": "function",
        "title": "encErrPBM"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "encErrPBM",
        "normalized": "",
        "package": "bitwise",
        "partial": "Err PBM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:encodePBM",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a binary PBM (P4) image, padding rows to multiples of 8\n   bits as necessary.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BitArray (Int, Int)-\u003e ByteString",
        "fct-type": "function",
        "title": "encodePBM"
      },
      "index": {
        "description": "Encode binary PBM P4 image padding rows to multiples of bits as necessary",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "encodePBM",
        "normalized": "BitArray(Int,Int)-\u003eByteString",
        "package": "bitwise",
        "partial": "PBM",
        "signature": "BitArray(Int,Int)-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:encodePBM-39-",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a pre-padded \u003ccode\u003e\u003ca\u003ePBM\u003c/a\u003e\u003c/code\u003e to a binary PBM (P4) image.\n\u003c/p\u003e\u003cp\u003eThe pixels array must have a multiple of 8 bits per row.  The image\n   width may be less than the pixel array width, with up to 7 padding\n   bits at the end of each row.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "PBM -\u003e Either EncodeError ByteString",
        "fct-source": "src/Codec-Image-PBM.html#encodePBM%27",
        "fct-type": "function",
        "title": "encodePBM'"
      },
      "index": {
        "description": "Encode pre-padded PBM to binary PBM P4 image The pixels array must have multiple of bits per row The image width may be less than the pixel array width with up to padding bits at the end of each row",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "encodePBM'",
        "normalized": "PBM-\u003eEither EncodeError ByteString",
        "package": "bitwise",
        "partial": "PBM'",
        "signature": "PBM-\u003eEither EncodeError ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:encodePlainPBM",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a plain PBM (P1) image.\n\u003c/p\u003e\u003cp\u003eNo restrictions on pixels array size, but the file format is\n   exceedingly wasteful of space.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "BitArray (Int, Int)-\u003e String",
        "fct-type": "function",
        "title": "encodePlainPBM"
      },
      "index": {
        "description": "Encode plain PBM P1 image No restrictions on pixels array size but the file format is exceedingly wasteful of space",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "encodePlainPBM",
        "normalized": "BitArray(Int,Int)-\u003eString",
        "package": "bitwise",
        "partial": "Plain PBM",
        "signature": "BitArray(Int,Int)-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:padPBM",
      "description": {
        "fct-descr": "\u003cp\u003eAdd padding bits at the end of each row to make the array width a\n   multiple of 8 bits, required for binary PBM (P4) encoding.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "PBM -\u003e PBM",
        "fct-source": "src/Codec-Image-PBM.html#padPBM",
        "fct-type": "function",
        "title": "padPBM"
      },
      "index": {
        "description": "Add padding bits at the end of each row to make the array width multiple of bits required for binary PBM P4 encoding",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "padPBM",
        "normalized": "PBM-\u003ePBM",
        "package": "bitwise",
        "partial": "PBM",
        "signature": "PBM-\u003ePBM"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:pbmPixels",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "!(BitArray (Int, Int))",
        "fct-source": "src/Codec-Image-PBM.html#PBM",
        "fct-type": "function",
        "title": "pbmPixels"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "pbmPixels",
        "normalized": "(BitArray(Int,Int))",
        "package": "bitwise",
        "partial": "Pixels",
        "signature": "(BitArray(Int,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:pbmWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Image-PBM.html#PBM",
        "fct-type": "function",
        "title": "pbmWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "pbmWidth",
        "normalized": "",
        "package": "bitwise",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:repadPBM",
      "description": {
        "fct-descr": "\u003cp\u003eTrim then pad.  The resulting \u003ccode\u003e\u003ca\u003ePBM\u003c/a\u003e\u003c/code\u003e (if any) is suitable for\n   encoding to binary PBM (P4), moreover its padding bits will\n   be cleared.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "PBM -\u003e Maybe PBM",
        "fct-source": "src/Codec-Image-PBM.html#repadPBM",
        "fct-type": "function",
        "title": "repadPBM"
      },
      "index": {
        "description": "Trim then pad The resulting PBM if any is suitable for encoding to binary PBM P4 moreover its padding bits will be cleared",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "repadPBM",
        "normalized": "PBM-\u003eMaybe PBM",
        "package": "bitwise",
        "partial": "PBM",
        "signature": "PBM-\u003eMaybe PBM"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Codec-Image-PBM.html#v:trimPBM",
      "description": {
        "fct-descr": "\u003cp\u003eTrim any padding bits, required for \u003ccode\u003efold\u003c/code\u003e operations to give\n   meaningful results.\n\u003c/p\u003e\u003cp\u003eFails for invalid \u003ccode\u003e\u003ca\u003ePBM\u003c/a\u003e\u003c/code\u003e with image width greater than array width.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.PBM",
        "fct-package": "bitwise",
        "fct-signature": "PBM -\u003e Maybe PBM",
        "fct-source": "src/Codec-Image-PBM.html#trimPBM",
        "fct-type": "function",
        "title": "trimPBM"
      },
      "index": {
        "description": "Trim any padding bits required for fold operations to give meaningful results Fails for invalid PBM with image width greater than array width",
        "hierarchy": "Codec Image PBM",
        "module": "Codec.Image.PBM",
        "name": "trimPBM",
        "normalized": "PBM-\u003eMaybe PBM",
        "package": "bitwise",
        "partial": "PBM",
        "signature": "PBM-\u003eMaybe PBM"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCopy bit array data to and from ByteStrings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.BitArray.ByteString",
        "fct-package": "bitwise",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-BitArray-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "Copy bit array data to and from ByteStrings",
        "hierarchy": "Data Array BitArray ByteString",
        "module": "Data.Array.BitArray.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "bitwise",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#v:fromByteString",
      "description": {
        "fct-descr": "\u003cp\u003eCopy from a ByteString.  Much like \u003ccode\u003elistArray\u003c/code\u003e but with packed bits.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ByteString",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e ByteString-\u003e BitArray i",
        "fct-type": "function",
        "title": "fromByteString"
      },
      "index": {
        "description": "Copy from ByteString Much like listArray but with packed bits",
        "hierarchy": "Data Array BitArray ByteString",
        "module": "Data.Array.BitArray.ByteString",
        "name": "fromByteString",
        "normalized": "(a,a)-\u003eByteString-\u003eBitArray a",
        "package": "bitwise",
        "partial": "Byte String",
        "signature": "(i,i)-\u003eByteString-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#v:fromByteStringIO",
      "description": {
        "fct-descr": "\u003cp\u003eCopy from a ByteString.  Much like \u003ccode\u003enewListArray\u003c/code\u003e but with packed bits.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ByteString",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e ByteString-\u003e IO (IOBitArray i)",
        "fct-type": "function",
        "title": "fromByteStringIO"
      },
      "index": {
        "description": "Copy from ByteString Much like newListArray but with packed bits",
        "hierarchy": "Data Array BitArray ByteString",
        "module": "Data.Array.BitArray.ByteString",
        "name": "fromByteStringIO",
        "normalized": "(a,a)-\u003eByteString-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "Byte String IO",
        "signature": "(i,i)-\u003eByteString-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#v:toByteString",
      "description": {
        "fct-descr": "\u003cp\u003eCopy to a ByteString.  The most significant bits of the last byte\n   are padded with 0 unless the array was a multiple of 8 bits in size.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ByteString",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e ByteString",
        "fct-source": "src/Data-Array-BitArray-ByteString.html#toByteString",
        "fct-type": "function",
        "title": "toByteString"
      },
      "index": {
        "description": "Copy to ByteString The most significant bits of the last byte are padded with unless the array was multiple of bits in size",
        "hierarchy": "Data Array BitArray ByteString",
        "module": "Data.Array.BitArray.ByteString",
        "name": "toByteString",
        "normalized": "BitArray a-\u003eByteString",
        "package": "bitwise",
        "partial": "Byte String",
        "signature": "BitArray i-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ByteString.html#v:toByteStringIO",
      "description": {
        "fct-descr": "\u003cp\u003eCopy to a ByteString.  The most significant bits of the last byte\n   are padded with 0 unless the array was a multiple of 8 bits in size.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ByteString",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO ByteString",
        "fct-source": "src/Data-Array-BitArray-ByteString.html#toByteStringIO",
        "fct-type": "function",
        "title": "toByteStringIO"
      },
      "index": {
        "description": "Copy to ByteString The most significant bits of the last byte are padded with unless the array was multiple of bits in size",
        "hierarchy": "Data Array BitArray ByteString",
        "module": "Data.Array.BitArray.ByteString",
        "name": "toByteStringIO",
        "normalized": "IOBitArray a-\u003eIO ByteString",
        "package": "bitwise",
        "partial": "Byte String IO",
        "signature": "IOBitArray i-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnboxed mutable bit arrays in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-BitArray-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Unboxed mutable bit arrays in the IO monad",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "IO",
        "normalized": "",
        "package": "bitwise",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#t:IOBitArray",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of mutable bit arrays in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-BitArray-Internal.html#IOBitArray",
        "fct-type": "data",
        "title": "IOBitArray"
      },
      "index": {
        "description": "The type of mutable bit arrays in the IO monad",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "IOBitArray",
        "normalized": "",
        "package": "bitwise",
        "partial": "IOBit Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit bitwise reduction: False when any bit is False.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO Bool",
        "fct-source": "src/Data-Array-BitArray-IO.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "Short-circuit bitwise reduction False when any bit is False",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "and",
        "normalized": "IOBitArray a-\u003eIO Bool",
        "package": "bitwise",
        "partial": "",
        "signature": "IOBitArray i-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eCopy an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO (IOBitArray i)",
        "fct-source": "src/Data-Array-BitArray-Internal.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Copy an array",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "copy",
        "normalized": "IOBitArray a-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "",
        "signature": "IOBitArray i-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eFill an array with a uniform value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Data-Array-BitArray-IO.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "Fill an array with uniform value",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "fill",
        "normalized": "IOBitArray a-\u003eBool-\u003eIO()",
        "package": "bitwise",
        "partial": "",
        "signature": "IOBitArray i-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise reduction with an associative commutative boolean operator.\n   Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and folds large chunks\n   at a time.  Each bit is used as a source exactly once.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool -\u003e Bool)-\u003e IOBitArray i-\u003e IO (Maybe Bool)",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Bitwise reduction with an associative commutative boolean operator Implementation lifts from Bool to Bits and folds large chunks at time Each bit is used as source exactly once",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "fold",
        "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eIOBitArray a-\u003eIO(Maybe Bool)",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool-\u003eBool)-\u003eIOBitArray i-\u003eIO(Maybe Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:freeze",
      "description": {
        "fct-descr": "\u003cp\u003eSnapshot the array into an immutable form.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO (BitArray i)",
        "fct-source": "src/Data-Array-BitArray-Internal.html#freeze",
        "fct-type": "function",
        "title": "freeze"
      },
      "index": {
        "description": "Snapshot the array into an immutable form",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "freeze",
        "normalized": "IOBitArray a-\u003eIO(BitArray a)",
        "package": "bitwise",
        "partial": "",
        "signature": "IOBitArray i-\u003eIO(BitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:getAssocs",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all (index, element) pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO [(i, Bool)]",
        "fct-source": "src/Data-Array-BitArray-IO.html#getAssocs",
        "fct-type": "function",
        "title": "getAssocs"
      },
      "index": {
        "description": "Get list of all index element pairs",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "getAssocs",
        "normalized": "IOBitArray a-\u003eIO[(a,Bool)]",
        "package": "bitwise",
        "partial": "Assocs",
        "signature": "IOBitArray i-\u003eIO[(i,Bool)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:getBounds",
      "description": {
        "fct-descr": "\u003cp\u003eGet the bounds of a bit array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO (i, i)",
        "fct-source": "src/Data-Array-BitArray-Internal.html#getBounds",
        "fct-type": "function",
        "title": "getBounds"
      },
      "index": {
        "description": "Get the bounds of bit array",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "getBounds",
        "normalized": "IOBitArray a-\u003eIO(a,a)",
        "package": "bitwise",
        "partial": "Bounds",
        "signature": "IOBitArray i-\u003eIO(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:getElems",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all elements of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO [Bool]",
        "fct-source": "src/Data-Array-BitArray-IO.html#getElems",
        "fct-type": "function",
        "title": "getElems"
      },
      "index": {
        "description": "Get list of all elements of an array",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "getElems",
        "normalized": "IOBitArray a-\u003eIO[Bool]",
        "package": "bitwise",
        "partial": "Elems",
        "signature": "IOBitArray i-\u003eIO[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:isUniform",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit bitwise reduction: \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when any bits differ,\n   \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e when all bits are the same.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO (Maybe Bool)",
        "fct-source": "src/Data-Array-BitArray-IO.html#isUniform",
        "fct-type": "function",
        "title": "isUniform"
      },
      "index": {
        "description": "Short-circuit bitwise reduction Nothing when any bits differ Just when all bits are the same",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "isUniform",
        "normalized": "IOBitArray a-\u003eIO(Maybe Bool)",
        "package": "bitwise",
        "partial": "Uniform",
        "signature": "IOBitArray i-\u003eIO(Maybe Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise map.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and maps\n   large chunks at a time.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool) -\u003e IOBitArray i -\u003e IO (IOBitArray i)",
        "fct-source": "src/Data-Array-BitArray-IO.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Bitwise map Implementation lifts from Bool to Bits and maps large chunks at time",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "map",
        "normalized": "(Bool-\u003eBool)-\u003eIOBitArray a-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool)-\u003eIOBitArray i-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:mapArray",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool) -\u003e IOBitArray i -\u003e IO (IOBitArray i)",
        "fct-source": "src/Data-Array-BitArray-IO.html#mapArray",
        "fct-type": "function",
        "title": "mapArray"
      },
      "index": {
        "description": "Alias for map",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "mapArray",
        "normalized": "(Bool-\u003eBool)-\u003eIOBitArray a-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "Array",
        "signature": "(Bool-\u003eBool)-\u003eIOBitArray i-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:mapIndices",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array by reading from another.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e (i -\u003e j)-\u003e IOBitArray j-\u003e IO (IOBitArray i)",
        "fct-type": "function",
        "title": "mapIndices"
      },
      "index": {
        "description": "Create new array by reading from another",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "mapIndices",
        "normalized": "(a,a)-\u003e(a-\u003eb)-\u003eIOBitArray b-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "Indices",
        "signature": "(i,i)-\u003e(i-\u003ej)-\u003eIOBitArray j-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:newArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array filled with an initial value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e Bool-\u003e IO (IOBitArray i)",
        "fct-type": "function",
        "title": "newArray"
      },
      "index": {
        "description": "Create new array filled with an initial value",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "newArray",
        "normalized": "(a,a)-\u003eBool-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "Array",
        "signature": "(i,i)-\u003eBool-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:newArray_",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array filled with unspecified initial values.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e IO (IOBitArray i)",
        "fct-type": "function",
        "title": "newArray_"
      },
      "index": {
        "description": "Create new array filled with unspecified initial values",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "newArray_",
        "normalized": "(a,a)-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "Array",
        "signature": "(i,i)-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:newListArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array filled with values from a list.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e [Bool]-\u003e IO (IOBitArray i)",
        "fct-type": "function",
        "title": "newListArray"
      },
      "index": {
        "description": "Create new array filled with values from list",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "newListArray",
        "normalized": "(a,a)-\u003e[Bool]-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "List Array",
        "signature": "(i,i)-\u003e[Bool]-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit bitwise reduction: True when any bit is True.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO Bool",
        "fct-source": "src/Data-Array-BitArray-IO.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "Short-circuit bitwise reduction True when any bit is True",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "or",
        "normalized": "IOBitArray a-\u003eIO Bool",
        "package": "bitwise",
        "partial": "",
        "signature": "IOBitArray i-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:readArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead from an array at an index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e i -\u003e IO Bool",
        "fct-source": "src/Data-Array-BitArray-IO.html#readArray",
        "fct-type": "function",
        "title": "readArray"
      },
      "index": {
        "description": "Read from an array at an index",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "readArray",
        "normalized": "IOBitArray a-\u003ea-\u003eIO Bool",
        "package": "bitwise",
        "partial": "Array",
        "signature": "IOBitArray i-\u003ei-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:thaw",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an array from immutable form.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e IO (IOBitArray i)",
        "fct-source": "src/Data-Array-BitArray-Internal.html#thaw",
        "fct-type": "function",
        "title": "thaw"
      },
      "index": {
        "description": "Convert an array from immutable form",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "thaw",
        "normalized": "BitArray a-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:unsafeFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eSnapshot the array into an immutable form.  Unsafe when the source\n   array can be modified later.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO (BitArray i)",
        "fct-source": "src/Data-Array-BitArray-Internal.html#unsafeFreeze",
        "fct-type": "function",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "Snapshot the array into an immutable form Unsafe when the source array can be modified later",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "unsafeFreeze",
        "normalized": "IOBitArray a-\u003eIO(BitArray a)",
        "package": "bitwise",
        "partial": "Freeze",
        "signature": "IOBitArray i-\u003eIO(BitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:unsafeGetElems",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all elements of an array.  Unsafe when the source\n   array can be modified later.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e IO [Bool]",
        "fct-source": "src/Data-Array-BitArray-IO.html#unsafeGetElems",
        "fct-type": "function",
        "title": "unsafeGetElems"
      },
      "index": {
        "description": "Get list of all elements of an array Unsafe when the source array can be modified later",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "unsafeGetElems",
        "normalized": "IOBitArray a-\u003eIO[Bool]",
        "package": "bitwise",
        "partial": "Get Elems",
        "signature": "IOBitArray i-\u003eIO[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:unsafeReadArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead from an array at an index without bounds checking.  Unsafe.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e i -\u003e IO Bool",
        "fct-source": "src/Data-Array-BitArray-IO.html#unsafeReadArray",
        "fct-type": "function",
        "title": "unsafeReadArray"
      },
      "index": {
        "description": "Read from an array at an index without bounds checking Unsafe",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "unsafeReadArray",
        "normalized": "IOBitArray a-\u003ea-\u003eIO Bool",
        "package": "bitwise",
        "partial": "Read Array",
        "signature": "IOBitArray i-\u003ei-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:unsafeThaw",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an array from immutable form.  Unsafe to modify the result\n   unless the source array is never used later.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e IO (IOBitArray i)",
        "fct-source": "src/Data-Array-BitArray-Internal.html#unsafeThaw",
        "fct-type": "function",
        "title": "unsafeThaw"
      },
      "index": {
        "description": "Convert an array from immutable form Unsafe to modify the result unless the source array is never used later",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "unsafeThaw",
        "normalized": "BitArray a-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "Thaw",
        "signature": "BitArray i-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:writeArray",
      "description": {
        "fct-descr": "\u003cp\u003eWrite to an array at an index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "IOBitArray i -\u003e i -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Data-Array-BitArray-IO.html#writeArray",
        "fct-type": "function",
        "title": "writeArray"
      },
      "index": {
        "description": "Write to an array at an index",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "writeArray",
        "normalized": "IOBitArray a-\u003ea-\u003eBool-\u003eIO()",
        "package": "bitwise",
        "partial": "Array",
        "signature": "IOBitArray i-\u003ei-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-IO.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise zipWith.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and\n   combines large chunks at a time.\n\u003c/p\u003e\u003cp\u003eThe bounds of the source arrays must be identical.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.IO",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e IOBitArray i -\u003e IOBitArray i -\u003e IO (IOBitArray i)",
        "fct-source": "src/Data-Array-BitArray-IO.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Bitwise zipWith Implementation lifts from Bool to Bits and combines large chunks at time The bounds of the source arrays must be identical",
        "hierarchy": "Data Array BitArray IO",
        "module": "Data.Array.BitArray.IO",
        "name": "zipWith",
        "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eIOBitArray a-\u003eIOBitArray a-\u003eIO(IOBitArray a)",
        "package": "bitwise",
        "partial": "With",
        "signature": "(Bool-\u003eBool-\u003eBool)-\u003eIOBitArray i-\u003eIOBitArray i-\u003eIO(IOBitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnboxed mutable bit arrays in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-BitArray-ST.html",
        "fct-type": "module",
        "title": "ST"
      },
      "index": {
        "description": "Unboxed mutable bit arrays in the ST monad",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "ST",
        "normalized": "",
        "package": "bitwise",
        "partial": "ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#t:STBitArray",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of mutable bit arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-BitArray-ST.html#STBitArray",
        "fct-type": "data",
        "title": "STBitArray"
      },
      "index": {
        "description": "The type of mutable bit arrays",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "STBitArray",
        "normalized": "",
        "package": "bitwise",
        "partial": "STBit Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit bitwise reduction: False when any bit is False.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s Bool",
        "fct-source": "src/Data-Array-BitArray-ST.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "Short-circuit bitwise reduction False when any bit is False",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "and",
        "normalized": "STBitArray a b-\u003eST a Bool",
        "package": "bitwise",
        "partial": "",
        "signature": "STBitArray s i-\u003eST s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eCopy an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s (STBitArray s i)",
        "fct-source": "src/Data-Array-BitArray-ST.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Copy an array",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "copy",
        "normalized": "STBitArray a b-\u003eST a(STBitArray a b)",
        "package": "bitwise",
        "partial": "",
        "signature": "STBitArray s i-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eFill an array with a uniform value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e Bool -\u003e ST s ()",
        "fct-source": "src/Data-Array-BitArray-ST.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "Fill an array with uniform value",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "fill",
        "normalized": "STBitArray a b-\u003eBool-\u003eST a()",
        "package": "bitwise",
        "partial": "",
        "signature": "STBitArray s i-\u003eBool-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise reduction with an associative commutative boolean operator.\n   Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and folds large chunks\n   at a time.  Each bit is used as a source exactly once.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool -\u003e Bool)-\u003e STBitArray s i-\u003e ST s (Maybe Bool)",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Bitwise reduction with an associative commutative boolean operator Implementation lifts from Bool to Bits and folds large chunks at time Each bit is used as source exactly once",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "fold",
        "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eSTBitArray a b-\u003eST a(Maybe Bool)",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool-\u003eBool)-\u003eSTBitArray s i-\u003eST s(Maybe Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:freeze",
      "description": {
        "fct-descr": "\u003cp\u003eSnapshot the array into an immutable form.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s (BitArray i)",
        "fct-source": "src/Data-Array-BitArray-ST.html#freeze",
        "fct-type": "function",
        "title": "freeze"
      },
      "index": {
        "description": "Snapshot the array into an immutable form",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "freeze",
        "normalized": "STBitArray a b-\u003eST a(BitArray b)",
        "package": "bitwise",
        "partial": "",
        "signature": "STBitArray s i-\u003eST s(BitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:getAssocs",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all (index, element) pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s [(i, Bool)]",
        "fct-source": "src/Data-Array-BitArray-ST.html#getAssocs",
        "fct-type": "function",
        "title": "getAssocs"
      },
      "index": {
        "description": "Get list of all index element pairs",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "getAssocs",
        "normalized": "STBitArray a b-\u003eST a[(b,Bool)]",
        "package": "bitwise",
        "partial": "Assocs",
        "signature": "STBitArray s i-\u003eST s[(i,Bool)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:getBounds",
      "description": {
        "fct-descr": "\u003cp\u003eGet the bounds of a bit array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s (i, i)",
        "fct-source": "src/Data-Array-BitArray-ST.html#getBounds",
        "fct-type": "function",
        "title": "getBounds"
      },
      "index": {
        "description": "Get the bounds of bit array",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "getBounds",
        "normalized": "STBitArray a b-\u003eST a(b,b)",
        "package": "bitwise",
        "partial": "Bounds",
        "signature": "STBitArray s i-\u003eST s(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:getElems",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all elements of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s [Bool]",
        "fct-source": "src/Data-Array-BitArray-ST.html#getElems",
        "fct-type": "function",
        "title": "getElems"
      },
      "index": {
        "description": "Get list of all elements of an array",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "getElems",
        "normalized": "STBitArray a b-\u003eST a[Bool]",
        "package": "bitwise",
        "partial": "Elems",
        "signature": "STBitArray s i-\u003eST s[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:isUniform",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit bitwise reduction: \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when any bits differ,\n   \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e when all bits are the same.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s (Maybe Bool)",
        "fct-source": "src/Data-Array-BitArray-ST.html#isUniform",
        "fct-type": "function",
        "title": "isUniform"
      },
      "index": {
        "description": "Short-circuit bitwise reduction Nothing when any bits differ Just when all bits are the same",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "isUniform",
        "normalized": "STBitArray a b-\u003eST a(Maybe Bool)",
        "package": "bitwise",
        "partial": "Uniform",
        "signature": "STBitArray s i-\u003eST s(Maybe Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise map.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and maps\n   large chunks at a time.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool) -\u003e STBitArray s i -\u003e ST s (STBitArray s i)",
        "fct-source": "src/Data-Array-BitArray-ST.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Bitwise map Implementation lifts from Bool to Bits and maps large chunks at time",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "map",
        "normalized": "(Bool-\u003eBool)-\u003eSTBitArray a b-\u003eST a(STBitArray a b)",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool)-\u003eSTBitArray s i-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:mapArray",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool) -\u003e STBitArray s i -\u003e ST s (STBitArray s i)",
        "fct-source": "src/Data-Array-BitArray-ST.html#mapArray",
        "fct-type": "function",
        "title": "mapArray"
      },
      "index": {
        "description": "Alias for map",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "mapArray",
        "normalized": "(Bool-\u003eBool)-\u003eSTBitArray a b-\u003eST a(STBitArray a b)",
        "package": "bitwise",
        "partial": "Array",
        "signature": "(Bool-\u003eBool)-\u003eSTBitArray s i-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:mapIndices",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array by reading from another.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e (i -\u003e j)-\u003e STBitArray s j-\u003e ST s (STBitArray s i)",
        "fct-type": "function",
        "title": "mapIndices"
      },
      "index": {
        "description": "Create new array by reading from another",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "mapIndices",
        "normalized": "(a,a)-\u003e(a-\u003eb)-\u003eSTBitArray c b-\u003eST c(STBitArray c a)",
        "package": "bitwise",
        "partial": "Indices",
        "signature": "(i,i)-\u003e(i-\u003ej)-\u003eSTBitArray s j-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:newArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array filled with an initial value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e Bool-\u003e ST s (STBitArray s i)",
        "fct-type": "function",
        "title": "newArray"
      },
      "index": {
        "description": "Create new array filled with an initial value",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "newArray",
        "normalized": "(a,a)-\u003eBool-\u003eST b(STBitArray b a)",
        "package": "bitwise",
        "partial": "Array",
        "signature": "(i,i)-\u003eBool-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:newArray_",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array filled with a default initial value (\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e ST s (STBitArray s i)",
        "fct-type": "function",
        "title": "newArray_"
      },
      "index": {
        "description": "Create new array filled with default initial value False",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "newArray_",
        "normalized": "(a,a)-\u003eST b(STBitArray b a)",
        "package": "bitwise",
        "partial": "Array",
        "signature": "(i,i)-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:newListArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array filled with values from a list.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e [Bool]-\u003e ST s (STBitArray s i)",
        "fct-type": "function",
        "title": "newListArray"
      },
      "index": {
        "description": "Create new array filled with values from list",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "newListArray",
        "normalized": "(a,a)-\u003e[Bool]-\u003eST b(STBitArray b a)",
        "package": "bitwise",
        "partial": "List Array",
        "signature": "(i,i)-\u003e[Bool]-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit bitwise reduction: True when any bit is True.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s Bool",
        "fct-source": "src/Data-Array-BitArray-ST.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "Short-circuit bitwise reduction True when any bit is True",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "or",
        "normalized": "STBitArray a b-\u003eST a Bool",
        "package": "bitwise",
        "partial": "",
        "signature": "STBitArray s i-\u003eST s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:readArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead from an array at an index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e i -\u003e ST s Bool",
        "fct-source": "src/Data-Array-BitArray-ST.html#readArray",
        "fct-type": "function",
        "title": "readArray"
      },
      "index": {
        "description": "Read from an array at an index",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "readArray",
        "normalized": "STBitArray a b-\u003eb-\u003eST a Bool",
        "package": "bitwise",
        "partial": "Array",
        "signature": "STBitArray s i-\u003ei-\u003eST s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:thaw",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an array from immutable form.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e ST s (STBitArray s i)",
        "fct-source": "src/Data-Array-BitArray-ST.html#thaw",
        "fct-type": "function",
        "title": "thaw"
      },
      "index": {
        "description": "Convert an array from immutable form",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "thaw",
        "normalized": "BitArray a-\u003eST b(STBitArray b a)",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:unsafeFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eSnapshot the array into an immutable form.  Unsafe when the source\n   array can be modified later.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s (BitArray i)",
        "fct-source": "src/Data-Array-BitArray-ST.html#unsafeFreeze",
        "fct-type": "function",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "Snapshot the array into an immutable form Unsafe when the source array can be modified later",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "unsafeFreeze",
        "normalized": "STBitArray a b-\u003eST a(BitArray b)",
        "package": "bitwise",
        "partial": "Freeze",
        "signature": "STBitArray s i-\u003eST s(BitArray i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:unsafeGetElems",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all elements of an array without copying.  Unsafe when\n   the source array can be modified later.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e ST s [Bool]",
        "fct-source": "src/Data-Array-BitArray-ST.html#unsafeGetElems",
        "fct-type": "function",
        "title": "unsafeGetElems"
      },
      "index": {
        "description": "Get list of all elements of an array without copying Unsafe when the source array can be modified later",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "unsafeGetElems",
        "normalized": "STBitArray a b-\u003eST a[Bool]",
        "package": "bitwise",
        "partial": "Get Elems",
        "signature": "STBitArray s i-\u003eST s[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:unsafeReadArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead from an array at an index without bounds checking.  Unsafe.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e i -\u003e ST s Bool",
        "fct-source": "src/Data-Array-BitArray-ST.html#unsafeReadArray",
        "fct-type": "function",
        "title": "unsafeReadArray"
      },
      "index": {
        "description": "Read from an array at an index without bounds checking Unsafe",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "unsafeReadArray",
        "normalized": "STBitArray a b-\u003eb-\u003eST a Bool",
        "package": "bitwise",
        "partial": "Read Array",
        "signature": "STBitArray s i-\u003ei-\u003eST s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:unsafeThaw",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an array from immutable form.  Unsafe to modify the result\n   unless the source array is never used later.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e ST s (STBitArray s i)",
        "fct-source": "src/Data-Array-BitArray-ST.html#unsafeThaw",
        "fct-type": "function",
        "title": "unsafeThaw"
      },
      "index": {
        "description": "Convert an array from immutable form Unsafe to modify the result unless the source array is never used later",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "unsafeThaw",
        "normalized": "BitArray a-\u003eST b(STBitArray b a)",
        "package": "bitwise",
        "partial": "Thaw",
        "signature": "BitArray i-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:writeArray",
      "description": {
        "fct-descr": "\u003cp\u003eWrite to an array at an index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "STBitArray s i -\u003e i -\u003e Bool -\u003e ST s ()",
        "fct-source": "src/Data-Array-BitArray-ST.html#writeArray",
        "fct-type": "function",
        "title": "writeArray"
      },
      "index": {
        "description": "Write to an array at an index",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "writeArray",
        "normalized": "STBitArray a b-\u003eb-\u003eBool-\u003eST a()",
        "package": "bitwise",
        "partial": "Array",
        "signature": "STBitArray s i-\u003ei-\u003eBool-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray-ST.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise zipWith.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and\n   combines large chunks at a time.\n\u003c/p\u003e\u003cp\u003eThe bounds of the source arrays must be identical.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray.ST",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e STBitArray s i -\u003e STBitArray s i -\u003e ST s (STBitArray s i)",
        "fct-source": "src/Data-Array-BitArray-ST.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Bitwise zipWith Implementation lifts from Bool to Bits and combines large chunks at time The bounds of the source arrays must be identical",
        "hierarchy": "Data Array BitArray ST",
        "module": "Data.Array.BitArray.ST",
        "name": "zipWith",
        "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eSTBitArray a b-\u003eSTBitArray a b-\u003eST a(STBitArray a b)",
        "package": "bitwise",
        "partial": "With",
        "signature": "(Bool-\u003eBool-\u003eBool)-\u003eSTBitArray s i-\u003eSTBitArray s i-\u003eST s(STBitArray s i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable unboxed packed bit arrays using bitwise operations to\nmanipulate large chunks at a time much more quickly than individually\nunpacking and repacking bits would allow.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-BitArray.html",
        "fct-type": "module",
        "title": "BitArray"
      },
      "index": {
        "description": "Immutable unboxed packed bit arrays using bitwise operations to manipulate large chunks at time much more quickly than individually unpacking and repacking bits would allow",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "BitArray",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bit Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#t:BitArray",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of immutable bit arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-BitArray-Internal.html#BitArray",
        "fct-type": "data",
        "title": "BitArray"
      },
      "index": {
        "description": "The type of immutable bit arrays",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "BitArray",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bit Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eBit array indexing.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e i -\u003e Bool",
        "fct-source": "src/Data-Array-BitArray.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Bit array indexing",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "(!) !",
        "normalized": "BitArray a-\u003ea-\u003eBool",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003ei-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:-33--33--33-",
      "description": {
        "fct-descr": "\u003cp\u003eBit array indexing without bounds checking.  Unsafe.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e i -\u003e Bool",
        "fct-source": "src/Data-Array-BitArray.html#%21%21%21",
        "fct-type": "function",
        "title": "(!!!)"
      },
      "index": {
        "description": "Bit array indexing without bounds checking Unsafe",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "(!!!) !!!",
        "normalized": "BitArray a-\u003ea-\u003eBool",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003ei-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:-33--63-",
      "description": {
        "fct-descr": "\u003cp\u003eBounds checking combined with array indexing.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e i -\u003e Maybe Bool",
        "fct-source": "src/Data-Array-BitArray.html#%21%3F",
        "fct-type": "function",
        "title": "(!?)"
      },
      "index": {
        "description": "Bounds checking combined with array indexing",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "(!?) !?",
        "normalized": "BitArray a-\u003ea-\u003eMaybe Bool",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003ei-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:-47--47-",
      "description": {
        "fct-descr": "\u003cp\u003eA new array with updated values at the supplied indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i-\u003e [(i, Bool)]-\u003e BitArray i",
        "fct-type": "function",
        "title": "(//)"
      },
      "index": {
        "description": "new array with updated values at the supplied indices",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "(//) //",
        "normalized": "BitArray a-\u003e[(a,Bool)]-\u003eBitArray a",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003e[(i,Bool)]-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:accum",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulate with an operation and a list of (index, operand).\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e a -\u003e Bool)-\u003e BitArray i-\u003e [(i, a)]-\u003e BitArray i",
        "fct-type": "function",
        "title": "accum"
      },
      "index": {
        "description": "Accumulate with an operation and list of index operand",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "accum",
        "normalized": "(Bool-\u003ea-\u003eBool)-\u003eBitArray b-\u003e[(b,a)]-\u003eBitArray b",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003ea-\u003eBool)-\u003eBitArray i-\u003e[(i,a)]-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:accumArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an array by accumulating a list of (index, operand) pairs\n   from a default seed with an operation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e a -\u003e Bool)-\u003e Bool-\u003e (i, i)-\u003e [(i, a)]-\u003e BitArray i",
        "fct-type": "function",
        "title": "accumArray"
      },
      "index": {
        "description": "Create an array by accumulating list of index operand pairs from default seed with an operation",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "accumArray",
        "normalized": "(Bool-\u003ea-\u003eBool)-\u003eBool-\u003e(b,b)-\u003e[(b,a)]-\u003eBitArray b",
        "package": "bitwise",
        "partial": "Array",
        "signature": "(Bool-\u003ea-\u003eBool)-\u003eBool-\u003e(i,i)-\u003e[(i,a)]-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:amap",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool) -\u003e BitArray i -\u003e BitArray i",
        "fct-source": "src/Data-Array-BitArray.html#amap",
        "fct-type": "function",
        "title": "amap"
      },
      "index": {
        "description": "Alias for map",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "amap",
        "normalized": "(Bool-\u003eBool)-\u003eBitArray a-\u003eBitArray a",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool)-\u003eBitArray i-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit bitwise reduction: False if any bit is False.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e Bool",
        "fct-source": "src/Data-Array-BitArray.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "Short-circuit bitwise reduction False if any bit is False",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "and",
        "normalized": "BitArray a-\u003eBool",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:array",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an array from a list of (index, element) pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e [(i, Bool)]-\u003e BitArray i",
        "fct-type": "function",
        "title": "array"
      },
      "index": {
        "description": "Create an array from list of index element pairs",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "array",
        "normalized": "(a,a)-\u003e[(a,Bool)]-\u003eBitArray a",
        "package": "bitwise",
        "partial": "",
        "signature": "(i,i)-\u003e[(i,Bool)]-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:assocs",
      "description": {
        "fct-descr": "\u003cp\u003eA list of the (index, element) pairs in this array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e [(i, Bool)]",
        "fct-source": "src/Data-Array-BitArray.html#assocs",
        "fct-type": "function",
        "title": "assocs"
      },
      "index": {
        "description": "list of the index element pairs in this array",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "assocs",
        "normalized": "BitArray a-\u003e[(a,Bool)]",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003e[(i,Bool)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:bounds",
      "description": {
        "fct-descr": "\u003cp\u003eThe bounds of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e (i, i)",
        "fct-source": "src/Data-Array-BitArray.html#bounds",
        "fct-type": "function",
        "title": "bounds"
      },
      "index": {
        "description": "The bounds of an array",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "bounds",
        "normalized": "BitArray a-\u003e(a,a)",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003e(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eA list of the elements in this array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e [Bool]",
        "fct-source": "src/Data-Array-BitArray.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "list of the elements in this array",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "elems",
        "normalized": "BitArray a-\u003e[Bool]",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:false",
      "description": {
        "fct-descr": "\u003cp\u003eA uniform array of \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e BitArray i",
        "fct-type": "function",
        "title": "false"
      },
      "index": {
        "description": "uniform array of False",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "false",
        "normalized": "(a,a)-\u003eBitArray a",
        "package": "bitwise",
        "partial": "",
        "signature": "(i,i)-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eA uniform array of bits.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e Bool-\u003e BitArray i",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "uniform array of bits",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "fill",
        "normalized": "(a,a)-\u003eBool-\u003eBitArray a",
        "package": "bitwise",
        "partial": "",
        "signature": "(i,i)-\u003eBool-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise reduction with an associative commutative boolean operator.\n   Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and folds large chunks\n   at a time.  Each bit is used as a source exactly once.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e BitArray i -\u003e Maybe Bool",
        "fct-source": "src/Data-Array-BitArray.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Bitwise reduction with an associative commutative boolean operator Implementation lifts from Bool to Bits and folds large chunks at time Each bit is used as source exactly once",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "fold",
        "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eBitArray a-\u003eMaybe Bool",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool-\u003eBool)-\u003eBitArray i-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003eA list of all the valid indices for this array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e [i]",
        "fct-source": "src/Data-Array-BitArray.html#indices",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "list of all the valid indices for this array",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "indices",
        "normalized": "BitArray a-\u003e[a]",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003e[i]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:isUniform",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit bitwise reduction: Nothing if any bits differ.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e Maybe Bool",
        "fct-source": "src/Data-Array-BitArray.html#isUniform",
        "fct-type": "function",
        "title": "isUniform"
      },
      "index": {
        "description": "Short-circuit bitwise reduction Nothing if any bits differ",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "isUniform",
        "normalized": "BitArray a-\u003eMaybe Bool",
        "package": "bitwise",
        "partial": "Uniform",
        "signature": "BitArray i-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:ixmap",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array by mapping indices into a source array..\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e (i -\u003e j)-\u003e BitArray j-\u003e BitArray i",
        "fct-type": "function",
        "title": "ixmap"
      },
      "index": {
        "description": "Create new array by mapping indices into source array",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "ixmap",
        "normalized": "(a,a)-\u003e(a-\u003eb)-\u003eBitArray b-\u003eBitArray a",
        "package": "bitwise",
        "partial": "",
        "signature": "(i,i)-\u003e(i-\u003ej)-\u003eBitArray j-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:listArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an array from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e [Bool]-\u003e BitArray i",
        "fct-type": "function",
        "title": "listArray"
      },
      "index": {
        "description": "Create an array from list of elements",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "listArray",
        "normalized": "(a,a)-\u003e[Bool]-\u003eBitArray a",
        "package": "bitwise",
        "partial": "Array",
        "signature": "(i,i)-\u003e[Bool]-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise map.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and maps\n   large chunks at a time.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool) -\u003e BitArray i -\u003e BitArray i",
        "fct-source": "src/Data-Array-BitArray.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Bitwise map Implementation lifts from Bool to Bits and maps large chunks at time",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "map",
        "normalized": "(Bool-\u003eBool)-\u003eBitArray a-\u003eBitArray a",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool)-\u003eBitArray i-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eShort-circuit bitwise reduction: True if any bit is True.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "BitArray i -\u003e Bool",
        "fct-source": "src/Data-Array-BitArray.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "Short-circuit bitwise reduction True if any bit is True",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "or",
        "normalized": "BitArray a-\u003eBool",
        "package": "bitwise",
        "partial": "",
        "signature": "BitArray i-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:true",
      "description": {
        "fct-descr": "\u003cp\u003eA uniform array of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(i, i)-\u003e BitArray i",
        "fct-type": "function",
        "title": "true"
      },
      "index": {
        "description": "uniform array of True",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "true",
        "normalized": "(a,a)-\u003eBitArray a",
        "package": "bitwise",
        "partial": "",
        "signature": "(i,i)-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Array-BitArray.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise zipWith.  Implementation lifts from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eBits\u003c/code\u003e and\n   combines large chunks at a time.\n\u003c/p\u003e\u003cp\u003eThe bounds of the source arrays must be identical.\n\u003c/p\u003e",
        "fct-module": "Data.Array.BitArray",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e BitArray i -\u003e BitArray i -\u003e BitArray i",
        "fct-source": "src/Data-Array-BitArray.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Bitwise zipWith Implementation lifts from Bool to Bits and combines large chunks at time The bounds of the source arrays must be identical",
        "hierarchy": "Data Array BitArray",
        "module": "Data.Array.BitArray",
        "name": "zipWith",
        "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eBitArray a-\u003eBitArray a-\u003eBitArray a",
        "package": "bitwise",
        "partial": "With",
        "signature": "(Bool-\u003eBool-\u003eBool)-\u003eBitArray i-\u003eBitArray i-\u003eBitArray i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLifting boolean operations on \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to bitwise operations on \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePacking bits into words, and unpacking words into bits.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "module",
        "fct-source": "src/Data-Bits-Bitwise.html",
        "fct-type": "module",
        "title": "Bitwise"
      },
      "index": {
        "description": "Lifting boolean operations on Bool to bitwise operations on Bits Packing bits into words and unpacking words into bits",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "Bitwise",
        "normalized": "",
        "package": "bitwise",
        "partial": "Bitwise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003eTrue when the predicate is true for all bits.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool)-\u003e b-\u003e Bool",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "True when the predicate is true for all bits",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "all",
        "normalized": "(Bool-\u003eBool)-\u003ea-\u003eBool",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool)-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eTrue when all bits are set.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "b -\u003e Bool",
        "fct-source": "src/Data-Bits-Bitwise.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "True when all bits are set",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "and",
        "normalized": "a-\u003eBool",
        "package": "bitwise",
        "partial": "",
        "signature": "b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003eTrue when the predicate is true for any bit.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool)-\u003e b-\u003e Bool",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "True when the predicate is true for any bit",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "any",
        "normalized": "(Bool-\u003eBool)-\u003ea-\u003eBool",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool)-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:fromBool",
      "description": {
        "fct-descr": "\u003cp\u003eThe least significant bit.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "Bool -\u003e b",
        "fct-source": "src/Data-Bits-Bitwise.html#fromBool",
        "fct-type": "function",
        "title": "fromBool"
      },
      "index": {
        "description": "The least significant bit",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "fromBool",
        "normalized": "Bool-\u003ea",
        "package": "bitwise",
        "partial": "Bool",
        "signature": "Bool-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:fromListBE",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a big-endian list of bits to \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "[Bool]-\u003e b",
        "fct-type": "function",
        "title": "fromListBE"
      },
      "index": {
        "description": "Convert big-endian list of bits to Bits",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "fromListBE",
        "normalized": "[Bool]-\u003ea",
        "package": "bitwise",
        "partial": "List BE",
        "signature": "[Bool]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:fromListLE",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a little-endian list of bits to \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "[Bool]-\u003e b",
        "fct-type": "function",
        "title": "fromListLE"
      },
      "index": {
        "description": "Convert little-endian list of bits to Bits",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "fromListLE",
        "normalized": "[Bool]-\u003ea",
        "package": "bitwise",
        "partial": "List LE",
        "signature": "[Bool]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:isUniform",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if a \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e is all 1s, all 0s, or neither.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "b -\u003e Maybe Bool",
        "fct-source": "src/Data-Bits-Bitwise.html#isUniform",
        "fct-type": "function",
        "title": "isUniform"
      },
      "index": {
        "description": "Determine if Bits is all all or neither",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "isUniform",
        "normalized": "a-\u003eMaybe Bool",
        "package": "bitwise",
        "partial": "Uniform",
        "signature": "b-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:joinAt",
      "description": {
        "fct-descr": "\u003cp\u003eJoin lsb with msb to make a word.  Assumes lsb has no set bits\n   above the join point.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "Int-\u003e b-\u003e b-\u003e b",
        "fct-type": "function",
        "title": "joinAt"
      },
      "index": {
        "description": "Join lsb with msb to make word Assumes lsb has no set bits above the join point",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "joinAt",
        "normalized": "Int-\u003ea-\u003ea-\u003ea",
        "package": "bitwise",
        "partial": "At",
        "signature": "Int-\u003eb-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eLift a unary boolean operation to a bitwise operation.\n\u003c/p\u003e\u003cp\u003eThe implementation is by exhaustive input/output case analysis:\n   thus the operation provided must be total.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool)-\u003e b-\u003e b",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Lift unary boolean operation to bitwise operation The implementation is by exhaustive input output case analysis thus the operation provided must be total",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "map",
        "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
        "package": "bitwise",
        "partial": "",
        "signature": "(Bool-\u003eBool)-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:mask",
      "description": {
        "fct-descr": "\u003cp\u003eA mask with count least significant bits set.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "Int-\u003e b",
        "fct-type": "function",
        "title": "mask"
      },
      "index": {
        "description": "mask with count least significant bits set",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "mask",
        "normalized": "Int-\u003ea",
        "package": "bitwise",
        "partial": "",
        "signature": "Int-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eTrue when any bit is set.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "b -\u003e Bool",
        "fct-source": "src/Data-Bits-Bitwise.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "True when any bit is set",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "or",
        "normalized": "a-\u003eBool",
        "package": "bitwise",
        "partial": "",
        "signature": "b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:packWord8BE",
      "description": {
        "fct-descr": "\u003cp\u003ePack bits into a byte in big-endian order.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Word8",
        "fct-type": "function",
        "title": "packWord8BE"
      },
      "index": {
        "description": "Pack bits into byte in big-endian order",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "packWord8BE",
        "normalized": "Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eWord",
        "package": "bitwise",
        "partial": "Word BE",
        "signature": "Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:packWord8LE",
      "description": {
        "fct-descr": "\u003cp\u003ePack bits into a byte in little-endian order.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Word8",
        "fct-type": "function",
        "title": "packWord8LE"
      },
      "index": {
        "description": "Pack bits into byte in little-endian order",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "packWord8LE",
        "normalized": "Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eWord",
        "package": "bitwise",
        "partial": "Word LE",
        "signature": "Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003eLift a boolean constant to a bitwise constant.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "Bool -\u003e b",
        "fct-source": "src/Data-Bits-Bitwise.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "Lift boolean constant to bitwise constant",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "repeat",
        "normalized": "Bool-\u003ea",
        "package": "bitwise",
        "partial": "",
        "signature": "Bool-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a word into (lsb, msb).  Ensures lsb has no set bits\n   above the split point.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "Int-\u003e b-\u003e (b, b)",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "Split word into lsb msb Ensures lsb has no set bits above the split point",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "splitAt",
        "normalized": "Int-\u003ea-\u003e(a,a)",
        "package": "bitwise",
        "partial": "At",
        "signature": "Int-\u003eb-\u003e(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:toListBE",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e (with a defined \u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e) to a list of bits, in\n   big-endian order.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "b-\u003e [Bool]",
        "fct-type": "function",
        "title": "toListBE"
      },
      "index": {
        "description": "Convert Bits with defined bitSize to list of bits in big-endian order",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "toListBE",
        "normalized": "a-\u003e[Bool]",
        "package": "bitwise",
        "partial": "List BE",
        "signature": "b-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:toListLE",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e (with a defined \u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e) to a list of bits, in\n   little-endian order.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "b-\u003e [Bool]",
        "fct-type": "function",
        "title": "toListLE"
      },
      "index": {
        "description": "Convert Bits with defined bitSize to list of bits in little-endian order",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "toListLE",
        "normalized": "a-\u003e[Bool]",
        "package": "bitwise",
        "partial": "List LE",
        "signature": "b-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:unpackWord8BE",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the bits from a byte in big-endian order.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "Word8-\u003e (Bool, Bool, Bool, Bool, Bool, Bool, Bool, Bool)",
        "fct-type": "function",
        "title": "unpackWord8BE"
      },
      "index": {
        "description": "Extract the bits from byte in big-endian order",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "unpackWord8BE",
        "normalized": "Word-\u003e(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)",
        "package": "bitwise",
        "partial": "Word BE",
        "signature": "Word-\u003e(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:unpackWord8LE",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the bits from a byte in little-endian order.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "Word8-\u003e (Bool, Bool, Bool, Bool, Bool, Bool, Bool, Bool)",
        "fct-type": "function",
        "title": "unpackWord8LE"
      },
      "index": {
        "description": "Extract the bits from byte in little-endian order",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "unpackWord8LE",
        "normalized": "Word-\u003e(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)",
        "package": "bitwise",
        "partial": "Word LE",
        "signature": "Word-\u003e(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitwise/docs/Data-Bits-Bitwise.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eLift a binary boolean operation to a bitwise operation.\n\u003c/p\u003e\u003cp\u003eThe implementation is by exhaustive input/output case analysis:\n   thus the operation provided must be total.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Bitwise",
        "fct-package": "bitwise",
        "fct-signature": "(Bool -\u003e Bool -\u003e Bool)-\u003e b-\u003e b-\u003e b",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Lift binary boolean operation to bitwise operation The implementation is by exhaustive input output case analysis thus the operation provided must be total",
        "hierarchy": "Data Bits Bitwise",
        "module": "Data.Bits.Bitwise",
        "name": "zipWith",
        "normalized": "(Bool-\u003eBool-\u003eBool)-\u003ea-\u003ea-\u003ea",
        "package": "bitwise",
        "partial": "With",
        "signature": "(Bool-\u003eBool-\u003eBool)-\u003eb-\u003eb-\u003eb"
      }
    }
  }
]