[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#",
      "description": {
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "module",
        "fct-source": "src/Bezout.html",
        "fct-type": "module",
        "title": "Bezout"
      },
      "index": {
        "description": "",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "Bezout",
        "normalized": "",
        "package": "besout",
        "partial": "Bezout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:-43-:",
      "description": {
        "fct-descr": "\u003cp\u003e(+:) add or abstract two list of different length\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
        "fct-source": "src/Bezout.html#%2B%3A",
        "fct-type": "function",
        "title": "(+:)"
      },
      "index": {
        "description": "add or abstract two list of different length",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "(+:) +:",
        "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "besout",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:besout",
      "description": {
        "fct-descr": "\u003cp\u003ebesout compute extended gcd of two integers. For example : \u003ca\u003ebesout\u003c/a\u003e 13 17 = [4,-3,1] , this means that \n gcd of 13 and 17 is 1 and 1 could be written as linear combination of 13 and 17 as 1 = 4*13 - 3*17.\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "Integer -\u003e Integer -\u003e [Integer]",
        "fct-source": "src/Bezout.html#besout",
        "fct-type": "function",
        "title": "besout"
      },
      "index": {
        "description": "besout compute extended gcd of two integers For example besout this means that gcd of and is and could be written as linear combination of and as",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "besout",
        "normalized": "Integer-\u003eInteger-\u003e[Integer]",
        "package": "besout",
        "partial": "",
        "signature": "Integer-\u003eInteger-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:deg",
      "description": {
        "fct-descr": "\u003cp\u003edegree of polynomial \n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "[a] -\u003e Int",
        "fct-source": "src/Bezout.html#deg",
        "fct-type": "function",
        "title": "deg"
      },
      "index": {
        "description": "degree of polynomial",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "deg",
        "normalized": "[a]-\u003eInt",
        "package": "besout",
        "partial": "",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:euclideanPolyMod",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003eeuclidanPolyMod\u003c/a\u003e compute the quotient and remainder of euclidean division of polynomial P by\n  Q in the ring F_p[x] where p is a prime number.\n Let f = [2,0,3,2,1::Integer], g = [2,5,-3,1::Integer] in F_7[x].\n \u003ca\u003eeuclideanPolyMod\u003c/a\u003e 7 f g = [[1,1],[1,4,0]].\n That means f = (x + 1 )*g + (x^2 + 4*x ) in F_7[x].\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "Integer -\u003e [Integer] -\u003e [Integer] -\u003e [[Integer]]",
        "fct-source": "src/Bezout.html#euclideanPolyMod",
        "fct-type": "function",
        "title": "euclideanPolyMod"
      },
      "index": {
        "description": "euclidanPolyMod compute the quotient and remainder of euclidean division of polynomial by in the ring where is prime number Let Integer Integer in euclideanPolyMod That means in",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "euclideanPolyMod",
        "normalized": "Integer-\u003e[Integer]-\u003e[Integer]-\u003e[[Integer]]",
        "package": "besout",
        "partial": "Poly Mod",
        "signature": "Integer-\u003e[Integer]-\u003e[Integer]-\u003e[[Integer]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:extendedgcdpoly",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003eextendedgcdpoly\u003c/a\u003e compute the extended gcd of polynomials P and Q in the ring F_p[x] where p is a prime number. \n Let f = [2,0,3,2,1::Integer], g = [2,5,-3,1::Integer] in F_7[x]. \n \u003ca\u003eextendedgcdpoly\u003c/a\u003e 7 f g = [[5,3],[2,6,5],[2,1]] .\n This means that the gcd of f and g in F_7[x] is the polynom 2*x+1 , and\n\u003c/p\u003e\u003cp\u003e2 * x + 1 = (5 * x + 3) * f + (2 * x^2 + 6 * x + 5) * g in F_7[x].\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "Integer -\u003e [Integer] -\u003e [Integer] -\u003e [[Integer]]",
        "fct-source": "src/Bezout.html#extendedgcdpoly",
        "fct-type": "function",
        "title": "extendedgcdpoly"
      },
      "index": {
        "description": "extendedgcdpoly compute the extended gcd of polynomials and in the ring where is prime number Let Integer Integer in extendedgcdpoly This means that the gcd of and in is the polynom and in",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "extendedgcdpoly",
        "normalized": "Integer-\u003e[Integer]-\u003e[Integer]-\u003e[[Integer]]",
        "package": "besout",
        "partial": "",
        "signature": "Integer-\u003e[Integer]-\u003e[Integer]-\u003e[[Integer]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:inverseMod",
      "description": {
        "fct-descr": "\u003cp\u003eFrom besout identity we derive the modular inverse of an integer x modulo an integer y . Integers\n x and y must be relatively prime , otherwise \u003ca\u003einverseMod\u003c/a\u003e returns zero. For example : \u003ca\u003einverseMod\u003c/a\u003e 13 17 = 4 , \u003ca\u003einverseMod\u003c/a\u003e 17 13 = 10.\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer",
        "fct-source": "src/Bezout.html#inverseMod",
        "fct-type": "function",
        "title": "inverseMod"
      },
      "index": {
        "description": "From besout identity we derive the modular inverse of an integer modulo an integer Integers and must be relatively prime otherwise inverseMod returns zero For example inverseMod inverseMod",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "inverseMod",
        "normalized": "Integer-\u003eInteger-\u003eInteger",
        "package": "besout",
        "partial": "Mod",
        "signature": "Integer-\u003eInteger-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:inversePolyMod",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003einversePolyMod\u003c/a\u003e compute the modular inverse of polynomial P(x) modulo Q(x) in F_p[x] . Polynomials \n P and Q must be relatively prime , otherwise it return [0].\n Let f = [2,0,3,2,1::Integer], g = [2,5,-3,1::Integer] in F_13[x]. \n \u003ca\u003eextendedgcdpoly\u003c/a\u003e 13 f g =[[7,3,7],[6,8,4,7],[1]].\n So f and g are relatively prime in F_13[x] , and the inverse of f modulo g in F_13[x] is given by \n \u003ca\u003einversePolyMod\u003c/a\u003e 13 f g = [7,3,7] . \n\u003c/p\u003e\u003cp\u003eWhich says that the inverse of ploynomial f denoted f^(-1) is 7*x^2 + 3*x + 7 modulo g in F_13[x]\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "Integer -\u003e [Integer] -\u003e [Integer] -\u003e [Integer]",
        "fct-source": "src/Bezout.html#inversePolyMod",
        "fct-type": "function",
        "title": "inversePolyMod"
      },
      "index": {
        "description": "inversePolyMod compute the modular inverse of polynomial modulo in Polynomials and must be relatively prime otherwise it return Let Integer Integer in extendedgcdpoly So and are relatively prime in and the inverse of modulo in is given by inversePolyMod Which says that the inverse of ploynomial denoted is modulo in",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "inversePolyMod",
        "normalized": "Integer-\u003e[Integer]-\u003e[Integer]-\u003e[Integer]",
        "package": "besout",
        "partial": "Poly Mod",
        "signature": "Integer-\u003e[Integer]-\u003e[Integer]-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:mMod",
      "description": {
        "fct-descr": "\u003cp\u003emMod map \u003ca\u003emods\u003c/a\u003e over list of integers\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "[Integer] -\u003e Integer -\u003e [Integer]",
        "fct-source": "src/Bezout.html#mMod",
        "fct-type": "function",
        "title": "mMod"
      },
      "index": {
        "description": "mMod map mods over list of integers",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "mMod",
        "normalized": "[Integer]-\u003eInteger-\u003e[Integer]",
        "package": "besout",
        "partial": "Mod",
        "signature": "[Integer]-\u003eInteger-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:mods",
      "description": {
        "fct-descr": "\u003cp\u003emods return positve remainder of \u003ca\u003emod\u003c/a\u003e operator\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer",
        "fct-source": "src/Bezout.html#mods",
        "fct-type": "function",
        "title": "mods"
      },
      "index": {
        "description": "mods return positve remainder of mod operator",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "mods",
        "normalized": "Integer-\u003eInteger-\u003eInteger",
        "package": "besout",
        "partial": "",
        "signature": "Integer-\u003eInteger-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:multPolyZ",
      "description": {
        "fct-descr": "\u003cp\u003emultPolyZ compute the product of two polynomial P Q in F_p[x].  \n Write ploynom P of degree n as a sequence of coefficients P = [an, a_(n-1),.., a_0].\nTo compute the product of polynomials P,Q we borrow the Horner multiplication rules as described by the following chain.\nIt consists to do n compositions of functions detailed in the following diagramm:\nQ -\u003e anxQ + a_(n-1)Q\n\u003c/p\u003e\u003cp\u003eR -\u003e xR + a_(n-2)Q\n\u003c/p\u003e\u003cp\u003eR -\u003e xR + a_(n-3)Q\n\u003c/p\u003e\u003cp\u003eR -\u003e xR + a-1Q\n\u003c/p\u003e\u003cp\u003e...\n\u003c/p\u003e\u003cp\u003eR -\u003e xR + a_0Q\n\u003c/p\u003e\u003cp\u003eLet f = [2,0,3,2,1::Integer], g = [2,5,-3,1::Integer] in F_7[x].\n\u003ca\u003emultPolyZ 7 f g\u003c/a\u003e = [4,3,0,0,3,2,6,1] . \n That means that f*g = 4*x^7 + 3*x^6 + 3*x^3 + 2*x^2 + 6*x + 1  in F_7[x].\n This function require writing polynoms in decreasing order .\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "Integer -\u003e [Integer] -\u003e [Integer] -\u003e [Integer]",
        "fct-source": "src/Bezout.html#multPolyZ",
        "fct-type": "function",
        "title": "multPolyZ"
      },
      "index": {
        "description": "multPolyZ compute the product of two polynomial in Write ploynom of degree as sequence of coefficients an n-1 To compute the product of polynomials we borrow the Horner multiplication rules as described by the following chain It consists to do compositions of functions detailed in the following diagramm anxQ n-1 xR n-2 xR n-3 xR a-1Q xR Let Integer Integer in multPolyZ That means that in This function require writing polynoms in decreasing order",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "multPolyZ",
        "normalized": "Integer-\u003e[Integer]-\u003e[Integer]-\u003e[Integer]",
        "package": "besout",
        "partial": "Poly",
        "signature": "Integer-\u003e[Integer]-\u003e[Integer]-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:pad",
      "description": {
        "fct-descr": "\u003cp\u003epadding right with n zeros\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/Bezout.html#pad",
        "fct-type": "function",
        "title": "pad"
      },
      "index": {
        "description": "padding right with zeros",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "pad",
        "normalized": "Int-\u003e[a]-\u003e[a]",
        "package": "besout",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:prettyFormPoly",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a facility for writing non nul terms of polynomial , if f = 5*x^13 + 4*x^5 + (-3)*x^4 + 11*x + 19 , then\n\u003c/p\u003e\u003cp\u003eprettyFormPoly [[5,13],[4,5],[-3,4],[11,1],[19,0]] = [5,0,0,0,0,0,0,0,4,-3,0,0,11,19]\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "[[Integer]] -\u003e [Integer]",
        "fct-source": "src/Bezout.html#prettyFormPoly",
        "fct-type": "function",
        "title": "prettyFormPoly"
      },
      "index": {
        "description": "This is facility for writing non nul terms of polynomial if then prettyFormPoly",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "prettyFormPoly",
        "normalized": "[[Integer]]-\u003e[Integer]",
        "package": "besout",
        "partial": "Form Poly",
        "signature": "[[Integer]]-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:shift",
      "description": {
        "fct-descr": "\u003cp\u003epadding left with n zeros\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/Bezout.html#shift",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "padding left with zeros",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "shift",
        "normalized": "Int-\u003e[a]-\u003e[a]",
        "package": "besout",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003etrim\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Bezout.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "trim",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "trim",
        "normalized": "[a]-\u003e[a]",
        "package": "besout",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/besout/docs/Bezout.html#v:trim-39-",
      "description": {
        "fct-descr": "\u003cp\u003etrim'\n\u003c/p\u003e",
        "fct-module": "Bezout",
        "fct-package": "besout",
        "fct-signature": "[t] -\u003e [t]",
        "fct-source": "src/Bezout.html#trim%27",
        "fct-type": "function",
        "title": "trim'"
      },
      "index": {
        "description": "trim",
        "hierarchy": "Bezout",
        "module": "Bezout",
        "name": "trim'",
        "normalized": "[a]-\u003e[a]",
        "package": "besout",
        "partial": "",
        "signature": "[t]-\u003e[t]"
      }
    }
  }
]