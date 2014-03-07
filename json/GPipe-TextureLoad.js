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
        "word": "GPipe-TextureLoad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the means to load all kinds of textures from file.\n It's based on the stb-image package, and inherits its strengths and limitations.\n Specifically, it handles a subset of the JPEG, PNG, TGA, BMP and PSD file formats, but is not\n entirely thread safe. See \u003ca\u003ehttp://hackage.haskell.org/package/stb-image\u003c/a\u003e for more information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GPipe.Texture.Load",
          "name": "Load",
          "package": "GPipe-TextureLoad",
          "source": "src/Graphics-GPipe-Texture-Load.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the means to load all kinds of textures from file It based on the stb-image package and inherits its strengths and limitations Specifically it handles subset of the JPEG PNG TGA BMP and PSD file formats but is not entirely thread safe See http hackage.haskell.org package stb-image for more information",
          "hierarchy": "Graphics GPipe Texture Load",
          "module": "Graphics.GPipe.Texture.Load",
          "name": "Load",
          "package": "GPipe-TextureLoad",
          "partial": "Load",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides the general way of loading any kind of textures. A 3D texture is assumed to be an array of square images\n tiled vertically in the image file. Cube textures are assumed to be composed of 6 equally sized images\n tiled vertically. No additional mipmaps are loaded.\n\u003c/p\u003e\u003cp\u003eFilesystem errors or bad texture dimensions (e.g. loading a cube texture from a file where the height\n is not a multiple of 6) are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture.Load",
          "name": "LoadableTexture",
          "package": "GPipe-TextureLoad",
          "source": "src/Graphics-GPipe-Texture-Load.html#LoadableTexture",
          "type": "class"
        },
        "index": {
          "description": "Provides the general way of loading any kind of textures texture is assumed to be an array of square images tiled vertically in the image file Cube textures are assumed to be composed of equally sized images tiled vertically No additional mipmaps are loaded Filesystem errors or bad texture dimensions e.g loading cube texture from file where the height is not multiple of are thrown as IOError",
          "hierarchy": "Graphics GPipe Texture Load",
          "module": "Graphics.GPipe.Texture.Load",
          "name": "LoadableTexture",
          "package": "GPipe-TextureLoad",
          "partial": "Loadable Texture",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#t:LoadableTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides an alternative way of loading \u003ccode\u003e\u003ca\u003eTexture3D\u003c/a\u003e\u003c/code\u003es that are arrays of non-square images tiled vertically. No additional mipmaps are loaded.\n\u003c/p\u003e\u003cp\u003eFilesystem errors or bad texture dimensions (i.e. the height of the image is not a multiple of the supplied depth)\n are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.GPipe.Texture.Load",
          "name": "LoadableTexture3D",
          "package": "GPipe-TextureLoad",
          "source": "src/Graphics-GPipe-Texture-Load.html#LoadableTexture3D",
          "type": "class"
        },
        "index": {
          "description": "Provides an alternative way of loading Texture3D that are arrays of non-square images tiled vertically No additional mipmaps are loaded Filesystem errors or bad texture dimensions i.e the height of the image is not multiple of the supplied depth are thrown as IOError",
          "hierarchy": "Graphics GPipe Texture Load",
          "module": "Graphics.GPipe.Texture.Load",
          "name": "LoadableTexture3D",
          "package": "GPipe-TextureLoad",
          "partial": "Loadable Texture",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#t:LoadableTexture3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Texture.Load",
          "name": "loadTexture",
          "package": "GPipe-TextureLoad",
          "signature": "TextureFormat t -\u003e FilePath -\u003e IO t",
          "source": "src/Graphics-GPipe-Texture-Load.html#loadTexture",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Texture Load",
          "module": "Graphics.GPipe.Texture.Load",
          "name": "loadTexture",
          "normalized": "TextureFormat a-\u003eFilePath-\u003eIO a",
          "package": "GPipe-TextureLoad",
          "partial": "Texture",
          "signature": "TextureFormat t-\u003eFilePath-\u003eIO t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#v:loadTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GPipe.Texture.Load",
          "name": "loadTexture3D",
          "package": "GPipe-TextureLoad",
          "signature": "loadTexture3D",
          "source": "src/Graphics-GPipe-Texture-Load.html#loadTexture3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GPipe Texture Load",
          "module": "Graphics.GPipe.Texture.Load",
          "name": "loadTexture3D",
          "package": "GPipe-TextureLoad",
          "partial": "Texture",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#v:loadTexture3D"
      }
    }
  ]
]