[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReading and writing uncompressed BMP files.\n\u003c/p\u003e\u003cp\u003eSupports uncompressed 24bit RGB and 32bit RGBA\n      WindowsV3, WindowsV4 and WindowsV5 formats.\n\u003c/p\u003e\u003cp\u003eWe don't support the plain OS/2 BitmapCoreHeader\n       and BitmapCoreHeader2 image headers, but I haven't yet seen one of\n       these in the wild.\n\u003c/p\u003e\u003cp\u003eTo write a file do something like:\n\u003c/p\u003e\u003cpre\u003e do let rgba   = Data.ByteString.pack [some list of Word8s]\n    let bmp    = packRGBA32ToBMP width height rgba\n    writeBMP fileName bmp\n\u003c/pre\u003e\u003cp\u003eTo read a file do something like:\n\u003c/p\u003e\u003cpre\u003e do Right bmp  \u003c- readBMP fileName\n    let rgba   =  unpackBMPToRGBA32 bmp\n    let (width, height) = bmpDimensions bmp\n    ... \n\u003c/pre\u003e\u003cp\u003eRelease Notes:\n\u003c/p\u003e\u003cpre\u003e  * bmp 1.2.5\n    Add support for writing uncompressed 32-bit files.\n\n  * bmp 1.2.4\n    Update to use binary 0.6.\n\n  * bmp 1.2.3\n    Add pure parseBMP / renderBMP API.\n\n  * bmp 1.2.2\n    Allow the physical image buffer to be larger than the image\n     size stated in the header, to accept output of foolish Win7 codec.\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "module",
        "fct-source": "src/Codec-BMP.html",
        "fct-type": "module",
        "title": "BMP"
      },
      "index": {
        "description": "Reading and writing uncompressed BMP files Supports uncompressed bit RGB and bit RGBA WindowsV3 WindowsV4 and WindowsV5 formats We don support the plain OS BitmapCoreHeader and BitmapCoreHeader2 image headers but haven yet seen one of these in the wild To write file do something like do let rgba Data.ByteString.pack some list of Word8s let bmp packRGBA32ToBMP width height rgba writeBMP fileName bmp To read file do something like do Right bmp readBMP fileName let rgba unpackBMPToRGBA32 bmp let width height bmpDimensions bmp Release Notes bmp Add support for writing uncompressed bit files bmp Update to use binary bmp Add pure parseBMP renderBMP API bmp Allow the physical image buffer to be larger than the image size stated in the header to accept output of foolish Win7 codec",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BMP",
        "normalized": "",
        "package": "bmp",
        "partial": "BMP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BMP",
      "description": {
        "fct-descr": "\u003cp\u003eA BMP image.\n\tFor an uncompressed image, the image data contains triples of BGR\n      component values. Each line may also have zero pad values on the end,\n      to bring them up to a multiple of 4 bytes in length.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "data",
        "fct-source": "src/Codec-BMP-Base.html#BMP",
        "fct-type": "data",
        "title": "BMP"
      },
      "index": {
        "description": "BMP image For an uncompressed image the image data contains triples of BGR component values Each line may also have zero pad values on the end to bring them up to multiple of bytes in length",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BMP",
        "normalized": "",
        "package": "bmp",
        "partial": "BMP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BitmapInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper for the various image header types.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "data",
        "fct-source": "src/Codec-BMP-BitmapInfo.html#BitmapInfo",
        "fct-type": "data",
        "title": "BitmapInfo"
      },
      "index": {
        "description": "wrapper for the various image header types",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BitmapInfo",
        "normalized": "",
        "package": "bmp",
        "partial": "Bitmap Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BitmapInfoV3",
      "description": {
        "fct-descr": "\u003cp\u003eDevice Independent Bitmap (DIB) header for Windows V3.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "data",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "data",
        "title": "BitmapInfoV3"
      },
      "index": {
        "description": "Device Independent Bitmap DIB header for Windows V3",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BitmapInfoV3",
        "normalized": "",
        "package": "bmp",
        "partial": "Bitmap Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BitmapInfoV4",
      "description": {
        "fct-descr": "\u003cp\u003eDevice Independent Bitmap (DIB) header for Windows V4 (95 and newer)\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "data",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "data",
        "title": "BitmapInfoV4"
      },
      "index": {
        "description": "Device Independent Bitmap DIB header for Windows V4 and newer",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BitmapInfoV4",
        "normalized": "",
        "package": "bmp",
        "partial": "Bitmap Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BitmapInfoV5",
      "description": {
        "fct-descr": "\u003cp\u003eDevice Independent Bitmap (DIB) header for Windows V5 (98/2000 and newer)\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "data",
        "fct-source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
        "fct-type": "data",
        "title": "BitmapInfoV5"
      },
      "index": {
        "description": "Device Independent Bitmap DIB header for Windows V5 and newer",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BitmapInfoV5",
        "normalized": "",
        "package": "bmp",
        "partial": "Bitmap Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:CIEXYZ",
      "description": {
        "fct-descr": "\u003cp\u003eContains the XYZ coordinates of a specific color in a specified color\n   space.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "data",
        "fct-source": "src/Codec-BMP-CIEXYZ.html#CIEXYZ",
        "fct-type": "data",
        "title": "CIEXYZ"
      },
      "index": {
        "description": "Contains the XYZ coordinates of specific color in specified color space",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "CIEXYZ",
        "normalized": "",
        "package": "bmp",
        "partial": "CIEXYZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:Compression",
      "description": {
        "fct-descr": "\u003cp\u003eThe Compression mode says how the image data is encoded in the file.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "data",
        "fct-source": "src/Codec-BMP-Compression.html#Compression",
        "fct-type": "data",
        "title": "Compression"
      },
      "index": {
        "description": "The Compression mode says how the image data is encoded in the file",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "Compression",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:Error",
      "description": {
        "fct-descr": "\u003cp\u003eThings that can go wrong when loading a BMP file.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "data",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "data",
        "title": "Error"
      },
      "index": {
        "description": "Things that can go wrong when loading BMP file",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "Error",
        "normalized": "",
        "package": "bmp",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:FileHeader",
      "description": {
        "fct-descr": "\u003cp\u003eBMP file header.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "data",
        "fct-source": "src/Codec-BMP-FileHeader.html#FileHeader",
        "fct-type": "data",
        "title": "FileHeader"
      },
      "index": {
        "description": "BMP file header",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "FileHeader",
        "normalized": "",
        "package": "bmp",
        "partial": "File Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:BMP",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BMP",
        "fct-source": "src/Codec-BMP-Base.html#BMP",
        "fct-type": "function",
        "title": "BMP"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BMP",
        "normalized": "",
        "package": "bmp",
        "partial": "BMP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:BitmapInfoV3",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BitmapInfoV3",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "BitmapInfoV3"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BitmapInfoV3",
        "normalized": "",
        "package": "bmp",
        "partial": "Bitmap Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:BitmapInfoV4",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BitmapInfoV4",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "BitmapInfoV4"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BitmapInfoV4",
        "normalized": "",
        "package": "bmp",
        "partial": "Bitmap Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:BitmapInfoV5",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BitmapInfoV5",
        "fct-source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
        "fct-type": "function",
        "title": "BitmapInfoV5"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "BitmapInfoV5",
        "normalized": "",
        "package": "bmp",
        "partial": "Bitmap Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CIEXYZ",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "CIEXYZ Word32 Word32 Word32",
        "fct-source": "src/Codec-BMP-CIEXYZ.html#CIEXYZ",
        "fct-type": "function",
        "title": "CIEXYZ"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "CIEXYZ",
        "normalized": "",
        "package": "bmp",
        "partial": "CIEXYZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionBitFields",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "CompressionBitFields",
        "fct-source": "src/Codec-BMP-Compression.html#Compression",
        "fct-type": "function",
        "title": "CompressionBitFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "CompressionBitFields",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression Bit Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionJPEG",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "CompressionJPEG",
        "fct-source": "src/Codec-BMP-Compression.html#Compression",
        "fct-type": "function",
        "title": "CompressionJPEG"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "CompressionJPEG",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression JPEG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionPNG",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "CompressionPNG",
        "fct-source": "src/Codec-BMP-Compression.html#Compression",
        "fct-type": "function",
        "title": "CompressionPNG"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "CompressionPNG",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression PNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionRGB",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "CompressionRGB",
        "fct-source": "src/Codec-BMP-Compression.html#Compression",
        "fct-type": "function",
        "title": "CompressionRGB"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "CompressionRGB",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionRLE4",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "CompressionRLE4",
        "fct-source": "src/Codec-BMP-Compression.html#Compression",
        "fct-type": "function",
        "title": "CompressionRLE4"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "CompressionRLE4",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression RLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionRLE8",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "CompressionRLE8",
        "fct-source": "src/Codec-BMP-Compression.html#Compression",
        "fct-type": "function",
        "title": "CompressionRLE8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "CompressionRLE8",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression RLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionUnknown",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "CompressionUnknown Word32",
        "fct-source": "src/Codec-BMP-Compression.html#Compression",
        "fct-type": "function",
        "title": "CompressionUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "CompressionUnknown",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorBadMagic",
      "description": {
        "fct-descr": "\u003cp\u003eMagic number was not at the start of the file, \n   so this probably isn't a BMP file.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorBadMagic",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorBadMagic"
      },
      "index": {
        "description": "Magic number was not at the start of the file so this probably isn BMP file",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorBadMagic",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Bad Magic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorDodgyFileHeaderFieldOffset",
      "description": {
        "fct-descr": "\u003cp\u003eThe offset to the image data from the file header doesn't\n   point anywhere sensible.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorDodgyFileHeaderFieldOffset",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorDodgyFileHeaderFieldOffset"
      },
      "index": {
        "description": "The offset to the image data from the file header doesn point anywhere sensible",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorDodgyFileHeaderFieldOffset",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Dodgy File Header Field Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorFileHeaderTruncated",
      "description": {
        "fct-descr": "\u003cp\u003eFile is too short to contain a file header.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorFileHeaderTruncated",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorFileHeaderTruncated"
      },
      "index": {
        "description": "File is too short to contain file header",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorFileHeaderTruncated",
        "normalized": "",
        "package": "bmp",
        "partial": "Error File Header Truncated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorImageDataTruncated",
      "description": {
        "fct-descr": "\u003cp\u003eFile is too short to contain the image data.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorImageDataTruncated",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorImageDataTruncated"
      },
      "index": {
        "description": "File is too short to contain the image data",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorImageDataTruncated",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Image Data Truncated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorImageHeaderTruncated",
      "description": {
        "fct-descr": "\u003cp\u003eFile is too short to contain an image header.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorImageHeaderTruncated",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorImageHeaderTruncated"
      },
      "index": {
        "description": "File is too short to contain an image header",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorImageHeaderTruncated",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Image Header Truncated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorImagePhysicalSizeMismatch",
      "description": {
        "fct-descr": "\u003cp\u003eMismatch between the image size stated in the header\n   and that which is calculuated from the other fields.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorImagePhysicalSizeMismatch",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorImagePhysicalSizeMismatch"
      },
      "index": {
        "description": "Mismatch between the image size stated in the header and that which is calculuated from the other fields",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorImagePhysicalSizeMismatch",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Image Physical Size Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorInternalErrorPleaseReport",
      "description": {
        "fct-descr": "\u003cp\u003eSomething went wrong in the library.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorInternalErrorPleaseReport",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorInternalErrorPleaseReport"
      },
      "index": {
        "description": "Something went wrong in the library",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorInternalErrorPleaseReport",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Internal Error Please Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorReservedFieldNotZero",
      "description": {
        "fct-descr": "\u003cp\u003eReserved fields should be zero.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorReservedFieldNotZero",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorReservedFieldNotZero"
      },
      "index": {
        "description": "Reserved fields should be zero",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorReservedFieldNotZero",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Reserved Field Not Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorUnhandledBitmapHeaderSize",
      "description": {
        "fct-descr": "\u003cp\u003eWe handle V3 V4 and V5 image headers, but the size of \n   the header indicates it has some other format.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorUnhandledBitmapHeaderSize",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorUnhandledBitmapHeaderSize"
      },
      "index": {
        "description": "We handle V3 V4 and V5 image headers but the size of the header indicates it has some other format",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorUnhandledBitmapHeaderSize",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Unhandled Bitmap Header Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorUnhandledColorDepth",
      "description": {
        "fct-descr": "\u003cp\u003eWe only handle 24 and 32 bit images.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorUnhandledColorDepth",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorUnhandledColorDepth"
      },
      "index": {
        "description": "We only handle and bit images",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorUnhandledColorDepth",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Unhandled Color Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorUnhandledCompressionMode",
      "description": {
        "fct-descr": "\u003cp\u003eWe only handle uncompressed images.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorUnhandledCompressionMode",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorUnhandledCompressionMode"
      },
      "index": {
        "description": "We only handle uncompressed images",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorUnhandledCompressionMode",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Unhandled Compression Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorUnhandledPlanesCount",
      "description": {
        "fct-descr": "\u003cp\u003eWe only handle single color planes.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ErrorUnhandledPlanesCount",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorUnhandledPlanesCount"
      },
      "index": {
        "description": "We only handle single color planes",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "ErrorUnhandledPlanesCount",
        "normalized": "",
        "package": "bmp",
        "partial": "Error Unhandled Planes Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:FileHeader",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "FileHeader",
        "fct-source": "src/Codec-BMP-FileHeader.html#FileHeader",
        "fct-type": "function",
        "title": "FileHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "FileHeader",
        "normalized": "",
        "package": "bmp",
        "partial": "File Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:InfoV3",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "InfoV3 BitmapInfoV3",
        "fct-source": "src/Codec-BMP-BitmapInfo.html#BitmapInfo",
        "fct-type": "function",
        "title": "InfoV3"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "InfoV3",
        "normalized": "",
        "package": "bmp",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:InfoV4",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "InfoV4 BitmapInfoV4",
        "fct-source": "src/Codec-BMP-BitmapInfo.html#BitmapInfo",
        "fct-type": "function",
        "title": "InfoV4"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "InfoV4",
        "normalized": "",
        "package": "bmp",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:InfoV5",
      "description": {
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "InfoV5 BitmapInfoV5",
        "fct-source": "src/Codec-BMP-BitmapInfo.html#BitmapInfo",
        "fct-type": "function",
        "title": "InfoV5"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "InfoV5",
        "normalized": "",
        "package": "bmp",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:bmpBitmapInfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BitmapInfo",
        "fct-source": "src/Codec-BMP-Base.html#BMP",
        "fct-type": "function",
        "title": "bmpBitmapInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "bmpBitmapInfo",
        "normalized": "",
        "package": "bmp",
        "partial": "Bitmap Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:bmpDimensions",
      "description": {
        "fct-descr": "\u003cp\u003eGet the width and height of an image.\n\tIt's better to use this function than to access the headers directly.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BMP -\u003e (Int, Int)",
        "fct-source": "src/Codec-BMP.html#bmpDimensions",
        "fct-type": "function",
        "title": "bmpDimensions"
      },
      "index": {
        "description": "Get the width and height of an image It better to use this function than to access the headers directly",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "bmpDimensions",
        "normalized": "BMP-\u003e(Int,Int)",
        "package": "bmp",
        "partial": "Dimensions",
        "signature": "BMP-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:bmpFileHeader",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "FileHeader",
        "fct-source": "src/Codec-BMP-Base.html#BMP",
        "fct-type": "function",
        "title": "bmpFileHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "bmpFileHeader",
        "normalized": "",
        "package": "bmp",
        "partial": "File Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:bmpRawImageData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ByteString",
        "fct-source": "src/Codec-BMP-Base.html#BMP",
        "fct-type": "function",
        "title": "bmpRawImageData"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "bmpRawImageData",
        "normalized": "",
        "package": "bmp",
        "partial": "Raw Image Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3BitCount",
      "description": {
        "fct-descr": "\u003cp\u003e(+14) Number of bits per pixel.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word16",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3BitCount"
      },
      "index": {
        "description": "Number of bits per pixel",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3BitCount",
        "normalized": "",
        "package": "bmp",
        "partial": "Bit Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3ColorsImportant",
      "description": {
        "fct-descr": "\u003cp\u003e(+36) Number of significant colors.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3ColorsImportant"
      },
      "index": {
        "description": "Number of significant colors",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3ColorsImportant",
        "normalized": "",
        "package": "bmp",
        "partial": "Colors Important",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3ColorsUsed",
      "description": {
        "fct-descr": "\u003cp\u003e(+32) Number of color entries that are used.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3ColorsUsed"
      },
      "index": {
        "description": "Number of color entries that are used",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3ColorsUsed",
        "normalized": "",
        "package": "bmp",
        "partial": "Colors Used",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Compression",
      "description": {
        "fct-descr": "\u003cp\u003e(+16) Image compression mode.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Compression",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3Compression"
      },
      "index": {
        "description": "Image compression mode",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3Compression",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Height",
      "description": {
        "fct-descr": "\u003cp\u003e(+8) Height of the image, in pixels.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3Height"
      },
      "index": {
        "description": "Height of the image in pixels",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3Height",
        "normalized": "",
        "package": "bmp",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3HeightFlipped",
      "description": {
        "fct-descr": "\u003cp\u003eIf the height field in the file is negative then this is interpreted\n   as an image with the rows flipped.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Bool",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3HeightFlipped"
      },
      "index": {
        "description": "If the height field in the file is negative then this is interpreted as an image with the rows flipped",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3HeightFlipped",
        "normalized": "",
        "package": "bmp",
        "partial": "Height Flipped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3ImageSize",
      "description": {
        "fct-descr": "\u003cp\u003e(+20) Size of raw image data.\n   Some encoders set this to zero, so we need to calculate it based\n   on the overall file size.\n\u003c/p\u003e\u003cp\u003eIf it is non-zero then we check it matches the file size - header\n   size.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3ImageSize"
      },
      "index": {
        "description": "Size of raw image data Some encoders set this to zero so we need to calculate it based on the overall file size If it is non-zero then we check it matches the file size header size",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3ImageSize",
        "normalized": "",
        "package": "bmp",
        "partial": "Image Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3PelsPerMeterX",
      "description": {
        "fct-descr": "\u003cp\u003e(+24) Prefered resolution in pixels per meter, along the X axis.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3PelsPerMeterX"
      },
      "index": {
        "description": "Prefered resolution in pixels per meter along the axis",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3PelsPerMeterX",
        "normalized": "",
        "package": "bmp",
        "partial": "Pels Per Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3PelsPerMeterY",
      "description": {
        "fct-descr": "\u003cp\u003e(+28) Prefered resolution in pixels per meter, along the Y axis.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3PelsPerMeterY"
      },
      "index": {
        "description": "Prefered resolution in pixels per meter along the axis",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3PelsPerMeterY",
        "normalized": "",
        "package": "bmp",
        "partial": "Pels Per Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Planes",
      "description": {
        "fct-descr": "\u003cp\u003e(+12) Number of color planes.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word16",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3Planes"
      },
      "index": {
        "description": "Number of color planes",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3Planes",
        "normalized": "",
        "package": "bmp",
        "partial": "Planes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Size",
      "description": {
        "fct-descr": "\u003cp\u003e(+0) Size of the image header, in bytes.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3Size"
      },
      "index": {
        "description": "Size of the image header in bytes",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3Size",
        "normalized": "",
        "package": "bmp",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Width",
      "description": {
        "fct-descr": "\u003cp\u003e(+4) Width of the image, in pixels.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
        "fct-type": "function",
        "title": "dib3Width"
      },
      "index": {
        "description": "Width of the image in pixels",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib3Width",
        "normalized": "",
        "package": "bmp",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4AlphaMask",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4AlphaMask"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4AlphaMask",
        "normalized": "",
        "package": "bmp",
        "partial": "Alpha Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4BlueMask",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4BlueMask"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4BlueMask",
        "normalized": "",
        "package": "bmp",
        "partial": "Blue Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4ColorSpaceType",
      "description": {
        "fct-descr": "\u003cp\u003eThe color space used by the image.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4ColorSpaceType"
      },
      "index": {
        "description": "The color space used by the image",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4ColorSpaceType",
        "normalized": "",
        "package": "bmp",
        "partial": "Color Space Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4Endpoints",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies the XYZ coords of the three colors that correspond to\n   the RGB endpoints for the logical color space associated with the\n   bitmap. Only used when ColorSpaceType specifies a calibrated image.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "(CIEXYZ, CIEXYZ, CIEXYZ)",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4Endpoints"
      },
      "index": {
        "description": "Specifies the XYZ coords of the three colors that correspond to the RGB endpoints for the logical color space associated with the bitmap Only used when ColorSpaceType specifies calibrated image",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4Endpoints",
        "normalized": "(CIEXYZ,CIEXYZ,CIEXYZ)",
        "package": "bmp",
        "partial": "Endpoints",
        "signature": "(CIEXYZ,CIEXYZ,CIEXYZ)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4GammaBlue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4GammaBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4GammaBlue",
        "normalized": "",
        "package": "bmp",
        "partial": "Gamma Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4GammaGreen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4GammaGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4GammaGreen",
        "normalized": "",
        "package": "bmp",
        "partial": "Gamma Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4GammaRed",
      "description": {
        "fct-descr": "\u003cp\u003eToned response curves for each component. \n   Only used when the ColorSpaceType specifies a calibrated image.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4GammaRed"
      },
      "index": {
        "description": "Toned response curves for each component Only used when the ColorSpaceType specifies calibrated image",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4GammaRed",
        "normalized": "",
        "package": "bmp",
        "partial": "Gamma Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4GreenMask",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4GreenMask"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4GreenMask",
        "normalized": "",
        "package": "bmp",
        "partial": "Green Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4InfoV3",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the image header, in bytes.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BitmapInfoV3",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4InfoV3"
      },
      "index": {
        "description": "Size of the image header in bytes",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4InfoV3",
        "normalized": "",
        "package": "bmp",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4RedMask",
      "description": {
        "fct-descr": "\u003cp\u003eColor masks specify components of each pixel.\n   Only used with the bitfields compression mode.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
        "fct-type": "function",
        "title": "dib4RedMask"
      },
      "index": {
        "description": "Color masks specify components of each pixel Only used with the bitfields compression mode",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib4RedMask",
        "normalized": "",
        "package": "bmp",
        "partial": "Red Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5InfoV4",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BitmapInfoV4",
        "fct-source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
        "fct-type": "function",
        "title": "dib5InfoV4"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib5InfoV4",
        "normalized": "",
        "package": "bmp",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5Intent",
      "description": {
        "fct-descr": "\u003cp\u003eRendering intent for the bitmap.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
        "fct-type": "function",
        "title": "dib5Intent"
      },
      "index": {
        "description": "Rendering intent for the bitmap",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib5Intent",
        "normalized": "",
        "package": "bmp",
        "partial": "Intent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5ProfileData",
      "description": {
        "fct-descr": "\u003cp\u003eOffset (in bytes) from the beginning of the header to the start\n   of the profile data.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
        "fct-type": "function",
        "title": "dib5ProfileData"
      },
      "index": {
        "description": "Offset in bytes from the beginning of the header to the start of the profile data",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib5ProfileData",
        "normalized": "",
        "package": "bmp",
        "partial": "Profile Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5ProfileSize",
      "description": {
        "fct-descr": "\u003cp\u003eSize (in bytes) of embedded profile data.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
        "fct-type": "function",
        "title": "dib5ProfileSize"
      },
      "index": {
        "description": "Size in bytes of embedded profile data",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib5ProfileSize",
        "normalized": "",
        "package": "bmp",
        "partial": "Profile Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5Reserved",
      "description": {
        "fct-descr": "\u003cp\u003eReserved, should be zero.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
        "fct-type": "function",
        "title": "dib5Reserved"
      },
      "index": {
        "description": "Reserved should be zero",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "dib5Reserved",
        "normalized": "",
        "package": "bmp",
        "partial": "Reserved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorBitmapHeaderSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorBitmapHeaderSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorBitmapHeaderSize",
        "normalized": "",
        "package": "bmp",
        "partial": "Bitmap Header Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorBytesAvailable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Int",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorBytesAvailable"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorBytesAvailable",
        "normalized": "",
        "package": "bmp",
        "partial": "Bytes Available",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorBytesNeeded",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Int",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorBytesNeeded"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorBytesNeeded",
        "normalized": "",
        "package": "bmp",
        "partial": "Bytes Needed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorColorDepth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word16",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorColorDepth"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorColorDepth",
        "normalized": "",
        "package": "bmp",
        "partial": "Color Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorCompression",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Compression",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorCompression"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorCompression",
        "normalized": "",
        "package": "bmp",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorFileHeaderOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorFileHeaderOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorFileHeaderOffset",
        "normalized": "",
        "package": "bmp",
        "partial": "File Header Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorImageSizeFromHeader",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorImageSizeFromHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorImageSizeFromHeader",
        "normalized": "",
        "package": "bmp",
        "partial": "Image Size From Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorImageSizeOfBuffer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorImageSizeOfBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorImageSizeOfBuffer",
        "normalized": "",
        "package": "bmp",
        "partial": "Image Size Of Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorMagic",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word16",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorMagic"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorMagic",
        "normalized": "",
        "package": "bmp",
        "partial": "Magic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorPlanesCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word16",
        "fct-source": "src/Codec-BMP-Error.html#Error",
        "fct-type": "function",
        "title": "errorPlanesCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "errorPlanesCount",
        "normalized": "",
        "package": "bmp",
        "partial": "Planes Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderFileSize",
      "description": {
        "fct-descr": "\u003cp\u003e(+2) Size of the file, in bytes.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-FileHeader.html#FileHeader",
        "fct-type": "function",
        "title": "fileHeaderFileSize"
      },
      "index": {
        "description": "Size of the file in bytes",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "fileHeaderFileSize",
        "normalized": "",
        "package": "bmp",
        "partial": "Header File Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderOffset",
      "description": {
        "fct-descr": "\u003cp\u003e(+10) Offset in bytes to the start of the pixel data.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word32",
        "fct-source": "src/Codec-BMP-FileHeader.html#FileHeader",
        "fct-type": "function",
        "title": "fileHeaderOffset"
      },
      "index": {
        "description": "Offset in bytes to the start of the pixel data",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "fileHeaderOffset",
        "normalized": "",
        "package": "bmp",
        "partial": "Header Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderReserved1",
      "description": {
        "fct-descr": "\u003cp\u003e(+6) Reserved, must be zero.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word16",
        "fct-source": "src/Codec-BMP-FileHeader.html#FileHeader",
        "fct-type": "function",
        "title": "fileHeaderReserved1"
      },
      "index": {
        "description": "Reserved must be zero",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "fileHeaderReserved1",
        "normalized": "",
        "package": "bmp",
        "partial": "Header Reserved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderReserved2",
      "description": {
        "fct-descr": "\u003cp\u003e(+8) Reserved, must be zero.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word16",
        "fct-source": "src/Codec-BMP-FileHeader.html#FileHeader",
        "fct-type": "function",
        "title": "fileHeaderReserved2"
      },
      "index": {
        "description": "Reserved must be zero",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "fileHeaderReserved2",
        "normalized": "",
        "package": "bmp",
        "partial": "Header Reserved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderType",
      "description": {
        "fct-descr": "\u003cp\u003e(+0) Magic numbers 0x42 0x4d\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Word16",
        "fct-source": "src/Codec-BMP-FileHeader.html#FileHeader",
        "fct-type": "function",
        "title": "fileHeaderType"
      },
      "index": {
        "description": "Magic numbers x42 x4d",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "fileHeaderType",
        "normalized": "",
        "package": "bmp",
        "partial": "Header Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:hGetBMP",
      "description": {
        "fct-descr": "\u003cp\u003eGet a BMP image from a file handle.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Handle -\u003e IO (Either Error BMP)",
        "fct-source": "src/Codec-BMP.html#hGetBMP",
        "fct-type": "function",
        "title": "hGetBMP"
      },
      "index": {
        "description": "Get BMP image from file handle",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "hGetBMP",
        "normalized": "Handle-\u003eIO(Either Error BMP)",
        "package": "bmp",
        "partial": "Get BMP",
        "signature": "Handle-\u003eIO(Either Error BMP)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:hPutBMP",
      "description": {
        "fct-descr": "\u003cp\u003ePut a BMP image to a file handle.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Handle -\u003e BMP -\u003e IO ()",
        "fct-source": "src/Codec-BMP.html#hPutBMP",
        "fct-type": "function",
        "title": "hPutBMP"
      },
      "index": {
        "description": "Put BMP image to file handle",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "hPutBMP",
        "normalized": "Handle-\u003eBMP-\u003eIO()",
        "package": "bmp",
        "partial": "Put BMP",
        "signature": "Handle-\u003eBMP-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:packRGBA32ToBMP",
      "description": {
        "fct-descr": "\u003cp\u003ePack a string of RGBA component values into a 32-bit BMP image.\n\u003c/p\u003e\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003epackRGBA32ToBMP32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Int-\u003e Int-\u003e ByteString-\u003e BMP",
        "fct-type": "function",
        "title": "packRGBA32ToBMP"
      },
      "index": {
        "description": "Pack string of RGBA component values into bit BMP image Alias for packRGBA32ToBMP32",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "packRGBA32ToBMP",
        "normalized": "Int-\u003eInt-\u003eByteString-\u003eBMP",
        "package": "bmp",
        "partial": "RGBA To BMP",
        "signature": "Int-\u003eInt-\u003eByteString-\u003eBMP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:packRGBA32ToBMP24",
      "description": {
        "fct-descr": "\u003cp\u003ePack a string of RGBA component values into a 24-bit BMP image,\n   discarding the alpha channel of the source data.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the given dimensions don't match the input string then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If the width or height fields are negative then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Int-\u003e Int-\u003e ByteString-\u003e BMP",
        "fct-type": "function",
        "title": "packRGBA32ToBMP24"
      },
      "index": {
        "description": "Pack string of RGBA component values into bit BMP image discarding the alpha channel of the source data If the given dimensions don match the input string then error If the width or height fields are negative then error",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "packRGBA32ToBMP24",
        "normalized": "Int-\u003eInt-\u003eByteString-\u003eBMP",
        "package": "bmp",
        "partial": "RGBA To BMP",
        "signature": "Int-\u003eInt-\u003eByteString-\u003eBMP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:packRGBA32ToBMP32",
      "description": {
        "fct-descr": "\u003cp\u003ePack a string of RGBA component values into a 32-bit BMP image.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the given dimensions don't match the input string then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If the width or height fields are negative then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "Int-\u003e Int-\u003e ByteString-\u003e BMP",
        "fct-type": "function",
        "title": "packRGBA32ToBMP32"
      },
      "index": {
        "description": "Pack string of RGBA component values into bit BMP image If the given dimensions don match the input string then error If the width or height fields are negative then error",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "packRGBA32ToBMP32",
        "normalized": "Int-\u003eInt-\u003eByteString-\u003eBMP",
        "package": "bmp",
        "partial": "RGBA To BMP",
        "signature": "Int-\u003eInt-\u003eByteString-\u003eBMP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:parseBMP",
      "description": {
        "fct-descr": "\u003cp\u003eParse a BMP image from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "ByteString -\u003e Either Error BMP",
        "fct-source": "src/Codec-BMP.html#parseBMP",
        "fct-type": "function",
        "title": "parseBMP"
      },
      "index": {
        "description": "Parse BMP image from lazy ByteString",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "parseBMP",
        "normalized": "ByteString-\u003eEither Error BMP",
        "package": "bmp",
        "partial": "BMP",
        "signature": "ByteString-\u003eEither Error BMP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:readBMP",
      "description": {
        "fct-descr": "\u003cp\u003eRead a BMP from a file.\n      The file is checked for problems and unsupported features when read.\n      If there is anything wrong this gives an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "FilePath -\u003e IO (Either Error BMP)",
        "fct-source": "src/Codec-BMP.html#readBMP",
        "fct-type": "function",
        "title": "readBMP"
      },
      "index": {
        "description": "Read BMP from file The file is checked for problems and unsupported features when read If there is anything wrong this gives an Error instead",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "readBMP",
        "normalized": "FilePath-\u003eIO(Either Error BMP)",
        "package": "bmp",
        "partial": "BMP",
        "signature": "FilePath-\u003eIO(Either Error BMP)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:renderBMP",
      "description": {
        "fct-descr": "\u003cp\u003eRender a BMP image to a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BMP -\u003e ByteString",
        "fct-source": "src/Codec-BMP.html#renderBMP",
        "fct-type": "function",
        "title": "renderBMP"
      },
      "index": {
        "description": "Render BMP image to lazy ByteString",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "renderBMP",
        "normalized": "BMP-\u003eByteString",
        "package": "bmp",
        "partial": "BMP",
        "signature": "BMP-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:unpackBMPToRGBA32",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack a BMP image to a string of RGBA component values.\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "BMP -\u003e ByteString",
        "fct-source": "src/Codec-BMP-Unpack.html#unpackBMPToRGBA32",
        "fct-type": "function",
        "title": "unpackBMPToRGBA32"
      },
      "index": {
        "description": "Unpack BMP image to string of RGBA component values",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "unpackBMPToRGBA32",
        "normalized": "BMP-\u003eByteString",
        "package": "bmp",
        "partial": "BMPTo RGBA",
        "signature": "BMP-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:writeBMP",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003ehPutBMP\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.BMP",
        "fct-package": "bmp",
        "fct-signature": "FilePath -\u003e BMP -\u003e IO ()",
        "fct-source": "src/Codec-BMP.html#writeBMP",
        "fct-type": "function",
        "title": "writeBMP"
      },
      "index": {
        "description": "Wrapper for hPutBMP",
        "hierarchy": "Codec BMP",
        "module": "Codec.BMP",
        "name": "writeBMP",
        "normalized": "FilePath-\u003eBMP-\u003eIO()",
        "package": "bmp",
        "partial": "BMP",
        "signature": "FilePath-\u003eBMP-\u003eIO()"
      }
    }
  }
]