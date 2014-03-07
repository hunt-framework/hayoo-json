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
        "word": "Numbers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Numbers.Primes",
          "name": "Primes",
          "package": "Numbers",
          "source": "src/Data-Numbers-Primes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Numbers Primes",
          "module": "Data.Numbers.Primes",
          "name": "Primes",
          "package": "Numbers",
          "partial": "Primes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Numbers/docs/Data-Numbers-Primes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether a number is prime    \n\u003c/p\u003e",
          "module": "Data.Numbers.Primes",
          "name": "isPrime",
          "package": "Numbers",
          "signature": "Integer -\u003e Bool",
          "source": "src/Data-Numbers-Primes.html#isPrime",
          "type": "function"
        },
        "index": {
          "description": "Checks whether number is prime",
          "hierarchy": "Data Numbers Primes",
          "module": "Data.Numbers.Primes",
          "name": "isPrime",
          "normalized": "Integer-\u003eBool",
          "package": "Numbers",
          "partial": "Prime",
          "signature": "Integer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Numbers/docs/Data-Numbers-Primes.html#v:isPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a Miller Rabin Primality Test. According to the Wikipedia it's false positive with a probability of less than 25%. It's never false negative. Use it several times to increase confidence.\n\u003c/p\u003e",
          "module": "Data.Numbers.Primes",
          "name": "isProbablyPrime",
          "package": "Numbers",
          "signature": "Integer -\u003e g -\u003e (Bool, g)",
          "source": "src/Data-Numbers-Primes.html#isProbablyPrime",
          "type": "function"
        },
        "index": {
          "description": "Performs Miller Rabin Primality Test According to the Wikipedia it false positive with probability of less than It never false negative Use it several times to increase confidence",
          "hierarchy": "Data Numbers Primes",
          "module": "Data.Numbers.Primes",
          "name": "isProbablyPrime",
          "normalized": "Integer-\u003ea-\u003e(Bool,a)",
          "package": "Numbers",
          "partial": "Probably Prime",
          "signature": "Integer-\u003eg-\u003e(Bool,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Numbers/docs/Data-Numbers-Primes.html#v:isProbablyPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list of prime numbers, generated as described here \u003ca\u003ehttp://www.cs.york.ac.uk/ftpdir/pub/colin/jfp97lw.ps.gz\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Numbers.Primes",
          "name": "primes",
          "package": "Numbers",
          "signature": "[Integer]",
          "source": "src/Data-Numbers-Primes.html#primes",
          "type": "function"
        },
        "index": {
          "description": "An infinite list of prime numbers generated as described here http www.cs.york.ac.uk ftpdir pub colin jfp97lw.ps.gz",
          "hierarchy": "Data Numbers Primes",
          "module": "Data.Numbers.Primes",
          "name": "primes",
          "normalized": "[Integer]",
          "package": "Numbers",
          "signature": "[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Numbers/docs/Data-Numbers-Primes.html#v:primes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an assortment of number theorectic functions. As of now it's not very large or fast, but that should improve over time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Numbers",
          "name": "Numbers",
          "package": "Numbers",
          "source": "src/Data-Numbers.html",
          "type": "module"
        },
        "index": {
          "description": "This is an assortment of number theorectic functions As of now it not very large or fast but that should improve over time",
          "hierarchy": "Data Numbers",
          "module": "Data.Numbers",
          "name": "Numbers",
          "package": "Numbers",
          "partial": "Numbers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Numbers/docs/Data-Numbers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the sum of the factors of a number\n\u003c/p\u003e",
          "module": "Data.Numbers",
          "name": "factorSum",
          "package": "Numbers",
          "signature": "Integer -\u003e Integer",
          "source": "src/Data-Numbers.html#factorSum",
          "type": "function"
        },
        "index": {
          "description": "Returns the sum of the factors of number",
          "hierarchy": "Data Numbers",
          "module": "Data.Numbers",
          "name": "factorSum",
          "normalized": "Integer-\u003eInteger",
          "package": "Numbers",
          "partial": "Sum",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Numbers/docs/Data-Numbers.html#v:factorSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the factors of a number\n\u003c/p\u003e",
          "module": "Data.Numbers",
          "name": "factors",
          "package": "Numbers",
          "signature": "Integer -\u003e [Integer]",
          "source": "src/Data-Numbers.html#factors",
          "type": "function"
        },
        "index": {
          "description": "Returns the factors of number",
          "hierarchy": "Data Numbers",
          "module": "Data.Numbers",
          "name": "factors",
          "normalized": "Integer-\u003e[Integer]",
          "package": "Numbers",
          "signature": "Integer-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Numbers/docs/Data-Numbers.html#v:factors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of divisors of a number. Uses \u003ca\u003ehttp://mathschallenge.net/index.php?section=faq&ref=number/number_of_divisors\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Numbers",
          "name": "numOfFactors",
          "package": "Numbers",
          "signature": "Integer -\u003e Int",
          "source": "src/Data-Numbers.html#numOfFactors",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of divisors of number Uses http mathschallenge.net index.php section faq ref number number of divisors",
          "hierarchy": "Data Numbers",
          "module": "Data.Numbers",
          "name": "numOfFactors",
          "normalized": "Integer-\u003eInt",
          "package": "Numbers",
          "partial": "Of Factors",
          "signature": "Integer-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Numbers/docs/Data-Numbers.html#v:numOfFactors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the prime factors for a given number\n\u003c/p\u003e",
          "module": "Data.Numbers",
          "name": "primeFactors",
          "package": "Numbers",
          "signature": "Integer -\u003e [Integer]",
          "source": "src/Data-Numbers.html#primeFactors",
          "type": "function"
        },
        "index": {
          "description": "Returns the prime factors for given number",
          "hierarchy": "Data Numbers",
          "module": "Data.Numbers",
          "name": "primeFactors",
          "normalized": "Integer-\u003e[Integer]",
          "package": "Numbers",
          "partial": "Factors",
          "signature": "Integer-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Numbers/docs/Data-Numbers.html#v:primeFactors"
      }
    }
  ]
]