[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses corresponding to common structures from abstract algebra.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "module",
        "fct-source": "src/Data-YAP-Algebra.html",
        "fct-type": "module",
        "title": "Algebra"
      },
      "index": {
        "description": "Classes corresponding to common structures from abstract algebra",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "Algebra",
        "normalized": "",
        "package": "yap",
        "partial": "Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#t:AbelianGroup",
      "description": {
        "fct-descr": "\u003cp\u003eAn Abelian group has an commutative associative binary operation\n with an identity and inverses.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and (\u003ccode\u003e(\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#AbelianGroup",
        "fct-type": "class",
        "title": "AbelianGroup"
      },
      "index": {
        "description": "An Abelian group has an commutative associative binary operation with an identity and inverses Minimal complete definition zero and or negate",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "AbelianGroup",
        "normalized": "",
        "package": "yap",
        "partial": "Abelian Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#t:EuclideanDomain",
      "description": {
        "fct-descr": "\u003cp\u003eA integral domain (a non-trivial commutative \u003ccode\u003e\u003ca\u003eRing\u003c/a\u003e\u003c/code\u003e with no zero\n divisors) on which the Euclid's algorithm for \u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e works.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n  (\u003ccode\u003e\u003ca\u003edivMod\u003c/a\u003e\u003c/code\u003e or (\u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e)) and \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#EuclideanDomain",
        "fct-type": "class",
        "title": "EuclideanDomain"
      },
      "index": {
        "description": "integral domain non-trivial commutative Ring with no zero divisors on which the Euclid algorithm for gcd works Minimal complete definition divMod or div and mod and unit",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "EuclideanDomain",
        "normalized": "",
        "package": "yap",
        "partial": "Euclidean Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eA commutative \u003ccode\u003e\u003ca\u003eRing\u003c/a\u003e\u003c/code\u003e in which all non-zero elements have multiplicative\n inverses.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#Field",
        "fct-type": "class",
        "title": "Field"
      },
      "index": {
        "description": "commutative Ring in which all non-zero elements have multiplicative inverses Minimal complete definition recip or",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "Field",
        "normalized": "",
        "package": "yap",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#t:Ring",
      "description": {
        "fct-descr": "\u003cp\u003eA ring: addition forms an Abelian group, and multiplication defines\n a monoid and distributes over addition.\n Multiplication is not guaranteed to be commutative.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#Ring",
        "fct-type": "class",
        "title": "Ring"
      },
      "index": {
        "description": "ring addition forms an Abelian group and multiplication defines monoid and distributes over addition Multiplication is not guaranteed to be commutative Minimal complete definition and fromInteger",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "Ring",
        "normalized": "",
        "package": "yap",
        "partial": "Ring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:-42-",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation with identity \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e,\n distributing over \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#%2A",
        "fct-type": "method",
        "title": "(*)"
      },
      "index": {
        "description": "An associative operation with identity fromInteger distributing over and zero",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "(*) *",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:-43-",
      "description": {
        "fct-descr": "\u003cp\u003eA commutative associative operation with identity \u003ccode\u003ezero\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#%2B",
        "fct-type": "method",
        "title": "(+)"
      },
      "index": {
        "description": "commutative associative operation with identity zero",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "(+) +",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:-47-",
      "description": {
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#%2F",
        "fct-type": "method",
        "title": "(/)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "(/) /",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:associate",
      "description": {
        "fct-descr": "\u003cp\u003eFor each \u003ccode\u003ex\u003c/code\u003e there is a decomposition \u003ccode\u003ex == \u003ccode\u003e\u003ca\u003eassociate\u003c/a\u003e\u003c/code\u003e x * \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e has a multiplicative inverse and\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e are factors of each other, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003eassociate\u003c/a\u003e\u003c/code\u003e x == \u003ccode\u003e\u003ca\u003eassociate\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eassociate\u003c/a\u003e\u003c/code\u003e 1 == 1\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor integral types, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eassociate\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e is a non-negative integer and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e is \u003ccode\u003e-1\u003c/code\u003e or \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#associate",
        "fct-type": "method",
        "title": "associate"
      },
      "index": {
        "description": "For each there is decomposition associate unit such that unit has multiplicative inverse and if and are factors of each other then associate associate associate For integral types associate is non-negative integer and unit is or",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "associate",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:div",
      "description": {
        "fct-descr": "\u003cp\u003eDivision with remainder: for any \u003ccode\u003ed /= 0\u003c/code\u003e,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003en == \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e n d * d + \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e n d\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e (n + a*d) d == \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e n d\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e n d\u003c/code\u003e is smaller than \u003ccode\u003ed\u003c/code\u003e in some well-founded order.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor integral types, \u003ccode\u003e\u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e n d\u003c/code\u003e is a non-negative integer smaller\n than the absolute value of \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#div",
        "fct-type": "method",
        "title": "div"
      },
      "index": {
        "description": "Division with remainder for any div mod mod mod mod is smaller than in some well-founded order For integral types mod is non-negative integer smaller than the absolute value of",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "div",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:divMod",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003edivMod\u003c/a\u003e\u003c/code\u003e n d == (\u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e n d, \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e n d)\u003c/pre\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e (a, a)",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#divMod",
        "fct-type": "method",
        "title": "divMod"
      },
      "index": {
        "description": "divMod div mod",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "divMod",
        "normalized": "a-\u003ea-\u003e(a,a)",
        "package": "yap",
        "partial": "Mod",
        "signature": "a-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:fromInteger",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, the initial ring:\n \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e is the unique function preserving \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e,\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, and for which \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e is the\n identity of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAn integer literal represents the application of the function\n \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e to the appropriate value of type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e,\n so such literals have type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eRing\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "Integer -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#fromInteger",
        "fct-type": "method",
        "title": "fromInteger"
      },
      "index": {
        "description": "Conversion from Integer the initial ring fromInteger is the unique function preserving zero and and for which fromInteger is the identity of An integer literal represents the application of the function fromInteger to the appropriate value of type Integer so such literals have type Ring",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "fromInteger",
        "normalized": "Integer-\u003ea",
        "package": "yap",
        "partial": "Integer",
        "signature": "Integer-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:gcd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is a common factor of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e such that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eassociate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e x y) == \u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e any common factor of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e is a factor of \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#gcd",
        "fct-type": "function",
        "title": "gcd"
      },
      "index": {
        "description": "gcd is common factor of and such that associate gcd gcd and any common factor of and is factor of gcd",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "gcd",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:lcm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is a common multiple of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e such that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eassociate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e x y) == \u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e any common multiple of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e is a multiple of \u003ccode\u003e\u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#lcm",
        "fct-type": "function",
        "title": "lcm"
      },
      "index": {
        "description": "lcm is common multiple of and such that associate lcm lcm and any common multiple of and is multiple of lcm",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "lcm",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:negate",
      "description": {
        "fct-descr": "\u003cp\u003eInverse for \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e (unary negation).\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#negate",
        "fct-type": "method",
        "title": "negate"
      },
      "index": {
        "description": "Inverse for unary negation",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "negate",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:recip",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplicative inverse.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#recip",
        "fct-type": "method",
        "title": "recip"
      },
      "index": {
        "description": "Multiplicative inverse",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "recip",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:subtract",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e-\u003c/code\u003e is treated specially in the Haskell grammar,\n \u003ccode\u003e(-\u003c/code\u003e \u003cem\u003ee\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is not a section, but an application of prefix negation.\n However, \u003ccode\u003e(\u003ccode\u003e\u003ca\u003esubtract\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e \u003cem\u003eexp\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is equivalent to the disallowed section.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#subtract",
        "fct-type": "function",
        "title": "subtract"
      },
      "index": {
        "description": "The same as flip Because is treated specially in the Haskell grammar is not section but an application of prefix negation However subtract exp is equivalent to the disallowed section",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "subtract",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Algebra.html#v:zero",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Algebra",
        "fct-package": "yap",
        "fct-signature": "a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#zero",
        "fct-type": "method",
        "title": "zero"
      },
      "index": {
        "description": "The identity of",
        "hierarchy": "Data YAP Algebra",
        "module": "Data.YAP.Algebra",
        "name": "zero",
        "normalized": "",
        "package": "yap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA version of \u003ca\u003eData.Complex\u003c/a\u003e, using the same type, but with less\n constrained operations.  In particular this version permits Gaussian\n integers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "module",
        "fct-source": "src/Data-YAP-Complex.html",
        "fct-type": "module",
        "title": "Complex"
      },
      "index": {
        "description": "version of Data.Complex using the same type but with less constrained operations In particular this version permits Gaussian integers",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "Complex",
        "normalized": "",
        "package": "yap",
        "partial": "Complex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#t:Complex",
      "description": {
        "fct-descr": "\u003cp\u003eComplex numbers are an algebraic type.\n\u003c/p\u003e\u003cp\u003eFor a complex number \u003ccode\u003ez\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e is a number with the magnitude of \u003ccode\u003ez\u003c/code\u003e,\n but oriented in the positive real direction, whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e\n has the phase of \u003ccode\u003ez\u003c/code\u003e, but unit magnitude.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Complex"
      },
      "index": {
        "description": "Complex numbers are an algebraic type For complex number abs is number with the magnitude of but oriented in the positive real direction whereas signum has the phase of but unit magnitude",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "Complex",
        "normalized": "",
        "package": "yap",
        "partial": "Complex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#v::-43-",
      "description": {
        "fct-descr": "\u003cp\u003eforms a complex number from its real and imaginary\n rectangular components.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "!a :+ !a",
        "fct-type": "function",
        "title": ":+"
      },
      "index": {
        "description": "forms complex number from its real and imaginary rectangular components",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": ":+",
        "normalized": "",
        "package": "yap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#v:cis",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecis\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e is a complex value with magnitude \u003ccode\u003e1\u003c/code\u003e\n and phase \u003ccode\u003et\u003c/code\u003e (modulo \u003ccode\u003e2*\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "a -\u003e Complex a",
        "fct-source": "src/Data-YAP-Complex.html#cis",
        "fct-type": "function",
        "title": "cis"
      },
      "index": {
        "description": "cis is complex value with magnitude and phase modulo pi",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "cis",
        "normalized": "a-\u003eComplex a",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003eComplex a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#v:conjugate",
      "description": {
        "fct-descr": "\u003cp\u003eThe conjugate of a complex number.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "Complex a -\u003e Complex a",
        "fct-source": "src/Data-YAP-Complex.html#conjugate",
        "fct-type": "function",
        "title": "conjugate"
      },
      "index": {
        "description": "The conjugate of complex number",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "conjugate",
        "normalized": "Complex a-\u003eComplex a",
        "package": "yap",
        "partial": "",
        "signature": "Complex a-\u003eComplex a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#v:imagPart",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the imaginary part of a complex number.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "Complex a -\u003e a",
        "fct-source": "src/Data-YAP-Complex.html#imagPart",
        "fct-type": "function",
        "title": "imagPart"
      },
      "index": {
        "description": "Extracts the imaginary part of complex number",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "imagPart",
        "normalized": "Complex a-\u003ea",
        "package": "yap",
        "partial": "Part",
        "signature": "Complex a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#v:magnitude",
      "description": {
        "fct-descr": "\u003cp\u003eThe nonnegative magnitude of a complex number.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e is used to do scaling to reduce the incidence of overflow.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "Complex a -\u003e a",
        "fct-source": "src/Data-YAP-Complex.html#magnitude",
        "fct-type": "function",
        "title": "magnitude"
      },
      "index": {
        "description": "The nonnegative magnitude of complex number RealFloat is used to do scaling to reduce the incidence of overflow",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "magnitude",
        "normalized": "Complex a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "Complex a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#v:mkPolar",
      "description": {
        "fct-descr": "\u003cp\u003eForm a complex number from polar components of magnitude and phase.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e Complex a",
        "fct-source": "src/Data-YAP-Complex.html#mkPolar",
        "fct-type": "function",
        "title": "mkPolar"
      },
      "index": {
        "description": "Form complex number from polar components of magnitude and phase",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "mkPolar",
        "normalized": "a-\u003ea-\u003eComplex a",
        "package": "yap",
        "partial": "Polar",
        "signature": "a-\u003ea-\u003eComplex a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#v:phase",
      "description": {
        "fct-descr": "\u003cp\u003eThe phase of a complex number, in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n If the magnitude is zero, then so is the phase.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e is need for \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "Complex a -\u003e a",
        "fct-source": "src/Data-YAP-Complex.html#phase",
        "fct-type": "function",
        "title": "phase"
      },
      "index": {
        "description": "The phase of complex number in the range pi pi If the magnitude is zero then so is the phase RealFloat is need for atan2",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "phase",
        "normalized": "Complex a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "Complex a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#v:polar",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epolar\u003c/a\u003e\u003c/code\u003e takes a complex number and\n returns a (magnitude, phase) pair in canonical form:\n the magnitude is nonnegative, and the phase in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e;\n if the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "Complex a -\u003e (a, a)",
        "fct-source": "src/Data-YAP-Complex.html#polar",
        "fct-type": "function",
        "title": "polar"
      },
      "index": {
        "description": "The function polar takes complex number and returns magnitude phase pair in canonical form the magnitude is nonnegative and the phase in the range pi pi if the magnitude is zero then so is the phase",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "polar",
        "normalized": "Complex a-\u003e(a,a)",
        "package": "yap",
        "partial": "",
        "signature": "Complex a-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Complex.html#v:realPart",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the real part of a complex number.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Complex",
        "fct-package": "yap",
        "fct-signature": "Complex a -\u003e a",
        "fct-source": "src/Data-YAP-Complex.html#realPart",
        "fct-type": "function",
        "title": "realPart"
      },
      "index": {
        "description": "Extracts the real part of complex number",
        "hierarchy": "Data YAP Complex",
        "module": "Data.YAP.Complex",
        "name": "realPart",
        "normalized": "Complex a-\u003ea",
        "package": "yap",
        "partial": "Part",
        "signature": "Complex a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Matrix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn example instance of the new classes: arbitrary-sized matrices,\n based on a haskell-cafe posting by Udo Stenzel on 22 Jun 2006.\n\u003c/p\u003e\u003cp\u003eBeware that the identity matrix is infinite.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.YAP.Matrix",
        "fct-package": "yap",
        "fct-signature": "module",
        "fct-source": "src/Data-YAP-Matrix.html",
        "fct-type": "module",
        "title": "Matrix"
      },
      "index": {
        "description": "An example instance of the new classes arbitrary-sized matrices based on haskell-cafe posting by Udo Stenzel on Jun Beware that the identity matrix is infinite",
        "hierarchy": "Data YAP Matrix",
        "module": "Data.YAP.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "yap",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Matrix.html#t:Matrix",
      "description": {
        "fct-module": "Data.YAP.Matrix",
        "fct-package": "yap",
        "fct-signature": "newtype",
        "fct-source": "src/Data-YAP-Matrix.html#Matrix",
        "fct-type": "newtype",
        "title": "Matrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data YAP Matrix",
        "module": "Data.YAP.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "yap",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Matrix.html#v:Matrix",
      "description": {
        "fct-descr": "\u003cp\u003elist of rows\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Matrix",
        "fct-package": "yap",
        "fct-signature": "Matrix [[a]]",
        "fct-source": "src/Data-YAP-Matrix.html#Matrix",
        "fct-type": "function",
        "title": "Matrix"
      },
      "index": {
        "description": "list of rows",
        "hierarchy": "Data YAP Matrix",
        "module": "Data.YAP.Matrix",
        "name": "Matrix",
        "normalized": "Matrix[[a]]",
        "package": "yap",
        "partial": "Matrix",
        "signature": "Matrix[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Matrix.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply a matrix by a vector.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Matrix",
        "fct-package": "yap",
        "fct-signature": "Matrix a -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-YAP-Matrix.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Multiply matrix by vector",
        "hierarchy": "Data YAP Matrix",
        "module": "Data.YAP.Matrix",
        "name": "apply",
        "normalized": "Matrix a-\u003eVector a-\u003eVector a",
        "package": "yap",
        "partial": "",
        "signature": "Matrix a-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn example instance of the new classes: polynomials.\n Some of these functions work with infinite polynomials,\n i.e. formal power series.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "module",
        "fct-source": "src/Data-YAP-Polynomial.html",
        "fct-type": "module",
        "title": "Polynomial"
      },
      "index": {
        "description": "An example instance of the new classes polynomials Some of these functions work with infinite polynomials i.e formal power series",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "Polynomial",
        "normalized": "",
        "package": "yap",
        "partial": "Polynomial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#t:Polynomial",
      "description": {
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "data",
        "fct-source": "src/Data-YAP-Polynomial.html#Polynomial",
        "fct-type": "data",
        "title": "Polynomial"
      },
      "index": {
        "description": "",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "Polynomial",
        "normalized": "",
        "package": "yap",
        "partial": "Polynomial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#v:approximations",
      "description": {
        "fct-descr": "\u003cp\u003eThe infinite list of evaluations of truncations of the polynomial\n or power series.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "Polynomial a -\u003e a -\u003e [a]",
        "fct-source": "src/Data-YAP-Polynomial.html#approximations",
        "fct-type": "function",
        "title": "approximations"
      },
      "index": {
        "description": "The infinite list of evaluations of truncations of the polynomial or power series",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "approximations",
        "normalized": "Polynomial a-\u003ea-\u003e[a]",
        "package": "yap",
        "partial": "",
        "signature": "Polynomial a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#v:coefficients",
      "description": {
        "fct-descr": "\u003cp\u003eThe coefficients of a finite polynomial, least significant first\n and with no trailing zeroes.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "Polynomial a -\u003e [a]",
        "fct-source": "src/Data-YAP-Polynomial.html#coefficients",
        "fct-type": "function",
        "title": "coefficients"
      },
      "index": {
        "description": "The coefficients of finite polynomial least significant first and with no trailing zeroes",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "coefficients",
        "normalized": "Polynomial a-\u003e[a]",
        "package": "yap",
        "partial": "",
        "signature": "Polynomial a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#v:compose",
      "description": {
        "fct-descr": "\u003cp\u003eComposition of polynomials:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecompose\u003c/a\u003e\u003c/code\u003e a b) = \u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e a . \u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e b\u003c/pre\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "Polynomial a -\u003e Polynomial a -\u003e Polynomial a",
        "fct-source": "src/Data-YAP-Polynomial.html#compose",
        "fct-type": "function",
        "title": "compose"
      },
      "index": {
        "description": "Composition of polynomials evaluate compose evaluate evaluate",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "compose",
        "normalized": "Polynomial a-\u003ePolynomial a-\u003ePolynomial a",
        "package": "yap",
        "partial": "",
        "signature": "Polynomial a-\u003ePolynomial a-\u003ePolynomial a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#v:degree",
      "description": {
        "fct-descr": "\u003cp\u003eThe degree of a finite polynomial.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edegree\u003c/a\u003e\u003c/code\u003e p = length (coefficients p)\u003c/pre\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "Polynomial a -\u003e Int",
        "fct-source": "src/Data-YAP-Polynomial.html#degree",
        "fct-type": "function",
        "title": "degree"
      },
      "index": {
        "description": "The degree of finite polynomial degree length coefficients",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "degree",
        "normalized": "Polynomial a-\u003eInt",
        "package": "yap",
        "partial": "",
        "signature": "Polynomial a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#v:differentiate",
      "description": {
        "fct-descr": "\u003cp\u003eSymbolic differentiation of polynomials.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "Polynomial a -\u003e Polynomial a",
        "fct-source": "src/Data-YAP-Polynomial.html#differentiate",
        "fct-type": "function",
        "title": "differentiate"
      },
      "index": {
        "description": "Symbolic differentiation of polynomials",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "differentiate",
        "normalized": "Polynomial a-\u003ePolynomial a",
        "package": "yap",
        "partial": "",
        "signature": "Polynomial a-\u003ePolynomial a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#v:evaluate",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a polynomial for a given value of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e a x = \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (*) (\u003ccode\u003e\u003ca\u003ecoefficients\u003c/a\u003e\u003c/code\u003e a) (\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e (*x) 1)\u003c/pre\u003e\u003cp\u003e(The implementation uses Horner's rule.)\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "Polynomial a -\u003e a -\u003e a",
        "fct-source": "src/Data-YAP-Polynomial.html#evaluate",
        "fct-type": "function",
        "title": "evaluate"
      },
      "index": {
        "description": "Evaluate polynomial for given value of evaluate zipWith coefficients iterate The implementation uses Horner rule",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "evaluate",
        "normalized": "Polynomial a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "Polynomial a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#v:integrate",
      "description": {
        "fct-descr": "\u003cp\u003eSymbolic integration of polynomials.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "Polynomial a -\u003e Polynomial a",
        "fct-source": "src/Data-YAP-Polynomial.html#integrate",
        "fct-type": "function",
        "title": "integrate"
      },
      "index": {
        "description": "Symbolic integration of polynomials",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "integrate",
        "normalized": "Polynomial a-\u003ePolynomial a",
        "package": "yap",
        "partial": "",
        "signature": "Polynomial a-\u003ePolynomial a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#v:polynomial",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a polynomial from a list of coefficients,\n least significant first.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "[a] -\u003e Polynomial a",
        "fct-source": "src/Data-YAP-Polynomial.html#polynomial",
        "fct-type": "function",
        "title": "polynomial"
      },
      "index": {
        "description": "Construct polynomial from list of coefficients least significant first",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "polynomial",
        "normalized": "[a]-\u003ePolynomial a",
        "package": "yap",
        "partial": "",
        "signature": "[a]-\u003ePolynomial a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Polynomial.html#v:pretty",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a polynomial, e.g.\n\u003c/p\u003e\u003cpre\u003epretty (polynomial [3, 4, 0, 1, 5]) \"x\" = \"5x^4 + x^3 + 4x + 3\"\u003c/pre\u003e",
        "fct-module": "Data.YAP.Polynomial",
        "fct-package": "yap",
        "fct-signature": "Polynomial a -\u003e String -\u003e String",
        "fct-source": "src/Data-YAP-Polynomial.html#pretty",
        "fct-type": "function",
        "title": "pretty"
      },
      "index": {
        "description": "Pretty-print polynomial e.g pretty polynomial",
        "hierarchy": "Data YAP Polynomial",
        "module": "Data.YAP.Polynomial",
        "name": "pretty",
        "normalized": "Polynomial a-\u003eString-\u003eString",
        "package": "yap",
        "partial": "",
        "signature": "Polynomial a-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Quantity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn example instance of the new classes: numeric quantities with unit types.\n You can only compare and add quantities that use the same units.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.YAP.Quantity",
        "fct-package": "yap",
        "fct-signature": "module",
        "fct-source": "src/Data-YAP-Quantity.html",
        "fct-type": "module",
        "title": "Quantity"
      },
      "index": {
        "description": "An example instance of the new classes numeric quantities with unit types You can only compare and add quantities that use the same units",
        "hierarchy": "Data YAP Quantity",
        "module": "Data.YAP.Quantity",
        "name": "Quantity",
        "normalized": "",
        "package": "yap",
        "partial": "Quantity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Quantity.html#t:Quantity",
      "description": {
        "fct-descr": "\u003cp\u003eQuantities of a numeric type \u003ccode\u003ea\u003c/code\u003e, in units encoded by the phantom\n type parameter \u003ccode\u003eu\u003c/code\u003e.\n For example, types for counting apples and oranges can be defined as:\n\u003c/p\u003e\u003cpre\u003e\n data Apple\n data Orange\n type Apples = Quantity Apple Int\n type Oranges = Quantity Orange Int\n\u003c/pre\u003e\u003cp\u003eYou can't compare \u003ccode\u003eApples\u003c/code\u003e with \u003ccode\u003eOranges\u003c/code\u003e (or add them).\n You can add \u003ccode\u003eApples\u003c/code\u003e to \u003ccode\u003eApples\u003c/code\u003e, but not multiply them.\n\u003c/p\u003e\u003cp\u003eA full dimensional system keeping track of units while modelling\n multiplication and division will require type-level functions.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Quantity",
        "fct-package": "yap",
        "fct-signature": "newtype",
        "fct-source": "src/Data-YAP-Quantity.html#Quantity",
        "fct-type": "newtype",
        "title": "Quantity"
      },
      "index": {
        "description": "Quantities of numeric type in units encoded by the phantom type parameter For example types for counting apples and oranges can be defined as data Apple data Orange type Apples Quantity Apple Int type Oranges Quantity Orange Int You can compare Apples with Oranges or add them You can add Apples to Apples but not multiply them full dimensional system keeping track of units while modelling multiplication and division will require type-level functions",
        "hierarchy": "Data YAP Quantity",
        "module": "Data.YAP.Quantity",
        "name": "Quantity",
        "normalized": "",
        "package": "yap",
        "partial": "Quantity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Quantity.html#v:Quantity",
      "description": {
        "fct-module": "Data.YAP.Quantity",
        "fct-package": "yap",
        "fct-signature": "Quantity a",
        "fct-source": "src/Data-YAP-Quantity.html#Quantity",
        "fct-type": "function",
        "title": "Quantity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data YAP Quantity",
        "module": "Data.YAP.Quantity",
        "name": "Quantity",
        "normalized": "",
        "package": "yap",
        "partial": "Quantity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Ratio.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard functions on rational numbers.\n\u003c/p\u003e\u003cp\u003eThis version uses the same type as \u003ca\u003eData.Ratio\u003c/a\u003e, but with components\n generalized from \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eEuclideanDomain\u003c/code\u003e.  However using the\n same type means we have the old, more constrained, instances of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.YAP.Ratio",
        "fct-package": "yap",
        "fct-signature": "module",
        "fct-source": "src/Data-YAP-Ratio.html",
        "fct-type": "module",
        "title": "Ratio"
      },
      "index": {
        "description": "Standard functions on rational numbers This version uses the same type as Data.Ratio but with components generalized from Integral to EuclideanDomain However using the same type means we have the old more constrained instances of Ord Show and Read",
        "hierarchy": "Data YAP Ratio",
        "module": "Data.YAP.Ratio",
        "name": "Ratio",
        "normalized": "",
        "package": "yap",
        "partial": "Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Ratio.html#t:Ratio",
      "description": {
        "fct-descr": "\u003cp\u003eRational numbers, with numerator and denominator of some \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Ratio",
        "fct-package": "yap",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Ratio"
      },
      "index": {
        "description": "Rational numbers with numerator and denominator of some Integral type",
        "hierarchy": "Data YAP Ratio",
        "module": "Data.YAP.Ratio",
        "name": "Ratio",
        "normalized": "",
        "package": "yap",
        "partial": "Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Ratio.html#t:Rational",
      "description": {
        "fct-descr": "\u003cp\u003eArbitrary-precision rational numbers, represented as a ratio of\n two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e values.  A rational number may be constructed using\n the \u003ccode\u003e\u003ca\u003e%\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Ratio",
        "fct-package": "yap",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Rational"
      },
      "index": {
        "description": "Arbitrary-precision rational numbers represented as ratio of two Integer values rational number may be constructed using the operator",
        "hierarchy": "Data YAP Ratio",
        "module": "Data.YAP.Ratio",
        "name": "Rational",
        "normalized": "",
        "package": "yap",
        "partial": "Rational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Ratio.html#v:-37-",
      "description": {
        "fct-descr": "\u003cp\u003eForms the ratio of two values in a Euclidean domain (e.g. \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Ratio",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e Ratio a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#%25",
        "fct-type": "function",
        "title": "(%)"
      },
      "index": {
        "description": "Forms the ratio of two values in Euclidean domain e.g Integer",
        "hierarchy": "Data YAP Ratio",
        "module": "Data.YAP.Ratio",
        "name": "(%) %",
        "normalized": "a-\u003ea-\u003eRatio a",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003eRatio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Ratio.html#v:approxRational",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapproxRational\u003c/a\u003e\u003c/code\u003e, applied to two real fractional numbers \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003eepsilon\u003c/code\u003e,\n returns the simplest rational number within \u003ccode\u003eepsilon\u003c/code\u003e of \u003ccode\u003ex\u003c/code\u003e.\n A rational number \u003ccode\u003ey\u003c/code\u003e is said to be \u003cem\u003esimpler\u003c/em\u003e than another \u003ccode\u003ey'\u003c/code\u003e if\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enumerator\u003c/a\u003e\u003c/code\u003e y) \u003c= \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enumerator\u003c/a\u003e\u003c/code\u003e y')\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003edenominator\u003c/a\u003e\u003c/code\u003e y \u003c= \u003ccode\u003e\u003ca\u003edenominator\u003c/a\u003e\u003c/code\u003e y'\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAny real interval contains a unique simplest rational;\n in particular, note that \u003ccode\u003e0/1\u003c/code\u003e is the simplest rational of all.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Ratio",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e Rational",
        "fct-source": "src/Data-YAP-Ratio.html#approxRational",
        "fct-type": "function",
        "title": "approxRational"
      },
      "index": {
        "description": "approxRational applied to two real fractional numbers and epsilon returns the simplest rational number within epsilon of rational number is said to be simpler than another if abs numerator abs numerator and denominator denominator Any real interval contains unique simplest rational in particular note that is the simplest rational of all",
        "hierarchy": "Data YAP Ratio",
        "module": "Data.YAP.Ratio",
        "name": "approxRational",
        "normalized": "a-\u003ea-\u003eRational",
        "package": "yap",
        "partial": "Rational",
        "signature": "a-\u003ea-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Ratio.html#v:denominator",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the denominator of the ratio in reduced form:\n the numerator and denominator have no common factor and the denominator\n is positive.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Ratio",
        "fct-package": "yap",
        "fct-signature": "Ratio a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#denominator",
        "fct-type": "function",
        "title": "denominator"
      },
      "index": {
        "description": "Extract the denominator of the ratio in reduced form the numerator and denominator have no common factor and the denominator is positive",
        "hierarchy": "Data YAP Ratio",
        "module": "Data.YAP.Ratio",
        "name": "denominator",
        "normalized": "Ratio a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "Ratio a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Ratio.html#v:numerator",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the numerator of the ratio in reduced form:\n the numerator and denominator have no common factor and the denominator\n is positive.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Ratio",
        "fct-package": "yap",
        "fct-signature": "Ratio a -\u003e a",
        "fct-source": "src/Data-YAP-Algebra-Internal.html#numerator",
        "fct-type": "function",
        "title": "numerator"
      },
      "index": {
        "description": "Extract the numerator of the ratio in reduced form the numerator and denominator have no common factor and the denominator is positive",
        "hierarchy": "Data YAP Ratio",
        "module": "Data.YAP.Ratio",
        "name": "numerator",
        "normalized": "Ratio a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "Ratio a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn example instance of the new classes: vectors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.YAP.Vector",
        "fct-package": "yap",
        "fct-signature": "module",
        "fct-source": "src/Data-YAP-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "An example instance of the new classes vectors",
        "hierarchy": "Data YAP Vector",
        "module": "Data.YAP.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "yap",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Vector.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eSimple vector type.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Vector",
        "fct-package": "yap",
        "fct-signature": "newtype",
        "fct-source": "src/Data-YAP-Vector.html#Vector",
        "fct-type": "newtype",
        "title": "Vector"
      },
      "index": {
        "description": "Simple vector type",
        "hierarchy": "Data YAP Vector",
        "module": "Data.YAP.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "yap",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Vector.html#v:Vector",
      "description": {
        "fct-module": "Data.YAP.Vector",
        "fct-package": "yap",
        "fct-signature": "Vector [a]",
        "fct-source": "src/Data-YAP-Vector.html#Vector",
        "fct-type": "function",
        "title": "Vector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data YAP Vector",
        "module": "Data.YAP.Vector",
        "name": "Vector",
        "normalized": "Vector[a]",
        "package": "yap",
        "partial": "Vector",
        "signature": "Vector[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Vector.html#v:dot",
      "description": {
        "fct-descr": "\u003cp\u003eDot product of two vectors.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Vector",
        "fct-package": "yap",
        "fct-signature": "Vector a -\u003e Vector a -\u003e a",
        "fct-source": "src/Data-YAP-Vector.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "Dot product of two vectors",
        "hierarchy": "Data YAP Vector",
        "module": "Data.YAP.Vector",
        "name": "dot",
        "normalized": "Vector a-\u003eVector a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "Vector a-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Data-YAP-Vector.html#v:norm",
      "description": {
        "fct-descr": "\u003cp\u003eNorm of a vector.\n\u003c/p\u003e",
        "fct-module": "Data.YAP.Vector",
        "fct-package": "yap",
        "fct-signature": "Vector a -\u003e a",
        "fct-source": "src/Data-YAP-Vector.html#norm",
        "fct-type": "function",
        "title": "norm"
      },
      "index": {
        "description": "Norm of vector",
        "hierarchy": "Data YAP Vector",
        "module": "Data.YAP.Vector",
        "name": "norm",
        "normalized": "Vector a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "Vector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA replacement for the standard Prelude, aiming to preserve\n compatibility for clients as far as possible.\n To use this module, you'll need to turn on \u003ccode\u003eRebindableSyntax\u003c/code\u003e, which\n also turns off the implicit import of the standard \u003ccode\u003ePrelude\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor greater backwards compatibility, this module hides the names of\n the classes \u003ccode\u003eAbelianGroup\u003c/code\u003e, \u003ccode\u003eRing\u003c/code\u003e, \u003ccode\u003eField\u003c/code\u003e and \u003ccode\u003eEuclideanDomain\u003c/code\u003e,\n and their new methods \u003ccode\u003ezero\u003c/code\u003e, \u003ccode\u003eunit\u003c/code\u003e and \u003ccode\u003eassociate\u003c/code\u003e.  To use\n those names, e.g. to define instances, you'll also need to import\n \u003ca\u003eData.YAP.Algebra\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "module",
        "fct-source": "src/Prelude-YAP.html",
        "fct-type": "module",
        "title": "YAP"
      },
      "index": {
        "description": "replacement for the standard Prelude aiming to preserve compatibility for clients as far as possible To use this module you ll need to turn on RebindableSyntax which also turns off the implicit import of the standard Prelude For greater backwards compatibility this module hides the names of the classes AbelianGroup Ring Field and EuclideanDomain and their new methods zero unit and associate To use those names e.g to define instances you ll also need to import Data.YAP.Algebra",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "YAP",
        "normalized": "",
        "package": "yap",
        "partial": "YAP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#t:Floating",
      "description": {
        "fct-descr": "\u003cp\u003eunchanged from Haskell 98\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Prelude-YAP-Internal.html#Floating",
        "fct-type": "class",
        "title": "Floating"
      },
      "index": {
        "description": "unchanged from Haskell",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "Floating",
        "normalized": "",
        "package": "yap",
        "partial": "Floating",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#t:Fractional",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell 98 compatibility class\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Prelude-YAP-Internal.html#Fractional",
        "fct-type": "class",
        "title": "Fractional"
      },
      "index": {
        "description": "Haskell compatibility class",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "Fractional",
        "normalized": "",
        "package": "yap",
        "partial": "Fractional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#t:Integral",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral numbers, supporting integer division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003etoInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Prelude-YAP-Internal.html#Integral",
        "fct-type": "class",
        "title": "Integral"
      },
      "index": {
        "description": "Integral numbers supporting integer division Minimal complete definition toInteger",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "Integral",
        "normalized": "",
        "package": "yap",
        "partial": "Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#t:Num",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell 98 compatibility class\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Prelude-YAP-Internal.html#Num",
        "fct-type": "class",
        "title": "Num"
      },
      "index": {
        "description": "Haskell compatibility class",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "Num",
        "normalized": "",
        "package": "yap",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#t:Real",
      "description": {
        "fct-descr": "\u003cp\u003eunchanged from Haskell 98\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Prelude-YAP-Internal.html#Real",
        "fct-type": "class",
        "title": "Real"
      },
      "index": {
        "description": "unchanged from Haskell",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "Real",
        "normalized": "",
        "package": "yap",
        "partial": "Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#t:RealFloat",
      "description": {
        "fct-descr": "\u003cp\u003eunchanged from Haskell 98\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Prelude-YAP-Internal.html#RealFloat",
        "fct-type": "class",
        "title": "RealFloat"
      },
      "index": {
        "description": "unchanged from Haskell",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "RealFloat",
        "normalized": "",
        "package": "yap",
        "partial": "Real Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#t:RealFrac",
      "description": {
        "fct-descr": "\u003cp\u003eunchanged from Haskell 98\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "class",
        "fct-source": "src/Prelude-YAP-Internal.html#RealFrac",
        "fct-type": "class",
        "title": "RealFrac"
      },
      "index": {
        "description": "unchanged from Haskell",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "RealFrac",
        "normalized": "",
        "package": "yap",
        "partial": "Real Frac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:-42--42-",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#%2A%2A",
        "fct-type": "method",
        "title": "(**)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "(**) **",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:-94-",
      "description": {
        "fct-descr": "\u003cp\u003eraise a number to a non-negative integral power\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#%5E",
        "fct-type": "function",
        "title": "(^)"
      },
      "index": {
        "description": "raise number to non-negative integral power",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "(^) ^",
        "normalized": "a-\u003eb-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:-94--94-",
      "description": {
        "fct-descr": "\u003cp\u003eraise a number to an integral power\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#%5E%5E",
        "fct-type": "function",
        "title": "(^^)"
      },
      "index": {
        "description": "raise number to an integral power",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "(^^) ^^",
        "normalized": "a-\u003eb-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:abs",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute value.\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#abs",
        "fct-type": "method",
        "title": "abs"
      },
      "index": {
        "description": "Absolute value",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "abs",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:asin",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#asin",
        "fct-type": "method",
        "title": "asin"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "asin",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:asinh",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#asinh",
        "fct-type": "method",
        "title": "asinh"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "asinh",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:atan2",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#atan2",
        "fct-type": "method",
        "title": "atan2"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "atan2",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:ceiling",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Prelude-YAP-Internal.html#ceiling",
        "fct-type": "method",
        "title": "ceiling"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "ceiling",
        "normalized": "a-\u003eb",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:decodeFloat",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e (Integer, Int)",
        "fct-source": "src/Prelude-YAP-Internal.html#decodeFloat",
        "fct-type": "method",
        "title": "decodeFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "decodeFloat",
        "normalized": "a-\u003e(Integer,Int)",
        "package": "yap",
        "partial": "Float",
        "signature": "a-\u003e(Integer,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:encodeFloat",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "Integer -\u003e Int -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#encodeFloat",
        "fct-type": "method",
        "title": "encodeFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "encodeFloat",
        "normalized": "Integer-\u003eInt-\u003ea",
        "package": "yap",
        "partial": "Float",
        "signature": "Integer-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:even",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Prelude-YAP-Internal.html#even",
        "fct-type": "function",
        "title": "even"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "even",
        "normalized": "a-\u003eBool",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:exp",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#exp",
        "fct-type": "method",
        "title": "exp"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "exp",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:exponent",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Prelude-YAP-Internal.html#exponent",
        "fct-type": "method",
        "title": "exponent"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "exponent",
        "normalized": "a-\u003eInt",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:floatDigits",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Prelude-YAP-Internal.html#floatDigits",
        "fct-type": "method",
        "title": "floatDigits"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "floatDigits",
        "normalized": "a-\u003eInt",
        "package": "yap",
        "partial": "Digits",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:floatRadix",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e Integer",
        "fct-source": "src/Prelude-YAP-Internal.html#floatRadix",
        "fct-type": "method",
        "title": "floatRadix"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "floatRadix",
        "normalized": "a-\u003eInteger",
        "package": "yap",
        "partial": "Radix",
        "signature": "a-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:floatRange",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e (Int, Int)",
        "fct-source": "src/Prelude-YAP-Internal.html#floatRange",
        "fct-type": "method",
        "title": "floatRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "floatRange",
        "normalized": "a-\u003e(Int,Int)",
        "package": "yap",
        "partial": "Range",
        "signature": "a-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:fromIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral conversion from integral types, via the \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Prelude-YAP-Internal.html#fromIntegral",
        "fct-type": "function",
        "title": "fromIntegral"
      },
      "index": {
        "description": "General conversion from integral types via the Integer type",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "fromIntegral",
        "normalized": "a-\u003eb",
        "package": "yap",
        "partial": "Integral",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:fromRational",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA floating point numeric literal represents the application of\n the function \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e to the appropriate value of type\n \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, so such literals have type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "Rational -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#fromRational",
        "fct-type": "method",
        "title": "fromRational"
      },
      "index": {
        "description": "Convert from Rational floating point numeric literal represents the application of the function fromRational to the appropriate value of type Rational so such literals have type Field",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "fromRational",
        "normalized": "Rational-\u003ea",
        "package": "yap",
        "partial": "Rational",
        "signature": "Rational-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:isNaN",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Prelude-YAP-Internal.html#isNaN",
        "fct-type": "method",
        "title": "isNaN"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "isNaN",
        "normalized": "a-\u003eBool",
        "package": "yap",
        "partial": "Na",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:odd",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Prelude-YAP-Internal.html#even",
        "fct-type": "function",
        "title": "odd"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "odd",
        "normalized": "a-\u003eBool",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:pi",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a",
        "fct-source": "src/Prelude-YAP-Internal.html#pi",
        "fct-type": "method",
        "title": "pi"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "pi",
        "normalized": "",
        "package": "yap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:properFraction",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e (b, a)",
        "fct-source": "src/Prelude-YAP-Internal.html#properFraction",
        "fct-type": "method",
        "title": "properFraction"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "properFraction",
        "normalized": "a-\u003e(b,a)",
        "package": "yap",
        "partial": "Fraction",
        "signature": "a-\u003e(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:quot",
      "description": {
        "fct-descr": "\u003cp\u003eInteger division truncated toward zero\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#quot",
        "fct-type": "method",
        "title": "quot"
      },
      "index": {
        "description": "Integer division truncated toward zero",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "quot",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:quotRem",
      "description": {
        "fct-descr": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e (a, a)",
        "fct-source": "src/Prelude-YAP-Internal.html#quotRem",
        "fct-type": "method",
        "title": "quotRem"
      },
      "index": {
        "description": "simultaneous quot and rem",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "quotRem",
        "normalized": "a-\u003ea-\u003e(a,a)",
        "package": "yap",
        "partial": "Rem",
        "signature": "a-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:realToFrac",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral conversion to fields, via the \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Prelude-YAP-Internal.html#realToFrac",
        "fct-type": "function",
        "title": "realToFrac"
      },
      "index": {
        "description": "General conversion to fields via the Rational type",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "realToFrac",
        "normalized": "a-\u003eb",
        "package": "yap",
        "partial": "To Frac",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:rem",
      "description": {
        "fct-descr": "\u003cp\u003eInteger remainder, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `quot` y)*y + (x `rem` y) == x\n\u003c/pre\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#rem",
        "fct-type": "method",
        "title": "rem"
      },
      "index": {
        "description": "Integer remainder satisfying quot rem",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "rem",
        "normalized": "a-\u003ea-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:scaleFloat",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#scaleFloat",
        "fct-type": "method",
        "title": "scaleFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "scaleFloat",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "yap",
        "partial": "Float",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:significand",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#significand",
        "fct-type": "method",
        "title": "significand"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "significand",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:signum",
      "description": {
        "fct-descr": "\u003cp\u003eSign of a number.\n The functions \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e should satisfy the law:\n\u003c/p\u003e\u003cpre\u003e abs x * signum x == x\n\u003c/pre\u003e\u003cp\u003eFor real numbers, the \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e is either \u003ccode\u003e-1\u003c/code\u003e (negative), \u003ccode\u003e0\u003c/code\u003e (zero)\n or \u003ccode\u003e1\u003c/code\u003e (positive).\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#signum",
        "fct-type": "method",
        "title": "signum"
      },
      "index": {
        "description": "Sign of number The functions abs and signum should satisfy the law abs signum For real numbers the signum is either negative zero or positive",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "signum",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:sin",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#sin",
        "fct-type": "method",
        "title": "sin"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "sin",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:sinh",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude-YAP-Internal.html#sinh",
        "fct-type": "method",
        "title": "sinh"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "sinh",
        "normalized": "a-\u003ea",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:toInteger",
      "description": {
        "fct-descr": "\u003cp\u003eConversion to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e Integer",
        "fct-source": "src/Prelude-YAP-Internal.html#toInteger",
        "fct-type": "method",
        "title": "toInteger"
      },
      "index": {
        "description": "Conversion to Integer",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "toInteger",
        "normalized": "a-\u003eInteger",
        "package": "yap",
        "partial": "Integer",
        "signature": "a-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:toRational",
      "description": {
        "fct-descr": "\u003cp\u003eThe rational equivalent of its real argument with full precision\n\u003c/p\u003e",
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e Rational",
        "fct-source": "src/Prelude-YAP-Internal.html#toRational",
        "fct-type": "method",
        "title": "toRational"
      },
      "index": {
        "description": "The rational equivalent of its real argument with full precision",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "toRational",
        "normalized": "a-\u003eRational",
        "package": "yap",
        "partial": "Rational",
        "signature": "a-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yap/docs/Prelude-YAP.html#v:truncate",
      "description": {
        "fct-module": "Prelude.YAP",
        "fct-package": "yap",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Prelude-YAP-Internal.html#truncate",
        "fct-type": "method",
        "title": "truncate"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude YAP",
        "module": "Prelude.YAP",
        "name": "truncate",
        "normalized": "a-\u003eb",
        "package": "yap",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  }
]