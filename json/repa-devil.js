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
        "word": "repa-devil"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write images in many formats, representing them in Haskell\n as a 3-dimensional \u003cem\u003erepa\u003c/em\u003e array. Image parsing and decoding is done\n by the \u003cem\u003eDevelopers Image Library\u003c/em\u003e, DevIL.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Many formats are supported, including .png, .bmp, .jpg, .tif\n\u003c/li\u003e\u003cli\u003e Image format parsing is determined by the filepath extension type.\n\u003c/li\u003e\u003cli\u003e Only RGB, RGBA, BGR, BGRA and Greyscale images are supported.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample: read a .png file into a repa array, and write it out as a .jpg\n\u003c/p\u003e\u003cpre\u003e main = runIL $ do\n          x \u003c- readImage \"/tmp/y.png\" \n          writeImage \"/tmp/x.jpg\" x\n\u003c/pre\u003e\u003cp\u003eNote that as DevIL is stateful, we ensure the library is initialized\n by running image manipulation functions in the \u003cem\u003eIL\u003c/em\u003e monad, a wrapper\n over IO that ensures the library has been initialized. It is a type\n error to call image functions outside of the \u003cem\u003eIL\u003c/em\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "DevIL",
          "package": "repa-devil",
          "source": "src/Data-Array-Repa-IO-DevIL.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write images in many formats representing them in Haskell as dimensional repa array Image parsing and decoding is done by the Developers Image Library DevIL Many formats are supported including png bmp jpg tif Image format parsing is determined by the filepath extension type Only RGB RGBA BGR BGRA and Greyscale images are supported Example read png file into repa array and write it out as jpg main runIL do readImage tmp y.png writeImage tmp x.jpg Note that as DevIL is stateful we ensure the library is initialized by running image manipulation functions in the IL monad wrapper over IO that ensures the library has been initialized It is type error to call image functions outside of the IL monad",
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "DevIL",
          "package": "repa-devil",
          "partial": "Dev IL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe IL monad. Provides statically-guaranteed access to an initialized IL\n context.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "IL",
          "package": "repa-devil",
          "source": "src/Data-Array-Repa-IO-DevIL.html#IL",
          "type": "data"
        },
        "index": {
          "description": "The IL monad Provides statically-guaranteed access to an initialized IL context",
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "IL",
          "package": "repa-devil",
          "partial": "IL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#t:IL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRGBA, RGB, BGRA and BGR images are 3D repa arrays where indices are\n \u003cem\u003eZ :. row :. column :. color channel\u003c/em\u003e. Grey images are 2D repa arrays.\n\u003c/p\u003e\u003cp\u003eThe origin (\u003cem\u003eZ :. 0 :. 0\u003c/em\u003e) is on the lower left point of the image.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "Image",
          "package": "repa-devil",
          "source": "src/Data-Array-Repa-IO-DevIL.html#Image",
          "type": "data"
        },
        "index": {
          "description": "RGBA RGB BGRA and BGR images are repa arrays where indices are row column color channel Grey images are repa arrays The origin is on the lower left point of the image",
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "Image",
          "package": "repa-devil",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "BGR",
          "package": "repa-devil",
          "signature": "BGR (Array F DIM3 Word8)",
          "source": "src/Data-Array-Repa-IO-DevIL.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "BGR",
          "package": "repa-devil",
          "partial": "BGR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:BGR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "BGRA",
          "package": "repa-devil",
          "signature": "BGRA (Array F DIM3 Word8)",
          "source": "src/Data-Array-Repa-IO-DevIL.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "BGRA",
          "package": "repa-devil",
          "partial": "BGRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:BGRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "Grey",
          "package": "repa-devil",
          "signature": "Grey (Array F DIM2 Word8)",
          "source": "src/Data-Array-Repa-IO-DevIL.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "Grey",
          "package": "repa-devil",
          "partial": "Grey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:Grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "RGB",
          "package": "repa-devil",
          "signature": "RGB (Array F DIM3 Word8)",
          "source": "src/Data-Array-Repa-IO-DevIL.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "RGB",
          "package": "repa-devil",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "RGBA",
          "package": "repa-devil",
          "signature": "RGBA (Array F DIM3 Word8)",
          "source": "src/Data-Array-Repa-IO-DevIL.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "RGBA",
          "package": "repa-devil",
          "partial": "RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:RGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads an image into a repa array. It uses directly the C array using the\n repa's foreign arrays wrapper.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e main = do\n    x \u003c- runIL $ readImage \"/tmp/x.png\"\n    .. operations on x ..\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The image input type is determined by the filename extension.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "readImage",
          "package": "repa-devil",
          "signature": "FilePath -\u003e IL Image",
          "source": "src/Data-Array-Repa-IO-DevIL.html#readImage",
          "type": "function"
        },
        "index": {
          "description": "Reads an image into repa array It uses directly the array using the repa foreign arrays wrapper Example main do runIL readImage tmp x.png operations on Note The image input type is determined by the filename extension",
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "readImage",
          "normalized": "FilePath-\u003eIL Image",
          "package": "repa-devil",
          "partial": "Image",
          "signature": "FilePath-\u003eIL Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:readImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRunning code in the \u003cem\u003eIL\u003c/em\u003e monad. This is a simple wrapper over \u003cem\u003eIO\u003c/em\u003e\n that guarantees the DevIL library has been initialized before you run\n functions on it.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "runIL",
          "package": "repa-devil",
          "signature": "IL a -\u003e IO a",
          "source": "src/Data-Array-Repa-IO-DevIL.html#runIL",
          "type": "function"
        },
        "index": {
          "description": "Running code in the IL monad This is simple wrapper over IO that guarantees the DevIL library has been initialized before you run functions on it",
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "runIL",
          "normalized": "IL a-\u003eIO a",
          "package": "repa-devil",
          "partial": "IL",
          "signature": "IL a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:runIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites an \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e to a file. The image array must be represented as foreign\n buffers. You can use \u003ccode\u003ecopyS\u003c/code\u003e or \u003ccode\u003ecopyP\u003c/code\u003e to convert the array.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The image output type is determined by the filename extension.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "writeImage",
          "package": "repa-devil",
          "signature": "FilePath -\u003e Image -\u003e IL ()",
          "source": "src/Data-Array-Repa-IO-DevIL.html#writeImage",
          "type": "function"
        },
        "index": {
          "description": "Writes an Image to file The image array must be represented as foreign buffers You can use copyS or copyP to convert the array Note The image output type is determined by the filename extension",
          "hierarchy": "Data Array Repa IO DevIL",
          "module": "Data.Array.Repa.IO.DevIL",
          "name": "writeImage",
          "normalized": "FilePath-\u003eImage-\u003eIL()",
          "package": "repa-devil",
          "partial": "Image",
          "signature": "FilePath-\u003eImage-\u003eIL()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-devil/docs/Data-Array-Repa-IO-DevIL.html#v:writeImage"
      }
    }
  ]
]