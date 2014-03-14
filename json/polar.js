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
        "word": "polar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Complex.Polar",
          "name": "Polar",
          "package": "polar",
          "source": "src/Data-Complex-Polar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "Polar",
          "package": "polar",
          "partial": "Polar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex numbers are an algebraic type.\n\u003c/p\u003e\u003cp\u003eFor a complex number \u003ccode\u003ez\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e is a number with the magnitude of \u003ccode\u003ez\u003c/code\u003e,\n but oriented in the positive real direction, whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e\n has the phase of \u003ccode\u003ez\u003c/code\u003e, but unit magnitude.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "Polar",
          "package": "polar",
          "source": "src/Data-Complex-Polar.html#Polar",
          "type": "data"
        },
        "index": {
          "description": "Complex numbers are an algebraic type For complex number abs is number with the magnitude of but oriented in the positive real direction whereas signum has the phase of but unit magnitude",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "Polar",
          "package": "polar",
          "partial": "Polar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#t:Polar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforms a complex number from its magnitude\n   and its phase in radians.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": ":\u003c",
          "package": "polar",
          "signature": "a :\u003c !a",
          "source": "src/Data-Complex-Polar.html#Polar",
          "type": "function"
        },
        "index": {
          "description": "forms complex number from its magnitude and its phase in radians",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": ":\u003c",
          "package": "polar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecis\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e is a complex value with magnitude \u003ccode\u003e1\u003c/code\u003e\n and phase \u003ccode\u003et\u003c/code\u003e (modulo \u003ccode\u003e2*\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "cis",
          "package": "polar",
          "signature": "a -\u003e Polar a",
          "source": "src/Data-Complex-Polar.html#cis",
          "type": "function"
        },
        "index": {
          "description": "cis is complex value with magnitude and phase modulo pi",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "cis",
          "normalized": "a-\u003ePolar a",
          "package": "polar",
          "signature": "a-\u003ePolar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:cis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conjugate of a complex number.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "conjugate",
          "package": "polar",
          "signature": "Polar a -\u003e Polar a",
          "source": "src/Data-Complex-Polar.html#conjugate",
          "type": "function"
        },
        "index": {
          "description": "The conjugate of complex number",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "conjugate",
          "normalized": "Polar a-\u003ePolar a",
          "package": "polar",
          "signature": "Polar a-\u003ePolar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to polar form.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "fromComplex",
          "package": "polar",
          "signature": "Complex a -\u003e Polar a",
          "source": "src/Data-Complex-Polar.html#fromComplex",
          "type": "function"
        },
        "index": {
          "description": "Convert to polar form",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "fromComplex",
          "normalized": "Complex a-\u003ePolar a",
          "package": "polar",
          "partial": "Complex",
          "signature": "Complex a-\u003ePolar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:fromComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to rectangular form.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "fromPolar",
          "package": "polar",
          "signature": "Polar a -\u003e Complex a",
          "source": "src/Data-Complex-Polar.html#fromPolar",
          "type": "function"
        },
        "index": {
          "description": "Convert to rectangular form",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "fromPolar",
          "normalized": "Polar a-\u003eComplex a",
          "package": "polar",
          "partial": "Polar",
          "signature": "Polar a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:fromPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the imaginary part of a complex number.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "imagPart",
          "package": "polar",
          "signature": "Polar a -\u003e a",
          "source": "src/Data-Complex-Polar.html#imagPart",
          "type": "function"
        },
        "index": {
          "description": "Extracts the imaginary part of complex number",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "imagPart",
          "normalized": "Polar a-\u003ea",
          "package": "polar",
          "partial": "Part",
          "signature": "Polar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:imagPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nonnegative magnitude of a complex number.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "magnitude",
          "package": "polar",
          "signature": "Polar a -\u003e a",
          "source": "src/Data-Complex-Polar.html#magnitude",
          "type": "function"
        },
        "index": {
          "description": "The nonnegative magnitude of complex number",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "magnitude",
          "normalized": "Polar a-\u003ea",
          "package": "polar",
          "signature": "Polar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a complex number from polar components of magnitude and phase.\n Phase is wrapped into (-pi,pi].\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "mkPolar",
          "package": "polar",
          "signature": "a -\u003e a -\u003e Polar a",
          "source": "src/Data-Complex-Polar.html#mkPolar",
          "type": "function"
        },
        "index": {
          "description": "Form complex number from polar components of magnitude and phase Phase is wrapped into pi pi",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "mkPolar",
          "normalized": "a-\u003ea-\u003ePolar a",
          "package": "polar",
          "partial": "Polar",
          "signature": "a-\u003ea-\u003ePolar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:mkPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phase of a complex number, in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n If the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "phase",
          "package": "polar",
          "signature": "Polar a -\u003e a",
          "source": "src/Data-Complex-Polar.html#phase",
          "type": "function"
        },
        "index": {
          "description": "The phase of complex number in the range pi pi If the magnitude is zero then so is the phase",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "phase",
          "normalized": "Polar a-\u003ea",
          "package": "polar",
          "signature": "Polar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epolar\u003c/a\u003e\u003c/code\u003e takes a complex number and\n returns a (magnitude, phase) pair in canonical form:\n the magnitude is nonnegative, and the phase in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e;\n if the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "polar",
          "package": "polar",
          "signature": "Polar a -\u003e (a, a)",
          "source": "src/Data-Complex-Polar.html#polar",
          "type": "function"
        },
        "index": {
          "description": "The function polar takes complex number and returns magnitude phase pair in canonical form the magnitude is nonnegative and the phase in the range pi pi if the magnitude is zero then so is the phase",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "polar",
          "normalized": "Polar a-\u003e(a,a)",
          "package": "polar",
          "signature": "Polar a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:polar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the real part of a complex number.\n\u003c/p\u003e",
          "module": "Data.Complex.Polar",
          "name": "realPart",
          "package": "polar",
          "signature": "Polar a -\u003e a",
          "source": "src/Data-Complex-Polar.html#realPart",
          "type": "function"
        },
        "index": {
          "description": "Extracts the real part of complex number",
          "hierarchy": "Data Complex Polar",
          "module": "Data.Complex.Polar",
          "name": "realPart",
          "normalized": "Polar a-\u003ea",
          "package": "polar",
          "partial": "Part",
          "signature": "Polar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polar/docs/Data-Complex-Polar.html#v:realPart"
      }
    }
  ]
]