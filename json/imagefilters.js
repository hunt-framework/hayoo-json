[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#",
      "description": {
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Filters-GD.html",
        "fct-type": "module",
        "title": "GD"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "GD",
        "normalized": "",
        "package": "imagefilters",
        "partial": "GD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:brightness",
      "description": {
        "fct-descr": "\u003cp\u003eApplies the supplied brightness adjustment to the image.\n    The range of the brightness argument is -255 to +255\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#brightness",
        "fct-type": "function",
        "title": "brightness"
      },
      "index": {
        "description": "Applies the supplied brightness adjustment to the image The range of the brightness argument is to",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "brightness",
        "normalized": "Image-\u003eInt-\u003eIO()",
        "package": "imagefilters",
        "partial": "",
        "signature": "Image-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:colorize",
      "description": {
        "fct-descr": "\u003cp\u003eApplies the supplied color transformation to the image.\n    The range of the passed RGB values are -255 to +255, and the range of the A value is -127 to +127.\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e RGBA -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#colorize",
        "fct-type": "function",
        "title": "colorize"
      },
      "index": {
        "description": "Applies the supplied color transformation to the image The range of the passed RGB values are to and the range of the value is to",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "colorize",
        "normalized": "Image-\u003eRGBA-\u003eIO()",
        "package": "imagefilters",
        "partial": "",
        "signature": "Image-\u003eRGBA-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:contrast",
      "description": {
        "fct-descr": "\u003cp\u003eApplies the supplied contrast adjustment to the image. \n    The range of the contrast argument is -100 to +100, with\n    -100 being maximum contrast, and +100 being minimum contrast\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#contrast",
        "fct-type": "function",
        "title": "contrast"
      },
      "index": {
        "description": "Applies the supplied contrast adjustment to the image The range of the contrast argument is to with being maximum contrast and being minimum contrast",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "contrast",
        "normalized": "Image-\u003eInt-\u003eIO()",
        "package": "imagefilters",
        "partial": "",
        "signature": "Image-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:convolute",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the convolution matrix on each pixel of the original image.\n    After the matrix has been applied, the resulting RGBA value has each of it's elements divided by the Divisor argument\n    and then the Offset argument is added to each element\n\u003c/p\u003e\u003cp\u003eFor example, the \u003ccode\u003e\u003ca\u003eemboss\u003c/a\u003e\u003c/code\u003e filter is implemented with the following convolution:\n\u003c/p\u003e\u003cpre\u003e   emboss img = convolute img [[1.5,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,-1.5]] 1 127\n\u003c/pre\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image-\u003e [[Float]]-\u003e Float-\u003e Float-\u003e IO ()",
        "fct-type": "function",
        "title": "convolute"
      },
      "index": {
        "description": "Performs the convolution matrix on each pixel of the original image After the matrix has been applied the resulting RGBA value has each of it elements divided by the Divisor argument and then the Offset argument is added to each element For example the emboss filter is implemented with the following convolution emboss img convolute img",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "convolute",
        "normalized": "Image-\u003e[[Float]]-\u003eFloat-\u003eFloat-\u003eIO()",
        "package": "imagefilters",
        "partial": "",
        "signature": "Image-\u003e[[Float]]-\u003eFloat-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:edgeDetect",
      "description": {
        "fct-descr": "\u003cp\u003eApplies Edge Detection to the image\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#edgeDetect",
        "fct-type": "function",
        "title": "edgeDetect"
      },
      "index": {
        "description": "Applies Edge Detection to the image",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "edgeDetect",
        "normalized": "Image-\u003eIO()",
        "package": "imagefilters",
        "partial": "Detect",
        "signature": "Image-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:emboss",
      "description": {
        "fct-descr": "\u003cp\u003eApplies an Emboss effect to the image\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#emboss",
        "fct-type": "function",
        "title": "emboss"
      },
      "index": {
        "description": "Applies an Emboss effect to the image",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "emboss",
        "normalized": "Image-\u003eIO()",
        "package": "imagefilters",
        "partial": "",
        "signature": "Image-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:gaussianBlur",
      "description": {
        "fct-descr": "\u003cp\u003eApplies Gaussian blur to the image\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#gaussianBlur",
        "fct-type": "function",
        "title": "gaussianBlur"
      },
      "index": {
        "description": "Applies Gaussian blur to the image",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "gaussianBlur",
        "normalized": "Image-\u003eIO()",
        "package": "imagefilters",
        "partial": "Blur",
        "signature": "Image-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:grayscale",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an image to grayscale\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#grayscale",
        "fct-type": "function",
        "title": "grayscale"
      },
      "index": {
        "description": "Converts an image to grayscale",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "grayscale",
        "normalized": "Image-\u003eIO()",
        "package": "imagefilters",
        "partial": "",
        "signature": "Image-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:meanRemoval",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a Mean Removal effect to the image\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#meanRemoval",
        "fct-type": "function",
        "title": "meanRemoval"
      },
      "index": {
        "description": "Applies Mean Removal effect to the image",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "meanRemoval",
        "normalized": "Image-\u003eIO()",
        "package": "imagefilters",
        "partial": "Removal",
        "signature": "Image-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:negative",
      "description": {
        "fct-descr": "\u003cp\u003eInverts the image's color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#negative",
        "fct-type": "function",
        "title": "negative"
      },
      "index": {
        "description": "Inverts the image color",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "negative",
        "normalized": "Image-\u003eIO()",
        "package": "imagefilters",
        "partial": "",
        "signature": "Image-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:pixelTransform",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the supplied transform function on every pixel of the image.\n    The transform function should take as it's argument a quadruple of Ints (RGBA) and returns a new RGBA quadruple\n    which is will be the new RGBA values of the the pixel.\n\u003c/p\u003e\u003cp\u003eFor example, the \u003ccode\u003e\u003ca\u003ecolorize\u003c/a\u003e\u003c/code\u003e filter's inner workings are implemented with this as the transform function:\n\u003c/p\u003e\u003cpre\u003e\n      (\\(r,g,b,a) -\u003e let\n            nr = clamp 0 255 (r+ar)\n            ng = clamp 0 255 (g+ag)\n            nb = clamp 0 255 (b+ab)\n            na = clamp 0 127 (a+aa)\n        in (nr,ng,nb,na))\n\u003c/pre\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image-\u003e (RGBA -\u003e RGBA)-\u003e IO ()",
        "fct-type": "function",
        "title": "pixelTransform"
      },
      "index": {
        "description": "Performs the supplied transform function on every pixel of the image The transform function should take as it argument quadruple of Ints RGBA and returns new RGBA quadruple which is will be the new RGBA values of the the pixel For example the colorize filter inner workings are implemented with this as the transform function let nr clamp ar ng clamp ag nb clamp ab na clamp aa in nr ng nb na",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "pixelTransform",
        "normalized": "Image-\u003e(RGBA-\u003eRGBA)-\u003eIO()",
        "package": "imagefilters",
        "partial": "Transform",
        "signature": "Image-\u003e(RGBA-\u003eRGBA)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-GD.html#v:smoothing",
      "description": {
        "fct-descr": "\u003cp\u003eApplies weighted Smoothing to the image. The smoothing amount is technically unbounded, \n    but larger values produce a less noticeable result\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.GD",
        "fct-package": "imagefilters",
        "fct-signature": "Image -\u003e Float -\u003e IO ()",
        "fct-source": "src/Graphics-Filters-GD.html#smoothing",
        "fct-type": "function",
        "title": "smoothing"
      },
      "index": {
        "description": "Applies weighted Smoothing to the image The smoothing amount is technically unbounded but larger values produce less noticeable result",
        "hierarchy": "Graphics Filters GD",
        "module": "Graphics.Filters.GD",
        "name": "smoothing",
        "normalized": "Image-\u003eFloat-\u003eIO()",
        "package": "imagefilters",
        "partial": "",
        "signature": "Image-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-Util.html#",
      "description": {
        "fct-module": "Graphics.Filters.Util",
        "fct-package": "imagefilters",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Filters-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Filters Util",
        "module": "Graphics.Filters.Util",
        "name": "Util",
        "normalized": "",
        "package": "imagefilters",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-Util.html#t:RGBA",
      "description": {
        "fct-module": "Graphics.Filters.Util",
        "fct-package": "imagefilters",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Filters-Util.html#RGBA",
        "fct-type": "type",
        "title": "RGBA"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Filters Util",
        "module": "Graphics.Filters.Util",
        "name": "RGBA",
        "normalized": "",
        "package": "imagefilters",
        "partial": "RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-Util.html#v:clamp",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function for clamping a value between a minimum and maximum value\n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.Util",
        "fct-package": "imagefilters",
        "fct-signature": "a-\u003e a-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "clamp"
      },
      "index": {
        "description": "Utility function for clamping value between minimum and maximum value",
        "hierarchy": "Graphics Filters Util",
        "module": "Graphics.Filters.Util",
        "name": "clamp",
        "normalized": "a-\u003ea-\u003ea-\u003ea",
        "package": "imagefilters",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/imagefilters/docs/Graphics-Filters-Util.html#v:normalizeRGBA",
      "description": {
        "fct-descr": "\u003cp\u003eFunction for converting RGBA from an Int 0-255 range to a Float 0.0-1.0 range \n\u003c/p\u003e",
        "fct-module": "Graphics.Filters.Util",
        "fct-package": "imagefilters",
        "fct-signature": "RGBA -\u003e (Float, Float, Float, Float)",
        "fct-source": "src/Graphics-Filters-Util.html#normalizeRGBA",
        "fct-type": "function",
        "title": "normalizeRGBA"
      },
      "index": {
        "description": "Function for converting RGBA from an Int range to Float range",
        "hierarchy": "Graphics Filters Util",
        "module": "Graphics.Filters.Util",
        "name": "normalizeRGBA",
        "normalized": "RGBA-\u003e(Float,Float,Float,Float)",
        "package": "imagefilters",
        "partial": "RGBA",
        "signature": "RGBA-\u003e(Float,Float,Float,Float)"
      }
    }
  }
]