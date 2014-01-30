[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#",
      "description": {
        "fct-module": "Data.Functor.Alt",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Alt.html",
        "fct-type": "module",
        "title": "Alt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Alt",
        "module": "Data.Functor.Alt",
        "name": "Alt",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#t:Alt",
      "description": {
        "fct-descr": "\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e \u003c!\u003e is associative:             (a \u003c!\u003e b) \u003c!\u003e c = a \u003c!\u003e (b \u003c!\u003e c)\n \u003c$\u003e left-distributes over \u003c!\u003e:  f \u003c$\u003e (a \u003c!\u003e b) = (f \u003c$\u003e a) \u003c!\u003e (f \u003c$\u003e b)\n\u003c/pre\u003e\u003cp\u003eIf extended to an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003e\u003ca\u003e\u003c!\u003e\u003c/a\u003e\u003c/code\u003e should equal \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIdeally, an instance of \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e also satisfies the \"left distributon\" law of\n MonadPlus with respect to \u003ca\u003e.\u003c/a\u003e:\n\u003c/p\u003e\u003cpre\u003e \u003c.\u003e right-distributes over \u003c!\u003e: (a \u003c!\u003e b) \u003c.\u003e c = (a \u003c.\u003e c) \u003c!\u003e (b \u003c.\u003e c)\n\u003c/pre\u003e\u003cp\u003eBut \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003eErrorT\u003c/code\u003e e m\u003c/code\u003e, and \u003ccode\u003eSTM\u003c/code\u003e satisfy the alternative\n \"left catch\" law instead:\n\u003c/p\u003e\u003cpre\u003e pure a \u003c!\u003e b = pure a\n\u003c/pre\u003e\u003cp\u003eHowever, this variation cannot be stated purely in terms of the dependencies of \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen and if MonadPlus is successfully refactored, this class should also\n be refactored to remove these instances.\n\u003c/p\u003e\u003cp\u003eThe right distributive law should extend in the cases where the a \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is\n provided to yield variations of the right distributive law:\n\u003c/p\u003e\u003cpre\u003e (m \u003c!\u003e n) \u003e\u003e- f = (m \u003e\u003e- f) \u003c!\u003e (m \u003e\u003e- f)\n (m \u003c!\u003e n) \u003e\u003e= f = (m \u003e\u003e= f) \u003c!\u003e (m \u003e\u003e= f)\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Alt",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Alt.html#Alt",
        "fct-type": "class",
        "title": "Alt"
      },
      "index": {
        "description": "Laws is associative left-distributes over If extended to an Alternative then should equal Ideally an instance of Alt also satisfies the left distributon law of MonadPlus with respect to right-distributes over But Maybe IO Either ErrorT and STM satisfy the alternative left catch law instead pure pure However this variation cannot be stated purely in terms of the dependencies of Alt When and if MonadPlus is successfully refactored this class should also be refactored to remove these instances The right distributive law should extend in the cases where the Bind or Monad is provided to yield variations of the right distributive law",
        "hierarchy": "Data Functor Alt",
        "module": "Data.Functor.Alt",
        "name": "Alt",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#v:-60--33--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(\u003ca\u003e|\u003c/a\u003e)\u003c/code\u003e without a required \u003ccode\u003eempty\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Alt",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e f a -\u003e f a",
        "fct-source": "src/Data-Functor-Alt.html#%3C%21%3E",
        "fct-type": "method",
        "title": "(\u003c!\u003e)"
      },
      "index": {
        "description": "without required empty",
        "hierarchy": "Data Functor Alt",
        "module": "Data.Functor.Alt",
        "name": "(\u003c!\u003e) \u003c!\u003e",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#v:many",
      "description": {
        "fct-module": "Data.Functor.Alt",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e f [a]",
        "fct-source": "src/Data-Functor-Alt.html#many",
        "fct-type": "method",
        "title": "many"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Alt",
        "module": "Data.Functor.Alt",
        "name": "many",
        "normalized": "a b-\u003ea[b]",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003ef[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#v:some",
      "description": {
        "fct-module": "Data.Functor.Alt",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e f [a]",
        "fct-source": "src/Data-Functor-Alt.html#some",
        "fct-type": "method",
        "title": "some"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Alt",
        "module": "Data.Functor.Alt",
        "name": "some",
        "normalized": "a b-\u003ea[b]",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003ef[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#",
      "description": {
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Apply.html",
        "fct-type": "module",
        "title": "Apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "Apply",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#t:Apply",
      "description": {
        "fct-descr": "\u003cp\u003eA strong lax semi-monoidal endofunctor.\n This is equivalent to an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e without \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e associative composition: (.) \u003c$\u003e u \u003c.\u003e v \u003c.\u003e w = u \u003c.\u003e (v \u003c.\u003e w)\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Bind.html#Apply",
        "fct-type": "class",
        "title": "Apply"
      },
      "index": {
        "description": "strong lax semi-monoidal endofunctor This is equivalent to an Applicative without pure Laws associative composition",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "Apply",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#t:Functor",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Functor"
      },
      "index": {
        "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "Functor",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#t:MaybeApply",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a Apply into an Applicative by adding a unit.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Bind.html#MaybeApply",
        "fct-type": "newtype",
        "title": "MaybeApply"
      },
      "index": {
        "description": "Transform Apply into an Applicative by adding unit",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "MaybeApply",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Maybe Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#t:WrappedApplicative",
      "description": {
        "fct-descr": "\u003cp\u003eWrap an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e to be used as a member of \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Bind.html#WrappedApplicative",
        "fct-type": "newtype",
        "title": "WrappedApplicative"
      },
      "index": {
        "description": "Wrap an Applicative to be used as member of Apply",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "WrappedApplicative",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrapped Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the contents of a functor uniformly with a constant value.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e b -\u003e f b",
        "fct-type": "function",
        "title": "($\u003e)"
      },
      "index": {
        "description": "Replace the contents of functor uniformly with constant value",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "($\u003e) $\u003e",
        "normalized": "a b-\u003ec-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003eb-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60--36-",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all locations in the input with the same value.\n The default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but this may be\n overridden with a more efficient version.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "a -\u003e f b -\u003e f a",
        "fct-type": "method",
        "title": "(\u003c$)"
      },
      "index": {
        "description": "Replace all locations in the input with the same value The default definition is fmap const but this may be overridden with more efficient version",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "(\u003c$) \u003c$",
        "normalized": "a-\u003eb c-\u003eb a",
        "package": "semigroupoids",
        "partial": "",
        "signature": "a-\u003ef b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "An infix synonym for fmap",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60-.",
      "description": {
        "fct-descr": "\u003cpre\u003e a \u003c. b = const \u003c$\u003e a \u003c.\u003e b\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e f b -\u003e f a",
        "fct-source": "src/Data-Functor-Bind.html#%3C.",
        "fct-type": "method",
        "title": "(\u003c.)"
      },
      "index": {
        "description": "const",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "(\u003c.) \u003c.",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60-.-62-",
      "description": {
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Bind.html#%3C.%3E",
        "fct-type": "method",
        "title": "(\u003c.\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "(\u003c.\u003e) \u003c.\u003e",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60-..-62-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c.\u003e\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "w a -\u003e w (a -\u003e b) -\u003e w b",
        "fct-source": "src/Data-Functor-Bind.html#%3C..%3E",
        "fct-type": "function",
        "title": "(\u003c..\u003e)"
      },
      "index": {
        "description": "variant of with the arguments reversed",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "(\u003c..\u003e) \u003c..\u003e",
        "normalized": "a b-\u003ea(b-\u003ec)-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "w a-\u003ew(a-\u003eb)-\u003ew b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:.-62-",
      "description": {
        "fct-descr": "\u003cpre\u003e a  .\u003e b = const id \u003c$\u003e a \u003c.\u003e b\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e f b -\u003e f b",
        "fct-source": "src/Data-Functor-Bind.html#.%3E",
        "fct-type": "method",
        "title": "(.\u003e)"
      },
      "index": {
        "description": "const id",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "(.\u003e) .\u003e",
        "normalized": "a b-\u003ea c-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:MaybeApply",
      "description": {
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "MaybeApply",
        "fct-source": "src/Data-Functor-Bind.html#MaybeApply",
        "fct-type": "function",
        "title": "MaybeApply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "MaybeApply",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Maybe Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:WrapApplicative",
      "description": {
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "WrapApplicative",
        "fct-source": "src/Data-Functor-Bind.html#WrappedApplicative",
        "fct-type": "function",
        "title": "WrapApplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "WrapApplicative",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrap Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:fmap",
      "description": {
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "method",
        "title": "fmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "fmap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:liftF2",
      "description": {
        "fct-descr": "\u003cp\u003eLift a binary function into a comonad with zipping\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e w a -\u003e w b -\u003e w c",
        "fct-source": "src/Data-Functor-Bind.html#liftF2",
        "fct-type": "function",
        "title": "liftF2"
      },
      "index": {
        "description": "Lift binary function into comonad with zipping",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "liftF2",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003ew a-\u003ew b-\u003ew c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:liftF3",
      "description": {
        "fct-descr": "\u003cp\u003eLift a ternary function into a comonad with zipping\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e w a -\u003e w b -\u003e w c -\u003e w d",
        "fct-source": "src/Data-Functor-Bind.html#liftF3",
        "fct-type": "function",
        "title": "liftF3"
      },
      "index": {
        "description": "Lift ternary function into comonad with zipping",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "liftF3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ew a-\u003ew b-\u003ew c-\u003ew d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:runMaybeApply",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "Either (f a) a",
        "fct-source": "src/Data-Functor-Bind.html#MaybeApply",
        "fct-type": "function",
        "title": "runMaybeApply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "runMaybeApply",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Maybe Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:unwrapApplicative",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Apply",
        "fct-package": "semigroupoids",
        "fct-signature": "f a",
        "fct-source": "src/Data-Functor-Bind.html#WrappedApplicative",
        "fct-type": "function",
        "title": "unwrapApplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Apply",
        "module": "Data.Functor.Apply",
        "name": "unwrapApplicative",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind-Trans.html#",
      "description": {
        "fct-module": "Data.Functor.Bind.Trans",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Bind-Trans.html",
        "fct-type": "module",
        "title": "Trans"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind Trans",
        "module": "Data.Functor.Bind.Trans",
        "name": "Trans",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind-Trans.html#t:BindTrans",
      "description": {
        "fct-descr": "\u003cp\u003eA subset of monad transformers can transform any \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e as well.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind.Trans",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Bind-Trans.html#BindTrans",
        "fct-type": "class",
        "title": "BindTrans"
      },
      "index": {
        "description": "subset of monad transformers can transform any Bind as well",
        "hierarchy": "Data Functor Bind Trans",
        "module": "Data.Functor.Bind.Trans",
        "name": "BindTrans",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Bind Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind-Trans.html#v:liftB",
      "description": {
        "fct-module": "Data.Functor.Bind.Trans",
        "fct-package": "semigroupoids",
        "fct-signature": "b a -\u003e t b a",
        "fct-source": "src/Data-Functor-Bind-Trans.html#liftB",
        "fct-type": "method",
        "title": "liftB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind Trans",
        "module": "Data.Functor.Bind.Trans",
        "name": "liftB",
        "normalized": "a b-\u003ec a b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "b a-\u003et b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNB: The definitions exported through \u003ca\u003eData.Functor.Apply\u003c/a\u003e need to be\n included here because otherwise the instances for the transformers package\n have orphaned heads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Bind.html",
        "fct-type": "module",
        "title": "Bind"
      },
      "index": {
        "description": "NB The definitions exported through Data.Functor.Apply need to be included here because otherwise the instances for the transformers package have orphaned heads",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "Bind",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:Apply",
      "description": {
        "fct-descr": "\u003cp\u003eA strong lax semi-monoidal endofunctor.\n This is equivalent to an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e without \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e associative composition: (.) \u003c$\u003e u \u003c.\u003e v \u003c.\u003e w = u \u003c.\u003e (v \u003c.\u003e w)\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Bind.html#Apply",
        "fct-type": "class",
        "title": "Apply"
      },
      "index": {
        "description": "strong lax semi-monoidal endofunctor This is equivalent to an Applicative without pure Laws associative composition",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "Apply",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:Bind",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e sans \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal definition: Either \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003e\u003e-\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf defining both, then the following laws (the default definitions) must hold:\n\u003c/p\u003e\u003cpre\u003e join = (\u003e\u003e- id)\n m \u003e\u003e- f = join (fmap f m)\n\u003c/pre\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e induced definition of \u003c.\u003e: f \u003c.\u003e x = f \u003e\u003e- (\u003c$\u003e x)\n\u003c/pre\u003e\u003cp\u003eFinally, there are two associativity conditions:\n\u003c/p\u003e\u003cpre\u003e associativity of (\u003e\u003e-):    (m \u003e\u003e- f) \u003e\u003e- g == m \u003e\u003e- (\\x -\u003e f x \u003e\u003e- g)\n associativity of join:     join . join = join . fmap join\n\u003c/pre\u003e\u003cp\u003eThese can both be seen as special cases of the constraint that\n\u003c/p\u003e\u003cpre\u003e associativity of (-\u003e-): (f -\u003e- g) -\u003e- h = f -\u003e- (g -\u003e- h)\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Bind.html#Bind",
        "fct-type": "class",
        "title": "Bind"
      },
      "index": {
        "description": "Monad sans return Minimal definition Either join or If defining both then the following laws the default definitions must hold join id join fmap Laws induced definition of Finally there are two associativity conditions associativity of associativity of join join join join fmap join These can both be seen as special cases of the constraint that associativity of",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "Bind",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:Functor",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Functor"
      },
      "index": {
        "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "Functor",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:MaybeApply",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a Apply into an Applicative by adding a unit.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Bind.html#MaybeApply",
        "fct-type": "newtype",
        "title": "MaybeApply"
      },
      "index": {
        "description": "Transform Apply into an Applicative by adding unit",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "MaybeApply",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Maybe Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:WrappedApplicative",
      "description": {
        "fct-descr": "\u003cp\u003eWrap an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e to be used as a member of \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Bind.html#WrappedApplicative",
        "fct-type": "newtype",
        "title": "WrappedApplicative"
      },
      "index": {
        "description": "Wrap an Applicative to be used as member of Apply",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "WrappedApplicative",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrapped Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the contents of a functor uniformly with a constant value.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e b -\u003e f b",
        "fct-type": "function",
        "title": "($\u003e)"
      },
      "index": {
        "description": "Replace the contents of functor uniformly with constant value",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "($\u003e) $\u003e",
        "normalized": "a b-\u003ec-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003eb-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-45--60--45-",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "(b -\u003e m c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
        "fct-source": "src/Data-Functor-Bind.html#-%3C-",
        "fct-type": "function",
        "title": "(-\u003c-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(-\u003c-) -\u003c-",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-45--60--60-",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
        "fct-source": "src/Data-Functor-Bind.html#-%3C%3C",
        "fct-type": "function",
        "title": "(-\u003c\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(-\u003c\u003c) -\u003c\u003c",
        "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003em b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-45--62--45-",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
        "fct-source": "src/Data-Functor-Bind.html#-%3E-",
        "fct-type": "function",
        "title": "(-\u003e-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(-\u003e-) -\u003e-",
        "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60--36-",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all locations in the input with the same value.\n The default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but this may be\n overridden with a more efficient version.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "a -\u003e f b -\u003e f a",
        "fct-type": "method",
        "title": "(\u003c$)"
      },
      "index": {
        "description": "Replace all locations in the input with the same value The default definition is fmap const but this may be overridden with more efficient version",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(\u003c$) \u003c$",
        "normalized": "a-\u003eb c-\u003eb a",
        "package": "semigroupoids",
        "partial": "",
        "signature": "a-\u003ef b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "An infix synonym for fmap",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60-.",
      "description": {
        "fct-descr": "\u003cpre\u003e a \u003c. b = const \u003c$\u003e a \u003c.\u003e b\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e f b -\u003e f a",
        "fct-source": "src/Data-Functor-Bind.html#%3C.",
        "fct-type": "method",
        "title": "(\u003c.)"
      },
      "index": {
        "description": "const",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(\u003c.) \u003c.",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60-.-62-",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Bind.html#%3C.%3E",
        "fct-type": "method",
        "title": "(\u003c.\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(\u003c.\u003e) \u003c.\u003e",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60-..-62-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c.\u003e\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "w a -\u003e w (a -\u003e b) -\u003e w b",
        "fct-source": "src/Data-Functor-Bind.html#%3C..%3E",
        "fct-type": "function",
        "title": "(\u003c..\u003e)"
      },
      "index": {
        "description": "variant of with the arguments reversed",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(\u003c..\u003e) \u003c..\u003e",
        "normalized": "a b-\u003ea(b-\u003ec)-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "w a-\u003ew(a-\u003eb)-\u003ew b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-62--62--45-",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Data-Functor-Bind.html#%3E%3E-",
        "fct-type": "method",
        "title": "(\u003e\u003e-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(\u003e\u003e-) \u003e\u003e-",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:.-62-",
      "description": {
        "fct-descr": "\u003cpre\u003e a  .\u003e b = const id \u003c$\u003e a \u003c.\u003e b\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e f b -\u003e f b",
        "fct-source": "src/Data-Functor-Bind.html#.%3E",
        "fct-type": "method",
        "title": "(.\u003e)"
      },
      "index": {
        "description": "const id",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "(.\u003e) .\u003e",
        "normalized": "a b-\u003ea c-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:MaybeApply",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "MaybeApply",
        "fct-source": "src/Data-Functor-Bind.html#MaybeApply",
        "fct-type": "function",
        "title": "MaybeApply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "MaybeApply",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Maybe Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:WrapApplicative",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "WrapApplicative",
        "fct-source": "src/Data-Functor-Bind.html#WrappedApplicative",
        "fct-type": "function",
        "title": "WrapApplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "WrapApplicative",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrap Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:apDefault",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Bind.html#apDefault",
        "fct-type": "function",
        "title": "apDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "apDefault",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "semigroupoids",
        "partial": "Default",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:fmap",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "method",
        "title": "fmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "fmap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:join",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "m (m a) -\u003e m a",
        "fct-source": "src/Data-Functor-Bind.html#join",
        "fct-type": "method",
        "title": "join"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "join",
        "normalized": "a(a b)-\u003ea b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "m(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:liftF2",
      "description": {
        "fct-descr": "\u003cp\u003eLift a binary function into a comonad with zipping\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e w a -\u003e w b -\u003e w c",
        "fct-source": "src/Data-Functor-Bind.html#liftF2",
        "fct-type": "function",
        "title": "liftF2"
      },
      "index": {
        "description": "Lift binary function into comonad with zipping",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "liftF2",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003ew a-\u003ew b-\u003ew c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:liftF3",
      "description": {
        "fct-descr": "\u003cp\u003eLift a ternary function into a comonad with zipping\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e w a -\u003e w b -\u003e w c -\u003e w d",
        "fct-source": "src/Data-Functor-Bind.html#liftF3",
        "fct-type": "function",
        "title": "liftF3"
      },
      "index": {
        "description": "Lift ternary function into comonad with zipping",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "liftF3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ew a-\u003ew b-\u003ew c-\u003ew d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:returning",
      "description": {
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "f a -\u003e (a -\u003e b) -\u003e f b",
        "fct-source": "src/Data-Functor-Bind.html#returning",
        "fct-type": "function",
        "title": "returning"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "returning",
        "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "f a-\u003e(a-\u003eb)-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:runMaybeApply",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "Either (f a) a",
        "fct-source": "src/Data-Functor-Bind.html#MaybeApply",
        "fct-type": "function",
        "title": "runMaybeApply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "runMaybeApply",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Maybe Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:unwrapApplicative",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Bind",
        "fct-package": "semigroupoids",
        "fct-signature": "f a",
        "fct-source": "src/Data-Functor-Bind.html#WrappedApplicative",
        "fct-type": "function",
        "title": "unwrapApplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Bind",
        "module": "Data.Functor.Bind",
        "name": "unwrapApplicative",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Extend.html#",
      "description": {
        "fct-module": "Data.Functor.Extend",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Extend.html",
        "fct-type": "module",
        "title": "Extend"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Extend",
        "module": "Data.Functor.Extend",
        "name": "Extend",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Extend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Extend.html#t:Extend",
      "description": {
        "fct-module": "Data.Functor.Extend",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Extend.html#Extend",
        "fct-type": "class",
        "title": "Extend"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Extend",
        "module": "Data.Functor.Extend",
        "name": "Extend",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Extend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Extend.html#v:duplicated",
      "description": {
        "fct-descr": "\u003cpre\u003e duplicated = extended id\n fmap (fmap f) . duplicated = duplicated . fmap f\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Extend",
        "fct-package": "semigroupoids",
        "fct-signature": "w a -\u003e w (w a)",
        "fct-source": "src/Data-Functor-Extend.html#duplicated",
        "fct-type": "method",
        "title": "duplicated"
      },
      "index": {
        "description": "duplicated extended id fmap fmap duplicated duplicated fmap",
        "hierarchy": "Data Functor Extend",
        "module": "Data.Functor.Extend",
        "name": "duplicated",
        "normalized": "a b-\u003ea(a b)",
        "package": "semigroupoids",
        "partial": "",
        "signature": "w a-\u003ew(w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Extend.html#v:extended",
      "description": {
        "fct-descr": "\u003cpre\u003e extended f  = fmap f . duplicated\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Extend",
        "fct-package": "semigroupoids",
        "fct-signature": "(w a -\u003e b) -\u003e w a -\u003e w b",
        "fct-source": "src/Data-Functor-Extend.html#extended",
        "fct-type": "method",
        "title": "extended"
      },
      "index": {
        "description": "extended fmap duplicated",
        "hierarchy": "Data Functor Extend",
        "module": "Data.Functor.Extend",
        "name": "extended",
        "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(w a-\u003eb)-\u003ew a-\u003ew b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Plus.html#",
      "description": {
        "fct-module": "Data.Functor.Plus",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Plus.html",
        "fct-type": "module",
        "title": "Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Plus",
        "module": "Data.Functor.Plus",
        "name": "Plus",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Plus.html#t:Plus",
      "description": {
        "fct-descr": "\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e zero \u003c!\u003e m = m\n m \u003c!\u003e zero = m\n\u003c/pre\u003e\u003cp\u003eIf extended to an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e should equal \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Plus",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Plus.html#Plus",
        "fct-type": "class",
        "title": "Plus"
      },
      "index": {
        "description": "Laws zero zero If extended to an Alternative then zero should equal empty",
        "hierarchy": "Data Functor Plus",
        "module": "Data.Functor.Plus",
        "name": "Plus",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Plus.html#v:zero",
      "description": {
        "fct-module": "Data.Functor.Plus",
        "fct-package": "semigroupoids",
        "fct-signature": "f a",
        "fct-source": "src/Data-Functor-Plus.html#zero",
        "fct-type": "method",
        "title": "zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Plus",
        "module": "Data.Functor.Plus",
        "name": "zero",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Groupoid.html#",
      "description": {
        "fct-module": "Data.Groupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Groupoid.html",
        "fct-type": "module",
        "title": "Groupoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Groupoid",
        "module": "Data.Groupoid",
        "name": "Groupoid",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Groupoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Groupoid.html#t:Groupoid",
      "description": {
        "fct-descr": "\u003cp\u003esemigroupoid with inverses. This technically should be a category with inverses, except we need to use Ob to define the valid objects for the category\n\u003c/p\u003e",
        "fct-module": "Data.Groupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Groupoid.html#Groupoid",
        "fct-type": "class",
        "title": "Groupoid"
      },
      "index": {
        "description": "semigroupoid with inverses This technically should be category with inverses except we need to use Ob to define the valid objects for the category",
        "hierarchy": "Data Groupoid",
        "module": "Data.Groupoid",
        "name": "Groupoid",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Groupoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Groupoid.html#v:inv",
      "description": {
        "fct-module": "Data.Groupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "k a b -\u003e k b a",
        "fct-source": "src/Data-Groupoid.html#inv",
        "fct-type": "method",
        "title": "inv"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Groupoid",
        "module": "Data.Groupoid",
        "name": "inv",
        "normalized": "a b c-\u003ea c b",
        "package": "semigroupoids",
        "partial": "",
        "signature": "k a b-\u003ek b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#",
      "description": {
        "fct-module": "Data.Isomorphism",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Isomorphism.html",
        "fct-type": "module",
        "title": "Isomorphism"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Isomorphism",
        "module": "Data.Isomorphism",
        "name": "Isomorphism",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Isomorphism",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#t:Iso",
      "description": {
        "fct-module": "Data.Isomorphism",
        "fct-package": "semigroupoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Isomorphism.html#Iso",
        "fct-type": "data",
        "title": "Iso"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Isomorphism",
        "module": "Data.Isomorphism",
        "name": "Iso",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#v:Iso",
      "description": {
        "fct-module": "Data.Isomorphism",
        "fct-package": "semigroupoids",
        "fct-signature": "Iso",
        "fct-source": "src/Data-Isomorphism.html#Iso",
        "fct-type": "function",
        "title": "Iso"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Isomorphism",
        "module": "Data.Isomorphism",
        "name": "Iso",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#v:embed",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Isomorphism",
        "fct-package": "semigroupoids",
        "fct-signature": "k a b",
        "fct-source": "src/Data-Isomorphism.html#Iso",
        "fct-type": "function",
        "title": "embed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Isomorphism",
        "module": "Data.Isomorphism",
        "name": "embed",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#v:project",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Isomorphism",
        "fct-package": "semigroupoids",
        "fct-signature": "k b a",
        "fct-source": "src/Data-Isomorphism.html#Iso",
        "fct-type": "function",
        "title": "project"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Isomorphism",
        "module": "Data.Isomorphism",
        "name": "project",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#",
      "description": {
        "fct-module": "Data.Semifunctor.Associative",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semifunctor-Associative.html",
        "fct-type": "module",
        "title": "Associative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Associative",
        "module": "Data.Semifunctor.Associative",
        "name": "Associative",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Associative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#t:Associative",
      "description": {
        "fct-module": "Data.Semifunctor.Associative",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Semifunctor-Associative.html#Associative",
        "fct-type": "class",
        "title": "Associative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Associative",
        "module": "Data.Semifunctor.Associative",
        "name": "Associative",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Associative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#t:Disassociative",
      "description": {
        "fct-module": "Data.Semifunctor.Associative",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Semifunctor-Associative.html#Disassociative",
        "fct-type": "class",
        "title": "Disassociative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Associative",
        "module": "Data.Semifunctor.Associative",
        "name": "Disassociative",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Disassociative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:associate",
      "description": {
        "fct-module": "Data.Semifunctor.Associative",
        "fct-package": "semigroupoids",
        "fct-signature": "k (p (p (a, b), c)) (p (a, p (b, c)))",
        "fct-source": "src/Data-Semifunctor-Associative.html#associate",
        "fct-type": "method",
        "title": "associate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Associative",
        "module": "Data.Semifunctor.Associative",
        "name": "associate",
        "normalized": "a(b(b(c,d),e))(b(c,b(d,e)))",
        "package": "semigroupoids",
        "partial": "",
        "signature": "k(p(p(a,b),c))(p(a,p(b,c)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:cokleisliAssociate",
      "description": {
        "fct-module": "Data.Semifunctor.Associative",
        "fct-package": "semigroupoids",
        "fct-signature": "Cokleisli m (p (p (a, b), c)) (p (a, p (b, c)))",
        "fct-source": "src/Data-Semifunctor-Associative.html#cokleisliAssociate",
        "fct-type": "function",
        "title": "cokleisliAssociate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Associative",
        "module": "Data.Semifunctor.Associative",
        "name": "cokleisliAssociate",
        "normalized": "Cokleisli a(b(b(c,d),e))(b(c,b(d,e)))",
        "package": "semigroupoids",
        "partial": "Associate",
        "signature": "Cokleisli m(p(p(a,b),c))(p(a,p(b,c)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:cokleisliDisassociate",
      "description": {
        "fct-module": "Data.Semifunctor.Associative",
        "fct-package": "semigroupoids",
        "fct-signature": "Cokleisli m (p (a, p (b, c))) (p (p (a, b), c))",
        "fct-source": "src/Data-Semifunctor-Associative.html#cokleisliDisassociate",
        "fct-type": "function",
        "title": "cokleisliDisassociate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Associative",
        "module": "Data.Semifunctor.Associative",
        "name": "cokleisliDisassociate",
        "normalized": "Cokleisli a(b(c,b(d,e)))(b(b(c,d),e))",
        "package": "semigroupoids",
        "partial": "Disassociate",
        "signature": "Cokleisli m(p(a,p(b,c)))(p(p(a,b),c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:disassociate",
      "description": {
        "fct-module": "Data.Semifunctor.Associative",
        "fct-package": "semigroupoids",
        "fct-signature": "k (p (a, p (b, c))) (p (p (a, b), c))",
        "fct-source": "src/Data-Semifunctor-Associative.html#disassociate",
        "fct-type": "method",
        "title": "disassociate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Associative",
        "module": "Data.Semifunctor.Associative",
        "name": "disassociate",
        "normalized": "a(b(c,b(d,e)))(b(b(c,d),e))",
        "package": "semigroupoids",
        "partial": "",
        "signature": "k(p(a,p(b,c)))(p(p(a,b),c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:kleisliAssociate",
      "description": {
        "fct-module": "Data.Semifunctor.Associative",
        "fct-package": "semigroupoids",
        "fct-signature": "Kleisli m (p (p (a, b), c)) (p (a, p (b, c)))",
        "fct-source": "src/Data-Semifunctor-Associative.html#kleisliAssociate",
        "fct-type": "function",
        "title": "kleisliAssociate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Associative",
        "module": "Data.Semifunctor.Associative",
        "name": "kleisliAssociate",
        "normalized": "Kleisli a(b(b(c,d),e))(b(c,b(d,e)))",
        "package": "semigroupoids",
        "partial": "Associate",
        "signature": "Kleisli m(p(p(a,b),c))(p(a,p(b,c)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:kleisliDisassociate",
      "description": {
        "fct-module": "Data.Semifunctor.Associative",
        "fct-package": "semigroupoids",
        "fct-signature": "Kleisli m (p (a, p (b, c))) (p (p (a, b), c))",
        "fct-source": "src/Data-Semifunctor-Associative.html#kleisliDisassociate",
        "fct-type": "function",
        "title": "kleisliDisassociate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Associative",
        "module": "Data.Semifunctor.Associative",
        "name": "kleisliDisassociate",
        "normalized": "Kleisli a(b(c,b(d,e)))(b(b(c,d),e))",
        "package": "semigroupoids",
        "partial": "Disassociate",
        "signature": "Kleisli m(p(a,p(b,c)))(p(p(a,b),c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#",
      "description": {
        "fct-module": "Data.Semifunctor.Braided",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semifunctor-Braided.html",
        "fct-type": "module",
        "title": "Braided"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Braided",
        "module": "Data.Semifunctor.Braided",
        "name": "Braided",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Braided",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#t:Braided",
      "description": {
        "fct-module": "Data.Semifunctor.Braided",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Semifunctor-Braided.html#Braided",
        "fct-type": "class",
        "title": "Braided"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Braided",
        "module": "Data.Semifunctor.Braided",
        "name": "Braided",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Braided",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#t:Symmetric",
      "description": {
        "fct-module": "Data.Semifunctor.Braided",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Semifunctor-Braided.html#Symmetric",
        "fct-type": "class",
        "title": "Symmetric"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Braided",
        "module": "Data.Semifunctor.Braided",
        "name": "Symmetric",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Symmetric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#v:braid",
      "description": {
        "fct-module": "Data.Semifunctor.Braided",
        "fct-package": "semigroupoids",
        "fct-signature": "k (p (a, b)) (p (b, a))",
        "fct-source": "src/Data-Semifunctor-Braided.html#braid",
        "fct-type": "method",
        "title": "braid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Braided",
        "module": "Data.Semifunctor.Braided",
        "name": "braid",
        "normalized": "a(b(c,d))(b(d,c))",
        "package": "semigroupoids",
        "partial": "",
        "signature": "k(p(a,b))(p(b,a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#v:cokleisliBraid",
      "description": {
        "fct-module": "Data.Semifunctor.Braided",
        "fct-package": "semigroupoids",
        "fct-signature": "Cokleisli w (p (a, b)) (p (b, a))",
        "fct-source": "src/Data-Semifunctor-Braided.html#cokleisliBraid",
        "fct-type": "function",
        "title": "cokleisliBraid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Braided",
        "module": "Data.Semifunctor.Braided",
        "name": "cokleisliBraid",
        "normalized": "Cokleisli a(b(c,d))(b(d,c))",
        "package": "semigroupoids",
        "partial": "Braid",
        "signature": "Cokleisli w(p(a,b))(p(b,a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#v:kleisliBraid",
      "description": {
        "fct-module": "Data.Semifunctor.Braided",
        "fct-package": "semigroupoids",
        "fct-signature": "Kleisli m (p (a, b)) (p (b, a))",
        "fct-source": "src/Data-Semifunctor-Braided.html#kleisliBraid",
        "fct-type": "function",
        "title": "kleisliBraid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Braided",
        "module": "Data.Semifunctor.Braided",
        "name": "kleisliBraid",
        "normalized": "Kleisli a(b(c,d))(b(d,c))",
        "package": "semigroupoids",
        "partial": "Braid",
        "signature": "Kleisli m(p(a,b))(p(b,a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#v:swap",
      "description": {
        "fct-module": "Data.Semifunctor.Braided",
        "fct-package": "semigroupoids",
        "fct-signature": "k (p (a, b)) (p (b, a))",
        "fct-source": "src/Data-Semifunctor-Braided.html#swap",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor Braided",
        "module": "Data.Semifunctor.Braided",
        "name": "swap",
        "normalized": "a(b(c,d))(b(d,c))",
        "package": "semigroupoids",
        "partial": "",
        "signature": "k(p(a,b))(p(b,a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semifunctor.html",
        "fct-type": "module",
        "title": "Semifunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "Semifunctor",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Semifunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#t:Bi",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to map a more traditional bifunctor into a semifunctor\n\u003c/p\u003e",
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Semifunctor.html#Bi",
        "fct-type": "data",
        "title": "Bi"
      },
      "index": {
        "description": "Used to map more traditional bifunctor into semifunctor",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "Bi",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Bi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#t:Semifunctor",
      "description": {
        "fct-descr": "\u003cp\u003eSemifunctors map objects to objects, and arrows to arrows preserving connectivity\n as normal functors, but do not purport to preserve identity arrows. We apply them\n to semigroupoids, because those don't even claim to offer identity arrows!\n\u003c/p\u003e",
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Semifunctor.html#Semifunctor",
        "fct-type": "class",
        "title": "Semifunctor"
      },
      "index": {
        "description": "Semifunctors map objects to objects and arrows to arrows preserving connectivity as normal functors but do not purport to preserve identity arrows We apply them to semigroupoids because those don even claim to offer identity arrows",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "Semifunctor",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Semifunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#t:WrappedFunctor",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Semifunctor.html#WrappedFunctor",
        "fct-type": "data",
        "title": "WrappedFunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "WrappedFunctor",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrapped Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#t:WrappedTraversable1",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Semifunctor.html#WrappedTraversable1",
        "fct-type": "data",
        "title": "WrappedTraversable1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "WrappedTraversable1",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrapped Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:-35-",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "a -\u003e b -\u003e Bi (,) (a, b)",
        "fct-source": "src/Data-Semifunctor.html#%23",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "(#) #",
        "normalized": "a-\u003eb-\u003eBi(,)(a,b)",
        "package": "semigroupoids",
        "partial": "",
        "signature": "a-\u003eb-\u003eBi(,)(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:Bi",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "p a b -\u003e Bi p (a, b)",
        "fct-source": "src/Data-Semifunctor.html#Bi",
        "fct-type": "function",
        "title": "Bi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "Bi",
        "normalized": "a b c-\u003eBi a(b,c)",
        "package": "semigroupoids",
        "partial": "Bi",
        "signature": "p a b-\u003eBi p(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:WrapFunctor",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "WrapFunctor",
        "fct-source": "src/Data-Semifunctor.html#WrappedFunctor",
        "fct-type": "function",
        "title": "WrapFunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "WrapFunctor",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrap Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:WrapTraversable1",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "WrapTraversable1",
        "fct-source": "src/Data-Semifunctor.html#WrappedTraversable1",
        "fct-type": "function",
        "title": "WrapTraversable1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "WrapTraversable1",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrap Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:first",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "l a b -\u003e cod (p (a, c)) (p (b, c))",
        "fct-source": "src/Data-Semifunctor.html#first",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "first",
        "normalized": "a b c-\u003ed(e(b,f))(e(c,f))",
        "package": "semigroupoids",
        "partial": "",
        "signature": "l a b-\u003ecod(p(a,c))(p(b,c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:second",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "r b c -\u003e cod (p (a, b)) (p (a, c))",
        "fct-source": "src/Data-Semifunctor.html#second",
        "fct-type": "function",
        "title": "second"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "second",
        "normalized": "a b c-\u003ed(e(f,b))(e(f,c))",
        "package": "semigroupoids",
        "partial": "",
        "signature": "r b c-\u003ecod(p(a,b))(p(a,c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:semibimap",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "l a b -\u003e r c d -\u003e cod (p (a, c)) (p (b, d))",
        "fct-source": "src/Data-Semifunctor.html#semibimap",
        "fct-type": "function",
        "title": "semibimap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "semibimap",
        "normalized": "a b c-\u003ed e f-\u003eg(h(b,e))(h(c,f))",
        "package": "semigroupoids",
        "partial": "",
        "signature": "l a b-\u003er c d-\u003ecod(p(a,c))(p(b,d))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:semifirst",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "l a b -\u003e cod (p (a, c)) (p (b, c))",
        "fct-source": "src/Data-Semifunctor.html#semifirst",
        "fct-type": "function",
        "title": "semifirst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "semifirst",
        "normalized": "a b c-\u003ed(e(b,f))(e(c,f))",
        "package": "semigroupoids",
        "partial": "",
        "signature": "l a b-\u003ecod(p(a,c))(p(b,c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:semimap",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "c a b -\u003e d (f a) (f b)",
        "fct-source": "src/Data-Semifunctor.html#semimap",
        "fct-type": "method",
        "title": "semimap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "semimap",
        "normalized": "a b c-\u003ed(e b)(e c)",
        "package": "semigroupoids",
        "partial": "",
        "signature": "c a b-\u003ed(f a)(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:semisecond",
      "description": {
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "r b c -\u003e cod (p (a, b)) (p (a, c))",
        "fct-source": "src/Data-Semifunctor.html#semisecond",
        "fct-type": "function",
        "title": "semisecond"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "semisecond",
        "normalized": "a b c-\u003ed(e(f,b))(e(f,c))",
        "package": "semigroupoids",
        "partial": "",
        "signature": "r b c-\u003ecod(p(a,b))(p(a,c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:unwrapFunctor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "f a",
        "fct-source": "src/Data-Semifunctor.html#WrappedFunctor",
        "fct-type": "function",
        "title": "unwrapFunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "unwrapFunctor",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:unwrapTraversable1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semifunctor",
        "fct-package": "semigroupoids",
        "fct-signature": "f a",
        "fct-source": "src/Data-Semifunctor.html#WrappedTraversable1",
        "fct-type": "function",
        "title": "unwrapTraversable1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semifunctor",
        "module": "Data.Semifunctor",
        "name": "unwrapTraversable1",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#",
      "description": {
        "fct-module": "Data.Semigroup.Foldable",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Foldable.html",
        "fct-type": "module",
        "title": "Foldable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Foldable",
        "module": "Data.Semigroup.Foldable",
        "name": "Foldable",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Foldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#t:Foldable1",
      "description": {
        "fct-module": "Data.Semigroup.Foldable",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroup-Foldable.html#Foldable1",
        "fct-type": "class",
        "title": "Foldable1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Foldable",
        "module": "Data.Semigroup.Foldable",
        "name": "Foldable1",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Foldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:fold1",
      "description": {
        "fct-module": "Data.Semigroup.Foldable",
        "fct-package": "semigroupoids",
        "fct-signature": "t m -\u003e m",
        "fct-source": "src/Data-Semigroup-Foldable.html#fold1",
        "fct-type": "method",
        "title": "fold1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Foldable",
        "module": "Data.Semigroup.Foldable",
        "name": "fold1",
        "normalized": "a b-\u003eb",
        "package": "semigroupoids",
        "partial": "",
        "signature": "t m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:foldMap1",
      "description": {
        "fct-module": "Data.Semigroup.Foldable",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e m) -\u003e t a -\u003e m",
        "fct-source": "src/Data-Semigroup-Foldable.html#foldMap1",
        "fct-type": "method",
        "title": "foldMap1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Foldable",
        "module": "Data.Semigroup.Foldable",
        "name": "foldMap1",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
        "package": "semigroupoids",
        "partial": "Map",
        "signature": "(a-\u003em)-\u003et a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:foldMapDefault1",
      "description": {
        "fct-descr": "\u003cp\u003eUsable default for foldMap, but only if you define foldMap1 yourself\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Foldable",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e m) -\u003e t a -\u003e m",
        "fct-source": "src/Data-Semigroup-Foldable.html#foldMapDefault1",
        "fct-type": "function",
        "title": "foldMapDefault1"
      },
      "index": {
        "description": "Usable default for foldMap but only if you define foldMap1 yourself",
        "hierarchy": "Data Semigroup Foldable",
        "module": "Data.Semigroup.Foldable",
        "name": "foldMapDefault1",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
        "package": "semigroupoids",
        "partial": "Map Default",
        "signature": "(a-\u003em)-\u003et a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:for1_",
      "description": {
        "fct-module": "Data.Semigroup.Foldable",
        "fct-package": "semigroupoids",
        "fct-signature": "t a -\u003e (a -\u003e f b) -\u003e f ()",
        "fct-source": "src/Data-Semigroup-Foldable.html#for1_",
        "fct-type": "function",
        "title": "for1_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Foldable",
        "module": "Data.Semigroup.Foldable",
        "name": "for1_",
        "normalized": "a b-\u003e(b-\u003ec d)-\u003ec()",
        "package": "semigroupoids",
        "partial": "",
        "signature": "t a-\u003e(a-\u003ef b)-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:sequenceA1_",
      "description": {
        "fct-module": "Data.Semigroup.Foldable",
        "fct-package": "semigroupoids",
        "fct-signature": "t (f a) -\u003e f ()",
        "fct-source": "src/Data-Semigroup-Foldable.html#sequenceA1_",
        "fct-type": "function",
        "title": "sequenceA1_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Foldable",
        "module": "Data.Semigroup.Foldable",
        "name": "sequenceA1_",
        "normalized": "a(b c)-\u003eb()",
        "package": "semigroupoids",
        "partial": "",
        "signature": "t(f a)-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:traverse1_",
      "description": {
        "fct-module": "Data.Semigroup.Foldable",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e f b) -\u003e t a -\u003e f ()",
        "fct-source": "src/Data-Semigroup-Foldable.html#traverse1_",
        "fct-type": "function",
        "title": "traverse1_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Foldable",
        "module": "Data.Semigroup.Foldable",
        "name": "traverse1_",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb()",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003et a-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#",
      "description": {
        "fct-module": "Data.Semigroup.Traversable",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Traversable.html",
        "fct-type": "module",
        "title": "Traversable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Traversable",
        "module": "Data.Semigroup.Traversable",
        "name": "Traversable",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#t:Traversable1",
      "description": {
        "fct-module": "Data.Semigroup.Traversable",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroup-Traversable.html#Traversable1",
        "fct-type": "class",
        "title": "Traversable1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Traversable",
        "module": "Data.Semigroup.Traversable",
        "name": "Traversable1",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#v:foldMap1Default",
      "description": {
        "fct-module": "Data.Semigroup.Traversable",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e m) -\u003e f a -\u003e m",
        "fct-source": "src/Data-Semigroup-Traversable.html#foldMap1Default",
        "fct-type": "function",
        "title": "foldMap1Default"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Traversable",
        "module": "Data.Semigroup.Traversable",
        "name": "foldMap1Default",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
        "package": "semigroupoids",
        "partial": "Map Default",
        "signature": "(a-\u003em)-\u003ef a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#v:sequence1",
      "description": {
        "fct-module": "Data.Semigroup.Traversable",
        "fct-package": "semigroupoids",
        "fct-signature": "t (f b) -\u003e f (t b)",
        "fct-source": "src/Data-Semigroup-Traversable.html#sequence1",
        "fct-type": "method",
        "title": "sequence1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Traversable",
        "module": "Data.Semigroup.Traversable",
        "name": "sequence1",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "semigroupoids",
        "partial": "",
        "signature": "t(f b)-\u003ef(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#v:traverse1",
      "description": {
        "fct-module": "Data.Semigroup.Traversable",
        "fct-package": "semigroupoids",
        "fct-signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
        "fct-source": "src/Data-Semigroup-Traversable.html#traverse1",
        "fct-type": "method",
        "title": "traverse1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Traversable",
        "module": "Data.Semigroup.Traversable",
        "name": "traverse1",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "semigroupoids",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#",
      "description": {
        "fct-module": "Data.Semigroupoid.Coproduct",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroupoid-Coproduct.html",
        "fct-type": "module",
        "title": "Coproduct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Coproduct",
        "module": "Data.Semigroupoid.Coproduct",
        "name": "Coproduct",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Coproduct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#t:Coproduct",
      "description": {
        "fct-module": "Data.Semigroupoid.Coproduct",
        "fct-package": "semigroupoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Semigroupoid-Coproduct.html#Coproduct",
        "fct-type": "data",
        "title": "Coproduct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Coproduct",
        "module": "Data.Semigroupoid.Coproduct",
        "name": "Coproduct",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Coproduct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#t:L",
      "description": {
        "fct-module": "Data.Semigroupoid.Coproduct",
        "fct-package": "semigroupoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Semigroupoid-Coproduct.html#L",
        "fct-type": "data",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Coproduct",
        "module": "Data.Semigroupoid.Coproduct",
        "name": "L",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#t:R",
      "description": {
        "fct-module": "Data.Semigroupoid.Coproduct",
        "fct-package": "semigroupoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Semigroupoid-Coproduct.html#R",
        "fct-type": "data",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Coproduct",
        "module": "Data.Semigroupoid.Coproduct",
        "name": "R",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#v:L",
      "description": {
        "fct-module": "Data.Semigroupoid.Coproduct",
        "fct-package": "semigroupoids",
        "fct-signature": "j a b -\u003e Coproduct j k (L a) (L b)",
        "fct-source": "src/Data-Semigroupoid-Coproduct.html#Coproduct",
        "fct-type": "function",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Coproduct",
        "module": "Data.Semigroupoid.Coproduct",
        "name": "L",
        "normalized": "a b c-\u003eCoproduct a d(L b)(L c)",
        "package": "semigroupoids",
        "partial": "",
        "signature": "j a b-\u003eCoproduct j k(L a)(L b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#v:R",
      "description": {
        "fct-module": "Data.Semigroupoid.Coproduct",
        "fct-package": "semigroupoids",
        "fct-signature": "k a b -\u003e Coproduct j k (R a) (R b)",
        "fct-source": "src/Data-Semigroupoid-Coproduct.html#Coproduct",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Coproduct",
        "module": "Data.Semigroupoid.Coproduct",
        "name": "R",
        "normalized": "a b c-\u003eCoproduct d a(R b)(R c)",
        "package": "semigroupoids",
        "partial": "",
        "signature": "k a b-\u003eCoproduct j k(R a)(R b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#v:distributeDualCoproduct",
      "description": {
        "fct-module": "Data.Semigroupoid.Coproduct",
        "fct-package": "semigroupoids",
        "fct-signature": "Dual (Coproduct j k) a b -\u003e Coproduct (Dual j) (Dual k) a b",
        "fct-source": "src/Data-Semigroupoid-Coproduct.html#distributeDualCoproduct",
        "fct-type": "function",
        "title": "distributeDualCoproduct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Coproduct",
        "module": "Data.Semigroupoid.Coproduct",
        "name": "distributeDualCoproduct",
        "normalized": "Dual(Coproduct a b)c d-\u003eCoproduct(Dual a)(Dual b)c d",
        "package": "semigroupoids",
        "partial": "Dual Coproduct",
        "signature": "Dual(Coproduct j k)a b-\u003eCoproduct(Dual j)(Dual k)a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#v:factorDualCoproduct",
      "description": {
        "fct-module": "Data.Semigroupoid.Coproduct",
        "fct-package": "semigroupoids",
        "fct-signature": "Coproduct (Dual j) (Dual k) a b -\u003e Dual (Coproduct j k) a b",
        "fct-source": "src/Data-Semigroupoid-Coproduct.html#factorDualCoproduct",
        "fct-type": "function",
        "title": "factorDualCoproduct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Coproduct",
        "module": "Data.Semigroupoid.Coproduct",
        "name": "factorDualCoproduct",
        "normalized": "Coproduct(Dual a)(Dual b)c d-\u003eDual(Coproduct a b)c d",
        "package": "semigroupoids",
        "partial": "Dual Coproduct",
        "signature": "Coproduct(Dual j)(Dual k)a b-\u003eDual(Coproduct j k)a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Dual.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroupoid satisfies all of the requirements to be a Category except\n for the existence of identity arrows.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroupoid.Dual",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroupoid-Dual.html",
        "fct-type": "module",
        "title": "Dual"
      },
      "index": {
        "description": "semigroupoid satisfies all of the requirements to be Category except for the existence of identity arrows",
        "hierarchy": "Data Semigroupoid Dual",
        "module": "Data.Semigroupoid.Dual",
        "name": "Dual",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Dual.html#t:Dual",
      "description": {
        "fct-module": "Data.Semigroupoid.Dual",
        "fct-package": "semigroupoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroupoid-Dual.html#Dual",
        "fct-type": "newtype",
        "title": "Dual"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Dual",
        "module": "Data.Semigroupoid.Dual",
        "name": "Dual",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Dual.html#v:Dual",
      "description": {
        "fct-module": "Data.Semigroupoid.Dual",
        "fct-package": "semigroupoids",
        "fct-signature": "Dual",
        "fct-source": "src/Data-Semigroupoid-Dual.html#Dual",
        "fct-type": "function",
        "title": "Dual"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Dual",
        "module": "Data.Semigroupoid.Dual",
        "name": "Dual",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Dual.html#v:getDual",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroupoid.Dual",
        "fct-package": "semigroupoids",
        "fct-signature": "k b a",
        "fct-source": "src/Data-Semigroupoid-Dual.html#Dual",
        "fct-type": "function",
        "title": "getDual"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Dual",
        "module": "Data.Semigroupoid.Dual",
        "name": "getDual",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Ob.html#",
      "description": {
        "fct-module": "Data.Semigroupoid.Ob",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroupoid-Ob.html",
        "fct-type": "module",
        "title": "Ob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Ob",
        "module": "Data.Semigroupoid.Ob",
        "name": "Ob",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Ob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Ob.html#t:Ob",
      "description": {
        "fct-module": "Data.Semigroupoid.Ob",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroupoid-Ob.html#Ob",
        "fct-type": "class",
        "title": "Ob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Ob",
        "module": "Data.Semigroupoid.Ob",
        "name": "Ob",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Ob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Ob.html#v:semiid",
      "description": {
        "fct-module": "Data.Semigroupoid.Ob",
        "fct-package": "semigroupoids",
        "fct-signature": "k a a",
        "fct-source": "src/Data-Semigroupoid-Ob.html#semiid",
        "fct-type": "method",
        "title": "semiid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Ob",
        "module": "Data.Semigroupoid.Ob",
        "name": "semiid",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#",
      "description": {
        "fct-module": "Data.Semigroupoid.Product",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroupoid-Product.html",
        "fct-type": "module",
        "title": "Product"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Product",
        "module": "Data.Semigroupoid.Product",
        "name": "Product",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Product",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#t:Product",
      "description": {
        "fct-module": "Data.Semigroupoid.Product",
        "fct-package": "semigroupoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Semigroupoid-Product.html#Product",
        "fct-type": "data",
        "title": "Product"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Product",
        "module": "Data.Semigroupoid.Product",
        "name": "Product",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Product",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#v:Pair",
      "description": {
        "fct-module": "Data.Semigroupoid.Product",
        "fct-package": "semigroupoids",
        "fct-signature": "j a b -\u003e k a' b' -\u003e Product j k (a, a') (b, b')",
        "fct-source": "src/Data-Semigroupoid-Product.html#Product",
        "fct-type": "function",
        "title": "Pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Product",
        "module": "Data.Semigroupoid.Product",
        "name": "Pair",
        "normalized": "a b c-\u003ed e f-\u003eProduct a d(b,e)(c,f)",
        "package": "semigroupoids",
        "partial": "Pair",
        "signature": "j a b-\u003ek a' b'-\u003eProduct j k(a,a')(b,b')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#v:distributeDualProduct",
      "description": {
        "fct-module": "Data.Semigroupoid.Product",
        "fct-package": "semigroupoids",
        "fct-signature": "Dual (Product j k) a b -\u003e Product (Dual j) (Dual k) a b",
        "fct-source": "src/Data-Semigroupoid-Product.html#distributeDualProduct",
        "fct-type": "function",
        "title": "distributeDualProduct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Product",
        "module": "Data.Semigroupoid.Product",
        "name": "distributeDualProduct",
        "normalized": "Dual(Product a b)c d-\u003eProduct(Dual a)(Dual b)c d",
        "package": "semigroupoids",
        "partial": "Dual Product",
        "signature": "Dual(Product j k)a b-\u003eProduct(Dual j)(Dual k)a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#v:factorDualProduct",
      "description": {
        "fct-module": "Data.Semigroupoid.Product",
        "fct-package": "semigroupoids",
        "fct-signature": "Product (Dual j) (Dual k) a b -\u003e Dual (Product j k) a b",
        "fct-source": "src/Data-Semigroupoid-Product.html#factorDualProduct",
        "fct-type": "function",
        "title": "factorDualProduct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Product",
        "module": "Data.Semigroupoid.Product",
        "name": "factorDualProduct",
        "normalized": "Product(Dual a)(Dual b)c d-\u003eDual(Product a b)c d",
        "package": "semigroupoids",
        "partial": "Dual Product",
        "signature": "Product(Dual j)(Dual k)a b-\u003eDual(Product j k)a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Static.html#",
      "description": {
        "fct-module": "Data.Semigroupoid.Static",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroupoid-Static.html",
        "fct-type": "module",
        "title": "Static"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Static",
        "module": "Data.Semigroupoid.Static",
        "name": "Static",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Static.html#t:Static",
      "description": {
        "fct-module": "Data.Semigroupoid.Static",
        "fct-package": "semigroupoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroupoid-Static.html#Static",
        "fct-type": "newtype",
        "title": "Static"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Static",
        "module": "Data.Semigroupoid.Static",
        "name": "Static",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Static.html#v:Static",
      "description": {
        "fct-module": "Data.Semigroupoid.Static",
        "fct-package": "semigroupoids",
        "fct-signature": "Static",
        "fct-source": "src/Data-Semigroupoid-Static.html#Static",
        "fct-type": "function",
        "title": "Static"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Static",
        "module": "Data.Semigroupoid.Static",
        "name": "Static",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Static.html#v:runStatic",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroupoid.Static",
        "fct-package": "semigroupoids",
        "fct-signature": "f (a -\u003e b)",
        "fct-source": "src/Data-Semigroupoid-Static.html#Static",
        "fct-type": "function",
        "title": "runStatic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid Static",
        "module": "Data.Semigroupoid.Static",
        "name": "runStatic",
        "normalized": "a(b-\u003ec)",
        "package": "semigroupoids",
        "partial": "Static",
        "signature": "f(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroupoid satisfies all of the requirements to be a Category except\n for the existence of identity arrows.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroupoid.html",
        "fct-type": "module",
        "title": "Semigroupoid"
      },
      "index": {
        "description": "semigroupoid satisfies all of the requirements to be Category except for the existence of identity arrows",
        "hierarchy": "Data Semigroupoid",
        "module": "Data.Semigroupoid",
        "name": "Semigroupoid",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Semigroupoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#t:Semi",
      "description": {
        "fct-module": "Data.Semigroupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroupoid.html#Semi",
        "fct-type": "newtype",
        "title": "Semi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid",
        "module": "Data.Semigroupoid",
        "name": "Semi",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Semi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#t:Semigroupoid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e sans \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroupoid.html#Semigroupoid",
        "fct-type": "class",
        "title": "Semigroupoid"
      },
      "index": {
        "description": "Category sans id",
        "hierarchy": "Data Semigroupoid",
        "module": "Data.Semigroupoid",
        "name": "Semigroupoid",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Semigroupoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#t:WrappedCategory",
      "description": {
        "fct-module": "Data.Semigroupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroupoid.html#WrappedCategory",
        "fct-type": "newtype",
        "title": "WrappedCategory"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid",
        "module": "Data.Semigroupoid",
        "name": "WrappedCategory",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrapped Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:Semi",
      "description": {
        "fct-module": "Data.Semigroupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "Semi",
        "fct-source": "src/Data-Semigroupoid.html#Semi",
        "fct-type": "function",
        "title": "Semi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid",
        "module": "Data.Semigroupoid",
        "name": "Semi",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Semi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:WrapCategory",
      "description": {
        "fct-module": "Data.Semigroupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "WrapCategory",
        "fct-source": "src/Data-Semigroupoid.html#WrappedCategory",
        "fct-type": "function",
        "title": "WrapCategory"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid",
        "module": "Data.Semigroupoid",
        "name": "WrapCategory",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Wrap Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:getSemi",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "m",
        "fct-source": "src/Data-Semigroupoid.html#Semi",
        "fct-type": "function",
        "title": "getSemi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid",
        "module": "Data.Semigroupoid",
        "name": "getSemi",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Semi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:o",
      "description": {
        "fct-module": "Data.Semigroupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "c j k -\u003e c i j -\u003e c i k",
        "fct-source": "src/Data-Semigroupoid.html#o",
        "fct-type": "method",
        "title": "o"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid",
        "module": "Data.Semigroupoid",
        "name": "o",
        "normalized": "a b c-\u003ea d b-\u003ea d c",
        "package": "semigroupoids",
        "partial": "",
        "signature": "c j k-\u003ec i j-\u003ec i k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:unwrapCategory",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroupoid",
        "fct-package": "semigroupoids",
        "fct-signature": "k a b",
        "fct-source": "src/Data-Semigroupoid.html#WrappedCategory",
        "fct-type": "function",
        "title": "unwrapCategory"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroupoid",
        "module": "Data.Semigroupoid",
        "name": "unwrapCategory",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Traversable-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePlaceholders for missing instances of Traversable, until base catches up and adds them\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Traversable.Instances",
        "fct-package": "semigroupoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Traversable-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Placeholders for missing instances of Traversable until base catches up and adds them",
        "hierarchy": "Data Traversable Instances",
        "module": "Data.Traversable.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "semigroupoids",
        "partial": "Instances",
        "signature": ""
      }
    }
  }
]