[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Image.html#",
      "description": {
        "fct-module": "Data.PHash.Image",
        "fct-package": "phash",
        "fct-signature": "module",
        "fct-source": "src/Data-PHash-Image.html",
        "fct-type": "module",
        "title": "Image"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PHash Image",
        "module": "Data.PHash.Image",
        "name": "Image",
        "normalized": "",
        "package": "phash",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Image.html#v:imageHash",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the hash of an image. Returns Nothing on failure. pHash's API does\nnot provide any error information when this fails, but CImg may dump\nsomething to stderr.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.PHash\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimageHash imgPath\n\u003c/code\u003e\u003c/strong\u003eJust (PHash 17549625427362946731)\n\u003c/pre\u003e",
        "fct-module": "Data.PHash.Image",
        "fct-package": "phash",
        "fct-signature": "FilePath -\u003e IO (Maybe PHash)",
        "fct-source": "src/Data-PHash-Image.html#imageHash",
        "fct-type": "function",
        "title": "imageHash"
      },
      "index": {
        "description": "Obtain the hash of an image Returns Nothing on failure pHash API does not provide any error information when this fails but CImg may dump something to stderr Examples import Data.PHash imageHash imgPath Just PHash",
        "hierarchy": "Data PHash Image",
        "module": "Data.PHash.Image",
        "name": "imageHash",
        "normalized": "FilePath-\u003eIO(Maybe PHash)",
        "package": "phash",
        "partial": "Hash",
        "signature": "FilePath-\u003eIO(Maybe PHash)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#",
      "description": {
        "fct-module": "Data.PHash.Types",
        "fct-package": "phash",
        "fct-signature": "module",
        "fct-source": "src/Data-PHash-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PHash Types",
        "module": "Data.PHash.Types",
        "name": "Types",
        "normalized": "",
        "package": "phash",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#t:PHash",
      "description": {
        "fct-module": "Data.PHash.Types",
        "fct-package": "phash",
        "fct-signature": "newtype",
        "fct-source": "src/Data-PHash-Types.html#PHash",
        "fct-type": "newtype",
        "title": "PHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PHash Types",
        "module": "Data.PHash.Types",
        "name": "PHash",
        "normalized": "",
        "package": "phash",
        "partial": "PHash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#v:PHash",
      "description": {
        "fct-module": "Data.PHash.Types",
        "fct-package": "phash",
        "fct-signature": "PHash Word64",
        "fct-source": "src/Data-PHash-Types.html#PHash",
        "fct-type": "function",
        "title": "PHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PHash Types",
        "module": "Data.PHash.Types",
        "name": "PHash",
        "normalized": "",
        "package": "phash",
        "partial": "PHash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#v:fromCPHash",
      "description": {
        "fct-module": "Data.PHash.Types",
        "fct-package": "phash",
        "fct-signature": "CULong -\u003e PHash",
        "fct-source": "src/Data-PHash-Types.html#fromCPHash",
        "fct-type": "function",
        "title": "fromCPHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PHash Types",
        "module": "Data.PHash.Types",
        "name": "fromCPHash",
        "normalized": "CULong-\u003ePHash",
        "package": "phash",
        "partial": "CPHash",
        "signature": "CULong-\u003ePHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#v:toCPHash",
      "description": {
        "fct-module": "Data.PHash.Types",
        "fct-package": "phash",
        "fct-signature": "PHash -\u003e CULong",
        "fct-source": "src/Data-PHash-Types.html#toCPHash",
        "fct-type": "function",
        "title": "toCPHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PHash Types",
        "module": "Data.PHash.Types",
        "name": "toCPHash",
        "normalized": "PHash-\u003eCULong",
        "package": "phash",
        "partial": "CPHash",
        "signature": "PHash-\u003eCULong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash.html#",
      "description": {
        "fct-module": "Data.PHash",
        "fct-package": "phash",
        "fct-signature": "module",
        "fct-source": "src/Data-PHash.html",
        "fct-type": "module",
        "title": "PHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PHash",
        "module": "Data.PHash",
        "name": "PHash",
        "normalized": "",
        "package": "phash",
        "partial": "PHash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash.html#v:hammingDistance",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the distance between two hashes. This can be used to detect how\nsimilar two images are.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.PHash\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehammingDistance (PHash 15243782418149777067) (PHash 17549625427362946731)\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehammingDistance (PHash 15243782418149777067) (PHash 15243782418149777067)\n\u003c/code\u003e\u003c/strong\u003e0\n\u003c/pre\u003e",
        "fct-module": "Data.PHash",
        "fct-package": "phash",
        "fct-signature": "PHash -\u003e PHash -\u003e Int",
        "fct-source": "src/Data-PHash.html#hammingDistance",
        "fct-type": "function",
        "title": "hammingDistance"
      },
      "index": {
        "description": "Calculate the distance between two hashes This can be used to detect how similar two images are import Data.PHash hammingDistance PHash PHash hammingDistance PHash PHash",
        "hierarchy": "Data PHash",
        "module": "Data.PHash",
        "name": "hammingDistance",
        "normalized": "PHash-\u003ePHash-\u003eInt",
        "package": "phash",
        "partial": "Distance",
        "signature": "PHash-\u003ePHash-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash.html#v:imagesSimilar",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if two images are similar by a user-defined threshold\n\u003c/p\u003e",
        "fct-module": "Data.PHash",
        "fct-package": "phash",
        "fct-signature": "FilePath-\u003e FilePath-\u003e Int-\u003e IO (Maybe Bool)",
        "fct-type": "function",
        "title": "imagesSimilar"
      },
      "index": {
        "description": "Determine if two images are similar by user-defined threshold",
        "hierarchy": "Data PHash",
        "module": "Data.PHash",
        "name": "imagesSimilar",
        "normalized": "FilePath-\u003eFilePath-\u003eInt-\u003eIO(Maybe Bool)",
        "package": "phash",
        "partial": "Similar",
        "signature": "FilePath-\u003eFilePath-\u003eInt-\u003eIO(Maybe Bool)"
      }
    }
  }
]