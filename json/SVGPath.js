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
        "word": "SVGPath"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing the SVG path command, see \u003ca\u003ehttp://www.w3.org/TR/SVG/paths.html#PathData\u003c/a\u003e :\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "ReadPath",
          "package": "SVGPath",
          "source": "src/Graphics-SVG-ReadPath.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing the SVG path command see http www.w3.org TR SVG paths.html PathData",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "ReadPath",
          "package": "SVGPath",
          "partial": "Read Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVG.ReadPath",
          "name": "PathCommand",
          "package": "SVGPath",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "PathCommand",
          "package": "SVGPath",
          "partial": "Path Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#t:PathCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA = Elliptic arc (not used)\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "A_abs",
          "package": "SVGPath",
          "signature": "A_abs",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Elliptic arc not used",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "A_abs",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:A_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVG.ReadPath",
          "name": "A_rel",
          "package": "SVGPath",
          "signature": "A_rel",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "A_rel",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:A_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a cubic B&#233;zier curve from the current point to (x,y) using (x1,y1) as the\n ^control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve.\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "C_abs",
          "package": "SVGPath",
          "signature": "C_abs (X1, Y1, X2, Y2, X, Y)",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Draws cubic zier curve from the current point to using x1 y1 as the control point at the beginning of the curve and x2 y2 as the control point at the end of the curve",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "C_abs",
          "normalized": "C_abs(X,Y,X,Y,X,Y)",
          "package": "SVGPath",
          "signature": "C_abs(X,Y,X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:C_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVG.ReadPath",
          "name": "C_rel",
          "package": "SVGPath",
          "signature": "C_rel (X1, Y1, X2, Y2, X, Y)",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "C_rel",
          "normalized": "C_rel(X,Y,X,Y,X,Y)",
          "package": "SVGPath",
          "signature": "C_rel(X,Y,X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:C_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA horizontal line from the current point (cpx, cpy) to (x, cpy)\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "H_abs",
          "package": "SVGPath",
          "signature": "H_abs X",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "horizontal line from the current point cpx cpy to cpy",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "H_abs",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:H_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVG.ReadPath",
          "name": "H_rel",
          "package": "SVGPath",
          "signature": "H_rel X",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "H_rel",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:H_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line from the current point to Tup which becomes the new current point\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "L_abs",
          "package": "SVGPath",
          "signature": "L_abs Tup",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "line from the current point to Tup which becomes the new current point",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "L_abs",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:L_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVG.ReadPath",
          "name": "L_rel",
          "package": "SVGPath",
          "signature": "L_rel Tup",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "L_rel",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:L_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablish a new current point (with absolute coords)\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "M_abs",
          "package": "SVGPath",
          "signature": "M_abs Tup",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Establish new current point with absolute coords",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "M_abs",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:M_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablish a new current point (with coords relative to the current point)\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "M_rel",
          "package": "SVGPath",
          "signature": "M_rel Tup",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Establish new current point with coords relative to the current point",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "M_rel",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:M_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quadr. B&#233;zier curve from the curr. point to (x,y) using (x1,y1) as the control point\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "Q_abs",
          "package": "SVGPath",
          "signature": "Q_abs (X1, Y1, X, Y)",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "quadr zier curve from the curr point to using x1 y1 as the control point",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "Q_abs",
          "normalized": "Q_abs(X,Y,X,Y)",
          "package": "SVGPath",
          "signature": "Q_abs(X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:Q_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNearly the same as cubic, but with one point less\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "Q_rel",
          "package": "SVGPath",
          "signature": "Q_rel (X1, Y1, X, Y)",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Nearly the same as cubic but with one point less",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "Q_rel",
          "normalized": "Q_rel(X,Y,X,Y)",
          "package": "SVGPath",
          "signature": "Q_rel(X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:Q_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a cubic B&#233;zier curve from the current point to (x,y). The first control point is\n assumed to be the reflection of the second control point on the previous command relative to the current point.\n (If there is no previous command or if the previous command was not an C, c, S or s, assume the first control\n point is coincident with the current point.) (x2,y2) is the second control point (i.e., the control point at\n the end of the curve).\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "S_abs",
          "package": "SVGPath",
          "signature": "S_abs (X2, Y2, X, Y)",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Draws cubic zier curve from the current point to The first control point is assumed to be the reflection of the second control point on the previous command relative to the current point If there is no previous command or if the previous command was not an or assume the first control point is coincident with the current point x2 y2 is the second control point i.e the control point at the end of the curve",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "S_abs",
          "normalized": "S_abs(X,Y,X,Y)",
          "package": "SVGPath",
          "signature": "S_abs(X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:S_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVG.ReadPath",
          "name": "S_rel",
          "package": "SVGPath",
          "signature": "S_rel (X2, Y2, X, Y)",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "S_rel",
          "normalized": "S_rel(X,Y,X,Y)",
          "package": "SVGPath",
          "signature": "S_rel(X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:S_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eT_Abs = Shorthand/smooth quadratic Bezier curveto\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "T_abs",
          "package": "SVGPath",
          "signature": "T_abs Tup",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Abs Shorthand smooth quadratic Bezier curveto",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "T_abs",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:T_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVG.ReadPath",
          "name": "T_rel",
          "package": "SVGPath",
          "signature": "T_rel Tup",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "T_rel",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:T_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vertical line from the current point (cpx, cpy) to (cpx, y)\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "V_abs",
          "package": "SVGPath",
          "signature": "V_abs Y",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "vertical line from the current point cpx cpy to cpx",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "V_abs",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:V_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVG.ReadPath",
          "name": "V_rel",
          "package": "SVGPath",
          "signature": "V_rel Y",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "V_rel",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:V_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose current subpath by drawing a straight line from current point to current subpath's initial point\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "Z",
          "package": "SVGPath",
          "signature": "Z",
          "source": "src/Graphics-SVG-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Close current subpath by drawing straight line from current point to current subpath initial point",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "Z",
          "package": "SVGPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebSubcurve uses bezier subdivision. (inspired by Hersch, Font Rasterization: the State of the Art (freely available))\n It divides an arc into two arcs recursively until the arc is either completely\n between two vertical raster lines or completely between two horizontal raster lines or the line is at most 1 pixel long.\n This function computes outline points (tex==False) as well as border points for rasterisation (tex==True) by using\n an x-, y-resoultion raster. dx, dy is the width and height of a pixel of this raster.\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "bSubCurve",
          "package": "SVGPath",
          "signature": "Bool -\u003e (X, Y) -\u003e [F2] -\u003e [F2]",
          "source": "src/Graphics-SVG-ReadPath.html#bSubCurve",
          "type": "function"
        },
        "index": {
          "description": "bSubcurve uses bezier subdivision inspired by Hersch Font Rasterization the State of the Art freely available It divides an arc into two arcs recursively until the arc is either completely between two vertical raster lines or completely between two horizontal raster lines or the line is at most pixel long This function computes outline points tex False as well as border points for rasterisation tex True by using an y-resoultion raster dx dy is the width and height of pixel of this raster",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "bSubCurve",
          "normalized": "Bool-\u003e(X,Y)-\u003e[F]-\u003e[F]",
          "package": "SVGPath",
          "partial": "Sub Curve",
          "signature": "Bool-\u003e(X,Y)-\u003e[F]-\u003e[F]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:bSubCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert path-commands to outline points\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "commandsToPoints",
          "package": "SVGPath",
          "signature": "[PathCommand] -\u003e F2 -\u003e F2 -\u003e [[F2]]",
          "source": "src/Graphics-SVG-ReadPath.html#commandsToPoints",
          "type": "function"
        },
        "index": {
          "description": "convert path-commands to outline points",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "commandsToPoints",
          "normalized": "[PathCommand]-\u003eF-\u003eF-\u003e[[F]]",
          "package": "SVGPath",
          "partial": "To Points",
          "signature": "[PathCommand]-\u003eF-\u003eF-\u003e[[F]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:commandsToPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVG.ReadPath",
          "name": "ctp",
          "package": "SVGPath",
          "signature": "[PathCommand] -\u003e [F2] -\u003e F2 -\u003e Bool -\u003e F2 -\u003e F2 -\u003e [[F2]]",
          "source": "src/Graphics-SVG-ReadPath.html#ctp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "ctp",
          "normalized": "[PathCommand]-\u003e[F]-\u003eF-\u003eBool-\u003eF-\u003eF-\u003e[[F]]",
          "package": "SVGPath",
          "signature": "[PathCommand]-\u003e[F]-\u003eF-\u003eBool-\u003eF-\u003eF-\u003e[[F]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:ctp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a SVG path string into a list of commands\n\u003c/p\u003e",
          "module": "Graphics.SVG.ReadPath",
          "name": "pathFromString",
          "package": "SVGPath",
          "signature": "String -\u003e IO [PathCommand]",
          "source": "src/Graphics-SVG-ReadPath.html#pathFromString",
          "type": "function"
        },
        "index": {
          "description": "convert SVG path string into list of commands",
          "hierarchy": "Graphics SVG ReadPath",
          "module": "Graphics.SVG.ReadPath",
          "name": "pathFromString",
          "normalized": "String-\u003eIO[PathCommand]",
          "package": "SVGPath",
          "partial": "From String",
          "signature": "String-\u003eIO[PathCommand]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGPath/docs/Graphics-SVG-ReadPath.html#v:pathFromString"
      }
    }
  ]
]