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
        "word": "imagesize-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ImageSize",
          "name": "ImageSize",
          "package": "imagesize-conduit",
          "source": "src/Data-Conduit-ImageSize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "ImageSize",
          "package": "imagesize-conduit",
          "partial": "Image Size",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ImageSize",
          "name": "FileFormat",
          "package": "imagesize-conduit",
          "source": "src/Data-Conduit-ImageSize.html#FileFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "FileFormat",
          "package": "imagesize-conduit",
          "partial": "File Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#t:FileFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ImageSize",
          "name": "Size",
          "package": "imagesize-conduit",
          "source": "src/Data-Conduit-ImageSize.html#Size",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "Size",
          "package": "imagesize-conduit",
          "partial": "Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ImageSize",
          "name": "GIF",
          "package": "imagesize-conduit",
          "signature": "GIF",
          "source": "src/Data-Conduit-ImageSize.html#FileFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "GIF",
          "package": "imagesize-conduit",
          "partial": "GIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#v:GIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ImageSize",
          "name": "JPG",
          "package": "imagesize-conduit",
          "signature": "JPG",
          "source": "src/Data-Conduit-ImageSize.html#FileFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "JPG",
          "package": "imagesize-conduit",
          "partial": "JPG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#v:JPG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ImageSize",
          "name": "PNG",
          "package": "imagesize-conduit",
          "signature": "PNG",
          "source": "src/Data-Conduit-ImageSize.html#FileFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "PNG",
          "package": "imagesize-conduit",
          "partial": "PNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#v:PNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ImageSize",
          "name": "Size",
          "package": "imagesize-conduit",
          "signature": "Size",
          "source": "src/Data-Conduit-ImageSize.html#Size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "Size",
          "package": "imagesize-conduit",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#v:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ImageSize",
          "name": "height",
          "package": "imagesize-conduit",
          "signature": "Int",
          "source": "src/Data-Conduit-ImageSize.html#Size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "height",
          "package": "imagesize-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind out the size of an image.  Also returns the file format\n that parsed correctly.  Note that this function does not\n verify that the file is indeed in the format that it returns,\n since it looks only at a small part of the header.\n\u003c/p\u003e",
          "module": "Data.Conduit.ImageSize",
          "name": "sinkImageInfo",
          "package": "imagesize-conduit",
          "signature": "Consumer ByteString m (Maybe (Size, FileFormat))",
          "source": "src/Data-Conduit-ImageSize.html#sinkImageInfo",
          "type": "function"
        },
        "index": {
          "description": "Find out the size of an image Also returns the file format that parsed correctly Note that this function does not verify that the file is indeed in the format that it returns since it looks only at small part of the header",
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "sinkImageInfo",
          "normalized": "Consumer ByteString a(Maybe(Size,FileFormat))",
          "package": "imagesize-conduit",
          "partial": "Image Info",
          "signature": "Consumer ByteString m(Maybe(Size,FileFormat))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#v:sinkImageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized version of \u003ccode\u003e\u003ca\u003esinkImageInfo\u003c/a\u003e\u003c/code\u003e that returns only the\n image size.\n\u003c/p\u003e",
          "module": "Data.Conduit.ImageSize",
          "name": "sinkImageSize",
          "package": "imagesize-conduit",
          "signature": "Consumer ByteString m (Maybe Size)",
          "source": "src/Data-Conduit-ImageSize.html#sinkImageSize",
          "type": "function"
        },
        "index": {
          "description": "Specialized version of sinkImageInfo that returns only the image size",
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "sinkImageSize",
          "package": "imagesize-conduit",
          "partial": "Image Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#v:sinkImageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ImageSize",
          "name": "width",
          "package": "imagesize-conduit",
          "signature": "Int",
          "source": "src/Data-Conduit-ImageSize.html#Size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit ImageSize",
          "module": "Data.Conduit.ImageSize",
          "name": "width",
          "package": "imagesize-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagesize-conduit/docs/Data-Conduit-ImageSize.html#v:width"
      }
    }
  ]
]