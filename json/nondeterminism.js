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
        "word": "nondeterminism"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Amb",
          "name": "Amb",
          "package": "nondeterminism",
          "source": "src/Control-Monad-Amb.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "Amb",
          "package": "nondeterminism",
          "partial": "Amb",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Amb",
          "name": "Amb",
          "package": "nondeterminism",
          "source": "src/Control-Monad-Amb.html#Amb",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "Amb",
          "package": "nondeterminism",
          "partial": "Amb",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#t:Amb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Amb",
          "name": "Amb'",
          "package": "nondeterminism",
          "source": "src/Control-Monad-Amb.html#Amb%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "Amb'",
          "package": "nondeterminism",
          "partial": "Amb'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#t:Amb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAmbT r m a\u003c/code\u003e is a computation whose current value is of type \u003ccode\u003ea\u003c/code\u003e\n and which will ultimately return a value of type \u003ccode\u003er\u003c/code\u003e. The same as\n \u003ccode\u003eContT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "AmbT",
          "package": "nondeterminism",
          "source": "src/Control-Monad-Amb.html#AmbT",
          "type": "data"
        },
        "index": {
          "description": "AmbT is computation whose current value is of type and which will ultimately return value of type The same as ContT",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "AmbT",
          "package": "nondeterminism",
          "partial": "Amb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#t:AmbT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Amb",
          "name": "AmbT'",
          "package": "nondeterminism",
          "source": "src/Control-Monad-Amb.html#AmbT%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "AmbT'",
          "package": "nondeterminism",
          "partial": "Amb T'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#t:AmbT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Amb",
          "name": "AmbT",
          "package": "nondeterminism",
          "signature": "AmbT",
          "source": "src/Control-Monad-Amb.html#AmbT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "AmbT",
          "package": "nondeterminism",
          "partial": "Amb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:AmbT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most basic primitive that everything else is built out\n of. Generates \u003ccode\u003eTrue\u003c/code\u003e and \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "aBoolean",
          "package": "nondeterminism",
          "signature": "AmbT r m Bool",
          "source": "src/Control-Monad-Amb.html#aBoolean",
          "type": "function"
        },
        "index": {
          "description": "The most basic primitive that everything else is built out of Generates True and False",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "aBoolean",
          "package": "nondeterminism",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:aBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate each element of the given list.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "aMemberOf",
          "package": "nondeterminism",
          "signature": "[b] -\u003e AmbT r m b",
          "source": "src/Control-Monad-Amb.html#aMemberOf",
          "type": "function"
        },
        "index": {
          "description": "Generate each element of the given list",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "aMemberOf",
          "normalized": "[a]-\u003eAmbT b c a",
          "package": "nondeterminism",
          "partial": "Member Of",
          "signature": "[b]-\u003eAmbT r m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:aMemberOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all partitions of this list.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "aPartitionOf",
          "package": "nondeterminism",
          "signature": "[t] -\u003e AmbT r m [[t]]",
          "source": "src/Control-Monad-Amb.html#aPartitionOf",
          "type": "function"
        },
        "index": {
          "description": "Generate all partitions of this list",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "aPartitionOf",
          "normalized": "[a]-\u003eAmbT b c[[a]]",
          "package": "nondeterminism",
          "partial": "Partition Of",
          "signature": "[t]-\u003eAmbT r m[[t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:aPartitionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all partitions of a given size of this list.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "aPartitionOfSize",
          "package": "nondeterminism",
          "signature": "Int -\u003e [a] -\u003e AmbT r m [[a]]",
          "source": "src/Control-Monad-Amb.html#aPartitionOfSize",
          "type": "function"
        },
        "index": {
          "description": "Generate all partitions of given size of this list",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "aPartitionOfSize",
          "normalized": "Int-\u003e[a]-\u003eAmbT b c[[a]]",
          "package": "nondeterminism",
          "partial": "Partition Of Size",
          "signature": "Int-\u003e[a]-\u003eAmbT r m[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:aPartitionOfSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all permutations of a list.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "aPermutationOf",
          "package": "nondeterminism",
          "signature": "[a] -\u003e AmbT r m [a]",
          "source": "src/Control-Monad-Amb.html#aPermutationOf",
          "type": "function"
        },
        "index": {
          "description": "Generate all permutations of list",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "aPermutationOf",
          "normalized": "[a]-\u003eAmbT b c[a]",
          "package": "nondeterminism",
          "partial": "Permutation Of",
          "signature": "[a]-\u003eAmbT r m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:aPermutationOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all splits of a list.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "aSplitOf",
          "package": "nondeterminism",
          "signature": "[a] -\u003e AmbT r m ([a], [a])",
          "source": "src/Control-Monad-Amb.html#aSplitOf",
          "type": "function"
        },
        "index": {
          "description": "Generate all splits of list",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "aSplitOf",
          "normalized": "[a]-\u003eAmbT b c([a],[a])",
          "package": "nondeterminism",
          "partial": "Split Of",
          "signature": "[a]-\u003eAmbT r m([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:aSplitOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate each subset of any size from the given list.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "aSubsetOf",
          "package": "nondeterminism",
          "signature": "[AmbT r m a] -\u003e AmbT r m [a]",
          "source": "src/Control-Monad-Amb.html#aSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Generate each subset of any size from the given list",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "aSubsetOf",
          "normalized": "[AmbT a b c]-\u003eAmbT a b[c]",
          "package": "nondeterminism",
          "partial": "Subset Of",
          "signature": "[AmbT r m a]-\u003eAmbT r m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:aSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a nondeterministic computation and return a list of all\n results that the computation can produce. Note that this function\n is not lazy its result.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "allValues",
          "package": "nondeterminism",
          "signature": "Amb t t -\u003e [t]",
          "source": "src/Control-Monad-Amb.html#allValues",
          "type": "function"
        },
        "index": {
          "description": "Run nondeterministic computation and return list of all results that the computation can produce Note that this function is not lazy its result",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "allValues",
          "normalized": "Amb a a-\u003e[a]",
          "package": "nondeterminism",
          "partial": "Values",
          "signature": "Amb t t-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:allValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a nondeterministic computation and return a list of all\n results that the computation can produce. Note that this function\n is not lazy its result.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "allValuesT",
          "package": "nondeterminism",
          "signature": "AmbT t m t -\u003e m [t]",
          "source": "src/Control-Monad-Amb.html#allValuesT",
          "type": "function"
        },
        "index": {
          "description": "Run nondeterministic computation and return list of all results that the computation can produce Note that this function is not lazy its result",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "allValuesT",
          "normalized": "AmbT a b a-\u003eb[a]",
          "package": "nondeterminism",
          "partial": "Values",
          "signature": "AmbT t m t-\u003em[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:allValuesT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust for fun. This is McCarthy's \u003ccode\u003eamb\u003c/code\u003e operator and is a synonym\n for \u003ccode\u003eaMemberOf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "amb",
          "package": "nondeterminism",
          "signature": "[b] -\u003e AmbT r m b",
          "source": "src/Control-Monad-Amb.html#amb",
          "type": "function"
        },
        "index": {
          "description": "Just for fun This is McCarthy amb operator and is synonym for aMemberOf",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "amb",
          "normalized": "[a]-\u003eAmbT b c a",
          "package": "nondeterminism",
          "signature": "[b]-\u003eAmbT r m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:amb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecall/cc lifted into the nondeterministic monad. This implements\n the backtracking behaviour which allows Amb to try different code\n paths and return multiple results.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "ambCC",
          "package": "nondeterminism",
          "signature": "((a -\u003e AmbT r m a1) -\u003e AmbT r m a) -\u003e AmbT r m a",
          "source": "src/Control-Monad-Amb.html#ambCC",
          "type": "function"
        },
        "index": {
          "description": "call cc lifted into the nondeterministic monad This implements the backtracking behaviour which allows Amb to try different code paths and return multiple results",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "ambCC",
          "normalized": "((a-\u003eAmbT b c a)-\u003eAmbT b c a)-\u003eAmbT b c a",
          "package": "nondeterminism",
          "partial": "CC",
          "signature": "((a-\u003eAmbT r m a)-\u003eAmbT r m a)-\u003eAmbT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:ambCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all numbers between the given bounds, inclusive.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "anIntegerBetween",
          "package": "nondeterminism",
          "signature": "b -\u003e b -\u003e AmbT r m b",
          "source": "src/Control-Monad-Amb.html#anIntegerBetween",
          "type": "function"
        },
        "index": {
          "description": "Generate all numbers between the given bounds inclusive",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "anIntegerBetween",
          "normalized": "a-\u003ea-\u003eAmbT b c a",
          "package": "nondeterminism",
          "partial": "Integer Between",
          "signature": "b-\u003eb-\u003eAmbT r m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:anIntegerBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNondeterministically choose either of the two computations\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "either'",
          "package": "nondeterminism",
          "signature": "AmbT r m b -\u003e AmbT r m b -\u003e AmbT r m b",
          "source": "src/Control-Monad-Amb.html#either%27",
          "type": "function"
        },
        "index": {
          "description": "Nondeterministically choose either of the two computations",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "either'",
          "normalized": "AmbT a b c-\u003eAmbT a b c-\u003eAmbT a b c",
          "package": "nondeterminism",
          "signature": "AmbT r m b-\u003eAmbT r m b-\u003eAmbT r m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:either-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate this branch of the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "fail'",
          "package": "nondeterminism",
          "signature": "AmbT r m b",
          "source": "src/Control-Monad-Amb.html#fail%27",
          "type": "function"
        },
        "index": {
          "description": "Terminate this branch of the computation",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "fail'",
          "package": "nondeterminism",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:fail-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA low-level internal function which executes a nondeterministic\n computation for its nondeterministic side-effects, such as its\n ability to produce different results.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "forEffects",
          "package": "nondeterminism",
          "signature": "((t, [t]) -\u003e r) -\u003e (t1 -\u003e AmbT t m t) -\u003e AmbT t m t1 -\u003e m r",
          "source": "src/Control-Monad-Amb.html#forEffects",
          "type": "function"
        },
        "index": {
          "description": "low-level internal function which executes nondeterministic computation for its nondeterministic side-effects such as its ability to produce different results",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "forEffects",
          "normalized": "((a,[a])-\u003eb)-\u003e(a-\u003eAmbT a c a)-\u003eAmbT a c a-\u003ec b",
          "package": "nondeterminism",
          "partial": "Effects",
          "signature": "((t,[t])-\u003er)-\u003e(t-\u003eAmbT t m t)-\u003eAmbT t m t-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:forEffects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a nondeterministic computation and return \u003ccode\u003eTrue\u003c/code\u003e\n if all possible results are \u003ccode\u003eTrue\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "isNecessary",
          "package": "nondeterminism",
          "signature": "Amb Bool Bool -\u003e Bool",
          "source": "src/Control-Monad-Amb.html#isNecessary",
          "type": "function"
        },
        "index": {
          "description": "Run nondeterministic computation and return True if all possible results are True False otherwise",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "isNecessary",
          "normalized": "Amb Bool Bool-\u003eBool",
          "package": "nondeterminism",
          "partial": "Necessary",
          "signature": "Amb Bool Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:isNecessary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a nondeterministic computation and return \u003ccode\u003eTrue\u003c/code\u003e\n if all possible results are \u003ccode\u003eTrue\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "isNecessaryT",
          "package": "nondeterminism",
          "signature": "AmbT Bool m Bool -\u003e m Bool",
          "source": "src/Control-Monad-Amb.html#isNecessaryT",
          "type": "function"
        },
        "index": {
          "description": "Run nondeterministic computation and return True if all possible results are True False otherwise",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "isNecessaryT",
          "normalized": "AmbT Bool a Bool-\u003ea Bool",
          "package": "nondeterminism",
          "partial": "Necessary",
          "signature": "AmbT Bool m Bool-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:isNecessaryT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a nondeterministic computation and return \u003ccode\u003eTrue\u003c/code\u003e\n if any result is \u003ccode\u003eTrue\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "isPossible",
          "package": "nondeterminism",
          "signature": "Amb Bool Bool -\u003e Bool",
          "source": "src/Control-Monad-Amb.html#isPossible",
          "type": "function"
        },
        "index": {
          "description": "Run nondeterministic computation and return True if any result is True False otherwise",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "isPossible",
          "normalized": "Amb Bool Bool-\u003eBool",
          "package": "nondeterminism",
          "partial": "Possible",
          "signature": "Amb Bool Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:isPossible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a nondeterministic computation and return \u003ccode\u003eTrue\u003c/code\u003e\n if any result is \u003ccode\u003eTrue\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "isPossibleT",
          "package": "nondeterminism",
          "signature": "AmbT Bool m Bool -\u003e m Bool",
          "source": "src/Control-Monad-Amb.html#isPossibleT",
          "type": "function"
        },
        "index": {
          "description": "Run nondeterministic computation and return True if any result is True False otherwise",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "isPossibleT",
          "normalized": "AmbT Bool a Bool-\u003ea Bool",
          "package": "nondeterminism",
          "partial": "Possible",
          "signature": "AmbT Bool m Bool-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:isPossibleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a nondeterministic computation and return a result of that\n computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "oneValue",
          "package": "nondeterminism",
          "signature": "Amb a a -\u003e a",
          "source": "src/Control-Monad-Amb.html#oneValue",
          "type": "function"
        },
        "index": {
          "description": "Run nondeterministic computation and return result of that computation",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "oneValue",
          "normalized": "Amb a a-\u003ea",
          "package": "nondeterminism",
          "partial": "Value",
          "signature": "Amb a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:oneValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a nondeterministic computation and return a result of that\n computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "oneValueT",
          "package": "nondeterminism",
          "signature": "AmbT b m b -\u003e m b",
          "source": "src/Control-Monad-Amb.html#oneValueT",
          "type": "function"
        },
        "index": {
          "description": "Run nondeterministic computation and return result of that computation",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "oneValueT",
          "normalized": "AmbT a b a-\u003eb a",
          "package": "nondeterminism",
          "partial": "Value",
          "signature": "AmbT b m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:oneValueT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the nondeterministic computation. This is internal.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "runAmbT",
          "package": "nondeterminism",
          "signature": "AmbT t m t -\u003e m (t, [t])",
          "source": "src/Control-Monad-Amb.html#runAmbT",
          "type": "function"
        },
        "index": {
          "description": "Run the nondeterministic computation This is internal",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "runAmbT",
          "normalized": "AmbT a b a-\u003eb(a,[a])",
          "package": "nondeterminism",
          "partial": "Amb",
          "signature": "AmbT t m t-\u003em(t,[t])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:runAmbT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the nondeterministic computation. This is internal.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "runAmbTI",
          "package": "nondeterminism",
          "signature": "AmbT a m a -\u003e AmbT a m a -\u003e m (a, [a])",
          "source": "src/Control-Monad-Amb.html#runAmbTI",
          "type": "function"
        },
        "index": {
          "description": "Run the nondeterministic computation This is internal",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "runAmbTI",
          "normalized": "AmbT a b a-\u003eAmbT a b a-\u003eb(a,[a])",
          "package": "nondeterminism",
          "partial": "Amb TI",
          "signature": "AmbT a m a-\u003eAmbT a m a-\u003em(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:runAmbTI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper to inject state into the backtracking stack\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "tell'",
          "package": "nondeterminism",
          "signature": "[r] -\u003e AmbT r m ()",
          "source": "src/Control-Monad-Amb.html#tell%27",
          "type": "function"
        },
        "index": {
          "description": "helper to inject state into the backtracking stack",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "tell'",
          "normalized": "[a]-\u003eAmbT a b()",
          "package": "nondeterminism",
          "signature": "[r]-\u003eAmbT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:tell-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper to inject state into the backtracking stack\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "tellState",
          "package": "nondeterminism",
          "signature": "s -\u003e m ()",
          "source": "src/Control-Monad-Amb.html#tellState",
          "type": "function"
        },
        "index": {
          "description": "helper to inject state into the backtracking stack",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "tellState",
          "normalized": "a-\u003eb()",
          "package": "nondeterminism",
          "partial": "State",
          "signature": "s-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:tellState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom left to right:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the computation to run on failure\n\u003c/li\u003e\u003cli\u003e the continuation captured when making nondeterministic choices\n\u003c/li\u003e\u003cli\u003e record keeping of solutions found so far\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Amb",
          "name": "unAmbT",
          "package": "nondeterminism",
          "signature": "StateT (AmbT r m r) (ContT r (StateT [r] m)) a",
          "source": "src/Control-Monad-Amb.html#AmbT",
          "type": "function"
        },
        "index": {
          "description": "From left to right the computation to run on failure the continuation captured when making nondeterministic choices record keeping of solutions found so far",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "unAmbT",
          "normalized": "StateT(AmbT a b a)(ContT a(StateT[a]b))c",
          "package": "nondeterminism",
          "partial": "Amb",
          "signature": "StateT(AmbT r m r)(ContT r(StateT[r]m))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:unAmbT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the nondeterministic computation backtracks past this state,\n execute this nondeterministic computation. Generally used to undo\n side effects.\n\u003c/p\u003e",
          "module": "Control.Monad.Amb",
          "name": "uponFailure",
          "package": "nondeterminism",
          "signature": "AmbT r m a -\u003e AmbT r m ()",
          "source": "src/Control-Monad-Amb.html#uponFailure",
          "type": "function"
        },
        "index": {
          "description": "When the nondeterministic computation backtracks past this state execute this nondeterministic computation Generally used to undo side effects",
          "hierarchy": "Control Monad Amb",
          "module": "Control.Monad.Amb",
          "name": "uponFailure",
          "normalized": "AmbT a b c-\u003eAmbT a b()",
          "package": "nondeterminism",
          "partial": "Failure",
          "signature": "AmbT r m a-\u003eAmbT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nondeterminism/docs/Control-Monad-Amb.html#v:uponFailure"
      }
    }
  ]
]