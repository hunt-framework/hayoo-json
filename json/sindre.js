[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the Xft library based on the \u003ccode\u003eX11-xft\u003c/code\u003e binding by\n Clemens Fruhwirth.  This library builds upon the X11 binding to\n Xlib (\u003ca\u003eGraphics.X11\u003c/a\u003e) and cannot be used with any other.  A tiny\n part of Xrender is also exposed, as no Haskell interface exists as\n of this writing.\n\u003c/p\u003e\u003cp\u003eThe spirit of this binding is to hide away the fact that the\n underlying implementation is accessed via the FFI, and create a\n Haskell-like interface that does not expose many artifacts of the C\n implementation.  To that end, the only numeric types exposed are\n high-level (no \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003es), and facilities for integrating resource\n cleanup with the Haskell garbage collector have been defined (see\n \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eAnother priority has been robustness.  Many naively written FFI\n bindings to not properly check the return values of the C functions\n they call.  In particular, null pointers are often assumed to never\n exist, and oftentimes impossible to check by the user as the\n underlying pointer is not visible across the module boundary.  In\n this binding, any Xft function that can return null has been\n translated into a Haskell function that returns a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eTwo kinds of allocator functions are provided: some that use the\n nomenclature \u003ccode\u003enew\u003c/code\u003e and some that uses \u003ccode\u003eopen\u003c/code\u003e (for example\n \u003ccode\u003e\u003ca\u003enewColorName\u003c/a\u003e\u003c/code\u003e versus \u003ccode\u003e\u003ca\u003eopenColorName\u003c/a\u003e\u003c/code\u003e).  The former require that\n you explicitly call the corresponding deallocator (\u003ccode\u003e\u003ca\u003efreeColor\u003c/a\u003e\u003c/code\u003e in\n this case), while the latter takes an \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e as an additional\n argument, and automatically calls the deallocator when the value is\n garbage-collected.  It is an error to call a deallocator on an\n automatically managed value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Graphics-X11-Xft.html",
        "fct-type": "module",
        "title": "Xft"
      },
      "index": {
        "description": "Interface to the Xft library based on the X11-xft binding by Clemens Fruhwirth This library builds upon the X11 binding to Xlib Graphics.X11 and cannot be used with any other tiny part of Xrender is also exposed as no Haskell interface exists as of this writing The spirit of this binding is to hide away the fact that the underlying implementation is accessed via the FFI and create Haskell-like interface that does not expose many artifacts of the implementation To that end the only numeric types exposed are high-level no CInt and facilities for integrating resource cleanup with the Haskell garbage collector have been defined see XftMgr Another priority has been robustness Many naively written FFI bindings to not properly check the return values of the functions they call In particular null pointers are often assumed to never exist and oftentimes impossible to check by the user as the underlying pointer is not visible across the module boundary In this binding any Xft function that can return null has been translated into Haskell function that returns Maybe value Two kinds of allocator functions are provided some that use the nomenclature new and some that uses open for example newColorName versus openColorName The former require that you explicitly call the corresponding deallocator freeColor in this case while the latter takes an XftMgr as an additional argument and automatically calls the deallocator when the value is garbage-collected It is an error to call deallocator on an automatically managed value",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "Xft",
        "normalized": "",
        "package": "sindre",
        "partial": "Xft",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eAn Xft colour.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Graphics-X11-Xft.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "An Xft colour",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "Color",
        "normalized": "",
        "package": "sindre",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:Draw",
      "description": {
        "fct-descr": "\u003cp\u003eAn Xft drawable.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Graphics-X11-Xft.html#Draw",
        "fct-type": "data",
        "title": "Draw"
      },
      "index": {
        "description": "An Xft drawable",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "Draw",
        "normalized": "",
        "package": "sindre",
        "partial": "Draw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:Font",
      "description": {
        "fct-descr": "\u003cp\u003eAn Xft font.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Graphics-X11-Xft.html#Font",
        "fct-type": "data",
        "title": "Font"
      },
      "index": {
        "description": "An Xft font",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "Font",
        "normalized": "",
        "package": "sindre",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:GlyphInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of some glyph(s).  Note that there's a difference\n between the logical size, which may include some blank pixels, and\n the actual bitmap.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Graphics-X11-Xft.html#GlyphInfo",
        "fct-type": "data",
        "title": "GlyphInfo"
      },
      "index": {
        "description": "The size of some glyph Note that there difference between the logical size which may include some blank pixels and the actual bitmap",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "GlyphInfo",
        "normalized": "",
        "package": "sindre",
        "partial": "Glyph Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:RenderColor",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eXRenderColor\u003c/code\u003e from the XRender library.  Note that the\n colour channels are only interpreted as 16-bit numbers when\n actually used.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Graphics-X11-Xft.html#RenderColor",
        "fct-type": "data",
        "title": "RenderColor"
      },
      "index": {
        "description": "The XRenderColor from the XRender library Note that the colour channels are only interpreted as bit numbers when actually used",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "RenderColor",
        "normalized": "",
        "package": "sindre",
        "partial": "Render Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#t:XftMgr",
      "description": {
        "fct-descr": "\u003cp\u003eA central staging point for Xft object creation.  All Xft object\n creation functions take as argument an \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e value that keeps\n track of lifetime information.  You are required to manually free\n the \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003efreeXftMgr\u003c/a\u003e\u003c/code\u003e when you are done with it.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Graphics-X11-Xft.html#XftMgr",
        "fct-type": "data",
        "title": "XftMgr"
      },
      "index": {
        "description": "central staging point for Xft object creation All Xft object creation functions take as argument an XftMgr value that keeps track of lifetime information You are required to manually free the XftMgr via freeXftMgr when you are done with it",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "XftMgr",
        "normalized": "",
        "package": "sindre",
        "partial": "Xft Mgr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:GlyphInfo",
      "description": {
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "GlyphInfo",
        "fct-source": "src/Graphics-X11-Xft.html#GlyphInfo",
        "fct-type": "function",
        "title": "GlyphInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "GlyphInfo",
        "normalized": "",
        "package": "sindre",
        "partial": "Glyph Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:RenderColor",
      "description": {
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "RenderColor",
        "fct-source": "src/Graphics-X11-Xft.html#RenderColor",
        "fct-type": "function",
        "title": "RenderColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "RenderColor",
        "normalized": "",
        "package": "sindre",
        "partial": "Render Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:alpha",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#RenderColor",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "alpha",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:ascent",
      "description": {
        "fct-descr": "\u003cp\u003eThe ascent (vertical distance upwards from the baseline) of a\n character in the font.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Font -\u003e a",
        "fct-source": "src/Graphics-X11-Xft.html#ascent",
        "fct-type": "function",
        "title": "ascent"
      },
      "index": {
        "description": "The ascent vertical distance upwards from the baseline of character in the font",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "ascent",
        "normalized": "Font-\u003ea",
        "package": "sindre",
        "partial": "",
        "signature": "Font-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:blue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#RenderColor",
        "fct-type": "function",
        "title": "blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "blue",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:changeDraw",
      "description": {
        "fct-descr": "\u003cp\u003eChange the X11 drawable underlying the Xft drawable.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Draw -\u003e Drawable -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#changeDraw",
        "fct-type": "function",
        "title": "changeDraw"
      },
      "index": {
        "description": "Change the X11 drawable underlying the Xft drawable",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "changeDraw",
        "normalized": "Draw-\u003eDrawable-\u003eIO()",
        "package": "sindre",
        "partial": "Draw",
        "signature": "Draw-\u003eDrawable-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:colormap",
      "description": {
        "fct-descr": "\u003cp\u003eThe colormap for the Xft drawable.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Draw -\u003e Colormap",
        "fct-source": "src/Graphics-X11-Xft.html#colormap",
        "fct-type": "function",
        "title": "colormap"
      },
      "index": {
        "description": "The colormap for the Xft drawable",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "colormap",
        "normalized": "Draw-\u003eColormap",
        "package": "sindre",
        "partial": "",
        "signature": "Draw-\u003eColormap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:descent",
      "description": {
        "fct-descr": "\u003cp\u003eThe descent (vertical distance downwards from the baseline) of a\n character in the font.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Font -\u003e a",
        "fct-source": "src/Graphics-X11-Xft.html#descent",
        "fct-type": "function",
        "title": "descent"
      },
      "index": {
        "description": "The descent vertical distance downwards from the baseline of character in the font",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "descent",
        "normalized": "Font-\u003ea",
        "package": "sindre",
        "partial": "",
        "signature": "Font-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003eThe display for the Xft drawable.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Draw -\u003e Display",
        "fct-source": "src/Graphics-X11-Xft.html#display",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "The display for the Xft drawable",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "display",
        "normalized": "Draw-\u003eDisplay",
        "package": "sindre",
        "partial": "",
        "signature": "Draw-\u003eDisplay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:drawGlyphs",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a sequence of glyphs on the given drawable in the specified\n colour and font.  Drawing begins at the baseline of the string.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Draw -\u003e Color -\u003e Font -\u003e x -\u003e y -\u003e [c] -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#drawGlyphs",
        "fct-type": "function",
        "title": "drawGlyphs"
      },
      "index": {
        "description": "Draw sequence of glyphs on the given drawable in the specified colour and font Drawing begins at the baseline of the string",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "drawGlyphs",
        "normalized": "Draw-\u003eColor-\u003eFont-\u003ea-\u003eb-\u003e[c]-\u003eIO()",
        "package": "sindre",
        "partial": "Glyphs",
        "signature": "Draw-\u003eColor-\u003eFont-\u003ex-\u003ey-\u003e[c]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:drawRect",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edrawRect d c x y w h\u003c/code\u003e draws a solid rectangle on \u003ccode\u003ed\u003c/code\u003e with colour\n \u003ccode\u003ec\u003c/code\u003e, with its upper left corner at \u003ccode\u003e(x,y)\u003c/code\u003e, width \u003ccode\u003ew\u003c/code\u003e and height\n \u003ccode\u003eh\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Draw -\u003e Color -\u003e x -\u003e y -\u003e w -\u003e h -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#drawRect",
        "fct-type": "function",
        "title": "drawRect"
      },
      "index": {
        "description": "drawRect draws solid rectangle on with colour with its upper left corner at width and height",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "drawRect",
        "normalized": "Draw-\u003eColor-\u003ea-\u003eb-\u003ec-\u003ed-\u003eIO()",
        "package": "sindre",
        "partial": "Rect",
        "signature": "Draw-\u003eColor-\u003ex-\u003ey-\u003ew-\u003eh-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:drawString",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a string on the given drawable in the specified colour and\n font.  Drawing begins at the baseline of the string.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Draw -\u003e Color -\u003e Font -\u003e x -\u003e y -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#drawString",
        "fct-type": "function",
        "title": "drawString"
      },
      "index": {
        "description": "Draw string on the given drawable in the specified colour and font Drawing begins at the baseline of the string",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "drawString",
        "normalized": "Draw-\u003eColor-\u003eFont-\u003ea-\u003eb-\u003eString-\u003eIO()",
        "package": "sindre",
        "partial": "String",
        "signature": "Draw-\u003eColor-\u003eFont-\u003ex-\u003ey-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:drawable",
      "description": {
        "fct-descr": "\u003cp\u003eThe X11 drawable underlying the Xft drawable.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Draw -\u003e Drawable",
        "fct-source": "src/Graphics-X11-Xft.html#drawable",
        "fct-type": "function",
        "title": "drawable"
      },
      "index": {
        "description": "The X11 drawable underlying the Xft drawable",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "drawable",
        "normalized": "Draw-\u003eDrawable",
        "package": "sindre",
        "partial": "",
        "signature": "Draw-\u003eDrawable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:freeColor",
      "description": {
        "fct-descr": "\u003cp\u003eFree a colour that has been allocated with \u003ccode\u003e\u003ca\u003enewColorName\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enewColorValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Visual -\u003e Colormap -\u003e Color -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#freeColor",
        "fct-type": "function",
        "title": "freeColor"
      },
      "index": {
        "description": "Free colour that has been allocated with newColorName or newColorValue",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "freeColor",
        "normalized": "Display-\u003eVisual-\u003eColormap-\u003eColor-\u003eIO()",
        "package": "sindre",
        "partial": "Color",
        "signature": "Display-\u003eVisual-\u003eColormap-\u003eColor-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:freeDraw",
      "description": {
        "fct-descr": "\u003cp\u003eFree a \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e created with \u003ccode\u003e\u003ca\u003enewDraw\u003c/a\u003e\u003c/code\u003e.  Do not free \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003es\n created with \u003ccode\u003e\u003ca\u003eopenDraw\u003c/a\u003e\u003c/code\u003e, these are automatically managed.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Draw -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#freeDraw",
        "fct-type": "function",
        "title": "freeDraw"
      },
      "index": {
        "description": "Free Draw created with newDraw Do not free Draw created with openDraw these are automatically managed",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "freeDraw",
        "normalized": "Draw-\u003eIO()",
        "package": "sindre",
        "partial": "Draw",
        "signature": "Draw-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:freeFont",
      "description": {
        "fct-descr": "\u003cp\u003eClose the given Xft font.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Font -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#freeFont",
        "fct-type": "function",
        "title": "freeFont"
      },
      "index": {
        "description": "Close the given Xft font",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "freeFont",
        "normalized": "Display-\u003eFont-\u003eIO()",
        "package": "sindre",
        "partial": "Font",
        "signature": "Display-\u003eFont-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:freeXftMgr",
      "description": {
        "fct-descr": "\u003cp\u003eFree the manager and reclaim any objects associated with it.\n After an \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e has been freed, it is invalid to use any objects\n created through it.  The lock must currently be held by the thread\n calling \u003ccode\u003e\u003ca\u003efreeXftMgr\u003c/a\u003e\u003c/code\u003e, and it will be repeatedly released and\n reacquired throughout deallocating any remaining objects in the\n manager.  When the command returns, the lock will once again be\n held.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "XftMgr -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#freeXftMgr",
        "fct-type": "function",
        "title": "freeXftMgr"
      },
      "index": {
        "description": "Free the manager and reclaim any objects associated with it After an XftMgr has been freed it is invalid to use any objects created through it The lock must currently be held by the thread calling freeXftMgr and it will be repeatedly released and reacquired throughout deallocating any remaining objects in the manager When the command returns the lock will once again be held",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "freeXftMgr",
        "normalized": "XftMgr-\u003eIO()",
        "package": "sindre",
        "partial": "Xft Mgr",
        "signature": "XftMgr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphHeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#GlyphInfo",
        "fct-type": "function",
        "title": "glyphHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "glyphHeight",
        "normalized": "",
        "package": "sindre",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphImageHeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#GlyphInfo",
        "fct-type": "function",
        "title": "glyphImageHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "glyphImageHeight",
        "normalized": "",
        "package": "sindre",
        "partial": "Image Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphImageWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#GlyphInfo",
        "fct-type": "function",
        "title": "glyphImageWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "glyphImageWidth",
        "normalized": "",
        "package": "sindre",
        "partial": "Image Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphImageX",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#GlyphInfo",
        "fct-type": "function",
        "title": "glyphImageX"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "glyphImageX",
        "normalized": "",
        "package": "sindre",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphImageY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#GlyphInfo",
        "fct-type": "function",
        "title": "glyphImageY"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "glyphImageY",
        "normalized": "",
        "package": "sindre",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:glyphWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#GlyphInfo",
        "fct-type": "function",
        "title": "glyphWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "glyphWidth",
        "normalized": "",
        "package": "sindre",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:green",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#RenderColor",
        "fct-type": "function",
        "title": "green"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "green",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:height",
      "description": {
        "fct-descr": "\u003cp\u003eThe ascent plus descent of a character in the font.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Font -\u003e a",
        "fct-source": "src/Graphics-X11-Xft.html#height",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "The ascent plus descent of character in the font",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "height",
        "normalized": "Font-\u003ea",
        "package": "sindre",
        "partial": "",
        "signature": "Font-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:lockFace",
      "description": {
        "fct-descr": "\u003cp\u003eLock the file underlying the Xft font.  I am not certain when you\n would need this.  The return value is supposed to be an \u003ccode\u003eFT_TYPE\u003c/code\u003e\n from Freetype, but that binding has not been written yet.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Font -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#lockFace",
        "fct-type": "function",
        "title": "lockFace"
      },
      "index": {
        "description": "Lock the file underlying the Xft font am not certain when you would need this The return value is supposed to be an FT TYPE from Freetype but that binding has not been written yet",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "lockFace",
        "normalized": "Font-\u003eIO()",
        "package": "sindre",
        "partial": "Face",
        "signature": "Font-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:maxAdvanceWidth",
      "description": {
        "fct-descr": "\u003cp\u003eThe greatest horizontal width of a character in the font.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Font -\u003e a",
        "fct-source": "src/Graphics-X11-Xft.html#maxAdvanceWidth",
        "fct-type": "function",
        "title": "maxAdvanceWidth"
      },
      "index": {
        "description": "The greatest horizontal width of character in the font",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "maxAdvanceWidth",
        "normalized": "Font-\u003ea",
        "package": "sindre",
        "partial": "Advance Width",
        "signature": "Font-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newColorName",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new Xft colour based on a name.  The name may be either\n a human-readable colour such as \u003ca\u003ered\u003c/a\u003e, \u003ca\u003ewhite\u003c/a\u003e or \u003ca\u003edarkslategray\u003c/a\u003e\n (all core X colour names are supported) or a hexidecimal name such\n as \u003ca/\u003e.  Names are not case-sensitive.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n the given name is not recognised as a colour.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Visual -\u003e Colormap -\u003e String -\u003e IO (Maybe Color)",
        "fct-source": "src/Graphics-X11-Xft.html#newColorName",
        "fct-type": "function",
        "title": "newColorName"
      },
      "index": {
        "description": "Create new Xft colour based on name The name may be either human-readable colour such as red white or darkslategray all core colour names are supported or hexidecimal name such as Names are not case-sensitive Returns Nothing if the given name is not recognised as colour",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "newColorName",
        "normalized": "Display-\u003eVisual-\u003eColormap-\u003eString-\u003eIO(Maybe Color)",
        "package": "sindre",
        "partial": "Color Name",
        "signature": "Display-\u003eVisual-\u003eColormap-\u003eString-\u003eIO(Maybe Color)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newColorValue",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewColorName\u003c/a\u003e\u003c/code\u003e, but instead of a name, an XRender color value\n is used.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Visual -\u003e Colormap -\u003e RenderColor -\u003e IO (Maybe Color)",
        "fct-source": "src/Graphics-X11-Xft.html#newColorValue",
        "fct-type": "function",
        "title": "newColorValue"
      },
      "index": {
        "description": "As newColorName but instead of name an XRender color value is used",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "newColorValue",
        "normalized": "Display-\u003eVisual-\u003eColormap-\u003eRenderColor-\u003eIO(Maybe Color)",
        "package": "sindre",
        "partial": "Color Value",
        "signature": "Display-\u003eVisual-\u003eColormap-\u003eRenderColor-\u003eIO(Maybe Color)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newDraw",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new Xft drawable on the given display, using the\n provided \u003ccode\u003e\u003ca\u003eDrawable\u003c/a\u003e\u003c/code\u003e to draw on.  Will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n call to \u003ccode\u003eXftDrawCreate\u003c/code\u003e fails, which it will usually only do if\n memory cannot be allocated.  The \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e has to be manually freed\n with \u003ccode\u003e\u003ca\u003efreeDraw\u003c/a\u003e\u003c/code\u003e once you are done with it.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Drawable -\u003e Visual -\u003e Colormap -\u003e IO (Maybe Draw)",
        "fct-source": "src/Graphics-X11-Xft.html#newDraw",
        "fct-type": "function",
        "title": "newDraw"
      },
      "index": {
        "description": "Create new Xft drawable on the given display using the provided Drawable to draw on Will return Nothing if the call to XftDrawCreate fails which it will usually only do if memory cannot be allocated The Draw has to be manually freed with freeDraw once you are done with it",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "newDraw",
        "normalized": "Display-\u003eDrawable-\u003eVisual-\u003eColormap-\u003eIO(Maybe Draw)",
        "package": "sindre",
        "partial": "Draw",
        "signature": "Display-\u003eDrawable-\u003eVisual-\u003eColormap-\u003eIO(Maybe Draw)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newDrawAlpha",
      "description": {
        "fct-descr": "\u003cp\u003eBehaves as \u003ccode\u003e\u003ca\u003enewDraw\u003c/a\u003e\u003c/code\u003e, except that it uses a \u003ccode\u003e\u003ca\u003ePixmap\u003c/a\u003e\u003c/code\u003e of the given depth\n instead of a \u003ccode\u003e\u003ca\u003eDrawable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Pixmap -\u003e a -\u003e IO (Maybe Draw)",
        "fct-source": "src/Graphics-X11-Xft.html#newDrawAlpha",
        "fct-type": "function",
        "title": "newDrawAlpha"
      },
      "index": {
        "description": "Behaves as newDraw except that it uses Pixmap of the given depth instead of Drawable",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "newDrawAlpha",
        "normalized": "Display-\u003ePixmap-\u003ea-\u003eIO(Maybe Draw)",
        "package": "sindre",
        "partial": "Draw Alpha",
        "signature": "Display-\u003ePixmap-\u003ea-\u003eIO(Maybe Draw)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newDrawBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eBehaves as \u003ccode\u003e\u003ca\u003enewDraw\u003c/a\u003e\u003c/code\u003e, except that it uses a \u003ccode\u003e\u003ca\u003ePixmap\u003c/a\u003e\u003c/code\u003e of color\n depth 1 instead of a \u003ccode\u003e\u003ca\u003eDrawable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Pixmap -\u003e IO (Maybe Draw)",
        "fct-source": "src/Graphics-X11-Xft.html#newDrawBitmap",
        "fct-type": "function",
        "title": "newDrawBitmap"
      },
      "index": {
        "description": "Behaves as newDraw except that it uses Pixmap of color depth instead of Drawable",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "newDrawBitmap",
        "normalized": "Display-\u003ePixmap-\u003eIO(Maybe Draw)",
        "package": "sindre",
        "partial": "Draw Bitmap",
        "signature": "Display-\u003ePixmap-\u003eIO(Maybe Draw)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newFontName",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewFontName dpy scr s\u003c/code\u003e, where \u003ccode\u003es\u003c/code\u003e is a Fontconfig pattern\n string, finds the best match for \u003ccode\u003es\u003c/code\u003e and returns a font that can be\n used to draw on the given screen.  This function very rarely\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, and seems to return some default font even if\n you feed it utter garbage (or an empty string).\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Screen -\u003e String -\u003e IO (Maybe Font)",
        "fct-source": "src/Graphics-X11-Xft.html#newFontName",
        "fct-type": "function",
        "title": "newFontName"
      },
      "index": {
        "description": "newFontName dpy scr where is Fontconfig pattern string finds the best match for and returns font that can be used to draw on the given screen This function very rarely returns Nothing and seems to return some default font even if you feed it utter garbage or an empty string",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "newFontName",
        "normalized": "Display-\u003eScreen-\u003eString-\u003eIO(Maybe Font)",
        "package": "sindre",
        "partial": "Font Name",
        "signature": "Display-\u003eScreen-\u003eString-\u003eIO(Maybe Font)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newFontXlfd",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewFontName\u003c/a\u003e\u003c/code\u003e, except that the name should be an X Logical\n Font Description (the usual fourteen elements produced by\n \u003ccode\u003exfontsel\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Screen -\u003e String -\u003e IO (Maybe Font)",
        "fct-source": "src/Graphics-X11-Xft.html#newFontXlfd",
        "fct-type": "function",
        "title": "newFontXlfd"
      },
      "index": {
        "description": "As newFontName except that the name should be an Logical Font Description the usual fourteen elements produced by xfontsel",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "newFontXlfd",
        "normalized": "Display-\u003eScreen-\u003eString-\u003eIO(Maybe Font)",
        "package": "sindre",
        "partial": "Font Xlfd",
        "signature": "Display-\u003eScreen-\u003eString-\u003eIO(Maybe Font)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:newXftMgr",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e whose objects will be used on the given screen\n and display.  As Xlib is not re-entrant, a synchronisation\n mechanism must be used, so the \u003ccode\u003e\u003ca\u003eXftMgr\u003c/a\u003e\u003c/code\u003e includes actions for\n obtaining and releasing atomic access to the display via two \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n actions.  These will be executed before and after objects allocated\n via the manager are released.  It is recommended to use an\n \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e to implement a mutex for synchronising\n the access, but if you are absolutely certain that there will not\n be any concurrent attempts to access the display, the actions can\n merely be \u003ccode\u003ereturn ()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display-\u003e Screen-\u003e IO ()-\u003e IO ()-\u003e IO XftMgr",
        "fct-type": "function",
        "title": "newXftMgr"
      },
      "index": {
        "description": "Create an XftMgr whose objects will be used on the given screen and display As Xlib is not re-entrant synchronisation mechanism must be used so the XftMgr includes actions for obtaining and releasing atomic access to the display via two IO actions These will be executed before and after objects allocated via the manager are released It is recommended to use an MVar to implement mutex for synchronising the access but if you are absolutely certain that there will not be any concurrent attempts to access the display the actions can merely be return",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "newXftMgr",
        "normalized": "Display-\u003eScreen-\u003eIO()-\u003eIO()-\u003eIO XftMgr",
        "package": "sindre",
        "partial": "Xft Mgr",
        "signature": "Display-\u003eScreen-\u003eIO()-\u003eIO()-\u003eIO XftMgr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openColorName",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewColorName\u003c/a\u003e\u003c/code\u003e, but automatically freed through the given Xft\n manager when no longer accessible.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "XftMgr -\u003e Visual -\u003e Colormap -\u003e String -\u003e IO (Maybe Color)",
        "fct-source": "src/Graphics-X11-Xft.html#openColorName",
        "fct-type": "function",
        "title": "openColorName"
      },
      "index": {
        "description": "As newColorName but automatically freed through the given Xft manager when no longer accessible",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "openColorName",
        "normalized": "XftMgr-\u003eVisual-\u003eColormap-\u003eString-\u003eIO(Maybe Color)",
        "package": "sindre",
        "partial": "Color Name",
        "signature": "XftMgr-\u003eVisual-\u003eColormap-\u003eString-\u003eIO(Maybe Color)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openColorValue",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewColorValue\u003c/a\u003e\u003c/code\u003e, but automatically freed through the given Xft\n manager when no longer accessible.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "XftMgr -\u003e Visual -\u003e Colormap -\u003e RenderColor -\u003e IO (Maybe Color)",
        "fct-source": "src/Graphics-X11-Xft.html#openColorValue",
        "fct-type": "function",
        "title": "openColorValue"
      },
      "index": {
        "description": "As newColorValue but automatically freed through the given Xft manager when no longer accessible",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "openColorValue",
        "normalized": "XftMgr-\u003eVisual-\u003eColormap-\u003eRenderColor-\u003eIO(Maybe Color)",
        "package": "sindre",
        "partial": "Color Value",
        "signature": "XftMgr-\u003eVisual-\u003eColormap-\u003eRenderColor-\u003eIO(Maybe Color)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openDraw",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewDraw\u003c/a\u003e\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "XftMgr -\u003e Drawable -\u003e Visual -\u003e Colormap -\u003e IO (Maybe Draw)",
        "fct-source": "src/Graphics-X11-Xft.html#openDraw",
        "fct-type": "function",
        "title": "openDraw"
      },
      "index": {
        "description": "As newDraw but automatically freed when no longer used",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "openDraw",
        "normalized": "XftMgr-\u003eDrawable-\u003eVisual-\u003eColormap-\u003eIO(Maybe Draw)",
        "package": "sindre",
        "partial": "Draw",
        "signature": "XftMgr-\u003eDrawable-\u003eVisual-\u003eColormap-\u003eIO(Maybe Draw)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openDrawAlpha",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewDrawBitmap\u003c/a\u003e\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "XftMgr -\u003e Drawable -\u003e a -\u003e IO (Maybe Draw)",
        "fct-source": "src/Graphics-X11-Xft.html#openDrawAlpha",
        "fct-type": "function",
        "title": "openDrawAlpha"
      },
      "index": {
        "description": "As newDrawBitmap but automatically freed when no longer used",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "openDrawAlpha",
        "normalized": "XftMgr-\u003eDrawable-\u003ea-\u003eIO(Maybe Draw)",
        "package": "sindre",
        "partial": "Draw Alpha",
        "signature": "XftMgr-\u003eDrawable-\u003ea-\u003eIO(Maybe Draw)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openDrawBitmap",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewDrawBitmap\u003c/a\u003e\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "XftMgr -\u003e Drawable -\u003e IO (Maybe Draw)",
        "fct-source": "src/Graphics-X11-Xft.html#openDrawBitmap",
        "fct-type": "function",
        "title": "openDrawBitmap"
      },
      "index": {
        "description": "As newDrawBitmap but automatically freed when no longer used",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "openDrawBitmap",
        "normalized": "XftMgr-\u003eDrawable-\u003eIO(Maybe Draw)",
        "package": "sindre",
        "partial": "Draw Bitmap",
        "signature": "XftMgr-\u003eDrawable-\u003eIO(Maybe Draw)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openFontName",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003enewFontName\u003c/a\u003e\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "XftMgr -\u003e String -\u003e IO (Maybe Font)",
        "fct-source": "src/Graphics-X11-Xft.html#openFontName",
        "fct-type": "function",
        "title": "openFontName"
      },
      "index": {
        "description": "As newFontName but automatically freed when no longer used",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "openFontName",
        "normalized": "XftMgr-\u003eString-\u003eIO(Maybe Font)",
        "package": "sindre",
        "partial": "Font Name",
        "signature": "XftMgr-\u003eString-\u003eIO(Maybe Font)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:openFontXlfd",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003enewFontXfld\u003c/code\u003e, but automatically freed when no longer used.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "XftMgr -\u003e String -\u003e IO (Maybe Font)",
        "fct-source": "src/Graphics-X11-Xft.html#openFontXlfd",
        "fct-type": "function",
        "title": "openFontXlfd"
      },
      "index": {
        "description": "As newFontXfld but automatically freed when no longer used",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "openFontXlfd",
        "normalized": "XftMgr-\u003eString-\u003eIO(Maybe Font)",
        "package": "sindre",
        "partial": "Font Xlfd",
        "signature": "XftMgr-\u003eString-\u003eIO(Maybe Font)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:pixel",
      "description": {
        "fct-descr": "\u003cp\u003eThe core X11 colour contained in an Xft colour.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Color -\u003e Pixel",
        "fct-source": "src/Graphics-X11-Xft.html#pixel",
        "fct-type": "function",
        "title": "pixel"
      },
      "index": {
        "description": "The core X11 colour contained in an Xft colour",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "pixel",
        "normalized": "Color-\u003ePixel",
        "package": "sindre",
        "partial": "",
        "signature": "Color-\u003ePixel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:red",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-X11-Xft.html#RenderColor",
        "fct-type": "function",
        "title": "red"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "red",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:textExtents",
      "description": {
        "fct-descr": "\u003cp\u003eNote that the 'glyphWidth'/'glyphHeight' fields are the number of\n pixels you should advance after drawing a string of this size.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Font -\u003e String -\u003e IO GlyphInfo",
        "fct-source": "src/Graphics-X11-Xft.html#textExtents",
        "fct-type": "function",
        "title": "textExtents"
      },
      "index": {
        "description": "Note that the glyphWidth glyphHeight fields are the number of pixels you should advance after drawing string of this size",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "textExtents",
        "normalized": "Display-\u003eFont-\u003eString-\u003eIO GlyphInfo",
        "package": "sindre",
        "partial": "Extents",
        "signature": "Display-\u003eFont-\u003eString-\u003eIO GlyphInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:textHeight",
      "description": {
        "fct-descr": "\u003cp\u003eShortcut for calling \u003ccode\u003e\u003ca\u003etextExtents\u003c/a\u003e\u003c/code\u003e and picking out the\n \u003ccode\u003e\u003ca\u003eglyphHeight\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eGlyphInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Font -\u003e String -\u003e IO a",
        "fct-source": "src/Graphics-X11-Xft.html#textHeight",
        "fct-type": "function",
        "title": "textHeight"
      },
      "index": {
        "description": "Shortcut for calling textExtents and picking out the glyphHeight field of the GlyphInfo",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "textHeight",
        "normalized": "Display-\u003eFont-\u003eString-\u003eIO a",
        "package": "sindre",
        "partial": "Height",
        "signature": "Display-\u003eFont-\u003eString-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:textWidth",
      "description": {
        "fct-descr": "\u003cp\u003eShortcut for calling \u003ccode\u003e\u003ca\u003etextExtents\u003c/a\u003e\u003c/code\u003e and picking out the\n \u003ccode\u003e\u003ca\u003eglyphWidth\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eGlyphInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Display -\u003e Font -\u003e String -\u003e IO a",
        "fct-source": "src/Graphics-X11-Xft.html#textWidth",
        "fct-type": "function",
        "title": "textWidth"
      },
      "index": {
        "description": "Shortcut for calling textExtents and picking out the glyphWidth field of the GlyphInfo",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "textWidth",
        "normalized": "Display-\u003eFont-\u003eString-\u003eIO a",
        "package": "sindre",
        "partial": "Width",
        "signature": "Display-\u003eFont-\u003eString-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:unlockFace",
      "description": {
        "fct-descr": "\u003cp\u003eUnlock a face locked by \u003ccode\u003elockFontFace\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Font -\u003e IO ()",
        "fct-source": "src/Graphics-X11-Xft.html#unlockFace",
        "fct-type": "function",
        "title": "unlockFace"
      },
      "index": {
        "description": "Unlock face locked by lockFontFace",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "unlockFace",
        "normalized": "Font-\u003eIO()",
        "package": "sindre",
        "partial": "Face",
        "signature": "Font-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Graphics-X11-Xft.html#v:visual",
      "description": {
        "fct-descr": "\u003cp\u003eThe visual for the Xft drawable.\n\u003c/p\u003e",
        "fct-module": "Graphics.X11.Xft",
        "fct-package": "sindre",
        "fct-signature": "Draw -\u003e Visual",
        "fct-source": "src/Graphics-X11-Xft.html#visual",
        "fct-type": "function",
        "title": "visual"
      },
      "index": {
        "description": "The visual for the Xft drawable",
        "hierarchy": "Graphics X11 Xft",
        "module": "Graphics.X11.Xft",
        "name": "visual",
        "normalized": "Draw-\u003eVisual",
        "package": "sindre",
        "partial": "",
        "signature": "Draw-\u003eVisual"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransforming a Sindre program into a callable function.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-Compiler.html",
        "fct-type": "module",
        "title": "Compiler"
      },
      "index": {
        "description": "Transforming Sindre program into callable function",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "Compiler",
        "normalized": "",
        "package": "sindre",
        "partial": "Compiler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:ClassMap",
      "description": {
        "fct-descr": "\u003cp\u003eMapping from class names to constructors.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Compiler.html#ClassMap",
        "fct-type": "type",
        "title": "ClassMap"
      },
      "index": {
        "description": "Mapping from class names to constructors",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "ClassMap",
        "normalized": "",
        "package": "sindre",
        "partial": "Class Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:Compiler",
      "description": {
        "fct-descr": "\u003cp\u003eMonad inside which compilation takes place.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Compiler.html#Compiler",
        "fct-type": "type",
        "title": "Compiler"
      },
      "index": {
        "description": "Monad inside which compilation takes place",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "Compiler",
        "normalized": "",
        "package": "sindre",
        "partial": "Compiler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:Constructor",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that, given an initial value, the name of itself if any,\n and a list of children, yields a computation that constructs a new\n widget.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Compiler.html#Constructor",
        "fct-type": "type",
        "title": "Constructor"
      },
      "index": {
        "description": "Function that given an initial value the name of itself if any and list of children yields computation that constructs new widget",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "Constructor",
        "normalized": "",
        "package": "sindre",
        "partial": "Constructor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:ConstructorM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monad in which widget construction takes place.  You can only\n execute this by defining a \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e that is then used in a\n Sindre program (see also \u003ccode\u003e\u003ca\u003eClassMap\u003c/a\u003e\u003c/code\u003e).  An example usage could be:\n\u003c/p\u003e\u003cpre\u003e\n myWidget :: \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e MyBackEnd\n myWidget w k cs : do\n   -- ConstructorM is an instance of \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e, so we can provide\n   -- defaults or fallbacks for missing parameters.\n   arg \u003ca\u003e- 'param' \\\"myParam\\\" \u003c|\u003c/a\u003e return 12\n   \u003cem\u003erest of construction\u003c/em\u003e\n\u003c/pre\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Compiler.html#ConstructorM",
        "fct-type": "data",
        "title": "ConstructorM"
      },
      "index": {
        "description": "The monad in which widget construction takes place You can only execute this by defining Constructor that is then used in Sindre program see also ClassMap An example usage could be myWidget Constructor MyBackEnd myWidget cs do ConstructorM is an instance of Alternative so we can provide defaults or fallbacks for missing parameters arg param myParam return rest of construction",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "ConstructorM",
        "normalized": "",
        "package": "sindre",
        "partial": "Constructor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:FuncMap",
      "description": {
        "fct-descr": "\u003cp\u003eMapping from function names to built-in functions.  These must\n first be executed in the \u003ccode\u003e\u003ca\u003eCompiler\u003c/a\u003e\u003c/code\u003e monad as they may have specific\n requirements of the environment.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Compiler.html#FuncMap",
        "fct-type": "type",
        "title": "FuncMap"
      },
      "index": {
        "description": "Mapping from function names to built-in functions These must first be executed in the Compiler monad as they may have specific requirements of the environment",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "FuncMap",
        "normalized": "",
        "package": "sindre",
        "partial": "Func Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:GlobMap",
      "description": {
        "fct-descr": "\u003cp\u003eMapping from names of global variables to computations that yield\n their initial values.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Compiler.html#GlobMap",
        "fct-type": "type",
        "title": "GlobMap"
      },
      "index": {
        "description": "Mapping from names of global variables to computations that yield their initial values",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "GlobMap",
        "normalized": "",
        "package": "sindre",
        "partial": "Glob Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:ObjectMap",
      "description": {
        "fct-descr": "\u003cp\u003eMapping from object names to object constructor functions.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Compiler.html#ObjectMap",
        "fct-type": "type",
        "title": "ObjectMap"
      },
      "index": {
        "description": "Mapping from object names to object constructor functions",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "ObjectMap",
        "normalized": "",
        "package": "sindre",
        "partial": "Object Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#t:Param",
      "description": {
        "fct-descr": "\u003cp\u003eClass of types that a given backend can convert to from \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es.\n In effect, a monadic version of \u003ccode\u003e\u003ca\u003eMold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "class",
        "fct-source": "src/Sindre-Compiler.html#Param",
        "fct-type": "class",
        "title": "Param"
      },
      "index": {
        "description": "Class of types that given backend can convert to from Value In effect monadic version of Mold",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "Param",
        "normalized": "",
        "package": "sindre",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:badValue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebadValue k v\u003c/code\u003e signals that parameter \u003ccode\u003ek\u003c/code\u003e is present with value\n \u003ccode\u003ev\u003c/code\u003e, but that \u003ccode\u003ev\u003c/code\u003e is an invalid value.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e Value -\u003e ConstructorM m a",
        "fct-source": "src/Sindre-Compiler.html#badValue",
        "fct-type": "function",
        "title": "badValue"
      },
      "index": {
        "description": "badValue signals that parameter is present with value but that is an invalid value",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "badValue",
        "normalized": "String-\u003eValue-\u003eConstructorM a b",
        "package": "sindre",
        "partial": "Value",
        "signature": "String-\u003eValue-\u003eConstructorM m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:compileSindre",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a Sindre program and its environment, compile the program\n and return a pair of command-line options accepted by the program,\n and a startup function.  The program can be executed by calling the\n startup function with the command-like arguments and an initial\n value for the root widget.  If compilation fails, an IO exception\n is raised.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "Program -\u003e ClassMap m -\u003e ObjectMap m -\u003e FuncMap m -\u003e GlobMap m -\u003e ([SindreOption], Arguments -\u003e m ExitCode)",
        "fct-source": "src/Sindre-Compiler.html#compileSindre",
        "fct-type": "function",
        "title": "compileSindre"
      },
      "index": {
        "description": "Given Sindre program and its environment compile the program and return pair of command-line options accepted by the program and startup function The program can be executed by calling the startup function with the command-like arguments and an initial value for the root widget If compilation fails an IO exception is raised",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "compileSindre",
        "normalized": "Program-\u003eClassMap a-\u003eObjectMap a-\u003eFuncMap a-\u003eGlobMap a-\u003e([SindreOption],Arguments-\u003ea ExitCode)",
        "package": "sindre",
        "partial": "Sindre",
        "signature": "Program-\u003eClassMap m-\u003eObjectMap m-\u003eFuncMap m-\u003eGlobMap m-\u003e([SindreOption],Arguments-\u003em ExitCode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:moldM",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to convert the given Sindre value to the relevant\n Haskell value.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "Value -\u003e m (Maybe a)",
        "fct-source": "src/Sindre-Compiler.html#moldM",
        "fct-type": "method",
        "title": "moldM"
      },
      "index": {
        "description": "Attempt to convert the given Sindre value to the relevant Haskell value",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "moldM",
        "normalized": "Value-\u003ea(Maybe b)",
        "package": "sindre",
        "partial": "",
        "signature": "Value-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:noParam",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enoParam k\u003c/code\u003e signals that parameter \u003ccode\u003ek\u003c/code\u003e is missing.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e ConstructorM m a",
        "fct-source": "src/Sindre-Compiler.html#noParam",
        "fct-type": "function",
        "title": "noParam"
      },
      "index": {
        "description": "noParam signals that parameter is missing",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "noParam",
        "normalized": "String-\u003eConstructorM a b",
        "package": "sindre",
        "partial": "Param",
        "signature": "String-\u003eConstructorM m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:param",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003emold\u003c/a\u003e\u003c/code\u003e is always used for conversion.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "Identifier -\u003e ConstructorM m a",
        "fct-source": "src/Sindre-Compiler.html#param",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "As param but mold is always used for conversion",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "param",
        "normalized": "Identifier-\u003eConstructorM a b",
        "package": "sindre",
        "partial": "",
        "signature": "Identifier-\u003eConstructorM m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:paramAs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ek \u003ccode\u003e\u003ca\u003eparamAs\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e yields the value of the widget parameter \u003ccode\u003ek\u003c/code\u003e,\n using \u003ccode\u003ef\u003c/code\u003e to convert it to the proper Haskell type.  If \u003ccode\u003ef\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebadValue\u003c/a\u003e\u003c/code\u003e k \u003c/code\u003e is called.  If \u003ccode\u003ek\u003c/code\u003e does not exist,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003enoParam\u003c/a\u003e\u003c/code\u003e k\u003c/code\u003e is called.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "Identifier -\u003e (Value -\u003e Maybe a) -\u003e ConstructorM m a",
        "fct-source": "src/Sindre-Compiler.html#paramAs",
        "fct-type": "function",
        "title": "paramAs"
      },
      "index": {
        "description": "paramAs yields the value of the widget parameter using to convert it to the proper Haskell type If returns Nothing badValue is called If does not exist noParam is called",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "paramAs",
        "normalized": "Identifier-\u003e(Value-\u003eMaybe a)-\u003eConstructorM b a",
        "package": "sindre",
        "partial": "As",
        "signature": "Identifier-\u003e(Value-\u003eMaybe a)-\u003eConstructorM m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:paramM",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparamM\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003emoldM\u003c/a\u003e\u003c/code\u003e is always used for conversion.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "Identifier -\u003e ConstructorM m a",
        "fct-source": "src/Sindre-Compiler.html#paramM",
        "fct-type": "function",
        "title": "paramM"
      },
      "index": {
        "description": "As paramM but moldM is always used for conversion",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "paramM",
        "normalized": "Identifier-\u003eConstructorM a b",
        "package": "sindre",
        "partial": "",
        "signature": "Identifier-\u003eConstructorM m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:setValue",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a variable name, return a computation that can be used to\n set the value of the variable when executed.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "Identifier -\u003e Compiler m (Value -\u003e Execution m ())",
        "fct-source": "src/Sindre-Compiler.html#setValue",
        "fct-type": "function",
        "title": "setValue"
      },
      "index": {
        "description": "Given variable name return computation that can be used to set the value of the variable when executed",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "setValue",
        "normalized": "Identifier-\u003eCompiler a(Value-\u003eExecution a())",
        "package": "sindre",
        "partial": "Value",
        "signature": "Identifier-\u003eCompiler m(Value-\u003eExecution m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Compiler.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a variable name, return a computation that will yield the\n value of the variable when executed.\n\u003c/p\u003e",
        "fct-module": "Sindre.Compiler",
        "fct-package": "sindre",
        "fct-signature": "Identifier -\u003e Compiler m (Execution m Value)",
        "fct-source": "src/Sindre-Compiler.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Given variable name return computation that will yield the value of the variable when executed",
        "hierarchy": "Sindre Compiler",
        "module": "Sindre.Compiler",
        "name": "value",
        "normalized": "Identifier-\u003eCompiler a(Execution a Value)",
        "package": "sindre",
        "partial": "",
        "signature": "Identifier-\u003eCompiler m(Execution m Value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser and definition of the dzen2-inspired formatting language\n used by Sindre.  A format string is a sequence of commands changing\n drawing option parameters, and things to draw.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-Formatting.html",
        "fct-type": "module",
        "title": "Formatting"
      },
      "index": {
        "description": "Parser and definition of the dzen2-inspired formatting language used by Sindre format string is sequence of commands changing drawing option parameters and things to draw",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "Formatting",
        "normalized": "",
        "package": "sindre",
        "partial": "Formatting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eA formatting command is either a change to the drawing state, or\n a string to be printed at the current location.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Formatting.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "formatting command is either change to the drawing state or string to be printed at the current location",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "Format",
        "normalized": "",
        "package": "sindre",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#t:FormatString",
      "description": {
        "fct-descr": "\u003cp\u003eA list of formatting commands, interpreted left-to-right.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Formatting.html#FormatString",
        "fct-type": "type",
        "title": "FormatString"
      },
      "index": {
        "description": "list of formatting commands interpreted left-to-right",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "FormatString",
        "normalized": "",
        "package": "sindre",
        "partial": "Format String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:Bg",
      "description": {
        "fct-descr": "\u003cp\u003eDraw the background in the given colour.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "Bg String",
        "fct-source": "src/Sindre-Formatting.html#Format",
        "fct-type": "function",
        "title": "Bg"
      },
      "index": {
        "description": "Draw the background in the given colour",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "Bg",
        "normalized": "",
        "package": "sindre",
        "partial": "Bg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:DefBg",
      "description": {
        "fct-descr": "\u003cp\u003eDraw the background in the default colour.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "DefBg",
        "fct-source": "src/Sindre-Formatting.html#Format",
        "fct-type": "function",
        "title": "DefBg"
      },
      "index": {
        "description": "Draw the background in the default colour",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "DefBg",
        "normalized": "",
        "package": "sindre",
        "partial": "Def Bg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:DefFg",
      "description": {
        "fct-descr": "\u003cp\u003eDraw text in the default colour.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "DefFg",
        "fct-source": "src/Sindre-Formatting.html#Format",
        "fct-type": "function",
        "title": "DefFg"
      },
      "index": {
        "description": "Draw text in the default colour",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "DefFg",
        "normalized": "",
        "package": "sindre",
        "partial": "Def Fg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:Fg",
      "description": {
        "fct-descr": "\u003cp\u003eDraw text in the given colour.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "Fg String",
        "fct-source": "src/Sindre-Formatting.html#Format",
        "fct-type": "function",
        "title": "Fg"
      },
      "index": {
        "description": "Draw text in the given colour",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "Fg",
        "normalized": "",
        "package": "sindre",
        "partial": "Fg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:Text",
      "description": {
        "fct-descr": "\u003cp\u003eDraw the given string.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "Text Text",
        "fct-source": "src/Sindre-Formatting.html#Format",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "Draw the given string",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "Text",
        "normalized": "",
        "package": "sindre",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:parseFormatString",
      "description": {
        "fct-descr": "\u003cp\u003eParse a format string, returning either an error message or the\n result of the parse.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "Text -\u003e Either String FormatString",
        "fct-source": "src/Sindre-Formatting.html#parseFormatString",
        "fct-type": "function",
        "title": "parseFormatString"
      },
      "index": {
        "description": "Parse format string returning either an error message or the result of the parse",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "parseFormatString",
        "normalized": "Text-\u003eEither String FormatString",
        "package": "sindre",
        "partial": "Format String",
        "signature": "Text-\u003eEither String FormatString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:startBg",
      "description": {
        "fct-descr": "\u003cp\u003eThe first background colour preceding any default background\n colour or text entry specified in the format string, if any.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "FormatString -\u003e Maybe String",
        "fct-source": "src/Sindre-Formatting.html#startBg",
        "fct-type": "function",
        "title": "startBg"
      },
      "index": {
        "description": "The first background colour preceding any default background colour or text entry specified in the format string if any",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "startBg",
        "normalized": "FormatString-\u003eMaybe String",
        "package": "sindre",
        "partial": "Bg",
        "signature": "FormatString-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:textContents",
      "description": {
        "fct-descr": "\u003cp\u003eThe human-readable part of a format string, with formatting\n directives stripped.\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "FormatString -\u003e Text",
        "fct-source": "src/Sindre-Formatting.html#textContents",
        "fct-type": "function",
        "title": "textContents"
      },
      "index": {
        "description": "The human-readable part of format string with formatting directives stripped",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "textContents",
        "normalized": "FormatString-\u003eText",
        "package": "sindre",
        "partial": "Contents",
        "signature": "FormatString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Formatting.html#v:unparseFormatString",
      "description": {
        "fct-descr": "\u003cp\u003ePrettyprint a \u003ccode\u003e\u003ca\u003eFormatString\u003c/a\u003e\u003c/code\u003e to a string that, when parsed by\n \u003ccode\u003e\u003ca\u003eparseFormatString\u003c/a\u003e\u003c/code\u003e, results in the original \u003ccode\u003e\u003ca\u003eFormatString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Sindre.Formatting",
        "fct-package": "sindre",
        "fct-signature": "FormatString -\u003e Text",
        "fct-source": "src/Sindre-Formatting.html#unparseFormatString",
        "fct-type": "function",
        "title": "unparseFormatString"
      },
      "index": {
        "description": "Prettyprint FormatString to string that when parsed by parseFormatString results in the original FormatString",
        "hierarchy": "Sindre Formatting",
        "module": "Sindre.Formatting",
        "name": "unparseFormatString",
        "normalized": "FormatString-\u003eText",
        "package": "sindre",
        "partial": "Format String",
        "signature": "FormatString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#",
      "description": {
        "fct-module": "Sindre.KeyVal",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-KeyVal.html",
        "fct-type": "module",
        "title": "KeyVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre KeyVal",
        "module": "Sindre.KeyVal",
        "name": "KeyVal",
        "normalized": "",
        "package": "sindre",
        "partial": "Key Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e p\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the permutation\n parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input -\n use the optional combinator (\u003ccode\u003e\u003ca\u003e\u003c|?\u003e\u003c/a\u003e\u003c/code\u003e) instead. Returns a\n new permutation parser that includes \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Sindre.KeyVal",
        "fct-package": "sindre",
        "fct-signature": "PermParser p (a -\u003e b) -\u003e p a -\u003e PermParser p b",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "The expression perm adds parser to the permutation parser perm The parser is not allowed to accept empty input use the optional combinator instead Returns new permutation parser that includes",
        "hierarchy": "Sindre KeyVal",
        "module": "Sindre.KeyVal",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "PermParser a(b-\u003ec)-\u003ea b-\u003ePermParser a c",
        "package": "sindre",
        "partial": "",
        "signature": "PermParser p(a-\u003eb)-\u003ep a-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:-60--124--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e (x,p)\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the\n permutation parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can\n not be applied, the default value \u003ccode\u003ex\u003c/code\u003e will be used instead. Returns\n a new permutation parser that includes the optional parser \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Sindre.KeyVal",
        "fct-package": "sindre",
        "fct-signature": "PermParser p (a -\u003e b) -\u003e (a, p a) -\u003e PermParser p b",
        "fct-type": "function",
        "title": "(\u003c|?\u003e)"
      },
      "index": {
        "description": "The expression perm adds parser to the permutation parser perm The parser is optional if it can not be applied the default value will be used instead Returns new permutation parser that includes the optional parser",
        "hierarchy": "Sindre KeyVal",
        "module": "Sindre.KeyVal",
        "name": "(\u003c|?\u003e) \u003c|?\u003e",
        "normalized": "PermParser a(b-\u003ec)-\u003e(b,a b)-\u003ePermParser a c",
        "package": "sindre",
        "partial": "",
        "signature": "PermParser p(a-\u003eb)-\u003e(a,p a)-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:-60--36--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$$\u003e p\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input - use the optional\n combinator (\u003ccode\u003e\u003ca\u003e\u003c$?\u003e\u003c/a\u003e\u003c/code\u003e) instead.\n\u003c/p\u003e\u003cp\u003eIf the function \u003ccode\u003ef\u003c/code\u003e takes more than one parameter, the type variable\n \u003ccode\u003eb\u003c/code\u003e is instantiated to a functional type which combines nicely with\n the adds parser \u003ccode\u003ep\u003c/code\u003e to the (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) combinator. This\n results in stylized code where a permutation parser starts with a\n combining function \u003ccode\u003ef\u003c/code\u003e followed by the parsers. The function \u003ccode\u003ef\u003c/code\u003e\n gets its parameters in the order in which the parsers are specified,\n but actual input can be in any order.\n\u003c/p\u003e",
        "fct-module": "Sindre.KeyVal",
        "fct-package": "sindre",
        "fct-signature": "(a -\u003e b) -\u003e p a -\u003e PermParser p b",
        "fct-type": "function",
        "title": "(\u003c$$\u003e)"
      },
      "index": {
        "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is not allowed to accept empty input use the optional combinator instead If the function takes more than one parameter the type variable is instantiated to functional type which combines nicely with the adds parser to the combinator This results in stylized code where permutation parser starts with combining function followed by the parsers The function gets its parameters in the order in which the parsers are specified but actual input can be in any order",
        "hierarchy": "Sindre KeyVal",
        "module": "Sindre.KeyVal",
        "name": "(\u003c$$\u003e) \u003c$$\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ePermParser c b",
        "package": "sindre",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ep a-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:-60--36--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$?\u003e (x,p)\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can not be applied, the default value\n \u003ccode\u003ex\u003c/code\u003e will be used instead. \n\u003c/p\u003e",
        "fct-module": "Sindre.KeyVal",
        "fct-package": "sindre",
        "fct-signature": "(a -\u003e b) -\u003e (a, p a) -\u003e PermParser p b",
        "fct-type": "function",
        "title": "(\u003c$?\u003e)"
      },
      "index": {
        "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is optional if it can not be applied the default value will be used instead",
        "hierarchy": "Sindre KeyVal",
        "module": "Sindre.KeyVal",
        "name": "(\u003c$?\u003e) \u003c$?\u003e",
        "normalized": "(a-\u003eb)-\u003e(a,c a)-\u003ePermParser c b",
        "package": "sindre",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(a,p a)-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:parseKV",
      "description": {
        "fct-descr": "\u003cp\u003eParse a key-value string wrapper constructed via the permutation\n parser combinators from \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e and the parsers \u003ccode\u003evalue\u003c/code\u003e\n and \u003ccode\u003evalues\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.KeyVal",
        "fct-package": "sindre",
        "fct-signature": "PermParser Parser a -\u003e Text -\u003e Either String a",
        "fct-source": "src/Sindre-KeyVal.html#parseKV",
        "fct-type": "function",
        "title": "parseKV"
      },
      "index": {
        "description": "Parse key-value string wrapper constructed via the permutation parser combinators from Perm and the parsers value and values",
        "hierarchy": "Sindre KeyVal",
        "module": "Sindre.KeyVal",
        "name": "parseKV",
        "normalized": "PermParser Parser a-\u003eText-\u003eEither String a",
        "package": "sindre",
        "partial": "KV",
        "signature": "PermParser Parser a-\u003eText-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003evalue k\u003c/code\u003e is a parser for the single-valued key \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.KeyVal",
        "fct-package": "sindre",
        "fct-signature": "Text -\u003e Parser Text",
        "fct-source": "src/Sindre-KeyVal.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "value is parser for the single-valued key",
        "hierarchy": "Sindre KeyVal",
        "module": "Sindre.KeyVal",
        "name": "value",
        "normalized": "Text-\u003eParser Text",
        "package": "sindre",
        "partial": "",
        "signature": "Text-\u003eParser Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-KeyVal.html#v:values",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003evalues k\u003c/code\u003e is a parser for the list-valued key \u003ccode\u003ek\u003c/code\u003e.  At least a\n single value is required.\n\u003c/p\u003e",
        "fct-module": "Sindre.KeyVal",
        "fct-package": "sindre",
        "fct-signature": "Text -\u003e Parser [Text]",
        "fct-source": "src/Sindre-KeyVal.html#values",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "values is parser for the list-valued key At least single value is required",
        "hierarchy": "Sindre KeyVal",
        "module": "Sindre.KeyVal",
        "name": "values",
        "normalized": "Text-\u003eParser[Text]",
        "package": "sindre",
        "partial": "",
        "signature": "Text-\u003eParser[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary routines and helper functions for the Sindre programming\n language.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.Lib",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-Lib.html",
        "fct-type": "module",
        "title": "Lib"
      },
      "index": {
        "description": "Library routines and helper functions for the Sindre programming language",
        "hierarchy": "Sindre Lib",
        "module": "Sindre.Lib",
        "name": "Lib",
        "normalized": "",
        "package": "sindre",
        "partial": "Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#t:KeyLike",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience class for writing \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Sindre.Lib",
        "fct-package": "sindre",
        "fct-signature": "class",
        "fct-source": "src/Sindre-Lib.html#KeyLike",
        "fct-type": "class",
        "title": "KeyLike"
      },
      "index": {
        "description": "Convenience class for writing Chord values",
        "hierarchy": "Sindre Lib",
        "module": "Sindre.Lib",
        "name": "KeyLike",
        "normalized": "",
        "package": "sindre",
        "partial": "Key Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#t:LiftFunction",
      "description": {
        "fct-descr": "\u003cp\u003eA class making it easy to adapt Haskell functions as Sindre\n functions that take and return \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Sindre.Lib",
        "fct-package": "sindre",
        "fct-signature": "class",
        "fct-source": "src/Sindre-Lib.html#LiftFunction",
        "fct-type": "class",
        "title": "LiftFunction"
      },
      "index": {
        "description": "class making it easy to adapt Haskell functions as Sindre functions that take and return Value",
        "hierarchy": "Sindre Lib",
        "module": "Sindre.Lib",
        "name": "LiftFunction",
        "normalized": "",
        "package": "sindre",
        "partial": "Lift Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:chord",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of modifiers and either a \u003ccode\u003echar\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e,\n yield a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e.  If given a character, the Chord will contain a\n \u003ccode\u003e\u003ca\u003eCharKey\u003c/a\u003e\u003c/code\u003e, if given a string, it will contain a \u003ccode\u003e\u003ca\u003eCtrlKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Lib",
        "fct-package": "sindre",
        "fct-signature": "[KeyModifier] -\u003e a -\u003e Chord",
        "fct-source": "src/Sindre-Lib.html#chord",
        "fct-type": "method",
        "title": "chord"
      },
      "index": {
        "description": "Given list of modifiers and either char or String yield Chord If given character the Chord will contain CharKey if given string it will contain CtrlKey",
        "hierarchy": "Sindre Lib",
        "module": "Sindre.Lib",
        "name": "chord",
        "normalized": "[KeyModifier]-\u003ea-\u003eChord",
        "package": "sindre",
        "partial": "",
        "signature": "[KeyModifier]-\u003ea-\u003eChord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:function",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efunction f\u003c/code\u003e is a monadic function that accepts a list of\n \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es and returns a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.  If the list does not contain the\n number, or type, of arguments expected by \u003ccode\u003ef\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e will be\n called with an appropriate error message.\n\u003c/p\u003e",
        "fct-module": "Sindre.Lib",
        "fct-package": "sindre",
        "fct-signature": "a -\u003e [Value] -\u003e m im Value",
        "fct-source": "src/Sindre-Lib.html#function",
        "fct-type": "method",
        "title": "function"
      },
      "index": {
        "description": "function is monadic function that accepts list of Value and returns Value If the list does not contain the number or type of arguments expected by fail will be called with an appropriate error message",
        "hierarchy": "Sindre Lib",
        "module": "Sindre.Lib",
        "name": "function",
        "normalized": "a-\u003e[Value]-\u003eb c Value",
        "package": "sindre",
        "partial": "",
        "signature": "a-\u003e[Value]-\u003em im Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:ioFunctions",
      "description": {
        "fct-descr": "\u003cp\u003eA set of impure functions that only work in IO backends.\n Includes the \u003ccode\u003esystem\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Sindre.Lib",
        "fct-package": "sindre",
        "fct-signature": "FuncMap m",
        "fct-source": "src/Sindre-Lib.html#ioFunctions",
        "fct-type": "function",
        "title": "ioFunctions"
      },
      "index": {
        "description": "set of impure functions that only work in IO backends Includes the system function",
        "hierarchy": "Sindre Lib",
        "module": "Sindre.Lib",
        "name": "ioFunctions",
        "normalized": "",
        "package": "sindre",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:ioGlobals",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal variables that require an IO backend.  Includes the\n \u003ccode\u003eENVIRON\u003c/code\u003e global.\n\u003c/p\u003e",
        "fct-module": "Sindre.Lib",
        "fct-package": "sindre",
        "fct-signature": "Map Identifier (im Value)",
        "fct-source": "src/Sindre-Lib.html#ioGlobals",
        "fct-type": "function",
        "title": "ioGlobals"
      },
      "index": {
        "description": "Global variables that require an IO backend Includes the ENVIRON global",
        "hierarchy": "Sindre Lib",
        "module": "Sindre.Lib",
        "name": "ioGlobals",
        "normalized": "",
        "package": "sindre",
        "partial": "Globals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Lib.html#v:stdFunctions",
      "description": {
        "fct-descr": "\u003cp\u003eA set of pure functions that can work with any Sindre backend.\n Includes the functions \u003ccode\u003eabs\u003c/code\u003e, \u003ccode\u003eatan2\u003c/code\u003e, \u003ccode\u003ecos\u003c/code\u003e, \u003ccode\u003esin\u003c/code\u003e, \u003ccode\u003eexp\u003c/code\u003e, \u003ccode\u003elog\u003c/code\u003e,\n \u003ccode\u003eint\u003c/code\u003e, \u003ccode\u003esqrt\u003c/code\u003e, \u003ccode\u003elength\u003c/code\u003e, \u003ccode\u003esubstr\u003c/code\u003e, \u003ccode\u003eindex\u003c/code\u003e, \u003ccode\u003ematch\u003c/code\u003e, \u003ccode\u003esub\u003c/code\u003e, \u003ccode\u003egsub\u003c/code\u003e,\n \u003ccode\u003etolower\u003c/code\u003e, and \u003ccode\u003etoupper\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Lib",
        "fct-package": "sindre",
        "fct-signature": "FuncMap im",
        "fct-source": "src/Sindre-Lib.html#stdFunctions",
        "fct-type": "function",
        "title": "stdFunctions"
      },
      "index": {
        "description": "set of pure functions that can work with any Sindre backend Includes the functions abs atan2 cos sin exp log int sqrt length substr index match sub gsub tolower and toupper",
        "hierarchy": "Sindre Lib",
        "module": "Sindre.Lib",
        "name": "stdFunctions",
        "normalized": "",
        "package": "sindre",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSindre, a programming language for writing simple GUIs\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.Main",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-Main.html",
        "fct-type": "module",
        "title": "Main"
      },
      "index": {
        "description": "Sindre programming language for writing simple GUIs",
        "hierarchy": "Sindre Main",
        "module": "Sindre.Main",
        "name": "Main",
        "normalized": "",
        "package": "sindre",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:classMap",
      "description": {
        "fct-module": "Sindre.Main",
        "fct-package": "sindre",
        "fct-signature": "ClassMap SindreX11M",
        "fct-source": "src/Sindre-Main.html#classMap",
        "fct-type": "function",
        "title": "classMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Main",
        "module": "Sindre.Main",
        "name": "classMap",
        "normalized": "",
        "package": "sindre",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:emptyProgram",
      "description": {
        "fct-module": "Sindre.Main",
        "fct-package": "sindre",
        "fct-signature": "Program",
        "fct-source": "src/Sindre-Main.html#emptyProgram",
        "fct-type": "function",
        "title": "emptyProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Main",
        "module": "Sindre.Main",
        "name": "emptyProgram",
        "normalized": "",
        "package": "sindre",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:funcMap",
      "description": {
        "fct-module": "Sindre.Main",
        "fct-package": "sindre",
        "fct-signature": "FuncMap SindreX11M",
        "fct-source": "src/Sindre-Main.html#funcMap",
        "fct-type": "function",
        "title": "funcMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Main",
        "module": "Sindre.Main",
        "name": "funcMap",
        "normalized": "",
        "package": "sindre",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:globMap",
      "description": {
        "fct-module": "Sindre.Main",
        "fct-package": "sindre",
        "fct-signature": "GlobMap SindreX11M",
        "fct-source": "src/Sindre-Main.html#globMap",
        "fct-type": "function",
        "title": "globMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Main",
        "module": "Sindre.Main",
        "name": "globMap",
        "normalized": "",
        "package": "sindre",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:objectMap",
      "description": {
        "fct-module": "Sindre.Main",
        "fct-package": "sindre",
        "fct-signature": "ObjectMap SindreX11M",
        "fct-source": "src/Sindre-Main.html#objectMap",
        "fct-type": "function",
        "title": "objectMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Main",
        "module": "Sindre.Main",
        "name": "objectMap",
        "normalized": "",
        "package": "sindre",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Main.html#v:sindreMain",
      "description": {
        "fct-descr": "\u003cp\u003eThe main Sindre entry point.\n\u003c/p\u003e",
        "fct-module": "Sindre.Main",
        "fct-package": "sindre",
        "fct-signature": "Program -\u003e ClassMap SindreX11M -\u003e ObjectMap SindreX11M -\u003e FuncMap SindreX11M -\u003e GlobMap SindreX11M -\u003e [String] -\u003e IO ()",
        "fct-source": "src/Sindre-Main.html#sindreMain",
        "fct-type": "function",
        "title": "sindreMain"
      },
      "index": {
        "description": "The main Sindre entry point",
        "hierarchy": "Sindre Main",
        "module": "Sindre.Main",
        "name": "sindreMain",
        "normalized": "Program-\u003eClassMap SindreX M-\u003eObjectMap SindreX M-\u003eFuncMap SindreX M-\u003eGlobMap SindreX M-\u003e[String]-\u003eIO()",
        "package": "sindre",
        "partial": "Main",
        "signature": "Program-\u003eClassMap SindreX M-\u003eObjectMap SindreX M-\u003eFuncMap SindreX M-\u003eGlobMap SindreX M-\u003e[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for the Sindre programming language.  The documentation for\n this module does not include a description of the language syntax.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.Parser",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Parser for the Sindre programming language The documentation for this module does not include description of the language syntax",
        "hierarchy": "Sindre Parser",
        "module": "Sindre.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "sindre",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Parser.html#v:parseInteger",
      "description": {
        "fct-descr": "\u003cp\u003eTry to parse an integer according to the Sindre syntax, ignoring\n trailing whitespace.\n\u003c/p\u003e",
        "fct-module": "Sindre.Parser",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e Maybe Double",
        "fct-source": "src/Sindre-Parser.html#parseInteger",
        "fct-type": "function",
        "title": "parseInteger"
      },
      "index": {
        "description": "Try to parse an integer according to the Sindre syntax ignoring trailing whitespace",
        "hierarchy": "Sindre Parser",
        "module": "Sindre.Parser",
        "name": "parseInteger",
        "normalized": "String-\u003eMaybe Double",
        "package": "sindre",
        "partial": "Integer",
        "signature": "String-\u003eMaybe Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Parser.html#v:parseSindre",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparseSindre prog filename string\u003c/code\u003e extends the \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eprog\u003c/code\u003e\n with the declarations in the given Sindre source code.  In case of\n mutually-exclusive definitions (such as the \u003ccode\u003eBEGIN\u003c/code\u003e block, or\n identically named functions), the new definitions in \u003ccode\u003estring\u003c/code\u003e take\n precedence.\n\u003c/p\u003e",
        "fct-module": "Sindre.Parser",
        "fct-package": "sindre",
        "fct-signature": "Program -\u003e SourceName -\u003e String -\u003e Either ParseError Program",
        "fct-source": "src/Sindre-Parser.html#parseSindre",
        "fct-type": "function",
        "title": "parseSindre"
      },
      "index": {
        "description": "parseSindre prog filename string extends the Program prog with the declarations in the given Sindre source code In case of mutually-exclusive definitions such as the BEGIN block or identically named functions the new definitions in string take precedence",
        "hierarchy": "Sindre Parser",
        "module": "Sindre.Parser",
        "name": "parseSindre",
        "normalized": "Program-\u003eSourceName-\u003eString-\u003eEither ParseError Program",
        "package": "sindre",
        "partial": "Sindre",
        "signature": "Program-\u003eSourceName-\u003eString-\u003eEither ParseError Program"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions for the Sindre runtime environment.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-Runtime.html",
        "fct-type": "module",
        "title": "Runtime"
      },
      "index": {
        "description": "Definitions for the Sindre runtime environment",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "Runtime",
        "normalized": "",
        "package": "sindre",
        "partial": "Runtime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:DataSlot",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Runtime.html#DataSlot",
        "fct-type": "data",
        "title": "DataSlot"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "DataSlot",
        "normalized": "",
        "package": "sindre",
        "partial": "Data Slot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:EventHandler",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Runtime.html#EventHandler",
        "fct-type": "type",
        "title": "EventHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "EventHandler",
        "normalized": "",
        "package": "sindre",
        "partial": "Event Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Execution",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Runtime.html#Execution",
        "fct-type": "data",
        "title": "Execution"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "Execution",
        "normalized": "",
        "package": "sindre",
        "partial": "Execution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque notion of a field.  These are for internal use in the\n Sindre runtime.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Runtime.html#Field",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "An opaque notion of field These are for internal use in the Sindre runtime",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "Field",
        "normalized": "",
        "package": "sindre",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:FieldDesc",
      "description": {
        "fct-descr": "\u003cp\u003eA typed description of a field, which may be read-write or\n read-only.  When constructing the actual widget, you must turn\n these into real \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003es by using the \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e function.  A\n description of a field consists of a name and monadic actions for\n reading and optionally writing to the field.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Runtime.html#FieldDesc",
        "fct-type": "data",
        "title": "FieldDesc"
      },
      "index": {
        "description": "typed description of field which may be read-write or read-only When constructing the actual widget you must turn these into real Field by using the field function description of field consists of name and monadic actions for reading and optionally writing to the field",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "FieldDesc",
        "normalized": "",
        "package": "sindre",
        "partial": "Field Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eA method takes as arguments a list of \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es and returns\n another \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.  You probably do not want to call these directly\n from Haskell code, as they are dynamically typed.  See\n \u003ccode\u003e\u003ca\u003efunction\u003c/a\u003e\u003c/code\u003e for a convenient way to turn a Haskell\n function into a suitable method.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Runtime.html#Method",
        "fct-type": "type",
        "title": "Method"
      },
      "index": {
        "description": "method takes as arguments list of Value and returns another Value You probably do not want to call these directly from Haskell code as they are dynamically typed See function for convenient way to turn Haskell function into suitable method",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "Method",
        "normalized": "",
        "package": "sindre",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Mold",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "class",
        "fct-source": "src/Sindre-Runtime.html#Mold",
        "fct-type": "class",
        "title": "Mold"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "Mold",
        "normalized": "",
        "package": "sindre",
        "partial": "Mold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:MonadBackend",
      "description": {
        "fct-descr": "\u003cp\u003eA monad that can be used as the layer beneath \u003ccode\u003e\u003ca\u003eSindre\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "class",
        "fct-source": "src/Sindre-Runtime.html#MonadBackend",
        "fct-type": "class",
        "title": "MonadBackend"
      },
      "index": {
        "description": "monad that can be used as the layer beneath Sindre",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "MonadBackend",
        "normalized": "",
        "package": "sindre",
        "partial": "Monad Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:MonadSindre",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMonadSindre im m\u003c/code\u003e is the class of monads \u003ccode\u003em\u003c/code\u003e that run on top of\n \u003ccode\u003e\u003ca\u003eSindre\u003c/a\u003e\u003c/code\u003e with backend \u003ccode\u003eim\u003c/code\u003e, and can thus access Sindre\n functionality.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "class",
        "fct-source": "src/Sindre-Runtime.html#MonadSindre",
        "fct-type": "class",
        "title": "MonadSindre"
      },
      "index": {
        "description": "MonadSindre im is the class of monads that run on top of Sindre with backend im and can thus access Sindre functionality",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "MonadSindre",
        "normalized": "",
        "package": "sindre",
        "partial": "Monad Sindre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:NewObject",
      "description": {
        "fct-descr": "\u003cp\u003eContainer describing a newly created object.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Runtime.html#NewObject",
        "fct-type": "data",
        "title": "NewObject"
      },
      "index": {
        "description": "Container describing newly created object",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "NewObject",
        "normalized": "",
        "package": "sindre",
        "partial": "New Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:NewWidget",
      "description": {
        "fct-descr": "\u003cp\u003eContainer describing a newly created widget.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Runtime.html#NewWidget",
        "fct-type": "data",
        "title": "NewWidget"
      },
      "index": {
        "description": "Container describing newly created widget",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "NewWidget",
        "normalized": "",
        "package": "sindre",
        "partial": "New Widget",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:ObjectM",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Runtime.html#ObjectM",
        "fct-type": "data",
        "title": "ObjectM"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "ObjectM",
        "normalized": "",
        "package": "sindre",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:Sindre",
      "description": {
        "fct-descr": "\u003cp\u003eThe main monad in which a Sindre program executes.  More\n specialised monads, such as \u003ccode\u003e\u003ca\u003eExecution\u003c/a\u003e\u003c/code\u003e are used for specific\n purposes, but they all run on top of the Sindre monad.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Runtime.html#Sindre",
        "fct-type": "data",
        "title": "Sindre"
      },
      "index": {
        "description": "The main monad in which Sindre program executes More specialised monads such as Execution are used for specific purposes but they all run on top of the Sindre monad",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "Sindre",
        "normalized": "",
        "package": "sindre",
        "partial": "Sindre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#t:SindreEnv",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "data",
        "title": "SindreEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "SindreEnv",
        "normalized": "",
        "package": "sindre",
        "partial": "Sindre Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:ReadOnlyField",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "ReadOnlyField Identifier (ObjectM s im v)",
        "fct-source": "src/Sindre-Runtime.html#FieldDesc",
        "fct-type": "function",
        "title": "ReadOnlyField"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "ReadOnlyField",
        "normalized": "",
        "package": "sindre",
        "partial": "Read Only Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:ReadWriteField",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "ReadWriteField Identifier (ObjectM s im v) (v -\u003e ObjectM s im ())",
        "fct-source": "src/Sindre-Runtime.html#FieldDesc",
        "fct-type": "function",
        "title": "ReadWriteField"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "ReadWriteField",
        "normalized": "ReadWriteField Identifier(ObjectM a b c)(c-\u003eObjectM a b())",
        "package": "sindre",
        "partial": "Read Write Field",
        "signature": "ReadWriteField Identifier(ObjectM s im v)(v-\u003eObjectM s im())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:SindreEnv",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "SindreEnv",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "function",
        "title": "SindreEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "SindreEnv",
        "normalized": "",
        "package": "sindre",
        "partial": "Sindre Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:arguments",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Arguments",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "function",
        "title": "arguments"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "arguments",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:back",
      "description": {
        "fct-descr": "\u003cp\u003eLift a backend operation into this monad.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "im a -\u003e m im a",
        "fct-source": "src/Sindre-Runtime.html#back",
        "fct-type": "method",
        "title": "back"
      },
      "index": {
        "description": "Lift backend operation into this monad",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "back",
        "normalized": "a b-\u003ec a b",
        "package": "sindre",
        "partial": "",
        "signature": "im a-\u003em im a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:breakHere",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Execution m () -\u003e Execution m ()",
        "fct-source": "src/Sindre-Runtime.html#breakHere",
        "fct-type": "function",
        "title": "breakHere"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "breakHere",
        "normalized": "Execution a()-\u003eExecution a()",
        "package": "sindre",
        "partial": "Here",
        "signature": "Execution m()-\u003eExecution m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:broadcast",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Event -\u003e ObjectM o im ()",
        "fct-source": "src/Sindre-Runtime.html#broadcast",
        "fct-type": "function",
        "title": "broadcast"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "broadcast",
        "normalized": "Event-\u003eObjectM a b()",
        "package": "sindre",
        "partial": "",
        "signature": "Event-\u003eObjectM o im()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:callMethodByRef",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "ObjectRef -\u003e Identifier -\u003e [Value] -\u003e Execution im Value",
        "fct-source": "src/Sindre-Runtime.html#callMethodByRef",
        "fct-type": "function",
        "title": "callMethodByRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "callMethodByRef",
        "normalized": "ObjectRef-\u003eIdentifier-\u003e[Value]-\u003eExecution a Value",
        "package": "sindre",
        "partial": "Method By Ref",
        "signature": "ObjectRef-\u003eIdentifier-\u003e[Value]-\u003eExecution im Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:changed",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Identifier -\u003e Value -\u003e Value -\u003e ObjectM o im ()",
        "fct-source": "src/Sindre-Runtime.html#changed",
        "fct-type": "function",
        "title": "changed"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "changed",
        "normalized": "Identifier-\u003eValue-\u003eValue-\u003eObjectM a b()",
        "package": "sindre",
        "partial": "",
        "signature": "Identifier-\u003eValue-\u003eValue-\u003eObjectM o im()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:compose",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "WidgetRef -\u003e m im SpaceNeed",
        "fct-source": "src/Sindre-Runtime.html#compose",
        "fct-type": "function",
        "title": "compose"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "compose",
        "normalized": "WidgetRef-\u003ea b SpaceNeed",
        "package": "sindre",
        "partial": "",
        "signature": "WidgetRef-\u003em im SpaceNeed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:contHere",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Execution m () -\u003e Execution m ()",
        "fct-source": "src/Sindre-Runtime.html#contHere",
        "fct-type": "function",
        "title": "contHere"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "contHere",
        "normalized": "Execution a()-\u003eExecution a()",
        "package": "sindre",
        "partial": "Here",
        "signature": "Execution m()-\u003eExecution m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:doBreak",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Execution m ()",
        "fct-source": "src/Sindre-Runtime.html#doBreak",
        "fct-type": "function",
        "title": "doBreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "doBreak",
        "normalized": "Execution a()",
        "package": "sindre",
        "partial": "Break",
        "signature": "Execution m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:doCont",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Execution m ()",
        "fct-source": "src/Sindre-Runtime.html#doCont",
        "fct-type": "function",
        "title": "doCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "doCont",
        "normalized": "Execution a()",
        "package": "sindre",
        "partial": "Cont",
        "signature": "Execution m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:doNext",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Execution m ()",
        "fct-source": "src/Sindre-Runtime.html#doNext",
        "fct-type": "function",
        "title": "doNext"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "doNext",
        "normalized": "Execution a()",
        "package": "sindre",
        "partial": "Next",
        "signature": "Execution m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:doReturn",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Value -\u003e Execution m ()",
        "fct-source": "src/Sindre-Runtime.html#doReturn",
        "fct-type": "function",
        "title": "doReturn"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "doReturn",
        "normalized": "Value-\u003eExecution a()",
        "package": "sindre",
        "partial": "Return",
        "signature": "Value-\u003eExecution m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:draw",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "WidgetRef -\u003e Maybe Rectangle -\u003e m im SpaceUse",
        "fct-source": "src/Sindre-Runtime.html#draw",
        "fct-type": "function",
        "title": "draw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "draw",
        "normalized": "WidgetRef-\u003eMaybe Rectangle-\u003ea b SpaceUse",
        "package": "sindre",
        "partial": "",
        "signature": "WidgetRef-\u003eMaybe Rectangle-\u003em im SpaceUse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:enterScope",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "[Value] -\u003e Execution m a -\u003e Execution m a",
        "fct-source": "src/Sindre-Runtime.html#enterScope",
        "fct-type": "function",
        "title": "enterScope"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "enterScope",
        "normalized": "[Value]-\u003eExecution a b-\u003eExecution a b",
        "package": "sindre",
        "partial": "Scope",
        "signature": "[Value]-\u003eExecution m a-\u003eExecution m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:eventLoop",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "EventHandler m -\u003e Sindre m ()",
        "fct-source": "src/Sindre-Runtime.html#eventLoop",
        "fct-type": "function",
        "title": "eventLoop"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "eventLoop",
        "normalized": "EventHandler a-\u003eSindre a()",
        "package": "sindre",
        "partial": "Loop",
        "signature": "EventHandler m-\u003eSindre m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:evtQueue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Seq Event",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "function",
        "title": "evtQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "evtQueue",
        "normalized": "",
        "package": "sindre",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:execFrame",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Frame",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "function",
        "title": "execFrame"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "execFrame",
        "normalized": "",
        "package": "sindre",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:execSindre",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eexecSindre e m\u003c/code\u003e executes the action \u003ccode\u003em\u003c/code\u003e in environment \u003ccode\u003ee\u003c/code\u003e,\n returning the exit code of \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "SindreEnv m -\u003e Sindre m a -\u003e m ExitCode",
        "fct-source": "src/Sindre-Runtime.html#execSindre",
        "fct-type": "function",
        "title": "execSindre"
      },
      "index": {
        "description": "execSindre executes the action in environment returning the exit code of",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "execSindre",
        "normalized": "SindreEnv a-\u003eSindre a b-\u003ea ExitCode",
        "package": "sindre",
        "partial": "Sindre",
        "signature": "SindreEnv m-\u003eSindre m a-\u003em ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:execute",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Execution m Value -\u003e Sindre m Value",
        "fct-source": "src/Sindre-Runtime.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "execute",
        "normalized": "Execution a Value-\u003eSindre a Value",
        "package": "sindre",
        "partial": "",
        "signature": "Execution m Value-\u003eSindre m Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:execute_",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Execution m a -\u003e Sindre m ()",
        "fct-source": "src/Sindre-Runtime.html#execute_",
        "fct-type": "function",
        "title": "execute_"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "execute_",
        "normalized": "Execution a b-\u003eSindre a()",
        "package": "sindre",
        "partial": "",
        "signature": "Execution m a-\u003eSindre m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:field",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a Haskell-typed high-level field description into a\n \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e-typed field.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "FieldDesc s im v -\u003e Field s im",
        "fct-source": "src/Sindre-Runtime.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "Turn Haskell-typed high-level field description into Value typed field",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "field",
        "normalized": "FieldDesc a b c-\u003eField a b",
        "package": "sindre",
        "partial": "",
        "signature": "FieldDesc s im v-\u003eField s im"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:fieldName",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "FieldDesc s im v -\u003e Identifier",
        "fct-source": "src/Sindre-Runtime.html#fieldName",
        "fct-type": "function",
        "title": "fieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "fieldName",
        "normalized": "FieldDesc a b c-\u003eIdentifier",
        "package": "sindre",
        "partial": "Name",
        "signature": "FieldDesc s im v-\u003eIdentifier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:fullRedraw",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "m im ()",
        "fct-source": "src/Sindre-Runtime.html#fullRedraw",
        "fct-type": "function",
        "title": "fullRedraw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "fullRedraw",
        "normalized": "a b()",
        "package": "sindre",
        "partial": "Redraw",
        "signature": "m im()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:getBackEvent",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Sindre m (Maybe Event)",
        "fct-source": "src/Sindre-Runtime.html#getBackEvent",
        "fct-type": "method",
        "title": "getBackEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "getBackEvent",
        "normalized": "",
        "package": "sindre",
        "partial": "Back Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:getField",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "FieldDesc s im v -\u003e ObjectM s im v",
        "fct-source": "src/Sindre-Runtime.html#getField",
        "fct-type": "function",
        "title": "getField"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "getField",
        "normalized": "FieldDesc a b c-\u003eObjectM a b c",
        "package": "sindre",
        "partial": "Field",
        "signature": "FieldDesc s im v-\u003eObjectM s im v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:getFieldByRef",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "ObjectRef -\u003e Identifier -\u003e Execution im Value",
        "fct-source": "src/Sindre-Runtime.html#getFieldByRef",
        "fct-type": "function",
        "title": "getFieldByRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "getFieldByRef",
        "normalized": "ObjectRef-\u003eIdentifier-\u003eExecution a Value",
        "package": "sindre",
        "partial": "Field By Ref",
        "signature": "ObjectRef-\u003eIdentifier-\u003eExecution im Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:globalVal",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Key -\u003e Sindre m Value",
        "fct-source": "src/Sindre-Runtime.html#globalVal",
        "fct-type": "function",
        "title": "globalVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "globalVal",
        "normalized": "Key-\u003eSindre a Value",
        "package": "sindre",
        "partial": "Val",
        "signature": "Key-\u003eSindre m Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:globals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "IntMap Value",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "function",
        "title": "globals"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "globals",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:instObject",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "NewObject im -\u003e DataSlot im",
        "fct-source": "src/Sindre-Runtime.html#instObject",
        "fct-type": "function",
        "title": "instObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "instObject",
        "normalized": "NewObject a-\u003eDataSlot a",
        "package": "sindre",
        "partial": "Object",
        "signature": "NewObject im-\u003eDataSlot im"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:instWidget",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "NewWidget im -\u003e Constraints -\u003e DataSlot im",
        "fct-source": "src/Sindre-Runtime.html#instWidget",
        "fct-type": "function",
        "title": "instWidget"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "instWidget",
        "normalized": "NewWidget a-\u003eConstraints-\u003eDataSlot a",
        "package": "sindre",
        "partial": "Widget",
        "signature": "NewWidget im-\u003eConstraints-\u003eDataSlot im"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:kbdFocus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "WidgetRef",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "function",
        "title": "kbdFocus"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "kbdFocus",
        "normalized": "",
        "package": "sindre",
        "partial": "Focus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:lexicalVal",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Key -\u003e Execution m Value",
        "fct-source": "src/Sindre-Runtime.html#lexicalVal",
        "fct-type": "function",
        "title": "lexicalVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "lexicalVal",
        "normalized": "Key-\u003eExecution a Value",
        "package": "sindre",
        "partial": "Val",
        "signature": "Key-\u003eExecution m Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:mold",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Value -\u003e Maybe a",
        "fct-source": "src/Sindre-Runtime.html#mold",
        "fct-type": "method",
        "title": "mold"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "mold",
        "normalized": "Value-\u003eMaybe a",
        "package": "sindre",
        "partial": "",
        "signature": "Value-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:needsRedraw",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Redraw",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "function",
        "title": "needsRedraw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "needsRedraw",
        "normalized": "",
        "package": "sindre",
        "partial": "Redraw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:newEnv",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "WidgetRef -\u003e Arguments -\u003e SindreEnv m",
        "fct-source": "src/Sindre-Runtime.html#newEnv",
        "fct-type": "function",
        "title": "newEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "newEnv",
        "normalized": "WidgetRef-\u003eArguments-\u003eSindreEnv a",
        "package": "sindre",
        "partial": "Env",
        "signature": "WidgetRef-\u003eArguments-\u003eSindreEnv m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:newObject",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "s -\u003e Map Identifier (Method s im) -\u003e [Field s im] -\u003e (Event -\u003e ObjectM s im ()) -\u003e NewObject im",
        "fct-source": "src/Sindre-Runtime.html#newObject",
        "fct-type": "function",
        "title": "newObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "newObject",
        "normalized": "a-\u003eMap Identifier(Method a b)-\u003e[Field a b]-\u003e(Event-\u003eObjectM a b())-\u003eNewObject b",
        "package": "sindre",
        "partial": "Object",
        "signature": "s-\u003eMap Identifier(Method s im)-\u003e[Field s im]-\u003e(Event-\u003eObjectM s im())-\u003eNewObject im"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:newWidget",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "s -\u003e Map Identifier (Method s im) -\u003e [Field s im] -\u003e (Event -\u003e ObjectM s im ()) -\u003e ObjectM s im SpaceNeed -\u003e (Rectangle -\u003e ObjectM s im SpaceUse) -\u003e NewWidget im",
        "fct-source": "src/Sindre-Runtime.html#newWidget",
        "fct-type": "function",
        "title": "newWidget"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "newWidget",
        "normalized": "a-\u003eMap Identifier(Method a b)-\u003e[Field a b]-\u003e(Event-\u003eObjectM a b())-\u003eObjectM a b SpaceNeed-\u003e(Rectangle-\u003eObjectM a b SpaceUse)-\u003eNewWidget b",
        "package": "sindre",
        "partial": "Widget",
        "signature": "s-\u003eMap Identifier(Method s im)-\u003e[Field s im]-\u003e(Event-\u003eObjectM s im())-\u003eObjectM s im SpaceNeed-\u003e(Rectangle-\u003eObjectM s im SpaceUse)-\u003eNewWidget im"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:nextHere",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Execution m () -\u003e Execution m ()",
        "fct-source": "src/Sindre-Runtime.html#nextHere",
        "fct-type": "function",
        "title": "nextHere"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "nextHere",
        "normalized": "Execution a()-\u003eExecution a()",
        "package": "sindre",
        "partial": "Here",
        "signature": "Execution m()-\u003eExecution m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:objects",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Array ObjectNum (DataSlot m)",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "function",
        "title": "objects"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "objects",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:printVal",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Sindre-Runtime.html#printVal",
        "fct-type": "method",
        "title": "printVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "printVal",
        "normalized": "String-\u003ea()",
        "package": "sindre",
        "partial": "Val",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:quitSindre",
      "description": {
        "fct-descr": "\u003cp\u003eImmediately return from \u003ccode\u003e\u003ca\u003eexecSindre\u003c/a\u003e\u003c/code\u003e, returning the given exit\n code.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "ExitCode -\u003e Sindre m ()",
        "fct-source": "src/Sindre-Runtime.html#quitSindre",
        "fct-type": "function",
        "title": "quitSindre"
      },
      "index": {
        "description": "Immediately return from execSindre returning the given exit code",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "quitSindre",
        "normalized": "ExitCode-\u003eSindre a()",
        "package": "sindre",
        "partial": "Sindre",
        "signature": "ExitCode-\u003eSindre m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:recvEventByRef",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "WidgetRef -\u003e Event -\u003e Execution im ()",
        "fct-source": "src/Sindre-Runtime.html#recvEventByRef",
        "fct-type": "function",
        "title": "recvEventByRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "recvEventByRef",
        "normalized": "WidgetRef-\u003eEvent-\u003eExecution a()",
        "package": "sindre",
        "partial": "Event By Ref",
        "signature": "WidgetRef-\u003eEvent-\u003eExecution im()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:redraw",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "ObjectM s im ()",
        "fct-source": "src/Sindre-Runtime.html#redraw",
        "fct-type": "function",
        "title": "redraw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "redraw",
        "normalized": "ObjectM a b()",
        "package": "sindre",
        "partial": "",
        "signature": "ObjectM s im()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:redrawRegion",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "[Rectangle] -\u003e Sindre m ()",
        "fct-source": "src/Sindre-Runtime.html#redrawRegion",
        "fct-type": "method",
        "title": "redrawRegion"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "redrawRegion",
        "normalized": "[Rectangle]-\u003eSindre a()",
        "package": "sindre",
        "partial": "Region",
        "signature": "[Rectangle]-\u003eSindre m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:redrawRoot",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Sindre m ()",
        "fct-source": "src/Sindre-Runtime.html#redrawRoot",
        "fct-type": "method",
        "title": "redrawRoot"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "redrawRoot",
        "normalized": "Sindre a()",
        "package": "sindre",
        "partial": "Root",
        "signature": "Sindre m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:returnHere",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Execution m Value -\u003e Execution m Value",
        "fct-source": "src/Sindre-Runtime.html#returnHere",
        "fct-type": "function",
        "title": "returnHere"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "returnHere",
        "normalized": "Execution a Value-\u003eExecution a Value",
        "package": "sindre",
        "partial": "Here",
        "signature": "Execution m Value-\u003eExecution m Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:rootWidget",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "(Maybe (RootPosition m), WidgetRef)",
        "fct-source": "src/Sindre-Runtime.html#SindreEnv",
        "fct-type": "function",
        "title": "rootWidget"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "rootWidget",
        "normalized": "(Maybe(RootPosition a),WidgetRef)",
        "package": "sindre",
        "partial": "Widget",
        "signature": "(Maybe(RootPosition m),WidgetRef)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setFieldByRef",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "ObjectRef -\u003e Identifier -\u003e Value -\u003e Execution im Value",
        "fct-source": "src/Sindre-Runtime.html#setFieldByRef",
        "fct-type": "function",
        "title": "setFieldByRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "setFieldByRef",
        "normalized": "ObjectRef-\u003eIdentifier-\u003eValue-\u003eExecution a Value",
        "package": "sindre",
        "partial": "Field By Ref",
        "signature": "ObjectRef-\u003eIdentifier-\u003eValue-\u003eExecution im Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setGlobal",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Key -\u003e Value -\u003e Sindre m ()",
        "fct-source": "src/Sindre-Runtime.html#setGlobal",
        "fct-type": "function",
        "title": "setGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "setGlobal",
        "normalized": "Key-\u003eValue-\u003eSindre a()",
        "package": "sindre",
        "partial": "Global",
        "signature": "Key-\u003eValue-\u003eSindre m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setLexical",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Key -\u003e Value -\u003e Execution m ()",
        "fct-source": "src/Sindre-Runtime.html#setLexical",
        "fct-type": "function",
        "title": "setLexical"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "setLexical",
        "normalized": "Key-\u003eValue-\u003eExecution a()",
        "package": "sindre",
        "partial": "Lexical",
        "signature": "Key-\u003eValue-\u003eExecution m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setRootPosition",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Value -\u003e Sindre m ()",
        "fct-source": "src/Sindre-Runtime.html#setRootPosition",
        "fct-type": "function",
        "title": "setRootPosition"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "setRootPosition",
        "normalized": "Value-\u003eSindre a()",
        "package": "sindre",
        "partial": "Root Position",
        "signature": "Value-\u003eSindre m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:setScope",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "[Value] -\u003e Execution m a -\u003e Execution m a",
        "fct-source": "src/Sindre-Runtime.html#setScope",
        "fct-type": "function",
        "title": "setScope"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "setScope",
        "normalized": "[Value]-\u003eExecution a b-\u003eExecution a b",
        "package": "sindre",
        "partial": "Scope",
        "signature": "[Value]-\u003eExecution m a-\u003eExecution m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:sindre",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eSindre\u003c/a\u003e\u003c/code\u003e operation into this monad.\n\u003c/p\u003e",
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Sindre im a -\u003e m im a",
        "fct-source": "src/Sindre-Runtime.html#sindre",
        "fct-type": "method",
        "title": "sindre"
      },
      "index": {
        "description": "Lift Sindre operation into this monad",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "sindre",
        "normalized": "Sindre a b-\u003ec a b",
        "package": "sindre",
        "partial": "",
        "signature": "Sindre im a-\u003em im a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:unmold",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "a -\u003e Value",
        "fct-source": "src/Sindre-Runtime.html#unmold",
        "fct-type": "method",
        "title": "unmold"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "unmold",
        "normalized": "a-\u003eValue",
        "package": "sindre",
        "partial": "",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Runtime.html#v:waitForBackEvent",
      "description": {
        "fct-module": "Sindre.Runtime",
        "fct-package": "sindre",
        "fct-signature": "Sindre m Event",
        "fct-source": "src/Sindre-Runtime.html#waitForBackEvent",
        "fct-type": "method",
        "title": "waitForBackEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Runtime",
        "module": "Sindre.Runtime",
        "name": "waitForBackEvent",
        "normalized": "",
        "package": "sindre",
        "partial": "For Back Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral definitions for the Sindre programming language.  The\n documentation for this module does not include a description of the\n language semantics.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-Sindre.html",
        "fct-type": "module",
        "title": "Sindre"
      },
      "index": {
        "description": "General definitions for the Sindre programming language The documentation for this module does not include description of the language semantics",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Sindre",
        "normalized": "",
        "package": "sindre",
        "partial": "Sindre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eReaction to an event.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "Reaction to an event",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Action",
        "normalized": "",
        "package": "sindre",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Align",
      "description": {
        "fct-descr": "\u003cp\u003eInstruction on how to align a smaller interval within a larger\n interval.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Align",
        "fct-type": "data",
        "title": "Align"
      },
      "index": {
        "description": "Instruction on how to align smaller interval within larger interval",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Align",
        "normalized": "",
        "package": "sindre",
        "partial": "Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Arguments",
      "description": {
        "fct-descr": "\u003cp\u003eThe arguments passed to the Sindre program from the command line.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#Arguments",
        "fct-type": "type",
        "title": "Arguments"
      },
      "index": {
        "description": "The arguments passed to the Sindre program from the command line",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Arguments",
        "normalized": "",
        "package": "sindre",
        "partial": "Arguments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Chord",
      "description": {
        "fct-descr": "\u003cp\u003eA combination of a set of modifier keys and a primary key,\n representing a complete piece of keyboard input.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#Chord",
        "fct-type": "type",
        "title": "Chord"
      },
      "index": {
        "description": "combination of set of modifier keys and primary key representing complete piece of keyboard input",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Chord",
        "normalized": "",
        "package": "sindre",
        "partial": "Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Constraints",
      "description": {
        "fct-descr": "\u003cp\u003eExternally-imposed optional minimum and maximum values for width\n and height.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#Constraints",
        "fct-type": "type",
        "title": "Constraints"
      },
      "index": {
        "description": "Externally-imposed optional minimum and maximum values for width and height",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Constraints",
        "normalized": "",
        "package": "sindre",
        "partial": "Constraints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:DimNeed",
      "description": {
        "fct-descr": "\u003cp\u003eA size constraint in one dimension.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#DimNeed",
        "fct-type": "data",
        "title": "DimNeed"
      },
      "index": {
        "description": "size constraint in one dimension",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "DimNeed",
        "normalized": "",
        "package": "sindre",
        "partial": "Dim Need",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eSomething that happened in the world.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Something that happened in the world",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Event",
        "normalized": "",
        "package": "sindre",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:EventSource",
      "description": {
        "fct-descr": "\u003cp\u003eThe origin of an event.  This is used when determining where to\n handle it.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#EventSource",
        "fct-type": "data",
        "title": "EventSource"
      },
      "index": {
        "description": "The origin of an event This is used when determining where to handle it",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "EventSource",
        "normalized": "",
        "package": "sindre",
        "partial": "Event Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eThe syntax of Sindre expressions.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "The syntax of Sindre expressions",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Expr",
        "normalized": "",
        "package": "sindre",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Function",
      "description": {
        "fct-descr": "\u003cp\u003eA function consists of lexically bound parameters and a body.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Function",
        "fct-type": "data",
        "title": "Function"
      },
      "index": {
        "description": "function consists of lexically bound parameters and body",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Function",
        "normalized": "",
        "package": "sindre",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:GUI",
      "description": {
        "fct-descr": "\u003cp\u003eA Sindre GUI is a recursive tree, with each node representing a\n single widget and consisting of the following fields.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#GUI",
        "fct-type": "data",
        "title": "GUI"
      },
      "index": {
        "description": "Sindre GUI is recursive tree with each node representing single widget and consisting of the following fields",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "GUI",
        "normalized": "",
        "package": "sindre",
        "partial": "GUI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Identifier",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of names (such as variables and classes) in the syntax\n tree.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#Identifier",
        "fct-type": "type",
        "title": "Identifier"
      },
      "index": {
        "description": "The type of names such as variables and classes in the syntax tree",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Identifier",
        "normalized": "",
        "package": "sindre",
        "partial": "Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eEither a key corresponding to a visible character, or a control\n key not associated with any character.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "Either key corresponding to visible character or control key not associated with any character",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Key",
        "normalized": "",
        "package": "sindre",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:KeyModifier",
      "description": {
        "fct-descr": "\u003cp\u003eA keyboard modifier key.  The precise meaning (and location) of\n these is somewhat platform-dependent.  Note that the \u003ccode\u003eShift\u003c/code\u003e\n modifier should not be passed along if the associated key is a\n \u003ccode\u003eCharKey\u003c/code\u003e, as \u003ccode\u003eShift\u003c/code\u003e will already have been handled.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#KeyModifier",
        "fct-type": "data",
        "title": "KeyModifier"
      },
      "index": {
        "description": "keyboard modifier key The precise meaning and location of these is somewhat platform-dependent Note that the Shift modifier should not be passed along if the associated key is CharKey as Shift will already have been handled",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "KeyModifier",
        "normalized": "",
        "package": "sindre",
        "partial": "Key Modifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:ObjectNum",
      "description": {
        "fct-descr": "\u003cp\u003eLow-level reference to an object.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#ObjectNum",
        "fct-type": "type",
        "title": "ObjectNum"
      },
      "index": {
        "description": "Low-level reference to an object",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "ObjectNum",
        "normalized": "",
        "package": "sindre",
        "partial": "Object Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:ObjectRef",
      "description": {
        "fct-descr": "\u003cp\u003eHigh-level reference to an object, containing its class and name\n (if any) as well.  For non-widgets, the object name is the same as\n the object class.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#ObjectRef",
        "fct-type": "type",
        "title": "ObjectRef"
      },
      "index": {
        "description": "High-level reference to an object containing its class and name if any as well For non-widgets the object name is the same as the object class",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "ObjectRef",
        "normalized": "",
        "package": "sindre",
        "partial": "Object Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:P",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a value with source position information.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#P",
        "fct-type": "data",
        "title": "P"
      },
      "index": {
        "description": "Wrap value with source position information",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "P",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Pattern",
      "description": {
        "fct-descr": "\u003cp\u003eA description of an event used to indicate how to handle\n different events.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Pattern",
        "fct-type": "data",
        "title": "Pattern"
      },
      "index": {
        "description": "description of an event used to indicate how to handle different events",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Pattern",
        "normalized": "",
        "package": "sindre",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Program",
      "description": {
        "fct-descr": "\u003cp\u003eA complete Sindre program.  Note that this is intentionally\n defined such that some invalid programs, like those with duplicate\n definitions can be represented - the compiler (see\n \u003ca\u003eSindre.Compiler\u003c/a\u003e) should detect and handle such errors.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Program",
        "fct-type": "data",
        "title": "Program"
      },
      "index": {
        "description": "complete Sindre program Note that this is intentionally defined such that some invalid programs like those with duplicate definitions can be represented the compiler see Sindre.Compiler should detect and handle such errors",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Program",
        "normalized": "",
        "package": "sindre",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Rectangle",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangle represented as its upper-left corner, width and\n height.  You should never create rectangles with negative\n dimensions, and the functions in this module make no guarantee to\n their behaviour if you do.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Rectangle",
        "fct-type": "data",
        "title": "Rectangle"
      },
      "index": {
        "description": "rectangle represented as its upper-left corner width and height You should never create rectangles with negative dimensions and the functions in this module make no guarantee to their behaviour if you do",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Rectangle",
        "normalized": "",
        "package": "sindre",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SindreOption",
      "description": {
        "fct-descr": "\u003cp\u003eA command line argument.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#SindreOption",
        "fct-type": "type",
        "title": "SindreOption"
      },
      "index": {
        "description": "command line argument",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "SindreOption",
        "normalized": "",
        "package": "sindre",
        "partial": "Sindre Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SourcePat",
      "description": {
        "fct-descr": "\u003cp\u003eDescription of sets of sources, values of this type can be used\n to pattern-match \u003ccode\u003eEventSource\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#SourcePat",
        "fct-type": "data",
        "title": "SourcePat"
      },
      "index": {
        "description": "Description of sets of sources values of this type can be used to pattern-match EventSource",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "SourcePat",
        "normalized": "",
        "package": "sindre",
        "partial": "Source Pat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SourcePos",
      "description": {
        "fct-descr": "\u003cp\u003eA position in a source file, consisting of a file name,\n one-indexed line number, and one-indexed column number.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#SourcePos",
        "fct-type": "type",
        "title": "SourcePos"
      },
      "index": {
        "description": "position in source file consisting of file name one-indexed line number and one-indexed column number",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "SourcePos",
        "normalized": "",
        "package": "sindre",
        "partial": "Source Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SpaceNeed",
      "description": {
        "fct-descr": "\u003cp\u003eSize constraints in both dimensions.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#SpaceNeed",
        "fct-type": "type",
        "title": "SpaceNeed"
      },
      "index": {
        "description": "Size constraints in both dimensions",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "SpaceNeed",
        "normalized": "",
        "package": "sindre",
        "partial": "Space Need",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:SpaceUse",
      "description": {
        "fct-descr": "\u003cp\u003eThe amount of space actually used by a widget.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#SpaceUse",
        "fct-type": "type",
        "title": "SpaceUse"
      },
      "index": {
        "description": "The amount of space actually used by widget",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "SpaceUse",
        "normalized": "",
        "package": "sindre",
        "partial": "Space Use",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Stmt",
      "description": {
        "fct-descr": "\u003cp\u003eThe syntax of Sindre statements.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "data",
        "title": "Stmt"
      },
      "index": {
        "description": "The syntax of Sindre statements",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Stmt",
        "normalized": "",
        "package": "sindre",
        "partial": "Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eDynamically typed run-time value in the Sindre language.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Sindre.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "Dynamically typed run-time value in the Sindre language",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Value",
        "normalized": "",
        "package": "sindre",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#t:WidgetRef",
      "description": {
        "fct-descr": "\u003cp\u003eHigh-level reference to a widget.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-Sindre.html#WidgetRef",
        "fct-type": "type",
        "title": "WidgetRef"
      },
      "index": {
        "description": "High-level reference to widget",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "WidgetRef",
        "normalized": "",
        "package": "sindre",
        "partial": "Widget Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:AlignCenter",
      "description": {
        "fct-descr": "\u003cp\u003eAlign towards the center of the interval.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "AlignCenter",
        "fct-source": "src/Sindre-Sindre.html#Align",
        "fct-type": "function",
        "title": "AlignCenter"
      },
      "index": {
        "description": "Align towards the center of the interval",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "AlignCenter",
        "normalized": "",
        "package": "sindre",
        "partial": "Align Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:AlignNeg",
      "description": {
        "fct-descr": "\u003cp\u003eAlign towards negative infinity.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "AlignNeg",
        "fct-source": "src/Sindre-Sindre.html#Align",
        "fct-type": "function",
        "title": "AlignNeg"
      },
      "index": {
        "description": "Align towards negative infinity",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "AlignNeg",
        "normalized": "",
        "package": "sindre",
        "partial": "Align Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:AlignPos",
      "description": {
        "fct-descr": "\u003cp\u003eAlign towards positive infinity.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "AlignPos",
        "fct-source": "src/Sindre-Sindre.html#Align",
        "fct-type": "function",
        "title": "AlignPos"
      },
      "index": {
        "description": "Align towards positive infinity",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "AlignPos",
        "normalized": "",
        "package": "sindre",
        "partial": "Align Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Assign",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Assign (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Assign"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Assign",
        "normalized": "",
        "package": "sindre",
        "partial": "Assign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:BackendSrc",
      "description": {
        "fct-descr": "\u003cp\u003eThe source is something within the\n bowels of the active backend,\n probably from the external world.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "BackendSrc",
        "fct-source": "src/Sindre-Sindre.html#EventSource",
        "fct-type": "function",
        "title": "BackendSrc"
      },
      "index": {
        "description": "The source is something within the bowels of the active backend probably from the external world",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "BackendSrc",
        "normalized": "",
        "package": "sindre",
        "partial": "Backend Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Break",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Break",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "Break"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Break",
        "normalized": "",
        "package": "sindre",
        "partial": "Break",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:CharKey",
      "description": {
        "fct-descr": "\u003cp\u003eUnicode character associated with the key.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "CharKey Char",
        "fct-source": "src/Sindre-Sindre.html#Key",
        "fct-type": "function",
        "title": "CharKey"
      },
      "index": {
        "description": "Unicode character associated with the key",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "CharKey",
        "normalized": "",
        "package": "sindre",
        "partial": "Char Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:ChordPattern",
      "description": {
        "fct-descr": "\u003cp\u003eMatch if the event is a chord.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "ChordPattern Chord",
        "fct-source": "src/Sindre-Sindre.html#Pattern",
        "fct-type": "function",
        "title": "ChordPattern"
      },
      "index": {
        "description": "Match if the event is chord",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "ChordPattern",
        "normalized": "",
        "package": "sindre",
        "partial": "Chord Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Concat",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Concat (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Concat",
        "normalized": "",
        "package": "sindre",
        "partial": "Concat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Cond",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Cond (P Expr) (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Cond"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Cond",
        "normalized": "",
        "package": "sindre",
        "partial": "Cond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Continue",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Continue",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "Continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Continue",
        "normalized": "",
        "package": "sindre",
        "partial": "Continue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Control",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Control",
        "fct-source": "src/Sindre-Sindre.html#KeyModifier",
        "fct-type": "function",
        "title": "Control"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Control",
        "normalized": "",
        "package": "sindre",
        "partial": "Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:CtrlKey",
      "description": {
        "fct-descr": "\u003cp\u003eName of the control key, using X11\n key names (for example \u003ccode\u003eBackSpace\u003c/code\u003e or\n \u003ccode\u003eReturn\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "CtrlKey String",
        "fct-source": "src/Sindre-Sindre.html#Key",
        "fct-type": "function",
        "title": "CtrlKey"
      },
      "index": {
        "description": "Name of the control key using X11 key names for example BackSpace or Return",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "CtrlKey",
        "normalized": "",
        "package": "sindre",
        "partial": "Ctrl Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Dict",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Dict (Map Value Value)",
        "fct-source": "src/Sindre-Sindre.html#Value",
        "fct-type": "function",
        "title": "Dict"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Dict",
        "normalized": "",
        "package": "sindre",
        "partial": "Dict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Divided",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Divided (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Divided"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Divided",
        "normalized": "",
        "package": "sindre",
        "partial": "Divided",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Do",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Do [P Stmt] (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "Do"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Do",
        "normalized": "Do[P Stmt](P Expr)",
        "package": "sindre",
        "partial": "Do",
        "signature": "Do[P Stmt](P Expr)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Equal",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Equal (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Equal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Equal",
        "normalized": "",
        "package": "sindre",
        "partial": "Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Exact",
      "description": {
        "fct-descr": "\u003cp\u003eExactly this many pixels.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Exact Integer",
        "fct-source": "src/Sindre-Sindre.html#DimNeed",
        "fct-type": "function",
        "title": "Exact"
      },
      "index": {
        "description": "Exactly this many pixels",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Exact",
        "normalized": "",
        "package": "sindre",
        "partial": "Exact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Exit",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Exit (Maybe (P Expr))",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "Exit"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Exit",
        "normalized": "",
        "package": "sindre",
        "partial": "Exit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Expr",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Expr (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "Expr"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Expr",
        "normalized": "",
        "package": "sindre",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:FieldOf",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "FieldOf Identifier (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "FieldOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "FieldOf",
        "normalized": "",
        "package": "sindre",
        "partial": "Field Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:FieldSrc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFieldSrc obj f\u003c/code\u003e designates that the source of\n the event is the property \u003ccode\u003ef\u003c/code\u003e of \u003ccode\u003eobj\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "FieldSrc ObjectRef Identifier",
        "fct-source": "src/Sindre-Sindre.html#EventSource",
        "fct-type": "function",
        "title": "FieldSrc"
      },
      "index": {
        "description": "FieldSrc obj designates that the source of the event is the property of obj",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "FieldSrc",
        "normalized": "",
        "package": "sindre",
        "partial": "Field Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Focus",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Focus (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "Focus"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Focus",
        "normalized": "",
        "package": "sindre",
        "partial": "Focus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:For",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "For (P Expr) (P Expr) (P Expr) [P Stmt]",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "For"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "For",
        "normalized": "For(P Expr)(P Expr)(P Expr)[P Stmt]",
        "package": "sindre",
        "partial": "For",
        "signature": "For(P Expr)(P Expr)(P Expr)[P Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Funcall",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Funcall Identifier [P Expr]",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Funcall"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Funcall",
        "normalized": "Funcall Identifier[P Expr]",
        "package": "sindre",
        "partial": "Funcall",
        "signature": "Funcall Identifier[P Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Function",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Function [Identifier] [P Stmt]",
        "fct-source": "src/Sindre-Sindre.html#Function",
        "fct-type": "function",
        "title": "Function"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Function",
        "normalized": "Function[Identifier][P Stmt]",
        "package": "sindre",
        "partial": "Function",
        "signature": "Function[Identifier][P Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:GUI",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "GUI",
        "fct-source": "src/Sindre-Sindre.html#GUI",
        "fct-type": "function",
        "title": "GUI"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "GUI",
        "normalized": "",
        "package": "sindre",
        "partial": "GUI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:GenericSource",
      "description": {
        "fct-descr": "\u003cp\u003eFor \u003ccode\u003eGenericSource cn k fk\u003c/code\u003e, the source must be\n of class \u003ccode\u003ecn\u003c/code\u003e.  If \u003ccode\u003efk\u003c/code\u003e is \u003ccode\u003eJust fk'\u003c/code\u003e, the source\n must also be the field named \u003ccode\u003efk'\u003c/code\u003e.  The variable\n named \u003ccode\u003ek\u003c/code\u003e should be bound to the actual object if\n this pattern matches.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "GenericSource Identifier Identifier (Maybe Identifier)",
        "fct-source": "src/Sindre-Sindre.html#SourcePat",
        "fct-type": "function",
        "title": "GenericSource"
      },
      "index": {
        "description": "For GenericSource cn fk the source must be of class cn If fk is Just fk the source must also be the field named fk The variable named should be bound to the actual object if this pattern matches",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "GenericSource",
        "normalized": "",
        "package": "sindre",
        "partial": "Generic Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Hyper",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Hyper",
        "fct-source": "src/Sindre-Sindre.html#KeyModifier",
        "fct-type": "function",
        "title": "Hyper"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Hyper",
        "normalized": "",
        "package": "sindre",
        "partial": "Hyper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:If",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "If (P Expr) [P Stmt] [P Stmt]",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "If"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "If",
        "normalized": "If(P Expr)[P Stmt][P Stmt]",
        "package": "sindre",
        "partial": "If",
        "signature": "If(P Expr)[P Stmt][P Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:KeyPress",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "KeyPress Chord",
        "fct-source": "src/Sindre-Sindre.html#Event",
        "fct-type": "function",
        "title": "KeyPress"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "KeyPress",
        "normalized": "",
        "package": "sindre",
        "partial": "Key Press",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:LessEql",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "LessEql (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "LessEql"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "LessEql",
        "normalized": "",
        "package": "sindre",
        "partial": "Less Eql",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:LessThan",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "LessThan (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "LessThan"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "LessThan",
        "normalized": "",
        "package": "sindre",
        "partial": "Less Than",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Literal",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Literal Value",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Literal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Literal",
        "normalized": "",
        "package": "sindre",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Lookup",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Lookup (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Lookup",
        "normalized": "",
        "package": "sindre",
        "partial": "Lookup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Max",
      "description": {
        "fct-descr": "\u003cp\u003eAt most this many pixels.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Max Integer",
        "fct-source": "src/Sindre-Sindre.html#DimNeed",
        "fct-type": "function",
        "title": "Max"
      },
      "index": {
        "description": "At most this many pixels",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Max",
        "normalized": "",
        "package": "sindre",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Meta",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Meta",
        "fct-source": "src/Sindre-Sindre.html#KeyModifier",
        "fct-type": "function",
        "title": "Meta"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Meta",
        "normalized": "",
        "package": "sindre",
        "partial": "Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Methcall",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Methcall (P Expr) Identifier [P Expr]",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Methcall"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Methcall",
        "normalized": "Methcall(P Expr)Identifier[P Expr]",
        "package": "sindre",
        "partial": "Methcall",
        "signature": "Methcall(P Expr)Identifier[P Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Min",
      "description": {
        "fct-descr": "\u003cp\u003eAt minimum this many pixels.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Min Integer",
        "fct-source": "src/Sindre-Sindre.html#DimNeed",
        "fct-type": "function",
        "title": "Min"
      },
      "index": {
        "description": "At minimum this many pixels",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Min",
        "normalized": "",
        "package": "sindre",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Minus",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Minus (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Minus"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Minus",
        "normalized": "",
        "package": "sindre",
        "partial": "Minus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Modulo",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Modulo (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Modulo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Modulo",
        "normalized": "",
        "package": "sindre",
        "partial": "Modulo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:NamedEvent",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "NamedEvent",
        "fct-source": "src/Sindre-Sindre.html#Event",
        "fct-type": "function",
        "title": "NamedEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "NamedEvent",
        "normalized": "",
        "package": "sindre",
        "partial": "Named Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:NamedSource",
      "description": {
        "fct-descr": "\u003cp\u003eFor \u003ccode\u003eNamedSource k fk\u003c/code\u003e, the source must be the\n object named \u003ccode\u003ek\u003c/code\u003e.  If \u003ccode\u003efk\u003c/code\u003e is \u003ccode\u003eJust fk'\u003c/code\u003e, the source\n must also be the field named \u003ccode\u003efk'\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "NamedSource Identifier (Maybe Identifier)",
        "fct-source": "src/Sindre-Sindre.html#SourcePat",
        "fct-type": "function",
        "title": "NamedSource"
      },
      "index": {
        "description": "For NamedSource fk the source must be the object named If fk is Just fk the source must also be the field named fk",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "NamedSource",
        "normalized": "",
        "package": "sindre",
        "partial": "Named Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Next",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Next",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "Next"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Next",
        "normalized": "",
        "package": "sindre",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Not",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Not (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Not",
        "normalized": "",
        "package": "sindre",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Number",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Number Double",
        "fct-source": "src/Sindre-Sindre.html#Value",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Number",
        "normalized": "",
        "package": "sindre",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:ObjectSrc",
      "description": {
        "fct-descr": "\u003cp\u003eThe source is the given object.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "ObjectSrc ObjectRef",
        "fct-source": "src/Sindre-Sindre.html#EventSource",
        "fct-type": "function",
        "title": "ObjectSrc"
      },
      "index": {
        "description": "The source is the given object",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "ObjectSrc",
        "normalized": "",
        "package": "sindre",
        "partial": "Object Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:OrPattern",
      "description": {
        "fct-descr": "\u003cp\u003eMatch if either pattern\n matches.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "OrPattern Pattern Pattern",
        "fct-source": "src/Sindre-Sindre.html#Pattern",
        "fct-type": "function",
        "title": "OrPattern"
      },
      "index": {
        "description": "Match if either pattern matches",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "OrPattern",
        "normalized": "",
        "package": "sindre",
        "partial": "Or Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:P",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "P",
        "fct-source": "src/Sindre-Sindre.html#P",
        "fct-type": "function",
        "title": "P"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "P",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Plus",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Plus (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Plus",
        "normalized": "",
        "package": "sindre",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:PostDec",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "PostDec (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "PostDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "PostDec",
        "normalized": "",
        "package": "sindre",
        "partial": "Post Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:PostInc",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "PostInc (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "PostInc"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "PostInc",
        "normalized": "",
        "package": "sindre",
        "partial": "Post Inc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Print",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Print [P Expr]",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "Print"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Print",
        "normalized": "Print[P Expr]",
        "package": "sindre",
        "partial": "Print",
        "signature": "Print[P Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Program",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Program",
        "fct-source": "src/Sindre-Sindre.html#Program",
        "fct-type": "function",
        "title": "Program"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Program",
        "normalized": "",
        "package": "sindre",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:RaisedTo",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "RaisedTo (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "RaisedTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "RaisedTo",
        "normalized": "",
        "package": "sindre",
        "partial": "Raised To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Rectangle",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Rectangle",
        "fct-source": "src/Sindre-Sindre.html#Rectangle",
        "fct-type": "function",
        "title": "Rectangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Rectangle",
        "normalized": "",
        "package": "sindre",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Reference",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Reference ObjectRef",
        "fct-source": "src/Sindre-Sindre.html#Value",
        "fct-type": "function",
        "title": "Reference"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Reference",
        "normalized": "",
        "package": "sindre",
        "partial": "Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Return",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Return (Maybe (P Expr))",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "Return"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Return",
        "normalized": "",
        "package": "sindre",
        "partial": "Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Shift",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Shift",
        "fct-source": "src/Sindre-Sindre.html#KeyModifier",
        "fct-type": "function",
        "title": "Shift"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Shift",
        "normalized": "",
        "package": "sindre",
        "partial": "Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:SourcedPattern",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eSourcedPattern src ev vars\u003c/code\u003e matches if \u003ccode\u003esrc\u003c/code\u003e\n matches the event source (see \u003ccode\u003e\u003ca\u003eSourcePat\u003c/a\u003e\u003c/code\u003e) an \u003ccode\u003eev\u003c/code\u003e\n matches the event name.  \u003ccode\u003evars\u003c/code\u003e should be bound to\n the values in the payload of the event.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "SourcedPattern",
        "fct-source": "src/Sindre-Sindre.html#Pattern",
        "fct-type": "function",
        "title": "SourcedPattern"
      },
      "index": {
        "description": "SourcedPattern src ev vars matches if src matches the event source see SourcePat an ev matches the event name vars should be bound to the values in the payload of the event",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "SourcedPattern",
        "normalized": "",
        "package": "sindre",
        "partial": "Sourced Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:StmtAction",
      "description": {
        "fct-descr": "\u003cp\u003eExecute these statements.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "StmtAction [P Stmt]",
        "fct-source": "src/Sindre-Sindre.html#Action",
        "fct-type": "function",
        "title": "StmtAction"
      },
      "index": {
        "description": "Execute these statements",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "StmtAction",
        "normalized": "StmtAction[P Stmt]",
        "package": "sindre",
        "partial": "Stmt Action",
        "signature": "StmtAction[P Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:StringV",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "StringV Text",
        "fct-source": "src/Sindre-Sindre.html#Value",
        "fct-type": "function",
        "title": "StringV"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "StringV",
        "normalized": "",
        "package": "sindre",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Super",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Super",
        "fct-source": "src/Sindre-Sindre.html#KeyModifier",
        "fct-type": "function",
        "title": "Super"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Super",
        "normalized": "",
        "package": "sindre",
        "partial": "Super",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Times",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Times (P Expr) (P Expr)",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Times"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Times",
        "normalized": "",
        "package": "sindre",
        "partial": "Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Unlimited",
      "description": {
        "fct-descr": "\u003cp\u003eAs many or as few pixels as necessary.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Unlimited",
        "fct-source": "src/Sindre-Sindre.html#DimNeed",
        "fct-type": "function",
        "title": "Unlimited"
      },
      "index": {
        "description": "As many or as few pixels as necessary",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Unlimited",
        "normalized": "",
        "package": "sindre",
        "partial": "Unlimited",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:Var",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Var Identifier",
        "fct-source": "src/Sindre-Sindre.html#Expr",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "Var",
        "normalized": "",
        "package": "sindre",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:While",
      "description": {
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "While (P Expr) [P Stmt]",
        "fct-source": "src/Sindre-Sindre.html#Stmt",
        "fct-type": "function",
        "title": "While"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "While",
        "normalized": "While(P Expr)[P Stmt]",
        "package": "sindre",
        "partial": "While",
        "signature": "While(P Expr)[P Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:adjustRect",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eadjustRect (walign, halign) bigrect smallrect\u003c/code\u003e returns a\n rectangle with the same dimensions as \u003ccode\u003esmallrect\u003c/code\u003e aligned within\n \u003ccode\u003ebigrect\u003c/code\u003e in both dimensions.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "(Align, Align) -\u003e Rectangle -\u003e Rectangle -\u003e Rectangle",
        "fct-source": "src/Sindre-Sindre.html#adjustRect",
        "fct-type": "function",
        "title": "adjustRect"
      },
      "index": {
        "description": "adjustRect walign halign bigrect smallrect returns rectangle with the same dimensions as smallrect aligned within bigrect in both dimensions",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "adjustRect",
        "normalized": "(Align,Align)-\u003eRectangle-\u003eRectangle-\u003eRectangle",
        "package": "sindre",
        "partial": "Rect",
        "signature": "(Align,Align)-\u003eRectangle-\u003eRectangle-\u003eRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:align",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ealign a lower x upper\u003c/code\u003e, where \u003ccode\u003elower\u003c=upper\u003c/code\u003e, aligns a\n subinterval of length \u003ccode\u003ex\u003c/code\u003e in the interval \u003ccode\u003elower\u003c/code\u003e to \u003ccode\u003eupper\u003c/code\u003e,\n returning the coordinate at which the aligned subinterval starts.\n For example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ealign AlignCenter 2 4 10\n\u003c/code\u003e\u003c/strong\u003e4\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ealign AlignNeg 2 4 10\n\u003c/code\u003e\u003c/strong\u003e2\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ealign AlignPos 2 4 10\n\u003c/code\u003e\u003c/strong\u003e6\n\u003c/pre\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Align -\u003e a -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Sindre-Sindre.html#align",
        "fct-type": "function",
        "title": "align"
      },
      "index": {
        "description": "align lower upper where lower upper aligns subinterval of length in the interval lower to upper returning the coordinate at which the aligned subinterval starts For example align AlignCenter align AlignNeg align AlignPos",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "align",
        "normalized": "Align-\u003ea-\u003ea-\u003ea-\u003ea",
        "package": "sindre",
        "partial": "",
        "signature": "Align-\u003ea-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ex \u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e gives a value containing \u003ccode\u003ex\u003c/code\u003e, but with the same source\n position as \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "a -\u003e P b -\u003e P a",
        "fct-source": "src/Sindre-Sindre.html#at",
        "fct-type": "function",
        "title": "at"
      },
      "index": {
        "description": "at gives value containing but with the same source position as",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "at",
        "normalized": "a-\u003eP b-\u003eP a",
        "package": "sindre",
        "partial": "",
        "signature": "a-\u003eP b-\u003eP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:constrainNeed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003econstrainNeed need constraints\u003c/code\u003e reduces the space requirement\n given by \u003ccode\u003eneed\u003c/code\u003e in order to fulfill \u003ccode\u003econstraints\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "SpaceNeed -\u003e Constraints -\u003e SpaceNeed",
        "fct-source": "src/Sindre-Sindre.html#constrainNeed",
        "fct-type": "function",
        "title": "constrainNeed"
      },
      "index": {
        "description": "constrainNeed need constraints reduces the space requirement given by need in order to fulfill constraints",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "constrainNeed",
        "normalized": "SpaceNeed-\u003eConstraints-\u003eSpaceNeed",
        "package": "sindre",
        "partial": "Need",
        "signature": "SpaceNeed-\u003eConstraints-\u003eSpaceNeed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:eventName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the event.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Identifier",
        "fct-source": "src/Sindre-Sindre.html#Event",
        "fct-type": "function",
        "title": "eventName"
      },
      "index": {
        "description": "The name of the event",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "eventName",
        "normalized": "",
        "package": "sindre",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:eventSource",
      "description": {
        "fct-descr": "\u003cp\u003eWhere it's from.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "EventSource",
        "fct-source": "src/Sindre-Sindre.html#Event",
        "fct-type": "function",
        "title": "eventSource"
      },
      "index": {
        "description": "Where it from",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "eventSource",
        "normalized": "",
        "package": "sindre",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:eventValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe payload of the event.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "[Value]",
        "fct-source": "src/Sindre-Sindre.html#Event",
        "fct-type": "function",
        "title": "eventValue"
      },
      "index": {
        "description": "The payload of the event",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "eventValue",
        "normalized": "[Value]",
        "package": "sindre",
        "partial": "Value",
        "signature": "[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:falsity",
      "description": {
        "fct-descr": "\u003cp\u003eCanonical false value, see \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCanonical true value, see \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Value",
        "fct-source": "src/Sindre-Sindre.html#truth",
        "fct-type": "function",
        "title": "falsity"
      },
      "index": {
        "description": "Canonical false value see true Canonical true value see true",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "falsity",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:fitRect",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efitRect rect need\u003c/code\u003e yields a rectangle as large as possible, but\n no larger than \u003ccode\u003erect\u003c/code\u003e, that tries to fulfill the constraints\n \u003ccode\u003eneed\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Rectangle -\u003e SpaceNeed -\u003e Rectangle",
        "fct-source": "src/Sindre-Sindre.html#fitRect",
        "fct-type": "function",
        "title": "fitRect"
      },
      "index": {
        "description": "fitRect rect need yields rectangle as large as possible but no larger than rect that tries to fulfill the constraints need",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "fitRect",
        "normalized": "Rectangle-\u003eSpaceNeed-\u003eRectangle",
        "package": "sindre",
        "partial": "Rect",
        "signature": "Rectangle-\u003eSpaceNeed-\u003eRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:nowhere",
      "description": {
        "fct-descr": "\u003cp\u003eA default position when no other is available.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "SourcePos",
        "fct-source": "src/Sindre-Sindre.html#nowhere",
        "fct-type": "function",
        "title": "nowhere"
      },
      "index": {
        "description": "default position when no other is available",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "nowhere",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:patternEvent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Identifier",
        "fct-source": "src/Sindre-Sindre.html#Pattern",
        "fct-type": "function",
        "title": "patternEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "patternEvent",
        "normalized": "",
        "package": "sindre",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:patternSource",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "SourcePat",
        "fct-source": "src/Sindre-Sindre.html#Pattern",
        "fct-type": "function",
        "title": "patternSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "patternSource",
        "normalized": "",
        "package": "sindre",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:patternVars",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "[Identifier]",
        "fct-source": "src/Sindre-Sindre.html#Pattern",
        "fct-type": "function",
        "title": "patternVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "patternVars",
        "normalized": "[Identifier]",
        "package": "sindre",
        "partial": "Vars",
        "signature": "[Identifier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:position",
      "description": {
        "fct-descr": "\u003cp\u003ePrettyprint a source position in a human-readable form.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eposition (\"foobar.sindre\", 5, 15)\n\u003c/code\u003e\u003c/strong\u003e\"foobar.sindre:5:15: \"\n\u003c/pre\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "SourcePos -\u003e String",
        "fct-source": "src/Sindre-Sindre.html#position",
        "fct-type": "function",
        "title": "position"
      },
      "index": {
        "description": "Prettyprint source position in human-readable form position foobar.sindre foobar.sindre",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "position",
        "normalized": "SourcePos-\u003eString",
        "package": "sindre",
        "partial": "",
        "signature": "SourcePos-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programActions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "[P (Pattern, Action)]",
        "fct-source": "src/Sindre-Sindre.html#Program",
        "fct-type": "function",
        "title": "programActions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "programActions",
        "normalized": "[P(Pattern,Action)]",
        "package": "sindre",
        "partial": "Actions",
        "signature": "[P(Pattern,Action)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programBegin",
      "description": {
        "fct-descr": "\u003cp\u003eThe contents of the \u003ccode\u003eBEGIN\u003c/code\u003e block.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "[P Stmt]",
        "fct-source": "src/Sindre-Sindre.html#Program",
        "fct-type": "function",
        "title": "programBegin"
      },
      "index": {
        "description": "The contents of the BEGIN block",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "programBegin",
        "normalized": "[P Stmt]",
        "package": "sindre",
        "partial": "Begin",
        "signature": "[P Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programFunctions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "[P (Identifier, Function)]",
        "fct-source": "src/Sindre-Sindre.html#Program",
        "fct-type": "function",
        "title": "programFunctions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "programFunctions",
        "normalized": "[P(Identifier,Function)]",
        "package": "sindre",
        "partial": "Functions",
        "signature": "[P(Identifier,Function)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programGUI",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "(Maybe (P Expr), GUI)",
        "fct-source": "src/Sindre-Sindre.html#Program",
        "fct-type": "function",
        "title": "programGUI"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "programGUI",
        "normalized": "(Maybe(P Expr),GUI)",
        "package": "sindre",
        "partial": "GUI",
        "signature": "(Maybe(P Expr),GUI)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programGlobals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "[P (Identifier, P Expr)]",
        "fct-source": "src/Sindre-Sindre.html#Program",
        "fct-type": "function",
        "title": "programGlobals"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "programGlobals",
        "normalized": "[P(Identifier,P Expr)]",
        "package": "sindre",
        "partial": "Globals",
        "signature": "[P(Identifier,P Expr)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:programOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "[P (Identifier, (SindreOption, Maybe Value))]",
        "fct-source": "src/Sindre-Sindre.html#Program",
        "fct-type": "function",
        "title": "programOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "programOptions",
        "normalized": "[P(Identifier,(SindreOption,Maybe Value))]",
        "package": "sindre",
        "partial": "Options",
        "signature": "[P(Identifier,(SindreOption,Maybe Value))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectHeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Integer",
        "fct-source": "src/Sindre-Sindre.html#Rectangle",
        "fct-type": "function",
        "title": "rectHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "rectHeight",
        "normalized": "",
        "package": "sindre",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectTranspose",
      "description": {
        "fct-descr": "\u003cp\u003eFlip the x and y coordinates and width and height of a rectangle,\n in a sense rotating it ninety degrees.  Note that \u003ccode\u003erectTranspose\n . rectTranspose = id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Rectangle -\u003e Rectangle",
        "fct-source": "src/Sindre-Sindre.html#rectTranspose",
        "fct-type": "function",
        "title": "rectTranspose"
      },
      "index": {
        "description": "Flip the and coordinates and width and height of rectangle in sense rotating it ninety degrees Note that rectTranspose rectTranspose id",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "rectTranspose",
        "normalized": "Rectangle-\u003eRectangle",
        "package": "sindre",
        "partial": "Transpose",
        "signature": "Rectangle-\u003eRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Integer",
        "fct-source": "src/Sindre-Sindre.html#Rectangle",
        "fct-type": "function",
        "title": "rectWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "rectWidth",
        "normalized": "",
        "package": "sindre",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectX",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Integer",
        "fct-source": "src/Sindre-Sindre.html#Rectangle",
        "fct-type": "function",
        "title": "rectX"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "rectX",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:rectY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Integer",
        "fct-source": "src/Sindre-Sindre.html#Rectangle",
        "fct-type": "function",
        "title": "rectY"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "rectY",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:sourcePos",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "SourcePos",
        "fct-source": "src/Sindre-Sindre.html#P",
        "fct-type": "function",
        "title": "sourcePos"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "sourcePos",
        "normalized": "",
        "package": "sindre",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:splitHoriz",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esplitHoriz rect dims\u003c/code\u003e splits \u003ccode\u003erect\u003c/code\u003e horizontally into a number\n of non-overlapping equal-width rectangles stacked on top of each\n other.  \u003ccode\u003edims\u003c/code\u003e is a list of height requirements that the function\n will attempt to fulfill as best it is able.  The union of the list\n of returned rectangles will always be equal to \u003ccode\u003erect\u003c/code\u003e.  No\n rectangle will ever have negative dimensions.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Rectangle -\u003e [DimNeed] -\u003e [Rectangle]",
        "fct-source": "src/Sindre-Sindre.html#splitHoriz",
        "fct-type": "function",
        "title": "splitHoriz"
      },
      "index": {
        "description": "splitHoriz rect dims splits rect horizontally into number of non-overlapping equal-width rectangles stacked on top of each other dims is list of height requirements that the function will attempt to fulfill as best it is able The union of the list of returned rectangles will always be equal to rect No rectangle will ever have negative dimensions",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "splitHoriz",
        "normalized": "Rectangle-\u003e[DimNeed]-\u003e[Rectangle]",
        "package": "sindre",
        "partial": "Horiz",
        "signature": "Rectangle-\u003e[DimNeed]-\u003e[Rectangle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:splitVert",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003esplitHoriz\u003c/code\u003e, but splits vertically instead of horizontally,\n so the rectangles will be next to each other.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Rectangle -\u003e [DimNeed] -\u003e [Rectangle]",
        "fct-source": "src/Sindre-Sindre.html#splitVert",
        "fct-type": "function",
        "title": "splitVert"
      },
      "index": {
        "description": "As splitHoriz but splits vertically instead of horizontally so the rectangles will be next to each other",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "splitVert",
        "normalized": "Rectangle-\u003e[DimNeed]-\u003e[Rectangle]",
        "package": "sindre",
        "partial": "Vert",
        "signature": "Rectangle-\u003e[DimNeed]-\u003e[Rectangle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:string",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e returns a Sindre string.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e Value",
        "fct-source": "src/Sindre-Sindre.html#string",
        "fct-type": "function",
        "title": "string"
      },
      "index": {
        "description": "string returns Sindre string",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "string",
        "normalized": "String-\u003eValue",
        "package": "sindre",
        "partial": "",
        "signature": "String-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:true",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etrue v\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ev\u003c/code\u003e is interpreted as a true value in\n Sindre, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Value -\u003e Bool",
        "fct-source": "src/Sindre-Sindre.html#true",
        "fct-type": "function",
        "title": "true"
      },
      "index": {
        "description": "true returns True if is interpreted as true value in Sindre False otherwise",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "true",
        "normalized": "Value-\u003eBool",
        "package": "sindre",
        "partial": "",
        "signature": "Value-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:truth",
      "description": {
        "fct-descr": "\u003cp\u003eCanonical false value, see \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCanonical true value, see \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Value",
        "fct-source": "src/Sindre-Sindre.html#truth",
        "fct-type": "function",
        "title": "truth"
      },
      "index": {
        "description": "Canonical false value see true Canonical true value see true",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "truth",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:unP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "a",
        "fct-source": "src/Sindre-Sindre.html#P",
        "fct-type": "function",
        "title": "unP"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "unP",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:widgetArgs",
      "description": {
        "fct-descr": "\u003cp\u003eThe arguments passed to the widget.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "WidgetArgs",
        "fct-source": "src/Sindre-Sindre.html#GUI",
        "fct-type": "function",
        "title": "widgetArgs"
      },
      "index": {
        "description": "The arguments passed to the widget",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "widgetArgs",
        "normalized": "",
        "package": "sindre",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:widgetChildren",
      "description": {
        "fct-descr": "\u003cp\u003eChildren of the widget, if any.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "[(Maybe (P Expr), GUI)]",
        "fct-source": "src/Sindre-Sindre.html#GUI",
        "fct-type": "function",
        "title": "widgetChildren"
      },
      "index": {
        "description": "Children of the widget if any",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "widgetChildren",
        "normalized": "[(Maybe(P Expr),GUI)]",
        "package": "sindre",
        "partial": "Children",
        "signature": "[(Maybe(P Expr),GUI)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:widgetClass",
      "description": {
        "fct-descr": "\u003cp\u003eClass of the widget.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "P Identifier",
        "fct-source": "src/Sindre-Sindre.html#GUI",
        "fct-type": "function",
        "title": "widgetClass"
      },
      "index": {
        "description": "Class of the widget",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "widgetClass",
        "normalized": "",
        "package": "sindre",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Sindre.html#v:widgetName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the widget, if any.\n\u003c/p\u003e",
        "fct-module": "Sindre.Sindre",
        "fct-package": "sindre",
        "fct-signature": "Maybe Identifier",
        "fct-source": "src/Sindre-Sindre.html#GUI",
        "fct-type": "function",
        "title": "widgetName"
      },
      "index": {
        "description": "Name of the widget if any",
        "hierarchy": "Sindre Sindre",
        "module": "Sindre.Sindre",
        "name": "widgetName",
        "normalized": "",
        "package": "sindre",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious utility bits and pieces.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Various utility bits and pieces",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "Util",
        "normalized": "",
        "package": "sindre",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:clamp",
      "description": {
        "fct-descr": "\u003cp\u003eBound a value by minimum and maximum values.\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Sindre-Util.html#clamp",
        "fct-type": "function",
        "title": "clamp"
      },
      "index": {
        "description": "Bound value by minimum and maximum values",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "clamp",
        "normalized": "a-\u003ea-\u003ea-\u003ea",
        "package": "sindre",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:downcase",
      "description": {
        "fct-descr": "\u003cp\u003eShort-hand for 'map toLower'\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Sindre-Util.html#downcase",
        "fct-type": "function",
        "title": "downcase"
      },
      "index": {
        "description": "Short-hand for map toLower",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "downcase",
        "normalized": "String-\u003eString",
        "package": "sindre",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:err",
      "description": {
        "fct-descr": "\u003cp\u003eShort-hand for 'liftIO . hPutStrLn stderr'\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Sindre-Util.html#err",
        "fct-type": "function",
        "title": "err"
      },
      "index": {
        "description": "Short-hand for liftIO hPutStrLn stderr",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "err",
        "normalized": "String-\u003ea()",
        "package": "sindre",
        "partial": "",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:fi",
      "description": {
        "fct-descr": "\u003cp\u003eShort-hand for \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Sindre-Util.html#fi",
        "fct-type": "function",
        "title": "fi"
      },
      "index": {
        "description": "Short-hand for fromIntegral",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "fi",
        "normalized": "a-\u003eb",
        "package": "sindre",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:hsv2rgb",
      "description": {
        "fct-descr": "\u003cp\u003eConversion scheme as in http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eHSV_color_space\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "(Integer, a, a) -\u003e (a, a, a)",
        "fct-source": "src/Sindre-Util.html#hsv2rgb",
        "fct-type": "function",
        "title": "hsv2rgb"
      },
      "index": {
        "description": "Conversion scheme as in http en.wikipedia.org wiki HSV color space",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "hsv2rgb",
        "normalized": "(Integer,a,a)-\u003e(a,a,a)",
        "package": "sindre",
        "partial": "",
        "signature": "(Integer,a,a)-\u003e(a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:ifM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003ewhen\u003c/code\u003e, but with two branches.  A lifted \u003ccode\u003eif\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "m Bool -\u003e m a -\u003e m a -\u003e m a",
        "fct-source": "src/Sindre-Util.html#ifM",
        "fct-type": "function",
        "title": "ifM"
      },
      "index": {
        "description": "Like when but with two branches lifted if",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "ifM",
        "normalized": "a Bool-\u003ea b-\u003ea b-\u003ea b",
        "package": "sindre",
        "partial": "",
        "signature": "m Bool-\u003em a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:io",
      "description": {
        "fct-descr": "\u003cp\u003eShort-hand for \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Sindre-Util.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "Short-hand for liftIO",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "io",
        "normalized": "IO a-\u003eb a",
        "package": "sindre",
        "partial": "",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:mapAccumLM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumLM\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003efoldlM\u003c/code\u003e; it applies a monadic function to each element of a list,\n passing an accumulating parameter from left to right, and returning\n a final value of this accumulator together with the new list.\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "(acc -\u003e x -\u003e m (acc, y)) -\u003e acc -\u003e [x] -\u003e m (acc, [y])",
        "fct-source": "src/Sindre-Util.html#mapAccumLM",
        "fct-type": "function",
        "title": "mapAccumLM"
      },
      "index": {
        "description": "The mapAccumLM function behaves like combination of mapM and foldlM it applies monadic function to each element of list passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "mapAccumLM",
        "normalized": "(a-\u003eb-\u003ec(a,d))-\u003ea-\u003e[b]-\u003ec(a,[d])",
        "package": "sindre",
        "partial": "Accum LM",
        "signature": "(acc-\u003ex-\u003em(acc,y))-\u003eacc-\u003e[x]-\u003em(acc,[y])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:quote",
      "description": {
        "fct-descr": "\u003cp\u003ePut double quotes around the given string.\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Sindre-Util.html#quote",
        "fct-type": "function",
        "title": "quote"
      },
      "index": {
        "description": "Put double quotes around the given string",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "quote",
        "normalized": "String-\u003eString",
        "package": "sindre",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:upcase",
      "description": {
        "fct-descr": "\u003cp\u003eShort-hand for 'map toUpper'\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Sindre-Util.html#upcase",
        "fct-type": "function",
        "title": "upcase"
      },
      "index": {
        "description": "Short-hand for map toUpper",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "upcase",
        "normalized": "String-\u003eString",
        "package": "sindre",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Util.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003ePrepend and append first argument to second argument.\n\u003c/p\u003e",
        "fct-module": "Sindre.Util",
        "fct-package": "sindre",
        "fct-signature": "String -\u003e String -\u003e String",
        "fct-source": "src/Sindre-Util.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "Prepend and append first argument to second argument",
        "hierarchy": "Sindre Util",
        "module": "Sindre.Util",
        "name": "wrap",
        "normalized": "String-\u003eString-\u003eString",
        "package": "sindre",
        "partial": "",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePortable Sindre gadgets and helper functions that can be used by\n any backend.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-Widgets.html",
        "fct-type": "module",
        "title": "Widgets"
      },
      "index": {
        "description": "Portable Sindre gadgets and helper functions that can be used by any backend",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "Widgets",
        "normalized": "",
        "package": "sindre",
        "partial": "Widgets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#t:Match",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of using \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e to apply a user-provided pattern to a\n string.\n\u003c/p\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-Widgets.html#Match",
        "fct-type": "data",
        "title": "Match"
      },
      "index": {
        "description": "The result of using match to apply user-provided pattern to string",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "Match",
        "normalized": "",
        "package": "sindre",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:ExactMatch",
      "description": {
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "ExactMatch",
        "fct-source": "src/Sindre-Widgets.html#Match",
        "fct-type": "function",
        "title": "ExactMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "ExactMatch",
        "normalized": "",
        "package": "sindre",
        "partial": "Exact Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:InfixMatch",
      "description": {
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "InfixMatch",
        "fct-source": "src/Sindre-Widgets.html#Match",
        "fct-type": "function",
        "title": "InfixMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "InfixMatch",
        "normalized": "",
        "package": "sindre",
        "partial": "Infix Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:PrefixMatch",
      "description": {
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "PrefixMatch",
        "fct-source": "src/Sindre-Widgets.html#Match",
        "fct-type": "function",
        "title": "PrefixMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "PrefixMatch",
        "normalized": "",
        "package": "sindre",
        "partial": "Prefix Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:changeField",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echangeField field m\u003c/code\u003e applies \u003ccode\u003em\u003c/code\u003e to the current value of the\n field \u003ccode\u003efield\u003c/code\u003e, updates \u003ccode\u003efield\u003c/code\u003e with the value returned by \u003ccode\u003em\u003c/code\u003e, and\n returns the new value.\n\u003c/p\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "FieldDesc s im v -\u003e (v -\u003e ObjectM s im v) -\u003e ObjectM s im v",
        "fct-source": "src/Sindre-Widgets.html#changeField",
        "fct-type": "function",
        "title": "changeField"
      },
      "index": {
        "description": "changeField field applies to the current value of the field field updates field with the value returned by and returns the new value",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "changeField",
        "normalized": "FieldDesc a b c-\u003e(c-\u003eObjectM a b c)-\u003eObjectM a b c",
        "package": "sindre",
        "partial": "Field",
        "signature": "FieldDesc s im v-\u003e(v-\u003eObjectM s im v)-\u003eObjectM s im v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:changeField_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echangeField\u003c/a\u003e\u003c/code\u003e, but without a return value.\n\u003c/p\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "FieldDesc s im v -\u003e (v -\u003e ObjectM s im v) -\u003e ObjectM s im ()",
        "fct-source": "src/Sindre-Widgets.html#changeField_",
        "fct-type": "function",
        "title": "changeField_"
      },
      "index": {
        "description": "Like changeField but without return value",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "changeField_",
        "normalized": "FieldDesc a b c-\u003e(c-\u003eObjectM a b c)-\u003eObjectM a b()",
        "package": "sindre",
        "partial": "Field",
        "signature": "FieldDesc s im v-\u003e(v-\u003eObjectM s im v)-\u003eObjectM s im()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:changingField",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echangingFields fields m\u003c/code\u003e evaluates \u003ccode\u003em\u003c/code\u003e, then emits field change\n events for those fields whose names are in \u003ccode\u003efields\u003c/code\u003e that changed\n while evaluating \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "FieldDesc s im v -\u003e ObjectM s im a -\u003e ObjectM s im a",
        "fct-source": "src/Sindre-Widgets.html#changingField",
        "fct-type": "function",
        "title": "changingField"
      },
      "index": {
        "description": "changingFields fields evaluates then emits field change events for those fields whose names are in fields that changed while evaluating",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "changingField",
        "normalized": "FieldDesc a b c-\u003eObjectM a b d-\u003eObjectM a b d",
        "package": "sindre",
        "partial": "Field",
        "signature": "FieldDesc s im v-\u003eObjectM s im a-\u003eObjectM s im a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:filterMatches",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efilterMatches f pat l\u003c/code\u003e returns only those elements of \u003ccode\u003el\u003c/code\u003e that\n match \u003ccode\u003epat\u003c/code\u003e, using \u003ccode\u003ef\u003c/code\u003e to convert each element to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  The\n result will be ordered equivalently to \u003ccode\u003el\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "(a -\u003e Text) -\u003e Text -\u003e [a] -\u003e [a]",
        "fct-source": "src/Sindre-Widgets.html#filterMatches",
        "fct-type": "function",
        "title": "filterMatches"
      },
      "index": {
        "description": "filterMatches pat returns only those elements of that match pat using to convert each element to Text The result will be ordered equivalently to",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "filterMatches",
        "normalized": "(a-\u003eText)-\u003eText-\u003e[a]-\u003e[a]",
        "package": "sindre",
        "partial": "Matches",
        "signature": "(a-\u003eText)-\u003eText-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ematch pat s\u003c/code\u003e applies the pattern \u003ccode\u003epat\u003c/code\u003e to \u003ccode\u003es\u003c/code\u003e and returns a\n \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e describing the kind of match if any, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n otherwise.  The pattern is interpreted as tokens delimited by\n whitespace, and each token must be present somewhere in \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "Text -\u003e Text -\u003e Maybe Match",
        "fct-source": "src/Sindre-Widgets.html#match",
        "fct-type": "function",
        "title": "match"
      },
      "index": {
        "description": "match pat applies the pattern pat to and returns Match describing the kind of match if any or Nothing otherwise The pattern is interpreted as tokens delimited by whitespace and each token must be present somewhere in",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "match",
        "normalized": "Text-\u003eText-\u003eMaybe Match",
        "package": "sindre",
        "partial": "",
        "signature": "Text-\u003eText-\u003eMaybe Match"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:mkHorizontally",
      "description": {
        "fct-descr": "\u003cp\u003eA widget that arranges its children in a horizontal row.\n\u003c/p\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "Constructor m",
        "fct-source": "src/Sindre-Widgets.html#mkHorizontally",
        "fct-type": "function",
        "title": "mkHorizontally"
      },
      "index": {
        "description": "widget that arranges its children in horizontal row",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "mkHorizontally",
        "normalized": "",
        "package": "sindre",
        "partial": "Horizontally",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:mkVertically",
      "description": {
        "fct-descr": "\u003cp\u003eA widget that arranges its children in a vertical column.\n\u003c/p\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "Constructor m",
        "fct-source": "src/Sindre-Widgets.html#mkVertically",
        "fct-type": "function",
        "title": "mkVertically"
      },
      "index": {
        "description": "widget that arranges its children in vertical column",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "mkVertically",
        "normalized": "",
        "package": "sindre",
        "partial": "Vertically",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-Widgets.html#v:sortMatches",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esortMatches f pat l\u003c/code\u003e returns only those elements of \u003ccode\u003el\u003c/code\u003e that\n match \u003ccode\u003epat\u003c/code\u003e, using \u003ccode\u003ef\u003c/code\u003e to convert each element to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  The\n result will be reordered such that exact matches come first, then\n prefixes, then infixes, although original order will be maintained\n within these three groups.\n\u003c/p\u003e",
        "fct-module": "Sindre.Widgets",
        "fct-package": "sindre",
        "fct-signature": "(a -\u003e Text) -\u003e Text -\u003e [a] -\u003e [a]",
        "fct-source": "src/Sindre-Widgets.html#sortMatches",
        "fct-type": "function",
        "title": "sortMatches"
      },
      "index": {
        "description": "sortMatches pat returns only those elements of that match pat using to convert each element to Text The result will be reordered such that exact matches come first then prefixes then infixes although original order will be maintained within these three groups",
        "hierarchy": "Sindre Widgets",
        "module": "Sindre.Widgets",
        "name": "sortMatches",
        "normalized": "(a-\u003eText)-\u003eText-\u003e[a]-\u003e[a]",
        "package": "sindre",
        "partial": "Matches",
        "signature": "(a-\u003eText)-\u003eText-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eX11 backend for Sindre.  For internationalised keyboard input to\n work, make sure the locale is correctly set.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "module",
        "fct-source": "src/Sindre-X11.html",
        "fct-type": "module",
        "title": "X11"
      },
      "index": {
        "description": "X11 backend for Sindre For internationalised keyboard input to work make sure the locale is correctly set",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "X11",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:Drawer",
      "description": {
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-X11.html#Drawer",
        "fct-type": "data",
        "title": "Drawer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "Drawer",
        "normalized": "",
        "package": "sindre",
        "partial": "Drawer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:SindreX11Conf",
      "description": {
        "fct-descr": "\u003cp\u003eThe read-only configuration of the X11 backend, created during\n backend initialisation.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-X11.html#SindreX11Conf",
        "fct-type": "data",
        "title": "SindreX11Conf"
      },
      "index": {
        "description": "The read-only configuration of the X11 backend created during backend initialisation",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "SindreX11Conf",
        "normalized": "",
        "package": "sindre",
        "partial": "Sindre Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:SindreX11M",
      "description": {
        "fct-descr": "\u003cp\u003eSindre backend using Xlib.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-X11.html#SindreX11M",
        "fct-type": "data",
        "title": "SindreX11M"
      },
      "index": {
        "description": "Sindre backend using Xlib",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "SindreX11M",
        "normalized": "",
        "package": "sindre",
        "partial": "Sindre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:VisualOpts",
      "description": {
        "fct-descr": "\u003cp\u003eOptions regarding visual appearance of widgets (colors and\n fonts).\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "data",
        "fct-source": "src/Sindre-X11.html#VisualOpts",
        "fct-type": "data",
        "title": "VisualOpts"
      },
      "index": {
        "description": "Options regarding visual appearance of widgets colors and fonts",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "VisualOpts",
        "normalized": "",
        "package": "sindre",
        "partial": "Visual Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#t:X11Field",
      "description": {
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "type",
        "fct-source": "src/Sindre-X11.html#X11Field",
        "fct-type": "type",
        "title": "X11Field"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "X11Field",
        "normalized": "",
        "package": "sindre",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:Drawer",
      "description": {
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Drawer",
        "fct-source": "src/Sindre-X11.html#Drawer",
        "fct-type": "function",
        "title": "Drawer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "Drawer",
        "normalized": "",
        "package": "sindre",
        "partial": "Drawer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:VisualOpts",
      "description": {
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "VisualOpts",
        "fct-source": "src/Sindre-X11.html#VisualOpts",
        "fct-type": "function",
        "title": "VisualOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "VisualOpts",
        "normalized": "",
        "package": "sindre",
        "partial": "Visual Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:allocColor",
      "description": {
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "XftMgr -\u003e String -\u003e m Color",
        "fct-source": "src/Sindre-X11.html#allocColor",
        "fct-type": "function",
        "title": "allocColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "allocColor",
        "normalized": "XftMgr-\u003eString-\u003ea Color",
        "package": "sindre",
        "partial": "Color",
        "signature": "XftMgr-\u003eString-\u003em Color"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:background",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Color",
        "fct-source": "src/Sindre-X11.html#VisualOpts",
        "fct-type": "function",
        "title": "background"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "background",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:bg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "forall f.  CoreDrawer f",
        "fct-source": "src/Sindre-X11.html#Drawer",
        "fct-type": "function",
        "title": "bg"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "bg",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawText",
      "description": {
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Color -\u003e Font -\u003e x -\u003e y -\u003e z -\u003e String -\u003e SindreX11M ()",
        "fct-source": "src/Sindre-X11.html#drawText",
        "fct-type": "function",
        "title": "drawText"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "drawText",
        "normalized": "Color-\u003eFont-\u003ea-\u003eb-\u003ec-\u003eString-\u003eSindreX M()",
        "package": "sindre",
        "partial": "Text",
        "signature": "Color-\u003eFont-\u003ex-\u003ey-\u003ez-\u003eString-\u003eSindreX M()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawerBgColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Color",
        "fct-source": "src/Sindre-X11.html#Drawer",
        "fct-type": "function",
        "title": "drawerBgColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "drawerBgColor",
        "normalized": "",
        "package": "sindre",
        "partial": "Bg Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawerFgColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Color",
        "fct-source": "src/Sindre-X11.html#Drawer",
        "fct-type": "function",
        "title": "drawerFgColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "drawerFgColor",
        "normalized": "",
        "package": "sindre",
        "partial": "Fg Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawerFont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Font",
        "fct-source": "src/Sindre-X11.html#Drawer",
        "fct-type": "function",
        "title": "drawerFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "drawerFont",
        "normalized": "",
        "package": "sindre",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawing",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function that makes it easier it write consistent widgets\n in the X11 backend.  The widget is automatically filled with its\n (nonfocus) background color.  You are supposed to use this in the\n \u003ccode\u003edrawI\u003c/code\u003e method of a \u003ccode\u003eWidget\u003c/code\u003e instance definition.  An example:\n\u003c/p\u003e\u003cpre\u003e\n drawI = drawing myWidgetWin myWidgetVisual $ r fg bg ffg fbg -\u003e do\n   fg drawString 0 5 \"foreground\"\n   bg drawString 0 15 \"background\"\n   ffg drawString 0 25 \"focus foreground\"\n   fbg drawString 0 35 \"focus background\"\n\u003c/pre\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "VisualOpts-\u003e (Rectangle -\u003e Drawer -\u003e Drawer -\u003e ObjectM a SindreX11M [Rectangle])-\u003e Rectangle-\u003e ObjectM a SindreX11M SpaceUse",
        "fct-type": "function",
        "title": "drawing"
      },
      "index": {
        "description": "Helper function that makes it easier it write consistent widgets in the X11 backend The widget is automatically filled with its nonfocus background color You are supposed to use this in the drawI method of Widget instance definition An example drawI drawing myWidgetWin myWidgetVisual fg bg ffg fbg do fg drawString foreground bg drawString background ffg drawString focus foreground fbg drawString focus background",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "drawing",
        "normalized": "VisualOpts-\u003e(Rectangle-\u003eDrawer-\u003eDrawer-\u003eObjectM a SindreX M[Rectangle])-\u003eRectangle-\u003eObjectM a SindreX M SpaceUse",
        "package": "sindre",
        "partial": "",
        "signature": "VisualOpts-\u003e(Rectangle-\u003eDrawer-\u003eDrawer-\u003eObjectM a SindreX M[Rectangle])-\u003eRectangle-\u003eObjectM a SindreX M SpaceUse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:drawing-39-",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003edrawing\u003c/code\u003e that assumes the entire rectangle is used.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "VisualOpts -\u003e (Rectangle -\u003e Drawer -\u003e Drawer -\u003e ObjectM a SindreX11M ()) -\u003e Rectangle -\u003e ObjectM a SindreX11M SpaceUse",
        "fct-source": "src/Sindre-X11.html#drawing%27",
        "fct-type": "function",
        "title": "drawing'"
      },
      "index": {
        "description": "Variant of drawing that assumes the entire rectangle is used",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "drawing'",
        "normalized": "VisualOpts-\u003e(Rectangle-\u003eDrawer-\u003eDrawer-\u003eObjectM a SindreX M())-\u003eRectangle-\u003eObjectM a SindreX M SpaceUse",
        "package": "sindre",
        "partial": "",
        "signature": "VisualOpts-\u003e(Rectangle-\u003eDrawer-\u003eDrawer-\u003eObjectM a SindreX M())-\u003eRectangle-\u003eObjectM a SindreX M SpaceUse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:fg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "forall f.  CoreDrawer f",
        "fct-source": "src/Sindre-X11.html#Drawer",
        "fct-type": "function",
        "title": "fg"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "fg",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:focusBackground",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Color",
        "fct-source": "src/Sindre-X11.html#VisualOpts",
        "fct-type": "function",
        "title": "focusBackground"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "focusBackground",
        "normalized": "",
        "package": "sindre",
        "partial": "Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:focusForeground",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Color",
        "fct-source": "src/Sindre-X11.html#VisualOpts",
        "fct-type": "function",
        "title": "focusForeground"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "focusForeground",
        "normalized": "",
        "package": "sindre",
        "partial": "Foreground",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:font",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Font",
        "fct-source": "src/Sindre-X11.html#VisualOpts",
        "fct-type": "function",
        "title": "font"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "font",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:foreground",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Color",
        "fct-source": "src/Sindre-X11.html#VisualOpts",
        "fct-type": "function",
        "title": "foreground"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "foreground",
        "normalized": "",
        "package": "sindre",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkBlank",
      "description": {
        "fct-descr": "\u003cp\u003eA blank widget, showing only background color, that can use as\n much or as little room as necessary.  Useful for constraining the\n layout of other widgets.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Constructor SindreX11M",
        "fct-source": "src/Sindre-X11.html#mkBlank",
        "fct-type": "function",
        "title": "mkBlank"
      },
      "index": {
        "description": "blank widget showing only background color that can use as much or as little room as necessary Useful for constraining the layout of other widgets",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "mkBlank",
        "normalized": "",
        "package": "sindre",
        "partial": "Blank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkDial",
      "description": {
        "fct-descr": "\u003cp\u003eA simple dial using an arc segment to indicate the value compared\n to the max value.  Accepts \u003ccode\u003emax\u003c/code\u003e and \u003ccode\u003evalue\u003c/code\u003e parameters (both\n integers, default values 12 and 0), and a single field: \u003ccode\u003evalue\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003en\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ep\u003c/a\u003e\u003c/code\u003e are used to increase and decrease the value.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Constructor SindreX11M",
        "fct-source": "src/Sindre-X11.html#mkDial",
        "fct-type": "function",
        "title": "mkDial"
      },
      "index": {
        "description": "simple dial using an arc segment to indicate the value compared to the max value Accepts max and value parameters both integers default values and and single field value and are used to increase and decrease the value",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "mkDial",
        "normalized": "",
        "package": "sindre",
        "partial": "Dial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkHList",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal dmenu-style list containing a list of elements, one of\n which is the \"selected\" element.  If the parameter \u003ccode\u003ei\u003c/code\u003e is given a\n true value, element matching will be case-insensitive.  The\n following methods are supported:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003einsert(string)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Split \u003ccode\u003estring\u003c/code\u003e into lines and add each line as\n an element.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eclear()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Delete all elements.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003efilter(string)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Only display those elements that contain \u003ccode\u003estring\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003enext()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Move selection right.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eprev()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Move selection left.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003efirst()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Move to leftmost element.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elast()\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Move to rightmost element.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe field \u003ccode\u003eselected\u003c/code\u003e is the selected element.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Constructor SindreX11M",
        "fct-source": "src/Sindre-X11.html#mkHList",
        "fct-type": "function",
        "title": "mkHList"
      },
      "index": {
        "description": "Horizontal dmenu-style list containing list of elements one of which is the selected element If the parameter is given true value element matching will be case-insensitive The following methods are supported insert string Split string into lines and add each line as an element clear Delete all elements filter string Only display those elements that contain string next Move selection right prev Move selection left first Move to leftmost element last Move to rightmost element The field selected is the selected element",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "mkHList",
        "normalized": "",
        "package": "sindre",
        "partial": "HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkInStream",
      "description": {
        "fct-descr": "\u003cp\u003eAn input stream object wrapping the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  Input is\n purely event-driven and line-oriented: the event \u003ccode\u003elines\u003c/code\u003e is sent\n (roughly) for each sequence of lines that can be read without\n blocking, with the payload being a single string value containing\n the lines read since the last time the event was sent.  When end of\n file is reached, the \u003ccode\u003eeof\u003c/code\u003e event (no payload) is sent.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Handle -\u003e ObjectRef -\u003e SindreX11M (NewObject SindreX11M)",
        "fct-source": "src/Sindre-X11.html#mkInStream",
        "fct-type": "function",
        "title": "mkInStream"
      },
      "index": {
        "description": "An input stream object wrapping the given Handle Input is purely event-driven and line-oriented the event lines is sent roughly for each sequence of lines that can be read without blocking with the payload being single string value containing the lines read since the last time the event was sent When end of file is reached the eof event no payload is sent",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "mkInStream",
        "normalized": "Handle-\u003eObjectRef-\u003eSindreX M(NewObject SindreX M)",
        "package": "sindre",
        "partial": "In Stream",
        "signature": "Handle-\u003eObjectRef-\u003eSindreX M(NewObject SindreX M)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLabel displaying the text contained in the field \u003ccode\u003elabel\u003c/code\u003e, which\n is also accepted as a widget parameter (defaults to the empty\n string).\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Constructor SindreX11M",
        "fct-source": "src/Sindre-X11.html#mkLabel",
        "fct-type": "function",
        "title": "mkLabel"
      },
      "index": {
        "description": "Label displaying the text contained in the field label which is also accepted as widget parameter defaults to the empty string",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "mkLabel",
        "normalized": "",
        "package": "sindre",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkTextField",
      "description": {
        "fct-descr": "\u003cp\u003eSingle-line text field, whose single field \u003ccode\u003evalue\u003c/code\u003e (also a\n parameter, defaults to the empty string) is the contents of the\n editing buffer.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Constructor SindreX11M",
        "fct-source": "src/Sindre-X11.html#mkTextField",
        "fct-type": "function",
        "title": "mkTextField"
      },
      "index": {
        "description": "Single-line text field whose single field value also parameter defaults to the empty string is the contents of the editing buffer",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "mkTextField",
        "normalized": "",
        "package": "sindre",
        "partial": "Text Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:mkVList",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003emkHList\u003c/a\u003e\u003c/code\u003e, except the list is vertical.  The parameter \u003ccode\u003elines\u003c/code\u003e\n (default value 10) is the number of lines shown.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Constructor SindreX11M",
        "fct-source": "src/Sindre-X11.html#mkVList",
        "fct-type": "function",
        "title": "mkVList"
      },
      "index": {
        "description": "As mkHList except the list is vertical The parameter lines default value is the number of lines shown",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "mkVList",
        "normalized": "",
        "package": "sindre",
        "partial": "VList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:setBgColor",
      "description": {
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Drawer -\u003e Color -\u003e IO Drawer",
        "fct-source": "src/Sindre-X11.html#setBgColor",
        "fct-type": "function",
        "title": "setBgColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "setBgColor",
        "normalized": "Drawer-\u003eColor-\u003eIO Drawer",
        "package": "sindre",
        "partial": "Bg Color",
        "signature": "Drawer-\u003eColor-\u003eIO Drawer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:setFgColor",
      "description": {
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Drawer -\u003e Color -\u003e IO Drawer",
        "fct-source": "src/Sindre-X11.html#setFgColor",
        "fct-type": "function",
        "title": "setFgColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "setFgColor",
        "normalized": "Drawer-\u003eColor-\u003eIO Drawer",
        "package": "sindre",
        "partial": "Fg Color",
        "signature": "Drawer-\u003eColor-\u003eIO Drawer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:sindreX11",
      "description": {
        "fct-descr": "\u003cp\u003eExecute Sindre in the X11 backend as an ordinary client visible\n to the window manager.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "String-\u003e SindreX11M ExitCode-\u003e IO ExitCode",
        "fct-type": "function",
        "title": "sindreX11"
      },
      "index": {
        "description": "Execute Sindre in the X11 backend as an ordinary client visible to the window manager",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "sindreX11",
        "normalized": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode",
        "package": "sindre",
        "partial": "",
        "signature": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:sindreX11dock",
      "description": {
        "fct-descr": "\u003cp\u003eExecute Sindre in the X11 backend as a dock/statusbar.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "String-\u003e SindreX11M ExitCode-\u003e IO ExitCode",
        "fct-type": "function",
        "title": "sindreX11dock"
      },
      "index": {
        "description": "Execute Sindre in the X11 backend as dock statusbar",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "sindreX11dock",
        "normalized": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode",
        "package": "sindre",
        "partial": "",
        "signature": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:sindreX11override",
      "description": {
        "fct-descr": "\u003cp\u003eExecute Sindre in the X11 backend, grabbing control of the entire\n display and staying on top.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "String-\u003e SindreX11M ExitCode-\u003e IO ExitCode",
        "fct-type": "function",
        "title": "sindreX11override"
      },
      "index": {
        "description": "Execute Sindre in the X11 backend grabbing control of the entire display and staying on top",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "sindreX11override",
        "normalized": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode",
        "package": "sindre",
        "partial": "",
        "signature": "String-\u003eSindreX M ExitCode-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:textExtents",
      "description": {
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Font -\u003e String -\u003e SindreX11M (Int, Int)",
        "fct-source": "src/Sindre-X11.html#textExtents",
        "fct-type": "function",
        "title": "textExtents"
      },
      "index": {
        "description": "",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "textExtents",
        "normalized": "Font-\u003eString-\u003eSindreX M(Int,Int)",
        "package": "sindre",
        "partial": "Extents",
        "signature": "Font-\u003eString-\u003eSindreX M(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:visualOpts",
      "description": {
        "fct-descr": "\u003cp\u003eRead visual options from either widget parameters or the X\n resources database using \u003ccode\u003e\u003ca\u003exopt\u003c/a\u003e\u003c/code\u003e, or a combination.  The following\n graphical components are read:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eForeground color\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e From \u003ccode\u003efg\u003c/code\u003e parameter or \u003ccode\u003eforeground\u003c/code\u003e X\n  property.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eBackground color\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e From \u003ccode\u003ebg\u003c/code\u003e parameter or \u003ccode\u003ebackground\u003c/code\u003e X\n  property.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eFocus foreground color\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e From \u003ccode\u003effg\u003c/code\u003e parameter or\n  \u003ccode\u003efocusForeground\u003c/code\u003e X property.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eFocus background color\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e From \u003ccode\u003efbg\u003c/code\u003e parameter or\n  \u003ccode\u003efocusBackground\u003c/code\u003e X property.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "WidgetRef -\u003e ConstructorM SindreX11M VisualOpts",
        "fct-source": "src/Sindre-X11.html#visualOpts",
        "fct-type": "function",
        "title": "visualOpts"
      },
      "index": {
        "description": "Read visual options from either widget parameters or the resources database using xopt or combination The following graphical components are read Foreground color From fg parameter or foreground property Background color From bg parameter or background property Focus foreground color From ffg parameter or focusForeground property Focus background color From fbg parameter or focusBackground property",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "visualOpts",
        "normalized": "WidgetRef-\u003eConstructorM SindreX M VisualOpts",
        "package": "sindre",
        "partial": "Opts",
        "signature": "WidgetRef-\u003eConstructorM SindreX M VisualOpts"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sindre/docs/Sindre-X11.html#v:xopt",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a lookup in the X resources database for a given\n property.  The class used is \u003ccode\u003e\u003cem\u003eSindre\u003c/em\u003e.\u003cem\u003eclass\u003c/em\u003e.\u003cem\u003eproperty\u003c/em\u003e\u003c/code\u003e and the\n name is \u003ccode\u003e\u003cem\u003eprogname\u003c/em\u003e.\u003cem\u003ename\u003c/em\u003e.\u003cem\u003eproperty\u003c/em\u003e\u003c/code\u003e, where \u003cem\u003eprogname\u003c/em\u003e is the\n value of \u003ccode\u003e\u003ca\u003egetProgName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sindre.X11",
        "fct-package": "sindre",
        "fct-signature": "Maybe String-\u003e String-\u003e String-\u003e ConstructorM SindreX11M a",
        "fct-type": "function",
        "title": "xopt"
      },
      "index": {
        "description": "Performs lookup in the resources database for given property The class used is Sindre class property and the name is progname name property where progname is the value of getProgName",
        "hierarchy": "Sindre X11",
        "module": "Sindre.X11",
        "name": "xopt",
        "normalized": "Maybe String-\u003eString-\u003eString-\u003eConstructorM SindreX M a",
        "package": "sindre",
        "partial": "",
        "signature": "Maybe String-\u003eString-\u003eString-\u003eConstructorM SindreX M a"
      }
    }
  }
]