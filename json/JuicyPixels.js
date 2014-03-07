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
        "word": "JuicyPixels"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModules used for Bitmap file (.bmp) file loading and writing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Picture.Bitmap",
          "name": "Bitmap",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Bitmap.html",
          "type": "module"
        },
        "index": {
          "description": "Modules used for Bitmap file bmp file loading and writing",
          "hierarchy": "Codec Picture Bitmap",
          "module": "Codec.Picture.Bitmap",
          "name": "Bitmap",
          "package": "JuicyPixels",
          "partial": "Bitmap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the instance of this class can be written as a bitmap file\n using this library.\n\u003c/p\u003e",
          "module": "Codec.Picture.Bitmap",
          "name": "BmpEncodable",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Bitmap.html#BmpEncodable",
          "type": "class"
        },
        "index": {
          "description": "All the instance of this class can be written as bitmap file using this library",
          "hierarchy": "Codec Picture Bitmap",
          "module": "Codec.Picture.Bitmap",
          "name": "BmpEncodable",
          "package": "JuicyPixels",
          "partial": "Bmp Encodable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#t:BmpEncodable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to decode a bitmap image.\n Right now this function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003cli\u003e Pixel8\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Bitmap\",\"Codec.Picture\"]",
          "name": "decodeBitmap",
          "package": "JuicyPixels",
          "signature": "ByteString -\u003e Either String DynamicImage",
          "source": "src/Codec-Picture-Bitmap.html#decodeBitmap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:decodeBitmap\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeBitmap\"]"
        },
        "index": {
          "description": "Try to decode bitmap image Right now this function can output the following pixel types PixelRGB8 Pixel8",
          "hierarchy": "Codec Picture Bitmap",
          "module": "Codec.Picture.Bitmap",
          "name": "decodeBitmap",
          "normalized": "ByteString-\u003eEither String DynamicImage",
          "package": "JuicyPixels",
          "partial": "Bitmap",
          "signature": "ByteString-\u003eEither String DynamicImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:decodeBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an image into a bytestring in .bmp format ready to be written\n on disk.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Bitmap\",\"Codec.Picture\"]",
          "name": "encodeBitmap",
          "package": "JuicyPixels",
          "signature": "Image pixel -\u003e ByteString",
          "source": "src/Codec-Picture-Bitmap.html#encodeBitmap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:encodeBitmap\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeBitmap\"]"
        },
        "index": {
          "description": "Encode an image into bytestring in bmp format ready to be written on disk",
          "hierarchy": "Codec Picture Bitmap",
          "module": "Codec.Picture.Bitmap",
          "name": "encodeBitmap",
          "normalized": "Image a-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "Bitmap",
          "signature": "Image pixel-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:encodeBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a dynamic image in bmp if possible, supported pixel type are :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e RGB8\n\u003c/li\u003e\u003cli\u003e RGBA8\n\u003c/li\u003e\u003cli\u003e Y8\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Bitmap\",\"Codec.Picture\"]",
          "name": "encodeDynamicBitmap",
          "package": "JuicyPixels",
          "signature": "DynamicImage -\u003e Either String ByteString",
          "source": "src/Codec-Picture-Bitmap.html#encodeDynamicBitmap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:encodeDynamicBitmap\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeDynamicBitmap\"]"
        },
        "index": {
          "description": "Encode dynamic image in bmp if possible supported pixel type are RGB8 RGBA8 Y8",
          "hierarchy": "Codec Picture Bitmap",
          "module": "Codec.Picture.Bitmap",
          "name": "encodeDynamicBitmap",
          "normalized": "DynamicImage-\u003eEither String ByteString",
          "package": "JuicyPixels",
          "partial": "Dynamic Bitmap",
          "signature": "DynamicImage-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:encodeDynamicBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an image in a file use the bitmap format.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Bitmap\",\"Codec.Picture\"]",
          "name": "writeBitmap",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e Image pixel -\u003e IO ()",
          "source": "src/Codec-Picture-Bitmap.html#writeBitmap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:writeBitmap\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeBitmap\"]"
        },
        "index": {
          "description": "Write an image in file use the bitmap format",
          "hierarchy": "Codec Picture Bitmap",
          "module": "Codec.Picture.Bitmap",
          "name": "writeBitmap",
          "normalized": "FilePath-\u003eImage a-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "Bitmap",
          "signature": "FilePath-\u003eImage pixel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:writeBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a dynamic image in a .bmp image file if possible.\n The same restriction as encodeDynamicBitmap apply.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Bitmap\",\"Codec.Picture\"]",
          "name": "writeDynamicBitmap",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e DynamicImage -\u003e IO (Either String Bool)",
          "source": "src/Codec-Picture-Bitmap.html#writeDynamicBitmap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:writeDynamicBitmap\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeDynamicBitmap\"]"
        },
        "index": {
          "description": "Write dynamic image in bmp image file if possible The same restriction as encodeDynamicBitmap apply",
          "hierarchy": "Codec Picture Bitmap",
          "module": "Codec.Picture.Bitmap",
          "name": "writeDynamicBitmap",
          "normalized": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)",
          "package": "JuicyPixels",
          "partial": "Dynamic Bitmap",
          "signature": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:writeDynamicBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provide some color quantisation algorithm\n in order to help in the creation of paletted images.\n The most important function is \u003ccode\u003e\u003ca\u003epalettize\u003c/a\u003e\u003c/code\u003e which will\n make everything to create a nice color indexed image\n with its palette.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Picture.ColorQuant",
          "name": "ColorQuant",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-ColorQuant.html",
          "type": "module"
        },
        "index": {
          "description": "This module provide some color quantisation algorithm in order to help in the creation of paletted images The most important function is palettize which will make everything to create nice color indexed image with its palette",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "ColorQuant",
          "package": "JuicyPixels",
          "partial": "Color Quant",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine which palette creation method is used.\n\u003c/p\u003e",
          "module": "Codec.Picture.ColorQuant",
          "name": "PaletteCreationMethod",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
          "type": "data"
        },
        "index": {
          "description": "Define which palette creation method is used",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "PaletteCreationMethod",
          "package": "JuicyPixels",
          "partial": "Palette Creation Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#t:PaletteCreationMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo specify how the palette will be created.\n\u003c/p\u003e",
          "module": "Codec.Picture.ColorQuant",
          "name": "PaletteOptions",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
          "type": "data"
        },
        "index": {
          "description": "To specify how the palette will be created",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "PaletteOptions",
          "package": "JuicyPixels",
          "partial": "Palette Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#t:PaletteOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedianMeanCut method, provide the best results (visualy)\n at the cost of increased calculations.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.ColorQuant\",\"Codec.Picture\"]",
          "name": "MedianMeanCut",
          "package": "JuicyPixels",
          "signature": "MedianMeanCut",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:MedianMeanCut\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:MedianMeanCut\"]"
        },
        "index": {
          "description": "MedianMeanCut method provide the best results visualy at the cost of increased calculations",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "MedianMeanCut",
          "package": "JuicyPixels",
          "partial": "Median Mean Cut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:MedianMeanCut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.ColorQuant\",\"Codec.Picture\"]",
          "name": "PaletteOptions",
          "package": "JuicyPixels",
          "signature": "PaletteOptions",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:PaletteOptions\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PaletteOptions\"]"
        },
        "index": {
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "PaletteOptions",
          "package": "JuicyPixels",
          "partial": "Palette Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:PaletteOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVery fast algorithm (one pass), doesn't provide good\n looking results.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.ColorQuant\",\"Codec.Picture\"]",
          "name": "Uniform",
          "package": "JuicyPixels",
          "signature": "Uniform",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:Uniform\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:Uniform\"]"
        },
        "index": {
          "description": "Very fast algorithm one pass doesn provide good looking results",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "Uniform",
          "package": "JuicyPixels",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:Uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault palette option, which aim at the best quality\n and maximum possible colors (256)\n\u003c/p\u003e",
          "module": "Codec.Picture.ColorQuant",
          "name": "defaultPaletteOptions",
          "package": "JuicyPixels",
          "signature": "PaletteOptions",
          "source": "src/Codec-Picture-ColorQuant.html#defaultPaletteOptions",
          "type": "function"
        },
        "index": {
          "description": "Default palette option which aim at the best quality and maximum possible colors",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "defaultPaletteOptions",
          "package": "JuicyPixels",
          "partial": "Palette Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:defaultPaletteOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we want to apply the dithering to the\n image. Enabling it often reduce compression\n ratio but enhance the perceived quality\n of the final image.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.ColorQuant\",\"Codec.Picture\"]",
          "name": "enableImageDithering",
          "package": "JuicyPixels",
          "signature": "Bool",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:enableImageDithering\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:enableImageDithering\"]"
        },
        "index": {
          "description": "Do we want to apply the dithering to the image Enabling it often reduce compression ratio but enhance the perceived quality of the final image",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "enableImageDithering",
          "package": "JuicyPixels",
          "partial": "Image Dithering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:enableImageDithering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of color we want in the\n palette\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.ColorQuant\",\"Codec.Picture\"]",
          "name": "paletteColorCount",
          "package": "JuicyPixels",
          "signature": "Int",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:paletteColorCount\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:paletteColorCount\"]"
        },
        "index": {
          "description": "Maximum number of color we want in the palette",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "paletteColorCount",
          "package": "JuicyPixels",
          "partial": "Color Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:paletteColorCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgorithm used to find the palette\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.ColorQuant\",\"Codec.Picture\"]",
          "name": "paletteCreationMethod",
          "package": "JuicyPixels",
          "signature": "PaletteCreationMethod",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:paletteCreationMethod\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:paletteCreationMethod\"]"
        },
        "index": {
          "description": "Algorithm used to find the palette",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "paletteCreationMethod",
          "package": "JuicyPixels",
          "partial": "Creation Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:paletteCreationMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduces an image to a color palette according to \u003ccode\u003ePaletteOpts\u003c/code\u003e and\n   returns the \u003cem\u003eindices image\u003c/em\u003e along with its \u003ccode\u003e\u003ca\u003ePalette\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.ColorQuant\",\"Codec.Picture\"]",
          "name": "palettize",
          "package": "JuicyPixels",
          "signature": "PaletteOptions -\u003e Image PixelRGB8 -\u003e (Image Pixel8, Palette)",
          "source": "src/Codec-Picture-ColorQuant.html#palettize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:palettize\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:palettize\"]"
        },
        "index": {
          "description": "Reduces an image to color palette according to PaletteOpts and returns the indices image along with its Palette",
          "hierarchy": "Codec Picture ColorQuant",
          "module": "Codec.Picture.ColorQuant",
          "name": "palettize",
          "normalized": "PaletteOptions-\u003eImage PixelRGB-\u003e(Image Pixel,Palette)",
          "package": "JuicyPixels",
          "signature": "PaletteOptions-\u003eImage PixelRGB-\u003e(Image Pixel,Palette)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:palettize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule implementing GIF decoding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Picture.Gif",
          "name": "Gif",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Gif.html",
          "type": "module"
        },
        "index": {
          "description": "Module implementing GIF decoding",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "Gif",
          "package": "JuicyPixels",
          "partial": "Gif",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay to wait before showing the next Gif image.\n The delay is expressed in 100th of seconds.\n\u003c/p\u003e",
          "module": "Codec.Picture.Gif",
          "name": "GifDelay",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Gif.html#GifDelay",
          "type": "type"
        },
        "index": {
          "description": "Delay to wait before showing the next Gif image The delay is expressed in th of seconds",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "GifDelay",
          "package": "JuicyPixels",
          "partial": "Gif Delay",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#t:GifDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelp to control the behaviour of GIF animation looping.\n\u003c/p\u003e",
          "module": "Codec.Picture.Gif",
          "name": "GifLooping",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Gif.html#GifLooping",
          "type": "data"
        },
        "index": {
          "description": "Help to control the behaviour of GIF animation looping",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "GifLooping",
          "package": "JuicyPixels",
          "partial": "Gif Looping",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#t:GifLooping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe animation will restart once the end is reached\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "LoopingForever",
          "package": "JuicyPixels",
          "signature": "LoopingForever",
          "source": "src/Codec-Picture-Gif.html#GifLooping",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:LoopingForever\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:LoopingForever\"]"
        },
        "index": {
          "description": "The animation will restart once the end is reached",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "LoopingForever",
          "package": "JuicyPixels",
          "partial": "Looping Forever",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:LoopingForever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe animation will stop once the end is reached\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "LoopingNever",
          "package": "JuicyPixels",
          "signature": "LoopingNever",
          "source": "src/Codec-Picture-Gif.html#GifLooping",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:LoopingNever\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:LoopingNever\"]"
        },
        "index": {
          "description": "The animation will stop once the end is reached",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "LoopingNever",
          "package": "JuicyPixels",
          "partial": "Looping Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:LoopingNever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe animation will repeat n times before stoping\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "LoopingRepeat",
          "package": "JuicyPixels",
          "signature": "LoopingRepeat Word16",
          "source": "src/Codec-Picture-Gif.html#GifLooping",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:LoopingRepeat\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:LoopingRepeat\"]"
        },
        "index": {
          "description": "The animation will repeat times before stoping",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "LoopingRepeat",
          "package": "JuicyPixels",
          "partial": "Looping Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:LoopingRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a raw gif image to an image, witout\n modifying the pixels.\n This function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "decodeGif",
          "package": "JuicyPixels",
          "signature": "ByteString -\u003e Either String DynamicImage",
          "source": "src/Codec-Picture-Gif.html#decodeGif",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:decodeGif\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeGif\"]"
        },
        "index": {
          "description": "Transform raw gif image to an image witout modifying the pixels This function can output the following pixel types PixelRGB8",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "decodeGif",
          "normalized": "ByteString-\u003eEither String DynamicImage",
          "package": "JuicyPixels",
          "partial": "Gif",
          "signature": "ByteString-\u003eEither String DynamicImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:decodeGif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a raw gif to a list of images, representing\n all the images of an animation.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "decodeGifImages",
          "package": "JuicyPixels",
          "signature": "ByteString -\u003e Either String [Image PixelRGB8]",
          "source": "src/Codec-Picture-Gif.html#decodeGifImages",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:decodeGifImages\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeGifImages\"]"
        },
        "index": {
          "description": "Transform raw gif to list of images representing all the images of an animation",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "decodeGifImages",
          "normalized": "ByteString-\u003eEither String[Image PixelRGB]",
          "package": "JuicyPixels",
          "partial": "Gif Images",
          "signature": "ByteString-\u003eEither String[Image PixelRGB]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:decodeGifImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a greyscale image to a bytestring.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "encodeGifImage",
          "package": "JuicyPixels",
          "signature": "Image Pixel8 -\u003e ByteString",
          "source": "src/Codec-Picture-Gif.html#encodeGifImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:encodeGifImage\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeGifImage\"]"
        },
        "index": {
          "description": "Encode greyscale image to bytestring",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "encodeGifImage",
          "normalized": "Image Pixel-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "Gif Image",
          "signature": "Image Pixel-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:encodeGifImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an image with a given palette.\n Can return errors if the palette is ill-formed.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A palette must have between 1 and 256 colors\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "encodeGifImageWithPalette",
          "package": "JuicyPixels",
          "signature": "Image Pixel8 -\u003e Palette -\u003e Either String ByteString",
          "source": "src/Codec-Picture-Gif.html#encodeGifImageWithPalette",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:encodeGifImageWithPalette\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeGifImageWithPalette\"]"
        },
        "index": {
          "description": "Encode an image with given palette Can return errors if the palette is ill-formed palette must have between and colors",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "encodeGifImageWithPalette",
          "normalized": "Image Pixel-\u003ePalette-\u003eEither String ByteString",
          "package": "JuicyPixels",
          "partial": "Gif Image With Palette",
          "signature": "Image Pixel-\u003ePalette-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:encodeGifImageWithPalette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a gif animation to a bytestring.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every image must have the same size\n\u003c/li\u003e\u003cli\u003e Every palette must have between one and 256 colors.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "encodeGifImages",
          "package": "JuicyPixels",
          "signature": "GifLooping -\u003e [(Palette, GifDelay, Image Pixel8)] -\u003e Either String ByteString",
          "source": "src/Codec-Picture-Gif.html#encodeGifImages",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:encodeGifImages\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeGifImages\"]"
        },
        "index": {
          "description": "Encode gif animation to bytestring Every image must have the same size Every palette must have between one and colors",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "encodeGifImages",
          "normalized": "GifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String ByteString",
          "package": "JuicyPixels",
          "partial": "Gif Images",
          "signature": "GifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:encodeGifImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault palette to produce greyscale images.\n\u003c/p\u003e",
          "module": "Codec.Picture.Gif",
          "name": "greyPalette",
          "package": "JuicyPixels",
          "signature": "Palette",
          "source": "src/Codec-Picture-Gif.html#greyPalette",
          "type": "function"
        },
        "index": {
          "description": "Default palette to produce greyscale images",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "greyPalette",
          "package": "JuicyPixels",
          "partial": "Palette",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:greyPalette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a greyscale in a gif file on the disk.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "writeGifImage",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e Image Pixel8 -\u003e IO ()",
          "source": "src/Codec-Picture-Gif.html#writeGifImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:writeGifImage\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeGifImage\"]"
        },
        "index": {
          "description": "Write greyscale in gif file on the disk",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "writeGifImage",
          "normalized": "FilePath-\u003eImage Pixel-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "Gif Image",
          "signature": "FilePath-\u003eImage Pixel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:writeGifImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a gif image with a palette to a file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A palette must have between 1 and 256 colors\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "writeGifImageWithPalette",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e Image Pixel8 -\u003e Palette -\u003e Either String (IO ())",
          "source": "src/Codec-Picture-Gif.html#writeGifImageWithPalette",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:writeGifImageWithPalette\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeGifImageWithPalette\"]"
        },
        "index": {
          "description": "Write gif image with palette to file palette must have between and colors",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "writeGifImageWithPalette",
          "normalized": "FilePath-\u003eImage Pixel-\u003ePalette-\u003eEither String(IO())",
          "package": "JuicyPixels",
          "partial": "Gif Image With Palette",
          "signature": "FilePath-\u003eImage Pixel-\u003ePalette-\u003eEither String(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:writeGifImageWithPalette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a list of images as a gif animation in a file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every image must have the same size\n\u003c/li\u003e\u003cli\u003e Every palette must have between one and 256 colors.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Gif\",\"Codec.Picture\"]",
          "name": "writeGifImages",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e GifLooping -\u003e [(Palette, GifDelay, Image Pixel8)] -\u003e Either String (IO ())",
          "source": "src/Codec-Picture-Gif.html#writeGifImages",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:writeGifImages\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeGifImages\"]"
        },
        "index": {
          "description": "Write list of images as gif animation in file Every image must have the same size Every palette must have between one and colors",
          "hierarchy": "Codec Picture Gif",
          "module": "Codec.Picture.Gif",
          "name": "writeGifImages",
          "normalized": "FilePath-\u003eGifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String(IO())",
          "package": "JuicyPixels",
          "partial": "Gif Images",
          "signature": "FilePath-\u003eGifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:writeGifImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule dedicated of Radiance file decompression (.hdr or .pic) file.\n Radiance file format is used for High dynamic range imaging.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Picture.HDR",
          "name": "HDR",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-HDR.html",
          "type": "module"
        },
        "index": {
          "description": "Module dedicated of Radiance file decompression hdr or pic file Radiance file format is used for High dynamic range imaging",
          "hierarchy": "Codec Picture HDR",
          "module": "Codec.Picture.HDR",
          "name": "HDR",
          "package": "JuicyPixels",
          "partial": "HDR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode an HDR (radiance) image, the resulting pixel\n type can be :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelRGBF\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.HDR\",\"Codec.Picture\"]",
          "name": "decodeHDR",
          "package": "JuicyPixels",
          "signature": "ByteString -\u003e Either String DynamicImage",
          "source": "src/Codec-Picture-HDR.html#decodeHDR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#v:decodeHDR\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeHDR\"]"
        },
        "index": {
          "description": "Decode an HDR radiance image the resulting pixel type can be PixelRGBF",
          "hierarchy": "Codec Picture HDR",
          "module": "Codec.Picture.HDR",
          "name": "decodeHDR",
          "normalized": "ByteString-\u003eEither String DynamicImage",
          "package": "JuicyPixels",
          "partial": "HDR",
          "signature": "ByteString-\u003eEither String DynamicImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#v:decodeHDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an High dynamic range image into a radiance image\n file format.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.HDR\",\"Codec.Picture\"]",
          "name": "encodeHDR",
          "package": "JuicyPixels",
          "signature": "Image PixelRGBF -\u003e ByteString",
          "source": "src/Codec-Picture-HDR.html#encodeHDR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#v:encodeHDR\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeHDR\"]"
        },
        "index": {
          "description": "Encode an High dynamic range image into radiance image file format",
          "hierarchy": "Codec Picture HDR",
          "module": "Codec.Picture.HDR",
          "name": "encodeHDR",
          "normalized": "Image PixelRGBF-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "HDR",
          "signature": "Image PixelRGBF-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#v:encodeHDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an High dynamic range image into a radiance\n image file on disk.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.HDR\",\"Codec.Picture\"]",
          "name": "writeHDR",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e Image PixelRGBF -\u003e IO ()",
          "source": "src/Codec-Picture-HDR.html#writeHDR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#v:writeHDR\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeHDR\"]"
        },
        "index": {
          "description": "Write an High dynamic range image into radiance image file on disk",
          "hierarchy": "Codec Picture HDR",
          "module": "Codec.Picture.HDR",
          "name": "writeHDR",
          "normalized": "FilePath-\u003eImage PixelRGBF-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "HDR",
          "signature": "FilePath-\u003eImage PixelRGBF-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#v:writeHDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule used for JPEG file loading and writing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Picture.Jpg",
          "name": "Jpg",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Jpg.html",
          "type": "module"
        },
        "index": {
          "description": "Module used for JPEG file loading and writing",
          "hierarchy": "Codec Picture Jpg",
          "module": "Codec.Picture.Jpg",
          "name": "Jpg",
          "package": "JuicyPixels",
          "partial": "Jpg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to decompress a jpeg file and decompress. The colorspace is still\n YCbCr if you want to perform computation on the luma part. You can\n convert it to RGB using \u003ccode\u003e\u003ca\u003econvertImage\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eColorSpaceConvertible\u003c/a\u003e\u003c/code\u003e\n typeclass.\n\u003c/p\u003e\u003cp\u003eThis function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelY8\n\u003c/li\u003e\u003cli\u003e PixelYCbCr8\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Jpg\",\"Codec.Picture\"]",
          "name": "decodeJpeg",
          "package": "JuicyPixels",
          "signature": "ByteString -\u003e Either String DynamicImage",
          "source": "src/Codec-Picture-Jpg.html#decodeJpeg",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:decodeJpeg\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeJpeg\"]"
        },
        "index": {
          "description": "Try to decompress jpeg file and decompress The colorspace is still YCbCr if you want to perform computation on the luma part You can convert it to RGB using convertImage from the ColorSpaceConvertible typeclass This function can output the following pixel types PixelY8 PixelYCbCr8",
          "hierarchy": "Codec Picture Jpg",
          "module": "Codec.Picture.Jpg",
          "name": "decodeJpeg",
          "normalized": "ByteString-\u003eEither String DynamicImage",
          "package": "JuicyPixels",
          "partial": "Jpeg",
          "signature": "ByteString-\u003eEither String DynamicImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:decodeJpeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an image in jpeg at a reasonnable quality level.\n If you want better quality or reduced file size, you should\n use \u003ccode\u003e\u003ca\u003eencodeJpegAtQuality\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Jpg\",\"Codec.Picture\"]",
          "name": "encodeJpeg",
          "package": "JuicyPixels",
          "signature": "Image PixelYCbCr8 -\u003e ByteString",
          "source": "src/Codec-Picture-Jpg.html#encodeJpeg",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:encodeJpeg\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeJpeg\"]"
        },
        "index": {
          "description": "Encode an image in jpeg at reasonnable quality level If you want better quality or reduced file size you should use encodeJpegAtQuality",
          "hierarchy": "Codec Picture Jpg",
          "module": "Codec.Picture.Jpg",
          "name": "encodeJpeg",
          "normalized": "Image PixelYCbCr-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "Jpeg",
          "signature": "Image PixelYCbCr-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:encodeJpeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to call to encode an image to jpeg.\n The quality factor should be between 0 and 100 (100 being\n the best quality).\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Jpg\",\"Codec.Picture\"]",
          "name": "encodeJpegAtQuality",
          "package": "JuicyPixels",
          "signature": "Word8-\u003e Image PixelYCbCr8-\u003e ByteString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:encodeJpegAtQuality\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeJpegAtQuality\"]"
        },
        "index": {
          "description": "Function to call to encode an image to jpeg The quality factor should be between and being the best quality",
          "hierarchy": "Codec Picture Jpg",
          "module": "Codec.Picture.Jpg",
          "name": "encodeJpegAtQuality",
          "normalized": "Word-\u003eImage PixelYCbCr-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "Jpeg At Quality",
          "signature": "Word-\u003eImage PixelYCbCr-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:encodeJpegAtQuality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis pseudo interpreter interpret the Jpg frame for the huffman,\n quant table and restart interval parameters.\n\u003c/p\u003e",
          "module": "Codec.Picture.Jpg",
          "name": "jpgMachineStep",
          "package": "JuicyPixels",
          "signature": "JpgFrame -\u003e JpgScripter s ()",
          "source": "src/Codec-Picture-Jpg.html#jpgMachineStep",
          "type": "function"
        },
        "index": {
          "description": "This pseudo interpreter interpret the Jpg frame for the huffman quant table and restart interval parameters",
          "hierarchy": "Codec Picture Jpg",
          "module": "Codec.Picture.Jpg",
          "name": "jpgMachineStep",
          "normalized": "JpgFrame-\u003eJpgScripter a()",
          "package": "JuicyPixels",
          "partial": "Machine Step",
          "signature": "JpgFrame-\u003eJpgScripter s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:jpgMachineStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule used for loading & writing 'Portable Network Graphics' (PNG)\n files. The API has two layers, the high level, which load the image without\n looking deeply about it and the low level, allowing access to data chunks contained\n in the PNG image.\n\u003c/p\u003e\u003cp\u003eFor general use, please use \u003ccode\u003e\u003ca\u003edecodePng\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eThe loader has been validated against the pngsuite (http:\u003cem/\u003ewww.libpng.org\u003cem\u003epub\u003c/em\u003epng/pngsuite.html)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Picture.Png",
          "name": "Png",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Png.html",
          "type": "module"
        },
        "index": {
          "description": "Module used for loading writing Portable Network Graphics PNG files The API has two layers the high level which load the image without looking deeply about it and the low level allowing access to data chunks contained in the PNG image For general use please use decodePng function The loader has been validated against the pngsuite http www.libpng.org pub png pngsuite.html",
          "hierarchy": "Codec Picture Png",
          "module": "Codec.Picture.Png",
          "name": "Png",
          "package": "JuicyPixels",
          "partial": "Png",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an image into a png if possible.\n\u003c/p\u003e",
          "module": "Codec.Picture.Png",
          "name": "PngSavable",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Png-Export.html#PngSavable",
          "type": "class"
        },
        "index": {
          "description": "Encode an image into png if possible",
          "hierarchy": "Codec Picture Png",
          "module": "Codec.Picture.Png",
          "name": "PngSavable",
          "package": "JuicyPixels",
          "partial": "Png Savable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#t:PngSavable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a raw png image to an image, without modifying the\n underlying pixel type. If the image is greyscale and \u003c 8 bits,\n a transformation to RGBA8 is performed. This should change\n in the future.\n The resulting image let you manage the pixel types.\n\u003c/p\u003e\u003cp\u003eThis function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelY8\n\u003c/li\u003e\u003cli\u003e PixelY16\n\u003c/li\u003e\u003cli\u003e PixelYA8\n\u003c/li\u003e\u003cli\u003e PixelYA16\n\u003c/li\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003cli\u003e PixelRGB16\n\u003c/li\u003e\u003cli\u003e PixelRGBA8\n\u003c/li\u003e\u003cli\u003e PixelRGBA16\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Png\",\"Codec.Picture\"]",
          "name": "decodePng",
          "package": "JuicyPixels",
          "signature": "ByteString -\u003e Either String DynamicImage",
          "source": "src/Codec-Picture-Png.html#decodePng",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:decodePng\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodePng\"]"
        },
        "index": {
          "description": "Transform raw png image to an image without modifying the underlying pixel type If the image is greyscale and bits transformation to RGBA8 is performed This should change in the future The resulting image let you manage the pixel types This function can output the following pixel types PixelY8 PixelY16 PixelYA8 PixelYA16 PixelRGB8 PixelRGB16 PixelRGBA8 PixelRGBA16",
          "hierarchy": "Codec Picture Png",
          "module": "Codec.Picture.Png",
          "name": "decodePng",
          "normalized": "ByteString-\u003eEither String DynamicImage",
          "package": "JuicyPixels",
          "partial": "Png",
          "signature": "ByteString-\u003eEither String DynamicImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:decodePng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a dynamic image in bmp if possible, supported pixel type are :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Y8\n\u003c/li\u003e\u003cli\u003e Y16\n\u003c/li\u003e\u003cli\u003e YA8\n\u003c/li\u003e\u003cli\u003e YA16\n\u003c/li\u003e\u003cli\u003e RGB8\n\u003c/li\u003e\u003cli\u003e RGB16\n\u003c/li\u003e\u003cli\u003e RGBA8\n\u003c/li\u003e\u003cli\u003e RGBA16\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Png\",\"Codec.Picture\"]",
          "name": "encodeDynamicPng",
          "package": "JuicyPixels",
          "signature": "DynamicImage -\u003e Either String ByteString",
          "source": "src/Codec-Picture-Png-Export.html#encodeDynamicPng",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:encodeDynamicPng\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeDynamicPng\"]"
        },
        "index": {
          "description": "Encode dynamic image in bmp if possible supported pixel type are Y8 Y16 YA8 YA16 RGB8 RGB16 RGBA8 RGBA16",
          "hierarchy": "Codec Picture Png",
          "module": "Codec.Picture.Png",
          "name": "encodeDynamicPng",
          "normalized": "DynamicImage-\u003eEither String ByteString",
          "package": "JuicyPixels",
          "partial": "Dynamic Png",
          "signature": "DynamicImage-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:encodeDynamicPng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a paletted image as a color indexed 8-bit PNG.\n the palette must have between 1 and 256 values in it.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Png\",\"Codec.Picture\"]",
          "name": "encodePalettedPng",
          "package": "JuicyPixels",
          "signature": "Palette -\u003e Image Pixel8 -\u003e Either String ByteString",
          "source": "src/Codec-Picture-Png-Export.html#encodePalettedPng",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:encodePalettedPng\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodePalettedPng\"]"
        },
        "index": {
          "description": "Encode paletted image as color indexed bit PNG the palette must have between and values in it",
          "hierarchy": "Codec Picture Png",
          "module": "Codec.Picture.Png",
          "name": "encodePalettedPng",
          "normalized": "Palette-\u003eImage Pixel-\u003eEither String ByteString",
          "package": "JuicyPixels",
          "partial": "Paletted Png",
          "signature": "Palette-\u003eImage Pixel-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:encodePalettedPng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an image into a png encoded bytestring, ready\n to be written as a file.\n\u003c/p\u003e",
          "module": "Codec.Picture.Png",
          "name": "encodePng",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e ByteString",
          "source": "src/Codec-Picture-Png-Export.html#encodePng",
          "type": "method"
        },
        "index": {
          "description": "Transform an image into png encoded bytestring ready to be written as file",
          "hierarchy": "Codec Picture Png",
          "module": "Codec.Picture.Png",
          "name": "encodePng",
          "normalized": "Image a-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "Png",
          "signature": "Image a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:encodePng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a dynamic image in a .png image file if possible.\n The same restriction as encodeDynamicPng apply.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Png\",\"Codec.Picture\"]",
          "name": "writeDynamicPng",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e DynamicImage -\u003e IO (Either String Bool)",
          "source": "src/Codec-Picture-Png-Export.html#writeDynamicPng",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:writeDynamicPng\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeDynamicPng\"]"
        },
        "index": {
          "description": "Write dynamic image in png image file if possible The same restriction as encodeDynamicPng apply",
          "hierarchy": "Codec Picture Png",
          "module": "Codec.Picture.Png",
          "name": "writeDynamicPng",
          "normalized": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)",
          "package": "JuicyPixels",
          "partial": "Dynamic Png",
          "signature": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:writeDynamicPng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to directly write an image as a png on disk.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Png\",\"Codec.Picture\"]",
          "name": "writePng",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e Image pixel -\u003e IO ()",
          "source": "src/Codec-Picture-Png-Export.html#writePng",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:writePng\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writePng\"]"
        },
        "index": {
          "description": "Helper function to directly write an image as png on disk",
          "hierarchy": "Codec Picture Png",
          "module": "Codec.Picture.Png",
          "name": "writePng",
          "normalized": "FilePath-\u003eImage a-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "Png",
          "signature": "FilePath-\u003eImage pixel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:writePng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions to save dynamic images to other file format\n with automatic color space/sample format conversion done automatically.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Picture.Saving",
          "name": "Saving",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Saving.html",
          "type": "module"
        },
        "index": {
          "description": "Helper functions to save dynamic images to other file format with automatic color space sample format conversion done automatically",
          "hierarchy": "Codec Picture Saving",
          "module": "Codec.Picture.Saving",
          "name": "Saving",
          "package": "JuicyPixels",
          "partial": "Saving",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will try to do anything to encode an image\n as bitmap, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for Bitmap encoding\n\u003c/p\u003e",
          "module": "Codec.Picture.Saving",
          "name": "imageToBitmap",
          "package": "JuicyPixels",
          "signature": "DynamicImage -\u003e ByteString",
          "source": "src/Codec-Picture-Saving.html#imageToBitmap",
          "type": "function"
        },
        "index": {
          "description": "This function will try to do anything to encode an image as bitmap make all color conversion and such Equivalent of decodeImage for Bitmap encoding",
          "hierarchy": "Codec Picture Saving",
          "module": "Codec.Picture.Saving",
          "name": "imageToBitmap",
          "normalized": "DynamicImage-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "To Bitmap",
          "signature": "DynamicImage-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will try to do anything to encode an image\n as a gif, make all color conversion and quantization. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for gif encoding\n\u003c/p\u003e",
          "module": "Codec.Picture.Saving",
          "name": "imageToGif",
          "package": "JuicyPixels",
          "signature": "DynamicImage -\u003e Either String ByteString",
          "source": "src/Codec-Picture-Saving.html#imageToGif",
          "type": "function"
        },
        "index": {
          "description": "This function will try to do anything to encode an image as gif make all color conversion and quantization Equivalent of decodeImage for gif encoding",
          "hierarchy": "Codec Picture Saving",
          "module": "Codec.Picture.Saving",
          "name": "imageToGif",
          "normalized": "DynamicImage-\u003eEither String ByteString",
          "package": "JuicyPixels",
          "partial": "To Gif",
          "signature": "DynamicImage-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToGif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will try to do anything to encode an image\n as JPEG, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for jpeg encoding\n\u003c/p\u003e",
          "module": "Codec.Picture.Saving",
          "name": "imageToJpg",
          "package": "JuicyPixels",
          "signature": "Int -\u003e DynamicImage -\u003e ByteString",
          "source": "src/Codec-Picture-Saving.html#imageToJpg",
          "type": "function"
        },
        "index": {
          "description": "This function will try to do anything to encode an image as JPEG make all color conversion and such Equivalent of decodeImage for jpeg encoding",
          "hierarchy": "Codec Picture Saving",
          "module": "Codec.Picture.Saving",
          "name": "imageToJpg",
          "normalized": "Int-\u003eDynamicImage-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "To Jpg",
          "signature": "Int-\u003eDynamicImage-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToJpg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will try to do anything to encode an image\n as PNG, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for PNG encoding\n\u003c/p\u003e",
          "module": "Codec.Picture.Saving",
          "name": "imageToPng",
          "package": "JuicyPixels",
          "signature": "DynamicImage -\u003e ByteString",
          "source": "src/Codec-Picture-Saving.html#imageToPng",
          "type": "function"
        },
        "index": {
          "description": "This function will try to do anything to encode an image as PNG make all color conversion and such Equivalent of decodeImage for PNG encoding",
          "hierarchy": "Codec Picture Saving",
          "module": "Codec.Picture.Saving",
          "name": "imageToPng",
          "normalized": "DynamicImage-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "To Png",
          "signature": "DynamicImage-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToPng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will try to do anything to encode an image\n as RADIANCE, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for radiance encoding\n\u003c/p\u003e",
          "module": "Codec.Picture.Saving",
          "name": "imageToRadiance",
          "package": "JuicyPixels",
          "signature": "DynamicImage -\u003e ByteString",
          "source": "src/Codec-Picture-Saving.html#imageToRadiance",
          "type": "function"
        },
        "index": {
          "description": "This function will try to do anything to encode an image as RADIANCE make all color conversion and such Equivalent of decodeImage for radiance encoding",
          "hierarchy": "Codec Picture Saving",
          "module": "Codec.Picture.Saving",
          "name": "imageToRadiance",
          "normalized": "DynamicImage-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "To Radiance",
          "signature": "DynamicImage-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToRadiance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will try to do anything to encode an image\n as a Tiff, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for Tiff encoding\n\u003c/p\u003e",
          "module": "Codec.Picture.Saving",
          "name": "imageToTiff",
          "package": "JuicyPixels",
          "signature": "DynamicImage -\u003e ByteString",
          "source": "src/Codec-Picture-Saving.html#imageToTiff",
          "type": "function"
        },
        "index": {
          "description": "This function will try to do anything to encode an image as Tiff make all color conversion and such Equivalent of decodeImage for Tiff encoding",
          "hierarchy": "Codec Picture Saving",
          "module": "Codec.Picture.Saving",
          "name": "imageToTiff",
          "normalized": "DynamicImage-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "To Tiff",
          "signature": "DynamicImage-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToTiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule implementing TIFF decoding.\n\u003c/p\u003e\u003cp\u003eSupported compression schemes :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Uncompressed\n\u003c/li\u003e\u003cli\u003e PackBits\n\u003c/li\u003e\u003cli\u003e LZW\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSupported bit depth :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 2 bits\n\u003c/li\u003e\u003cli\u003e 4 bits\n\u003c/li\u003e\u003cli\u003e 8 bits\n\u003c/li\u003e\u003cli\u003e 16 bits\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Codec.Picture.Tiff",
          "name": "Tiff",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Tiff.html",
          "type": "module"
        },
        "index": {
          "description": "Module implementing TIFF decoding Supported compression schemes Uncompressed PackBits LZW Supported bit depth bits bits bits bits",
          "hierarchy": "Codec Picture Tiff",
          "module": "Codec.Picture.Tiff",
          "name": "Tiff",
          "package": "JuicyPixels",
          "partial": "Tiff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass defining which pixel types can be serialized in a\n Tiff file.\n\u003c/p\u003e",
          "module": "Codec.Picture.Tiff",
          "name": "TiffSaveable",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Tiff.html#TiffSaveable",
          "type": "class"
        },
        "index": {
          "description": "Class defining which pixel types can be serialized in Tiff file",
          "hierarchy": "Codec Picture Tiff",
          "module": "Codec.Picture.Tiff",
          "name": "TiffSaveable",
          "package": "JuicyPixels",
          "partial": "Tiff Saveable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#t:TiffSaveable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a raw tiff image to an image, without modifying\n the underlying pixel type.\n\u003c/p\u003e\u003cp\u003eThis function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelY8\n\u003c/li\u003e\u003cli\u003e PixelY16\n\u003c/li\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003cli\u003e PixelRGB16\n\u003c/li\u003e\u003cli\u003e PixelCMYK8\n\u003c/li\u003e\u003cli\u003e PixelCMYK16\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Codec.Picture.Tiff\",\"Codec.Picture\"]",
          "name": "decodeTiff",
          "package": "JuicyPixels",
          "signature": "ByteString -\u003e Either String DynamicImage",
          "source": "src/Codec-Picture-Tiff.html#decodeTiff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#v:decodeTiff\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeTiff\"]"
        },
        "index": {
          "description": "Transform raw tiff image to an image without modifying the underlying pixel type This function can output the following pixel types PixelY8 PixelY16 PixelRGB8 PixelRGB16 PixelCMYK8 PixelCMYK16",
          "hierarchy": "Codec Picture Tiff",
          "module": "Codec.Picture.Tiff",
          "name": "decodeTiff",
          "normalized": "ByteString-\u003eEither String DynamicImage",
          "package": "JuicyPixels",
          "partial": "Tiff",
          "signature": "ByteString-\u003eEither String DynamicImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#v:decodeTiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an image into a Tiff encoded bytestring, reade to be\n written as a file.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Tiff\",\"Codec.Picture\"]",
          "name": "encodeTiff",
          "package": "JuicyPixels",
          "signature": "Image px -\u003e ByteString",
          "source": "src/Codec-Picture-Tiff.html#encodeTiff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#v:encodeTiff\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeTiff\"]"
        },
        "index": {
          "description": "Transform an image into Tiff encoded bytestring reade to be written as file",
          "hierarchy": "Codec Picture Tiff",
          "module": "Codec.Picture.Tiff",
          "name": "encodeTiff",
          "normalized": "Image a-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "Tiff",
          "signature": "Image px-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#v:encodeTiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to directly write an image as a tiff on disk.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Tiff\",\"Codec.Picture\"]",
          "name": "writeTiff",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e Image pixel -\u003e IO ()",
          "source": "src/Codec-Picture-Tiff.html#writeTiff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#v:writeTiff\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeTiff\"]"
        },
        "index": {
          "description": "Helper function to directly write an image as tiff on disk",
          "hierarchy": "Codec Picture Tiff",
          "module": "Codec.Picture.Tiff",
          "name": "writeTiff",
          "normalized": "FilePath-\u003eImage a-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "Tiff",
          "signature": "FilePath-\u003eImage pixel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#v:writeTiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing the basic types for image manipulation in the library.\n Defining the types used to store all those _Juicy Pixels_\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Picture.Types",
          "name": "Types",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Module providing the basic types for image manipulation in the library Defining the types used to store all those Juicy Pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "Types",
          "package": "JuicyPixels",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplement upcasting for pixel types.\n Minimal declaration of \u003ccode\u003e\u003ca\u003epromotePixel\u003c/a\u003e\u003c/code\u003e.\n It is strongly recommended to overload promoteImage to keep\n performance acceptable\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "ColorConvertible",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#ColorConvertible",
          "type": "class"
        },
        "index": {
          "description": "Implement upcasting for pixel types Minimal declaration of promotePixel It is strongly recommended to overload promoteImage to keep performance acceptable",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ColorConvertible",
          "package": "JuicyPixels",
          "partial": "Color Convertible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:ColorConvertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass used to describle plane present in the pixel\n type. If a pixel has a plane description associated,\n you can use the plane name to extract planes independently.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "ColorPlane",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#ColorPlane",
          "type": "class"
        },
        "index": {
          "description": "Class used to describle plane present in the pixel type If pixel has plane description associated you can use the plane name to extract planes independently",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ColorPlane",
          "package": "JuicyPixels",
          "partial": "Color Plane",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:ColorPlane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class abstract colorspace conversion. This\n conversion can be lossy, which ColorConvertible cannot\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "ColorSpaceConvertible",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#ColorSpaceConvertible",
          "type": "class"
        },
        "index": {
          "description": "This class abstract colorspace conversion This conversion can be lossy which ColorConvertible cannot",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ColorSpaceConvertible",
          "package": "JuicyPixels",
          "partial": "Color Space Convertible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:ColorSpaceConvertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType allowing the loading of an image with different pixel\n structures\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "DynamicImage",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "data"
        },
        "index": {
          "description": "Type allowing the loading of an image with different pixel structures",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "DynamicImage",
          "package": "JuicyPixels",
          "partial": "Dynamic Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:DynamicImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage or pixel buffer, the coordinates are assumed to start\n from the upper-left corner of the image, with the horizontal\n position first, then the vertical one.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "Image",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Image",
          "type": "data"
        },
        "index": {
          "description": "Image or pixel buffer the coordinates are assumed to start from the upper-left corner of the image with the horizontal position first then the vertical one",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "Image",
          "package": "JuicyPixels",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper class to help extract a luma plane out\n of an image or a pixel\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "LumaPlaneExtractable",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#LumaPlaneExtractable",
          "type": "class"
        },
        "index": {
          "description": "Helper class to help extract luma plane out of an image or pixel",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "LumaPlaneExtractable",
          "package": "JuicyPixels",
          "partial": "Luma Plane Extractable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:LumaPlaneExtractable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage or pixel buffer, the coordinates are assumed to start\n from the upper-left corner of the image, with the horizontal\n position first, then the vertical one. The image can be transformed in place.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "MutableImage",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#MutableImage",
          "type": "data"
        },
        "index": {
          "description": "Image or pixel buffer the coordinates are assumed to start from the upper-left corner of the image with the horizontal position first then the vertical one The image can be transformed in place",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "MutableImage",
          "package": "JuicyPixels",
          "partial": "Mutable Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:MutableImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for the palette used in Gif & PNG files.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "Palette",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Palette",
          "type": "type"
        },
        "index": {
          "description": "Type for the palette used in Gif PNG files",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "Palette",
          "package": "JuicyPixels",
          "partial": "Palette",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of pixels used in images. Each pixel has a color space, and a representative\n component (Word8 or Float).\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "Pixel",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Pixel",
          "type": "class"
        },
        "index": {
          "description": "Definition of pixels used in images Each pixel has color space and representative component Word8 or Float",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "Pixel",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Pixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for 16bit greyscale pixels.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "Pixel16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Pixel16",
          "type": "type"
        },
        "index": {
          "description": "Type alias for bit greyscale pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "Pixel16",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Pixel16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for 32bit greyscale pixels.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "Pixel32",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Pixel32",
          "type": "type"
        },
        "index": {
          "description": "Type alias for bit greyscale pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "Pixel32",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Pixel32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for 8bit greyscale pixels. For simplicity,\n greyscale pixels use plain numbers instead of a separate type.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "Pixel8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Pixel8",
          "type": "type"
        },
        "index": {
          "description": "Type alias for bit greyscale pixels For simplicity greyscale pixels use plain numbers instead of separate type",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "Pixel8",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Pixel8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel storing data in the CMYK colorspace. Values\n are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cyan\n\u003c/li\u003e\u003cli\u003e Magenta\n\u003c/li\u003e\u003cli\u003e Yellow\n\u003c/li\u003e\u003cli\u003e Black\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelCMYK16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelCMYK16",
          "type": "data"
        },
        "index": {
          "description": "Pixel storing data in the CMYK colorspace Values are stored in the following order Cyan Magenta Yellow Black",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelCMYK16",
          "package": "JuicyPixels",
          "partial": "Pixel CMYK",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelCMYK16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel storing data in the CMYK colorspace. Values\n are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cyan\n\u003c/li\u003e\u003cli\u003e Magenta\n\u003c/li\u003e\u003cli\u003e Yellow\n\u003c/li\u003e\u003cli\u003e Black\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelCMYK8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelCMYK8",
          "type": "data"
        },
        "index": {
          "description": "Pixel storing data in the CMYK colorspace Values are stored in the following order Cyan Magenta Yellow Black",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelCMYK8",
          "package": "JuicyPixels",
          "partial": "Pixel CMYK",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelCMYK8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for 32bit floating point greyscale pixels. The standard\n bounded value range is mapped to the closed interval [0,1] i.e.\n\u003c/p\u003e\u003cpre\u003e map promotePixel [0, 1 .. 255 :: Pixel8] == [0/255, 1/255 .. 1.0 :: PixelF]\n\u003c/pre\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelF",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelF",
          "type": "type"
        },
        "index": {
          "description": "Type alias for bit floating point greyscale pixels The standard bounded value range is mapped to the closed interval i.e map promotePixel Pixel8 PixelF",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelF",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing pixels on 16 bits\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelRGB16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGB16",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing pixels on bits Value are stored in the following order Red Green Blue",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGB16",
          "package": "JuicyPixels",
          "partial": "Pixel RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGB16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing classic pixel on 8 bits\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelRGB8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGB8",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing classic pixel on bits Value are stored in the following order Red Green Blue",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGB8",
          "package": "JuicyPixels",
          "partial": "Pixel RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing a RGB information with an alpha\n channel on 16 bits.\n Values are stored in the following order\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelRGBA16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGBA16",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing RGB information with an alpha channel on bits Values are stored in the following order Red Green Blue Alpha",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGBA16",
          "package": "JuicyPixels",
          "partial": "Pixel RGBA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGBA16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing a classic pixel, with an alpha component.\n Values are stored in the following order\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelRGBA8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGBA8",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing classic pixel with an alpha component Values are stored in the following order Red Green Blue Alpha",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGBA8",
          "package": "JuicyPixels",
          "partial": "Pixel RGBA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGBA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing HDR pixel on 32 bits float\n Values are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelRGBF",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGBF",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing HDR pixel on bits float Values are stored in the following order Red Green Blue",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGBF",
          "package": "JuicyPixels",
          "partial": "Pixel RGBF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing Luminance (Y) and alpha information\n on 16 bits.\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Luminance\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelYA16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelYA16",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing Luminance and alpha information on bits Value are stored in the following order Luminance Alpha",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelYA16",
          "package": "JuicyPixels",
          "partial": "Pixel YA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelYA16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing Luminance (Y) and alpha information\n on 8 bits.\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Luminance\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelYA8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelYA8",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing Luminance and alpha information on bits Value are stored in the following order Luminance Alpha",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelYA8",
          "package": "JuicyPixels",
          "partial": "Pixel YA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelYA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel storing data in the YCbCr colorspace,\n values are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Y (luminance)\n\u003c/li\u003e\u003cli\u003e Cr\n\u003c/li\u003e\u003cli\u003e Cb\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture.Types",
          "name": "PixelYCbCr8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelYCbCr8",
          "type": "data"
        },
        "index": {
          "description": "Pixel storing data in the YCbCr colorspace values are stored in the following order luminance Cr Cb",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelYCbCr8",
          "package": "JuicyPixels",
          "partial": "Pixel YCb Cr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelYCbCr8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the plane for the alpha (transparency) component\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneAlpha",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneAlpha",
          "type": "data"
        },
        "index": {
          "description": "Define the plane for the alpha transparency component",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneAlpha",
          "package": "JuicyPixels",
          "partial": "Plane Alpha",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine plane for the black component of\n the CMYK color space.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneBlack",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneBlack",
          "type": "data"
        },
        "index": {
          "description": "Define plane for the black component of the CMYK color space",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneBlack",
          "package": "JuicyPixels",
          "partial": "Plane Black",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneBlack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the plane for the blue color component\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneBlue",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneBlue",
          "type": "data"
        },
        "index": {
          "description": "Define the plane for the blue color component",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneBlue",
          "package": "JuicyPixels",
          "partial": "Plane Blue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the plane for the Cb component\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneCb",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneCb",
          "type": "data"
        },
        "index": {
          "description": "Define the plane for the Cb component",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneCb",
          "package": "JuicyPixels",
          "partial": "Plane Cb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneCb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the plane for the Cr component\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneCr",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneCr",
          "type": "data"
        },
        "index": {
          "description": "Define the plane for the Cr component",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneCr",
          "package": "JuicyPixels",
          "partial": "Plane Cr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneCr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine plane for the cyan component of the\n CMYK color space.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneCyan",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneCyan",
          "type": "data"
        },
        "index": {
          "description": "Define plane for the cyan component of the CMYK color space",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneCyan",
          "package": "JuicyPixels",
          "partial": "Plane Cyan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneCyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the plane for the green color component\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneGreen",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneGreen",
          "type": "data"
        },
        "index": {
          "description": "Define the plane for the green color component",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneGreen",
          "package": "JuicyPixels",
          "partial": "Plane Green",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the plane for the luma component\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneLuma",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneLuma",
          "type": "data"
        },
        "index": {
          "description": "Define the plane for the luma component",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneLuma",
          "package": "JuicyPixels",
          "partial": "Plane Luma",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneLuma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine plane for the magenta component of the\n CMYK color space.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneMagenta",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneMagenta",
          "type": "data"
        },
        "index": {
          "description": "Define plane for the magenta component of the CMYK color space",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneMagenta",
          "package": "JuicyPixels",
          "partial": "Plane Magenta",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneMagenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the plane for the red color component\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneRed",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneRed",
          "type": "data"
        },
        "index": {
          "description": "Define the plane for the red color component",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneRed",
          "package": "JuicyPixels",
          "partial": "Plane Red",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine plane for the yellow component of the\n CMYK color space.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "PlaneYellow",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PlaneYellow",
          "type": "data"
        },
        "index": {
          "description": "Define plane for the yellow component of the CMYK color space",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneYellow",
          "package": "JuicyPixels",
          "partial": "Plane Yellow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneYellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass modeling transparent pixel, should provide a method\n to combine transparent pixels\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "TransparentPixel",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#TransparentPixel",
          "type": "class"
        },
        "index": {
          "description": "Class modeling transparent pixel should provide method to combine transparent pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "TransparentPixel",
          "package": "JuicyPixels",
          "partial": "Transparent Pixel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:TransparentPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "Image",
          "package": "JuicyPixels",
          "signature": "Image",
          "source": "src/Codec-Picture-Types.html#Image",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:Image\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:Image\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "Image",
          "package": "JuicyPixels",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in the colorspace CMYK and 16 bots precision\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageCMYK16",
          "package": "JuicyPixels",
          "signature": "ImageCMYK16 (Image PixelCMYK16)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageCMYK16\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageCMYK16\"]"
        },
        "index": {
          "description": "An image in the colorspace CMYK and bots precision",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageCMYK16",
          "package": "JuicyPixels",
          "partial": "Image CMYK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageCMYK16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in the colorspace CMYK\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageCMYK8",
          "package": "JuicyPixels",
          "signature": "ImageCMYK8 (Image PixelCMYK8)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageCMYK8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageCMYK8\"]"
        },
        "index": {
          "description": "An image in the colorspace CMYK",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageCMYK8",
          "package": "JuicyPixels",
          "partial": "Image CMYK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageCMYK8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in true color with 16bit depth.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageRGB16",
          "package": "JuicyPixels",
          "signature": "ImageRGB16 (Image PixelRGB16)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGB16\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGB16\"]"
        },
        "index": {
          "description": "An image in true color with bit depth",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageRGB16",
          "package": "JuicyPixels",
          "partial": "Image RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGB16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in true color.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageRGB8",
          "package": "JuicyPixels",
          "signature": "ImageRGB8 (Image PixelRGB8)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGB8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGB8\"]"
        },
        "index": {
          "description": "An image in true color",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageRGB8",
          "package": "JuicyPixels",
          "partial": "Image RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA true color image with alpha on 16 bits.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageRGBA16",
          "package": "JuicyPixels",
          "signature": "ImageRGBA16 (Image PixelRGBA16)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGBA16\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGBA16\"]"
        },
        "index": {
          "description": "true color image with alpha on bits",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageRGBA16",
          "package": "JuicyPixels",
          "partial": "Image RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGBA16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in true color and an alpha channel.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageRGBA8",
          "package": "JuicyPixels",
          "signature": "ImageRGBA8 (Image PixelRGBA8)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGBA8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGBA8\"]"
        },
        "index": {
          "description": "An image in true color and an alpha channel",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageRGBA8",
          "package": "JuicyPixels",
          "partial": "Image RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGBA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image with HDR pixels\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageRGBF",
          "package": "JuicyPixels",
          "signature": "ImageRGBF (Image PixelRGBF)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGBF\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGBF\"]"
        },
        "index": {
          "description": "An image with HDR pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageRGBF",
          "package": "JuicyPixels",
          "partial": "Image RGBF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA greyscale image with 16bit components\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageY16",
          "package": "JuicyPixels",
          "signature": "ImageY16 (Image Pixel16)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageY16\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageY16\"]"
        },
        "index": {
          "description": "greyscale image with bit components",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageY16",
          "package": "JuicyPixels",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageY16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA greyscale image.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageY8",
          "package": "JuicyPixels",
          "signature": "ImageY8 (Image Pixel8)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageY8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageY8\"]"
        },
        "index": {
          "description": "greyscale image",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageY8",
          "package": "JuicyPixels",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageY8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in greyscale with alpha channel on 16 bits.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageYA16",
          "package": "JuicyPixels",
          "signature": "ImageYA16 (Image PixelYA16)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYA16\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageYA16\"]"
        },
        "index": {
          "description": "An image in greyscale with alpha channel on bits",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageYA16",
          "package": "JuicyPixels",
          "partial": "Image YA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYA16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in greyscale with an alpha channel.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageYA8",
          "package": "JuicyPixels",
          "signature": "ImageYA8 (Image PixelYA8)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYA8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageYA8\"]"
        },
        "index": {
          "description": "An image in greyscale with an alpha channel",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageYA8",
          "package": "JuicyPixels",
          "partial": "Image YA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in the colorspace used by Jpeg images.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageYCbCr8",
          "package": "JuicyPixels",
          "signature": "ImageYCbCr8 (Image PixelYCbCr8)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYCbCr8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageYCbCr8\"]"
        },
        "index": {
          "description": "An image in the colorspace used by Jpeg images",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageYCbCr8",
          "package": "JuicyPixels",
          "partial": "Image YCb Cr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYCbCr8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA greyscale HDR image\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "ImageYF",
          "package": "JuicyPixels",
          "signature": "ImageYF (Image PixelF)",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYF\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageYF\"]"
        },
        "index": {
          "description": "greyscale HDR image",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "ImageYF",
          "package": "JuicyPixels",
          "partial": "Image YF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "MutableImage",
          "package": "JuicyPixels",
          "signature": "MutableImage",
          "source": "src/Codec-Picture-Types.html#MutableImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "MutableImage",
          "package": "JuicyPixels",
          "partial": "Mutable Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:MutableImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelCMYK16",
          "package": "JuicyPixels",
          "signature": "PixelCMYK16 !Pixel16 !Pixel16 !Pixel16 !Pixel16",
          "source": "src/Codec-Picture-Types.html#PixelCMYK16",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelCMYK16\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelCMYK16\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelCMYK16",
          "package": "JuicyPixels",
          "partial": "Pixel CMYK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelCMYK16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelCMYK8",
          "package": "JuicyPixels",
          "signature": "PixelCMYK8 !Pixel8 !Pixel8 !Pixel8 !Pixel8",
          "source": "src/Codec-Picture-Types.html#PixelCMYK8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelCMYK8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelCMYK8\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelCMYK8",
          "package": "JuicyPixels",
          "partial": "Pixel CMYK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelCMYK8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelRGB16",
          "package": "JuicyPixels",
          "signature": "PixelRGB16 !Pixel16 !Pixel16 !Pixel16",
          "source": "src/Codec-Picture-Types.html#PixelRGB16",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGB16\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGB16\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGB16",
          "package": "JuicyPixels",
          "partial": "Pixel RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGB16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelRGB8",
          "package": "JuicyPixels",
          "signature": "PixelRGB8 !Pixel8 !Pixel8 !Pixel8",
          "source": "src/Codec-Picture-Types.html#PixelRGB8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGB8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGB8\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGB8",
          "package": "JuicyPixels",
          "partial": "Pixel RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelRGBA16",
          "package": "JuicyPixels",
          "signature": "PixelRGBA16 !Pixel16 !Pixel16 !Pixel16 !Pixel16",
          "source": "src/Codec-Picture-Types.html#PixelRGBA16",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGBA16\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGBA16\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGBA16",
          "package": "JuicyPixels",
          "partial": "Pixel RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGBA16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelRGBA8",
          "package": "JuicyPixels",
          "signature": "PixelRGBA8 !Pixel8 !Pixel8 !Pixel8 !Pixel8",
          "source": "src/Codec-Picture-Types.html#PixelRGBA8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGBA8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGBA8\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGBA8",
          "package": "JuicyPixels",
          "partial": "Pixel RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGBA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelRGBF",
          "package": "JuicyPixels",
          "signature": "PixelRGBF !PixelF !PixelF !PixelF",
          "source": "src/Codec-Picture-Types.html#PixelRGBF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGBF\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGBF\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelRGBF",
          "package": "JuicyPixels",
          "partial": "Pixel RGBF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelYA16",
          "package": "JuicyPixels",
          "signature": "PixelYA16 !Pixel16 !Pixel16",
          "source": "src/Codec-Picture-Types.html#PixelYA16",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelYA16\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelYA16\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelYA16",
          "package": "JuicyPixels",
          "partial": "Pixel YA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelYA16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelYA8",
          "package": "JuicyPixels",
          "signature": "PixelYA8 !Pixel8 !Pixel8",
          "source": "src/Codec-Picture-Types.html#PixelYA8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelYA8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelYA8\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelYA8",
          "package": "JuicyPixels",
          "partial": "Pixel YA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelYA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "PixelYCbCr8",
          "package": "JuicyPixels",
          "signature": "PixelYCbCr8 !Pixel8 !Pixel8 !Pixel8",
          "source": "src/Codec-Picture-Types.html#PixelYCbCr8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelYCbCr8\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelYCbCr8\"]"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PixelYCbCr8",
          "package": "JuicyPixels",
          "partial": "Pixel YCb Cr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelYCbCr8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneAlpha",
          "package": "JuicyPixels",
          "signature": "PlaneAlpha",
          "source": "src/Codec-Picture-Types.html#PlaneAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneAlpha",
          "package": "JuicyPixels",
          "partial": "Plane Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneBlack",
          "package": "JuicyPixels",
          "signature": "PlaneBlack",
          "source": "src/Codec-Picture-Types.html#PlaneBlack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneBlack",
          "package": "JuicyPixels",
          "partial": "Plane Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneBlack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneBlue",
          "package": "JuicyPixels",
          "signature": "PlaneBlue",
          "source": "src/Codec-Picture-Types.html#PlaneBlue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneBlue",
          "package": "JuicyPixels",
          "partial": "Plane Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneCb",
          "package": "JuicyPixels",
          "signature": "PlaneCb",
          "source": "src/Codec-Picture-Types.html#PlaneCb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneCb",
          "package": "JuicyPixels",
          "partial": "Plane Cb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneCb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneCr",
          "package": "JuicyPixels",
          "signature": "PlaneCr",
          "source": "src/Codec-Picture-Types.html#PlaneCr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneCr",
          "package": "JuicyPixels",
          "partial": "Plane Cr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneCr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneCyan",
          "package": "JuicyPixels",
          "signature": "PlaneCyan",
          "source": "src/Codec-Picture-Types.html#PlaneCyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneCyan",
          "package": "JuicyPixels",
          "partial": "Plane Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneCyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneGreen",
          "package": "JuicyPixels",
          "signature": "PlaneGreen",
          "source": "src/Codec-Picture-Types.html#PlaneGreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneGreen",
          "package": "JuicyPixels",
          "partial": "Plane Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneLuma",
          "package": "JuicyPixels",
          "signature": "PlaneLuma",
          "source": "src/Codec-Picture-Types.html#PlaneLuma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneLuma",
          "package": "JuicyPixels",
          "partial": "Plane Luma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneLuma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneMagenta",
          "package": "JuicyPixels",
          "signature": "PlaneMagenta",
          "source": "src/Codec-Picture-Types.html#PlaneMagenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneMagenta",
          "package": "JuicyPixels",
          "partial": "Plane Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneMagenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneRed",
          "package": "JuicyPixels",
          "signature": "PlaneRed",
          "source": "src/Codec-Picture-Types.html#PlaneRed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneRed",
          "package": "JuicyPixels",
          "partial": "Plane Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Picture.Types",
          "name": "PlaneYellow",
          "package": "JuicyPixels",
          "signature": "PlaneYellow",
          "source": "src/Codec-Picture-Types.html#PlaneYellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "PlaneYellow",
          "package": "JuicyPixels",
          "partial": "Plane Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneYellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all color component of a pixel.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "colorMap",
          "package": "JuicyPixels",
          "signature": "(PixelBaseComponent a -\u003e PixelBaseComponent a) -\u003e a -\u003e a",
          "source": "src/Codec-Picture-Types.html#colorMap",
          "type": "method"
        },
        "index": {
          "description": "Apply function to all color component of pixel",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "colorMap",
          "normalized": "(PixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea",
          "package": "JuicyPixels",
          "partial": "Map",
          "signature": "(PixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:colorMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of component of the pixel\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "componentCount",
          "package": "JuicyPixels",
          "signature": "a -\u003e Int",
          "source": "src/Codec-Picture-Types.html#componentCount",
          "type": "method"
        },
        "index": {
          "description": "Return the number of component of the pixel",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "componentCount",
          "normalized": "a-\u003eInt",
          "package": "JuicyPixels",
          "partial": "Count",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:componentCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the luminance part of a pixel\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "computeLuma",
          "package": "JuicyPixels",
          "signature": "a -\u003e PixelBaseComponent a",
          "source": "src/Codec-Picture-Types.html#computeLuma",
          "type": "method"
        },
        "index": {
          "description": "Compute the luminance part of pixel",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "computeLuma",
          "normalized": "a-\u003ePixelBaseComponent a",
          "package": "JuicyPixels",
          "partial": "Luma",
          "signature": "a-\u003ePixelBaseComponent a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:computeLuma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to convert a whole image by taking a\n copy it.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "convertImage",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e Image b",
          "source": "src/Codec-Picture-Types.html#convertImage",
          "type": "method"
        },
        "index": {
          "description": "Helper function to convert whole image by taking copy it",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "convertImage",
          "normalized": "Image a-\u003eImage b",
          "package": "JuicyPixels",
          "partial": "Image",
          "signature": "Image a-\u003eImage b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:convertImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass a pixel from a colorspace (say RGB) to the second one\n (say YCbCr)\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "convertPixel",
          "package": "JuicyPixels",
          "signature": "a -\u003e b",
          "source": "src/Codec-Picture-Types.html#convertPixel",
          "type": "method"
        },
        "index": {
          "description": "Pass pixel from colorspace say RGB to the second one say YCbCr",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "convertPixel",
          "normalized": "a-\u003eb",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:convertPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a mutable image, filled with the given background color.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "createMutableImage",
          "package": "JuicyPixels",
          "signature": "Int-\u003e Int-\u003e px-\u003e m (MutableImage (PrimState m) px)",
          "type": "function"
        },
        "index": {
          "description": "Create mutable image filled with the given background color",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "createMutableImage",
          "normalized": "Int-\u003eInt-\u003ea-\u003eb(MutableImage(PrimState b)a)",
          "package": "JuicyPixels",
          "partial": "Mutable Image",
          "signature": "Int-\u003eInt-\u003epx-\u003em(MutableImage(PrimState m)px)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:createMutableImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor any image with an alpha component (transparency),\n drop it, returning a pure opaque image.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "dropAlphaLayer",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e Image b",
          "source": "src/Codec-Picture-Types.html#dropAlphaLayer",
          "type": "function"
        },
        "index": {
          "description": "For any image with an alpha component transparency drop it returning pure opaque image",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "dropAlphaLayer",
          "normalized": "Image a-\u003eImage b",
          "package": "JuicyPixels",
          "partial": "Alpha Layer",
          "signature": "Image a-\u003eImage b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:dropAlphaLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust return the opaque pixel value\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "dropTransparency",
          "package": "JuicyPixels",
          "signature": "a -\u003e b",
          "source": "src/Codec-Picture-Types.html#dropTransparency",
          "type": "method"
        },
        "index": {
          "description": "Just return the opaque pixel value",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "dropTransparency",
          "normalized": "a-\u003eb",
          "package": "JuicyPixels",
          "partial": "Transparency",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:dropTransparency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to help extract information from dynamic\n image. To get the width of a dynamic image, you can use\n the following snippet :\n\u003c/p\u003e\u003cpre\u003e dynWidth :: DynamicImage -\u003e Int\n dynWidth img = dynamicMap imageWidth img\n\u003c/pre\u003e",
          "module": "Codec.Picture.Types",
          "name": "dynamicMap",
          "package": "JuicyPixels",
          "signature": "Image pixel -\u003e a) -\u003e DynamicImage -\u003e a",
          "source": "src/Codec-Picture-Types.html#dynamicMap",
          "type": "function"
        },
        "index": {
          "description": "Helper function to help extract information from dynamic image To get the width of dynamic image you can use the following snippet dynWidth DynamicImage Int dynWidth img dynamicMap imageWidth img",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "dynamicMap",
          "normalized": "Image a-\u003eb)-\u003eDynamicImage-\u003eb",
          "package": "JuicyPixels",
          "partial": "Map",
          "signature": "Image pixel-\u003ea)-\u003eDynamicImage-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:dynamicMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent of the \u003ccode\u003e\u003ca\u003epixelMap\u003c/a\u003e\u003c/code\u003e function for the dynamic images.\n You can perform pixel colorspace independant operations with this\n function.\n\u003c/p\u003e\u003cp\u003eFor instance, if you want to extract a square crop of any image,\n without caring about colorspace, you can use the following snippet.\n\u003c/p\u003e\u003cpre\u003e dynSquare :: DynamicImage -\u003e DynamicImage\n dynSquare = dynMap squareImage\n\n squareImage :: Pixel a =\u003e Image a -\u003e Image a\n squareImage img = generateImage (\\x y -\u003e pixelAt img x y) edge edge\n    where edge = min (imageWidth img) (imageHeight img)\n\u003c/pre\u003e",
          "module": "Codec.Picture.Types",
          "name": "dynamicPixelMap",
          "package": "JuicyPixels",
          "signature": "Image pixel -\u003e Image pixel) -\u003e DynamicImage -\u003e DynamicImage",
          "source": "src/Codec-Picture-Types.html#dynamicPixelMap",
          "type": "function"
        },
        "index": {
          "description": "Equivalent of the pixelMap function for the dynamic images You can perform pixel colorspace independant operations with this function For instance if you want to extract square crop of any image without caring about colorspace you can use the following snippet dynSquare DynamicImage DynamicImage dynSquare dynMap squareImage squareImage Pixel Image Image squareImage img generateImage pixelAt img edge edge where edge min imageWidth img imageHeight img",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "dynamicPixelMap",
          "normalized": "Image a-\u003eImage a)-\u003eDynamicImage-\u003eDynamicImage",
          "package": "JuicyPixels",
          "partial": "Pixel Map",
          "signature": "Image pixel-\u003eImage pixel)-\u003eDynamicImage-\u003eDynamicImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:dynamicPixelMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a color plane from an image given a present plane in the image\n examples :\n\u003c/p\u003e\u003cpre\u003e\n  extractRedPlane :: Image PixelRGB8-\u003e Image Pixel8\n  extractRedPlane = extractComponent PlaneRed\n\u003c/pre\u003e",
          "module": "Codec.Picture.Types",
          "name": "extractComponent",
          "package": "JuicyPixels",
          "signature": "plane -\u003e Image px -\u003e Image (PixelBaseComponent px)",
          "source": "src/Codec-Picture-Types.html#extractComponent",
          "type": "function"
        },
        "index": {
          "description": "Extract color plane from an image given present plane in the image examples extractRedPlane Image PixelRGB8 Image Pixel8 extractRedPlane extractComponent PlaneRed",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "extractComponent",
          "normalized": "a-\u003eImage b-\u003eImage(PixelBaseComponent b)",
          "package": "JuicyPixels",
          "partial": "Component",
          "signature": "plane-\u003eImage px-\u003eImage(PixelBaseComponent px)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:extractComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a luma plane out of an image. This\n method is in the typeclass to help performant\n implementation.\n\u003c/p\u003e\u003cpre\u003e jpegToGrayScale :: FilePath -\u003e FilePath -\u003e IO ()\n jpegToGrayScale source dest\n\u003c/pre\u003e",
          "module": "Codec.Picture.Types",
          "name": "extractLumaPlane",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e Image (PixelBaseComponent a)",
          "source": "src/Codec-Picture-Types.html#extractLumaPlane",
          "type": "method"
        },
        "index": {
          "description": "Extract luma plane out of an image This method is in the typeclass to help performant implementation jpegToGrayScale FilePath FilePath IO jpegToGrayScale source dest",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "extractLumaPlane",
          "normalized": "Image a-\u003eImage(PixelBaseComponent a)",
          "package": "JuicyPixels",
          "partial": "Luma Plane",
          "signature": "Image a-\u003eImage(PixelBaseComponent a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:extractLumaPlane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e`O(n)` Yield an immutable copy of an image by making a copy of it\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "freezeImage",
          "package": "JuicyPixels",
          "signature": "MutableImage (PrimState m) px -\u003e m (Image px)",
          "source": "src/Codec-Picture-Types.html#freezeImage",
          "type": "function"
        },
        "index": {
          "description": "Yield an immutable copy of an image by making copy of it",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "freezeImage",
          "normalized": "MutableImage(PrimState a)b-\u003ea(Image b)",
          "package": "JuicyPixels",
          "partial": "Image",
          "signature": "MutableImage(PrimState m)px-\u003em(Image px)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:freezeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a gamma correction for an image with HDR pixels.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "gammaCorrection",
          "package": "JuicyPixels",
          "signature": "PixelF-\u003e Image PixelRGBF-\u003e Image PixelRGBF",
          "type": "function"
        },
        "index": {
          "description": "Perform gamma correction for an image with HDR pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "gammaCorrection",
          "normalized": "PixelF-\u003eImage PixelRGBF-\u003eImage PixelRGBF",
          "package": "JuicyPixels",
          "partial": "Correction",
          "signature": "PixelF-\u003eImage PixelRGBF-\u003eImage PixelRGBF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:gammaCorrection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an image given a function to generate pixels.\n The function will receive values from 0 to width-1 for the x parameter\n and 0 to height-1 for the y parameter. The coordinates 0,0 are the upper\n left corner of the image, and (width-1, height-1) the lower right corner.\n\u003c/p\u003e\u003cp\u003ethe acc parameter is a user defined one.\n\u003c/p\u003e\u003cp\u003eThe function is called for each pixel in the line from left to right (0 to width - 1)\n and for each line (0 to height - 1).\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "generateFoldImage",
          "package": "JuicyPixels",
          "signature": "(acc -\u003e Int -\u003e Int -\u003e (acc, a))-\u003e acc-\u003e Int-\u003e Int-\u003e (acc, Image a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:generateFoldImage\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:generateFoldImage\"]"
        },
        "index": {
          "description": "Create an image given function to generate pixels The function will receive values from to width-1 for the parameter and to height-1 for the parameter The coordinates are the upper left corner of the image and width-1 height-1 the lower right corner the acc parameter is user defined one The function is called for each pixel in the line from left to right to width and for each line to height",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "generateFoldImage",
          "normalized": "(a-\u003eInt-\u003eInt-\u003e(a,b))-\u003ea-\u003eInt-\u003eInt-\u003e(a,Image b)",
          "package": "JuicyPixels",
          "partial": "Fold Image",
          "signature": "(acc-\u003eInt-\u003eInt-\u003e(acc,a))-\u003eacc-\u003eInt-\u003eInt-\u003e(acc,Image a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:generateFoldImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an image given a function to generate pixels.\n The function will receive values from 0 to width-1 for the x parameter\n and 0 to height-1 for the y parameter. The coordinates 0,0 are the upper\n left corner of the image, and (width-1, height-1) the lower right corner.\n\u003c/p\u003e\u003cp\u003efor example, to create a small gradient image :\n\u003c/p\u003e\u003cpre\u003e imageCreator :: String -\u003e IO ()\n imageCreator path = writePng path $ generateImage pixelRenderer 250 300\n    where pixelRenderer x y = PixelRGB8 x y 128\n\u003c/pre\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "generateImage",
          "package": "JuicyPixels",
          "signature": "(Int -\u003e Int -\u003e a)-\u003e Int-\u003e Int-\u003e Image a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:generateImage\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:generateImage\"]"
        },
        "index": {
          "description": "Create an image given function to generate pixels The function will receive values from to width-1 for the parameter and to height-1 for the parameter The coordinates are the upper left corner of the image and width-1 height-1 the lower right corner for example to create small gradient image imageCreator String IO imageCreator path writePng path generateImage pixelRenderer where pixelRenderer PixelRGB8",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "generateImage",
          "normalized": "(Int-\u003eInt-\u003ea)-\u003eInt-\u003eInt-\u003eImage a",
          "package": "JuicyPixels",
          "partial": "Image",
          "signature": "(Int-\u003eInt-\u003ea)-\u003eInt-\u003eInt-\u003eImage a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:generateImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaccess the transparency (alpha layer) of a given\n transparent pixel type.\n DEPRECATED, you should use \u003ccode\u003e\u003ca\u003epixelOpacity\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "getTransparency",
          "package": "JuicyPixels",
          "signature": "a -\u003e PixelBaseComponent a",
          "source": "src/Codec-Picture-Types.html#getTransparency",
          "type": "method"
        },
        "index": {
          "description": "access the transparency alpha layer of given transparent pixel type DEPRECATED you should use pixelOpacity",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "getTransparency",
          "normalized": "a-\u003ePixelBaseComponent a",
          "package": "JuicyPixels",
          "partial": "Transparency",
          "signature": "a-\u003ePixelBaseComponent a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:getTransparency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe real image, to extract pixels at some position\n you should use the helpers functions.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "imageData",
          "package": "JuicyPixels",
          "signature": "Vector (PixelBaseComponent a)",
          "source": "src/Codec-Picture-Types.html#Image",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:imageData\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:imageData\"]"
        },
        "index": {
          "description": "The real image to extract pixels at some position you should use the helpers functions",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "imageData",
          "package": "JuicyPixels",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:imageData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeight of the image in pixels.\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "imageHeight",
          "package": "JuicyPixels",
          "signature": "Int",
          "source": "src/Codec-Picture-Types.html#Image",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:imageHeight\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:imageHeight\"]"
        },
        "index": {
          "description": "Height of the image in pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "imageHeight",
          "package": "JuicyPixels",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:imageHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of the image in pixels\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "imageWidth",
          "package": "JuicyPixels",
          "signature": "Int",
          "source": "src/Codec-Picture-Types.html#Image",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:imageWidth\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:imageWidth\"]"
        },
        "index": {
          "description": "Width of the image in pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "imageWidth",
          "package": "JuicyPixels",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:imageWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the function for every component of the pixels.\n For example for RGB pixels mixWith is declared like this :\n\u003c/p\u003e\u003cpre\u003e mixWith f (PixelRGB8 ra ga ba) (PixelRGB8 rb gb bb) =\n    PixelRGB8 (f 0 ra rb) (f 1 ga gb) (f 2 ba bb)\n\u003c/pre\u003e",
          "module": "Codec.Picture.Types",
          "name": "mixWith",
          "package": "JuicyPixels",
          "signature": "(Int -\u003e PixelBaseComponent a -\u003e PixelBaseComponent a -\u003e PixelBaseComponent a) -\u003e a -\u003e a -\u003e a",
          "source": "src/Codec-Picture-Types.html#mixWith",
          "type": "method"
        },
        "index": {
          "description": "Call the function for every component of the pixels For example for RGB pixels mixWith is declared like this mixWith PixelRGB8 ra ga ba PixelRGB8 rb gb bb PixelRGB8 ra rb ga gb ba bb",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "mixWith",
          "normalized": "(Int-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea-\u003ea",
          "package": "JuicyPixels",
          "partial": "With",
          "signature": "(Int-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mixWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe real image, to extract pixels at some position\n you should use the helpers functions.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "mutableImageData",
          "package": "JuicyPixels",
          "signature": "STVector s (PixelBaseComponent a)",
          "source": "src/Codec-Picture-Types.html#MutableImage",
          "type": "function"
        },
        "index": {
          "description": "The real image to extract pixels at some position you should use the helpers functions",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "mutableImageData",
          "package": "JuicyPixels",
          "partial": "Image Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mutableImageData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeight of the image in pixels.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "mutableImageHeight",
          "package": "JuicyPixels",
          "signature": "Int",
          "source": "src/Codec-Picture-Types.html#MutableImage",
          "type": "function"
        },
        "index": {
          "description": "Height of the image in pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "mutableImageHeight",
          "package": "JuicyPixels",
          "partial": "Image Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mutableImageHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of the image in pixels\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "mutableImageWidth",
          "package": "JuicyPixels",
          "signature": "Int",
          "source": "src/Codec-Picture-Types.html#MutableImage",
          "type": "function"
        },
        "index": {
          "description": "Width of the image in pixels",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "mutableImageWidth",
          "package": "JuicyPixels",
          "partial": "Image Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mutableImageWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate theindex for the begining of the pixel at position x y\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "mutablePixelBaseIndex",
          "package": "JuicyPixels",
          "signature": "MutableImage s a -\u003e Int -\u003e Int -\u003e Int",
          "source": "src/Codec-Picture-Types.html#mutablePixelBaseIndex",
          "type": "method"
        },
        "index": {
          "description": "Calculate theindex for the begining of the pixel at position",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "mutablePixelBaseIndex",
          "normalized": "MutableImage a b-\u003eInt-\u003eInt-\u003eInt",
          "package": "JuicyPixels",
          "partial": "Pixel Base Index",
          "signature": "MutableImage s a-\u003eInt-\u003eInt-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mutablePixelBaseIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a pixel at a given position, (x, y), the origin\n is assumed to be at the corner top left, positive y to the\n bottom of the image\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "pixelAt",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e Int -\u003e Int -\u003e a",
          "source": "src/Codec-Picture-Types.html#pixelAt",
          "type": "method"
        },
        "index": {
          "description": "Extract pixel at given position the origin is assumed to be at the corner top left positive to the bottom of the image",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "pixelAt",
          "normalized": "Image a-\u003eInt-\u003eInt-\u003ea",
          "package": "JuicyPixels",
          "partial": "At",
          "signature": "Image a-\u003eInt-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the index for the begining of the pixel\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "pixelBaseIndex",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e Int -\u003e Int -\u003e Int",
          "source": "src/Codec-Picture-Types.html#pixelBaseIndex",
          "type": "method"
        },
        "index": {
          "description": "Calculate the index for the begining of the pixel",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "pixelBaseIndex",
          "normalized": "Image a-\u003eInt-\u003eInt-\u003eInt",
          "package": "JuicyPixels",
          "partial": "Base Index",
          "signature": "Image a-\u003eInt-\u003eInt-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelBaseIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold over the pixel of an image with a raster scan order :\n from top to bottom, left to right\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "pixelFold",
          "package": "JuicyPixels",
          "signature": "(acc -\u003e Int -\u003e Int -\u003e pixel -\u003e acc) -\u003e acc -\u003e Image pixel -\u003e acc",
          "source": "src/Codec-Picture-Types.html#pixelFold",
          "type": "function"
        },
        "index": {
          "description": "Fold over the pixel of an image with raster scan order from top to bottom left to right",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "pixelFold",
          "normalized": "(a-\u003eInt-\u003eInt-\u003eb-\u003ea)-\u003ea-\u003eImage b-\u003ea",
          "package": "JuicyPixels",
          "partial": "Fold",
          "signature": "(acc-\u003eInt-\u003eInt-\u003epixel-\u003eacc)-\u003eacc-\u003eImage pixel-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e equivalent for an image, working at the pixel level.\n Little example : a brightness function for an rgb image\n\u003c/p\u003e\u003cpre\u003e brightnessRGB8 :: Int -\u003e Image PixelRGB8 -\u003e Image PixelRGB8\n brightnessRGB8 add = pixelMap brightFunction\n      where up v = fromIntegral (fromIntegral v + add)\n            brightFunction (PixelRGB8 r g b) =\n                    PixelRGB8 (up r) (up g) (up b)\n\u003c/pre\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "pixelMap",
          "package": "JuicyPixels",
          "signature": "(a -\u003e b) -\u003e Image a -\u003e Image b",
          "source": "src/Codec-Picture-Types.html#pixelMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelMap\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:pixelMap\"]"
        },
        "index": {
          "description": "map equivalent for an image working at the pixel level Little example brightness function for an rgb image brightnessRGB8 Int Image PixelRGB8 Image PixelRGB8 brightnessRGB8 add pixelMap brightFunction where up fromIntegral fromIntegral add brightFunction PixelRGB8 PixelRGB8 up up up",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "pixelMap",
          "normalized": "(a-\u003eb)-\u003eImage a-\u003eImage b",
          "package": "JuicyPixels",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003eImage a-\u003eImage b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003epixelMap\u003c/a\u003e\u003c/code\u003e only the function takes the pixel coordinates as\n   additional parameters.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "pixelMapXY",
          "package": "JuicyPixels",
          "signature": "(Int -\u003e Int -\u003e a -\u003e b) -\u003e Image a -\u003e Image b",
          "source": "src/Codec-Picture-Types.html#pixelMapXY",
          "type": "function"
        },
        "index": {
          "description": "Just like pixelMap only the function takes the pixel coordinates as additional parameters",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "pixelMapXY",
          "normalized": "(Int-\u003eInt-\u003ea-\u003eb)-\u003eImage a-\u003eImage b",
          "package": "JuicyPixels",
          "partial": "Map XY",
          "signature": "(Int-\u003eInt-\u003ea-\u003eb)-\u003eImage a-\u003eImage b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelMapXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the opacity of a pixel, if the pixel has an\n alpha layer, return the alpha value. If the pixel\n doesn't have an alpha value, return a value\n representing the opaqueness.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "pixelOpacity",
          "package": "JuicyPixels",
          "signature": "a -\u003e PixelBaseComponent a",
          "source": "src/Codec-Picture-Types.html#pixelOpacity",
          "type": "method"
        },
        "index": {
          "description": "Return the opacity of pixel if the pixel has an alpha layer return the alpha value If the pixel doesn have an alpha value return value representing the opaqueness",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "pixelOpacity",
          "normalized": "a-\u003ePixelBaseComponent a",
          "package": "JuicyPixels",
          "partial": "Opacity",
          "signature": "a-\u003ePixelBaseComponent a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelOpacity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the underlying pixel type of an image by performing a full copy\n of it.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "promoteImage",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e Image b",
          "source": "src/Codec-Picture-Types.html#promoteImage",
          "type": "method"
        },
        "index": {
          "description": "Change the underlying pixel type of an image by performing full copy of it",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "promoteImage",
          "normalized": "Image a-\u003eImage b",
          "package": "JuicyPixels",
          "partial": "Image",
          "signature": "Image a-\u003eImage b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:promoteImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a pixel type to another pixel type. This\n operation should never lose any data.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "promotePixel",
          "package": "JuicyPixels",
          "signature": "a -\u003e b",
          "source": "src/Codec-Picture-Types.html#promotePixel",
          "type": "method"
        },
        "index": {
          "description": "Convert pixel type to another pixel type This operation should never lose any data",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "promotePixel",
          "normalized": "a-\u003eb",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:promotePixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as pixelAt but for mutable images.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "readPixel",
          "package": "JuicyPixels",
          "signature": "MutableImage (PrimState m) a -\u003e Int -\u003e Int -\u003e m a",
          "source": "src/Codec-Picture-Types.html#readPixel",
          "type": "method"
        },
        "index": {
          "description": "Same as pixelAt but for mutable images",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "readPixel",
          "normalized": "MutableImage(PrimState a)b-\u003eInt-\u003eInt-\u003ea b",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "signature": "MutableImage(PrimState m)a-\u003eInt-\u003eInt-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:readPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e`O(n)` Yield a mutable copy of an image by making a copy of it.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "thawImage",
          "package": "JuicyPixels",
          "signature": "Image px -\u003e m (MutableImage (PrimState m) px)",
          "source": "src/Codec-Picture-Types.html#thawImage",
          "type": "function"
        },
        "index": {
          "description": "Yield mutable copy of an image by making copy of it",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "thawImage",
          "normalized": "Image a-\u003eb(MutableImage(PrimState b)a)",
          "package": "JuicyPixels",
          "partial": "Image",
          "signature": "Image px-\u003em(MutableImage(PrimState m)px)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:thawImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a tone mapping operation on an High dynamic range image.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "toneMapping",
          "package": "JuicyPixels",
          "signature": "PixelF-\u003e Image PixelRGBF-\u003e Image PixelRGBF",
          "type": "function"
        },
        "index": {
          "description": "Perform tone mapping operation on an High dynamic range image",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "toneMapping",
          "normalized": "PixelF-\u003eImage PixelRGBF-\u003eImage PixelRGBF",
          "package": "JuicyPixels",
          "partial": "Mapping",
          "signature": "PixelF-\u003eImage PixelRGBF-\u003eImage PixelRGBF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:toneMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an image plane of an image, returning an image which\n can be represented by a gray scale image.\n If you ask a component out of bound, the \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e function will\n be called\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "unsafeExtractComponent",
          "package": "JuicyPixels",
          "signature": "Int-\u003e Image a-\u003e Image (PixelBaseComponent a)",
          "type": "function"
        },
        "index": {
          "description": "Extract an image plane of an image returning an image which can be represented by gray scale image If you ask component out of bound the error function will be called",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "unsafeExtractComponent",
          "normalized": "Int-\u003eImage a-\u003eImage(PixelBaseComponent a)",
          "package": "JuicyPixels",
          "partial": "Extract Component",
          "signature": "Int-\u003eImage a-\u003eImage(PixelBaseComponent a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeExtractComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e`O(1)` Unsafe convert a mutable image to an immutable one without copying.\n The mutable image may not be used after this operation.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "unsafeFreezeImage",
          "package": "JuicyPixels",
          "signature": "MutableImage (PrimState m) a -\u003e m (Image a)",
          "source": "src/Codec-Picture-Types.html#unsafeFreezeImage",
          "type": "function"
        },
        "index": {
          "description": "Unsafe convert mutable image to an immutable one without copying The mutable image may not be used after this operation",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "unsafeFreezeImage",
          "normalized": "MutableImage(PrimState a)b-\u003ea(Image b)",
          "package": "JuicyPixels",
          "partial": "Freeze Image",
          "signature": "MutableImage(PrimState m)a-\u003em(Image a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeFreezeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe version of pixelAt, read a pixel at the given\n index without bound checking (if possible).\n The index is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "unsafePixelAt",
          "package": "JuicyPixels",
          "signature": "Vector (PixelBaseComponent a) -\u003e Int -\u003e a",
          "source": "src/Codec-Picture-Types.html#unsafePixelAt",
          "type": "method"
        },
        "index": {
          "description": "Unsafe version of pixelAt read pixel at the given index without bound checking if possible The index is expressed in number PixelBaseComponent",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "unsafePixelAt",
          "normalized": "Vector(PixelBaseComponent a)-\u003eInt-\u003ea",
          "package": "JuicyPixels",
          "partial": "Pixel At",
          "signature": "Vector(PixelBaseComponent a)-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafePixelAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe version of readPixel,  read a pixel at the given\n position without bound checking (if possible). The index\n is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "unsafeReadPixel",
          "package": "JuicyPixels",
          "signature": "STVector (PrimState m) (PixelBaseComponent a) -\u003e Int -\u003e m a",
          "source": "src/Codec-Picture-Types.html#unsafeReadPixel",
          "type": "method"
        },
        "index": {
          "description": "Unsafe version of readPixel read pixel at the given position without bound checking if possible The index is expressed in number PixelBaseComponent",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "unsafeReadPixel",
          "normalized": "STVector(PrimState a)(PixelBaseComponent b)-\u003eInt-\u003ea b",
          "package": "JuicyPixels",
          "partial": "Read Pixel",
          "signature": "STVector(PrimState m)(PixelBaseComponent a)-\u003eInt-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeReadPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e`O(1)` Unsafe convert an imutable image to an mutable one without copying.\n The source image shouldn't be used after this operation.\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "unsafeThawImage",
          "package": "JuicyPixels",
          "signature": "Image px -\u003e m (MutableImage (PrimState m) px)",
          "source": "src/Codec-Picture-Types.html#unsafeThawImage",
          "type": "function"
        },
        "index": {
          "description": "Unsafe convert an imutable image to an mutable one without copying The source image shouldn be used after this operation",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "unsafeThawImage",
          "normalized": "Image a-\u003eb(MutableImage(PrimState b)a)",
          "package": "JuicyPixels",
          "partial": "Thaw Image",
          "signature": "Image px-\u003em(MutableImage(PrimState m)px)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeThawImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe version of writePixel, write a pixel at the\n given position without bound checking. This can be _really_ unsafe.\n The index is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "unsafeWritePixel",
          "package": "JuicyPixels",
          "signature": "STVector (PrimState m) (PixelBaseComponent a) -\u003e Int -\u003e a -\u003e m ()",
          "source": "src/Codec-Picture-Types.html#unsafeWritePixel",
          "type": "method"
        },
        "index": {
          "description": "Unsafe version of writePixel write pixel at the given position without bound checking This can be really unsafe The index is expressed in number PixelBaseComponent",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "unsafeWritePixel",
          "normalized": "STVector(PrimState a)(PixelBaseComponent b)-\u003eInt-\u003eb-\u003ea()",
          "package": "JuicyPixels",
          "partial": "Write Pixel",
          "signature": "STVector(PrimState m)(PixelBaseComponent a)-\u003eInt-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeWritePixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an image using a monadic initializer function.\n The function will receive values from 0 to width-1 for the x parameter\n and 0 to height-1 for the y parameter. The coordinates 0,0 are the upper\n left corner of the image, and (width-1, height-1) the lower right corner.\n\u003c/p\u003e\u003cp\u003eThe function is called for each pixel in the line from left to right (0 to width - 1)\n and for each line (0 to height - 1).\n\u003c/p\u003e",
          "module": "[\"Codec.Picture.Types\",\"Codec.Picture\"]",
          "name": "withImage",
          "package": "JuicyPixels",
          "signature": "Int-\u003e Int-\u003e (Int -\u003e Int -\u003e m pixel)-\u003e m (Image pixel)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:withImage\",\"http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:withImage\"]"
        },
        "index": {
          "description": "Create an image using monadic initializer function The function will receive values from to width-1 for the parameter and to height-1 for the parameter The coordinates are the upper left corner of the image and width-1 height-1 the lower right corner The function is called for each pixel in the line from left to right to width and for each line to height",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "withImage",
          "normalized": "Int-\u003eInt-\u003e(Int-\u003eInt-\u003ea b)-\u003ea(Image b)",
          "package": "JuicyPixels",
          "partial": "Image",
          "signature": "Int-\u003eInt-\u003e(Int-\u003eInt-\u003em pixel)-\u003em(Image pixel)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:withImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a pixel in a mutable image at position x y\n\u003c/p\u003e",
          "module": "Codec.Picture.Types",
          "name": "writePixel",
          "package": "JuicyPixels",
          "signature": "MutableImage (PrimState m) a -\u003e Int -\u003e Int -\u003e a -\u003e m ()",
          "source": "src/Codec-Picture-Types.html#writePixel",
          "type": "method"
        },
        "index": {
          "description": "Write pixel in mutable image at position",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "writePixel",
          "normalized": "MutableImage(PrimState a)b-\u003eInt-\u003eInt-\u003eb-\u003ea()",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "signature": "MutableImage(PrimState m)a-\u003eInt-\u003eInt-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:writePixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine, pixel by pixel and component by component\n the values of 3 different images. Usage example:\n\u003c/p\u003e\u003cpre\u003e averageBrightNess c1 c2 c3 = clamp $ toInt c1 + toInt c2 + toInt c3\n   where clamp = fromIntegral . min 0 . max 255\n         toInt :: a -\u003e Int\n         toInt = fromIntegral\n ziPixelComponent3 averageBrightNess img1 img2 img3\n\u003c/pre\u003e",
          "module": "Codec.Picture.Types",
          "name": "zipPixelComponent3",
          "package": "JuicyPixels",
          "signature": "(PixelBaseComponent px -\u003e PixelBaseComponent px -\u003e PixelBaseComponent px -\u003e PixelBaseComponent px) -\u003e Image px -\u003e Image px -\u003e Image px -\u003e Image px",
          "source": "src/Codec-Picture-Types.html#zipPixelComponent3",
          "type": "function"
        },
        "index": {
          "description": "Combine pixel by pixel and component by component the values of different images Usage example averageBrightNess c1 c2 c3 clamp toInt c1 toInt c2 toInt c3 where clamp fromIntegral min max toInt Int toInt fromIntegral ziPixelComponent3 averageBrightNess img1 img2 img3",
          "hierarchy": "Codec Picture Types",
          "module": "Codec.Picture.Types",
          "name": "zipPixelComponent3",
          "normalized": "(PixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003eImage a-\u003eImage a-\u003eImage a-\u003eImage a",
          "package": "JuicyPixels",
          "partial": "Pixel Component",
          "signature": "(PixelBaseComponent px-\u003ePixelBaseComponent px-\u003ePixelBaseComponent px-\u003ePixelBaseComponent px)-\u003eImage px-\u003eImage px-\u003eImage px-\u003eImage px",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:zipPixelComponent3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain module for image import/export into various image formats.\n\u003c/p\u003e\u003cp\u003eTo use the library without thinking about it, look after \u003ccode\u003e\u003ca\u003edecodeImage\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ereadImage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGenerally, the read* functions read the images from a file and try to decode\n it, and the decode* functions try to decode a bytestring.\n\u003c/p\u003e\u003cp\u003eFor an easy image writing use the \u003ccode\u003e\u003ca\u003esaveBmpImage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esaveJpgImage\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003esavePngImage\u003c/a\u003e\u003c/code\u003e\n functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Picture",
          "name": "Picture",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture.html",
          "type": "module"
        },
        "index": {
          "description": "Main module for image import export into various image formats To use the library without thinking about it look after decodeImage and readImage Generally the read functions read the images from file and try to decode it and the decode functions try to decode bytestring For an easy image writing use the saveBmpImage saveJpgImage savePngImage functions",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "Picture",
          "package": "JuicyPixels",
          "partial": "Picture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the instance of this class can be written as a bitmap file\n using this library.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "BmpEncodable",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Bitmap.html#BmpEncodable",
          "type": "class"
        },
        "index": {
          "description": "All the instance of this class can be written as bitmap file using this library",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "BmpEncodable",
          "package": "JuicyPixels",
          "partial": "Bmp Encodable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:BmpEncodable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType allowing the loading of an image with different pixel\n structures\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "DynamicImage",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#DynamicImage",
          "type": "data"
        },
        "index": {
          "description": "Type allowing the loading of an image with different pixel structures",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "DynamicImage",
          "package": "JuicyPixels",
          "partial": "Dynamic Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:DynamicImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay to wait before showing the next Gif image.\n The delay is expressed in 100th of seconds.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "GifDelay",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Gif.html#GifDelay",
          "type": "type"
        },
        "index": {
          "description": "Delay to wait before showing the next Gif image The delay is expressed in th of seconds",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "GifDelay",
          "package": "JuicyPixels",
          "partial": "Gif Delay",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:GifDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelp to control the behaviour of GIF animation looping.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "GifLooping",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Gif.html#GifLooping",
          "type": "data"
        },
        "index": {
          "description": "Help to control the behaviour of GIF animation looping",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "GifLooping",
          "package": "JuicyPixels",
          "partial": "Gif Looping",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:GifLooping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage or pixel buffer, the coordinates are assumed to start\n from the upper-left corner of the image, with the horizontal\n position first, then the vertical one.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "Image",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Image",
          "type": "data"
        },
        "index": {
          "description": "Image or pixel buffer the coordinates are assumed to start from the upper-left corner of the image with the horizontal position first then the vertical one",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "Image",
          "package": "JuicyPixels",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for the palette used in Gif & PNG files.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "Palette",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Palette",
          "type": "type"
        },
        "index": {
          "description": "Type for the palette used in Gif PNG files",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "Palette",
          "package": "JuicyPixels",
          "partial": "Palette",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine which palette creation method is used.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "PaletteCreationMethod",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
          "type": "data"
        },
        "index": {
          "description": "Define which palette creation method is used",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PaletteCreationMethod",
          "package": "JuicyPixels",
          "partial": "Palette Creation Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PaletteCreationMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo specify how the palette will be created.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "PaletteOptions",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
          "type": "data"
        },
        "index": {
          "description": "To specify how the palette will be created",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PaletteOptions",
          "package": "JuicyPixels",
          "partial": "Palette Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PaletteOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of pixels used in images. Each pixel has a color space, and a representative\n component (Word8 or Float).\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "Pixel",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Pixel",
          "type": "class"
        },
        "index": {
          "description": "Definition of pixels used in images Each pixel has color space and representative component Word8 or Float",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "Pixel",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Pixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for 16bit greyscale pixels.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "Pixel16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Pixel16",
          "type": "type"
        },
        "index": {
          "description": "Type alias for bit greyscale pixels",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "Pixel16",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Pixel16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for 8bit greyscale pixels. For simplicity,\n greyscale pixels use plain numbers instead of a separate type.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "Pixel8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#Pixel8",
          "type": "type"
        },
        "index": {
          "description": "Type alias for bit greyscale pixels For simplicity greyscale pixels use plain numbers instead of separate type",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "Pixel8",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Pixel8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel storing data in the CMYK colorspace. Values\n are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cyan\n\u003c/li\u003e\u003cli\u003e Magenta\n\u003c/li\u003e\u003cli\u003e Yellow\n\u003c/li\u003e\u003cli\u003e Black\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelCMYK16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelCMYK16",
          "type": "data"
        },
        "index": {
          "description": "Pixel storing data in the CMYK colorspace Values are stored in the following order Cyan Magenta Yellow Black",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelCMYK16",
          "package": "JuicyPixels",
          "partial": "Pixel CMYK",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelCMYK16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel storing data in the CMYK colorspace. Values\n are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cyan\n\u003c/li\u003e\u003cli\u003e Magenta\n\u003c/li\u003e\u003cli\u003e Yellow\n\u003c/li\u003e\u003cli\u003e Black\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelCMYK8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelCMYK8",
          "type": "data"
        },
        "index": {
          "description": "Pixel storing data in the CMYK colorspace Values are stored in the following order Cyan Magenta Yellow Black",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelCMYK8",
          "package": "JuicyPixels",
          "partial": "Pixel CMYK",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelCMYK8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for 32bit floating point greyscale pixels. The standard\n bounded value range is mapped to the closed interval [0,1] i.e.\n\u003c/p\u003e\u003cpre\u003e map promotePixel [0, 1 .. 255 :: Pixel8] == [0/255, 1/255 .. 1.0 :: PixelF]\n\u003c/pre\u003e",
          "module": "Codec.Picture",
          "name": "PixelF",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelF",
          "type": "type"
        },
        "index": {
          "description": "Type alias for bit floating point greyscale pixels The standard bounded value range is mapped to the closed interval i.e map promotePixel Pixel8 PixelF",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelF",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing pixels on 16 bits\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelRGB16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGB16",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing pixels on bits Value are stored in the following order Red Green Blue",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelRGB16",
          "package": "JuicyPixels",
          "partial": "Pixel RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGB16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing classic pixel on 8 bits\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelRGB8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGB8",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing classic pixel on bits Value are stored in the following order Red Green Blue",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelRGB8",
          "package": "JuicyPixels",
          "partial": "Pixel RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing a RGB information with an alpha\n channel on 16 bits.\n Values are stored in the following order\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelRGBA16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGBA16",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing RGB information with an alpha channel on bits Values are stored in the following order Red Green Blue Alpha",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelRGBA16",
          "package": "JuicyPixels",
          "partial": "Pixel RGBA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGBA16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing a classic pixel, with an alpha component.\n Values are stored in the following order\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelRGBA8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGBA8",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing classic pixel with an alpha component Values are stored in the following order Red Green Blue Alpha",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelRGBA8",
          "package": "JuicyPixels",
          "partial": "Pixel RGBA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGBA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing HDR pixel on 32 bits float\n Values are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelRGBF",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelRGBF",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing HDR pixel on bits float Values are stored in the following order Red Green Blue",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelRGBF",
          "package": "JuicyPixels",
          "partial": "Pixel RGBF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing Luminance (Y) and alpha information\n on 16 bits.\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Luminance\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelYA16",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelYA16",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing Luminance and alpha information on bits Value are stored in the following order Luminance Alpha",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelYA16",
          "package": "JuicyPixels",
          "partial": "Pixel YA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelYA16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel type storing Luminance (Y) and alpha information\n on 8 bits.\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Luminance\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelYA8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelYA8",
          "type": "data"
        },
        "index": {
          "description": "Pixel type storing Luminance and alpha information on bits Value are stored in the following order Luminance Alpha",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelYA8",
          "package": "JuicyPixels",
          "partial": "Pixel YA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelYA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel storing data in the YCbCr colorspace,\n values are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Y (luminance)\n\u003c/li\u003e\u003cli\u003e Cr\n\u003c/li\u003e\u003cli\u003e Cb\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Picture",
          "name": "PixelYCbCr8",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Types.html#PixelYCbCr8",
          "type": "data"
        },
        "index": {
          "description": "Pixel storing data in the YCbCr colorspace values are stored in the following order luminance Cr Cb",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PixelYCbCr8",
          "package": "JuicyPixels",
          "partial": "Pixel YCb Cr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelYCbCr8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an image into a png if possible.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "PngSavable",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Png-Export.html#PngSavable",
          "type": "class"
        },
        "index": {
          "description": "Encode an image into png if possible",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "PngSavable",
          "package": "JuicyPixels",
          "partial": "Png Savable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PngSavable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass defining which pixel types can be serialized in a\n Tiff file.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "TiffSaveable",
          "package": "JuicyPixels",
          "source": "src/Codec-Picture-Tiff.html#TiffSaveable",
          "type": "class"
        },
        "index": {
          "description": "Class defining which pixel types can be serialized in Tiff file",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "TiffSaveable",
          "package": "JuicyPixels",
          "partial": "Tiff Saveable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:TiffSaveable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all color component of a pixel.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "colorMap",
          "package": "JuicyPixels",
          "signature": "(PixelBaseComponent a -\u003e PixelBaseComponent a) -\u003e a -\u003e a",
          "source": "src/Codec-Picture-Types.html#colorMap",
          "type": "method"
        },
        "index": {
          "description": "Apply function to all color component of pixel",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "colorMap",
          "normalized": "(PixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea",
          "package": "JuicyPixels",
          "partial": "Map",
          "signature": "(PixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:colorMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of component of the pixel\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "componentCount",
          "package": "JuicyPixels",
          "signature": "a -\u003e Int",
          "source": "src/Codec-Picture-Types.html#componentCount",
          "type": "method"
        },
        "index": {
          "description": "Return the number of component of the pixel",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "componentCount",
          "normalized": "a-\u003eInt",
          "package": "JuicyPixels",
          "partial": "Count",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:componentCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you want to decode an image in a bytestring without even thinking\n in term of format or whatever, this is the function to use. It will try\n to decode in each known format and if one decoding succeed will return\n the decoded image in it's own colorspace\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "decodeImage",
          "package": "JuicyPixels",
          "signature": "ByteString -\u003e Either String DynamicImage",
          "source": "src/Codec-Picture.html#decodeImage",
          "type": "function"
        },
        "index": {
          "description": "If you want to decode an image in bytestring without even thinking in term of format or whatever this is the function to use It will try to decode in each known format and if one decoding succeed will return the decoded image in it own colorspace",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "decodeImage",
          "normalized": "ByteString-\u003eEither String DynamicImage",
          "package": "JuicyPixels",
          "partial": "Image",
          "signature": "ByteString-\u003eEither String DynamicImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a full color image to a gif by applying a color quantization\n algorithm on it.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "encodeColorReducedGifImage",
          "package": "JuicyPixels",
          "signature": "Image PixelRGB8 -\u003e Either String ByteString",
          "source": "src/Codec-Picture.html#encodeColorReducedGifImage",
          "type": "function"
        },
        "index": {
          "description": "Encode full color image to gif by applying color quantization algorithm on it",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "encodeColorReducedGifImage",
          "normalized": "Image PixelRGB-\u003eEither String ByteString",
          "package": "JuicyPixels",
          "partial": "Color Reduced Gif Image",
          "signature": "Image PixelRGB-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeColorReducedGifImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to create a gif animation.\n All the images of the animation are separated\n by the same delay.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "encodeGifAnimation",
          "package": "JuicyPixels",
          "signature": "GifDelay -\u003e GifLooping -\u003e [Image PixelRGB8] -\u003e Either String ByteString",
          "source": "src/Codec-Picture.html#encodeGifAnimation",
          "type": "function"
        },
        "index": {
          "description": "Helper function to create gif animation All the images of the animation are separated by the same delay",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "encodeGifAnimation",
          "normalized": "GifDelay-\u003eGifLooping-\u003e[Image PixelRGB]-\u003eEither String ByteString",
          "package": "JuicyPixels",
          "partial": "Gif Animation",
          "signature": "GifDelay-\u003eGifLooping-\u003e[Image PixelRGB]-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeGifAnimation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an image into a png encoded bytestring, ready\n to be written as a file.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "encodePng",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e ByteString",
          "source": "src/Codec-Picture-Png-Export.html#encodePng",
          "type": "method"
        },
        "index": {
          "description": "Transform an image into png encoded bytestring ready to be written as file",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "encodePng",
          "normalized": "Image a-\u003eByteString",
          "package": "JuicyPixels",
          "partial": "Png",
          "signature": "Image a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodePng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport a image from an unsafe pointer\n The pointer must have a size of width * height * componentCount px\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "imageFromUnsafePtr",
          "package": "JuicyPixels",
          "signature": "Int-\u003e Int-\u003e ForeignPtr Word8-\u003e Image px",
          "type": "function"
        },
        "index": {
          "description": "Import image from an unsafe pointer The pointer must have size of width height componentCount px",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "imageFromUnsafePtr",
          "normalized": "Int-\u003eInt-\u003eForeignPtr Word-\u003eImage a",
          "package": "JuicyPixels",
          "partial": "From Unsafe Ptr",
          "signature": "Int-\u003eInt-\u003eForeignPtr Word-\u003eImage px",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:imageFromUnsafePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the function for every component of the pixels.\n For example for RGB pixels mixWith is declared like this :\n\u003c/p\u003e\u003cpre\u003e mixWith f (PixelRGB8 ra ga ba) (PixelRGB8 rb gb bb) =\n    PixelRGB8 (f 0 ra rb) (f 1 ga gb) (f 2 ba bb)\n\u003c/pre\u003e",
          "module": "Codec.Picture",
          "name": "mixWith",
          "package": "JuicyPixels",
          "signature": "(Int -\u003e PixelBaseComponent a -\u003e PixelBaseComponent a -\u003e PixelBaseComponent a) -\u003e a -\u003e a -\u003e a",
          "source": "src/Codec-Picture-Types.html#mixWith",
          "type": "method"
        },
        "index": {
          "description": "Call the function for every component of the pixels For example for RGB pixels mixWith is declared like this mixWith PixelRGB8 ra ga ba PixelRGB8 rb gb bb PixelRGB8 ra rb ga gb ba bb",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "mixWith",
          "normalized": "(Int-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea-\u003ea",
          "package": "JuicyPixels",
          "partial": "With",
          "signature": "(Int-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:mixWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate theindex for the begining of the pixel at position x y\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "mutablePixelBaseIndex",
          "package": "JuicyPixels",
          "signature": "MutableImage s a -\u003e Int -\u003e Int -\u003e Int",
          "source": "src/Codec-Picture-Types.html#mutablePixelBaseIndex",
          "type": "method"
        },
        "index": {
          "description": "Calculate theindex for the begining of the pixel at position",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "mutablePixelBaseIndex",
          "normalized": "MutableImage a b-\u003eInt-\u003eInt-\u003eInt",
          "package": "JuicyPixels",
          "partial": "Pixel Base Index",
          "signature": "MutableImage s a-\u003eInt-\u003eInt-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:mutablePixelBaseIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a pixel at a given position, (x, y), the origin\n is assumed to be at the corner top left, positive y to the\n bottom of the image\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "pixelAt",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e Int -\u003e Int -\u003e a",
          "source": "src/Codec-Picture-Types.html#pixelAt",
          "type": "method"
        },
        "index": {
          "description": "Extract pixel at given position the origin is assumed to be at the corner top left positive to the bottom of the image",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "pixelAt",
          "normalized": "Image a-\u003eInt-\u003eInt-\u003ea",
          "package": "JuicyPixels",
          "partial": "At",
          "signature": "Image a-\u003eInt-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:pixelAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the index for the begining of the pixel\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "pixelBaseIndex",
          "package": "JuicyPixels",
          "signature": "Image a -\u003e Int -\u003e Int -\u003e Int",
          "source": "src/Codec-Picture-Types.html#pixelBaseIndex",
          "type": "method"
        },
        "index": {
          "description": "Calculate the index for the begining of the pixel",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "pixelBaseIndex",
          "normalized": "Image a-\u003eInt-\u003eInt-\u003eInt",
          "package": "JuicyPixels",
          "partial": "Base Index",
          "signature": "Image a-\u003eInt-\u003eInt-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:pixelBaseIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the opacity of a pixel, if the pixel has an\n alpha layer, return the alpha value. If the pixel\n doesn't have an alpha value, return a value\n representing the opaqueness.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "pixelOpacity",
          "package": "JuicyPixels",
          "signature": "a -\u003e PixelBaseComponent a",
          "source": "src/Codec-Picture-Types.html#pixelOpacity",
          "type": "method"
        },
        "index": {
          "description": "Return the opacity of pixel if the pixel has an alpha layer return the alpha value If the pixel doesn have an alpha value return value representing the opaqueness",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "pixelOpacity",
          "normalized": "a-\u003ePixelBaseComponent a",
          "package": "JuicyPixels",
          "partial": "Opacity",
          "signature": "a-\u003ePixelBaseComponent a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:pixelOpacity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to load a .bmp file. The colorspace would be RGB or Y.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "readBitmap",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e IO (Either String DynamicImage)",
          "source": "src/Codec-Picture.html#readBitmap",
          "type": "function"
        },
        "index": {
          "description": "Try to load bmp file The colorspace would be RGB or",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "readBitmap",
          "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
          "package": "JuicyPixels",
          "partial": "Bitmap",
          "signature": "FilePath-\u003eIO(Either String DynamicImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function trying to load a gif file from a file on disk.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "readGif",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e IO (Either String DynamicImage)",
          "source": "src/Codec-Picture.html#readGif",
          "type": "function"
        },
        "index": {
          "description": "Helper function trying to load gif file from file on disk",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "readGif",
          "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
          "package": "JuicyPixels",
          "partial": "Gif",
          "signature": "FilePath-\u003eIO(Either String DynamicImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readGif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function trying to load all the images of an animated\n gif file.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "readGifImages",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e IO (Either String [Image PixelRGB8])",
          "source": "src/Codec-Picture.html#readGifImages",
          "type": "function"
        },
        "index": {
          "description": "Helper function trying to load all the images of an animated gif file",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "readGifImages",
          "normalized": "FilePath-\u003eIO(Either String[Image PixelRGB])",
          "package": "JuicyPixels",
          "partial": "Gif Images",
          "signature": "FilePath-\u003eIO(Either String[Image PixelRGB])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readGifImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to load a .pic file. The colorspace can only be\n RGB with floating point precision.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "readHDR",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e IO (Either String DynamicImage)",
          "source": "src/Codec-Picture.html#readHDR",
          "type": "function"
        },
        "index": {
          "description": "Try to load pic file The colorspace can only be RGB with floating point precision",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "readHDR",
          "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
          "package": "JuicyPixels",
          "partial": "HDR",
          "signature": "FilePath-\u003eIO(Either String DynamicImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readHDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad an image file without even thinking about it, it does everything\n as \u003ccode\u003e\u003ca\u003edecodeImage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "readImage",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e IO (Either String DynamicImage)",
          "source": "src/Codec-Picture.html#readImage",
          "type": "function"
        },
        "index": {
          "description": "Load an image file without even thinking about it it does everything as decodeImage",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "readImage",
          "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
          "package": "JuicyPixels",
          "partial": "Image",
          "signature": "FilePath-\u003eIO(Either String DynamicImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to load a jpeg file and decompress. The colorspace is still\n YCbCr if you want to perform computation on the luma part. You can\n convert it to RGB using \u003ccode\u003ecolorSpaceConversion\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "readJpeg",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e IO (Either String DynamicImage)",
          "source": "src/Codec-Picture.html#readJpeg",
          "type": "function"
        },
        "index": {
          "description": "Try to load jpeg file and decompress The colorspace is still YCbCr if you want to perform computation on the luma part You can convert it to RGB using colorSpaceConversion",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "readJpeg",
          "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
          "package": "JuicyPixels",
          "partial": "Jpeg",
          "signature": "FilePath-\u003eIO(Either String DynamicImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readJpeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as pixelAt but for mutable images.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "readPixel",
          "package": "JuicyPixels",
          "signature": "MutableImage (PrimState m) a -\u003e Int -\u003e Int -\u003e m a",
          "source": "src/Codec-Picture-Types.html#readPixel",
          "type": "method"
        },
        "index": {
          "description": "Same as pixelAt but for mutable images",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "readPixel",
          "normalized": "MutableImage(PrimState a)b-\u003eInt-\u003eInt-\u003ea b",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "signature": "MutableImage(PrimState m)a-\u003eInt-\u003eInt-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function trying to load a png file from a file on disk.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "readPng",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e IO (Either String DynamicImage)",
          "source": "src/Codec-Picture.html#readPng",
          "type": "function"
        },
        "index": {
          "description": "Helper function trying to load png file from file on disk",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "readPng",
          "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
          "package": "JuicyPixels",
          "partial": "Png",
          "signature": "FilePath-\u003eIO(Either String DynamicImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readPng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function trying to load tiff file from a file on disk.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "readTiff",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e IO (Either String DynamicImage)",
          "source": "src/Codec-Picture.html#readTiff",
          "type": "function"
        },
        "index": {
          "description": "Helper function trying to load tiff file from file on disk",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "readTiff",
          "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
          "package": "JuicyPixels",
          "partial": "Tiff",
          "signature": "FilePath-\u003eIO(Either String DynamicImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readTiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave an image to a '.bmp' file, will do everything it can to save an image.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "saveBmpImage",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e DynamicImage -\u003e IO ()",
          "source": "src/Codec-Picture.html#saveBmpImage",
          "type": "function"
        },
        "index": {
          "description": "Save an image to bmp file will do everything it can to save an image",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "saveBmpImage",
          "normalized": "FilePath-\u003eDynamicImage-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "Bmp Image",
          "signature": "FilePath-\u003eDynamicImage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveBmpImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave an image to a '.gif' file, will do everything it can to save it.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "saveGifImage",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e DynamicImage -\u003e Either String (IO ())",
          "source": "src/Codec-Picture.html#saveGifImage",
          "type": "function"
        },
        "index": {
          "description": "Save an image to gif file will do everything it can to save it",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "saveGifImage",
          "normalized": "FilePath-\u003eDynamicImage-\u003eEither String(IO())",
          "package": "JuicyPixels",
          "partial": "Gif Image",
          "signature": "FilePath-\u003eDynamicImage-\u003eEither String(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveGifImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave an image to a '.jpg' file, will do everything it can to save an image.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "saveJpgImage",
          "package": "JuicyPixels",
          "signature": "Int -\u003e FilePath -\u003e DynamicImage -\u003e IO ()",
          "source": "src/Codec-Picture.html#saveJpgImage",
          "type": "function"
        },
        "index": {
          "description": "Save an image to jpg file will do everything it can to save an image",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "saveJpgImage",
          "normalized": "Int-\u003eFilePath-\u003eDynamicImage-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "Jpg Image",
          "signature": "Int-\u003eFilePath-\u003eDynamicImage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveJpgImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave an image to a '.png' file, will do everything it can to save an image.\n For example, a simple transcoder to png\n\u003c/p\u003e\u003cpre\u003e transcodeToPng :: FilePath -\u003e FilePath -\u003e IO ()\n transcodeToPng pathIn pathOut = do\n    eitherImg \u003c- readImage pathIn\n    case eitherImg of\n        Left _ -\u003e return ()\n        Right img -\u003e savePngImage pathOut img\n\u003c/pre\u003e",
          "module": "Codec.Picture",
          "name": "savePngImage",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e DynamicImage -\u003e IO ()",
          "source": "src/Codec-Picture.html#savePngImage",
          "type": "function"
        },
        "index": {
          "description": "Save an image to png file will do everything it can to save an image For example simple transcoder to png transcodeToPng FilePath FilePath IO transcodeToPng pathIn pathOut do eitherImg readImage pathIn case eitherImg of Left return Right img savePngImage pathOut img",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "savePngImage",
          "normalized": "FilePath-\u003eDynamicImage-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "Png Image",
          "signature": "FilePath-\u003eDynamicImage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:savePngImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave an image to a '.hdr' file, will do everything it can to save an image.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "saveRadianceImage",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e DynamicImage -\u003e IO ()",
          "source": "src/Codec-Picture.html#saveRadianceImage",
          "type": "function"
        },
        "index": {
          "description": "Save an image to hdr file will do everything it can to save an image",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "saveRadianceImage",
          "normalized": "FilePath-\u003eDynamicImage-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "Radiance Image",
          "signature": "FilePath-\u003eDynamicImage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveRadianceImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave an image to a '.tiff' file, will do everything it can to save an image.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "saveTiffImage",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e DynamicImage -\u003e IO ()",
          "source": "src/Codec-Picture.html#saveTiffImage",
          "type": "function"
        },
        "index": {
          "description": "Save an image to tiff file will do everything it can to save an image",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "saveTiffImage",
          "normalized": "FilePath-\u003eDynamicImage-\u003eIO()",
          "package": "JuicyPixels",
          "partial": "Tiff Image",
          "signature": "FilePath-\u003eDynamicImage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveTiffImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe version of pixelAt, read a pixel at the given\n index without bound checking (if possible).\n The index is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "unsafePixelAt",
          "package": "JuicyPixels",
          "signature": "Vector (PixelBaseComponent a) -\u003e Int -\u003e a",
          "source": "src/Codec-Picture-Types.html#unsafePixelAt",
          "type": "method"
        },
        "index": {
          "description": "Unsafe version of pixelAt read pixel at the given index without bound checking if possible The index is expressed in number PixelBaseComponent",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "unsafePixelAt",
          "normalized": "Vector(PixelBaseComponent a)-\u003eInt-\u003ea",
          "package": "JuicyPixels",
          "partial": "Pixel At",
          "signature": "Vector(PixelBaseComponent a)-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:unsafePixelAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe version of readPixel,  read a pixel at the given\n position without bound checking (if possible). The index\n is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "unsafeReadPixel",
          "package": "JuicyPixels",
          "signature": "STVector (PrimState m) (PixelBaseComponent a) -\u003e Int -\u003e m a",
          "source": "src/Codec-Picture-Types.html#unsafeReadPixel",
          "type": "method"
        },
        "index": {
          "description": "Unsafe version of readPixel read pixel at the given position without bound checking if possible The index is expressed in number PixelBaseComponent",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "unsafeReadPixel",
          "normalized": "STVector(PrimState a)(PixelBaseComponent b)-\u003eInt-\u003ea b",
          "package": "JuicyPixels",
          "partial": "Read Pixel",
          "signature": "STVector(PrimState m)(PixelBaseComponent a)-\u003eInt-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:unsafeReadPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe version of writePixel, write a pixel at the\n given position without bound checking. This can be _really_ unsafe.\n The index is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "unsafeWritePixel",
          "package": "JuicyPixels",
          "signature": "STVector (PrimState m) (PixelBaseComponent a) -\u003e Int -\u003e a -\u003e m ()",
          "source": "src/Codec-Picture-Types.html#unsafeWritePixel",
          "type": "method"
        },
        "index": {
          "description": "Unsafe version of writePixel write pixel at the given position without bound checking This can be really unsafe The index is expressed in number PixelBaseComponent",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "unsafeWritePixel",
          "normalized": "STVector(PrimState a)(PixelBaseComponent b)-\u003eInt-\u003eb-\u003ea()",
          "package": "JuicyPixels",
          "partial": "Write Pixel",
          "signature": "STVector(PrimState m)(PixelBaseComponent a)-\u003eInt-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:unsafeWritePixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a full color image to a gif by applying a color quantization\n algorithm on it.\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "writeColorReducedGifImage",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e Image PixelRGB8 -\u003e Either String (IO ())",
          "source": "src/Codec-Picture.html#writeColorReducedGifImage",
          "type": "function"
        },
        "index": {
          "description": "Write full color image to gif by applying color quantization algorithm on it",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "writeColorReducedGifImage",
          "normalized": "FilePath-\u003eImage PixelRGB-\u003eEither String(IO())",
          "package": "JuicyPixels",
          "partial": "Color Reduced Gif Image",
          "signature": "FilePath-\u003eImage PixelRGB-\u003eEither String(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeColorReducedGifImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to write a gif animtion on disk.\n See encodeGifAnimation\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "writeGifAnimation",
          "package": "JuicyPixels",
          "signature": "FilePath -\u003e GifDelay -\u003e GifLooping -\u003e [Image PixelRGB8] -\u003e Either String (IO ())",
          "source": "src/Codec-Picture.html#writeGifAnimation",
          "type": "function"
        },
        "index": {
          "description": "Helper function to write gif animtion on disk See encodeGifAnimation",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "writeGifAnimation",
          "normalized": "FilePath-\u003eGifDelay-\u003eGifLooping-\u003e[Image PixelRGB]-\u003eEither String(IO())",
          "package": "JuicyPixels",
          "partial": "Gif Animation",
          "signature": "FilePath-\u003eGifDelay-\u003eGifLooping-\u003e[Image PixelRGB]-\u003eEither String(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeGifAnimation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a pixel in a mutable image at position x y\n\u003c/p\u003e",
          "module": "Codec.Picture",
          "name": "writePixel",
          "package": "JuicyPixels",
          "signature": "MutableImage (PrimState m) a -\u003e Int -\u003e Int -\u003e a -\u003e m ()",
          "source": "src/Codec-Picture-Types.html#writePixel",
          "type": "method"
        },
        "index": {
          "description": "Write pixel in mutable image at position",
          "hierarchy": "Codec Picture",
          "module": "Codec.Picture",
          "name": "writePixel",
          "normalized": "MutableImage(PrimState a)b-\u003eInt-\u003eInt-\u003eb-\u003ea()",
          "package": "JuicyPixels",
          "partial": "Pixel",
          "signature": "MutableImage(PrimState m)a-\u003eInt-\u003eInt-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writePixel"
      }
    }
  ]
]