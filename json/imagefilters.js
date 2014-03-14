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
        "word": "imagefilters"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Filters.GD",
          "name": "GD",
          "package": "imagefilters",
          "source": "src/Graphics-Filters-GD.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "GD",
          "package": "imagefilters",
          "partial": "GD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the supplied brightness adjustment to the image.\n    The range of the brightness argument is -255 to +255\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "brightness",
          "package": "imagefilters",
          "signature": "Image -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#brightness",
          "type": "function"
        },
        "index": {
          "description": "Applies the supplied brightness adjustment to the image The range of the brightness argument is to",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "brightness",
          "normalized": "Image-\u003eInt-\u003eIO()",
          "package": "imagefilters",
          "signature": "Image-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:brightness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the supplied color transformation to the image.\n    The range of the passed RGB values are -255 to +255, and the range of the A value is -127 to +127.\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "colorize",
          "package": "imagefilters",
          "signature": "Image -\u003e RGBA -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#colorize",
          "type": "function"
        },
        "index": {
          "description": "Applies the supplied color transformation to the image The range of the passed RGB values are to and the range of the value is to",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "colorize",
          "normalized": "Image-\u003eRGBA-\u003eIO()",
          "package": "imagefilters",
          "signature": "Image-\u003eRGBA-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:colorize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the supplied contrast adjustment to the image. \n    The range of the contrast argument is -100 to +100, with\n    -100 being maximum contrast, and +100 being minimum contrast\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "contrast",
          "package": "imagefilters",
          "signature": "Image -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#contrast",
          "type": "function"
        },
        "index": {
          "description": "Applies the supplied contrast adjustment to the image The range of the contrast argument is to with being maximum contrast and being minimum contrast",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "contrast",
          "normalized": "Image-\u003eInt-\u003eIO()",
          "package": "imagefilters",
          "signature": "Image-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:contrast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the convolution matrix on each pixel of the original image.\n    After the matrix has been applied, the resulting RGBA value has each of it's elements divided by the Divisor argument\n    and then the Offset argument is added to each element\n\u003c/p\u003e\u003cp\u003eFor example, the \u003ccode\u003e\u003ca\u003eemboss\u003c/a\u003e\u003c/code\u003e filter is implemented with the following convolution:\n\u003c/p\u003e\u003cpre\u003e   emboss img = convolute img [[1.5,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,-1.5]] 1 127\n\u003c/pre\u003e",
          "module": "Graphics.Filters.GD",
          "name": "convolute",
          "package": "imagefilters",
          "signature": "Image-\u003e [[Float]]-\u003e Float-\u003e Float-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Performs the convolution matrix on each pixel of the original image After the matrix has been applied the resulting RGBA value has each of it elements divided by the Divisor argument and then the Offset argument is added to each element For example the emboss filter is implemented with the following convolution emboss img convolute img",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "convolute",
          "normalized": "Image-\u003e[[Float]]-\u003eFloat-\u003eFloat-\u003eIO()",
          "package": "imagefilters",
          "signature": "Image-\u003e[[Float]]-\u003eFloat-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:convolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies Edge Detection to the image\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "edgeDetect",
          "package": "imagefilters",
          "signature": "Image -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#edgeDetect",
          "type": "function"
        },
        "index": {
          "description": "Applies Edge Detection to the image",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "edgeDetect",
          "normalized": "Image-\u003eIO()",
          "package": "imagefilters",
          "partial": "Detect",
          "signature": "Image-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:edgeDetect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies an Emboss effect to the image\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "emboss",
          "package": "imagefilters",
          "signature": "Image -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#emboss",
          "type": "function"
        },
        "index": {
          "description": "Applies an Emboss effect to the image",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "emboss",
          "normalized": "Image-\u003eIO()",
          "package": "imagefilters",
          "signature": "Image-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:emboss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies Gaussian blur to the image\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "gaussianBlur",
          "package": "imagefilters",
          "signature": "Image -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#gaussianBlur",
          "type": "function"
        },
        "index": {
          "description": "Applies Gaussian blur to the image",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "gaussianBlur",
          "normalized": "Image-\u003eIO()",
          "package": "imagefilters",
          "partial": "Blur",
          "signature": "Image-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:gaussianBlur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an image to grayscale\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "grayscale",
          "package": "imagefilters",
          "signature": "Image -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#grayscale",
          "type": "function"
        },
        "index": {
          "description": "Converts an image to grayscale",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "grayscale",
          "normalized": "Image-\u003eIO()",
          "package": "imagefilters",
          "signature": "Image-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:grayscale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a Mean Removal effect to the image\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "meanRemoval",
          "package": "imagefilters",
          "signature": "Image -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#meanRemoval",
          "type": "function"
        },
        "index": {
          "description": "Applies Mean Removal effect to the image",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "meanRemoval",
          "normalized": "Image-\u003eIO()",
          "package": "imagefilters",
          "partial": "Removal",
          "signature": "Image-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:meanRemoval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverts the image's color.\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "negative",
          "package": "imagefilters",
          "signature": "Image -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#negative",
          "type": "function"
        },
        "index": {
          "description": "Inverts the image color",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "negative",
          "normalized": "Image-\u003eIO()",
          "package": "imagefilters",
          "signature": "Image-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the supplied transform function on every pixel of the image.\n    The transform function should take as it's argument a quadruple of Ints (RGBA) and returns a new RGBA quadruple\n    which is will be the new RGBA values of the the pixel.\n\u003c/p\u003e\u003cp\u003eFor example, the \u003ccode\u003e\u003ca\u003ecolorize\u003c/a\u003e\u003c/code\u003e filter's inner workings are implemented with this as the transform function:\n\u003c/p\u003e\u003cpre\u003e\n      (\\(r,g,b,a) -\u003e let\n            nr = clamp 0 255 (r+ar)\n            ng = clamp 0 255 (g+ag)\n            nb = clamp 0 255 (b+ab)\n            na = clamp 0 127 (a+aa)\n        in (nr,ng,nb,na))\n\u003c/pre\u003e",
          "module": "Graphics.Filters.GD",
          "name": "pixelTransform",
          "package": "imagefilters",
          "signature": "Image-\u003e (RGBA -\u003e RGBA)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Performs the supplied transform function on every pixel of the image The transform function should take as it argument quadruple of Ints RGBA and returns new RGBA quadruple which is will be the new RGBA values of the the pixel For example the colorize filter inner workings are implemented with this as the transform function let nr clamp ar ng clamp ag nb clamp ab na clamp aa in nr ng nb na",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "pixelTransform",
          "normalized": "Image-\u003e(RGBA-\u003eRGBA)-\u003eIO()",
          "package": "imagefilters",
          "partial": "Transform",
          "signature": "Image-\u003e(RGBA-\u003eRGBA)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:pixelTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies weighted Smoothing to the image. The smoothing amount is technically unbounded, \n    but larger values produce a less noticeable result\n\u003c/p\u003e",
          "module": "Graphics.Filters.GD",
          "name": "smoothing",
          "package": "imagefilters",
          "signature": "Image -\u003e Float -\u003e IO ()",
          "source": "src/Graphics-Filters-GD.html#smoothing",
          "type": "function"
        },
        "index": {
          "description": "Applies weighted Smoothing to the image The smoothing amount is technically unbounded but larger values produce less noticeable result",
          "hierarchy": "Graphics Filters GD",
          "module": "Graphics.Filters.GD",
          "name": "smoothing",
          "normalized": "Image-\u003eFloat-\u003eIO()",
          "package": "imagefilters",
          "signature": "Image-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:smoothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Filters.Util",
          "name": "Util",
          "package": "imagefilters",
          "source": "src/Graphics-Filters-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Filters Util",
          "module": "Graphics.Filters.Util",
          "name": "Util",
          "package": "imagefilters",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Filters.Util",
          "name": "RGBA",
          "package": "imagefilters",
          "source": "src/Graphics-Filters-Util.html#RGBA",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Filters Util",
          "module": "Graphics.Filters.Util",
          "name": "RGBA",
          "package": "imagefilters",
          "partial": "RGBA",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-Util.html#t:RGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function for clamping a value between a minimum and maximum value\n\u003c/p\u003e",
          "module": "Graphics.Filters.Util",
          "name": "clamp",
          "package": "imagefilters",
          "signature": "a-\u003e a-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Utility function for clamping value between minimum and maximum value",
          "hierarchy": "Graphics Filters Util",
          "module": "Graphics.Filters.Util",
          "name": "clamp",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "imagefilters",
          "signature": "a-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-Util.html#v:clamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction for converting RGBA from an Int 0-255 range to a Float 0.0-1.0 range \n\u003c/p\u003e",
          "module": "Graphics.Filters.Util",
          "name": "normalizeRGBA",
          "package": "imagefilters",
          "signature": "RGBA -\u003e (Float, Float, Float, Float)",
          "source": "src/Graphics-Filters-Util.html#normalizeRGBA",
          "type": "function"
        },
        "index": {
          "description": "Function for converting RGBA from an Int range to Float range",
          "hierarchy": "Graphics Filters Util",
          "module": "Graphics.Filters.Util",
          "name": "normalizeRGBA",
          "normalized": "RGBA-\u003e(Float,Float,Float,Float)",
          "package": "imagefilters",
          "partial": "RGBA",
          "signature": "RGBA-\u003e(Float,Float,Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-Util.html#v:normalizeRGBA"
      }
    }
  ]
]