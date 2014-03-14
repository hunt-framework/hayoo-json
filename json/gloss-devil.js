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
        "word": "gloss-devil"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.DevIL",
          "name": "DevIL",
          "package": "gloss-devil",
          "source": "src/Graphics-Gloss-DevIL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss DevIL",
          "module": "Graphics.Gloss.DevIL",
          "name": "DevIL",
          "package": "gloss-devil",
          "partial": "Dev IL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss-devil/docs/Graphics-Gloss-DevIL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erepaToPicture cacheMeFlag array\u003c/code\u003e will convert a \u003ccode\u003eRepa\u003c/code\u003e RGBA array to a\n tuple of the number of columns, rows and a bitmap for use with \u003ccode\u003eGloss\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.DevIL",
          "name": "imageToPicture",
          "package": "gloss-devil",
          "signature": "Bool -\u003e Image -\u003e (Int, Int, Picture)",
          "source": "src/Graphics-Gloss-DevIL.html#imageToPicture",
          "type": "function"
        },
        "index": {
          "description": "repaToPicture cacheMeFlag array will convert Repa RGBA array to tuple of the number of columns rows and bitmap for use with Gloss",
          "hierarchy": "Graphics Gloss DevIL",
          "module": "Graphics.Gloss.DevIL",
          "name": "imageToPicture",
          "normalized": "Bool-\u003eImage-\u003e(Int,Int,Picture)",
          "package": "gloss-devil",
          "partial": "To Picture",
          "signature": "Bool-\u003eImage-\u003e(Int,Int,Picture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-devil/docs/Graphics-Gloss-DevIL.html#v:imageToPicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad  picture using 'Codec-Image-DevIL' and convert it a bitmap for display by \u003ccode\u003eGloss\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Gloss.DevIL",
          "name": "loadDevILPicture",
          "package": "gloss-devil",
          "signature": "FilePath -\u003e IO (Int, Int, Picture)",
          "source": "src/Graphics-Gloss-DevIL.html#loadDevILPicture",
          "type": "function"
        },
        "index": {
          "description": "Load picture using Codec-Image-DevIL and convert it bitmap for display by Gloss",
          "hierarchy": "Graphics Gloss DevIL",
          "module": "Graphics.Gloss.DevIL",
          "name": "loadDevILPicture",
          "normalized": "FilePath-\u003eIO(Int,Int,Picture)",
          "package": "gloss-devil",
          "partial": "Dev ILPicture",
          "signature": "FilePath-\u003eIO(Int,Int,Picture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-devil/docs/Graphics-Gloss-DevIL.html#v:loadDevILPicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a file into a repa array (using the 'repa-devil' package)\n\u003c/p\u003e",
          "module": "Graphics.Gloss.DevIL",
          "name": "readRepaImage",
          "package": "gloss-devil",
          "signature": "FilePath -\u003e IO Image",
          "source": "src/Graphics-Gloss-DevIL.html#readRepaImage",
          "type": "function"
        },
        "index": {
          "description": "Read in file into repa array using the repa-devil package",
          "hierarchy": "Graphics Gloss DevIL",
          "module": "Graphics.Gloss.DevIL",
          "name": "readRepaImage",
          "normalized": "FilePath-\u003eIO Image",
          "package": "gloss-devil",
          "partial": "Repa Image",
          "signature": "FilePath-\u003eIO Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-devil/docs/Graphics-Gloss-DevIL.html#v:readRepaImage"
      }
    }
  ]
]