[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Approximate",
        "fct-package": "cubicbezier",
        "fct-signature": "module",
        "fct-source": "src/Geom2D-CubicBezier-Approximate.html",
        "fct-type": "module",
        "title": "Approximate"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Approximate",
        "module": "Geom2D.CubicBezier.Approximate",
        "name": "Approximate",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Approximate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#v:approximateCurve",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eapproximateCurve b pts eps\u003c/code\u003e finds the least squares fit of a bezier\n curve to the points \u003ccode\u003epts\u003c/code\u003e.  The resulting bezier has the same first\n and last control point as the curve \u003ccode\u003eb\u003c/code\u003e, and have tangents colinear with \u003ccode\u003eb\u003c/code\u003e.\n return the curve, the parameter with maximum error, and maximum error.\n Calculate to withing eps tolerance.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Approximate",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e [Point] -\u003e Double -\u003e (CubicBezier, Double, Double)",
        "fct-source": "src/Geom2D-CubicBezier-Approximate.html#approximateCurve",
        "fct-type": "function",
        "title": "approximateCurve"
      },
      "index": {
        "description": "approximateCurve pts eps finds the least squares fit of bezier curve to the points pts The resulting bezier has the same first and last control point as the curve and have tangents colinear with return the curve the parameter with maximum error and maximum error Calculate to withing eps tolerance",
        "hierarchy": "Geom2D CubicBezier Approximate",
        "module": "Geom2D.CubicBezier.Approximate",
        "name": "approximateCurve",
        "normalized": "CubicBezier-\u003e[Point]-\u003eDouble-\u003e(CubicBezier,Double,Double)",
        "package": "cubicbezier",
        "partial": "Curve",
        "signature": "CubicBezier-\u003e[Point]-\u003eDouble-\u003e(CubicBezier,Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#v:approximateCurveWithParams",
      "description": {
        "fct-descr": "\u003cp\u003eLike approximateCurve, but also takes an initial guess of the\n parameters closest to the points.  This might be faster if a good\n guess can be made.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Approximate",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e [Point] -\u003e [Double] -\u003e Double -\u003e (CubicBezier, Double, Double)",
        "fct-source": "src/Geom2D-CubicBezier-Approximate.html#approximateCurveWithParams",
        "fct-type": "function",
        "title": "approximateCurveWithParams"
      },
      "index": {
        "description": "Like approximateCurve but also takes an initial guess of the parameters closest to the points This might be faster if good guess can be made",
        "hierarchy": "Geom2D CubicBezier Approximate",
        "module": "Geom2D.CubicBezier.Approximate",
        "name": "approximateCurveWithParams",
        "normalized": "CubicBezier-\u003e[Point]-\u003e[Double]-\u003eDouble-\u003e(CubicBezier,Double,Double)",
        "package": "cubicbezier",
        "partial": "Curve With Params",
        "signature": "CubicBezier-\u003e[Point]-\u003e[Double]-\u003eDouble-\u003e(CubicBezier,Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#v:approximatePath",
      "description": {
        "fct-descr": "\u003cp\u003eApproximate a function with piecewise cubic bezier splines using\n a least-squares fit, within the given tolerance.  Each subcurve is\n approximated by using a finite number of samples.  It is recommended\n to avoid changes in direction by subdividing the original function\n at points of inflection.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Approximate",
        "fct-package": "cubicbezier",
        "fct-signature": "(Double -\u003e (Point, Point))-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e [CubicBezier]",
        "fct-type": "function",
        "title": "approximatePath"
      },
      "index": {
        "description": "Approximate function with piecewise cubic bezier splines using least-squares fit within the given tolerance Each subcurve is approximated by using finite number of samples It is recommended to avoid changes in direction by subdividing the original function at points of inflection",
        "hierarchy": "Geom2D CubicBezier Approximate",
        "module": "Geom2D.CubicBezier.Approximate",
        "name": "approximatePath",
        "normalized": "(Double-\u003e(Point,Point))-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
        "package": "cubicbezier",
        "partial": "Path",
        "signature": "(Double-\u003e(Point,Point))-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[CubicBezier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#v:approximatePathMax",
      "description": {
        "fct-descr": "\u003cp\u003eLike approximatePath, but limit the number of subcurves.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Approximate",
        "fct-package": "cubicbezier",
        "fct-signature": "Int-\u003e (Double -\u003e (Point, Point))-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e [CubicBezier]",
        "fct-type": "function",
        "title": "approximatePathMax"
      },
      "index": {
        "description": "Like approximatePath but limit the number of subcurves",
        "hierarchy": "Geom2D CubicBezier Approximate",
        "module": "Geom2D.CubicBezier.Approximate",
        "name": "approximatePathMax",
        "normalized": "Int-\u003e(Double-\u003e(Point,Point))-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
        "package": "cubicbezier",
        "partial": "Path Max",
        "signature": "Int-\u003e(Double-\u003e(Point,Point))-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[CubicBezier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "module",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#t:AffineTransform",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "class",
        "fct-source": "src/Geom2D.html#AffineTransform",
        "fct-type": "class",
        "title": "AffineTransform"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "AffineTransform",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Affine Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#t:CubicBezier",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
        "fct-type": "data",
        "title": "CubicBezier"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "CubicBezier",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Cubic Bezier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#t:Path",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#Path",
        "fct-type": "data",
        "title": "Path"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "Path",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#t:PathJoin",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#PathJoin",
        "fct-type": "data",
        "title": "PathJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "PathJoin",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Path Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:ClosedPath",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "ClosedPath [(Point, PathJoin)]",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#Path",
        "fct-type": "function",
        "title": "ClosedPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "ClosedPath",
        "normalized": "ClosedPath[(Point,PathJoin)]",
        "package": "cubicbezier",
        "partial": "Closed Path",
        "signature": "ClosedPath[(Point,PathJoin)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:CubicBezier",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
        "fct-type": "function",
        "title": "CubicBezier"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "CubicBezier",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Cubic Bezier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:JoinCurve",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "JoinCurve Point Point",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#PathJoin",
        "fct-type": "function",
        "title": "JoinCurve"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "JoinCurve",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Join Curve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:JoinLine",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "JoinLine",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#PathJoin",
        "fct-type": "function",
        "title": "JoinLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "JoinLine",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Join Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:OpenPath",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "OpenPath [(Point, PathJoin)] Point",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#Path",
        "fct-type": "function",
        "title": "OpenPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "OpenPath",
        "normalized": "OpenPath[(Point,PathJoin)]Point",
        "package": "cubicbezier",
        "partial": "Open Path",
        "signature": "OpenPath[(Point,PathJoin)]Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:arcLength",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e Double -\u003e Double",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#arcLength",
        "fct-type": "function",
        "title": "arcLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "arcLength",
        "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Length",
        "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:arcLengthParam",
      "description": {
        "fct-descr": "\u003cp\u003earcLengthParam c len tol finds the parameter where the curve c has the arclength len,\n within tolerance tol.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e Double -\u003e Double",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#arcLengthParam",
        "fct-type": "function",
        "title": "arcLengthParam"
      },
      "index": {
        "description": "arcLengthParam len tol finds the parameter where the curve has the arclength len within tolerance tol",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "arcLengthParam",
        "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Length Param",
        "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierC0",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "Point",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
        "fct-type": "function",
        "title": "bezierC0"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierC0",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierC1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "Point",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
        "fct-type": "function",
        "title": "bezierC1"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierC1",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierC2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "Point",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
        "fct-type": "function",
        "title": "bezierC2"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierC2",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierC3",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "Point",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
        "fct-type": "function",
        "title": "bezierC3"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierC3",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierHoriz",
      "description": {
        "fct-descr": "\u003cp\u003eFind the parameter where the bezier curve is horizontal.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e [Double]",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#bezierHoriz",
        "fct-type": "function",
        "title": "bezierHoriz"
      },
      "index": {
        "description": "Find the parameter where the bezier curve is horizontal",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierHoriz",
        "normalized": "CubicBezier-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Horiz",
        "signature": "CubicBezier-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierParam",
      "description": {
        "fct-descr": "\u003cp\u003eReturn True if the param lies on the curve, iff it's in the interval \u003ccode\u003e[0, 1]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "Double -\u003e Bool",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#bezierParam",
        "fct-type": "function",
        "title": "bezierParam"
      },
      "index": {
        "description": "Return True if the param lies on the curve iff it in the interval",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierParam",
        "normalized": "Double-\u003eBool",
        "package": "cubicbezier",
        "partial": "Param",
        "signature": "Double-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierParamTolerance",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a tolerance from the codomain to the domain of the bezier curve.\n Should be good enough, but may not hold for high very tolerance values.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e Double",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#bezierParamTolerance",
        "fct-type": "function",
        "title": "bezierParamTolerance"
      },
      "index": {
        "description": "Convert tolerance from the codomain to the domain of the bezier curve Should be good enough but may not hold for high very tolerance values",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierParamTolerance",
        "normalized": "CubicBezier-\u003eDouble-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Param Tolerance",
        "signature": "CubicBezier-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierSubsegment",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the subsegment between the two parameters.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e Double -\u003e CubicBezier",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#bezierSubsegment",
        "fct-type": "function",
        "title": "bezierSubsegment"
      },
      "index": {
        "description": "Return the subsegment between the two parameters",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierSubsegment",
        "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003eCubicBezier",
        "package": "cubicbezier",
        "partial": "Subsegment",
        "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003eCubicBezier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierToBernstein",
      "description": {
        "fct-descr": "\u003cp\u003eGive the bernstein polynomial for each coordinate.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e (BernsteinPoly, BernsteinPoly)",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#bezierToBernstein",
        "fct-type": "function",
        "title": "bezierToBernstein"
      },
      "index": {
        "description": "Give the bernstein polynomial for each coordinate",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierToBernstein",
        "normalized": "CubicBezier-\u003e(BernsteinPoly,BernsteinPoly)",
        "package": "cubicbezier",
        "partial": "To Bernstein",
        "signature": "CubicBezier-\u003e(BernsteinPoly,BernsteinPoly)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierVert",
      "description": {
        "fct-descr": "\u003cp\u003eFind the parameter where the bezier curve is vertical.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e [Double]",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#bezierVert",
        "fct-type": "function",
        "title": "bezierVert"
      },
      "index": {
        "description": "Find the parameter where the bezier curve is vertical",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "bezierVert",
        "normalized": "CubicBezier-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Vert",
        "signature": "CubicBezier-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:colinear",
      "description": {
        "fct-descr": "\u003cp\u003eReturn True if all the control points are colinear within tolerance.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e Bool",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#colinear",
        "fct-type": "function",
        "title": "colinear"
      },
      "index": {
        "description": "Return True if all the control points are colinear within tolerance",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "colinear",
        "normalized": "CubicBezier-\u003eDouble-\u003eBool",
        "package": "cubicbezier",
        "partial": "",
        "signature": "CubicBezier-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:evalBezier",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate a value on the curve.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e Point",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#evalBezier",
        "fct-type": "function",
        "title": "evalBezier"
      },
      "index": {
        "description": "Calculate value on the curve",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "evalBezier",
        "normalized": "CubicBezier-\u003eDouble-\u003ePoint",
        "package": "cubicbezier",
        "partial": "Bezier",
        "signature": "CubicBezier-\u003eDouble-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:evalBezierDeriv",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate a value and the first derivative on the curve.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e (Point, Point)",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#evalBezierDeriv",
        "fct-type": "function",
        "title": "evalBezierDeriv"
      },
      "index": {
        "description": "Calculate value and the first derivative on the curve",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "evalBezierDeriv",
        "normalized": "CubicBezier-\u003eDouble-\u003e(Point,Point)",
        "package": "cubicbezier",
        "partial": "Bezier Deriv",
        "signature": "CubicBezier-\u003eDouble-\u003e(Point,Point)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:evalBezierDerivs",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate a value and all derivatives on the curve.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e [Point]",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#evalBezierDerivs",
        "fct-type": "function",
        "title": "evalBezierDerivs"
      },
      "index": {
        "description": "Calculate value and all derivatives on the curve",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "evalBezierDerivs",
        "normalized": "CubicBezier-\u003eDouble-\u003e[Point]",
        "package": "cubicbezier",
        "partial": "Bezier Derivs",
        "signature": "CubicBezier-\u003eDouble-\u003e[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:findBezierCusp",
      "description": {
        "fct-descr": "\u003cp\u003eFind the cusps of a bezier.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e [Double]",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#findBezierCusp",
        "fct-type": "function",
        "title": "findBezierCusp"
      },
      "index": {
        "description": "Find the cusps of bezier",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "findBezierCusp",
        "normalized": "CubicBezier-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Bezier Cusp",
        "signature": "CubicBezier-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:findBezierInflection",
      "description": {
        "fct-descr": "\u003cp\u003eFind inflection points on the curve.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e [Double]",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#findBezierInflection",
        "fct-type": "function",
        "title": "findBezierInflection"
      },
      "index": {
        "description": "Find inflection points on the curve",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "findBezierInflection",
        "normalized": "CubicBezier-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Bezier Inflection",
        "signature": "CubicBezier-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:findBezierTangent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efindBezierTangent p b\u003c/code\u003e finds the parameters where\n the tangent of the bezier curve \u003ccode\u003eb\u003c/code\u003e has the same direction as vector p.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e CubicBezier -\u003e [Double]",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#findBezierTangent",
        "fct-type": "function",
        "title": "findBezierTangent"
      },
      "index": {
        "description": "findBezierTangent finds the parameters where the tangent of the bezier curve has the same direction as vector",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "findBezierTangent",
        "normalized": "Point-\u003eCubicBezier-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Bezier Tangent",
        "signature": "Point-\u003eCubicBezier-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:reorient",
      "description": {
        "fct-descr": "\u003cp\u003eReorient to the curve B(1-t).\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e CubicBezier",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#reorient",
        "fct-type": "function",
        "title": "reorient"
      },
      "index": {
        "description": "Reorient to the curve",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "reorient",
        "normalized": "CubicBezier-\u003eCubicBezier",
        "package": "cubicbezier",
        "partial": "",
        "signature": "CubicBezier-\u003eCubicBezier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:splitBezier",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a bezier curve into two curves.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e (CubicBezier, CubicBezier)",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#splitBezier",
        "fct-type": "function",
        "title": "splitBezier"
      },
      "index": {
        "description": "Split bezier curve into two curves",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "splitBezier",
        "normalized": "CubicBezier-\u003eDouble-\u003e(CubicBezier,CubicBezier)",
        "package": "cubicbezier",
        "partial": "Bezier",
        "signature": "CubicBezier-\u003eDouble-\u003e(CubicBezier,CubicBezier)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:splitBezierN",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a bezier curve into a list of beziers\n The parameters should be in ascending order or\n the result is unpredictable.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e [Double] -\u003e [CubicBezier]",
        "fct-source": "src/Geom2D-CubicBezier-Basic.html#splitBezierN",
        "fct-type": "function",
        "title": "splitBezierN"
      },
      "index": {
        "description": "Split bezier curve into list of beziers The parameters should be in ascending order or the result is unpredictable",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "splitBezierN",
        "normalized": "CubicBezier-\u003e[Double]-\u003e[CubicBezier]",
        "package": "cubicbezier",
        "partial": "Bezier",
        "signature": "CubicBezier-\u003e[Double]-\u003e[CubicBezier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:transform",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Basic",
        "fct-package": "cubicbezier",
        "fct-signature": "Transform -\u003e a -\u003e a",
        "fct-source": "src/Geom2D.html#transform",
        "fct-type": "method",
        "title": "transform"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Basic",
        "module": "Geom2D.CubicBezier.Basic",
        "name": "transform",
        "normalized": "Transform-\u003ea-\u003ea",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Transform-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#",
      "description": {
        "fct-module": "Geom2D.CubicBezier.Curvature",
        "fct-package": "cubicbezier",
        "fct-signature": "module",
        "fct-source": "src/Geom2D-CubicBezier-Curvature.html",
        "fct-type": "module",
        "title": "Curvature"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier Curvature",
        "module": "Geom2D.CubicBezier.Curvature",
        "name": "Curvature",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Curvature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#v:curvature",
      "description": {
        "fct-descr": "\u003cp\u003eCurvature of the Bezier curve.  A negative curvature means the curve\n curves to the right.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Curvature",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e Double",
        "fct-source": "src/Geom2D-CubicBezier-Curvature.html#curvature",
        "fct-type": "function",
        "title": "curvature"
      },
      "index": {
        "description": "Curvature of the Bezier curve negative curvature means the curve curves to the right",
        "hierarchy": "Geom2D CubicBezier Curvature",
        "module": "Geom2D.CubicBezier.Curvature",
        "name": "curvature",
        "normalized": "CubicBezier-\u003eDouble-\u003eDouble",
        "package": "cubicbezier",
        "partial": "",
        "signature": "CubicBezier-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#v:curvatureExtrema",
      "description": {
        "fct-descr": "\u003cp\u003eFind extrema of the curvature, but not inflection points.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Curvature",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e [Double]",
        "fct-source": "src/Geom2D-CubicBezier-Curvature.html#curvatureExtrema",
        "fct-type": "function",
        "title": "curvatureExtrema"
      },
      "index": {
        "description": "Find extrema of the curvature but not inflection points",
        "hierarchy": "Geom2D CubicBezier Curvature",
        "module": "Geom2D.CubicBezier.Curvature",
        "name": "curvatureExtrema",
        "normalized": "CubicBezier-\u003eDouble-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Extrema",
        "signature": "CubicBezier-\u003eDouble-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#v:findRadius",
      "description": {
        "fct-descr": "\u003cp\u003eFind points on the curve that have a certain radius of curvature.\n Values to the left and to the right of the curve are returned.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Curvature",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier-\u003e Double-\u003e Double-\u003e [Double]",
        "fct-type": "function",
        "title": "findRadius"
      },
      "index": {
        "description": "Find points on the curve that have certain radius of curvature Values to the left and to the right of the curve are returned",
        "hierarchy": "Geom2D CubicBezier Curvature",
        "module": "Geom2D.CubicBezier.Curvature",
        "name": "findRadius",
        "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Radius",
        "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#v:radiusOfCurvature",
      "description": {
        "fct-descr": "\u003cp\u003eRadius of curvature of the Bezier curve.  This\n is the reciprocal of the curvature.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Curvature",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Double -\u003e Double",
        "fct-source": "src/Geom2D-CubicBezier-Curvature.html#radiusOfCurvature",
        "fct-type": "function",
        "title": "radiusOfCurvature"
      },
      "index": {
        "description": "Radius of curvature of the Bezier curve This is the reciprocal of the curvature",
        "hierarchy": "Geom2D CubicBezier Curvature",
        "module": "Geom2D.CubicBezier.Curvature",
        "name": "radiusOfCurvature",
        "normalized": "CubicBezier-\u003eDouble-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Of Curvature",
        "signature": "CubicBezier-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntersection routines using Bezier Clipping.  Provides also functions for finding the roots of onedimensional bezier curves.  This can be used as a general polynomial root solver by converting from the power basis to the bernstein basis.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Geom2D.CubicBezier.Intersection",
        "fct-package": "cubicbezier",
        "fct-signature": "module",
        "fct-source": "src/Geom2D-CubicBezier-Intersection.html",
        "fct-type": "module",
        "title": "Intersection"
      },
      "index": {
        "description": "Intersection routines using Bezier Clipping Provides also functions for finding the roots of onedimensional bezier curves This can be used as general polynomial root solver by converting from the power basis to the bernstein basis",
        "hierarchy": "Geom2D CubicBezier Intersection",
        "module": "Geom2D.CubicBezier.Intersection",
        "name": "Intersection",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Intersection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#v:bezierFindRoot",
      "description": {
        "fct-descr": "\u003cp\u003eFind the zero of a 1D bezier curve of any degree.  Note that this\n can be used as a bernstein polynomial root solver by converting from\n the power basis to the bernstein basis.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Intersection",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly-\u003e Double-\u003e Double-\u003e Double-\u003e [Double]",
        "fct-type": "function",
        "title": "bezierFindRoot"
      },
      "index": {
        "description": "Find the zero of bezier curve of any degree Note that this can be used as bernstein polynomial root solver by converting from the power basis to the bernstein basis",
        "hierarchy": "Geom2D CubicBezier Intersection",
        "module": "Geom2D.CubicBezier.Intersection",
        "name": "bezierFindRoot",
        "normalized": "BernsteinPoly-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Find Root",
        "signature": "BernsteinPoly-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#v:bezierIntersection",
      "description": {
        "fct-descr": "\u003cp\u003eFind the intersections between two Bezier curves within given\n tolerance, using the Bezier Clip algorithm. Returns the parameters\n for both curves.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Intersection",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e CubicBezier -\u003e Double -\u003e [(Double, Double)]",
        "fct-source": "src/Geom2D-CubicBezier-Intersection.html#bezierIntersection",
        "fct-type": "function",
        "title": "bezierIntersection"
      },
      "index": {
        "description": "Find the intersections between two Bezier curves within given tolerance using the Bezier Clip algorithm Returns the parameters for both curves",
        "hierarchy": "Geom2D CubicBezier Intersection",
        "module": "Geom2D.CubicBezier.Intersection",
        "name": "bezierIntersection",
        "normalized": "CubicBezier-\u003eCubicBezier-\u003eDouble-\u003e[(Double,Double)]",
        "package": "cubicbezier",
        "partial": "Intersection",
        "signature": "CubicBezier-\u003eCubicBezier-\u003eDouble-\u003e[(Double,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#v:bezierLineIntersections",
      "description": {
        "fct-descr": "\u003cp\u003eFind the intersections of the curve with a line.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Intersection",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Line -\u003e Double -\u003e [Double]",
        "fct-source": "src/Geom2D-CubicBezier-Intersection.html#bezierLineIntersections",
        "fct-type": "function",
        "title": "bezierLineIntersections"
      },
      "index": {
        "description": "Find the intersections of the curve with line",
        "hierarchy": "Geom2D CubicBezier Intersection",
        "module": "Geom2D.CubicBezier.Intersection",
        "name": "bezierLineIntersections",
        "normalized": "CubicBezier-\u003eLine-\u003eDouble-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Line Intersections",
        "signature": "CubicBezier-\u003eLine-\u003eDouble-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#v:closest",
      "description": {
        "fct-descr": "\u003cp\u003eFind the closest value(s) on the bezier to the given point, within tolerance.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Intersection",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier -\u003e Point -\u003e Double -\u003e [Double]",
        "fct-source": "src/Geom2D-CubicBezier-Intersection.html#closest",
        "fct-type": "function",
        "title": "closest"
      },
      "index": {
        "description": "Find the closest value on the bezier to the given point within tolerance",
        "hierarchy": "Geom2D CubicBezier Intersection",
        "module": "Geom2D.CubicBezier.Intersection",
        "name": "closest",
        "normalized": "CubicBezier-\u003ePoint-\u003eDouble-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "",
        "signature": "CubicBezier-\u003ePoint-\u003eDouble-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements an extension to paths as used in\n D.E.Knuth's \u003cem\u003eMetafont\u003c/em\u003e.  Metafont gives a more intuitive method to\n specify paths than bezier curves.  I'll give a brief overview of\n the metafont curves.  For a more in depth explanation look at\n \u003cem\u003eThe MetafontBook\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eEach spline has a tension parameter, which is a relative measure of\n the length of the curve.  You can specify the tension for the left\n side and the right side of the spline separately.  By default\n metafont gives a tension of 1, which gives a good looking curve.\n Tensions shouldn't be less than 3/4, but this implementation\n doesn't check for it.  If you want to avoid points of inflection on\n the spline, you can use \u003ccode\u003eTensionAtLeast\u003c/code\u003e instead of \u003ccode\u003eTension\u003c/code\u003e,\n which will adjust the length of the control points so they fall\n into the \u003cem\u003ebounding triangle\u003c/em\u003e, if such a triangle exist.\n\u003c/p\u003e\u003cp\u003eYou can either give directions for each node, or let metafont find\n them.  Metafont will solve a set of equations to find the\n directions.  You can also let metafont find directions at corner\n points by setting the \u003cem\u003ecurl\u003c/em\u003e, which is how much the point \u003cem\u003ecurls\u003c/em\u003e\n at that point.  At endpoints a curl of 1 is implied when it is not\n given.\n\u003c/p\u003e\u003cp\u003eMetafont will then find the control points from the path for you.\n You can also specify the control points explicitly.\n\u003c/p\u003e\u003cp\u003eHere is an example path from the metafont program text:\n\u003c/p\u003e\u003cpre\u003e\n z0..z1..tension atleast 1..{curl 2}z2..z3{-1,-2}..tension 3 and 4..z4..controls z45 and z54..z5\n\u003c/pre\u003e\u003cp\u003eThis path is equivalent to:\n\u003c/p\u003e\u003cpre\u003e\n z0{curl 1}..tension atleast 1 and atleast 1..{curl 2}z2{curl 2}..tension 1 and 1..\n {-1,-2}z3{-1,-2}..tension 3 and 4..z4..controls z45 and z54..z5\n\u003c/pre\u003e\u003cp\u003eThis path can be used with the following datatype:\n\u003c/p\u003e\u003cpre\u003e\n OpenMetaPath [ (z0, MetaJoin Open (Tension 1) (Tension 1) Open)\n              , (z1, MetaJoin Open (TensionAtLeast 1) (TensionAtLeast 1) (Curl 2))\n              , (z2, MetaJoin Open (Tension 1) (Tension 1) Open)\n              , (z3, MetaJoin (Direction (Point (-1) (-2))) (Tension 3) (Tension 4) Open)\n              , (z4, Controls z45 z54)\n              ] z5\n\u003c/pre\u003e\u003cp\u003eCyclic paths are similar, but use the \u003ccode\u003eCyclicMetaPath\u003c/code\u003e contructor.\n There is no ending point, since the ending point will be the same\n as the first point.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "module",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html",
        "fct-type": "module",
        "title": "MetaPath"
      },
      "index": {
        "description": "This module implements an extension to paths as used in D.E.Knuth Metafont Metafont gives more intuitive method to specify paths than bezier curves ll give brief overview of the metafont curves For more in depth explanation look at The MetafontBook Each spline has tension parameter which is relative measure of the length of the curve You can specify the tension for the left side and the right side of the spline separately By default metafont gives tension of which gives good looking curve Tensions shouldn be less than but this implementation doesn check for it If you want to avoid points of inflection on the spline you can use TensionAtLeast instead of Tension which will adjust the length of the control points so they fall into the bounding triangle if such triangle exist You can either give directions for each node or let metafont find them Metafont will solve set of equations to find the directions You can also let metafont find directions at corner points by setting the curl which is how much the point curls at that point At endpoints curl of is implied when it is not given Metafont will then find the control points from the path for you You can also specify the control points explicitly Here is an example path from the metafont program text z0..z1..tension atleast curl z2..z3 tension and z4..controls z45 and z54..z5 This path is equivalent to z0 curl tension atleast and atleast curl z2 curl tension and z3 tension and z4..controls z45 and z54..z5 This path can be used with the following datatype OpenMetaPath z0 MetaJoin Open Tension Tension Open z1 MetaJoin Open TensionAtLeast TensionAtLeast Curl z2 MetaJoin Open Tension Tension Open z3 MetaJoin Direction Point Tension Tension Open z4 Controls z45 z54 z5 Cyclic paths are similar but use the CyclicMetaPath contructor There is no ending point since the ending point will be the same as the first point",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "MetaPath",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Meta Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#t:MetaJoin",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
        "fct-type": "data",
        "title": "MetaJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "MetaJoin",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Meta Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#t:MetaNodeType",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
        "fct-type": "data",
        "title": "MetaNodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "MetaNodeType",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Meta Node Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#t:MetaPath",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaPath",
        "fct-type": "data",
        "title": "MetaPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "MetaPath",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Meta Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#t:Tension",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#Tension",
        "fct-type": "data",
        "title": "Tension"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "Tension",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Tension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Controls",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Controls Point Point",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
        "fct-type": "function",
        "title": "Controls"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "Controls",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Controls",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Curl",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Curl",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
        "fct-type": "function",
        "title": "Curl"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "Curl",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Curl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:CyclicMetaPath",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "CyclicMetaPath [(Point, MetaJoin)]",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaPath",
        "fct-type": "function",
        "title": "CyclicMetaPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "CyclicMetaPath",
        "normalized": "CyclicMetaPath[(Point,MetaJoin)]",
        "package": "cubicbezier",
        "partial": "Cyclic Meta Path",
        "signature": "CyclicMetaPath[(Point,MetaJoin)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Direction",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Direction",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
        "fct-type": "function",
        "title": "Direction"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "Direction",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:MetaJoin",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "MetaJoin",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
        "fct-type": "function",
        "title": "MetaJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "MetaJoin",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Meta Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Open",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Open",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
        "fct-type": "function",
        "title": "Open"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "Open",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Open",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:OpenMetaPath",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "OpenMetaPath [(Point, MetaJoin)] Point",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaPath",
        "fct-type": "function",
        "title": "OpenMetaPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "OpenMetaPath",
        "normalized": "OpenMetaPath[(Point,MetaJoin)]Point",
        "package": "cubicbezier",
        "partial": "Open Meta Path",
        "signature": "OpenMetaPath[(Point,MetaJoin)]Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Tension",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Tension",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#Tension",
        "fct-type": "function",
        "title": "Tension"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "Tension",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Tension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:TensionAtLeast",
      "description": {
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "TensionAtLeast",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#Tension",
        "fct-type": "function",
        "title": "TensionAtLeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "TensionAtLeast",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Tension At Least",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:curlgamma",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Double",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
        "fct-type": "function",
        "title": "curlgamma"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "curlgamma",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:metaTypeL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "MetaNodeType",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
        "fct-type": "function",
        "title": "metaTypeL"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "metaTypeL",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:metaTypeR",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "MetaNodeType",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
        "fct-type": "function",
        "title": "metaTypeR"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "metaTypeR",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:nodedir",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Point",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
        "fct-type": "function",
        "title": "nodedir"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "nodedir",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:tensionL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Tension",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
        "fct-type": "function",
        "title": "tensionL"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "tensionL",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:tensionR",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Tension",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
        "fct-type": "function",
        "title": "tensionR"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "tensionR",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:tensionValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "Double",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#Tension",
        "fct-type": "function",
        "title": "tensionValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "tensionValue",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:unmeta",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a normal path from a metapath.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.MetaPath",
        "fct-package": "cubicbezier",
        "fct-signature": "MetaPath -\u003e Path",
        "fct-source": "src/Geom2D-CubicBezier-MetaPath.html#unmeta",
        "fct-type": "function",
        "title": "unmeta"
      },
      "index": {
        "description": "Create normal path from metapath",
        "hierarchy": "Geom2D CubicBezier MetaPath",
        "module": "Geom2D.CubicBezier.MetaPath",
        "name": "unmeta",
        "normalized": "MetaPath-\u003ePath",
        "package": "cubicbezier",
        "partial": "",
        "signature": "MetaPath-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Outline.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOffsetting bezier curves and stroking curves.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Geom2D.CubicBezier.Outline",
        "fct-package": "cubicbezier",
        "fct-signature": "module",
        "fct-source": "src/Geom2D-CubicBezier-Outline.html",
        "fct-type": "module",
        "title": "Outline"
      },
      "index": {
        "description": "Offsetting bezier curves and stroking curves",
        "hierarchy": "Geom2D CubicBezier Outline",
        "module": "Geom2D.CubicBezier.Outline",
        "name": "Outline",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Outline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Outline.html#v:bezierOffset",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate an offset path from the bezier curve to within\n tolerance.  If the distance is positive offset to the left,\n otherwise to the right. A smaller tolerance may require more bezier\n curves in the path to approximate the offset curve\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Outline",
        "fct-package": "cubicbezier",
        "fct-signature": "CubicBezier-\u003e Double-\u003e Double-\u003e [CubicBezier]",
        "fct-type": "function",
        "title": "bezierOffset"
      },
      "index": {
        "description": "Calculate an offset path from the bezier curve to within tolerance If the distance is positive offset to the left otherwise to the right smaller tolerance may require more bezier curves in the path to approximate the offset curve",
        "hierarchy": "Geom2D CubicBezier Outline",
        "module": "Geom2D.CubicBezier.Outline",
        "name": "bezierOffset",
        "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
        "package": "cubicbezier",
        "partial": "Offset",
        "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003e[CubicBezier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Outline.html#v:bezierOffsetMax",
      "description": {
        "fct-descr": "\u003cp\u003eLike bezierOffset, but limit the number of subpaths for each\n smooth subsegment.  The number should not be smaller than one.\n\u003c/p\u003e",
        "fct-module": "Geom2D.CubicBezier.Outline",
        "fct-package": "cubicbezier",
        "fct-signature": "Int -\u003e CubicBezier -\u003e Double -\u003e Double -\u003e [CubicBezier]",
        "fct-source": "src/Geom2D-CubicBezier-Outline.html#bezierOffsetMax",
        "fct-type": "function",
        "title": "bezierOffsetMax"
      },
      "index": {
        "description": "Like bezierOffset but limit the number of subpaths for each smooth subsegment The number should not be smaller than one",
        "hierarchy": "Geom2D CubicBezier Outline",
        "module": "Geom2D.CubicBezier.Outline",
        "name": "bezierOffsetMax",
        "normalized": "Int-\u003eCubicBezier-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
        "package": "cubicbezier",
        "partial": "Offset Max",
        "signature": "Int-\u003eCubicBezier-\u003eDouble-\u003eDouble-\u003e[CubicBezier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExport all the cubic bezier functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Geom2D.CubicBezier",
        "fct-package": "cubicbezier",
        "fct-signature": "module",
        "fct-source": "src/Geom2D-CubicBezier.html",
        "fct-type": "module",
        "title": "CubicBezier"
      },
      "index": {
        "description": "Export all the cubic bezier functions",
        "hierarchy": "Geom2D CubicBezier",
        "module": "Geom2D.CubicBezier",
        "name": "CubicBezier",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Cubic Bezier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic 2 dimensional geometry functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "module",
        "fct-source": "src/Geom2D.html",
        "fct-type": "module",
        "title": "Geom2D"
      },
      "index": {
        "description": "Basic dimensional geometry functions",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "Geom2D",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Geom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:AffineTransform",
      "description": {
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "class",
        "fct-source": "src/Geom2D.html#AffineTransform",
        "fct-type": "class",
        "title": "AffineTransform"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "AffineTransform",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Affine Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:Line",
      "description": {
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D.html#Line",
        "fct-type": "data",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "Line",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:Point",
      "description": {
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D.html#Point",
        "fct-type": "data",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "Point",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:Polygon",
      "description": {
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D.html#Polygon",
        "fct-type": "data",
        "title": "Polygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "Polygon",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:Transform",
      "description": {
        "fct-descr": "\u003cp\u003eA transformation (x, y) -\u003e (ax + by + c, dx + ey + d)\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Geom2D.html#Transform",
        "fct-type": "data",
        "title": "Transform"
      },
      "index": {
        "description": "transformation ax by dx ey",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "Transform",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-36--42-",
      "description": {
        "fct-descr": "\u003cp\u003eOperator for applying a transformation.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Transform -\u003e a -\u003e a",
        "fct-source": "src/Geom2D.html#%24%2A",
        "fct-type": "function",
        "title": "($*)"
      },
      "index": {
        "description": "Operator for applying transformation",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "($*) $*",
        "normalized": "Transform-\u003ea-\u003ea",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Transform-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-42--94-",
      "description": {
        "fct-descr": "\u003cp\u003eScale vector by constant.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Double -\u003e Point -\u003e Point",
        "fct-source": "src/Geom2D.html#%2A%5E",
        "fct-type": "function",
        "title": "(*^)"
      },
      "index": {
        "description": "Scale vector by constant",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "(*^) *^",
        "normalized": "Double-\u003ePoint-\u003ePoint",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Double-\u003ePoint-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94--42-",
      "description": {
        "fct-descr": "\u003cp\u003eScale vector by constant, with the arguments swapped.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Double -\u003e Point",
        "fct-source": "src/Geom2D.html#%5E%2A",
        "fct-type": "function",
        "title": "(^*)"
      },
      "index": {
        "description": "Scale vector by constant with the arguments swapped",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "(^*) ^*",
        "normalized": "Point-\u003eDouble-\u003ePoint",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Point-\u003eDouble-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94--43--94-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two vectors.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Point -\u003e Point",
        "fct-source": "src/Geom2D.html#%5E%2B%5E",
        "fct-type": "function",
        "title": "(^+^)"
      },
      "index": {
        "description": "Add two vectors",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "(^+^) ^+^",
        "normalized": "Point-\u003ePoint-\u003ePoint",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Point-\u003ePoint-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94--45--94-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract two vectors.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Point -\u003e Point",
        "fct-source": "src/Geom2D.html#%5E-%5E",
        "fct-type": "function",
        "title": "(^-^)"
      },
      "index": {
        "description": "Subtract two vectors",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "(^-^) ^-^",
        "normalized": "Point-\u003ePoint-\u003ePoint",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Point-\u003ePoint-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94--47-",
      "description": {
        "fct-descr": "\u003cp\u003eScale vector by reciprocal of constant.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Double -\u003e Point",
        "fct-source": "src/Geom2D.html#%5E%2F",
        "fct-type": "function",
        "title": "(^/)"
      },
      "index": {
        "description": "Scale vector by reciprocal of constant",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "(^/) ^/",
        "normalized": "Point-\u003eDouble-\u003ePoint",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Point-\u003eDouble-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94-.-94-",
      "description": {
        "fct-descr": "\u003cp\u003eDot product of two vectors.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Point -\u003e Double",
        "fct-source": "src/Geom2D.html#%5E.%5E",
        "fct-type": "function",
        "title": "(^.^)"
      },
      "index": {
        "description": "Dot product of two vectors",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "(^.^) ^.^",
        "normalized": "Point-\u003ePoint-\u003eDouble",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Point-\u003ePoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:Line",
      "description": {
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Line Point Point",
        "fct-source": "src/Geom2D.html#Line",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "Line",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:Point",
      "description": {
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point",
        "fct-source": "src/Geom2D.html#Point",
        "fct-type": "function",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "Point",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:Polygon",
      "description": {
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Polygon [Point]",
        "fct-source": "src/Geom2D.html#Polygon",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "Polygon",
        "normalized": "Polygon[Point]",
        "package": "cubicbezier",
        "partial": "Polygon",
        "signature": "Polygon[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:Transform",
      "description": {
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Transform",
        "fct-source": "src/Geom2D.html#Transform",
        "fct-type": "function",
        "title": "Transform"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "Transform",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:dirVector",
      "description": {
        "fct-descr": "\u003cp\u003eThe unitvector with the given angle.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Double -\u003e Point",
        "fct-source": "src/Geom2D.html#dirVector",
        "fct-type": "function",
        "title": "dirVector"
      },
      "index": {
        "description": "The unitvector with the given angle",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "dirVector",
        "normalized": "Double-\u003ePoint",
        "package": "cubicbezier",
        "partial": "Vector",
        "signature": "Double-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:interpolateVector",
      "description": {
        "fct-descr": "\u003cp\u003eInterpolate between two vectors.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Point -\u003e Double -\u003e Point",
        "fct-source": "src/Geom2D.html#interpolateVector",
        "fct-type": "function",
        "title": "interpolateVector"
      },
      "index": {
        "description": "Interpolate between two vectors",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "interpolateVector",
        "normalized": "Point-\u003ePoint-\u003eDouble-\u003ePoint",
        "package": "cubicbezier",
        "partial": "Vector",
        "signature": "Point-\u003ePoint-\u003eDouble-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:inverse",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the inverse of a transformation.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Transform -\u003e Maybe Transform",
        "fct-source": "src/Geom2D.html#inverse",
        "fct-type": "function",
        "title": "inverse"
      },
      "index": {
        "description": "Calculate the inverse of transformation",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "inverse",
        "normalized": "Transform-\u003eMaybe Transform",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Transform-\u003eMaybe Transform"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:lineDistance",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the the distance from a point to the line.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Line -\u003e Point -\u003e Double",
        "fct-source": "src/Geom2D.html#lineDistance",
        "fct-type": "function",
        "title": "lineDistance"
      },
      "index": {
        "description": "Return the the distance from point to the line",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "lineDistance",
        "normalized": "Line-\u003ePoint-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Distance",
        "signature": "Line-\u003ePoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:lineEquation",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the parameters (a, b, c) for the normalised equation\n of the line: \u003ccode\u003ea*x + b*y + c = 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Line -\u003e (Double, Double, Double)",
        "fct-source": "src/Geom2D.html#lineEquation",
        "fct-type": "function",
        "title": "lineEquation"
      },
      "index": {
        "description": "Return the parameters for the normalised equation of the line",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "lineEquation",
        "normalized": "Line-\u003e(Double,Double,Double)",
        "package": "cubicbezier",
        "partial": "Equation",
        "signature": "Line-\u003e(Double,Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:normVector",
      "description": {
        "fct-descr": "\u003cp\u003eThe unit vector with the same direction.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Point",
        "fct-source": "src/Geom2D.html#normVector",
        "fct-type": "function",
        "title": "normVector"
      },
      "index": {
        "description": "The unit vector with the same direction",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "normVector",
        "normalized": "Point-\u003ePoint",
        "package": "cubicbezier",
        "partial": "Vector",
        "signature": "Point-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:pointX",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "!Double",
        "fct-source": "src/Geom2D.html#Point",
        "fct-type": "function",
        "title": "pointX"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "pointX",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:pointY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "!Double",
        "fct-source": "src/Geom2D.html#Point",
        "fct-type": "function",
        "title": "pointY"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "pointY",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:rotate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a transform that rotates by the given angle (radians).\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Double -\u003e Transform",
        "fct-source": "src/Geom2D.html#rotate",
        "fct-type": "function",
        "title": "rotate"
      },
      "index": {
        "description": "Create transform that rotates by the given angle radians",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "rotate",
        "normalized": "Double-\u003eTransform",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Double-\u003eTransform"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:rotate90L",
      "description": {
        "fct-descr": "\u003cp\u003eRotate vector 90 degrees left.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Transform",
        "fct-source": "src/Geom2D.html#rotate90L",
        "fct-type": "function",
        "title": "rotate90L"
      },
      "index": {
        "description": "Rotate vector degrees left",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "rotate90L",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:rotate90R",
      "description": {
        "fct-descr": "\u003cp\u003eRotate vector 90 degrees right.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Transform",
        "fct-source": "src/Geom2D.html#rotate90R",
        "fct-type": "function",
        "title": "rotate90R"
      },
      "index": {
        "description": "Rotate vector degrees right",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "rotate90R",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:rotateVec",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a transform that rotates by the angle of the given vector\n with the x-axis\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Transform",
        "fct-source": "src/Geom2D.html#rotateVec",
        "fct-type": "function",
        "title": "rotateVec"
      },
      "index": {
        "description": "Create transform that rotates by the angle of the given vector with the x-axis",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "rotateVec",
        "normalized": "Point-\u003eTransform",
        "package": "cubicbezier",
        "partial": "Vec",
        "signature": "Point-\u003eTransform"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:transform",
      "description": {
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Transform -\u003e a -\u003e a",
        "fct-source": "src/Geom2D.html#transform",
        "fct-type": "method",
        "title": "transform"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "transform",
        "normalized": "Transform-\u003ea-\u003ea",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Transform-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a transform that translates by the given vector.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Transform",
        "fct-source": "src/Geom2D.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "Create transform that translates by the given vector",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "translate",
        "normalized": "Point-\u003eTransform",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Point-\u003eTransform"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:vectorAngle",
      "description": {
        "fct-descr": "\u003cp\u003eThe angle of the vector, in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Double",
        "fct-source": "src/Geom2D.html#vectorAngle",
        "fct-type": "function",
        "title": "vectorAngle"
      },
      "index": {
        "description": "The angle of the vector in the range pi pi",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "vectorAngle",
        "normalized": "Point-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Angle",
        "signature": "Point-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:vectorCross",
      "description": {
        "fct-descr": "\u003cp\u003eCross product of two vectors.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Point -\u003e Double",
        "fct-source": "src/Geom2D.html#vectorCross",
        "fct-type": "function",
        "title": "vectorCross"
      },
      "index": {
        "description": "Cross product of two vectors",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "vectorCross",
        "normalized": "Point-\u003ePoint-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Cross",
        "signature": "Point-\u003ePoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:vectorDistance",
      "description": {
        "fct-descr": "\u003cp\u003eDistance between two vectors.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Point -\u003e Double",
        "fct-source": "src/Geom2D.html#vectorDistance",
        "fct-type": "function",
        "title": "vectorDistance"
      },
      "index": {
        "description": "Distance between two vectors",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "vectorDistance",
        "normalized": "Point-\u003ePoint-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Distance",
        "signature": "Point-\u003ePoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:vectorMag",
      "description": {
        "fct-descr": "\u003cp\u003eThe lenght of the vector.\n\u003c/p\u003e",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "Point -\u003e Double",
        "fct-source": "src/Geom2D.html#vectorMag",
        "fct-type": "function",
        "title": "vectorMag"
      },
      "index": {
        "description": "The lenght of the vector",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "vectorMag",
        "normalized": "Point-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Mag",
        "signature": "Point-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformA",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "!Double",
        "fct-source": "src/Geom2D.html#Transform",
        "fct-type": "function",
        "title": "xformA"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "xformA",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "!Double",
        "fct-source": "src/Geom2D.html#Transform",
        "fct-type": "function",
        "title": "xformB"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "xformB",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "!Double",
        "fct-source": "src/Geom2D.html#Transform",
        "fct-type": "function",
        "title": "xformC"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "xformC",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "!Double",
        "fct-source": "src/Geom2D.html#Transform",
        "fct-type": "function",
        "title": "xformD"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "xformD",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "!Double",
        "fct-source": "src/Geom2D.html#Transform",
        "fct-type": "function",
        "title": "xformE"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "xformE",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformF",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Geom2D",
        "fct-package": "cubicbezier",
        "fct-signature": "!Double",
        "fct-source": "src/Geom2D.html#Transform",
        "fct-type": "function",
        "title": "xformF"
      },
      "index": {
        "description": "",
        "hierarchy": "Geom2D",
        "module": "Geom2D",
        "name": "xformF",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#",
      "description": {
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "module",
        "fct-source": "src/Math-BernsteinPoly.html",
        "fct-type": "module",
        "title": "BernsteinPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "BernsteinPoly",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Bernstein Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#t:BernsteinPoly",
      "description": {
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "data",
        "fct-source": "src/Math-BernsteinPoly.html#BernsteinPoly",
        "fct-type": "data",
        "title": "BernsteinPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "BernsteinPoly",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Bernstein Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:-126--42-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply two bernstein polynomials.  The final degree\n will be the sum of either degrees.  This operation takes O((n+m)^2)\n with n and m the degree of the beziers.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly -\u003e BernsteinPoly -\u003e BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#~%2A",
        "fct-type": "function",
        "title": "(~*)"
      },
      "index": {
        "description": "Multiply two bernstein polynomials The final degree will be the sum of either degrees This operation takes with and the degree of the beziers",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "(~*) ~*",
        "normalized": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly",
        "package": "cubicbezier",
        "partial": "",
        "signature": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:-126--43-",
      "description": {
        "fct-descr": "\u003cp\u003eSum two bernstein polynomials.  The final degree will be the maximum of either\n degrees.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly -\u003e BernsteinPoly -\u003e BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#~%2B",
        "fct-type": "function",
        "title": "(~+)"
      },
      "index": {
        "description": "Sum two bernstein polynomials The final degree will be the maximum of either degrees",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "(~+) ~+",
        "normalized": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly",
        "package": "cubicbezier",
        "partial": "",
        "signature": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:-126--45-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract two bernstein polynomials.  The final degree will be the maximum of either\n degrees.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly -\u003e BernsteinPoly -\u003e BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#~-",
        "fct-type": "function",
        "title": "(~-)"
      },
      "index": {
        "description": "Subtract two bernstein polynomials The final degree will be the maximum of either degrees",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "(~-) ~-",
        "normalized": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly",
        "package": "cubicbezier",
        "partial": "",
        "signature": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:-42--126-",
      "description": {
        "fct-descr": "\u003cp\u003eScale a bernstein polynomial by a constant.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "Double -\u003e BernsteinPoly -\u003e BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#%2A~",
        "fct-type": "function",
        "title": "(*~)"
      },
      "index": {
        "description": "Scale bernstein polynomial by constant",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "(*~) *~",
        "normalized": "Double-\u003eBernsteinPoly-\u003eBernsteinPoly",
        "package": "cubicbezier",
        "partial": "",
        "signature": "Double-\u003eBernsteinPoly-\u003eBernsteinPoly"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:BernsteinPoly",
      "description": {
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#BernsteinPoly",
        "fct-type": "function",
        "title": "BernsteinPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "BernsteinPoly",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Bernstein Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinCoeffs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "![Double]",
        "fct-source": "src/Math-BernsteinPoly.html#BernsteinPoly",
        "fct-type": "function",
        "title": "bernsteinCoeffs"
      },
      "index": {
        "description": "",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "bernsteinCoeffs",
        "normalized": "[Double]",
        "package": "cubicbezier",
        "partial": "Coeffs",
        "signature": "[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinDegree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "!Int",
        "fct-source": "src/Math-BernsteinPoly.html#BernsteinPoly",
        "fct-type": "function",
        "title": "bernsteinDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "bernsteinDegree",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinDeriv",
      "description": {
        "fct-descr": "\u003cp\u003eFind the derivative of a bernstein polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly -\u003e BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#bernsteinDeriv",
        "fct-type": "function",
        "title": "bernsteinDeriv"
      },
      "index": {
        "description": "Find the derivative of bernstein polynomial",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "bernsteinDeriv",
        "normalized": "BernsteinPoly-\u003eBernsteinPoly",
        "package": "cubicbezier",
        "partial": "Deriv",
        "signature": "BernsteinPoly-\u003eBernsteinPoly"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinEval",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the bernstein polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly -\u003e Double -\u003e Double",
        "fct-source": "src/Math-BernsteinPoly.html#bernsteinEval",
        "fct-type": "function",
        "title": "bernsteinEval"
      },
      "index": {
        "description": "Evaluate the bernstein polynomial",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "bernsteinEval",
        "normalized": "BernsteinPoly-\u003eDouble-\u003eDouble",
        "package": "cubicbezier",
        "partial": "Eval",
        "signature": "BernsteinPoly-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinEvalDerivs",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the bernstein polynomial and its derivatives.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly -\u003e Double -\u003e [Double]",
        "fct-source": "src/Math-BernsteinPoly.html#bernsteinEvalDerivs",
        "fct-type": "function",
        "title": "bernsteinEvalDerivs"
      },
      "index": {
        "description": "Evaluate the bernstein polynomial and its derivatives",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "bernsteinEvalDerivs",
        "normalized": "BernsteinPoly-\u003eDouble-\u003e[Double]",
        "package": "cubicbezier",
        "partial": "Eval Derivs",
        "signature": "BernsteinPoly-\u003eDouble-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinSplit",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a bernstein polynomial\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly -\u003e Double -\u003e (BernsteinPoly, BernsteinPoly)",
        "fct-source": "src/Math-BernsteinPoly.html#bernsteinSplit",
        "fct-type": "function",
        "title": "bernsteinSplit"
      },
      "index": {
        "description": "Split bernstein polynomial",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "bernsteinSplit",
        "normalized": "BernsteinPoly-\u003eDouble-\u003e(BernsteinPoly,BernsteinPoly)",
        "package": "cubicbezier",
        "partial": "Split",
        "signature": "BernsteinPoly-\u003eDouble-\u003e(BernsteinPoly,BernsteinPoly)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinSubsegment",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the subsegment between the two parameters.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly -\u003e Double -\u003e Double -\u003e BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#bernsteinSubsegment",
        "fct-type": "function",
        "title": "bernsteinSubsegment"
      },
      "index": {
        "description": "Return the subsegment between the two parameters",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "bernsteinSubsegment",
        "normalized": "BernsteinPoly-\u003eDouble-\u003eDouble-\u003eBernsteinPoly",
        "package": "cubicbezier",
        "partial": "Subsegment",
        "signature": "BernsteinPoly-\u003eDouble-\u003eDouble-\u003eBernsteinPoly"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:degreeElevate",
      "description": {
        "fct-descr": "\u003cp\u003eDegree elevate a bernstein polynomail a number of times.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly -\u003e Int -\u003e BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#degreeElevate",
        "fct-type": "function",
        "title": "degreeElevate"
      },
      "index": {
        "description": "Degree elevate bernstein polynomail number of times",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "degreeElevate",
        "normalized": "BernsteinPoly-\u003eInt-\u003eBernsteinPoly",
        "package": "cubicbezier",
        "partial": "Elevate",
        "signature": "BernsteinPoly-\u003eInt-\u003eBernsteinPoly"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:listToBernstein",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a bernstein polynomail from a list of co&#235;fficients.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "[Double] -\u003e BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#listToBernstein",
        "fct-type": "function",
        "title": "listToBernstein"
      },
      "index": {
        "description": "Create bernstein polynomail from list of co fficients",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "listToBernstein",
        "normalized": "[Double]-\u003eBernsteinPoly",
        "package": "cubicbezier",
        "partial": "To Bernstein",
        "signature": "[Double]-\u003eBernsteinPoly"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:zeroPoly",
      "description": {
        "fct-descr": "\u003cp\u003eThe constant zero.\n\u003c/p\u003e",
        "fct-module": "Math.BernsteinPoly",
        "fct-package": "cubicbezier",
        "fct-signature": "BernsteinPoly",
        "fct-source": "src/Math-BernsteinPoly.html#zeroPoly",
        "fct-type": "function",
        "title": "zeroPoly"
      },
      "index": {
        "description": "The constant zero",
        "hierarchy": "Math BernsteinPoly",
        "module": "Math.BernsteinPoly",
        "name": "zeroPoly",
        "normalized": "",
        "package": "cubicbezier",
        "partial": "Poly",
        "signature": ""
      }
    }
  }
]