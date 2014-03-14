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
        "word": "splines"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.NURBS",
          "name": "NURBS",
          "package": "splines",
          "source": "src/Math-NURBS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "NURBS",
          "package": "splines",
          "partial": "NURBS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.NURBS",
          "name": "NURBS",
          "package": "splines",
          "source": "src/Math-NURBS.html#NURBS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "NURBS",
          "package": "splines",
          "partial": "NURBS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#t:NURBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.NURBS",
          "name": "evalNURBS",
          "package": "splines",
          "signature": "NURBS v -\u003e w -\u003e v",
          "source": "src/Math-NURBS.html#evalNURBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "evalNURBS",
          "normalized": "NURBS a-\u003eb-\u003ea",
          "package": "splines",
          "partial": "NURBS",
          "signature": "NURBS v-\u003ew-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#v:evalNURBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.NURBS",
          "name": "nurbs",
          "package": "splines",
          "signature": "Knots (Scalar v) -\u003e Vector (w, v) -\u003e NURBS v",
          "source": "src/Math-NURBS.html#nurbs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "nurbs",
          "normalized": "Knots(Scalar a)-\u003eVector(b,a)-\u003eNURBS a",
          "package": "splines",
          "signature": "Knots(Scalar v)-\u003eVector(w,v)-\u003eNURBS v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#v:nurbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.NURBS",
          "name": "nurbsControlPoints",
          "package": "splines",
          "signature": "NURBS v -\u003e Vector (Scalar v, v)",
          "source": "src/Math-NURBS.html#nurbsControlPoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "nurbsControlPoints",
          "normalized": "NURBS a-\u003eVector(Scalar a,a)",
          "package": "splines",
          "partial": "Control Points",
          "signature": "NURBS v-\u003eVector(Scalar v,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#v:nurbsControlPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.NURBS",
          "name": "nurbsDegree",
          "package": "splines",
          "signature": "NURBS v -\u003e Int",
          "source": "src/Math-NURBS.html#nurbsDegree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "nurbsDegree",
          "normalized": "NURBS a-\u003eInt",
          "package": "splines",
          "partial": "Degree",
          "signature": "NURBS v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#v:nurbsDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the domain of a NURBS - that is, the range of parameter values\n over which a spline with this degree and knot vector has a full basis set.\n\u003c/p\u003e",
          "module": "Math.NURBS",
          "name": "nurbsDomain",
          "package": "splines",
          "signature": "NURBS v -\u003e Maybe (Scalar v, Scalar v)",
          "source": "src/Math-NURBS.html#nurbsDomain",
          "type": "function"
        },
        "index": {
          "description": "Returns the domain of NURBS that is the range of parameter values over which spline with this degree and knot vector has full basis set",
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "nurbsDomain",
          "normalized": "NURBS a-\u003eMaybe(Scalar a,Scalar a)",
          "package": "splines",
          "partial": "Domain",
          "signature": "NURBS v-\u003eMaybe(Scalar v,Scalar v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#v:nurbsDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.NURBS",
          "name": "nurbsKnotVector",
          "package": "splines",
          "signature": "NURBS v -\u003e Knots (Scalar v)",
          "source": "src/Math-NURBS.html#nurbsKnotVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "nurbsKnotVector",
          "normalized": "NURBS a-\u003eKnots(Scalar a)",
          "package": "splines",
          "partial": "Knot Vector",
          "signature": "NURBS v-\u003eKnots(Scalar v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#v:nurbsKnotVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.NURBS",
          "name": "splitNURBS",
          "package": "splines",
          "signature": "NURBS v -\u003e Scalar v -\u003e Maybe (NURBS v, NURBS v)",
          "source": "src/Math-NURBS.html#splitNURBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "splitNURBS",
          "normalized": "NURBS a-\u003eScalar a-\u003eMaybe(NURBS a,NURBS a)",
          "package": "splines",
          "partial": "NURBS",
          "signature": "NURBS v-\u003eScalar v-\u003eMaybe(NURBS v,NURBS v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#v:splitNURBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.NURBS",
          "name": "toNURBS",
          "package": "splines",
          "signature": "s v -\u003e NURBS v",
          "source": "src/Math-NURBS.html#toNURBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math NURBS",
          "module": "Math.NURBS",
          "name": "toNURBS",
          "normalized": "a b-\u003eNURBS b",
          "package": "splines",
          "partial": "NURBS",
          "signature": "s v-\u003eNURBS v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-NURBS.html#v:toNURBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReference implementation of B-Splines; very inefficient but \"obviously\"\n correct.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Spline.BSpline.Reference",
          "name": "Reference",
          "package": "splines",
          "source": "src/Math-Spline-BSpline-Reference.html",
          "type": "module"
        },
        "index": {
          "description": "Reference implementation of B-Splines very inefficient but obviously correct",
          "hierarchy": "Math Spline BSpline Reference",
          "module": "Math.Spline.BSpline.Reference",
          "name": "Reference",
          "package": "splines",
          "partial": "Reference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline-Reference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe values of all the B-spline basis functions for the given knot vector at the given\n point, ordered by degree; \"b_{i,j}(x)\" is \u003ccode\u003ebases kts x !! i !! j\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline.Reference",
          "name": "bases",
          "package": "splines",
          "signature": "Knots a -\u003e a -\u003e [[a]]",
          "source": "src/Math-Spline-BSpline-Reference.html#bases",
          "type": "function"
        },
        "index": {
          "description": "The values of all the B-spline basis functions for the given knot vector at the given point ordered by degree is bases kts",
          "hierarchy": "Math Spline BSpline Reference",
          "module": "Math.Spline.BSpline.Reference",
          "name": "bases",
          "normalized": "Knots a-\u003ea-\u003e[[a]]",
          "package": "splines",
          "signature": "Knots a-\u003ea-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline-Reference.html#v:bases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the B-spline basis functions for the given knot vector at the given\n point, ordered by degree; \"b_{i,j}\" is \u003ccode\u003ebasisFunctions kts x !! i !! j\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline.Reference",
          "name": "basisFunctions",
          "package": "splines",
          "signature": "Knots a -\u003e [[a -\u003e a]]",
          "source": "src/Math-Spline-BSpline-Reference.html#basisFunctions",
          "type": "function"
        },
        "index": {
          "description": "All the B-spline basis functions for the given knot vector at the given point ordered by degree is basisFunctions kts",
          "hierarchy": "Math Spline BSpline Reference",
          "module": "Math.Spline.BSpline.Reference",
          "name": "basisFunctions",
          "normalized": "Knots a-\u003e[[a-\u003ea]]",
          "package": "splines",
          "partial": "Functions",
          "signature": "Knots a-\u003e[[a-\u003ea]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline-Reference.html#v:basisFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the B-spline basis polynomials for the given knot vector, ordered first \n by knot span and then by degree.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline.Reference",
          "name": "basisPolynomials",
          "package": "splines",
          "signature": "Knots a -\u003e [[[Poly a]]]",
          "source": "src/Math-Spline-BSpline-Reference.html#basisPolynomials",
          "type": "function"
        },
        "index": {
          "description": "All the B-spline basis polynomials for the given knot vector ordered first by knot span and then by degree",
          "hierarchy": "Math Spline BSpline Reference",
          "module": "Math.Spline.BSpline.Reference",
          "name": "basisPolynomials",
          "normalized": "Knots a-\u003e[[[Poly a]]]",
          "package": "splines",
          "partial": "Polynomials",
          "signature": "Knots a-\u003e[[[Poly a]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline-Reference.html#v:basisPolynomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the B-spline basis polynomials for the given knot vector at the given\n point, ordered by degree; \"b_{i,j}\" is \u003ccode\u003ebasisPolynomialsAt kts x !! i !! j\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline.Reference",
          "name": "basisPolynomialsAt",
          "package": "splines",
          "signature": "Knots a -\u003e a -\u003e [[Poly a]]",
          "source": "src/Math-Spline-BSpline-Reference.html#basisPolynomialsAt",
          "type": "function"
        },
        "index": {
          "description": "All the B-spline basis polynomials for the given knot vector at the given point ordered by degree is basisPolynomialsAt kts",
          "hierarchy": "Math Spline BSpline Reference",
          "module": "Math.Spline.BSpline.Reference",
          "name": "basisPolynomialsAt",
          "normalized": "Knots a-\u003ea-\u003e[[Poly a]]",
          "package": "splines",
          "partial": "Polynomials At",
          "signature": "Knots a-\u003ea-\u003e[[Poly a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline-Reference.html#v:basisPolynomialsAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a fairly slow function which computes the value of a B-spline at a given point,\n using the mathematical definition of B-splines.  It is mainly for testing purposes, as a\n reference against which the other evaluation functions are checked.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline.Reference",
          "name": "evalReferenceBSpline",
          "package": "splines",
          "signature": "BSpline v a -\u003e Scalar a -\u003e a",
          "source": "src/Math-Spline-BSpline-Reference.html#evalReferenceBSpline",
          "type": "function"
        },
        "index": {
          "description": "This is fairly slow function which computes the value of B-spline at given point using the mathematical definition of B-splines It is mainly for testing purposes as reference against which the other evaluation functions are checked",
          "hierarchy": "Math Spline BSpline Reference",
          "module": "Math.Spline.BSpline.Reference",
          "name": "evalReferenceBSpline",
          "normalized": "BSpline a b-\u003eScalar b-\u003eb",
          "package": "splines",
          "partial": "Reference BSpline",
          "signature": "BSpline v a-\u003eScalar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline-Reference.html#v:evalReferenceBSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a fairly slow function which computes one polynomial segment of a B-spline (the \n one containing the given point), using the mathematical definition of B-splines.  It is \n mainly for testing purposes, as a reference against which the other evaluation functions\n are checked.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline.Reference",
          "name": "fitPolyToBSplineAt",
          "package": "splines",
          "signature": "BSpline v a -\u003e a -\u003e Poly a",
          "source": "src/Math-Spline-BSpline-Reference.html#fitPolyToBSplineAt",
          "type": "function"
        },
        "index": {
          "description": "This is fairly slow function which computes one polynomial segment of B-spline the one containing the given point using the mathematical definition of B-splines It is mainly for testing purposes as reference against which the other evaluation functions are checked",
          "hierarchy": "Math Spline BSpline Reference",
          "module": "Math.Spline.BSpline.Reference",
          "name": "fitPolyToBSplineAt",
          "normalized": "BSpline a b-\u003eb-\u003ePoly b",
          "package": "splines",
          "partial": "Poly To BSpline At",
          "signature": "BSpline v a-\u003ea-\u003ePoly a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline-Reference.html#v:fitPolyToBSplineAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.BSpline",
          "name": "BSpline",
          "package": "splines",
          "source": "src/Math-Spline-BSpline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "BSpline",
          "package": "splines",
          "partial": "BSpline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA B-spline, defined by a knot vector (see \u003ccode\u003e\u003ca\u003eKnots\u003c/a\u003e\u003c/code\u003e) and a sequence of control points.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline",
          "name": "BSpline",
          "package": "splines",
          "source": "src/Math-Spline-BSpline-Internal.html#BSpline",
          "type": "data"
        },
        "index": {
          "description": "B-spline defined by knot vector see Knots and sequence of control points",
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "BSpline",
          "package": "splines",
          "partial": "BSpline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#t:BSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebSpline kts cps\u003c/code\u003e creates a B-spline with the given knot vector and control \n points.  The degree is automatically inferred as the difference between the \n number of spans in the knot vector (\u003ccode\u003enumKnots kts - 1\u003c/code\u003e) and the number of \n control points (\u003ccode\u003elength cps\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Math.Spline.BSpline\",\"Math.Spline\"]",
          "name": "bSpline",
          "package": "splines",
          "signature": "Knots (Scalar a) -\u003e v a -\u003e BSpline v a",
          "source": "src/Math-Spline-BSpline.html#bSpline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#v:bSpline\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:bSpline\"]"
        },
        "index": {
          "description": "bSpline kts cps creates B-spline with the given knot vector and control points The degree is automatically inferred as the difference between the number of spans in the knot vector numKnots kts and the number of control points length cps",
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "bSpline",
          "normalized": "Knots(Scalar a)-\u003eb a-\u003eBSpline b a",
          "package": "splines",
          "partial": "Spline",
          "signature": "Knots(Scalar a)-\u003ev a-\u003eBSpline v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#v:bSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe table from de Boor's algorithm, calculated for the entire spline.  If that is not necessary\n (for example, if you are only evaluating the spline), then use \u003ccode\u003eslice\u003c/code\u003e on the spline first.\n \u003ccode\u003esplitBSpline\u003c/code\u003e currently uses the whole table.  It is probably not necessary there, but it \n greatly simplifies the definition and makes the similarity to splitting Bezier curves very obvious.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline",
          "name": "deBoor",
          "package": "splines",
          "signature": "BSpline v a -\u003e Scalar a -\u003e [v a]",
          "source": "src/Math-Spline-BSpline-Internal.html#deBoor",
          "type": "function"
        },
        "index": {
          "description": "The table from de Boor algorithm calculated for the entire spline If that is not necessary for example if you are only evaluating the spline then use slice on the spline first splitBSpline currently uses the whole table It is probably not necessary there but it greatly simplifies the definition and makes the similarity to splitting Bezier curves very obvious",
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "deBoor",
          "normalized": "BSpline a b-\u003eScalar b-\u003e[a b]",
          "package": "splines",
          "partial": "Boor",
          "signature": "BSpline v a-\u003eScalar a-\u003e[v a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#v:deBoor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.BSpline",
          "name": "differentiateBSpline",
          "package": "splines",
          "signature": "BSpline v a -\u003e BSpline v a",
          "source": "src/Math-Spline-BSpline.html#differentiateBSpline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "differentiateBSpline",
          "normalized": "BSpline a b-\u003eBSpline a b",
          "package": "splines",
          "partial": "BSpline",
          "signature": "BSpline v a-\u003eBSpline v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#v:differentiateBSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a B-spline at the given point.  This uses a slightly modified version of \n de Boor's algorithm which is only strictly correct inside the domain of the spline.\n Unlike the standard algorithm, the basis functions always sum to 1, even outside the\n domain of the spline.  This is mainly useful for \"clamped\" splines - the values at\n or outside the endpoints will always be the value of the nearest control point.\n\u003c/p\u003e\u003cp\u003eFor a standard implementation of de Boor's algorithm, see \u003ccode\u003e\u003ca\u003eevalNaturalBSpline\u003c/a\u003e\u003c/code\u003e.\n For a (much slower) strictly mathematically correct evaluation, see \u003ccode\u003eevalReferenceBSpline\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline",
          "name": "evalBSpline",
          "package": "splines",
          "signature": "BSpline v a -\u003e Scalar a -\u003e a",
          "source": "src/Math-Spline-BSpline-Internal.html#evalBSpline",
          "type": "function"
        },
        "index": {
          "description": "Evaluate B-spline at the given point This uses slightly modified version of de Boor algorithm which is only strictly correct inside the domain of the spline Unlike the standard algorithm the basis functions always sum to even outside the domain of the spline This is mainly useful for clamped splines the values at or outside the endpoints will always be the value of the nearest control point For standard implementation of de Boor algorithm see evalNaturalBSpline For much slower strictly mathematically correct evaluation see evalReferenceBSpline",
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "evalBSpline",
          "normalized": "BSpline a b-\u003eScalar b-\u003eb",
          "package": "splines",
          "partial": "BSpline",
          "signature": "BSpline v a-\u003eScalar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#v:evalBSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a B-spline at the given point.  This uses de Boor's algorithm, which is \n only strictly correct inside the domain of the spline.\n\u003c/p\u003e\u003cp\u003eFor a (much slower) strictly mathematically correct evaluation, see \u003ccode\u003eevalReferenceBSpline\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline",
          "name": "evalNaturalBSpline",
          "package": "splines",
          "signature": "BSpline v a -\u003e Scalar a -\u003e a",
          "source": "src/Math-Spline-BSpline-Internal.html#evalNaturalBSpline",
          "type": "function"
        },
        "index": {
          "description": "Evaluate B-spline at the given point This uses de Boor algorithm which is only strictly correct inside the domain of the spline For much slower strictly mathematically correct evaluation see evalReferenceBSpline",
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "evalNaturalBSpline",
          "normalized": "BSpline a b-\u003eScalar b-\u003eb",
          "package": "splines",
          "partial": "Natural BSpline",
          "signature": "BSpline v a-\u003eScalar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#v:evalNaturalBSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert one knot into a \u003ccode\u003e\u003ca\u003eBSpline\u003c/a\u003e\u003c/code\u003e without changing the spline's shape.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline",
          "name": "insertKnot",
          "package": "splines",
          "signature": "BSpline v a -\u003e Scalar a -\u003e BSpline v a",
          "source": "src/Math-Spline-BSpline-Internal.html#insertKnot",
          "type": "function"
        },
        "index": {
          "description": "Insert one knot into BSpline without changing the spline shape",
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "insertKnot",
          "normalized": "BSpline a b-\u003eScalar b-\u003eBSpline a b",
          "package": "splines",
          "partial": "Knot",
          "signature": "BSpline v a-\u003eScalar a-\u003eBSpline v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#v:insertKnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.BSpline",
          "name": "integrateBSpline",
          "package": "splines",
          "signature": "BSpline v a -\u003e BSpline v a",
          "source": "src/Math-Spline-BSpline.html#integrateBSpline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "integrateBSpline",
          "normalized": "BSpline a b-\u003eBSpline a b",
          "package": "splines",
          "partial": "BSpline",
          "signature": "BSpline v a-\u003eBSpline v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#v:integrateBSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a B-spline at the specified point (which must be inside the spline's domain),\n returning two disjoint splines, the sum of which is equal to the original.  The domain\n of the first will be below the split point and the domain of the second will be above.\n\u003c/p\u003e",
          "module": "Math.Spline.BSpline",
          "name": "splitBSpline",
          "package": "splines",
          "signature": "BSpline v a -\u003e Scalar a -\u003e Maybe (BSpline v a, BSpline v a)",
          "source": "src/Math-Spline-BSpline.html#splitBSpline",
          "type": "function"
        },
        "index": {
          "description": "Split B-spline at the specified point which must be inside the spline domain returning two disjoint splines the sum of which is equal to the original The domain of the first will be below the split point and the domain of the second will be above",
          "hierarchy": "Math Spline BSpline",
          "module": "Math.Spline.BSpline",
          "name": "splitBSpline",
          "normalized": "BSpline a b-\u003eScalar b-\u003eMaybe(BSpline a b,BSpline a b)",
          "package": "splines",
          "partial": "BSpline",
          "signature": "BSpline v a-\u003eScalar a-\u003eMaybe(BSpline v a,BSpline v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BSpline.html#v:splitBSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.BezierCurve",
          "name": "BezierCurve",
          "package": "splines",
          "source": "src/Math-Spline-BezierCurve.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Spline BezierCurve",
          "module": "Math.Spline.BezierCurve",
          "name": "BezierCurve",
          "package": "splines",
          "partial": "Bezier Curve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BezierCurve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bezier curve on \u003ccode\u003e0 \u003c= x \u003c= 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline.BezierCurve",
          "name": "BezierCurve",
          "package": "splines",
          "source": "src/Math-Spline-BezierCurve.html#BezierCurve",
          "type": "data"
        },
        "index": {
          "description": "Bezier curve on",
          "hierarchy": "Math Spline BezierCurve",
          "module": "Math.Spline.BezierCurve",
          "name": "BezierCurve",
          "package": "splines",
          "partial": "Bezier Curve",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BezierCurve.html#t:BezierCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a Bezier curve from a list of control points.  The degree\n of the curve is one less than the number of control points.\n\u003c/p\u003e",
          "module": "[\"Math.Spline.BezierCurve\",\"Math.Spline\"]",
          "name": "bezierCurve",
          "package": "splines",
          "signature": "Vector t -\u003e BezierCurve t",
          "source": "src/Math-Spline-BezierCurve.html#bezierCurve",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-BezierCurve.html#v:bezierCurve\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:bezierCurve\"]"
        },
        "index": {
          "description": "Construct Bezier curve from list of control points The degree of the curve is one less than the number of control points",
          "hierarchy": "Math Spline BezierCurve",
          "module": "Math.Spline.BezierCurve",
          "name": "bezierCurve",
          "normalized": "Vector a-\u003eBezierCurve a",
          "package": "splines",
          "partial": "Curve",
          "signature": "Vector t-\u003eBezierCurve t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BezierCurve.html#v:bezierCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.Spline.BezierCurve\",\"Math.Spline.Hermite\",\"Math.Spline.ISpline\",\"Math.Spline.MSpline\"]",
          "name": "evalSpline",
          "package": "splines",
          "signature": "s v -\u003e Scalar v -\u003e v",
          "source": "src/Math-Spline-Class.html#evalSpline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-BezierCurve.html#v:evalSpline\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline-Hermite.html#v:evalSpline\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline-ISpline.html#v:evalSpline\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline-MSpline.html#v:evalSpline\"]"
        },
        "index": {
          "hierarchy": "Math Spline BezierCurve",
          "module": "Math.Spline.BezierCurve",
          "name": "evalSpline",
          "normalized": "a b-\u003eScalar b-\u003eb",
          "package": "splines",
          "partial": "Spline",
          "signature": "s v-\u003eScalar v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BezierCurve.html#v:evalSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit and rescale a Bezier curve.  Given a \u003ccode\u003e\u003ca\u003eBezierCurve\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eb\u003c/code\u003e and a point \n \u003ccode\u003et\u003c/code\u003e, \u003ccode\u003esplitBezierCurve b t\u003c/code\u003e creates 2 curves \u003ccode\u003e(b1, b2)\u003c/code\u003e such that (up to \n reasonable numerical accuracy expectations):\n\u003c/p\u003e\u003cpre\u003e evalSpline b1  x    == evalSpline b (x * t)\n evalSpline b2 (x-t) == evalSpline b (x * (1-t))\n\u003c/pre\u003e",
          "module": "Math.Spline.BezierCurve",
          "name": "splitBezierCurve",
          "package": "splines",
          "signature": "BezierCurve v -\u003e Scalar v -\u003e (BezierCurve v, BezierCurve v)",
          "source": "src/Math-Spline-BezierCurve.html#splitBezierCurve",
          "type": "function"
        },
        "index": {
          "description": "Split and rescale Bezier curve Given BezierCurve and point splitBezierCurve creates curves b1 b2 such that up to reasonable numerical accuracy expectations evalSpline b1 evalSpline evalSpline b2 x-t evalSpline",
          "hierarchy": "Math Spline BezierCurve",
          "module": "Math.Spline.BezierCurve",
          "name": "splitBezierCurve",
          "normalized": "BezierCurve a-\u003eScalar a-\u003e(BezierCurve a,BezierCurve a)",
          "package": "splines",
          "partial": "Bezier Curve",
          "signature": "BezierCurve v-\u003eScalar v-\u003e(BezierCurve v,BezierCurve v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-BezierCurve.html#v:splitBezierCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Class",
          "name": "Class",
          "package": "splines",
          "source": "src/Math-Spline-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Spline Class",
          "module": "Math.Spline.Class",
          "name": "Class",
          "package": "splines",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Class",
          "name": "ControlPoints",
          "package": "splines",
          "source": "src/Math-Spline-Class.html#ControlPoints",
          "type": "class"
        },
        "index": {
          "hierarchy": "Math Spline Class",
          "module": "Math.Spline.Class",
          "name": "ControlPoints",
          "package": "splines",
          "partial": "Control Points",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Class.html#t:ControlPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA spline is a piecewise polynomial vector-valued function.  The necessary\n and sufficient instance definition is \u003ccode\u003e\u003ca\u003etoBSpline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline.Class",
          "name": "Spline",
          "package": "splines",
          "source": "src/Math-Spline-Class.html#Spline",
          "type": "class"
        },
        "index": {
          "description": "spline is piecewise polynomial vector-valued function The necessary and sufficient instance definition is toBSpline",
          "hierarchy": "Math Spline Class",
          "module": "Math.Spline.Class",
          "name": "Spline",
          "package": "splines",
          "partial": "Spline",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Class.html#t:Spline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Class",
          "name": "controlPoints",
          "package": "splines",
          "signature": "s v -\u003e Vector v",
          "source": "src/Math-Spline-Class.html#controlPoints",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline Class",
          "module": "Math.Spline.Class",
          "name": "controlPoints",
          "normalized": "a b-\u003eVector b",
          "package": "splines",
          "partial": "Points",
          "signature": "s v-\u003eVector v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Class.html#v:controlPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Class",
          "name": "evalSpline",
          "package": "splines",
          "signature": "s v -\u003e Scalar v -\u003e v",
          "source": "src/Math-Spline-Class.html#evalSpline",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline Class",
          "module": "Math.Spline.Class",
          "name": "evalSpline",
          "normalized": "a b-\u003eScalar b-\u003eb",
          "package": "splines",
          "partial": "Spline",
          "signature": "s v-\u003eScalar v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Class.html#v:evalSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Class",
          "name": "knotVector",
          "package": "splines",
          "signature": "s v -\u003e Knots (Scalar v)",
          "source": "src/Math-Spline-Class.html#knotVector",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline Class",
          "module": "Math.Spline.Class",
          "name": "knotVector",
          "normalized": "a b-\u003eKnots(Scalar b)",
          "package": "splines",
          "partial": "Vector",
          "signature": "s v-\u003eKnots(Scalar v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Class.html#v:knotVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Class",
          "name": "splineDegree",
          "package": "splines",
          "signature": "s v -\u003e Int",
          "source": "src/Math-Spline-Class.html#splineDegree",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline Class",
          "module": "Math.Spline.Class",
          "name": "splineDegree",
          "normalized": "a b-\u003eInt",
          "package": "splines",
          "partial": "Degree",
          "signature": "s v-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Class.html#v:splineDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the domain of a spline.  In the case of B-splines, this is\n the domain on which a spline with this degree and knot vector has a \n full basis set.  In other cases, it should be no larger than \n \u003ccode\u003esplineDomain . toBSpline\u003c/code\u003e, but may be smaller.  Within this domain,\n \u003ccode\u003e\u003ca\u003eevalSpline\u003c/a\u003e\u003c/code\u003e should agree with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eevalSpline\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoBSpline\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (not \n necessarily exactly, but up to reasonable expectations of numerical \n accuracy).\n\u003c/p\u003e",
          "module": "Math.Spline.Class",
          "name": "splineDomain",
          "package": "splines",
          "signature": "s v -\u003e Maybe (Scalar v, Scalar v)",
          "source": "src/Math-Spline-Class.html#splineDomain",
          "type": "method"
        },
        "index": {
          "description": "Returns the domain of spline In the case of B-splines this is the domain on which spline with this degree and knot vector has full basis set In other cases it should be no larger than splineDomain toBSpline but may be smaller Within this domain evalSpline should agree with evalSpline toBSpline not necessarily exactly but up to reasonable expectations of numerical accuracy",
          "hierarchy": "Math Spline Class",
          "module": "Math.Spline.Class",
          "name": "splineDomain",
          "normalized": "a b-\u003eMaybe(Scalar b,Scalar b)",
          "package": "splines",
          "partial": "Domain",
          "signature": "s v-\u003eMaybe(Scalar v,Scalar v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Class.html#v:splineDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Class",
          "name": "toBSpline",
          "package": "splines",
          "signature": "s v -\u003e BSpline Vector v",
          "source": "src/Math-Spline-Class.html#toBSpline",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline Class",
          "module": "Math.Spline.Class",
          "name": "toBSpline",
          "normalized": "a b-\u003eBSpline Vector b",
          "package": "splines",
          "partial": "BSpline",
          "signature": "s v-\u003eBSpline Vector v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Class.html#v:toBSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Hermite",
          "name": "Hermite",
          "package": "splines",
          "source": "src/Math-Spline-Hermite.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Spline Hermite",
          "module": "Math.Spline.Hermite",
          "name": "Hermite",
          "package": "splines",
          "partial": "Hermite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Hermite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCubic Hermite splines.  These are cubic splines defined by a \n sequence of control points and derivatives at those points.\n\u003c/p\u003e",
          "module": "Math.Spline.Hermite",
          "name": "CSpline",
          "package": "splines",
          "source": "src/Math-Spline-Hermite.html#CSpline",
          "type": "data"
        },
        "index": {
          "description": "Cubic Hermite splines These are cubic splines defined by sequence of control points and derivatives at those points",
          "hierarchy": "Math Spline Hermite",
          "module": "Math.Spline.Hermite",
          "name": "CSpline",
          "package": "splines",
          "partial": "CSpline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Hermite.html#t:CSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCubic splines specified by a list of control points, \n where each control point is given by a triple of parameter value, \n position of the spline at that parameter value,\n and derivative of the spline at that parameter value.\n\u003c/p\u003e",
          "module": "[\"Math.Spline.Hermite\",\"Math.Spline\"]",
          "name": "cSpline",
          "package": "splines",
          "signature": "[(Scalar a, a, a)] -\u003e CSpline a",
          "source": "src/Math-Spline-Hermite.html#cSpline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-Hermite.html#v:cSpline\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:cSpline\"]"
        },
        "index": {
          "description": "Cubic splines specified by list of control points where each control point is given by triple of parameter value position of the spline at that parameter value and derivative of the spline at that parameter value",
          "hierarchy": "Math Spline Hermite",
          "module": "Math.Spline.Hermite",
          "name": "cSpline",
          "normalized": "[(Scalar a,a,a)]-\u003eCSpline a",
          "package": "splines",
          "partial": "Spline",
          "signature": "[(Scalar a,a,a)]-\u003eCSpline a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Hermite.html#v:cSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.ISpline",
          "name": "ISpline",
          "package": "splines",
          "source": "src/Math-Spline-ISpline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Spline ISpline",
          "module": "Math.Spline.ISpline",
          "name": "ISpline",
          "package": "splines",
          "partial": "ISpline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-ISpline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe I-Spline basis functions are the integrals of the M-splines, or\n alternatively the integrals of the B-splines normalized to the range\n [0,1].  Every I-spline basis function increases monotonically from 0 to 1,\n thus it is useful as a basis for monotone functions.  An I-Spline curve\n is monotone if and only if every non-zero control point has the same sign.\n\u003c/p\u003e",
          "module": "Math.Spline.ISpline",
          "name": "ISpline",
          "package": "splines",
          "source": "src/Math-Spline-ISpline.html#ISpline",
          "type": "data"
        },
        "index": {
          "description": "The I-Spline basis functions are the integrals of the M-splines or alternatively the integrals of the B-splines normalized to the range Every I-spline basis function increases monotonically from to thus it is useful as basis for monotone functions An I-Spline curve is monotone if and only if every non-zero control point has the same sign",
          "hierarchy": "Math Spline ISpline",
          "module": "Math.Spline.ISpline",
          "name": "ISpline",
          "package": "splines",
          "partial": "ISpline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-ISpline.html#t:ISpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eiSpline kts cps\u003c/code\u003e creates an I-spline with the given knot vector and control \n points.  The degree is automatically inferred as the difference between the \n number of spans in the knot vector (\u003ccode\u003enumKnots kts - 1\u003c/code\u003e) and the number of \n control points (\u003ccode\u003elength cps\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Math.Spline.ISpline\",\"Math.Spline\"]",
          "name": "iSpline",
          "package": "splines",
          "signature": "Knots (Scalar a) -\u003e Vector a -\u003e ISpline a",
          "source": "src/Math-Spline-ISpline.html#iSpline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-ISpline.html#v:iSpline\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:iSpline\"]"
        },
        "index": {
          "description": "iSpline kts cps creates an I-spline with the given knot vector and control points The degree is automatically inferred as the difference between the number of spans in the knot vector numKnots kts and the number of control points length cps",
          "hierarchy": "Math Spline ISpline",
          "module": "Math.Spline.ISpline",
          "name": "iSpline",
          "normalized": "Knots(Scalar a)-\u003eVector a-\u003eISpline a",
          "package": "splines",
          "partial": "Spline",
          "signature": "Knots(Scalar a)-\u003eVector a-\u003eISpline a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-ISpline.html#v:iSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.Spline.ISpline\",\"Math.Spline\"]",
          "name": "toISpline",
          "package": "splines",
          "signature": "s v -\u003e ISpline v",
          "source": "src/Math-Spline-ISpline.html#toISpline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-ISpline.html#v:toISpline\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:toISpline\"]"
        },
        "index": {
          "hierarchy": "Math Spline ISpline",
          "module": "Math.Spline.ISpline",
          "name": "toISpline",
          "normalized": "a b-\u003eISpline b",
          "package": "splines",
          "partial": "ISpline",
          "signature": "s v-\u003eISpline v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-ISpline.html#v:toISpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "Knots",
          "package": "splines",
          "source": "src/Math-Spline-Knots.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "Knots",
          "package": "splines",
          "partial": "Knots",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKnot vectors - multisets of points in a 1-dimensional space.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "Knots",
          "package": "splines",
          "source": "src/Math-Spline-Knots.html#Knots",
          "type": "data"
        },
        "index": {
          "description": "Knot vectors multisets of points in dimensional space",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "Knots",
          "package": "splines",
          "partial": "Knots",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#t:Knots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all distinct knots of a knot vector in ascending order\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "distinctKnots",
          "package": "splines",
          "signature": "Knots t -\u003e [t]",
          "source": "src/Math-Spline-Knots.html#distinctKnots",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all distinct knots of knot vector in ascending order",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "distinctKnots",
          "normalized": "Knots a-\u003e[a]",
          "package": "splines",
          "partial": "Knots",
          "signature": "Knots t-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:distinctKnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of all distinct knots of a knot vector\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "distinctKnotsSet",
          "package": "splines",
          "signature": "Knots k -\u003e Set k",
          "source": "src/Math-Spline-Knots.html#distinctKnotsSet",
          "type": "function"
        },
        "index": {
          "description": "Returns Set of all distinct knots of knot vector",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "distinctKnotsSet",
          "normalized": "Knots a-\u003eSet a",
          "package": "splines",
          "partial": "Knots Set",
          "signature": "Knots k-\u003eSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:distinctKnotsSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a vector of all distinct knots of a knot vector in ascending order\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "distinctKnotsVector",
          "package": "splines",
          "signature": "Knots t -\u003e Vector t",
          "source": "src/Math-Spline-Knots.html#distinctKnotsVector",
          "type": "function"
        },
        "index": {
          "description": "Returns vector of all distinct knots of knot vector in ascending order",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "distinctKnotsVector",
          "normalized": "Knots a-\u003eVector a",
          "package": "splines",
          "partial": "Knots Vector",
          "signature": "Knots t-\u003eVector t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:distinctKnotsVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "dropDistinctKnots",
          "package": "splines",
          "signature": "Int -\u003e Knots a -\u003e Knots a",
          "source": "src/Math-Spline-Knots.html#dropDistinctKnots",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "dropDistinctKnots",
          "normalized": "Int-\u003eKnots a-\u003eKnots a",
          "package": "splines",
          "partial": "Distinct Knots",
          "signature": "Int-\u003eKnots a-\u003eKnots a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:dropDistinctKnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "dropKnots",
          "package": "splines",
          "signature": "Int -\u003e Knots a -\u003e Knots a",
          "source": "src/Math-Spline-Knots.html#dropKnots",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "dropKnots",
          "normalized": "Int-\u003eKnots a-\u003eKnots a",
          "package": "splines",
          "partial": "Knots",
          "signature": "Int-\u003eKnots a-\u003eKnots a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:dropKnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty knot vector\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "empty",
          "package": "splines",
          "signature": "Knots a",
          "source": "src/Math-Spline-Knots.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty knot vector",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "empty",
          "package": "splines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a knot vector consisting of all the knots and corresponding \n multiplicities in a list ordered by the knots' \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance.  The\n ordering precondition is not checked.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "fromAscList",
          "package": "splines",
          "signature": "[(k, Int)] -\u003e Knots k",
          "source": "src/Math-Spline-Knots.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Create knot vector consisting of all the knots and corresponding multiplicities in list ordered by the knots Ord instance The ordering precondition is not checked",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "fromAscList",
          "normalized": "[(a,Int)]-\u003eKnots a",
          "package": "splines",
          "partial": "Asc List",
          "signature": "[(k,Int)]-\u003eKnots k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a knot vector consisting of all the knots and corresponding \n multiplicities in a list ordered by the knots' \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance with no\n duplicates.  The preconditions are not checked.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "fromDistinctAscList",
          "package": "splines",
          "signature": "[(k, Int)] -\u003e Knots k",
          "source": "src/Math-Spline-Knots.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "description": "Create knot vector consisting of all the knots and corresponding multiplicities in list ordered by the knots Ord instance with no duplicates The preconditions are not checked",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "fromDistinctAscList",
          "normalized": "[(a,Int)]-\u003eKnots a",
          "package": "splines",
          "partial": "Distinct Asc List",
          "signature": "[(k,Int)]-\u003eKnots k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a knot vector consisting of all the knots and corresponding \n multiplicities in a list.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "fromList",
          "package": "splines",
          "signature": "[(k, Int)] -\u003e Knots k",
          "source": "src/Math-Spline-Knots.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create knot vector consisting of all the knots and corresponding multiplicities in list",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "fromList",
          "normalized": "[(a,Int)]-\u003eKnots a",
          "package": "splines",
          "partial": "List",
          "signature": "[(k,Int)]-\u003eKnots k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "fromMap",
          "package": "splines",
          "signature": "Map k Int -\u003e Knots k",
          "source": "src/Math-Spline-Knots.html#fromMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "fromMap",
          "normalized": "Map a Int-\u003eKnots a",
          "package": "splines",
          "partial": "Map",
          "signature": "Map k Int-\u003eKnots k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:fromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "fromVector",
          "package": "splines",
          "signature": "Vector (k, Int) -\u003e Knots k",
          "source": "src/Math-Spline-Knots.html#fromVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "fromVector",
          "normalized": "Vector(a,Int)-\u003eKnots a",
          "package": "splines",
          "partial": "Vector",
          "signature": "Vector(k,Int)-\u003eKnots k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "isEmpty",
          "package": "splines",
          "signature": "Knots a -\u003e Bool",
          "source": "src/Math-Spline-Knots.html#isEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "isEmpty",
          "normalized": "Knots a-\u003eBool",
          "package": "splines",
          "partial": "Empty",
          "signature": "Knots a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a knot vector consisting of one knot.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "knot",
          "package": "splines",
          "signature": "a -\u003e Knots a",
          "source": "src/Math-Spline-Knots.html#knot",
          "type": "function"
        },
        "index": {
          "description": "Create knot vector consisting of one knot",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "knot",
          "normalized": "a-\u003eKnots a",
          "package": "splines",
          "signature": "a-\u003eKnots a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:knot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eknotDomain kts p\u003c/code\u003e returns the domain of a B-spline or NURBS with knot\n vector \u003ccode\u003ekts\u003c/code\u003e and degree \u003ccode\u003ep\u003c/code\u003e.  This is the subrange spanned by all\n except the first and last \u003ccode\u003ep\u003c/code\u003e knots.  Outside this domain, the spline\n does not have a complete basis set.  De Boor's algorithm assumes that\n the basis functions sum to 1, which is only true on this range, and so\n this is also precisely the domain on which de Boor's algorithm is valid.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "knotDomain",
          "package": "splines",
          "signature": "Knots a -\u003e Int -\u003e Maybe (a, a)",
          "source": "src/Math-Spline-Knots.html#knotDomain",
          "type": "function"
        },
        "index": {
          "description": "knotDomain kts returns the domain of B-spline or NURBS with knot vector kts and degree This is the subrange spanned by all except the first and last knots Outside this domain the spline does not have complete basis set De Boor algorithm assumes that the basis functions sum to which is only true on this range and so this is also precisely the domain on which de Boor algorithm is valid",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "knotDomain",
          "normalized": "Knots a-\u003eInt-\u003eMaybe(a,a)",
          "package": "splines",
          "partial": "Domain",
          "signature": "Knots a-\u003eInt-\u003eMaybe(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:knotDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up the multiplicity of a knot (which is 0 if the point is not a knot)\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "knotMultiplicity",
          "package": "splines",
          "signature": "k -\u003e Knots k -\u003e Int",
          "source": "src/Math-Spline-Knots.html#knotMultiplicity",
          "type": "function"
        },
        "index": {
          "description": "Looks up the multiplicity of knot which is if the point is not knot",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "knotMultiplicity",
          "normalized": "a-\u003eKnots a-\u003eInt",
          "package": "splines",
          "partial": "Multiplicity",
          "signature": "k-\u003eKnots k-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:knotMultiplicity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eknotSpan kts i j\u003c/code\u003e returns the knot span extending from the \u003ccode\u003ei\u003c/code\u003e'th knot\n to the \u003ccode\u003ej\u003c/code\u003e'th knot, if  \u003ccode\u003ei \u003c= j\u003c/code\u003e and both knots exist.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "knotSpan",
          "package": "splines",
          "signature": "Knots a -\u003e Int -\u003e Int -\u003e Maybe (a, a)",
          "source": "src/Math-Spline-Knots.html#knotSpan",
          "type": "function"
        },
        "index": {
          "description": "knotSpan kts returns the knot span extending from the th knot to the th knot if and both knots exist",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "knotSpan",
          "normalized": "Knots a-\u003eInt-\u003eInt-\u003eMaybe(a,a)",
          "package": "splines",
          "partial": "Span",
          "signature": "Knots a-\u003eInt-\u003eInt-\u003eMaybe(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:knotSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eknotSpans kts width\u003c/code\u003e returns all knot spans of a given width in\n ascending order.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003eknotSpans (mkKnots [1..5]) 2\u003c/code\u003e yields \u003ccode\u003e[(1,3), (2,4), (3,5)]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "knotSpans",
          "package": "splines",
          "signature": "Knots a -\u003e Int -\u003e [(a, a)]",
          "source": "src/Math-Spline-Knots.html#knotSpans",
          "type": "function"
        },
        "index": {
          "description": "knotSpans kts width returns all knot spans of given width in ascending order For example knotSpans mkKnots yields",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "knotSpans",
          "normalized": "Knots a-\u003eInt-\u003e[(a,a)]",
          "package": "splines",
          "partial": "Spans",
          "signature": "Knots a-\u003eInt-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:knotSpans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all knots (not necessarily distinct) of a knot vector in ascending order\n\u003c/p\u003e",
          "module": "[\"Math.Spline.Knots\",\"Math.Spline\"]",
          "name": "knots",
          "package": "splines",
          "signature": "Knots t -\u003e [t]",
          "source": "src/Math-Spline-Knots.html#knots",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:knots\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:knots\"]"
        },
        "index": {
          "description": "Returns list of all knots not necessarily distinct of knot vector in ascending order",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "knots",
          "normalized": "Knots a-\u003e[a]",
          "package": "splines",
          "signature": "Knots t-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:knots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eknotsInSpan kts i j\u003c/code\u003e returns the knots in the knot span extending from\n the \u003ccode\u003ei\u003c/code\u003e'th knot to the \u003ccode\u003ej\u003c/code\u003e'th knot\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "knotsInSpan",
          "package": "splines",
          "signature": "Knots a -\u003e Int -\u003e Int -\u003e Knots a",
          "source": "src/Math-Spline-Knots.html#knotsInSpan",
          "type": "function"
        },
        "index": {
          "description": "knotsInSpan kts returns the knots in the knot span extending from the th knot to the th knot",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "knotsInSpan",
          "normalized": "Knots a-\u003eInt-\u003eInt-\u003eKnots a",
          "package": "splines",
          "partial": "In Span",
          "signature": "Knots a-\u003eInt-\u003eInt-\u003eKnots a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:knotsInSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a vector of all knots (not necessarily distinct) of a knot vector in ascending order\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "knotsVector",
          "package": "splines",
          "signature": "Knots t -\u003e Vector t",
          "source": "src/Math-Spline-Knots.html#knotsVector",
          "type": "function"
        },
        "index": {
          "description": "Returns vector of all knots not necessarily distinct of knot vector in ascending order",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "knotsVector",
          "normalized": "Knots a-\u003eVector a",
          "package": "splines",
          "partial": "Vector",
          "signature": "Knots t-\u003eVector t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:knotsVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "lookupDistinctKnot",
          "package": "splines",
          "signature": "Int -\u003e Knots a -\u003e Maybe a",
          "source": "src/Math-Spline-Knots.html#lookupDistinctKnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "lookupDistinctKnot",
          "normalized": "Int-\u003eKnots a-\u003eMaybe a",
          "package": "splines",
          "partial": "Distinct Knot",
          "signature": "Int-\u003eKnots a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:lookupDistinctKnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "lookupKnot",
          "package": "splines",
          "signature": "Int -\u003e Knots a -\u003e Maybe a",
          "source": "src/Math-Spline-Knots.html#lookupKnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "lookupKnot",
          "normalized": "Int-\u003eKnots a-\u003eMaybe a",
          "package": "splines",
          "partial": "Knot",
          "signature": "Int-\u003eKnots a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:lookupKnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "maxKnot",
          "package": "splines",
          "signature": "Knots a -\u003e Maybe (a, Int)",
          "source": "src/Math-Spline-Knots.html#maxKnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "maxKnot",
          "normalized": "Knots a-\u003eMaybe(a,Int)",
          "package": "splines",
          "partial": "Knot",
          "signature": "Knots a-\u003eMaybe(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:maxKnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "maxMultiplicity",
          "package": "splines",
          "signature": "Knots t -\u003e Int",
          "source": "src/Math-Spline-Knots.html#maxMultiplicity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "maxMultiplicity",
          "normalized": "Knots a-\u003eInt",
          "package": "splines",
          "partial": "Multiplicity",
          "signature": "Knots t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:maxMultiplicity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "minKnot",
          "package": "splines",
          "signature": "Knots a -\u003e Maybe (a, Int)",
          "source": "src/Math-Spline-Knots.html#minKnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "minKnot",
          "normalized": "Knots a-\u003eMaybe(a,Int)",
          "package": "splines",
          "partial": "Knot",
          "signature": "Knots a-\u003eMaybe(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:minKnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a knot vector consisting of all the knots in a list.\n\u003c/p\u003e",
          "module": "[\"Math.Spline.Knots\",\"Math.Spline\"]",
          "name": "mkKnots",
          "package": "splines",
          "signature": "[a] -\u003e Knots a",
          "source": "src/Math-Spline-Knots.html#mkKnots",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:mkKnots\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:mkKnots\"]"
        },
        "index": {
          "description": "Create knot vector consisting of all the knots in list",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "mkKnots",
          "normalized": "[a]-\u003eKnots a",
          "package": "splines",
          "partial": "Knots",
          "signature": "[a]-\u003eKnots a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:mkKnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a knot vector consisting of one knot with the specified multiplicity.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "multipleKnot",
          "package": "splines",
          "signature": "a -\u003e Int -\u003e Knots a",
          "source": "src/Math-Spline-Knots.html#multipleKnot",
          "type": "function"
        },
        "index": {
          "description": "Create knot vector consisting of one knot with the specified multiplicity",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "multipleKnot",
          "normalized": "a-\u003eInt-\u003eKnots a",
          "package": "splines",
          "partial": "Knot",
          "signature": "a-\u003eInt-\u003eKnots a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:multipleKnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "multiplicities",
          "package": "splines",
          "signature": "Knots t -\u003e [Int]",
          "source": "src/Math-Spline-Knots.html#multiplicities",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "multiplicities",
          "normalized": "Knots a-\u003e[Int]",
          "package": "splines",
          "signature": "Knots t-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:multiplicities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "multiplicitiesVector",
          "package": "splines",
          "signature": "Knots a -\u003e Vector Int",
          "source": "src/Math-Spline-Knots.html#multiplicitiesVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "multiplicitiesVector",
          "normalized": "Knots a-\u003eVector Int",
          "package": "splines",
          "partial": "Vector",
          "signature": "Knots a-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:multiplicitiesVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of distinct knots in a knot vector.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "numDistinctKnots",
          "package": "splines",
          "signature": "Knots t -\u003e Int",
          "source": "src/Math-Spline-Knots.html#numDistinctKnots",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of distinct knots in knot vector",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "numDistinctKnots",
          "normalized": "Knots a-\u003eInt",
          "package": "splines",
          "partial": "Distinct Knots",
          "signature": "Knots t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:numDistinctKnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of knots (not necessarily distinct) in a knot vector.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "numKnots",
          "package": "splines",
          "signature": "Knots t -\u003e Int",
          "source": "src/Math-Spline-Knots.html#numKnots",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of knots not necessarily distinct in knot vector",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "numKnots",
          "normalized": "Knots a-\u003eInt",
          "package": "splines",
          "partial": "Knots",
          "signature": "Knots t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:numKnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new knot vector with the given knot set to the specified \n multiplicity and all other knots unchanged.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "setKnotMultiplicity",
          "package": "splines",
          "signature": "k -\u003e Int -\u003e Knots k -\u003e Knots k",
          "source": "src/Math-Spline-Knots.html#setKnotMultiplicity",
          "type": "function"
        },
        "index": {
          "description": "Returns new knot vector with the given knot set to the specified multiplicity and all other knots unchanged",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "setKnotMultiplicity",
          "normalized": "a-\u003eInt-\u003eKnots a-\u003eKnots a",
          "package": "splines",
          "partial": "Knot Multiplicity",
          "signature": "k-\u003eInt-\u003eKnots k-\u003eKnots k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:setKnotMultiplicity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "splitDistinctKnotsAt",
          "package": "splines",
          "signature": "Int -\u003e Knots a -\u003e (Knots a, Knots a)",
          "source": "src/Math-Spline-Knots.html#splitDistinctKnotsAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "splitDistinctKnotsAt",
          "normalized": "Int-\u003eKnots a-\u003e(Knots a,Knots a)",
          "package": "splines",
          "partial": "Distinct Knots At",
          "signature": "Int-\u003eKnots a-\u003e(Knots a,Knots a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:splitDistinctKnotsAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "splitFind",
          "package": "splines",
          "signature": "k -\u003e Knots k -\u003e (Knots k, Knots k, Knots k)",
          "source": "src/Math-Spline-Knots.html#splitFind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "splitFind",
          "normalized": "a-\u003eKnots a-\u003e(Knots a,Knots a,Knots a)",
          "package": "splines",
          "partial": "Find",
          "signature": "k-\u003eKnots k-\u003e(Knots k,Knots k,Knots k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:splitFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "splitKnotsAt",
          "package": "splines",
          "signature": "Int -\u003e Knots a -\u003e (Knots a, Knots a)",
          "source": "src/Math-Spline-Knots.html#splitKnotsAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "splitKnotsAt",
          "normalized": "Int-\u003eKnots a-\u003e(Knots a,Knots a)",
          "package": "splines",
          "partial": "Knots At",
          "signature": "Int-\u003eKnots a-\u003e(Knots a,Knots a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:splitKnotsAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esplitLookup n kts\u003c/code\u003e: Split a knot vector \u003ccode\u003ekts\u003c/code\u003e into 3 parts \u003ccode\u003e(pre, mbKt, post)\u003c/code\u003e\n such that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All the keys in \u003ccode\u003epre\u003c/code\u003e, \u003ccode\u003embKt\u003c/code\u003e (viewed as a knot vector of either 0\n or 1 knot), and \u003ccode\u003epost\u003c/code\u003e are disjoint and ordered\n  * Putting the 3 parts back together yields exactly the original knot vector\n  * The \u003ccode\u003en\u003c/code\u003e'th knot, if one exists, will be in \u003ccode\u003embKt\u003c/code\u003e along with its multiplicity\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Math.Spline.Knots",
          "name": "splitLookup",
          "package": "splines",
          "signature": "Int -\u003e Knots a -\u003e (Knots a, Maybe a, Knots a)",
          "source": "src/Math-Spline-Knots.html#splitLookup",
          "type": "function"
        },
        "index": {
          "description": "splitLookup kts Split knot vector kts into parts pre mbKt post such that All the keys in pre mbKt viewed as knot vector of either or knot and post are disjoint and ordered Putting the parts back together yields exactly the original knot vector The th knot if one exists will be in mbKt along with its multiplicity",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "splitLookup",
          "normalized": "Int-\u003eKnots a-\u003e(Knots a,Maybe a,Knots a)",
          "package": "splines",
          "partial": "Lookup",
          "signature": "Int-\u003eKnots a-\u003e(Knots a,Maybe a,Knots a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:splitLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "takeDistinctKnots",
          "package": "splines",
          "signature": "Int -\u003e Knots a -\u003e Knots a",
          "source": "src/Math-Spline-Knots.html#takeDistinctKnots",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "takeDistinctKnots",
          "normalized": "Int-\u003eKnots a-\u003eKnots a",
          "package": "splines",
          "partial": "Distinct Knots",
          "signature": "Int-\u003eKnots a-\u003eKnots a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:takeDistinctKnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "takeKnots",
          "package": "splines",
          "signature": "Int -\u003e Knots a -\u003e Knots a",
          "source": "src/Math-Spline-Knots.html#takeKnots",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "takeKnots",
          "normalized": "Int-\u003eKnots a-\u003eKnots a",
          "package": "splines",
          "partial": "Knots",
          "signature": "Int-\u003eKnots a-\u003eKnots a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:takeKnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all distinct knots in ascending order along with\n their multiplicities.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "toList",
          "package": "splines",
          "signature": "Knots k -\u003e [(k, Int)]",
          "source": "src/Math-Spline-Knots.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all distinct knots in ascending order along with their multiplicities",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "toList",
          "normalized": "Knots a-\u003e[(a,Int)]",
          "package": "splines",
          "partial": "List",
          "signature": "Knots k-\u003e[(k,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "toMap",
          "package": "splines",
          "signature": "Knots k -\u003e Map k Int",
          "source": "src/Math-Spline-Knots.html#toMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "toMap",
          "normalized": "Knots a-\u003eMap a Int",
          "package": "splines",
          "partial": "Map",
          "signature": "Knots k-\u003eMap k Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.Knots",
          "name": "toVector",
          "package": "splines",
          "signature": "Knots k -\u003e Vector (k, Int)",
          "source": "src/Math-Spline-Knots.html#toVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "toVector",
          "normalized": "Knots a-\u003eVector(a,Int)",
          "package": "splines",
          "partial": "Vector",
          "signature": "Knots k-\u003eVector(k,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003euniform deg nPts (lo,hi)\u003c/code\u003e constructs a uniformly-spaced knot vector over\n the interval from \u003ccode\u003elo\u003c/code\u003e to \u003ccode\u003ehi\u003c/code\u003e which, when used to construct a B-spline \n with \u003ccode\u003enPts\u003c/code\u003e control points will yield a clamped spline with degree \u003ccode\u003edeg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "uniform",
          "package": "splines",
          "signature": "Int -\u003e Int -\u003e (s, s) -\u003e Knots s",
          "source": "src/Math-Spline-Knots.html#uniform",
          "type": "function"
        },
        "index": {
          "description": "uniform deg nPts lo hi constructs uniformly-spaced knot vector over the interval from lo to hi which when used to construct B-spline with nPts control points will yield clamped spline with degree deg",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "uniform",
          "normalized": "Int-\u003eInt-\u003e(a,a)-\u003eKnots a",
          "package": "splines",
          "signature": "Int-\u003eInt-\u003e(s,s)-\u003eKnots s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the internal consistency of a knot vector\n\u003c/p\u003e",
          "module": "Math.Spline.Knots",
          "name": "valid",
          "package": "splines",
          "signature": "Knots k -\u003e Bool",
          "source": "src/Math-Spline-Knots.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check the internal consistency of knot vector",
          "hierarchy": "Math Spline Knots",
          "module": "Math.Spline.Knots",
          "name": "valid",
          "normalized": "Knots a-\u003eBool",
          "package": "splines",
          "signature": "Knots k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-Knots.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline.MSpline",
          "name": "MSpline",
          "package": "splines",
          "source": "src/Math-Spline-MSpline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Spline MSpline",
          "module": "Math.Spline.MSpline",
          "name": "MSpline",
          "package": "splines",
          "partial": "MSpline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-MSpline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eM-Splines are B-splines normalized so that the integral of each basis \n function over the spline domain is 1.\n\u003c/p\u003e",
          "module": "Math.Spline.MSpline",
          "name": "MSpline",
          "package": "splines",
          "source": "src/Math-Spline-MSpline.html#MSpline",
          "type": "data"
        },
        "index": {
          "description": "M-Splines are B-splines normalized so that the integral of each basis function over the spline domain is",
          "hierarchy": "Math Spline MSpline",
          "module": "Math.Spline.MSpline",
          "name": "MSpline",
          "package": "splines",
          "partial": "MSpline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-MSpline.html#t:MSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emSpline kts cps\u003c/code\u003e creates a M-spline with the given knot vector and control \n points.  The degree is automatically inferred as the difference between the \n number of spans in the knot vector (\u003ccode\u003enumKnots kts - 1\u003c/code\u003e) and the number of \n control points (\u003ccode\u003elength cps\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Math.Spline.MSpline\",\"Math.Spline\"]",
          "name": "mSpline",
          "package": "splines",
          "signature": "Knots (Scalar a) -\u003e Vector a -\u003e MSpline a",
          "source": "src/Math-Spline-MSpline.html#mSpline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-MSpline.html#v:mSpline\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:mSpline\"]"
        },
        "index": {
          "description": "mSpline kts cps creates M-spline with the given knot vector and control points The degree is automatically inferred as the difference between the number of spans in the knot vector numKnots kts and the number of control points length cps",
          "hierarchy": "Math Spline MSpline",
          "module": "Math.Spline.MSpline",
          "name": "mSpline",
          "normalized": "Knots(Scalar a)-\u003eVector a-\u003eMSpline a",
          "package": "splines",
          "partial": "Spline",
          "signature": "Knots(Scalar a)-\u003eVector a-\u003eMSpline a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-MSpline.html#v:mSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.Spline.MSpline\",\"Math.Spline\"]",
          "name": "toMSpline",
          "package": "splines",
          "signature": "s v -\u003e MSpline v",
          "source": "src/Math-Spline-MSpline.html#toMSpline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/splines/docs/Math-Spline-MSpline.html#v:toMSpline\",\"http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:toMSpline\"]"
        },
        "index": {
          "hierarchy": "Math Spline MSpline",
          "module": "Math.Spline.MSpline",
          "name": "toMSpline",
          "normalized": "a b-\u003eMSpline b",
          "package": "splines",
          "partial": "MSpline",
          "signature": "s v-\u003eMSpline v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline-MSpline.html#v:toMSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline",
          "name": "Spline",
          "package": "splines",
          "source": "src/Math-Spline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "Spline",
          "package": "splines",
          "partial": "Spline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA B-spline, defined by a knot vector (see \u003ccode\u003e\u003ca\u003eKnots\u003c/a\u003e\u003c/code\u003e) and a sequence of control points.\n\u003c/p\u003e",
          "module": "Math.Spline",
          "name": "BSpline",
          "package": "splines",
          "source": "src/Math-Spline-BSpline-Internal.html#BSpline",
          "type": "data"
        },
        "index": {
          "description": "B-spline defined by knot vector see Knots and sequence of control points",
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "BSpline",
          "package": "splines",
          "partial": "BSpline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#t:BSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bezier curve on \u003ccode\u003e0 \u003c= x \u003c= 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline",
          "name": "BezierCurve",
          "package": "splines",
          "source": "src/Math-Spline-BezierCurve.html#BezierCurve",
          "type": "data"
        },
        "index": {
          "description": "Bezier curve on",
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "BezierCurve",
          "package": "splines",
          "partial": "Bezier Curve",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#t:BezierCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCubic Hermite splines.  These are cubic splines defined by a \n sequence of control points and derivatives at those points.\n\u003c/p\u003e",
          "module": "Math.Spline",
          "name": "CSpline",
          "package": "splines",
          "source": "src/Math-Spline-Hermite.html#CSpline",
          "type": "data"
        },
        "index": {
          "description": "Cubic Hermite splines These are cubic splines defined by sequence of control points and derivatives at those points",
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "CSpline",
          "package": "splines",
          "partial": "CSpline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#t:CSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline",
          "name": "ControlPoints",
          "package": "splines",
          "source": "src/Math-Spline-Class.html#ControlPoints",
          "type": "class"
        },
        "index": {
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "ControlPoints",
          "package": "splines",
          "partial": "Control Points",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#t:ControlPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe I-Spline basis functions are the integrals of the M-splines, or\n alternatively the integrals of the B-splines normalized to the range\n [0,1].  Every I-spline basis function increases monotonically from 0 to 1,\n thus it is useful as a basis for monotone functions.  An I-Spline curve\n is monotone if and only if every non-zero control point has the same sign.\n\u003c/p\u003e",
          "module": "Math.Spline",
          "name": "ISpline",
          "package": "splines",
          "source": "src/Math-Spline-ISpline.html#ISpline",
          "type": "data"
        },
        "index": {
          "description": "The I-Spline basis functions are the integrals of the M-splines or alternatively the integrals of the B-splines normalized to the range Every I-spline basis function increases monotonically from to thus it is useful as basis for monotone functions An I-Spline curve is monotone if and only if every non-zero control point has the same sign",
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "ISpline",
          "package": "splines",
          "partial": "ISpline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#t:ISpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKnot vectors - multisets of points in a 1-dimensional space.\n\u003c/p\u003e",
          "module": "Math.Spline",
          "name": "Knots",
          "package": "splines",
          "source": "src/Math-Spline-Knots.html#Knots",
          "type": "data"
        },
        "index": {
          "description": "Knot vectors multisets of points in dimensional space",
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "Knots",
          "package": "splines",
          "partial": "Knots",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#t:Knots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eM-Splines are B-splines normalized so that the integral of each basis \n function over the spline domain is 1.\n\u003c/p\u003e",
          "module": "Math.Spline",
          "name": "MSpline",
          "package": "splines",
          "source": "src/Math-Spline-MSpline.html#MSpline",
          "type": "data"
        },
        "index": {
          "description": "M-Splines are B-splines normalized so that the integral of each basis function over the spline domain is",
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "MSpline",
          "package": "splines",
          "partial": "MSpline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#t:MSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA spline is a piecewise polynomial vector-valued function.  The necessary\n and sufficient instance definition is \u003ccode\u003e\u003ca\u003etoBSpline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Spline",
          "name": "Spline",
          "package": "splines",
          "source": "src/Math-Spline-Class.html#Spline",
          "type": "class"
        },
        "index": {
          "description": "spline is piecewise polynomial vector-valued function The necessary and sufficient instance definition is toBSpline",
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "Spline",
          "package": "splines",
          "partial": "Spline",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#t:Spline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline",
          "name": "controlPoints",
          "package": "splines",
          "signature": "s v -\u003e Vector v",
          "source": "src/Math-Spline-Class.html#controlPoints",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "controlPoints",
          "normalized": "a b-\u003eVector b",
          "package": "splines",
          "partial": "Points",
          "signature": "s v-\u003eVector v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:controlPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline",
          "name": "evalSpline",
          "package": "splines",
          "signature": "s v -\u003e Scalar v -\u003e v",
          "source": "src/Math-Spline-Class.html#evalSpline",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "evalSpline",
          "normalized": "a b-\u003eScalar b-\u003eb",
          "package": "splines",
          "partial": "Spline",
          "signature": "s v-\u003eScalar v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:evalSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline",
          "name": "knotVector",
          "package": "splines",
          "signature": "s v -\u003e Knots (Scalar v)",
          "source": "src/Math-Spline-Class.html#knotVector",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "knotVector",
          "normalized": "a b-\u003eKnots(Scalar b)",
          "package": "splines",
          "partial": "Vector",
          "signature": "s v-\u003eKnots(Scalar v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:knotVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline",
          "name": "splineDegree",
          "package": "splines",
          "signature": "s v -\u003e Int",
          "source": "src/Math-Spline-Class.html#splineDegree",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "splineDegree",
          "normalized": "a b-\u003eInt",
          "package": "splines",
          "partial": "Degree",
          "signature": "s v-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:splineDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the domain of a spline.  In the case of B-splines, this is\n the domain on which a spline with this degree and knot vector has a \n full basis set.  In other cases, it should be no larger than \n \u003ccode\u003esplineDomain . toBSpline\u003c/code\u003e, but may be smaller.  Within this domain,\n \u003ccode\u003e\u003ca\u003eevalSpline\u003c/a\u003e\u003c/code\u003e should agree with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eevalSpline\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoBSpline\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (not \n necessarily exactly, but up to reasonable expectations of numerical \n accuracy).\n\u003c/p\u003e",
          "module": "Math.Spline",
          "name": "splineDomain",
          "package": "splines",
          "signature": "s v -\u003e Maybe (Scalar v, Scalar v)",
          "source": "src/Math-Spline-Class.html#splineDomain",
          "type": "method"
        },
        "index": {
          "description": "Returns the domain of spline In the case of B-splines this is the domain on which spline with this degree and knot vector has full basis set In other cases it should be no larger than splineDomain toBSpline but may be smaller Within this domain evalSpline should agree with evalSpline toBSpline not necessarily exactly but up to reasonable expectations of numerical accuracy",
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "splineDomain",
          "normalized": "a b-\u003eMaybe(Scalar b,Scalar b)",
          "package": "splines",
          "partial": "Domain",
          "signature": "s v-\u003eMaybe(Scalar v,Scalar v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:splineDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Spline",
          "name": "toBSpline",
          "package": "splines",
          "signature": "s v -\u003e BSpline Vector v",
          "source": "src/Math-Spline-Class.html#toBSpline",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Spline",
          "module": "Math.Spline",
          "name": "toBSpline",
          "normalized": "a b-\u003eBSpline Vector b",
          "package": "splines",
          "partial": "BSpline",
          "signature": "s v-\u003eBSpline Vector v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/splines/docs/Math-Spline.html#v:toBSpline"
      }
    }
  ]
]