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
        "word": "monad-unify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "Unify",
          "package": "monad-unify",
          "source": "src/Control-Monad-Unify.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "Unify",
          "package": "monad-unify",
          "partial": "Unify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type which can contain unification variables\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "Partial",
          "package": "monad-unify",
          "source": "src/Control-Monad-Unify.html#Partial",
          "type": "class"
        },
        "index": {
          "description": "type which can contain unification variables",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "Partial",
          "package": "monad-unify",
          "partial": "Partial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#t:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA substitution maintains a mapping from unification variables to their values\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "Substitution",
          "package": "monad-unify",
          "source": "src/Control-Monad-Unify.html#Substitution",
          "type": "data"
        },
        "index": {
          "description": "substitution maintains mapping from unification variables to their values",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "Substitution",
          "package": "monad-unify",
          "partial": "Substitution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#t:Substitution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies types which support unification\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "Unifiable",
          "package": "monad-unify",
          "source": "src/Control-Monad-Unify.html#Unifiable",
          "type": "class"
        },
        "index": {
          "description": "Identifies types which support unification",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "Unifiable",
          "package": "monad-unify",
          "partial": "Unifiable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#t:Unifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState required for type checking\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "UnifyState",
          "package": "monad-unify",
          "source": "src/Control-Monad-Unify.html#UnifyState",
          "type": "data"
        },
        "index": {
          "description": "State required for type checking",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "UnifyState",
          "package": "monad-unify",
          "partial": "Unify State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#t:UnifyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type checking monad, which provides the state of the type checker, and error reporting capabilities\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "UnifyT",
          "package": "monad-unify",
          "source": "src/Control-Monad-Unify.html#UnifyT",
          "type": "newtype"
        },
        "index": {
          "description": "The type checking monad which provides the state of the type checker and error reporting capabilities",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "UnifyT",
          "package": "monad-unify",
          "partial": "Unify",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#t:UnifyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUntyped unification variables\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "Unknown",
          "package": "monad-unify",
          "source": "src/Control-Monad-Unify.html#Unknown",
          "type": "newtype"
        },
        "index": {
          "description": "Untyped unification variables",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "Unknown",
          "package": "monad-unify",
          "partial": "Unknown",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#t:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a substitution to a value\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "($?)",
          "package": "monad-unify",
          "signature": "Substitution t -\u003e t -\u003e t",
          "source": "src/Control-Monad-Unify.html#%24%3F",
          "type": "function"
        },
        "index": {
          "description": "Apply substitution to value",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "($?) $?",
          "normalized": "Substitution a-\u003ea-\u003ea",
          "package": "monad-unify",
          "signature": "Substitution t-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:-36--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "(=?=)",
          "package": "monad-unify",
          "signature": "t -\u003e t -\u003e UnifyT t m ()",
          "source": "src/Control-Monad-Unify.html#%3D%3F%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "(=?=) =?=",
          "normalized": "a-\u003ea-\u003eUnifyT a b()",
          "package": "monad-unify",
          "signature": "t-\u003et-\u003eUnifyT t m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:-61--63--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a unification variable with the specified value in the current substitution\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "(=:=)",
          "package": "monad-unify",
          "signature": "Unknown -\u003e t -\u003e UnifyT t m ()",
          "source": "src/Control-Monad-Unify.html#%3D%3A%3D",
          "type": "function"
        },
        "index": {
          "description": "Replace unification variable with the specified value in the current substitution",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "(=:=) =:=",
          "normalized": "Unknown-\u003ea-\u003eUnifyT a b()",
          "package": "monad-unify",
          "signature": "Unknown-\u003et-\u003eUnifyT t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:-61-:-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "Substitution",
          "package": "monad-unify",
          "signature": "Substitution",
          "source": "src/Control-Monad-Unify.html#Substitution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "Substitution",
          "package": "monad-unify",
          "partial": "Substitution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:Substitution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "UnifyState",
          "package": "monad-unify",
          "signature": "UnifyState",
          "source": "src/Control-Monad-Unify.html#UnifyState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "UnifyState",
          "package": "monad-unify",
          "partial": "Unify State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:UnifyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "UnifyT",
          "package": "monad-unify",
          "signature": "UnifyT",
          "source": "src/Control-Monad-Unify.html#UnifyT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "UnifyT",
          "package": "monad-unify",
          "partial": "Unify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:UnifyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "Unknown",
          "package": "monad-unify",
          "signature": "Unknown",
          "source": "src/Control-Monad-Unify.html#Unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "Unknown",
          "package": "monad-unify",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty \u003ccode\u003eUnifyState\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "defaultUnifyState",
          "package": "monad-unify",
          "signature": "UnifyState t",
          "source": "src/Control-Monad-Unify.html#defaultUnifyState",
          "type": "function"
        },
        "index": {
          "description": "An empty UnifyState",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "defaultUnifyState",
          "package": "monad-unify",
          "partial": "Unify State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:defaultUnifyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a fresh unification variable at a specific type\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "fresh",
          "package": "monad-unify",
          "signature": "UnifyT t m t",
          "source": "src/Control-Monad-Unify.html#fresh",
          "type": "function"
        },
        "index": {
          "description": "Generate fresh unification variable at specific type",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "fresh",
          "package": "monad-unify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:fresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a fresh untyped unification variable\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "fresh'",
          "package": "monad-unify",
          "signature": "UnifyT t m Unknown",
          "source": "src/Control-Monad-Unify.html#fresh%27",
          "type": "function"
        },
        "index": {
          "description": "Generate fresh untyped unification variable",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "fresh'",
          "package": "monad-unify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:fresh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "isUnknown",
          "package": "monad-unify",
          "signature": "t -\u003e Maybe Unknown",
          "source": "src/Control-Monad-Unify.html#isUnknown",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "isUnknown",
          "normalized": "a-\u003eMaybe Unknown",
          "package": "monad-unify",
          "partial": "Unknown",
          "signature": "t-\u003eMaybe Unknown",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:isUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the occurs check, to make sure a unification variable does not occur inside a value\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "occursCheck",
          "package": "monad-unify",
          "signature": "Unknown -\u003e t -\u003e UnifyT t m ()",
          "source": "src/Control-Monad-Unify.html#occursCheck",
          "type": "function"
        },
        "index": {
          "description": "Perform the occurs check to make sure unification variable does not occur inside value",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "occursCheck",
          "normalized": "Unknown-\u003ea-\u003eUnifyT a b()",
          "package": "monad-unify",
          "partial": "Check",
          "signature": "Unknown-\u003et-\u003eUnifyT t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:occursCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "runSubstitution",
          "package": "monad-unify",
          "signature": "HashMap Int t",
          "source": "src/Control-Monad-Unify.html#Substitution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "runSubstitution",
          "package": "monad-unify",
          "partial": "Substitution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:runSubstitution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation in the Unify monad, failing with an error, or succeeding with a return value and the new next unification variable\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "runUnify",
          "package": "monad-unify",
          "signature": "UnifyState t -\u003e UnifyT t m a -\u003e m (Either String (a, UnifyState t))",
          "source": "src/Control-Monad-Unify.html#runUnify",
          "type": "function"
        },
        "index": {
          "description": "Run computation in the Unify monad failing with an error or succeeding with return value and the new next unification variable",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "runUnify",
          "normalized": "UnifyState a-\u003eUnifyT a b c-\u003eb(Either String(c,UnifyState a))",
          "package": "monad-unify",
          "partial": "Unify",
          "signature": "UnifyState t-\u003eUnifyT t m a-\u003em(Either String(a,UnifyState t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:runUnify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying integer representing the unification variable\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "runUnknown",
          "package": "monad-unify",
          "signature": "Int",
          "source": "src/Control-Monad-Unify.html#Unknown",
          "type": "function"
        },
        "index": {
          "description": "The underlying integer representing the unification variable",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "runUnknown",
          "package": "monad-unify",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:runUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute a single unification variable\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "substituteOne",
          "package": "monad-unify",
          "signature": "Unknown -\u003e t -\u003e Substitution t",
          "source": "src/Control-Monad-Unify.html#substituteOne",
          "type": "function"
        },
        "index": {
          "description": "Substitute single unification variable",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "substituteOne",
          "normalized": "Unknown-\u003ea-\u003eSubstitution a",
          "package": "monad-unify",
          "partial": "One",
          "signature": "Unknown-\u003et-\u003eSubstitution t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:substituteOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "unUnify",
          "package": "monad-unify",
          "signature": "StateT (UnifyState t) (ErrorT String m) a",
          "source": "src/Control-Monad-Unify.html#UnifyT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "unUnify",
          "package": "monad-unify",
          "partial": "Unify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:unUnify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current substitution\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "unifyCurrentSubstitution",
          "package": "monad-unify",
          "signature": "Substitution t",
          "source": "src/Control-Monad-Unify.html#UnifyState",
          "type": "function"
        },
        "index": {
          "description": "The current substitution",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "unifyCurrentSubstitution",
          "package": "monad-unify",
          "partial": "Current Substitution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:unifyCurrentSubstitution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next fresh unification variable\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "unifyNextVar",
          "package": "monad-unify",
          "signature": "Int",
          "source": "src/Control-Monad-Unify.html#UnifyState",
          "type": "function"
        },
        "index": {
          "description": "The next fresh unification variable",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "unifyNextVar",
          "package": "monad-unify",
          "partial": "Next Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:unifyNextVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Unify",
          "name": "unknown",
          "package": "monad-unify",
          "signature": "Unknown -\u003e t",
          "source": "src/Control-Monad-Unify.html#unknown",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "unknown",
          "normalized": "Unknown-\u003ea",
          "package": "monad-unify",
          "signature": "Unknown-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect all unknowns occurring inside a value\n\u003c/p\u003e",
          "module": "Control.Monad.Unify",
          "name": "unknowns",
          "package": "monad-unify",
          "signature": "d -\u003e [Unknown]",
          "source": "src/Control-Monad-Unify.html#unknowns",
          "type": "function"
        },
        "index": {
          "description": "Collect all unknowns occurring inside value",
          "hierarchy": "Control Monad Unify",
          "module": "Control.Monad.Unify",
          "name": "unknowns",
          "normalized": "a-\u003e[Unknown]",
          "package": "monad-unify",
          "signature": "d-\u003e[Unknown]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-unify/docs/Control-Monad-Unify.html#v:unknowns"
      }
    }
  ]
]