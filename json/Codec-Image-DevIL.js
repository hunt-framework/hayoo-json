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
        "word": "Codec-Image-DevIL"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.DevIL",
          "name": "DevIL",
          "package": "Codec-Image-DevIL",
          "source": "src/Codec-Image-DevIL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Image DevIL",
          "module": "Codec.Image.DevIL",
          "name": "DevIL",
          "package": "Codec-Image-DevIL",
          "partial": "Dev IL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Codec.Image.DevIL",
          "name": "Word8",
          "package": "Codec-Image-DevIL",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Codec Image DevIL",
          "module": "Codec.Image.DevIL",
          "name": "Word8",
          "package": "Codec-Image-DevIL",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.DevIL",
          "name": "ilInit",
          "package": "Codec-Image-DevIL",
          "signature": "IO ()",
          "source": "src/Codec-Image-DevIL.html#ilInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Image DevIL",
          "module": "Codec.Image.DevIL",
          "name": "ilInit",
          "normalized": "IO()",
          "package": "Codec-Image-DevIL",
          "partial": "Init",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#v:ilInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads an image into an RGBA array.  Indices are (row,column,color-channel).\n\u003c/p\u003e",
          "module": "Codec.Image.DevIL",
          "name": "readImage",
          "package": "Codec-Image-DevIL",
          "signature": "FilePath -\u003e IO (UArray (Int, Int, Int) Word8)",
          "source": "src/Codec-Image-DevIL.html#readImage",
          "type": "function"
        },
        "index": {
          "description": "Reads an image into an RGBA array Indices are row column color-channel",
          "hierarchy": "Codec Image DevIL",
          "module": "Codec.Image.DevIL",
          "name": "readImage",
          "normalized": "FilePath-\u003eIO(UArray(Int,Int,Int)Word)",
          "package": "Codec-Image-DevIL",
          "partial": "Image",
          "signature": "FilePath-\u003eIO(UArray(Int,Int,Int)Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#v:readImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites an RGBA array to a file.  Indices are (row,column,color-channel).\n\u003c/p\u003e",
          "module": "Codec.Image.DevIL",
          "name": "writeImage",
          "package": "Codec-Image-DevIL",
          "signature": "FilePath -\u003e UArray (Int, Int, Int) Word8 -\u003e IO ()",
          "source": "src/Codec-Image-DevIL.html#writeImage",
          "type": "function"
        },
        "index": {
          "description": "Writes an RGBA array to file Indices are row column color-channel",
          "hierarchy": "Codec Image DevIL",
          "module": "Codec.Image.DevIL",
          "name": "writeImage",
          "normalized": "FilePath-\u003eUArray(Int,Int,Int)Word-\u003eIO()",
          "package": "Codec-Image-DevIL",
          "partial": "Image",
          "signature": "FilePath-\u003eUArray(Int,Int,Int)Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#v:writeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an image from a pointer to raw RGBA data.  Careful!  \n The size tuple is (rows, columns), not (width, height).\n\u003c/p\u003e",
          "module": "Codec.Image.DevIL",
          "name": "writeImageFromPtr",
          "package": "Codec-Image-DevIL",
          "signature": "FilePath -\u003e (Int, Int) -\u003e Ptr Word8 -\u003e IO ()",
          "source": "src/Codec-Image-DevIL.html#writeImageFromPtr",
          "type": "function"
        },
        "index": {
          "description": "Write an image from pointer to raw RGBA data Careful The size tuple is rows columns not width height",
          "hierarchy": "Codec Image DevIL",
          "module": "Codec.Image.DevIL",
          "name": "writeImageFromPtr",
          "normalized": "FilePath-\u003e(Int,Int)-\u003ePtr Word-\u003eIO()",
          "package": "Codec-Image-DevIL",
          "partial": "Image From Ptr",
          "signature": "FilePath-\u003e(Int,Int)-\u003ePtr Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Image-DevIL/docs/Codec-Image-DevIL.html#v:writeImageFromPtr"
      }
    }
  ]
]