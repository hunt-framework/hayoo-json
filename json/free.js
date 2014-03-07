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
        "word": "free"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLeft distributive \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e functors for free, based on a design\n by Stijn van Drongelen.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Alternative.Free",
          "name": "Free",
          "package": "free",
          "source": "src/Control-Alternative-Free.html",
          "type": "module"
        },
        "index": {
          "description": "Left distributive Alternative functors for free based on design by Stijn van Drongelen",
          "hierarchy": "Control Alternative Free",
          "module": "Control.Alternative.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe free \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Alternative.Free",
          "name": "Alt",
          "package": "free",
          "source": "src/Control-Alternative-Free.html#Alt",
          "type": "data"
        },
        "index": {
          "description": "The free Alternative for Functor",
          "hierarchy": "Control Alternative Free",
          "module": "Control.Alternative.Free",
          "name": "Alt",
          "package": "free",
          "partial": "Alt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#t:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Alternative.Free",
          "name": "Alt",
          "package": "free",
          "signature": "[Alt f a] -\u003e Alt f a",
          "source": "src/Control-Alternative-Free.html#Alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Alternative Free",
          "module": "Control.Alternative.Free",
          "name": "Alt",
          "normalized": "[Alt a b]-\u003eAlt a b",
          "package": "free",
          "partial": "Alt",
          "signature": "[Alt f a]-\u003eAlt f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Alternative.Free",
          "name": "Ap",
          "package": "free",
          "signature": "f a -\u003e Alt f (a -\u003e b) -\u003e Alt f b",
          "source": "src/Control-Alternative-Free.html#Alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Alternative Free",
          "module": "Control.Alternative.Free",
          "name": "Ap",
          "normalized": "a b-\u003eAlt a(b-\u003ec)-\u003eAlt a c",
          "package": "free",
          "partial": "Ap",
          "signature": "f a-\u003eAlt f(a-\u003eb)-\u003eAlt f b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:Ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Alternative.Free",
          "name": "Pure",
          "package": "free",
          "signature": "a -\u003e Alt f a",
          "source": "src/Control-Alternative-Free.html#Alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Alternative Free",
          "module": "Control.Alternative.Free",
          "name": "Pure",
          "normalized": "a-\u003eAlt b a",
          "package": "free",
          "partial": "Pure",
          "signature": "a-\u003eAlt f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e this gives a monoidal natural transformation from \u003ccode\u003eAlt f\u003c/code\u003e to \u003ccode\u003eAlt g\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Alternative.Free",
          "name": "hoistAlt",
          "package": "free",
          "signature": "(forall a.  f a -\u003e g a) -\u003e Alt f b -\u003e Alt g b",
          "source": "src/Control-Alternative-Free.html#hoistAlt",
          "type": "function"
        },
        "index": {
          "description": "Given natural transformation from to this gives monoidal natural transformation from Alt to Alt",
          "hierarchy": "Control Alternative Free",
          "module": "Control.Alternative.Free",
          "name": "hoistAlt",
          "normalized": "(a b c d-\u003ee d)-\u003eAlt c f-\u003eAlt e f",
          "package": "free",
          "partial": "Alt",
          "signature": "(forall a. f a-\u003eg a)-\u003eAlt f b-\u003eAlt g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:hoistAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003elift\u003c/code\u003e that can be used with just a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Alternative.Free",
          "name": "liftAlt",
          "package": "free",
          "signature": "f a -\u003e Alt f a",
          "source": "src/Control-Alternative-Free.html#liftAlt",
          "type": "function"
        },
        "index": {
          "description": "version of lift that can be used with just Functor for",
          "hierarchy": "Control Alternative Free",
          "module": "Control.Alternative.Free",
          "name": "liftAlt",
          "normalized": "a b-\u003eAlt a b",
          "package": "free",
          "partial": "Alt",
          "signature": "f a-\u003eAlt f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:liftAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e, this gives a canonical monoidal natural transformation from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Alternative.Free",
          "name": "runAlt",
          "package": "free",
          "signature": "(forall x.  f x -\u003e g x) -\u003e Alt f a -\u003e g a",
          "source": "src/Control-Alternative-Free.html#runAlt",
          "type": "function"
        },
        "index": {
          "description": "Given natural transformation from to this gives canonical monoidal natural transformation from Alt to",
          "hierarchy": "Control Alternative Free",
          "module": "Control.Alternative.Free",
          "name": "runAlt",
          "normalized": "(a b c d-\u003ee d)-\u003eAlt c f-\u003ee f",
          "package": "free",
          "partial": "Alt",
          "signature": "(forall x. f x-\u003eg x)-\u003eAlt f a-\u003eg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:runAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e functors for free\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Applicative.Free",
          "name": "Free",
          "package": "free",
          "source": "src/Control-Applicative-Free.html",
          "type": "module"
        },
        "index": {
          "description": "Applicative functors for free",
          "hierarchy": "Control Applicative Free",
          "module": "Control.Applicative.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe free \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Applicative.Free",
          "name": "Ap",
          "package": "free",
          "source": "src/Control-Applicative-Free.html#Ap",
          "type": "data"
        },
        "index": {
          "description": "The free Applicative for Functor",
          "hierarchy": "Control Applicative Free",
          "module": "Control.Applicative.Free",
          "name": "Ap",
          "package": "free",
          "partial": "Ap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#t:Ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Free",
          "name": "Ap",
          "package": "free",
          "signature": "f a -\u003e Ap f (a -\u003e b) -\u003e Ap f b",
          "source": "src/Control-Applicative-Free.html#Ap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Applicative Free",
          "module": "Control.Applicative.Free",
          "name": "Ap",
          "normalized": "a b-\u003eAp a(b-\u003ec)-\u003eAp a c",
          "package": "free",
          "partial": "Ap",
          "signature": "f a-\u003eAp f(a-\u003eb)-\u003eAp f b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:Ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Free",
          "name": "Pure",
          "package": "free",
          "signature": "a -\u003e Ap f a",
          "source": "src/Control-Applicative-Free.html#Ap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Applicative Free",
          "module": "Control.Applicative.Free",
          "name": "Pure",
          "normalized": "a-\u003eAp b a",
          "package": "free",
          "partial": "Pure",
          "signature": "a-\u003eAp f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e this gives a monoidal natural transformation from \u003ccode\u003eAp f\u003c/code\u003e to \u003ccode\u003eAp g\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Applicative.Free",
          "name": "hoistAp",
          "package": "free",
          "signature": "(forall a.  f a -\u003e g a) -\u003e Ap f b -\u003e Ap g b",
          "source": "src/Control-Applicative-Free.html#hoistAp",
          "type": "function"
        },
        "index": {
          "description": "Given natural transformation from to this gives monoidal natural transformation from Ap to Ap",
          "hierarchy": "Control Applicative Free",
          "module": "Control.Applicative.Free",
          "name": "hoistAp",
          "normalized": "(a b c d-\u003ee d)-\u003eAp c f-\u003eAp e f",
          "package": "free",
          "partial": "Ap",
          "signature": "(forall a. f a-\u003eg a)-\u003eAp f b-\u003eAp g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:hoistAp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003elift\u003c/code\u003e that can be used with just a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Applicative.Free",
          "name": "liftAp",
          "package": "free",
          "signature": "f a -\u003e Ap f a",
          "source": "src/Control-Applicative-Free.html#liftAp",
          "type": "function"
        },
        "index": {
          "description": "version of lift that can be used with just Functor for",
          "hierarchy": "Control Applicative Free",
          "module": "Control.Applicative.Free",
          "name": "liftAp",
          "normalized": "a b-\u003eAp a b",
          "package": "free",
          "partial": "Ap",
          "signature": "f a-\u003eAp f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:liftAp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Free",
          "name": "retractAp",
          "package": "free",
          "signature": "Ap f a -\u003e f a",
          "source": "src/Control-Applicative-Free.html#retractAp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Applicative Free",
          "module": "Control.Applicative.Free",
          "name": "retractAp",
          "normalized": "Ap a b-\u003ea b",
          "package": "free",
          "partial": "Ap",
          "signature": "Ap f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:retractAp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e, this gives a canonical monoidal natural transformation from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAp\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Applicative.Free",
          "name": "runAp",
          "package": "free",
          "signature": "(forall x.  f x -\u003e g x) -\u003e Ap f a -\u003e g a",
          "source": "src/Control-Applicative-Free.html#runAp",
          "type": "function"
        },
        "index": {
          "description": "Given natural transformation from to this gives canonical monoidal natural transformation from Ap to",
          "hierarchy": "Control Applicative Free",
          "module": "Control.Applicative.Free",
          "name": "runAp",
          "normalized": "(a b c d-\u003ee d)-\u003eAp c f-\u003ee f",
          "package": "free",
          "partial": "Ap",
          "signature": "(forall x. f x-\u003eg x)-\u003eAp f a-\u003eg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:runAp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Cofree.Class",
          "name": "Class",
          "package": "free",
          "source": "src/Control-Comonad-Cofree-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Comonad Cofree Class",
          "module": "Control.Comonad.Cofree.Class",
          "name": "Class",
          "package": "free",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to peel a layer off a cofree comonad.\n\u003c/p\u003e",
          "module": "Control.Comonad.Cofree.Class",
          "name": "ComonadCofree",
          "package": "free",
          "source": "src/Control-Comonad-Cofree-Class.html#ComonadCofree",
          "type": "class"
        },
        "index": {
          "description": "Allows you to peel layer off cofree comonad",
          "hierarchy": "Control Comonad Cofree Class",
          "module": "Control.Comonad.Cofree.Class",
          "name": "ComonadCofree",
          "package": "free",
          "partial": "Comonad Cofree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree-Class.html#t:ComonadCofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a layer.\n\u003c/p\u003e",
          "module": "Control.Comonad.Cofree.Class",
          "name": "unwrap",
          "package": "free",
          "signature": "w a -\u003e f (w a)",
          "source": "src/Control-Comonad-Cofree-Class.html#unwrap",
          "type": "method"
        },
        "index": {
          "description": "Remove layer",
          "hierarchy": "Control Comonad Cofree Class",
          "module": "Control.Comonad.Cofree.Class",
          "name": "unwrap",
          "normalized": "a b-\u003ec(a b)",
          "package": "free",
          "signature": "w a-\u003ef(w a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree-Class.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCofree comonads\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "Cofree",
          "package": "free",
          "source": "src/Control-Comonad-Cofree.html",
          "type": "module"
        },
        "index": {
          "description": "Cofree comonads",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "Cofree",
          "package": "free",
          "partial": "Cofree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e of a functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFormally\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ev\u003c/code\u003e is a cofree \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e if every comonad homomorphism\n another comonad \u003ccode\u003ew\u003c/code\u003e to \u003ccode\u003ev\u003c/code\u003e is equivalent to a natural transformation\n from \u003ccode\u003ew\u003c/code\u003e to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003ecofree\u003c/code\u003e functor is right adjoint to a forgetful functor.\n\u003c/p\u003e\u003cp\u003eCofree is a functor from the category of functors to the category of comonads\n that is right adjoint to the forgetful functor from the category of comonads\n to the category of functors that forgets how to \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eduplicate\u003c/a\u003e\u003c/code\u003e, leaving you with only a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn practice, cofree comonads are quite useful for annotating syntax trees,\n or talking about streams.\n\u003c/p\u003e\u003cp\u003eA number of common comonads arise directly as cofree comonads.\n\u003c/p\u003e\u003cp\u003eFor instance,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e forms the a comonad for a non-empty list.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eConst\u003c/a\u003e\u003c/code\u003e b)\u003c/code\u003e is a product.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIdentity\u003c/code\u003e\u003c/code\u003e forms an infinite stream.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e ((-\u003e) b)'\u003c/code\u003e describes a Moore machine with states labeled with values of type a, and transitions on edges of type b.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "Cofree",
          "package": "free",
          "source": "src/Control-Comonad-Cofree.html#Cofree",
          "type": "data"
        },
        "index": {
          "description": "The Cofree Comonad of functor Formally Comonad is cofree Comonad for if every comonad homomorphism another comonad to is equivalent to natural transformation from to cofree functor is right adjoint to forgetful functor Cofree is functor from the category of functors to the category of comonads that is right adjoint to the forgetful functor from the category of comonads to the category of functors that forgets how to extract and duplicate leaving you with only Functor In practice cofree comonads are quite useful for annotating syntax trees or talking about streams number of common comonads arise directly as cofree comonads For instance Cofree Maybe forms the comonad for non-empty list Cofree Const is product Cofree Identity forms an infinite stream Cofree describes Moore machine with states labeled with values of type and transitions on edges of type",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "Cofree",
          "package": "free",
          "partial": "Cofree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#t:Cofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to peel a layer off a cofree comonad.\n\u003c/p\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "ComonadCofree",
          "package": "free",
          "source": "src/Control-Comonad-Cofree-Class.html#ComonadCofree",
          "type": "class"
        },
        "index": {
          "description": "Allows you to peel layer off cofree comonad",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "ComonadCofree",
          "package": "free",
          "partial": "Comonad Cofree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#t:ComonadCofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Cofree",
          "name": ":\u003c",
          "package": "free",
          "signature": "a :\u003c (f (Cofree f a))",
          "source": "src/Control-Comonad-Cofree.html#Cofree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": ":\u003c",
          "package": "free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a lens that can be used to read or write from the target of \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing (^.) from the \u003ccode\u003elens\u003c/code\u003e package:\n\u003c/p\u003e\u003cpre\u003efoo ^. \u003ccode\u003e\u003ca\u003e_extract\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e foo\u003c/pre\u003e\u003cp\u003eFor more on lenses see the \u003ccode\u003elens\u003c/code\u003e package on hackage\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_extract\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a) a\u003c/pre\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "_extract",
          "package": "free",
          "signature": "(a -\u003e f a) -\u003e Cofree g a -\u003e f (Cofree g a)",
          "source": "src/Control-Comonad-Cofree.html#_extract",
          "type": "function"
        },
        "index": {
          "description": "This is lens that can be used to read or write from the target of extract Using from the lens package foo extract extract foo For more on lenses see the lens package on hackage extract Lens Cofree",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "_extract",
          "normalized": "(a-\u003eb a)-\u003eCofree c a-\u003eb(Cofree c a)",
          "package": "free",
          "signature": "(a-\u003ef a)-\u003eCofree g a-\u003ef(Cofree g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:_extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a lens that can be used to read or write to the tails of a \u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing (^.) from the \u003ccode\u003elens\u003c/code\u003e package:\n\u003c/p\u003e\u003cpre\u003efoo ^. \u003ccode\u003e\u003ca\u003e_unwrap\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunwrap\u003c/a\u003e\u003c/code\u003e foo\u003c/pre\u003e\u003cp\u003eFor more on lenses see the \u003ccode\u003elens\u003c/code\u003e package on hackage\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_unwrap\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a) (g (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a))\u003c/pre\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "_unwrap",
          "package": "free",
          "signature": "(g (Cofree g a) -\u003e f (g (Cofree g a))) -\u003e Cofree g a -\u003e f (Cofree g a)",
          "source": "src/Control-Comonad-Cofree.html#_unwrap",
          "type": "function"
        },
        "index": {
          "description": "This is lens that can be used to read or write to the tails of Cofree Comonad Using from the lens package foo unwrap unwrap foo For more on lenses see the lens package on hackage unwrap Lens Cofree Cofree",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "_unwrap",
          "normalized": "(a(Cofree a b)-\u003ec(a(Cofree a b)))-\u003eCofree a b-\u003ec(Cofree a b)",
          "package": "free",
          "signature": "(g(Cofree g a)-\u003ef(g(Cofree g a)))-\u003eCofree g a-\u003ef(Cofree g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:_unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse coiteration to generate a cofree comonad from a seed.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecoiter\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e f)\u003c/pre\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "coiter",
          "package": "free",
          "signature": "(a -\u003e f a) -\u003e a -\u003e Cofree f a",
          "source": "src/Control-Comonad-Cofree.html#coiter",
          "type": "function"
        },
        "index": {
          "description": "Use coiteration to generate cofree comonad from seed coiter unfold id",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "coiter",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eCofree b a",
          "package": "free",
          "signature": "(a-\u003ef a)-\u003ea-\u003eCofree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:coiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003elower\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esection\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "section",
          "package": "free",
          "signature": "f a -\u003e Cofree f a",
          "source": "src/Control-Comonad-Cofree.html#section",
          "type": "function"
        },
        "index": {
          "description": "lower section id",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "section",
          "normalized": "a b-\u003eCofree a b",
          "package": "free",
          "signature": "f a-\u003eCofree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003eLens\u003c/code\u003e into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e given a list of lenses into the base functor.\n\u003c/p\u003e\u003cp\u003eFor more on lenses see the \u003ccode\u003elens\u003c/code\u003e package on hackage.\n\u003c/p\u003e\u003cpre\u003etelescoped :: \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e g =\u003e [Lens' (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a) (g (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a))] -\u003e Lens' (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a) a\u003c/pre\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "telescoped",
          "package": "free",
          "signature": "[(Cofree g a -\u003e f (Cofree g a)) -\u003e g (Cofree g a) -\u003e f (g (Cofree g a))] -\u003e (a -\u003e f a) -\u003e Cofree g a -\u003e f (Cofree g a)",
          "source": "src/Control-Comonad-Cofree.html#telescoped",
          "type": "function"
        },
        "index": {
          "description": "Construct Lens into Cofree given list of lenses into the base functor For more on lenses see the lens package on hackage telescoped Functor Lens Cofree Cofree Lens Cofree",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "telescoped",
          "normalized": "[(Cofree a b-\u003ec(Cofree a b))-\u003ea(Cofree a b)-\u003ec(a(Cofree a b))]-\u003e(b-\u003ec b)-\u003eCofree a b-\u003ec(Cofree a b)",
          "package": "free",
          "signature": "[(Cofree g a-\u003ef(Cofree g a))-\u003eg(Cofree g a)-\u003ef(g(Cofree g a))]-\u003e(a-\u003ef a)-\u003eCofree g a-\u003ef(Cofree g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:telescoped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold a cofree comonad from a seed.\n\u003c/p\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "unfold",
          "package": "free",
          "signature": "(b -\u003e (a, f b)) -\u003e b -\u003e Cofree f a",
          "source": "src/Control-Comonad-Cofree.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "Unfold cofree comonad from seed",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "unfold",
          "normalized": "(a-\u003e(b,c a))-\u003ea-\u003eCofree c b",
          "package": "free",
          "signature": "(b-\u003e(a,f b))-\u003eb-\u003eCofree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a layer.\n\u003c/p\u003e",
          "module": "Control.Comonad.Cofree",
          "name": "unwrap",
          "package": "free",
          "signature": "w a -\u003e f (w a)",
          "source": "src/Control-Comonad-Cofree-Class.html#unwrap",
          "type": "method"
        },
        "index": {
          "description": "Remove layer",
          "hierarchy": "Control Comonad Cofree",
          "module": "Control.Comonad.Cofree",
          "name": "unwrap",
          "normalized": "a b-\u003ec(a b)",
          "package": "free",
          "signature": "w a-\u003ef(w a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe cofree comonad transformer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "Cofree",
          "package": "free",
          "source": "src/Control-Comonad-Trans-Cofree.html",
          "type": "module"
        },
        "index": {
          "description": "The cofree comonad transformer",
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "Cofree",
          "package": "free",
          "partial": "Cofree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the base functor of the cofree comonad transformer.\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "CofreeF",
          "package": "free",
          "source": "src/Control-Comonad-Trans-Cofree.html#CofreeF",
          "type": "data"
        },
        "index": {
          "description": "This is the base functor of the cofree comonad transformer",
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "CofreeF",
          "package": "free",
          "partial": "Cofree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#t:CofreeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a cofree comonad of some functor \u003ccode\u003ef\u003c/code\u003e, with a comonad \u003ccode\u003ew\u003c/code\u003e threaded through it at each level.\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "CofreeT",
          "package": "free",
          "source": "src/Control-Comonad-Trans-Cofree.html#CofreeT",
          "type": "newtype"
        },
        "index": {
          "description": "This is cofree comonad of some functor with comonad threaded through it at each level",
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "CofreeT",
          "package": "free",
          "partial": "Cofree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#t:CofreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to peel a layer off a cofree comonad.\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "ComonadCofree",
          "package": "free",
          "source": "src/Control-Comonad-Cofree-Class.html#ComonadCofree",
          "type": "class"
        },
        "index": {
          "description": "Allows you to peel layer off cofree comonad",
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "ComonadCofree",
          "package": "free",
          "partial": "Comonad Cofree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#t:ComonadCofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Cofree",
          "name": ":\u003c",
          "package": "free",
          "signature": "a :\u003c (f b)",
          "source": "src/Control-Comonad-Trans-Cofree.html#CofreeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": ":\u003c",
          "package": "free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Cofree",
          "name": "CofreeT",
          "package": "free",
          "signature": "CofreeT",
          "source": "src/Control-Comonad-Trans-Cofree.html#CofreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "CofreeT",
          "package": "free",
          "partial": "Cofree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:CofreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Cofree",
          "name": "cofree",
          "package": "free",
          "signature": "CofreeF f a (Cofree f a) -\u003e Cofree f a",
          "source": "src/Control-Comonad-Trans-Cofree.html#cofree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "cofree",
          "normalized": "CofreeF a b(Cofree a b)-\u003eCofree a b",
          "package": "free",
          "signature": "CofreeF f a(Cofree f a)-\u003eCofree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:cofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold a \u003ccode\u003eCofreeT\u003c/code\u003e comonad transformer from a coalgebra and an initial comonad.\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "coiterT",
          "package": "free",
          "signature": "(w a -\u003e f (w a)) -\u003e w a -\u003e CofreeT f w a",
          "source": "src/Control-Comonad-Trans-Cofree.html#coiterT",
          "type": "function"
        },
        "index": {
          "description": "Unfold CofreeT comonad transformer from coalgebra and an initial comonad",
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "coiterT",
          "normalized": "(a b-\u003ec(a b))-\u003ea b-\u003eCofreeT c a b",
          "package": "free",
          "signature": "(w a-\u003ef(w a))-\u003ew a-\u003eCofreeT f w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:coiterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the head of the base functor\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "headF",
          "package": "free",
          "signature": "CofreeF f a b -\u003e a",
          "source": "src/Control-Comonad-Trans-Cofree.html#headF",
          "type": "function"
        },
        "index": {
          "description": "Extract the head of the base functor",
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "headF",
          "normalized": "CofreeF a b c-\u003eb",
          "package": "free",
          "signature": "CofreeF f a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:headF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Cofree",
          "name": "runCofree",
          "package": "free",
          "signature": "Cofree f a -\u003e CofreeF f a (Cofree f a)",
          "source": "src/Control-Comonad-Trans-Cofree.html#runCofree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "runCofree",
          "normalized": "Cofree a b-\u003eCofreeF a b(Cofree a b)",
          "package": "free",
          "partial": "Cofree",
          "signature": "Cofree f a-\u003eCofreeF f a(Cofree f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:runCofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Cofree",
          "name": "runCofreeT",
          "package": "free",
          "signature": "w (CofreeF f a (CofreeT f w a))",
          "source": "src/Control-Comonad-Trans-Cofree.html#CofreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "runCofreeT",
          "package": "free",
          "partial": "Cofree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:runCofreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the tails of the base functor\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "tailF",
          "package": "free",
          "signature": "CofreeF f a b -\u003e f b",
          "source": "src/Control-Comonad-Trans-Cofree.html#tailF",
          "type": "function"
        },
        "index": {
          "description": "Extract the tails of the base functor",
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "tailF",
          "normalized": "CofreeF a b c-\u003ea c",
          "package": "free",
          "signature": "CofreeF f a b-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:tailF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a layer.\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "unwrap",
          "package": "free",
          "signature": "w a -\u003e f (w a)",
          "source": "src/Control-Comonad-Cofree-Class.html#unwrap",
          "type": "method"
        },
        "index": {
          "description": "Remove layer",
          "hierarchy": "Control Comonad Trans Cofree",
          "module": "Control.Comonad.Trans.Cofree",
          "name": "unwrap",
          "normalized": "a b-\u003ec(a b)",
          "package": "free",
          "signature": "w a-\u003ef(w a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe coiterative comonad generated by a comonad\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "Coiter",
          "package": "free",
          "source": "src/Control-Comonad-Trans-Coiter.html",
          "type": "module"
        },
        "index": {
          "description": "The coiterative comonad generated by comonad",
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "Coiter",
          "package": "free",
          "partial": "Coiter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe coiterative comonad\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "Coiter",
          "package": "free",
          "source": "src/Control-Comonad-Trans-Coiter.html#Coiter",
          "type": "type"
        },
        "index": {
          "description": "The coiterative comonad",
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "Coiter",
          "package": "free",
          "partial": "Coiter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#t:Coiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the coiterative comonad generated by a comonad\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "CoiterT",
          "package": "free",
          "source": "src/Control-Comonad-Trans-Coiter.html#CoiterT",
          "type": "newtype"
        },
        "index": {
          "description": "This is the coiterative comonad generated by comonad",
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "CoiterT",
          "package": "free",
          "partial": "Coiter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#t:CoiterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to peel a layer off a cofree comonad.\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "ComonadCofree",
          "package": "free",
          "source": "src/Control-Comonad-Cofree-Class.html#ComonadCofree",
          "type": "class"
        },
        "index": {
          "description": "Allows you to peel layer off cofree comonad",
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "ComonadCofree",
          "package": "free",
          "partial": "Comonad Cofree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#t:ComonadCofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Coiter",
          "name": "CoiterT",
          "package": "free",
          "signature": "CoiterT",
          "source": "src/Control-Comonad-Trans-Coiter.html#CoiterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "CoiterT",
          "package": "free",
          "partial": "Coiter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:CoiterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Coiter",
          "name": "coiter",
          "package": "free",
          "signature": "a -\u003e Coiter a -\u003e Coiter a",
          "source": "src/Control-Comonad-Trans-Coiter.html#coiter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "coiter",
          "normalized": "a-\u003eCoiter a-\u003eCoiter a",
          "package": "free",
          "signature": "a-\u003eCoiter a-\u003eCoiter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:coiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Coiter",
          "name": "runCoiter",
          "package": "free",
          "signature": "Coiter a -\u003e (a, Coiter a)",
          "source": "src/Control-Comonad-Trans-Coiter.html#runCoiter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "runCoiter",
          "normalized": "Coiter a-\u003e(a,Coiter a)",
          "package": "free",
          "partial": "Coiter",
          "signature": "Coiter a-\u003e(a,Coiter a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:runCoiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Coiter",
          "name": "runCoiterT",
          "package": "free",
          "signature": "w (a, CoiterT w a)",
          "source": "src/Control-Comonad-Trans-Coiter.html#CoiterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "runCoiterT",
          "normalized": "a(b,CoiterT a b)",
          "package": "free",
          "partial": "Coiter",
          "signature": "w(a,CoiterT w a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:runCoiterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold a \u003ccode\u003eCoiterT\u003c/code\u003e comonad transformer from a cokleisli arrow and an initial comonadic seed.\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "unfold",
          "package": "free",
          "signature": "(w a -\u003e a) -\u003e w a -\u003e CoiterT w a",
          "source": "src/Control-Comonad-Trans-Coiter.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "Unfold CoiterT comonad transformer from cokleisli arrow and an initial comonadic seed",
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "unfold",
          "normalized": "(a b-\u003eb)-\u003ea b-\u003eCoiterT a b",
          "package": "free",
          "signature": "(w a-\u003ea)-\u003ew a-\u003eCoiterT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a layer.\n\u003c/p\u003e",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "unwrap",
          "package": "free",
          "signature": "w a -\u003e f (w a)",
          "source": "src/Control-Comonad-Cofree-Class.html#unwrap",
          "type": "method"
        },
        "index": {
          "description": "Remove layer",
          "hierarchy": "Control Comonad Trans Coiter",
          "module": "Control.Comonad.Trans.Coiter",
          "name": "unwrap",
          "normalized": "a b-\u003ec(a b)",
          "package": "free",
          "signature": "w a-\u003ef(w a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"Free Monads for Less\"\n\u003c/p\u003e\u003cp\u003eThis is based on the \"Free Monads for Less\" series of articles:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less/\u003c/a\u003e\n \u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less-2/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Free.Church",
          "name": "Church",
          "package": "free",
          "source": "src/Control-Monad-Free-Church.html",
          "type": "module"
        },
        "index": {
          "description": "Free Monads for Less This is based on the Free Monads for Less series of articles http comonad.com reader free-monads-for-less http comonad.com reader free-monads-for-less-2",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "Church",
          "package": "free",
          "partial": "Church",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Church-encoded free monad for a functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is \u003cem\u003easymptotically\u003c/em\u003e more efficient to use (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) for \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e than it is to (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) with \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less-2/\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Free.Church",
          "name": "F",
          "package": "free",
          "source": "src/Control-Monad-Free-Church.html#F",
          "type": "newtype"
        },
        "index": {
          "description": "The Church-encoded free monad for functor It is asymptotically more efficient to use for than it is to with Free http comonad.com reader free-monads-for-less-2",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "F",
          "package": "free",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Free.Church",
          "name": "MonadFree",
          "package": "free",
          "source": "src/Control-Monad-Free-Class.html#MonadFree",
          "type": "class"
        },
        "index": {
          "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "MonadFree",
          "package": "free",
          "partial": "Monad Free",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#t:MonadFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free.Church",
          "name": "F",
          "package": "free",
          "signature": "F",
          "source": "src/Control-Monad-Free-Church.html#F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "F",
          "package": "free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to another free monad representation.\n\u003c/p\u003e",
          "module": "Control.Monad.Free.Church",
          "name": "fromF",
          "package": "free",
          "signature": "F f a -\u003e m a",
          "source": "src/Control-Monad-Free-Church.html#fromF",
          "type": "function"
        },
        "index": {
          "description": "Convert to another free monad representation",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "fromF",
          "normalized": "F a b-\u003ec b",
          "package": "free",
          "signature": "F f a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:fromF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImprove the asymptotic performance of code that builds a free monad with only binds and returns by using \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e behind the scenes.\n\u003c/p\u003e\u003cp\u003eThis is based on the \"Free Monads for Less\" series of articles by Edward Kmett:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less/\u003c/a\u003e\n \u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less-2/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eand \"Asymptotic Improvement of Computations over Free Monads\" by Janis Voightl&#228;nder:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.iai.uni-bonn.de/~jv/mpc08.pdf\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Free.Church",
          "name": "improve",
          "package": "free",
          "signature": "m a) -\u003e Free f a",
          "source": "src/Control-Monad-Free-Church.html#improve",
          "type": "function"
        },
        "index": {
          "description": "Improve the asymptotic performance of code that builds free monad with only binds and returns by using behind the scenes This is based on the Free Monads for Less series of articles by Edward Kmett http comonad.com reader free-monads-for-less http comonad.com reader free-monads-for-less-2 and Asymptotic Improvement of Computations over Free Monads by Janis Voightl nder http www.iai.uni-bonn.de jv mpc08.pdf",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "improve",
          "normalized": "a b)-\u003eFree c b",
          "package": "free",
          "signature": "m a)-\u003eFree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:improve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike iter for monadic values.\n\u003c/p\u003e",
          "module": "Control.Monad.Free.Church",
          "name": "iterM",
          "package": "free",
          "signature": "(f (m a) -\u003e m a) -\u003e F f a -\u003e m a",
          "source": "src/Control-Monad-Free-Church.html#iterM",
          "type": "function"
        },
        "index": {
          "description": "Like iter for monadic values",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "iterM",
          "normalized": "(a(b c)-\u003eb c)-\u003eF a c-\u003eb c",
          "package": "free",
          "signature": "(f(m a)-\u003em a)-\u003eF f a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:iterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of lift that can be used with just a Functor for f.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Free.Church\",\"Control.Monad.Free.Class\",\"Control.Monad.Free\",\"Control.Monad.Trans.Free\",\"Control.MonadPlus.Free\"]",
          "name": "liftF",
          "package": "free",
          "signature": "f a -\u003e m a",
          "source": "src/Control-Monad-Free-Class.html#liftF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:liftF\",\"http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#v:liftF\",\"http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:liftF\",\"http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:liftF\",\"http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:liftF\"]"
        },
        "index": {
          "description": "version of lift that can be used with just Functor for",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "liftF",
          "normalized": "a b-\u003ec b",
          "package": "free",
          "signature": "f a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:liftF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Control.Monad.Free.Church",
          "name": "retract",
          "package": "free",
          "signature": "F m a -\u003e m a",
          "source": "src/Control-Monad-Free-Church.html#retract",
          "type": "function"
        },
        "index": {
          "description": "retract is the left inverse of lift and liftF retract lift id retract liftF id",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "retract",
          "normalized": "F a b-\u003ea b",
          "package": "free",
          "signature": "F m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:retract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free.Church",
          "name": "runF",
          "package": "free",
          "signature": "forall r.  (a -\u003e r) -\u003e (f r -\u003e r) -\u003e r",
          "source": "src/Control-Monad-Free-Church.html#F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "runF",
          "normalized": "a b(c-\u003ed)-\u003e(e d-\u003ed)-\u003ed",
          "package": "free",
          "signature": "forall r.(a-\u003er)-\u003e(f r-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:runF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Church-encoded free monad from a \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Free.Church",
          "name": "toF",
          "package": "free",
          "signature": "Free f a -\u003e F f a",
          "source": "src/Control-Monad-Free-Church.html#toF",
          "type": "function"
        },
        "index": {
          "description": "Generate Church-encoded free monad from Free monad",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "toF",
          "normalized": "Free a b-\u003eF a b",
          "package": "free",
          "signature": "Free f a-\u003eF f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:toF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
          "module": "Control.Monad.Free.Church",
          "name": "wrap",
          "package": "free",
          "signature": "f (m a) -\u003e m a",
          "source": "src/Control-Monad-Free-Class.html#wrap",
          "type": "method"
        },
        "index": {
          "description": "Add layer wrap fmap wrap fmap return",
          "hierarchy": "Control Monad Free Church",
          "module": "Control.Monad.Free.Church",
          "name": "wrap",
          "normalized": "a(b c)-\u003eb c",
          "package": "free",
          "signature": "f(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonads for free.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Free.Class",
          "name": "Class",
          "package": "free",
          "source": "src/Control-Monad-Free-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Monads for free",
          "hierarchy": "Control Monad Free Class",
          "module": "Control.Monad.Free.Class",
          "name": "Class",
          "package": "free",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Free.Class",
          "name": "MonadFree",
          "package": "free",
          "source": "src/Control-Monad-Free-Class.html#MonadFree",
          "type": "class"
        },
        "index": {
          "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
          "hierarchy": "Control Monad Free Class",
          "module": "Control.Monad.Free.Class",
          "name": "MonadFree",
          "package": "free",
          "partial": "Monad Free",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#t:MonadFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
          "module": "Control.Monad.Free.Class",
          "name": "wrap",
          "package": "free",
          "signature": "f (m a) -\u003e m a",
          "source": "src/Control-Monad-Free-Class.html#wrap",
          "type": "method"
        },
        "index": {
          "description": "Add layer wrap fmap wrap fmap return",
          "hierarchy": "Control Monad Free Class",
          "module": "Control.Monad.Free.Class",
          "name": "wrap",
          "normalized": "a(b c)-\u003eb c",
          "package": "free",
          "signature": "f(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of wrap for monad transformers over a free monad.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e that this is the default implementation for \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e for\n \u003ccode\u003eMonadFree f (t m)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Free.Class",
          "name": "wrapT",
          "package": "free",
          "signature": "f (t m a) -\u003e t m a",
          "source": "src/Control-Monad-Free-Class.html#wrapT",
          "type": "function"
        },
        "index": {
          "description": "version of wrap for monad transformers over free monad Note that this is the default implementation for wrap for MonadFree",
          "hierarchy": "Control Monad Free Class",
          "module": "Control.Monad.Free.Class",
          "name": "wrapT",
          "normalized": "a(b c d)-\u003eb c d",
          "package": "free",
          "signature": "f(t m a)-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#v:wrapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatic generation of free monadic actions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Free.TH",
          "name": "TH",
          "package": "free",
          "source": "src/Control-Monad-Free-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Automatic generation of free monadic actions",
          "hierarchy": "Control Monad Free TH",
          "module": "Control.Monad.Free.TH",
          "name": "TH",
          "package": "free",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e$(makeFree ''Type)\u003c/code\u003e provides free monadic actions for the\n constructors of the given type.\n\u003c/p\u003e",
          "module": "Control.Monad.Free.TH",
          "name": "makeFree",
          "package": "free",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Control-Monad-Free-TH.html#makeFree",
          "type": "function"
        },
        "index": {
          "description": "makeFree Type provides free monadic actions for the constructors of the given type",
          "hierarchy": "Control Monad Free TH",
          "module": "Control.Monad.Free.TH",
          "name": "makeFree",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "free",
          "partial": "Free",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-TH.html#v:makeFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonads for free\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "free",
          "source": "src/Control-Monad-Free.html",
          "type": "module"
        },
        "index": {
          "description": "Monads for free",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFormally\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e is a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e if every monad homomorphism\n from \u003ccode\u003en\u003c/code\u003e to another monad \u003ccode\u003em\u003c/code\u003e is equivalent to a natural transformation\n from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWhy Free?\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eEvery \"free\" functor is left adjoint to some \"forgetful\" functor.\n\u003c/p\u003e\u003cp\u003eIf we define a forgetful functor \u003ccode\u003eU\u003c/code\u003e from the category of monads to the category of functors\n that just forgets the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, leaving only the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e. i.e.\n\u003c/p\u003e\u003cpre\u003eU (M,\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e) = M\u003c/pre\u003e\u003cp\u003ethen \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e is the left adjoint to \u003ccode\u003eU\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBeing \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e being left adjoint to \u003ccode\u003eU\u003c/code\u003e means that there is an isomorphism between\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e f -\u003e m\u003c/code\u003e in the category of monads and \u003ccode\u003ef -\u003e U m\u003c/code\u003e in the category of functors.\n\u003c/p\u003e\u003cp\u003eMorphisms in the category of monads are \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e homomorphisms (natural transformations that respect \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eMorphisms in the category of functors are \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e homomorphisms (natural transformations).\n\u003c/p\u003e\u003cp\u003eGiven this isomorphism, every monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003em\u003c/code\u003e is equivalent to a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eShowing that this isomorphism holds is left as an exercise.\n\u003c/p\u003e\u003cp\u003eIn practice, you can just view a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e f a\u003c/code\u003e as many layers of \u003ccode\u003ef\u003c/code\u003e wrapped around values of type \u003ccode\u003ea\u003c/code\u003e, where\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e performs substitution and grafts new layers of \u003ccode\u003ef\u003c/code\u003e in for each of the free variables.\n\u003c/p\u003e\u003cp\u003eThis can be very useful for modeling domain specific languages, trees, or other constructs.\n\u003c/p\u003e\u003cp\u003eThis instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e is fairly naive about the encoding. For more efficient free monad implementation see \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e, in particular note the \u003ccode\u003e\u003ca\u003eimprove\u003c/a\u003e\u003c/code\u003e combinator.\n You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eA number of common monads arise as free monads,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Given \u003ccode\u003edata Empty a\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Empty\u003c/code\u003e is isomorphic to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e can be used to model a partiality monad where each layer represents running the computation for a while longer.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "free",
          "source": "src/Control-Monad-Free.html#Free",
          "type": "data"
        },
        "index": {
          "description": "The Free Monad for Functor Formally Monad is free Monad for if every monad homomorphism from to another monad is equivalent to natural transformation from to Why Free Every free functor is left adjoint to some forgetful functor If we define forgetful functor from the category of monads to the category of functors that just forgets the Monad leaving only the Functor i.e return join then Free is the left adjoint to Being Free being left adjoint to means that there is an isomorphism between Free in the category of monads and in the category of functors Morphisms in the category of monads are Monad homomorphisms natural transformations that respect return and join Morphisms in the category of functors are Functor homomorphisms natural transformations Given this isomorphism every monad homomorphism from Free to is equivalent to natural transformation from to Showing that this isomorphism holds is left as an exercise In practice you can just view Free as many layers of wrapped around values of type where performs substitution and grafts new layers of in for each of the free variables This can be very useful for modeling domain specific languages trees or other constructs This instance of MonadFree is fairly naive about the encoding For more efficient free monad implementation see Control.Monad.Free.Church in particular note the improve combinator You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions number of common monads arise as free monads Given data Empty Free Empty is isomorphic to the Identity monad Free Maybe can be used to model partiality monad where each layer represents running the computation for while longer",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#t:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Free",
          "name": "MonadFree",
          "package": "free",
          "source": "src/Control-Monad-Free-Class.html#MonadFree",
          "type": "class"
        },
        "index": {
          "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "MonadFree",
          "package": "free",
          "partial": "Monad Free",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#t:MonadFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "free",
          "signature": "Free (f (Free f a))",
          "source": "src/Control-Monad-Free.html#Free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "Pure",
          "package": "free",
          "signature": "Pure a",
          "source": "src/Control-Monad-Free.html#Free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "Pure",
          "package": "free",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is \u003ccode\u003ePrism' (Free f a) (f (Free f a))\u003c/code\u003e in disguise\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epreview _Free (review _Free (Just (Pure 3)))\n\u003c/code\u003e\u003c/strong\u003eJust (Just (Pure 3))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereview _Free (Just (Pure 3))\n\u003c/code\u003e\u003c/strong\u003eFree (Just (Pure 3))\n\u003c/pre\u003e",
          "module": "Control.Monad.Free",
          "name": "_Free",
          "package": "free",
          "signature": "p (f (Free f a)) (m (f (Free f a))) -\u003e p (Free f a) (m (Free f a))",
          "source": "src/Control-Monad-Free.html#_Free",
          "type": "function"
        },
        "index": {
          "description": "This is Prism Free Free in disguise preview Free review Free Just Pure Just Just Pure review Free Just Pure Free Just Pure",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "_Free",
          "normalized": "a(b(Free b c))(d(b(Free b c)))-\u003ea(Free b c)(d(Free b c))",
          "package": "free",
          "partial": "Free",
          "signature": "p(f(Free f a))(m(f(Free f a)))-\u003ep(Free f a)(m(Free f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:_Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is \u003ccode\u003ePrism' (Free f a) a\u003c/code\u003e in disguise\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epreview _Pure (Pure 3)\n\u003c/code\u003e\u003c/strong\u003eJust 3\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereview _Pure 3 :: Free Maybe Int\n\u003c/code\u003e\u003c/strong\u003ePure 3\n\u003c/pre\u003e",
          "module": "Control.Monad.Free",
          "name": "_Pure",
          "package": "free",
          "signature": "p a (m a) -\u003e p (Free f a) (m (Free f a))",
          "source": "src/Control-Monad-Free.html#_Pure",
          "type": "function"
        },
        "index": {
          "description": "This is Prism Free in disguise preview Pure Pure Just review Pure Free Maybe Int Pure",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "_Pure",
          "normalized": "a b(c b)-\u003ea(Free d b)(c(Free d b))",
          "package": "free",
          "partial": "Pure",
          "signature": "p a(m a)-\u003ep(Free f a)(m(Free f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:_Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e into a natural transformation from \u003ccode\u003e\u003ccode\u003eFreeT\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003eFreeT\u003c/code\u003e g\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Free",
          "name": "hoistFree",
          "package": "free",
          "signature": "(forall a.  f a -\u003e g a) -\u003e Free f b -\u003e Free g b",
          "source": "src/Control-Monad-Free.html#hoistFree",
          "type": "function"
        },
        "index": {
          "description": "Lift natural transformation from to into natural transformation from FreeT to FreeT",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "hoistFree",
          "normalized": "(a b c d-\u003ee d)-\u003eFree c f-\u003eFree e f",
          "package": "free",
          "partial": "Free",
          "signature": "(forall a. f a-\u003eg a)-\u003eFree f b-\u003eFree g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:hoistFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTear down a \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e using iteration.\n\u003c/p\u003e",
          "module": "Control.Monad.Free",
          "name": "iter",
          "package": "free",
          "signature": "(f a -\u003e a) -\u003e Free f a -\u003e a",
          "source": "src/Control-Monad-Free.html#iter",
          "type": "function"
        },
        "index": {
          "description": "Tear down Free Monad using iteration",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "iter",
          "normalized": "(a b-\u003eb)-\u003eFree a b-\u003eb",
          "package": "free",
          "signature": "(f a-\u003ea)-\u003eFree f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike iter for monadic values.\n\u003c/p\u003e",
          "module": "Control.Monad.Free",
          "name": "iterM",
          "package": "free",
          "signature": "(f (m a) -\u003e m a) -\u003e Free f a -\u003e m a",
          "source": "src/Control-Monad-Free.html#iterM",
          "type": "function"
        },
        "index": {
          "description": "Like iter for monadic values",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "iterM",
          "normalized": "(a(b c)-\u003eb c)-\u003eFree a c-\u003eb c",
          "package": "free",
          "signature": "(f(m a)-\u003em a)-\u003eFree f a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:iterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Control.Monad.Free",
          "name": "retract",
          "package": "free",
          "signature": "Free f a -\u003e f a",
          "source": "src/Control-Monad-Free.html#retract",
          "type": "function"
        },
        "index": {
          "description": "retract is the left inverse of lift and liftF retract lift id retract liftF id",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "retract",
          "normalized": "Free a b-\u003ea b",
          "package": "free",
          "signature": "Free f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:retract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
          "module": "Control.Monad.Free",
          "name": "wrap",
          "package": "free",
          "signature": "f (m a) -\u003e m a",
          "source": "src/Control-Monad-Free-Class.html#wrap",
          "type": "method"
        },
        "index": {
          "description": "Add layer wrap fmap wrap fmap return",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "wrap",
          "normalized": "a(b c)-\u003eb c",
          "package": "free",
          "signature": "f(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free.Church",
          "name": "Church",
          "package": "free",
          "source": "src/Control-Monad-Trans-Free-Church.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "Church",
          "package": "free",
          "partial": "Church",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"free monad\" for a functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "F",
          "package": "free",
          "source": "src/Control-Monad-Trans-Free-Church.html#F",
          "type": "type"
        },
        "index": {
          "description": "The free monad for functor",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "F",
          "package": "free",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"free monad transformer\" for a functor \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "FT",
          "package": "free",
          "source": "src/Control-Monad-Trans-Free-Church.html#FT",
          "type": "newtype"
        },
        "index": {
          "description": "The free monad transformer for functor",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "FT",
          "package": "free",
          "partial": "FT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#t:FT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "MonadFree",
          "package": "free",
          "source": "src/Control-Monad-Free-Class.html#MonadFree",
          "type": "class"
        },
        "index": {
          "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "MonadFree",
          "package": "free",
          "partial": "Monad Free",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#t:MonadFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free.Church",
          "name": "FT",
          "package": "free",
          "signature": "FT",
          "source": "src/Control-Monad-Trans-Free-Church.html#FT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "FT",
          "package": "free",
          "partial": "FT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:FT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free.Church",
          "name": "free",
          "package": "free",
          "signature": "(forall r.  (a -\u003e r) -\u003e (f r -\u003e r) -\u003e r) -\u003e F f a",
          "source": "src/Control-Monad-Trans-Free-Church.html#free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "free",
          "normalized": "(a b(c-\u003ed)-\u003e(e d-\u003ed)-\u003ed)-\u003eF e c",
          "package": "free",
          "signature": "(forall r.(a-\u003er)-\u003e(f r-\u003er)-\u003er)-\u003eF f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to another free monad representation.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "fromF",
          "package": "free",
          "signature": "F f a -\u003e m a",
          "source": "src/Control-Monad-Trans-Free-Church.html#fromF",
          "type": "function"
        },
        "index": {
          "description": "Convert to another free monad representation",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "fromF",
          "normalized": "F a b-\u003ec b",
          "package": "free",
          "signature": "F f a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:fromF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e free monad representation.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "fromFT",
          "package": "free",
          "signature": "FT f m a -\u003e FreeT f m a",
          "source": "src/Control-Monad-Trans-Free-Church.html#fromFT",
          "type": "function"
        },
        "index": {
          "description": "Convert to FreeT free monad representation",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "fromFT",
          "normalized": "FT a b c-\u003eFreeT a b c",
          "package": "free",
          "partial": "FT",
          "signature": "FT f m a-\u003eFreeT f m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:fromFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a monad homomorphism from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e into a monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFT\u003c/a\u003e\u003c/code\u003e f n\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ehoistFT\u003c/a\u003e\u003c/code\u003e :: (\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e n, \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e f) =\u003e (m ~\u003e n) -\u003e \u003ccode\u003e\u003ca\u003eFT\u003c/a\u003e\u003c/code\u003e f m ~\u003e \u003ccode\u003e\u003ca\u003eFT\u003c/a\u003e\u003c/code\u003e f n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "hoistFT",
          "package": "free",
          "signature": "(forall a.  m a -\u003e n a) -\u003e FT f m b -\u003e FT f n b",
          "source": "src/Control-Monad-Trans-Free-Church.html#hoistFT",
          "type": "function"
        },
        "index": {
          "description": "Lift monad homomorphism from to into monad homomorphism from FT to FT hoistFT Monad Monad Functor FT FT",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "hoistFT",
          "normalized": "(a b c d-\u003ee d)-\u003eFT f c g-\u003eFT f e g",
          "package": "free",
          "partial": "FT",
          "signature": "(forall a. m a-\u003en a)-\u003eFT f m b-\u003eFT f n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:hoistFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImprove the asymptotic performance of code that builds a free monad with only binds and returns by using \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e behind the scenes.\n\u003c/p\u003e\u003cp\u003eThis is based on the \"Free Monads for Less\" series of articles by Edward Kmett:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less/\u003c/a\u003e\n \u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less-2/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eand \"Asymptotic Improvement of Computations over Free Monads\" by Janis Voightl&#228;nder:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.iai.uni-bonn.de/~jv/mpc08.pdf\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "improve",
          "package": "free",
          "signature": "m a) -\u003e Free f a",
          "source": "src/Control-Monad-Trans-Free-Church.html#improve",
          "type": "function"
        },
        "index": {
          "description": "Improve the asymptotic performance of code that builds free monad with only binds and returns by using behind the scenes This is based on the Free Monads for Less series of articles by Edward Kmett http comonad.com reader free-monads-for-less http comonad.com reader free-monads-for-less-2 and Asymptotic Improvement of Computations over Free Monads by Janis Voightl nder http www.iai.uni-bonn.de jv mpc08.pdf",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "improve",
          "normalized": "a b)-\u003eFree c b",
          "package": "free",
          "signature": "m a)-\u003eFree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:improve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTear down an \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e using iteration.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "iter",
          "package": "free",
          "signature": "(f a -\u003e a) -\u003e F f a -\u003e a",
          "source": "src/Control-Monad-Trans-Free-Church.html#iter",
          "type": "function"
        },
        "index": {
          "description": "Tear down an Monad using iteration",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "iter",
          "normalized": "(a b-\u003eb)-\u003eF a b-\u003eb",
          "package": "free",
          "signature": "(f a-\u003ea)-\u003eF f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eiter\u003c/a\u003e\u003c/code\u003e for monadic values.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "iterM",
          "package": "free",
          "signature": "(f (m a) -\u003e m a) -\u003e F f a -\u003e m a",
          "source": "src/Control-Monad-Trans-Free-Church.html#iterM",
          "type": "function"
        },
        "index": {
          "description": "Like iter for monadic values",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "iterM",
          "normalized": "(a(b c)-\u003eb c)-\u003eF a c-\u003eb c",
          "package": "free",
          "signature": "(f(m a)-\u003em a)-\u003eF f a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:iterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTear down a free monad transformer using iteration.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "iterT",
          "package": "free",
          "signature": "(f (m a) -\u003e m a) -\u003e FT f m a -\u003e m a",
          "source": "src/Control-Monad-Trans-Free-Church.html#iterT",
          "type": "function"
        },
        "index": {
          "description": "Tear down free monad transformer using iteration",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "iterT",
          "normalized": "(a(b c)-\u003eb c)-\u003eFT a b c-\u003eb c",
          "package": "free",
          "signature": "(f(m a)-\u003em a)-\u003eFT f m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:iterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "retract",
          "package": "free",
          "signature": "F f a -\u003e f a",
          "source": "src/Control-Monad-Trans-Free-Church.html#retract",
          "type": "function"
        },
        "index": {
          "description": "retract is the left inverse of liftF retract liftF id",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "retract",
          "normalized": "F a b-\u003ea b",
          "package": "free",
          "signature": "F f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:retract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free.Church",
          "name": "runF",
          "package": "free",
          "signature": "F f a -\u003e forall r.  (a -\u003e r) -\u003e (f r -\u003e r) -\u003e r",
          "source": "src/Control-Monad-Trans-Free-Church.html#runF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "runF",
          "normalized": "F a b-\u003ec d(b-\u003ee)-\u003e(a e-\u003ee)-\u003ee",
          "package": "free",
          "signature": "F f a-\u003eforall r.(a-\u003er)-\u003e(f r-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:runF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free.Church",
          "name": "runFT",
          "package": "free",
          "signature": "forall r.  (a -\u003e m r) -\u003e (f (m r) -\u003e m r) -\u003e m r",
          "source": "src/Control-Monad-Trans-Free-Church.html#FT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "runFT",
          "normalized": "a b(c-\u003ed e)-\u003e(f(d e)-\u003ed e)-\u003ed e",
          "package": "free",
          "partial": "FT",
          "signature": "forall r.(a-\u003em r)-\u003e(f(m r)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:runFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Church-encoded free monad from a \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "toF",
          "package": "free",
          "signature": "Free f a -\u003e F f a",
          "source": "src/Control-Monad-Trans-Free-Church.html#toF",
          "type": "function"
        },
        "index": {
          "description": "Generate Church-encoded free monad from Free monad",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "toF",
          "normalized": "Free a b-\u003eF a b",
          "package": "free",
          "signature": "Free f a-\u003eF f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:toF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Church-encoded free monad transformer from a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e monad\n transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "toFT",
          "package": "free",
          "signature": "FreeT f m a -\u003e FT f m a",
          "source": "src/Control-Monad-Trans-Free-Church.html#toFT",
          "type": "function"
        },
        "index": {
          "description": "Generate Church-encoded free monad transformer from FreeT monad transformer",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "toFT",
          "normalized": "FreeT a b c-\u003eFT a b c",
          "package": "free",
          "partial": "FT",
          "signature": "FreeT f m a-\u003eFT f m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:toFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e into a monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFT\u003c/a\u003e\u003c/code\u003e g n\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "transFT",
          "package": "free",
          "signature": "(forall a.  f a -\u003e g a) -\u003e FT f m b -\u003e FT g m b",
          "source": "src/Control-Monad-Trans-Free-Church.html#transFT",
          "type": "function"
        },
        "index": {
          "description": "Lift natural transformation from to into monad homomorphism from FT to FT",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "transFT",
          "normalized": "(a b c d-\u003ee d)-\u003eFT c f g-\u003eFT e f g",
          "package": "free",
          "partial": "FT",
          "signature": "(forall a. f a-\u003eg a)-\u003eFT f m b-\u003eFT g m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:transFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "wrap",
          "package": "free",
          "signature": "f (m a) -\u003e m a",
          "source": "src/Control-Monad-Free-Class.html#wrap",
          "type": "method"
        },
        "index": {
          "description": "Add layer wrap fmap wrap fmap return",
          "hierarchy": "Control Monad Trans Free Church",
          "module": "Control.Monad.Trans.Free.Church",
          "name": "wrap",
          "normalized": "a(b c)-\u003eb c",
          "package": "free",
          "signature": "f(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free-Church.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe free monad transformer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "Free",
          "package": "free",
          "source": "src/Control-Monad-Trans-Free.html",
          "type": "module"
        },
        "index": {
          "description": "The free monad transformer",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"free monad\" for a functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "Free",
          "package": "free",
          "source": "src/Control-Monad-Trans-Free.html#Free",
          "type": "type"
        },
        "index": {
          "description": "The free monad for functor",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#t:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base functor for a free monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "FreeF",
          "package": "free",
          "source": "src/Control-Monad-Trans-Free.html#FreeF",
          "type": "data"
        },
        "index": {
          "description": "The base functor for free monad",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "FreeF",
          "package": "free",
          "partial": "Free",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#t:FreeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"free monad transformer\" for a functor \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "FreeT",
          "package": "free",
          "source": "src/Control-Monad-Trans-Free.html#FreeT",
          "type": "newtype"
        },
        "index": {
          "description": "The free monad transformer for functor",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "FreeT",
          "package": "free",
          "partial": "Free",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#t:FreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "MonadFree",
          "package": "free",
          "source": "src/Control-Monad-Free-Class.html#MonadFree",
          "type": "class"
        },
        "index": {
          "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "MonadFree",
          "package": "free",
          "partial": "Monad Free",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#t:MonadFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free",
          "name": "Free",
          "package": "free",
          "signature": "Free (f b)",
          "source": "src/Control-Monad-Trans-Free.html#FreeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free",
          "name": "FreeT",
          "package": "free",
          "signature": "FreeT",
          "source": "src/Control-Monad-Trans-Free.html#FreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "FreeT",
          "package": "free",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:FreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free",
          "name": "Pure",
          "package": "free",
          "signature": "Pure a",
          "source": "src/Control-Monad-Trans-Free.html#FreeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "Pure",
          "package": "free",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free",
          "name": "free",
          "package": "free",
          "signature": "FreeF f a (Free f a) -\u003e Free f a",
          "source": "src/Control-Monad-Trans-Free.html#free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "free",
          "normalized": "FreeF a b(Free a b)-\u003eFree a b",
          "package": "free",
          "signature": "FreeF f a(Free f a)-\u003eFree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a monad homomorphism from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e into a monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f n\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ehoistFreeT\u003c/a\u003e\u003c/code\u003e :: (\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e f) =\u003e (m ~\u003e n) -\u003e \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f m ~\u003e \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "hoistFreeT",
          "package": "free",
          "signature": "(forall a.  m a -\u003e n a) -\u003e FreeT f m b -\u003e FreeT f n b",
          "source": "src/Control-Monad-Trans-Free.html#hoistFreeT",
          "type": "function"
        },
        "index": {
          "description": "Lift monad homomorphism from to into monad homomorphism from FreeT to FreeT hoistFreeT Monad Functor FreeT FreeT",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "hoistFreeT",
          "normalized": "(a b c d-\u003ee d)-\u003eFreeT f c g-\u003eFreeT f e g",
          "package": "free",
          "partial": "Free",
          "signature": "(forall a. m a-\u003en a)-\u003eFreeT f m b-\u003eFreeT f n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:hoistFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTear down a \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e using iteration.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "iter",
          "package": "free",
          "signature": "(f a -\u003e a) -\u003e Free f a -\u003e a",
          "source": "src/Control-Monad-Trans-Free.html#iter",
          "type": "function"
        },
        "index": {
          "description": "Tear down Free Monad using iteration",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "iter",
          "normalized": "(a b-\u003eb)-\u003eFree a b-\u003eb",
          "package": "free",
          "signature": "(f a-\u003ea)-\u003eFree f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eiter\u003c/a\u003e\u003c/code\u003e for monadic values.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "iterM",
          "package": "free",
          "signature": "(f (m a) -\u003e m a) -\u003e Free f a -\u003e m a",
          "source": "src/Control-Monad-Trans-Free.html#iterM",
          "type": "function"
        },
        "index": {
          "description": "Like iter for monadic values",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "iterM",
          "normalized": "(a(b c)-\u003eb c)-\u003eFree a c-\u003eb c",
          "package": "free",
          "signature": "(f(m a)-\u003em a)-\u003eFree f a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:iterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTear down a free monad transformer using iteration.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "iterT",
          "package": "free",
          "signature": "(f (m a) -\u003e m a) -\u003e FreeT f m a -\u003e m a",
          "source": "src/Control-Monad-Trans-Free.html#iterT",
          "type": "function"
        },
        "index": {
          "description": "Tear down free monad transformer using iteration",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "iterT",
          "normalized": "(a(b c)-\u003eb c)-\u003eFreeT a b c-\u003eb c",
          "package": "free",
          "signature": "(f(m a)-\u003em a)-\u003eFreeT f m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:iterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "retract",
          "package": "free",
          "signature": "Free f a -\u003e f a",
          "source": "src/Control-Monad-Trans-Free.html#retract",
          "type": "function"
        },
        "index": {
          "description": "retract is the left inverse of liftF retract liftF id",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "retract",
          "normalized": "Free a b-\u003ea b",
          "package": "free",
          "signature": "Free f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:retract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free",
          "name": "runFree",
          "package": "free",
          "signature": "Free f a -\u003e FreeF f a (Free f a)",
          "source": "src/Control-Monad-Trans-Free.html#runFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "runFree",
          "normalized": "Free a b-\u003eFreeF a b(Free a b)",
          "package": "free",
          "partial": "Free",
          "signature": "Free f a-\u003eFreeF f a(Free f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:runFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Free",
          "name": "runFreeT",
          "package": "free",
          "signature": "m (FreeF f a (FreeT f m a))",
          "source": "src/Control-Monad-Trans-Free.html#FreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "runFreeT",
          "package": "free",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:runFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e into a monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e g n\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "transFreeT",
          "package": "free",
          "signature": "(forall a.  f a -\u003e g a) -\u003e FreeT f m b -\u003e FreeT g m b",
          "source": "src/Control-Monad-Trans-Free.html#transFreeT",
          "type": "function"
        },
        "index": {
          "description": "Lift natural transformation from to into monad homomorphism from FreeT to FreeT",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "transFreeT",
          "normalized": "(a b c d-\u003ee d)-\u003eFreeT c f g-\u003eFreeT e f g",
          "package": "free",
          "partial": "Free",
          "signature": "(forall a. f a-\u003eg a)-\u003eFreeT f m b-\u003eFreeT g m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:transFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Free",
          "name": "wrap",
          "package": "free",
          "signature": "f (m a) -\u003e m a",
          "source": "src/Control-Monad-Free-Class.html#wrap",
          "type": "method"
        },
        "index": {
          "description": "Add layer wrap fmap wrap fmap return",
          "hierarchy": "Control Monad Trans Free",
          "module": "Control.Monad.Trans.Free",
          "name": "wrap",
          "normalized": "a(b c)-\u003eb c",
          "package": "free",
          "signature": "f(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBased on \u003ca\u003eCapretta's Iterative Monad Transformer\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003eFree\u003c/code\u003e, this is a true monad transformer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Iter",
          "name": "Iter",
          "package": "free",
          "source": "src/Control-Monad-Trans-Iter.html",
          "type": "module"
        },
        "index": {
          "description": "Based on Capretta Iterative Monad Transformer Unlike Free this is true monad transformer",
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "Iter",
          "package": "free",
          "partial": "Iter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Iter",
          "name": "Iter",
          "package": "free",
          "source": "src/Control-Monad-Trans-Iter.html#Iter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "Iter",
          "package": "free",
          "partial": "Iter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#t:Iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad supporting iteration based over a base monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eIterT\u003c/a\u003e\u003c/code\u003e ~ \u003ccode\u003eFreeT\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Iter",
          "name": "IterT",
          "package": "free",
          "source": "src/Control-Monad-Trans-Iter.html#IterT",
          "type": "newtype"
        },
        "index": {
          "description": "The monad supporting iteration based over base monad IterT FreeT Identity",
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "IterT",
          "package": "free",
          "partial": "Iter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#t:IterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Iter",
          "name": "MonadFree",
          "package": "free",
          "source": "src/Control-Monad-Free-Class.html#MonadFree",
          "type": "class"
        },
        "index": {
          "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "MonadFree",
          "package": "free",
          "partial": "Monad Free",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#t:MonadFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Iter",
          "name": "IterT",
          "package": "free",
          "signature": "IterT",
          "source": "src/Control-Monad-Trans-Iter.html#IterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "IterT",
          "package": "free",
          "partial": "Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:IterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Iter",
          "name": "delay",
          "package": "free",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Trans-Iter.html#delay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "delay",
          "normalized": "a b-\u003ea b",
          "package": "free",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTear down a \u003ccode\u003eFree\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e using iteration.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Iter",
          "name": "fold",
          "package": "free",
          "signature": "(m a -\u003e a) -\u003e IterT m a -\u003e a",
          "source": "src/Control-Monad-Trans-Iter.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Tear down Free Monad using iteration",
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "fold",
          "normalized": "(a b-\u003eb)-\u003eIterT a b-\u003eb",
          "package": "free",
          "signature": "(m a-\u003ea)-\u003eIterT m a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e with monadic result.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Iter",
          "name": "foldM",
          "package": "free",
          "signature": "(m (n a) -\u003e n a) -\u003e IterT m a -\u003e n a",
          "source": "src/Control-Monad-Trans-Iter.html#foldM",
          "type": "function"
        },
        "index": {
          "description": "Like fold with monadic result",
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "foldM",
          "normalized": "(a(b c)-\u003eb c)-\u003eIterT a c-\u003eb c",
          "package": "free",
          "signature": "(m(n a)-\u003en a)-\u003eIterT m a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a monad homomorphism from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e into a Monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIterT\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIterT\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Iter",
          "name": "hoistIterT",
          "package": "free",
          "signature": "(forall a.  m a -\u003e n a) -\u003e IterT m b -\u003e IterT n b",
          "source": "src/Control-Monad-Trans-Iter.html#hoistIterT",
          "type": "function"
        },
        "index": {
          "description": "Lift monad homomorphism from to into Monad homomorphism from IterT to IterT",
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "hoistIterT",
          "normalized": "(a b c d-\u003ee d)-\u003eIterT c f-\u003eIterT e f",
          "package": "free",
          "partial": "Iter",
          "signature": "(forall a. m a-\u003en a)-\u003eIterT m b-\u003eIterT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:hoistIterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Iter",
          "name": "iter",
          "package": "free",
          "signature": "Either a (Iter a) -\u003e Iter a",
          "source": "src/Control-Monad-Trans-Iter.html#iter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "iter",
          "normalized": "Either a(Iter a)-\u003eIter a",
          "package": "free",
          "signature": "Either a(Iter a)-\u003eIter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Iter",
          "name": "retract",
          "package": "free",
          "signature": "IterT m a -\u003e m a",
          "source": "src/Control-Monad-Trans-Iter.html#retract",
          "type": "function"
        },
        "index": {
          "description": "retract is the left inverse of lift retract lift id",
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "retract",
          "normalized": "IterT a b-\u003ea b",
          "package": "free",
          "signature": "IterT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:retract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Iter",
          "name": "runIter",
          "package": "free",
          "signature": "Iter a -\u003e Either a (Iter a)",
          "source": "src/Control-Monad-Trans-Iter.html#runIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "runIter",
          "normalized": "Iter a-\u003eEither a(Iter a)",
          "package": "free",
          "partial": "Iter",
          "signature": "Iter a-\u003eEither a(Iter a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:runIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Iter",
          "name": "runIterT",
          "package": "free",
          "signature": "m (Either a (IterT m a))",
          "source": "src/Control-Monad-Trans-Iter.html#IterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "runIterT",
          "package": "free",
          "partial": "Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:runIterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Iter",
          "name": "wrap",
          "package": "free",
          "signature": "f (m a) -\u003e m a",
          "source": "src/Control-Monad-Free-Class.html#wrap",
          "type": "method"
        },
        "index": {
          "description": "Add layer wrap fmap wrap fmap return",
          "hierarchy": "Control Monad Trans Iter",
          "module": "Control.Monad.Trans.Iter",
          "name": "wrap",
          "normalized": "a(b c)-\u003eb c",
          "package": "free",
          "signature": "f(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eleft-distributive MonadPlus for free.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.MonadPlus.Free",
          "name": "Free",
          "package": "free",
          "source": "src/Control-MonadPlus-Free.html",
          "type": "module"
        },
        "index": {
          "description": "left-distributive MonadPlus for free",
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFormally\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e is a free \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e if every monadplus homomorphism\n from \u003ccode\u003en\u003c/code\u003e to another MonadPlus \u003ccode\u003em\u003c/code\u003e is equivalent to a natural transformation\n from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe model this internally as if left-distribution holds.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.haskell.org/haskellwiki/MonadPlus\"/\u003e\n\u003c/p\u003e",
          "module": "Control.MonadPlus.Free",
          "name": "Free",
          "package": "free",
          "source": "src/Control-MonadPlus-Free.html#Free",
          "type": "data"
        },
        "index": {
          "description": "The Free MonadPlus for Functor Formally MonadPlus is free MonadPlus for if every monadplus homomorphism from to another MonadPlus is equivalent to natural transformation from to We model this internally as if left-distribution holds",
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#t:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.MonadPlus.Free",
          "name": "MonadFree",
          "package": "free",
          "source": "src/Control-Monad-Free-Class.html#MonadFree",
          "type": "class"
        },
        "index": {
          "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "MonadFree",
          "package": "free",
          "partial": "Monad Free",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#t:MonadFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadPlus.Free",
          "name": "Free",
          "package": "free",
          "signature": "Free (f (Free f a))",
          "source": "src/Control-MonadPlus-Free.html#Free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "Free",
          "package": "free",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadPlus.Free",
          "name": "Plus",
          "package": "free",
          "signature": "Plus [Free f a]",
          "source": "src/Control-MonadPlus-Free.html#Free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "Plus",
          "normalized": "Plus[Free a b]",
          "package": "free",
          "partial": "Plus",
          "signature": "Plus[Free f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadPlus.Free",
          "name": "Pure",
          "package": "free",
          "signature": "Pure a",
          "source": "src/Control-MonadPlus-Free.html#Free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "Pure",
          "package": "free",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e into a natural transformation from \u003ccode\u003e\u003ccode\u003eFreeT\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003eFreeT\u003c/code\u003e g\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.MonadPlus.Free",
          "name": "hoistFree",
          "package": "free",
          "signature": "(forall a.  f a -\u003e g a) -\u003e Free f b -\u003e Free g b",
          "source": "src/Control-MonadPlus-Free.html#hoistFree",
          "type": "function"
        },
        "index": {
          "description": "Lift natural transformation from to into natural transformation from FreeT to FreeT",
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "hoistFree",
          "normalized": "(a b c d-\u003ee d)-\u003eFree c f-\u003eFree e f",
          "package": "free",
          "partial": "Free",
          "signature": "(forall a. f a-\u003eg a)-\u003eFree f b-\u003eFree g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:hoistFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTear down a \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e using iteration.\n\u003c/p\u003e",
          "module": "Control.MonadPlus.Free",
          "name": "iter",
          "package": "free",
          "signature": "(f a -\u003e a) -\u003e ([a] -\u003e a) -\u003e Free f a -\u003e a",
          "source": "src/Control-MonadPlus-Free.html#iter",
          "type": "function"
        },
        "index": {
          "description": "Tear down Free Monad using iteration",
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "iter",
          "normalized": "(a b-\u003eb)-\u003e([b]-\u003eb)-\u003eFree a b-\u003eb",
          "package": "free",
          "signature": "(f a-\u003ea)-\u003e([a]-\u003ea)-\u003eFree f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike iter for monadic values.\n\u003c/p\u003e",
          "module": "Control.MonadPlus.Free",
          "name": "iterM",
          "package": "free",
          "signature": "(f (m a) -\u003e m a) -\u003e ([m a] -\u003e m a) -\u003e Free f a -\u003e m a",
          "source": "src/Control-MonadPlus-Free.html#iterM",
          "type": "function"
        },
        "index": {
          "description": "Like iter for monadic values",
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "iterM",
          "normalized": "(a(b c)-\u003eb c)-\u003e([b c]-\u003eb c)-\u003eFree a c-\u003eb c",
          "package": "free",
          "signature": "(f(m a)-\u003em a)-\u003e([m a]-\u003em a)-\u003eFree f a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:iterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Control.MonadPlus.Free",
          "name": "retract",
          "package": "free",
          "signature": "Free f a -\u003e f a",
          "source": "src/Control-MonadPlus-Free.html#retract",
          "type": "function"
        },
        "index": {
          "description": "retract is the left inverse of lift and liftF retract lift id retract liftF id",
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "retract",
          "normalized": "Free a b-\u003ea b",
          "package": "free",
          "signature": "Free f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:retract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
          "module": "Control.MonadPlus.Free",
          "name": "wrap",
          "package": "free",
          "signature": "f (m a) -\u003e m a",
          "source": "src/Control-Monad-Free-Class.html#wrap",
          "type": "method"
        },
        "index": {
          "description": "Add layer wrap fmap wrap fmap return",
          "hierarchy": "Control MonadPlus Free",
          "module": "Control.MonadPlus.Free",
          "name": "wrap",
          "normalized": "a(b c)-\u003eb c",
          "package": "free",
          "signature": "f(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:wrap"
      }
    }
  ]
]