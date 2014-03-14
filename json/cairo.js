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
        "word": "cairo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMatrix math\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "Matrix",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "Matrix math",
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "Matrix",
          "package": "cairo",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a 2-D affine transformation.\n\u003c/p\u003e\u003cp\u003eThe Matrix type represents a 2x2 transformation matrix along with a\n  translation vector. \u003ccode\u003eMatrix a1 a2 b1 b2 c1 c2\u003c/code\u003e describes the\n  transformation of a point with coordinates x,y that is defined by\n\u003c/p\u003e\u003cpre\u003e   / x' \\  =  / a1 b1 \\  / x \\  + / c1 \\\n   \\ y' /     \\ a2 b2 /  \\ y /    \\ c2 /\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e   x' =  a1 * x + b1 * y + c1\n   y' =  a2 * x + b2 * y + c2\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "Matrix",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#Matrix",
          "type": "data"
        },
        "index": {
          "description": "Representation of affine transformation The Matrix type represents x2 transformation matrix along with translation vector Matrix a1 a2 b1 b2 c1 c2 describes the transformation of point with coordinates that is defined by a1 b1 c1 a2 b2 c2 or a1 b1 c1 a2 b2 c2",
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "Matrix",
          "package": "cairo",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "MatrixPtr",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#MatrixPtr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "MatrixPtr",
          "package": "cairo",
          "partial": "Matrix Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#t:MatrixPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "Matrix",
          "package": "cairo",
          "signature": "Matrix !Double !Double !Double !Double !Double !Double",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "Matrix",
          "package": "cairo",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "adjoint",
          "package": "cairo",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#adjoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "adjoint",
          "normalized": "Matrix-\u003eMatrix",
          "package": "cairo",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "identity",
          "package": "cairo",
          "signature": "Matrix",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#identity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "identity",
          "package": "cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "invert",
          "package": "cairo",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#invert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "invert",
          "normalized": "Matrix-\u003eMatrix",
          "package": "cairo",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "rotate",
          "package": "cairo",
          "signature": "Double -\u003e Matrix -\u003e Matrix",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#rotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "rotate",
          "normalized": "Double-\u003eMatrix-\u003eMatrix",
          "package": "cairo",
          "signature": "Double-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "scalarMultiply",
          "package": "cairo",
          "signature": "Double -\u003e Matrix -\u003e Matrix",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#scalarMultiply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "scalarMultiply",
          "normalized": "Double-\u003eMatrix-\u003eMatrix",
          "package": "cairo",
          "partial": "Multiply",
          "signature": "Double-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:scalarMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "scale",
          "package": "cairo",
          "signature": "Double -\u003e Double -\u003e Matrix -\u003e Matrix",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "scale",
          "normalized": "Double-\u003eDouble-\u003eMatrix-\u003eMatrix",
          "package": "cairo",
          "signature": "Double-\u003eDouble-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "transformDistance",
          "package": "cairo",
          "signature": "Matrix -\u003e (Double, Double) -\u003e (Double, Double)",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#transformDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "transformDistance",
          "normalized": "Matrix-\u003e(Double,Double)-\u003e(Double,Double)",
          "package": "cairo",
          "partial": "Distance",
          "signature": "Matrix-\u003e(Double,Double)-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:transformDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "transformPoint",
          "package": "cairo",
          "signature": "Matrix -\u003e (Double, Double) -\u003e (Double, Double)",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#transformPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "transformPoint",
          "normalized": "Matrix-\u003e(Double,Double)-\u003e(Double,Double)",
          "package": "cairo",
          "partial": "Point",
          "signature": "Matrix-\u003e(Double,Double)-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:transformPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "translate",
          "package": "cairo",
          "signature": "Double -\u003e Double -\u003e Matrix -\u003e Matrix",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#translate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo Matrix",
          "module": "Graphics.Rendering.Cairo.Matrix",
          "name": "translate",
          "normalized": "Double-\u003eDouble-\u003eMatrix-\u003eMatrix",
          "package": "cairo",
          "signature": "Double-\u003eDouble-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo-Matrix.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Cairo 2D graphics library.\n\u003c/p\u003e\u003cp\u003eCairo is a 2D graphics library with support for multiple output devices.\n Currently supported output targets include the X Window System, win32, and\n image buffers. Experimental backends include OpenGL (through glitz), Quartz,\n XCB, PostScript and PDF file output.\n\u003c/p\u003e\u003cp\u003eCairo is designed to produce consistent output on all output media while\n taking advantage of display hardware acceleration when available (eg.\n through the X Render Extension).\n\u003c/p\u003e\u003cp\u003eThe cairo API provides operations similar to the drawing operators of\n PostScript and PDF. Operations in cairo including stroking and filling cubic\n Bezier splines, transforming and compositing translucent images, and\n antialiased text rendering. All drawing operations can be transformed by any\n affine transformation (scale, rotation, shear, etc.) \n\u003c/p\u003e\u003cp\u003eCairo is free software and is available to be redistributed and/or modified\n under the terms of either the GNU Lesser General Public License (LGPL)\n version 2.1 or the Mozilla Public License (MPL) version 1.1.\n\u003c/p\u003e\u003cp\u003eFor more information see \u003ca\u003ehttp://cairographics.org\u003c/a\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note the Haskell bindings do not support all the possible cairo backends\n because it would require bindings for the associated technology (eg X11,\n glitz, etc) however bindings to other backends may be implemented\n externally. For example, Gtk2Hs provides a binding to the backend for X11\n (and win32 on Windows).\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Cairo",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo.html",
          "type": "module"
        },
        "index": {
          "description": "The Cairo graphics library Cairo is graphics library with support for multiple output devices Currently supported output targets include the Window System win32 and image buffers Experimental backends include OpenGL through glitz Quartz XCB PostScript and PDF file output Cairo is designed to produce consistent output on all output media while taking advantage of display hardware acceleration when available eg through the Render Extension The cairo API provides operations similar to the drawing operators of PostScript and PDF Operations in cairo including stroking and filling cubic Bezier splines transforming and compositing translucent images and antialiased text rendering All drawing operations can be transformed by any affine transformation scale rotation shear etc Cairo is free software and is available to be redistributed and or modified under the terms of either the GNU Lesser General Public License LGPL version or the Mozilla Public License MPL version For more information see http cairographics.org Note the Haskell bindings do not support all the possible cairo backends because it would require bindings for the associated technology eg X11 glitz etc however bindings to other backends may be implemented externally For example Gtk2Hs provides binding to the backend for X11 and win32 on Windows",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Cairo",
          "package": "cairo",
          "partial": "Cairo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the type of antialiasing to do when rendering text or shapes\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eAntialiasDefault\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Use the default antialiasing for the subsystem\n and target device.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eAntialiasNone\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Use a bilevel alpha mask.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eAntialiasGray\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Perform single-color antialiasing (using shades of\n gray for black text on a white background, for example).\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eAntialiasSubpixel\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Perform antialiasing by taking advantage of\n the order of subpixel elements on devices such as LCD panels.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Antialias",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Antialias",
          "type": "data"
        },
        "index": {
          "description": "Specifies the type of antialiasing to do when rendering text or shapes AntialiasDefault Use the default antialiasing for the subsystem and target device AntialiasNone Use bilevel alpha mask AntialiasGray Perform single-color antialiasing using shades of gray for black text on white background for example AntialiasSubpixel Perform antialiasing by taking advantage of the order of subpixel elements on devices such as LCD panels",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Antialias",
          "package": "cairo",
          "partial": "Antialias",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Antialias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "Content",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Content",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Content",
          "package": "cairo",
          "partial": "Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFIXME: We should find out about this.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Extend",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Extend",
          "type": "data"
        },
        "index": {
          "description": "FIXME We should find out about this",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Extend",
          "package": "cairo",
          "partial": "Extend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FillRule",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FillRule",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FillRule",
          "package": "cairo",
          "partial": "Fill Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:FillRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify how filtering is done.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Filter",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Filter",
          "type": "data"
        },
        "index": {
          "description": "Specify how filtering is done",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Filter",
          "package": "cairo",
          "partial": "Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of querying the font extents.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontExtents",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontExtents",
          "type": "data"
        },
        "index": {
          "description": "Result of querying the font extents",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontExtents",
          "package": "cairo",
          "partial": "Font Extents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:FontExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FontFace",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontFace",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontFace",
          "package": "cairo",
          "partial": "Font Face",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:FontFace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how to render text.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontOptions",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontOptions",
          "type": "data"
        },
        "index": {
          "description": "Specifies how to render text",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontOptions",
          "package": "cairo",
          "partial": "Font Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:FontOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify font slant.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontSlant",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontSlant",
          "type": "data"
        },
        "index": {
          "description": "Specify font slant",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontSlant",
          "package": "cairo",
          "partial": "Font Slant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:FontSlant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify font weight.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontWeight",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontWeight",
          "type": "data"
        },
        "index": {
          "description": "Specify font weight",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontWeight",
          "package": "cairo",
          "partial": "Font Weight",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:FontWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "Format",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Format",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Format",
          "package": "cairo",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "Glyph",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Glyph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Glyph",
          "package": "cairo",
          "partial": "Glyph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Glyph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies whether to hint font metrics.\n\u003c/p\u003e\u003cp\u003eHinting font metrics means quantizing them so that they are integer values\n in device space. Doing this improves the consistency of letter and line\n spacing, however it also means that text will be laid out differently at\n different zoom factors.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eHintMetricsDefault\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Hint metrics in the default manner for the font\n                         backend and target device\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eHintMetricsOff\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e      Do not hint font metrics\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eHintMetricsOn\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       Hint font metrics\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintMetrics",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintMetrics",
          "type": "data"
        },
        "index": {
          "description": "Specifies whether to hint font metrics Hinting font metrics means quantizing them so that they are integer values in device space Doing this improves the consistency of letter and line spacing however it also means that text will be laid out differently at different zoom factors HintMetricsDefault Hint metrics in the default manner for the font backend and target device HintMetricsOff Do not hint font metrics HintMetricsOn Hint font metrics",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintMetrics",
          "package": "cairo",
          "partial": "Hint Metrics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:HintMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the type of hinting to do on font outlines.\n\u003c/p\u003e\u003cp\u003eHinting is the process of fitting outlines to the pixel grid in order to\n improve the appearance of the result. Since hinting outlines involves\n distorting them, it also reduces the faithfulness to the original outline\n shapes. Not all of the outline hinting styles are supported by all font\n backends.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eHintStyleDefault\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Use the default hint style for for font backend and\n                       target device\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eHintStyleNone\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Do not hint outlines\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eHintStyleSlight\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e   Hint outlines slightly to improve contrast while\n                       retaining good fidelity to the original shapes.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eHintStyleMedium\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e   Hint outlines with medium strength giving a compromise\n                       between fidelity to the original shapes and contrast\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eHintStyleFull\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Hint outlines to maximize contrast\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyle",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintStyle",
          "type": "data"
        },
        "index": {
          "description": "Specifies the type of hinting to do on font outlines Hinting is the process of fitting outlines to the pixel grid in order to improve the appearance of the result Since hinting outlines involves distorting them it also reduces the faithfulness to the original outline shapes Not all of the outline hinting styles are supported by all font backends HintStyleDefault Use the default hint style for for font backend and target device HintStyleNone Do not hint outlines HintStyleSlight Hint outlines slightly to improve contrast while retaining good fidelity to the original shapes HintStyleMedium Hint outlines with medium strength giving compromise between fidelity to the original shapes and contrast HintStyleFull Hint outlines to maximize contrast",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyle",
          "package": "cairo",
          "partial": "Hint Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:HintStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify line endings.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eLineCapButt\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Start(stop) the line exactly at the start(end) point.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eLineCapRound\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Use a round ending, the center of the circle is the\n   end point.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eLineCapSquare\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Use squared ending, the center of the square is the\n   end point\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineCap",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#LineCap",
          "type": "data"
        },
        "index": {
          "description": "Specify line endings LineCapButt Start stop the line exactly at the start end point LineCapRound Use round ending the center of the circle is the end point LineCapSquare Use squared ending the center of the square is the end point",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineCap",
          "package": "cairo",
          "partial": "Line Cap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:LineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify how lines join.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineJoin",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#LineJoin",
          "type": "data"
        },
        "index": {
          "description": "Specify how lines join",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineJoin",
          "package": "cairo",
          "partial": "Line Join",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:LineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a 2-D affine transformation.\n\u003c/p\u003e\u003cp\u003eThe Matrix type represents a 2x2 transformation matrix along with a\n  translation vector. \u003ccode\u003eMatrix a1 a2 b1 b2 c1 c2\u003c/code\u003e describes the\n  transformation of a point with coordinates x,y that is defined by\n\u003c/p\u003e\u003cpre\u003e   / x' \\  =  / a1 b1 \\  / x \\  + / c1 \\\n   \\ y' /     \\ a2 b2 /  \\ y /    \\ c2 /\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e   x' =  a1 * x + b1 * y + c1\n   y' =  a2 * x + b2 * y + c2\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Matrix",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Matrix.html#Matrix",
          "type": "data"
        },
        "index": {
          "description": "Representation of affine transformation The Matrix type represents x2 transformation matrix along with translation vector Matrix a1 a2 b1 b2 c1 c2 describes the transformation of point with coordinates that is defined by a1 b1 c1 a2 b2 c2 or a1 b1 c1 a2 b2 c2",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Matrix",
          "package": "cairo",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition operator for all drawing operations.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Operator",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "data"
        },
        "index": {
          "description": "Composition operator for all drawing operations",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Operator",
          "package": "cairo",
          "partial": "Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Cairo path.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A path is a sequence of drawing operations that are accumulated until\n   \u003ccode\u003e\u003ca\u003estroke\u003c/a\u003e\u003c/code\u003e is called. Using a path is particularly\n   useful when drawing lines with special join styles and\n   \u003ccode\u003e\u003ca\u003eclosePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Path",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Path",
          "type": "data"
        },
        "index": {
          "description": "Cairo path path is sequence of drawing operations that are accumulated until stroke is called Using path is particularly useful when drawing lines with special join styles and closePath",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Path",
          "package": "cairo",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePatterns can be simple solid colors, various kinds of gradients or\n bitmaps. The current pattern for a \u003ccode\u003eRender\u003c/code\u003e context is used by the \u003ccode\u003estroke\u003c/code\u003e,\n \u003ccode\u003efill\u003c/code\u003e and paint operations. These operations composite the current pattern\n with the target surface using the currently selected \u003ccode\u003e\u003ca\u003eOperator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Pattern",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Pattern",
          "type": "data"
        },
        "index": {
          "description": "Patterns can be simple solid colors various kinds of gradients or bitmaps The current pattern for Render context is used by the stroke fill and paint operations These operations composite the current pattern with the target surface using the currently selected Operator",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Pattern",
          "package": "cairo",
          "partial": "Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure for holding a rectangle with integer coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "RectangleInt",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RectangleInt",
          "type": "data"
        },
        "index": {
          "description": "data structure for holding rectangle with integer coordinates",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "RectangleInt",
          "package": "cairo",
          "partial": "Rectangle Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:RectangleInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Cairo region. Represents a set of integer-aligned rectangles.\n\u003c/p\u003e\u003cp\u003eIt allows set-theoretical operations like regionUnion and regionIntersect to be performed on them.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Region",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Region",
          "type": "data"
        },
        "index": {
          "description": "Cairo region Represents set of integer-aligned rectangles It allows set-theoretical operations like regionUnion and regionIntersect to be performed on them",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Region",
          "package": "cairo",
          "partial": "Region",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed as the return value for regionContainsRectangle.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "RegionOverlap",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RegionOverlap",
          "type": "data"
        },
        "index": {
          "description": "Used as the return value for regionContainsRectangle",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "RegionOverlap",
          "package": "cairo",
          "partial": "Region Overlap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:RegionOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Render monad. All drawing operations take place in a Render context.\n You can obtain a Render context for a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003erenderWith\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Render",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Internal.html#Render",
          "type": "data"
        },
        "index": {
          "description": "The Render monad All drawing operations take place in Render context You can obtain Render context for Surface using renderWith",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Render",
          "package": "cairo",
          "partial": "Render",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "ScaledFont",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#ScaledFont",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "ScaledFont",
          "package": "cairo",
          "partial": "Scaled Font",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:ScaledFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCairo status.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e is used to indicate errors that can occur when using\n   Cairo. In some cases it is returned directly by functions. When using\n   \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e, the last error, if any, is stored\n   in the monad and can be retrieved with \u003ccode\u003e\u003ca\u003estatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Status",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "data"
        },
        "index": {
          "description": "Cairo status Status is used to indicate errors that can occur when using Cairo In some cases it is returned directly by functions When using Render the last error if any is stored in the monad and can be retrieved with status",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Status",
          "package": "cairo",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe subpixel order specifies the order of color elements within each pixel\n on the display device when rendering with an antialiasing mode of\n \u003ccode\u003e\u003ca\u003eAntialiasSubpixel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eSubpixelOrderDefault\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Use the default subpixel order for for the\n                          target device\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eSubpixelOrderRgb\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Subpixel elements are arranged horizontally\n                          with red at the left\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eSubpixelOrderBgr\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Subpixel elements are arranged horizontally\n                          with blue at the left\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eSubpixelOrderVrgb\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Subpixel elements are arranged vertically\n                          with red at the top\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eSubpixelOrderVbgr\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Subpixel elements are arranged vertically\n                          with blue at the top \n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrder",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#SubpixelOrder",
          "type": "data"
        },
        "index": {
          "description": "The subpixel order specifies the order of color elements within each pixel on the display device when rendering with an antialiasing mode of AntialiasSubpixel SubpixelOrderDefault Use the default subpixel order for for the target device SubpixelOrderRgb Subpixel elements are arranged horizontally with red at the left SubpixelOrderBgr Subpixel elements are arranged horizontally with blue at the left SubpixelOrderVrgb Subpixel elements are arranged vertically with red at the top SubpixelOrderVbgr Subpixel elements are arranged vertically with blue at the top",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrder",
          "package": "cairo",
          "partial": "Subpixel Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:SubpixelOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe medium to draw on.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "Surface",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Surface",
          "type": "data"
        },
        "index": {
          "description": "The medium to draw on",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "Surface",
          "package": "cairo",
          "partial": "Surface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:Surface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array that stores the raw pixel data of an image \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "SurfaceData",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo.html#SurfaceData",
          "type": "data"
        },
        "index": {
          "description": "An array that stores the raw pixel data of an image Surface",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "SurfaceData",
          "package": "cairo",
          "partial": "Surface Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:SurfaceData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the extents of a text.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "TextExtents",
          "package": "cairo",
          "source": "src/Graphics-Rendering-Cairo-Types.html#TextExtents",
          "type": "data"
        },
        "index": {
          "description": "Specify the extents of text",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "TextExtents",
          "package": "cairo",
          "partial": "Text Extents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#t:TextExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasBest",
          "package": "cairo",
          "signature": "AntialiasBest",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Antialias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasBest",
          "package": "cairo",
          "partial": "Antialias Best",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:AntialiasBest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasDefault",
          "package": "cairo",
          "signature": "AntialiasDefault",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Antialias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasDefault",
          "package": "cairo",
          "partial": "Antialias Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:AntialiasDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasFast",
          "package": "cairo",
          "signature": "AntialiasFast",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Antialias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasFast",
          "package": "cairo",
          "partial": "Antialias Fast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:AntialiasFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasGood",
          "package": "cairo",
          "signature": "AntialiasGood",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Antialias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasGood",
          "package": "cairo",
          "partial": "Antialias Good",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:AntialiasGood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasGray",
          "package": "cairo",
          "signature": "AntialiasGray",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Antialias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasGray",
          "package": "cairo",
          "partial": "Antialias Gray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:AntialiasGray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasNone",
          "package": "cairo",
          "signature": "AntialiasNone",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Antialias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasNone",
          "package": "cairo",
          "partial": "Antialias None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:AntialiasNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasSubpixel",
          "package": "cairo",
          "signature": "AntialiasSubpixel",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Antialias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "AntialiasSubpixel",
          "package": "cairo",
          "partial": "Antialias Subpixel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:AntialiasSubpixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "ContentAlpha",
          "package": "cairo",
          "signature": "ContentAlpha",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "ContentAlpha",
          "package": "cairo",
          "partial": "Content Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:ContentAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "ContentColor",
          "package": "cairo",
          "signature": "ContentColor",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "ContentColor",
          "package": "cairo",
          "partial": "Content Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:ContentColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "ContentColorAlpha",
          "package": "cairo",
          "signature": "ContentColorAlpha",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "ContentColorAlpha",
          "package": "cairo",
          "partial": "Content Color Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:ContentColorAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "ExtendNone",
          "package": "cairo",
          "signature": "ExtendNone",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Extend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "ExtendNone",
          "package": "cairo",
          "partial": "Extend None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:ExtendNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "ExtendPad",
          "package": "cairo",
          "signature": "ExtendPad",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Extend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "ExtendPad",
          "package": "cairo",
          "partial": "Extend Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:ExtendPad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "ExtendReflect",
          "package": "cairo",
          "signature": "ExtendReflect",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Extend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "ExtendReflect",
          "package": "cairo",
          "partial": "Extend Reflect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:ExtendReflect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "ExtendRepeat",
          "package": "cairo",
          "signature": "ExtendRepeat",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Extend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "ExtendRepeat",
          "package": "cairo",
          "partial": "Extend Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:ExtendRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FillRuleEvenOdd",
          "package": "cairo",
          "signature": "FillRuleEvenOdd",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FillRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FillRuleEvenOdd",
          "package": "cairo",
          "partial": "Fill Rule Even Odd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FillRuleEvenOdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FillRuleWinding",
          "package": "cairo",
          "signature": "FillRuleWinding",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FillRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FillRuleWinding",
          "package": "cairo",
          "partial": "Fill Rule Winding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FillRuleWinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterBest",
          "package": "cairo",
          "signature": "FilterBest",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterBest",
          "package": "cairo",
          "partial": "Filter Best",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FilterBest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterBilinear",
          "package": "cairo",
          "signature": "FilterBilinear",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterBilinear",
          "package": "cairo",
          "partial": "Filter Bilinear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FilterBilinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterFast",
          "package": "cairo",
          "signature": "FilterFast",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterFast",
          "package": "cairo",
          "partial": "Filter Fast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FilterFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterGaussian",
          "package": "cairo",
          "signature": "FilterGaussian",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterGaussian",
          "package": "cairo",
          "partial": "Filter Gaussian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FilterGaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterGood",
          "package": "cairo",
          "signature": "FilterGood",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterGood",
          "package": "cairo",
          "partial": "Filter Good",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FilterGood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterNearest",
          "package": "cairo",
          "signature": "FilterNearest",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FilterNearest",
          "package": "cairo",
          "partial": "Filter Nearest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FilterNearest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FontExtents",
          "package": "cairo",
          "signature": "FontExtents",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontExtents",
          "package": "cairo",
          "partial": "Font Extents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FontExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FontSlantItalic",
          "package": "cairo",
          "signature": "FontSlantItalic",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontSlant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontSlantItalic",
          "package": "cairo",
          "partial": "Font Slant Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FontSlantItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FontSlantNormal",
          "package": "cairo",
          "signature": "FontSlantNormal",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontSlant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontSlantNormal",
          "package": "cairo",
          "partial": "Font Slant Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FontSlantNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FontSlantOblique",
          "package": "cairo",
          "signature": "FontSlantOblique",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontSlant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontSlantOblique",
          "package": "cairo",
          "partial": "Font Slant Oblique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FontSlantOblique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FontWeightBold",
          "package": "cairo",
          "signature": "FontWeightBold",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontWeightBold",
          "package": "cairo",
          "partial": "Font Weight Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FontWeightBold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FontWeightNormal",
          "package": "cairo",
          "signature": "FontWeightNormal",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FontWeightNormal",
          "package": "cairo",
          "partial": "Font Weight Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FontWeightNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FormatA1",
          "package": "cairo",
          "signature": "FormatA1",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FormatA1",
          "package": "cairo",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FormatA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FormatA8",
          "package": "cairo",
          "signature": "FormatA8",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FormatA8",
          "package": "cairo",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FormatA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FormatARGB32",
          "package": "cairo",
          "signature": "FormatARGB32",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FormatARGB32",
          "package": "cairo",
          "partial": "Format ARGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FormatARGB32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "FormatRGB24",
          "package": "cairo",
          "signature": "FormatRGB24",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "FormatRGB24",
          "package": "cairo",
          "partial": "Format RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:FormatRGB24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "HintMetricsDefault",
          "package": "cairo",
          "signature": "HintMetricsDefault",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintMetrics",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintMetricsDefault",
          "package": "cairo",
          "partial": "Hint Metrics Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:HintMetricsDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "HintMetricsOff",
          "package": "cairo",
          "signature": "HintMetricsOff",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintMetrics",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintMetricsOff",
          "package": "cairo",
          "partial": "Hint Metrics Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:HintMetricsOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "HintMetricsOn",
          "package": "cairo",
          "signature": "HintMetricsOn",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintMetrics",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintMetricsOn",
          "package": "cairo",
          "partial": "Hint Metrics On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:HintMetricsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleDefault",
          "package": "cairo",
          "signature": "HintStyleDefault",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleDefault",
          "package": "cairo",
          "partial": "Hint Style Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:HintStyleDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleFull",
          "package": "cairo",
          "signature": "HintStyleFull",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleFull",
          "package": "cairo",
          "partial": "Hint Style Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:HintStyleFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleMedium",
          "package": "cairo",
          "signature": "HintStyleMedium",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleMedium",
          "package": "cairo",
          "partial": "Hint Style Medium",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:HintStyleMedium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleNone",
          "package": "cairo",
          "signature": "HintStyleNone",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleNone",
          "package": "cairo",
          "partial": "Hint Style None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:HintStyleNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleSlight",
          "package": "cairo",
          "signature": "HintStyleSlight",
          "source": "src/Graphics-Rendering-Cairo-Types.html#HintStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "HintStyleSlight",
          "package": "cairo",
          "partial": "Hint Style Slight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:HintStyleSlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "LineCapButt",
          "package": "cairo",
          "signature": "LineCapButt",
          "source": "src/Graphics-Rendering-Cairo-Types.html#LineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineCapButt",
          "package": "cairo",
          "partial": "Line Cap Butt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:LineCapButt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "LineCapRound",
          "package": "cairo",
          "signature": "LineCapRound",
          "source": "src/Graphics-Rendering-Cairo-Types.html#LineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineCapRound",
          "package": "cairo",
          "partial": "Line Cap Round",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:LineCapRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "LineCapSquare",
          "package": "cairo",
          "signature": "LineCapSquare",
          "source": "src/Graphics-Rendering-Cairo-Types.html#LineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineCapSquare",
          "package": "cairo",
          "partial": "Line Cap Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:LineCapSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "LineJoinBevel",
          "package": "cairo",
          "signature": "LineJoinBevel",
          "source": "src/Graphics-Rendering-Cairo-Types.html#LineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineJoinBevel",
          "package": "cairo",
          "partial": "Line Join Bevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:LineJoinBevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "LineJoinMiter",
          "package": "cairo",
          "signature": "LineJoinMiter",
          "source": "src/Graphics-Rendering-Cairo-Types.html#LineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineJoinMiter",
          "package": "cairo",
          "partial": "Line Join Miter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:LineJoinMiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "LineJoinRound",
          "package": "cairo",
          "signature": "LineJoinRound",
          "source": "src/Graphics-Rendering-Cairo-Types.html#LineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "LineJoinRound",
          "package": "cairo",
          "partial": "Line Join Round",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:LineJoinRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorAdd",
          "package": "cairo",
          "signature": "OperatorAdd",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorAdd",
          "package": "cairo",
          "partial": "Operator Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorAtop",
          "package": "cairo",
          "signature": "OperatorAtop",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorAtop",
          "package": "cairo",
          "partial": "Operator Atop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorAtop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorClear",
          "package": "cairo",
          "signature": "OperatorClear",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorClear",
          "package": "cairo",
          "partial": "Operator Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorColorBurn",
          "package": "cairo",
          "signature": "OperatorColorBurn",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorColorBurn",
          "package": "cairo",
          "partial": "Operator Color Burn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorColorBurn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorColorDodge",
          "package": "cairo",
          "signature": "OperatorColorDodge",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorColorDodge",
          "package": "cairo",
          "partial": "Operator Color Dodge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorColorDodge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDarken",
          "package": "cairo",
          "signature": "OperatorDarken",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDarken",
          "package": "cairo",
          "partial": "Operator Darken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorDarken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDest",
          "package": "cairo",
          "signature": "OperatorDest",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDest",
          "package": "cairo",
          "partial": "Operator Dest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDestAtop",
          "package": "cairo",
          "signature": "OperatorDestAtop",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDestAtop",
          "package": "cairo",
          "partial": "Operator Dest Atop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorDestAtop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDestIn",
          "package": "cairo",
          "signature": "OperatorDestIn",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDestIn",
          "package": "cairo",
          "partial": "Operator Dest In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorDestIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDestOut",
          "package": "cairo",
          "signature": "OperatorDestOut",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDestOut",
          "package": "cairo",
          "partial": "Operator Dest Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorDestOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDestOver",
          "package": "cairo",
          "signature": "OperatorDestOver",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDestOver",
          "package": "cairo",
          "partial": "Operator Dest Over",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorDestOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDifference",
          "package": "cairo",
          "signature": "OperatorDifference",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorDifference",
          "package": "cairo",
          "partial": "Operator Difference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorDifference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorExclusion",
          "package": "cairo",
          "signature": "OperatorExclusion",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorExclusion",
          "package": "cairo",
          "partial": "Operator Exclusion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorExclusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHardLight",
          "package": "cairo",
          "signature": "OperatorHardLight",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHardLight",
          "package": "cairo",
          "partial": "Operator Hard Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorHardLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHslColor",
          "package": "cairo",
          "signature": "OperatorHslColor",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHslColor",
          "package": "cairo",
          "partial": "Operator Hsl Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorHslColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHslHue",
          "package": "cairo",
          "signature": "OperatorHslHue",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHslHue",
          "package": "cairo",
          "partial": "Operator Hsl Hue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorHslHue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHslLuminosity",
          "package": "cairo",
          "signature": "OperatorHslLuminosity",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHslLuminosity",
          "package": "cairo",
          "partial": "Operator Hsl Luminosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorHslLuminosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHslSaturation",
          "package": "cairo",
          "signature": "OperatorHslSaturation",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorHslSaturation",
          "package": "cairo",
          "partial": "Operator Hsl Saturation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorHslSaturation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorIn",
          "package": "cairo",
          "signature": "OperatorIn",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorIn",
          "package": "cairo",
          "partial": "Operator In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorLighten",
          "package": "cairo",
          "signature": "OperatorLighten",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorLighten",
          "package": "cairo",
          "partial": "Operator Lighten",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorLighten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorMultiply",
          "package": "cairo",
          "signature": "OperatorMultiply",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorMultiply",
          "package": "cairo",
          "partial": "Operator Multiply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorOut",
          "package": "cairo",
          "signature": "OperatorOut",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorOut",
          "package": "cairo",
          "partial": "Operator Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorOver",
          "package": "cairo",
          "signature": "OperatorOver",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorOver",
          "package": "cairo",
          "partial": "Operator Over",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorOverlay",
          "package": "cairo",
          "signature": "OperatorOverlay",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorOverlay",
          "package": "cairo",
          "partial": "Operator Overlay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorOverlay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorSaturate",
          "package": "cairo",
          "signature": "OperatorSaturate",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorSaturate",
          "package": "cairo",
          "partial": "Operator Saturate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorSaturate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorScreen",
          "package": "cairo",
          "signature": "OperatorScreen",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorScreen",
          "package": "cairo",
          "partial": "Operator Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorSoftLight",
          "package": "cairo",
          "signature": "OperatorSoftLight",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorSoftLight",
          "package": "cairo",
          "partial": "Operator Soft Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorSoftLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorSource",
          "package": "cairo",
          "signature": "OperatorSource",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorSource",
          "package": "cairo",
          "partial": "Operator Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorXor",
          "package": "cairo",
          "signature": "OperatorXor",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "OperatorXor",
          "package": "cairo",
          "partial": "Operator Xor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:OperatorXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "RectangleInt",
          "package": "cairo",
          "signature": "RectangleInt",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RectangleInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "RectangleInt",
          "package": "cairo",
          "partial": "Rectangle Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:RectangleInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "RegionOverlapIn",
          "package": "cairo",
          "signature": "RegionOverlapIn",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RegionOverlap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "RegionOverlapIn",
          "package": "cairo",
          "partial": "Region Overlap In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:RegionOverlapIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "RegionOverlapOut",
          "package": "cairo",
          "signature": "RegionOverlapOut",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RegionOverlap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "RegionOverlapOut",
          "package": "cairo",
          "partial": "Region Overlap Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:RegionOverlapOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "RegionOverlapPart",
          "package": "cairo",
          "signature": "RegionOverlapPart",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RegionOverlap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "RegionOverlapPart",
          "package": "cairo",
          "partial": "Region Overlap Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:RegionOverlapPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusClipNotRepresentable",
          "package": "cairo",
          "signature": "StatusClipNotRepresentable",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusClipNotRepresentable",
          "package": "cairo",
          "partial": "Status Clip Not Representable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusClipNotRepresentable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusDeviceError",
          "package": "cairo",
          "signature": "StatusDeviceError",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusDeviceError",
          "package": "cairo",
          "partial": "Status Device Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusDeviceError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusDeviceFinished",
          "package": "cairo",
          "signature": "StatusDeviceFinished",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusDeviceFinished",
          "package": "cairo",
          "partial": "Status Device Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusDeviceFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusDeviceTypeMismatch",
          "package": "cairo",
          "signature": "StatusDeviceTypeMismatch",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusDeviceTypeMismatch",
          "package": "cairo",
          "partial": "Status Device Type Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusDeviceTypeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusFileNotFound",
          "package": "cairo",
          "signature": "StatusFileNotFound",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusFileNotFound",
          "package": "cairo",
          "partial": "Status File Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusFileNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusFontTypeMismatch",
          "package": "cairo",
          "signature": "StatusFontTypeMismatch",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusFontTypeMismatch",
          "package": "cairo",
          "partial": "Status Font Type Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusFontTypeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidClusters",
          "package": "cairo",
          "signature": "StatusInvalidClusters",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidClusters",
          "package": "cairo",
          "partial": "Status Invalid Clusters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidClusters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidContent",
          "package": "cairo",
          "signature": "StatusInvalidContent",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidContent",
          "package": "cairo",
          "partial": "Status Invalid Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidDash",
          "package": "cairo",
          "signature": "StatusInvalidDash",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidDash",
          "package": "cairo",
          "partial": "Status Invalid Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidDscComment",
          "package": "cairo",
          "signature": "StatusInvalidDscComment",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidDscComment",
          "package": "cairo",
          "partial": "Status Invalid Dsc Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidDscComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidFormat",
          "package": "cairo",
          "signature": "StatusInvalidFormat",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidFormat",
          "package": "cairo",
          "partial": "Status Invalid Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidIndex",
          "package": "cairo",
          "signature": "StatusInvalidIndex",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidIndex",
          "package": "cairo",
          "partial": "Status Invalid Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidMatrix",
          "package": "cairo",
          "signature": "StatusInvalidMatrix",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidMatrix",
          "package": "cairo",
          "partial": "Status Invalid Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidMeshConstruction",
          "package": "cairo",
          "signature": "StatusInvalidMeshConstruction",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidMeshConstruction",
          "package": "cairo",
          "partial": "Status Invalid Mesh Construction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidMeshConstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidPathData",
          "package": "cairo",
          "signature": "StatusInvalidPathData",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidPathData",
          "package": "cairo",
          "partial": "Status Invalid Path Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidPathData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidPopGroup",
          "package": "cairo",
          "signature": "StatusInvalidPopGroup",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidPopGroup",
          "package": "cairo",
          "partial": "Status Invalid Pop Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidPopGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidRestore",
          "package": "cairo",
          "signature": "StatusInvalidRestore",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidRestore",
          "package": "cairo",
          "partial": "Status Invalid Restore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidRestore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidSize",
          "package": "cairo",
          "signature": "StatusInvalidSize",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidSize",
          "package": "cairo",
          "partial": "Status Invalid Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidSlant",
          "package": "cairo",
          "signature": "StatusInvalidSlant",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidSlant",
          "package": "cairo",
          "partial": "Status Invalid Slant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidSlant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidStatus",
          "package": "cairo",
          "signature": "StatusInvalidStatus",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidStatus",
          "package": "cairo",
          "partial": "Status Invalid Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidStride",
          "package": "cairo",
          "signature": "StatusInvalidStride",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidStride",
          "package": "cairo",
          "partial": "Status Invalid Stride",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidString",
          "package": "cairo",
          "signature": "StatusInvalidString",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidString",
          "package": "cairo",
          "partial": "Status Invalid String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidVisual",
          "package": "cairo",
          "signature": "StatusInvalidVisual",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidVisual",
          "package": "cairo",
          "partial": "Status Invalid Visual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidVisual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidWeight",
          "package": "cairo",
          "signature": "StatusInvalidWeight",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusInvalidWeight",
          "package": "cairo",
          "partial": "Status Invalid Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusInvalidWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusLastStatus",
          "package": "cairo",
          "signature": "StatusLastStatus",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusLastStatus",
          "package": "cairo",
          "partial": "Status Last Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusLastStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusNegativeCount",
          "package": "cairo",
          "signature": "StatusNegativeCount",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusNegativeCount",
          "package": "cairo",
          "partial": "Status Negative Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusNegativeCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusNoCurrentPoint",
          "package": "cairo",
          "signature": "StatusNoCurrentPoint",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusNoCurrentPoint",
          "package": "cairo",
          "partial": "Status No Current Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusNoCurrentPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusNoMemory",
          "package": "cairo",
          "signature": "StatusNoMemory",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusNoMemory",
          "package": "cairo",
          "partial": "Status No Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusNoMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusNullPointer",
          "package": "cairo",
          "signature": "StatusNullPointer",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusNullPointer",
          "package": "cairo",
          "partial": "Status Null Pointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusNullPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusPatternTypeMismatch",
          "package": "cairo",
          "signature": "StatusPatternTypeMismatch",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusPatternTypeMismatch",
          "package": "cairo",
          "partial": "Status Pattern Type Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusPatternTypeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusReadError",
          "package": "cairo",
          "signature": "StatusReadError",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusReadError",
          "package": "cairo",
          "partial": "Status Read Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusReadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusSuccess",
          "package": "cairo",
          "signature": "StatusSuccess",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusSuccess",
          "package": "cairo",
          "partial": "Status Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusSurfaceFinished",
          "package": "cairo",
          "signature": "StatusSurfaceFinished",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusSurfaceFinished",
          "package": "cairo",
          "partial": "Status Surface Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusSurfaceFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusSurfaceTypeMismatch",
          "package": "cairo",
          "signature": "StatusSurfaceTypeMismatch",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusSurfaceTypeMismatch",
          "package": "cairo",
          "partial": "Status Surface Type Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusSurfaceTypeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusTempFileError",
          "package": "cairo",
          "signature": "StatusTempFileError",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusTempFileError",
          "package": "cairo",
          "partial": "Status Temp File Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusTempFileError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusUserFontError",
          "package": "cairo",
          "signature": "StatusUserFontError",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusUserFontError",
          "package": "cairo",
          "partial": "Status User Font Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusUserFontError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusUserFontImmutable",
          "package": "cairo",
          "signature": "StatusUserFontImmutable",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusUserFontImmutable",
          "package": "cairo",
          "partial": "Status User Font Immutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusUserFontImmutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusUserFontNotImplemented",
          "package": "cairo",
          "signature": "StatusUserFontNotImplemented",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusUserFontNotImplemented",
          "package": "cairo",
          "partial": "Status User Font Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusUserFontNotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusWriteError",
          "package": "cairo",
          "signature": "StatusWriteError",
          "source": "src/Graphics-Rendering-Cairo-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "StatusWriteError",
          "package": "cairo",
          "partial": "Status Write Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:StatusWriteError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderBgr",
          "package": "cairo",
          "signature": "SubpixelOrderBgr",
          "source": "src/Graphics-Rendering-Cairo-Types.html#SubpixelOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderBgr",
          "package": "cairo",
          "partial": "Subpixel Order Bgr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:SubpixelOrderBgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderDefault",
          "package": "cairo",
          "signature": "SubpixelOrderDefault",
          "source": "src/Graphics-Rendering-Cairo-Types.html#SubpixelOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderDefault",
          "package": "cairo",
          "partial": "Subpixel Order Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:SubpixelOrderDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderRgb",
          "package": "cairo",
          "signature": "SubpixelOrderRgb",
          "source": "src/Graphics-Rendering-Cairo-Types.html#SubpixelOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderRgb",
          "package": "cairo",
          "partial": "Subpixel Order Rgb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:SubpixelOrderRgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderVbgr",
          "package": "cairo",
          "signature": "SubpixelOrderVbgr",
          "source": "src/Graphics-Rendering-Cairo-Types.html#SubpixelOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderVbgr",
          "package": "cairo",
          "partial": "Subpixel Order Vbgr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:SubpixelOrderVbgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderVrgb",
          "package": "cairo",
          "signature": "SubpixelOrderVrgb",
          "source": "src/Graphics-Rendering-Cairo-Types.html#SubpixelOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "SubpixelOrderVrgb",
          "package": "cairo",
          "partial": "Subpixel Order Vrgb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:SubpixelOrderVrgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "TextExtents",
          "package": "cairo",
          "signature": "TextExtents",
          "source": "src/Graphics-Rendering-Cairo-Types.html#TextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "TextExtents",
          "package": "cairo",
          "partial": "Text Extents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:TextExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a circular arc of the given radius to the current path. The arc is\n centered at (\u003ccode\u003exc\u003c/code\u003e, \u003ccode\u003eyc\u003c/code\u003e), begins at \u003ccode\u003eangle1\u003c/code\u003e and proceeds in the direction of\n increasing angles to end at \u003ccode\u003eangle2\u003c/code\u003e. If \u003ccode\u003eangle2\u003c/code\u003e is less than \u003ccode\u003eangle1\u003c/code\u003e it\n will be progressively increased by \u003ccode\u003e2*pi\u003c/code\u003e until it is greater than \u003ccode\u003eangle1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf there is a current point, an initial line segment will be added to the\n path to connect the current point to the beginning of the arc.\n\u003c/p\u003e\u003cp\u003eAngles are measured in radians. An angle of 0 is in the direction of the\n positive X axis (in user-space). An angle of \u003ccode\u003epi/2\u003c/code\u003e radians (90 degrees) is in\n the direction of the positive Y axis (in user-space). Angles increase in the\n direction from the positive X axis toward the positive Y axis. So with the\n default transformation matrix, angles increase in a clockwise direction.\n\u003c/p\u003e\u003cp\u003e(To convert from degrees to radians, use \u003ccode\u003edegrees * (pi / 180)\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThis function gives the arc in the direction of increasing angles; see\n \u003ccode\u003e\u003ca\u003earcNegative\u003c/a\u003e\u003c/code\u003e to get the arc in the direction of decreasing angles.\n\u003c/p\u003e\u003cp\u003eThe arc is circular in user-space. To achieve an elliptical arc, you can\n scale the current transformation matrix by different amounts in the X and Y\n directions. For example, to draw an ellipse in the box given by x, y, width,\n height:\n\u003c/p\u003e\u003cpre\u003e save\n translate (x + width / 2) (y + height / 2)\n scale (1 / (height / 2.)) (1 / (width / 2))\n arc 0 0 1 0 (2 * pi)\n restore\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "arc",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Adds circular arc of the given radius to the current path The arc is centered at xc yc begins at angle1 and proceeds in the direction of increasing angles to end at angle2 If angle2 is less than angle1 it will be progressively increased by pi until it is greater than angle1 If there is current point an initial line segment will be added to the path to connect the current point to the beginning of the arc Angles are measured in radians An angle of is in the direction of the positive axis in user-space An angle of pi radians degrees is in the direction of the positive axis in user-space Angles increase in the direction from the positive axis toward the positive axis So with the default transformation matrix angles increase in clockwise direction To convert from degrees to radians use degrees pi This function gives the arc in the direction of increasing angles see arcNegative to get the arc in the direction of decreasing angles The arc is circular in user-space To achieve an elliptical arc you can scale the current transformation matrix by different amounts in the and directions For example to draw an ellipse in the box given by width height save translate width height scale height width arc pi restore",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "arc",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a circular arc of the given radius to the current path. The arc is\n centered at (\u003ccode\u003exc\u003c/code\u003e, \u003ccode\u003eyc\u003c/code\u003e), begins at \u003ccode\u003eangle1\u003c/code\u003e and proceeds in the direction of\n decreasing angles to end at \u003ccode\u003eangle2\u003c/code\u003e. If \u003ccode\u003eangle2\u003c/code\u003e is greater than \u003ccode\u003eangle1\u003c/code\u003e it\n will be progressively decreased by 2*\u003ccode\u003epi\u003c/code\u003e until it is greater than \u003ccode\u003eangle1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003earc\u003c/a\u003e\u003c/code\u003e for more details. This function differs only in the direction of\n the arc between the two angles.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "arcNegative",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Adds circular arc of the given radius to the current path The arc is centered at xc yc begins at angle1 and proceeds in the direction of decreasing angles to end at angle2 If angle2 is greater than angle1 it will be progressively decreased by pi until it is greater than angle1 See arc for more details This function differs only in the direction of the arc between the two angles",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "arcNegative",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "Negative",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:arcNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablishes a new clip region by intersecting the current clip region with\n the current path as it would be filled by \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e and according to the current\n fill rule (see \u003ccode\u003e\u003ca\u003esetFillRule\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eAfter \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e, the current path will be cleared from the cairo context.\n\u003c/p\u003e\u003cp\u003eThe current clip region affects all drawing operations by effectively masking\n out any changes to the surface that are outside the current clip region.\n\u003c/p\u003e\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e can only make the clip region smaller, never larger. But the\n current clip is part of the graphics state, so a temporary restriction of the\n clip region can be achieved by calling \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e within a 'save'/'restore' pair.\n The only other means of increasing the size of the clip region is \u003ccode\u003e\u003ca\u003eresetClip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "clip",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#clip",
          "type": "function"
        },
        "index": {
          "description": "Establishes new clip region by intersecting the current clip region with the current path as it would be filled by fill and according to the current fill rule see setFillRule After clip the current path will be cleared from the cairo context The current clip region affects all drawing operations by effectively masking out any changes to the surface that are outside the current clip region Calling clip can only make the clip region smaller never larger But the current clip is part of the graphics state so temporary restriction of the clip region can be achieved by calling clip within save restore pair The only other means of increasing the size of the clip region is resetClip",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "clip",
          "normalized": "Render()",
          "package": "cairo",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:clip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablishes a new clip region by intersecting the current clip region with\n the current path as it would be filled by \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e and according to the current\n fill rule (see \u003ccode\u003e\u003ca\u003esetFillRule\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e, cairoClipPreserve preserves the path within the cairo context.\n\u003c/p\u003e\u003cp\u003eThe current clip region affects all drawing operations by effectively masking\n out any changes to the surface that are outside the current clip region.\n\u003c/p\u003e\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e can only make the clip region smaller, never larger. But the\n current clip is part of the graphics state, so a temporary restriction of the\n clip region can be achieved by calling \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e within a 'save'/'restore' pair.\n The only other means of increasing the size of the clip region is \u003ccode\u003e\u003ca\u003eresetClip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "clipPreserve",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#clipPreserve",
          "type": "function"
        },
        "index": {
          "description": "Establishes new clip region by intersecting the current clip region with the current path as it would be filled by fill and according to the current fill rule see setFillRule Unlike clip cairoClipPreserve preserves the path within the cairo context The current clip region affects all drawing operations by effectively masking out any changes to the surface that are outside the current clip region Calling clip can only make the clip region smaller never larger But the current clip is part of the graphics state so temporary restriction of the clip region can be achieved by calling clip within save restore pair The only other means of increasing the size of the clip region is resetClip",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "clipPreserve",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Preserve",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:clipPreserve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a line segment to the path from the current point to the beginning of\n the current subpath, (the most recent point passed to \u003ccode\u003e\u003ca\u003emoveTo\u003c/a\u003e\u003c/code\u003e), and closes\n this subpath.\n\u003c/p\u003e\u003cp\u003eThe behavior of \u003ccode\u003e\u003ca\u003eclosePath\u003c/a\u003e\u003c/code\u003e is distinct from simply calling \u003ccode\u003e\u003ca\u003elineTo\u003c/a\u003e\u003c/code\u003e with the\n equivalent coordinate in the case of stroking. When a closed subpath is\n stroked, there are no caps on the ends of the subpath. Instead, their is a\n line join connecting the final and initial segments of the subpath.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "closePath",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#closePath",
          "type": "function"
        },
        "index": {
          "description": "Adds line segment to the path from the current point to the beginning of the current subpath the most recent point passed to moveTo and closes this subpath The behavior of closePath is distinct from simply calling lineTo with the equivalent coordinate in the case of stroking When closed subpath is stroked there are no caps on the ends of the subpath Instead their is line join connecting the final and initial segments of the subpath",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "closePath",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Path",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:closePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "copyPage",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#copyPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "copyPage",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Page",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:copyPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithImageSurface\u003c/a\u003e\u003c/code\u003e but creates a Surface that is managed by the\n Haskell memory manager rather than only being temporaily allocated. This\n is more flexible and allows you to create surfaces that persist, which\n can be very useful, for example to cache static elements in an animation.\n\u003c/p\u003e\u003cp\u003eHowever you should be careful because surfaces can be expensive resources\n and the Haskell memory manager cannot guarantee when it will release them.\n You can manually release the resources used by a surface with\n \u003ccode\u003e\u003ca\u003esurfaceFinish\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "createImageSurface",
          "package": "cairo",
          "signature": "Format-\u003e Int-\u003e Int-\u003e IO Surface",
          "type": "function"
        },
        "index": {
          "description": "Like withImageSurface but creates Surface that is managed by the Haskell memory manager rather than only being temporaily allocated This is more flexible and allows you to create surfaces that persist which can be very useful for example to cache static elements in an animation However you should be careful because surfaces can be expensive resources and the Haskell memory manager cannot guarantee when it will release them You can manually release the resources used by surface with surfaceFinish",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "createImageSurface",
          "normalized": "Format-\u003eInt-\u003eInt-\u003eIO Surface",
          "package": "cairo",
          "partial": "Image Surface",
          "signature": "Format-\u003eInt-\u003eInt-\u003eIO Surface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:createImageSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecreateImageSurface\u003c/a\u003e\u003c/code\u003e but creating a surface to target external\n data pointed to by \u003ccode\u003ePixelData\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "createImageSurfaceForData",
          "package": "cairo",
          "signature": "PixelData-\u003e Format-\u003e Int-\u003e Int-\u003e Int-\u003e IO Surface",
          "type": "function"
        },
        "index": {
          "description": "Like createImageSurface but creating surface to target external data pointed to by PixelData",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "createImageSurfaceForData",
          "normalized": "PixelData-\u003eFormat-\u003eInt-\u003eInt-\u003eInt-\u003eIO Surface",
          "package": "cairo",
          "partial": "Image Surface For Data",
          "signature": "PixelData-\u003eFormat-\u003eInt-\u003eInt-\u003eInt-\u003eIO Surface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:createImageSurfaceForData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithSimilarSurface\u003c/a\u003e\u003c/code\u003e but creates a Surface that is managed by the\n Haskell memory manager rather than only being temporaily allocated. This\n is more flexible and allows you to create surfaces that persist, which\n can be very useful, for example to cache static elements in an animation.\n\u003c/p\u003e\u003cp\u003eHowever you should be careful because surfaces can be expensive resources\n and the Haskell memory manager cannot guarantee when it will release them.\n You can manually release the resources used by a surface with\n \u003ccode\u003e\u003ca\u003esurfaceFinish\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "createSimilarSurface",
          "package": "cairo",
          "signature": "Surface-\u003e Content-\u003e Int-\u003e Int-\u003e IO Surface",
          "type": "function"
        },
        "index": {
          "description": "Like withSimilarSurface but creates Surface that is managed by the Haskell memory manager rather than only being temporaily allocated This is more flexible and allows you to create surfaces that persist which can be very useful for example to cache static elements in an animation However you should be careful because surfaces can be expensive resources and the Haskell memory manager cannot guarantee when it will release them You can manually release the resources used by surface with surfaceFinish",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "createSimilarSurface",
          "normalized": "Surface-\u003eContent-\u003eInt-\u003eInt-\u003eIO Surface",
          "package": "cairo",
          "partial": "Similar Surface",
          "signature": "Surface-\u003eContent-\u003eInt-\u003eInt-\u003eIO Surface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:createSimilarSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a cubic Bezier spline to the path from the current point to position\n (\u003ccode\u003ex3\u003c/code\u003e, \u003ccode\u003ey3\u003c/code\u003e) in user-space coordinates, using (\u003ccode\u003ex1\u003c/code\u003e, \u003ccode\u003ey1\u003c/code\u003e) and (\u003ccode\u003ex2\u003c/code\u003e, \u003ccode\u003ey2\u003c/code\u003e)\n as the control points. After this call the current point will be (\u003ccode\u003ex3\u003c/code\u003e, \u003ccode\u003ey3\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "curveTo",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Adds cubic Bezier spline to the path from the current point to position x3 y3 in user-space coordinates using x1 y1 and x2 y2 as the control points After this call the current point will be x3 y3",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "curveTo",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "To",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:curveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a coordinate from device space to user space by multiplying the\n given point by the inverse of the current transformation matrix (CTM).\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "deviceToUser",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Transform coordinate from device space to user space by multiplying the given point by the inverse of the current transformation matrix CTM",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "deviceToUser",
          "normalized": "Double-\u003eDouble-\u003eRender(Double,Double)",
          "package": "cairo",
          "partial": "To User",
          "signature": "Double-\u003eDouble-\u003eRender(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:deviceToUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a distance vector from device space to user space. This function\n is similar to \u003ccode\u003e\u003ca\u003edeviceToUser\u003c/a\u003e\u003c/code\u003e except that the translation components of the\n inverse CTM will be ignored when transforming \u003ccode\u003e(dx,dy)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "deviceToUserDistance",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Transform distance vector from device space to user space This function is similar to deviceToUser except that the translation components of the inverse CTM will be ignored when transforming dx dy",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "deviceToUserDistance",
          "normalized": "Double-\u003eDouble-\u003eRender(Double,Double)",
          "package": "cairo",
          "partial": "To User Distance",
          "signature": "Double-\u003eDouble-\u003eRender(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:deviceToUserDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drawing operator that fills the current path according to the current\n fill rule, (each sub-path is implicitly closed before being filled).\n After \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e, the current path will be cleared from the cairo context.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esetFillRule\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efillPreserve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fill",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#fill",
          "type": "function"
        },
        "index": {
          "description": "drawing operator that fills the current path according to the current fill rule each sub-path is implicitly closed before being filled After fill the current path will be cleared from the cairo context See setFillRule and fillPreserve",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fill",
          "normalized": "Render()",
          "package": "cairo",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "fillExtents",
          "package": "cairo",
          "signature": "Render (Double, Double, Double, Double)",
          "source": "src/Graphics-Rendering-Cairo.html#fillExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fillExtents",
          "normalized": "Render(Double,Double,Double,Double)",
          "package": "cairo",
          "partial": "Extents",
          "signature": "Render(Double,Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fillExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drawing operator that fills the current path according to the current\n fill rule, (each sub-path is implicitly closed before being filled).\n Unlike \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efillPreserve\u003c/a\u003e\u003c/code\u003e preserves the path within the cairo context.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esetFillRule\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fillPreserve",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#fillPreserve",
          "type": "function"
        },
        "index": {
          "description": "drawing operator that fills the current path according to the current fill rule each sub-path is implicitly closed before being filled Unlike fill fillPreserve preserves the path within the cairo context See setFillRule and fill",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fillPreserve",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Preserve",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fillPreserve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the font extents for the currently selected font.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtents",
          "package": "cairo",
          "signature": "Render FontExtents",
          "source": "src/Graphics-Rendering-Cairo.html#fontExtents",
          "type": "function"
        },
        "index": {
          "description": "Gets the font extents for the currently selected font",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtents",
          "package": "cairo",
          "partial": "Extents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsAscent",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsAscent",
          "package": "cairo",
          "partial": "Extents Ascent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontExtentsAscent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsDescent",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsDescent",
          "package": "cairo",
          "partial": "Extents Descent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontExtentsDescent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsHeight",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsHeight",
          "package": "cairo",
          "partial": "Extents Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontExtentsHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsMaxXadvance",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsMaxXadvance",
          "package": "cairo",
          "partial": "Extents Max Xadvance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontExtentsMaxXadvance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsMaxYadvance",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#FontExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontExtentsMaxYadvance",
          "package": "cairo",
          "partial": "Extents Max Yadvance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontExtentsMaxYadvance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocates a new font options object copying the option values from \u003ccode\u003eoriginal\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsCopy",
          "package": "cairo",
          "signature": "FontOptions-\u003e m FontOptions",
          "type": "function"
        },
        "index": {
          "description": "Allocates new font options object copying the option values from original",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsCopy",
          "normalized": "FontOptions-\u003ea FontOptions",
          "package": "cairo",
          "partial": "Options Copy",
          "signature": "FontOptions-\u003em FontOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocates a new font options object with all options initialized to default\n values.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsCreate",
          "package": "cairo",
          "signature": "m FontOptions",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsCreate",
          "type": "function"
        },
        "index": {
          "description": "Allocates new font options object with all options initialized to default values",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsCreate",
          "package": "cairo",
          "partial": "Options Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares two font options objects for equality.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsEqual",
          "package": "cairo",
          "signature": "FontOptions -\u003e FontOptions -\u003e m Bool",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsEqual",
          "type": "function"
        },
        "index": {
          "description": "Compares two font options objects for equality",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsEqual",
          "normalized": "FontOptions-\u003eFontOptions-\u003ea Bool",
          "package": "cairo",
          "partial": "Options Equal",
          "signature": "FontOptions-\u003eFontOptions-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the antialising mode for the font options object.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsGetAntialias",
          "package": "cairo",
          "signature": "FontOptions -\u003e m Antialias",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsGetAntialias",
          "type": "function"
        },
        "index": {
          "description": "Gets the antialising mode for the font options object",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsGetAntialias",
          "normalized": "FontOptions-\u003ea Antialias",
          "package": "cairo",
          "partial": "Options Get Antialias",
          "signature": "FontOptions-\u003em Antialias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsGetAntialias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the metrics hinting mode for the font options object. See the\n documentation for \u003ccode\u003e\u003ca\u003eHintMetrics\u003c/a\u003e\u003c/code\u003e for full details.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsGetHintMetrics",
          "package": "cairo",
          "signature": "FontOptions -\u003e m HintMetrics",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsGetHintMetrics",
          "type": "function"
        },
        "index": {
          "description": "Gets the metrics hinting mode for the font options object See the documentation for HintMetrics for full details",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsGetHintMetrics",
          "normalized": "FontOptions-\u003ea HintMetrics",
          "package": "cairo",
          "partial": "Options Get Hint Metrics",
          "signature": "FontOptions-\u003em HintMetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsGetHintMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the hint style for font outlines for the font options object.\n See the documentation for \u003ccode\u003e\u003ca\u003eHintStyle\u003c/a\u003e\u003c/code\u003e for full details.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsGetHintStyle",
          "package": "cairo",
          "signature": "FontOptions -\u003e m HintStyle",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsGetHintStyle",
          "type": "function"
        },
        "index": {
          "description": "Gets the hint style for font outlines for the font options object See the documentation for HintStyle for full details",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsGetHintStyle",
          "normalized": "FontOptions-\u003ea HintStyle",
          "package": "cairo",
          "partial": "Options Get Hint Style",
          "signature": "FontOptions-\u003em HintStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsGetHintStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the subpixel order for the font options object.\n See the documentation for \u003ccode\u003e\u003ca\u003eSubpixelOrder\u003c/a\u003e\u003c/code\u003e for full details.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsGetSubpixelOrder",
          "package": "cairo",
          "signature": "FontOptions -\u003e m SubpixelOrder",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsGetSubpixelOrder",
          "type": "function"
        },
        "index": {
          "description": "Gets the subpixel order for the font options object See the documentation for SubpixelOrder for full details",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsGetSubpixelOrder",
          "normalized": "FontOptions-\u003ea SubpixelOrder",
          "package": "cairo",
          "partial": "Options Get Subpixel Order",
          "signature": "FontOptions-\u003em SubpixelOrder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsGetSubpixelOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a hash for the font options object; this value will be useful when\n storing an object containing a \u003ccode\u003e\u003ca\u003eFontOptions\u003c/a\u003e\u003c/code\u003e in a hash table.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsHash",
          "package": "cairo",
          "signature": "FontOptions -\u003e m Int",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsHash",
          "type": "function"
        },
        "index": {
          "description": "Compute hash for the font options object this value will be useful when storing an object containing FontOptions in hash table",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsHash",
          "normalized": "FontOptions-\u003ea Int",
          "package": "cairo",
          "partial": "Options Hash",
          "signature": "FontOptions-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges non-default options from \u003ccode\u003eother\u003c/code\u003e into \u003ccode\u003eoptions\u003c/code\u003e, replacing existing\n values. This operation can be thought of as somewhat similar to compositing\n \u003ccode\u003eother\u003c/code\u003e onto \u003ccode\u003eoptions\u003c/code\u003e with the operation of \u003ccode\u003eOperationOver\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsMerge",
          "package": "cairo",
          "signature": "FontOptions-\u003e FontOptions-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Merges non-default options from other into options replacing existing values This operation can be thought of as somewhat similar to compositing other onto options with the operation of OperationOver",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsMerge",
          "normalized": "FontOptions-\u003eFontOptions-\u003ea()",
          "package": "cairo",
          "partial": "Options Merge",
          "signature": "FontOptions-\u003eFontOptions-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the antiliasing mode for the font options object. This specifies the\n type of antialiasing to do when rendering text.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsSetAntialias",
          "package": "cairo",
          "signature": "FontOptions -\u003e Antialias -\u003e m ()",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsSetAntialias",
          "type": "function"
        },
        "index": {
          "description": "Sets the antiliasing mode for the font options object This specifies the type of antialiasing to do when rendering text",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsSetAntialias",
          "normalized": "FontOptions-\u003eAntialias-\u003ea()",
          "package": "cairo",
          "partial": "Options Set Antialias",
          "signature": "FontOptions-\u003eAntialias-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsSetAntialias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the metrics hinting mode for the font options object. This controls\n whether metrics are quantized to integer values in device units. See the\n documentation for \u003ccode\u003e\u003ca\u003eHintMetrics\u003c/a\u003e\u003c/code\u003e for full details.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsSetHintMetrics",
          "package": "cairo",
          "signature": "FontOptions -\u003e HintMetrics -\u003e m ()",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsSetHintMetrics",
          "type": "function"
        },
        "index": {
          "description": "Sets the metrics hinting mode for the font options object This controls whether metrics are quantized to integer values in device units See the documentation for HintMetrics for full details",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsSetHintMetrics",
          "normalized": "FontOptions-\u003eHintMetrics-\u003ea()",
          "package": "cairo",
          "partial": "Options Set Hint Metrics",
          "signature": "FontOptions-\u003eHintMetrics-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsSetHintMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the hint style for font outlines for the font options object.\n This controls whether to fit font outlines to the pixel grid, and if so,\n whether to optimize for fidelity or contrast. See the documentation for\n \u003ccode\u003e\u003ca\u003eHintStyle\u003c/a\u003e\u003c/code\u003e for full details.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsSetHintStyle",
          "package": "cairo",
          "signature": "FontOptions -\u003e HintStyle -\u003e m ()",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsSetHintStyle",
          "type": "function"
        },
        "index": {
          "description": "Sets the hint style for font outlines for the font options object This controls whether to fit font outlines to the pixel grid and if so whether to optimize for fidelity or contrast See the documentation for HintStyle for full details",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsSetHintStyle",
          "normalized": "FontOptions-\u003eHintStyle-\u003ea()",
          "package": "cairo",
          "partial": "Options Set Hint Style",
          "signature": "FontOptions-\u003eHintStyle-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsSetHintStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the subpixel order for the font options object. The subpixel order\n specifies the order of color elements within each pixel on the display device\n when rendering with an antialiasing mode of \u003ccode\u003e\u003ca\u003eAntialiasSubpixel\u003c/a\u003e\u003c/code\u003e.\n See the documentation for \u003ccode\u003e\u003ca\u003eSubpixelOrder\u003c/a\u003e\u003c/code\u003e for full details.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsSetSubpixelOrder",
          "package": "cairo",
          "signature": "FontOptions -\u003e SubpixelOrder -\u003e m ()",
          "source": "src/Graphics-Rendering-Cairo.html#fontOptionsSetSubpixelOrder",
          "type": "function"
        },
        "index": {
          "description": "Sets the subpixel order for the font options object The subpixel order specifies the order of color elements within each pixel on the display device when rendering with an antialiasing mode of AntialiasSubpixel See the documentation for SubpixelOrder for full details",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "fontOptionsSetSubpixelOrder",
          "normalized": "FontOptions-\u003eSubpixelOrder-\u003ea()",
          "package": "cairo",
          "partial": "Options Set Subpixel Order",
          "signature": "FontOptions-\u003eSubpixelOrder-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:fontOptionsSetSubpixelOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function provides a stride value that will respect all alignment\n   requirements of the accelerated image-rendering code within cairo.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "formatStrideForWidth",
          "package": "cairo",
          "signature": "Format-\u003e Int-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "This function provides stride value that will respect all alignment requirements of the accelerated image-rendering code within cairo",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "formatStrideForWidth",
          "normalized": "Format-\u003eInt-\u003eInt",
          "package": "cairo",
          "partial": "Stride For Width",
          "signature": "Format-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:formatStrideForWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current point of the current path, which is conceptually the final\n point reached by the path so far.\n\u003c/p\u003e\u003cp\u003eThe current point is returned in the user-space coordinate system. If there\n is no defined current point then x and y will both be set to 0.0.\n\u003c/p\u003e\u003cp\u003eMost path construction functions alter the current point. See the following\n for details on how they affect the current point: \u003ccode\u003e\u003ca\u003enewPath\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emoveTo\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003elineTo\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecurveTo\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003earc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erelMoveTo\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erelLineTo\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erelCurveTo\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003earcNegative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etextPath\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003estrokeToPath\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getCurrentPoint",
          "package": "cairo",
          "signature": "Render (Double, Double)",
          "source": "src/Graphics-Rendering-Cairo.html#getCurrentPoint",
          "type": "function"
        },
        "index": {
          "description": "Gets the current point of the current path which is conceptually the final point reached by the path so far The current point is returned in the user-space coordinate system If there is no defined current point then and will both be set to Most path construction functions alter the current point See the following for details on how they affect the current point newPath moveTo lineTo curveTo arc relMoveTo relLineTo relCurveTo arcNegative textPath strokeToPath",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getCurrentPoint",
          "normalized": "Render(Double,Double)",
          "package": "cairo",
          "partial": "Current Point",
          "signature": "Render(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getCurrentPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current fill rule, as set by \u003ccode\u003esetFillrule\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getFillRule",
          "package": "cairo",
          "signature": "Render FillRule",
          "source": "src/Graphics-Rendering-Cairo.html#getFillRule",
          "type": "function"
        },
        "index": {
          "description": "Gets the current fill rule as set by setFillrule",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getFillRule",
          "package": "cairo",
          "partial": "Fill Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getFillRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current font matrix, as set by \u003ccode\u003e\u003ca\u003esetFontMatrix\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getFontMatrix",
          "package": "cairo",
          "signature": "Render Matrix",
          "source": "src/Graphics-Rendering-Cairo.html#getFontMatrix",
          "type": "function"
        },
        "index": {
          "description": "Gets the current font matrix as set by setFontMatrix",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getFontMatrix",
          "package": "cairo",
          "partial": "Font Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getFontMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current line cap style, as set by \u003ccode\u003e\u003ca\u003esetLineCap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getLineCap",
          "package": "cairo",
          "signature": "Render LineCap",
          "source": "src/Graphics-Rendering-Cairo.html#getLineCap",
          "type": "function"
        },
        "index": {
          "description": "Gets the current line cap style as set by setLineCap",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getLineCap",
          "package": "cairo",
          "partial": "Line Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getLineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current line join style, as set by \u003ccode\u003e\u003ca\u003esetLineJoin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getLineJoin",
          "package": "cairo",
          "signature": "Render LineJoin",
          "source": "src/Graphics-Rendering-Cairo.html#getLineJoin",
          "type": "function"
        },
        "index": {
          "description": "Gets the current line join style as set by setLineJoin",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getLineJoin",
          "package": "cairo",
          "partial": "Line Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getLineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current line width, as set by \u003ccode\u003e\u003ca\u003esetLineWidth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getLineWidth",
          "package": "cairo",
          "signature": "Render Double",
          "source": "src/Graphics-Rendering-Cairo.html#getLineWidth",
          "type": "function"
        },
        "index": {
          "description": "Gets the current line width as set by setLineWidth",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getLineWidth",
          "package": "cairo",
          "partial": "Line Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getLineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current transformation matrix, as set by \u003ccode\u003e\u003ca\u003esetMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getMatrix",
          "package": "cairo",
          "signature": "Render Matrix",
          "source": "src/Graphics-Rendering-Cairo.html#getMatrix",
          "type": "function"
        },
        "index": {
          "description": "Gets the current transformation matrix as set by setMatrix",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getMatrix",
          "package": "cairo",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current miter limit, as set by \u003ccode\u003e\u003ca\u003esetMiterLimit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getMiterLimit",
          "package": "cairo",
          "signature": "Render Double",
          "source": "src/Graphics-Rendering-Cairo.html#getMiterLimit",
          "type": "function"
        },
        "index": {
          "description": "Gets the current miter limit as set by setMiterLimit",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getMiterLimit",
          "package": "cairo",
          "partial": "Miter Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getMiterLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current compositing operator for a cairo context.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getOperator",
          "package": "cairo",
          "signature": "Render Operator",
          "source": "src/Graphics-Rendering-Cairo.html#getOperator",
          "type": "function"
        },
        "index": {
          "description": "Gets the current compositing operator for cairo context",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getOperator",
          "package": "cairo",
          "partial": "Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current source pattern.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getSource",
          "package": "cairo",
          "signature": "Render Pattern",
          "source": "src/Graphics-Rendering-Cairo.html#getSource",
          "type": "function"
        },
        "index": {
          "description": "Gets the current source pattern",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getSource",
          "package": "cairo",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current tolerance value, as set by \u003ccode\u003e\u003ca\u003esetTolerance\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "getTolerance",
          "package": "cairo",
          "signature": "Render Double",
          "source": "src/Graphics-Rendering-Cairo.html#getTolerance",
          "type": "function"
        },
        "index": {
          "description": "Gets the current tolerance value as set by setTolerance",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "getTolerance",
          "package": "cairo",
          "partial": "Tolerance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:getTolerance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "height",
          "package": "cairo",
          "signature": "Int",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RectangleInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "height",
          "package": "cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets the current transformation matrix (CTM) by setting it equal to the\n identity matrix. That is, the user-space and device-space axes will be\n aligned and one user-space unit will transform to one device-space unit.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "identityMatrix",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#identityMatrix",
          "type": "function"
        },
        "index": {
          "description": "Resets the current transformation matrix CTM by setting it equal to the identity matrix That is the user-space and device-space axes will be aligned and one user-space unit will transform to one device-space unit",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "identityMatrix",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Matrix",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:identityMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceCreateFromPNG",
          "package": "cairo",
          "signature": "FilePath -\u003e IO Surface",
          "source": "src/Graphics-Rendering-Cairo-Internal-Surfaces-PNG.html#imageSurfaceCreateFromPNG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceCreateFromPNG",
          "normalized": "FilePath-\u003eIO Surface",
          "package": "cairo",
          "partial": "Surface Create From PNG",
          "signature": "FilePath-\u003eIO Surface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:imageSurfaceCreateFromPNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a ByteString of the image data for a surface. In order to remain\n   safe the returned ByteString is a copy of the data. This is a little\n   slower than returning a pointer into the image surface object itself, but\n   much safer\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetData",
          "package": "cairo",
          "signature": "Surface -\u003e IO ByteString",
          "source": "src/Graphics-Rendering-Cairo.html#imageSurfaceGetData",
          "type": "function"
        },
        "index": {
          "description": "Return ByteString of the image data for surface In order to remain safe the returned ByteString is copy of the data This is little slower than returning pointer into the image surface object itself but much safer",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetData",
          "normalized": "Surface-\u003eIO ByteString",
          "package": "cairo",
          "partial": "Surface Get Data",
          "signature": "Surface-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:imageSurfaceGetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the format of the surface.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetFormat",
          "package": "cairo",
          "signature": "Surface -\u003e m Format",
          "source": "src/Graphics-Rendering-Cairo.html#imageSurfaceGetFormat",
          "type": "function"
        },
        "index": {
          "description": "Get the format of the surface",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetFormat",
          "normalized": "Surface-\u003ea Format",
          "package": "cairo",
          "partial": "Surface Get Format",
          "signature": "Surface-\u003em Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:imageSurfaceGetFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the height of the image surface in pixels.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetHeight",
          "package": "cairo",
          "signature": "Surface -\u003e m Int",
          "source": "src/Graphics-Rendering-Cairo.html#imageSurfaceGetHeight",
          "type": "function"
        },
        "index": {
          "description": "Get the height of the image surface in pixels",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetHeight",
          "normalized": "Surface-\u003ea Int",
          "package": "cairo",
          "partial": "Surface Get Height",
          "signature": "Surface-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:imageSurfaceGetHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the internal array of raw image data.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Image data in an image surface is stored in memory in uncompressed,\n   packed format. Rows in the image are stored top to bottom, and in each\n   row pixels are stored from left to right. There may be padding at the end\n   of a row. The value returned by \u003ccode\u003e\u003ca\u003eimageSurfaceGetStride\u003c/a\u003e\u003c/code\u003e indicates the\n   number of bytes between rows.\n\u003c/li\u003e\u003cli\u003e The returned array is a flat representation of a three dimensional array:\n   x-coordiante, y-coordinate and several channels for each color. The\n   format depends on the \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e of the surface:\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFormatARGB32\u003c/a\u003e\u003c/code\u003e: each pixel is 32 bits with alpha in the upper 8 bits,\n    followed by 8 bits for red, green and blue. Pre-multiplied alpha is used.\n    (That is, 50% transparent red is 0x80800000, not 0x80ff0000.)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFormatRGB24\u003c/a\u003e\u003c/code\u003e: each pixel is 32 bits with the upper 8 bits being unused,\n    followed by 8 bits for red, green and blue.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFormatA8\u003c/a\u003e\u003c/code\u003e: each pixel is 8 bits holding an alpha value\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFormatA1\u003c/a\u003e\u003c/code\u003e: each pixel is one bit where pixels are packed into 32 bit\n   quantities. The ordering depends on the endianes of the platform. On a\n   big-endian machine, the first pixel is in the uppermost bit, on a\n   little-endian machine the first pixel is in the least-significant bit.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e To read or write a specific pixel (and assuming \u003ccode\u003e\u003ca\u003eFormatARGB32\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eFormatRGB24\u003c/a\u003e\u003c/code\u003e), use the formula: \u003ccode\u003ep = y * (rowstride \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e 4) + x\u003c/code\u003e for the\n   pixel and force the array to have 32-bit words or integers.\n\u003c/li\u003e\u003cli\u003e Calling this function without explicitly giving it a type will often lead\n   to a compiler error since the type parameter \u003ccode\u003ee\u003c/code\u003e is underspecified. If\n   this happens the function can be explicitly typed:\n   \u003ccode\u003esurData \u003c- (imageSurfaceGetPixels pb :: IO (SurfaceData Int Word32))\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e If modifying an image through Haskell's array interface is not fast\n   enough, it is possible to use \u003ccode\u003eunsafeRead\u003c/code\u003e and \u003ccode\u003eunsafeWrite\u003c/code\u003e which have\n   the same type signatures as \u003ccode\u003ereadArray\u003c/code\u003e and \u003ccode\u003ewriteArray\u003c/code\u003e. Note that these\n   are internal functions that might change with GHC.\n\u003c/li\u003e\u003cli\u003e After each write access to the array, you need to inform Cairo\n   about the area that has changed using \u003ccode\u003e\u003ca\u003esurfaceMarkDirty\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The function will return an error if the surface is not an image\n   surface or if \u003ccode\u003e\u003ca\u003esurfaceFinish\u003c/a\u003e\u003c/code\u003e has been called on the surface.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetPixels",
          "package": "cairo",
          "signature": "Surface -\u003e IO (SurfaceData Int e)",
          "source": "src/Graphics-Rendering-Cairo.html#imageSurfaceGetPixels",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the internal array of raw image data Image data in an image surface is stored in memory in uncompressed packed format Rows in the image are stored top to bottom and in each row pixels are stored from left to right There may be padding at the end of row The value returned by imageSurfaceGetStride indicates the number of bytes between rows The returned array is flat representation of three dimensional array x-coordiante y-coordinate and several channels for each color The format depends on the Format of the surface FormatARGB32 each pixel is bits with alpha in the upper bits followed by bits for red green and blue Pre-multiplied alpha is used That is transparent red is x80800000 not x80ff0000 FormatRGB24 each pixel is bits with the upper bits being unused followed by bits for red green and blue FormatA8 each pixel is bits holding an alpha value FormatA1 each pixel is one bit where pixels are packed into bit quantities The ordering depends on the endianes of the platform On big-endian machine the first pixel is in the uppermost bit on little-endian machine the first pixel is in the least-significant bit To read or write specific pixel and assuming FormatARGB32 or FormatRGB24 use the formula rowstride div for the pixel and force the array to have bit words or integers Calling this function without explicitly giving it type will often lead to compiler error since the type parameter is underspecified If this happens the function can be explicitly typed surData imageSurfaceGetPixels pb IO SurfaceData Int Word32 If modifying an image through Haskell array interface is not fast enough it is possible to use unsafeRead and unsafeWrite which have the same type signatures as readArray and writeArray Note that these are internal functions that might change with GHC After each write access to the array you need to inform Cairo about the area that has changed using surfaceMarkDirty The function will return an error if the surface is not an image surface or if surfaceFinish has been called on the surface",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetPixels",
          "normalized": "Surface-\u003eIO(SurfaceData Int a)",
          "package": "cairo",
          "partial": "Surface Get Pixels",
          "signature": "Surface-\u003eIO(SurfaceData Int e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:imageSurfaceGetPixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of bytes from the start of one row to the start of the\n   next. If the image data contains no padding, then this is equal to\n   the pixel depth * the width.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetStride",
          "package": "cairo",
          "signature": "Surface -\u003e m Int",
          "source": "src/Graphics-Rendering-Cairo.html#imageSurfaceGetStride",
          "type": "function"
        },
        "index": {
          "description": "Get the number of bytes from the start of one row to the start of the next If the image data contains no padding then this is equal to the pixel depth the width",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetStride",
          "normalized": "Surface-\u003ea Int",
          "package": "cairo",
          "partial": "Surface Get Stride",
          "signature": "Surface-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:imageSurfaceGetStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the width of the image surface in pixels.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetWidth",
          "package": "cairo",
          "signature": "Surface -\u003e m Int",
          "source": "src/Graphics-Rendering-Cairo.html#imageSurfaceGetWidth",
          "type": "function"
        },
        "index": {
          "description": "Get the width of the image surface in pixels",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "imageSurfaceGetWidth",
          "normalized": "Surface-\u003ea Int",
          "package": "cairo",
          "partial": "Surface Get Width",
          "signature": "Surface-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:imageSurfaceGetWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "inFill",
          "package": "cairo",
          "signature": "Double -\u003e Double -\u003e Render Bool",
          "source": "src/Graphics-Rendering-Cairo.html#inFill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "inFill",
          "normalized": "Double-\u003eDouble-\u003eRender Bool",
          "package": "cairo",
          "partial": "Fill",
          "signature": "Double-\u003eDouble-\u003eRender Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:inFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "inStroke",
          "package": "cairo",
          "signature": "Double -\u003e Double -\u003e Render Bool",
          "source": "src/Graphics-Rendering-Cairo.html#inStroke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "inStroke",
          "normalized": "Double-\u003eDouble-\u003eRender Bool",
          "package": "cairo",
          "partial": "Stroke",
          "signature": "Double-\u003eDouble-\u003eRender Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:inStroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "liftIO",
          "package": "cairo",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "cairo",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a line to the path from the current point to position (\u003ccode\u003ex\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e) in\n user-space coordinates. After this call the current point will be (\u003ccode\u003ex\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "lineTo",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Adds line to the path from the current point to position in user-space coordinates After this call the current point will be",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "lineTo",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "To",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:lineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drawing operator that paints the current source using the alpha channel\n of pattern as a mask. (Opaque areas of mask are painted with the source,\n transparent areas are not painted.)\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "mask",
          "package": "cairo",
          "signature": "Pattern-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "drawing operator that paints the current source using the alpha channel of pattern as mask Opaque areas of mask are painted with the source transparent areas are not painted",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "mask",
          "normalized": "Pattern-\u003eRender()",
          "package": "cairo",
          "signature": "Pattern-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drawing operator that paints the current source using the alpha channel\n of surface as a mask. (Opaque areas of surface are painted with the source,\n transparent areas are not painted.)\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "maskSurface",
          "package": "cairo",
          "signature": "Surface-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "drawing operator that paints the current source using the alpha channel of surface as mask Opaque areas of surface are painted with the source transparent areas are not painted",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "maskSurface",
          "normalized": "Surface-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "Surface",
          "signature": "Surface-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:maskSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current subpath is not empty, begin a new subpath. After this call\n the current point will be (\u003ccode\u003ex\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "moveTo",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "If the current subpath is not empty begin new subpath After this call the current point will be",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "moveTo",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "To",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:moveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears the current path. After this call there will be no current point.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "newPath",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#newPath",
          "type": "function"
        },
        "index": {
          "description": "Clears the current path After this call there will be no current point",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "newPath",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Path",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:newPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drawing operator that paints the current source everywhere within the\n current clip region.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "paint",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#paint",
          "type": "function"
        },
        "index": {
          "description": "drawing operator that paints the current source everywhere within the current clip region",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "paint",
          "normalized": "Render()",
          "package": "cairo",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:paint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drawing operator that paints the current source everywhere within the\n current clip region using a mask of constant alpha value alpha. The effect\n is similar to \u003ccode\u003e\u003ca\u003epaint\u003c/a\u003e\u003c/code\u003e, but the drawing is faded out using the alpha value.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "paintWithAlpha",
          "package": "cairo",
          "signature": "Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "drawing operator that paints the current source everywhere within the current clip region using mask of constant alpha value alpha The effect is similar to paint but the drawing is faded out using the alpha value",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "paintWithAlpha",
          "normalized": "Double-\u003eRender()",
          "package": "cairo",
          "partial": "With Alpha",
          "signature": "Double-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:paintWithAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an opaque color stop to a gradient pattern. The offset specifies the\n location along the gradient's control vector. For example, a linear gradient's\n control vector is from (x0,y0) to (x1,y1) while a radial gradient's control\n vector is from any point on the start circle to the corresponding point on\n the end circle.\n\u003c/p\u003e\u003cp\u003eThe color is specified in the same way as in \u003ccode\u003e\u003ca\u003esetSourceRGB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: If the pattern is not a gradient pattern, (eg. a linear or radial\n pattern), then the pattern will be put into an error status with a status of\n \u003ccode\u003e\u003ca\u003eStatusPatternTypeMismatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternAddColorStopRGB",
          "package": "cairo",
          "signature": "Pattern-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Adds an opaque color stop to gradient pattern The offset specifies the location along the gradient control vector For example linear gradient control vector is from x0 y0 to x1 y1 while radial gradient control vector is from any point on the start circle to the corresponding point on the end circle The color is specified in the same way as in setSourceRGB Note If the pattern is not gradient pattern eg linear or radial pattern then the pattern will be put into an error status with status of StatusPatternTypeMismatch",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternAddColorStopRGB",
          "normalized": "Pattern-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003ea()",
          "package": "cairo",
          "partial": "Add Color Stop RGB",
          "signature": "Pattern-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:patternAddColorStopRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a translucent color stop to a gradient pattern. The offset specifies\n the location along the gradient's control vector. For example, a linear\n gradient's control vector is from (x0,y0) to (x1,y1) while a radial gradient's\n control vector is from any point on the start circle to the corresponding\n point on the end circle.\n\u003c/p\u003e\u003cp\u003eThe color is specified in the same way as in setSourceRGBA.\n\u003c/p\u003e\u003cp\u003eNote: If the pattern is not a gradient pattern, (eg. a linear or radial\n pattern), then the pattern will be put into an error status with a status of\n \u003ccode\u003e\u003ca\u003eStatusPatternTypeMismatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternAddColorStopRGBA",
          "package": "cairo",
          "signature": "Pattern-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Adds translucent color stop to gradient pattern The offset specifies the location along the gradient control vector For example linear gradient control vector is from x0 y0 to x1 y1 while radial gradient control vector is from any point on the start circle to the corresponding point on the end circle The color is specified in the same way as in setSourceRGBA Note If the pattern is not gradient pattern eg linear or radial pattern then the pattern will be put into an error status with status of StatusPatternTypeMismatch",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternAddColorStopRGBA",
          "normalized": "Pattern-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003ea()",
          "package": "cairo",
          "partial": "Add Color Stop RGBA",
          "signature": "Pattern-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:patternAddColorStopRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "patternGetExtend",
          "package": "cairo",
          "signature": "Pattern-\u003e m Extend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternGetExtend",
          "normalized": "Pattern-\u003ea Extend",
          "package": "cairo",
          "partial": "Get Extend",
          "signature": "Pattern-\u003em Extend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:patternGetExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "patternGetFilter",
          "package": "cairo",
          "signature": "Pattern-\u003e m Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternGetFilter",
          "normalized": "Pattern-\u003ea Filter",
          "package": "cairo",
          "partial": "Get Filter",
          "signature": "Pattern-\u003em Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:patternGetFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the pattern's transformation matrix.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternGetMatrix",
          "package": "cairo",
          "signature": "Pattern-\u003e m Matrix",
          "type": "function"
        },
        "index": {
          "description": "Get the pattern transformation matrix",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternGetMatrix",
          "normalized": "Pattern-\u003ea Matrix",
          "package": "cairo",
          "partial": "Get Matrix",
          "signature": "Pattern-\u003em Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:patternGetMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "patternSetExtend",
          "package": "cairo",
          "signature": "Pattern-\u003e Extend-\u003e m ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternSetExtend",
          "normalized": "Pattern-\u003eExtend-\u003ea()",
          "package": "cairo",
          "partial": "Set Extend",
          "signature": "Pattern-\u003eExtend-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:patternSetExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "patternSetFilter",
          "package": "cairo",
          "signature": "Pattern-\u003e Filter-\u003e m ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternSetFilter",
          "normalized": "Pattern-\u003eFilter-\u003ea()",
          "package": "cairo",
          "partial": "Set Filter",
          "signature": "Pattern-\u003eFilter-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:patternSetFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the pattern's transformation matrix to matrix. This matrix is a\n transformation from user space to pattern space.\n\u003c/p\u003e\u003cp\u003eWhen a pattern is first created it always has the identity matrix for its\n transformation matrix, which means that pattern space is initially identical\n to user space.\n\u003c/p\u003e\u003cp\u003eImportant: Please note that the direction of this transformation matrix is\n from user space to pattern space. This means that if you imagine the flow\n from a pattern to user space (and on to device space), then coordinates in\n that flow will be transformed by the inverse of the pattern matrix.\n\u003c/p\u003e\u003cp\u003eAlso, please note the discussion of the user-space locking semantics of \u003ccode\u003e\u003ca\u003esetSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternSetMatrix",
          "package": "cairo",
          "signature": "Pattern-\u003e Matrix-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the pattern transformation matrix to matrix This matrix is transformation from user space to pattern space When pattern is first created it always has the identity matrix for its transformation matrix which means that pattern space is initially identical to user space Important Please note that the direction of this transformation matrix is from user space to pattern space This means that if you imagine the flow from pattern to user space and on to device space then coordinates in that flow will be transformed by the inverse of the pattern matrix Also please note the discussion of the user-space locking semantics of setSource",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "patternSetMatrix",
          "normalized": "Pattern-\u003eMatrix-\u003ea()",
          "package": "cairo",
          "partial": "Set Matrix",
          "signature": "Pattern-\u003eMatrix-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:patternSetMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the size of a PDF surface for the current (and\n subsequent) pages.\n\u003c/p\u003e\u003cp\u003eThis function should only be called before any drawing operations\n have been performed on the current page. The simplest way to do\n this is to call this function immediately after creating the\n surface or immediately after completing a page with either\n \u003ccode\u003e\u003ca\u003eshowPage\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecopyPage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "pdfSurfaceSetSize",
          "package": "cairo",
          "signature": "Surface -\u003e Double -\u003e Double -\u003e m ()",
          "source": "src/Graphics-Rendering-Cairo.html#pdfSurfaceSetSize",
          "type": "function"
        },
        "index": {
          "description": "Changes the size of PDF surface for the current and subsequent pages This function should only be called before any drawing operations have been performed on the current page The simplest way to do this is to call this function immediately after creating the surface or immediately after completing page with either showPage or copyPage",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "pdfSurfaceSetSize",
          "normalized": "Surface-\u003eDouble-\u003eDouble-\u003ea()",
          "package": "cairo",
          "partial": "Surface Set Size",
          "signature": "Surface-\u003eDouble-\u003eDouble-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:pdfSurfaceSetSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003ewithGroupPattern setSource\u003c/code\u003e, but more convenient.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "popGroupToSource",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#popGroupToSource",
          "type": "function"
        },
        "index": {
          "description": "Like withGroupPattern setSource but more convenient",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "popGroupToSource",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Group To Source",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:popGroupToSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the size of a PostScript surface for the current (and\n subsequent) pages.\n\u003c/p\u003e\u003cp\u003eThis function should only be called before any drawing operations\n have been performed on the current page. The simplest way to do\n this is to call this function immediately after creating the\n surface or immediately after completing a page with either\n \u003ccode\u003e\u003ca\u003eshowPage\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecopyPage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "psSurfaceSetSize",
          "package": "cairo",
          "signature": "Surface -\u003e Double -\u003e Double -\u003e m ()",
          "source": "src/Graphics-Rendering-Cairo.html#psSurfaceSetSize",
          "type": "function"
        },
        "index": {
          "description": "Changes the size of PostScript surface for the current and subsequent pages This function should only be called before any drawing operations have been performed on the current page The simplest way to do this is to call this function immediately after creating the surface or immediately after completing page with either showPage or copyPage",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "psSurfaceSetSize",
          "normalized": "Surface-\u003eDouble-\u003eDouble-\u003ea()",
          "package": "cairo",
          "partial": "Surface Set Size",
          "signature": "Surface-\u003eDouble-\u003eDouble-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:psSurfaceSetSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003epushGroupWithContent ContentColorAlpha\u003c/code\u003e, but more convenient.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "pushGroup",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#pushGroup",
          "type": "function"
        },
        "index": {
          "description": "Like pushGroupWithContent ContentColorAlpha but more convenient",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "pushGroup",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Group",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:pushGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily redirects drawing to an intermediate surface known as a group.\n The redirection lasts until the group is completed by a call to\n \u003ccode\u003e\u003ca\u003ewithGroupPattern\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003epopGroupToSource\u003c/a\u003e\u003c/code\u003e. These calls provide the result of\n any drawing to the group as a pattern (either as an explicit object, or set\n as the source pattern).  This group functionality can be convenient for\n performing intermediate compositing. One common use of a group is to render\n objects as opaque within the group (so that they occlude each other), and\n then blend the result with translucence onto the destination.\n\u003c/p\u003e\u003cp\u003eGroups can be nested arbitrarily deeply by making balanced calls to\n \u003ccode\u003e\u003ca\u003epushGroupWithContent\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewithGroupPattern\u003c/a\u003e\u003c/code\u003e. As a side effect,\n \u003ccode\u003e\u003ca\u003epushGroupWithContent\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewithGroupPattern\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e,\n so that any changes to the graphics state will not be visible outside the\n group.\n\u003c/p\u003e\u003cp\u003eAs an example, here is how one might fill and stroke a path with\n translucence, but without any portion of the fill being visible under the\n stroke:\n\u003c/p\u003e\u003cpre\u003e pushGroup\n setSource fillPattern\n fillPreserve\n setSource strokePattern\n stroke\n popGroupToSource\n paintWithAlpha alpha\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "pushGroupWithContent",
          "package": "cairo",
          "signature": "Content -\u003e Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#pushGroupWithContent",
          "type": "function"
        },
        "index": {
          "description": "Temporarily redirects drawing to an intermediate surface known as group The redirection lasts until the group is completed by call to withGroupPattern or popGroupToSource These calls provide the result of any drawing to the group as pattern either as an explicit object or set as the source pattern This group functionality can be convenient for performing intermediate compositing One common use of group is to render objects as opaque within the group so that they occlude each other and then blend the result with translucence onto the destination Groups can be nested arbitrarily deeply by making balanced calls to pushGroupWithContent and withGroupPattern As side effect pushGroupWithContent calls save and withGroupPattern calls restore so that any changes to the graphics state will not be visible outside the group As an example here is how one might fill and stroke path with translucence but without any portion of the fill being visible under the stroke pushGroup setSource fillPattern fillPreserve setSource strokePattern stroke popGroupToSource paintWithAlpha alpha",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "pushGroupWithContent",
          "normalized": "Content-\u003eRender()",
          "package": "cairo",
          "partial": "Group With Content",
          "signature": "Content-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:pushGroupWithContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a closed-subpath rectangle of the given size to the current path at\n position (\u003ccode\u003ex\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e) in user-space coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "rectangle",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Adds closed-subpath rectangle of the given size to the current path at position in user-space coordinates",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "rectangle",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether (\u003ccode\u003ex\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e) is contained in \u003ccode\u003eregion\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionContainsPoint",
          "package": "cairo",
          "signature": "Region-\u003e Int-\u003e Int-\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks whether is contained in region",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionContainsPoint",
          "normalized": "Region-\u003eInt-\u003eInt-\u003ea Bool",
          "package": "cairo",
          "partial": "Contains Point",
          "signature": "Region-\u003eInt-\u003eInt-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionContainsPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether \u003ccode\u003erectangle\u003c/code\u003e is inside, outside or partially contained in \u003ccode\u003eregion\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionContainsRectangle",
          "package": "cairo",
          "signature": "Region-\u003e RectangleInt-\u003e m RegionOverlap",
          "type": "function"
        },
        "index": {
          "description": "Checks whether rectangle is inside outside or partially contained in region",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionContainsRectangle",
          "normalized": "Region-\u003eRectangleInt-\u003ea RegionOverlap",
          "package": "cairo",
          "partial": "Contains Rectangle",
          "signature": "Region-\u003eRectangleInt-\u003em RegionOverlap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionContainsRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocates a new region object copying the area from \u003ccode\u003eoriginal\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionCopy",
          "package": "cairo",
          "signature": "Region-\u003e m Region",
          "type": "function"
        },
        "index": {
          "description": "Allocates new region object copying the area from original",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionCopy",
          "normalized": "Region-\u003ea Region",
          "package": "cairo",
          "partial": "Copy",
          "signature": "Region-\u003em Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocates a new empty region object.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionCreate",
          "package": "cairo",
          "signature": "m Region",
          "source": "src/Graphics-Rendering-Cairo.html#regionCreate",
          "type": "function"
        },
        "index": {
          "description": "Allocates new empty region object",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionCreate",
          "package": "cairo",
          "partial": "Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocates a new region object containing \u003ccode\u003erectangle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionCreateRectangle",
          "package": "cairo",
          "signature": "RectangleInt-\u003e m Region",
          "type": "function"
        },
        "index": {
          "description": "Allocates new region object containing rectangle",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionCreateRectangle",
          "normalized": "RectangleInt-\u003ea Region",
          "package": "cairo",
          "partial": "Create Rectangle",
          "signature": "RectangleInt-\u003em Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionCreateRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocates a new region object containing the union of all given \u003ccode\u003erects\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionCreateRectangles",
          "package": "cairo",
          "signature": "[RectangleInt]-\u003e m Region",
          "type": "function"
        },
        "index": {
          "description": "Allocates new region object containing the union of all given rects",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionCreateRectangles",
          "normalized": "[RectangleInt]-\u003ea Region",
          "package": "cairo",
          "partial": "Create Rectangles",
          "signature": "[RectangleInt]-\u003em Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionCreateRectangles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares whether \u003ccode\u003eregion_a\u003c/code\u003e is equivalent to \u003ccode\u003eregion_b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionEqual",
          "package": "cairo",
          "signature": "Region-\u003e Region-\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Compares whether region is equivalent to region",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionEqual",
          "normalized": "Region-\u003eRegion-\u003ea Bool",
          "package": "cairo",
          "partial": "Equal",
          "signature": "Region-\u003eRegion-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the bounding rectangle of \u003ccode\u003eregion\u003c/code\u003e as a RectanglInt.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionGetExtents",
          "package": "cairo",
          "signature": "Region-\u003e m RectangleInt",
          "type": "function"
        },
        "index": {
          "description": "Gets the bounding rectangle of region as RectanglInt",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionGetExtents",
          "normalized": "Region-\u003ea RectangleInt",
          "package": "cairo",
          "partial": "Get Extents",
          "signature": "Region-\u003em RectangleInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionGetExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the \u003ccode\u003enth\u003c/code\u003e rectangle from the \u003ccode\u003eregion\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionGetRectangle",
          "package": "cairo",
          "signature": "Region-\u003e Int-\u003e m RectangleInt",
          "type": "function"
        },
        "index": {
          "description": "Gets the nth rectangle from the region",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionGetRectangle",
          "normalized": "Region-\u003eInt-\u003ea RectangleInt",
          "package": "cairo",
          "partial": "Get Rectangle",
          "signature": "Region-\u003eInt-\u003em RectangleInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionGetRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the intersection of \u003ccode\u003edst\u003c/code\u003e with \u003ccode\u003eother\u003c/code\u003e and places the result in \u003ccode\u003edst\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionIntersect",
          "package": "cairo",
          "signature": "Region-\u003e Region-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Computes the intersection of dst with other and places the result in dst",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionIntersect",
          "normalized": "Region-\u003eRegion-\u003ea()",
          "package": "cairo",
          "partial": "Intersect",
          "signature": "Region-\u003eRegion-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the intersection of \u003ccode\u003edst\u003c/code\u003e with \u003ccode\u003erectangle\u003c/code\u003e and places the result in \u003ccode\u003edst\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionIntersectRectangle",
          "package": "cairo",
          "signature": "Region-\u003e RectangleInt-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Computes the intersection of dst with rectangle and places the result in dst",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionIntersectRectangle",
          "normalized": "Region-\u003eRectangleInt-\u003ea()",
          "package": "cairo",
          "partial": "Intersect Rectangle",
          "signature": "Region-\u003eRectangleInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionIntersectRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether \u003ccode\u003eregion\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionIsEmpty",
          "package": "cairo",
          "signature": "Region-\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks whether region is empty",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionIsEmpty",
          "normalized": "Region-\u003ea Bool",
          "package": "cairo",
          "partial": "Is Empty",
          "signature": "Region-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionIsEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of rectangles contained in \u003ccode\u003eregion\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionNumRectangles",
          "package": "cairo",
          "signature": "Region-\u003e m Int",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of rectangles contained in region",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionNumRectangles",
          "normalized": "Region-\u003ea Int",
          "package": "cairo",
          "partial": "Num Rectangles",
          "signature": "Region-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionNumRectangles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtracts \u003ccode\u003eother\u003c/code\u003e from \u003ccode\u003edst\u003c/code\u003e and places the result in \u003ccode\u003edst\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionSubtract",
          "package": "cairo",
          "signature": "Region-\u003e Region-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Subtracts other from dst and places the result in dst",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionSubtract",
          "normalized": "Region-\u003eRegion-\u003ea()",
          "package": "cairo",
          "partial": "Subtract",
          "signature": "Region-\u003eRegion-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionSubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtracts \u003ccode\u003erectangle\u003c/code\u003e from \u003ccode\u003edst\u003c/code\u003e and places the result in \u003ccode\u003edst\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionSubtractRectangle",
          "package": "cairo",
          "signature": "Region-\u003e RectangleInt-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Subtracts rectangle from dst and places the result in dst",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionSubtractRectangle",
          "normalized": "Region-\u003eRectangleInt-\u003ea()",
          "package": "cairo",
          "partial": "Subtract Rectangle",
          "signature": "Region-\u003eRectangleInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionSubtractRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates \u003ccode\u003eregion\u003c/code\u003e by (\u003ccode\u003edx\u003c/code\u003e, \u003ccode\u003edy\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionTranslate",
          "package": "cairo",
          "signature": "Region-\u003e Int-\u003e Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Translates region by dx dy",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionTranslate",
          "normalized": "Region-\u003eInt-\u003eInt-\u003ea()",
          "package": "cairo",
          "partial": "Translate",
          "signature": "Region-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionTranslate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the union of \u003ccode\u003edst\u003c/code\u003e with \u003ccode\u003eother\u003c/code\u003e and places the result in \u003ccode\u003edst\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionUnion",
          "package": "cairo",
          "signature": "Region-\u003e Region-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Computes the union of dst with other and places the result in dst",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionUnion",
          "normalized": "Region-\u003eRegion-\u003ea()",
          "package": "cairo",
          "partial": "Union",
          "signature": "Region-\u003eRegion-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the union of \u003ccode\u003edst\u003c/code\u003e with \u003ccode\u003erectangle\u003c/code\u003e and places the result in \u003ccode\u003edst\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionUnionRectangle",
          "package": "cairo",
          "signature": "Region-\u003e RectangleInt-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Computes the union of dst with rectangle and places the result in dst",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionUnionRectangle",
          "normalized": "Region-\u003eRectangleInt-\u003ea()",
          "package": "cairo",
          "partial": "Union Rectangle",
          "signature": "Region-\u003eRectangleInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionUnionRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the exclusive difference of \u003ccode\u003edst\u003c/code\u003e with \u003ccode\u003eother\u003c/code\u003e and places the result in \u003ccode\u003edst\u003c/code\u003e.\n That is, \u003ccode\u003edst\u003c/code\u003e will be set to contain all areas that are either in \u003ccode\u003edst\u003c/code\u003e or in \u003ccode\u003eother\u003c/code\u003e, but not in both.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionXor",
          "package": "cairo",
          "signature": "Region-\u003e Region-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Computes the exclusive difference of dst with other and places the result in dst That is dst will be set to contain all areas that are either in dst or in other but not in both",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionXor",
          "normalized": "Region-\u003eRegion-\u003ea()",
          "package": "cairo",
          "partial": "Xor",
          "signature": "Region-\u003eRegion-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the exclusive difference of \u003ccode\u003edst\u003c/code\u003e with \u003ccode\u003erectangle\u003c/code\u003e and places the result in \u003ccode\u003edst\u003c/code\u003e.\n That is, \u003ccode\u003edst\u003c/code\u003e will be set to contain all areas that are either in \u003ccode\u003edst\u003c/code\u003e or in \u003ccode\u003erectangle\u003c/code\u003e, but not in both\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionXorRectangle",
          "package": "cairo",
          "signature": "Region-\u003e RectangleInt-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Computes the exclusive difference of dst with rectangle and places the result in dst That is dst will be set to contain all areas that are either in dst or in rectangle but not in both",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "regionXorRectangle",
          "normalized": "Region-\u003eRectangleInt-\u003ea()",
          "package": "cairo",
          "partial": "Xor Rectangle",
          "signature": "Region-\u003eRectangleInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:regionXorRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative-coordinate version of \u003ccode\u003e\u003ca\u003ecurveTo\u003c/a\u003e\u003c/code\u003e. All offsets are relative to the\n current point. Adds a cubic Bezier spline to the path from the current point\n to a point offset from the current point by (\u003ccode\u003edx3\u003c/code\u003e, \u003ccode\u003edy3\u003c/code\u003e), using points\n offset by (\u003ccode\u003edx1\u003c/code\u003e, \u003ccode\u003edy1\u003c/code\u003e) and (\u003ccode\u003edx2\u003c/code\u003e, \u003ccode\u003edy2\u003c/code\u003e) as the control points. After this\n call the current point will be offset by (\u003ccode\u003edx3\u003c/code\u003e, \u003ccode\u003edy3\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eGiven a current point of (x, y), relCurveTo \u003ccode\u003edx1\u003c/code\u003e \u003ccode\u003edy1\u003c/code\u003e \u003ccode\u003edx2\u003c/code\u003e \u003ccode\u003edy2\u003c/code\u003e \u003ccode\u003edx3\u003c/code\u003e \u003ccode\u003edy3\u003c/code\u003e\n is logically equivalent to curveTo (x + \u003ccode\u003edx1\u003c/code\u003e) (y + \u003ccode\u003edy1\u003c/code\u003e) (x + \u003ccode\u003edx2\u003c/code\u003e) (y + \u003ccode\u003edy2\u003c/code\u003e) (x + \u003ccode\u003edx3\u003c/code\u003e) (y + \u003ccode\u003edy3\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "relCurveTo",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Relative-coordinate version of curveTo All offsets are relative to the current point Adds cubic Bezier spline to the path from the current point to point offset from the current point by dx3 dy3 using points offset by dx1 dy1 and dx2 dy2 as the control points After this call the current point will be offset by dx3 dy3 Given current point of relCurveTo dx1 dy1 dx2 dy2 dx3 dy3 is logically equivalent to curveTo dx1 dy1 dx2 dy2 dx3 dy3",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "relCurveTo",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "Curve To",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:relCurveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative-coordinate version of \u003ccode\u003e\u003ca\u003elineTo\u003c/a\u003e\u003c/code\u003e. Adds a line to the path from the\n current point to a point that is offset from the current point by (\u003ccode\u003edx\u003c/code\u003e, \u003ccode\u003edy\u003c/code\u003e)\n in user space. After this call the current point will be offset by (\u003ccode\u003edx\u003c/code\u003e, \u003ccode\u003edy\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eGiven a current point of (x, y), relLineTo \u003ccode\u003edx\u003c/code\u003e \u003ccode\u003edy\u003c/code\u003e is logically equivalent\n to lineTo (x + \u003ccode\u003edx\u003c/code\u003e) (y + \u003ccode\u003edy\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "relLineTo",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Relative-coordinate version of lineTo Adds line to the path from the current point to point that is offset from the current point by dx dy in user space After this call the current point will be offset by dx dy Given current point of relLineTo dx dy is logically equivalent to lineTo dx dy",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "relLineTo",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "Line To",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:relLineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current subpath is not empty, begin a new subpath. After this call\n the current point will offset by (x, y).\n\u003c/p\u003e\u003cp\u003eGiven a current point of (x, y), relMoveTo \u003ccode\u003edx\u003c/code\u003e \u003ccode\u003edy\u003c/code\u003e is logically equivalent\n to moveTo (x + \u003ccode\u003edx\u003c/code\u003e) (y + \u003ccode\u003edy\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "relMoveTo",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "If the current subpath is not empty begin new subpath After this call the current point will offset by Given current point of relMoveTo dx dy is logically equivalent to moveTo dx dy",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "relMoveTo",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "Move To",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:relMoveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new Render context with all graphics state parameters set to\n default values and with the given surface as a target surface. The target\n surface should be constructed with a backend-specific function such as\n \u003ccode\u003e\u003ca\u003ewithImageSurface\u003c/a\u003e\u003c/code\u003e (or any other with\u003cbackend\u003eSurface variant).\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "renderWith",
          "package": "cairo",
          "signature": "Surface-\u003e Render a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Creates new Render context with all graphics state parameters set to default values and with the given surface as target surface The target surface should be constructed with backend-specific function such as withImageSurface or any other with backend Surface variant",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "renderWith",
          "normalized": "Surface-\u003eRender a-\u003eb a",
          "package": "cairo",
          "partial": "With",
          "signature": "Surface-\u003eRender a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:renderWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary surface that is compatible with the current target\n surface (like a combination of \u003ccode\u003e\u003ca\u003ewithTargetSurface\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewithSimilarSurface\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis is useful for drawing to a temporary surface and then compositing it\n into the main suface. For example, the following code draws to a temporary\n surface and then uses that as a mask:\n\u003c/p\u003e\u003cpre\u003e renderWithSimilarSurface ContentAlpha 200 200 $ \\tmpSurface -\u003e do\n   renderWith tmpSurface $ do\n     ... -- draw onto the temporary surface\n\n   -- use the temporary surface as a mask, filling it with the\n   -- current source which in this example is transparent red.\n   setSourceRGBA 1 0 0 0.5\n   setOperator Operator{something} -- think of something clever to do\n   maskSurface tmpSurface 0 0)\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "renderWithSimilarSurface",
          "package": "cairo",
          "signature": "Content-\u003e Int-\u003e Int-\u003e (Surface -\u003e Render a)-\u003e Render a",
          "type": "function"
        },
        "index": {
          "description": "Create temporary surface that is compatible with the current target surface like combination of withTargetSurface and withSimilarSurface This is useful for drawing to temporary surface and then compositing it into the main suface For example the following code draws to temporary surface and then uses that as mask renderWithSimilarSurface ContentAlpha tmpSurface do renderWith tmpSurface do draw onto the temporary surface use the temporary surface as mask filling it with the current source which in this example is transparent red setSourceRGBA setOperator Operator something think of something clever to do maskSurface tmpSurface",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "renderWithSimilarSurface",
          "normalized": "Content-\u003eInt-\u003eInt-\u003e(Surface-\u003eRender a)-\u003eRender a",
          "package": "cairo",
          "partial": "With Similar Surface",
          "signature": "Content-\u003eInt-\u003eInt-\u003e(Surface-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:renderWithSimilarSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the current clip region to its original, unrestricted state. That is,\n set the clip region to an infinitely large shape containing the target\n surface. Equivalently, if infinity is too hard to grasp, one can imagine the\n clip region being reset to the exact bounds of the target surface.\n\u003c/p\u003e\u003cp\u003eNote that code meant to be reusable should not call \u003ccode\u003e\u003ca\u003eresetClip\u003c/a\u003e\u003c/code\u003e as it will\n cause results unexpected by higher-level code which calls \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e. Consider\n using \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e around \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e as a more robust means of\n temporarily restricting the clip region.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "resetClip",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#resetClip",
          "type": "function"
        },
        "index": {
          "description": "Reset the current clip region to its original unrestricted state That is set the clip region to an infinitely large shape containing the target surface Equivalently if infinity is too hard to grasp one can imagine the clip region being reset to the exact bounds of the target surface Note that code meant to be reusable should not call resetClip as it will cause results unexpected by higher-level code which calls clip Consider using save and restore around clip as more robust means of temporarily restricting the clip region",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "resetClip",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Clip",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:resetClip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestores to the state saved by a preceding call to \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e and removes that\n state from the stack of saved states.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "restore",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#restore",
          "type": "function"
        },
        "index": {
          "description": "Restores to the state saved by preceding call to save and removes that state from the stack of saved states",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "restore",
          "normalized": "Render()",
          "package": "cairo",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the current transformation matrix (CTM) by rotating the user-space\n axes by \u003ccode\u003eangle\u003c/code\u003e radians. The rotation of the axes takes places after any\n existing transformation of user space. The rotation direction for positive\n angles is from the positive X axis toward the positive Y axis.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "rotate",
          "package": "cairo",
          "signature": "Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Modifies the current transformation matrix CTM by rotating the user-space axes by angle radians The rotation of the axes takes places after any existing transformation of user space The rotation direction for positive angles is from the positive axis toward the positive axis",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "rotate",
          "normalized": "Double-\u003eRender()",
          "package": "cairo",
          "signature": "Double-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a copy of the current state and saves it on an internal stack of\n saved states. When \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e is called, the saved state is restored.\n Multiple calls to \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e can be nested; each call to \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e\n restores the state from the matching paired \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "save",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#save",
          "type": "function"
        },
        "index": {
          "description": "Makes copy of the current state and saves it on an internal stack of saved states When restore is called the saved state is restored Multiple calls to save and restore can be nested each call to restore restores the state from the matching paired save",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "save",
          "normalized": "Render()",
          "package": "cairo",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the current transformation matrix (CTM) by scaling the X and Y\n user-space axes by sx and sy respectively. The scaling of the axes takes\n place after any existing transformation of user space.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "scale",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Modifies the current transformation matrix CTM by scaling the and user-space axes by sx and sy respectively The scaling of the axes takes place after any existing transformation of user space",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "scale",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects a family and style of font from a simplified description as a\n \u003ccode\u003efamily\u003c/code\u003e name, \u003ccode\u003eslant\u003c/code\u003e and \u003ccode\u003eweight\u003c/code\u003e. This function is meant to be used only\n for applications with simple font needs: Cairo doesn't provide for operations\n such as listing all available fonts on the system, and it is expected that\n most applications will need to use a more comprehensive font handling and\n text layout library in addition to cairo.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "selectFontFace",
          "package": "cairo",
          "signature": "String-\u003e FontSlant-\u003e FontWeight-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Selects family and style of font from simplified description as family name slant and weight This function is meant to be used only for applications with simple font needs Cairo doesn provide for operations such as listing all available fonts on the system and it is expected that most applications will need to use more comprehensive font handling and text layout library in addition to cairo",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "selectFontFace",
          "normalized": "String-\u003eFontSlant-\u003eFontWeight-\u003eRender()",
          "package": "cairo",
          "partial": "Font Face",
          "signature": "String-\u003eFontSlant-\u003eFontWeight-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:selectFontFace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the antialiasing mode of the rasterizer used for drawing shapes. This\n value is a hint, and a particular backend may or may not support a particular\n value. At the current time, no backend supports \u003ccode\u003e\u003ca\u003eAntialiasSubpixel\u003c/a\u003e\u003c/code\u003e when\n drawing shapes.\n\u003c/p\u003e\u003cp\u003eNote that this option does not affect text rendering, instead see\n \u003ccode\u003efontOptionsSetAntilias\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setAntialias",
          "package": "cairo",
          "signature": "Antialias-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Set the antialiasing mode of the rasterizer used for drawing shapes This value is hint and particular backend may or may not support particular value At the current time no backend supports AntialiasSubpixel when drawing shapes Note that this option does not affect text rendering instead see fontOptionsSetAntilias",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setAntialias",
          "normalized": "Antialias-\u003eRender()",
          "package": "cairo",
          "partial": "Antialias",
          "signature": "Antialias-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setAntialias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the dash pattern to be used by \u003ccode\u003e\u003ca\u003estroke\u003c/a\u003e\u003c/code\u003e. A dash pattern is specified\n by dashes, a list of positive values. Each value provides the user-space\n length of altenate \u003ca\u003eon\u003c/a\u003e and \u003ca\u003eoff\u003c/a\u003e portions of the stroke. The offset\n specifies an offset into the pattern at which the stroke begins.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003edashes\u003c/code\u003e is \u003ccode\u003e[]\u003c/code\u003e then dashing is disabled.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setDash",
          "package": "cairo",
          "signature": "[Double]-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the dash pattern to be used by stroke dash pattern is specified by dashes list of positive values Each value provides the user-space length of altenate on and off portions of the stroke The offset specifies an offset into the pattern at which the stroke begins If dashes is then dashing is disabled",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setDash",
          "normalized": "[Double]-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "Dash",
          "signature": "[Double]-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current fill rule within the cairo context. The fill rule is used\n to determine which regions are inside or outside a complex (potentially\n self-intersecting) path. The current fill rule affects both \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003eFillRule\u003c/a\u003e\u003c/code\u003e for details on the semantics of each available fill\n rule.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setFillRule",
          "package": "cairo",
          "signature": "FillRule-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Set the current fill rule within the cairo context The fill rule is used to determine which regions are inside or outside complex potentially self-intersecting path The current fill rule affects both fill and clip See FillRule for details on the semantics of each available fill rule",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setFillRule",
          "normalized": "FillRule-\u003eRender()",
          "package": "cairo",
          "partial": "Fill Rule",
          "signature": "FillRule-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setFillRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current font matrix to \u003ccode\u003ematrix\u003c/code\u003e. The font matrix gives a\n transformation from the design space of the font (in this space, the\n em-square is 1 unit by 1 unit) to user space. Normally, a simple scale is\n used (see \u003ccode\u003e\u003ca\u003esetFontSize\u003c/a\u003e\u003c/code\u003e), but a more complex font matrix can be used to shear\n the font or stretch it unequally along the two axes.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setFontMatrix",
          "package": "cairo",
          "signature": "Matrix-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the current font matrix to matrix The font matrix gives transformation from the design space of the font in this space the em-square is unit by unit to user space Normally simple scale is used see setFontSize but more complex font matrix can be used to shear the font or stretch it unequally along the two axes",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setFontMatrix",
          "normalized": "Matrix-\u003eRender()",
          "package": "cairo",
          "partial": "Font Matrix",
          "signature": "Matrix-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setFontMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a set of custom font rendering options. Rendering options are\n derived by merging these options with the options derived from underlying\n surface; if the value in \u003ccode\u003eoptions\u003c/code\u003e has a default value (like\n \u003ccode\u003e\u003ca\u003eAntialiasDefault\u003c/a\u003e\u003c/code\u003e), then the value from the surface is used.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setFontOptions",
          "package": "cairo",
          "signature": "FontOptions -\u003e Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#setFontOptions",
          "type": "function"
        },
        "index": {
          "description": "Sets set of custom font rendering options Rendering options are derived by merging these options with the options derived from underlying surface if the value in options has default value like AntialiasDefault then the value from the surface is used",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setFontOptions",
          "normalized": "FontOptions-\u003eRender()",
          "package": "cairo",
          "partial": "Font Options",
          "signature": "FontOptions-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setFontOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current font matrix to a scale by a factor of \u003ccode\u003esize\u003c/code\u003e, replacing\n any font matrix previously set with \u003ccode\u003e\u003ca\u003esetFontSize\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetFontMatrix\u003c/a\u003e\u003c/code\u003e. This\n results in a font size of size user space units. (More precisely, this matrix\n will result in the font's em-square being a size by size square in user space.)\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setFontSize",
          "package": "cairo",
          "signature": "Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the current font matrix to scale by factor of size replacing any font matrix previously set with setFontSize or setFontMatrix This results in font size of size user space units More precisely this matrix will result in the font em-square being size by size square in user space",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setFontSize",
          "normalized": "Double-\u003eRender()",
          "package": "cairo",
          "partial": "Font Size",
          "signature": "Double-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setFontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current line cap style within the cairo context. See \u003ccode\u003e\u003ca\u003eLineCap\u003c/a\u003e\u003c/code\u003e\n for details about how the available line cap styles are drawn.\n\u003c/p\u003e\u003cp\u003eAs with the other stroke parameters, the current line cap style is examined\n by \u003ccode\u003e\u003ca\u003estroke\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estrokeExtents\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003estrokeToPath\u003c/code\u003e, but does not have any\n effect during path construction.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setLineCap",
          "package": "cairo",
          "signature": "LineCap-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the current line cap style within the cairo context See LineCap for details about how the available line cap styles are drawn As with the other stroke parameters the current line cap style is examined by stroke strokeExtents and strokeToPath but does not have any effect during path construction",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setLineCap",
          "normalized": "LineCap-\u003eRender()",
          "package": "cairo",
          "partial": "Line Cap",
          "signature": "LineCap-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setLineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current line join style within the cairo context. See \u003ccode\u003e\u003ca\u003eLineJoin\u003c/a\u003e\u003c/code\u003e\n for details about how the available line join styles are drawn.\n\u003c/p\u003e\u003cp\u003eAs with the other stroke parameters, the current line join style is examined\n by \u003ccode\u003e\u003ca\u003estroke\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estrokeExtents\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003estrokeToPath\u003c/code\u003e, but does not have any\n effect during path construction.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setLineJoin",
          "package": "cairo",
          "signature": "LineJoin-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the current line join style within the cairo context See LineJoin for details about how the available line join styles are drawn As with the other stroke parameters the current line join style is examined by stroke strokeExtents and strokeToPath but does not have any effect during path construction",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setLineJoin",
          "normalized": "LineJoin-\u003eRender()",
          "package": "cairo",
          "partial": "Line Join",
          "signature": "LineJoin-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setLineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current line width within the cairo context. The line width\n specifies the diameter of a pen that is circular in user-space.\n\u003c/p\u003e\u003cp\u003eAs with the other stroke parameters, the current line cap style is examined\n by \u003ccode\u003e\u003ca\u003estroke\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estrokeExtents\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003estrokeToPath\u003c/code\u003e, but does not have any\n effect during path construction.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setLineWidth",
          "package": "cairo",
          "signature": "Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the current line width within the cairo context The line width specifies the diameter of pen that is circular in user-space As with the other stroke parameters the current line cap style is examined by stroke strokeExtents and strokeToPath but does not have any effect during path construction",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setLineWidth",
          "normalized": "Double-\u003eRender()",
          "package": "cairo",
          "partial": "Line Width",
          "signature": "Double-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setLineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the current transformation matrix (CTM) by setting it equal to\n \u003ccode\u003ematrix\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setMatrix",
          "package": "cairo",
          "signature": "Matrix-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Modifies the current transformation matrix CTM by setting it equal to matrix",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setMatrix",
          "normalized": "Matrix-\u003eRender()",
          "package": "cairo",
          "partial": "Matrix",
          "signature": "Matrix-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "setMiterLimit",
          "package": "cairo",
          "signature": "Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setMiterLimit",
          "normalized": "Double-\u003eRender()",
          "package": "cairo",
          "partial": "Miter Limit",
          "signature": "Double-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setMiterLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the compositing operator to be used for all drawing operations.\n See \u003ccode\u003e\u003ca\u003eOperator\u003c/a\u003e\u003c/code\u003e for details on the semantics of each available compositing\n operator.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setOperator",
          "package": "cairo",
          "signature": "Operator-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the compositing operator to be used for all drawing operations See Operator for details on the semantics of each available compositing operator",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setOperator",
          "normalized": "Operator-\u003eRender()",
          "package": "cairo",
          "partial": "Operator",
          "signature": "Operator-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the source pattern within the context to source. This pattern will\n then be used for any subsequent drawing operation until a new source pattern\n is set.\n\u003c/p\u003e\u003cp\u003eNote: The pattern's transformation matrix will be locked to the user space\n in effect at the time of \u003ccode\u003e\u003ca\u003esetSource\u003c/a\u003e\u003c/code\u003e. This means that further\n modifications of the current transformation matrix will not affect the source\n pattern. See \u003ccode\u003e\u003ca\u003esetMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setSource",
          "package": "cairo",
          "signature": "Pattern-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the source pattern within the context to source This pattern will then be used for any subsequent drawing operation until new source pattern is set Note The pattern transformation matrix will be locked to the user space in effect at the time of setSource This means that further modifications of the current transformation matrix will not affect the source pattern See setMatrix",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setSource",
          "normalized": "Pattern-\u003eRender()",
          "package": "cairo",
          "partial": "Source",
          "signature": "Pattern-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the source pattern within the context to an opaque color. This opaque\n color will then be used for any subsequent drawing operation until a new source\n pattern is set.\n\u003c/p\u003e\u003cp\u003eThe color components are floating point numbers in the range 0 to 1. If the\n values passed in are outside that range, they will be clamped.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setSourceRGB",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the source pattern within the context to an opaque color This opaque color will then be used for any subsequent drawing operation until new source pattern is set The color components are floating point numbers in the range to If the values passed in are outside that range they will be clamped",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setSourceRGB",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "Source RGB",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setSourceRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the source pattern within the context to a translucent color. This\n color will then be used for any subsequent drawing operation until a new\n source pattern is set.\n\u003c/p\u003e\u003cp\u003eThe color and alpha components are floating point numbers in the range 0 to\n 1. If the values passed in are outside that range, they will be clamped.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setSourceRGBA",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the source pattern within the context to translucent color This color will then be used for any subsequent drawing operation until new source pattern is set The color and alpha components are floating point numbers in the range to If the values passed in are outside that range they will be clamped",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setSourceRGBA",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "Source RGBA",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setSourceRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a convenience function for creating a pattern from surface and\n setting it as the source in the context with \u003ccode\u003e\u003ca\u003esetSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe x and y parameters give the user-space coordinate at which the surface\n origin should appear. (The surface origin is its upper-left corner before any\n transformation has been applied.) The x and y patterns are negated and then\n set as translation values in the pattern matrix.\n\u003c/p\u003e\u003cp\u003eOther than the initial translation pattern matrix, as described above, all\n other pattern attributes, (such as its extend mode), are set to the default\n values as in \u003ccode\u003epatternCreateForSurface\u003c/code\u003e. The resulting pattern can be queried\n with \u003ccode\u003e\u003ca\u003egetSource\u003c/a\u003e\u003c/code\u003e so that these attributes can be modified if desired, (eg. to\n create a repeating pattern with \u003ccode\u003epatternSetExtent\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setSourceSurface",
          "package": "cairo",
          "signature": "Surface-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "This is convenience function for creating pattern from surface and setting it as the source in the context with setSource The and parameters give the user-space coordinate at which the surface origin should appear The surface origin is its upper-left corner before any transformation has been applied The and patterns are negated and then set as translation values in the pattern matrix Other than the initial translation pattern matrix as described above all other pattern attributes such as its extend mode are set to the default values as in patternCreateForSurface The resulting pattern can be queried with getSource so that these attributes can be modified if desired eg to create repeating pattern with patternSetExtent",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setSourceSurface",
          "normalized": "Surface-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "partial": "Source Surface",
          "signature": "Surface-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setSourceSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the tolerance used when converting paths into trapezoids. Curved\n segments of the path will be subdivided until the maximum deviation between\n the original path and the polygonal approximation is less than tolerance.\n The default value is 0.1. A larger value will give better performance,\n a smaller value, better appearance. (Reducing the value from the default\n value of 0.1 is unlikely to improve appearance significantly.)\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "setTolerance",
          "package": "cairo",
          "signature": "Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the tolerance used when converting paths into trapezoids Curved segments of the path will be subdivided until the maximum deviation between the original path and the polygonal approximation is less than tolerance The default value is larger value will give better performance smaller value better appearance Reducing the value from the default value of is unlikely to improve appearance significantly",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "setTolerance",
          "normalized": "Double-\u003eRender()",
          "package": "cairo",
          "partial": "Tolerance",
          "signature": "Double-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:setTolerance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "showPage",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#showPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "showPage",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Page",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:showPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drawing operator that generates the shape from a string of Unicode\n characters, rendered according to the current font face, font size (font\n matrix), and font options.\n\u003c/p\u003e\u003cp\u003eThis function first computes a set of glyphs for the string of text. The\n first glyph is placed so that its origin is at the current point. The origin\n of each subsequent glyph is offset from that of the previous glyph by the\n advance values of the previous glyph.\n\u003c/p\u003e\u003cp\u003eAfter this call the current point is moved to the origin of where the next\n glyph would be placed in this same progression. That is, the current point\n will be at the origin of the final glyph offset by its advance values. This\n allows for easy display of a single logical string with multiple calls to\n \u003ccode\u003e\u003ca\u003eshowText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: The \u003ccode\u003e\u003ca\u003eshowText\u003c/a\u003e\u003c/code\u003e function call is part of what the cairo designers call\n the \"toy\" text API. It is convenient for short demos and simple programs,\n but it is not expected to be adequate for the most serious of text-using\n applications.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "showText",
          "package": "cairo",
          "signature": "String-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "drawing operator that generates the shape from string of Unicode characters rendered according to the current font face font size font matrix and font options This function first computes set of glyphs for the string of text The first glyph is placed so that its origin is at the current point The origin of each subsequent glyph is offset from that of the previous glyph by the advance values of the previous glyph After this call the current point is moved to the origin of where the next glyph would be placed in this same progression That is the current point will be at the origin of the final glyph offset by its advance values This allows for easy display of single logical string with multiple calls to showText NOTE The showText function call is part of what the cairo designers call the toy text API It is convenient for short demos and simple programs but it is not expected to be adequate for the most serious of text-using applications",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "showText",
          "normalized": "String-\u003eRender()",
          "package": "cairo",
          "partial": "Text",
          "signature": "String-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:showText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk for the status of the current \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "status",
          "package": "cairo",
          "signature": "Render Status",
          "source": "src/Graphics-Rendering-Cairo.html#status",
          "type": "function"
        },
        "index": {
          "description": "Ask for the status of the current Render monad",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "status",
          "package": "cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drawing operator that strokes the current path according to the current\n line width, line join, line cap, and dash settings. After issuing \u003ccode\u003e\u003ca\u003estroke\u003c/a\u003e\u003c/code\u003e,\n the current path will be cleared from the \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esetLineWidth\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetLineJoin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetLineCap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetDash\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003estrokePreserve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "stroke",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#stroke",
          "type": "function"
        },
        "index": {
          "description": "drawing operator that strokes the current path according to the current line width line join line cap and dash settings After issuing stroke the current path will be cleared from the Render monad See setLineWidth setLineJoin setLineCap setDash and strokePreserve",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "stroke",
          "normalized": "Render()",
          "package": "cairo",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:stroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "strokeExtents",
          "package": "cairo",
          "signature": "Render (Double, Double, Double, Double)",
          "source": "src/Graphics-Rendering-Cairo.html#strokeExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "strokeExtents",
          "normalized": "Render(Double,Double,Double,Double)",
          "package": "cairo",
          "partial": "Extents",
          "signature": "Render(Double,Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:strokeExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drawing operator that strokes the current path according to the current\n line width, line join, line cap, and dash settings. Unlike \u003ccode\u003e\u003ca\u003estroke\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003estrokePreserve\u003c/a\u003e\u003c/code\u003e preserves the path within the \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esetLineWidth\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetLineJoin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetLineCap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetDash\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003estrokePreserve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "strokePreserve",
          "package": "cairo",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Cairo.html#strokePreserve",
          "type": "function"
        },
        "index": {
          "description": "drawing operator that strokes the current path according to the current line width line join line cap and dash settings Unlike stroke strokePreserve preserves the path within the Render monad See setLineWidth setLineJoin setLineCap setDash and strokePreserve",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "strokePreserve",
          "normalized": "Render()",
          "package": "cairo",
          "partial": "Preserve",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:strokePreserve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function finishes the surface and drops all references to external\n resources. For example, for the Xlib backend it means that cairo will no\n longer access the drawable, which can be freed. After calling \u003ccode\u003e\u003ca\u003esurfaceFinish\u003c/a\u003e\u003c/code\u003e\n the only valid operations on a surface are getting and setting user data and\n referencing and destroying it. Further drawing to the surface will not affect\n the surface but will instead trigger a \u003ccode\u003e\u003ca\u003eStatusSurfaceFinished\u003c/a\u003e\u003c/code\u003e error.\n\u003c/p\u003e\u003cp\u003eWhen the last call to \u003ccode\u003esurfaceDestroy\u003c/code\u003e decreases the reference count to zero,\n cairo will call \u003ccode\u003e\u003ca\u003esurfaceFinish\u003c/a\u003e\u003c/code\u003e if it hasn't been called already, before\n freeing the resources associated with the surface.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceFinish",
          "package": "cairo",
          "signature": "Surface -\u003e m ()",
          "source": "src/Graphics-Rendering-Cairo.html#surfaceFinish",
          "type": "function"
        },
        "index": {
          "description": "This function finishes the surface and drops all references to external resources For example for the Xlib backend it means that cairo will no longer access the drawable which can be freed After calling surfaceFinish the only valid operations on surface are getting and setting user data and referencing and destroying it Further drawing to the surface will not affect the surface but will instead trigger StatusSurfaceFinished error When the last call to surfaceDestroy decreases the reference count to zero cairo will call surfaceFinish if it hasn been called already before freeing the resources associated with the surface",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceFinish",
          "normalized": "Surface-\u003ea()",
          "package": "cairo",
          "partial": "Finish",
          "signature": "Surface-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:surfaceFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo any pending drawing for the surface and also restore any temporary\n modification's cairo has made to the surface's state. This function must be\n called before switching from drawing on the surface with cairo to drawing on\n it directly with native APIs. If the surface doesn't support direct access,\n then this function does nothing.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceFlush",
          "package": "cairo",
          "signature": "Surface -\u003e m ()",
          "source": "src/Graphics-Rendering-Cairo.html#surfaceFlush",
          "type": "function"
        },
        "index": {
          "description": "Do any pending drawing for the surface and also restore any temporary modification cairo has made to the surface state This function must be called before switching from drawing on the surface with cairo to drawing on it directly with native APIs If the surface doesn support direct access then this function does nothing",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceFlush",
          "normalized": "Surface-\u003ea()",
          "package": "cairo",
          "partial": "Flush",
          "signature": "Surface-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:surfaceFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the default font rendering options for the surface. This allows\n display surfaces to report the correct subpixel order for rendering on them,\n print surfaces to disable hinting of metrics and so forth. The result can\n then be used with \u003ccode\u003escaledFontCreate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceGetFontOptions",
          "package": "cairo",
          "signature": "Surface -\u003e Render FontOptions",
          "source": "src/Graphics-Rendering-Cairo.html#surfaceGetFontOptions",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the default font rendering options for the surface This allows display surfaces to report the correct subpixel order for rendering on them print surfaces to disable hinting of metrics and so forth The result can then be used with scaledFontCreate",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceGetFontOptions",
          "normalized": "Surface-\u003eRender FontOptions",
          "package": "cairo",
          "partial": "Get Font Options",
          "signature": "Surface-\u003eRender FontOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:surfaceGetFontOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTells cairo that drawing has been done to surface using means other than\n cairo, and that cairo should reread any cached areas. Note that you must call\n \u003ccode\u003e\u003ca\u003esurfaceFlush\u003c/a\u003e\u003c/code\u003e before doing such drawing.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceMarkDirty",
          "package": "cairo",
          "signature": "Surface -\u003e m ()",
          "source": "src/Graphics-Rendering-Cairo.html#surfaceMarkDirty",
          "type": "function"
        },
        "index": {
          "description": "Tells cairo that drawing has been done to surface using means other than cairo and that cairo should reread any cached areas Note that you must call surfaceFlush before doing such drawing",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceMarkDirty",
          "normalized": "Surface-\u003ea()",
          "package": "cairo",
          "partial": "Mark Dirty",
          "signature": "Surface-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:surfaceMarkDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esurfaceMarkDirty\u003c/a\u003e\u003c/code\u003e, but drawing has been done only to the specified\n rectangle, so that cairo can retain cached contents for other parts of the\n surface.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceMarkDirtyRectangle",
          "package": "cairo",
          "signature": "Surface-\u003e Int-\u003e Int-\u003e Int-\u003e Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like surfaceMarkDirty but drawing has been done only to the specified rectangle so that cairo can retain cached contents for other parts of the surface",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceMarkDirtyRectangle",
          "normalized": "Surface-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003ea()",
          "package": "cairo",
          "partial": "Mark Dirty Rectangle",
          "signature": "Surface-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:surfaceMarkDirtyRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets an offset that is added to the device coordinates determined by the\n CTM when drawing to surface. One use case for this function is when we want\n to create a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e that redirects drawing for a portion of an\n onscreen surface to an offscreen surface in a way that is completely\n invisible to the user of the cairo API. Setting a transformation via\n \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e isn't sufficient to do this, since functions like \u003ccode\u003e\u003ca\u003edeviceToUser\u003c/a\u003e\u003c/code\u003e\n will expose the hidden offset.\n\u003c/p\u003e\u003cp\u003eNote that the offset only affects drawing to the surface, not using the\n surface in a surface pattern.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceSetDeviceOffset",
          "package": "cairo",
          "signature": "Surface-\u003e Double-\u003e Double-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Sets an offset that is added to the device coordinates determined by the CTM when drawing to surface One use case for this function is when we want to create Surface that redirects drawing for portion of an onscreen surface to an offscreen surface in way that is completely invisible to the user of the cairo API Setting transformation via translate isn sufficient to do this since functions like deviceToUser will expose the hidden offset Note that the offset only affects drawing to the surface not using the surface in surface pattern",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceSetDeviceOffset",
          "normalized": "Surface-\u003eDouble-\u003eDouble-\u003ea()",
          "package": "cairo",
          "partial": "Set Device Offset",
          "signature": "Surface-\u003eDouble-\u003eDouble-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:surfaceSetDeviceOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites the contents of surface to a new file \u003ccode\u003efilename\u003c/code\u003e as a PNG image.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceWriteToPNG",
          "package": "cairo",
          "signature": "Surface-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Writes the contents of surface to new file filename as PNG image",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "surfaceWriteToPNG",
          "normalized": "Surface-\u003eFilePath-\u003eIO()",
          "package": "cairo",
          "partial": "Write To PNG",
          "signature": "Surface-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:surfaceWriteToPNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the extents for a string of text. The extents describe a user-space\n rectangle that encloses the \"inked\" portion of the text, (as it would be\n drawn by \u003ccode\u003e\u003ca\u003eshowText\u003c/a\u003e\u003c/code\u003e). Additionally, the \u003ccode\u003e\u003ca\u003etextExtentsXadvance\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003etextExtentsYadvance\u003c/a\u003e\u003c/code\u003e values indicate the amount by which the current point\n would be advanced by \u003ccode\u003e\u003ca\u003eshowText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that whitespace characters do not directly contribute to the size of\n the rectangle (\u003ccode\u003e\u003ca\u003etextExtentsWidth\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etextExtentsHeight\u003c/a\u003e\u003c/code\u003e). They do contribute\n indirectly by changing the position of non-whitespace characters.\n In particular, trailing whitespace characters are likely to not affect the\n size of the rectangle, though they will affect the \u003ccode\u003e\u003ca\u003etextExtentsXadvance\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003etextExtentsYadvance\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtents",
          "package": "cairo",
          "signature": "String-\u003e Render TextExtents",
          "type": "function"
        },
        "index": {
          "description": "Gets the extents for string of text The extents describe user-space rectangle that encloses the inked portion of the text as it would be drawn by showText Additionally the textExtentsXadvance and textExtentsYadvance values indicate the amount by which the current point would be advanced by showText Note that whitespace characters do not directly contribute to the size of the rectangle textExtentsWidth and textExtentsHeight They do contribute indirectly by changing the position of non-whitespace characters In particular trailing whitespace characters are likely to not affect the size of the rectangle though they will affect the textExtentsXadvance and textExtentsYadvance values",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtents",
          "normalized": "String-\u003eRender TextExtents",
          "package": "cairo",
          "partial": "Extents",
          "signature": "String-\u003eRender TextExtents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:textExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsHeight",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#TextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsHeight",
          "package": "cairo",
          "partial": "Extents Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:textExtentsHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsWidth",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#TextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsWidth",
          "package": "cairo",
          "partial": "Extents Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:textExtentsWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsXadvance",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#TextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsXadvance",
          "package": "cairo",
          "partial": "Extents Xadvance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:textExtentsXadvance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsXbearing",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#TextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsXbearing",
          "package": "cairo",
          "partial": "Extents Xbearing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:textExtentsXbearing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsYadvance",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#TextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsYadvance",
          "package": "cairo",
          "partial": "Extents Yadvance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:textExtentsYadvance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsYbearing",
          "package": "cairo",
          "signature": "Double",
          "source": "src/Graphics-Rendering-Cairo-Types.html#TextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "textExtentsYbearing",
          "package": "cairo",
          "partial": "Extents Ybearing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:textExtentsYbearing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender text at the current path.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e See \u003ccode\u003e\u003ca\u003eshowText\u003c/a\u003e\u003c/code\u003e for why you should use Gtk functions.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "textPath",
          "package": "cairo",
          "signature": "String-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Render text at the current path See showText for why you should use Gtk functions",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "textPath",
          "normalized": "String-\u003eRender()",
          "package": "cairo",
          "partial": "Path",
          "signature": "String-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:textPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the current transformation matrix (CTM) by applying matrix as an\n additional transformation. The new transformation of user space takes place\n after any existing transformation.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "transform",
          "package": "cairo",
          "signature": "Matrix-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Modifies the current transformation matrix CTM by applying matrix as an additional transformation The new transformation of user space takes place after any existing transformation",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "transform",
          "normalized": "Matrix-\u003eRender()",
          "package": "cairo",
          "signature": "Matrix-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the current transformation matrix (CTM) by translating the\n user-space origin by \u003ccode\u003e(tx, ty)\u003c/code\u003e. This offset is interpreted as a user-space\n coordinate according to the CTM in place before the new call to \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e.\n In other words, the translation of the user-space origin takes place after\n any existing transformation.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "translate",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Modifies the current transformation matrix CTM by translating the user-space origin by tx ty This offset is interpreted as user-space coordinate according to the CTM in place before the new call to translate In other words the translation of the user-space origin takes place after any existing transformation",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "translate",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "cairo",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a coordinate from user space to device space by multiplying the\n given point by the current transformation matrix (CTM).\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "userToDevice",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Transform coordinate from user space to device space by multiplying the given point by the current transformation matrix CTM",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "userToDevice",
          "normalized": "Double-\u003eDouble-\u003eRender(Double,Double)",
          "package": "cairo",
          "partial": "To Device",
          "signature": "Double-\u003eDouble-\u003eRender(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:userToDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a distance vector from user space to device space. This function\n is similar to \u003ccode\u003e\u003ca\u003euserToDevice\u003c/a\u003e\u003c/code\u003e except that the translation components of the\n CTM will be ignored when transforming \u003ccode\u003e(dx,dy)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "userToDeviceDistance",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Render (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Transform distance vector from user space to device space This function is similar to userToDevice except that the translation components of the CTM will be ignored when transforming dx dy",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "userToDeviceDistance",
          "normalized": "Double-\u003eDouble-\u003eRender(Double,Double)",
          "package": "cairo",
          "partial": "To Device Distance",
          "signature": "Double-\u003eDouble-\u003eRender(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:userToDeviceDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the version of the cairo library encoded in a single integer.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "version",
          "package": "cairo",
          "signature": "Int",
          "source": "src/Graphics-Rendering-Cairo.html#version",
          "type": "function"
        },
        "index": {
          "description": "Returns the version of the cairo library encoded in single integer",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "version",
          "package": "cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the version of the cairo library as a human-readable string of the\n form \"X.Y.Z\".\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "versionString",
          "package": "cairo",
          "signature": "String",
          "source": "src/Graphics-Rendering-Cairo.html#versionString",
          "type": "function"
        },
        "index": {
          "description": "Returns the version of the cairo library as human-readable string of the form X.Y.Z",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "versionString",
          "package": "cairo",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:versionString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "width",
          "package": "cairo",
          "signature": "Int",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RectangleInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "width",
          "package": "cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop the current group from the group stack and use it as a pattern. The\n group should be populated first by calling \u003ccode\u003e\u003ca\u003epushGroup\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003epushGroupWithContent\u003c/a\u003e\u003c/code\u003e and doing some drawing operations. This also calls\n \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e to balance the \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e called in \u003ccode\u003e\u003ca\u003epushGroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withGroupPattern",
          "package": "cairo",
          "signature": "(Pattern -\u003e Render a)-\u003e Render a",
          "type": "function"
        },
        "index": {
          "description": "Pop the current group from the group stack and use it as pattern The group should be populated first by calling pushGroup or pushGroupWithContent and doing some drawing operations This also calls restore to balance the save called in pushGroup",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withGroupPattern",
          "normalized": "(Pattern-\u003eRender a)-\u003eRender a",
          "package": "cairo",
          "partial": "Group Pattern",
          "signature": "(Pattern-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withGroupPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an image surface of the specified format and dimensions.\n The initial contents of the surface is undefined; you must explicitely\n clear the buffer, using, for example, \u003ccode\u003e\u003ca\u003erectangle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e if you want it\n cleared.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withImageSurface",
          "package": "cairo",
          "signature": "Format-\u003e Int-\u003e Int-\u003e (Surface -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Creates an image surface of the specified format and dimensions The initial contents of the surface is undefined you must explicitely clear the buffer using for example rectangle and fill if you want it cleared",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withImageSurface",
          "normalized": "Format-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "package": "cairo",
          "partial": "Image Surface",
          "signature": "Format-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withImageSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithImageSurface\u003c/a\u003e\u003c/code\u003e but creating a surface to target external\n data pointed to by \u003ccode\u003ePixelData\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withImageSurfaceForData",
          "package": "cairo",
          "signature": "PixelData-\u003e Format-\u003e Int-\u003e Int-\u003e Int-\u003e (Surface -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Like withImageSurface but creating surface to target external data pointed to by PixelData",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withImageSurfaceForData",
          "normalized": "PixelData-\u003eFormat-\u003eInt-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "package": "cairo",
          "partial": "Image Surface For Data",
          "signature": "PixelData-\u003eFormat-\u003eInt-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withImageSurfaceForData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new image surface and initializes the contents to the given PNG\n file.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withImageSurfaceFromPNG",
          "package": "cairo",
          "signature": "FilePath -\u003e (Surface -\u003e IO a) -\u003e IO a",
          "source": "src/Graphics-Rendering-Cairo.html#withImageSurfaceFromPNG",
          "type": "function"
        },
        "index": {
          "description": "Creates new image surface and initializes the contents to the given PNG file",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withImageSurfaceFromPNG",
          "normalized": "FilePath-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "package": "cairo",
          "partial": "Image Surface From PNG",
          "signature": "FilePath-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withImageSurfaceFromPNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new linear gradient \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e along the line defined by \u003ccode\u003e(x0, y0)\u003c/code\u003e\n and \u003ccode\u003e(x1, y1)\u003c/code\u003e. Before using the gradient pattern, a number of color stops\n should be defined using \u003ccode\u003e\u003ca\u003epatternAddColorStopRGB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epatternAddColorStopRGBA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note: The coordinates here are in pattern space. For a new pattern,\n pattern space is identical to user space, but the relationship between the\n spaces can be changed with \u003ccode\u003e\u003ca\u003epatternSetMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withLinearPattern",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e (Pattern -\u003e Render a)-\u003e Render a",
          "type": "function"
        },
        "index": {
          "description": "Create new linear gradient Pattern along the line defined by x0 y0 and x1 y1 Before using the gradient pattern number of color stops should be defined using patternAddColorStopRGB and patternAddColorStopRGBA Note The coordinates here are in pattern space For new pattern pattern space is identical to user space but the relationship between the spaces can be changed with patternSetMatrix",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withLinearPattern",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "package": "cairo",
          "partial": "Linear Pattern",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withLinearPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a PostScript surface of the specified size in points to\n be written to \u003ccode\u003efilename\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the size of individual pages of the PostScript output can\n vary.  See \u003ccode\u003e\u003ca\u003epsSurfaceSetSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withPDFSurface",
          "package": "cairo",
          "signature": "FilePath-\u003e Double-\u003e Double-\u003e (Surface -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Creates PostScript surface of the specified size in points to be written to filename Note that the size of individual pages of the PostScript output can vary See psSurfaceSetSize",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withPDFSurface",
          "normalized": "FilePath-\u003eDouble-\u003eDouble-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "package": "cairo",
          "partial": "PDFSurface",
          "signature": "FilePath-\u003eDouble-\u003eDouble-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withPDFSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a PostScript surface of the specified size in points to\n be written to \u003ccode\u003efilename\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the size of individual pages of the PostScript output can\n vary.  See \u003ccode\u003e\u003ca\u003epsSurfaceSetSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withPSSurface",
          "package": "cairo",
          "signature": "FilePath-\u003e Double-\u003e Double-\u003e (Surface -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Creates PostScript surface of the specified size in points to be written to filename Note that the size of individual pages of the PostScript output can vary See psSurfaceSetSize",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withPSSurface",
          "normalized": "FilePath-\u003eDouble-\u003eDouble-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "package": "cairo",
          "partial": "PSSurface",
          "signature": "FilePath-\u003eDouble-\u003eDouble-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withPSSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e for the given surface.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withPatternForSurface",
          "package": "cairo",
          "signature": "Surface-\u003e (Pattern -\u003e Render a)-\u003e Render a",
          "type": "function"
        },
        "index": {
          "description": "Create new Pattern for the given surface",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withPatternForSurface",
          "normalized": "Surface-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "package": "cairo",
          "partial": "Pattern For Surface",
          "signature": "Surface-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withPatternForSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e corresponding to a translucent color. The color\n components are floating point numbers in the range 0 to 1. If the values\n passed in are outside that range, they will be clamped.\n\u003c/p\u003e\u003cp\u003eFor example to create a solid red pattern at 50% transparency:\n\u003c/p\u003e\u003cpre\u003e withRBGPattern 1 0 0 0.5 $ do\n   ...\n   ...\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withRGBAPattern",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e (Pattern -\u003e Render a)-\u003e Render a",
          "type": "function"
        },
        "index": {
          "description": "Creates new Pattern corresponding to translucent color The color components are floating point numbers in the range to If the values passed in are outside that range they will be clamped For example to create solid red pattern at transparency withRBGPattern do",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withRGBAPattern",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "package": "cairo",
          "partial": "RGBAPattern",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withRGBAPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e corresponding to an opaque color. The color\n components are floating point numbers in the range 0 to 1. If the values\n passed in are outside that range, they will be clamped.\n\u003c/p\u003e\u003cp\u003eFor example to create a solid red pattern:\n\u003c/p\u003e\u003cpre\u003e withRBGPattern 1 0 0 $ do\n   ...\n   ...\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withRGBPattern",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e (Pattern -\u003e Render a)-\u003e Render a",
          "type": "function"
        },
        "index": {
          "description": "Creates new Pattern corresponding to an opaque color The color components are floating point numbers in the range to If the values passed in are outside that range they will be clamped For example to create solid red pattern withRBGPattern do",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withRGBPattern",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "package": "cairo",
          "partial": "RGBPattern",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withRGBPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new radial gradient \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e between the two circles defined by\n \u003ccode\u003e(x0, y0, c0)\u003c/code\u003e and \u003ccode\u003e(x1, y1, c0)\u003c/code\u003e. Before using the gradient pattern, a\n number of color stops should be defined using \u003ccode\u003e\u003ca\u003epatternAddColorStopRGB\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003epatternAddColorStopRGBA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note: The coordinates here are in pattern space. For a new pattern,\n pattern space is identical to user space, but the relationship between the\n spaces can be changed with \u003ccode\u003e\u003ca\u003epatternSetMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withRadialPattern",
          "package": "cairo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e (Pattern -\u003e Render a)-\u003e Render a",
          "type": "function"
        },
        "index": {
          "description": "Creates new radial gradient Pattern between the two circles defined by x0 y0 c0 and x1 y1 c0 Before using the gradient pattern number of color stops should be defined using patternAddColorStopRGB or patternAddColorStopRGBA Note The coordinates here are in pattern space For new pattern pattern space is identical to user space but the relationship between the spaces can be changed with patternSetMatrix",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withRadialPattern",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "package": "cairo",
          "partial": "Radial Pattern",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e(Pattern-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withRadialPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a SVG surface of the specified size in points\n be written to \u003ccode\u003efilename\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withSVGSurface",
          "package": "cairo",
          "signature": "FilePath-\u003e Double-\u003e Double-\u003e (Surface -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Creates SVG surface of the specified size in points be written to filename",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withSVGSurface",
          "normalized": "FilePath-\u003eDouble-\u003eDouble-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "package": "cairo",
          "partial": "SVGSurface",
          "signature": "FilePath-\u003eDouble-\u003eDouble-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withSVGSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary surface that is as compatible as possible with an\n existing surface. The new surface will use the same backend as other unless\n that is not possible for some reason.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withSimilarSurface",
          "package": "cairo",
          "signature": "Surface-\u003e Content-\u003e Int-\u003e Int-\u003e (Surface -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Create temporary surface that is as compatible as possible with an existing surface The new surface will use the same backend as other unless that is not possible for some reason",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withSimilarSurface",
          "normalized": "Surface-\u003eContent-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "package": "cairo",
          "partial": "Similar Surface",
          "signature": "Surface-\u003eContent-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withSimilarSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the target surface for the Render context as passed to \u003ccode\u003e\u003ca\u003erenderWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo",
          "name": "withTargetSurface",
          "package": "cairo",
          "signature": "(Surface -\u003e Render a) -\u003e Render a",
          "source": "src/Graphics-Rendering-Cairo.html#withTargetSurface",
          "type": "function"
        },
        "index": {
          "description": "Gets the target surface for the Render context as passed to renderWith",
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "withTargetSurface",
          "normalized": "(Surface-\u003eRender a)-\u003eRender a",
          "package": "cairo",
          "partial": "Target Surface",
          "signature": "(Surface-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:withTargetSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "x",
          "package": "cairo",
          "signature": "Int",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RectangleInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "x",
          "package": "cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo",
          "name": "y",
          "package": "cairo",
          "signature": "Int",
          "source": "src/Graphics-Rendering-Cairo-Types.html#RectangleInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo",
          "module": "Graphics.Rendering.Cairo",
          "name": "y",
          "package": "cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cairo/docs/Graphics-Rendering-Cairo.html#v:y"
      }
    }
  ]
]