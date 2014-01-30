[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primes/docs/Data-Numbers-Primes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell library provides an efficient lazy wheel sieve for\n prime generation inspired by \u003cem\u003eLazy wheel sieves and spirals of\u003c/em\u003e\n \u003cem\u003eprimes\u003c/em\u003e by Colin Runciman\n (\u003ca\u003ehttp://www.cs.york.ac.uk/ftpdir/pub/colin/jfp97lw.ps.gz\u003c/a\u003e) and\n \u003cem\u003eThe Genuine Sieve of Eratosthenes\u003c/em\u003e by Melissa O'Neil\n (\u003ca\u003ehttp://www.cs.hmc.edu/~oneill/papers/Sieve-JFP.pdf\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Numbers.Primes",
        "fct-package": "primes",
        "fct-signature": "module",
        "fct-source": "src/Data-Numbers-Primes.html",
        "fct-type": "module",
        "title": "Primes"
      },
      "index": {
        "description": "This Haskell library provides an efficient lazy wheel sieve for prime generation inspired by Lazy wheel sieves and spirals of primes by Colin Runciman http www.cs.york.ac.uk ftpdir pub colin jfp97lw.ps.gz and The Genuine Sieve of Eratosthenes by Melissa Neil http www.cs.hmc.edu oneill papers Sieve-JFP.pdf",
        "hierarchy": "Data Numbers Primes",
        "module": "Data.Numbers.Primes",
        "name": "Primes",
        "normalized": "",
        "package": "primes",
        "partial": "Primes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primes/docs/Data-Numbers-Primes.html#v:isPrime",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether a given number is prime.\n\u003c/p\u003e\u003cp\u003eThis function uses trial division to check for divisibility with\n all primes below the square root of the given number. It is\n impractical for numbers with a very large smallest prime factor.\n\u003c/p\u003e",
        "fct-module": "Data.Numbers.Primes",
        "fct-package": "primes",
        "fct-signature": "int -\u003e Bool",
        "fct-source": "src/Data-Numbers-Primes.html#isPrime",
        "fct-type": "function",
        "title": "isPrime"
      },
      "index": {
        "description": "Checks whether given number is prime This function uses trial division to check for divisibility with all primes below the square root of the given number It is impractical for numbers with very large smallest prime factor",
        "hierarchy": "Data Numbers Primes",
        "module": "Data.Numbers.Primes",
        "name": "isPrime",
        "normalized": "a-\u003eBool",
        "package": "primes",
        "partial": "Prime",
        "signature": "int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primes/docs/Data-Numbers-Primes.html#v:primeFactors",
      "description": {
        "fct-descr": "\u003cp\u003eYields the sorted list of prime factors of the given positive\n number.\n\u003c/p\u003e\u003cp\u003eThis function uses trial division and is impractical for numbers\n with very large prime factors.\n\u003c/p\u003e",
        "fct-module": "Data.Numbers.Primes",
        "fct-package": "primes",
        "fct-signature": "int -\u003e [int]",
        "fct-source": "src/Data-Numbers-Primes.html#primeFactors",
        "fct-type": "function",
        "title": "primeFactors"
      },
      "index": {
        "description": "Yields the sorted list of prime factors of the given positive number This function uses trial division and is impractical for numbers with very large prime factors",
        "hierarchy": "Data Numbers Primes",
        "module": "Data.Numbers.Primes",
        "name": "primeFactors",
        "normalized": "a-\u003e[a]",
        "package": "primes",
        "partial": "Factors",
        "signature": "int-\u003e[int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primes/docs/Data-Numbers-Primes.html#v:primes",
      "description": {
        "fct-descr": "\u003cp\u003eThis global constant is an infinite list of prime numbers. It is\n generated by a lazy wheel sieve and shared across the whole program\n run. If you are concerned about the memory requirements of sharing\n many primes you can call the function \u003ccode\u003ewheelSieve\u003c/code\u003e directly.\n\u003c/p\u003e",
        "fct-module": "Data.Numbers.Primes",
        "fct-package": "primes",
        "fct-signature": "[int]",
        "fct-source": "src/Data-Numbers-Primes.html#primes",
        "fct-type": "function",
        "title": "primes"
      },
      "index": {
        "description": "This global constant is an infinite list of prime numbers It is generated by lazy wheel sieve and shared across the whole program run If you are concerned about the memory requirements of sharing many primes you can call the function wheelSieve directly",
        "hierarchy": "Data Numbers Primes",
        "module": "Data.Numbers.Primes",
        "name": "primes",
        "normalized": "[a]",
        "package": "primes",
        "partial": "",
        "signature": "[int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primes/docs/Data-Numbers-Primes.html#v:wheelSieve",
      "description": {
        "fct-descr": "\u003cp\u003eThis function returns an infinite list of prime numbers by sieving\n with a wheel that cancels the multiples of the first \u003ccode\u003en\u003c/code\u003e primes\n where \u003ccode\u003en\u003c/code\u003e is the argument given to \u003ccode\u003ewheelSieve\u003c/code\u003e. Don't use too\n large wheels. The number \u003ccode\u003e6\u003c/code\u003e is a good value to pass to this\n function. Larger wheels improve the run time at the cost of higher\n memory requirements.\n\u003c/p\u003e",
        "fct-module": "Data.Numbers.Primes",
        "fct-package": "primes",
        "fct-signature": "Int-\u003e [int]",
        "fct-type": "function",
        "title": "wheelSieve"
      },
      "index": {
        "description": "This function returns an infinite list of prime numbers by sieving with wheel that cancels the multiples of the first primes where is the argument given to wheelSieve Don use too large wheels The number is good value to pass to this function Larger wheels improve the run time at the cost of higher memory requirements",
        "hierarchy": "Data Numbers Primes",
        "module": "Data.Numbers.Primes",
        "name": "wheelSieve",
        "normalized": "Int-\u003e[a]",
        "package": "primes",
        "partial": "Sieve",
        "signature": "Int-\u003e[int]"
      }
    }
  }
]