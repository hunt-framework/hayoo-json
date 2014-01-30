[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModules used for Bitmap file (.bmp) file loading and writing\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture.Bitmap",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture-Bitmap.html",
        "fct-type": "module",
        "title": "Bitmap"
      },
      "index": {
        "description": "Modules used for Bitmap file bmp file loading and writing",
        "hierarchy": "Codec Picture Bitmap",
        "module": "Codec.Picture.Bitmap",
        "name": "Bitmap",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Bitmap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#t:BmpEncodable",
      "description": {
        "fct-descr": "\u003cp\u003eAll the instance of this class can be written as a bitmap file\n using this library.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Bitmap",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Bitmap.html#BmpEncodable",
        "fct-type": "class",
        "title": "BmpEncodable"
      },
      "index": {
        "description": "All the instance of this class can be written as bitmap file using this library",
        "hierarchy": "Codec Picture Bitmap",
        "module": "Codec.Picture.Bitmap",
        "name": "BmpEncodable",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Bmp Encodable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:decodeBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eTry to decode a bitmap image.\n Right now this function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Bitmap",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Bitmap.html#decodeBitmap",
        "fct-type": "function",
        "title": "decodeBitmap"
      },
      "index": {
        "description": "Try to decode bitmap image Right now this function can output the following pixel types PixelRGB8",
        "hierarchy": "Codec Picture Bitmap",
        "module": "Codec.Picture.Bitmap",
        "name": "decodeBitmap",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Bitmap",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:encodeBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an image into a bytestring in .bmp format ready to be written\n on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Bitmap",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image pixel -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Bitmap.html#encodeBitmap",
        "fct-type": "function",
        "title": "encodeBitmap"
      },
      "index": {
        "description": "Encode an image into bytestring in bmp format ready to be written on disk",
        "hierarchy": "Codec Picture Bitmap",
        "module": "Codec.Picture.Bitmap",
        "name": "encodeBitmap",
        "normalized": "Image a-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Bitmap",
        "signature": "Image pixel-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:encodeDynamicBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a dynamic image in bmp if possible, supported pixel type are :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e RGB8\n\u003c/li\u003e\u003cli\u003e RGBA8\n\u003c/li\u003e\u003cli\u003e Y8\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Bitmap",
        "fct-package": "JuicyPixels",
        "fct-signature": "DynamicImage -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Bitmap.html#encodeDynamicBitmap",
        "fct-type": "function",
        "title": "encodeDynamicBitmap"
      },
      "index": {
        "description": "Encode dynamic image in bmp if possible supported pixel type are RGB8 RGBA8 Y8",
        "hierarchy": "Codec Picture Bitmap",
        "module": "Codec.Picture.Bitmap",
        "name": "encodeDynamicBitmap",
        "normalized": "DynamicImage-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Dynamic Bitmap",
        "signature": "DynamicImage-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:writeBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an image in a file use the bitmap format.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Bitmap",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image pixel -\u003e IO ()",
        "fct-source": "src/Codec-Picture-Bitmap.html#writeBitmap",
        "fct-type": "function",
        "title": "writeBitmap"
      },
      "index": {
        "description": "Write an image in file use the bitmap format",
        "hierarchy": "Codec Picture Bitmap",
        "module": "Codec.Picture.Bitmap",
        "name": "writeBitmap",
        "normalized": "FilePath-\u003eImage a-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Bitmap",
        "signature": "FilePath-\u003eImage pixel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Bitmap.html#v:writeDynamicBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a dynamic image in a .bmp image file if possible.\n The same restriction as encodeDynamicBitmap apply.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Bitmap",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e DynamicImage -\u003e IO (Either String Bool)",
        "fct-source": "src/Codec-Picture-Bitmap.html#writeDynamicBitmap",
        "fct-type": "function",
        "title": "writeDynamicBitmap"
      },
      "index": {
        "description": "Write dynamic image in bmp image file if possible The same restriction as encodeDynamicBitmap apply",
        "hierarchy": "Codec Picture Bitmap",
        "module": "Codec.Picture.Bitmap",
        "name": "writeDynamicBitmap",
        "normalized": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)",
        "package": "JuicyPixels",
        "partial": "Dynamic Bitmap",
        "signature": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provide some color quantisation algorithm\n in order to help in the creation of paletted images.\n The most important function is \u003ccode\u003e\u003ca\u003epalettize\u003c/a\u003e\u003c/code\u003e which will\n make everything to create a nice color indexed image\n with its palette.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture-ColorQuant.html",
        "fct-type": "module",
        "title": "ColorQuant"
      },
      "index": {
        "description": "This module provide some color quantisation algorithm in order to help in the creation of paletted images The most important function is palettize which will make everything to create nice color indexed image with its palette",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "ColorQuant",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Color Quant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#t:PaletteCreationMethod",
      "description": {
        "fct-descr": "\u003cp\u003eDefine which palette creation method is used.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
        "fct-type": "data",
        "title": "PaletteCreationMethod"
      },
      "index": {
        "description": "Define which palette creation method is used",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "PaletteCreationMethod",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette Creation Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#t:PaletteOptions",
      "description": {
        "fct-descr": "\u003cp\u003eTo specify how the palette will be created.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "data",
        "title": "PaletteOptions"
      },
      "index": {
        "description": "To specify how the palette will be created",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "PaletteOptions",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:MedianMeanCut",
      "description": {
        "fct-descr": "\u003cp\u003eMedianMeanCut method, provide the best results (visualy)\n at the cost of increased calculations.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "MedianMeanCut",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
        "fct-type": "function",
        "title": "MedianMeanCut"
      },
      "index": {
        "description": "MedianMeanCut method provide the best results visualy at the cost of increased calculations",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "MedianMeanCut",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Median Mean Cut",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:PaletteOptions",
      "description": {
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "PaletteOptions",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "function",
        "title": "PaletteOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "PaletteOptions",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:Uniform",
      "description": {
        "fct-descr": "\u003cp\u003eVery fast algorithm (one pass), doesn't provide good\n looking results.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "Uniform",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
        "fct-type": "function",
        "title": "Uniform"
      },
      "index": {
        "description": "Very fast algorithm one pass doesn provide good looking results",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "Uniform",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Uniform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:defaultPaletteOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDefault palette option, which aim at the best quality\n and maximum possible colors (256)\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "PaletteOptions",
        "fct-source": "src/Codec-Picture-ColorQuant.html#defaultPaletteOptions",
        "fct-type": "function",
        "title": "defaultPaletteOptions"
      },
      "index": {
        "description": "Default palette option which aim at the best quality and maximum possible colors",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "defaultPaletteOptions",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:enableImageDithering",
      "description": {
        "fct-descr": "\u003cp\u003eDo we want to apply the dithering to the\n image. Enabling it often reduce compression\n ratio but enhance the perceived quality\n of the final image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "Bool",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "function",
        "title": "enableImageDithering"
      },
      "index": {
        "description": "Do we want to apply the dithering to the image Enabling it often reduce compression ratio but enhance the perceived quality of the final image",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "enableImageDithering",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image Dithering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:paletteColorCount",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of color we want in the\n palette\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "function",
        "title": "paletteColorCount"
      },
      "index": {
        "description": "Maximum number of color we want in the palette",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "paletteColorCount",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Color Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:paletteCreationMethod",
      "description": {
        "fct-descr": "\u003cp\u003eAlgorithm used to find the palette\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "PaletteCreationMethod",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "function",
        "title": "paletteCreationMethod"
      },
      "index": {
        "description": "Algorithm used to find the palette",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "paletteCreationMethod",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Creation Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-ColorQuant.html#v:palettize",
      "description": {
        "fct-descr": "\u003cp\u003eReduces an image to a color palette according to \u003ccode\u003ePaletteOpts\u003c/code\u003e and\n   returns the \u003cem\u003eindices image\u003c/em\u003e along with its \u003ccode\u003e\u003ca\u003ePalette\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.ColorQuant",
        "fct-package": "JuicyPixels",
        "fct-signature": "PaletteOptions -\u003e Image PixelRGB8 -\u003e (Image Pixel8, Palette)",
        "fct-source": "src/Codec-Picture-ColorQuant.html#palettize",
        "fct-type": "function",
        "title": "palettize"
      },
      "index": {
        "description": "Reduces an image to color palette according to PaletteOpts and returns the indices image along with its Palette",
        "hierarchy": "Codec Picture ColorQuant",
        "module": "Codec.Picture.ColorQuant",
        "name": "palettize",
        "normalized": "PaletteOptions-\u003eImage PixelRGB-\u003e(Image Pixel,Palette)",
        "package": "JuicyPixels",
        "partial": "",
        "signature": "PaletteOptions-\u003eImage PixelRGB-\u003e(Image Pixel,Palette)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule implementing GIF decoding.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture-Gif.html",
        "fct-type": "module",
        "title": "Gif"
      },
      "index": {
        "description": "Module implementing GIF decoding",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "Gif",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Gif",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#t:GifDelay",
      "description": {
        "fct-descr": "\u003cp\u003eDelay to wait before showing the next Gif image.\n The delay is expressed in 100th of seconds.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Gif.html#GifDelay",
        "fct-type": "type",
        "title": "GifDelay"
      },
      "index": {
        "description": "Delay to wait before showing the next Gif image The delay is expressed in th of seconds",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "GifDelay",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Gif Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#t:GifLooping",
      "description": {
        "fct-descr": "\u003cp\u003eHelp to control the behaviour of GIF animation looping.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Gif.html#GifLooping",
        "fct-type": "data",
        "title": "GifLooping"
      },
      "index": {
        "description": "Help to control the behaviour of GIF animation looping",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "GifLooping",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Gif Looping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:LoopingForever",
      "description": {
        "fct-descr": "\u003cp\u003eThe animation will restart once the end is reached\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "LoopingForever",
        "fct-source": "src/Codec-Picture-Gif.html#GifLooping",
        "fct-type": "function",
        "title": "LoopingForever"
      },
      "index": {
        "description": "The animation will restart once the end is reached",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "LoopingForever",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Looping Forever",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:LoopingNever",
      "description": {
        "fct-descr": "\u003cp\u003eThe animation will stop once the end is reached\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "LoopingNever",
        "fct-source": "src/Codec-Picture-Gif.html#GifLooping",
        "fct-type": "function",
        "title": "LoopingNever"
      },
      "index": {
        "description": "The animation will stop once the end is reached",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "LoopingNever",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Looping Never",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:LoopingRepeat",
      "description": {
        "fct-descr": "\u003cp\u003eThe animation will repeat n times before stoping\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "LoopingRepeat Word16",
        "fct-source": "src/Codec-Picture-Gif.html#GifLooping",
        "fct-type": "function",
        "title": "LoopingRepeat"
      },
      "index": {
        "description": "The animation will repeat times before stoping",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "LoopingRepeat",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Looping Repeat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:decodeGif",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a raw gif image to an image, witout\n modifying the pixels.\n This function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Gif.html#decodeGif",
        "fct-type": "function",
        "title": "decodeGif"
      },
      "index": {
        "description": "Transform raw gif image to an image witout modifying the pixels This function can output the following pixel types PixelRGB8",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "decodeGif",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Gif",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:decodeGifImages",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a raw gif to a list of images, representing\n all the images of an animation.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String [Image PixelRGB8]",
        "fct-source": "src/Codec-Picture-Gif.html#decodeGifImages",
        "fct-type": "function",
        "title": "decodeGifImages"
      },
      "index": {
        "description": "Transform raw gif to list of images representing all the images of an animation",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "decodeGifImages",
        "normalized": "ByteString-\u003eEither String[Image PixelRGB]",
        "package": "JuicyPixels",
        "partial": "Gif Images",
        "signature": "ByteString-\u003eEither String[Image PixelRGB]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:encodeGifImage",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a greyscale image to a bytestring.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image Pixel8 -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Gif.html#encodeGifImage",
        "fct-type": "function",
        "title": "encodeGifImage"
      },
      "index": {
        "description": "Encode greyscale image to bytestring",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "encodeGifImage",
        "normalized": "Image Pixel-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Gif Image",
        "signature": "Image Pixel-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:encodeGifImageWithPalette",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an image with a given palette.\n Can return errors if the palette is ill-formed.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A palette must have between 1 and 256 colors\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image Pixel8 -\u003e Palette -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Gif.html#encodeGifImageWithPalette",
        "fct-type": "function",
        "title": "encodeGifImageWithPalette"
      },
      "index": {
        "description": "Encode an image with given palette Can return errors if the palette is ill-formed palette must have between and colors",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "encodeGifImageWithPalette",
        "normalized": "Image Pixel-\u003ePalette-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Gif Image With Palette",
        "signature": "Image Pixel-\u003ePalette-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:encodeGifImages",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a gif animation to a bytestring.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every image must have the same size\n\u003c/li\u003e\u003cli\u003e Every palette must have between one and 256 colors.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "GifLooping -\u003e [(Palette, GifDelay, Image Pixel8)] -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Gif.html#encodeGifImages",
        "fct-type": "function",
        "title": "encodeGifImages"
      },
      "index": {
        "description": "Encode gif animation to bytestring Every image must have the same size Every palette must have between one and colors",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "encodeGifImages",
        "normalized": "GifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Gif Images",
        "signature": "GifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:greyPalette",
      "description": {
        "fct-descr": "\u003cp\u003eDefault palette to produce greyscale images.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "Palette",
        "fct-source": "src/Codec-Picture-Gif.html#greyPalette",
        "fct-type": "function",
        "title": "greyPalette"
      },
      "index": {
        "description": "Default palette to produce greyscale images",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "greyPalette",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:writeGifImage",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a greyscale in a gif file on the disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image Pixel8 -\u003e IO ()",
        "fct-source": "src/Codec-Picture-Gif.html#writeGifImage",
        "fct-type": "function",
        "title": "writeGifImage"
      },
      "index": {
        "description": "Write greyscale in gif file on the disk",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "writeGifImage",
        "normalized": "FilePath-\u003eImage Pixel-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Gif Image",
        "signature": "FilePath-\u003eImage Pixel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:writeGifImageWithPalette",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a gif image with a palette to a file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A palette must have between 1 and 256 colors\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image Pixel8 -\u003e Palette -\u003e Either String (IO ())",
        "fct-source": "src/Codec-Picture-Gif.html#writeGifImageWithPalette",
        "fct-type": "function",
        "title": "writeGifImageWithPalette"
      },
      "index": {
        "description": "Write gif image with palette to file palette must have between and colors",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "writeGifImageWithPalette",
        "normalized": "FilePath-\u003eImage Pixel-\u003ePalette-\u003eEither String(IO())",
        "package": "JuicyPixels",
        "partial": "Gif Image With Palette",
        "signature": "FilePath-\u003eImage Pixel-\u003ePalette-\u003eEither String(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Gif.html#v:writeGifImages",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a list of images as a gif animation in a file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every image must have the same size\n\u003c/li\u003e\u003cli\u003e Every palette must have between one and 256 colors.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Gif",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e GifLooping -\u003e [(Palette, GifDelay, Image Pixel8)] -\u003e Either String (IO ())",
        "fct-source": "src/Codec-Picture-Gif.html#writeGifImages",
        "fct-type": "function",
        "title": "writeGifImages"
      },
      "index": {
        "description": "Write list of images as gif animation in file Every image must have the same size Every palette must have between one and colors",
        "hierarchy": "Codec Picture Gif",
        "module": "Codec.Picture.Gif",
        "name": "writeGifImages",
        "normalized": "FilePath-\u003eGifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String(IO())",
        "package": "JuicyPixels",
        "partial": "Gif Images",
        "signature": "FilePath-\u003eGifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule dedicated of Radiance file decompression (.hdr or .pic) file.\n Radiance file format is used for High dynamic range imaging.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture.HDR",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture-HDR.html",
        "fct-type": "module",
        "title": "HDR"
      },
      "index": {
        "description": "Module dedicated of Radiance file decompression hdr or pic file Radiance file format is used for High dynamic range imaging",
        "hierarchy": "Codec Picture HDR",
        "module": "Codec.Picture.HDR",
        "name": "HDR",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "HDR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#v:decodeHDR",
      "description": {
        "fct-descr": "\u003cp\u003eDecode an HDR (radiance) image, the resulting pixel\n type can be :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelRGBF\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.HDR",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-HDR.html#decodeHDR",
        "fct-type": "function",
        "title": "decodeHDR"
      },
      "index": {
        "description": "Decode an HDR radiance image the resulting pixel type can be PixelRGBF",
        "hierarchy": "Codec Picture HDR",
        "module": "Codec.Picture.HDR",
        "name": "decodeHDR",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "HDR",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#v:encodeHDR",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an High dynamic range image into a radiance image\n file format.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.HDR",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image PixelRGBF -\u003e ByteString",
        "fct-source": "src/Codec-Picture-HDR.html#encodeHDR",
        "fct-type": "function",
        "title": "encodeHDR"
      },
      "index": {
        "description": "Encode an High dynamic range image into radiance image file format",
        "hierarchy": "Codec Picture HDR",
        "module": "Codec.Picture.HDR",
        "name": "encodeHDR",
        "normalized": "Image PixelRGBF-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "HDR",
        "signature": "Image PixelRGBF-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-HDR.html#v:writeHDR",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an High dynamic range image into a radiance\n image file on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.HDR",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image PixelRGBF -\u003e IO ()",
        "fct-source": "src/Codec-Picture-HDR.html#writeHDR",
        "fct-type": "function",
        "title": "writeHDR"
      },
      "index": {
        "description": "Write an High dynamic range image into radiance image file on disk",
        "hierarchy": "Codec Picture HDR",
        "module": "Codec.Picture.HDR",
        "name": "writeHDR",
        "normalized": "FilePath-\u003eImage PixelRGBF-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "HDR",
        "signature": "FilePath-\u003eImage PixelRGBF-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule used for JPEG file loading and writing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture.Jpg",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture-Jpg.html",
        "fct-type": "module",
        "title": "Jpg"
      },
      "index": {
        "description": "Module used for JPEG file loading and writing",
        "hierarchy": "Codec Picture Jpg",
        "module": "Codec.Picture.Jpg",
        "name": "Jpg",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Jpg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:decodeJpeg",
      "description": {
        "fct-descr": "\u003cp\u003eTry to decompress a jpeg file and decompress. The colorspace is still\n YCbCr if you want to perform computation on the luma part. You can\n convert it to RGB using \u003ccode\u003e\u003ca\u003econvertImage\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eColorSpaceConvertible\u003c/a\u003e\u003c/code\u003e\n typeclass.\n\u003c/p\u003e\u003cp\u003eThis function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelY8\n\u003c/li\u003e\u003cli\u003e PixelYCbCr8\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Jpg",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Jpg.html#decodeJpeg",
        "fct-type": "function",
        "title": "decodeJpeg"
      },
      "index": {
        "description": "Try to decompress jpeg file and decompress The colorspace is still YCbCr if you want to perform computation on the luma part You can convert it to RGB using convertImage from the ColorSpaceConvertible typeclass This function can output the following pixel types PixelY8 PixelYCbCr8",
        "hierarchy": "Codec Picture Jpg",
        "module": "Codec.Picture.Jpg",
        "name": "decodeJpeg",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Jpeg",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:encodeJpeg",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an image in jpeg at a reasonnable quality level.\n If you want better quality or reduced file size, you should\n use \u003ccode\u003e\u003ca\u003eencodeJpegAtQuality\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Jpg",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image PixelYCbCr8 -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Jpg.html#encodeJpeg",
        "fct-type": "function",
        "title": "encodeJpeg"
      },
      "index": {
        "description": "Encode an image in jpeg at reasonnable quality level If you want better quality or reduced file size you should use encodeJpegAtQuality",
        "hierarchy": "Codec Picture Jpg",
        "module": "Codec.Picture.Jpg",
        "name": "encodeJpeg",
        "normalized": "Image PixelYCbCr-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Jpeg",
        "signature": "Image PixelYCbCr-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:encodeJpegAtQuality",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to call to encode an image to jpeg.\n The quality factor should be between 0 and 100 (100 being\n the best quality).\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Jpg",
        "fct-package": "JuicyPixels",
        "fct-signature": "Word8-\u003e Image PixelYCbCr8-\u003e ByteString",
        "fct-type": "function",
        "title": "encodeJpegAtQuality"
      },
      "index": {
        "description": "Function to call to encode an image to jpeg The quality factor should be between and being the best quality",
        "hierarchy": "Codec Picture Jpg",
        "module": "Codec.Picture.Jpg",
        "name": "encodeJpegAtQuality",
        "normalized": "Word-\u003eImage PixelYCbCr-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Jpeg At Quality",
        "signature": "Word-\u003eImage PixelYCbCr-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Jpg.html#v:jpgMachineStep",
      "description": {
        "fct-descr": "\u003cp\u003eThis pseudo interpreter interpret the Jpg frame for the huffman,\n quant table and restart interval parameters.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Jpg",
        "fct-package": "JuicyPixels",
        "fct-signature": "JpgFrame -\u003e JpgScripter s ()",
        "fct-source": "src/Codec-Picture-Jpg.html#jpgMachineStep",
        "fct-type": "function",
        "title": "jpgMachineStep"
      },
      "index": {
        "description": "This pseudo interpreter interpret the Jpg frame for the huffman quant table and restart interval parameters",
        "hierarchy": "Codec Picture Jpg",
        "module": "Codec.Picture.Jpg",
        "name": "jpgMachineStep",
        "normalized": "JpgFrame-\u003eJpgScripter a()",
        "package": "JuicyPixels",
        "partial": "Machine Step",
        "signature": "JpgFrame-\u003eJpgScripter s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule used for loading & writing 'Portable Network Graphics' (PNG)\n files. The API has two layers, the high level, which load the image without\n looking deeply about it and the low level, allowing access to data chunks contained\n in the PNG image.\n\u003c/p\u003e\u003cp\u003eFor general use, please use \u003ccode\u003e\u003ca\u003edecodePng\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eThe loader has been validated against the pngsuite (http:\u003cem/\u003ewww.libpng.org\u003cem\u003epub\u003c/em\u003epng/pngsuite.html)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture.Png",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture-Png.html",
        "fct-type": "module",
        "title": "Png"
      },
      "index": {
        "description": "Module used for loading writing Portable Network Graphics PNG files The API has two layers the high level which load the image without looking deeply about it and the low level allowing access to data chunks contained in the PNG image For general use please use decodePng function The loader has been validated against the pngsuite http www.libpng.org pub png pngsuite.html",
        "hierarchy": "Codec Picture Png",
        "module": "Codec.Picture.Png",
        "name": "Png",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Png",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#t:PngSavable",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an image into a png if possible.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Png",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Png-Export.html#PngSavable",
        "fct-type": "class",
        "title": "PngSavable"
      },
      "index": {
        "description": "Encode an image into png if possible",
        "hierarchy": "Codec Picture Png",
        "module": "Codec.Picture.Png",
        "name": "PngSavable",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Png Savable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:decodePng",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a raw png image to an image, without modifying the\n underlying pixel type. If the image is greyscale and \u003c 8 bits,\n a transformation to RGBA8 is performed. This should change\n in the future.\n The resulting image let you manage the pixel types.\n\u003c/p\u003e\u003cp\u003eThis function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelY8\n\u003c/li\u003e\u003cli\u003e PixelY16\n\u003c/li\u003e\u003cli\u003e PixelYA8\n\u003c/li\u003e\u003cli\u003e PixelYA16\n\u003c/li\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003cli\u003e PixelRGB16\n\u003c/li\u003e\u003cli\u003e PixelRGBA8\n\u003c/li\u003e\u003cli\u003e PixelRGBA16\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Png",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Png.html#decodePng",
        "fct-type": "function",
        "title": "decodePng"
      },
      "index": {
        "description": "Transform raw png image to an image without modifying the underlying pixel type If the image is greyscale and bits transformation to RGBA8 is performed This should change in the future The resulting image let you manage the pixel types This function can output the following pixel types PixelY8 PixelY16 PixelYA8 PixelYA16 PixelRGB8 PixelRGB16 PixelRGBA8 PixelRGBA16",
        "hierarchy": "Codec Picture Png",
        "module": "Codec.Picture.Png",
        "name": "decodePng",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Png",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:encodeDynamicPng",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a dynamic image in bmp if possible, supported pixel type are :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Y8\n\u003c/li\u003e\u003cli\u003e Y16\n\u003c/li\u003e\u003cli\u003e YA8\n\u003c/li\u003e\u003cli\u003e YA16\n\u003c/li\u003e\u003cli\u003e RGB8\n\u003c/li\u003e\u003cli\u003e RGB16\n\u003c/li\u003e\u003cli\u003e RGBA8\n\u003c/li\u003e\u003cli\u003e RGBA16\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Png",
        "fct-package": "JuicyPixels",
        "fct-signature": "DynamicImage -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Png-Export.html#encodeDynamicPng",
        "fct-type": "function",
        "title": "encodeDynamicPng"
      },
      "index": {
        "description": "Encode dynamic image in bmp if possible supported pixel type are Y8 Y16 YA8 YA16 RGB8 RGB16 RGBA8 RGBA16",
        "hierarchy": "Codec Picture Png",
        "module": "Codec.Picture.Png",
        "name": "encodeDynamicPng",
        "normalized": "DynamicImage-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Dynamic Png",
        "signature": "DynamicImage-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:encodePalettedPng",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a paletted image as a color indexed 8-bit PNG.\n the palette must have between 1 and 256 values in it.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Png",
        "fct-package": "JuicyPixels",
        "fct-signature": "Palette -\u003e Image Pixel8 -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Png-Export.html#encodePalettedPng",
        "fct-type": "function",
        "title": "encodePalettedPng"
      },
      "index": {
        "description": "Encode paletted image as color indexed bit PNG the palette must have between and values in it",
        "hierarchy": "Codec Picture Png",
        "module": "Codec.Picture.Png",
        "name": "encodePalettedPng",
        "normalized": "Palette-\u003eImage Pixel-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Paletted Png",
        "signature": "Palette-\u003eImage Pixel-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:encodePng",
      "description": {
        "fct-descr": "\u003cp\u003eTransform an image into a png encoded bytestring, ready\n to be written as a file.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Png",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Png-Export.html#encodePng",
        "fct-type": "method",
        "title": "encodePng"
      },
      "index": {
        "description": "Transform an image into png encoded bytestring ready to be written as file",
        "hierarchy": "Codec Picture Png",
        "module": "Codec.Picture.Png",
        "name": "encodePng",
        "normalized": "Image a-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Png",
        "signature": "Image a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:writeDynamicPng",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a dynamic image in a .png image file if possible.\n The same restriction as encodeDynamicPng apply.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Png",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e DynamicImage -\u003e IO (Either String Bool)",
        "fct-source": "src/Codec-Picture-Png-Export.html#writeDynamicPng",
        "fct-type": "function",
        "title": "writeDynamicPng"
      },
      "index": {
        "description": "Write dynamic image in png image file if possible The same restriction as encodeDynamicPng apply",
        "hierarchy": "Codec Picture Png",
        "module": "Codec.Picture.Png",
        "name": "writeDynamicPng",
        "normalized": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)",
        "package": "JuicyPixels",
        "partial": "Dynamic Png",
        "signature": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Png.html#v:writePng",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to directly write an image as a png on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Png",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image pixel -\u003e IO ()",
        "fct-source": "src/Codec-Picture-Png-Export.html#writePng",
        "fct-type": "function",
        "title": "writePng"
      },
      "index": {
        "description": "Helper function to directly write an image as png on disk",
        "hierarchy": "Codec Picture Png",
        "module": "Codec.Picture.Png",
        "name": "writePng",
        "normalized": "FilePath-\u003eImage a-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Png",
        "signature": "FilePath-\u003eImage pixel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions to save dynamic images to other file format\n with automatic color space/sample format conversion done automatically.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture.Saving",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture-Saving.html",
        "fct-type": "module",
        "title": "Saving"
      },
      "index": {
        "description": "Helper functions to save dynamic images to other file format with automatic color space sample format conversion done automatically",
        "hierarchy": "Codec Picture Saving",
        "module": "Codec.Picture.Saving",
        "name": "Saving",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Saving",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eThis function will try to do anything to encode an image\n as bitmap, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for Bitmap encoding\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Saving",
        "fct-package": "JuicyPixels",
        "fct-signature": "DynamicImage -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Saving.html#imageToBitmap",
        "fct-type": "function",
        "title": "imageToBitmap"
      },
      "index": {
        "description": "This function will try to do anything to encode an image as bitmap make all color conversion and such Equivalent of decodeImage for Bitmap encoding",
        "hierarchy": "Codec Picture Saving",
        "module": "Codec.Picture.Saving",
        "name": "imageToBitmap",
        "normalized": "DynamicImage-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "To Bitmap",
        "signature": "DynamicImage-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToGif",
      "description": {
        "fct-descr": "\u003cp\u003eThis function will try to do anything to encode an image\n as a gif, make all color conversion and quantization. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for gif encoding\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Saving",
        "fct-package": "JuicyPixels",
        "fct-signature": "DynamicImage -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Saving.html#imageToGif",
        "fct-type": "function",
        "title": "imageToGif"
      },
      "index": {
        "description": "This function will try to do anything to encode an image as gif make all color conversion and quantization Equivalent of decodeImage for gif encoding",
        "hierarchy": "Codec Picture Saving",
        "module": "Codec.Picture.Saving",
        "name": "imageToGif",
        "normalized": "DynamicImage-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "To Gif",
        "signature": "DynamicImage-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToJpg",
      "description": {
        "fct-descr": "\u003cp\u003eThis function will try to do anything to encode an image\n as JPEG, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for jpeg encoding\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Saving",
        "fct-package": "JuicyPixels",
        "fct-signature": "Int -\u003e DynamicImage -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Saving.html#imageToJpg",
        "fct-type": "function",
        "title": "imageToJpg"
      },
      "index": {
        "description": "This function will try to do anything to encode an image as JPEG make all color conversion and such Equivalent of decodeImage for jpeg encoding",
        "hierarchy": "Codec Picture Saving",
        "module": "Codec.Picture.Saving",
        "name": "imageToJpg",
        "normalized": "Int-\u003eDynamicImage-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "To Jpg",
        "signature": "Int-\u003eDynamicImage-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToPng",
      "description": {
        "fct-descr": "\u003cp\u003eThis function will try to do anything to encode an image\n as PNG, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for PNG encoding\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Saving",
        "fct-package": "JuicyPixels",
        "fct-signature": "DynamicImage -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Saving.html#imageToPng",
        "fct-type": "function",
        "title": "imageToPng"
      },
      "index": {
        "description": "This function will try to do anything to encode an image as PNG make all color conversion and such Equivalent of decodeImage for PNG encoding",
        "hierarchy": "Codec Picture Saving",
        "module": "Codec.Picture.Saving",
        "name": "imageToPng",
        "normalized": "DynamicImage-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "To Png",
        "signature": "DynamicImage-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToRadiance",
      "description": {
        "fct-descr": "\u003cp\u003eThis function will try to do anything to encode an image\n as RADIANCE, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for radiance encoding\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Saving",
        "fct-package": "JuicyPixels",
        "fct-signature": "DynamicImage -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Saving.html#imageToRadiance",
        "fct-type": "function",
        "title": "imageToRadiance"
      },
      "index": {
        "description": "This function will try to do anything to encode an image as RADIANCE make all color conversion and such Equivalent of decodeImage for radiance encoding",
        "hierarchy": "Codec Picture Saving",
        "module": "Codec.Picture.Saving",
        "name": "imageToRadiance",
        "normalized": "DynamicImage-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "To Radiance",
        "signature": "DynamicImage-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Saving.html#v:imageToTiff",
      "description": {
        "fct-descr": "\u003cp\u003eThis function will try to do anything to encode an image\n as a Tiff, make all color conversion and such. Equivalent\n of \u003ccode\u003edecodeImage\u003c/code\u003e for Tiff encoding\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Saving",
        "fct-package": "JuicyPixels",
        "fct-signature": "DynamicImage -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Saving.html#imageToTiff",
        "fct-type": "function",
        "title": "imageToTiff"
      },
      "index": {
        "description": "This function will try to do anything to encode an image as Tiff make all color conversion and such Equivalent of decodeImage for Tiff encoding",
        "hierarchy": "Codec Picture Saving",
        "module": "Codec.Picture.Saving",
        "name": "imageToTiff",
        "normalized": "DynamicImage-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "To Tiff",
        "signature": "DynamicImage-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule implementing TIFF decoding.\n\u003c/p\u003e\u003cp\u003eSupported compression schemes :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Uncompressed\n\u003c/li\u003e\u003cli\u003e PackBits\n\u003c/li\u003e\u003cli\u003e LZW\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSupported bit depth :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 2 bits\n\u003c/li\u003e\u003cli\u003e 4 bits\n\u003c/li\u003e\u003cli\u003e 8 bits\n\u003c/li\u003e\u003cli\u003e 16 bits\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture.Tiff",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture-Tiff.html",
        "fct-type": "module",
        "title": "Tiff"
      },
      "index": {
        "description": "Module implementing TIFF decoding Supported compression schemes Uncompressed PackBits LZW Supported bit depth bits bits bits bits",
        "hierarchy": "Codec Picture Tiff",
        "module": "Codec.Picture.Tiff",
        "name": "Tiff",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Tiff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#t:TiffSaveable",
      "description": {
        "fct-descr": "\u003cp\u003eClass defining which pixel types can be serialized in a\n Tiff file.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Tiff",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Tiff.html#TiffSaveable",
        "fct-type": "class",
        "title": "TiffSaveable"
      },
      "index": {
        "description": "Class defining which pixel types can be serialized in Tiff file",
        "hierarchy": "Codec Picture Tiff",
        "module": "Codec.Picture.Tiff",
        "name": "TiffSaveable",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Tiff Saveable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#v:decodeTiff",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a raw tiff image to an image, without modifying\n the underlying pixel type.\n\u003c/p\u003e\u003cp\u003eThis function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelY8\n\u003c/li\u003e\u003cli\u003e PixelY16\n\u003c/li\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003cli\u003e PixelRGB16\n\u003c/li\u003e\u003cli\u003e PixelCMYK8\n\u003c/li\u003e\u003cli\u003e PixelCMYK16\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Tiff",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Tiff.html#decodeTiff",
        "fct-type": "function",
        "title": "decodeTiff"
      },
      "index": {
        "description": "Transform raw tiff image to an image without modifying the underlying pixel type This function can output the following pixel types PixelY8 PixelY16 PixelRGB8 PixelRGB16 PixelCMYK8 PixelCMYK16",
        "hierarchy": "Codec Picture Tiff",
        "module": "Codec.Picture.Tiff",
        "name": "decodeTiff",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Tiff",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#v:encodeTiff",
      "description": {
        "fct-descr": "\u003cp\u003eTransform an image into a Tiff encoded bytestring, reade to be\n written as a file.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Tiff",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image px -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Tiff.html#encodeTiff",
        "fct-type": "function",
        "title": "encodeTiff"
      },
      "index": {
        "description": "Transform an image into Tiff encoded bytestring reade to be written as file",
        "hierarchy": "Codec Picture Tiff",
        "module": "Codec.Picture.Tiff",
        "name": "encodeTiff",
        "normalized": "Image a-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Tiff",
        "signature": "Image px-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Tiff.html#v:writeTiff",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to directly write an image as a tiff on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Tiff",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image pixel -\u003e IO ()",
        "fct-source": "src/Codec-Picture-Tiff.html#writeTiff",
        "fct-type": "function",
        "title": "writeTiff"
      },
      "index": {
        "description": "Helper function to directly write an image as tiff on disk",
        "hierarchy": "Codec Picture Tiff",
        "module": "Codec.Picture.Tiff",
        "name": "writeTiff",
        "normalized": "FilePath-\u003eImage a-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Tiff",
        "signature": "FilePath-\u003eImage pixel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing the basic types for image manipulation in the library.\n Defining the types used to store all those _Juicy Pixels_\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Module providing the basic types for image manipulation in the library Defining the types used to store all those Juicy Pixels",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "Types",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:ColorConvertible",
      "description": {
        "fct-descr": "\u003cp\u003eImplement upcasting for pixel types\n Minimal declaration declaration \u003ccode\u003e\u003ca\u003epromotePixel\u003c/a\u003e\u003c/code\u003e\n It is strongly recommanded to overload promoteImage to keep\n performance acceptable\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Types.html#ColorConvertible",
        "fct-type": "class",
        "title": "ColorConvertible"
      },
      "index": {
        "description": "Implement upcasting for pixel types Minimal declaration declaration promotePixel It is strongly recommanded to overload promoteImage to keep performance acceptable",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ColorConvertible",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Color Convertible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:ColorPlane",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to describle plane present in the pixel\n type. If a pixel has a plane description associated,\n you can use the plane name to extract planes independently.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Types.html#ColorPlane",
        "fct-type": "class",
        "title": "ColorPlane"
      },
      "index": {
        "description": "Class used to describle plane present in the pixel type If pixel has plane description associated you can use the plane name to extract planes independently",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ColorPlane",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Color Plane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:ColorSpaceConvertible",
      "description": {
        "fct-descr": "\u003cp\u003eThis class abstract colorspace conversion. This\n conversion can be lossy, which ColorConvertible cannot\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Types.html#ColorSpaceConvertible",
        "fct-type": "class",
        "title": "ColorSpaceConvertible"
      },
      "index": {
        "description": "This class abstract colorspace conversion This conversion can be lossy which ColorConvertible cannot",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ColorSpaceConvertible",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Color Space Convertible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:DynamicImage",
      "description": {
        "fct-descr": "\u003cp\u003eType allowing the loading of an image with different pixel\n structures\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "data",
        "title": "DynamicImage"
      },
      "index": {
        "description": "Type allowing the loading of an image with different pixel structures",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "DynamicImage",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Dynamic Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Image",
      "description": {
        "fct-descr": "\u003cp\u003eImage or pixel buffer, the coordinates are assumed to start\n from the upper-left corner of the image, with the horizontal\n position first, then the vertical one.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "data",
        "title": "Image"
      },
      "index": {
        "description": "Image or pixel buffer the coordinates are assumed to start from the upper-left corner of the image with the horizontal position first then the vertical one",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "Image",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:LumaPlaneExtractable",
      "description": {
        "fct-descr": "\u003cp\u003eHelper class to help extract a luma plane out\n of an image or a pixel\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Types.html#LumaPlaneExtractable",
        "fct-type": "class",
        "title": "LumaPlaneExtractable"
      },
      "index": {
        "description": "Helper class to help extract luma plane out of an image or pixel",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "LumaPlaneExtractable",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Luma Plane Extractable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:MutableImage",
      "description": {
        "fct-descr": "\u003cp\u003eImage or pixel buffer, the coordinates are assumed to start\n from the upper-left corner of the image, with the horizontal\n position first, then the vertical one. The image can be transformed in place.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#MutableImage",
        "fct-type": "data",
        "title": "MutableImage"
      },
      "index": {
        "description": "Image or pixel buffer the coordinates are assumed to start from the upper-left corner of the image with the horizontal position first then the vertical one The image can be transformed in place",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "MutableImage",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Mutable Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Palette",
      "description": {
        "fct-descr": "\u003cp\u003eType for the palette used in Gif & PNG files.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Types.html#Palette",
        "fct-type": "type",
        "title": "Palette"
      },
      "index": {
        "description": "Type for the palette used in Gif PNG files",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "Palette",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Pixel",
      "description": {
        "fct-descr": "\u003cp\u003eDefinition of pixels used in images. Each pixel has a color space, and a representative\n component (Word8 or Float).\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Types.html#Pixel",
        "fct-type": "class",
        "title": "Pixel"
      },
      "index": {
        "description": "Definition of pixels used in images Each pixel has color space and representative component Word8 or Float",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "Pixel",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Pixel16",
      "description": {
        "fct-descr": "\u003cp\u003eSimple alias for greyscale value in 16 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Types.html#Pixel16",
        "fct-type": "type",
        "title": "Pixel16"
      },
      "index": {
        "description": "Simple alias for greyscale value in bits",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "Pixel16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Pixel32",
      "description": {
        "fct-descr": "\u003cp\u003eSimple alias for greyscale value in 16 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Types.html#Pixel32",
        "fct-type": "type",
        "title": "Pixel32"
      },
      "index": {
        "description": "Simple alias for greyscale value in bits",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "Pixel32",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:Pixel8",
      "description": {
        "fct-descr": "\u003cp\u003eSimple alias for greyscale value in 8 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Types.html#Pixel8",
        "fct-type": "type",
        "title": "Pixel8"
      },
      "index": {
        "description": "Simple alias for greyscale value in bits",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "Pixel8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelCMYK16",
      "description": {
        "fct-descr": "\u003cp\u003ePixel storing data in the CMYK colorspace. value\n are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cyan\n\u003c/li\u003e\u003cli\u003e Magenta\n\u003c/li\u003e\u003cli\u003e Yellow\n\u003c/li\u003e\u003cli\u003e Black\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelCMYK16",
        "fct-type": "data",
        "title": "PixelCMYK16"
      },
      "index": {
        "description": "Pixel storing data in the CMYK colorspace value are stored in the following order Cyan Magenta Yellow Black",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelCMYK16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelCMYK8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel storing data in the CMYK colorspace. value\n are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cyan\n\u003c/li\u003e\u003cli\u003e Magenta\n\u003c/li\u003e\u003cli\u003e Yellow\n\u003c/li\u003e\u003cli\u003e Black\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelCMYK8",
        "fct-type": "data",
        "title": "PixelCMYK8"
      },
      "index": {
        "description": "Pixel storing data in the CMYK colorspace value are stored in the following order Cyan Magenta Yellow Black",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelCMYK8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelF",
      "description": {
        "fct-descr": "\u003cp\u003eFloating greyscale value, the 0 to 255 8 bit range maps\n to 0 to 1 in this floating version\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Types.html#PixelF",
        "fct-type": "type",
        "title": "PixelF"
      },
      "index": {
        "description": "Floating greyscale value the to bit range maps to to in this floating version",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGB16",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing pixels on 16 bits\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGB16",
        "fct-type": "data",
        "title": "PixelRGB16"
      },
      "index": {
        "description": "Pixel type storing pixels on bits Value are stored in the following order Red Green Blue",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGB16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGB8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing classic pixel on 8 bits\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGB8",
        "fct-type": "data",
        "title": "PixelRGB8"
      },
      "index": {
        "description": "Pixel type storing classic pixel on bits Value are stored in the following order Red Green Blue",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGB8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGBA16",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing a RGB information with an alpha\n channel on 16 bits.\n Values are stored in the following order\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBA16",
        "fct-type": "data",
        "title": "PixelRGBA16"
      },
      "index": {
        "description": "Pixel type storing RGB information with an alpha channel on bits Values are stored in the following order Red Green Blue Alpha",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGBA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGBA8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing a classic pixel, with an alpha component.\n Values are stored in the following order\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBA8",
        "fct-type": "data",
        "title": "PixelRGBA8"
      },
      "index": {
        "description": "Pixel type storing classic pixel with an alpha component Values are stored in the following order Red Green Blue Alpha",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGBA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelRGBF",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing HDR pixel on 32 bits float\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBF",
        "fct-type": "data",
        "title": "PixelRGBF"
      },
      "index": {
        "description": "Pixel type storing HDR pixel on bits float Value are stored in the following order Red Green Blue",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGBF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelYA16",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing Luminance (Y) and alpha information\n on 16 bits.\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Luminance\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelYA16",
        "fct-type": "data",
        "title": "PixelYA16"
      },
      "index": {
        "description": "Pixel type storing Luminance and alpha information on bits Value are stored in the following order Luminance Alpha",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelYA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelYA8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing Luminance (Y) and alpha information\n on 8 bits.\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Luminance\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelYA8",
        "fct-type": "data",
        "title": "PixelYA8"
      },
      "index": {
        "description": "Pixel type storing Luminance and alpha information on bits Value are stored in the following order Luminance Alpha",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelYA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PixelYCbCr8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel storing data in the YCbCr colorspace,\n value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Y (luminance)\n\u003c/li\u003e\u003cli\u003e Cr\n\u003c/li\u003e\u003cli\u003e Cb\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelYCbCr8",
        "fct-type": "data",
        "title": "PixelYCbCr8"
      },
      "index": {
        "description": "Pixel storing data in the YCbCr colorspace value are stored in the following order luminance Cr Cb",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelYCbCr8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YCb Cr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneAlpha",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the plane for the alpha (transparency) component\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneAlpha",
        "fct-type": "data",
        "title": "PlaneAlpha"
      },
      "index": {
        "description": "Define the plane for the alpha transparency component",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneAlpha",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneBlack",
      "description": {
        "fct-descr": "\u003cp\u003eDefine plane for the black component of\n the CMYK color space.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneBlack",
        "fct-type": "data",
        "title": "PlaneBlack"
      },
      "index": {
        "description": "Define plane for the black component of the CMYK color space",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneBlack",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneBlue",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the plane for the blue color component\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneBlue",
        "fct-type": "data",
        "title": "PlaneBlue"
      },
      "index": {
        "description": "Define the plane for the blue color component",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneBlue",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneCb",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the plane for the Cb component\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneCb",
        "fct-type": "data",
        "title": "PlaneCb"
      },
      "index": {
        "description": "Define the plane for the Cb component",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneCb",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Cb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneCr",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the plane for the Cr component\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneCr",
        "fct-type": "data",
        "title": "PlaneCr"
      },
      "index": {
        "description": "Define the plane for the Cr component",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneCr",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Cr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneCyan",
      "description": {
        "fct-descr": "\u003cp\u003eDefine plane for the cyan component of the\n CMYK color space.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneCyan",
        "fct-type": "data",
        "title": "PlaneCyan"
      },
      "index": {
        "description": "Define plane for the cyan component of the CMYK color space",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneCyan",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneGreen",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the plane for the green color component\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneGreen",
        "fct-type": "data",
        "title": "PlaneGreen"
      },
      "index": {
        "description": "Define the plane for the green color component",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneGreen",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneLuma",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the plane for the luma component\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneLuma",
        "fct-type": "data",
        "title": "PlaneLuma"
      },
      "index": {
        "description": "Define the plane for the luma component",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneLuma",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Luma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneMagenta",
      "description": {
        "fct-descr": "\u003cp\u003eDefine plane for the magenta component of the\n CMYK color space.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneMagenta",
        "fct-type": "data",
        "title": "PlaneMagenta"
      },
      "index": {
        "description": "Define plane for the magenta component of the CMYK color space",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneMagenta",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneRed",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the plane for the red color component\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneRed",
        "fct-type": "data",
        "title": "PlaneRed"
      },
      "index": {
        "description": "Define the plane for the red color component",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneRed",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:PlaneYellow",
      "description": {
        "fct-descr": "\u003cp\u003eDefine plane for the yellow component of the\n CMYK color space.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PlaneYellow",
        "fct-type": "data",
        "title": "PlaneYellow"
      },
      "index": {
        "description": "Define plane for the yellow component of the CMYK color space",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneYellow",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#t:TransparentPixel",
      "description": {
        "fct-descr": "\u003cp\u003eClass modeling transparent pixel, should provide a method\n to combine transparent pixels\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Types.html#TransparentPixel",
        "fct-type": "class",
        "title": "TransparentPixel"
      },
      "index": {
        "description": "Class modeling transparent pixel should provide method to combine transparent pixels",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "TransparentPixel",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Transparent Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:Image",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "function",
        "title": "Image"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "Image",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageCMYK16",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in the colorspace CMYK and 16 bots precision\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageCMYK16 (Image PixelCMYK16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageCMYK16"
      },
      "index": {
        "description": "An image in the colorspace CMYK and bots precision",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageCMYK16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageCMYK8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in the colorspace CMYK\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageCMYK8 (Image PixelCMYK8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageCMYK8"
      },
      "index": {
        "description": "An image in the colorspace CMYK",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageCMYK8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGB16",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in true color with 16bit depth.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGB16 (Image PixelRGB16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGB16"
      },
      "index": {
        "description": "An image in true color with bit depth",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageRGB16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGB8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in true color.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGB8 (Image PixelRGB8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGB8"
      },
      "index": {
        "description": "An image in true color",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageRGB8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGBA16",
      "description": {
        "fct-descr": "\u003cp\u003eA true color image with alpha on 16 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGBA16 (Image PixelRGBA16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGBA16"
      },
      "index": {
        "description": "true color image with alpha on bits",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageRGBA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGBA8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in true color and an alpha channel.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGBA8 (Image PixelRGBA8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGBA8"
      },
      "index": {
        "description": "An image in true color and an alpha channel",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageRGBA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageRGBF",
      "description": {
        "fct-descr": "\u003cp\u003eAn image with HDR pixels\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGBF (Image PixelRGBF)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGBF"
      },
      "index": {
        "description": "An image with HDR pixels",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageRGBF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGBF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageY16",
      "description": {
        "fct-descr": "\u003cp\u003eA greyscale image with 16bit components\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageY16 (Image Pixel16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageY16"
      },
      "index": {
        "description": "greyscale image with bit components",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageY16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageY8",
      "description": {
        "fct-descr": "\u003cp\u003eA greyscale image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageY8 (Image Pixel8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageY8"
      },
      "index": {
        "description": "greyscale image",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageY8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYA16",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in greyscale with alpha channel on 16 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageYA16 (Image PixelYA16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageYA16"
      },
      "index": {
        "description": "An image in greyscale with alpha channel on bits",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageYA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYA8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in greyscale with an alpha channel.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageYA8 (Image PixelYA8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageYA8"
      },
      "index": {
        "description": "An image in greyscale with an alpha channel",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageYA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYCbCr8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in the colorspace used by Jpeg images.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageYCbCr8 (Image PixelYCbCr8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageYCbCr8"
      },
      "index": {
        "description": "An image in the colorspace used by Jpeg images",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageYCbCr8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image YCb Cr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:ImageYF",
      "description": {
        "fct-descr": "\u003cp\u003eA greyscale HDR image\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageYF (Image PixelF)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageYF"
      },
      "index": {
        "description": "greyscale HDR image",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "ImageYF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image YF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:MutableImage",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "MutableImage",
        "fct-source": "src/Codec-Picture-Types.html#MutableImage",
        "fct-type": "function",
        "title": "MutableImage"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "MutableImage",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Mutable Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelCMYK16",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelCMYK16 !Pixel16 !Pixel16 !Pixel16 !Pixel16",
        "fct-source": "src/Codec-Picture-Types.html#PixelCMYK16",
        "fct-type": "function",
        "title": "PixelCMYK16"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelCMYK16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelCMYK8",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelCMYK8 !Pixel8 !Pixel8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelCMYK8",
        "fct-type": "function",
        "title": "PixelCMYK8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelCMYK8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGB16",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGB16 !Pixel16 !Pixel16 !Pixel16",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGB16",
        "fct-type": "function",
        "title": "PixelRGB16"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGB16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGB8",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGB8 !Pixel8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGB8",
        "fct-type": "function",
        "title": "PixelRGB8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGB8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGBA16",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGBA16 !Pixel16 !Pixel16 !Pixel16 !Pixel16",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBA16",
        "fct-type": "function",
        "title": "PixelRGBA16"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGBA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGBA8",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGBA8 !Pixel8 !Pixel8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBA8",
        "fct-type": "function",
        "title": "PixelRGBA8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGBA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelRGBF",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGBF !PixelF !PixelF !PixelF",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBF",
        "fct-type": "function",
        "title": "PixelRGBF"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelRGBF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelYA16",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelYA16 !Pixel16 !Pixel16",
        "fct-source": "src/Codec-Picture-Types.html#PixelYA16",
        "fct-type": "function",
        "title": "PixelYA16"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelYA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelYA8",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelYA8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelYA8",
        "fct-type": "function",
        "title": "PixelYA8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelYA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PixelYCbCr8",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelYCbCr8 !Pixel8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelYCbCr8",
        "fct-type": "function",
        "title": "PixelYCbCr8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PixelYCbCr8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YCb Cr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneAlpha",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneAlpha",
        "fct-source": "src/Codec-Picture-Types.html#PlaneAlpha",
        "fct-type": "function",
        "title": "PlaneAlpha"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneAlpha",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneBlack",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneBlack",
        "fct-source": "src/Codec-Picture-Types.html#PlaneBlack",
        "fct-type": "function",
        "title": "PlaneBlack"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneBlack",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneBlue",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneBlue",
        "fct-source": "src/Codec-Picture-Types.html#PlaneBlue",
        "fct-type": "function",
        "title": "PlaneBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneBlue",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneCb",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneCb",
        "fct-source": "src/Codec-Picture-Types.html#PlaneCb",
        "fct-type": "function",
        "title": "PlaneCb"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneCb",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Cb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneCr",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneCr",
        "fct-source": "src/Codec-Picture-Types.html#PlaneCr",
        "fct-type": "function",
        "title": "PlaneCr"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneCr",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Cr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneCyan",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneCyan",
        "fct-source": "src/Codec-Picture-Types.html#PlaneCyan",
        "fct-type": "function",
        "title": "PlaneCyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneCyan",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneGreen",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneGreen",
        "fct-source": "src/Codec-Picture-Types.html#PlaneGreen",
        "fct-type": "function",
        "title": "PlaneGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneGreen",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneLuma",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneLuma",
        "fct-source": "src/Codec-Picture-Types.html#PlaneLuma",
        "fct-type": "function",
        "title": "PlaneLuma"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneLuma",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Luma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneMagenta",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneMagenta",
        "fct-source": "src/Codec-Picture-Types.html#PlaneMagenta",
        "fct-type": "function",
        "title": "PlaneMagenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneMagenta",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneRed",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneRed",
        "fct-source": "src/Codec-Picture-Types.html#PlaneRed",
        "fct-type": "function",
        "title": "PlaneRed"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneRed",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:PlaneYellow",
      "description": {
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PlaneYellow",
        "fct-source": "src/Codec-Picture-Types.html#PlaneYellow",
        "fct-type": "function",
        "title": "PlaneYellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "PlaneYellow",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Plane Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:colorMap",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all color component of a pixel.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "(PixelBaseComponent a -\u003e PixelBaseComponent a) -\u003e a -\u003e a",
        "fct-source": "src/Codec-Picture-Types.html#colorMap",
        "fct-type": "method",
        "title": "colorMap"
      },
      "index": {
        "description": "Apply function to all color component of pixel",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "colorMap",
        "normalized": "(PixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea",
        "package": "JuicyPixels",
        "partial": "Map",
        "signature": "(PixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:componentCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of component of the pixel\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Codec-Picture-Types.html#componentCount",
        "fct-type": "method",
        "title": "componentCount"
      },
      "index": {
        "description": "Return the number of component of the pixel",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "componentCount",
        "normalized": "a-\u003eInt",
        "package": "JuicyPixels",
        "partial": "Count",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:computeLuma",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the luminance part of a pixel\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "a -\u003e PixelBaseComponent a",
        "fct-source": "src/Codec-Picture-Types.html#computeLuma",
        "fct-type": "method",
        "title": "computeLuma"
      },
      "index": {
        "description": "Compute the luminance part of pixel",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "computeLuma",
        "normalized": "a-\u003ePixelBaseComponent a",
        "package": "JuicyPixels",
        "partial": "Luma",
        "signature": "a-\u003ePixelBaseComponent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:convertImage",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to convert a whole image by taking a\n copy it.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e Image b",
        "fct-source": "src/Codec-Picture-Types.html#convertImage",
        "fct-type": "method",
        "title": "convertImage"
      },
      "index": {
        "description": "Helper function to convert whole image by taking copy it",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "convertImage",
        "normalized": "Image a-\u003eImage b",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "Image a-\u003eImage b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:convertPixel",
      "description": {
        "fct-descr": "\u003cp\u003ePass a pixel from a colorspace (say RGB) to the second one\n (say YCbCr)\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Codec-Picture-Types.html#convertPixel",
        "fct-type": "method",
        "title": "convertPixel"
      },
      "index": {
        "description": "Pass pixel from colorspace say RGB to the second one say YCbCr",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "convertPixel",
        "normalized": "a-\u003eb",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:createMutableImage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a mutable image, filled with the given background color.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Int-\u003e Int-\u003e px-\u003e m (MutableImage (PrimState m) px)",
        "fct-type": "function",
        "title": "createMutableImage"
      },
      "index": {
        "description": "Create mutable image filled with the given background color",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "createMutableImage",
        "normalized": "Int-\u003eInt-\u003ea-\u003eb(MutableImage(PrimState b)a)",
        "package": "JuicyPixels",
        "partial": "Mutable Image",
        "signature": "Int-\u003eInt-\u003epx-\u003em(MutableImage(PrimState m)px)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:dropAlphaLayer",
      "description": {
        "fct-descr": "\u003cp\u003eFor any image with an alpha component (transparency),\n drop it, returning a pure opaque image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e Image b",
        "fct-source": "src/Codec-Picture-Types.html#dropAlphaLayer",
        "fct-type": "function",
        "title": "dropAlphaLayer"
      },
      "index": {
        "description": "For any image with an alpha component transparency drop it returning pure opaque image",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "dropAlphaLayer",
        "normalized": "Image a-\u003eImage b",
        "package": "JuicyPixels",
        "partial": "Alpha Layer",
        "signature": "Image a-\u003eImage b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:dropTransparency",
      "description": {
        "fct-descr": "\u003cp\u003eJust return the opaque pixel value\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Codec-Picture-Types.html#dropTransparency",
        "fct-type": "method",
        "title": "dropTransparency"
      },
      "index": {
        "description": "Just return the opaque pixel value",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "dropTransparency",
        "normalized": "a-\u003eb",
        "package": "JuicyPixels",
        "partial": "Transparency",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:dynamicMap",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to help extract information from dynamic\n image. To get the width of an dynamic image, you can use\n the following snippet :\n\u003c/p\u003e\u003cpre\u003e dynWidth :: DynamicImage -\u003e Int\n dynWidth img = dynamicMap imageWidth img\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image pixel -\u003e a) -\u003e DynamicImage -\u003e a",
        "fct-source": "src/Codec-Picture-Types.html#dynamicMap",
        "fct-type": "function",
        "title": "dynamicMap"
      },
      "index": {
        "description": "Helper function to help extract information from dynamic image To get the width of an dynamic image you can use the following snippet dynWidth DynamicImage Int dynWidth img dynamicMap imageWidth img",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "dynamicMap",
        "normalized": "Image a-\u003eb)-\u003eDynamicImage-\u003eb",
        "package": "JuicyPixels",
        "partial": "Map",
        "signature": "Image pixel-\u003ea)-\u003eDynamicImage-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:dynamicPixelMap",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent of the \u003ccode\u003e\u003ca\u003epixelMap\u003c/a\u003e\u003c/code\u003e function for the dynamic images.\n You can perform pixel colorspace independant operations with this\n function.\n\u003c/p\u003e\u003cp\u003eFor instance, if you wan't to extract a square crop of any image,\n without caring about colorspace, you can use the following snippet.\n\u003c/p\u003e\u003cpre\u003e dynSquare :: DynamicImage -\u003e DynamicImage\n dynSquare = dynMap squareImage\n\n squareImage :: Pixel a =\u003e Image a -\u003e Image a\n squareImage img = generateImage (\\x y -\u003e pixelAt img x y) edge edge\n    where edge = min (imageWidth img) (imageHeight img)\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image pixel -\u003e Image pixel) -\u003e DynamicImage -\u003e DynamicImage",
        "fct-source": "src/Codec-Picture-Types.html#dynamicPixelMap",
        "fct-type": "function",
        "title": "dynamicPixelMap"
      },
      "index": {
        "description": "Equivalent of the pixelMap function for the dynamic images You can perform pixel colorspace independant operations with this function For instance if you wan to extract square crop of any image without caring about colorspace you can use the following snippet dynSquare DynamicImage DynamicImage dynSquare dynMap squareImage squareImage Pixel Image Image squareImage img generateImage pixelAt img edge edge where edge min imageWidth img imageHeight img",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "dynamicPixelMap",
        "normalized": "Image a-\u003eImage a)-\u003eDynamicImage-\u003eDynamicImage",
        "package": "JuicyPixels",
        "partial": "Pixel Map",
        "signature": "Image pixel-\u003eImage pixel)-\u003eDynamicImage-\u003eDynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:extractComponent",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a color plane from an image given a present plane in the image\n examples :\n\u003c/p\u003e\u003cpre\u003e\n  extractRedPlane :: Image PixelRGB8-\u003e Image Pixel8\n  extractRedPlane = extractComponent PlaneRed\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "plane -\u003e Image px -\u003e Image (PixelBaseComponent px)",
        "fct-source": "src/Codec-Picture-Types.html#extractComponent",
        "fct-type": "function",
        "title": "extractComponent"
      },
      "index": {
        "description": "Extract color plane from an image given present plane in the image examples extractRedPlane Image PixelRGB8 Image Pixel8 extractRedPlane extractComponent PlaneRed",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "extractComponent",
        "normalized": "a-\u003eImage b-\u003eImage(PixelBaseComponent b)",
        "package": "JuicyPixels",
        "partial": "Component",
        "signature": "plane-\u003eImage px-\u003eImage(PixelBaseComponent px)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:extractLumaPlane",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a luma plane out of an image. This\n method is in the typeclass to help performant\n implementation.\n\u003c/p\u003e\u003cpre\u003e jpegToGrayScale :: FilePath -\u003e FilePath -\u003e IO ()\n jpegToGrayScale source dest\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e Image (PixelBaseComponent a)",
        "fct-source": "src/Codec-Picture-Types.html#extractLumaPlane",
        "fct-type": "method",
        "title": "extractLumaPlane"
      },
      "index": {
        "description": "Extract luma plane out of an image This method is in the typeclass to help performant implementation jpegToGrayScale FilePath FilePath IO jpegToGrayScale source dest",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "extractLumaPlane",
        "normalized": "Image a-\u003eImage(PixelBaseComponent a)",
        "package": "JuicyPixels",
        "partial": "Luma Plane",
        "signature": "Image a-\u003eImage(PixelBaseComponent a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:freezeImage",
      "description": {
        "fct-descr": "\u003cp\u003e`O(n)` Yield an immutable copy of an image by making a copy of it\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "MutableImage (PrimState m) px -\u003e m (Image px)",
        "fct-source": "src/Codec-Picture-Types.html#freezeImage",
        "fct-type": "function",
        "title": "freezeImage"
      },
      "index": {
        "description": "Yield an immutable copy of an image by making copy of it",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "freezeImage",
        "normalized": "MutableImage(PrimState a)b-\u003ea(Image b)",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "MutableImage(PrimState m)px-\u003em(Image px)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:gammaCorrection",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a gamma correction for an image with HDR pixels.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelF-\u003e Image PixelRGBF-\u003e Image PixelRGBF",
        "fct-type": "function",
        "title": "gammaCorrection"
      },
      "index": {
        "description": "Perform gamma correction for an image with HDR pixels",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "gammaCorrection",
        "normalized": "PixelF-\u003eImage PixelRGBF-\u003eImage PixelRGBF",
        "package": "JuicyPixels",
        "partial": "Correction",
        "signature": "PixelF-\u003eImage PixelRGBF-\u003eImage PixelRGBF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:generateFoldImage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an image given a function to generate pixels.\n The function will receive value from 0 to width-1 for the x parameter\n and 0 to height-1 for the y parameter. The coordinate 0,0 is the upper\n left corner of the image, and (width-1, height-1) the lower right corner.\n\u003c/p\u003e\u003cp\u003ethe acc parameter is a user defined one.\n\u003c/p\u003e\u003cp\u003eThe function is called for each pixel in the line from left to right (0 to width - 1)\n and for each line (0 to height - 1).\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "(acc -\u003e Int -\u003e Int -\u003e (acc, a))-\u003e acc-\u003e Int-\u003e Int-\u003e (acc, Image a)",
        "fct-type": "function",
        "title": "generateFoldImage"
      },
      "index": {
        "description": "Create an image given function to generate pixels The function will receive value from to width-1 for the parameter and to height-1 for the parameter The coordinate is the upper left corner of the image and width-1 height-1 the lower right corner the acc parameter is user defined one The function is called for each pixel in the line from left to right to width and for each line to height",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "generateFoldImage",
        "normalized": "(a-\u003eInt-\u003eInt-\u003e(a,b))-\u003ea-\u003eInt-\u003eInt-\u003e(a,Image b)",
        "package": "JuicyPixels",
        "partial": "Fold Image",
        "signature": "(acc-\u003eInt-\u003eInt-\u003e(acc,a))-\u003eacc-\u003eInt-\u003eInt-\u003e(acc,Image a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:generateImage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an image given a function to generate pixels.\n The function will receive value from 0 to width-1 for the x parameter\n and 0 to height-1 for the y parameter. The coordinate 0,0 is the upper\n left corner of the image, and (width-1, height-1) the lower right corner.\n\u003c/p\u003e\u003cp\u003efor example, to create a small gradient image :\n\u003c/p\u003e\u003cpre\u003e imageCreator :: String -\u003e Image PixelRGB8\n imageCreator path = writePng path $ generateImage pixelRenderer 250 300\n    where pixelRenderer x y = PixelRGB8 x y 128\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "(Int -\u003e Int -\u003e a)-\u003e Int-\u003e Int-\u003e Image a",
        "fct-type": "function",
        "title": "generateImage"
      },
      "index": {
        "description": "Create an image given function to generate pixels The function will receive value from to width-1 for the parameter and to height-1 for the parameter The coordinate is the upper left corner of the image and width-1 height-1 the lower right corner for example to create small gradient image imageCreator String Image PixelRGB8 imageCreator path writePng path generateImage pixelRenderer where pixelRenderer PixelRGB8",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "generateImage",
        "normalized": "(Int-\u003eInt-\u003ea)-\u003eInt-\u003eInt-\u003eImage a",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "(Int-\u003eInt-\u003ea)-\u003eInt-\u003eInt-\u003eImage a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:getTransparency",
      "description": {
        "fct-descr": "\u003cp\u003eaccess the transparency (alpha layer) of a given\n transparent pixel type\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "a -\u003e PixelBaseComponent a",
        "fct-source": "src/Codec-Picture-Types.html#getTransparency",
        "fct-type": "method",
        "title": "getTransparency"
      },
      "index": {
        "description": "access the transparency alpha layer of given transparent pixel type",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "getTransparency",
        "normalized": "a-\u003ePixelBaseComponent a",
        "package": "JuicyPixels",
        "partial": "Transparency",
        "signature": "a-\u003ePixelBaseComponent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:imageData",
      "description": {
        "fct-descr": "\u003cp\u003eThe real image, to extract pixels at some position\n you should use the helpers functions.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Vector (PixelBaseComponent a)",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "function",
        "title": "imageData"
      },
      "index": {
        "description": "The real image to extract pixels at some position you should use the helpers functions",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "imageData",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:imageHeight",
      "description": {
        "fct-descr": "\u003cp\u003eHeight of the image in pixels.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "function",
        "title": "imageHeight"
      },
      "index": {
        "description": "Height of the image in pixels",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "imageHeight",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:imageWidth",
      "description": {
        "fct-descr": "\u003cp\u003eWidth of the image in pixels\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "function",
        "title": "imageWidth"
      },
      "index": {
        "description": "Width of the image in pixels",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "imageWidth",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mixWith",
      "description": {
        "fct-descr": "\u003cp\u003eCall the function for every component of the pixels.\n For example for RGB pixels mixWith is declared like this :\n\u003c/p\u003e\u003cpre\u003e mixWith f (PixelRGB8 ra ga ba) (PixelRGB8 rb gb bb) =\n    PixelRGB8 (f 0 ra rb) (f 1 ga gb) (f 2 ba bb)\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "(Int -\u003e PixelBaseComponent a -\u003e PixelBaseComponent a -\u003e PixelBaseComponent a) -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Codec-Picture-Types.html#mixWith",
        "fct-type": "method",
        "title": "mixWith"
      },
      "index": {
        "description": "Call the function for every component of the pixels For example for RGB pixels mixWith is declared like this mixWith PixelRGB8 ra ga ba PixelRGB8 rb gb bb PixelRGB8 ra rb ga gb ba bb",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "mixWith",
        "normalized": "(Int-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea-\u003ea",
        "package": "JuicyPixels",
        "partial": "With",
        "signature": "(Int-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mutableImageData",
      "description": {
        "fct-descr": "\u003cp\u003eThe real image, to extract pixels at some position\n you should use the helpers functions.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "STVector s (PixelBaseComponent a)",
        "fct-source": "src/Codec-Picture-Types.html#MutableImage",
        "fct-type": "function",
        "title": "mutableImageData"
      },
      "index": {
        "description": "The real image to extract pixels at some position you should use the helpers functions",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "mutableImageData",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mutableImageHeight",
      "description": {
        "fct-descr": "\u003cp\u003eHeight of the image in pixels.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Picture-Types.html#MutableImage",
        "fct-type": "function",
        "title": "mutableImageHeight"
      },
      "index": {
        "description": "Height of the image in pixels",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "mutableImageHeight",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mutableImageWidth",
      "description": {
        "fct-descr": "\u003cp\u003eWidth of the image in pixels\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Picture-Types.html#MutableImage",
        "fct-type": "function",
        "title": "mutableImageWidth"
      },
      "index": {
        "description": "Width of the image in pixels",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "mutableImageWidth",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:mutablePixelBaseIndex",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate theindex for the begining of the pixel at position x y\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "MutableImage s a -\u003e Int -\u003e Int -\u003e Int",
        "fct-source": "src/Codec-Picture-Types.html#mutablePixelBaseIndex",
        "fct-type": "method",
        "title": "mutablePixelBaseIndex"
      },
      "index": {
        "description": "Calculate theindex for the begining of the pixel at position",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "mutablePixelBaseIndex",
        "normalized": "MutableImage a b-\u003eInt-\u003eInt-\u003eInt",
        "package": "JuicyPixels",
        "partial": "Pixel Base Index",
        "signature": "MutableImage s a-\u003eInt-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelAt",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a pixel at a given position, (x, y), the origin\n is assumed to be at the corner top left, positive y to the\n bottom of the image\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e Int -\u003e Int -\u003e a",
        "fct-source": "src/Codec-Picture-Types.html#pixelAt",
        "fct-type": "method",
        "title": "pixelAt"
      },
      "index": {
        "description": "Extract pixel at given position the origin is assumed to be at the corner top left positive to the bottom of the image",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "pixelAt",
        "normalized": "Image a-\u003eInt-\u003eInt-\u003ea",
        "package": "JuicyPixels",
        "partial": "At",
        "signature": "Image a-\u003eInt-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelBaseIndex",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the index for the begining of the pixel\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e Int -\u003e Int -\u003e Int",
        "fct-source": "src/Codec-Picture-Types.html#pixelBaseIndex",
        "fct-type": "method",
        "title": "pixelBaseIndex"
      },
      "index": {
        "description": "Calculate the index for the begining of the pixel",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "pixelBaseIndex",
        "normalized": "Image a-\u003eInt-\u003eInt-\u003eInt",
        "package": "JuicyPixels",
        "partial": "Base Index",
        "signature": "Image a-\u003eInt-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelFold",
      "description": {
        "fct-descr": "\u003cp\u003eFold over the pixel of an image with a raster scan order :\n from top to bottom, left to right\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "(acc -\u003e Int -\u003e Int -\u003e pixel -\u003e acc) -\u003e acc -\u003e Image pixel -\u003e acc",
        "fct-source": "src/Codec-Picture-Types.html#pixelFold",
        "fct-type": "function",
        "title": "pixelFold"
      },
      "index": {
        "description": "Fold over the pixel of an image with raster scan order from top to bottom left to right",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "pixelFold",
        "normalized": "(a-\u003eInt-\u003eInt-\u003eb-\u003ea)-\u003ea-\u003eImage b-\u003ea",
        "package": "JuicyPixels",
        "partial": "Fold",
        "signature": "(acc-\u003eInt-\u003eInt-\u003epixel-\u003eacc)-\u003eacc-\u003eImage pixel-\u003eacc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e equivalent for an image, working at the pixel level.\n Little example : a brightness function for an rgb image\n\u003c/p\u003e\u003cpre\u003e brightnessRGB8 :: Int -\u003e Image PixelRGB8 -\u003e Image PixelRGB8\n brightnessRGB8 add = pixelMap brightFunction\n      where up v = fromIntegral (fromIntegral v + add)\n            brightFunction (PixelRGB8 r g b) =\n                    PixelRGB8 (up r) (up g) (up b)\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "(a -\u003e b) -\u003e Image a -\u003e Image b",
        "fct-source": "src/Codec-Picture-Types.html#pixelMap",
        "fct-type": "function",
        "title": "pixelMap"
      },
      "index": {
        "description": "map equivalent for an image working at the pixel level Little example brightness function for an rgb image brightnessRGB8 Int Image PixelRGB8 Image PixelRGB8 brightnessRGB8 add pixelMap brightFunction where up fromIntegral fromIntegral add brightFunction PixelRGB8 PixelRGB8 up up up",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "pixelMap",
        "normalized": "(a-\u003eb)-\u003eImage a-\u003eImage b",
        "package": "JuicyPixels",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003eImage a-\u003eImage b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:pixelMapXY",
      "description": {
        "fct-descr": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003epixelMap\u003c/a\u003e\u003c/code\u003e only the function takes the pixel coordinates as\n   additional parameters.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "(Int -\u003e Int -\u003e a -\u003e b) -\u003e Image a -\u003e Image b",
        "fct-source": "src/Codec-Picture-Types.html#pixelMapXY",
        "fct-type": "function",
        "title": "pixelMapXY"
      },
      "index": {
        "description": "Just like pixelMap only the function takes the pixel coordinates as additional parameters",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "pixelMapXY",
        "normalized": "(Int-\u003eInt-\u003ea-\u003eb)-\u003eImage a-\u003eImage b",
        "package": "JuicyPixels",
        "partial": "Map XY",
        "signature": "(Int-\u003eInt-\u003ea-\u003eb)-\u003eImage a-\u003eImage b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:promoteImage",
      "description": {
        "fct-descr": "\u003cp\u003eChange the underlying pixel type of an image by performing a full copy\n of it.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e Image b",
        "fct-source": "src/Codec-Picture-Types.html#promoteImage",
        "fct-type": "method",
        "title": "promoteImage"
      },
      "index": {
        "description": "Change the underlying pixel type of an image by performing full copy of it",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "promoteImage",
        "normalized": "Image a-\u003eImage b",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "Image a-\u003eImage b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:promotePixel",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a pixel type to another pixel type. This\n operation should never loss any data.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Codec-Picture-Types.html#promotePixel",
        "fct-type": "method",
        "title": "promotePixel"
      },
      "index": {
        "description": "Convert pixel type to another pixel type This operation should never loss any data",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "promotePixel",
        "normalized": "a-\u003eb",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:readPixel",
      "description": {
        "fct-descr": "\u003cp\u003eSame as pixelAt but for mutable images.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "MutableImage (PrimState m) a -\u003e Int -\u003e Int -\u003e m a",
        "fct-source": "src/Codec-Picture-Types.html#readPixel",
        "fct-type": "method",
        "title": "readPixel"
      },
      "index": {
        "description": "Same as pixelAt but for mutable images",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "readPixel",
        "normalized": "MutableImage(PrimState a)b-\u003eInt-\u003eInt-\u003ea b",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": "MutableImage(PrimState m)a-\u003eInt-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:thawImage",
      "description": {
        "fct-descr": "\u003cp\u003e`O(n)` Yield a mutable copy of an image by making a copy of it.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image px -\u003e m (MutableImage (PrimState m) px)",
        "fct-source": "src/Codec-Picture-Types.html#thawImage",
        "fct-type": "function",
        "title": "thawImage"
      },
      "index": {
        "description": "Yield mutable copy of an image by making copy of it",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "thawImage",
        "normalized": "Image a-\u003eb(MutableImage(PrimState b)a)",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "Image px-\u003em(MutableImage(PrimState m)px)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:toneMapping",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a tone mapping operation on an High dynamic range image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelF-\u003e Image PixelRGBF-\u003e Image PixelRGBF",
        "fct-type": "function",
        "title": "toneMapping"
      },
      "index": {
        "description": "Perform tone mapping operation on an High dynamic range image",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "toneMapping",
        "normalized": "PixelF-\u003eImage PixelRGBF-\u003eImage PixelRGBF",
        "package": "JuicyPixels",
        "partial": "Mapping",
        "signature": "PixelF-\u003eImage PixelRGBF-\u003eImage PixelRGBF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeExtractComponent",
      "description": {
        "fct-descr": "\u003cp\u003eExtract an image plane of an image, returning an image which\n can be represented by a gray scale image.\n If you ask a component out of bound, the \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e function will\n be called\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Int-\u003e Image a-\u003e Image (PixelBaseComponent a)",
        "fct-type": "function",
        "title": "unsafeExtractComponent"
      },
      "index": {
        "description": "Extract an image plane of an image returning an image which can be represented by gray scale image If you ask component out of bound the error function will be called",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "unsafeExtractComponent",
        "normalized": "Int-\u003eImage a-\u003eImage(PixelBaseComponent a)",
        "package": "JuicyPixels",
        "partial": "Extract Component",
        "signature": "Int-\u003eImage a-\u003eImage(PixelBaseComponent a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeFreezeImage",
      "description": {
        "fct-descr": "\u003cp\u003e`O(1)` Unsafe convert a mutable image to an immutable one without copying.\n The mutable image may not be used after this operation.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "MutableImage (PrimState m) a -\u003e m (Image a)",
        "fct-source": "src/Codec-Picture-Types.html#unsafeFreezeImage",
        "fct-type": "function",
        "title": "unsafeFreezeImage"
      },
      "index": {
        "description": "Unsafe convert mutable image to an immutable one without copying The mutable image may not be used after this operation",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "unsafeFreezeImage",
        "normalized": "MutableImage(PrimState a)b-\u003ea(Image b)",
        "package": "JuicyPixels",
        "partial": "Freeze Image",
        "signature": "MutableImage(PrimState m)a-\u003em(Image a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafePixelAt",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe version of pixelAt, read a pixel at the given\n index without bound checking (if possible).\n The index is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Vector (PixelBaseComponent a) -\u003e Int -\u003e a",
        "fct-source": "src/Codec-Picture-Types.html#unsafePixelAt",
        "fct-type": "method",
        "title": "unsafePixelAt"
      },
      "index": {
        "description": "Unsafe version of pixelAt read pixel at the given index without bound checking if possible The index is expressed in number PixelBaseComponent",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "unsafePixelAt",
        "normalized": "Vector(PixelBaseComponent a)-\u003eInt-\u003ea",
        "package": "JuicyPixels",
        "partial": "Pixel At",
        "signature": "Vector(PixelBaseComponent a)-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeReadPixel",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe version of readPixel,  read a pixel at the given\n position without bound checking (if possible). The index\n is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "STVector (PrimState m) (PixelBaseComponent a) -\u003e Int -\u003e m a",
        "fct-source": "src/Codec-Picture-Types.html#unsafeReadPixel",
        "fct-type": "method",
        "title": "unsafeReadPixel"
      },
      "index": {
        "description": "Unsafe version of readPixel read pixel at the given position without bound checking if possible The index is expressed in number PixelBaseComponent",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "unsafeReadPixel",
        "normalized": "STVector(PrimState a)(PixelBaseComponent b)-\u003eInt-\u003ea b",
        "package": "JuicyPixels",
        "partial": "Read Pixel",
        "signature": "STVector(PrimState m)(PixelBaseComponent a)-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeThawImage",
      "description": {
        "fct-descr": "\u003cp\u003e`O(1)` Unsafe convert an imutable image to an mutable one without copying.\n The source image shouldn't be used after this operation.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image px -\u003e m (MutableImage (PrimState m) px)",
        "fct-source": "src/Codec-Picture-Types.html#unsafeThawImage",
        "fct-type": "function",
        "title": "unsafeThawImage"
      },
      "index": {
        "description": "Unsafe convert an imutable image to an mutable one without copying The source image shouldn be used after this operation",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "unsafeThawImage",
        "normalized": "Image a-\u003eb(MutableImage(PrimState b)a)",
        "package": "JuicyPixels",
        "partial": "Thaw Image",
        "signature": "Image px-\u003em(MutableImage(PrimState m)px)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:unsafeWritePixel",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe version of writePixel, write a pixel at the\n given position without bound checking. This can be _really_ unsafe.\n The index is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "STVector (PrimState m) (PixelBaseComponent a) -\u003e Int -\u003e a -\u003e m ()",
        "fct-source": "src/Codec-Picture-Types.html#unsafeWritePixel",
        "fct-type": "method",
        "title": "unsafeWritePixel"
      },
      "index": {
        "description": "Unsafe version of writePixel write pixel at the given position without bound checking This can be really unsafe The index is expressed in number PixelBaseComponent",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "unsafeWritePixel",
        "normalized": "STVector(PrimState a)(PixelBaseComponent b)-\u003eInt-\u003eb-\u003ea()",
        "package": "JuicyPixels",
        "partial": "Write Pixel",
        "signature": "STVector(PrimState m)(PixelBaseComponent a)-\u003eInt-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:withImage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an image using a monadic initializer function.\n The function will receive value from 0 to width-1 for the x parameter\n and 0 to height-1 for the y parameter. The coordinate 0,0 is the upper\n left corner of the image, and (width-1, height-1) the lower right corner.\n\u003c/p\u003e\u003cp\u003eThe function is called for each pixel in the line from left to right (0 to width - 1)\n and for each line (0 to height - 1).\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "Int-\u003e Int-\u003e (Int -\u003e Int -\u003e m pixel)-\u003e m (Image pixel)",
        "fct-type": "function",
        "title": "withImage"
      },
      "index": {
        "description": "Create an image using monadic initializer function The function will receive value from to width-1 for the parameter and to height-1 for the parameter The coordinate is the upper left corner of the image and width-1 height-1 the lower right corner The function is called for each pixel in the line from left to right to width and for each line to height",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "withImage",
        "normalized": "Int-\u003eInt-\u003e(Int-\u003eInt-\u003ea b)-\u003ea(Image b)",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "Int-\u003eInt-\u003e(Int-\u003eInt-\u003em pixel)-\u003em(Image pixel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:writePixel",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a pixel in a mutable image at position x y\n\u003c/p\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "MutableImage (PrimState m) a -\u003e Int -\u003e Int -\u003e a -\u003e m ()",
        "fct-source": "src/Codec-Picture-Types.html#writePixel",
        "fct-type": "method",
        "title": "writePixel"
      },
      "index": {
        "description": "Write pixel in mutable image at position",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "writePixel",
        "normalized": "MutableImage(PrimState a)b-\u003eInt-\u003eInt-\u003eb-\u003ea()",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": "MutableImage(PrimState m)a-\u003eInt-\u003eInt-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture-Types.html#v:zipPixelComponent3",
      "description": {
        "fct-descr": "\u003cp\u003eCombine, pixel by pixel and component by component\n the values of 3 different images. Usage example:\n\u003c/p\u003e\u003cpre\u003e averageBrightNess c1 c2 c3 = clamp $ toInt c1 + toInt c2 + toInt c3\n   where clamp = fromIntegral . min 0 . max 255\n         toInt :: a -\u003e Int\n         toInt = fromIntegral\n ziPixelComponent3 averageBrightNess img1 img2 img3\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture.Types",
        "fct-package": "JuicyPixels",
        "fct-signature": "(PixelBaseComponent px -\u003e PixelBaseComponent px -\u003e PixelBaseComponent px -\u003e PixelBaseComponent px) -\u003e Image px -\u003e Image px -\u003e Image px -\u003e Image px",
        "fct-source": "src/Codec-Picture-Types.html#zipPixelComponent3",
        "fct-type": "function",
        "title": "zipPixelComponent3"
      },
      "index": {
        "description": "Combine pixel by pixel and component by component the values of different images Usage example averageBrightNess c1 c2 c3 clamp toInt c1 toInt c2 toInt c3 where clamp fromIntegral min max toInt Int toInt fromIntegral ziPixelComponent3 averageBrightNess img1 img2 img3",
        "hierarchy": "Codec Picture Types",
        "module": "Codec.Picture.Types",
        "name": "zipPixelComponent3",
        "normalized": "(PixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003eImage a-\u003eImage a-\u003eImage a-\u003eImage a",
        "package": "JuicyPixels",
        "partial": "Pixel Component",
        "signature": "(PixelBaseComponent px-\u003ePixelBaseComponent px-\u003ePixelBaseComponent px-\u003ePixelBaseComponent px)-\u003eImage px-\u003eImage px-\u003eImage px-\u003eImage px"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain module for image import/export into various image formats.\n\u003c/p\u003e\u003cp\u003eTo use the library without thinking about it, look after \u003ccode\u003e\u003ca\u003edecodeImage\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ereadImage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGenerally, the read* functions read the images from a file and try to decode\n it, and the decode* functions try to decode a bytestring.\n\u003c/p\u003e\u003cp\u003eFor an easy image writing use the \u003ccode\u003e\u003ca\u003esaveBmpImage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esaveJpgImage\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003esavePngImage\u003c/a\u003e\u003c/code\u003e\n functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "module",
        "fct-source": "src/Codec-Picture.html",
        "fct-type": "module",
        "title": "Picture"
      },
      "index": {
        "description": "Main module for image import export into various image formats To use the library without thinking about it look after decodeImage and readImage Generally the read functions read the images from file and try to decode it and the decode functions try to decode bytestring For an easy image writing use the saveBmpImage saveJpgImage savePngImage functions",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "Picture",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Picture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:BmpEncodable",
      "description": {
        "fct-descr": "\u003cp\u003eAll the instance of this class can be written as a bitmap file\n using this library.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Bitmap.html#BmpEncodable",
        "fct-type": "class",
        "title": "BmpEncodable"
      },
      "index": {
        "description": "All the instance of this class can be written as bitmap file using this library",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "BmpEncodable",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Bmp Encodable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:DynamicImage",
      "description": {
        "fct-descr": "\u003cp\u003eType allowing the loading of an image with different pixel\n structures\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "data",
        "title": "DynamicImage"
      },
      "index": {
        "description": "Type allowing the loading of an image with different pixel structures",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "DynamicImage",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Dynamic Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:GifDelay",
      "description": {
        "fct-descr": "\u003cp\u003eDelay to wait before showing the next Gif image.\n The delay is expressed in 100th of seconds.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Gif.html#GifDelay",
        "fct-type": "type",
        "title": "GifDelay"
      },
      "index": {
        "description": "Delay to wait before showing the next Gif image The delay is expressed in th of seconds",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "GifDelay",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Gif Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:GifLooping",
      "description": {
        "fct-descr": "\u003cp\u003eHelp to control the behaviour of GIF animation looping.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Gif.html#GifLooping",
        "fct-type": "data",
        "title": "GifLooping"
      },
      "index": {
        "description": "Help to control the behaviour of GIF animation looping",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "GifLooping",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Gif Looping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Image",
      "description": {
        "fct-descr": "\u003cp\u003eImage or pixel buffer, the coordinates are assumed to start\n from the upper-left corner of the image, with the horizontal\n position first, then the vertical one.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "data",
        "title": "Image"
      },
      "index": {
        "description": "Image or pixel buffer the coordinates are assumed to start from the upper-left corner of the image with the horizontal position first then the vertical one",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "Image",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Palette",
      "description": {
        "fct-descr": "\u003cp\u003eType for the palette used in Gif & PNG files.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Types.html#Palette",
        "fct-type": "type",
        "title": "Palette"
      },
      "index": {
        "description": "Type for the palette used in Gif PNG files",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "Palette",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PaletteCreationMethod",
      "description": {
        "fct-descr": "\u003cp\u003eDefine which palette creation method is used.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
        "fct-type": "data",
        "title": "PaletteCreationMethod"
      },
      "index": {
        "description": "Define which palette creation method is used",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PaletteCreationMethod",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette Creation Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PaletteOptions",
      "description": {
        "fct-descr": "\u003cp\u003eTo specify how the palette will be created.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "data",
        "title": "PaletteOptions"
      },
      "index": {
        "description": "To specify how the palette will be created",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PaletteOptions",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Pixel",
      "description": {
        "fct-descr": "\u003cp\u003eDefinition of pixels used in images. Each pixel has a color space, and a representative\n component (Word8 or Float).\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Types.html#Pixel",
        "fct-type": "class",
        "title": "Pixel"
      },
      "index": {
        "description": "Definition of pixels used in images Each pixel has color space and representative component Word8 or Float",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "Pixel",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Pixel16",
      "description": {
        "fct-descr": "\u003cp\u003eSimple alias for greyscale value in 16 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Types.html#Pixel16",
        "fct-type": "type",
        "title": "Pixel16"
      },
      "index": {
        "description": "Simple alias for greyscale value in bits",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "Pixel16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:Pixel8",
      "description": {
        "fct-descr": "\u003cp\u003eSimple alias for greyscale value in 8 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Types.html#Pixel8",
        "fct-type": "type",
        "title": "Pixel8"
      },
      "index": {
        "description": "Simple alias for greyscale value in bits",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "Pixel8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelCMYK16",
      "description": {
        "fct-descr": "\u003cp\u003ePixel storing data in the CMYK colorspace. value\n are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cyan\n\u003c/li\u003e\u003cli\u003e Magenta\n\u003c/li\u003e\u003cli\u003e Yellow\n\u003c/li\u003e\u003cli\u003e Black\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelCMYK16",
        "fct-type": "data",
        "title": "PixelCMYK16"
      },
      "index": {
        "description": "Pixel storing data in the CMYK colorspace value are stored in the following order Cyan Magenta Yellow Black",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelCMYK16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelCMYK8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel storing data in the CMYK colorspace. value\n are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cyan\n\u003c/li\u003e\u003cli\u003e Magenta\n\u003c/li\u003e\u003cli\u003e Yellow\n\u003c/li\u003e\u003cli\u003e Black\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelCMYK8",
        "fct-type": "data",
        "title": "PixelCMYK8"
      },
      "index": {
        "description": "Pixel storing data in the CMYK colorspace value are stored in the following order Cyan Magenta Yellow Black",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelCMYK8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelF",
      "description": {
        "fct-descr": "\u003cp\u003eFloating greyscale value, the 0 to 255 8 bit range maps\n to 0 to 1 in this floating version\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "type",
        "fct-source": "src/Codec-Picture-Types.html#PixelF",
        "fct-type": "type",
        "title": "PixelF"
      },
      "index": {
        "description": "Floating greyscale value the to bit range maps to to in this floating version",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGB16",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing pixels on 16 bits\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGB16",
        "fct-type": "data",
        "title": "PixelRGB16"
      },
      "index": {
        "description": "Pixel type storing pixels on bits Value are stored in the following order Red Green Blue",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGB16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGB8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing classic pixel on 8 bits\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGB8",
        "fct-type": "data",
        "title": "PixelRGB8"
      },
      "index": {
        "description": "Pixel type storing classic pixel on bits Value are stored in the following order Red Green Blue",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGB8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGBA16",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing a RGB information with an alpha\n channel on 16 bits.\n Values are stored in the following order\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBA16",
        "fct-type": "data",
        "title": "PixelRGBA16"
      },
      "index": {
        "description": "Pixel type storing RGB information with an alpha channel on bits Values are stored in the following order Red Green Blue Alpha",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGBA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGBA8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing a classic pixel, with an alpha component.\n Values are stored in the following order\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBA8",
        "fct-type": "data",
        "title": "PixelRGBA8"
      },
      "index": {
        "description": "Pixel type storing classic pixel with an alpha component Values are stored in the following order Red Green Blue Alpha",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGBA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelRGBF",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing HDR pixel on 32 bits float\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Red\n\u003c/li\u003e\u003cli\u003e Green\n\u003c/li\u003e\u003cli\u003e Blue\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBF",
        "fct-type": "data",
        "title": "PixelRGBF"
      },
      "index": {
        "description": "Pixel type storing HDR pixel on bits float Value are stored in the following order Red Green Blue",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGBF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelYA16",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing Luminance (Y) and alpha information\n on 16 bits.\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Luminance\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelYA16",
        "fct-type": "data",
        "title": "PixelYA16"
      },
      "index": {
        "description": "Pixel type storing Luminance and alpha information on bits Value are stored in the following order Luminance Alpha",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelYA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelYA8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel type storing Luminance (Y) and alpha information\n on 8 bits.\n Value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Luminance\n\u003c/li\u003e\u003cli\u003e Alpha\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelYA8",
        "fct-type": "data",
        "title": "PixelYA8"
      },
      "index": {
        "description": "Pixel type storing Luminance and alpha information on bits Value are stored in the following order Luminance Alpha",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelYA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PixelYCbCr8",
      "description": {
        "fct-descr": "\u003cp\u003ePixel storing data in the YCbCr colorspace,\n value are stored in the following order :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Y (luminance)\n\u003c/li\u003e\u003cli\u003e Cr\n\u003c/li\u003e\u003cli\u003e Cb\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "data",
        "fct-source": "src/Codec-Picture-Types.html#PixelYCbCr8",
        "fct-type": "data",
        "title": "PixelYCbCr8"
      },
      "index": {
        "description": "Pixel storing data in the YCbCr colorspace value are stored in the following order luminance Cr Cb",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelYCbCr8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YCb Cr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:PngSavable",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an image into a png if possible.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Png-Export.html#PngSavable",
        "fct-type": "class",
        "title": "PngSavable"
      },
      "index": {
        "description": "Encode an image into png if possible",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PngSavable",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Png Savable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#t:TiffSaveable",
      "description": {
        "fct-descr": "\u003cp\u003eClass defining which pixel types can be serialized in a\n Tiff file.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "class",
        "fct-source": "src/Codec-Picture-Tiff.html#TiffSaveable",
        "fct-type": "class",
        "title": "TiffSaveable"
      },
      "index": {
        "description": "Class defining which pixel types can be serialized in Tiff file",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "TiffSaveable",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Tiff Saveable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:Image",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "function",
        "title": "Image"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "Image",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageCMYK16",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in the colorspace CMYK and 16 bots precision\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageCMYK16 (Image PixelCMYK16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageCMYK16"
      },
      "index": {
        "description": "An image in the colorspace CMYK and bots precision",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageCMYK16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageCMYK8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in the colorspace CMYK\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageCMYK8 (Image PixelCMYK8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageCMYK8"
      },
      "index": {
        "description": "An image in the colorspace CMYK",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageCMYK8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGB16",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in true color with 16bit depth.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGB16 (Image PixelRGB16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGB16"
      },
      "index": {
        "description": "An image in true color with bit depth",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageRGB16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGB8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in true color.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGB8 (Image PixelRGB8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGB8"
      },
      "index": {
        "description": "An image in true color",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageRGB8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGBA16",
      "description": {
        "fct-descr": "\u003cp\u003eA true color image with alpha on 16 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGBA16 (Image PixelRGBA16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGBA16"
      },
      "index": {
        "description": "true color image with alpha on bits",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageRGBA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGBA8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in true color and an alpha channel.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGBA8 (Image PixelRGBA8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGBA8"
      },
      "index": {
        "description": "An image in true color and an alpha channel",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageRGBA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageRGBF",
      "description": {
        "fct-descr": "\u003cp\u003eAn image with HDR pixels\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageRGBF (Image PixelRGBF)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageRGBF"
      },
      "index": {
        "description": "An image with HDR pixels",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageRGBF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image RGBF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageY16",
      "description": {
        "fct-descr": "\u003cp\u003eA greyscale image with 16bit components\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageY16 (Image Pixel16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageY16"
      },
      "index": {
        "description": "greyscale image with bit components",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageY16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageY8",
      "description": {
        "fct-descr": "\u003cp\u003eA greyscale image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageY8 (Image Pixel8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageY8"
      },
      "index": {
        "description": "greyscale image",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageY8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageYA16",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in greyscale with alpha channel on 16 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageYA16 (Image PixelYA16)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageYA16"
      },
      "index": {
        "description": "An image in greyscale with alpha channel on bits",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageYA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageYA8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in greyscale with an alpha channel.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageYA8 (Image PixelYA8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageYA8"
      },
      "index": {
        "description": "An image in greyscale with an alpha channel",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageYA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageYCbCr8",
      "description": {
        "fct-descr": "\u003cp\u003eAn image in the colorspace used by Jpeg images.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageYCbCr8 (Image PixelYCbCr8)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageYCbCr8"
      },
      "index": {
        "description": "An image in the colorspace used by Jpeg images",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageYCbCr8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image YCb Cr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:ImageYF",
      "description": {
        "fct-descr": "\u003cp\u003eA greyscale HDR image\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ImageYF (Image PixelF)",
        "fct-source": "src/Codec-Picture-Types.html#DynamicImage",
        "fct-type": "function",
        "title": "ImageYF"
      },
      "index": {
        "description": "greyscale HDR image",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "ImageYF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image YF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:LoopingForever",
      "description": {
        "fct-descr": "\u003cp\u003eThe animation will restart once the end is reached\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "LoopingForever",
        "fct-source": "src/Codec-Picture-Gif.html#GifLooping",
        "fct-type": "function",
        "title": "LoopingForever"
      },
      "index": {
        "description": "The animation will restart once the end is reached",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "LoopingForever",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Looping Forever",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:LoopingNever",
      "description": {
        "fct-descr": "\u003cp\u003eThe animation will stop once the end is reached\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "LoopingNever",
        "fct-source": "src/Codec-Picture-Gif.html#GifLooping",
        "fct-type": "function",
        "title": "LoopingNever"
      },
      "index": {
        "description": "The animation will stop once the end is reached",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "LoopingNever",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Looping Never",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:LoopingRepeat",
      "description": {
        "fct-descr": "\u003cp\u003eThe animation will repeat n times before stoping\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "LoopingRepeat Word16",
        "fct-source": "src/Codec-Picture-Gif.html#GifLooping",
        "fct-type": "function",
        "title": "LoopingRepeat"
      },
      "index": {
        "description": "The animation will repeat times before stoping",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "LoopingRepeat",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Looping Repeat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:MedianMeanCut",
      "description": {
        "fct-descr": "\u003cp\u003eMedianMeanCut method, provide the best results (visualy)\n at the cost of increased calculations.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "MedianMeanCut",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
        "fct-type": "function",
        "title": "MedianMeanCut"
      },
      "index": {
        "description": "MedianMeanCut method provide the best results visualy at the cost of increased calculations",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "MedianMeanCut",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Median Mean Cut",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PaletteOptions",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PaletteOptions",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "function",
        "title": "PaletteOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PaletteOptions",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Palette Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelCMYK16",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelCMYK16 !Pixel16 !Pixel16 !Pixel16 !Pixel16",
        "fct-source": "src/Codec-Picture-Types.html#PixelCMYK16",
        "fct-type": "function",
        "title": "PixelCMYK16"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelCMYK16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelCMYK8",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelCMYK8 !Pixel8 !Pixel8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelCMYK8",
        "fct-type": "function",
        "title": "PixelCMYK8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelCMYK8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel CMYK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGB16",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGB16 !Pixel16 !Pixel16 !Pixel16",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGB16",
        "fct-type": "function",
        "title": "PixelRGB16"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGB16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGB8",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGB8 !Pixel8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGB8",
        "fct-type": "function",
        "title": "PixelRGB8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGB8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGBA16",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGBA16 !Pixel16 !Pixel16 !Pixel16 !Pixel16",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBA16",
        "fct-type": "function",
        "title": "PixelRGBA16"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGBA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGBA8",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGBA8 !Pixel8 !Pixel8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBA8",
        "fct-type": "function",
        "title": "PixelRGBA8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGBA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelRGBF",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelRGBF !PixelF !PixelF !PixelF",
        "fct-source": "src/Codec-Picture-Types.html#PixelRGBF",
        "fct-type": "function",
        "title": "PixelRGBF"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelRGBF",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel RGBF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelYA16",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelYA16 !Pixel16 !Pixel16",
        "fct-source": "src/Codec-Picture-Types.html#PixelYA16",
        "fct-type": "function",
        "title": "PixelYA16"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelYA16",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelYA8",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelYA8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelYA8",
        "fct-type": "function",
        "title": "PixelYA8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelYA8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:PixelYCbCr8",
      "description": {
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PixelYCbCr8 !Pixel8 !Pixel8 !Pixel8",
        "fct-source": "src/Codec-Picture-Types.html#PixelYCbCr8",
        "fct-type": "function",
        "title": "PixelYCbCr8"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "PixelYCbCr8",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Pixel YCb Cr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:Uniform",
      "description": {
        "fct-descr": "\u003cp\u003eVery fast algorithm (one pass), doesn't provide good\n looking results.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Uniform",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteCreationMethod",
        "fct-type": "function",
        "title": "Uniform"
      },
      "index": {
        "description": "Very fast algorithm one pass doesn provide good looking results",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "Uniform",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Uniform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:colorMap",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all color component of a pixel.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "(PixelBaseComponent a -\u003e PixelBaseComponent a) -\u003e a -\u003e a",
        "fct-source": "src/Codec-Picture-Types.html#colorMap",
        "fct-type": "method",
        "title": "colorMap"
      },
      "index": {
        "description": "Apply function to all color component of pixel",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "colorMap",
        "normalized": "(PixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea",
        "package": "JuicyPixels",
        "partial": "Map",
        "signature": "(PixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:componentCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of component of the pixel\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Codec-Picture-Types.html#componentCount",
        "fct-type": "method",
        "title": "componentCount"
      },
      "index": {
        "description": "Return the number of component of the pixel",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "componentCount",
        "normalized": "a-\u003eInt",
        "package": "JuicyPixels",
        "partial": "Count",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eTry to decode a bitmap image.\n Right now this function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Bitmap.html#decodeBitmap",
        "fct-type": "function",
        "title": "decodeBitmap"
      },
      "index": {
        "description": "Try to decode bitmap image Right now this function can output the following pixel types PixelRGB8",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "decodeBitmap",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Bitmap",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeGif",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a raw gif image to an image, witout\n modifying the pixels.\n This function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Gif.html#decodeGif",
        "fct-type": "function",
        "title": "decodeGif"
      },
      "index": {
        "description": "Transform raw gif image to an image witout modifying the pixels This function can output the following pixel types PixelRGB8",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "decodeGif",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Gif",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeGifImages",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a raw gif to a list of images, representing\n all the images of an animation.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String [Image PixelRGB8]",
        "fct-source": "src/Codec-Picture-Gif.html#decodeGifImages",
        "fct-type": "function",
        "title": "decodeGifImages"
      },
      "index": {
        "description": "Transform raw gif to list of images representing all the images of an animation",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "decodeGifImages",
        "normalized": "ByteString-\u003eEither String[Image PixelRGB]",
        "package": "JuicyPixels",
        "partial": "Gif Images",
        "signature": "ByteString-\u003eEither String[Image PixelRGB]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeHDR",
      "description": {
        "fct-descr": "\u003cp\u003eDecode an HDR (radiance) image, the resulting pixel\n type can be :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelRGBF\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-HDR.html#decodeHDR",
        "fct-type": "function",
        "title": "decodeHDR"
      },
      "index": {
        "description": "Decode an HDR radiance image the resulting pixel type can be PixelRGBF",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "decodeHDR",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "HDR",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeImage",
      "description": {
        "fct-descr": "\u003cp\u003eIf you want to decode an image in a bytestring without even thinking\n in term of format or whatever, this is the function to use. It will try\n to decode in each known format and if one decoding succeed will return\n the decoded image in it's own colorspace\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture.html#decodeImage",
        "fct-type": "function",
        "title": "decodeImage"
      },
      "index": {
        "description": "If you want to decode an image in bytestring without even thinking in term of format or whatever this is the function to use It will try to decode in each known format and if one decoding succeed will return the decoded image in it own colorspace",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "decodeImage",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeJpeg",
      "description": {
        "fct-descr": "\u003cp\u003eTry to decompress a jpeg file and decompress. The colorspace is still\n YCbCr if you want to perform computation on the luma part. You can\n convert it to RGB using \u003ccode\u003e\u003ca\u003econvertImage\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eColorSpaceConvertible\u003c/a\u003e\u003c/code\u003e\n typeclass.\n\u003c/p\u003e\u003cp\u003eThis function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelY8\n\u003c/li\u003e\u003cli\u003e PixelYCbCr8\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Jpg.html#decodeJpeg",
        "fct-type": "function",
        "title": "decodeJpeg"
      },
      "index": {
        "description": "Try to decompress jpeg file and decompress The colorspace is still YCbCr if you want to perform computation on the luma part You can convert it to RGB using convertImage from the ColorSpaceConvertible typeclass This function can output the following pixel types PixelY8 PixelYCbCr8",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "decodeJpeg",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Jpeg",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodePng",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a raw png image to an image, without modifying the\n underlying pixel type. If the image is greyscale and \u003c 8 bits,\n a transformation to RGBA8 is performed. This should change\n in the future.\n The resulting image let you manage the pixel types.\n\u003c/p\u003e\u003cp\u003eThis function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelY8\n\u003c/li\u003e\u003cli\u003e PixelY16\n\u003c/li\u003e\u003cli\u003e PixelYA8\n\u003c/li\u003e\u003cli\u003e PixelYA16\n\u003c/li\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003cli\u003e PixelRGB16\n\u003c/li\u003e\u003cli\u003e PixelRGBA8\n\u003c/li\u003e\u003cli\u003e PixelRGBA16\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Png.html#decodePng",
        "fct-type": "function",
        "title": "decodePng"
      },
      "index": {
        "description": "Transform raw png image to an image without modifying the underlying pixel type If the image is greyscale and bits transformation to RGBA8 is performed This should change in the future The resulting image let you manage the pixel types This function can output the following pixel types PixelY8 PixelY16 PixelYA8 PixelYA16 PixelRGB8 PixelRGB16 PixelRGBA8 PixelRGBA16",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "decodePng",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Png",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:decodeTiff",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a raw tiff image to an image, without modifying\n the underlying pixel type.\n\u003c/p\u003e\u003cp\u003eThis function can output the following pixel types :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PixelY8\n\u003c/li\u003e\u003cli\u003e PixelY16\n\u003c/li\u003e\u003cli\u003e PixelRGB8\n\u003c/li\u003e\u003cli\u003e PixelRGB16\n\u003c/li\u003e\u003cli\u003e PixelCMYK8\n\u003c/li\u003e\u003cli\u003e PixelCMYK16\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "ByteString -\u003e Either String DynamicImage",
        "fct-source": "src/Codec-Picture-Tiff.html#decodeTiff",
        "fct-type": "function",
        "title": "decodeTiff"
      },
      "index": {
        "description": "Transform raw tiff image to an image without modifying the underlying pixel type This function can output the following pixel types PixelY8 PixelY16 PixelRGB8 PixelRGB16 PixelCMYK8 PixelCMYK16",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "decodeTiff",
        "normalized": "ByteString-\u003eEither String DynamicImage",
        "package": "JuicyPixels",
        "partial": "Tiff",
        "signature": "ByteString-\u003eEither String DynamicImage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:enableImageDithering",
      "description": {
        "fct-descr": "\u003cp\u003eDo we want to apply the dithering to the\n image. Enabling it often reduce compression\n ratio but enhance the perceived quality\n of the final image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Bool",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "function",
        "title": "enableImageDithering"
      },
      "index": {
        "description": "Do we want to apply the dithering to the image Enabling it often reduce compression ratio but enhance the perceived quality of the final image",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "enableImageDithering",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Image Dithering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an image into a bytestring in .bmp format ready to be written\n on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image pixel -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Bitmap.html#encodeBitmap",
        "fct-type": "function",
        "title": "encodeBitmap"
      },
      "index": {
        "description": "Encode an image into bytestring in bmp format ready to be written on disk",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeBitmap",
        "normalized": "Image a-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Bitmap",
        "signature": "Image pixel-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeColorReducedGifImage",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a full color image to a gif by applying a color quantization\n algorithm on it.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image PixelRGB8 -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture.html#encodeColorReducedGifImage",
        "fct-type": "function",
        "title": "encodeColorReducedGifImage"
      },
      "index": {
        "description": "Encode full color image to gif by applying color quantization algorithm on it",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeColorReducedGifImage",
        "normalized": "Image PixelRGB-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Color Reduced Gif Image",
        "signature": "Image PixelRGB-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeDynamicBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a dynamic image in bmp if possible, supported pixel type are :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e RGB8\n\u003c/li\u003e\u003cli\u003e RGBA8\n\u003c/li\u003e\u003cli\u003e Y8\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "DynamicImage -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Bitmap.html#encodeDynamicBitmap",
        "fct-type": "function",
        "title": "encodeDynamicBitmap"
      },
      "index": {
        "description": "Encode dynamic image in bmp if possible supported pixel type are RGB8 RGBA8 Y8",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeDynamicBitmap",
        "normalized": "DynamicImage-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Dynamic Bitmap",
        "signature": "DynamicImage-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeDynamicPng",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a dynamic image in bmp if possible, supported pixel type are :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Y8\n\u003c/li\u003e\u003cli\u003e Y16\n\u003c/li\u003e\u003cli\u003e YA8\n\u003c/li\u003e\u003cli\u003e YA16\n\u003c/li\u003e\u003cli\u003e RGB8\n\u003c/li\u003e\u003cli\u003e RGB16\n\u003c/li\u003e\u003cli\u003e RGBA8\n\u003c/li\u003e\u003cli\u003e RGBA16\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "DynamicImage -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Png-Export.html#encodeDynamicPng",
        "fct-type": "function",
        "title": "encodeDynamicPng"
      },
      "index": {
        "description": "Encode dynamic image in bmp if possible supported pixel type are Y8 Y16 YA8 YA16 RGB8 RGB16 RGBA8 RGBA16",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeDynamicPng",
        "normalized": "DynamicImage-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Dynamic Png",
        "signature": "DynamicImage-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeGifAnimation",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to create a gif animation.\n All the images of the animation are separated\n by the same delay.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "GifDelay -\u003e GifLooping -\u003e [Image PixelRGB8] -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture.html#encodeGifAnimation",
        "fct-type": "function",
        "title": "encodeGifAnimation"
      },
      "index": {
        "description": "Helper function to create gif animation All the images of the animation are separated by the same delay",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeGifAnimation",
        "normalized": "GifDelay-\u003eGifLooping-\u003e[Image PixelRGB]-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Gif Animation",
        "signature": "GifDelay-\u003eGifLooping-\u003e[Image PixelRGB]-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeGifImage",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a greyscale image to a bytestring.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image Pixel8 -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Gif.html#encodeGifImage",
        "fct-type": "function",
        "title": "encodeGifImage"
      },
      "index": {
        "description": "Encode greyscale image to bytestring",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeGifImage",
        "normalized": "Image Pixel-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Gif Image",
        "signature": "Image Pixel-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeGifImageWithPalette",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an image with a given palette.\n Can return errors if the palette is ill-formed.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A palette must have between 1 and 256 colors\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image Pixel8 -\u003e Palette -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Gif.html#encodeGifImageWithPalette",
        "fct-type": "function",
        "title": "encodeGifImageWithPalette"
      },
      "index": {
        "description": "Encode an image with given palette Can return errors if the palette is ill-formed palette must have between and colors",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeGifImageWithPalette",
        "normalized": "Image Pixel-\u003ePalette-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Gif Image With Palette",
        "signature": "Image Pixel-\u003ePalette-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeGifImages",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a gif animation to a bytestring.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every image must have the same size\n\u003c/li\u003e\u003cli\u003e Every palette must have between one and 256 colors.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "GifLooping -\u003e [(Palette, GifDelay, Image Pixel8)] -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Gif.html#encodeGifImages",
        "fct-type": "function",
        "title": "encodeGifImages"
      },
      "index": {
        "description": "Encode gif animation to bytestring Every image must have the same size Every palette must have between one and colors",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeGifImages",
        "normalized": "GifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Gif Images",
        "signature": "GifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeHDR",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an High dynamic range image into a radiance image\n file format.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image PixelRGBF -\u003e ByteString",
        "fct-source": "src/Codec-Picture-HDR.html#encodeHDR",
        "fct-type": "function",
        "title": "encodeHDR"
      },
      "index": {
        "description": "Encode an High dynamic range image into radiance image file format",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeHDR",
        "normalized": "Image PixelRGBF-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "HDR",
        "signature": "Image PixelRGBF-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeJpeg",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an image in jpeg at a reasonnable quality level.\n If you want better quality or reduced file size, you should\n use \u003ccode\u003e\u003ca\u003eencodeJpegAtQuality\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image PixelYCbCr8 -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Jpg.html#encodeJpeg",
        "fct-type": "function",
        "title": "encodeJpeg"
      },
      "index": {
        "description": "Encode an image in jpeg at reasonnable quality level If you want better quality or reduced file size you should use encodeJpegAtQuality",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeJpeg",
        "normalized": "Image PixelYCbCr-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Jpeg",
        "signature": "Image PixelYCbCr-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeJpegAtQuality",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to call to encode an image to jpeg.\n The quality factor should be between 0 and 100 (100 being\n the best quality).\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Word8-\u003e Image PixelYCbCr8-\u003e ByteString",
        "fct-type": "function",
        "title": "encodeJpegAtQuality"
      },
      "index": {
        "description": "Function to call to encode an image to jpeg The quality factor should be between and being the best quality",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeJpegAtQuality",
        "normalized": "Word-\u003eImage PixelYCbCr-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Jpeg At Quality",
        "signature": "Word-\u003eImage PixelYCbCr-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodePalettedPng",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a paletted image as a color indexed 8-bit PNG.\n the palette must have between 1 and 256 values in it.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Palette -\u003e Image Pixel8 -\u003e Either String ByteString",
        "fct-source": "src/Codec-Picture-Png-Export.html#encodePalettedPng",
        "fct-type": "function",
        "title": "encodePalettedPng"
      },
      "index": {
        "description": "Encode paletted image as color indexed bit PNG the palette must have between and values in it",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodePalettedPng",
        "normalized": "Palette-\u003eImage Pixel-\u003eEither String ByteString",
        "package": "JuicyPixels",
        "partial": "Paletted Png",
        "signature": "Palette-\u003eImage Pixel-\u003eEither String ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodePng",
      "description": {
        "fct-descr": "\u003cp\u003eTransform an image into a png encoded bytestring, ready\n to be written as a file.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Png-Export.html#encodePng",
        "fct-type": "method",
        "title": "encodePng"
      },
      "index": {
        "description": "Transform an image into png encoded bytestring ready to be written as file",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodePng",
        "normalized": "Image a-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Png",
        "signature": "Image a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:encodeTiff",
      "description": {
        "fct-descr": "\u003cp\u003eTransform an image into a Tiff encoded bytestring, reade to be\n written as a file.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image px -\u003e ByteString",
        "fct-source": "src/Codec-Picture-Tiff.html#encodeTiff",
        "fct-type": "function",
        "title": "encodeTiff"
      },
      "index": {
        "description": "Transform an image into Tiff encoded bytestring reade to be written as file",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "encodeTiff",
        "normalized": "Image a-\u003eByteString",
        "package": "JuicyPixels",
        "partial": "Tiff",
        "signature": "Image px-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:generateFoldImage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an image given a function to generate pixels.\n The function will receive value from 0 to width-1 for the x parameter\n and 0 to height-1 for the y parameter. The coordinate 0,0 is the upper\n left corner of the image, and (width-1, height-1) the lower right corner.\n\u003c/p\u003e\u003cp\u003ethe acc parameter is a user defined one.\n\u003c/p\u003e\u003cp\u003eThe function is called for each pixel in the line from left to right (0 to width - 1)\n and for each line (0 to height - 1).\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "(acc -\u003e Int -\u003e Int -\u003e (acc, a))-\u003e acc-\u003e Int-\u003e Int-\u003e (acc, Image a)",
        "fct-type": "function",
        "title": "generateFoldImage"
      },
      "index": {
        "description": "Create an image given function to generate pixels The function will receive value from to width-1 for the parameter and to height-1 for the parameter The coordinate is the upper left corner of the image and width-1 height-1 the lower right corner the acc parameter is user defined one The function is called for each pixel in the line from left to right to width and for each line to height",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "generateFoldImage",
        "normalized": "(a-\u003eInt-\u003eInt-\u003e(a,b))-\u003ea-\u003eInt-\u003eInt-\u003e(a,Image b)",
        "package": "JuicyPixels",
        "partial": "Fold Image",
        "signature": "(acc-\u003eInt-\u003eInt-\u003e(acc,a))-\u003eacc-\u003eInt-\u003eInt-\u003e(acc,Image a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:generateImage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an image given a function to generate pixels.\n The function will receive value from 0 to width-1 for the x parameter\n and 0 to height-1 for the y parameter. The coordinate 0,0 is the upper\n left corner of the image, and (width-1, height-1) the lower right corner.\n\u003c/p\u003e\u003cp\u003efor example, to create a small gradient image :\n\u003c/p\u003e\u003cpre\u003e imageCreator :: String -\u003e Image PixelRGB8\n imageCreator path = writePng path $ generateImage pixelRenderer 250 300\n    where pixelRenderer x y = PixelRGB8 x y 128\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "(Int -\u003e Int -\u003e a)-\u003e Int-\u003e Int-\u003e Image a",
        "fct-type": "function",
        "title": "generateImage"
      },
      "index": {
        "description": "Create an image given function to generate pixels The function will receive value from to width-1 for the parameter and to height-1 for the parameter The coordinate is the upper left corner of the image and width-1 height-1 the lower right corner for example to create small gradient image imageCreator String Image PixelRGB8 imageCreator path writePng path generateImage pixelRenderer where pixelRenderer PixelRGB8",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "generateImage",
        "normalized": "(Int-\u003eInt-\u003ea)-\u003eInt-\u003eInt-\u003eImage a",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "(Int-\u003eInt-\u003ea)-\u003eInt-\u003eInt-\u003eImage a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:imageData",
      "description": {
        "fct-descr": "\u003cp\u003eThe real image, to extract pixels at some position\n you should use the helpers functions.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Vector (PixelBaseComponent a)",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "function",
        "title": "imageData"
      },
      "index": {
        "description": "The real image to extract pixels at some position you should use the helpers functions",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "imageData",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:imageFromUnsafePtr",
      "description": {
        "fct-descr": "\u003cp\u003eImport a image from an unsafe pointer\n The pointer must have a size of width * height * componentCount px\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Int-\u003e Int-\u003e ForeignPtr Word8-\u003e Image px",
        "fct-type": "function",
        "title": "imageFromUnsafePtr"
      },
      "index": {
        "description": "Import image from an unsafe pointer The pointer must have size of width height componentCount px",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "imageFromUnsafePtr",
        "normalized": "Int-\u003eInt-\u003eForeignPtr Word-\u003eImage a",
        "package": "JuicyPixels",
        "partial": "From Unsafe Ptr",
        "signature": "Int-\u003eInt-\u003eForeignPtr Word-\u003eImage px"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:imageHeight",
      "description": {
        "fct-descr": "\u003cp\u003eHeight of the image in pixels.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "function",
        "title": "imageHeight"
      },
      "index": {
        "description": "Height of the image in pixels",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "imageHeight",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:imageWidth",
      "description": {
        "fct-descr": "\u003cp\u003eWidth of the image in pixels\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Picture-Types.html#Image",
        "fct-type": "function",
        "title": "imageWidth"
      },
      "index": {
        "description": "Width of the image in pixels",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "imageWidth",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:mixWith",
      "description": {
        "fct-descr": "\u003cp\u003eCall the function for every component of the pixels.\n For example for RGB pixels mixWith is declared like this :\n\u003c/p\u003e\u003cpre\u003e mixWith f (PixelRGB8 ra ga ba) (PixelRGB8 rb gb bb) =\n    PixelRGB8 (f 0 ra rb) (f 1 ga gb) (f 2 ba bb)\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "(Int -\u003e PixelBaseComponent a -\u003e PixelBaseComponent a -\u003e PixelBaseComponent a) -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Codec-Picture-Types.html#mixWith",
        "fct-type": "method",
        "title": "mixWith"
      },
      "index": {
        "description": "Call the function for every component of the pixels For example for RGB pixels mixWith is declared like this mixWith PixelRGB8 ra ga ba PixelRGB8 rb gb bb PixelRGB8 ra rb ga gb ba bb",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "mixWith",
        "normalized": "(Int-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea-\u003ea",
        "package": "JuicyPixels",
        "partial": "With",
        "signature": "(Int-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a-\u003ePixelBaseComponent a)-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:mutablePixelBaseIndex",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate theindex for the begining of the pixel at position x y\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "MutableImage s a -\u003e Int -\u003e Int -\u003e Int",
        "fct-source": "src/Codec-Picture-Types.html#mutablePixelBaseIndex",
        "fct-type": "method",
        "title": "mutablePixelBaseIndex"
      },
      "index": {
        "description": "Calculate theindex for the begining of the pixel at position",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "mutablePixelBaseIndex",
        "normalized": "MutableImage a b-\u003eInt-\u003eInt-\u003eInt",
        "package": "JuicyPixels",
        "partial": "Pixel Base Index",
        "signature": "MutableImage s a-\u003eInt-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:paletteColorCount",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of color we want in the\n palette\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "function",
        "title": "paletteColorCount"
      },
      "index": {
        "description": "Maximum number of color we want in the palette",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "paletteColorCount",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Color Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:paletteCreationMethod",
      "description": {
        "fct-descr": "\u003cp\u003eAlgorithm used to find the palette\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PaletteCreationMethod",
        "fct-source": "src/Codec-Picture-ColorQuant.html#PaletteOptions",
        "fct-type": "function",
        "title": "paletteCreationMethod"
      },
      "index": {
        "description": "Algorithm used to find the palette",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "paletteCreationMethod",
        "normalized": "",
        "package": "JuicyPixels",
        "partial": "Creation Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:palettize",
      "description": {
        "fct-descr": "\u003cp\u003eReduces an image to a color palette according to \u003ccode\u003ePaletteOpts\u003c/code\u003e and\n   returns the \u003cem\u003eindices image\u003c/em\u003e along with its \u003ccode\u003e\u003ca\u003ePalette\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "PaletteOptions -\u003e Image PixelRGB8 -\u003e (Image Pixel8, Palette)",
        "fct-source": "src/Codec-Picture-ColorQuant.html#palettize",
        "fct-type": "function",
        "title": "palettize"
      },
      "index": {
        "description": "Reduces an image to color palette according to PaletteOpts and returns the indices image along with its Palette",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "palettize",
        "normalized": "PaletteOptions-\u003eImage PixelRGB-\u003e(Image Pixel,Palette)",
        "package": "JuicyPixels",
        "partial": "",
        "signature": "PaletteOptions-\u003eImage PixelRGB-\u003e(Image Pixel,Palette)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:pixelAt",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a pixel at a given position, (x, y), the origin\n is assumed to be at the corner top left, positive y to the\n bottom of the image\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e Int -\u003e Int -\u003e a",
        "fct-source": "src/Codec-Picture-Types.html#pixelAt",
        "fct-type": "method",
        "title": "pixelAt"
      },
      "index": {
        "description": "Extract pixel at given position the origin is assumed to be at the corner top left positive to the bottom of the image",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "pixelAt",
        "normalized": "Image a-\u003eInt-\u003eInt-\u003ea",
        "package": "JuicyPixels",
        "partial": "At",
        "signature": "Image a-\u003eInt-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:pixelBaseIndex",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the index for the begining of the pixel\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Image a -\u003e Int -\u003e Int -\u003e Int",
        "fct-source": "src/Codec-Picture-Types.html#pixelBaseIndex",
        "fct-type": "method",
        "title": "pixelBaseIndex"
      },
      "index": {
        "description": "Calculate the index for the begining of the pixel",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "pixelBaseIndex",
        "normalized": "Image a-\u003eInt-\u003eInt-\u003eInt",
        "package": "JuicyPixels",
        "partial": "Base Index",
        "signature": "Image a-\u003eInt-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:pixelMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e equivalent for an image, working at the pixel level.\n Little example : a brightness function for an rgb image\n\u003c/p\u003e\u003cpre\u003e brightnessRGB8 :: Int -\u003e Image PixelRGB8 -\u003e Image PixelRGB8\n brightnessRGB8 add = pixelMap brightFunction\n      where up v = fromIntegral (fromIntegral v + add)\n            brightFunction (PixelRGB8 r g b) =\n                    PixelRGB8 (up r) (up g) (up b)\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "(a -\u003e b) -\u003e Image a -\u003e Image b",
        "fct-source": "src/Codec-Picture-Types.html#pixelMap",
        "fct-type": "function",
        "title": "pixelMap"
      },
      "index": {
        "description": "map equivalent for an image working at the pixel level Little example brightness function for an rgb image brightnessRGB8 Int Image PixelRGB8 Image PixelRGB8 brightnessRGB8 add pixelMap brightFunction where up fromIntegral fromIntegral add brightFunction PixelRGB8 PixelRGB8 up up up",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "pixelMap",
        "normalized": "(a-\u003eb)-\u003eImage a-\u003eImage b",
        "package": "JuicyPixels",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003eImage a-\u003eImage b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eTry to load a .bmp file. The colorspace would be RGB or RGBA\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e IO (Either String DynamicImage)",
        "fct-source": "src/Codec-Picture.html#readBitmap",
        "fct-type": "function",
        "title": "readBitmap"
      },
      "index": {
        "description": "Try to load bmp file The colorspace would be RGB or RGBA",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "readBitmap",
        "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
        "package": "JuicyPixels",
        "partial": "Bitmap",
        "signature": "FilePath-\u003eIO(Either String DynamicImage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readGif",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function trying to load a gif file from a file on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e IO (Either String DynamicImage)",
        "fct-source": "src/Codec-Picture.html#readGif",
        "fct-type": "function",
        "title": "readGif"
      },
      "index": {
        "description": "Helper function trying to load gif file from file on disk",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "readGif",
        "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
        "package": "JuicyPixels",
        "partial": "Gif",
        "signature": "FilePath-\u003eIO(Either String DynamicImage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readGifImages",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function trying to load all the images of an animated\n gif file.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e IO (Either String [Image PixelRGB8])",
        "fct-source": "src/Codec-Picture.html#readGifImages",
        "fct-type": "function",
        "title": "readGifImages"
      },
      "index": {
        "description": "Helper function trying to load all the images of an animated gif file",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "readGifImages",
        "normalized": "FilePath-\u003eIO(Either String[Image PixelRGB])",
        "package": "JuicyPixels",
        "partial": "Gif Images",
        "signature": "FilePath-\u003eIO(Either String[Image PixelRGB])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readHDR",
      "description": {
        "fct-descr": "\u003cp\u003eTry to load a .pic file. The colorspace can only be\n RGB with floating point precision.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e IO (Either String DynamicImage)",
        "fct-source": "src/Codec-Picture.html#readHDR",
        "fct-type": "function",
        "title": "readHDR"
      },
      "index": {
        "description": "Try to load pic file The colorspace can only be RGB with floating point precision",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "readHDR",
        "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
        "package": "JuicyPixels",
        "partial": "HDR",
        "signature": "FilePath-\u003eIO(Either String DynamicImage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readImage",
      "description": {
        "fct-descr": "\u003cp\u003eLoad an image file without even thinking about it, it does everything\n as \u003ccode\u003e\u003ca\u003edecodeImage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e IO (Either String DynamicImage)",
        "fct-source": "src/Codec-Picture.html#readImage",
        "fct-type": "function",
        "title": "readImage"
      },
      "index": {
        "description": "Load an image file without even thinking about it it does everything as decodeImage",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "readImage",
        "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "FilePath-\u003eIO(Either String DynamicImage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readJpeg",
      "description": {
        "fct-descr": "\u003cp\u003eTry to load a jpeg file and decompress. The colorspace is still\n YCbCr if you want to perform computation on the luma part. You can\n convert it to RGB using \u003ccode\u003ecolorSpaceConversion\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e IO (Either String DynamicImage)",
        "fct-source": "src/Codec-Picture.html#readJpeg",
        "fct-type": "function",
        "title": "readJpeg"
      },
      "index": {
        "description": "Try to load jpeg file and decompress The colorspace is still YCbCr if you want to perform computation on the luma part You can convert it to RGB using colorSpaceConversion",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "readJpeg",
        "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
        "package": "JuicyPixels",
        "partial": "Jpeg",
        "signature": "FilePath-\u003eIO(Either String DynamicImage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readPixel",
      "description": {
        "fct-descr": "\u003cp\u003eSame as pixelAt but for mutable images.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "MutableImage (PrimState m) a -\u003e Int -\u003e Int -\u003e m a",
        "fct-source": "src/Codec-Picture-Types.html#readPixel",
        "fct-type": "method",
        "title": "readPixel"
      },
      "index": {
        "description": "Same as pixelAt but for mutable images",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "readPixel",
        "normalized": "MutableImage(PrimState a)b-\u003eInt-\u003eInt-\u003ea b",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": "MutableImage(PrimState m)a-\u003eInt-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readPng",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function trying to load a png file from a file on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e IO (Either String DynamicImage)",
        "fct-source": "src/Codec-Picture.html#readPng",
        "fct-type": "function",
        "title": "readPng"
      },
      "index": {
        "description": "Helper function trying to load png file from file on disk",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "readPng",
        "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
        "package": "JuicyPixels",
        "partial": "Png",
        "signature": "FilePath-\u003eIO(Either String DynamicImage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:readTiff",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function trying to load tiff file from a file on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e IO (Either String DynamicImage)",
        "fct-source": "src/Codec-Picture.html#readTiff",
        "fct-type": "function",
        "title": "readTiff"
      },
      "index": {
        "description": "Helper function trying to load tiff file from file on disk",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "readTiff",
        "normalized": "FilePath-\u003eIO(Either String DynamicImage)",
        "package": "JuicyPixels",
        "partial": "Tiff",
        "signature": "FilePath-\u003eIO(Either String DynamicImage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveBmpImage",
      "description": {
        "fct-descr": "\u003cp\u003eSave an image to a '.bmp' file, will do everything it can to save an image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e DynamicImage -\u003e IO ()",
        "fct-source": "src/Codec-Picture.html#saveBmpImage",
        "fct-type": "function",
        "title": "saveBmpImage"
      },
      "index": {
        "description": "Save an image to bmp file will do everything it can to save an image",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "saveBmpImage",
        "normalized": "FilePath-\u003eDynamicImage-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Bmp Image",
        "signature": "FilePath-\u003eDynamicImage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveGifImage",
      "description": {
        "fct-descr": "\u003cp\u003eSave an image to a '.gif' file, will do everything it can to save it.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e DynamicImage -\u003e Either String (IO ())",
        "fct-source": "src/Codec-Picture.html#saveGifImage",
        "fct-type": "function",
        "title": "saveGifImage"
      },
      "index": {
        "description": "Save an image to gif file will do everything it can to save it",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "saveGifImage",
        "normalized": "FilePath-\u003eDynamicImage-\u003eEither String(IO())",
        "package": "JuicyPixels",
        "partial": "Gif Image",
        "signature": "FilePath-\u003eDynamicImage-\u003eEither String(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveJpgImage",
      "description": {
        "fct-descr": "\u003cp\u003eSave an image to a '.jpg' file, will do everything it can to save an image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Int -\u003e FilePath -\u003e DynamicImage -\u003e IO ()",
        "fct-source": "src/Codec-Picture.html#saveJpgImage",
        "fct-type": "function",
        "title": "saveJpgImage"
      },
      "index": {
        "description": "Save an image to jpg file will do everything it can to save an image",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "saveJpgImage",
        "normalized": "Int-\u003eFilePath-\u003eDynamicImage-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Jpg Image",
        "signature": "Int-\u003eFilePath-\u003eDynamicImage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:savePngImage",
      "description": {
        "fct-descr": "\u003cp\u003eSave an image to a '.png' file, will do everything it can to save an image.\n For example, a simple transcoder to png\n\u003c/p\u003e\u003cpre\u003e transcodeToPng :: FilePath -\u003e FilePath -\u003e IO ()\n transcodeToPng pathIn pathOut = do\n    eitherImg \u003c- readImage pathIn\n    case eitherImg of\n        Left _ -\u003e return ()\n        Right img -\u003e savePngImage pathOut img\n\u003c/pre\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e DynamicImage -\u003e IO ()",
        "fct-source": "src/Codec-Picture.html#savePngImage",
        "fct-type": "function",
        "title": "savePngImage"
      },
      "index": {
        "description": "Save an image to png file will do everything it can to save an image For example simple transcoder to png transcodeToPng FilePath FilePath IO transcodeToPng pathIn pathOut do eitherImg readImage pathIn case eitherImg of Left return Right img savePngImage pathOut img",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "savePngImage",
        "normalized": "FilePath-\u003eDynamicImage-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Png Image",
        "signature": "FilePath-\u003eDynamicImage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveRadianceImage",
      "description": {
        "fct-descr": "\u003cp\u003eSave an image to a '.hdr' file, will do everything it can to save an image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e DynamicImage -\u003e IO ()",
        "fct-source": "src/Codec-Picture.html#saveRadianceImage",
        "fct-type": "function",
        "title": "saveRadianceImage"
      },
      "index": {
        "description": "Save an image to hdr file will do everything it can to save an image",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "saveRadianceImage",
        "normalized": "FilePath-\u003eDynamicImage-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Radiance Image",
        "signature": "FilePath-\u003eDynamicImage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:saveTiffImage",
      "description": {
        "fct-descr": "\u003cp\u003eSave an image to a '.tiff' file, will do everything it can to save an image.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e DynamicImage -\u003e IO ()",
        "fct-source": "src/Codec-Picture.html#saveTiffImage",
        "fct-type": "function",
        "title": "saveTiffImage"
      },
      "index": {
        "description": "Save an image to tiff file will do everything it can to save an image",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "saveTiffImage",
        "normalized": "FilePath-\u003eDynamicImage-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Tiff Image",
        "signature": "FilePath-\u003eDynamicImage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:unsafePixelAt",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe version of pixelAt, read a pixel at the given\n index without bound checking (if possible).\n The index is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Vector (PixelBaseComponent a) -\u003e Int -\u003e a",
        "fct-source": "src/Codec-Picture-Types.html#unsafePixelAt",
        "fct-type": "method",
        "title": "unsafePixelAt"
      },
      "index": {
        "description": "Unsafe version of pixelAt read pixel at the given index without bound checking if possible The index is expressed in number PixelBaseComponent",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "unsafePixelAt",
        "normalized": "Vector(PixelBaseComponent a)-\u003eInt-\u003ea",
        "package": "JuicyPixels",
        "partial": "Pixel At",
        "signature": "Vector(PixelBaseComponent a)-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:unsafeReadPixel",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe version of readPixel,  read a pixel at the given\n position without bound checking (if possible). The index\n is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "STVector (PrimState m) (PixelBaseComponent a) -\u003e Int -\u003e m a",
        "fct-source": "src/Codec-Picture-Types.html#unsafeReadPixel",
        "fct-type": "method",
        "title": "unsafeReadPixel"
      },
      "index": {
        "description": "Unsafe version of readPixel read pixel at the given position without bound checking if possible The index is expressed in number PixelBaseComponent",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "unsafeReadPixel",
        "normalized": "STVector(PrimState a)(PixelBaseComponent b)-\u003eInt-\u003ea b",
        "package": "JuicyPixels",
        "partial": "Read Pixel",
        "signature": "STVector(PrimState m)(PixelBaseComponent a)-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:unsafeWritePixel",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe version of writePixel, write a pixel at the\n given position without bound checking. This can be _really_ unsafe.\n The index is expressed in number (PixelBaseComponent a)\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "STVector (PrimState m) (PixelBaseComponent a) -\u003e Int -\u003e a -\u003e m ()",
        "fct-source": "src/Codec-Picture-Types.html#unsafeWritePixel",
        "fct-type": "method",
        "title": "unsafeWritePixel"
      },
      "index": {
        "description": "Unsafe version of writePixel write pixel at the given position without bound checking This can be really unsafe The index is expressed in number PixelBaseComponent",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "unsafeWritePixel",
        "normalized": "STVector(PrimState a)(PixelBaseComponent b)-\u003eInt-\u003eb-\u003ea()",
        "package": "JuicyPixels",
        "partial": "Write Pixel",
        "signature": "STVector(PrimState m)(PixelBaseComponent a)-\u003eInt-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:withImage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an image using a monadic initializer function.\n The function will receive value from 0 to width-1 for the x parameter\n and 0 to height-1 for the y parameter. The coordinate 0,0 is the upper\n left corner of the image, and (width-1, height-1) the lower right corner.\n\u003c/p\u003e\u003cp\u003eThe function is called for each pixel in the line from left to right (0 to width - 1)\n and for each line (0 to height - 1).\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "Int-\u003e Int-\u003e (Int -\u003e Int -\u003e m pixel)-\u003e m (Image pixel)",
        "fct-type": "function",
        "title": "withImage"
      },
      "index": {
        "description": "Create an image using monadic initializer function The function will receive value from to width-1 for the parameter and to height-1 for the parameter The coordinate is the upper left corner of the image and width-1 height-1 the lower right corner The function is called for each pixel in the line from left to right to width and for each line to height",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "withImage",
        "normalized": "Int-\u003eInt-\u003e(Int-\u003eInt-\u003ea b)-\u003ea(Image b)",
        "package": "JuicyPixels",
        "partial": "Image",
        "signature": "Int-\u003eInt-\u003e(Int-\u003eInt-\u003em pixel)-\u003em(Image pixel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an image in a file use the bitmap format.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image pixel -\u003e IO ()",
        "fct-source": "src/Codec-Picture-Bitmap.html#writeBitmap",
        "fct-type": "function",
        "title": "writeBitmap"
      },
      "index": {
        "description": "Write an image in file use the bitmap format",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeBitmap",
        "normalized": "FilePath-\u003eImage a-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Bitmap",
        "signature": "FilePath-\u003eImage pixel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeColorReducedGifImage",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a full color image to a gif by applying a color quantization\n algorithm on it.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image PixelRGB8 -\u003e Either String (IO ())",
        "fct-source": "src/Codec-Picture.html#writeColorReducedGifImage",
        "fct-type": "function",
        "title": "writeColorReducedGifImage"
      },
      "index": {
        "description": "Write full color image to gif by applying color quantization algorithm on it",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeColorReducedGifImage",
        "normalized": "FilePath-\u003eImage PixelRGB-\u003eEither String(IO())",
        "package": "JuicyPixels",
        "partial": "Color Reduced Gif Image",
        "signature": "FilePath-\u003eImage PixelRGB-\u003eEither String(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeDynamicBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a dynamic image in a .bmp image file if possible.\n The same restriction as encodeDynamicBitmap apply.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e DynamicImage -\u003e IO (Either String Bool)",
        "fct-source": "src/Codec-Picture-Bitmap.html#writeDynamicBitmap",
        "fct-type": "function",
        "title": "writeDynamicBitmap"
      },
      "index": {
        "description": "Write dynamic image in bmp image file if possible The same restriction as encodeDynamicBitmap apply",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeDynamicBitmap",
        "normalized": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)",
        "package": "JuicyPixels",
        "partial": "Dynamic Bitmap",
        "signature": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeDynamicPng",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a dynamic image in a .png image file if possible.\n The same restriction as encodeDynamicPng apply.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e DynamicImage -\u003e IO (Either String Bool)",
        "fct-source": "src/Codec-Picture-Png-Export.html#writeDynamicPng",
        "fct-type": "function",
        "title": "writeDynamicPng"
      },
      "index": {
        "description": "Write dynamic image in png image file if possible The same restriction as encodeDynamicPng apply",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeDynamicPng",
        "normalized": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)",
        "package": "JuicyPixels",
        "partial": "Dynamic Png",
        "signature": "FilePath-\u003eDynamicImage-\u003eIO(Either String Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeGifAnimation",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to write a gif animtion on disk.\n See encodeGifAnimation\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e GifDelay -\u003e GifLooping -\u003e [Image PixelRGB8] -\u003e Either String (IO ())",
        "fct-source": "src/Codec-Picture.html#writeGifAnimation",
        "fct-type": "function",
        "title": "writeGifAnimation"
      },
      "index": {
        "description": "Helper function to write gif animtion on disk See encodeGifAnimation",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeGifAnimation",
        "normalized": "FilePath-\u003eGifDelay-\u003eGifLooping-\u003e[Image PixelRGB]-\u003eEither String(IO())",
        "package": "JuicyPixels",
        "partial": "Gif Animation",
        "signature": "FilePath-\u003eGifDelay-\u003eGifLooping-\u003e[Image PixelRGB]-\u003eEither String(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeGifImage",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a greyscale in a gif file on the disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image Pixel8 -\u003e IO ()",
        "fct-source": "src/Codec-Picture-Gif.html#writeGifImage",
        "fct-type": "function",
        "title": "writeGifImage"
      },
      "index": {
        "description": "Write greyscale in gif file on the disk",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeGifImage",
        "normalized": "FilePath-\u003eImage Pixel-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Gif Image",
        "signature": "FilePath-\u003eImage Pixel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeGifImageWithPalette",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a gif image with a palette to a file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A palette must have between 1 and 256 colors\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image Pixel8 -\u003e Palette -\u003e Either String (IO ())",
        "fct-source": "src/Codec-Picture-Gif.html#writeGifImageWithPalette",
        "fct-type": "function",
        "title": "writeGifImageWithPalette"
      },
      "index": {
        "description": "Write gif image with palette to file palette must have between and colors",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeGifImageWithPalette",
        "normalized": "FilePath-\u003eImage Pixel-\u003ePalette-\u003eEither String(IO())",
        "package": "JuicyPixels",
        "partial": "Gif Image With Palette",
        "signature": "FilePath-\u003eImage Pixel-\u003ePalette-\u003eEither String(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeGifImages",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a list of images as a gif animation in a file.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every image must have the same size\n\u003c/li\u003e\u003cli\u003e Every palette must have between one and 256 colors.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e GifLooping -\u003e [(Palette, GifDelay, Image Pixel8)] -\u003e Either String (IO ())",
        "fct-source": "src/Codec-Picture-Gif.html#writeGifImages",
        "fct-type": "function",
        "title": "writeGifImages"
      },
      "index": {
        "description": "Write list of images as gif animation in file Every image must have the same size Every palette must have between one and colors",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeGifImages",
        "normalized": "FilePath-\u003eGifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String(IO())",
        "package": "JuicyPixels",
        "partial": "Gif Images",
        "signature": "FilePath-\u003eGifLooping-\u003e[(Palette,GifDelay,Image Pixel)]-\u003eEither String(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeHDR",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an High dynamic range image into a radiance\n image file on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image PixelRGBF -\u003e IO ()",
        "fct-source": "src/Codec-Picture-HDR.html#writeHDR",
        "fct-type": "function",
        "title": "writeHDR"
      },
      "index": {
        "description": "Write an High dynamic range image into radiance image file on disk",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeHDR",
        "normalized": "FilePath-\u003eImage PixelRGBF-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "HDR",
        "signature": "FilePath-\u003eImage PixelRGBF-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writePixel",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a pixel in a mutable image at position x y\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "MutableImage (PrimState m) a -\u003e Int -\u003e Int -\u003e a -\u003e m ()",
        "fct-source": "src/Codec-Picture-Types.html#writePixel",
        "fct-type": "method",
        "title": "writePixel"
      },
      "index": {
        "description": "Write pixel in mutable image at position",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writePixel",
        "normalized": "MutableImage(PrimState a)b-\u003eInt-\u003eInt-\u003eb-\u003ea()",
        "package": "JuicyPixels",
        "partial": "Pixel",
        "signature": "MutableImage(PrimState m)a-\u003eInt-\u003eInt-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writePng",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to directly write an image as a png on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image pixel -\u003e IO ()",
        "fct-source": "src/Codec-Picture-Png-Export.html#writePng",
        "fct-type": "function",
        "title": "writePng"
      },
      "index": {
        "description": "Helper function to directly write an image as png on disk",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writePng",
        "normalized": "FilePath-\u003eImage a-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Png",
        "signature": "FilePath-\u003eImage pixel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JuicyPixels/docs/Codec-Picture.html#v:writeTiff",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to directly write an image as a tiff on disk.\n\u003c/p\u003e",
        "fct-module": "Codec.Picture",
        "fct-package": "JuicyPixels",
        "fct-signature": "FilePath -\u003e Image pixel -\u003e IO ()",
        "fct-source": "src/Codec-Picture-Tiff.html#writeTiff",
        "fct-type": "function",
        "title": "writeTiff"
      },
      "index": {
        "description": "Helper function to directly write an image as tiff on disk",
        "hierarchy": "Codec Picture",
        "module": "Codec.Picture",
        "name": "writeTiff",
        "normalized": "FilePath-\u003eImage a-\u003eIO()",
        "package": "JuicyPixels",
        "partial": "Tiff",
        "signature": "FilePath-\u003eImage pixel-\u003eIO()"
      }
    }
  }
]