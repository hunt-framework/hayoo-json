[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData.HMM is a library for using Hidden Markov Models (HMMs) with Haskell.  HMMs are a common method of machine learning.  All of the most frequently used algorithms---the forward and backwards algorithms, Viterbi, and Baum-Welch---are implemented in this library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "module",
        "fct-source": "src/Data-HMM.html",
        "fct-type": "module",
        "title": "HMM"
      },
      "index": {
        "description": "Data.HMM is library for using Hidden Markov Models HMMs with Haskell HMMs are common method of machine learning All of the most frequently used algorithms---the forward and backwards algorithms Viterbi and Baum-Welch---are implemented in this library",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "HMM",
        "normalized": "",
        "package": "hmm",
        "partial": "HMM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#t:HMM",
      "description": {
        "fct-descr": "\u003cp\u003eThe data types for our HMM.  \n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "data",
        "fct-source": "src/Data-HMM.html#HMM",
        "fct-type": "data",
        "title": "HMM"
      },
      "index": {
        "description": "The data types for our HMM",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "HMM",
        "normalized": "",
        "package": "hmm",
        "partial": "HMM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#t:Prob",
      "description": {
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "type",
        "fct-source": "src/Data-HMM.html#Prob",
        "fct-type": "type",
        "title": "Prob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "Prob",
        "normalized": "",
        "package": "hmm",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:HMM",
      "description": {
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "HMM",
        "fct-source": "src/Data-HMM.html#HMM",
        "fct-type": "function",
        "title": "HMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "HMM",
        "normalized": "",
        "package": "hmm",
        "partial": "HMM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:backward",
      "description": {
        "fct-descr": "\u003cp\u003ebackwards algorithm does the same thing as the forward algorithm, just a different implementation\n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "HMM stateType eventType -\u003e [eventType] -\u003e Prob",
        "fct-source": "src/Data-HMM.html#backward",
        "fct-type": "function",
        "title": "backward"
      },
      "index": {
        "description": "backwards algorithm does the same thing as the forward algorithm just different implementation",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "backward",
        "normalized": "HMM a b-\u003e[b]-\u003eProb",
        "package": "hmm",
        "partial": "",
        "signature": "HMM stateType eventType-\u003e[eventType]-\u003eProb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:baumWelch",
      "description": {
        "fct-descr": "\u003cp\u003eBaum-Welch is used to train an HMM\n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "HMM stateType eventType -\u003e Array Int eventType -\u003e Int -\u003e HMM stateType eventType",
        "fct-source": "src/Data-HMM.html#baumWelch",
        "fct-type": "function",
        "title": "baumWelch"
      },
      "index": {
        "description": "Baum-Welch is used to train an HMM",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "baumWelch",
        "normalized": "HMM a b-\u003eArray Int b-\u003eInt-\u003eHMM a b",
        "package": "hmm",
        "partial": "Welch",
        "signature": "HMM stateType eventType-\u003eArray Int eventType-\u003eInt-\u003eHMM stateType eventType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:baumWelchItr",
      "description": {
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "HMM stateType eventType -\u003e Array Int eventType -\u003e HMM stateType eventType",
        "fct-source": "src/Data-HMM.html#baumWelchItr",
        "fct-type": "function",
        "title": "baumWelchItr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "baumWelchItr",
        "normalized": "HMM a b-\u003eArray Int b-\u003eHMM a b",
        "package": "hmm",
        "partial": "Welch Itr",
        "signature": "HMM stateType eventType-\u003eArray Int eventType-\u003eHMM stateType eventType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:events",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "[eventType]",
        "fct-source": "src/Data-HMM.html#HMM",
        "fct-type": "function",
        "title": "events"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "events",
        "normalized": "[a]",
        "package": "hmm",
        "partial": "",
        "signature": "[eventType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:forward",
      "description": {
        "fct-descr": "\u003cp\u003eforward algorithm determines the probability that a given event array would be emitted by our HMM\n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "HMM stateType eventType -\u003e [eventType] -\u003e Prob",
        "fct-source": "src/Data-HMM.html#forward",
        "fct-type": "function",
        "title": "forward"
      },
      "index": {
        "description": "forward algorithm determines the probability that given event array would be emitted by our HMM",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "forward",
        "normalized": "HMM a b-\u003e[b]-\u003eProb",
        "package": "hmm",
        "partial": "",
        "signature": "HMM stateType eventType-\u003e[eventType]-\u003eProb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:hmmJoin",
      "description": {
        "fct-descr": "\u003cp\u003eJoins 2 HMMs by connecting every state in the first HMM to every state in the second, and vice versa, with probabilities based on the join ratio\n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "HMM stateType eventType -\u003e HMM stateType eventType -\u003e Prob -\u003e HMM (Int, stateType) eventType",
        "fct-source": "src/Data-HMM.html#hmmJoin",
        "fct-type": "function",
        "title": "hmmJoin"
      },
      "index": {
        "description": "Joins HMMs by connecting every state in the first HMM to every state in the second and vice versa with probabilities based on the join ratio",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "hmmJoin",
        "normalized": "HMM a b-\u003eHMM a b-\u003eProb-\u003eHMM(Int,a)b",
        "package": "hmm",
        "partial": "Join",
        "signature": "HMM stateType eventType-\u003eHMM stateType eventType-\u003eProb-\u003eHMM(Int,stateType)eventType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:initProbs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "stateType -\u003e Prob",
        "fct-source": "src/Data-HMM.html#HMM",
        "fct-type": "function",
        "title": "initProbs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "initProbs",
        "normalized": "a-\u003eProb",
        "package": "hmm",
        "partial": "Probs",
        "signature": "stateType-\u003eProb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:loadHMM",
      "description": {
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "FilePath -\u003e IO (HMM stateType eventType)",
        "fct-source": "src/Data-HMM.html#loadHMM",
        "fct-type": "function",
        "title": "loadHMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "loadHMM",
        "normalized": "FilePath-\u003eIO(HMM a b)",
        "package": "hmm",
        "partial": "HMM",
        "signature": "FilePath-\u003eIO(HMM stateType eventType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:outMatrix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "stateType -\u003e eventType -\u003e Prob",
        "fct-source": "src/Data-HMM.html#HMM",
        "fct-type": "function",
        "title": "outMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "outMatrix",
        "normalized": "a-\u003eb-\u003eProb",
        "package": "hmm",
        "partial": "Matrix",
        "signature": "stateType-\u003eeventType-\u003eProb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:saveHMM",
      "description": {
        "fct-descr": "\u003cp\u003esaves the HMM to a file for later retrieval.  HMMs can take a long time to calculate, so this is very useful\n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "String -\u003e HMM stateType eventType -\u003e IO ()",
        "fct-source": "src/Data-HMM.html#saveHMM",
        "fct-type": "function",
        "title": "saveHMM"
      },
      "index": {
        "description": "saves the HMM to file for later retrieval HMMs can take long time to calculate so this is very useful",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "saveHMM",
        "normalized": "String-\u003eHMM a b-\u003eIO()",
        "package": "hmm",
        "partial": "HMM",
        "signature": "String-\u003eHMM stateType eventType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:simpleHMM",
      "description": {
        "fct-descr": "\u003cp\u003eUse simpleHMM to create an untrained hidden Markov model\n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "[stateType] -\u003e [eventType] -\u003e HMM stateType eventType",
        "fct-source": "src/Data-HMM.html#simpleHMM",
        "fct-type": "function",
        "title": "simpleHMM"
      },
      "index": {
        "description": "Use simpleHMM to create an untrained hidden Markov model",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "simpleHMM",
        "normalized": "[a]-\u003e[b]-\u003eHMM a b",
        "package": "hmm",
        "partial": "HMM",
        "signature": "[stateType]-\u003e[eventType]-\u003eHMM stateType eventType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:simpleMM",
      "description": {
        "fct-descr": "\u003cp\u003eUse simpleMM to create an untrained standard Markov model\n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "[a1] -\u003e a -\u003e HMM [a1] a1",
        "fct-source": "src/Data-HMM.html#simpleMM",
        "fct-type": "function",
        "title": "simpleMM"
      },
      "index": {
        "description": "Use simpleMM to create an untrained standard Markov model",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "simpleMM",
        "normalized": "[a]-\u003ea-\u003eHMM[a]a",
        "package": "hmm",
        "partial": "MM",
        "signature": "[a]-\u003ea-\u003eHMM[a]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:states",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "[stateType]",
        "fct-source": "src/Data-HMM.html#HMM",
        "fct-type": "function",
        "title": "states"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "states",
        "normalized": "[a]",
        "package": "hmm",
        "partial": "",
        "signature": "[stateType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:transMatrix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "stateType -\u003e stateType -\u003e Prob",
        "fct-source": "src/Data-HMM.html#HMM",
        "fct-type": "function",
        "title": "transMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "transMatrix",
        "normalized": "a-\u003ea-\u003eProb",
        "package": "hmm",
        "partial": "Matrix",
        "signature": "stateType-\u003estateType-\u003eProb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:verifyhmm",
      "description": {
        "fct-descr": "\u003cp\u003einitProbs should always equal 1; the others should equal the number of states\n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "HMM stateType eventType -\u003e IO ()",
        "fct-source": "src/Data-HMM.html#verifyhmm",
        "fct-type": "function",
        "title": "verifyhmm"
      },
      "index": {
        "description": "initProbs should always equal the others should equal the number of states",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "verifyhmm",
        "normalized": "HMM a b-\u003eIO()",
        "package": "hmm",
        "partial": "",
        "signature": "HMM stateType eventType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmm/docs/Data-HMM.html#v:viterbi",
      "description": {
        "fct-descr": "\u003cp\u003eViterbi's algorithm calculates the most probable path through our states given an event array\n\u003c/p\u003e",
        "fct-module": "Data.HMM",
        "fct-package": "hmm",
        "fct-signature": "HMM stateType eventType -\u003e Array Int eventType -\u003e [stateType]",
        "fct-source": "src/Data-HMM.html#viterbi",
        "fct-type": "function",
        "title": "viterbi"
      },
      "index": {
        "description": "Viterbi algorithm calculates the most probable path through our states given an event array",
        "hierarchy": "Data HMM",
        "module": "Data.HMM",
        "name": "viterbi",
        "normalized": "HMM a b-\u003eArray Int b-\u003e[a]",
        "package": "hmm",
        "partial": "",
        "signature": "HMM stateType eventType-\u003eArray Int eventType-\u003e[stateType]"
      }
    }
  }
]