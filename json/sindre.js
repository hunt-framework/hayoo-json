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
        "word": "sindre"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the Xft library based on the \u003ccode\u003eX11-xft\u003c/code\u003e binding by\n Clemens Fruhwirth.  This library builds upon the X11 binding to\n Xlib (\u003ca\u003eGraphics.X11\u003c/a\u003e) and cannot be used with any other.  A tiny\n part of Xrender is also exposed, as no Haskell interface exists as\n of this writing.\n\u003c/p\u003e\u003cp\u003eThe spirit of this binding is to hide away the fact that the\n underlying implementation is accessed via the FFI, and create a\n Haskell-like interface that does not expose many artifacts of the C\n implementation.  To that end, the only numeric types exposed are\n high-level (no \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003es), and facilities for integrating resource\n cleanup with the Haskell garbage collector have been defined (see\n \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eAnother priority has been robustness.  Many naively written FFI\n bindings to not properly check the return values of the C functions\n they call.  In particular, null pointers are often assumed to never\n exist, and oftentimes impossible to check by the user as the\n underlying pointer is not visible across the module boundary.  In\n this binding, any Xft function that can return null has been\n translated into a Haskell function that returns a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eTwo kinds of allocator functions are provided: some that use the\n nomenclature \u003ccode\u003enew\u003c/code\u003e and some that uses \u003ccode\u003eopen\u003c/code\u003e (for example\n \u003ccode\u003e\u003ca\u003enewColorName\u003c/a\u003e\u003c/code\u003e versus \u003ccode\u003e\u003ca\u003eopenColorName\u003c/a\u003e\u003c/code\u003e).  The former require that\n you explicitly call the corresponding deallocator (\u003ccode\u003e\u003ca\u003efreeColor\u003c/a\u003e\u003c/code\u003e in\n this case), while the latter takes an \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e as an additional\n argument, and automatically calls the deallocator when the value is\n garbage-collected.  It is an error to call a deallocator on an\n automatically managed value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.X11.Xft",
          "name": "Xft",
          "package": "sindre",
          "source": "src/Graphics-X11-Xft.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the Xft library based on the X11-xft binding by Clemens Fruhwirth This library builds upon the X11 binding to Xlib Graphics.X11 and cannot be used with any other tiny part of Xrender is also exposed as no Haskell interface exists as of this writing The spirit of this binding is to hide away the fact that the underlying implementation is accessed via the FFI and create Haskell-like interface that does not expose many artifacts of the implementation To that end the only numeric types exposed are high-level no CInt and facilities for integrating resource cleanup with the Haskell garbage collector have been defined see XftMgr Another priority has been robustness Many naively written FFI bindings to not properly check the return values of the functions they call In particular null pointers are often assumed to never exist and oftentimes impossible to check by the user as the underlying pointer is not visible across the module boundary In this binding any Xft function that can return null has been translated into Haskell function that returns Maybe value Two kinds of allocator functions are provided some that use the nomenclature new and some that uses open for example newColorName versus openColorName The former require that you explicitly call the corresponding deallocator freeColor in this case while the latter takes an XftMgr as an additional argument and automatically calls the deallocator when the value is garbage-collected It is an error to call deallocator on an automatically managed value",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "Xft",
          "package": "sindre",
          "partial": "Xft",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Xft colour.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "Color",
          "package": "sindre",
          "source": "src/Graphics-X11-Xft.html#Color",
          "type": "data"
        },
        "index": {
          "description": "An Xft colour",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "Color",
          "package": "sindre",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Xft drawable.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "Draw",
          "package": "sindre",
          "source": "src/Graphics-X11-Xft.html#Draw",
          "type": "data"
        },
        "index": {
          "description": "An Xft drawable",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "Draw",
          "package": "sindre",
          "partial": "Draw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:Draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Xft font.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "Font",
          "package": "sindre",
          "source": "src/Graphics-X11-Xft.html#Font",
          "type": "data"
        },
        "index": {
          "description": "An Xft font",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "Font",
          "package": "sindre",
          "partial": "Font",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of some glyph(s).  Note that there's a difference\n between the logical size, which may include some blank pixels, and\n the actual bitmap.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "GlyphInfo",
          "package": "sindre",
          "source": "src/Graphics-X11-Xft.html#GlyphInfo",
          "type": "data"
        },
        "index": {
          "description": "The size of some glyph Note that there difference between the logical size which may include some blank pixels and the actual bitmap",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "GlyphInfo",
          "package": "sindre",
          "partial": "Glyph Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:GlyphInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eXRenderColor\u003c/code\u003e from the XRender library.  Note that the\n colour channels are only interpreted as 16-bit numbers when\n actually used.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "RenderColor",
          "package": "sindre",
          "source": "src/Graphics-X11-Xft.html#RenderColor",
          "type": "data"
        },
        "index": {
          "description": "The XRenderColor from the XRender library Note that the colour channels are only interpreted as bit numbers when actually used",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "RenderColor",
          "package": "sindre",
          "partial": "Render Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:RenderColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA central staging point for Xft object creation.  All Xft object\n creation functions take as argument an \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e value that keeps\n track of lifetime information.  You are required to manually free\n the \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003efreeXftMgr\u003c/a\u003e\u003c/code\u003e when you are done with it.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "XftMgr",
          "package": "sindre",
          "source": "src/Graphics-X11-Xft.html#XftMgr",
          "type": "data"
        },
        "index": {
          "description": "central staging point for Xft object creation All Xft object creation functions take as argument an XftMgr value that keeps track of lifetime information You are required to manually free the XftMgr via freeXftMgr when you are done with it",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "XftMgr",
          "package": "sindre",
          "partial": "Xft Mgr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:XftMgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "GlyphInfo",
          "package": "sindre",
          "signature": "GlyphInfo",
          "source": "src/Graphics-X11-Xft.html#GlyphInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "GlyphInfo",
          "package": "sindre",
          "partial": "Glyph Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:GlyphInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "RenderColor",
          "package": "sindre",
          "signature": "RenderColor",
          "source": "src/Graphics-X11-Xft.html#RenderColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "RenderColor",
          "package": "sindre",
          "partial": "Render Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:RenderColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "alpha",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#RenderColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "alpha",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ascent (vertical distance upwards from the baseline) of a\n character in the font.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "ascent",
          "package": "sindre",
          "signature": "Font -\u003e a",
          "source": "src/Graphics-X11-Xft.html#ascent",
          "type": "function"
        },
        "index": {
          "description": "The ascent vertical distance upwards from the baseline of character in the font",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "ascent",
          "normalized": "Font-\u003ea",
          "package": "sindre",
          "signature": "Font-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:ascent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "blue",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#RenderColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "blue",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the X11 drawable underlying the Xft drawable.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "changeDraw",
          "package": "sindre",
          "signature": "Draw -\u003e Drawable -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#changeDraw",
          "type": "function"
        },
        "index": {
          "description": "Change the X11 drawable underlying the Xft drawable",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "changeDraw",
          "normalized": "Draw-\u003eDrawable-\u003eIO()",
          "package": "sindre",
          "partial": "Draw",
          "signature": "Draw-\u003eDrawable-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:changeDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe colormap for the Xft drawable.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "colormap",
          "package": "sindre",
          "signature": "Draw -\u003e Colormap",
          "source": "src/Graphics-X11-Xft.html#colormap",
          "type": "function"
        },
        "index": {
          "description": "The colormap for the Xft drawable",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "colormap",
          "normalized": "Draw-\u003eColormap",
          "package": "sindre",
          "signature": "Draw-\u003eColormap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:colormap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe descent (vertical distance downwards from the baseline) of a\n character in the font.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "descent",
          "package": "sindre",
          "signature": "Font -\u003e a",
          "source": "src/Graphics-X11-Xft.html#descent",
          "type": "function"
        },
        "index": {
          "description": "The descent vertical distance downwards from the baseline of character in the font",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "descent",
          "normalized": "Font-\u003ea",
          "package": "sindre",
          "signature": "Font-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:descent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe display for the Xft drawable.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "display",
          "package": "sindre",
          "signature": "Draw -\u003e Display",
          "source": "src/Graphics-X11-Xft.html#display",
          "type": "function"
        },
        "index": {
          "description": "The display for the Xft drawable",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "display",
          "normalized": "Draw-\u003eDisplay",
          "package": "sindre",
          "signature": "Draw-\u003eDisplay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a sequence of glyphs on the given drawable in the specified\n colour and font.  Drawing begins at the baseline of the string.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "drawGlyphs",
          "package": "sindre",
          "signature": "Draw -\u003e Color -\u003e Font -\u003e x -\u003e y -\u003e [c] -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#drawGlyphs",
          "type": "function"
        },
        "index": {
          "description": "Draw sequence of glyphs on the given drawable in the specified colour and font Drawing begins at the baseline of the string",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "drawGlyphs",
          "normalized": "Draw-\u003eColor-\u003eFont-\u003ea-\u003eb-\u003e[c]-\u003eIO()",
          "package": "sindre",
          "partial": "Glyphs",
          "signature": "Draw-\u003eColor-\u003eFont-\u003ex-\u003ey-\u003e[c]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:drawGlyphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edrawRect d c x y w h\u003c/code\u003e draws a solid rectangle on \u003ccode\u003ed\u003c/code\u003e with colour\n \u003ccode\u003ec\u003c/code\u003e, with its upper left corner at \u003ccode\u003e(x,y)\u003c/code\u003e, width \u003ccode\u003ew\u003c/code\u003e and height\n \u003ccode\u003eh\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "drawRect",
          "package": "sindre",
          "signature": "Draw -\u003e Color -\u003e x -\u003e y -\u003e w -\u003e h -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#drawRect",
          "type": "function"
        },
        "index": {
          "description": "drawRect draws solid rectangle on with colour with its upper left corner at width and height",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "drawRect",
          "normalized": "Draw-\u003eColor-\u003ea-\u003eb-\u003ec-\u003ed-\u003eIO()",
          "package": "sindre",
          "partial": "Rect",
          "signature": "Draw-\u003eColor-\u003ex-\u003ey-\u003ew-\u003eh-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:drawRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a string on the given drawable in the specified colour and\n font.  Drawing begins at the baseline of the string.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "drawString",
          "package": "sindre",
          "signature": "Draw -\u003e Color -\u003e Font -\u003e x -\u003e y -\u003e String -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#drawString",
          "type": "function"
        },
        "index": {
          "description": "Draw string on the given drawable in the specified colour and font Drawing begins at the baseline of the string",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "drawString",
          "normalized": "Draw-\u003eColor-\u003eFont-\u003ea-\u003eb-\u003eString-\u003eIO()",
          "package": "sindre",
          "partial": "String",
          "signature": "Draw-\u003eColor-\u003eFont-\u003ex-\u003ey-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:drawString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe X11 drawable underlying the Xft drawable.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "drawable",
          "package": "sindre",
          "signature": "Draw -\u003e Drawable",
          "source": "src/Graphics-X11-Xft.html#drawable",
          "type": "function"
        },
        "index": {
          "description": "The X11 drawable underlying the Xft drawable",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "drawable",
          "normalized": "Draw-\u003eDrawable",
          "package": "sindre",
          "signature": "Draw-\u003eDrawable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:drawable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree a colour that has been allocated with \u003ccode\u003e\u003ca\u003enewColorName\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enewColorValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "freeColor",
          "package": "sindre",
          "signature": "Display -\u003e Visual -\u003e Colormap -\u003e Color -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#freeColor",
          "type": "function"
        },
        "index": {
          "description": "Free colour that has been allocated with newColorName or newColorValue",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "freeColor",
          "normalized": "Display-\u003eVisual-\u003eColormap-\u003eColor-\u003eIO()",
          "package": "sindre",
          "partial": "Color",
          "signature": "Display-\u003eVisual-\u003eColormap-\u003eColor-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:freeColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree a \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e created with \u003ccode\u003e\u003ca\u003enewDraw\u003c/a\u003e\u003c/code\u003e.  Do not free \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003es\n created with \u003ccode\u003e\u003ca\u003eopenDraw\u003c/a\u003e\u003c/code\u003e, these are automatically managed.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "freeDraw",
          "package": "sindre",
          "signature": "Draw -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#freeDraw",
          "type": "function"
        },
        "index": {
          "description": "Free Draw created with newDraw Do not free Draw created with openDraw these are automatically managed",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "freeDraw",
          "normalized": "Draw-\u003eIO()",
          "package": "sindre",
          "partial": "Draw",
          "signature": "Draw-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:freeDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the given Xft font.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "freeFont",
          "package": "sindre",
          "signature": "Display -\u003e Font -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#freeFont",
          "type": "function"
        },
        "index": {
          "description": "Close the given Xft font",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "freeFont",
          "normalized": "Display-\u003eFont-\u003eIO()",
          "package": "sindre",
          "partial": "Font",
          "signature": "Display-\u003eFont-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:freeFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree the manager and reclaim any objects associated with it.\n After an \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e has been freed, it is invalid to use any objects\n created through it.  The lock must currently be held by the thread\n calling \u003ccode\u003e\u003ca\u003efreeXftMgr\u003c/a\u003e\u003c/code\u003e, and it will be repeatedly released and\n reacquired throughout deallocating any remaining objects in the\n manager.  When the command returns, the lock will once again be\n held.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "freeXftMgr",
          "package": "sindre",
          "signature": "XftMgr -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#freeXftMgr",
          "type": "function"
        },
        "index": {
          "description": "Free the manager and reclaim any objects associated with it After an XftMgr has been freed it is invalid to use any objects created through it The lock must currently be held by the thread calling freeXftMgr and it will be repeatedly released and reacquired throughout deallocating any remaining objects in the manager When the command returns the lock will once again be held",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "freeXftMgr",
          "normalized": "XftMgr-\u003eIO()",
          "package": "sindre",
          "partial": "Xft Mgr",
          "signature": "XftMgr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:freeXftMgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "glyphHeight",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#GlyphInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "glyphHeight",
          "package": "sindre",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "glyphImageHeight",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#GlyphInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "glyphImageHeight",
          "package": "sindre",
          "partial": "Image Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphImageHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "glyphImageWidth",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#GlyphInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "glyphImageWidth",
          "package": "sindre",
          "partial": "Image Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphImageWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "glyphImageX",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#GlyphInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "glyphImageX",
          "package": "sindre",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphImageX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "glyphImageY",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#GlyphInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "glyphImageY",
          "package": "sindre",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphImageY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "glyphWidth",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#GlyphInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "glyphWidth",
          "package": "sindre",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "green",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#RenderColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "green",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ascent plus descent of a character in the font.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "height",
          "package": "sindre",
          "signature": "Font -\u003e a",
          "source": "src/Graphics-X11-Xft.html#height",
          "type": "function"
        },
        "index": {
          "description": "The ascent plus descent of character in the font",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "height",
          "normalized": "Font-\u003ea",
          "package": "sindre",
          "signature": "Font-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLock the file underlying the Xft font.  I am not certain when you\n would need this.  The return value is supposed to be an \u003ccode\u003eFT_TYPE\u003c/code\u003e\n from Freetype, but that binding has not been written yet.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "lockFace",
          "package": "sindre",
          "signature": "Font -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#lockFace",
          "type": "function"
        },
        "index": {
          "description": "Lock the file underlying the Xft font am not certain when you would need this The return value is supposed to be an FT TYPE from Freetype but that binding has not been written yet",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "lockFace",
          "normalized": "Font-\u003eIO()",
          "package": "sindre",
          "partial": "Face",
          "signature": "Font-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:lockFace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe greatest horizontal width of a character in the font.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "maxAdvanceWidth",
          "package": "sindre",
          "signature": "Font -\u003e a",
          "source": "src/Graphics-X11-Xft.html#maxAdvanceWidth",
          "type": "function"
        },
        "index": {
          "description": "The greatest horizontal width of character in the font",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "maxAdvanceWidth",
          "normalized": "Font-\u003ea",
          "package": "sindre",
          "partial": "Advance Width",
          "signature": "Font-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:maxAdvanceWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new Xft colour based on a name.  The name may be either\n a human-readable colour such as \u003ca\u003ered\u003c/a\u003e, \u003ca\u003ewhite\u003c/a\u003e or \u003ca\u003edarkslategray\u003c/a\u003e\n (all core X colour names are supported) or a hexidecimal name such\n as \u003ca/\u003e.  Names are not case-sensitive.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n the given name is not recognised as a colour.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "newColorName",
          "package": "sindre",
          "signature": "Display -\u003e Visual -\u003e Colormap -\u003e String -\u003e IO (Maybe Color)",
          "source": "src/Graphics-X11-Xft.html#newColorName",
          "type": "function"
        },
        "index": {
          "description": "Create new Xft colour based on name The name may be either human-readable colour such as red white or darkslategray all core colour names are supported or hexidecimal name such as Names are not case-sensitive Returns Nothing if the given name is not recognised as colour",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "newColorName",
          "normalized": "Display-\u003eVisual-\u003eColormap-\u003eString-\u003eIO(Maybe Color)",
          "package": "sindre",
          "partial": "Color Name",
          "signature": "Display-\u003eVisual-\u003eColormap-\u003eString-\u003eIO(Maybe Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newColorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewColorName\u003c/a\u003e\u003c/code\u003e, but instead of a name, an XRender color value\n is used.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "newColorValue",
          "package": "sindre",
          "signature": "Display -\u003e Visual -\u003e Colormap -\u003e RenderColor -\u003e IO (Maybe Color)",
          "source": "src/Graphics-X11-Xft.html#newColorValue",
          "type": "function"
        },
        "index": {
          "description": "As newColorName but instead of name an XRender color value is used",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "newColorValue",
          "normalized": "Display-\u003eVisual-\u003eColormap-\u003eRenderColor-\u003eIO(Maybe Color)",
          "package": "sindre",
          "partial": "Color Value",
          "signature": "Display-\u003eVisual-\u003eColormap-\u003eRenderColor-\u003eIO(Maybe Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newColorValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new Xft drawable on the given display, using the\n provided \u003ccode\u003e\u003ca\u003eDrawable\u003c/a\u003e\u003c/code\u003e to draw on.  Will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n call to \u003ccode\u003eXftDrawCreate\u003c/code\u003e fails, which it will usually only do if\n memory cannot be allocated.  The \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e has to be manually freed\n with \u003ccode\u003e\u003ca\u003efreeDraw\u003c/a\u003e\u003c/code\u003e once you are done with it.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "newDraw",
          "package": "sindre",
          "signature": "Display -\u003e Drawable -\u003e Visual -\u003e Colormap -\u003e IO (Maybe Draw)",
          "source": "src/Graphics-X11-Xft.html#newDraw",
          "type": "function"
        },
        "index": {
          "description": "Create new Xft drawable on the given display using the provided Drawable to draw on Will return Nothing if the call to XftDrawCreate fails which it will usually only do if memory cannot be allocated The Draw has to be manually freed with freeDraw once you are done with it",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "newDraw",
          "normalized": "Display-\u003eDrawable-\u003eVisual-\u003eColormap-\u003eIO(Maybe Draw)",
          "package": "sindre",
          "partial": "Draw",
          "signature": "Display-\u003eDrawable-\u003eVisual-\u003eColormap-\u003eIO(Maybe Draw)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBehaves as \u003ccode\u003e\u003ca\u003enewDraw\u003c/a\u003e\u003c/code\u003e, except that it uses a \u003ccode\u003e\u003ca\u003ePixmap\u003c/a\u003e\u003c/code\u003e of the given depth\n instead of a \u003ccode\u003e\u003ca\u003eDrawable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "newDrawAlpha",
          "package": "sindre",
          "signature": "Display -\u003e Pixmap -\u003e a -\u003e IO (Maybe Draw)",
          "source": "src/Graphics-X11-Xft.html#newDrawAlpha",
          "type": "function"
        },
        "index": {
          "description": "Behaves as newDraw except that it uses Pixmap of the given depth instead of Drawable",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "newDrawAlpha",
          "normalized": "Display-\u003ePixmap-\u003ea-\u003eIO(Maybe Draw)",
          "package": "sindre",
          "partial": "Draw Alpha",
          "signature": "Display-\u003ePixmap-\u003ea-\u003eIO(Maybe Draw)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newDrawAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBehaves as \u003ccode\u003e\u003ca\u003enewDraw\u003c/a\u003e\u003c/code\u003e, except that it uses a \u003ccode\u003e\u003ca\u003ePixmap\u003c/a\u003e\u003c/code\u003e of color\n depth 1 instead of a \u003ccode\u003e\u003ca\u003eDrawable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "newDrawBitmap",
          "package": "sindre",
          "signature": "Display -\u003e Pixmap -\u003e IO (Maybe Draw)",
          "source": "src/Graphics-X11-Xft.html#newDrawBitmap",
          "type": "function"
        },
        "index": {
          "description": "Behaves as newDraw except that it uses Pixmap of color depth instead of Drawable",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "newDrawBitmap",
          "normalized": "Display-\u003ePixmap-\u003eIO(Maybe Draw)",
          "package": "sindre",
          "partial": "Draw Bitmap",
          "signature": "Display-\u003ePixmap-\u003eIO(Maybe Draw)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newDrawBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewFontName dpy scr s\u003c/code\u003e, where \u003ccode\u003es\u003c/code\u003e is a Fontconfig pattern\n string, finds the best match for \u003ccode\u003es\u003c/code\u003e and returns a font that can be\n used to draw on the given screen.  This function very rarely\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, and seems to return some default font even if\n you feed it utter garbage (or an empty string).\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "newFontName",
          "package": "sindre",
          "signature": "Display -\u003e Screen -\u003e String -\u003e IO (Maybe Font)",
          "source": "src/Graphics-X11-Xft.html#newFontName",
          "type": "function"
        },
        "index": {
          "description": "newFontName dpy scr where is Fontconfig pattern string finds the best match for and returns font that can be used to draw on the given screen This function very rarely returns Nothing and seems to return some default font even if you feed it utter garbage or an empty string",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "newFontName",
          "normalized": "Display-\u003eScreen-\u003eString-\u003eIO(Maybe Font)",
          "package": "sindre",
          "partial": "Font Name",
          "signature": "Display-\u003eScreen-\u003eString-\u003eIO(Maybe Font)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newFontName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewFontName\u003c/a\u003e\u003c/code\u003e, except that the name should be an X Logical\n Font Description (the usual fourteen elements produced by\n \u003ccode\u003exfontsel\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "newFontXlfd",
          "package": "sindre",
          "signature": "Display -\u003e Screen -\u003e String -\u003e IO (Maybe Font)",
          "source": "src/Graphics-X11-Xft.html#newFontXlfd",
          "type": "function"
        },
        "index": {
          "description": "As newFontName except that the name should be an Logical Font Description the usual fourteen elements produced by xfontsel",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "newFontXlfd",
          "normalized": "Display-\u003eScreen-\u003eString-\u003eIO(Maybe Font)",
          "package": "sindre",
          "partial": "Font Xlfd",
          "signature": "Display-\u003eScreen-\u003eString-\u003eIO(Maybe Font)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newFontXlfd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e whose objects will be used on the given screen\n and display.  As Xlib is not re-entrant, a synchronisation\n mechanism must be used, so the \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e includes actions for\n obtaining and releasing atomic access to the display via two \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n actions.  These will be executed before and after objects allocated\n via the manager are released.  It is recommended to use an\n \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e to implement a mutex for synchronising\n the access, but if you are absolutely certain that there will not\n be any concurrent attempts to access the display, the actions can\n merely be \u003ccode\u003ereturn ()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "newXftMgr",
          "package": "sindre",
          "signature": "Display-\u003e Screen-\u003e IO ()-\u003e IO ()-\u003e IO XftMgr",
          "type": "function"
        },
        "index": {
          "description": "Create an XftMgr whose objects will be used on the given screen and display As Xlib is not re-entrant synchronisation mechanism must be used so the XftMgr includes actions for obtaining and releasing atomic access to the display via two IO actions These will be executed before and after objects allocated via the manager are released It is recommended to use an MVar to implement mutex for synchronising the access but if you are absolutely certain that there will not be any concurrent attempts to access the display the actions can merely be return",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "newXftMgr",
          "normalized": "Display-\u003eScreen-\u003eIO()-\u003eIO()-\u003eIO XftMgr",
          "package": "sindre",
          "partial": "Xft Mgr",
          "signature": "Display-\u003eScreen-\u003eIO()-\u003eIO()-\u003eIO XftMgr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newXftMgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewColorName\u003c/a\u003e\u003c/code\u003e, but automatically freed through the given Xft\n manager when no longer accessible.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "openColorName",
          "package": "sindre",
          "signature": "XftMgr -\u003e Visual -\u003e Colormap -\u003e String -\u003e IO (Maybe Color)",
          "source": "src/Graphics-X11-Xft.html#openColorName",
          "type": "function"
        },
        "index": {
          "description": "As newColorName but automatically freed through the given Xft manager when no longer accessible",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "openColorName",
          "normalized": "XftMgr-\u003eVisual-\u003eColormap-\u003eString-\u003eIO(Maybe Color)",
          "package": "sindre",
          "partial": "Color Name",
          "signature": "XftMgr-\u003eVisual-\u003eColormap-\u003eString-\u003eIO(Maybe Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openColorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewColorValue\u003c/a\u003e\u003c/code\u003e, but automatically freed through the given Xft\n manager when no longer accessible.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "openColorValue",
          "package": "sindre",
          "signature": "XftMgr -\u003e Visual -\u003e Colormap -\u003e RenderColor -\u003e IO (Maybe Color)",
          "source": "src/Graphics-X11-Xft.html#openColorValue",
          "type": "function"
        },
        "index": {
          "description": "As newColorValue but automatically freed through the given Xft manager when no longer accessible",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "openColorValue",
          "normalized": "XftMgr-\u003eVisual-\u003eColormap-\u003eRenderColor-\u003eIO(Maybe Color)",
          "package": "sindre",
          "partial": "Color Value",
          "signature": "XftMgr-\u003eVisual-\u003eColormap-\u003eRenderColor-\u003eIO(Maybe Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openColorValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewDraw\u003c/a\u003e\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "openDraw",
          "package": "sindre",
          "signature": "XftMgr -\u003e Drawable -\u003e Visual -\u003e Colormap -\u003e IO (Maybe Draw)",
          "source": "src/Graphics-X11-Xft.html#openDraw",
          "type": "function"
        },
        "index": {
          "description": "As newDraw but automatically freed when no longer used",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "openDraw",
          "normalized": "XftMgr-\u003eDrawable-\u003eVisual-\u003eColormap-\u003eIO(Maybe Draw)",
          "package": "sindre",
          "partial": "Draw",
          "signature": "XftMgr-\u003eDrawable-\u003eVisual-\u003eColormap-\u003eIO(Maybe Draw)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewDrawBitmap\u003c/a\u003e\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "openDrawAlpha",
          "package": "sindre",
          "signature": "XftMgr -\u003e Drawable -\u003e a -\u003e IO (Maybe Draw)",
          "source": "src/Graphics-X11-Xft.html#openDrawAlpha",
          "type": "function"
        },
        "index": {
          "description": "As newDrawBitmap but automatically freed when no longer used",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "openDrawAlpha",
          "normalized": "XftMgr-\u003eDrawable-\u003ea-\u003eIO(Maybe Draw)",
          "package": "sindre",
          "partial": "Draw Alpha",
          "signature": "XftMgr-\u003eDrawable-\u003ea-\u003eIO(Maybe Draw)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openDrawAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewDrawBitmap\u003c/a\u003e\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "openDrawBitmap",
          "package": "sindre",
          "signature": "XftMgr -\u003e Drawable -\u003e IO (Maybe Draw)",
          "source": "src/Graphics-X11-Xft.html#openDrawBitmap",
          "type": "function"
        },
        "index": {
          "description": "As newDrawBitmap but automatically freed when no longer used",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "openDrawBitmap",
          "normalized": "XftMgr-\u003eDrawable-\u003eIO(Maybe Draw)",
          "package": "sindre",
          "partial": "Draw Bitmap",
          "signature": "XftMgr-\u003eDrawable-\u003eIO(Maybe Draw)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openDrawBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewFontName\u003c/a\u003e\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "openFontName",
          "package": "sindre",
          "signature": "XftMgr -\u003e String -\u003e IO (Maybe Font)",
          "source": "src/Graphics-X11-Xft.html#openFontName",
          "type": "function"
        },
        "index": {
          "description": "As newFontName but automatically freed when no longer used",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "openFontName",
          "normalized": "XftMgr-\u003eString-\u003eIO(Maybe Font)",
          "package": "sindre",
          "partial": "Font Name",
          "signature": "XftMgr-\u003eString-\u003eIO(Maybe Font)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openFontName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003enewFontXfld\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "openFontXlfd",
          "package": "sindre",
          "signature": "XftMgr -\u003e String -\u003e IO (Maybe Font)",
          "source": "src/Graphics-X11-Xft.html#openFontXlfd",
          "type": "function"
        },
        "index": {
          "description": "As newFontXfld but automatically freed when no longer used",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "openFontXlfd",
          "normalized": "XftMgr-\u003eString-\u003eIO(Maybe Font)",
          "package": "sindre",
          "partial": "Font Xlfd",
          "signature": "XftMgr-\u003eString-\u003eIO(Maybe Font)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openFontXlfd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe core X11 colour contained in an Xft colour.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "pixel",
          "package": "sindre",
          "signature": "Color -\u003e Pixel",
          "source": "src/Graphics-X11-Xft.html#pixel",
          "type": "function"
        },
        "index": {
          "description": "The core X11 colour contained in an Xft colour",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "pixel",
          "normalized": "Color-\u003ePixel",
          "package": "sindre",
          "signature": "Color-\u003ePixel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:pixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xft",
          "name": "red",
          "package": "sindre",
          "signature": "Int",
          "source": "src/Graphics-X11-Xft.html#RenderColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "red",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that the 'glyphWidth'/'glyphHeight' fields are the number of\n pixels you should advance after drawing a string of this size.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "textExtents",
          "package": "sindre",
          "signature": "Display -\u003e Font -\u003e String -\u003e IO GlyphInfo",
          "source": "src/Graphics-X11-Xft.html#textExtents",
          "type": "function"
        },
        "index": {
          "description": "Note that the glyphWidth glyphHeight fields are the number of pixels you should advance after drawing string of this size",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "textExtents",
          "normalized": "Display-\u003eFont-\u003eString-\u003eIO GlyphInfo",
          "package": "sindre",
          "partial": "Extents",
          "signature": "Display-\u003eFont-\u003eString-\u003eIO GlyphInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:textExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut for calling \u003ccode\u003e\u003ca\u003etextExtents\u003c/a\u003e\u003c/code\u003e and picking out the\n \u003ccode\u003e\u003ca\u003eglyphHeight\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eGlyphInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "textHeight",
          "package": "sindre",
          "signature": "Display -\u003e Font -\u003e String -\u003e IO a",
          "source": "src/Graphics-X11-Xft.html#textHeight",
          "type": "function"
        },
        "index": {
          "description": "Shortcut for calling textExtents and picking out the glyphHeight field of the GlyphInfo",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "textHeight",
          "normalized": "Display-\u003eFont-\u003eString-\u003eIO a",
          "package": "sindre",
          "partial": "Height",
          "signature": "Display-\u003eFont-\u003eString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:textHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut for calling \u003ccode\u003e\u003ca\u003etextExtents\u003c/a\u003e\u003c/code\u003e and picking out the\n \u003ccode\u003e\u003ca\u003eglyphWidth\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eGlyphInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "textWidth",
          "package": "sindre",
          "signature": "Display -\u003e Font -\u003e String -\u003e IO a",
          "source": "src/Graphics-X11-Xft.html#textWidth",
          "type": "function"
        },
        "index": {
          "description": "Shortcut for calling textExtents and picking out the glyphWidth field of the GlyphInfo",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "textWidth",
          "normalized": "Display-\u003eFont-\u003eString-\u003eIO a",
          "package": "sindre",
          "partial": "Width",
          "signature": "Display-\u003eFont-\u003eString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:textWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlock a face locked by \u003ccode\u003elockFontFace\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "unlockFace",
          "package": "sindre",
          "signature": "Font -\u003e IO ()",
          "source": "src/Graphics-X11-Xft.html#unlockFace",
          "type": "function"
        },
        "index": {
          "description": "Unlock face locked by lockFontFace",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "unlockFace",
          "normalized": "Font-\u003eIO()",
          "package": "sindre",
          "partial": "Face",
          "signature": "Font-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:unlockFace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe visual for the Xft drawable.\n\u003c/p\u003e",
          "module": "Graphics.X11.Xft",
          "name": "visual",
          "package": "sindre",
          "signature": "Draw -\u003e Visual",
          "source": "src/Graphics-X11-Xft.html#visual",
          "type": "function"
        },
        "index": {
          "description": "The visual for the Xft drawable",
          "hierarchy": "Graphics X11 Xft",
          "module": "Graphics.X11.Xft",
          "name": "visual",
          "normalized": "Draw-\u003eVisual",
          "package": "sindre",
          "signature": "Draw-\u003eVisual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:visual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransforming a Sindre program into a callable function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.Compiler",
          "name": "Compiler",
          "package": "sindre",
          "source": "src/Sindre-Compiler.html",
          "type": "module"
        },
        "index": {
          "description": "Transforming Sindre program into callable function",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "Compiler",
          "package": "sindre",
          "partial": "Compiler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping from class names to constructors.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "ClassMap",
          "package": "sindre",
          "source": "src/Sindre-Compiler.html#ClassMap",
          "type": "type"
        },
        "index": {
          "description": "Mapping from class names to constructors",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "ClassMap",
          "package": "sindre",
          "partial": "Class Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:ClassMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad inside which compilation takes place.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "Compiler",
          "package": "sindre",
          "source": "src/Sindre-Compiler.html#Compiler",
          "type": "type"
        },
        "index": {
          "description": "Monad inside which compilation takes place",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "Compiler",
          "package": "sindre",
          "partial": "Compiler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:Compiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that, given an initial value, the name of itself if any,\n and a list of children, yields a computation that constructs a new\n widget.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "Constructor",
          "package": "sindre",
          "source": "src/Sindre-Compiler.html#Constructor",
          "type": "type"
        },
        "index": {
          "description": "Function that given an initial value the name of itself if any and list of children yields computation that constructs new widget",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "Constructor",
          "package": "sindre",
          "partial": "Constructor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad in which widget construction takes place.  You can only\n execute this by defining a \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e that is then used in a\n Sindre program (see also \u003ccode\u003e\u003ca\u003eClassMap\u003c/a\u003e\u003c/code\u003e).  An example usage could be:\n\u003c/p\u003e\u003cpre\u003e\n myWidget :: \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e MyBackEnd\n myWidget w k cs : do\n   -- ConstructorM is an instance of \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e, so we can provide\n   -- defaults or fallbacks for missing parameters.\n   arg \u003ca\u003e- 'param' \\\"myParam\\\" \u003c|\u003c/a\u003e return 12\n   \u003cem\u003erest of construction\u003c/em\u003e\n\u003c/pre\u003e",
          "module": "Sindre.Compiler",
          "name": "ConstructorM",
          "package": "sindre",
          "source": "src/Sindre-Compiler.html#ConstructorM",
          "type": "data"
        },
        "index": {
          "description": "The monad in which widget construction takes place You can only execute this by defining Constructor that is then used in Sindre program see also ClassMap An example usage could be myWidget Constructor MyBackEnd myWidget cs do ConstructorM is an instance of Alternative so we can provide defaults or fallbacks for missing parameters arg param myParam return rest of construction",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "ConstructorM",
          "package": "sindre",
          "partial": "Constructor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:ConstructorM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping from function names to built-in functions.  These must\n first be executed in the \u003ccode\u003e\u003ca\u003eCompiler\u003c/a\u003e\u003c/code\u003e monad as they may have specific\n requirements of the environment.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "FuncMap",
          "package": "sindre",
          "source": "src/Sindre-Compiler.html#FuncMap",
          "type": "type"
        },
        "index": {
          "description": "Mapping from function names to built-in functions These must first be executed in the Compiler monad as they may have specific requirements of the environment",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "FuncMap",
          "package": "sindre",
          "partial": "Func Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:FuncMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping from names of global variables to computations that yield\n their initial values.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "GlobMap",
          "package": "sindre",
          "source": "src/Sindre-Compiler.html#GlobMap",
          "type": "type"
        },
        "index": {
          "description": "Mapping from names of global variables to computations that yield their initial values",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "GlobMap",
          "package": "sindre",
          "partial": "Glob Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:GlobMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping from object names to object constructor functions.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "ObjectMap",
          "package": "sindre",
          "source": "src/Sindre-Compiler.html#ObjectMap",
          "type": "type"
        },
        "index": {
          "description": "Mapping from object names to object constructor functions",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "ObjectMap",
          "package": "sindre",
          "partial": "Object Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:ObjectMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types that a given backend can convert to from \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es.\n In effect, a monadic version of \u003ccode\u003e\u003ca\u003eMold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "Param",
          "package": "sindre",
          "source": "src/Sindre-Compiler.html#Param",
          "type": "class"
        },
        "index": {
          "description": "Class of types that given backend can convert to from Value In effect monadic version of Mold",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "Param",
          "package": "sindre",
          "partial": "Param",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebadValue k v\u003c/code\u003e signals that parameter \u003ccode\u003ek\u003c/code\u003e is present with value\n \u003ccode\u003ev\u003c/code\u003e, but that \u003ccode\u003ev\u003c/code\u003e is an invalid value.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "badValue",
          "package": "sindre",
          "signature": "String -\u003e Value -\u003e ConstructorM m a",
          "source": "src/Sindre-Compiler.html#badValue",
          "type": "function"
        },
        "index": {
          "description": "badValue signals that parameter is present with value but that is an invalid value",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "badValue",
          "normalized": "String-\u003eValue-\u003eConstructorM a b",
          "package": "sindre",
          "partial": "Value",
          "signature": "String-\u003eValue-\u003eConstructorM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:badValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Sindre program and its environment, compile the program\n and return a pair of command-line options accepted by the program,\n and a startup function.  The program can be executed by calling the\n startup function with the command-like arguments and an initial\n value for the root widget.  If compilation fails, an IO exception\n is raised.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "compileSindre",
          "package": "sindre",
          "signature": "Program -\u003e ClassMap m -\u003e ObjectMap m -\u003e FuncMap m -\u003e GlobMap m -\u003e ([SindreOption], Arguments -\u003e m ExitCode)",
          "source": "src/Sindre-Compiler.html#compileSindre",
          "type": "function"
        },
        "index": {
          "description": "Given Sindre program and its environment compile the program and return pair of command-line options accepted by the program and startup function The program can be executed by calling the startup function with the command-like arguments and an initial value for the root widget If compilation fails an IO exception is raised",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "compileSindre",
          "normalized": "Program-\u003eClassMap a-\u003eObjectMap a-\u003eFuncMap a-\u003eGlobMap a-\u003e([SindreOption],Arguments-\u003ea ExitCode)",
          "package": "sindre",
          "partial": "Sindre",
          "signature": "Program-\u003eClassMap m-\u003eObjectMap m-\u003eFuncMap m-\u003eGlobMap m-\u003e([SindreOption],Arguments-\u003em ExitCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:compileSindre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to convert the given Sindre value to the relevant\n Haskell value.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "moldM",
          "package": "sindre",
          "signature": "Value -\u003e m (Maybe a)",
          "source": "src/Sindre-Compiler.html#moldM",
          "type": "method"
        },
        "index": {
          "description": "Attempt to convert the given Sindre value to the relevant Haskell value",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "moldM",
          "normalized": "Value-\u003ea(Maybe b)",
          "package": "sindre",
          "signature": "Value-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:moldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enoParam k\u003c/code\u003e signals that parameter \u003ccode\u003ek\u003c/code\u003e is missing.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "noParam",
          "package": "sindre",
          "signature": "String -\u003e ConstructorM m a",
          "source": "src/Sindre-Compiler.html#noParam",
          "type": "function"
        },
        "index": {
          "description": "noParam signals that parameter is missing",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "noParam",
          "normalized": "String-\u003eConstructorM a b",
          "package": "sindre",
          "partial": "Param",
          "signature": "String-\u003eConstructorM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:noParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003emold\u003c/a\u003e\u003c/code\u003e is always used for conversion.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "param",
          "package": "sindre",
          "signature": "Identifier -\u003e ConstructorM m a",
          "source": "src/Sindre-Compiler.html#param",
          "type": "function"
        },
        "index": {
          "description": "As param but mold is always used for conversion",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "param",
          "normalized": "Identifier-\u003eConstructorM a b",
          "package": "sindre",
          "signature": "Identifier-\u003eConstructorM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ek \u003ccode\u003e\u003ca\u003eparamAs\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e yields the value of the widget parameter \u003ccode\u003ek\u003c/code\u003e,\n using \u003ccode\u003ef\u003c/code\u003e to convert it to the proper Haskell type.  If \u003ccode\u003ef\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebadValue\u003c/a\u003e\u003c/code\u003e k \u003c/code\u003e is called.  If \u003ccode\u003ek\u003c/code\u003e does not exist,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003enoParam\u003c/a\u003e\u003c/code\u003e k\u003c/code\u003e is called.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "paramAs",
          "package": "sindre",
          "signature": "Identifier -\u003e (Value -\u003e Maybe a) -\u003e ConstructorM m a",
          "source": "src/Sindre-Compiler.html#paramAs",
          "type": "function"
        },
        "index": {
          "description": "paramAs yields the value of the widget parameter using to convert it to the proper Haskell type If returns Nothing badValue is called If does not exist noParam is called",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "paramAs",
          "normalized": "Identifier-\u003e(Value-\u003eMaybe a)-\u003eConstructorM b a",
          "package": "sindre",
          "partial": "As",
          "signature": "Identifier-\u003e(Value-\u003eMaybe a)-\u003eConstructorM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:paramAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparamM\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003emoldM\u003c/a\u003e\u003c/code\u003e is always used for conversion.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "paramM",
          "package": "sindre",
          "signature": "Identifier -\u003e ConstructorM m a",
          "source": "src/Sindre-Compiler.html#paramM",
          "type": "function"
        },
        "index": {
          "description": "As paramM but moldM is always used for conversion",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "paramM",
          "normalized": "Identifier-\u003eConstructorM a b",
          "package": "sindre",
          "signature": "Identifier-\u003eConstructorM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:paramM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a variable name, return a computation that can be used to\n set the value of the variable when executed.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "setValue",
          "package": "sindre",
          "signature": "Identifier -\u003e Compiler m (Value -\u003e Execution m ())",
          "source": "src/Sindre-Compiler.html#setValue",
          "type": "function"
        },
        "index": {
          "description": "Given variable name return computation that can be used to set the value of the variable when executed",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "setValue",
          "normalized": "Identifier-\u003eCompiler a(Value-\u003eExecution a())",
          "package": "sindre",
          "partial": "Value",
          "signature": "Identifier-\u003eCompiler m(Value-\u003eExecution m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:setValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a variable name, return a computation that will yield the\n value of the variable when executed.\n\u003c/p\u003e",
          "module": "Sindre.Compiler",
          "name": "value",
          "package": "sindre",
          "signature": "Identifier -\u003e Compiler m (Execution m Value)",
          "source": "src/Sindre-Compiler.html#value",
          "type": "function"
        },
        "index": {
          "description": "Given variable name return computation that will yield the value of the variable when executed",
          "hierarchy": "Sindre Compiler",
          "module": "Sindre.Compiler",
          "name": "value",
          "normalized": "Identifier-\u003eCompiler a(Execution a Value)",
          "package": "sindre",
          "signature": "Identifier-\u003eCompiler m(Execution m Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser and definition of the dzen2-inspired formatting language\n used by Sindre.  A format string is a sequence of commands changing\n drawing option parameters, and things to draw.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.Formatting",
          "name": "Formatting",
          "package": "sindre",
          "source": "src/Sindre-Formatting.html",
          "type": "module"
        },
        "index": {
          "description": "Parser and definition of the dzen2-inspired formatting language used by Sindre format string is sequence of commands changing drawing option parameters and things to draw",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "Formatting",
          "package": "sindre",
          "partial": "Formatting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatting command is either a change to the drawing state, or\n a string to be printed at the current location.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "Format",
          "package": "sindre",
          "source": "src/Sindre-Formatting.html#Format",
          "type": "data"
        },
        "index": {
          "description": "formatting command is either change to the drawing state or string to be printed at the current location",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "Format",
          "package": "sindre",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of formatting commands, interpreted left-to-right.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "FormatString",
          "package": "sindre",
          "source": "src/Sindre-Formatting.html#FormatString",
          "type": "type"
        },
        "index": {
          "description": "list of formatting commands interpreted left-to-right",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "FormatString",
          "package": "sindre",
          "partial": "Format String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#t:FormatString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw the background in the given colour.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "Bg",
          "package": "sindre",
          "signature": "Bg String",
          "source": "src/Sindre-Formatting.html#Format",
          "type": "function"
        },
        "index": {
          "description": "Draw the background in the given colour",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "Bg",
          "package": "sindre",
          "partial": "Bg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:Bg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw the background in the default colour.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "DefBg",
          "package": "sindre",
          "signature": "DefBg",
          "source": "src/Sindre-Formatting.html#Format",
          "type": "function"
        },
        "index": {
          "description": "Draw the background in the default colour",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "DefBg",
          "package": "sindre",
          "partial": "Def Bg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:DefBg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw text in the default colour.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "DefFg",
          "package": "sindre",
          "signature": "DefFg",
          "source": "src/Sindre-Formatting.html#Format",
          "type": "function"
        },
        "index": {
          "description": "Draw text in the default colour",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "DefFg",
          "package": "sindre",
          "partial": "Def Fg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:DefFg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw text in the given colour.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "Fg",
          "package": "sindre",
          "signature": "Fg String",
          "source": "src/Sindre-Formatting.html#Format",
          "type": "function"
        },
        "index": {
          "description": "Draw text in the given colour",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "Fg",
          "package": "sindre",
          "partial": "Fg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:Fg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw the given string.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "Text",
          "package": "sindre",
          "signature": "Text Text",
          "source": "src/Sindre-Formatting.html#Format",
          "type": "function"
        },
        "index": {
          "description": "Draw the given string",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "Text",
          "package": "sindre",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a format string, returning either an error message or the\n result of the parse.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "parseFormatString",
          "package": "sindre",
          "signature": "Text -\u003e Either String FormatString",
          "source": "src/Sindre-Formatting.html#parseFormatString",
          "type": "function"
        },
        "index": {
          "description": "Parse format string returning either an error message or the result of the parse",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "parseFormatString",
          "normalized": "Text-\u003eEither String FormatString",
          "package": "sindre",
          "partial": "Format String",
          "signature": "Text-\u003eEither String FormatString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:parseFormatString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first background colour preceding any default background\n colour or text entry specified in the format string, if any.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "startBg",
          "package": "sindre",
          "signature": "FormatString -\u003e Maybe String",
          "source": "src/Sindre-Formatting.html#startBg",
          "type": "function"
        },
        "index": {
          "description": "The first background colour preceding any default background colour or text entry specified in the format string if any",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "startBg",
          "normalized": "FormatString-\u003eMaybe String",
          "package": "sindre",
          "partial": "Bg",
          "signature": "FormatString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:startBg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe human-readable part of a format string, with formatting\n directives stripped.\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "textContents",
          "package": "sindre",
          "signature": "FormatString -\u003e Text",
          "source": "src/Sindre-Formatting.html#textContents",
          "type": "function"
        },
        "index": {
          "description": "The human-readable part of format string with formatting directives stripped",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "textContents",
          "normalized": "FormatString-\u003eText",
          "package": "sindre",
          "partial": "Contents",
          "signature": "FormatString-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:textContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrettyprint a \u003ccode\u003e\u003ca\u003eFormatString\u003c/a\u003e\u003c/code\u003e to a string that, when parsed by\n \u003ccode\u003e\u003ca\u003eparseFormatString\u003c/a\u003e\u003c/code\u003e, results in the original \u003ccode\u003e\u003ca\u003eFormatString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sindre.Formatting",
          "name": "unparseFormatString",
          "package": "sindre",
          "signature": "FormatString -\u003e Text",
          "source": "src/Sindre-Formatting.html#unparseFormatString",
          "type": "function"
        },
        "index": {
          "description": "Prettyprint FormatString to string that when parsed by parseFormatString results in the original FormatString",
          "hierarchy": "Sindre Formatting",
          "module": "Sindre.Formatting",
          "name": "unparseFormatString",
          "normalized": "FormatString-\u003eText",
          "package": "sindre",
          "partial": "Format String",
          "signature": "FormatString-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:unparseFormatString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.KeyVal",
          "name": "KeyVal",
          "package": "sindre",
          "source": "src/Sindre-KeyVal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sindre KeyVal",
          "module": "Sindre.KeyVal",
          "name": "KeyVal",
          "package": "sindre",
          "partial": "Key Val",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e p\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the permutation\n parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input -\n use the optional combinator (\u003ccode\u003e\u003ca\u003e\u003c|?\u003e\u003c/a\u003e\u003c/code\u003e) instead. Returns a\n new permutation parser that includes \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Sindre.KeyVal",
          "name": "(\u003c||\u003e)",
          "package": "sindre",
          "signature": "PermParser p (a -\u003e b) -\u003e p a -\u003e PermParser p b",
          "type": "function"
        },
        "index": {
          "description": "The expression perm adds parser to the permutation parser perm The parser is not allowed to accept empty input use the optional combinator instead Returns new permutation parser that includes",
          "hierarchy": "Sindre KeyVal",
          "module": "Sindre.KeyVal",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "PermParser a(b-\u003ec)-\u003ea b-\u003ePermParser a c",
          "package": "sindre",
          "signature": "PermParser p(a-\u003eb)-\u003ep a-\u003ePermParser p b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e (x,p)\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the\n permutation parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can\n not be applied, the default value \u003ccode\u003ex\u003c/code\u003e will be used instead. Returns\n a new permutation parser that includes the optional parser \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Sindre.KeyVal",
          "name": "(\u003c|?\u003e)",
          "package": "sindre",
          "signature": "PermParser p (a -\u003e b) -\u003e (a, p a) -\u003e PermParser p b",
          "type": "function"
        },
        "index": {
          "description": "The expression perm adds parser to the permutation parser perm The parser is optional if it can not be applied the default value will be used instead Returns new permutation parser that includes the optional parser",
          "hierarchy": "Sindre KeyVal",
          "module": "Sindre.KeyVal",
          "name": "(\u003c|?\u003e) \u003c|?\u003e",
          "normalized": "PermParser a(b-\u003ec)-\u003e(b,a b)-\u003ePermParser a c",
          "package": "sindre",
          "signature": "PermParser p(a-\u003eb)-\u003e(a,p a)-\u003ePermParser p b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:-60--124--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$$\u003e p\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input - use the optional\n combinator (\u003ccode\u003e\u003ca\u003e\u003c$?\u003e\u003c/a\u003e\u003c/code\u003e) instead.\n\u003c/p\u003e\u003cp\u003eIf the function \u003ccode\u003ef\u003c/code\u003e takes more than one parameter, the type variable\n \u003ccode\u003eb\u003c/code\u003e is instantiated to a functional type which combines nicely with\n the adds parser \u003ccode\u003ep\u003c/code\u003e to the (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) combinator. This\n results in stylized code where a permutation parser starts with a\n combining function \u003ccode\u003ef\u003c/code\u003e followed by the parsers. The function \u003ccode\u003ef\u003c/code\u003e\n gets its parameters in the order in which the parsers are specified,\n but actual input can be in any order.\n\u003c/p\u003e",
          "module": "Sindre.KeyVal",
          "name": "(\u003c$$\u003e)",
          "package": "sindre",
          "signature": "(a -\u003e b) -\u003e p a -\u003e PermParser p b",
          "type": "function"
        },
        "index": {
          "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is not allowed to accept empty input use the optional combinator instead If the function takes more than one parameter the type variable is instantiated to functional type which combines nicely with the adds parser to the combinator This results in stylized code where permutation parser starts with combining function followed by the parsers The function gets its parameters in the order in which the parsers are specified but actual input can be in any order",
          "hierarchy": "Sindre KeyVal",
          "module": "Sindre.KeyVal",
          "name": "(\u003c$$\u003e) \u003c$$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ePermParser c b",
          "package": "sindre",
          "signature": "(a-\u003eb)-\u003ep a-\u003ePermParser p b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:-60--36--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$?\u003e (x,p)\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can not be applied, the default value\n \u003ccode\u003ex\u003c/code\u003e will be used instead. \n\u003c/p\u003e",
          "module": "Sindre.KeyVal",
          "name": "(\u003c$?\u003e)",
          "package": "sindre",
          "signature": "(a -\u003e b) -\u003e (a, p a) -\u003e PermParser p b",
          "type": "function"
        },
        "index": {
          "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is optional if it can not be applied the default value will be used instead",
          "hierarchy": "Sindre KeyVal",
          "module": "Sindre.KeyVal",
          "name": "(\u003c$?\u003e) \u003c$?\u003e",
          "normalized": "(a-\u003eb)-\u003e(a,c a)-\u003ePermParser c b",
          "package": "sindre",
          "signature": "(a-\u003eb)-\u003e(a,p a)-\u003ePermParser p b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:-60--36--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a key-value string wrapper constructed via the permutation\n parser combinators from \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e and the parsers \u003ccode\u003evalue\u003c/code\u003e\n and \u003ccode\u003evalues\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.KeyVal",
          "name": "parseKV",
          "package": "sindre",
          "signature": "PermParser Parser a -\u003e Text -\u003e Either String a",
          "source": "src/Sindre-KeyVal.html#parseKV",
          "type": "function"
        },
        "index": {
          "description": "Parse key-value string wrapper constructed via the permutation parser combinators from Perm and the parsers value and values",
          "hierarchy": "Sindre KeyVal",
          "module": "Sindre.KeyVal",
          "name": "parseKV",
          "normalized": "PermParser Parser a-\u003eText-\u003eEither String a",
          "package": "sindre",
          "partial": "KV",
          "signature": "PermParser Parser a-\u003eText-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:parseKV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evalue k\u003c/code\u003e is a parser for the single-valued key \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.KeyVal",
          "name": "value",
          "package": "sindre",
          "signature": "Text -\u003e Parser Text",
          "source": "src/Sindre-KeyVal.html#value",
          "type": "function"
        },
        "index": {
          "description": "value is parser for the single-valued key",
          "hierarchy": "Sindre KeyVal",
          "module": "Sindre.KeyVal",
          "name": "value",
          "normalized": "Text-\u003eParser Text",
          "package": "sindre",
          "signature": "Text-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evalues k\u003c/code\u003e is a parser for the list-valued key \u003ccode\u003ek\u003c/code\u003e.  At least a\n single value is required.\n\u003c/p\u003e",
          "module": "Sindre.KeyVal",
          "name": "values",
          "package": "sindre",
          "signature": "Text -\u003e Parser [Text]",
          "source": "src/Sindre-KeyVal.html#values",
          "type": "function"
        },
        "index": {
          "description": "values is parser for the list-valued key At least single value is required",
          "hierarchy": "Sindre KeyVal",
          "module": "Sindre.KeyVal",
          "name": "values",
          "normalized": "Text-\u003eParser[Text]",
          "package": "sindre",
          "signature": "Text-\u003eParser[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary routines and helper functions for the Sindre programming\n language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.Lib",
          "name": "Lib",
          "package": "sindre",
          "source": "src/Sindre-Lib.html",
          "type": "module"
        },
        "index": {
          "description": "Library routines and helper functions for the Sindre programming language",
          "hierarchy": "Sindre Lib",
          "module": "Sindre.Lib",
          "name": "Lib",
          "package": "sindre",
          "partial": "Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience class for writing \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Sindre.Lib",
          "name": "KeyLike",
          "package": "sindre",
          "source": "src/Sindre-Lib.html#KeyLike",
          "type": "class"
        },
        "index": {
          "description": "Convenience class for writing Chord values",
          "hierarchy": "Sindre Lib",
          "module": "Sindre.Lib",
          "name": "KeyLike",
          "package": "sindre",
          "partial": "Key Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#t:KeyLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class making it easy to adapt Haskell functions as Sindre\n functions that take and return \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Sindre.Lib",
          "name": "LiftFunction",
          "package": "sindre",
          "source": "src/Sindre-Lib.html#LiftFunction",
          "type": "class"
        },
        "index": {
          "description": "class making it easy to adapt Haskell functions as Sindre functions that take and return Value",
          "hierarchy": "Sindre Lib",
          "module": "Sindre.Lib",
          "name": "LiftFunction",
          "package": "sindre",
          "partial": "Lift Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#t:LiftFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of modifiers and either a \u003ccode\u003echar\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e,\n yield a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e.  If given a character, the Chord will contain a\n \u003ccode\u003e\u003ca\u003eCharKey\u003c/a\u003e\u003c/code\u003e, if given a string, it will contain a \u003ccode\u003e\u003ca\u003eCtrlKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Lib",
          "name": "chord",
          "package": "sindre",
          "signature": "[KeyModifier] -\u003e a -\u003e Chord",
          "source": "src/Sindre-Lib.html#chord",
          "type": "method"
        },
        "index": {
          "description": "Given list of modifiers and either char or String yield Chord If given character the Chord will contain CharKey if given string it will contain CtrlKey",
          "hierarchy": "Sindre Lib",
          "module": "Sindre.Lib",
          "name": "chord",
          "normalized": "[KeyModifier]-\u003ea-\u003eChord",
          "package": "sindre",
          "signature": "[KeyModifier]-\u003ea-\u003eChord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efunction f\u003c/code\u003e is a monadic function that accepts a list of\n \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es and returns a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.  If the list does not contain the\n number, or type, of arguments expected by \u003ccode\u003ef\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e will be\n called with an appropriate error message.\n\u003c/p\u003e",
          "module": "Sindre.Lib",
          "name": "function",
          "package": "sindre",
          "signature": "a -\u003e [Value] -\u003e m im Value",
          "source": "src/Sindre-Lib.html#function",
          "type": "method"
        },
        "index": {
          "description": "function is monadic function that accepts list of Value and returns Value If the list does not contain the number or type of arguments expected by fail will be called with an appropriate error message",
          "hierarchy": "Sindre Lib",
          "module": "Sindre.Lib",
          "name": "function",
          "normalized": "a-\u003e[Value]-\u003eb c Value",
          "package": "sindre",
          "signature": "a-\u003e[Value]-\u003em im Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of impure functions that only work in IO backends.\n Includes the \u003ccode\u003esystem\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Sindre.Lib",
          "name": "ioFunctions",
          "package": "sindre",
          "signature": "FuncMap m",
          "source": "src/Sindre-Lib.html#ioFunctions",
          "type": "function"
        },
        "index": {
          "description": "set of impure functions that only work in IO backends Includes the system function",
          "hierarchy": "Sindre Lib",
          "module": "Sindre.Lib",
          "name": "ioFunctions",
          "package": "sindre",
          "partial": "Functions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:ioFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal variables that require an IO backend.  Includes the\n \u003ccode\u003eENVIRON\u003c/code\u003e global.\n\u003c/p\u003e",
          "module": "Sindre.Lib",
          "name": "ioGlobals",
          "package": "sindre",
          "signature": "Map Identifier (im Value)",
          "source": "src/Sindre-Lib.html#ioGlobals",
          "type": "function"
        },
        "index": {
          "description": "Global variables that require an IO backend Includes the ENVIRON global",
          "hierarchy": "Sindre Lib",
          "module": "Sindre.Lib",
          "name": "ioGlobals",
          "package": "sindre",
          "partial": "Globals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:ioGlobals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of pure functions that can work with any Sindre backend.\n Includes the functions \u003ccode\u003eabs\u003c/code\u003e, \u003ccode\u003eatan2\u003c/code\u003e, \u003ccode\u003ecos\u003c/code\u003e, \u003ccode\u003esin\u003c/code\u003e, \u003ccode\u003eexp\u003c/code\u003e, \u003ccode\u003elog\u003c/code\u003e,\n \u003ccode\u003eint\u003c/code\u003e, \u003ccode\u003esqrt\u003c/code\u003e, \u003ccode\u003elength\u003c/code\u003e, \u003ccode\u003esubstr\u003c/code\u003e, \u003ccode\u003eindex\u003c/code\u003e, \u003ccode\u003ematch\u003c/code\u003e, \u003ccode\u003esub\u003c/code\u003e, \u003ccode\u003egsub\u003c/code\u003e,\n \u003ccode\u003etolower\u003c/code\u003e, and \u003ccode\u003etoupper\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Lib",
          "name": "stdFunctions",
          "package": "sindre",
          "signature": "FuncMap im",
          "source": "src/Sindre-Lib.html#stdFunctions",
          "type": "function"
        },
        "index": {
          "description": "set of pure functions that can work with any Sindre backend Includes the functions abs atan2 cos sin exp log int sqrt length substr index match sub gsub tolower and toupper",
          "hierarchy": "Sindre Lib",
          "module": "Sindre.Lib",
          "name": "stdFunctions",
          "package": "sindre",
          "partial": "Functions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:stdFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSindre, a programming language for writing simple GUIs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.Main",
          "name": "Main",
          "package": "sindre",
          "source": "src/Sindre-Main.html",
          "type": "module"
        },
        "index": {
          "description": "Sindre programming language for writing simple GUIs",
          "hierarchy": "Sindre Main",
          "module": "Sindre.Main",
          "name": "Main",
          "package": "sindre",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Main",
          "name": "classMap",
          "package": "sindre",
          "signature": "ClassMap SindreX11M",
          "source": "src/Sindre-Main.html#classMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Main",
          "module": "Sindre.Main",
          "name": "classMap",
          "package": "sindre",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:classMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Main",
          "name": "emptyProgram",
          "package": "sindre",
          "signature": "Program",
          "source": "src/Sindre-Main.html#emptyProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Main",
          "module": "Sindre.Main",
          "name": "emptyProgram",
          "package": "sindre",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:emptyProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Main",
          "name": "funcMap",
          "package": "sindre",
          "signature": "FuncMap SindreX11M",
          "source": "src/Sindre-Main.html#funcMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Main",
          "module": "Sindre.Main",
          "name": "funcMap",
          "package": "sindre",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:funcMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Main",
          "name": "globMap",
          "package": "sindre",
          "signature": "GlobMap SindreX11M",
          "source": "src/Sindre-Main.html#globMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Main",
          "module": "Sindre.Main",
          "name": "globMap",
          "package": "sindre",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:globMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Main",
          "name": "objectMap",
          "package": "sindre",
          "signature": "ObjectMap SindreX11M",
          "source": "src/Sindre-Main.html#objectMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Main",
          "module": "Sindre.Main",
          "name": "objectMap",
          "package": "sindre",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:objectMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main Sindre entry point.\n\u003c/p\u003e",
          "module": "Sindre.Main",
          "name": "sindreMain",
          "package": "sindre",
          "signature": "Program -\u003e ClassMap SindreX11M -\u003e ObjectMap SindreX11M -\u003e FuncMap SindreX11M -\u003e GlobMap SindreX11M -\u003e [String] -\u003e IO ()",
          "source": "src/Sindre-Main.html#sindreMain",
          "type": "function"
        },
        "index": {
          "description": "The main Sindre entry point",
          "hierarchy": "Sindre Main",
          "module": "Sindre.Main",
          "name": "sindreMain",
          "normalized": "Program-\u003eClassMap SindreX M-\u003eObjectMap SindreX M-\u003eFuncMap SindreX M-\u003eGlobMap SindreX M-\u003e[String]-\u003eIO()",
          "package": "sindre",
          "partial": "Main",
          "signature": "Program-\u003eClassMap SindreX M-\u003eObjectMap SindreX M-\u003eFuncMap SindreX M-\u003eGlobMap SindreX M-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:sindreMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for the Sindre programming language.  The documentation for\n this module does not include a description of the language syntax.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.Parser",
          "name": "Parser",
          "package": "sindre",
          "source": "src/Sindre-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parser for the Sindre programming language The documentation for this module does not include description of the language syntax",
          "hierarchy": "Sindre Parser",
          "module": "Sindre.Parser",
          "name": "Parser",
          "package": "sindre",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse an integer according to the Sindre syntax, ignoring\n trailing whitespace.\n\u003c/p\u003e",
          "module": "Sindre.Parser",
          "name": "parseInteger",
          "package": "sindre",
          "signature": "String -\u003e Maybe Double",
          "source": "src/Sindre-Parser.html#parseInteger",
          "type": "function"
        },
        "index": {
          "description": "Try to parse an integer according to the Sindre syntax ignoring trailing whitespace",
          "hierarchy": "Sindre Parser",
          "module": "Sindre.Parser",
          "name": "parseInteger",
          "normalized": "String-\u003eMaybe Double",
          "package": "sindre",
          "partial": "Integer",
          "signature": "String-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Parser.html#v:parseInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseSindre prog filename string\u003c/code\u003e extends the \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eprog\u003c/code\u003e\n with the declarations in the given Sindre source code.  In case of\n mutually-exclusive definitions (such as the \u003ccode\u003eBEGIN\u003c/code\u003e block, or\n identically named functions), the new definitions in \u003ccode\u003estring\u003c/code\u003e take\n precedence.\n\u003c/p\u003e",
          "module": "Sindre.Parser",
          "name": "parseSindre",
          "package": "sindre",
          "signature": "Program -\u003e SourceName -\u003e String -\u003e Either ParseError Program",
          "source": "src/Sindre-Parser.html#parseSindre",
          "type": "function"
        },
        "index": {
          "description": "parseSindre prog filename string extends the Program prog with the declarations in the given Sindre source code In case of mutually-exclusive definitions such as the BEGIN block or identically named functions the new definitions in string take precedence",
          "hierarchy": "Sindre Parser",
          "module": "Sindre.Parser",
          "name": "parseSindre",
          "normalized": "Program-\u003eSourceName-\u003eString-\u003eEither ParseError Program",
          "package": "sindre",
          "partial": "Sindre",
          "signature": "Program-\u003eSourceName-\u003eString-\u003eEither ParseError Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Parser.html#v:parseSindre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions for the Sindre runtime environment.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.Runtime",
          "name": "Runtime",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions for the Sindre runtime environment",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "Runtime",
          "package": "sindre",
          "partial": "Runtime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "DataSlot",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#DataSlot",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "DataSlot",
          "package": "sindre",
          "partial": "Data Slot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:DataSlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "EventHandler",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#EventHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "EventHandler",
          "package": "sindre",
          "partial": "Event Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:EventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "Execution",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#Execution",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "Execution",
          "package": "sindre",
          "partial": "Execution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Execution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque notion of a field.  These are for internal use in the\n Sindre runtime.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "Field",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#Field",
          "type": "data"
        },
        "index": {
          "description": "An opaque notion of field These are for internal use in the Sindre runtime",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "Field",
          "package": "sindre",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typed description of a field, which may be read-write or\n read-only.  When constructing the actual widget, you must turn\n these into real \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003es by using the \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e function.  A\n description of a field consists of a name and monadic actions for\n reading and optionally writing to the field.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "FieldDesc",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#FieldDesc",
          "type": "data"
        },
        "index": {
          "description": "typed description of field which may be read-write or read-only When constructing the actual widget you must turn these into real Field by using the field function description of field consists of name and monadic actions for reading and optionally writing to the field",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "FieldDesc",
          "package": "sindre",
          "partial": "Field Desc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:FieldDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA method takes as arguments a list of \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es and returns\n another \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.  You probably do not want to call these directly\n from Haskell code, as they are dynamically typed.  See\n \u003ccode\u003e\u003ca\u003efunction\u003c/a\u003e\u003c/code\u003e for a convenient way to turn a Haskell\n function into a suitable method.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "Method",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#Method",
          "type": "type"
        },
        "index": {
          "description": "method takes as arguments list of Value and returns another Value You probably do not want to call these directly from Haskell code as they are dynamically typed See function for convenient way to turn Haskell function into suitable method",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "Method",
          "package": "sindre",
          "partial": "Method",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "Mold",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#Mold",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "Mold",
          "package": "sindre",
          "partial": "Mold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Mold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad that can be used as the layer beneath \u003ccode\u003e\u003ca\u003eSindre\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "MonadBackend",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#MonadBackend",
          "type": "class"
        },
        "index": {
          "description": "monad that can be used as the layer beneath Sindre",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "MonadBackend",
          "package": "sindre",
          "partial": "Monad Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:MonadBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadSindre im m\u003c/code\u003e is the class of monads \u003ccode\u003em\u003c/code\u003e that run on top of\n \u003ccode\u003e\u003ca\u003eSindre\u003c/a\u003e\u003c/code\u003e with backend \u003ccode\u003eim\u003c/code\u003e, and can thus access Sindre\n functionality.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "MonadSindre",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#MonadSindre",
          "type": "class"
        },
        "index": {
          "description": "MonadSindre im is the class of monads that run on top of Sindre with backend im and can thus access Sindre functionality",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "MonadSindre",
          "package": "sindre",
          "partial": "Monad Sindre",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:MonadSindre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer describing a newly created object.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "NewObject",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#NewObject",
          "type": "data"
        },
        "index": {
          "description": "Container describing newly created object",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "NewObject",
          "package": "sindre",
          "partial": "New Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:NewObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer describing a newly created widget.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "NewWidget",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#NewWidget",
          "type": "data"
        },
        "index": {
          "description": "Container describing newly created widget",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "NewWidget",
          "package": "sindre",
          "partial": "New Widget",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:NewWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "ObjectM",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#ObjectM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "ObjectM",
          "package": "sindre",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:ObjectM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main monad in which a Sindre program executes.  More\n specialised monads, such as \u003ccode\u003e\u003ca\u003eExecution\u003c/a\u003e\u003c/code\u003e are used for specific\n purposes, but they all run on top of the Sindre monad.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "Sindre",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#Sindre",
          "type": "data"
        },
        "index": {
          "description": "The main monad in which Sindre program executes More specialised monads such as Execution are used for specific purposes but they all run on top of the Sindre monad",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "Sindre",
          "package": "sindre",
          "partial": "Sindre",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Sindre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "SindreEnv",
          "package": "sindre",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "SindreEnv",
          "package": "sindre",
          "partial": "Sindre Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:SindreEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "ReadOnlyField",
          "package": "sindre",
          "signature": "ReadOnlyField Identifier (ObjectM s im v)",
          "source": "src/Sindre-Runtime.html#FieldDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "ReadOnlyField",
          "package": "sindre",
          "partial": "Read Only Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:ReadOnlyField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "ReadWriteField",
          "package": "sindre",
          "signature": "ReadWriteField Identifier (ObjectM s im v) (v -\u003e ObjectM s im ())",
          "source": "src/Sindre-Runtime.html#FieldDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "ReadWriteField",
          "normalized": "ReadWriteField Identifier(ObjectM a b c)(c-\u003eObjectM a b())",
          "package": "sindre",
          "partial": "Read Write Field",
          "signature": "ReadWriteField Identifier(ObjectM s im v)(v-\u003eObjectM s im())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:ReadWriteField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "SindreEnv",
          "package": "sindre",
          "signature": "SindreEnv",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "SindreEnv",
          "package": "sindre",
          "partial": "Sindre Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:SindreEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "arguments",
          "package": "sindre",
          "signature": "Arguments",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "arguments",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:arguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a backend operation into this monad.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "back",
          "package": "sindre",
          "signature": "im a -\u003e m im a",
          "source": "src/Sindre-Runtime.html#back",
          "type": "method"
        },
        "index": {
          "description": "Lift backend operation into this monad",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "back",
          "normalized": "a b-\u003ec a b",
          "package": "sindre",
          "signature": "im a-\u003em im a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:back"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "breakHere",
          "package": "sindre",
          "signature": "Execution m () -\u003e Execution m ()",
          "source": "src/Sindre-Runtime.html#breakHere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "breakHere",
          "normalized": "Execution a()-\u003eExecution a()",
          "package": "sindre",
          "partial": "Here",
          "signature": "Execution m()-\u003eExecution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:breakHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "broadcast",
          "package": "sindre",
          "signature": "Event -\u003e ObjectM o im ()",
          "source": "src/Sindre-Runtime.html#broadcast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "broadcast",
          "normalized": "Event-\u003eObjectM a b()",
          "package": "sindre",
          "signature": "Event-\u003eObjectM o im()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:broadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "callMethodByRef",
          "package": "sindre",
          "signature": "ObjectRef -\u003e Identifier -\u003e [Value] -\u003e Execution im Value",
          "source": "src/Sindre-Runtime.html#callMethodByRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "callMethodByRef",
          "normalized": "ObjectRef-\u003eIdentifier-\u003e[Value]-\u003eExecution a Value",
          "package": "sindre",
          "partial": "Method By Ref",
          "signature": "ObjectRef-\u003eIdentifier-\u003e[Value]-\u003eExecution im Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:callMethodByRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "changed",
          "package": "sindre",
          "signature": "Identifier -\u003e Value -\u003e Value -\u003e ObjectM o im ()",
          "source": "src/Sindre-Runtime.html#changed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "changed",
          "normalized": "Identifier-\u003eValue-\u003eValue-\u003eObjectM a b()",
          "package": "sindre",
          "signature": "Identifier-\u003eValue-\u003eValue-\u003eObjectM o im()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:changed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "compose",
          "package": "sindre",
          "signature": "WidgetRef -\u003e m im SpaceNeed",
          "source": "src/Sindre-Runtime.html#compose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "compose",
          "normalized": "WidgetRef-\u003ea b SpaceNeed",
          "package": "sindre",
          "signature": "WidgetRef-\u003em im SpaceNeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "contHere",
          "package": "sindre",
          "signature": "Execution m () -\u003e Execution m ()",
          "source": "src/Sindre-Runtime.html#contHere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "contHere",
          "normalized": "Execution a()-\u003eExecution a()",
          "package": "sindre",
          "partial": "Here",
          "signature": "Execution m()-\u003eExecution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:contHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "doBreak",
          "package": "sindre",
          "signature": "Execution m ()",
          "source": "src/Sindre-Runtime.html#doBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "doBreak",
          "normalized": "Execution a()",
          "package": "sindre",
          "partial": "Break",
          "signature": "Execution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:doBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "doCont",
          "package": "sindre",
          "signature": "Execution m ()",
          "source": "src/Sindre-Runtime.html#doCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "doCont",
          "normalized": "Execution a()",
          "package": "sindre",
          "partial": "Cont",
          "signature": "Execution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:doCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "doNext",
          "package": "sindre",
          "signature": "Execution m ()",
          "source": "src/Sindre-Runtime.html#doNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "doNext",
          "normalized": "Execution a()",
          "package": "sindre",
          "partial": "Next",
          "signature": "Execution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:doNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "doReturn",
          "package": "sindre",
          "signature": "Value -\u003e Execution m ()",
          "source": "src/Sindre-Runtime.html#doReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "doReturn",
          "normalized": "Value-\u003eExecution a()",
          "package": "sindre",
          "partial": "Return",
          "signature": "Value-\u003eExecution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:doReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "draw",
          "package": "sindre",
          "signature": "WidgetRef -\u003e Maybe Rectangle -\u003e m im SpaceUse",
          "source": "src/Sindre-Runtime.html#draw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "draw",
          "normalized": "WidgetRef-\u003eMaybe Rectangle-\u003ea b SpaceUse",
          "package": "sindre",
          "signature": "WidgetRef-\u003eMaybe Rectangle-\u003em im SpaceUse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "enterScope",
          "package": "sindre",
          "signature": "[Value] -\u003e Execution m a -\u003e Execution m a",
          "source": "src/Sindre-Runtime.html#enterScope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "enterScope",
          "normalized": "[Value]-\u003eExecution a b-\u003eExecution a b",
          "package": "sindre",
          "partial": "Scope",
          "signature": "[Value]-\u003eExecution m a-\u003eExecution m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:enterScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "eventLoop",
          "package": "sindre",
          "signature": "EventHandler m -\u003e Sindre m ()",
          "source": "src/Sindre-Runtime.html#eventLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "eventLoop",
          "normalized": "EventHandler a-\u003eSindre a()",
          "package": "sindre",
          "partial": "Loop",
          "signature": "EventHandler m-\u003eSindre m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:eventLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "evtQueue",
          "package": "sindre",
          "signature": "Seq Event",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "evtQueue",
          "package": "sindre",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:evtQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "execFrame",
          "package": "sindre",
          "signature": "Frame",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "execFrame",
          "package": "sindre",
          "partial": "Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:execFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eexecSindre e m\u003c/code\u003e executes the action \u003ccode\u003em\u003c/code\u003e in environment \u003ccode\u003ee\u003c/code\u003e,\n returning the exit code of \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "execSindre",
          "package": "sindre",
          "signature": "SindreEnv m -\u003e Sindre m a -\u003e m ExitCode",
          "source": "src/Sindre-Runtime.html#execSindre",
          "type": "function"
        },
        "index": {
          "description": "execSindre executes the action in environment returning the exit code of",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "execSindre",
          "normalized": "SindreEnv a-\u003eSindre a b-\u003ea ExitCode",
          "package": "sindre",
          "partial": "Sindre",
          "signature": "SindreEnv m-\u003eSindre m a-\u003em ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:execSindre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "execute",
          "package": "sindre",
          "signature": "Execution m Value -\u003e Sindre m Value",
          "source": "src/Sindre-Runtime.html#execute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "execute",
          "normalized": "Execution a Value-\u003eSindre a Value",
          "package": "sindre",
          "signature": "Execution m Value-\u003eSindre m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "execute_",
          "package": "sindre",
          "signature": "Execution m a -\u003e Sindre m ()",
          "source": "src/Sindre-Runtime.html#execute_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "execute_",
          "normalized": "Execution a b-\u003eSindre a()",
          "package": "sindre",
          "signature": "Execution m a-\u003eSindre m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:execute_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a Haskell-typed high-level field description into a\n \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e-typed field.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "field",
          "package": "sindre",
          "signature": "FieldDesc s im v -\u003e Field s im",
          "source": "src/Sindre-Runtime.html#field",
          "type": "function"
        },
        "index": {
          "description": "Turn Haskell-typed high-level field description into Value typed field",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "field",
          "normalized": "FieldDesc a b c-\u003eField a b",
          "package": "sindre",
          "signature": "FieldDesc s im v-\u003eField s im",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "fieldName",
          "package": "sindre",
          "signature": "FieldDesc s im v -\u003e Identifier",
          "source": "src/Sindre-Runtime.html#fieldName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "fieldName",
          "normalized": "FieldDesc a b c-\u003eIdentifier",
          "package": "sindre",
          "partial": "Name",
          "signature": "FieldDesc s im v-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:fieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "fullRedraw",
          "package": "sindre",
          "signature": "m im ()",
          "source": "src/Sindre-Runtime.html#fullRedraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "fullRedraw",
          "normalized": "a b()",
          "package": "sindre",
          "partial": "Redraw",
          "signature": "m im()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:fullRedraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "getBackEvent",
          "package": "sindre",
          "signature": "Sindre m (Maybe Event)",
          "source": "src/Sindre-Runtime.html#getBackEvent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "getBackEvent",
          "package": "sindre",
          "partial": "Back Event",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:getBackEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "getField",
          "package": "sindre",
          "signature": "FieldDesc s im v -\u003e ObjectM s im v",
          "source": "src/Sindre-Runtime.html#getField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "getField",
          "normalized": "FieldDesc a b c-\u003eObjectM a b c",
          "package": "sindre",
          "partial": "Field",
          "signature": "FieldDesc s im v-\u003eObjectM s im v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:getField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "getFieldByRef",
          "package": "sindre",
          "signature": "ObjectRef -\u003e Identifier -\u003e Execution im Value",
          "source": "src/Sindre-Runtime.html#getFieldByRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "getFieldByRef",
          "normalized": "ObjectRef-\u003eIdentifier-\u003eExecution a Value",
          "package": "sindre",
          "partial": "Field By Ref",
          "signature": "ObjectRef-\u003eIdentifier-\u003eExecution im Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:getFieldByRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "globalVal",
          "package": "sindre",
          "signature": "Key -\u003e Sindre m Value",
          "source": "src/Sindre-Runtime.html#globalVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "globalVal",
          "normalized": "Key-\u003eSindre a Value",
          "package": "sindre",
          "partial": "Val",
          "signature": "Key-\u003eSindre m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:globalVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "globals",
          "package": "sindre",
          "signature": "IntMap Value",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "globals",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:globals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "instObject",
          "package": "sindre",
          "signature": "NewObject im -\u003e DataSlot im",
          "source": "src/Sindre-Runtime.html#instObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "instObject",
          "normalized": "NewObject a-\u003eDataSlot a",
          "package": "sindre",
          "partial": "Object",
          "signature": "NewObject im-\u003eDataSlot im",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:instObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "instWidget",
          "package": "sindre",
          "signature": "NewWidget im -\u003e Constraints -\u003e DataSlot im",
          "source": "src/Sindre-Runtime.html#instWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "instWidget",
          "normalized": "NewWidget a-\u003eConstraints-\u003eDataSlot a",
          "package": "sindre",
          "partial": "Widget",
          "signature": "NewWidget im-\u003eConstraints-\u003eDataSlot im",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:instWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "kbdFocus",
          "package": "sindre",
          "signature": "WidgetRef",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "kbdFocus",
          "package": "sindre",
          "partial": "Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:kbdFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "lexicalVal",
          "package": "sindre",
          "signature": "Key -\u003e Execution m Value",
          "source": "src/Sindre-Runtime.html#lexicalVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "lexicalVal",
          "normalized": "Key-\u003eExecution a Value",
          "package": "sindre",
          "partial": "Val",
          "signature": "Key-\u003eExecution m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:lexicalVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "mold",
          "package": "sindre",
          "signature": "Value -\u003e Maybe a",
          "source": "src/Sindre-Runtime.html#mold",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "mold",
          "normalized": "Value-\u003eMaybe a",
          "package": "sindre",
          "signature": "Value-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:mold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "needsRedraw",
          "package": "sindre",
          "signature": "Redraw",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "needsRedraw",
          "package": "sindre",
          "partial": "Redraw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:needsRedraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "newEnv",
          "package": "sindre",
          "signature": "WidgetRef -\u003e Arguments -\u003e SindreEnv m",
          "source": "src/Sindre-Runtime.html#newEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "newEnv",
          "normalized": "WidgetRef-\u003eArguments-\u003eSindreEnv a",
          "package": "sindre",
          "partial": "Env",
          "signature": "WidgetRef-\u003eArguments-\u003eSindreEnv m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:newEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "newObject",
          "package": "sindre",
          "signature": "s -\u003e Map Identifier (Method s im) -\u003e [Field s im] -\u003e (Event -\u003e ObjectM s im ()) -\u003e NewObject im",
          "source": "src/Sindre-Runtime.html#newObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "newObject",
          "normalized": "a-\u003eMap Identifier(Method a b)-\u003e[Field a b]-\u003e(Event-\u003eObjectM a b())-\u003eNewObject b",
          "package": "sindre",
          "partial": "Object",
          "signature": "s-\u003eMap Identifier(Method s im)-\u003e[Field s im]-\u003e(Event-\u003eObjectM s im())-\u003eNewObject im",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:newObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "newWidget",
          "package": "sindre",
          "signature": "s -\u003e Map Identifier (Method s im) -\u003e [Field s im] -\u003e (Event -\u003e ObjectM s im ()) -\u003e ObjectM s im SpaceNeed -\u003e (Rectangle -\u003e ObjectM s im SpaceUse) -\u003e NewWidget im",
          "source": "src/Sindre-Runtime.html#newWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "newWidget",
          "normalized": "a-\u003eMap Identifier(Method a b)-\u003e[Field a b]-\u003e(Event-\u003eObjectM a b())-\u003eObjectM a b SpaceNeed-\u003e(Rectangle-\u003eObjectM a b SpaceUse)-\u003eNewWidget b",
          "package": "sindre",
          "partial": "Widget",
          "signature": "s-\u003eMap Identifier(Method s im)-\u003e[Field s im]-\u003e(Event-\u003eObjectM s im())-\u003eObjectM s im SpaceNeed-\u003e(Rectangle-\u003eObjectM s im SpaceUse)-\u003eNewWidget im",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:newWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "nextHere",
          "package": "sindre",
          "signature": "Execution m () -\u003e Execution m ()",
          "source": "src/Sindre-Runtime.html#nextHere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "nextHere",
          "normalized": "Execution a()-\u003eExecution a()",
          "package": "sindre",
          "partial": "Here",
          "signature": "Execution m()-\u003eExecution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:nextHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "objects",
          "package": "sindre",
          "signature": "Array ObjectNum (DataSlot m)",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "objects",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:objects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "printVal",
          "package": "sindre",
          "signature": "String -\u003e m ()",
          "source": "src/Sindre-Runtime.html#printVal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "printVal",
          "normalized": "String-\u003ea()",
          "package": "sindre",
          "partial": "Val",
          "signature": "String-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:printVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediately return from \u003ccode\u003e\u003ca\u003eexecSindre\u003c/a\u003e\u003c/code\u003e, returning the given exit\n code.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "quitSindre",
          "package": "sindre",
          "signature": "ExitCode -\u003e Sindre m ()",
          "source": "src/Sindre-Runtime.html#quitSindre",
          "type": "function"
        },
        "index": {
          "description": "Immediately return from execSindre returning the given exit code",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "quitSindre",
          "normalized": "ExitCode-\u003eSindre a()",
          "package": "sindre",
          "partial": "Sindre",
          "signature": "ExitCode-\u003eSindre m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:quitSindre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "recvEventByRef",
          "package": "sindre",
          "signature": "WidgetRef -\u003e Event -\u003e Execution im ()",
          "source": "src/Sindre-Runtime.html#recvEventByRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "recvEventByRef",
          "normalized": "WidgetRef-\u003eEvent-\u003eExecution a()",
          "package": "sindre",
          "partial": "Event By Ref",
          "signature": "WidgetRef-\u003eEvent-\u003eExecution im()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:recvEventByRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "redraw",
          "package": "sindre",
          "signature": "ObjectM s im ()",
          "source": "src/Sindre-Runtime.html#redraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "redraw",
          "normalized": "ObjectM a b()",
          "package": "sindre",
          "signature": "ObjectM s im()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:redraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "redrawRegion",
          "package": "sindre",
          "signature": "[Rectangle] -\u003e Sindre m ()",
          "source": "src/Sindre-Runtime.html#redrawRegion",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "redrawRegion",
          "normalized": "[Rectangle]-\u003eSindre a()",
          "package": "sindre",
          "partial": "Region",
          "signature": "[Rectangle]-\u003eSindre m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:redrawRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "redrawRoot",
          "package": "sindre",
          "signature": "Sindre m ()",
          "source": "src/Sindre-Runtime.html#redrawRoot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "redrawRoot",
          "normalized": "Sindre a()",
          "package": "sindre",
          "partial": "Root",
          "signature": "Sindre m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:redrawRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "returnHere",
          "package": "sindre",
          "signature": "Execution m Value -\u003e Execution m Value",
          "source": "src/Sindre-Runtime.html#returnHere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "returnHere",
          "normalized": "Execution a Value-\u003eExecution a Value",
          "package": "sindre",
          "partial": "Here",
          "signature": "Execution m Value-\u003eExecution m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:returnHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "rootWidget",
          "package": "sindre",
          "signature": "(Maybe (RootPosition m), WidgetRef)",
          "source": "src/Sindre-Runtime.html#SindreEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "rootWidget",
          "normalized": "(Maybe(RootPosition a),WidgetRef)",
          "package": "sindre",
          "partial": "Widget",
          "signature": "(Maybe(RootPosition m),WidgetRef)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:rootWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "setFieldByRef",
          "package": "sindre",
          "signature": "ObjectRef -\u003e Identifier -\u003e Value -\u003e Execution im Value",
          "source": "src/Sindre-Runtime.html#setFieldByRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "setFieldByRef",
          "normalized": "ObjectRef-\u003eIdentifier-\u003eValue-\u003eExecution a Value",
          "package": "sindre",
          "partial": "Field By Ref",
          "signature": "ObjectRef-\u003eIdentifier-\u003eValue-\u003eExecution im Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setFieldByRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "setGlobal",
          "package": "sindre",
          "signature": "Key -\u003e Value -\u003e Sindre m ()",
          "source": "src/Sindre-Runtime.html#setGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "setGlobal",
          "normalized": "Key-\u003eValue-\u003eSindre a()",
          "package": "sindre",
          "partial": "Global",
          "signature": "Key-\u003eValue-\u003eSindre m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "setLexical",
          "package": "sindre",
          "signature": "Key -\u003e Value -\u003e Execution m ()",
          "source": "src/Sindre-Runtime.html#setLexical",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "setLexical",
          "normalized": "Key-\u003eValue-\u003eExecution a()",
          "package": "sindre",
          "partial": "Lexical",
          "signature": "Key-\u003eValue-\u003eExecution m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setLexical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "setRootPosition",
          "package": "sindre",
          "signature": "Value -\u003e Sindre m ()",
          "source": "src/Sindre-Runtime.html#setRootPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "setRootPosition",
          "normalized": "Value-\u003eSindre a()",
          "package": "sindre",
          "partial": "Root Position",
          "signature": "Value-\u003eSindre m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setRootPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "setScope",
          "package": "sindre",
          "signature": "[Value] -\u003e Execution m a -\u003e Execution m a",
          "source": "src/Sindre-Runtime.html#setScope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "setScope",
          "normalized": "[Value]-\u003eExecution a b-\u003eExecution a b",
          "package": "sindre",
          "partial": "Scope",
          "signature": "[Value]-\u003eExecution m a-\u003eExecution m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eSindre\u003c/a\u003e\u003c/code\u003e operation into this monad.\n\u003c/p\u003e",
          "module": "Sindre.Runtime",
          "name": "sindre",
          "package": "sindre",
          "signature": "Sindre im a -\u003e m im a",
          "source": "src/Sindre-Runtime.html#sindre",
          "type": "method"
        },
        "index": {
          "description": "Lift Sindre operation into this monad",
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "sindre",
          "normalized": "Sindre a b-\u003ec a b",
          "package": "sindre",
          "signature": "Sindre im a-\u003em im a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:sindre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "unmold",
          "package": "sindre",
          "signature": "a -\u003e Value",
          "source": "src/Sindre-Runtime.html#unmold",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "unmold",
          "normalized": "a-\u003eValue",
          "package": "sindre",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:unmold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Runtime",
          "name": "waitForBackEvent",
          "package": "sindre",
          "signature": "Sindre m Event",
          "source": "src/Sindre-Runtime.html#waitForBackEvent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sindre Runtime",
          "module": "Sindre.Runtime",
          "name": "waitForBackEvent",
          "package": "sindre",
          "partial": "For Back Event",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:waitForBackEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral definitions for the Sindre programming language.  The\n documentation for this module does not include a description of the\n language semantics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.Sindre",
          "name": "Sindre",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html",
          "type": "module"
        },
        "index": {
          "description": "General definitions for the Sindre programming language The documentation for this module does not include description of the language semantics",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Sindre",
          "package": "sindre",
          "partial": "Sindre",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReaction to an event.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Action",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Action",
          "type": "data"
        },
        "index": {
          "description": "Reaction to an event",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Action",
          "package": "sindre",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruction on how to align a smaller interval within a larger\n interval.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Align",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Align",
          "type": "data"
        },
        "index": {
          "description": "Instruction on how to align smaller interval within larger interval",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Align",
          "package": "sindre",
          "partial": "Align",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arguments passed to the Sindre program from the command line.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Arguments",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Arguments",
          "type": "type"
        },
        "index": {
          "description": "The arguments passed to the Sindre program from the command line",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Arguments",
          "package": "sindre",
          "partial": "Arguments",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Arguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combination of a set of modifier keys and a primary key,\n representing a complete piece of keyboard input.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Chord",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Chord",
          "type": "type"
        },
        "index": {
          "description": "combination of set of modifier keys and primary key representing complete piece of keyboard input",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Chord",
          "package": "sindre",
          "partial": "Chord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternally-imposed optional minimum and maximum values for width\n and height.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Constraints",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Constraints",
          "type": "type"
        },
        "index": {
          "description": "Externally-imposed optional minimum and maximum values for width and height",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Constraints",
          "package": "sindre",
          "partial": "Constraints",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Constraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA size constraint in one dimension.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "DimNeed",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#DimNeed",
          "type": "data"
        },
        "index": {
          "description": "size constraint in one dimension",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "DimNeed",
          "package": "sindre",
          "partial": "Dim Need",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:DimNeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething that happened in the world.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Event",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Something that happened in the world",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Event",
          "package": "sindre",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe origin of an event.  This is used when determining where to\n handle it.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "EventSource",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#EventSource",
          "type": "data"
        },
        "index": {
          "description": "The origin of an event This is used when determining where to handle it",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "EventSource",
          "package": "sindre",
          "partial": "Event Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:EventSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe syntax of Sindre expressions.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Expr",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "The syntax of Sindre expressions",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Expr",
          "package": "sindre",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function consists of lexically bound parameters and a body.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Function",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Function",
          "type": "data"
        },
        "index": {
          "description": "function consists of lexically bound parameters and body",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Function",
          "package": "sindre",
          "partial": "Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Sindre GUI is a recursive tree, with each node representing a\n single widget and consisting of the following fields.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "GUI",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#GUI",
          "type": "data"
        },
        "index": {
          "description": "Sindre GUI is recursive tree with each node representing single widget and consisting of the following fields",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "GUI",
          "package": "sindre",
          "partial": "GUI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:GUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of names (such as variables and classes) in the syntax\n tree.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Identifier",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Identifier",
          "type": "type"
        },
        "index": {
          "description": "The type of names such as variables and classes in the syntax tree",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Identifier",
          "package": "sindre",
          "partial": "Identifier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither a key corresponding to a visible character, or a control\n key not associated with any character.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Key",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Either key corresponding to visible character or control key not associated with any character",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Key",
          "package": "sindre",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA keyboard modifier key.  The precise meaning (and location) of\n these is somewhat platform-dependent.  Note that the \u003ccode\u003eShift\u003c/code\u003e\n modifier should not be passed along if the associated key is a\n \u003ccode\u003eCharKey\u003c/code\u003e, as \u003ccode\u003eShift\u003c/code\u003e will already have been handled.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "KeyModifier",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#KeyModifier",
          "type": "data"
        },
        "index": {
          "description": "keyboard modifier key The precise meaning and location of these is somewhat platform-dependent Note that the Shift modifier should not be passed along if the associated key is CharKey as Shift will already have been handled",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "KeyModifier",
          "package": "sindre",
          "partial": "Key Modifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:KeyModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow-level reference to an object.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "ObjectNum",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#ObjectNum",
          "type": "type"
        },
        "index": {
          "description": "Low-level reference to an object",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "ObjectNum",
          "package": "sindre",
          "partial": "Object Num",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:ObjectNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigh-level reference to an object, containing its class and name\n (if any) as well.  For non-widgets, the object name is the same as\n the object class.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "ObjectRef",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#ObjectRef",
          "type": "type"
        },
        "index": {
          "description": "High-level reference to an object containing its class and name if any as well For non-widgets the object name is the same as the object class",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "ObjectRef",
          "package": "sindre",
          "partial": "Object Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:ObjectRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a value with source position information.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "P",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#P",
          "type": "data"
        },
        "index": {
          "description": "Wrap value with source position information",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "P",
          "package": "sindre",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of an event used to indicate how to handle\n different events.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Pattern",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Pattern",
          "type": "data"
        },
        "index": {
          "description": "description of an event used to indicate how to handle different events",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Pattern",
          "package": "sindre",
          "partial": "Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complete Sindre program.  Note that this is intentionally\n defined such that some invalid programs, like those with duplicate\n definitions can be represented - the compiler (see\n \u003ca\u003eSindre.Compiler\u003c/a\u003e) should detect and handle such errors.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Program",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Program",
          "type": "data"
        },
        "index": {
          "description": "complete Sindre program Note that this is intentionally defined such that some invalid programs like those with duplicate definitions can be represented the compiler see Sindre.Compiler should detect and handle such errors",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Program",
          "package": "sindre",
          "partial": "Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangle represented as its upper-left corner, width and\n height.  You should never create rectangles with negative\n dimensions, and the functions in this module make no guarantee to\n their behaviour if you do.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Rectangle",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Rectangle",
          "type": "data"
        },
        "index": {
          "description": "rectangle represented as its upper-left corner width and height You should never create rectangles with negative dimensions and the functions in this module make no guarantee to their behaviour if you do",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Rectangle",
          "package": "sindre",
          "partial": "Rectangle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA command line argument.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "SindreOption",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#SindreOption",
          "type": "type"
        },
        "index": {
          "description": "command line argument",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "SindreOption",
          "package": "sindre",
          "partial": "Sindre Option",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SindreOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of sets of sources, values of this type can be used\n to pattern-match \u003ccode\u003eEventSource\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "SourcePat",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#SourcePat",
          "type": "data"
        },
        "index": {
          "description": "Description of sets of sources values of this type can be used to pattern-match EventSource",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "SourcePat",
          "package": "sindre",
          "partial": "Source Pat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SourcePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position in a source file, consisting of a file name,\n one-indexed line number, and one-indexed column number.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "SourcePos",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#SourcePos",
          "type": "type"
        },
        "index": {
          "description": "position in source file consisting of file name one-indexed line number and one-indexed column number",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "SourcePos",
          "package": "sindre",
          "partial": "Source Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize constraints in both dimensions.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "SpaceNeed",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#SpaceNeed",
          "type": "type"
        },
        "index": {
          "description": "Size constraints in both dimensions",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "SpaceNeed",
          "package": "sindre",
          "partial": "Space Need",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SpaceNeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount of space actually used by a widget.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "SpaceUse",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#SpaceUse",
          "type": "type"
        },
        "index": {
          "description": "The amount of space actually used by widget",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "SpaceUse",
          "package": "sindre",
          "partial": "Space Use",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SpaceUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe syntax of Sindre statements.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Stmt",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "data"
        },
        "index": {
          "description": "The syntax of Sindre statements",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Stmt",
          "package": "sindre",
          "partial": "Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDynamically typed run-time value in the Sindre language.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Value",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#Value",
          "type": "data"
        },
        "index": {
          "description": "Dynamically typed run-time value in the Sindre language",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Value",
          "package": "sindre",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigh-level reference to a widget.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "WidgetRef",
          "package": "sindre",
          "source": "src/Sindre-Sindre.html#WidgetRef",
          "type": "type"
        },
        "index": {
          "description": "High-level reference to widget",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "WidgetRef",
          "package": "sindre",
          "partial": "Widget Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:WidgetRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign towards the center of the interval.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "AlignCenter",
          "package": "sindre",
          "signature": "AlignCenter",
          "source": "src/Sindre-Sindre.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Align towards the center of the interval",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "AlignCenter",
          "package": "sindre",
          "partial": "Align Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:AlignCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign towards negative infinity.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "AlignNeg",
          "package": "sindre",
          "signature": "AlignNeg",
          "source": "src/Sindre-Sindre.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Align towards negative infinity",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "AlignNeg",
          "package": "sindre",
          "partial": "Align Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:AlignNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign towards positive infinity.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "AlignPos",
          "package": "sindre",
          "signature": "AlignPos",
          "source": "src/Sindre-Sindre.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Align towards positive infinity",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "AlignPos",
          "package": "sindre",
          "partial": "Align Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:AlignPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Assign",
          "package": "sindre",
          "signature": "Assign (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Assign",
          "package": "sindre",
          "partial": "Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe source is something within the\n bowels of the active backend,\n probably from the external world.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "BackendSrc",
          "package": "sindre",
          "signature": "BackendSrc",
          "source": "src/Sindre-Sindre.html#EventSource",
          "type": "function"
        },
        "index": {
          "description": "The source is something within the bowels of the active backend probably from the external world",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "BackendSrc",
          "package": "sindre",
          "partial": "Backend Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:BackendSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Break",
          "package": "sindre",
          "signature": "Break",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Break",
          "package": "sindre",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode character associated with the key.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "CharKey",
          "package": "sindre",
          "signature": "CharKey Char",
          "source": "src/Sindre-Sindre.html#Key",
          "type": "function"
        },
        "index": {
          "description": "Unicode character associated with the key",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "CharKey",
          "package": "sindre",
          "partial": "Char Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:CharKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch if the event is a chord.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "ChordPattern",
          "package": "sindre",
          "signature": "ChordPattern Chord",
          "source": "src/Sindre-Sindre.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "Match if the event is chord",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "ChordPattern",
          "package": "sindre",
          "partial": "Chord Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:ChordPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Concat",
          "package": "sindre",
          "signature": "Concat (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Concat",
          "package": "sindre",
          "partial": "Concat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Cond",
          "package": "sindre",
          "signature": "Cond (P Expr) (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Cond",
          "package": "sindre",
          "partial": "Cond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Continue",
          "package": "sindre",
          "signature": "Continue",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Continue",
          "package": "sindre",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Control",
          "package": "sindre",
          "signature": "Control",
          "source": "src/Sindre-Sindre.html#KeyModifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Control",
          "package": "sindre",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the control key, using X11\n key names (for example \u003ccode\u003eBackSpace\u003c/code\u003e or\n \u003ccode\u003eReturn\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "CtrlKey",
          "package": "sindre",
          "signature": "CtrlKey String",
          "source": "src/Sindre-Sindre.html#Key",
          "type": "function"
        },
        "index": {
          "description": "Name of the control key using X11 key names for example BackSpace or Return",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "CtrlKey",
          "package": "sindre",
          "partial": "Ctrl Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:CtrlKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Dict",
          "package": "sindre",
          "signature": "Dict (Map Value Value)",
          "source": "src/Sindre-Sindre.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Dict",
          "package": "sindre",
          "partial": "Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Divided",
          "package": "sindre",
          "signature": "Divided (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Divided",
          "package": "sindre",
          "partial": "Divided",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Divided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Do",
          "package": "sindre",
          "signature": "Do [P Stmt] (P Expr)",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Do",
          "normalized": "Do[P Stmt](P Expr)",
          "package": "sindre",
          "partial": "Do",
          "signature": "Do[P Stmt](P Expr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Do"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Equal",
          "package": "sindre",
          "signature": "Equal (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Equal",
          "package": "sindre",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly this many pixels.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Exact",
          "package": "sindre",
          "signature": "Exact Integer",
          "source": "src/Sindre-Sindre.html#DimNeed",
          "type": "function"
        },
        "index": {
          "description": "Exactly this many pixels",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Exact",
          "package": "sindre",
          "partial": "Exact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Exit",
          "package": "sindre",
          "signature": "Exit (Maybe (P Expr))",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Exit",
          "package": "sindre",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Expr",
          "package": "sindre",
          "signature": "Expr (P Expr)",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Expr",
          "package": "sindre",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "FieldOf",
          "package": "sindre",
          "signature": "FieldOf Identifier (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "FieldOf",
          "package": "sindre",
          "partial": "Field Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:FieldOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eFieldSrc obj f\u003c/code\u003e designates that the source of\n the event is the property \u003ccode\u003ef\u003c/code\u003e of \u003ccode\u003eobj\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "FieldSrc",
          "package": "sindre",
          "signature": "FieldSrc ObjectRef Identifier",
          "source": "src/Sindre-Sindre.html#EventSource",
          "type": "function"
        },
        "index": {
          "description": "FieldSrc obj designates that the source of the event is the property of obj",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "FieldSrc",
          "package": "sindre",
          "partial": "Field Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:FieldSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Focus",
          "package": "sindre",
          "signature": "Focus (P Expr)",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Focus",
          "package": "sindre",
          "partial": "Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "For",
          "package": "sindre",
          "signature": "For (P Expr) (P Expr) (P Expr) [P Stmt]",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "For",
          "normalized": "For(P Expr)(P Expr)(P Expr)[P Stmt]",
          "package": "sindre",
          "partial": "For",
          "signature": "For(P Expr)(P Expr)(P Expr)[P Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Funcall",
          "package": "sindre",
          "signature": "Funcall Identifier [P Expr]",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Funcall",
          "normalized": "Funcall Identifier[P Expr]",
          "package": "sindre",
          "partial": "Funcall",
          "signature": "Funcall Identifier[P Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Funcall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Function",
          "package": "sindre",
          "signature": "Function [Identifier] [P Stmt]",
          "source": "src/Sindre-Sindre.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Function",
          "normalized": "Function[Identifier][P Stmt]",
          "package": "sindre",
          "partial": "Function",
          "signature": "Function[Identifier][P Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "GUI",
          "package": "sindre",
          "signature": "GUI",
          "source": "src/Sindre-Sindre.html#GUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "GUI",
          "package": "sindre",
          "partial": "GUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:GUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor \u003ccode\u003eGenericSource cn k fk\u003c/code\u003e, the source must be\n of class \u003ccode\u003ecn\u003c/code\u003e.  If \u003ccode\u003efk\u003c/code\u003e is \u003ccode\u003eJust fk'\u003c/code\u003e, the source\n must also be the field named \u003ccode\u003efk'\u003c/code\u003e.  The variable\n named \u003ccode\u003ek\u003c/code\u003e should be bound to the actual object if\n this pattern matches.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "GenericSource",
          "package": "sindre",
          "signature": "GenericSource Identifier Identifier (Maybe Identifier)",
          "source": "src/Sindre-Sindre.html#SourcePat",
          "type": "function"
        },
        "index": {
          "description": "For GenericSource cn fk the source must be of class cn If fk is Just fk the source must also be the field named fk The variable named should be bound to the actual object if this pattern matches",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "GenericSource",
          "package": "sindre",
          "partial": "Generic Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:GenericSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Hyper",
          "package": "sindre",
          "signature": "Hyper",
          "source": "src/Sindre-Sindre.html#KeyModifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Hyper",
          "package": "sindre",
          "partial": "Hyper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Hyper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "If",
          "package": "sindre",
          "signature": "If (P Expr) [P Stmt] [P Stmt]",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "If",
          "normalized": "If(P Expr)[P Stmt][P Stmt]",
          "package": "sindre",
          "partial": "If",
          "signature": "If(P Expr)[P Stmt][P Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "KeyPress",
          "package": "sindre",
          "signature": "KeyPress Chord",
          "source": "src/Sindre-Sindre.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "KeyPress",
          "package": "sindre",
          "partial": "Key Press",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:KeyPress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "LessEql",
          "package": "sindre",
          "signature": "LessEql (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "LessEql",
          "package": "sindre",
          "partial": "Less Eql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:LessEql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "LessThan",
          "package": "sindre",
          "signature": "LessThan (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "LessThan",
          "package": "sindre",
          "partial": "Less Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:LessThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Literal",
          "package": "sindre",
          "signature": "Literal Value",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Literal",
          "package": "sindre",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Lookup",
          "package": "sindre",
          "signature": "Lookup (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Lookup",
          "package": "sindre",
          "partial": "Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt most this many pixels.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Max",
          "package": "sindre",
          "signature": "Max Integer",
          "source": "src/Sindre-Sindre.html#DimNeed",
          "type": "function"
        },
        "index": {
          "description": "At most this many pixels",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Max",
          "package": "sindre",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Meta",
          "package": "sindre",
          "signature": "Meta",
          "source": "src/Sindre-Sindre.html#KeyModifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Meta",
          "package": "sindre",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Methcall",
          "package": "sindre",
          "signature": "Methcall (P Expr) Identifier [P Expr]",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Methcall",
          "normalized": "Methcall(P Expr)Identifier[P Expr]",
          "package": "sindre",
          "partial": "Methcall",
          "signature": "Methcall(P Expr)Identifier[P Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Methcall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt minimum this many pixels.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Min",
          "package": "sindre",
          "signature": "Min Integer",
          "source": "src/Sindre-Sindre.html#DimNeed",
          "type": "function"
        },
        "index": {
          "description": "At minimum this many pixels",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Min",
          "package": "sindre",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Minus",
          "package": "sindre",
          "signature": "Minus (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Minus",
          "package": "sindre",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Modulo",
          "package": "sindre",
          "signature": "Modulo (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Modulo",
          "package": "sindre",
          "partial": "Modulo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Modulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "NamedEvent",
          "package": "sindre",
          "signature": "NamedEvent",
          "source": "src/Sindre-Sindre.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "NamedEvent",
          "package": "sindre",
          "partial": "Named Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:NamedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor \u003ccode\u003eNamedSource k fk\u003c/code\u003e, the source must be the\n object named \u003ccode\u003ek\u003c/code\u003e.  If \u003ccode\u003efk\u003c/code\u003e is \u003ccode\u003eJust fk'\u003c/code\u003e, the source\n must also be the field named \u003ccode\u003efk'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "NamedSource",
          "package": "sindre",
          "signature": "NamedSource Identifier (Maybe Identifier)",
          "source": "src/Sindre-Sindre.html#SourcePat",
          "type": "function"
        },
        "index": {
          "description": "For NamedSource fk the source must be the object named If fk is Just fk the source must also be the field named fk",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "NamedSource",
          "package": "sindre",
          "partial": "Named Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:NamedSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Next",
          "package": "sindre",
          "signature": "Next",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Next",
          "package": "sindre",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Not",
          "package": "sindre",
          "signature": "Not (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Not",
          "package": "sindre",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Number",
          "package": "sindre",
          "signature": "Number Double",
          "source": "src/Sindre-Sindre.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Number",
          "package": "sindre",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe source is the given object.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "ObjectSrc",
          "package": "sindre",
          "signature": "ObjectSrc ObjectRef",
          "source": "src/Sindre-Sindre.html#EventSource",
          "type": "function"
        },
        "index": {
          "description": "The source is the given object",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "ObjectSrc",
          "package": "sindre",
          "partial": "Object Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:ObjectSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch if either pattern\n matches.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "OrPattern",
          "package": "sindre",
          "signature": "OrPattern Pattern Pattern",
          "source": "src/Sindre-Sindre.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "Match if either pattern matches",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "OrPattern",
          "package": "sindre",
          "partial": "Or Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:OrPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "P",
          "package": "sindre",
          "signature": "P",
          "source": "src/Sindre-Sindre.html#P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "P",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Plus",
          "package": "sindre",
          "signature": "Plus (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Plus",
          "package": "sindre",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "PostDec",
          "package": "sindre",
          "signature": "PostDec (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "PostDec",
          "package": "sindre",
          "partial": "Post Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:PostDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "PostInc",
          "package": "sindre",
          "signature": "PostInc (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "PostInc",
          "package": "sindre",
          "partial": "Post Inc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:PostInc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Print",
          "package": "sindre",
          "signature": "Print [P Expr]",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Print",
          "normalized": "Print[P Expr]",
          "package": "sindre",
          "partial": "Print",
          "signature": "Print[P Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Program",
          "package": "sindre",
          "signature": "Program",
          "source": "src/Sindre-Sindre.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Program",
          "package": "sindre",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "RaisedTo",
          "package": "sindre",
          "signature": "RaisedTo (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "RaisedTo",
          "package": "sindre",
          "partial": "Raised To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:RaisedTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Rectangle",
          "package": "sindre",
          "signature": "Rectangle",
          "source": "src/Sindre-Sindre.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Rectangle",
          "package": "sindre",
          "partial": "Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Reference",
          "package": "sindre",
          "signature": "Reference ObjectRef",
          "source": "src/Sindre-Sindre.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Reference",
          "package": "sindre",
          "partial": "Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Return",
          "package": "sindre",
          "signature": "Return (Maybe (P Expr))",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Return",
          "package": "sindre",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Shift",
          "package": "sindre",
          "signature": "Shift",
          "source": "src/Sindre-Sindre.html#KeyModifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Shift",
          "package": "sindre",
          "partial": "Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSourcedPattern src ev vars\u003c/code\u003e matches if \u003ccode\u003esrc\u003c/code\u003e\n matches the event source (see \u003ccode\u003e\u003ca\u003eSourcePat\u003c/a\u003e\u003c/code\u003e) an \u003ccode\u003eev\u003c/code\u003e\n matches the event name.  \u003ccode\u003evars\u003c/code\u003e should be bound to\n the values in the payload of the event.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "SourcedPattern",
          "package": "sindre",
          "signature": "SourcedPattern",
          "source": "src/Sindre-Sindre.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "SourcedPattern src ev vars matches if src matches the event source see SourcePat an ev matches the event name vars should be bound to the values in the payload of the event",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "SourcedPattern",
          "package": "sindre",
          "partial": "Sourced Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:SourcedPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute these statements.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "StmtAction",
          "package": "sindre",
          "signature": "StmtAction [P Stmt]",
          "source": "src/Sindre-Sindre.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Execute these statements",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "StmtAction",
          "normalized": "StmtAction[P Stmt]",
          "package": "sindre",
          "partial": "Stmt Action",
          "signature": "StmtAction[P Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:StmtAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "StringV",
          "package": "sindre",
          "signature": "StringV Text",
          "source": "src/Sindre-Sindre.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "StringV",
          "package": "sindre",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:StringV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Super",
          "package": "sindre",
          "signature": "Super",
          "source": "src/Sindre-Sindre.html#KeyModifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Super",
          "package": "sindre",
          "partial": "Super",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Super"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Times",
          "package": "sindre",
          "signature": "Times (P Expr) (P Expr)",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Times",
          "package": "sindre",
          "partial": "Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs many or as few pixels as necessary.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "Unlimited",
          "package": "sindre",
          "signature": "Unlimited",
          "source": "src/Sindre-Sindre.html#DimNeed",
          "type": "function"
        },
        "index": {
          "description": "As many or as few pixels as necessary",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Unlimited",
          "package": "sindre",
          "partial": "Unlimited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Unlimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "Var",
          "package": "sindre",
          "signature": "Var Identifier",
          "source": "src/Sindre-Sindre.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "Var",
          "package": "sindre",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "While",
          "package": "sindre",
          "signature": "While (P Expr) [P Stmt]",
          "source": "src/Sindre-Sindre.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "While",
          "normalized": "While(P Expr)[P Stmt]",
          "package": "sindre",
          "partial": "While",
          "signature": "While(P Expr)[P Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:While"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eadjustRect (walign, halign) bigrect smallrect\u003c/code\u003e returns a\n rectangle with the same dimensions as \u003ccode\u003esmallrect\u003c/code\u003e aligned within\n \u003ccode\u003ebigrect\u003c/code\u003e in both dimensions.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "adjustRect",
          "package": "sindre",
          "signature": "(Align, Align) -\u003e Rectangle -\u003e Rectangle -\u003e Rectangle",
          "source": "src/Sindre-Sindre.html#adjustRect",
          "type": "function"
        },
        "index": {
          "description": "adjustRect walign halign bigrect smallrect returns rectangle with the same dimensions as smallrect aligned within bigrect in both dimensions",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "adjustRect",
          "normalized": "(Align,Align)-\u003eRectangle-\u003eRectangle-\u003eRectangle",
          "package": "sindre",
          "partial": "Rect",
          "signature": "(Align,Align)-\u003eRectangle-\u003eRectangle-\u003eRectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:adjustRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ealign a lower x upper\u003c/code\u003e, where \u003ccode\u003elower\u003c=upper\u003c/code\u003e, aligns a\n subinterval of length \u003ccode\u003ex\u003c/code\u003e in the interval \u003ccode\u003elower\u003c/code\u003e to \u003ccode\u003eupper\u003c/code\u003e,\n returning the coordinate at which the aligned subinterval starts.\n For example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ealign AlignCenter 2 4 10\n\u003c/code\u003e\u003c/strong\u003e4\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ealign AlignNeg 2 4 10\n\u003c/code\u003e\u003c/strong\u003e2\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ealign AlignPos 2 4 10\n\u003c/code\u003e\u003c/strong\u003e6\n\u003c/pre\u003e",
          "module": "Sindre.Sindre",
          "name": "align",
          "package": "sindre",
          "signature": "Align -\u003e a -\u003e a -\u003e a -\u003e a",
          "source": "src/Sindre-Sindre.html#align",
          "type": "function"
        },
        "index": {
          "description": "align lower upper where lower upper aligns subinterval of length in the interval lower to upper returning the coordinate at which the aligned subinterval starts For example align AlignCenter align AlignNeg align AlignPos",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "align",
          "normalized": "Align-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "sindre",
          "signature": "Align-\u003ea-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex \u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e gives a value containing \u003ccode\u003ex\u003c/code\u003e, but with the same source\n position as \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "at",
          "package": "sindre",
          "signature": "a -\u003e P b -\u003e P a",
          "source": "src/Sindre-Sindre.html#at",
          "type": "function"
        },
        "index": {
          "description": "at gives value containing but with the same source position as",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "at",
          "normalized": "a-\u003eP b-\u003eP a",
          "package": "sindre",
          "signature": "a-\u003eP b-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003econstrainNeed need constraints\u003c/code\u003e reduces the space requirement\n given by \u003ccode\u003eneed\u003c/code\u003e in order to fulfill \u003ccode\u003econstraints\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "constrainNeed",
          "package": "sindre",
          "signature": "SpaceNeed -\u003e Constraints -\u003e SpaceNeed",
          "source": "src/Sindre-Sindre.html#constrainNeed",
          "type": "function"
        },
        "index": {
          "description": "constrainNeed need constraints reduces the space requirement given by need in order to fulfill constraints",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "constrainNeed",
          "normalized": "SpaceNeed-\u003eConstraints-\u003eSpaceNeed",
          "package": "sindre",
          "partial": "Need",
          "signature": "SpaceNeed-\u003eConstraints-\u003eSpaceNeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:constrainNeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the event.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "eventName",
          "package": "sindre",
          "signature": "Identifier",
          "source": "src/Sindre-Sindre.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The name of the event",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "eventName",
          "package": "sindre",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:eventName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere it's from.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "eventSource",
          "package": "sindre",
          "signature": "EventSource",
          "source": "src/Sindre-Sindre.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Where it from",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "eventSource",
          "package": "sindre",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:eventSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe payload of the event.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "eventValue",
          "package": "sindre",
          "signature": "[Value]",
          "source": "src/Sindre-Sindre.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The payload of the event",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "eventValue",
          "normalized": "[Value]",
          "package": "sindre",
          "partial": "Value",
          "signature": "[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:eventValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonical false value, see \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCanonical true value, see \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "falsity",
          "package": "sindre",
          "signature": "Value",
          "source": "src/Sindre-Sindre.html#truth",
          "type": "function"
        },
        "index": {
          "description": "Canonical false value see true Canonical true value see true",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "falsity",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:falsity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efitRect rect need\u003c/code\u003e yields a rectangle as large as possible, but\n no larger than \u003ccode\u003erect\u003c/code\u003e, that tries to fulfill the constraints\n \u003ccode\u003eneed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "fitRect",
          "package": "sindre",
          "signature": "Rectangle -\u003e SpaceNeed -\u003e Rectangle",
          "source": "src/Sindre-Sindre.html#fitRect",
          "type": "function"
        },
        "index": {
          "description": "fitRect rect need yields rectangle as large as possible but no larger than rect that tries to fulfill the constraints need",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "fitRect",
          "normalized": "Rectangle-\u003eSpaceNeed-\u003eRectangle",
          "package": "sindre",
          "partial": "Rect",
          "signature": "Rectangle-\u003eSpaceNeed-\u003eRectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:fitRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default position when no other is available.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "nowhere",
          "package": "sindre",
          "signature": "SourcePos",
          "source": "src/Sindre-Sindre.html#nowhere",
          "type": "function"
        },
        "index": {
          "description": "default position when no other is available",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "nowhere",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:nowhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "patternEvent",
          "package": "sindre",
          "signature": "Identifier",
          "source": "src/Sindre-Sindre.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "patternEvent",
          "package": "sindre",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:patternEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "patternSource",
          "package": "sindre",
          "signature": "SourcePat",
          "source": "src/Sindre-Sindre.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "patternSource",
          "package": "sindre",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:patternSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "patternVars",
          "package": "sindre",
          "signature": "[Identifier]",
          "source": "src/Sindre-Sindre.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "patternVars",
          "normalized": "[Identifier]",
          "package": "sindre",
          "partial": "Vars",
          "signature": "[Identifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:patternVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrettyprint a source position in a human-readable form.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eposition (\"foobar.sindre\", 5, 15)\n\u003c/code\u003e\u003c/strong\u003e\"foobar.sindre:5:15: \"\n\u003c/pre\u003e",
          "module": "Sindre.Sindre",
          "name": "position",
          "package": "sindre",
          "signature": "SourcePos -\u003e String",
          "source": "src/Sindre-Sindre.html#position",
          "type": "function"
        },
        "index": {
          "description": "Prettyprint source position in human-readable form position foobar.sindre foobar.sindre",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "position",
          "normalized": "SourcePos-\u003eString",
          "package": "sindre",
          "signature": "SourcePos-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "programActions",
          "package": "sindre",
          "signature": "[P (Pattern, Action)]",
          "source": "src/Sindre-Sindre.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "programActions",
          "normalized": "[P(Pattern,Action)]",
          "package": "sindre",
          "partial": "Actions",
          "signature": "[P(Pattern,Action)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe contents of the \u003ccode\u003eBEGIN\u003c/code\u003e block.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "programBegin",
          "package": "sindre",
          "signature": "[P Stmt]",
          "source": "src/Sindre-Sindre.html#Program",
          "type": "function"
        },
        "index": {
          "description": "The contents of the BEGIN block",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "programBegin",
          "normalized": "[P Stmt]",
          "package": "sindre",
          "partial": "Begin",
          "signature": "[P Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "programFunctions",
          "package": "sindre",
          "signature": "[P (Identifier, Function)]",
          "source": "src/Sindre-Sindre.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "programFunctions",
          "normalized": "[P(Identifier,Function)]",
          "package": "sindre",
          "partial": "Functions",
          "signature": "[P(Identifier,Function)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "programGUI",
          "package": "sindre",
          "signature": "(Maybe (P Expr), GUI)",
          "source": "src/Sindre-Sindre.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "programGUI",
          "normalized": "(Maybe(P Expr),GUI)",
          "package": "sindre",
          "partial": "GUI",
          "signature": "(Maybe(P Expr),GUI)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programGUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "programGlobals",
          "package": "sindre",
          "signature": "[P (Identifier, P Expr)]",
          "source": "src/Sindre-Sindre.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "programGlobals",
          "normalized": "[P(Identifier,P Expr)]",
          "package": "sindre",
          "partial": "Globals",
          "signature": "[P(Identifier,P Expr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programGlobals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "programOptions",
          "package": "sindre",
          "signature": "[P (Identifier, (SindreOption, Maybe Value))]",
          "source": "src/Sindre-Sindre.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "programOptions",
          "normalized": "[P(Identifier,(SindreOption,Maybe Value))]",
          "package": "sindre",
          "partial": "Options",
          "signature": "[P(Identifier,(SindreOption,Maybe Value))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "rectHeight",
          "package": "sindre",
          "signature": "Integer",
          "source": "src/Sindre-Sindre.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "rectHeight",
          "package": "sindre",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip the x and y coordinates and width and height of a rectangle,\n in a sense rotating it ninety degrees.  Note that \u003ccode\u003erectTranspose\n . rectTranspose = id\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "rectTranspose",
          "package": "sindre",
          "signature": "Rectangle -\u003e Rectangle",
          "source": "src/Sindre-Sindre.html#rectTranspose",
          "type": "function"
        },
        "index": {
          "description": "Flip the and coordinates and width and height of rectangle in sense rotating it ninety degrees Note that rectTranspose rectTranspose id",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "rectTranspose",
          "normalized": "Rectangle-\u003eRectangle",
          "package": "sindre",
          "partial": "Transpose",
          "signature": "Rectangle-\u003eRectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectTranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "rectWidth",
          "package": "sindre",
          "signature": "Integer",
          "source": "src/Sindre-Sindre.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "rectWidth",
          "package": "sindre",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "rectX",
          "package": "sindre",
          "signature": "Integer",
          "source": "src/Sindre-Sindre.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "rectX",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "rectY",
          "package": "sindre",
          "signature": "Integer",
          "source": "src/Sindre-Sindre.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "rectY",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "sourcePos",
          "package": "sindre",
          "signature": "SourcePos",
          "source": "src/Sindre-Sindre.html#P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "sourcePos",
          "package": "sindre",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:sourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esplitHoriz rect dims\u003c/code\u003e splits \u003ccode\u003erect\u003c/code\u003e horizontally into a number\n of non-overlapping equal-width rectangles stacked on top of each\n other.  \u003ccode\u003edims\u003c/code\u003e is a list of height requirements that the function\n will attempt to fulfill as best it is able.  The union of the list\n of returned rectangles will always be equal to \u003ccode\u003erect\u003c/code\u003e.  No\n rectangle will ever have negative dimensions.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "splitHoriz",
          "package": "sindre",
          "signature": "Rectangle -\u003e [DimNeed] -\u003e [Rectangle]",
          "source": "src/Sindre-Sindre.html#splitHoriz",
          "type": "function"
        },
        "index": {
          "description": "splitHoriz rect dims splits rect horizontally into number of non-overlapping equal-width rectangles stacked on top of each other dims is list of height requirements that the function will attempt to fulfill as best it is able The union of the list of returned rectangles will always be equal to rect No rectangle will ever have negative dimensions",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "splitHoriz",
          "normalized": "Rectangle-\u003e[DimNeed]-\u003e[Rectangle]",
          "package": "sindre",
          "partial": "Horiz",
          "signature": "Rectangle-\u003e[DimNeed]-\u003e[Rectangle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:splitHoriz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003esplitHoriz\u003c/code\u003e, but splits vertically instead of horizontally,\n so the rectangles will be next to each other.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "splitVert",
          "package": "sindre",
          "signature": "Rectangle -\u003e [DimNeed] -\u003e [Rectangle]",
          "source": "src/Sindre-Sindre.html#splitVert",
          "type": "function"
        },
        "index": {
          "description": "As splitHoriz but splits vertically instead of horizontally so the rectangles will be next to each other",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "splitVert",
          "normalized": "Rectangle-\u003e[DimNeed]-\u003e[Rectangle]",
          "package": "sindre",
          "partial": "Vert",
          "signature": "Rectangle-\u003e[DimNeed]-\u003e[Rectangle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:splitVert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e returns a Sindre string.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "string",
          "package": "sindre",
          "signature": "String -\u003e Value",
          "source": "src/Sindre-Sindre.html#string",
          "type": "function"
        },
        "index": {
          "description": "string returns Sindre string",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "string",
          "normalized": "String-\u003eValue",
          "package": "sindre",
          "signature": "String-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etrue v\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ev\u003c/code\u003e is interpreted as a true value in\n Sindre, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "true",
          "package": "sindre",
          "signature": "Value -\u003e Bool",
          "source": "src/Sindre-Sindre.html#true",
          "type": "function"
        },
        "index": {
          "description": "true returns True if is interpreted as true value in Sindre False otherwise",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "true",
          "normalized": "Value-\u003eBool",
          "package": "sindre",
          "signature": "Value-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonical false value, see \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCanonical true value, see \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "truth",
          "package": "sindre",
          "signature": "Value",
          "source": "src/Sindre-Sindre.html#truth",
          "type": "function"
        },
        "index": {
          "description": "Canonical false value see true Canonical true value see true",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "truth",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:truth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Sindre",
          "name": "unP",
          "package": "sindre",
          "signature": "a",
          "source": "src/Sindre-Sindre.html#P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "unP",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:unP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arguments passed to the widget.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "widgetArgs",
          "package": "sindre",
          "signature": "WidgetArgs",
          "source": "src/Sindre-Sindre.html#GUI",
          "type": "function"
        },
        "index": {
          "description": "The arguments passed to the widget",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "widgetArgs",
          "package": "sindre",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:widgetArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChildren of the widget, if any.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "widgetChildren",
          "package": "sindre",
          "signature": "[(Maybe (P Expr), GUI)]",
          "source": "src/Sindre-Sindre.html#GUI",
          "type": "function"
        },
        "index": {
          "description": "Children of the widget if any",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "widgetChildren",
          "normalized": "[(Maybe(P Expr),GUI)]",
          "package": "sindre",
          "partial": "Children",
          "signature": "[(Maybe(P Expr),GUI)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:widgetChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of the widget.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "widgetClass",
          "package": "sindre",
          "signature": "P Identifier",
          "source": "src/Sindre-Sindre.html#GUI",
          "type": "function"
        },
        "index": {
          "description": "Class of the widget",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "widgetClass",
          "package": "sindre",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:widgetClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the widget, if any.\n\u003c/p\u003e",
          "module": "Sindre.Sindre",
          "name": "widgetName",
          "package": "sindre",
          "signature": "Maybe Identifier",
          "source": "src/Sindre-Sindre.html#GUI",
          "type": "function"
        },
        "index": {
          "description": "Name of the widget if any",
          "hierarchy": "Sindre Sindre",
          "module": "Sindre.Sindre",
          "name": "widgetName",
          "package": "sindre",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:widgetName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious utility bits and pieces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.Util",
          "name": "Util",
          "package": "sindre",
          "source": "src/Sindre-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Various utility bits and pieces",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "Util",
          "package": "sindre",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBound a value by minimum and maximum values.\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "clamp",
          "package": "sindre",
          "signature": "a -\u003e a -\u003e a -\u003e a",
          "source": "src/Sindre-Util.html#clamp",
          "type": "function"
        },
        "index": {
          "description": "Bound value by minimum and maximum values",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "clamp",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "sindre",
          "signature": "a-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:clamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for 'map toLower'\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "downcase",
          "package": "sindre",
          "signature": "String -\u003e String",
          "source": "src/Sindre-Util.html#downcase",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for map toLower",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "downcase",
          "normalized": "String-\u003eString",
          "package": "sindre",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:downcase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for 'liftIO . hPutStrLn stderr'\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "err",
          "package": "sindre",
          "signature": "String -\u003e m ()",
          "source": "src/Sindre-Util.html#err",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for liftIO hPutStrLn stderr",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "err",
          "normalized": "String-\u003ea()",
          "package": "sindre",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "fi",
          "package": "sindre",
          "signature": "a -\u003e b",
          "source": "src/Sindre-Util.html#fi",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for fromIntegral",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "fi",
          "normalized": "a-\u003eb",
          "package": "sindre",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:fi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion scheme as in http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eHSV_color_space\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "hsv2rgb",
          "package": "sindre",
          "signature": "(Integer, a, a) -\u003e (a, a, a)",
          "source": "src/Sindre-Util.html#hsv2rgb",
          "type": "function"
        },
        "index": {
          "description": "Conversion scheme as in http en.wikipedia.org wiki HSV color space",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "hsv2rgb",
          "normalized": "(Integer,a,a)-\u003e(a,a,a)",
          "package": "sindre",
          "signature": "(Integer,a,a)-\u003e(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:hsv2rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003ewhen\u003c/code\u003e, but with two branches.  A lifted \u003ccode\u003eif\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "ifM",
          "package": "sindre",
          "signature": "m Bool -\u003e m a -\u003e m a -\u003e m a",
          "source": "src/Sindre-Util.html#ifM",
          "type": "function"
        },
        "index": {
          "description": "Like when but with two branches lifted if",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "ifM",
          "normalized": "a Bool-\u003ea b-\u003ea b-\u003ea b",
          "package": "sindre",
          "signature": "m Bool-\u003em a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "io",
          "package": "sindre",
          "signature": "IO a -\u003e m a",
          "source": "src/Sindre-Util.html#io",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for liftIO",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "io",
          "normalized": "IO a-\u003eb a",
          "package": "sindre",
          "signature": "IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumLM\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003efoldlM\u003c/code\u003e; it applies a monadic function to each element of a list,\n passing an accumulating parameter from left to right, and returning\n a final value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "mapAccumLM",
          "package": "sindre",
          "signature": "(acc -\u003e x -\u003e m (acc, y)) -\u003e acc -\u003e [x] -\u003e m (acc, [y])",
          "source": "src/Sindre-Util.html#mapAccumLM",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumLM function behaves like combination of mapM and foldlM it applies monadic function to each element of list passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "mapAccumLM",
          "normalized": "(a-\u003eb-\u003ec(a,d))-\u003ea-\u003e[b]-\u003ec(a,[d])",
          "package": "sindre",
          "partial": "Accum LM",
          "signature": "(acc-\u003ex-\u003em(acc,y))-\u003eacc-\u003e[x]-\u003em(acc,[y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:mapAccumLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut double quotes around the given string.\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "quote",
          "package": "sindre",
          "signature": "String -\u003e String",
          "source": "src/Sindre-Util.html#quote",
          "type": "function"
        },
        "index": {
          "description": "Put double quotes around the given string",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "quote",
          "normalized": "String-\u003eString",
          "package": "sindre",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for 'map toUpper'\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "upcase",
          "package": "sindre",
          "signature": "String -\u003e String",
          "source": "src/Sindre-Util.html#upcase",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for map toUpper",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "upcase",
          "normalized": "String-\u003eString",
          "package": "sindre",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:upcase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend and append first argument to second argument.\n\u003c/p\u003e",
          "module": "Sindre.Util",
          "name": "wrap",
          "package": "sindre",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Sindre-Util.html#wrap",
          "type": "function"
        },
        "index": {
          "description": "Prepend and append first argument to second argument",
          "hierarchy": "Sindre Util",
          "module": "Sindre.Util",
          "name": "wrap",
          "normalized": "String-\u003eString-\u003eString",
          "package": "sindre",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePortable Sindre gadgets and helper functions that can be used by\n any backend.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.Widgets",
          "name": "Widgets",
          "package": "sindre",
          "source": "src/Sindre-Widgets.html",
          "type": "module"
        },
        "index": {
          "description": "Portable Sindre gadgets and helper functions that can be used by any backend",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "Widgets",
          "package": "sindre",
          "partial": "Widgets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of using \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e to apply a user-provided pattern to a\n string.\n\u003c/p\u003e",
          "module": "Sindre.Widgets",
          "name": "Match",
          "package": "sindre",
          "source": "src/Sindre-Widgets.html#Match",
          "type": "data"
        },
        "index": {
          "description": "The result of using match to apply user-provided pattern to string",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "Match",
          "package": "sindre",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Widgets",
          "name": "ExactMatch",
          "package": "sindre",
          "signature": "ExactMatch",
          "source": "src/Sindre-Widgets.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "ExactMatch",
          "package": "sindre",
          "partial": "Exact Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:ExactMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Widgets",
          "name": "InfixMatch",
          "package": "sindre",
          "signature": "InfixMatch",
          "source": "src/Sindre-Widgets.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "InfixMatch",
          "package": "sindre",
          "partial": "Infix Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:InfixMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.Widgets",
          "name": "PrefixMatch",
          "package": "sindre",
          "signature": "PrefixMatch",
          "source": "src/Sindre-Widgets.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "PrefixMatch",
          "package": "sindre",
          "partial": "Prefix Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:PrefixMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echangeField field m\u003c/code\u003e applies \u003ccode\u003em\u003c/code\u003e to the current value of the\n field \u003ccode\u003efield\u003c/code\u003e, updates \u003ccode\u003efield\u003c/code\u003e with the value returned by \u003ccode\u003em\u003c/code\u003e, and\n returns the new value.\n\u003c/p\u003e",
          "module": "Sindre.Widgets",
          "name": "changeField",
          "package": "sindre",
          "signature": "FieldDesc s im v -\u003e (v -\u003e ObjectM s im v) -\u003e ObjectM s im v",
          "source": "src/Sindre-Widgets.html#changeField",
          "type": "function"
        },
        "index": {
          "description": "changeField field applies to the current value of the field field updates field with the value returned by and returns the new value",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "changeField",
          "normalized": "FieldDesc a b c-\u003e(c-\u003eObjectM a b c)-\u003eObjectM a b c",
          "package": "sindre",
          "partial": "Field",
          "signature": "FieldDesc s im v-\u003e(v-\u003eObjectM s im v)-\u003eObjectM s im v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:changeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echangeField\u003c/a\u003e\u003c/code\u003e, but without a return value.\n\u003c/p\u003e",
          "module": "Sindre.Widgets",
          "name": "changeField_",
          "package": "sindre",
          "signature": "FieldDesc s im v -\u003e (v -\u003e ObjectM s im v) -\u003e ObjectM s im ()",
          "source": "src/Sindre-Widgets.html#changeField_",
          "type": "function"
        },
        "index": {
          "description": "Like changeField but without return value",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "changeField_",
          "normalized": "FieldDesc a b c-\u003e(c-\u003eObjectM a b c)-\u003eObjectM a b()",
          "package": "sindre",
          "partial": "Field",
          "signature": "FieldDesc s im v-\u003e(v-\u003eObjectM s im v)-\u003eObjectM s im()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:changeField_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echangingFields fields m\u003c/code\u003e evaluates \u003ccode\u003em\u003c/code\u003e, then emits field change\n events for those fields whose names are in \u003ccode\u003efields\u003c/code\u003e that changed\n while evaluating \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Widgets",
          "name": "changingField",
          "package": "sindre",
          "signature": "FieldDesc s im v -\u003e ObjectM s im a -\u003e ObjectM s im a",
          "source": "src/Sindre-Widgets.html#changingField",
          "type": "function"
        },
        "index": {
          "description": "changingFields fields evaluates then emits field change events for those fields whose names are in fields that changed while evaluating",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "changingField",
          "normalized": "FieldDesc a b c-\u003eObjectM a b d-\u003eObjectM a b d",
          "package": "sindre",
          "partial": "Field",
          "signature": "FieldDesc s im v-\u003eObjectM s im a-\u003eObjectM s im a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:changingField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efilterMatches f pat l\u003c/code\u003e returns only those elements of \u003ccode\u003el\u003c/code\u003e that\n match \u003ccode\u003epat\u003c/code\u003e, using \u003ccode\u003ef\u003c/code\u003e to convert each element to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  The\n result will be ordered equivalently to \u003ccode\u003el\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sindre.Widgets",
          "name": "filterMatches",
          "package": "sindre",
          "signature": "(a -\u003e Text) -\u003e Text -\u003e [a] -\u003e [a]",
          "source": "src/Sindre-Widgets.html#filterMatches",
          "type": "function"
        },
        "index": {
          "description": "filterMatches pat returns only those elements of that match pat using to convert each element to Text The result will be ordered equivalently to",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "filterMatches",
          "normalized": "(a-\u003eText)-\u003eText-\u003e[a]-\u003e[a]",
          "package": "sindre",
          "partial": "Matches",
          "signature": "(a-\u003eText)-\u003eText-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:filterMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ematch pat s\u003c/code\u003e applies the pattern \u003ccode\u003epat\u003c/code\u003e to \u003ccode\u003es\u003c/code\u003e and returns a\n \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e describing the kind of match if any, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n otherwise.  The pattern is interpreted as tokens delimited by\n whitespace, and each token must be present somewhere in \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.Widgets",
          "name": "match",
          "package": "sindre",
          "signature": "Text -\u003e Text -\u003e Maybe Match",
          "source": "src/Sindre-Widgets.html#match",
          "type": "function"
        },
        "index": {
          "description": "match pat applies the pattern pat to and returns Match describing the kind of match if any or Nothing otherwise The pattern is interpreted as tokens delimited by whitespace and each token must be present somewhere in",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "match",
          "normalized": "Text-\u003eText-\u003eMaybe Match",
          "package": "sindre",
          "signature": "Text-\u003eText-\u003eMaybe Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widget that arranges its children in a horizontal row.\n\u003c/p\u003e",
          "module": "Sindre.Widgets",
          "name": "mkHorizontally",
          "package": "sindre",
          "signature": "Constructor m",
          "source": "src/Sindre-Widgets.html#mkHorizontally",
          "type": "function"
        },
        "index": {
          "description": "widget that arranges its children in horizontal row",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "mkHorizontally",
          "package": "sindre",
          "partial": "Horizontally",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:mkHorizontally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widget that arranges its children in a vertical column.\n\u003c/p\u003e",
          "module": "Sindre.Widgets",
          "name": "mkVertically",
          "package": "sindre",
          "signature": "Constructor m",
          "source": "src/Sindre-Widgets.html#mkVertically",
          "type": "function"
        },
        "index": {
          "description": "widget that arranges its children in vertical column",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "mkVertically",
          "package": "sindre",
          "partial": "Vertically",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:mkVertically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esortMatches f pat l\u003c/code\u003e returns only those elements of \u003ccode\u003el\u003c/code\u003e that\n match \u003ccode\u003epat\u003c/code\u003e, using \u003ccode\u003ef\u003c/code\u003e to convert each element to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  The\n result will be reordered such that exact matches come first, then\n prefixes, then infixes, although original order will be maintained\n within these three groups.\n\u003c/p\u003e",
          "module": "Sindre.Widgets",
          "name": "sortMatches",
          "package": "sindre",
          "signature": "(a -\u003e Text) -\u003e Text -\u003e [a] -\u003e [a]",
          "source": "src/Sindre-Widgets.html#sortMatches",
          "type": "function"
        },
        "index": {
          "description": "sortMatches pat returns only those elements of that match pat using to convert each element to Text The result will be reordered such that exact matches come first then prefixes then infixes although original order will be maintained within these three groups",
          "hierarchy": "Sindre Widgets",
          "module": "Sindre.Widgets",
          "name": "sortMatches",
          "normalized": "(a-\u003eText)-\u003eText-\u003e[a]-\u003e[a]",
          "package": "sindre",
          "partial": "Matches",
          "signature": "(a-\u003eText)-\u003eText-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:sortMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eX11 backend for Sindre.  For internationalised keyboard input to\n work, make sure the locale is correctly set.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sindre.X11",
          "name": "X11",
          "package": "sindre",
          "source": "src/Sindre-X11.html",
          "type": "module"
        },
        "index": {
          "description": "X11 backend for Sindre For internationalised keyboard input to work make sure the locale is correctly set",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "X11",
          "package": "sindre",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "Drawer",
          "package": "sindre",
          "source": "src/Sindre-X11.html#Drawer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "Drawer",
          "package": "sindre",
          "partial": "Drawer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:Drawer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe read-only configuration of the X11 backend, created during\n backend initialisation.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "SindreX11Conf",
          "package": "sindre",
          "source": "src/Sindre-X11.html#SindreX11Conf",
          "type": "data"
        },
        "index": {
          "description": "The read-only configuration of the X11 backend created during backend initialisation",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "SindreX11Conf",
          "package": "sindre",
          "partial": "Sindre Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:SindreX11Conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSindre backend using Xlib.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "SindreX11M",
          "package": "sindre",
          "source": "src/Sindre-X11.html#SindreX11M",
          "type": "data"
        },
        "index": {
          "description": "Sindre backend using Xlib",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "SindreX11M",
          "package": "sindre",
          "partial": "Sindre",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:SindreX11M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions regarding visual appearance of widgets (colors and\n fonts).\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "VisualOpts",
          "package": "sindre",
          "source": "src/Sindre-X11.html#VisualOpts",
          "type": "data"
        },
        "index": {
          "description": "Options regarding visual appearance of widgets colors and fonts",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "VisualOpts",
          "package": "sindre",
          "partial": "Visual Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:VisualOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "X11Field",
          "package": "sindre",
          "source": "src/Sindre-X11.html#X11Field",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "X11Field",
          "package": "sindre",
          "partial": "Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:X11Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "Drawer",
          "package": "sindre",
          "signature": "Drawer",
          "source": "src/Sindre-X11.html#Drawer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "Drawer",
          "package": "sindre",
          "partial": "Drawer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:Drawer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "VisualOpts",
          "package": "sindre",
          "signature": "VisualOpts",
          "source": "src/Sindre-X11.html#VisualOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "VisualOpts",
          "package": "sindre",
          "partial": "Visual Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:VisualOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "allocColor",
          "package": "sindre",
          "signature": "XftMgr -\u003e String -\u003e m Color",
          "source": "src/Sindre-X11.html#allocColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "allocColor",
          "normalized": "XftMgr-\u003eString-\u003ea Color",
          "package": "sindre",
          "partial": "Color",
          "signature": "XftMgr-\u003eString-\u003em Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:allocColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "background",
          "package": "sindre",
          "signature": "Color",
          "source": "src/Sindre-X11.html#VisualOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "background",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "bg",
          "package": "sindre",
          "signature": "forall f.  CoreDrawer f",
          "source": "src/Sindre-X11.html#Drawer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "bg",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:bg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "drawText",
          "package": "sindre",
          "signature": "Color -\u003e Font -\u003e x -\u003e y -\u003e z -\u003e String -\u003e SindreX11M ()",
          "source": "src/Sindre-X11.html#drawText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "drawText",
          "normalized": "Color-\u003eFont-\u003ea-\u003eb-\u003ec-\u003eString-\u003eSindreX M()",
          "package": "sindre",
          "partial": "Text",
          "signature": "Color-\u003eFont-\u003ex-\u003ey-\u003ez-\u003eString-\u003eSindreX M()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "drawerBgColor",
          "package": "sindre",
          "signature": "Color",
          "source": "src/Sindre-X11.html#Drawer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "drawerBgColor",
          "package": "sindre",
          "partial": "Bg Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawerBgColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "drawerFgColor",
          "package": "sindre",
          "signature": "Color",
          "source": "src/Sindre-X11.html#Drawer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "drawerFgColor",
          "package": "sindre",
          "partial": "Fg Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawerFgColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "drawerFont",
          "package": "sindre",
          "signature": "Font",
          "source": "src/Sindre-X11.html#Drawer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "drawerFont",
          "package": "sindre",
          "partial": "Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawerFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function that makes it easier it write consistent widgets\n in the X11 backend.  The widget is automatically filled with its\n (nonfocus) background color.  You are supposed to use this in the\n \u003ccode\u003edrawI\u003c/code\u003e method of a \u003ccode\u003eWidget\u003c/code\u003e instance definition.  An example:\n\u003c/p\u003e\u003cpre\u003e\n drawI = drawing myWidgetWin myWidgetVisual $ r fg bg ffg fbg -\u003e do\n   fg drawString 0 5 \"foreground\"\n   bg drawString 0 15 \"background\"\n   ffg drawString 0 25 \"focus foreground\"\n   fbg drawString 0 35 \"focus background\"\n\u003c/pre\u003e",
          "module": "Sindre.X11",
          "name": "drawing",
          "package": "sindre",
          "signature": "VisualOpts-\u003e (Rectangle -\u003e Drawer -\u003e Drawer -\u003e ObjectM a SindreX11M [Rectangle])-\u003e Rectangle-\u003e ObjectM a SindreX11M SpaceUse",
          "type": "function"
        },
        "index": {
          "description": "Helper function that makes it easier it write consistent widgets in the X11 backend The widget is automatically filled with its nonfocus background color You are supposed to use this in the drawI method of Widget instance definition An example drawI drawing myWidgetWin myWidgetVisual fg bg ffg fbg do fg drawString foreground bg drawString background ffg drawString focus foreground fbg drawString focus background",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "drawing",
          "normalized": "VisualOpts-\u003e(Rectangle-\u003eDrawer-\u003eDrawer-\u003eObjectM a SindreX M[Rectangle])-\u003eRectangle-\u003eObjectM a SindreX M SpaceUse",
          "package": "sindre",
          "signature": "VisualOpts-\u003e(Rectangle-\u003eDrawer-\u003eDrawer-\u003eObjectM a SindreX M[Rectangle])-\u003eRectangle-\u003eObjectM a SindreX M SpaceUse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003edrawing\u003c/code\u003e that assumes the entire rectangle is used.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "drawing'",
          "package": "sindre",
          "signature": "VisualOpts -\u003e (Rectangle -\u003e Drawer -\u003e Drawer -\u003e ObjectM a SindreX11M ()) -\u003e Rectangle -\u003e ObjectM a SindreX11M SpaceUse",
          "source": "src/Sindre-X11.html#drawing%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of drawing that assumes the entire rectangle is used",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "drawing'",
          "normalized": "VisualOpts-\u003e(Rectangle-\u003eDrawer-\u003eDrawer-\u003eObjectM a SindreX M())-\u003eRectangle-\u003eObjectM a SindreX M SpaceUse",
          "package": "sindre",
          "signature": "VisualOpts-\u003e(Rectangle-\u003eDrawer-\u003eDrawer-\u003eObjectM a SindreX M())-\u003eRectangle-\u003eObjectM a SindreX M SpaceUse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawing-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "fg",
          "package": "sindre",
          "signature": "forall f.  CoreDrawer f",
          "source": "src/Sindre-X11.html#Drawer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "fg",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:fg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "focusBackground",
          "package": "sindre",
          "signature": "Color",
          "source": "src/Sindre-X11.html#VisualOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "focusBackground",
          "package": "sindre",
          "partial": "Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:focusBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "focusForeground",
          "package": "sindre",
          "signature": "Color",
          "source": "src/Sindre-X11.html#VisualOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "focusForeground",
          "package": "sindre",
          "partial": "Foreground",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:focusForeground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "font",
          "package": "sindre",
          "signature": "Font",
          "source": "src/Sindre-X11.html#VisualOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "font",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "foreground",
          "package": "sindre",
          "signature": "Color",
          "source": "src/Sindre-X11.html#VisualOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "foreground",
          "package": "sindre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:foreground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA blank widget, showing only background color, that can use as\n much or as little room as necessary.  Useful for constraining the\n layout of other widgets.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "mkBlank",
          "package": "sindre",
          "signature": "Constructor SindreX11M",
          "source": "src/Sindre-X11.html#mkBlank",
          "type": "function"
        },
        "index": {
          "description": "blank widget showing only background color that can use as much or as little room as necessary Useful for constraining the layout of other widgets",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "mkBlank",
          "package": "sindre",
          "partial": "Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple dial using an arc segment to indicate the value compared\n to the max value.  Accepts \u003ccode\u003emax\u003c/code\u003e and \u003ccode\u003evalue\u003c/code\u003e parameters (both\n integers, default values 12 and 0), and a single field: \u003ccode\u003evalue\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003en\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ep\u003c/a\u003e\u003c/code\u003e are used to increase and decrease the value.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "mkDial",
          "package": "sindre",
          "signature": "Constructor SindreX11M",
          "source": "src/Sindre-X11.html#mkDial",
          "type": "function"
        },
        "index": {
          "description": "simple dial using an arc segment to indicate the value compared to the max value Accepts max and value parameters both integers default values and and single field value and are used to increase and decrease the value",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "mkDial",
          "package": "sindre",
          "partial": "Dial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkDial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal dmenu-style list containing a list of elements, one of\n which is the \"selected\" element.  If the parameter \u003ccode\u003ei\u003c/code\u003e is given a\n true value, element matching will be case-insensitive.  The\n following methods are supported:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003einsert(string)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Split \u003ccode\u003estring\u003c/code\u003e into lines and add each line as\n an element.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eclear()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Delete all elements.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003efilter(string)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Only display those elements that contain \u003ccode\u003estring\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003enext()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Move selection right.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eprev()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Move selection left.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003efirst()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Move to leftmost element.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elast()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Move to rightmost element.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe field \u003ccode\u003eselected\u003c/code\u003e is the selected element.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "mkHList",
          "package": "sindre",
          "signature": "Constructor SindreX11M",
          "source": "src/Sindre-X11.html#mkHList",
          "type": "function"
        },
        "index": {
          "description": "Horizontal dmenu-style list containing list of elements one of which is the selected element If the parameter is given true value element matching will be case-insensitive The following methods are supported insert string Split string into lines and add each line as an element clear Delete all elements filter string Only display those elements that contain string next Move selection right prev Move selection left first Move to leftmost element last Move to rightmost element The field selected is the selected element",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "mkHList",
          "package": "sindre",
          "partial": "HList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkHList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn input stream object wrapping the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  Input is\n purely event-driven and line-oriented: the event \u003ccode\u003elines\u003c/code\u003e is sent\n (roughly) for each sequence of lines that can be read without\n blocking, with the payload being a single string value containing\n the lines read since the last time the event was sent.  When end of\n file is reached, the \u003ccode\u003eeof\u003c/code\u003e event (no payload) is sent.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "mkInStream",
          "package": "sindre",
          "signature": "Handle -\u003e ObjectRef -\u003e SindreX11M (NewObject SindreX11M)",
          "source": "src/Sindre-X11.html#mkInStream",
          "type": "function"
        },
        "index": {
          "description": "An input stream object wrapping the given Handle Input is purely event-driven and line-oriented the event lines is sent roughly for each sequence of lines that can be read without blocking with the payload being single string value containing the lines read since the last time the event was sent When end of file is reached the eof event no payload is sent",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "mkInStream",
          "normalized": "Handle-\u003eObjectRef-\u003eSindreX M(NewObject SindreX M)",
          "package": "sindre",
          "partial": "In Stream",
          "signature": "Handle-\u003eObjectRef-\u003eSindreX M(NewObject SindreX M)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkInStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel displaying the text contained in the field \u003ccode\u003elabel\u003c/code\u003e, which\n is also accepted as a widget parameter (defaults to the empty\n string).\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "mkLabel",
          "package": "sindre",
          "signature": "Constructor SindreX11M",
          "source": "src/Sindre-X11.html#mkLabel",
          "type": "function"
        },
        "index": {
          "description": "Label displaying the text contained in the field label which is also accepted as widget parameter defaults to the empty string",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "mkLabel",
          "package": "sindre",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-line text field, whose single field \u003ccode\u003evalue\u003c/code\u003e (also a\n parameter, defaults to the empty string) is the contents of the\n editing buffer.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "mkTextField",
          "package": "sindre",
          "signature": "Constructor SindreX11M",
          "source": "src/Sindre-X11.html#mkTextField",
          "type": "function"
        },
        "index": {
          "description": "Single-line text field whose single field value also parameter defaults to the empty string is the contents of the editing buffer",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "mkTextField",
          "package": "sindre",
          "partial": "Text Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkTextField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003emkHList\u003c/a\u003e\u003c/code\u003e, except the list is vertical.  The parameter \u003ccode\u003elines\u003c/code\u003e\n (default value 10) is the number of lines shown.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "mkVList",
          "package": "sindre",
          "signature": "Constructor SindreX11M",
          "source": "src/Sindre-X11.html#mkVList",
          "type": "function"
        },
        "index": {
          "description": "As mkHList except the list is vertical The parameter lines default value is the number of lines shown",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "mkVList",
          "package": "sindre",
          "partial": "VList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkVList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "setBgColor",
          "package": "sindre",
          "signature": "Drawer -\u003e Color -\u003e IO Drawer",
          "source": "src/Sindre-X11.html#setBgColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "setBgColor",
          "normalized": "Drawer-\u003eColor-\u003eIO Drawer",
          "package": "sindre",
          "partial": "Bg Color",
          "signature": "Drawer-\u003eColor-\u003eIO Drawer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:setBgColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "setFgColor",
          "package": "sindre",
          "signature": "Drawer -\u003e Color -\u003e IO Drawer",
          "source": "src/Sindre-X11.html#setFgColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "setFgColor",
          "normalized": "Drawer-\u003eColor-\u003eIO Drawer",
          "package": "sindre",
          "partial": "Fg Color",
          "signature": "Drawer-\u003eColor-\u003eIO Drawer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:setFgColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute Sindre in the X11 backend as an ordinary client visible\n to the window manager.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "sindreX11",
          "package": "sindre",
          "signature": "String-\u003e SindreX11M ExitCode-\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Execute Sindre in the X11 backend as an ordinary client visible to the window manager",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "sindreX11",
          "normalized": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode",
          "package": "sindre",
          "signature": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:sindreX11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute Sindre in the X11 backend as a dock/statusbar.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "sindreX11dock",
          "package": "sindre",
          "signature": "String-\u003e SindreX11M ExitCode-\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Execute Sindre in the X11 backend as dock statusbar",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "sindreX11dock",
          "normalized": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode",
          "package": "sindre",
          "signature": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:sindreX11dock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute Sindre in the X11 backend, grabbing control of the entire\n display and staying on top.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "sindreX11override",
          "package": "sindre",
          "signature": "String-\u003e SindreX11M ExitCode-\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Execute Sindre in the X11 backend grabbing control of the entire display and staying on top",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "sindreX11override",
          "normalized": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode",
          "package": "sindre",
          "signature": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:sindreX11override"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sindre.X11",
          "name": "textExtents",
          "package": "sindre",
          "signature": "Font -\u003e String -\u003e SindreX11M (Int, Int)",
          "source": "src/Sindre-X11.html#textExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "textExtents",
          "normalized": "Font-\u003eString-\u003eSindreX M(Int,Int)",
          "package": "sindre",
          "partial": "Extents",
          "signature": "Font-\u003eString-\u003eSindreX M(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:textExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead visual options from either widget parameters or the X\n resources database using \u003ccode\u003e\u003ca\u003exopt\u003c/a\u003e\u003c/code\u003e, or a combination.  The following\n graphical components are read:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eForeground color\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e From \u003ccode\u003efg\u003c/code\u003e parameter or \u003ccode\u003eforeground\u003c/code\u003e X\n  property.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eBackground color\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e From \u003ccode\u003ebg\u003c/code\u003e parameter or \u003ccode\u003ebackground\u003c/code\u003e X\n  property.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eFocus foreground color\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e From \u003ccode\u003effg\u003c/code\u003e parameter or\n  \u003ccode\u003efocusForeground\u003c/code\u003e X property.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eFocus background color\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e From \u003ccode\u003efbg\u003c/code\u003e parameter or\n  \u003ccode\u003efocusBackground\u003c/code\u003e X property.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Sindre.X11",
          "name": "visualOpts",
          "package": "sindre",
          "signature": "WidgetRef -\u003e ConstructorM SindreX11M VisualOpts",
          "source": "src/Sindre-X11.html#visualOpts",
          "type": "function"
        },
        "index": {
          "description": "Read visual options from either widget parameters or the resources database using xopt or combination The following graphical components are read Foreground color From fg parameter or foreground property Background color From bg parameter or background property Focus foreground color From ffg parameter or focusForeground property Focus background color From fbg parameter or focusBackground property",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "visualOpts",
          "normalized": "WidgetRef-\u003eConstructorM SindreX M VisualOpts",
          "package": "sindre",
          "partial": "Opts",
          "signature": "WidgetRef-\u003eConstructorM SindreX M VisualOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:visualOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a lookup in the X resources database for a given\n property.  The class used is \u003ccode\u003e\u003cem\u003eSindre\u003c/em\u003e.\u003cem\u003eclass\u003c/em\u003e.\u003cem\u003eproperty\u003c/em\u003e\u003c/code\u003e and the\n name is \u003ccode\u003e\u003cem\u003eprogname\u003c/em\u003e.\u003cem\u003ename\u003c/em\u003e.\u003cem\u003eproperty\u003c/em\u003e\u003c/code\u003e, where \u003cem\u003eprogname\u003c/em\u003e is the\n value of \u003ccode\u003e\u003ca\u003egetProgName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sindre.X11",
          "name": "xopt",
          "package": "sindre",
          "signature": "Maybe String-\u003e String-\u003e String-\u003e ConstructorM SindreX11M a",
          "type": "function"
        },
        "index": {
          "description": "Performs lookup in the resources database for given property The class used is Sindre class property and the name is progname name property where progname is the value of getProgName",
          "hierarchy": "Sindre X11",
          "module": "Sindre.X11",
          "name": "xopt",
          "normalized": "Maybe String-\u003eString-\u003eString-\u003eConstructorM SindreX M a",
          "package": "sindre",
          "signature": "Maybe String-\u003eString-\u003eString-\u003eConstructorM SindreX M a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:xopt"
      }
    }
  ]
]