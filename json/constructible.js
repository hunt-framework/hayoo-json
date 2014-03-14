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
        "word": "constructible"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe constructible reals, \u003ccode\u003e\u003ca\u003eConstruct\u003c/a\u003e\u003c/code\u003e, are the subset of the real\nnumbers that can be represented exactly using field operations\n(addition, subtraction, multiplication, division) and positive square\nroots.  They support exact computations, equality comparisons, and\nordering.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[((1 + sqrt 5)/2)^n - ((1 - sqrt 5)/2)^n :: Construct | n \u003c- [1..10]]\n\u003c/code\u003e\u003c/strong\u003e[sqrt 5,sqrt 5,2*sqrt 5,3*sqrt 5,5*sqrt 5,8*sqrt 5,13*sqrt 5,21*sqrt 5,34*sqrt 5,55*sqrt 5]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f (a, b, t, p) = ((a + b)/2, sqrt (a*b), t - p*((a - b)/2)^2, 2*p)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet (a, b, t, p) = f . f . f . f $ (1, 1/sqrt 2, 1/4, 1 :: Construct)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efloor $ ((a + b)^2/(4*t))*10**40\n\u003c/code\u003e\u003c/strong\u003e31415926535897932384626433832795028841971\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet qf (p, q) = ((p + sqrt (p^2 - 4*q))/2, (p - sqrt (p^2 - 4*q))/2 :: Construct)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet [(v, w), (x, _), (y, _), (z, _)] = map qf [(-1, -4), (v, -1), (w, -1), (x, y)]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ez/2\n\u003c/code\u003e\u003c/strong\u003e-1/16 + 1/16*sqrt 17 + 1/8*sqrt (17/2 - 1/2*sqrt 17) + 1/4*sqrt (17/4 + 3/4*sqrt 17 - (3/4 + 1/4*sqrt 17)*sqrt (17/2 - 1/2*sqrt 17))\n\u003c/pre\u003e\u003cp\u003eConstructible complex numbers may be built from constructible reals\nusing \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e from the complex-generic library.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(z/2 :+ sqrt (1 - (z/2)^2))^17\n\u003c/code\u003e\u003c/strong\u003e1 :+ 0\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Real.Constructible",
          "name": "Constructible",
          "package": "constructible",
          "source": "src/Data-Real-Constructible.html",
          "type": "module"
        },
        "index": {
          "description": "The constructible reals Construct are the subset of the real numbers that can be represented exactly using field operations addition subtraction multiplication division and positive square roots They support exact computations equality comparisons and ordering sqrt sqrt Construct sqrt sqrt sqrt sqrt sqrt sqrt sqrt sqrt sqrt sqrt let sqrt let sqrt Construct floor let qf sqrt sqrt Construct let map qf sqrt sqrt sqrt sqrt sqrt sqrt sqrt sqrt Constructible complex numbers may be built from constructible reals using Complex from the complex-generic library sqrt",
          "hierarchy": "Data Real Constructible",
          "module": "Data.Real.Constructible",
          "name": "Constructible",
          "package": "constructible",
          "partial": "Constructible",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/constructible/docs/Data-Real-Constructible.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of constructible real numbers.\n\u003c/p\u003e",
          "module": "Data.Real.Constructible",
          "name": "Construct",
          "package": "constructible",
          "source": "src/Data-Real-Constructible.html#Construct",
          "type": "data"
        },
        "index": {
          "description": "The type of constructible real numbers",
          "hierarchy": "Data Real Constructible",
          "module": "Data.Real.Constructible",
          "name": "Construct",
          "package": "constructible",
          "partial": "Construct",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/constructible/docs/Data-Real-Constructible.html#t:Construct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of exceptions thrown by impossible \u003ccode\u003e\u003ca\u003eConstruct\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.Real.Constructible",
          "name": "ConstructException",
          "package": "constructible",
          "source": "src/Data-Real-Constructible.html#ConstructException",
          "type": "data"
        },
        "index": {
          "description": "The type of exceptions thrown by impossible Construct operations",
          "hierarchy": "Data Real Constructible",
          "module": "Data.Real.Constructible",
          "name": "ConstructException",
          "package": "constructible",
          "partial": "Construct Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/constructible/docs/Data-Real-Constructible.html#t:ConstructException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoRational\u003c/a\u003e\u003c/code\u003e was given an irrational constructible number.\n\u003c/p\u003e",
          "module": "Data.Real.Constructible",
          "name": "ConstructIrrational",
          "package": "constructible",
          "signature": "ConstructIrrational",
          "source": "src/Data-Real-Constructible.html#ConstructException",
          "type": "function"
        },
        "index": {
          "description": "toRational was given an irrational constructible number",
          "hierarchy": "Data Real Constructible",
          "module": "Data.Real.Constructible",
          "name": "ConstructIrrational",
          "package": "constructible",
          "partial": "Construct Irrational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constructible/docs/Data-Real-Constructible.html#v:ConstructIrrational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e was given a negative constructible number.\n\u003c/p\u003e",
          "module": "Data.Real.Constructible",
          "name": "ConstructSqrtNegative",
          "package": "constructible",
          "signature": "ConstructSqrtNegative",
          "source": "src/Data-Real-Constructible.html#ConstructException",
          "type": "function"
        },
        "index": {
          "description": "sqrt was given negative constructible number",
          "hierarchy": "Data Real Constructible",
          "module": "Data.Real.Constructible",
          "name": "ConstructSqrtNegative",
          "package": "constructible",
          "partial": "Construct Sqrt Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constructible/docs/Data-Real-Constructible.html#v:ConstructSqrtNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e**\u003c/a\u003e\u003c/code\u003e was given an exponent that is not a dyadic rational, or a transcendental function was called.\n\u003c/p\u003e",
          "module": "Data.Real.Constructible",
          "name": "Unconstructible",
          "package": "constructible",
          "signature": "Unconstructible String",
          "source": "src/Data-Real-Constructible.html#ConstructException",
          "type": "function"
        },
        "index": {
          "description": "was given an exponent that is not dyadic rational or transcendental function was called",
          "hierarchy": "Data Real Constructible",
          "module": "Data.Real.Constructible",
          "name": "Unconstructible",
          "package": "constructible",
          "partial": "Unconstructible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constructible/docs/Data-Real-Constructible.html#v:Unconstructible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a rational constructible number as a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, or an\nirrational constructible number as a triple \u003ccode\u003e(a, b, r)\u003c/code\u003e of simpler\nconstructible numbers representing \u003ccode\u003ea + b*sqrt r\u003c/code\u003e (with \u003ccode\u003eb /= 0\u003c/code\u003e and\n\u003ccode\u003er \u003e 0\u003c/code\u003e).  Recursively calling \u003ccode\u003e\u003ca\u003edeconstruct\u003c/a\u003e\u003c/code\u003e on all triples will yield\na finite tree that terminates in \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e leaves.\n\u003c/p\u003e\u003cp\u003eNote that two constructible numbers that compare as equal may\ndeconstruct in different ways.\n\u003c/p\u003e",
          "module": "Data.Real.Constructible",
          "name": "deconstruct",
          "package": "constructible",
          "signature": "Construct -\u003e Either Rational (Construct, Construct, Construct)",
          "source": "src/Data-Real-Constructible.html#deconstruct",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct rational constructible number as Rational or an irrational constructible number as triple of simpler constructible numbers representing sqrt with and Recursively calling deconstruct on all triples will yield finite tree that terminates in Rational leaves Note that two constructible numbers that compare as equal may deconstruct in different ways",
          "hierarchy": "Data Real Constructible",
          "module": "Data.Real.Constructible",
          "name": "deconstruct",
          "normalized": "Construct-\u003eEither Rational(Construct,Construct,Construct)",
          "package": "constructible",
          "signature": "Construct-\u003eEither Rational(Construct,Construct,Construct)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constructible/docs/Data-Real-Constructible.html#v:deconstruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a floating-point approximation for a constructible number.\n\u003c/p\u003e\u003cp\u003eTo improve numerical stability, addition of numbers with different\nsigns is avoided using quadratic conjugation.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromConstruct $ sum (map sqrt [7, 14, 39, 70, 72, 76, 85]) - sum (map sqrt [13, 16, 46, 55, 67, 73, 79])\n\u003c/code\u003e\u003c/strong\u003e1.8837969820815017e-19\n\u003c/pre\u003e",
          "module": "Data.Real.Constructible",
          "name": "fromConstruct",
          "package": "constructible",
          "signature": "Construct -\u003e a",
          "source": "src/Data-Real-Constructible.html#fromConstruct",
          "type": "function"
        },
        "index": {
          "description": "Evaluate floating-point approximation for constructible number To improve numerical stability addition of numbers with different signs is avoided using quadratic conjugation fromConstruct sum map sqrt sum map sqrt e-19",
          "hierarchy": "Data Real Constructible",
          "module": "Data.Real.Constructible",
          "name": "fromConstruct",
          "normalized": "Construct-\u003ea",
          "package": "constructible",
          "partial": "Construct",
          "signature": "Construct-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constructible/docs/Data-Real-Constructible.html#v:fromConstruct"
      }
    }
  ]
]