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
        "word": "normaldistribution"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis purpose of this library is to have a simple API and no\ndependencies beyond Haskell 98 in order to let you produce normally\ndistributed random values with a minimum of fuss. This library does\n\u003cem\u003enot\u003c/em\u003e attempt to be blazingly fast nor to pass stringent tests of\nrandomness. It attempts to be very easy to install and use while\nbeing \"good enough\" for many applications (simulations, games, etc.).\nThe API builds upon and is largely analogous to that of the Haskell\n98 \u003ccode\u003eRandom\u003c/code\u003e module (more recently \u003ccode\u003eSystem.Random\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003ePure:\n\u003c/p\u003e\u003cpre\u003e (sample,g) = normal  myRandomGen  -- using a Random.RandomGen\n samples    = normals myRandomGen  -- infinite list\n samples2   = mkNormals 10831452   -- infinite list using a seed\n\u003c/pre\u003e\u003cp\u003eIn the IO monad:\n\u003c/p\u003e\u003cpre\u003e sample    \u003c- normalIO\n samples   \u003c- normalsIO  -- infinite list\n\u003c/pre\u003e\u003cp\u003eWith custom mean and standard deviation:\n\u003c/p\u003e\u003cpre\u003e (sample,g) = normal'    (mean,sigma) myRandomGen\n samples    = normals'   (mean,sigma) myRandomGen\n samples2   = mkNormals' (mean,sigma) 10831452\n\u003c/pre\u003e\u003cpre\u003e sample    \u003c- normalIO'  (mean,sigma)\n samples   \u003c- normalsIO' (mean,sigma)\n\u003c/pre\u003e\u003cp\u003eInternally the library uses the Box-Muller method to generate\nnormally distributed values from uniformly distributed random values.\nIf more than one sample is needed taking samples off an infinite\nlist (created by e.g. \u003ccode\u003e\u003ca\u003enormals\u003c/a\u003e\u003c/code\u003e) will be roughly twice as efficient\nas repeatedly generating individual samples with e.g. \u003ccode\u003e\u003ca\u003enormal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Normal",
          "name": "Normal",
          "package": "normaldistribution",
          "source": "src/Data-Random-Normal.html",
          "type": "module"
        },
        "index": {
          "description": "This purpose of this library is to have simple API and no dependencies beyond Haskell in order to let you produce normally distributed random values with minimum of fuss This library does not attempt to be blazingly fast nor to pass stringent tests of randomness It attempts to be very easy to install and use while being good enough for many applications simulations games etc The API builds upon and is largely analogous to that of the Haskell Random module more recently System.Random Pure sample normal myRandomGen using Random.RandomGen samples normals myRandomGen infinite list samples2 mkNormals infinite list using seed In the IO monad sample normalIO samples normalsIO infinite list With custom mean and standard deviation sample normal mean sigma myRandomGen samples normals mean sigma myRandomGen samples2 mkNormals mean sigma sample normalIO mean sigma samples normalsIO mean sigma Internally the library uses the Box-Muller method to generate normally distributed values from uniformly distributed random values If more than one sample is needed taking samples off an infinite list created by e.g normals will be roughly twice as efficient as repeatedly generating individual samples with e.g normal",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "Normal",
          "package": "normaldistribution",
          "partial": "Normal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a infinite list of normally distributed random values\n from the provided random generator seed. (In the implementation\n the seed is fed to \u003ccode\u003eRandom.mkStdGen\u003c/code\u003e to produce the random\n number generator.)\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "mkNormals",
          "package": "normaldistribution",
          "signature": "Int -\u003e [a]",
          "source": "src/Data-Random-Normal.html#mkNormals",
          "type": "function"
        },
        "index": {
          "description": "Creates infinite list of normally distributed random values from the provided random generator seed In the implementation the seed is fed to Random.mkStdGen to produce the random number generator",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "mkNormals",
          "normalized": "Int-\u003e[a]",
          "package": "normaldistribution",
          "partial": "Normals",
          "signature": "Int-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:mkNormals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003emkNormals\u003c/a\u003e\u003c/code\u003e but uses the supplied (mean, standard\n deviation).\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "mkNormals'",
          "package": "normaldistribution",
          "signature": "(a, a) -\u003e Int -\u003e [a]",
          "source": "src/Data-Random-Normal.html#mkNormals%27",
          "type": "function"
        },
        "index": {
          "description": "Analogous to mkNormals but uses the supplied mean standard deviation",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "mkNormals'",
          "normalized": "(a,a)-\u003eInt-\u003e[a]",
          "package": "normaldistribution",
          "partial": "Normals'",
          "signature": "(a,a)-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:mkNormals-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a random number generator g, and returns a random value\n normally distributed with mean 0 and standard deviation 1,\n together with a new generator. This function is analogous to\n \u003ccode\u003eRandom.random\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "normal",
          "package": "normaldistribution",
          "signature": "g -\u003e (a, g)",
          "source": "src/Data-Random-Normal.html#normal",
          "type": "function"
        },
        "index": {
          "description": "Takes random number generator and returns random value normally distributed with mean and standard deviation together with new generator This function is analogous to Random.random",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "normal",
          "normalized": "a-\u003e(b,a)",
          "package": "normaldistribution",
          "signature": "g-\u003e(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003enormal\u003c/a\u003e\u003c/code\u003e but uses the supplied (mean, standard\n deviation).\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "normal'",
          "package": "normaldistribution",
          "signature": "(a, a) -\u003e g -\u003e (a, g)",
          "source": "src/Data-Random-Normal.html#normal%27",
          "type": "function"
        },
        "index": {
          "description": "Analogous to normal but uses the supplied mean standard deviation",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "normal'",
          "normalized": "(a,a)-\u003eb-\u003e(a,b)",
          "package": "normaldistribution",
          "signature": "(a,a)-\u003eg-\u003e(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:normal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003enormal\u003c/a\u003e\u003c/code\u003e that uses the global random number\n generator. This function is analogous to \u003ccode\u003eRandom.randomIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "normalIO",
          "package": "normaldistribution",
          "signature": "IO a",
          "source": "src/Data-Random-Normal.html#normalIO",
          "type": "function"
        },
        "index": {
          "description": "variant of normal that uses the global random number generator This function is analogous to Random.randomIO",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "normalIO",
          "package": "normaldistribution",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:normalIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003enormalIO\u003c/a\u003e\u003c/code\u003e but uses the supplied (mean, standard\n deviation).\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "normalIO'",
          "package": "normaldistribution",
          "signature": "(a, a) -\u003e IO a",
          "source": "src/Data-Random-Normal.html#normalIO%27",
          "type": "function"
        },
        "index": {
          "description": "Analogous to normalIO but uses the supplied mean standard deviation",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "normalIO'",
          "normalized": "(a,a)-\u003eIO a",
          "package": "normaldistribution",
          "partial": "IO'",
          "signature": "(a,a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:normalIO-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003enormal\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator. This function\n is analogous to \u003ccode\u003eRandom.randoms\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "normals",
          "package": "normaldistribution",
          "signature": "g -\u003e [a]",
          "source": "src/Data-Random-Normal.html#normals",
          "type": "function"
        },
        "index": {
          "description": "Plural variant of normal producing an infinite list of random values instead of returning new generator This function is analogous to Random.randoms",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "normals",
          "normalized": "a-\u003e[b]",
          "package": "normaldistribution",
          "signature": "g-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:normals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003enormals\u003c/a\u003e\u003c/code\u003e but uses the supplied (mean, standard\n deviation).\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "normals'",
          "package": "normaldistribution",
          "signature": "(a, a) -\u003e g -\u003e [a]",
          "source": "src/Data-Random-Normal.html#normals%27",
          "type": "function"
        },
        "index": {
          "description": "Analogous to normals but uses the supplied mean standard deviation",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "normals'",
          "normalized": "(a,a)-\u003eb-\u003e[a]",
          "package": "normaldistribution",
          "signature": "(a,a)-\u003eg-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:normals-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a infinite list of normally distributed random values\n using the global random number generator. (In the implementation\n \u003ccode\u003eRandom.newStdGen\u003c/code\u003e is used.)\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "normalsIO",
          "package": "normaldistribution",
          "signature": "IO [a]",
          "source": "src/Data-Random-Normal.html#normalsIO",
          "type": "function"
        },
        "index": {
          "description": "Creates infinite list of normally distributed random values using the global random number generator In the implementation Random.newStdGen is used",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "normalsIO",
          "normalized": "IO[a]",
          "package": "normaldistribution",
          "partial": "IO",
          "signature": "IO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:normalsIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003enormalsIO\u003c/a\u003e\u003c/code\u003e but uses the supplied (mean, standard\n deviation).\n\u003c/p\u003e",
          "module": "Data.Random.Normal",
          "name": "normalsIO'",
          "package": "normaldistribution",
          "signature": "(a, a) -\u003e IO [a]",
          "source": "src/Data-Random-Normal.html#normalsIO%27",
          "type": "function"
        },
        "index": {
          "description": "Analogous to normalsIO but uses the supplied mean standard deviation",
          "hierarchy": "Data Random Normal",
          "module": "Data.Random.Normal",
          "name": "normalsIO'",
          "normalized": "(a,a)-\u003eIO[a]",
          "package": "normaldistribution",
          "partial": "IO'",
          "signature": "(a,a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/normaldistribution/docs/Data-Random-Normal.html#v:normalsIO-39-"
      }
    }
  ]
]