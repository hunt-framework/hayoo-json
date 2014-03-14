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
        "word": "craftwerk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCraftwerk uses the \u003ca\u003eData.Colour\u003c/a\u003e package to represent colours in styles.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Craftwerk.Core.Color",
          "name": "Color",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Color.html",
          "type": "module"
        },
        "index": {
          "description": "Craftwerk uses the Data.Colour package to represent colours in styles",
          "hierarchy": "Graphics Craftwerk Core Color",
          "module": "Graphics.Craftwerk.Core.Color",
          "name": "Color",
          "package": "craftwerk",
          "partial": "Color",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Color.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe colour type used by Craftwerk\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Color",
          "name": "FigureColor",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Color.html#FigureColor",
          "type": "type"
        },
        "index": {
          "description": "The colour type used by Craftwerk",
          "hierarchy": "Graphics Craftwerk Core Color",
          "module": "Graphics.Craftwerk.Core.Color",
          "name": "FigureColor",
          "package": "craftwerk",
          "partial": "Figure Color",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Color.html#t:FigureColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the i-th of 16 basic named colours (i % 16 to be precise).\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Color",
          "name": "integralColor",
          "package": "craftwerk",
          "signature": "a -\u003e FigureColor",
          "source": "src/Graphics-Craftwerk-Core-Color.html#integralColor",
          "type": "function"
        },
        "index": {
          "description": "Returns the i-th of basic named colours to be precise",
          "hierarchy": "Graphics Craftwerk Core Color",
          "module": "Graphics.Craftwerk.Core.Color",
          "name": "integralColor",
          "normalized": "a-\u003eFigureColor",
          "package": "craftwerk",
          "partial": "Color",
          "signature": "a-\u003eFigureColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Color.html#v:integralColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions that convert figures into figures that use less\n primitives such that drivers only need to implement basic\n functionalities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "Generic",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Driver-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Functions that convert figures into figures that use less primitives such that drivers only need to implement basic functionalities",
          "hierarchy": "Graphics Craftwerk Core Driver Generic",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "Generic",
          "package": "craftwerk",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Driver-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates arrow tip figure for a given path\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "arrowTipsForPath",
          "package": "craftwerk",
          "signature": "[Segment] -\u003e Double -\u003e (ArrowTip, ArrowTip) -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Driver-Generic.html#arrowTipsForPath",
          "type": "function"
        },
        "index": {
          "description": "Creates arrow tip figure for given path",
          "hierarchy": "Graphics Craftwerk Core Driver Generic",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "arrowTipsForPath",
          "normalized": "[Segment]-\u003eDouble-\u003e(ArrowTip,ArrowTip)-\u003eFigure",
          "package": "craftwerk",
          "partial": "Tips For Path",
          "signature": "[Segment]-\u003eDouble-\u003e(ArrowTip,ArrowTip)-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Driver-Generic.html#v:arrowTipsForPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAngle conversion\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "degree",
          "package": "craftwerk",
          "signature": "a -\u003e a",
          "source": "src/Graphics-Craftwerk-Core-Driver-Generic.html#degree",
          "type": "function"
        },
        "index": {
          "description": "Angle conversion",
          "hierarchy": "Graphics Craftwerk Core Driver Generic",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "degree",
          "normalized": "a-\u003ea",
          "package": "craftwerk",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Driver-Generic.html#v:degree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt the moment only \u003ccode\u003e\u003ca\u003eCircle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e figures are converted to paths.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "genericFigure",
          "package": "craftwerk",
          "signature": "Figure -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Driver-Generic.html#genericFigure",
          "type": "function"
        },
        "index": {
          "description": "At the moment only Circle and Grid figures are converted to paths",
          "hierarchy": "Graphics Craftwerk Core Driver Generic",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "genericFigure",
          "normalized": "Figure-\u003eFigure",
          "package": "craftwerk",
          "partial": "Figure",
          "signature": "Figure-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Driver-Generic.html#v:genericFigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAngle conversion\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "radians",
          "package": "craftwerk",
          "signature": "a -\u003e a",
          "source": "src/Graphics-Craftwerk-Core-Driver-Generic.html#radians",
          "type": "function"
        },
        "index": {
          "description": "Angle conversion",
          "hierarchy": "Graphics Craftwerk Core Driver Generic",
          "module": "Graphics.Craftwerk.Core.Driver.Generic",
          "name": "radians",
          "normalized": "a-\u003ea",
          "package": "craftwerk",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Driver-Generic.html#v:radians"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert a figure to a LaTeX TikZ \n (\u003ca\u003ehttp://sourceforge.net/projects/pgf/develop\u003c/a\u003e) string.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Craftwerk.Core.Driver.Tikz",
          "name": "Tikz",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Driver-Tikz.html",
          "type": "module"
        },
        "index": {
          "description": "Convert figure to LaTeX TikZ http sourceforge.net projects pgf develop string",
          "hierarchy": "Graphics Craftwerk Core Driver Tikz",
          "module": "Graphics.Craftwerk.Core.Driver.Tikz",
          "name": "Tikz",
          "package": "craftwerk",
          "partial": "Tikz",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Driver-Tikz.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Craftwerk \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e to a TikZ picture environment string\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Driver.Tikz",
          "name": "figureToTikzPicture",
          "package": "craftwerk",
          "signature": "Figure -\u003e String",
          "source": "src/Graphics-Craftwerk-Core-Driver-Tikz.html#figureToTikzPicture",
          "type": "function"
        },
        "index": {
          "description": "Convert Craftwerk Figure to TikZ picture environment string",
          "hierarchy": "Graphics Craftwerk Core Driver Tikz",
          "module": "Graphics.Craftwerk.Core.Driver.Tikz",
          "name": "figureToTikzPicture",
          "normalized": "Figure-\u003eString",
          "package": "craftwerk",
          "partial": "To Tikz Picture",
          "signature": "Figure-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Driver-Tikz.html#v:figureToTikzPicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e is a description of a 2D vector graphic. Affine transformations\n and styles apply to all subfigures. When a subfigure of a style node contains\n another style node the style properties will be overwritten where the deeper\n node specifies it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Figure",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Figure.html",
          "type": "module"
        },
        "index": {
          "description": "Figure is description of vector graphic Affine transformations and styles apply to all subfigures When subfigure of style node contains another style node the style properties will be overwritten where the deeper node specifies it",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Figure",
          "package": "craftwerk",
          "partial": "Figure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main datatype describing an arbitrary figure.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Figure",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "data"
        },
        "index": {
          "description": "The main datatype describing an arbitrary figure",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Figure",
          "package": "craftwerk",
          "partial": "Figure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#t:Figure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Line",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Line",
          "package": "craftwerk",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Path",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Path",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Path",
          "package": "craftwerk",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Point",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Point",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Point",
          "package": "craftwerk",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath creation\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Segment",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Segment",
          "type": "data"
        },
        "index": {
          "description": "Path creation",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Segment",
          "package": "craftwerk",
          "partial": "Segment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#t:Segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Transform",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Transform",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Transform",
          "package": "craftwerk",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Vector",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Vector",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Vector",
          "package": "craftwerk",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "ArcSegment",
          "package": "craftwerk",
          "signature": "ArcSegment Point Double Double Double",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "ArcSegment",
          "package": "craftwerk",
          "partial": "Arc Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:ArcSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Blank",
          "package": "craftwerk",
          "signature": "Blank",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Blank",
          "package": "craftwerk",
          "partial": "Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Blank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Canvas",
          "package": "craftwerk",
          "signature": "Canvas Transform Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Canvas",
          "package": "craftwerk",
          "partial": "Canvas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Circle",
          "package": "craftwerk",
          "signature": "Circle Point Double",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Circle",
          "package": "craftwerk",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Composition",
          "package": "craftwerk",
          "signature": "Composition [Figure]",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Composition",
          "normalized": "Composition[Figure]",
          "package": "craftwerk",
          "partial": "Composition",
          "signature": "Composition[Figure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Composition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "CurveSegment",
          "package": "craftwerk",
          "signature": "CurveSegment Point Point Point",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "CurveSegment",
          "package": "craftwerk",
          "partial": "Curve Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:CurveSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Grid",
          "package": "craftwerk",
          "signature": "Grid Vector Double Double",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Grid",
          "package": "craftwerk",
          "partial": "Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "LineSegment",
          "package": "craftwerk",
          "signature": "LineSegment Point",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "LineSegment",
          "package": "craftwerk",
          "partial": "Line Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:LineSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "MoveTo",
          "package": "craftwerk",
          "signature": "MoveTo Point",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "MoveTo",
          "package": "craftwerk",
          "partial": "Move To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:MoveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "NoDecorations",
          "package": "craftwerk",
          "signature": "NoDecorations Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "NoDecorations",
          "package": "craftwerk",
          "partial": "No Decorations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:NoDecorations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Path",
          "package": "craftwerk",
          "signature": "Path Path",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Path",
          "package": "craftwerk",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Rotate",
          "package": "craftwerk",
          "signature": "Rotate Double",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Rotate",
          "package": "craftwerk",
          "partial": "Rotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Scale",
          "package": "craftwerk",
          "signature": "Scale Vector",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Scale",
          "package": "craftwerk",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Style",
          "package": "craftwerk",
          "signature": "Style StyleProperties Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Style",
          "package": "craftwerk",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Text",
          "package": "craftwerk",
          "signature": "Text String",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Text",
          "package": "craftwerk",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Transform",
          "package": "craftwerk",
          "signature": "Transform Transform Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Figure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Transform",
          "package": "craftwerk",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Translate",
          "package": "craftwerk",
          "signature": "Translate Vector",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "Translate",
          "package": "craftwerk",
          "partial": "Translate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:Translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an \u003ccode\u003e\u003ca\u003eArcSegment\u003c/a\u003e\u003c/code\u003e segment.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "arc",
          "package": "craftwerk",
          "signature": "Point-\u003e Double-\u003e Double-\u003e Double-\u003e Segment",
          "type": "function"
        },
        "index": {
          "description": "Generates an ArcSegment segment",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "arc",
          "normalized": "Point-\u003eDouble-\u003eDouble-\u003eDouble-\u003eSegment",
          "package": "craftwerk",
          "signature": "Point-\u003eDouble-\u003eDouble-\u003eDouble-\u003eSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "blank",
          "package": "craftwerk",
          "signature": "Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#blank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "blank",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:blank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a coordinate transformation 'Transform t f' into\n a canvas transformation  'Canvas t f'.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "canvas",
          "package": "craftwerk",
          "signature": "Figure -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#canvas",
          "type": "function"
        },
        "index": {
          "description": "Transforms coordinate transformation Transform into canvas transformation Canvas",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "canvas",
          "normalized": "Figure-\u003eFigure",
          "package": "craftwerk",
          "signature": "Figure-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a circle figure at a point with given radius.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "circle",
          "package": "craftwerk",
          "signature": "Point -\u003e Double -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#circle",
          "type": "function"
        },
        "index": {
          "description": "Generate circle figure at point with given radius",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "circle",
          "normalized": "Point-\u003eDouble-\u003eFigure",
          "package": "craftwerk",
          "signature": "Point-\u003eDouble-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines figures which are drawn in the order of the figures in the list.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "composition",
          "package": "craftwerk",
          "signature": "[Figure] -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#composition",
          "type": "function"
        },
        "index": {
          "description": "Combines figures which are drawn in the order of the figures in the list",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "composition",
          "normalized": "[Figure]-\u003eFigure",
          "package": "craftwerk",
          "signature": "[Figure]-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:composition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eCurveSegment\u003c/a\u003e\u003c/code\u003e segment.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "curveTo",
          "package": "craftwerk",
          "signature": "Point-\u003e Point-\u003e Point-\u003e Segment",
          "type": "function"
        },
        "index": {
          "description": "Generates CurveSegment segment",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "curveTo",
          "normalized": "Point-\u003ePoint-\u003ePoint-\u003eSegment",
          "package": "craftwerk",
          "partial": "To",
          "signature": "Point-\u003ePoint-\u003ePoint-\u003eSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:curveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a grid spanning from (0,0) to (x,y) taking steps (xs,ys).\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "grid",
          "package": "craftwerk",
          "signature": "Vector-\u003e Vector-\u003e Figure",
          "type": "function"
        },
        "index": {
          "description": "Generate grid spanning from to taking steps xs ys",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "grid",
          "normalized": "Vector-\u003eVector-\u003eFigure",
          "package": "craftwerk",
          "signature": "Vector-\u003eVector-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a line to a figure\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "line",
          "package": "craftwerk",
          "signature": "Line -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#line",
          "type": "function"
        },
        "index": {
          "description": "Converts line to figure",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "line",
          "normalized": "Line-\u003eFigure",
          "package": "craftwerk",
          "signature": "Line-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eLineSegment\u003c/a\u003e\u003c/code\u003e segment.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "lineTo",
          "package": "craftwerk",
          "signature": "Point -\u003e Segment",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#lineTo",
          "type": "function"
        },
        "index": {
          "description": "Generates LineSegment segment",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "lineTo",
          "normalized": "Point-\u003eSegment",
          "package": "craftwerk",
          "partial": "To",
          "signature": "Point-\u003eSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:lineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "lineToPath",
          "package": "craftwerk",
          "signature": "Line -\u003e Path",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#lineToPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "lineToPath",
          "normalized": "Line-\u003ePath",
          "package": "craftwerk",
          "partial": "To Path",
          "signature": "Line-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:lineToPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eMoveTo\u003c/a\u003e\u003c/code\u003e segment\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "moveTo",
          "package": "craftwerk",
          "signature": "Point -\u003e Segment",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#moveTo",
          "type": "function"
        },
        "index": {
          "description": "Generates MoveTo segment",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "moveTo",
          "normalized": "Point-\u003eSegment",
          "package": "craftwerk",
          "partial": "To",
          "signature": "Point-\u003eSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:moveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a figure from a path.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "path",
          "package": "craftwerk",
          "signature": "Path -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#path",
          "type": "function"
        },
        "index": {
          "description": "Generate figure from path",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "path",
          "normalized": "Path-\u003eFigure",
          "package": "craftwerk",
          "signature": "Path-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "point",
          "package": "craftwerk",
          "signature": "Double -\u003e Double -\u003e Point",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "point",
          "normalized": "Double-\u003eDouble-\u003ePoint",
          "package": "craftwerk",
          "signature": "Double-\u003eDouble-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a rectangle path from origin and extent.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "rectangle",
          "package": "craftwerk",
          "signature": "Point-\u003e Vector-\u003e Line",
          "type": "function"
        },
        "index": {
          "description": "Construct rectangle path from origin and extent",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "rectangle",
          "normalized": "Point-\u003eVector-\u003eLine",
          "package": "craftwerk",
          "signature": "Point-\u003eVector-\u003eLine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a coordinate rotation.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "rotate",
          "package": "craftwerk",
          "signature": "Double -\u003e Figure -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Applies coordinate rotation",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "rotate",
          "normalized": "Double-\u003eFigure-\u003eFigure",
          "package": "craftwerk",
          "signature": "Double-\u003eFigure-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a coordinate scaling.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "scale",
          "package": "craftwerk",
          "signature": "Vector -\u003e Figure -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#scale",
          "type": "function"
        },
        "index": {
          "description": "Applies coordinate scaling",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "scale",
          "normalized": "Vector-\u003eFigure-\u003eFigure",
          "package": "craftwerk",
          "signature": "Vector-\u003eFigure-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a style to the given figure\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "style",
          "package": "craftwerk",
          "signature": "StyleProperties -\u003e Figure -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#style",
          "type": "function"
        },
        "index": {
          "description": "Applies style to the given figure",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "style",
          "normalized": "StyleProperties-\u003eFigure-\u003eFigure",
          "package": "craftwerk",
          "signature": "StyleProperties-\u003eFigure-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a text at (0,0)\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "text",
          "package": "craftwerk",
          "signature": "String -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#text",
          "type": "function"
        },
        "index": {
          "description": "Generate text at",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "text",
          "normalized": "String-\u003eFigure",
          "package": "craftwerk",
          "signature": "String-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a coordinate translation.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "translate",
          "package": "craftwerk",
          "signature": "Vector -\u003e Figure -\u003e Figure",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#translate",
          "type": "function"
        },
        "index": {
          "description": "Applies coordinate translation",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "translate",
          "normalized": "Vector-\u003eFigure-\u003eFigure",
          "package": "craftwerk",
          "signature": "Vector-\u003eFigure-\u003eFigure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRectangle with origin (0,0) and extent (1,1)\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "unitRectangle",
          "package": "craftwerk",
          "signature": "Line",
          "source": "src/Graphics-Craftwerk-Core-Figure.html#unitRectangle",
          "type": "function"
        },
        "index": {
          "description": "Rectangle with origin and extent",
          "hierarchy": "Graphics Craftwerk Core Figure",
          "module": "Graphics.Craftwerk.Core.Figure",
          "name": "unitRectangle",
          "package": "craftwerk",
          "partial": "Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Figure.html#v:unitRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStyles in craftwerk are nodes in the figure tree and the style at the node is\n applied to all subnodes. If a field of a style is empty (i.e its value\n is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) the value of the next parent style node is applied.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "Style",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Style.html",
          "type": "module"
        },
        "index": {
          "description": "Styles in craftwerk are nodes in the figure tree and the style at the node is applied to all subnodes If field of style is empty i.e its value is Nothing the value of the next parent style node is applied",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "Style",
          "package": "craftwerk",
          "partial": "Style",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "ArrowTip",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Style.html#ArrowTip",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "ArrowTip",
          "package": "craftwerk",
          "partial": "Arrow Tip",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#t:ArrowTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "LineCap",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Style.html#LineCap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "LineCap",
          "package": "craftwerk",
          "partial": "Line Cap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#t:LineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "LineJoin",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Style.html#LineJoin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "LineJoin",
          "package": "craftwerk",
          "partial": "Line Join",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#t:LineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record holding all possible properties.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "StyleProperties",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "data"
        },
        "index": {
          "description": "record holding all possible properties",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "StyleProperties",
          "package": "craftwerk",
          "partial": "Style Properties",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#t:StyleProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "(\u003c==)",
          "package": "craftwerk",
          "signature": "ArrowDummy -\u003e ArrowTips",
          "source": "src/Graphics-Craftwerk-Core-Style.html#%3C%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "(\u003c==) \u003c==",
          "normalized": "ArrowDummy-\u003eArrowTips",
          "package": "craftwerk",
          "signature": "ArrowDummy-\u003eArrowTips",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:-60--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "(\u003c=\u003e)",
          "package": "craftwerk",
          "signature": "ArrowDummy -\u003e ArrowTips",
          "source": "src/Graphics-Craftwerk-Core-Style.html#%3C%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "(\u003c=\u003e) \u003c=\u003e",
          "normalized": "ArrowDummy-\u003eArrowTips",
          "package": "craftwerk",
          "signature": "ArrowDummy-\u003eArrowTips",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:-60--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "(===)",
          "package": "craftwerk",
          "signature": "ArrowDummy -\u003e ArrowTips",
          "source": "src/Graphics-Craftwerk-Core-Style.html#%3D%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "(===) ===",
          "normalized": "ArrowDummy-\u003eArrowTips",
          "package": "craftwerk",
          "signature": "ArrowDummy-\u003eArrowTips",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "(==\u003e)",
          "package": "craftwerk",
          "signature": "ArrowDummy -\u003e ArrowTips",
          "source": "src/Graphics-Craftwerk-Core-Style.html#%3D%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "(==\u003e) ==\u003e",
          "normalized": "ArrowDummy-\u003eArrowTips",
          "package": "craftwerk",
          "signature": "ArrowDummy-\u003eArrowTips",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:-61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "CapButt",
          "package": "craftwerk",
          "signature": "CapButt",
          "source": "src/Graphics-Craftwerk-Core-Style.html#LineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "CapButt",
          "package": "craftwerk",
          "partial": "Cap Butt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:CapButt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "CapRect",
          "package": "craftwerk",
          "signature": "CapRect",
          "source": "src/Graphics-Craftwerk-Core-Style.html#LineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "CapRect",
          "package": "craftwerk",
          "partial": "Cap Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:CapRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "CapRound",
          "package": "craftwerk",
          "signature": "CapRound",
          "source": "src/Graphics-Craftwerk-Core-Style.html#LineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "CapRound",
          "package": "craftwerk",
          "partial": "Cap Round",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:CapRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "JoinBevel",
          "package": "craftwerk",
          "signature": "JoinBevel",
          "source": "src/Graphics-Craftwerk-Core-Style.html#LineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "JoinBevel",
          "package": "craftwerk",
          "partial": "Join Bevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:JoinBevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "JoinMiter",
          "package": "craftwerk",
          "signature": "JoinMiter",
          "source": "src/Graphics-Craftwerk-Core-Style.html#LineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "JoinMiter",
          "package": "craftwerk",
          "partial": "Join Miter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:JoinMiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "JoinRound",
          "package": "craftwerk",
          "signature": "JoinRound",
          "source": "src/Graphics-Craftwerk-Core-Style.html#LineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "JoinRound",
          "package": "craftwerk",
          "partial": "Join Round",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:JoinRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "StyleProperties",
          "package": "craftwerk",
          "signature": "StyleProperties",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "StyleProperties",
          "package": "craftwerk",
          "partial": "Style Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:StyleProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "TipDefault",
          "package": "craftwerk",
          "signature": "TipDefault",
          "source": "src/Graphics-Craftwerk-Core-Style.html#ArrowTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "TipDefault",
          "package": "craftwerk",
          "partial": "Tip Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:TipDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "TipNone",
          "package": "craftwerk",
          "signature": "TipNone",
          "source": "src/Graphics-Craftwerk-Core-Style.html#ArrowTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "TipNone",
          "package": "craftwerk",
          "partial": "Tip None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:TipNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrow tip styles can be specified by using the notation 'arrow (\u003c==)'\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "arrow",
          "package": "craftwerk",
          "signature": "(ArrowDummy -\u003e ArrowTips) -\u003e Maybe ArrowTips",
          "source": "src/Graphics-Craftwerk-Core-Style.html#arrow",
          "type": "function"
        },
        "index": {
          "description": "Arrow tip styles can be specified by using the notation arrow",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "arrow",
          "normalized": "(ArrowDummy-\u003eArrowTips)-\u003eMaybe ArrowTips",
          "package": "craftwerk",
          "signature": "(ArrowDummy-\u003eArrowTips)-\u003eMaybe ArrowTips",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "arrowTips",
          "package": "craftwerk",
          "signature": "Maybe ArrowTips",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "arrowTips",
          "package": "craftwerk",
          "partial": "Tips",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:arrowTips"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "clip",
          "package": "craftwerk",
          "signature": "Maybe Bool",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "clip",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:clip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "closePath",
          "package": "craftwerk",
          "signature": "Maybe Bool",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "closePath",
          "package": "craftwerk",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:closePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "dashPhase",
          "package": "craftwerk",
          "signature": "Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "dashPhase",
          "package": "craftwerk",
          "partial": "Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:dashPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "dashes",
          "package": "craftwerk",
          "signature": "Maybe [Double]",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "dashes",
          "normalized": "Maybe[Double]",
          "package": "craftwerk",
          "signature": "Maybe[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:dashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default style used at the root node of any \u003ccode\u003eFigure\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "defaultStyle",
          "package": "craftwerk",
          "signature": "StyleProperties",
          "source": "src/Graphics-Craftwerk-Core-Style.html#defaultStyle",
          "type": "function"
        },
        "index": {
          "description": "The default style used at the root node of any Figure",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "defaultStyle",
          "package": "craftwerk",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:defaultStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA style where no property has been set.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "emptyStyle",
          "package": "craftwerk",
          "signature": "StyleProperties",
          "source": "src/Graphics-Craftwerk-Core-Style.html#emptyStyle",
          "type": "function"
        },
        "index": {
          "description": "style where no property has been set",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "emptyStyle",
          "package": "craftwerk",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:emptyStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "fill",
          "package": "craftwerk",
          "signature": "Maybe Bool",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "fill",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "fillColor",
          "package": "craftwerk",
          "signature": "Maybe FigureColor",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "fillColor",
          "package": "craftwerk",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:fillColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "fillOnly",
          "package": "craftwerk",
          "signature": "StyleProperties",
          "source": "src/Graphics-Craftwerk-Core-Style.html#fillOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "fillOnly",
          "package": "craftwerk",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:fillOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a property from a style property record returning the value of\n the default style if the value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "getProperty",
          "package": "craftwerk",
          "signature": "StyleProperties -\u003e (StyleProperties -\u003e Maybe a) -\u003e a",
          "source": "src/Graphics-Craftwerk-Core-Style.html#getProperty",
          "type": "function"
        },
        "index": {
          "description": "Read property from style property record returning the value of the default style if the value is Nothing",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "getProperty",
          "normalized": "StyleProperties-\u003e(StyleProperties-\u003eMaybe a)-\u003ea",
          "package": "craftwerk",
          "partial": "Property",
          "signature": "StyleProperties-\u003e(StyleProperties-\u003eMaybe a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:getProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "limit",
          "package": "craftwerk",
          "signature": "Double -\u003e Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#limit",
          "type": "function"
        },
        "index": {
          "description": "Alias for Just",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "limit",
          "normalized": "Double-\u003eMaybe Double",
          "package": "craftwerk",
          "signature": "Double-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "lineCap",
          "package": "craftwerk",
          "signature": "Maybe LineCap",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "lineCap",
          "package": "craftwerk",
          "partial": "Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:lineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "lineColor",
          "package": "craftwerk",
          "signature": "Maybe FigureColor",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "lineColor",
          "package": "craftwerk",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:lineColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "lineJoin",
          "package": "craftwerk",
          "signature": "Maybe LineJoin",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "lineJoin",
          "package": "craftwerk",
          "partial": "Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:lineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "lineWidth",
          "package": "craftwerk",
          "signature": "Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "lineWidth",
          "package": "craftwerk",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:lineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two property records, where the second argument overwrites fields of\n the first unless a field is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "mergeProperties",
          "package": "craftwerk",
          "signature": "StyleProperties -\u003e StyleProperties -\u003e StyleProperties",
          "source": "src/Graphics-Craftwerk-Core-Style.html#mergeProperties",
          "type": "function"
        },
        "index": {
          "description": "Merge two property records where the second argument overwrites fields of the first unless field is Nothing",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "mergeProperties",
          "normalized": "StyleProperties-\u003eStyleProperties-\u003eStyleProperties",
          "package": "craftwerk",
          "partial": "Properties",
          "signature": "StyleProperties-\u003eStyleProperties-\u003eStyleProperties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:mergeProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "miterLimit",
          "package": "craftwerk",
          "signature": "Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "miterLimit",
          "package": "craftwerk",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:miterLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for empty style, makes style construction nicer.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "newStyle",
          "package": "craftwerk",
          "signature": "StyleProperties",
          "source": "src/Graphics-Craftwerk-Core-Style.html#newStyle",
          "type": "function"
        },
        "index": {
          "description": "Alias for empty style makes style construction nicer",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "newStyle",
          "package": "craftwerk",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:newStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for 'Just False' to make style specification more convenient.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "no",
          "package": "craftwerk",
          "signature": "Maybe Bool",
          "source": "src/Graphics-Craftwerk-Core-Style.html#no",
          "type": "function"
        },
        "index": {
          "description": "Alias for Just False to make style specification more convenient",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "no",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:no"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "phase",
          "package": "craftwerk",
          "signature": "Double -\u003e Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#phase",
          "type": "function"
        },
        "index": {
          "description": "Alias for Just",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "phase",
          "normalized": "Double-\u003eMaybe Double",
          "package": "craftwerk",
          "signature": "Double-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a rgb color property.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "rgb",
          "package": "craftwerk",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Maybe FigureColor",
          "source": "src/Graphics-Craftwerk-Core-Style.html#rgb",
          "type": "function"
        },
        "index": {
          "description": "Make rgb color property",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "rgb",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eMaybe FigureColor",
          "package": "craftwerk",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eMaybe FigureColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth 0.6.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "semithick",
          "package": "craftwerk",
          "signature": "Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#semithick",
          "type": "function"
        },
        "index": {
          "description": "Width",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "semithick",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:semithick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "setLineWidth",
          "package": "craftwerk",
          "signature": "Maybe Double -\u003e StyleProperties",
          "source": "src/Graphics-Craftwerk-Core-Style.html#setLineWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "setLineWidth",
          "normalized": "Maybe Double-\u003eStyleProperties",
          "package": "craftwerk",
          "partial": "Line Width",
          "signature": "Maybe Double-\u003eStyleProperties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:setLineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "stroke",
          "package": "craftwerk",
          "signature": "Maybe Bool",
          "source": "src/Graphics-Craftwerk-Core-Style.html#StyleProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "stroke",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:stroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "strokeOnly",
          "package": "craftwerk",
          "signature": "StyleProperties",
          "source": "src/Graphics-Craftwerk-Core-Style.html#strokeOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "strokeOnly",
          "package": "craftwerk",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:strokeOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth 0.8.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "thick",
          "package": "craftwerk",
          "signature": "Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#thick",
          "type": "function"
        },
        "index": {
          "description": "Width",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "thick",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:thick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth 0.4.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "thin",
          "package": "craftwerk",
          "signature": "Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#thin",
          "type": "function"
        },
        "index": {
          "description": "Width",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "thin",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:thin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth 1.6.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "ultrathick",
          "package": "craftwerk",
          "signature": "Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#ultrathick",
          "type": "function"
        },
        "index": {
          "description": "Width",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "ultrathick",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:ultrathick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth 1.2.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "verythick",
          "package": "craftwerk",
          "signature": "Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#verythick",
          "type": "function"
        },
        "index": {
          "description": "Width",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "verythick",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:verythick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth 0.2.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "verythin",
          "package": "craftwerk",
          "signature": "Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#verythin",
          "type": "function"
        },
        "index": {
          "description": "Width",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "verythin",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:verythin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "width",
          "package": "craftwerk",
          "signature": "Double -\u003e Maybe Double",
          "source": "src/Graphics-Craftwerk-Core-Style.html#width",
          "type": "function"
        },
        "index": {
          "description": "Alias for Just",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "width",
          "normalized": "Double-\u003eMaybe Double",
          "package": "craftwerk",
          "signature": "Double-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for 'Just True' to make style specification more convenient.\n\u003c/p\u003e",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "yes",
          "package": "craftwerk",
          "signature": "Maybe Bool",
          "source": "src/Graphics-Craftwerk-Core-Style.html#yes",
          "type": "function"
        },
        "index": {
          "description": "Alias for Just True to make style specification more convenient",
          "hierarchy": "Graphics Craftwerk Core Style",
          "module": "Graphics.Craftwerk.Core.Style",
          "name": "yes",
          "package": "craftwerk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core-Style.html#v:yes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA high-level and easy to use graphics library with several backends,\n currently including TikZ, Cairo (craftwerk-cairo) with Gtk UI (craftwerk-gtk)\n and Gloss (craftwerk-gloss).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Craftwerk.Core",
          "name": "Core",
          "package": "craftwerk",
          "source": "src/Graphics-Craftwerk-Core.html",
          "type": "module"
        },
        "index": {
          "description": "high-level and easy to use graphics library with several backends currently including TikZ Cairo craftwerk-cairo with Gtk UI craftwerk-gtk and Gloss craftwerk-gloss",
          "hierarchy": "Graphics Craftwerk Core",
          "module": "Graphics.Craftwerk.Core",
          "name": "Core",
          "package": "craftwerk",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/craftwerk/docs/Graphics-Craftwerk-Core.html#"
      }
    }
  ]
]