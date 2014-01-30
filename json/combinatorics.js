[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorics/docs/Math-Combinatorics-Binomial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinomial coefficients, aka the count of possible combinations.\n For negative inputs, all functions return 0 (rather than throwing\n an exception or using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Binomial",
        "fct-package": "combinatorics",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Binomial.html",
        "fct-type": "module",
        "title": "Binomial"
      },
      "index": {
        "description": "Binomial coefficients aka the count of possible combinations For negative inputs all functions return rather than throwing an exception or using Maybe",
        "hierarchy": "Math Combinatorics Binomial",
        "module": "Math.Combinatorics.Binomial",
        "name": "Binomial",
        "normalized": "",
        "package": "combinatorics",
        "partial": "Binomial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorics/docs/Math-Combinatorics-Binomial.html#v:choose",
      "description": {
        "fct-descr": "\u003cp\u003eExact binomial coefficients. For a fast approximation see\n \u003ccode\u003emath-functions:Numeric.SpecFunctions.choose\u003c/code\u003e instead. The naive\n definition of the binomial coefficients is:\n\u003c/p\u003e\u003cpre\u003e n `choose` k\n     | k \u003c 0     = 0\n     | k \u003e n     = 0\n     | otherwise = factorial n `div` (factorial k * factorial (n-k))\n\u003c/pre\u003e\u003cp\u003eHowever, we use a fast implementation based on the prime-power\n factorization of the result (Goetgheluck, 1987). Each time \u003ccode\u003en\u003c/code\u003e\n is larger than the previous calls, there will be some slowdown\n as the prime numbers must be computed (though it is still much\n faster than the naive implementation); however, subsequent calls\n will be extremely fast, since we memoize the list of \u003ccode\u003e\u003ca\u003eprimes\u003c/a\u003e\u003c/code\u003e.\n Do note, however, that this will result in a space leak if you\n call \u003ccode\u003echoose\u003c/code\u003e for an extremely large \u003ccode\u003en\u003c/code\u003e and then don't need\n that many primes in the future. Hopefully future versions will\n correct this issue.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e P. Goetgheluck (1987)\n    \u003cem\u003eComputing Binomial Coefficients\u003c/em\u003e,\n    American Mathematical Monthly, 94(4). pp.360--365.\n    \u003ca\u003ehttp://www.jstor.org/stable/2323099\u003c/a\u003e,\n    \u003ca\u003ehttp://dl.acm.org/citation.cfm?id=26272\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Math.Combinatorics.Binomial",
        "fct-package": "combinatorics",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Math-Combinatorics-Binomial.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "Exact binomial coefficients For fast approximation see math-functions Numeric.SpecFunctions.choose instead The naive definition of the binomial coefficients is choose otherwise factorial div factorial factorial n-k However we use fast implementation based on the prime-power factorization of the result Goetgheluck Each time is larger than the previous calls there will be some slowdown as the prime numbers must be computed though it is still much faster than the naive implementation however subsequent calls will be extremely fast since we memoize the list of primes Do note however that this will result in space leak if you call choose for an extremely large and then don need that many primes in the future Hopefully future versions will correct this issue Goetgheluck Computing Binomial Coefficients American Mathematical Monthly pp.360--365 http www.jstor.org stable http dl.acm.org citation.cfm id",
        "hierarchy": "Math Combinatorics Binomial",
        "module": "Math.Combinatorics.Binomial",
        "name": "choose",
        "normalized": "a-\u003ea-\u003ea",
        "package": "combinatorics",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorics/docs/Math-Combinatorics-Factorial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe factorial numbers (\u003ca\u003ehttp://oeis.org/A000142\u003c/a\u003e). For negative\n inputs, all functions return 0 (rather than throwing an exception\n or using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eNotable limits:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 12! is the largest factorial that can fit into \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e 20! is the largest factorial that can fit into \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e 170! is the largest factorial that can fit into 64-bit \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Factorial",
        "fct-package": "combinatorics",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Factorial.html",
        "fct-type": "module",
        "title": "Factorial"
      },
      "index": {
        "description": "The factorial numbers http oeis.org A000142 For negative inputs all functions return rather than throwing an exception or using Maybe Notable limits is the largest factorial that can fit into Int32 is the largest factorial that can fit into Int64 is the largest factorial that can fit into bit Double",
        "hierarchy": "Math Combinatorics Factorial",
        "module": "Math.Combinatorics.Factorial",
        "name": "Factorial",
        "normalized": "",
        "package": "combinatorics",
        "partial": "Factorial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorics/docs/Math-Combinatorics-Factorial.html#v:factorial",
      "description": {
        "fct-descr": "\u003cp\u003eExact factorial numbers. For a fast approximation see\n \u003ccode\u003emath-functions:Numeric.SpecFunctions.factorial\u003c/code\u003e instead. The\n naive definition of the factorial numbers is:\n\u003c/p\u003e\u003cpre\u003e factorial n\n     | n \u003c 0     = 0\n     | otherwise = product [1..n]\n\u003c/pre\u003e\u003cp\u003eHowever, we use a fast algorithm based on the split-recursive form:\n\u003c/p\u003e\u003cpre\u003e factorial n =\n     2^(n - popCount n) * product [(q k)^k | forall k, k \u003e= 1]\n     where\n     q k = product [j | forall j, n*2^(-k) \u003c j \u003c= n*2^(-k+1), odd j]\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Factorial",
        "fct-package": "combinatorics",
        "fct-signature": "Int -\u003e a",
        "fct-source": "src/Math-Combinatorics-Factorial.html#factorial",
        "fct-type": "function",
        "title": "factorial"
      },
      "index": {
        "description": "Exact factorial numbers For fast approximation see math-functions Numeric.SpecFunctions.factorial instead The naive definition of the factorial numbers is factorial otherwise product However we use fast algorithm based on the split-recursive form factorial popCount product forall where product forall odd",
        "hierarchy": "Math Combinatorics Factorial",
        "module": "Math.Combinatorics.Factorial",
        "name": "factorial",
        "normalized": "Int-\u003ea",
        "package": "combinatorics",
        "partial": "",
        "signature": "Int-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorics/docs/Math-Combinatorics-Primes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe prime numbers (\u003ca\u003ehttp://oeis.org/A000040\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Primes",
        "fct-package": "combinatorics",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Primes.html",
        "fct-type": "module",
        "title": "Primes"
      },
      "index": {
        "description": "The prime numbers http oeis.org A000040",
        "hierarchy": "Math Combinatorics Primes",
        "module": "Math.Combinatorics.Primes",
        "name": "Primes",
        "normalized": "",
        "package": "combinatorics",
        "partial": "Primes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorics/docs/Math-Combinatorics-Primes.html#v:primes",
      "description": {
        "fct-descr": "\u003cp\u003eThe prime numbers. Implemented with the algorithm in:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Colin Runciman (1997)\n    \u003cem\u003eLazy Wheel Sieves and Spirals of Primes\u003c/em\u003e, Functional Pearl,\n    Journal of Functional Programming, 7(2). pp.219--225.\n    ISSN 0956-7968\n    \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.55.7096\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Math.Combinatorics.Primes",
        "fct-package": "combinatorics",
        "fct-signature": "[Int]",
        "fct-source": "src/Math-Combinatorics-Primes.html#primes",
        "fct-type": "function",
        "title": "primes"
      },
      "index": {
        "description": "The prime numbers Implemented with the algorithm in Colin Runciman Lazy Wheel Sieves and Spirals of Primes Functional Pearl Journal of Functional Programming pp.219--225 ISSN http citeseerx.ist.psu.edu viewdoc summary doi",
        "hierarchy": "Math Combinatorics Primes",
        "module": "Math.Combinatorics.Primes",
        "name": "primes",
        "normalized": "[Int]",
        "package": "combinatorics",
        "partial": "",
        "signature": "[Int]"
      }
    }
  }
]