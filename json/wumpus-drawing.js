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
        "word": "wumpus-drawing"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatype for cubic Bezier curve.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "BezierCurve",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Basis-BezierCurve.html",
          "type": "module"
        },
        "index": {
          "description": "Datatype for cubic Bezier curve",
          "hierarchy": "Wumpus Drawing Basis BezierCurve",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "BezierCurve",
          "package": "wumpus-drawing",
          "partial": "Bezier Curve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Strict cubic Bezier curve.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "BezierCurve",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Basis-BezierCurve.html#BezierCurve",
          "type": "data"
        },
        "index": {
          "description": "Strict cubic Bezier curve",
          "hierarchy": "Wumpus Drawing Basis BezierCurve",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "BezierCurve",
          "package": "wumpus-drawing",
          "partial": "Bezier Curve",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#t:BezierCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "BezierCurve",
          "package": "wumpus-drawing",
          "signature": "BezierCurve !(Point2 u) !(Point2 u) !(Point2 u) !(Point2 u)",
          "source": "src/Wumpus-Drawing-Basis-BezierCurve.html#BezierCurve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis BezierCurve",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "BezierCurve",
          "package": "wumpus-drawing",
          "partial": "Bezier Curve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:BezierCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebezierLength\u003c/a\u003e\u003c/code\u003e : \u003ccode\u003e start_point * control_1 * control_2 * \n        end_point -\u003e Length \u003c/code\u003e \n\u003c/p\u003e\u003cp\u003eFind the length of a Bezier curve. The result is an \n approximation, with the \u003cem\u003etolerance\u003c/em\u003e is 0.1 of a point. This\n seems good enough for drawing (potentially the tolerance could \n be larger still). \n\u003c/p\u003e\u003cp\u003eThe result is found through repeated subdivision so the \n calculation is potentially costly.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "bezierLength",
          "package": "wumpus-drawing",
          "signature": "BezierCurve u -\u003e u",
          "source": "src/Wumpus-Drawing-Basis-BezierCurve.html#bezierLength",
          "type": "function"
        },
        "index": {
          "description": "bezierLength start point control control end point Length Find the length of Bezier curve The result is an approximation with the tolerance is of point This seems good enough for drawing potentially the tolerance could be larger still The result is found through repeated subdivision so the calculation is potentially costly",
          "hierarchy": "Wumpus Drawing Basis BezierCurve",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "bezierLength",
          "normalized": "BezierCurve a-\u003ea",
          "package": "wumpus-drawing",
          "partial": "Length",
          "signature": "BezierCurve u-\u003eu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:bezierLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurve subdivision via de Casteljau's algorithm.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "subdivide",
          "package": "wumpus-drawing",
          "signature": "BezierCurve u -\u003e (BezierCurve u, BezierCurve u)",
          "source": "src/Wumpus-Drawing-Basis-BezierCurve.html#subdivide",
          "type": "function"
        },
        "index": {
          "description": "Curve subdivision via de Casteljau algorithm",
          "hierarchy": "Wumpus Drawing Basis BezierCurve",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "subdivide",
          "normalized": "BezierCurve a-\u003e(BezierCurve a,BezierCurve a)",
          "package": "wumpus-drawing",
          "signature": "BezierCurve u-\u003e(BezierCurve u,BezierCurve u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:subdivide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubdivide with an affine weight along the line...\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "subdividet",
          "package": "wumpus-drawing",
          "signature": "u -\u003e BezierCurve u -\u003e (BezierCurve u, BezierCurve u)",
          "source": "src/Wumpus-Drawing-Basis-BezierCurve.html#subdividet",
          "type": "function"
        },
        "index": {
          "description": "subdivide with an affine weight along the line",
          "hierarchy": "Wumpus Drawing Basis BezierCurve",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "subdividet",
          "normalized": "a-\u003eBezierCurve a-\u003e(BezierCurve a,BezierCurve a)",
          "package": "wumpus-drawing",
          "signature": "u-\u003eBezierCurve u-\u003e(BezierCurve u,BezierCurve u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:subdividet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "vbezierCurve",
          "package": "wumpus-drawing",
          "signature": "Vec2 u -\u003e Vec2 u -\u003e Vec2 u -\u003e Point2 u -\u003e BezierCurve u",
          "source": "src/Wumpus-Drawing-Basis-BezierCurve.html#vbezierCurve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis BezierCurve",
          "module": "Wumpus.Drawing.Basis.BezierCurve",
          "name": "vbezierCurve",
          "normalized": "Vec a-\u003eVec a-\u003eVec a-\u003ePoint a-\u003eBezierCurve a",
          "package": "wumpus-drawing",
          "partial": "Curve",
          "signature": "Vec u-\u003eVec u-\u003eVec u-\u003ePoint u-\u003eBezierCurve u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:vbezierCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlternative to the \u003ccode\u003eDrawingPrimitives\u003c/code\u003e module in Wumpus-Basic.\n\u003c/p\u003e\u003cp\u003eThe drawing primitives here are either slightly higher level or\n less general (more quirky).\n\u003c/p\u003e\u003cp\u003eThis module is expected to be imported qualified - other modules\n (e.g. shapes and paths) are likely to export conflicting names.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - much of this module is probably obsolete \n (except wedge).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "DrawingPrimitives",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html",
          "type": "module"
        },
        "index": {
          "description": "Alternative to the DrawingPrimitives module in Wumpus-Basic The drawing primitives here are either slightly higher level or less general more quirky This module is expected to be imported qualified other modules e.g shapes and paths are likely to export conflicting names WARNING much of this module is probably obsolete except wedge",
          "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "DrawingPrimitives",
          "package": "wumpus-drawing",
          "partial": "Drawing Primitives",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a rectangle, start point is bottom left.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "blRectangle",
          "package": "wumpus-drawing",
          "signature": "DrawMode -\u003e u -\u003e u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#blRectangle",
          "type": "function"
        },
        "index": {
          "description": "Draw rectangle start point is bottom left",
          "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "blRectangle",
          "normalized": "DrawMode-\u003ea-\u003ea-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Rectangle",
          "signature": "DrawMode-\u003eu-\u003eu-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:blRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a rectangle, start point is bottom left.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "ctrRectangle",
          "package": "wumpus-drawing",
          "signature": "DrawMode -\u003e u -\u003e u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#ctrRectangle",
          "type": "function"
        },
        "index": {
          "description": "Draw rectangle start point is bottom left",
          "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "ctrRectangle",
          "normalized": "DrawMode-\u003ea-\u003ea-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Rectangle",
          "signature": "DrawMode-\u003eu-\u003eu-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:ctrRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a horizontal line.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "horizontalLine",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#horizontalLine",
          "type": "function"
        },
        "index": {
          "description": "Draw horizontal line",
          "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "horizontalLine",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Line",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:horizontalLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epivotLine\u003c/code\u003e : \u003ccode\u003e left_length * right_length * incline -\u003e LocGraphic \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eDraw a \u003cem\u003epivot\u003c/em\u003e line. The start point is a pivot along the line, \n not the end. The left and right distances are the extension of\n the line from the pivot. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "pivotLine",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#pivotLine",
          "type": "function"
        },
        "index": {
          "description": "pivotLine left length right length incline LocGraphic Draw pivot line The start point is pivot along the line not the end The left and right distances are the extension of the line from the pivot",
          "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "pivotLine",
          "normalized": "a-\u003ea-\u003eRadian-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Line",
          "signature": "u-\u003eu-\u003eRadian-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:pivotLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a vertical line.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "verticalLine",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#verticalLine",
          "type": "function"
        },
        "index": {
          "description": "Draw vertical line",
          "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "verticalLine",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Line",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:verticalLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewedge : mode * radius * apex_angle\n\u003c/p\u003e\u003cp\u003eWedge is drawn at the apex.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "wedge",
          "package": "wumpus-drawing",
          "signature": "DrawMode -\u003e u -\u003e Radian -\u003e LocThetaGraphic u",
          "source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#wedge",
          "type": "function"
        },
        "index": {
          "description": "wedge mode radius apex angle Wedge is drawn at the apex",
          "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
          "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
          "name": "wedge",
          "normalized": "DrawMode-\u003ea-\u003eRadian-\u003eLocThetaGraphic a",
          "package": "wumpus-drawing",
          "signature": "DrawMode-\u003eu-\u003eRadian-\u003eLocThetaGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:wedge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMisc geometric operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Basis.Geometry",
          "name": "Geometry",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Basis-Geometry.html",
          "type": "module"
        },
        "index": {
          "description": "Misc geometric operations",
          "hierarchy": "Wumpus Drawing Basis Geometry",
          "module": "Wumpus.Drawing.Basis.Geometry",
          "name": "Geometry",
          "package": "wumpus-drawing",
          "partial": "Geometry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Geometry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAffine combination...\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Geometry",
          "name": "affineComb",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Point2 u -\u003e Point2 u -\u003e Point2 u",
          "source": "src/Wumpus-Drawing-Basis-Geometry.html#affineComb",
          "type": "function"
        },
        "index": {
          "description": "Affine combination",
          "hierarchy": "Wumpus Drawing Basis Geometry",
          "module": "Wumpus.Drawing.Basis.Geometry",
          "name": "affineComb",
          "normalized": "a-\u003ePoint a-\u003ePoint a-\u003ePoint a",
          "package": "wumpus-drawing",
          "partial": "Comb",
          "signature": "u-\u003ePoint u-\u003ePoint u-\u003ePoint u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Geometry.html#v:affineComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emidpoint\u003c/a\u003e\u003c/code\u003e : \u003ccode\u003e start_point * end_point -\u003e Midpoint \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eMid-point on the line formed between the two supplied points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Geometry",
          "name": "midpoint",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e Point2 u -\u003e Point2 u",
          "source": "src/Wumpus-Drawing-Basis-Geometry.html#midpoint",
          "type": "function"
        },
        "index": {
          "description": "midpoint start point end point Midpoint Mid-point on the line formed between the two supplied points",
          "hierarchy": "Wumpus Drawing Basis Geometry",
          "module": "Wumpus.Drawing.Basis.Geometry",
          "name": "midpoint",
          "normalized": "Point a-\u003ePoint a-\u003ePoint a",
          "package": "wumpus-drawing",
          "signature": "Point u-\u003ePoint u-\u003ePoint u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Geometry.html#v:midpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "InclineTrails",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "InclineTrails",
          "package": "wumpus-drawing",
          "partial": "Incline Trails",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - vector represents midpoint of the baseline to the \n tip. Angle is the ang of the tip.\n\u003c/p\u003e\u003cp\u003eThis trail is primarily for drawing arrowheads. The resulting \n path is \u003cem\u003eopen\u003c/em\u003e. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_barb",
          "package": "wumpus-drawing",
          "signature": "Radian -\u003e Vec2 u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_barb",
          "type": "function"
        },
        "index": {
          "description": "Note vector represents midpoint of the baseline to the tip Angle is the ang of the tip This trail is primarily for drawing arrowheads The resulting path is open",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_barb",
          "normalized": "Radian-\u003eVec a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "Radian-\u003eVec u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_barb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_chamf_rect",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_chamf_rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_chamf_rect",
          "normalized": "a-\u003eVec a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_chamf_rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_circle",
          "package": "wumpus-drawing",
          "signature": "Vec2 u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_circle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_circle",
          "normalized": "Vec a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "Vec u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_diamond",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_diamond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_diamond",
          "normalized": "a-\u003eVec a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_diamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_ellipse",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_ellipse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_ellipse",
          "normalized": "a-\u003eVec a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_rect",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_rect",
          "normalized": "a-\u003eVec a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_square",
          "package": "wumpus-drawing",
          "signature": "Vec2 u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_square",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_square",
          "normalized": "Vec a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "Vec u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - vector represents midpoint of the baseline to the \n tip. Angle is the ang of the tip.\n\u003c/p\u003e\u003cp\u003eThis trail is primarily for drawing arrowheads.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_triangle",
          "package": "wumpus-drawing",
          "signature": "Radian -\u003e Vec2 u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_triangle",
          "type": "function"
        },
        "index": {
          "description": "Note vector represents midpoint of the baseline to the tip Angle is the ang of the tip This trail is primarily for drawing arrowheads",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_triangle",
          "normalized": "Radian-\u003eVec a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "Radian-\u003eVec u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ev1\u003c/code\u003e is the \u003cem\u003einterior\u003c/em\u003e vector.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_tube",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_tube",
          "type": "function"
        },
        "index": {
          "description": "v1 is the interior vector",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "incline_tube",
          "normalized": "a-\u003eVec a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_tube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiagonal-horizontal trail.\n\u003c/p\u003e\u003cpre\u003e    --@\n   /\n  o\n\u003c/pre\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_diagh",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_diagh",
          "type": "function"
        },
        "index": {
          "description": "Diagonal-horizontal trail",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_diagh",
          "normalized": "a-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_diagh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_diagv",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_diagv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_diagv",
          "normalized": "a-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_diagv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_hdiag",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_hdiag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_hdiag",
          "normalized": "a-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_hdiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal-diagonal-horizontal trail.\n\u003c/p\u003e\u003cpre\u003e      --@\n     /\n  o--\n\u003c/pre\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_hdiagh",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_hdiagh",
          "type": "function"
        },
        "index": {
          "description": "Horizontal-diagonal-horizontal trail",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_hdiagh",
          "normalized": "a-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_hdiagh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_hright",
          "package": "wumpus-drawing",
          "signature": "Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_hright",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_hright",
          "normalized": "Vec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "Vec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_hright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_hrr",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_hrr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_hrr",
          "normalized": "a-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_hrr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeight is minimum leg height. Ortho bar is horizontal.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_ortho_hbar",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_ortho_hbar",
          "type": "function"
        },
        "index": {
          "description": "Height is minimum leg height Ortho bar is horizontal",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_ortho_hbar",
          "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_ortho_hbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth is minimum leg width. Ortho bar is vertical.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_ortho_vbar",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_ortho_vbar",
          "type": "function"
        },
        "index": {
          "description": "Width is minimum leg width Ortho bar is vertical",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_ortho_vbar",
          "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_ortho_vbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform leg size.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_perp_bar",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_perp_bar",
          "type": "function"
        },
        "index": {
          "description": "Uniform leg size",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_perp_bar",
          "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_perp_bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar connector - independent leg size, legs perpendicular.\n\u003c/p\u003e\u003cpre\u003e  o    @ \n  |    |\n  '----'  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003ebelow\u003c/em\u003e the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_perp_bar2",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_perp_bar2",
          "type": "function"
        },
        "index": {
          "description": "Bar connector independent leg size legs perpendicular The bar is drawn below the points",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_perp_bar2",
          "normalized": "ClockDirection-\u003ea-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "ClockDirection-\u003eu-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_perp_bar2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_rect_loop",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_rect_loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_rect_loop",
          "normalized": "ClockDirection-\u003ea-\u003ea-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "ClockDirection-\u003eu-\u003eu-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_rect_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_rrh",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_rrh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_rrh",
          "normalized": "a-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_rrh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_rrv",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_rrv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_rrv",
          "normalized": "a-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_rrv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vdiag",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vdiag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vdiag",
          "normalized": "a-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vdiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vdiagv",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vdiagv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vdiagv",
          "normalized": "a-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vdiagv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndependent leg size.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vflam",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vflam",
          "type": "function"
        },
        "index": {
          "description": "Independent leg size",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vflam",
          "normalized": "ClockDirection-\u003ea-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "ClockDirection-\u003eu-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vflam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vright",
          "package": "wumpus-drawing",
          "signature": "Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vright",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vright",
          "normalized": "Vec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "Vec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vrr",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vrr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "trail_vrr",
          "normalized": "a-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vrr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebowCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vbowCurve",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vbowCurve",
          "type": "function"
        },
        "index": {
          "description": "bowCurve formulated with base vector rather than base-width and angle of inclination",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vbowCurve",
          "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "partial": "Curve",
          "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vbowCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erectCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vrectCurve",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vrectCurve",
          "type": "function"
        },
        "index": {
          "description": "rectCurve formulated with base vector rather than base-width and angle of inclination",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vrectCurve",
          "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "partial": "Curve",
          "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vrectCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etrapCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vtrapCurve",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e Radian -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vtrapCurve",
          "type": "function"
        },
        "index": {
          "description": "trapCurve formulated with base vector rather than base-width and angle of inclination",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vtrapCurve",
          "normalized": "ClockDirection-\u003ea-\u003eRadian-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "partial": "Curve",
          "signature": "ClockDirection-\u003eu-\u003eRadian-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vtrapCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etriCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vtriCurve",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vtriCurve",
          "type": "function"
        },
        "index": {
          "description": "triCurve formulated with base vector rather than base-width and angle of inclination",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vtriCurve",
          "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "partial": "Curve",
          "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vtriCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewedgeCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vwedgeCurve",
          "package": "wumpus-drawing",
          "signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
          "source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vwedgeCurve",
          "type": "function"
        },
        "index": {
          "description": "wedgeCurve formulated with base vector rather than base-width and angle of inclination",
          "hierarchy": "Wumpus Drawing Basis InclineTrails",
          "module": "Wumpus.Drawing.Basis.InclineTrails",
          "name": "vwedgeCurve",
          "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
          "package": "wumpus-drawing",
          "partial": "Curve",
          "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vwedgeCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "ShapeTrails",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "ShapeTrails",
          "package": "wumpus-drawing",
          "partial": "Shape Trails",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "circle_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#circle_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "circle_trail",
          "normalized": "a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:circle_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "diamond_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#diamond_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "diamond_trail",
          "normalized": "a-\u003ea-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:diamond_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "ellipse_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#ellipse_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "ellipse_trail",
          "normalized": "a-\u003ea-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:ellipse_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "isosceles_triangle_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#isosceles_triangle_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "isosceles_triangle_trail",
          "normalized": "a-\u003ea-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:isosceles_triangle_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - bottom left angle must be smaller than 180deg, \n otherwise a runtime error is thrown.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "parallelogram_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#parallelogram_trail",
          "type": "function"
        },
        "index": {
          "description": "Note bottom left angle must be smaller than deg otherwise runtime error is thrown",
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "parallelogram_trail",
          "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:parallelogram_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rcircle_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rcircle_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rcircle_trail",
          "normalized": "a-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rcircle_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rdiamond_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rdiamond_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rdiamond_trail",
          "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rdiamond_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rectangle_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rectangle_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rectangle_trail",
          "normalized": "a-\u003ea-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rectangle_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rellipse_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rellipse_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rellipse_trail",
          "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rellipse_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrawn at the centroid (1/3 * h).\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "risosceles_triangle_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#risosceles_triangle_trail",
          "type": "function"
        },
        "index": {
          "description": "Drawn at the centroid",
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "risosceles_triangle_trail",
          "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:risosceles_triangle_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - bottom left angle must be smaller than 180deg, \n otherwise a runtime error is thrown.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rparallelogram_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rparallelogram_trail",
          "type": "function"
        },
        "index": {
          "description": "Note bottom left angle must be smaller than deg otherwise runtime error is thrown",
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rparallelogram_trail",
          "normalized": "a-\u003ea-\u003eRadian-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rparallelogram_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rrectangle_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rrectangle_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rrectangle_trail",
          "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rrectangle_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rsemicircle_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rsemicircle_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rsemicircle_trail",
          "normalized": "a-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rsemicircle_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rsemiellipse_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rsemiellipse_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rsemiellipse_trail",
          "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rsemiellipse_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - bottom left angle must be smaller than 180deg, \n otherwise a runtime error is thrown.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rtrapezium_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rtrapezium_trail",
          "type": "function"
        },
        "index": {
          "description": "Note bottom left angle must be smaller than deg otherwise runtime error is thrown",
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "rtrapezium_trail",
          "normalized": "a-\u003ea-\u003eRadian-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rtrapezium_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "semicircle_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#semicircle_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "semicircle_trail",
          "normalized": "a-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:semicircle_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "semiellipse_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#semiellipse_trail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "semiellipse_trail",
          "normalized": "a-\u003ea-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:semiellipse_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - bottom left angle must be smaller than 180deg, \n otherwise a runtime error is thrown.\n\u003c/p\u003e\u003cp\u003eAlso, no checking is perfomed on the relation between height\n and bottom_left ang. Out of range values will draw \"twisted\"\n trapezoids.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "trapezium_trail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#trapezium_trail",
          "type": "function"
        },
        "index": {
          "description": "Note bottom left angle must be smaller than deg otherwise runtime error is thrown Also no checking is perfomed on the relation between height and bottom left ang Out of range values will draw twisted trapezoids",
          "hierarchy": "Wumpus Drawing Basis ShapeTrails",
          "module": "Wumpus.Drawing.Basis.ShapeTrails",
          "name": "trapezium_trail",
          "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:trapezium_trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSymbols - many symbols expected to be re-defined as Dots or\n character size PosObjects for DocText.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - naming conventention is to be determined...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "Symbols",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html",
          "type": "module"
        },
        "index": {
          "description": "Symbols many symbols expected to be re-defined as Dots or character size PosObjects for DocText WARNING naming conventention is to be determined",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "Symbols",
          "package": "wumpus-drawing",
          "partial": "Symbols",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "dbl_hbar",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#dbl_hbar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "dbl_hbar",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:dbl_hbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "dbl_vbar",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#dbl_vbar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "dbl_vbar",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:dbl_vbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "empty_box",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#empty_box",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "empty_box",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:empty_box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled circle.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fcircle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fcircle",
          "type": "function"
        },
        "index": {
          "description": "Filled circle Start pos center",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fcircle",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fcircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled left slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fleft_slice",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fleft_slice",
          "type": "function"
        },
        "index": {
          "description": "Filled left slice wedge Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fleft_slice",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fleft_slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled left triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fleft_triangle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fleft_triangle",
          "type": "function"
        },
        "index": {
          "description": "Filled left triangle Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fleft_triangle",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fleft_triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled right slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fright_slice",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fright_slice",
          "type": "function"
        },
        "index": {
          "description": "Filled right slice wedge Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fright_slice",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fright_slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled right triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fright_triangle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fright_triangle",
          "type": "function"
        },
        "index": {
          "description": "Filled right triangle Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fright_triangle",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fright_triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled-stroked circle.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fscircle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fscircle",
          "type": "function"
        },
        "index": {
          "description": "Filled-stroked circle Start pos center",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fscircle",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fscircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled-stroked left slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsleft_slice",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fsleft_slice",
          "type": "function"
        },
        "index": {
          "description": "Filled-stroked left slice wedge Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsleft_slice",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsleft_slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled-stroked left triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsleft_triangle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fsleft_triangle",
          "type": "function"
        },
        "index": {
          "description": "Filled-stroked left triangle Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsleft_triangle",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsleft_triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled square.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsquare",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fsquare",
          "type": "function"
        },
        "index": {
          "description": "Filled square Start pos center",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsquare",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled-stroked right slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsright_slice",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fsright_slice",
          "type": "function"
        },
        "index": {
          "description": "Filled-stroked right slice wedge Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsright_slice",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsright_slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled-stroked right triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsright_triangle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fsright_triangle",
          "type": "function"
        },
        "index": {
          "description": "Filled-stroked right triangle Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fsright_triangle",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsright_triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled-stroked square.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fssquare",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#fssquare",
          "type": "function"
        },
        "index": {
          "description": "Filled-stroked square Start pos center",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "fssquare",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fssquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "hbar",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#hbar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "hbar",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:hbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote this looks horrible for chars with descenders.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ochar",
          "package": "wumpus-drawing",
          "signature": "EscapedChar -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#ochar",
          "type": "function"
        },
        "index": {
          "description": "Note this looks horrible for chars with descenders",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ochar",
          "normalized": "EscapedChar-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "EscapedChar-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ochar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ocharDescender",
          "package": "wumpus-drawing",
          "signature": "EscapedChar -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#ocharDescender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ocharDescender",
          "normalized": "EscapedChar-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Descender",
          "signature": "EscapedChar-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ocharDescender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ocharUpright",
          "package": "wumpus-drawing",
          "signature": "EscapedChar -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#ocharUpright",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ocharUpright",
          "normalized": "EscapedChar-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Upright",
          "signature": "EscapedChar-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ocharUpright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ocurrency",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#ocurrency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ocurrency",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ocurrency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroked circle.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "scircle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#scircle",
          "type": "function"
        },
        "index": {
          "description": "Stroked circle Start pos center",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "scircle",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:scircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroked left slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "sleft_slice",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#sleft_slice",
          "type": "function"
        },
        "index": {
          "description": "Stroked left slice wedge Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "sleft_slice",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:sleft_slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroked left triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "sleft_triangle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#sleft_triangle",
          "type": "function"
        },
        "index": {
          "description": "Stroked left triangle Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "sleft_triangle",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:sleft_triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroked right slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "sright_slice",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#sright_slice",
          "type": "function"
        },
        "index": {
          "description": "Stroked right slice wedge Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "sright_slice",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:sright_slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroked right triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "sright_triangle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#sright_triangle",
          "type": "function"
        },
        "index": {
          "description": "Stroked right triangle Start pos",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "sright_triangle",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:sright_triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroked square.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ssquare",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#ssquare",
          "type": "function"
        },
        "index": {
          "description": "Stroked square Start pos center",
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "ssquare",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ssquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "vbar",
          "package": "wumpus-drawing",
          "signature": "u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Basis-Symbols.html#vbar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Basis Symbols",
          "module": "Wumpus.Drawing.Basis.Symbols",
          "name": "vbar",
          "normalized": "a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:vbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe SVG 'named colours', as rgb [0,1] values \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "SVGColours",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html",
          "type": "module"
        },
        "index": {
          "description": "The SVG named colours as rgb values",
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "SVGColours",
          "package": "wumpus-drawing",
          "partial": "SVGColours",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "alice_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#alice_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "alice_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:alice_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "antique_white",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#antique_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "antique_white",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:antique_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "aqua",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#aqua",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "aqua",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:aqua"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "aquamarine",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#aquamarine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "aquamarine",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:aquamarine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "azure",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#azure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "azure",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:azure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "beige",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#beige",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "beige",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:beige"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "bisque",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#bisque",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "bisque",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:bisque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "black",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#black",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "black",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "blanched_almond",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#blanched_almond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "blanched_almond",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:blanched_almond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "blue_violet",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#blue_violet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "blue_violet",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:blue_violet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "brown",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#brown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "brown",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "burlywood",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#burlywood",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "burlywood",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:burlywood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "cadet_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#cadet_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "cadet_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:cadet_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "chartreuse",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#chartreuse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "chartreuse",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:chartreuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "chocolate",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#chocolate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "chocolate",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:chocolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "coral",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#coral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "coral",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:coral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "cornflower_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#cornflower_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "cornflower_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:cornflower_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "cornsilk",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#cornsilk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "cornsilk",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:cornsilk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "crimson",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#crimson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "crimson",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:crimson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "cyan",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "cyan",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_cyan",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_cyan",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_goldenrod",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_goldenrod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_goldenrod",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_goldenrod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_gray",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_gray",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_grey",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_grey",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_khaki",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_khaki",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_khaki",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_khaki"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_magenta",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_magenta",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_olive_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_olive_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_olive_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_olive_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_orange",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_orange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_orange",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_orange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_orchid",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_orchid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_orchid",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_orchid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_red",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_red",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_salmon",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_salmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_salmon",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_salmon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_sea_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_sea_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_sea_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_sea_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_slate_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_slate_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_slate_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_slate_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_slate_gray",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_slate_gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_slate_gray",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_slate_gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_slate_grey",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_slate_grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_slate_grey",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_slate_grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_turquoise",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_turquoise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_turquoise",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_turquoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_violet",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_violet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dark_violet",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_violet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "deep_pink",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#deep_pink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "deep_pink",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:deep_pink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "deep_sky_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#deep_sky_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "deep_sky_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:deep_sky_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dim_gray",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dim_gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dim_gray",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dim_gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dim_grey",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dim_grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dim_grey",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dim_grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dodger_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#dodger_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "dodger_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dodger_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "firebrick",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#firebrick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "firebrick",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:firebrick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "floral_white",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#floral_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "floral_white",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:floral_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "forest_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#forest_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "forest_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:forest_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "fuchsia",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#fuchsia",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "fuchsia",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:fuchsia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "gainsboro",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#gainsboro",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "gainsboro",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:gainsboro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "ghost_white",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#ghost_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "ghost_white",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:ghost_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "gold",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#gold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "gold",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:gold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "goldenrod",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#goldenrod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "goldenrod",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:goldenrod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "gray",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "gray",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "green_yellow",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#green_yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "green_yellow",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:green_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "grey",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "grey",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "honeydew",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#honeydew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "honeydew",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:honeydew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "hot_pink",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#hot_pink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "hot_pink",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:hot_pink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "indian_red",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#indian_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "indian_red",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:indian_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "indigo",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#indigo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "indigo",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:indigo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "ivory",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#ivory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "ivory",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:ivory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "khaki",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#khaki",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "khaki",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:khaki"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lavender",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#lavender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lavender",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lavender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lavender_blush",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#lavender_blush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lavender_blush",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lavender_blush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lawn_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#lawn_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lawn_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lawn_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lemon_chiffon",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#lemon_chiffon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lemon_chiffon",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lemon_chiffon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_coral",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_coral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_coral",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_coral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_cyan",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_cyan",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_goldenrod_yellow",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_goldenrod_yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_goldenrod_yellow",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_goldenrod_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_gray",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_gray",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_grey",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_grey",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_pink",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_pink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_pink",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_pink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_salmon",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_salmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_salmon",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_salmon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_sea_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_sea_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_sea_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_sea_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_sky_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_sky_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_sky_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_sky_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_slate_gray",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_slate_gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_slate_gray",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_slate_gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_slate_grey",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_slate_grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_slate_grey",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_slate_grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_steel_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_steel_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_steel_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_steel_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_yellow",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "light_yellow",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lime",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#lime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lime",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lime_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#lime_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "lime_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lime_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "linen",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#linen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "linen",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:linen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "magenta",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "magenta",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "maroon",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#maroon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "maroon",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:maroon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_aquamarine",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_aquamarine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_aquamarine",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_aquamarine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_orchid",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_orchid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_orchid",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_orchid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_purple",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_purple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_purple",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_purple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_sea_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_sea_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_sea_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_sea_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_slate_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_slate_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_slate_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_slate_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_spring_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_spring_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_spring_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_spring_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_turquoise",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_turquoise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_turquoise",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_turquoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_violet_red",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_violet_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "medium_violet_red",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_violet_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "midnight_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#midnight_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "midnight_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:midnight_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "mintcream",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#mintcream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "mintcream",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:mintcream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "mistyrose",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#mistyrose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "mistyrose",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:mistyrose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "moccasin",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#moccasin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "moccasin",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:moccasin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "navajo_white",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#navajo_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "navajo_white",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:navajo_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "navy",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#navy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "navy",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:navy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "old_lace",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#old_lace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "old_lace",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:old_lace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "olive",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#olive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "olive",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:olive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "olive_drab",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#olive_drab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "olive_drab",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:olive_drab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "orange",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#orange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "orange",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:orange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "orange_red",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#orange_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "orange_red",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:orange_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "orchid",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#orchid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "orchid",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:orchid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pale_goldenrod",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#pale_goldenrod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pale_goldenrod",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pale_goldenrod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pale_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#pale_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pale_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pale_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pale_turquoise",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#pale_turquoise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pale_turquoise",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pale_turquoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pale_violet_red",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#pale_violet_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pale_violet_red",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pale_violet_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "papaya_whip",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#papaya_whip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "papaya_whip",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:papaya_whip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "peach_puff",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#peach_puff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "peach_puff",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:peach_puff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "peru",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#peru",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "peru",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:peru"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pink",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#pink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "pink",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "plum",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#plum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "plum",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:plum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "powder_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#powder_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "powder_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:powder_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "purple",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#purple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "purple",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:purple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "red",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "red",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "rosy_brown",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#rosy_brown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "rosy_brown",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:rosy_brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "royal_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#royal_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "royal_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:royal_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "saddle_brown",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#saddle_brown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "saddle_brown",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:saddle_brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "salmon",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#salmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "salmon",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:salmon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "sandy_brown",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#sandy_brown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "sandy_brown",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:sandy_brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "sea_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#sea_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "sea_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:sea_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "seashell",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#seashell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "seashell",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:seashell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "sienna",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#sienna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "sienna",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:sienna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "silver",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#silver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "silver",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:silver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "sky_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#sky_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "sky_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:sky_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "slate_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#slate_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "slate_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:slate_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "slate_gray",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#slate_gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "slate_gray",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:slate_gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "slate_grey",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#slate_grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "slate_grey",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:slate_grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "snow",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#snow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "snow",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:snow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "spring_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#spring_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "spring_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:spring_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "steel_blue",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#steel_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "steel_blue",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:steel_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "tan",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#tan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "tan",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "teal",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#teal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "teal",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:teal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "thistle",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#thistle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "thistle",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:thistle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "tomato",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#tomato",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "tomato",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:tomato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "turquoise",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#turquoise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "turquoise",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:turquoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "violet",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#violet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "violet",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:violet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "wheat",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#wheat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "wheat",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:wheat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "white",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "white",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "whitesmoke",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#whitesmoke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "whitesmoke",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:whitesmoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "yellow",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "yellow",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "yellow_green",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-SVGColours.html#yellow_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour SVGColours",
          "module": "Wumpus.Drawing.Colour.SVGColours",
          "name": "yellow_green",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:yellow_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe X11 'named colours', as rgb [0,1] values \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "X11Colours",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html",
          "type": "module"
        },
        "index": {
          "description": "The X11 named colours as rgb values",
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "X11Colours",
          "package": "wumpus-drawing",
          "partial": "Colours",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "antique_white1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#antique_white1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "antique_white1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:antique_white1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "antique_white2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#antique_white2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "antique_white2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:antique_white2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "antique_white3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#antique_white3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "antique_white3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:antique_white3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "antique_white4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#antique_white4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "antique_white4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:antique_white4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "aquamarine1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#aquamarine1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "aquamarine1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:aquamarine1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "aquamarine2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#aquamarine2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "aquamarine2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:aquamarine2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "aquamarine3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#aquamarine3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "aquamarine3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:aquamarine3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "aquamarine4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#aquamarine4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "aquamarine4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:aquamarine4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "azure1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#azure1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "azure1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:azure1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "azure2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#azure2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "azure2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:azure2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "azure3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#azure3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "azure3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:azure3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "azure4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#azure4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "azure4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:azure4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "bisque1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#bisque1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "bisque1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:bisque1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "bisque2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#bisque2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "bisque2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:bisque2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "bisque3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#bisque3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "bisque3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:bisque3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "bisque4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#bisque4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "bisque4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:bisque4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "brown1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#brown1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "brown1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:brown1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "brown2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#brown2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "brown2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:brown2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "brown3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#brown3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "brown3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:brown3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "brown4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#brown4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "brown4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:brown4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "burlywood1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#burlywood1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "burlywood1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:burlywood1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "burlywood2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#burlywood2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "burlywood2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:burlywood2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "burlywood3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#burlywood3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "burlywood3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:burlywood3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "burlywood4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#burlywood4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "burlywood4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:burlywood4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cadet_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cadet_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cadet_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cadet_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cadet_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cadet_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cadet_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cadet_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cadet_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cadet_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cadet_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cadet_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cadet_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cadet_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cadet_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cadet_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chartreuse1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#chartreuse1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chartreuse1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chartreuse1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chartreuse2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#chartreuse2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chartreuse2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chartreuse2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chartreuse3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#chartreuse3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chartreuse3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chartreuse3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chartreuse4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#chartreuse4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chartreuse4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chartreuse4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chocolate1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#chocolate1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chocolate1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chocolate1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chocolate2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#chocolate2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chocolate2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chocolate2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chocolate3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#chocolate3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chocolate3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chocolate3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chocolate4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#chocolate4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "chocolate4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chocolate4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "coral1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#coral1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "coral1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:coral1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "coral2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#coral2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "coral2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:coral2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "coral3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#coral3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "coral3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:coral3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "coral4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#coral4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "coral4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:coral4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cornsilk1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cornsilk1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cornsilk1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cornsilk1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cornsilk2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cornsilk2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cornsilk2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cornsilk2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cornsilk3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cornsilk3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cornsilk3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cornsilk3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cornsilk4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cornsilk4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cornsilk4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cornsilk4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cyan1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cyan1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cyan1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cyan1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cyan2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cyan2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cyan2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cyan2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cyan3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cyan3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cyan3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cyan3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cyan4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#cyan4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "cyan4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cyan4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_goldenrod1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_goldenrod1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_goldenrod1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_goldenrod1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_goldenrod2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_goldenrod2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_goldenrod2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_goldenrod2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_goldenrod3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_goldenrod3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_goldenrod3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_goldenrod3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_goldenrod4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_goldenrod4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_goldenrod4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_goldenrod4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_olive_green1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_olive_green1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_olive_green1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_olive_green1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_olive_green2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_olive_green2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_olive_green2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_olive_green2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_olive_green3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_olive_green3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_olive_green3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_olive_green3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_olive_green4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_olive_green4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_olive_green4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_olive_green4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orange1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orange1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orange1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orange1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orange2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orange2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orange2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orange2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orange3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orange3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orange3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orange3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orange4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orange4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orange4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orange4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orchid1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orchid1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orchid1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orchid1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orchid2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orchid2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orchid2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orchid2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orchid3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orchid3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orchid3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orchid3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orchid4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orchid4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_orchid4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orchid4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_sea_green1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_sea_green1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_sea_green1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_sea_green1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_sea_green2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_sea_green2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_sea_green2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_sea_green2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_sea_green3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_sea_green3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_sea_green3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_sea_green3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_sea_green4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_sea_green4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_sea_green4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_sea_green4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_slate_gray1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_slate_gray1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_slate_gray1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_slate_gray1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_slate_gray2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_slate_gray2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_slate_gray2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_slate_gray2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_slate_gray3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_slate_gray3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_slate_gray3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_slate_gray3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_slate_gray4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_slate_gray4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dark_slate_gray4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_slate_gray4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_pink1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_pink1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_pink1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_pink1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_pink2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_pink2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_pink2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_pink2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_pink3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_pink3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_pink3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_pink3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_pink4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_pink4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_pink4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_pink4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_sky_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_sky_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_sky_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_sky_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_sky_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_sky_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_sky_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_sky_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_sky_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_sky_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_sky_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_sky_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_sky_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_sky_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "deep_sky_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_sky_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dodger_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dodger_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dodger_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dodger_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dodger_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dodger_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dodger_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dodger_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dodger_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dodger_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dodger_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dodger_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dodger_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#dodger_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "dodger_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dodger_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "firebrick1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#firebrick1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "firebrick1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:firebrick1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "firebrick2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#firebrick2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "firebrick2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:firebrick2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "firebrick3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#firebrick3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "firebrick3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:firebrick3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "firebrick4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#firebrick4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "firebrick4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:firebrick4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "gold1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#gold1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "gold1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:gold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "gold2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#gold2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "gold2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:gold2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "gold3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#gold3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "gold3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:gold3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "gold4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#gold4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "gold4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:gold4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "goldenrod1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#goldenrod1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "goldenrod1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:goldenrod1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "goldenrod2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#goldenrod2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "goldenrod2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:goldenrod2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "goldenrod3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#goldenrod3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "goldenrod3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:goldenrod3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "goldenrod4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#goldenrod4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "goldenrod4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:goldenrod4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "green1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#green1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "green1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:green1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "green2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#green2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "green2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:green2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "green3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#green3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "green3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:green3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "green4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#green4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "green4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:green4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "honeydew1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#honeydew1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "honeydew1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:honeydew1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "honeydew2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#honeydew2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "honeydew2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:honeydew2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "honeydew3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#honeydew3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "honeydew3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:honeydew3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "honeydew4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#honeydew4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "honeydew4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:honeydew4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "hot_pink1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#hot_pink1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "hot_pink1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:hot_pink1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "hot_pink2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#hot_pink2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "hot_pink2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:hot_pink2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "hot_pink3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#hot_pink3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "hot_pink3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:hot_pink3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "hot_pink4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#hot_pink4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "hot_pink4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:hot_pink4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "indian_red1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#indian_red1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "indian_red1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:indian_red1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "indian_red2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#indian_red2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "indian_red2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:indian_red2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "indian_red3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#indian_red3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "indian_red3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:indian_red3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "indian_red4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#indian_red4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "indian_red4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:indian_red4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "ivory1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#ivory1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "ivory1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:ivory1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "ivory2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#ivory2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "ivory2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:ivory2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "ivory3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#ivory3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "ivory3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:ivory3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "ivory4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#ivory4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "ivory4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:ivory4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "khaki1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#khaki1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "khaki1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:khaki1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "khaki2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#khaki2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "khaki2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:khaki2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "khaki3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#khaki3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "khaki3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:khaki3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "khaki4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#khaki4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "khaki4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:khaki4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lavender_blush1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#lavender_blush1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lavender_blush1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lavender_blush1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lavender_blush2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#lavender_blush2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lavender_blush2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lavender_blush2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lavender_blush3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#lavender_blush3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lavender_blush3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lavender_blush3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lavender_blush4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#lavender_blush4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lavender_blush4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lavender_blush4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lemon_chiffon1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#lemon_chiffon1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lemon_chiffon1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lemon_chiffon1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lemon_chiffon2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#lemon_chiffon2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lemon_chiffon2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lemon_chiffon2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lemon_chiffon3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#lemon_chiffon3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lemon_chiffon3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lemon_chiffon3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lemon_chiffon4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#lemon_chiffon4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "lemon_chiffon4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lemon_chiffon4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_cyan1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_cyan1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_cyan1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_cyan1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_cyan2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_cyan2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_cyan2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_cyan2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_cyan3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_cyan3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_cyan3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_cyan3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_cyan4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_cyan4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_cyan4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_cyan4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_goldenrod1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_goldenrod1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_goldenrod1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_goldenrod1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_goldenrod2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_goldenrod2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_goldenrod2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_goldenrod2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_goldenrod3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_goldenrod3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_goldenrod3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_goldenrod3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_goldenrod4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_goldenrod4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_goldenrod4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_goldenrod4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_pink1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_pink1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_pink1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_pink1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_pink2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_pink2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_pink2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_pink2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_pink3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_pink3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_pink3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_pink3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_pink4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_pink4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_pink4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_pink4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_salmon1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_salmon1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_salmon1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_salmon1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_salmon2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_salmon2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_salmon2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_salmon2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_salmon3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_salmon3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_salmon3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_salmon3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_salmon4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_salmon4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_salmon4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_salmon4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_sky_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_sky_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_sky_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_sky_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_sky_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_sky_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_sky_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_sky_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_sky_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_sky_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_sky_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_sky_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_sky_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_sky_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_sky_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_sky_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_steel_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_steel_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_steel_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_steel_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_steel_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_steel_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_steel_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_steel_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_steel_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_steel_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_steel_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_steel_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_steel_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_steel_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_steel_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_steel_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_yellow1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_yellow1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_yellow1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_yellow1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_yellow2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_yellow2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_yellow2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_yellow2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_yellow3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_yellow3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_yellow3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_yellow3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_yellow4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_yellow4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "light_yellow4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_yellow4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "magenta1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#magenta1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "magenta1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:magenta1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "magenta2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#magenta2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "magenta2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:magenta2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "magenta3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#magenta3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "magenta3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:magenta3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "magenta4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#magenta4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "magenta4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:magenta4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "maroon1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#maroon1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "maroon1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:maroon1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "maroon2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#maroon2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "maroon2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:maroon2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "maroon3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#maroon3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "maroon3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:maroon3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "maroon4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#maroon4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "maroon4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:maroon4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_orchid1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_orchid1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_orchid1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_orchid1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_orchid2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_orchid2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_orchid2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_orchid2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_orchid3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_orchid3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_orchid3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_orchid3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_orchid4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_orchid4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_orchid4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_orchid4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_purple1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_purple1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_purple1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_purple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_purple2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_purple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_purple2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_purple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_purple3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_purple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_purple3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_purple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_purple4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_purple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "medium_purple4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_purple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "misty_rose1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#misty_rose1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "misty_rose1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:misty_rose1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "misty_rose2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#misty_rose2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "misty_rose2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:misty_rose2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "misty_rose3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#misty_rose3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "misty_rose3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:misty_rose3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "misty_rose4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#misty_rose4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "misty_rose4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:misty_rose4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "navajo_white1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#navajo_white1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "navajo_white1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:navajo_white1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "navajo_white2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#navajo_white2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "navajo_white2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:navajo_white2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "navajo_white3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#navajo_white3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "navajo_white3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:navajo_white3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "navajo_white4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#navajo_white4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "navajo_white4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:navajo_white4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "olive_drab1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#olive_drab1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "olive_drab1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:olive_drab1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "olive_drab2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#olive_drab2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "olive_drab2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:olive_drab2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "olive_drab3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#olive_drab3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "olive_drab3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:olive_drab3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "olive_drab4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#olive_drab4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "olive_drab4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:olive_drab4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange_red1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange_red1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange_red1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange_red1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange_red2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange_red2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange_red2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange_red2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange_red3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange_red3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange_red3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange_red3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange_red4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange_red4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orange_red4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange_red4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orchid1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orchid1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orchid1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orchid1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orchid2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orchid2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orchid2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orchid2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orchid3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orchid3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orchid3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orchid3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orchid4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#orchid4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "orchid4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orchid4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_green1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_green1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_green1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_green1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_green2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_green2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_green2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_green2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_green3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_green3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_green3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_green3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_green4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_green4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_green4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_green4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_turquoise1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_turquoise1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_turquoise1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_turquoise1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_turquoise2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_turquoise2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_turquoise2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_turquoise2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_turquoise3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_turquoise3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_turquoise3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_turquoise3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_turquoise4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_turquoise4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_turquoise4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_turquoise4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_violet_red1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_violet_red1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_violet_red1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_violet_red1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_violet_red2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_violet_red2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_violet_red2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_violet_red2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_violet_red3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_violet_red3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_violet_red3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_violet_red3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_violet_red4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_violet_red4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pale_violet_red4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_violet_red4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "peach_puff1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#peach_puff1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "peach_puff1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:peach_puff1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "peach_puff2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#peach_puff2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "peach_puff2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:peach_puff2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "peach_puff3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#peach_puff3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "peach_puff3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:peach_puff3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "peach_puff4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#peach_puff4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "peach_puff4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:peach_puff4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pink1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pink1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pink1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pink1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pink2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pink2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pink2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pink2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pink3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pink3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pink3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pink3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pink4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#pink4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "pink4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pink4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "plum1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#plum1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "plum1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:plum1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "plum2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#plum2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "plum2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:plum2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "plum3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#plum3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "plum3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:plum3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "plum4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#plum4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "plum4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:plum4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "purple1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#purple1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "purple1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:purple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "purple2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#purple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "purple2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:purple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "purple3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#purple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "purple3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:purple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "purple4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#purple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "purple4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:purple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "red1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#red1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "red1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:red1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "red2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#red2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "red2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:red2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "red3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#red3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "red3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:red3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "red4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#red4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "red4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:red4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "rosy_brown1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#rosy_brown1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "rosy_brown1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:rosy_brown1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "rosy_brown2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#rosy_brown2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "rosy_brown2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:rosy_brown2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "rosy_brown3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#rosy_brown3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "rosy_brown3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:rosy_brown3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "rosy_brown4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#rosy_brown4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "rosy_brown4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:rosy_brown4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "royal_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#royal_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "royal_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:royal_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "royal_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#royal_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "royal_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:royal_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "royal_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#royal_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "royal_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:royal_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "royal_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#royal_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "royal_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:royal_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "salmon1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#salmon1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "salmon1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:salmon1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "salmon2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#salmon2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "salmon2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:salmon2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "salmon3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#salmon3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "salmon3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:salmon3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "salmon4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#salmon4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "salmon4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:salmon4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sea_green1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sea_green1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sea_green1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sea_green1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sea_green2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sea_green2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sea_green2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sea_green2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sea_green3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sea_green3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sea_green3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sea_green3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sea_green4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sea_green4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sea_green4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sea_green4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "seashell1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#seashell1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "seashell1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:seashell1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "seashell2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#seashell2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "seashell2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:seashell2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "seashell3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#seashell3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "seashell3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:seashell3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "seashell4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#seashell4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "seashell4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:seashell4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sienna1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sienna1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sienna1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sienna1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sienna2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sienna2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sienna2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sienna2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sienna3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sienna3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sienna3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sienna3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sienna4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sienna4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sienna4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sienna4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sky_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sky_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sky_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sky_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sky_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sky_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sky_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sky_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sky_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sky_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sky_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sky_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sky_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#sky_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "sky_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sky_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_gray1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_gray1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_gray1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_gray1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_gray2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_gray2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_gray2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_gray2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_gray3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_gray3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_gray3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_gray3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_gray4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_gray4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "slate_gray4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_gray4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "snow1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#snow1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "snow1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:snow1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "snow2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#snow2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "snow2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:snow2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "snow3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#snow3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "snow3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:snow3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "snow4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#snow4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "snow4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:snow4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "spring_green1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#spring_green1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "spring_green1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:spring_green1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "spring_green2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#spring_green2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "spring_green2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:spring_green2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "spring_green3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#spring_green3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "spring_green3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:spring_green3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "spring_green4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#spring_green4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "spring_green4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:spring_green4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "steel_blue1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#steel_blue1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "steel_blue1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:steel_blue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "steel_blue2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#steel_blue2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "steel_blue2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:steel_blue2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "steel_blue3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#steel_blue3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "steel_blue3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:steel_blue3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "steel_blue4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#steel_blue4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "steel_blue4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:steel_blue4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tan1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#tan1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tan1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tan1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tan2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#tan2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tan2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tan2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tan3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#tan3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tan3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tan3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tan4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#tan4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tan4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tan4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "thistle1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#thistle1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "thistle1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:thistle1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "thistle2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#thistle2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "thistle2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:thistle2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "thistle3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#thistle3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "thistle3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:thistle3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "thistle4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#thistle4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "thistle4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:thistle4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tomato1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#tomato1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tomato1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tomato1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tomato2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#tomato2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tomato2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tomato2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tomato3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#tomato3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tomato3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tomato3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tomato4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#tomato4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "tomato4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tomato4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "turquoise1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#turquoise1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "turquoise1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:turquoise1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "turquoise2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#turquoise2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "turquoise2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:turquoise2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "turquoise3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#turquoise3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "turquoise3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:turquoise3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "turquoise4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#turquoise4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "turquoise4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:turquoise4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "violet_red1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#violet_red1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "violet_red1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:violet_red1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "violet_red2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#violet_red2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "violet_red2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:violet_red2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "violet_red3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#violet_red3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "violet_red3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:violet_red3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "violet_red4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#violet_red4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "violet_red4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:violet_red4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "wheat1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#wheat1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "wheat1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:wheat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "wheat2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#wheat2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "wheat2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:wheat2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "wheat3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#wheat3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "wheat3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:wheat3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "wheat4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#wheat4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "wheat4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:wheat4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "yellow1",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#yellow1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "yellow1",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:yellow1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "yellow2",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#yellow2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "yellow2",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:yellow2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "yellow3",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#yellow3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "yellow3",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:yellow3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "yellow4",
          "package": "wumpus-drawing",
          "signature": "RGBi",
          "source": "src/Wumpus-Drawing-Colour-X11Colours.html#yellow4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Colour X11Colours",
          "module": "Wumpus.Drawing.Colour.X11Colours",
          "name": "yellow4",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:yellow4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrowheads.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - naming scheme due to change.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "Arrowheads",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html",
          "type": "module"
        },
        "index": {
          "description": "Arrowheads WARNING naming scheme due to change",
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "Arrowheads",
          "package": "wumpus-drawing",
          "partial": "Arrowheads",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "barb45",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#barb45",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "barb45",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:barb45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "barb60",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#barb60",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "barb60",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:barb60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "barb90",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#barb90",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "barb90",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:barb90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "bracket",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "bracket",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "curveTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#curveTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "curveTip",
          "package": "wumpus-drawing",
          "partial": "Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:curveTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "diamondTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#diamondTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "diamondTip",
          "package": "wumpus-drawing",
          "partial": "Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:diamondTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "diamondWideTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#diamondWideTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "diamondWideTip",
          "package": "wumpus-drawing",
          "partial": "Wide Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:diamondWideTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "diskTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#diskTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "diskTip",
          "package": "wumpus-drawing",
          "partial": "Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:diskTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "odiamondTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#odiamondTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "odiamondTip",
          "package": "wumpus-drawing",
          "partial": "Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:odiamondTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "odiamondWideTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#odiamondWideTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "odiamondWideTip",
          "package": "wumpus-drawing",
          "partial": "Wide Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:odiamondWideTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "odiskTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#odiskTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "odiskTip",
          "package": "wumpus-drawing",
          "partial": "Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:odiskTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "orevtri45",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#orevtri45",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "orevtri45",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:orevtri45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "orevtri60",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#orevtri60",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "orevtri60",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:orevtri60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "orevtri90",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#orevtri90",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "orevtri90",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:orevtri90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "osquareTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#osquareTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "osquareTip",
          "package": "wumpus-drawing",
          "partial": "Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:osquareTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "otri45",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#otri45",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "otri45",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:otri45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "otri60",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#otri60",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "otri60",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:otri60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "otri90",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#otri90",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "otri90",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:otri90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "perp",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#perp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "perp",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:perp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revbarb45",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revbarb45",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revbarb45",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revbarb45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revbarb60",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revbarb60",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revbarb60",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revbarb60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revbarb90",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revbarb90",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revbarb90",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revbarb90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revcurveTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revcurveTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revcurveTip",
          "package": "wumpus-drawing",
          "partial": "Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revcurveTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revtri45",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revtri45",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revtri45",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revtri45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revtri60",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revtri60",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revtri60",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revtri60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revtri90",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revtri90",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "revtri90",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revtri90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "squareTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#squareTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "squareTip",
          "package": "wumpus-drawing",
          "partial": "Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:squareTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled triangle - apex is 45 deg.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "tri45",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#tri45",
          "type": "function"
        },
        "index": {
          "description": "Filled triangle apex is deg",
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "tri45",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:tri45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled triangle - apex is 60 deg.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "tri60",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#tri60",
          "type": "function"
        },
        "index": {
          "description": "Filled triangle apex is deg",
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "tri60",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:tri60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled triangle - apex is 90 deg.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "tri90",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#tri90",
          "type": "function"
        },
        "index": {
          "description": "Filled triangle apex is deg",
          "hierarchy": "Wumpus Drawing Connectors Arrowheads",
          "module": "Wumpus.Drawing.Connectors.Arrowheads",
          "name": "tri90",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:tri90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConnectors...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "Base",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Connectors",
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "Base",
          "package": "wumpus-drawing",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ArrowConnector",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowConnector",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ArrowConnector",
          "package": "wumpus-drawing",
          "partial": "Arrow Connector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ArrowConnector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrowhead \u003cem\u003ealgorithm\u003c/em\u003e - the components of an arrowhead.\n\u003c/p\u003e\u003cp\u003eRetract distance is rather vague - depending on the arrowhead\n it may represent a flush join between the path and the tip\n or a join that uses the z-order (tip over path) to create the \n join.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - pending revision...\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ArrowTip",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
          "type": "data"
        },
        "index": {
          "description": "Arrowhead algorithm the components of an arrowhead Retract distance is rather vague depending on the arrowhead it may represent flush join between the path and the tip or join that uses the z-order tip over path to create the join WARNING pending revision",
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ArrowTip",
          "package": "wumpus-drawing",
          "partial": "Arrow Tip",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ArrowTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etotal_path is the path before accounting for arrow \n retract distances.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorConfig",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
          "type": "data"
        },
        "index": {
          "description": "total path is the path before accounting for arrow retract distances",
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorConfig",
          "package": "wumpus-drawing",
          "partial": "Connector Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ConnectorConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Connectors - a query from start and end point \n returning an AbsPath.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorPathQuery",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorPathQuery",
          "type": "type"
        },
        "index": {
          "description": "The type of Connectors query from start and end point returning an AbsPath",
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorPathQuery",
          "package": "wumpus-drawing",
          "partial": "Connector Path Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ConnectorPathQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorPathSpec",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorPathSpec",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorPathSpec",
          "package": "wumpus-drawing",
          "partial": "Connector Path Spec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ConnectorPathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "SpacingProjection",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#SpacingProjection",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "SpacingProjection",
          "package": "wumpus-drawing",
          "partial": "Spacing Projection",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:SpacingProjection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ArrowTip",
          "package": "wumpus-drawing",
          "signature": "ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ArrowTip",
          "package": "wumpus-drawing",
          "partial": "Arrow Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:ArrowTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorConfig",
          "package": "wumpus-drawing",
          "signature": "ConnectorConfig",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorConfig",
          "package": "wumpus-drawing",
          "partial": "Connector Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:ConnectorConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorPathSpec",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorPathSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "ConnectorPathSpec",
          "package": "wumpus-drawing",
          "partial": "Connector Path Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:ConnectorPathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "arrowDecoratePath",
          "package": "wumpus-drawing",
          "signature": "Maybe ArrowTip -\u003e Maybe ArrowTip -\u003e AbsPath u -\u003e Image u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#arrowDecoratePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "arrowDecoratePath",
          "normalized": "Maybe ArrowTip-\u003eMaybe ArrowTip-\u003eAbsPath a-\u003eImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "partial": "Decorate Path",
          "signature": "Maybe ArrowTip-\u003eMaybe ArrowTip-\u003eAbsPath u-\u003eImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:arrowDecoratePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "conn_arrowl",
          "package": "wumpus-drawing",
          "signature": "Maybe ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "conn_arrowl",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:conn_arrowl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "conn_arrowr",
          "package": "wumpus-drawing",
          "signature": "Maybe ArrowTip",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "conn_arrowr",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:conn_arrowr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "conn_path_spec",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "conn_path_spec",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:conn_path_spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "getConnectorPathSpec",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e ConnectorPathQuery u",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorPathSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "getConnectorPathSpec",
          "normalized": "ConnectorProps-\u003eConnectorPathQuery a",
          "package": "wumpus-drawing",
          "partial": "Connector Path Spec",
          "signature": "ConnectorProps-\u003eConnectorPathQuery u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:getConnectorPathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand...\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "leftArrowConnector",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e ConnectorPathSpec u -\u003e ArrowTip -\u003e ConnectorImage u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#leftArrowConnector",
          "type": "function"
        },
        "index": {
          "description": "Shorthand",
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "leftArrowConnector",
          "normalized": "ConnectorProps-\u003eConnectorPathSpec a-\u003eArrowTip-\u003eConnectorImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "partial": "Arrow Connector",
          "signature": "ConnectorProps-\u003eConnectorPathSpec u-\u003eArrowTip-\u003eConnectorImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:leftArrowConnector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNOTE - the prefix \u003cem\u003erender\u003c/em\u003e needs (re-) consideration...\n\u003c/p\u003e\u003cp\u003eIf it is a good prefix other functions e.g. drawPath should \n use render rather than draw.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "renderConnectorConfig",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e ConnectorConfig u -\u003e ConnectorImage u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#renderConnectorConfig",
          "type": "function"
        },
        "index": {
          "description": "NOTE the prefix render needs re consideration If it is good prefix other functions e.g drawPath should use render rather than draw",
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "renderConnectorConfig",
          "normalized": "ConnectorProps-\u003eConnectorConfig a-\u003eConnectorImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "partial": "Connector Config",
          "signature": "ConnectorProps-\u003eConnectorConfig u-\u003eConnectorImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:renderConnectorConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "retract_distance",
          "package": "wumpus-drawing",
          "signature": "En",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "retract_distance",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:retract_distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "rightArrowConnector",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e ConnectorPathSpec u -\u003e ArrowTip -\u003e ConnectorImage u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#rightArrowConnector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "rightArrowConnector",
          "normalized": "ConnectorProps-\u003eConnectorPathSpec a-\u003eArrowTip-\u003eConnectorImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "partial": "Arrow Connector",
          "signature": "ConnectorProps-\u003eConnectorPathSpec u-\u003eArrowTip-\u003eConnectorImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:rightArrowConnector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "tip_deco",
          "package": "wumpus-drawing",
          "signature": "LocThetaGraphic En",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "tip_deco",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:tip_deco"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "tip_half_len",
          "package": "wumpus-drawing",
          "signature": "En",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "tip_half_len",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:tip_half_len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "uniformArrowConnector",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e ConnectorPathSpec u -\u003e ArrowTip -\u003e ConnectorImage u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Connectors-Base.html#uniformArrowConnector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors Base",
          "module": "Wumpus.Drawing.Connectors.Base",
          "name": "uniformArrowConnector",
          "normalized": "ConnectorProps-\u003eConnectorPathSpec a-\u003eArrowTip-\u003eConnectorImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "partial": "Arrow Connector",
          "signature": "ConnectorProps-\u003eConnectorPathSpec u-\u003eArrowTip-\u003eConnectorImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:uniformArrowConnector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBox connectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "BoxConnectors",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html",
          "type": "module"
        },
        "index": {
          "description": "Box connectors",
          "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "BoxConnectors",
          "package": "wumpus-drawing",
          "partial": "Box Connectors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of BoxConnectors - a query from start and end point \n to a Path. \n\u003c/p\u003e\u003cp\u003eNote - unlike a \u003ccode\u003eConnector\u003c/code\u003e, a BoxConnnector is expected to be \n closed, then filled, stroked or bordered.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "ConnectorBox",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#ConnectorBox",
          "type": "type"
        },
        "index": {
          "description": "The type of BoxConnectors query from start and end point to Path Note unlike Connector BoxConnnector is expected to be closed then filled stroked or bordered",
          "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "ConnectorBox",
          "package": "wumpus-drawing",
          "partial": "Connector Box",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#t:ConnectorBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "ConnectorBoxSpec",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#ConnectorBoxSpec",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "ConnectorBoxSpec",
          "package": "wumpus-drawing",
          "partial": "Connector Box Spec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#t:ConnectorBoxSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "ConnectorBoxSpec",
          "package": "wumpus-drawing",
          "signature": "ConnectorBoxSpec",
          "source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#ConnectorBoxSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "ConnectorBoxSpec",
          "package": "wumpus-drawing",
          "partial": "Connector Box Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:ConnectorBoxSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a stroked, rectangular box around the connector points.\n\u003c/p\u003e\u003cp\u003eThe rectangle will be inclined to the line.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "conn_box",
          "package": "wumpus-drawing",
          "signature": "ConnectorBoxSpec u",
          "source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#conn_box",
          "type": "function"
        },
        "index": {
          "description": "Draw stroked rectangular box around the connector points The rectangle will be inclined to the line",
          "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "conn_box",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:conn_box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a stroked, chamfered box around the connector points.\n\u003c/p\u003e\u003cp\u003eThe tube will be inclined to the line.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "conn_chamf_box",
          "package": "wumpus-drawing",
          "signature": "ConnectorBoxSpec u",
          "source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#conn_chamf_box",
          "type": "function"
        },
        "index": {
          "description": "Draw stroked chamfered box around the connector points The tube will be inclined to the line",
          "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "conn_chamf_box",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:conn_chamf_box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a stroked, tube around the connector points.\n\u003c/p\u003e\u003cp\u003eThe tube will be inclined to the line.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "conn_tube",
          "package": "wumpus-drawing",
          "signature": "ConnectorBoxSpec u",
          "source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#conn_tube",
          "type": "function"
        },
        "index": {
          "description": "Draw stroked tube around the connector points The tube will be inclined to the line",
          "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "conn_tube",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:conn_tube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "getConnectorBoxSpec",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e ConnectorBox u",
          "source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#ConnectorBoxSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "getConnectorBoxSpec",
          "normalized": "ConnectorProps-\u003eConnectorBox a",
          "package": "wumpus-drawing",
          "partial": "Connector Box Spec",
          "signature": "ConnectorProps-\u003eConnectorBox u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:getConnectorBoxSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "renderConnectorBoxSpec",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e ConnectorBoxSpec u -\u003e ConnectorBox u",
          "source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#renderConnectorBoxSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
          "module": "Wumpus.Drawing.Connectors.BoxConnectors",
          "name": "renderConnectorBoxSpec",
          "normalized": "ConnectorProps-\u003eConnectorBoxSpec a-\u003eConnectorBox a",
          "package": "wumpus-drawing",
          "partial": "Connector Box Spec",
          "signature": "ConnectorProps-\u003eConnectorBoxSpec u-\u003eConnectorBox u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:renderConnectorBoxSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive connectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "ConnectorPaths",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive connectors",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "ConnectorPaths",
          "package": "wumpus-drawing",
          "partial": "Connector Paths",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiagonal-horizontal connector.\n\u003c/p\u003e\u003cpre\u003e    --@\n   /\n  o\n\u003c/pre\u003e\u003cp\u003eRestricted variant of \u003ccode\u003ehconndiag\u003c/code\u003e - a diagonal segment is drawn \n from the start point joining a horizontal arm drawn from the \n end point\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_diagh",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_diagh",
          "type": "function"
        },
        "index": {
          "description": "Diagonal-horizontal connector Restricted variant of hconndiag diagonal segment is drawn from the start point joining horizontal arm drawn from the end point",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_diagh",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_diagh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiagonal-vertical connector.\n\u003c/p\u003e\u003cpre\u003e    @\n    |\n   /\n  o\n\u003c/pre\u003e\u003cp\u003eRestricted variant of \u003ccode\u003evconndiag\u003c/code\u003e - a diagonal segment is drawn \n from the start point joining a vertical arm drawn from the end \n point.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_diagv",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_diagv",
          "type": "function"
        },
        "index": {
          "description": "Diagonal-vertical connector Restricted variant of vconndiag diagonal segment is drawn from the start point joining vertical arm drawn from the end point",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_diagv",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_diagv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBezier curve connector - the control points are positioned \n horizontally respective to the source and dest.\n\u003c/p\u003e\u003cpre\u003e  *--@ \n    .  \n   . \n  o--*  \n\u003c/pre\u003e\u003cp\u003eNote - the source and dest arm lengths are doubled, generally \n this produces nicer curves.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_hbezier",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_hbezier",
          "type": "function"
        },
        "index": {
          "description": "Bezier curve connector the control points are positioned horizontally respective to the source and dest Note the source and dest arm lengths are doubled generally this produces nicer curves",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_hbezier",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_hbezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal-diagonal connector.\n\u003c/p\u003e\u003cpre\u003e      @\n     /\n  o--\n\u003c/pre\u003e\u003cp\u003eRestricted variant of \u003ccode\u003ehconndiag\u003c/code\u003e - a horizontal arm is drawn\n from the start point joining a diagonal segment drawn from the \n end point.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_hdiag",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_hdiag",
          "type": "function"
        },
        "index": {
          "description": "Horizontal-diagonal connector Restricted variant of hconndiag horizontal arm is drawn from the start point joining diagonal segment drawn from the end point",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_hdiag",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_hdiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal-diagonal-horizontal connector.\n\u003c/p\u003e\u003cpre\u003e      --@\n     /\n  o--\n\u003c/pre\u003e\u003cp\u003eHorizontal \u003cem\u003earms\u003c/em\u003e are drawn from the start and end points, a\n diagonal segment joins the arms. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_hdiagh",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_hdiagh",
          "type": "function"
        },
        "index": {
          "description": "Horizontal-diagonal-horizontal connector Horizontal arms are drawn from the start and end points diagonal segment joins the arms",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_hdiagh",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_hdiagh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnector with two horizontal segments and a joining \n vertical segment.\n\u003c/p\u003e\u003cpre\u003e       ,--@\n       |\n  o----'  \n\u003c/pre\u003e\u003cp\u003eThe length of the first horizontal segment is the source arm \n length. The length of the final segment is the remaining \n horizontal distance. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_hrr",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_hrr",
          "type": "function"
        },
        "index": {
          "description": "Connector with two horizontal segments and joining vertical segment The length of the first horizontal segment is the source arm length The length of the final segment is the remaining horizontal distance",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_hrr",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_hrr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStraight line connector.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_line",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_line",
          "type": "function"
        },
        "index": {
          "description": "Straight line connector",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_line",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnector with two horizontal segements and a joining \n vertical segment.\n\u003c/p\u003e\u003cpre\u003e     ,----@\n     |\n  o--'  \n\u003c/pre\u003e\u003cp\u003eThe length of the final horizontal segment is the destination \n arm length. The length of the initial segment is the remaining\n horizontal distance. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_rrh",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_rrh",
          "type": "function"
        },
        "index": {
          "description": "Connector with two horizontal segements and joining vertical segment The length of the final horizontal segment is the destination arm length The length of the initial segment is the remaining horizontal distance",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_rrh",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_rrh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnector with two right angles...\n\u003c/p\u003e\u003cpre\u003e       @\n       |\n  ,----'\n  |\n  o  \n\u003c/pre\u003e\u003cp\u003eThe length of the final vertical segment is the destination \n arm length. The length of the initial segment is the remaining\n vertical distance. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_rrv",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_rrv",
          "type": "function"
        },
        "index": {
          "description": "Connector with two right angles The length of the final vertical segment is the destination arm length The length of the initial segment is the remaining vertical distance",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_rrv",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_rrv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBezier curve connector - the control points are positioned \n vertically respective to the source and dest.\n\u003c/p\u003e\u003cpre\u003e        @ \n       .|  \n  *  .  *\n  |.\n  o\n\u003c/pre\u003e\u003cp\u003eNote - the source and dest arm lengths are doubled, generally \n this produces nicer curves.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_vbezier",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_vbezier",
          "type": "function"
        },
        "index": {
          "description": "Bezier curve connector the control points are positioned vertically respective to the source and dest Note the source and dest arm lengths are doubled generally this produces nicer curves",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_vbezier",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_vbezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical-diagonal connector.\n\u003c/p\u003e\u003cpre\u003e    @\n   /\n  |\n  o\n\u003c/pre\u003e\u003cp\u003eRestricted variant of \u003ccode\u003evconndiag\u003c/code\u003e - a horizontal arm is drawn\n from the start point joining a vertical segment drawn from the \n end point.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_vdiag",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_vdiag",
          "type": "function"
        },
        "index": {
          "description": "Vertical-diagonal connector Restricted variant of vconndiag horizontal arm is drawn from the start point joining vertical segment drawn from the end point",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_vdiag",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_vdiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical-diagonal-vertical connector.\n\u003c/p\u003e\u003cpre\u003e  @\n  |\n   \\\n    |\n    o\n\u003c/pre\u003e\u003cp\u003eVertical \u003cem\u003earms\u003c/em\u003e are drawn from the start and end points, a\n diagonal segment joins the arms. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_vdiagv",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_vdiagv",
          "type": "function"
        },
        "index": {
          "description": "Vertical-diagonal-vertical connector Vertical arms are drawn from the start and end points diagonal segment joins the arms",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_vdiagv",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_vdiagv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnector with two right angles...\n\u003c/p\u003e\u003cpre\u003e       @\n       |\n  ,----'\n  |\n  o  \n\u003c/pre\u003e\u003cp\u003eThe length of the first vertical segment is the source arm \n length. The length of the final segment is the remaining \n vertical distance. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_vrr",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_vrr",
          "type": "function"
        },
        "index": {
          "description": "Connector with two right angles The length of the first vertical segment is the source arm length The length of the final segment is the remaining vertical distance",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conn_vrr",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_vrr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm an arc connector.\n\u003c/p\u003e\u003cp\u003eIf the conn_arc_angle in the Drawing context is positive the arc\n will be formed \u003cem\u003eabove\u003c/em\u003e the straight line joining the points. \n If the angle is negative it will be drawn below. \n\u003c/p\u003e\u003cp\u003eThe notion of \u003cem\u003eabove\u003c/em\u003e is respective to the line direction, of \n course.\n\u003c/p\u003e\u003cp\u003eTODO - above and below versions...\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_arc",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_arc",
          "type": "function"
        },
        "index": {
          "description": "Form an arc connector If the conn arc angle in the Drawing context is positive the arc will be formed above the straight line joining the points If the angle is negative it will be drawn below The notion of above is respective to the line direction of course TODO above and below versions",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_arc",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar connector.\n\u003c/p\u003e\u003cpre\u003e  ,----, \n  |    |\n  o    @  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_bar",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_bar",
          "type": "function"
        },
        "index": {
          "description": "Bar connector The bar is drawn above the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_bar",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eFlam\u003c/em\u003e connector.\n\u003c/p\u003e\u003cpre\u003e    ,- '\n  ,-   | \n  |    |\n  o    @  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_flam",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_flam",
          "type": "function"
        },
        "index": {
          "description": "Flam connector The bar is drawn above the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_flam",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_flam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop connector.\n\u003c/p\u003e\u003cpre\u003e  ,---------, \n  |         |\n  '-o    @--'\n\u003c/pre\u003e\u003cp\u003eThe loop is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_loop",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_loop",
          "type": "function"
        },
        "index": {
          "description": "Loop connector The loop is drawn above the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_loop",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar connector - always orthonormal .\n\u003c/p\u003e\u003cpre\u003e  \n  ,----, \n  |    |\n  o    @  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_orthohbar",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_orthohbar",
          "type": "function"
        },
        "index": {
          "description": "Bar connector always orthonormal The bar is drawn above the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_orthohbar",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_orthohbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar connector - always orthonormal.\n\u003c/p\u003e\u003cpre\u003e  \n  ,--- o \n  |   \n  '--- @  \n \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eleft\u003c/em\u003e of the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_orthovbar",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_orthovbar",
          "type": "function"
        },
        "index": {
          "description": "Bar connector always orthonormal The bar is drawn left of the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_orthovbar",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_orthovbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight angle connector.\n\u003c/p\u003e\u003cpre\u003e  ,----@ \n  | \n  o   \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_right",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_right",
          "type": "function"
        },
        "index": {
          "description": "Right angle connector The bar is drawn above the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "conna_right",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBelow version of \u003ccode\u003e\u003ca\u003econna_arc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_arc",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_arc",
          "type": "function"
        },
        "index": {
          "description": "Below version of conna arc",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_arc",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar connector.\n\u003c/p\u003e\u003cpre\u003e  o    @ \n  |    |\n  '----'  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003ebelow\u003c/em\u003e the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_bar",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_bar",
          "type": "function"
        },
        "index": {
          "description": "Bar connector The bar is drawn below the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_bar",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eFlam\u003c/em\u003e connector - bleow.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_flam",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_flam",
          "type": "function"
        },
        "index": {
          "description": "Flam connector bleow",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_flam",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_flam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop connector.\n\u003c/p\u003e\u003cpre\u003e  ,-o    @--, \n  |         |\n  '---------'\n\u003c/pre\u003e\u003cp\u003eThe loop is drawn \u003cem\u003ebelow\u003c/em\u003e the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_loop",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_loop",
          "type": "function"
        },
        "index": {
          "description": "Loop connector The loop is drawn below the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_loop",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar connector orthonormal - below.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_orthohbar",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_orthohbar",
          "type": "function"
        },
        "index": {
          "description": "Bar connector orthonormal below",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_orthohbar",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_orthohbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar connector orthonormal - right of the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_orthovbar",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_orthovbar",
          "type": "function"
        },
        "index": {
          "description": "Bar connector orthonormal right of the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_orthovbar",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_orthovbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight angle connector.\n\u003c/p\u003e\u003cpre\u003e       @ \n       |\n  o----'  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003ebelow\u003c/em\u003e the points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_right",
          "package": "wumpus-drawing",
          "signature": "ConnectorPathSpec u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_right",
          "type": "function"
        },
        "index": {
          "description": "Right angle connector The bar is drawn below the points",
          "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
          "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
          "name": "connb_right",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConnectors...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "ConnectorProps",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html",
          "type": "module"
        },
        "index": {
          "description": "Connectors",
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "ConnectorProps",
          "package": "wumpus-drawing",
          "partial": "Connector Props",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnectorProps control the drawing of connectors in \n Wumpus-Drawing.\n\u003c/p\u003e\u003cpre\u003e conn_src_space     :: Em\n conn_dst_space     :: Em\n\u003c/pre\u003e\u003cp\u003eSource and destination offsets - these offset the drawing of\n the connector perpendicular to the direction of line formed \n between the connector points (a positive offset is drawn above, \n a negative offset below). The main use of offsets is to draw\n parallel line connectors.\n\u003c/p\u003e\u003cpre\u003e conn_arc_ang       :: Radian \n\u003c/pre\u003e\u003cp\u003eControl the \u003cem\u003ebend\u003c/em\u003e of an arc connector.\n\u003c/p\u003e\u003cpre\u003e conn_src_arm       :: Em\n conn_dst_arm       :: Em \n\u003c/pre\u003e\u003cp\u003eControl the \u003cem\u003earm\u003c/em\u003e length of a jointed connector - arms are the \n initial segments of the connector. \n\u003c/p\u003e\u003cpre\u003e conn_loop_size     :: Em\n\u003c/pre\u003e\u003cp\u003eControl the \u003cem\u003eheight\u003c/em\u003e of a loop connector. \n\u003c/p\u003e\u003cpre\u003e conn_box_halfsize  :: Em\n\u003c/pre\u003e\u003cp\u003eControl the size of a connector box. Connector boxes are \n drawn with the exterior lines projected out from the connector\n points a halfsize above and below.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "ConnectorProps",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
          "type": "data"
        },
        "index": {
          "description": "ConnectorProps control the drawing of connectors in Wumpus-Drawing conn src space Em conn dst space Em Source and destination offsets these offset the drawing of the connector perpendicular to the direction of line formed between the connector points positive offset is drawn above negative offset below The main use of offsets is to draw parallel line connectors conn arc ang Radian Control the bend of an arc connector conn src arm Em conn dst arm Em Control the arm length of jointed connector arms are the initial segments of the connector conn loop size Em Control the height of loop connector conn box halfsize Em Control the size of connector box Connector boxes are drawn with the exterior lines projected out from the connector points halfsize above and below",
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "ConnectorProps",
          "package": "wumpus-drawing",
          "partial": "Connector Props",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#t:ConnectorProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "ConnectorProps",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "ConnectorProps",
          "package": "wumpus-drawing",
          "partial": "Connector Props",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:ConnectorProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_arc_ang",
          "package": "wumpus-drawing",
          "signature": "Radian",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_arc_ang",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_arc_ang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_box_halfsize",
          "package": "wumpus-drawing",
          "signature": "Em",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_box_halfsize",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_box_halfsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_dst_arm",
          "package": "wumpus-drawing",
          "signature": "Em",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_dst_arm",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_dst_arm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_dst_space",
          "package": "wumpus-drawing",
          "signature": "Em",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_dst_space",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_dst_space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_loop_size",
          "package": "wumpus-drawing",
          "signature": "Em",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_loop_size",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_loop_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_src_arm",
          "package": "wumpus-drawing",
          "signature": "Em",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_src_arm",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_src_arm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_src_space",
          "package": "wumpus-drawing",
          "signature": "Em",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "conn_src_space",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_src_space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorArms",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e m (u, u)",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorArms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorArms",
          "normalized": "ConnectorProps-\u003ea(b,b)",
          "package": "wumpus-drawing",
          "partial": "Arms",
          "signature": "ConnectorProps-\u003em(u,u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorArms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorBoxHalfSize",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e m u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorBoxHalfSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorBoxHalfSize",
          "normalized": "ConnectorProps-\u003ea b",
          "package": "wumpus-drawing",
          "partial": "Box Half Size",
          "signature": "ConnectorProps-\u003em u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorBoxHalfSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorDstSpace",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e m u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorDstSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorDstSpace",
          "normalized": "ConnectorProps-\u003ea b",
          "package": "wumpus-drawing",
          "partial": "Dst Space",
          "signature": "ConnectorProps-\u003em u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorDstSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003elegs\u003c/em\u003e are Arms + spacing.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorLegs",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e m (u, u)",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorLegs",
          "type": "function"
        },
        "index": {
          "description": "legs are Arms spacing",
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorLegs",
          "normalized": "ConnectorProps-\u003ea(b,b)",
          "package": "wumpus-drawing",
          "partial": "Legs",
          "signature": "ConnectorProps-\u003em(u,u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorLegs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorLoopSize",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e m u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorLoopSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorLoopSize",
          "normalized": "ConnectorProps-\u003ea b",
          "package": "wumpus-drawing",
          "partial": "Loop Size",
          "signature": "ConnectorProps-\u003em u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorLoopSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorSrcSpace",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps -\u003e m u",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorSrcSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "connectorSrcSpace",
          "normalized": "ConnectorProps-\u003ea b",
          "package": "wumpus-drawing",
          "partial": "Src Space",
          "signature": "ConnectorProps-\u003em u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorSrcSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault connector properties.\n\u003c/p\u003e\u003cpre\u003e conn_src_sep:        0\n conn_dst_sep:        0\n conn_arc_ang:        pi / 12\n conn_src_arm:        1\n conn_dst_arm:        1\n conn_loop_size:      2 \n conn_box_half_size:  2\n\u003c/pre\u003e\u003cp\u003eArc angle is 15deg - quite shallow.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "default_connector_props",
          "package": "wumpus-drawing",
          "signature": "ConnectorProps",
          "source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#default_connector_props",
          "type": "function"
        },
        "index": {
          "description": "Default connector properties conn src sep conn dst sep conn arc ang pi conn src arm conn dst arm conn loop size conn box half size Arc angle is deg quite shallow",
          "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
          "module": "Wumpus.Drawing.Connectors.ConnectorProps",
          "name": "default_connector_props",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:default_connector_props"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShim module for Connectors.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - this is due to change...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Connectors",
          "name": "Connectors",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Connectors.html",
          "type": "module"
        },
        "index": {
          "description": "Shim module for Connectors WARNING this is due to change",
          "hierarchy": "Wumpus Drawing Connectors",
          "module": "Wumpus.Drawing.Connectors",
          "name": "Connectors",
          "package": "wumpus-drawing",
          "partial": "Connectors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDots with anchors.\n\u003c/p\u003e\u003cp\u003eIn many cases a surrounding circle is used to locate anchor\n points - this could be improved to use the actual dot border \n at some point.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "AnchorDots",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html",
          "type": "module"
        },
        "index": {
          "description": "Dots with anchors In many cases surrounding circle is used to locate anchor points this could be improved to use the actual dot border at some point",
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "AnchorDots",
          "package": "wumpus-drawing",
          "partial": "Anchor Dots",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "DDotLocImage",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#DDotLocImage",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "DDotLocImage",
          "package": "wumpus-drawing",
          "partial": "DDot Loc Image",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#t:DDotLocImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll dots return the same thing a \u003ccode\u003e\u003ca\u003eDotAnchor\u003c/a\u003e\u003c/code\u003e which supports \n the same (limited) see of anchors.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "DotAnchor",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#DotAnchor",
          "type": "data"
        },
        "index": {
          "description": "All dots return the same thing DotAnchor which supports the same limited see of anchors",
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "DotAnchor",
          "package": "wumpus-drawing",
          "partial": "Dot Anchor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#t:DotAnchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "DotLocImage",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#DotLocImage",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "DotLocImage",
          "package": "wumpus-drawing",
          "partial": "Dot Loc Image",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#t:DotLocImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotAsterisk",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotAsterisk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotAsterisk",
          "package": "wumpus-drawing",
          "partial": "Asterisk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotAsterisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotChar",
          "package": "wumpus-drawing",
          "signature": "Char -\u003e DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotChar",
          "normalized": "Char-\u003eDotLocImage a",
          "package": "wumpus-drawing",
          "partial": "Char",
          "signature": "Char-\u003eDotLocImage u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotCircle",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotCircle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotCircle",
          "package": "wumpus-drawing",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotCross",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotCross",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotCross",
          "package": "wumpus-drawing",
          "partial": "Cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotDiamond",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotDiamond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotDiamond",
          "package": "wumpus-drawing",
          "partial": "Diamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotDiamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotDisk",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotDisk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotDisk",
          "package": "wumpus-drawing",
          "partial": "Disk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotDisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotFDiamond",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotFDiamond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotFDiamond",
          "package": "wumpus-drawing",
          "partial": "FDiamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotFDiamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotFOCross",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotFOCross",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotFOCross",
          "package": "wumpus-drawing",
          "partial": "FOCross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotFOCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotHBar",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotHBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotHBar",
          "package": "wumpus-drawing",
          "partial": "HBar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotHBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotNone",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotNone",
          "package": "wumpus-drawing",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotOCross",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotOCross",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotOCross",
          "package": "wumpus-drawing",
          "partial": "OCross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotOCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotOPlus",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotOPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotOPlus",
          "package": "wumpus-drawing",
          "partial": "OPlus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotOPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotPentagon",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotPentagon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotPentagon",
          "package": "wumpus-drawing",
          "partial": "Pentagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotPentagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotPlus",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotPlus",
          "package": "wumpus-drawing",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotSquare",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotSquare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotSquare",
          "package": "wumpus-drawing",
          "partial": "Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotStar",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotStar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotStar",
          "package": "wumpus-drawing",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotText",
          "package": "wumpus-drawing",
          "signature": "String -\u003e DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotText",
          "normalized": "String-\u003eDotLocImage a",
          "package": "wumpus-drawing",
          "partial": "Text",
          "signature": "String-\u003eDotLocImage u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotTriangle",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotTriangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotTriangle",
          "package": "wumpus-drawing",
          "partial": "Triangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotTriangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotVBar",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotVBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotVBar",
          "package": "wumpus-drawing",
          "partial": "VBar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotVBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotX",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "dotX",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "largeCirc",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#largeCirc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "largeCirc",
          "package": "wumpus-drawing",
          "partial": "Circ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:largeCirc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "largeDisk",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#largeDisk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "largeDisk",
          "package": "wumpus-drawing",
          "partial": "Disk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:largeDisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "smallCirc",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#smallCirc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "smallCirc",
          "package": "wumpus-drawing",
          "partial": "Circ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:smallCirc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "smallDisk",
          "package": "wumpus-drawing",
          "signature": "DotLocImage u",
          "source": "src/Wumpus-Drawing-Dots-AnchorDots.html#smallDisk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots AnchorDots",
          "module": "Wumpus.Drawing.Dots.AnchorDots",
          "name": "smallDisk",
          "package": "wumpus-drawing",
          "partial": "Disk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:smallDisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple dots - no anchor handles.\n\u003c/p\u003e\u003cp\u003eUse these where you just want to draw Dots, and do not need\n connectors between them. \n\u003c/p\u003e\u003cp\u003eThe text and char marks need loaded glyph metrics for proper \n centering. \n\u003c/p\u003e\u003cp\u003e** WARNING ** - names are expected to change - filled and\n background-filled marks need a naming convention.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "SimpleDots",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html",
          "type": "module"
        },
        "index": {
          "description": "Simple dots no anchor handles Use these where you just want to draw Dots and do not need connectors between them The text and char marks need loaded glyph metrics for proper centering WARNING names are expected to change filled and background-filled marks need naming convention",
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "SimpleDots",
          "package": "wumpus-drawing",
          "partial": "Simple Dots",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarkUnit is a contextual unit like \u003ccode\u003e\u003ca\u003eEm\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is 3/4 of the current font size.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "MarkSize",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#MarkSize",
          "type": "data"
        },
        "index": {
          "description": "MarkUnit is contextual unit like Em and En It is of the current font size",
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "MarkSize",
          "package": "wumpus-drawing",
          "partial": "Mark Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#t:MarkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotAsterisk",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotAsterisk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotAsterisk",
          "package": "wumpus-drawing",
          "partial": "Asterisk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotAsterisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotBDiamond",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotBDiamond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotBDiamond",
          "package": "wumpus-drawing",
          "partial": "BDiamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotBDiamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotChar",
          "package": "wumpus-drawing",
          "signature": "Char -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotChar",
          "normalized": "Char-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Char",
          "signature": "Char-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotCircle",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotCircle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotCircle",
          "package": "wumpus-drawing",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotCross",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotCross",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotCross",
          "package": "wumpus-drawing",
          "partial": "Cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotDiamond",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotDiamond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotDiamond",
          "package": "wumpus-drawing",
          "partial": "Diamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotDiamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote disk is filled.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotDisk",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotDisk",
          "type": "function"
        },
        "index": {
          "description": "Note disk is filled",
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotDisk",
          "package": "wumpus-drawing",
          "partial": "Disk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotDisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotEscChar",
          "package": "wumpus-drawing",
          "signature": "EscapedChar -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotEscChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotEscChar",
          "normalized": "EscapedChar-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Esc Char",
          "signature": "EscapedChar-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotEscChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotEscText",
          "package": "wumpus-drawing",
          "signature": "EscapedText -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotEscText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotEscText",
          "normalized": "EscapedText-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Esc Text",
          "signature": "EscapedText-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotEscText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotFDiamond",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotFDiamond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotFDiamond",
          "package": "wumpus-drawing",
          "partial": "FDiamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotFDiamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotFOCross",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotFOCross",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotFOCross",
          "package": "wumpus-drawing",
          "partial": "FOCross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotFOCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotHBar",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotHBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotHBar",
          "package": "wumpus-drawing",
          "partial": "HBar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotHBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotNone",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotNone",
          "package": "wumpus-drawing",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotOCross",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotOCross",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotOCross",
          "package": "wumpus-drawing",
          "partial": "OCross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotOCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotOPlus",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotOPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotOPlus",
          "package": "wumpus-drawing",
          "partial": "OPlus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotOPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotPentagon",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotPentagon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotPentagon",
          "package": "wumpus-drawing",
          "partial": "Pentagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotPentagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotPlus",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotPlus",
          "package": "wumpus-drawing",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotSquare",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotSquare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotSquare",
          "package": "wumpus-drawing",
          "partial": "Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotStar",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotStar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotStar",
          "package": "wumpus-drawing",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotText",
          "package": "wumpus-drawing",
          "signature": "String -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotText",
          "normalized": "String-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Text",
          "signature": "String-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotTriangle",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotTriangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotTriangle",
          "package": "wumpus-drawing",
          "partial": "Triangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotTriangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotVBar",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotVBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotVBar",
          "package": "wumpus-drawing",
          "partial": "VBar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotVBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotX",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "dotX",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroked disk (circle) - radius 1.0 MarkSize.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "largeCirc",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#largeCirc",
          "type": "function"
        },
        "index": {
          "description": "Stroked disk circle radius MarkSize",
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "largeCirc",
          "package": "wumpus-drawing",
          "partial": "Circ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:largeCirc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled disk - radius 1.0 MarkSize.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "largeDisk",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#largeDisk",
          "type": "function"
        },
        "index": {
          "description": "Filled disk radius MarkSize",
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "largeDisk",
          "package": "wumpus-drawing",
          "partial": "Disk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:largeDisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroked disk (circle) - radius 0.25 MarkSize.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "smallCirc",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#smallCirc",
          "type": "function"
        },
        "index": {
          "description": "Stroked disk circle radius MarkSize",
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "smallCirc",
          "package": "wumpus-drawing",
          "partial": "Circ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:smallCirc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilled disk - radius 0.25 MarkSize.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "smallDisk",
          "package": "wumpus-drawing",
          "signature": "LocGraphic u",
          "source": "src/Wumpus-Drawing-Dots-SimpleDots.html#smallDisk",
          "type": "function"
        },
        "index": {
          "description": "Filled disk radius MarkSize",
          "hierarchy": "Wumpus Drawing Dots SimpleDots",
          "module": "Wumpus.Drawing.Dots.SimpleDots",
          "name": "smallDisk",
          "package": "wumpus-drawing",
          "partial": "Disk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:smallDisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDrawing grids\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Extras.Axes",
          "name": "Axes",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Extras-Axes.html",
          "type": "module"
        },
        "index": {
          "description": "Drawing grids",
          "hierarchy": "Wumpus Drawing Extras Axes",
          "module": "Wumpus.Drawing.Extras.Axes",
          "name": "Axes",
          "package": "wumpus-drawing",
          "partial": "Axes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Axes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Axes",
          "name": "horizontalLabels",
          "package": "wumpus-drawing",
          "signature": "RectAddress -\u003e [a] -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Extras-Axes.html#horizontalLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Axes",
          "module": "Wumpus.Drawing.Extras.Axes",
          "name": "horizontalLabels",
          "normalized": "RectAddress-\u003e[a]-\u003eLocGraphic b",
          "package": "wumpus-drawing",
          "partial": "Labels",
          "signature": "RectAddress-\u003e[a]-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Axes.html#v:horizontalLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple orthonormal axes using snap grid units.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Extras.Axes",
          "name": "orthontAxes",
          "package": "wumpus-drawing",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Extras-Axes.html#orthontAxes",
          "type": "function"
        },
        "index": {
          "description": "Simple orthonormal axes using snap grid units",
          "hierarchy": "Wumpus Drawing Extras Axes",
          "module": "Wumpus.Drawing.Extras.Axes",
          "name": "orthontAxes",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Axes",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Axes.html#v:orthontAxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Axes",
          "name": "verticalLabels",
          "package": "wumpus-drawing",
          "signature": "RectAddress -\u003e [a] -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Extras-Axes.html#verticalLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Axes",
          "module": "Wumpus.Drawing.Extras.Axes",
          "name": "verticalLabels",
          "normalized": "RectAddress-\u003e[a]-\u003eLocGraphic b",
          "package": "wumpus-drawing",
          "partial": "Labels",
          "signature": "RectAddress-\u003e[a]-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Axes.html#v:verticalLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClipping paths.\n\u003c/p\u003e\u003cp\u003eNote - at the moment there is nothing much to this module.\n Ideally, clipping would be defined in Wumpus-Basic, but clipping\n needs a higher level path object than Wumpus-Basic provides.\n\u003c/p\u003e\u003cp\u003e** WARNING ** names need improving.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Extras.Clip",
          "name": "Clip",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Extras-Clip.html",
          "type": "module"
        },
        "index": {
          "description": "Clipping paths Note at the moment there is nothing much to this module Ideally clipping would be defined in Wumpus-Basic but clipping needs higher level path object than Wumpus-Basic provides WARNING names need improving",
          "hierarchy": "Wumpus Drawing Extras Clip",
          "module": "Wumpus.Drawing.Extras.Clip",
          "name": "Clip",
          "package": "wumpus-drawing",
          "partial": "Clip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Clip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClip a LocGraphic.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - AbsPath (coordinate-specific) is the wrong \n object to clip a LocGraphic (coordinate-free). \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Extras.Clip",
          "name": "locClip",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e LocGraphic u -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Extras-Clip.html#locClip",
          "type": "function"
        },
        "index": {
          "description": "Clip LocGraphic WARNING AbsPath coordinate-specific is the wrong object to clip LocGraphic coordinate-free",
          "hierarchy": "Wumpus Drawing Extras Clip",
          "module": "Wumpus.Drawing.Extras.Clip",
          "name": "locClip",
          "normalized": "AbsPath a-\u003eLocGraphic a-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Clip",
          "signature": "AbsPath u-\u003eLocGraphic u-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Clip.html#v:locClip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDrawing grids\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "Grids",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Extras-Grids.html",
          "type": "module"
        },
        "index": {
          "description": "Drawing grids",
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "Grids",
          "package": "wumpus-drawing",
          "partial": "Grids",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "GridContextF",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#GridContextF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "GridContextF",
          "package": "wumpus-drawing",
          "partial": "Grid Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#t:GridContextF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "dotted_major_grid",
          "package": "wumpus-drawing",
          "signature": "GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#dotted_major_grid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "dotted_major_grid",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:dotted_major_grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid",
          "package": "wumpus-drawing",
          "signature": "GridContextF -\u003e Int -\u003e Int -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid",
          "normalized": "GridContextF-\u003eInt-\u003eInt-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "GridContextF-\u003eInt-\u003eInt-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_label_colour",
          "package": "wumpus-drawing",
          "signature": "RGBi -\u003e GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid_label_colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_label_colour",
          "normalized": "RGBi-\u003eGridContextF",
          "package": "wumpus-drawing",
          "signature": "RGBi-\u003eGridContextF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_label_colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_major_colour",
          "package": "wumpus-drawing",
          "signature": "RGBi -\u003e GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid_major_colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_major_colour",
          "normalized": "RGBi-\u003eGridContextF",
          "package": "wumpus-drawing",
          "signature": "RGBi-\u003eGridContextF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_major_colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_major_dotnum",
          "package": "wumpus-drawing",
          "signature": "Int -\u003e GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid_major_dotnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_major_dotnum",
          "normalized": "Int-\u003eGridContextF",
          "package": "wumpus-drawing",
          "signature": "Int-\u003eGridContextF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_major_dotnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_major_line_width",
          "package": "wumpus-drawing",
          "signature": "Double -\u003e GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid_major_line_width",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_major_line_width",
          "normalized": "Double-\u003eGridContextF",
          "package": "wumpus-drawing",
          "signature": "Double-\u003eGridContextF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_major_line_width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_minor_colour",
          "package": "wumpus-drawing",
          "signature": "RGBi -\u003e GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid_minor_colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_minor_colour",
          "normalized": "RGBi-\u003eGridContextF",
          "package": "wumpus-drawing",
          "signature": "RGBi-\u003eGridContextF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_minor_colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_minor_dotnum",
          "package": "wumpus-drawing",
          "signature": "Int -\u003e GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid_minor_dotnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_minor_dotnum",
          "normalized": "Int-\u003eGridContextF",
          "package": "wumpus-drawing",
          "signature": "Int-\u003eGridContextF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_minor_dotnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_minor_line_width",
          "package": "wumpus-drawing",
          "signature": "Double -\u003e GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid_minor_line_width",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_minor_line_width",
          "normalized": "Double-\u003eGridContextF",
          "package": "wumpus-drawing",
          "signature": "Double-\u003eGridContextF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_minor_line_width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_minor_subdivisions",
          "package": "wumpus-drawing",
          "signature": "Int -\u003e GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid_minor_subdivisions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_minor_subdivisions",
          "normalized": "Int-\u003eGridContextF",
          "package": "wumpus-drawing",
          "signature": "Int-\u003eGridContextF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_minor_subdivisions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_point_size",
          "package": "wumpus-drawing",
          "signature": "FontSize -\u003e GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#grid_point_size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "grid_point_size",
          "normalized": "FontSize-\u003eGridContextF",
          "package": "wumpus-drawing",
          "signature": "FontSize-\u003eGridContextF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_point_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "standard_grid",
          "package": "wumpus-drawing",
          "signature": "GridContextF",
          "source": "src/Wumpus-Drawing-Extras-Grids.html#standard_grid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Grids",
          "module": "Wumpus.Drawing.Extras.Grids",
          "name": "standard_grid",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:standard_grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOpen loop for a circle (useful for automata diagrams).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Extras.Loop",
          "name": "Loop",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Extras-Loop.html",
          "type": "module"
        },
        "index": {
          "description": "Open loop for circle useful for automata diagrams",
          "hierarchy": "Wumpus Drawing Extras Loop",
          "module": "Wumpus.Drawing.Extras.Loop",
          "name": "Loop",
          "package": "wumpus-drawing",
          "partial": "Loop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Loop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Loop",
          "name": "loopPath",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Point2 u -\u003e Radian -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Extras-Loop.html#loopPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Loop",
          "module": "Wumpus.Drawing.Extras.Loop",
          "name": "loopPath",
          "normalized": "a-\u003ePoint a-\u003eRadian-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Path",
          "signature": "u-\u003ePoint u-\u003eRadian-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Loop.html#v:loopPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Extras.Loop",
          "name": "loopTrail",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Radian -\u003e AnaTrail u",
          "source": "src/Wumpus-Drawing-Extras-Loop.html#loopTrail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Extras Loop",
          "module": "Wumpus.Drawing.Extras.Loop",
          "name": "loopTrail",
          "normalized": "a-\u003eRadian-\u003eAnaTrail a",
          "package": "wumpus-drawing",
          "partial": "Trail",
          "signature": "u-\u003eRadian-\u003eAnaTrail u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Loop.html#v:loopTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbsolute path type - this should be more amenable for building \n complex drawings than the PrimPath type in Wumpus-Core.\n\u003c/p\u003e\u003cp\u003eNote - there is no concatenation (i.e. no Monoid instance),\n this is because concatenating ** absolute ** paths has no \n obvious interpretation - draw a join between the paths, move\n the second path to start where the first ends...\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003eCatTrail\u003c/code\u003e from Wumpus-Basic if you need a relative-path \n like object that supports concatenation, then convert it in a \n final step to an \u003ccode\u003eAbsPath\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "Base",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Absolute path type this should be more amenable for building complex drawings than the PrimPath type in Wumpus-Core Note there is no concatenation i.e no Monoid instance this is because concatenating absolute paths has no obvious interpretation draw join between the paths move the second path to start where the first ends Use CatTrail from Wumpus-Basic if you need relative-path like object that supports concatenation then convert it in final step to an AbsPath",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "Base",
          "package": "wumpus-drawing",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute path data type.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "AbsPath",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Base.html#AbsPath",
          "type": "data"
        },
        "index": {
          "description": "Absolute path data type",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "AbsPath",
          "package": "wumpus-drawing",
          "partial": "Abs Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:AbsPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "DAbsPath",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Base.html#DAbsPath",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "DAbsPath",
          "package": "wumpus-drawing",
          "partial": "DAbs Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:DAbsPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "DPathSegment",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Base.html#DPathSegment",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "DPathSegment",
          "package": "wumpus-drawing",
          "partial": "DPath Segment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:DPathSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "DPathViewL",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Base.html#DPathViewL",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "DPathViewL",
          "package": "wumpus-drawing",
          "partial": "DPath View",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:DPathViewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "DPathViewR",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Base.html#DPathViewR",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "DPathViewR",
          "package": "wumpus-drawing",
          "partial": "DPath View",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:DPathViewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePathSegments are annotated with length.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "PathSegment",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Base.html#PathSegment",
          "type": "data"
        },
        "index": {
          "description": "PathSegments are annotated with length",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "PathSegment",
          "package": "wumpus-drawing",
          "partial": "Path Segment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:PathSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "PathViewL",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Base.html#PathViewL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "PathViewL",
          "package": "wumpus-drawing",
          "partial": "Path View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:PathViewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "PathViewR",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Base.html#PathViewR",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "PathViewR",
          "package": "wumpus-drawing",
          "partial": "Path View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:PathViewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": ":\u003c\u003c",
          "package": "wumpus-drawing",
          "signature": "(PathSegment u) :\u003c\u003c (AbsPath u)",
          "source": "src/Wumpus-Drawing-Paths-Base.html#PathViewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": ":\u003c\u003c",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v::-60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": ":\u003e\u003e",
          "package": "wumpus-drawing",
          "signature": "(AbsPath u) :\u003e\u003e (PathSegment u)",
          "source": "src/Wumpus-Drawing-Paths-Base.html#PathViewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": ":\u003e\u003e",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v::-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "CurveSeg",
          "package": "wumpus-drawing",
          "signature": "CurveSeg u (Point2 u) (Point2 u) (Point2 u) (Point2 u)",
          "source": "src/Wumpus-Drawing-Paths-Base.html#PathSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "CurveSeg",
          "package": "wumpus-drawing",
          "partial": "Curve Seg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:CurveSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "EmptyPathL",
          "package": "wumpus-drawing",
          "signature": "EmptyPathL",
          "source": "src/Wumpus-Drawing-Paths-Base.html#PathViewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "EmptyPathL",
          "package": "wumpus-drawing",
          "partial": "Empty Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:EmptyPathL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "EmptyPathR",
          "package": "wumpus-drawing",
          "signature": "EmptyPathR",
          "source": "src/Wumpus-Drawing-Paths-Base.html#PathViewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "EmptyPathR",
          "package": "wumpus-drawing",
          "partial": "Empty Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:EmptyPathR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "LineSeg",
          "package": "wumpus-drawing",
          "signature": "LineSeg u (Point2 u) (Point2 u)",
          "source": "src/Wumpus-Drawing-Paths-Base.html#PathSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "LineSeg",
          "package": "wumpus-drawing",
          "partial": "Line Seg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:LineSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "anaTrailPath",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e AnaTrail u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#anaTrailPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "anaTrailPath",
          "normalized": "Point a-\u003eAnaTrail a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Trail Path",
          "signature": "Point u-\u003eAnaTrail u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:anaTrailPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "atend",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e (Point2 u, Radian)",
          "source": "src/Wumpus-Drawing-Paths-Base.html#atend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "atend",
          "normalized": "AbsPath a-\u003e(Point a,Radian)",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003e(Point u,Radian)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:atend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "atend_",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Point2 u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#atend_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "atend_",
          "normalized": "AbsPath a-\u003ePoint a",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003ePoint u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:atend_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "atstart",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e (Point2 u, Radian)",
          "source": "src/Wumpus-Drawing-Paths-Base.html#atstart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "atstart",
          "normalized": "AbsPath a-\u003e(Point a,Radian)",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003e(Point u,Radian)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:atstart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "atstart_",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Point2 u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#atstart_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "atstart_",
          "normalized": "AbsPath a-\u003ePoint a",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003ePoint u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:atstart_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "catTrailPath",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e CatTrail u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#catTrailPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "catTrailPath",
          "normalized": "Point a-\u003eCatTrail a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Trail Path",
          "signature": "Point u-\u003eCatTrail u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:catTrailPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is not an arc...\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "controlCurve",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e Radian -\u003e Radian -\u003e Point2 u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#controlCurve",
          "type": "function"
        },
        "index": {
          "description": "This is not an arc",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "controlCurve",
          "normalized": "Point a-\u003eRadian-\u003eRadian-\u003ePoint a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Curve",
          "signature": "Point u-\u003eRadian-\u003eRadian-\u003ePoint u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:controlCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an absolute path from a single cubic Bezier curve.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "curve1",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e Point2 u -\u003e Point2 u -\u003e Point2 u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#curve1",
          "type": "function"
        },
        "index": {
          "description": "Create an absolute path from single cubic Bezier curve",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "curve1",
          "normalized": "Point a-\u003ePoint a-\u003ePoint a-\u003ePoint a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "signature": "Point u-\u003ePoint u-\u003ePoint u-\u003ePoint u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:curve1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurvePath\u003c/a\u003e\u003c/code\u003e consumes 4 points from the list on the \n intial step (start, control1, control2, end) then steps \n through the list taking 3 points at a time thereafter\n (control1,control2, end). Leftover points are discarded.    \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurvePath\u003c/a\u003e\u003c/code\u003e throws a runtime error if the supplied list\n is has less than 4 elements (start, control1, control2, end). \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "curvePath",
          "package": "wumpus-drawing",
          "signature": "[Point2 u] -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#curvePath",
          "type": "function"
        },
        "index": {
          "description": "curvePath consumes points from the list on the intial step start control1 control2 end then steps through the list taking points at time thereafter control1 control2 end Leftover points are discarded curvePath throws runtime error if the supplied list is has less than elements start control1 control2 end",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "curvePath",
          "normalized": "[Point a]-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Path",
          "signature": "[Point u]-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:curvePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedraw an \u003ccode\u003e\u003ca\u003eAbsPath\u003c/a\u003e\u003c/code\u003e replacing the Bezier curves with three \n lines along the control vectors.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "deBezier",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#deBezier",
          "type": "function"
        },
        "index": {
          "description": "Redraw an AbsPath replacing the Bezier curves with three lines along the control vectors",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "deBezier",
          "normalized": "AbsPath a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Bezier",
          "signature": "AbsPath u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:deBezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the empty path.\n\u003c/p\u003e\u003cp\u003eNote - an absolute path needs \u003cem\u003elocating\u003c/em\u003e and cannot be built \n without a start point. Figuratively, the empty path is a path\n from the start point to the end point.\n\u003c/p\u003e\u003cp\u003eThus AbsPath operates as a semigroup but not a monoid.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "emptyPath",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#emptyPath",
          "type": "function"
        },
        "index": {
          "description": "Create the empty path Note an absolute path needs locating and cannot be built without start point Figuratively the empty path is path from the start point to the end point Thus AbsPath operates as semigroup but not monoid",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "emptyPath",
          "normalized": "Point a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Path",
          "signature": "Point u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:emptyPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirection of empty path is considered to be 0.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "inclinationL",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Radian",
          "source": "src/Wumpus-Drawing-Paths-Base.html#inclinationL",
          "type": "function"
        },
        "index": {
          "description": "Direction of empty path is considered to be",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "inclinationL",
          "normalized": "AbsPath a-\u003eRadian",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003eRadian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:inclinationL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirection of empty path is considered to be 0.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "inclinationR",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Radian",
          "source": "src/Wumpus-Drawing-Paths-Base.html#inclinationR",
          "type": "function"
        },
        "index": {
          "description": "Direction of empty path is considered to be",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "inclinationR",
          "normalized": "AbsPath a-\u003eRadian",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003eRadian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:inclinationR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the left tip a Bezier curve?\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "isBezierL",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Bool",
          "source": "src/Wumpus-Drawing-Paths-Base.html#isBezierL",
          "type": "function"
        },
        "index": {
          "description": "Is the left tip Bezier curve",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "isBezierL",
          "normalized": "AbsPath a-\u003eBool",
          "package": "wumpus-drawing",
          "partial": "Bezier",
          "signature": "AbsPath u-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:isBezierL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the right tip a Bezier curve?\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "isBezierR",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Bool",
          "source": "src/Wumpus-Drawing-Paths-Base.html#isBezierR",
          "type": "function"
        },
        "index": {
          "description": "Is the right tip Bezier curve",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "isBezierR",
          "normalized": "AbsPath a-\u003eBool",
          "package": "wumpus-drawing",
          "partial": "Bezier",
          "signature": "AbsPath u-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:isBezierR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the Path.\n\u003c/p\u003e\u003cp\u003eLength is the length of the path as it is drawn, it is not a \n count of the number or path segments.\n\u003c/p\u003e\u003cp\u003eLength is cached so this operation is cheap - though this puts\n a tax on the build operations. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "length",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#length",
          "type": "function"
        },
        "index": {
          "description": "Length of the Path Length is the length of the path as it is drawn it is not count of the number or path segments Length is cached so this operation is cheap though this puts tax on the build operations",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "length",
          "normalized": "AbsPath a-\u003ea",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003eu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an absolute path as a straight line between the \n supplied points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "line1",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e Point2 u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#line1",
          "type": "function"
        },
        "index": {
          "description": "Create an absolute path as straight line between the supplied points",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "line1",
          "normalized": "Point a-\u003ePoint a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "signature": "Point u-\u003ePoint u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:line1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "midway",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e (Point2 u, Radian)",
          "source": "src/Wumpus-Drawing-Paths-Base.html#midway",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "midway",
          "normalized": "AbsPath a-\u003e(Point a,Radian)",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003e(Point u,Radian)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:midway"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "midway_",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Point2 u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#midway_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "midway_",
          "normalized": "AbsPath a-\u003ePoint a",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003ePoint u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:midway_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the path empty?\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "null",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Bool",
          "source": "src/Wumpus-Drawing-Paths-Base.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the path empty",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "null",
          "normalized": "AbsPath a-\u003eBool",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "optimizeLines",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#optimizeLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "optimizeLines",
          "normalized": "AbsPath a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Lines",
          "signature": "AbsPath u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:optimizeLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis extracts the control points of Bezier curves.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathAllPoints",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e [Point2 u]",
          "source": "src/Wumpus-Drawing-Paths-Base.html#pathAllPoints",
          "type": "function"
        },
        "index": {
          "description": "This extracts the control points of Bezier curves",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathAllPoints",
          "normalized": "AbsPath a-\u003e[Point a]",
          "package": "wumpus-drawing",
          "partial": "All Points",
          "signature": "AbsPath u-\u003e[Point u]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathAllPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis does not extract the control points of Bezier curves.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathMajorPoints",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e [Point2 u]",
          "source": "src/Wumpus-Drawing-Paths-Base.html#pathMajorPoints",
          "type": "function"
        },
        "index": {
          "description": "This does not extract the control points of Bezier curves",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathMajorPoints",
          "normalized": "AbsPath a-\u003e[Point a]",
          "package": "wumpus-drawing",
          "partial": "Major Points",
          "signature": "AbsPath u-\u003e[Point u]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathMajorPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathViewL",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e PathViewL u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#pathViewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathViewL",
          "normalized": "AbsPath a-\u003ePathViewL a",
          "package": "wumpus-drawing",
          "partial": "View",
          "signature": "AbsPath u-\u003ePathViewL u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathViewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathViewR",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e PathViewR u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#pathViewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathViewR",
          "normalized": "AbsPath a-\u003ePathViewR a",
          "package": "wumpus-drawing",
          "partial": "View",
          "signature": "AbsPath u-\u003ePathViewR u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathViewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide a path returning intermediate points and direction\n\u003c/p\u003e\u003cp\u003eArgs are initial-prefix, division size, trailing size.\n\u003c/p\u003e\u003cp\u003eGeneration is stopped if the remainder of the path is shorter\n than the trailing size.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathdiv",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e u -\u003e AbsPath u -\u003e [(Point2 u, Radian)]",
          "source": "src/Wumpus-Drawing-Paths-Base.html#pathdiv",
          "type": "function"
        },
        "index": {
          "description": "Divide path returning intermediate points and direction Args are initial-prefix division size trailing size Generation is stopped if the remainder of the path is shorter than the trailing size",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "pathdiv",
          "normalized": "a-\u003ea-\u003ea-\u003eAbsPath a-\u003e[(Point a,Radian)]",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eu-\u003eAbsPath u-\u003e[(Point u,Radian)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "renderPath",
          "package": "wumpus-drawing",
          "signature": "PathMode -\u003e AbsPath u -\u003e Image u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Paths-Base.html#renderPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "renderPath",
          "normalized": "PathMode-\u003eAbsPath a-\u003eImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "partial": "Path",
          "signature": "PathMode-\u003eAbsPath u-\u003eImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:renderPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "renderPath_",
          "package": "wumpus-drawing",
          "signature": "PathMode -\u003e AbsPath u -\u003e Graphic u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#renderPath_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "renderPath_",
          "normalized": "PathMode-\u003eAbsPath a-\u003eGraphic a",
          "package": "wumpus-drawing",
          "partial": "Path",
          "signature": "PathMode-\u003eAbsPath u-\u003eGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:renderPath_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound a \"closed\" path. \n\u003c/p\u003e\u003cp\u003eCaution - all path sgements are expected to be longer than\n 2x the round corner length, though this is not checked..\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "roundExterior",
          "package": "wumpus-drawing",
          "signature": "u -\u003e AbsPath u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#roundExterior",
          "type": "function"
        },
        "index": {
          "description": "Round closed path Caution all path sgements are expected to be longer than the round corner length though this is not checked",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "roundExterior",
          "normalized": "a-\u003eAbsPath a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Exterior",
          "signature": "u-\u003eAbsPath u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:roundExterior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound interior corners of a Path.\n\u003c/p\u003e\u003cp\u003eThe path is treated as open - the start of the initial and end\n of the final segments are not rounded. Only straight line to \n straight line joins are rounded, joins to or from Bezier \n curves are not rounded.\n\u003c/p\u003e\u003cp\u003eCaution - all path segments are expected to be longer than\n 2x the round corner length, though this is not checked..\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "roundInterior",
          "package": "wumpus-drawing",
          "signature": "u -\u003e AbsPath u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#roundInterior",
          "type": "function"
        },
        "index": {
          "description": "Round interior corners of Path The path is treated as open the start of the initial and end of the final segments are not rounded Only straight line to straight line joins are rounded joins to or from Bezier curves are not rounded Caution all path segments are expected to be longer than the round corner length though this is not checked",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "roundInterior",
          "normalized": "a-\u003eAbsPath a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Interior",
          "signature": "u-\u003eAbsPath u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:roundInterior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - shortening a line from the left by \n greater-than-or-equal its length is operationally equivalent \n to making a zero-length line at the end point.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "shortenL",
          "package": "wumpus-drawing",
          "signature": "u -\u003e AbsPath u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#shortenL",
          "type": "function"
        },
        "index": {
          "description": "Note shortening line from the left by greater-than-or-equal its length is operationally equivalent to making zero-length line at the end point",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "shortenL",
          "normalized": "a-\u003eAbsPath a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eAbsPath u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:shortenL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esortenPath\u003c/code\u003e : \u003ccode\u003e left_dist * right_dist * path -\u003e Path \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "shortenPath",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e AbsPath u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#shortenPath",
          "type": "function"
        },
        "index": {
          "description": "sortenPath left dist right dist path Path",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "shortenPath",
          "normalized": "a-\u003ea-\u003eAbsPath a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Path",
          "signature": "u-\u003eu-\u003eAbsPath u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:shortenPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - shortening a line from the right by \n greater-than-or-equal its length is operationally equivalent \n to making a zero-length line at the start point.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "shortenR",
          "package": "wumpus-drawing",
          "signature": "u -\u003e AbsPath u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#shortenR",
          "type": "function"
        },
        "index": {
          "description": "Note shortening line from the right by greater-than-or-equal its length is operationally equivalent to making zero-length line at the start point",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "shortenR",
          "normalized": "a-\u003eAbsPath a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eAbsPath u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:shortenR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the path from the end-point with a Bezier curve \n segment formed by the supplied points.\n\u003c/p\u003e\u003cpre\u003e infixl 5 `snocCurve`\n\u003c/pre\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "snocCurve",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e (Vec2 u, Vec2 u, Vec2 u) -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#snocCurve",
          "type": "function"
        },
        "index": {
          "description": "Extend the path from the end-point with Bezier curve segment formed by the supplied points infixl snocCurve",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "snocCurve",
          "normalized": "AbsPath a-\u003e(Vec a,Vec a,Vec a)-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Curve",
          "signature": "AbsPath u-\u003e(Vec u,Vec u,Vec u)-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:snocCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the path from the end-point with a Bezier curve \n segment formed by the supplied points.\n\u003c/p\u003e\u003cpre\u003e infixl 5 `snocCurveTo`\n\u003c/pre\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "snocCurveTo",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e (Point2 u, Point2 u, Point2 u) -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#snocCurveTo",
          "type": "function"
        },
        "index": {
          "description": "Extend the path from the end-point with Bezier curve segment formed by the supplied points infixl snocCurveTo",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "snocCurveTo",
          "normalized": "AbsPath a-\u003e(Point a,Point a,Point a)-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Curve To",
          "signature": "AbsPath u-\u003e(Point u,Point u,Point u)-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:snocCurveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the path with a straight line segment from the \n end-point defined by the supplied vector.\n\u003c/p\u003e\u003cpre\u003e infixl 5 `snocLine`\n\u003c/pre\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "snocLine",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Vec2 u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#snocLine",
          "type": "function"
        },
        "index": {
          "description": "Extend the path with straight line segment from the end-point defined by the supplied vector infixl snocLine",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "snocLine",
          "normalized": "AbsPath a-\u003eVec a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Line",
          "signature": "AbsPath u-\u003eVec u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:snocLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the path with a straight line segment from the \n end-point to the supplied point.\n\u003c/p\u003e\u003cpre\u003e infixl 5 `snocLineTo`\n\u003c/pre\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "snocLineTo",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Point2 u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#snocLineTo",
          "type": "function"
        },
        "index": {
          "description": "Extend the path with straight line segment from the end-point to the supplied point infixl snocLineTo",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "snocLineTo",
          "normalized": "AbsPath a-\u003ePoint a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Line To",
          "signature": "AbsPath u-\u003ePoint u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:snocLineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "tipL",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Point2 u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#tipL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "tipL",
          "normalized": "AbsPath a-\u003ePoint a",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003ePoint u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:tipL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "tipR",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Point2 u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#tipR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "tipR",
          "normalized": "AbsPath a-\u003ePoint a",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003ePoint u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:tipR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a Path into an ordinary PrimPath.\n\u003c/p\u003e\u003cp\u003eAssumes path is properly formed - i.e. end point of one \n segment is the same point as the start point of the next\n segment.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "toPrimPath",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Query u PrimPath",
          "source": "src/Wumpus-Drawing-Paths-Base.html#toPrimPath",
          "type": "function"
        },
        "index": {
          "description": "Turn Path into an ordinary PrimPath Assumes path is properly formed i.e end point of one segment is the same point as the start point of the next segment",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "toPrimPath",
          "normalized": "AbsPath a-\u003eQuery a PrimPath",
          "package": "wumpus-drawing",
          "partial": "Prim Path",
          "signature": "AbsPath u-\u003eQuery u PrimPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:toPrimPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "vectorPath",
          "package": "wumpus-drawing",
          "signature": "[Vec2 u] -\u003e Point2 u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#vectorPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "vectorPath",
          "normalized": "[Vec a]-\u003ePoint a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Path",
          "signature": "[Vec u]-\u003ePoint u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:vectorPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "vectorPathTheta",
          "package": "wumpus-drawing",
          "signature": "[Vec2 u] -\u003e Radian -\u003e Point2 u -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#vectorPathTheta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "vectorPathTheta",
          "normalized": "[Vec a]-\u003eRadian-\u003ePoint a-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Path Theta",
          "signature": "[Vec u]-\u003eRadian-\u003ePoint u-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:vectorPathTheta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evertexPath\u003c/a\u003e\u003c/code\u003e throws a runtime error if the supplied list\n is empty. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "vertexPath",
          "package": "wumpus-drawing",
          "signature": "[Point2 u] -\u003e AbsPath u",
          "source": "src/Wumpus-Drawing-Paths-Base.html#vertexPath",
          "type": "function"
        },
        "index": {
          "description": "vertexPath throws runtime error if the supplied list is empty",
          "hierarchy": "Wumpus Drawing Paths Base",
          "module": "Wumpus.Drawing.Paths.Base",
          "name": "vertexPath",
          "normalized": "[Point a]-\u003eAbsPath a",
          "package": "wumpus-drawing",
          "partial": "Path",
          "signature": "[Point u]-\u003eAbsPath u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:vertexPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIllustrate a path - show the construction of its Bezier curves.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Paths.Illustrate",
          "name": "Illustrate",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Illustrate.html",
          "type": "module"
        },
        "index": {
          "description": "Illustrate path show the construction of its Bezier curves",
          "hierarchy": "Wumpus Drawing Paths Illustrate",
          "module": "Wumpus.Drawing.Paths.Illustrate",
          "name": "Illustrate",
          "package": "wumpus-drawing",
          "partial": "Illustrate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Illustrate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIllustrate the control points as a \u003cem\u003eboxed\u003c/em\u003e path - Bezier \n curves are replaced with straight lines spanning the \n control points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Illustrate",
          "name": "path_as_control_box",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Graphic u",
          "source": "src/Wumpus-Drawing-Paths-Illustrate.html#path_as_control_box",
          "type": "function"
        },
        "index": {
          "description": "Illustrate the control points as boxed path Bezier curves are replaced with straight lines spanning the control points",
          "hierarchy": "Wumpus Drawing Paths Illustrate",
          "module": "Wumpus.Drawing.Paths.Illustrate",
          "name": "path_as_control_box",
          "normalized": "AbsPath a-\u003eGraphic a",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003eGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Illustrate.html#v:path_as_control_box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Illustrate",
          "name": "path_with_control_points",
          "package": "wumpus-drawing",
          "signature": "AbsPath u -\u003e Graphic u",
          "source": "src/Wumpus-Drawing-Paths-Illustrate.html#path_with_control_points",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Illustrate",
          "module": "Wumpus.Drawing.Paths.Illustrate",
          "name": "path_with_control_points",
          "normalized": "AbsPath a-\u003eGraphic a",
          "package": "wumpus-drawing",
          "signature": "AbsPath u-\u003eGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Illustrate.html#v:path_with_control_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntersection of Paths with (infinite) lines.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Intersection",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html",
          "type": "module"
        },
        "index": {
          "description": "Intersection of Paths with infinite lines",
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Intersection",
          "package": "wumpus-drawing",
          "partial": "Intersection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinite line represented by two points.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Line",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#Line",
          "type": "data"
        },
        "index": {
          "description": "Infinite line represented by two points",
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Line",
          "package": "wumpus-drawing",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRay\u003c/a\u003e\u003c/code\u003e extends from the first point, through the second to\n infinity.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003e extends to infinity in both directions.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Ray",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#Ray",
          "type": "data"
        },
        "index": {
          "description": "Ray extends from the first point through the second to infinity Line extends to infinity in both directions",
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Ray",
          "package": "wumpus-drawing",
          "partial": "Ray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#t:Ray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Line",
          "package": "wumpus-drawing",
          "signature": "Line (Point2 u) (Point2 u)",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#Line",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Line",
          "package": "wumpus-drawing",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Ray",
          "package": "wumpus-drawing",
          "signature": "Ray (Point2 u) (Point2 u)",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#Ray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "Ray",
          "package": "wumpus-drawing",
          "partial": "Ray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:Ray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einclinedLine\u003c/a\u003e\u003c/code\u003e : \u003ccode\u003e point * ang -\u003e Line \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eMake an infinite line passing through the supplied point \n inclined by \u003ccode\u003eang\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "inclinedLine",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e Radian -\u003e Line u",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#inclinedLine",
          "type": "function"
        },
        "index": {
          "description": "inclinedLine point ang Line Make an infinite line passing through the supplied point inclined by ang",
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "inclinedLine",
          "normalized": "Point a-\u003eRadian-\u003eLine a",
          "package": "wumpus-drawing",
          "partial": "Line",
          "signature": "Point u-\u003eRadian-\u003eLine u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:inclinedLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an infinite ray starting from the supplied point \n inclined by \u003ccode\u003eang\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "inclinedRay",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e Radian -\u003e Ray u",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#inclinedRay",
          "type": "function"
        },
        "index": {
          "description": "Make an infinite ray starting from the supplied point inclined by ang",
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "inclinedRay",
          "normalized": "Point a-\u003eRadian-\u003eRay a",
          "package": "wumpus-drawing",
          "partial": "Ray",
          "signature": "Point u-\u003eRadian-\u003eRay u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:inclinedRay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer is vector from centroid.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "isoscelesTriangleRadialIntersect",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e Maybe (Vec2 u)",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#isoscelesTriangleRadialIntersect",
          "type": "function"
        },
        "index": {
          "description": "Answer is vector from centroid",
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "isoscelesTriangleRadialIntersect",
          "normalized": "a-\u003ea-\u003eRadian-\u003eMaybe(Vec a)",
          "package": "wumpus-drawing",
          "partial": "Triangle Radial Intersect",
          "signature": "u-\u003eu-\u003eRadian-\u003eMaybe(Vec u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:isoscelesTriangleRadialIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einterLineLine\u003c/code\u003e : \u003ccode\u003e line1 * line2 -\u003e Maybe Point \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFind the intersection of two lines, if there is one. \n\u003c/p\u003e\u003cp\u003eLines are infinite they are represented by points on them, \n they are not line segments.\n\u003c/p\u003e\u003cp\u003eAn answer of \u003ccode\u003eNothing\u003c/code\u003e may indicate either the lines coincide\n or the are parallel.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "lineLineIntersection",
          "package": "wumpus-drawing",
          "signature": "Line u -\u003e Line u -\u003e Maybe (Point2 u)",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#lineLineIntersection",
          "type": "function"
        },
        "index": {
          "description": "interLineLine line1 line2 Maybe Point Find the intersection of two lines if there is one Lines are infinite they are represented by points on them they are not line segments An answer of Nothing may indicate either the lines coincide or the are parallel",
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "lineLineIntersection",
          "normalized": "Line a-\u003eLine a-\u003eMaybe(Point a)",
          "package": "wumpus-drawing",
          "partial": "Line Intersection",
          "signature": "Line u-\u003eLine u-\u003eMaybe(Point u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:lineLineIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "linePathIntersection",
          "package": "wumpus-drawing",
          "signature": "Line u -\u003e AbsPath u -\u003e Maybe (Point2 u)",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#linePathIntersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "linePathIntersection",
          "normalized": "Line a-\u003eAbsPath a-\u003eMaybe(Point a)",
          "package": "wumpus-drawing",
          "partial": "Path Intersection",
          "signature": "Line u-\u003eAbsPath u-\u003eMaybe(Point u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:linePathIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "linePathSegmentIntersection",
          "package": "wumpus-drawing",
          "signature": "Line u -\u003e PathSegment u -\u003e Maybe (Point2 u)",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#linePathSegmentIntersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "linePathSegmentIntersection",
          "normalized": "Line a-\u003ePathSegment a-\u003eMaybe(Point a)",
          "package": "wumpus-drawing",
          "partial": "Path Segment Intersection",
          "signature": "Line u-\u003ePathSegment u-\u003eMaybe(Point u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:linePathSegmentIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "rayPathIntersection",
          "package": "wumpus-drawing",
          "signature": "Ray u -\u003e AbsPath u -\u003e Maybe (Point2 u)",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#rayPathIntersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "rayPathIntersection",
          "normalized": "Ray a-\u003eAbsPath a-\u003eMaybe(Point a)",
          "package": "wumpus-drawing",
          "partial": "Path Intersection",
          "signature": "Ray u-\u003eAbsPath u-\u003eMaybe(Point u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:rayPathIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "rayPathSegmentIntersection",
          "package": "wumpus-drawing",
          "signature": "Ray u -\u003e PathSegment u -\u003e Maybe (Point2 u)",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#rayPathSegmentIntersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "rayPathSegmentIntersection",
          "normalized": "Ray a-\u003ePathSegment a-\u003eMaybe(Point a)",
          "package": "wumpus-drawing",
          "partial": "Path Segment Intersection",
          "signature": "Ray u-\u003ePathSegment u-\u003eMaybe(Point u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:rayPathSegmentIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer is vector from center.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "rectangleRadialIntersect",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e Maybe (Vec2 u)",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#rectangleRadialIntersect",
          "type": "function"
        },
        "index": {
          "description": "Answer is vector from center",
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "rectangleRadialIntersect",
          "normalized": "a-\u003ea-\u003eRadian-\u003eMaybe(Vec a)",
          "package": "wumpus-drawing",
          "partial": "Radial Intersect",
          "signature": "u-\u003eu-\u003eRadian-\u003eMaybe(Vec u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:rectangleRadialIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "vectorLine",
          "package": "wumpus-drawing",
          "signature": "Vec2 u -\u003e Point2 u -\u003e Line u",
          "source": "src/Wumpus-Drawing-Paths-Intersection.html#vectorLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Intersection",
          "module": "Wumpus.Drawing.Paths.Intersection",
          "name": "vectorLine",
          "normalized": "Vec a-\u003ePoint a-\u003eLine a",
          "package": "wumpus-drawing",
          "partial": "Line",
          "signature": "Vec u-\u003ePoint u-\u003eLine u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:vectorLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBuild relative paths monadically.\n\u003c/p\u003e\u003cp\u003e** WARNING ** this module is an experiment, and may \n change significantly or even be dropped from future revisions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "PathBuilder",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html",
          "type": "module"
        },
        "index": {
          "description": "Build relative paths monadically WARNING this module is an experiment and may change significantly or even be dropped from future revisions",
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "PathBuilder",
          "package": "wumpus-drawing",
          "partial": "Path Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - a path spec has an immutable start point like \n \u003ccode\u003eLocDrawing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEffectively a path is draw in a local coordinate system with \n \u003ccode\u003e(0,0)\u003c/code\u003e as the origin.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "GenPathSpec",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#GenPathSpec",
          "type": "data"
        },
        "index": {
          "description": "Note path spec has an immutable start point like LocDrawing Effectively path is draw in local coordinate system with as the origin",
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "GenPathSpec",
          "package": "wumpus-drawing",
          "partial": "Gen Path Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#t:GenPathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "PathSpec",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#PathSpec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "PathSpec",
          "package": "wumpus-drawing",
          "partial": "Path Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#t:PathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "Vamp",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#Vamp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "Vamp",
          "package": "wumpus-drawing",
          "partial": "Vamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#t:Vamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "Vamp",
          "package": "wumpus-drawing",
          "signature": "Vamp",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#Vamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "Vamp",
          "package": "wumpus-drawing",
          "partial": "Vamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:Vamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "apenline",
          "package": "wumpus-drawing",
          "signature": "Radian -\u003e u -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#apenline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "apenline",
          "normalized": "Radian-\u003ea-\u003eGenPathSpec b a()",
          "package": "wumpus-drawing",
          "signature": "Radian-\u003eu-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:apenline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "breakPath",
          "package": "wumpus-drawing",
          "signature": "GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#breakPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "breakPath",
          "normalized": "GenPathSpec a b()",
          "package": "wumpus-drawing",
          "partial": "Path",
          "signature": "GenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:breakPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "cycleSubPath",
          "package": "wumpus-drawing",
          "signature": "DrawMode -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#cycleSubPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "cycleSubPath",
          "normalized": "DrawMode-\u003eGenPathSpec a b()",
          "package": "wumpus-drawing",
          "partial": "Sub Path",
          "signature": "DrawMode-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:cycleSubPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "evalGenPathSpec",
          "package": "wumpus-drawing",
          "signature": "st -\u003e PathMode -\u003e GenPathSpec st u a -\u003e LocImage u (a, AbsPath u)",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#evalGenPathSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "evalGenPathSpec",
          "normalized": "a-\u003ePathMode-\u003eGenPathSpec a b c-\u003eLocImage b(c,AbsPath b)",
          "package": "wumpus-drawing",
          "partial": "Gen Path Spec",
          "signature": "st-\u003ePathMode-\u003eGenPathSpec st u a-\u003eLocImage u(a,AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:evalGenPathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "execGenPathSpec",
          "package": "wumpus-drawing",
          "signature": "st -\u003e PathMode -\u003e GenPathSpec st u a -\u003e LocImage u (st, AbsPath u)",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#execGenPathSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "execGenPathSpec",
          "normalized": "a-\u003ePathMode-\u003eGenPathSpec a b c-\u003eLocImage b(a,AbsPath b)",
          "package": "wumpus-drawing",
          "partial": "Gen Path Spec",
          "signature": "st-\u003ePathMode-\u003eGenPathSpec st u a-\u003eLocImage u(st,AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:execGenPathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "hpenline",
          "package": "wumpus-drawing",
          "signature": "u -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#hpenline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "hpenline",
          "normalized": "a-\u003eGenPathSpec b a()",
          "package": "wumpus-drawing",
          "signature": "u-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:hpenline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "pathmoves",
          "package": "wumpus-drawing",
          "signature": "[Vec2 u] -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#pathmoves",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "pathmoves",
          "normalized": "[Vec a]-\u003eGenPathSpec b a()",
          "package": "wumpus-drawing",
          "signature": "[Vec u]-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:pathmoves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the path with a curve, drawn by the pen.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "pencurve",
          "package": "wumpus-drawing",
          "signature": "Vec2 u -\u003e Vec2 u -\u003e Vec2 u -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#pencurve",
          "type": "function"
        },
        "index": {
          "description": "Extend the path with curve drawn by the pen",
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "pencurve",
          "normalized": "Vec a-\u003eVec a-\u003eVec a-\u003eGenPathSpec b a()",
          "package": "wumpus-drawing",
          "signature": "Vec u-\u003eVec u-\u003eVec u-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:pencurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the path with a line, drawn by the pen.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "penline",
          "package": "wumpus-drawing",
          "signature": "Vec2 u -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#penline",
          "type": "function"
        },
        "index": {
          "description": "Extend the path with line drawn by the pen",
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "penline",
          "normalized": "Vec a-\u003eGenPathSpec b a()",
          "package": "wumpus-drawing",
          "signature": "Vec u-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:penline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "penlines",
          "package": "wumpus-drawing",
          "signature": "[Vec2 u] -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#penlines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "penlines",
          "normalized": "[Vec a]-\u003eGenPathSpec b a()",
          "package": "wumpus-drawing",
          "signature": "[Vec u]-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:penlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "runGenPathSpec",
          "package": "wumpus-drawing",
          "signature": "st -\u003e PathMode -\u003e GenPathSpec st u a -\u003e LocImage u (a, st, AbsPath u)",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#runGenPathSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "runGenPathSpec",
          "normalized": "a-\u003ePathMode-\u003eGenPathSpec a b c-\u003eLocImage b(c,a,AbsPath b)",
          "package": "wumpus-drawing",
          "partial": "Gen Path Spec",
          "signature": "st-\u003ePathMode-\u003eGenPathSpec st u a-\u003eLocImage u(a,st,AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:runGenPathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "runPathSpec",
          "package": "wumpus-drawing",
          "signature": "PathMode -\u003e PathSpec u a -\u003e LocImage u (a, AbsPath u)",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#runPathSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "runPathSpec",
          "normalized": "PathMode-\u003ePathSpec a b-\u003eLocImage a(b,AbsPath a)",
          "package": "wumpus-drawing",
          "partial": "Path Spec",
          "signature": "PathMode-\u003ePathSpec u a-\u003eLocImage u(a,AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:runPathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "runPathSpec_",
          "package": "wumpus-drawing",
          "signature": "PathMode -\u003e PathSpec u a -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#runPathSpec_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "runPathSpec_",
          "normalized": "PathMode-\u003ePathSpec a b-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Path Spec",
          "signature": "PathMode-\u003ePathSpec u a-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:runPathSpec_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a \"pivot path\" drawing from two path specifications.\n The start point of the drawing is the pivot formed by joining\n the paths.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "runPivot",
          "package": "wumpus-drawing",
          "signature": "PathSpec u a -\u003e PathSpec u a -\u003e LocGraphic u",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#runPivot",
          "type": "function"
        },
        "index": {
          "description": "Form pivot path drawing from two path specifications The start point of the drawing is the pivot formed by joining the paths",
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "runPivot",
          "normalized": "PathSpec a b-\u003ePathSpec a b-\u003eLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Pivot",
          "signature": "PathSpec u a-\u003ePathSpec u a-\u003eLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:runPivot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "stripGenPathSpec",
          "package": "wumpus-drawing",
          "signature": "st -\u003e PathMode -\u003e GenPathSpec st u a -\u003e LocQuery u (a, st, AbsPath u)",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#stripGenPathSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "stripGenPathSpec",
          "normalized": "a-\u003ePathMode-\u003eGenPathSpec a b c-\u003eLocQuery b(c,a,AbsPath b)",
          "package": "wumpus-drawing",
          "partial": "Gen Path Spec",
          "signature": "st-\u003ePathMode-\u003eGenPathSpec st u a-\u003eLocQuery u(a,st,AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:stripGenPathSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - updates the pen but doesn't draw, the final path\n will be drawing with the last updated context.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "updatePen",
          "package": "wumpus-drawing",
          "signature": "DrawingContextF -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#updatePen",
          "type": "function"
        },
        "index": {
          "description": "Note updates the pen but doesn draw the final path will be drawing with the last updated context",
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "updatePen",
          "normalized": "DrawingContextF-\u003eGenPathSpec a b()",
          "package": "wumpus-drawing",
          "partial": "Pen",
          "signature": "DrawingContextF-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:updatePen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "vamp",
          "package": "wumpus-drawing",
          "signature": "Vamp u -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#vamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "vamp",
          "normalized": "Vamp a-\u003eGenPathSpec b a()",
          "package": "wumpus-drawing",
          "signature": "Vamp u-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:vamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "vamp_conn",
          "package": "wumpus-drawing",
          "signature": "ConnectorGraphic u",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#Vamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "vamp_conn",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:vamp_conn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "vamp_move",
          "package": "wumpus-drawing",
          "signature": "Vec2 u",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#Vamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "vamp_move",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:vamp_move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "vpenline",
          "package": "wumpus-drawing",
          "signature": "u -\u003e GenPathSpec st u ()",
          "source": "src/Wumpus-Drawing-Paths-PathBuilder.html#vpenline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths PathBuilder",
          "module": "Wumpus.Drawing.Paths.PathBuilder",
          "name": "vpenline",
          "normalized": "a-\u003eGenPathSpec b a()",
          "package": "wumpus-drawing",
          "signature": "u-\u003eGenPathSpec st u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:vpenline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary of vamps (currently small).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Paths.Vamps",
          "name": "Vamps",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths-Vamps.html",
          "type": "module"
        },
        "index": {
          "description": "Library of vamps currently small",
          "hierarchy": "Wumpus Drawing Paths Vamps",
          "module": "Wumpus.Drawing.Paths.Vamps",
          "name": "Vamps",
          "package": "wumpus-drawing",
          "partial": "Vamps",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Vamps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Paths.Vamps",
          "name": "squareWE",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Vamp u",
          "source": "src/Wumpus-Drawing-Paths-Vamps.html#squareWE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Paths Vamps",
          "module": "Wumpus.Drawing.Paths.Vamps",
          "name": "squareWE",
          "normalized": "a-\u003eVamp a",
          "package": "wumpus-drawing",
          "partial": "WE",
          "signature": "u-\u003eVamp u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Vamps.html#v:squareWE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShim import module for the Absolute Path modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Paths",
          "name": "Paths",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Paths.html",
          "type": "module"
        },
        "index": {
          "description": "Shim import module for the Absolute Path modules",
          "hierarchy": "Wumpus Drawing Paths",
          "module": "Wumpus.Drawing.Paths",
          "name": "Paths",
          "package": "wumpus-drawing",
          "partial": "Paths",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon core for shapes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "Base",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Common core for shapes",
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "Base",
          "package": "wumpus-drawing",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "DShape",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#DShape",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "DShape",
          "package": "wumpus-drawing",
          "partial": "DShape",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#t:DShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape is a record of three \u003cem\u003eLocTheta\u003c/em\u003e functions - \n functions \u003cem\u003efrom Point and Angle to answer\u003c/em\u003e. \n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eshape_path_fun\u003c/code\u003e returns a path. When the Shape is drawn, \n the rendering function (\u003ccode\u003estrokedShape\u003c/code\u003e, etc.) uses the path for \n drawing and returns the polymorphic answer \u003ccode\u003ea\u003c/code\u003e of the \n \u003ccode\u003eshape_ans_fun\u003c/code\u003e. Lastly the \u003ccode\u003eshape_decoration\u003c/code\u003e function can \n instantiated to add decoration (e.g. text) to the Shape as it \n is rendered.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ea\u003c/code\u003e of the \u003ccode\u003eshape_ans_fun\u003c/code\u003e represents some concrete shape \n object (e.g. a Rectangle, Triangle etc.). Crucial for shape \n objects is that they support Anchors - this allows connectors \n to address specific locations on the Shape border so \n \"node and link\" diagrams can be made easily.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "Shape",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#Shape",
          "type": "data"
        },
        "index": {
          "description": "Shape is record of three LocTheta functions functions from Point and Angle to answer The shape path fun returns path When the Shape is drawn the rendering function strokedShape etc uses the path for drawing and returns the polymorphic answer of the shape ans fun Lastly the shape decoration function can instantiated to add decoration e.g text to the Shape as it is rendered The of the shape ans fun represents some concrete shape object e.g Rectangle Triangle etc Crucial for shape objects is that they support Anchors this allows connectors to address specific locations on the Shape border so node and link diagrams can be made easily",
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "Shape",
          "package": "wumpus-drawing",
          "partial": "Shape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "ShapeCTM",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#ShapeCTM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "ShapeCTM",
          "package": "wumpus-drawing",
          "partial": "Shape CTM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#t:ShapeCTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "borderedShape",
          "package": "wumpus-drawing",
          "signature": "Shape t u -\u003e LocImage u (t u)",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#borderedShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "borderedShape",
          "normalized": "Shape a b-\u003eLocImage b(a b)",
          "package": "wumpus-drawing",
          "partial": "Shape",
          "signature": "Shape t u-\u003eLocImage u(t u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:borderedShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "ctmAngle",
          "package": "wumpus-drawing",
          "signature": "ShapeCTM u -\u003e Radian",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#ctmAngle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "ctmAngle",
          "normalized": "ShapeCTM a-\u003eRadian",
          "package": "wumpus-drawing",
          "partial": "Angle",
          "signature": "ShapeCTM u-\u003eRadian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:ctmAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "ctmCenter",
          "package": "wumpus-drawing",
          "signature": "ShapeCTM u -\u003e Point2 u",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#ctmCenter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "ctmCenter",
          "normalized": "ShapeCTM a-\u003ePoint a",
          "package": "wumpus-drawing",
          "partial": "Center",
          "signature": "ShapeCTM u-\u003ePoint u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:ctmCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "ctmLocale",
          "package": "wumpus-drawing",
          "signature": "ShapeCTM u -\u003e (Point2 u, Radian)",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#ctmLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "ctmLocale",
          "normalized": "ShapeCTM a-\u003e(Point a,Radian)",
          "package": "wumpus-drawing",
          "partial": "Locale",
          "signature": "ShapeCTM u-\u003e(Point u,Radian)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:ctmLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - this is simplistic double stroking - draw a background \n line with triple thickness and draw a white line on top.\n\u003c/p\u003e\u003cp\u003eI think this is what TikZ does, but it works better for TikZ \n where the extra thickness seems to be accounted for by the \n anchors. For Wumpus, arrows cut into the outside black line.\n\u003c/p\u003e\u003cp\u003eProbably Wumpus should calculate two paths instead.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "dblStrokedShape",
          "package": "wumpus-drawing",
          "signature": "Shape t u -\u003e LocImage u (t u)",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#dblStrokedShape",
          "type": "function"
        },
        "index": {
          "description": "Note this is simplistic double stroking draw background line with triple thickness and draw white line on top think this is what TikZ does but it works better for TikZ where the extra thickness seems to be accounted for by the anchors For Wumpus arrows cut into the outside black line Probably Wumpus should calculate two paths instead",
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "dblStrokedShape",
          "normalized": "Shape a b-\u003eLocImage b(a b)",
          "package": "wumpus-drawing",
          "partial": "Stroked Shape",
          "signature": "Shape t u-\u003eLocImage u(t u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:dblStrokedShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "filledShape",
          "package": "wumpus-drawing",
          "signature": "Shape t u -\u003e LocImage u (t u)",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#filledShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "filledShape",
          "normalized": "Shape a b-\u003eLocImage b(a b)",
          "package": "wumpus-drawing",
          "partial": "Shape",
          "signature": "Shape t u-\u003eLocImage u(t u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:filledShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "makeShape",
          "package": "wumpus-drawing",
          "signature": "LocThetaQuery u (t u) -\u003e LocThetaQuery u (AbsPath u) -\u003e Shape t u",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#makeShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "makeShape",
          "normalized": "LocThetaQuery a(b a)-\u003eLocThetaQuery a(AbsPath a)-\u003eShape b a",
          "package": "wumpus-drawing",
          "partial": "Shape",
          "signature": "LocThetaQuery u(t u)-\u003eLocThetaQuery u(AbsPath u)-\u003eShape t u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:makeShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "makeShapeCTM",
          "package": "wumpus-drawing",
          "signature": "Point2 u -\u003e Radian -\u003e ShapeCTM u",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#makeShapeCTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "makeShapeCTM",
          "normalized": "Point a-\u003eRadian-\u003eShapeCTM a",
          "package": "wumpus-drawing",
          "partial": "Shape CTM",
          "signature": "Point u-\u003eRadian-\u003eShapeCTM u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:makeShapeCTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "projectFromCtr",
          "package": "wumpus-drawing",
          "signature": "Vec2 u -\u003e ShapeCTM u -\u003e Anchor u",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#projectFromCtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "projectFromCtr",
          "normalized": "Vec a-\u003eShapeCTM a-\u003eAnchor a",
          "package": "wumpus-drawing",
          "partial": "From Ctr",
          "signature": "Vec u-\u003eShapeCTM u-\u003eAnchor u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:projectFromCtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "rborderedShape",
          "package": "wumpus-drawing",
          "signature": "Shape t u -\u003e LocThetaImage u (t u)",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#rborderedShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "rborderedShape",
          "normalized": "Shape a b-\u003eLocThetaImage b(a b)",
          "package": "wumpus-drawing",
          "partial": "Shape",
          "signature": "Shape t u-\u003eLocThetaImage u(t u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:rborderedShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "rfilledShape",
          "package": "wumpus-drawing",
          "signature": "Shape t u -\u003e LocThetaImage u (t u)",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#rfilledShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "rfilledShape",
          "normalized": "Shape a b-\u003eLocThetaImage b(a b)",
          "package": "wumpus-drawing",
          "partial": "Shape",
          "signature": "Shape t u-\u003eLocThetaImage u(t u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:rfilledShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw the shape path with round corners.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "roundCornerShapePath",
          "package": "wumpus-drawing",
          "signature": "u -\u003e [Point2 u] -\u003e Query u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#roundCornerShapePath",
          "type": "function"
        },
        "index": {
          "description": "Draw the shape path with round corners",
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "roundCornerShapePath",
          "normalized": "a-\u003e[Point a]-\u003eQuery a(AbsPath a)",
          "package": "wumpus-drawing",
          "partial": "Corner Shape Path",
          "signature": "u-\u003e[Point u]-\u003eQuery u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:roundCornerShapePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "rstrokedShape",
          "package": "wumpus-drawing",
          "signature": "Shape t u -\u003e LocThetaImage u (t u)",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#rstrokedShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "rstrokedShape",
          "normalized": "Shape a b-\u003eLocThetaImage b(a b)",
          "package": "wumpus-drawing",
          "partial": "Shape",
          "signature": "Shape t u-\u003eLocThetaImage u(t u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:rstrokedShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "setDecoration",
          "package": "wumpus-drawing",
          "signature": "LocThetaGraphic u -\u003e Shape t u -\u003e Shape t u",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#setDecoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "setDecoration",
          "normalized": "LocThetaGraphic a-\u003eShape b a-\u003eShape b a",
          "package": "wumpus-drawing",
          "partial": "Decoration",
          "signature": "LocThetaGraphic u-\u003eShape t u-\u003eShape t u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:setDecoration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "shapeMap",
          "package": "wumpus-drawing",
          "signature": "(t u -\u003e t' u) -\u003e Shape t u -\u003e Shape t' u",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#shapeMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "shapeMap",
          "normalized": "(a b-\u003ec b)-\u003eShape a b-\u003eShape c b",
          "package": "wumpus-drawing",
          "partial": "Map",
          "signature": "(t u-\u003et' u)-\u003eShape t u-\u003eShape t' u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:shapeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "strokedShape",
          "package": "wumpus-drawing",
          "signature": "Shape t u -\u003e LocImage u (t u)",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#strokedShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "strokedShape",
          "normalized": "Shape a b-\u003eLocImage b(a b)",
          "package": "wumpus-drawing",
          "partial": "Shape",
          "signature": "Shape t u-\u003eLocImage u(t u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:strokedShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path angle can be modified. This allows \u003cem\u003einverse\u003c/em\u003e \n versions of shapes (e.g. InvTriangle) to be made by\n wrapping a base Shape but rotating the path prior to drawing \n it.\n\u003c/p\u003e\u003cp\u003eOnly the Path needs rotating, the decoration takes the original \n angle. The anchors are typically implemented by rotating the \n correspoding anchor of the wrapped Shape about its center.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "updatePathAngle",
          "package": "wumpus-drawing",
          "signature": "(Radian -\u003e Radian) -\u003e Shape t u -\u003e Shape t u",
          "source": "src/Wumpus-Drawing-Shapes-Base.html#updatePathAngle",
          "type": "function"
        },
        "index": {
          "description": "The path angle can be modified This allows inverse versions of shapes e.g InvTriangle to be made by wrapping base Shape but rotating the path prior to drawing it Only the Path needs rotating the decoration takes the original angle The anchors are typically implemented by rotating the correspoding anchor of the wrapped Shape about its center",
          "hierarchy": "Wumpus Drawing Shapes Base",
          "module": "Wumpus.Drawing.Shapes.Base",
          "name": "updatePathAngle",
          "normalized": "(Radian-\u003eRadian)-\u003eShape a b-\u003eShape a b",
          "package": "wumpus-drawing",
          "partial": "Path Angle",
          "signature": "(Radian-\u003eRadian)-\u003eShape t u-\u003eShape t u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:updatePathAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple shapes - rectangle, circle diamond, ellipse.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Circle",
          "name": "Circle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Circle.html",
          "type": "module"
        },
        "index": {
          "description": "Simple shapes rectangle circle diamond ellipse",
          "hierarchy": "Wumpus Drawing Shapes Circle",
          "module": "Wumpus.Drawing.Shapes.Circle",
          "name": "Circle",
          "package": "wumpus-drawing",
          "partial": "Circle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Circle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Circle",
          "name": "Circle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Circle.html#Circle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Circle",
          "module": "Wumpus.Drawing.Shapes.Circle",
          "name": "Circle",
          "package": "wumpus-drawing",
          "partial": "Circle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Circle.html#t:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Circle",
          "name": "DCircle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Circle.html#DCircle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Circle",
          "module": "Wumpus.Drawing.Shapes.Circle",
          "name": "DCircle",
          "package": "wumpus-drawing",
          "partial": "DCircle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Circle.html#t:DCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecircle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e radius -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Circle",
          "name": "circle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Shape Circle u",
          "source": "src/Wumpus-Drawing-Shapes-Circle.html#circle",
          "type": "function"
        },
        "index": {
          "description": "circle radius Shape",
          "hierarchy": "Wumpus Drawing Shapes Circle",
          "module": "Wumpus.Drawing.Shapes.Circle",
          "name": "circle",
          "normalized": "a-\u003eShape Circle a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eShape Circle u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Circle.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDiamond (rhombus).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Diamond",
          "name": "Diamond",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Diamond.html",
          "type": "module"
        },
        "index": {
          "description": "Diamond rhombus",
          "hierarchy": "Wumpus Drawing Shapes Diamond",
          "module": "Wumpus.Drawing.Shapes.Diamond",
          "name": "Diamond",
          "package": "wumpus-drawing",
          "partial": "Diamond",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Diamond.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Diamond",
          "name": "DDiamond",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Diamond.html#DDiamond",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Diamond",
          "module": "Wumpus.Drawing.Shapes.Diamond",
          "name": "DDiamond",
          "package": "wumpus-drawing",
          "partial": "DDiamond",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Diamond.html#t:DDiamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Diamond",
          "name": "Diamond",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Diamond.html#Diamond",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Diamond",
          "module": "Wumpus.Drawing.Shapes.Diamond",
          "name": "Diamond",
          "package": "wumpus-drawing",
          "partial": "Diamond",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Diamond.html#t:Diamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ediamond\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e half_width * half_height -\u003e shape \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote - args might change to tull_width and full_height...\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Diamond",
          "name": "diamond",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Shape Diamond u",
          "source": "src/Wumpus-Drawing-Shapes-Diamond.html#diamond",
          "type": "function"
        },
        "index": {
          "description": "diamond half width half height shape Note args might change to tull width and full height",
          "hierarchy": "Wumpus Drawing Shapes Diamond",
          "module": "Wumpus.Drawing.Shapes.Diamond",
          "name": "diamond",
          "normalized": "a-\u003ea-\u003eShape Diamond a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eShape Diamond u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Diamond.html#v:diamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEllipse shape.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Ellipse",
          "name": "Ellipse",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Ellipse.html",
          "type": "module"
        },
        "index": {
          "description": "Ellipse shape",
          "hierarchy": "Wumpus Drawing Shapes Ellipse",
          "module": "Wumpus.Drawing.Shapes.Ellipse",
          "name": "Ellipse",
          "package": "wumpus-drawing",
          "partial": "Ellipse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Ellipse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Ellipse",
          "name": "DEllipse",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Ellipse.html#DEllipse",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Ellipse",
          "module": "Wumpus.Drawing.Shapes.Ellipse",
          "name": "DEllipse",
          "package": "wumpus-drawing",
          "partial": "DEllipse",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Ellipse.html#t:DEllipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Ellipse",
          "name": "Ellipse",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Ellipse.html#Ellipse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Ellipse",
          "module": "Wumpus.Drawing.Shapes.Ellipse",
          "name": "Ellipse",
          "package": "wumpus-drawing",
          "partial": "Ellipse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Ellipse.html#t:Ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eellipse\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e x_radii * y_radii -\u003e shape \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Ellipse",
          "name": "ellipse",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Shape Ellipse u",
          "source": "src/Wumpus-Drawing-Shapes-Ellipse.html#ellipse",
          "type": "function"
        },
        "index": {
          "description": "ellipse radii radii shape",
          "hierarchy": "Wumpus Drawing Shapes Ellipse",
          "module": "Wumpus.Drawing.Shapes.Ellipse",
          "name": "ellipse",
          "normalized": "a-\u003ea-\u003eShape Ellipse a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eShape Ellipse u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Ellipse.html#v:ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInverse semicircle. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.InvSemicircle",
          "name": "InvSemicircle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-InvSemicircle.html",
          "type": "module"
        },
        "index": {
          "description": "Inverse semicircle",
          "hierarchy": "Wumpus Drawing Shapes InvSemicircle",
          "module": "Wumpus.Drawing.Shapes.InvSemicircle",
          "name": "InvSemicircle",
          "package": "wumpus-drawing",
          "partial": "Inv Semicircle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemicircle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.InvSemicircle",
          "name": "DInvSemicircle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-InvSemicircle.html#DInvSemicircle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes InvSemicircle",
          "module": "Wumpus.Drawing.Shapes.InvSemicircle",
          "name": "DInvSemicircle",
          "package": "wumpus-drawing",
          "partial": "DInv Semicircle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemicircle.html#t:DInvSemicircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.InvSemicircle",
          "name": "InvSemicircle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-InvSemicircle.html#InvSemicircle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes InvSemicircle",
          "module": "Wumpus.Drawing.Shapes.InvSemicircle",
          "name": "InvSemicircle",
          "package": "wumpus-drawing",
          "partial": "Inv Semicircle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemicircle.html#t:InvSemicircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einvsemicircle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e radius -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.InvSemicircle",
          "name": "invsemicircle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Shape InvSemicircle u",
          "source": "src/Wumpus-Drawing-Shapes-InvSemicircle.html#invsemicircle",
          "type": "function"
        },
        "index": {
          "description": "invsemicircle radius Shape",
          "hierarchy": "Wumpus Drawing Shapes InvSemicircle",
          "module": "Wumpus.Drawing.Shapes.InvSemicircle",
          "name": "invsemicircle",
          "normalized": "a-\u003eShape InvSemicircle a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eShape InvSemicircle u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemicircle.html#v:invsemicircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInverse semiellipse. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
          "name": "InvSemiellipse",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-InvSemiellipse.html",
          "type": "module"
        },
        "index": {
          "description": "Inverse semiellipse",
          "hierarchy": "Wumpus Drawing Shapes InvSemiellipse",
          "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
          "name": "InvSemiellipse",
          "package": "wumpus-drawing",
          "partial": "Inv Semiellipse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemiellipse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
          "name": "DInvSemiellipse",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-InvSemiellipse.html#DInvSemiellipse",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes InvSemiellipse",
          "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
          "name": "DInvSemiellipse",
          "package": "wumpus-drawing",
          "partial": "DInv Semiellipse",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemiellipse.html#t:DInvSemiellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
          "name": "InvSemiellipse",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-InvSemiellipse.html#InvSemiellipse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes InvSemiellipse",
          "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
          "name": "InvSemiellipse",
          "package": "wumpus-drawing",
          "partial": "Inv Semiellipse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemiellipse.html#t:InvSemiellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einvsemiellipse\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e rx * ry -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
          "name": "invsemiellipse",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Shape InvSemiellipse u",
          "source": "src/Wumpus-Drawing-Shapes-InvSemiellipse.html#invsemiellipse",
          "type": "function"
        },
        "index": {
          "description": "invsemiellipse rx ry Shape",
          "hierarchy": "Wumpus Drawing Shapes InvSemiellipse",
          "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
          "name": "invsemiellipse",
          "normalized": "a-\u003ea-\u003eShape InvSemiellipse a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eShape InvSemiellipse u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemiellipse.html#v:invsemiellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInverse version of the Triangle shape.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.InvTriangle",
          "name": "InvTriangle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-InvTriangle.html",
          "type": "module"
        },
        "index": {
          "description": "Inverse version of the Triangle shape",
          "hierarchy": "Wumpus Drawing Shapes InvTriangle",
          "module": "Wumpus.Drawing.Shapes.InvTriangle",
          "name": "InvTriangle",
          "package": "wumpus-drawing",
          "partial": "Inv Triangle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvTriangle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.InvTriangle",
          "name": "DInvTriangle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-InvTriangle.html#DInvTriangle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes InvTriangle",
          "module": "Wumpus.Drawing.Shapes.InvTriangle",
          "name": "DInvTriangle",
          "package": "wumpus-drawing",
          "partial": "DInv Triangle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvTriangle.html#t:DInvTriangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.InvTriangle",
          "name": "InvTriangle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-InvTriangle.html#InvTriangle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes InvTriangle",
          "module": "Wumpus.Drawing.Shapes.InvTriangle",
          "name": "InvTriangle",
          "package": "wumpus-drawing",
          "partial": "Inv Triangle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvTriangle.html#t:InvTriangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einvtriangle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e top_base_width * height -\u003e Triangle \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.InvTriangle",
          "name": "invtriangle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Shape InvTriangle u",
          "source": "src/Wumpus-Drawing-Shapes-InvTriangle.html#invtriangle",
          "type": "function"
        },
        "index": {
          "description": "invtriangle top base width height Triangle",
          "hierarchy": "Wumpus Drawing Shapes InvTriangle",
          "module": "Wumpus.Drawing.Shapes.InvTriangle",
          "name": "invtriangle",
          "normalized": "a-\u003ea-\u003eShape InvTriangle a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eShape InvTriangle u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvTriangle.html#v:invtriangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallelogram.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "Parallelogram",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Parallelogram.html",
          "type": "module"
        },
        "index": {
          "description": "Parallelogram",
          "hierarchy": "Wumpus Drawing Shapes Parallelogram",
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "Parallelogram",
          "package": "wumpus-drawing",
          "partial": "Parallelogram",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "DParallelogram",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Parallelogram.html#DParallelogram",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Parallelogram",
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "DParallelogram",
          "package": "wumpus-drawing",
          "partial": "DParallelogram",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#t:DParallelogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Paralleogram.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "Parallelogram",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Parallelogram.html#Parallelogram",
          "type": "data"
        },
        "index": {
          "description": "Paralleogram",
          "hierarchy": "Wumpus Drawing Shapes Parallelogram",
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "Parallelogram",
          "package": "wumpus-drawing",
          "partial": "Parallelogram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#t:Parallelogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eparallelogram\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e width * height * bottom_left_ang -\u003e Parallelogram \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "parallelogram",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e Shape Parallelogram u",
          "source": "src/Wumpus-Drawing-Shapes-Parallelogram.html#parallelogram",
          "type": "function"
        },
        "index": {
          "description": "parallelogram width height bottom left ang Parallelogram",
          "hierarchy": "Wumpus Drawing Shapes Parallelogram",
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "parallelogram",
          "normalized": "a-\u003ea-\u003eRadian-\u003eShape Parallelogram a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eShape Parallelogram u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#v:parallelogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezparallelogram\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e base_width * height -\u003e Parallelogram \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "zparallelogram",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Shape Parallelogram u",
          "source": "src/Wumpus-Drawing-Shapes-Parallelogram.html#zparallelogram",
          "type": "function"
        },
        "index": {
          "description": "zparallelogram base width height Parallelogram",
          "hierarchy": "Wumpus Drawing Shapes Parallelogram",
          "module": "Wumpus.Drawing.Shapes.Parallelogram",
          "name": "zparallelogram",
          "normalized": "a-\u003ea-\u003eShape Parallelogram a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eShape Parallelogram u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#v:zparallelogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRectangle shape.\n\u003c/p\u003e\u003cp\u003eNote - CardinalAnchor2 (northeast etc.) point to their radial \n positions (this is a change since earlier versions).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Rectangle",
          "name": "Rectangle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Rectangle.html",
          "type": "module"
        },
        "index": {
          "description": "Rectangle shape Note CardinalAnchor2 northeast etc point to their radial positions this is change since earlier versions",
          "hierarchy": "Wumpus Drawing Shapes Rectangle",
          "module": "Wumpus.Drawing.Shapes.Rectangle",
          "name": "Rectangle",
          "package": "wumpus-drawing",
          "partial": "Rectangle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Rectangle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Rectangle",
          "name": "DRectangle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Rectangle.html#DRectangle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Rectangle",
          "module": "Wumpus.Drawing.Shapes.Rectangle",
          "name": "DRectangle",
          "package": "wumpus-drawing",
          "partial": "DRectangle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Rectangle.html#t:DRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Rectangle",
          "name": "Rectangle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Rectangle.html#Rectangle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Rectangle",
          "module": "Wumpus.Drawing.Shapes.Rectangle",
          "name": "Rectangle",
          "package": "wumpus-drawing",
          "partial": "Rectangle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Rectangle.html#t:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erectangle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e width * height -\u003e shape \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Rectangle",
          "name": "rectangle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Shape Rectangle u",
          "source": "src/Wumpus-Drawing-Shapes-Rectangle.html#rectangle",
          "type": "function"
        },
        "index": {
          "description": "rectangle width height shape",
          "hierarchy": "Wumpus Drawing Shapes Rectangle",
          "module": "Wumpus.Drawing.Shapes.Rectangle",
          "name": "rectangle",
          "normalized": "a-\u003ea-\u003eShape Rectangle a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eShape Rectangle u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Rectangle.html#v:rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemicircle. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Semicircle",
          "name": "Semicircle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Semicircle.html",
          "type": "module"
        },
        "index": {
          "description": "Semicircle",
          "hierarchy": "Wumpus Drawing Shapes Semicircle",
          "module": "Wumpus.Drawing.Shapes.Semicircle",
          "name": "Semicircle",
          "package": "wumpus-drawing",
          "partial": "Semicircle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semicircle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Semicircle",
          "name": "DSemicircle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Semicircle.html#DSemicircle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Semicircle",
          "module": "Wumpus.Drawing.Shapes.Semicircle",
          "name": "DSemicircle",
          "package": "wumpus-drawing",
          "partial": "DSemicircle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semicircle.html#t:DSemicircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Semicircle",
          "name": "Semicircle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Semicircle.html#Semicircle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Semicircle",
          "module": "Wumpus.Drawing.Shapes.Semicircle",
          "name": "Semicircle",
          "package": "wumpus-drawing",
          "partial": "Semicircle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semicircle.html#t:Semicircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esemicircle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e radius -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Semicircle",
          "name": "semicircle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e Shape Semicircle u",
          "source": "src/Wumpus-Drawing-Shapes-Semicircle.html#semicircle",
          "type": "function"
        },
        "index": {
          "description": "semicircle radius Shape",
          "hierarchy": "Wumpus Drawing Shapes Semicircle",
          "module": "Wumpus.Drawing.Shapes.Semicircle",
          "name": "semicircle",
          "normalized": "a-\u003eShape Semicircle a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eShape Semicircle u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semicircle.html#v:semicircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemiellipse.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Semiellipse",
          "name": "Semiellipse",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Semiellipse.html",
          "type": "module"
        },
        "index": {
          "description": "Semiellipse",
          "hierarchy": "Wumpus Drawing Shapes Semiellipse",
          "module": "Wumpus.Drawing.Shapes.Semiellipse",
          "name": "Semiellipse",
          "package": "wumpus-drawing",
          "partial": "Semiellipse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semiellipse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Semiellipse",
          "name": "DSemiellipse",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Semiellipse.html#DSemiellipse",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Semiellipse",
          "module": "Wumpus.Drawing.Shapes.Semiellipse",
          "name": "DSemiellipse",
          "package": "wumpus-drawing",
          "partial": "DSemiellipse",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semiellipse.html#t:DSemiellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Semiellipse",
          "name": "Semiellipse",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Semiellipse.html#Semiellipse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Semiellipse",
          "module": "Wumpus.Drawing.Shapes.Semiellipse",
          "name": "Semiellipse",
          "package": "wumpus-drawing",
          "partial": "Semiellipse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semiellipse.html#t:Semiellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esemiellipse\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e x_radius * y_radius -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Semiellipse",
          "name": "semiellipse",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Shape Semiellipse u",
          "source": "src/Wumpus-Drawing-Shapes-Semiellipse.html#semiellipse",
          "type": "function"
        },
        "index": {
          "description": "semiellipse radius radius Shape",
          "hierarchy": "Wumpus Drawing Shapes Semiellipse",
          "module": "Wumpus.Drawing.Shapes.Semiellipse",
          "name": "semiellipse",
          "normalized": "a-\u003ea-\u003eShape Semiellipse a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eShape Semiellipse u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semiellipse.html#v:semiellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIsoceles Trapezium.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Trapezium",
          "name": "Trapezium",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Trapezium.html",
          "type": "module"
        },
        "index": {
          "description": "Isoceles Trapezium",
          "hierarchy": "Wumpus Drawing Shapes Trapezium",
          "module": "Wumpus.Drawing.Shapes.Trapezium",
          "name": "Trapezium",
          "package": "wumpus-drawing",
          "partial": "Trapezium",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Trapezium.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Trapezium",
          "name": "DTrapezium",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Trapezium.html#DTrapezium",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Trapezium",
          "module": "Wumpus.Drawing.Shapes.Trapezium",
          "name": "DTrapezium",
          "package": "wumpus-drawing",
          "partial": "DTrapezium",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Trapezium.html#t:DTrapezium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trapezium.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Trapezium",
          "name": "Trapezium",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Trapezium.html#Trapezium",
          "type": "data"
        },
        "index": {
          "description": "trapezium",
          "hierarchy": "Wumpus Drawing Shapes Trapezium",
          "module": "Wumpus.Drawing.Shapes.Trapezium",
          "name": "Trapezium",
          "package": "wumpus-drawing",
          "partial": "Trapezium",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Trapezium.html#t:Trapezium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etrapezium\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e base_width * height * bottom_left_ang * \n     bottom_right_ang -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Trapezium",
          "name": "trapezium",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Radian -\u003e Shape Trapezium u",
          "source": "src/Wumpus-Drawing-Shapes-Trapezium.html#trapezium",
          "type": "function"
        },
        "index": {
          "description": "trapezium base width height bottom left ang bottom right ang Shape",
          "hierarchy": "Wumpus Drawing Shapes Trapezium",
          "module": "Wumpus.Drawing.Shapes.Trapezium",
          "name": "trapezium",
          "normalized": "a-\u003ea-\u003eRadian-\u003eShape Trapezium a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eRadian-\u003eShape Trapezium u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Trapezium.html#v:trapezium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIsosceles triangle.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes.Triangle",
          "name": "Triangle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Triangle.html",
          "type": "module"
        },
        "index": {
          "description": "Isosceles triangle",
          "hierarchy": "Wumpus Drawing Shapes Triangle",
          "module": "Wumpus.Drawing.Shapes.Triangle",
          "name": "Triangle",
          "package": "wumpus-drawing",
          "partial": "Triangle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Triangle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Shapes.Triangle",
          "name": "DTriangle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Triangle.html#DTriangle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Shapes Triangle",
          "module": "Wumpus.Drawing.Shapes.Triangle",
          "name": "DTriangle",
          "package": "wumpus-drawing",
          "partial": "DTriangle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Triangle.html#t:DTriangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn isosceles triangle, oriented \u003cem\u003eupwards\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Triangle",
          "name": "Triangle",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes-Triangle.html#Triangle",
          "type": "data"
        },
        "index": {
          "description": "An isosceles triangle oriented upwards",
          "hierarchy": "Wumpus Drawing Shapes Triangle",
          "module": "Wumpus.Drawing.Shapes.Triangle",
          "name": "Triangle",
          "package": "wumpus-drawing",
          "partial": "Triangle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Triangle.html#t:Triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etriangle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e base_width * height -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Shapes.Triangle",
          "name": "triangle",
          "package": "wumpus-drawing",
          "signature": "u -\u003e u -\u003e Shape Triangle u",
          "source": "src/Wumpus-Drawing-Shapes-Triangle.html#triangle",
          "type": "function"
        },
        "index": {
          "description": "triangle base width height Shape",
          "hierarchy": "Wumpus Drawing Shapes Triangle",
          "module": "Wumpus.Drawing.Shapes.Triangle",
          "name": "triangle",
          "normalized": "a-\u003ea-\u003eShape Triangle a",
          "package": "wumpus-drawing",
          "signature": "u-\u003eu-\u003eShape Triangle u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Triangle.html#v:triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShim module for Shapes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Shapes",
          "name": "Shapes",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Shapes.html",
          "type": "module"
        },
        "index": {
          "description": "Shim module for Shapes",
          "hierarchy": "Wumpus Drawing Shapes",
          "module": "Wumpus.Drawing.Shapes",
          "name": "Shapes",
          "package": "wumpus-drawing",
          "partial": "Shapes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFlexible text type, composable with \u003ccode\u003epretty-print\u003c/code\u003e style \n operators.\n\u003c/p\u003e\u003cp\u003eDirection zero (left-to-right) only.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "DocTextZero",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html",
          "type": "module"
        },
        "index": {
          "description": "Flexible text type composable with pretty-print style operators Direction zero left-to-right only",
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "DocTextZero",
          "package": "wumpus-drawing",
          "partial": "Doc Text Zero",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "Doc",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#Doc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "Doc",
          "package": "wumpus-drawing",
          "partial": "Doc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "DocGraphic",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#DocGraphic",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "DocGraphic",
          "package": "wumpus-drawing",
          "partial": "Doc Graphic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#t:DocGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoc type.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "GenDoc",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#GenDoc",
          "type": "data"
        },
        "index": {
          "description": "Doc type",
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "GenDoc",
          "package": "wumpus-drawing",
          "partial": "Gen Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#t:GenDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "GenDocGraphic",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#GenDocGraphic",
          "type": "type"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "GenDocGraphic",
          "package": "wumpus-drawing",
          "partial": "Gen Doc Graphic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#t:GenDocGraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate two Docs separated with a space.\n\u003c/p\u003e\u003cp\u003e(infixr 6)\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "(\u003c+\u003e)",
          "package": "wumpus-drawing",
          "signature": "GenDocGraphic st u -\u003e GenDocGraphic st u -\u003e GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Concatenate two Docs separated with space infixr",
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "GenDocGraphic a b-\u003eGenDocGraphic a b-\u003eGenDocGraphic a b",
          "package": "wumpus-drawing",
          "signature": "GenDocGraphic st u-\u003eGenDocGraphic st u-\u003eGenDocGraphic st u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "blank",
          "package": "wumpus-drawing",
          "signature": "GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#blank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "blank",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:blank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "bold",
          "package": "wumpus-drawing",
          "signature": "GenDoc st u a -\u003e GenDoc st u a",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#bold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "bold",
          "normalized": "GenDoc a b c-\u003eGenDoc a b c",
          "package": "wumpus-drawing",
          "signature": "GenDoc st u a-\u003eGenDoc st u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "boldItalic",
          "package": "wumpus-drawing",
          "signature": "GenDoc st u a -\u003e GenDoc st u a",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#boldItalic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "boldItalic",
          "normalized": "GenDoc a b c-\u003eGenDoc a b c",
          "package": "wumpus-drawing",
          "partial": "Italic",
          "signature": "GenDoc st u a-\u003eGenDoc st u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:boldItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "embedPosObject",
          "package": "wumpus-drawing",
          "signature": "GenPosObject st u a -\u003e GenDoc st u a",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#embedPosObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "embedPosObject",
          "normalized": "GenPosObject a b c-\u003eGenDoc a b c",
          "package": "wumpus-drawing",
          "partial": "Pos Object",
          "signature": "GenPosObject st u a-\u003eGenDoc st u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:embedPosObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "escaped",
          "package": "wumpus-drawing",
          "signature": "EscapedText -\u003e GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#escaped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "escaped",
          "normalized": "EscapedText-\u003eGenDocGraphic a b",
          "package": "wumpus-drawing",
          "signature": "EscapedText-\u003eGenDocGraphic st u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:escaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is equivalent to \u003ccode\u003e\u003ca\u003eshowFFloat\u003c/a\u003e\u003c/code\u003e in the Numeric module.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshowFFloat\u003c/a\u003e\u003c/code\u003e, the answer is rendered to supplied \n precision. \u003ccode\u003eNothing\u003c/code\u003e indicated full precision.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "ffloat",
          "package": "wumpus-drawing",
          "signature": "Maybe Int -\u003e a -\u003e GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#ffloat",
          "type": "function"
        },
        "index": {
          "description": "This is equivalent to showFFloat in the Numeric module Like showFFloat the answer is rendered to supplied precision Nothing indicated full precision",
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "ffloat",
          "normalized": "Maybe Int-\u003ea-\u003eGenDocGraphic b c",
          "package": "wumpus-drawing",
          "signature": "Maybe Int-\u003ea-\u003eGenDocGraphic st u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:ffloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized version of \u003ccode\u003e\u003ca\u003effloat\u003c/a\u003e\u003c/code\u003e - the answer is always \n rendered at \"full precision\".\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "float",
          "package": "wumpus-drawing",
          "signature": "a -\u003e GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#float",
          "type": "function"
        },
        "index": {
          "description": "Specialized version of ffloat the answer is always rendered at full precision",
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "float",
          "normalized": "a-\u003eGenDocGraphic b c",
          "package": "wumpus-drawing",
          "signature": "a-\u003eGenDocGraphic st u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "highlight",
          "package": "wumpus-drawing",
          "signature": "RGBi -\u003e GenDoc st u a -\u003e GenDoc st u a",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "highlight",
          "normalized": "RGBi-\u003eGenDoc a b c-\u003eGenDoc a b c",
          "package": "wumpus-drawing",
          "signature": "RGBi-\u003eGenDoc st u a-\u003eGenDoc st u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:highlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "int",
          "package": "wumpus-drawing",
          "signature": "Int -\u003e GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "int",
          "normalized": "Int-\u003eGenDocGraphic a b",
          "package": "wumpus-drawing",
          "signature": "Int-\u003eGenDocGraphic st u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "integer",
          "package": "wumpus-drawing",
          "signature": "Integer -\u003e GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "integer",
          "normalized": "Integer-\u003eGenDocGraphic a b",
          "package": "wumpus-drawing",
          "signature": "Integer-\u003eGenDocGraphic st u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "italic",
          "package": "wumpus-drawing",
          "signature": "GenDoc st u a -\u003e GenDoc st u a",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#italic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "italic",
          "normalized": "GenDoc a b c-\u003eGenDoc a b c",
          "package": "wumpus-drawing",
          "signature": "GenDoc st u a-\u003eGenDoc st u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:italic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "monospace",
          "package": "wumpus-drawing",
          "signature": "EscapedChar -\u003e EscapedText -\u003e GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#monospace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "monospace",
          "normalized": "EscapedChar-\u003eEscapedText-\u003eGenDocGraphic a b",
          "package": "wumpus-drawing",
          "signature": "EscapedChar-\u003eEscapedText-\u003eGenDocGraphic st u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:monospace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "runGenDoc",
          "package": "wumpus-drawing",
          "signature": "VAlign -\u003e FontFamily -\u003e GenDoc st u a -\u003e GenPosObject st u a",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#runGenDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "runGenDoc",
          "normalized": "VAlign-\u003eFontFamily-\u003eGenDoc a b c-\u003eGenPosObject a b c",
          "package": "wumpus-drawing",
          "partial": "Gen Doc",
          "signature": "VAlign-\u003eFontFamily-\u003eGenDoc st u a-\u003eGenPosObject st u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:runGenDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "space",
          "package": "wumpus-drawing",
          "signature": "GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#space",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "space",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "strikethrough",
          "package": "wumpus-drawing",
          "signature": "GenDoc st u a -\u003e GenDoc st u a",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#strikethrough",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "strikethrough",
          "normalized": "GenDoc a b c-\u003eGenDoc a b c",
          "package": "wumpus-drawing",
          "signature": "GenDoc st u a-\u003eGenDoc st u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:strikethrough"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "string",
          "package": "wumpus-drawing",
          "signature": "String -\u003e GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "string",
          "normalized": "String-\u003eGenDocGraphic a b",
          "package": "wumpus-drawing",
          "signature": "String-\u003eGenDocGraphic st u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "underline",
          "package": "wumpus-drawing",
          "signature": "GenDoc st u a -\u003e GenDoc st u a",
          "source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#underline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base DocTextZero",
          "module": "Wumpus.Drawing.Text.Base.DocTextZero",
          "name": "underline",
          "normalized": "GenDoc a b c-\u003eGenDoc a b c",
          "package": "wumpus-drawing",
          "signature": "GenDoc st u a-\u003eGenDoc st u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:underline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnnotation labels.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "Label",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html",
          "type": "module"
        },
        "index": {
          "description": "Annotation labels",
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "Label",
          "package": "wumpus-drawing",
          "partial": "Label",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue is 1 snap move up, 1 snap move left.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "above_left_of",
          "package": "wumpus-drawing",
          "signature": "a -\u003e Query u (Anchor u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#above_left_of",
          "type": "function"
        },
        "index": {
          "description": "Value is snap move up snap move left This function should be considered obsolete pending re-think",
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "above_left_of",
          "normalized": "a-\u003eQuery b(Anchor b)",
          "package": "wumpus-drawing",
          "signature": "a-\u003eQuery u(Anchor u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:above_left_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue is 1 snap move up, 1 snap move right.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "above_right_of",
          "package": "wumpus-drawing",
          "signature": "a -\u003e Query u (Anchor u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#above_right_of",
          "type": "function"
        },
        "index": {
          "description": "Value is snap move up snap move right This function should be considered obsolete pending re-think",
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "above_right_of",
          "normalized": "a-\u003eQuery b(Anchor b)",
          "package": "wumpus-drawing",
          "signature": "a-\u003eQuery u(Anchor u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:above_right_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue is 1 snap move down, 1 snap move left.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "below_left_of",
          "package": "wumpus-drawing",
          "signature": "a -\u003e Query u (Anchor u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#below_left_of",
          "type": "function"
        },
        "index": {
          "description": "Value is snap move down snap move left This function should be considered obsolete pending re-think",
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "below_left_of",
          "normalized": "a-\u003eQuery b(Anchor b)",
          "package": "wumpus-drawing",
          "signature": "a-\u003eQuery u(Anchor u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:below_left_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue is 1 snap move below, 1 snap move right.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "below_right_of",
          "package": "wumpus-drawing",
          "signature": "a -\u003e Query u (Anchor u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#below_right_of",
          "type": "function"
        },
        "index": {
          "description": "Value is snap move below snap move right This function should be considered obsolete pending re-think",
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "below_right_of",
          "normalized": "a-\u003eQuery b(Anchor b)",
          "package": "wumpus-drawing",
          "signature": "a-\u003eQuery u(Anchor u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:below_right_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute units.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "centerRelative",
          "package": "wumpus-drawing",
          "signature": "(Int, Int) -\u003e a -\u003e Query u (Anchor u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#centerRelative",
          "type": "function"
        },
        "index": {
          "description": "Absolute units",
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "centerRelative",
          "normalized": "(Int,Int)-\u003ea-\u003eQuery b(Anchor b)",
          "package": "wumpus-drawing",
          "partial": "Relative",
          "signature": "(Int,Int)-\u003ea-\u003eQuery u(Anchor u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:centerRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "connectorPathLabel",
          "package": "wumpus-drawing",
          "signature": "(AbsPath u -\u003e Point2 u) -\u003e RectAddress -\u003e BoundedLocRectGraphic u -\u003e Image u (AbsPath u) -\u003e Image u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#connectorPathLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "connectorPathLabel",
          "normalized": "(AbsPath a-\u003ePoint a)-\u003eRectAddress-\u003eBoundedLocRectGraphic a-\u003eImage a(AbsPath a)-\u003eImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "partial": "Path Label",
          "signature": "(AbsPath u-\u003ePoint u)-\u003eRectAddress-\u003eBoundedLocRectGraphic u-\u003eImage u(AbsPath u)-\u003eImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:connectorPathLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_above",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#label_above",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_above",
          "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_atend_of",
          "package": "wumpus-drawing",
          "signature": "RectAddress -\u003e BoundedLocRectGraphic u -\u003e Image u (AbsPath u) -\u003e Image u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#label_atend_of",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_atend_of",
          "normalized": "RectAddress-\u003eBoundedLocRectGraphic a-\u003eImage a(AbsPath a)-\u003eImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "signature": "RectAddress-\u003eBoundedLocRectGraphic u-\u003eImage u(AbsPath u)-\u003eImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_atend_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_atstart_of",
          "package": "wumpus-drawing",
          "signature": "RectAddress -\u003e BoundedLocRectGraphic u -\u003e Image u (AbsPath u) -\u003e Image u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#label_atstart_of",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_atstart_of",
          "normalized": "RectAddress-\u003eBoundedLocRectGraphic a-\u003eImage a(AbsPath a)-\u003eImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "signature": "RectAddress-\u003eBoundedLocRectGraphic u-\u003eImage u(AbsPath u)-\u003eImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_atstart_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_below",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#label_below",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_below",
          "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_below"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_center_of",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#label_center_of",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_center_of",
          "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_center_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_left_of",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#label_left_of",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_left_of",
          "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_left_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_midway_of",
          "package": "wumpus-drawing",
          "signature": "RectAddress -\u003e BoundedLocRectGraphic u -\u003e Image u (AbsPath u) -\u003e Image u (AbsPath u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#label_midway_of",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_midway_of",
          "normalized": "RectAddress-\u003eBoundedLocRectGraphic a-\u003eImage a(AbsPath a)-\u003eImage a(AbsPath a)",
          "package": "wumpus-drawing",
          "signature": "RectAddress-\u003eBoundedLocRectGraphic u-\u003eImage u(AbsPath u)-\u003eImage u(AbsPath u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_midway_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_right_of",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#label_right_of",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "label_right_of",
          "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
          "package": "wumpus-drawing",
          "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_right_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue is 1 snap move left.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "left_of",
          "package": "wumpus-drawing",
          "signature": "a -\u003e Query u (Anchor u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#left_of",
          "type": "function"
        },
        "index": {
          "description": "Value is snap move left This function should be considered obsolete pending re-think",
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "left_of",
          "normalized": "a-\u003eQuery b(Anchor b)",
          "package": "wumpus-drawing",
          "signature": "a-\u003eQuery u(Anchor u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:left_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "locImageLabel",
          "package": "wumpus-drawing",
          "signature": "(a -\u003e Anchor u) -\u003e RectAddress -\u003e (RectAddress -\u003e LocImage u (BoundingBox u)) -\u003e LocImage u a -\u003e LocImage u a",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#locImageLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "locImageLabel",
          "normalized": "(a-\u003eAnchor b)-\u003eRectAddress-\u003e(RectAddress-\u003eLocImage b(BoundingBox b))-\u003eLocImage b a-\u003eLocImage b a",
          "package": "wumpus-drawing",
          "partial": "Image Label",
          "signature": "(a-\u003eAnchor u)-\u003eRectAddress-\u003e(RectAddress-\u003eLocImage u(BoundingBox u))-\u003eLocImage u a-\u003eLocImage u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:locImageLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue is 1 snap unit right.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "right_of",
          "package": "wumpus-drawing",
          "signature": "a -\u003e Query u (Anchor u)",
          "source": "src/Wumpus-Drawing-Text-Base-Label.html#right_of",
          "type": "function"
        },
        "index": {
          "description": "Value is snap unit right This function should be considered obsolete pending re-think",
          "hierarchy": "Wumpus Drawing Text Base Label",
          "module": "Wumpus.Drawing.Text.Base.Label",
          "name": "right_of",
          "normalized": "a-\u003eQuery b(Anchor b)",
          "package": "wumpus-drawing",
          "signature": "a-\u003eQuery u(Anchor u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:right_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon import module for the Writing Direction 0 modules\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Text.DirectionZero",
          "name": "DirectionZero",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Text-DirectionZero.html",
          "type": "module"
        },
        "index": {
          "description": "Common import module for the Writing Direction modules",
          "hierarchy": "Wumpus Drawing Text DirectionZero",
          "module": "Wumpus.Drawing.Text.DirectionZero",
          "name": "DirectionZero",
          "package": "wumpus-drawing",
          "partial": "Direction Zero",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DirectionZero.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.DirectionZero",
          "name": "multilineText",
          "package": "wumpus-drawing",
          "signature": "VAlign -\u003e RectAddress -\u003e String -\u003e BoundedLocGraphic u",
          "source": "src/Wumpus-Drawing-Text-DirectionZero.html#multilineText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text DirectionZero",
          "module": "Wumpus.Drawing.Text.DirectionZero",
          "name": "multilineText",
          "normalized": "VAlign-\u003eRectAddress-\u003eString-\u003eBoundedLocGraphic a",
          "package": "wumpus-drawing",
          "partial": "Text",
          "signature": "VAlign-\u003eRectAddress-\u003eString-\u003eBoundedLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DirectionZero.html#v:multilineText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - this is likely to be moved too...\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.DirectionZero",
          "name": "rtextline",
          "package": "wumpus-drawing",
          "signature": "Radian -\u003e RectAddress -\u003e String -\u003e BoundedLocGraphic u",
          "source": "src/Wumpus-Drawing-Text-DirectionZero.html#rtextline",
          "type": "function"
        },
        "index": {
          "description": "Note this is likely to be moved too",
          "hierarchy": "Wumpus Drawing Text DirectionZero",
          "module": "Wumpus.Drawing.Text.DirectionZero",
          "name": "rtextline",
          "normalized": "Radian-\u003eRectAddress-\u003eString-\u003eBoundedLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "Radian-\u003eRectAddress-\u003eString-\u003eBoundedLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DirectionZero.html#v:rtextline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - this is likely to be moved...\n\u003c/p\u003e\u003cp\u003eAlso, reversed argument order would be more convenient as \n RectAddress always short but String could be long. \n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.DirectionZero",
          "name": "textline",
          "package": "wumpus-drawing",
          "signature": "RectAddress -\u003e String -\u003e BoundedLocGraphic u",
          "source": "src/Wumpus-Drawing-Text-DirectionZero.html#textline",
          "type": "function"
        },
        "index": {
          "description": "Note this is likely to be moved Also reversed argument order would be more convenient as RectAddress always short but String could be long",
          "hierarchy": "Wumpus Drawing Text DirectionZero",
          "module": "Wumpus.Drawing.Text.DirectionZero",
          "name": "textline",
          "normalized": "RectAddress-\u003eString-\u003eBoundedLocGraphic a",
          "package": "wumpus-drawing",
          "signature": "RectAddress-\u003eString-\u003eBoundedLocGraphic u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DirectionZero.html#v:textline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSymbols - redefined Basis.Symbols.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "DocSymbols",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Text-DocSymbols.html",
          "type": "module"
        },
        "index": {
          "description": "Symbols redefined Basis.Symbols",
          "hierarchy": "Wumpus Drawing Text DocSymbols",
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "DocSymbols",
          "package": "wumpus-drawing",
          "partial": "Doc Symbols",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "empty_box",
          "package": "wumpus-drawing",
          "signature": "GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-DocSymbols.html#empty_box",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text DocSymbols",
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "empty_box",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:empty_box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "left_slice",
          "package": "wumpus-drawing",
          "signature": "GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-DocSymbols.html#left_slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text DocSymbols",
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "left_slice",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:left_slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "ocircle",
          "package": "wumpus-drawing",
          "signature": "GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-DocSymbols.html#ocircle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text DocSymbols",
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "ocircle",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:ocircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "right_slice",
          "package": "wumpus-drawing",
          "signature": "GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-DocSymbols.html#right_slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text DocSymbols",
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "right_slice",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:right_slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "small_ocircle",
          "package": "wumpus-drawing",
          "signature": "GenDocGraphic st u",
          "source": "src/Wumpus-Drawing-Text-DocSymbols.html#small_ocircle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Wumpus Drawing Text DocSymbols",
          "module": "Wumpus.Drawing.Text.DocSymbols",
          "name": "small_ocircle",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:small_ocircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSafe to use \"Core 13\" fonts that are expected to be present\n for any PostScript interpreter.\n\u003c/p\u003e\u003cp\u003eNote - regrettably Symbol is not safe to use for SVG.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "StandardFontDefs",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html",
          "type": "module"
        },
        "index": {
          "description": "Safe to use Core fonts that are expected to be present for any PostScript interpreter Note regrettably Symbol is not safe to use for SVG",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "StandardFontDefs",
          "package": "wumpus-drawing",
          "partial": "Standard Font Defs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCourier\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier",
          "type": "function"
        },
        "index": {
          "description": "Courier",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCourier Bold\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier_bold",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier_bold",
          "type": "function"
        },
        "index": {
          "description": "Courier Bold",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier_bold",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier_bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCourier Bold Oblique\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier_bold_oblique",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier_bold_oblique",
          "type": "function"
        },
        "index": {
          "description": "Courier Bold Oblique",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier_bold_oblique",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier_bold_oblique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFontFamily\u003c/a\u003e\u003c/code\u003e definition for Courier.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier_family",
          "package": "wumpus-drawing",
          "signature": "FontFamily",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier_family",
          "type": "function"
        },
        "index": {
          "description": "FontFamily definition for Courier",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier_family",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier_family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCourier Oblique\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier_oblique",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier_oblique",
          "type": "function"
        },
        "index": {
          "description": "Courier Oblique",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "courier_oblique",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier_oblique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelvetica regular weight.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica",
          "type": "function"
        },
        "index": {
          "description": "Helvetica regular weight",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelvetica Bold\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica_bold",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica_bold",
          "type": "function"
        },
        "index": {
          "description": "Helvetica Bold",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica_bold",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica_bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelvetica Bold Oblique\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica_bold_oblique",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica_bold_oblique",
          "type": "function"
        },
        "index": {
          "description": "Helvetica Bold Oblique",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica_bold_oblique",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica_bold_oblique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFontFamily\u003c/a\u003e\u003c/code\u003e definition for Helvetica.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica_family",
          "package": "wumpus-drawing",
          "signature": "FontFamily",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica_family",
          "type": "function"
        },
        "index": {
          "description": "FontFamily definition for Helvetica",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica_family",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica_family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelvetica Oblique\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica_oblique",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica_oblique",
          "type": "function"
        },
        "index": {
          "description": "Helvetica Oblique",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "helvetica_oblique",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica_oblique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbol\n\u003c/p\u003e\u003cp\u003eNote - Symbol is intentionally not supported for SVG by some \n renderers (Firefox). Chrome is fine, but the use of symbol \n should be still be avoided for web graphics.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "symbol",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#symbol",
          "type": "function"
        },
        "index": {
          "description": "Symbol Note Symbol is intentionally not supported for SVG by some renderers Firefox Chrome is fine but the use of symbol should be still be avoided for web graphics",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "symbol",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimes Bold\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_bold",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_bold",
          "type": "function"
        },
        "index": {
          "description": "Times Bold",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_bold",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimes Bold Italic\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_bold_italic",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_bold_italic",
          "type": "function"
        },
        "index": {
          "description": "Times Bold Italic",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_bold_italic",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_bold_italic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimes Italic\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_italic",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_italic",
          "type": "function"
        },
        "index": {
          "description": "Times Italic",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_italic",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_italic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimes-Roman\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_roman",
          "package": "wumpus-drawing",
          "signature": "FontDef",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_roman",
          "type": "function"
        },
        "index": {
          "description": "Times-Roman",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_roman",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_roman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFontFamily\u003c/a\u003e\u003c/code\u003e definition for Times-Roman.\n\u003c/p\u003e",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_roman_family",
          "package": "wumpus-drawing",
          "signature": "FontFamily",
          "source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_roman_family",
          "type": "function"
        },
        "index": {
          "description": "FontFamily definition for Times-Roman",
          "hierarchy": "Wumpus Drawing Text StandardFontDefs",
          "module": "Wumpus.Drawing.Text.StandardFontDefs",
          "name": "times_roman_family",
          "package": "wumpus-drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_roman_family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion number\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Wumpus.Drawing.VersionNumber",
          "name": "VersionNumber",
          "package": "wumpus-drawing",
          "source": "src/Wumpus-Drawing-VersionNumber.html",
          "type": "module"
        },
        "index": {
          "description": "Version number",
          "hierarchy": "Wumpus Drawing VersionNumber",
          "module": "Wumpus.Drawing.VersionNumber",
          "name": "VersionNumber",
          "package": "wumpus-drawing",
          "partial": "Version Number",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-VersionNumber.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion number\n\u003c/p\u003e\u003cpre\u003e (0,9,0)\n\u003c/pre\u003e",
          "module": "Wumpus.Drawing.VersionNumber",
          "name": "wumpus_drawing_version",
          "package": "wumpus-drawing",
          "signature": "(Int, Int, Int)",
          "source": "src/Wumpus-Drawing-VersionNumber.html#wumpus_drawing_version",
          "type": "function"
        },
        "index": {
          "description": "Version number",
          "hierarchy": "Wumpus Drawing VersionNumber",
          "module": "Wumpus.Drawing.VersionNumber",
          "name": "wumpus_drawing_version",
          "normalized": "(Int,Int,Int)",
          "package": "wumpus-drawing",
          "signature": "(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-VersionNumber.html#v:wumpus_drawing_version"
      }
    }
  ]
]