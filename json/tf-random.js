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
        "word": "tf-random"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eTFGen\u003c/a\u003e\u003c/code\u003e generator and the alternative \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e class.\n  \u003ccode\u003e\u003ca\u003eTFGen\u003c/a\u003e\u003c/code\u003e also implements the standard \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.TF.Gen",
          "name": "Gen",
          "package": "tf-random",
          "source": "src/System-Random-TF-Gen.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the TFGen generator and the alternative RandomGen class TFGen also implements the standard RandomGen class",
          "hierarchy": "System Random TF Gen",
          "module": "System.Random.TF.Gen",
          "name": "Gen",
          "package": "tf-random",
          "partial": "Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e class with a modified \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e operation, and added \u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003elevel\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e\u003cp\u003eUsing the generator requires that no more than one operation is called\n on the same generator state, as the implementation does not guarantee pseudorandomness\n otherwise. As an exception, calling \u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e many times on the same generator state is\n allowed as long as the 'bits' argument is the same for all the calls.\n\u003c/p\u003e",
          "module": "System.Random.TF.Gen",
          "name": "RandomGen",
          "package": "tf-random",
          "source": "src/System-Random-TF-Gen.html#RandomGen",
          "type": "class"
        },
        "index": {
          "description": "Alternative RandomGen class with modified next operation and added splitn and level operations Using the generator requires that no more than one operation is called on the same generator state as the implementation does not guarantee pseudorandomness otherwise As an exception calling splitn many times on the same generator state is allowed as long as the bits argument is the same for all the calls",
          "hierarchy": "System Random TF Gen",
          "module": "System.Random.TF.Gen",
          "name": "RandomGen",
          "package": "tf-random",
          "partial": "Random Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#t:RandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generator type\n\u003c/p\u003e",
          "module": "System.Random.TF.Gen",
          "name": "TFGen",
          "package": "tf-random",
          "source": "src/System-Random-TF-Gen.html#TFGen",
          "type": "data"
        },
        "index": {
          "description": "The generator type",
          "hierarchy": "System Random TF Gen",
          "module": "System.Random.TF.Gen",
          "name": "TFGen",
          "package": "tf-random",
          "partial": "TFGen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#t:TFGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elevel\u003c/a\u003e\u003c/code\u003e is a 'hint' operation that may cause an iteration of work\n of the generator be performed prematurely in order to\n prevent the subsequent operations from being expensive. It is meant to be\n called before a \u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e operation, which is expected to be evaluated\n a very large number indices. Calling \u003ccode\u003e\u003ca\u003elevel\u003c/a\u003e\u003c/code\u003e in such case might decrease\n the total amount of work performed.\n\u003c/p\u003e",
          "module": "System.Random.TF.Gen",
          "name": "level",
          "package": "tf-random",
          "signature": "g -\u003e g",
          "source": "src/System-Random-TF-Gen.html#level",
          "type": "method"
        },
        "index": {
          "description": "level is hint operation that may cause an iteration of work of the generator be performed prematurely in order to prevent the subsequent operations from being expensive It is meant to be called before splitn operation which is expected to be evaluated very large number indices Calling level in such case might decrease the total amount of work performed",
          "hierarchy": "System Random TF Gen",
          "module": "System.Random.TF.Gen",
          "name": "level",
          "normalized": "a-\u003ea",
          "package": "tf-random",
          "signature": "g-\u003eg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:level"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e that appears to have been chosen uniformly at random, and a \n new generator state.\n\u003c/p\u003e",
          "module": "System.Random.TF.Gen",
          "name": "next",
          "package": "tf-random",
          "signature": "g -\u003e (Word32, g)",
          "source": "src/System-Random-TF-Gen.html#next",
          "type": "method"
        },
        "index": {
          "description": "next returns Word32 that appears to have been chosen uniformly at random and new generator state",
          "hierarchy": "System Random TF Gen",
          "module": "System.Random.TF.Gen",
          "name": "next",
          "normalized": "a-\u003e(Word,a)",
          "package": "tf-random",
          "signature": "g-\u003e(Word,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a generator from a random seed.\n\u003c/p\u003e",
          "module": "System.Random.TF.Gen",
          "name": "seedTFGen",
          "package": "tf-random",
          "signature": "(Word64, Word64, Word64, Word64) -\u003e TFGen",
          "source": "src/System-Random-TF-Gen.html#seedTFGen",
          "type": "function"
        },
        "index": {
          "description": "Create generator from random seed",
          "hierarchy": "System Random TF Gen",
          "module": "System.Random.TF.Gen",
          "name": "seedTFGen",
          "normalized": "(Word,Word,Word,Word)-\u003eTFGen",
          "package": "tf-random",
          "partial": "TFGen",
          "signature": "(Word,Word,Word,Word)-\u003eTFGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:seedTFGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e returns two derived generator states that appear to be independent pseudorandom\n number generators.\n\u003c/p\u003e",
          "module": "System.Random.TF.Gen",
          "name": "split",
          "package": "tf-random",
          "signature": "g -\u003e (g, g)",
          "source": "src/System-Random-TF-Gen.html#split",
          "type": "method"
        },
        "index": {
          "description": "split returns two derived generator states that appear to be independent pseudorandom number generators",
          "hierarchy": "System Random TF Gen",
          "module": "System.Random.TF.Gen",
          "name": "split",
          "normalized": "a-\u003e(a,a)",
          "package": "tf-random",
          "signature": "g-\u003e(g,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e is the n-way split operation used to create many derived generator states\n in one go. Application of \u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e to two first arguments should be shared between\n different applications of the index argument to avoid unnecessary repeated computations.\n\u003c/p\u003e\u003cp\u003eThe following code creates ten 'independent' generator states. Number '4' comes\n from the fact that at least\n four bits are needed to encode ten different indices.\n\u003c/p\u003e\u003cpre\u003e\n    f :: RandomGen g =\u003e g -\u003e [g]\n    f r = map (splitn r 4) [0..9]\n\u003c/pre\u003e",
          "module": "System.Random.TF.Gen",
          "name": "splitn",
          "package": "tf-random",
          "signature": "splitn",
          "source": "src/System-Random-TF-Gen.html#splitn",
          "type": "method"
        },
        "index": {
          "description": "splitn is the n-way split operation used to create many derived generator states in one go Application of splitn to two first arguments should be shared between different applications of the index argument to avoid unnecessary repeated computations The following code creates ten independent generator states Number comes from the fact that at least four bits are needed to encode ten different indices RandomGen map splitn",
          "hierarchy": "System Random TF Gen",
          "module": "System.Random.TF.Gen",
          "name": "splitn",
          "package": "tf-random",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:splitn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.TF.Init",
          "name": "Init",
          "package": "tf-random",
          "source": "src/System-Random-TF-Init.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Random TF Init",
          "module": "System.Random.TF.Init",
          "name": "Init",
          "package": "tf-random",
          "partial": "Init",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Init.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse system time create the random seed.\n This method of seeding may not be relible.\n\u003c/p\u003e",
          "module": "System.Random.TF.Init",
          "name": "mkSeedTime",
          "package": "tf-random",
          "signature": "IO (Word64, Word64, Word64, Word64)",
          "source": "src/System-Random-TF-Init.html#mkSeedTime",
          "type": "function"
        },
        "index": {
          "description": "Use system time create the random seed This method of seeding may not be relible",
          "hierarchy": "System Random TF Init",
          "module": "System.Random.TF.Init",
          "name": "mkSeedTime",
          "normalized": "IO(Word,Word,Word,Word)",
          "package": "tf-random",
          "partial": "Seed Time",
          "signature": "IO(Word,Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Init.html#v:mkSeedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the UNIX special file \u003ccode\u003e/dev/urandom\u003c/code\u003e to create the seed.\n Inspired by \u003ccode\u003erandom-mwc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.TF.Init",
          "name": "mkSeedUnix",
          "package": "tf-random",
          "signature": "IO (Word64, Word64, Word64, Word64)",
          "source": "src/System-Random-TF-Init.html#mkSeedUnix",
          "type": "function"
        },
        "index": {
          "description": "Use the UNIX special file dev urandom to create the seed Inspired by random-mwc",
          "hierarchy": "System Random TF Init",
          "module": "System.Random.TF.Init",
          "name": "mkSeedUnix",
          "normalized": "IO(Word,Word,Word,Word)",
          "package": "tf-random",
          "partial": "Seed Unix",
          "signature": "IO(Word,Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Init.html#v:mkSeedUnix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines alternative \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e instances for\n common integral types, which make use of \n the \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e class from \u003ca\u003eSystem.Random.TF.Gen\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.TF.Instances",
          "name": "Instances",
          "package": "tf-random",
          "source": "src/System-Random-TF-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines alternative Random instances for common integral types which make use of the RandomGen class from System.Random.TF.Gen",
          "hierarchy": "System Random TF Instances",
          "module": "System.Random.TF.Instances",
          "name": "Instances",
          "package": "tf-random",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.TF.Instances",
          "name": "Random",
          "package": "tf-random",
          "source": "src/System-Random-TF-Instances.html#Random",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Random TF Instances",
          "module": "System.Random.TF.Instances",
          "name": "Random",
          "package": "tf-random",
          "partial": "Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#t:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.TF.Instances",
          "name": "random",
          "package": "tf-random",
          "signature": "g -\u003e (a, g)",
          "source": "src/System-Random-TF-Instances.html#random",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Random TF Instances",
          "module": "System.Random.TF.Instances",
          "name": "random",
          "normalized": "a-\u003e(b,a)",
          "package": "tf-random",
          "signature": "g-\u003e(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.TF.Instances",
          "name": "randomR",
          "package": "tf-random",
          "signature": "(a, a) -\u003e g -\u003e (a, g)",
          "source": "src/System-Random-TF-Instances.html#randomR",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Random TF Instances",
          "module": "System.Random.TF.Instances",
          "name": "randomR",
          "normalized": "(a,a)-\u003eb-\u003e(a,b)",
          "package": "tf-random",
          "signature": "(a,a)-\u003eg-\u003e(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#v:randomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.TF.Instances",
          "name": "randomRs",
          "package": "tf-random",
          "signature": "(a, a) -\u003e g -\u003e [a]",
          "source": "src/System-Random-TF-Instances.html#randomRs",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Random TF Instances",
          "module": "System.Random.TF.Instances",
          "name": "randomRs",
          "normalized": "(a,a)-\u003eb-\u003e[a]",
          "package": "tf-random",
          "partial": "Rs",
          "signature": "(a,a)-\u003eg-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#v:randomRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.TF.Instances",
          "name": "randoms",
          "package": "tf-random",
          "signature": "g -\u003e [a]",
          "source": "src/System-Random-TF-Instances.html#randoms",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Random TF Instances",
          "module": "System.Random.TF.Instances",
          "name": "randoms",
          "normalized": "a-\u003e[b]",
          "package": "tf-random",
          "signature": "g-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#v:randoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports \u003ca\u003eSystem.Random.TF.Gen\u003c/a\u003e and \u003ca\u003eSystem.Random.TF.Init\u003c/a\u003e\n modules without exporting the alternative \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e\n class from \u003ca\u003eSystem.Random.TF.Gen\u003c/a\u003e. To use this class and the \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e\n instances written for it, please import \u003ca\u003eSystem.Random.TF.Gen\u003c/a\u003e and \u003ca\u003eSystem.Random.TF.Instances\u003c/a\u003e\n directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.TF",
          "name": "TF",
          "package": "tf-random",
          "source": "src/System-Random-TF.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports System.Random.TF.Gen and System.Random.TF.Init modules without exporting the alternative RandomGen class from System.Random.TF.Gen To use this class and the Random instances written for it please import System.Random.TF.Gen and System.Random.TF.Instances directly",
          "hierarchy": "System Random TF",
          "module": "System.Random.TF",
          "name": "TF",
          "package": "tf-random",
          "partial": "TF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF.html#"
      }
    }
  ]
]