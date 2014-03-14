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
        "word": "bitmap-opengl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOpenGL support for Data.Bitmap\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bitmap.OpenGL",
          "name": "OpenGL",
          "package": "bitmap-opengl",
          "source": "src/Data-Bitmap-OpenGL.html",
          "type": "module"
        },
        "index": {
          "description": "OpenGL support for Data.Bitmap",
          "hierarchy": "Data Bitmap OpenGL",
          "module": "Data.Bitmap.OpenGL",
          "name": "OpenGL",
          "package": "bitmap-opengl",
          "partial": "Open GL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitmap-opengl/docs/Data-Bitmap-OpenGL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function guesses the pixel format from the number of channels:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1 ~\u003e Alpha\n\u003c/li\u003e\u003cli\u003e 2 ~\u003e Luminance, Alpha\n\u003c/li\u003e\u003cli\u003e 3 ~\u003e RGB\n\u003c/li\u003e\u003cli\u003e 4 ~\u003e RGBA\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor more control, use \u003ccode\u003e\u003ca\u003emakeTextureFromBitmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitmap.OpenGL",
          "name": "makeSimpleBitmapTexture",
          "package": "bitmap-opengl",
          "signature": "Bitmap t -\u003e IO TextureObject",
          "source": "src/Data-Bitmap-OpenGL.html#makeSimpleBitmapTexture",
          "type": "function"
        },
        "index": {
          "description": "This function guesses the pixel format from the number of channels Alpha Luminance Alpha RGB RGBA For more control use makeTextureFromBitmap",
          "hierarchy": "Data Bitmap OpenGL",
          "module": "Data.Bitmap.OpenGL",
          "name": "makeSimpleBitmapTexture",
          "normalized": "Bitmap a-\u003eIO TextureObject",
          "package": "bitmap-opengl",
          "partial": "Simple Bitmap Texture",
          "signature": "Bitmap t-\u003eIO TextureObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitmap-opengl/docs/Data-Bitmap-OpenGL.html#v:makeSimpleBitmapTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new OpenGL texture from a bitmap\n\u003c/p\u003e",
          "module": "Data.Bitmap.OpenGL",
          "name": "makeTextureFromBitmap",
          "package": "bitmap-opengl",
          "signature": "Bitmap t -\u003e Maybe CubeMapTarget -\u003e Level -\u003e PixelFormat -\u003e PixelInternalFormat -\u003e Border -\u003e IO TextureObject",
          "source": "src/Data-Bitmap-OpenGL.html#makeTextureFromBitmap",
          "type": "function"
        },
        "index": {
          "description": "Creates new OpenGL texture from bitmap",
          "hierarchy": "Data Bitmap OpenGL",
          "module": "Data.Bitmap.OpenGL",
          "name": "makeTextureFromBitmap",
          "normalized": "Bitmap a-\u003eMaybe CubeMapTarget-\u003eLevel-\u003ePixelFormat-\u003ePixelInternalFormat-\u003eBorder-\u003eIO TextureObject",
          "package": "bitmap-opengl",
          "partial": "Texture From Bitmap",
          "signature": "Bitmap t-\u003eMaybe CubeMapTarget-\u003eLevel-\u003ePixelFormat-\u003ePixelInternalFormat-\u003eBorder-\u003eIO TextureObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitmap-opengl/docs/Data-Bitmap-OpenGL.html#v:makeTextureFromBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitmap.OpenGL",
          "name": "texImageFromBitmap",
          "package": "bitmap-opengl",
          "signature": "Bitmap t -\u003e Maybe CubeMapTarget -\u003e Level -\u003e PixelFormat -\u003e PixelInternalFormat -\u003e Border -\u003e IO ()",
          "source": "src/Data-Bitmap-OpenGL.html#texImageFromBitmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitmap OpenGL",
          "module": "Data.Bitmap.OpenGL",
          "name": "texImageFromBitmap",
          "normalized": "Bitmap a-\u003eMaybe CubeMapTarget-\u003eLevel-\u003ePixelFormat-\u003ePixelInternalFormat-\u003eBorder-\u003eIO()",
          "package": "bitmap-opengl",
          "partial": "Image From Bitmap",
          "signature": "Bitmap t-\u003eMaybe CubeMapTarget-\u003eLevel-\u003ePixelFormat-\u003ePixelInternalFormat-\u003eBorder-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitmap-opengl/docs/Data-Bitmap-OpenGL.html#v:texImageFromBitmap"
      }
    }
  ]
]