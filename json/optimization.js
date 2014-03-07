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
        "word": "optimization"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.Penalty",
          "name": "Penalty",
          "package": "optimization",
          "source": "src/Optimization-Constrained-Penalty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "Penalty",
          "package": "optimization",
          "partial": "Penalty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.Penalty",
          "name": "FU",
          "package": "optimization",
          "source": "src/Optimization-Constrained-Penalty.html#FU",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "FU",
          "package": "optimization",
          "partial": "FU",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#t:FU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eOpt d f gs hs\u003c/code\u003e is a Lagrangian optimization problem with objective \u003ccode\u003ef\u003c/code\u003e\n equality (\u003ccode\u003eg(x) == 0\u003c/code\u003e) constraints \u003ccode\u003egs\u003c/code\u003e and less-than (\u003ccode\u003eh(x) \u003c 0\u003c/code\u003e)\n constraints \u003ccode\u003ehs\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Optimization.Constrained.Penalty",
          "name": "Opt",
          "package": "optimization",
          "source": "src/Optimization-Constrained-Penalty.html#Opt",
          "type": "data"
        },
        "index": {
          "description": "Opt gs hs is Lagrangian optimization problem with objective equality constraints gs and less-than constraints hs",
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "Opt",
          "package": "optimization",
          "partial": "Opt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#t:Opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.Penalty",
          "name": "FU",
          "package": "optimization",
          "signature": "FU",
          "source": "src/Optimization-Constrained-Penalty.html#FU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "FU",
          "package": "optimization",
          "partial": "FU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#v:FU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.Penalty",
          "name": "constrainEQ",
          "package": "optimization",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e Opt f a -\u003e Opt f a",
          "source": "src/Optimization-Constrained-Penalty.html#constrainEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "constrainEQ",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003eOpt a c-\u003eOpt a c",
          "package": "optimization",
          "partial": "EQ",
          "signature": "f(AD s a)-\u003eAD s a)-\u003eOpt f a-\u003eOpt f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#v:constrainEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.Penalty",
          "name": "constrainGT",
          "package": "optimization",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e Opt f a -\u003e Opt f a",
          "source": "src/Optimization-Constrained-Penalty.html#constrainGT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "constrainGT",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003eOpt a c-\u003eOpt a c",
          "package": "optimization",
          "partial": "GT",
          "signature": "f(AD s a)-\u003eAD s a)-\u003eOpt f a-\u003eOpt f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#v:constrainGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.Penalty",
          "name": "constrainLT",
          "package": "optimization",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e Opt f a -\u003e Opt f a",
          "source": "src/Optimization-Constrained-Penalty.html#constrainLT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "constrainLT",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003eOpt a c-\u003eOpt a c",
          "package": "optimization",
          "partial": "LT",
          "signature": "f(AD s a)-\u003eAD s a)-\u003eOpt f a-\u003eOpt f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#v:constrainLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Lagrangian for the given constrained optimization\n\u003c/p\u003e",
          "module": "Optimization.Constrained.Penalty",
          "name": "lagrangian",
          "package": "optimization",
          "signature": "f (AD s a) -\u003e V (AD s a) -\u003e AD s a",
          "source": "src/Optimization-Constrained-Penalty.html#lagrangian",
          "type": "function"
        },
        "index": {
          "description": "The Lagrangian for the given constrained optimization",
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "lagrangian",
          "normalized": "a(AD b c)-\u003eV(AD b c)-\u003eAD b c",
          "package": "optimization",
          "signature": "f(AD s a)-\u003eV(AD s a)-\u003eAD s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#v:lagrangian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximize the given constrained optimization problem\n\u003c/p\u003e",
          "module": "Optimization.Constrained.Penalty",
          "name": "maximize",
          "package": "optimization",
          "signature": "(FU f a -\u003e f a -\u003e [f a])-\u003e Opt f a-\u003e a-\u003e f a-\u003e g a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Maximize the given constrained optimization problem",
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "maximize",
          "normalized": "(FU a b-\u003ea b-\u003e[a b])-\u003eOpt a b-\u003eb-\u003ea b-\u003ec b-\u003e[a b]",
          "package": "optimization",
          "signature": "(FU f a-\u003ef a-\u003e[f a])-\u003eOpt f a-\u003ea-\u003ef a-\u003eg a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#v:maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimize the given constrained optimization problem\n This is a basic penalty method approach\n\u003c/p\u003e",
          "module": "Optimization.Constrained.Penalty",
          "name": "minimize",
          "package": "optimization",
          "signature": "(FU f a -\u003e f a -\u003e [f a])-\u003e Opt f a-\u003e a-\u003e f a-\u003e g a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Minimize the given constrained optimization problem This is basic penalty method approach",
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "minimize",
          "normalized": "(FU a b-\u003ea b-\u003e[a b])-\u003eOpt a b-\u003eb-\u003ea b-\u003ec b-\u003e[a b]",
          "package": "optimization",
          "signature": "(FU f a-\u003ef a-\u003e[f a])-\u003eOpt f a-\u003ea-\u003ef a-\u003eg a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.Penalty",
          "name": "optimize",
          "package": "optimization",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e Opt f a",
          "source": "src/Optimization-Constrained-Penalty.html#optimize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "optimize",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003eOpt a c",
          "package": "optimization",
          "signature": "f(AD s a)-\u003eAD s a)-\u003eOpt f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.Penalty",
          "name": "runFU",
          "package": "optimization",
          "signature": "f (AD s a) -\u003e AD s a",
          "source": "src/Optimization-Constrained-Penalty.html#FU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Optimization Constrained Penalty",
          "module": "Optimization.Constrained.Penalty",
          "name": "runFU",
          "normalized": "a(AD b c)-\u003eAD b c",
          "package": "optimization",
          "partial": "FU",
          "signature": "f(AD s a)-\u003eAD s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-Penalty.html#v:runFU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "ProjectedSubgradient",
          "package": "optimization",
          "source": "src/Optimization-Constrained-ProjectedSubgradient.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "ProjectedSubgradient",
          "package": "optimization",
          "partial": "Projected Subgradient",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA linear constraint. For instance, \u003ccode\u003eConstr LT 2 (V2 1 3)\u003c/code\u003e defines\n the constraint \u003ccode\u003ex_1 + 3 x_2 \u003c= 2\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "Constraint",
          "package": "optimization",
          "source": "src/Optimization-Constrained-ProjectedSubgradient.html#Constraint",
          "type": "data"
        },
        "index": {
          "description": "linear constraint For instance Constr LT V2 defines the constraint",
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "Constraint",
          "package": "optimization",
          "partial": "Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA step size schedule\n A list of functions (one per step) which, given a function's\n gradient and value, will provide a size for the next step\n\u003c/p\u003e",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "StepSched",
          "package": "optimization",
          "source": "src/Optimization-Constrained-ProjectedSubgradient.html#StepSched",
          "type": "type"
        },
        "index": {
          "description": "step size schedule list of functions one per step which given function gradient and value will provide size for the next step",
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "StepSched",
          "package": "optimization",
          "partial": "Step Sched",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#t:StepSched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "Constr",
          "package": "optimization",
          "signature": "Constr Ordering a (f a)",
          "source": "src/Optimization-Constrained-ProjectedSubgradient.html#Constraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "Constr",
          "package": "optimization",
          "partial": "Constr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#v:Constr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant step size schedule\n\u003c/p\u003e",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "constStepSched",
          "package": "optimization",
          "signature": "a-\u003e StepSched f a",
          "type": "function"
        },
        "index": {
          "description": "Constant step size schedule",
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "constStepSched",
          "normalized": "a-\u003eStepSched b a",
          "package": "optimization",
          "partial": "Step Sched",
          "signature": "a-\u003eStepSched f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#v:constStepSched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA square-summable step size schedule\n\u003c/p\u003e",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "invKStepSched",
          "package": "optimization",
          "signature": "a-\u003e StepSched f a",
          "type": "function"
        },
        "index": {
          "description": "square-summable step size schedule",
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "invKStepSched",
          "normalized": "a-\u003eStepSched b a",
          "package": "optimization",
          "partial": "KStep Sched",
          "signature": "a-\u003eStepSched f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#v:invKStepSched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elinearProjSubgrad stepSizes proj a b x0\u003c/code\u003e minimizes the objective \u003ccode\u003eA\n x - b\u003c/code\u003e potentially projecting iterates into a feasible space with\n \u003ccode\u003eproj\u003c/code\u003e with the given step-size schedule\n\u003c/p\u003e",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "linearProjSubgrad",
          "package": "optimization",
          "signature": "StepSched f a-\u003e (f a -\u003e f a)-\u003e f a-\u003e a-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "linearProjSubgrad stepSizes proj x0 minimizes the objective potentially projecting iterates into feasible space with proj with the given step-size schedule",
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "linearProjSubgrad",
          "normalized": "StepSched a b-\u003e(a b-\u003ea b)-\u003ea b-\u003eb-\u003ea b-\u003e[a b]",
          "package": "optimization",
          "partial": "Proj Subgrad",
          "signature": "StepSched f a-\u003e(f a-\u003ef a)-\u003ef a-\u003ea-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#v:linearProjSubgrad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProject onto a the space of feasible solutions defined by a set\n of linear constraints\n\u003c/p\u003e",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "linearProjection",
          "package": "optimization",
          "signature": "[Constraint f a]-\u003e f a-\u003e f a",
          "type": "function"
        },
        "index": {
          "description": "Project onto the space of feasible solutions defined by set of linear constraints",
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "linearProjection",
          "normalized": "[Constraint a b]-\u003ea b-\u003ea b",
          "package": "optimization",
          "partial": "Projection",
          "signature": "[Constraint f a]-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#v:linearProjection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe optimal step size schedule when the optimal value of the\n objective is known\n\u003c/p\u003e",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "optimalStepSched",
          "package": "optimization",
          "signature": "a-\u003e StepSched f a",
          "type": "function"
        },
        "index": {
          "description": "The optimal step size schedule when the optimal value of the objective is known",
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "optimalStepSched",
          "normalized": "a-\u003eStepSched b a",
          "package": "optimization",
          "partial": "Step Sched",
          "signature": "a-\u003eStepSched f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#v:optimalStepSched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eprojSubgrad stepSizes proj a b x0\u003c/code\u003e minimizes the objective \u003ccode\u003eA\n x - b\u003c/code\u003e potentially projecting iterates into a feasible space with\n \u003ccode\u003eproj\u003c/code\u003e with the given step-size schedule\n\u003c/p\u003e",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "projSubgrad",
          "package": "optimization",
          "signature": "StepSched f a-\u003e (f a -\u003e f a)-\u003e (f a -\u003e f a)-\u003e (f a -\u003e a)-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "projSubgrad stepSizes proj x0 minimizes the objective potentially projecting iterates into feasible space with proj with the given step-size schedule",
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "projSubgrad",
          "normalized": "StepSched a b-\u003e(a b-\u003ea b)-\u003e(a b-\u003ea b)-\u003e(a b-\u003eb)-\u003ea b-\u003e[a b]",
          "package": "optimization",
          "partial": "Subgrad",
          "signature": "StepSched f a-\u003e(f a-\u003ef a)-\u003e(f a-\u003ef a)-\u003e(f a-\u003ea)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#v:projSubgrad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-summable step size schedule\n\u003c/p\u003e",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "sqrtKStepSched",
          "package": "optimization",
          "signature": "a-\u003e StepSched f a",
          "type": "function"
        },
        "index": {
          "description": "non-summable step size schedule",
          "hierarchy": "Optimization Constrained ProjectedSubgradient",
          "module": "Optimization.Constrained.ProjectedSubgradient",
          "name": "sqrtKStepSched",
          "normalized": "a-\u003eStepSched b a",
          "package": "optimization",
          "partial": "KStep Sched",
          "signature": "a-\u003eStepSched f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-Constrained-ProjectedSubgradient.html#v:sqrtKStepSched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.LineSearch.BFGS",
          "name": "BFGS",
          "package": "optimization",
          "source": "src/Optimization-LineSearch-BFGS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization LineSearch BFGS",
          "module": "Optimization.LineSearch.BFGS",
          "name": "BFGS",
          "package": "optimization",
          "partial": "BFGS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-BFGS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroyden&#8211;Fletcher&#8211;Goldfarb&#8211;Shanno (BFGS) method\n \u003ccode\u003ebfgs search df b0 x0\u003c/code\u003e where \u003ccode\u003eb0\u003c/code\u003e is the inverse Hessian (the\n identity is often a good initial value).\n\u003c/p\u003e",
          "module": "Optimization.LineSearch.BFGS",
          "name": "bfgs",
          "package": "optimization",
          "signature": "LineSearch f a-\u003e (f a -\u003e f a)-\u003e f (f a)-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Broyden Fletcher Goldfarb Shanno BFGS method bfgs search df b0 x0 where b0 is the inverse Hessian the identity is often good initial value",
          "hierarchy": "Optimization LineSearch BFGS",
          "module": "Optimization.LineSearch.BFGS",
          "name": "bfgs",
          "normalized": "LineSearch a b-\u003e(a b-\u003ea b)-\u003ea(a b)-\u003ea b-\u003e[a b]",
          "package": "optimization",
          "signature": "LineSearch f a-\u003e(f a-\u003ef a)-\u003ef(f a)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-BFGS.html#v:bfgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.LineSearch.BarzilaiBorwein",
          "name": "BarzilaiBorwein",
          "package": "optimization",
          "source": "src/Optimization-LineSearch-BarzilaiBorwein.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization LineSearch BarzilaiBorwein",
          "module": "Optimization.LineSearch.BarzilaiBorwein",
          "name": "BarzilaiBorwein",
          "package": "optimization",
          "partial": "Barzilai Borwein",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-BarzilaiBorwein.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBarzilai-Borwein 1988 is a non-monotonic optimization method\n\u003c/p\u003e",
          "module": "Optimization.LineSearch.BarzilaiBorwein",
          "name": "barzilaiBorwein",
          "package": "optimization",
          "signature": "(f a -\u003e f a)-\u003e f a-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Barzilai-Borwein is non-monotonic optimization method",
          "hierarchy": "Optimization LineSearch BarzilaiBorwein",
          "module": "Optimization.LineSearch.BarzilaiBorwein",
          "name": "barzilaiBorwein",
          "normalized": "(a b-\u003ea b)-\u003ea b-\u003ea b-\u003e[a b]",
          "package": "optimization",
          "partial": "Borwein",
          "signature": "(f a-\u003ef a)-\u003ef a-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-BarzilaiBorwein.html#v:barzilaiBorwein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "ConjugateGradient",
          "package": "optimization",
          "source": "src/Optimization-LineSearch-ConjugateGradient.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization LineSearch ConjugateGradient",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "ConjugateGradient",
          "package": "optimization",
          "partial": "Conjugate Gradient",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-ConjugateGradient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA beta expression \u003ccode\u003ebeta df0 df1 p\u003c/code\u003e is an expression for the\n conjugate direction contribution given the derivative \u003ccode\u003edf0\u003c/code\u003e and\n direction \u003ccode\u003ep\u003c/code\u003e for iteration \u003ccode\u003ek\u003c/code\u003e, \u003ccode\u003edf1\u003c/code\u003e for iteration \u003ccode\u003ek+1\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "Beta",
          "package": "optimization",
          "source": "src/Optimization-LineSearch-ConjugateGradient.html#Beta",
          "type": "type"
        },
        "index": {
          "description": "beta expression beta df0 df1 is an expression for the conjugate direction contribution given the derivative df0 and direction for iteration df1 for iteration",
          "hierarchy": "Optimization LineSearch ConjugateGradient",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "Beta",
          "package": "optimization",
          "partial": "Beta",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-ConjugateGradient.html#t:Beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjugate gradient method with given beta and line search method\n\u003c/p\u003e\u003cp\u003eThe conjugate gradient method avoids the trouble encountered by the\n steepest descent method on poorly conditioned problems (e.g. those with\n a wide range of eigenvalues). It does this by choosing directions which\n satisfy a condition of \u003ccode\u003eA\u003c/code\u003e orthogonality, ensuring that steps in the\n \u003ca\u003eunstretched\u003c/a\u003e search space are orthogonal.\n TODO: clarify explanation\n\u003c/p\u003e",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "conjGrad",
          "package": "optimization",
          "signature": "LineSearch f a-\u003e Beta f a-\u003e (f a -\u003e f a)-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Conjugate gradient method with given beta and line search method The conjugate gradient method avoids the trouble encountered by the steepest descent method on poorly conditioned problems e.g those with wide range of eigenvalues It does this by choosing directions which satisfy condition of orthogonality ensuring that steps in the unstretched search space are orthogonal TODO clarify explanation",
          "hierarchy": "Optimization LineSearch ConjugateGradient",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "conjGrad",
          "normalized": "LineSearch a b-\u003eBeta a b-\u003e(a b-\u003ea b)-\u003ea b-\u003e[a b]",
          "package": "optimization",
          "partial": "Grad",
          "signature": "LineSearch f a-\u003eBeta f a-\u003e(f a-\u003ef a)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-ConjugateGradient.html#v:conjGrad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFletcher-Reeves expression for beta\n\u003c/p\u003e",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "fletcherReeves",
          "package": "optimization",
          "signature": "Beta f a",
          "source": "src/Optimization-LineSearch-ConjugateGradient.html#fletcherReeves",
          "type": "function"
        },
        "index": {
          "description": "Fletcher-Reeves expression for beta",
          "hierarchy": "Optimization LineSearch ConjugateGradient",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "fletcherReeves",
          "package": "optimization",
          "partial": "Reeves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-ConjugateGradient.html#v:fletcherReeves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHestenes-Stiefel expression for beta\n\u003c/p\u003e",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "hestenesStiefel",
          "package": "optimization",
          "signature": "Beta f a",
          "source": "src/Optimization-LineSearch-ConjugateGradient.html#hestenesStiefel",
          "type": "function"
        },
        "index": {
          "description": "Hestenes-Stiefel expression for beta",
          "hierarchy": "Optimization LineSearch ConjugateGradient",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "hestenesStiefel",
          "package": "optimization",
          "partial": "Stiefel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-ConjugateGradient.html#v:hestenesStiefel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolak-Ribiere expression for beta\n\u003c/p\u003e",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "polakRibiere",
          "package": "optimization",
          "signature": "Beta f a",
          "source": "src/Optimization-LineSearch-ConjugateGradient.html#polakRibiere",
          "type": "function"
        },
        "index": {
          "description": "Polak-Ribiere expression for beta",
          "hierarchy": "Optimization LineSearch ConjugateGradient",
          "module": "Optimization.LineSearch.ConjugateGradient",
          "name": "polakRibiere",
          "package": "optimization",
          "partial": "Ribiere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-ConjugateGradient.html#v:polakRibiere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.LineSearch.MirrorDescent",
          "name": "MirrorDescent",
          "package": "optimization",
          "source": "src/Optimization-LineSearch-MirrorDescent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization LineSearch MirrorDescent",
          "module": "Optimization.LineSearch.MirrorDescent",
          "name": "MirrorDescent",
          "package": "optimization",
          "partial": "Mirror Descent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-MirrorDescent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirror descent method.\n\u003c/p\u003e\u003cp\u003eOriginally described by Nemirovsky and Yudin and later elucidated\n by Beck and Teboulle, the mirror descent method is a generalization of\n the projected subgradient method for convex optimization.\n Mirror descent requires the gradient of a strongly\n convex function \u003ccode\u003epsi\u003c/code\u003e (and its dual) as well as a way to get a\n subgradient for each point of the objective function \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Optimization.LineSearch.MirrorDescent",
          "name": "mirrorDescent",
          "package": "optimization",
          "signature": "LineSearch f a-\u003e (f a -\u003e f a)-\u003e (f a -\u003e f a)-\u003e (f a -\u003e f a)-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Mirror descent method Originally described by Nemirovsky and Yudin and later elucidated by Beck and Teboulle the mirror descent method is generalization of the projected subgradient method for convex optimization Mirror descent requires the gradient of strongly convex function psi and its dual as well as way to get subgradient for each point of the objective function",
          "hierarchy": "Optimization LineSearch MirrorDescent",
          "module": "Optimization.LineSearch.MirrorDescent",
          "name": "mirrorDescent",
          "normalized": "LineSearch a b-\u003e(a b-\u003ea b)-\u003e(a b-\u003ea b)-\u003e(a b-\u003ea b)-\u003ea b-\u003e[a b]",
          "package": "optimization",
          "partial": "Descent",
          "signature": "LineSearch f a-\u003e(f a-\u003ef a)-\u003e(f a-\u003ef a)-\u003e(f a-\u003ef a)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-MirrorDescent.html#v:mirrorDescent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.LineSearch.SteepestDescent",
          "name": "SteepestDescent",
          "package": "optimization",
          "source": "src/Optimization-LineSearch-SteepestDescent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization LineSearch SteepestDescent",
          "module": "Optimization.LineSearch.SteepestDescent",
          "name": "SteepestDescent",
          "package": "optimization",
          "partial": "Steepest Descent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-SteepestDescent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSteepest descent method\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esteepestDescent search f df x0\u003c/code\u003e optimizes a function \u003ccode\u003ef\u003c/code\u003e with gradient \u003ccode\u003edf\u003c/code\u003e\n with step size schedule \u003ccode\u003esearch\u003c/code\u003e starting from initial point \u003ccode\u003ex0\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe steepest descent method chooses the negative gradient of the function\n as its step direction.\n\u003c/p\u003e",
          "module": "Optimization.LineSearch.SteepestDescent",
          "name": "steepestDescent",
          "package": "optimization",
          "signature": "LineSearch f a-\u003e (f a -\u003e f a)-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Steepest descent method steepestDescent search df x0 optimizes function with gradient df with step size schedule search starting from initial point x0 The steepest descent method chooses the negative gradient of the function as its step direction",
          "hierarchy": "Optimization LineSearch SteepestDescent",
          "module": "Optimization.LineSearch.SteepestDescent",
          "name": "steepestDescent",
          "normalized": "LineSearch a b-\u003e(a b-\u003ea b)-\u003ea b-\u003e[a b]",
          "package": "optimization",
          "partial": "Descent",
          "signature": "LineSearch f a-\u003e(f a-\u003ef a)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch-SteepestDescent.html#v:steepestDescent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various methods for choosing step sizes for\n line search optimization methods. These methods can be used with\n any of line-search algorithms in the \u003ccode\u003eOptimization.LineSearch\u003c/code\u003e\n namespace. This module is re-exported from these modules\n so there should be no need to import it directly.\n\u003c/p\u003e\u003cp\u003eLine search algorithms are a class of iterative optimization\n methods. These methods start at an initial point \u003ccode\u003ex0\u003c/code\u003e and then choose\n a direction \u003ccode\u003ep\u003c/code\u003e (by some method) to advance in. The algorithm then\n uses one of the methods in this module to identify an optimal distance\n \u003ccode\u003ea\u003c/code\u003e (known as the step-size) by which to advance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Optimization.LineSearch",
          "name": "LineSearch",
          "package": "optimization",
          "source": "src/Optimization-LineSearch.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various methods for choosing step sizes for line search optimization methods These methods can be used with any of line-search algorithms in the Optimization.LineSearch namespace This module is re-exported from these modules so there should be no need to import it directly Line search algorithms are class of iterative optimization methods These methods start at an initial point x0 and then choose direction by some method to advance in The algorithm then uses one of the methods in this module to identify an optimal distance known as the step-size by which to advance",
          "hierarchy": "Optimization LineSearch",
          "module": "Optimization.LineSearch",
          "name": "LineSearch",
          "package": "optimization",
          "partial": "Line Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line search method \u003ccode\u003esearch df p x\u003c/code\u003e determines a step size\n in direction \u003ccode\u003ep\u003c/code\u003e from point \u003ccode\u003ex\u003c/code\u003e for function \u003ccode\u003ef\u003c/code\u003e with gradient \u003ccode\u003edf\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Optimization.LineSearch",
          "name": "LineSearch",
          "package": "optimization",
          "source": "src/Optimization-LineSearch.html#LineSearch",
          "type": "type"
        },
        "index": {
          "description": "line search method search df determines step size in direction from point for function with gradient df",
          "hierarchy": "Optimization LineSearch",
          "module": "Optimization.LineSearch",
          "name": "LineSearch",
          "package": "optimization",
          "partial": "Line Search",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch.html#t:LineSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArmijo backtracking line search algorithm\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003earmijoSearch gamma alpha c1\u003c/code\u003e starts with the given step size \u003ccode\u003ealpha\u003c/code\u003e\n and reduces it by a factor of \u003ccode\u003egamma\u003c/code\u003e until the Armijo condition\n is satisfied.\n\u003c/p\u003e",
          "module": "Optimization.LineSearch",
          "name": "armijoSearch",
          "package": "optimization",
          "signature": "a-\u003e a-\u003e a-\u003e (f a -\u003e a)-\u003e LineSearch f a",
          "type": "function"
        },
        "index": {
          "description": "Armijo backtracking line search algorithm armijoSearch gamma alpha c1 starts with the given step size alpha and reduces it by factor of gamma until the Armijo condition is satisfied",
          "hierarchy": "Optimization LineSearch",
          "module": "Optimization.LineSearch",
          "name": "armijoSearch",
          "normalized": "a-\u003ea-\u003ea-\u003e(b a-\u003ea)-\u003eLineSearch b a",
          "package": "optimization",
          "partial": "Search",
          "signature": "a-\u003ea-\u003ea-\u003e(f a-\u003ea)-\u003eLineSearch f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch.html#v:armijoSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktracking line search algorithm\n\u003c/p\u003e\u003cp\u003eThis is a building block for line search algorithms which reduces\n its step size until the given condition is satisfied.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ebacktrackingSearch gamma alpha pred\u003c/code\u003e starts with the given step\n size \u003ccode\u003ealpha\u003c/code\u003e and reduces it by a factor of \u003ccode\u003egamma\u003c/code\u003e until the given\n condition is satisfied.\n\u003c/p\u003e",
          "module": "Optimization.LineSearch",
          "name": "backtrackingSearch",
          "package": "optimization",
          "signature": "a-\u003e a-\u003e (a -\u003e Bool)-\u003e LineSearch f a",
          "type": "function"
        },
        "index": {
          "description": "Backtracking line search algorithm This is building block for line search algorithms which reduces its step size until the given condition is satisfied backtrackingSearch gamma alpha pred starts with the given step size alpha and reduces it by factor of gamma until the given condition is satisfied",
          "hierarchy": "Optimization LineSearch",
          "module": "Optimization.LineSearch",
          "name": "backtrackingSearch",
          "normalized": "a-\u003ea-\u003e(a-\u003eBool)-\u003eLineSearch b a",
          "package": "optimization",
          "partial": "Search",
          "signature": "a-\u003ea-\u003e(a-\u003eBool)-\u003eLineSearch f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch.html#v:backtrackingSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant line search\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003econstantSearch c\u003c/code\u003e always chooses a step-size \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Optimization.LineSearch",
          "name": "constantSearch",
          "package": "optimization",
          "signature": "a-\u003e LineSearch f a",
          "type": "function"
        },
        "index": {
          "description": "Constant line search constantSearch always chooses step-size",
          "hierarchy": "Optimization LineSearch",
          "module": "Optimization.LineSearch",
          "name": "constantSearch",
          "normalized": "a-\u003eLineSearch b a",
          "package": "optimization",
          "partial": "Search",
          "signature": "a-\u003eLineSearch f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch.html#v:constantSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWolfe backtracking line search algorithm (satisfies both Armijo and\n curvature conditions)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ewolfeSearch gamma alpha c1\u003c/code\u003e starts with the given step size \u003ccode\u003ealpha\u003c/code\u003e\n and reduces it by a factor of \u003ccode\u003egamma\u003c/code\u003e until both the Armijo and\n curvature conditions is satisfied.\n\u003c/p\u003e",
          "module": "Optimization.LineSearch",
          "name": "wolfeSearch",
          "package": "optimization",
          "signature": "a-\u003e a-\u003e a-\u003e a-\u003e (f a -\u003e a)-\u003e LineSearch f a",
          "type": "function"
        },
        "index": {
          "description": "Wolfe backtracking line search algorithm satisfies both Armijo and curvature conditions wolfeSearch gamma alpha c1 starts with the given step size alpha and reduces it by factor of gamma until both the Armijo and curvature conditions is satisfied",
          "hierarchy": "Optimization LineSearch",
          "module": "Optimization.LineSearch",
          "name": "wolfeSearch",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003e(b a-\u003ea)-\u003eLineSearch b a",
          "package": "optimization",
          "partial": "Search",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003e(f a-\u003ea)-\u003eLineSearch f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-LineSearch.html#v:wolfeSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.TrustRegion.Fista",
          "name": "Fista",
          "package": "optimization",
          "source": "src/Optimization-TrustRegion-Fista.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization TrustRegion Fista",
          "module": "Optimization.TrustRegion.Fista",
          "name": "Fista",
          "package": "optimization",
          "partial": "Fista",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-TrustRegion-Fista.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFast Iterative Shrinkage-Thresholding Algorithm (FISTA) with\n constant step size\n\u003c/p\u003e",
          "module": "Optimization.TrustRegion.Fista",
          "name": "fista",
          "package": "optimization",
          "signature": "a-\u003e (f a -\u003e f a)-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Fast Iterative Shrinkage-Thresholding Algorithm FISTA with constant step size",
          "hierarchy": "Optimization TrustRegion Fista",
          "module": "Optimization.TrustRegion.Fista",
          "name": "fista",
          "normalized": "a-\u003e(b a-\u003eb a)-\u003eb a-\u003e[b a]",
          "package": "optimization",
          "signature": "a-\u003e(f a-\u003ef a)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-TrustRegion-Fista.html#v:fista"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.TrustRegion.Nesterov1983",
          "name": "Nesterov1983",
          "package": "optimization",
          "source": "src/Optimization-TrustRegion-Nesterov1983.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization TrustRegion Nesterov1983",
          "module": "Optimization.TrustRegion.Nesterov1983",
          "name": "Nesterov1983",
          "package": "optimization",
          "partial": "Nesterov",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-TrustRegion-Nesterov1983.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNesterov 1983\n \u003ccode\u003eoptimalGradient kappa l df alpha0 x0\u003c/code\u003e is Nesterov's optimal\n gradient method, first described in 1983. This method requires\n knowledge of the Lipschitz constant \u003ccode\u003el\u003c/code\u003e of the gradient, the condition\n number \u003ccode\u003ekappa\u003c/code\u003e, as well as an initial step size \u003ccode\u003ealpha0\u003c/code\u003e in \u003ccode\u003e(0,1)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Optimization.TrustRegion.Nesterov1983",
          "name": "optimalGradient",
          "package": "optimization",
          "signature": "a-\u003e a-\u003e (f a -\u003e f a)-\u003e a-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Nesterov optimalGradient kappa df alpha0 x0 is Nesterov optimal gradient method first described in This method requires knowledge of the Lipschitz constant of the gradient the condition number kappa as well as an initial step size alpha0 in",
          "hierarchy": "Optimization TrustRegion Nesterov1983",
          "module": "Optimization.TrustRegion.Nesterov1983",
          "name": "optimalGradient",
          "normalized": "a-\u003ea-\u003e(b a-\u003eb a)-\u003ea-\u003eb a-\u003e[b a]",
          "package": "optimization",
          "partial": "Gradient",
          "signature": "a-\u003ea-\u003e(f a-\u003ef a)-\u003ea-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-TrustRegion-Nesterov1983.html#v:optimalGradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimization.TrustRegion.Newton",
          "name": "Newton",
          "package": "optimization",
          "source": "src/Optimization-TrustRegion-Newton.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimization TrustRegion Newton",
          "module": "Optimization.TrustRegion.Newton",
          "name": "Newton",
          "package": "optimization",
          "partial": "Newton",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-TrustRegion-Newton.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse by iterative method of Ben-Israel and Cohen\n starting from \u003ccode\u003ealpha A^T\u003c/code\u003e. Alpha should be set such that\n 0 \u003c alpha \u003c 2/sigma^2 where \u003ccode\u003esigma\u003c/code\u003e denotes the largest singular\n value of A\n\u003c/p\u003e",
          "module": "Optimization.TrustRegion.Newton",
          "name": "bicInv",
          "package": "optimization",
          "signature": "a -\u003e m (m a) -\u003e [m (m a)]",
          "source": "src/Optimization-TrustRegion-Newton.html#bicInv",
          "type": "function"
        },
        "index": {
          "description": "Inverse by iterative method of Ben-Israel and Cohen starting from alpha Alpha should be set such that alpha sigma where sigma denotes the largest singular value of",
          "hierarchy": "Optimization TrustRegion Newton",
          "module": "Optimization.TrustRegion.Newton",
          "name": "bicInv",
          "normalized": "a-\u003eb(b a)-\u003e[b(b a)]",
          "package": "optimization",
          "partial": "Inv",
          "signature": "a-\u003em(m a)-\u003e[m(m a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-TrustRegion-Newton.html#v:bicInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse by iterative method of Ben-Israel and Cohen\n with given starting condition\n\u003c/p\u003e",
          "module": "Optimization.TrustRegion.Newton",
          "name": "bicInv'",
          "package": "optimization",
          "signature": "m (m a) -\u003e m (m a) -\u003e [m (m a)]",
          "source": "src/Optimization-TrustRegion-Newton.html#bicInv%27",
          "type": "function"
        },
        "index": {
          "description": "Inverse by iterative method of Ben-Israel and Cohen with given starting condition",
          "hierarchy": "Optimization TrustRegion Newton",
          "module": "Optimization.TrustRegion.Newton",
          "name": "bicInv'",
          "normalized": "a(a b)-\u003ea(a b)-\u003e[a(a b)]",
          "package": "optimization",
          "partial": "Inv'",
          "signature": "m(m a)-\u003em(m a)-\u003e[m(m a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-TrustRegion-Newton.html#v:bicInv-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewton's method\n\u003c/p\u003e",
          "module": "Optimization.TrustRegion.Newton",
          "name": "newton",
          "package": "optimization",
          "signature": "(f a -\u003e f a)-\u003e (f a -\u003e f (f a))-\u003e f a-\u003e [f a]",
          "type": "function"
        },
        "index": {
          "description": "Newton method",
          "hierarchy": "Optimization TrustRegion Newton",
          "module": "Optimization.TrustRegion.Newton",
          "name": "newton",
          "normalized": "(a b-\u003ea b)-\u003e(a b-\u003ea(a b))-\u003ea b-\u003e[a b]",
          "package": "optimization",
          "signature": "(f a-\u003ef a)-\u003e(f a-\u003ef(f a))-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optimization/docs/Optimization-TrustRegion-Newton.html#v:newton"
      }
    }
  ]
]