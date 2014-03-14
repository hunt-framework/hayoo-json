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
        "word": "hsparklines"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreated     : 2008-02-26\n Version     : 0.1\n\u003c/p\u003e\u003cp\u003eSparklines implementation in Haskell.  Sparklines are\n mini graphs inspired by Edward Tufte.\n\u003c/p\u003e\u003cpre\u003e dp :: [Float]\n dp = [24,21,32.3,24,15,34,43,55,57,72,74,75,73,72,55,44]\n\n make barSpark dp \u003e\u003e= savePngFile \"bar_spark.png\"\n\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "HSparklines",
          "package": "hsparklines",
          "source": "src/Graphics-Rendering-HSparklines.html",
          "type": "module"
        },
        "index": {
          "description": "Created Version Sparklines implementation in Haskell Sparklines are mini graphs inspired by Edward Tufte dp Float dp make barSpark dp savePngFile bar spark.png",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "HSparklines",
          "package": "hsparklines",
          "partial": "HSparklines",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.HSparklines",
          "name": "SparkOptions",
          "package": "hsparklines",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "SparkOptions",
          "package": "hsparklines",
          "partial": "Spark Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#t:SparkOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.HSparklines",
          "name": "BarOptions",
          "package": "hsparklines",
          "signature": "BarOptions",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "BarOptions",
          "package": "hsparklines",
          "partial": "Bar Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:BarOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.HSparklines",
          "name": "SmoothOptions",
          "package": "hsparklines",
          "signature": "SmoothOptions",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "SmoothOptions",
          "package": "hsparklines",
          "partial": "Smooth Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:SmoothOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.HSparklines",
          "name": "barSpark",
          "package": "hsparklines",
          "signature": "SparkOptions",
          "source": "src/Graphics-Rendering-HSparklines.html#barSpark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "barSpark",
          "package": "hsparklines",
          "partial": "Spark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:barSpark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebackground color\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "bgColor",
          "package": "hsparklines",
          "signature": "Color",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "background color",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "bgColor",
          "package": "hsparklines",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:bgColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.HSparklines",
          "name": "encodePngAsDataUrl",
          "package": "hsparklines",
          "signature": "Image -\u003e IO String",
          "source": "src/Graphics-Rendering-HSparklines.html#encodePngAsDataUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "encodePngAsDataUrl",
          "normalized": "Image-\u003eIO String",
          "package": "hsparklines",
          "partial": "Png As Data Url",
          "signature": "Image-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:encodePngAsDataUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egraph height (pixels)\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "height",
          "package": "hsparklines",
          "signature": "Int",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "graph height pixels",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "height",
          "package": "hsparklines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolor of last datapoint\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "lastColor",
          "package": "hsparklines",
          "signature": "Color",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "color of last datapoint",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "lastColor",
          "package": "hsparklines",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:lastColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edisplay last marker\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "lastMarker",
          "package": "hsparklines",
          "signature": "Bool",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "display last marker",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "lastMarker",
          "package": "hsparklines",
          "partial": "Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:lastMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edata point limits\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "limits",
          "package": "hsparklines",
          "signature": "(Int, Int)",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "data point limits",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "limits",
          "normalized": "(Int,Int)",
          "package": "hsparklines",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:limits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.HSparklines",
          "name": "make",
          "package": "hsparklines",
          "signature": "SparkOptions -\u003e [Float] -\u003e IO Image",
          "source": "src/Graphics-Rendering-HSparklines.html#make",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "make",
          "normalized": "SparkOptions-\u003e[Float]-\u003eIO Image",
          "package": "hsparklines",
          "signature": "SparkOptions-\u003e[Float]-\u003eIO Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:make"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolor of maximum datapoint\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "maxColor",
          "package": "hsparklines",
          "signature": "Color",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "color of maximum datapoint",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "maxColor",
          "package": "hsparklines",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:maxColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edisplay maximum marker\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "maxMarker",
          "package": "hsparklines",
          "signature": "Bool",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "display maximum marker",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "maxMarker",
          "package": "hsparklines",
          "partial": "Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:maxMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolor of minimum datapoint\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "minColor",
          "package": "hsparklines",
          "signature": "Color",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "color of minimum datapoint",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "minColor",
          "package": "hsparklines",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:minColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edisplay minimum marker\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "minMarker",
          "package": "hsparklines",
          "signature": "Bool",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "display minimum marker",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "minMarker",
          "package": "hsparklines",
          "partial": "Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:minMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.HSparklines",
          "name": "rgb",
          "package": "hsparklines",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "rgb",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eColor",
          "package": "hsparklines",
          "signature": "Int-\u003eInt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave an image as a PNG file.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "savePngFile",
          "package": "hsparklines",
          "signature": "FilePath -\u003e Image -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Save an image as PNG file",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "savePngFile",
          "normalized": "FilePath-\u003eImage-\u003eIO()",
          "package": "hsparklines",
          "partial": "Png File",
          "signature": "FilePath-\u003eImage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:savePngFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.HSparklines",
          "name": "smoothSpark",
          "package": "hsparklines",
          "signature": "SparkOptions",
          "source": "src/Graphics-Rendering-HSparklines.html#smoothSpark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "smoothSpark",
          "package": "hsparklines",
          "partial": "Spark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:smoothSpark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estep size\n\u003c/p\u003e",
          "module": "Graphics.Rendering.HSparklines",
          "name": "step",
          "package": "hsparklines",
          "signature": "Int",
          "source": "src/Graphics-Rendering-HSparklines.html#SparkOptions",
          "type": "function"
        },
        "index": {
          "description": "step size",
          "hierarchy": "Graphics Rendering HSparklines",
          "module": "Graphics.Rendering.HSparklines",
          "name": "step",
          "package": "hsparklines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparklines/docs/Graphics-Rendering-HSparklines.html#v:step"
      }
    }
  ]
]