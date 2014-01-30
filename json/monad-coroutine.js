[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA coroutine can choose to launch another coroutine. In this case, the nested coroutines always suspend to their\n invoker. If a function from this module, such as \u003ccode\u003e\u003ca\u003epogoStickNested\u003c/a\u003e\u003c/code\u003e, is used to run a nested coroutine, the parent\n coroutine can be automatically suspended as well. A single suspension can thus suspend an entire chain of nested\n coroutines.\n\u003c/p\u003e\u003cp\u003eNestable coroutines of this kind should group their suspension functors into an \u003ccode\u003e\u003ca\u003eEitherFunctor\u003c/a\u003e\u003c/code\u003e. A simple coroutine\n suspension can be converted to a nested one using functions \u003ccode\u003e\u003ca\u003emapSuspension\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftAncestor\u003c/a\u003e\u003c/code\u003e. To run nested\n coroutines, use \u003ccode\u003e\u003ca\u003epogoStickNested\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eweave\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eNestWeaveStepper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html",
        "fct-type": "module",
        "title": "Nested"
      },
      "index": {
        "description": "coroutine can choose to launch another coroutine In this case the nested coroutines always suspend to their invoker If function from this module such as pogoStickNested is used to run nested coroutine the parent coroutine can be automatically suspended as well single suspension can thus suspend an entire chain of nested coroutines Nestable coroutines of this kind should group their suspension functors into an EitherFunctor simple coroutine suspension can be converted to nested one using functions mapSuspension and liftAncestor To run nested coroutines use pogoStickNested or weave with NestWeaveStepper",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "Nested",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Nested",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#t:AncestorFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eClass of functors that can be lifted.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#AncestorFunctor",
        "fct-type": "class",
        "title": "AncestorFunctor"
      },
      "index": {
        "description": "Class of functors that can be lifted",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "AncestorFunctor",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Ancestor Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#t:ChildFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eClass of functors that can contain another functor.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#ChildFunctor",
        "fct-type": "class",
        "title": "ChildFunctor"
      },
      "index": {
        "description": "Class of functors that can contain another functor",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "ChildFunctor",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Child Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#t:EitherFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two alternative functors into one, applying one or the other. Used for nested coroutines.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#EitherFunctor",
        "fct-type": "data",
        "title": "EitherFunctor"
      },
      "index": {
        "description": "Combines two alternative functors into one applying one or the other Used for nested coroutines",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "EitherFunctor",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Either Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#t:NestWeaveStepper",
      "description": {
        "fct-descr": "\u003cp\u003eType of functions capable of combining two child coroutines' \u003ccode\u003e\u003ca\u003eCoroutineStepResult\u003c/a\u003e\u003c/code\u003e values into a parent coroutine.\n Use with the function \u003ccode\u003e\u003ca\u003eweave\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#NestWeaveStepper",
        "fct-type": "type",
        "title": "NestWeaveStepper"
      },
      "index": {
        "description": "Type of functions capable of combining two child coroutines CoroutineStepResult values into parent coroutine Use with the function weave",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "NestWeaveStepper",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Nest Weave Stepper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#v:LeftF",
      "description": {
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "LeftF (l x)",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#EitherFunctor",
        "fct-type": "function",
        "title": "LeftF"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "LeftF",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#v:RightF",
      "description": {
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "RightF (r x)",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#EitherFunctor",
        "fct-type": "function",
        "title": "RightF"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "RightF",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#v:eitherFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e for the EitherFunctor data type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "(l x -\u003e y) -\u003e (r x -\u003e y) -\u003e EitherFunctor l r x -\u003e y",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#eitherFunctor",
        "fct-type": "function",
        "title": "eitherFunctor"
      },
      "index": {
        "description": "Like either for the EitherFunctor data type",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "eitherFunctor",
        "normalized": "(a b-\u003ec)-\u003e(d b-\u003ec)-\u003eEitherFunctor a d b-\u003ec",
        "package": "monad-coroutine",
        "partial": "Functor",
        "signature": "(l x-\u003ey)-\u003e(r x-\u003ey)-\u003eEitherFunctor l r x-\u003ey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#v:liftAncestor",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a coroutine into a descendant nested coroutine.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "Coroutine a m x -\u003e Coroutine d m x",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#liftAncestor",
        "fct-type": "function",
        "title": "liftAncestor"
      },
      "index": {
        "description": "Converts coroutine into descendant nested coroutine",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "liftAncestor",
        "normalized": "Coroutine a b c-\u003eCoroutine d b c",
        "package": "monad-coroutine",
        "partial": "Ancestor",
        "signature": "Coroutine a m x-\u003eCoroutine d m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#v:liftFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the ancestor functor into its descendant. The descendant functor typically contains the ancestor.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "a x -\u003e d x",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#liftFunctor",
        "fct-type": "method",
        "title": "liftFunctor"
      },
      "index": {
        "description": "Convert the ancestor functor into its descendant The descendant functor typically contains the ancestor",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "liftFunctor",
        "normalized": "a b-\u003ec b",
        "package": "monad-coroutine",
        "partial": "Functor",
        "signature": "a x-\u003ed x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#v:liftParent",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a coroutine into a child nested coroutine.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "Coroutine p m x -\u003e Coroutine c m x",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#liftParent",
        "fct-type": "function",
        "title": "liftParent"
      },
      "index": {
        "description": "Converts coroutine into child nested coroutine",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "liftParent",
        "normalized": "Coroutine a b c-\u003eCoroutine d b c",
        "package": "monad-coroutine",
        "partial": "Parent",
        "signature": "Coroutine p m x-\u003eCoroutine c m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#v:mapNestedSuspension",
      "description": {
        "fct-descr": "\u003cp\u003eChange the suspension functor of a nested \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "(forall y.  s y -\u003e s' y) -\u003e Coroutine (EitherFunctor s0 s) m x -\u003e Coroutine (EitherFunctor s0 s') m x",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#mapNestedSuspension",
        "fct-type": "function",
        "title": "mapNestedSuspension"
      },
      "index": {
        "description": "Change the suspension functor of nested Coroutine",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "mapNestedSuspension",
        "normalized": "(a b c d-\u003ee d)-\u003eCoroutine(EitherFunctor c c)f g-\u003eCoroutine(EitherFunctor c e)f g",
        "package": "monad-coroutine",
        "partial": "Nested Suspension",
        "signature": "(forall y. s y-\u003es' y)-\u003eCoroutine(EitherFunctor s s)m x-\u003eCoroutine(EitherFunctor s s')m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#v:pogoStickNested",
      "description": {
        "fct-descr": "\u003cp\u003eRun a nested \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e that can suspend both itself and the current \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "(s2 (Coroutine (EitherFunctor s1 s2) m x) -\u003e Coroutine (EitherFunctor s1 s2) m x) -\u003e Coroutine (EitherFunctor s1 s2) m x -\u003e Coroutine s1 m x",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#pogoStickNested",
        "fct-type": "function",
        "title": "pogoStickNested"
      },
      "index": {
        "description": "Run nested Coroutine that can suspend both itself and the current Coroutine",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "pogoStickNested",
        "normalized": "(a(Coroutine(EitherFunctor a a)b c)-\u003eCoroutine(EitherFunctor a a)b c)-\u003eCoroutine(EitherFunctor a a)b c-\u003eCoroutine a b c",
        "package": "monad-coroutine",
        "partial": "Stick Nested",
        "signature": "(s(Coroutine(EitherFunctor s s)m x)-\u003eCoroutine(EitherFunctor s s)m x)-\u003eCoroutine(EitherFunctor s s)m x-\u003eCoroutine s m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-Nested.html#v:wrap",
      "description": {
        "fct-module": "Control.Monad.Coroutine.Nested",
        "fct-package": "monad-coroutine",
        "fct-signature": "Parent c x -\u003e c x",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#wrap",
        "fct-type": "method",
        "title": "wrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine Nested",
        "module": "Control.Monad.Coroutine.Nested",
        "name": "wrap",
        "normalized": "Parent a b-\u003ea b",
        "package": "monad-coroutine",
        "partial": "",
        "signature": "Parent c x-\u003ec x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some common suspension functors for use with the \u003ca\u003eControl.Monad.Coroutine\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html",
        "fct-type": "module",
        "title": "SuspensionFunctors"
      },
      "index": {
        "description": "This module defines some common suspension functors for use with the Control.Monad.Coroutine module",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "SuspensionFunctors",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Suspension Functors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#t:Await",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e functor instance is equivalent to (-\u003e) but more descriptive. A coroutine with this suspension functor\n demands a value whenever it suspends, before it can resume its execution.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Await",
        "fct-type": "newtype",
        "title": "Await"
      },
      "index": {
        "description": "The Await functor instance is equivalent to but more descriptive coroutine with this suspension functor demands value whenever it suspends before it can resume its execution",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Await",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Await",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#t:EitherFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two alternative functors into one, applying one or the other. Used for nested coroutines.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#EitherFunctor",
        "fct-type": "data",
        "title": "EitherFunctor"
      },
      "index": {
        "description": "Combines two alternative functors into one applying one or the other Used for nested coroutines",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "EitherFunctor",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Either Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#t:ReadRequest",
      "description": {
        "fct-descr": "\u003cp\u003eCombines a \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eReadingResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#ReadRequest",
        "fct-type": "data",
        "title": "ReadRequest"
      },
      "index": {
        "description": "Combines Yield of Reader with an Await for ReadingResult",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "ReadRequest",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Read Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#t:Reader",
      "description": {
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Reader",
        "fct-type": "type",
        "title": "Reader"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Reader",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#t:Reading",
      "description": {
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Reading",
        "fct-type": "data",
        "title": "Reading"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Reading",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Reading",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#t:ReadingResult",
      "description": {
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#ReadingResult",
        "fct-type": "data",
        "title": "ReadingResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "ReadingResult",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Reading Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e functor instance combines a \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e of a request with an \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e for a response.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "The Request functor instance combines Yield of request with an Await for response",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Request",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#t:Yield",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e functor instance is equivalent to (,) but more descriptive. A coroutine with this suspension functor\n provides a value with every suspension.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Yield",
        "fct-type": "data",
        "title": "Yield"
      },
      "index": {
        "description": "The Yield functor instance is equivalent to but more descriptive coroutine with this suspension functor provides value with every suspension",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Yield",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:Advance",
      "description": {
        "fct-descr": "\u003cp\u003eA part of the result with the reader of more input and the EOF\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Advance (Reader x py y) y py",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Reading",
        "fct-type": "function",
        "title": "Advance"
      },
      "index": {
        "description": "part of the result with the reader of more input and the EOF",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Advance",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Advance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:Await",
      "description": {
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Await (x -\u003e y)",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Await",
        "fct-type": "function",
        "title": "Await"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Await",
        "normalized": "Await(a-\u003eb)",
        "package": "monad-coroutine",
        "partial": "Await",
        "signature": "Await(x-\u003ey)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:Deferred",
      "description": {
        "fct-descr": "\u003cp\u003eReader of more input, plus the result if there isn't any.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Deferred (Reader x py y) y",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Reading",
        "fct-type": "function",
        "title": "Deferred"
      },
      "index": {
        "description": "Reader of more input plus the result if there isn any",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Deferred",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Deferred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:Final",
      "description": {
        "fct-descr": "\u003cp\u003eFinal result chunk with the unconsumed portion of the input\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Final x y",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Reading",
        "fct-type": "function",
        "title": "Final"
      },
      "index": {
        "description": "Final result chunk with the unconsumed portion of the input",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Final",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:FinalResult",
      "description": {
        "fct-descr": "\u003cp\u003eFinal result chunk\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "FinalResult y",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#ReadingResult",
        "fct-type": "function",
        "title": "FinalResult"
      },
      "index": {
        "description": "Final result chunk",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "FinalResult",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Final Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:LeftF",
      "description": {
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "LeftF (l x)",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#EitherFunctor",
        "fct-type": "function",
        "title": "LeftF"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "LeftF",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:Request",
      "description": {
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Request request (response -\u003e x)",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Request",
        "normalized": "Request a(b-\u003ec)",
        "package": "monad-coroutine",
        "partial": "Request",
        "signature": "Request request(response-\u003ex)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:ResultPart",
      "description": {
        "fct-descr": "\u003cp\u003eA part of the result with the reader of more input\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "ResultPart py (Reader x py y)",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#ReadingResult",
        "fct-type": "function",
        "title": "ResultPart"
      },
      "index": {
        "description": "part of the result with the reader of more input",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "ResultPart",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Result Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:RightF",
      "description": {
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "RightF (r x)",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#EitherFunctor",
        "fct-type": "function",
        "title": "RightF"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "RightF",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:Yield",
      "description": {
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Yield x y",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#Yield",
        "fct-type": "function",
        "title": "Yield"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "Yield",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:await",
      "description": {
        "fct-descr": "\u003cp\u003eSuspend the current coroutine until a value is provided.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Coroutine (Await x) m x",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#await",
        "fct-type": "function",
        "title": "await"
      },
      "index": {
        "description": "Suspend the current coroutine until value is provided",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "await",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:concatAwaits",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a coroutine awaiting single values into one awaiting collections of values.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Coroutine (Await x) m r -\u003e Coroutine (Await (f x)) m r",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#concatAwaits",
        "fct-type": "function",
        "title": "concatAwaits"
      },
      "index": {
        "description": "Converts coroutine awaiting single values into one awaiting collections of values",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "concatAwaits",
        "normalized": "Coroutine(Await a)b c-\u003eCoroutine(Await(d a))b c",
        "package": "monad-coroutine",
        "partial": "Awaits",
        "signature": "Coroutine(Await x)m r-\u003eCoroutine(Await(f x))m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:concatYields",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a coroutine yielding collections of values into one yielding single values.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Coroutine (Yield (f x)) m r -\u003e Coroutine (Yield x) m r",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#concatYields",
        "fct-type": "function",
        "title": "concatYields"
      },
      "index": {
        "description": "Converts coroutine yielding collections of values into one yielding single values",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "concatYields",
        "normalized": "Coroutine(Yield(a b))c d-\u003eCoroutine(Yield b)c d",
        "package": "monad-coroutine",
        "partial": "Yields",
        "signature": "Coroutine(Yield(f x))m r-\u003eCoroutine(Yield x)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:eitherFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e for the EitherFunctor data type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "(l x -\u003e y) -\u003e (r x -\u003e y) -\u003e EitherFunctor l r x -\u003e y",
        "fct-source": "src/Control-Monad-Coroutine-Nested.html#eitherFunctor",
        "fct-type": "function",
        "title": "eitherFunctor"
      },
      "index": {
        "description": "Like either for the EitherFunctor data type",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "eitherFunctor",
        "normalized": "(a b-\u003ec)-\u003e(d b-\u003ec)-\u003eEitherFunctor a d b-\u003ec",
        "package": "monad-coroutine",
        "partial": "Functor",
        "signature": "(l x-\u003ey)-\u003e(r x-\u003ey)-\u003eEitherFunctor l r x-\u003ey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eSuspend yielding a request and awaiting the response.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "x -\u003e Coroutine (Request x y) m y",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "Suspend yielding request and awaiting the response",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "request",
        "normalized": "a-\u003eCoroutine(Request a b)c b",
        "package": "monad-coroutine",
        "partial": "",
        "signature": "x-\u003eCoroutine(Request x y)m y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:requestRead",
      "description": {
        "fct-descr": "\u003cp\u003eSuspend yielding a \u003ccode\u003e\u003ca\u003eReadRequest\u003c/a\u003e\u003c/code\u003e and awaiting the \u003ccode\u003e\u003ca\u003eReadingResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "Reader x py y -\u003e Coroutine (ReadRequest x) m (ReadingResult x py y)",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#requestRead",
        "fct-type": "function",
        "title": "requestRead"
      },
      "index": {
        "description": "Suspend yielding ReadRequest and awaiting the ReadingResult",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "requestRead",
        "normalized": "Reader a b c-\u003eCoroutine(ReadRequest a)d(ReadingResult a b c)",
        "package": "monad-coroutine",
        "partial": "Read",
        "signature": "Reader x py y-\u003eCoroutine(ReadRequest x)m(ReadingResult x py y)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:weaveAwaitMaybeYield",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eweaveAwaitYield\u003c/a\u003e\u003c/code\u003e, except the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e coroutine expects \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e-wrapped values. After the \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e coroutine\n terminates, the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e coroutine receives only \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "WeaveStepper (Await (Maybe x)) (Yield x) Identity m r1 r2 (r1, r2)",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#weaveAwaitMaybeYield",
        "fct-type": "function",
        "title": "weaveAwaitMaybeYield"
      },
      "index": {
        "description": "Like weaveAwaitYield except the Await coroutine expects Maybe wrapped values After the Yield coroutine terminates the Await coroutine receives only Nothing",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "weaveAwaitMaybeYield",
        "normalized": "WeaveStepper(Await(Maybe a))(Yield a)Identity b c c(c,c)",
        "package": "monad-coroutine",
        "partial": "Await Maybe Yield",
        "signature": "WeaveStepper(Await(Maybe x))(Yield x)Identity m r r(r,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:weaveAwaitYield",
      "description": {
        "fct-descr": "\u003cp\u003eWeaves the suspensions of a \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e and an \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e coroutine together into a plain \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e coroutine. If the\n \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e coroutine terminates first, the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e one is resumed using the argument default value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "x -\u003e WeaveStepper (Await x) (Yield x) Identity m r1 r2 (r1, r2)",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#weaveAwaitYield",
        "fct-type": "function",
        "title": "weaveAwaitYield"
      },
      "index": {
        "description": "Weaves the suspensions of Yield and an Await coroutine together into plain Identity coroutine If the Yield coroutine terminates first the Await one is resumed using the argument default value",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "weaveAwaitYield",
        "normalized": "a-\u003eWeaveStepper(Await a)(Yield a)Identity b c c(c,c)",
        "package": "monad-coroutine",
        "partial": "Await Yield",
        "signature": "x-\u003eWeaveStepper(Await x)(Yield x)Identity m r r(r,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:weaveNestedReadWriteRequests",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eweaveReadWriteRequests\u003c/a\u003e\u003c/code\u003e but for nested coroutines.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "NestWeaveStepper s (ReadRequest x) (Request x x) m r1 r2 (r1, r2)",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#weaveNestedReadWriteRequests",
        "fct-type": "function",
        "title": "weaveNestedReadWriteRequests"
      },
      "index": {
        "description": "Like weaveReadWriteRequests but for nested coroutines",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "weaveNestedReadWriteRequests",
        "normalized": "NestWeaveStepper a(ReadRequest b)(Request b b)c d d(d,d)",
        "package": "monad-coroutine",
        "partial": "Nested Read Write Requests",
        "signature": "NestWeaveStepper s(ReadRequest x)(Request x x)m r r(r,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:weaveReadWriteRequests",
      "description": {
        "fct-descr": "\u003cp\u003eThe consumer coroutine requests input through \u003ccode\u003e\u003ca\u003eReadRequest\u003c/a\u003e\u003c/code\u003e and gets \u003ccode\u003e\u003ca\u003eReadingResult\u003c/a\u003e\u003c/code\u003e in response. The producer\n coroutine receives the unconsumed portion of its last requested chunk as response.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "WeaveStepper (ReadRequest x) (Request x x) Identity m r1 r2 (r1, r2)",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#weaveReadWriteRequests",
        "fct-type": "function",
        "title": "weaveReadWriteRequests"
      },
      "index": {
        "description": "The consumer coroutine requests input through ReadRequest and gets ReadingResult in response The producer coroutine receives the unconsumed portion of its last requested chunk as response",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "weaveReadWriteRequests",
        "normalized": "WeaveStepper(ReadRequest a)(Request a a)Identity b c c(c,c)",
        "package": "monad-coroutine",
        "partial": "Read Write Requests",
        "signature": "WeaveStepper(ReadRequest x)(Request x x)Identity m r r(r,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:weaveRequests",
      "description": {
        "fct-descr": "\u003cp\u003eWeaves two complementary \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e coroutine suspensions into a coroutine \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003eing both requests. If one\n coroutine terminates before the other, the remaining coroutine is fed the appropriate  default value argument.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "x -\u003e y -\u003e WeaveStepper (Request x y) (Request y x) (Yield (x, y)) m r1 r2 (r1, r2)",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#weaveRequests",
        "fct-type": "function",
        "title": "weaveRequests"
      },
      "index": {
        "description": "Weaves two complementary Request coroutine suspensions into coroutine yield ing both requests If one coroutine terminates before the other the remaining coroutine is fed the appropriate default value argument",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "weaveRequests",
        "normalized": "a-\u003eb-\u003eWeaveStepper(Request a b)(Request b a)(Yield(a,b))c d d(d,d)",
        "package": "monad-coroutine",
        "partial": "Requests",
        "signature": "x-\u003ey-\u003eWeaveStepper(Request x y)(Request y x)(Yield(x,y))m r r(r,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine-SuspensionFunctors.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eSuspend the current coroutine yielding a value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.SuspensionFunctors",
        "fct-package": "monad-coroutine",
        "fct-signature": "x -\u003e Coroutine (Yield x) m ()",
        "fct-source": "src/Control-Monad-Coroutine-SuspensionFunctors.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Suspend the current coroutine yielding value",
        "hierarchy": "Control Monad Coroutine SuspensionFunctors",
        "module": "Control.Monad.Coroutine.SuspensionFunctors",
        "name": "yield",
        "normalized": "a-\u003eCoroutine(Yield a)b()",
        "package": "monad-coroutine",
        "partial": "",
        "signature": "x-\u003eCoroutine(Yield x)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e monadic computation can \u003ccode\u003e\u003ca\u003esuspend\u003c/a\u003e\u003c/code\u003e its execution at any time, returning control to its invoker. The\n returned suspension value contains the coroutine's resumption wrapped in a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e. Here is an example of a\n coroutine in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad that suspends computation using the functor \u003ccode\u003eYield\u003c/code\u003e from the\n \u003ca\u003eControl.Monad.Coroutine.SuspensionFunctors\u003c/a\u003e module:\n\u003c/p\u003e\u003cpre\u003e\n producer :: Coroutine (Yield Int) IO String\n producer = do yield 1\n               lift (putStrLn \"Produced one, next is four.\")\n               yield 4\n               return \"Finished\"\n\u003c/pre\u003e\u003cp\u003eTo continue the execution of a suspended \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e, extract it from the suspension functor and apply its \u003ccode\u003e\u003ca\u003eresume\u003c/a\u003e\u003c/code\u003e\n method. The easiest way to run a coroutine to completion is by using the \u003ccode\u003e\u003ca\u003epogoStick\u003c/a\u003e\u003c/code\u003e function, which keeps resuming\n the coroutine in trampolined style until it completes. Here is one way to apply \u003ccode\u003e\u003ca\u003epogoStick\u003c/a\u003e\u003c/code\u003e to the \u003cem\u003eproducer\u003c/em\u003e example\n above:\n\u003c/p\u003e\u003cpre\u003e\n printProduce :: Show x =\u003e Coroutine (Yield x) IO r -\u003e IO r\n printProduce producer = pogoStick (\\(Yield x cont) -\u003e lift (print x) \u003e\u003e cont) producer\n\u003c/pre\u003e\u003cp\u003eMultiple concurrent coroutines can be run as well, and this module provides two different ways. To run two\n interleaved computations, use a \u003ccode\u003e\u003ca\u003eWeaveStepper\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eweave\u003c/a\u003e\u003c/code\u003e together steps of two different coroutines into a single\n coroutine, which can then be executed by \u003ccode\u003e\u003ca\u003epogoStick\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor various uses of trampoline-style coroutines, see\n\u003c/p\u003e\u003cpre\u003e Coroutine Pipelines - Mario Bla&#382;evi&#263;, The Monad.Reader issue 19, pages 29-50\n\u003c/pre\u003e\u003cpre\u003e Trampolined Style - Ganz, S. E. Friedman, D. P. Wand, M, ACM SIGPLAN NOTICES, 1999, VOL 34; NUMBER 9, pages 18-27\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e The Essence of Multitasking - William L. Harrison, Proceedings of the 11th International Conference on Algebraic\n Methodology and Software Technology, volume 4019 of Lecture Notes in Computer Science, 2006\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Coroutine.html",
        "fct-type": "module",
        "title": "Coroutine"
      },
      "index": {
        "description": "This module defines the Coroutine monad transformer Coroutine monadic computation can suspend its execution at any time returning control to its invoker The returned suspension value contains the coroutine resumption wrapped in Functor Here is an example of coroutine in the IO monad that suspends computation using the functor Yield from the Control.Monad.Coroutine.SuspensionFunctors module producer Coroutine Yield Int IO String producer do yield lift putStrLn Produced one next is four yield return Finished To continue the execution of suspended Coroutine extract it from the suspension functor and apply its resume method The easiest way to run coroutine to completion is by using the pogoStick function which keeps resuming the coroutine in trampolined style until it completes Here is one way to apply pogoStick to the producer example above printProduce Show Coroutine Yield IO IO printProduce producer pogoStick Yield cont lift print cont producer Multiple concurrent coroutines can be run as well and this module provides two different ways To run two interleaved computations use WeaveStepper to weave together steps of two different coroutines into single coroutine which can then be executed by pogoStick For various uses of trampoline-style coroutines see Coroutine Pipelines Mario Bla evi The Monad.Reader issue pages Trampolined Style Ganz Friedman Wand ACM SIGPLAN NOTICES VOL NUMBER pages and The Essence of Multitasking William Harrison Proceedings of the th International Conference on Algebraic Methodology and Software Technology volume of Lecture Notes in Computer Science",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "Coroutine",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Coroutine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#t:Coroutine",
      "description": {
        "fct-descr": "\u003cp\u003eSuspending, resumable monadic computations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Coroutine.html#Coroutine",
        "fct-type": "newtype",
        "title": "Coroutine"
      },
      "index": {
        "description": "Suspending resumable monadic computations",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "Coroutine",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Coroutine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#t:CoroutineStepResult",
      "description": {
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Coroutine.html#CoroutineStepResult",
        "fct-type": "type",
        "title": "CoroutineStepResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "CoroutineStepResult",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Coroutine Step Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#t:Naught",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNaught\u003c/a\u003e\u003c/code\u003e functor instance doesn't contain anything and cannot be constructed. Used for building non-suspendable\n coroutines.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Coroutine.html#Naught",
        "fct-type": "data",
        "title": "Naught"
      },
      "index": {
        "description": "The Naught functor instance doesn contain anything and cannot be constructed Used for building non-suspendable coroutines",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "Naught",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Naught",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#t:PairBinder",
      "description": {
        "fct-descr": "\u003cp\u003eType of functions that can bind two monadic values together, used to combine two coroutines' step results. The two\n functions provided here are \u003ccode\u003e\u003ca\u003esequentialBinder\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparallelBinder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Coroutine.html#PairBinder",
        "fct-type": "type",
        "title": "PairBinder"
      },
      "index": {
        "description": "Type of functions that can bind two monadic values together used to combine two coroutines step results The two functions provided here are sequentialBinder and parallelBinder",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "PairBinder",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Pair Binder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#t:WeaveStepper",
      "description": {
        "fct-descr": "\u003cp\u003eType of functions capable of combining two coroutines' \u003ccode\u003e\u003ca\u003eCoroutineStepResult\u003c/a\u003e\u003c/code\u003e values into a third one. Module\n \u003ca\u003eMonad.Coroutine.SuspensionFunctors\u003c/a\u003e contains several \u003ccode\u003e\u003ca\u003eWeaveStepper\u003c/a\u003e\u003c/code\u003e examples.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Coroutine.html#WeaveStepper",
        "fct-type": "type",
        "title": "WeaveStepper"
      },
      "index": {
        "description": "Type of functions capable of combining two coroutines CoroutineStepResult values into third one Module Monad.Coroutine.SuspensionFunctors contains several WeaveStepper examples",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "WeaveStepper",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Weave Stepper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#t:Weaver",
      "description": {
        "fct-descr": "\u003cp\u003eType of functions that can weave two coroutines into a single coroutine.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Coroutine.html#Weaver",
        "fct-type": "type",
        "title": "Weaver"
      },
      "index": {
        "description": "Type of functions that can weave two coroutines into single coroutine",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "Weaver",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Weaver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:Coroutine",
      "description": {
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "Coroutine",
        "fct-source": "src/Control-Monad-Coroutine.html#Coroutine",
        "fct-type": "function",
        "title": "Coroutine"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "Coroutine",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Coroutine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:bounce",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a single step of a suspendable \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e, using a function that extracts the coroutine resumption from its\n suspension functor.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "(s (Coroutine s m x) -\u003e Coroutine s m x) -\u003e Coroutine s m x -\u003e Coroutine s m x",
        "fct-source": "src/Control-Monad-Coroutine.html#bounce",
        "fct-type": "function",
        "title": "bounce"
      },
      "index": {
        "description": "Runs single step of suspendable Coroutine using function that extracts the coroutine resumption from its suspension functor",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "bounce",
        "normalized": "(a(Coroutine a b c)-\u003eCoroutine a b c)-\u003eCoroutine a b c-\u003eCoroutine a b c",
        "package": "monad-coroutine",
        "partial": "",
        "signature": "(s(Coroutine s m x)-\u003eCoroutine s m x)-\u003eCoroutine s m x-\u003eCoroutine s m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:foldRun",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a suspendable coroutine much like \u003ccode\u003e\u003ca\u003epogoStick\u003c/a\u003e\u003c/code\u003e, but allows the resumption function to thread an arbitrary\n state as well.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "(a -\u003e s (Coroutine s m x) -\u003e (a, Coroutine s m x)) -\u003e a -\u003e Coroutine s m x -\u003e m (a, x)",
        "fct-source": "src/Control-Monad-Coroutine.html#foldRun",
        "fct-type": "function",
        "title": "foldRun"
      },
      "index": {
        "description": "Runs suspendable coroutine much like pogoStick but allows the resumption function to thread an arbitrary state as well",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "foldRun",
        "normalized": "(a-\u003eb(Coroutine b c d)-\u003e(a,Coroutine b c d))-\u003ea-\u003eCoroutine b c d-\u003ec(a,d)",
        "package": "monad-coroutine",
        "partial": "Run",
        "signature": "(a-\u003es(Coroutine s m x)-\u003e(a,Coroutine s m x))-\u003ea-\u003eCoroutine s m x-\u003em(a,x)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:liftBinder",
      "description": {
        "fct-descr": "\u003cp\u003eLifting a \u003ccode\u003e\u003ca\u003ePairBinder\u003c/a\u003e\u003c/code\u003e onto a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "PairBinder m -\u003e PairBinder (Coroutine s m)",
        "fct-source": "src/Control-Monad-Coroutine.html#liftBinder",
        "fct-type": "function",
        "title": "liftBinder"
      },
      "index": {
        "description": "Lifting PairBinder onto Coroutine monad transformer",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "liftBinder",
        "normalized": "PairBinder a-\u003ePairBinder(Coroutine b a)",
        "package": "monad-coroutine",
        "partial": "Binder",
        "signature": "PairBinder m-\u003ePairBinder(Coroutine s m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:mapFirstSuspension",
      "description": {
        "fct-descr": "\u003cp\u003eModify the first upcoming suspension of a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "(forall y.  s y -\u003e s y) -\u003e Coroutine s m x -\u003e Coroutine s m x",
        "fct-source": "src/Control-Monad-Coroutine.html#mapFirstSuspension",
        "fct-type": "function",
        "title": "mapFirstSuspension"
      },
      "index": {
        "description": "Modify the first upcoming suspension of Coroutine",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "mapFirstSuspension",
        "normalized": "(a b c d-\u003ec d)-\u003eCoroutine c e f-\u003eCoroutine c e f",
        "package": "monad-coroutine",
        "partial": "First Suspension",
        "signature": "(forall y. s y-\u003es y)-\u003eCoroutine s m x-\u003eCoroutine s m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:mapMonad",
      "description": {
        "fct-descr": "\u003cp\u003eChange the base monad of a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "(forall y.  m y -\u003e m' y) -\u003e Coroutine s m x -\u003e Coroutine s m' x",
        "fct-source": "src/Control-Monad-Coroutine.html#mapMonad",
        "fct-type": "function",
        "title": "mapMonad"
      },
      "index": {
        "description": "Change the base monad of Coroutine",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "mapMonad",
        "normalized": "(a b c d-\u003ee d)-\u003eCoroutine f c g-\u003eCoroutine f e g",
        "package": "monad-coroutine",
        "partial": "Monad",
        "signature": "(forall y. m y-\u003em' y)-\u003eCoroutine s m x-\u003eCoroutine s m' x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:mapSuspension",
      "description": {
        "fct-descr": "\u003cp\u003eChange the suspension functor of a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "(forall y.  s y -\u003e s' y) -\u003e Coroutine s m x -\u003e Coroutine s' m x",
        "fct-source": "src/Control-Monad-Coroutine.html#mapSuspension",
        "fct-type": "function",
        "title": "mapSuspension"
      },
      "index": {
        "description": "Change the suspension functor of Coroutine",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "mapSuspension",
        "normalized": "(a b c d-\u003ee d)-\u003eCoroutine c f g-\u003eCoroutine e f g",
        "package": "monad-coroutine",
        "partial": "Suspension",
        "signature": "(forall y. s y-\u003es' y)-\u003eCoroutine s m x-\u003eCoroutine s' m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eWeaves a list of coroutines with the same suspension functor type into a single coroutine. The coroutines suspend\n and resume in lockstep.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "(forall y.  [m y] -\u003e m [y]) -\u003e (forall y.  [s y] -\u003e s [y]) -\u003e [Coroutine s m x] -\u003e Coroutine s m [x]",
        "fct-source": "src/Control-Monad-Coroutine.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Weaves list of coroutines with the same suspension functor type into single coroutine The coroutines suspend and resume in lockstep",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "merge",
        "normalized": "(a b[c d]-\u003ec[d])-\u003e(a b[e d]-\u003ee[d])-\u003e[Coroutine e c f]-\u003eCoroutine e c[f]",
        "package": "monad-coroutine",
        "partial": "",
        "signature": "(forall y.[m y]-\u003em[y])-\u003e(forall y.[s y]-\u003es[y])-\u003e[Coroutine s m x]-\u003eCoroutine s m[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:parallelBinder",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePairBinder\u003c/a\u003e\u003c/code\u003e that runs the two steps in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "PairBinder m",
        "fct-source": "src/Control-Monad-Coroutine.html#parallelBinder",
        "fct-type": "function",
        "title": "parallelBinder"
      },
      "index": {
        "description": "PairBinder that runs the two steps in parallel",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "parallelBinder",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Binder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:pogoStick",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a suspendable \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e to its completion.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "(s (Coroutine s m x) -\u003e Coroutine s m x) -\u003e Coroutine s m x -\u003e m x",
        "fct-source": "src/Control-Monad-Coroutine.html#pogoStick",
        "fct-type": "function",
        "title": "pogoStick"
      },
      "index": {
        "description": "Runs suspendable Coroutine to its completion",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "pogoStick",
        "normalized": "(a(Coroutine a b c)-\u003eCoroutine a b c)-\u003eCoroutine a b c-\u003eb c",
        "package": "monad-coroutine",
        "partial": "Stick",
        "signature": "(s(Coroutine s m x)-\u003eCoroutine s m x)-\u003eCoroutine s m x-\u003em x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:resume",
      "description": {
        "fct-descr": "\u003cp\u003eRun the next step of a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e computation. The result of the step execution will be either a suspension or\n the final coroutine result.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "m (Either (s (Coroutine s m r)) r)",
        "fct-source": "src/Control-Monad-Coroutine.html#Coroutine",
        "fct-type": "function",
        "title": "resume"
      },
      "index": {
        "description": "Run the next step of Coroutine computation The result of the step execution will be either suspension or the final coroutine result",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "resume",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:runCoroutine",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a non-suspending \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e to the base monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "Coroutine Naught m x -\u003e m x",
        "fct-source": "src/Control-Monad-Coroutine.html#runCoroutine",
        "fct-type": "function",
        "title": "runCoroutine"
      },
      "index": {
        "description": "Convert non-suspending Coroutine to the base monad",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "runCoroutine",
        "normalized": "Coroutine Naught a b-\u003ea b",
        "package": "monad-coroutine",
        "partial": "Coroutine",
        "signature": "Coroutine Naught m x-\u003em x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:sequentialBinder",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePairBinder\u003c/a\u003e\u003c/code\u003e that runs the two steps sequentially before combining their results.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "PairBinder m",
        "fct-source": "src/Control-Monad-Coroutine.html#sequentialBinder",
        "fct-type": "function",
        "title": "sequentialBinder"
      },
      "index": {
        "description": "PairBinder that runs the two steps sequentially before combining their results",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "sequentialBinder",
        "normalized": "",
        "package": "monad-coroutine",
        "partial": "Binder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:suspend",
      "description": {
        "fct-descr": "\u003cp\u003eSuspend the current \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "s (Coroutine s m x) -\u003e Coroutine s m x",
        "fct-source": "src/Control-Monad-Coroutine.html#suspend",
        "fct-type": "function",
        "title": "suspend"
      },
      "index": {
        "description": "Suspend the current Coroutine",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "suspend",
        "normalized": "a(Coroutine a b c)-\u003eCoroutine a b c",
        "package": "monad-coroutine",
        "partial": "",
        "signature": "s(Coroutine s m x)-\u003eCoroutine s m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-coroutine/docs/Control-Monad-Coroutine.html#v:weave",
      "description": {
        "fct-descr": "\u003cp\u003eWeaves two coroutines into one, given a \u003ccode\u003e\u003ca\u003ePairBinder\u003c/a\u003e\u003c/code\u003e to run the next step of each coroutine and a \u003ccode\u003e\u003ca\u003eWeaveStepper\u003c/a\u003e\u003c/code\u003e to\n combine the results of the steps.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine",
        "fct-package": "monad-coroutine",
        "fct-signature": "PairBinder m -\u003e WeaveStepper s1 s2 s3 m x y z -\u003e Weaver s1 s2 s3 m x y z",
        "fct-source": "src/Control-Monad-Coroutine.html#weave",
        "fct-type": "function",
        "title": "weave"
      },
      "index": {
        "description": "Weaves two coroutines into one given PairBinder to run the next step of each coroutine and WeaveStepper to combine the results of the steps",
        "hierarchy": "Control Monad Coroutine",
        "module": "Control.Monad.Coroutine",
        "name": "weave",
        "normalized": "PairBinder a-\u003eWeaveStepper b b b a c d e-\u003eWeaver b b b a c d e",
        "package": "monad-coroutine",
        "partial": "",
        "signature": "PairBinder m-\u003eWeaveStepper s s s m x y z-\u003eWeaver s s s m x y z"
      }
    }
  }
]