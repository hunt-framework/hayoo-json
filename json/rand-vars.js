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
        "word": "rand-vars"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides efficient and intuitive ways\n to build and manipulate random variables of all kinds.\n\u003c/p\u003e\u003cp\u003eThe following is an example of generating combinations for a slot machine.\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Random\n import Control.Applicative\n import Control.Monad\n\n data Slot = Lemon\n           | Cherry\n           | Strawberry\n           | Orange\n           | Bar\n           | Seven\n           deriving (Enum, Show)\n\n data Combination = Combination Slot Slot Slot deriving Show\n\n fairSlot = oneOf [Lemon .. Seven]\n fairCombination = Combination \u003c$\u003e fairSlot \u003c*\u003e fairSlot \u003c*\u003e fairSlot\n\n biasedSlot = fromFreqs [Lemon `withFreq` 1,\n                         Cherry `withFreq` 1,\n                         Strawberry `withFreq` 1.2,\n                         Orange `withFreq` 1.1,\n                         Bar `withFreq` 0.9,\n                         Seven `withFreq` 0.8]\n\n biasedCombination = Combination \u003c$\u003e biasedSlot\n                                 \u003c*\u003e biasedSlot\n                                 \u003c*\u003e biasedSlot\n\n\n aTripToAMachine = do\n           combination \u003c- fromFreqs [fairCombination `withFreq` 10,\n                                     biasedCombination `withFreq` 5]\n           rounds      \u003c- inRange (5, 50)\n           replicateM rounds combination\n\n aTripToTheCasino = do\n           trips \u003c- fmap (*3) $ inRange (1, 10)\n           fmap concat $ replicateM trips aTripToAMachine\n\n main = pick aTripToTheCasino \u003e\u003e= print\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Monad.Random",
          "name": "Random",
          "package": "rand-vars",
          "source": "src/Control-Monad-Random.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides efficient and intuitive ways to build and manipulate random variables of all kinds The following is an example of generating combinations for slot machine import Control.Monad.Random import Control.Applicative import Control.Monad data Slot Lemon Cherry Strawberry Orange Bar Seven deriving Enum Show data Combination Combination Slot Slot Slot deriving Show fairSlot oneOf Lemon Seven fairCombination Combination fairSlot fairSlot fairSlot biasedSlot fromFreqs Lemon withFreq Cherry withFreq Strawberry withFreq Orange withFreq Bar withFreq Seven withFreq biasedCombination Combination biasedSlot biasedSlot biasedSlot aTripToAMachine do combination fromFreqs fairCombination withFreq biasedCombination withFreq rounds inRange replicateM rounds combination aTripToTheCasino do trips fmap inRange fmap concat replicateM trips aTripToAMachine main pick aTripToTheCasino print",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "Random",
          "package": "rand-vars",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Random",
          "name": "MonadRand",
          "package": "rand-vars",
          "source": "src/Control-Monad-Random.html#MonadRand",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "MonadRand",
          "package": "rand-vars",
          "partial": "Monad Rand",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#t:MonadRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom variable of \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "Rand",
          "package": "rand-vars",
          "source": "src/Control-Monad-Random.html#Rand",
          "type": "newtype"
        },
        "index": {
          "description": "Random variable of",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "Rand",
          "package": "rand-vars",
          "partial": "Rand",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#t:Rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass supporting the return of a random element.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "RandPicker",
          "package": "rand-vars",
          "source": "src/Control-Monad-Random.html#RandPicker",
          "type": "class"
        },
        "index": {
          "description": "Class supporting the return of random element",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "RandPicker",
          "package": "rand-vars",
          "partial": "Rand Picker",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#t:RandPicker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Random",
          "name": "RandT",
          "package": "rand-vars",
          "source": "src/Control-Monad-Random.html#RandT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "RandT",
          "package": "rand-vars",
          "partial": "Rand",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#t:RandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Random",
          "name": "Rand",
          "package": "rand-vars",
          "signature": "Rand",
          "source": "src/Control-Monad-Random.html#Rand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "Rand",
          "package": "rand-vars",
          "partial": "Rand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:Rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Random",
          "name": "RandT",
          "package": "rand-vars",
          "signature": "RandT",
          "source": "src/Control-Monad-Random.html#RandT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "RandT",
          "package": "rand-vars",
          "partial": "Rand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:RandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the random variable and returns only its value.\n  The new generator is lost.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "evalRand",
          "package": "rand-vars",
          "signature": "Rand a -\u003e g -\u003e a",
          "source": "src/Control-Monad-Random.html#evalRand",
          "type": "function"
        },
        "index": {
          "description": "Run the random variable and returns only its value The new generator is lost",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "evalRand",
          "normalized": "Rand a-\u003eb-\u003ea",
          "package": "rand-vars",
          "partial": "Rand",
          "signature": "Rand a-\u003eg-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:evalRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eevalRand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "evalRandT",
          "package": "rand-vars",
          "signature": "RandT m a -\u003e g -\u003e m a",
          "source": "src/Control-Monad-Random.html#evalRandT",
          "type": "function"
        },
        "index": {
          "description": "Similar to evalRand",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "evalRandT",
          "normalized": "RandT a b-\u003ec-\u003ea b",
          "package": "rand-vars",
          "partial": "Rand",
          "signature": "RandT m a-\u003eg-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:evalRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the random variable and returns only the new \u003ccode\u003eRandomGen\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "execRand",
          "package": "rand-vars",
          "signature": "Rand a -\u003e g -\u003e g",
          "source": "src/Control-Monad-Random.html#execRand",
          "type": "function"
        },
        "index": {
          "description": "Run the random variable and returns only the new RandomGen",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "execRand",
          "normalized": "Rand a-\u003eb-\u003eb",
          "package": "rand-vars",
          "partial": "Rand",
          "signature": "Rand a-\u003eg-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:execRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eexecRand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "execRandT",
          "package": "rand-vars",
          "signature": "RandT m a -\u003e g -\u003e m g",
          "source": "src/Control-Monad-Random.html#execRandT",
          "type": "function"
        },
        "index": {
          "description": "Similar to execRand",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "execRandT",
          "normalized": "RandT a b-\u003ec-\u003ea c",
          "package": "rand-vars",
          "partial": "Rand",
          "signature": "RandT m a-\u003eg-\u003em g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:execRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribution of elements proportionately to their indicated frequency.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "fromFreqs",
          "package": "rand-vars",
          "signature": "[(a, b)] -\u003e Rand a",
          "source": "src/Control-Monad-Random.html#fromFreqs",
          "type": "function"
        },
        "index": {
          "description": "Distribution of elements proportionately to their indicated frequency",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "fromFreqs",
          "normalized": "[(a,b)]-\u003eRand a",
          "package": "rand-vars",
          "partial": "Freqs",
          "signature": "[(a,b)]-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:fromFreqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribution within a given range, provided by \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "inRange",
          "package": "rand-vars",
          "signature": "(a, a) -\u003e Rand a",
          "source": "src/Control-Monad-Random.html#inRange",
          "type": "function"
        },
        "index": {
          "description": "Distribution within given range provided by randomR",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "inRange",
          "normalized": "(a,a)-\u003eRand a",
          "package": "rand-vars",
          "partial": "Range",
          "signature": "(a,a)-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquiprobable distribution among the elements of the list.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "oneOf",
          "package": "rand-vars",
          "signature": "[a] -\u003e Rand a",
          "source": "src/Control-Monad-Random.html#oneOf",
          "type": "function"
        },
        "index": {
          "description": "Equiprobable distribution among the elements of the list",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "oneOf",
          "normalized": "[a]-\u003eRand a",
          "package": "rand-vars",
          "partial": "Of",
          "signature": "[a]-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Random",
          "name": "pick",
          "package": "rand-vars",
          "signature": "Rand a -\u003e m a",
          "source": "src/Control-Monad-Random.html#pick",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "pick",
          "normalized": "Rand a-\u003eb a",
          "package": "rand-vars",
          "signature": "Rand a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:pick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribution provided by \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "rand",
          "package": "rand-vars",
          "signature": "Rand a",
          "source": "src/Control-Monad-Random.html#rand",
          "type": "function"
        },
        "index": {
          "description": "Distribution provided by random",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "rand",
          "package": "rand-vars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Random",
          "name": "runRand",
          "package": "rand-vars",
          "signature": "g -\u003e (a, g)",
          "source": "src/Control-Monad-Random.html#Rand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "runRand",
          "normalized": "a-\u003e(b,a)",
          "package": "rand-vars",
          "partial": "Rand",
          "signature": "g-\u003e(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:runRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Random",
          "name": "runRandT",
          "package": "rand-vars",
          "signature": "g -\u003e m (a, g)",
          "source": "src/Control-Monad-Random.html#RandT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "runRandT",
          "normalized": "a-\u003eb(c,a)",
          "package": "rand-vars",
          "partial": "Rand",
          "signature": "g-\u003em(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:runRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e(,)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "withFreq",
          "package": "rand-vars",
          "signature": "a -\u003e b -\u003e (a, b)",
          "source": "src/Control-Monad-Random.html#withFreq",
          "type": "function"
        },
        "index": {
          "description": "Alias for",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "withFreq",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "rand-vars",
          "partial": "Freq",
          "signature": "a-\u003eb-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rand-vars/docs/Control-Monad-Random.html#v:withFreq"
      }
    }
  ]
]