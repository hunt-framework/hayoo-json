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
        "word": "cubicspline"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.CubicSpline",
          "name": "CubicSpline",
          "package": "cubicspline",
          "source": "src/Data-Algorithm-CubicSpline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Algorithm CubicSpline",
          "module": "Data.Algorithm.CubicSpline",
          "name": "CubicSpline",
          "package": "cubicspline",
          "partial": "Cubic Spline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cubicspline/docs/Data-Algorithm-CubicSpline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of (x,y) co-ordinates, produces a list of coefficients to cubic equations, with knots at each of the initially provided x co-ordinates. Natural cubic spline interpololation is used. See: \u003ca\u003ehttp://en.wikipedia.org/wiki/Spline_interpolation#Interpolation_using_natural_cubic_spline\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Algorithm.CubicSpline",
          "name": "cubicSplineCoefficients",
          "package": "cubicspline",
          "signature": "[(Double, Double)] -\u003e [PolyCos]",
          "source": "src/Data-Algorithm-CubicSpline.html#cubicSplineCoefficients",
          "type": "function"
        },
        "index": {
          "description": "Given list of co-ordinates produces list of coefficients to cubic equations with knots at each of the initially provided co-ordinates Natural cubic spline interpololation is used See http en.wikipedia.org wiki Spline interpolation Interpolation using natural cubic spline",
          "hierarchy": "Data Algorithm CubicSpline",
          "module": "Data.Algorithm.CubicSpline",
          "name": "cubicSplineCoefficients",
          "normalized": "[(Double,Double)]-\u003e[PolyCos]",
          "package": "cubicspline",
          "partial": "Spline Coefficients",
          "signature": "[(Double,Double)]-\u003e[PolyCos]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cubicspline/docs/Data-Algorithm-CubicSpline.html#v:cubicSplineCoefficients"
      }
    }
  ]
]