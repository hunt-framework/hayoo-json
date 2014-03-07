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
        "word": "NumberSieves"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an array-based generalization of the Sieve of Eratosthenes that\n associates a prime divisor to each number in the sieve.  This is useful\n if you want to factor a large quantity of small numbers\n\u003c/p\u003e\u003cp\u003eThis code contains two simple  optimizations:  even numbers are not\n represented in the array,  reducing both time and space by 50%.\n Secondly,  the smallest prime divisor is sieved,  and the prime numbers\n are represented by \u003ccode\u003e0\u003c/code\u003e in the array instead of themselves.   This allows\n the divisors to be stored in half the number of bits,  reducing space\n consumption by another 50%.\n\u003c/p\u003e\u003cp\u003eCurrently, this sieve is limited to numbers less than 2^32,  and consumes\n one byte per number in the sieve on average.  Thus if you want to find\n the smallest divisor of every number up to 2^32,  you will need 4 GB\n of storage.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Sieve.Factor",
          "name": "Factor",
          "package": "NumberSieves",
          "source": "src/Math-Sieve-Factor.html",
          "type": "module"
        },
        "index": {
          "description": "This is an array-based generalization of the Sieve of Eratosthenes that associates prime divisor to each number in the sieve This is useful if you want to factor large quantity of small numbers This code contains two simple optimizations even numbers are not represented in the array reducing both time and space by Secondly the smallest prime divisor is sieved and the prime numbers are represented by in the array instead of themselves This allows the divisors to be stored in half the number of bits reducing space consumption by another Currently this sieve is limited to numbers less than and consumes one byte per number in the sieve on average Thus if you want to find the smallest divisor of every number up to you will need GB of storage",
          "hierarchy": "Math Sieve Factor",
          "module": "Math.Sieve.Factor",
          "name": "Factor",
          "package": "NumberSieves",
          "partial": "Factor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Factor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Sieve.Factor",
          "name": "FactorSieve",
          "package": "NumberSieves",
          "source": "src/Math-Sieve-Factor.html#FactorSieve",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Sieve Factor",
          "module": "Math.Sieve.Factor",
          "name": "FactorSieve",
          "package": "NumberSieves",
          "partial": "Factor Sieve",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Factor.html#t:FactorSieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFactors a number completely using a sieve, e.g.\n\u003c/p\u003e\u003cpre\u003e factor (sieve 1000) 360 == [(2,3),(3,2),(5,1)]\n\u003c/pre\u003e",
          "module": "Math.Sieve.Factor",
          "name": "factor",
          "package": "NumberSieves",
          "signature": "FactorSieve -\u003e a -\u003e [(a, a)]",
          "source": "src/Math-Sieve-Factor.html#factor",
          "type": "function"
        },
        "index": {
          "description": "Factors number completely using sieve e.g factor sieve",
          "hierarchy": "Math Sieve Factor",
          "module": "Math.Sieve.Factor",
          "name": "factor",
          "normalized": "FactorSieve-\u003ea-\u003e[(a,a)]",
          "package": "NumberSieves",
          "signature": "FactorSieve-\u003ea-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Factor.html#v:factor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the smallest prime divisor of a given number in the sieve.\n\u003c/p\u003e",
          "module": "Math.Sieve.Factor",
          "name": "findFactor",
          "package": "NumberSieves",
          "signature": "FactorSieve -\u003e a -\u003e a",
          "source": "src/Math-Sieve-Factor.html#findFactor",
          "type": "function"
        },
        "index": {
          "description": "Returns the smallest prime divisor of given number in the sieve",
          "hierarchy": "Math Sieve Factor",
          "module": "Math.Sieve.Factor",
          "name": "findFactor",
          "normalized": "FactorSieve-\u003ea-\u003ea",
          "package": "NumberSieves",
          "partial": "Factor",
          "signature": "FactorSieve-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Factor.html#v:findFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a number prime?\n\u003c/p\u003e",
          "module": "Math.Sieve.Factor",
          "name": "isPrime",
          "package": "NumberSieves",
          "signature": "FactorSieve -\u003e a -\u003e Bool",
          "source": "src/Math-Sieve-Factor.html#isPrime",
          "type": "function"
        },
        "index": {
          "description": "Is number prime",
          "hierarchy": "Math Sieve Factor",
          "module": "Math.Sieve.Factor",
          "name": "isPrime",
          "normalized": "FactorSieve-\u003ea-\u003eBool",
          "package": "NumberSieves",
          "partial": "Prime",
          "signature": "FactorSieve-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Factor.html#v:isPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the smallest prime divisor of every number up to a given limit.\n\u003c/p\u003e",
          "module": "Math.Sieve.Factor",
          "name": "sieve",
          "package": "NumberSieves",
          "signature": "a -\u003e FactorSieve",
          "source": "src/Math-Sieve-Factor.html#sieve",
          "type": "function"
        },
        "index": {
          "description": "Finds the smallest prime divisor of every number up to given limit",
          "hierarchy": "Math Sieve Factor",
          "module": "Math.Sieve.Factor",
          "name": "sieve",
          "normalized": "a-\u003eFactorSieve",
          "package": "NumberSieves",
          "signature": "a-\u003eFactorSieve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Factor.html#v:sieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the upper limit of a sieve.\n\u003c/p\u003e",
          "module": "Math.Sieve.Factor",
          "name": "sieveBound",
          "package": "NumberSieves",
          "signature": "FactorSieve -\u003e a",
          "source": "src/Math-Sieve-Factor.html#sieveBound",
          "type": "function"
        },
        "index": {
          "description": "Returns the upper limit of sieve",
          "hierarchy": "Math Sieve Factor",
          "module": "Math.Sieve.Factor",
          "name": "sieveBound",
          "normalized": "FactorSieve-\u003ea",
          "package": "NumberSieves",
          "partial": "Bound",
          "signature": "FactorSieve-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Factor.html#v:sieveBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIncremental primality sieve based on priority queues,  described\n in the paper \u003cem\u003eThe Genuine Sieve of Eratosthenes\u003c/em\u003e by Melissa O'Neill,\n \u003cem\u003eJournal of Functional Programming\u003c/em\u003e, 19(1), pp95-106, Jan 2009.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.cs.hmc.edu/~oneill/papers/Sieve-JFP.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eCode is unchanged,  other than packaging,  from that written by\n Melissa O'Neill.  This version contains optimizations not described\n in the paper,  primarily improving memory consumption.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.cs.hmc.edu/~oneill/code/haskell-primes.zip\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Sieve.ONeill",
          "name": "ONeill",
          "package": "NumberSieves",
          "source": "src/Math-Sieve-ONeill.html",
          "type": "module"
        },
        "index": {
          "description": "Incremental primality sieve based on priority queues described in the paper The Genuine Sieve of Eratosthenes by Melissa Neill Journal of Functional Programming pp95-106 Jan http www.cs.hmc.edu oneill papers Sieve-JFP.pdf Code is unchanged other than packaging from that written by Melissa Neill This version contains optimizations not described in the paper primarily improving memory consumption http www.cs.hmc.edu oneill code haskell-primes.zip",
          "hierarchy": "Math Sieve ONeill",
          "module": "Math.Sieve.ONeill",
          "name": "ONeill",
          "package": "NumberSieves",
          "partial": "ONeill",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-ONeill.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite stream of primes\n\u003c/p\u003e",
          "module": "Math.Sieve.ONeill",
          "name": "calcPrimes",
          "package": "NumberSieves",
          "signature": "() -\u003e [a]",
          "source": "src/Math-Sieve-ONeill.html#calcPrimes",
          "type": "function"
        },
        "index": {
          "description": "An infinite stream of primes",
          "hierarchy": "Math Sieve ONeill",
          "module": "Math.Sieve.ONeill",
          "name": "calcPrimes",
          "normalized": "()-\u003e[a]",
          "package": "NumberSieves",
          "partial": "Primes",
          "signature": "()-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-ONeill.html#v:calcPrimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite stream of primes\n\u003c/p\u003e",
          "module": "Math.Sieve.ONeill",
          "name": "primes",
          "package": "NumberSieves",
          "signature": "[a]",
          "source": "src/Math-Sieve-ONeill.html#primes",
          "type": "function"
        },
        "index": {
          "description": "An infinite stream of primes",
          "hierarchy": "Math Sieve ONeill",
          "module": "Math.Sieve.ONeill",
          "name": "primes",
          "normalized": "[a]",
          "package": "NumberSieves",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-ONeill.html#v:primes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns primes up to some limit\n\u003c/p\u003e",
          "module": "Math.Sieve.ONeill",
          "name": "primesToLimit",
          "package": "NumberSieves",
          "signature": "a -\u003e [a]",
          "source": "src/Math-Sieve-ONeill.html#primesToLimit",
          "type": "function"
        },
        "index": {
          "description": "Returns primes up to some limit",
          "hierarchy": "Math Sieve ONeill",
          "module": "Math.Sieve.ONeill",
          "name": "primesToLimit",
          "normalized": "a-\u003e[a]",
          "package": "NumberSieves",
          "partial": "To Limit",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-ONeill.html#v:primesToLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first \u003ccode\u003en\u003c/code\u003e primes\n\u003c/p\u003e",
          "module": "Math.Sieve.ONeill",
          "name": "primesToNth",
          "package": "NumberSieves",
          "signature": "Int -\u003e [a]",
          "source": "src/Math-Sieve-ONeill.html#primesToNth",
          "type": "function"
        },
        "index": {
          "description": "Returns the first primes",
          "hierarchy": "Math Sieve ONeill",
          "module": "Math.Sieve.ONeill",
          "name": "primesToNth",
          "normalized": "Int-\u003e[a]",
          "package": "NumberSieves",
          "partial": "To Nth",
          "signature": "Int-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-ONeill.html#v:primesToNth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first argument specifies which number to start at,\n the second argument is a wheel of deltas for skipping composites.\n For example,  \u003ccode\u003eprimes\u003c/code\u003e could be defined as\n\u003c/p\u003e\u003cpre\u003e  2 : 3 : sieve 5 (cycle [2,4])\n\u003c/pre\u003e",
          "module": "Math.Sieve.ONeill",
          "name": "sieve",
          "package": "NumberSieves",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Math-Sieve-ONeill.html#sieve",
          "type": "function"
        },
        "index": {
          "description": "The first argument specifies which number to start at the second argument is wheel of deltas for skipping composites For example primes could be defined as sieve cycle",
          "hierarchy": "Math Sieve ONeill",
          "module": "Math.Sieve.ONeill",
          "name": "sieve",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "NumberSieves",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-ONeill.html#v:sieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a sieve that calculates Euler's Totient,  also know as Euler's\n Phi function,  for every number up to a given limit.  \u003ccode\u003ephi(n)\u003c/code\u003e is defined\n as the number of positive integers less than \u003ccode\u003en\u003c/code\u003e that are relatively\n prime to \u003ccode\u003en\u003c/code\u003e,  i.e. \u003ccode\u003egcd n x == 1\u003c/code\u003e.   Given the prime factorization of\n a number,  it can be calculated efficiently from the formulas:\n\u003c/p\u003e\u003cpre\u003e phi (p ^ k) = (p-1)*p^(k-1)    if p is prime\n phi (x * y) = phi x * phi y    if x and y are relatively prime\n\u003c/pre\u003e\u003cp\u003eThe second case says that \u003ccode\u003ephi\u003c/code\u003e is a \u003cem\u003emultiplicative\u003c/em\u003e function.  Since\n any multiplicative function can be calculated from the prime factorization,\n \u003ccode\u003e\u003ca\u003eFactor\u003c/a\u003e\u003c/code\u003e can also be applied,  however this variant\n avoids a great deal of integer division,  and so is significantly faster\n for calculating \u003ccode\u003ephi\u003c/code\u003e for large quantities of different values.\n\u003c/p\u003e\u003cp\u003eThis sieve does not represent even numbers directly,  and the maximum\n number that can currently be sieved is 2^32.   This means that the sieve\n requires two bytes per number sieved on average,  and thus sieving up to\n 2^32 requires 8 GB of storage.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Sieve.Phi",
          "name": "Phi",
          "package": "NumberSieves",
          "source": "src/Math-Sieve-Phi.html",
          "type": "module"
        },
        "index": {
          "description": "This is sieve that calculates Euler Totient also know as Euler Phi function for every number up to given limit phi is defined as the number of positive integers less than that are relatively prime to i.e gcd Given the prime factorization of number it can be calculated efficiently from the formulas phi p-1 k-1 if is prime phi phi phi if and are relatively prime The second case says that phi is multiplicative function Since any multiplicative function can be calculated from the prime factorization Factor can also be applied however this variant avoids great deal of integer division and so is significantly faster for calculating phi for large quantities of different values This sieve does not represent even numbers directly and the maximum number that can currently be sieved is This means that the sieve requires two bytes per number sieved on average and thus sieving up to requires GB of storage",
          "hierarchy": "Math Sieve Phi",
          "module": "Math.Sieve.Phi",
          "name": "Phi",
          "package": "NumberSieves",
          "partial": "Phi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Phi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given number prime?\n\u003c/p\u003e",
          "module": "Math.Sieve.Phi",
          "name": "isPrime",
          "package": "NumberSieves",
          "signature": "PhiSieve -\u003e a -\u003e Bool",
          "source": "src/Math-Sieve-Phi.html#isPrime",
          "type": "function"
        },
        "index": {
          "description": "Is the given number prime",
          "hierarchy": "Math Sieve Phi",
          "module": "Math.Sieve.Phi",
          "name": "isPrime",
          "normalized": "PhiSieve-\u003ea-\u003eBool",
          "package": "NumberSieves",
          "partial": "Prime",
          "signature": "PhiSieve-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Phi.html#v:isPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the totient from the sieve\n\u003c/p\u003e",
          "module": "Math.Sieve.Phi",
          "name": "phi",
          "package": "NumberSieves",
          "signature": "PhiSieve -\u003e a -\u003e b",
          "source": "src/Math-Sieve-Phi.html#phi",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the totient from the sieve",
          "hierarchy": "Math Sieve Phi",
          "module": "Math.Sieve.Phi",
          "name": "phi",
          "normalized": "PhiSieve-\u003ea-\u003eb",
          "package": "NumberSieves",
          "signature": "PhiSieve-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Phi.html#v:phi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate Euler's Totient for every integer up to the given limit\n\u003c/p\u003e",
          "module": "Math.Sieve.Phi",
          "name": "sieve",
          "package": "NumberSieves",
          "signature": "a -\u003e PhiSieve",
          "source": "src/Math-Sieve-Phi.html#sieve",
          "type": "function"
        },
        "index": {
          "description": "Calculate Euler Totient for every integer up to the given limit",
          "hierarchy": "Math Sieve Phi",
          "module": "Math.Sieve.Phi",
          "name": "sieve",
          "normalized": "a-\u003ePhiSieve",
          "package": "NumberSieves",
          "signature": "a-\u003ePhiSieve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Phi.html#v:sieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe upper limit of the sieve\n\u003c/p\u003e",
          "module": "Math.Sieve.Phi",
          "name": "sieveBound",
          "package": "NumberSieves",
          "signature": "PhiSieve -\u003e a",
          "source": "src/Math-Sieve-Phi.html#sieveBound",
          "type": "function"
        },
        "index": {
          "description": "The upper limit of the sieve",
          "hierarchy": "Math Sieve Phi",
          "module": "Math.Sieve.Phi",
          "name": "sieveBound",
          "normalized": "PhiSieve-\u003ea",
          "package": "NumberSieves",
          "partial": "Bound",
          "signature": "PhiSieve-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NumberSieves/docs/Math-Sieve-Phi.html#v:sieveBound"
      }
    }
  ]
]