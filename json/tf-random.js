[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eTFGen\u003c/a\u003e\u003c/code\u003e generator and the alternative \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e class.\n  \u003ccode\u003e\u003ca\u003eTFGen\u003c/a\u003e\u003c/code\u003e also implements the standard \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Random.TF.Gen",
        "fct-package": "tf-random",
        "fct-signature": "module",
        "fct-source": "src/System-Random-TF-Gen.html",
        "fct-type": "module",
        "title": "Gen"
      },
      "index": {
        "description": "This module provides the TFGen generator and the alternative RandomGen class TFGen also implements the standard RandomGen class",
        "hierarchy": "System Random TF Gen",
        "module": "System.Random.TF.Gen",
        "name": "Gen",
        "normalized": "",
        "package": "tf-random",
        "partial": "Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#t:RandomGen",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e class with a modified \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e operation, and added \u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003elevel\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e\u003cp\u003eUsing the generator requires that no more than one operation is called\n on the same generator state, as the implementation does not guarantee pseudorandomness\n otherwise. As an exception, calling \u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e many times on the same generator state is\n allowed as long as the 'bits' argument is the same for all the calls.\n\u003c/p\u003e",
        "fct-module": "System.Random.TF.Gen",
        "fct-package": "tf-random",
        "fct-signature": "class",
        "fct-source": "src/System-Random-TF-Gen.html#RandomGen",
        "fct-type": "class",
        "title": "RandomGen"
      },
      "index": {
        "description": "Alternative RandomGen class with modified next operation and added splitn and level operations Using the generator requires that no more than one operation is called on the same generator state as the implementation does not guarantee pseudorandomness otherwise As an exception calling splitn many times on the same generator state is allowed as long as the bits argument is the same for all the calls",
        "hierarchy": "System Random TF Gen",
        "module": "System.Random.TF.Gen",
        "name": "RandomGen",
        "normalized": "",
        "package": "tf-random",
        "partial": "Random Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#t:TFGen",
      "description": {
        "fct-descr": "\u003cp\u003eThe generator type\n\u003c/p\u003e",
        "fct-module": "System.Random.TF.Gen",
        "fct-package": "tf-random",
        "fct-signature": "data",
        "fct-source": "src/System-Random-TF-Gen.html#TFGen",
        "fct-type": "data",
        "title": "TFGen"
      },
      "index": {
        "description": "The generator type",
        "hierarchy": "System Random TF Gen",
        "module": "System.Random.TF.Gen",
        "name": "TFGen",
        "normalized": "",
        "package": "tf-random",
        "partial": "TFGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:level",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elevel\u003c/a\u003e\u003c/code\u003e is a 'hint' operation that may cause an iteration of work\n of the generator be performed prematurely in order to\n prevent the subsequent operations from being expensive. It is meant to be\n called before a \u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e operation, which is expected to be evaluated\n a very large number indices. Calling \u003ccode\u003e\u003ca\u003elevel\u003c/a\u003e\u003c/code\u003e in such case might decrease\n the total amount of work performed.\n\u003c/p\u003e",
        "fct-module": "System.Random.TF.Gen",
        "fct-package": "tf-random",
        "fct-signature": "g -\u003e g",
        "fct-source": "src/System-Random-TF-Gen.html#level",
        "fct-type": "method",
        "title": "level"
      },
      "index": {
        "description": "level is hint operation that may cause an iteration of work of the generator be performed prematurely in order to prevent the subsequent operations from being expensive It is meant to be called before splitn operation which is expected to be evaluated very large number indices Calling level in such case might decrease the total amount of work performed",
        "hierarchy": "System Random TF Gen",
        "module": "System.Random.TF.Gen",
        "name": "level",
        "normalized": "a-\u003ea",
        "package": "tf-random",
        "partial": "",
        "signature": "g-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e that appears to have been chosen uniformly at random, and a \n new generator state.\n\u003c/p\u003e",
        "fct-module": "System.Random.TF.Gen",
        "fct-package": "tf-random",
        "fct-signature": "g -\u003e (Word32, g)",
        "fct-source": "src/System-Random-TF-Gen.html#next",
        "fct-type": "method",
        "title": "next"
      },
      "index": {
        "description": "next returns Word32 that appears to have been chosen uniformly at random and new generator state",
        "hierarchy": "System Random TF Gen",
        "module": "System.Random.TF.Gen",
        "name": "next",
        "normalized": "a-\u003e(Word,a)",
        "package": "tf-random",
        "partial": "",
        "signature": "g-\u003e(Word,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:seedTFGen",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a generator from a random seed.\n\u003c/p\u003e",
        "fct-module": "System.Random.TF.Gen",
        "fct-package": "tf-random",
        "fct-signature": "(Word64, Word64, Word64, Word64) -\u003e TFGen",
        "fct-source": "src/System-Random-TF-Gen.html#seedTFGen",
        "fct-type": "function",
        "title": "seedTFGen"
      },
      "index": {
        "description": "Create generator from random seed",
        "hierarchy": "System Random TF Gen",
        "module": "System.Random.TF.Gen",
        "name": "seedTFGen",
        "normalized": "(Word,Word,Word,Word)-\u003eTFGen",
        "package": "tf-random",
        "partial": "TFGen",
        "signature": "(Word,Word,Word,Word)-\u003eTFGen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e returns two derived generator states that appear to be independent pseudorandom\n number generators.\n\u003c/p\u003e",
        "fct-module": "System.Random.TF.Gen",
        "fct-package": "tf-random",
        "fct-signature": "g -\u003e (g, g)",
        "fct-source": "src/System-Random-TF-Gen.html#split",
        "fct-type": "method",
        "title": "split"
      },
      "index": {
        "description": "split returns two derived generator states that appear to be independent pseudorandom number generators",
        "hierarchy": "System Random TF Gen",
        "module": "System.Random.TF.Gen",
        "name": "split",
        "normalized": "a-\u003e(a,a)",
        "package": "tf-random",
        "partial": "",
        "signature": "g-\u003e(g,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Gen.html#v:splitn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e is the n-way split operation used to create many derived generator states\n in one go. Application of \u003ccode\u003e\u003ca\u003esplitn\u003c/a\u003e\u003c/code\u003e to two first arguments should be shared between\n different applications of the index argument to avoid unnecessary repeated computations.\n\u003c/p\u003e\u003cp\u003eThe following code creates ten 'independent' generator states. Number '4' comes\n from the fact that at least\n four bits are needed to encode ten different indices.\n\u003c/p\u003e\u003cpre\u003e\n    f :: RandomGen g =\u003e g -\u003e [g]\n    f r = map (splitn r 4) [0..9]\n\u003c/pre\u003e",
        "fct-module": "System.Random.TF.Gen",
        "fct-package": "tf-random",
        "fct-signature": "splitn",
        "fct-source": "src/System-Random-TF-Gen.html#splitn",
        "fct-type": "method",
        "title": "splitn"
      },
      "index": {
        "description": "splitn is the n-way split operation used to create many derived generator states in one go Application of splitn to two first arguments should be shared between different applications of the index argument to avoid unnecessary repeated computations The following code creates ten independent generator states Number comes from the fact that at least four bits are needed to encode ten different indices RandomGen map splitn",
        "hierarchy": "System Random TF Gen",
        "module": "System.Random.TF.Gen",
        "name": "splitn",
        "normalized": "",
        "package": "tf-random",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Init.html#",
      "description": {
        "fct-module": "System.Random.TF.Init",
        "fct-package": "tf-random",
        "fct-signature": "module",
        "fct-source": "src/System-Random-TF-Init.html",
        "fct-type": "module",
        "title": "Init"
      },
      "index": {
        "description": "",
        "hierarchy": "System Random TF Init",
        "module": "System.Random.TF.Init",
        "name": "Init",
        "normalized": "",
        "package": "tf-random",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Init.html#v:mkSeedTime",
      "description": {
        "fct-descr": "\u003cp\u003eUse system time create the random seed.\n This method of seeding may not be relible.\n\u003c/p\u003e",
        "fct-module": "System.Random.TF.Init",
        "fct-package": "tf-random",
        "fct-signature": "IO (Word64, Word64, Word64, Word64)",
        "fct-source": "src/System-Random-TF-Init.html#mkSeedTime",
        "fct-type": "function",
        "title": "mkSeedTime"
      },
      "index": {
        "description": "Use system time create the random seed This method of seeding may not be relible",
        "hierarchy": "System Random TF Init",
        "module": "System.Random.TF.Init",
        "name": "mkSeedTime",
        "normalized": "IO(Word,Word,Word,Word)",
        "package": "tf-random",
        "partial": "Seed Time",
        "signature": "IO(Word,Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Init.html#v:mkSeedUnix",
      "description": {
        "fct-descr": "\u003cp\u003eUse the UNIX special file \u003ccode\u003e/dev/urandom\u003c/code\u003e to create the seed.\n Inspired by \u003ccode\u003erandom-mwc\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Random.TF.Init",
        "fct-package": "tf-random",
        "fct-signature": "IO (Word64, Word64, Word64, Word64)",
        "fct-source": "src/System-Random-TF-Init.html#mkSeedUnix",
        "fct-type": "function",
        "title": "mkSeedUnix"
      },
      "index": {
        "description": "Use the UNIX special file dev urandom to create the seed Inspired by random-mwc",
        "hierarchy": "System Random TF Init",
        "module": "System.Random.TF.Init",
        "name": "mkSeedUnix",
        "normalized": "IO(Word,Word,Word,Word)",
        "package": "tf-random",
        "partial": "Seed Unix",
        "signature": "IO(Word,Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines alternative \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e instances for\n common integral types, which make use of \n the \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e class from \u003ca\u003eSystem.Random.TF.Gen\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Random.TF.Instances",
        "fct-package": "tf-random",
        "fct-signature": "module",
        "fct-source": "src/System-Random-TF-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "This module defines alternative Random instances for common integral types which make use of the RandomGen class from System.Random.TF.Gen",
        "hierarchy": "System Random TF Instances",
        "module": "System.Random.TF.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "tf-random",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#t:Random",
      "description": {
        "fct-module": "System.Random.TF.Instances",
        "fct-package": "tf-random",
        "fct-signature": "class",
        "fct-source": "src/System-Random-TF-Instances.html#Random",
        "fct-type": "class",
        "title": "Random"
      },
      "index": {
        "description": "",
        "hierarchy": "System Random TF Instances",
        "module": "System.Random.TF.Instances",
        "name": "Random",
        "normalized": "",
        "package": "tf-random",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#v:random",
      "description": {
        "fct-module": "System.Random.TF.Instances",
        "fct-package": "tf-random",
        "fct-signature": "g -\u003e (a, g)",
        "fct-source": "src/System-Random-TF-Instances.html#random",
        "fct-type": "method",
        "title": "random"
      },
      "index": {
        "description": "",
        "hierarchy": "System Random TF Instances",
        "module": "System.Random.TF.Instances",
        "name": "random",
        "normalized": "a-\u003e(b,a)",
        "package": "tf-random",
        "partial": "",
        "signature": "g-\u003e(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#v:randomR",
      "description": {
        "fct-module": "System.Random.TF.Instances",
        "fct-package": "tf-random",
        "fct-signature": "(a, a) -\u003e g -\u003e (a, g)",
        "fct-source": "src/System-Random-TF-Instances.html#randomR",
        "fct-type": "method",
        "title": "randomR"
      },
      "index": {
        "description": "",
        "hierarchy": "System Random TF Instances",
        "module": "System.Random.TF.Instances",
        "name": "randomR",
        "normalized": "(a,a)-\u003eb-\u003e(a,b)",
        "package": "tf-random",
        "partial": "",
        "signature": "(a,a)-\u003eg-\u003e(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#v:randomRs",
      "description": {
        "fct-module": "System.Random.TF.Instances",
        "fct-package": "tf-random",
        "fct-signature": "(a, a) -\u003e g -\u003e [a]",
        "fct-source": "src/System-Random-TF-Instances.html#randomRs",
        "fct-type": "method",
        "title": "randomRs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Random TF Instances",
        "module": "System.Random.TF.Instances",
        "name": "randomRs",
        "normalized": "(a,a)-\u003eb-\u003e[a]",
        "package": "tf-random",
        "partial": "Rs",
        "signature": "(a,a)-\u003eg-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF-Instances.html#v:randoms",
      "description": {
        "fct-module": "System.Random.TF.Instances",
        "fct-package": "tf-random",
        "fct-signature": "g -\u003e [a]",
        "fct-source": "src/System-Random-TF-Instances.html#randoms",
        "fct-type": "method",
        "title": "randoms"
      },
      "index": {
        "description": "",
        "hierarchy": "System Random TF Instances",
        "module": "System.Random.TF.Instances",
        "name": "randoms",
        "normalized": "a-\u003e[b]",
        "package": "tf-random",
        "partial": "",
        "signature": "g-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tf-random/docs/System-Random-TF.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports \u003ca\u003eSystem.Random.TF.Gen\u003c/a\u003e and \u003ca\u003eSystem.Random.TF.Init\u003c/a\u003e\n modules without exporting the alternative \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e\n class from \u003ca\u003eSystem.Random.TF.Gen\u003c/a\u003e. To use this class and the \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e\n instances written for it, please import \u003ca\u003eSystem.Random.TF.Gen\u003c/a\u003e and \u003ca\u003eSystem.Random.TF.Instances\u003c/a\u003e\n directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Random.TF",
        "fct-package": "tf-random",
        "fct-signature": "module",
        "fct-source": "src/System-Random-TF.html",
        "fct-type": "module",
        "title": "TF"
      },
      "index": {
        "description": "This module exports System.Random.TF.Gen and System.Random.TF.Init modules without exporting the alternative RandomGen class from System.Random.TF.Gen To use this class and the Random instances written for it please import System.Random.TF.Gen and System.Random.TF.Instances directly",
        "hierarchy": "System Random TF",
        "module": "System.Random.TF",
        "name": "TF",
        "normalized": "",
        "package": "tf-random",
        "partial": "TF",
        "signature": ""
      }
    }
  }
]