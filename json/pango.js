[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePango specific functions to for redering with Cairo.\n\u003c/p\u003e\u003cp\u003eCairo is a graphics library that supports vector graphics and image\n compositing that can be used with Pango. The functions in this module provide\n ways of rendering text in Cairo using Pango.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html",
        "fct-type": "module",
        "title": "Cairo"
      },
      "index": {
        "description": "Pango specific functions to for redering with Cairo Cairo is graphics library that supports vector graphics and image compositing that can be used with Pango The functions in this module provide ways of rendering text in Cairo using Pango",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "Cairo",
        "normalized": "",
        "package": "pango",
        "partial": "Cairo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:cairoContextGetFontOptions",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve Cairo font options.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO FontOptions",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#cairoContextGetFontOptions",
        "fct-type": "function",
        "title": "cairoContextGetFontOptions"
      },
      "index": {
        "description": "Retrieve Cairo font options",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "cairoContextGetFontOptions",
        "normalized": "PangoContext-\u003eIO FontOptions",
        "package": "pango",
        "partial": "Context Get Font Options",
        "signature": "PangoContext-\u003eIO FontOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:cairoContextGetResolution",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for the scaling factor of the \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A negative value will be returned if no resolution has been set.\n See \u003ccode\u003e\u003ca\u003ecairoContextSetResolution\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO Double",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#cairoContextGetResolution",
        "fct-type": "function",
        "title": "cairoContextGetResolution"
      },
      "index": {
        "description": "Ask for the scaling factor of the PangoContext negative value will be returned if no resolution has been set See cairoContextSetResolution",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "cairoContextGetResolution",
        "normalized": "PangoContext-\u003eIO Double",
        "package": "pango",
        "partial": "Context Get Resolution",
        "signature": "PangoContext-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:cairoContextSetFontOptions",
      "description": {
        "fct-descr": "\u003cp\u003eSet Cairo font options.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Apply the given font options to the context. Values set through this\n functions override those that are set by \u003ccode\u003e\u003ca\u003eupdateContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e FontOptions -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#cairoContextSetFontOptions",
        "fct-type": "function",
        "title": "cairoContextSetFontOptions"
      },
      "index": {
        "description": "Set Cairo font options Apply the given font options to the context Values set through this functions override those that are set by updateContext",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "cairoContextSetFontOptions",
        "normalized": "PangoContext-\u003eFontOptions-\u003eIO()",
        "package": "pango",
        "partial": "Context Set Font Options",
        "signature": "PangoContext-\u003eFontOptions-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:cairoContextSetResolution",
      "description": {
        "fct-descr": "\u003cp\u003eSet the scaling factor of the \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Supplying zero or a negative value will result in the resolution value\n of the underlying \u003ccode\u003e\u003ca\u003eFontMap\u003c/a\u003e\u003c/code\u003e to be used. See also \u003ccode\u003e\u003ca\u003ecairoFontMapGetDefault\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e Double -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#cairoContextSetResolution",
        "fct-type": "function",
        "title": "cairoContextSetResolution"
      },
      "index": {
        "description": "Set the scaling factor of the PangoContext Supplying zero or negative value will result in the resolution value of the underlying FontMap to be used See also cairoFontMapGetDefault",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "cairoContextSetResolution",
        "normalized": "PangoContext-\u003eDouble-\u003eIO()",
        "package": "pango",
        "partial": "Context Set Resolution",
        "signature": "PangoContext-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:cairoCreateContext",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If no \u003ccode\u003e\u003ca\u003eFontMap\u003c/a\u003e\u003c/code\u003e is specified, it uses the default \u003ccode\u003e\u003ca\u003eFontMap\u003c/a\u003e\u003c/code\u003e that\n has a scaling factor of 96 dpi. See \u003ccode\u003e\u003ca\u003ecairoFontMapGetDefault\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "Maybe FontMap -\u003e IO PangoContext",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#cairoCreateContext",
        "fct-type": "function",
        "title": "cairoCreateContext"
      },
      "index": {
        "description": "Create PangoContext If no FontMap is specified it uses the default FontMap that has scaling factor of dpi See cairoFontMapGetDefault",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "cairoCreateContext",
        "normalized": "Maybe FontMap-\u003eIO PangoContext",
        "package": "pango",
        "partial": "Create Context",
        "signature": "Maybe FontMap-\u003eIO PangoContext"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:cairoFontMapGetDefault",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the default \u003ccode\u003e\u003ca\u003eFontMap\u003c/a\u003e\u003c/code\u003e that contains a\n list of available fonts.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e One purpose of creating an explicit\n \u003ccode\u003e\u003ca\u003eFontMap\u003c/a\u003e\u003c/code\u003e is to set\n a different scaling factor between font sizes (in points, pt) and\n Cairo units (in pixels). The default is 96dpi (dots per inch) which\n corresponds to an average screen as output medium. A 10pt font will\n therefore scale to\n \u003ccode\u003e10pt * (1/72 pt/inch) * (96 pixel/inch) = 13.3 pixel\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "IO FontMap",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#cairoFontMapGetDefault",
        "fct-type": "function",
        "title": "cairoFontMapGetDefault"
      },
      "index": {
        "description": "Retrieve the default FontMap that contains list of available fonts One purpose of creating an explicit FontMap is to set different scaling factor between font sizes in points pt and Cairo units in pixels The default is dpi dots per inch which corresponds to an average screen as output medium pt font will therefore scale to pt pt inch pixel inch pixel",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "cairoFontMapGetDefault",
        "normalized": "",
        "package": "pango",
        "partial": "Font Map Get Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:cairoFontMapGetResolution",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for the scaling factor between font size and Cairo units.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value is in dots per inch (dpi). See \u003ccode\u003e\u003ca\u003ecairoFontMapGetDefault\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "FontMap -\u003e IO Double",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#cairoFontMapGetResolution",
        "fct-type": "function",
        "title": "cairoFontMapGetResolution"
      },
      "index": {
        "description": "Ask for the scaling factor between font size and Cairo units Value is in dots per inch dpi See cairoFontMapGetDefault",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "cairoFontMapGetResolution",
        "normalized": "FontMap-\u003eIO Double",
        "package": "pango",
        "partial": "Font Map Get Resolution",
        "signature": "FontMap-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:cairoFontMapSetResolution",
      "description": {
        "fct-descr": "\u003cp\u003eSet the scaling factor between font size and Cairo units.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value is in dots per inch (dpi). See \u003ccode\u003e\u003ca\u003ecairoFontMapGetDefault\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "FontMap -\u003e Double -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#cairoFontMapSetResolution",
        "fct-type": "function",
        "title": "cairoFontMapSetResolution"
      },
      "index": {
        "description": "Set the scaling factor between font size and Cairo units Value is in dots per inch dpi See cairoFontMapGetDefault",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "cairoFontMapSetResolution",
        "normalized": "FontMap-\u003eDouble-\u003eIO()",
        "package": "pango",
        "partial": "Font Map Set Resolution",
        "signature": "FontMap-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:createLayout",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e within a \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e context.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is a convenience function that creates a new \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e\n within this \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e context and creates a new \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e.\n If the transformation or target surface of the \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e context\n change, \u003ccode\u003e\u003ca\u003eupdateLayout\u003c/a\u003e\u003c/code\u003e has to be called on this layout.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "String -\u003e Render PangoLayout",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#createLayout",
        "fct-type": "function",
        "title": "createLayout"
      },
      "index": {
        "description": "Create PangoLayout within Render context This is convenience function that creates new PangoContext within this Render context and creates new PangoLayout If the transformation or target surface of the Render context change updateLayout has to be called on this layout",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "createLayout",
        "normalized": "String-\u003eRender PangoLayout",
        "package": "pango",
        "partial": "Layout",
        "signature": "String-\u003eRender PangoLayout"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:glyphStringPath",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the extent of a glyph string to the current path.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The origin of the glyphs (the left edge of the line) will be at the\n current point of the cairo context.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "GlyphItem -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#glyphStringPath",
        "fct-type": "function",
        "title": "glyphStringPath"
      },
      "index": {
        "description": "Add the extent of glyph string to the current path The origin of the glyphs the left edge of the line will be at the current point of the cairo context",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "glyphStringPath",
        "normalized": "GlyphItem-\u003eRender()",
        "package": "pango",
        "partial": "String Path",
        "signature": "GlyphItem-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:layoutLinePath",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the extent of a layout line to the current path.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The origin of the glyphs (the left edge of the line) will be at the\n current point of the cairo context.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "LayoutLine -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#layoutLinePath",
        "fct-type": "function",
        "title": "layoutLinePath"
      },
      "index": {
        "description": "Add the extent of layout line to the current path The origin of the glyphs the left edge of the line will be at the current point of the cairo context",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "layoutLinePath",
        "normalized": "LayoutLine-\u003eRender()",
        "package": "pango",
        "partial": "Line Path",
        "signature": "LayoutLine-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:layoutPath",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the layout to the current path.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Adds the top-left corner of the text to the current path. Afterwards,\n the path position is at the bottom-right corner of the \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#layoutPath",
        "fct-type": "function",
        "title": "layoutPath"
      },
      "index": {
        "description": "Add the layout to the current path Adds the top-left corner of the text to the current path Afterwards the path position is at the bottom-right corner of the PangoLayout",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "layoutPath",
        "normalized": "PangoLayout-\u003eRender()",
        "package": "pango",
        "partial": "Path",
        "signature": "PangoLayout-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:setSourceColor",
      "description": {
        "fct-descr": "\u003cp\u003eSets the specified \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e as the source color of the \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "Color -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#setSourceColor",
        "fct-type": "function",
        "title": "setSourceColor"
      },
      "index": {
        "description": "Sets the specified Color as the source color of the Render context",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "setSourceColor",
        "normalized": "Color-\u003eRender()",
        "package": "pango",
        "partial": "Source Color",
        "signature": "Color-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:showGlyphString",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a glyph string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The origin of the glyphs (the left edge of the baseline) will be drawn\n at the current point of the cairo context.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "GlyphItem -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#showGlyphString",
        "fct-type": "function",
        "title": "showGlyphString"
      },
      "index": {
        "description": "Draw glyph string The origin of the glyphs the left edge of the baseline will be drawn at the current point of the cairo context",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "showGlyphString",
        "normalized": "GlyphItem-\u003eRender()",
        "package": "pango",
        "partial": "Glyph String",
        "signature": "GlyphItem-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:showLayout",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The top-left corner of the \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e will be drawn at the current\n point of the cairo context.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#showLayout",
        "fct-type": "function",
        "title": "showLayout"
      },
      "index": {
        "description": "Draw PangoLayout The top-left corner of the PangoLayout will be drawn at the current point of the cairo context",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "showLayout",
        "normalized": "PangoLayout-\u003eRender()",
        "package": "pango",
        "partial": "Layout",
        "signature": "PangoLayout-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:showLayoutLine",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a \u003ccode\u003e\u003ca\u003eLayoutLine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The origin of the glyphs (the left edge of the baseline) will be drawn\n at the current point of the cairo context.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "LayoutLine -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#showLayoutLine",
        "fct-type": "function",
        "title": "showLayoutLine"
      },
      "index": {
        "description": "Draw LayoutLine The origin of the glyphs the left edge of the baseline will be drawn at the current point of the cairo context",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "showLayoutLine",
        "normalized": "LayoutLine-\u003eRender()",
        "package": "pango",
        "partial": "Layout Line",
        "signature": "LayoutLine-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:updateContext",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e with respect to changes in a \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e\n environment.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e must have been created with\n \u003ccode\u003e\u003ca\u003ecairoCreateContext\u003c/a\u003e\u003c/code\u003e. Any \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003es that have been\n previously created with this context have to be update using\n \u003ccode\u003e\u003ca\u003elayoutContextChanged\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#updateContext",
        "fct-type": "function",
        "title": "updateContext"
      },
      "index": {
        "description": "Update PangoContext with respect to changes in Render environment The PangoContext must have been created with cairoCreateContext Any PangoLayout that have been previously created with this context have to be update using layoutContextChanged",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "updateContext",
        "normalized": "PangoContext-\u003eRender()",
        "package": "pango",
        "partial": "Context",
        "signature": "PangoContext-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Cairo.html#v:updateLayout",
      "description": {
        "fct-descr": "\u003cp\u003ePropagate changed to the \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e context to a \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is a convenience function that calls \u003ccode\u003e\u003ca\u003eupdateContext\u003c/a\u003e\u003c/code\u003e on the\n (private) \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e of the given layout to propagate changes\n from the \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e context to the \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e and then calls\n \u003ccode\u003e\u003ca\u003elayoutContextChanged\u003c/a\u003e\u003c/code\u003e on the layout.\n This function is necessary for\n \u003ccode\u003e\u003ca\u003ecreateLayout\u003c/a\u003e\u003c/code\u003e since a private \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e is created that is\n not visible to the user.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Cairo",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Pango-Cairo.html#updateLayout",
        "fct-type": "function",
        "title": "updateLayout"
      },
      "index": {
        "description": "Propagate changed to the Render context to PangoLayout This is convenience function that calls updateContext on the private PangoContext of the given layout to propagate changes from the Render context to the PangoContext and then calls layoutContextChanged on the layout This function is necessary for createLayout since private PangoContext is created that is not visible to the user",
        "hierarchy": "Graphics Rendering Pango Cairo",
        "module": "Graphics.Rendering.Pango.Cairo",
        "name": "updateLayout",
        "normalized": "PangoLayout-\u003eRender()",
        "package": "pango",
        "partial": "Layout",
        "signature": "PangoLayout-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003es,\n an environment that provides information on available fonts,\n internationalization and output capabilities of the medium. Given\n such a context, text can be rendered into strings of glyphs (see\n \u003ccode\u003e\u003ca\u003eRendering\u003c/a\u003e\u003c/code\u003e) or, at a more abstract level, using\n layouts (see \u003ccode\u003e\u003ca\u003eLayout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e is a prerequisite for all text rendering functions.\n A context can be created from scratch or, more conveniently, by using\n default settings that are already used in the application. When text\n is rendered through Gdk, use\n \u003ccode\u003e\u003ca\u003ewidgetCreatePangoContext\u003c/a\u003e\u003c/code\u003e, if you use\n the Cairo rendering engine, a new context can be acquired using\n \u003ccode\u003e\u003ca\u003ecairoCreateContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The properties of a \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e can be changed which, in turn, has\n an effect on how text is rendered. To reflect such a change in the\n rendered text, call \u003ccode\u003e\u003ca\u003elayoutContextChanged\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html",
        "fct-type": "module",
        "title": "Context"
      },
      "index": {
        "description": "This module defines PangoContext an environment that provides information on available fonts internationalization and output capabilities of the medium Given such context text can be rendered into strings of glyphs see Rendering or at more abstract level using layouts see Layout PangoContext is prerequisite for all text rendering functions context can be created from scratch or more conveniently by using default settings that are already used in the application When text is rendered through Gdk use widgetCreatePangoContext if you use the Cairo rendering engine new context can be acquired using cairoCreateContext The properties of PangoContext can be changed which in turn has an effect on how text is rendered To reflect such change in the rendered text call layoutContextChanged",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "Context",
        "normalized": "",
        "package": "pango",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#t:Language",
      "description": {
        "fct-descr": "\u003cp\u003eAn RFC-3066 language designator to choose scripts.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Language",
        "fct-type": "data",
        "title": "Language"
      },
      "index": {
        "description": "An RFC-3066 language designator to choose scripts",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "Language",
        "normalized": "",
        "package": "pango",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#t:PangoContext",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#PangoContext",
        "fct-type": "data",
        "title": "PangoContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "PangoContext",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#t:PangoContextClass",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#PangoContextClass",
        "fct-type": "class",
        "title": "PangoContextClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "PangoContextClass",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Context Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextGetFontDescription",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current \u003ccode\u003e\u003ca\u003eFontDescription\u003c/a\u003e\u003c/code\u003e of this context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO FontDescription",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextGetFontDescription",
        "fct-type": "function",
        "title": "contextGetFontDescription"
      },
      "index": {
        "description": "Get the current FontDescription of this context",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextGetFontDescription",
        "normalized": "PangoContext-\u003eIO FontDescription",
        "package": "pango",
        "partial": "Get Font Description",
        "signature": "PangoContext-\u003eIO FontDescription"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextGetLanguage",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e of this context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO Language",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextGetLanguage",
        "fct-type": "function",
        "title": "contextGetLanguage"
      },
      "index": {
        "description": "Get the current Language of this context",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextGetLanguage",
        "normalized": "PangoContext-\u003eIO Language",
        "package": "pango",
        "partial": "Get Language",
        "signature": "PangoContext-\u003eIO Language"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextGetMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eGets the transformation matrix that will be applied when rendering with\n this context.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Since Pango 1.6\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO Matrix",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextGetMatrix",
        "fct-type": "function",
        "title": "contextGetMatrix"
      },
      "index": {
        "description": "Gets the transformation matrix that will be applied when rendering with this context Since Pango",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextGetMatrix",
        "normalized": "PangoContext-\u003eIO Matrix",
        "package": "pango",
        "partial": "Get Matrix",
        "signature": "PangoContext-\u003eIO Matrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextGetMetrics",
      "description": {
        "fct-descr": "\u003cp\u003eQuery the metrics of the given font implied by the font description.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e FontDescription -\u003e Language -\u003e IO FontMetrics",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextGetMetrics",
        "fct-type": "function",
        "title": "contextGetMetrics"
      },
      "index": {
        "description": "Query the metrics of the given font implied by the font description",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextGetMetrics",
        "normalized": "PangoContext-\u003eFontDescription-\u003eLanguage-\u003eIO FontMetrics",
        "package": "pango",
        "partial": "Get Metrics",
        "signature": "PangoContext-\u003eFontDescription-\u003eLanguage-\u003eIO FontMetrics"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextGetTextDir",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current text direction of this context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO PangoDirection",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextGetTextDir",
        "fct-type": "function",
        "title": "contextGetTextDir"
      },
      "index": {
        "description": "Get the current text direction of this context",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextGetTextDir",
        "normalized": "PangoContext-\u003eIO PangoDirection",
        "package": "pango",
        "partial": "Get Text Dir",
        "signature": "PangoContext-\u003eIO PangoDirection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextGetTextGravity",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current text gravity of this context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO PangoGravity",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextGetTextGravity",
        "fct-type": "function",
        "title": "contextGetTextGravity"
      },
      "index": {
        "description": "Get the current text gravity of this context",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextGetTextGravity",
        "normalized": "PangoContext-\u003eIO PangoGravity",
        "package": "pango",
        "partial": "Get Text Gravity",
        "signature": "PangoContext-\u003eIO PangoGravity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextGetTextGravityHint",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current text gravity of this context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO PangoGravityHint",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextGetTextGravityHint",
        "fct-type": "function",
        "title": "contextGetTextGravityHint"
      },
      "index": {
        "description": "Get the current text gravity of this context",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextGetTextGravityHint",
        "normalized": "PangoContext-\u003eIO PangoGravityHint",
        "package": "pango",
        "partial": "Get Text Gravity Hint",
        "signature": "PangoContext-\u003eIO PangoGravityHint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextListFamilies",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list of all available font families.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A font family is the name of the font without further attributes\n like slant, variant or size.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO [FontFamily]",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextListFamilies",
        "fct-type": "function",
        "title": "contextListFamilies"
      },
      "index": {
        "description": "Retrieve list of all available font families font family is the name of the font without further attributes like slant variant or size",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextListFamilies",
        "normalized": "PangoContext-\u003eIO[FontFamily]",
        "package": "pango",
        "partial": "List Families",
        "signature": "PangoContext-\u003eIO[FontFamily]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextSetFontDescription",
      "description": {
        "fct-descr": "\u003cp\u003eSet the default \u003ccode\u003e\u003ca\u003eFontDescription\u003c/a\u003e\u003c/code\u003e of this context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e FontDescription -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextSetFontDescription",
        "fct-type": "function",
        "title": "contextSetFontDescription"
      },
      "index": {
        "description": "Set the default FontDescription of this context",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextSetFontDescription",
        "normalized": "PangoContext-\u003eFontDescription-\u003eIO()",
        "package": "pango",
        "partial": "Set Font Description",
        "signature": "PangoContext-\u003eFontDescription-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextSetLanguage",
      "description": {
        "fct-descr": "\u003cp\u003eSet the default \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e of this context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e Language -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextSetLanguage",
        "fct-type": "function",
        "title": "contextSetLanguage"
      },
      "index": {
        "description": "Set the default Language of this context",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextSetLanguage",
        "normalized": "PangoContext-\u003eLanguage-\u003eIO()",
        "package": "pango",
        "partial": "Set Language",
        "signature": "PangoContext-\u003eLanguage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextSetMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eSets the transformation matrix that will be applied when rendering with\n this context. Note that any metrics reported by other functions are in user\n space coordinates before the application of the matrix, not device-space\n coordinates after the application of the matrix. So, they don't scale with\n the matrix, though they may change slightly for different matrices,\n depending on how the text is fit to the pixel grid.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Since Pango 1.6\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e Matrix -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextSetMatrix",
        "fct-type": "function",
        "title": "contextSetMatrix"
      },
      "index": {
        "description": "Sets the transformation matrix that will be applied when rendering with this context Note that any metrics reported by other functions are in user space coordinates before the application of the matrix not device-space coordinates after the application of the matrix So they don scale with the matrix though they may change slightly for different matrices depending on how the text is fit to the pixel grid Since Pango",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextSetMatrix",
        "normalized": "PangoContext-\u003eMatrix-\u003eIO()",
        "package": "pango",
        "partial": "Set Matrix",
        "signature": "PangoContext-\u003eMatrix-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextSetTextDir",
      "description": {
        "fct-descr": "\u003cp\u003eSet the default text direction of this context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e PangoDirection -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextSetTextDir",
        "fct-type": "function",
        "title": "contextSetTextDir"
      },
      "index": {
        "description": "Set the default text direction of this context",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextSetTextDir",
        "normalized": "PangoContext-\u003ePangoDirection-\u003eIO()",
        "package": "pango",
        "partial": "Set Text Dir",
        "signature": "PangoContext-\u003ePangoDirection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextSetTextGravity",
      "description": {
        "fct-descr": "\u003cp\u003eSet the text gravity of this context. If the given value is\n \u003ccode\u003e\u003ca\u003ePangoGravityAuto\u003c/a\u003e\u003c/code\u003e then the gravity is derived from the current rotation\n matrix.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e PangoGravity -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextSetTextGravity",
        "fct-type": "function",
        "title": "contextSetTextGravity"
      },
      "index": {
        "description": "Set the text gravity of this context If the given value is PangoGravityAuto then the gravity is derived from the current rotation matrix",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextSetTextGravity",
        "normalized": "PangoContext-\u003ePangoGravity-\u003eIO()",
        "package": "pango",
        "partial": "Set Text Gravity",
        "signature": "PangoContext-\u003ePangoGravity-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:contextSetTextGravityHint",
      "description": {
        "fct-descr": "\u003cp\u003eSet the text gravity hint of this context.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e PangoGravityHint -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Context.html#contextSetTextGravityHint",
        "fct-type": "function",
        "title": "contextSetTextGravityHint"
      },
      "index": {
        "description": "Set the text gravity hint of this context",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "contextSetTextGravityHint",
        "normalized": "PangoContext-\u003ePangoGravityHint-\u003eIO()",
        "package": "pango",
        "partial": "Set Text Gravity Hint",
        "signature": "PangoContext-\u003ePangoGravityHint-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:emptyLanguage",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifying no particular language.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "Language",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#emptyLanguage",
        "fct-type": "function",
        "title": "emptyLanguage"
      },
      "index": {
        "description": "Specifying no particular language",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "emptyLanguage",
        "normalized": "",
        "package": "pango",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Context.html#v:languageFromString",
      "description": {
        "fct-descr": "\u003cp\u003eTake a RFC-3066 format language tag as a string and convert it to a\n \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e type that can be efficiently passed around and compared with\n other language tags.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This function first canonicalizes the string by converting it to\n lowercase, mapping '_' to '-', and stripping all characters\n other than letters and '-'.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Context",
        "fct-package": "pango",
        "fct-signature": "String -\u003e IO Language",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#languageFromString",
        "fct-type": "function",
        "title": "languageFromString"
      },
      "index": {
        "description": "Take RFC-3066 format language tag as string and convert it to Language type that can be efficiently passed around and compared with other language tags This function first canonicalizes the string by converting it to lowercase mapping to and stripping all characters other than letters and",
        "hierarchy": "Graphics Rendering Pango Context",
        "module": "Graphics.Rendering.Pango.Context",
        "name": "languageFromString",
        "normalized": "String-\u003eIO Language",
        "package": "pango",
        "partial": "From String",
        "signature": "String-\u003eIO Language"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnumerations for describing font characteristics.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html",
        "fct-type": "module",
        "title": "Enums"
      },
      "index": {
        "description": "Enumerations for describing font characteristics",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Enums",
        "normalized": "",
        "package": "pango",
        "partial": "Enums",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eColor\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Specifies a color with three integer values for red, green and blue.\n   All values range from 0 (least intense) to 65535 (highest intensity).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "Color Specifies color with three integer values for red green and blue All values range from least intense to highest intensity",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Color",
        "normalized": "",
        "package": "pango",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:EllipsizeMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEllipsizeMode\u003c/a\u003e\u003c/code\u003e type describes what sort of (if any) ellipsization\n should be applied to a line of text. In the ellipsization process characters\n are removed from the text in order to make it fit to a given width and\n replaced with an ellipsis.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "data",
        "title": "EllipsizeMode"
      },
      "index": {
        "description": "The EllipsizeMode type describes what sort of if any ellipsization should be applied to line of text In the ellipsization process characters are removed from the text in order to make it fit to given width and replaced with an ellipsis",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "EllipsizeMode",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:FontMetrics",
      "description": {
        "fct-descr": "\u003cp\u003eThe characteristic measurements of a font.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All values are measured in pixels.\n\u003c/li\u003e\u003cli\u003e In Pango versions before 1.6 only \u003ccode\u003e\u003ca\u003eascent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edescent\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eapproximateCharWidth\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eapproximateDigitWidth\u003c/a\u003e\u003c/code\u003e are available.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "data",
        "title": "FontMetrics"
      },
      "index": {
        "description": "The characteristic measurements of font All values are measured in pixels In Pango versions before only ascent descent approximateCharWidth and approximateDigitWidth are available",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "FontMetrics",
        "normalized": "",
        "package": "pango",
        "partial": "Font Metrics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:FontStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThe style of a font.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eStyleOblique\u003c/a\u003e\u003c/code\u003e is a slanted font like \u003ccode\u003e\u003ca\u003eStyleItalic\u003c/a\u003e\u003c/code\u003e,\n but in a roman style.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#FontStyle",
        "fct-type": "data",
        "title": "FontStyle"
      },
      "index": {
        "description": "The style of font StyleOblique is slanted font like StyleItalic but in roman style",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "FontStyle",
        "normalized": "",
        "package": "pango",
        "partial": "Font Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:Language",
      "description": {
        "fct-descr": "\u003cp\u003eAn RFC-3066 language designator to choose scripts.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Language",
        "fct-type": "data",
        "title": "Language"
      },
      "index": {
        "description": "An RFC-3066 language designator to choose scripts",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Language",
        "normalized": "",
        "package": "pango",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:Markup",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a synonym for text with embedded markup commands.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Markup strings are just simple strings. But it's easier to tell if a\n   method expects text with or without markup.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#Markup",
        "fct-type": "type",
        "title": "Markup"
      },
      "index": {
        "description": "Define synonym for text with embedded markup commands Markup strings are just simple strings But it easier to tell if method expects text with or without markup",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Markup",
        "normalized": "",
        "package": "pango",
        "partial": "Markup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:PangoAttribute",
      "description": {
        "fct-descr": "\u003cp\u003eAttributes for \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A given attribute is applied from its start position \u003ccode\u003e\u003ca\u003epaStart\u003c/a\u003e\u003c/code\u003e up,\n   but not including the end position, \u003ccode\u003e\u003ca\u003epaEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "data",
        "title": "PangoAttribute"
      },
      "index": {
        "description": "Attributes for PangoItem given attribute is applied from its start position paStart up but not including the end position paEnd",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoAttribute",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:PangoDirection",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePangoDirection\u003c/a\u003e\u003c/code\u003e type represents a direction in the Unicode\n bidirectional algorithm.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \"weak\" values denote a left-to-right or right-to-left direction\n   only if there is no character with a strong direction in a paragraph.\n   An example is a sequence of special, graphical characters which are\n   neutral with respect to their rendering direction. A fresh\n   \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e is by default weakly\n   left-to-right.\n\u003c/li\u003e\u003cli\u003e Not every value in this enumeration makes sense for every usage\n   of \u003ccode\u003e\u003ca\u003ePangoDirection\u003c/a\u003e\u003c/code\u003e; for example, the return value of\n   \u003ccode\u003eunicharDirection\u003c/code\u003e and \u003ccode\u003efindBaseDir\u003c/code\u003e cannot be \u003ccode\u003e\u003ca\u003ePangoDirectionWeakLtr\u003c/a\u003e\u003c/code\u003e\n   or \u003ccode\u003e\u003ca\u003ePangoDirectionWeakRtl\u003c/a\u003e\u003c/code\u003e, since every character is either neutral or\n   has a strong direction; on the other hand \u003ccode\u003e\u003ca\u003ePangoDirectionNeutral\u003c/a\u003e\u003c/code\u003e\n   doesn't make sense to pass to \u003ccode\u003elog2visGetEmbeddingLevels\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoDirection",
        "fct-type": "data",
        "title": "PangoDirection"
      },
      "index": {
        "description": "The PangoDirection type represents direction in the Unicode bidirectional algorithm The weak values denote left-to-right or right-to-left direction only if there is no character with strong direction in paragraph An example is sequence of special graphical characters which are neutral with respect to their rendering direction fresh PangoContext is by default weakly left-to-right Not every value in this enumeration makes sense for every usage of PangoDirection for example the return value of unicharDirection and findBaseDir cannot be PangoDirectionWeakLtr or PangoDirectionWeakRtl since every character is either neutral or has strong direction on the other hand PangoDirectionNeutral doesn make sense to pass to log2visGetEmbeddingLevels",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoDirection",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:PangoGravity",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePangoGravity\u003c/a\u003e\u003c/code\u003e type represents the orientation of glyphs in a\n segment of text. The value \u003ccode\u003eGravitySouth\u003c/code\u003e, for instance, indicates that the\n text stands upright, i.e. that the base of the letter is directed\n downwards.\n\u003c/p\u003e\u003cp\u003eThis is useful when rendering vertical text layouts. In those situations,\n the layout is rotated using a non-identity \u003ccode\u003ePangoMatrix\u003c/code\u003e, and then glyph\n orientation is controlled using \u003ccode\u003e\u003ca\u003ePangoGravity\u003c/a\u003e\u003c/code\u003e. Not every value in this\n enumeration makes sense for every usage of \u003ccode\u003eGravity\u003c/code\u003e; for example,\n \u003ccode\u003e\u003ca\u003ePangoGravityAuto\u003c/a\u003e\u003c/code\u003e only can be passed to \u003ccode\u003epangoContextSetBaseGravity\u003c/code\u003e and\n can only be returned by \u003ccode\u003epangoContextGetBaseGravity\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e See also: \u003ccode\u003e\u003ca\u003ePangoGravityHint\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Gravity is resolved from the context matrix.\n\u003c/li\u003e\u003cli\u003e Since Pango 1.16\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravity",
        "fct-type": "data",
        "title": "PangoGravity"
      },
      "index": {
        "description": "The PangoGravity type represents the orientation of glyphs in segment of text The value GravitySouth for instance indicates that the text stands upright i.e that the base of the letter is directed downwards This is useful when rendering vertical text layouts In those situations the layout is rotated using non-identity PangoMatrix and then glyph orientation is controlled using PangoGravity Not every value in this enumeration makes sense for every usage of Gravity for example PangoGravityAuto only can be passed to pangoContextSetBaseGravity and can only be returned by pangoContextGetBaseGravity See also PangoGravityHint Gravity is resolved from the context matrix Since Pango",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravity",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:PangoGravityHint",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePangoGravityHint\u003c/a\u003e\u003c/code\u003e defines how horizontal scripts should behave in a\n vertical context.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePangoGravityHintNatural\u003c/a\u003e\u003c/code\u003e: scripts will take their natural gravity based\n on the base gravity and the script. This is the default.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePangoGravityHintStrong\u003c/a\u003e\u003c/code\u003e: always use the base gravity set, regardless of\n the script.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePangoGravityHintLine\u003c/a\u003e\u003c/code\u003e: for scripts not in their natural direction (eg.\n Latin in East gravity), choose per-script gravity such that every script\n respects the line progression. This means, Latin and Arabic will take\n opposite gravities and both flow top-to-bottom for example.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravityHint",
        "fct-type": "data",
        "title": "PangoGravityHint"
      },
      "index": {
        "description": "The PangoGravityHint defines how horizontal scripts should behave in vertical context PangoGravityHintNatural scripts will take their natural gravity based on the base gravity and the script This is the default PangoGravityHintStrong always use the base gravity set regardless of the script PangoGravityHintLine for scripts not in their natural direction eg Latin in East gravity choose per-script gravity such that every script respects the line progression This means Latin and Arabic will take opposite gravities and both flow top-to-bottom for example",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravityHint",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:PangoRectangle",
      "description": {
        "fct-descr": "\u003cp\u003eRectangles describing an area in \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Specifies x, y, width and height\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoRectangle",
        "fct-type": "data",
        "title": "PangoRectangle"
      },
      "index": {
        "description": "Rectangles describing an area in Double Specifies width and height",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoRectangle",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:PangoUnit",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoUnit",
        "fct-type": "type",
        "title": "PangoUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoUnit",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:Rectangle",
      "description": {
        "fct-descr": "\u003cp\u003eRectangle\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Specifies x, y, width and height\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#Rectangle",
        "fct-type": "data",
        "title": "Rectangle"
      },
      "index": {
        "description": "Rectangle Specifies width and height",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Rectangle",
        "normalized": "",
        "package": "pango",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:Size",
      "description": {
        "fct-descr": "\u003cp\u003eDefine attributes for \u003ccode\u003eFontSize\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "data",
        "title": "Size"
      },
      "index": {
        "description": "Define attributes for FontSize",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Size",
        "normalized": "",
        "package": "pango",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:Stretch",
      "description": {
        "fct-descr": "\u003cp\u003eDefine how wide characters are.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "data",
        "title": "Stretch"
      },
      "index": {
        "description": "Define how wide characters are",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Stretch",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:Underline",
      "description": {
        "fct-descr": "\u003cp\u003eDefine attributes for \u003ccode\u003e\u003ca\u003eUnderline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The squiggly underline for errors is only available in Gtk 2.4 and higher.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Underline",
        "fct-type": "data",
        "title": "Underline"
      },
      "index": {
        "description": "Define attributes for Underline The squiggly underline for errors is only available in Gtk and higher",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Underline",
        "normalized": "",
        "package": "pango",
        "partial": "Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:Variant",
      "description": {
        "fct-descr": "\u003cp\u003eThe variant of a font.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eVariantSmallCaps\u003c/a\u003e\u003c/code\u003e is a version of a font where lower case\n letters are shown as physically smaller upper case letters.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Variant",
        "fct-type": "data",
        "title": "Variant"
      },
      "index": {
        "description": "The variant of font The VariantSmallCaps is version of font where lower case letters are shown as physically smaller upper case letters",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Variant",
        "normalized": "",
        "package": "pango",
        "partial": "Variant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#t:Weight",
      "description": {
        "fct-descr": "\u003cp\u003eDefine attributes for \u003ccode\u003e\u003ca\u003eWeight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "data",
        "title": "Weight"
      },
      "index": {
        "description": "Define attributes for Weight",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Weight",
        "normalized": "",
        "package": "pango",
        "partial": "Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrAbsSize",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the size of the font in device units (pixels).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Available in Pango 1.8.0 and higher.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrAbsSize",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrAbsSize"
      },
      "index": {
        "description": "Specify the size of the font in device units pixels Available in Pango and higher",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrAbsSize",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Abs Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrBackground",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the background color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrBackground",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrBackground"
      },
      "index": {
        "description": "Specify the background color",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrBackground",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrFallback",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if a fall back font should be substituted if no matching\n font is available.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrFallback",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrFallback"
      },
      "index": {
        "description": "Determine if fall back font should be substituted if no matching font is available",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrFallback",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Fallback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrFamily",
      "description": {
        "fct-descr": "\u003cp\u003eThe font family, e.g. \u003ccode\u003esans serif\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrFamily",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrFamily"
      },
      "index": {
        "description": "The font family e.g sans serif",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrFamily",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrFontDescription",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify several attributes of a font at once. Note that no deep copy\n   of the description is made when this attributes is passed to or received\n   from functions.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrFontDescription",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrFontDescription"
      },
      "index": {
        "description": "Specify several attributes of font at once Note that no deep copy of the description is made when this attributes is passed to or received from functions",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrFontDescription",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Font Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrForeground",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the foreground color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrForeground",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrForeground"
      },
      "index": {
        "description": "Specify the foreground color",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrForeground",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Foreground",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrGravity",
      "description": {
        "fct-descr": "\u003cp\u003eSets the gravity field of a font description. The gravity field specifies\n how the glyphs should be rotated. If gravity is \u003ccode\u003eGravityAuto\u003c/code\u003e, this\n actually unsets the gravity mask on the font description.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This function is seldom useful to the user. Gravity should normally be\n   set on a \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Available in Pango 1.16.0 and higher.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrGravity",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrGravity"
      },
      "index": {
        "description": "Sets the gravity field of font description The gravity field specifies how the glyphs should be rotated If gravity is GravityAuto this actually unsets the gravity mask on the font description This function is seldom useful to the user Gravity should normally be set on PangoContext Available in Pango and higher",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrGravity",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Gravity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrGravityHint",
      "description": {
        "fct-descr": "\u003cp\u003eSet the way horizontal scripts behave in a vertical context.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Available in Pango 1.16.0 and higher.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrGravityHint",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrGravityHint"
      },
      "index": {
        "description": "Set the way horizontal scripts behave in vertical context Available in Pango and higher",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrGravityHint",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Gravity Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrLanguage",
      "description": {
        "fct-descr": "\u003cp\u003eA hint as to what language this piece of text is written in.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrLanguage",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrLanguage"
      },
      "index": {
        "description": "hint as to what language this piece of text is written in",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrLanguage",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrLetterSpacing",
      "description": {
        "fct-descr": "\u003cp\u003eAdd extra space between graphemes of the text.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Available in Pango 1.6.0 and higher.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrLetterSpacing",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrLetterSpacing"
      },
      "index": {
        "description": "Add extra space between graphemes of the text Available in Pango and higher",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrLetterSpacing",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Letter Spacing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrRise",
      "description": {
        "fct-descr": "\u003cp\u003eDisplace the text vertically. Positive values move the text upwards.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrRise",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrRise"
      },
      "index": {
        "description": "Displace the text vertically Positive values move the text upwards",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrRise",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Rise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrScale",
      "description": {
        "fct-descr": "\u003cp\u003eScale the font up (values greater than one) or shrink the font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrScale",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrScale"
      },
      "index": {
        "description": "Scale the font up values greater than one or shrink the font",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrScale",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrShape",
      "description": {
        "fct-descr": "\u003cp\u003eRestrict the amount of what is drawn of the marked shapes.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Available in Pango 1.8.0 and higher.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrShape",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrShape"
      },
      "index": {
        "description": "Restrict the amount of what is drawn of the marked shapes Available in Pango and higher",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrShape",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrSize",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the size of the font in points.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrSize",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrSize"
      },
      "index": {
        "description": "Specify the size of the font in points",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrSize",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrStretch",
      "description": {
        "fct-descr": "\u003cp\u003eStretch or condense the width of the letters.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrStretch",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrStretch"
      },
      "index": {
        "description": "Stretch or condense the width of the letters",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrStretch",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Stretch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrStrikethrough",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify if this piece of text should have a line through it.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrStrikethrough",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrStrikethrough"
      },
      "index": {
        "description": "Specify if this piece of text should have line through it",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrStrikethrough",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Strikethrough",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrStrikethroughColor",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the color of the strike through line.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Available in Pango 1.8.0 and higher.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrStrikethroughColor",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrStrikethroughColor"
      },
      "index": {
        "description": "Specify the color of the strike through line Available in Pango and higher",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrStrikethroughColor",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Strikethrough Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThe slant of the current font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrStyle",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrStyle"
      },
      "index": {
        "description": "The slant of the current font",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrStyle",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrUnderline",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the kind of underline, e.g. \u003ccode\u003e\u003ca\u003eUnderlineSingle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrUnderline",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrUnderline"
      },
      "index": {
        "description": "Specify the kind of underline e.g UnderlineSingle",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrUnderline",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrUnderlineColor",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the color of an underline.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Available in Pango 1.8.0 and higher.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrUnderlineColor",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrUnderlineColor"
      },
      "index": {
        "description": "Specify the color of an underline Available in Pango and higher",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrUnderlineColor",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Underline Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrVariant",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVariantSmallCaps\u003c/a\u003e\u003c/code\u003e will display lower case letters as small\n upper case letters (if the font supports this).\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrVariant",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrVariant"
      },
      "index": {
        "description": "VariantSmallCaps will display lower case letters as small upper case letters if the font supports this",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrVariant",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Variant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:AttrWeight",
      "description": {
        "fct-descr": "\u003cp\u003eWeight of font, e.g. \u003ccode\u003e\u003ca\u003eWeightBold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "AttrWeight",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "AttrWeight"
      },
      "index": {
        "description": "Weight of font e.g WeightBold",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "AttrWeight",
        "normalized": "",
        "package": "pango",
        "partial": "Attr Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:Color",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Color Word16 Word16 Word16",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#Color",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Color",
        "normalized": "",
        "package": "pango",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:EllipsizeEnd",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "EllipsizeEnd",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "function",
        "title": "EllipsizeEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "EllipsizeEnd",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:EllipsizeMiddle",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "EllipsizeMiddle",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "function",
        "title": "EllipsizeMiddle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "EllipsizeMiddle",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize Middle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:EllipsizeNone",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "EllipsizeNone",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "function",
        "title": "EllipsizeNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "EllipsizeNone",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:EllipsizeStart",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "EllipsizeStart",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "function",
        "title": "EllipsizeStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "EllipsizeStart",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:FontMetrics",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "FontMetrics",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "function",
        "title": "FontMetrics"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "FontMetrics",
        "normalized": "",
        "package": "pango",
        "partial": "Font Metrics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoDirectionLtr",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoDirectionLtr",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoDirection",
        "fct-type": "function",
        "title": "PangoDirectionLtr"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoDirectionLtr",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Direction Ltr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoDirectionNeutral",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoDirectionNeutral",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoDirection",
        "fct-type": "function",
        "title": "PangoDirectionNeutral"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoDirectionNeutral",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Direction Neutral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoDirectionRtl",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoDirectionRtl",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoDirection",
        "fct-type": "function",
        "title": "PangoDirectionRtl"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoDirectionRtl",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Direction Rtl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoDirectionWeakLtr",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoDirectionWeakLtr",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoDirection",
        "fct-type": "function",
        "title": "PangoDirectionWeakLtr"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoDirectionWeakLtr",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Direction Weak Ltr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoDirectionWeakRtl",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoDirectionWeakRtl",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoDirection",
        "fct-type": "function",
        "title": "PangoDirectionWeakRtl"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoDirectionWeakRtl",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Direction Weak Rtl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoGravityAuto",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravityAuto",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravity",
        "fct-type": "function",
        "title": "PangoGravityAuto"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravityAuto",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoGravityEast",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravityEast",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravity",
        "fct-type": "function",
        "title": "PangoGravityEast"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravityEast",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity East",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoGravityHintLine",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravityHintLine",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravityHint",
        "fct-type": "function",
        "title": "PangoGravityHintLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravityHintLine",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity Hint Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoGravityHintNatural",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravityHintNatural",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravityHint",
        "fct-type": "function",
        "title": "PangoGravityHintNatural"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravityHintNatural",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity Hint Natural",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoGravityHintStrong",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravityHintStrong",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravityHint",
        "fct-type": "function",
        "title": "PangoGravityHintStrong"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravityHintStrong",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity Hint Strong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoGravityNorth",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravityNorth",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravity",
        "fct-type": "function",
        "title": "PangoGravityNorth"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravityNorth",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity North",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoGravitySouth",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravitySouth",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravity",
        "fct-type": "function",
        "title": "PangoGravitySouth"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravitySouth",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity South",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoGravityWest",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravityWest",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoGravity",
        "fct-type": "function",
        "title": "PangoGravityWest"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoGravityWest",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Gravity West",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:PangoRectangle",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoRectangle Double Double Double Double",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoRectangle",
        "fct-type": "function",
        "title": "PangoRectangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "PangoRectangle",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:Rectangle",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Rectangle Int Int Int Int",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#Rectangle",
        "fct-type": "function",
        "title": "Rectangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "Rectangle",
        "normalized": "",
        "package": "pango",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizeGiant",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizeGiant",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizeGiant"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizeGiant",
        "normalized": "",
        "package": "pango",
        "partial": "Size Giant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizeHuge",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizeHuge",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizeHuge"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizeHuge",
        "normalized": "",
        "package": "pango",
        "partial": "Size Huge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizeLarge",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizeLarge",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizeLarge"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizeLarge",
        "normalized": "",
        "package": "pango",
        "partial": "Size Large",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizeLarger",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizeLarger",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizeLarger"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizeLarger",
        "normalized": "",
        "package": "pango",
        "partial": "Size Larger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizeMedium",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizeMedium",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizeMedium"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizeMedium",
        "normalized": "",
        "package": "pango",
        "partial": "Size Medium",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizePoint",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizePoint Double",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizePoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizePoint",
        "normalized": "",
        "package": "pango",
        "partial": "Size Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizeSmall",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizeSmall",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizeSmall"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizeSmall",
        "normalized": "",
        "package": "pango",
        "partial": "Size Small",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizeSmaller",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizeSmaller",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizeSmaller"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizeSmaller",
        "normalized": "",
        "package": "pango",
        "partial": "Size Smaller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizeTiny",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizeTiny",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizeTiny"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizeTiny",
        "normalized": "",
        "package": "pango",
        "partial": "Size Tiny",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:SizeUnreadable",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "SizeUnreadable",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#Size",
        "fct-type": "function",
        "title": "SizeUnreadable"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "SizeUnreadable",
        "normalized": "",
        "package": "pango",
        "partial": "Size Unreadable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StretchCondensed",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StretchCondensed",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "function",
        "title": "StretchCondensed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StretchCondensed",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch Condensed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StretchExpanded",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StretchExpanded",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "function",
        "title": "StretchExpanded"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StretchExpanded",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch Expanded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StretchExtraCondensed",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StretchExtraCondensed",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "function",
        "title": "StretchExtraCondensed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StretchExtraCondensed",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch Extra Condensed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StretchExtraExpanded",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StretchExtraExpanded",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "function",
        "title": "StretchExtraExpanded"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StretchExtraExpanded",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch Extra Expanded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StretchNormal",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StretchNormal",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "function",
        "title": "StretchNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StretchNormal",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StretchSemiCondensed",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StretchSemiCondensed",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "function",
        "title": "StretchSemiCondensed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StretchSemiCondensed",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch Semi Condensed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StretchSemiExpanded",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StretchSemiExpanded",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "function",
        "title": "StretchSemiExpanded"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StretchSemiExpanded",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch Semi Expanded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StretchUltraCondensed",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StretchUltraCondensed",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "function",
        "title": "StretchUltraCondensed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StretchUltraCondensed",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch Ultra Condensed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StretchUltraExpanded",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StretchUltraExpanded",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Stretch",
        "fct-type": "function",
        "title": "StretchUltraExpanded"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StretchUltraExpanded",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch Ultra Expanded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StyleItalic",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StyleItalic",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#FontStyle",
        "fct-type": "function",
        "title": "StyleItalic"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StyleItalic",
        "normalized": "",
        "package": "pango",
        "partial": "Style Italic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StyleNormal",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StyleNormal",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#FontStyle",
        "fct-type": "function",
        "title": "StyleNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StyleNormal",
        "normalized": "",
        "package": "pango",
        "partial": "Style Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:StyleOblique",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "StyleOblique",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#FontStyle",
        "fct-type": "function",
        "title": "StyleOblique"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "StyleOblique",
        "normalized": "",
        "package": "pango",
        "partial": "Style Oblique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:UnderlineDouble",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "UnderlineDouble",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Underline",
        "fct-type": "function",
        "title": "UnderlineDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "UnderlineDouble",
        "normalized": "",
        "package": "pango",
        "partial": "Underline Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:UnderlineError",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "UnderlineError",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Underline",
        "fct-type": "function",
        "title": "UnderlineError"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "UnderlineError",
        "normalized": "",
        "package": "pango",
        "partial": "Underline Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:UnderlineLow",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "UnderlineLow",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Underline",
        "fct-type": "function",
        "title": "UnderlineLow"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "UnderlineLow",
        "normalized": "",
        "package": "pango",
        "partial": "Underline Low",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:UnderlineNone",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "UnderlineNone",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Underline",
        "fct-type": "function",
        "title": "UnderlineNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "UnderlineNone",
        "normalized": "",
        "package": "pango",
        "partial": "Underline None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:UnderlineSingle",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "UnderlineSingle",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Underline",
        "fct-type": "function",
        "title": "UnderlineSingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "UnderlineSingle",
        "normalized": "",
        "package": "pango",
        "partial": "Underline Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:VariantNormal",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "VariantNormal",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Variant",
        "fct-type": "function",
        "title": "VariantNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "VariantNormal",
        "normalized": "",
        "package": "pango",
        "partial": "Variant Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:VariantSmallCaps",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "VariantSmallCaps",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Variant",
        "fct-type": "function",
        "title": "VariantSmallCaps"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "VariantSmallCaps",
        "normalized": "",
        "package": "pango",
        "partial": "Variant Small Caps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightBold",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightBold",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightBold"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightBold",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Bold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightBook",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightBook",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightBook"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightBook",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Book",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightHeavy",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightHeavy",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightHeavy"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightHeavy",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Heavy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightLight",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightLight",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightLight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightLight",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightMedium",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightMedium",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightMedium"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightMedium",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Medium",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightNormal",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightNormal",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightNormal",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightSemibold",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightSemibold",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightSemibold"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightSemibold",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Semibold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightThin",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightThin",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightThin"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightThin",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Thin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightUltrabold",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightUltrabold",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightUltrabold"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightUltrabold",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Ultrabold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightUltraheavy",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightUltraheavy",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightUltraheavy"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightUltraheavy",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Ultraheavy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:WeightUltralight",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "WeightUltralight",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#Weight",
        "fct-type": "function",
        "title": "WeightUltralight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "WeightUltralight",
        "normalized": "",
        "package": "pango",
        "partial": "Weight Ultralight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:approximateCharWidth",
      "description": {
        "fct-descr": "\u003cp\u003eThe approximate character width. This is merely a\n representative value useful, for example, for determining the\n initial size for a window. Actual characters in text will be\n wider and narrower than this.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "function",
        "title": "approximateCharWidth"
      },
      "index": {
        "description": "The approximate character width This is merely representative value useful for example for determining the initial size for window Actual characters in text will be wider and narrower than this",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "approximateCharWidth",
        "normalized": "",
        "package": "pango",
        "partial": "Char Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:approximateDigitWidth",
      "description": {
        "fct-descr": "\u003cp\u003eThe approximate digit width. This is merely a representative\n value useful, for example, for determining the initial size for\n a window. Actual digits in text can be wider and narrower than\n this, though this value is generally somewhat more accurate\n than \u003ccode\u003e\u003ca\u003eapproximateCharWidth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "function",
        "title": "approximateDigitWidth"
      },
      "index": {
        "description": "The approximate digit width This is merely representative value useful for example for determining the initial size for window Actual digits in text can be wider and narrower than this though this value is generally somewhat more accurate than approximateCharWidth",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "approximateDigitWidth",
        "normalized": "",
        "package": "pango",
        "partial": "Digit Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:ascent",
      "description": {
        "fct-descr": "\u003cp\u003eThe ascent is the distance from the baseline to the logical top\n of a line of text. (The logical top may be above or below the\n top of the actual drawn ink. It is necessary to lay out the\n text to figure where the ink will be.)\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "function",
        "title": "ascent"
      },
      "index": {
        "description": "The ascent is the distance from the baseline to the logical top of line of text The logical top may be above or below the top of the actual drawn ink It is necessary to lay out the text to figure where the ink will be",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "ascent",
        "normalized": "",
        "package": "pango",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:descent",
      "description": {
        "fct-descr": "\u003cp\u003eThe descent is the distance from the baseline to the logical\n bottom of a line of text. (The logical bottom may be above or\n below the bottom of the actual drawn ink. It is necessary to\n lay out the text to figure where the ink will be.)\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "function",
        "title": "descent"
      },
      "index": {
        "description": "The descent is the distance from the baseline to the logical bottom of line of text The logical bottom may be above or below the bottom of the actual drawn ink It is necessary to lay out the text to figure where the ink will be",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "descent",
        "normalized": "",
        "package": "pango",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:emptyLanguage",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifying no particular language.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Language",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#emptyLanguage",
        "fct-type": "function",
        "title": "emptyLanguage"
      },
      "index": {
        "description": "Specifying no particular language",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "emptyLanguage",
        "normalized": "",
        "package": "pango",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:languageFromString",
      "description": {
        "fct-descr": "\u003cp\u003eTake a RFC-3066 format language tag as a string and convert it to a\n \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e type that can be efficiently passed around and compared with\n other language tags.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This function first canonicalizes the string by converting it to\n lowercase, mapping '_' to '-', and stripping all characters\n other than letters and '-'.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "String -\u003e IO Language",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#languageFromString",
        "fct-type": "function",
        "title": "languageFromString"
      },
      "index": {
        "description": "Take RFC-3066 format language tag as string and convert it to Language type that can be efficiently passed around and compared with other language tags This function first canonicalizes the string by converting it to lowercase mapping to and stripping all characters other than letters and",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "languageFromString",
        "normalized": "String-\u003eIO Language",
        "package": "pango",
        "partial": "From String",
        "signature": "String-\u003eIO Language"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paColor",
        "normalized": "",
        "package": "pango",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paEnd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paEnd",
        "normalized": "",
        "package": "pango",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paFallback",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paFallback"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paFallback",
        "normalized": "",
        "package": "pango",
        "partial": "Fallback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paFamily",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "String",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paFamily"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paFamily",
        "normalized": "",
        "package": "pango",
        "partial": "Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paFontDescription",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "FontDescription",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paFontDescription"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paFontDescription",
        "normalized": "",
        "package": "pango",
        "partial": "Font Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paGravity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravity",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paGravity"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paGravity",
        "normalized": "",
        "package": "pango",
        "partial": "Gravity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paGravityHint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoGravityHint",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paGravityHint"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paGravityHint",
        "normalized": "",
        "package": "pango",
        "partial": "Gravity Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paInk",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoRectangle",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paInk"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paInk",
        "normalized": "",
        "package": "pango",
        "partial": "Ink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paLang",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Language",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paLang"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paLang",
        "normalized": "",
        "package": "pango",
        "partial": "Lang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paLetterSpacing",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paLetterSpacing"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paLetterSpacing",
        "normalized": "",
        "package": "pango",
        "partial": "Letter Spacing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paLogical",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "PangoRectangle",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paLogical"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paLogical",
        "normalized": "",
        "package": "pango",
        "partial": "Logical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paRise",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paRise"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paRise",
        "normalized": "",
        "package": "pango",
        "partial": "Rise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paScale",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paScale"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paScale",
        "normalized": "",
        "package": "pango",
        "partial": "Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paSize",
        "normalized": "",
        "package": "pango",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paStart",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paStart",
        "normalized": "",
        "package": "pango",
        "partial": "Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paStretch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Stretch",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paStretch"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paStretch",
        "normalized": "",
        "package": "pango",
        "partial": "Stretch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paStrikethrough",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paStrikethrough"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paStrikethrough",
        "normalized": "",
        "package": "pango",
        "partial": "Strikethrough",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paStyle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "FontStyle",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paStyle",
        "normalized": "",
        "package": "pango",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paUnderline",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Underline",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paUnderline"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paUnderline",
        "normalized": "",
        "package": "pango",
        "partial": "Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paVariant",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Variant",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paVariant"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paVariant",
        "normalized": "",
        "package": "pango",
        "partial": "Variant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:paWeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Weight",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoAttribute",
        "fct-type": "function",
        "title": "paWeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "paWeight",
        "normalized": "",
        "package": "pango",
        "partial": "Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:pangoScale",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#pangoScale",
        "fct-type": "function",
        "title": "pangoScale"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "pangoScale",
        "normalized": "",
        "package": "pango",
        "partial": "Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:strikethroughPosition",
      "description": {
        "fct-descr": "\u003cp\u003eThe suggested position to draw the strikethrough. The value\n returned is the distance above the baseline of the top of the\n strikethrough.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "function",
        "title": "strikethroughPosition"
      },
      "index": {
        "description": "The suggested position to draw the strikethrough The value returned is the distance above the baseline of the top of the strikethrough",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "strikethroughPosition",
        "normalized": "",
        "package": "pango",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:strikethroughThickness",
      "description": {
        "fct-descr": "\u003cp\u003eThe suggested thickness to draw for the strikethrough.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "function",
        "title": "strikethroughThickness"
      },
      "index": {
        "description": "The suggested thickness to draw for the strikethrough",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "strikethroughThickness",
        "normalized": "",
        "package": "pango",
        "partial": "Thickness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:underlinePosition",
      "description": {
        "fct-descr": "\u003cp\u003eThe suggested position to draw the underline. The value returned is\n the distance above the baseline of the top of the underline. Since\n most fonts have underline positions beneath the baseline, this value\n is typically negative.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "function",
        "title": "underlinePosition"
      },
      "index": {
        "description": "The suggested position to draw the underline The value returned is the distance above the baseline of the top of the underline Since most fonts have underline positions beneath the baseline this value is typically negative",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "underlinePosition",
        "normalized": "",
        "package": "pango",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Enums.html#v:underlineThickness",
      "description": {
        "fct-descr": "\u003cp\u003eThe suggested thickness to draw an underline.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Enums",
        "fct-package": "pango",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#FontMetrics",
        "fct-type": "function",
        "title": "underlineThickness"
      },
      "index": {
        "description": "The suggested thickness to draw an underline",
        "hierarchy": "Graphics Rendering Pango Enums",
        "module": "Graphics.Rendering.Pango.Enums",
        "name": "underlineThickness",
        "normalized": "",
        "package": "pango",
        "partial": "Thickness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFonts. The selection of an appropriate font to render text becomes a\n substantial task in the presence of Unicode where a single font does not\n cover the whole range of possible characters. Pango provides several\n concepts to find appropriate fonts and to query information about them:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFontDescription\u003c/a\u003e\u003c/code\u003e: Font descriptions provide a way to query and state\n requirements on\n fonts. This data structure has several fields describing different\n characteristics of a font. Each of these fields can be set of left\n unspecified.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFontMap\u003c/a\u003e\u003c/code\u003e : A font map represents the set of fonts available for a\n particular rendering system. In particular this map defines the\n relation between font size and pixel size in terms of the output medium.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFontFamily\u003c/a\u003e\u003c/code\u003e : A font family represents a set of fonts that have\n related faces, that is, their faces share a common design, but differ\n in slant, weight, width and other aspects.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFontFace\u003c/a\u003e\u003c/code\u003e: A face is a specific font where all characteristics are\n fixed except for the size.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFont\u003c/a\u003e\u003c/code\u003e: A font in the underlying rendering system.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFontMetrics\u003c/a\u003e\u003c/code\u003e: Information about the font that will be used to render\n a specific \u003ccode\u003eContext\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-Pango-Font.html",
        "fct-type": "module",
        "title": "Font"
      },
      "index": {
        "description": "Fonts The selection of an appropriate font to render text becomes substantial task in the presence of Unicode where single font does not cover the whole range of possible characters Pango provides several concepts to find appropriate fonts and to query information about them FontDescription Font descriptions provide way to query and state requirements on fonts This data structure has several fields describing different characteristics of font Each of these fields can be set of left unspecified FontMap font map represents the set of fonts available for particular rendering system In particular this map defines the relation between font size and pixel size in terms of the output medium FontFamily font family represents set of fonts that have related faces that is their faces share common design but differ in slant weight width and other aspects FontFace face is specific font where all characteristics are fixed except for the size Font font in the underlying rendering system FontMetrics Information about the font that will be used to render specific Context or PangoItem",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "Font",
        "normalized": "",
        "package": "pango",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:Font",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#Font",
        "fct-type": "data",
        "title": "Font"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "Font",
        "normalized": "",
        "package": "pango",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:FontClass",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#FontClass",
        "fct-type": "class",
        "title": "FontClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "FontClass",
        "normalized": "",
        "package": "pango",
        "partial": "Font Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:FontDescription",
      "description": {
        "fct-descr": "\u003cp\u003eA possibly partial description of font(s).\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#FontDescription",
        "fct-type": "data",
        "title": "FontDescription"
      },
      "index": {
        "description": "possibly partial description of font",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "FontDescription",
        "normalized": "",
        "package": "pango",
        "partial": "Font Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:FontFace",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#FontFace",
        "fct-type": "data",
        "title": "FontFace"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "FontFace",
        "normalized": "",
        "package": "pango",
        "partial": "Font Face",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:FontFaceClass",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#FontFaceClass",
        "fct-type": "class",
        "title": "FontFaceClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "FontFaceClass",
        "normalized": "",
        "package": "pango",
        "partial": "Font Face Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:FontFamily",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#FontFamily",
        "fct-type": "data",
        "title": "FontFamily"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "FontFamily",
        "normalized": "",
        "package": "pango",
        "partial": "Font Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:FontFamilyClass",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#FontFamilyClass",
        "fct-type": "class",
        "title": "FontFamilyClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "FontFamilyClass",
        "normalized": "",
        "package": "pango",
        "partial": "Font Family Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:FontMap",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#FontMap",
        "fct-type": "data",
        "title": "FontMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "FontMap",
        "normalized": "",
        "package": "pango",
        "partial": "Font Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:FontMapClass",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Rendering-Pango-Types.html#FontMapClass",
        "fct-type": "class",
        "title": "FontMapClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "FontMapClass",
        "normalized": "",
        "package": "pango",
        "partial": "Font Map Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#t:FontMask",
      "description": {
        "fct-descr": "\u003cp\u003eFlags denoting which fields in a font description are set.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#FontMask",
        "fct-type": "data",
        "title": "FontMask"
      },
      "index": {
        "description": "Flags denoting which fields in font description are set",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "FontMask",
        "normalized": "",
        "package": "pango",
        "partial": "Font Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:PangoFontMaskFamily",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "PangoFontMaskFamily",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#FontMask",
        "fct-type": "function",
        "title": "PangoFontMaskFamily"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "PangoFontMaskFamily",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Font Mask Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:PangoFontMaskGravity",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "PangoFontMaskGravity",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#FontMask",
        "fct-type": "function",
        "title": "PangoFontMaskGravity"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "PangoFontMaskGravity",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Font Mask Gravity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:PangoFontMaskSize",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "PangoFontMaskSize",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#FontMask",
        "fct-type": "function",
        "title": "PangoFontMaskSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "PangoFontMaskSize",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Font Mask Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:PangoFontMaskStretch",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "PangoFontMaskStretch",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#FontMask",
        "fct-type": "function",
        "title": "PangoFontMaskStretch"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "PangoFontMaskStretch",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Font Mask Stretch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:PangoFontMaskStyle",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "PangoFontMaskStyle",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#FontMask",
        "fct-type": "function",
        "title": "PangoFontMaskStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "PangoFontMaskStyle",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Font Mask Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:PangoFontMaskVariant",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "PangoFontMaskVariant",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#FontMask",
        "fct-type": "function",
        "title": "PangoFontMaskVariant"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "PangoFontMaskVariant",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Font Mask Variant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:PangoFontMaskWeight",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "PangoFontMaskWeight",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#FontMask",
        "fct-type": "function",
        "title": "PangoFontMaskWeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "PangoFontMaskWeight",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Font Mask Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionBetterMatch",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine which of two descriptions matches a given description better.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Returns \u003ccode\u003eTrue\u003c/code\u003e if the last description is a better match to the first\n   arguement than the middle one.\n\u003c/li\u003e\u003cli\u003e Approximate matching is done on weight and style. If the other\n   attributes do not match, the function returns \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e FontDescription -\u003e FontDescription -\u003e Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionBetterMatch",
        "fct-type": "function",
        "title": "fontDescriptionBetterMatch"
      },
      "index": {
        "description": "Determine which of two descriptions matches given description better Returns True if the last description is better match to the first arguement than the middle one Approximate matching is done on weight and style If the other attributes do not match the function returns False",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionBetterMatch",
        "normalized": "FontDescription-\u003eFontDescription-\u003eFontDescription-\u003eBool",
        "package": "pango",
        "partial": "Description Better Match",
        "signature": "FontDescription-\u003eFontDescription-\u003eFontDescription-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionCopy",
      "description": {
        "fct-descr": "\u003cp\u003eMake a deep copy of a font description.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e IO FontDescription",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionCopy",
        "fct-type": "function",
        "title": "fontDescriptionCopy"
      },
      "index": {
        "description": "Make deep copy of font description",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionCopy",
        "normalized": "FontDescription-\u003eIO FontDescription",
        "package": "pango",
        "partial": "Description Copy",
        "signature": "FontDescription-\u003eIO FontDescription"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionFromString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a font description from a string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The given argument must have the form \n   \u003ccode\u003e[FAMILY-LIST] [STYLE-OPTIONS] [SIZE]\u003c/code\u003e where \u003ccode\u003eFAMILY_LIST\u003c/code\u003e is a comma\n   separated list of font families optionally terminated by a comma,\n   \u003ccode\u003eSTYLE_OPTIONS\u003c/code\u003e is a whitespace separated list of words where each\n   word describes one of style, variant, weight or stretch. \u003ccode\u003eSIZE\u003c/code\u003e is\n   a decimal number giving the size of the font in points. If any of\n   these fields is absent, the resulting \u003ccode\u003e\u003ca\u003eFontDescription\u003c/a\u003e\u003c/code\u003e will have\n   the corresponing fields unset.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "String -\u003e IO FontDescription",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionFromString",
        "fct-type": "function",
        "title": "fontDescriptionFromString"
      },
      "index": {
        "description": "Create font description from string The given argument must have the form FAMILY-LIST STYLE-OPTIONS SIZE where FAMILY LIST is comma separated list of font families optionally terminated by comma STYLE OPTIONS is whitespace separated list of words where each word describes one of style variant weight or stretch SIZE is decimal number giving the size of the font in points If any of these fields is absent the resulting FontDescription will have the corresponing fields unset",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionFromString",
        "normalized": "String-\u003eIO FontDescription",
        "package": "pango",
        "partial": "Description From String",
        "signature": "String-\u003eIO FontDescription"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionGetFamily",
      "description": {
        "fct-descr": "\u003cp\u003eGet the font family.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned if the font family is not set.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e IO (Maybe String)",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionGetFamily",
        "fct-type": "function",
        "title": "fontDescriptionGetFamily"
      },
      "index": {
        "description": "Get the font family Nothing is returned if the font family is not set",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionGetFamily",
        "normalized": "FontDescription-\u003eIO(Maybe String)",
        "package": "pango",
        "partial": "Description Get Family",
        "signature": "FontDescription-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionGetSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the size field.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e IO (Maybe Double)",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionGetSize",
        "fct-type": "function",
        "title": "fontDescriptionGetSize"
      },
      "index": {
        "description": "Get the size field",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionGetSize",
        "normalized": "FontDescription-\u003eIO(Maybe Double)",
        "package": "pango",
        "partial": "Description Get Size",
        "signature": "FontDescription-\u003eIO(Maybe Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionGetStretch",
      "description": {
        "fct-descr": "\u003cp\u003eGet the stretch field.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e IO (Maybe Stretch)",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionGetStretch",
        "fct-type": "function",
        "title": "fontDescriptionGetStretch"
      },
      "index": {
        "description": "Get the stretch field",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionGetStretch",
        "normalized": "FontDescription-\u003eIO(Maybe Stretch)",
        "package": "pango",
        "partial": "Description Get Stretch",
        "signature": "FontDescription-\u003eIO(Maybe Stretch)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionGetStyle",
      "description": {
        "fct-descr": "\u003cp\u003eGet the style field.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e IO (Maybe FontStyle)",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionGetStyle",
        "fct-type": "function",
        "title": "fontDescriptionGetStyle"
      },
      "index": {
        "description": "Get the style field",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionGetStyle",
        "normalized": "FontDescription-\u003eIO(Maybe FontStyle)",
        "package": "pango",
        "partial": "Description Get Style",
        "signature": "FontDescription-\u003eIO(Maybe FontStyle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionGetVariant",
      "description": {
        "fct-descr": "\u003cp\u003eGet the variant field.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e IO (Maybe Variant)",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionGetVariant",
        "fct-type": "function",
        "title": "fontDescriptionGetVariant"
      },
      "index": {
        "description": "Get the variant field",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionGetVariant",
        "normalized": "FontDescription-\u003eIO(Maybe Variant)",
        "package": "pango",
        "partial": "Description Get Variant",
        "signature": "FontDescription-\u003eIO(Maybe Variant)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionGetWeight",
      "description": {
        "fct-descr": "\u003cp\u003eGet the weight field.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e IO (Maybe Weight)",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionGetWeight",
        "fct-type": "function",
        "title": "fontDescriptionGetWeight"
      },
      "index": {
        "description": "Get the weight field",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionGetWeight",
        "normalized": "FontDescription-\u003eIO(Maybe Weight)",
        "package": "pango",
        "partial": "Description Get Weight",
        "signature": "FontDescription-\u003eIO(Maybe Weight)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionMerge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two font descriptions.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Copy fields from the second description to the first. If the boolean\n   parameter is set, existing fields in the first description will be\n   replaced.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e FontDescription -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionMerge",
        "fct-type": "function",
        "title": "fontDescriptionMerge"
      },
      "index": {
        "description": "Merge two font descriptions Copy fields from the second description to the first If the boolean parameter is set existing fields in the first description will be replaced",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionMerge",
        "normalized": "FontDescription-\u003eFontDescription-\u003eBool-\u003eIO()",
        "package": "pango",
        "partial": "Description Merge",
        "signature": "FontDescription-\u003eFontDescription-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionNew",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new font description.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All field are unset.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "IO FontDescription",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionNew",
        "fct-type": "function",
        "title": "fontDescriptionNew"
      },
      "index": {
        "description": "Create new font description All field are unset",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionNew",
        "normalized": "",
        "package": "pango",
        "partial": "Description New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionSetFamily",
      "description": {
        "fct-descr": "\u003cp\u003eSet the font famliy.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A font family is a name designating the design of the font (e.g. Sans\n   or Times) without the variant.\n\u003c/li\u003e\u003cli\u003e In some contexts a comma separated list of font families can be used.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionSetFamily",
        "fct-type": "function",
        "title": "fontDescriptionSetFamily"
      },
      "index": {
        "description": "Set the font famliy font family is name designating the design of the font e.g Sans or Times without the variant In some contexts comma separated list of font families can be used",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionSetFamily",
        "normalized": "FontDescription-\u003eString-\u003eIO()",
        "package": "pango",
        "partial": "Description Set Family",
        "signature": "FontDescription-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionSetSize",
      "description": {
        "fct-descr": "\u003cp\u003eSet the size field.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The given size is in points (pts). One point is 1/72 inch.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e Double -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionSetSize",
        "fct-type": "function",
        "title": "fontDescriptionSetSize"
      },
      "index": {
        "description": "Set the size field The given size is in points pts One point is inch",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionSetSize",
        "normalized": "FontDescription-\u003eDouble-\u003eIO()",
        "package": "pango",
        "partial": "Description Set Size",
        "signature": "FontDescription-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionSetStretch",
      "description": {
        "fct-descr": "\u003cp\u003eSet the stretch field.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e Stretch -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionSetStretch",
        "fct-type": "function",
        "title": "fontDescriptionSetStretch"
      },
      "index": {
        "description": "Set the stretch field",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionSetStretch",
        "normalized": "FontDescription-\u003eStretch-\u003eIO()",
        "package": "pango",
        "partial": "Description Set Stretch",
        "signature": "FontDescription-\u003eStretch-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionSetStyle",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e FontStyle -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionSetStyle",
        "fct-type": "function",
        "title": "fontDescriptionSetStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionSetStyle",
        "normalized": "FontDescription-\u003eFontStyle-\u003eIO()",
        "package": "pango",
        "partial": "Description Set Style",
        "signature": "FontDescription-\u003eFontStyle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionSetVariant",
      "description": {
        "fct-descr": "\u003cp\u003eSet the variant field.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e Variant -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionSetVariant",
        "fct-type": "function",
        "title": "fontDescriptionSetVariant"
      },
      "index": {
        "description": "Set the variant field",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionSetVariant",
        "normalized": "FontDescription-\u003eVariant-\u003eIO()",
        "package": "pango",
        "partial": "Description Set Variant",
        "signature": "FontDescription-\u003eVariant-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionSetWeight",
      "description": {
        "fct-descr": "\u003cp\u003eSet the weight field.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e Weight -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionSetWeight",
        "fct-type": "function",
        "title": "fontDescriptionSetWeight"
      },
      "index": {
        "description": "Set the weight field",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionSetWeight",
        "normalized": "FontDescription-\u003eWeight-\u003eIO()",
        "package": "pango",
        "partial": "Description Set Weight",
        "signature": "FontDescription-\u003eWeight-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionToString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a font description to a string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Creates a string representation of a font description. See\n   \u003ccode\u003e\u003ca\u003efontDescriptionFromString\u003c/a\u003e\u003c/code\u003e for the format of the string.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e IO String",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionToString",
        "fct-type": "function",
        "title": "fontDescriptionToString"
      },
      "index": {
        "description": "Convert font description to string Creates string representation of font description See fontDescriptionFromString for the format of the string",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionToString",
        "normalized": "FontDescription-\u003eIO String",
        "package": "pango",
        "partial": "Description To String",
        "signature": "FontDescription-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:fontDescriptionUnsetFields",
      "description": {
        "fct-descr": "\u003cp\u003eReset fields in a font description.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontDescription -\u003e [FontMask] -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Description.html#fontDescriptionUnsetFields",
        "fct-type": "function",
        "title": "fontDescriptionUnsetFields"
      },
      "index": {
        "description": "Reset fields in font description",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "fontDescriptionUnsetFields",
        "normalized": "FontDescription-\u003e[FontMask]-\u003eIO()",
        "package": "pango",
        "partial": "Description Unset Fields",
        "signature": "FontDescription-\u003e[FontMask]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:pangoFontFaceDescribe",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for a description of this face.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Returns the family, style, variant, weight and stretch of a \u003ccode\u003e\u003ca\u003eFontFace\u003c/a\u003e\u003c/code\u003e.\n The size field of the resulting font description will be unset.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontFace -\u003e IO FontDescription",
        "fct-source": "src/Graphics-Rendering-Pango-Font.html#pangoFontFaceDescribe",
        "fct-type": "function",
        "title": "pangoFontFaceDescribe"
      },
      "index": {
        "description": "Ask for description of this face Returns the family style variant weight and stretch of FontFace The size field of the resulting font description will be unset",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "pangoFontFaceDescribe",
        "normalized": "FontFace-\u003eIO FontDescription",
        "package": "pango",
        "partial": "Font Face Describe",
        "signature": "FontFace-\u003eIO FontDescription"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:pangoFontFaceListSizes",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for available sizes of this font face.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e List the available sizes for a font. This is only applicable to bitmap\n fonts since all other fonts can be scaled arbitrarily. For scalable\n fonts, this function returns \u003ccode\u003eNothing\u003c/code\u003e. The sizes returned are in\n ascending order, their unit is points (1/72 inch).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontFace -\u003e IO (Maybe [Double])",
        "fct-source": "src/Graphics-Rendering-Pango-Font.html#pangoFontFaceListSizes",
        "fct-type": "function",
        "title": "pangoFontFaceListSizes"
      },
      "index": {
        "description": "Ask for available sizes of this font face List the available sizes for font This is only applicable to bitmap fonts since all other fonts can be scaled arbitrarily For scalable fonts this function returns Nothing The sizes returned are in ascending order their unit is points inch",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "pangoFontFaceListSizes",
        "normalized": "FontFace-\u003eIO(Maybe[Double])",
        "package": "pango",
        "partial": "Font Face List Sizes",
        "signature": "FontFace-\u003eIO(Maybe[Double])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:pangoFontFamilyIsMonospace",
      "description": {
        "fct-descr": "\u003cp\u003eAsk if the given family contains monospace fonts.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A monospace font is a font designed for text display where the\n characters form a regular grid. For Western languages this would\n mean that the advance width of all characters are the same, but\n this categorization also includes Asian fonts which include\n double-width characters: characters that occupy two grid cells.\n\u003c/li\u003e\u003cli\u003e The best way to find out the grid-cell size is to query the members\n of the according \u003ccode\u003e\u003ca\u003eFontMetrics\u003c/a\u003e\u003c/code\u003e structure.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontFamily -\u003e Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Font.html#pangoFontFamilyIsMonospace",
        "fct-type": "function",
        "title": "pangoFontFamilyIsMonospace"
      },
      "index": {
        "description": "Ask if the given family contains monospace fonts monospace font is font designed for text display where the characters form regular grid For Western languages this would mean that the advance width of all characters are the same but this categorization also includes Asian fonts which include double-width characters characters that occupy two grid cells The best way to find out the grid-cell size is to query the members of the according FontMetrics structure",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "pangoFontFamilyIsMonospace",
        "normalized": "FontFamily-\u003eBool",
        "package": "pango",
        "partial": "Font Family Is Monospace",
        "signature": "FontFamily-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:pangoFontFamilyListFaces",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for the faces contained in a particular family.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Asks for all font faces in the given family. The faces in a family\n share a common design, but differ in slant, weight, width and other\n aspects. For example, the font family \u003ca\u003eSans\u003c/a\u003e contains several fonts\n such as Helvetica and Arial.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontFamily -\u003e IO [FontFace]",
        "fct-source": "src/Graphics-Rendering-Pango-Font.html#pangoFontFamilyListFaces",
        "fct-type": "function",
        "title": "pangoFontFamilyListFaces"
      },
      "index": {
        "description": "Ask for the faces contained in particular family Asks for all font faces in the given family The faces in family share common design but differ in slant weight width and other aspects For example the font family Sans contains several fonts such as Helvetica and Arial",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "pangoFontFamilyListFaces",
        "normalized": "FontFamily-\u003eIO[FontFace]",
        "package": "pango",
        "partial": "Font Family List Faces",
        "signature": "FontFamily-\u003eIO[FontFace]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Font.html#v:pangoFontMapListFamilies",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for the different font families that a particular back-end supports.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eFontMap\u003c/a\u003e\u003c/code\u003e can be acquired by calling\n \u003ccode\u003e\u003ca\u003ecairoFontMapGetDefault\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Font",
        "fct-package": "pango",
        "fct-signature": "FontMap -\u003e IO [FontFamily]",
        "fct-source": "src/Graphics-Rendering-Pango-Font.html#pangoFontMapListFamilies",
        "fct-type": "function",
        "title": "pangoFontMapListFamilies"
      },
      "index": {
        "description": "Ask for the different font families that particular back-end supports The FontMap can be acquired by calling cairoFontMapGetDefault",
        "hierarchy": "Graphics Rendering Pango Font",
        "module": "Graphics.Rendering.Pango.Font",
        "name": "pangoFontMapListFamilies",
        "normalized": "FontMap-\u003eIO[FontFamily]",
        "package": "pango",
        "partial": "Font Map List Families",
        "signature": "FontMap-\u003eIO[FontFamily]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to run the rendering pipeline.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e object defined in this module contain a rendered\n paragraph of text. This interface is the easiest way to render text into\n a \u003ccode\u003e\u003ca\u003eDrawWindow\u003c/a\u003e\u003c/code\u003e using Cairo.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html",
        "fct-type": "module",
        "title": "Layout"
      },
      "index": {
        "description": "Functions to run the rendering pipeline The PangoLayout object defined in this module contain rendered paragraph of text This interface is the easiest way to render text into DrawWindow using Cairo",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "Layout",
        "normalized": "",
        "package": "pango",
        "partial": "Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:CursorPos",
      "description": {
        "fct-descr": "\u003cp\u003eA new cursor position.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elayoutMoveCursorVisually\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#CursorPos",
        "fct-type": "data",
        "title": "CursorPos"
      },
      "index": {
        "description": "new cursor position See layoutMoveCursorVisually",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "CursorPos",
        "normalized": "",
        "package": "pango",
        "partial": "Cursor Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:EllipsizeMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEllipsizeMode\u003c/a\u003e\u003c/code\u003e type describes what sort of (if any) ellipsization\n should be applied to a line of text. In the ellipsization process characters\n are removed from the text in order to make it fit to a given width and\n replaced with an ellipsis.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "data",
        "title": "EllipsizeMode"
      },
      "index": {
        "description": "The EllipsizeMode type describes what sort of if any ellipsization should be applied to line of text In the ellipsization process characters are removed from the text in order to make it fit to given width and replaced with an ellipsis",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "EllipsizeMode",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:LayoutAlignment",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate to which side incomplete lines are flushed.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#LayoutAlignment",
        "fct-type": "data",
        "title": "LayoutAlignment"
      },
      "index": {
        "description": "Enumerate to which side incomplete lines are flushed",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "LayoutAlignment",
        "normalized": "",
        "package": "pango",
        "partial": "Layout Alignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:LayoutIter",
      "description": {
        "fct-descr": "\u003cp\u003eAn iterator to examine a layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#LayoutIter",
        "fct-type": "data",
        "title": "LayoutIter"
      },
      "index": {
        "description": "An iterator to examine layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "LayoutIter",
        "normalized": "",
        "package": "pango",
        "partial": "Layout Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:LayoutLine",
      "description": {
        "fct-descr": "\u003cp\u003eA single line in a \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#LayoutLine",
        "fct-type": "data",
        "title": "LayoutLine"
      },
      "index": {
        "description": "single line in PangoLayout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "LayoutLine",
        "normalized": "",
        "package": "pango",
        "partial": "Layout Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:LayoutWrapMode",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates how a line can be wrapped.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eWrapWholeWords\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Breaks lines only between words.\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e This variant does not guarantee that the requested width is not\n exceeded. A word that is longer than the paragraph width is not\n split.\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eWrapAnywhere\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Break lines anywhere.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eWrapPartialWords\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Wrap within a word if it is the only one on\n this line.\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e This option acts like \u003ccode\u003e\u003ca\u003eWrapWholeWords\u003c/a\u003e\u003c/code\u003e but will split\n a word if it is the only one on this line and it exceeds the\n specified width.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#LayoutWrapMode",
        "fct-type": "data",
        "title": "LayoutWrapMode"
      },
      "index": {
        "description": "Enumerates how line can be wrapped WrapWholeWords Breaks lines only between words This variant does not guarantee that the requested width is not exceeded word that is longer than the paragraph width is not split WrapAnywhere Break lines anywhere WrapPartialWords Wrap within word if it is the only one on this line This option acts like WrapWholeWords but will split word if it is the only one on this line and it exceeds the specified width",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "LayoutWrapMode",
        "normalized": "",
        "package": "pango",
        "partial": "Layout Wrap Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:PangoLayout",
      "description": {
        "fct-descr": "\u003cp\u003eA rendered paragraph.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoLayout",
        "fct-type": "data",
        "title": "PangoLayout"
      },
      "index": {
        "description": "rendered paragraph",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "PangoLayout",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:PangoRectangle",
      "description": {
        "fct-descr": "\u003cp\u003eRectangles describing an area in \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Specifies x, y, width and height\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoRectangle",
        "fct-type": "data",
        "title": "PangoRectangle"
      },
      "index": {
        "description": "Rectangles describing an area in Double Specifies width and height",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "PangoRectangle",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:TabAlign",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify where the Tab stop appears relative to the text.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Only Tab stops that align text to the left are supported right now.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#TabAlign",
        "fct-type": "data",
        "title": "TabAlign"
      },
      "index": {
        "description": "Specify where the Tab stop appears relative to the text Only Tab stops that align text to the left are supported right now",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "TabAlign",
        "normalized": "",
        "package": "pango",
        "partial": "Tab Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#t:TabPosition",
      "description": {
        "fct-descr": "\u003cp\u003eA Tab position.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#TabPosition",
        "fct-type": "type",
        "title": "TabPosition"
      },
      "index": {
        "description": "Tab position",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "TabPosition",
        "normalized": "",
        "package": "pango",
        "partial": "Tab Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:AlignCenter",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "AlignCenter",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#LayoutAlignment",
        "fct-type": "function",
        "title": "AlignCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "AlignCenter",
        "normalized": "",
        "package": "pango",
        "partial": "Align Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:AlignLeft",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "AlignLeft",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#LayoutAlignment",
        "fct-type": "function",
        "title": "AlignLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "AlignLeft",
        "normalized": "",
        "package": "pango",
        "partial": "Align Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:AlignRight",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "AlignRight",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#LayoutAlignment",
        "fct-type": "function",
        "title": "AlignRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "AlignRight",
        "normalized": "",
        "package": "pango",
        "partial": "Align Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:CursorPos",
      "description": {
        "fct-descr": "\u003cp\u003eThe sum of the indices is the new cursor position.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "CursorPos Int Int",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#CursorPos",
        "fct-type": "function",
        "title": "CursorPos"
      },
      "index": {
        "description": "The sum of the indices is the new cursor position",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "CursorPos",
        "normalized": "",
        "package": "pango",
        "partial": "Cursor Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:CursorPosNextPara",
      "description": {
        "fct-descr": "\u003cp\u003eThe cursor should advance to the next paragraph.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "CursorPosNextPara",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#CursorPos",
        "fct-type": "function",
        "title": "CursorPosNextPara"
      },
      "index": {
        "description": "The cursor should advance to the next paragraph",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "CursorPosNextPara",
        "normalized": "",
        "package": "pango",
        "partial": "Cursor Pos Next Para",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:CursorPosPrevPara",
      "description": {
        "fct-descr": "\u003cp\u003eThe cursor should move to the previous paragraph.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "CursorPosPrevPara",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#CursorPos",
        "fct-type": "function",
        "title": "CursorPosPrevPara"
      },
      "index": {
        "description": "The cursor should move to the previous paragraph",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "CursorPosPrevPara",
        "normalized": "",
        "package": "pango",
        "partial": "Cursor Pos Prev Para",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:EllipsizeEnd",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "EllipsizeEnd",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "function",
        "title": "EllipsizeEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "EllipsizeEnd",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:EllipsizeMiddle",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "EllipsizeMiddle",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "function",
        "title": "EllipsizeMiddle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "EllipsizeMiddle",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize Middle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:EllipsizeNone",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "EllipsizeNone",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "function",
        "title": "EllipsizeNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "EllipsizeNone",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:EllipsizeStart",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "EllipsizeStart",
        "fct-source": "src/Graphics-Rendering-Pango-Enums.html#EllipsizeMode",
        "fct-type": "function",
        "title": "EllipsizeStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "EllipsizeStart",
        "normalized": "",
        "package": "pango",
        "partial": "Ellipsize Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:PangoRectangle",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoRectangle Double Double Double Double",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#PangoRectangle",
        "fct-type": "function",
        "title": "PangoRectangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "PangoRectangle",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:WrapAnywhere",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "WrapAnywhere",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#LayoutWrapMode",
        "fct-type": "function",
        "title": "WrapAnywhere"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "WrapAnywhere",
        "normalized": "",
        "package": "pango",
        "partial": "Wrap Anywhere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:WrapPartialWords",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "WrapPartialWords",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#LayoutWrapMode",
        "fct-type": "function",
        "title": "WrapPartialWords"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "WrapPartialWords",
        "normalized": "",
        "package": "pango",
        "partial": "Wrap Partial Words",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:WrapWholeWords",
      "description": {
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "WrapWholeWords",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#LayoutWrapMode",
        "fct-type": "function",
        "title": "WrapWholeWords"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "WrapWholeWords",
        "normalized": "",
        "package": "pango",
        "partial": "Wrap Whole Words",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:escapeMarkup",
      "description": {
        "fct-descr": "\u003cp\u003eEscape markup characters.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Used to display characters that normally denote markup. Note that this\n function is strict in that it forces all characters in the input string\n as soon as a single output character is requested.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#escapeMarkup",
        "fct-type": "function",
        "title": "escapeMarkup"
      },
      "index": {
        "description": "Escape markup characters Used to display characters that normally denote markup Note that this function is strict in that it forces all characters in the input string as soon as single output character is requested",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "escapeMarkup",
        "normalized": "String-\u003eString",
        "package": "pango",
        "partial": "Markup",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutContextChanged",
      "description": {
        "fct-descr": "\u003cp\u003eSignal a \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e change.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Forces recomputation of any state in the \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e that\n might depend on the layout's context. This function should\n be called if you make changes to the context subsequent\n to creating the layout.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutContextChanged",
        "fct-type": "function",
        "title": "layoutContextChanged"
      },
      "index": {
        "description": "Signal PangoContext change Forces recomputation of any state in the PangoLayout that might depend on the layout context This function should be called if you make changes to the context subsequent to creating the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutContextChanged",
        "normalized": "PangoLayout-\u003eIO()",
        "package": "pango",
        "partial": "Context Changed",
        "signature": "PangoLayout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutCopy",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a copy of the \u003ccode\u003eLayout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO PangoLayout",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutCopy",
        "fct-type": "function",
        "title": "layoutCopy"
      },
      "index": {
        "description": "Create copy of the Layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutCopy",
        "normalized": "PangoLayout-\u003eIO PangoLayout",
        "package": "pango",
        "partial": "Copy",
        "signature": "PangoLayout-\u003eIO PangoLayout"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an empty \u003ccode\u003eLayout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e IO PangoLayout",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutEmpty",
        "fct-type": "function",
        "title": "layoutEmpty"
      },
      "index": {
        "description": "Create an empty Layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutEmpty",
        "normalized": "PangoContext-\u003eIO PangoLayout",
        "package": "pango",
        "partial": "Empty",
        "signature": "PangoContext-\u003eIO PangoLayout"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetAlignment",
      "description": {
        "fct-descr": "\u003cp\u003eGet the alignment for the layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO LayoutAlignment",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetAlignment",
        "fct-type": "function",
        "title": "layoutGetAlignment"
      },
      "index": {
        "description": "Get the alignment for the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetAlignment",
        "normalized": "PangoLayout-\u003eIO LayoutAlignment",
        "package": "pango",
        "partial": "Get Alignment",
        "signature": "PangoLayout-\u003eIO LayoutAlignment"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eGets the list of attributes of the layout, if any.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The attribute list is a list of lists of attribute. Each list describes\n the attributes for the same span.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO [[PangoAttribute]]",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetAttributes",
        "fct-type": "function",
        "title": "layoutGetAttributes"
      },
      "index": {
        "description": "Gets the list of attributes of the layout if any The attribute list is list of lists of attribute Each list describes the attributes for the same span",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetAttributes",
        "normalized": "PangoLayout-\u003eIO[[PangoAttribute]]",
        "package": "pango",
        "partial": "Get Attributes",
        "signature": "PangoLayout-\u003eIO[[PangoAttribute]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetAutoDir",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the auto direction flag.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e See \u003ccode\u003e\u003ca\u003elayoutSetAutoDir\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetAutoDir",
        "fct-type": "function",
        "title": "layoutGetAutoDir"
      },
      "index": {
        "description": "Retrieve the auto direction flag See layoutSetAutoDir",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetAutoDir",
        "normalized": "PangoLayout-\u003eIO Bool",
        "package": "pango",
        "partial": "Get Auto Dir",
        "signature": "PangoLayout-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetContext",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e from this layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO PangoContext",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetContext",
        "fct-type": "function",
        "title": "layoutGetContext"
      },
      "index": {
        "description": "Retrieves the PangoContext from this layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetContext",
        "normalized": "PangoLayout-\u003eIO PangoContext",
        "package": "pango",
        "partial": "Get Context",
        "signature": "PangoLayout-\u003eIO PangoContext"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetCursorPos",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a cursor position.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Given an index within a layout, determines the positions that of the\n strong and weak cursors if the insertion point is at that index.\n The position of each cursor is stored as a zero-width rectangle.\n The strong cursor location is the location where characters of the\n directionality equal to the base direction of the layout are inserted.\n The weak cursor location is the location where characters of the\n directionality opposite to the base direction of the layout are\n inserted. The first element of the typle is the strong position,\n the second the weak.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout-\u003e Int-\u003e IO (PangoRectangle, PangoRectangle)",
        "fct-type": "function",
        "title": "layoutGetCursorPos"
      },
      "index": {
        "description": "Return cursor position Given an index within layout determines the positions that of the strong and weak cursors if the insertion point is at that index The position of each cursor is stored as zero-width rectangle The strong cursor location is the location where characters of the directionality equal to the base direction of the layout are inserted The weak cursor location is the location where characters of the directionality opposite to the base direction of the layout are inserted The first element of the typle is the strong position the second the weak",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetCursorPos",
        "normalized": "PangoLayout-\u003eInt-\u003eIO(PangoRectangle,PangoRectangle)",
        "package": "pango",
        "partial": "Get Cursor Pos",
        "signature": "PangoLayout-\u003eInt-\u003eIO(PangoRectangle,PangoRectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetEllipsize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the ellipsize mode for this layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO EllipsizeMode",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetEllipsize",
        "fct-type": "function",
        "title": "layoutGetEllipsize"
      },
      "index": {
        "description": "Get the ellipsize mode for this layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetEllipsize",
        "normalized": "PangoLayout-\u003eIO EllipsizeMode",
        "package": "pango",
        "partial": "Get Ellipsize",
        "signature": "PangoLayout-\u003eIO EllipsizeMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetExtents",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the logical and ink extents of the \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLogical extents are usually what you want for positioning things. Note that\n both extents may have non-zero x and y. You may want to use those to offset\n where you render the layout. Not doing that is a very typical bug that\n shows up as right-to-left layouts not being correctly positioned in a\n layout with a set width.\n\u003c/p\u003e\u003cp\u003eLayout coordinates begin at the top left corner of the layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout-\u003e IO (PangoRectangle, PangoRectangle)",
        "fct-type": "function",
        "title": "layoutGetExtents"
      },
      "index": {
        "description": "Computes the logical and ink extents of the PangoLayout Logical extents are usually what you want for positioning things Note that both extents may have non-zero and You may want to use those to offset where you render the layout Not doing that is very typical bug that shows up as right-to-left layouts not being correctly positioned in layout with set width Layout coordinates begin at the top left corner of the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetExtents",
        "normalized": "PangoLayout-\u003eIO(PangoRectangle,PangoRectangle)",
        "package": "pango",
        "partial": "Get Extents",
        "signature": "PangoLayout-\u003eIO(PangoRectangle,PangoRectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetFontDescription",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for the specifically set font description of this layout.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Returns \u003ccode\u003eNothing\u003c/code\u003e if this layout uses the font description in the\n \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e it was created in.\n\u003c/li\u003e\u003cli\u003e Only available in Pango 1.8.0 or higher.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO (Maybe FontDescription)",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetFontDescription",
        "fct-type": "function",
        "title": "layoutGetFontDescription"
      },
      "index": {
        "description": "Ask for the specifically set font description of this layout Returns Nothing if this layout uses the font description in the PangoContext it was created in Only available in Pango or higher",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetFontDescription",
        "normalized": "PangoLayout-\u003eIO(Maybe FontDescription)",
        "package": "pango",
        "partial": "Get Font Description",
        "signature": "PangoLayout-\u003eIO(Maybe FontDescription)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetIndent",
      "description": {
        "fct-descr": "\u003cp\u003eGets the indentation of this paragraph.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Gets the amount by which the first line or the rest of the paragraph\n is indented.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO Double",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetIndent",
        "fct-type": "function",
        "title": "layoutGetIndent"
      },
      "index": {
        "description": "Gets the indentation of this paragraph Gets the amount by which the first line or the rest of the paragraph is indented",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetIndent",
        "normalized": "PangoLayout-\u003eIO Double",
        "package": "pango",
        "partial": "Get Indent",
        "signature": "PangoLayout-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetIter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an iterator to examine a layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO LayoutIter",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetIter",
        "fct-type": "function",
        "title": "layoutGetIter"
      },
      "index": {
        "description": "Create an iterator to examine layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetIter",
        "normalized": "PangoLayout-\u003eIO LayoutIter",
        "package": "pango",
        "partial": "Get Iter",
        "signature": "PangoLayout-\u003eIO LayoutIter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetJustify",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the justification flag.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e See \u003ccode\u003e\u003ca\u003elayoutSetJustify\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetJustify",
        "fct-type": "function",
        "title": "layoutGetJustify"
      },
      "index": {
        "description": "Retrieve the justification flag See layoutSetJustify",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetJustify",
        "normalized": "PangoLayout-\u003eIO Bool",
        "package": "pango",
        "partial": "Get Justify",
        "signature": "PangoLayout-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetLine",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a single lines of the layout.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The given index starts from 0. The function throws an\n \u003ccode\u003e\u003ca\u003eArrayException\u003c/a\u003e\u003c/code\u003e if the index is out of bounds.\n\u003c/li\u003e\u003cli\u003e The lines of each layout are regenerated if any attribute changes.\n Thus the returned list does not reflect the current state of lines\n after a change has been made.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Int -\u003e IO LayoutLine",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetLine",
        "fct-type": "function",
        "title": "layoutGetLine"
      },
      "index": {
        "description": "Extract single lines of the layout The given index starts from The function throws an ArrayException if the index is out of bounds The lines of each layout are regenerated if any attribute changes Thus the returned list does not reflect the current state of lines after change has been made",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetLine",
        "normalized": "PangoLayout-\u003eInt-\u003eIO LayoutLine",
        "package": "pango",
        "partial": "Get Line",
        "signature": "PangoLayout-\u003eInt-\u003eIO LayoutLine"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetLineCount",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for the number of lines in this layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO Int",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetLineCount",
        "fct-type": "function",
        "title": "layoutGetLineCount"
      },
      "index": {
        "description": "Ask for the number of lines in this layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetLineCount",
        "normalized": "PangoLayout-\u003eIO Int",
        "package": "pango",
        "partial": "Get Line Count",
        "signature": "PangoLayout-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetLines",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the lines of the layout.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The lines of each layout are regenerated if any attribute changes.\n Thus the returned list does not reflect the current state of lines\n after a change has been made.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO [LayoutLine]",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetLines",
        "fct-type": "function",
        "title": "layoutGetLines"
      },
      "index": {
        "description": "Extract the lines of the layout The lines of each layout are regenerated if any attribute changes Thus the returned list does not reflect the current state of lines after change has been made",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetLines",
        "normalized": "PangoLayout-\u003eIO[LayoutLine]",
        "package": "pango",
        "partial": "Get Lines",
        "signature": "PangoLayout-\u003eIO[LayoutLine]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetPixelExtents",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the physical size of the layout.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Computes the ink and the logical size of the \u003ccode\u003eLayout\u003c/code\u003e in device units,\n that is, pixels for a screen. Identical to \u003ccode\u003e\u003ca\u003elayoutGetExtents\u003c/a\u003e\u003c/code\u003e and\n converting the \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003ePangoRectangle\u003c/a\u003e\u003c/code\u003e to integers.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout-\u003e IO (Rectangle, Rectangle)",
        "fct-type": "function",
        "title": "layoutGetPixelExtents"
      },
      "index": {
        "description": "Compute the physical size of the layout Computes the ink and the logical size of the Layout in device units that is pixels for screen Identical to layoutGetExtents and converting the Double in the PangoRectangle to integers",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetPixelExtents",
        "normalized": "PangoLayout-\u003eIO(Rectangle,Rectangle)",
        "package": "pango",
        "partial": "Get Pixel Extents",
        "signature": "PangoLayout-\u003eIO(Rectangle,Rectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetSingleParagraphMode",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve if newlines are honored.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e See \u003ccode\u003e\u003ca\u003elayoutSetSingleParagraphMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetSingleParagraphMode",
        "fct-type": "function",
        "title": "layoutGetSingleParagraphMode"
      },
      "index": {
        "description": "Retrieve if newlines are honored See layoutSetSingleParagraphMode",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetSingleParagraphMode",
        "normalized": "PangoLayout-\u003eIO Bool",
        "package": "pango",
        "partial": "Get Single Paragraph Mode",
        "signature": "PangoLayout-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetSpacing",
      "description": {
        "fct-descr": "\u003cp\u003eGets the spacing between the lines.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO Double",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetSpacing",
        "fct-type": "function",
        "title": "layoutGetSpacing"
      },
      "index": {
        "description": "Gets the spacing between the lines",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetSpacing",
        "normalized": "PangoLayout-\u003eIO Double",
        "package": "pango",
        "partial": "Get Spacing",
        "signature": "PangoLayout-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetTabs",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the list of current Tab positions.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If no Tab position where set, \u003ccode\u003eNothing\u003c/code\u003e is returned. In this case, Tab\n positions are implicit at every eight characters.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO (Maybe [TabPosition])",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetTabs",
        "fct-type": "function",
        "title": "layoutGetTabs"
      },
      "index": {
        "description": "Retrieve the list of current Tab positions If no Tab position where set Nothing is returned In this case Tab positions are implicit at every eight characters",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetTabs",
        "normalized": "PangoLayout-\u003eIO(Maybe[TabPosition])",
        "package": "pango",
        "partial": "Get Tabs",
        "signature": "PangoLayout-\u003eIO(Maybe[TabPosition])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetText",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the string in the layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO String",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetText",
        "fct-type": "function",
        "title": "layoutGetText"
      },
      "index": {
        "description": "Retrieve the string in the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetText",
        "normalized": "PangoLayout-\u003eIO String",
        "package": "pango",
        "partial": "Get Text",
        "signature": "PangoLayout-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetWidth",
      "description": {
        "fct-descr": "\u003cp\u003eGets the width of this paragraph.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Gets the width to which the lines of the \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e\n should be wrapped.\n\u003c/li\u003e\u003cli\u003e Returns is the current width, or \u003ccode\u003eNothing\u003c/code\u003e to indicate that\n no wrapping is performed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO (Maybe Double)",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetWidth",
        "fct-type": "function",
        "title": "layoutGetWidth"
      },
      "index": {
        "description": "Gets the width of this paragraph Gets the width to which the lines of the PangoLayout should be wrapped Returns is the current width or Nothing to indicate that no wrapping is performed",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetWidth",
        "normalized": "PangoLayout-\u003eIO(Maybe Double)",
        "package": "pango",
        "partial": "Get Width",
        "signature": "PangoLayout-\u003eIO(Maybe Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutGetWrap",
      "description": {
        "fct-descr": "\u003cp\u003eGet the wrap mode for the layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO LayoutWrapMode",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutGetWrap",
        "fct-type": "function",
        "title": "layoutGetWrap"
      },
      "index": {
        "description": "Get the wrap mode for the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutGetWrap",
        "normalized": "PangoLayout-\u003eIO LayoutWrapMode",
        "package": "pango",
        "partial": "Get Wrap",
        "signature": "PangoLayout-\u003eIO LayoutWrapMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIndexToPos",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the rectangle of the glyph at the given index.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Converts from an index within a \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e to the onscreen position\n corresponding to the grapheme at that index, which is represented as\n rectangle. Note that, given a \u003ccode\u003ePangoRectangle x y width height\u003c/code\u003e, \u003ccode\u003ex\u003c/code\u003e\n is always the leading edge of the grapheme and \u003ccode\u003ex + width\u003c/code\u003e the\n trailing edge of the grapheme. If the directionality of the grapheme\n is right-to-left, then \u003ccode\u003ewidth\u003c/code\u003e will be negative.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Int -\u003e IO PangoRectangle",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIndexToPos",
        "fct-type": "function",
        "title": "layoutIndexToPos"
      },
      "index": {
        "description": "Return the rectangle of the glyph at the given index Converts from an index within PangoLayout to the onscreen position corresponding to the grapheme at that index which is represented as rectangle Note that given PangoRectangle width height is always the leading edge of the grapheme and width the trailing edge of the grapheme If the directionality of the grapheme is right-to-left then width will be negative",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIndexToPos",
        "normalized": "PangoLayout-\u003eInt-\u003eIO PangoRectangle",
        "package": "pango",
        "partial": "Index To Pos",
        "signature": "PangoLayout-\u003eInt-\u003eIO PangoRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterAtLastLine",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the iterator is on the last line.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Returns \u003ccode\u003eTrue\u003c/code\u003e if the iterator is on the last line of this\n paragraph.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterAtLastLine",
        "fct-type": "function",
        "title": "layoutIterAtLastLine"
      },
      "index": {
        "description": "Check if the iterator is on the last line Returns True if the iterator is on the last line of this paragraph",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterAtLastLine",
        "normalized": "LayoutIter-\u003eIO Bool",
        "package": "pango",
        "partial": "Iter At Last Line",
        "signature": "LayoutIter-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterGetBaseline",
      "description": {
        "fct-descr": "\u003cp\u003eQuery the vertical position within the layout.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Gets the y position of the current line's baseline (origin at top\n left of the entire layout).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO Double",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterGetBaseline",
        "fct-type": "function",
        "title": "layoutIterGetBaseline"
      },
      "index": {
        "description": "Query the vertical position within the layout Gets the position of the current line baseline origin at top left of the entire layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterGetBaseline",
        "normalized": "LayoutIter-\u003eIO Double",
        "package": "pango",
        "partial": "Iter Get Baseline",
        "signature": "LayoutIter-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterGetCharExtents",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a rectangle surrounding a character.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Get the extents of the current character\n (origin is the top left of the entire layout). Only logical extents\n can sensibly be obtained for characters; ink extents make sense only\n down to the level of clusters.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO PangoRectangle",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterGetCharExtents",
        "fct-type": "function",
        "title": "layoutIterGetCharExtents"
      },
      "index": {
        "description": "Retrieve rectangle surrounding character Get the extents of the current character origin is the top left of the entire layout Only logical extents can sensibly be obtained for characters ink extents make sense only down to the level of clusters",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterGetCharExtents",
        "normalized": "LayoutIter-\u003eIO PangoRectangle",
        "package": "pango",
        "partial": "Iter Get Char Extents",
        "signature": "LayoutIter-\u003eIO PangoRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterGetClusterExtents",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the physical size of the cluster.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Computes the ink and the logical size of the cluster pointed to by\n \u003ccode\u003e\u003ca\u003eLayoutIter\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter-\u003e IO (PangoRectangle, PangoRectangle)",
        "fct-type": "function",
        "title": "layoutIterGetClusterExtents"
      },
      "index": {
        "description": "Compute the physical size of the cluster Computes the ink and the logical size of the cluster pointed to by LayoutIter",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterGetClusterExtents",
        "normalized": "LayoutIter-\u003eIO(PangoRectangle,PangoRectangle)",
        "package": "pango",
        "partial": "Iter Get Cluster Extents",
        "signature": "LayoutIter-\u003eIO(PangoRectangle,PangoRectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterGetIndex",
      "description": {
        "fct-descr": "\u003cp\u003eGet the character index.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note that iterating forward by char moves in visual order, not\n logical order, so indexes may not be sequential. Also, the index\n may be equal to the length of the text in the layout.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO Int",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterGetIndex",
        "fct-type": "function",
        "title": "layoutIterGetIndex"
      },
      "index": {
        "description": "Get the character index Note that iterating forward by char moves in visual order not logical order so indexes may not be sequential Also the index may be equal to the length of the text in the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterGetIndex",
        "normalized": "LayoutIter-\u003eIO Int",
        "package": "pango",
        "partial": "Iter Get Index",
        "signature": "LayoutIter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterGetItem",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e under the iterator.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Each \u003ccode\u003e\u003ca\u003eLayoutLine\u003c/a\u003e\u003c/code\u003e contains a list of \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003es. This function\n returns the \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e under the current iterator. If the iterator\n is positioned past the last charactor of the paragraph, the function\n returns \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO (Maybe GlyphItem)",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterGetItem",
        "fct-type": "function",
        "title": "layoutIterGetItem"
      },
      "index": {
        "description": "Retrieve the current GlyphItem under the iterator Each LayoutLine contains list of GlyphItem This function returns the GlyphItem under the current iterator If the iterator is positioned past the last charactor of the paragraph the function returns Nothing",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterGetItem",
        "normalized": "LayoutIter-\u003eIO(Maybe GlyphItem)",
        "package": "pango",
        "partial": "Iter Get Item",
        "signature": "LayoutIter-\u003eIO(Maybe GlyphItem)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterGetLine",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the line under the iterator.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO (Maybe LayoutLine)",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterGetLine",
        "fct-type": "function",
        "title": "layoutIterGetLine"
      },
      "index": {
        "description": "Extract the line under the iterator",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterGetLine",
        "normalized": "LayoutIter-\u003eIO(Maybe LayoutLine)",
        "package": "pango",
        "partial": "Iter Get Line",
        "signature": "LayoutIter-\u003eIO(Maybe LayoutLine)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterGetLineExtents",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the physical size of the line.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Computes the ink and the logical size of the line pointed to by\n \u003ccode\u003e\u003ca\u003eLayoutIter\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003elayoutGetExtents\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Extents are in layout coordinates (origin is the top-left corner\n of the entire \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e). Thus the extents returned\n by this function will be the same width/height but not at the\n same x/y as the extents returned from\n \u003ccode\u003e\u003ca\u003elayoutLineGetExtents\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO (PangoRectangle, PangoRectangle)",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterGetLineExtents",
        "fct-type": "function",
        "title": "layoutIterGetLineExtents"
      },
      "index": {
        "description": "Compute the physical size of the line Computes the ink and the logical size of the line pointed to by LayoutIter See layoutGetExtents Extents are in layout coordinates origin is the top-left corner of the entire PangoLayout Thus the extents returned by this function will be the same width height but not at the same as the extents returned from layoutLineGetExtents",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterGetLineExtents",
        "normalized": "LayoutIter-\u003eIO(PangoRectangle,PangoRectangle)",
        "package": "pango",
        "partial": "Iter Get Line Extents",
        "signature": "LayoutIter-\u003eIO(PangoRectangle,PangoRectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterGetLineYRange",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve vertical extent of this line.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Divides the vertical space in the \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e being\n iterated over between the lines in the layout, and returns the\n space belonging to the current line. A line's range includes the\n line's logical extents, plus half of the spacing above and below\n the line, if \u003ccode\u003e\u003ca\u003elayoutSetSpacing\u003c/a\u003e\u003c/code\u003e has been called\n to set layout spacing. The y positions are in layout coordinates\n (origin at top left of the entire layout).\n\u003c/li\u003e\u003cli\u003e The first element in the returned tuple is the start, the second is\n the end of this line.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO (Double, Double)",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterGetLineYRange",
        "fct-type": "function",
        "title": "layoutIterGetLineYRange"
      },
      "index": {
        "description": "Retrieve vertical extent of this line Divides the vertical space in the PangoLayout being iterated over between the lines in the layout and returns the space belonging to the current line line range includes the line logical extents plus half of the spacing above and below the line if layoutSetSpacing has been called to set layout spacing The positions are in layout coordinates origin at top left of the entire layout The first element in the returned tuple is the start the second is the end of this line",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterGetLineYRange",
        "normalized": "LayoutIter-\u003eIO(Double,Double)",
        "package": "pango",
        "partial": "Iter Get Line YRange",
        "signature": "LayoutIter-\u003eIO(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterGetRunExtents",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the physical size of the run.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Computes the ink and the logical size of the run pointed to by\n \u003ccode\u003e\u003ca\u003eLayoutIter\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO (PangoRectangle, PangoRectangle)",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterGetRunExtents",
        "fct-type": "function",
        "title": "layoutIterGetRunExtents"
      },
      "index": {
        "description": "Compute the physical size of the run Computes the ink and the logical size of the run pointed to by LayoutIter",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterGetRunExtents",
        "normalized": "LayoutIter-\u003eIO(PangoRectangle,PangoRectangle)",
        "package": "pango",
        "partial": "Iter Get Run Extents",
        "signature": "LayoutIter-\u003eIO(PangoRectangle,PangoRectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterNextChar",
      "description": {
        "fct-descr": "\u003cp\u003eMove to the next char.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Returns \u003ccode\u003eFalse\u003c/code\u003e if this was the last char in the layout.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterNextChar",
        "fct-type": "function",
        "title": "layoutIterNextChar"
      },
      "index": {
        "description": "Move to the next char Returns False if this was the last char in the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterNextChar",
        "normalized": "LayoutIter-\u003eIO Bool",
        "package": "pango",
        "partial": "Iter Next Char",
        "signature": "LayoutIter-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterNextCluster",
      "description": {
        "fct-descr": "\u003cp\u003eMove to the next cluster.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Returns \u003ccode\u003eFalse\u003c/code\u003e if this was the last cluster in the layout.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterNextCluster",
        "fct-type": "function",
        "title": "layoutIterNextCluster"
      },
      "index": {
        "description": "Move to the next cluster Returns False if this was the last cluster in the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterNextCluster",
        "normalized": "LayoutIter-\u003eIO Bool",
        "package": "pango",
        "partial": "Iter Next Cluster",
        "signature": "LayoutIter-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterNextItem",
      "description": {
        "fct-descr": "\u003cp\u003eMove to the next \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Returns \u003ccode\u003eFalse\u003c/code\u003e if this was the last item in the layout.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterNextItem",
        "fct-type": "function",
        "title": "layoutIterNextItem"
      },
      "index": {
        "description": "Move to the next GlyphItem Returns False if this was the last item in the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterNextItem",
        "normalized": "LayoutIter-\u003eIO Bool",
        "package": "pango",
        "partial": "Iter Next Item",
        "signature": "LayoutIter-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutIterNextLine",
      "description": {
        "fct-descr": "\u003cp\u003eMove to the next line.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Returns \u003ccode\u003eFalse\u003c/code\u003e if this was the last line in the layout.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutIter -\u003e IO Bool",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutIterNextLine",
        "fct-type": "function",
        "title": "layoutIterNextLine"
      },
      "index": {
        "description": "Move to the next line Returns False if this was the last line in the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutIterNextLine",
        "normalized": "LayoutIter-\u003eIO Bool",
        "package": "pango",
        "partial": "Iter Next Line",
        "signature": "LayoutIter-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutLineGetExtents",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the physical size of the line.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Computes the ink and the logical size of the \u003ccode\u003e\u003ca\u003eLayoutLine\u003c/a\u003e\u003c/code\u003e.\n See \u003ccode\u003e\u003ca\u003elayoutGetExtents\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutLine -\u003e IO (PangoRectangle, PangoRectangle)",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutLineGetExtents",
        "fct-type": "function",
        "title": "layoutLineGetExtents"
      },
      "index": {
        "description": "Compute the physical size of the line Computes the ink and the logical size of the LayoutLine See layoutGetExtents",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutLineGetExtents",
        "normalized": "LayoutLine-\u003eIO(PangoRectangle,PangoRectangle)",
        "package": "pango",
        "partial": "Line Get Extents",
        "signature": "LayoutLine-\u003eIO(PangoRectangle,PangoRectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutLineGetPixelExtents",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the physical size of the line.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Computes the ink and the logical size of the \u003ccode\u003e\u003ca\u003eLayoutLine\u003c/a\u003e\u003c/code\u003e.\n See \u003ccode\u003e\u003ca\u003elayoutGetExtents\u003c/a\u003e\u003c/code\u003e. The returned values are in device units, that\n is, pixels for the screen and points for printers.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutLine-\u003e IO (Rectangle, Rectangle)",
        "fct-type": "function",
        "title": "layoutLineGetPixelExtents"
      },
      "index": {
        "description": "Compute the physical size of the line Computes the ink and the logical size of the LayoutLine See layoutGetExtents The returned values are in device units that is pixels for the screen and points for printers",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutLineGetPixelExtents",
        "normalized": "LayoutLine-\u003eIO(Rectangle,Rectangle)",
        "package": "pango",
        "partial": "Line Get Pixel Extents",
        "signature": "LayoutLine-\u003eIO(Rectangle,Rectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutLineGetXRanges",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve bounding boxes for a given piece of text contained in this\n \u003ccode\u003e\u003ca\u003eLayoutLine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result is a list to accommodate for mixed left-to-right and\n right-to-left text. Even if the text is not mixed, several\n ranges might be returned that are adjacent. The ranges are always\n sorted from left to right. The values are with respect to the left\n edge of the entire layout, not with respect to the line (which might\n be indented or not left aligned).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutLine-\u003e Int-\u003e Int-\u003e IO [(Double, Double)]",
        "fct-type": "function",
        "title": "layoutLineGetXRanges"
      },
      "index": {
        "description": "Retrieve bounding boxes for given piece of text contained in this LayoutLine The result is list to accommodate for mixed left-to-right and right-to-left text Even if the text is not mixed several ranges might be returned that are adjacent The ranges are always sorted from left to right The values are with respect to the left edge of the entire layout not with respect to the line which might be indented or not left aligned",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutLineGetXRanges",
        "normalized": "LayoutLine-\u003eInt-\u003eInt-\u003eIO[(Double,Double)]",
        "package": "pango",
        "partial": "Line Get XRanges",
        "signature": "LayoutLine-\u003eInt-\u003eInt-\u003eIO[(Double,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutLineIndexToX",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the horizontal position of a character.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutLine-\u003e Int-\u003e Bool-\u003e IO Double",
        "fct-type": "function",
        "title": "layoutLineIndexToX"
      },
      "index": {
        "description": "Request the horizontal position of character",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutLineIndexToX",
        "normalized": "LayoutLine-\u003eInt-\u003eBool-\u003eIO Double",
        "package": "pango",
        "partial": "Line Index To",
        "signature": "LayoutLine-\u003eInt-\u003eBool-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutLineXToIndex",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the character index of a given horizontal position.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Converts from an x offset to the index of the corresponding\n character within the text of the layout. If the \u003ccode\u003ex\u003c/code\u003e parameter is\n outside the line, a triple \u003ccode\u003e(False, index, trailing)\u003c/code\u003e is returned\n where \u003ccode\u003eindex\u003c/code\u003e and \u003ccode\u003etrailing\u003c/code\u003e will point to the very\n first or very last position in the line. This notion of first and last\n position is based on the direction of the paragraph; for example,\n if the direction is right-to-left, then an \u003ccode\u003ex\u003c/code\u003e position to the\n right of the line results in 0 being returned for \u003ccode\u003eindex\u003c/code\u003e and\n \u003ccode\u003etrailing\u003c/code\u003e. An \u003ccode\u003ex\u003c/code\u003e position to the left of the line results in\n \u003ccode\u003eindex\u003c/code\u003e pointing to the (logical) last grapheme in the line and\n trailing pointing to the number of characters in that grapheme.\n The reverse is true for a left-to-right line. If the boolean flag in\n the result is \u003ccode\u003eTrue\u003c/code\u003e then \u003ccode\u003ex\u003c/code\u003e was within the layout line and\n \u003ccode\u003etrailing\u003c/code\u003e indicates where in a cluster the \u003ccode\u003ex\u003c/code\u003e position lay. It is\n 0 for the trailing edge of the cluster.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "LayoutLine-\u003e Double-\u003e IO (Bool, Int, Int)",
        "fct-type": "function",
        "title": "layoutLineXToIndex"
      },
      "index": {
        "description": "Request the character index of given horizontal position Converts from an offset to the index of the corresponding character within the text of the layout If the parameter is outside the line triple False index trailing is returned where index and trailing will point to the very first or very last position in the line This notion of first and last position is based on the direction of the paragraph for example if the direction is right-to-left then an position to the right of the line results in being returned for index and trailing An position to the left of the line results in index pointing to the logical last grapheme in the line and trailing pointing to the number of characters in that grapheme The reverse is true for left-to-right line If the boolean flag in the result is True then was within the layout line and trailing indicates where in cluster the position lay It is for the trailing edge of the cluster",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutLineXToIndex",
        "normalized": "LayoutLine-\u003eDouble-\u003eIO(Bool,Int,Int)",
        "package": "pango",
        "partial": "Line XTo Index",
        "signature": "LayoutLine-\u003eDouble-\u003eIO(Bool,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutMoveCursorVisually",
      "description": {
        "fct-descr": "\u003cp\u003eMove a cursor visually.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Compute a new cursor position from a previous cursor position. A value\n of \u003ccode\u003eTrue\u003c/code\u003e for the direction will move it to the right, independant of\n the underlying direction. Hence the cursor position might jump if\n left-to-right text is mixed with right-to-left text.\n\u003c/li\u003e\u003cli\u003e The first flag should be \u003ccode\u003eTrue\u003c/code\u003e if this cursor is the strong cursor.\n The strong cursor is the cursor of the base direction of the current\n layout (see \u003ccode\u003e\u003ca\u003elayoutSetAutoDir\u003c/a\u003e\u003c/code\u003e). The weak cursor is that of the\n opposite direction.\n\u003c/li\u003e\u003cli\u003e The previous cursor position is given by \u003ccode\u003eidx\u003c/code\u003e. If this text at this\n position is a cluster, the cursor will only move to the end or\n beginning of the cluster as opposed to past the next character.\n The return value is either \u003ccode\u003e\u003ca\u003eCursorPosNextPara\u003c/a\u003e\u003c/code\u003e if the cursor moved\n beyond this paragraph, it is \u003ccode\u003e\u003ca\u003eCursorPosPrevPara\u003c/a\u003e\u003c/code\u003e if the cursor moved\n in front of this paragraph and it is \u003ccode\u003e\u003ca\u003eCursorPos\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eidx\u003c/code\u003e \u003ccode\u003etrail\u003c/code\u003e to denote\n the new cursor position \u003ccode\u003eidx\u003c/code\u003e. Note that \u003ccode\u003eidx\u003c/code\u003e will always denote an\n insertion point, that is, \u003ccode\u003eidx\u003c/code\u003e will never point into the middle of\n a cluster. The \u003ccode\u003etrail\u003c/code\u003e value can contain a positive\n value if the current cursor position is at the end of the current line.\n In this case, \u003ccode\u003eidx\u003c/code\u003e points past the last character of this line while\n \u003ccode\u003etrail\u003c/code\u003e contains the number of characters that are reponsible for the\n line break such as newlines. The actual cursor position is always\n \u003ccode\u003eidx+trail\u003c/code\u003e where the visual cursor should be shown.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout-\u003e Bool-\u003e Int-\u003e Bool-\u003e IO CursorPos",
        "fct-type": "function",
        "title": "layoutMoveCursorVisually"
      },
      "index": {
        "description": "Move cursor visually Compute new cursor position from previous cursor position value of True for the direction will move it to the right independant of the underlying direction Hence the cursor position might jump if left-to-right text is mixed with right-to-left text The first flag should be True if this cursor is the strong cursor The strong cursor is the cursor of the base direction of the current layout see layoutSetAutoDir The weak cursor is that of the opposite direction The previous cursor position is given by idx If this text at this position is cluster the cursor will only move to the end or beginning of the cluster as opposed to past the next character The return value is either CursorPosNextPara if the cursor moved beyond this paragraph it is CursorPosPrevPara if the cursor moved in front of this paragraph and it is CursorPos idx trail to denote the new cursor position idx Note that idx will always denote an insertion point that is idx will never point into the middle of cluster The trail value can contain positive value if the current cursor position is at the end of the current line In this case idx points past the last character of this line while trail contains the number of characters that are reponsible for the line break such as newlines The actual cursor position is always idx trail where the visual cursor should be shown",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutMoveCursorVisually",
        "normalized": "PangoLayout-\u003eBool-\u003eInt-\u003eBool-\u003eIO CursorPos",
        "package": "pango",
        "partial": "Move Cursor Visually",
        "signature": "PangoLayout-\u003eBool-\u003eInt-\u003eBool-\u003eIO CursorPos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutResetTabs",
      "description": {
        "fct-descr": "\u003cp\u003eReset the original set of Tab positions.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Restore the default which is a Tab stop every eight characters.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutResetTabs",
        "fct-type": "function",
        "title": "layoutResetTabs"
      },
      "index": {
        "description": "Reset the original set of Tab positions Restore the default which is Tab stop every eight characters",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutResetTabs",
        "normalized": "PangoLayout-\u003eIO()",
        "package": "pango",
        "partial": "Reset Tabs",
        "signature": "PangoLayout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetAlignment",
      "description": {
        "fct-descr": "\u003cp\u003eSet how this paragraph is aligned.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Sets the alignment for the layout (how partial lines are\n positioned within the horizontal space available.)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e LayoutAlignment -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetAlignment",
        "fct-type": "function",
        "title": "layoutSetAlignment"
      },
      "index": {
        "description": "Set how this paragraph is aligned Sets the alignment for the layout how partial lines are positioned within the horizontal space available",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetAlignment",
        "normalized": "PangoLayout-\u003eLayoutAlignment-\u003eIO()",
        "package": "pango",
        "partial": "Set Alignment",
        "signature": "PangoLayout-\u003eLayoutAlignment-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eSet text attributes of the text in the layout.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This function replaces any text attributes that this layout contained,\n even those that were set by using \u003ccode\u003e\u003ca\u003elayoutSetMarkup\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e [PangoAttribute] -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetAttributes",
        "fct-type": "function",
        "title": "layoutSetAttributes"
      },
      "index": {
        "description": "Set text attributes of the text in the layout This function replaces any text attributes that this layout contained even those that were set by using layoutSetMarkup",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetAttributes",
        "normalized": "PangoLayout-\u003e[PangoAttribute]-\u003eIO()",
        "package": "pango",
        "partial": "Set Attributes",
        "signature": "PangoLayout-\u003e[PangoAttribute]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetAutoDir",
      "description": {
        "fct-descr": "\u003cp\u003eSet if the base text direction should be overridden.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Sets whether to calculate the bidirectional base direction for the\n layout according to the contents of the layout; when this flag is on\n (the default), then paragraphs in layout that begin with strong\n right-to-left characters (Arabic and Hebrew principally), will have\n right-to-left layout, paragraphs with letters from other scripts will\n have left-to-right layout. Paragraphs with only neutral characters get\n their direction from the surrounding paragraphs.\n\u003c/li\u003e\u003cli\u003e When \u003ccode\u003eFalse\u003c/code\u003e, the choice between left-to-right and right-to-left\n layout is done by according to the base direction of the layout's\n \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e. (See \u003ccode\u003e\u003ca\u003econtextSetTextDir\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e When the auto-computed direction or a paragraph differs from the base\n direction of the context, then the interpretation of\n \u003ccode\u003e\u003ca\u003eAlignLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAlignRight\u003c/a\u003e\u003c/code\u003e are swapped.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetAutoDir",
        "fct-type": "function",
        "title": "layoutSetAutoDir"
      },
      "index": {
        "description": "Set if the base text direction should be overridden Sets whether to calculate the bidirectional base direction for the layout according to the contents of the layout when this flag is on the default then paragraphs in layout that begin with strong right-to-left characters Arabic and Hebrew principally will have right-to-left layout paragraphs with letters from other scripts will have left-to-right layout Paragraphs with only neutral characters get their direction from the surrounding paragraphs When False the choice between left-to-right and right-to-left layout is done by according to the base direction of the layout PangoContext See contextSetTextDir When the auto-computed direction or paragraph differs from the base direction of the context then the interpretation of AlignLeft and AlignRight are swapped",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetAutoDir",
        "normalized": "PangoLayout-\u003eBool-\u003eIO()",
        "package": "pango",
        "partial": "Set Auto Dir",
        "signature": "PangoLayout-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetEllipsize",
      "description": {
        "fct-descr": "\u003cp\u003eSet how long lines should be abbreviated.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e EllipsizeMode -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetEllipsize",
        "fct-type": "function",
        "title": "layoutSetEllipsize"
      },
      "index": {
        "description": "Set how long lines should be abbreviated",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetEllipsize",
        "normalized": "PangoLayout-\u003eEllipsizeMode-\u003eIO()",
        "package": "pango",
        "partial": "Set Ellipsize",
        "signature": "PangoLayout-\u003eEllipsizeMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetFontDescription",
      "description": {
        "fct-descr": "\u003cp\u003eSet a specific font description for this layout.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Specifying \u003ccode\u003eNothing\u003c/code\u003e will unset the current font description, that is,\n the \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e will use the font description in the current\n \u003ccode\u003e\u003ca\u003ePangoContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Maybe FontDescription -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetFontDescription",
        "fct-type": "function",
        "title": "layoutSetFontDescription"
      },
      "index": {
        "description": "Set specific font description for this layout Specifying Nothing will unset the current font description that is the PangoLayout will use the font description in the current PangoContext",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetFontDescription",
        "normalized": "PangoLayout-\u003eMaybe FontDescription-\u003eIO()",
        "package": "pango",
        "partial": "Set Font Description",
        "signature": "PangoLayout-\u003eMaybe FontDescription-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetIndent",
      "description": {
        "fct-descr": "\u003cp\u003eSet the indentation of this paragraph.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Sets the amount by which the first line should\n be indented. A negative value will produce a hanging indent, that is,\n all subsequent lines will be indented while the first line has full\n width.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Double -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetIndent",
        "fct-type": "function",
        "title": "layoutSetIndent"
      },
      "index": {
        "description": "Set the indentation of this paragraph Sets the amount by which the first line should be indented negative value will produce hanging indent that is all subsequent lines will be indented while the first line has full width",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetIndent",
        "normalized": "PangoLayout-\u003eDouble-\u003eIO()",
        "package": "pango",
        "partial": "Set Indent",
        "signature": "PangoLayout-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetJustify",
      "description": {
        "fct-descr": "\u003cp\u003eSet if text should be streched to fit width.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Sets whether or not each complete line should be stretched to\n fill the entire width of the layout. This stretching is typically\n done by adding whitespace, but for some scripts (such as Arabic),\n the justification is done by extending the characters.\n\u003c/li\u003e\u003cli\u003e Note that as of Pango 1.4, this functionality is not yet implemented.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetJustify",
        "fct-type": "function",
        "title": "layoutSetJustify"
      },
      "index": {
        "description": "Set if text should be streched to fit width Sets whether or not each complete line should be stretched to fill the entire width of the layout This stretching is typically done by adding whitespace but for some scripts such as Arabic the justification is done by extending the characters Note that as of Pango this functionality is not yet implemented",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetJustify",
        "normalized": "PangoLayout-\u003eBool-\u003eIO()",
        "package": "pango",
        "partial": "Set Justify",
        "signature": "PangoLayout-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetMarkup",
      "description": {
        "fct-descr": "\u003cp\u003eSet the text of the layout, including attributes.\n\u003c/p\u003e\u003cp\u003eThe string may include \u003ccode\u003e\u003ca\u003eMarkup\u003c/a\u003e\u003c/code\u003e. To print markup characters like\n \u003ccode\u003e'\u003c'\u003c/code\u003e, or \u003ccode\u003e'-'\u003c/code\u003e, apply \u003ccode\u003e\u003ca\u003eescapeMarkup\u003c/a\u003e\u003c/code\u003e to the string first.\n\u003c/p\u003e\u003cp\u003eThe function returns the text that is actually shown.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Markup -\u003e IO String",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetMarkup",
        "fct-type": "function",
        "title": "layoutSetMarkup"
      },
      "index": {
        "description": "Set the text of the layout including attributes The string may include Markup To print markup characters like or apply escapeMarkup to the string first The function returns the text that is actually shown",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetMarkup",
        "normalized": "PangoLayout-\u003eMarkup-\u003eIO String",
        "package": "pango",
        "partial": "Set Markup",
        "signature": "PangoLayout-\u003eMarkup-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetMarkupWithAccel",
      "description": {
        "fct-descr": "\u003cp\u003eSet the string in the layout.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The string may include \u003ccode\u003e\u003ca\u003eMarkup\u003c/a\u003e\u003c/code\u003e. Furthermore, any underscore\n character indicates that the next character will be\n marked as accelerator (i.e. underlined). A literal underscore character\n can be produced by placing it twice in the string.\n\u003c/li\u003e\u003cli\u003e The character which follows the underscore is\n returned so it can be used to add the actual keyboard shortcut.\n The second element is the string after parsing.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Markup -\u003e IO (Char, String)",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetMarkupWithAccel",
        "fct-type": "function",
        "title": "layoutSetMarkupWithAccel"
      },
      "index": {
        "description": "Set the string in the layout The string may include Markup Furthermore any underscore character indicates that the next character will be marked as accelerator i.e underlined literal underscore character can be produced by placing it twice in the string The character which follows the underscore is returned so it can be used to add the actual keyboard shortcut The second element is the string after parsing",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetMarkupWithAccel",
        "normalized": "PangoLayout-\u003eMarkup-\u003eIO(Char,String)",
        "package": "pango",
        "partial": "Set Markup With Accel",
        "signature": "PangoLayout-\u003eMarkup-\u003eIO(Char,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetSingleParagraphMode",
      "description": {
        "fct-descr": "\u003cp\u003eHonor newlines or not.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ehonor\u003c/code\u003e is \u003ccode\u003eTrue\u003c/code\u003e, do not treat newlines and\n similar characters as paragraph separators; instead, keep all text in\n a single paragraph, and display a glyph for paragraph separator\n characters. Used when you want to allow editing of newlines on a\n single text line.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetSingleParagraphMode",
        "fct-type": "function",
        "title": "layoutSetSingleParagraphMode"
      },
      "index": {
        "description": "Honor newlines or not If honor is True do not treat newlines and similar characters as paragraph separators instead keep all text in single paragraph and display glyph for paragraph separator characters Used when you want to allow editing of newlines on single text line",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetSingleParagraphMode",
        "normalized": "PangoLayout-\u003eBool-\u003eIO()",
        "package": "pango",
        "partial": "Set Single Paragraph Mode",
        "signature": "PangoLayout-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetSpacing",
      "description": {
        "fct-descr": "\u003cp\u003eSet the spacing between lines of this paragraph.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Double -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetSpacing",
        "fct-type": "function",
        "title": "layoutSetSpacing"
      },
      "index": {
        "description": "Set the spacing between lines of this paragraph",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetSpacing",
        "normalized": "PangoLayout-\u003eDouble-\u003eIO()",
        "package": "pango",
        "partial": "Set Spacing",
        "signature": "PangoLayout-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetTabs",
      "description": {
        "fct-descr": "\u003cp\u003eSet a list of Tab positoins.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e [TabPosition] -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetTabs",
        "fct-type": "function",
        "title": "layoutSetTabs"
      },
      "index": {
        "description": "Set list of Tab positoins",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetTabs",
        "normalized": "PangoLayout-\u003e[TabPosition]-\u003eIO()",
        "package": "pango",
        "partial": "Set Tabs",
        "signature": "PangoLayout-\u003e[TabPosition]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetText",
      "description": {
        "fct-descr": "\u003cp\u003eSet the string in the layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetText",
        "fct-type": "function",
        "title": "layoutSetText"
      },
      "index": {
        "description": "Set the string in the layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetText",
        "normalized": "PangoLayout-\u003eString-\u003eIO()",
        "package": "pango",
        "partial": "Set Text",
        "signature": "PangoLayout-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetWidth",
      "description": {
        "fct-descr": "\u003cp\u003eSet the width of this paragraph.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Sets the width to which the lines of the \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e\n should be wrapped.\n\u003c/li\u003e\u003cli\u003e Pass in \u003ccode\u003eNothing\u003c/code\u003e to indicate that no wrapping is to be performed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e Maybe Double -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetWidth",
        "fct-type": "function",
        "title": "layoutSetWidth"
      },
      "index": {
        "description": "Set the width of this paragraph Sets the width to which the lines of the PangoLayout should be wrapped Pass in Nothing to indicate that no wrapping is to be performed",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetWidth",
        "normalized": "PangoLayout-\u003eMaybe Double-\u003eIO()",
        "package": "pango",
        "partial": "Set Width",
        "signature": "PangoLayout-\u003eMaybe Double-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutSetWrap",
      "description": {
        "fct-descr": "\u003cp\u003eSet how this paragraph is wrapped.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Sets the wrap style; the wrap style only has an effect if a width\n is set on the layout with \u003ccode\u003e\u003ca\u003elayoutSetWidth\u003c/a\u003e\u003c/code\u003e. To turn off\n wrapping, call \u003ccode\u003e\u003ca\u003elayoutSetWidth\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout -\u003e LayoutWrapMode -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutSetWrap",
        "fct-type": "function",
        "title": "layoutSetWrap"
      },
      "index": {
        "description": "Set how this paragraph is wrapped Sets the wrap style the wrap style only has an effect if width is set on the layout with layoutSetWidth To turn off wrapping call layoutSetWidth with Nothing",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutSetWrap",
        "normalized": "PangoLayout-\u003eLayoutWrapMode-\u003eIO()",
        "package": "pango",
        "partial": "Set Wrap",
        "signature": "PangoLayout-\u003eLayoutWrapMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutText",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e String -\u003e IO PangoLayout",
        "fct-source": "src/Graphics-Rendering-Pango-Layout.html#layoutText",
        "fct-type": "function",
        "title": "layoutText"
      },
      "index": {
        "description": "Create new layout",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutText",
        "normalized": "PangoContext-\u003eString-\u003eIO PangoLayout",
        "package": "pango",
        "partial": "Text",
        "signature": "PangoContext-\u003eString-\u003eIO PangoLayout"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Layout.html#v:layoutXYToIndex",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a device unit to a character index.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Converts from \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e position within a layout to the index of\n the closest character. If the \u003ccode\u003ey\u003c/code\u003e position is not inside the layout,\n the closest position is chosen (the position will be clamped inside\n the layout). If the \u003ccode\u003ex\u003c/code\u003e position is not within the layout, then the\n start or the end of the line is chosen. If either the \u003ccode\u003ex\u003c/code\u003e or \u003ccode\u003ey\u003c/code\u003e\n positions were not inside the layout, then the function returns \u003ccode\u003eFalse\u003c/code\u003e;\n on an exact hit, it returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The function returns the flag for the exact hit and the index into\n the string. The third value is zero if the character corresponds to\n one grapheme. If the grapheme is the result of a cluster, this value\n may be greater than one, indicating where in the grapheme the position\n lies. Zero represents the trailing edge on the grapheme.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Layout",
        "fct-package": "pango",
        "fct-signature": "PangoLayout-\u003e Double-\u003e Double-\u003e IO (Bool, Int, Int)",
        "fct-type": "function",
        "title": "layoutXYToIndex"
      },
      "index": {
        "description": "Converts device unit to character index Converts from and position within layout to the index of the closest character If the position is not inside the layout the closest position is chosen the position will be clamped inside the layout If the position is not within the layout then the start or the end of the line is chosen If either the or positions were not inside the layout then the function returns False on an exact hit it returns True The function returns the flag for the exact hit and the index into the string The third value is zero if the character corresponds to one grapheme If the grapheme is the result of cluster this value may be greater than one indicating where in the grapheme the position lies Zero represents the trailing edge on the grapheme",
        "hierarchy": "Graphics Rendering Pango Layout",
        "module": "Graphics.Rendering.Pango.Layout",
        "name": "layoutXYToIndex",
        "normalized": "PangoLayout-\u003eDouble-\u003eDouble-\u003eIO(Bool,Int,Int)",
        "package": "pango",
        "partial": "XYTo Index",
        "signature": "PangoLayout-\u003eDouble-\u003eDouble-\u003eIO(Bool,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some helper functions for generating texts with\n embedded attributes. Note that there is no need to use these functions.\n In particular, if you set markup in labels that are subject to\n internationalization, it can be of advantage to write out the markup\n instead of using the functions in this module.\n\u003c/p\u003e\u003cp\u003eIn order to display a string that may contain markup characters, use\n \u003ccode\u003e\u003ca\u003eescapeMarkup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen you write markup directly, you can make use of the following\n convenience tags:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eb\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Bold\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ebig\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Makes font relatively larger\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ei\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Italic\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003es\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Strikethrough\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003esub\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Subscript\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003esup\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Superscript\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003esmall\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Makes font relatively smaller\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ett\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Monospace font\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eu\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Underline\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html",
        "fct-type": "module",
        "title": "Markup"
      },
      "index": {
        "description": "This module defines some helper functions for generating texts with embedded attributes Note that there is no need to use these functions In particular if you set markup in labels that are subject to internationalization it can be of advantage to write out the markup instead of using the functions in this module In order to display string that may contain markup characters use escapeMarkup When you write markup directly you can make use of the following convenience tags Bold big Makes font relatively larger Italic Strikethrough sub Subscript sup Superscript small Makes font relatively smaller tt Monospace font Underline",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "Markup",
        "normalized": "",
        "package": "pango",
        "partial": "Markup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#t:Markup",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a synonym for text with embedded markup commands.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Markup strings are just simple strings. But it's easier to tell if a\n   method expects text with or without markup.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#Markup",
        "fct-type": "type",
        "title": "Markup"
      },
      "index": {
        "description": "Define synonym for text with embedded markup commands Markup strings are just simple strings But it easier to tell if method expects text with or without markup",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "Markup",
        "normalized": "",
        "package": "pango",
        "partial": "Markup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#t:SpanAttribute",
      "description": {
        "fct-descr": "\u003cp\u003eThese are all the attributes the \u003ccode\u003e\u003ca\u003emarkSpan\u003c/a\u003e\u003c/code\u003e function can express.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "data",
        "title": "SpanAttribute"
      },
      "index": {
        "description": "These are all the attributes the markSpan function can express",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "SpanAttribute",
        "normalized": "",
        "package": "pango",
        "partial": "Span Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontBackground",
      "description": {
        "fct-descr": "\u003cp\u003eBackground color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontBackground String",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontBackground"
      },
      "index": {
        "description": "Background color",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontBackground",
        "normalized": "",
        "package": "pango",
        "partial": "Font Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontDescr",
      "description": {
        "fct-descr": "\u003cp\u003eChoose a font by textual description.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Takes a string to completely describe the font, example:\n \u003ccode\u003eFontDescr\u003c/code\u003e \"Sans Italic 12\"\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontDescr String",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontDescr"
      },
      "index": {
        "description": "Choose font by textual description Takes string to completely describe the font example FontDescr Sans Italic",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontDescr",
        "normalized": "",
        "package": "pango",
        "partial": "Font Descr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontFamily",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the family of font to use.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Example: \u003ccode\u003eFontFamily\u003c/code\u003e \"Sans\"\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontFamily String",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontFamily"
      },
      "index": {
        "description": "Specify the family of font to use Example FontFamily Sans",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontFamily",
        "normalized": "",
        "package": "pango",
        "partial": "Font Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontForeground",
      "description": {
        "fct-descr": "\u003cp\u003eForeground color.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This constructor and \u003ccode\u003e\u003ca\u003eFontBackground\u003c/a\u003e\u003c/code\u003e take both a description\n of the color to be used for rendering. The name is either a\n hex code of the form \"#RRGGBB\" or an X11 color name like\n \"dark olive green\".\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontForeground String",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontForeground"
      },
      "index": {
        "description": "Foreground color This constructor and FontBackground take both description of the color to be used for rendering The name is either hex code of the form RRGGBB or an X11 color name like dark olive green",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontForeground",
        "normalized": "",
        "package": "pango",
        "partial": "Font Foreground",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontGravity",
      "description": {
        "fct-descr": "\u003cp\u003eGravity of text, use for ratation.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontGravity PangoGravity",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontGravity"
      },
      "index": {
        "description": "Gravity of text use for ratation",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontGravity",
        "normalized": "",
        "package": "pango",
        "partial": "Font Gravity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontGravityHint",
      "description": {
        "fct-descr": "\u003cp\u003eIntensity of gravity.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontGravityHint PangoGravityHint",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontGravityHint"
      },
      "index": {
        "description": "Intensity of gravity",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontGravityHint",
        "normalized": "",
        "package": "pango",
        "partial": "Font Gravity Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontLang",
      "description": {
        "fct-descr": "\u003cp\u003eGive a hint about the language to be displayed.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This hint might help the system rendering a particular piece of text\n with different fonts that are more suitable for the given language.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontLang Language",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontLang"
      },
      "index": {
        "description": "Give hint about the language to be displayed This hint might help the system rendering particular piece of text with different fonts that are more suitable for the given language",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontLang",
        "normalized": "",
        "package": "pango",
        "partial": "Font Lang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontRise",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a vertical displacement.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Takes the vertical displacement in em (the width of the 'm' character\n in the current font).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontRise Double",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontRise"
      },
      "index": {
        "description": "Specify vertical displacement Takes the vertical displacement in em the width of the character in the current font",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontRise",
        "normalized": "",
        "package": "pango",
        "partial": "Font Rise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontSize",
      "description": {
        "fct-descr": "\u003cp\u003eChange the size of the current font.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The constuctor takes the size in points (pt) or a predefined\n sizes. Setting the absolute size 12.5pt can be achieved by passing\n \u003ccode\u003e\u003ca\u003eFontSize\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eSizePoint\u003c/code\u003e 12.5) to \u003ccode\u003e\u003ca\u003emarkSpan\u003c/a\u003e\u003c/code\u003e. Next to predefined\n absolute sizes such as \u003ccode\u003e\u003ca\u003eSizeSmall\u003c/a\u003e\u003c/code\u003e the size can be changed by\n asking for the next larger or smaller front with\n \u003ccode\u003e\u003ca\u003eSizeLarger\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSizeSmaller\u003c/a\u003e\u003c/code\u003e, respectively.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontSize Size",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontSize"
      },
      "index": {
        "description": "Change the size of the current font The constuctor takes the size in points pt or predefined sizes Setting the absolute size pt can be achieved by passing FontSize SizePoint to markSpan Next to predefined absolute sizes such as SizeSmall the size can be changed by asking for the next larger or smaller front with SizeLarger and SizeSmaller respectively",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontSize",
        "normalized": "",
        "package": "pango",
        "partial": "Font Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontStretch",
      "description": {
        "fct-descr": "\u003cp\u003eChoose a different width.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Takes one of nine font widths, e.g. \u003ccode\u003e\u003ca\u003eWidthExpanded\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontStretch Stretch",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontStretch"
      },
      "index": {
        "description": "Choose different width Takes one of nine font widths e.g WidthExpanded",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontStretch",
        "normalized": "",
        "package": "pango",
        "partial": "Font Stretch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontStyle",
      "description": {
        "fct-descr": "\u003cp\u003eChange the slant of the current font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontStyle FontStyle",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontStyle"
      },
      "index": {
        "description": "Change the slant of the current font",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontStyle",
        "normalized": "",
        "package": "pango",
        "partial": "Font Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontUnderline",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify underlining of text.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontUnderline Underline",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontUnderline"
      },
      "index": {
        "description": "Specify underlining of text",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontUnderline",
        "normalized": "",
        "package": "pango",
        "partial": "Font Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontVariant",
      "description": {
        "fct-descr": "\u003cp\u003eChoosing an alternative rendering for lower case letters.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The argument \u003ccode\u003e\u003ca\u003eVariantSmallCaps\u003c/a\u003e\u003c/code\u003e will display lower case letters\n as smaller upper case letters, if this option is available.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontVariant Variant",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontVariant"
      },
      "index": {
        "description": "Choosing an alternative rendering for lower case letters The argument VariantSmallCaps will display lower case letters as smaller upper case letters if this option is available",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontVariant",
        "normalized": "",
        "package": "pango",
        "partial": "Font Variant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:FontWeight",
      "description": {
        "fct-descr": "\u003cp\u003eChange the thickness of the current font.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The constructor takes one of the six predefined weights. Most likely to\n be supported: \u003ccode\u003e\u003ca\u003eWeightBold\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "FontWeight Weight",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#SpanAttribute",
        "fct-type": "function",
        "title": "FontWeight"
      },
      "index": {
        "description": "Change the thickness of the current font The constructor takes one of the six predefined weights Most likely to be supported WeightBold",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "FontWeight",
        "normalized": "",
        "package": "pango",
        "partial": "Font Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:markSpan",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the most generic span attribute.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "[SpanAttribute] -\u003e String -\u003e String",
        "fct-source": "src/Graphics-Rendering-Pango-Markup.html#markSpan",
        "fct-type": "function",
        "title": "markSpan"
      },
      "index": {
        "description": "Create the most generic span attribute",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "markSpan",
        "normalized": "[SpanAttribute]-\u003eString-\u003eString",
        "package": "pango",
        "partial": "Span",
        "signature": "[SpanAttribute]-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Markup.html#v:parseMarkup",
      "description": {
        "fct-descr": "\u003cp\u003eParse the marked-up text (see \u003ccode\u003e\u003ca\u003eMarkup\u003c/a\u003e\u003c/code\u003e\n format) to create a plain-text string and an attribute list.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The attribute list is a list of lists of attribute. Each list describes\n the attributes for the same span.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003eaccelMarker\u003c/code\u003e is not \u003ccode\u003e'\\0'\u003c/code\u003e (a zero character), the given character\n will mark the character following it as an accelerator. For example,\n \u003ccode\u003eaccelMarker\u003c/code\u003e might be an ampersand or underscore. All characters marked\n as an accelerator will receive a \u003ccode\u003e\u003ca\u003eUnderlineLow\u003c/a\u003e\u003c/code\u003e attribute, and the\n first character so marked will be returned as \u003ccode\u003eaccelChar\u003c/code\u003e. If no\n accelerator character is found, the \u003ccode\u003eaccelMarker\u003c/code\u003e character itself is\n returned. Two \u003ccode\u003eaccelMarker\u003c/code\u003e characters following each other produce a\n single literal \u003ccode\u003eaccelMarker\u003c/code\u003e character.\n\u003c/li\u003e\u003cli\u003e If a parsing error occurs a \u003ccode\u003e\u003ca\u003eGError\u003c/a\u003e\u003c/code\u003e is thrown.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Markup",
        "fct-package": "pango",
        "fct-signature": "Markup-\u003e Char-\u003e IO ([[PangoAttribute]], Char, String)",
        "fct-type": "function",
        "title": "parseMarkup"
      },
      "index": {
        "description": "Parse the marked-up text see Markup format to create plain-text string and an attribute list The attribute list is list of lists of attribute Each list describes the attributes for the same span If accelMarker is not zero character the given character will mark the character following it as an accelerator For example accelMarker might be an ampersand or underscore All characters marked as an accelerator will receive UnderlineLow attribute and the first character so marked will be returned as accelChar If no accelerator character is found the accelMarker character itself is returned Two accelMarker characters following each other produce single literal accelMarker character If parsing error occurs GError is thrown",
        "hierarchy": "Graphics Rendering Pango Markup",
        "module": "Graphics.Rendering.Pango.Markup",
        "name": "parseMarkup",
        "normalized": "Markup-\u003eChar-\u003eIO([[PangoAttribute]],Char,String)",
        "package": "pango",
        "partial": "Markup",
        "signature": "Markup-\u003eChar-\u003eIO([[PangoAttribute]],Char,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to run the rendering pipeline.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This module provides elementary rendering functions. For a simpler\n interface, consider using \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003cli\u003e The Pango rendering pipeline takes a string of Unicode characters,\n divides them into sequences of letters that have the same characteristics\n such as font, size, color, etc. Such a sequence is called \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003e.\n Each \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003e is then converted into one \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e, that is\n an actual sequence of glyphs,\n where several characters might be turned into legatures or clusters,\n e.g. an \"e\" and an accent modifier are turned into a single glyph. These\n \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003es can then be rendered onto the output device with functions\n such as \u003ccode\u003e\u003ca\u003ecairoShowGlyphString\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-Pango-Rendering.html",
        "fct-type": "module",
        "title": "Rendering"
      },
      "index": {
        "description": "Functions to run the rendering pipeline This module provides elementary rendering functions For simpler interface consider using PangoLayout The Pango rendering pipeline takes string of Unicode characters divides them into sequences of letters that have the same characteristics such as font size color etc Such sequence is called PangoItem Each PangoItem is then converted into one GlyphItem that is an actual sequence of glyphs where several characters might be turned into legatures or clusters e.g an and an accent modifier are turned into single glyph These GlyphItem can then be rendered onto the output device with functions such as cairoShowGlyphString",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "Rendering",
        "normalized": "",
        "package": "pango",
        "partial": "Rendering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#t:GlyphItem",
      "description": {
        "fct-descr": "\u003cp\u003eA sequence of glyphs for a chunk of a string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A glyph item contains the graphical representation of a \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003e.\n Clusters (like \u003ccode\u003ee\u003c/code\u003e and an accent modifier) as well as legatures\n (such as \u003ccode\u003effi\u003c/code\u003e turning into a single letter that omits the dot over the\n \u003ccode\u003ei\u003c/code\u003e) are usually represented as a single glyph.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#GlyphItem",
        "fct-type": "data",
        "title": "GlyphItem"
      },
      "index": {
        "description": "sequence of glyphs for chunk of string glyph item contains the graphical representation of PangoItem Clusters like and an accent modifier as well as legatures such as ffi turning into single letter that omits the dot over the are usually represented as single glyph",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "GlyphItem",
        "normalized": "",
        "package": "pango",
        "partial": "Glyph Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#t:PangoItem",
      "description": {
        "fct-descr": "\u003cp\u003eA sequence of characters that are rendered with the same settings.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A preprocessing stage done by \u003ccode\u003eitemize\u003c/code\u003e splits the input text into\n several chunks such that each chunk can be rendered with the same\n font, direction, slant, etc. Some attributes such as the color,\n underline or strikethrough do not affect a break into several\n \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003es. See also \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Pango-BasicTypes.html#PangoItem",
        "fct-type": "data",
        "title": "PangoItem"
      },
      "index": {
        "description": "sequence of characters that are rendered with the same settings preprocessing stage done by itemize splits the input text into several chunks such that each chunk can be rendered with the same font direction slant etc Some attributes such as the color underline or strikethrough do not affect break into several PangoItem See also GlyphItem",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "PangoItem",
        "normalized": "",
        "package": "pango",
        "partial": "Pango Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:glyphItemExtents",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for bounding rectangles of this glyph sequence.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Compute the logical and ink extents of a glyph string. The\n logical extend is used for positioning, the ink size is the smallest\n bounding box that includes all character pixels. The ink size can be\n smaller or larger that the logical layout.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "GlyphItem -\u003e IO (PangoRectangle, PangoRectangle)",
        "fct-source": "src/Graphics-Rendering-Pango-GlyphStorage.html#glyphItemExtents",
        "fct-type": "function",
        "title": "glyphItemExtents"
      },
      "index": {
        "description": "Ask for bounding rectangles of this glyph sequence Compute the logical and ink extents of glyph string The logical extend is used for positioning the ink size is the smallest bounding box that includes all character pixels The ink size can be smaller or larger that the logical layout",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "glyphItemExtents",
        "normalized": "GlyphItem-\u003eIO(PangoRectangle,PangoRectangle)",
        "package": "pango",
        "partial": "Item Extents",
        "signature": "GlyphItem-\u003eIO(PangoRectangle,PangoRectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:glyphItemExtentsRange",
      "description": {
        "fct-descr": "\u003cp\u003eAsk for bounding rectangles for a sub-range of a glyph sequence.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The returned rectangles are relative to the given sub-range, that is,\n the result of this function is the same as if \u003ccode\u003e\u003ca\u003eglyphItemExtents\u003c/a\u003e\u003c/code\u003e\n were called on the sub-string.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "GlyphItem -\u003e Int -\u003e Int -\u003e IO (PangoRectangle, PangoRectangle)",
        "fct-source": "src/Graphics-Rendering-Pango-GlyphStorage.html#glyphItemExtentsRange",
        "fct-type": "function",
        "title": "glyphItemExtentsRange"
      },
      "index": {
        "description": "Ask for bounding rectangles for sub-range of glyph sequence The returned rectangles are relative to the given sub-range that is the result of this function is the same as if glyphItemExtents were called on the sub-string",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "glyphItemExtentsRange",
        "normalized": "GlyphItem-\u003eInt-\u003eInt-\u003eIO(PangoRectangle,PangoRectangle)",
        "package": "pango",
        "partial": "Item Extents Range",
        "signature": "GlyphItem-\u003eInt-\u003eInt-\u003eIO(PangoRectangle,PangoRectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:glyphItemGetLogicalWidths",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the width of every character in a string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The boolean parameter\n determines if the returned array starts with the leftmost glyph\n (\u003ccode\u003eFalse\u003c/code\u003e) or with the rightmost glyph (\u003ccode\u003eTrue\u003c/code\u003e). If \u003ccode\u003eNothing\u003c/code\u003e is\n passed in, the direction is taken from the \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e, i.e.,\n the array starts with the leftmost glyph for left-to-rigth text\n and with the rightmost glyph for right-to-left text. When multiple\n characters compose a single glyph, the width of this glyph is\n divided among the characters that compose this cluster.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "GlyphItem -\u003e Maybe Bool -\u003e IO [Double]",
        "fct-source": "src/Graphics-Rendering-Pango-GlyphStorage.html#glyphItemGetLogicalWidths",
        "fct-type": "function",
        "title": "glyphItemGetLogicalWidths"
      },
      "index": {
        "description": "Retrieve the width of every character in string The boolean parameter determines if the returned array starts with the leftmost glyph False or with the rightmost glyph True If Nothing is passed in the direction is taken from the GlyphItem i.e the array starts with the leftmost glyph for left-to-rigth text and with the rightmost glyph for right-to-left text When multiple characters compose single glyph the width of this glyph is divided among the characters that compose this cluster",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "glyphItemGetLogicalWidths",
        "normalized": "GlyphItem-\u003eMaybe Bool-\u003eIO[Double]",
        "package": "pango",
        "partial": "Item Get Logical Widths",
        "signature": "GlyphItem-\u003eMaybe Bool-\u003eIO[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:glyphItemIndexToX",
      "description": {
        "fct-descr": "\u003cp\u003eGet the horizontal position of a character.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Clusters (e.g. \"e\" with an accent modifier) are divided up into equal\n portions.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "GlyphItem-\u003e Int-\u003e Bool-\u003e IO Double",
        "fct-type": "function",
        "title": "glyphItemIndexToX"
      },
      "index": {
        "description": "Get the horizontal position of character Clusters e.g with an accent modifier are divided up into equal portions",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "glyphItemIndexToX",
        "normalized": "GlyphItem-\u003eInt-\u003eBool-\u003eIO Double",
        "package": "pango",
        "partial": "Item Index To",
        "signature": "GlyphItem-\u003eInt-\u003eBool-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:glyphItemSplit",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e at the given index.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The given \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e is split at the given index. The index must be\n at least one and not greater or equal to length, i.e. the item must\n be split into two non-empty segments. The function throws an\n \u003ccode\u003e\u003ca\u003eArrayException\u003c/a\u003e\u003c/code\u003e if the index is out of bounds.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "GlyphItem -\u003e Int -\u003e IO (GlyphItem, GlyphItem)",
        "fct-source": "src/Graphics-Rendering-Pango-GlyphStorage.html#glyphItemSplit",
        "fct-type": "function",
        "title": "glyphItemSplit"
      },
      "index": {
        "description": "Split GlyphItem at the given index The given GlyphItem is split at the given index The index must be at least one and not greater or equal to length i.e the item must be split into two non-empty segments The function throws an ArrayException if the index is out of bounds",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "glyphItemSplit",
        "normalized": "GlyphItem-\u003eInt-\u003eIO(GlyphItem,GlyphItem)",
        "package": "pango",
        "partial": "Item Split",
        "signature": "GlyphItem-\u003eInt-\u003eIO(GlyphItem,GlyphItem)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:glyphItemXToIndex",
      "description": {
        "fct-descr": "\u003cp\u003eGet the character at the given horizontal position.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The position is clipped to the width of this line.\n\u003c/li\u003e\u003cli\u003e The function returns the position in the string that corresponds\n to the given horizontal location. Furthermore, if the position lies\n on the first half of the character, \u003ccode\u003eFalse\u003c/code\u003e is returned.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "GlyphItem -\u003e Double -\u003e IO (Int, Bool)",
        "fct-source": "src/Graphics-Rendering-Pango-GlyphStorage.html#glyphItemXToIndex",
        "fct-type": "function",
        "title": "glyphItemXToIndex"
      },
      "index": {
        "description": "Get the character at the given horizontal position The position is clipped to the width of this line The function returns the position in the string that corresponds to the given horizontal location Furthermore if the position lies on the first half of the character False is returned",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "glyphItemXToIndex",
        "normalized": "GlyphItem-\u003eDouble-\u003eIO(Int,Bool)",
        "package": "pango",
        "partial": "Item XTo Index",
        "signature": "GlyphItem-\u003eDouble-\u003eIO(Int,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:pangoItemGetFont",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the font used for this \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "PangoItem -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#pangoItemGetFont",
        "fct-type": "function",
        "title": "pangoItemGetFont"
      },
      "index": {
        "description": "Extract the font used for this PangoItem",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "pangoItemGetFont",
        "normalized": "PangoItem-\u003eIO Font",
        "package": "pango",
        "partial": "Item Get Font",
        "signature": "PangoItem-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:pangoItemGetFontMetrics",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the metrics of the font that was chosen to break the given\n \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "PangoItem -\u003e IO FontMetrics",
        "fct-source": "src/Graphics-Rendering-Pango-Rendering.html#pangoItemGetFontMetrics",
        "fct-type": "function",
        "title": "pangoItemGetFontMetrics"
      },
      "index": {
        "description": "Retrieve the metrics of the font that was chosen to break the given PangoItem",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "pangoItemGetFontMetrics",
        "normalized": "PangoItem-\u003eIO FontMetrics",
        "package": "pango",
        "partial": "Item Get Font Metrics",
        "signature": "PangoItem-\u003eIO FontMetrics"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:pangoItemGetLanguage",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e used for this \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "PangoItem -\u003e IO Language",
        "fct-source": "src/Graphics-Rendering-Pango-Structs.html#pangoItemGetLanguage",
        "fct-type": "function",
        "title": "pangoItemGetLanguage"
      },
      "index": {
        "description": "Extract the Language used for this PangoItem",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "pangoItemGetLanguage",
        "normalized": "PangoItem-\u003eIO Language",
        "package": "pango",
        "partial": "Item Get Language",
        "signature": "PangoItem-\u003eIO Language"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:pangoItemize",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a string into a sequence of glyphs.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Partitions the input string into segments with the same text direction\n and shaping engine. The generated list of items will be in logical order\n (the start offsets of the items are ascending).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "PangoContext -\u003e String -\u003e [PangoAttribute] -\u003e IO [PangoItem]",
        "fct-source": "src/Graphics-Rendering-Pango-Rendering.html#pangoItemize",
        "fct-type": "function",
        "title": "pangoItemize"
      },
      "index": {
        "description": "Turn string into sequence of glyphs Partitions the input string into segments with the same text direction and shaping engine The generated list of items will be in logical order the start offsets of the items are ascending",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "pangoItemize",
        "normalized": "PangoContext-\u003eString-\u003e[PangoAttribute]-\u003eIO[PangoItem]",
        "package": "pango",
        "partial": "Itemize",
        "signature": "PangoContext-\u003eString-\u003e[PangoAttribute]-\u003eIO[PangoItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango-Rendering.html#v:pangoShape",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Turns a \u003ccode\u003e\u003ca\u003ePangoItem\u003c/a\u003e\u003c/code\u003e, that is, sequence of characters with the same\n attributes such as font, size and color, into a \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003e which\n contains the graphical representation of these characters. \u003ccode\u003e\u003ca\u003eGlyphItem\u003c/a\u003e\u003c/code\u003es\n can be rendered directly (and several times) onto screens.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Rendering.Pango.Rendering",
        "fct-package": "pango",
        "fct-signature": "PangoItem -\u003e IO GlyphItem",
        "fct-source": "src/Graphics-Rendering-Pango-Rendering.html#pangoShape",
        "fct-type": "function",
        "title": "pangoShape"
      },
      "index": {
        "description": "Turn PangoItem into GlyphItem Turns PangoItem that is sequence of characters with the same attributes such as font size and color into GlyphItem which contains the graphical representation of these characters GlyphItem can be rendered directly and several times onto screens",
        "hierarchy": "Graphics Rendering Pango Rendering",
        "module": "Graphics.Rendering.Pango.Rendering",
        "name": "pangoShape",
        "normalized": "PangoItem-\u003eIO GlyphItem",
        "package": "pango",
        "partial": "Shape",
        "signature": "PangoItem-\u003eIO GlyphItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pango/docs/Graphics-Rendering-Pango.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePango is a library for laying out and rendering of text, with an emphasis\n on internationalization. Pango can be used anywhere that text layout is\n needed, though most of the work on Pango so far has been done in the\n context of the GTK+ widget toolkit. Pango forms the core of text and font\n handling for GTK+-2.x.\n\u003c/p\u003e\u003cp\u003ePango is designed to be modular; the core Pango layout engine can be used\n with different font backends. There are three basic backends:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Client side fonts using the FreeType and fontconfig libraries.\n\u003c/li\u003e\u003cli\u003e Native fonts on Microsoft Windows using Uniscribe for complex-text handling.\n\u003c/li\u003e\u003cli\u003e Native fonts on MacOS X using ATSUI for complex-text handling.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe integration of Pango\n with Cairo \u003chttp:\n high quality text handling and graphics rendering.\n\u003c/p\u003e\u003cp\u003eDynamically loaded modules then handle text layout for particular\n combinations of script and font backend. Pango ships with a wide selection\n of modules, including modules for Hebrew, Arabic, Hangul, Thai, and a\n number of Indic scripts. Virtually all of the world's major scripts are\n supported.\n\u003c/p\u003e\u003cp\u003eAs well as the low level layout rendering routines, Pango includes\n \u003ccode\u003e\u003ca\u003ePangoLayout\u003c/a\u003e\u003c/code\u003e, a high level driver for laying out entire blocks of text, and\n routines to assist in editing internationalized text.\n\u003c/p\u003e\u003cp\u003ePango depends on 2.x series of the GLib library.\n\u003c/p\u003e\u003cp\u003eThis module only re-exports the parts of the Pango library that are relevant for\n text rendering (as opposed to integration with other libraries).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.Pango",
        "fct-package": "pango",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-Pango.html",
        "fct-type": "module",
        "title": "Pango"
      },
      "index": {
        "description": "Pango is library for laying out and rendering of text with an emphasis on internationalization Pango can be used anywhere that text layout is needed though most of the work on Pango so far has been done in the context of the GTK widget toolkit Pango forms the core of text and font handling for GTK Pango is designed to be modular the core Pango layout engine can be used with different font backends There are three basic backends Client side fonts using the FreeType and fontconfig libraries Native fonts on Microsoft Windows using Uniscribe for complex-text handling Native fonts on MacOS using ATSUI for complex-text handling The integration of Pango with Cairo http high quality text handling and graphics rendering Dynamically loaded modules then handle text layout for particular combinations of script and font backend Pango ships with wide selection of modules including modules for Hebrew Arabic Hangul Thai and number of Indic scripts Virtually all of the world major scripts are supported As well as the low level layout rendering routines Pango includes PangoLayout high level driver for laying out entire blocks of text and routines to assist in editing internationalized text Pango depends on series of the GLib library This module only re-exports the parts of the Pango library that are relevant for text rendering as opposed to integration with other libraries",
        "hierarchy": "Graphics Rendering Pango",
        "module": "Graphics.Rendering.Pango",
        "name": "Pango",
        "normalized": "",
        "package": "pango",
        "partial": "Pango",
        "signature": ""
      }
    }
  }
]