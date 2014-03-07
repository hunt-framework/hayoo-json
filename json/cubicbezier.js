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
        "word": "cubicbezier"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "Approximate",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-Approximate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Approximate",
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "Approximate",
          "package": "cubicbezier",
          "partial": "Approximate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eapproximateCurve b pts eps\u003c/code\u003e finds the least squares fit of a bezier\n curve to the points \u003ccode\u003epts\u003c/code\u003e.  The resulting bezier has the same first\n and last control point as the curve \u003ccode\u003eb\u003c/code\u003e, and have tangents colinear with \u003ccode\u003eb\u003c/code\u003e.\n return the curve, the parameter with maximum error, and maximum error.\n Calculate to withing eps tolerance.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "approximateCurve",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e [Point] -\u003e Double -\u003e (CubicBezier, Double, Double)",
          "source": "src/Geom2D-CubicBezier-Approximate.html#approximateCurve",
          "type": "function"
        },
        "index": {
          "description": "approximateCurve pts eps finds the least squares fit of bezier curve to the points pts The resulting bezier has the same first and last control point as the curve and have tangents colinear with return the curve the parameter with maximum error and maximum error Calculate to withing eps tolerance",
          "hierarchy": "Geom2D CubicBezier Approximate",
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "approximateCurve",
          "normalized": "CubicBezier-\u003e[Point]-\u003eDouble-\u003e(CubicBezier,Double,Double)",
          "package": "cubicbezier",
          "partial": "Curve",
          "signature": "CubicBezier-\u003e[Point]-\u003eDouble-\u003e(CubicBezier,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#v:approximateCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike approximateCurve, but also takes an initial guess of the\n parameters closest to the points.  This might be faster if a good\n guess can be made.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "approximateCurveWithParams",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e [Point] -\u003e [Double] -\u003e Double -\u003e (CubicBezier, Double, Double)",
          "source": "src/Geom2D-CubicBezier-Approximate.html#approximateCurveWithParams",
          "type": "function"
        },
        "index": {
          "description": "Like approximateCurve but also takes an initial guess of the parameters closest to the points This might be faster if good guess can be made",
          "hierarchy": "Geom2D CubicBezier Approximate",
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "approximateCurveWithParams",
          "normalized": "CubicBezier-\u003e[Point]-\u003e[Double]-\u003eDouble-\u003e(CubicBezier,Double,Double)",
          "package": "cubicbezier",
          "partial": "Curve With Params",
          "signature": "CubicBezier-\u003e[Point]-\u003e[Double]-\u003eDouble-\u003e(CubicBezier,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#v:approximateCurveWithParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate a function with piecewise cubic bezier splines using\n a least-squares fit, within the given tolerance.  Each subcurve is\n approximated by using a finite number of samples.  It is recommended\n to avoid changes in direction by subdividing the original function\n at points of inflection.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "approximatePath",
          "package": "cubicbezier",
          "signature": "(Double -\u003e (Point, Point))-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e [CubicBezier]",
          "type": "function"
        },
        "index": {
          "description": "Approximate function with piecewise cubic bezier splines using least-squares fit within the given tolerance Each subcurve is approximated by using finite number of samples It is recommended to avoid changes in direction by subdividing the original function at points of inflection",
          "hierarchy": "Geom2D CubicBezier Approximate",
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "approximatePath",
          "normalized": "(Double-\u003e(Point,Point))-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
          "package": "cubicbezier",
          "partial": "Path",
          "signature": "(Double-\u003e(Point,Point))-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#v:approximatePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike approximatePath, but limit the number of subcurves.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "approximatePathMax",
          "package": "cubicbezier",
          "signature": "Int-\u003e (Double -\u003e (Point, Point))-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e [CubicBezier]",
          "type": "function"
        },
        "index": {
          "description": "Like approximatePath but limit the number of subcurves",
          "hierarchy": "Geom2D CubicBezier Approximate",
          "module": "Geom2D.CubicBezier.Approximate",
          "name": "approximatePathMax",
          "normalized": "Int-\u003e(Double-\u003e(Point,Point))-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
          "package": "cubicbezier",
          "partial": "Path Max",
          "signature": "Int-\u003e(Double-\u003e(Point,Point))-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Approximate.html#v:approximatePathMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "Basic",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-Basic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "Basic",
          "package": "cubicbezier",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "AffineTransform",
          "package": "cubicbezier",
          "source": "src/Geom2D.html#AffineTransform",
          "type": "class"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "AffineTransform",
          "package": "cubicbezier",
          "partial": "Affine Transform",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#t:AffineTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "CubicBezier",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "CubicBezier",
          "package": "cubicbezier",
          "partial": "Cubic Bezier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#t:CubicBezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "Path",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-Basic.html#Path",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "Path",
          "package": "cubicbezier",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "PathJoin",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-Basic.html#PathJoin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "PathJoin",
          "package": "cubicbezier",
          "partial": "Path Join",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#t:PathJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "ClosedPath",
          "package": "cubicbezier",
          "signature": "ClosedPath [(Point, PathJoin)]",
          "source": "src/Geom2D-CubicBezier-Basic.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "ClosedPath",
          "normalized": "ClosedPath[(Point,PathJoin)]",
          "package": "cubicbezier",
          "partial": "Closed Path",
          "signature": "ClosedPath[(Point,PathJoin)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:ClosedPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "CubicBezier",
          "package": "cubicbezier",
          "signature": "CubicBezier",
          "source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "CubicBezier",
          "package": "cubicbezier",
          "partial": "Cubic Bezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:CubicBezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "JoinCurve",
          "package": "cubicbezier",
          "signature": "JoinCurve Point Point",
          "source": "src/Geom2D-CubicBezier-Basic.html#PathJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "JoinCurve",
          "package": "cubicbezier",
          "partial": "Join Curve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:JoinCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "JoinLine",
          "package": "cubicbezier",
          "signature": "JoinLine",
          "source": "src/Geom2D-CubicBezier-Basic.html#PathJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "JoinLine",
          "package": "cubicbezier",
          "partial": "Join Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:JoinLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "OpenPath",
          "package": "cubicbezier",
          "signature": "OpenPath [(Point, PathJoin)] Point",
          "source": "src/Geom2D-CubicBezier-Basic.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "OpenPath",
          "normalized": "OpenPath[(Point,PathJoin)]Point",
          "package": "cubicbezier",
          "partial": "Open Path",
          "signature": "OpenPath[(Point,PathJoin)]Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:OpenPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "arcLength",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/Geom2D-CubicBezier-Basic.html#arcLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "arcLength",
          "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Length",
          "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:arcLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003earcLengthParam c len tol finds the parameter where the curve c has the arclength len,\n within tolerance tol.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "arcLengthParam",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/Geom2D-CubicBezier-Basic.html#arcLengthParam",
          "type": "function"
        },
        "index": {
          "description": "arcLengthParam len tol finds the parameter where the curve has the arclength len within tolerance tol",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "arcLengthParam",
          "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Length Param",
          "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:arcLengthParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierC0",
          "package": "cubicbezier",
          "signature": "Point",
          "source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierC0",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierC0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierC1",
          "package": "cubicbezier",
          "signature": "Point",
          "source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierC1",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierC1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierC2",
          "package": "cubicbezier",
          "signature": "Point",
          "source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierC2",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierC2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierC3",
          "package": "cubicbezier",
          "signature": "Point",
          "source": "src/Geom2D-CubicBezier-Basic.html#CubicBezier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierC3",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the parameter where the bezier curve is horizontal.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierHoriz",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e [Double]",
          "source": "src/Geom2D-CubicBezier-Basic.html#bezierHoriz",
          "type": "function"
        },
        "index": {
          "description": "Find the parameter where the bezier curve is horizontal",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierHoriz",
          "normalized": "CubicBezier-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Horiz",
          "signature": "CubicBezier-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierHoriz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the param lies on the curve, iff it's in the interval \u003ccode\u003e[0, 1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierParam",
          "package": "cubicbezier",
          "signature": "Double -\u003e Bool",
          "source": "src/Geom2D-CubicBezier-Basic.html#bezierParam",
          "type": "function"
        },
        "index": {
          "description": "Return True if the param lies on the curve iff it in the interval",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierParam",
          "normalized": "Double-\u003eBool",
          "package": "cubicbezier",
          "partial": "Param",
          "signature": "Double-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tolerance from the codomain to the domain of the bezier curve.\n Should be good enough, but may not hold for high very tolerance values.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierParamTolerance",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e Double",
          "source": "src/Geom2D-CubicBezier-Basic.html#bezierParamTolerance",
          "type": "function"
        },
        "index": {
          "description": "Convert tolerance from the codomain to the domain of the bezier curve Should be good enough but may not hold for high very tolerance values",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierParamTolerance",
          "normalized": "CubicBezier-\u003eDouble-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Param Tolerance",
          "signature": "CubicBezier-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierParamTolerance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the subsegment between the two parameters.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierSubsegment",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e Double -\u003e CubicBezier",
          "source": "src/Geom2D-CubicBezier-Basic.html#bezierSubsegment",
          "type": "function"
        },
        "index": {
          "description": "Return the subsegment between the two parameters",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierSubsegment",
          "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003eCubicBezier",
          "package": "cubicbezier",
          "partial": "Subsegment",
          "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003eCubicBezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierSubsegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the bernstein polynomial for each coordinate.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierToBernstein",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e (BernsteinPoly, BernsteinPoly)",
          "source": "src/Geom2D-CubicBezier-Basic.html#bezierToBernstein",
          "type": "function"
        },
        "index": {
          "description": "Give the bernstein polynomial for each coordinate",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierToBernstein",
          "normalized": "CubicBezier-\u003e(BernsteinPoly,BernsteinPoly)",
          "package": "cubicbezier",
          "partial": "To Bernstein",
          "signature": "CubicBezier-\u003e(BernsteinPoly,BernsteinPoly)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierToBernstein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the parameter where the bezier curve is vertical.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierVert",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e [Double]",
          "source": "src/Geom2D-CubicBezier-Basic.html#bezierVert",
          "type": "function"
        },
        "index": {
          "description": "Find the parameter where the bezier curve is vertical",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "bezierVert",
          "normalized": "CubicBezier-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Vert",
          "signature": "CubicBezier-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:bezierVert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if all the control points are colinear within tolerance.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "colinear",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e Bool",
          "source": "src/Geom2D-CubicBezier-Basic.html#colinear",
          "type": "function"
        },
        "index": {
          "description": "Return True if all the control points are colinear within tolerance",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "colinear",
          "normalized": "CubicBezier-\u003eDouble-\u003eBool",
          "package": "cubicbezier",
          "signature": "CubicBezier-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:colinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a value on the curve.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "evalBezier",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e Point",
          "source": "src/Geom2D-CubicBezier-Basic.html#evalBezier",
          "type": "function"
        },
        "index": {
          "description": "Calculate value on the curve",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "evalBezier",
          "normalized": "CubicBezier-\u003eDouble-\u003ePoint",
          "package": "cubicbezier",
          "partial": "Bezier",
          "signature": "CubicBezier-\u003eDouble-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:evalBezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a value and the first derivative on the curve.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "evalBezierDeriv",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e (Point, Point)",
          "source": "src/Geom2D-CubicBezier-Basic.html#evalBezierDeriv",
          "type": "function"
        },
        "index": {
          "description": "Calculate value and the first derivative on the curve",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "evalBezierDeriv",
          "normalized": "CubicBezier-\u003eDouble-\u003e(Point,Point)",
          "package": "cubicbezier",
          "partial": "Bezier Deriv",
          "signature": "CubicBezier-\u003eDouble-\u003e(Point,Point)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:evalBezierDeriv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a value and all derivatives on the curve.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "evalBezierDerivs",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e [Point]",
          "source": "src/Geom2D-CubicBezier-Basic.html#evalBezierDerivs",
          "type": "function"
        },
        "index": {
          "description": "Calculate value and all derivatives on the curve",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "evalBezierDerivs",
          "normalized": "CubicBezier-\u003eDouble-\u003e[Point]",
          "package": "cubicbezier",
          "partial": "Bezier Derivs",
          "signature": "CubicBezier-\u003eDouble-\u003e[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:evalBezierDerivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the cusps of a bezier.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "findBezierCusp",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e [Double]",
          "source": "src/Geom2D-CubicBezier-Basic.html#findBezierCusp",
          "type": "function"
        },
        "index": {
          "description": "Find the cusps of bezier",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "findBezierCusp",
          "normalized": "CubicBezier-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Bezier Cusp",
          "signature": "CubicBezier-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:findBezierCusp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind inflection points on the curve.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "findBezierInflection",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e [Double]",
          "source": "src/Geom2D-CubicBezier-Basic.html#findBezierInflection",
          "type": "function"
        },
        "index": {
          "description": "Find inflection points on the curve",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "findBezierInflection",
          "normalized": "CubicBezier-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Bezier Inflection",
          "signature": "CubicBezier-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:findBezierInflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efindBezierTangent p b\u003c/code\u003e finds the parameters where\n the tangent of the bezier curve \u003ccode\u003eb\u003c/code\u003e has the same direction as vector p.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "findBezierTangent",
          "package": "cubicbezier",
          "signature": "Point -\u003e CubicBezier -\u003e [Double]",
          "source": "src/Geom2D-CubicBezier-Basic.html#findBezierTangent",
          "type": "function"
        },
        "index": {
          "description": "findBezierTangent finds the parameters where the tangent of the bezier curve has the same direction as vector",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "findBezierTangent",
          "normalized": "Point-\u003eCubicBezier-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Bezier Tangent",
          "signature": "Point-\u003eCubicBezier-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:findBezierTangent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReorient to the curve B(1-t).\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "reorient",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e CubicBezier",
          "source": "src/Geom2D-CubicBezier-Basic.html#reorient",
          "type": "function"
        },
        "index": {
          "description": "Reorient to the curve",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "reorient",
          "normalized": "CubicBezier-\u003eCubicBezier",
          "package": "cubicbezier",
          "signature": "CubicBezier-\u003eCubicBezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:reorient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a bezier curve into two curves.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "splitBezier",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e (CubicBezier, CubicBezier)",
          "source": "src/Geom2D-CubicBezier-Basic.html#splitBezier",
          "type": "function"
        },
        "index": {
          "description": "Split bezier curve into two curves",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "splitBezier",
          "normalized": "CubicBezier-\u003eDouble-\u003e(CubicBezier,CubicBezier)",
          "package": "cubicbezier",
          "partial": "Bezier",
          "signature": "CubicBezier-\u003eDouble-\u003e(CubicBezier,CubicBezier)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:splitBezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a bezier curve into a list of beziers\n The parameters should be in ascending order or\n the result is unpredictable.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "splitBezierN",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e [Double] -\u003e [CubicBezier]",
          "source": "src/Geom2D-CubicBezier-Basic.html#splitBezierN",
          "type": "function"
        },
        "index": {
          "description": "Split bezier curve into list of beziers The parameters should be in ascending order or the result is unpredictable",
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "splitBezierN",
          "normalized": "CubicBezier-\u003e[Double]-\u003e[CubicBezier]",
          "package": "cubicbezier",
          "partial": "Bezier",
          "signature": "CubicBezier-\u003e[Double]-\u003e[CubicBezier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:splitBezierN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Basic",
          "name": "transform",
          "package": "cubicbezier",
          "signature": "Transform -\u003e a -\u003e a",
          "source": "src/Geom2D.html#transform",
          "type": "method"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Basic",
          "module": "Geom2D.CubicBezier.Basic",
          "name": "transform",
          "normalized": "Transform-\u003ea-\u003ea",
          "package": "cubicbezier",
          "signature": "Transform-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Basic.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "Curvature",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-Curvature.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier Curvature",
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "Curvature",
          "package": "cubicbezier",
          "partial": "Curvature",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurvature of the Bezier curve.  A negative curvature means the curve\n curves to the right.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "curvature",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e Double",
          "source": "src/Geom2D-CubicBezier-Curvature.html#curvature",
          "type": "function"
        },
        "index": {
          "description": "Curvature of the Bezier curve negative curvature means the curve curves to the right",
          "hierarchy": "Geom2D CubicBezier Curvature",
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "curvature",
          "normalized": "CubicBezier-\u003eDouble-\u003eDouble",
          "package": "cubicbezier",
          "signature": "CubicBezier-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#v:curvature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind extrema of the curvature, but not inflection points.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "curvatureExtrema",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e [Double]",
          "source": "src/Geom2D-CubicBezier-Curvature.html#curvatureExtrema",
          "type": "function"
        },
        "index": {
          "description": "Find extrema of the curvature but not inflection points",
          "hierarchy": "Geom2D CubicBezier Curvature",
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "curvatureExtrema",
          "normalized": "CubicBezier-\u003eDouble-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Extrema",
          "signature": "CubicBezier-\u003eDouble-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#v:curvatureExtrema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind points on the curve that have a certain radius of curvature.\n Values to the left and to the right of the curve are returned.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "findRadius",
          "package": "cubicbezier",
          "signature": "CubicBezier-\u003e Double-\u003e Double-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Find points on the curve that have certain radius of curvature Values to the left and to the right of the curve are returned",
          "hierarchy": "Geom2D CubicBezier Curvature",
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "findRadius",
          "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Radius",
          "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#v:findRadius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadius of curvature of the Bezier curve.  This\n is the reciprocal of the curvature.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "radiusOfCurvature",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Double -\u003e Double",
          "source": "src/Geom2D-CubicBezier-Curvature.html#radiusOfCurvature",
          "type": "function"
        },
        "index": {
          "description": "Radius of curvature of the Bezier curve This is the reciprocal of the curvature",
          "hierarchy": "Geom2D CubicBezier Curvature",
          "module": "Geom2D.CubicBezier.Curvature",
          "name": "radiusOfCurvature",
          "normalized": "CubicBezier-\u003eDouble-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Of Curvature",
          "signature": "CubicBezier-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Curvature.html#v:radiusOfCurvature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntersection routines using Bezier Clipping.  Provides also functions for finding the roots of onedimensional bezier curves.  This can be used as a general polynomial root solver by converting from the power basis to the bernstein basis.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "Intersection",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-Intersection.html",
          "type": "module"
        },
        "index": {
          "description": "Intersection routines using Bezier Clipping Provides also functions for finding the roots of onedimensional bezier curves This can be used as general polynomial root solver by converting from the power basis to the bernstein basis",
          "hierarchy": "Geom2D CubicBezier Intersection",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "Intersection",
          "package": "cubicbezier",
          "partial": "Intersection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the zero of a 1D bezier curve of any degree.  Note that this\n can be used as a bernstein polynomial root solver by converting from\n the power basis to the bernstein basis.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "bezierFindRoot",
          "package": "cubicbezier",
          "signature": "BernsteinPoly-\u003e Double-\u003e Double-\u003e Double-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Find the zero of bezier curve of any degree Note that this can be used as bernstein polynomial root solver by converting from the power basis to the bernstein basis",
          "hierarchy": "Geom2D CubicBezier Intersection",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "bezierFindRoot",
          "normalized": "BernsteinPoly-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Find Root",
          "signature": "BernsteinPoly-\u003eDouble-\u003eDouble-\u003eDouble-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#v:bezierFindRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the intersections between two Bezier curves within given\n tolerance, using the Bezier Clip algorithm. Returns the parameters\n for both curves.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "bezierIntersection",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e CubicBezier -\u003e Double -\u003e [(Double, Double)]",
          "source": "src/Geom2D-CubicBezier-Intersection.html#bezierIntersection",
          "type": "function"
        },
        "index": {
          "description": "Find the intersections between two Bezier curves within given tolerance using the Bezier Clip algorithm Returns the parameters for both curves",
          "hierarchy": "Geom2D CubicBezier Intersection",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "bezierIntersection",
          "normalized": "CubicBezier-\u003eCubicBezier-\u003eDouble-\u003e[(Double,Double)]",
          "package": "cubicbezier",
          "partial": "Intersection",
          "signature": "CubicBezier-\u003eCubicBezier-\u003eDouble-\u003e[(Double,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#v:bezierIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the intersections of the curve with a line.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "bezierLineIntersections",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Line -\u003e Double -\u003e [Double]",
          "source": "src/Geom2D-CubicBezier-Intersection.html#bezierLineIntersections",
          "type": "function"
        },
        "index": {
          "description": "Find the intersections of the curve with line",
          "hierarchy": "Geom2D CubicBezier Intersection",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "bezierLineIntersections",
          "normalized": "CubicBezier-\u003eLine-\u003eDouble-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Line Intersections",
          "signature": "CubicBezier-\u003eLine-\u003eDouble-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#v:bezierLineIntersections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the closest value(s) on the bezier to the given point, within tolerance.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "closest",
          "package": "cubicbezier",
          "signature": "CubicBezier -\u003e Point -\u003e Double -\u003e [Double]",
          "source": "src/Geom2D-CubicBezier-Intersection.html#closest",
          "type": "function"
        },
        "index": {
          "description": "Find the closest value on the bezier to the given point within tolerance",
          "hierarchy": "Geom2D CubicBezier Intersection",
          "module": "Geom2D.CubicBezier.Intersection",
          "name": "closest",
          "normalized": "CubicBezier-\u003ePoint-\u003eDouble-\u003e[Double]",
          "package": "cubicbezier",
          "signature": "CubicBezier-\u003ePoint-\u003eDouble-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Intersection.html#v:closest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements an extension to paths as used in\n D.E.Knuth's \u003cem\u003eMetafont\u003c/em\u003e.  Metafont gives a more intuitive method to\n specify paths than bezier curves.  I'll give a brief overview of\n the metafont curves.  For a more in depth explanation look at\n \u003cem\u003eThe MetafontBook\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eEach spline has a tension parameter, which is a relative measure of\n the length of the curve.  You can specify the tension for the left\n side and the right side of the spline separately.  By default\n metafont gives a tension of 1, which gives a good looking curve.\n Tensions shouldn't be less than 3/4, but this implementation\n doesn't check for it.  If you want to avoid points of inflection on\n the spline, you can use \u003ccode\u003eTensionAtLeast\u003c/code\u003e instead of \u003ccode\u003eTension\u003c/code\u003e,\n which will adjust the length of the control points so they fall\n into the \u003cem\u003ebounding triangle\u003c/em\u003e, if such a triangle exist.\n\u003c/p\u003e\u003cp\u003eYou can either give directions for each node, or let metafont find\n them.  Metafont will solve a set of equations to find the\n directions.  You can also let metafont find directions at corner\n points by setting the \u003cem\u003ecurl\u003c/em\u003e, which is how much the point \u003cem\u003ecurls\u003c/em\u003e\n at that point.  At endpoints a curl of 1 is implied when it is not\n given.\n\u003c/p\u003e\u003cp\u003eMetafont will then find the control points from the path for you.\n You can also specify the control points explicitly.\n\u003c/p\u003e\u003cp\u003eHere is an example path from the metafont program text:\n\u003c/p\u003e\u003cpre\u003e\n z0..z1..tension atleast 1..{curl 2}z2..z3{-1,-2}..tension 3 and 4..z4..controls z45 and z54..z5\n\u003c/pre\u003e\u003cp\u003eThis path is equivalent to:\n\u003c/p\u003e\u003cpre\u003e\n z0{curl 1}..tension atleast 1 and atleast 1..{curl 2}z2{curl 2}..tension 1 and 1..\n {-1,-2}z3{-1,-2}..tension 3 and 4..z4..controls z45 and z54..z5\n\u003c/pre\u003e\u003cp\u003eThis path can be used with the following datatype:\n\u003c/p\u003e\u003cpre\u003e\n OpenMetaPath [ (z0, MetaJoin Open (Tension 1) (Tension 1) Open)\n              , (z1, MetaJoin Open (TensionAtLeast 1) (TensionAtLeast 1) (Curl 2))\n              , (z2, MetaJoin Open (Tension 1) (Tension 1) Open)\n              , (z3, MetaJoin (Direction (Point (-1) (-2))) (Tension 3) (Tension 4) Open)\n              , (z4, Controls z45 z54)\n              ] z5\n\u003c/pre\u003e\u003cp\u003eCyclic paths are similar, but use the \u003ccode\u003eCyclicMetaPath\u003c/code\u003e contructor.\n There is no ending point, since the ending point will be the same\n as the first point.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaPath",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-MetaPath.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements an extension to paths as used in D.E.Knuth Metafont Metafont gives more intuitive method to specify paths than bezier curves ll give brief overview of the metafont curves For more in depth explanation look at The MetafontBook Each spline has tension parameter which is relative measure of the length of the curve You can specify the tension for the left side and the right side of the spline separately By default metafont gives tension of which gives good looking curve Tensions shouldn be less than but this implementation doesn check for it If you want to avoid points of inflection on the spline you can use TensionAtLeast instead of Tension which will adjust the length of the control points so they fall into the bounding triangle if such triangle exist You can either give directions for each node or let metafont find them Metafont will solve set of equations to find the directions You can also let metafont find directions at corner points by setting the curl which is how much the point curls at that point At endpoints curl of is implied when it is not given Metafont will then find the control points from the path for you You can also specify the control points explicitly Here is an example path from the metafont program text z0..z1..tension atleast curl z2..z3 tension and z4..controls z45 and z54..z5 This path is equivalent to z0 curl tension atleast and atleast curl z2 curl tension and z3 tension and z4..controls z45 and z54..z5 This path can be used with the following datatype OpenMetaPath z0 MetaJoin Open Tension Tension Open z1 MetaJoin Open TensionAtLeast TensionAtLeast Curl z2 MetaJoin Open Tension Tension Open z3 MetaJoin Direction Point Tension Tension Open z4 Controls z45 z54 z5 Cyclic paths are similar but use the CyclicMetaPath contructor There is no ending point since the ending point will be the same as the first point",
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaPath",
          "package": "cubicbezier",
          "partial": "Meta Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaJoin",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaJoin",
          "package": "cubicbezier",
          "partial": "Meta Join",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#t:MetaJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaNodeType",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaNodeType",
          "package": "cubicbezier",
          "partial": "Meta Node Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#t:MetaNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaPath",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaPath",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaPath",
          "package": "cubicbezier",
          "partial": "Meta Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#t:MetaPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Tension",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#Tension",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Tension",
          "package": "cubicbezier",
          "partial": "Tension",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#t:Tension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Controls",
          "package": "cubicbezier",
          "signature": "Controls Point Point",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Controls",
          "package": "cubicbezier",
          "partial": "Controls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Controls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Curl",
          "package": "cubicbezier",
          "signature": "Curl",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Curl",
          "package": "cubicbezier",
          "partial": "Curl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Curl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "CyclicMetaPath",
          "package": "cubicbezier",
          "signature": "CyclicMetaPath [(Point, MetaJoin)]",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "CyclicMetaPath",
          "normalized": "CyclicMetaPath[(Point,MetaJoin)]",
          "package": "cubicbezier",
          "partial": "Cyclic Meta Path",
          "signature": "CyclicMetaPath[(Point,MetaJoin)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:CyclicMetaPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Direction",
          "package": "cubicbezier",
          "signature": "Direction",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Direction",
          "package": "cubicbezier",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaJoin",
          "package": "cubicbezier",
          "signature": "MetaJoin",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "MetaJoin",
          "package": "cubicbezier",
          "partial": "Meta Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:MetaJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Open",
          "package": "cubicbezier",
          "signature": "Open",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Open",
          "package": "cubicbezier",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "OpenMetaPath",
          "package": "cubicbezier",
          "signature": "OpenMetaPath [(Point, MetaJoin)] Point",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "OpenMetaPath",
          "normalized": "OpenMetaPath[(Point,MetaJoin)]Point",
          "package": "cubicbezier",
          "partial": "Open Meta Path",
          "signature": "OpenMetaPath[(Point,MetaJoin)]Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:OpenMetaPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Tension",
          "package": "cubicbezier",
          "signature": "Tension",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#Tension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "Tension",
          "package": "cubicbezier",
          "partial": "Tension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:Tension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "TensionAtLeast",
          "package": "cubicbezier",
          "signature": "TensionAtLeast",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#Tension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "TensionAtLeast",
          "package": "cubicbezier",
          "partial": "Tension At Least",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:TensionAtLeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "curlgamma",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "curlgamma",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:curlgamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "metaTypeL",
          "package": "cubicbezier",
          "signature": "MetaNodeType",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "metaTypeL",
          "package": "cubicbezier",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:metaTypeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "metaTypeR",
          "package": "cubicbezier",
          "signature": "MetaNodeType",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "metaTypeR",
          "package": "cubicbezier",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:metaTypeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "nodedir",
          "package": "cubicbezier",
          "signature": "Point",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaNodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "nodedir",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:nodedir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "tensionL",
          "package": "cubicbezier",
          "signature": "Tension",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "tensionL",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:tensionL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "tensionR",
          "package": "cubicbezier",
          "signature": "Tension",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#MetaJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "tensionR",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:tensionR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "tensionValue",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#Tension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "tensionValue",
          "package": "cubicbezier",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:tensionValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a normal path from a metapath.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "unmeta",
          "package": "cubicbezier",
          "signature": "MetaPath -\u003e Path",
          "source": "src/Geom2D-CubicBezier-MetaPath.html#unmeta",
          "type": "function"
        },
        "index": {
          "description": "Create normal path from metapath",
          "hierarchy": "Geom2D CubicBezier MetaPath",
          "module": "Geom2D.CubicBezier.MetaPath",
          "name": "unmeta",
          "normalized": "MetaPath-\u003ePath",
          "package": "cubicbezier",
          "signature": "MetaPath-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-MetaPath.html#v:unmeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOffsetting bezier curves and stroking curves.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Geom2D.CubicBezier.Outline",
          "name": "Outline",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier-Outline.html",
          "type": "module"
        },
        "index": {
          "description": "Offsetting bezier curves and stroking curves",
          "hierarchy": "Geom2D CubicBezier Outline",
          "module": "Geom2D.CubicBezier.Outline",
          "name": "Outline",
          "package": "cubicbezier",
          "partial": "Outline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Outline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate an offset path from the bezier curve to within\n tolerance.  If the distance is positive offset to the left,\n otherwise to the right. A smaller tolerance may require more bezier\n curves in the path to approximate the offset curve\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Outline",
          "name": "bezierOffset",
          "package": "cubicbezier",
          "signature": "CubicBezier-\u003e Double-\u003e Double-\u003e [CubicBezier]",
          "type": "function"
        },
        "index": {
          "description": "Calculate an offset path from the bezier curve to within tolerance If the distance is positive offset to the left otherwise to the right smaller tolerance may require more bezier curves in the path to approximate the offset curve",
          "hierarchy": "Geom2D CubicBezier Outline",
          "module": "Geom2D.CubicBezier.Outline",
          "name": "bezierOffset",
          "normalized": "CubicBezier-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
          "package": "cubicbezier",
          "partial": "Offset",
          "signature": "CubicBezier-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Outline.html#v:bezierOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike bezierOffset, but limit the number of subpaths for each\n smooth subsegment.  The number should not be smaller than one.\n\u003c/p\u003e",
          "module": "Geom2D.CubicBezier.Outline",
          "name": "bezierOffsetMax",
          "package": "cubicbezier",
          "signature": "Int -\u003e CubicBezier -\u003e Double -\u003e Double -\u003e [CubicBezier]",
          "source": "src/Geom2D-CubicBezier-Outline.html#bezierOffsetMax",
          "type": "function"
        },
        "index": {
          "description": "Like bezierOffset but limit the number of subpaths for each smooth subsegment The number should not be smaller than one",
          "hierarchy": "Geom2D CubicBezier Outline",
          "module": "Geom2D.CubicBezier.Outline",
          "name": "bezierOffsetMax",
          "normalized": "Int-\u003eCubicBezier-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
          "package": "cubicbezier",
          "partial": "Offset Max",
          "signature": "Int-\u003eCubicBezier-\u003eDouble-\u003eDouble-\u003e[CubicBezier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier-Outline.html#v:bezierOffsetMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExport all the cubic bezier functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Geom2D.CubicBezier",
          "name": "CubicBezier",
          "package": "cubicbezier",
          "source": "src/Geom2D-CubicBezier.html",
          "type": "module"
        },
        "index": {
          "description": "Export all the cubic bezier functions",
          "hierarchy": "Geom2D CubicBezier",
          "module": "Geom2D.CubicBezier",
          "name": "CubicBezier",
          "package": "cubicbezier",
          "partial": "Cubic Bezier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D-CubicBezier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic 2 dimensional geometry functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Geom2D",
          "name": "Geom2D",
          "package": "cubicbezier",
          "source": "src/Geom2D.html",
          "type": "module"
        },
        "index": {
          "description": "Basic dimensional geometry functions",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "Geom2D",
          "package": "cubicbezier",
          "partial": "Geom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "AffineTransform",
          "package": "cubicbezier",
          "source": "src/Geom2D.html#AffineTransform",
          "type": "class"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "AffineTransform",
          "package": "cubicbezier",
          "partial": "Affine Transform",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:AffineTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "Line",
          "package": "cubicbezier",
          "source": "src/Geom2D.html#Line",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "Line",
          "package": "cubicbezier",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "Point",
          "package": "cubicbezier",
          "source": "src/Geom2D.html#Point",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "Point",
          "package": "cubicbezier",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "Polygon",
          "package": "cubicbezier",
          "source": "src/Geom2D.html#Polygon",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "Polygon",
          "package": "cubicbezier",
          "partial": "Polygon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transformation (x, y) -\u003e (ax + by + c, dx + ey + d)\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "Transform",
          "package": "cubicbezier",
          "source": "src/Geom2D.html#Transform",
          "type": "data"
        },
        "index": {
          "description": "transformation ax by dx ey",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "Transform",
          "package": "cubicbezier",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator for applying a transformation.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "($*)",
          "package": "cubicbezier",
          "signature": "Transform -\u003e a -\u003e a",
          "source": "src/Geom2D.html#%24%2A",
          "type": "function"
        },
        "index": {
          "description": "Operator for applying transformation",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "($*) $*",
          "normalized": "Transform-\u003ea-\u003ea",
          "package": "cubicbezier",
          "signature": "Transform-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-36--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale vector by constant.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "(*^)",
          "package": "cubicbezier",
          "signature": "Double -\u003e Point -\u003e Point",
          "source": "src/Geom2D.html#%2A%5E",
          "type": "function"
        },
        "index": {
          "description": "Scale vector by constant",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "(*^) *^",
          "normalized": "Double-\u003ePoint-\u003ePoint",
          "package": "cubicbezier",
          "signature": "Double-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-42--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale vector by constant, with the arguments swapped.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "(^*)",
          "package": "cubicbezier",
          "signature": "Point -\u003e Double -\u003e Point",
          "source": "src/Geom2D.html#%5E%2A",
          "type": "function"
        },
        "index": {
          "description": "Scale vector by constant with the arguments swapped",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "(^*) ^*",
          "normalized": "Point-\u003eDouble-\u003ePoint",
          "package": "cubicbezier",
          "signature": "Point-\u003eDouble-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two vectors.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "(^+^)",
          "package": "cubicbezier",
          "signature": "Point -\u003e Point -\u003e Point",
          "source": "src/Geom2D.html#%5E%2B%5E",
          "type": "function"
        },
        "index": {
          "description": "Add two vectors",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "(^+^) ^+^",
          "normalized": "Point-\u003ePoint-\u003ePoint",
          "package": "cubicbezier",
          "signature": "Point-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94--43--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract two vectors.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "(^-^)",
          "package": "cubicbezier",
          "signature": "Point -\u003e Point -\u003e Point",
          "source": "src/Geom2D.html#%5E-%5E",
          "type": "function"
        },
        "index": {
          "description": "Subtract two vectors",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "(^-^) ^-^",
          "normalized": "Point-\u003ePoint-\u003ePoint",
          "package": "cubicbezier",
          "signature": "Point-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94--45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale vector by reciprocal of constant.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "(^/)",
          "package": "cubicbezier",
          "signature": "Point -\u003e Double -\u003e Point",
          "source": "src/Geom2D.html#%5E%2F",
          "type": "function"
        },
        "index": {
          "description": "Scale vector by reciprocal of constant",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "(^/) ^/",
          "normalized": "Point-\u003eDouble-\u003ePoint",
          "package": "cubicbezier",
          "signature": "Point-\u003eDouble-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot product of two vectors.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "(^.^)",
          "package": "cubicbezier",
          "signature": "Point -\u003e Point -\u003e Double",
          "source": "src/Geom2D.html#%5E.%5E",
          "type": "function"
        },
        "index": {
          "description": "Dot product of two vectors",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "(^.^) ^.^",
          "normalized": "Point-\u003ePoint-\u003eDouble",
          "package": "cubicbezier",
          "signature": "Point-\u003ePoint-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:-94-.-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "Line",
          "package": "cubicbezier",
          "signature": "Line Point Point",
          "source": "src/Geom2D.html#Line",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "Line",
          "package": "cubicbezier",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "Point",
          "package": "cubicbezier",
          "signature": "Point",
          "source": "src/Geom2D.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "Point",
          "package": "cubicbezier",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "Polygon",
          "package": "cubicbezier",
          "signature": "Polygon [Point]",
          "source": "src/Geom2D.html#Polygon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "Polygon",
          "normalized": "Polygon[Point]",
          "package": "cubicbezier",
          "partial": "Polygon",
          "signature": "Polygon[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "Transform",
          "package": "cubicbezier",
          "signature": "Transform",
          "source": "src/Geom2D.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "Transform",
          "package": "cubicbezier",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unitvector with the given angle.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "dirVector",
          "package": "cubicbezier",
          "signature": "Double -\u003e Point",
          "source": "src/Geom2D.html#dirVector",
          "type": "function"
        },
        "index": {
          "description": "The unitvector with the given angle",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "dirVector",
          "normalized": "Double-\u003ePoint",
          "package": "cubicbezier",
          "partial": "Vector",
          "signature": "Double-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:dirVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpolate between two vectors.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "interpolateVector",
          "package": "cubicbezier",
          "signature": "Point -\u003e Point -\u003e Double -\u003e Point",
          "source": "src/Geom2D.html#interpolateVector",
          "type": "function"
        },
        "index": {
          "description": "Interpolate between two vectors",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "interpolateVector",
          "normalized": "Point-\u003ePoint-\u003eDouble-\u003ePoint",
          "package": "cubicbezier",
          "partial": "Vector",
          "signature": "Point-\u003ePoint-\u003eDouble-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:interpolateVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the inverse of a transformation.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "inverse",
          "package": "cubicbezier",
          "signature": "Transform -\u003e Maybe Transform",
          "source": "src/Geom2D.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "Calculate the inverse of transformation",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "inverse",
          "normalized": "Transform-\u003eMaybe Transform",
          "package": "cubicbezier",
          "signature": "Transform-\u003eMaybe Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the the distance from a point to the line.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "lineDistance",
          "package": "cubicbezier",
          "signature": "Line -\u003e Point -\u003e Double",
          "source": "src/Geom2D.html#lineDistance",
          "type": "function"
        },
        "index": {
          "description": "Return the the distance from point to the line",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "lineDistance",
          "normalized": "Line-\u003ePoint-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Distance",
          "signature": "Line-\u003ePoint-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:lineDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the parameters (a, b, c) for the normalised equation\n of the line: \u003ccode\u003ea*x + b*y + c = 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "lineEquation",
          "package": "cubicbezier",
          "signature": "Line -\u003e (Double, Double, Double)",
          "source": "src/Geom2D.html#lineEquation",
          "type": "function"
        },
        "index": {
          "description": "Return the parameters for the normalised equation of the line",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "lineEquation",
          "normalized": "Line-\u003e(Double,Double,Double)",
          "package": "cubicbezier",
          "partial": "Equation",
          "signature": "Line-\u003e(Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:lineEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unit vector with the same direction.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "normVector",
          "package": "cubicbezier",
          "signature": "Point -\u003e Point",
          "source": "src/Geom2D.html#normVector",
          "type": "function"
        },
        "index": {
          "description": "The unit vector with the same direction",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "normVector",
          "normalized": "Point-\u003ePoint",
          "package": "cubicbezier",
          "partial": "Vector",
          "signature": "Point-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:normVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "pointX",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "pointX",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:pointX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "pointY",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "pointY",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:pointY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a transform that rotates by the given angle (radians).\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "rotate",
          "package": "cubicbezier",
          "signature": "Double -\u003e Transform",
          "source": "src/Geom2D.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Create transform that rotates by the given angle radians",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "rotate",
          "normalized": "Double-\u003eTransform",
          "package": "cubicbezier",
          "signature": "Double-\u003eTransform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate vector 90 degrees left.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "rotate90L",
          "package": "cubicbezier",
          "signature": "Transform",
          "source": "src/Geom2D.html#rotate90L",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector degrees left",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "rotate90L",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:rotate90L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate vector 90 degrees right.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "rotate90R",
          "package": "cubicbezier",
          "signature": "Transform",
          "source": "src/Geom2D.html#rotate90R",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector degrees right",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "rotate90R",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:rotate90R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a transform that rotates by the angle of the given vector\n with the x-axis\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "rotateVec",
          "package": "cubicbezier",
          "signature": "Point -\u003e Transform",
          "source": "src/Geom2D.html#rotateVec",
          "type": "function"
        },
        "index": {
          "description": "Create transform that rotates by the angle of the given vector with the x-axis",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "rotateVec",
          "normalized": "Point-\u003eTransform",
          "package": "cubicbezier",
          "partial": "Vec",
          "signature": "Point-\u003eTransform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:rotateVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "transform",
          "package": "cubicbezier",
          "signature": "Transform -\u003e a -\u003e a",
          "source": "src/Geom2D.html#transform",
          "type": "method"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "transform",
          "normalized": "Transform-\u003ea-\u003ea",
          "package": "cubicbezier",
          "signature": "Transform-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a transform that translates by the given vector.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "translate",
          "package": "cubicbezier",
          "signature": "Point -\u003e Transform",
          "source": "src/Geom2D.html#translate",
          "type": "function"
        },
        "index": {
          "description": "Create transform that translates by the given vector",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "translate",
          "normalized": "Point-\u003eTransform",
          "package": "cubicbezier",
          "signature": "Point-\u003eTransform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe angle of the vector, in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "vectorAngle",
          "package": "cubicbezier",
          "signature": "Point -\u003e Double",
          "source": "src/Geom2D.html#vectorAngle",
          "type": "function"
        },
        "index": {
          "description": "The angle of the vector in the range pi pi",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "vectorAngle",
          "normalized": "Point-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Angle",
          "signature": "Point-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:vectorAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCross product of two vectors.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "vectorCross",
          "package": "cubicbezier",
          "signature": "Point -\u003e Point -\u003e Double",
          "source": "src/Geom2D.html#vectorCross",
          "type": "function"
        },
        "index": {
          "description": "Cross product of two vectors",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "vectorCross",
          "normalized": "Point-\u003ePoint-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Cross",
          "signature": "Point-\u003ePoint-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:vectorCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance between two vectors.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "vectorDistance",
          "package": "cubicbezier",
          "signature": "Point -\u003e Point -\u003e Double",
          "source": "src/Geom2D.html#vectorDistance",
          "type": "function"
        },
        "index": {
          "description": "Distance between two vectors",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "vectorDistance",
          "normalized": "Point-\u003ePoint-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Distance",
          "signature": "Point-\u003ePoint-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:vectorDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lenght of the vector.\n\u003c/p\u003e",
          "module": "Geom2D",
          "name": "vectorMag",
          "package": "cubicbezier",
          "signature": "Point -\u003e Double",
          "source": "src/Geom2D.html#vectorMag",
          "type": "function"
        },
        "index": {
          "description": "The lenght of the vector",
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "vectorMag",
          "normalized": "Point-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Mag",
          "signature": "Point-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:vectorMag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "xformA",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "xformA",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "xformB",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "xformB",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "xformC",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "xformC",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "xformD",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "xformD",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "xformE",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "xformE",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geom2D",
          "name": "xformF",
          "package": "cubicbezier",
          "signature": "Double",
          "source": "src/Geom2D.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geom2D",
          "module": "Geom2D",
          "name": "xformF",
          "package": "cubicbezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Geom2D.html#v:xformF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.BernsteinPoly",
          "name": "BernsteinPoly",
          "package": "cubicbezier",
          "source": "src/Math-BernsteinPoly.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "BernsteinPoly",
          "package": "cubicbezier",
          "partial": "Bernstein Poly",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.BernsteinPoly",
          "name": "BernsteinPoly",
          "package": "cubicbezier",
          "source": "src/Math-BernsteinPoly.html#BernsteinPoly",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "BernsteinPoly",
          "package": "cubicbezier",
          "partial": "Bernstein Poly",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#t:BernsteinPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two bernstein polynomials.  The final degree\n will be the sum of either degrees.  This operation takes O((n+m)^2)\n with n and m the degree of the beziers.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "(~*)",
          "package": "cubicbezier",
          "signature": "BernsteinPoly -\u003e BernsteinPoly -\u003e BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#~%2A",
          "type": "function"
        },
        "index": {
          "description": "Multiply two bernstein polynomials The final degree will be the sum of either degrees This operation takes with and the degree of the beziers",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "(~*) ~*",
          "normalized": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly",
          "package": "cubicbezier",
          "signature": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:-126--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum two bernstein polynomials.  The final degree will be the maximum of either\n degrees.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "(~+)",
          "package": "cubicbezier",
          "signature": "BernsteinPoly -\u003e BernsteinPoly -\u003e BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#~%2B",
          "type": "function"
        },
        "index": {
          "description": "Sum two bernstein polynomials The final degree will be the maximum of either degrees",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "(~+) ~+",
          "normalized": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly",
          "package": "cubicbezier",
          "signature": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:-126--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract two bernstein polynomials.  The final degree will be the maximum of either\n degrees.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "(~-)",
          "package": "cubicbezier",
          "signature": "BernsteinPoly -\u003e BernsteinPoly -\u003e BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#~-",
          "type": "function"
        },
        "index": {
          "description": "Subtract two bernstein polynomials The final degree will be the maximum of either degrees",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "(~-) ~-",
          "normalized": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly",
          "package": "cubicbezier",
          "signature": "BernsteinPoly-\u003eBernsteinPoly-\u003eBernsteinPoly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:-126--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a bernstein polynomial by a constant.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "(*~)",
          "package": "cubicbezier",
          "signature": "Double -\u003e BernsteinPoly -\u003e BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#%2A~",
          "type": "function"
        },
        "index": {
          "description": "Scale bernstein polynomial by constant",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "(*~) *~",
          "normalized": "Double-\u003eBernsteinPoly-\u003eBernsteinPoly",
          "package": "cubicbezier",
          "signature": "Double-\u003eBernsteinPoly-\u003eBernsteinPoly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:-42--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.BernsteinPoly",
          "name": "BernsteinPoly",
          "package": "cubicbezier",
          "signature": "BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#BernsteinPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "BernsteinPoly",
          "package": "cubicbezier",
          "partial": "Bernstein Poly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:BernsteinPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.BernsteinPoly",
          "name": "bernsteinCoeffs",
          "package": "cubicbezier",
          "signature": "[Double]",
          "source": "src/Math-BernsteinPoly.html#BernsteinPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinCoeffs",
          "normalized": "[Double]",
          "package": "cubicbezier",
          "partial": "Coeffs",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinCoeffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.BernsteinPoly",
          "name": "bernsteinDegree",
          "package": "cubicbezier",
          "signature": "Int",
          "source": "src/Math-BernsteinPoly.html#BernsteinPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinDegree",
          "package": "cubicbezier",
          "partial": "Degree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the derivative of a bernstein polynomial.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinDeriv",
          "package": "cubicbezier",
          "signature": "BernsteinPoly -\u003e BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#bernsteinDeriv",
          "type": "function"
        },
        "index": {
          "description": "Find the derivative of bernstein polynomial",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinDeriv",
          "normalized": "BernsteinPoly-\u003eBernsteinPoly",
          "package": "cubicbezier",
          "partial": "Deriv",
          "signature": "BernsteinPoly-\u003eBernsteinPoly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinDeriv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the bernstein polynomial.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinEval",
          "package": "cubicbezier",
          "signature": "BernsteinPoly -\u003e Double -\u003e Double",
          "source": "src/Math-BernsteinPoly.html#bernsteinEval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the bernstein polynomial",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinEval",
          "normalized": "BernsteinPoly-\u003eDouble-\u003eDouble",
          "package": "cubicbezier",
          "partial": "Eval",
          "signature": "BernsteinPoly-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the bernstein polynomial and its derivatives.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinEvalDerivs",
          "package": "cubicbezier",
          "signature": "BernsteinPoly -\u003e Double -\u003e [Double]",
          "source": "src/Math-BernsteinPoly.html#bernsteinEvalDerivs",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the bernstein polynomial and its derivatives",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinEvalDerivs",
          "normalized": "BernsteinPoly-\u003eDouble-\u003e[Double]",
          "package": "cubicbezier",
          "partial": "Eval Derivs",
          "signature": "BernsteinPoly-\u003eDouble-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinEvalDerivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a bernstein polynomial\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinSplit",
          "package": "cubicbezier",
          "signature": "BernsteinPoly -\u003e Double -\u003e (BernsteinPoly, BernsteinPoly)",
          "source": "src/Math-BernsteinPoly.html#bernsteinSplit",
          "type": "function"
        },
        "index": {
          "description": "Split bernstein polynomial",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinSplit",
          "normalized": "BernsteinPoly-\u003eDouble-\u003e(BernsteinPoly,BernsteinPoly)",
          "package": "cubicbezier",
          "partial": "Split",
          "signature": "BernsteinPoly-\u003eDouble-\u003e(BernsteinPoly,BernsteinPoly)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the subsegment between the two parameters.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinSubsegment",
          "package": "cubicbezier",
          "signature": "BernsteinPoly -\u003e Double -\u003e Double -\u003e BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#bernsteinSubsegment",
          "type": "function"
        },
        "index": {
          "description": "Return the subsegment between the two parameters",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "bernsteinSubsegment",
          "normalized": "BernsteinPoly-\u003eDouble-\u003eDouble-\u003eBernsteinPoly",
          "package": "cubicbezier",
          "partial": "Subsegment",
          "signature": "BernsteinPoly-\u003eDouble-\u003eDouble-\u003eBernsteinPoly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:bernsteinSubsegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDegree elevate a bernstein polynomail a number of times.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "degreeElevate",
          "package": "cubicbezier",
          "signature": "BernsteinPoly -\u003e Int -\u003e BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#degreeElevate",
          "type": "function"
        },
        "index": {
          "description": "Degree elevate bernstein polynomail number of times",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "degreeElevate",
          "normalized": "BernsteinPoly-\u003eInt-\u003eBernsteinPoly",
          "package": "cubicbezier",
          "partial": "Elevate",
          "signature": "BernsteinPoly-\u003eInt-\u003eBernsteinPoly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:degreeElevate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a bernstein polynomail from a list of co&#235;fficients.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "listToBernstein",
          "package": "cubicbezier",
          "signature": "[Double] -\u003e BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#listToBernstein",
          "type": "function"
        },
        "index": {
          "description": "Create bernstein polynomail from list of co fficients",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "listToBernstein",
          "normalized": "[Double]-\u003eBernsteinPoly",
          "package": "cubicbezier",
          "partial": "To Bernstein",
          "signature": "[Double]-\u003eBernsteinPoly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:listToBernstein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constant zero.\n\u003c/p\u003e",
          "module": "Math.BernsteinPoly",
          "name": "zeroPoly",
          "package": "cubicbezier",
          "signature": "BernsteinPoly",
          "source": "src/Math-BernsteinPoly.html#zeroPoly",
          "type": "function"
        },
        "index": {
          "description": "The constant zero",
          "hierarchy": "Math BernsteinPoly",
          "module": "Math.BernsteinPoly",
          "name": "zeroPoly",
          "package": "cubicbezier",
          "partial": "Poly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicbezier/docs/Math-BernsteinPoly.html#v:zeroPoly"
      }
    }
  ]
]