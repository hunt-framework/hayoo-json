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
        "word": "effective-aspects"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault aspect semantics, aspects are deployed and undeployed at the top level.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "AOP.Default",
          "name": "Default",
          "package": "effective-aspects",
          "source": "src/AOP-Default.html",
          "type": "module"
        },
        "index": {
          "description": "Default aspect semantics aspects are deployed and undeployed at the top level",
          "hierarchy": "AOP Default",
          "module": "AOP.Default",
          "name": "Default",
          "package": "effective-aspects",
          "partial": "Default",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Default.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOPMonad",
          "name": "AOPMonad",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-AOPMonad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal AOPMonad",
          "module": "AOP.Internal.AOPMonad",
          "name": "AOPMonad",
          "package": "effective-aspects",
          "partial": "AOPMonad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOPMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOPMonad",
          "name": "AOPMonad",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-AOPMonad.html#AOPMonad",
          "type": "class"
        },
        "index": {
          "hierarchy": "AOP Internal AOPMonad",
          "module": "AOP.Internal.AOPMonad",
          "name": "AOPMonad",
          "package": "effective-aspects",
          "partial": "AOPMonad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOPMonad.html#t:AOPMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOPMonad",
          "name": "MonadDeploy",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-AOPMonad.html#MonadDeploy",
          "type": "class"
        },
        "index": {
          "hierarchy": "AOP Internal AOPMonad",
          "module": "AOP.Internal.AOPMonad",
          "name": "MonadDeploy",
          "package": "effective-aspects",
          "partial": "Monad Deploy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOPMonad.html#t:MonadDeploy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOPMonad",
          "name": "deploy",
          "package": "effective-aspects",
          "signature": "Aspect m a b c d -\u003e m ()",
          "source": "src/AOP-Internal-AOPMonad.html#deploy",
          "type": "method"
        },
        "index": {
          "hierarchy": "AOP Internal AOPMonad",
          "module": "AOP.Internal.AOPMonad",
          "name": "deploy",
          "normalized": "Aspect a b c d e-\u003ea()",
          "package": "effective-aspects",
          "signature": "Aspect m a b c d-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOPMonad.html#v:deploy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOPMonad",
          "name": "deployInEnv",
          "package": "effective-aspects",
          "signature": "Aspect (t m) a b c d -\u003e AspectEnv (t m) -\u003e m (AspectEnv (t m))",
          "source": "src/AOP-Internal-AOPMonad.html#deployInEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "AOP Internal AOPMonad",
          "module": "AOP.Internal.AOPMonad",
          "name": "deployInEnv",
          "normalized": "Aspect(a b)c d e f-\u003eAspectEnv(a b)-\u003eb(AspectEnv(a b))",
          "package": "effective-aspects",
          "partial": "In Env",
          "signature": "Aspect(t m)a b c d-\u003eAspectEnv(t m)-\u003em(AspectEnv(t m))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOPMonad.html#v:deployInEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOPMonad",
          "name": "undeploy",
          "package": "effective-aspects",
          "signature": "Aspect m a b c d -\u003e m ()",
          "source": "src/AOP-Internal-AOPMonad.html#undeploy",
          "type": "method"
        },
        "index": {
          "hierarchy": "AOP Internal AOPMonad",
          "module": "AOP.Internal.AOPMonad",
          "name": "undeploy",
          "normalized": "Aspect a b c d e-\u003ea()",
          "package": "effective-aspects",
          "signature": "Aspect m a b c d-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOPMonad.html#v:undeploy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOPMonad",
          "name": "undeployInEnv",
          "package": "effective-aspects",
          "signature": "Aspect (t m) a b c d -\u003e AspectEnv (t m) -\u003e m (AspectEnv (t m))",
          "source": "src/AOP-Internal-AOPMonad.html#undeployInEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "AOP Internal AOPMonad",
          "module": "AOP.Internal.AOPMonad",
          "name": "undeployInEnv",
          "normalized": "Aspect(a b)c d e f-\u003eAspectEnv(a b)-\u003eb(AspectEnv(a b))",
          "package": "effective-aspects",
          "partial": "In Env",
          "signature": "Aspect(t m)a b c d-\u003eAspectEnv(t m)-\u003em(AspectEnv(t m))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOPMonad.html#v:undeployInEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOT",
          "name": "AOT",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-AOT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal AOT",
          "module": "AOP.Internal.AOT",
          "name": "AOT",
          "package": "effective-aspects",
          "partial": "AOT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOT",
          "name": "AOT",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-AOT.html#AOT",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP Internal AOT",
          "module": "AOP.Internal.AOT",
          "name": "AOT",
          "package": "effective-aspects",
          "partial": "AOT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOT.html#t:AOT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.AOT",
          "name": "mkAOT",
          "package": "effective-aspects",
          "signature": "(AspectEnv (AOT m) -\u003e m (a, AspectEnv (AOT m))) -\u003e AOT m a",
          "source": "src/AOP-Internal-AOT.html#mkAOT",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal AOT",
          "module": "AOP.Internal.AOT",
          "name": "mkAOT",
          "normalized": "(AspectEnv(AOT a)-\u003ea(b,AspectEnv(AOT a)))-\u003eAOT a b",
          "package": "effective-aspects",
          "partial": "AOT",
          "signature": "(AspectEnv(AOT m)-\u003em(a,AspectEnv(AOT m)))-\u003eAOT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOT.html#v:mkAOT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an AOT computation to obtain a computation in the underlying monad\n\u003c/p\u003e",
          "module": "AOP.Internal.AOT",
          "name": "runAOT",
          "package": "effective-aspects",
          "signature": "AOT m a -\u003e m a",
          "source": "src/AOP-Internal-AOT.html#runAOT",
          "type": "function"
        },
        "index": {
          "description": "Runs an AOT computation to obtain computation in the underlying monad",
          "hierarchy": "AOP Internal AOT",
          "module": "AOP.Internal.AOT",
          "name": "runAOT",
          "normalized": "AOT a b-\u003ea b",
          "package": "effective-aspects",
          "partial": "AOT",
          "signature": "AOT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOT.html#v:runAOT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of woven application for AOT, used in the overloading of #.\n\u003c/p\u003e",
          "module": "AOP.Internal.AOT",
          "name": "wappt",
          "package": "effective-aspects",
          "signature": "FunctionTag -\u003e (a -\u003e AOT m b) -\u003e a -\u003e AOT m b",
          "source": "src/AOP-Internal-AOT.html#wappt",
          "type": "function"
        },
        "index": {
          "description": "Implementation of woven application for AOT used in the overloading of",
          "hierarchy": "AOP Internal AOT",
          "module": "AOP.Internal.AOT",
          "name": "wappt",
          "normalized": "FunctionTag-\u003e(a-\u003eAOT b c)-\u003ea-\u003eAOT b c",
          "package": "effective-aspects",
          "signature": "FunctionTag-\u003e(a-\u003eAOT m b)-\u003ea-\u003eAOT m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-AOT.html#v:wappt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "JoinpointModel",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-JoinpointModel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "JoinpointModel",
          "package": "effective-aspects",
          "partial": "Joinpoint Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "Advice",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-JoinpointModel.html#Advice",
          "type": "type"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "Advice",
          "package": "effective-aspects",
          "partial": "Advice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#t:Advice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped first-class aspect. An aspect is tagged with a Unique value, used for identity\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "Aspect",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-JoinpointModel.html#Aspect",
          "type": "data"
        },
        "index": {
          "description": "Typed first-class aspect An aspect is tagged with Unique value used for identity",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "Aspect",
          "package": "effective-aspects",
          "partial": "Aspect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#t:Aspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAspect environment\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "AspectEnv",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-JoinpointModel.html#AspectEnv",
          "type": "type"
        },
        "index": {
          "description": "Aspect environment",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "AspectEnv",
          "package": "effective-aspects",
          "partial": "Aspect Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#t:AspectEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAspect with hidden types, to be used in the aspect environment\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "EAspect",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-JoinpointModel.html#EAspect",
          "type": "data"
        },
        "index": {
          "description": "Aspect with hidden types to be used in the aspect environment",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "EAspect",
          "package": "effective-aspects",
          "partial": "EAspect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#t:EAspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "FunctionTag",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-JoinpointModel.html#FunctionTag",
          "type": "type"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "FunctionTag",
          "package": "effective-aspects",
          "partial": "Function Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#t:FunctionTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin points are function applications. We store the function and the argument, and the function type representation.\n | We add a FunctionTag value to use for quantification.\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "Jp",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-JoinpointModel.html#Jp",
          "type": "data"
        },
        "index": {
          "description": "Join points are function applications We store the function and the argument and the function type representation We add FunctionTag value to use for quantification",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "Jp",
          "package": "effective-aspects",
          "partial": "Jp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#t:Jp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointcut is a predicate on the current join point. It is used to identify join points of interest.\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "PC",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-JoinpointModel.html#PC",
          "type": "data"
        },
        "index": {
          "description": "pointcut is predicate on the current join point It is used to identify join points of interest",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "PC",
          "package": "effective-aspects",
          "partial": "PC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#t:PC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA RequirePC is not a valid standalone pointcut, it reflects a type requirement and must be combined with a standard PC.\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "RequirePC",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-JoinpointModel.html#RequirePC",
          "type": "data"
        },
        "index": {
          "description": "RequirePC is not valid standalone pointcut it reflects type requirement and must be combined with standard PC",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "RequirePC",
          "package": "effective-aspects",
          "partial": "Require PC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#t:RequirePC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "Aspect",
          "package": "effective-aspects",
          "signature": "Aspect (PC m a b) (Advice m c d) AspectHandle",
          "source": "src/AOP-Internal-JoinpointModel.html#Aspect",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "Aspect",
          "package": "effective-aspects",
          "partial": "Aspect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:Aspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "EAspect",
          "package": "effective-aspects",
          "signature": "EAspect (Aspect m a b c d)",
          "source": "src/AOP-Internal-JoinpointModel.html#EAspect",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "EAspect",
          "package": "effective-aspects",
          "partial": "EAspect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:EAspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "Jp",
          "package": "effective-aspects",
          "signature": "Jp (a -\u003e m b) FunctionTag a TypeRep",
          "source": "src/AOP-Internal-JoinpointModel.html#Jp",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "Jp",
          "normalized": "Jp(a-\u003eb c)FunctionTag a TypeRep",
          "package": "effective-aspects",
          "partial": "Jp",
          "signature": "Jp(a-\u003em b)FunctionTag a TypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:Jp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "PC",
          "package": "effective-aspects",
          "signature": "PC",
          "source": "src/AOP-Internal-JoinpointModel.html#PC",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "PC",
          "package": "effective-aspects",
          "partial": "PC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:PC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "RequirePC",
          "package": "effective-aspects",
          "signature": "RequirePC",
          "source": "src/AOP-Internal-JoinpointModel.html#RequirePC",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "RequirePC",
          "package": "effective-aspects",
          "partial": "Require PC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:RequirePC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoerces t2 to be compatible with the advice. It passes t1 as a the proceed argument of the advice.\n This coercion is safe, as described in the paper.\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "applyAdv",
          "package": "effective-aspects",
          "signature": "Advice m a b -\u003e t2 -\u003e t2",
          "source": "src/AOP-Internal-JoinpointModel.html#applyAdv",
          "type": "function"
        },
        "index": {
          "description": "Coerces t2 to be compatible with the advice It passes t1 as the proceed argument of the advice This coercion is safe as described in the paper",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "applyAdv",
          "normalized": "Advice a b c-\u003ed-\u003ed",
          "package": "effective-aspects",
          "partial": "Adv",
          "signature": "Advice m a b-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:applyAdv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a well-typed aspect\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "aspect",
          "package": "effective-aspects",
          "signature": "PC m a1 b1 -\u003e Advice m a2 b2 -\u003e Aspect m a1 b1 a2 b2",
          "source": "src/AOP-Internal-JoinpointModel.html#aspect",
          "type": "function"
        },
        "index": {
          "description": "Constructs well-typed aspect",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "aspect",
          "normalized": "PC a b c-\u003eAdvice a b c-\u003eAspect a b c b c",
          "package": "effective-aspects",
          "signature": "PC m a b-\u003eAdvice m a b-\u003eAspect m a b a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:aspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComparing identity of functions:\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "compareFun",
          "package": "effective-aspects",
          "signature": "t -\u003e FunctionTag -\u003e Jp m a b -\u003e Bool",
          "source": "src/AOP-Internal-JoinpointModel.html#compareFun",
          "type": "function"
        },
        "index": {
          "description": "Comparing identity of functions",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "compareFun",
          "normalized": "a-\u003eFunctionTag-\u003eJp b c d-\u003eBool",
          "package": "effective-aspects",
          "partial": "Fun",
          "signature": "t-\u003eFunctionTag-\u003eJp m a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:compareFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare types to see if type representation t is less general \n | than the type of the function associated to the join point\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "compareType",
          "package": "effective-aspects",
          "signature": "TypeRep -\u003e Jp m a b -\u003e Bool",
          "source": "src/AOP-Internal-JoinpointModel.html#compareType",
          "type": "function"
        },
        "index": {
          "description": "Compare types to see if type representation is less general than the type of the function associated to the join point",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "compareType",
          "normalized": "TypeRep-\u003eJp a b c-\u003eBool",
          "package": "effective-aspects",
          "partial": "Type",
          "signature": "TypeRep-\u003eJp m a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:compareType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "defaultFunctionTag",
          "package": "effective-aspects",
          "signature": "Integer",
          "source": "src/AOP-Internal-JoinpointModel.html#defaultFunctionTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "defaultFunctionTag",
          "package": "effective-aspects",
          "partial": "Function Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:defaultFunctionTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes asp from the aspect environment, used in undeploy\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "deleteAsp",
          "package": "effective-aspects",
          "signature": "EAspect m -\u003e AspectEnv m -\u003e AspectEnv m",
          "source": "src/AOP-Internal-JoinpointModel.html#deleteAsp",
          "type": "function"
        },
        "index": {
          "description": "Deletes asp from the aspect environment used in undeploy",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "deleteAsp",
          "normalized": "EAspect a-\u003eAspectEnv a-\u003eAspectEnv a",
          "package": "effective-aspects",
          "partial": "Asp",
          "signature": "EAspect m-\u003eAspectEnv m-\u003eAspectEnv m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:deleteAsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the argument bound to the join point\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "getJpArg",
          "package": "effective-aspects",
          "signature": "Jp m a b -\u003e a",
          "source": "src/AOP-Internal-JoinpointModel.html#getJpArg",
          "type": "function"
        },
        "index": {
          "description": "Gets the argument bound to the join point",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "getJpArg",
          "normalized": "Jp a b c-\u003eb",
          "package": "effective-aspects",
          "partial": "Jp Arg",
          "signature": "Jp m a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:getJpArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "mpcond",
          "package": "effective-aspects",
          "signature": "forall a' b'.  m (Jp m a' b' -\u003e m Bool)",
          "source": "src/AOP-Internal-JoinpointModel.html#PC",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "mpcond",
          "normalized": "a b c d(Jp d b e-\u003ed Bool)",
          "package": "effective-aspects",
          "signature": "forall a' b'. m(Jp m a' b'-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:mpcond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.JoinpointModel",
          "name": "mpcond'",
          "package": "effective-aspects",
          "signature": "forall a' b'.  m (Jp m a' b' -\u003e m Bool)",
          "source": "src/AOP-Internal-JoinpointModel.html#RequirePC",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "mpcond'",
          "normalized": "a b c d(Jp d b e-\u003ed Bool)",
          "package": "effective-aspects",
          "signature": "forall a' b'. m(Jp m a' b'-\u003em Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:mpcond-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a join point with given function, tag, and argument\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "newjp",
          "package": "effective-aspects",
          "signature": "(a -\u003e m b) -\u003e FunctionTag -\u003e a -\u003e Jp m a b",
          "source": "src/AOP-Internal-JoinpointModel.html#newjp",
          "type": "function"
        },
        "index": {
          "description": "Creates join point with given function tag and argument",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "newjp",
          "normalized": "(a-\u003eb c)-\u003eFunctionTag-\u003ea-\u003eJp b a c",
          "package": "effective-aspects",
          "signature": "(a-\u003em b)-\u003eFunctionTag-\u003ea-\u003eJp m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:newjp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the computation resulting of applying a join point to the pointcut\n\u003c/p\u003e",
          "module": "AOP.Internal.JoinpointModel",
          "name": "runPC",
          "package": "effective-aspects",
          "signature": "PC m t t1 -\u003e Jp m a' b' -\u003e m Bool",
          "source": "src/AOP-Internal-JoinpointModel.html#runPC",
          "type": "function"
        },
        "index": {
          "description": "Extracts the computation resulting of applying join point to the pointcut",
          "hierarchy": "AOP Internal JoinpointModel",
          "module": "AOP.Internal.JoinpointModel",
          "name": "runPC",
          "normalized": "PC a b b-\u003eJp a c d-\u003ea Bool",
          "package": "effective-aspects",
          "partial": "PC",
          "signature": "PC m t t-\u003eJp m a' b'-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-JoinpointModel.html#v:runPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.LessGen",
          "name": "LessGen",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-LessGen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal LessGen",
          "module": "AOP.Internal.LessGen",
          "name": "LessGen",
          "package": "effective-aspects",
          "partial": "Less Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-LessGen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.LessGen",
          "name": "Analyze",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#Analyze",
          "type": "class"
        },
        "index": {
          "hierarchy": "AOP Internal LessGen",
          "module": "AOP.Internal.LessGen",
          "name": "Analyze",
          "package": "effective-aspects",
          "partial": "Analyze",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-LessGen.html#t:Analyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf LeastGen a b c holds then there exists a substitution s and type c such that (s c = (a, b)).\n\u003c/p\u003e",
          "module": "AOP.Internal.LessGen",
          "name": "LeastGen",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-LessGen.html#LeastGen",
          "type": "class"
        },
        "index": {
          "description": "If LeastGen holds then there exists substitution and type such that",
          "hierarchy": "AOP Internal LessGen",
          "module": "AOP.Internal.LessGen",
          "name": "LeastGen",
          "package": "effective-aspects",
          "partial": "Least Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-LessGen.html#t:LeastGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.LessGen",
          "name": "LeastGen'",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-LessGen.html#LeastGen%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "AOP Internal LessGen",
          "module": "AOP.Internal.LessGen",
          "name": "LeastGen'",
          "package": "effective-aspects",
          "partial": "Least Gen'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-LessGen.html#t:LeastGen-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf LessGen a b, then b is less general than a. That is, there exists substitution s such that (s b = a).\n\u003c/p\u003e",
          "module": "AOP.Internal.LessGen",
          "name": "LessGen",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-LessGen.html#LessGen",
          "type": "class"
        },
        "index": {
          "description": "If LessGen then is less general than That is there exists substitution such that",
          "hierarchy": "AOP Internal LessGen",
          "module": "AOP.Internal.LessGen",
          "name": "LessGen",
          "package": "effective-aspects",
          "partial": "Less Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-LessGen.html#t:LessGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding of substitutions as partial maps \n\u003c/p\u003e",
          "module": "AOP.Internal.LessGen",
          "name": "SubstEmpty",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-LessGen.html#SubstEmpty",
          "type": "data"
        },
        "index": {
          "description": "Encoding of substitutions as partial maps",
          "hierarchy": "AOP Internal LessGen",
          "module": "AOP.Internal.LessGen",
          "name": "SubstEmpty",
          "package": "effective-aspects",
          "partial": "Subst Empty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-LessGen.html#t:SubstEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.OpenApp",
          "name": "OpenApp",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-OpenApp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal OpenApp",
          "module": "AOP.Internal.OpenApp",
          "name": "OpenApp",
          "package": "effective-aspects",
          "partial": "Open App",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-OpenApp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.OpenApp",
          "name": "OpenApp",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-OpenApp.html#OpenApp",
          "type": "class"
        },
        "index": {
          "hierarchy": "AOP Internal OpenApp",
          "module": "AOP.Internal.OpenApp",
          "name": "OpenApp",
          "package": "effective-aspects",
          "partial": "Open App",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-OpenApp.html#t:OpenApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.OpenApp",
          "name": "TaggedApp",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-OpenApp.html#TaggedApp",
          "type": "class"
        },
        "index": {
          "hierarchy": "AOP Internal OpenApp",
          "module": "AOP.Internal.OpenApp",
          "name": "TaggedApp",
          "package": "effective-aspects",
          "partial": "Tagged App",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-OpenApp.html#t:TaggedApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.OpenApp",
          "name": "(#)",
          "package": "effective-aspects",
          "signature": "(a -\u003e m b) -\u003e a -\u003e m b",
          "source": "src/AOP-Internal-OpenApp.html#%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "AOP Internal OpenApp",
          "module": "AOP.Internal.OpenApp",
          "name": "(#) #",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
          "package": "effective-aspects",
          "signature": "(a-\u003em b)-\u003ea-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-OpenApp.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.OpenApp",
          "name": "taggedApp",
          "package": "effective-aspects",
          "signature": "FunctionTag -\u003e (a -\u003e m b) -\u003e a -\u003e m b",
          "source": "src/AOP-Internal-OpenApp.html#taggedApp",
          "type": "method"
        },
        "index": {
          "hierarchy": "AOP Internal OpenApp",
          "module": "AOP.Internal.OpenApp",
          "name": "taggedApp",
          "normalized": "FunctionTag-\u003e(a-\u003eb c)-\u003ea-\u003eb c",
          "package": "effective-aspects",
          "partial": "App",
          "signature": "FunctionTag-\u003e(a-\u003em b)-\u003ea-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-OpenApp.html#v:taggedApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PointcutLanguage",
          "name": "PointcutLanguage",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PointcutLanguage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal PointcutLanguage",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "PointcutLanguage",
          "package": "effective-aspects",
          "partial": "Pointcut Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PointcutLanguage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcAnd",
          "package": "effective-aspects",
          "signature": "PC m a1 b1 -\u003e pct m a2 b2 -\u003e PC m a1 b1",
          "source": "src/AOP-Internal-PointcutLanguage.html#pcAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal PointcutLanguage",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcAnd",
          "normalized": "PC a b c-\u003ed a b c-\u003ePC a b c",
          "package": "effective-aspects",
          "partial": "And",
          "signature": "PC m a b-\u003epct m a b-\u003ePC m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PointcutLanguage.html#v:pcAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilt-in pointcuts pcCall and pcType, and pointcut combinators pcAnd, pcOr and pcNot.\nUsing typeclasses, pointcuts are open for new definitions of functions, like the Function wrapper.\nWe also define pcSeq, that matches a sequence of two join points.\n\u003c/p\u003e",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcCall",
          "package": "effective-aspects",
          "signature": "(a -\u003e b) -\u003e PC m a b",
          "source": "src/AOP-Internal-PointcutLanguage.html#pcCall",
          "type": "function"
        },
        "index": {
          "description": "Built-in pointcuts pcCall and pcType and pointcut combinators pcAnd pcOr and pcNot Using typeclasses pointcuts are open for new definitions of functions like the Function wrapper We also define pcSeq that matches sequence of two join points",
          "hierarchy": "AOP Internal PointcutLanguage",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcCall",
          "normalized": "(a-\u003eb)-\u003ePC c a b",
          "package": "effective-aspects",
          "partial": "Call",
          "signature": "(a-\u003eb)-\u003ePC m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PointcutLanguage.html#v:pcCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical Not pointcut combinator.\n\u003c/p\u003e",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcNot",
          "package": "effective-aspects",
          "signature": "PC m a1 b1 -\u003e PC m a2 b2",
          "source": "src/AOP-Internal-PointcutLanguage.html#pcNot",
          "type": "function"
        },
        "index": {
          "description": "Logical Not pointcut combinator",
          "hierarchy": "AOP Internal PointcutLanguage",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcNot",
          "normalized": "PC a b c-\u003ePC a b c",
          "package": "effective-aspects",
          "partial": "Not",
          "signature": "PC m a b-\u003ePC m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PointcutLanguage.html#v:pcNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical Or pointcut combinator.\n\u003c/p\u003e",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcOr",
          "package": "effective-aspects",
          "signature": "PC m a1 b1 -\u003e PC m a2 b2 -\u003e PC m agen bgen",
          "source": "src/AOP-Internal-PointcutLanguage.html#pcOr",
          "type": "function"
        },
        "index": {
          "description": "Logical Or pointcut combinator",
          "hierarchy": "AOP Internal PointcutLanguage",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcOr",
          "normalized": "PC a b c-\u003ePC a b c-\u003ePC a d e",
          "package": "effective-aspects",
          "partial": "Or",
          "signature": "PC m a b-\u003ePC m a b-\u003ePC m agen bgen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PointcutLanguage.html#v:pcOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcTag",
          "package": "effective-aspects",
          "signature": "FunctionTag -\u003e PC m a' b'",
          "source": "src/AOP-Internal-PointcutLanguage.html#pcTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal PointcutLanguage",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcTag",
          "normalized": "FunctionTag-\u003ePC a b c",
          "package": "effective-aspects",
          "partial": "Tag",
          "signature": "FunctionTag-\u003ePC m a' b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PointcutLanguage.html#v:pcTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcType",
          "package": "effective-aspects",
          "signature": "(a -\u003e b) -\u003e PC m a b",
          "source": "src/AOP-Internal-PointcutLanguage.html#pcType",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP Internal PointcutLanguage",
          "module": "AOP.Internal.PointcutLanguage",
          "name": "pcType",
          "normalized": "(a-\u003eb)-\u003ePC c a b",
          "package": "effective-aspects",
          "partial": "Type",
          "signature": "(a-\u003eb)-\u003ePC m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PointcutLanguage.html#v:pcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "PolyTypeable",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "PolyTypeable",
          "package": "effective-aspects",
          "partial": "Poly Typeable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "Analyze",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#Analyze",
          "type": "class"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "Analyze",
          "package": "effective-aspects",
          "partial": "Analyze",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:Analyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "PolyTypeable",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#PolyTypeable",
          "type": "class"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "PolyTypeable",
          "package": "effective-aspects",
          "partial": "Poly Typeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:PolyTypeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon0",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#TCon0",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon0",
          "package": "effective-aspects",
          "partial": "TCon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:TCon0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon1",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#TCon1",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon1",
          "package": "effective-aspects",
          "partial": "TCon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:TCon1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon2",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#TCon2",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon2",
          "package": "effective-aspects",
          "partial": "TCon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:TCon2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon3",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#TCon3",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon3",
          "package": "effective-aspects",
          "partial": "TCon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:TCon3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon4",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#TCon4",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon4",
          "package": "effective-aspects",
          "partial": "TCon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:TCon4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon5",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#TCon5",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "TCon5",
          "package": "effective-aspects",
          "partial": "TCon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:TCon5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "TVar",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#TVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "TVar",
          "package": "effective-aspects",
          "partial": "TVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "W",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeable.html#W",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "W",
          "package": "effective-aspects",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#t:W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeable",
          "name": "polyTypeOf",
          "package": "effective-aspects",
          "signature": "a -\u003e TypeRep",
          "source": "src/AOP-Internal-PolyTypeable.html#polyTypeOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeable",
          "module": "AOP.Internal.PolyTypeable",
          "name": "polyTypeOf",
          "normalized": "a-\u003eTypeRep",
          "package": "effective-aspects",
          "partial": "Type Of",
          "signature": "a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeable.html#v:polyTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.PolyTypeableUtils",
          "name": "PolyTypeableUtils",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-PolyTypeableUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal PolyTypeableUtils",
          "module": "AOP.Internal.PolyTypeableUtils",
          "name": "PolyTypeableUtils",
          "package": "effective-aspects",
          "partial": "Poly Typeable Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeableUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function on the first component of a pair\n\u003c/p\u003e",
          "module": "AOP.Internal.PolyTypeableUtils",
          "name": "first",
          "package": "effective-aspects",
          "signature": "(a -\u003e a') -\u003e (a, b) -\u003e (a', b)",
          "source": "src/AOP-Internal-PolyTypeableUtils.html#first",
          "type": "function"
        },
        "index": {
          "description": "Applies function on the first component of pair",
          "hierarchy": "AOP Internal PolyTypeableUtils",
          "module": "AOP.Internal.PolyTypeableUtils",
          "name": "first",
          "normalized": "(a-\u003eb)-\u003e(a,c)-\u003e(b,c)",
          "package": "effective-aspects",
          "signature": "(a-\u003ea')-\u003e(a,b)-\u003e(a',b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeableUtils.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True iff t1 is less general than t2\n | We use a hashmap to compute a substitution from t2 to t1\n\u003c/p\u003e",
          "module": "AOP.Internal.PolyTypeableUtils",
          "name": "isLessGeneral",
          "package": "effective-aspects",
          "signature": "TypeRep -\u003e TypeRep -\u003e Bool",
          "source": "src/AOP-Internal-PolyTypeableUtils.html#isLessGeneral",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff t1 is less general than t2 We use hashmap to compute substitution from t2 to t1",
          "hierarchy": "AOP Internal PolyTypeableUtils",
          "module": "AOP.Internal.PolyTypeableUtils",
          "name": "isLessGeneral",
          "normalized": "TypeRep-\u003eTypeRep-\u003eBool",
          "package": "effective-aspects",
          "partial": "Less General",
          "signature": "TypeRep-\u003eTypeRep-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeableUtils.html#v:isLessGeneral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad andmap\n\u003c/p\u003e",
          "module": "AOP.Internal.PolyTypeableUtils",
          "name": "mmap",
          "package": "effective-aspects",
          "signature": "(a -\u003e a' -\u003e m Bool) -\u003e [a] -\u003e [a'] -\u003e m Bool",
          "source": "src/AOP-Internal-PolyTypeableUtils.html#mmap",
          "type": "function"
        },
        "index": {
          "description": "Monad andmap",
          "hierarchy": "AOP Internal PolyTypeableUtils",
          "module": "AOP.Internal.PolyTypeableUtils",
          "name": "mmap",
          "normalized": "(a-\u003eb-\u003ec Bool)-\u003e[a]-\u003e[b]-\u003ec Bool",
          "package": "effective-aspects",
          "signature": "(a-\u003ea'-\u003em Bool)-\u003e[a]-\u003e[a']-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-PolyTypeableUtils.html#v:mmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.StableNamesEq",
          "name": "StableNamesEq",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-StableNamesEq.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal StableNamesEq",
          "module": "AOP.Internal.StableNamesEq",
          "name": "StableNamesEq",
          "package": "effective-aspects",
          "partial": "Stable Names Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-StableNamesEq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality of functions based on the StableName API\n\u003c/p\u003e",
          "module": "AOP.Internal.StableNamesEq",
          "name": "stableNamesEq",
          "package": "effective-aspects",
          "signature": "a -\u003e b -\u003e Bool",
          "source": "src/AOP-Internal-StableNamesEq.html#stableNamesEq",
          "type": "function"
        },
        "index": {
          "description": "Equality of functions based on the StableName API",
          "hierarchy": "AOP Internal StableNamesEq",
          "module": "AOP.Internal.StableNamesEq",
          "name": "stableNamesEq",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "effective-aspects",
          "partial": "Names Eq",
          "signature": "a-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-StableNamesEq.html#v:stableNamesEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.Internal.Typeable1Monad",
          "name": "Typeable1Monad",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-Typeable1Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP Internal Typeable1Monad",
          "module": "AOP.Internal.Typeable1Monad",
          "name": "Typeable1Monad",
          "package": "effective-aspects",
          "partial": "Typeable Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-Typeable1Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupport for PolyTypeable when using monads and monad transformers \n\u003c/p\u003e",
          "module": "AOP.Internal.Typeable1Monad",
          "name": "Typeable1Monad",
          "package": "effective-aspects",
          "source": "src/AOP-Internal-Typeable1Monad.html#Typeable1Monad",
          "type": "class"
        },
        "index": {
          "description": "Support for PolyTypeable when using monads and monad transformers",
          "hierarchy": "AOP Internal Typeable1Monad",
          "module": "AOP.Internal.Typeable1Monad",
          "name": "Typeable1Monad",
          "package": "effective-aspects",
          "partial": "Typeable Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-Internal-Typeable1Monad.html#t:Typeable1Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.ProtectedPointcuts",
          "name": "ProtectedPointcuts",
          "package": "effective-aspects",
          "source": "src/AOP-ProtectedPointcuts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AOP ProtectedPointcuts",
          "module": "AOP.ProtectedPointcuts",
          "name": "ProtectedPointcuts",
          "package": "effective-aspects",
          "partial": "Protected Pointcuts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-ProtectedPointcuts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.ProtectedPointcuts",
          "name": "ProtectedPC",
          "package": "effective-aspects",
          "source": "src/AOP-ProtectedPointcuts.html#ProtectedPC",
          "type": "data"
        },
        "index": {
          "hierarchy": "AOP ProtectedPointcuts",
          "module": "AOP.ProtectedPointcuts",
          "name": "ProtectedPC",
          "package": "effective-aspects",
          "partial": "Protected PC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-ProtectedPointcuts.html#t:ProtectedPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a protected aspect based on a given protected pc\n\u003c/p\u003e",
          "module": "AOP.ProtectedPointcuts",
          "name": "pAspect",
          "package": "effective-aspects",
          "signature": "ProtectedPC m a b t c d -\u003e t -\u003e Aspect m a b c d",
          "source": "src/AOP-ProtectedPointcuts.html#pAspect",
          "type": "function"
        },
        "index": {
          "description": "Creates protected aspect based on given protected pc",
          "hierarchy": "AOP ProtectedPointcuts",
          "module": "AOP.ProtectedPointcuts",
          "name": "pAspect",
          "normalized": "ProtectedPC a b c d e f-\u003ed-\u003eAspect a b c e f",
          "package": "effective-aspects",
          "partial": "Aspect",
          "signature": "ProtectedPC m a b t c d-\u003et-\u003eAspect m a b c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-ProtectedPointcuts.html#v:pAspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical and combinator for protected pointcuts\n\u003c/p\u003e",
          "module": "AOP.ProtectedPointcuts",
          "name": "ppcAnd",
          "package": "effective-aspects",
          "signature": "ProtectedPC m a b t c d -\u003e ProtectedPC m a b t c d -\u003e ProtectedPC m a b t c d",
          "source": "src/AOP-ProtectedPointcuts.html#ppcAnd",
          "type": "function"
        },
        "index": {
          "description": "Logical and combinator for protected pointcuts",
          "hierarchy": "AOP ProtectedPointcuts",
          "module": "AOP.ProtectedPointcuts",
          "name": "ppcAnd",
          "normalized": "ProtectedPC a b c d e f-\u003eProtectedPC a b c d e f-\u003eProtectedPC a b c d e f",
          "package": "effective-aspects",
          "partial": "And",
          "signature": "ProtectedPC m a b t c d-\u003eProtectedPC m a b t c d-\u003eProtectedPC m a b t c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-ProtectedPointcuts.html#v:ppcAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical or combinator for protected pointcuts\n\u003c/p\u003e",
          "module": "AOP.ProtectedPointcuts",
          "name": "ppcOr",
          "package": "effective-aspects",
          "signature": "ProtectedPC m a b t a' b' -\u003e ProtectedPC m c d t a' b' -\u003e ProtectedPC m agen bgen t a' b'",
          "source": "src/AOP-ProtectedPointcuts.html#ppcOr",
          "type": "function"
        },
        "index": {
          "description": "Logical or combinator for protected pointcuts",
          "hierarchy": "AOP ProtectedPointcuts",
          "module": "AOP.ProtectedPointcuts",
          "name": "ppcOr",
          "normalized": "ProtectedPC a b c d e f-\u003eProtectedPC a g h d e f-\u003eProtectedPC a i j d e f",
          "package": "effective-aspects",
          "partial": "Or",
          "signature": "ProtectedPC m a b t a' b'-\u003eProtectedPC m c d t a' b'-\u003eProtectedPC m agen bgen t a' b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-ProtectedPointcuts.html#v:ppcOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AOP.ProtectedPointcuts",
          "name": "protectPC",
          "package": "effective-aspects",
          "signature": "PC m a b -\u003e Combinator t m c d -\u003e ProtectedPC m a b t c d",
          "source": "src/AOP-ProtectedPointcuts.html#protectPC",
          "type": "function"
        },
        "index": {
          "hierarchy": "AOP ProtectedPointcuts",
          "module": "AOP.ProtectedPointcuts",
          "name": "protectPC",
          "normalized": "PC a b c-\u003eCombinator d a e f-\u003eProtectedPC a b c d e f",
          "package": "effective-aspects",
          "partial": "PC",
          "signature": "PC m a b-\u003eCombinator t m c d-\u003eProtectedPC m a b t c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effective-aspects/docs/AOP-ProtectedPointcuts.html#v:protectPC"
      }
    }
  ]
]