[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatype for cubic Bezier curve.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Basis.BezierCurve",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Basis-BezierCurve.html",
        "fct-type": "module",
        "title": "BezierCurve"
      },
      "index": {
        "description": "Datatype for cubic Bezier curve",
        "hierarchy": "Wumpus Drawing Basis BezierCurve",
        "module": "Wumpus.Drawing.Basis.BezierCurve",
        "name": "BezierCurve",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Bezier Curve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#t:BezierCurve",
      "description": {
        "fct-descr": "\u003cp\u003eA Strict cubic Bezier curve.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.BezierCurve",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Basis-BezierCurve.html#BezierCurve",
        "fct-type": "data",
        "title": "BezierCurve"
      },
      "index": {
        "description": "Strict cubic Bezier curve",
        "hierarchy": "Wumpus Drawing Basis BezierCurve",
        "module": "Wumpus.Drawing.Basis.BezierCurve",
        "name": "BezierCurve",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Bezier Curve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:BezierCurve",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.BezierCurve",
        "fct-package": "wumpus-drawing",
        "fct-signature": "BezierCurve !(Point2 u) !(Point2 u) !(Point2 u) !(Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Basis-BezierCurve.html#BezierCurve",
        "fct-type": "function",
        "title": "BezierCurve"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis BezierCurve",
        "module": "Wumpus.Drawing.Basis.BezierCurve",
        "name": "BezierCurve",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Bezier Curve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:bezierLength",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebezierLength\u003c/a\u003e\u003c/code\u003e : \u003ccode\u003e start_point * control_1 * control_2 * \n        end_point -\u003e Length \u003c/code\u003e \n\u003c/p\u003e\u003cp\u003eFind the length of a Bezier curve. The result is an \n approximation, with the \u003cem\u003etolerance\u003c/em\u003e is 0.1 of a point. This\n seems good enough for drawing (potentially the tolerance could \n be larger still). \n\u003c/p\u003e\u003cp\u003eThe result is found through repeated subdivision so the \n calculation is potentially costly.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.BezierCurve",
        "fct-package": "wumpus-drawing",
        "fct-signature": "BezierCurve u -\u003e u",
        "fct-source": "src/Wumpus-Drawing-Basis-BezierCurve.html#bezierLength",
        "fct-type": "function",
        "title": "bezierLength"
      },
      "index": {
        "description": "bezierLength start point control control end point Length Find the length of Bezier curve The result is an approximation with the tolerance is of point This seems good enough for drawing potentially the tolerance could be larger still The result is found through repeated subdivision so the calculation is potentially costly",
        "hierarchy": "Wumpus Drawing Basis BezierCurve",
        "module": "Wumpus.Drawing.Basis.BezierCurve",
        "name": "bezierLength",
        "normalized": "BezierCurve a-\u003ea",
        "package": "wumpus-drawing",
        "partial": "Length",
        "signature": "BezierCurve u-\u003eu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:subdivide",
      "description": {
        "fct-descr": "\u003cp\u003eCurve subdivision via de Casteljau's algorithm.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.BezierCurve",
        "fct-package": "wumpus-drawing",
        "fct-signature": "BezierCurve u -\u003e (BezierCurve u, BezierCurve u)",
        "fct-source": "src/Wumpus-Drawing-Basis-BezierCurve.html#subdivide",
        "fct-type": "function",
        "title": "subdivide"
      },
      "index": {
        "description": "Curve subdivision via de Casteljau algorithm",
        "hierarchy": "Wumpus Drawing Basis BezierCurve",
        "module": "Wumpus.Drawing.Basis.BezierCurve",
        "name": "subdivide",
        "normalized": "BezierCurve a-\u003e(BezierCurve a,BezierCurve a)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "BezierCurve u-\u003e(BezierCurve u,BezierCurve u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:subdividet",
      "description": {
        "fct-descr": "\u003cp\u003esubdivide with an affine weight along the line...\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.BezierCurve",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e BezierCurve u -\u003e (BezierCurve u, BezierCurve u)",
        "fct-source": "src/Wumpus-Drawing-Basis-BezierCurve.html#subdividet",
        "fct-type": "function",
        "title": "subdividet"
      },
      "index": {
        "description": "subdivide with an affine weight along the line",
        "hierarchy": "Wumpus Drawing Basis BezierCurve",
        "module": "Wumpus.Drawing.Basis.BezierCurve",
        "name": "subdividet",
        "normalized": "a-\u003eBezierCurve a-\u003e(BezierCurve a,BezierCurve a)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eBezierCurve u-\u003e(BezierCurve u,BezierCurve u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-BezierCurve.html#v:vbezierCurve",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.BezierCurve",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u -\u003e Vec2 u -\u003e Vec2 u -\u003e Point2 u -\u003e BezierCurve u",
        "fct-source": "src/Wumpus-Drawing-Basis-BezierCurve.html#vbezierCurve",
        "fct-type": "function",
        "title": "vbezierCurve"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis BezierCurve",
        "module": "Wumpus.Drawing.Basis.BezierCurve",
        "name": "vbezierCurve",
        "normalized": "Vec a-\u003eVec a-\u003eVec a-\u003ePoint a-\u003eBezierCurve a",
        "package": "wumpus-drawing",
        "partial": "Curve",
        "signature": "Vec u-\u003eVec u-\u003eVec u-\u003ePoint u-\u003eBezierCurve u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlternative to the \u003ccode\u003eDrawingPrimitives\u003c/code\u003e module in Wumpus-Basic.\n\u003c/p\u003e\u003cp\u003eThe drawing primitives here are either slightly higher level or\n less general (more quirky).\n\u003c/p\u003e\u003cp\u003eThis module is expected to be imported qualified - other modules\n (e.g. shapes and paths) are likely to export conflicting names.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - much of this module is probably obsolete \n (except wedge).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html",
        "fct-type": "module",
        "title": "DrawingPrimitives"
      },
      "index": {
        "description": "Alternative to the DrawingPrimitives module in Wumpus-Basic The drawing primitives here are either slightly higher level or less general more quirky This module is expected to be imported qualified other modules e.g shapes and paths are likely to export conflicting names WARNING much of this module is probably obsolete except wedge",
        "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
        "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "name": "DrawingPrimitives",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Drawing Primitives",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:blRectangle",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a rectangle, start point is bottom left.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DrawMode -\u003e u -\u003e u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#blRectangle",
        "fct-type": "function",
        "title": "blRectangle"
      },
      "index": {
        "description": "Draw rectangle start point is bottom left",
        "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
        "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "name": "blRectangle",
        "normalized": "DrawMode-\u003ea-\u003ea-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Rectangle",
        "signature": "DrawMode-\u003eu-\u003eu-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:ctrRectangle",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a rectangle, start point is bottom left.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DrawMode -\u003e u -\u003e u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#ctrRectangle",
        "fct-type": "function",
        "title": "ctrRectangle"
      },
      "index": {
        "description": "Draw rectangle start point is bottom left",
        "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
        "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "name": "ctrRectangle",
        "normalized": "DrawMode-\u003ea-\u003ea-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Rectangle",
        "signature": "DrawMode-\u003eu-\u003eu-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:horizontalLine",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a horizontal line.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#horizontalLine",
        "fct-type": "function",
        "title": "horizontalLine"
      },
      "index": {
        "description": "Draw horizontal line",
        "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
        "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "name": "horizontalLine",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Line",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:pivotLine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003epivotLine\u003c/code\u003e : \u003ccode\u003e left_length * right_length * incline -\u003e LocGraphic \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eDraw a \u003cem\u003epivot\u003c/em\u003e line. The start point is a pivot along the line, \n not the end. The left and right distances are the extension of\n the line from the pivot. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#pivotLine",
        "fct-type": "function",
        "title": "pivotLine"
      },
      "index": {
        "description": "pivotLine left length right length incline LocGraphic Draw pivot line The start point is pivot along the line not the end The left and right distances are the extension of the line from the pivot",
        "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
        "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "name": "pivotLine",
        "normalized": "a-\u003ea-\u003eRadian-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Line",
        "signature": "u-\u003eu-\u003eRadian-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:verticalLine",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a vertical line.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#verticalLine",
        "fct-type": "function",
        "title": "verticalLine"
      },
      "index": {
        "description": "Draw vertical line",
        "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
        "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "name": "verticalLine",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Line",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-DrawingPrimitives.html#v:wedge",
      "description": {
        "fct-descr": "\u003cp\u003ewedge : mode * radius * apex_angle\n\u003c/p\u003e\u003cp\u003eWedge is drawn at the apex.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DrawMode -\u003e u -\u003e Radian -\u003e LocThetaGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-DrawingPrimitives.html#wedge",
        "fct-type": "function",
        "title": "wedge"
      },
      "index": {
        "description": "wedge mode radius apex angle Wedge is drawn at the apex",
        "hierarchy": "Wumpus Drawing Basis DrawingPrimitives",
        "module": "Wumpus.Drawing.Basis.DrawingPrimitives",
        "name": "wedge",
        "normalized": "DrawMode-\u003ea-\u003eRadian-\u003eLocThetaGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "DrawMode-\u003eu-\u003eRadian-\u003eLocThetaGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Geometry.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMisc geometric operations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Geometry",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Basis-Geometry.html",
        "fct-type": "module",
        "title": "Geometry"
      },
      "index": {
        "description": "Misc geometric operations",
        "hierarchy": "Wumpus Drawing Basis Geometry",
        "module": "Wumpus.Drawing.Basis.Geometry",
        "name": "Geometry",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Geometry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Geometry.html#v:affineComb",
      "description": {
        "fct-descr": "\u003cp\u003eAffine combination...\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Geometry",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Point2 u -\u003e Point2 u -\u003e Point2 u",
        "fct-source": "src/Wumpus-Drawing-Basis-Geometry.html#affineComb",
        "fct-type": "function",
        "title": "affineComb"
      },
      "index": {
        "description": "Affine combination",
        "hierarchy": "Wumpus Drawing Basis Geometry",
        "module": "Wumpus.Drawing.Basis.Geometry",
        "name": "affineComb",
        "normalized": "a-\u003ePoint a-\u003ePoint a-\u003ePoint a",
        "package": "wumpus-drawing",
        "partial": "Comb",
        "signature": "u-\u003ePoint u-\u003ePoint u-\u003ePoint u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Geometry.html#v:midpoint",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emidpoint\u003c/a\u003e\u003c/code\u003e : \u003ccode\u003e start_point * end_point -\u003e Midpoint \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eMid-point on the line formed between the two supplied points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Geometry",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e Point2 u -\u003e Point2 u",
        "fct-source": "src/Wumpus-Drawing-Basis-Geometry.html#midpoint",
        "fct-type": "function",
        "title": "midpoint"
      },
      "index": {
        "description": "midpoint start point end point Midpoint Mid-point on the line formed between the two supplied points",
        "hierarchy": "Wumpus Drawing Basis Geometry",
        "module": "Wumpus.Drawing.Basis.Geometry",
        "name": "midpoint",
        "normalized": "Point a-\u003ePoint a-\u003ePoint a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Point u-\u003ePoint u-\u003ePoint u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html",
        "fct-type": "module",
        "title": "InclineTrails"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "InclineTrails",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Incline Trails",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_barb",
      "description": {
        "fct-descr": "\u003cp\u003eNote - vector represents midpoint of the baseline to the \n tip. Angle is the ang of the tip.\n\u003c/p\u003e\u003cp\u003eThis trail is primarily for drawing arrowheads. The resulting \n path is \u003cem\u003eopen\u003c/em\u003e. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Radian -\u003e Vec2 u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_barb",
        "fct-type": "function",
        "title": "incline_barb"
      },
      "index": {
        "description": "Note vector represents midpoint of the baseline to the tip Angle is the ang of the tip This trail is primarily for drawing arrowheads The resulting path is open",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "incline_barb",
        "normalized": "Radian-\u003eVec a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Radian-\u003eVec u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_chamf_rect",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_chamf_rect",
        "fct-type": "function",
        "title": "incline_chamf_rect"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "incline_chamf_rect",
        "normalized": "a-\u003eVec a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_circle",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_circle",
        "fct-type": "function",
        "title": "incline_circle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "incline_circle",
        "normalized": "Vec a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Vec u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_diamond",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_diamond",
        "fct-type": "function",
        "title": "incline_diamond"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "incline_diamond",
        "normalized": "a-\u003eVec a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_ellipse",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_ellipse",
        "fct-type": "function",
        "title": "incline_ellipse"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "incline_ellipse",
        "normalized": "a-\u003eVec a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_rect",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_rect",
        "fct-type": "function",
        "title": "incline_rect"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "incline_rect",
        "normalized": "a-\u003eVec a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_square",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_square",
        "fct-type": "function",
        "title": "incline_square"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "incline_square",
        "normalized": "Vec a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Vec u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_triangle",
      "description": {
        "fct-descr": "\u003cp\u003eNote - vector represents midpoint of the baseline to the \n tip. Angle is the ang of the tip.\n\u003c/p\u003e\u003cp\u003eThis trail is primarily for drawing arrowheads.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Radian -\u003e Vec2 u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_triangle",
        "fct-type": "function",
        "title": "incline_triangle"
      },
      "index": {
        "description": "Note vector represents midpoint of the baseline to the tip Angle is the ang of the tip This trail is primarily for drawing arrowheads",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "incline_triangle",
        "normalized": "Radian-\u003eVec a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Radian-\u003eVec u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:incline_tube",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ev1\u003c/code\u003e is the \u003cem\u003einterior\u003c/em\u003e vector.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#incline_tube",
        "fct-type": "function",
        "title": "incline_tube"
      },
      "index": {
        "description": "v1 is the interior vector",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "incline_tube",
        "normalized": "a-\u003eVec a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_diagh",
      "description": {
        "fct-descr": "\u003cp\u003eDiagonal-horizontal trail.\n\u003c/p\u003e\u003cpre\u003e    --@\n   /\n  o\n\u003c/pre\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_diagh",
        "fct-type": "function",
        "title": "trail_diagh"
      },
      "index": {
        "description": "Diagonal-horizontal trail",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_diagh",
        "normalized": "a-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_diagv",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_diagv",
        "fct-type": "function",
        "title": "trail_diagv"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_diagv",
        "normalized": "a-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_hdiag",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_hdiag",
        "fct-type": "function",
        "title": "trail_hdiag"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_hdiag",
        "normalized": "a-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_hdiagh",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal-diagonal-horizontal trail.\n\u003c/p\u003e\u003cpre\u003e      --@\n     /\n  o--\n\u003c/pre\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_hdiagh",
        "fct-type": "function",
        "title": "trail_hdiagh"
      },
      "index": {
        "description": "Horizontal-diagonal-horizontal trail",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_hdiagh",
        "normalized": "a-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_hright",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_hright",
        "fct-type": "function",
        "title": "trail_hright"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_hright",
        "normalized": "Vec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Vec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_hrr",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_hrr",
        "fct-type": "function",
        "title": "trail_hrr"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_hrr",
        "normalized": "a-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_ortho_hbar",
      "description": {
        "fct-descr": "\u003cp\u003eHeight is minimum leg height. Ortho bar is horizontal.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_ortho_hbar",
        "fct-type": "function",
        "title": "trail_ortho_hbar"
      },
      "index": {
        "description": "Height is minimum leg height Ortho bar is horizontal",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_ortho_hbar",
        "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_ortho_vbar",
      "description": {
        "fct-descr": "\u003cp\u003eWidth is minimum leg width. Ortho bar is vertical.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_ortho_vbar",
        "fct-type": "function",
        "title": "trail_ortho_vbar"
      },
      "index": {
        "description": "Width is minimum leg width Ortho bar is vertical",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_ortho_vbar",
        "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_perp_bar",
      "description": {
        "fct-descr": "\u003cp\u003eUniform leg size.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_perp_bar",
        "fct-type": "function",
        "title": "trail_perp_bar"
      },
      "index": {
        "description": "Uniform leg size",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_perp_bar",
        "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_perp_bar2",
      "description": {
        "fct-descr": "\u003cp\u003eBar connector - independent leg size, legs perpendicular.\n\u003c/p\u003e\u003cpre\u003e  o    @ \n  |    |\n  '----'  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003ebelow\u003c/em\u003e the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_perp_bar2",
        "fct-type": "function",
        "title": "trail_perp_bar2"
      },
      "index": {
        "description": "Bar connector independent leg size legs perpendicular The bar is drawn below the points",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_perp_bar2",
        "normalized": "ClockDirection-\u003ea-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "ClockDirection-\u003eu-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_rect_loop",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_rect_loop",
        "fct-type": "function",
        "title": "trail_rect_loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_rect_loop",
        "normalized": "ClockDirection-\u003ea-\u003ea-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "ClockDirection-\u003eu-\u003eu-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_rrh",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_rrh",
        "fct-type": "function",
        "title": "trail_rrh"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_rrh",
        "normalized": "a-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_rrv",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_rrv",
        "fct-type": "function",
        "title": "trail_rrv"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_rrv",
        "normalized": "a-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vdiag",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vdiag",
        "fct-type": "function",
        "title": "trail_vdiag"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_vdiag",
        "normalized": "a-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vdiagv",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vdiagv",
        "fct-type": "function",
        "title": "trail_vdiagv"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_vdiagv",
        "normalized": "a-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vflam",
      "description": {
        "fct-descr": "\u003cp\u003eIndependent leg size.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vflam",
        "fct-type": "function",
        "title": "trail_vflam"
      },
      "index": {
        "description": "Independent leg size",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_vflam",
        "normalized": "ClockDirection-\u003ea-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "ClockDirection-\u003eu-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vright",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vright",
        "fct-type": "function",
        "title": "trail_vright"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_vright",
        "normalized": "Vec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Vec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:trail_vrr",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#trail_vrr",
        "fct-type": "function",
        "title": "trail_vrr"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "trail_vrr",
        "normalized": "a-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vbowCurve",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebowCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vbowCurve",
        "fct-type": "function",
        "title": "vbowCurve"
      },
      "index": {
        "description": "bowCurve formulated with base vector rather than base-width and angle of inclination",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "vbowCurve",
        "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "Curve",
        "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vrectCurve",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erectCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vrectCurve",
        "fct-type": "function",
        "title": "vrectCurve"
      },
      "index": {
        "description": "rectCurve formulated with base vector rather than base-width and angle of inclination",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "vrectCurve",
        "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "Curve",
        "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vtrapCurve",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etrapCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e Radian -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vtrapCurve",
        "fct-type": "function",
        "title": "vtrapCurve"
      },
      "index": {
        "description": "trapCurve formulated with base vector rather than base-width and angle of inclination",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "vtrapCurve",
        "normalized": "ClockDirection-\u003ea-\u003eRadian-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "Curve",
        "signature": "ClockDirection-\u003eu-\u003eRadian-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vtriCurve",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etriCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vtriCurve",
        "fct-type": "function",
        "title": "vtriCurve"
      },
      "index": {
        "description": "triCurve formulated with base vector rather than base-width and angle of inclination",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "vtriCurve",
        "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "Curve",
        "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-InclineTrails.html#v:vwedgeCurve",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewedgeCurve\u003c/a\u003e\u003c/code\u003e formulated with a \u003cem\u003ebase vector\u003c/em\u003e rather than \n base-width and angle of inclination.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.InclineTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ClockDirection -\u003e u -\u003e Vec2 u -\u003e CatTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-InclineTrails.html#vwedgeCurve",
        "fct-type": "function",
        "title": "vwedgeCurve"
      },
      "index": {
        "description": "wedgeCurve formulated with base vector rather than base-width and angle of inclination",
        "hierarchy": "Wumpus Drawing Basis InclineTrails",
        "module": "Wumpus.Drawing.Basis.InclineTrails",
        "name": "vwedgeCurve",
        "normalized": "ClockDirection-\u003ea-\u003eVec a-\u003eCatTrail a",
        "package": "wumpus-drawing",
        "partial": "Curve",
        "signature": "ClockDirection-\u003eu-\u003eVec u-\u003eCatTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html",
        "fct-type": "module",
        "title": "ShapeTrails"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "ShapeTrails",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Shape Trails",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:circle_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#circle_trail",
        "fct-type": "function",
        "title": "circle_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "circle_trail",
        "normalized": "a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:diamond_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#diamond_trail",
        "fct-type": "function",
        "title": "diamond_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "diamond_trail",
        "normalized": "a-\u003ea-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:ellipse_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#ellipse_trail",
        "fct-type": "function",
        "title": "ellipse_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "ellipse_trail",
        "normalized": "a-\u003ea-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:isosceles_triangle_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#isosceles_triangle_trail",
        "fct-type": "function",
        "title": "isosceles_triangle_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "isosceles_triangle_trail",
        "normalized": "a-\u003ea-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:parallelogram_trail",
      "description": {
        "fct-descr": "\u003cp\u003eNote - bottom left angle must be smaller than 180deg, \n otherwise a runtime error is thrown.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#parallelogram_trail",
        "fct-type": "function",
        "title": "parallelogram_trail"
      },
      "index": {
        "description": "Note bottom left angle must be smaller than deg otherwise runtime error is thrown",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "parallelogram_trail",
        "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rcircle_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rcircle_trail",
        "fct-type": "function",
        "title": "rcircle_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "rcircle_trail",
        "normalized": "a-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rdiamond_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rdiamond_trail",
        "fct-type": "function",
        "title": "rdiamond_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "rdiamond_trail",
        "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rectangle_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rectangle_trail",
        "fct-type": "function",
        "title": "rectangle_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "rectangle_trail",
        "normalized": "a-\u003ea-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rellipse_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rellipse_trail",
        "fct-type": "function",
        "title": "rellipse_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "rellipse_trail",
        "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:risosceles_triangle_trail",
      "description": {
        "fct-descr": "\u003cp\u003eDrawn at the centroid (1/3 * h).\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#risosceles_triangle_trail",
        "fct-type": "function",
        "title": "risosceles_triangle_trail"
      },
      "index": {
        "description": "Drawn at the centroid",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "risosceles_triangle_trail",
        "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rparallelogram_trail",
      "description": {
        "fct-descr": "\u003cp\u003eNote - bottom left angle must be smaller than 180deg, \n otherwise a runtime error is thrown.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rparallelogram_trail",
        "fct-type": "function",
        "title": "rparallelogram_trail"
      },
      "index": {
        "description": "Note bottom left angle must be smaller than deg otherwise runtime error is thrown",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "rparallelogram_trail",
        "normalized": "a-\u003ea-\u003eRadian-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rrectangle_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rrectangle_trail",
        "fct-type": "function",
        "title": "rrectangle_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "rrectangle_trail",
        "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rsemicircle_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rsemicircle_trail",
        "fct-type": "function",
        "title": "rsemicircle_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "rsemicircle_trail",
        "normalized": "a-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rsemiellipse_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rsemiellipse_trail",
        "fct-type": "function",
        "title": "rsemiellipse_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "rsemiellipse_trail",
        "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:rtrapezium_trail",
      "description": {
        "fct-descr": "\u003cp\u003eNote - bottom left angle must be smaller than 180deg, \n otherwise a runtime error is thrown.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#rtrapezium_trail",
        "fct-type": "function",
        "title": "rtrapezium_trail"
      },
      "index": {
        "description": "Note bottom left angle must be smaller than deg otherwise runtime error is thrown",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "rtrapezium_trail",
        "normalized": "a-\u003ea-\u003eRadian-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:semicircle_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#semicircle_trail",
        "fct-type": "function",
        "title": "semicircle_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "semicircle_trail",
        "normalized": "a-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:semiellipse_trail",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#semiellipse_trail",
        "fct-type": "function",
        "title": "semiellipse_trail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "semiellipse_trail",
        "normalized": "a-\u003ea-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-ShapeTrails.html#v:trapezium_trail",
      "description": {
        "fct-descr": "\u003cp\u003eNote - bottom left angle must be smaller than 180deg, \n otherwise a runtime error is thrown.\n\u003c/p\u003e\u003cp\u003eAlso, no checking is perfomed on the relation between height\n and bottom_left ang. Out of range values will draw \"twisted\"\n trapezoids.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.ShapeTrails",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Basis-ShapeTrails.html#trapezium_trail",
        "fct-type": "function",
        "title": "trapezium_trail"
      },
      "index": {
        "description": "Note bottom left angle must be smaller than deg otherwise runtime error is thrown Also no checking is perfomed on the relation between height and bottom left ang Out of range values will draw twisted trapezoids",
        "hierarchy": "Wumpus Drawing Basis ShapeTrails",
        "module": "Wumpus.Drawing.Basis.ShapeTrails",
        "name": "trapezium_trail",
        "normalized": "a-\u003ea-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSymbols - many symbols expected to be re-defined as Dots or\n character size PosObjects for DocText.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - naming conventention is to be determined...\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html",
        "fct-type": "module",
        "title": "Symbols"
      },
      "index": {
        "description": "Symbols many symbols expected to be re-defined as Dots or character size PosObjects for DocText WARNING naming conventention is to be determined",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "Symbols",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Symbols",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:dbl_hbar",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#dbl_hbar",
        "fct-type": "function",
        "title": "dbl_hbar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "dbl_hbar",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:dbl_vbar",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#dbl_vbar",
        "fct-type": "function",
        "title": "dbl_vbar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "dbl_vbar",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:empty_box",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#empty_box",
        "fct-type": "function",
        "title": "empty_box"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "empty_box",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fcircle",
      "description": {
        "fct-descr": "\u003cp\u003eFilled circle.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fcircle",
        "fct-type": "function",
        "title": "fcircle"
      },
      "index": {
        "description": "Filled circle Start pos center",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fcircle",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fleft_slice",
      "description": {
        "fct-descr": "\u003cp\u003eFilled left slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fleft_slice",
        "fct-type": "function",
        "title": "fleft_slice"
      },
      "index": {
        "description": "Filled left slice wedge Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fleft_slice",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fleft_triangle",
      "description": {
        "fct-descr": "\u003cp\u003eFilled left triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fleft_triangle",
        "fct-type": "function",
        "title": "fleft_triangle"
      },
      "index": {
        "description": "Filled left triangle Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fleft_triangle",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fright_slice",
      "description": {
        "fct-descr": "\u003cp\u003eFilled right slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fright_slice",
        "fct-type": "function",
        "title": "fright_slice"
      },
      "index": {
        "description": "Filled right slice wedge Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fright_slice",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fright_triangle",
      "description": {
        "fct-descr": "\u003cp\u003eFilled right triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fright_triangle",
        "fct-type": "function",
        "title": "fright_triangle"
      },
      "index": {
        "description": "Filled right triangle Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fright_triangle",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fscircle",
      "description": {
        "fct-descr": "\u003cp\u003eFilled-stroked circle.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fscircle",
        "fct-type": "function",
        "title": "fscircle"
      },
      "index": {
        "description": "Filled-stroked circle Start pos center",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fscircle",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsleft_slice",
      "description": {
        "fct-descr": "\u003cp\u003eFilled-stroked left slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fsleft_slice",
        "fct-type": "function",
        "title": "fsleft_slice"
      },
      "index": {
        "description": "Filled-stroked left slice wedge Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fsleft_slice",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsleft_triangle",
      "description": {
        "fct-descr": "\u003cp\u003eFilled-stroked left triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fsleft_triangle",
        "fct-type": "function",
        "title": "fsleft_triangle"
      },
      "index": {
        "description": "Filled-stroked left triangle Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fsleft_triangle",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsquare",
      "description": {
        "fct-descr": "\u003cp\u003eFilled square.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fsquare",
        "fct-type": "function",
        "title": "fsquare"
      },
      "index": {
        "description": "Filled square Start pos center",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fsquare",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsright_slice",
      "description": {
        "fct-descr": "\u003cp\u003eFilled-stroked right slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fsright_slice",
        "fct-type": "function",
        "title": "fsright_slice"
      },
      "index": {
        "description": "Filled-stroked right slice wedge Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fsright_slice",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fsright_triangle",
      "description": {
        "fct-descr": "\u003cp\u003eFilled-stroked right triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fsright_triangle",
        "fct-type": "function",
        "title": "fsright_triangle"
      },
      "index": {
        "description": "Filled-stroked right triangle Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fsright_triangle",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:fssquare",
      "description": {
        "fct-descr": "\u003cp\u003eFilled-stroked square.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#fssquare",
        "fct-type": "function",
        "title": "fssquare"
      },
      "index": {
        "description": "Filled-stroked square Start pos center",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "fssquare",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:hbar",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#hbar",
        "fct-type": "function",
        "title": "hbar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "hbar",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ochar",
      "description": {
        "fct-descr": "\u003cp\u003eNote this looks horrible for chars with descenders.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "EscapedChar -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#ochar",
        "fct-type": "function",
        "title": "ochar"
      },
      "index": {
        "description": "Note this looks horrible for chars with descenders",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "ochar",
        "normalized": "EscapedChar-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "EscapedChar-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ocharDescender",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "EscapedChar -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#ocharDescender",
        "fct-type": "function",
        "title": "ocharDescender"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "ocharDescender",
        "normalized": "EscapedChar-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Descender",
        "signature": "EscapedChar-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ocharUpright",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "EscapedChar -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#ocharUpright",
        "fct-type": "function",
        "title": "ocharUpright"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "ocharUpright",
        "normalized": "EscapedChar-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Upright",
        "signature": "EscapedChar-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ocurrency",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#ocurrency",
        "fct-type": "function",
        "title": "ocurrency"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "ocurrency",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:scircle",
      "description": {
        "fct-descr": "\u003cp\u003eStroked circle.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#scircle",
        "fct-type": "function",
        "title": "scircle"
      },
      "index": {
        "description": "Stroked circle Start pos center",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "scircle",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:sleft_slice",
      "description": {
        "fct-descr": "\u003cp\u003eStroked left slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#sleft_slice",
        "fct-type": "function",
        "title": "sleft_slice"
      },
      "index": {
        "description": "Stroked left slice wedge Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "sleft_slice",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:sleft_triangle",
      "description": {
        "fct-descr": "\u003cp\u003eStroked left triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#sleft_triangle",
        "fct-type": "function",
        "title": "sleft_triangle"
      },
      "index": {
        "description": "Stroked left triangle Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "sleft_triangle",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:sright_slice",
      "description": {
        "fct-descr": "\u003cp\u003eStroked right slice (wedge).\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#sright_slice",
        "fct-type": "function",
        "title": "sright_slice"
      },
      "index": {
        "description": "Stroked right slice wedge Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "sright_slice",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:sright_triangle",
      "description": {
        "fct-descr": "\u003cp\u003eStroked right triangle.\n\u003c/p\u003e\u003cp\u003eStart pos - ....\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#sright_triangle",
        "fct-type": "function",
        "title": "sright_triangle"
      },
      "index": {
        "description": "Stroked right triangle Start pos",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "sright_triangle",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:ssquare",
      "description": {
        "fct-descr": "\u003cp\u003eStroked square.\n\u003c/p\u003e\u003cp\u003eStart pos - center.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#ssquare",
        "fct-type": "function",
        "title": "ssquare"
      },
      "index": {
        "description": "Stroked square Start pos center",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "ssquare",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Basis-Symbols.html#v:vbar",
      "description": {
        "fct-module": "Wumpus.Drawing.Basis.Symbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Basis-Symbols.html#vbar",
        "fct-type": "function",
        "title": "vbar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Basis Symbols",
        "module": "Wumpus.Drawing.Basis.Symbols",
        "name": "vbar",
        "normalized": "a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe SVG 'named colours', as rgb [0,1] values \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html",
        "fct-type": "module",
        "title": "SVGColours"
      },
      "index": {
        "description": "The SVG named colours as rgb values",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "SVGColours",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "SVGColours",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:alice_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#alice_blue",
        "fct-type": "function",
        "title": "alice_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "alice_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:antique_white",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#antique_white",
        "fct-type": "function",
        "title": "antique_white"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "antique_white",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:aqua",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#aqua",
        "fct-type": "function",
        "title": "aqua"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "aqua",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:aquamarine",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#aquamarine",
        "fct-type": "function",
        "title": "aquamarine"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "aquamarine",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:azure",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#azure",
        "fct-type": "function",
        "title": "azure"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "azure",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:beige",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#beige",
        "fct-type": "function",
        "title": "beige"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "beige",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:bisque",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#bisque",
        "fct-type": "function",
        "title": "bisque"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "bisque",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:black",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#black",
        "fct-type": "function",
        "title": "black"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "black",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:blanched_almond",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#blanched_almond",
        "fct-type": "function",
        "title": "blanched_almond"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "blanched_almond",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#blue",
        "fct-type": "function",
        "title": "blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:blue_violet",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#blue_violet",
        "fct-type": "function",
        "title": "blue_violet"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "blue_violet",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:brown",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#brown",
        "fct-type": "function",
        "title": "brown"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "brown",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:burlywood",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#burlywood",
        "fct-type": "function",
        "title": "burlywood"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "burlywood",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:cadet_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#cadet_blue",
        "fct-type": "function",
        "title": "cadet_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "cadet_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:chartreuse",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#chartreuse",
        "fct-type": "function",
        "title": "chartreuse"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "chartreuse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:chocolate",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#chocolate",
        "fct-type": "function",
        "title": "chocolate"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "chocolate",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:coral",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#coral",
        "fct-type": "function",
        "title": "coral"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "coral",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:cornflower_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#cornflower_blue",
        "fct-type": "function",
        "title": "cornflower_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "cornflower_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:cornsilk",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#cornsilk",
        "fct-type": "function",
        "title": "cornsilk"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "cornsilk",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:crimson",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#crimson",
        "fct-type": "function",
        "title": "crimson"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "crimson",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:cyan",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#cyan",
        "fct-type": "function",
        "title": "cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "cyan",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_blue",
        "fct-type": "function",
        "title": "dark_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_cyan",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_cyan",
        "fct-type": "function",
        "title": "dark_cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_cyan",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_goldenrod",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_goldenrod",
        "fct-type": "function",
        "title": "dark_goldenrod"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_goldenrod",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_gray",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_gray",
        "fct-type": "function",
        "title": "dark_gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_gray",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_green",
        "fct-type": "function",
        "title": "dark_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_grey",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_grey",
        "fct-type": "function",
        "title": "dark_grey"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_grey",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_khaki",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_khaki",
        "fct-type": "function",
        "title": "dark_khaki"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_khaki",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_magenta",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_magenta",
        "fct-type": "function",
        "title": "dark_magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_magenta",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_olive_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_olive_green",
        "fct-type": "function",
        "title": "dark_olive_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_olive_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_orange",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_orange",
        "fct-type": "function",
        "title": "dark_orange"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_orange",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_orchid",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_orchid",
        "fct-type": "function",
        "title": "dark_orchid"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_orchid",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_red",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_red",
        "fct-type": "function",
        "title": "dark_red"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_red",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_salmon",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_salmon",
        "fct-type": "function",
        "title": "dark_salmon"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_salmon",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_sea_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_sea_green",
        "fct-type": "function",
        "title": "dark_sea_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_sea_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_slate_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_slate_blue",
        "fct-type": "function",
        "title": "dark_slate_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_slate_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_slate_gray",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_slate_gray",
        "fct-type": "function",
        "title": "dark_slate_gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_slate_gray",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_slate_grey",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_slate_grey",
        "fct-type": "function",
        "title": "dark_slate_grey"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_slate_grey",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_turquoise",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_turquoise",
        "fct-type": "function",
        "title": "dark_turquoise"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_turquoise",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dark_violet",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dark_violet",
        "fct-type": "function",
        "title": "dark_violet"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dark_violet",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:deep_pink",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#deep_pink",
        "fct-type": "function",
        "title": "deep_pink"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "deep_pink",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:deep_sky_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#deep_sky_blue",
        "fct-type": "function",
        "title": "deep_sky_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "deep_sky_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dim_gray",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dim_gray",
        "fct-type": "function",
        "title": "dim_gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dim_gray",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dim_grey",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dim_grey",
        "fct-type": "function",
        "title": "dim_grey"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dim_grey",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:dodger_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#dodger_blue",
        "fct-type": "function",
        "title": "dodger_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "dodger_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:firebrick",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#firebrick",
        "fct-type": "function",
        "title": "firebrick"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "firebrick",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:floral_white",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#floral_white",
        "fct-type": "function",
        "title": "floral_white"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "floral_white",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:forest_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#forest_green",
        "fct-type": "function",
        "title": "forest_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "forest_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:fuchsia",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#fuchsia",
        "fct-type": "function",
        "title": "fuchsia"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "fuchsia",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:gainsboro",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#gainsboro",
        "fct-type": "function",
        "title": "gainsboro"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "gainsboro",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:ghost_white",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#ghost_white",
        "fct-type": "function",
        "title": "ghost_white"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "ghost_white",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:gold",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#gold",
        "fct-type": "function",
        "title": "gold"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "gold",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:goldenrod",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#goldenrod",
        "fct-type": "function",
        "title": "goldenrod"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "goldenrod",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:gray",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#gray",
        "fct-type": "function",
        "title": "gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "gray",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#green",
        "fct-type": "function",
        "title": "green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:green_yellow",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#green_yellow",
        "fct-type": "function",
        "title": "green_yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "green_yellow",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:grey",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#grey",
        "fct-type": "function",
        "title": "grey"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "grey",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:honeydew",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#honeydew",
        "fct-type": "function",
        "title": "honeydew"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "honeydew",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:hot_pink",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#hot_pink",
        "fct-type": "function",
        "title": "hot_pink"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "hot_pink",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:indian_red",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#indian_red",
        "fct-type": "function",
        "title": "indian_red"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "indian_red",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:indigo",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#indigo",
        "fct-type": "function",
        "title": "indigo"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "indigo",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:ivory",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#ivory",
        "fct-type": "function",
        "title": "ivory"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "ivory",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:khaki",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#khaki",
        "fct-type": "function",
        "title": "khaki"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "khaki",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lavender",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#lavender",
        "fct-type": "function",
        "title": "lavender"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "lavender",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lavender_blush",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#lavender_blush",
        "fct-type": "function",
        "title": "lavender_blush"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "lavender_blush",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lawn_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#lawn_green",
        "fct-type": "function",
        "title": "lawn_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "lawn_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lemon_chiffon",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#lemon_chiffon",
        "fct-type": "function",
        "title": "lemon_chiffon"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "lemon_chiffon",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_blue",
        "fct-type": "function",
        "title": "light_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_coral",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_coral",
        "fct-type": "function",
        "title": "light_coral"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_coral",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_cyan",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_cyan",
        "fct-type": "function",
        "title": "light_cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_cyan",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_goldenrod_yellow",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_goldenrod_yellow",
        "fct-type": "function",
        "title": "light_goldenrod_yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_goldenrod_yellow",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_gray",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_gray",
        "fct-type": "function",
        "title": "light_gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_gray",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_green",
        "fct-type": "function",
        "title": "light_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_grey",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_grey",
        "fct-type": "function",
        "title": "light_grey"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_grey",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_pink",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_pink",
        "fct-type": "function",
        "title": "light_pink"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_pink",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_salmon",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_salmon",
        "fct-type": "function",
        "title": "light_salmon"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_salmon",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_sea_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_sea_green",
        "fct-type": "function",
        "title": "light_sea_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_sea_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_sky_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_sky_blue",
        "fct-type": "function",
        "title": "light_sky_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_sky_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_slate_gray",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_slate_gray",
        "fct-type": "function",
        "title": "light_slate_gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_slate_gray",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_slate_grey",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_slate_grey",
        "fct-type": "function",
        "title": "light_slate_grey"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_slate_grey",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_steel_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_steel_blue",
        "fct-type": "function",
        "title": "light_steel_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_steel_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:light_yellow",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#light_yellow",
        "fct-type": "function",
        "title": "light_yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "light_yellow",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lime",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#lime",
        "fct-type": "function",
        "title": "lime"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "lime",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:lime_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#lime_green",
        "fct-type": "function",
        "title": "lime_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "lime_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:linen",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#linen",
        "fct-type": "function",
        "title": "linen"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "linen",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:magenta",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#magenta",
        "fct-type": "function",
        "title": "magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "magenta",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:maroon",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#maroon",
        "fct-type": "function",
        "title": "maroon"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "maroon",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_aquamarine",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_aquamarine",
        "fct-type": "function",
        "title": "medium_aquamarine"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "medium_aquamarine",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_blue",
        "fct-type": "function",
        "title": "medium_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "medium_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_orchid",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_orchid",
        "fct-type": "function",
        "title": "medium_orchid"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "medium_orchid",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_purple",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_purple",
        "fct-type": "function",
        "title": "medium_purple"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "medium_purple",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_sea_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_sea_green",
        "fct-type": "function",
        "title": "medium_sea_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "medium_sea_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_slate_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_slate_blue",
        "fct-type": "function",
        "title": "medium_slate_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "medium_slate_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_spring_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_spring_green",
        "fct-type": "function",
        "title": "medium_spring_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "medium_spring_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_turquoise",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_turquoise",
        "fct-type": "function",
        "title": "medium_turquoise"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "medium_turquoise",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:medium_violet_red",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#medium_violet_red",
        "fct-type": "function",
        "title": "medium_violet_red"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "medium_violet_red",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:midnight_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#midnight_blue",
        "fct-type": "function",
        "title": "midnight_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "midnight_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:mintcream",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#mintcream",
        "fct-type": "function",
        "title": "mintcream"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "mintcream",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:mistyrose",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#mistyrose",
        "fct-type": "function",
        "title": "mistyrose"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "mistyrose",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:moccasin",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#moccasin",
        "fct-type": "function",
        "title": "moccasin"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "moccasin",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:navajo_white",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#navajo_white",
        "fct-type": "function",
        "title": "navajo_white"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "navajo_white",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:navy",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#navy",
        "fct-type": "function",
        "title": "navy"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "navy",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:old_lace",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#old_lace",
        "fct-type": "function",
        "title": "old_lace"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "old_lace",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:olive",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#olive",
        "fct-type": "function",
        "title": "olive"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "olive",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:olive_drab",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#olive_drab",
        "fct-type": "function",
        "title": "olive_drab"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "olive_drab",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:orange",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#orange",
        "fct-type": "function",
        "title": "orange"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "orange",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:orange_red",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#orange_red",
        "fct-type": "function",
        "title": "orange_red"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "orange_red",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:orchid",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#orchid",
        "fct-type": "function",
        "title": "orchid"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "orchid",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pale_goldenrod",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#pale_goldenrod",
        "fct-type": "function",
        "title": "pale_goldenrod"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "pale_goldenrod",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pale_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#pale_green",
        "fct-type": "function",
        "title": "pale_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "pale_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pale_turquoise",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#pale_turquoise",
        "fct-type": "function",
        "title": "pale_turquoise"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "pale_turquoise",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pale_violet_red",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#pale_violet_red",
        "fct-type": "function",
        "title": "pale_violet_red"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "pale_violet_red",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:papaya_whip",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#papaya_whip",
        "fct-type": "function",
        "title": "papaya_whip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "papaya_whip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:peach_puff",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#peach_puff",
        "fct-type": "function",
        "title": "peach_puff"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "peach_puff",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:peru",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#peru",
        "fct-type": "function",
        "title": "peru"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "peru",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:pink",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#pink",
        "fct-type": "function",
        "title": "pink"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "pink",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:plum",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#plum",
        "fct-type": "function",
        "title": "plum"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "plum",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:powder_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#powder_blue",
        "fct-type": "function",
        "title": "powder_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "powder_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:purple",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#purple",
        "fct-type": "function",
        "title": "purple"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "purple",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:red",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#red",
        "fct-type": "function",
        "title": "red"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "red",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:rosy_brown",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#rosy_brown",
        "fct-type": "function",
        "title": "rosy_brown"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "rosy_brown",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:royal_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#royal_blue",
        "fct-type": "function",
        "title": "royal_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "royal_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:saddle_brown",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#saddle_brown",
        "fct-type": "function",
        "title": "saddle_brown"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "saddle_brown",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:salmon",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#salmon",
        "fct-type": "function",
        "title": "salmon"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "salmon",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:sandy_brown",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#sandy_brown",
        "fct-type": "function",
        "title": "sandy_brown"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "sandy_brown",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:sea_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#sea_green",
        "fct-type": "function",
        "title": "sea_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "sea_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:seashell",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#seashell",
        "fct-type": "function",
        "title": "seashell"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "seashell",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:sienna",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#sienna",
        "fct-type": "function",
        "title": "sienna"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "sienna",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:silver",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#silver",
        "fct-type": "function",
        "title": "silver"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "silver",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:sky_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#sky_blue",
        "fct-type": "function",
        "title": "sky_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "sky_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:slate_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#slate_blue",
        "fct-type": "function",
        "title": "slate_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "slate_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:slate_gray",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#slate_gray",
        "fct-type": "function",
        "title": "slate_gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "slate_gray",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:slate_grey",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#slate_grey",
        "fct-type": "function",
        "title": "slate_grey"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "slate_grey",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:snow",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#snow",
        "fct-type": "function",
        "title": "snow"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "snow",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:spring_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#spring_green",
        "fct-type": "function",
        "title": "spring_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "spring_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:steel_blue",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#steel_blue",
        "fct-type": "function",
        "title": "steel_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "steel_blue",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:tan",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#tan",
        "fct-type": "function",
        "title": "tan"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "tan",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:teal",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#teal",
        "fct-type": "function",
        "title": "teal"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "teal",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:thistle",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#thistle",
        "fct-type": "function",
        "title": "thistle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "thistle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:tomato",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#tomato",
        "fct-type": "function",
        "title": "tomato"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "tomato",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:turquoise",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#turquoise",
        "fct-type": "function",
        "title": "turquoise"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "turquoise",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:violet",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#violet",
        "fct-type": "function",
        "title": "violet"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "violet",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:wheat",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#wheat",
        "fct-type": "function",
        "title": "wheat"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "wheat",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:white",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#white",
        "fct-type": "function",
        "title": "white"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "white",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:whitesmoke",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#whitesmoke",
        "fct-type": "function",
        "title": "whitesmoke"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "whitesmoke",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:yellow",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#yellow",
        "fct-type": "function",
        "title": "yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "yellow",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-SVGColours.html#v:yellow_green",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.SVGColours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-SVGColours.html#yellow_green",
        "fct-type": "function",
        "title": "yellow_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour SVGColours",
        "module": "Wumpus.Drawing.Colour.SVGColours",
        "name": "yellow_green",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe X11 'named colours', as rgb [0,1] values \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html",
        "fct-type": "module",
        "title": "X11Colours"
      },
      "index": {
        "description": "The X11 named colours as rgb values",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "X11Colours",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Colours",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:antique_white1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#antique_white1",
        "fct-type": "function",
        "title": "antique_white1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "antique_white1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:antique_white2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#antique_white2",
        "fct-type": "function",
        "title": "antique_white2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "antique_white2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:antique_white3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#antique_white3",
        "fct-type": "function",
        "title": "antique_white3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "antique_white3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:antique_white4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#antique_white4",
        "fct-type": "function",
        "title": "antique_white4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "antique_white4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:aquamarine1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#aquamarine1",
        "fct-type": "function",
        "title": "aquamarine1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "aquamarine1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:aquamarine2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#aquamarine2",
        "fct-type": "function",
        "title": "aquamarine2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "aquamarine2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:aquamarine3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#aquamarine3",
        "fct-type": "function",
        "title": "aquamarine3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "aquamarine3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:aquamarine4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#aquamarine4",
        "fct-type": "function",
        "title": "aquamarine4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "aquamarine4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:azure1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#azure1",
        "fct-type": "function",
        "title": "azure1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "azure1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:azure2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#azure2",
        "fct-type": "function",
        "title": "azure2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "azure2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:azure3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#azure3",
        "fct-type": "function",
        "title": "azure3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "azure3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:azure4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#azure4",
        "fct-type": "function",
        "title": "azure4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "azure4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:bisque1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#bisque1",
        "fct-type": "function",
        "title": "bisque1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "bisque1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:bisque2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#bisque2",
        "fct-type": "function",
        "title": "bisque2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "bisque2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:bisque3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#bisque3",
        "fct-type": "function",
        "title": "bisque3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "bisque3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:bisque4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#bisque4",
        "fct-type": "function",
        "title": "bisque4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "bisque4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#blue1",
        "fct-type": "function",
        "title": "blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#blue2",
        "fct-type": "function",
        "title": "blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#blue3",
        "fct-type": "function",
        "title": "blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#blue4",
        "fct-type": "function",
        "title": "blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:brown1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#brown1",
        "fct-type": "function",
        "title": "brown1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "brown1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:brown2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#brown2",
        "fct-type": "function",
        "title": "brown2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "brown2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:brown3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#brown3",
        "fct-type": "function",
        "title": "brown3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "brown3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:brown4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#brown4",
        "fct-type": "function",
        "title": "brown4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "brown4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:burlywood1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#burlywood1",
        "fct-type": "function",
        "title": "burlywood1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "burlywood1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:burlywood2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#burlywood2",
        "fct-type": "function",
        "title": "burlywood2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "burlywood2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:burlywood3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#burlywood3",
        "fct-type": "function",
        "title": "burlywood3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "burlywood3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:burlywood4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#burlywood4",
        "fct-type": "function",
        "title": "burlywood4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "burlywood4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cadet_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cadet_blue1",
        "fct-type": "function",
        "title": "cadet_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cadet_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cadet_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cadet_blue2",
        "fct-type": "function",
        "title": "cadet_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cadet_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cadet_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cadet_blue3",
        "fct-type": "function",
        "title": "cadet_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cadet_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cadet_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cadet_blue4",
        "fct-type": "function",
        "title": "cadet_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cadet_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chartreuse1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#chartreuse1",
        "fct-type": "function",
        "title": "chartreuse1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "chartreuse1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chartreuse2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#chartreuse2",
        "fct-type": "function",
        "title": "chartreuse2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "chartreuse2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chartreuse3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#chartreuse3",
        "fct-type": "function",
        "title": "chartreuse3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "chartreuse3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chartreuse4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#chartreuse4",
        "fct-type": "function",
        "title": "chartreuse4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "chartreuse4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chocolate1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#chocolate1",
        "fct-type": "function",
        "title": "chocolate1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "chocolate1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chocolate2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#chocolate2",
        "fct-type": "function",
        "title": "chocolate2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "chocolate2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chocolate3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#chocolate3",
        "fct-type": "function",
        "title": "chocolate3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "chocolate3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:chocolate4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#chocolate4",
        "fct-type": "function",
        "title": "chocolate4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "chocolate4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:coral1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#coral1",
        "fct-type": "function",
        "title": "coral1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "coral1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:coral2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#coral2",
        "fct-type": "function",
        "title": "coral2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "coral2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:coral3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#coral3",
        "fct-type": "function",
        "title": "coral3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "coral3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:coral4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#coral4",
        "fct-type": "function",
        "title": "coral4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "coral4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cornsilk1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cornsilk1",
        "fct-type": "function",
        "title": "cornsilk1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cornsilk1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cornsilk2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cornsilk2",
        "fct-type": "function",
        "title": "cornsilk2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cornsilk2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cornsilk3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cornsilk3",
        "fct-type": "function",
        "title": "cornsilk3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cornsilk3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cornsilk4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cornsilk4",
        "fct-type": "function",
        "title": "cornsilk4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cornsilk4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cyan1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cyan1",
        "fct-type": "function",
        "title": "cyan1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cyan1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cyan2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cyan2",
        "fct-type": "function",
        "title": "cyan2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cyan2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cyan3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cyan3",
        "fct-type": "function",
        "title": "cyan3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cyan3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:cyan4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#cyan4",
        "fct-type": "function",
        "title": "cyan4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "cyan4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_goldenrod1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_goldenrod1",
        "fct-type": "function",
        "title": "dark_goldenrod1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_goldenrod1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_goldenrod2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_goldenrod2",
        "fct-type": "function",
        "title": "dark_goldenrod2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_goldenrod2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_goldenrod3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_goldenrod3",
        "fct-type": "function",
        "title": "dark_goldenrod3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_goldenrod3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_goldenrod4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_goldenrod4",
        "fct-type": "function",
        "title": "dark_goldenrod4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_goldenrod4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_olive_green1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_olive_green1",
        "fct-type": "function",
        "title": "dark_olive_green1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_olive_green1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_olive_green2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_olive_green2",
        "fct-type": "function",
        "title": "dark_olive_green2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_olive_green2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_olive_green3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_olive_green3",
        "fct-type": "function",
        "title": "dark_olive_green3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_olive_green3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_olive_green4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_olive_green4",
        "fct-type": "function",
        "title": "dark_olive_green4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_olive_green4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orange1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orange1",
        "fct-type": "function",
        "title": "dark_orange1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_orange1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orange2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orange2",
        "fct-type": "function",
        "title": "dark_orange2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_orange2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orange3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orange3",
        "fct-type": "function",
        "title": "dark_orange3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_orange3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orange4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orange4",
        "fct-type": "function",
        "title": "dark_orange4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_orange4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orchid1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orchid1",
        "fct-type": "function",
        "title": "dark_orchid1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_orchid1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orchid2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orchid2",
        "fct-type": "function",
        "title": "dark_orchid2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_orchid2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orchid3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orchid3",
        "fct-type": "function",
        "title": "dark_orchid3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_orchid3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_orchid4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_orchid4",
        "fct-type": "function",
        "title": "dark_orchid4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_orchid4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_sea_green1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_sea_green1",
        "fct-type": "function",
        "title": "dark_sea_green1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_sea_green1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_sea_green2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_sea_green2",
        "fct-type": "function",
        "title": "dark_sea_green2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_sea_green2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_sea_green3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_sea_green3",
        "fct-type": "function",
        "title": "dark_sea_green3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_sea_green3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_sea_green4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_sea_green4",
        "fct-type": "function",
        "title": "dark_sea_green4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_sea_green4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_slate_gray1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_slate_gray1",
        "fct-type": "function",
        "title": "dark_slate_gray1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_slate_gray1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_slate_gray2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_slate_gray2",
        "fct-type": "function",
        "title": "dark_slate_gray2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_slate_gray2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_slate_gray3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_slate_gray3",
        "fct-type": "function",
        "title": "dark_slate_gray3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_slate_gray3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dark_slate_gray4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dark_slate_gray4",
        "fct-type": "function",
        "title": "dark_slate_gray4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dark_slate_gray4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_pink1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_pink1",
        "fct-type": "function",
        "title": "deep_pink1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "deep_pink1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_pink2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_pink2",
        "fct-type": "function",
        "title": "deep_pink2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "deep_pink2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_pink3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_pink3",
        "fct-type": "function",
        "title": "deep_pink3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "deep_pink3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_pink4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_pink4",
        "fct-type": "function",
        "title": "deep_pink4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "deep_pink4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_sky_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_sky_blue1",
        "fct-type": "function",
        "title": "deep_sky_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "deep_sky_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_sky_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_sky_blue2",
        "fct-type": "function",
        "title": "deep_sky_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "deep_sky_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_sky_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_sky_blue3",
        "fct-type": "function",
        "title": "deep_sky_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "deep_sky_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:deep_sky_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#deep_sky_blue4",
        "fct-type": "function",
        "title": "deep_sky_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "deep_sky_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dodger_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dodger_blue1",
        "fct-type": "function",
        "title": "dodger_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dodger_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dodger_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dodger_blue2",
        "fct-type": "function",
        "title": "dodger_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dodger_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dodger_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dodger_blue3",
        "fct-type": "function",
        "title": "dodger_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dodger_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:dodger_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#dodger_blue4",
        "fct-type": "function",
        "title": "dodger_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "dodger_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:firebrick1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#firebrick1",
        "fct-type": "function",
        "title": "firebrick1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "firebrick1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:firebrick2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#firebrick2",
        "fct-type": "function",
        "title": "firebrick2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "firebrick2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:firebrick3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#firebrick3",
        "fct-type": "function",
        "title": "firebrick3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "firebrick3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:firebrick4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#firebrick4",
        "fct-type": "function",
        "title": "firebrick4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "firebrick4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:gold1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#gold1",
        "fct-type": "function",
        "title": "gold1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "gold1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:gold2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#gold2",
        "fct-type": "function",
        "title": "gold2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "gold2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:gold3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#gold3",
        "fct-type": "function",
        "title": "gold3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "gold3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:gold4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#gold4",
        "fct-type": "function",
        "title": "gold4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "gold4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:goldenrod1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#goldenrod1",
        "fct-type": "function",
        "title": "goldenrod1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "goldenrod1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:goldenrod2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#goldenrod2",
        "fct-type": "function",
        "title": "goldenrod2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "goldenrod2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:goldenrod3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#goldenrod3",
        "fct-type": "function",
        "title": "goldenrod3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "goldenrod3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:goldenrod4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#goldenrod4",
        "fct-type": "function",
        "title": "goldenrod4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "goldenrod4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:green1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#green1",
        "fct-type": "function",
        "title": "green1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "green1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:green2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#green2",
        "fct-type": "function",
        "title": "green2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "green2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:green3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#green3",
        "fct-type": "function",
        "title": "green3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "green3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:green4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#green4",
        "fct-type": "function",
        "title": "green4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "green4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:honeydew1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#honeydew1",
        "fct-type": "function",
        "title": "honeydew1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "honeydew1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:honeydew2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#honeydew2",
        "fct-type": "function",
        "title": "honeydew2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "honeydew2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:honeydew3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#honeydew3",
        "fct-type": "function",
        "title": "honeydew3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "honeydew3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:honeydew4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#honeydew4",
        "fct-type": "function",
        "title": "honeydew4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "honeydew4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:hot_pink1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#hot_pink1",
        "fct-type": "function",
        "title": "hot_pink1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "hot_pink1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:hot_pink2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#hot_pink2",
        "fct-type": "function",
        "title": "hot_pink2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "hot_pink2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:hot_pink3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#hot_pink3",
        "fct-type": "function",
        "title": "hot_pink3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "hot_pink3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:hot_pink4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#hot_pink4",
        "fct-type": "function",
        "title": "hot_pink4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "hot_pink4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:indian_red1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#indian_red1",
        "fct-type": "function",
        "title": "indian_red1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "indian_red1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:indian_red2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#indian_red2",
        "fct-type": "function",
        "title": "indian_red2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "indian_red2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:indian_red3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#indian_red3",
        "fct-type": "function",
        "title": "indian_red3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "indian_red3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:indian_red4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#indian_red4",
        "fct-type": "function",
        "title": "indian_red4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "indian_red4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:ivory1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#ivory1",
        "fct-type": "function",
        "title": "ivory1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "ivory1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:ivory2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#ivory2",
        "fct-type": "function",
        "title": "ivory2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "ivory2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:ivory3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#ivory3",
        "fct-type": "function",
        "title": "ivory3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "ivory3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:ivory4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#ivory4",
        "fct-type": "function",
        "title": "ivory4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "ivory4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:khaki1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#khaki1",
        "fct-type": "function",
        "title": "khaki1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "khaki1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:khaki2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#khaki2",
        "fct-type": "function",
        "title": "khaki2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "khaki2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:khaki3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#khaki3",
        "fct-type": "function",
        "title": "khaki3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "khaki3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:khaki4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#khaki4",
        "fct-type": "function",
        "title": "khaki4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "khaki4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lavender_blush1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#lavender_blush1",
        "fct-type": "function",
        "title": "lavender_blush1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "lavender_blush1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lavender_blush2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#lavender_blush2",
        "fct-type": "function",
        "title": "lavender_blush2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "lavender_blush2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lavender_blush3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#lavender_blush3",
        "fct-type": "function",
        "title": "lavender_blush3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "lavender_blush3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lavender_blush4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#lavender_blush4",
        "fct-type": "function",
        "title": "lavender_blush4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "lavender_blush4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lemon_chiffon1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#lemon_chiffon1",
        "fct-type": "function",
        "title": "lemon_chiffon1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "lemon_chiffon1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lemon_chiffon2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#lemon_chiffon2",
        "fct-type": "function",
        "title": "lemon_chiffon2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "lemon_chiffon2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lemon_chiffon3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#lemon_chiffon3",
        "fct-type": "function",
        "title": "lemon_chiffon3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "lemon_chiffon3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:lemon_chiffon4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#lemon_chiffon4",
        "fct-type": "function",
        "title": "lemon_chiffon4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "lemon_chiffon4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_blue1",
        "fct-type": "function",
        "title": "light_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_blue2",
        "fct-type": "function",
        "title": "light_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_blue3",
        "fct-type": "function",
        "title": "light_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_blue4",
        "fct-type": "function",
        "title": "light_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_cyan1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_cyan1",
        "fct-type": "function",
        "title": "light_cyan1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_cyan1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_cyan2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_cyan2",
        "fct-type": "function",
        "title": "light_cyan2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_cyan2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_cyan3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_cyan3",
        "fct-type": "function",
        "title": "light_cyan3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_cyan3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_cyan4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_cyan4",
        "fct-type": "function",
        "title": "light_cyan4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_cyan4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_goldenrod1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_goldenrod1",
        "fct-type": "function",
        "title": "light_goldenrod1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_goldenrod1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_goldenrod2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_goldenrod2",
        "fct-type": "function",
        "title": "light_goldenrod2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_goldenrod2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_goldenrod3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_goldenrod3",
        "fct-type": "function",
        "title": "light_goldenrod3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_goldenrod3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_goldenrod4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_goldenrod4",
        "fct-type": "function",
        "title": "light_goldenrod4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_goldenrod4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_pink1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_pink1",
        "fct-type": "function",
        "title": "light_pink1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_pink1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_pink2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_pink2",
        "fct-type": "function",
        "title": "light_pink2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_pink2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_pink3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_pink3",
        "fct-type": "function",
        "title": "light_pink3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_pink3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_pink4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_pink4",
        "fct-type": "function",
        "title": "light_pink4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_pink4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_salmon1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_salmon1",
        "fct-type": "function",
        "title": "light_salmon1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_salmon1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_salmon2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_salmon2",
        "fct-type": "function",
        "title": "light_salmon2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_salmon2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_salmon3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_salmon3",
        "fct-type": "function",
        "title": "light_salmon3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_salmon3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_salmon4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_salmon4",
        "fct-type": "function",
        "title": "light_salmon4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_salmon4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_sky_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_sky_blue1",
        "fct-type": "function",
        "title": "light_sky_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_sky_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_sky_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_sky_blue2",
        "fct-type": "function",
        "title": "light_sky_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_sky_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_sky_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_sky_blue3",
        "fct-type": "function",
        "title": "light_sky_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_sky_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_sky_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_sky_blue4",
        "fct-type": "function",
        "title": "light_sky_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_sky_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_steel_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_steel_blue1",
        "fct-type": "function",
        "title": "light_steel_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_steel_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_steel_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_steel_blue2",
        "fct-type": "function",
        "title": "light_steel_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_steel_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_steel_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_steel_blue3",
        "fct-type": "function",
        "title": "light_steel_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_steel_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_steel_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_steel_blue4",
        "fct-type": "function",
        "title": "light_steel_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_steel_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_yellow1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_yellow1",
        "fct-type": "function",
        "title": "light_yellow1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_yellow1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_yellow2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_yellow2",
        "fct-type": "function",
        "title": "light_yellow2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_yellow2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_yellow3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_yellow3",
        "fct-type": "function",
        "title": "light_yellow3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_yellow3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:light_yellow4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#light_yellow4",
        "fct-type": "function",
        "title": "light_yellow4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "light_yellow4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:magenta1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#magenta1",
        "fct-type": "function",
        "title": "magenta1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "magenta1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:magenta2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#magenta2",
        "fct-type": "function",
        "title": "magenta2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "magenta2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:magenta3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#magenta3",
        "fct-type": "function",
        "title": "magenta3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "magenta3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:magenta4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#magenta4",
        "fct-type": "function",
        "title": "magenta4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "magenta4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:maroon1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#maroon1",
        "fct-type": "function",
        "title": "maroon1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "maroon1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:maroon2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#maroon2",
        "fct-type": "function",
        "title": "maroon2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "maroon2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:maroon3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#maroon3",
        "fct-type": "function",
        "title": "maroon3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "maroon3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:maroon4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#maroon4",
        "fct-type": "function",
        "title": "maroon4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "maroon4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_orchid1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_orchid1",
        "fct-type": "function",
        "title": "medium_orchid1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "medium_orchid1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_orchid2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_orchid2",
        "fct-type": "function",
        "title": "medium_orchid2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "medium_orchid2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_orchid3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_orchid3",
        "fct-type": "function",
        "title": "medium_orchid3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "medium_orchid3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_orchid4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_orchid4",
        "fct-type": "function",
        "title": "medium_orchid4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "medium_orchid4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_purple1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_purple1",
        "fct-type": "function",
        "title": "medium_purple1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "medium_purple1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_purple2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_purple2",
        "fct-type": "function",
        "title": "medium_purple2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "medium_purple2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_purple3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_purple3",
        "fct-type": "function",
        "title": "medium_purple3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "medium_purple3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:medium_purple4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#medium_purple4",
        "fct-type": "function",
        "title": "medium_purple4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "medium_purple4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:misty_rose1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#misty_rose1",
        "fct-type": "function",
        "title": "misty_rose1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "misty_rose1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:misty_rose2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#misty_rose2",
        "fct-type": "function",
        "title": "misty_rose2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "misty_rose2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:misty_rose3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#misty_rose3",
        "fct-type": "function",
        "title": "misty_rose3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "misty_rose3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:misty_rose4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#misty_rose4",
        "fct-type": "function",
        "title": "misty_rose4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "misty_rose4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:navajo_white1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#navajo_white1",
        "fct-type": "function",
        "title": "navajo_white1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "navajo_white1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:navajo_white2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#navajo_white2",
        "fct-type": "function",
        "title": "navajo_white2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "navajo_white2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:navajo_white3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#navajo_white3",
        "fct-type": "function",
        "title": "navajo_white3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "navajo_white3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:navajo_white4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#navajo_white4",
        "fct-type": "function",
        "title": "navajo_white4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "navajo_white4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:olive_drab1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#olive_drab1",
        "fct-type": "function",
        "title": "olive_drab1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "olive_drab1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:olive_drab2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#olive_drab2",
        "fct-type": "function",
        "title": "olive_drab2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "olive_drab2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:olive_drab3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#olive_drab3",
        "fct-type": "function",
        "title": "olive_drab3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "olive_drab3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:olive_drab4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#olive_drab4",
        "fct-type": "function",
        "title": "olive_drab4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "olive_drab4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange1",
        "fct-type": "function",
        "title": "orange1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orange1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange2",
        "fct-type": "function",
        "title": "orange2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orange2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange3",
        "fct-type": "function",
        "title": "orange3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orange3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange4",
        "fct-type": "function",
        "title": "orange4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orange4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange_red1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange_red1",
        "fct-type": "function",
        "title": "orange_red1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orange_red1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange_red2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange_red2",
        "fct-type": "function",
        "title": "orange_red2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orange_red2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange_red3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange_red3",
        "fct-type": "function",
        "title": "orange_red3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orange_red3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orange_red4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orange_red4",
        "fct-type": "function",
        "title": "orange_red4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orange_red4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orchid1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orchid1",
        "fct-type": "function",
        "title": "orchid1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orchid1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orchid2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orchid2",
        "fct-type": "function",
        "title": "orchid2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orchid2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orchid3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orchid3",
        "fct-type": "function",
        "title": "orchid3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orchid3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:orchid4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#orchid4",
        "fct-type": "function",
        "title": "orchid4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "orchid4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_green1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_green1",
        "fct-type": "function",
        "title": "pale_green1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_green1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_green2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_green2",
        "fct-type": "function",
        "title": "pale_green2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_green2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_green3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_green3",
        "fct-type": "function",
        "title": "pale_green3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_green3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_green4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_green4",
        "fct-type": "function",
        "title": "pale_green4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_green4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_turquoise1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_turquoise1",
        "fct-type": "function",
        "title": "pale_turquoise1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_turquoise1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_turquoise2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_turquoise2",
        "fct-type": "function",
        "title": "pale_turquoise2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_turquoise2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_turquoise3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_turquoise3",
        "fct-type": "function",
        "title": "pale_turquoise3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_turquoise3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_turquoise4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_turquoise4",
        "fct-type": "function",
        "title": "pale_turquoise4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_turquoise4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_violet_red1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_violet_red1",
        "fct-type": "function",
        "title": "pale_violet_red1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_violet_red1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_violet_red2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_violet_red2",
        "fct-type": "function",
        "title": "pale_violet_red2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_violet_red2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_violet_red3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_violet_red3",
        "fct-type": "function",
        "title": "pale_violet_red3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_violet_red3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pale_violet_red4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pale_violet_red4",
        "fct-type": "function",
        "title": "pale_violet_red4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pale_violet_red4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:peach_puff1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#peach_puff1",
        "fct-type": "function",
        "title": "peach_puff1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "peach_puff1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:peach_puff2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#peach_puff2",
        "fct-type": "function",
        "title": "peach_puff2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "peach_puff2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:peach_puff3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#peach_puff3",
        "fct-type": "function",
        "title": "peach_puff3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "peach_puff3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:peach_puff4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#peach_puff4",
        "fct-type": "function",
        "title": "peach_puff4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "peach_puff4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pink1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pink1",
        "fct-type": "function",
        "title": "pink1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pink1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pink2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pink2",
        "fct-type": "function",
        "title": "pink2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pink2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pink3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pink3",
        "fct-type": "function",
        "title": "pink3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pink3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:pink4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#pink4",
        "fct-type": "function",
        "title": "pink4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "pink4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:plum1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#plum1",
        "fct-type": "function",
        "title": "plum1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "plum1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:plum2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#plum2",
        "fct-type": "function",
        "title": "plum2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "plum2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:plum3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#plum3",
        "fct-type": "function",
        "title": "plum3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "plum3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:plum4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#plum4",
        "fct-type": "function",
        "title": "plum4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "plum4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:purple1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#purple1",
        "fct-type": "function",
        "title": "purple1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "purple1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:purple2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#purple2",
        "fct-type": "function",
        "title": "purple2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "purple2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:purple3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#purple3",
        "fct-type": "function",
        "title": "purple3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "purple3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:purple4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#purple4",
        "fct-type": "function",
        "title": "purple4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "purple4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:red1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#red1",
        "fct-type": "function",
        "title": "red1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "red1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:red2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#red2",
        "fct-type": "function",
        "title": "red2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "red2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:red3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#red3",
        "fct-type": "function",
        "title": "red3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "red3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:red4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#red4",
        "fct-type": "function",
        "title": "red4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "red4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:rosy_brown1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#rosy_brown1",
        "fct-type": "function",
        "title": "rosy_brown1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "rosy_brown1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:rosy_brown2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#rosy_brown2",
        "fct-type": "function",
        "title": "rosy_brown2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "rosy_brown2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:rosy_brown3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#rosy_brown3",
        "fct-type": "function",
        "title": "rosy_brown3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "rosy_brown3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:rosy_brown4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#rosy_brown4",
        "fct-type": "function",
        "title": "rosy_brown4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "rosy_brown4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:royal_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#royal_blue1",
        "fct-type": "function",
        "title": "royal_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "royal_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:royal_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#royal_blue2",
        "fct-type": "function",
        "title": "royal_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "royal_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:royal_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#royal_blue3",
        "fct-type": "function",
        "title": "royal_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "royal_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:royal_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#royal_blue4",
        "fct-type": "function",
        "title": "royal_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "royal_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:salmon1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#salmon1",
        "fct-type": "function",
        "title": "salmon1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "salmon1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:salmon2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#salmon2",
        "fct-type": "function",
        "title": "salmon2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "salmon2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:salmon3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#salmon3",
        "fct-type": "function",
        "title": "salmon3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "salmon3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:salmon4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#salmon4",
        "fct-type": "function",
        "title": "salmon4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "salmon4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sea_green1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sea_green1",
        "fct-type": "function",
        "title": "sea_green1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sea_green1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sea_green2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sea_green2",
        "fct-type": "function",
        "title": "sea_green2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sea_green2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sea_green3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sea_green3",
        "fct-type": "function",
        "title": "sea_green3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sea_green3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sea_green4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sea_green4",
        "fct-type": "function",
        "title": "sea_green4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sea_green4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:seashell1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#seashell1",
        "fct-type": "function",
        "title": "seashell1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "seashell1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:seashell2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#seashell2",
        "fct-type": "function",
        "title": "seashell2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "seashell2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:seashell3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#seashell3",
        "fct-type": "function",
        "title": "seashell3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "seashell3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:seashell4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#seashell4",
        "fct-type": "function",
        "title": "seashell4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "seashell4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sienna1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sienna1",
        "fct-type": "function",
        "title": "sienna1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sienna1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sienna2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sienna2",
        "fct-type": "function",
        "title": "sienna2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sienna2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sienna3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sienna3",
        "fct-type": "function",
        "title": "sienna3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sienna3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sienna4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sienna4",
        "fct-type": "function",
        "title": "sienna4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sienna4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sky_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sky_blue1",
        "fct-type": "function",
        "title": "sky_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sky_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sky_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sky_blue2",
        "fct-type": "function",
        "title": "sky_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sky_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sky_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sky_blue3",
        "fct-type": "function",
        "title": "sky_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sky_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:sky_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#sky_blue4",
        "fct-type": "function",
        "title": "sky_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "sky_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_blue1",
        "fct-type": "function",
        "title": "slate_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "slate_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_blue2",
        "fct-type": "function",
        "title": "slate_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "slate_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_blue3",
        "fct-type": "function",
        "title": "slate_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "slate_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_blue4",
        "fct-type": "function",
        "title": "slate_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "slate_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_gray1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_gray1",
        "fct-type": "function",
        "title": "slate_gray1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "slate_gray1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_gray2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_gray2",
        "fct-type": "function",
        "title": "slate_gray2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "slate_gray2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_gray3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_gray3",
        "fct-type": "function",
        "title": "slate_gray3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "slate_gray3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:slate_gray4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#slate_gray4",
        "fct-type": "function",
        "title": "slate_gray4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "slate_gray4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:snow1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#snow1",
        "fct-type": "function",
        "title": "snow1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "snow1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:snow2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#snow2",
        "fct-type": "function",
        "title": "snow2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "snow2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:snow3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#snow3",
        "fct-type": "function",
        "title": "snow3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "snow3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:snow4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#snow4",
        "fct-type": "function",
        "title": "snow4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "snow4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:spring_green1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#spring_green1",
        "fct-type": "function",
        "title": "spring_green1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "spring_green1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:spring_green2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#spring_green2",
        "fct-type": "function",
        "title": "spring_green2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "spring_green2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:spring_green3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#spring_green3",
        "fct-type": "function",
        "title": "spring_green3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "spring_green3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:spring_green4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#spring_green4",
        "fct-type": "function",
        "title": "spring_green4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "spring_green4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:steel_blue1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#steel_blue1",
        "fct-type": "function",
        "title": "steel_blue1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "steel_blue1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:steel_blue2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#steel_blue2",
        "fct-type": "function",
        "title": "steel_blue2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "steel_blue2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:steel_blue3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#steel_blue3",
        "fct-type": "function",
        "title": "steel_blue3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "steel_blue3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:steel_blue4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#steel_blue4",
        "fct-type": "function",
        "title": "steel_blue4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "steel_blue4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tan1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#tan1",
        "fct-type": "function",
        "title": "tan1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "tan1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tan2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#tan2",
        "fct-type": "function",
        "title": "tan2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "tan2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tan3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#tan3",
        "fct-type": "function",
        "title": "tan3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "tan3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tan4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#tan4",
        "fct-type": "function",
        "title": "tan4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "tan4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:thistle1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#thistle1",
        "fct-type": "function",
        "title": "thistle1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "thistle1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:thistle2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#thistle2",
        "fct-type": "function",
        "title": "thistle2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "thistle2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:thistle3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#thistle3",
        "fct-type": "function",
        "title": "thistle3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "thistle3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:thistle4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#thistle4",
        "fct-type": "function",
        "title": "thistle4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "thistle4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tomato1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#tomato1",
        "fct-type": "function",
        "title": "tomato1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "tomato1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tomato2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#tomato2",
        "fct-type": "function",
        "title": "tomato2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "tomato2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tomato3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#tomato3",
        "fct-type": "function",
        "title": "tomato3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "tomato3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:tomato4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#tomato4",
        "fct-type": "function",
        "title": "tomato4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "tomato4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:turquoise1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#turquoise1",
        "fct-type": "function",
        "title": "turquoise1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "turquoise1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:turquoise2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#turquoise2",
        "fct-type": "function",
        "title": "turquoise2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "turquoise2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:turquoise3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#turquoise3",
        "fct-type": "function",
        "title": "turquoise3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "turquoise3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:turquoise4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#turquoise4",
        "fct-type": "function",
        "title": "turquoise4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "turquoise4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:violet_red1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#violet_red1",
        "fct-type": "function",
        "title": "violet_red1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "violet_red1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:violet_red2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#violet_red2",
        "fct-type": "function",
        "title": "violet_red2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "violet_red2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:violet_red3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#violet_red3",
        "fct-type": "function",
        "title": "violet_red3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "violet_red3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:violet_red4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#violet_red4",
        "fct-type": "function",
        "title": "violet_red4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "violet_red4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:wheat1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#wheat1",
        "fct-type": "function",
        "title": "wheat1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "wheat1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:wheat2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#wheat2",
        "fct-type": "function",
        "title": "wheat2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "wheat2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:wheat3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#wheat3",
        "fct-type": "function",
        "title": "wheat3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "wheat3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:wheat4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#wheat4",
        "fct-type": "function",
        "title": "wheat4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "wheat4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:yellow1",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#yellow1",
        "fct-type": "function",
        "title": "yellow1"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "yellow1",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:yellow2",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#yellow2",
        "fct-type": "function",
        "title": "yellow2"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "yellow2",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:yellow3",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#yellow3",
        "fct-type": "function",
        "title": "yellow3"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "yellow3",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Colour-X11Colours.html#v:yellow4",
      "description": {
        "fct-module": "Wumpus.Drawing.Colour.X11Colours",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi",
        "fct-source": "src/Wumpus-Drawing-Colour-X11Colours.html#yellow4",
        "fct-type": "function",
        "title": "yellow4"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Colour X11Colours",
        "module": "Wumpus.Drawing.Colour.X11Colours",
        "name": "yellow4",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrowheads.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - naming scheme due to change.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html",
        "fct-type": "module",
        "title": "Arrowheads"
      },
      "index": {
        "description": "Arrowheads WARNING naming scheme due to change",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "Arrowheads",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Arrowheads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:barb45",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#barb45",
        "fct-type": "function",
        "title": "barb45"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "barb45",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:barb60",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#barb60",
        "fct-type": "function",
        "title": "barb60"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "barb60",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:barb90",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#barb90",
        "fct-type": "function",
        "title": "barb90"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "barb90",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:bracket",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#bracket",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "bracket",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:curveTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#curveTip",
        "fct-type": "function",
        "title": "curveTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "curveTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:diamondTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#diamondTip",
        "fct-type": "function",
        "title": "diamondTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "diamondTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:diamondWideTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#diamondWideTip",
        "fct-type": "function",
        "title": "diamondWideTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "diamondWideTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Wide Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:diskTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#diskTip",
        "fct-type": "function",
        "title": "diskTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "diskTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:odiamondTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#odiamondTip",
        "fct-type": "function",
        "title": "odiamondTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "odiamondTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:odiamondWideTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#odiamondWideTip",
        "fct-type": "function",
        "title": "odiamondWideTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "odiamondWideTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Wide Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:odiskTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#odiskTip",
        "fct-type": "function",
        "title": "odiskTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "odiskTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:orevtri45",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#orevtri45",
        "fct-type": "function",
        "title": "orevtri45"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "orevtri45",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:orevtri60",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#orevtri60",
        "fct-type": "function",
        "title": "orevtri60"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "orevtri60",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:orevtri90",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#orevtri90",
        "fct-type": "function",
        "title": "orevtri90"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "orevtri90",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:osquareTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#osquareTip",
        "fct-type": "function",
        "title": "osquareTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "osquareTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:otri45",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#otri45",
        "fct-type": "function",
        "title": "otri45"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "otri45",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:otri60",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#otri60",
        "fct-type": "function",
        "title": "otri60"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "otri60",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:otri90",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#otri90",
        "fct-type": "function",
        "title": "otri90"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "otri90",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:perp",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#perp",
        "fct-type": "function",
        "title": "perp"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "perp",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revbarb45",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revbarb45",
        "fct-type": "function",
        "title": "revbarb45"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "revbarb45",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revbarb60",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revbarb60",
        "fct-type": "function",
        "title": "revbarb60"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "revbarb60",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revbarb90",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revbarb90",
        "fct-type": "function",
        "title": "revbarb90"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "revbarb90",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revcurveTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revcurveTip",
        "fct-type": "function",
        "title": "revcurveTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "revcurveTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revtri45",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revtri45",
        "fct-type": "function",
        "title": "revtri45"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "revtri45",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revtri60",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revtri60",
        "fct-type": "function",
        "title": "revtri60"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "revtri60",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:revtri90",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#revtri90",
        "fct-type": "function",
        "title": "revtri90"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "revtri90",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:squareTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#squareTip",
        "fct-type": "function",
        "title": "squareTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "squareTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:tri45",
      "description": {
        "fct-descr": "\u003cp\u003eFilled triangle - apex is 45 deg.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#tri45",
        "fct-type": "function",
        "title": "tri45"
      },
      "index": {
        "description": "Filled triangle apex is deg",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "tri45",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:tri60",
      "description": {
        "fct-descr": "\u003cp\u003eFilled triangle - apex is 60 deg.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#tri60",
        "fct-type": "function",
        "title": "tri60"
      },
      "index": {
        "description": "Filled triangle apex is deg",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "tri60",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Arrowheads.html#v:tri90",
      "description": {
        "fct-descr": "\u003cp\u003eFilled triangle - apex is 90 deg.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Arrowheads",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Arrowheads.html#tri90",
        "fct-type": "function",
        "title": "tri90"
      },
      "index": {
        "description": "Filled triangle apex is deg",
        "hierarchy": "Wumpus Drawing Connectors Arrowheads",
        "module": "Wumpus.Drawing.Connectors.Arrowheads",
        "name": "tri90",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConnectors...\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Connectors",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "Base",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ArrowConnector",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowConnector",
        "fct-type": "type",
        "title": "ArrowConnector"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "ArrowConnector",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Arrow Connector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ArrowTip",
      "description": {
        "fct-descr": "\u003cp\u003eArrowhead \u003cem\u003ealgorithm\u003c/em\u003e - the components of an arrowhead.\n\u003c/p\u003e\u003cp\u003eRetract distance is rather vague - depending on the arrowhead\n it may represent a flush join between the path and the tip\n or a join that uses the z-order (tip over path) to create the \n join.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - pending revision...\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
        "fct-type": "data",
        "title": "ArrowTip"
      },
      "index": {
        "description": "Arrowhead algorithm the components of an arrowhead Retract distance is rather vague depending on the arrowhead it may represent flush join between the path and the tip or join that uses the z-order tip over path to create the join WARNING pending revision",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "ArrowTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Arrow Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ConnectorConfig",
      "description": {
        "fct-descr": "\u003cp\u003etotal_path is the path before accounting for arrow \n retract distances.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
        "fct-type": "data",
        "title": "ConnectorConfig"
      },
      "index": {
        "description": "total path is the path before accounting for arrow retract distances",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "ConnectorConfig",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ConnectorPathQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of Connectors - a query from start and end point \n returning an AbsPath.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorPathQuery",
        "fct-type": "type",
        "title": "ConnectorPathQuery"
      },
      "index": {
        "description": "The type of Connectors query from start and end point returning an AbsPath",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "ConnectorPathQuery",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Path Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:ConnectorPathSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "newtype",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorPathSpec",
        "fct-type": "newtype",
        "title": "ConnectorPathSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "ConnectorPathSpec",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Path Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#t:SpacingProjection",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#SpacingProjection",
        "fct-type": "type",
        "title": "SpacingProjection"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "SpacingProjection",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Spacing Projection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:ArrowTip",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
        "fct-type": "function",
        "title": "ArrowTip"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "ArrowTip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Arrow Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:ConnectorConfig",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorConfig",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
        "fct-type": "function",
        "title": "ConnectorConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "ConnectorConfig",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:ConnectorPathSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorPathSpec",
        "fct-type": "function",
        "title": "ConnectorPathSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "ConnectorPathSpec",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Path Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:arrowDecoratePath",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Maybe ArrowTip -\u003e Maybe ArrowTip -\u003e AbsPath u -\u003e Image u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#arrowDecoratePath",
        "fct-type": "function",
        "title": "arrowDecoratePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "arrowDecoratePath",
        "normalized": "Maybe ArrowTip-\u003eMaybe ArrowTip-\u003eAbsPath a-\u003eImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "Decorate Path",
        "signature": "Maybe ArrowTip-\u003eMaybe ArrowTip-\u003eAbsPath u-\u003eImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:conn_arrowl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Maybe ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
        "fct-type": "function",
        "title": "conn_arrowl"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "conn_arrowl",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:conn_arrowr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Maybe ArrowTip",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
        "fct-type": "function",
        "title": "conn_arrowr"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "conn_arrowr",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:conn_path_spec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorConfig",
        "fct-type": "function",
        "title": "conn_path_spec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "conn_path_spec",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:getConnectorPathSpec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e ConnectorPathQuery u",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ConnectorPathSpec",
        "fct-type": "function",
        "title": "getConnectorPathSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "getConnectorPathSpec",
        "normalized": "ConnectorProps-\u003eConnectorPathQuery a",
        "package": "wumpus-drawing",
        "partial": "Connector Path Spec",
        "signature": "ConnectorProps-\u003eConnectorPathQuery u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:leftArrowConnector",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand...\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e ConnectorPathSpec u -\u003e ArrowTip -\u003e ConnectorImage u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#leftArrowConnector",
        "fct-type": "function",
        "title": "leftArrowConnector"
      },
      "index": {
        "description": "Shorthand",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "leftArrowConnector",
        "normalized": "ConnectorProps-\u003eConnectorPathSpec a-\u003eArrowTip-\u003eConnectorImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "Arrow Connector",
        "signature": "ConnectorProps-\u003eConnectorPathSpec u-\u003eArrowTip-\u003eConnectorImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:renderConnectorConfig",
      "description": {
        "fct-descr": "\u003cp\u003eNOTE - the prefix \u003cem\u003erender\u003c/em\u003e needs (re-) consideration...\n\u003c/p\u003e\u003cp\u003eIf it is a good prefix other functions e.g. drawPath should \n use render rather than draw.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e ConnectorConfig u -\u003e ConnectorImage u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#renderConnectorConfig",
        "fct-type": "function",
        "title": "renderConnectorConfig"
      },
      "index": {
        "description": "NOTE the prefix render needs re consideration If it is good prefix other functions e.g drawPath should use render rather than draw",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "renderConnectorConfig",
        "normalized": "ConnectorProps-\u003eConnectorConfig a-\u003eConnectorImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "Connector Config",
        "signature": "ConnectorProps-\u003eConnectorConfig u-\u003eConnectorImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:retract_distance",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "En",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
        "fct-type": "function",
        "title": "retract_distance"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "retract_distance",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:rightArrowConnector",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e ConnectorPathSpec u -\u003e ArrowTip -\u003e ConnectorImage u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#rightArrowConnector",
        "fct-type": "function",
        "title": "rightArrowConnector"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "rightArrowConnector",
        "normalized": "ConnectorProps-\u003eConnectorPathSpec a-\u003eArrowTip-\u003eConnectorImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "Arrow Connector",
        "signature": "ConnectorProps-\u003eConnectorPathSpec u-\u003eArrowTip-\u003eConnectorImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:tip_deco",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocThetaGraphic En",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
        "fct-type": "function",
        "title": "tip_deco"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "tip_deco",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:tip_half_len",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "En",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#ArrowTip",
        "fct-type": "function",
        "title": "tip_half_len"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "tip_half_len",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-Base.html#v:uniformArrowConnector",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e ConnectorPathSpec u -\u003e ArrowTip -\u003e ConnectorImage u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Connectors-Base.html#uniformArrowConnector",
        "fct-type": "function",
        "title": "uniformArrowConnector"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors Base",
        "module": "Wumpus.Drawing.Connectors.Base",
        "name": "uniformArrowConnector",
        "normalized": "ConnectorProps-\u003eConnectorPathSpec a-\u003eArrowTip-\u003eConnectorImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "Arrow Connector",
        "signature": "ConnectorProps-\u003eConnectorPathSpec u-\u003eArrowTip-\u003eConnectorImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBox connectors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html",
        "fct-type": "module",
        "title": "BoxConnectors"
      },
      "index": {
        "description": "Box connectors",
        "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
        "module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "name": "BoxConnectors",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Box Connectors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#t:ConnectorBox",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of BoxConnectors - a query from start and end point \n to a Path. \n\u003c/p\u003e\u003cp\u003eNote - unlike a \u003ccode\u003eConnector\u003c/code\u003e, a BoxConnnector is expected to be \n closed, then filled, stroked or bordered.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#ConnectorBox",
        "fct-type": "type",
        "title": "ConnectorBox"
      },
      "index": {
        "description": "The type of BoxConnectors query from start and end point to Path Note unlike Connector BoxConnnector is expected to be closed then filled stroked or bordered",
        "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
        "module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "name": "ConnectorBox",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#t:ConnectorBoxSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "newtype",
        "fct-source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#ConnectorBoxSpec",
        "fct-type": "newtype",
        "title": "ConnectorBoxSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
        "module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "name": "ConnectorBoxSpec",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Box Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:ConnectorBoxSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorBoxSpec",
        "fct-source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#ConnectorBoxSpec",
        "fct-type": "function",
        "title": "ConnectorBoxSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
        "module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "name": "ConnectorBoxSpec",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Box Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:conn_box",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a stroked, rectangular box around the connector points.\n\u003c/p\u003e\u003cp\u003eThe rectangle will be inclined to the line.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorBoxSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#conn_box",
        "fct-type": "function",
        "title": "conn_box"
      },
      "index": {
        "description": "Draw stroked rectangular box around the connector points The rectangle will be inclined to the line",
        "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
        "module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "name": "conn_box",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:conn_chamf_box",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a stroked, chamfered box around the connector points.\n\u003c/p\u003e\u003cp\u003eThe tube will be inclined to the line.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorBoxSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#conn_chamf_box",
        "fct-type": "function",
        "title": "conn_chamf_box"
      },
      "index": {
        "description": "Draw stroked chamfered box around the connector points The tube will be inclined to the line",
        "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
        "module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "name": "conn_chamf_box",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:conn_tube",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a stroked, tube around the connector points.\n\u003c/p\u003e\u003cp\u003eThe tube will be inclined to the line.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorBoxSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#conn_tube",
        "fct-type": "function",
        "title": "conn_tube"
      },
      "index": {
        "description": "Draw stroked tube around the connector points The tube will be inclined to the line",
        "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
        "module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "name": "conn_tube",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:getConnectorBoxSpec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e ConnectorBox u",
        "fct-source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#ConnectorBoxSpec",
        "fct-type": "function",
        "title": "getConnectorBoxSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
        "module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "name": "getConnectorBoxSpec",
        "normalized": "ConnectorProps-\u003eConnectorBox a",
        "package": "wumpus-drawing",
        "partial": "Connector Box Spec",
        "signature": "ConnectorProps-\u003eConnectorBox u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-BoxConnectors.html#v:renderConnectorBoxSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e ConnectorBoxSpec u -\u003e ConnectorBox u",
        "fct-source": "src/Wumpus-Drawing-Connectors-BoxConnectors.html#renderConnectorBoxSpec",
        "fct-type": "function",
        "title": "renderConnectorBoxSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors BoxConnectors",
        "module": "Wumpus.Drawing.Connectors.BoxConnectors",
        "name": "renderConnectorBoxSpec",
        "normalized": "ConnectorProps-\u003eConnectorBoxSpec a-\u003eConnectorBox a",
        "package": "wumpus-drawing",
        "partial": "Connector Box Spec",
        "signature": "ConnectorProps-\u003eConnectorBoxSpec u-\u003eConnectorBox u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive connectors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html",
        "fct-type": "module",
        "title": "ConnectorPaths"
      },
      "index": {
        "description": "Primitive connectors",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "ConnectorPaths",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Paths",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_diagh",
      "description": {
        "fct-descr": "\u003cp\u003eDiagonal-horizontal connector.\n\u003c/p\u003e\u003cpre\u003e    --@\n   /\n  o\n\u003c/pre\u003e\u003cp\u003eRestricted variant of \u003ccode\u003ehconndiag\u003c/code\u003e - a diagonal segment is drawn \n from the start point joining a horizontal arm drawn from the \n end point\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_diagh",
        "fct-type": "function",
        "title": "conn_diagh"
      },
      "index": {
        "description": "Diagonal-horizontal connector Restricted variant of hconndiag diagonal segment is drawn from the start point joining horizontal arm drawn from the end point",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_diagh",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_diagv",
      "description": {
        "fct-descr": "\u003cp\u003eDiagonal-vertical connector.\n\u003c/p\u003e\u003cpre\u003e    @\n    |\n   /\n  o\n\u003c/pre\u003e\u003cp\u003eRestricted variant of \u003ccode\u003evconndiag\u003c/code\u003e - a diagonal segment is drawn \n from the start point joining a vertical arm drawn from the end \n point.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_diagv",
        "fct-type": "function",
        "title": "conn_diagv"
      },
      "index": {
        "description": "Diagonal-vertical connector Restricted variant of vconndiag diagonal segment is drawn from the start point joining vertical arm drawn from the end point",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_diagv",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_hbezier",
      "description": {
        "fct-descr": "\u003cp\u003eBezier curve connector - the control points are positioned \n horizontally respective to the source and dest.\n\u003c/p\u003e\u003cpre\u003e  *--@ \n    .  \n   . \n  o--*  \n\u003c/pre\u003e\u003cp\u003eNote - the source and dest arm lengths are doubled, generally \n this produces nicer curves.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_hbezier",
        "fct-type": "function",
        "title": "conn_hbezier"
      },
      "index": {
        "description": "Bezier curve connector the control points are positioned horizontally respective to the source and dest Note the source and dest arm lengths are doubled generally this produces nicer curves",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_hbezier",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_hdiag",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal-diagonal connector.\n\u003c/p\u003e\u003cpre\u003e      @\n     /\n  o--\n\u003c/pre\u003e\u003cp\u003eRestricted variant of \u003ccode\u003ehconndiag\u003c/code\u003e - a horizontal arm is drawn\n from the start point joining a diagonal segment drawn from the \n end point.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_hdiag",
        "fct-type": "function",
        "title": "conn_hdiag"
      },
      "index": {
        "description": "Horizontal-diagonal connector Restricted variant of hconndiag horizontal arm is drawn from the start point joining diagonal segment drawn from the end point",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_hdiag",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_hdiagh",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal-diagonal-horizontal connector.\n\u003c/p\u003e\u003cpre\u003e      --@\n     /\n  o--\n\u003c/pre\u003e\u003cp\u003eHorizontal \u003cem\u003earms\u003c/em\u003e are drawn from the start and end points, a\n diagonal segment joins the arms. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_hdiagh",
        "fct-type": "function",
        "title": "conn_hdiagh"
      },
      "index": {
        "description": "Horizontal-diagonal-horizontal connector Horizontal arms are drawn from the start and end points diagonal segment joins the arms",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_hdiagh",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_hrr",
      "description": {
        "fct-descr": "\u003cp\u003eConnector with two horizontal segments and a joining \n vertical segment.\n\u003c/p\u003e\u003cpre\u003e       ,--@\n       |\n  o----'  \n\u003c/pre\u003e\u003cp\u003eThe length of the first horizontal segment is the source arm \n length. The length of the final segment is the remaining \n horizontal distance. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_hrr",
        "fct-type": "function",
        "title": "conn_hrr"
      },
      "index": {
        "description": "Connector with two horizontal segments and joining vertical segment The length of the first horizontal segment is the source arm length The length of the final segment is the remaining horizontal distance",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_hrr",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_line",
      "description": {
        "fct-descr": "\u003cp\u003eStraight line connector.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_line",
        "fct-type": "function",
        "title": "conn_line"
      },
      "index": {
        "description": "Straight line connector",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_line",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_rrh",
      "description": {
        "fct-descr": "\u003cp\u003eConnector with two horizontal segements and a joining \n vertical segment.\n\u003c/p\u003e\u003cpre\u003e     ,----@\n     |\n  o--'  \n\u003c/pre\u003e\u003cp\u003eThe length of the final horizontal segment is the destination \n arm length. The length of the initial segment is the remaining\n horizontal distance. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_rrh",
        "fct-type": "function",
        "title": "conn_rrh"
      },
      "index": {
        "description": "Connector with two horizontal segements and joining vertical segment The length of the final horizontal segment is the destination arm length The length of the initial segment is the remaining horizontal distance",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_rrh",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_rrv",
      "description": {
        "fct-descr": "\u003cp\u003eConnector with two right angles...\n\u003c/p\u003e\u003cpre\u003e       @\n       |\n  ,----'\n  |\n  o  \n\u003c/pre\u003e\u003cp\u003eThe length of the final vertical segment is the destination \n arm length. The length of the initial segment is the remaining\n vertical distance. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_rrv",
        "fct-type": "function",
        "title": "conn_rrv"
      },
      "index": {
        "description": "Connector with two right angles The length of the final vertical segment is the destination arm length The length of the initial segment is the remaining vertical distance",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_rrv",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_vbezier",
      "description": {
        "fct-descr": "\u003cp\u003eBezier curve connector - the control points are positioned \n vertically respective to the source and dest.\n\u003c/p\u003e\u003cpre\u003e        @ \n       .|  \n  *  .  *\n  |.\n  o\n\u003c/pre\u003e\u003cp\u003eNote - the source and dest arm lengths are doubled, generally \n this produces nicer curves.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_vbezier",
        "fct-type": "function",
        "title": "conn_vbezier"
      },
      "index": {
        "description": "Bezier curve connector the control points are positioned vertically respective to the source and dest Note the source and dest arm lengths are doubled generally this produces nicer curves",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_vbezier",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_vdiag",
      "description": {
        "fct-descr": "\u003cp\u003eVertical-diagonal connector.\n\u003c/p\u003e\u003cpre\u003e    @\n   /\n  |\n  o\n\u003c/pre\u003e\u003cp\u003eRestricted variant of \u003ccode\u003evconndiag\u003c/code\u003e - a horizontal arm is drawn\n from the start point joining a vertical segment drawn from the \n end point.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_vdiag",
        "fct-type": "function",
        "title": "conn_vdiag"
      },
      "index": {
        "description": "Vertical-diagonal connector Restricted variant of vconndiag horizontal arm is drawn from the start point joining vertical segment drawn from the end point",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_vdiag",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_vdiagv",
      "description": {
        "fct-descr": "\u003cp\u003eVertical-diagonal-vertical connector.\n\u003c/p\u003e\u003cpre\u003e  @\n  |\n   \\\n    |\n    o\n\u003c/pre\u003e\u003cp\u003eVertical \u003cem\u003earms\u003c/em\u003e are drawn from the start and end points, a\n diagonal segment joins the arms. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_vdiagv",
        "fct-type": "function",
        "title": "conn_vdiagv"
      },
      "index": {
        "description": "Vertical-diagonal-vertical connector Vertical arms are drawn from the start and end points diagonal segment joins the arms",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_vdiagv",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conn_vrr",
      "description": {
        "fct-descr": "\u003cp\u003eConnector with two right angles...\n\u003c/p\u003e\u003cpre\u003e       @\n       |\n  ,----'\n  |\n  o  \n\u003c/pre\u003e\u003cp\u003eThe length of the first vertical segment is the source arm \n length. The length of the final segment is the remaining \n vertical distance. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conn_vrr",
        "fct-type": "function",
        "title": "conn_vrr"
      },
      "index": {
        "description": "Connector with two right angles The length of the first vertical segment is the source arm length The length of the final segment is the remaining vertical distance",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conn_vrr",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_arc",
      "description": {
        "fct-descr": "\u003cp\u003eForm an arc connector.\n\u003c/p\u003e\u003cp\u003eIf the conn_arc_angle in the Drawing context is positive the arc\n will be formed \u003cem\u003eabove\u003c/em\u003e the straight line joining the points. \n If the angle is negative it will be drawn below. \n\u003c/p\u003e\u003cp\u003eThe notion of \u003cem\u003eabove\u003c/em\u003e is respective to the line direction, of \n course.\n\u003c/p\u003e\u003cp\u003eTODO - above and below versions...\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_arc",
        "fct-type": "function",
        "title": "conna_arc"
      },
      "index": {
        "description": "Form an arc connector If the conn arc angle in the Drawing context is positive the arc will be formed above the straight line joining the points If the angle is negative it will be drawn below The notion of above is respective to the line direction of course TODO above and below versions",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conna_arc",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_bar",
      "description": {
        "fct-descr": "\u003cp\u003eBar connector.\n\u003c/p\u003e\u003cpre\u003e  ,----, \n  |    |\n  o    @  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_bar",
        "fct-type": "function",
        "title": "conna_bar"
      },
      "index": {
        "description": "Bar connector The bar is drawn above the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conna_bar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_flam",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eFlam\u003c/em\u003e connector.\n\u003c/p\u003e\u003cpre\u003e    ,- '\n  ,-   | \n  |    |\n  o    @  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_flam",
        "fct-type": "function",
        "title": "conna_flam"
      },
      "index": {
        "description": "Flam connector The bar is drawn above the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conna_flam",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_loop",
      "description": {
        "fct-descr": "\u003cp\u003eLoop connector.\n\u003c/p\u003e\u003cpre\u003e  ,---------, \n  |         |\n  '-o    @--'\n\u003c/pre\u003e\u003cp\u003eThe loop is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_loop",
        "fct-type": "function",
        "title": "conna_loop"
      },
      "index": {
        "description": "Loop connector The loop is drawn above the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conna_loop",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_orthohbar",
      "description": {
        "fct-descr": "\u003cp\u003eBar connector - always orthonormal .\n\u003c/p\u003e\u003cpre\u003e  \n  ,----, \n  |    |\n  o    @  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_orthohbar",
        "fct-type": "function",
        "title": "conna_orthohbar"
      },
      "index": {
        "description": "Bar connector always orthonormal The bar is drawn above the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conna_orthohbar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_orthovbar",
      "description": {
        "fct-descr": "\u003cp\u003eBar connector - always orthonormal.\n\u003c/p\u003e\u003cpre\u003e  \n  ,--- o \n  |   \n  '--- @  \n \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eleft\u003c/em\u003e of the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_orthovbar",
        "fct-type": "function",
        "title": "conna_orthovbar"
      },
      "index": {
        "description": "Bar connector always orthonormal The bar is drawn left of the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conna_orthovbar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:conna_right",
      "description": {
        "fct-descr": "\u003cp\u003eRight angle connector.\n\u003c/p\u003e\u003cpre\u003e  ,----@ \n  | \n  o   \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003eabove\u003c/em\u003e the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#conna_right",
        "fct-type": "function",
        "title": "conna_right"
      },
      "index": {
        "description": "Right angle connector The bar is drawn above the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "conna_right",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_arc",
      "description": {
        "fct-descr": "\u003cp\u003eBelow version of \u003ccode\u003e\u003ca\u003econna_arc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_arc",
        "fct-type": "function",
        "title": "connb_arc"
      },
      "index": {
        "description": "Below version of conna arc",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "connb_arc",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_bar",
      "description": {
        "fct-descr": "\u003cp\u003eBar connector.\n\u003c/p\u003e\u003cpre\u003e  o    @ \n  |    |\n  '----'  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003ebelow\u003c/em\u003e the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_bar",
        "fct-type": "function",
        "title": "connb_bar"
      },
      "index": {
        "description": "Bar connector The bar is drawn below the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "connb_bar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_flam",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eFlam\u003c/em\u003e connector - bleow.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_flam",
        "fct-type": "function",
        "title": "connb_flam"
      },
      "index": {
        "description": "Flam connector bleow",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "connb_flam",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_loop",
      "description": {
        "fct-descr": "\u003cp\u003eLoop connector.\n\u003c/p\u003e\u003cpre\u003e  ,-o    @--, \n  |         |\n  '---------'\n\u003c/pre\u003e\u003cp\u003eThe loop is drawn \u003cem\u003ebelow\u003c/em\u003e the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_loop",
        "fct-type": "function",
        "title": "connb_loop"
      },
      "index": {
        "description": "Loop connector The loop is drawn below the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "connb_loop",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_orthohbar",
      "description": {
        "fct-descr": "\u003cp\u003eBar connector orthonormal - below.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_orthohbar",
        "fct-type": "function",
        "title": "connb_orthohbar"
      },
      "index": {
        "description": "Bar connector orthonormal below",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "connb_orthohbar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_orthovbar",
      "description": {
        "fct-descr": "\u003cp\u003eBar connector orthonormal - right of the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_orthovbar",
        "fct-type": "function",
        "title": "connb_orthovbar"
      },
      "index": {
        "description": "Bar connector orthonormal right of the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "connb_orthovbar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorPaths.html#v:connb_right",
      "description": {
        "fct-descr": "\u003cp\u003eRight angle connector.\n\u003c/p\u003e\u003cpre\u003e       @ \n       |\n  o----'  \n\u003c/pre\u003e\u003cp\u003eThe bar is drawn \u003cem\u003ebelow\u003c/em\u003e the points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorPathSpec u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorPaths.html#connb_right",
        "fct-type": "function",
        "title": "connb_right"
      },
      "index": {
        "description": "Right angle connector The bar is drawn below the points",
        "hierarchy": "Wumpus Drawing Connectors ConnectorPaths",
        "module": "Wumpus.Drawing.Connectors.ConnectorPaths",
        "name": "connb_right",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConnectors...\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html",
        "fct-type": "module",
        "title": "ConnectorProps"
      },
      "index": {
        "description": "Connectors",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "ConnectorProps",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Props",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#t:ConnectorProps",
      "description": {
        "fct-descr": "\u003cp\u003eConnectorProps control the drawing of connectors in \n Wumpus-Drawing.\n\u003c/p\u003e\u003cpre\u003e conn_src_space     :: Em\n conn_dst_space     :: Em\n\u003c/pre\u003e\u003cp\u003eSource and destination offsets - these offset the drawing of\n the connector perpendicular to the direction of line formed \n between the connector points (a positive offset is drawn above, \n a negative offset below). The main use of offsets is to draw\n parallel line connectors.\n\u003c/p\u003e\u003cpre\u003e conn_arc_ang       :: Radian \n\u003c/pre\u003e\u003cp\u003eControl the \u003cem\u003ebend\u003c/em\u003e of an arc connector.\n\u003c/p\u003e\u003cpre\u003e conn_src_arm       :: Em\n conn_dst_arm       :: Em \n\u003c/pre\u003e\u003cp\u003eControl the \u003cem\u003earm\u003c/em\u003e length of a jointed connector - arms are the \n initial segments of the connector. \n\u003c/p\u003e\u003cpre\u003e conn_loop_size     :: Em\n\u003c/pre\u003e\u003cp\u003eControl the \u003cem\u003eheight\u003c/em\u003e of a loop connector. \n\u003c/p\u003e\u003cpre\u003e conn_box_halfsize  :: Em\n\u003c/pre\u003e\u003cp\u003eControl the size of a connector box. Connector boxes are \n drawn with the exterior lines projected out from the connector\n points a halfsize above and below.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
        "fct-type": "data",
        "title": "ConnectorProps"
      },
      "index": {
        "description": "ConnectorProps control the drawing of connectors in Wumpus-Drawing conn src space Em conn dst space Em Source and destination offsets these offset the drawing of the connector perpendicular to the direction of line formed between the connector points positive offset is drawn above negative offset below The main use of offsets is to draw parallel line connectors conn arc ang Radian Control the bend of an arc connector conn src arm Em conn dst arm Em Control the arm length of jointed connector arms are the initial segments of the connector conn loop size Em Control the height of loop connector conn box halfsize Em Control the size of connector box Connector boxes are drawn with the exterior lines projected out from the connector points halfsize above and below",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "ConnectorProps",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Props",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:ConnectorProps",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
        "fct-type": "function",
        "title": "ConnectorProps"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "ConnectorProps",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connector Props",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_arc_ang",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "!Radian",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
        "fct-type": "function",
        "title": "conn_arc_ang"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "conn_arc_ang",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_box_halfsize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "!Em",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
        "fct-type": "function",
        "title": "conn_box_halfsize"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "conn_box_halfsize",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_dst_arm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "!Em",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
        "fct-type": "function",
        "title": "conn_dst_arm"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "conn_dst_arm",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_dst_space",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "!Em",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
        "fct-type": "function",
        "title": "conn_dst_space"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "conn_dst_space",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_loop_size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "!Em",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
        "fct-type": "function",
        "title": "conn_loop_size"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "conn_loop_size",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_src_arm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "!Em",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
        "fct-type": "function",
        "title": "conn_src_arm"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "conn_src_arm",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:conn_src_space",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "!Em",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#ConnectorProps",
        "fct-type": "function",
        "title": "conn_src_space"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "conn_src_space",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorArms",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e m (u, u)",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorArms",
        "fct-type": "function",
        "title": "connectorArms"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "connectorArms",
        "normalized": "ConnectorProps-\u003ea(b,b)",
        "package": "wumpus-drawing",
        "partial": "Arms",
        "signature": "ConnectorProps-\u003em(u,u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorBoxHalfSize",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e m u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorBoxHalfSize",
        "fct-type": "function",
        "title": "connectorBoxHalfSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "connectorBoxHalfSize",
        "normalized": "ConnectorProps-\u003ea b",
        "package": "wumpus-drawing",
        "partial": "Box Half Size",
        "signature": "ConnectorProps-\u003em u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorDstSpace",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e m u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorDstSpace",
        "fct-type": "function",
        "title": "connectorDstSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "connectorDstSpace",
        "normalized": "ConnectorProps-\u003ea b",
        "package": "wumpus-drawing",
        "partial": "Dst Space",
        "signature": "ConnectorProps-\u003em u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorLegs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003elegs\u003c/em\u003e are Arms + spacing.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e m (u, u)",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorLegs",
        "fct-type": "function",
        "title": "connectorLegs"
      },
      "index": {
        "description": "legs are Arms spacing",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "connectorLegs",
        "normalized": "ConnectorProps-\u003ea(b,b)",
        "package": "wumpus-drawing",
        "partial": "Legs",
        "signature": "ConnectorProps-\u003em(u,u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorLoopSize",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e m u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorLoopSize",
        "fct-type": "function",
        "title": "connectorLoopSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "connectorLoopSize",
        "normalized": "ConnectorProps-\u003ea b",
        "package": "wumpus-drawing",
        "partial": "Loop Size",
        "signature": "ConnectorProps-\u003em u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:connectorSrcSpace",
      "description": {
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps -\u003e m u",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#connectorSrcSpace",
        "fct-type": "function",
        "title": "connectorSrcSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "connectorSrcSpace",
        "normalized": "ConnectorProps-\u003ea b",
        "package": "wumpus-drawing",
        "partial": "Src Space",
        "signature": "ConnectorProps-\u003em u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors-ConnectorProps.html#v:default_connector_props",
      "description": {
        "fct-descr": "\u003cp\u003eDefault connector properties.\n\u003c/p\u003e\u003cpre\u003e conn_src_sep:        0\n conn_dst_sep:        0\n conn_arc_ang:        pi / 12\n conn_src_arm:        1\n conn_dst_arm:        1\n conn_loop_size:      2 \n conn_box_half_size:  2\n\u003c/pre\u003e\u003cp\u003eArc angle is 15deg - quite shallow.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorProps",
        "fct-source": "src/Wumpus-Drawing-Connectors-ConnectorProps.html#default_connector_props",
        "fct-type": "function",
        "title": "default_connector_props"
      },
      "index": {
        "description": "Default connector properties conn src sep conn dst sep conn arc ang pi conn src arm conn dst arm conn loop size conn box half size Arc angle is deg quite shallow",
        "hierarchy": "Wumpus Drawing Connectors ConnectorProps",
        "module": "Wumpus.Drawing.Connectors.ConnectorProps",
        "name": "default_connector_props",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Connectors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShim module for Connectors.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - this is due to change...\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Connectors",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Connectors.html",
        "fct-type": "module",
        "title": "Connectors"
      },
      "index": {
        "description": "Shim module for Connectors WARNING this is due to change",
        "hierarchy": "Wumpus Drawing Connectors",
        "module": "Wumpus.Drawing.Connectors",
        "name": "Connectors",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Connectors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDots with anchors.\n\u003c/p\u003e\u003cp\u003eIn many cases a surrounding circle is used to locate anchor\n points - this could be improved to use the actual dot border \n at some point.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html",
        "fct-type": "module",
        "title": "AnchorDots"
      },
      "index": {
        "description": "Dots with anchors In many cases surrounding circle is used to locate anchor points this could be improved to use the actual dot border at some point",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "AnchorDots",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Anchor Dots",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#t:DDotLocImage",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#DDotLocImage",
        "fct-type": "type",
        "title": "DDotLocImage"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "DDotLocImage",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DDot Loc Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#t:DotAnchor",
      "description": {
        "fct-descr": "\u003cp\u003eAll dots return the same thing a \u003ccode\u003e\u003ca\u003eDotAnchor\u003c/a\u003e\u003c/code\u003e which supports \n the same (limited) see of anchors.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#DotAnchor",
        "fct-type": "data",
        "title": "DotAnchor"
      },
      "index": {
        "description": "All dots return the same thing DotAnchor which supports the same limited see of anchors",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "DotAnchor",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Dot Anchor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#t:DotLocImage",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#DotLocImage",
        "fct-type": "type",
        "title": "DotLocImage"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "DotLocImage",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Dot Loc Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotAsterisk",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotAsterisk",
        "fct-type": "function",
        "title": "dotAsterisk"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotAsterisk",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Asterisk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotChar",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Char -\u003e DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotChar",
        "fct-type": "function",
        "title": "dotChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotChar",
        "normalized": "Char-\u003eDotLocImage a",
        "package": "wumpus-drawing",
        "partial": "Char",
        "signature": "Char-\u003eDotLocImage u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotCircle",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotCircle",
        "fct-type": "function",
        "title": "dotCircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotCircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotCross",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotCross",
        "fct-type": "function",
        "title": "dotCross"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotCross",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Cross",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotDiamond",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotDiamond",
        "fct-type": "function",
        "title": "dotDiamond"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotDiamond",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Diamond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotDisk",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotDisk",
        "fct-type": "function",
        "title": "dotDisk"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotDisk",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Disk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotFDiamond",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotFDiamond",
        "fct-type": "function",
        "title": "dotFDiamond"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotFDiamond",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "FDiamond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotFOCross",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotFOCross",
        "fct-type": "function",
        "title": "dotFOCross"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotFOCross",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "FOCross",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotHBar",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotHBar",
        "fct-type": "function",
        "title": "dotHBar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotHBar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "HBar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotNone",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotNone",
        "fct-type": "function",
        "title": "dotNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotNone",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotOCross",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotOCross",
        "fct-type": "function",
        "title": "dotOCross"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotOCross",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "OCross",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotOPlus",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotOPlus",
        "fct-type": "function",
        "title": "dotOPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotOPlus",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "OPlus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotPentagon",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotPentagon",
        "fct-type": "function",
        "title": "dotPentagon"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotPentagon",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Pentagon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotPlus",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotPlus",
        "fct-type": "function",
        "title": "dotPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotPlus",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotSquare",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotSquare",
        "fct-type": "function",
        "title": "dotSquare"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotSquare",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Square",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotStar",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotStar",
        "fct-type": "function",
        "title": "dotStar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotStar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Star",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotText",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "String -\u003e DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotText",
        "fct-type": "function",
        "title": "dotText"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotText",
        "normalized": "String-\u003eDotLocImage a",
        "package": "wumpus-drawing",
        "partial": "Text",
        "signature": "String-\u003eDotLocImage u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotTriangle",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotTriangle",
        "fct-type": "function",
        "title": "dotTriangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotTriangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotVBar",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotVBar",
        "fct-type": "function",
        "title": "dotVBar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotVBar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "VBar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:dotX",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#dotX",
        "fct-type": "function",
        "title": "dotX"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "dotX",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:largeCirc",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#largeCirc",
        "fct-type": "function",
        "title": "largeCirc"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "largeCirc",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Circ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:largeDisk",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#largeDisk",
        "fct-type": "function",
        "title": "largeDisk"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "largeDisk",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Disk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:smallCirc",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#smallCirc",
        "fct-type": "function",
        "title": "smallCirc"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "smallCirc",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Circ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-AnchorDots.html#v:smallDisk",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.AnchorDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DotLocImage u",
        "fct-source": "src/Wumpus-Drawing-Dots-AnchorDots.html#smallDisk",
        "fct-type": "function",
        "title": "smallDisk"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots AnchorDots",
        "module": "Wumpus.Drawing.Dots.AnchorDots",
        "name": "smallDisk",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Disk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple dots - no anchor handles.\n\u003c/p\u003e\u003cp\u003eUse these where you just want to draw Dots, and do not need\n connectors between them. \n\u003c/p\u003e\u003cp\u003eThe text and char marks need loaded glyph metrics for proper \n centering. \n\u003c/p\u003e\u003cp\u003e** WARNING ** - names are expected to change - filled and\n background-filled marks need a naming convention.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html",
        "fct-type": "module",
        "title": "SimpleDots"
      },
      "index": {
        "description": "Simple dots no anchor handles Use these where you just want to draw Dots and do not need connectors between them The text and char marks need loaded glyph metrics for proper centering WARNING names are expected to change filled and background-filled marks need naming convention",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "SimpleDots",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Simple Dots",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#t:MarkSize",
      "description": {
        "fct-descr": "\u003cp\u003eMarkUnit is a contextual unit like \u003ccode\u003e\u003ca\u003eEm\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is 3/4 of the current font size.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#MarkSize",
        "fct-type": "data",
        "title": "MarkSize"
      },
      "index": {
        "description": "MarkUnit is contextual unit like Em and En It is of the current font size",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "MarkSize",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Mark Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotAsterisk",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotAsterisk",
        "fct-type": "function",
        "title": "dotAsterisk"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotAsterisk",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Asterisk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotBDiamond",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotBDiamond",
        "fct-type": "function",
        "title": "dotBDiamond"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotBDiamond",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "BDiamond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotChar",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Char -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotChar",
        "fct-type": "function",
        "title": "dotChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotChar",
        "normalized": "Char-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Char",
        "signature": "Char-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotCircle",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotCircle",
        "fct-type": "function",
        "title": "dotCircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotCircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotCross",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotCross",
        "fct-type": "function",
        "title": "dotCross"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotCross",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Cross",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotDiamond",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotDiamond",
        "fct-type": "function",
        "title": "dotDiamond"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotDiamond",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Diamond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotDisk",
      "description": {
        "fct-descr": "\u003cp\u003eNote disk is filled.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotDisk",
        "fct-type": "function",
        "title": "dotDisk"
      },
      "index": {
        "description": "Note disk is filled",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotDisk",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Disk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotEscChar",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "EscapedChar -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotEscChar",
        "fct-type": "function",
        "title": "dotEscChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotEscChar",
        "normalized": "EscapedChar-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Esc Char",
        "signature": "EscapedChar-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotEscText",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "EscapedText -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotEscText",
        "fct-type": "function",
        "title": "dotEscText"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotEscText",
        "normalized": "EscapedText-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Esc Text",
        "signature": "EscapedText-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotFDiamond",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotFDiamond",
        "fct-type": "function",
        "title": "dotFDiamond"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotFDiamond",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "FDiamond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotFOCross",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotFOCross",
        "fct-type": "function",
        "title": "dotFOCross"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotFOCross",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "FOCross",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotHBar",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotHBar",
        "fct-type": "function",
        "title": "dotHBar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotHBar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "HBar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotNone",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotNone",
        "fct-type": "function",
        "title": "dotNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotNone",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotOCross",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotOCross",
        "fct-type": "function",
        "title": "dotOCross"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotOCross",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "OCross",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotOPlus",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotOPlus",
        "fct-type": "function",
        "title": "dotOPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotOPlus",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "OPlus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotPentagon",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotPentagon",
        "fct-type": "function",
        "title": "dotPentagon"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotPentagon",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Pentagon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotPlus",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotPlus",
        "fct-type": "function",
        "title": "dotPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotPlus",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotSquare",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotSquare",
        "fct-type": "function",
        "title": "dotSquare"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotSquare",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Square",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotStar",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotStar",
        "fct-type": "function",
        "title": "dotStar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotStar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Star",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotText",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "String -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotText",
        "fct-type": "function",
        "title": "dotText"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotText",
        "normalized": "String-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Text",
        "signature": "String-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotTriangle",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotTriangle",
        "fct-type": "function",
        "title": "dotTriangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotTriangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotVBar",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotVBar",
        "fct-type": "function",
        "title": "dotVBar"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotVBar",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "VBar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:dotX",
      "description": {
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#dotX",
        "fct-type": "function",
        "title": "dotX"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "dotX",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:largeCirc",
      "description": {
        "fct-descr": "\u003cp\u003eStroked disk (circle) - radius 1.0 MarkSize.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#largeCirc",
        "fct-type": "function",
        "title": "largeCirc"
      },
      "index": {
        "description": "Stroked disk circle radius MarkSize",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "largeCirc",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Circ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:largeDisk",
      "description": {
        "fct-descr": "\u003cp\u003eFilled disk - radius 1.0 MarkSize.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#largeDisk",
        "fct-type": "function",
        "title": "largeDisk"
      },
      "index": {
        "description": "Filled disk radius MarkSize",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "largeDisk",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Disk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:smallCirc",
      "description": {
        "fct-descr": "\u003cp\u003eStroked disk (circle) - radius 0.25 MarkSize.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#smallCirc",
        "fct-type": "function",
        "title": "smallCirc"
      },
      "index": {
        "description": "Stroked disk circle radius MarkSize",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "smallCirc",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Circ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Dots-SimpleDots.html#v:smallDisk",
      "description": {
        "fct-descr": "\u003cp\u003eFilled disk - radius 0.25 MarkSize.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Dots.SimpleDots",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Dots-SimpleDots.html#smallDisk",
        "fct-type": "function",
        "title": "smallDisk"
      },
      "index": {
        "description": "Filled disk radius MarkSize",
        "hierarchy": "Wumpus Drawing Dots SimpleDots",
        "module": "Wumpus.Drawing.Dots.SimpleDots",
        "name": "smallDisk",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Disk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Axes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDrawing grids\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Extras.Axes",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Extras-Axes.html",
        "fct-type": "module",
        "title": "Axes"
      },
      "index": {
        "description": "Drawing grids",
        "hierarchy": "Wumpus Drawing Extras Axes",
        "module": "Wumpus.Drawing.Extras.Axes",
        "name": "Axes",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Axes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Axes.html#v:horizontalLabels",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Axes",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RectAddress -\u003e [a] -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Extras-Axes.html#horizontalLabels",
        "fct-type": "function",
        "title": "horizontalLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Axes",
        "module": "Wumpus.Drawing.Extras.Axes",
        "name": "horizontalLabels",
        "normalized": "RectAddress-\u003e[a]-\u003eLocGraphic b",
        "package": "wumpus-drawing",
        "partial": "Labels",
        "signature": "RectAddress-\u003e[a]-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Axes.html#v:orthontAxes",
      "description": {
        "fct-descr": "\u003cp\u003eSimple orthonormal axes using snap grid units.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Extras.Axes",
        "fct-package": "wumpus-drawing",
        "fct-signature": "(Int, Int) -\u003e (Int, Int) -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Extras-Axes.html#orthontAxes",
        "fct-type": "function",
        "title": "orthontAxes"
      },
      "index": {
        "description": "Simple orthonormal axes using snap grid units",
        "hierarchy": "Wumpus Drawing Extras Axes",
        "module": "Wumpus.Drawing.Extras.Axes",
        "name": "orthontAxes",
        "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Axes",
        "signature": "(Int,Int)-\u003e(Int,Int)-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Axes.html#v:verticalLabels",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Axes",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RectAddress -\u003e [a] -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Extras-Axes.html#verticalLabels",
        "fct-type": "function",
        "title": "verticalLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Axes",
        "module": "Wumpus.Drawing.Extras.Axes",
        "name": "verticalLabels",
        "normalized": "RectAddress-\u003e[a]-\u003eLocGraphic b",
        "package": "wumpus-drawing",
        "partial": "Labels",
        "signature": "RectAddress-\u003e[a]-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Clip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClipping paths.\n\u003c/p\u003e\u003cp\u003eNote - at the moment there is nothing much to this module.\n Ideally, clipping would be defined in Wumpus-Basic, but clipping\n needs a higher level path object than Wumpus-Basic provides.\n\u003c/p\u003e\u003cp\u003e** WARNING ** names need improving.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Extras.Clip",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Extras-Clip.html",
        "fct-type": "module",
        "title": "Clip"
      },
      "index": {
        "description": "Clipping paths Note at the moment there is nothing much to this module Ideally clipping would be defined in Wumpus-Basic but clipping needs higher level path object than Wumpus-Basic provides WARNING names need improving",
        "hierarchy": "Wumpus Drawing Extras Clip",
        "module": "Wumpus.Drawing.Extras.Clip",
        "name": "Clip",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Clip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Clip.html#v:locClip",
      "description": {
        "fct-descr": "\u003cp\u003eClip a LocGraphic.\n\u003c/p\u003e\u003cp\u003e** WARNING ** - AbsPath (coordinate-specific) is the wrong \n object to clip a LocGraphic (coordinate-free). \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Extras.Clip",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e LocGraphic u -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Extras-Clip.html#locClip",
        "fct-type": "function",
        "title": "locClip"
      },
      "index": {
        "description": "Clip LocGraphic WARNING AbsPath coordinate-specific is the wrong object to clip LocGraphic coordinate-free",
        "hierarchy": "Wumpus Drawing Extras Clip",
        "module": "Wumpus.Drawing.Extras.Clip",
        "name": "locClip",
        "normalized": "AbsPath a-\u003eLocGraphic a-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Clip",
        "signature": "AbsPath u-\u003eLocGraphic u-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDrawing grids\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html",
        "fct-type": "module",
        "title": "Grids"
      },
      "index": {
        "description": "Drawing grids",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "Grids",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Grids",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#t:GridContextF",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#GridContextF",
        "fct-type": "type",
        "title": "GridContextF"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "GridContextF",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Grid Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:dotted_major_grid",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#dotted_major_grid",
        "fct-type": "function",
        "title": "dotted_major_grid"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "dotted_major_grid",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GridContextF -\u003e Int -\u003e Int -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid",
        "fct-type": "function",
        "title": "grid"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid",
        "normalized": "GridContextF-\u003eInt-\u003eInt-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "GridContextF-\u003eInt-\u003eInt-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_label_colour",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi -\u003e GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid_label_colour",
        "fct-type": "function",
        "title": "grid_label_colour"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid_label_colour",
        "normalized": "RGBi-\u003eGridContextF",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "RGBi-\u003eGridContextF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_major_colour",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi -\u003e GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid_major_colour",
        "fct-type": "function",
        "title": "grid_major_colour"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid_major_colour",
        "normalized": "RGBi-\u003eGridContextF",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "RGBi-\u003eGridContextF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_major_dotnum",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Int -\u003e GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid_major_dotnum",
        "fct-type": "function",
        "title": "grid_major_dotnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid_major_dotnum",
        "normalized": "Int-\u003eGridContextF",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Int-\u003eGridContextF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_major_line_width",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Double -\u003e GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid_major_line_width",
        "fct-type": "function",
        "title": "grid_major_line_width"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid_major_line_width",
        "normalized": "Double-\u003eGridContextF",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Double-\u003eGridContextF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_minor_colour",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi -\u003e GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid_minor_colour",
        "fct-type": "function",
        "title": "grid_minor_colour"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid_minor_colour",
        "normalized": "RGBi-\u003eGridContextF",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "RGBi-\u003eGridContextF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_minor_dotnum",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Int -\u003e GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid_minor_dotnum",
        "fct-type": "function",
        "title": "grid_minor_dotnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid_minor_dotnum",
        "normalized": "Int-\u003eGridContextF",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Int-\u003eGridContextF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_minor_line_width",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Double -\u003e GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid_minor_line_width",
        "fct-type": "function",
        "title": "grid_minor_line_width"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid_minor_line_width",
        "normalized": "Double-\u003eGridContextF",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Double-\u003eGridContextF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_minor_subdivisions",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Int -\u003e GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid_minor_subdivisions",
        "fct-type": "function",
        "title": "grid_minor_subdivisions"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid_minor_subdivisions",
        "normalized": "Int-\u003eGridContextF",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Int-\u003eGridContextF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:grid_point_size",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontSize -\u003e GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#grid_point_size",
        "fct-type": "function",
        "title": "grid_point_size"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "grid_point_size",
        "normalized": "FontSize-\u003eGridContextF",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "FontSize-\u003eGridContextF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Grids.html#v:standard_grid",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Grids",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GridContextF",
        "fct-source": "src/Wumpus-Drawing-Extras-Grids.html#standard_grid",
        "fct-type": "function",
        "title": "standard_grid"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Grids",
        "module": "Wumpus.Drawing.Extras.Grids",
        "name": "standard_grid",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Loop.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOpen loop for a circle (useful for automata diagrams).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Extras.Loop",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Extras-Loop.html",
        "fct-type": "module",
        "title": "Loop"
      },
      "index": {
        "description": "Open loop for circle useful for automata diagrams",
        "hierarchy": "Wumpus Drawing Extras Loop",
        "module": "Wumpus.Drawing.Extras.Loop",
        "name": "Loop",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Loop.html#v:loopPath",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Loop",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Point2 u -\u003e Radian -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Extras-Loop.html#loopPath",
        "fct-type": "function",
        "title": "loopPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Loop",
        "module": "Wumpus.Drawing.Extras.Loop",
        "name": "loopPath",
        "normalized": "a-\u003ePoint a-\u003eRadian-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Path",
        "signature": "u-\u003ePoint u-\u003eRadian-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Extras-Loop.html#v:loopTrail",
      "description": {
        "fct-module": "Wumpus.Drawing.Extras.Loop",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Radian -\u003e AnaTrail u",
        "fct-source": "src/Wumpus-Drawing-Extras-Loop.html#loopTrail",
        "fct-type": "function",
        "title": "loopTrail"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Extras Loop",
        "module": "Wumpus.Drawing.Extras.Loop",
        "name": "loopTrail",
        "normalized": "a-\u003eRadian-\u003eAnaTrail a",
        "package": "wumpus-drawing",
        "partial": "Trail",
        "signature": "u-\u003eRadian-\u003eAnaTrail u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbsolute path type - this should be more amenable for building \n complex drawings than the PrimPath type in Wumpus-Core.\n\u003c/p\u003e\u003cp\u003eNote - there is no concatenation (i.e. no Monoid instance),\n this is because concatenating ** absolute ** paths has no \n obvious interpretation - draw a join between the paths, move\n the second path to start where the first ends...\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003eCatTrail\u003c/code\u003e from Wumpus-Basic if you need a relative-path \n like object that supports concatenation, then convert it in a \n final step to an \u003ccode\u003eAbsPath\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Absolute path type this should be more amenable for building complex drawings than the PrimPath type in Wumpus-Core Note there is no concatenation i.e no Monoid instance this is because concatenating absolute paths has no obvious interpretation draw join between the paths move the second path to start where the first ends Use CatTrail from Wumpus-Basic if you need relative-path like object that supports concatenation then convert it in final step to an AbsPath",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "Base",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:AbsPath",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute path data type.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#AbsPath",
        "fct-type": "data",
        "title": "AbsPath"
      },
      "index": {
        "description": "Absolute path data type",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "AbsPath",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Abs Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:DAbsPath",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#DAbsPath",
        "fct-type": "type",
        "title": "DAbsPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "DAbsPath",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DAbs Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:DPathSegment",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#DPathSegment",
        "fct-type": "type",
        "title": "DPathSegment"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "DPathSegment",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DPath Segment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:DPathViewL",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#DPathViewL",
        "fct-type": "type",
        "title": "DPathViewL"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "DPathViewL",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DPath View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:DPathViewR",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#DPathViewR",
        "fct-type": "type",
        "title": "DPathViewR"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "DPathViewR",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DPath View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:PathSegment",
      "description": {
        "fct-descr": "\u003cp\u003ePathSegments are annotated with length.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#PathSegment",
        "fct-type": "data",
        "title": "PathSegment"
      },
      "index": {
        "description": "PathSegments are annotated with length",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "PathSegment",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Path Segment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:PathViewL",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#PathViewL",
        "fct-type": "data",
        "title": "PathViewL"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "PathViewL",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Path View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#t:PathViewR",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#PathViewR",
        "fct-type": "data",
        "title": "PathViewR"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "PathViewR",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Path View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v::-60--60-",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "(PathSegment u) :\u003c\u003c (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#PathViewL",
        "fct-type": "function",
        "title": ":\u003c\u003c"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": ":\u003c\u003c",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v::-62--62-",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "(AbsPath u) :\u003e\u003e (PathSegment u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#PathViewR",
        "fct-type": "function",
        "title": ":\u003e\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": ":\u003e\u003e",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:CurveSeg",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "CurveSeg u (Point2 u) (Point2 u) (Point2 u) (Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#PathSegment",
        "fct-type": "function",
        "title": "CurveSeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "CurveSeg",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Curve Seg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:EmptyPathL",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "EmptyPathL",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#PathViewL",
        "fct-type": "function",
        "title": "EmptyPathL"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "EmptyPathL",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Empty Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:EmptyPathR",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "EmptyPathR",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#PathViewR",
        "fct-type": "function",
        "title": "EmptyPathR"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "EmptyPathR",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Empty Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:LineSeg",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LineSeg u (Point2 u) (Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#PathSegment",
        "fct-type": "function",
        "title": "LineSeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "LineSeg",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Line Seg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:anaTrailPath",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e AnaTrail u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#anaTrailPath",
        "fct-type": "function",
        "title": "anaTrailPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "anaTrailPath",
        "normalized": "Point a-\u003eAnaTrail a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Trail Path",
        "signature": "Point u-\u003eAnaTrail u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:atend",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e (Point2 u, Radian)",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#atend",
        "fct-type": "function",
        "title": "atend"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "atend",
        "normalized": "AbsPath a-\u003e(Point a,Radian)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003e(Point u,Radian)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:atend_",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Point2 u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#atend_",
        "fct-type": "function",
        "title": "atend_"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "atend_",
        "normalized": "AbsPath a-\u003ePoint a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003ePoint u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:atstart",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e (Point2 u, Radian)",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#atstart",
        "fct-type": "function",
        "title": "atstart"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "atstart",
        "normalized": "AbsPath a-\u003e(Point a,Radian)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003e(Point u,Radian)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:atstart_",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Point2 u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#atstart_",
        "fct-type": "function",
        "title": "atstart_"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "atstart_",
        "normalized": "AbsPath a-\u003ePoint a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003ePoint u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:catTrailPath",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e CatTrail u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#catTrailPath",
        "fct-type": "function",
        "title": "catTrailPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "catTrailPath",
        "normalized": "Point a-\u003eCatTrail a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Trail Path",
        "signature": "Point u-\u003eCatTrail u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:controlCurve",
      "description": {
        "fct-descr": "\u003cp\u003eThis is not an arc...\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e Radian -\u003e Radian -\u003e Point2 u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#controlCurve",
        "fct-type": "function",
        "title": "controlCurve"
      },
      "index": {
        "description": "This is not an arc",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "controlCurve",
        "normalized": "Point a-\u003eRadian-\u003eRadian-\u003ePoint a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Curve",
        "signature": "Point u-\u003eRadian-\u003eRadian-\u003ePoint u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:curve1",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an absolute path from a single cubic Bezier curve.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e Point2 u -\u003e Point2 u -\u003e Point2 u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#curve1",
        "fct-type": "function",
        "title": "curve1"
      },
      "index": {
        "description": "Create an absolute path from single cubic Bezier curve",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "curve1",
        "normalized": "Point a-\u003ePoint a-\u003ePoint a-\u003ePoint a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Point u-\u003ePoint u-\u003ePoint u-\u003ePoint u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:curvePath",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurvePath\u003c/a\u003e\u003c/code\u003e consumes 4 points from the list on the \n intial step (start, control1, control2, end) then steps \n through the list taking 3 points at a time thereafter\n (control1,control2, end). Leftover points are discarded.    \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurvePath\u003c/a\u003e\u003c/code\u003e throws a runtime error if the supplied list\n is has less than 4 elements (start, control1, control2, end). \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "[Point2 u] -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#curvePath",
        "fct-type": "function",
        "title": "curvePath"
      },
      "index": {
        "description": "curvePath consumes points from the list on the intial step start control1 control2 end then steps through the list taking points at time thereafter control1 control2 end Leftover points are discarded curvePath throws runtime error if the supplied list is has less than elements start control1 control2 end",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "curvePath",
        "normalized": "[Point a]-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Path",
        "signature": "[Point u]-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:deBezier",
      "description": {
        "fct-descr": "\u003cp\u003eRedraw an \u003ccode\u003e\u003ca\u003eAbsPath\u003c/a\u003e\u003c/code\u003e replacing the Bezier curves with three \n lines along the control vectors.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#deBezier",
        "fct-type": "function",
        "title": "deBezier"
      },
      "index": {
        "description": "Redraw an AbsPath replacing the Bezier curves with three lines along the control vectors",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "deBezier",
        "normalized": "AbsPath a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Bezier",
        "signature": "AbsPath u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:emptyPath",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the empty path.\n\u003c/p\u003e\u003cp\u003eNote - an absolute path needs \u003cem\u003elocating\u003c/em\u003e and cannot be built \n without a start point. Figuratively, the empty path is a path\n from the start point to the end point.\n\u003c/p\u003e\u003cp\u003eThus AbsPath operates as a semigroup but not a monoid.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#emptyPath",
        "fct-type": "function",
        "title": "emptyPath"
      },
      "index": {
        "description": "Create the empty path Note an absolute path needs locating and cannot be built without start point Figuratively the empty path is path from the start point to the end point Thus AbsPath operates as semigroup but not monoid",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "emptyPath",
        "normalized": "Point a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Path",
        "signature": "Point u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:inclinationL",
      "description": {
        "fct-descr": "\u003cp\u003eDirection of empty path is considered to be 0.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Radian",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#inclinationL",
        "fct-type": "function",
        "title": "inclinationL"
      },
      "index": {
        "description": "Direction of empty path is considered to be",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "inclinationL",
        "normalized": "AbsPath a-\u003eRadian",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003eRadian"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:inclinationR",
      "description": {
        "fct-descr": "\u003cp\u003eDirection of empty path is considered to be 0.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Radian",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#inclinationR",
        "fct-type": "function",
        "title": "inclinationR"
      },
      "index": {
        "description": "Direction of empty path is considered to be",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "inclinationR",
        "normalized": "AbsPath a-\u003eRadian",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003eRadian"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:isBezierL",
      "description": {
        "fct-descr": "\u003cp\u003eIs the left tip a Bezier curve?\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Bool",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#isBezierL",
        "fct-type": "function",
        "title": "isBezierL"
      },
      "index": {
        "description": "Is the left tip Bezier curve",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "isBezierL",
        "normalized": "AbsPath a-\u003eBool",
        "package": "wumpus-drawing",
        "partial": "Bezier",
        "signature": "AbsPath u-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:isBezierR",
      "description": {
        "fct-descr": "\u003cp\u003eIs the right tip a Bezier curve?\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Bool",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#isBezierR",
        "fct-type": "function",
        "title": "isBezierR"
      },
      "index": {
        "description": "Is the right tip Bezier curve",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "isBezierR",
        "normalized": "AbsPath a-\u003eBool",
        "package": "wumpus-drawing",
        "partial": "Bezier",
        "signature": "AbsPath u-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eLength of the Path.\n\u003c/p\u003e\u003cp\u003eLength is the length of the path as it is drawn, it is not a \n count of the number or path segments.\n\u003c/p\u003e\u003cp\u003eLength is cached so this operation is cheap - though this puts\n a tax on the build operations. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Length of the Path Length is the length of the path as it is drawn it is not count of the number or path segments Length is cached so this operation is cheap though this puts tax on the build operations",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "length",
        "normalized": "AbsPath a-\u003ea",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003eu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:line1",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an absolute path as a straight line between the \n supplied points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e Point2 u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#line1",
        "fct-type": "function",
        "title": "line1"
      },
      "index": {
        "description": "Create an absolute path as straight line between the supplied points",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "line1",
        "normalized": "Point a-\u003ePoint a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Point u-\u003ePoint u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:midway",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e (Point2 u, Radian)",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#midway",
        "fct-type": "function",
        "title": "midway"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "midway",
        "normalized": "AbsPath a-\u003e(Point a,Radian)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003e(Point u,Radian)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:midway_",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Point2 u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#midway_",
        "fct-type": "function",
        "title": "midway_"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "midway_",
        "normalized": "AbsPath a-\u003ePoint a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003ePoint u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eIs the path empty?\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Bool",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the path empty",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "null",
        "normalized": "AbsPath a-\u003eBool",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:optimizeLines",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#optimizeLines",
        "fct-type": "function",
        "title": "optimizeLines"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "optimizeLines",
        "normalized": "AbsPath a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Lines",
        "signature": "AbsPath u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathAllPoints",
      "description": {
        "fct-descr": "\u003cp\u003eThis extracts the control points of Bezier curves.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e [Point2 u]",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#pathAllPoints",
        "fct-type": "function",
        "title": "pathAllPoints"
      },
      "index": {
        "description": "This extracts the control points of Bezier curves",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "pathAllPoints",
        "normalized": "AbsPath a-\u003e[Point a]",
        "package": "wumpus-drawing",
        "partial": "All Points",
        "signature": "AbsPath u-\u003e[Point u]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathMajorPoints",
      "description": {
        "fct-descr": "\u003cp\u003eThis does not extract the control points of Bezier curves.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e [Point2 u]",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#pathMajorPoints",
        "fct-type": "function",
        "title": "pathMajorPoints"
      },
      "index": {
        "description": "This does not extract the control points of Bezier curves",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "pathMajorPoints",
        "normalized": "AbsPath a-\u003e[Point a]",
        "package": "wumpus-drawing",
        "partial": "Major Points",
        "signature": "AbsPath u-\u003e[Point u]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathViewL",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e PathViewL u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#pathViewL",
        "fct-type": "function",
        "title": "pathViewL"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "pathViewL",
        "normalized": "AbsPath a-\u003ePathViewL a",
        "package": "wumpus-drawing",
        "partial": "View",
        "signature": "AbsPath u-\u003ePathViewL u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathViewR",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e PathViewR u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#pathViewR",
        "fct-type": "function",
        "title": "pathViewR"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "pathViewR",
        "normalized": "AbsPath a-\u003ePathViewR a",
        "package": "wumpus-drawing",
        "partial": "View",
        "signature": "AbsPath u-\u003ePathViewR u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:pathdiv",
      "description": {
        "fct-descr": "\u003cp\u003eDivide a path returning intermediate points and direction\n\u003c/p\u003e\u003cp\u003eArgs are initial-prefix, division size, trailing size.\n\u003c/p\u003e\u003cp\u003eGeneration is stopped if the remainder of the path is shorter\n than the trailing size.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e u -\u003e AbsPath u -\u003e [(Point2 u, Radian)]",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#pathdiv",
        "fct-type": "function",
        "title": "pathdiv"
      },
      "index": {
        "description": "Divide path returning intermediate points and direction Args are initial-prefix division size trailing size Generation is stopped if the remainder of the path is shorter than the trailing size",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "pathdiv",
        "normalized": "a-\u003ea-\u003ea-\u003eAbsPath a-\u003e[(Point a,Radian)]",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eu-\u003eAbsPath u-\u003e[(Point u,Radian)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:renderPath",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "PathMode -\u003e AbsPath u -\u003e Image u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#renderPath",
        "fct-type": "function",
        "title": "renderPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "renderPath",
        "normalized": "PathMode-\u003eAbsPath a-\u003eImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "Path",
        "signature": "PathMode-\u003eAbsPath u-\u003eImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:renderPath_",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "PathMode -\u003e AbsPath u -\u003e Graphic u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#renderPath_",
        "fct-type": "function",
        "title": "renderPath_"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "renderPath_",
        "normalized": "PathMode-\u003eAbsPath a-\u003eGraphic a",
        "package": "wumpus-drawing",
        "partial": "Path",
        "signature": "PathMode-\u003eAbsPath u-\u003eGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:roundExterior",
      "description": {
        "fct-descr": "\u003cp\u003eRound a \"closed\" path. \n\u003c/p\u003e\u003cp\u003eCaution - all path sgements are expected to be longer than\n 2x the round corner length, though this is not checked..\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e AbsPath u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#roundExterior",
        "fct-type": "function",
        "title": "roundExterior"
      },
      "index": {
        "description": "Round closed path Caution all path sgements are expected to be longer than the round corner length though this is not checked",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "roundExterior",
        "normalized": "a-\u003eAbsPath a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Exterior",
        "signature": "u-\u003eAbsPath u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:roundInterior",
      "description": {
        "fct-descr": "\u003cp\u003eRound interior corners of a Path.\n\u003c/p\u003e\u003cp\u003eThe path is treated as open - the start of the initial and end\n of the final segments are not rounded. Only straight line to \n straight line joins are rounded, joins to or from Bezier \n curves are not rounded.\n\u003c/p\u003e\u003cp\u003eCaution - all path segments are expected to be longer than\n 2x the round corner length, though this is not checked..\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e AbsPath u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#roundInterior",
        "fct-type": "function",
        "title": "roundInterior"
      },
      "index": {
        "description": "Round interior corners of Path The path is treated as open the start of the initial and end of the final segments are not rounded Only straight line to straight line joins are rounded joins to or from Bezier curves are not rounded Caution all path segments are expected to be longer than the round corner length though this is not checked",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "roundInterior",
        "normalized": "a-\u003eAbsPath a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Interior",
        "signature": "u-\u003eAbsPath u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:shortenL",
      "description": {
        "fct-descr": "\u003cp\u003eNote - shortening a line from the left by \n greater-than-or-equal its length is operationally equivalent \n to making a zero-length line at the end point.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e AbsPath u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#shortenL",
        "fct-type": "function",
        "title": "shortenL"
      },
      "index": {
        "description": "Note shortening line from the left by greater-than-or-equal its length is operationally equivalent to making zero-length line at the end point",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "shortenL",
        "normalized": "a-\u003eAbsPath a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eAbsPath u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:shortenPath",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esortenPath\u003c/code\u003e : \u003ccode\u003e left_dist * right_dist * path -\u003e Path \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e AbsPath u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#shortenPath",
        "fct-type": "function",
        "title": "shortenPath"
      },
      "index": {
        "description": "sortenPath left dist right dist path Path",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "shortenPath",
        "normalized": "a-\u003ea-\u003eAbsPath a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Path",
        "signature": "u-\u003eu-\u003eAbsPath u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:shortenR",
      "description": {
        "fct-descr": "\u003cp\u003eNote - shortening a line from the right by \n greater-than-or-equal its length is operationally equivalent \n to making a zero-length line at the start point.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e AbsPath u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#shortenR",
        "fct-type": "function",
        "title": "shortenR"
      },
      "index": {
        "description": "Note shortening line from the right by greater-than-or-equal its length is operationally equivalent to making zero-length line at the start point",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "shortenR",
        "normalized": "a-\u003eAbsPath a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eAbsPath u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:snocCurve",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the path from the end-point with a Bezier curve \n segment formed by the supplied points.\n\u003c/p\u003e\u003cpre\u003e infixl 5 `snocCurve`\n\u003c/pre\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e (Vec2 u, Vec2 u, Vec2 u) -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#snocCurve",
        "fct-type": "function",
        "title": "snocCurve"
      },
      "index": {
        "description": "Extend the path from the end-point with Bezier curve segment formed by the supplied points infixl snocCurve",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "snocCurve",
        "normalized": "AbsPath a-\u003e(Vec a,Vec a,Vec a)-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Curve",
        "signature": "AbsPath u-\u003e(Vec u,Vec u,Vec u)-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:snocCurveTo",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the path from the end-point with a Bezier curve \n segment formed by the supplied points.\n\u003c/p\u003e\u003cpre\u003e infixl 5 `snocCurveTo`\n\u003c/pre\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e (Point2 u, Point2 u, Point2 u) -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#snocCurveTo",
        "fct-type": "function",
        "title": "snocCurveTo"
      },
      "index": {
        "description": "Extend the path from the end-point with Bezier curve segment formed by the supplied points infixl snocCurveTo",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "snocCurveTo",
        "normalized": "AbsPath a-\u003e(Point a,Point a,Point a)-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Curve To",
        "signature": "AbsPath u-\u003e(Point u,Point u,Point u)-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:snocLine",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the path with a straight line segment from the \n end-point defined by the supplied vector.\n\u003c/p\u003e\u003cpre\u003e infixl 5 `snocLine`\n\u003c/pre\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Vec2 u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#snocLine",
        "fct-type": "function",
        "title": "snocLine"
      },
      "index": {
        "description": "Extend the path with straight line segment from the end-point defined by the supplied vector infixl snocLine",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "snocLine",
        "normalized": "AbsPath a-\u003eVec a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Line",
        "signature": "AbsPath u-\u003eVec u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:snocLineTo",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the path with a straight line segment from the \n end-point to the supplied point.\n\u003c/p\u003e\u003cpre\u003e infixl 5 `snocLineTo`\n\u003c/pre\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Point2 u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#snocLineTo",
        "fct-type": "function",
        "title": "snocLineTo"
      },
      "index": {
        "description": "Extend the path with straight line segment from the end-point to the supplied point infixl snocLineTo",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "snocLineTo",
        "normalized": "AbsPath a-\u003ePoint a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Line To",
        "signature": "AbsPath u-\u003ePoint u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:tipL",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Point2 u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#tipL",
        "fct-type": "function",
        "title": "tipL"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "tipL",
        "normalized": "AbsPath a-\u003ePoint a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003ePoint u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:tipR",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Point2 u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#tipR",
        "fct-type": "function",
        "title": "tipR"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "tipR",
        "normalized": "AbsPath a-\u003ePoint a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003ePoint u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:toPrimPath",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a Path into an ordinary PrimPath.\n\u003c/p\u003e\u003cp\u003eAssumes path is properly formed - i.e. end point of one \n segment is the same point as the start point of the next\n segment.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Query u PrimPath",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#toPrimPath",
        "fct-type": "function",
        "title": "toPrimPath"
      },
      "index": {
        "description": "Turn Path into an ordinary PrimPath Assumes path is properly formed i.e end point of one segment is the same point as the start point of the next segment",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "toPrimPath",
        "normalized": "AbsPath a-\u003eQuery a PrimPath",
        "package": "wumpus-drawing",
        "partial": "Prim Path",
        "signature": "AbsPath u-\u003eQuery u PrimPath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:vectorPath",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "[Vec2 u] -\u003e Point2 u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#vectorPath",
        "fct-type": "function",
        "title": "vectorPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "vectorPath",
        "normalized": "[Vec a]-\u003ePoint a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Path",
        "signature": "[Vec u]-\u003ePoint u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:vectorPathTheta",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "[Vec2 u] -\u003e Radian -\u003e Point2 u -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#vectorPathTheta",
        "fct-type": "function",
        "title": "vectorPathTheta"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "vectorPathTheta",
        "normalized": "[Vec a]-\u003eRadian-\u003ePoint a-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Path Theta",
        "signature": "[Vec u]-\u003eRadian-\u003ePoint u-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Base.html#v:vertexPath",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evertexPath\u003c/a\u003e\u003c/code\u003e throws a runtime error if the supplied list\n is empty. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "[Point2 u] -\u003e AbsPath u",
        "fct-source": "src/Wumpus-Drawing-Paths-Base.html#vertexPath",
        "fct-type": "function",
        "title": "vertexPath"
      },
      "index": {
        "description": "vertexPath throws runtime error if the supplied list is empty",
        "hierarchy": "Wumpus Drawing Paths Base",
        "module": "Wumpus.Drawing.Paths.Base",
        "name": "vertexPath",
        "normalized": "[Point a]-\u003eAbsPath a",
        "package": "wumpus-drawing",
        "partial": "Path",
        "signature": "[Point u]-\u003eAbsPath u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Illustrate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIllustrate a path - show the construction of its Bezier curves.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Illustrate",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Paths-Illustrate.html",
        "fct-type": "module",
        "title": "Illustrate"
      },
      "index": {
        "description": "Illustrate path show the construction of its Bezier curves",
        "hierarchy": "Wumpus Drawing Paths Illustrate",
        "module": "Wumpus.Drawing.Paths.Illustrate",
        "name": "Illustrate",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Illustrate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Illustrate.html#v:path_as_control_box",
      "description": {
        "fct-descr": "\u003cp\u003eIllustrate the control points as a \u003cem\u003eboxed\u003c/em\u003e path - Bezier \n curves are replaced with straight lines spanning the \n control points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Illustrate",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Graphic u",
        "fct-source": "src/Wumpus-Drawing-Paths-Illustrate.html#path_as_control_box",
        "fct-type": "function",
        "title": "path_as_control_box"
      },
      "index": {
        "description": "Illustrate the control points as boxed path Bezier curves are replaced with straight lines spanning the control points",
        "hierarchy": "Wumpus Drawing Paths Illustrate",
        "module": "Wumpus.Drawing.Paths.Illustrate",
        "name": "path_as_control_box",
        "normalized": "AbsPath a-\u003eGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003eGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Illustrate.html#v:path_with_control_points",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Illustrate",
        "fct-package": "wumpus-drawing",
        "fct-signature": "AbsPath u -\u003e Graphic u",
        "fct-source": "src/Wumpus-Drawing-Paths-Illustrate.html#path_with_control_points",
        "fct-type": "function",
        "title": "path_with_control_points"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Illustrate",
        "module": "Wumpus.Drawing.Paths.Illustrate",
        "name": "path_with_control_points",
        "normalized": "AbsPath a-\u003eGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "AbsPath u-\u003eGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntersection of Paths with (infinite) lines.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html",
        "fct-type": "module",
        "title": "Intersection"
      },
      "index": {
        "description": "Intersection of Paths with infinite lines",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "Intersection",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Intersection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#t:Line",
      "description": {
        "fct-descr": "\u003cp\u003eInfinite line represented by two points.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#Line",
        "fct-type": "data",
        "title": "Line"
      },
      "index": {
        "description": "Infinite line represented by two points",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "Line",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#t:Ray",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRay\u003c/a\u003e\u003c/code\u003e extends from the first point, through the second to\n infinity.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003e extends to infinity in both directions.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#Ray",
        "fct-type": "data",
        "title": "Ray"
      },
      "index": {
        "description": "Ray extends from the first point through the second to infinity Line extends to infinity in both directions",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "Ray",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Ray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:Line",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Line (Point2 u) (Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#Line",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "Line",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:Ray",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Ray (Point2 u) (Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#Ray",
        "fct-type": "function",
        "title": "Ray"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "Ray",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Ray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:inclinedLine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einclinedLine\u003c/a\u003e\u003c/code\u003e : \u003ccode\u003e point * ang -\u003e Line \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eMake an infinite line passing through the supplied point \n inclined by \u003ccode\u003eang\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e Radian -\u003e Line u",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#inclinedLine",
        "fct-type": "function",
        "title": "inclinedLine"
      },
      "index": {
        "description": "inclinedLine point ang Line Make an infinite line passing through the supplied point inclined by ang",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "inclinedLine",
        "normalized": "Point a-\u003eRadian-\u003eLine a",
        "package": "wumpus-drawing",
        "partial": "Line",
        "signature": "Point u-\u003eRadian-\u003eLine u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:inclinedRay",
      "description": {
        "fct-descr": "\u003cp\u003eMake an infinite ray starting from the supplied point \n inclined by \u003ccode\u003eang\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e Radian -\u003e Ray u",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#inclinedRay",
        "fct-type": "function",
        "title": "inclinedRay"
      },
      "index": {
        "description": "Make an infinite ray starting from the supplied point inclined by ang",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "inclinedRay",
        "normalized": "Point a-\u003eRadian-\u003eRay a",
        "package": "wumpus-drawing",
        "partial": "Ray",
        "signature": "Point u-\u003eRadian-\u003eRay u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:isoscelesTriangleRadialIntersect",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer is vector from centroid.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e Maybe (Vec2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#isoscelesTriangleRadialIntersect",
        "fct-type": "function",
        "title": "isoscelesTriangleRadialIntersect"
      },
      "index": {
        "description": "Answer is vector from centroid",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "isoscelesTriangleRadialIntersect",
        "normalized": "a-\u003ea-\u003eRadian-\u003eMaybe(Vec a)",
        "package": "wumpus-drawing",
        "partial": "Triangle Radial Intersect",
        "signature": "u-\u003eu-\u003eRadian-\u003eMaybe(Vec u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:lineLineIntersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einterLineLine\u003c/code\u003e : \u003ccode\u003e line1 * line2 -\u003e Maybe Point \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFind the intersection of two lines, if there is one. \n\u003c/p\u003e\u003cp\u003eLines are infinite they are represented by points on them, \n they are not line segments.\n\u003c/p\u003e\u003cp\u003eAn answer of \u003ccode\u003eNothing\u003c/code\u003e may indicate either the lines coincide\n or the are parallel.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Line u -\u003e Line u -\u003e Maybe (Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#lineLineIntersection",
        "fct-type": "function",
        "title": "lineLineIntersection"
      },
      "index": {
        "description": "interLineLine line1 line2 Maybe Point Find the intersection of two lines if there is one Lines are infinite they are represented by points on them they are not line segments An answer of Nothing may indicate either the lines coincide or the are parallel",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "lineLineIntersection",
        "normalized": "Line a-\u003eLine a-\u003eMaybe(Point a)",
        "package": "wumpus-drawing",
        "partial": "Line Intersection",
        "signature": "Line u-\u003eLine u-\u003eMaybe(Point u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:linePathIntersection",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Line u -\u003e AbsPath u -\u003e Maybe (Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#linePathIntersection",
        "fct-type": "function",
        "title": "linePathIntersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "linePathIntersection",
        "normalized": "Line a-\u003eAbsPath a-\u003eMaybe(Point a)",
        "package": "wumpus-drawing",
        "partial": "Path Intersection",
        "signature": "Line u-\u003eAbsPath u-\u003eMaybe(Point u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:linePathSegmentIntersection",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Line u -\u003e PathSegment u -\u003e Maybe (Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#linePathSegmentIntersection",
        "fct-type": "function",
        "title": "linePathSegmentIntersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "linePathSegmentIntersection",
        "normalized": "Line a-\u003ePathSegment a-\u003eMaybe(Point a)",
        "package": "wumpus-drawing",
        "partial": "Path Segment Intersection",
        "signature": "Line u-\u003ePathSegment u-\u003eMaybe(Point u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:rayPathIntersection",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Ray u -\u003e AbsPath u -\u003e Maybe (Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#rayPathIntersection",
        "fct-type": "function",
        "title": "rayPathIntersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "rayPathIntersection",
        "normalized": "Ray a-\u003eAbsPath a-\u003eMaybe(Point a)",
        "package": "wumpus-drawing",
        "partial": "Path Intersection",
        "signature": "Ray u-\u003eAbsPath u-\u003eMaybe(Point u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:rayPathSegmentIntersection",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Ray u -\u003e PathSegment u -\u003e Maybe (Point2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#rayPathSegmentIntersection",
        "fct-type": "function",
        "title": "rayPathSegmentIntersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "rayPathSegmentIntersection",
        "normalized": "Ray a-\u003ePathSegment a-\u003eMaybe(Point a)",
        "package": "wumpus-drawing",
        "partial": "Path Segment Intersection",
        "signature": "Ray u-\u003ePathSegment u-\u003eMaybe(Point u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:rectangleRadialIntersect",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer is vector from center.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e Maybe (Vec2 u)",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#rectangleRadialIntersect",
        "fct-type": "function",
        "title": "rectangleRadialIntersect"
      },
      "index": {
        "description": "Answer is vector from center",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "rectangleRadialIntersect",
        "normalized": "a-\u003ea-\u003eRadian-\u003eMaybe(Vec a)",
        "package": "wumpus-drawing",
        "partial": "Radial Intersect",
        "signature": "u-\u003eu-\u003eRadian-\u003eMaybe(Vec u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Intersection.html#v:vectorLine",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Intersection",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u -\u003e Point2 u -\u003e Line u",
        "fct-source": "src/Wumpus-Drawing-Paths-Intersection.html#vectorLine",
        "fct-type": "function",
        "title": "vectorLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Intersection",
        "module": "Wumpus.Drawing.Paths.Intersection",
        "name": "vectorLine",
        "normalized": "Vec a-\u003ePoint a-\u003eLine a",
        "package": "wumpus-drawing",
        "partial": "Line",
        "signature": "Vec u-\u003ePoint u-\u003eLine u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBuild relative paths monadically.\n\u003c/p\u003e\u003cp\u003e** WARNING ** this module is an experiment, and may \n change significantly or even be dropped from future revisions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html",
        "fct-type": "module",
        "title": "PathBuilder"
      },
      "index": {
        "description": "Build relative paths monadically WARNING this module is an experiment and may change significantly or even be dropped from future revisions",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "PathBuilder",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Path Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#t:GenPathSpec",
      "description": {
        "fct-descr": "\u003cp\u003eNote - a path spec has an immutable start point like \n \u003ccode\u003eLocDrawing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEffectively a path is draw in a local coordinate system with \n \u003ccode\u003e(0,0)\u003c/code\u003e as the origin.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#GenPathSpec",
        "fct-type": "data",
        "title": "GenPathSpec"
      },
      "index": {
        "description": "Note path spec has an immutable start point like LocDrawing Effectively path is draw in local coordinate system with as the origin",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "GenPathSpec",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Gen Path Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#t:PathSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#PathSpec",
        "fct-type": "type",
        "title": "PathSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "PathSpec",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Path Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#t:Vamp",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#Vamp",
        "fct-type": "data",
        "title": "Vamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "Vamp",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Vamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:Vamp",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vamp",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#Vamp",
        "fct-type": "function",
        "title": "Vamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "Vamp",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Vamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:apenline",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Radian -\u003e u -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#apenline",
        "fct-type": "function",
        "title": "apenline"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "apenline",
        "normalized": "Radian-\u003ea-\u003eGenPathSpec b a()",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Radian-\u003eu-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:breakPath",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#breakPath",
        "fct-type": "function",
        "title": "breakPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "breakPath",
        "normalized": "GenPathSpec a b()",
        "package": "wumpus-drawing",
        "partial": "Path",
        "signature": "GenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:cycleSubPath",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DrawMode -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#cycleSubPath",
        "fct-type": "function",
        "title": "cycleSubPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "cycleSubPath",
        "normalized": "DrawMode-\u003eGenPathSpec a b()",
        "package": "wumpus-drawing",
        "partial": "Sub Path",
        "signature": "DrawMode-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:evalGenPathSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "st -\u003e PathMode -\u003e GenPathSpec st u a -\u003e LocImage u (a, AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#evalGenPathSpec",
        "fct-type": "function",
        "title": "evalGenPathSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "evalGenPathSpec",
        "normalized": "a-\u003ePathMode-\u003eGenPathSpec a b c-\u003eLocImage b(c,AbsPath b)",
        "package": "wumpus-drawing",
        "partial": "Gen Path Spec",
        "signature": "st-\u003ePathMode-\u003eGenPathSpec st u a-\u003eLocImage u(a,AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:execGenPathSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "st -\u003e PathMode -\u003e GenPathSpec st u a -\u003e LocImage u (st, AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#execGenPathSpec",
        "fct-type": "function",
        "title": "execGenPathSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "execGenPathSpec",
        "normalized": "a-\u003ePathMode-\u003eGenPathSpec a b c-\u003eLocImage b(a,AbsPath b)",
        "package": "wumpus-drawing",
        "partial": "Gen Path Spec",
        "signature": "st-\u003ePathMode-\u003eGenPathSpec st u a-\u003eLocImage u(st,AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:hpenline",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#hpenline",
        "fct-type": "function",
        "title": "hpenline"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "hpenline",
        "normalized": "a-\u003eGenPathSpec b a()",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:pathmoves",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "[Vec2 u] -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#pathmoves",
        "fct-type": "function",
        "title": "pathmoves"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "pathmoves",
        "normalized": "[Vec a]-\u003eGenPathSpec b a()",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "[Vec u]-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:pencurve",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the path with a curve, drawn by the pen.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u -\u003e Vec2 u -\u003e Vec2 u -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#pencurve",
        "fct-type": "function",
        "title": "pencurve"
      },
      "index": {
        "description": "Extend the path with curve drawn by the pen",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "pencurve",
        "normalized": "Vec a-\u003eVec a-\u003eVec a-\u003eGenPathSpec b a()",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Vec u-\u003eVec u-\u003eVec u-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:penline",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the path with a line, drawn by the pen.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#penline",
        "fct-type": "function",
        "title": "penline"
      },
      "index": {
        "description": "Extend the path with line drawn by the pen",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "penline",
        "normalized": "Vec a-\u003eGenPathSpec b a()",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Vec u-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:penlines",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "[Vec2 u] -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#penlines",
        "fct-type": "function",
        "title": "penlines"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "penlines",
        "normalized": "[Vec a]-\u003eGenPathSpec b a()",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "[Vec u]-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:runGenPathSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "st -\u003e PathMode -\u003e GenPathSpec st u a -\u003e LocImage u (a, st, AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#runGenPathSpec",
        "fct-type": "function",
        "title": "runGenPathSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "runGenPathSpec",
        "normalized": "a-\u003ePathMode-\u003eGenPathSpec a b c-\u003eLocImage b(c,a,AbsPath b)",
        "package": "wumpus-drawing",
        "partial": "Gen Path Spec",
        "signature": "st-\u003ePathMode-\u003eGenPathSpec st u a-\u003eLocImage u(a,st,AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:runPathSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "PathMode -\u003e PathSpec u a -\u003e LocImage u (a, AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#runPathSpec",
        "fct-type": "function",
        "title": "runPathSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "runPathSpec",
        "normalized": "PathMode-\u003ePathSpec a b-\u003eLocImage a(b,AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "Path Spec",
        "signature": "PathMode-\u003ePathSpec u a-\u003eLocImage u(a,AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:runPathSpec_",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "PathMode -\u003e PathSpec u a -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#runPathSpec_",
        "fct-type": "function",
        "title": "runPathSpec_"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "runPathSpec_",
        "normalized": "PathMode-\u003ePathSpec a b-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Path Spec",
        "signature": "PathMode-\u003ePathSpec u a-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:runPivot",
      "description": {
        "fct-descr": "\u003cp\u003eForm a \"pivot path\" drawing from two path specifications.\n The start point of the drawing is the pivot formed by joining\n the paths.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "PathSpec u a -\u003e PathSpec u a -\u003e LocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#runPivot",
        "fct-type": "function",
        "title": "runPivot"
      },
      "index": {
        "description": "Form pivot path drawing from two path specifications The start point of the drawing is the pivot formed by joining the paths",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "runPivot",
        "normalized": "PathSpec a b-\u003ePathSpec a b-\u003eLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Pivot",
        "signature": "PathSpec u a-\u003ePathSpec u a-\u003eLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:stripGenPathSpec",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "st -\u003e PathMode -\u003e GenPathSpec st u a -\u003e LocQuery u (a, st, AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#stripGenPathSpec",
        "fct-type": "function",
        "title": "stripGenPathSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "stripGenPathSpec",
        "normalized": "a-\u003ePathMode-\u003eGenPathSpec a b c-\u003eLocQuery b(c,a,AbsPath b)",
        "package": "wumpus-drawing",
        "partial": "Gen Path Spec",
        "signature": "st-\u003ePathMode-\u003eGenPathSpec st u a-\u003eLocQuery u(a,st,AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:updatePen",
      "description": {
        "fct-descr": "\u003cp\u003eNote - updates the pen but doesn't draw, the final path\n will be drawing with the last updated context.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "DrawingContextF -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#updatePen",
        "fct-type": "function",
        "title": "updatePen"
      },
      "index": {
        "description": "Note updates the pen but doesn draw the final path will be drawing with the last updated context",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "updatePen",
        "normalized": "DrawingContextF-\u003eGenPathSpec a b()",
        "package": "wumpus-drawing",
        "partial": "Pen",
        "signature": "DrawingContextF-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:vamp",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vamp u -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#vamp",
        "fct-type": "function",
        "title": "vamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "vamp",
        "normalized": "Vamp a-\u003eGenPathSpec b a()",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Vamp u-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:vamp_conn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ConnectorGraphic u",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#Vamp",
        "fct-type": "function",
        "title": "vamp_conn"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "vamp_conn",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:vamp_move",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#Vamp",
        "fct-type": "function",
        "title": "vamp_move"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "vamp_move",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-PathBuilder.html#v:vpenline",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.PathBuilder",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e GenPathSpec st u ()",
        "fct-source": "src/Wumpus-Drawing-Paths-PathBuilder.html#vpenline",
        "fct-type": "function",
        "title": "vpenline"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths PathBuilder",
        "module": "Wumpus.Drawing.Paths.PathBuilder",
        "name": "vpenline",
        "normalized": "a-\u003eGenPathSpec b a()",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eGenPathSpec st u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Vamps.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary of vamps (currently small).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Paths.Vamps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Paths-Vamps.html",
        "fct-type": "module",
        "title": "Vamps"
      },
      "index": {
        "description": "Library of vamps currently small",
        "hierarchy": "Wumpus Drawing Paths Vamps",
        "module": "Wumpus.Drawing.Paths.Vamps",
        "name": "Vamps",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Vamps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths-Vamps.html#v:squareWE",
      "description": {
        "fct-module": "Wumpus.Drawing.Paths.Vamps",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Vamp u",
        "fct-source": "src/Wumpus-Drawing-Paths-Vamps.html#squareWE",
        "fct-type": "function",
        "title": "squareWE"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Paths Vamps",
        "module": "Wumpus.Drawing.Paths.Vamps",
        "name": "squareWE",
        "normalized": "a-\u003eVamp a",
        "package": "wumpus-drawing",
        "partial": "WE",
        "signature": "u-\u003eVamp u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Paths.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShim import module for the Absolute Path modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Paths",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Paths.html",
        "fct-type": "module",
        "title": "Paths"
      },
      "index": {
        "description": "Shim import module for the Absolute Path modules",
        "hierarchy": "Wumpus Drawing Paths",
        "module": "Wumpus.Drawing.Paths",
        "name": "Paths",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Paths",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon core for shapes\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Common core for shapes",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "Base",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#t:DShape",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#DShape",
        "fct-type": "type",
        "title": "DShape"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "DShape",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DShape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#t:Shape",
      "description": {
        "fct-descr": "\u003cp\u003eShape is a record of three \u003cem\u003eLocTheta\u003c/em\u003e functions - \n functions \u003cem\u003efrom Point and Angle to answer\u003c/em\u003e. \n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eshape_path_fun\u003c/code\u003e returns a path. When the Shape is drawn, \n the rendering function (\u003ccode\u003estrokedShape\u003c/code\u003e, etc.) uses the path for \n drawing and returns the polymorphic answer \u003ccode\u003ea\u003c/code\u003e of the \n \u003ccode\u003eshape_ans_fun\u003c/code\u003e. Lastly the \u003ccode\u003eshape_decoration\u003c/code\u003e function can \n instantiated to add decoration (e.g. text) to the Shape as it \n is rendered.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ea\u003c/code\u003e of the \u003ccode\u003eshape_ans_fun\u003c/code\u003e represents some concrete shape \n object (e.g. a Rectangle, Triangle etc.). Crucial for shape \n objects is that they support Anchors - this allows connectors \n to address specific locations on the Shape border so \n \"node and link\" diagrams can be made easily.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#Shape",
        "fct-type": "data",
        "title": "Shape"
      },
      "index": {
        "description": "Shape is record of three LocTheta functions functions from Point and Angle to answer The shape path fun returns path When the Shape is drawn the rendering function strokedShape etc uses the path for drawing and returns the polymorphic answer of the shape ans fun Lastly the shape decoration function can instantiated to add decoration e.g text to the Shape as it is rendered The of the shape ans fun represents some concrete shape object e.g Rectangle Triangle etc Crucial for shape objects is that they support Anchors this allows connectors to address specific locations on the Shape border so node and link diagrams can be made easily",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "Shape",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#t:ShapeCTM",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#ShapeCTM",
        "fct-type": "data",
        "title": "ShapeCTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "ShapeCTM",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Shape CTM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:borderedShape",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Shape t u -\u003e LocImage u (t u)",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#borderedShape",
        "fct-type": "function",
        "title": "borderedShape"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "borderedShape",
        "normalized": "Shape a b-\u003eLocImage b(a b)",
        "package": "wumpus-drawing",
        "partial": "Shape",
        "signature": "Shape t u-\u003eLocImage u(t u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:ctmAngle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ShapeCTM u -\u003e Radian",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#ctmAngle",
        "fct-type": "function",
        "title": "ctmAngle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "ctmAngle",
        "normalized": "ShapeCTM a-\u003eRadian",
        "package": "wumpus-drawing",
        "partial": "Angle",
        "signature": "ShapeCTM u-\u003eRadian"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:ctmCenter",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ShapeCTM u -\u003e Point2 u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#ctmCenter",
        "fct-type": "function",
        "title": "ctmCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "ctmCenter",
        "normalized": "ShapeCTM a-\u003ePoint a",
        "package": "wumpus-drawing",
        "partial": "Center",
        "signature": "ShapeCTM u-\u003ePoint u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:ctmLocale",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "ShapeCTM u -\u003e (Point2 u, Radian)",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#ctmLocale",
        "fct-type": "function",
        "title": "ctmLocale"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "ctmLocale",
        "normalized": "ShapeCTM a-\u003e(Point a,Radian)",
        "package": "wumpus-drawing",
        "partial": "Locale",
        "signature": "ShapeCTM u-\u003e(Point u,Radian)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:dblStrokedShape",
      "description": {
        "fct-descr": "\u003cp\u003eNote - this is simplistic double stroking - draw a background \n line with triple thickness and draw a white line on top.\n\u003c/p\u003e\u003cp\u003eI think this is what TikZ does, but it works better for TikZ \n where the extra thickness seems to be accounted for by the \n anchors. For Wumpus, arrows cut into the outside black line.\n\u003c/p\u003e\u003cp\u003eProbably Wumpus should calculate two paths instead.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Shape t u -\u003e LocImage u (t u)",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#dblStrokedShape",
        "fct-type": "function",
        "title": "dblStrokedShape"
      },
      "index": {
        "description": "Note this is simplistic double stroking draw background line with triple thickness and draw white line on top think this is what TikZ does but it works better for TikZ where the extra thickness seems to be accounted for by the anchors For Wumpus arrows cut into the outside black line Probably Wumpus should calculate two paths instead",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "dblStrokedShape",
        "normalized": "Shape a b-\u003eLocImage b(a b)",
        "package": "wumpus-drawing",
        "partial": "Stroked Shape",
        "signature": "Shape t u-\u003eLocImage u(t u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:filledShape",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Shape t u -\u003e LocImage u (t u)",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#filledShape",
        "fct-type": "function",
        "title": "filledShape"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "filledShape",
        "normalized": "Shape a b-\u003eLocImage b(a b)",
        "package": "wumpus-drawing",
        "partial": "Shape",
        "signature": "Shape t u-\u003eLocImage u(t u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:makeShape",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocThetaQuery u (t u) -\u003e LocThetaQuery u (AbsPath u) -\u003e Shape t u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#makeShape",
        "fct-type": "function",
        "title": "makeShape"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "makeShape",
        "normalized": "LocThetaQuery a(b a)-\u003eLocThetaQuery a(AbsPath a)-\u003eShape b a",
        "package": "wumpus-drawing",
        "partial": "Shape",
        "signature": "LocThetaQuery u(t u)-\u003eLocThetaQuery u(AbsPath u)-\u003eShape t u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:makeShapeCTM",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Point2 u -\u003e Radian -\u003e ShapeCTM u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#makeShapeCTM",
        "fct-type": "function",
        "title": "makeShapeCTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "makeShapeCTM",
        "normalized": "Point a-\u003eRadian-\u003eShapeCTM a",
        "package": "wumpus-drawing",
        "partial": "Shape CTM",
        "signature": "Point u-\u003eRadian-\u003eShapeCTM u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:projectFromCtr",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Vec2 u -\u003e ShapeCTM u -\u003e Anchor u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#projectFromCtr",
        "fct-type": "function",
        "title": "projectFromCtr"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "projectFromCtr",
        "normalized": "Vec a-\u003eShapeCTM a-\u003eAnchor a",
        "package": "wumpus-drawing",
        "partial": "From Ctr",
        "signature": "Vec u-\u003eShapeCTM u-\u003eAnchor u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:rborderedShape",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Shape t u -\u003e LocThetaImage u (t u)",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#rborderedShape",
        "fct-type": "function",
        "title": "rborderedShape"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "rborderedShape",
        "normalized": "Shape a b-\u003eLocThetaImage b(a b)",
        "package": "wumpus-drawing",
        "partial": "Shape",
        "signature": "Shape t u-\u003eLocThetaImage u(t u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:rfilledShape",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Shape t u -\u003e LocThetaImage u (t u)",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#rfilledShape",
        "fct-type": "function",
        "title": "rfilledShape"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "rfilledShape",
        "normalized": "Shape a b-\u003eLocThetaImage b(a b)",
        "package": "wumpus-drawing",
        "partial": "Shape",
        "signature": "Shape t u-\u003eLocThetaImage u(t u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:roundCornerShapePath",
      "description": {
        "fct-descr": "\u003cp\u003eDraw the shape path with round corners.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e [Point2 u] -\u003e Query u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#roundCornerShapePath",
        "fct-type": "function",
        "title": "roundCornerShapePath"
      },
      "index": {
        "description": "Draw the shape path with round corners",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "roundCornerShapePath",
        "normalized": "a-\u003e[Point a]-\u003eQuery a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "Corner Shape Path",
        "signature": "u-\u003e[Point u]-\u003eQuery u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:rstrokedShape",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Shape t u -\u003e LocThetaImage u (t u)",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#rstrokedShape",
        "fct-type": "function",
        "title": "rstrokedShape"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "rstrokedShape",
        "normalized": "Shape a b-\u003eLocThetaImage b(a b)",
        "package": "wumpus-drawing",
        "partial": "Shape",
        "signature": "Shape t u-\u003eLocThetaImage u(t u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:setDecoration",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "LocThetaGraphic u -\u003e Shape t u -\u003e Shape t u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#setDecoration",
        "fct-type": "function",
        "title": "setDecoration"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "setDecoration",
        "normalized": "LocThetaGraphic a-\u003eShape b a-\u003eShape b a",
        "package": "wumpus-drawing",
        "partial": "Decoration",
        "signature": "LocThetaGraphic u-\u003eShape t u-\u003eShape t u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:shapeMap",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "(t u -\u003e t' u) -\u003e Shape t u -\u003e Shape t' u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#shapeMap",
        "fct-type": "function",
        "title": "shapeMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "shapeMap",
        "normalized": "(a b-\u003ec b)-\u003eShape a b-\u003eShape c b",
        "package": "wumpus-drawing",
        "partial": "Map",
        "signature": "(t u-\u003et' u)-\u003eShape t u-\u003eShape t' u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:strokedShape",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Shape t u -\u003e LocImage u (t u)",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#strokedShape",
        "fct-type": "function",
        "title": "strokedShape"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "strokedShape",
        "normalized": "Shape a b-\u003eLocImage b(a b)",
        "package": "wumpus-drawing",
        "partial": "Shape",
        "signature": "Shape t u-\u003eLocImage u(t u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Base.html#v:updatePathAngle",
      "description": {
        "fct-descr": "\u003cp\u003eThe path angle can be modified. This allows \u003cem\u003einverse\u003c/em\u003e \n versions of shapes (e.g. InvTriangle) to be made by\n wrapping a base Shape but rotating the path prior to drawing \n it.\n\u003c/p\u003e\u003cp\u003eOnly the Path needs rotating, the decoration takes the original \n angle. The anchors are typically implemented by rotating the \n correspoding anchor of the wrapped Shape about its center.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Base",
        "fct-package": "wumpus-drawing",
        "fct-signature": "(Radian -\u003e Radian) -\u003e Shape t u -\u003e Shape t u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Base.html#updatePathAngle",
        "fct-type": "function",
        "title": "updatePathAngle"
      },
      "index": {
        "description": "The path angle can be modified This allows inverse versions of shapes e.g InvTriangle to be made by wrapping base Shape but rotating the path prior to drawing it Only the Path needs rotating the decoration takes the original angle The anchors are typically implemented by rotating the correspoding anchor of the wrapped Shape about its center",
        "hierarchy": "Wumpus Drawing Shapes Base",
        "module": "Wumpus.Drawing.Shapes.Base",
        "name": "updatePathAngle",
        "normalized": "(Radian-\u003eRadian)-\u003eShape a b-\u003eShape a b",
        "package": "wumpus-drawing",
        "partial": "Path Angle",
        "signature": "(Radian-\u003eRadian)-\u003eShape t u-\u003eShape t u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Circle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple shapes - rectangle, circle diamond, ellipse.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Circle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Circle.html",
        "fct-type": "module",
        "title": "Circle"
      },
      "index": {
        "description": "Simple shapes rectangle circle diamond ellipse",
        "hierarchy": "Wumpus Drawing Shapes Circle",
        "module": "Wumpus.Drawing.Shapes.Circle",
        "name": "Circle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Circle.html#t:Circle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Circle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Circle.html#Circle",
        "fct-type": "data",
        "title": "Circle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Circle",
        "module": "Wumpus.Drawing.Shapes.Circle",
        "name": "Circle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Circle.html#t:DCircle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Circle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Circle.html#DCircle",
        "fct-type": "type",
        "title": "DCircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Circle",
        "module": "Wumpus.Drawing.Shapes.Circle",
        "name": "DCircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DCircle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Circle.html#v:circle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecircle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e radius -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Circle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Shape Circle u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Circle.html#circle",
        "fct-type": "function",
        "title": "circle"
      },
      "index": {
        "description": "circle radius Shape",
        "hierarchy": "Wumpus Drawing Shapes Circle",
        "module": "Wumpus.Drawing.Shapes.Circle",
        "name": "circle",
        "normalized": "a-\u003eShape Circle a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eShape Circle u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Diamond.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDiamond (rhombus).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Diamond",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Diamond.html",
        "fct-type": "module",
        "title": "Diamond"
      },
      "index": {
        "description": "Diamond rhombus",
        "hierarchy": "Wumpus Drawing Shapes Diamond",
        "module": "Wumpus.Drawing.Shapes.Diamond",
        "name": "Diamond",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Diamond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Diamond.html#t:DDiamond",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Diamond",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Diamond.html#DDiamond",
        "fct-type": "type",
        "title": "DDiamond"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Diamond",
        "module": "Wumpus.Drawing.Shapes.Diamond",
        "name": "DDiamond",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DDiamond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Diamond.html#t:Diamond",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Diamond",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Diamond.html#Diamond",
        "fct-type": "data",
        "title": "Diamond"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Diamond",
        "module": "Wumpus.Drawing.Shapes.Diamond",
        "name": "Diamond",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Diamond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Diamond.html#v:diamond",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ediamond\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e half_width * half_height -\u003e shape \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote - args might change to tull_width and full_height...\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Diamond",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Shape Diamond u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Diamond.html#diamond",
        "fct-type": "function",
        "title": "diamond"
      },
      "index": {
        "description": "diamond half width half height shape Note args might change to tull width and full height",
        "hierarchy": "Wumpus Drawing Shapes Diamond",
        "module": "Wumpus.Drawing.Shapes.Diamond",
        "name": "diamond",
        "normalized": "a-\u003ea-\u003eShape Diamond a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eShape Diamond u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Ellipse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEllipse shape.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Ellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Ellipse.html",
        "fct-type": "module",
        "title": "Ellipse"
      },
      "index": {
        "description": "Ellipse shape",
        "hierarchy": "Wumpus Drawing Shapes Ellipse",
        "module": "Wumpus.Drawing.Shapes.Ellipse",
        "name": "Ellipse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Ellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Ellipse.html#t:DEllipse",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Ellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Ellipse.html#DEllipse",
        "fct-type": "type",
        "title": "DEllipse"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Ellipse",
        "module": "Wumpus.Drawing.Shapes.Ellipse",
        "name": "DEllipse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DEllipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Ellipse.html#t:Ellipse",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Ellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Ellipse.html#Ellipse",
        "fct-type": "data",
        "title": "Ellipse"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Ellipse",
        "module": "Wumpus.Drawing.Shapes.Ellipse",
        "name": "Ellipse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Ellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Ellipse.html#v:ellipse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eellipse\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e x_radii * y_radii -\u003e shape \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Ellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Shape Ellipse u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Ellipse.html#ellipse",
        "fct-type": "function",
        "title": "ellipse"
      },
      "index": {
        "description": "ellipse radii radii shape",
        "hierarchy": "Wumpus Drawing Shapes Ellipse",
        "module": "Wumpus.Drawing.Shapes.Ellipse",
        "name": "ellipse",
        "normalized": "a-\u003ea-\u003eShape Ellipse a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eShape Ellipse u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemicircle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInverse semicircle. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.InvSemicircle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvSemicircle.html",
        "fct-type": "module",
        "title": "InvSemicircle"
      },
      "index": {
        "description": "Inverse semicircle",
        "hierarchy": "Wumpus Drawing Shapes InvSemicircle",
        "module": "Wumpus.Drawing.Shapes.InvSemicircle",
        "name": "InvSemicircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Inv Semicircle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemicircle.html#t:DInvSemicircle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.InvSemicircle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvSemicircle.html#DInvSemicircle",
        "fct-type": "type",
        "title": "DInvSemicircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes InvSemicircle",
        "module": "Wumpus.Drawing.Shapes.InvSemicircle",
        "name": "DInvSemicircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DInv Semicircle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemicircle.html#t:InvSemicircle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.InvSemicircle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvSemicircle.html#InvSemicircle",
        "fct-type": "data",
        "title": "InvSemicircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes InvSemicircle",
        "module": "Wumpus.Drawing.Shapes.InvSemicircle",
        "name": "InvSemicircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Inv Semicircle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemicircle.html#v:invsemicircle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einvsemicircle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e radius -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.InvSemicircle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Shape InvSemicircle u",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvSemicircle.html#invsemicircle",
        "fct-type": "function",
        "title": "invsemicircle"
      },
      "index": {
        "description": "invsemicircle radius Shape",
        "hierarchy": "Wumpus Drawing Shapes InvSemicircle",
        "module": "Wumpus.Drawing.Shapes.InvSemicircle",
        "name": "invsemicircle",
        "normalized": "a-\u003eShape InvSemicircle a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eShape InvSemicircle u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemiellipse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInverse semiellipse. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.InvSemiellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvSemiellipse.html",
        "fct-type": "module",
        "title": "InvSemiellipse"
      },
      "index": {
        "description": "Inverse semiellipse",
        "hierarchy": "Wumpus Drawing Shapes InvSemiellipse",
        "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
        "name": "InvSemiellipse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Inv Semiellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemiellipse.html#t:DInvSemiellipse",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.InvSemiellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvSemiellipse.html#DInvSemiellipse",
        "fct-type": "type",
        "title": "DInvSemiellipse"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes InvSemiellipse",
        "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
        "name": "DInvSemiellipse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DInv Semiellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemiellipse.html#t:InvSemiellipse",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.InvSemiellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvSemiellipse.html#InvSemiellipse",
        "fct-type": "data",
        "title": "InvSemiellipse"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes InvSemiellipse",
        "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
        "name": "InvSemiellipse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Inv Semiellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvSemiellipse.html#v:invsemiellipse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einvsemiellipse\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e rx * ry -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.InvSemiellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Shape InvSemiellipse u",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvSemiellipse.html#invsemiellipse",
        "fct-type": "function",
        "title": "invsemiellipse"
      },
      "index": {
        "description": "invsemiellipse rx ry Shape",
        "hierarchy": "Wumpus Drawing Shapes InvSemiellipse",
        "module": "Wumpus.Drawing.Shapes.InvSemiellipse",
        "name": "invsemiellipse",
        "normalized": "a-\u003ea-\u003eShape InvSemiellipse a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eShape InvSemiellipse u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvTriangle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInverse version of the Triangle shape.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.InvTriangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvTriangle.html",
        "fct-type": "module",
        "title": "InvTriangle"
      },
      "index": {
        "description": "Inverse version of the Triangle shape",
        "hierarchy": "Wumpus Drawing Shapes InvTriangle",
        "module": "Wumpus.Drawing.Shapes.InvTriangle",
        "name": "InvTriangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Inv Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvTriangle.html#t:DInvTriangle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.InvTriangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvTriangle.html#DInvTriangle",
        "fct-type": "type",
        "title": "DInvTriangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes InvTriangle",
        "module": "Wumpus.Drawing.Shapes.InvTriangle",
        "name": "DInvTriangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DInv Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvTriangle.html#t:InvTriangle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.InvTriangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvTriangle.html#InvTriangle",
        "fct-type": "data",
        "title": "InvTriangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes InvTriangle",
        "module": "Wumpus.Drawing.Shapes.InvTriangle",
        "name": "InvTriangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Inv Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-InvTriangle.html#v:invtriangle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einvtriangle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e top_base_width * height -\u003e Triangle \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.InvTriangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Shape InvTriangle u",
        "fct-source": "src/Wumpus-Drawing-Shapes-InvTriangle.html#invtriangle",
        "fct-type": "function",
        "title": "invtriangle"
      },
      "index": {
        "description": "invtriangle top base width height Triangle",
        "hierarchy": "Wumpus Drawing Shapes InvTriangle",
        "module": "Wumpus.Drawing.Shapes.InvTriangle",
        "name": "invtriangle",
        "normalized": "a-\u003ea-\u003eShape InvTriangle a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eShape InvTriangle u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallelogram.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Parallelogram",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Parallelogram.html",
        "fct-type": "module",
        "title": "Parallelogram"
      },
      "index": {
        "description": "Parallelogram",
        "hierarchy": "Wumpus Drawing Shapes Parallelogram",
        "module": "Wumpus.Drawing.Shapes.Parallelogram",
        "name": "Parallelogram",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Parallelogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#t:DParallelogram",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Parallelogram",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Parallelogram.html#DParallelogram",
        "fct-type": "type",
        "title": "DParallelogram"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Parallelogram",
        "module": "Wumpus.Drawing.Shapes.Parallelogram",
        "name": "DParallelogram",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DParallelogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#t:Parallelogram",
      "description": {
        "fct-descr": "\u003cp\u003eA Paralleogram.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Parallelogram",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Parallelogram.html#Parallelogram",
        "fct-type": "data",
        "title": "Parallelogram"
      },
      "index": {
        "description": "Paralleogram",
        "hierarchy": "Wumpus Drawing Shapes Parallelogram",
        "module": "Wumpus.Drawing.Shapes.Parallelogram",
        "name": "Parallelogram",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Parallelogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#v:parallelogram",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eparallelogram\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e width * height * bottom_left_ang -\u003e Parallelogram \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Parallelogram",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e Shape Parallelogram u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Parallelogram.html#parallelogram",
        "fct-type": "function",
        "title": "parallelogram"
      },
      "index": {
        "description": "parallelogram width height bottom left ang Parallelogram",
        "hierarchy": "Wumpus Drawing Shapes Parallelogram",
        "module": "Wumpus.Drawing.Shapes.Parallelogram",
        "name": "parallelogram",
        "normalized": "a-\u003ea-\u003eRadian-\u003eShape Parallelogram a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eShape Parallelogram u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Parallelogram.html#v:zparallelogram",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezparallelogram\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e base_width * height -\u003e Parallelogram \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Parallelogram",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Shape Parallelogram u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Parallelogram.html#zparallelogram",
        "fct-type": "function",
        "title": "zparallelogram"
      },
      "index": {
        "description": "zparallelogram base width height Parallelogram",
        "hierarchy": "Wumpus Drawing Shapes Parallelogram",
        "module": "Wumpus.Drawing.Shapes.Parallelogram",
        "name": "zparallelogram",
        "normalized": "a-\u003ea-\u003eShape Parallelogram a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eShape Parallelogram u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Rectangle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRectangle shape.\n\u003c/p\u003e\u003cp\u003eNote - CardinalAnchor2 (northeast etc.) point to their radial \n positions (this is a change since earlier versions).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Rectangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Rectangle.html",
        "fct-type": "module",
        "title": "Rectangle"
      },
      "index": {
        "description": "Rectangle shape Note CardinalAnchor2 northeast etc point to their radial positions this is change since earlier versions",
        "hierarchy": "Wumpus Drawing Shapes Rectangle",
        "module": "Wumpus.Drawing.Shapes.Rectangle",
        "name": "Rectangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Rectangle.html#t:DRectangle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Rectangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Rectangle.html#DRectangle",
        "fct-type": "type",
        "title": "DRectangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Rectangle",
        "module": "Wumpus.Drawing.Shapes.Rectangle",
        "name": "DRectangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DRectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Rectangle.html#t:Rectangle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Rectangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Rectangle.html#Rectangle",
        "fct-type": "data",
        "title": "Rectangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Rectangle",
        "module": "Wumpus.Drawing.Shapes.Rectangle",
        "name": "Rectangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Rectangle.html#v:rectangle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erectangle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e width * height -\u003e shape \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Rectangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Shape Rectangle u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Rectangle.html#rectangle",
        "fct-type": "function",
        "title": "rectangle"
      },
      "index": {
        "description": "rectangle width height shape",
        "hierarchy": "Wumpus Drawing Shapes Rectangle",
        "module": "Wumpus.Drawing.Shapes.Rectangle",
        "name": "rectangle",
        "normalized": "a-\u003ea-\u003eShape Rectangle a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eShape Rectangle u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semicircle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemicircle. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Semicircle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Semicircle.html",
        "fct-type": "module",
        "title": "Semicircle"
      },
      "index": {
        "description": "Semicircle",
        "hierarchy": "Wumpus Drawing Shapes Semicircle",
        "module": "Wumpus.Drawing.Shapes.Semicircle",
        "name": "Semicircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Semicircle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semicircle.html#t:DSemicircle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Semicircle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Semicircle.html#DSemicircle",
        "fct-type": "type",
        "title": "DSemicircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Semicircle",
        "module": "Wumpus.Drawing.Shapes.Semicircle",
        "name": "DSemicircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DSemicircle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semicircle.html#t:Semicircle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Semicircle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Semicircle.html#Semicircle",
        "fct-type": "data",
        "title": "Semicircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Semicircle",
        "module": "Wumpus.Drawing.Shapes.Semicircle",
        "name": "Semicircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Semicircle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semicircle.html#v:semicircle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esemicircle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e radius -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Semicircle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e Shape Semicircle u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Semicircle.html#semicircle",
        "fct-type": "function",
        "title": "semicircle"
      },
      "index": {
        "description": "semicircle radius Shape",
        "hierarchy": "Wumpus Drawing Shapes Semicircle",
        "module": "Wumpus.Drawing.Shapes.Semicircle",
        "name": "semicircle",
        "normalized": "a-\u003eShape Semicircle a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eShape Semicircle u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semiellipse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemiellipse.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Semiellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Semiellipse.html",
        "fct-type": "module",
        "title": "Semiellipse"
      },
      "index": {
        "description": "Semiellipse",
        "hierarchy": "Wumpus Drawing Shapes Semiellipse",
        "module": "Wumpus.Drawing.Shapes.Semiellipse",
        "name": "Semiellipse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Semiellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semiellipse.html#t:DSemiellipse",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Semiellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Semiellipse.html#DSemiellipse",
        "fct-type": "type",
        "title": "DSemiellipse"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Semiellipse",
        "module": "Wumpus.Drawing.Shapes.Semiellipse",
        "name": "DSemiellipse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DSemiellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semiellipse.html#t:Semiellipse",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Semiellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Semiellipse.html#Semiellipse",
        "fct-type": "data",
        "title": "Semiellipse"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Semiellipse",
        "module": "Wumpus.Drawing.Shapes.Semiellipse",
        "name": "Semiellipse",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Semiellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Semiellipse.html#v:semiellipse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esemiellipse\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e x_radius * y_radius -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Semiellipse",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Shape Semiellipse u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Semiellipse.html#semiellipse",
        "fct-type": "function",
        "title": "semiellipse"
      },
      "index": {
        "description": "semiellipse radius radius Shape",
        "hierarchy": "Wumpus Drawing Shapes Semiellipse",
        "module": "Wumpus.Drawing.Shapes.Semiellipse",
        "name": "semiellipse",
        "normalized": "a-\u003ea-\u003eShape Semiellipse a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eShape Semiellipse u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Trapezium.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIsoceles Trapezium.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Trapezium",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Trapezium.html",
        "fct-type": "module",
        "title": "Trapezium"
      },
      "index": {
        "description": "Isoceles Trapezium",
        "hierarchy": "Wumpus Drawing Shapes Trapezium",
        "module": "Wumpus.Drawing.Shapes.Trapezium",
        "name": "Trapezium",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Trapezium",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Trapezium.html#t:DTrapezium",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Trapezium",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Trapezium.html#DTrapezium",
        "fct-type": "type",
        "title": "DTrapezium"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Trapezium",
        "module": "Wumpus.Drawing.Shapes.Trapezium",
        "name": "DTrapezium",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DTrapezium",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Trapezium.html#t:Trapezium",
      "description": {
        "fct-descr": "\u003cp\u003eA trapezium.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Trapezium",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Trapezium.html#Trapezium",
        "fct-type": "data",
        "title": "Trapezium"
      },
      "index": {
        "description": "trapezium",
        "hierarchy": "Wumpus Drawing Shapes Trapezium",
        "module": "Wumpus.Drawing.Shapes.Trapezium",
        "name": "Trapezium",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Trapezium",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Trapezium.html#v:trapezium",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etrapezium\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e base_width * height * bottom_left_ang * \n     bottom_right_ang -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Trapezium",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Radian -\u003e Shape Trapezium u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Trapezium.html#trapezium",
        "fct-type": "function",
        "title": "trapezium"
      },
      "index": {
        "description": "trapezium base width height bottom left ang bottom right ang Shape",
        "hierarchy": "Wumpus Drawing Shapes Trapezium",
        "module": "Wumpus.Drawing.Shapes.Trapezium",
        "name": "trapezium",
        "normalized": "a-\u003ea-\u003eRadian-\u003eShape Trapezium a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eRadian-\u003eShape Trapezium u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Triangle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIsosceles triangle.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Triangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes-Triangle.html",
        "fct-type": "module",
        "title": "Triangle"
      },
      "index": {
        "description": "Isosceles triangle",
        "hierarchy": "Wumpus Drawing Shapes Triangle",
        "module": "Wumpus.Drawing.Shapes.Triangle",
        "name": "Triangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Triangle.html#t:DTriangle",
      "description": {
        "fct-module": "Wumpus.Drawing.Shapes.Triangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Shapes-Triangle.html#DTriangle",
        "fct-type": "type",
        "title": "DTriangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Shapes Triangle",
        "module": "Wumpus.Drawing.Shapes.Triangle",
        "name": "DTriangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "DTriangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Triangle.html#t:Triangle",
      "description": {
        "fct-descr": "\u003cp\u003eAn isosceles triangle, oriented \u003cem\u003eupwards\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Triangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Shapes-Triangle.html#Triangle",
        "fct-type": "data",
        "title": "Triangle"
      },
      "index": {
        "description": "An isosceles triangle oriented upwards",
        "hierarchy": "Wumpus Drawing Shapes Triangle",
        "module": "Wumpus.Drawing.Shapes.Triangle",
        "name": "Triangle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes-Triangle.html#v:triangle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etriangle\u003c/a\u003e\u003c/code\u003e  : \u003ccode\u003e base_width * height -\u003e Shape \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Shapes.Triangle",
        "fct-package": "wumpus-drawing",
        "fct-signature": "u -\u003e u -\u003e Shape Triangle u",
        "fct-source": "src/Wumpus-Drawing-Shapes-Triangle.html#triangle",
        "fct-type": "function",
        "title": "triangle"
      },
      "index": {
        "description": "triangle base width height Shape",
        "hierarchy": "Wumpus Drawing Shapes Triangle",
        "module": "Wumpus.Drawing.Shapes.Triangle",
        "name": "triangle",
        "normalized": "a-\u003ea-\u003eShape Triangle a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "u-\u003eu-\u003eShape Triangle u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Shapes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShim module for Shapes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Shapes",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Shapes.html",
        "fct-type": "module",
        "title": "Shapes"
      },
      "index": {
        "description": "Shim module for Shapes",
        "hierarchy": "Wumpus Drawing Shapes",
        "module": "Wumpus.Drawing.Shapes",
        "name": "Shapes",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Shapes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFlexible text type, composable with \u003ccode\u003epretty-print\u003c/code\u003e style \n operators.\n\u003c/p\u003e\u003cp\u003eDirection zero (left-to-right) only.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html",
        "fct-type": "module",
        "title": "DocTextZero"
      },
      "index": {
        "description": "Flexible text type composable with pretty-print style operators Direction zero left-to-right only",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "DocTextZero",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Doc Text Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#t:Doc",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#Doc",
        "fct-type": "type",
        "title": "Doc"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "Doc",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#t:DocGraphic",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#DocGraphic",
        "fct-type": "type",
        "title": "DocGraphic"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "DocGraphic",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Doc Graphic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#t:GenDoc",
      "description": {
        "fct-descr": "\u003cp\u003eDoc type.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "data",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#GenDoc",
        "fct-type": "data",
        "title": "GenDoc"
      },
      "index": {
        "description": "Doc type",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "GenDoc",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Gen Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#t:GenDocGraphic",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "type",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#GenDocGraphic",
        "fct-type": "type",
        "title": "GenDocGraphic"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "GenDocGraphic",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Gen Doc Graphic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate two Docs separated with a space.\n\u003c/p\u003e\u003cp\u003e(infixr 6)\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDocGraphic st u -\u003e GenDocGraphic st u -\u003e GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Concatenate two Docs separated with space infixr",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "GenDocGraphic a b-\u003eGenDocGraphic a b-\u003eGenDocGraphic a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "GenDocGraphic st u-\u003eGenDocGraphic st u-\u003eGenDocGraphic st u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:blank",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#blank",
        "fct-type": "function",
        "title": "blank"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "blank",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:bold",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDoc st u a -\u003e GenDoc st u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#bold",
        "fct-type": "function",
        "title": "bold"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "bold",
        "normalized": "GenDoc a b c-\u003eGenDoc a b c",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "GenDoc st u a-\u003eGenDoc st u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:boldItalic",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDoc st u a -\u003e GenDoc st u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#boldItalic",
        "fct-type": "function",
        "title": "boldItalic"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "boldItalic",
        "normalized": "GenDoc a b c-\u003eGenDoc a b c",
        "package": "wumpus-drawing",
        "partial": "Italic",
        "signature": "GenDoc st u a-\u003eGenDoc st u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:embedPosObject",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenPosObject st u a -\u003e GenDoc st u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#embedPosObject",
        "fct-type": "function",
        "title": "embedPosObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "embedPosObject",
        "normalized": "GenPosObject a b c-\u003eGenDoc a b c",
        "package": "wumpus-drawing",
        "partial": "Pos Object",
        "signature": "GenPosObject st u a-\u003eGenDoc st u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:escaped",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "EscapedText -\u003e GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#escaped",
        "fct-type": "function",
        "title": "escaped"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "escaped",
        "normalized": "EscapedText-\u003eGenDocGraphic a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "EscapedText-\u003eGenDocGraphic st u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:ffloat",
      "description": {
        "fct-descr": "\u003cp\u003eThis is equivalent to \u003ccode\u003e\u003ca\u003eshowFFloat\u003c/a\u003e\u003c/code\u003e in the Numeric module.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshowFFloat\u003c/a\u003e\u003c/code\u003e, the answer is rendered to supplied \n precision. \u003ccode\u003eNothing\u003c/code\u003e indicated full precision.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Maybe Int -\u003e a -\u003e GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#ffloat",
        "fct-type": "function",
        "title": "ffloat"
      },
      "index": {
        "description": "This is equivalent to showFFloat in the Numeric module Like showFFloat the answer is rendered to supplied precision Nothing indicated full precision",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "ffloat",
        "normalized": "Maybe Int-\u003ea-\u003eGenDocGraphic b c",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Maybe Int-\u003ea-\u003eGenDocGraphic st u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:float",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialized version of \u003ccode\u003e\u003ca\u003effloat\u003c/a\u003e\u003c/code\u003e - the answer is always \n rendered at \"full precision\".\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "a -\u003e GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#float",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "Specialized version of ffloat the answer is always rendered at full precision",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "float",
        "normalized": "a-\u003eGenDocGraphic b c",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "a-\u003eGenDocGraphic st u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:highlight",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RGBi -\u003e GenDoc st u a -\u003e GenDoc st u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#highlight",
        "fct-type": "function",
        "title": "highlight"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "highlight",
        "normalized": "RGBi-\u003eGenDoc a b c-\u003eGenDoc a b c",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "RGBi-\u003eGenDoc st u a-\u003eGenDoc st u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:int",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Int -\u003e GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "int",
        "normalized": "Int-\u003eGenDocGraphic a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Int-\u003eGenDocGraphic st u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:integer",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Integer -\u003e GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#integer",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "integer",
        "normalized": "Integer-\u003eGenDocGraphic a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Integer-\u003eGenDocGraphic st u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:italic",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDoc st u a -\u003e GenDoc st u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#italic",
        "fct-type": "function",
        "title": "italic"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "italic",
        "normalized": "GenDoc a b c-\u003eGenDoc a b c",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "GenDoc st u a-\u003eGenDoc st u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:monospace",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "EscapedChar -\u003e EscapedText -\u003e GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#monospace",
        "fct-type": "function",
        "title": "monospace"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "monospace",
        "normalized": "EscapedChar-\u003eEscapedText-\u003eGenDocGraphic a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "EscapedChar-\u003eEscapedText-\u003eGenDocGraphic st u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:runGenDoc",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "VAlign -\u003e FontFamily -\u003e GenDoc st u a -\u003e GenPosObject st u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#runGenDoc",
        "fct-type": "function",
        "title": "runGenDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "runGenDoc",
        "normalized": "VAlign-\u003eFontFamily-\u003eGenDoc a b c-\u003eGenPosObject a b c",
        "package": "wumpus-drawing",
        "partial": "Gen Doc",
        "signature": "VAlign-\u003eFontFamily-\u003eGenDoc st u a-\u003eGenPosObject st u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:space",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "space",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:strikethrough",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDoc st u a -\u003e GenDoc st u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#strikethrough",
        "fct-type": "function",
        "title": "strikethrough"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "strikethrough",
        "normalized": "GenDoc a b c-\u003eGenDoc a b c",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "GenDoc st u a-\u003eGenDoc st u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:string",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "String -\u003e GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#string",
        "fct-type": "function",
        "title": "string"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "string",
        "normalized": "String-\u003eGenDocGraphic a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "String-\u003eGenDocGraphic st u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-DocTextZero.html#v:underline",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDoc st u a -\u003e GenDoc st u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-DocTextZero.html#underline",
        "fct-type": "function",
        "title": "underline"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base DocTextZero",
        "module": "Wumpus.Drawing.Text.Base.DocTextZero",
        "name": "underline",
        "normalized": "GenDoc a b c-\u003eGenDoc a b c",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "GenDoc st u a-\u003eGenDoc st u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnnotation labels.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html",
        "fct-type": "module",
        "title": "Label"
      },
      "index": {
        "description": "Annotation labels",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "Label",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:above_left_of",
      "description": {
        "fct-descr": "\u003cp\u003eValue is 1 snap move up, 1 snap move left.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "a -\u003e Query u (Anchor u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#above_left_of",
        "fct-type": "function",
        "title": "above_left_of"
      },
      "index": {
        "description": "Value is snap move up snap move left This function should be considered obsolete pending re-think",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "above_left_of",
        "normalized": "a-\u003eQuery b(Anchor b)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "a-\u003eQuery u(Anchor u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:above_right_of",
      "description": {
        "fct-descr": "\u003cp\u003eValue is 1 snap move up, 1 snap move right.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "a -\u003e Query u (Anchor u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#above_right_of",
        "fct-type": "function",
        "title": "above_right_of"
      },
      "index": {
        "description": "Value is snap move up snap move right This function should be considered obsolete pending re-think",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "above_right_of",
        "normalized": "a-\u003eQuery b(Anchor b)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "a-\u003eQuery u(Anchor u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:below_left_of",
      "description": {
        "fct-descr": "\u003cp\u003eValue is 1 snap move down, 1 snap move left.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "a -\u003e Query u (Anchor u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#below_left_of",
        "fct-type": "function",
        "title": "below_left_of"
      },
      "index": {
        "description": "Value is snap move down snap move left This function should be considered obsolete pending re-think",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "below_left_of",
        "normalized": "a-\u003eQuery b(Anchor b)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "a-\u003eQuery u(Anchor u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:below_right_of",
      "description": {
        "fct-descr": "\u003cp\u003eValue is 1 snap move below, 1 snap move right.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "a -\u003e Query u (Anchor u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#below_right_of",
        "fct-type": "function",
        "title": "below_right_of"
      },
      "index": {
        "description": "Value is snap move below snap move right This function should be considered obsolete pending re-think",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "below_right_of",
        "normalized": "a-\u003eQuery b(Anchor b)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "a-\u003eQuery u(Anchor u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:centerRelative",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute units.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "(Int, Int) -\u003e a -\u003e Query u (Anchor u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#centerRelative",
        "fct-type": "function",
        "title": "centerRelative"
      },
      "index": {
        "description": "Absolute units",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "centerRelative",
        "normalized": "(Int,Int)-\u003ea-\u003eQuery b(Anchor b)",
        "package": "wumpus-drawing",
        "partial": "Relative",
        "signature": "(Int,Int)-\u003ea-\u003eQuery u(Anchor u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:connectorPathLabel",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "(AbsPath u -\u003e Point2 u) -\u003e RectAddress -\u003e BoundedLocRectGraphic u -\u003e Image u (AbsPath u) -\u003e Image u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#connectorPathLabel",
        "fct-type": "function",
        "title": "connectorPathLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "connectorPathLabel",
        "normalized": "(AbsPath a-\u003ePoint a)-\u003eRectAddress-\u003eBoundedLocRectGraphic a-\u003eImage a(AbsPath a)-\u003eImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "Path Label",
        "signature": "(AbsPath u-\u003ePoint u)-\u003eRectAddress-\u003eBoundedLocRectGraphic u-\u003eImage u(AbsPath u)-\u003eImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_above",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#label_above",
        "fct-type": "function",
        "title": "label_above"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "label_above",
        "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_atend_of",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RectAddress -\u003e BoundedLocRectGraphic u -\u003e Image u (AbsPath u) -\u003e Image u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#label_atend_of",
        "fct-type": "function",
        "title": "label_atend_of"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "label_atend_of",
        "normalized": "RectAddress-\u003eBoundedLocRectGraphic a-\u003eImage a(AbsPath a)-\u003eImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "RectAddress-\u003eBoundedLocRectGraphic u-\u003eImage u(AbsPath u)-\u003eImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_atstart_of",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RectAddress -\u003e BoundedLocRectGraphic u -\u003e Image u (AbsPath u) -\u003e Image u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#label_atstart_of",
        "fct-type": "function",
        "title": "label_atstart_of"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "label_atstart_of",
        "normalized": "RectAddress-\u003eBoundedLocRectGraphic a-\u003eImage a(AbsPath a)-\u003eImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "RectAddress-\u003eBoundedLocRectGraphic u-\u003eImage u(AbsPath u)-\u003eImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_below",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#label_below",
        "fct-type": "function",
        "title": "label_below"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "label_below",
        "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_center_of",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#label_center_of",
        "fct-type": "function",
        "title": "label_center_of"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "label_center_of",
        "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_left_of",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#label_left_of",
        "fct-type": "function",
        "title": "label_left_of"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "label_left_of",
        "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_midway_of",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RectAddress -\u003e BoundedLocRectGraphic u -\u003e Image u (AbsPath u) -\u003e Image u (AbsPath u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#label_midway_of",
        "fct-type": "function",
        "title": "label_midway_of"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "label_midway_of",
        "normalized": "RectAddress-\u003eBoundedLocRectGraphic a-\u003eImage a(AbsPath a)-\u003eImage a(AbsPath a)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "RectAddress-\u003eBoundedLocRectGraphic u-\u003eImage u(AbsPath u)-\u003eImage u(AbsPath u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:label_right_of",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "BoundedLocRectGraphic u -\u003e LocImage u a -\u003e LocImage u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#label_right_of",
        "fct-type": "function",
        "title": "label_right_of"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "label_right_of",
        "normalized": "BoundedLocRectGraphic a-\u003eLocImage a b-\u003eLocImage a b",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "BoundedLocRectGraphic u-\u003eLocImage u a-\u003eLocImage u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:left_of",
      "description": {
        "fct-descr": "\u003cp\u003eValue is 1 snap move left.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "a -\u003e Query u (Anchor u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#left_of",
        "fct-type": "function",
        "title": "left_of"
      },
      "index": {
        "description": "Value is snap move left This function should be considered obsolete pending re-think",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "left_of",
        "normalized": "a-\u003eQuery b(Anchor b)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "a-\u003eQuery u(Anchor u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:locImageLabel",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "(a -\u003e Anchor u) -\u003e RectAddress -\u003e (RectAddress -\u003e LocImage u (BoundingBox u)) -\u003e LocImage u a -\u003e LocImage u a",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#locImageLabel",
        "fct-type": "function",
        "title": "locImageLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "locImageLabel",
        "normalized": "(a-\u003eAnchor b)-\u003eRectAddress-\u003e(RectAddress-\u003eLocImage b(BoundingBox b))-\u003eLocImage b a-\u003eLocImage b a",
        "package": "wumpus-drawing",
        "partial": "Image Label",
        "signature": "(a-\u003eAnchor u)-\u003eRectAddress-\u003e(RectAddress-\u003eLocImage u(BoundingBox u))-\u003eLocImage u a-\u003eLocImage u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-Base-Label.html#v:right_of",
      "description": {
        "fct-descr": "\u003cp\u003eValue is 1 snap unit right.\n\u003c/p\u003e\u003cp\u003eThis function should be considered obsolete, pending a \n re-think.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.Base.Label",
        "fct-package": "wumpus-drawing",
        "fct-signature": "a -\u003e Query u (Anchor u)",
        "fct-source": "src/Wumpus-Drawing-Text-Base-Label.html#right_of",
        "fct-type": "function",
        "title": "right_of"
      },
      "index": {
        "description": "Value is snap unit right This function should be considered obsolete pending re-think",
        "hierarchy": "Wumpus Drawing Text Base Label",
        "module": "Wumpus.Drawing.Text.Base.Label",
        "name": "right_of",
        "normalized": "a-\u003eQuery b(Anchor b)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "a-\u003eQuery u(Anchor u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DirectionZero.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon import module for the Writing Direction 0 modules\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Text.DirectionZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Text-DirectionZero.html",
        "fct-type": "module",
        "title": "DirectionZero"
      },
      "index": {
        "description": "Common import module for the Writing Direction modules",
        "hierarchy": "Wumpus Drawing Text DirectionZero",
        "module": "Wumpus.Drawing.Text.DirectionZero",
        "name": "DirectionZero",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Direction Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DirectionZero.html#v:multilineText",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.DirectionZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "VAlign -\u003e RectAddress -\u003e String -\u003e BoundedLocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Text-DirectionZero.html#multilineText",
        "fct-type": "function",
        "title": "multilineText"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text DirectionZero",
        "module": "Wumpus.Drawing.Text.DirectionZero",
        "name": "multilineText",
        "normalized": "VAlign-\u003eRectAddress-\u003eString-\u003eBoundedLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "Text",
        "signature": "VAlign-\u003eRectAddress-\u003eString-\u003eBoundedLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DirectionZero.html#v:rtextline",
      "description": {
        "fct-descr": "\u003cp\u003eNote - this is likely to be moved too...\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.DirectionZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "Radian -\u003e RectAddress -\u003e String -\u003e BoundedLocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Text-DirectionZero.html#rtextline",
        "fct-type": "function",
        "title": "rtextline"
      },
      "index": {
        "description": "Note this is likely to be moved too",
        "hierarchy": "Wumpus Drawing Text DirectionZero",
        "module": "Wumpus.Drawing.Text.DirectionZero",
        "name": "rtextline",
        "normalized": "Radian-\u003eRectAddress-\u003eString-\u003eBoundedLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "Radian-\u003eRectAddress-\u003eString-\u003eBoundedLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DirectionZero.html#v:textline",
      "description": {
        "fct-descr": "\u003cp\u003eNote - this is likely to be moved...\n\u003c/p\u003e\u003cp\u003eAlso, reversed argument order would be more convenient as \n RectAddress always short but String could be long. \n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.DirectionZero",
        "fct-package": "wumpus-drawing",
        "fct-signature": "RectAddress -\u003e String -\u003e BoundedLocGraphic u",
        "fct-source": "src/Wumpus-Drawing-Text-DirectionZero.html#textline",
        "fct-type": "function",
        "title": "textline"
      },
      "index": {
        "description": "Note this is likely to be moved Also reversed argument order would be more convenient as RectAddress always short but String could be long",
        "hierarchy": "Wumpus Drawing Text DirectionZero",
        "module": "Wumpus.Drawing.Text.DirectionZero",
        "name": "textline",
        "normalized": "RectAddress-\u003eString-\u003eBoundedLocGraphic a",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "RectAddress-\u003eString-\u003eBoundedLocGraphic u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSymbols - redefined Basis.Symbols.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Text.DocSymbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Text-DocSymbols.html",
        "fct-type": "module",
        "title": "DocSymbols"
      },
      "index": {
        "description": "Symbols redefined Basis.Symbols",
        "hierarchy": "Wumpus Drawing Text DocSymbols",
        "module": "Wumpus.Drawing.Text.DocSymbols",
        "name": "DocSymbols",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Doc Symbols",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:empty_box",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.DocSymbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-DocSymbols.html#empty_box",
        "fct-type": "function",
        "title": "empty_box"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text DocSymbols",
        "module": "Wumpus.Drawing.Text.DocSymbols",
        "name": "empty_box",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:left_slice",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.DocSymbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-DocSymbols.html#left_slice",
        "fct-type": "function",
        "title": "left_slice"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text DocSymbols",
        "module": "Wumpus.Drawing.Text.DocSymbols",
        "name": "left_slice",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:ocircle",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.DocSymbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-DocSymbols.html#ocircle",
        "fct-type": "function",
        "title": "ocircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text DocSymbols",
        "module": "Wumpus.Drawing.Text.DocSymbols",
        "name": "ocircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:right_slice",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.DocSymbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-DocSymbols.html#right_slice",
        "fct-type": "function",
        "title": "right_slice"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text DocSymbols",
        "module": "Wumpus.Drawing.Text.DocSymbols",
        "name": "right_slice",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-DocSymbols.html#v:small_ocircle",
      "description": {
        "fct-module": "Wumpus.Drawing.Text.DocSymbols",
        "fct-package": "wumpus-drawing",
        "fct-signature": "GenDocGraphic st u",
        "fct-source": "src/Wumpus-Drawing-Text-DocSymbols.html#small_ocircle",
        "fct-type": "function",
        "title": "small_ocircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Wumpus Drawing Text DocSymbols",
        "module": "Wumpus.Drawing.Text.DocSymbols",
        "name": "small_ocircle",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSafe to use \"Core 13\" fonts that are expected to be present\n for any PostScript interpreter.\n\u003c/p\u003e\u003cp\u003eNote - regrettably Symbol is not safe to use for SVG.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html",
        "fct-type": "module",
        "title": "StandardFontDefs"
      },
      "index": {
        "description": "Safe to use Core fonts that are expected to be present for any PostScript interpreter Note regrettably Symbol is not safe to use for SVG",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "StandardFontDefs",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Standard Font Defs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier",
      "description": {
        "fct-descr": "\u003cp\u003eCourier\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier",
        "fct-type": "function",
        "title": "courier"
      },
      "index": {
        "description": "Courier",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "courier",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier_bold",
      "description": {
        "fct-descr": "\u003cp\u003eCourier Bold\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier_bold",
        "fct-type": "function",
        "title": "courier_bold"
      },
      "index": {
        "description": "Courier Bold",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "courier_bold",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier_bold_oblique",
      "description": {
        "fct-descr": "\u003cp\u003eCourier Bold Oblique\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier_bold_oblique",
        "fct-type": "function",
        "title": "courier_bold_oblique"
      },
      "index": {
        "description": "Courier Bold Oblique",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "courier_bold_oblique",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier_family",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFontFamily\u003c/a\u003e\u003c/code\u003e definition for Courier.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontFamily",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier_family",
        "fct-type": "function",
        "title": "courier_family"
      },
      "index": {
        "description": "FontFamily definition for Courier",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "courier_family",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:courier_oblique",
      "description": {
        "fct-descr": "\u003cp\u003eCourier Oblique\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#courier_oblique",
        "fct-type": "function",
        "title": "courier_oblique"
      },
      "index": {
        "description": "Courier Oblique",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "courier_oblique",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica",
      "description": {
        "fct-descr": "\u003cp\u003eHelvetica regular weight.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica",
        "fct-type": "function",
        "title": "helvetica"
      },
      "index": {
        "description": "Helvetica regular weight",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "helvetica",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica_bold",
      "description": {
        "fct-descr": "\u003cp\u003eHelvetica Bold\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica_bold",
        "fct-type": "function",
        "title": "helvetica_bold"
      },
      "index": {
        "description": "Helvetica Bold",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "helvetica_bold",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica_bold_oblique",
      "description": {
        "fct-descr": "\u003cp\u003eHelvetica Bold Oblique\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica_bold_oblique",
        "fct-type": "function",
        "title": "helvetica_bold_oblique"
      },
      "index": {
        "description": "Helvetica Bold Oblique",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "helvetica_bold_oblique",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica_family",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFontFamily\u003c/a\u003e\u003c/code\u003e definition for Helvetica.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontFamily",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica_family",
        "fct-type": "function",
        "title": "helvetica_family"
      },
      "index": {
        "description": "FontFamily definition for Helvetica",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "helvetica_family",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:helvetica_oblique",
      "description": {
        "fct-descr": "\u003cp\u003eHelvetica Oblique\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#helvetica_oblique",
        "fct-type": "function",
        "title": "helvetica_oblique"
      },
      "index": {
        "description": "Helvetica Oblique",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "helvetica_oblique",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:symbol",
      "description": {
        "fct-descr": "\u003cp\u003eSymbol\n\u003c/p\u003e\u003cp\u003eNote - Symbol is intentionally not supported for SVG by some \n renderers (Firefox). Chrome is fine, but the use of symbol \n should be still be avoided for web graphics.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#symbol",
        "fct-type": "function",
        "title": "symbol"
      },
      "index": {
        "description": "Symbol Note Symbol is intentionally not supported for SVG by some renderers Firefox Chrome is fine but the use of symbol should be still be avoided for web graphics",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "symbol",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_bold",
      "description": {
        "fct-descr": "\u003cp\u003eTimes Bold\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_bold",
        "fct-type": "function",
        "title": "times_bold"
      },
      "index": {
        "description": "Times Bold",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "times_bold",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_bold_italic",
      "description": {
        "fct-descr": "\u003cp\u003eTimes Bold Italic\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_bold_italic",
        "fct-type": "function",
        "title": "times_bold_italic"
      },
      "index": {
        "description": "Times Bold Italic",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "times_bold_italic",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_italic",
      "description": {
        "fct-descr": "\u003cp\u003eTimes Italic\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_italic",
        "fct-type": "function",
        "title": "times_italic"
      },
      "index": {
        "description": "Times Italic",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "times_italic",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_roman",
      "description": {
        "fct-descr": "\u003cp\u003eTimes-Roman\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontDef",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_roman",
        "fct-type": "function",
        "title": "times_roman"
      },
      "index": {
        "description": "Times-Roman",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "times_roman",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-Text-StandardFontDefs.html#v:times_roman_family",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFontFamily\u003c/a\u003e\u003c/code\u003e definition for Times-Roman.\n\u003c/p\u003e",
        "fct-module": "Wumpus.Drawing.Text.StandardFontDefs",
        "fct-package": "wumpus-drawing",
        "fct-signature": "FontFamily",
        "fct-source": "src/Wumpus-Drawing-Text-StandardFontDefs.html#times_roman_family",
        "fct-type": "function",
        "title": "times_roman_family"
      },
      "index": {
        "description": "FontFamily definition for Times-Roman",
        "hierarchy": "Wumpus Drawing Text StandardFontDefs",
        "module": "Wumpus.Drawing.Text.StandardFontDefs",
        "name": "times_roman_family",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-VersionNumber.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion number\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Wumpus.Drawing.VersionNumber",
        "fct-package": "wumpus-drawing",
        "fct-signature": "module",
        "fct-source": "src/Wumpus-Drawing-VersionNumber.html",
        "fct-type": "module",
        "title": "VersionNumber"
      },
      "index": {
        "description": "Version number",
        "hierarchy": "Wumpus Drawing VersionNumber",
        "module": "Wumpus.Drawing.VersionNumber",
        "name": "VersionNumber",
        "normalized": "",
        "package": "wumpus-drawing",
        "partial": "Version Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wumpus-drawing/docs/Wumpus-Drawing-VersionNumber.html#v:wumpus_drawing_version",
      "description": {
        "fct-descr": "\u003cp\u003eVersion number\n\u003c/p\u003e\u003cpre\u003e (0,9,0)\n\u003c/pre\u003e",
        "fct-module": "Wumpus.Drawing.VersionNumber",
        "fct-package": "wumpus-drawing",
        "fct-signature": "(Int, Int, Int)",
        "fct-source": "src/Wumpus-Drawing-VersionNumber.html#wumpus_drawing_version",
        "fct-type": "function",
        "title": "wumpus_drawing_version"
      },
      "index": {
        "description": "Version number",
        "hierarchy": "Wumpus Drawing VersionNumber",
        "module": "Wumpus.Drawing.VersionNumber",
        "name": "wumpus_drawing_version",
        "normalized": "(Int,Int,Int)",
        "package": "wumpus-drawing",
        "partial": "",
        "signature": "(Int,Int,Int)"
      }
    }
  }
]