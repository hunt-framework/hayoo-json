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
        "word": "hmm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData.HMM is a library for using Hidden Markov Models (HMMs) with Haskell.  HMMs are a common method of machine learning.  All of the most frequently used algorithms---the forward and backwards algorithms, Viterbi, and Baum-Welch---are implemented in this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HMM",
          "name": "HMM",
          "package": "hmm",
          "source": "src/Data-HMM.html",
          "type": "module"
        },
        "index": {
          "description": "Data.HMM is library for using Hidden Markov Models HMMs with Haskell HMMs are common method of machine learning All of the most frequently used algorithms---the forward and backwards algorithms Viterbi and Baum-Welch---are implemented in this library",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "HMM",
          "package": "hmm",
          "partial": "HMM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data types for our HMM.  \n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "HMM",
          "package": "hmm",
          "source": "src/Data-HMM.html#HMM",
          "type": "data"
        },
        "index": {
          "description": "The data types for our HMM",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "HMM",
          "package": "hmm",
          "partial": "HMM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#t:HMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMM",
          "name": "Prob",
          "package": "hmm",
          "source": "src/Data-HMM.html#Prob",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "Prob",
          "package": "hmm",
          "partial": "Prob",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#t:Prob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMM",
          "name": "HMM",
          "package": "hmm",
          "signature": "HMM",
          "source": "src/Data-HMM.html#HMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "HMM",
          "package": "hmm",
          "partial": "HMM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:HMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebackwards algorithm does the same thing as the forward algorithm, just a different implementation\n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "backward",
          "package": "hmm",
          "signature": "HMM stateType eventType -\u003e [eventType] -\u003e Prob",
          "source": "src/Data-HMM.html#backward",
          "type": "function"
        },
        "index": {
          "description": "backwards algorithm does the same thing as the forward algorithm just different implementation",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "backward",
          "normalized": "HMM a b-\u003e[b]-\u003eProb",
          "package": "hmm",
          "signature": "HMM stateType eventType-\u003e[eventType]-\u003eProb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:backward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBaum-Welch is used to train an HMM\n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "baumWelch",
          "package": "hmm",
          "signature": "HMM stateType eventType -\u003e Array Int eventType -\u003e Int -\u003e HMM stateType eventType",
          "source": "src/Data-HMM.html#baumWelch",
          "type": "function"
        },
        "index": {
          "description": "Baum-Welch is used to train an HMM",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "baumWelch",
          "normalized": "HMM a b-\u003eArray Int b-\u003eInt-\u003eHMM a b",
          "package": "hmm",
          "partial": "Welch",
          "signature": "HMM stateType eventType-\u003eArray Int eventType-\u003eInt-\u003eHMM stateType eventType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:baumWelch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMM",
          "name": "baumWelchItr",
          "package": "hmm",
          "signature": "HMM stateType eventType -\u003e Array Int eventType -\u003e HMM stateType eventType",
          "source": "src/Data-HMM.html#baumWelchItr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "baumWelchItr",
          "normalized": "HMM a b-\u003eArray Int b-\u003eHMM a b",
          "package": "hmm",
          "partial": "Welch Itr",
          "signature": "HMM stateType eventType-\u003eArray Int eventType-\u003eHMM stateType eventType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:baumWelchItr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMM",
          "name": "events",
          "package": "hmm",
          "signature": "[eventType]",
          "source": "src/Data-HMM.html#HMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "events",
          "normalized": "[a]",
          "package": "hmm",
          "signature": "[eventType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforward algorithm determines the probability that a given event array would be emitted by our HMM\n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "forward",
          "package": "hmm",
          "signature": "HMM stateType eventType -\u003e [eventType] -\u003e Prob",
          "source": "src/Data-HMM.html#forward",
          "type": "function"
        },
        "index": {
          "description": "forward algorithm determines the probability that given event array would be emitted by our HMM",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "forward",
          "normalized": "HMM a b-\u003e[b]-\u003eProb",
          "package": "hmm",
          "signature": "HMM stateType eventType-\u003e[eventType]-\u003eProb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins 2 HMMs by connecting every state in the first HMM to every state in the second, and vice versa, with probabilities based on the join ratio\n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "hmmJoin",
          "package": "hmm",
          "signature": "HMM stateType eventType -\u003e HMM stateType eventType -\u003e Prob -\u003e HMM (Int, stateType) eventType",
          "source": "src/Data-HMM.html#hmmJoin",
          "type": "function"
        },
        "index": {
          "description": "Joins HMMs by connecting every state in the first HMM to every state in the second and vice versa with probabilities based on the join ratio",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "hmmJoin",
          "normalized": "HMM a b-\u003eHMM a b-\u003eProb-\u003eHMM(Int,a)b",
          "package": "hmm",
          "partial": "Join",
          "signature": "HMM stateType eventType-\u003eHMM stateType eventType-\u003eProb-\u003eHMM(Int,stateType)eventType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:hmmJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMM",
          "name": "initProbs",
          "package": "hmm",
          "signature": "stateType -\u003e Prob",
          "source": "src/Data-HMM.html#HMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "initProbs",
          "normalized": "a-\u003eProb",
          "package": "hmm",
          "partial": "Probs",
          "signature": "stateType-\u003eProb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:initProbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMM",
          "name": "loadHMM",
          "package": "hmm",
          "signature": "FilePath -\u003e IO (HMM stateType eventType)",
          "source": "src/Data-HMM.html#loadHMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "loadHMM",
          "normalized": "FilePath-\u003eIO(HMM a b)",
          "package": "hmm",
          "partial": "HMM",
          "signature": "FilePath-\u003eIO(HMM stateType eventType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:loadHMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMM",
          "name": "outMatrix",
          "package": "hmm",
          "signature": "stateType -\u003e eventType -\u003e Prob",
          "source": "src/Data-HMM.html#HMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "outMatrix",
          "normalized": "a-\u003eb-\u003eProb",
          "package": "hmm",
          "partial": "Matrix",
          "signature": "stateType-\u003eeventType-\u003eProb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:outMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esaves the HMM to a file for later retrieval.  HMMs can take a long time to calculate, so this is very useful\n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "saveHMM",
          "package": "hmm",
          "signature": "String -\u003e HMM stateType eventType -\u003e IO ()",
          "source": "src/Data-HMM.html#saveHMM",
          "type": "function"
        },
        "index": {
          "description": "saves the HMM to file for later retrieval HMMs can take long time to calculate so this is very useful",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "saveHMM",
          "normalized": "String-\u003eHMM a b-\u003eIO()",
          "package": "hmm",
          "partial": "HMM",
          "signature": "String-\u003eHMM stateType eventType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:saveHMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse simpleHMM to create an untrained hidden Markov model\n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "simpleHMM",
          "package": "hmm",
          "signature": "[stateType] -\u003e [eventType] -\u003e HMM stateType eventType",
          "source": "src/Data-HMM.html#simpleHMM",
          "type": "function"
        },
        "index": {
          "description": "Use simpleHMM to create an untrained hidden Markov model",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "simpleHMM",
          "normalized": "[a]-\u003e[b]-\u003eHMM a b",
          "package": "hmm",
          "partial": "HMM",
          "signature": "[stateType]-\u003e[eventType]-\u003eHMM stateType eventType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:simpleHMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse simpleMM to create an untrained standard Markov model\n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "simpleMM",
          "package": "hmm",
          "signature": "[a1] -\u003e a -\u003e HMM [a1] a1",
          "source": "src/Data-HMM.html#simpleMM",
          "type": "function"
        },
        "index": {
          "description": "Use simpleMM to create an untrained standard Markov model",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "simpleMM",
          "normalized": "[a]-\u003ea-\u003eHMM[a]a",
          "package": "hmm",
          "partial": "MM",
          "signature": "[a]-\u003ea-\u003eHMM[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:simpleMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMM",
          "name": "states",
          "package": "hmm",
          "signature": "[stateType]",
          "source": "src/Data-HMM.html#HMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "states",
          "normalized": "[a]",
          "package": "hmm",
          "signature": "[stateType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:states"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMM",
          "name": "transMatrix",
          "package": "hmm",
          "signature": "stateType -\u003e stateType -\u003e Prob",
          "source": "src/Data-HMM.html#HMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "transMatrix",
          "normalized": "a-\u003ea-\u003eProb",
          "package": "hmm",
          "partial": "Matrix",
          "signature": "stateType-\u003estateType-\u003eProb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:transMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitProbs should always equal 1; the others should equal the number of states\n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "verifyhmm",
          "package": "hmm",
          "signature": "HMM stateType eventType -\u003e IO ()",
          "source": "src/Data-HMM.html#verifyhmm",
          "type": "function"
        },
        "index": {
          "description": "initProbs should always equal the others should equal the number of states",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "verifyhmm",
          "normalized": "HMM a b-\u003eIO()",
          "package": "hmm",
          "signature": "HMM stateType eventType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:verifyhmm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eViterbi's algorithm calculates the most probable path through our states given an event array\n\u003c/p\u003e",
          "module": "Data.HMM",
          "name": "viterbi",
          "package": "hmm",
          "signature": "HMM stateType eventType -\u003e Array Int eventType -\u003e [stateType]",
          "source": "src/Data-HMM.html#viterbi",
          "type": "function"
        },
        "index": {
          "description": "Viterbi algorithm calculates the most probable path through our states given an event array",
          "hierarchy": "Data HMM",
          "module": "Data.HMM",
          "name": "viterbi",
          "normalized": "HMM a b-\u003eArray Int b-\u003e[a]",
          "package": "hmm",
          "signature": "HMM stateType eventType-\u003eArray Int eventType-\u003e[stateType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:viterbi"
      }
    }
  ]
]