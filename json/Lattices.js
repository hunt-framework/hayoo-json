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
        "word": "Lattices"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements a *very* basic LLL (Lenstra-Lenstra-Lovsz) lattice reduction algorithm. This version uses exact arithmetic over the rationals.\n   References for the LLL algorithm:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Factoring Polynomials with Rational Coefficients, Arjen K Lenstra, Hendrik W Lenstra Jr, and Lszl Lovsz. Mathematische Annalen 261, 515-534 (1982)\n\u003c/li\u003e\u003cli\u003e Mathematics of Public Key Cryptography, Steven Galbraith. Chapter 17 of draft 1.0\n\u003c/li\u003e\u003cli\u003e Modern Computer Algebra, second edition, Joachim von zur Gathen and Jrgen Gerhard. Chapter 16.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReferences for Babai's Nearest Plane Method for the Closest Vector Problem:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e On Lovsz' Lattice Reduction And The Nearest Lattice Point Problem, Lszl Babai. Combinatorica 6 (1), 1-13 (1986).\n\u003c/li\u003e\u003cli\u003e Mathematics of Public Key Cryptography, Steven Galbraith. Chapter 18 of draft 1.0\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Math.Lattices.LLL",
          "name": "LLL",
          "package": "Lattices",
          "source": "src/Math-Lattices-LLL.html",
          "type": "module"
        },
        "index": {
          "description": "Implements very basic LLL Lenstra-Lenstra-Lovsz lattice reduction algorithm This version uses exact arithmetic over the rationals References for the LLL algorithm Factoring Polynomials with Rational Coefficients Arjen Lenstra Hendrik Lenstra Jr and Lszl Lovsz Mathematische Annalen Mathematics of Public Key Cryptography Steven Galbraith Chapter of draft Modern Computer Algebra second edition Joachim von zur Gathen and Jrgen Gerhard Chapter References for Babai Nearest Plane Method for the Closest Vector Problem On Lovsz Lattice Reduction And The Nearest Lattice Point Problem Lszl Babai Combinatorica Mathematics of Public Key Cryptography Steven Galbraith Chapter of draft",
          "hierarchy": "Math Lattices LLL",
          "module": "Math.Lattices.LLL",
          "name": "LLL",
          "package": "Lattices",
          "partial": "LLL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA matrix representing a basis\n\u003c/p\u003e",
          "module": "Math.Lattices.LLL",
          "name": "Basis",
          "package": "Lattices",
          "source": "src/Math-Lattices-LLL.html#Basis",
          "type": "type"
        },
        "index": {
          "description": "matrix representing basis",
          "hierarchy": "Math Lattices LLL",
          "module": "Math.Lattices.LLL",
          "name": "Basis",
          "package": "Lattices",
          "partial": "Basis",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#t:Basis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a lattice vector in 'basis close to \u003ccode\u003ex\u003c/code\u003e. \u003ccode\u003ebasis\u003c/code\u003e is assumed to be LLL-reduced\n\u003c/p\u003e",
          "module": "Math.Lattices.LLL",
          "name": "closeVector",
          "package": "Lattices",
          "signature": "[[Rational]] -\u003e [Ratio Integer] -\u003e [Rational]",
          "source": "src/Math-Lattices-LLL.html#closeVector",
          "type": "function"
        },
        "index": {
          "description": "Find lattice vector in basis close to basis is assumed to be LLL-reduced",
          "hierarchy": "Math Lattices LLL",
          "module": "Math.Lattices.LLL",
          "name": "closeVector",
          "normalized": "[[Rational]]-\u003e[Ratio Integer]-\u003e[Rational]",
          "package": "Lattices",
          "partial": "Vector",
          "signature": "[[Rational]]-\u003e[Ratio Integer]-\u003e[Rational]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#v:closeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust an easy way to write $||v||^2$\n\u003c/p\u003e\u003cp\u003eClosest 'Integral to the given n, rounding up. $lfloor nrceil$\n\u003c/p\u003e\u003cp\u003eReturn an LLL reduced basis. This calls 'lllDelta with a default parameter $delta = 3/4$\n\u003c/p\u003e",
          "module": "Math.Lattices.LLL",
          "name": "lll",
          "package": "Lattices",
          "signature": "[[Rational]] -\u003e Basis",
          "source": "src/Math-Lattices-LLL.html#lll",
          "type": "function"
        },
        "index": {
          "description": "Just an easy way to write Closest Integral to the given rounding up lfloor nrceil Return an LLL reduced basis This calls lllDelta with default parameter delta",
          "hierarchy": "Math Lattices LLL",
          "module": "Math.Lattices.LLL",
          "name": "lll",
          "normalized": "[[Rational]]-\u003eBasis",
          "package": "Lattices",
          "signature": "[[Rational]]-\u003eBasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#v:lll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an LLL reduced basis, with reduction parameter $delta$. This is the conventional flavor of the algorithm using Gram-Schmidt, no fancy speedups yet\n\u003c/p\u003e",
          "module": "Math.Lattices.LLL",
          "name": "lllDelta",
          "package": "Lattices",
          "signature": "[[Rational]] -\u003e Rational -\u003e Basis",
          "source": "src/Math-Lattices-LLL.html#lllDelta",
          "type": "function"
        },
        "index": {
          "description": "Return an LLL reduced basis with reduction parameter delta This is the conventional flavor of the algorithm using Gram-Schmidt no fancy speedups yet",
          "hierarchy": "Math Lattices LLL",
          "module": "Math.Lattices.LLL",
          "name": "lllDelta",
          "normalized": "[[Rational]]-\u003eRational-\u003eBasis",
          "package": "Lattices",
          "partial": "Delta",
          "signature": "[[Rational]]-\u003eRational-\u003eBasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#v:lllDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompute a Gram-Schmidt orthogonal basis\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.LinearAlgebra.GramSchmidt",
          "name": "GramSchmidt",
          "package": "Lattices",
          "source": "src/Math-LinearAlgebra-GramSchmidt.html",
          "type": "module"
        },
        "index": {
          "description": "Compute Gram-Schmidt orthogonal basis",
          "hierarchy": "Math LinearAlgebra GramSchmidt",
          "module": "Math.LinearAlgebra.GramSchmidt",
          "name": "GramSchmidt",
          "package": "Lattices",
          "partial": "Gram Schmidt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-LinearAlgebra-GramSchmidt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a basis, return the Gram-Schmidt orhthogonal basis\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.GramSchmidt",
          "name": "gramSchmidtBasis",
          "package": "Lattices",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Math-LinearAlgebra-GramSchmidt.html#gramSchmidtBasis",
          "type": "function"
        },
        "index": {
          "description": "Given basis return the Gram-Schmidt orhthogonal basis",
          "hierarchy": "Math LinearAlgebra GramSchmidt",
          "module": "Math.LinearAlgebra.GramSchmidt",
          "name": "gramSchmidtBasis",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "Lattices",
          "partial": "Schmidt Basis",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-LinearAlgebra-GramSchmidt.html#v:gramSchmidtBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a basis, return the Gram-Schmidt orthogonalization, which is a tuple with the Gram-Schmidt orthogonal basis first, and the\n   $mu_{i,j} = langle b_i, b^*_j rangle / langle b^*_j, b^*_j rangle$ triangular matrix second, for $1 leq j \u003c i \u003c n$.\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.GramSchmidt",
          "name": "gramSchmidtOrthogonalization",
          "package": "Lattices",
          "signature": "[[a]] -\u003e ([[a]], [[a]])",
          "source": "src/Math-LinearAlgebra-GramSchmidt.html#gramSchmidtOrthogonalization",
          "type": "function"
        },
        "index": {
          "description": "Given basis return the Gram-Schmidt orthogonalization which is tuple with the Gram-Schmidt orthogonal basis first and the mu langle rangle langle rangle triangular matrix second for leq",
          "hierarchy": "Math LinearAlgebra GramSchmidt",
          "module": "Math.LinearAlgebra.GramSchmidt",
          "name": "gramSchmidtOrthogonalization",
          "normalized": "[[a]]-\u003e([[a]],[[a]])",
          "package": "Lattices",
          "partial": "Schmidt Orthogonalization",
          "signature": "[[a]]-\u003e([[a]],[[a]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-LinearAlgebra-GramSchmidt.html#v:gramSchmidtOrthogonalization"
      }
    }
  ]
]