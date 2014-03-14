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
        "word": "exact-combinatorics"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinomial coefficients (\u003ca\u003ehttp://oeis.org/A007318\u003c/a\u003e), aka the count\n of possible combinations. For negative inputs, all functions\n return 0 (rather than throwing an exception or using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Combinatorics.Exact.Binomial",
          "name": "Binomial",
          "package": "exact-combinatorics",
          "source": "src/Math-Combinatorics-Exact-Binomial.html",
          "type": "module"
        },
        "index": {
          "description": "Binomial coefficients http oeis.org A007318 aka the count of possible combinations For negative inputs all functions return rather than throwing an exception or using Maybe",
          "hierarchy": "Math Combinatorics Exact Binomial",
          "module": "Math.Combinatorics.Exact.Binomial",
          "name": "Binomial",
          "package": "exact-combinatorics",
          "partial": "Binomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exact-combinatorics/docs/Math-Combinatorics-Exact-Binomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExact binomial coefficients. For a fast approximation see\n \u003ccode\u003emath-functions:Numeric.SpecFunctions.choose\u003c/code\u003e instead. The naive\n definition of the binomial coefficients is:\n\u003c/p\u003e\u003cpre\u003e n `choose` k\n     | k \u003c 0     = 0\n     | k \u003e n     = 0\n     | otherwise = factorial n `div` (factorial k * factorial (n-k))\n\u003c/pre\u003e\u003cp\u003eHowever, we use a fast implementation based on the prime-power\n factorization of the result (Goetgheluck, 1987). Each time \u003ccode\u003en\u003c/code\u003e\n is larger than the previous calls, there will be some slowdown\n as the prime numbers must be computed (though it is still much\n faster than the naive implementation); however, subsequent calls\n will be extremely fast, since we memoize the list of \u003ccode\u003e\u003ca\u003eprimes\u003c/a\u003e\u003c/code\u003e.\n Do note, however, that this will result in a space leak if you\n call \u003ccode\u003echoose\u003c/code\u003e for an extremely large \u003ccode\u003en\u003c/code\u003e and then don't need\n that many primes in the future. Hopefully future versions will\n correct this issue.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e P. Goetgheluck (1987)\n    \u003cem\u003eComputing Binomial Coefficients\u003c/em\u003e,\n    American Mathematical Monthly, 94(4). pp.360--365.\n    \u003ca\u003ehttp://www.jstor.org/stable/2323099\u003c/a\u003e,\n    \u003ca\u003ehttp://dl.acm.org/citation.cfm?id=26272\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Math.Combinatorics.Exact.Binomial",
          "name": "choose",
          "package": "exact-combinatorics",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Math-Combinatorics-Exact-Binomial.html#choose",
          "type": "function"
        },
        "index": {
          "description": "Exact binomial coefficients For fast approximation see math-functions Numeric.SpecFunctions.choose instead The naive definition of the binomial coefficients is choose otherwise factorial div factorial factorial n-k However we use fast implementation based on the prime-power factorization of the result Goetgheluck Each time is larger than the previous calls there will be some slowdown as the prime numbers must be computed though it is still much faster than the naive implementation however subsequent calls will be extremely fast since we memoize the list of primes Do note however that this will result in space leak if you call choose for an extremely large and then don need that many primes in the future Hopefully future versions will correct this issue Goetgheluck Computing Binomial Coefficients American Mathematical Monthly pp.360--365 http www.jstor.org stable http dl.acm.org citation.cfm id",
          "hierarchy": "Math Combinatorics Exact Binomial",
          "module": "Math.Combinatorics.Exact.Binomial",
          "name": "choose",
          "normalized": "a-\u003ea-\u003ea",
          "package": "exact-combinatorics",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exact-combinatorics/docs/Math-Combinatorics-Exact-Binomial.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe factorial numbers (\u003ca\u003ehttp://oeis.org/A000142\u003c/a\u003e). For negative\n inputs, all functions return 0 (rather than throwing an exception\n or using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eNotable limits:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 12! is the largest factorial that can fit into \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e 20! is the largest factorial that can fit into \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e 170! is the largest factorial that can fit into 64-bit \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Math.Combinatorics.Exact.Factorial",
          "name": "Factorial",
          "package": "exact-combinatorics",
          "source": "src/Math-Combinatorics-Exact-Factorial.html",
          "type": "module"
        },
        "index": {
          "description": "The factorial numbers http oeis.org A000142 For negative inputs all functions return rather than throwing an exception or using Maybe Notable limits is the largest factorial that can fit into Int32 is the largest factorial that can fit into Int64 is the largest factorial that can fit into bit Double",
          "hierarchy": "Math Combinatorics Exact Factorial",
          "module": "Math.Combinatorics.Exact.Factorial",
          "name": "Factorial",
          "package": "exact-combinatorics",
          "partial": "Factorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exact-combinatorics/docs/Math-Combinatorics-Exact-Factorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExact factorial numbers. For a fast approximation see\n \u003ccode\u003emath-functions:Numeric.SpecFunctions.factorial\u003c/code\u003e instead. The\n naive definition of the factorial numbers is:\n\u003c/p\u003e\u003cpre\u003e factorial n\n     | n \u003c 0     = 0\n     | otherwise = product [1..n]\n\u003c/pre\u003e\u003cp\u003eHowever, we use a fast algorithm based on the split-recursive form:\n\u003c/p\u003e\u003cpre\u003e factorial n =\n     2^(n - popCount n) * product [(q k)^k | forall k, k \u003e= 1]\n     where\n     q k = product [j | forall j, n*2^(-k) \u003c j \u003c= n*2^(-k+1), odd j]\n\u003c/pre\u003e",
          "module": "Math.Combinatorics.Exact.Factorial",
          "name": "factorial",
          "package": "exact-combinatorics",
          "signature": "Int -\u003e a",
          "source": "src/Math-Combinatorics-Exact-Factorial.html#factorial",
          "type": "function"
        },
        "index": {
          "description": "Exact factorial numbers For fast approximation see math-functions Numeric.SpecFunctions.factorial instead The naive definition of the factorial numbers is factorial otherwise product However we use fast algorithm based on the split-recursive form factorial popCount product forall where product forall odd",
          "hierarchy": "Math Combinatorics Exact Factorial",
          "module": "Math.Combinatorics.Exact.Factorial",
          "name": "factorial",
          "normalized": "Int-\u003ea",
          "package": "exact-combinatorics",
          "signature": "Int-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exact-combinatorics/docs/Math-Combinatorics-Exact-Factorial.html#v:factorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe prime numbers (\u003ca\u003ehttp://oeis.org/A000040\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Combinatorics.Exact.Primes",
          "name": "Primes",
          "package": "exact-combinatorics",
          "source": "src/Math-Combinatorics-Exact-Primes.html",
          "type": "module"
        },
        "index": {
          "description": "The prime numbers http oeis.org A000040",
          "hierarchy": "Math Combinatorics Exact Primes",
          "module": "Math.Combinatorics.Exact.Primes",
          "name": "Primes",
          "package": "exact-combinatorics",
          "partial": "Primes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exact-combinatorics/docs/Math-Combinatorics-Exact-Primes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe prime numbers. Implemented with the algorithm in:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Colin Runciman (1997)\n    \u003cem\u003eLazy Wheel Sieves and Spirals of Primes\u003c/em\u003e, Functional Pearl,\n    Journal of Functional Programming, 7(2). pp.219--225.\n    ISSN 0956-7968\n    \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.55.7096\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Math.Combinatorics.Exact.Primes",
          "name": "primes",
          "package": "exact-combinatorics",
          "signature": "[Int]",
          "source": "src/Math-Combinatorics-Exact-Primes.html#primes",
          "type": "function"
        },
        "index": {
          "description": "The prime numbers Implemented with the algorithm in Colin Runciman Lazy Wheel Sieves and Spirals of Primes Functional Pearl Journal of Functional Programming pp.219--225 ISSN http citeseerx.ist.psu.edu viewdoc summary doi",
          "hierarchy": "Math Combinatorics Exact Primes",
          "module": "Math.Combinatorics.Exact.Primes",
          "name": "primes",
          "normalized": "[Int]",
          "package": "exact-combinatorics",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exact-combinatorics/docs/Math-Combinatorics-Exact-Primes.html#v:primes"
      }
    }
  ]
]