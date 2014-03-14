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
        "word": "estimators"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "FullContext",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#FullContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "FullContext",
          "package": "estimators",
          "partial": "Full Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#t:FullContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "FullEvent",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#FullEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "FullEvent",
          "package": "estimators",
          "partial": "Full Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#t:FullEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "Observation",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#Observation",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "Observation",
          "package": "estimators",
          "partial": "Observation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#t:Observation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "Pairs",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#Pairs",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "Pairs",
          "package": "estimators",
          "partial": "Pairs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#t:Pairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "Probs",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#Probs",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "Probs",
          "package": "estimators",
          "partial": "Probs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#t:Probs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "JointModel",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#JointModel",
          "type": "class"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "JointModel",
          "package": "estimators",
          "partial": "Joint Model",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#v:JointModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "chainRule",
          "package": "estimators",
          "signature": "FullEvent a -\u003e FullContext a -\u003e Pairs a",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#chainRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "chainRule",
          "normalized": "FullEvent a-\u003eFullContext a-\u003ePairs a",
          "package": "estimators",
          "partial": "Rule",
          "signature": "FullEvent a-\u003eFullContext a-\u003ePairs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#v:chainRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "estimate",
          "package": "estimators",
          "signature": "Observation a -\u003e Probs a",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#estimate",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "estimate",
          "normalized": "Observation a-\u003eProbs a",
          "package": "estimators",
          "signature": "Observation a-\u003eProbs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#v:estimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "observe",
          "package": "estimators",
          "signature": "Pairs a -\u003e Observation a",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#observe",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "observe",
          "normalized": "Pairs a-\u003eObservation a",
          "package": "estimators",
          "signature": "Pairs a-\u003eObservation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#v:observe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "prob",
          "package": "estimators",
          "signature": "Probs a -\u003e Pairs a -\u003e Prob",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#prob",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "prob",
          "normalized": "Probs a-\u003ePairs a-\u003eProb",
          "package": "estimators",
          "signature": "Probs a-\u003ePairs a-\u003eProb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#v:prob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Chain",
          "name": "simpleObserve",
          "package": "estimators",
          "signature": "FullEvent a -\u003e FullContext a -\u003e Observation a",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Chain.html#simpleObserve",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability Chain",
          "module": "NLP.Probability.Chain",
          "name": "simpleObserve",
          "normalized": "FullEvent a-\u003eFullContext a-\u003eObservation a",
          "package": "estimators",
          "partial": "Observe",
          "signature": "FullEvent a-\u003eFullContext a-\u003eObservation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Chain.html#v:simpleObserve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "CondDistribution",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#CondDistribution",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "CondDistribution",
          "package": "estimators",
          "partial": "Cond Distribution",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#t:CondDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The set of observations of event conditioned on context. event must be an instance of Event and context of Context \n",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "CondObserved",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#CondObserved",
          "type": "type"
        },
        "index": {
          "description": "The set of observations of event conditioned on context event must be an instance of Event and context of Context",
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "CondObserved",
          "package": "estimators",
          "partial": "Cond Observed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#t:CondObserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "DebugDist",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#DebugDist",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "DebugDist",
          "package": "estimators",
          "partial": "Debug Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#t:DebugDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "Sub",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#Sub",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "Sub",
          "package": "estimators",
          "partial": "Sub",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#t:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "SubMap",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#SubMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "SubMap",
          "package": "estimators",
          "partial": "Sub Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#t:SubMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "Weighting",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#Weighting",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "Weighting",
          "package": "estimators",
          "partial": "Weighting",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#t:Weighting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "Context",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#Context",
          "type": "class"
        },
        "index": {
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "Context",
          "package": "estimators",
          "partial": "Context",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "condObservation",
          "package": "estimators",
          "signature": "event -\u003e context -\u003e CondObserved event context",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#condObservation",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "condObservation",
          "normalized": "a-\u003eb-\u003eCondObserved a b",
          "package": "estimators",
          "partial": "Observation",
          "signature": "event-\u003econtext-\u003eCondObserved event context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#v:condObservation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "condObservationCounts",
          "package": "estimators",
          "signature": "context -\u003e Counts event -\u003e CondObserved event context",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#condObservationCounts",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "condObservationCounts",
          "normalized": "a-\u003eCounts b-\u003eCondObserved b a",
          "package": "estimators",
          "partial": "Observation Counts",
          "signature": "context-\u003eCounts event-\u003eCondObserved event context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#v:condObservationCounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A CondObserved set for a single event and context. \n",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "condObservations",
          "package": "estimators",
          "signature": "event -\u003e context -\u003e Count -\u003e CondObserved event context",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#condObservations",
          "type": "function"
        },
        "index": {
          "description": "CondObserved set for single event and context",
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "condObservations",
          "normalized": "a-\u003eb-\u003eCount-\u003eCondObserved a b",
          "package": "estimators",
          "partial": "Observations",
          "signature": "event-\u003econtext-\u003eCount-\u003eCondObserved event context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#v:condObservations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A function to enumerate subcontexts of a context  \n",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "decompose",
          "package": "estimators",
          "signature": "a -\u003e [Sub a]",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#decompose",
          "type": "function"
        },
        "index": {
          "description": "function to enumerate subcontexts of context",
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "decompose",
          "normalized": "a-\u003e[Sub a]",
          "package": "estimators",
          "signature": "a-\u003e[Sub a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#v:decompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral Linear Interpolation. Produces a Conditional Distribution from observations.\n   It requires a GeneralLambda function which tells it how to weight each level of smoothing. \n   The GeneralLambda function can observe the counts of each level of context. \n\u003c/p\u003e\u003cp\u003eNote: We include a final level of backoff where everything is given an epsilon likelihood. To \n   ignore this, just give it lambda = 0.\n\u003c/p\u003e",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "estimateGeneralLinear",
          "package": "estimators",
          "signature": "Weighting -\u003e CondObserved event context -\u003e DebugDist event context",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#estimateGeneralLinear",
          "type": "function"
        },
        "index": {
          "description": "General Linear Interpolation Produces Conditional Distribution from observations It requires GeneralLambda function which tells it how to weight each level of smoothing The GeneralLambda function can observe the counts of each level of context Note We include final level of backoff where everything is given an epsilon likelihood To ignore this just give it lambda",
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "estimateGeneralLinear",
          "normalized": "Weighting-\u003eCondObserved a b-\u003eDebugDist a b",
          "package": "estimators",
          "partial": "General Linear",
          "signature": "Weighting-\u003eCondObserved event context-\u003eDebugDist event context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#v:estimateGeneralLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "mkDist",
          "package": "estimators",
          "signature": "DebugDist event context -\u003e CondDistribution event context",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#mkDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "mkDist",
          "normalized": "DebugDist a b-\u003eCondDistribution a b",
          "package": "estimators",
          "partial": "Dist",
          "signature": "DebugDist event context-\u003eCondDistribution event context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#v:mkDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Weight each level by a fixed predefined amount. \n",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "simpleLinear",
          "package": "estimators",
          "signature": "[Double] -\u003e Weighting",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#simpleLinear",
          "type": "function"
        },
        "index": {
          "description": "Weight each level by fixed predefined amount",
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "simpleLinear",
          "normalized": "[Double]-\u003eWeighting",
          "package": "estimators",
          "partial": "Linear",
          "signature": "[Double]-\u003eWeighting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#v:simpleLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Weight each level by the likelihood that a new event will be seen at that level. \n   t / ((n * d) + t) where t is the total count, d is the number of distinct observations,\n   and n is a user defined constant.   \n",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "wittenBell",
          "package": "estimators",
          "signature": "Int -\u003e Weighting",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-ConditionalDistribution.html#wittenBell",
          "type": "function"
        },
        "index": {
          "description": "Weight each level by the likelihood that new event will be seen at that level where is the total count is the number of distinct observations and is user defined constant",
          "hierarchy": "NLP Probability ConditionalDistribution",
          "module": "NLP.Probability.ConditionalDistribution",
          "name": "wittenBell",
          "normalized": "Int-\u003eWeighting",
          "package": "estimators",
          "partial": "Bell",
          "signature": "Int-\u003eWeighting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-ConditionalDistribution.html#v:wittenBell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Distribution",
          "name": "Distribution",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Distribution.html#Distribution",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Probability Distribution",
          "module": "NLP.Probability.Distribution",
          "name": "Distribution",
          "package": "estimators",
          "partial": "Distribution",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Distribution.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Distribution",
          "name": "Prob",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Distribution.html#Prob",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Probability Distribution",
          "module": "NLP.Probability.Distribution",
          "name": "Prob",
          "package": "estimators",
          "partial": "Prob",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Distribution.html#t:Prob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Distribution",
          "name": "laplace",
          "package": "estimators",
          "signature": "(Double, Double) -\u003e Estimator event",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Distribution.html#laplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability Distribution",
          "module": "NLP.Probability.Distribution",
          "name": "laplace",
          "normalized": "(Double,Double)-\u003eEstimator a",
          "package": "estimators",
          "signature": "(Double,Double)-\u003eEstimator event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Distribution.html#v:laplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Maximum Likelihood Estimation gives out probability by normalizing over observed events. \n   Unseen events are gived zero probabilty. \n",
          "module": "NLP.Probability.Distribution",
          "name": "mle",
          "package": "estimators",
          "signature": "Estimator event",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Distribution.html#mle",
          "type": "function"
        },
        "index": {
          "description": "Maximum Likelihood Estimation gives out probability by normalizing over observed events Unseen events are gived zero probabilty",
          "hierarchy": "NLP Probability Distribution",
          "module": "NLP.Probability.Distribution",
          "name": "mle",
          "package": "estimators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Distribution.html#v:mle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.EM",
          "name": "randomCondCounts",
          "package": "estimators",
          "signature": "[context] -\u003e mr (CondObserved event context)",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-EM.html#randomCondCounts",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability EM",
          "module": "NLP.Probability.EM",
          "name": "randomCondCounts",
          "normalized": "[a]-\u003eb(CondObserved c a)",
          "package": "estimators",
          "partial": "Cond Counts",
          "signature": "[context]-\u003emr(CondObserved event context)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-EM.html#v:randomCondCounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.EM",
          "name": "randomCounts",
          "package": "estimators",
          "signature": "mr (Counts event)",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-EM.html#randomCounts",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability EM",
          "module": "NLP.Probability.EM",
          "name": "randomCounts",
          "package": "estimators",
          "partial": "Counts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-EM.html#v:randomCounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Observation",
          "name": "Count",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#Count",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "Count",
          "package": "estimators",
          "partial": "Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#t:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Observation",
          "name": "Counts",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#Counts",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "Counts",
          "package": "estimators",
          "partial": "Counts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#t:Counts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Observation",
          "name": "EventMap",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#EventMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "EventMap",
          "package": "estimators",
          "partial": "Event Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#t:EventMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Observation",
          "name": "Observed",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#Observed",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "Observed",
          "package": "estimators",
          "partial": "Observed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#t:Observed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Observation",
          "name": "Event",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#Event",
          "type": "class"
        },
        "index": {
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "Event",
          "package": "estimators",
          "partial": "Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Finish a set of offline observations so that they can be used to estimate\n   likelihood  \n",
          "module": "NLP.Probability.Observation",
          "name": "finish",
          "package": "estimators",
          "signature": "Counts event -\u003e Observed event",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#finish",
          "type": "function"
        },
        "index": {
          "description": "Finish set of offline observations so that they can be used to estimate likelihood",
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "finish",
          "normalized": "Counts a-\u003eObserved a",
          "package": "estimators",
          "signature": "Counts event-\u003eObserved event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#v:finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Manually increment the count of an event \n",
          "module": "NLP.Probability.Observation",
          "name": "inc",
          "package": "estimators",
          "signature": "Counts e -\u003e e -\u003e Count -\u003e Counts e",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#inc",
          "type": "function"
        },
        "index": {
          "description": "Manually increment the count of an event",
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "inc",
          "normalized": "Counts a-\u003ea-\u003eCount-\u003eCounts a",
          "package": "estimators",
          "signature": "Counts e-\u003ee-\u003eCount-\u003eCounts e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#v:inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Observation of a single event  \n",
          "module": "NLP.Probability.Observation",
          "name": "observation",
          "package": "estimators",
          "signature": "event -\u003e Counts event",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#observation",
          "type": "function"
        },
        "index": {
          "description": "Observation of single event",
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "observation",
          "normalized": "a-\u003eCounts a",
          "package": "estimators",
          "signature": "event-\u003eCounts event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#v:observation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Observation",
          "name": "observations",
          "package": "estimators",
          "signature": "event -\u003e Count -\u003e Counts event",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#observations",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "observations",
          "normalized": "a-\u003eCount-\u003eCounts a",
          "package": "estimators",
          "signature": "event-\u003eCount-\u003eCounts event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#v:observations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.Observation",
          "name": "showObsPretty",
          "package": "estimators",
          "signature": "(event -\u003e m Doc) -\u003e Counts event -\u003e m Doc",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-Observation.html#showObsPretty",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability Observation",
          "module": "NLP.Probability.Observation",
          "name": "showObsPretty",
          "normalized": "(a-\u003eb Doc)-\u003eCounts a-\u003eb Doc",
          "package": "estimators",
          "partial": "Obs Pretty",
          "signature": "(event-\u003em Doc)-\u003eCounts event-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-Observation.html#v:showObsPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.SmoothTrie",
          "name": "SmoothTrie",
          "package": "estimators",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-SmoothTrie.html#SmoothTrie",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "NLP Probability SmoothTrie",
          "module": "NLP.Probability.SmoothTrie",
          "name": "SmoothTrie",
          "package": "estimators",
          "partial": "Smooth Trie",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-SmoothTrie.html#t:SmoothTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Probability.SmoothTrie",
          "name": "addColumn",
          "package": "estimators",
          "signature": "[letter] -\u003e holder -\u003e SmoothTrie map letter holder -\u003e SmoothTrie map letter holder",
          "source": "http://hackage.haskell.org/package/estimators/docs/src/NLP-Probability-SmoothTrie.html#addColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Probability SmoothTrie",
          "module": "NLP.Probability.SmoothTrie",
          "name": "addColumn",
          "normalized": "[a]-\u003eb-\u003eSmoothTrie c a b-\u003eSmoothTrie c a b",
          "package": "estimators",
          "partial": "Column",
          "signature": "[letter]-\u003eholder-\u003eSmoothTrie map letter holder-\u003eSmoothTrie map letter holder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/estimators/docs/NLP-Probability-SmoothTrie.html#v:addColumn"
      }
    }
  ]
]