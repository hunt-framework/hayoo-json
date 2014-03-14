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
        "word": "compensated"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a fairly extensive API for compensated\n floating point arithmetic based on Knuth's error free\n transformation, various algorithms by Ogita, Rump and Oishi,\n Hida, Li and Bailey, Kahan summation, etc. with custom compensated\n arithmetic circuits to do multiplication, division, etc. of compensated\n numbers.\n\u003c/p\u003e\u003cp\u003eIn general if \u003ccode\u003ea\u003c/code\u003e has x bits of significand, \u003ccode\u003eCompensated a\u003c/code\u003e gives\n you twice that. You can iterate this construction for arbitrary\n precision.\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://web.mit.edu/tabbott/Public/quaddouble-debian/qd-2.3.4-old/docs/qd.pdf\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.ti3.tuhh.de/paper/rump/OgRuOi05.pdf\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Donald Knuth's \"The Art of Computer Programming, Volume 2: Seminumerical Algorithms\"\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Kahan_summation_algorithm\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Numeric.Compensated",
          "name": "Compensated",
          "package": "compensated",
          "source": "src/Numeric-Compensated.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides fairly extensive API for compensated floating point arithmetic based on Knuth error free transformation various algorithms by Ogita Rump and Oishi Hida Li and Bailey Kahan summation etc with custom compensated arithmetic circuits to do multiplication division etc of compensated numbers In general if has bits of significand Compensated gives you twice that You can iterate this construction for arbitrary precision References http web.mit.edu tabbott Public quaddouble-debian qd-2.3.4-old docs qd.pdf http www.ti3.tuhh.de paper rump OgRuOi05.pdf Donald Knuth The Art of Computer Programming Volume Seminumerical Algorithms http en.wikipedia.org wiki Kahan summation algorithm",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "Compensated",
          "package": "compensated",
          "partial": "Compensated",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Compensated",
          "name": "Compensable",
          "package": "compensated",
          "source": "src/Numeric-Compensated.html#Compensable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "Compensable",
          "package": "compensated",
          "partial": "Compensable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#t:Compensable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Compensated",
          "name": "Overcompensated",
          "package": "compensated",
          "source": "src/Numeric-Compensated.html#Overcompensated",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "Overcompensated",
          "package": "compensated",
          "partial": "Overcompensated",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#t:Overcompensated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute \u003ccode\u003ea * \u003ccode\u003e\u003ca\u003eCompensated\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "(*^)",
          "package": "compensated",
          "signature": "a -\u003e Compensated a -\u003e Compensated a",
          "source": "src/Numeric-Compensated.html#%2A%5E",
          "type": "function"
        },
        "index": {
          "description": "Compute Compensated",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "(*^) *^",
          "normalized": "a-\u003eCompensated a-\u003eCompensated a",
          "package": "compensated",
          "signature": "a-\u003eCompensated a-\u003eCompensated a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:-42--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a scalar + compensated sum with Kahan summation.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "(+^)",
          "package": "compensated",
          "signature": "a -\u003e Compensated a -\u003e Compensated a",
          "source": "src/Numeric-Compensated.html#%2B%5E",
          "type": "function"
        },
        "index": {
          "description": "Calculate scalar compensated sum with Kahan summation",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "(+^) +^",
          "normalized": "a-\u003eCompensated a-\u003eCompensated a",
          "package": "compensated",
          "signature": "a-\u003eCompensated a-\u003eCompensated a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:-43--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis provides the isomorphism between the compact representation we store these in internally\n and the naive pair of the \u003ccode\u003e\u003ca\u003eprimal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eresidual\u003c/a\u003e\u003c/code\u003e components.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "_Compensated",
          "package": "compensated",
          "signature": "Iso' (Compensated a) (a, a)",
          "source": "src/Numeric-Compensated.html#_Compensated",
          "type": "function"
        },
        "index": {
          "description": "This provides the isomorphism between the compact representation we store these in internally and the naive pair of the primal and residual components",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "_Compensated",
          "normalized": "Iso'(Compensated a)(a,a)",
          "package": "compensated",
          "partial": "Compensated",
          "signature": "Iso'(Compensated a)(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:_Compensated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e a b k\u003c/code\u003e computes \u003ccode\u003ek x y\u003c/code\u003e such that\n\u003c/p\u003e\u003cpre\u003e x + y = a + b\n x = fl(a + b)\n\u003c/pre\u003e\u003cp\u003eWhich is to say that \u003ccode\u003ex\u003c/code\u003e is the floating point image of \u003ccode\u003e(a + b)\u003c/code\u003e and\n \u003ccode\u003ey\u003c/code\u003e stores the residual error term.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "add",
          "package": "compensated",
          "signature": "a -\u003e a -\u003e (a -\u003e a -\u003e r) -\u003e r",
          "source": "src/Numeric-Compensated.html#add",
          "type": "function"
        },
        "index": {
          "description": "add computes such that fl Which is to say that is the floating point image of and stores the residual error term",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "add",
          "normalized": "a-\u003ea-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "compensated",
          "signature": "a-\u003ea-\u003e(a-\u003ea-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed internally to construct \u003ccode\u003e\u003ca\u003ecompensated\u003c/a\u003e\u003c/code\u003e values that satisfy our residual contract.\n\u003c/p\u003e\u003cp\u003eWhen in doubt, use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e a b \u003ccode\u003e\u003ca\u003ecompensated\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecompensated\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "compensated",
          "package": "compensated",
          "signature": "a -\u003e a -\u003e Compensated a",
          "source": "src/Numeric-Compensated.html#compensated",
          "type": "method"
        },
        "index": {
          "description": "Used internally to construct compensated values that satisfy our residual contract When in doubt use add compensated instead of compensated",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "compensated",
          "normalized": "a-\u003ea-\u003eCompensated a",
          "package": "compensated",
          "signature": "a-\u003ea-\u003eCompensated a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:compensated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Compensated",
          "name": "divide",
          "package": "compensated",
          "signature": "a -\u003e a -\u003e (a -\u003e a -\u003e r) -\u003e r",
          "source": "src/Numeric-Compensated.html#divide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "divide",
          "normalized": "a-\u003ea-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "compensated",
          "signature": "a-\u003ea-\u003e(a-\u003ea-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efadd\u003c/a\u003e\u003c/code\u003e a b k\u003c/code\u003e computes \u003ccode\u003ek x y\u003c/code\u003e such that\n\u003c/p\u003e\u003cpre\u003e x + y = a + b\n x = fl(a + b)\n\u003c/pre\u003e\u003cp\u003ebut only under the assumption that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e. If you\n aren't sure, use \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhich is to say that \u003ccode\u003ex\u003c/code\u003e is the floating point image of \u003ccode\u003e(a + b)\u003c/code\u003e and\n \u003ccode\u003ey\u003c/code\u003e stores the residual error term.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "fadd",
          "package": "compensated",
          "signature": "a -\u003e a -\u003e (a -\u003e a -\u003e r) -\u003e r",
          "source": "src/Numeric-Compensated.html#fadd",
          "type": "function"
        },
        "index": {
          "description": "fadd computes such that fl but only under the assumption that abs abs If you aren sure use add Which is to say that is the floating point image of and stores the residual error term",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "fadd",
          "normalized": "a-\u003ea-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "compensated",
          "signature": "a-\u003ea-\u003e(a-\u003ea-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:fadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform Kahan summation over a list.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "kahan",
          "package": "compensated",
          "signature": "f a -\u003e Compensated a",
          "source": "src/Numeric-Compensated.html#kahan",
          "type": "function"
        },
        "index": {
          "description": "Perform Kahan summation over list",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "kahan",
          "normalized": "a b-\u003eCompensated b",
          "package": "compensated",
          "signature": "f a-\u003eCompensated a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:kahan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003emagic\u003c/a\u003e\u003c/code\u003e number is used to \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e the significand in half, so we can multiply\n them separately without losing precision in \u003ccode\u003e\u003ca\u003etimes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "magic",
          "package": "compensated",
          "signature": "a",
          "source": "src/Numeric-Compensated.html#magic",
          "type": "method"
        },
        "index": {
          "description": "This magic number is used to split the significand in half so we can multiply them separately without losing precision in times",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "magic",
          "package": "compensated",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:magic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e lets us edit the \u003ccode\u003e\u003ca\u003eprimal\u003c/a\u003e\u003c/code\u003e directly, leaving the \u003ccode\u003e\u003ca\u003eresidual\u003c/a\u003e\u003c/code\u003e untouched.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "primal",
          "package": "compensated",
          "signature": "Lens' (Compensated a) a",
          "source": "src/Numeric-Compensated.html#primal",
          "type": "function"
        },
        "index": {
          "description": "This Lens lets us edit the primal directly leaving the residual untouched",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "primal",
          "package": "compensated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:primal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e lets us edit the \u003ccode\u003e\u003ca\u003eresidual\u003c/a\u003e\u003c/code\u003e directly, leaving the \u003ccode\u003e\u003ca\u003eprimal\u003c/a\u003e\u003c/code\u003e untouched.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "residual",
          "package": "compensated",
          "signature": "Lens' (Compensated a) a",
          "source": "src/Numeric-Compensated.html#residual",
          "type": "function"
        },
        "index": {
          "description": "This Lens lets us edit the residual directly leaving the primal untouched",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "residual",
          "package": "compensated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:residual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerror-free split of a floating point number into two parts.\n\u003c/p\u003e\u003cp\u003eNote: these parts do not satisfy the \u003ccode\u003e\u003ca\u003ecompensated\u003c/a\u003e\u003c/code\u003e contract\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "split",
          "package": "compensated",
          "signature": "a -\u003e (a -\u003e a -\u003e r) -\u003e r",
          "source": "src/Numeric-Compensated.html#split",
          "type": "function"
        },
        "index": {
          "description": "error-free split of floating point number into two parts Note these parts do not satisfy the compensated contract",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "split",
          "normalized": "a-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "compensated",
          "signature": "a-\u003e(a-\u003ea-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a fast square of a compensated number.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "square",
          "package": "compensated",
          "signature": "Compensated a -\u003e Compensated a",
          "source": "src/Numeric-Compensated.html#square",
          "type": "function"
        },
        "index": {
          "description": "Calculate fast square of compensated number",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "square",
          "normalized": "Compensated a-\u003eCompensated a",
          "package": "compensated",
          "signature": "Compensated a-\u003eCompensated a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esquared\u003c/a\u003e\u003c/code\u003e a k\u003c/code\u003e computes \u003ccode\u003ek x y\u003c/code\u003e such that\n\u003c/p\u003e\u003cpre\u003e x + y = a * a\n x = fl(a * a)\n\u003c/pre\u003e\u003cp\u003eWhich is to say that \u003ccode\u003ex\u003c/code\u003e is the floating point image of \u003ccode\u003e(a * a)\u003c/code\u003e and\n \u003ccode\u003ey\u003c/code\u003e stores the residual error term.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "squared",
          "package": "compensated",
          "signature": "a -\u003e (a -\u003e a -\u003e r) -\u003e r",
          "source": "src/Numeric-Compensated.html#squared",
          "type": "function"
        },
        "index": {
          "description": "squared computes such that fl Which is to say that is the floating point image of and stores the residual error term",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "squared",
          "normalized": "a-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "compensated",
          "signature": "a-\u003e(a-\u003ea-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:squared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etimes\u003c/a\u003e\u003c/code\u003e a b k\u003c/code\u003e computes \u003ccode\u003ek x y\u003c/code\u003e such that\n\u003c/p\u003e\u003cpre\u003e x + y = a * b\n x = fl(a * b)\n\u003c/pre\u003e\u003cp\u003eWhich is to say that \u003ccode\u003ex\u003c/code\u003e is the floating point image of \u003ccode\u003e(a * b)\u003c/code\u003e and\n \u003ccode\u003ey\u003c/code\u003e stores the residual error term.\n\u003c/p\u003e\u003cp\u003eThis could be nicer if we had access to a hardware fused multiply-add.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "times",
          "package": "compensated",
          "signature": "a -\u003e a -\u003e (a -\u003e a -\u003e r) -\u003e r",
          "source": "src/Numeric-Compensated.html#times",
          "type": "function"
        },
        "index": {
          "description": "times computes such that fl Which is to say that is the floating point image of and stores the residual error term This could be nicer if we had access to hardware fused multiply-add",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "times",
          "normalized": "a-\u003ea-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "compensated",
          "signature": "a-\u003ea-\u003e(a-\u003ea-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003eprimal\u003c/a\u003e\u003c/code\u003e component of a \u003ccode\u003e\u003ca\u003ecompensated\u003c/a\u003e\u003c/code\u003e value, when and if compensation\n is no longer required.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "uncompensated",
          "package": "compensated",
          "signature": "Compensated a -\u003e a",
          "source": "src/Numeric-Compensated.html#uncompensated",
          "type": "function"
        },
        "index": {
          "description": "Extract the primal component of compensated value when and if compensation is no longer required",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "uncompensated",
          "normalized": "Compensated a-\u003ea",
          "package": "compensated",
          "signature": "Compensated a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:uncompensated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis extracts both the \u003ccode\u003e\u003ca\u003eprimal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eresidual\u003c/a\u003e\u003c/code\u003e components of a \u003ccode\u003e\u003ca\u003eCompensated\u003c/a\u003e\u003c/code\u003e\n number.\n\u003c/p\u003e",
          "module": "Numeric.Compensated",
          "name": "with",
          "package": "compensated",
          "signature": "Compensated a -\u003e (a -\u003e a -\u003e r) -\u003e r",
          "source": "src/Numeric-Compensated.html#with",
          "type": "method"
        },
        "index": {
          "description": "This extracts both the primal and residual components of Compensated number",
          "hierarchy": "Numeric Compensated",
          "module": "Numeric.Compensated",
          "name": "with",
          "normalized": "Compensated a-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "compensated",
          "signature": "Compensated a-\u003e(a-\u003ea-\u003er)-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compensated/docs/Numeric-Compensated.html#v:with"
      }
    }
  ]
]