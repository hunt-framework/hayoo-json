[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#",
      "description": {
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "module",
        "fct-source": "src/Math-ContinuedFraction.html",
        "fct-type": "module",
        "title": "ContinuedFraction"
      },
      "index": {
        "description": "",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "ContinuedFraction",
        "normalized": "",
        "package": "continued-fractions",
        "partial": "Continued Fraction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#t:CF",
      "description": {
        "fct-descr": "\u003cp\u003eA continued fraction.  Constructed by \u003ccode\u003e\u003ca\u003ecf\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egcf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "data",
        "fct-source": "src/Math-ContinuedFraction.html#CF",
        "fct-type": "data",
        "title": "CF"
      },
      "index": {
        "description": "continued fraction Constructed by cf or gcf",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "CF",
        "normalized": "",
        "package": "continued-fractions",
        "partial": "CF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:asCF",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the partial denominators of a \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e, normalizing it if necessary so \n that all the partial numerators are 1.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "CF a -\u003e (a, [a])",
        "fct-source": "src/Math-ContinuedFraction.html#asCF",
        "fct-type": "function",
        "title": "asCF"
      },
      "index": {
        "description": "Extract the partial denominators of CF normalizing it if necessary so that all the partial numerators are",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "asCF",
        "normalized": "CF a-\u003e(a,[a])",
        "package": "continued-fractions",
        "partial": "CF",
        "signature": "CF a-\u003e(a,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:asGCF",
      "description": {
        "fct-descr": "\u003cp\u003eExtract all the partial numerators and partial denominators of a \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "CF a -\u003e (a, [(a, a)])",
        "fct-source": "src/Math-ContinuedFraction.html#asGCF",
        "fct-type": "function",
        "title": "asGCF"
      },
      "index": {
        "description": "Extract all the partial numerators and partial denominators of CF",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "asGCF",
        "normalized": "CF a-\u003e(a,[(a,a)])",
        "package": "continued-fractions",
        "partial": "GCF",
        "signature": "CF a-\u003e(a,[(a,a)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:cf",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a continued fraction from its first term and the \n partial denominators in its canonical form, which is the form \n where all the partial numerators are 1.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecf a [b,c,d]\u003c/code\u003e corresponds to \u003ccode\u003ea + (b / (1 + (c / (1 + d))))\u003c/code\u003e,\n or to \u003ccode\u003eGCF a [(1,b),(1,c),(1,d)]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "a -\u003e [a] -\u003e CF a",
        "fct-source": "src/Math-ContinuedFraction.html#cf",
        "fct-type": "function",
        "title": "cf"
      },
      "index": {
        "description": "Construct continued fraction from its first term and the partial denominators in its canonical form which is the form where all the partial numerators are cf corresponds to or to GCF",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "cf",
        "normalized": "a-\u003e[a]-\u003eCF a",
        "package": "continued-fractions",
        "partial": "",
        "signature": "a-\u003e[a]-\u003eCF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:convergents",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the convergents of a continued fraction using the fundamental\n recurrence formula:\n\u003c/p\u003e\u003cp\u003eA0 = b0, B0 = 1\n\u003c/p\u003e\u003cp\u003eA1 = b1b0 + a1,  B1 = b1\n\u003c/p\u003e\u003cp\u003eA{n+1} = b{n+1}An + a{n+1}A{n-1}\n\u003c/p\u003e\u003cp\u003eB{n+1} = b{n+1}Bn + a{n+1}B{n-1}\n\u003c/p\u003e\u003cp\u003eThe convergents are then Xn = An/Bn\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "CF a -\u003e [a]",
        "fct-source": "src/Math-ContinuedFraction.html#convergents",
        "fct-type": "function",
        "title": "convergents"
      },
      "index": {
        "description": "Evaluate the convergents of continued fraction using the fundamental recurrence formula A0 b0 B0 A1 b1b0 a1 B1 b1 An n-1 Bn n-1 The convergents are then Xn An Bn",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "convergents",
        "normalized": "CF a-\u003e[a]",
        "package": "continued-fractions",
        "partial": "",
        "signature": "CF a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:equiv",
      "description": {
        "fct-descr": "\u003cp\u003eApply an equivalence transformation, multiplying each partial denominator \n with the corresponding element of the supplied list and transforming \n subsequent partial numerators and denominators as necessary.  If the list\n is too short, the rest of the \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e will be unscaled.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "[a] -\u003e CF a -\u003e CF a",
        "fct-source": "src/Math-ContinuedFraction.html#equiv",
        "fct-type": "function",
        "title": "equiv"
      },
      "index": {
        "description": "Apply an equivalence transformation multiplying each partial denominator with the corresponding element of the supplied list and transforming subsequent partial numerators and denominators as necessary If the list is too short the rest of the CF will be unscaled",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "equiv",
        "normalized": "[a]-\u003eCF a-\u003eCF a",
        "package": "continued-fractions",
        "partial": "",
        "signature": "[a]-\u003eCF a-\u003eCF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:evenCF",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the even part of a \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e (that is, a new \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e whose convergents are\n the even-indexed convergents of the original).\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "CF a -\u003e CF a",
        "fct-source": "src/Math-ContinuedFraction.html#evenCF",
        "fct-type": "function",
        "title": "evenCF"
      },
      "index": {
        "description": "Computes the even part of CF that is new CF whose convergents are the even-indexed convergents of the original",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "evenCF",
        "normalized": "CF a-\u003eCF a",
        "package": "continued-fractions",
        "partial": "CF",
        "signature": "CF a-\u003eCF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:gcf",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a continued fraction from its first term, its partial \n numerators and its partial denominators.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003egcf b0 [(a1,b1), (a2,b2), (a3,b3)]\u003c/code\u003e corresponds to\n \u003ccode\u003eb0 + (a1 / (b1 + (a2 / (b2 + (a3 / b3)))))\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "a -\u003e [(a, a)] -\u003e CF a",
        "fct-source": "src/Math-ContinuedFraction.html#gcf",
        "fct-type": "function",
        "title": "gcf"
      },
      "index": {
        "description": "Construct continued fraction from its first term its partial numerators and its partial denominators gcf b0 a1 b1 a2 b2 a3 b3 corresponds to b0 a1 b1 a2 b2 a3 b3",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "gcf",
        "normalized": "a-\u003e[(a,a)]-\u003eCF a",
        "package": "continued-fractions",
        "partial": "",
        "signature": "a-\u003e[(a,a)]-\u003eCF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:lentz",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the convergents of a continued fraction using Lentz's method.\n Only valid if the denominators in the following recurrence never go to\n zero.  If this method blows up, try \u003ccode\u003e\u003ca\u003emodifiedLentz\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eC1 = b1 + a1 / b0\n\u003c/p\u003e\u003cp\u003eD1 = 1/b1\n\u003c/p\u003e\u003cp\u003eC{n} = b{n} + a{n} / C{n-1}\n\u003c/p\u003e\u003cp\u003eD{n} = 1 / (b{n} + a{n} * D{n-1})\n\u003c/p\u003e\u003cp\u003eThe convergents are given by \u003ccode\u003escanl (*) b0 (zipWith (*) cs ds)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "CF a -\u003e [a]",
        "fct-source": "src/Math-ContinuedFraction.html#lentz",
        "fct-type": "function",
        "title": "lentz"
      },
      "index": {
        "description": "Evaluate the convergents of continued fraction using Lentz method Only valid if the denominators in the following recurrence never go to zero If this method blows up try modifiedLentz C1 b1 a1 b0 D1 b1 n-1 n-1 The convergents are given by scanl b0 zipWith cs ds",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "lentz",
        "normalized": "CF a-\u003e[a]",
        "package": "continued-fractions",
        "partial": "",
        "signature": "CF a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:lentzWith",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the convergents of a continued fraction using Lentz's method,\n mapping the terms in the final product to a new group before performing\n the final multiplications.  A useful group, for example, would be logarithms\n under addition.  In \u003ccode\u003elentzWith f op inv\u003c/code\u003e, the arguments are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ef\u003c/code\u003e, a group homomorphism (eg, \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e) from {\u003ccode\u003ea\u003c/code\u003e,(*),\u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e} to the group\n   in which you want to perform the multiplications.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eop\u003c/code\u003e, the group operation (eg., (+)).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003einv\u003c/code\u003e, the group inverse (eg., \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elentz\u003c/a\u003e\u003c/code\u003e function, for example, is given by the identity homomorphism:\n \u003ccode\u003elentz\u003c/code\u003e = \u003ccode\u003elentzWith id (*) recip\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe original motivation for this function is to allow computation of \n the natural log of very large numbers that would overflow with the naive\n implementation in \u003ccode\u003e\u003ca\u003elentz\u003c/a\u003e\u003c/code\u003e.  In this case, the arguments would be \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e, (+),\n and \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e, respectively.\n\u003c/p\u003e\u003cp\u003eIn cases where terms of the product can be negative (i.e., the sequence of\n convergents contains negative values), the following definitions could \n be used instead:\n\u003c/p\u003e\u003cpre\u003e signLog x = (signum x, log (abs x))\n addSignLog (xS,xL) (yS,yL) = (xS*yS, xL+yL)\n negateSignLog (s,l) = (s, negate l)\n\u003c/pre\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e b -\u003e b) -\u003e (b -\u003e b) -\u003e CF a -\u003e [b]",
        "fct-source": "src/Math-ContinuedFraction.html#lentzWith",
        "fct-type": "function",
        "title": "lentzWith"
      },
      "index": {
        "description": "Evaluate the convergents of continued fraction using Lentz method mapping the terms in the final product to new group before performing the final multiplications useful group for example would be logarithms under addition In lentzWith op inv the arguments are group homomorphism eg log from recip to the group in which you want to perform the multiplications op the group operation eg inv the group inverse eg negate The lentz function for example is given by the identity homomorphism lentz lentzWith id recip The original motivation for this function is to allow computation of the natural log of very large numbers that would overflow with the naive implementation in lentz In this case the arguments would be log and negate respectively In cases where terms of the product can be negative i.e the sequence of convergents contains negative values the following definitions could be used instead signLog signum log abs addSignLog xS xL yS yL xS yS xL yL negateSignLog negate",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "lentzWith",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(b-\u003eb)-\u003eCF a-\u003e[b]",
        "package": "continued-fractions",
        "partial": "With",
        "signature": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(b-\u003eb)-\u003eCF a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:modifiedLentz",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the convergents of a continued fraction using Lentz's method,\n (see \u003ccode\u003e\u003ca\u003elentz\u003c/a\u003e\u003c/code\u003e) with the additional rule that if a denominator ever goes\n to zero, it will be replaced by a (very small) number of your choosing,\n typically 1e-30 or so (this modification was proposed by Thompson and \n Barnett).  \n\u003c/p\u003e\u003cp\u003eAdditionally splits the resulting list of convergents into sublists, \n starting a new list every time the 'modification' is invoked.  \n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "a -\u003e CF a -\u003e [[a]]",
        "fct-source": "src/Math-ContinuedFraction.html#modifiedLentz",
        "fct-type": "function",
        "title": "modifiedLentz"
      },
      "index": {
        "description": "Evaluate the convergents of continued fraction using Lentz method see lentz with the additional rule that if denominator ever goes to zero it will be replaced by very small number of your choosing typically e-30 or so this modification was proposed by Thompson and Barnett Additionally splits the resulting list of convergents into sublists starting new list every time the modification is invoked",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "modifiedLentz",
        "normalized": "a-\u003eCF a-\u003e[[a]]",
        "package": "continued-fractions",
        "partial": "Lentz",
        "signature": "a-\u003eCF a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:modifiedLentzWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodifiedLentz\u003c/a\u003e\u003c/code\u003e with a group homomorphism (see \u003ccode\u003e\u003ca\u003elentzWith\u003c/a\u003e\u003c/code\u003e, it bears the\n same relationship to \u003ccode\u003e\u003ca\u003elentz\u003c/a\u003e\u003c/code\u003e as this function does to \u003ccode\u003e\u003ca\u003emodifiedLentz\u003c/a\u003e\u003c/code\u003e,\n and solves the same problems).  Alternatively, \u003ccode\u003e\u003ca\u003elentzWith\u003c/a\u003e\u003c/code\u003e with the same\n modification to the recurrence as \u003ccode\u003e\u003ca\u003emodifiedLentz\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e b -\u003e b) -\u003e (b -\u003e b) -\u003e a -\u003e CF a -\u003e [[b]]",
        "fct-source": "src/Math-ContinuedFraction.html#modifiedLentzWith",
        "fct-type": "function",
        "title": "modifiedLentzWith"
      },
      "index": {
        "description": "modifiedLentz with group homomorphism see lentzWith it bears the same relationship to lentz as this function does to modifiedLentz and solves the same problems Alternatively lentzWith with the same modification to the recurrence as modifiedLentz",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "modifiedLentzWith",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(b-\u003eb)-\u003ea-\u003eCF a-\u003e[[b]]",
        "package": "continued-fractions",
        "partial": "Lentz With",
        "signature": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(b-\u003eb)-\u003ea-\u003eCF a-\u003e[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:oddCF",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the odd part of a \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e (that is, a new \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e whose convergents are\n the odd-indexed convergents of the original).\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "CF a -\u003e CF a",
        "fct-source": "src/Math-ContinuedFraction.html#oddCF",
        "fct-type": "function",
        "title": "oddCF"
      },
      "index": {
        "description": "Computes the odd part of CF that is new CF whose convergents are the odd-indexed convergents of the original",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "oddCF",
        "normalized": "CF a-\u003eCF a",
        "package": "continued-fractions",
        "partial": "CF",
        "signature": "CF a-\u003eCF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:partitionCF",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the even and odd parts, respectively, of a \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e.  These are new\n \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003es that have the even-indexed and odd-indexed convergents of the \n original, respectively.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "CF a -\u003e (CF a, CF a)",
        "fct-source": "src/Math-ContinuedFraction.html#partitionCF",
        "fct-type": "function",
        "title": "partitionCF"
      },
      "index": {
        "description": "Computes the even and odd parts respectively of CF These are new CF that have the even-indexed and odd-indexed convergents of the original respectively",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "partitionCF",
        "normalized": "CF a-\u003e(CF a,CF a)",
        "package": "continued-fractions",
        "partial": "CF",
        "signature": "CF a-\u003e(CF a,CF a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:setDenominators",
      "description": {
        "fct-descr": "\u003cp\u003eApply an equivalence transformation that sets the partial denominators \n of a \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e to the specfied values.  If the input list is too short, the \n rest of the \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e will be unscaled.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "[a] -\u003e CF a -\u003e CF a",
        "fct-source": "src/Math-ContinuedFraction.html#setDenominators",
        "fct-type": "function",
        "title": "setDenominators"
      },
      "index": {
        "description": "Apply an equivalence transformation that sets the partial denominators of CF to the specfied values If the input list is too short the rest of the CF will be unscaled",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "setDenominators",
        "normalized": "[a]-\u003eCF a-\u003eCF a",
        "package": "continued-fractions",
        "partial": "Denominators",
        "signature": "[a]-\u003eCF a-\u003eCF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:setNumerators",
      "description": {
        "fct-descr": "\u003cp\u003eApply an equivalence transformation that sets the partial numerators \n of a \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e to the specfied values.  If the input list is too short, the \n rest of the \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e will be unscaled.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "[a] -\u003e CF a -\u003e CF a",
        "fct-source": "src/Math-ContinuedFraction.html#setNumerators",
        "fct-type": "function",
        "title": "setNumerators"
      },
      "index": {
        "description": "Apply an equivalence transformation that sets the partial numerators of CF to the specfied values If the input list is too short the rest of the CF will be unscaled",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "setNumerators",
        "normalized": "[a]-\u003eCF a-\u003eCF a",
        "package": "continued-fractions",
        "partial": "Numerators",
        "signature": "[a]-\u003eCF a-\u003eCF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:steed",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the convergents of a continued fraction using Steed's method.\n Only valid if the denominator in the following recurrence for D_i never \n goes to zero.  If this method blows up, try \u003ccode\u003e\u003ca\u003emodifiedLentz\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eD1 = 1/b1\n\u003c/p\u003e\u003cp\u003eD{i} = 1 / (b{i} + a{i} * D{i-1})\n\u003c/p\u003e\u003cp\u003edx1 = a1 / b1\n\u003c/p\u003e\u003cp\u003edx{i} = (b{i} * D{i} - 1) * dx{i-1}\n\u003c/p\u003e\u003cp\u003ex0 = b0\n\u003c/p\u003e\u003cp\u003ex{i} = x{i-1} + dx{i}\n\u003c/p\u003e\u003cp\u003eThe convergents are given by \u003ccode\u003escanl (+) b0 dxs\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "CF a -\u003e [a]",
        "fct-source": "src/Math-ContinuedFraction.html#steed",
        "fct-type": "function",
        "title": "steed"
      },
      "index": {
        "description": "Evaluate the convergents of continued fraction using Steed method Only valid if the denominator in the following recurrence for never goes to zero If this method blows up try modifiedLentz D1 b1 i-1 dx1 a1 b1 dx dx i-1 x0 b0 i-1 dx The convergents are given by scanl b0 dxs",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "steed",
        "normalized": "CF a-\u003e[a]",
        "package": "continued-fractions",
        "partial": "",
        "signature": "CF a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:sumPartialProducts",
      "description": {
        "fct-descr": "\u003cp\u003eEuler's formula for computing \u003ccode\u003esum (scanl1 (*) xs)\u003c/code\u003e.  \n Successive convergents of the resulting \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e are successive partial sums\n in the series.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "[a] -\u003e CF a",
        "fct-source": "src/Math-ContinuedFraction.html#sumPartialProducts",
        "fct-type": "function",
        "title": "sumPartialProducts"
      },
      "index": {
        "description": "Euler formula for computing sum scanl1 xs Successive convergents of the resulting CF are successive partial sums in the series",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "sumPartialProducts",
        "normalized": "[a]-\u003eCF a",
        "package": "continued-fractions",
        "partial": "Partial Products",
        "signature": "[a]-\u003eCF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/continued-fractions/docs/Math-ContinuedFraction.html#v:truncateCF",
      "description": {
        "fct-descr": "\u003cp\u003eTruncate a \u003ccode\u003e\u003ca\u003eCF\u003c/a\u003e\u003c/code\u003e to the specified number of partial numerators and denominators.\n\u003c/p\u003e",
        "fct-module": "Math.ContinuedFraction",
        "fct-package": "continued-fractions",
        "fct-signature": "Int -\u003e CF a -\u003e CF a",
        "fct-source": "src/Math-ContinuedFraction.html#truncateCF",
        "fct-type": "function",
        "title": "truncateCF"
      },
      "index": {
        "description": "Truncate CF to the specified number of partial numerators and denominators",
        "hierarchy": "Math ContinuedFraction",
        "module": "Math.ContinuedFraction",
        "name": "truncateCF",
        "normalized": "Int-\u003eCF a-\u003eCF a",
        "package": "continued-fractions",
        "partial": "CF",
        "signature": "Int-\u003eCF a-\u003eCF a"
      }
    }
  }
]