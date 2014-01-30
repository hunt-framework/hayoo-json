[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides efficient and intuitive ways\n to build and manipulate random variables of all kinds.\n\u003c/p\u003e\u003cp\u003eThe following is an example of generating combinations for a slot machine.\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Random\n import Control.Applicative\n import Control.Monad\n\n data Slot = Lemon\n           | Cherry\n           | Strawberry\n           | Orange\n           | Bar\n           | Seven\n           deriving (Enum, Show)\n\n data Combination = Combination Slot Slot Slot deriving Show\n\n fairSlot = oneOf [Lemon .. Seven]\n fairCombination = Combination \u003c$\u003e fairSlot \u003c*\u003e fairSlot \u003c*\u003e fairSlot\n\n biasedSlot = fromFreqs [Lemon `withFreq` 1,\n                         Cherry `withFreq` 1,\n                         Strawberry `withFreq` 1.2,\n                         Orange `withFreq` 1.1,\n                         Bar `withFreq` 0.9,\n                         Seven `withFreq` 0.8]\n\n biasedCombination = Combination \u003c$\u003e biasedSlot\n                                 \u003c*\u003e biasedSlot\n                                 \u003c*\u003e biasedSlot\n\n\n aTripToAMachine = do\n           combination \u003c- fromFreqs [fairCombination `withFreq` 10,\n                                     biasedCombination `withFreq` 5]\n           rounds      \u003c- inRange (5, 50)\n           replicateM rounds combination\n\n aTripToTheCasino = do\n           trips \u003c- fmap (*3) $ inRange (1, 10)\n           fmap concat $ replicateM trips aTripToAMachine\n\n main = pick aTripToTheCasino \u003e\u003e= print\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "This module provides efficient and intuitive ways to build and manipulate random variables of all kinds The following is an example of generating combinations for slot machine import Control.Monad.Random import Control.Applicative import Control.Monad data Slot Lemon Cherry Strawberry Orange Bar Seven deriving Enum Show data Combination Combination Slot Slot Slot deriving Show fairSlot oneOf Lemon Seven fairCombination Combination fairSlot fairSlot fairSlot biasedSlot fromFreqs Lemon withFreq Cherry withFreq Strawberry withFreq Orange withFreq Bar withFreq Seven withFreq biasedCombination Combination biasedSlot biasedSlot biasedSlot aTripToAMachine do combination fromFreqs fairCombination withFreq biasedCombination withFreq rounds inRange replicateM rounds combination aTripToTheCasino do trips fmap inRange fmap concat replicateM trips aTripToAMachine main pick aTripToTheCasino print",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "Random",
        "normalized": "",
        "package": "rand-vars",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#t:MonadRand",
      "description": {
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Random.html#MonadRand",
        "fct-type": "type",
        "title": "MonadRand"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "MonadRand",
        "normalized": "",
        "package": "rand-vars",
        "partial": "Monad Rand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#t:Rand",
      "description": {
        "fct-descr": "\u003cp\u003eRandom variable of \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Random.html#Rand",
        "fct-type": "newtype",
        "title": "Rand"
      },
      "index": {
        "description": "Random variable of",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "Rand",
        "normalized": "",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#t:RandPicker",
      "description": {
        "fct-descr": "\u003cp\u003eClass supporting the return of a random element.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Random.html#RandPicker",
        "fct-type": "class",
        "title": "RandPicker"
      },
      "index": {
        "description": "Class supporting the return of random element",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "RandPicker",
        "normalized": "",
        "package": "rand-vars",
        "partial": "Rand Picker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#t:RandT",
      "description": {
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Random.html#RandT",
        "fct-type": "newtype",
        "title": "RandT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "RandT",
        "normalized": "",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:Rand",
      "description": {
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "Rand",
        "fct-source": "src/Control-Monad-Random.html#Rand",
        "fct-type": "function",
        "title": "Rand"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "Rand",
        "normalized": "",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:RandT",
      "description": {
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "RandT",
        "fct-source": "src/Control-Monad-Random.html#RandT",
        "fct-type": "function",
        "title": "RandT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "RandT",
        "normalized": "",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:evalRand",
      "description": {
        "fct-descr": "\u003cp\u003eRun the random variable and returns only its value.\n  The new generator is lost.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "Rand a -\u003e g -\u003e a",
        "fct-source": "src/Control-Monad-Random.html#evalRand",
        "fct-type": "function",
        "title": "evalRand"
      },
      "index": {
        "description": "Run the random variable and returns only its value The new generator is lost",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "evalRand",
        "normalized": "Rand a-\u003eb-\u003ea",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": "Rand a-\u003eg-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:evalRandT",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eevalRand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "RandT m a -\u003e g -\u003e m a",
        "fct-source": "src/Control-Monad-Random.html#evalRandT",
        "fct-type": "function",
        "title": "evalRandT"
      },
      "index": {
        "description": "Similar to evalRand",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "evalRandT",
        "normalized": "RandT a b-\u003ec-\u003ea b",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": "RandT m a-\u003eg-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:execRand",
      "description": {
        "fct-descr": "\u003cp\u003eRun the random variable and returns only the new \u003ccode\u003eRandomGen\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "Rand a -\u003e g -\u003e g",
        "fct-source": "src/Control-Monad-Random.html#execRand",
        "fct-type": "function",
        "title": "execRand"
      },
      "index": {
        "description": "Run the random variable and returns only the new RandomGen",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "execRand",
        "normalized": "Rand a-\u003eb-\u003eb",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": "Rand a-\u003eg-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:execRandT",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eexecRand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "RandT m a -\u003e g -\u003e m g",
        "fct-source": "src/Control-Monad-Random.html#execRandT",
        "fct-type": "function",
        "title": "execRandT"
      },
      "index": {
        "description": "Similar to execRand",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "execRandT",
        "normalized": "RandT a b-\u003ec-\u003ea c",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": "RandT m a-\u003eg-\u003em g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:fromFreqs",
      "description": {
        "fct-descr": "\u003cp\u003eDistribution of elements proportionately to their indicated frequency.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "[(a, b)] -\u003e Rand a",
        "fct-source": "src/Control-Monad-Random.html#fromFreqs",
        "fct-type": "function",
        "title": "fromFreqs"
      },
      "index": {
        "description": "Distribution of elements proportionately to their indicated frequency",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "fromFreqs",
        "normalized": "[(a,b)]-\u003eRand a",
        "package": "rand-vars",
        "partial": "Freqs",
        "signature": "[(a,b)]-\u003eRand a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:inRange",
      "description": {
        "fct-descr": "\u003cp\u003eDistribution within a given range, provided by \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "(a, a) -\u003e Rand a",
        "fct-source": "src/Control-Monad-Random.html#inRange",
        "fct-type": "function",
        "title": "inRange"
      },
      "index": {
        "description": "Distribution within given range provided by randomR",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "inRange",
        "normalized": "(a,a)-\u003eRand a",
        "package": "rand-vars",
        "partial": "Range",
        "signature": "(a,a)-\u003eRand a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:oneOf",
      "description": {
        "fct-descr": "\u003cp\u003eEquiprobable distribution among the elements of the list.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "[a] -\u003e Rand a",
        "fct-source": "src/Control-Monad-Random.html#oneOf",
        "fct-type": "function",
        "title": "oneOf"
      },
      "index": {
        "description": "Equiprobable distribution among the elements of the list",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "oneOf",
        "normalized": "[a]-\u003eRand a",
        "package": "rand-vars",
        "partial": "Of",
        "signature": "[a]-\u003eRand a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:pick",
      "description": {
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "Rand a -\u003e m a",
        "fct-source": "src/Control-Monad-Random.html#pick",
        "fct-type": "method",
        "title": "pick"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "pick",
        "normalized": "Rand a-\u003eb a",
        "package": "rand-vars",
        "partial": "",
        "signature": "Rand a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:rand",
      "description": {
        "fct-descr": "\u003cp\u003eDistribution provided by \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "Rand a",
        "fct-source": "src/Control-Monad-Random.html#rand",
        "fct-type": "function",
        "title": "rand"
      },
      "index": {
        "description": "Distribution provided by random",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "rand",
        "normalized": "",
        "package": "rand-vars",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:runRand",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "g -\u003e (a, g)",
        "fct-source": "src/Control-Monad-Random.html#Rand",
        "fct-type": "function",
        "title": "runRand"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "runRand",
        "normalized": "a-\u003e(b,a)",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": "g-\u003e(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:runRandT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "g -\u003e m (a, g)",
        "fct-source": "src/Control-Monad-Random.html#RandT",
        "fct-type": "function",
        "title": "runRandT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "runRandT",
        "normalized": "a-\u003eb(c,a)",
        "package": "rand-vars",
        "partial": "Rand",
        "signature": "g-\u003em(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:withFreq",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e(,)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Random",
        "fct-package": "rand-vars",
        "fct-signature": "a -\u003e b -\u003e (a, b)",
        "fct-source": "src/Control-Monad-Random.html#withFreq",
        "fct-type": "function",
        "title": "withFreq"
      },
      "index": {
        "description": "Alias for",
        "hierarchy": "Control Monad Random",
        "module": "Control.Monad.Random",
        "name": "withFreq",
        "normalized": "a-\u003eb-\u003e(a,b)",
        "package": "rand-vars",
        "partial": "Freq",
        "signature": "a-\u003eb-\u003e(a,b)"
      }
    }
  }
]