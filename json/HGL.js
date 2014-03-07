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
        "word": "HGL"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore functions of a simple graphics library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Core",
          "name": "Core",
          "package": "HGL",
          "source": "src/Graphics-HGL-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Core functions of simple graphics library",
          "hierarchy": "Graphics HGL Core",
          "module": "Graphics.HGL.Core",
          "name": "Core",
          "package": "HGL",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBrushes, used for filling shapes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "Brush",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw-Brush.html",
          "type": "module"
        },
        "index": {
          "description": "Brushes used for filling shapes",
          "hierarchy": "Graphics HGL Draw Brush",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "Brush",
          "package": "HGL",
          "partial": "Brush",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Brush.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Brush",
          "name": "Brush",
          "package": "HGL",
          "source": "src/Graphics-HGL-X11-Types.html#Brush",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Brush",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "Brush",
          "package": "HGL",
          "partial": "Brush",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Brush.html#t:Brush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBrush\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "createBrush",
          "package": "HGL",
          "signature": "RGB -\u003e IO Brush",
          "source": "src/Graphics-HGL-Draw-Brush.html#createBrush",
          "type": "function"
        },
        "index": {
          "description": "Create Brush",
          "hierarchy": "Graphics HGL Draw Brush",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "createBrush",
          "normalized": "RGB-\u003eIO Brush",
          "package": "HGL",
          "partial": "Brush",
          "signature": "RGB-\u003eIO Brush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Brush.html#v:createBrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy a \u003ccode\u003e\u003ca\u003eBrush\u003c/a\u003e\u003c/code\u003e created with \u003ccode\u003e\u003ca\u003ecreateBrush\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "deleteBrush",
          "package": "HGL",
          "signature": "Brush -\u003e IO ()",
          "source": "src/Graphics-HGL-Draw-Brush.html#deleteBrush",
          "type": "function"
        },
        "index": {
          "description": "Destroy Brush created with createBrush",
          "hierarchy": "Graphics HGL Draw Brush",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "deleteBrush",
          "normalized": "Brush-\u003eIO()",
          "package": "HGL",
          "partial": "Brush",
          "signature": "Brush-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Brush.html#v:deleteBrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBrush\u003c/a\u003e\u003c/code\u003e locally to a drawing.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "mkBrush",
          "package": "HGL",
          "signature": "RGB -\u003e (Brush -\u003e Draw a) -\u003e Draw a",
          "source": "src/Graphics-HGL-Draw-Brush.html#mkBrush",
          "type": "function"
        },
        "index": {
          "description": "Create Brush locally to drawing",
          "hierarchy": "Graphics HGL Draw Brush",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "mkBrush",
          "normalized": "RGB-\u003e(Brush-\u003eDraw a)-\u003eDraw a",
          "package": "HGL",
          "partial": "Brush",
          "signature": "RGB-\u003e(Brush-\u003eDraw a)-\u003eDraw a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Brush.html#v:mkBrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003e\u003ca\u003eBrush\u003c/a\u003e\u003c/code\u003e for subsequent drawing, returning the previous setting.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "selectBrush",
          "package": "HGL",
          "signature": "Brush -\u003e Draw Brush",
          "source": "src/Graphics-HGL-Draw-Brush.html#selectBrush",
          "type": "function"
        },
        "index": {
          "description": "Set the Brush for subsequent drawing returning the previous setting",
          "hierarchy": "Graphics HGL Draw Brush",
          "module": "Graphics.HGL.Draw.Brush",
          "name": "selectBrush",
          "normalized": "Brush-\u003eDraw Brush",
          "package": "HGL",
          "partial": "Brush",
          "signature": "Brush-\u003eDraw Brush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Brush.html#v:selectBrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eText fonts.\n\u003c/p\u003e\u003cp\u003ePortability notes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e X11 does not directly support font rotation so \u003ccode\u003e\u003ca\u003ecreateFont\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003emkFont\u003c/a\u003e\u003c/code\u003e always ignore the rotation angle argument in the X11\n   implementation of this library.\n\u003c/li\u003e\u003cli\u003e Many of the font families typically available on Win32 are not\n   available on X11 (and \u003cem\u003evice-versa\u003c/em\u003e).  In our experience, the font\n   families \u003cem\u003ecourier\u003c/em\u003e, \u003cem\u003ehelvetica\u003c/em\u003e and \u003cem\u003etimes\u003c/em\u003e are somewhat portable.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Draw.Font",
          "name": "Font",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw-Font.html",
          "type": "module"
        },
        "index": {
          "description": "Text fonts Portability notes X11 does not directly support font rotation so createFont and mkFont always ignore the rotation angle argument in the X11 implementation of this library Many of the font families typically available on Win32 are not available on X11 and vice-versa In our experience the font families courier helvetica and times are somewhat portable",
          "hierarchy": "Graphics HGL Draw Font",
          "module": "Graphics.HGL.Draw.Font",
          "name": "Font",
          "package": "HGL",
          "partial": "Font",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Font.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Font",
          "name": "Font",
          "package": "HGL",
          "source": "src/Graphics-HGL-X11-Types.html#Font",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Font",
          "module": "Graphics.HGL.Draw.Font",
          "name": "Font",
          "package": "HGL",
          "partial": "Font",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Font.html#t:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a font.\n The rotation angle is ignored if the font is not a \"TrueType\" font\n (e.g., a \u003ccode\u003eSystem\u003c/code\u003e font on Win32).\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Font",
          "name": "createFont",
          "package": "HGL",
          "signature": "Size-\u003e Angle-\u003e Bool-\u003e Bool-\u003e String-\u003e IO Font",
          "type": "function"
        },
        "index": {
          "description": "Create font The rotation angle is ignored if the font is not TrueType font e.g System font on Win32",
          "hierarchy": "Graphics HGL Draw Font",
          "module": "Graphics.HGL.Draw.Font",
          "name": "createFont",
          "normalized": "Size-\u003eAngle-\u003eBool-\u003eBool-\u003eString-\u003eIO Font",
          "package": "HGL",
          "partial": "Font",
          "signature": "Size-\u003eAngle-\u003eBool-\u003eBool-\u003eString-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Font.html#v:createFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a font created with \u003ccode\u003e\u003ca\u003ecreateFont\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Font",
          "name": "deleteFont",
          "package": "HGL",
          "signature": "Font -\u003e IO ()",
          "source": "src/Graphics-HGL-Draw-Font.html#deleteFont",
          "type": "function"
        },
        "index": {
          "description": "Delete font created with createFont",
          "hierarchy": "Graphics HGL Draw Font",
          "module": "Graphics.HGL.Draw.Font",
          "name": "deleteFont",
          "normalized": "Font-\u003eIO()",
          "package": "HGL",
          "partial": "Font",
          "signature": "Font-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Font.html#v:deleteFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a font for use in a drawing, and delete it afterwards.\n The rotation angle is ignored if the font is not a \"TrueType\" font\n (e.g., a \u003ccode\u003eSystem\u003c/code\u003e font on Win32).\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Font",
          "name": "mkFont",
          "package": "HGL",
          "signature": "Size-\u003e Angle-\u003e Bool-\u003e Bool-\u003e String-\u003e (Font -\u003e Draw a)-\u003e Draw a",
          "type": "function"
        },
        "index": {
          "description": "Generate font for use in drawing and delete it afterwards The rotation angle is ignored if the font is not TrueType font e.g System font on Win32",
          "hierarchy": "Graphics HGL Draw Font",
          "module": "Graphics.HGL.Draw.Font",
          "name": "mkFont",
          "normalized": "Size-\u003eAngle-\u003eBool-\u003eBool-\u003eString-\u003e(Font-\u003eDraw a)-\u003eDraw a",
          "package": "HGL",
          "partial": "Font",
          "signature": "Size-\u003eAngle-\u003eBool-\u003eBool-\u003eString-\u003e(Font-\u003eDraw a)-\u003eDraw a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Font.html#v:mkFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the font for subsequent text, and return the previous font.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Font",
          "name": "selectFont",
          "package": "HGL",
          "signature": "Font -\u003e Draw Font",
          "source": "src/Graphics-HGL-Draw-Font.html#selectFont",
          "type": "function"
        },
        "index": {
          "description": "Set the font for subsequent text and return the previous font",
          "hierarchy": "Graphics HGL Draw Font",
          "module": "Graphics.HGL.Draw.Font",
          "name": "selectFont",
          "normalized": "Font-\u003eDraw Font",
          "package": "HGL",
          "partial": "Font",
          "signature": "Font-\u003eDraw Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Font.html#v:selectFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e monad, with graphical objects as a special case.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "Monad",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "The Draw monad with graphical objects as special case",
          "hierarchy": "Graphics HGL Draw Monad",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "Monad",
          "package": "HGL",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for sequential construction of images.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "Draw",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Draw.html#Draw",
          "type": "data"
        },
        "index": {
          "description": "Monad for sequential construction of images",
          "hierarchy": "Graphics HGL Draw Monad",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "Draw",
          "package": "HGL",
          "partial": "Draw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Monad.html#t:Draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of an image.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "Graphic",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Draw.html#Graphic",
          "type": "type"
        },
        "index": {
          "description": "An abstract representation of an image",
          "hierarchy": "Graphics HGL Draw Monad",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "Graphic",
          "package": "HGL",
          "partial": "Graphic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Monad.html#t:Graphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a drawing action in initialization and finalization actions.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "bracket",
          "package": "HGL",
          "signature": "Draw a-\u003e (a -\u003e Draw b)-\u003e (a -\u003e Draw c)-\u003e Draw c",
          "type": "function"
        },
        "index": {
          "description": "Wrap drawing action in initialization and finalization actions",
          "hierarchy": "Graphics HGL Draw Monad",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "bracket",
          "normalized": "Draw a-\u003e(a-\u003eDraw b)-\u003e(a-\u003eDraw c)-\u003eDraw c",
          "package": "HGL",
          "signature": "Draw a-\u003e(a-\u003eDraw b)-\u003e(a-\u003eDraw c)-\u003eDraw c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Monad.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e in which the inner drawing action does not\n use the result of the pre-operation.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "bracket_",
          "package": "HGL",
          "signature": "Draw a-\u003e (a -\u003e Draw b)-\u003e Draw c-\u003e Draw c",
          "type": "function"
        },
        "index": {
          "description": "variant of bracket in which the inner drawing action does not use the result of the pre-operation",
          "hierarchy": "Graphics HGL Draw Monad",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "bracket_",
          "normalized": "Draw a-\u003e(a-\u003eDraw b)-\u003eDraw c-\u003eDraw c",
          "package": "HGL",
          "signature": "Draw a-\u003e(a-\u003eDraw b)-\u003eDraw c-\u003eDraw c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Monad.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action in a drawing action.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "ioToDraw",
          "package": "HGL",
          "signature": "IO a -\u003e Draw a",
          "source": "src/Graphics-HGL-Internals-Draw.html#ioToDraw",
          "type": "function"
        },
        "index": {
          "description": "Embed an IO action in drawing action",
          "hierarchy": "Graphics HGL Draw Monad",
          "module": "Graphics.HGL.Draw.Monad",
          "name": "ioToDraw",
          "normalized": "IO a-\u003eDraw a",
          "package": "HGL",
          "partial": "To Draw",
          "signature": "IO a-\u003eDraw a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Monad.html#v:ioToDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePens, used for drawing lines.\n\u003c/p\u003e\u003cp\u003ePortability notes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e On Win32, the pen is also used to draw a line round all the filled\n   shapes --- so the pen color also affects how polygons, ellipses\n   and regions are drawn.\n\u003c/li\u003e\u003cli\u003e On Win32, the \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e is ignored (i.e. treated as \u003ccode\u003e\u003ca\u003eSolid\u003c/a\u003e\u003c/code\u003e) for pens\n   of width greater than 1.  This problem does not apply to X11.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Pen",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw-Pen.html",
          "type": "module"
        },
        "index": {
          "description": "Pens used for drawing lines Portability notes On Win32 the pen is also used to draw line round all the filled shapes so the pen color also affects how polygons ellipses and regions are drawn On Win32 the Style is ignored i.e treated as Solid for pens of width greater than This problem does not apply to X11",
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Pen",
          "package": "HGL",
          "partial": "Pen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Pen",
          "package": "HGL",
          "source": "src/Graphics-HGL-X11-Types.html#Pen",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Pen",
          "package": "HGL",
          "partial": "Pen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#t:Pen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe style of line drawn by a pen.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Style",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Style",
          "type": "data"
        },
        "index": {
          "description": "The style of line drawn by pen",
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Style",
          "package": "HGL",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Dash",
          "package": "HGL",
          "signature": "Dash",
          "source": "src/Graphics-HGL-Internals-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Dash",
          "package": "HGL",
          "partial": "Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:Dash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Pen",
          "name": "DashDot",
          "package": "HGL",
          "signature": "DashDot",
          "source": "src/Graphics-HGL-Internals-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "DashDot",
          "package": "HGL",
          "partial": "Dash Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:DashDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Pen",
          "name": "DashDotDot",
          "package": "HGL",
          "signature": "DashDotDot",
          "source": "src/Graphics-HGL-Internals-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "DashDotDot",
          "package": "HGL",
          "partial": "Dash Dot Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:DashDotDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Dot",
          "package": "HGL",
          "signature": "Dot",
          "source": "src/Graphics-HGL-Internals-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Dot",
          "package": "HGL",
          "partial": "Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:Dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Pen",
          "name": "InsideFrame",
          "package": "HGL",
          "signature": "InsideFrame",
          "source": "src/Graphics-HGL-Internals-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "InsideFrame",
          "package": "HGL",
          "partial": "Inside Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:InsideFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Null",
          "package": "HGL",
          "signature": "Null",
          "source": "src/Graphics-HGL-Internals-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Null",
          "package": "HGL",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Solid",
          "package": "HGL",
          "signature": "Solid",
          "source": "src/Graphics-HGL-Internals-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "Solid",
          "package": "HGL",
          "partial": "Solid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:Solid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "createPen",
          "package": "HGL",
          "signature": "Style -\u003e Int -\u003e RGB -\u003e IO Pen",
          "source": "src/Graphics-HGL-Draw-Pen.html#createPen",
          "type": "function"
        },
        "index": {
          "description": "Create Pen",
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "createPen",
          "normalized": "Style-\u003eInt-\u003eRGB-\u003eIO Pen",
          "package": "HGL",
          "partial": "Pen",
          "signature": "Style-\u003eInt-\u003eRGB-\u003eIO Pen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:createPen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy a \u003ccode\u003e\u003ca\u003ePen\u003c/a\u003e\u003c/code\u003e created with \u003ccode\u003e\u003ca\u003ecreatePen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "deletePen",
          "package": "HGL",
          "signature": "Pen -\u003e IO ()",
          "source": "src/Graphics-HGL-Draw-Pen.html#deletePen",
          "type": "function"
        },
        "index": {
          "description": "Destroy Pen created with createPen",
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "deletePen",
          "normalized": "Pen-\u003eIO()",
          "package": "HGL",
          "partial": "Pen",
          "signature": "Pen-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:deletePen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePen\u003c/a\u003e\u003c/code\u003e locally to a drawing.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "mkPen",
          "package": "HGL",
          "signature": "Style -\u003e Int -\u003e RGB -\u003e (Pen -\u003e Draw a) -\u003e Draw a",
          "source": "src/Graphics-HGL-Draw-Pen.html#mkPen",
          "type": "function"
        },
        "index": {
          "description": "Create Pen locally to drawing",
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "mkPen",
          "normalized": "Style-\u003eInt-\u003eRGB-\u003e(Pen-\u003eDraw a)-\u003eDraw a",
          "package": "HGL",
          "partial": "Pen",
          "signature": "Style-\u003eInt-\u003eRGB-\u003e(Pen-\u003eDraw a)-\u003eDraw a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:mkPen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003e\u003ca\u003ePen\u003c/a\u003e\u003c/code\u003e for subsequent drawing, returning the previous setting.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "selectPen",
          "package": "HGL",
          "signature": "Pen -\u003e Draw Pen",
          "source": "src/Graphics-HGL-Draw-Pen.html#selectPen",
          "type": "function"
        },
        "index": {
          "description": "Set the Pen for subsequent drawing returning the previous setting",
          "hierarchy": "Graphics HGL Draw Pen",
          "module": "Graphics.HGL.Draw.Pen",
          "name": "selectPen",
          "normalized": "Pen-\u003eDraw Pen",
          "package": "HGL",
          "partial": "Pen",
          "signature": "Pen-\u003eDraw Pen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Pen.html#v:selectPen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDrawing various shapes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Draw.Picture",
          "name": "Picture",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw-Picture.html",
          "type": "module"
        },
        "index": {
          "description": "Drawing various shapes",
          "hierarchy": "Graphics HGL Draw Picture",
          "module": "Graphics.HGL.Draw.Picture",
          "name": "Picture",
          "package": "HGL",
          "partial": "Picture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filled arc from an ellipse.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Draw.Picture\",\"Graphics.SOE\"]",
          "name": "arc",
          "package": "HGL",
          "signature": "Point-\u003e Point-\u003e Angle-\u003e Angle-\u003e Graphic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:arc\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:arc\"]"
        },
        "index": {
          "description": "filled arc from an ellipse",
          "hierarchy": "Graphics HGL Draw Picture",
          "module": "Graphics.HGL.Draw.Picture",
          "name": "arc",
          "normalized": "Point-\u003ePoint-\u003eAngle-\u003eAngle-\u003eGraphic",
          "package": "HGL",
          "signature": "Point-\u003ePoint-\u003eAngle-\u003eAngle-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filled ellipse that fits inside a rectangle defined by two\n \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003es on the window.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Draw.Picture\",\"Graphics.SOE\"]",
          "name": "ellipse",
          "package": "HGL",
          "signature": "Point-\u003e Point-\u003e Graphic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:ellipse\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:ellipse\"]"
        },
        "index": {
          "description": "filled ellipse that fits inside rectangle defined by two Point on the window",
          "hierarchy": "Graphics HGL Draw Picture",
          "module": "Graphics.HGL.Draw.Picture",
          "name": "ellipse",
          "normalized": "Point-\u003ePoint-\u003eGraphic",
          "package": "HGL",
          "signature": "Point-\u003ePoint-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line between two \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Draw.Picture\",\"Graphics.SOE\"]",
          "name": "line",
          "package": "HGL",
          "signature": "Point -\u003e Point -\u003e Graphic",
          "source": "src/Graphics-HGL-Draw-Picture.html#line",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:line\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:line\"]"
        },
        "index": {
          "description": "line between two Point",
          "hierarchy": "Graphics HGL Draw Picture",
          "module": "Graphics.HGL.Draw.Picture",
          "name": "line",
          "normalized": "Point-\u003ePoint-\u003eGraphic",
          "package": "HGL",
          "signature": "Point-\u003ePoint-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA series of (unfilled) Bezier curves defined by a list of 3\u003cem\u003en\u003c/em\u003e+1\n control \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003es.  This function is not supported on X11 (it yields\n an error message and a \u003ccode\u003e\u003ca\u003epolyline\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Draw.Picture\",\"Graphics.SOE\"]",
          "name": "polyBezier",
          "package": "HGL",
          "signature": "[Point] -\u003e Graphic",
          "source": "src/Graphics-HGL-Draw-Picture.html#polyBezier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:polyBezier\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:polyBezier\"]"
        },
        "index": {
          "description": "series of unfilled Bezier curves defined by list of control Point This function is not supported on X11 it yields an error message and polyline",
          "hierarchy": "Graphics HGL Draw Picture",
          "module": "Graphics.HGL.Draw.Picture",
          "name": "polyBezier",
          "normalized": "[Point]-\u003eGraphic",
          "package": "HGL",
          "partial": "Bezier",
          "signature": "[Point]-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:polyBezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filled polygon defined by a list of \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Draw.Picture\",\"Graphics.SOE\"]",
          "name": "polygon",
          "package": "HGL",
          "signature": "[Point] -\u003e Graphic",
          "source": "src/Graphics-HGL-Draw-Picture.html#polygon",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:polygon\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:polygon\"]"
        },
        "index": {
          "description": "filled polygon defined by list of Point",
          "hierarchy": "Graphics HGL Draw Picture",
          "module": "Graphics.HGL.Draw.Picture",
          "name": "polygon",
          "normalized": "[Point]-\u003eGraphic",
          "package": "HGL",
          "signature": "[Point]-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA series of lines through a list of \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Draw.Picture\",\"Graphics.SOE\"]",
          "name": "polyline",
          "package": "HGL",
          "signature": "[Point] -\u003e Graphic",
          "source": "src/Graphics-HGL-Draw-Picture.html#polyline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:polyline\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:polyline\"]"
        },
        "index": {
          "description": "series of lines through list of Point",
          "hierarchy": "Graphics HGL Draw Picture",
          "module": "Graphics.HGL.Draw.Picture",
          "name": "polyline",
          "normalized": "[Point]-\u003eGraphic",
          "package": "HGL",
          "signature": "[Point]-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:polyline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filled sheared ellipse that fits inside a parallelogram defined\n by three \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003es on the window.  This function is implemented using\n polygons on both Win32 and X11.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Draw.Picture\",\"Graphics.SOE\"]",
          "name": "shearEllipse",
          "package": "HGL",
          "signature": "Point-\u003e Point-\u003e Point-\u003e Graphic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:shearEllipse\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:shearEllipse\"]"
        },
        "index": {
          "description": "filled sheared ellipse that fits inside parallelogram defined by three Point on the window This function is implemented using polygons on both Win32 and X11",
          "hierarchy": "Graphics HGL Draw Picture",
          "module": "Graphics.HGL.Draw.Picture",
          "name": "shearEllipse",
          "normalized": "Point-\u003ePoint-\u003ePoint-\u003eGraphic",
          "package": "HGL",
          "partial": "Ellipse",
          "signature": "Point-\u003ePoint-\u003ePoint-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Picture.html#v:shearEllipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient representation of sets of pixels.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Draw.Region",
          "name": "Region",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw-Region.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient representation of sets of pixels",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "Region",
          "package": "HGL",
          "partial": "Region",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Region",
          "name": "Region",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw-Region.html#Region",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "Region",
          "package": "HGL",
          "partial": "Region",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#t:Region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn elliptical region that fits in the rectangle with the given points\n as opposite corners.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Region",
          "name": "ellipseRegion",
          "package": "HGL",
          "signature": "Point -\u003e Point -\u003e Region",
          "source": "src/Graphics-HGL-Draw-Region.html#ellipseRegion",
          "type": "function"
        },
        "index": {
          "description": "An elliptical region that fits in the rectangle with the given points as opposite corners",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "ellipseRegion",
          "normalized": "Point-\u003ePoint-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "Point-\u003ePoint-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:ellipseRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty region.  This is not supported on Win32.\n It is possible to use an empty rectangle region instead.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Region",
          "name": "emptyRegion",
          "package": "HGL",
          "signature": "Region",
          "source": "src/Graphics-HGL-Draw-Region.html#emptyRegion",
          "type": "function"
        },
        "index": {
          "description": "An empty region This is not supported on Win32 It is possible to use an empty rectangle region instead",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "emptyRegion",
          "package": "HGL",
          "partial": "Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:emptyRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intersection of two regions.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Region",
          "name": "intersectRegion",
          "package": "HGL",
          "signature": "Region -\u003e Region -\u003e Region",
          "source": "src/Graphics-HGL-Draw-Region.html#intersectRegion",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two regions",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "intersectRegion",
          "normalized": "Region-\u003eRegion-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "Region-\u003eRegion-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:intersectRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polygonal region defined by a list of \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Region",
          "name": "polygonRegion",
          "package": "HGL",
          "signature": "[Point] -\u003e Region",
          "source": "src/Graphics-HGL-Draw-Region.html#polygonRegion",
          "type": "function"
        },
        "index": {
          "description": "polygonal region defined by list of Point",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "polygonRegion",
          "normalized": "[Point]-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "[Point]-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:polygonRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular region, with the given points as opposite corners.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Region",
          "name": "rectangleRegion",
          "package": "HGL",
          "signature": "Point -\u003e Point -\u003e Region",
          "source": "src/Graphics-HGL-Draw-Region.html#rectangleRegion",
          "type": "function"
        },
        "index": {
          "description": "rectangular region with the given points as opposite corners",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "rectangleRegion",
          "normalized": "Point-\u003ePoint-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "Point-\u003ePoint-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:rectangleRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a \u003ccode\u003e\u003ca\u003eRegion\u003c/a\u003e\u003c/code\u003e using the current \u003ccode\u003e\u003ca\u003eBrush\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Region",
          "name": "regionToGraphic",
          "package": "HGL",
          "signature": "Region -\u003e Graphic",
          "source": "src/Graphics-HGL-Draw-Region.html#regionToGraphic",
          "type": "function"
        },
        "index": {
          "description": "Fill Region using the current Brush",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "regionToGraphic",
          "normalized": "Region-\u003eGraphic",
          "package": "HGL",
          "partial": "To Graphic",
          "signature": "Region-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:regionToGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe part of the first region that is not also in the second.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Region",
          "name": "subtractRegion",
          "package": "HGL",
          "signature": "Region -\u003e Region -\u003e Region",
          "source": "src/Graphics-HGL-Draw-Region.html#subtractRegion",
          "type": "function"
        },
        "index": {
          "description": "The part of the first region that is not also in the second",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "subtractRegion",
          "normalized": "Region-\u003eRegion-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "Region-\u003eRegion-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:subtractRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of two regions.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Region",
          "name": "unionRegion",
          "package": "HGL",
          "signature": "Region -\u003e Region -\u003e Region",
          "source": "src/Graphics-HGL-Draw-Region.html#unionRegion",
          "type": "function"
        },
        "index": {
          "description": "The union of two regions",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "unionRegion",
          "normalized": "Region-\u003eRegion-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "Region-\u003eRegion-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:unionRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe symmetric difference of two regions.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Draw.Region\",\"Graphics.SOE\"]",
          "name": "xorRegion",
          "package": "HGL",
          "signature": "Region -\u003e Region -\u003e Region",
          "source": "src/Graphics-HGL-Draw-Region.html#xorRegion",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:xorRegion\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:xorRegion\"]"
        },
        "index": {
          "description": "The symmetric difference of two regions",
          "hierarchy": "Graphics HGL Draw Region",
          "module": "Graphics.HGL.Draw.Region",
          "name": "xorRegion",
          "normalized": "Region-\u003eRegion-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "Region-\u003eRegion-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Region.html#v:xorRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDrawing text.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Text",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Drawing text",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Text",
          "package": "HGL",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow strings drawn with \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e are positioned\n relative to the specified reference point.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Alignment",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Alignment",
          "type": "type"
        },
        "index": {
          "description": "How strings drawn with text are positioned relative to the specified reference point",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Alignment",
          "package": "HGL",
          "partial": "Alignment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackground mode for drawing text.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "BkMode",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#BkMode",
          "type": "data"
        },
        "index": {
          "description": "Background mode for drawing text",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "BkMode",
          "package": "HGL",
          "partial": "Bk Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#t:BkMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal alignment of text.\n Names have a tick to distinguish them from \u003ca\u003ePrelude\u003c/a\u003e names.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "HAlign",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#HAlign",
          "type": "data"
        },
        "index": {
          "description": "Horizontal alignment of text Names have tick to distinguish them from Prelude names",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "HAlign",
          "package": "HGL",
          "partial": "HAlign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#t:HAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color, comprising red, green and blue components.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "RGB",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#RGB",
          "type": "data"
        },
        "index": {
          "description": "color comprising red green and blue components",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "RGB",
          "package": "HGL",
          "partial": "RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#t:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical alignment of text.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "VAlign",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#VAlign",
          "type": "data"
        },
        "index": {
          "description": "Vertical alignment of text",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "VAlign",
          "package": "HGL",
          "partial": "VAlign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#t:VAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealign the baseline of the text with the reference point\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Baseline",
          "package": "HGL",
          "signature": "Baseline",
          "source": "src/Graphics-HGL-Internals-Types.html#VAlign",
          "type": "function"
        },
        "index": {
          "description": "align the baseline of the text with the reference point",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Baseline",
          "package": "HGL",
          "partial": "Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:Baseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealign the bottom edge of the text with the reference point\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Bottom",
          "package": "HGL",
          "signature": "Bottom",
          "source": "src/Graphics-HGL-Internals-Types.html#VAlign",
          "type": "function"
        },
        "index": {
          "description": "align the bottom edge of the text with the reference point",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Bottom",
          "package": "HGL",
          "partial": "Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:Bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecenter the text with the reference point\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Center",
          "package": "HGL",
          "signature": "Center",
          "source": "src/Graphics-HGL-Internals-Types.html#HAlign",
          "type": "function"
        },
        "index": {
          "description": "center the text with the reference point",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Center",
          "package": "HGL",
          "partial": "Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:Center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealign the left edge of the text with the reference point\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Left'",
          "package": "HGL",
          "signature": "Left'",
          "source": "src/Graphics-HGL-Internals-Types.html#HAlign",
          "type": "function"
        },
        "index": {
          "description": "align the left edge of the text with the reference point",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Left'",
          "package": "HGL",
          "partial": "Left'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:Left-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw text on a bounding rectangle filled with the\n current background color.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Opaque",
          "package": "HGL",
          "signature": "Opaque",
          "source": "src/Graphics-HGL-Internals-Types.html#BkMode",
          "type": "function"
        },
        "index": {
          "description": "Draw text on bounding rectangle filled with the current background color",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Opaque",
          "package": "HGL",
          "partial": "Opaque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:Opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Draw.Text",
          "name": "RGB",
          "package": "HGL",
          "signature": "RGB Word8 Word8 Word8",
          "source": "src/Graphics-HGL-Internals-Types.html#RGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "RGB",
          "package": "HGL",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealign the right edge of the text with the reference point\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Right'",
          "package": "HGL",
          "signature": "Right'",
          "source": "src/Graphics-HGL-Internals-Types.html#HAlign",
          "type": "function"
        },
        "index": {
          "description": "align the right edge of the text with the reference point",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Right'",
          "package": "HGL",
          "partial": "Right'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:Right-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealign the top edge of the text with the reference point\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Top",
          "package": "HGL",
          "signature": "Top",
          "source": "src/Graphics-HGL-Internals-Types.html#VAlign",
          "type": "function"
        },
        "index": {
          "description": "align the top edge of the text with the reference point",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Top",
          "package": "HGL",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw text without a background rectangle.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Transparent",
          "package": "HGL",
          "signature": "Transparent",
          "source": "src/Graphics-HGL-Internals-Types.html#BkMode",
          "type": "function"
        },
        "index": {
          "description": "Draw text without background rectangle",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "Transparent",
          "package": "HGL",
          "partial": "Transparent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:Transparent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the background color for drawing text, returning the previous value.\n The background color is ignored when the mode is \u003ccode\u003e\u003ca\u003eTransparent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "setBkColor",
          "package": "HGL",
          "signature": "RGB -\u003e Draw RGB",
          "source": "src/Graphics-HGL-Draw-Text.html#setBkColor",
          "type": "function"
        },
        "index": {
          "description": "Set the background color for drawing text returning the previous value The background color is ignored when the mode is Transparent",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "setBkColor",
          "normalized": "RGB-\u003eDraw RGB",
          "package": "HGL",
          "partial": "Bk Color",
          "signature": "RGB-\u003eDraw RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:setBkColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the background mode for drawing text, returning the previous value.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "setBkMode",
          "package": "HGL",
          "signature": "BkMode -\u003e Draw BkMode",
          "source": "src/Graphics-HGL-Draw-Text.html#setBkMode",
          "type": "function"
        },
        "index": {
          "description": "Set the background mode for drawing text returning the previous value",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "setBkMode",
          "normalized": "BkMode-\u003eDraw BkMode",
          "package": "HGL",
          "partial": "Bk Mode",
          "signature": "BkMode-\u003eDraw BkMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:setBkMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the alignment for drawing text, returning the previous value.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "setTextAlignment",
          "package": "HGL",
          "signature": "Alignment -\u003e Draw Alignment",
          "source": "src/Graphics-HGL-Draw-Text.html#setTextAlignment",
          "type": "function"
        },
        "index": {
          "description": "Set the alignment for drawing text returning the previous value",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "setTextAlignment",
          "normalized": "Alignment-\u003eDraw Alignment",
          "package": "HGL",
          "partial": "Text Alignment",
          "signature": "Alignment-\u003eDraw Alignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:setTextAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the foreground color for drawing text, returning the previous value.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "setTextColor",
          "package": "HGL",
          "signature": "RGB -\u003e Draw RGB",
          "source": "src/Graphics-HGL-Draw-Text.html#setTextColor",
          "type": "function"
        },
        "index": {
          "description": "Set the foreground color for drawing text returning the previous value",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "setTextColor",
          "normalized": "RGB-\u003eDraw RGB",
          "package": "HGL",
          "partial": "Text Color",
          "signature": "RGB-\u003eDraw RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:setTextColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e positioned relative to the specified \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Draw.Text\",\"Graphics.SOE\"]",
          "name": "text",
          "package": "HGL",
          "signature": "Point -\u003e String -\u003e Graphic",
          "source": "src/Graphics-HGL-Draw-Text.html#text",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:text\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:text\"]"
        },
        "index": {
          "description": "Render String positioned relative to the specified Point",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "text",
          "normalized": "Point-\u003eString-\u003eGraphic",
          "package": "HGL",
          "signature": "Point-\u003eString-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etextInfo\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The offset at which the string would be drawn according to the\n     current text alignment (e.g., \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eCenter\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBaseline\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e will result\n     in an offset of (-width/2,0))\n\u003c/li\u003e\u003cli\u003e The size at which the text would be drawn using the current font.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Graphics.HGL.Draw.Text",
          "name": "textInfo",
          "package": "HGL",
          "signature": "String -\u003e Draw (Point, Size)",
          "source": "src/Graphics-HGL-Draw-Text.html#textInfo",
          "type": "function"
        },
        "index": {
          "description": "textInfo returns The offset at which the string would be drawn according to the current text alignment e.g Center Baseline will result in an offset of width The size at which the text would be drawn using the current font",
          "hierarchy": "Graphics HGL Draw Text",
          "module": "Graphics.HGL.Draw.Text",
          "name": "textInfo",
          "normalized": "String-\u003eDraw(Point,Size)",
          "package": "HGL",
          "partial": "Info",
          "signature": "String-\u003eDraw(Point,Size)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw-Text.html#v:textInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDrawing in a simple graphics library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Draw",
          "name": "Draw",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw.html",
          "type": "module"
        },
        "index": {
          "description": "Drawing in simple graphics library",
          "hierarchy": "Graphics HGL Draw",
          "module": "Graphics.HGL.Draw",
          "name": "Draw",
          "package": "HGL",
          "partial": "Draw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Draw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract representation of keys.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Key",
          "name": "Key",
          "package": "HGL",
          "source": "src/Graphics-HGL-Key.html",
          "type": "module"
        },
        "index": {
          "description": "Abstract representation of keys",
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "Key",
          "package": "HGL",
          "partial": "Key",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "Key",
          "package": "HGL",
          "source": "src/Graphics-HGL-X11-Types.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "Key",
          "package": "HGL",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isBackSpaceKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isBackSpaceKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isBackSpaceKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Back Space Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isBackSpaceKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isCharKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isCharKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isCharKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Char Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isCharKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isClearKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isClearKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isClearKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Clear Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isClearKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isControlLKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isControlLKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isControlLKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Control LKey",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isControlLKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isControlRKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isControlRKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isControlRKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Control RKey",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isControlRKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isDeleteKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isDeleteKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isDeleteKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Delete Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isDeleteKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isDownKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isDownKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isDownKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Down Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isDownKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isEndKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isEndKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isEndKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "End Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isEndKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isEscapeKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isEscapeKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isEscapeKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Escape Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isEscapeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isHomeKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isHomeKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isHomeKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Home Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isHomeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isLeftKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isLeftKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isLeftKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Left Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isLeftKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isNextKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isNextKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isNextKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Next Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isNextKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isPageDownKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isPageDownKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isPageDownKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Page Down Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isPageDownKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isPageUpKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isPageUpKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isPageUpKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Page Up Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isPageUpKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isPriorKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isPriorKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isPriorKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Prior Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isPriorKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isReturnKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isReturnKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isReturnKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Return Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isReturnKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isRightKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isRightKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isRightKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Right Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isRightKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isShiftLKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isShiftLKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isShiftLKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Shift LKey",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isShiftLKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isShiftRKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isShiftRKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isShiftRKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Shift RKey",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isShiftRKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isTabKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isTabKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isTabKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Tab Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isTabKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Key",
          "name": "isUpKey",
          "package": "HGL",
          "signature": "Key -\u003e Bool",
          "source": "src/Graphics-HGL-Key.html#isUpKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "isUpKey",
          "normalized": "Key-\u003eBool",
          "package": "HGL",
          "partial": "Up Key",
          "signature": "Key-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:isUpKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a character key to a character.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Key",
          "name": "keyToChar",
          "package": "HGL",
          "signature": "Key -\u003e Char",
          "source": "src/Graphics-HGL-Key.html#keyToChar",
          "type": "function"
        },
        "index": {
          "description": "Converts character key to character",
          "hierarchy": "Graphics HGL Key",
          "module": "Graphics.HGL.Key",
          "name": "keyToChar",
          "normalized": "Key-\u003eChar",
          "package": "HGL",
          "partial": "To Char",
          "signature": "Key-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Key.html#v:keyToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRunning graphical actions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Run",
          "name": "Run",
          "package": "HGL",
          "source": "src/Graphics-HGL-Run.html",
          "type": "module"
        },
        "index": {
          "description": "Running graphical actions",
          "hierarchy": "Graphics HGL Run",
          "module": "Graphics.HGL.Run",
          "name": "Run",
          "package": "HGL",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the system to do graphics, run an action while collecting\n user interface events and forwarding them to the action, and then clean\n up everything else at the end.\n The other functions of the library may only be used inside \u003ccode\u003e\u003ca\u003erunGraphics\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Run\",\"Graphics.SOE\"]",
          "name": "runGraphics",
          "package": "HGL",
          "signature": "IO () -\u003e IO ()",
          "source": "src/Graphics-HGL-Run.html#runGraphics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Run.html#v:runGraphics\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:runGraphics\"]"
        },
        "index": {
          "description": "Initialize the system to do graphics run an action while collecting user interface events and forwarding them to the action and then clean up everything else at the end The other functions of the library may only be used inside runGraphics",
          "hierarchy": "Graphics HGL Run",
          "module": "Graphics.HGL.Run",
          "name": "runGraphics",
          "normalized": "IO()-\u003eIO()",
          "package": "HGL",
          "partial": "Graphics",
          "signature": "IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Run.html#v:runGraphics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for units in a simple graphics library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Units",
          "name": "Units",
          "package": "HGL",
          "source": "src/Graphics-HGL-Units.html",
          "type": "module"
        },
        "index": {
          "description": "Types for units in simple graphics library",
          "hierarchy": "Graphics HGL Units",
          "module": "Graphics.HGL.Units",
          "name": "Units",
          "package": "HGL",
          "partial": "Units",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Units.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn angle in degrees (0 to 360).\n\u003c/p\u003e",
          "module": "Graphics.HGL.Units",
          "name": "Angle",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Angle",
          "type": "type"
        },
        "index": {
          "description": "An angle in degrees to",
          "hierarchy": "Graphics HGL Units",
          "module": "Graphics.HGL.Units",
          "name": "Angle",
          "package": "HGL",
          "partial": "Angle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Units.html#t:Angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position within a window, measured in pixels to the right and down\n from the top left corner.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Units",
          "name": "Point",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Point",
          "type": "type"
        },
        "index": {
          "description": "position within window measured in pixels to the right and down from the top left corner",
          "hierarchy": "Graphics HGL Units",
          "module": "Graphics.HGL.Units",
          "name": "Point",
          "package": "HGL",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Units.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (width, height) pair, both measured in pixels.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Units",
          "name": "Size",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Size",
          "type": "type"
        },
        "index": {
          "description": "width height pair both measured in pixels",
          "hierarchy": "Graphics HGL Units",
          "module": "Graphics.HGL.Units",
          "name": "Size",
          "package": "HGL",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Units.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime, measured in milliseconds.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Units",
          "name": "Time",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Time",
          "type": "type"
        },
        "index": {
          "description": "Time measured in milliseconds",
          "hierarchy": "Graphics HGL Units",
          "module": "Graphics.HGL.Units",
          "name": "Time",
          "package": "HGL",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Units.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for a simple graphics library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "Utils",
          "package": "HGL",
          "source": "src/Graphics-HGL-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions for simple graphics library",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "Utils",
          "package": "HGL",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamed colors.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "Color",
          "package": "HGL",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "data"
        },
        "index": {
          "description": "Named colors",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "Color",
          "package": "HGL",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "Black",
          "package": "HGL",
          "signature": "Black",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Black\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Black\"]"
        },
        "index": {
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "Black",
          "package": "HGL",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "Blue",
          "package": "HGL",
          "signature": "Blue",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Blue\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Blue\"]"
        },
        "index": {
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "Blue",
          "package": "HGL",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "Cyan",
          "package": "HGL",
          "signature": "Cyan",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Cyan\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Cyan\"]"
        },
        "index": {
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "Cyan",
          "package": "HGL",
          "partial": "Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "Green",
          "package": "HGL",
          "signature": "Green",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Green\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Green\"]"
        },
        "index": {
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "Green",
          "package": "HGL",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "Magenta",
          "package": "HGL",
          "signature": "Magenta",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Magenta\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Magenta\"]"
        },
        "index": {
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "Magenta",
          "package": "HGL",
          "partial": "Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "Red",
          "package": "HGL",
          "signature": "Red",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Red\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Red\"]"
        },
        "index": {
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "Red",
          "package": "HGL",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "White",
          "package": "HGL",
          "signature": "White",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:White\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:White\"]"
        },
        "index": {
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "White",
          "package": "HGL",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "Yellow",
          "package": "HGL",
          "signature": "Yellow",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Yellow\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Yellow\"]"
        },
        "index": {
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "Yellow",
          "package": "HGL",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:Yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErase all drawing in the window.\n (That is, set the \u003ccode\u003e\u003ca\u003eGraphic\u003c/a\u003e\u003c/code\u003e held by the window to \u003ccode\u003e\u003ca\u003eemptyGraphic\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "clearWindow",
          "package": "HGL",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-HGL-Utils.html#clearWindow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:clearWindow\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:clearWindow\"]"
        },
        "index": {
          "description": "Erase all drawing in the window That is set the Graphic held by the window to emptyGraphic",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "clearWindow",
          "normalized": "Window-\u003eIO()",
          "package": "HGL",
          "partial": "Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:clearWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping of \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e names to \u003ccode\u003e\u003ca\u003eRGB\u003c/a\u003e\u003c/code\u003e triples.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "colorList",
          "package": "HGL",
          "signature": "[(Color, RGB)]",
          "source": "src/Graphics-HGL-Utils.html#colorList",
          "type": "function"
        },
        "index": {
          "description": "mapping of Color names to RGB triples",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "colorList",
          "normalized": "[(Color,RGB)]",
          "package": "HGL",
          "partial": "List",
          "signature": "[(Color,RGB)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:colorList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping of \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e names to \u003ccode\u003e\u003ca\u003eRGB\u003c/a\u003e\u003c/code\u003e triples.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "colorTable",
          "package": "HGL",
          "signature": "Array Color RGB",
          "source": "src/Graphics-HGL-Utils.html#colorTable",
          "type": "function"
        },
        "index": {
          "description": "mapping of Color names to RGB triples",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "colorTable",
          "package": "HGL",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:colorTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw the given graphic on the window, on top of anything that is\n already there.\n (That is, combine the given \u003ccode\u003e\u003ca\u003eGraphic\u003c/a\u003e\u003c/code\u003e and the one held by the window\n using \u003ccode\u003e\u003ca\u003eoverGraphic\u003c/a\u003e\u003c/code\u003e, store the result in the window, and display it.)\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "drawInWindow",
          "package": "HGL",
          "signature": "Window -\u003e Graphic -\u003e IO ()",
          "source": "src/Graphics-HGL-Utils.html#drawInWindow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:drawInWindow\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:drawInWindow\"]"
        },
        "index": {
          "description": "Draw the given graphic on the window on top of anything that is already there That is combine the given Graphic and the one held by the window using overGraphic store the result in the window and display it",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "drawInWindow",
          "normalized": "Window-\u003eGraphic-\u003eIO()",
          "package": "HGL",
          "partial": "In Window",
          "signature": "Window-\u003eGraphic-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:drawInWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty drawing.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "emptyGraphic",
          "package": "HGL",
          "signature": "Graphic",
          "source": "src/Graphics-HGL-Utils.html#emptyGraphic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:emptyGraphic\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:emptyGraphic\"]"
        },
        "index": {
          "description": "An empty drawing",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "emptyGraphic",
          "package": "HGL",
          "partial": "Graphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:emptyGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a mouse button to be pressed or released,\n and return the position of the mouse cursor.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "getButton",
          "package": "HGL",
          "signature": "Window-\u003e Bool-\u003e Bool-\u003e IO Point",
          "type": "function"
        },
        "index": {
          "description": "Wait for mouse button to be pressed or released and return the position of the mouse cursor",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "getButton",
          "normalized": "Window-\u003eBool-\u003eBool-\u003eIO Point",
          "package": "HGL",
          "partial": "Button",
          "signature": "Window-\u003eBool-\u003eBool-\u003eIO Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:getButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until a key is pressed and released.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "getKey",
          "package": "HGL",
          "signature": "Window -\u003e IO Key",
          "source": "src/Graphics-HGL-Utils.html#getKey",
          "type": "function"
        },
        "index": {
          "description": "Wait until key is pressed and released",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "getKey",
          "normalized": "Window-\u003eIO Key",
          "package": "HGL",
          "partial": "Key",
          "signature": "Window-\u003eIO Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:getKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until a key is pressed (if the second argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e)\n or released (otherwise).\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "getKeyEx",
          "package": "HGL",
          "signature": "Window -\u003e Bool -\u003e IO Key",
          "source": "src/Graphics-HGL-Utils.html#getKeyEx",
          "type": "function"
        },
        "index": {
          "description": "Wait until key is pressed if the second argument is True or released otherwise",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "getKeyEx",
          "normalized": "Window-\u003eBool-\u003eIO Key",
          "package": "HGL",
          "partial": "Key Ex",
          "signature": "Window-\u003eBool-\u003eIO Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:getKeyEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a press of the left mouse button,\n and return the position of the mouse cursor.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "getLBP",
          "package": "HGL",
          "signature": "Window -\u003e IO Point",
          "source": "src/Graphics-HGL-Utils.html#getLBP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:getLBP\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:getLBP\"]"
        },
        "index": {
          "description": "Wait for press of the left mouse button and return the position of the mouse cursor",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "getLBP",
          "normalized": "Window-\u003eIO Point",
          "package": "HGL",
          "partial": "LBP",
          "signature": "Window-\u003eIO Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:getLBP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a press of the right mouse button,\n and return the position of the mouse cursor.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "getRBP",
          "package": "HGL",
          "signature": "Window -\u003e IO Point",
          "source": "src/Graphics-HGL-Utils.html#getRBP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:getRBP\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:getRBP\"]"
        },
        "index": {
          "description": "Wait for press of the right mouse button and return the position of the mouse cursor",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "getRBP",
          "normalized": "Window-\u003eIO Point",
          "package": "HGL",
          "partial": "RBP",
          "signature": "Window-\u003eIO Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:getRBP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current size of the window.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "getWindowSize",
          "package": "HGL",
          "signature": "Window -\u003e IO Size",
          "source": "src/Graphics-HGL-Utils.html#getWindowSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:getWindowSize\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:getWindowSize\"]"
        },
        "index": {
          "description": "The current size of the window",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "getWindowSize",
          "normalized": "Window-\u003eIO Size",
          "package": "HGL",
          "partial": "Window Size",
          "signature": "Window-\u003eIO Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:getWindowSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a window with the given title and size.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "openWindow",
          "package": "HGL",
          "signature": "Title -\u003e Size -\u003e IO Window",
          "source": "src/Graphics-HGL-Utils.html#openWindow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:openWindow\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:openWindow\"]"
        },
        "index": {
          "description": "Create window with the given title and size",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "openWindow",
          "normalized": "Title-\u003eSize-\u003eIO Window",
          "package": "HGL",
          "partial": "Window",
          "signature": "Title-\u003eSize-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:openWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA composite drawing made by overlaying the first argument on the second.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "overGraphic",
          "package": "HGL",
          "signature": "Graphic -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#overGraphic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:overGraphic\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:overGraphic\"]"
        },
        "index": {
          "description": "composite drawing made by overlaying the first argument on the second",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "overGraphic",
          "normalized": "Graphic-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "Graphic",
          "signature": "Graphic-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:overGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverlay a list of drawings.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "overGraphics",
          "package": "HGL",
          "signature": "[Graphic] -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#overGraphics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:overGraphics\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:overGraphics\"]"
        },
        "index": {
          "description": "Overlay list of drawings",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "overGraphics",
          "normalized": "[Graphic]-\u003eGraphic",
          "package": "HGL",
          "partial": "Graphics",
          "signature": "[Graphic]-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:overGraphics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun two \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions in parallel and terminate when both actions terminate.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "par",
          "package": "HGL",
          "signature": "IO a -\u003e IO b -\u003e IO (a, b)",
          "source": "src/Graphics-HGL-Utils.html#par",
          "type": "function"
        },
        "index": {
          "description": "Run two IO actions in parallel and terminate when both actions terminate",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "par",
          "normalized": "IO a-\u003eIO b-\u003eIO(a,b)",
          "package": "HGL",
          "signature": "IO a-\u003eIO b-\u003eIO(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun several \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions in parallel and terminate when all actions\n terminate, discarding the results of the actions.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "parMany",
          "package": "HGL",
          "signature": "[IO ()] -\u003e IO ()",
          "source": "src/Graphics-HGL-Utils.html#parMany",
          "type": "function"
        },
        "index": {
          "description": "Run several IO actions in parallel and terminate when all actions terminate discarding the results of the actions",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "parMany",
          "normalized": "[IO()]-\u003eIO()",
          "package": "HGL",
          "partial": "Many",
          "signature": "[IO()]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:parMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun two \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions in parallel and terminate when both actions terminate,\n discarding the results of the actions.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "par_",
          "package": "HGL",
          "signature": "IO a -\u003e IO b -\u003e IO ()",
          "source": "src/Graphics-HGL-Utils.html#par_",
          "type": "function"
        },
        "index": {
          "description": "Run two IO actions in parallel and terminate when both actions terminate discarding the results of the actions",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "par_",
          "normalized": "IO a-\u003eIO b-\u003eIO()",
          "package": "HGL",
          "signature": "IO a-\u003eIO b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:par_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combination of \u003ccode\u003e\u003ca\u003erunGraphics\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewithWindow_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "runWindow",
          "package": "HGL",
          "signature": "Title -\u003e Size -\u003e (Window -\u003e IO a) -\u003e IO ()",
          "source": "src/Graphics-HGL-Utils.html#runWindow",
          "type": "function"
        },
        "index": {
          "description": "combination of runGraphics and withWindow",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "runWindow",
          "normalized": "Title-\u003eSize-\u003e(Window-\u003eIO a)-\u003eIO()",
          "package": "HGL",
          "partial": "Window",
          "signature": "Title-\u003eSize-\u003e(Window-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:runWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a translated character (from a key press).\n Use in preference to \u003ccode\u003e\u003ca\u003egetKey\u003c/a\u003e\u003c/code\u003e if the aim is to read text.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "wGetChar",
          "package": "HGL",
          "signature": "Window -\u003e IO Char",
          "source": "src/Graphics-HGL-Utils.html#wGetChar",
          "type": "function"
        },
        "index": {
          "description": "Wait for translated character from key press Use in preference to getKey if the aim is to read text",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "wGetChar",
          "normalized": "Window-\u003eIO Char",
          "package": "HGL",
          "partial": "Get Char",
          "signature": "Window-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:wGetChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default background color for drawing text with background\n mode \u003ccode\u003e\u003ca\u003eOpaque\u003c/a\u003e\u003c/code\u003e.  The background color is ignored when the mode is\n \u003ccode\u003e\u003ca\u003eTransparent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withBkColor",
          "package": "HGL",
          "signature": "RGB -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#withBkColor",
          "type": "function"
        },
        "index": {
          "description": "Set the default background color for drawing text with background mode Opaque The background color is ignored when the mode is Transparent",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withBkColor",
          "normalized": "RGB-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "Bk Color",
          "signature": "RGB-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withBkColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default background mode for drawing text.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withBkMode",
          "package": "HGL",
          "signature": "BkMode -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#withBkMode",
          "type": "function"
        },
        "index": {
          "description": "Set the default background mode for drawing text",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withBkMode",
          "normalized": "BkMode-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "Bk Mode",
          "signature": "BkMode-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withBkMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default brush for filling shapes.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withBrush",
          "package": "HGL",
          "signature": "Brush -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#withBrush",
          "type": "function"
        },
        "index": {
          "description": "Set the default brush for filling shapes",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withBrush",
          "normalized": "Brush-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "Brush",
          "signature": "Brush-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withBrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default drawing color for a \u003ccode\u003e\u003ca\u003eGraphic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Utils\",\"Graphics.SOE\"]",
          "name": "withColor",
          "package": "HGL",
          "signature": "Color -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#withColor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withColor\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:withColor\"]"
        },
        "index": {
          "description": "Set the default drawing color for Graphic",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withColor",
          "normalized": "Color-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "Color",
          "signature": "Color-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default font for a drawing.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withFont",
          "package": "HGL",
          "signature": "Font -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#withFont",
          "type": "function"
        },
        "index": {
          "description": "Set the default font for drawing",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withFont",
          "normalized": "Font-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "Font",
          "signature": "Font-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default pen for drawing lines.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withPen",
          "package": "HGL",
          "signature": "Pen -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#withPen",
          "type": "function"
        },
        "index": {
          "description": "Set the default pen for drawing lines",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withPen",
          "normalized": "Pen-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "Pen",
          "signature": "Pen-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withPen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function that sets the brush,\n pen and text colors to the same value.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withRGB",
          "package": "HGL",
          "signature": "RGB -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#withRGB",
          "type": "function"
        },
        "index": {
          "description": "convenience function that sets the brush pen and text colors to the same value",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withRGB",
          "normalized": "RGB-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "RGB",
          "signature": "RGB-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default alignment of text in a drawing.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withTextAlignment",
          "package": "HGL",
          "signature": "Alignment -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#withTextAlignment",
          "type": "function"
        },
        "index": {
          "description": "Set the default alignment of text in drawing",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withTextAlignment",
          "normalized": "Alignment-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "Text Alignment",
          "signature": "Alignment-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withTextAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default color for drawing text.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withTextColor",
          "package": "HGL",
          "signature": "RGB -\u003e Graphic -\u003e Graphic",
          "source": "src/Graphics-HGL-Utils.html#withTextColor",
          "type": "function"
        },
        "index": {
          "description": "Set the default color for drawing text",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withTextColor",
          "normalized": "RGB-\u003eGraphic-\u003eGraphic",
          "package": "HGL",
          "partial": "Text Color",
          "signature": "RGB-\u003eGraphic-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withTextColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action inside a new window, ensuring that the window is destroyed\n on exit.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withWindow",
          "package": "HGL",
          "signature": "Title -\u003e Size -\u003e (Window -\u003e IO a) -\u003e IO a",
          "source": "src/Graphics-HGL-Utils.html#withWindow",
          "type": "function"
        },
        "index": {
          "description": "Run an action inside new window ensuring that the window is destroyed on exit",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withWindow",
          "normalized": "Title-\u003eSize-\u003e(Window-\u003eIO a)-\u003eIO a",
          "package": "HGL",
          "partial": "Window",
          "signature": "Title-\u003eSize-\u003e(Window-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ewithWindow\u003c/a\u003e\u003c/code\u003e that ignores the result of the action.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Utils",
          "name": "withWindow_",
          "package": "HGL",
          "signature": "Title -\u003e Size -\u003e (Window -\u003e IO a) -\u003e IO ()",
          "source": "src/Graphics-HGL-Utils.html#withWindow_",
          "type": "function"
        },
        "index": {
          "description": "variant of withWindow that ignores the result of the action",
          "hierarchy": "Graphics HGL Utils",
          "module": "Graphics.HGL.Utils",
          "name": "withWindow_",
          "normalized": "Title-\u003eSize-\u003e(Window-\u003eIO a)-\u003eIO()",
          "package": "HGL",
          "partial": "Window",
          "signature": "Title-\u003eSize-\u003e(Window-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Utils.html#v:withWindow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWindows in a simple graphics library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL.Window",
          "name": "Window",
          "package": "HGL",
          "source": "src/Graphics-HGL-Window.html",
          "type": "module"
        },
        "index": {
          "description": "Windows in simple graphics library",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Window",
          "package": "HGL",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA user interface event.\n\u003c/p\u003e\u003cp\u003eNotes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Programmers should assume that the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e datatype will be\n   extended in the not-too-distant future and that individual events\n   may change slightly.  As a minimum, you should add a \"match anything\"\n   alternative to any function which pattern matches against \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003cli\u003e X11 systems typically have three button mice.  Button 1 is used as the\n   left button, button 3 as the right button and button 2 (the middle\n   button) is ignored.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.HGL.Window",
          "name": "Event",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "user interface event Notes Programmers should assume that the Event datatype will be extended in the not-too-distant future and that individual events may change slightly As minimum you should add match anything alternative to any function which pattern matches against Event X11 systems typically have three button mice Button is used as the left button button as the right button and button the middle button is ignored",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Event",
          "package": "HGL",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to draw in a window.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "RedrawMode",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#RedrawMode",
          "type": "data"
        },
        "index": {
          "description": "How to draw in window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "RedrawMode",
          "package": "HGL",
          "partial": "Redraw Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#t:RedrawMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle of a window.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "Title",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Title",
          "type": "type"
        },
        "index": {
          "description": "Title of window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Title",
          "package": "HGL",
          "partial": "Title",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Window",
          "name": "Window",
          "package": "HGL",
          "source": "src/Graphics-HGL-X11-Window.html#Window",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Window",
          "package": "HGL",
          "partial": "Window",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#t:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when a mouse button is pressed or released.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "Button",
          "package": "HGL",
          "signature": "Button",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when mouse button is pressed or released",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Button",
          "package": "HGL",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea properly translated character, sent after\n a key press.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "Char",
          "package": "HGL",
          "signature": "Char",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "properly translated character sent after key press",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Char",
          "package": "HGL",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when the window is closed.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "Closed",
          "package": "HGL",
          "signature": "Closed",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when the window is closed",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Closed",
          "package": "HGL",
          "partial": "Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:Closed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse a \u003cem\u003edouble buffer\u003c/em\u003e to reduce flicker.\n You should probably use this for animations.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "DoubleBuffered",
          "package": "HGL",
          "signature": "DoubleBuffered",
          "source": "src/Graphics-HGL-Internals-Types.html#RedrawMode",
          "type": "function"
        },
        "index": {
          "description": "use double buffer to reduce flicker You should probably use this for animations",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "DoubleBuffered",
          "package": "HGL",
          "partial": "Double Buffered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:DoubleBuffered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when a key was pressed or released.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "Key",
          "package": "HGL",
          "signature": "Key",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when key was pressed or released",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Key",
          "package": "HGL",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when the mouse is moved inside the window.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "MouseMove",
          "package": "HGL",
          "signature": "MouseMove",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when the mouse is moved inside the window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "MouseMove",
          "package": "HGL",
          "partial": "Mouse Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:MouseMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when the window is resized.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "Resize",
          "package": "HGL",
          "signature": "Resize",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when the window is resized",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Resize",
          "package": "HGL",
          "partial": "Resize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:Resize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edraw directly to the window.\n This runs slightly faster but is more prone\n to flicker.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "Unbuffered",
          "package": "HGL",
          "signature": "Unbuffered",
          "source": "src/Graphics-HGL-Internals-Types.html#RedrawMode",
          "type": "function"
        },
        "index": {
          "description": "draw directly to the window This runs slightly faster but is more prone to flicker",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "Unbuffered",
          "package": "HGL",
          "partial": "Unbuffered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:Unbuffered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe character represented by a key combination\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "char",
          "package": "HGL",
          "signature": "Char",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "the character represented by key combination",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "char",
          "package": "HGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the window.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Window\",\"Graphics.SOE\"]",
          "name": "closeWindow",
          "package": "HGL",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-HGL-Window.html#closeWindow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:closeWindow\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:closeWindow\"]"
        },
        "index": {
          "description": "Close the window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "closeWindow",
          "normalized": "Window-\u003eIO()",
          "package": "HGL",
          "partial": "Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:closeWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.HGL.Window",
          "name": "directDraw",
          "package": "HGL",
          "signature": "Window -\u003e Graphic -\u003e IO ()",
          "source": "src/Graphics-HGL-Window.html#directDraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "directDraw",
          "normalized": "Window-\u003eGraphic-\u003eIO()",
          "package": "HGL",
          "partial": "Draw",
          "signature": "Window-\u003eGraphic-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:directDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current drawing in a window.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "getGraphic",
          "package": "HGL",
          "signature": "Window -\u003e IO Graphic",
          "source": "src/Graphics-HGL-Window.html#getGraphic",
          "type": "function"
        },
        "index": {
          "description": "Get the current drawing in window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "getGraphic",
          "normalized": "Window-\u003eIO Graphic",
          "package": "HGL",
          "partial": "Graphic",
          "signature": "Window-\u003eIO Graphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:getGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime in milliseconds since some arbitrary epoch.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "getTime",
          "package": "HGL",
          "signature": "IO Integer",
          "source": "src/Graphics-HGL-Internals-Types.html#getTime",
          "type": "function"
        },
        "index": {
          "description": "Time in milliseconds since some arbitrary epoch",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "getTime",
          "package": "HGL",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:getTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for the next event on the given window.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "getWindowEvent",
          "package": "HGL",
          "signature": "Window -\u003e IO Event",
          "source": "src/Graphics-HGL-Window.html#getWindowEvent",
          "type": "function"
        },
        "index": {
          "description": "Wait for the next event on the given window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "getWindowEvent",
          "normalized": "Window-\u003eIO Event",
          "package": "HGL",
          "partial": "Window Event",
          "signature": "Window-\u003eIO Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:getWindowEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe position of the top left corner of the window on the screen,\n and the size of the window.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "getWindowRect",
          "package": "HGL",
          "signature": "Window -\u003e IO (Point, Size)",
          "source": "src/Graphics-HGL-Window.html#getWindowRect",
          "type": "function"
        },
        "index": {
          "description": "The position of the top left corner of the window on the screen and the size of the window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "getWindowRect",
          "normalized": "Window-\u003eIO(Point,Size)",
          "package": "HGL",
          "partial": "Window Rect",
          "signature": "Window-\u003eIO(Point,Size)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:getWindowRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for the next tick event from the timer on the given window.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Window\",\"Graphics.SOE\"]",
          "name": "getWindowTick",
          "package": "HGL",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-HGL-Window.html#getWindowTick",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:getWindowTick\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:getWindowTick\"]"
        },
        "index": {
          "description": "Wait for the next tick event from the timer on the given window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "getWindowTick",
          "normalized": "Window-\u003eIO()",
          "package": "HGL",
          "partial": "Window Tick",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:getWindowTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the button was pressed;\n otherwise it was released\n\u003c/p\u003e\u003cp\u003eif \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the key was pressed;\n otherwise it was released\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "isDown",
          "package": "HGL",
          "signature": "Bool",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "if True the button was pressed otherwise it was released if True the key was pressed otherwise it was released",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "isDown",
          "package": "HGL",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:isDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, it was the left button\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "isLeft",
          "package": "HGL",
          "signature": "Bool",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "if True it was the left button",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "isLeft",
          "package": "HGL",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresentation of the keyboard keys pressed\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "keysym",
          "package": "HGL",
          "signature": "Key",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "representation of the keyboard keys pressed",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "keysym",
          "package": "HGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:keysym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for a pending event on the given window.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "maybeGetWindowEvent",
          "package": "HGL",
          "signature": "Window -\u003e IO (Maybe Event)",
          "source": "src/Graphics-HGL-Window.html#maybeGetWindowEvent",
          "type": "function"
        },
        "index": {
          "description": "Check for pending event on the given window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "maybeGetWindowEvent",
          "normalized": "Window-\u003eIO(Maybe Event)",
          "package": "HGL",
          "partial": "Get Window Event",
          "signature": "Window-\u003eIO(Maybe Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:maybeGetWindowEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the drawing for a window.\n Note that this does not force a redraw.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "modGraphic",
          "package": "HGL",
          "signature": "Window -\u003e (Graphic -\u003e Graphic) -\u003e IO ()",
          "source": "src/Graphics-HGL-Window.html#modGraphic",
          "type": "function"
        },
        "index": {
          "description": "Update the drawing for window Note that this does not force redraw",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "modGraphic",
          "normalized": "Window-\u003e(Graphic-\u003eGraphic)-\u003eIO()",
          "package": "HGL",
          "partial": "Graphic",
          "signature": "Window-\u003e(Graphic-\u003eGraphic)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:modGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral window creation.\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "openWindowEx",
          "package": "HGL",
          "signature": "Title-\u003e Maybe Point-\u003e Size-\u003e RedrawMode-\u003e Maybe Time-\u003e IO Window",
          "type": "function"
        },
        "index": {
          "description": "General window creation",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "openWindowEx",
          "normalized": "Title-\u003eMaybe Point-\u003eSize-\u003eRedrawMode-\u003eMaybe Time-\u003eIO Window",
          "package": "HGL",
          "partial": "Window Ex",
          "signature": "Title-\u003eMaybe Point-\u003eSize-\u003eRedrawMode-\u003eMaybe Time-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:openWindowEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of the mouse cursor after the movement\n\u003c/p\u003e\u003cp\u003ethe position of the mouse cursor\n\u003c/p\u003e",
          "module": "Graphics.HGL.Window",
          "name": "pt",
          "package": "HGL",
          "signature": "Point",
          "source": "src/Graphics-HGL-Internals-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "the position of the mouse cursor after the movement the position of the mouse cursor",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "pt",
          "package": "HGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current drawing in a window.\n\u003c/p\u003e",
          "module": "[\"Graphics.HGL.Window\",\"Graphics.SOE\"]",
          "name": "setGraphic",
          "package": "HGL",
          "signature": "Window -\u003e Graphic -\u003e IO ()",
          "source": "src/Graphics-HGL-Window.html#setGraphic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:setGraphic\",\"http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:setGraphic\"]"
        },
        "index": {
          "description": "Set the current drawing in window",
          "hierarchy": "Graphics HGL Window",
          "module": "Graphics.HGL.Window",
          "name": "setGraphic",
          "normalized": "Window-\u003eGraphic-\u003eIO()",
          "package": "HGL",
          "partial": "Graphic",
          "signature": "Window-\u003eGraphic-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL-Window.html#v:setGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple graphics library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.HGL",
          "name": "HGL",
          "package": "HGL",
          "source": "src/Graphics-HGL.html",
          "type": "module"
        },
        "index": {
          "description": "simple graphics library",
          "hierarchy": "Graphics HGL",
          "module": "Graphics.HGL",
          "name": "HGL",
          "package": "HGL",
          "partial": "HGL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-HGL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe graphics library used in \u003cem\u003eThe Haskell School of Expression\u003c/em\u003e,\n by Paul Hudak, cf \u003ca\u003ehttp://www.haskell.org/soe/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNotes:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This module is called \u003ccode\u003eSOEGraphics\u003c/code\u003e in the book.  It is a cut\n   down version of \u003ca\u003eGraphics.HGL\u003c/a\u003e, with the interface frozen to match\n   the book.\n\u003c/li\u003e\u003cli\u003e In chapters 13, 17 and 19 of the book, there are imports of modules\n   \u003ccode\u003eWin32Misc\u003c/code\u003e and \u003ccode\u003eWord\u003c/code\u003e.  These should be omitted, as \u003ccode\u003e\u003ca\u003etimeGetTime\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003eword32ToInt\u003c/a\u003e\u003c/code\u003e are provided by this module.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Graphics.SOE",
          "name": "SOE",
          "package": "HGL",
          "source": "src/Graphics-SOE.html",
          "type": "module"
        },
        "index": {
          "description": "The graphics library used in The Haskell School of Expression by Paul Hudak cf http www.haskell.org soe Notes This module is called SOEGraphics in the book It is cut down version of Graphics.HGL with the interface frozen to match the book In chapters and of the book there are imports of modules Win32Misc and Word These should be omitted as timeGetTime and word32ToInt are provided by this module",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "SOE",
          "package": "HGL",
          "partial": "SOE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn angle in degrees (0 to 360).\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Angle",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Angle",
          "type": "type"
        },
        "index": {
          "description": "An angle in degrees to",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Angle",
          "package": "HGL",
          "partial": "Angle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamed colors.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Color",
          "package": "HGL",
          "source": "src/Graphics-HGL-Utils.html#Color",
          "type": "data"
        },
        "index": {
          "description": "Named colors",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Color",
          "package": "HGL",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser interface events\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Event",
          "package": "HGL",
          "source": "src/Graphics-SOE.html#Event",
          "type": "data"
        },
        "index": {
          "description": "User interface events",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Event",
          "package": "HGL",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of an image.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Graphic",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Draw.html#Graphic",
          "type": "type"
        },
        "index": {
          "description": "An abstract representation of an image",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Graphic",
          "package": "HGL",
          "partial": "Graphic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Graphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position within a window, measured in pixels to the right and down\n from the top left corner.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Point",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Point",
          "type": "type"
        },
        "index": {
          "description": "position within window measured in pixels to the right and down from the top left corner",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Point",
          "package": "HGL",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to draw in a window.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "RedrawMode",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#RedrawMode",
          "type": "data"
        },
        "index": {
          "description": "How to draw in window",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "RedrawMode",
          "package": "HGL",
          "partial": "Redraw Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:RedrawMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SOE",
          "name": "Region",
          "package": "HGL",
          "source": "src/Graphics-HGL-Draw-Region.html#Region",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Region",
          "package": "HGL",
          "partial": "Region",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (width, height) pair, both measured in pixels.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Size",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Size",
          "type": "type"
        },
        "index": {
          "description": "width height pair both measured in pixels",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Size",
          "package": "HGL",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle of a window.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Title",
          "package": "HGL",
          "source": "src/Graphics-HGL-Internals-Types.html#Title",
          "type": "type"
        },
        "index": {
          "description": "Title of window",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Title",
          "package": "HGL",
          "partial": "Title",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SOE",
          "name": "Window",
          "package": "HGL",
          "source": "src/Graphics-HGL-X11-Window.html#Window",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Window",
          "package": "HGL",
          "partial": "Window",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Word32",
          "package": "HGL",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Word32",
          "package": "HGL",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#t:Word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when a mouse button is pressed or released.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Button",
          "package": "HGL",
          "signature": "Button",
          "source": "src/Graphics-SOE.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when mouse button is pressed or released",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Button",
          "package": "HGL",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when the window is closed.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Closed",
          "package": "HGL",
          "signature": "Closed",
          "source": "src/Graphics-SOE.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when the window is closed",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Closed",
          "package": "HGL",
          "partial": "Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Closed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when a key was pressed or released.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Key",
          "package": "HGL",
          "signature": "Key",
          "source": "src/Graphics-SOE.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when key was pressed or released",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Key",
          "package": "HGL",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when the mouse is moved inside the window.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "MouseMove",
          "package": "HGL",
          "signature": "MouseMove",
          "source": "src/Graphics-SOE.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when the mouse is moved inside the window",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "MouseMove",
          "package": "HGL",
          "partial": "Mouse Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:MouseMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoccurs when the window is resized.\n The new window size can be discovered using\n \u003ccode\u003e\u003ca\u003egetWindowSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "Resize",
          "package": "HGL",
          "signature": "Resize",
          "source": "src/Graphics-SOE.html#Event",
          "type": "function"
        },
        "index": {
          "description": "occurs when the window is resized The new window size can be discovered using getWindowSize",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "Resize",
          "package": "HGL",
          "partial": "Resize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:Resize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intersection of two regions.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "andRegion",
          "package": "HGL",
          "signature": "Region -\u003e Region -\u003e Region",
          "source": "src/Graphics-SOE.html#andRegion",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two regions",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "andRegion",
          "normalized": "Region-\u003eRegion-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "Region-\u003eRegion-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:andRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echaracter corresponding to the key\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "char",
          "package": "HGL",
          "signature": "Char",
          "source": "src/Graphics-SOE.html#Event",
          "type": "function"
        },
        "index": {
          "description": "character corresponding to the key",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "char",
          "package": "HGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn elliptical region that fits in the rectangle with the given points\n as opposite corners.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "createEllipse",
          "package": "HGL",
          "signature": "Point -\u003e Point -\u003e Region",
          "source": "src/Graphics-SOE.html#createEllipse",
          "type": "function"
        },
        "index": {
          "description": "An elliptical region that fits in the rectangle with the given points as opposite corners",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "createEllipse",
          "normalized": "Point-\u003ePoint-\u003eRegion",
          "package": "HGL",
          "partial": "Ellipse",
          "signature": "Point-\u003ePoint-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:createEllipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polygonal region defined by a list of \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "createPolygon",
          "package": "HGL",
          "signature": "[Point] -\u003e Region",
          "source": "src/Graphics-SOE.html#createPolygon",
          "type": "function"
        },
        "index": {
          "description": "polygonal region defined by list of Point",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "createPolygon",
          "normalized": "[Point]-\u003eRegion",
          "package": "HGL",
          "partial": "Polygon",
          "signature": "[Point]-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:createPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular region, with the given points as opposite corners.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "createRectangle",
          "package": "HGL",
          "signature": "Point -\u003e Point -\u003e Region",
          "source": "src/Graphics-SOE.html#createRectangle",
          "type": "function"
        },
        "index": {
          "description": "rectangular region with the given points as opposite corners",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "createRectangle",
          "normalized": "Point-\u003ePoint-\u003eRegion",
          "package": "HGL",
          "partial": "Rectangle",
          "signature": "Point-\u003ePoint-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:createRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe part of the first region that is not also in the second.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "diffRegion",
          "package": "HGL",
          "signature": "Region -\u003e Region -\u003e Region",
          "source": "src/Graphics-SOE.html#diffRegion",
          "type": "function"
        },
        "index": {
          "description": "The part of the first region that is not also in the second",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "diffRegion",
          "normalized": "Region-\u003eRegion-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "Region-\u003eRegion-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:diffRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a \u003cem\u003edouble buffer\u003c/em\u003e to reduce flicker and thus improve the look\n of animations.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "drawBufferedGraphic",
          "package": "HGL",
          "signature": "RedrawMode",
          "source": "src/Graphics-SOE.html#drawBufferedGraphic",
          "type": "function"
        },
        "index": {
          "description": "Use double buffer to reduce flicker and thus improve the look of animations",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "drawBufferedGraphic",
          "package": "HGL",
          "partial": "Buffered Graphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:drawBufferedGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw directly to the window\n (slightly faster than \u003ccode\u003e\u003ca\u003edrawBufferedGraphic\u003c/a\u003e\u003c/code\u003e, but more prone to flicker).\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "drawGraphic",
          "package": "HGL",
          "signature": "RedrawMode",
          "source": "src/Graphics-SOE.html#drawGraphic",
          "type": "function"
        },
        "index": {
          "description": "Draw directly to the window slightly faster than drawBufferedGraphic but more prone to flicker",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "drawGraphic",
          "package": "HGL",
          "partial": "Graphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:drawGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother name for \u003ccode\u003e\u003ca\u003edrawInWindow\u003c/a\u003e\u003c/code\u003e, retained for backwards compatibility.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "drawInWindowNow",
          "package": "HGL",
          "signature": "Window -\u003e Graphic -\u003e IO ()",
          "source": "src/Graphics-SOE.html#drawInWindowNow",
          "type": "function"
        },
        "index": {
          "description": "Another name for drawInWindow retained for backwards compatibility",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "drawInWindowNow",
          "normalized": "Window-\u003eGraphic-\u003eIO()",
          "package": "HGL",
          "partial": "In Window Now",
          "signature": "Window-\u003eGraphic-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:drawInWindowNow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a \u003ccode\u003e\u003ca\u003eRegion\u003c/a\u003e\u003c/code\u003e in the current color.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "drawRegion",
          "package": "HGL",
          "signature": "Region -\u003e Graphic",
          "source": "src/Graphics-SOE.html#drawRegion",
          "type": "function"
        },
        "index": {
          "description": "Draw Region in the current color",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "drawRegion",
          "normalized": "Region-\u003eGraphic",
          "package": "HGL",
          "partial": "Region",
          "signature": "Region-\u003eGraphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:drawRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until a key is pressed and released,\n and return the corresponding character.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "getKey",
          "package": "HGL",
          "signature": "Window -\u003e IO Char",
          "source": "src/Graphics-SOE.html#getKey",
          "type": "function"
        },
        "index": {
          "description": "Wait until key is pressed and released and return the corresponding character",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "getKey",
          "normalized": "Window-\u003eIO Char",
          "package": "HGL",
          "partial": "Key",
          "signature": "Window-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:getKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for the next event in the window.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "getWindowEvent",
          "package": "HGL",
          "signature": "Window -\u003e IO Event",
          "source": "src/Graphics-SOE.html#getWindowEvent",
          "type": "function"
        },
        "index": {
          "description": "Wait for the next event in the window",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "getWindowEvent",
          "normalized": "Window-\u003eIO Event",
          "package": "HGL",
          "partial": "Window Event",
          "signature": "Window-\u003eIO Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:getWindowEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the button was pressed;\n otherwise it was released\n\u003c/p\u003e\u003cp\u003eif \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the key was pressed;\n otherwise it was released\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "isDown",
          "package": "HGL",
          "signature": "Bool",
          "source": "src/Graphics-SOE.html#Event",
          "type": "function"
        },
        "index": {
          "description": "if True the button was pressed otherwise it was released if True the key was pressed otherwise it was released",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "isDown",
          "package": "HGL",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:isDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, it was the left button\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "isLeft",
          "package": "HGL",
          "signature": "Bool",
          "source": "src/Graphics-SOE.html#Event",
          "type": "function"
        },
        "index": {
          "description": "if True it was the left button",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "isLeft",
          "package": "HGL",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a pending eventin the window, if any.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "maybeGetWindowEvent",
          "package": "HGL",
          "signature": "Window -\u003e IO (Maybe Event)",
          "source": "src/Graphics-SOE.html#maybeGetWindowEvent",
          "type": "function"
        },
        "index": {
          "description": "Return pending eventin the window if any",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "maybeGetWindowEvent",
          "normalized": "Window-\u003eIO(Maybe Event)",
          "package": "HGL",
          "partial": "Get Window Event",
          "signature": "Window-\u003eIO(Maybe Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:maybeGetWindowEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean extended version of \u003ccode\u003e\u003ca\u003eopenWindow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "openWindowEx",
          "package": "HGL",
          "signature": "Title-\u003e Maybe Point-\u003e Maybe Size-\u003e RedrawMode-\u003e Maybe Word32-\u003e IO Window",
          "type": "function"
        },
        "index": {
          "description": "an extended version of openWindow",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "openWindowEx",
          "normalized": "Title-\u003eMaybe Point-\u003eMaybe Size-\u003eRedrawMode-\u003eMaybe Word-\u003eIO Window",
          "package": "HGL",
          "partial": "Window Ex",
          "signature": "Title-\u003eMaybe Point-\u003eMaybe Size-\u003eRedrawMode-\u003eMaybe Word-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:openWindowEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of two regions.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "orRegion",
          "package": "HGL",
          "signature": "Region -\u003e Region -\u003e Region",
          "source": "src/Graphics-SOE.html#orRegion",
          "type": "function"
        },
        "index": {
          "description": "The union of two regions",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "orRegion",
          "normalized": "Region-\u003eRegion-\u003eRegion",
          "package": "HGL",
          "partial": "Region",
          "signature": "Region-\u003eRegion-\u003eRegion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:orRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of the mouse cursor\n\u003c/p\u003e\u003cp\u003ethe position of the mouse cursor\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "pt",
          "package": "HGL",
          "signature": "Point",
          "source": "src/Graphics-SOE.html#Event",
          "type": "function"
        },
        "index": {
          "description": "the position of the mouse cursor the position of the mouse cursor",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "pt",
          "package": "HGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current time of day (in milliseconds).\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "timeGetTime",
          "package": "HGL",
          "signature": "IO Word32",
          "source": "src/Graphics-SOE.html#timeGetTime",
          "type": "function"
        },
        "index": {
          "description": "The current time of day in milliseconds",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "timeGetTime",
          "package": "HGL",
          "partial": "Get Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:timeGetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn obsolete special case of \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.SOE",
          "name": "word32ToInt",
          "package": "HGL",
          "signature": "Word32 -\u003e Int",
          "source": "src/Graphics-SOE.html#word32ToInt",
          "type": "function"
        },
        "index": {
          "description": "An obsolete special case of fromIntegral",
          "hierarchy": "Graphics SOE",
          "module": "Graphics.SOE",
          "name": "word32ToInt",
          "normalized": "Word-\u003eInt",
          "package": "HGL",
          "partial": "To Int",
          "signature": "Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HGL/docs/Graphics-SOE.html#v:word32ToInt"
      }
    }
  ]
]