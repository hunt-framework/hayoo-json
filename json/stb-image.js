[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA wrapper around \u003ccode\u003estb_image\u003c/code\u003e, Sean Barrett's public domain JPEG/PNG decoder.\n The original can be found at \u003ca\u003ehttp://nothings.org/stb_image.c\u003c/a\u003e.\n The version of \u003ccode\u003estb_image\u003c/code\u003e used here is \u003ccode\u003estbi-1.33\u003c/code\u003e. \n The current list of (partially) supported formats is JPEG, PNG, TGA, BMP, PSD.\n\u003c/p\u003e\u003cp\u003ePlease note that the library is not (fully) thread-safe! Furthermore,\n the library does not give any guarantee in case of invalid input;\n in particular it is a security risk to load untrusted image files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Image.STB",
        "fct-package": "stb-image",
        "fct-signature": "module",
        "fct-source": "src/Codec-Image-STB.html",
        "fct-type": "module",
        "title": "STB"
      },
      "index": {
        "description": "wrapper around stb image Sean Barrett public domain JPEG PNG decoder The original can be found at http nothings.org stb image.c The version of stb image used here is stbi-1.33 The current list of partially supported formats is JPEG PNG TGA BMP PSD Please note that the library is not fully thread-safe Furthermore the library does not give any guarantee in case of invalid input in particular it is security risk to load untrusted image files",
        "hierarchy": "Codec Image STB",
        "module": "Codec.Image.STB",
        "name": "STB",
        "normalized": "",
        "package": "stb-image",
        "partial": "STB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#t:Bitmap",
      "description": {
        "fct-descr": "\u003cp\u003eA bitmap.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.STB",
        "fct-package": "stb-image",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Bitmap"
      },
      "index": {
        "description": "bitmap",
        "hierarchy": "Codec Image STB",
        "module": "Codec.Image.STB",
        "name": "Bitmap",
        "normalized": "",
        "package": "stb-image",
        "partial": "Bitmap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#t:Image",
      "description": {
        "fct-module": "Codec.Image.STB",
        "fct-package": "stb-image",
        "fct-signature": "type",
        "fct-source": "src/Codec-Image-STB.html#Image",
        "fct-type": "type",
        "title": "Image"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Image STB",
        "module": "Codec.Image.STB",
        "name": "Image",
        "normalized": "",
        "package": "stb-image",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#v:decodeImage",
      "description": {
        "fct-descr": "\u003cp\u003eDecodes an image from a compressed format stored in a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n Supported formats (see \u003ccode\u003estb_image.c\u003c/code\u003e for details!): \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e JPEG baseline (no JPEG progressive, no oddball channel decimations)\n\u003c/li\u003e\u003cli\u003e PNG 8-bit only (8 bit per component, that is)\n\u003c/li\u003e\u003cli\u003e BMP non-1bpp, non-RLE\n\u003c/li\u003e\u003cli\u003e TGA (not sure what subset, if a subset)\n\u003c/li\u003e\u003cli\u003e PSD (composite view only, no extra channels)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the operation fails, we return an error message.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.STB",
        "fct-package": "stb-image",
        "fct-signature": "ByteString -\u003e IO (Either String Image)",
        "fct-source": "src/Codec-Image-STB.html#decodeImage",
        "fct-type": "function",
        "title": "decodeImage"
      },
      "index": {
        "description": "Decodes an image from compressed format stored in strict ByteString Supported formats see stb image.c for details JPEG baseline no JPEG progressive no oddball channel decimations PNG bit only bit per component that is BMP non-1bpp non-RLE TGA not sure what subset if subset PSD composite view only no extra channels If the operation fails we return an error message",
        "hierarchy": "Codec Image STB",
        "module": "Codec.Image.STB",
        "name": "decodeImage",
        "normalized": "ByteString-\u003eIO(Either String Image)",
        "package": "stb-image",
        "partial": "Image",
        "signature": "ByteString-\u003eIO(Either String Image)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#v:decodeImage-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDecodes an image, with the number of components per pixel forced by the user.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.STB",
        "fct-package": "stb-image",
        "fct-signature": "Int -\u003e ByteString -\u003e IO (Either String Image)",
        "fct-source": "src/Codec-Image-STB.html#decodeImage%27",
        "fct-type": "function",
        "title": "decodeImage'"
      },
      "index": {
        "description": "Decodes an image with the number of components per pixel forced by the user",
        "hierarchy": "Codec Image STB",
        "module": "Codec.Image.STB",
        "name": "decodeImage'",
        "normalized": "Int-\u003eByteString-\u003eIO(Either String Image)",
        "package": "stb-image",
        "partial": "Image'",
        "signature": "Int-\u003eByteString-\u003eIO(Either String Image)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#v:loadImage",
      "description": {
        "fct-descr": "\u003cp\u003eLoads an image from a file. Catches IO exceptions and converts them to an error message.  \n\u003c/p\u003e",
        "fct-module": "Codec.Image.STB",
        "fct-package": "stb-image",
        "fct-signature": "FilePath -\u003e IO (Either String Image)",
        "fct-source": "src/Codec-Image-STB.html#loadImage",
        "fct-type": "function",
        "title": "loadImage"
      },
      "index": {
        "description": "Loads an image from file Catches IO exceptions and converts them to an error message",
        "hierarchy": "Codec Image STB",
        "module": "Codec.Image.STB",
        "name": "loadImage",
        "normalized": "FilePath-\u003eIO(Either String Image)",
        "package": "stb-image",
        "partial": "Image",
        "signature": "FilePath-\u003eIO(Either String Image)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stb-image/docs/Codec-Image-STB.html#v:loadImage-39-",
      "description": {
        "fct-descr": "\u003cp\u003eForce the number of components in the image.\n\u003c/p\u003e",
        "fct-module": "Codec.Image.STB",
        "fct-package": "stb-image",
        "fct-signature": "FilePath -\u003e Int -\u003e IO (Either String Image)",
        "fct-source": "src/Codec-Image-STB.html#loadImage%27",
        "fct-type": "function",
        "title": "loadImage'"
      },
      "index": {
        "description": "Force the number of components in the image",
        "hierarchy": "Codec Image STB",
        "module": "Codec.Image.STB",
        "name": "loadImage'",
        "normalized": "FilePath-\u003eInt-\u003eIO(Either String Image)",
        "package": "stb-image",
        "partial": "Image'",
        "signature": "FilePath-\u003eInt-\u003eIO(Either String Image)"
      }
    }
  }
]