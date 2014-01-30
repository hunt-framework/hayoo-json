[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-ESSA.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHardware based, exact computation using the ESSA algorithm in double precision (1) \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e We're using Float inputs on Double precision ESSA at the moment. Hopefully later we can add support for Double inputs on Quadruple ESSA\n\u003c/li\u003e\u003cli\u003e Line intersection is based on the algorithm presented in (4)\n\u003c/li\u003e\u003cli\u003e ccw and incircle based on (5)\n\u003c/li\u003e\u003cli\u003e See (2) and (3) for more information on the splitDouble operation\n\u003c/li\u003e\u003cli\u003e We assume realToFrac is broken and that CFloat == Float and CDouble == Double\n\u003c/li\u003e\u003c/ul\u003e\u003col\u003e\u003cli\u003e Helmut Ratschek, Jon Rokne. \"Exact computation of the sign of a finite sum\". Applied Mathematics and Computation, Volume 99, Issue 2-3, Pages: 99-127, ISSN:0096-3003, 1999.   \n\u003c/li\u003e\u003cli\u003e Siegfried M. Rump. \"High precision evaluation of nonlinear functions\" \n\u003c/li\u003e\u003cli\u003e T.J. Dekker. \"A Floating-Point Technique for Extending the Available Precision\". Numerische Mathematik, 18:224-242, 1971.\n\u003c/li\u003e\u003cli\u003e Marina Gavrilova, Jon Rokne. \"Reliable line segment intersection testing\"\n\u003c/li\u003e\u003cli\u003e Marina Gavrilova, Helmut Ratschek and Jon Rokne. \"Exact computation of Voronoi diagram and Delaunay triangulation\" \n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Geometric.Predicates.ESSA",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Geometric-Predicates-ESSA.html",
        "fct-type": "module",
        "title": "ESSA"
      },
      "index": {
        "description": "Hardware based exact computation using the ESSA algorithm in double precision We re using Float inputs on Double precision ESSA at the moment Hopefully later we can add support for Double inputs on Quadruple ESSA Line intersection is based on the algorithm presented in ccw and incircle based on See and for more information on the splitDouble operation We assume realToFrac is broken and that CFloat Float and CDouble Double Helmut Ratschek Jon Rokne Exact computation of the sign of finite sum Applied Mathematics and Computation Volume Issue Pages ISSN Siegfried Rump High precision evaluation of nonlinear functions T.J Dekker Floating-Point Technique for Extending the Available Precision Numerische Mathematik Marina Gavrilova Jon Rokne Reliable line segment intersection testing Marina Gavrilova Helmut Ratschek and Jon Rokne Exact computation of Voronoi diagram and Delaunay triangulation",
        "hierarchy": "Numeric Geometric Predicates ESSA",
        "module": "Numeric.Geometric.Predicates.ESSA",
        "name": "ESSA",
        "normalized": "",
        "package": "GeomPredicates-SSE",
        "partial": "ESSA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-ESSA.html#v:ccwESSA",
      "description": {
        "fct-descr": "\u003cp\u003eCounter-clockwise orientation test. Classifies p3 in relation to the line formed by p1 and p2. \n\u003c/p\u003e\u003cp\u003eResult: LT=Right, GT=Left, EQ=Coincident \n\u003c/p\u003e",
        "fct-module": "Numeric.Geometric.Predicates.ESSA",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "Vector2 Float -\u003e Vector2 Float -\u003e Vector2 Float -\u003e Ordering",
        "fct-source": "src/Numeric-Geometric-Predicates-ESSA.html#ccwESSA",
        "fct-type": "function",
        "title": "ccwESSA"
      },
      "index": {
        "description": "Counter-clockwise orientation test Classifies p3 in relation to the line formed by p1 and p2 Result LT Right GT Left EQ Coincident",
        "hierarchy": "Numeric Geometric Predicates ESSA",
        "module": "Numeric.Geometric.Predicates.ESSA",
        "name": "ccwESSA",
        "normalized": "Vector Float-\u003eVector Float-\u003eVector Float-\u003eOrdering",
        "package": "GeomPredicates-SSE",
        "partial": "ESSA",
        "signature": "Vector Float-\u003eVector Float-\u003eVector Float-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-ESSA.html#v:cinttESSA",
      "description": {
        "fct-descr": "\u003cp\u003eTest if p3 is within the closed interval specified by [p1,p2]\n\u003c/p\u003e",
        "fct-module": "Numeric.Geometric.Predicates.ESSA",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "Float -\u003e Float -\u003e Float -\u003e Bool",
        "fct-source": "src/Numeric-Geometric-Predicates-ESSA.html#cinttESSA",
        "fct-type": "function",
        "title": "cinttESSA"
      },
      "index": {
        "description": "Test if p3 is within the closed interval specified by p1 p2",
        "hierarchy": "Numeric Geometric Predicates ESSA",
        "module": "Numeric.Geometric.Predicates.ESSA",
        "name": "cinttESSA",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003eBool",
        "package": "GeomPredicates-SSE",
        "partial": "ESSA",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-ESSA.html#v:essa",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the exact sign of the sum of the input sequence.   \n     It is the caller's responsibility to ensure that the inputs have not suffered a loss of precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.Geometric.Predicates.ESSA",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "t Double -\u003e Ordering",
        "fct-source": "src/Numeric-Geometric-Predicates-ESSA.html#essa",
        "fct-type": "function",
        "title": "essa"
      },
      "index": {
        "description": "Compute the exact sign of the sum of the input sequence It is the caller responsibility to ensure that the inputs have not suffered loss of precision",
        "hierarchy": "Numeric Geometric Predicates ESSA",
        "module": "Numeric.Geometric.Predicates.ESSA",
        "name": "essa",
        "normalized": "a Double-\u003eOrdering",
        "package": "GeomPredicates-SSE",
        "partial": "",
        "signature": "t Double-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-ESSA.html#v:incircleESSA",
      "description": {
        "fct-descr": "\u003cp\u003eTest the relation of a point to the circle formed by (p1..p3). (p1..p3) must be in counterclockwise order. \n\u003c/p\u003e\u003cp\u003eResult: GT=inside, EQ=border, LT=outside.\n\u003c/p\u003e\u003cp\u003eNote: this is the sum of 192 multiplications.\n\u003c/p\u003e",
        "fct-module": "Numeric.Geometric.Predicates.ESSA",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "(Vector2 Float, Vector2 Float, Vector2 Float) -\u003e Vector2 Float -\u003e Ordering",
        "fct-source": "src/Numeric-Geometric-Predicates-ESSA.html#incircleESSA",
        "fct-type": "function",
        "title": "incircleESSA"
      },
      "index": {
        "description": "Test the relation of point to the circle formed by p1..p3 p1..p3 must be in counterclockwise order Result GT inside EQ border LT outside Note this is the sum of multiplications",
        "hierarchy": "Numeric Geometric Predicates ESSA",
        "module": "Numeric.Geometric.Predicates.ESSA",
        "name": "incircleESSA",
        "normalized": "(Vector Float,Vector Float,Vector Float)-\u003eVector Float-\u003eOrdering",
        "package": "GeomPredicates-SSE",
        "partial": "ESSA",
        "signature": "(Vector Float,Vector Float,Vector Float)-\u003eVector Float-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-ESSA.html#v:intersectESSA_SS2D",
      "description": {
        "fct-descr": "\u003cp\u003eIntersect two line segments\n\u003c/p\u003e",
        "fct-module": "Numeric.Geometric.Predicates.ESSA",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "LineSegment (Vector2 Float) -\u003e LineSegment (Vector2 Float) -\u003e LineIntersection",
        "fct-source": "src/Numeric-Geometric-Predicates-ESSA.html#intersectESSA_SS2D",
        "fct-type": "function",
        "title": "intersectESSA_SS2D"
      },
      "index": {
        "description": "Intersect two line segments",
        "hierarchy": "Numeric Geometric Predicates ESSA",
        "module": "Numeric.Geometric.Predicates.ESSA",
        "name": "intersectESSA_SS2D",
        "normalized": "LineSegment(Vector Float)-\u003eLineSegment(Vector Float)-\u003eLineIntersection",
        "package": "GeomPredicates-SSE",
        "partial": "ESSA SS",
        "signature": "LineSegment(Vector Float)-\u003eLineSegment(Vector Float)-\u003eLineIntersection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-ESSA.html#v:splitDouble",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a 53 bit double into two 26 bit halves so that: \u003ccode\u003e let (lo,hi) = splitDouble x in x == lo + hi \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe trick is that the sign is used as the additional bit.\n\u003c/p\u003e\u003cp\u003eNote that the multiplication of two 26-bit floating point numbers is exact in double precision.\n\u003c/p\u003e\u003cp\u003eIf you're new to this function you may want to read paper (5), as using this function properly may be trickier than it seems.\n\u003c/p\u003e",
        "fct-module": "Numeric.Geometric.Predicates.ESSA",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "Double -\u003e (Double, Double)",
        "fct-source": "src/Numeric-Geometric-Predicates-ESSA.html#splitDouble",
        "fct-type": "function",
        "title": "splitDouble"
      },
      "index": {
        "description": "Split bit double into two bit halves so that let lo hi splitDouble in lo hi The trick is that the sign is used as the additional bit Note that the multiplication of two bit floating point numbers is exact in double precision If you re new to this function you may want to read paper as using this function properly may be trickier than it seems",
        "hierarchy": "Numeric Geometric Predicates ESSA",
        "module": "Numeric.Geometric.Predicates.ESSA",
        "name": "splitDouble",
        "normalized": "Double-\u003e(Double,Double)",
        "package": "GeomPredicates-SSE",
        "partial": "Double",
        "signature": "Double-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-Interval.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThese predicates use hardware (SSE) based interval arithmetic based on the algorithms presented in (1). \n     They are intended to be used as a filter before resorting to slower exact computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e These routines return Nothing if the result could not be determined\n       exactly from the calculated interval. \n\u003c/li\u003e\u003cli\u003e Each call toggles the SSE rounding mode to -infinity and back.\n\u003c/li\u003e\u003cli\u003e All computations are done in Double precision.\n\u003c/li\u003e\u003cli\u003e Rewrite specializations are in place for Float and Double that greatly reduce allocations compared to Real.\n       Using anything but Float or Double is probably absurdly slow thanks to realToFrac.\n\u003c/li\u003e\u003cli\u003e For performance reasons we assume CDouble == Double.\n\u003c/li\u003e\u003c/ul\u003e\u003col\u003e\u003cli\u003e BRANIMIR LAMBOV. \"INTERVAL ARITHMETIC USING SSE-2\" \n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Geometric.Predicates.Interval",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Geometric-Predicates-Interval.html",
        "fct-type": "module",
        "title": "Interval"
      },
      "index": {
        "description": "These predicates use hardware SSE based interval arithmetic based on the algorithms presented in They are intended to be used as filter before resorting to slower exact computation These routines return Nothing if the result could not be determined exactly from the calculated interval Each call toggles the SSE rounding mode to infinity and back All computations are done in Double precision Rewrite specializations are in place for Float and Double that greatly reduce allocations compared to Real Using anything but Float or Double is probably absurdly slow thanks to realToFrac For performance reasons we assume CDouble Double BRANIMIR LAMBOV INTERVAL ARITHMETIC USING SSE-2",
        "hierarchy": "Numeric Geometric Predicates Interval",
        "module": "Numeric.Geometric.Predicates.Interval",
        "name": "Interval",
        "normalized": "",
        "package": "GeomPredicates-SSE",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-Interval.html#v:ccwSSE",
      "description": {
        "fct-descr": "\u003cp\u003eCounter-clockwise orientation test. Classifies p3 in relation to the line formed by p1 and p2. \n   Result: LT=Right, GT=Left, EQ=Coincident \n\u003c/p\u003e",
        "fct-module": "Numeric.Geometric.Predicates.Interval",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "Vector2 a -\u003e Vector2 a -\u003e Vector2 a -\u003e Maybe Ordering",
        "fct-source": "src/Numeric-Geometric-Predicates-Interval.html#ccwSSE",
        "fct-type": "function",
        "title": "ccwSSE"
      },
      "index": {
        "description": "Counter-clockwise orientation test Classifies p3 in relation to the line formed by p1 and p2 Result LT Right GT Left EQ Coincident",
        "hierarchy": "Numeric Geometric Predicates Interval",
        "module": "Numeric.Geometric.Predicates.Interval",
        "name": "ccwSSE",
        "normalized": "Vector a-\u003eVector a-\u003eVector a-\u003eMaybe Ordering",
        "package": "GeomPredicates-SSE",
        "partial": "SSE",
        "signature": "Vector a-\u003eVector a-\u003eVector a-\u003eMaybe Ordering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-Interval.html#v:cinttSSE",
      "description": {
        "fct-descr": "\u003cp\u003eTest if p3 is within the closed interval specified by [p1,p2]\n\u003c/p\u003e",
        "fct-module": "Numeric.Geometric.Predicates.Interval",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "a -\u003e a -\u003e a -\u003e Maybe Bool",
        "fct-source": "src/Numeric-Geometric-Predicates-Interval.html#cinttSSE",
        "fct-type": "function",
        "title": "cinttSSE"
      },
      "index": {
        "description": "Test if p3 is within the closed interval specified by p1 p2",
        "hierarchy": "Numeric Geometric Predicates Interval",
        "module": "Numeric.Geometric.Predicates.Interval",
        "name": "cinttSSE",
        "normalized": "a-\u003ea-\u003ea-\u003eMaybe Bool",
        "package": "GeomPredicates-SSE",
        "partial": "SSE",
        "signature": "a-\u003ea-\u003ea-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeomPredicates-SSE/docs/Numeric-Geometric-Predicates-Interval.html#v:incircleSSE",
      "description": {
        "fct-descr": "\u003cp\u003eTest the relation of a point to the circle formed by (p1..p3). (p1..p3) must be in counterclockwise order. \n   Result: GT=inside, EQ=border, LT=outside\n\u003c/p\u003e",
        "fct-module": "Numeric.Geometric.Predicates.Interval",
        "fct-package": "GeomPredicates-SSE",
        "fct-signature": "(Vector2 a, Vector2 a, Vector2 a) -\u003e Vector2 a -\u003e Maybe Ordering",
        "fct-source": "src/Numeric-Geometric-Predicates-Interval.html#incircleSSE",
        "fct-type": "function",
        "title": "incircleSSE"
      },
      "index": {
        "description": "Test the relation of point to the circle formed by p1..p3 p1..p3 must be in counterclockwise order Result GT inside EQ border LT outside",
        "hierarchy": "Numeric Geometric Predicates Interval",
        "module": "Numeric.Geometric.Predicates.Interval",
        "name": "incircleSSE",
        "normalized": "(Vector a,Vector a,Vector a)-\u003eVector a-\u003eMaybe Ordering",
        "package": "GeomPredicates-SSE",
        "partial": "SSE",
        "signature": "(Vector a,Vector a,Vector a)-\u003eVector a-\u003eMaybe Ordering"
      }
    }
  }
]