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
        "word": "mersenne-random"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 6.8.2\n\u003c/p\u003e\u003cp\u003eGenerate pseudo-random numbers using the SIMD-oriented Fast Mersenne Twister(SFMT)\n pseudorandom number generator. This is a \u003cem\u003emuch\u003c/em\u003e faster generator than\n the default \u003ccode\u003eSystem.Random\u003c/code\u003e generator for Haskell (~50x faster\n generation for Doubles, on a core 2 duo), however, it is not \n nearly as flexible.\n\u003c/p\u003e\u003cp\u003eThis library may be compiled with the '-f use_sse2' or '-f\n use_altivec' flags to configure, on intel and powerpc machines\n respectively, to enable high performance vector instructions to be used.\n This typically results in a 2-3x speedup in generation time.\n\u003c/p\u003e\u003cp\u003eThis will work for newer intel chips such as Pentium 4s, and Core, Core2* chips.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.Mersenne",
          "name": "Mersenne",
          "package": "mersenne-random",
          "source": "src/System-Random-Mersenne.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC Generate pseudo-random numbers using the SIMD-oriented Fast Mersenne Twister SFMT pseudorandom number generator This is much faster generator than the default System.Random generator for Haskell faster generation for Doubles on core duo however it is not nearly as flexible This library may be compiled with the use sse2 or use altivec flags to configure on intel and powerpc machines respectively to enable high performance vector instructions to be used This typically results in speedup in generation time This will work for newer intel chips such as Pentium and Core Core2 chips",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "Mersenne",
          "package": "mersenne-random",
          "partial": "Mersenne",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single, global SIMD fast mersenne twister random number generator\n This generator is evidence that you have initialised the generator,\n\u003c/p\u003e",
          "module": "System.Random.Mersenne",
          "name": "MTGen",
          "package": "mersenne-random",
          "source": "src/System-Random-Mersenne.html#MTGen",
          "type": "data"
        },
        "index": {
          "description": "single global SIMD fast mersenne twister random number generator This generator is evidence that you have initialised the generator",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "MTGen",
          "package": "mersenne-random",
          "partial": "MTGen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#t:MTGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an initialised SFMT generator, the MTRandom\n allows the programmer to extract values of a variety of \n types.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne",
          "name": "MTRandom",
          "package": "mersenne-random",
          "source": "src/System-Random-Mersenne.html#MTRandom",
          "type": "class"
        },
        "index": {
          "description": "Given an initialised SFMT generator the MTRandom allows the programmer to extract values of variety of types Minimal complete definition random",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "MTRandom",
          "package": "mersenne-random",
          "partial": "MTRandom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#t:MTRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the global random number generator.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne",
          "name": "getStdGen",
          "package": "mersenne-random",
          "signature": "IO MTGen",
          "source": "src/System-Random-Mersenne.html#getStdGen",
          "type": "function"
        },
        "index": {
          "description": "Gets the global random number generator",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "getStdGen",
          "package": "mersenne-random",
          "partial": "Std Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#v:getStdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the supplied function to get a value from the current global\n random generator, and updates the global generator with the new\n generator returned by the function. For example, \u003ccode\u003erollDice\u003c/code\u003e gets a\n random integer between 1 and 6:\n\u003c/p\u003e\u003cpre\u003e  rollDice :: IO Int\n  rollDice = getMTRandom (randomR (1,6))\n\u003c/pre\u003e",
          "module": "System.Random.Mersenne",
          "name": "getStdRandom",
          "package": "mersenne-random",
          "signature": "(MTGen -\u003e IO a) -\u003e IO a",
          "source": "src/System-Random-Mersenne.html#getStdRandom",
          "type": "function"
        },
        "index": {
          "description": "Uses the supplied function to get value from the current global random generator and updates the global generator with the new generator returned by the function For example rollDice gets random integer between and rollDice IO Int rollDice getMTRandom randomR",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "getStdRandom",
          "normalized": "(MTGen-\u003eIO a)-\u003eIO a",
          "package": "mersenne-random",
          "partial": "Std Random",
          "signature": "(MTGen-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#v:getStdRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an initialised SIMD Fast Mersenne Twister.\n The generator is initialised based on the clock time, if Nothing\n is passed as a seed. For deterministic behaviour, pass an explicit seed.\n\u003c/p\u003e\u003cp\u003eDue to the current SFMT library being vastly impure, currently only a single\n generator is allowed per-program. Attempts to reinitialise it will fail.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne",
          "name": "newMTGen",
          "package": "mersenne-random",
          "signature": "Maybe Word32 -\u003e IO MTGen",
          "source": "src/System-Random-Mersenne.html#newMTGen",
          "type": "function"
        },
        "index": {
          "description": "Return an initialised SIMD Fast Mersenne Twister The generator is initialised based on the clock time if Nothing is passed as seed For deterministic behaviour pass an explicit seed Due to the current SFMT library being vastly impure currently only single generator is allowed per-program Attempts to reinitialise it will fail",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "newMTGen",
          "normalized": "Maybe Word-\u003eIO MTGen",
          "package": "mersenne-random",
          "partial": "MTGen",
          "signature": "Maybe Word-\u003eIO MTGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#v:newMTGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003erandomR\u003c/code\u003e, but using a default range determined by the type:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For bounded types (instances of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e),\n   the range is normally the whole type.\n\u003c/li\u003e\u003cli\u003e For fractional types, the range is normally the semi-closed interval\n \u003ccode\u003e[0,1)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, the range is (arbitrarily) the range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Random.Mersenne",
          "name": "random",
          "package": "mersenne-random",
          "signature": "MTGen -\u003e IO a",
          "source": "src/System-Random-Mersenne.html#random",
          "type": "method"
        },
        "index": {
          "description": "The same as randomR but using default range determined by the type For bounded types instances of Bounded such as Char the range is normally the whole type For fractional types the range is normally the semi-closed interval For Integer the range is arbitrarily the range of Int",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "random",
          "normalized": "MTGen-\u003eIO a",
          "package": "mersenne-random",
          "signature": "MTGen-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e that uses the global random number generator\n (see \u003ca\u003eSystem.Random\u003c/a\u003e).\n Essentially a convenience function if you're already in IO.\n\u003c/p\u003e\u003cp\u003eNote that there are performance penalties calling randomIO in an\n inner loop, rather than \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e applied to a global generator. The\n cost comes in retrieving the random gen from an IORef, which is\n non-trivial. Expect a 3x slow down in speed of random generation.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne",
          "name": "randomIO",
          "package": "mersenne-random",
          "signature": "IO a",
          "source": "src/System-Random-Mersenne.html#randomIO",
          "type": "method"
        },
        "index": {
          "description": "variant of random that uses the global random number generator see System.Random Essentially convenience function if you re already in IO Note that there are performance penalties calling randomIO in an inner loop rather than random applied to global generator The cost comes in retrieving the random gen from an IORef which is non-trivial Expect slow down in speed of random generation",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "randomIO",
          "package": "mersenne-random",
          "partial": "IO",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#v:randomIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne",
          "name": "randoms",
          "package": "mersenne-random",
          "signature": "MTGen -\u003e IO [a]",
          "source": "src/System-Random-Mersenne.html#randoms",
          "type": "method"
        },
        "index": {
          "description": "Plural variant of random producing an infinite list of random values instead of returning new generator",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "randoms",
          "normalized": "MTGen-\u003eIO[a]",
          "package": "mersenne-random",
          "signature": "MTGen-\u003eIO[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#v:randoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the global random number generator.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne",
          "name": "setStdGen",
          "package": "mersenne-random",
          "signature": "MTGen -\u003e IO ()",
          "source": "src/System-Random-Mersenne.html#setStdGen",
          "type": "function"
        },
        "index": {
          "description": "Sets the global random number generator",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "setStdGen",
          "normalized": "MTGen-\u003eIO()",
          "package": "mersenne-random",
          "partial": "Std Gen",
          "signature": "MTGen-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#v:setStdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the identification string for the SMFT version. \n The string shows the word size, the Mersenne exponent, and all parameters of this generator.\n\u003c/p\u003e",
          "module": "System.Random.Mersenne",
          "name": "version",
          "package": "mersenne-random",
          "signature": "String",
          "source": "src/System-Random-Mersenne.html#version",
          "type": "function"
        },
        "index": {
          "description": "Returns the identification string for the SMFT version The string shows the word size the Mersenne exponent and all parameters of this generator",
          "hierarchy": "System Random Mersenne",
          "module": "System.Random.Mersenne",
          "name": "version",
          "package": "mersenne-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mersenne-random/docs/System-Random-Mersenne.html#v:version"
      }
    }
  ]
]