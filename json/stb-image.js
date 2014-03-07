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
        "word": "stb-image"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA wrapper around \u003ccode\u003estb_image\u003c/code\u003e, Sean Barrett's public domain JPEG/PNG decoder.\n The original can be found at \u003ca\u003ehttp://nothings.org/stb_image.c\u003c/a\u003e.\n The version of \u003ccode\u003estb_image\u003c/code\u003e used here is \u003ccode\u003estbi-1.33\u003c/code\u003e. \n The current list of (partially) supported formats is JPEG, PNG, TGA, BMP, PSD.\n\u003c/p\u003e\u003cp\u003ePlease note that the library is not (fully) thread-safe! Furthermore,\n the library does not give any guarantee in case of invalid input;\n in particular it is a security risk to load untrusted image files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Image.STB",
          "name": "STB",
          "package": "stb-image",
          "source": "src/Codec-Image-STB.html",
          "type": "module"
        },
        "index": {
          "description": "wrapper around stb image Sean Barrett public domain JPEG PNG decoder The original can be found at http nothings.org stb image.c The version of stb image used here is stbi-1.33 The current list of partially supported formats is JPEG PNG TGA BMP PSD Please note that the library is not fully thread-safe Furthermore the library does not give any guarantee in case of invalid input in particular it is security risk to load untrusted image files",
          "hierarchy": "Codec Image STB",
          "module": "Codec.Image.STB",
          "name": "STB",
          "package": "stb-image",
          "partial": "STB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmap.\n\u003c/p\u003e",
          "module": "Codec.Image.STB",
          "name": "Bitmap",
          "package": "stb-image",
          "type": "data"
        },
        "index": {
          "description": "bitmap",
          "hierarchy": "Codec Image STB",
          "module": "Codec.Image.STB",
          "name": "Bitmap",
          "package": "stb-image",
          "partial": "Bitmap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#t:Bitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.STB",
          "name": "Image",
          "package": "stb-image",
          "source": "src/Codec-Image-STB.html#Image",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Image STB",
          "module": "Codec.Image.STB",
          "name": "Image",
          "package": "stb-image",
          "partial": "Image",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes an image from a compressed format stored in a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n Supported formats (see \u003ccode\u003estb_image.c\u003c/code\u003e for details!): \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e JPEG baseline (no JPEG progressive, no oddball channel decimations)\n\u003c/li\u003e\u003cli\u003e PNG 8-bit only (8 bit per component, that is)\n\u003c/li\u003e\u003cli\u003e BMP non-1bpp, non-RLE\n\u003c/li\u003e\u003cli\u003e TGA (not sure what subset, if a subset)\n\u003c/li\u003e\u003cli\u003e PSD (composite view only, no extra channels)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the operation fails, we return an error message.\n\u003c/p\u003e",
          "module": "Codec.Image.STB",
          "name": "decodeImage",
          "package": "stb-image",
          "signature": "ByteString -\u003e IO (Either String Image)",
          "source": "src/Codec-Image-STB.html#decodeImage",
          "type": "function"
        },
        "index": {
          "description": "Decodes an image from compressed format stored in strict ByteString Supported formats see stb image.c for details JPEG baseline no JPEG progressive no oddball channel decimations PNG bit only bit per component that is BMP non-1bpp non-RLE TGA not sure what subset if subset PSD composite view only no extra channels If the operation fails we return an error message",
          "hierarchy": "Codec Image STB",
          "module": "Codec.Image.STB",
          "name": "decodeImage",
          "normalized": "ByteString-\u003eIO(Either String Image)",
          "package": "stb-image",
          "partial": "Image",
          "signature": "ByteString-\u003eIO(Either String Image)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#v:decodeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes an image, with the number of components per pixel forced by the user.\n\u003c/p\u003e",
          "module": "Codec.Image.STB",
          "name": "decodeImage'",
          "package": "stb-image",
          "signature": "Int -\u003e ByteString -\u003e IO (Either String Image)",
          "source": "src/Codec-Image-STB.html#decodeImage%27",
          "type": "function"
        },
        "index": {
          "description": "Decodes an image with the number of components per pixel forced by the user",
          "hierarchy": "Codec Image STB",
          "module": "Codec.Image.STB",
          "name": "decodeImage'",
          "normalized": "Int-\u003eByteString-\u003eIO(Either String Image)",
          "package": "stb-image",
          "partial": "Image'",
          "signature": "Int-\u003eByteString-\u003eIO(Either String Image)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#v:decodeImage-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads an image from a file. Catches IO exceptions and converts them to an error message.  \n\u003c/p\u003e",
          "module": "Codec.Image.STB",
          "name": "loadImage",
          "package": "stb-image",
          "signature": "FilePath -\u003e IO (Either String Image)",
          "source": "src/Codec-Image-STB.html#loadImage",
          "type": "function"
        },
        "index": {
          "description": "Loads an image from file Catches IO exceptions and converts them to an error message",
          "hierarchy": "Codec Image STB",
          "module": "Codec.Image.STB",
          "name": "loadImage",
          "normalized": "FilePath-\u003eIO(Either String Image)",
          "package": "stb-image",
          "partial": "Image",
          "signature": "FilePath-\u003eIO(Either String Image)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#v:loadImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce the number of components in the image.\n\u003c/p\u003e",
          "module": "Codec.Image.STB",
          "name": "loadImage'",
          "package": "stb-image",
          "signature": "FilePath -\u003e Int -\u003e IO (Either String Image)",
          "source": "src/Codec-Image-STB.html#loadImage%27",
          "type": "function"
        },
        "index": {
          "description": "Force the number of components in the image",
          "hierarchy": "Codec Image STB",
          "module": "Codec.Image.STB",
          "name": "loadImage'",
          "normalized": "FilePath-\u003eInt-\u003eIO(Either String Image)",
          "package": "stb-image",
          "partial": "Image'",
          "signature": "FilePath-\u003eInt-\u003eIO(Either String Image)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#v:loadImage-39-"
      }
    }
  ]
]