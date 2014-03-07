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
        "word": "phash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PHash.Image",
          "name": "Image",
          "package": "phash",
          "source": "src/Data-PHash-Image.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data PHash Image",
          "module": "Data.PHash.Image",
          "name": "Image",
          "package": "phash",
          "partial": "Image",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Image.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the hash of an image. Returns Nothing on failure. pHash's API does\nnot provide any error information when this fails, but CImg may dump\nsomething to stderr.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.PHash\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimageHash imgPath\n\u003c/code\u003e\u003c/strong\u003eJust (PHash 17549625427362946731)\n\u003c/pre\u003e",
          "module": "Data.PHash.Image",
          "name": "imageHash",
          "package": "phash",
          "signature": "FilePath -\u003e IO (Maybe PHash)",
          "source": "src/Data-PHash-Image.html#imageHash",
          "type": "function"
        },
        "index": {
          "description": "Obtain the hash of an image Returns Nothing on failure pHash API does not provide any error information when this fails but CImg may dump something to stderr Examples import Data.PHash imageHash imgPath Just PHash",
          "hierarchy": "Data PHash Image",
          "module": "Data.PHash.Image",
          "name": "imageHash",
          "normalized": "FilePath-\u003eIO(Maybe PHash)",
          "package": "phash",
          "partial": "Hash",
          "signature": "FilePath-\u003eIO(Maybe PHash)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Image.html#v:imageHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PHash.Types",
          "name": "Types",
          "package": "phash",
          "source": "src/Data-PHash-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data PHash Types",
          "module": "Data.PHash.Types",
          "name": "Types",
          "package": "phash",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PHash.Types",
          "name": "PHash",
          "package": "phash",
          "source": "src/Data-PHash-Types.html#PHash",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data PHash Types",
          "module": "Data.PHash.Types",
          "name": "PHash",
          "package": "phash",
          "partial": "PHash",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#t:PHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PHash.Types",
          "name": "PHash",
          "package": "phash",
          "signature": "PHash Word64",
          "source": "src/Data-PHash-Types.html#PHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PHash Types",
          "module": "Data.PHash.Types",
          "name": "PHash",
          "package": "phash",
          "partial": "PHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#v:PHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PHash.Types",
          "name": "fromCPHash",
          "package": "phash",
          "signature": "CULong -\u003e PHash",
          "source": "src/Data-PHash-Types.html#fromCPHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PHash Types",
          "module": "Data.PHash.Types",
          "name": "fromCPHash",
          "normalized": "CULong-\u003ePHash",
          "package": "phash",
          "partial": "CPHash",
          "signature": "CULong-\u003ePHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#v:fromCPHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PHash.Types",
          "name": "toCPHash",
          "package": "phash",
          "signature": "PHash -\u003e CULong",
          "source": "src/Data-PHash-Types.html#toCPHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PHash Types",
          "module": "Data.PHash.Types",
          "name": "toCPHash",
          "normalized": "PHash-\u003eCULong",
          "package": "phash",
          "partial": "CPHash",
          "signature": "PHash-\u003eCULong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash-Types.html#v:toCPHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PHash",
          "name": "PHash",
          "package": "phash",
          "source": "src/Data-PHash.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data PHash",
          "module": "Data.PHash",
          "name": "PHash",
          "package": "phash",
          "partial": "PHash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the distance between two hashes. This can be used to detect how\nsimilar two images are.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.PHash\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehammingDistance (PHash 15243782418149777067) (PHash 17549625427362946731)\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehammingDistance (PHash 15243782418149777067) (PHash 15243782418149777067)\n\u003c/code\u003e\u003c/strong\u003e0\n\u003c/pre\u003e",
          "module": "Data.PHash",
          "name": "hammingDistance",
          "package": "phash",
          "signature": "PHash -\u003e PHash -\u003e Int",
          "source": "src/Data-PHash.html#hammingDistance",
          "type": "function"
        },
        "index": {
          "description": "Calculate the distance between two hashes This can be used to detect how similar two images are import Data.PHash hammingDistance PHash PHash hammingDistance PHash PHash",
          "hierarchy": "Data PHash",
          "module": "Data.PHash",
          "name": "hammingDistance",
          "normalized": "PHash-\u003ePHash-\u003eInt",
          "package": "phash",
          "partial": "Distance",
          "signature": "PHash-\u003ePHash-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash.html#v:hammingDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if two images are similar by a user-defined threshold\n\u003c/p\u003e",
          "module": "Data.PHash",
          "name": "imagesSimilar",
          "package": "phash",
          "signature": "FilePath-\u003e FilePath-\u003e Int-\u003e IO (Maybe Bool)",
          "type": "function"
        },
        "index": {
          "description": "Determine if two images are similar by user-defined threshold",
          "hierarchy": "Data PHash",
          "module": "Data.PHash",
          "name": "imagesSimilar",
          "normalized": "FilePath-\u003eFilePath-\u003eInt-\u003eIO(Maybe Bool)",
          "package": "phash",
          "partial": "Similar",
          "signature": "FilePath-\u003eFilePath-\u003eInt-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phash/docs/Data-PHash.html#v:imagesSimilar"
      }
    }
  ]
]