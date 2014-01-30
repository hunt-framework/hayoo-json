[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements a *very* basic LLL (Lenstra-Lenstra-Lovsz) lattice reduction algorithm. This version uses exact arithmetic over the rationals.\n   References for the LLL algorithm:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Factoring Polynomials with Rational Coefficients, Arjen K Lenstra, Hendrik W Lenstra Jr, and Lszl Lovsz. Mathematische Annalen 261, 515-534 (1982)\n\u003c/li\u003e\u003cli\u003e Mathematics of Public Key Cryptography, Steven Galbraith. Chapter 17 of draft 1.0\n\u003c/li\u003e\u003cli\u003e Modern Computer Algebra, second edition, Joachim von zur Gathen and Jrgen Gerhard. Chapter 16.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReferences for Babai's Nearest Plane Method for the Closest Vector Problem:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e On Lovsz' Lattice Reduction And The Nearest Lattice Point Problem, Lszl Babai. Combinatorica 6 (1), 1-13 (1986).\n\u003c/li\u003e\u003cli\u003e Mathematics of Public Key Cryptography, Steven Galbraith. Chapter 18 of draft 1.0\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Math.Lattices.LLL",
        "fct-package": "Lattices",
        "fct-signature": "module",
        "fct-source": "src/Math-Lattices-LLL.html",
        "fct-type": "module",
        "title": "LLL"
      },
      "index": {
        "description": "Implements very basic LLL Lenstra-Lenstra-Lovsz lattice reduction algorithm This version uses exact arithmetic over the rationals References for the LLL algorithm Factoring Polynomials with Rational Coefficients Arjen Lenstra Hendrik Lenstra Jr and Lszl Lovsz Mathematische Annalen Mathematics of Public Key Cryptography Steven Galbraith Chapter of draft Modern Computer Algebra second edition Joachim von zur Gathen and Jrgen Gerhard Chapter References for Babai Nearest Plane Method for the Closest Vector Problem On Lovsz Lattice Reduction And The Nearest Lattice Point Problem Lszl Babai Combinatorica Mathematics of Public Key Cryptography Steven Galbraith Chapter of draft",
        "hierarchy": "Math Lattices LLL",
        "module": "Math.Lattices.LLL",
        "name": "LLL",
        "normalized": "",
        "package": "Lattices",
        "partial": "LLL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#t:Basis",
      "description": {
        "fct-descr": "\u003cp\u003eA matrix representing a basis\n\u003c/p\u003e",
        "fct-module": "Math.Lattices.LLL",
        "fct-package": "Lattices",
        "fct-signature": "type",
        "fct-source": "src/Math-Lattices-LLL.html#Basis",
        "fct-type": "type",
        "title": "Basis"
      },
      "index": {
        "description": "matrix representing basis",
        "hierarchy": "Math Lattices LLL",
        "module": "Math.Lattices.LLL",
        "name": "Basis",
        "normalized": "",
        "package": "Lattices",
        "partial": "Basis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#v:closeVector",
      "description": {
        "fct-descr": "\u003cp\u003eFind a lattice vector in 'basis close to \u003ccode\u003ex\u003c/code\u003e. \u003ccode\u003ebasis\u003c/code\u003e is assumed to be LLL-reduced\n\u003c/p\u003e",
        "fct-module": "Math.Lattices.LLL",
        "fct-package": "Lattices",
        "fct-signature": "[[Rational]] -\u003e [Ratio Integer] -\u003e [Rational]",
        "fct-source": "src/Math-Lattices-LLL.html#closeVector",
        "fct-type": "function",
        "title": "closeVector"
      },
      "index": {
        "description": "Find lattice vector in basis close to basis is assumed to be LLL-reduced",
        "hierarchy": "Math Lattices LLL",
        "module": "Math.Lattices.LLL",
        "name": "closeVector",
        "normalized": "[[Rational]]-\u003e[Ratio Integer]-\u003e[Rational]",
        "package": "Lattices",
        "partial": "Vector",
        "signature": "[[Rational]]-\u003e[Ratio Integer]-\u003e[Rational]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#v:lll",
      "description": {
        "fct-descr": "\u003cp\u003eJust an easy way to write $||v||^2$\n\u003c/p\u003e\u003cp\u003eClosest 'Integral to the given n, rounding up. $lfloor nrceil$\n\u003c/p\u003e\u003cp\u003eReturn an LLL reduced basis. This calls 'lllDelta with a default parameter $delta = 3/4$\n\u003c/p\u003e",
        "fct-module": "Math.Lattices.LLL",
        "fct-package": "Lattices",
        "fct-signature": "[[Rational]] -\u003e Basis",
        "fct-source": "src/Math-Lattices-LLL.html#lll",
        "fct-type": "function",
        "title": "lll"
      },
      "index": {
        "description": "Just an easy way to write Closest Integral to the given rounding up lfloor nrceil Return an LLL reduced basis This calls lllDelta with default parameter delta",
        "hierarchy": "Math Lattices LLL",
        "module": "Math.Lattices.LLL",
        "name": "lll",
        "normalized": "[[Rational]]-\u003eBasis",
        "package": "Lattices",
        "partial": "",
        "signature": "[[Rational]]-\u003eBasis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-Lattices-LLL.html#v:lllDelta",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an LLL reduced basis, with reduction parameter $delta$. This is the conventional flavor of the algorithm using Gram-Schmidt, no fancy speedups yet\n\u003c/p\u003e",
        "fct-module": "Math.Lattices.LLL",
        "fct-package": "Lattices",
        "fct-signature": "[[Rational]] -\u003e Rational -\u003e Basis",
        "fct-source": "src/Math-Lattices-LLL.html#lllDelta",
        "fct-type": "function",
        "title": "lllDelta"
      },
      "index": {
        "description": "Return an LLL reduced basis with reduction parameter delta This is the conventional flavor of the algorithm using Gram-Schmidt no fancy speedups yet",
        "hierarchy": "Math Lattices LLL",
        "module": "Math.Lattices.LLL",
        "name": "lllDelta",
        "normalized": "[[Rational]]-\u003eRational-\u003eBasis",
        "package": "Lattices",
        "partial": "Delta",
        "signature": "[[Rational]]-\u003eRational-\u003eBasis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-LinearAlgebra-GramSchmidt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompute a Gram-Schmidt orthogonal basis\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.LinearAlgebra.GramSchmidt",
        "fct-package": "Lattices",
        "fct-signature": "module",
        "fct-source": "src/Math-LinearAlgebra-GramSchmidt.html",
        "fct-type": "module",
        "title": "GramSchmidt"
      },
      "index": {
        "description": "Compute Gram-Schmidt orthogonal basis",
        "hierarchy": "Math LinearAlgebra GramSchmidt",
        "module": "Math.LinearAlgebra.GramSchmidt",
        "name": "GramSchmidt",
        "normalized": "",
        "package": "Lattices",
        "partial": "Gram Schmidt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-LinearAlgebra-GramSchmidt.html#v:gramSchmidtBasis",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a basis, return the Gram-Schmidt orhthogonal basis\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.GramSchmidt",
        "fct-package": "Lattices",
        "fct-signature": "[[a]] -\u003e [[a]]",
        "fct-source": "src/Math-LinearAlgebra-GramSchmidt.html#gramSchmidtBasis",
        "fct-type": "function",
        "title": "gramSchmidtBasis"
      },
      "index": {
        "description": "Given basis return the Gram-Schmidt orhthogonal basis",
        "hierarchy": "Math LinearAlgebra GramSchmidt",
        "module": "Math.LinearAlgebra.GramSchmidt",
        "name": "gramSchmidtBasis",
        "normalized": "[[a]]-\u003e[[a]]",
        "package": "Lattices",
        "partial": "Schmidt Basis",
        "signature": "[[a]]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lattices/docs/Math-LinearAlgebra-GramSchmidt.html#v:gramSchmidtOrthogonalization",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a basis, return the Gram-Schmidt orthogonalization, which is a tuple with the Gram-Schmidt orthogonal basis first, and the\n   $mu_{i,j} = langle b_i, b^*_j rangle / langle b^*_j, b^*_j rangle$ triangular matrix second, for $1 leq j \u003c i \u003c n$.\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.GramSchmidt",
        "fct-package": "Lattices",
        "fct-signature": "[[a]] -\u003e ([[a]], [[a]])",
        "fct-source": "src/Math-LinearAlgebra-GramSchmidt.html#gramSchmidtOrthogonalization",
        "fct-type": "function",
        "title": "gramSchmidtOrthogonalization"
      },
      "index": {
        "description": "Given basis return the Gram-Schmidt orthogonalization which is tuple with the Gram-Schmidt orthogonal basis first and the mu langle rangle langle rangle triangular matrix second for leq",
        "hierarchy": "Math LinearAlgebra GramSchmidt",
        "module": "Math.LinearAlgebra.GramSchmidt",
        "name": "gramSchmidtOrthogonalization",
        "normalized": "[[a]]-\u003e([[a]],[[a]])",
        "package": "Lattices",
        "partial": "Schmidt Orthogonalization",
        "signature": "[[a]]-\u003e([[a]],[[a]])"
      }
    }
  }
]