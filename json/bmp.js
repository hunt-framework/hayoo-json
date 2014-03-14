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
        "word": "bmp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReading and writing uncompressed BMP files.\n\u003c/p\u003e\u003cp\u003eSupports uncompressed 24bit RGB and 32bit RGBA\n      WindowsV3, WindowsV4 and WindowsV5 formats.\n\u003c/p\u003e\u003cp\u003eWe don't support the plain OS/2 BitmapCoreHeader\n       and BitmapCoreHeader2 image headers, but I haven't yet seen one of\n       these in the wild.\n\u003c/p\u003e\u003cp\u003eTo write a file do something like:\n\u003c/p\u003e\u003cpre\u003e do let rgba   = Data.ByteString.pack [some list of Word8s]\n    let bmp    = packRGBA32ToBMP width height rgba\n    writeBMP fileName bmp\n\u003c/pre\u003e\u003cp\u003eTo read a file do something like:\n\u003c/p\u003e\u003cpre\u003e do Right bmp  \u003c- readBMP fileName\n    let rgba   =  unpackBMPToRGBA32 bmp\n    let (width, height) = bmpDimensions bmp\n    ... \n\u003c/pre\u003e\u003cp\u003eRelease Notes:\n\u003c/p\u003e\u003cpre\u003e  * bmp 1.2.5\n    Add support for writing uncompressed 32-bit files.\n\n  * bmp 1.2.4\n    Update to use binary 0.6.\n\n  * bmp 1.2.3\n    Add pure parseBMP / renderBMP API.\n\n  * bmp 1.2.2\n    Allow the physical image buffer to be larger than the image\n     size stated in the header, to accept output of foolish Win7 codec.\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Codec.BMP",
          "name": "BMP",
          "package": "bmp",
          "source": "src/Codec-BMP.html",
          "type": "module"
        },
        "index": {
          "description": "Reading and writing uncompressed BMP files Supports uncompressed bit RGB and bit RGBA WindowsV3 WindowsV4 and WindowsV5 formats We don support the plain OS BitmapCoreHeader and BitmapCoreHeader2 image headers but haven yet seen one of these in the wild To write file do something like do let rgba Data.ByteString.pack some list of Word8s let bmp packRGBA32ToBMP width height rgba writeBMP fileName bmp To read file do something like do Right bmp readBMP fileName let rgba unpackBMPToRGBA32 bmp let width height bmpDimensions bmp Release Notes bmp Add support for writing uncompressed bit files bmp Update to use binary bmp Add pure parseBMP renderBMP API bmp Allow the physical image buffer to be larger than the image size stated in the header to accept output of foolish Win7 codec",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BMP",
          "package": "bmp",
          "partial": "BMP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA BMP image.\n\tFor an uncompressed image, the image data contains triples of BGR\n      component values. Each line may also have zero pad values on the end,\n      to bring them up to a multiple of 4 bytes in length.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "BMP",
          "package": "bmp",
          "source": "src/Codec-BMP-Base.html#BMP",
          "type": "data"
        },
        "index": {
          "description": "BMP image For an uncompressed image the image data contains triples of BGR component values Each line may also have zero pad values on the end to bring them up to multiple of bytes in length",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BMP",
          "package": "bmp",
          "partial": "BMP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for the various image header types.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "BitmapInfo",
          "package": "bmp",
          "source": "src/Codec-BMP-BitmapInfo.html#BitmapInfo",
          "type": "data"
        },
        "index": {
          "description": "wrapper for the various image header types",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BitmapInfo",
          "package": "bmp",
          "partial": "Bitmap Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BitmapInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevice Independent Bitmap (DIB) header for Windows V3.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "BitmapInfoV3",
          "package": "bmp",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "data"
        },
        "index": {
          "description": "Device Independent Bitmap DIB header for Windows V3",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BitmapInfoV3",
          "package": "bmp",
          "partial": "Bitmap Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BitmapInfoV3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevice Independent Bitmap (DIB) header for Windows V4 (95 and newer)\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "BitmapInfoV4",
          "package": "bmp",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "data"
        },
        "index": {
          "description": "Device Independent Bitmap DIB header for Windows V4 and newer",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BitmapInfoV4",
          "package": "bmp",
          "partial": "Bitmap Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BitmapInfoV4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevice Independent Bitmap (DIB) header for Windows V5 (98/2000 and newer)\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "BitmapInfoV5",
          "package": "bmp",
          "source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
          "type": "data"
        },
        "index": {
          "description": "Device Independent Bitmap DIB header for Windows V5 and newer",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BitmapInfoV5",
          "package": "bmp",
          "partial": "Bitmap Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:BitmapInfoV5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains the XYZ coordinates of a specific color in a specified color\n   space.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "CIEXYZ",
          "package": "bmp",
          "source": "src/Codec-BMP-CIEXYZ.html#CIEXYZ",
          "type": "data"
        },
        "index": {
          "description": "Contains the XYZ coordinates of specific color in specified color space",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "CIEXYZ",
          "package": "bmp",
          "partial": "CIEXYZ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:CIEXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Compression mode says how the image data is encoded in the file.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "Compression",
          "package": "bmp",
          "source": "src/Codec-BMP-Compression.html#Compression",
          "type": "data"
        },
        "index": {
          "description": "The Compression mode says how the image data is encoded in the file",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "Compression",
          "package": "bmp",
          "partial": "Compression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:Compression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThings that can go wrong when loading a BMP file.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "Error",
          "package": "bmp",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "data"
        },
        "index": {
          "description": "Things that can go wrong when loading BMP file",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "Error",
          "package": "bmp",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBMP file header.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "FileHeader",
          "package": "bmp",
          "source": "src/Codec-BMP-FileHeader.html#FileHeader",
          "type": "data"
        },
        "index": {
          "description": "BMP file header",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "FileHeader",
          "package": "bmp",
          "partial": "File Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#t:FileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "BMP",
          "package": "bmp",
          "signature": "BMP",
          "source": "src/Codec-BMP-Base.html#BMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BMP",
          "package": "bmp",
          "partial": "BMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:BMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "BitmapInfoV3",
          "package": "bmp",
          "signature": "BitmapInfoV3",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BitmapInfoV3",
          "package": "bmp",
          "partial": "Bitmap Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:BitmapInfoV3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "BitmapInfoV4",
          "package": "bmp",
          "signature": "BitmapInfoV4",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BitmapInfoV4",
          "package": "bmp",
          "partial": "Bitmap Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:BitmapInfoV4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "BitmapInfoV5",
          "package": "bmp",
          "signature": "BitmapInfoV5",
          "source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "BitmapInfoV5",
          "package": "bmp",
          "partial": "Bitmap Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:BitmapInfoV5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "CIEXYZ",
          "package": "bmp",
          "signature": "CIEXYZ Word32 Word32 Word32",
          "source": "src/Codec-BMP-CIEXYZ.html#CIEXYZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "CIEXYZ",
          "package": "bmp",
          "partial": "CIEXYZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CIEXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "CompressionBitFields",
          "package": "bmp",
          "signature": "CompressionBitFields",
          "source": "src/Codec-BMP-Compression.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "CompressionBitFields",
          "package": "bmp",
          "partial": "Compression Bit Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionBitFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "CompressionJPEG",
          "package": "bmp",
          "signature": "CompressionJPEG",
          "source": "src/Codec-BMP-Compression.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "CompressionJPEG",
          "package": "bmp",
          "partial": "Compression JPEG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionJPEG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "CompressionPNG",
          "package": "bmp",
          "signature": "CompressionPNG",
          "source": "src/Codec-BMP-Compression.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "CompressionPNG",
          "package": "bmp",
          "partial": "Compression PNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionPNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "CompressionRGB",
          "package": "bmp",
          "signature": "CompressionRGB",
          "source": "src/Codec-BMP-Compression.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "CompressionRGB",
          "package": "bmp",
          "partial": "Compression RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "CompressionRLE4",
          "package": "bmp",
          "signature": "CompressionRLE4",
          "source": "src/Codec-BMP-Compression.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "CompressionRLE4",
          "package": "bmp",
          "partial": "Compression RLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionRLE4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "CompressionRLE8",
          "package": "bmp",
          "signature": "CompressionRLE8",
          "source": "src/Codec-BMP-Compression.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "CompressionRLE8",
          "package": "bmp",
          "partial": "Compression RLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionRLE8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "CompressionUnknown",
          "package": "bmp",
          "signature": "CompressionUnknown Word32",
          "source": "src/Codec-BMP-Compression.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "CompressionUnknown",
          "package": "bmp",
          "partial": "Compression Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:CompressionUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMagic number was not at the start of the file, \n   so this probably isn't a BMP file.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorBadMagic",
          "package": "bmp",
          "signature": "ErrorBadMagic",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Magic number was not at the start of the file so this probably isn BMP file",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorBadMagic",
          "package": "bmp",
          "partial": "Error Bad Magic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorBadMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe offset to the image data from the file header doesn't\n   point anywhere sensible.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorDodgyFileHeaderFieldOffset",
          "package": "bmp",
          "signature": "ErrorDodgyFileHeaderFieldOffset",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "The offset to the image data from the file header doesn point anywhere sensible",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorDodgyFileHeaderFieldOffset",
          "package": "bmp",
          "partial": "Error Dodgy File Header Field Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorDodgyFileHeaderFieldOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile is too short to contain a file header.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorFileHeaderTruncated",
          "package": "bmp",
          "signature": "ErrorFileHeaderTruncated",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "File is too short to contain file header",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorFileHeaderTruncated",
          "package": "bmp",
          "partial": "Error File Header Truncated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorFileHeaderTruncated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile is too short to contain the image data.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorImageDataTruncated",
          "package": "bmp",
          "signature": "ErrorImageDataTruncated",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "File is too short to contain the image data",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorImageDataTruncated",
          "package": "bmp",
          "partial": "Error Image Data Truncated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorImageDataTruncated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile is too short to contain an image header.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorImageHeaderTruncated",
          "package": "bmp",
          "signature": "ErrorImageHeaderTruncated",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "File is too short to contain an image header",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorImageHeaderTruncated",
          "package": "bmp",
          "partial": "Error Image Header Truncated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorImageHeaderTruncated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMismatch between the image size stated in the header\n   and that which is calculuated from the other fields.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorImagePhysicalSizeMismatch",
          "package": "bmp",
          "signature": "ErrorImagePhysicalSizeMismatch",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Mismatch between the image size stated in the header and that which is calculuated from the other fields",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorImagePhysicalSizeMismatch",
          "package": "bmp",
          "partial": "Error Image Physical Size Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorImagePhysicalSizeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething went wrong in the library.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorInternalErrorPleaseReport",
          "package": "bmp",
          "signature": "ErrorInternalErrorPleaseReport",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Something went wrong in the library",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorInternalErrorPleaseReport",
          "package": "bmp",
          "partial": "Error Internal Error Please Report",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorInternalErrorPleaseReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved fields should be zero.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorReservedFieldNotZero",
          "package": "bmp",
          "signature": "ErrorReservedFieldNotZero",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Reserved fields should be zero",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorReservedFieldNotZero",
          "package": "bmp",
          "partial": "Error Reserved Field Not Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorReservedFieldNotZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe handle V3 V4 and V5 image headers, but the size of \n   the header indicates it has some other format.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorUnhandledBitmapHeaderSize",
          "package": "bmp",
          "signature": "ErrorUnhandledBitmapHeaderSize",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "We handle V3 V4 and V5 image headers but the size of the header indicates it has some other format",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorUnhandledBitmapHeaderSize",
          "package": "bmp",
          "partial": "Error Unhandled Bitmap Header Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorUnhandledBitmapHeaderSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe only handle 24 and 32 bit images.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorUnhandledColorDepth",
          "package": "bmp",
          "signature": "ErrorUnhandledColorDepth",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "We only handle and bit images",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorUnhandledColorDepth",
          "package": "bmp",
          "partial": "Error Unhandled Color Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorUnhandledColorDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe only handle uncompressed images.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorUnhandledCompressionMode",
          "package": "bmp",
          "signature": "ErrorUnhandledCompressionMode",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "We only handle uncompressed images",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorUnhandledCompressionMode",
          "package": "bmp",
          "partial": "Error Unhandled Compression Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorUnhandledCompressionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe only handle single color planes.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "ErrorUnhandledPlanesCount",
          "package": "bmp",
          "signature": "ErrorUnhandledPlanesCount",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "We only handle single color planes",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "ErrorUnhandledPlanesCount",
          "package": "bmp",
          "partial": "Error Unhandled Planes Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:ErrorUnhandledPlanesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "FileHeader",
          "package": "bmp",
          "signature": "FileHeader",
          "source": "src/Codec-BMP-FileHeader.html#FileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "FileHeader",
          "package": "bmp",
          "partial": "File Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:FileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "InfoV3",
          "package": "bmp",
          "signature": "InfoV3 BitmapInfoV3",
          "source": "src/Codec-BMP-BitmapInfo.html#BitmapInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "InfoV3",
          "package": "bmp",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:InfoV3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "InfoV4",
          "package": "bmp",
          "signature": "InfoV4 BitmapInfoV4",
          "source": "src/Codec-BMP-BitmapInfo.html#BitmapInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "InfoV4",
          "package": "bmp",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:InfoV4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "InfoV5",
          "package": "bmp",
          "signature": "InfoV5 BitmapInfoV5",
          "source": "src/Codec-BMP-BitmapInfo.html#BitmapInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "InfoV5",
          "package": "bmp",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:InfoV5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "bmpBitmapInfo",
          "package": "bmp",
          "signature": "BitmapInfo",
          "source": "src/Codec-BMP-Base.html#BMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "bmpBitmapInfo",
          "package": "bmp",
          "partial": "Bitmap Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:bmpBitmapInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the width and height of an image.\n\tIt's better to use this function than to access the headers directly.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "bmpDimensions",
          "package": "bmp",
          "signature": "BMP -\u003e (Int, Int)",
          "source": "src/Codec-BMP.html#bmpDimensions",
          "type": "function"
        },
        "index": {
          "description": "Get the width and height of an image It better to use this function than to access the headers directly",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "bmpDimensions",
          "normalized": "BMP-\u003e(Int,Int)",
          "package": "bmp",
          "partial": "Dimensions",
          "signature": "BMP-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:bmpDimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "bmpFileHeader",
          "package": "bmp",
          "signature": "FileHeader",
          "source": "src/Codec-BMP-Base.html#BMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "bmpFileHeader",
          "package": "bmp",
          "partial": "File Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:bmpFileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "bmpRawImageData",
          "package": "bmp",
          "signature": "ByteString",
          "source": "src/Codec-BMP-Base.html#BMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "bmpRawImageData",
          "package": "bmp",
          "partial": "Raw Image Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:bmpRawImageData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+14) Number of bits per pixel.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3BitCount",
          "package": "bmp",
          "signature": "Word16",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Number of bits per pixel",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3BitCount",
          "package": "bmp",
          "partial": "Bit Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3BitCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+36) Number of significant colors.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3ColorsImportant",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Number of significant colors",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3ColorsImportant",
          "package": "bmp",
          "partial": "Colors Important",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3ColorsImportant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+32) Number of color entries that are used.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3ColorsUsed",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Number of color entries that are used",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3ColorsUsed",
          "package": "bmp",
          "partial": "Colors Used",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3ColorsUsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+16) Image compression mode.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3Compression",
          "package": "bmp",
          "signature": "Compression",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Image compression mode",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3Compression",
          "package": "bmp",
          "partial": "Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Compression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+8) Height of the image, in pixels.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3Height",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Height of the image in pixels",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3Height",
          "package": "bmp",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the height field in the file is negative then this is interpreted\n   as an image with the rows flipped.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3HeightFlipped",
          "package": "bmp",
          "signature": "Bool",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "If the height field in the file is negative then this is interpreted as an image with the rows flipped",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3HeightFlipped",
          "package": "bmp",
          "partial": "Height Flipped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3HeightFlipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+20) Size of raw image data.\n   Some encoders set this to zero, so we need to calculate it based\n   on the overall file size.\n\u003c/p\u003e\u003cp\u003eIf it is non-zero then we check it matches the file size - header\n   size.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3ImageSize",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Size of raw image data Some encoders set this to zero so we need to calculate it based on the overall file size If it is non-zero then we check it matches the file size header size",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3ImageSize",
          "package": "bmp",
          "partial": "Image Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3ImageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+24) Prefered resolution in pixels per meter, along the X axis.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3PelsPerMeterX",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Prefered resolution in pixels per meter along the axis",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3PelsPerMeterX",
          "package": "bmp",
          "partial": "Pels Per Meter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3PelsPerMeterX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+28) Prefered resolution in pixels per meter, along the Y axis.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3PelsPerMeterY",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Prefered resolution in pixels per meter along the axis",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3PelsPerMeterY",
          "package": "bmp",
          "partial": "Pels Per Meter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3PelsPerMeterY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+12) Number of color planes.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3Planes",
          "package": "bmp",
          "signature": "Word16",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Number of color planes",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3Planes",
          "package": "bmp",
          "partial": "Planes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Planes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+0) Size of the image header, in bytes.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3Size",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Size of the image header in bytes",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3Size",
          "package": "bmp",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+4) Width of the image, in pixels.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib3Width",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV3.html#BitmapInfoV3",
          "type": "function"
        },
        "index": {
          "description": "Width of the image in pixels",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib3Width",
          "package": "bmp",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib3Width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "dib4AlphaMask",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4AlphaMask",
          "package": "bmp",
          "partial": "Alpha Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4AlphaMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "dib4BlueMask",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4BlueMask",
          "package": "bmp",
          "partial": "Blue Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4BlueMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe color space used by the image.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib4ColorSpaceType",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "description": "The color space used by the image",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4ColorSpaceType",
          "package": "bmp",
          "partial": "Color Space Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4ColorSpaceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the XYZ coords of the three colors that correspond to\n   the RGB endpoints for the logical color space associated with the\n   bitmap. Only used when ColorSpaceType specifies a calibrated image.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib4Endpoints",
          "package": "bmp",
          "signature": "(CIEXYZ, CIEXYZ, CIEXYZ)",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "description": "Specifies the XYZ coords of the three colors that correspond to the RGB endpoints for the logical color space associated with the bitmap Only used when ColorSpaceType specifies calibrated image",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4Endpoints",
          "normalized": "(CIEXYZ,CIEXYZ,CIEXYZ)",
          "package": "bmp",
          "partial": "Endpoints",
          "signature": "(CIEXYZ,CIEXYZ,CIEXYZ)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4Endpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "dib4GammaBlue",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4GammaBlue",
          "package": "bmp",
          "partial": "Gamma Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4GammaBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "dib4GammaGreen",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4GammaGreen",
          "package": "bmp",
          "partial": "Gamma Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4GammaGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToned response curves for each component. \n   Only used when the ColorSpaceType specifies a calibrated image.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib4GammaRed",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "description": "Toned response curves for each component Only used when the ColorSpaceType specifies calibrated image",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4GammaRed",
          "package": "bmp",
          "partial": "Gamma Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4GammaRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "dib4GreenMask",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4GreenMask",
          "package": "bmp",
          "partial": "Green Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4GreenMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the image header, in bytes.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib4InfoV3",
          "package": "bmp",
          "signature": "BitmapInfoV3",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "description": "Size of the image header in bytes",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4InfoV3",
          "package": "bmp",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4InfoV3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor masks specify components of each pixel.\n   Only used with the bitfields compression mode.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib4RedMask",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV4.html#BitmapInfoV4",
          "type": "function"
        },
        "index": {
          "description": "Color masks specify components of each pixel Only used with the bitfields compression mode",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib4RedMask",
          "package": "bmp",
          "partial": "Red Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib4RedMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "dib5InfoV4",
          "package": "bmp",
          "signature": "BitmapInfoV4",
          "source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib5InfoV4",
          "package": "bmp",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5InfoV4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRendering intent for the bitmap.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib5Intent",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
          "type": "function"
        },
        "index": {
          "description": "Rendering intent for the bitmap",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib5Intent",
          "package": "bmp",
          "partial": "Intent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5Intent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset (in bytes) from the beginning of the header to the start\n   of the profile data.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib5ProfileData",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
          "type": "function"
        },
        "index": {
          "description": "Offset in bytes from the beginning of the header to the start of the profile data",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib5ProfileData",
          "package": "bmp",
          "partial": "Profile Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5ProfileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize (in bytes) of embedded profile data.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib5ProfileSize",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
          "type": "function"
        },
        "index": {
          "description": "Size in bytes of embedded profile data",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib5ProfileSize",
          "package": "bmp",
          "partial": "Profile Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5ProfileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved, should be zero.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "dib5Reserved",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-BitmapInfoV5.html#BitmapInfoV5",
          "type": "function"
        },
        "index": {
          "description": "Reserved should be zero",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "dib5Reserved",
          "package": "bmp",
          "partial": "Reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:dib5Reserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorBitmapHeaderSize",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorBitmapHeaderSize",
          "package": "bmp",
          "partial": "Bitmap Header Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorBitmapHeaderSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorBytesAvailable",
          "package": "bmp",
          "signature": "Int",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorBytesAvailable",
          "package": "bmp",
          "partial": "Bytes Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorBytesAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorBytesNeeded",
          "package": "bmp",
          "signature": "Int",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorBytesNeeded",
          "package": "bmp",
          "partial": "Bytes Needed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorBytesNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorColorDepth",
          "package": "bmp",
          "signature": "Word16",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorColorDepth",
          "package": "bmp",
          "partial": "Color Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorColorDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorCompression",
          "package": "bmp",
          "signature": "Compression",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorCompression",
          "package": "bmp",
          "partial": "Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorFileHeaderOffset",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorFileHeaderOffset",
          "package": "bmp",
          "partial": "File Header Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorFileHeaderOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorImageSizeFromHeader",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorImageSizeFromHeader",
          "package": "bmp",
          "partial": "Image Size From Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorImageSizeFromHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorImageSizeOfBuffer",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorImageSizeOfBuffer",
          "package": "bmp",
          "partial": "Image Size Of Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorImageSizeOfBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorMagic",
          "package": "bmp",
          "signature": "Word16",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorMagic",
          "package": "bmp",
          "partial": "Magic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.BMP",
          "name": "errorPlanesCount",
          "package": "bmp",
          "signature": "Word16",
          "source": "src/Codec-BMP-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "errorPlanesCount",
          "package": "bmp",
          "partial": "Planes Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:errorPlanesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+2) Size of the file, in bytes.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "fileHeaderFileSize",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-FileHeader.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Size of the file in bytes",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "fileHeaderFileSize",
          "package": "bmp",
          "partial": "Header File Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+10) Offset in bytes to the start of the pixel data.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "fileHeaderOffset",
          "package": "bmp",
          "signature": "Word32",
          "source": "src/Codec-BMP-FileHeader.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Offset in bytes to the start of the pixel data",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "fileHeaderOffset",
          "package": "bmp",
          "partial": "Header Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+6) Reserved, must be zero.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "fileHeaderReserved1",
          "package": "bmp",
          "signature": "Word16",
          "source": "src/Codec-BMP-FileHeader.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Reserved must be zero",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "fileHeaderReserved1",
          "package": "bmp",
          "partial": "Header Reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderReserved1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+8) Reserved, must be zero.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "fileHeaderReserved2",
          "package": "bmp",
          "signature": "Word16",
          "source": "src/Codec-BMP-FileHeader.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Reserved must be zero",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "fileHeaderReserved2",
          "package": "bmp",
          "partial": "Header Reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderReserved2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(+0) Magic numbers 0x42 0x4d\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "fileHeaderType",
          "package": "bmp",
          "signature": "Word16",
          "source": "src/Codec-BMP-FileHeader.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Magic numbers x42 x4d",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "fileHeaderType",
          "package": "bmp",
          "partial": "Header Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:fileHeaderType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a BMP image from a file handle.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "hGetBMP",
          "package": "bmp",
          "signature": "Handle -\u003e IO (Either Error BMP)",
          "source": "src/Codec-BMP.html#hGetBMP",
          "type": "function"
        },
        "index": {
          "description": "Get BMP image from file handle",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "hGetBMP",
          "normalized": "Handle-\u003eIO(Either Error BMP)",
          "package": "bmp",
          "partial": "Get BMP",
          "signature": "Handle-\u003eIO(Either Error BMP)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:hGetBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a BMP image to a file handle.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "hPutBMP",
          "package": "bmp",
          "signature": "Handle -\u003e BMP -\u003e IO ()",
          "source": "src/Codec-BMP.html#hPutBMP",
          "type": "function"
        },
        "index": {
          "description": "Put BMP image to file handle",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "hPutBMP",
          "normalized": "Handle-\u003eBMP-\u003eIO()",
          "package": "bmp",
          "partial": "Put BMP",
          "signature": "Handle-\u003eBMP-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:hPutBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack a string of RGBA component values into a 32-bit BMP image.\n\u003c/p\u003e\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003epackRGBA32ToBMP32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "packRGBA32ToBMP",
          "package": "bmp",
          "signature": "Int-\u003e Int-\u003e ByteString-\u003e BMP",
          "type": "function"
        },
        "index": {
          "description": "Pack string of RGBA component values into bit BMP image Alias for packRGBA32ToBMP32",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "packRGBA32ToBMP",
          "normalized": "Int-\u003eInt-\u003eByteString-\u003eBMP",
          "package": "bmp",
          "partial": "RGBA To BMP",
          "signature": "Int-\u003eInt-\u003eByteString-\u003eBMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:packRGBA32ToBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack a string of RGBA component values into a 24-bit BMP image,\n   discarding the alpha channel of the source data.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the given dimensions don't match the input string then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If the width or height fields are negative then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.BMP",
          "name": "packRGBA32ToBMP24",
          "package": "bmp",
          "signature": "Int-\u003e Int-\u003e ByteString-\u003e BMP",
          "type": "function"
        },
        "index": {
          "description": "Pack string of RGBA component values into bit BMP image discarding the alpha channel of the source data If the given dimensions don match the input string then error If the width or height fields are negative then error",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "packRGBA32ToBMP24",
          "normalized": "Int-\u003eInt-\u003eByteString-\u003eBMP",
          "package": "bmp",
          "partial": "RGBA To BMP",
          "signature": "Int-\u003eInt-\u003eByteString-\u003eBMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:packRGBA32ToBMP24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack a string of RGBA component values into a 32-bit BMP image.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the given dimensions don't match the input string then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If the width or height fields are negative then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.BMP",
          "name": "packRGBA32ToBMP32",
          "package": "bmp",
          "signature": "Int-\u003e Int-\u003e ByteString-\u003e BMP",
          "type": "function"
        },
        "index": {
          "description": "Pack string of RGBA component values into bit BMP image If the given dimensions don match the input string then error If the width or height fields are negative then error",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "packRGBA32ToBMP32",
          "normalized": "Int-\u003eInt-\u003eByteString-\u003eBMP",
          "package": "bmp",
          "partial": "RGBA To BMP",
          "signature": "Int-\u003eInt-\u003eByteString-\u003eBMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:packRGBA32ToBMP32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a BMP image from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "parseBMP",
          "package": "bmp",
          "signature": "ByteString -\u003e Either Error BMP",
          "source": "src/Codec-BMP.html#parseBMP",
          "type": "function"
        },
        "index": {
          "description": "Parse BMP image from lazy ByteString",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "parseBMP",
          "normalized": "ByteString-\u003eEither Error BMP",
          "package": "bmp",
          "partial": "BMP",
          "signature": "ByteString-\u003eEither Error BMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:parseBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a BMP from a file.\n      The file is checked for problems and unsupported features when read.\n      If there is anything wrong this gives an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "readBMP",
          "package": "bmp",
          "signature": "FilePath -\u003e IO (Either Error BMP)",
          "source": "src/Codec-BMP.html#readBMP",
          "type": "function"
        },
        "index": {
          "description": "Read BMP from file The file is checked for problems and unsupported features when read If there is anything wrong this gives an Error instead",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "readBMP",
          "normalized": "FilePath-\u003eIO(Either Error BMP)",
          "package": "bmp",
          "partial": "BMP",
          "signature": "FilePath-\u003eIO(Either Error BMP)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:readBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a BMP image to a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "renderBMP",
          "package": "bmp",
          "signature": "BMP -\u003e ByteString",
          "source": "src/Codec-BMP.html#renderBMP",
          "type": "function"
        },
        "index": {
          "description": "Render BMP image to lazy ByteString",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "renderBMP",
          "normalized": "BMP-\u003eByteString",
          "package": "bmp",
          "partial": "BMP",
          "signature": "BMP-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:renderBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack a BMP image to a string of RGBA component values.\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "unpackBMPToRGBA32",
          "package": "bmp",
          "signature": "BMP -\u003e ByteString",
          "source": "src/Codec-BMP-Unpack.html#unpackBMPToRGBA32",
          "type": "function"
        },
        "index": {
          "description": "Unpack BMP image to string of RGBA component values",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "unpackBMPToRGBA32",
          "normalized": "BMP-\u003eByteString",
          "package": "bmp",
          "partial": "BMPTo RGBA",
          "signature": "BMP-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:unpackBMPToRGBA32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003ehPutBMP\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.BMP",
          "name": "writeBMP",
          "package": "bmp",
          "signature": "FilePath -\u003e BMP -\u003e IO ()",
          "source": "src/Codec-BMP.html#writeBMP",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for hPutBMP",
          "hierarchy": "Codec BMP",
          "module": "Codec.BMP",
          "name": "writeBMP",
          "normalized": "FilePath-\u003eBMP-\u003eIO()",
          "package": "bmp",
          "partial": "BMP",
          "signature": "FilePath-\u003eBMP-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bmp/docs/Codec-BMP.html#v:writeBMP"
      }
    }
  ]
]