[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#",
      "description": {
        "fct-module": "Codec.Image.DevIL",
        "fct-package": "Codec-Image-DevIL",
        "fct-signature": "module",
        "fct-source": "src/Codec-Image-DevIL.html",
        "fct-type": "module",
        "title": "DevIL"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Image DevIL",
        "module": "Codec.Image.DevIL",
        "name": "DevIL",
        "normalized": "",
        "package": "Codec-Image-DevIL",
        "partial": "Dev IL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Codec.Image.DevIL",
        "fct-package": "Codec-Image-DevIL",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Codec Image DevIL",
        "module": "Codec.Image.DevIL",
        "name": "Word8",
        "normalized": "",
        "package": "Codec-Image-DevIL",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#v:ilInit",
      "description": {
        "fct-module": "Codec.Image.DevIL",
        "fct-package": "Codec-Image-DevIL",
        "fct-signature": "IO ()",
        "fct-source": "src/Codec-Image-DevIL.html#ilInit",
        "fct-type": "function",
        "title": "ilInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Image DevIL",
        "module": "Codec.Image.DevIL",
        "name": "ilInit",
        "normalized": "IO()",
        "package": "Codec-Image-DevIL",
        "partial": "Init",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#v:readImage",
      "description": {
        "fct-descr": "\u003cp\u003eReads an image into an RGBA array.  Indices are (row,column,color-channel).\n\u003c/p\u003e",
        "fct-module": "Codec.Image.DevIL",
        "fct-package": "Codec-Image-DevIL",
        "fct-signature": "FilePath -\u003e IO (UArray (Int, Int, Int) Word8)",
        "fct-source": "src/Codec-Image-DevIL.html#readImage",
        "fct-type": "function",
        "title": "readImage"
      },
      "index": {
        "description": "Reads an image into an RGBA array Indices are row column color-channel",
        "hierarchy": "Codec Image DevIL",
        "module": "Codec.Image.DevIL",
        "name": "readImage",
        "normalized": "FilePath-\u003eIO(UArray(Int,Int,Int)Word)",
        "package": "Codec-Image-DevIL",
        "partial": "Image",
        "signature": "FilePath-\u003eIO(UArray(Int,Int,Int)Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#v:writeImage",
      "description": {
        "fct-descr": "\u003cp\u003eWrites an RGBA array to a file.  Indices are (row,column,color-channel).\n\u003c/p\u003e",
        "fct-module": "Codec.Image.DevIL",
        "fct-package": "Codec-Image-DevIL",
        "fct-signature": "FilePath -\u003e UArray (Int, Int, Int) Word8 -\u003e IO ()",
        "fct-source": "src/Codec-Image-DevIL.html#writeImage",
        "fct-type": "function",
        "title": "writeImage"
      },
      "index": {
        "description": "Writes an RGBA array to file Indices are row column color-channel",
        "hierarchy": "Codec Image DevIL",
        "module": "Codec.Image.DevIL",
        "name": "writeImage",
        "normalized": "FilePath-\u003eUArray(Int,Int,Int)Word-\u003eIO()",
        "package": "Codec-Image-DevIL",
        "partial": "Image",
        "signature": "FilePath-\u003eUArray(Int,Int,Int)Word-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#v:writeImageFromPtr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an image from a pointer to raw RGBA data.  Careful!  \n The size tuple is (rows, columns), not (width, height).\n\u003c/p\u003e",
        "fct-module": "Codec.Image.DevIL",
        "fct-package": "Codec-Image-DevIL",
        "fct-signature": "FilePath -\u003e (Int, Int) -\u003e Ptr Word8 -\u003e IO ()",
        "fct-source": "src/Codec-Image-DevIL.html#writeImageFromPtr",
        "fct-type": "function",
        "title": "writeImageFromPtr"
      },
      "index": {
        "description": "Write an image from pointer to raw RGBA data Careful The size tuple is rows columns not width height",
        "hierarchy": "Codec Image DevIL",
        "module": "Codec.Image.DevIL",
        "name": "writeImageFromPtr",
        "normalized": "FilePath-\u003e(Int,Int)-\u003ePtr Word-\u003eIO()",
        "package": "Codec-Image-DevIL",
        "partial": "Image From Ptr",
        "signature": "FilePath-\u003e(Int,Int)-\u003ePtr Word-\u003eIO()"
      }
    }
  }
]