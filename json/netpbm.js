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
        "word": "netpbm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing the netpbm image formates (PBM, PGM and PPM, both ASCII and binary) from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eAll netpbm image formats are implemented (P1 - P6).\n\u003c/p\u003e\u003cp\u003eTo parse one of these formats, use \u003ccode\u003e\u003ca\u003eparsePPM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ca\u003ehttp://www.imagemagick.org/Usage/formats/#netpbm\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Netpbm",
          "name": "Netpbm",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing the netpbm image formates PBM PGM and PPM both ASCII and binary from ByteString All netpbm image formats are implemented P1 P6 To parse one of these formats use parsePPM See also http www.imagemagick.org Usage formats netpbm",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "Netpbm",
          "package": "netpbm",
          "partial": "Netpbm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PPM file with type, dimensions, and image data.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PPM",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PPM",
          "type": "data"
        },
        "index": {
          "description": "PPM file with type dimensions and image data",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PPM",
          "package": "netpbm",
          "partial": "PPM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeta information about the image: The exact PPM format and dimensions.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PPMHeader",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PPMHeader",
          "type": "data"
        },
        "index": {
          "description": "Meta information about the image The exact PPM format and dimensions",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PPMHeader",
          "package": "netpbm",
          "partial": "PPMHeader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PPMHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe netpbm image type of an image.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PPMType",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PPMType",
          "type": "data"
        },
        "index": {
          "description": "The netpbm image type of an image",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PPMType",
          "package": "netpbm",
          "partial": "PPMType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PPMType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pixel containing black or white.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PbmPixel",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PbmPixel",
          "type": "newtype"
        },
        "index": {
          "description": "pixel containing black or white",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PbmPixel",
          "package": "netpbm",
          "partial": "Pbm Pixel",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PbmPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pixel containing a 16-bit greyscale value.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PgmPixel16",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PgmPixel16",
          "type": "data"
        },
        "index": {
          "description": "pixel containing bit greyscale value",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PgmPixel16",
          "package": "netpbm",
          "partial": "Pgm Pixel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PgmPixel16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pixel containing an 8-bit greyscale value.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PgmPixel8",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PgmPixel8",
          "type": "data"
        },
        "index": {
          "description": "pixel containing an bit greyscale value",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PgmPixel8",
          "package": "netpbm",
          "partial": "Pgm Pixel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PgmPixel8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a PPM parse.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eparsePPM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PpmParseResult",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PpmParseResult",
          "type": "type"
        },
        "index": {
          "description": "The result of PPM parse See parsePPM",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PpmParseResult",
          "package": "netpbm",
          "partial": "Ppm Parse Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PpmParseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage data, either 8 or 16 bits.\n TODO rename to PNM\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelData",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PpmPixelData",
          "type": "data"
        },
        "index": {
          "description": "Image data either or bits TODO rename to PNM",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelData",
          "package": "netpbm",
          "partial": "Ppm Pixel Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PpmPixelData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pixel containing three 16-bit color components, RGB.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelRGB16",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PpmPixelRGB16",
          "type": "data"
        },
        "index": {
          "description": "pixel containing three bit color components RGB",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelRGB16",
          "package": "netpbm",
          "partial": "Ppm Pixel RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PpmPixelRGB16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pixel containing three 8-bit color components, RGB.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelRGB8",
          "package": "netpbm",
          "source": "src/Graphics-Netpbm.html#PpmPixelRGB8",
          "type": "data"
        },
        "index": {
          "description": "pixel containing three bit color components RGB",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelRGB8",
          "package": "netpbm",
          "partial": "Ppm Pixel RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#t:PpmPixelRGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASCII bitmap\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "P1",
          "package": "netpbm",
          "signature": "P1",
          "source": "src/Graphics-Netpbm.html#PPMType",
          "type": "function"
        },
        "index": {
          "description": "ASCII bitmap",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "P1",
          "package": "netpbm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:P1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASCII greymap\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "P2",
          "package": "netpbm",
          "signature": "P2",
          "source": "src/Graphics-Netpbm.html#PPMType",
          "type": "function"
        },
        "index": {
          "description": "ASCII greymap",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "P2",
          "package": "netpbm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:P2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASCII pixmap (color)\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "P3",
          "package": "netpbm",
          "signature": "P3",
          "source": "src/Graphics-Netpbm.html#PPMType",
          "type": "function"
        },
        "index": {
          "description": "ASCII pixmap color",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "P3",
          "package": "netpbm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:P3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary bitmap\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "P4",
          "package": "netpbm",
          "signature": "P4",
          "source": "src/Graphics-Netpbm.html#PPMType",
          "type": "function"
        },
        "index": {
          "description": "binary bitmap",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "P4",
          "package": "netpbm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:P4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary greymap\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "P5",
          "package": "netpbm",
          "signature": "P5",
          "source": "src/Graphics-Netpbm.html#PPMType",
          "type": "function"
        },
        "index": {
          "description": "binary greymap",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "P5",
          "package": "netpbm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:P5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary pixmap (color)\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "P6",
          "package": "netpbm",
          "signature": "P6",
          "source": "src/Graphics-Netpbm.html#PPMType",
          "type": "function"
        },
        "index": {
          "description": "binary pixmap color",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "P6",
          "package": "netpbm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:P6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "PPM",
          "package": "netpbm",
          "signature": "PPM",
          "source": "src/Graphics-Netpbm.html#PPM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PPM",
          "package": "netpbm",
          "partial": "PPM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "PPMHeader",
          "package": "netpbm",
          "signature": "PPMHeader",
          "source": "src/Graphics-Netpbm.html#PPMHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PPMHeader",
          "package": "netpbm",
          "partial": "PPMHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PPMHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "PbmPixel",
          "package": "netpbm",
          "signature": "PbmPixel Bool",
          "source": "src/Graphics-Netpbm.html#PbmPixel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PbmPixel",
          "package": "netpbm",
          "partial": "Pbm Pixel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PbmPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor 1-bit PBMs.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PbmPixelData",
          "package": "netpbm",
          "signature": "PbmPixelData (Vector PbmPixel)",
          "source": "src/Graphics-Netpbm.html#PpmPixelData",
          "type": "function"
        },
        "index": {
          "description": "For bit PBMs",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PbmPixelData",
          "package": "netpbm",
          "partial": "Pbm Pixel Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PbmPixelData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "PgmPixel16",
          "package": "netpbm",
          "signature": "PgmPixel16 !Word16",
          "source": "src/Graphics-Netpbm.html#PgmPixel16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PgmPixel16",
          "package": "netpbm",
          "partial": "Pgm Pixel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PgmPixel16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "PgmPixel8",
          "package": "netpbm",
          "signature": "PgmPixel8 !Word8",
          "source": "src/Graphics-Netpbm.html#PgmPixel8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PgmPixel8",
          "package": "netpbm",
          "partial": "Pgm Pixel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PgmPixel8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor 16-bit PGMs.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PgmPixelData16",
          "package": "netpbm",
          "signature": "PgmPixelData16 (Vector PgmPixel16)",
          "source": "src/Graphics-Netpbm.html#PpmPixelData",
          "type": "function"
        },
        "index": {
          "description": "For bit PGMs",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PgmPixelData16",
          "package": "netpbm",
          "partial": "Pgm Pixel Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PgmPixelData16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor 8-bit PGMs.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PgmPixelData8",
          "package": "netpbm",
          "signature": "PgmPixelData8 (Vector PgmPixel8)",
          "source": "src/Graphics-Netpbm.html#PpmPixelData",
          "type": "function"
        },
        "index": {
          "description": "For bit PGMs",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PgmPixelData8",
          "package": "netpbm",
          "partial": "Pgm Pixel Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PgmPixelData8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor 16-bit PPMs.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelDataRGB16",
          "package": "netpbm",
          "signature": "PpmPixelDataRGB16 (Vector PpmPixelRGB16)",
          "source": "src/Graphics-Netpbm.html#PpmPixelData",
          "type": "function"
        },
        "index": {
          "description": "For bit PPMs",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelDataRGB16",
          "package": "netpbm",
          "partial": "Ppm Pixel Data RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PpmPixelDataRGB16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor 8-bit PPMs.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelDataRGB8",
          "package": "netpbm",
          "signature": "PpmPixelDataRGB8 (Vector PpmPixelRGB8)",
          "source": "src/Graphics-Netpbm.html#PpmPixelData",
          "type": "function"
        },
        "index": {
          "description": "For bit PPMs",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelDataRGB8",
          "package": "netpbm",
          "partial": "Ppm Pixel Data RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PpmPixelDataRGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "PpmPixelRGB16",
          "package": "netpbm",
          "signature": "PpmPixelRGB16 !Word16 !Word16 !Word16",
          "source": "src/Graphics-Netpbm.html#PpmPixelRGB16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelRGB16",
          "package": "netpbm",
          "partial": "Ppm Pixel RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PpmPixelRGB16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "PpmPixelRGB8",
          "package": "netpbm",
          "signature": "PpmPixelRGB8 !Word8 !Word8 !Word8",
          "source": "src/Graphics-Netpbm.html#PpmPixelRGB8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "PpmPixelRGB8",
          "package": "netpbm",
          "partial": "Ppm Pixel RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:PpmPixelRGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a PPM file from the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n On failure, \u003ccode\u003eLeft error\u003c/code\u003e contains the error message.\n On success, \u003ccode\u003eRight (images, Maybe rest)\u003c/code\u003e contains the parsed images\n and potentially an unparsable rest input.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "parsePPM",
          "package": "netpbm",
          "signature": "ByteString -\u003e PpmParseResult",
          "source": "src/Graphics-Netpbm.html#parsePPM",
          "type": "function"
        },
        "index": {
          "description": "Parses PPM file from the given ByteString On failure Left error contains the error message On success Right images Maybe rest contains the parsed images and potentially an unparsable rest input",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "parsePPM",
          "normalized": "ByteString-\u003ePpmParseResult",
          "package": "netpbm",
          "partial": "PPM",
          "signature": "ByteString-\u003ePpmParseResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:parsePPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts pixel data to a list of positive \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eHow big they can become depends on the bit depth of the pixel data.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "pixelDataToIntList",
          "package": "netpbm",
          "signature": "PpmPixelData -\u003e [Int]",
          "source": "src/Graphics-Netpbm.html#pixelDataToIntList",
          "type": "function"
        },
        "index": {
          "description": "Converts pixel data to list of positive Int How big they can become depends on the bit depth of the pixel data",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "pixelDataToIntList",
          "normalized": "PpmPixelData-\u003e[Int]",
          "package": "netpbm",
          "partial": "Data To Int List",
          "signature": "PpmPixelData-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:pixelDataToIntList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a vector of pixels to a list for convenience.\n\u003c/p\u003e",
          "module": "Graphics.Netpbm",
          "name": "pixelVectorToList",
          "package": "netpbm",
          "signature": "Vector a -\u003e [a]",
          "source": "src/Graphics-Netpbm.html#pixelVectorToList",
          "type": "function"
        },
        "index": {
          "description": "Converts vector of pixels to list for convenience",
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "pixelVectorToList",
          "normalized": "Vector a-\u003e[a]",
          "package": "netpbm",
          "partial": "Vector To List",
          "signature": "Vector a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:pixelVectorToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "ppmData",
          "package": "netpbm",
          "signature": "PpmPixelData",
          "source": "src/Graphics-Netpbm.html#PPM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "ppmData",
          "package": "netpbm",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:ppmData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "ppmHeader",
          "package": "netpbm",
          "signature": "PPMHeader",
          "source": "src/Graphics-Netpbm.html#PPM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "ppmHeader",
          "package": "netpbm",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:ppmHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "ppmHeight",
          "package": "netpbm",
          "signature": "Int",
          "source": "src/Graphics-Netpbm.html#PPMHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "ppmHeight",
          "package": "netpbm",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:ppmHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "ppmType",
          "package": "netpbm",
          "signature": "PPMType",
          "source": "src/Graphics-Netpbm.html#PPMHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "ppmType",
          "package": "netpbm",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:ppmType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Netpbm",
          "name": "ppmWidth",
          "package": "netpbm",
          "signature": "Int",
          "source": "src/Graphics-Netpbm.html#PPMHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Netpbm",
          "module": "Graphics.Netpbm",
          "name": "ppmWidth",
          "package": "netpbm",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netpbm/docs/Graphics-Netpbm.html#v:ppmWidth"
      }
    }
  ]
]