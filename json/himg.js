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
        "word": "himg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HImg",
          "name": "HImg",
          "package": "himg",
          "source": "src/Graphics-HImg.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics HImg",
          "module": "Graphics.HImg",
          "name": "HImg",
          "package": "himg",
          "partial": "HImg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/himg/docs/Graphics-HImg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e and spawns a window which displays it. It does not do any\n scaling and such. You can kill the window with &#8216;q&#8217;.\n\u003c/p\u003e",
          "module": "Graphics.HImg",
          "name": "displayImage",
          "package": "himg",
          "signature": "Image -\u003e IO ()",
          "source": "src/Graphics-HImg.html#displayImage",
          "type": "function"
        },
        "index": {
          "description": "Takes Image and spawns window which displays it It does not do any scaling and such You can kill the window with",
          "hierarchy": "Graphics HImg",
          "module": "Graphics.HImg",
          "name": "displayImage",
          "normalized": "Image-\u003eIO()",
          "package": "himg",
          "partial": "Image",
          "signature": "Image-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/himg/docs/Graphics-HImg.html#v:displayImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints the help message.\n\u003c/p\u003e",
          "module": "Graphics.HImg",
          "name": "printHelp",
          "package": "himg",
          "signature": "IO ()",
          "source": "src/Graphics-HImg.html#printHelp",
          "type": "function"
        },
        "index": {
          "description": "Prints the help message",
          "hierarchy": "Graphics HImg",
          "module": "Graphics.HImg",
          "name": "printHelp",
          "normalized": "IO()",
          "package": "himg",
          "partial": "Help",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/himg/docs/Graphics-HImg.html#v:printHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e from a file. Exits with 2 if the file doesn't exist.\n\u003c/p\u003e",
          "module": "Graphics.HImg",
          "name": "viewFromFile",
          "package": "himg",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Graphics-HImg.html#viewFromFile",
          "type": "function"
        },
        "index": {
          "description": "Opens FilePath from file Exits with if the file doesn exist",
          "hierarchy": "Graphics HImg",
          "module": "Graphics.HImg",
          "name": "viewFromFile",
          "normalized": "FilePath-\u003eIO()",
          "package": "himg",
          "partial": "From File",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/himg/docs/Graphics-HImg.html#v:viewFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a passed in URL if possible. Exits with 2 if a download\n problem occurs.\n\u003c/p\u003e",
          "module": "Graphics.HImg",
          "name": "viewFromLink",
          "package": "himg",
          "signature": "String -\u003e IO ()",
          "source": "src/Graphics-HImg.html#viewFromLink",
          "type": "function"
        },
        "index": {
          "description": "Opens passed in URL if possible Exits with if download problem occurs",
          "hierarchy": "Graphics HImg",
          "module": "Graphics.HImg",
          "name": "viewFromLink",
          "normalized": "String-\u003eIO()",
          "package": "himg",
          "partial": "From Link",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/himg/docs/Graphics-HImg.html#v:viewFromLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to guess whether the input is a file or a URL and opens the image\n appropriately. Exits with 3 if it can't decide what it's looking at.\n\u003c/p\u003e",
          "module": "Graphics.HImg",
          "name": "viewGuess",
          "package": "himg",
          "signature": "String -\u003e IO ()",
          "source": "src/Graphics-HImg.html#viewGuess",
          "type": "function"
        },
        "index": {
          "description": "Attempts to guess whether the input is file or URL and opens the image appropriately Exits with if it can decide what it looking at",
          "hierarchy": "Graphics HImg",
          "module": "Graphics.HImg",
          "name": "viewGuess",
          "normalized": "String-\u003eIO()",
          "package": "himg",
          "partial": "Guess",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/himg/docs/Graphics-HImg.html#v:viewGuess"
      }
    }
  ]
]