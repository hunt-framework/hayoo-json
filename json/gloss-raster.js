[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering of Repa arrays as raster images.\n\u003c/p\u003e\u003cp\u003eGloss programs should be compiled with \u003ccode\u003e-threaded\u003c/code\u003e, otherwise the GHC runtime\n  will limit the frame-rate to around 20Hz.\n\u003c/p\u003e\u003cp\u003eThe performance of programs using this interface is sensitive to how much\n  boxing and unboxing the GHC simplifier manages to eliminate. For the best\n  result add INLINE pragmas to all of your numeric functions and use the following\n  compile options.  \n\u003c/p\u003e\u003cpre\u003e-threaded -Odph -fno-liberate-case -funfolding-use-threshold1000 -funfolding-keeness-factor1000 -fllvm -optlo-O3\u003c/pre\u003e\u003cp\u003eSee the examples the \u003ccode\u003eraster\u003c/code\u003e directory of the \u003ccode\u003egloss-examples\u003c/code\u003e package \n  for more details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Raster-Array.html",
        "fct-type": "module",
        "title": "Array"
      },
      "index": {
        "description": "Rendering of Repa arrays as raster images Gloss programs should be compiled with threaded otherwise the GHC runtime will limit the frame-rate to around Hz The performance of programs using this interface is sensitive to how much boxing and unboxing the GHC simplifier manages to eliminate For the best result add INLINE pragmas to all of your numeric functions and use the following compile options threaded Odph fno-liberate-case funfolding-use-threshold1000 funfolding-keeness-factor1000 fllvm optlo-O3 See the examples the raster directory of the gloss-examples package for more details",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "Array",
        "normalized": "",
        "package": "gloss-raster",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#t:Display",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes how Gloss should display its output.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Display"
      },
      "index": {
        "description": "Describes how Gloss should display its output",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "Display",
        "normalized": "",
        "package": "gloss-raster",
        "partial": "Display",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:FullScreen",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay full screen with a drawing area of the given size.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "FullScreen (Int, Int)",
        "fct-type": "function",
        "title": "FullScreen"
      },
      "index": {
        "description": "Display full screen with drawing area of the given size",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "FullScreen",
        "normalized": "FullScreen(Int,Int)",
        "package": "gloss-raster",
        "partial": "Full Screen",
        "signature": "FullScreen(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:InWindow",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay in a window with the given name, size and position.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "InWindow String (Int, Int) (Int, Int)",
        "fct-type": "function",
        "title": "InWindow"
      },
      "index": {
        "description": "Display in window with the given name size and position",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "InWindow",
        "normalized": "InWindow String(Int,Int)(Int,Int)",
        "package": "gloss-raster",
        "partial": "In Window",
        "signature": "InWindow String(Int,Int)(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:animateArray",
      "description": {
        "fct-descr": "\u003cp\u003eAnimate a bitmap generated from a Repa array.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "Display-\u003e (Int, Int)-\u003e (Float -\u003e Array D DIM2 Color)-\u003e IO ()",
        "fct-type": "function",
        "title": "animateArray"
      },
      "index": {
        "description": "Animate bitmap generated from Repa array",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "animateArray",
        "normalized": "Display-\u003e(Int,Int)-\u003e(Float-\u003eArray D DIM Color)-\u003eIO()",
        "package": "gloss-raster",
        "partial": "Array",
        "signature": "Display-\u003e(Int,Int)-\u003e(Float-\u003eArray D DIM Color)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:animateArrayIO",
      "description": {
        "fct-descr": "\u003cp\u003eAnimate a bitmap generated from a Repa array, via the IO monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "Display-\u003e (Int, Int)-\u003e (Float -\u003e IO (Array D DIM2 Color))-\u003e IO ()",
        "fct-type": "function",
        "title": "animateArrayIO"
      },
      "index": {
        "description": "Animate bitmap generated from Repa array via the IO monad",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "animateArrayIO",
        "normalized": "Display-\u003e(Int,Int)-\u003e(Float-\u003eIO(Array D DIM Color))-\u003eIO()",
        "package": "gloss-raster",
        "partial": "Array IO",
        "signature": "Display-\u003e(Int,Int)-\u003e(Float-\u003eIO(Array D DIM Color))-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:playArray",
      "description": {
        "fct-descr": "\u003cp\u003ePlay with a bitmap generated from a Repa array.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "Display-\u003e (Int, Int)-\u003e Int-\u003e world-\u003e (world -\u003e Array D DIM2 Color)-\u003e (Event -\u003e world -\u003e world)-\u003e (Float -\u003e world -\u003e world)-\u003e IO ()",
        "fct-type": "function",
        "title": "playArray"
      },
      "index": {
        "description": "Play with bitmap generated from Repa array",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "playArray",
        "normalized": "Display-\u003e(Int,Int)-\u003eInt-\u003ea-\u003e(a-\u003eArray D DIM Color)-\u003e(Event-\u003ea-\u003ea)-\u003e(Float-\u003ea-\u003ea)-\u003eIO()",
        "package": "gloss-raster",
        "partial": "Array",
        "signature": "Display-\u003e(Int,Int)-\u003eInt-\u003eworld-\u003e(world-\u003eArray D DIM Color)-\u003e(Event-\u003eworld-\u003eworld)-\u003e(Float-\u003eworld-\u003eworld)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:playArrayIO",
      "description": {
        "fct-descr": "\u003cp\u003ePlay with a bitmap generated from a Repa array, via the IO monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "Display-\u003e (Int, Int)-\u003e Int-\u003e world-\u003e (world -\u003e IO (Array D DIM2 Color))-\u003e (Event -\u003e world -\u003e IO world)-\u003e (Float -\u003e world -\u003e IO world)-\u003e IO ()",
        "fct-type": "function",
        "title": "playArrayIO"
      },
      "index": {
        "description": "Play with bitmap generated from Repa array via the IO monad",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "playArrayIO",
        "normalized": "Display-\u003e(Int,Int)-\u003eInt-\u003ea-\u003e(a-\u003eIO(Array D DIM Color))-\u003e(Event-\u003ea-\u003eIO a)-\u003e(Float-\u003ea-\u003eIO a)-\u003eIO()",
        "package": "gloss-raster",
        "partial": "Array IO",
        "signature": "Display-\u003e(Int,Int)-\u003eInt-\u003eworld-\u003e(world-\u003eIO(Array D DIM Color))-\u003e(Event-\u003eworld-\u003eIO world)-\u003e(Float-\u003eworld-\u003eIO world)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:rgb",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e\u003cp\u003eEach component is clipped to the range [0..1]\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "Float -\u003e Float -\u003e Float -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Raster-Array.html#rgb",
        "fct-type": "function",
        "title": "rgb"
      },
      "index": {
        "description": "Construct color from red green blue components Each component is clipped to the range",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "rgb",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003eColor",
        "package": "gloss-raster",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:rgb8",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e\u003cp\u003eEach component is clipped to the range [0..255]\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Raster-Array.html#rgb8",
        "fct-type": "function",
        "title": "rgb8"
      },
      "index": {
        "description": "Construct color from red green blue components Each component is clipped to the range",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "rgb8",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eColor",
        "package": "gloss-raster",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:rgb8w",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Array",
        "fct-package": "gloss-raster",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Raster-Array.html#rgb8w",
        "fct-type": "function",
        "title": "rgb8w"
      },
      "index": {
        "description": "Construct color from red green blue components",
        "hierarchy": "Graphics Gloss Raster Array",
        "module": "Graphics.Gloss.Raster.Array",
        "name": "rgb8w",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eColor",
        "package": "gloss-raster",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering of continuous 2D functions as raster fields.\n\u003c/p\u003e\u003cp\u003eGloss programs should be compiled with \u003ccode\u003e-threaded\u003c/code\u003e, otherwise the GHC runtime\n  will limit the frame-rate to around 20Hz.\n\u003c/p\u003e\u003cp\u003eThe performance of programs using this interface is sensitive to how much\n  boxing and unboxing the GHC simplifier manages to eliminate. For the best\n  result add INLINE pragmas to all of your numeric functions and use the following\n  compile options.  \n\u003c/p\u003e\u003cpre\u003e-threaded -Odph -fno-liberate-case -funfolding-use-threshold1000 -funfolding-keeness-factor1000 -fllvm -optlo-O3\u003c/pre\u003e\u003cp\u003eSee the examples the \u003ccode\u003eraster\u003c/code\u003e directory of the \u003ccode\u003egloss-examples\u003c/code\u003e package \n  for more details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Raster-Field.html",
        "fct-type": "module",
        "title": "Field"
      },
      "index": {
        "description": "Rendering of continuous functions as raster fields Gloss programs should be compiled with threaded otherwise the GHC runtime will limit the frame-rate to around Hz The performance of programs using this interface is sensitive to how much boxing and unboxing the GHC simplifier manages to eliminate For the best result add INLINE pragmas to all of your numeric functions and use the following compile options threaded Odph fno-liberate-case funfolding-use-threshold1000 funfolding-keeness-factor1000 fllvm optlo-O3 See the examples the raster directory of the gloss-examples package for more details",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "Field",
        "normalized": "",
        "package": "gloss-raster",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#t:Display",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes how Gloss should display its output.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Display"
      },
      "index": {
        "description": "Describes how Gloss should display its output",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "Display",
        "normalized": "",
        "package": "gloss-raster",
        "partial": "Display",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eA point on the x-y plane.\n   Points can also be treated as \u003ccode\u003eVector\u003c/code\u003es, so \u003ca\u003eGraphics.Gloss.Data.Vector\u003c/a\u003e\n   may also be useful.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Point"
      },
      "index": {
        "description": "point on the x-y plane Points can also be treated as Vector so Graphics.Gloss.Data.Vector may also be useful",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "Point",
        "normalized": "",
        "package": "gloss-raster",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:FullScreen",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay full screen with a drawing area of the given size.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "FullScreen (Int, Int)",
        "fct-type": "function",
        "title": "FullScreen"
      },
      "index": {
        "description": "Display full screen with drawing area of the given size",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "FullScreen",
        "normalized": "FullScreen(Int,Int)",
        "package": "gloss-raster",
        "partial": "Full Screen",
        "signature": "FullScreen(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:InWindow",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay in a window with the given name, size and position.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "InWindow String (Int, Int) (Int, Int)",
        "fct-type": "function",
        "title": "InWindow"
      },
      "index": {
        "description": "Display in window with the given name size and position",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "InWindow",
        "normalized": "InWindow String(Int,Int)(Int,Int)",
        "package": "gloss-raster",
        "partial": "In Window",
        "signature": "InWindow String(Int,Int)(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:animateField",
      "description": {
        "fct-descr": "\u003cp\u003eAnimate a continuous 2D function.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "Display-\u003e (Int, Int)-\u003e (Float -\u003e Point -\u003e Color)-\u003e IO ()",
        "fct-type": "function",
        "title": "animateField"
      },
      "index": {
        "description": "Animate continuous function",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "animateField",
        "normalized": "Display-\u003e(Int,Int)-\u003e(Float-\u003ePoint-\u003eColor)-\u003eIO()",
        "package": "gloss-raster",
        "partial": "Field",
        "signature": "Display-\u003e(Int,Int)-\u003e(Float-\u003ePoint-\u003eColor)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:makeFrame",
      "description": {
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "Int -\u003e Int -\u003e (Point -\u003e Color) -\u003e Array (I D) DIM2 (Word8, Word8, Word8)",
        "fct-source": "src/Graphics-Gloss-Raster-Field.html#makeFrame",
        "fct-type": "function",
        "title": "makeFrame"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "makeFrame",
        "normalized": "Int-\u003eInt-\u003e(Point-\u003eColor)-\u003eArray(I D)DIM(Word,Word,Word)",
        "package": "gloss-raster",
        "partial": "Frame",
        "signature": "Int-\u003eInt-\u003e(Point-\u003eColor)-\u003eArray(I D)DIM(Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:makePicture",
      "description": {
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e (Point -\u003e Color) -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Raster-Field.html#makePicture",
        "fct-type": "function",
        "title": "makePicture"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "makePicture",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e(Point-\u003eColor)-\u003ePicture",
        "package": "gloss-raster",
        "partial": "Picture",
        "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e(Point-\u003eColor)-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:playField",
      "description": {
        "fct-descr": "\u003cp\u003ePlay a game with a continous 2D function.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "Display-\u003e (Int, Int)-\u003e Int-\u003e world-\u003e (world -\u003e Point -\u003e Color)-\u003e (Event -\u003e world -\u003e world)-\u003e (Float -\u003e world -\u003e world)-\u003e IO ()",
        "fct-type": "function",
        "title": "playField"
      },
      "index": {
        "description": "Play game with continous function",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "playField",
        "normalized": "Display-\u003e(Int,Int)-\u003eInt-\u003ea-\u003e(a-\u003ePoint-\u003eColor)-\u003e(Event-\u003ea-\u003ea)-\u003e(Float-\u003ea-\u003ea)-\u003eIO()",
        "package": "gloss-raster",
        "partial": "Field",
        "signature": "Display-\u003e(Int,Int)-\u003eInt-\u003eworld-\u003e(world-\u003ePoint-\u003eColor)-\u003e(Event-\u003eworld-\u003eworld)-\u003e(Float-\u003eworld-\u003eworld)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:rgb",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e\u003cp\u003eEach component is clipped to the range [0..1]\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "Float -\u003e Float -\u003e Float -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Raster-Field.html#rgb",
        "fct-type": "function",
        "title": "rgb"
      },
      "index": {
        "description": "Construct color from red green blue components Each component is clipped to the range",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "rgb",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003eColor",
        "package": "gloss-raster",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:rgb8",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e\u003cp\u003eEach component is clipped to the range [0..255]\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Raster-Field.html#rgb8",
        "fct-type": "function",
        "title": "rgb8"
      },
      "index": {
        "description": "Construct color from red green blue components Each component is clipped to the range",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "rgb8",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eColor",
        "package": "gloss-raster",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:rgb8w",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Raster.Field",
        "fct-package": "gloss-raster",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Raster-Field.html#rgb8w",
        "fct-type": "function",
        "title": "rgb8w"
      },
      "index": {
        "description": "Construct color from red green blue components",
        "hierarchy": "Graphics Gloss Raster Field",
        "module": "Graphics.Gloss.Raster.Field",
        "name": "rgb8w",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eColor",
        "package": "gloss-raster",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eColor"
      }
    }
  }
]