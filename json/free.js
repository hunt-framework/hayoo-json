[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLeft distributive \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e functors for free, based on a design\n by Stijn van Drongelen.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Alternative.Free",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Alternative-Free.html",
        "fct-type": "module",
        "title": "Free"
      },
      "index": {
        "description": "Left distributive Alternative functors for free based on design by Stijn van Drongelen",
        "hierarchy": "Control Alternative Free",
        "module": "Control.Alternative.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#t:Alt",
      "description": {
        "fct-descr": "\u003cp\u003eThe free \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Free",
        "fct-package": "free",
        "fct-signature": "data",
        "fct-source": "src/Control-Alternative-Free.html#Alt",
        "fct-type": "data",
        "title": "Alt"
      },
      "index": {
        "description": "The free Alternative for Functor",
        "hierarchy": "Control Alternative Free",
        "module": "Control.Alternative.Free",
        "name": "Alt",
        "normalized": "",
        "package": "free",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:Alt",
      "description": {
        "fct-module": "Control.Alternative.Free",
        "fct-package": "free",
        "fct-signature": "[Alt f a] -\u003e Alt f a",
        "fct-source": "src/Control-Alternative-Free.html#Alt",
        "fct-type": "function",
        "title": "Alt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Free",
        "module": "Control.Alternative.Free",
        "name": "Alt",
        "normalized": "[Alt a b]-\u003eAlt a b",
        "package": "free",
        "partial": "Alt",
        "signature": "[Alt f a]-\u003eAlt f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:Ap",
      "description": {
        "fct-module": "Control.Alternative.Free",
        "fct-package": "free",
        "fct-signature": "f a -\u003e Alt f (a -\u003e b) -\u003e Alt f b",
        "fct-source": "src/Control-Alternative-Free.html#Alt",
        "fct-type": "function",
        "title": "Ap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Free",
        "module": "Control.Alternative.Free",
        "name": "Ap",
        "normalized": "a b-\u003eAlt a(b-\u003ec)-\u003eAlt a c",
        "package": "free",
        "partial": "Ap",
        "signature": "f a-\u003eAlt f(a-\u003eb)-\u003eAlt f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:Pure",
      "description": {
        "fct-module": "Control.Alternative.Free",
        "fct-package": "free",
        "fct-signature": "a -\u003e Alt f a",
        "fct-source": "src/Control-Alternative-Free.html#Alt",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Free",
        "module": "Control.Alternative.Free",
        "name": "Pure",
        "normalized": "a-\u003eAlt b a",
        "package": "free",
        "partial": "Pure",
        "signature": "a-\u003eAlt f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:hoistAlt",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e this gives a monoidal natural transformation from \u003ccode\u003eAlt f\u003c/code\u003e to \u003ccode\u003eAlt g\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Free",
        "fct-package": "free",
        "fct-signature": "(forall a.  f a -\u003e g a) -\u003e Alt f b -\u003e Alt g b",
        "fct-source": "src/Control-Alternative-Free.html#hoistAlt",
        "fct-type": "function",
        "title": "hoistAlt"
      },
      "index": {
        "description": "Given natural transformation from to this gives monoidal natural transformation from Alt to Alt",
        "hierarchy": "Control Alternative Free",
        "module": "Control.Alternative.Free",
        "name": "hoistAlt",
        "normalized": "(a b c d-\u003ee d)-\u003eAlt c f-\u003eAlt e f",
        "package": "free",
        "partial": "Alt",
        "signature": "(forall a. f a-\u003eg a)-\u003eAlt f b-\u003eAlt g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:liftAlt",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003elift\u003c/code\u003e that can be used with just a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Free",
        "fct-package": "free",
        "fct-signature": "f a -\u003e Alt f a",
        "fct-source": "src/Control-Alternative-Free.html#liftAlt",
        "fct-type": "function",
        "title": "liftAlt"
      },
      "index": {
        "description": "version of lift that can be used with just Functor for",
        "hierarchy": "Control Alternative Free",
        "module": "Control.Alternative.Free",
        "name": "liftAlt",
        "normalized": "a b-\u003eAlt a b",
        "package": "free",
        "partial": "Alt",
        "signature": "f a-\u003eAlt f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Alternative-Free.html#v:runAlt",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e, this gives a canonical monoidal natural transformation from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Free",
        "fct-package": "free",
        "fct-signature": "(forall x.  f x -\u003e g x) -\u003e Alt f a -\u003e g a",
        "fct-source": "src/Control-Alternative-Free.html#runAlt",
        "fct-type": "function",
        "title": "runAlt"
      },
      "index": {
        "description": "Given natural transformation from to this gives canonical monoidal natural transformation from Alt to",
        "hierarchy": "Control Alternative Free",
        "module": "Control.Alternative.Free",
        "name": "runAlt",
        "normalized": "(a b c d-\u003ee d)-\u003eAlt c f-\u003ee f",
        "package": "free",
        "partial": "Alt",
        "signature": "(forall x. f x-\u003eg x)-\u003eAlt f a-\u003eg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e functors for free\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Applicative.Free",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Applicative-Free.html",
        "fct-type": "module",
        "title": "Free"
      },
      "index": {
        "description": "Applicative functors for free",
        "hierarchy": "Control Applicative Free",
        "module": "Control.Applicative.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#t:Ap",
      "description": {
        "fct-descr": "\u003cp\u003eThe free \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Free",
        "fct-package": "free",
        "fct-signature": "data",
        "fct-source": "src/Control-Applicative-Free.html#Ap",
        "fct-type": "data",
        "title": "Ap"
      },
      "index": {
        "description": "The free Applicative for Functor",
        "hierarchy": "Control Applicative Free",
        "module": "Control.Applicative.Free",
        "name": "Ap",
        "normalized": "",
        "package": "free",
        "partial": "Ap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:Ap",
      "description": {
        "fct-module": "Control.Applicative.Free",
        "fct-package": "free",
        "fct-signature": "f a -\u003e Ap f (a -\u003e b) -\u003e Ap f b",
        "fct-source": "src/Control-Applicative-Free.html#Ap",
        "fct-type": "function",
        "title": "Ap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Free",
        "module": "Control.Applicative.Free",
        "name": "Ap",
        "normalized": "a b-\u003eAp a(b-\u003ec)-\u003eAp a c",
        "package": "free",
        "partial": "Ap",
        "signature": "f a-\u003eAp f(a-\u003eb)-\u003eAp f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:Pure",
      "description": {
        "fct-module": "Control.Applicative.Free",
        "fct-package": "free",
        "fct-signature": "a -\u003e Ap f a",
        "fct-source": "src/Control-Applicative-Free.html#Ap",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Free",
        "module": "Control.Applicative.Free",
        "name": "Pure",
        "normalized": "a-\u003eAp b a",
        "package": "free",
        "partial": "Pure",
        "signature": "a-\u003eAp f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:hoistAp",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e this gives a monoidal natural transformation from \u003ccode\u003eAp f\u003c/code\u003e to \u003ccode\u003eAp g\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Free",
        "fct-package": "free",
        "fct-signature": "(forall a.  f a -\u003e g a) -\u003e Ap f b -\u003e Ap g b",
        "fct-source": "src/Control-Applicative-Free.html#hoistAp",
        "fct-type": "function",
        "title": "hoistAp"
      },
      "index": {
        "description": "Given natural transformation from to this gives monoidal natural transformation from Ap to Ap",
        "hierarchy": "Control Applicative Free",
        "module": "Control.Applicative.Free",
        "name": "hoistAp",
        "normalized": "(a b c d-\u003ee d)-\u003eAp c f-\u003eAp e f",
        "package": "free",
        "partial": "Ap",
        "signature": "(forall a. f a-\u003eg a)-\u003eAp f b-\u003eAp g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:liftAp",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003elift\u003c/code\u003e that can be used with just a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Free",
        "fct-package": "free",
        "fct-signature": "f a -\u003e Ap f a",
        "fct-source": "src/Control-Applicative-Free.html#liftAp",
        "fct-type": "function",
        "title": "liftAp"
      },
      "index": {
        "description": "version of lift that can be used with just Functor for",
        "hierarchy": "Control Applicative Free",
        "module": "Control.Applicative.Free",
        "name": "liftAp",
        "normalized": "a b-\u003eAp a b",
        "package": "free",
        "partial": "Ap",
        "signature": "f a-\u003eAp f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:retractAp",
      "description": {
        "fct-module": "Control.Applicative.Free",
        "fct-package": "free",
        "fct-signature": "Ap f a -\u003e f a",
        "fct-source": "src/Control-Applicative-Free.html#retractAp",
        "fct-type": "function",
        "title": "retractAp"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Free",
        "module": "Control.Applicative.Free",
        "name": "retractAp",
        "normalized": "Ap a b-\u003ea b",
        "package": "free",
        "partial": "Ap",
        "signature": "Ap f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Applicative-Free.html#v:runAp",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e, this gives a canonical monoidal natural transformation from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAp\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Free",
        "fct-package": "free",
        "fct-signature": "(forall x.  f x -\u003e g x) -\u003e Ap f a -\u003e g a",
        "fct-source": "src/Control-Applicative-Free.html#runAp",
        "fct-type": "function",
        "title": "runAp"
      },
      "index": {
        "description": "Given natural transformation from to this gives canonical monoidal natural transformation from Ap to",
        "hierarchy": "Control Applicative Free",
        "module": "Control.Applicative.Free",
        "name": "runAp",
        "normalized": "(a b c d-\u003ee d)-\u003eAp c f-\u003ee f",
        "package": "free",
        "partial": "Ap",
        "signature": "(forall x. f x-\u003eg x)-\u003eAp f a-\u003eg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree-Class.html#",
      "description": {
        "fct-module": "Control.Comonad.Cofree.Class",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Cofree-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Cofree Class",
        "module": "Control.Comonad.Cofree.Class",
        "name": "Class",
        "normalized": "",
        "package": "free",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree-Class.html#t:ComonadCofree",
      "description": {
        "fct-descr": "\u003cp\u003eAllows you to peel a layer off a cofree comonad.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Cofree.Class",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Comonad-Cofree-Class.html#ComonadCofree",
        "fct-type": "class",
        "title": "ComonadCofree"
      },
      "index": {
        "description": "Allows you to peel layer off cofree comonad",
        "hierarchy": "Control Comonad Cofree Class",
        "module": "Control.Comonad.Cofree.Class",
        "name": "ComonadCofree",
        "normalized": "",
        "package": "free",
        "partial": "Comonad Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree-Class.html#v:unwrap",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a layer.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Cofree.Class",
        "fct-package": "free",
        "fct-signature": "w a -\u003e f (w a)",
        "fct-source": "src/Control-Comonad-Cofree-Class.html#unwrap",
        "fct-type": "method",
        "title": "unwrap"
      },
      "index": {
        "description": "Remove layer",
        "hierarchy": "Control Comonad Cofree Class",
        "module": "Control.Comonad.Cofree.Class",
        "name": "unwrap",
        "normalized": "a b-\u003ec(a b)",
        "package": "free",
        "partial": "",
        "signature": "w a-\u003ef(w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCofree comonads\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Cofree.html",
        "fct-type": "module",
        "title": "Cofree"
      },
      "index": {
        "description": "Cofree comonads",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "Cofree",
        "normalized": "",
        "package": "free",
        "partial": "Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#t:Cofree",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e of a functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFormally\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ev\u003c/code\u003e is a cofree \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e if every comonad homomorphism\n another comonad \u003ccode\u003ew\u003c/code\u003e to \u003ccode\u003ev\u003c/code\u003e is equivalent to a natural transformation\n from \u003ccode\u003ew\u003c/code\u003e to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003ecofree\u003c/code\u003e functor is right adjoint to a forgetful functor.\n\u003c/p\u003e\u003cp\u003eCofree is a functor from the category of functors to the category of comonads\n that is right adjoint to the forgetful functor from the category of comonads\n to the category of functors that forgets how to \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eduplicate\u003c/a\u003e\u003c/code\u003e, leaving you with only a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn practice, cofree comonads are quite useful for annotating syntax trees,\n or talking about streams.\n\u003c/p\u003e\u003cp\u003eA number of common comonads arise directly as cofree comonads.\n\u003c/p\u003e\u003cp\u003eFor instance,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e forms the a comonad for a non-empty list.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eConst\u003c/a\u003e\u003c/code\u003e b)\u003c/code\u003e is a product.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIdentity\u003c/code\u003e\u003c/code\u003e forms an infinite stream.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e ((-\u003e) b)'\u003c/code\u003e describes a Moore machine with states labeled with values of type a, and transitions on edges of type b.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "data",
        "fct-source": "src/Control-Comonad-Cofree.html#Cofree",
        "fct-type": "data",
        "title": "Cofree"
      },
      "index": {
        "description": "The Cofree Comonad of functor Formally Comonad is cofree Comonad for if every comonad homomorphism another comonad to is equivalent to natural transformation from to cofree functor is right adjoint to forgetful functor Cofree is functor from the category of functors to the category of comonads that is right adjoint to the forgetful functor from the category of comonads to the category of functors that forgets how to extract and duplicate leaving you with only Functor In practice cofree comonads are quite useful for annotating syntax trees or talking about streams number of common comonads arise directly as cofree comonads For instance Cofree Maybe forms the comonad for non-empty list Cofree Const is product Cofree Identity forms an infinite stream Cofree describes Moore machine with states labeled with values of type and transitions on edges of type",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "Cofree",
        "normalized": "",
        "package": "free",
        "partial": "Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#t:ComonadCofree",
      "description": {
        "fct-descr": "\u003cp\u003eAllows you to peel a layer off a cofree comonad.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Comonad-Cofree-Class.html#ComonadCofree",
        "fct-type": "class",
        "title": "ComonadCofree"
      },
      "index": {
        "description": "Allows you to peel layer off cofree comonad",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "ComonadCofree",
        "normalized": "",
        "package": "free",
        "partial": "Comonad Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v::-60-",
      "description": {
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "a :\u003c (f (Cofree f a))",
        "fct-source": "src/Control-Comonad-Cofree.html#Cofree",
        "fct-type": "function",
        "title": ":\u003c"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": ":\u003c",
        "normalized": "",
        "package": "free",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:_extract",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a lens that can be used to read or write from the target of \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing (^.) from the \u003ccode\u003elens\u003c/code\u003e package:\n\u003c/p\u003e\u003cpre\u003efoo ^. \u003ccode\u003e\u003ca\u003e_extract\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e foo\u003c/pre\u003e\u003cp\u003eFor more on lenses see the \u003ccode\u003elens\u003c/code\u003e package on hackage\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_extract\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a) a\u003c/pre\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "(a -\u003e f a) -\u003e Cofree g a -\u003e f (Cofree g a)",
        "fct-source": "src/Control-Comonad-Cofree.html#_extract",
        "fct-type": "function",
        "title": "_extract"
      },
      "index": {
        "description": "This is lens that can be used to read or write from the target of extract Using from the lens package foo extract extract foo For more on lenses see the lens package on hackage extract Lens Cofree",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "_extract",
        "normalized": "(a-\u003eb a)-\u003eCofree c a-\u003eb(Cofree c a)",
        "package": "free",
        "partial": "",
        "signature": "(a-\u003ef a)-\u003eCofree g a-\u003ef(Cofree g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:_unwrap",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a lens that can be used to read or write to the tails of a \u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing (^.) from the \u003ccode\u003elens\u003c/code\u003e package:\n\u003c/p\u003e\u003cpre\u003efoo ^. \u003ccode\u003e\u003ca\u003e_unwrap\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunwrap\u003c/a\u003e\u003c/code\u003e foo\u003c/pre\u003e\u003cp\u003eFor more on lenses see the \u003ccode\u003elens\u003c/code\u003e package on hackage\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_unwrap\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a) (g (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a))\u003c/pre\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "(g (Cofree g a) -\u003e f (g (Cofree g a))) -\u003e Cofree g a -\u003e f (Cofree g a)",
        "fct-source": "src/Control-Comonad-Cofree.html#_unwrap",
        "fct-type": "function",
        "title": "_unwrap"
      },
      "index": {
        "description": "This is lens that can be used to read or write to the tails of Cofree Comonad Using from the lens package foo unwrap unwrap foo For more on lenses see the lens package on hackage unwrap Lens Cofree Cofree",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "_unwrap",
        "normalized": "(a(Cofree a b)-\u003ec(a(Cofree a b)))-\u003eCofree a b-\u003ec(Cofree a b)",
        "package": "free",
        "partial": "",
        "signature": "(g(Cofree g a)-\u003ef(g(Cofree g a)))-\u003eCofree g a-\u003ef(Cofree g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:coiter",
      "description": {
        "fct-descr": "\u003cp\u003eUse coiteration to generate a cofree comonad from a seed.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecoiter\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e f)\u003c/pre\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "(a -\u003e f a) -\u003e a -\u003e Cofree f a",
        "fct-source": "src/Control-Comonad-Cofree.html#coiter",
        "fct-type": "function",
        "title": "coiter"
      },
      "index": {
        "description": "Use coiteration to generate cofree comonad from seed coiter unfold id",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "coiter",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eCofree b a",
        "package": "free",
        "partial": "",
        "signature": "(a-\u003ef a)-\u003ea-\u003eCofree f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:section",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003elower\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esection\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "f a -\u003e Cofree f a",
        "fct-source": "src/Control-Comonad-Cofree.html#section",
        "fct-type": "function",
        "title": "section"
      },
      "index": {
        "description": "lower section id",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "section",
        "normalized": "a b-\u003eCofree a b",
        "package": "free",
        "partial": "",
        "signature": "f a-\u003eCofree f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:telescoped",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003eLens\u003c/code\u003e into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e given a list of lenses into the base functor.\n\u003c/p\u003e\u003cp\u003eFor more on lenses see the \u003ccode\u003elens\u003c/code\u003e package on hackage.\n\u003c/p\u003e\u003cpre\u003etelescoped :: \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e g =\u003e [Lens' (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a) (g (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a))] -\u003e Lens' (\u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e g a) a\u003c/pre\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "[(Cofree g a -\u003e f (Cofree g a)) -\u003e g (Cofree g a) -\u003e f (g (Cofree g a))] -\u003e (a -\u003e f a) -\u003e Cofree g a -\u003e f (Cofree g a)",
        "fct-source": "src/Control-Comonad-Cofree.html#telescoped",
        "fct-type": "function",
        "title": "telescoped"
      },
      "index": {
        "description": "Construct Lens into Cofree given list of lenses into the base functor For more on lenses see the lens package on hackage telescoped Functor Lens Cofree Cofree Lens Cofree",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "telescoped",
        "normalized": "[(Cofree a b-\u003ec(Cofree a b))-\u003ea(Cofree a b)-\u003ec(a(Cofree a b))]-\u003e(b-\u003ec b)-\u003eCofree a b-\u003ec(Cofree a b)",
        "package": "free",
        "partial": "",
        "signature": "[(Cofree g a-\u003ef(Cofree g a))-\u003eg(Cofree g a)-\u003ef(g(Cofree g a))]-\u003e(a-\u003ef a)-\u003eCofree g a-\u003ef(Cofree g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003eUnfold a cofree comonad from a seed.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "(b -\u003e (a, f b)) -\u003e b -\u003e Cofree f a",
        "fct-source": "src/Control-Comonad-Cofree.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "Unfold cofree comonad from seed",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "unfold",
        "normalized": "(a-\u003e(b,c a))-\u003ea-\u003eCofree c b",
        "package": "free",
        "partial": "",
        "signature": "(b-\u003e(a,f b))-\u003eb-\u003eCofree f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Cofree.html#v:unwrap",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a layer.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Cofree",
        "fct-package": "free",
        "fct-signature": "w a -\u003e f (w a)",
        "fct-source": "src/Control-Comonad-Cofree-Class.html#unwrap",
        "fct-type": "method",
        "title": "unwrap"
      },
      "index": {
        "description": "Remove layer",
        "hierarchy": "Control Comonad Cofree",
        "module": "Control.Comonad.Cofree",
        "name": "unwrap",
        "normalized": "a b-\u003ec(a b)",
        "package": "free",
        "partial": "",
        "signature": "w a-\u003ef(w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe cofree comonad transformer\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Trans-Cofree.html",
        "fct-type": "module",
        "title": "Cofree"
      },
      "index": {
        "description": "The cofree comonad transformer",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "Cofree",
        "normalized": "",
        "package": "free",
        "partial": "Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#t:CofreeF",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the base functor of the cofree comonad transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "data",
        "fct-source": "src/Control-Comonad-Trans-Cofree.html#CofreeF",
        "fct-type": "data",
        "title": "CofreeF"
      },
      "index": {
        "description": "This is the base functor of the cofree comonad transformer",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "CofreeF",
        "normalized": "",
        "package": "free",
        "partial": "Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#t:CofreeT",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a cofree comonad of some functor \u003ccode\u003ef\u003c/code\u003e, with a comonad \u003ccode\u003ew\u003c/code\u003e threaded through it at each level.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Comonad-Trans-Cofree.html#CofreeT",
        "fct-type": "newtype",
        "title": "CofreeT"
      },
      "index": {
        "description": "This is cofree comonad of some functor with comonad threaded through it at each level",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "CofreeT",
        "normalized": "",
        "package": "free",
        "partial": "Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#t:ComonadCofree",
      "description": {
        "fct-descr": "\u003cp\u003eAllows you to peel a layer off a cofree comonad.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Comonad-Cofree-Class.html#ComonadCofree",
        "fct-type": "class",
        "title": "ComonadCofree"
      },
      "index": {
        "description": "Allows you to peel layer off cofree comonad",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "ComonadCofree",
        "normalized": "",
        "package": "free",
        "partial": "Comonad Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v::-60-",
      "description": {
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "a :\u003c (f b)",
        "fct-source": "src/Control-Comonad-Trans-Cofree.html#CofreeF",
        "fct-type": "function",
        "title": ":\u003c"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": ":\u003c",
        "normalized": "",
        "package": "free",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:CofreeT",
      "description": {
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "CofreeT",
        "fct-source": "src/Control-Comonad-Trans-Cofree.html#CofreeT",
        "fct-type": "function",
        "title": "CofreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "CofreeT",
        "normalized": "",
        "package": "free",
        "partial": "Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:coiterT",
      "description": {
        "fct-descr": "\u003cp\u003eUnfold a \u003ccode\u003eCofreeT\u003c/code\u003e comonad transformer from a coalgebra and an initial comonad.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "(w a -\u003e f (w a)) -\u003e w a -\u003e CofreeT f w a",
        "fct-source": "src/Control-Comonad-Trans-Cofree.html#coiterT",
        "fct-type": "function",
        "title": "coiterT"
      },
      "index": {
        "description": "Unfold CofreeT comonad transformer from coalgebra and an initial comonad",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "coiterT",
        "normalized": "(a b-\u003ec(a b))-\u003ea b-\u003eCofreeT c a b",
        "package": "free",
        "partial": "",
        "signature": "(w a-\u003ef(w a))-\u003ew a-\u003eCofreeT f w a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:headF",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the head of the base functor\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "CofreeF f a b -\u003e a",
        "fct-source": "src/Control-Comonad-Trans-Cofree.html#headF",
        "fct-type": "function",
        "title": "headF"
      },
      "index": {
        "description": "Extract the head of the base functor",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "headF",
        "normalized": "CofreeF a b c-\u003eb",
        "package": "free",
        "partial": "",
        "signature": "CofreeF f a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:runCofreeT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "w (CofreeF f a (CofreeT f w a))",
        "fct-source": "src/Control-Comonad-Trans-Cofree.html#CofreeT",
        "fct-type": "function",
        "title": "runCofreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "runCofreeT",
        "normalized": "",
        "package": "free",
        "partial": "Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:tailF",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the tails of the base functor\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "CofreeF f a b -\u003e f b",
        "fct-source": "src/Control-Comonad-Trans-Cofree.html#tailF",
        "fct-type": "function",
        "title": "tailF"
      },
      "index": {
        "description": "Extract the tails of the base functor",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "tailF",
        "normalized": "CofreeF a b c-\u003ea c",
        "package": "free",
        "partial": "",
        "signature": "CofreeF f a b-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Cofree.html#v:unwrap",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a layer.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Cofree",
        "fct-package": "free",
        "fct-signature": "w a -\u003e f (w a)",
        "fct-source": "src/Control-Comonad-Cofree-Class.html#unwrap",
        "fct-type": "method",
        "title": "unwrap"
      },
      "index": {
        "description": "Remove layer",
        "hierarchy": "Control Comonad Trans Cofree",
        "module": "Control.Comonad.Trans.Cofree",
        "name": "unwrap",
        "normalized": "a b-\u003ec(a b)",
        "package": "free",
        "partial": "",
        "signature": "w a-\u003ef(w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe iterative comonad generated by a comonad\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Comonad.Trans.Coiter",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Trans-Coiter.html",
        "fct-type": "module",
        "title": "Coiter"
      },
      "index": {
        "description": "The iterative comonad generated by comonad",
        "hierarchy": "Control Comonad Trans Coiter",
        "module": "Control.Comonad.Trans.Coiter",
        "name": "Coiter",
        "normalized": "",
        "package": "free",
        "partial": "Coiter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#t:CoiterT",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the (co?)iterative comonad generated by a comonad\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Coiter",
        "fct-package": "free",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Comonad-Trans-Coiter.html#CoiterT",
        "fct-type": "newtype",
        "title": "CoiterT"
      },
      "index": {
        "description": "This is the co iterative comonad generated by comonad",
        "hierarchy": "Control Comonad Trans Coiter",
        "module": "Control.Comonad.Trans.Coiter",
        "name": "CoiterT",
        "normalized": "",
        "package": "free",
        "partial": "Coiter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#t:ComonadCofree",
      "description": {
        "fct-descr": "\u003cp\u003eAllows you to peel a layer off a cofree comonad.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Coiter",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Comonad-Cofree-Class.html#ComonadCofree",
        "fct-type": "class",
        "title": "ComonadCofree"
      },
      "index": {
        "description": "Allows you to peel layer off cofree comonad",
        "hierarchy": "Control Comonad Trans Coiter",
        "module": "Control.Comonad.Trans.Coiter",
        "name": "ComonadCofree",
        "normalized": "",
        "package": "free",
        "partial": "Comonad Cofree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:CoiterT",
      "description": {
        "fct-module": "Control.Comonad.Trans.Coiter",
        "fct-package": "free",
        "fct-signature": "CoiterT",
        "fct-source": "src/Control-Comonad-Trans-Coiter.html#CoiterT",
        "fct-type": "function",
        "title": "CoiterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Coiter",
        "module": "Control.Comonad.Trans.Coiter",
        "name": "CoiterT",
        "normalized": "",
        "package": "free",
        "partial": "Coiter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:coiterT",
      "description": {
        "fct-descr": "\u003cp\u003eUnfold a \u003ccode\u003eCoiterT\u003c/code\u003e comonad transformer from a cokleisli arrow and an initial comonadic seed.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Coiter",
        "fct-package": "free",
        "fct-signature": "(w a -\u003e a) -\u003e w a -\u003e CoiterT w a",
        "fct-source": "src/Control-Comonad-Trans-Coiter.html#coiterT",
        "fct-type": "function",
        "title": "coiterT"
      },
      "index": {
        "description": "Unfold CoiterT comonad transformer from cokleisli arrow and an initial comonadic seed",
        "hierarchy": "Control Comonad Trans Coiter",
        "module": "Control.Comonad.Trans.Coiter",
        "name": "coiterT",
        "normalized": "(a b-\u003eb)-\u003ea b-\u003eCoiterT a b",
        "package": "free",
        "partial": "",
        "signature": "(w a-\u003ea)-\u003ew a-\u003eCoiterT w a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:runCoiterT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Comonad.Trans.Coiter",
        "fct-package": "free",
        "fct-signature": "w (a, CoiterT w a)",
        "fct-source": "src/Control-Comonad-Trans-Coiter.html#CoiterT",
        "fct-type": "function",
        "title": "runCoiterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Coiter",
        "module": "Control.Comonad.Trans.Coiter",
        "name": "runCoiterT",
        "normalized": "a(b,CoiterT a b)",
        "package": "free",
        "partial": "Coiter",
        "signature": "w(a,CoiterT w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Comonad-Trans-Coiter.html#v:unwrap",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a layer.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Trans.Coiter",
        "fct-package": "free",
        "fct-signature": "w a -\u003e f (w a)",
        "fct-source": "src/Control-Comonad-Cofree-Class.html#unwrap",
        "fct-type": "method",
        "title": "unwrap"
      },
      "index": {
        "description": "Remove layer",
        "hierarchy": "Control Comonad Trans Coiter",
        "module": "Control.Comonad.Trans.Coiter",
        "name": "unwrap",
        "normalized": "a b-\u003ec(a b)",
        "package": "free",
        "partial": "",
        "signature": "w a-\u003ef(w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"Free Monads for Less\"\n\u003c/p\u003e\u003cp\u003eThis is based on the \"Free Monads for Less\" series of articles:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less/\u003c/a\u003e\n \u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less-2/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Free-Church.html",
        "fct-type": "module",
        "title": "Church"
      },
      "index": {
        "description": "Free Monads for Less This is based on the Free Monads for Less series of articles http comonad.com reader free-monads-for-less http comonad.com reader free-monads-for-less-2",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "Church",
        "normalized": "",
        "package": "free",
        "partial": "Church",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#t:F",
      "description": {
        "fct-descr": "\u003cp\u003eThe Church-encoded free monad for a functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is \u003cem\u003easymptotically\u003c/em\u003e more efficient to use (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) for \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e than it is to (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) with \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less-2/\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Free-Church.html#F",
        "fct-type": "newtype",
        "title": "F"
      },
      "index": {
        "description": "The Church-encoded free monad for functor It is asymptotically more efficient to use for than it is to with Free http comonad.com reader free-monads-for-less-2",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "F",
        "normalized": "",
        "package": "free",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#t:MonadFree",
      "description": {
        "fct-descr": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Free-Class.html#MonadFree",
        "fct-type": "class",
        "title": "MonadFree"
      },
      "index": {
        "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "MonadFree",
        "normalized": "",
        "package": "free",
        "partial": "Monad Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:F",
      "description": {
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "F",
        "fct-source": "src/Control-Monad-Free-Church.html#F",
        "fct-type": "function",
        "title": "F"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "F",
        "normalized": "",
        "package": "free",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:fromF",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to another free monad representation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "F f a -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Church.html#fromF",
        "fct-type": "function",
        "title": "fromF"
      },
      "index": {
        "description": "Convert to another free monad representation",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "fromF",
        "normalized": "F a b-\u003ec b",
        "package": "free",
        "partial": "",
        "signature": "F f a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:improve",
      "description": {
        "fct-descr": "\u003cp\u003eImprove the asymptotic performance of code that builds a free monad with only binds and returns by using \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e behind the scenes.\n\u003c/p\u003e\u003cp\u003eThis is based on the \"Free Monads for Less\" series of articles by Edward Kmett:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less/\u003c/a\u003e\n \u003ca\u003ehttp://comonad.com/reader/2011/free-monads-for-less-2/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eand \"Asymptotic Improvement of Computations over Free Monads\" by Janis Voightl&#228;nder:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.iai.uni-bonn.de/~jv/mpc08.pdf\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "m a) -\u003e Free f a",
        "fct-source": "src/Control-Monad-Free-Church.html#improve",
        "fct-type": "function",
        "title": "improve"
      },
      "index": {
        "description": "Improve the asymptotic performance of code that builds free monad with only binds and returns by using behind the scenes This is based on the Free Monads for Less series of articles by Edward Kmett http comonad.com reader free-monads-for-less http comonad.com reader free-monads-for-less-2 and Asymptotic Improvement of Computations over Free Monads by Janis Voightl nder http www.iai.uni-bonn.de jv mpc08.pdf",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "improve",
        "normalized": "a b)-\u003eFree c b",
        "package": "free",
        "partial": "",
        "signature": "m a)-\u003eFree f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:iterM",
      "description": {
        "fct-descr": "\u003cp\u003eLike iter for monadic values.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "(f (m a) -\u003e m a) -\u003e F f a -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Church.html#iterM",
        "fct-type": "function",
        "title": "iterM"
      },
      "index": {
        "description": "Like iter for monadic values",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "iterM",
        "normalized": "(a(b c)-\u003eb c)-\u003eF a c-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "(f(m a)-\u003em a)-\u003eF f a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:liftF",
      "description": {
        "fct-descr": "\u003cp\u003eA version of lift that can be used with just a Functor for f.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "f a -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#liftF",
        "fct-type": "function",
        "title": "liftF"
      },
      "index": {
        "description": "version of lift that can be used with just Functor for",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "liftF",
        "normalized": "a b-\u003ec b",
        "package": "free",
        "partial": "",
        "signature": "f a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:retract",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003elift\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003elift\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "F m a -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Church.html#retract",
        "fct-type": "function",
        "title": "retract"
      },
      "index": {
        "description": "retract is the left inverse of lift and liftF retract lift id retract liftF id",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "retract",
        "normalized": "F a b-\u003ea b",
        "package": "free",
        "partial": "",
        "signature": "F m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:runF",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "forall r.  (a -\u003e r) -\u003e (f r -\u003e r) -\u003e r",
        "fct-source": "src/Control-Monad-Free-Church.html#F",
        "fct-type": "function",
        "title": "runF"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "runF",
        "normalized": "a b(c-\u003ed)-\u003e(e d-\u003ed)-\u003ed",
        "package": "free",
        "partial": "",
        "signature": "forall r.(a-\u003er)-\u003e(f r-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:toF",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a Church-encoded free monad from a \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "Free f a -\u003e F f a",
        "fct-source": "src/Control-Monad-Free-Church.html#toF",
        "fct-type": "function",
        "title": "toF"
      },
      "index": {
        "description": "Generate Church-encoded free monad from Free monad",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "toF",
        "normalized": "Free a b-\u003eF a b",
        "package": "free",
        "partial": "",
        "signature": "Free f a-\u003eF f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Church.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Free.Church",
        "fct-package": "free",
        "fct-signature": "f (m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#wrap",
        "fct-type": "method",
        "title": "wrap"
      },
      "index": {
        "description": "Add layer wrap fmap wrap fmap return",
        "hierarchy": "Control Monad Free Church",
        "module": "Control.Monad.Free.Church",
        "name": "wrap",
        "normalized": "a(b c)-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "f(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonads for free.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Free.Class",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Free-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Monads for free",
        "hierarchy": "Control Monad Free Class",
        "module": "Control.Monad.Free.Class",
        "name": "Class",
        "normalized": "",
        "package": "free",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#t:MonadFree",
      "description": {
        "fct-descr": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Class",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Free-Class.html#MonadFree",
        "fct-type": "class",
        "title": "MonadFree"
      },
      "index": {
        "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
        "hierarchy": "Control Monad Free Class",
        "module": "Control.Monad.Free.Class",
        "name": "MonadFree",
        "normalized": "",
        "package": "free",
        "partial": "Monad Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#v:liftF",
      "description": {
        "fct-descr": "\u003cp\u003eA version of lift that can be used with just a Functor for f.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Class",
        "fct-package": "free",
        "fct-signature": "f a -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#liftF",
        "fct-type": "function",
        "title": "liftF"
      },
      "index": {
        "description": "version of lift that can be used with just Functor for",
        "hierarchy": "Control Monad Free Class",
        "module": "Control.Monad.Free.Class",
        "name": "liftF",
        "normalized": "a b-\u003ec b",
        "package": "free",
        "partial": "",
        "signature": "f a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Free.Class",
        "fct-package": "free",
        "fct-signature": "f (m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#wrap",
        "fct-type": "method",
        "title": "wrap"
      },
      "index": {
        "description": "Add layer wrap fmap wrap fmap return",
        "hierarchy": "Control Monad Free Class",
        "module": "Control.Monad.Free.Class",
        "name": "wrap",
        "normalized": "a(b c)-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "f(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free-Class.html#v:wrapT",
      "description": {
        "fct-descr": "\u003cp\u003eA version of wrap for monad transformers over a free monad.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e that this is the default implementation for \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e for\n \u003ccode\u003eMonadFree f (t m)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free.Class",
        "fct-package": "free",
        "fct-signature": "f (t m a) -\u003e t m a",
        "fct-source": "src/Control-Monad-Free-Class.html#wrapT",
        "fct-type": "function",
        "title": "wrapT"
      },
      "index": {
        "description": "version of wrap for monad transformers over free monad Note that this is the default implementation for wrap for MonadFree",
        "hierarchy": "Control Monad Free Class",
        "module": "Control.Monad.Free.Class",
        "name": "wrapT",
        "normalized": "a(b c d)-\u003eb c d",
        "package": "free",
        "partial": "",
        "signature": "f(t m a)-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonads for free\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Free.html",
        "fct-type": "module",
        "title": "Free"
      },
      "index": {
        "description": "Monads for free",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#t:Free",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFormally\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e is a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e if every monad homomorphism\n from \u003ccode\u003en\u003c/code\u003e to another monad \u003ccode\u003em\u003c/code\u003e is equivalent to a natural transformation\n from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWhy Free?\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eEvery \"free\" functor is left adjoint to some \"forgetful\" functor.\n\u003c/p\u003e\u003cp\u003eIf we define a forgetful functor \u003ccode\u003eU\u003c/code\u003e from the category of monads to the category of functors\n that just forgets the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, leaving only the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e. i.e.\n\u003c/p\u003e\u003cpre\u003eU (M,\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e) = M\u003c/pre\u003e\u003cp\u003ethen \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e is the left adjoint to \u003ccode\u003eU\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBeing \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e being left adjoint to \u003ccode\u003eU\u003c/code\u003e means that there is an isomorphism between\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e f -\u003e m\u003c/code\u003e in the category of monads and \u003ccode\u003ef -\u003e U m\u003c/code\u003e in the category of functors.\n\u003c/p\u003e\u003cp\u003eMorphisms in the category of monads are \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e homomorphisms (natural transformations that respect \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eMorphisms in the category of functors are \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e homomorphisms (natural transformations).\n\u003c/p\u003e\u003cp\u003eGiven this isomorphism, every monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003em\u003c/code\u003e is equivalent to a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eShowing that this isomorphism holds is left as an exercise.\n\u003c/p\u003e\u003cp\u003eIn practice, you can just view a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e f a\u003c/code\u003e as many layers of \u003ccode\u003ef\u003c/code\u003e wrapped around values of type \u003ccode\u003ea\u003c/code\u003e, where\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e performs substitution and grafts new layers of \u003ccode\u003ef\u003c/code\u003e in for each of the free variables.\n\u003c/p\u003e\u003cp\u003eThis can be very useful for modeling domain specific languages, trees, or other constructs.\n\u003c/p\u003e\u003cp\u003eThis instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e is fairly naive about the encoding. For more efficient free monad implementation see \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e, in particular note the \u003ccode\u003e\u003ca\u003eimprove\u003c/a\u003e\u003c/code\u003e combinator.\n You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eA number of common monads arise as free monads,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Given \u003ccode\u003edata Empty a\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Empty\u003c/code\u003e is isomorphic to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e can be used to model a partiality monad where each layer represents running the computation for a while longer.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Free.html#Free",
        "fct-type": "data",
        "title": "Free"
      },
      "index": {
        "description": "The Free Monad for Functor Formally Monad is free Monad for if every monad homomorphism from to another monad is equivalent to natural transformation from to Why Free Every free functor is left adjoint to some forgetful functor If we define forgetful functor from the category of monads to the category of functors that just forgets the Monad leaving only the Functor i.e return join then Free is the left adjoint to Being Free being left adjoint to means that there is an isomorphism between Free in the category of monads and in the category of functors Morphisms in the category of monads are Monad homomorphisms natural transformations that respect return and join Morphisms in the category of functors are Functor homomorphisms natural transformations Given this isomorphism every monad homomorphism from Free to is equivalent to natural transformation from to Showing that this isomorphism holds is left as an exercise In practice you can just view Free as many layers of wrapped around values of type where performs substitution and grafts new layers of in for each of the free variables This can be very useful for modeling domain specific languages trees or other constructs This instance of MonadFree is fairly naive about the encoding For more efficient free monad implementation see Control.Monad.Free.Church in particular note the improve combinator You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions number of common monads arise as free monads Given data Empty Free Empty is isomorphic to the Identity monad Free Maybe can be used to model partiality monad where each layer represents running the computation for while longer",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#t:MonadFree",
      "description": {
        "fct-descr": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Free-Class.html#MonadFree",
        "fct-type": "class",
        "title": "MonadFree"
      },
      "index": {
        "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "MonadFree",
        "normalized": "",
        "package": "free",
        "partial": "Monad Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:Free",
      "description": {
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "Free (f (Free f a))",
        "fct-source": "src/Control-Monad-Free.html#Free",
        "fct-type": "function",
        "title": "Free"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:Pure",
      "description": {
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "Pure a",
        "fct-source": "src/Control-Monad-Free.html#Free",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "Pure",
        "normalized": "",
        "package": "free",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:_Free",
      "description": {
        "fct-descr": "\u003cp\u003eThis is \u003ccode\u003ePrism' (Free f a) (f (Free f a))\u003c/code\u003e in disguise\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epreview _Free (review _Free (Just (Pure 3)))\n\u003c/code\u003e\u003c/strong\u003eJust (Just (Pure 3))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereview _Free (Just (Pure 3))\n\u003c/code\u003e\u003c/strong\u003eFree (Just (Pure 3))\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "p (f (Free f a)) (m (f (Free f a))) -\u003e p (Free f a) (m (Free f a))",
        "fct-source": "src/Control-Monad-Free.html#_Free",
        "fct-type": "function",
        "title": "_Free"
      },
      "index": {
        "description": "This is Prism Free Free in disguise preview Free review Free Just Pure Just Just Pure review Free Just Pure Free Just Pure",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "_Free",
        "normalized": "a(b(Free b c))(d(b(Free b c)))-\u003ea(Free b c)(d(Free b c))",
        "package": "free",
        "partial": "Free",
        "signature": "p(f(Free f a))(m(f(Free f a)))-\u003ep(Free f a)(m(Free f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:_Pure",
      "description": {
        "fct-descr": "\u003cp\u003eThis is \u003ccode\u003ePrism' (Free f a) a\u003c/code\u003e in disguise\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epreview _Pure (Pure 3)\n\u003c/code\u003e\u003c/strong\u003eJust 3\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereview _Pure 3 :: Free Maybe Int\n\u003c/code\u003e\u003c/strong\u003ePure 3\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "p a (m a) -\u003e p (Free f a) (m (Free f a))",
        "fct-source": "src/Control-Monad-Free.html#_Pure",
        "fct-type": "function",
        "title": "_Pure"
      },
      "index": {
        "description": "This is Prism Free in disguise preview Pure Pure Just review Pure Free Maybe Int Pure",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "_Pure",
        "normalized": "a b(c b)-\u003ea(Free d b)(c(Free d b))",
        "package": "free",
        "partial": "Pure",
        "signature": "p a(m a)-\u003ep(Free f a)(m(Free f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:hoistFree",
      "description": {
        "fct-descr": "\u003cp\u003eLift a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e into a natural transformation from \u003ccode\u003e\u003ccode\u003eFreeT\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003eFreeT\u003c/code\u003e g\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "(forall a.  f a -\u003e g a) -\u003e Free f b -\u003e Free g b",
        "fct-source": "src/Control-Monad-Free.html#hoistFree",
        "fct-type": "function",
        "title": "hoistFree"
      },
      "index": {
        "description": "Lift natural transformation from to into natural transformation from FreeT to FreeT",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "hoistFree",
        "normalized": "(a b c d-\u003ee d)-\u003eFree c f-\u003eFree e f",
        "package": "free",
        "partial": "Free",
        "signature": "(forall a. f a-\u003eg a)-\u003eFree f b-\u003eFree g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:iter",
      "description": {
        "fct-descr": "\u003cp\u003eTear down a \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e using iteration.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "(f a -\u003e a) -\u003e Free f a -\u003e a",
        "fct-source": "src/Control-Monad-Free.html#iter",
        "fct-type": "function",
        "title": "iter"
      },
      "index": {
        "description": "Tear down Free Monad using iteration",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "iter",
        "normalized": "(a b-\u003eb)-\u003eFree a b-\u003eb",
        "package": "free",
        "partial": "",
        "signature": "(f a-\u003ea)-\u003eFree f a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:iterM",
      "description": {
        "fct-descr": "\u003cp\u003eLike iter for monadic values.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "(f (m a) -\u003e m a) -\u003e Free f a -\u003e m a",
        "fct-source": "src/Control-Monad-Free.html#iterM",
        "fct-type": "function",
        "title": "iterM"
      },
      "index": {
        "description": "Like iter for monadic values",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "iterM",
        "normalized": "(a(b c)-\u003eb c)-\u003eFree a c-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "(f(m a)-\u003em a)-\u003eFree f a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:liftF",
      "description": {
        "fct-descr": "\u003cp\u003eA version of lift that can be used with just a Functor for f.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "f a -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#liftF",
        "fct-type": "function",
        "title": "liftF"
      },
      "index": {
        "description": "version of lift that can be used with just Functor for",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "liftF",
        "normalized": "a b-\u003ec b",
        "package": "free",
        "partial": "",
        "signature": "f a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:retract",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003elift\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003elift\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "Free f a -\u003e f a",
        "fct-source": "src/Control-Monad-Free.html#retract",
        "fct-type": "function",
        "title": "retract"
      },
      "index": {
        "description": "retract is the left inverse of lift and liftF retract lift id retract liftF id",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "retract",
        "normalized": "Free a b-\u003ea b",
        "package": "free",
        "partial": "",
        "signature": "Free f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Free.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Free",
        "fct-package": "free",
        "fct-signature": "f (m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#wrap",
        "fct-type": "method",
        "title": "wrap"
      },
      "index": {
        "description": "Add layer wrap fmap wrap fmap return",
        "hierarchy": "Control Monad Free",
        "module": "Control.Monad.Free",
        "name": "wrap",
        "normalized": "a(b c)-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "f(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe free monad transformer\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Free.html",
        "fct-type": "module",
        "title": "Free"
      },
      "index": {
        "description": "The free monad transformer",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#t:FreeF",
      "description": {
        "fct-descr": "\u003cp\u003eThe base functor for a free monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeF",
        "fct-type": "data",
        "title": "FreeF"
      },
      "index": {
        "description": "The base functor for free monad",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "FreeF",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#t:FreeT",
      "description": {
        "fct-descr": "\u003cp\u003eThe \"free monad transformer\" for a functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeT",
        "fct-type": "newtype",
        "title": "FreeT"
      },
      "index": {
        "description": "The free monad transformer for functor",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "FreeT",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#t:MonadFree",
      "description": {
        "fct-descr": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Free-Class.html#MonadFree",
        "fct-type": "class",
        "title": "MonadFree"
      },
      "index": {
        "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "MonadFree",
        "normalized": "",
        "package": "free",
        "partial": "Monad Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:Free",
      "description": {
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "Free (f b)",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeF",
        "fct-type": "function",
        "title": "Free"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:FreeT",
      "description": {
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "FreeT",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeT",
        "fct-type": "function",
        "title": "FreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "FreeT",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:Pure",
      "description": {
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "Pure a",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeF",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "Pure",
        "normalized": "",
        "package": "free",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:hoistFreeT",
      "description": {
        "fct-descr": "\u003cp\u003eLift a monad homomorphism from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e into a monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f n\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ehoistFreeT\u003c/a\u003e\u003c/code\u003e :: (\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e f) =\u003e (m ~\u003e n) -\u003e \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f m ~\u003e \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "(forall a.  m a -\u003e n a) -\u003e FreeT f m b -\u003e FreeT f n b",
        "fct-source": "src/Control-Monad-Trans-Free.html#hoistFreeT",
        "fct-type": "function",
        "title": "hoistFreeT"
      },
      "index": {
        "description": "Lift monad homomorphism from to into monad homomorphism from FreeT to FreeT hoistFreeT Monad Functor FreeT FreeT",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "hoistFreeT",
        "normalized": "(a b c d-\u003ee d)-\u003eFreeT f c g-\u003eFreeT f e g",
        "package": "free",
        "partial": "Free",
        "signature": "(forall a. m a-\u003en a)-\u003eFreeT f m b-\u003eFreeT f n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:iterT",
      "description": {
        "fct-descr": "\u003cp\u003eTear down a free monad transformer using iteration.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "(f (m a) -\u003e m a) -\u003e FreeT f m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Free.html#iterT",
        "fct-type": "function",
        "title": "iterT"
      },
      "index": {
        "description": "Tear down free monad transformer using iteration",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "iterT",
        "normalized": "(a(b c)-\u003eb c)-\u003eFreeT a b c-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "(f(m a)-\u003em a)-\u003eFreeT f m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:liftF",
      "description": {
        "fct-descr": "\u003cp\u003eA version of lift that can be used with just a Functor for f.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "f a -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#liftF",
        "fct-type": "function",
        "title": "liftF"
      },
      "index": {
        "description": "version of lift that can be used with just Functor for",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "liftF",
        "normalized": "a b-\u003ec b",
        "package": "free",
        "partial": "",
        "signature": "f a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:runFreeT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "m (FreeF f a (FreeT f m a))",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeT",
        "fct-type": "function",
        "title": "runFreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "runFreeT",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:transFreeT",
      "description": {
        "fct-descr": "\u003cp\u003eLift a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e into a monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e g n\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "(forall a.  f a -\u003e g a) -\u003e FreeT f m b -\u003e FreeT g m b",
        "fct-source": "src/Control-Monad-Trans-Free.html#transFreeT",
        "fct-type": "function",
        "title": "transFreeT"
      },
      "index": {
        "description": "Lift natural transformation from to into monad homomorphism from FreeT to FreeT",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "transFreeT",
        "normalized": "(a b c d-\u003ee d)-\u003eFreeT c f g-\u003eFreeT e f g",
        "package": "free",
        "partial": "Free",
        "signature": "(forall a. f a-\u003eg a)-\u003eFreeT f m b-\u003eFreeT g m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Free.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "free",
        "fct-signature": "f (m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#wrap",
        "fct-type": "method",
        "title": "wrap"
      },
      "index": {
        "description": "Add layer wrap fmap wrap fmap return",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "wrap",
        "normalized": "a(b c)-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "f(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBased on \u003ca\u003eCapretta's Iterative Monad Transformer\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003eFree\u003c/code\u003e, this is a true monad transformer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Iter.html",
        "fct-type": "module",
        "title": "Iter"
      },
      "index": {
        "description": "Based on Capretta Iterative Monad Transformer Unlike Free this is true monad transformer",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "Iter",
        "normalized": "",
        "package": "free",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#t:IterF",
      "description": {
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Iter.html#IterF",
        "fct-type": "data",
        "title": "IterF"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "IterF",
        "normalized": "",
        "package": "free",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#t:IterT",
      "description": {
        "fct-descr": "\u003cp\u003eThe monad supporting iteration based over a base monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eIterT\u003c/a\u003e\u003c/code\u003e ~ \u003ccode\u003eFreeT\u003c/code\u003e \u003ccode\u003eIdentity\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Iter.html#IterT",
        "fct-type": "data",
        "title": "IterT"
      },
      "index": {
        "description": "The monad supporting iteration based over base monad IterT FreeT Identity",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "IterT",
        "normalized": "",
        "package": "free",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#t:MonadFree",
      "description": {
        "fct-descr": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Free-Class.html#MonadFree",
        "fct-type": "class",
        "title": "MonadFree"
      },
      "index": {
        "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "MonadFree",
        "normalized": "",
        "package": "free",
        "partial": "Monad Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:Iter",
      "description": {
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "Iter b",
        "fct-source": "src/Control-Monad-Trans-Iter.html#IterF",
        "fct-type": "function",
        "title": "Iter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "Iter",
        "normalized": "",
        "package": "free",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:IterT",
      "description": {
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "IterT",
        "fct-source": "src/Control-Monad-Trans-Iter.html#IterT",
        "fct-type": "function",
        "title": "IterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "IterT",
        "normalized": "",
        "package": "free",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:Pure",
      "description": {
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "Pure a",
        "fct-source": "src/Control-Monad-Trans-Iter.html#IterF",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "Pure",
        "normalized": "",
        "package": "free",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:delay",
      "description": {
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Iter.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "delay",
        "normalized": "a b-\u003ea b",
        "package": "free",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:hoistIterT",
      "description": {
        "fct-descr": "\u003cp\u003eLift a monad homomorphism from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e into a Monad homomorphism from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIterT\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIterT\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "(forall a.  m a -\u003e n a) -\u003e IterT m b -\u003e IterT n b",
        "fct-source": "src/Control-Monad-Trans-Iter.html#hoistIterT",
        "fct-type": "function",
        "title": "hoistIterT"
      },
      "index": {
        "description": "Lift monad homomorphism from to into Monad homomorphism from IterT to IterT",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "hoistIterT",
        "normalized": "(a b c d-\u003ee d)-\u003eIterT c f-\u003eIterT e f",
        "package": "free",
        "partial": "Iter",
        "signature": "(forall a. m a-\u003en a)-\u003eIterT m b-\u003eIterT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:iter",
      "description": {
        "fct-descr": "\u003cp\u003eTear down a \u003ccode\u003eFree\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e using iteration.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "(m a -\u003e a) -\u003e IterT m a -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Iter.html#iter",
        "fct-type": "function",
        "title": "iter"
      },
      "index": {
        "description": "Tear down Free Monad using iteration",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "iter",
        "normalized": "(a b-\u003eb)-\u003eIterT a b-\u003eb",
        "package": "free",
        "partial": "",
        "signature": "(m a-\u003ea)-\u003eIterT m a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:retract",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003elift\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003elift\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "IterT m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Iter.html#retract",
        "fct-type": "function",
        "title": "retract"
      },
      "index": {
        "description": "retract is the left inverse of lift retract lift id",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "retract",
        "normalized": "IterT a b-\u003ea b",
        "package": "free",
        "partial": "",
        "signature": "IterT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:runIterT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "m (IterF a (IterT m a))",
        "fct-source": "src/Control-Monad-Trans-Iter.html#IterT",
        "fct-type": "function",
        "title": "runIterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "runIterT",
        "normalized": "",
        "package": "free",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-Monad-Trans-Iter.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Iter",
        "fct-package": "free",
        "fct-signature": "f (m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#wrap",
        "fct-type": "method",
        "title": "wrap"
      },
      "index": {
        "description": "Add layer wrap fmap wrap fmap return",
        "hierarchy": "Control Monad Trans Iter",
        "module": "Control.Monad.Trans.Iter",
        "name": "wrap",
        "normalized": "a(b c)-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "f(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eleft-distributive MonadPlus for free.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "module",
        "fct-source": "src/Control-MonadPlus-Free.html",
        "fct-type": "module",
        "title": "Free"
      },
      "index": {
        "description": "left-distributive MonadPlus for free",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#t:Free",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFormally\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e is a free \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e if every monadplus homomorphism\n from \u003ccode\u003en\u003c/code\u003e to another MonadPlus \u003ccode\u003em\u003c/code\u003e is equivalent to a natural transformation\n from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe model this internally as if left-distribution holds.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.haskell.org/haskellwiki/MonadPlus\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "data",
        "fct-source": "src/Control-MonadPlus-Free.html#Free",
        "fct-type": "data",
        "title": "Free"
      },
      "index": {
        "description": "The Free MonadPlus for Functor Formally MonadPlus is free MonadPlus for if every monadplus homomorphism from to another MonadPlus is equivalent to natural transformation from to We model this internally as if left-distribution holds",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#t:MonadFree",
      "description": {
        "fct-descr": "\u003cp\u003eMonads provide substitution (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e) and renormalization (\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f m)\u003c/pre\u003e\u003cp\u003eA free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is one that does no work during the normalization step beyond simply grafting the two monadic values together.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e is not a free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (in this sense) because \u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e [[a]]\u003c/code\u003e smashes the lists flat.\n\u003c/p\u003e\u003cp\u003eOn the other hand, consider:\n\u003c/p\u003e\u003cpre\u003e\n data Tree a = Bin (Tree a) (Tree a) | Tip a\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Tree where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = Tip\n   Tip a \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   Bin l r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Bin (l \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) (r \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of Pair:\n\u003c/p\u003e\u003cpre\u003e\n data Pair a = Pair a a\n\u003c/pre\u003e\u003cp\u003eAnd we could make an instance of \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e for it directly:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e Pair Tree where\n    \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e (Pair l r) = Bin l r\n\u003c/pre\u003e\u003cp\u003eOr we could choose to program with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e Pair\u003c/code\u003e instead of \u003ccode\u003eTree\u003c/code\u003e\n and thereby avoid having to define our own \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eMoreover, \u003ca\u003eControl.Monad.Free.Church\u003c/a\u003e provides a \u003ccode\u003e\u003ca\u003eMonadFree\u003c/a\u003e\u003c/code\u003e\n instance that can improve the \u003cem\u003easymptotic\u003c/em\u003e complexity of code that\n constructs free monads by effectively reassociating the use of\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e). You may also want to take a look at the \u003ccode\u003ekan-extensions\u003c/code\u003e\n package (\u003ca\u003ehttp://hackage.haskell.org/package/kan-extensions\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e for a more formal definition of the free \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n for a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Free-Class.html#MonadFree",
        "fct-type": "class",
        "title": "MonadFree"
      },
      "index": {
        "description": "Monads provide substitution fmap and renormalization join join fmap free Monad is one that does no work during the normalization step beyond simply grafting the two monadic values together is not free Monad in this sense because join smashes the lists flat On the other hand consider data Tree Bin Tree Tree Tip instance Monad Tree where return Tip Tip Bin Bin This Monad is the free Monad of Pair data Pair Pair And we could make an instance of MonadFree for it directly instance MonadFree Pair Tree where wrap Pair Bin Or we could choose to program with Free Pair instead of Tree and thereby avoid having to define our own Monad instance Moreover Control.Monad.Free.Church provides MonadFree instance that can improve the asymptotic complexity of code that constructs free monads by effectively reassociating the use of You may also want to take look at the kan-extensions package http hackage.haskell.org package kan-extensions See Free for more formal definition of the free Monad for Functor",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "MonadFree",
        "normalized": "",
        "package": "free",
        "partial": "Monad Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:Free",
      "description": {
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "Free (f (Free f a))",
        "fct-source": "src/Control-MonadPlus-Free.html#Free",
        "fct-type": "function",
        "title": "Free"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "Free",
        "normalized": "",
        "package": "free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:Plus",
      "description": {
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "Plus [Free f a]",
        "fct-source": "src/Control-MonadPlus-Free.html#Free",
        "fct-type": "function",
        "title": "Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "Plus",
        "normalized": "Plus[Free a b]",
        "package": "free",
        "partial": "Plus",
        "signature": "Plus[Free f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:Pure",
      "description": {
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "Pure a",
        "fct-source": "src/Control-MonadPlus-Free.html#Free",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "Pure",
        "normalized": "",
        "package": "free",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:hoistFree",
      "description": {
        "fct-descr": "\u003cp\u003eLift a natural transformation from \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003eg\u003c/code\u003e into a natural transformation from \u003ccode\u003e\u003ccode\u003eFreeT\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003eFreeT\u003c/code\u003e g\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "(forall a.  f a -\u003e g a) -\u003e Free f b -\u003e Free g b",
        "fct-source": "src/Control-MonadPlus-Free.html#hoistFree",
        "fct-type": "function",
        "title": "hoistFree"
      },
      "index": {
        "description": "Lift natural transformation from to into natural transformation from FreeT to FreeT",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "hoistFree",
        "normalized": "(a b c d-\u003ee d)-\u003eFree c f-\u003eFree e f",
        "package": "free",
        "partial": "Free",
        "signature": "(forall a. f a-\u003eg a)-\u003eFree f b-\u003eFree g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:iter",
      "description": {
        "fct-descr": "\u003cp\u003eTear down a \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e using iteration.\n\u003c/p\u003e",
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "(f a -\u003e a) -\u003e ([a] -\u003e a) -\u003e Free f a -\u003e a",
        "fct-source": "src/Control-MonadPlus-Free.html#iter",
        "fct-type": "function",
        "title": "iter"
      },
      "index": {
        "description": "Tear down Free Monad using iteration",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "iter",
        "normalized": "(a b-\u003eb)-\u003e([b]-\u003eb)-\u003eFree a b-\u003eb",
        "package": "free",
        "partial": "",
        "signature": "(f a-\u003ea)-\u003e([a]-\u003ea)-\u003eFree f a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:iterM",
      "description": {
        "fct-descr": "\u003cp\u003eLike iter for monadic values.\n\u003c/p\u003e",
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "(f (m a) -\u003e m a) -\u003e ([m a] -\u003e m a) -\u003e Free f a -\u003e m a",
        "fct-source": "src/Control-MonadPlus-Free.html#iterM",
        "fct-type": "function",
        "title": "iterM"
      },
      "index": {
        "description": "Like iter for monadic values",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "iterM",
        "normalized": "(a(b c)-\u003eb c)-\u003e([b c]-\u003eb c)-\u003eFree a c-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "(f(m a)-\u003em a)-\u003e([m a]-\u003em a)-\u003eFree f a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:liftF",
      "description": {
        "fct-descr": "\u003cp\u003eA version of lift that can be used with just a Functor for f.\n\u003c/p\u003e",
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "f a -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#liftF",
        "fct-type": "function",
        "title": "liftF"
      },
      "index": {
        "description": "version of lift that can be used with just Functor for",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "liftF",
        "normalized": "a b-\u003ec b",
        "package": "free",
        "partial": "",
        "signature": "f a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:retract",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e is the left inverse of \u003ccode\u003elift\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003elift\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eretract\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "Free f a -\u003e f a",
        "fct-source": "src/Control-MonadPlus-Free.html#retract",
        "fct-type": "function",
        "title": "retract"
      },
      "index": {
        "description": "retract is the left inverse of lift and liftF retract lift id retract liftF id",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "retract",
        "normalized": "Free a b-\u003ea b",
        "package": "free",
        "partial": "",
        "signature": "Free f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free/docs/Control-MonadPlus-Free.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a layer.\n\u003c/p\u003e\u003cpre\u003e\n wrap (fmap f x) &#8801; wrap (fmap return x) \u003e\u003e= f\n\u003c/pre\u003e",
        "fct-module": "Control.MonadPlus.Free",
        "fct-package": "free",
        "fct-signature": "f (m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Free-Class.html#wrap",
        "fct-type": "method",
        "title": "wrap"
      },
      "index": {
        "description": "Add layer wrap fmap wrap fmap return",
        "hierarchy": "Control MonadPlus Free",
        "module": "Control.MonadPlus.Free",
        "name": "wrap",
        "normalized": "a(b c)-\u003eb c",
        "package": "free",
        "partial": "",
        "signature": "f(m a)-\u003em a"
      }
    }
  }
]