[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write images in many formats, representing them in Haskell\n as a 3-dimensional \u003cem\u003erepa\u003c/em\u003e array. Image parsing and decoding is done\n by the \u003cem\u003eDevelopers Image Library\u003c/em\u003e, DevIL.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Many formats are supported, including .png, .bmp, .jpg, .tif\n\u003c/li\u003e\u003cli\u003e Image format parsing is determined by the filepath extension type.\n\u003c/li\u003e\u003cli\u003e Only RGB, RGBA, BGR, BGRA and Greyscale images are supported.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample: read a .png file into a repa array, and write it out as a .jpg\n\u003c/p\u003e\u003cpre\u003e main = runIL $ do\n          x \u003c- readImage \"/tmp/y.png\" \n          writeImage \"/tmp/x.jpg\" x\n\u003c/pre\u003e\u003cp\u003eNote that as DevIL is stateful, we ensure the library is initialized\n by running image manipulation functions in the \u003cem\u003eIL\u003c/em\u003e monad, a wrapper\n over IO that ensures the library has been initialized. It is a type\n error to call image functions outside of the \u003cem\u003eIL\u003c/em\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html",
        "fct-type": "module",
        "title": "DevIL"
      },
      "index": {
        "description": "Read and write images in many formats representing them in Haskell as dimensional repa array Image parsing and decoding is done by the Developers Image Library DevIL Many formats are supported including png bmp jpg tif Image format parsing is determined by the filepath extension type Only RGB RGBA BGR BGRA and Greyscale images are supported Example read png file into repa array and write it out as jpg main runIL do readImage tmp y.png writeImage tmp x.jpg Note that as DevIL is stateful we ensure the library is initialized by running image manipulation functions in the IL monad wrapper over IO that ensures the library has been initialized It is type error to call image functions outside of the IL monad",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "DevIL",
        "normalized": "",
        "package": "repa-devil",
        "partial": "Dev IL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#t:IL",
      "description": {
        "fct-descr": "\u003cp\u003eThe IL monad. Provides statically-guaranteed access to an initialized IL\n context.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#IL",
        "fct-type": "data",
        "title": "IL"
      },
      "index": {
        "description": "The IL monad Provides statically-guaranteed access to an initialized IL context",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "IL",
        "normalized": "",
        "package": "repa-devil",
        "partial": "IL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#t:Image",
      "description": {
        "fct-descr": "\u003cp\u003eRGBA, RGB, BGRA and BGR images are 3D repa arrays where indices are\n \u003cem\u003eZ :. row :. column :. color channel\u003c/em\u003e. Grey images are 2D repa arrays.\n\u003c/p\u003e\u003cp\u003eThe origin (\u003cem\u003eZ :. 0 :. 0\u003c/em\u003e) is on the lower left point of the image.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#Image",
        "fct-type": "data",
        "title": "Image"
      },
      "index": {
        "description": "RGBA RGB BGRA and BGR images are repa arrays where indices are row column color channel Grey images are repa arrays The origin is on the lower left point of the image",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "Image",
        "normalized": "",
        "package": "repa-devil",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:BGR",
      "description": {
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "BGR (Array F DIM3 Word8)",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#Image",
        "fct-type": "function",
        "title": "BGR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "BGR",
        "normalized": "",
        "package": "repa-devil",
        "partial": "BGR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:BGRA",
      "description": {
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "BGRA (Array F DIM3 Word8)",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#Image",
        "fct-type": "function",
        "title": "BGRA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "BGRA",
        "normalized": "",
        "package": "repa-devil",
        "partial": "BGRA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:Grey",
      "description": {
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "Grey (Array F DIM2 Word8)",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#Image",
        "fct-type": "function",
        "title": "Grey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "Grey",
        "normalized": "",
        "package": "repa-devil",
        "partial": "Grey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:RGB",
      "description": {
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "RGB (Array F DIM3 Word8)",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#Image",
        "fct-type": "function",
        "title": "RGB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "RGB",
        "normalized": "",
        "package": "repa-devil",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:RGBA",
      "description": {
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "RGBA (Array F DIM3 Word8)",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#Image",
        "fct-type": "function",
        "title": "RGBA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "RGBA",
        "normalized": "",
        "package": "repa-devil",
        "partial": "RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:readImage",
      "description": {
        "fct-descr": "\u003cp\u003eReads an image into a repa array. It uses directly the C array using the\n repa's foreign arrays wrapper.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e main = do\n    x \u003c- runIL $ readImage \"/tmp/x.png\"\n    .. operations on x ..\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The image input type is determined by the filename extension.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "FilePath -\u003e IL Image",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#readImage",
        "fct-type": "function",
        "title": "readImage"
      },
      "index": {
        "description": "Reads an image into repa array It uses directly the array using the repa foreign arrays wrapper Example main do runIL readImage tmp x.png operations on Note The image input type is determined by the filename extension",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "readImage",
        "normalized": "FilePath-\u003eIL Image",
        "package": "repa-devil",
        "partial": "Image",
        "signature": "FilePath-\u003eIL Image"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:runIL",
      "description": {
        "fct-descr": "\u003cp\u003eRunning code in the \u003cem\u003eIL\u003c/em\u003e monad. This is a simple wrapper over \u003cem\u003eIO\u003c/em\u003e\n that guarantees the DevIL library has been initialized before you run\n functions on it.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "IL a -\u003e IO a",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#runIL",
        "fct-type": "function",
        "title": "runIL"
      },
      "index": {
        "description": "Running code in the IL monad This is simple wrapper over IO that guarantees the DevIL library has been initialized before you run functions on it",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "runIL",
        "normalized": "IL a-\u003eIO a",
        "package": "repa-devil",
        "partial": "IL",
        "signature": "IL a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:writeImage",
      "description": {
        "fct-descr": "\u003cp\u003eWrites an \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e to a file. The image array must be represented as foreign\n buffers. You can use \u003ccode\u003ecopyS\u003c/code\u003e or \u003ccode\u003ecopyP\u003c/code\u003e to convert the array.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The image output type is determined by the filename extension.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.IO.DevIL",
        "fct-package": "repa-devil",
        "fct-signature": "FilePath -\u003e Image -\u003e IL ()",
        "fct-source": "src/Data-Array-Repa-IO-DevIL.html#writeImage",
        "fct-type": "function",
        "title": "writeImage"
      },
      "index": {
        "description": "Writes an Image to file The image array must be represented as foreign buffers You can use copyS or copyP to convert the array Note The image output type is determined by the filename extension",
        "hierarchy": "Data Array Repa IO DevIL",
        "module": "Data.Array.Repa.IO.DevIL",
        "name": "writeImage",
        "normalized": "FilePath-\u003eImage-\u003eIL()",
        "package": "repa-devil",
        "partial": "Image",
        "signature": "FilePath-\u003eImage-\u003eIL()"
      }
    }
  }
]