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
        "word": "BerlekampAlgorithm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BerlekampAlgorithm",
          "name": "BerlekampAlgorithm",
          "package": "BerlekampAlgorithm",
          "source": "src/BerlekampAlgorithm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "BerlekampAlgorithm",
          "package": "BerlekampAlgorithm",
          "partial": "Berlekamp Algorithm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eberlekamp\n berlekamp p P: gives a complete factorization of a polynom P of irreducible polynoms over Fp[x].\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "berlekamp",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e [Integer] -\u003e [[Integer]]",
          "source": "src/BerlekampAlgorithm.html#berlekamp",
          "type": "function"
        },
        "index": {
          "description": "berlekamp berlekamp gives complete factorization of polynom of irreducible polynoms over Fp",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "berlekamp",
          "normalized": "Integer-\u003e[Integer]-\u003e[[Integer]]",
          "package": "BerlekampAlgorithm",
          "signature": "Integer-\u003e[Integer]-\u003e[[Integer]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:berlekamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ederivPolyZ : derivative of polynmial P over Fp[x]\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "derivPolyZ",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e [Integer] -\u003e [Integer]",
          "source": "src/BerlekampAlgorithm.html#derivPolyZ",
          "type": "function"
        },
        "index": {
          "description": "derivPolyZ derivative of polynmial over Fp",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "derivPolyZ",
          "normalized": "Integer-\u003e[Integer]-\u003e[Integer]",
          "package": "BerlekampAlgorithm",
          "partial": "Poly",
          "signature": "Integer-\u003e[Integer]-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:derivPolyZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrobenius automorphism : linear map V -\u003e V^p - V , V in Fp[x]\u003cem\u003eP and Fp[x]\u003c/em\u003eP as vector space over the field Fp.\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "frob",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e Integer -\u003e [Integer] -\u003e [Integer]",
          "source": "src/BerlekampAlgorithm.html#frob",
          "type": "function"
        },
        "index": {
          "description": "Frobenius automorphism linear map in Fp and Fp as vector space over the field Fp",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "frob",
          "normalized": "Integer-\u003eInteger-\u003e[Integer]-\u003e[Integer]",
          "package": "BerlekampAlgorithm",
          "signature": "Integer-\u003eInteger-\u003e[Integer]-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:frob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBerlekamp's Factorization Algorithm over Fp[x] : computes the factorization of a monic square-free polynomial P into irreducible factor polynomials over F_{p}[x] , p is a prime number. This method is based on linear algebra over finite field.\n | g\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "g",
          "package": "BerlekampAlgorithm",
          "signature": "Maybe a -\u003e a",
          "source": "src/BerlekampAlgorithm.html#g",
          "type": "function"
        },
        "index": {
          "description": "Berlekamp Factorization Algorithm over Fp computes the factorization of monic square-free polynomial into irreducible factor polynomials over is prime number This method is based on linear algebra over finite field",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "g",
          "normalized": "Maybe a-\u003ea",
          "package": "BerlekampAlgorithm",
          "signature": "Maybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eirreducibilityTestPolyZ\n irreducibilityTestPolyZ : irreducibility test of polynomials over Fp[x]\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "irreducibilityTestPolyZ",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e [Integer] -\u003e Bool",
          "source": "src/BerlekampAlgorithm.html#irreducibilityTestPolyZ",
          "type": "function"
        },
        "index": {
          "description": "irreducibilityTestPolyZ irreducibilityTestPolyZ irreducibility test of polynomials over Fp",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "irreducibilityTestPolyZ",
          "normalized": "Integer-\u003e[Integer]-\u003eBool",
          "package": "BerlekampAlgorithm",
          "partial": "Test Poly",
          "signature": "Integer-\u003e[Integer]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:irreducibilityTestPolyZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elswap\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "lswap",
          "package": "BerlekampAlgorithm",
          "signature": "Int -\u003e Int -\u003e ([a], [a1]) -\u003e ([a], [a1])",
          "source": "src/BerlekampAlgorithm.html#lswap",
          "type": "function"
        },
        "index": {
          "description": "lswap",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "lswap",
          "normalized": "Int-\u003eInt-\u003e([a],[a])-\u003e([a],[a])",
          "package": "BerlekampAlgorithm",
          "signature": "Int-\u003eInt-\u003e([a],[a])-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:lswap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematrixBerl\n matrixBerl p f : is the matrix of the Frobenius endomorphism over the canonical base {1,X,X^2..,X^(p-1)} ,\n matrixBerl(i,j) = X^(pj)-X^j mod P.\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "matrixBerlTranspose",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e [Integer] -\u003e [[Integer]]",
          "source": "src/BerlekampAlgorithm.html#matrixBerlTranspose",
          "type": "function"
        },
        "index": {
          "description": "matrixBerl matrixBerl is the matrix of the Frobenius endomorphism over the canonical base p-1 matrixBerl pj mod",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "matrixBerlTranspose",
          "normalized": "Integer-\u003e[Integer]-\u003e[[Integer]]",
          "package": "BerlekampAlgorithm",
          "partial": "Berl Transpose",
          "signature": "Integer-\u003e[Integer]-\u003e[[Integer]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:matrixBerlTranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emmultZ\n mmultZ p a b : compute the product of two integer matrices in Fp.\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "mmultZ",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e [[Integer]] -\u003e [[Integer]] -\u003e [[Integer]]",
          "source": "src/BerlekampAlgorithm.html#mmultZ",
          "type": "function"
        },
        "index": {
          "description": "mmultZ mmultZ compute the product of two integer matrices in Fp",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "mmultZ",
          "normalized": "Integer-\u003e[[Integer]]-\u003e[[Integer]]-\u003e[[Integer]]",
          "package": "BerlekampAlgorithm",
          "signature": "Integer-\u003e[[Integer]]-\u003e[[Integer]]-\u003e[[Integer]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:mmultZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultPoly\n multPoly : product of polynomials P1, .., Pk in Fp[x].\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "multPoly",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e [[Integer]] -\u003e [Integer]",
          "source": "src/BerlekampAlgorithm.html#multPoly",
          "type": "function"
        },
        "index": {
          "description": "multPoly multPoly product of polynomials P1 Pk in Fp",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "multPoly",
          "normalized": "Integer-\u003e[[Integer]]-\u003e[Integer]",
          "package": "BerlekampAlgorithm",
          "partial": "Poly",
          "signature": "Integer-\u003e[[Integer]]-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:multPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enullSpaceModIntegerMat p m : computes the null space of matrix m in Fp\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "nullSpaceModIntegerMat",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e [[Integer]] -\u003e [[Integer]]",
          "source": "src/BerlekampAlgorithm.html#nullSpaceModIntegerMat",
          "type": "function"
        },
        "index": {
          "description": "nullSpaceModIntegerMat computes the null space of matrix in Fp",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "nullSpaceModIntegerMat",
          "normalized": "Integer-\u003e[[Integer]]-\u003e[[Integer]]",
          "package": "BerlekampAlgorithm",
          "partial": "Space Mod Integer Mat",
          "signature": "Integer-\u003e[[Integer]]-\u003e[[Integer]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:nullSpaceModIntegerMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epivotPos'\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "pivotPos'",
          "package": "BerlekampAlgorithm",
          "signature": "t -\u003e [[a]] -\u003e (Int, t)",
          "source": "src/BerlekampAlgorithm.html#pivotPos%27",
          "type": "function"
        },
        "index": {
          "description": "pivotPos",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "pivotPos'",
          "normalized": "a-\u003e[[b]]-\u003e(Int,a)",
          "package": "BerlekampAlgorithm",
          "partial": "Pos'",
          "signature": "t-\u003e[[a]]-\u003e(Int,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:pivotPos-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esquareFreePolyZ\n squareFreePolyZ p f : gives the euclidean quotient of P and gcd(f,f'). That quotient is a square free polynomial.\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "squareFreePolyZ",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e [Integer] -\u003e [Integer]",
          "source": "src/BerlekampAlgorithm.html#squareFreePolyZ",
          "type": "function"
        },
        "index": {
          "description": "squareFreePolyZ squareFreePolyZ gives the euclidean quotient of and gcd That quotient is square free polynomial",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "squareFreePolyZ",
          "normalized": "Integer-\u003e[Integer]-\u003e[Integer]",
          "package": "BerlekampAlgorithm",
          "partial": "Free Poly",
          "signature": "Integer-\u003e[Integer]-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:squareFreePolyZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etriangulizedModIntegerMat\ntriangulizedModIntegerMat p m: gives the gauss triangular decomposition of an integeral matrix m in Fp.\n The result is (r, u) where u is a unimodular matrix, r is an upper-triangular matrix , and u.m = r.\n\u003c/p\u003e",
          "module": "BerlekampAlgorithm",
          "name": "triangulizedModIntegerMat",
          "package": "BerlekampAlgorithm",
          "signature": "Integer -\u003e [[Integer]] -\u003e ([[Integer]], [[Integer]])",
          "source": "src/BerlekampAlgorithm.html#triangulizedModIntegerMat",
          "type": "function"
        },
        "index": {
          "description": "triangulizedModIntegerMat triangulizedModIntegerMat gives the gauss triangular decomposition of an integeral matrix in Fp The result is where is unimodular matrix is an upper-triangular matrix and u.m",
          "hierarchy": "BerlekampAlgorithm",
          "module": "BerlekampAlgorithm",
          "name": "triangulizedModIntegerMat",
          "normalized": "Integer-\u003e[[Integer]]-\u003e([[Integer]],[[Integer]])",
          "package": "BerlekampAlgorithm",
          "partial": "Mod Integer Mat",
          "signature": "Integer-\u003e[[Integer]]-\u003e([[Integer]],[[Integer]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BerlekampAlgorithm/docs/BerlekampAlgorithm.html#v:triangulizedModIntegerMat"
      }
    }
  ]
]