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
        "word": "glpk-hs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.LPMonad.Supply.Class",
          "name": "Class",
          "package": "glpk-hs",
          "source": "src/Control-Monad-LPMonad-Supply-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad LPMonad Supply Class",
          "module": "Control.Monad.LPMonad.Supply.Class",
          "name": "Class",
          "package": "glpk-hs",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class implemented by monads that can supply values of type \u003ccode\u003es\u003c/code\u003e.  Minimal implementation: \u003ccode\u003e\u003ca\u003esupplyNew\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esupplyN\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad.Supply.Class",
          "name": "MonadSupply",
          "package": "glpk-hs",
          "source": "src/Control-Monad-LPMonad-Supply-Class.html#MonadSupply",
          "type": "class"
        },
        "index": {
          "description": "class implemented by monads that can supply values of type Minimal implementation supplyNew or supplyN",
          "hierarchy": "Control Monad LPMonad Supply Class",
          "module": "Control.Monad.LPMonad.Supply.Class",
          "name": "MonadSupply",
          "package": "glpk-hs",
          "partial": "Monad Supply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply-Class.html#t:MonadSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply \u003ccode\u003en\u003c/code\u003e values of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad.Supply.Class",
          "name": "supplyN",
          "package": "glpk-hs",
          "signature": "Int -\u003e m [s]",
          "source": "src/Control-Monad-LPMonad-Supply-Class.html#supplyN",
          "type": "method"
        },
        "index": {
          "description": "Supply values of type",
          "hierarchy": "Control Monad LPMonad Supply Class",
          "module": "Control.Monad.LPMonad.Supply.Class",
          "name": "supplyN",
          "normalized": "Int-\u003ea[b]",
          "package": "glpk-hs",
          "signature": "Int-\u003em[s]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply-Class.html#v:supplyN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply a new value of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad.Supply.Class",
          "name": "supplyNew",
          "package": "glpk-hs",
          "signature": "m s",
          "source": "src/Control-Monad-LPMonad-Supply-Class.html#supplyNew",
          "type": "method"
        },
        "index": {
          "description": "Supply new value of type",
          "hierarchy": "Control Monad LPMonad Supply Class",
          "module": "Control.Monad.LPMonad.Supply.Class",
          "name": "supplyNew",
          "package": "glpk-hs",
          "partial": "New",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply-Class.html#v:supplyNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.LPMonad.Supply",
          "name": "Supply",
          "package": "glpk-hs",
          "source": "src/Control-Monad-LPMonad-Supply.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad LPMonad Supply",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "Supply",
          "package": "glpk-hs",
          "partial": "Supply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad capable of supplying unique variables.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "VSupply",
          "package": "glpk-hs",
          "source": "src/Control-Monad-LPMonad-Supply.html#VSupply",
          "type": "type"
        },
        "index": {
          "description": "monad capable of supplying unique variables",
          "hierarchy": "Control Monad LPMonad Supply",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "VSupply",
          "package": "glpk-hs",
          "partial": "VSupply",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply.html#t:VSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer capable of supplying unique variables.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "VSupplyT",
          "package": "glpk-hs",
          "source": "src/Control-Monad-LPMonad-Supply.html#VSupplyT",
          "type": "data"
        },
        "index": {
          "description": "monad transformer capable of supplying unique variables",
          "hierarchy": "Control Monad LPMonad Supply",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "VSupplyT",
          "package": "glpk-hs",
          "partial": "VSupply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply.html#t:VSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type suitable for use as a linear program variable.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "Var",
          "package": "glpk-hs",
          "source": "src/Control-Monad-LPMonad-Supply.html#Var",
          "type": "newtype"
        },
        "index": {
          "description": "type suitable for use as linear program variable",
          "hierarchy": "Control Monad LPMonad Supply",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "Var",
          "package": "glpk-hs",
          "partial": "Var",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.LPMonad.Supply",
          "name": "Var",
          "package": "glpk-hs",
          "signature": "Var",
          "source": "src/Control-Monad-LPMonad-Supply.html#Var",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad LPMonad Supply",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "Var",
          "package": "glpk-hs",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.LPMonad.Supply",
          "name": "runVSupply",
          "package": "glpk-hs",
          "signature": "VSupply a -\u003e a",
          "source": "src/Control-Monad-LPMonad-Supply.html#runVSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad LPMonad Supply",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "runVSupply",
          "normalized": "VSupply a-\u003ea",
          "package": "glpk-hs",
          "partial": "VSupply",
          "signature": "VSupply a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply.html#v:runVSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.LPMonad.Supply",
          "name": "runVSupplyT",
          "package": "glpk-hs",
          "signature": "VSupplyT m a -\u003e m a",
          "source": "src/Control-Monad-LPMonad-Supply.html#runVSupplyT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad LPMonad Supply",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "runVSupplyT",
          "normalized": "VSupplyT a b-\u003ea b",
          "package": "glpk-hs",
          "partial": "VSupply",
          "signature": "VSupplyT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply.html#v:runVSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.LPMonad.Supply",
          "name": "varId",
          "package": "glpk-hs",
          "signature": "Int",
          "source": "src/Control-Monad-LPMonad-Supply.html#Var",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad LPMonad Supply",
          "module": "Control.Monad.LPMonad.Supply",
          "name": "varId",
          "package": "glpk-hs",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad-Supply.html#v:varId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of operations that can be used to specify linear programming in a\n simple, monadic way.  It is not too difficult to construct \u003ccode\u003e\u003ca\u003eLP\u003c/a\u003e\u003c/code\u003e values explicitly,\n but this module may help simplify and modularize the construction of the linear program,\n for example separating different families of constraints in the problem specification.\n\u003c/p\u003e\u003cp\u003eMany of these functions should be executed in either the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLPM\u003c/a\u003e\u003c/code\u003e v c\u003c/code\u003e or the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLPT\u003c/a\u003e\u003c/code\u003e v c \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e monad.\n If you wish to generate new variables on an ad-hoc basis, rather than supplying your own variable type, use the\n \u003ccode\u003e\u003ca\u003eVSupply\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eVSupplyT\u003c/a\u003e\u003c/code\u003e monads in your transformer stack, as in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLPT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e c \u003ccode\u003e\u003ca\u003eVSupply\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLPT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e c (\u003ccode\u003e\u003ca\u003eVSupplyT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  To generate new variables, use \u003ccode\u003e\u003ca\u003esupplyNew\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esupplyN\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "LPMonad",
          "package": "glpk-hs",
          "source": "src/Control-Monad-LPMonad.html",
          "type": "module"
        },
        "index": {
          "description": "collection of operations that can be used to specify linear programming in simple monadic way It is not too difficult to construct LP values explicitly but this module may help simplify and modularize the construction of the linear program for example separating different families of constraints in the problem specification Many of these functions should be executed in either the LPM or the LPT IO monad If you wish to generate new variables on an ad-hoc basis rather than supplying your own variable type use the VSupply or VSupplyT monads in your transformer stack as in LPT Var VSupply or LPT Var VSupplyT IO To generate new variables use supplyNew or supplyN",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "LPMonad",
          "package": "glpk-hs",
          "partial": "LPMonad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple monad for constructing linear programs.  This library is intended to be able to link to \n a variety of different linear programming implementations.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "LPM",
          "package": "glpk-hs",
          "source": "src/Control-Monad-LPMonad-Internal.html#LPM",
          "type": "type"
        },
        "index": {
          "description": "simple monad for constructing linear programs This library is intended to be able to link to variety of different linear programming implementations",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "LPM",
          "package": "glpk-hs",
          "partial": "LPM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#t:LPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple monad transformer for constructing linear programs in an arbitrary monad.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "LPT",
          "package": "glpk-hs",
          "source": "src/Control-Monad-LPMonad-Internal.html#LPT",
          "type": "type"
        },
        "index": {
          "description": "simple monad transformer for constructing linear programs in an arbitrary monad",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "LPT",
          "package": "glpk-hs",
          "partial": "LPT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#t:LPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds this function to the objective function.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "addObjective",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#addObjective",
          "type": "function"
        },
        "index": {
          "description": "Adds this function to the objective function",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "addObjective",
          "normalized": "LinFunc a b-\u003ec()",
          "package": "glpk-hs",
          "partial": "Objective",
          "signature": "LinFunc v c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:addObjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds this function to the objective function, with the specified weight.  Equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddObjective\u003c/a\u003e\u003c/code\u003e (wt \u003ccode\u003e\u003ca\u003e*^\u003c/a\u003e\u003c/code\u003e obj)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "addWeightedObjective",
          "package": "glpk-hs",
          "signature": "r -\u003e LinFunc v c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#addWeightedObjective",
          "type": "function"
        },
        "index": {
          "description": "Adds this function to the objective function with the specified weight Equivalent to addObjective wt obj",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "addWeightedObjective",
          "normalized": "a-\u003eLinFunc b c-\u003ed()",
          "package": "glpk-hs",
          "partial": "Weighted Objective",
          "signature": "r-\u003eLinFunc v c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:addWeightedObjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general form of an unlabeled constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "constrain",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e Bounds c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#constrain",
          "type": "function"
        },
        "index": {
          "description": "The most general form of an unlabeled constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "constrain",
          "normalized": "LinFunc a b-\u003eBounds b-\u003ec()",
          "package": "glpk-hs",
          "signature": "LinFunc v c-\u003eBounds c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:constrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general form of a labeled constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "constrain'",
          "package": "glpk-hs",
          "signature": "String -\u003e LinFunc v c -\u003e Bounds c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#constrain%27",
          "type": "function"
        },
        "index": {
          "description": "The most general form of labeled constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "constrain'",
          "normalized": "String-\u003eLinFunc a b-\u003eBounds b-\u003ec()",
          "package": "glpk-hs",
          "signature": "String-\u003eLinFunc v c-\u003eBounds c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:constrain-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the relationship between two functions in the variables.  So, for example,\n\u003c/p\u003e\u003cpre\u003e equal (f ^+^ g) h\n\u003c/pre\u003e\u003cp\u003econstrains the value of \u003ccode\u003eh\u003c/code\u003e to be equal to the value of \u003ccode\u003ef\u003c/code\u003e plus the value of \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "equal",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e LinFunc v c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#equal",
          "type": "function"
        },
        "index": {
          "description": "Specifies the relationship between two functions in the variables So for example equal constrains the value of to be equal to the value of plus the value of",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "equal",
          "normalized": "LinFunc a b-\u003eLinFunc a b-\u003ec()",
          "package": "glpk-hs",
          "signature": "LinFunc v c-\u003eLinFunc v c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the relationship between two functions in the variables, with a label on the constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "equal'",
          "package": "glpk-hs",
          "signature": "String -\u003e LinFunc v c -\u003e LinFunc v c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#equal%27",
          "type": "function"
        },
        "index": {
          "description": "Specifies the relationship between two functions in the variables with label on the constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "equal'",
          "normalized": "String-\u003eLinFunc a b-\u003eLinFunc a b-\u003ec()",
          "package": "glpk-hs",
          "signature": "String-\u003eLinFunc v c-\u003eLinFunc v c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:equal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a constraint on a linear function in the variables.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "equalTo",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#equalTo",
          "type": "function"
        },
        "index": {
          "description": "Sets constraint on linear function in the variables",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "equalTo",
          "normalized": "LinFunc a b-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "To",
          "signature": "LinFunc v c-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:equalTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a labeled constraint on a linear function in the variables.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "equalTo'",
          "package": "glpk-hs",
          "signature": "String -\u003e LinFunc v c -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#equalTo%27",
          "type": "function"
        },
        "index": {
          "description": "Sets labeled constraint on linear function in the variables",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "equalTo'",
          "normalized": "String-\u003eLinFunc a b-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "To'",
          "signature": "String-\u003eLinFunc v c-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:equalTo-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the specified operation in the linear programming monad.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "evalLPM",
          "package": "glpk-hs",
          "signature": "LPM v c a -\u003e a",
          "source": "src/Control-Monad-LPMonad-Internal.html#evalLPM",
          "type": "function"
        },
        "index": {
          "description": "Runs the specified operation in the linear programming monad",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "evalLPM",
          "normalized": "LPM a b c-\u003ec",
          "package": "glpk-hs",
          "partial": "LPM",
          "signature": "LPM v c a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:evalLPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the specified operation in the linear programming monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "evalLPT",
          "package": "glpk-hs",
          "signature": "LPT v c m a -\u003e m a",
          "source": "src/Control-Monad-LPMonad-Internal.html#evalLPT",
          "type": "function"
        },
        "index": {
          "description": "Runs the specified operation in the linear programming monad transformer",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "evalLPT",
          "normalized": "LPT a b c d-\u003ec d",
          "package": "glpk-hs",
          "partial": "LPT",
          "signature": "LPT v c m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:evalLPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a linear programming problem.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "execLPM",
          "package": "glpk-hs",
          "signature": "LPM v c a -\u003e LP v c",
          "source": "src/Control-Monad-LPMonad-Internal.html#execLPM",
          "type": "function"
        },
        "index": {
          "description": "Constructs linear programming problem",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "execLPM",
          "normalized": "LPM a b c-\u003eLP a b",
          "package": "glpk-hs",
          "partial": "LPM",
          "signature": "LPM v c a-\u003eLP v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:execLPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a linear programming problem in the specified monad.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "execLPT",
          "package": "glpk-hs",
          "signature": "LPT v c m a -\u003e m (LP v c)",
          "source": "src/Control-Monad-LPMonad-Internal.html#execLPT",
          "type": "function"
        },
        "index": {
          "description": "Constructs linear programming problem in the specified monad",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "execLPT",
          "normalized": "LPT a b c d-\u003ec(LP a b)",
          "package": "glpk-hs",
          "partial": "LPT",
          "signature": "LPT v c m a-\u003em(LP v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:execLPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the relationship between two functions in the variables.  So, for example,\n\u003c/p\u003e\u003cpre\u003e equal (f ^+^ g) h\n\u003c/pre\u003e\u003cp\u003econstrains the value of \u003ccode\u003eh\u003c/code\u003e to be equal to the value of \u003ccode\u003ef\u003c/code\u003e plus the value of \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "geq",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e LinFunc v c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#geq",
          "type": "function"
        },
        "index": {
          "description": "Specifies the relationship between two functions in the variables So for example equal constrains the value of to be equal to the value of plus the value of",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "geq",
          "normalized": "LinFunc a b-\u003eLinFunc a b-\u003ec()",
          "package": "glpk-hs",
          "signature": "LinFunc v c-\u003eLinFunc v c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:geq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the relationship between two functions in the variables, with a label on the constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "geq'",
          "package": "glpk-hs",
          "signature": "String -\u003e LinFunc v c -\u003e LinFunc v c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#geq%27",
          "type": "function"
        },
        "index": {
          "description": "Specifies the relationship between two functions in the variables with label on the constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "geq'",
          "normalized": "String-\u003eLinFunc a b-\u003eLinFunc a b-\u003ec()",
          "package": "glpk-hs",
          "signature": "String-\u003eLinFunc v c-\u003eLinFunc v c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:geq-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a constraint on a linear function in the variables.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "geqTo",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#geqTo",
          "type": "function"
        },
        "index": {
          "description": "Sets constraint on linear function in the variables",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "geqTo",
          "normalized": "LinFunc a b-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "To",
          "signature": "LinFunc v c-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:geqTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a labeled constraint on a linear function in the variables.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "geqTo'",
          "package": "glpk-hs",
          "signature": "String -\u003e LinFunc v c -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#geqTo%27",
          "type": "function"
        },
        "index": {
          "description": "Sets labeled constraint on linear function in the variables",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "geqTo'",
          "normalized": "String-\u003eLinFunc a b-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "To'",
          "signature": "String-\u003eLinFunc v c-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:geqTo-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves the linear program with the specified options in GLPK.  Returns the return code,\n and if the solver was successful, the objective function value and the settings of each variable.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "glpSolve",
          "package": "glpk-hs",
          "signature": "GLPOpts -\u003e m (ReturnCode, Maybe (Double, Map v Double))",
          "source": "src/Control-Monad-LPMonad.html#glpSolve",
          "type": "function"
        },
        "index": {
          "description": "Solves the linear program with the specified options in GLPK Returns the return code and if the solver was successful the objective function value and the settings of each variable",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "glpSolve",
          "normalized": "GLPOpts-\u003ea(ReturnCode,Maybe(Double,Map b Double))",
          "package": "glpk-hs",
          "partial": "Solve",
          "signature": "GLPOpts-\u003em(ReturnCode,Maybe(Double,Map v Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:glpSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves the linear program with the specified options in GLPK.  Returns the return code,\n and if the solver was successful, the objective function value, the settings of each variable, and\n the value of each constraint/row.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "glpSolve'",
          "package": "glpk-hs",
          "signature": "GLPOpts -\u003e m (ReturnCode, Maybe (Double, Map v Double, [RowValue v c]))",
          "source": "src/Control-Monad-LPMonad.html#glpSolve%27",
          "type": "function"
        },
        "index": {
          "description": "Solves the linear program with the specified options in GLPK Returns the return code and if the solver was successful the objective function value the settings of each variable and the value of each constraint row",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "glpSolve'",
          "normalized": "GLPOpts-\u003ea(ReturnCode,Maybe(Double,Map b Double,[RowValue b c]))",
          "package": "glpk-hs",
          "partial": "Solve'",
          "signature": "GLPOpts-\u003em(ReturnCode,Maybe(Double,Map v Double,[RowValue v c]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:glpSolve-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the relationship between two functions in the variables.  So, for example,\n\u003c/p\u003e\u003cpre\u003e equal (f ^+^ g) h\n\u003c/pre\u003e\u003cp\u003econstrains the value of \u003ccode\u003eh\u003c/code\u003e to be equal to the value of \u003ccode\u003ef\u003c/code\u003e plus the value of \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "leq",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e LinFunc v c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#leq",
          "type": "function"
        },
        "index": {
          "description": "Specifies the relationship between two functions in the variables So for example equal constrains the value of to be equal to the value of plus the value of",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "leq",
          "normalized": "LinFunc a b-\u003eLinFunc a b-\u003ec()",
          "package": "glpk-hs",
          "signature": "LinFunc v c-\u003eLinFunc v c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:leq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the relationship between two functions in the variables, with a label on the constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "leq'",
          "package": "glpk-hs",
          "signature": "String -\u003e LinFunc v c -\u003e LinFunc v c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#leq%27",
          "type": "function"
        },
        "index": {
          "description": "Specifies the relationship between two functions in the variables with label on the constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "leq'",
          "normalized": "String-\u003eLinFunc a b-\u003eLinFunc a b-\u003ec()",
          "package": "glpk-hs",
          "signature": "String-\u003eLinFunc v c-\u003eLinFunc v c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:leq-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a constraint on a linear function in the variables.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "leqTo",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#leqTo",
          "type": "function"
        },
        "index": {
          "description": "Sets constraint on linear function in the variables",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "leqTo",
          "normalized": "LinFunc a b-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "To",
          "signature": "LinFunc v c-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:leqTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a labeled constraint on a linear function in the variables.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "leqTo'",
          "package": "glpk-hs",
          "signature": "String -\u003e LinFunc v c -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#leqTo%27",
          "type": "function"
        },
        "index": {
          "description": "Sets labeled constraint on linear function in the variables",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "leqTo'",
          "normalized": "String-\u003eLinFunc a b-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "To'",
          "signature": "String-\u003eLinFunc v c-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:leqTo-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves the linear program with the default settings in GLPK.  Returns the return code,\n and if the solver was successful, the objective function value and the settings of each variable.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "quickSolveLP",
          "package": "glpk-hs",
          "signature": "m (ReturnCode, Maybe (Double, Map v Double))",
          "source": "src/Control-Monad-LPMonad.html#quickSolveLP",
          "type": "function"
        },
        "index": {
          "description": "Solves the linear program with the default settings in GLPK Returns the return code and if the solver was successful the objective function value and the settings of each variable",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "quickSolveLP",
          "normalized": "a(ReturnCode,Maybe(Double,Map b Double))",
          "package": "glpk-hs",
          "partial": "Solve LP",
          "signature": "m(ReturnCode,Maybe(Double,Map v Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:quickSolveLP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves the linear program with the default settings in GLPK.  Returns the return code,\n and if the solver was successful, the objective function value, the settings of each variable, and the\n value of each constraint/row.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "quickSolveLP'",
          "package": "glpk-hs",
          "signature": "m (ReturnCode, Maybe (Double, Map v Double, [RowValue v c]))",
          "source": "src/Control-Monad-LPMonad.html#quickSolveLP%27",
          "type": "function"
        },
        "index": {
          "description": "Solves the linear program with the default settings in GLPK Returns the return code and if the solver was successful the objective function value the settings of each variable and the value of each constraint row",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "quickSolveLP'",
          "normalized": "a(ReturnCode,Maybe(Double,Map b Double,[RowValue b c]))",
          "package": "glpk-hs",
          "partial": "Solve LP'",
          "signature": "m(ReturnCode,Maybe(Double,Map v Double,[RowValue v c]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:quickSolveLP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves the linear program with the default settings in GLPK.  Returns the return code,\n and if the solver was successful, the objective function value and the settings of each variable.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "quickSolveMIP",
          "package": "glpk-hs",
          "signature": "m (ReturnCode, Maybe (Double, Map v Double))",
          "source": "src/Control-Monad-LPMonad.html#quickSolveMIP",
          "type": "function"
        },
        "index": {
          "description": "Solves the linear program with the default settings in GLPK Returns the return code and if the solver was successful the objective function value and the settings of each variable",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "quickSolveMIP",
          "normalized": "a(ReturnCode,Maybe(Double,Map b Double))",
          "package": "glpk-hs",
          "partial": "Solve MIP",
          "signature": "m(ReturnCode,Maybe(Double,Map v Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:quickSolveMIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves the linear program with the default settings in GLPK.  Returns the return code,\n and if the solver was successful, the objective function value, the settings of each variable, and the\n value of each constraint/row.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "quickSolveMIP'",
          "package": "glpk-hs",
          "signature": "m (ReturnCode, Maybe (Double, Map v Double, [RowValue v c]))",
          "source": "src/Control-Monad-LPMonad.html#quickSolveMIP%27",
          "type": "function"
        },
        "index": {
          "description": "Solves the linear program with the default settings in GLPK Returns the return code and if the solver was successful the objective function value the settings of each variable and the value of each constraint row",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "quickSolveMIP'",
          "normalized": "a(ReturnCode,Maybe(Double,Map b Double,[RowValue b c]))",
          "package": "glpk-hs",
          "partial": "Solve MIP'",
          "signature": "m(ReturnCode,Maybe(Double,Map v Double,[RowValue v c]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:quickSolveMIP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a linear program from the specified file in CPLEX LP format, overwriting\n the current linear program.  Uses \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erealToFrac\u003c/a\u003e\u003c/code\u003e to translate to the specified type.\n Warning: this may not work on all files written using \u003ccode\u003e\u003ca\u003ewriteLPToFile\u003c/a\u003e\u003c/code\u003e, since variable names\n may be changed.\n (This is a binding to GLPK, not a Haskell implementation of CPLEX.)\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "readLPFromFile",
          "package": "glpk-hs",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Control-Monad-LPMonad.html#readLPFromFile",
          "type": "function"
        },
        "index": {
          "description": "Reads linear program from the specified file in CPLEX LP format overwriting the current linear program Uses read and realToFrac to translate to the specified type Warning this may not work on all files written using writeLPToFile since variable names may be changed This is binding to GLPK not Haskell implementation of CPLEX",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "readLPFromFile",
          "normalized": "FilePath-\u003ea()",
          "package": "glpk-hs",
          "partial": "LPFrom File",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:readLPFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a linear program from the specified file in CPLEX LP format, overwriting\n the current linear program.  (This is a binding to GLPK, not a Haskell implementation of CPLEX.)\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "readLPFromFile'",
          "package": "glpk-hs",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Control-Monad-LPMonad.html#readLPFromFile%27",
          "type": "function"
        },
        "index": {
          "description": "Reads linear program from the specified file in CPLEX LP format overwriting the current linear program This is binding to GLPK not Haskell implementation of CPLEX",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "readLPFromFile'",
          "normalized": "FilePath-\u003ea()",
          "package": "glpk-hs",
          "partial": "LPFrom File'",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:readLPFromFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.LPMonad",
          "name": "runLPM",
          "package": "glpk-hs",
          "signature": "LPM v c a -\u003e (a, LP v c)",
          "source": "src/Control-Monad-LPMonad-Internal.html#runLPM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "runLPM",
          "normalized": "LPM a b c-\u003e(c,LP a b)",
          "package": "glpk-hs",
          "partial": "LPM",
          "signature": "LPM v c a-\u003e(a,LP v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:runLPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.LPMonad",
          "name": "runLPT",
          "package": "glpk-hs",
          "signature": "LPT v c m a -\u003e m (a, LP v c)",
          "source": "src/Control-Monad-LPMonad-Internal.html#runLPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "runLPT",
          "normalized": "LPT a b c d-\u003ec(d,LP a b)",
          "package": "glpk-hs",
          "partial": "LPT",
          "signature": "LPT v c m a-\u003em(a,LP v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:runLPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the optimization direction of the linear program: maximization or minimization.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "setDirection",
          "package": "glpk-hs",
          "signature": "Direction -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#setDirection",
          "type": "function"
        },
        "index": {
          "description": "Sets the optimization direction of the linear program maximization or minimization",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "setDirection",
          "normalized": "Direction-\u003ea()",
          "package": "glpk-hs",
          "partial": "Direction",
          "signature": "Direction-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:setDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the objective function, overwriting the previous objective function.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "setObjective",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#setObjective",
          "type": "function"
        },
        "index": {
          "description": "Sets the objective function overwriting the previous objective function",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "setObjective",
          "normalized": "LinFunc a b-\u003ec()",
          "package": "glpk-hs",
          "partial": "Objective",
          "signature": "LinFunc v c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:setObjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general way to set constraints on a variable.\n If you constrain a variable more than once, the constraints will be combined.\n If you combine mutually contradictory constraints, an error will be generated.\n This is more efficient than creating an equivalent function constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "setVarBounds",
          "package": "glpk-hs",
          "signature": "v -\u003e Bounds c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#setVarBounds",
          "type": "function"
        },
        "index": {
          "description": "The most general way to set constraints on variable If you constrain variable more than once the constraints will be combined If you combine mutually contradictory constraints an error will be generated This is more efficient than creating an equivalent function constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "setVarBounds",
          "normalized": "a-\u003eBounds b-\u003ec()",
          "package": "glpk-hs",
          "partial": "Var Bounds",
          "signature": "v-\u003eBounds c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:setVarBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the kind ('type') of a variable.  See \u003ccode\u003e\u003ca\u003eVarKind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "setVarKind",
          "package": "glpk-hs",
          "signature": "v -\u003e VarKind -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#setVarKind",
          "type": "function"
        },
        "index": {
          "description": "Sets the kind type of variable See VarKind",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "setVarKind",
          "normalized": "a-\u003eVarKind-\u003eb()",
          "package": "glpk-hs",
          "partial": "Var Kind",
          "signature": "v-\u003eVarKind-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:setVarKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBounds the value of a variable on both sides.  If you constrain a variable more than once,\n the constraints will be combined.  If the constraints are mutually contradictory,\n an error will be generated.  This is more efficient than adding an equivalent function constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "varBds",
          "package": "glpk-hs",
          "signature": "v -\u003e c -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#varBds",
          "type": "function"
        },
        "index": {
          "description": "Bounds the value of variable on both sides If you constrain variable more than once the constraints will be combined If the constraints are mutually contradictory an error will be generated This is more efficient than adding an equivalent function constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "varBds",
          "normalized": "a-\u003eb-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "Bds",
          "signature": "v-\u003ec-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:varBds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a constraint on the value of a variable.  If you constrain a variable more than once,\n the constraints will be combined.  If the constraints are mutually contradictory,\n an error will be generated.  This is more efficient than adding an equivalent function constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "varEq",
          "package": "glpk-hs",
          "signature": "v -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#varEq",
          "type": "function"
        },
        "index": {
          "description": "Sets constraint on the value of variable If you constrain variable more than once the constraints will be combined If the constraints are mutually contradictory an error will be generated This is more efficient than adding an equivalent function constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "varEq",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "Eq",
          "signature": "v-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:varEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a constraint on the value of a variable.  If you constrain a variable more than once,\n the constraints will be combined.  If the constraints are mutually contradictory,\n an error will be generated.  This is more efficient than adding an equivalent function constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "varGeq",
          "package": "glpk-hs",
          "signature": "v -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#varGeq",
          "type": "function"
        },
        "index": {
          "description": "Sets constraint on the value of variable If you constrain variable more than once the constraints will be combined If the constraints are mutually contradictory an error will be generated This is more efficient than adding an equivalent function constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "varGeq",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "Geq",
          "signature": "v-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:varGeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a constraint on the value of a variable.  If you constrain a variable more than once,\n the constraints will be combined.  If the constraints are mutually contradictory,\n an error will be generated.  This is more efficient than adding an equivalent function constraint.\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "varLeq",
          "package": "glpk-hs",
          "signature": "v -\u003e c -\u003e m ()",
          "source": "src/Control-Monad-LPMonad-Internal.html#varLeq",
          "type": "function"
        },
        "index": {
          "description": "Sets constraint on the value of variable If you constrain variable more than once the constraints will be combined If the constraints are mutually contradictory an error will be generated This is more efficient than adding an equivalent function constraint",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "varLeq",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "glpk-hs",
          "partial": "Leq",
          "signature": "v-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:varLeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites the current linear program to the specified file in CPLEX LP format. \n (This is a binding to GLPK, not a Haskell implementation of CPLEX.)\n\u003c/p\u003e",
          "module": "Control.Monad.LPMonad",
          "name": "writeLPToFile",
          "package": "glpk-hs",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Control-Monad-LPMonad.html#writeLPToFile",
          "type": "function"
        },
        "index": {
          "description": "Writes the current linear program to the specified file in CPLEX LP format This is binding to GLPK not Haskell implementation of CPLEX",
          "hierarchy": "Control Monad LPMonad",
          "module": "Control.Monad.LPMonad",
          "name": "writeLPToFile",
          "normalized": "FilePath-\u003ea()",
          "package": "glpk-hs",
          "partial": "LPTo File",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Control-Monad-LPMonad.html#v:writeLPToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon library for algebraic structures.  Has the advantage of automatically inferring lots of useful structure, especially\n in the writing of linear programs.  For example, here are several ways of writing \u003ccode\u003e3 x - 4 y + z\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e gsum [3 *& x, (-4) *^ var y, var z]\n linCombination [(3, x), (-4, y), (1, z)]\n 3 *& x ^-^ 4 *& y ^+^ var z\n\u003c/pre\u003e\u003cp\u003eIn addition, if we have two functions \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e, we can construct linear combinations of those functions, using \n exactly the same syntax.  Moreover, we can multiply functions with \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e coefficients by \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e values successfully.\n This module is intended to offer as much generality as possible without getting in your way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Algebra",
          "name": "Algebra",
          "package": "glpk-hs",
          "source": "src/Data-Algebra.html",
          "type": "module"
        },
        "index": {
          "description": "Common library for algebraic structures Has the advantage of automatically inferring lots of useful structure especially in the writing of linear programs For example here are several ways of writing gsum var var linCombination var In addition if we have two functions and we can construct linear combinations of those functions using exactly the same syntax Moreover we can multiply functions with Double coefficients by Rational values successfully This module is intended to offer as much generality as possible without getting in your way",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "Algebra",
          "package": "glpk-hs",
          "partial": "Algebra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "Field",
          "package": "glpk-hs",
          "source": "src/Data-Algebra-Field.html#Field",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "Field",
          "package": "glpk-hs",
          "partial": "Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebraic structure of a group.  Written additively.  Required functions: \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e and (\u003ccode\u003e\u003ca\u003e^-^\u003c/a\u003e\u003c/code\u003e or (\u003ccode\u003e\u003ca\u003e^+^\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eneg\u003c/a\u003e\u003c/code\u003e)).\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "Group",
          "package": "glpk-hs",
          "source": "src/Data-Algebra-Group.html#Group",
          "type": "class"
        },
        "index": {
          "description": "The algebraic structure of group Written additively Required functions zero and or and neg",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "Group",
          "package": "glpk-hs",
          "partial": "Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA way of forming a ring from functions.  See \u003ca\u003ehttp://en.wikipedia.org/wiki/Group_ring\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "GroupRing",
          "package": "glpk-hs",
          "source": "src/Data-Algebra-Ring.html#GroupRing",
          "type": "type"
        },
        "index": {
          "description": "way of forming ring from functions See http en.wikipedia.org wiki Group ring",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "GroupRing",
          "package": "glpk-hs",
          "partial": "Group Ring",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#t:GroupRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eLinFunc\u003c/a\u003e\u003c/code\u003e v c\u003c/code\u003e is a linear combination of variables of type \u003ccode\u003ev\u003c/code\u003e with coefficients\n from \u003ccode\u003ec\u003c/code\u003e.  Formally, this is the free \u003ccode\u003ec\u003c/code\u003e-module on \u003ccode\u003ev\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "LinFunc",
          "package": "glpk-hs",
          "source": "src/Data-Algebra-Module.html#LinFunc",
          "type": "type"
        },
        "index": {
          "description": "LinFunc is linear combination of variables of type with coefficients from Formally this is the free module on",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "LinFunc",
          "package": "glpk-hs",
          "partial": "Lin Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#t:LinFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebraic structure of a module.  A vector space is a module with coefficients in a field.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "Module",
          "package": "glpk-hs",
          "source": "src/Data-Algebra-Module.html#Module",
          "type": "class"
        },
        "index": {
          "description": "The algebraic structure of module vector space is module with coefficients in field",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "Module",
          "package": "glpk-hs",
          "partial": "Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "Poly",
          "package": "glpk-hs",
          "source": "src/Data-Algebra-Group.html#Poly",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "Poly",
          "package": "glpk-hs",
          "partial": "Poly",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#t:Poly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebraic structure of a unital ring.  Assumes that the additive operation forms an abelian group,\n that the multiplication operation forms a group, and that multiplication distributes.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "Ring",
          "package": "glpk-hs",
          "source": "src/Data-Algebra-Ring.html#Ring",
          "type": "class"
        },
        "index": {
          "description": "The algebraic structure of unital ring Assumes that the additive operation forms an abelian group that the multiplication operation forms group and that multiplication distributes",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "Ring",
          "package": "glpk-hs",
          "partial": "Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#t:Ring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "VectorSpace",
          "package": "glpk-hs",
          "source": "src/Data-Algebra-Field.html#VectorSpace",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "VectorSpace",
          "package": "glpk-hs",
          "partial": "Vector Space",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#t:VectorSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "(*#)",
          "package": "glpk-hs",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Data-Algebra-Ring.html#%2A%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "(*#) *#",
          "normalized": "a-\u003ea-\u003ea",
          "package": "glpk-hs",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:-42--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ec \u003ccode\u003e\u003ca\u003e*&\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e is equivalent to \u003ccode\u003ec \u003ccode\u003e\u003ca\u003e*^\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003evar\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "(*&)",
          "package": "glpk-hs",
          "signature": "c -\u003e v -\u003e LinFunc v c",
          "source": "src/Data-Algebra-Module.html#%2A%26",
          "type": "function"
        },
        "index": {
          "description": "is equivalent to var",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "(*&) *&",
          "normalized": "a-\u003eb-\u003eLinFunc b a",
          "package": "glpk-hs",
          "signature": "c-\u003ev-\u003eLinFunc v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:-42--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "(*^)",
          "package": "glpk-hs",
          "signature": "r -\u003e m -\u003e m",
          "source": "src/Data-Algebra-Module.html#%2A%5E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "(*^) *^",
          "normalized": "a-\u003eb-\u003eb",
          "package": "glpk-hs",
          "signature": "r-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:-42--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "(/#)",
          "package": "glpk-hs",
          "signature": "f -\u003e f -\u003e f",
          "source": "src/Data-Algebra-Field.html#%2F%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "(/#) /#",
          "normalized": "a-\u003ea-\u003ea",
          "package": "glpk-hs",
          "signature": "f-\u003ef-\u003ef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:-47--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "(^+^)",
          "package": "glpk-hs",
          "signature": "g -\u003e g -\u003e g",
          "source": "src/Data-Algebra-Group.html#%5E%2B%5E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "(^+^) ^+^",
          "normalized": "a-\u003ea-\u003ea",
          "package": "glpk-hs",
          "signature": "g-\u003eg-\u003eg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:-94--43--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "(^-^)",
          "package": "glpk-hs",
          "signature": "g -\u003e g -\u003e g",
          "source": "src/Data-Algebra-Group.html#%5E-%5E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "(^-^) ^-^",
          "normalized": "a-\u003ea-\u003ea",
          "package": "glpk-hs",
          "signature": "g-\u003eg-\u003eg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:-94--45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a collection of vectors and scaling coefficients, returns this\n linear combination.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "combination",
          "package": "glpk-hs",
          "signature": "[(r, m)] -\u003e m",
          "source": "src/Data-Algebra-Module.html#combination",
          "type": "function"
        },
        "index": {
          "description": "Given collection of vectors and scaling coefficients returns this linear combination",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "combination",
          "normalized": "[(a,b)]-\u003eb",
          "package": "glpk-hs",
          "signature": "[(r,m)]-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:combination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitution into a polynomial.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "evalPoly",
          "package": "glpk-hs",
          "signature": "Poly r -\u003e m -\u003e m",
          "source": "src/Data-Algebra-Module.html#evalPoly",
          "type": "function"
        },
        "index": {
          "description": "Substitution into polynomial",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "evalPoly",
          "normalized": "Poly a-\u003eb-\u003eb",
          "package": "glpk-hs",
          "partial": "Poly",
          "signature": "Poly r-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:evalPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a summation over the elements of a group.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "gsum",
          "package": "glpk-hs",
          "signature": "[g] -\u003e g",
          "source": "src/Data-Algebra-Group.html#gsum",
          "type": "function"
        },
        "index": {
          "description": "Does summation over the elements of group",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "gsum",
          "normalized": "[a]-\u003ea",
          "package": "glpk-hs",
          "signature": "[g]-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:gsum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "inv",
          "package": "glpk-hs",
          "signature": "f -\u003e f",
          "source": "src/Data-Algebra-Field.html#inv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "inv",
          "normalized": "a-\u003ea",
          "package": "glpk-hs",
          "signature": "f-\u003ef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of basic variables and coefficients, returns the linear combination obtained\n by summing.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "linCombination",
          "package": "glpk-hs",
          "signature": "[(r, v)] -\u003e LinFunc v r",
          "source": "src/Data-Algebra-Module.html#linCombination",
          "type": "function"
        },
        "index": {
          "description": "Given set of basic variables and coefficients returns the linear combination obtained by summing",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "linCombination",
          "normalized": "[(a,b)]-\u003eLinFunc b a",
          "package": "glpk-hs",
          "partial": "Combination",
          "signature": "[(r,v)]-\u003eLinFunc v r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:linCombination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "neg",
          "package": "glpk-hs",
          "signature": "g -\u003e g",
          "source": "src/Data-Algebra-Group.html#neg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "neg",
          "normalized": "a-\u003ea",
          "package": "glpk-hs",
          "signature": "g-\u003eg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "one",
          "package": "glpk-hs",
          "signature": "r",
          "source": "src/Data-Algebra-Ring.html#one",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "one",
          "package": "glpk-hs",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a variable \u003ccode\u003ev\u003c/code\u003e, returns the function equivalent to \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "var",
          "package": "glpk-hs",
          "signature": "v -\u003e LinFunc v c",
          "source": "src/Data-Algebra-Module.html#var",
          "type": "function"
        },
        "index": {
          "description": "Given variable returns the function equivalent to",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "var",
          "normalized": "a-\u003eLinFunc a b",
          "package": "glpk-hs",
          "signature": "v-\u003eLinFunc v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the polynomial \u003ccode\u003ep(x) = x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "varPoly",
          "package": "glpk-hs",
          "signature": "Poly r",
          "source": "src/Data-Algebra-Ring.html#varPoly",
          "type": "function"
        },
        "index": {
          "description": "Returns the polynomial",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "varPoly",
          "package": "glpk-hs",
          "partial": "Poly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:varPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003evsum\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003evar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "varSum",
          "package": "glpk-hs",
          "signature": "[v] -\u003e LinFunc v c",
          "source": "src/Data-Algebra-Module.html#varSum",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to vsum map var",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "varSum",
          "normalized": "[a]-\u003eLinFunc a b",
          "package": "glpk-hs",
          "partial": "Sum",
          "signature": "[v]-\u003eLinFunc v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:varSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "zero",
          "package": "glpk-hs",
          "signature": "g",
          "source": "src/Data-Algebra-Group.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "zero",
          "package": "glpk-hs",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-Algebra.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains sufficient tools to represent linear programming problems in Haskell.  In the future, if linkings to other\n linear programming libraries are made, this will be common to them all.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.LinearProgram.Common",
          "name": "Common",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Contains sufficient tools to represent linear programming problems in Haskell In the future if linkings to other linear programming libraries are made this will be common to them all",
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Common",
          "package": "glpk-hs",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "Bounds",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-Types.html#Bounds",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Bounds",
          "package": "glpk-hs",
          "partial": "Bounds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#t:Bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a linear constraint on the variables, possibly labeled.\n The function may be bounded both above and below.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.Common",
          "name": "Constraint",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-Spec.html#Constraint",
          "type": "data"
        },
        "index": {
          "description": "Representation of linear constraint on the variables possibly labeled The function may be bounded both above and below",
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Constraint",
          "package": "glpk-hs",
          "partial": "Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "Direction",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-Types.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Direction",
          "package": "glpk-hs",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe specification of a linear programming problem with variables in \u003ccode\u003ev\u003c/code\u003e and coefficients/constants in \u003ccode\u003ec\u003c/code\u003e.\n   Note: the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e implementations do not correspond to any particular linear program specification format.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.Common",
          "name": "LP",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-Spec.html#LP",
          "type": "data"
        },
        "index": {
          "description": "The specification of linear programming problem with variables in and coefficients constants in Note the Read and Show implementations do not correspond to any particular linear program specification format",
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "LP",
          "package": "glpk-hs",
          "partial": "LP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#t:LP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn objective function for a linear program.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.Common",
          "name": "ObjectiveFunc",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-Spec.html#ObjectiveFunc",
          "type": "type"
        },
        "index": {
          "description": "An objective function for linear program",
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "ObjectiveFunc",
          "package": "glpk-hs",
          "partial": "Objective Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#t:ObjectiveFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from variables to their boundaries.  Variables not mentioned are assumed to be free.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.Common",
          "name": "VarBounds",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-Spec.html#VarBounds",
          "type": "type"
        },
        "index": {
          "description": "mapping from variables to their boundaries Variables not mentioned are assumed to be free",
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "VarBounds",
          "package": "glpk-hs",
          "partial": "Var Bounds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#t:VarBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "VarKind",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-Types.html#VarKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "VarKind",
          "package": "glpk-hs",
          "partial": "Var Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#t:VarKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from variables to their types.  Variables not mentioned are assumed to be continuous,\n\u003c/p\u003e",
          "module": "Data.LinearProgram.Common",
          "name": "VarTypes",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-Spec.html#VarTypes",
          "type": "type"
        },
        "index": {
          "description": "mapping from variables to their types Variables not mentioned are assumed to be continuous",
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "VarTypes",
          "package": "glpk-hs",
          "partial": "Var Types",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#t:VarTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "BinVar",
          "package": "glpk-hs",
          "signature": "BinVar",
          "source": "src/Data-LinearProgram-Types.html#VarKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "BinVar",
          "package": "glpk-hs",
          "partial": "Bin Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:BinVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "Bound",
          "package": "glpk-hs",
          "signature": "Bound !a !a",
          "source": "src/Data-LinearProgram-Types.html#Bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Bound",
          "package": "glpk-hs",
          "partial": "Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:Bound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "Constr",
          "package": "glpk-hs",
          "signature": "Constr (Maybe String) (LinFunc v c) (Bounds c)",
          "source": "src/Data-LinearProgram-Spec.html#Constraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Constr",
          "package": "glpk-hs",
          "partial": "Constr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:Constr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "ContVar",
          "package": "glpk-hs",
          "signature": "ContVar",
          "source": "src/Data-LinearProgram-Types.html#VarKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "ContVar",
          "package": "glpk-hs",
          "partial": "Cont Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:ContVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "Equ",
          "package": "glpk-hs",
          "signature": "Equ !a",
          "source": "src/Data-LinearProgram-Types.html#Bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Equ",
          "package": "glpk-hs",
          "partial": "Equ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:Equ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "Free",
          "package": "glpk-hs",
          "signature": "Free",
          "source": "src/Data-LinearProgram-Types.html#Bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Free",
          "package": "glpk-hs",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "IntVar",
          "package": "glpk-hs",
          "signature": "IntVar",
          "source": "src/Data-LinearProgram-Types.html#VarKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "IntVar",
          "package": "glpk-hs",
          "partial": "Int Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:IntVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "LBound",
          "package": "glpk-hs",
          "signature": "LBound !a",
          "source": "src/Data-LinearProgram-Types.html#Bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "LBound",
          "package": "glpk-hs",
          "partial": "LBound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:LBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "LP",
          "package": "glpk-hs",
          "signature": "LP",
          "source": "src/Data-LinearProgram-Spec.html#LP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "LP",
          "package": "glpk-hs",
          "partial": "LP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:LP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "Max",
          "package": "glpk-hs",
          "signature": "Max",
          "source": "src/Data-LinearProgram-Types.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Max",
          "package": "glpk-hs",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "Min",
          "package": "glpk-hs",
          "signature": "Min",
          "source": "src/Data-LinearProgram-Types.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "Min",
          "package": "glpk-hs",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "UBound",
          "package": "glpk-hs",
          "signature": "UBound !a",
          "source": "src/Data-LinearProgram-Types.html#Bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "UBound",
          "package": "glpk-hs",
          "partial": "UBound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:UBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "allVars",
          "package": "glpk-hs",
          "signature": "LP v c -\u003e Map v ()",
          "source": "src/Data-LinearProgram-Spec.html#allVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "allVars",
          "normalized": "LP a b-\u003eMap a()",
          "package": "glpk-hs",
          "partial": "Vars",
          "signature": "LP v c-\u003eMap v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:allVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "constraints",
          "package": "glpk-hs",
          "signature": "[Constraint v c]",
          "source": "src/Data-LinearProgram-Spec.html#LP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "constraints",
          "normalized": "[Constraint a b]",
          "package": "glpk-hs",
          "signature": "[Constraint v c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:constraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "direction",
          "package": "glpk-hs",
          "signature": "Direction",
          "source": "src/Data-LinearProgram-Spec.html#LP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "direction",
          "package": "glpk-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the specified function to the constants in the linear program.  This is only safe\n for a monotonic function.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.Common",
          "name": "mapVals",
          "package": "glpk-hs",
          "signature": "(c -\u003e c') -\u003e LP v c -\u003e LP v c'",
          "source": "src/Data-LinearProgram-Spec.html#mapVals",
          "type": "function"
        },
        "index": {
          "description": "Applies the specified function to the constants in the linear program This is only safe for monotonic function",
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "mapVals",
          "normalized": "(a-\u003eb)-\u003eLP c a-\u003eLP c b",
          "package": "glpk-hs",
          "partial": "Vals",
          "signature": "(c-\u003ec')-\u003eLP v c-\u003eLP v c'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:mapVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the specified function to the variables in the linear program.\n If multiple variables in the original program are mapped to the same variable in the new program,\n in general, we set those variables to all be equal, as follows.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In linear functions, including the objective function and the constraints,\n \tcoefficients will be added together.  For instance, if \u003ccode\u003ev1,v2\u003c/code\u003e are mapped to the same\n \tvariable \u003ccode\u003ev'\u003c/code\u003e, then a linear function of the form \u003ccode\u003ec1 *& v1 ^+^ c2 *& v2\u003c/code\u003e will be mapped to\n \t\u003ccode\u003e(c1 ^+^ c2) *& v'\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e In variable bounds, bounds will be combined.  An error will be thrown if the bounds\n \tare mutually contradictory.\n\u003c/li\u003e\u003cli\u003e In variable kinds, the most restrictive kind will be retained.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.LinearProgram.Common",
          "name": "mapVars",
          "package": "glpk-hs",
          "signature": "(v -\u003e v') -\u003e LP v c -\u003e LP v' c",
          "source": "src/Data-LinearProgram-Spec.html#mapVars",
          "type": "function"
        },
        "index": {
          "description": "Applies the specified function to the variables in the linear program If multiple variables in the original program are mapped to the same variable in the new program in general we set those variables to all be equal as follows In linear functions including the objective function and the constraints coefficients will be added together For instance if v1 v2 are mapped to the same variable then linear function of the form c1 v1 c2 v2 will be mapped to c1 c2 In variable bounds bounds will be combined An error will be thrown if the bounds are mutually contradictory In variable kinds the most restrictive kind will be retained",
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "mapVars",
          "normalized": "(a-\u003eb)-\u003eLP a c-\u003eLP b c",
          "package": "glpk-hs",
          "partial": "Vars",
          "signature": "(v-\u003ev')-\u003eLP v c-\u003eLP v' c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:mapVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "objective",
          "package": "glpk-hs",
          "signature": "ObjectiveFunc v c",
          "source": "src/Data-LinearProgram-Spec.html#LP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "objective",
          "package": "glpk-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:objective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "varBounds",
          "package": "glpk-hs",
          "signature": "VarBounds v c",
          "source": "src/Data-LinearProgram-Spec.html#LP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "varBounds",
          "package": "glpk-hs",
          "partial": "Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:varBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.Common",
          "name": "varTypes",
          "package": "glpk-hs",
          "signature": "VarTypes v",
          "source": "src/Data-LinearProgram-Spec.html#LP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram Common",
          "module": "Data.LinearProgram.Common",
          "name": "varTypes",
          "package": "glpk-hs",
          "partial": "Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-Common.html#v:varTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBindings to the file I/O functions from GLPK, on the CPLEX LP file format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.LinearProgram.GLPK.IO",
          "name": "IO",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Bindings to the file functions from GLPK on the CPLEX LP file format",
          "hierarchy": "Data LinearProgram GLPK IO",
          "module": "Data.LinearProgram.GLPK.IO",
          "name": "IO",
          "package": "glpk-hs",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a linear program from a file in CPLEX LP format.  Warning: this will not necessarily succeed\n on all files generated by \u003ccode\u003e\u003ca\u003ewriteLP\u003c/a\u003e\u003c/code\u003e, as variable names may be changed.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.GLPK.IO",
          "name": "readLP",
          "package": "glpk-hs",
          "signature": "FilePath -\u003e IO (LP v c)",
          "source": "src/Data-LinearProgram-GLPK-IO.html#readLP",
          "type": "function"
        },
        "index": {
          "description": "Read linear program from file in CPLEX LP format Warning this will not necessarily succeed on all files generated by writeLP as variable names may be changed",
          "hierarchy": "Data LinearProgram GLPK IO",
          "module": "Data.LinearProgram.GLPK.IO",
          "name": "readLP",
          "normalized": "FilePath-\u003eIO(LP a b)",
          "package": "glpk-hs",
          "partial": "LP",
          "signature": "FilePath-\u003eIO(LP v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-IO.html#v:readLP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a linear program from a file in CPLEX LP format.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.GLPK.IO",
          "name": "readLP'",
          "package": "glpk-hs",
          "signature": "FilePath -\u003e IO (LP String Double)",
          "source": "src/Data-LinearProgram-GLPK-IO.html#readLP%27",
          "type": "function"
        },
        "index": {
          "description": "Read linear program from file in CPLEX LP format",
          "hierarchy": "Data LinearProgram GLPK IO",
          "module": "Data.LinearProgram.GLPK.IO",
          "name": "readLP'",
          "normalized": "FilePath-\u003eIO(LP String Double)",
          "package": "glpk-hs",
          "partial": "LP'",
          "signature": "FilePath-\u003eIO(LP String Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-IO.html#v:readLP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a linear program to a file in CPLEX LP format.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.GLPK.IO",
          "name": "writeLP",
          "package": "glpk-hs",
          "signature": "FilePath -\u003e LP v c -\u003e IO ()",
          "source": "src/Data-LinearProgram-GLPK-IO.html#writeLP",
          "type": "function"
        },
        "index": {
          "description": "Write linear program to file in CPLEX LP format",
          "hierarchy": "Data LinearProgram GLPK IO",
          "module": "Data.LinearProgram.GLPK.IO",
          "name": "writeLP",
          "normalized": "FilePath-\u003eLP a b-\u003eIO()",
          "package": "glpk-hs",
          "partial": "LP",
          "signature": "FilePath-\u003eLP v c-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-IO.html#v:writeLP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface between the Haskell representation of a linear programming problem, a value of type \u003ccode\u003e\u003ca\u003eLP\u003c/a\u003e\u003c/code\u003e, and\n the GLPK solver.  The options available to the solver correspond naturally with GLPK's available options,\n so to find the meaning of any particular option, consult the GLPK documentation.\n\u003c/p\u003e\u003cp\u003eThe option of which solver to use -- the general LP solver, which solves a problem over the reals, or the \n MIP solver, which allows variables to be restricted to integers -- can be made by choosing the appropriate\n constructor for \u003ccode\u003e\u003ca\u003eGLPOpts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe marshalling from Haskell to C is specialized for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003es, so using those types in your\n linear program is recommended.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Solver",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-Solver.html",
          "type": "module"
        },
        "index": {
          "description": "Interface between the Haskell representation of linear programming problem value of type LP and the GLPK solver The options available to the solver correspond naturally with GLPK available options so to find the meaning of any particular option consult the GLPK documentation The option of which solver to use the general LP solver which solves problem over the reals or the MIP solver which allows variables to be restricted to integers can be made by choosing the appropriate constructor for GLPOpts The marshalling from Haskell to is specialized for Int and Double so using those types in your linear program is recommended",
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Solver",
          "package": "glpk-hs",
          "partial": "Solver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "BacktrackTechnique",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BacktrackTechnique",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "BacktrackTechnique",
          "package": "glpk-hs",
          "partial": "Backtrack Technique",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#t:BacktrackTechnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "BranchingTechnique",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BranchingTechnique",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "BranchingTechnique",
          "package": "glpk-hs",
          "partial": "Branching Technique",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#t:BranchingTechnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Cuts",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-Types.html#Cuts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Cuts",
          "package": "glpk-hs",
          "partial": "Cuts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#t:Cuts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions available for customizing GLPK operations.  This also determines\n which kind of solving is performed -- relaxed LP, or MIP.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "GLPOpts",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "data"
        },
        "index": {
          "description": "Options available for customizing GLPK operations This also determines which kind of solving is performed relaxed LP or MIP",
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "GLPOpts",
          "package": "glpk-hs",
          "partial": "GLPOpts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#t:GLPOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgLev",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-Types.html#MsgLev",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgLev",
          "package": "glpk-hs",
          "partial": "Msg Lev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#t:MsgLev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Preprocessing",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-Types.html#Preprocessing",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Preprocessing",
          "package": "glpk-hs",
          "partial": "Preprocessing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#t:Preprocessing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ReturnCode",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ReturnCode",
          "package": "glpk-hs",
          "partial": "Return Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#t:ReturnCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "RowValue",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#RowValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "RowValue",
          "package": "glpk-hs",
          "partial": "Row Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#t:RowValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "AllPre",
          "package": "glpk-hs",
          "signature": "AllPre",
          "source": "src/Data-LinearProgram-GLPK-Types.html#Preprocessing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "AllPre",
          "package": "glpk-hs",
          "partial": "All Pre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:AllPre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "BreadthFirst",
          "package": "glpk-hs",
          "signature": "BreadthFirst",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BacktrackTechnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "BreadthFirst",
          "package": "glpk-hs",
          "partial": "Breadth First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:BreadthFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Clq",
          "package": "glpk-hs",
          "signature": "Clq",
          "source": "src/Data-LinearProgram-GLPK-Types.html#Cuts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Clq",
          "package": "glpk-hs",
          "partial": "Clq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:Clq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Cov",
          "package": "glpk-hs",
          "signature": "Cov",
          "source": "src/Data-LinearProgram-GLPK-Types.html#Cuts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Cov",
          "package": "glpk-hs",
          "partial": "Cov",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:Cov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "DepthFirst",
          "package": "glpk-hs",
          "signature": "DepthFirst",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BacktrackTechnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "DepthFirst",
          "package": "glpk-hs",
          "partial": "Depth First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:DepthFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "DrTom",
          "package": "glpk-hs",
          "signature": "DrTom",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BranchingTechnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "DrTom",
          "package": "glpk-hs",
          "partial": "Dr Tom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:DrTom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "FirstFrac",
          "package": "glpk-hs",
          "signature": "FirstFrac",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BranchingTechnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "FirstFrac",
          "package": "glpk-hs",
          "partial": "First Frac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:FirstFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "GMI",
          "package": "glpk-hs",
          "signature": "GMI",
          "source": "src/Data-LinearProgram-GLPK-Types.html#Cuts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "GMI",
          "package": "glpk-hs",
          "partial": "GMI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:GMI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "HybridP",
          "package": "glpk-hs",
          "signature": "HybridP",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BranchingTechnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "HybridP",
          "package": "glpk-hs",
          "partial": "Hybrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:HybridP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "IllConditionedMatrix",
          "package": "glpk-hs",
          "signature": "IllConditionedMatrix",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "IllConditionedMatrix",
          "package": "glpk-hs",
          "partial": "Ill Conditioned Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:IllConditionedMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "InvalidBasis",
          "package": "glpk-hs",
          "signature": "InvalidBasis",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "InvalidBasis",
          "package": "glpk-hs",
          "partial": "Invalid Basis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:InvalidBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "InvalidBounds",
          "package": "glpk-hs",
          "signature": "InvalidBounds",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "InvalidBounds",
          "package": "glpk-hs",
          "partial": "Invalid Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:InvalidBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "InvalidData",
          "package": "glpk-hs",
          "signature": "InvalidData",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "InvalidData",
          "package": "glpk-hs",
          "partial": "Invalid Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:InvalidData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "IterLimReached",
          "package": "glpk-hs",
          "signature": "IterLimReached",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "IterLimReached",
          "package": "glpk-hs",
          "partial": "Iter Lim Reached",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:IterLimReached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "LastFrac",
          "package": "glpk-hs",
          "signature": "LastFrac",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BranchingTechnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "LastFrac",
          "package": "glpk-hs",
          "partial": "Last Frac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:LastFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "LocBound",
          "package": "glpk-hs",
          "signature": "LocBound",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BacktrackTechnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "LocBound",
          "package": "glpk-hs",
          "partial": "Loc Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:LocBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MIR",
          "package": "glpk-hs",
          "signature": "MIR",
          "source": "src/Data-LinearProgram-GLPK-Types.html#Cuts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MIR",
          "package": "glpk-hs",
          "partial": "MIR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:MIR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MipGapTolReached",
          "package": "glpk-hs",
          "signature": "MipGapTolReached",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MipGapTolReached",
          "package": "glpk-hs",
          "partial": "Mip Gap Tol Reached",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:MipGapTolReached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MipOpts",
          "package": "glpk-hs",
          "signature": "MipOpts",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MipOpts",
          "package": "glpk-hs",
          "partial": "Mip Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:MipOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MostFrac",
          "package": "glpk-hs",
          "signature": "MostFrac",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BranchingTechnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MostFrac",
          "package": "glpk-hs",
          "partial": "Most Frac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:MostFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgAll",
          "package": "glpk-hs",
          "signature": "MsgAll",
          "source": "src/Data-LinearProgram-GLPK-Types.html#MsgLev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgAll",
          "package": "glpk-hs",
          "partial": "Msg All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:MsgAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgErr",
          "package": "glpk-hs",
          "signature": "MsgErr",
          "source": "src/Data-LinearProgram-GLPK-Types.html#MsgLev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgErr",
          "package": "glpk-hs",
          "partial": "Msg Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:MsgErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgOff",
          "package": "glpk-hs",
          "signature": "MsgOff",
          "source": "src/Data-LinearProgram-GLPK-Types.html#MsgLev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgOff",
          "package": "glpk-hs",
          "partial": "Msg Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:MsgOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgOn",
          "package": "glpk-hs",
          "signature": "MsgOn",
          "source": "src/Data-LinearProgram-GLPK-Types.html#MsgLev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "MsgOn",
          "package": "glpk-hs",
          "partial": "Msg On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:MsgOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoConvergence",
          "package": "glpk-hs",
          "signature": "NoConvergence",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoConvergence",
          "package": "glpk-hs",
          "partial": "No Convergence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:NoConvergence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoDualFeasible",
          "package": "glpk-hs",
          "signature": "NoDualFeasible",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoDualFeasible",
          "package": "glpk-hs",
          "partial": "No Dual Feasible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:NoDualFeasible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoPre",
          "package": "glpk-hs",
          "signature": "NoPre",
          "source": "src/Data-LinearProgram-GLPK-Types.html#Preprocessing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoPre",
          "package": "glpk-hs",
          "partial": "No Pre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:NoPre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoPrimDualFeasSolution",
          "package": "glpk-hs",
          "signature": "NoPrimDualFeasSolution",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoPrimDualFeasSolution",
          "package": "glpk-hs",
          "partial": "No Prim Dual Feas Solution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:NoPrimDualFeasSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoPrimalFeasible",
          "package": "glpk-hs",
          "signature": "NoPrimalFeasible",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NoPrimalFeasible",
          "package": "glpk-hs",
          "partial": "No Primal Feasible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:NoPrimalFeasible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NumericalInstability",
          "package": "glpk-hs",
          "signature": "NumericalInstability",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "NumericalInstability",
          "package": "glpk-hs",
          "partial": "Numerical Instability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:NumericalInstability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ObjLowerLimReached",
          "package": "glpk-hs",
          "signature": "ObjLowerLimReached",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ObjLowerLimReached",
          "package": "glpk-hs",
          "partial": "Obj Lower Lim Reached",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:ObjLowerLimReached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ObjUpperLimReached",
          "package": "glpk-hs",
          "signature": "ObjUpperLimReached",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ObjUpperLimReached",
          "package": "glpk-hs",
          "partial": "Obj Upper Lim Reached",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:ObjUpperLimReached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ProjHeur",
          "package": "glpk-hs",
          "signature": "ProjHeur",
          "source": "src/Data-LinearProgram-GLPK-Types.html#BacktrackTechnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ProjHeur",
          "package": "glpk-hs",
          "partial": "Proj Heur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:ProjHeur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ResultOutOfRange",
          "package": "glpk-hs",
          "signature": "ResultOutOfRange",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ResultOutOfRange",
          "package": "glpk-hs",
          "partial": "Result Out Of Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:ResultOutOfRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "RootLPOptMissing",
          "package": "glpk-hs",
          "signature": "RootLPOptMissing",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "RootLPOptMissing",
          "package": "glpk-hs",
          "partial": "Root LPOpt Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:RootLPOptMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "RootPre",
          "package": "glpk-hs",
          "signature": "RootPre",
          "source": "src/Data-LinearProgram-GLPK-Types.html#Preprocessing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "RootPre",
          "package": "glpk-hs",
          "partial": "Root Pre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:RootPre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "RowVal",
          "package": "glpk-hs",
          "signature": "RowVal",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#RowValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "RowVal",
          "package": "glpk-hs",
          "partial": "Row Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:RowVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "SearchTerminated",
          "package": "glpk-hs",
          "signature": "SearchTerminated",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "SearchTerminated",
          "package": "glpk-hs",
          "partial": "Search Terminated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:SearchTerminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "SimplexOpts",
          "package": "glpk-hs",
          "signature": "SimplexOpts",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "SimplexOpts",
          "package": "glpk-hs",
          "partial": "Simplex Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:SimplexOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "SingularMatrix",
          "package": "glpk-hs",
          "signature": "SingularMatrix",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "SingularMatrix",
          "package": "glpk-hs",
          "partial": "Singular Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:SingularMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "SolverFailed",
          "package": "glpk-hs",
          "signature": "SolverFailed",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "SolverFailed",
          "package": "glpk-hs",
          "partial": "Solver Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:SolverFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Success",
          "package": "glpk-hs",
          "signature": "Success",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "Success",
          "package": "glpk-hs",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "TimeLimReached",
          "package": "glpk-hs",
          "signature": "TimeLimReached",
          "source": "src/Data-LinearProgram-GLPK-Types.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "TimeLimReached",
          "package": "glpk-hs",
          "partial": "Time Lim Reached",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:TimeLimReached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "brTech",
          "package": "glpk-hs",
          "signature": "BranchingTechnique",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "brTech",
          "package": "glpk-hs",
          "partial": "Tech",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:brTech"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "btTech",
          "package": "glpk-hs",
          "signature": "BacktrackTechnique",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "btTech",
          "package": "glpk-hs",
          "partial": "Tech",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:btTech"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "cuts",
          "package": "glpk-hs",
          "signature": "[Cuts]",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "cuts",
          "normalized": "[Cuts]",
          "package": "glpk-hs",
          "signature": "[Cuts]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:cuts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "fpHeur",
          "package": "glpk-hs",
          "signature": "Bool",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "fpHeur",
          "package": "glpk-hs",
          "partial": "Heur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:fpHeur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves the linear or mixed integer programming problem.  Returns\n the value of the objective function, the values of the variables,\n and the values of any labeled rows.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "glpSolveAll",
          "package": "glpk-hs",
          "signature": "GLPOpts -\u003e LP v c -\u003e IO (ReturnCode, Maybe (Double, Map v Double, [RowValue v c]))",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#glpSolveAll",
          "type": "function"
        },
        "index": {
          "description": "Solves the linear or mixed integer programming problem Returns the value of the objective function the values of the variables and the values of any labeled rows",
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "glpSolveAll",
          "normalized": "GLPOpts-\u003eLP a b-\u003eIO(ReturnCode,Maybe(Double,Map a Double,[RowValue a b]))",
          "package": "glpk-hs",
          "partial": "Solve All",
          "signature": "GLPOpts-\u003eLP v c-\u003eIO(ReturnCode,Maybe(Double,Map v Double,[RowValue v c]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:glpSolveAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves the linear or mixed integer programming problem.  Returns\n the value of the objective function, and the values of the variables.\n\u003c/p\u003e",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "glpSolveVars",
          "package": "glpk-hs",
          "signature": "GLPOpts -\u003e LP v c -\u003e IO (ReturnCode, Maybe (Double, Map v Double))",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#glpSolveVars",
          "type": "function"
        },
        "index": {
          "description": "Solves the linear or mixed integer programming problem Returns the value of the objective function and the values of the variables",
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "glpSolveVars",
          "normalized": "GLPOpts-\u003eLP a b-\u003eIO(ReturnCode,Maybe(Double,Map a Double))",
          "package": "glpk-hs",
          "partial": "Solve Vars",
          "signature": "GLPOpts-\u003eLP v c-\u003eIO(ReturnCode,Maybe(Double,Map v Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:glpSolveVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "mipDefaults",
          "package": "glpk-hs",
          "signature": "GLPOpts",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#mipDefaults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "mipDefaults",
          "package": "glpk-hs",
          "partial": "Defaults",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:mipDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "mipGap",
          "package": "glpk-hs",
          "signature": "Double",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "mipGap",
          "package": "glpk-hs",
          "partial": "Gap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:mipGap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "msgLev",
          "package": "glpk-hs",
          "signature": "MsgLev",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "msgLev",
          "package": "glpk-hs",
          "partial": "Lev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:msgLev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ppTech",
          "package": "glpk-hs",
          "signature": "Preprocessing",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "ppTech",
          "package": "glpk-hs",
          "partial": "Tech",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:ppTech"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "presolve",
          "package": "glpk-hs",
          "signature": "Bool",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "presolve",
          "package": "glpk-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:presolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "row",
          "package": "glpk-hs",
          "signature": "(Constraint v c)",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#RowValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "row",
          "package": "glpk-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "rowVal",
          "package": "glpk-hs",
          "signature": "Double",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#RowValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "rowVal",
          "package": "glpk-hs",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:rowVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "simplexDefaults",
          "package": "glpk-hs",
          "signature": "GLPOpts",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#simplexDefaults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "simplexDefaults",
          "package": "glpk-hs",
          "partial": "Defaults",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:simplexDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "tmLim",
          "package": "glpk-hs",
          "signature": "Int",
          "source": "src/Data-LinearProgram-GLPK-Solver.html#GLPOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK Solver",
          "module": "Data.LinearProgram.GLPK.Solver",
          "name": "tmLim",
          "package": "glpk-hs",
          "partial": "Lim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK-Solver.html#v:tmLim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.GLPK",
          "name": "GLPK",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-GLPK.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data LinearProgram GLPK",
          "module": "Data.LinearProgram.GLPK",
          "name": "GLPK",
          "package": "glpk-hs",
          "partial": "GLPK",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-GLPK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.LinExpr",
          "name": "LinExpr",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-LinExpr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data LinearProgram LinExpr",
          "module": "Data.LinearProgram.LinExpr",
          "name": "LinExpr",
          "package": "glpk-hs",
          "partial": "Lin Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-LinExpr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.LinExpr",
          "name": "LinExpr",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram-LinExpr.html#LinExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LinearProgram LinExpr",
          "module": "Data.LinearProgram.LinExpr",
          "name": "LinExpr",
          "package": "glpk-hs",
          "partial": "Lin Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-LinExpr.html#t:LinExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.LinExpr",
          "name": "LinExpr",
          "package": "glpk-hs",
          "signature": "LinExpr (LinFunc v c) c",
          "source": "src/Data-LinearProgram-LinExpr.html#LinExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram LinExpr",
          "module": "Data.LinearProgram.LinExpr",
          "name": "LinExpr",
          "package": "glpk-hs",
          "partial": "Lin Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-LinExpr.html#v:LinExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.LinExpr",
          "name": "coeffTerm",
          "package": "glpk-hs",
          "signature": "LinExpr v c -\u003e LinFunc v c",
          "source": "src/Data-LinearProgram-LinExpr.html#coeffTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram LinExpr",
          "module": "Data.LinearProgram.LinExpr",
          "name": "coeffTerm",
          "normalized": "LinExpr a b-\u003eLinFunc a b",
          "package": "glpk-hs",
          "partial": "Term",
          "signature": "LinExpr v c-\u003eLinFunc v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-LinExpr.html#v:coeffTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.LinExpr",
          "name": "constTerm",
          "package": "glpk-hs",
          "signature": "LinExpr v c -\u003e c",
          "source": "src/Data-LinearProgram-LinExpr.html#constTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram LinExpr",
          "module": "Data.LinearProgram.LinExpr",
          "name": "constTerm",
          "normalized": "LinExpr a b-\u003eb",
          "package": "glpk-hs",
          "partial": "Term",
          "signature": "LinExpr v c-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-LinExpr.html#v:constTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.LinExpr",
          "name": "funcToExpr",
          "package": "glpk-hs",
          "signature": "LinFunc v c -\u003e LinExpr v c",
          "source": "src/Data-LinearProgram-LinExpr.html#funcToExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram LinExpr",
          "module": "Data.LinearProgram.LinExpr",
          "name": "funcToExpr",
          "normalized": "LinFunc a b-\u003eLinExpr a b",
          "package": "glpk-hs",
          "partial": "To Expr",
          "signature": "LinFunc v c-\u003eLinExpr v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-LinExpr.html#v:funcToExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.LinExpr",
          "name": "simplifyExpr",
          "package": "glpk-hs",
          "signature": "LinExpr v c -\u003e Map v (LinExpr v c) -\u003e LinExpr v c",
          "source": "src/Data-LinearProgram-LinExpr.html#simplifyExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram LinExpr",
          "module": "Data.LinearProgram.LinExpr",
          "name": "simplifyExpr",
          "normalized": "LinExpr a b-\u003eMap a(LinExpr a b)-\u003eLinExpr a b",
          "package": "glpk-hs",
          "partial": "Expr",
          "signature": "LinExpr v c-\u003eMap v(LinExpr v c)-\u003eLinExpr v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-LinExpr.html#v:simplifyExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.LinExpr",
          "name": "solve",
          "package": "glpk-hs",
          "signature": "[(LinFunc v c, c)] -\u003e Maybe (Map v (LinExpr v c))",
          "source": "src/Data-LinearProgram-LinExpr.html#solve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram LinExpr",
          "module": "Data.LinearProgram.LinExpr",
          "name": "solve",
          "normalized": "[(LinFunc a b,b)]-\u003eMaybe(Map a(LinExpr a b))",
          "package": "glpk-hs",
          "signature": "[(LinFunc v c,c)]-\u003eMaybe(Map v(LinExpr v c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-LinExpr.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram.LinExpr",
          "name": "substituteExpr",
          "package": "glpk-hs",
          "signature": "v -\u003e LinExpr v c -\u003e LinExpr v c -\u003e LinExpr v c",
          "source": "src/Data-LinearProgram-LinExpr.html#substituteExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearProgram LinExpr",
          "module": "Data.LinearProgram.LinExpr",
          "name": "substituteExpr",
          "normalized": "a-\u003eLinExpr a b-\u003eLinExpr a b-\u003eLinExpr a b",
          "package": "glpk-hs",
          "partial": "Expr",
          "signature": "v-\u003eLinExpr v c-\u003eLinExpr v c-\u003eLinExpr v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram-LinExpr.html#v:substituteExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearProgram",
          "name": "LinearProgram",
          "package": "glpk-hs",
          "source": "src/Data-LinearProgram.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data LinearProgram",
          "module": "Data.LinearProgram",
          "name": "LinearProgram",
          "package": "glpk-hs",
          "partial": "Linear Program",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glpk-hs/docs/Data-LinearProgram.html#"
      }
    }
  ]
]