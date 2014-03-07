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
        "word": "gloss-raster"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering of Repa arrays as raster images.\n\u003c/p\u003e\u003cp\u003eGloss programs should be compiled with \u003ccode\u003e-threaded\u003c/code\u003e, otherwise the GHC runtime\n  will limit the frame-rate to around 20Hz.\n\u003c/p\u003e\u003cp\u003eThe performance of programs using this interface is sensitive to how much\n  boxing and unboxing the GHC simplifier manages to eliminate. For the best\n  result add INLINE pragmas to all of your numeric functions and use the following\n  compile options.  \n\u003c/p\u003e\u003cpre\u003e-threaded -Odph -fno-liberate-case -funfolding-use-threshold1000 -funfolding-keeness-factor1000 -fllvm -optlo-O3\u003c/pre\u003e\u003cp\u003eSee the examples the \u003ccode\u003eraster\u003c/code\u003e directory of the \u003ccode\u003egloss-examples\u003c/code\u003e package \n  for more details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "Array",
          "package": "gloss-raster",
          "source": "src/Graphics-Gloss-Raster-Array.html",
          "type": "module"
        },
        "index": {
          "description": "Rendering of Repa arrays as raster images Gloss programs should be compiled with threaded otherwise the GHC runtime will limit the frame-rate to around Hz The performance of programs using this interface is sensitive to how much boxing and unboxing the GHC simplifier manages to eliminate For the best result add INLINE pragmas to all of your numeric functions and use the following compile options threaded Odph fno-liberate-case funfolding-use-threshold1000 funfolding-keeness-factor1000 fllvm optlo-O3 See the examples the raster directory of the gloss-examples package for more details",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "Array",
          "package": "gloss-raster",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes how Gloss should display its output.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "Display",
          "package": "gloss-raster",
          "type": "data"
        },
        "index": {
          "description": "Describes how Gloss should display its output",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "Display",
          "package": "gloss-raster",
          "partial": "Display",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#t:Display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay full screen with a drawing area of the given size.\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Raster.Array\",\"Graphics.Gloss.Raster.Field\"]",
          "name": "FullScreen",
          "package": "gloss-raster",
          "signature": "FullScreen (Int, Int)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:FullScreen\",\"http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:FullScreen\"]"
        },
        "index": {
          "description": "Display full screen with drawing area of the given size",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "FullScreen",
          "normalized": "FullScreen(Int,Int)",
          "package": "gloss-raster",
          "partial": "Full Screen",
          "signature": "FullScreen(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:FullScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay in a window with the given name, size and position.\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Raster.Array\",\"Graphics.Gloss.Raster.Field\"]",
          "name": "InWindow",
          "package": "gloss-raster",
          "signature": "InWindow String (Int, Int) (Int, Int)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:InWindow\",\"http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:InWindow\"]"
        },
        "index": {
          "description": "Display in window with the given name size and position",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "InWindow",
          "normalized": "InWindow String(Int,Int)(Int,Int)",
          "package": "gloss-raster",
          "partial": "In Window",
          "signature": "InWindow String(Int,Int)(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:InWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnimate a bitmap generated from a Repa array.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "animateArray",
          "package": "gloss-raster",
          "signature": "Display-\u003e (Int, Int)-\u003e (Float -\u003e Array D DIM2 Color)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Animate bitmap generated from Repa array",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "animateArray",
          "normalized": "Display-\u003e(Int,Int)-\u003e(Float-\u003eArray D DIM Color)-\u003eIO()",
          "package": "gloss-raster",
          "partial": "Array",
          "signature": "Display-\u003e(Int,Int)-\u003e(Float-\u003eArray D DIM Color)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:animateArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnimate a bitmap generated from a Repa array, via the IO monad.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "animateArrayIO",
          "package": "gloss-raster",
          "signature": "Display-\u003e (Int, Int)-\u003e (Float -\u003e IO (Array D DIM2 Color))-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Animate bitmap generated from Repa array via the IO monad",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "animateArrayIO",
          "normalized": "Display-\u003e(Int,Int)-\u003e(Float-\u003eIO(Array D DIM Color))-\u003eIO()",
          "package": "gloss-raster",
          "partial": "Array IO",
          "signature": "Display-\u003e(Int,Int)-\u003e(Float-\u003eIO(Array D DIM Color))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:animateArrayIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay with a bitmap generated from a Repa array.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "playArray",
          "package": "gloss-raster",
          "signature": "Display-\u003e (Int, Int)-\u003e Int-\u003e world-\u003e (world -\u003e Array D DIM2 Color)-\u003e (Event -\u003e world -\u003e world)-\u003e (Float -\u003e world -\u003e world)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Play with bitmap generated from Repa array",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "playArray",
          "normalized": "Display-\u003e(Int,Int)-\u003eInt-\u003ea-\u003e(a-\u003eArray D DIM Color)-\u003e(Event-\u003ea-\u003ea)-\u003e(Float-\u003ea-\u003ea)-\u003eIO()",
          "package": "gloss-raster",
          "partial": "Array",
          "signature": "Display-\u003e(Int,Int)-\u003eInt-\u003eworld-\u003e(world-\u003eArray D DIM Color)-\u003e(Event-\u003eworld-\u003eworld)-\u003e(Float-\u003eworld-\u003eworld)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:playArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay with a bitmap generated from a Repa array, via the IO monad.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "playArrayIO",
          "package": "gloss-raster",
          "signature": "Display-\u003e (Int, Int)-\u003e Int-\u003e world-\u003e (world -\u003e IO (Array D DIM2 Color))-\u003e (Event -\u003e world -\u003e IO world)-\u003e (Float -\u003e world -\u003e IO world)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Play with bitmap generated from Repa array via the IO monad",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "playArrayIO",
          "normalized": "Display-\u003e(Int,Int)-\u003eInt-\u003ea-\u003e(a-\u003eIO(Array D DIM Color))-\u003e(Event-\u003ea-\u003eIO a)-\u003e(Float-\u003ea-\u003eIO a)-\u003eIO()",
          "package": "gloss-raster",
          "partial": "Array IO",
          "signature": "Display-\u003e(Int,Int)-\u003eInt-\u003eworld-\u003e(world-\u003eIO(Array D DIM Color))-\u003e(Event-\u003eworld-\u003eIO world)-\u003e(Float-\u003eworld-\u003eIO world)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:playArrayIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e\u003cp\u003eEach component is clipped to the range [0..1]\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "rgb",
          "package": "gloss-raster",
          "signature": "Float -\u003e Float -\u003e Float -\u003e Color",
          "source": "src/Graphics-Gloss-Raster-Array.html#rgb",
          "type": "function"
        },
        "index": {
          "description": "Construct color from red green blue components Each component is clipped to the range",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "rgb",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003eColor",
          "package": "gloss-raster",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e\u003cp\u003eEach component is clipped to the range [0..255]\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "rgb8",
          "package": "gloss-raster",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Color",
          "source": "src/Graphics-Gloss-Raster-Array.html#rgb8",
          "type": "function"
        },
        "index": {
          "description": "Construct color from red green blue components Each component is clipped to the range",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "rgb8",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eColor",
          "package": "gloss-raster",
          "signature": "Int-\u003eInt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:rgb8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "rgb8w",
          "package": "gloss-raster",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Color",
          "source": "src/Graphics-Gloss-Raster-Array.html#rgb8w",
          "type": "function"
        },
        "index": {
          "description": "Construct color from red green blue components",
          "hierarchy": "Graphics Gloss Raster Array",
          "module": "Graphics.Gloss.Raster.Array",
          "name": "rgb8w",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eColor",
          "package": "gloss-raster",
          "signature": "Word-\u003eWord-\u003eWord-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Array.html#v:rgb8w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering of continuous 2D functions as raster fields.\n\u003c/p\u003e\u003cp\u003eGloss programs should be compiled with \u003ccode\u003e-threaded\u003c/code\u003e, otherwise the GHC runtime\n  will limit the frame-rate to around 20Hz.\n\u003c/p\u003e\u003cp\u003eThe performance of programs using this interface is sensitive to how much\n  boxing and unboxing the GHC simplifier manages to eliminate. For the best\n  result add INLINE pragmas to all of your numeric functions and use the following\n  compile options.  \n\u003c/p\u003e\u003cpre\u003e-threaded -Odph -fno-liberate-case -funfolding-use-threshold1000 -funfolding-keeness-factor1000 -fllvm -optlo-O3\u003c/pre\u003e\u003cp\u003eSee the examples the \u003ccode\u003eraster\u003c/code\u003e directory of the \u003ccode\u003egloss-examples\u003c/code\u003e package \n  for more details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "Field",
          "package": "gloss-raster",
          "source": "src/Graphics-Gloss-Raster-Field.html",
          "type": "module"
        },
        "index": {
          "description": "Rendering of continuous functions as raster fields Gloss programs should be compiled with threaded otherwise the GHC runtime will limit the frame-rate to around Hz The performance of programs using this interface is sensitive to how much boxing and unboxing the GHC simplifier manages to eliminate For the best result add INLINE pragmas to all of your numeric functions and use the following compile options threaded Odph fno-liberate-case funfolding-use-threshold1000 funfolding-keeness-factor1000 fllvm optlo-O3 See the examples the raster directory of the gloss-examples package for more details",
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "Field",
          "package": "gloss-raster",
          "partial": "Field",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes how Gloss should display its output.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "Display",
          "package": "gloss-raster",
          "type": "data"
        },
        "index": {
          "description": "Describes how Gloss should display its output",
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "Display",
          "package": "gloss-raster",
          "partial": "Display",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#t:Display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point on the x-y plane.\n   Points can also be treated as \u003ccode\u003eVector\u003c/code\u003es, so \u003ca\u003eGraphics.Gloss.Data.Vector\u003c/a\u003e\n   may also be useful.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "Point",
          "package": "gloss-raster",
          "type": "type"
        },
        "index": {
          "description": "point on the x-y plane Points can also be treated as Vector so Graphics.Gloss.Data.Vector may also be useful",
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "Point",
          "package": "gloss-raster",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnimate a continuous 2D function.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "animateField",
          "package": "gloss-raster",
          "signature": "Display-\u003e (Int, Int)-\u003e (Float -\u003e Point -\u003e Color)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Animate continuous function",
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "animateField",
          "normalized": "Display-\u003e(Int,Int)-\u003e(Float-\u003ePoint-\u003eColor)-\u003eIO()",
          "package": "gloss-raster",
          "partial": "Field",
          "signature": "Display-\u003e(Int,Int)-\u003e(Float-\u003ePoint-\u003eColor)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:animateField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Raster.Field",
          "name": "makeFrame",
          "package": "gloss-raster",
          "signature": "Int -\u003e Int -\u003e (Point -\u003e Color) -\u003e Array (I D) DIM2 (Word8, Word8, Word8)",
          "source": "src/Graphics-Gloss-Raster-Field.html#makeFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "makeFrame",
          "normalized": "Int-\u003eInt-\u003e(Point-\u003eColor)-\u003eArray(I D)DIM(Word,Word,Word)",
          "package": "gloss-raster",
          "partial": "Frame",
          "signature": "Int-\u003eInt-\u003e(Point-\u003eColor)-\u003eArray(I D)DIM(Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:makeFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Raster.Field",
          "name": "makePicture",
          "package": "gloss-raster",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e (Point -\u003e Color) -\u003e Picture",
          "source": "src/Graphics-Gloss-Raster-Field.html#makePicture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "makePicture",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e(Point-\u003eColor)-\u003ePicture",
          "package": "gloss-raster",
          "partial": "Picture",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e(Point-\u003eColor)-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:makePicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a game with a continous 2D function.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "playField",
          "package": "gloss-raster",
          "signature": "Display-\u003e (Int, Int)-\u003e Int-\u003e world-\u003e (world -\u003e Point -\u003e Color)-\u003e (Event -\u003e world -\u003e world)-\u003e (Float -\u003e world -\u003e world)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Play game with continous function",
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "playField",
          "normalized": "Display-\u003e(Int,Int)-\u003eInt-\u003ea-\u003e(a-\u003ePoint-\u003eColor)-\u003e(Event-\u003ea-\u003ea)-\u003e(Float-\u003ea-\u003ea)-\u003eIO()",
          "package": "gloss-raster",
          "partial": "Field",
          "signature": "Display-\u003e(Int,Int)-\u003eInt-\u003eworld-\u003e(world-\u003ePoint-\u003eColor)-\u003e(Event-\u003eworld-\u003eworld)-\u003e(Float-\u003eworld-\u003eworld)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:playField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e\u003cp\u003eEach component is clipped to the range [0..1]\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "rgb",
          "package": "gloss-raster",
          "signature": "Float -\u003e Float -\u003e Float -\u003e Color",
          "source": "src/Graphics-Gloss-Raster-Field.html#rgb",
          "type": "function"
        },
        "index": {
          "description": "Construct color from red green blue components Each component is clipped to the range",
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "rgb",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003eColor",
          "package": "gloss-raster",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e\u003cp\u003eEach component is clipped to the range [0..255]\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "rgb8",
          "package": "gloss-raster",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Color",
          "source": "src/Graphics-Gloss-Raster-Field.html#rgb8",
          "type": "function"
        },
        "index": {
          "description": "Construct color from red green blue components Each component is clipped to the range",
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "rgb8",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eColor",
          "package": "gloss-raster",
          "signature": "Int-\u003eInt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:rgb8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a color from red, green, blue components.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "rgb8w",
          "package": "gloss-raster",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Color",
          "source": "src/Graphics-Gloss-Raster-Field.html#rgb8w",
          "type": "function"
        },
        "index": {
          "description": "Construct color from red green blue components",
          "hierarchy": "Graphics Gloss Raster Field",
          "module": "Graphics.Gloss.Raster.Field",
          "name": "rgb8w",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eColor",
          "package": "gloss-raster",
          "signature": "Word-\u003eWord-\u003eWord-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-raster/docs/Graphics-Gloss-Raster-Field.html#v:rgb8w"
      }
    }
  ]
]