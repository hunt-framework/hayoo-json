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
        "word": "ipopt-hs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAnyRF\u003c/a\u003e\u003c/code\u003e wrapper holds functions that can be used\nfor the objective (\u003ccode\u003ef\u003c/code\u003e) or for constraints (\u003ccode\u003eg\u003c/code\u003e). Many functions\nin the instances provided are partial: this seems to be unavoidable\nbecause the input variables haven't been decided yet, so you should\nnot be allowed to use \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e on these. But for now just use the\nstandard Prelude classes, and unimplementable functions (which\nwould not produce an \u003ccode\u003e\u003ca\u003eAnyRF\u003c/a\u003e\u003c/code\u003e) are calls to \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eValues of type \u003ccode\u003eAnyRF Identity\u003c/code\u003e can be generated using functions \ndefined in \u003ca\u003eIpopt.NLP\u003c/a\u003e (also exported by \u003ca\u003eIpopt\u003c/a\u003e). Directly using the\nconstructor is another option: \u003ccode\u003eAnyRF $ Identity . V.sum\u003c/code\u003e, calculates\nthe sum of all variables in the problem.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Ipopt.AnyRF",
          "name": "AnyRF",
          "package": "ipopt-hs",
          "source": "src/Ipopt-AnyRF.html",
          "type": "module"
        },
        "index": {
          "description": "The AnyRF wrapper holds functions that can be used for the objective or for constraints Many functions in the instances provided are partial this seems to be unavoidable because the input variables haven been decided yet so you should not be allowed to use compare on these But for now just use the standard Prelude classes and unimplementable functions which would not produce an AnyRF are calls to error Values of type AnyRF Identity can be generated using functions defined in Ipopt.NLP also exported by Ipopt Directly using the constructor is another option AnyRF Identity V.sum calculates the sum of all variables in the problem",
          "hierarchy": "Ipopt AnyRF",
          "module": "Ipopt.AnyRF",
          "name": "AnyRF",
          "package": "ipopt-hs",
          "partial": "Any RF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-AnyRF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAnyRF cb\u003c/code\u003e is a function that uses variables from the nonlinear\n program in a way supported by \u003ccode\u003e\u003ca\u003eAnyRFCxt\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003ecb\u003c/code\u003e is\n usually \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Ipopt.AnyRF",
          "name": "AnyRF",
          "package": "ipopt-hs",
          "source": "src/Ipopt-AnyRF.html#AnyRF",
          "type": "data"
        },
        "index": {
          "description": "AnyRF cb is function that uses variables from the nonlinear program in way supported by AnyRFCxt The cb is usually Identity",
          "hierarchy": "Ipopt AnyRF",
          "module": "Ipopt.AnyRF",
          "name": "AnyRF",
          "package": "ipopt-hs",
          "partial": "Any RF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-AnyRF.html#t:AnyRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRealFloat gives most numerical operations,\n \u003ccode\u003e\u003ca\u003eVectorSpace\u003c/a\u003e\u003c/code\u003e is involved to allow using definitions from the\n \u003ca\u003esplines\u003c/a\u003e package\n\u003c/p\u003e",
          "module": "Ipopt.AnyRF",
          "name": "AnyRFCxt",
          "package": "ipopt-hs",
          "source": "src/Ipopt-AnyRF.html#AnyRFCxt",
          "type": "type"
        },
        "index": {
          "description": "RealFloat gives most numerical operations VectorSpace is involved to allow using definitions from the splines package",
          "hierarchy": "Ipopt AnyRF",
          "module": "Ipopt.AnyRF",
          "name": "AnyRFCxt",
          "package": "ipopt-hs",
          "partial": "Any RFCxt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-AnyRF.html#t:AnyRFCxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.AnyRF\",\"Ipopt\"]",
          "name": "AnyRF",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e cb a)",
          "source": "src/Ipopt-AnyRF.html#AnyRF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-AnyRF.html#v:AnyRF\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:AnyRF\"]"
        },
        "index": {
          "hierarchy": "Ipopt AnyRF",
          "module": "Ipopt.AnyRF",
          "name": "AnyRF",
          "normalized": "Vector a-\u003eb a)",
          "package": "ipopt-hs",
          "partial": "Any RF",
          "signature": "Vector a-\u003ecb a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-AnyRF.html#v:AnyRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.AnyRF",
          "name": "liftOp0",
          "package": "ipopt-hs",
          "signature": "a) -\u003e AnyRF Identity",
          "source": "src/Ipopt-AnyRF.html#liftOp0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt AnyRF",
          "module": "Ipopt.AnyRF",
          "name": "liftOp0",
          "normalized": "a)-\u003eAnyRF Identity",
          "package": "ipopt-hs",
          "partial": "Op",
          "signature": "a)-\u003eAnyRF Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-AnyRF.html#v:liftOp0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.AnyRF",
          "name": "liftOp1",
          "package": "ipopt-hs",
          "signature": "a -\u003e a) -\u003e AnyRF Identity -\u003e AnyRF Identity",
          "source": "src/Ipopt-AnyRF.html#liftOp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt AnyRF",
          "module": "Ipopt.AnyRF",
          "name": "liftOp1",
          "normalized": "a-\u003ea)-\u003eAnyRF Identity-\u003eAnyRF Identity",
          "package": "ipopt-hs",
          "partial": "Op",
          "signature": "a-\u003ea)-\u003eAnyRF Identity-\u003eAnyRF Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-AnyRF.html#v:liftOp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.AnyRF",
          "name": "liftOp2",
          "package": "ipopt-hs",
          "signature": "a -\u003e a -\u003e a) -\u003e AnyRF Identity -\u003e AnyRF Identity -\u003e AnyRF Identity",
          "source": "src/Ipopt-AnyRF.html#liftOp2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt AnyRF",
          "module": "Ipopt.AnyRF",
          "name": "liftOp2",
          "normalized": "a-\u003ea-\u003ea)-\u003eAnyRF Identity-\u003eAnyRF Identity-\u003eAnyRF Identity",
          "package": "ipopt-hs",
          "partial": "Op",
          "signature": "a-\u003ea-\u003ea)-\u003eAnyRF Identity-\u003eAnyRF Identity-\u003eAnyRF Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-AnyRF.html#v:liftOp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esee usage in \u003ccode\u003eexamples/Test3.hs\u003c/code\u003e (and other examples)\n\u003c/p\u003e\u003cp\u003eIPOPT does support naming variables if you use c++\n (by overriding a \u003ccode\u003evirtual void finalize_metadata\u003c/code\u003e), but\n it's not clear that we can set that from c/haskell\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Ipopt.NLP",
          "name": "NLP",
          "package": "ipopt-hs",
          "source": "src/Ipopt-NLP.html",
          "type": "module"
        },
        "index": {
          "description": "see usage in examples Test3.hs and other examples IPOPT does support naming variables if you use by overriding virtual void finalize metadata but it not clear that we can set that from haskell",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "NLP",
          "package": "ipopt-hs",
          "partial": "NLP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe solver deals with arrays. This type is for indexes into the array\n for the current variables that the solver is trying to find.\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "Ix",
          "package": "ipopt-hs",
          "source": "src/Ipopt-NLP.html#Ix",
          "type": "newtype"
        },
        "index": {
          "description": "the solver deals with arrays This type is for indexes into the array for the current variables that the solver is trying to find",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "Ix",
          "package": "ipopt-hs",
          "partial": "Ix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#t:Ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "IxMap",
          "package": "ipopt-hs",
          "source": "src/Ipopt-NLP.html#IxMap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "IxMap",
          "package": "ipopt-hs",
          "partial": "Ix Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#t:IxMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "NLP",
          "package": "ipopt-hs",
          "source": "src/Ipopt-NLP.html#NLP",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "NLP",
          "package": "ipopt-hs",
          "partial": "NLP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#t:NLP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "NLPFun",
          "package": "ipopt-hs",
          "source": "src/Ipopt-NLP.html#NLPFun",
          "type": "data"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "NLPFun",
          "package": "ipopt-hs",
          "partial": "NLPFun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#t:NLPFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "NLPState",
          "package": "ipopt-hs",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "NLPState",
          "package": "ipopt-hs",
          "partial": "NLPState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#t:NLPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "NLPT",
          "package": "ipopt-hs",
          "source": "src/Ipopt-NLP.html#NLPT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "NLPT",
          "package": "ipopt-hs",
          "partial": "NLPT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#t:NLPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "Ix",
          "package": "ipopt-hs",
          "signature": "Ix",
          "source": "src/Ipopt-NLP.html#Ix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "Ix",
          "package": "ipopt-hs",
          "partial": "Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:Ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "IxMap",
          "package": "ipopt-hs",
          "signature": "IxMap (IntMap a)",
          "source": "src/Ipopt-NLP.html#IxMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "IxMap",
          "package": "ipopt-hs",
          "partial": "Ix Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:IxMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "NLPFun",
          "package": "ipopt-hs",
          "signature": "NLPFun",
          "source": "src/Ipopt-NLP.html#NLPFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "NLPFun",
          "package": "ipopt-hs",
          "partial": "NLPFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:NLPFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "NLPState",
          "package": "ipopt-hs",
          "signature": "NLPState",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "NLPState",
          "package": "ipopt-hs",
          "partial": "NLPState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:NLPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_boundG",
          "package": "ipopt-hs",
          "signature": "Seq (Double, Double)",
          "source": "src/Ipopt-NLP.html#NLPFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_boundG",
          "normalized": "Seq(Double,Double)",
          "package": "ipopt-hs",
          "signature": "Seq(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_boundG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_boundX",
          "package": "ipopt-hs",
          "signature": "Seq (Double, Double)",
          "source": "src/Ipopt-NLP.html#NLPFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_boundX",
          "normalized": "Seq(Double,Double)",
          "package": "ipopt-hs",
          "signature": "Seq(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_boundX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_constraintEnv",
          "package": "ipopt-hs",
          "signature": "IntMap [String]",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_constraintEnv",
          "normalized": "IntMap[String]",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "IntMap[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_constraintEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehuman-readable descriptions for the constraint, objective and\n variables\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_constraintLabels",
          "package": "ipopt-hs",
          "signature": "IntMap String",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "human-readable descriptions for the constraint objective and variables",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_constraintLabels",
          "package": "ipopt-hs",
          "partial": "Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_constraintLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_constraintTol",
          "package": "ipopt-hs",
          "signature": "Seq (Double, Double)",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_constraintTol",
          "normalized": "Seq(Double,Double)",
          "package": "ipopt-hs",
          "partial": "Tol",
          "signature": "Seq(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_constraintTol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat namespace are we currently in (see \u003ccode\u003e\u003ca\u003einEnv\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_currentEnv",
          "package": "ipopt-hs",
          "signature": "[String]",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "what namespace are we currently in see inEnv",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_currentEnv",
          "normalized": "[String]",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_currentEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe default \u003ccode\u003e(xL,xU)\u003c/code\u003e for \u003ccode\u003exL \u003c x \u003c xU\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_defaultBounds",
          "package": "ipopt-hs",
          "signature": "(Double, Double)",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "the default xL xU for xL xU",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_defaultBounds",
          "normalized": "(Double,Double)",
          "package": "ipopt-hs",
          "partial": "Bounds",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_defaultBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor nlopt (lower/upper)\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_defaultConstraintTol",
          "package": "ipopt-hs",
          "signature": "(Double, Double)",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "for nlopt lower upper",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_defaultConstraintTol",
          "normalized": "(Double,Double)",
          "package": "ipopt-hs",
          "partial": "Constraint Tol",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_defaultConstraintTol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_funF",
          "package": "ipopt-hs",
          "signature": "AnyRF Seq",
          "source": "src/Ipopt-NLP.html#NLPFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_funF",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_funF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_funG",
          "package": "ipopt-hs",
          "signature": "AnyRF Seq",
          "source": "src/Ipopt-NLP.html#NLPFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_funG",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_funG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einital state variable for the solver\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_initX",
          "package": "ipopt-hs",
          "signature": "Vector Double",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "inital state variable for the solver",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_initX",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_initX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent maximum index\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_nMax",
          "package": "ipopt-hs",
          "signature": "Ix",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "current maximum index",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_nMax",
          "package": "ipopt-hs",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_nMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_nlpfun",
          "package": "ipopt-hs",
          "signature": "NLPFun",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_nlpfun",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_nlpfun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_objEnv",
          "package": "ipopt-hs",
          "signature": "IntMap [String]",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_objEnv",
          "normalized": "IntMap[String]",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "IntMap[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_objEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehuman-readable descriptions for the constraint, objective and\n variables\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_objLabels",
          "package": "ipopt-hs",
          "signature": "IntMap String",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "human-readable descriptions for the constraint objective and variables",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_objLabels",
          "package": "ipopt-hs",
          "partial": "Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_objLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ein what environments is a given var used?\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_varEnv",
          "package": "ipopt-hs",
          "signature": "IxMap (Set [String])",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "in what environments is given var used",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_varEnv",
          "normalized": "IxMap(Set[String])",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "IxMap(Set[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_varEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_varIx",
          "package": "ipopt-hs",
          "signature": "Int",
          "source": "src/Ipopt-NLP.html#Ix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_varIx",
          "package": "ipopt-hs",
          "partial": "Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_varIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "_varLabels",
          "package": "ipopt-hs",
          "signature": "IxMap String",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_varLabels",
          "package": "ipopt-hs",
          "partial": "Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_varLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efully qualified (see \u003ccode\u003e\u003ca\u003einEnv\u003c/a\u003e\u003c/code\u003e) name\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_variables",
          "package": "ipopt-hs",
          "signature": "Map String Ix",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "fully qualified see inEnv name",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_variables",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_variables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einvert _variables\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "_variablesInv",
          "package": "ipopt-hs",
          "signature": "IxMap String",
          "source": "src/Ipopt-NLP.html#NLPState",
          "type": "function"
        },
        "index": {
          "description": "invert variables",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "_variablesInv",
          "package": "ipopt-hs",
          "partial": "Inv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:_variablesInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eto\u003c/code\u003e should be \u003ccode\u003e\u003ca\u003econstraintLabels\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eobjLabels\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evarLabels\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "addDesc",
          "package": "ipopt-hs",
          "signature": "Setting (-\u003e) s s (IntMap a) (IntMap a) -\u003e Maybe a -\u003e Key -\u003e m ()",
          "source": "src/Ipopt-NLP.html#addDesc",
          "type": "function"
        },
        "index": {
          "description": "to should be constraintLabels objLabels varLabels",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "addDesc",
          "normalized": "Setting(-\u003e)a a(IntMap b)(IntMap b)-\u003eMaybe b-\u003eKey-\u003ec()",
          "package": "ipopt-hs",
          "partial": "Desc",
          "signature": "Setting(-\u003e)s s(IntMap a)(IntMap a)-\u003eMaybe a-\u003eKey-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:addDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a piece of the objective function, which is added in the form\n`f_1 + f_2 + ...`, to make it easier to understand (at some point)\nwhich components are responsible for the majority of the cost, and\nwhich are irrelevant.\n\u003c/p\u003e",
          "module": "[\"Ipopt.NLP\",\"Ipopt\"]",
          "name": "addF",
          "package": "ipopt-hs",
          "signature": "Maybe String-\u003e AnyRF Identity-\u003e NLPT m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:addF\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:addF\"]"
        },
        "index": {
          "description": "add piece of the objective function which is added in the form to make it easier to understand at some point which components are responsible for the majority of the cost and which are irrelevant",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "addF",
          "normalized": "Maybe String-\u003eAnyRF Identity-\u003eNLPT a()",
          "package": "ipopt-hs",
          "signature": "Maybe String-\u003eAnyRF Identity-\u003eNLPT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:addF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a constraint\n\u003c/p\u003e",
          "module": "[\"Ipopt.NLP\",\"Ipopt\"]",
          "name": "addG",
          "package": "ipopt-hs",
          "signature": "Maybe String-\u003e (Double, Double)-\u003e AnyRF Identity-\u003e NLPT m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:addG\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:addG\"]"
        },
        "index": {
          "description": "add constraint",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "addG",
          "normalized": "Maybe String-\u003e(Double,Double)-\u003eAnyRF Identity-\u003eNLPT a()",
          "package": "ipopt-hs",
          "signature": "Maybe String-\u003e(Double,Double)-\u003eAnyRF Identity-\u003eNLPT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:addG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "at_",
          "package": "ipopt-hs",
          "signature": "Ix -\u003e (Maybe a -\u003e f (Maybe a)) -\u003e IxMap a -\u003e f (IxMap a)",
          "source": "src/Ipopt-NLP.html#at_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "at_",
          "normalized": "Ix-\u003e(Maybe a-\u003eb(Maybe a))-\u003eIxMap a-\u003eb(IxMap a)",
          "package": "ipopt-hs",
          "signature": "Ix-\u003e(Maybe a-\u003ef(Maybe a))-\u003eIxMap a-\u003ef(IxMap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:at_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "boundG",
          "package": "ipopt-hs",
          "signature": "Lens' NLPFun (Seq (Double, Double))",
          "source": "src/Ipopt-NLP.html#boundG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "boundG",
          "normalized": "Lens' NLPFun(Seq(Double,Double))",
          "package": "ipopt-hs",
          "signature": "Lens' NLPFun(Seq(Double,Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:boundG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "boundX",
          "package": "ipopt-hs",
          "signature": "Lens' NLPFun (Seq (Double, Double))",
          "source": "src/Ipopt-NLP.html#boundX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "boundX",
          "normalized": "Lens' NLPFun(Seq(Double,Double))",
          "package": "ipopt-hs",
          "signature": "Lens' NLPFun(Seq(Double,Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:boundX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "constraintEnv",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (IntMap [String])",
          "source": "src/Ipopt-NLP.html#constraintEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "constraintEnv",
          "normalized": "Lens' NLPState(IntMap[String])",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "Lens' NLPState(IntMap[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:constraintEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "constraintLabels",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (IntMap String)",
          "source": "src/Ipopt-NLP.html#constraintLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "constraintLabels",
          "package": "ipopt-hs",
          "partial": "Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:constraintLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "constraintTol",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (Seq (Double, Double))",
          "source": "src/Ipopt-NLP.html#constraintTol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "constraintTol",
          "normalized": "Lens' NLPState(Seq(Double,Double))",
          "package": "ipopt-hs",
          "partial": "Tol",
          "signature": "Lens' NLPState(Seq(Double,Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:constraintTol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eto\u003c/code\u003e is one of \u003ccode\u003e\u003ca\u003evarEnv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003econstraintEnv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eobjEnv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "copyEnv",
          "package": "ipopt-hs",
          "signature": "ALens NLPState NLPState (IntMap [String]) (IntMap [String]) -\u003e Key -\u003e m ()",
          "source": "src/Ipopt-NLP.html#copyEnv",
          "type": "function"
        },
        "index": {
          "description": "to is one of varEnv constraintEnv objEnv",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "copyEnv",
          "normalized": "ALens NLPState NLPState(IntMap[String])(IntMap[String])-\u003eKey-\u003ea()",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "ALens NLPState NLPState(IntMap[String])(IntMap[String])-\u003eKey-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:copyEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "currentEnv",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState [String]",
          "source": "src/Ipopt-NLP.html#currentEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "currentEnv",
          "normalized": "Lens' NLPState[String]",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "Lens' NLPState[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:currentEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "defaultBounds",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (Double, Double)",
          "source": "src/Ipopt-NLP.html#defaultBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "defaultBounds",
          "normalized": "Lens' NLPState(Double,Double)",
          "package": "ipopt-hs",
          "partial": "Bounds",
          "signature": "Lens' NLPState(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:defaultBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "defaultConstraintTol",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (Double, Double)",
          "source": "src/Ipopt-NLP.html#defaultConstraintTol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "defaultConstraintTol",
          "normalized": "Lens' NLPState(Double,Double)",
          "package": "ipopt-hs",
          "partial": "Constraint Tol",
          "signature": "Lens' NLPState(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:defaultConstraintTol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "funF",
          "package": "ipopt-hs",
          "signature": "Lens' NLPFun (AnyRF Seq)",
          "source": "src/Ipopt-NLP.html#funF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "funF",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:funF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "funG",
          "package": "ipopt-hs",
          "signature": "Lens' NLPFun (AnyRF Seq)",
          "source": "src/Ipopt-NLP.html#funG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "funG",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:funG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecombination of \u003ccode\u003e\u003ca\u003epushEnv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epopEnv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "inEnv",
          "package": "ipopt-hs",
          "signature": "String -\u003e NLPT m a -\u003e NLPT m a",
          "source": "src/Ipopt-NLP.html#inEnv",
          "type": "function"
        },
        "index": {
          "description": "combination of pushEnv and popEnv",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "inEnv",
          "normalized": "String-\u003eNLPT a b-\u003eNLPT a b",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "String-\u003eNLPT m a-\u003eNLPT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:inEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "initX",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (Vector Double)",
          "source": "src/Ipopt-NLP.html#initX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "initX",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:initX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "ixMap",
          "package": "ipopt-hs",
          "signature": "forall a a.  Iso (IntMap a) (IntMap a) (IxMap a) (IxMap a)",
          "source": "src/Ipopt-NLP.html#ixMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "ixMap",
          "package": "ipopt-hs",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:ixMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "ixToVar",
          "package": "ipopt-hs",
          "signature": "Ix -\u003e AnyRF Identity",
          "source": "src/Ipopt-NLP.html#ixToVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "ixToVar",
          "normalized": "Ix-\u003eAnyRF Identity",
          "package": "ipopt-hs",
          "partial": "To Var",
          "signature": "Ix-\u003eAnyRF Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:ixToVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshould be a way to write an instance of At that'll make the normal\n at\u003cem\u003eix work with the IxMap \u003c/em\u003e Ix (as opposed to IntMap/Int)\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "ix_",
          "package": "ipopt-hs",
          "signature": "Ix -\u003e (a -\u003e f a) -\u003e IxMap a -\u003e f (IxMap a)",
          "source": "src/Ipopt-NLP.html#ix_",
          "type": "function"
        },
        "index": {
          "description": "should be way to write an instance of At that ll make the normal at ix work with the IxMap Ix as opposed to IntMap Int",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "ix_",
          "normalized": "Ix-\u003e(a-\u003eb a)-\u003eIxMap a-\u003eb(IxMap a)",
          "package": "ipopt-hs",
          "signature": "Ix-\u003e(a-\u003ef a)-\u003eIxMap a-\u003ef(IxMap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:ix_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "nMax",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState Ix",
          "source": "src/Ipopt-NLP.html#nMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "nMax",
          "package": "ipopt-hs",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:nMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshrink the interval in which that variable is allowed.\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "narrowBounds",
          "package": "ipopt-hs",
          "signature": "Ix -\u003e (Double, Double) -\u003e NLPT m ()",
          "source": "src/Ipopt-NLP.html#narrowBounds",
          "type": "function"
        },
        "index": {
          "description": "shrink the interval in which that variable is allowed",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "narrowBounds",
          "normalized": "Ix-\u003e(Double,Double)-\u003eNLPT a()",
          "package": "ipopt-hs",
          "partial": "Bounds",
          "signature": "Ix-\u003e(Double,Double)-\u003eNLPT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:narrowBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "nlpfun",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState NLPFun",
          "source": "src/Ipopt-NLP.html#nlpfun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "nlpfun",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:nlpfun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe initial state to use when you actually have to get to IO\n with the solution\n\u003c/p\u003e",
          "module": "[\"Ipopt.NLP\",\"Ipopt\"]",
          "name": "nlpstate0",
          "package": "ipopt-hs",
          "signature": "NLPState",
          "source": "src/Ipopt-NLP.html#nlpstate0",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:nlpstate0\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:nlpstate0\"]"
        },
        "index": {
          "description": "the initial state to use when you actually have to get to IO with the solution",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "nlpstate0",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:nlpstate0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "objEnv",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (IntMap [String])",
          "source": "src/Ipopt-NLP.html#objEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "objEnv",
          "normalized": "Lens' NLPState(IntMap[String])",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "Lens' NLPState(IntMap[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:objEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "objLabels",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (IntMap String)",
          "source": "src/Ipopt-NLP.html#objLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "objLabels",
          "package": "ipopt-hs",
          "partial": "Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:objLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "popEnv",
          "package": "ipopt-hs",
          "signature": "NLPT m String",
          "source": "src/Ipopt-NLP.html#popEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "popEnv",
          "package": "ipopt-hs",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:popEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "pushEnv",
          "package": "ipopt-hs",
          "signature": "String -\u003e NLPT m ()",
          "source": "src/Ipopt-NLP.html#pushEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "pushEnv",
          "normalized": "String-\u003eNLPT a()",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "String-\u003eNLPT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:pushEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "seqToVecs",
          "package": "ipopt-hs",
          "signature": "Seq (Double, Double) -\u003e m (Vec, Vec)",
          "source": "src/Ipopt-NLP.html#seqToVecs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "seqToVecs",
          "normalized": "Seq(Double,Double)-\u003ea(Vec,Vec)",
          "package": "ipopt-hs",
          "partial": "To Vecs",
          "signature": "Seq(Double,Double)-\u003em(Vec,Vec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:seqToVecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoverride bounds. Should be unnecessary given \u003ccode\u003e\u003ca\u003evar\u003c/a\u003e\u003c/code\u003e takes bounds.\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "setBounds",
          "package": "ipopt-hs",
          "signature": "Ix -\u003e (Double, Double) -\u003e NLPT m ()",
          "source": "src/Ipopt-NLP.html#setBounds",
          "type": "function"
        },
        "index": {
          "description": "override bounds Should be unnecessary given var takes bounds",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "setBounds",
          "normalized": "Ix-\u003e(Double,Double)-\u003eNLPT a()",
          "package": "ipopt-hs",
          "partial": "Bounds",
          "signature": "Ix-\u003e(Double,Double)-\u003eNLPT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:setBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalls \u003ccode\u003e\u003ca\u003ecreateIpoptProblemAD\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eipoptSolve\u003c/a\u003e\u003c/code\u003e. To be used at the\n end of a do-block.\n\u003c/p\u003e",
          "module": "[\"Ipopt.NLP\",\"Ipopt\"]",
          "name": "solveNLP'",
          "package": "ipopt-hs",
          "signature": "(IpProblem -\u003e IO ())-\u003e NLPT m (IpOptSolved v)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:solveNLP-39-\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:solveNLP-39-\"]"
        },
        "index": {
          "description": "calls createIpoptProblemAD and ipoptSolve To be used at the end of do-block",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "solveNLP'",
          "normalized": "(IpProblem-\u003eIO())-\u003eNLPT a(IpOptSolved b)",
          "package": "ipopt-hs",
          "partial": "NLP'",
          "signature": "(IpProblem-\u003eIO())-\u003eNLPT m(IpOptSolved v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:solveNLP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esplits a variable \u003ccode\u003ex\u003c/code\u003e into two positive variables such that\n\u003ccode\u003ex = x^+ - x^-\u003c/code\u003e the new variables represent the positive and negative\nparts of \u003ccode\u003ex - b\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e (xMinus, xPlus) \u003c- splitVar b x\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003emax (x-b) 0\u003c/code\u003e instead of xPlus (ie. not telling the solver that \u003ccode\u003eb\u003c/code\u003e is\na special point) seems to work just as well\n\u003c/p\u003e",
          "module": "Ipopt.NLP",
          "name": "splitVar",
          "package": "ipopt-hs",
          "signature": "Double-\u003e Ix-\u003e NLPT m (AnyRF Identity, AnyRF Identity)",
          "type": "function"
        },
        "index": {
          "description": "splits variable into two positive variables such that the new variables represent the positive and negative parts of xMinus xPlus splitVar Using max x-b instead of xPlus ie not telling the solver that is special point seems to work just as well",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "splitVar",
          "normalized": "Double-\u003eIx-\u003eNLPT a(AnyRF Identity,AnyRF Identity)",
          "package": "ipopt-hs",
          "partial": "Var",
          "signature": "Double-\u003eIx-\u003eNLPT m(AnyRF Identity,AnyRF Identity)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:splitVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea combination of \u003ccode\u003e\u003ca\u003evar'\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eixToVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Ipopt.NLP\",\"Ipopt\"]",
          "name": "var",
          "package": "ipopt-hs",
          "signature": "Maybe (Double, Double) -\u003e String -\u003e StateT NLPState m (AnyRF Identity)",
          "source": "src/Ipopt-NLP.html#var",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:var\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:var\"]"
        },
        "index": {
          "description": "combination of var and ixToVar",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "var",
          "normalized": "Maybe(Double,Double)-\u003eString-\u003eStateT NLPState a(AnyRF Identity)",
          "package": "ipopt-hs",
          "signature": "Maybe(Double,Double)-\u003eString-\u003eStateT NLPState m(AnyRF Identity)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a variable, or get a reference to the the same variable if it has\n already been used\n\u003c/p\u003e",
          "module": "[\"Ipopt.NLP\",\"Ipopt\"]",
          "name": "var'",
          "package": "ipopt-hs",
          "signature": "Maybe (Double, Double)-\u003e Maybe String-\u003e String-\u003e NLPT m Ix",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:var-39-\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:var-39-\"]"
        },
        "index": {
          "description": "add variable or get reference to the the same variable if it has already been used",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "var'",
          "normalized": "Maybe(Double,Double)-\u003eMaybe String-\u003eString-\u003eNLPT a Ix",
          "package": "ipopt-hs",
          "signature": "Maybe(Double,Double)-\u003eMaybe String-\u003eString-\u003eNLPT m Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:var-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "varEnv",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (IxMap (Set [String]))",
          "source": "src/Ipopt-NLP.html#varEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "varEnv",
          "normalized": "Lens' NLPState(IxMap(Set[String]))",
          "package": "ipopt-hs",
          "partial": "Env",
          "signature": "Lens' NLPState(IxMap(Set[String]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:varEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003evarFresh'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Ipopt.NLP\",\"Ipopt\"]",
          "name": "varFresh",
          "package": "ipopt-hs",
          "signature": "Maybe (Double, Double) -\u003e String -\u003e StateT NLPState m (AnyRF Identity)",
          "source": "src/Ipopt-NLP.html#varFresh",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:varFresh\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:varFresh\"]"
        },
        "index": {
          "description": "see varFresh",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "varFresh",
          "normalized": "Maybe(Double,Double)-\u003eString-\u003eStateT NLPState a(AnyRF Identity)",
          "package": "ipopt-hs",
          "partial": "Fresh",
          "signature": "Maybe(Double,Double)-\u003eString-\u003eStateT NLPState m(AnyRF Identity)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:varFresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evar\u003c/a\u003e\u003c/code\u003e, except this causes the solver to get a new variable,\nso that you can use:\n\u003c/p\u003e\u003cpre\u003e [a,b,c,d,e] \u003c- replicateM 5 (varFresh (Just (0, 10)) \"x\")\n\u003c/pre\u003e\u003cp\u003eand the different letters can take different values (between 0 and 10)\nin the optimal solution (depending on what you do with \u003ccode\u003ea\u003c/code\u003e and similar\nin the objective function and other constraints).\n\u003c/p\u003e",
          "module": "[\"Ipopt.NLP\",\"Ipopt\"]",
          "name": "varFresh'",
          "package": "ipopt-hs",
          "signature": "Maybe (Double, Double) -\u003e String -\u003e NLPT m Ix",
          "source": "src/Ipopt-NLP.html#varFresh%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:varFresh-39-\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:varFresh-39-\"]"
        },
        "index": {
          "description": "var except this causes the solver to get new variable so that you can use replicateM varFresh Just and the different letters can take different values between and in the optimal solution depending on what you do with and similar in the objective function and other constraints",
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "varFresh'",
          "normalized": "Maybe(Double,Double)-\u003eString-\u003eNLPT a Ix",
          "package": "ipopt-hs",
          "partial": "Fresh'",
          "signature": "Maybe(Double,Double)-\u003eString-\u003eNLPT m Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:varFresh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "varIx",
          "package": "ipopt-hs",
          "signature": "Iso' Ix Int",
          "source": "src/Ipopt-NLP.html#varIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "varIx",
          "package": "ipopt-hs",
          "partial": "Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:varIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "varLabels",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (IxMap String)",
          "source": "src/Ipopt-NLP.html#varLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "varLabels",
          "package": "ipopt-hs",
          "partial": "Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:varLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "variables",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (Map String Ix)",
          "source": "src/Ipopt-NLP.html#variables",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "variables",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:variables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.NLP",
          "name": "variablesInv",
          "package": "ipopt-hs",
          "signature": "Lens' NLPState (IxMap String)",
          "source": "src/Ipopt-NLP.html#variablesInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt NLP",
          "module": "Ipopt.NLP",
          "name": "variablesInv",
          "package": "ipopt-hs",
          "partial": "Inv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-NLP.html#v:variablesInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "Options",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Options.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "Options",
          "package": "ipopt-hs",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "OptionType",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Options.html#OptionType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "OptionType",
          "package": "ipopt-hs",
          "partial": "Option Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#t:OptionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "OptionVal",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Options.html#OptionVal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "OptionVal",
          "package": "ipopt-hs",
          "partial": "Option Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#t:OptionVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "AInt",
          "package": "ipopt-hs",
          "signature": "AInt Int",
          "source": "src/Ipopt-Options.html#OptionVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "AInt",
          "package": "ipopt-hs",
          "partial": "AInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:AInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "ANum",
          "package": "ipopt-hs",
          "signature": "ANum Double",
          "source": "src/Ipopt-Options.html#OptionVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "ANum",
          "package": "ipopt-hs",
          "partial": "ANum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:ANum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "AStr",
          "package": "ipopt-hs",
          "signature": "AStr String",
          "source": "src/Ipopt-Options.html#OptionVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "AStr",
          "package": "ipopt-hs",
          "partial": "AStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:AStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e$x\u003c/pre\u003e",
          "module": "Ipopt.Options",
          "name": "AVar",
          "package": "ipopt-hs",
          "signature": "AVar OptionType String",
          "source": "src/Ipopt-Options.html#OptionVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "AVar",
          "package": "ipopt-hs",
          "partial": "AVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:AVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eactually string yes or string no\n\u003c/p\u003e",
          "module": "Ipopt.Options",
          "name": "OptionBool",
          "package": "ipopt-hs",
          "signature": "OptionBool",
          "source": "src/Ipopt-Options.html#OptionType",
          "type": "function"
        },
        "index": {
          "description": "actually string yes or string no",
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "OptionBool",
          "package": "ipopt-hs",
          "partial": "Option Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:OptionBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "OptionInt",
          "package": "ipopt-hs",
          "signature": "OptionInt",
          "source": "src/Ipopt-Options.html#OptionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "OptionInt",
          "package": "ipopt-hs",
          "partial": "Option Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:OptionInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "OptionNum",
          "package": "ipopt-hs",
          "signature": "OptionNum",
          "source": "src/Ipopt-Options.html#OptionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "OptionNum",
          "package": "ipopt-hs",
          "partial": "Option Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:OptionNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "OptionStr",
          "package": "ipopt-hs",
          "signature": "OptionStr",
          "source": "src/Ipopt-Options.html#OptionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "OptionStr",
          "package": "ipopt-hs",
          "partial": "Option Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:OptionStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "addIpoptOpt",
          "package": "ipopt-hs",
          "signature": "Name -\u003e String -\u003e OptionVal -\u003e ExpQ",
          "source": "src/Ipopt-Options.html#addIpoptOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "addIpoptOpt",
          "normalized": "Name-\u003eString-\u003eOptionVal-\u003eExpQ",
          "package": "ipopt-hs",
          "partial": "Ipopt Opt",
          "signature": "Name-\u003eString-\u003eOptionVal-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:addIpoptOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list of all the options in\n \u003ca\u003ehttp://www.coin-or.org/Ipopt/documentation/node39.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Ipopt.Options",
          "name": "ipoptOptions",
          "package": "ipopt-hs",
          "signature": "Map String OptionType",
          "source": "src/Ipopt-Options.html#ipoptOptions",
          "type": "function"
        },
        "index": {
          "description": "list of all the options in http www.coin-or.org Ipopt documentation node39.html",
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "ipoptOptions",
          "package": "ipopt-hs",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:ipoptOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean expression-only quasiquote intended to be the second argument for\n\u003ccode\u003e\u003ca\u003esolveNLP'\u003c/a\u003e\u003c/code\u003e (so \u003ccode\u003esolveNLP [ipopts| tol = 1e-3 |]\u003c/code\u003e). This is a shortcut\nfor calling \u003ccode\u003e\u003ca\u003eaddIpoptNumOption\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eaddIpoptStrOption\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eaddIpoptIntOption\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eRefer to \u003ca\u003eipopt's options reference\u003c/a\u003e,\nthe syntax is like \u003ccode\u003eoption_name = value;option2 = value2\u003c/code\u003e. The semicolons are optional and\nwhitespace alone can separate the option name from the value. A few examples of the parser:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XQuasiQuotes\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f = [ipopts| tol = 1e-3; print_level = 0 |]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t f\n\u003c/code\u003e\u003c/strong\u003ef :: IpProblem -\u003e IO ()\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet p x = uuParseTest parseOpts x\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep \"tol = 3\"\n\u003c/code\u003e\u003c/strong\u003e([(\"tol\",ANum 3.0)],[])\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep \"tol = 3 tol = 4\" -- the last one wins. No warnings done (yet).\n\u003c/code\u003e\u003c/strong\u003e([(\"tol\",ANum 3.0),(\"tol\",ANum 4.0)],[])\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep \"tol = 3\\n\\ntol = 4\"\n\u003c/code\u003e\u003c/strong\u003e([(\"tol\",ANum 3.0),(\"tol\",ANum 4.0)],[])\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep \"acceptable_iter = 25; output_file = foobar\" -- quotation marks optional\n\u003c/code\u003e\u003c/strong\u003e([(\"acceptable_iter\",AInt 25),(\"output_file\",AStr \"foobar\")],[])\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep \"output_file = \\\"foo bar\\\"\" -- but needed here\n\u003c/code\u003e\u003c/strong\u003e([(\"output_file\",AStr \"foo bar\")],[])\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ (++\"...\") $ take 100 $ show $ p \"atol = 1.8\" -- typo gets corrected\n\u003c/code\u003e\u003c/strong\u003e([(\"tol\",ANum 1.8)],[--    Deleted   'a' at position LineColPos 0 0 0 expecting one of [Whitespace, ...\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ep \"tol = $xY\" -- interpolating haskell variables\n\u003c/code\u003e\u003c/strong\u003e([(\"tol\",AVar OptionNum \"xY\")],[])\n\u003c/pre\u003e",
          "module": "[\"Ipopt.Options\",\"Ipopt\"]",
          "name": "ipopts",
          "package": "ipopt-hs",
          "signature": "QuasiQuoter",
          "source": "src/Ipopt-Options.html#ipopts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:ipopts\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:ipopts\"]"
        },
        "index": {
          "description": "an expression-only quasiquote intended to be the second argument for solveNLP so solveNLP ipopts tol e-3 This is shortcut for calling addIpoptNumOption addIpoptStrOption or addIpoptIntOption Refer to ipopt options reference the syntax is like option name value option2 value2 The semicolons are optional and whitespace alone can separate the option name from the value few examples of the parser set XQuasiQuotes let ipopts tol e-3 print level IpProblem IO let uuParseTest parseOpts tol tol ANum tol tol the last one wins No warnings done yet tol ANum tol ANum tol ntol tol ANum tol ANum acceptable iter output file foobar quotation marks optional acceptable iter AInt output file AStr foobar output file foo bar but needed here output file AStr foo bar putStrLn take show atol typo gets corrected tol ANum Deleted at position LineColPos expecting one of Whitespace tol xY interpolating haskell variables tol AVar OptionNum xY",
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "ipopts",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:ipopts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e should do for Double\n\u003c/p\u003e",
          "module": "Ipopt.Options",
          "name": "liftDouble",
          "package": "ipopt-hs",
          "signature": "Double -\u003e ExpQ",
          "source": "src/Ipopt-Options.html#liftDouble",
          "type": "function"
        },
        "index": {
          "description": "what lift should do for Double",
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "liftDouble",
          "normalized": "Double-\u003eExpQ",
          "package": "ipopt-hs",
          "partial": "Double",
          "signature": "Double-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:liftDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "parseOpt",
          "package": "ipopt-hs",
          "signature": "P (Str Char String LineColPos) (String, OptionVal)",
          "source": "src/Ipopt-Options.html#parseOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "parseOpt",
          "normalized": "P(Str Char String LineColPos)(String,OptionVal)",
          "package": "ipopt-hs",
          "partial": "Opt",
          "signature": "P(Str Char String LineColPos)(String,OptionVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:parseOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "parseOpts",
          "package": "ipopt-hs",
          "signature": "P (Str Char String LineColPos) [(String, OptionVal)]",
          "source": "src/Ipopt-Options.html#parseOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "parseOpts",
          "normalized": "P(Str Char String LineColPos)[(String,OptionVal)]",
          "package": "ipopt-hs",
          "partial": "Opts",
          "signature": "P(Str Char String LineColPos)[(String,OptionVal)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:parseOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Options",
          "name": "uuParseTest",
          "package": "ipopt-hs",
          "signature": "P (Str a1 s LineColPos) a -\u003e s -\u003e (a, [Error LineColPos])",
          "source": "src/Ipopt-Options.html#uuParseTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Options",
          "module": "Ipopt.Options",
          "name": "uuParseTest",
          "normalized": "P(Str a b LineColPos)a-\u003eb-\u003e(a,[Error LineColPos])",
          "package": "ipopt-hs",
          "partial": "Parse Test",
          "signature": "P(Str a s LineColPos)a-\u003es-\u003e(a,[Error LineColPos])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Options.html#v:uuParseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "PP",
          "package": "ipopt-hs",
          "source": "src/Ipopt-PP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "PP",
          "package": "ipopt-hs",
          "partial": "PP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "br",
          "package": "ipopt-hs",
          "signature": "m ()",
          "source": "src/Ipopt-PP.html#br",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "br",
          "normalized": "a()",
          "package": "ipopt-hs",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:br"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "colorStatus",
          "package": "ipopt-hs",
          "signature": "ApplicationReturnStatus -\u003e Doc",
          "source": "src/Ipopt-PP.html#colorStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "colorStatus",
          "normalized": "ApplicationReturnStatus-\u003eDoc",
          "package": "ipopt-hs",
          "partial": "Status",
          "signature": "ApplicationReturnStatus-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:colorStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "g",
          "package": "ipopt-hs",
          "signature": "forall v.  Lens' (IpOptSolved v) (v Double)",
          "source": "src/Ipopt-PP.html#g",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "g",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "mult_g",
          "package": "ipopt-hs",
          "signature": "forall v.  Lens' (IpOptSolved v) (v Double)",
          "source": "src/Ipopt-PP.html#mult_g",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "mult_g",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:mult_g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "mult_x_L",
          "package": "ipopt-hs",
          "signature": "forall v.  Lens' (IpOptSolved v) (v Double)",
          "source": "src/Ipopt-PP.html#mult_x_L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "mult_x_L",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:mult_x_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "mult_x_U",
          "package": "ipopt-hs",
          "signature": "forall v.  Lens' (IpOptSolved v) (v Double)",
          "source": "src/Ipopt-PP.html#mult_x_U",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "mult_x_U",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:mult_x_U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "objective",
          "package": "ipopt-hs",
          "signature": "forall v.  Lens' (IpOptSolved v) Double",
          "source": "src/Ipopt-PP.html#objective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "objective",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:objective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.PP\",\"Ipopt\"]",
          "name": "ppSoln",
          "package": "ipopt-hs",
          "signature": "NLPState -\u003e StateT NLPState m (IpOptSolved v) -\u003e m (IpOptSolved v, Doc)",
          "source": "src/Ipopt-PP.html#ppSoln",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:ppSoln\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:ppSoln\"]"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "ppSoln",
          "normalized": "NLPState-\u003eStateT NLPState a(IpOptSolved b)-\u003ea(IpOptSolved b,Doc)",
          "package": "ipopt-hs",
          "partial": "Soln",
          "signature": "NLPState-\u003eStateT NLPState m(IpOptSolved v)-\u003em(IpOptSolved v,Doc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:ppSoln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "status",
          "package": "ipopt-hs",
          "signature": "forall v.  Lens' (IpOptSolved v) ApplicationReturnStatus",
          "source": "src/Ipopt-PP.html#status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "status",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "statusOk",
          "package": "ipopt-hs",
          "signature": "ApplicationReturnStatus -\u003e Bool",
          "source": "src/Ipopt-PP.html#statusOk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "statusOk",
          "normalized": "ApplicationReturnStatus-\u003eBool",
          "package": "ipopt-hs",
          "partial": "Ok",
          "signature": "ApplicationReturnStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:statusOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.PP",
          "name": "x",
          "package": "ipopt-hs",
          "signature": "forall v.  Lens' (IpOptSolved v) (v Double)",
          "source": "src/Ipopt-PP.html#x",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt PP",
          "module": "Ipopt.PP",
          "name": "x",
          "package": "ipopt-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-PP.html#v:x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDescription: lowest-level parts of the binding\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Ipopt.Raw",
          "name": "Raw",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html",
          "type": "module"
        },
        "index": {
          "description": "Description lowest-level parts of the binding",
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "Raw",
          "package": "ipopt-hs",
          "partial": "Raw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "ApplicationReturnStatus",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "ApplicationReturnStatus",
          "package": "ipopt-hs",
          "partial": "Application Return Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:ApplicationReturnStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpBool",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpBool",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpBool",
          "package": "ipopt-hs",
          "partial": "Ip Bool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpF",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpF",
          "package": "ipopt-hs",
          "partial": "Ip",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpG",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpG",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpG",
          "package": "ipopt-hs",
          "partial": "Ip",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpGradF",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpGradF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpGradF",
          "package": "ipopt-hs",
          "partial": "Ip Grad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpGradF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpH",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpH",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpH",
          "package": "ipopt-hs",
          "partial": "Ip",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpIndex",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpIndex",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpIndex",
          "package": "ipopt-hs",
          "partial": "Ip Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpInt",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpInt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpInt",
          "package": "ipopt-hs",
          "partial": "Ip Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpJacG",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpJacG",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpJacG",
          "package": "ipopt-hs",
          "partial": "Ip Jac",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpJacG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpNumber",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpNumber",
          "package": "ipopt-hs",
          "partial": "Ip Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elenses are in \u003ca\u003eIpopt.PP\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Ipopt.Raw",
          "name": "IpOptSolved",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "data"
        },
        "index": {
          "description": "lenses are in Ipopt.PP",
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpOptSolved",
          "package": "ipopt-hs",
          "partial": "Ip Opt Solved",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpOptSolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpProblem",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpProblem",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpProblem",
          "package": "ipopt-hs",
          "partial": "Ip Problem",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:IpProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector of numbers\n\u003c/p\u003e",
          "module": "Ipopt.Raw",
          "name": "Vec",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#Vec",
          "type": "type"
        },
        "index": {
          "description": "Vector of numbers",
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "Vec",
          "package": "ipopt-hs",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "DivergingIterates",
          "package": "ipopt-hs",
          "signature": "DivergingIterates",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:DivergingIterates\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:DivergingIterates\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "DivergingIterates",
          "package": "ipopt-hs",
          "partial": "Diverging Iterates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:DivergingIterates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "ErrorInStepComputation",
          "package": "ipopt-hs",
          "signature": "ErrorInStepComputation",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:ErrorInStepComputation\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:ErrorInStepComputation\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "ErrorInStepComputation",
          "package": "ipopt-hs",
          "partial": "Error In Step Computation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:ErrorInStepComputation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "FeasiblePointFound",
          "package": "ipopt-hs",
          "signature": "FeasiblePointFound",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:FeasiblePointFound\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:FeasiblePointFound\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "FeasiblePointFound",
          "package": "ipopt-hs",
          "partial": "Feasible Point Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:FeasiblePointFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "InfeasibleProblemDetected",
          "package": "ipopt-hs",
          "signature": "InfeasibleProblemDetected",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InfeasibleProblemDetected\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:InfeasibleProblemDetected\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "InfeasibleProblemDetected",
          "package": "ipopt-hs",
          "partial": "Infeasible Problem Detected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InfeasibleProblemDetected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "InsufficientMemory",
          "package": "ipopt-hs",
          "signature": "InsufficientMemory",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InsufficientMemory\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:InsufficientMemory\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "InsufficientMemory",
          "package": "ipopt-hs",
          "partial": "Insufficient Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InsufficientMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "InternalError",
          "package": "ipopt-hs",
          "signature": "InternalError",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InternalError\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:InternalError\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "InternalError",
          "package": "ipopt-hs",
          "partial": "Internal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InternalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "InvalidNumberDetected",
          "package": "ipopt-hs",
          "signature": "InvalidNumberDetected",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InvalidNumberDetected\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:InvalidNumberDetected\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "InvalidNumberDetected",
          "package": "ipopt-hs",
          "partial": "Invalid Number Detected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InvalidNumberDetected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "InvalidOption",
          "package": "ipopt-hs",
          "signature": "InvalidOption",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InvalidOption\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:InvalidOption\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "InvalidOption",
          "package": "ipopt-hs",
          "partial": "Invalid Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InvalidOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "InvalidProblemDefinition",
          "package": "ipopt-hs",
          "signature": "InvalidProblemDefinition",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InvalidProblemDefinition\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:InvalidProblemDefinition\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "InvalidProblemDefinition",
          "package": "ipopt-hs",
          "partial": "Invalid Problem Definition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:InvalidProblemDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "IpOptSolved",
          "package": "ipopt-hs",
          "signature": "IpOptSolved",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:IpOptSolved\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:IpOptSolved\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpOptSolved",
          "package": "ipopt-hs",
          "partial": "Ip Opt Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:IpOptSolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "IpProblem",
          "package": "ipopt-hs",
          "signature": "IpProblem (ForeignPtr IpProblem)",
          "source": "src/Ipopt-Raw.html#IpProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "IpProblem",
          "package": "ipopt-hs",
          "partial": "Ip Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:IpProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "MaximumCputimeExceeded",
          "package": "ipopt-hs",
          "signature": "MaximumCputimeExceeded",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:MaximumCputimeExceeded\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:MaximumCputimeExceeded\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "MaximumCputimeExceeded",
          "package": "ipopt-hs",
          "partial": "Maximum Cputime Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:MaximumCputimeExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "MaximumIterationsExceeded",
          "package": "ipopt-hs",
          "signature": "MaximumIterationsExceeded",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:MaximumIterationsExceeded\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:MaximumIterationsExceeded\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "MaximumIterationsExceeded",
          "package": "ipopt-hs",
          "partial": "Maximum Iterations Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:MaximumIterationsExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "NonipoptExceptionThrown",
          "package": "ipopt-hs",
          "signature": "NonipoptExceptionThrown",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:NonipoptExceptionThrown\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:NonipoptExceptionThrown\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "NonipoptExceptionThrown",
          "package": "ipopt-hs",
          "partial": "Nonipopt Exception Thrown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:NonipoptExceptionThrown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "NotEnoughDegreesOfFreedom",
          "package": "ipopt-hs",
          "signature": "NotEnoughDegreesOfFreedom",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:NotEnoughDegreesOfFreedom\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:NotEnoughDegreesOfFreedom\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "NotEnoughDegreesOfFreedom",
          "package": "ipopt-hs",
          "partial": "Not Enough Degrees Of Freedom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:NotEnoughDegreesOfFreedom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "RestorationFailed",
          "package": "ipopt-hs",
          "signature": "RestorationFailed",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:RestorationFailed\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:RestorationFailed\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "RestorationFailed",
          "package": "ipopt-hs",
          "partial": "Restoration Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:RestorationFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "SearchDirectionBecomesTooSmall",
          "package": "ipopt-hs",
          "signature": "SearchDirectionBecomesTooSmall",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:SearchDirectionBecomesTooSmall\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:SearchDirectionBecomesTooSmall\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "SearchDirectionBecomesTooSmall",
          "package": "ipopt-hs",
          "partial": "Search Direction Becomes Too Small",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:SearchDirectionBecomesTooSmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "SolveSucceeded",
          "package": "ipopt-hs",
          "signature": "SolveSucceeded",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:SolveSucceeded\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:SolveSucceeded\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "SolveSucceeded",
          "package": "ipopt-hs",
          "partial": "Solve Succeeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:SolveSucceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "SolvedToAcceptableLevel",
          "package": "ipopt-hs",
          "signature": "SolvedToAcceptableLevel",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:SolvedToAcceptableLevel\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:SolvedToAcceptableLevel\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "SolvedToAcceptableLevel",
          "package": "ipopt-hs",
          "partial": "Solved To Acceptable Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:SolvedToAcceptableLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "UnrecoverableException",
          "package": "ipopt-hs",
          "signature": "UnrecoverableException",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:UnrecoverableException\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:UnrecoverableException\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "UnrecoverableException",
          "package": "ipopt-hs",
          "partial": "Unrecoverable Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:UnrecoverableException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "UserRequestedStop",
          "package": "ipopt-hs",
          "signature": "UserRequestedStop",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:UserRequestedStop\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:UserRequestedStop\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "UserRequestedStop",
          "package": "ipopt-hs",
          "partial": "User Requested Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:UserRequestedStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "_ipOptSolved_g",
          "package": "ipopt-hs",
          "signature": "v Double",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_g\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:_ipOptSolved_g\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "_ipOptSolved_g",
          "package": "ipopt-hs",
          "partial": "Opt Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "_ipOptSolved_mult_g",
          "package": "ipopt-hs",
          "signature": "v Double",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_mult_g\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:_ipOptSolved_mult_g\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "_ipOptSolved_mult_g",
          "package": "ipopt-hs",
          "partial": "Opt Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_mult_g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "_ipOptSolved_mult_x_L",
          "package": "ipopt-hs",
          "signature": "v Double",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_mult_x_L\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:_ipOptSolved_mult_x_L\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "_ipOptSolved_mult_x_L",
          "package": "ipopt-hs",
          "partial": "Opt Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_mult_x_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "_ipOptSolved_mult_x_U",
          "package": "ipopt-hs",
          "signature": "v Double",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_mult_x_U\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:_ipOptSolved_mult_x_U\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "_ipOptSolved_mult_x_U",
          "package": "ipopt-hs",
          "partial": "Opt Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_mult_x_U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "_ipOptSolved_objective",
          "package": "ipopt-hs",
          "signature": "Double",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_objective\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:_ipOptSolved_objective\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "_ipOptSolved_objective",
          "package": "ipopt-hs",
          "partial": "Opt Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_objective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "_ipOptSolved_status",
          "package": "ipopt-hs",
          "signature": "ApplicationReturnStatus",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_status\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:_ipOptSolved_status\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "_ipOptSolved_status",
          "package": "ipopt-hs",
          "partial": "Opt Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "_ipOptSolved_x",
          "package": "ipopt-hs",
          "signature": "v Double",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_x\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:_ipOptSolved_x\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "_ipOptSolved_x",
          "package": "ipopt-hs",
          "partial": "Opt Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:_ipOptSolved_x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "addIpoptIntOption",
          "package": "ipopt-hs",
          "signature": "IpProblem -\u003e String -\u003e Int -\u003e IO Bool",
          "source": "src/Ipopt-Raw.html#addIpoptIntOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "addIpoptIntOption",
          "normalized": "IpProblem-\u003eString-\u003eInt-\u003eIO Bool",
          "package": "ipopt-hs",
          "partial": "Ipopt Int Option",
          "signature": "IpProblem-\u003eString-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:addIpoptIntOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "addIpoptNumOption",
          "package": "ipopt-hs",
          "signature": "IpProblem -\u003e String -\u003e Double -\u003e IO Bool",
          "source": "src/Ipopt-Raw.html#addIpoptNumOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "addIpoptNumOption",
          "normalized": "IpProblem-\u003eString-\u003eDouble-\u003eIO Bool",
          "package": "ipopt-hs",
          "partial": "Ipopt Num Option",
          "signature": "IpProblem-\u003eString-\u003eDouble-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:addIpoptNumOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "addIpoptStrOption",
          "package": "ipopt-hs",
          "signature": "IpProblem -\u003e String -\u003e String -\u003e IO Bool",
          "source": "src/Ipopt-Raw.html#addIpoptStrOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "addIpoptStrOption",
          "normalized": "IpProblem-\u003eString-\u003eString-\u003eIO Bool",
          "package": "ipopt-hs",
          "partial": "Ipopt Str Option",
          "signature": "IpProblem-\u003eString-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:addIpoptStrOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "createIpoptProblem",
          "package": "ipopt-hs",
          "signature": "Vec -\u003e Vec -\u003e Vec -\u003e Vec -\u003e Int -\u003e Int -\u003e IpF -\u003e IpG -\u003e IpGradF -\u003e IpJacG -\u003e IpH -\u003e IO IpProblem",
          "source": "src/Ipopt-Raw.html#createIpoptProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "createIpoptProblem",
          "normalized": "Vec-\u003eVec-\u003eVec-\u003eVec-\u003eInt-\u003eInt-\u003eIpF-\u003eIpG-\u003eIpGradF-\u003eIpJacG-\u003eIpH-\u003eIO IpProblem",
          "package": "ipopt-hs",
          "partial": "Ipopt Problem",
          "signature": "Vec-\u003eVec-\u003eVec-\u003eVec-\u003eInt-\u003eInt-\u003eIpF-\u003eIpG-\u003eIpGradF-\u003eIpJacG-\u003eIpH-\u003eIO IpProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:createIpoptProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet-up an \u003ccode\u003e\u003ca\u003eIpProblem\u003c/a\u003e\u003c/code\u003e to be solved later. Only objective function (\u003ccode\u003ef\u003c/code\u003e)\nand constraint functions (\u003ccode\u003eg\u003c/code\u003e) need to be specified. Derivatives needed by ipopt\nare computed by \u003ca\u003eNumeric.AD\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTo solve the optimization problem:\n\u003c/p\u003e\u003cpre\u003e              min f(x)\n   such that\n           xL \u003c=  x     \u003c= xU\n           gL \u003c=  g(x)  \u003c= gU\n\u003c/pre\u003e\u003cp\u003eFirst create an opaque \u003ccode\u003e\u003ca\u003eIpProblem\u003c/a\u003e\u003c/code\u003e object (nlp):\n\u003c/p\u003e\u003cpre\u003e nlp \u003c- createIpOptProblemAD xL xU gL gU f g\n\u003c/pre\u003e\u003cp\u003eThen pass it off to \u003ccode\u003e\u003ca\u003eipoptSolve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ipoptSolve nlp x0\n\u003c/pre\u003e\u003cp\u003eRefer to the example \u003ccode\u003eTest2.hs\u003c/code\u003e for details of setting up the vectors supplied.\n\u003c/p\u003e",
          "module": "Ipopt.Raw",
          "name": "createIpoptProblemAD",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e Vector a)-\u003e IO IpProblem",
          "type": "function"
        },
        "index": {
          "description": "Set-up an IpProblem to be solved later Only objective function and constraint functions need to be specified Derivatives needed by ipopt are computed by Numeric.AD To solve the optimization problem min such that xL xU gL gU First create an opaque IpProblem object nlp nlp createIpOptProblemAD xL xU gL gU Then pass it off to ipoptSolve ipoptSolve nlp x0 Refer to the example Test2.hs for details of setting up the vectors supplied",
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "createIpoptProblemAD",
          "normalized": "Vector a-\u003eVector a)-\u003eIO IpProblem",
          "package": "ipopt-hs",
          "partial": "Ipopt Problem AD",
          "signature": "Vector a-\u003eVector a)-\u003eIO IpProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:createIpoptProblemAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "freeIpoptProblem",
          "package": "ipopt-hs",
          "signature": "FunPtr (Ptr () -\u003e IO ())",
          "source": "src/Ipopt-Raw.html#freeIpoptProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "freeIpoptProblem",
          "normalized": "FunPtr(Ptr()-\u003eIO())",
          "package": "ipopt-hs",
          "partial": "Ipopt Problem",
          "signature": "FunPtr(Ptr()-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:freeIpoptProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "ipoptSolve",
          "package": "ipopt-hs",
          "signature": "IpProblem-\u003e Vec-\u003e IO (IpOptSolved v)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "ipoptSolve",
          "normalized": "IpProblem-\u003eVec-\u003eIO(IpOptSolved a)",
          "package": "ipopt-hs",
          "partial": "Solve",
          "signature": "IpProblem-\u003eVec-\u003eIO(IpOptSolved v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:ipoptSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "openIpoptOutputFile",
          "package": "ipopt-hs",
          "signature": "IpProblem -\u003e String -\u003e Int -\u003e IO Bool",
          "source": "src/Ipopt-Raw.html#openIpoptOutputFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:openIpoptOutputFile\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:openIpoptOutputFile\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "openIpoptOutputFile",
          "normalized": "IpProblem-\u003eString-\u003eInt-\u003eIO Bool",
          "package": "ipopt-hs",
          "partial": "Ipopt Output File",
          "signature": "IpProblem-\u003eString-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:openIpoptOutputFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Ipopt.Raw\",\"Ipopt\"]",
          "name": "setIpoptProblemScaling",
          "package": "ipopt-hs",
          "signature": "IpProblem -\u003e Double -\u003e Vec -\u003e Vec -\u003e IO Bool",
          "source": "src/Ipopt-Raw.html#setIpoptProblemScaling",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:setIpoptProblemScaling\",\"http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:setIpoptProblemScaling\"]"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "setIpoptProblemScaling",
          "normalized": "IpProblem-\u003eDouble-\u003eVec-\u003eVec-\u003eIO Bool",
          "package": "ipopt-hs",
          "partial": "Ipopt Problem Scaling",
          "signature": "IpProblem-\u003eDouble-\u003eVec-\u003eVec-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:setIpoptProblemScaling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpF",
          "package": "ipopt-hs",
          "signature": "(MVector s CDouble -\u003e IO CDouble) -\u003e IO IpF",
          "source": "src/Ipopt-Raw.html#wrapIpF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpF",
          "normalized": "(MVector a CDouble-\u003eIO CDouble)-\u003eIO IpF",
          "package": "ipopt-hs",
          "partial": "Ip",
          "signature": "(MVector s CDouble-\u003eIO CDouble)-\u003eIO IpF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpF1",
          "package": "ipopt-hs",
          "signature": "UnFunPtr IpF -\u003e IO IpF",
          "source": "src/Ipopt-Raw.html#wrapIpF1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpF1",
          "normalized": "UnFunPtr IpF-\u003eIO IpF",
          "package": "ipopt-hs",
          "partial": "Ip",
          "signature": "UnFunPtr IpF-\u003eIO IpF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpF2",
          "package": "ipopt-hs",
          "signature": "(MVector s a1 -\u003e IO a) -\u003e a2 -\u003e Ptr a1 -\u003e t -\u003e Ptr a -\u003e t1 -\u003e IO IpBool",
          "source": "src/Ipopt-Raw.html#wrapIpF2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpF2",
          "normalized": "(MVector a b-\u003eIO b)-\u003eb-\u003ePtr b-\u003ec-\u003ePtr b-\u003ec-\u003eIO IpBool",
          "package": "ipopt-hs",
          "partial": "Ip",
          "signature": "(MVector s a-\u003eIO a)-\u003ea-\u003ePtr a-\u003et-\u003ePtr a-\u003et-\u003eIO IpBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpG",
          "package": "ipopt-hs",
          "signature": "(MVector s CDouble -\u003e IO (MVector RealWorld CDouble)) -\u003e IO IpG",
          "source": "src/Ipopt-Raw.html#wrapIpG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpG",
          "normalized": "(MVector a CDouble-\u003eIO(MVector RealWorld CDouble))-\u003eIO IpG",
          "package": "ipopt-hs",
          "partial": "Ip",
          "signature": "(MVector s CDouble-\u003eIO(MVector RealWorld CDouble))-\u003eIO IpG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpG1",
          "package": "ipopt-hs",
          "signature": "UnFunPtr IpG -\u003e IO IpG",
          "source": "src/Ipopt-Raw.html#wrapIpG1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpG1",
          "normalized": "UnFunPtr IpG-\u003eIO IpG",
          "package": "ipopt-hs",
          "partial": "Ip",
          "signature": "UnFunPtr IpG-\u003eIO IpG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpG1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpG2",
          "package": "ipopt-hs",
          "signature": "(MVector s a2 -\u003e IO (MVector RealWorld a)) -\u003e a3 -\u003e Ptr a2 -\u003e t -\u003e a1 -\u003e Ptr a -\u003e t1 -\u003e IO IpBool",
          "source": "src/Ipopt-Raw.html#wrapIpG2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpG2",
          "normalized": "(MVector a b-\u003eIO(MVector RealWorld b))-\u003eb-\u003ePtr b-\u003ec-\u003eb-\u003ePtr b-\u003ec-\u003eIO IpBool",
          "package": "ipopt-hs",
          "partial": "Ip",
          "signature": "(MVector s a-\u003eIO(MVector RealWorld a))-\u003ea-\u003ePtr a-\u003et-\u003ea-\u003ePtr a-\u003et-\u003eIO IpBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpG2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpGradF",
          "package": "ipopt-hs",
          "signature": "(MVector s CDouble -\u003e IO (MVector RealWorld CDouble)) -\u003e IO IpGradF",
          "source": "src/Ipopt-Raw.html#wrapIpGradF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpGradF",
          "normalized": "(MVector a CDouble-\u003eIO(MVector RealWorld CDouble))-\u003eIO IpGradF",
          "package": "ipopt-hs",
          "partial": "Ip Grad",
          "signature": "(MVector s CDouble-\u003eIO(MVector RealWorld CDouble))-\u003eIO IpGradF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpGradF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpGradF1",
          "package": "ipopt-hs",
          "signature": "UnFunPtr IpGradF -\u003e IO IpGradF",
          "source": "src/Ipopt-Raw.html#wrapIpGradF1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpGradF1",
          "normalized": "UnFunPtr IpGradF-\u003eIO IpGradF",
          "package": "ipopt-hs",
          "partial": "Ip Grad",
          "signature": "UnFunPtr IpGradF-\u003eIO IpGradF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpGradF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpGradF2",
          "package": "ipopt-hs",
          "signature": "(MVector s a1 -\u003e IO (MVector RealWorld a)) -\u003e a2 -\u003e Ptr a1 -\u003e t -\u003e Ptr a -\u003e t1 -\u003e IO IpBool",
          "source": "src/Ipopt-Raw.html#wrapIpGradF2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpGradF2",
          "normalized": "(MVector a b-\u003eIO(MVector RealWorld b))-\u003eb-\u003ePtr b-\u003ec-\u003ePtr b-\u003ec-\u003eIO IpBool",
          "package": "ipopt-hs",
          "partial": "Ip Grad",
          "signature": "(MVector s a-\u003eIO(MVector RealWorld a))-\u003ea-\u003ePtr a-\u003et-\u003ePtr a-\u003et-\u003eIO IpBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpGradF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpH",
          "package": "ipopt-hs",
          "signature": "(MVector s3 CInt -\u003e MVector s4 CInt -\u003e IO b1) -\u003e (CDouble -\u003e MVector s CDouble -\u003e MVector s1 CDouble -\u003e MVector s2 CDouble -\u003e IO b) -\u003e IO IpH",
          "source": "src/Ipopt-Raw.html#wrapIpH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpH",
          "normalized": "(MVector a CInt-\u003eMVector a CInt-\u003eIO b)-\u003e(CDouble-\u003eMVector a CDouble-\u003eMVector a CDouble-\u003eMVector a CDouble-\u003eIO b)-\u003eIO IpH",
          "package": "ipopt-hs",
          "partial": "Ip",
          "signature": "(MVector s CInt-\u003eMVector s CInt-\u003eIO b)-\u003e(CDouble-\u003eMVector s CDouble-\u003eMVector s CDouble-\u003eMVector s CDouble-\u003eIO b)-\u003eIO IpH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpH1",
          "package": "ipopt-hs",
          "signature": "UnFunPtr IpH -\u003e IO IpH",
          "source": "src/Ipopt-Raw.html#wrapIpH1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpH1",
          "normalized": "UnFunPtr IpH-\u003eIO IpH",
          "package": "ipopt-hs",
          "partial": "Ip",
          "signature": "UnFunPtr IpH-\u003eIO IpH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpH1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpH2",
          "package": "ipopt-hs",
          "signature": "(MVector s3 a5 -\u003e MVector s4 a6 -\u003e IO b1) -\u003e (t3 -\u003e MVector s a -\u003e MVector s1 a2 -\u003e MVector s2 a4 -\u003e IO b) -\u003e a3 -\u003e Ptr a2 -\u003e t -\u003e t3 -\u003e a1 -\u003e Ptr a -\u003e t1 -\u003e a7 -\u003e Ptr a5 -\u003e Ptr a6 -\u003e Ptr a4 -\u003e t2 -\u003e IO IpBool",
          "source": "src/Ipopt-Raw.html#wrapIpH2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpH2",
          "normalized": "(MVector a b-\u003eMVector a b-\u003eIO c)-\u003e(d-\u003eMVector a b-\u003eMVector a b-\u003eMVector a b-\u003eIO c)-\u003eb-\u003ePtr b-\u003ed-\u003ed-\u003eb-\u003ePtr b-\u003ed-\u003eb-\u003ePtr b-\u003ePtr b-\u003ePtr b-\u003ed-\u003eIO IpBool",
          "package": "ipopt-hs",
          "partial": "Ip",
          "signature": "(MVector s a-\u003eMVector s a-\u003eIO b)-\u003e(t-\u003eMVector s a-\u003eMVector s a-\u003eMVector s a-\u003eIO b)-\u003ea-\u003ePtr a-\u003et-\u003et-\u003ea-\u003ePtr a-\u003et-\u003ea-\u003ePtr a-\u003ePtr a-\u003ePtr a-\u003et-\u003eIO IpBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpH2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpJacG",
          "package": "ipopt-hs",
          "signature": "(MVector s CInt -\u003e MVector s1 CInt -\u003e IO b) -\u003e (MVector s2 CDouble -\u003e MVector s3 CDouble -\u003e IO b1) -\u003e IO IpJacG",
          "source": "src/Ipopt-Raw.html#wrapIpJacG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpJacG",
          "normalized": "(MVector a CInt-\u003eMVector a CInt-\u003eIO b)-\u003e(MVector a CDouble-\u003eMVector a CDouble-\u003eIO b)-\u003eIO IpJacG",
          "package": "ipopt-hs",
          "partial": "Ip Jac",
          "signature": "(MVector s CInt-\u003eMVector s CInt-\u003eIO b)-\u003e(MVector s CDouble-\u003eMVector s CDouble-\u003eIO b)-\u003eIO IpJacG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpJacG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpJacG1",
          "package": "ipopt-hs",
          "signature": "UnFunPtr IpJacG -\u003e IO IpJacG",
          "source": "src/Ipopt-Raw.html#wrapIpJacG1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpJacG1",
          "normalized": "UnFunPtr IpJacG-\u003eIO IpJacG",
          "package": "ipopt-hs",
          "partial": "Ip Jac",
          "signature": "UnFunPtr IpJacG-\u003eIO IpJacG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpJacG1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Raw",
          "name": "wrapIpJacG2",
          "package": "ipopt-hs",
          "signature": "(MVector s a -\u003e MVector s1 a1 -\u003e IO b) -\u003e (MVector s2 a2 -\u003e MVector s3 a4 -\u003e IO b1) -\u003e a3 -\u003e Ptr a2 -\u003e t -\u003e t1 -\u003e a5 -\u003e Ptr a -\u003e Ptr a1 -\u003e Ptr a4 -\u003e t2 -\u003e IO IpBool",
          "source": "src/Ipopt-Raw.html#wrapIpJacG2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Raw",
          "module": "Ipopt.Raw",
          "name": "wrapIpJacG2",
          "normalized": "(MVector a b-\u003eMVector a b-\u003eIO c)-\u003e(MVector a b-\u003eMVector a b-\u003eIO c)-\u003eb-\u003ePtr b-\u003ed-\u003ed-\u003eb-\u003ePtr b-\u003ePtr b-\u003ePtr b-\u003ed-\u003eIO IpBool",
          "package": "ipopt-hs",
          "partial": "Ip Jac",
          "signature": "(MVector s a-\u003eMVector s a-\u003eIO b)-\u003e(MVector s a-\u003eMVector s a-\u003eIO b)-\u003ea-\u003ePtr a-\u003et-\u003et-\u003ea-\u003ePtr a-\u003ePtr a-\u003ePtr a-\u003et-\u003eIO IpBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Raw.html#v:wrapIpJacG2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003egradients and hessians tend to be sparse. This can be probed by\ncalculating these with NaNs as inputs. http:\u003cem/\u003ewww.gpops2.com/ uses this\nstrategy, but perhaps there are relatively common cases (calls to\nblas/lapack for example) that do not propagate NaNs correctly: perhaps\nIpopt.NLP provides some information about the structure of the problem,\nprovided that all variables used are lexically scoped?\n\u003c/p\u003e\u003cp\u003eAll functions provide indices that are affected (and should thus be included)\n\u003c/p\u003e\u003cp\u003efunctions ending in 1 set one variable at a time to NaN, and additionally\nprovide a hint as to which variable to change.\n\u003c/p\u003e\u003cp\u003efunctions not ending in 1 set all input variables to NaN\n\u003c/p\u003e\u003cp\u003eit seems that adding a 1 achieves the same thing as doing one more derivative.\nIn other words, nanPropagateG1 tells the same thing as nanPropagateH.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Ipopt.Sparsity",
          "name": "Sparsity",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Sparsity.html",
          "type": "module"
        },
        "index": {
          "description": "gradients and hessians tend to be sparse This can be probed by calculating these with NaNs as inputs http www.gpops2.com uses this strategy but perhaps there are relatively common cases calls to blas lapack for example that do not propagate NaNs correctly perhaps Ipopt.NLP provides some information about the structure of the problem provided that all variables used are lexically scoped All functions provide indices that are affected and should thus be included functions ending in set one variable at time to NaN and additionally provide hint as to which variable to change functions not ending in set all input variables to NaN it seems that adding achieves the same thing as doing one more derivative In other words nanPropagateG1 tells the same thing as nanPropagateH",
          "hierarchy": "Ipopt Sparsity",
          "module": "Ipopt.Sparsity",
          "name": "Sparsity",
          "package": "ipopt-hs",
          "partial": "Sparsity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Sparsity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Sparsity",
          "name": "jacobianSS",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e Vector a) -\u003e Vector a -\u003e Vector a",
          "source": "src/Ipopt-Sparsity.html#jacobianSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Sparsity",
          "module": "Ipopt.Sparsity",
          "name": "jacobianSS",
          "normalized": "Vector a-\u003eVector a)-\u003eVector a-\u003eVector a",
          "package": "ipopt-hs",
          "partial": "SS",
          "signature": "Vector a-\u003eVector a)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Sparsity.html#v:jacobianSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enanPropagate1 4 g\n\u003c/code\u003e\u003c/strong\u003e[0,1,2]\n\u003c/pre\u003e\u003cp\u003evariable 3 isn't even used.\n\u003c/p\u003e",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagate1",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e a)-\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "nanPropagate1 variable isn even used",
          "hierarchy": "Ipopt Sparsity",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagate1",
          "normalized": "Vector a-\u003ea)-\u003e[Int]",
          "package": "ipopt-hs",
          "partial": "Propagate",
          "signature": "Vector a-\u003ea)-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Sparsity.html#v:nanPropagate1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enanPropagateG 4 g\n\u003c/code\u003e\u003c/strong\u003efromList [0,1,2]\n\u003c/pre\u003e",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateG",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e a)-\u003e Vector Int",
          "type": "function"
        },
        "index": {
          "description": "nanPropagateG fromList",
          "hierarchy": "Ipopt Sparsity",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateG",
          "normalized": "Vector a-\u003ea)-\u003eVector Int",
          "package": "ipopt-hs",
          "partial": "Propagate",
          "signature": "Vector a-\u003ea)-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Sparsity.html#v:nanPropagateG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea nonzero gradient when inputs are NaN ==\u003e no need to include\nthat row/column in the hessian, since it will be zero\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enanPropagateG1 4 g\n\u003c/code\u003e\u003c/strong\u003e[(1,fromList [1,2]),(2,fromList [1])]\n\u003c/pre\u003e",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateG1",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e a)-\u003e [(Int, Vector Int)]",
          "type": "function"
        },
        "index": {
          "description": "nonzero gradient when inputs are NaN no need to include that row column in the hessian since it will be zero nanPropagateG1 fromList fromList",
          "hierarchy": "Ipopt Sparsity",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateG1",
          "normalized": "Vector a-\u003ea)-\u003e[(Int,Vector Int)]",
          "package": "ipopt-hs",
          "partial": "Propagate",
          "signature": "Vector a-\u003ea)-\u003e[(Int,Vector Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Sparsity.html#v:nanPropagateG1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enanPropagateH 4 g\n\u003c/code\u003e\u003c/strong\u003efromList [(1,1),(1,2),(2,1)]\n\u003c/pre\u003e",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateH",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e a)-\u003e Vector (Int, Int)",
          "type": "function"
        },
        "index": {
          "description": "nanPropagateH fromList",
          "hierarchy": "Ipopt Sparsity",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateH",
          "normalized": "Vector a-\u003ea)-\u003eVector(Int,Int)",
          "package": "ipopt-hs",
          "partial": "Propagate",
          "signature": "Vector a-\u003ea)-\u003eVector(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Sparsity.html#v:nanPropagateH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateHF",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e Vector a) -\u003e Vector (Vector (Int, Int))",
          "source": "src/Ipopt-Sparsity.html#nanPropagateHF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Sparsity",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateHF",
          "normalized": "Vector a-\u003eVector a)-\u003eVector(Vector(Int,Int))",
          "package": "ipopt-hs",
          "partial": "Propagate HF",
          "signature": "Vector a-\u003eVector a)-\u003eVector(Vector(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Sparsity.html#v:nanPropagateHF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateJ",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e Vector a) -\u003e Vector (Int, Int)",
          "source": "src/Ipopt-Sparsity.html#nanPropagateJ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt Sparsity",
          "module": "Ipopt.Sparsity",
          "name": "nanPropagateJ",
          "normalized": "Vector a-\u003eVector a)-\u003eVector(Int,Int)",
          "package": "ipopt-hs",
          "partial": "Propagate",
          "signature": "Vector a-\u003eVector a)-\u003eVector(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt-Sparsity.html#v:nanPropagateJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports most things you should need.\n Also take a look at \u003ca\u003eIpopt.NLP\u003c/a\u003e and \u003ca\u003eIpopt.Raw\u003c/a\u003e and \u003ccode\u003eexamples/\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Ipopt",
          "name": "Ipopt",
          "package": "ipopt-hs",
          "source": "src/Ipopt.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports most things you should need Also take look at Ipopt.NLP and Ipopt.Raw and examples",
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "Ipopt",
          "package": "ipopt-hs",
          "partial": "Ipopt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAnyRF cb\u003c/code\u003e is a function that uses variables from the nonlinear\n program in a way supported by \u003ccode\u003e\u003ca\u003eAnyRFCxt\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003ecb\u003c/code\u003e is\n usually \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Ipopt",
          "name": "AnyRF",
          "package": "ipopt-hs",
          "source": "src/Ipopt-AnyRF.html#AnyRF",
          "type": "data"
        },
        "index": {
          "description": "AnyRF cb is function that uses variables from the nonlinear program in way supported by AnyRFCxt The cb is usually Identity",
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "AnyRF",
          "package": "ipopt-hs",
          "partial": "Any RF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#t:AnyRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt",
          "name": "ApplicationReturnStatus",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#ApplicationReturnStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "ApplicationReturnStatus",
          "package": "ipopt-hs",
          "partial": "Application Return Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#t:ApplicationReturnStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity functor and monad.\n\u003c/p\u003e",
          "module": "Ipopt",
          "name": "Identity",
          "package": "ipopt-hs",
          "type": "newtype"
        },
        "index": {
          "description": "Identity functor and monad",
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "Identity",
          "package": "ipopt-hs",
          "partial": "Identity",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#t:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt",
          "name": "IpNumber",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "IpNumber",
          "package": "ipopt-hs",
          "partial": "Ip Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#t:IpNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elenses are in \u003ca\u003eIpopt.PP\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Ipopt",
          "name": "IpOptSolved",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#IpOptSolved",
          "type": "data"
        },
        "index": {
          "description": "lenses are in Ipopt.PP",
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "IpOptSolved",
          "package": "ipopt-hs",
          "partial": "Ip Opt Solved",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#t:IpOptSolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt",
          "name": "NLPT",
          "package": "ipopt-hs",
          "source": "src/Ipopt-NLP.html#NLPT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "NLPT",
          "package": "ipopt-hs",
          "partial": "NLPT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#t:NLPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector of numbers\n\u003c/p\u003e",
          "module": "Ipopt",
          "name": "Vec",
          "package": "ipopt-hs",
          "source": "src/Ipopt-Raw.html#Vec",
          "type": "type"
        },
        "index": {
          "description": "Vector of numbers",
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "Vec",
          "package": "ipopt-hs",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt",
          "name": "Identity",
          "package": "ipopt-hs",
          "signature": "Identity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "Identity",
          "package": "ipopt-hs",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ipopt",
          "name": "runIdentity",
          "package": "ipopt-hs",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ipopt",
          "module": "Ipopt",
          "name": "runIdentity",
          "package": "ipopt-hs",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Ipopt.html#v:runIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.NLP",
          "name": "NLP",
          "package": "ipopt-hs",
          "source": "src/Nlopt-NLP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Nlopt NLP",
          "module": "Nlopt.NLP",
          "name": "NLP",
          "package": "ipopt-hs",
          "partial": "NLP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-NLP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.NLP",
          "name": "solveNlopt",
          "package": "ipopt-hs",
          "signature": "NloptAlgorithm-\u003e (NLOpt -\u003e IO t)-\u003e NLPT m (v Double, Double, NloptResult)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt NLP",
          "module": "Nlopt.NLP",
          "name": "solveNlopt",
          "normalized": "NloptAlgorithm-\u003e(NLOpt-\u003eIO a)-\u003eNLPT b(c Double,Double,NloptResult)",
          "package": "ipopt-hs",
          "partial": "Nlopt",
          "signature": "NloptAlgorithm-\u003e(NLOpt-\u003eIO t)-\u003eNLPT m(v Double,Double,NloptResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-NLP.html#v:solveNlopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "Raw",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "Raw",
          "package": "ipopt-hs",
          "partial": "Raw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "FunPtrFunc",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#FunPtrFunc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "FunPtrFunc",
          "package": "ipopt-hs",
          "partial": "Fun Ptr Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:FunPtrFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "FunPtrMFunc",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#FunPtrMFunc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "FunPtrMFunc",
          "package": "ipopt-hs",
          "partial": "Fun Ptr MFunc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:FunPtrMFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "FunPtrPrecond",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#FunPtrPrecond",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "FunPtrPrecond",
          "package": "ipopt-hs",
          "partial": "Fun Ptr Precond",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:FunPtrPrecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "Func",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#Func",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "Func",
          "package": "ipopt-hs",
          "partial": "Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:Func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "MFunc",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#MFunc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "MFunc",
          "package": "ipopt-hs",
          "partial": "MFunc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:MFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOpt",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#NLOpt",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOpt",
          "package": "ipopt-hs",
          "partial": "NLOpt",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:NLOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NloptAlgorithm",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NloptAlgorithm",
          "package": "ipopt-hs",
          "partial": "Nlopt Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:NloptAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegative (above NLOPT_SUCCESS) values of these are thrown as exceptions. The positive ones are\n return values.\n\u003c/p\u003e",
          "module": "Nlopt.Raw",
          "name": "NloptResult",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "data"
        },
        "index": {
          "description": "negative above NLOPT SUCCESS values of these are thrown as exceptions The positive ones are return values",
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NloptResult",
          "package": "ipopt-hs",
          "partial": "Nlopt Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:NloptResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "Precond",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#Precond",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "Precond",
          "package": "ipopt-hs",
          "partial": "Precond",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:Precond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "UnFunPtr",
          "package": "ipopt-hs",
          "signature": "UnFunPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "UnFunPtr",
          "package": "ipopt-hs",
          "partial": "Un Fun Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:UnFunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "Vec",
          "package": "ipopt-hs",
          "source": "src/Nlopt-Raw.html#Vec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "Vec",
          "package": "ipopt-hs",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_AUGLAG",
          "package": "ipopt-hs",
          "signature": "NLOPT_AUGLAG",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_AUGLAG",
          "package": "ipopt-hs",
          "partial": "NLOPT AUGLAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_AUGLAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_AUGLAG_EQ",
          "package": "ipopt-hs",
          "signature": "NLOPT_AUGLAG_EQ",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_AUGLAG_EQ",
          "package": "ipopt-hs",
          "partial": "NLOPT AUGLAG EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_AUGLAG_EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_FAILURE",
          "package": "ipopt-hs",
          "signature": "NLOPT_FAILURE",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_FAILURE",
          "package": "ipopt-hs",
          "partial": "NLOPT FAILURE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_FAILURE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_FORCED_STOP",
          "package": "ipopt-hs",
          "signature": "NLOPT_FORCED_STOP",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_FORCED_STOP",
          "package": "ipopt-hs",
          "partial": "NLOPT FORCED STOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_FORCED_STOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_FTOL_REACHED",
          "package": "ipopt-hs",
          "signature": "NLOPT_FTOL_REACHED",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_FTOL_REACHED",
          "package": "ipopt-hs",
          "partial": "NLOPT FTOL REACHED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_FTOL_REACHED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GD_MLSL",
          "package": "ipopt-hs",
          "signature": "NLOPT_GD_MLSL",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GD_MLSL",
          "package": "ipopt-hs",
          "partial": "NLOPT GD MLSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GD_MLSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GD_MLSL_LDS",
          "package": "ipopt-hs",
          "signature": "NLOPT_GD_MLSL_LDS",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GD_MLSL_LDS",
          "package": "ipopt-hs",
          "partial": "NLOPT GD MLSL LDS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GD_MLSL_LDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GD_STOGO",
          "package": "ipopt-hs",
          "signature": "NLOPT_GD_STOGO",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GD_STOGO",
          "package": "ipopt-hs",
          "partial": "NLOPT GD STOGO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GD_STOGO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GD_STOGO_RAND",
          "package": "ipopt-hs",
          "signature": "NLOPT_GD_STOGO_RAND",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GD_STOGO_RAND",
          "package": "ipopt-hs",
          "partial": "NLOPT GD STOGO RAND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GD_STOGO_RAND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_CRS2_LM",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_CRS2_LM",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_CRS2_LM",
          "package": "ipopt-hs",
          "partial": "NLOPT GN CRS LM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_CRS2_LM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_DIRECT",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT",
          "package": "ipopt-hs",
          "partial": "NLOPT GN DIRECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_DIRECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_L",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_DIRECT_L",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_L",
          "package": "ipopt-hs",
          "partial": "NLOPT GN DIRECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_DIRECT_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_L_NOSCAL",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_DIRECT_L_NOSCAL",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_L_NOSCAL",
          "package": "ipopt-hs",
          "partial": "NLOPT GN DIRECT NOSCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_DIRECT_L_NOSCAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_L_RAND",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_DIRECT_L_RAND",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_L_RAND",
          "package": "ipopt-hs",
          "partial": "NLOPT GN DIRECT RAND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_DIRECT_L_RAND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_L_RAND_NOSCAL",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_DIRECT_L_RAND_NOSCAL",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_L_RAND_NOSCAL",
          "package": "ipopt-hs",
          "partial": "NLOPT GN DIRECT RAND NOSCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_DIRECT_L_RAND_NOSCAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_NOSCAL",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_DIRECT_NOSCAL",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_DIRECT_NOSCAL",
          "package": "ipopt-hs",
          "partial": "NLOPT GN DIRECT NOSCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_DIRECT_NOSCAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_ESCH",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_ESCH",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_ESCH",
          "package": "ipopt-hs",
          "partial": "NLOPT GN ESCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_ESCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_ISRES",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_ISRES",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_ISRES",
          "package": "ipopt-hs",
          "partial": "NLOPT GN ISRES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_ISRES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_MLSL",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_MLSL",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_MLSL",
          "package": "ipopt-hs",
          "partial": "NLOPT GN MLSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_MLSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_MLSL_LDS",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_MLSL_LDS",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_MLSL_LDS",
          "package": "ipopt-hs",
          "partial": "NLOPT GN MLSL LDS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_MLSL_LDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_ORIG_DIRECT",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_ORIG_DIRECT",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_ORIG_DIRECT",
          "package": "ipopt-hs",
          "partial": "NLOPT GN ORIG DIRECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_ORIG_DIRECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_ORIG_DIRECT_L",
          "package": "ipopt-hs",
          "signature": "NLOPT_GN_ORIG_DIRECT_L",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_GN_ORIG_DIRECT_L",
          "package": "ipopt-hs",
          "partial": "NLOPT GN ORIG DIRECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_GN_ORIG_DIRECT_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_G_MLSL",
          "package": "ipopt-hs",
          "signature": "NLOPT_G_MLSL",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_G_MLSL",
          "package": "ipopt-hs",
          "partial": "NLOPT MLSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_G_MLSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_G_MLSL_LDS",
          "package": "ipopt-hs",
          "signature": "NLOPT_G_MLSL_LDS",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_G_MLSL_LDS",
          "package": "ipopt-hs",
          "partial": "NLOPT MLSL LDS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_G_MLSL_LDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_INVALID_ARGS",
          "package": "ipopt-hs",
          "signature": "NLOPT_INVALID_ARGS",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_INVALID_ARGS",
          "package": "ipopt-hs",
          "partial": "NLOPT INVALID ARGS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_INVALID_ARGS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_AUGLAG",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_AUGLAG",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_AUGLAG",
          "package": "ipopt-hs",
          "partial": "NLOPT LD AUGLAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_AUGLAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_AUGLAG_EQ",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_AUGLAG_EQ",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_AUGLAG_EQ",
          "package": "ipopt-hs",
          "partial": "NLOPT LD AUGLAG EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_AUGLAG_EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_CCSAQ",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_CCSAQ",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_CCSAQ",
          "package": "ipopt-hs",
          "partial": "NLOPT LD CCSAQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_CCSAQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_LBFGS",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_LBFGS",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_LBFGS",
          "package": "ipopt-hs",
          "partial": "NLOPT LD LBFGS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_LBFGS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_LBFGS_NOCEDAL",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_LBFGS_NOCEDAL",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_LBFGS_NOCEDAL",
          "package": "ipopt-hs",
          "partial": "NLOPT LD LBFGS NOCEDAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_LBFGS_NOCEDAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_MMA",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_MMA",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_MMA",
          "package": "ipopt-hs",
          "partial": "NLOPT LD MMA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_MMA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_SLSQP",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_SLSQP",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_SLSQP",
          "package": "ipopt-hs",
          "partial": "NLOPT LD SLSQP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_SLSQP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_TNEWTON",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_TNEWTON",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_TNEWTON",
          "package": "ipopt-hs",
          "partial": "NLOPT LD TNEWTON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_TNEWTON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_TNEWTON_PRECOND",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_TNEWTON_PRECOND",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_TNEWTON_PRECOND",
          "package": "ipopt-hs",
          "partial": "NLOPT LD TNEWTON PRECOND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_TNEWTON_PRECOND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_TNEWTON_PRECOND_RESTART",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_TNEWTON_PRECOND_RESTART",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_TNEWTON_PRECOND_RESTART",
          "package": "ipopt-hs",
          "partial": "NLOPT LD TNEWTON PRECOND RESTART",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_TNEWTON_PRECOND_RESTART"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_TNEWTON_RESTART",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_TNEWTON_RESTART",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_TNEWTON_RESTART",
          "package": "ipopt-hs",
          "partial": "NLOPT LD TNEWTON RESTART",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_TNEWTON_RESTART"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_VAR1",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_VAR1",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_VAR1",
          "package": "ipopt-hs",
          "partial": "NLOPT LD VAR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_VAR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_VAR2",
          "package": "ipopt-hs",
          "signature": "NLOPT_LD_VAR2",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LD_VAR2",
          "package": "ipopt-hs",
          "partial": "NLOPT LD VAR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LD_VAR2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_AUGLAG",
          "package": "ipopt-hs",
          "signature": "NLOPT_LN_AUGLAG",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_AUGLAG",
          "package": "ipopt-hs",
          "partial": "NLOPT LN AUGLAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LN_AUGLAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_AUGLAG_EQ",
          "package": "ipopt-hs",
          "signature": "NLOPT_LN_AUGLAG_EQ",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_AUGLAG_EQ",
          "package": "ipopt-hs",
          "partial": "NLOPT LN AUGLAG EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LN_AUGLAG_EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_BOBYQA",
          "package": "ipopt-hs",
          "signature": "NLOPT_LN_BOBYQA",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_BOBYQA",
          "package": "ipopt-hs",
          "partial": "NLOPT LN BOBYQA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LN_BOBYQA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_COBYLA",
          "package": "ipopt-hs",
          "signature": "NLOPT_LN_COBYLA",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_COBYLA",
          "package": "ipopt-hs",
          "partial": "NLOPT LN COBYLA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LN_COBYLA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_NELDERMEAD",
          "package": "ipopt-hs",
          "signature": "NLOPT_LN_NELDERMEAD",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_NELDERMEAD",
          "package": "ipopt-hs",
          "partial": "NLOPT LN NELDERMEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LN_NELDERMEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_NEWUOA",
          "package": "ipopt-hs",
          "signature": "NLOPT_LN_NEWUOA",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_NEWUOA",
          "package": "ipopt-hs",
          "partial": "NLOPT LN NEWUOA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LN_NEWUOA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_NEWUOA_BOUND",
          "package": "ipopt-hs",
          "signature": "NLOPT_LN_NEWUOA_BOUND",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_NEWUOA_BOUND",
          "package": "ipopt-hs",
          "partial": "NLOPT LN NEWUOA BOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LN_NEWUOA_BOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_PRAXIS",
          "package": "ipopt-hs",
          "signature": "NLOPT_LN_PRAXIS",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_PRAXIS",
          "package": "ipopt-hs",
          "partial": "NLOPT LN PRAXIS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LN_PRAXIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_SBPLX",
          "package": "ipopt-hs",
          "signature": "NLOPT_LN_SBPLX",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_LN_SBPLX",
          "package": "ipopt-hs",
          "partial": "NLOPT LN SBPLX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_LN_SBPLX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_MAXEVAL_REACHED",
          "package": "ipopt-hs",
          "signature": "NLOPT_MAXEVAL_REACHED",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_MAXEVAL_REACHED",
          "package": "ipopt-hs",
          "partial": "NLOPT MAXEVAL REACHED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_MAXEVAL_REACHED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_MAXTIME_REACHED",
          "package": "ipopt-hs",
          "signature": "NLOPT_MAXTIME_REACHED",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_MAXTIME_REACHED",
          "package": "ipopt-hs",
          "partial": "NLOPT MAXTIME REACHED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_MAXTIME_REACHED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_NUM_ALGORITHMS",
          "package": "ipopt-hs",
          "signature": "NLOPT_NUM_ALGORITHMS",
          "source": "src/Nlopt-Raw.html#NloptAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_NUM_ALGORITHMS",
          "package": "ipopt-hs",
          "partial": "NLOPT NUM ALGORITHMS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_NUM_ALGORITHMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_OUT_OF_MEMORY",
          "package": "ipopt-hs",
          "signature": "NLOPT_OUT_OF_MEMORY",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_OUT_OF_MEMORY",
          "package": "ipopt-hs",
          "partial": "NLOPT OUT OF MEMORY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_OUT_OF_MEMORY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_ROUNDOFF_LIMITED",
          "package": "ipopt-hs",
          "signature": "NLOPT_ROUNDOFF_LIMITED",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_ROUNDOFF_LIMITED",
          "package": "ipopt-hs",
          "partial": "NLOPT ROUNDOFF LIMITED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_ROUNDOFF_LIMITED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_STOPVAL_REACHED",
          "package": "ipopt-hs",
          "signature": "NLOPT_STOPVAL_REACHED",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_STOPVAL_REACHED",
          "package": "ipopt-hs",
          "partial": "NLOPT STOPVAL REACHED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_STOPVAL_REACHED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_SUCCESS",
          "package": "ipopt-hs",
          "signature": "NLOPT_SUCCESS",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_SUCCESS",
          "package": "ipopt-hs",
          "partial": "NLOPT SUCCESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_SUCCESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOPT_XTOL_REACHED",
          "package": "ipopt-hs",
          "signature": "NLOPT_XTOL_REACHED",
          "source": "src/Nlopt-Raw.html#NloptResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOPT_XTOL_REACHED",
          "package": "ipopt-hs",
          "partial": "NLOPT XTOL REACHED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOPT_XTOL_REACHED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "NLOpt",
          "package": "ipopt-hs",
          "signature": "NLOpt (ForeignPtr NLOpt)",
          "source": "src/Nlopt-Raw.html#NLOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "NLOpt",
          "package": "ipopt-hs",
          "partial": "NLOpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:NLOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "checkEC",
          "package": "ipopt-hs",
          "signature": "CInt -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#checkEC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "checkEC",
          "normalized": "CInt-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "EC",
          "signature": "CInt-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:checkEC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "copyInto",
          "package": "ipopt-hs",
          "signature": "n -\u003e Ptr CDouble -\u003e v Double -\u003e IO ()",
          "source": "src/Nlopt-Raw.html#copyInto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "copyInto",
          "normalized": "a-\u003ePtr CDouble-\u003eb Double-\u003eIO()",
          "package": "ipopt-hs",
          "partial": "Into",
          "signature": "n-\u003ePtr CDouble-\u003ev Double-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:copyInto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "fromCInt",
          "package": "ipopt-hs",
          "signature": "a1 -\u003e a",
          "source": "src/Nlopt-Raw.html#fromCInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "fromCInt",
          "normalized": "a-\u003ea",
          "package": "ipopt-hs",
          "partial": "CInt",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:fromCInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enaive matrix &#215; vector\n\u003c/p\u003e",
          "module": "Nlopt.Raw",
          "name": "mXv",
          "package": "ipopt-hs",
          "signature": "Vector (Vector a) -\u003e Vector a -\u003e Vector a",
          "source": "src/Nlopt-Raw.html#mXv",
          "type": "function"
        },
        "index": {
          "description": "naive matrix vector",
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "mXv",
          "normalized": "Vector(Vector a)-\u003eVector a-\u003eVector a",
          "package": "ipopt-hs",
          "partial": "Xv",
          "signature": "Vector(Vector a)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:mXv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "mkFunc",
          "package": "ipopt-hs",
          "signature": "Func -\u003e IO (FunPtr Func)",
          "source": "src/Nlopt-Raw.html#mkFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "mkFunc",
          "normalized": "Func-\u003eIO(FunPtr Func)",
          "package": "ipopt-hs",
          "partial": "Func",
          "signature": "Func-\u003eIO(FunPtr Func)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:mkFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "mkMFunc",
          "package": "ipopt-hs",
          "signature": "MFunc -\u003e IO (FunPtr MFunc)",
          "source": "src/Nlopt-Raw.html#mkMFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "mkMFunc",
          "normalized": "MFunc-\u003eIO(FunPtr MFunc)",
          "package": "ipopt-hs",
          "partial": "MFunc",
          "signature": "MFunc-\u003eIO(FunPtr MFunc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:mkMFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "mkNloptFinalizer",
          "package": "ipopt-hs",
          "signature": "(Ptr () -\u003e IO ()) -\u003e IO (FunPtr (Ptr () -\u003e IO ()))",
          "source": "src/Nlopt-Raw.html#mkNloptFinalizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "mkNloptFinalizer",
          "normalized": "(Ptr()-\u003eIO())-\u003eIO(FunPtr(Ptr()-\u003eIO()))",
          "package": "ipopt-hs",
          "partial": "Nlopt Finalizer",
          "signature": "(Ptr()-\u003eIO())-\u003eIO(FunPtr(Ptr()-\u003eIO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:mkNloptFinalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "mkPrecond",
          "package": "ipopt-hs",
          "signature": "Precond -\u003e IO (FunPtr Precond)",
          "source": "src/Nlopt-Raw.html#mkPrecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "mkPrecond",
          "normalized": "Precond-\u003eIO(FunPtr Precond)",
          "package": "ipopt-hs",
          "partial": "Precond",
          "signature": "Precond-\u003eIO(FunPtr Precond)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:mkPrecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddEqualityConstraint",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Func -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptAddEqualityConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddEqualityConstraint",
          "normalized": "NLOpt-\u003eFunc-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Add Equality Constraint",
          "signature": "NLOpt-\u003eFunc-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddEqualityConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddEqualityConstraint'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO CDouble) -\u003e Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptAddEqualityConstraint%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddEqualityConstraint'_",
          "normalized": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003ePtr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Add Equality Constraint'",
          "signature": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003ePtr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddEqualityConstraint-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddEqualityMconstraint",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Int -\u003e MFunc -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptAddEqualityMconstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddEqualityMconstraint",
          "normalized": "NLOpt-\u003eInt-\u003eMFunc-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Add Equality Mconstraint",
          "signature": "NLOpt-\u003eInt-\u003eMFunc-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddEqualityMconstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddEqualityMconstraint'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CUInt -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO ()) -\u003e Ptr () -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptAddEqualityMconstraint%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddEqualityMconstraint'_",
          "normalized": "Ptr()-\u003eCUInt-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003eCUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Add Equality Mconstraint'",
          "signature": "Ptr()-\u003eCUInt-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003eCUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddEqualityMconstraint-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddInequalityConstraint",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Func -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptAddInequalityConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddInequalityConstraint",
          "normalized": "NLOpt-\u003eFunc-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Add Inequality Constraint",
          "signature": "NLOpt-\u003eFunc-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddInequalityConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddInequalityConstraint'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO CDouble) -\u003e Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptAddInequalityConstraint%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddInequalityConstraint'_",
          "normalized": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003ePtr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Add Inequality Constraint'",
          "signature": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003ePtr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddInequalityConstraint-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddInequalityMconstraint",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Int -\u003e MFunc -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptAddInequalityMconstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddInequalityMconstraint",
          "normalized": "NLOpt-\u003eInt-\u003eMFunc-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Add Inequality Mconstraint",
          "signature": "NLOpt-\u003eInt-\u003eMFunc-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddInequalityMconstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddInequalityMconstraint'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CUInt -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO ()) -\u003e Ptr () -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptAddInequalityMconstraint%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddInequalityMconstraint'_",
          "normalized": "Ptr()-\u003eCUInt-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003eCUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Add Inequality Mconstraint'",
          "signature": "Ptr()-\u003eCUInt-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003eCUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddInequalityMconstraint-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddPrecondEqualityConstraint",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Func -\u003e Precond -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptAddPrecondEqualityConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddPrecondEqualityConstraint",
          "normalized": "NLOpt-\u003eFunc-\u003ePrecond-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Add Precond Equality Constraint",
          "signature": "NLOpt-\u003eFunc-\u003ePrecond-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddPrecondEqualityConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddPrecondEqualityConstraint'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO CDouble) -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO ()) -\u003e Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptAddPrecondEqualityConstraint%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddPrecondEqualityConstraint'_",
          "normalized": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Add Precond Equality Constraint'",
          "signature": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddPrecondEqualityConstraint-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddPrecondInequalityConstraint",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Func -\u003e Precond -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptAddPrecondInequalityConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddPrecondInequalityConstraint",
          "normalized": "NLOpt-\u003eFunc-\u003ePrecond-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Add Precond Inequality Constraint",
          "signature": "NLOpt-\u003eFunc-\u003ePrecond-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddPrecondInequalityConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptAddPrecondInequalityConstraint'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO CDouble) -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO ()) -\u003e Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptAddPrecondInequalityConstraint%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptAddPrecondInequalityConstraint'_",
          "normalized": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Add Precond Inequality Constraint'",
          "signature": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptAddPrecondInequalityConstraint-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptCopy",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO NLOpt",
          "source": "src/Nlopt-Raw.html#nloptCopy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptCopy",
          "normalized": "NLOpt-\u003eIO NLOpt",
          "package": "ipopt-hs",
          "partial": "Copy",
          "signature": "NLOpt-\u003eIO NLOpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptCopy'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO (Ptr ())",
          "source": "src/Nlopt-Raw.html#nloptCopy%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptCopy'_",
          "normalized": "Ptr()-\u003eIO(Ptr())",
          "package": "ipopt-hs",
          "partial": "Copy'",
          "signature": "Ptr()-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptCopy-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptCreate",
          "package": "ipopt-hs",
          "signature": "NloptAlgorithm -\u003e Int -\u003e IO NLOpt",
          "source": "src/Nlopt-Raw.html#nloptCreate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptCreate",
          "normalized": "NloptAlgorithm-\u003eInt-\u003eIO NLOpt",
          "package": "ipopt-hs",
          "partial": "Create",
          "signature": "NloptAlgorithm-\u003eInt-\u003eIO NLOpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptCreate'_",
          "package": "ipopt-hs",
          "signature": "CInt -\u003e CUInt -\u003e IO (Ptr ())",
          "source": "src/Nlopt-Raw.html#nloptCreate%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptCreate'_",
          "normalized": "CInt-\u003eCUInt-\u003eIO(Ptr())",
          "package": "ipopt-hs",
          "partial": "Create'",
          "signature": "CInt-\u003eCUInt-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptCreate-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshould not need to be called manually\n\u003c/p\u003e",
          "module": "Nlopt.Raw",
          "name": "nloptDestroy",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO ()",
          "source": "src/Nlopt-Raw.html#nloptDestroy",
          "type": "function"
        },
        "index": {
          "description": "should not need to be called manually",
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptDestroy",
          "normalized": "Ptr()-\u003eIO()",
          "package": "ipopt-hs",
          "partial": "Destroy",
          "signature": "Ptr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptDestroy'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO ()",
          "source": "src/Nlopt-Raw.html#nloptDestroy%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptDestroy'_",
          "normalized": "Ptr()-\u003eIO()",
          "package": "ipopt-hs",
          "partial": "Destroy'",
          "signature": "Ptr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptDestroy-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptDestroyFP",
          "package": "ipopt-hs",
          "signature": "FunPtr (Ptr () -\u003e IO ())",
          "source": "src/Nlopt-Raw.html#nloptDestroyFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptDestroyFP",
          "normalized": "FunPtr(Ptr()-\u003eIO())",
          "package": "ipopt-hs",
          "partial": "Destroy FP",
          "signature": "FunPtr(Ptr()-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptDestroyFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptForceStop",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptForceStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptForceStop",
          "normalized": "NLOpt-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Force Stop",
          "signature": "NLOpt-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptForceStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptForceStop'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptForceStop%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptForceStop'_",
          "normalized": "Ptr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Force Stop'",
          "signature": "Ptr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptForceStop-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetAlgorithm",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO NloptAlgorithm",
          "source": "src/Nlopt-Raw.html#nloptGetAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetAlgorithm",
          "normalized": "NLOpt-\u003eIO NloptAlgorithm",
          "package": "ipopt-hs",
          "partial": "Get Algorithm",
          "signature": "NLOpt-\u003eIO NloptAlgorithm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetAlgorithm'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptGetAlgorithm%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetAlgorithm'_",
          "normalized": "Ptr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Get Algorithm'",
          "signature": "Ptr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetAlgorithm-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetDimension",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Int",
          "source": "src/Nlopt-Raw.html#nloptGetDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetDimension",
          "normalized": "NLOpt-\u003eIO Int",
          "package": "ipopt-hs",
          "partial": "Get Dimension",
          "signature": "NLOpt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetDimension'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CUInt",
          "source": "src/Nlopt-Raw.html#nloptGetDimension%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetDimension'_",
          "normalized": "Ptr()-\u003eIO CUInt",
          "package": "ipopt-hs",
          "partial": "Get Dimension'",
          "signature": "Ptr()-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetDimension-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetForceStop",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Int",
          "source": "src/Nlopt-Raw.html#nloptGetForceStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetForceStop",
          "normalized": "NLOpt-\u003eIO Int",
          "package": "ipopt-hs",
          "partial": "Get Force Stop",
          "signature": "NLOpt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetForceStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetForceStop'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptGetForceStop%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetForceStop'_",
          "normalized": "Ptr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Get Force Stop'",
          "signature": "Ptr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetForceStop-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetFtolAbs",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Double",
          "source": "src/Nlopt-Raw.html#nloptGetFtolAbs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetFtolAbs",
          "normalized": "NLOpt-\u003eIO Double",
          "package": "ipopt-hs",
          "partial": "Get Ftol Abs",
          "signature": "NLOpt-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetFtolAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetFtolAbs'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CDouble",
          "source": "src/Nlopt-Raw.html#nloptGetFtolAbs%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetFtolAbs'_",
          "normalized": "Ptr()-\u003eIO CDouble",
          "package": "ipopt-hs",
          "partial": "Get Ftol Abs'",
          "signature": "Ptr()-\u003eIO CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetFtolAbs-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetFtolRel",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Double",
          "source": "src/Nlopt-Raw.html#nloptGetFtolRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetFtolRel",
          "normalized": "NLOpt-\u003eIO Double",
          "package": "ipopt-hs",
          "partial": "Get Ftol Rel",
          "signature": "NLOpt-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetFtolRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetFtolRel'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CDouble",
          "source": "src/Nlopt-Raw.html#nloptGetFtolRel%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetFtolRel'_",
          "normalized": "Ptr()-\u003eIO CDouble",
          "package": "ipopt-hs",
          "partial": "Get Ftol Rel'",
          "signature": "Ptr()-\u003eIO CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetFtolRel-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetInitialStep",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Vec -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptGetInitialStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetInitialStep",
          "normalized": "NLOpt-\u003eVec-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Get Initial Step",
          "signature": "NLOpt-\u003eVec-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetInitialStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetInitialStep'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptGetInitialStep%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetInitialStep'_",
          "normalized": "Ptr()-\u003ePtr CDouble-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Get Initial Step'",
          "signature": "Ptr()-\u003ePtr CDouble-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetInitialStep-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetLowerBounds",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptGetLowerBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetLowerBounds",
          "normalized": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Get Lower Bounds",
          "signature": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetLowerBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetLowerBounds'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptGetLowerBounds%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetLowerBounds'_",
          "normalized": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Get Lower Bounds'",
          "signature": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetLowerBounds-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetMaxeval",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Int",
          "source": "src/Nlopt-Raw.html#nloptGetMaxeval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetMaxeval",
          "normalized": "NLOpt-\u003eIO Int",
          "package": "ipopt-hs",
          "partial": "Get Maxeval",
          "signature": "NLOpt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetMaxeval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetMaxeval'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptGetMaxeval%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetMaxeval'_",
          "normalized": "Ptr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Get Maxeval'",
          "signature": "Ptr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetMaxeval-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetMaxtime",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Double",
          "source": "src/Nlopt-Raw.html#nloptGetMaxtime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetMaxtime",
          "normalized": "NLOpt-\u003eIO Double",
          "package": "ipopt-hs",
          "partial": "Get Maxtime",
          "signature": "NLOpt-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetMaxtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetMaxtime'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CDouble",
          "source": "src/Nlopt-Raw.html#nloptGetMaxtime%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetMaxtime'_",
          "normalized": "Ptr()-\u003eIO CDouble",
          "package": "ipopt-hs",
          "partial": "Get Maxtime'",
          "signature": "Ptr()-\u003eIO CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetMaxtime-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetPopulation",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Int",
          "source": "src/Nlopt-Raw.html#nloptGetPopulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetPopulation",
          "normalized": "NLOpt-\u003eIO Int",
          "package": "ipopt-hs",
          "partial": "Get Population",
          "signature": "NLOpt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetPopulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetPopulation'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CUInt",
          "source": "src/Nlopt-Raw.html#nloptGetPopulation%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetPopulation'_",
          "normalized": "Ptr()-\u003eIO CUInt",
          "package": "ipopt-hs",
          "partial": "Get Population'",
          "signature": "Ptr()-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetPopulation-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetStopval",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Double",
          "source": "src/Nlopt-Raw.html#nloptGetStopval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetStopval",
          "normalized": "NLOpt-\u003eIO Double",
          "package": "ipopt-hs",
          "partial": "Get Stopval",
          "signature": "NLOpt-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetStopval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetStopval'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CDouble",
          "source": "src/Nlopt-Raw.html#nloptGetStopval%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetStopval'_",
          "normalized": "Ptr()-\u003eIO CDouble",
          "package": "ipopt-hs",
          "partial": "Get Stopval'",
          "signature": "Ptr()-\u003eIO CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetStopval-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetUpperBounds",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptGetUpperBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetUpperBounds",
          "normalized": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Get Upper Bounds",
          "signature": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetUpperBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetUpperBounds'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptGetUpperBounds%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetUpperBounds'_",
          "normalized": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Get Upper Bounds'",
          "signature": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetUpperBounds-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetVectorStorage",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Int",
          "source": "src/Nlopt-Raw.html#nloptGetVectorStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetVectorStorage",
          "normalized": "NLOpt-\u003eIO Int",
          "package": "ipopt-hs",
          "partial": "Get Vector Storage",
          "signature": "NLOpt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetVectorStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetVectorStorage'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CUInt",
          "source": "src/Nlopt-Raw.html#nloptGetVectorStorage%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetVectorStorage'_",
          "normalized": "Ptr()-\u003eIO CUInt",
          "package": "ipopt-hs",
          "partial": "Get Vector Storage'",
          "signature": "Ptr()-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetVectorStorage-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetXtolAbs",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptGetXtolAbs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetXtolAbs",
          "normalized": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Get Xtol Abs",
          "signature": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetXtolAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetXtolAbs'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptGetXtolAbs%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetXtolAbs'_",
          "normalized": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Get Xtol Abs'",
          "signature": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetXtolAbs-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetXtolRel",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO Double",
          "source": "src/Nlopt-Raw.html#nloptGetXtolRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetXtolRel",
          "normalized": "NLOpt-\u003eIO Double",
          "package": "ipopt-hs",
          "partial": "Get Xtol Rel",
          "signature": "NLOpt-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetXtolRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptGetXtolRel'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CDouble",
          "source": "src/Nlopt-Raw.html#nloptGetXtolRel%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptGetXtolRel'_",
          "normalized": "Ptr()-\u003eIO CDouble",
          "package": "ipopt-hs",
          "partial": "Get Xtol Rel'",
          "signature": "Ptr()-\u003eIO CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptGetXtolRel-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptOptimize",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Vec -\u003e IO (NloptResult, Double)",
          "source": "src/Nlopt-Raw.html#nloptOptimize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptOptimize",
          "normalized": "NLOpt-\u003eVec-\u003eIO(NloptResult,Double)",
          "package": "ipopt-hs",
          "partial": "Optimize",
          "signature": "NLOpt-\u003eVec-\u003eIO(NloptResult,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptOptimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptOptimize'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptOptimize%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptOptimize'_",
          "normalized": "Ptr()-\u003ePtr CDouble-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Optimize'",
          "signature": "Ptr()-\u003ePtr CDouble-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptOptimize-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptRemoveEqualityConstraints",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptRemoveEqualityConstraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptRemoveEqualityConstraints",
          "normalized": "NLOpt-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Remove Equality Constraints",
          "signature": "NLOpt-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptRemoveEqualityConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptRemoveEqualityConstraints'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptRemoveEqualityConstraints%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptRemoveEqualityConstraints'_",
          "normalized": "Ptr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Remove Equality Constraints'",
          "signature": "Ptr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptRemoveEqualityConstraints-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptRemoveInequalityConstraints",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptRemoveInequalityConstraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptRemoveInequalityConstraints",
          "normalized": "NLOpt-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Remove Inequality Constraints",
          "signature": "NLOpt-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptRemoveInequalityConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptRemoveInequalityConstraints'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptRemoveInequalityConstraints%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptRemoveInequalityConstraints'_",
          "normalized": "Ptr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Remove Inequality Constraints'",
          "signature": "Ptr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptRemoveInequalityConstraints-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetForceStop",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Int -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetForceStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetForceStop",
          "normalized": "NLOpt-\u003eInt-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Force Stop",
          "signature": "NLOpt-\u003eInt-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetForceStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetForceStop'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CInt -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetForceStop%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetForceStop'_",
          "normalized": "Ptr()-\u003eCInt-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Force Stop'",
          "signature": "Ptr()-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetForceStop-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetFtolAbs",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetFtolAbs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetFtolAbs",
          "normalized": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Ftol Abs",
          "signature": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetFtolAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetFtolAbs'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetFtolAbs%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetFtolAbs'_",
          "normalized": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Ftol Abs'",
          "signature": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetFtolAbs-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetFtolRel",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetFtolRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetFtolRel",
          "normalized": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Ftol Rel",
          "signature": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetFtolRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetFtolRel'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetFtolRel%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetFtolRel'_",
          "normalized": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Ftol Rel'",
          "signature": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetFtolRel-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetInitialStep",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetInitialStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetInitialStep",
          "normalized": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Initial Step",
          "signature": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetInitialStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetInitialStep'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetInitialStep%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetInitialStep'_",
          "normalized": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Initial Step'",
          "signature": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetInitialStep-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetInitialStep1",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetInitialStep1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetInitialStep1",
          "normalized": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Initial Step",
          "signature": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetInitialStep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetInitialStep1'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetInitialStep1%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetInitialStep1'_",
          "normalized": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Initial Step",
          "signature": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetInitialStep1-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetLocalOptimizer",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e NLOpt -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetLocalOptimizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetLocalOptimizer",
          "normalized": "NLOpt-\u003eNLOpt-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Local Optimizer",
          "signature": "NLOpt-\u003eNLOpt-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetLocalOptimizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetLocalOptimizer'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetLocalOptimizer%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetLocalOptimizer'_",
          "normalized": "Ptr()-\u003ePtr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Local Optimizer'",
          "signature": "Ptr()-\u003ePtr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetLocalOptimizer-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetLowerBounds",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetLowerBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetLowerBounds",
          "normalized": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Lower Bounds",
          "signature": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetLowerBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetLowerBounds'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetLowerBounds%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetLowerBounds'_",
          "normalized": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Lower Bounds'",
          "signature": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetLowerBounds-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetLowerBounds1",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetLowerBounds1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetLowerBounds1",
          "normalized": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Lower Bounds",
          "signature": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetLowerBounds1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetLowerBounds1'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetLowerBounds1%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetLowerBounds1'_",
          "normalized": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Lower Bounds",
          "signature": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetLowerBounds1-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxObjective",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Func -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetMaxObjective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxObjective",
          "normalized": "NLOpt-\u003eFunc-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Max Objective",
          "signature": "NLOpt-\u003eFunc-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetMaxObjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxObjective'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO CDouble) -\u003e Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetMaxObjective%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxObjective'_",
          "normalized": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003ePtr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Max Objective'",
          "signature": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003ePtr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetMaxObjective-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxeval",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Int -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetMaxeval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxeval",
          "normalized": "NLOpt-\u003eInt-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Maxeval",
          "signature": "NLOpt-\u003eInt-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetMaxeval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxeval'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CInt -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetMaxeval%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxeval'_",
          "normalized": "Ptr()-\u003eCInt-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Maxeval'",
          "signature": "Ptr()-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetMaxeval-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxtime",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetMaxtime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxtime",
          "normalized": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Maxtime",
          "signature": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetMaxtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxtime'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetMaxtime%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetMaxtime'_",
          "normalized": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Maxtime'",
          "signature": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetMaxtime-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetMinObjective",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Func -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetMinObjective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetMinObjective",
          "normalized": "NLOpt-\u003eFunc-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Min Objective",
          "signature": "NLOpt-\u003eFunc-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetMinObjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetMinObjective'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO CDouble) -\u003e Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetMinObjective%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetMinObjective'_",
          "normalized": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003ePtr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Min Objective'",
          "signature": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003ePtr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetMinObjective-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetPopulation",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Int -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetPopulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetPopulation",
          "normalized": "NLOpt-\u003eInt-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Population",
          "signature": "NLOpt-\u003eInt-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetPopulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetPopulation'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CUInt -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetPopulation%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetPopulation'_",
          "normalized": "Ptr()-\u003eCUInt-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Population'",
          "signature": "Ptr()-\u003eCUInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetPopulation-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetPrecondMaxObjective",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Func -\u003e Precond -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetPrecondMaxObjective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetPrecondMaxObjective",
          "normalized": "NLOpt-\u003eFunc-\u003ePrecond-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Precond Max Objective",
          "signature": "NLOpt-\u003eFunc-\u003ePrecond-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetPrecondMaxObjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetPrecondMaxObjective'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO CDouble) -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO ()) -\u003e Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetPrecondMaxObjective%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetPrecondMaxObjective'_",
          "normalized": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Precond Max Objective'",
          "signature": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetPrecondMaxObjective-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetPrecondMinObjective",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Func -\u003e Precond -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetPrecondMinObjective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetPrecondMinObjective",
          "normalized": "NLOpt-\u003eFunc-\u003ePrecond-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Precond Min Objective",
          "signature": "NLOpt-\u003eFunc-\u003ePrecond-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetPrecondMinObjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetPrecondMinObjective'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO CDouble) -\u003e FunPtr (CUInt -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr CDouble -\u003e Ptr () -\u003e IO ()) -\u003e Ptr () -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetPrecondMinObjective%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetPrecondMinObjective'_",
          "normalized": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Precond Min Objective'",
          "signature": "Ptr()-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO CDouble)-\u003eFunPtr(CUInt-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr CDouble-\u003ePtr()-\u003eIO())-\u003ePtr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetPrecondMinObjective-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetStopval",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetStopval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetStopval",
          "normalized": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Stopval",
          "signature": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetStopval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetStopval'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetStopval%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetStopval'_",
          "normalized": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Stopval'",
          "signature": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetStopval-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetUpperBounds",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetUpperBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetUpperBounds",
          "normalized": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Upper Bounds",
          "signature": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetUpperBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetUpperBounds'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetUpperBounds%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetUpperBounds'_",
          "normalized": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Upper Bounds'",
          "signature": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetUpperBounds-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetUpperBounds1",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetUpperBounds1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetUpperBounds1",
          "normalized": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Upper Bounds",
          "signature": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetUpperBounds1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetUpperBounds1'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetUpperBounds1%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetUpperBounds1'_",
          "normalized": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Upper Bounds",
          "signature": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetUpperBounds1-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetVectorStorage",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Int -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetVectorStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetVectorStorage",
          "normalized": "NLOpt-\u003eInt-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Vector Storage",
          "signature": "NLOpt-\u003eInt-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetVectorStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetVectorStorage'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CUInt -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetVectorStorage%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetVectorStorage'_",
          "normalized": "Ptr()-\u003eCUInt-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Vector Storage'",
          "signature": "Ptr()-\u003eCUInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetVectorStorage-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolAbs",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Vec -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetXtolAbs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolAbs",
          "normalized": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Xtol Abs",
          "signature": "NLOpt-\u003eVec-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetXtolAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolAbs'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e Ptr CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetXtolAbs%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolAbs'_",
          "normalized": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Xtol Abs'",
          "signature": "Ptr()-\u003ePtr CDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetXtolAbs-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolAbs1",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetXtolAbs1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolAbs1",
          "normalized": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Xtol Abs",
          "signature": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetXtolAbs1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolAbs1'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetXtolAbs1%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolAbs1'_",
          "normalized": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Xtol Abs",
          "signature": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetXtolAbs1-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolRel",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e Double -\u003e IO NloptResult",
          "source": "src/Nlopt-Raw.html#nloptSetXtolRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolRel",
          "normalized": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "package": "ipopt-hs",
          "partial": "Set Xtol Rel",
          "signature": "NLOpt-\u003eDouble-\u003eIO NloptResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetXtolRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolRel'_",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e CDouble -\u003e IO CInt",
          "source": "src/Nlopt-Raw.html#nloptSetXtolRel%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSetXtolRel'_",
          "normalized": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "package": "ipopt-hs",
          "partial": "Set Xtol Rel'",
          "signature": "Ptr()-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSetXtolRel-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSrand",
          "package": "ipopt-hs",
          "signature": "Int -\u003e IO ()",
          "source": "src/Nlopt-Raw.html#nloptSrand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSrand",
          "normalized": "Int-\u003eIO()",
          "package": "ipopt-hs",
          "partial": "Srand",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSrand'_",
          "package": "ipopt-hs",
          "signature": "CULong -\u003e IO ()",
          "source": "src/Nlopt-Raw.html#nloptSrand%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSrand'_",
          "normalized": "CULong-\u003eIO()",
          "package": "ipopt-hs",
          "partial": "Srand'",
          "signature": "CULong-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSrand-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSrandTime",
          "package": "ipopt-hs",
          "signature": "IO ()",
          "source": "src/Nlopt-Raw.html#nloptSrandTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSrandTime",
          "normalized": "IO()",
          "package": "ipopt-hs",
          "partial": "Srand Time",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSrandTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptSrandTime'_",
          "package": "ipopt-hs",
          "signature": "IO ()",
          "source": "src/Nlopt-Raw.html#nloptSrandTime%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptSrandTime'_",
          "normalized": "IO()",
          "package": "ipopt-hs",
          "partial": "Srand Time'",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptSrandTime-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptVersion",
          "package": "ipopt-hs",
          "signature": "IO (Int, Int, Int)",
          "source": "src/Nlopt-Raw.html#nloptVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptVersion",
          "normalized": "IO(Int,Int,Int)",
          "package": "ipopt-hs",
          "partial": "Version",
          "signature": "IO(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "nloptVersion'_",
          "package": "ipopt-hs",
          "signature": "Ptr CInt -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO ()",
          "source": "src/Nlopt-Raw.html#nloptVersion%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "nloptVersion'_",
          "normalized": "Ptr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "package": "ipopt-hs",
          "partial": "Version'",
          "signature": "Ptr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:nloptVersion-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ec2hs generates CDouble peek a Double instead\n\u003c/p\u003e",
          "module": "Nlopt.Raw",
          "name": "peekDouble",
          "package": "ipopt-hs",
          "signature": "Ptr CDouble -\u003e IO Double",
          "source": "src/Nlopt-Raw.html#peekDouble",
          "type": "function"
        },
        "index": {
          "description": "c2hs generates CDouble peek Double instead",
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "peekDouble",
          "normalized": "Ptr CDouble-\u003eIO Double",
          "package": "ipopt-hs",
          "partial": "Double",
          "signature": "Ptr CDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:peekDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "peekInt",
          "package": "ipopt-hs",
          "signature": "Ptr a -\u003e IO b",
          "source": "src/Nlopt-Raw.html#peekInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "peekInt",
          "normalized": "Ptr a-\u003eIO b",
          "package": "ipopt-hs",
          "partial": "Int",
          "signature": "Ptr a-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:peekInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "ptrToNLOpt",
          "package": "ipopt-hs",
          "signature": "Ptr () -\u003e IO NLOpt",
          "source": "src/Nlopt-Raw.html#ptrToNLOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "ptrToNLOpt",
          "normalized": "Ptr()-\u003eIO NLOpt",
          "package": "ipopt-hs",
          "partial": "To NLOpt",
          "signature": "Ptr()-\u003eIO NLOpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:ptrToNLOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "ptrToV",
          "package": "ipopt-hs",
          "signature": "n -\u003e Ptr CDouble -\u003e IO (v Double)",
          "source": "src/Nlopt-Raw.html#ptrToV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "ptrToV",
          "normalized": "a-\u003ePtr CDouble-\u003eIO(b Double)",
          "package": "ipopt-hs",
          "partial": "To",
          "signature": "n-\u003ePtr CDouble-\u003eIO(v Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:ptrToV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "ptrToVS",
          "package": "ipopt-hs",
          "signature": "n -\u003e Ptr CDouble -\u003e IO Vec",
          "source": "src/Nlopt-Raw.html#ptrToVS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "ptrToVS",
          "normalized": "a-\u003ePtr CDouble-\u003eIO Vec",
          "package": "ipopt-hs",
          "partial": "To VS",
          "signature": "n-\u003ePtr CDouble-\u003eIO Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:ptrToVS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "toCInt",
          "package": "ipopt-hs",
          "signature": "a -\u003e b",
          "source": "src/Nlopt-Raw.html#toCInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "toCInt",
          "normalized": "a-\u003eb",
          "package": "ipopt-hs",
          "partial": "CInt",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:toCInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "toFunc",
          "package": "ipopt-hs",
          "signature": "(v Double -\u003e IO Double) -\u003e Func",
          "source": "src/Nlopt-Raw.html#toFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "toFunc",
          "normalized": "(a Double-\u003eIO Double)-\u003eFunc",
          "package": "ipopt-hs",
          "partial": "Func",
          "signature": "(v Double-\u003eIO Double)-\u003eFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:toFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhere the gradient happens via AD\n\u003c/p\u003e",
          "module": "Nlopt.Raw",
          "name": "toFuncAD",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e a) -\u003e Func",
          "source": "src/Nlopt-Raw.html#toFuncAD",
          "type": "function"
        },
        "index": {
          "description": "where the gradient happens via AD",
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "toFuncAD",
          "normalized": "Vector a-\u003ea)-\u003eFunc",
          "package": "ipopt-hs",
          "partial": "Func AD",
          "signature": "Vector a-\u003ea)-\u003eFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:toFuncAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "toFuncG",
          "package": "ipopt-hs",
          "signature": "(v Double -\u003e IO Double)-\u003e (v Double -\u003e IO (v Double))-\u003e Func",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "toFuncG",
          "normalized": "(a Double-\u003eIO Double)-\u003e(a Double-\u003eIO(a Double))-\u003eFunc",
          "package": "ipopt-hs",
          "partial": "Func",
          "signature": "(v Double-\u003eIO Double)-\u003e(v Double-\u003eIO(v Double))-\u003eFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:toFuncG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "toFuncM",
          "package": "ipopt-hs",
          "signature": "(v Double -\u003e IO (v Double)) -\u003e MFunc",
          "source": "src/Nlopt-Raw.html#toFuncM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "toFuncM",
          "normalized": "(a Double-\u003eIO(a Double))-\u003eMFunc",
          "package": "ipopt-hs",
          "partial": "Func",
          "signature": "(v Double-\u003eIO(v Double))-\u003eMFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:toFuncM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "toFuncMAD",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e Vector a) -\u003e MFunc",
          "source": "src/Nlopt-Raw.html#toFuncMAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "toFuncMAD",
          "normalized": "Vector a-\u003eVector a)-\u003eMFunc",
          "package": "ipopt-hs",
          "partial": "Func MAD",
          "signature": "Vector a-\u003eVector a)-\u003eMFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:toFuncMAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003en\u003c/code\u003e and \u003ccode\u003em\u003c/code\u003e type variables indicate the vector size as\n number of inputs and number of outputs respectively\n\u003c/p\u003e",
          "module": "Nlopt.Raw",
          "name": "toFuncMG",
          "package": "ipopt-hs",
          "signature": "(n Double -\u003e IO (m Double)) -\u003e (n Double -\u003e IO (n (m Double))) -\u003e MFunc",
          "source": "src/Nlopt-Raw.html#toFuncMG",
          "type": "function"
        },
        "index": {
          "description": "and type variables indicate the vector size as number of inputs and number of outputs respectively",
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "toFuncMG",
          "normalized": "(a Double-\u003eIO(b Double))-\u003e(a Double-\u003eIO(a(b Double)))-\u003eMFunc",
          "package": "ipopt-hs",
          "partial": "Func MG",
          "signature": "(n Double-\u003eIO(m Double))-\u003e(n Double-\u003eIO(n(m Double)))-\u003eMFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:toFuncMG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean exact hessian calculated with AD. See \u003ccode\u003e\u003ca\u003etoPrecondG\u003c/a\u003e\u003c/code\u003e\n XXX BFGS approx could also be done...\n\u003c/p\u003e",
          "module": "Nlopt.Raw",
          "name": "toPrecondAD",
          "package": "ipopt-hs",
          "signature": "Vector a -\u003e a) -\u003e Precond",
          "source": "src/Nlopt-Raw.html#toPrecondAD",
          "type": "function"
        },
        "index": {
          "description": "an exact hessian calculated with AD See toPrecondG XXX BFGS approx could also be done",
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "toPrecondAD",
          "normalized": "Vector a-\u003ea)-\u003ePrecond",
          "package": "ipopt-hs",
          "partial": "Precond AD",
          "signature": "Vector a-\u003ea)-\u003ePrecond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:toPrecondAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ca\u003ehttp://ab-initio.mit.edu/wiki/index.php/NLopt_Reference#Preconditioning_with_approximate_Hessians\u003c/a\u003e\n only applies to \u003ccode\u003e\u003ca\u003eNLOPT_LD_CCSAQ\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Nlopt.Raw",
          "name": "toPrecondG",
          "package": "ipopt-hs",
          "signature": "(v -\u003e v -\u003e IO v)-\u003e Precond",
          "type": "function"
        },
        "index": {
          "description": "see http ab-initio.mit.edu wiki index.php NLopt Reference Preconditioning with approximate Hessians only applies to NLOPT LD CCSAQ",
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "toPrecondG",
          "normalized": "(a-\u003ea-\u003eIO a)-\u003ePrecond",
          "package": "ipopt-hs",
          "partial": "Precond",
          "signature": "(v-\u003ev-\u003eIO v)-\u003ePrecond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:toPrecondG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "vmUnsafeWith",
          "package": "ipopt-hs",
          "signature": "IOVector Double -\u003e (Ptr CDouble -\u003e IO b) -\u003e IO b",
          "source": "src/Nlopt-Raw.html#vmUnsafeWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "vmUnsafeWith",
          "normalized": "IOVector Double-\u003e(Ptr CDouble-\u003eIO a)-\u003eIO a",
          "package": "ipopt-hs",
          "partial": "Unsafe With",
          "signature": "IOVector Double-\u003e(Ptr CDouble-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:vmUnsafeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "withFunc",
          "package": "ipopt-hs",
          "signature": "Func -\u003e (FunPtr Func -\u003e IO b) -\u003e IO b",
          "source": "src/Nlopt-Raw.html#withFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "withFunc",
          "normalized": "Func-\u003e(FunPtr Func-\u003eIO a)-\u003eIO a",
          "package": "ipopt-hs",
          "partial": "Func",
          "signature": "Func-\u003e(FunPtr Func-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:withFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "withMFunc",
          "package": "ipopt-hs",
          "signature": "MFunc -\u003e (FunPtr MFunc -\u003e IO b) -\u003e IO b",
          "source": "src/Nlopt-Raw.html#withMFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "withMFunc",
          "normalized": "MFunc-\u003e(FunPtr MFunc-\u003eIO a)-\u003eIO a",
          "package": "ipopt-hs",
          "partial": "MFunc",
          "signature": "MFunc-\u003e(FunPtr MFunc-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:withMFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "withNLOpt",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e (Ptr NLOpt -\u003e IO b) -\u003e IO b",
          "source": "src/Nlopt-Raw.html#withNLOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "withNLOpt",
          "normalized": "NLOpt-\u003e(Ptr NLOpt-\u003eIO a)-\u003eIO a",
          "package": "ipopt-hs",
          "partial": "NLOpt",
          "signature": "NLOpt-\u003e(Ptr NLOpt-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:withNLOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "withNLOpt_",
          "package": "ipopt-hs",
          "signature": "NLOpt -\u003e (Ptr b1 -\u003e IO b) -\u003e IO b",
          "source": "src/Nlopt-Raw.html#withNLOpt_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "withNLOpt_",
          "normalized": "NLOpt-\u003e(Ptr a-\u003eIO a)-\u003eIO a",
          "package": "ipopt-hs",
          "partial": "NLOpt",
          "signature": "NLOpt-\u003e(Ptr b-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:withNLOpt_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "withNull",
          "package": "ipopt-hs",
          "signature": "(Ptr a -\u003e t) -\u003e t",
          "source": "src/Nlopt-Raw.html#withNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "withNull",
          "normalized": "(Ptr a-\u003eb)-\u003eb",
          "package": "ipopt-hs",
          "partial": "Null",
          "signature": "(Ptr a-\u003et)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:withNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nlopt.Raw",
          "name": "withPrecond",
          "package": "ipopt-hs",
          "signature": "Precond -\u003e (FunPtr Precond -\u003e IO b) -\u003e IO b",
          "source": "src/Nlopt-Raw.html#withPrecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nlopt Raw",
          "module": "Nlopt.Raw",
          "name": "withPrecond",
          "normalized": "Precond-\u003e(FunPtr Precond-\u003eIO a)-\u003eIO a",
          "package": "ipopt-hs",
          "partial": "Precond",
          "signature": "Precond-\u003e(FunPtr Precond-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ipopt-hs/docs/Nlopt-Raw.html#v:withPrecond"
      }
    }
  ]
]