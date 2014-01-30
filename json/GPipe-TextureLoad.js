[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the means to load all kinds of textures from file.\n It's based on the stb-image package, and inherits its strengths and limitations.\n Specifically, it handles a subset of the JPEG, PNG, TGA, BMP and PSD file formats, but is not\n entirely thread safe. See \u003ca\u003ehttp://hackage.haskell.org/package/stb-image\u003c/a\u003e for more information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.GPipe.Texture.Load",
        "fct-package": "GPipe-TextureLoad",
        "fct-signature": "module",
        "fct-source": "src/Graphics-GPipe-Texture-Load.html",
        "fct-type": "module",
        "title": "Load"
      },
      "index": {
        "description": "This module provides the means to load all kinds of textures from file It based on the stb-image package and inherits its strengths and limitations Specifically it handles subset of the JPEG PNG TGA BMP and PSD file formats but is not entirely thread safe See http hackage.haskell.org package stb-image for more information",
        "hierarchy": "Graphics GPipe Texture Load",
        "module": "Graphics.GPipe.Texture.Load",
        "name": "Load",
        "normalized": "",
        "package": "GPipe-TextureLoad",
        "partial": "Load",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#t:LoadableTexture",
      "description": {
        "fct-descr": "\u003cp\u003eProvides the general way of loading any kind of textures. A 3D texture is assumed to be an array of square images\n tiled vertically in the image file. Cube textures are assumed to be composed of 6 equally sized images\n tiled vertically. No additional mipmaps are loaded.\n\u003c/p\u003e\u003cp\u003eFilesystem errors or bad texture dimensions (e.g. loading a cube texture from a file where the height\n is not a multiple of 6) are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Graphics.GPipe.Texture.Load",
        "fct-package": "GPipe-TextureLoad",
        "fct-signature": "class",
        "fct-source": "src/Graphics-GPipe-Texture-Load.html#LoadableTexture",
        "fct-type": "class",
        "title": "LoadableTexture"
      },
      "index": {
        "description": "Provides the general way of loading any kind of textures texture is assumed to be an array of square images tiled vertically in the image file Cube textures are assumed to be composed of equally sized images tiled vertically No additional mipmaps are loaded Filesystem errors or bad texture dimensions e.g loading cube texture from file where the height is not multiple of are thrown as IOError",
        "hierarchy": "Graphics GPipe Texture Load",
        "module": "Graphics.GPipe.Texture.Load",
        "name": "LoadableTexture",
        "normalized": "",
        "package": "GPipe-TextureLoad",
        "partial": "Loadable Texture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#t:LoadableTexture3D",
      "description": {
        "fct-descr": "\u003cp\u003eProvides an alternative way of loading \u003ccode\u003e\u003ca\u003eTexture3D\u003c/a\u003e\u003c/code\u003es that are arrays of non-square images tiled vertically. No additional mipmaps are loaded.\n\u003c/p\u003e\u003cp\u003eFilesystem errors or bad texture dimensions (i.e. the height of the image is not a multiple of the supplied depth)\n are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Graphics.GPipe.Texture.Load",
        "fct-package": "GPipe-TextureLoad",
        "fct-signature": "class",
        "fct-source": "src/Graphics-GPipe-Texture-Load.html#LoadableTexture3D",
        "fct-type": "class",
        "title": "LoadableTexture3D"
      },
      "index": {
        "description": "Provides an alternative way of loading Texture3D that are arrays of non-square images tiled vertically No additional mipmaps are loaded Filesystem errors or bad texture dimensions i.e the height of the image is not multiple of the supplied depth are thrown as IOError",
        "hierarchy": "Graphics GPipe Texture Load",
        "module": "Graphics.GPipe.Texture.Load",
        "name": "LoadableTexture3D",
        "normalized": "",
        "package": "GPipe-TextureLoad",
        "partial": "Loadable Texture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#v:loadTexture",
      "description": {
        "fct-module": "Graphics.GPipe.Texture.Load",
        "fct-package": "GPipe-TextureLoad",
        "fct-signature": "TextureFormat t -\u003e FilePath -\u003e IO t",
        "fct-source": "src/Graphics-GPipe-Texture-Load.html#loadTexture",
        "fct-type": "method",
        "title": "loadTexture"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics GPipe Texture Load",
        "module": "Graphics.GPipe.Texture.Load",
        "name": "loadTexture",
        "normalized": "TextureFormat a-\u003eFilePath-\u003eIO a",
        "package": "GPipe-TextureLoad",
        "partial": "Texture",
        "signature": "TextureFormat t-\u003eFilePath-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GPipe-TextureLoad/docs/Graphics-GPipe-Texture-Load.html#v:loadTexture3D",
      "description": {
        "fct-module": "Graphics.GPipe.Texture.Load",
        "fct-package": "GPipe-TextureLoad",
        "fct-signature": "loadTexture3D",
        "fct-source": "src/Graphics-GPipe-Texture-Load.html#loadTexture3D",
        "fct-type": "method",
        "title": "loadTexture3D"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics GPipe Texture Load",
        "module": "Graphics.GPipe.Texture.Load",
        "name": "loadTexture3D",
        "normalized": "",
        "package": "GPipe-TextureLoad",
        "partial": "Texture",
        "signature": ""
      }
    }
  }
]