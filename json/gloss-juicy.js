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
        "word": "gloss-juicy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Juicy",
          "name": "Juicy",
          "package": "gloss-juicy",
          "source": "src/Graphics-Gloss-Juicy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "Juicy",
          "package": "gloss-juicy",
          "partial": "Juicy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to convert a \u003ccode\u003e\u003ca\u003eDynamicImage\u003c/a\u003e\u003c/code\u003e from JuicyPixels to a gloss \u003ccode\u003e\u003ca\u003ePicture\u003c/a\u003e\u003c/code\u003e.  All formats except RGBF and YF should successfully\n   yield a \u003ccode\u003e\u003ca\u003ePicture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromDynamicImage",
          "package": "gloss-juicy",
          "signature": "DynamicImage -\u003e Maybe Picture",
          "source": "src/Graphics-Gloss-Juicy.html#fromDynamicImage",
          "type": "function"
        },
        "index": {
          "description": "Tries to convert DynamicImage from JuicyPixels to gloss Picture All formats except RGBF and YF should successfully yield Picture",
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromDynamicImage",
          "normalized": "DynamicImage-\u003eMaybe Picture",
          "package": "gloss-juicy",
          "partial": "Dynamic Image",
          "signature": "DynamicImage-\u003eMaybe Picture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:fromDynamicImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreation of a gloss \u003ccode\u003e\u003ca\u003ePicture\u003c/a\u003e\u003c/code\u003e by promoting (through \u003ccode\u003e\u003ca\u003epromoteImage\u003c/a\u003e\u003c/code\u003e) the \u003ccode\u003e\u003ca\u003ePixelRGB8\u003c/a\u003e\u003c/code\u003e image to \u003ccode\u003e\u003ca\u003ePixelRGBA8\u003c/a\u003e\u003c/code\u003e and calling \u003ccode\u003e\u003ca\u003efromImageRGBA8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageRGB8",
          "package": "gloss-juicy",
          "signature": "Image PixelRGB8 -\u003e Picture",
          "source": "src/Graphics-Gloss-Juicy.html#fromImageRGB8",
          "type": "function"
        },
        "index": {
          "description": "Creation of gloss Picture by promoting through promoteImage the PixelRGB8 image to PixelRGBA8 and calling fromImageRGBA8",
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageRGB8",
          "normalized": "Image PixelRGB-\u003ePicture",
          "package": "gloss-juicy",
          "partial": "Image RGB",
          "signature": "Image PixelRGB-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:fromImageRGB8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(N) conversion from \u003ccode\u003e\u003ca\u003ePixelRGBA8\u003c/a\u003e\u003c/code\u003e image to gloss \u003ccode\u003e\u003ca\u003ePicture\u003c/a\u003e\u003c/code\u003e, where N is the number of pixels.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageRGBA8",
          "package": "gloss-juicy",
          "signature": "Image PixelRGBA8 -\u003e Picture",
          "source": "src/Graphics-Gloss-Juicy.html#fromImageRGBA8",
          "type": "function"
        },
        "index": {
          "description": "conversion from PixelRGBA8 image to gloss Picture where is the number of pixels",
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageRGBA8",
          "normalized": "Image PixelRGBA-\u003ePicture",
          "package": "gloss-juicy",
          "partial": "Image RGBA",
          "signature": "Image PixelRGBA-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:fromImageRGBA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreation of a gloss \u003ccode\u003e\u003ca\u003ePicture\u003c/a\u003e\u003c/code\u003e by promoting (through \u003ccode\u003e\u003ca\u003epromoteImage\u003c/a\u003e\u003c/code\u003e) the \u003ccode\u003ePixelY8\u003c/code\u003e image to \u003ccode\u003e\u003ca\u003ePixelRGBA8\u003c/a\u003e\u003c/code\u003e and calling \u003ccode\u003e\u003ca\u003efromImageRGBA8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageY8",
          "package": "gloss-juicy",
          "signature": "Image Pixel8 -\u003e Picture",
          "source": "src/Graphics-Gloss-Juicy.html#fromImageY8",
          "type": "function"
        },
        "index": {
          "description": "Creation of gloss Picture by promoting through promoteImage the PixelY8 image to PixelRGBA8 and calling fromImageRGBA8",
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageY8",
          "normalized": "Image Pixel-\u003ePicture",
          "package": "gloss-juicy",
          "partial": "Image",
          "signature": "Image Pixel-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:fromImageY8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreation of a gloss \u003ccode\u003e\u003ca\u003ePicture\u003c/a\u003e\u003c/code\u003e by promoting (through \u003ccode\u003e\u003ca\u003epromoteImage\u003c/a\u003e\u003c/code\u003e) the \u003ccode\u003e\u003ca\u003ePixelYA8\u003c/a\u003e\u003c/code\u003e image to \u003ccode\u003e\u003ca\u003ePixelRGBA8\u003c/a\u003e\u003c/code\u003e and calling \u003ccode\u003e\u003ca\u003efromImageRGBA8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageYA8",
          "package": "gloss-juicy",
          "signature": "Image PixelYA8 -\u003e Picture",
          "source": "src/Graphics-Gloss-Juicy.html#fromImageYA8",
          "type": "function"
        },
        "index": {
          "description": "Creation of gloss Picture by promoting through promoteImage the PixelYA8 image to PixelRGBA8 and calling fromImageRGBA8",
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageYA8",
          "normalized": "Image PixelYA-\u003ePicture",
          "package": "gloss-juicy",
          "partial": "Image YA",
          "signature": "Image PixelYA-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:fromImageYA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreation of a gloss \u003ccode\u003e\u003ca\u003ePicture\u003c/a\u003e\u003c/code\u003e by promoting (through \u003ccode\u003e\u003ca\u003epromoteImage\u003c/a\u003e\u003c/code\u003e) the \u003ccode\u003e\u003ca\u003ePixelYCbCr8\u003c/a\u003e\u003c/code\u003e image to \u003ccode\u003e\u003ca\u003ePixelRGBA8\u003c/a\u003e\u003c/code\u003e and calling \u003ccode\u003e\u003ca\u003efromImageRGBA8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageYCbCr8",
          "package": "gloss-juicy",
          "signature": "Image PixelYCbCr8 -\u003e Picture",
          "source": "src/Graphics-Gloss-Juicy.html#fromImageYCbCr8",
          "type": "function"
        },
        "index": {
          "description": "Creation of gloss Picture by promoting through promoteImage the PixelYCbCr8 image to PixelRGBA8 and calling fromImageRGBA8",
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "fromImageYCbCr8",
          "normalized": "Image PixelYCbCr-\u003ePicture",
          "package": "gloss-juicy",
          "partial": "Image YCb Cr",
          "signature": "Image PixelYCbCr-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:fromImageYCbCr8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad an uncompressed 24 or 32bit RGBA BMP file as a bitmap.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Juicy",
          "name": "loadBMP",
          "package": "gloss-juicy",
          "signature": "FilePath -\u003e IO Picture",
          "type": "function"
        },
        "index": {
          "description": "Load an uncompressed or bit RGBA BMP file as bitmap",
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "loadBMP",
          "normalized": "FilePath-\u003eIO Picture",
          "package": "gloss-juicy",
          "partial": "BMP",
          "signature": "FilePath-\u003eIO Picture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:loadBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to load an image file into a Picture using \u003ccode\u003e\u003ca\u003ereadImage\u003c/a\u003e\u003c/code\u003e from JuicyPixels.\n   It means it'll try to successively read the content as an image in the following order,\n   until it succeeds (or fails on all of them): jpeg, png, bmp, gif, hdr (the last two are not supported)\n   This is handy when you don't know what format the image contained in the file is encoded with.\n   If you know the format in advance, use \u003ccode\u003e\u003ca\u003eloadBMP\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloadJuicyJPG\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eloadJuicyPNG\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Juicy",
          "name": "loadJuicy",
          "package": "gloss-juicy",
          "signature": "FilePath -\u003e IO (Maybe Picture)",
          "source": "src/Graphics-Gloss-Juicy.html#loadJuicy",
          "type": "function"
        },
        "index": {
          "description": "Tries to load an image file into Picture using readImage from JuicyPixels It means it ll try to successively read the content as an image in the following order until it succeeds or fails on all of them jpeg png bmp gif hdr the last two are not supported This is handy when you don know what format the image contained in the file is encoded with If you know the format in advance use loadBMP loadJuicyJPG or loadJuicyPNG",
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "loadJuicy",
          "normalized": "FilePath-\u003eIO(Maybe Picture)",
          "package": "gloss-juicy",
          "partial": "Juicy",
          "signature": "FilePath-\u003eIO(Maybe Picture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:loadJuicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Juicy",
          "name": "loadJuicyJPG",
          "package": "gloss-juicy",
          "signature": "FilePath -\u003e IO (Maybe Picture)",
          "source": "src/Graphics-Gloss-Juicy.html#loadJuicyJPG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "loadJuicyJPG",
          "normalized": "FilePath-\u003eIO(Maybe Picture)",
          "package": "gloss-juicy",
          "partial": "Juicy JPG",
          "signature": "FilePath-\u003eIO(Maybe Picture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:loadJuicyJPG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Juicy",
          "name": "loadJuicyPNG",
          "package": "gloss-juicy",
          "signature": "FilePath -\u003e IO (Maybe Picture)",
          "source": "src/Graphics-Gloss-Juicy.html#loadJuicyPNG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Juicy",
          "module": "Graphics.Gloss.Juicy",
          "name": "loadJuicyPNG",
          "normalized": "FilePath-\u003eIO(Maybe Picture)",
          "package": "gloss-juicy",
          "partial": "Juicy PNG",
          "signature": "FilePath-\u003eIO(Maybe Picture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-juicy/docs/Graphics-Gloss-Juicy.html#v:loadJuicyPNG"
      }
    }
  ]
]