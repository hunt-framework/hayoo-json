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
        "word": "semigroupoids"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Alt",
          "name": "Alt",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Alt.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Alt",
          "module": "Data.Functor.Alt",
          "name": "Alt",
          "package": "semigroupoids",
          "partial": "Alt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e \u003c!\u003e is associative:             (a \u003c!\u003e b) \u003c!\u003e c = a \u003c!\u003e (b \u003c!\u003e c)\n \u003c$\u003e left-distributes over \u003c!\u003e:  f \u003c$\u003e (a \u003c!\u003e b) = (f \u003c$\u003e a) \u003c!\u003e (f \u003c$\u003e b)\n\u003c/pre\u003e\u003cp\u003eIf extended to an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003e\u003ca\u003e\u003c!\u003e\u003c/a\u003e\u003c/code\u003e should equal \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIdeally, an instance of \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e also satisfies the \"left distributon\" law of\n MonadPlus with respect to \u003ca\u003e.\u003c/a\u003e:\n\u003c/p\u003e\u003cpre\u003e \u003c.\u003e right-distributes over \u003c!\u003e: (a \u003c!\u003e b) \u003c.\u003e c = (a \u003c.\u003e c) \u003c!\u003e (b \u003c.\u003e c)\n\u003c/pre\u003e\u003cp\u003eBut \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003eErrorT\u003c/code\u003e e m\u003c/code\u003e, and \u003ccode\u003eSTM\u003c/code\u003e satisfy the alternative\n \"left catch\" law instead:\n\u003c/p\u003e\u003cpre\u003e pure a \u003c!\u003e b = pure a\n\u003c/pre\u003e\u003cp\u003eHowever, this variation cannot be stated purely in terms of the dependencies of \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen and if MonadPlus is successfully refactored, this class should also\n be refactored to remove these instances.\n\u003c/p\u003e\u003cp\u003eThe right distributive law should extend in the cases where the a \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is\n provided to yield variations of the right distributive law:\n\u003c/p\u003e\u003cpre\u003e (m \u003c!\u003e n) \u003e\u003e- f = (m \u003e\u003e- f) \u003c!\u003e (m \u003e\u003e- f)\n (m \u003c!\u003e n) \u003e\u003e= f = (m \u003e\u003e= f) \u003c!\u003e (m \u003e\u003e= f)\n\u003c/pre\u003e",
          "module": "Data.Functor.Alt",
          "name": "Alt",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Alt.html#Alt",
          "type": "class"
        },
        "index": {
          "description": "Laws is associative left-distributes over If extended to an Alternative then should equal Ideally an instance of Alt also satisfies the left distributon law of MonadPlus with respect to right-distributes over But Maybe IO Either ErrorT and STM satisfy the alternative left catch law instead pure pure However this variation cannot be stated purely in terms of the dependencies of Alt When and if MonadPlus is successfully refactored this class should also be refactored to remove these instances The right distributive law should extend in the cases where the Bind or Monad is provided to yield variations of the right distributive law",
          "hierarchy": "Data Functor Alt",
          "module": "Data.Functor.Alt",
          "name": "Alt",
          "package": "semigroupoids",
          "partial": "Alt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#t:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(\u003ca\u003e|\u003c/a\u003e)\u003c/code\u003e without a required \u003ccode\u003eempty\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Functor.Alt",
          "name": "(\u003c!\u003e)",
          "package": "semigroupoids",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Data-Functor-Alt.html#%3C%21%3E",
          "type": "method"
        },
        "index": {
          "description": "without required empty",
          "hierarchy": "Data Functor Alt",
          "module": "Data.Functor.Alt",
          "name": "(\u003c!\u003e) \u003c!\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "semigroupoids",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#v:-60--33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Alt",
          "name": "many",
          "package": "semigroupoids",
          "signature": "f a -\u003e f [a]",
          "source": "src/Data-Functor-Alt.html#many",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Alt",
          "module": "Data.Functor.Alt",
          "name": "many",
          "normalized": "a b-\u003ea[b]",
          "package": "semigroupoids",
          "signature": "f a-\u003ef[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Alt",
          "name": "some",
          "package": "semigroupoids",
          "signature": "f a -\u003e f [a]",
          "source": "src/Data-Functor-Alt.html#some",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Alt",
          "module": "Data.Functor.Alt",
          "name": "some",
          "normalized": "a b-\u003ea[b]",
          "package": "semigroupoids",
          "signature": "f a-\u003ef[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Alt.html#v:some"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Apply",
          "name": "Apply",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Apply.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "Apply",
          "package": "semigroupoids",
          "partial": "Apply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strong lax semi-monoidal endofunctor.\n This is equivalent to an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e without \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e associative composition: (.) \u003c$\u003e u \u003c.\u003e v \u003c.\u003e w = u \u003c.\u003e (v \u003c.\u003e w)\n\u003c/pre\u003e",
          "module": "Data.Functor.Apply",
          "name": "Apply",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind.html#Apply",
          "type": "class"
        },
        "index": {
          "description": "strong lax semi-monoidal endofunctor This is equivalent to an Applicative without pure Laws associative composition",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "Apply",
          "package": "semigroupoids",
          "partial": "Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#t:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
          "module": "Data.Functor.Apply",
          "name": "Functor",
          "package": "semigroupoids",
          "type": "class"
        },
        "index": {
          "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "Functor",
          "package": "semigroupoids",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a Apply into an Applicative by adding a unit.\n\u003c/p\u003e",
          "module": "Data.Functor.Apply",
          "name": "MaybeApply",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind.html#MaybeApply",
          "type": "newtype"
        },
        "index": {
          "description": "Transform Apply into an Applicative by adding unit",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "MaybeApply",
          "package": "semigroupoids",
          "partial": "Maybe Apply",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#t:MaybeApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e to be used as a member of \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Functor.Apply",
          "name": "WrappedApplicative",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind.html#WrappedApplicative",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap an Applicative to be used as member of Apply",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "WrappedApplicative",
          "package": "semigroupoids",
          "partial": "Wrapped Applicative",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#t:WrappedApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the contents of a functor uniformly with a constant value.\n\u003c/p\u003e",
          "module": "[\"Data.Functor.Apply\",\"Data.Functor.Bind\"]",
          "name": "($\u003e)",
          "package": "semigroupoids",
          "signature": "f a -\u003e b -\u003e f b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-36--62-\",\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-36--62-\"]"
        },
        "index": {
          "description": "Replace the contents of functor uniformly with constant value",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "($\u003e) $\u003e",
          "normalized": "a b-\u003ec-\u003ea c",
          "package": "semigroupoids",
          "signature": "f a-\u003eb-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all locations in the input with the same value.\n The default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but this may be\n overridden with a more efficient version.\n\u003c/p\u003e",
          "module": "Data.Functor.Apply",
          "name": "(\u003c$)",
          "package": "semigroupoids",
          "signature": "a -\u003e f b -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "Replace all locations in the input with the same value The default definition is fmap const but this may be overridden with more efficient version",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "(\u003c$) \u003c$",
          "normalized": "a-\u003eb c-\u003eb a",
          "package": "semigroupoids",
          "signature": "a-\u003ef b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Functor.Apply\",\"Data.Functor.Bind\"]",
          "name": "(\u003c$\u003e)",
          "package": "semigroupoids",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60--36--62-\",\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60--36--62-\"]"
        },
        "index": {
          "description": "An infix synonym for fmap",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "semigroupoids",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e a \u003c. b = const \u003c$\u003e a \u003c.\u003e b\n\u003c/pre\u003e",
          "module": "Data.Functor.Apply",
          "name": "(\u003c.)",
          "package": "semigroupoids",
          "signature": "f a -\u003e f b -\u003e f a",
          "source": "src/Data-Functor-Bind.html#%3C.",
          "type": "method"
        },
        "index": {
          "description": "const",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "(\u003c.) \u003c.",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "semigroupoids",
          "signature": "f a-\u003ef b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Apply",
          "name": "(\u003c.\u003e)",
          "package": "semigroupoids",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Bind.html#%3C.%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "semigroupoids",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c.\u003e\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
          "module": "[\"Data.Functor.Apply\",\"Data.Functor.Bind\"]",
          "name": "(\u003c..\u003e)",
          "package": "semigroupoids",
          "signature": "w a -\u003e w (a -\u003e b) -\u003e w b",
          "source": "src/Data-Functor-Bind.html#%3C..%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60-..-62-\",\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60-..-62-\"]"
        },
        "index": {
          "description": "variant of with the arguments reversed",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "(\u003c..\u003e) \u003c..\u003e",
          "normalized": "a b-\u003ea(b-\u003ec)-\u003ea c",
          "package": "semigroupoids",
          "signature": "w a-\u003ew(a-\u003eb)-\u003ew b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:-60-..-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e a  .\u003e b = const id \u003c$\u003e a \u003c.\u003e b\n\u003c/pre\u003e",
          "module": "Data.Functor.Apply",
          "name": "(.\u003e)",
          "package": "semigroupoids",
          "signature": "f a -\u003e f b -\u003e f b",
          "source": "src/Data-Functor-Bind.html#.%3E",
          "type": "method"
        },
        "index": {
          "description": "const id",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "(.\u003e) .\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "semigroupoids",
          "signature": "f a-\u003ef b-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Functor.Apply\",\"Data.Functor.Bind\"]",
          "name": "MaybeApply",
          "package": "semigroupoids",
          "signature": "MaybeApply",
          "source": "src/Data-Functor-Bind.html#MaybeApply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:MaybeApply\",\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:MaybeApply\"]"
        },
        "index": {
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "MaybeApply",
          "package": "semigroupoids",
          "partial": "Maybe Apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:MaybeApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Functor.Apply\",\"Data.Functor.Bind\"]",
          "name": "WrapApplicative",
          "package": "semigroupoids",
          "signature": "WrapApplicative",
          "source": "src/Data-Functor-Bind.html#WrappedApplicative",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:WrapApplicative\",\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:WrapApplicative\"]"
        },
        "index": {
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "WrapApplicative",
          "package": "semigroupoids",
          "partial": "Wrap Applicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:WrapApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Apply",
          "name": "fmap",
          "package": "semigroupoids",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "semigroupoids",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a binary function into a comonad with zipping\n\u003c/p\u003e",
          "module": "[\"Data.Functor.Apply\",\"Data.Functor.Bind\"]",
          "name": "liftF2",
          "package": "semigroupoids",
          "signature": "(a -\u003e b -\u003e c) -\u003e w a -\u003e w b -\u003e w c",
          "source": "src/Data-Functor-Bind.html#liftF2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:liftF2\",\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:liftF2\"]"
        },
        "index": {
          "description": "Lift binary function into comonad with zipping",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "liftF2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "semigroupoids",
          "signature": "(a-\u003eb-\u003ec)-\u003ew a-\u003ew b-\u003ew c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:liftF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a ternary function into a comonad with zipping\n\u003c/p\u003e",
          "module": "[\"Data.Functor.Apply\",\"Data.Functor.Bind\"]",
          "name": "liftF3",
          "package": "semigroupoids",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e w a -\u003e w b -\u003e w c -\u003e w d",
          "source": "src/Data-Functor-Bind.html#liftF3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:liftF3\",\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:liftF3\"]"
        },
        "index": {
          "description": "Lift ternary function into comonad with zipping",
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "liftF3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "semigroupoids",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ew a-\u003ew b-\u003ew c-\u003ew d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:liftF3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Functor.Apply\",\"Data.Functor.Bind\"]",
          "name": "runMaybeApply",
          "package": "semigroupoids",
          "signature": "Either (f a) a",
          "source": "src/Data-Functor-Bind.html#MaybeApply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:runMaybeApply\",\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:runMaybeApply\"]"
        },
        "index": {
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "runMaybeApply",
          "package": "semigroupoids",
          "partial": "Maybe Apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:runMaybeApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Functor.Apply\",\"Data.Functor.Bind\"]",
          "name": "unwrapApplicative",
          "package": "semigroupoids",
          "signature": "f a",
          "source": "src/Data-Functor-Bind.html#WrappedApplicative",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:unwrapApplicative\",\"http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:unwrapApplicative\"]"
        },
        "index": {
          "hierarchy": "Data Functor Apply",
          "module": "Data.Functor.Apply",
          "name": "unwrapApplicative",
          "package": "semigroupoids",
          "partial": "Applicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Apply.html#v:unwrapApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind.Trans",
          "name": "Trans",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind-Trans.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Bind Trans",
          "module": "Data.Functor.Bind.Trans",
          "name": "Trans",
          "package": "semigroupoids",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA subset of monad transformers can transform any \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e as well.\n\u003c/p\u003e",
          "module": "Data.Functor.Bind.Trans",
          "name": "BindTrans",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind-Trans.html#BindTrans",
          "type": "class"
        },
        "index": {
          "description": "subset of monad transformers can transform any Bind as well",
          "hierarchy": "Data Functor Bind Trans",
          "module": "Data.Functor.Bind.Trans",
          "name": "BindTrans",
          "package": "semigroupoids",
          "partial": "Bind Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind-Trans.html#t:BindTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind.Trans",
          "name": "liftB",
          "package": "semigroupoids",
          "signature": "b a -\u003e t b a",
          "source": "src/Data-Functor-Bind-Trans.html#liftB",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Bind Trans",
          "module": "Data.Functor.Bind.Trans",
          "name": "liftB",
          "normalized": "a b-\u003ec a b",
          "package": "semigroupoids",
          "signature": "b a-\u003et b a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind-Trans.html#v:liftB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNB: The definitions exported through \u003ca\u003eData.Functor.Apply\u003c/a\u003e need to be\n included here because otherwise the instances for the transformers package\n have orphaned heads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Functor.Bind",
          "name": "Bind",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind.html",
          "type": "module"
        },
        "index": {
          "description": "NB The definitions exported through Data.Functor.Apply need to be included here because otherwise the instances for the transformers package have orphaned heads",
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "Bind",
          "package": "semigroupoids",
          "partial": "Bind",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strong lax semi-monoidal endofunctor.\n This is equivalent to an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e without \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e associative composition: (.) \u003c$\u003e u \u003c.\u003e v \u003c.\u003e w = u \u003c.\u003e (v \u003c.\u003e w)\n\u003c/pre\u003e",
          "module": "Data.Functor.Bind",
          "name": "Apply",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind.html#Apply",
          "type": "class"
        },
        "index": {
          "description": "strong lax semi-monoidal endofunctor This is equivalent to an Applicative without pure Laws associative composition",
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "Apply",
          "package": "semigroupoids",
          "partial": "Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e sans \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal definition: Either \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003e\u003e-\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf defining both, then the following laws (the default definitions) must hold:\n\u003c/p\u003e\u003cpre\u003e join = (\u003e\u003e- id)\n m \u003e\u003e- f = join (fmap f m)\n\u003c/pre\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e induced definition of \u003c.\u003e: f \u003c.\u003e x = f \u003e\u003e- (\u003c$\u003e x)\n\u003c/pre\u003e\u003cp\u003eFinally, there are two associativity conditions:\n\u003c/p\u003e\u003cpre\u003e associativity of (\u003e\u003e-):    (m \u003e\u003e- f) \u003e\u003e- g == m \u003e\u003e- (\\x -\u003e f x \u003e\u003e- g)\n associativity of join:     join . join = join . fmap join\n\u003c/pre\u003e\u003cp\u003eThese can both be seen as special cases of the constraint that\n\u003c/p\u003e\u003cpre\u003e associativity of (-\u003e-): (f -\u003e- g) -\u003e- h = f -\u003e- (g -\u003e- h)\n\u003c/pre\u003e",
          "module": "Data.Functor.Bind",
          "name": "Bind",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind.html#Bind",
          "type": "class"
        },
        "index": {
          "description": "Monad sans return Minimal definition Either join or If defining both then the following laws the default definitions must hold join id join fmap Laws induced definition of Finally there are two associativity conditions associativity of associativity of join join join join fmap join These can both be seen as special cases of the constraint that associativity of",
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "Bind",
          "package": "semigroupoids",
          "partial": "Bind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:Bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
          "module": "Data.Functor.Bind",
          "name": "Functor",
          "package": "semigroupoids",
          "type": "class"
        },
        "index": {
          "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "Functor",
          "package": "semigroupoids",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a Apply into an Applicative by adding a unit.\n\u003c/p\u003e",
          "module": "Data.Functor.Bind",
          "name": "MaybeApply",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind.html#MaybeApply",
          "type": "newtype"
        },
        "index": {
          "description": "Transform Apply into an Applicative by adding unit",
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "MaybeApply",
          "package": "semigroupoids",
          "partial": "Maybe Apply",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:MaybeApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e to be used as a member of \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Functor.Bind",
          "name": "WrappedApplicative",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Bind.html#WrappedApplicative",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap an Applicative to be used as member of Apply",
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "WrappedApplicative",
          "package": "semigroupoids",
          "partial": "Wrapped Applicative",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#t:WrappedApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind",
          "name": "(-\u003c-)",
          "package": "semigroupoids",
          "signature": "(b -\u003e m c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
          "source": "src/Data-Functor-Bind.html#-%3C-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "(-\u003c-) -\u003c-",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
          "package": "semigroupoids",
          "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-45--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind",
          "name": "(-\u003c\u003c)",
          "package": "semigroupoids",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "source": "src/Data-Functor-Bind.html#-%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "(-\u003c\u003c) -\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "semigroupoids",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-45--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind",
          "name": "(-\u003e-)",
          "package": "semigroupoids",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
          "source": "src/Data-Functor-Bind.html#-%3E-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "(-\u003e-) -\u003e-",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "semigroupoids",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-45--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all locations in the input with the same value.\n The default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but this may be\n overridden with a more efficient version.\n\u003c/p\u003e",
          "module": "Data.Functor.Bind",
          "name": "(\u003c$)",
          "package": "semigroupoids",
          "signature": "a -\u003e f b -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "Replace all locations in the input with the same value The default definition is fmap const but this may be overridden with more efficient version",
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "(\u003c$) \u003c$",
          "normalized": "a-\u003eb c-\u003eb a",
          "package": "semigroupoids",
          "signature": "a-\u003ef b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e a \u003c. b = const \u003c$\u003e a \u003c.\u003e b\n\u003c/pre\u003e",
          "module": "Data.Functor.Bind",
          "name": "(\u003c.)",
          "package": "semigroupoids",
          "signature": "f a -\u003e f b -\u003e f a",
          "source": "src/Data-Functor-Bind.html#%3C.",
          "type": "method"
        },
        "index": {
          "description": "const",
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "(\u003c.) \u003c.",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "semigroupoids",
          "signature": "f a-\u003ef b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind",
          "name": "(\u003c.\u003e)",
          "package": "semigroupoids",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Bind.html#%3C.%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "semigroupoids",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind",
          "name": "(\u003e\u003e-)",
          "package": "semigroupoids",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Data-Functor-Bind.html#%3E%3E-",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "(\u003e\u003e-) \u003e\u003e-",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "semigroupoids",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:-62--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e a  .\u003e b = const id \u003c$\u003e a \u003c.\u003e b\n\u003c/pre\u003e",
          "module": "Data.Functor.Bind",
          "name": "(.\u003e)",
          "package": "semigroupoids",
          "signature": "f a -\u003e f b -\u003e f b",
          "source": "src/Data-Functor-Bind.html#.%3E",
          "type": "method"
        },
        "index": {
          "description": "const id",
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "(.\u003e) .\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "semigroupoids",
          "signature": "f a-\u003ef b-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind",
          "name": "apDefault",
          "package": "semigroupoids",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Bind.html#apDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "apDefault",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "semigroupoids",
          "partial": "Default",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:apDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind",
          "name": "fmap",
          "package": "semigroupoids",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "semigroupoids",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind",
          "name": "join",
          "package": "semigroupoids",
          "signature": "m (m a) -\u003e m a",
          "source": "src/Data-Functor-Bind.html#join",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "semigroupoids",
          "signature": "m(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Bind",
          "name": "returning",
          "package": "semigroupoids",
          "signature": "f a -\u003e (a -\u003e b) -\u003e f b",
          "source": "src/Data-Functor-Bind.html#returning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Bind",
          "module": "Data.Functor.Bind",
          "name": "returning",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "semigroupoids",
          "signature": "f a-\u003e(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Bind.html#v:returning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Extend",
          "name": "Extend",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Extend.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Extend",
          "module": "Data.Functor.Extend",
          "name": "Extend",
          "package": "semigroupoids",
          "partial": "Extend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Extend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Extend",
          "name": "Extend",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Extend.html#Extend",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Functor Extend",
          "module": "Data.Functor.Extend",
          "name": "Extend",
          "package": "semigroupoids",
          "partial": "Extend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Extend.html#t:Extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e duplicated = extended id\n fmap (fmap f) . duplicated = duplicated . fmap f\n\u003c/pre\u003e",
          "module": "Data.Functor.Extend",
          "name": "duplicated",
          "package": "semigroupoids",
          "signature": "w a -\u003e w (w a)",
          "source": "src/Data-Functor-Extend.html#duplicated",
          "type": "method"
        },
        "index": {
          "description": "duplicated extended id fmap fmap duplicated duplicated fmap",
          "hierarchy": "Data Functor Extend",
          "module": "Data.Functor.Extend",
          "name": "duplicated",
          "normalized": "a b-\u003ea(a b)",
          "package": "semigroupoids",
          "signature": "w a-\u003ew(w a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Extend.html#v:duplicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e extended f  = fmap f . duplicated\n\u003c/pre\u003e",
          "module": "Data.Functor.Extend",
          "name": "extended",
          "package": "semigroupoids",
          "signature": "(w a -\u003e b) -\u003e w a -\u003e w b",
          "source": "src/Data-Functor-Extend.html#extended",
          "type": "method"
        },
        "index": {
          "description": "extended fmap duplicated",
          "hierarchy": "Data Functor Extend",
          "module": "Data.Functor.Extend",
          "name": "extended",
          "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
          "package": "semigroupoids",
          "signature": "(w a-\u003eb)-\u003ew a-\u003ew b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Extend.html#v:extended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Plus",
          "name": "Plus",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Plus.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Plus",
          "module": "Data.Functor.Plus",
          "name": "Plus",
          "package": "semigroupoids",
          "partial": "Plus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Plus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e zero \u003c!\u003e m = m\n m \u003c!\u003e zero = m\n\u003c/pre\u003e\u003cp\u003eIf extended to an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e should equal \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Plus",
          "name": "Plus",
          "package": "semigroupoids",
          "source": "src/Data-Functor-Plus.html#Plus",
          "type": "class"
        },
        "index": {
          "description": "Laws zero zero If extended to an Alternative then zero should equal empty",
          "hierarchy": "Data Functor Plus",
          "module": "Data.Functor.Plus",
          "name": "Plus",
          "package": "semigroupoids",
          "partial": "Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Plus.html#t:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Plus",
          "name": "zero",
          "package": "semigroupoids",
          "signature": "f a",
          "source": "src/Data-Functor-Plus.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Plus",
          "module": "Data.Functor.Plus",
          "name": "zero",
          "package": "semigroupoids",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Functor-Plus.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Groupoid",
          "name": "Groupoid",
          "package": "semigroupoids",
          "source": "src/Data-Groupoid.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Groupoid",
          "module": "Data.Groupoid",
          "name": "Groupoid",
          "package": "semigroupoids",
          "partial": "Groupoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Groupoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esemigroupoid with inverses. This technically should be a category with inverses, except we need to use Ob to define the valid objects for the category\n\u003c/p\u003e",
          "module": "Data.Groupoid",
          "name": "Groupoid",
          "package": "semigroupoids",
          "source": "src/Data-Groupoid.html#Groupoid",
          "type": "class"
        },
        "index": {
          "description": "semigroupoid with inverses This technically should be category with inverses except we need to use Ob to define the valid objects for the category",
          "hierarchy": "Data Groupoid",
          "module": "Data.Groupoid",
          "name": "Groupoid",
          "package": "semigroupoids",
          "partial": "Groupoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Groupoid.html#t:Groupoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Groupoid",
          "name": "inv",
          "package": "semigroupoids",
          "signature": "k a b -\u003e k b a",
          "source": "src/Data-Groupoid.html#inv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Groupoid",
          "module": "Data.Groupoid",
          "name": "inv",
          "normalized": "a b c-\u003ea c b",
          "package": "semigroupoids",
          "signature": "k a b-\u003ek b a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Groupoid.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Isomorphism",
          "name": "Isomorphism",
          "package": "semigroupoids",
          "source": "src/Data-Isomorphism.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Isomorphism",
          "module": "Data.Isomorphism",
          "name": "Isomorphism",
          "package": "semigroupoids",
          "partial": "Isomorphism",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Isomorphism",
          "name": "Iso",
          "package": "semigroupoids",
          "source": "src/Data-Isomorphism.html#Iso",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Isomorphism",
          "module": "Data.Isomorphism",
          "name": "Iso",
          "package": "semigroupoids",
          "partial": "Iso",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Isomorphism",
          "name": "Iso",
          "package": "semigroupoids",
          "signature": "Iso",
          "source": "src/Data-Isomorphism.html#Iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Isomorphism",
          "module": "Data.Isomorphism",
          "name": "Iso",
          "package": "semigroupoids",
          "partial": "Iso",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#v:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Isomorphism",
          "name": "embed",
          "package": "semigroupoids",
          "signature": "k a b",
          "source": "src/Data-Isomorphism.html#Iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Isomorphism",
          "module": "Data.Isomorphism",
          "name": "embed",
          "package": "semigroupoids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Isomorphism",
          "name": "project",
          "package": "semigroupoids",
          "signature": "k b a",
          "source": "src/Data-Isomorphism.html#Iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Isomorphism",
          "module": "Data.Isomorphism",
          "name": "project",
          "package": "semigroupoids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Isomorphism.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Associative",
          "name": "Associative",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor-Associative.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semifunctor Associative",
          "module": "Data.Semifunctor.Associative",
          "name": "Associative",
          "package": "semigroupoids",
          "partial": "Associative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Associative",
          "name": "Associative",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor-Associative.html#Associative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semifunctor Associative",
          "module": "Data.Semifunctor.Associative",
          "name": "Associative",
          "package": "semigroupoids",
          "partial": "Associative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#t:Associative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Associative",
          "name": "Disassociative",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor-Associative.html#Disassociative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semifunctor Associative",
          "module": "Data.Semifunctor.Associative",
          "name": "Disassociative",
          "package": "semigroupoids",
          "partial": "Disassociative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#t:Disassociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Associative",
          "name": "associate",
          "package": "semigroupoids",
          "signature": "k (p (p (a, b), c)) (p (a, p (b, c)))",
          "source": "src/Data-Semifunctor-Associative.html#associate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semifunctor Associative",
          "module": "Data.Semifunctor.Associative",
          "name": "associate",
          "normalized": "a(b(b(c,d),e))(b(c,b(d,e)))",
          "package": "semigroupoids",
          "signature": "k(p(p(a,b),c))(p(a,p(b,c)))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:associate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Associative",
          "name": "cokleisliAssociate",
          "package": "semigroupoids",
          "signature": "Cokleisli m (p (p (a, b), c)) (p (a, p (b, c)))",
          "source": "src/Data-Semifunctor-Associative.html#cokleisliAssociate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor Associative",
          "module": "Data.Semifunctor.Associative",
          "name": "cokleisliAssociate",
          "normalized": "Cokleisli a(b(b(c,d),e))(b(c,b(d,e)))",
          "package": "semigroupoids",
          "partial": "Associate",
          "signature": "Cokleisli m(p(p(a,b),c))(p(a,p(b,c)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:cokleisliAssociate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Associative",
          "name": "cokleisliDisassociate",
          "package": "semigroupoids",
          "signature": "Cokleisli m (p (a, p (b, c))) (p (p (a, b), c))",
          "source": "src/Data-Semifunctor-Associative.html#cokleisliDisassociate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor Associative",
          "module": "Data.Semifunctor.Associative",
          "name": "cokleisliDisassociate",
          "normalized": "Cokleisli a(b(c,b(d,e)))(b(b(c,d),e))",
          "package": "semigroupoids",
          "partial": "Disassociate",
          "signature": "Cokleisli m(p(a,p(b,c)))(p(p(a,b),c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:cokleisliDisassociate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Associative",
          "name": "disassociate",
          "package": "semigroupoids",
          "signature": "k (p (a, p (b, c))) (p (p (a, b), c))",
          "source": "src/Data-Semifunctor-Associative.html#disassociate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semifunctor Associative",
          "module": "Data.Semifunctor.Associative",
          "name": "disassociate",
          "normalized": "a(b(c,b(d,e)))(b(b(c,d),e))",
          "package": "semigroupoids",
          "signature": "k(p(a,p(b,c)))(p(p(a,b),c))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:disassociate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Associative",
          "name": "kleisliAssociate",
          "package": "semigroupoids",
          "signature": "Kleisli m (p (p (a, b), c)) (p (a, p (b, c)))",
          "source": "src/Data-Semifunctor-Associative.html#kleisliAssociate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor Associative",
          "module": "Data.Semifunctor.Associative",
          "name": "kleisliAssociate",
          "normalized": "Kleisli a(b(b(c,d),e))(b(c,b(d,e)))",
          "package": "semigroupoids",
          "partial": "Associate",
          "signature": "Kleisli m(p(p(a,b),c))(p(a,p(b,c)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:kleisliAssociate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Associative",
          "name": "kleisliDisassociate",
          "package": "semigroupoids",
          "signature": "Kleisli m (p (a, p (b, c))) (p (p (a, b), c))",
          "source": "src/Data-Semifunctor-Associative.html#kleisliDisassociate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor Associative",
          "module": "Data.Semifunctor.Associative",
          "name": "kleisliDisassociate",
          "normalized": "Kleisli a(b(c,b(d,e)))(b(b(c,d),e))",
          "package": "semigroupoids",
          "partial": "Disassociate",
          "signature": "Kleisli m(p(a,p(b,c)))(p(p(a,b),c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Associative.html#v:kleisliDisassociate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Braided",
          "name": "Braided",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor-Braided.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semifunctor Braided",
          "module": "Data.Semifunctor.Braided",
          "name": "Braided",
          "package": "semigroupoids",
          "partial": "Braided",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Braided",
          "name": "Braided",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor-Braided.html#Braided",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semifunctor Braided",
          "module": "Data.Semifunctor.Braided",
          "name": "Braided",
          "package": "semigroupoids",
          "partial": "Braided",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#t:Braided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Braided",
          "name": "Symmetric",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor-Braided.html#Symmetric",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semifunctor Braided",
          "module": "Data.Semifunctor.Braided",
          "name": "Symmetric",
          "package": "semigroupoids",
          "partial": "Symmetric",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#t:Symmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Braided",
          "name": "braid",
          "package": "semigroupoids",
          "signature": "k (p (a, b)) (p (b, a))",
          "source": "src/Data-Semifunctor-Braided.html#braid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semifunctor Braided",
          "module": "Data.Semifunctor.Braided",
          "name": "braid",
          "normalized": "a(b(c,d))(b(d,c))",
          "package": "semigroupoids",
          "signature": "k(p(a,b))(p(b,a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#v:braid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Braided",
          "name": "cokleisliBraid",
          "package": "semigroupoids",
          "signature": "Cokleisli w (p (a, b)) (p (b, a))",
          "source": "src/Data-Semifunctor-Braided.html#cokleisliBraid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor Braided",
          "module": "Data.Semifunctor.Braided",
          "name": "cokleisliBraid",
          "normalized": "Cokleisli a(b(c,d))(b(d,c))",
          "package": "semigroupoids",
          "partial": "Braid",
          "signature": "Cokleisli w(p(a,b))(p(b,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#v:cokleisliBraid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Braided",
          "name": "kleisliBraid",
          "package": "semigroupoids",
          "signature": "Kleisli m (p (a, b)) (p (b, a))",
          "source": "src/Data-Semifunctor-Braided.html#kleisliBraid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor Braided",
          "module": "Data.Semifunctor.Braided",
          "name": "kleisliBraid",
          "normalized": "Kleisli a(b(c,d))(b(d,c))",
          "package": "semigroupoids",
          "partial": "Braid",
          "signature": "Kleisli m(p(a,b))(p(b,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#v:kleisliBraid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor.Braided",
          "name": "swap",
          "package": "semigroupoids",
          "signature": "k (p (a, b)) (p (b, a))",
          "source": "src/Data-Semifunctor-Braided.html#swap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor Braided",
          "module": "Data.Semifunctor.Braided",
          "name": "swap",
          "normalized": "a(b(c,d))(b(d,c))",
          "package": "semigroupoids",
          "signature": "k(p(a,b))(p(b,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor-Braided.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "Semifunctor",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "Semifunctor",
          "package": "semigroupoids",
          "partial": "Semifunctor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to map a more traditional bifunctor into a semifunctor\n\u003c/p\u003e",
          "module": "Data.Semifunctor",
          "name": "Bi",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor.html#Bi",
          "type": "data"
        },
        "index": {
          "description": "Used to map more traditional bifunctor into semifunctor",
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "Bi",
          "package": "semigroupoids",
          "partial": "Bi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#t:Bi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemifunctors map objects to objects, and arrows to arrows preserving connectivity\n as normal functors, but do not purport to preserve identity arrows. We apply them\n to semigroupoids, because those don't even claim to offer identity arrows!\n\u003c/p\u003e",
          "module": "Data.Semifunctor",
          "name": "Semifunctor",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor.html#Semifunctor",
          "type": "class"
        },
        "index": {
          "description": "Semifunctors map objects to objects and arrows to arrows preserving connectivity as normal functors but do not purport to preserve identity arrows We apply them to semigroupoids because those don even claim to offer identity arrows",
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "Semifunctor",
          "package": "semigroupoids",
          "partial": "Semifunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#t:Semifunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "WrappedFunctor",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor.html#WrappedFunctor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "WrappedFunctor",
          "package": "semigroupoids",
          "partial": "Wrapped Functor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#t:WrappedFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "WrappedTraversable1",
          "package": "semigroupoids",
          "source": "src/Data-Semifunctor.html#WrappedTraversable1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "WrappedTraversable1",
          "package": "semigroupoids",
          "partial": "Wrapped Traversable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#t:WrappedTraversable1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "(#)",
          "package": "semigroupoids",
          "signature": "a -\u003e b -\u003e Bi (,) (a, b)",
          "source": "src/Data-Semifunctor.html#%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "(#) #",
          "normalized": "a-\u003eb-\u003eBi(,)(a,b)",
          "package": "semigroupoids",
          "signature": "a-\u003eb-\u003eBi(,)(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "Bi",
          "package": "semigroupoids",
          "signature": "p a b -\u003e Bi p (a, b)",
          "source": "src/Data-Semifunctor.html#Bi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "Bi",
          "normalized": "a b c-\u003eBi a(b,c)",
          "package": "semigroupoids",
          "partial": "Bi",
          "signature": "p a b-\u003eBi p(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:Bi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "WrapFunctor",
          "package": "semigroupoids",
          "signature": "WrapFunctor",
          "source": "src/Data-Semifunctor.html#WrappedFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "WrapFunctor",
          "package": "semigroupoids",
          "partial": "Wrap Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:WrapFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "WrapTraversable1",
          "package": "semigroupoids",
          "signature": "WrapTraversable1",
          "source": "src/Data-Semifunctor.html#WrappedTraversable1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "WrapTraversable1",
          "package": "semigroupoids",
          "partial": "Wrap Traversable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:WrapTraversable1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "first",
          "package": "semigroupoids",
          "signature": "l a b -\u003e cod (p (a, c)) (p (b, c))",
          "source": "src/Data-Semifunctor.html#first",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "first",
          "normalized": "a b c-\u003ed(e(b,f))(e(c,f))",
          "package": "semigroupoids",
          "signature": "l a b-\u003ecod(p(a,c))(p(b,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "second",
          "package": "semigroupoids",
          "signature": "r b c -\u003e cod (p (a, b)) (p (a, c))",
          "source": "src/Data-Semifunctor.html#second",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "second",
          "normalized": "a b c-\u003ed(e(f,b))(e(f,c))",
          "package": "semigroupoids",
          "signature": "r b c-\u003ecod(p(a,b))(p(a,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "semibimap",
          "package": "semigroupoids",
          "signature": "l a b -\u003e r c d -\u003e cod (p (a, c)) (p (b, d))",
          "source": "src/Data-Semifunctor.html#semibimap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "semibimap",
          "normalized": "a b c-\u003ed e f-\u003eg(h(b,e))(h(c,f))",
          "package": "semigroupoids",
          "signature": "l a b-\u003er c d-\u003ecod(p(a,c))(p(b,d))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:semibimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "semifirst",
          "package": "semigroupoids",
          "signature": "l a b -\u003e cod (p (a, c)) (p (b, c))",
          "source": "src/Data-Semifunctor.html#semifirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "semifirst",
          "normalized": "a b c-\u003ed(e(b,f))(e(c,f))",
          "package": "semigroupoids",
          "signature": "l a b-\u003ecod(p(a,c))(p(b,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:semifirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "semimap",
          "package": "semigroupoids",
          "signature": "c a b -\u003e d (f a) (f b)",
          "source": "src/Data-Semifunctor.html#semimap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "semimap",
          "normalized": "a b c-\u003ed(e b)(e c)",
          "package": "semigroupoids",
          "signature": "c a b-\u003ed(f a)(f b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:semimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "semisecond",
          "package": "semigroupoids",
          "signature": "r b c -\u003e cod (p (a, b)) (p (a, c))",
          "source": "src/Data-Semifunctor.html#semisecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "semisecond",
          "normalized": "a b c-\u003ed(e(f,b))(e(f,c))",
          "package": "semigroupoids",
          "signature": "r b c-\u003ecod(p(a,b))(p(a,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:semisecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "unwrapFunctor",
          "package": "semigroupoids",
          "signature": "f a",
          "source": "src/Data-Semifunctor.html#WrappedFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "unwrapFunctor",
          "package": "semigroupoids",
          "partial": "Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:unwrapFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semifunctor",
          "name": "unwrapTraversable1",
          "package": "semigroupoids",
          "signature": "f a",
          "source": "src/Data-Semifunctor.html#WrappedTraversable1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semifunctor",
          "module": "Data.Semifunctor",
          "name": "unwrapTraversable1",
          "package": "semigroupoids",
          "partial": "Traversable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semifunctor.html#v:unwrapTraversable1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Foldable",
          "name": "Foldable",
          "package": "semigroupoids",
          "source": "src/Data-Semigroup-Foldable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroup Foldable",
          "module": "Data.Semigroup.Foldable",
          "name": "Foldable",
          "package": "semigroupoids",
          "partial": "Foldable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Foldable",
          "name": "Foldable1",
          "package": "semigroupoids",
          "source": "src/Data-Semigroup-Foldable.html#Foldable1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semigroup Foldable",
          "module": "Data.Semigroup.Foldable",
          "name": "Foldable1",
          "package": "semigroupoids",
          "partial": "Foldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#t:Foldable1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Foldable",
          "name": "fold1",
          "package": "semigroupoids",
          "signature": "t m -\u003e m",
          "source": "src/Data-Semigroup-Foldable.html#fold1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Foldable",
          "module": "Data.Semigroup.Foldable",
          "name": "fold1",
          "normalized": "a b-\u003eb",
          "package": "semigroupoids",
          "signature": "t m-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Foldable",
          "name": "foldMap1",
          "package": "semigroupoids",
          "signature": "(a -\u003e m) -\u003e t a -\u003e m",
          "source": "src/Data-Semigroup-Foldable.html#foldMap1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Foldable",
          "module": "Data.Semigroup.Foldable",
          "name": "foldMap1",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "semigroupoids",
          "partial": "Map",
          "signature": "(a-\u003em)-\u003et a-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:foldMap1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsable default for foldMap, but only if you define foldMap1 yourself\n\u003c/p\u003e",
          "module": "Data.Semigroup.Foldable",
          "name": "foldMapDefault1",
          "package": "semigroupoids",
          "signature": "(a -\u003e m) -\u003e t a -\u003e m",
          "source": "src/Data-Semigroup-Foldable.html#foldMapDefault1",
          "type": "function"
        },
        "index": {
          "description": "Usable default for foldMap but only if you define foldMap1 yourself",
          "hierarchy": "Data Semigroup Foldable",
          "module": "Data.Semigroup.Foldable",
          "name": "foldMapDefault1",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "semigroupoids",
          "partial": "Map Default",
          "signature": "(a-\u003em)-\u003et a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:foldMapDefault1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Foldable",
          "name": "for1_",
          "package": "semigroupoids",
          "signature": "t a -\u003e (a -\u003e f b) -\u003e f ()",
          "source": "src/Data-Semigroup-Foldable.html#for1_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Foldable",
          "module": "Data.Semigroup.Foldable",
          "name": "for1_",
          "normalized": "a b-\u003e(b-\u003ec d)-\u003ec()",
          "package": "semigroupoids",
          "signature": "t a-\u003e(a-\u003ef b)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:for1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Foldable",
          "name": "sequenceA1_",
          "package": "semigroupoids",
          "signature": "t (f a) -\u003e f ()",
          "source": "src/Data-Semigroup-Foldable.html#sequenceA1_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Foldable",
          "module": "Data.Semigroup.Foldable",
          "name": "sequenceA1_",
          "normalized": "a(b c)-\u003eb()",
          "package": "semigroupoids",
          "signature": "t(f a)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:sequenceA1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Foldable",
          "name": "traverse1_",
          "package": "semigroupoids",
          "signature": "(a -\u003e f b) -\u003e t a -\u003e f ()",
          "source": "src/Data-Semigroup-Foldable.html#traverse1_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Foldable",
          "module": "Data.Semigroup.Foldable",
          "name": "traverse1_",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb()",
          "package": "semigroupoids",
          "signature": "(a-\u003ef b)-\u003et a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Foldable.html#v:traverse1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Traversable",
          "name": "Traversable",
          "package": "semigroupoids",
          "source": "src/Data-Semigroup-Traversable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroup Traversable",
          "module": "Data.Semigroup.Traversable",
          "name": "Traversable",
          "package": "semigroupoids",
          "partial": "Traversable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Traversable",
          "name": "Traversable1",
          "package": "semigroupoids",
          "source": "src/Data-Semigroup-Traversable.html#Traversable1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semigroup Traversable",
          "module": "Data.Semigroup.Traversable",
          "name": "Traversable1",
          "package": "semigroupoids",
          "partial": "Traversable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#t:Traversable1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Traversable",
          "name": "foldMap1Default",
          "package": "semigroupoids",
          "signature": "(a -\u003e m) -\u003e f a -\u003e m",
          "source": "src/Data-Semigroup-Traversable.html#foldMap1Default",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Traversable",
          "module": "Data.Semigroup.Traversable",
          "name": "foldMap1Default",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "semigroupoids",
          "partial": "Map Default",
          "signature": "(a-\u003em)-\u003ef a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#v:foldMap1Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Traversable",
          "name": "sequence1",
          "package": "semigroupoids",
          "signature": "t (f b) -\u003e f (t b)",
          "source": "src/Data-Semigroup-Traversable.html#sequence1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Traversable",
          "module": "Data.Semigroup.Traversable",
          "name": "sequence1",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "semigroupoids",
          "signature": "t(f b)-\u003ef(t b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#v:sequence1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Traversable",
          "name": "traverse1",
          "package": "semigroupoids",
          "signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
          "source": "src/Data-Semigroup-Traversable.html#traverse1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Traversable",
          "module": "Data.Semigroup.Traversable",
          "name": "traverse1",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "semigroupoids",
          "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroup-Traversable.html#v:traverse1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Coproduct",
          "name": "Coproduct",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Coproduct.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Coproduct",
          "module": "Data.Semigroupoid.Coproduct",
          "name": "Coproduct",
          "package": "semigroupoids",
          "partial": "Coproduct",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Coproduct",
          "name": "Coproduct",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Coproduct.html#Coproduct",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Coproduct",
          "module": "Data.Semigroupoid.Coproduct",
          "name": "Coproduct",
          "package": "semigroupoids",
          "partial": "Coproduct",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#t:Coproduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Coproduct",
          "name": "L",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Coproduct.html#L",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Coproduct",
          "module": "Data.Semigroupoid.Coproduct",
          "name": "L",
          "package": "semigroupoids",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Coproduct",
          "name": "R",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Coproduct.html#R",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Coproduct",
          "module": "Data.Semigroupoid.Coproduct",
          "name": "R",
          "package": "semigroupoids",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Coproduct",
          "name": "L",
          "package": "semigroupoids",
          "signature": "j a b -\u003e Coproduct j k (L a) (L b)",
          "source": "src/Data-Semigroupoid-Coproduct.html#Coproduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Coproduct",
          "module": "Data.Semigroupoid.Coproduct",
          "name": "L",
          "normalized": "a b c-\u003eCoproduct a d(L b)(L c)",
          "package": "semigroupoids",
          "signature": "j a b-\u003eCoproduct j k(L a)(L b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Coproduct",
          "name": "R",
          "package": "semigroupoids",
          "signature": "k a b -\u003e Coproduct j k (R a) (R b)",
          "source": "src/Data-Semigroupoid-Coproduct.html#Coproduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Coproduct",
          "module": "Data.Semigroupoid.Coproduct",
          "name": "R",
          "normalized": "a b c-\u003eCoproduct d a(R b)(R c)",
          "package": "semigroupoids",
          "signature": "k a b-\u003eCoproduct j k(R a)(R b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Coproduct",
          "name": "distributeDualCoproduct",
          "package": "semigroupoids",
          "signature": "Dual (Coproduct j k) a b -\u003e Coproduct (Dual j) (Dual k) a b",
          "source": "src/Data-Semigroupoid-Coproduct.html#distributeDualCoproduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Coproduct",
          "module": "Data.Semigroupoid.Coproduct",
          "name": "distributeDualCoproduct",
          "normalized": "Dual(Coproduct a b)c d-\u003eCoproduct(Dual a)(Dual b)c d",
          "package": "semigroupoids",
          "partial": "Dual Coproduct",
          "signature": "Dual(Coproduct j k)a b-\u003eCoproduct(Dual j)(Dual k)a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#v:distributeDualCoproduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Coproduct",
          "name": "factorDualCoproduct",
          "package": "semigroupoids",
          "signature": "Coproduct (Dual j) (Dual k) a b -\u003e Dual (Coproduct j k) a b",
          "source": "src/Data-Semigroupoid-Coproduct.html#factorDualCoproduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Coproduct",
          "module": "Data.Semigroupoid.Coproduct",
          "name": "factorDualCoproduct",
          "normalized": "Coproduct(Dual a)(Dual b)c d-\u003eDual(Coproduct a b)c d",
          "package": "semigroupoids",
          "partial": "Dual Coproduct",
          "signature": "Coproduct(Dual j)(Dual k)a b-\u003eDual(Coproduct j k)a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Coproduct.html#v:factorDualCoproduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroupoid satisfies all of the requirements to be a Category except\n for the existence of identity arrows.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroupoid.Dual",
          "name": "Dual",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Dual.html",
          "type": "module"
        },
        "index": {
          "description": "semigroupoid satisfies all of the requirements to be Category except for the existence of identity arrows",
          "hierarchy": "Data Semigroupoid Dual",
          "module": "Data.Semigroupoid.Dual",
          "name": "Dual",
          "package": "semigroupoids",
          "partial": "Dual",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Dual.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Dual",
          "name": "Dual",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Dual.html#Dual",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Dual",
          "module": "Data.Semigroupoid.Dual",
          "name": "Dual",
          "package": "semigroupoids",
          "partial": "Dual",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Dual.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Dual",
          "name": "Dual",
          "package": "semigroupoids",
          "signature": "Dual",
          "source": "src/Data-Semigroupoid-Dual.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Dual",
          "module": "Data.Semigroupoid.Dual",
          "name": "Dual",
          "package": "semigroupoids",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Dual.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Dual",
          "name": "getDual",
          "package": "semigroupoids",
          "signature": "k b a",
          "source": "src/Data-Semigroupoid-Dual.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Dual",
          "module": "Data.Semigroupoid.Dual",
          "name": "getDual",
          "package": "semigroupoids",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Dual.html#v:getDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Ob",
          "name": "Ob",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Ob.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Ob",
          "module": "Data.Semigroupoid.Ob",
          "name": "Ob",
          "package": "semigroupoids",
          "partial": "Ob",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Ob.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Ob",
          "name": "Ob",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Ob.html#Ob",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Ob",
          "module": "Data.Semigroupoid.Ob",
          "name": "Ob",
          "package": "semigroupoids",
          "partial": "Ob",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Ob.html#t:Ob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Ob",
          "name": "semiid",
          "package": "semigroupoids",
          "signature": "k a a",
          "source": "src/Data-Semigroupoid-Ob.html#semiid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Ob",
          "module": "Data.Semigroupoid.Ob",
          "name": "semiid",
          "package": "semigroupoids",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Ob.html#v:semiid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Product",
          "name": "Product",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Product.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Product",
          "module": "Data.Semigroupoid.Product",
          "name": "Product",
          "package": "semigroupoids",
          "partial": "Product",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Product",
          "name": "Product",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Product.html#Product",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Product",
          "module": "Data.Semigroupoid.Product",
          "name": "Product",
          "package": "semigroupoids",
          "partial": "Product",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#t:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Product",
          "name": "Pair",
          "package": "semigroupoids",
          "signature": "j a b -\u003e k a' b' -\u003e Product j k (a, a') (b, b')",
          "source": "src/Data-Semigroupoid-Product.html#Product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Product",
          "module": "Data.Semigroupoid.Product",
          "name": "Pair",
          "normalized": "a b c-\u003ed e f-\u003eProduct a d(b,e)(c,f)",
          "package": "semigroupoids",
          "partial": "Pair",
          "signature": "j a b-\u003ek a' b'-\u003eProduct j k(a,a')(b,b')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#v:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Product",
          "name": "distributeDualProduct",
          "package": "semigroupoids",
          "signature": "Dual (Product j k) a b -\u003e Product (Dual j) (Dual k) a b",
          "source": "src/Data-Semigroupoid-Product.html#distributeDualProduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Product",
          "module": "Data.Semigroupoid.Product",
          "name": "distributeDualProduct",
          "normalized": "Dual(Product a b)c d-\u003eProduct(Dual a)(Dual b)c d",
          "package": "semigroupoids",
          "partial": "Dual Product",
          "signature": "Dual(Product j k)a b-\u003eProduct(Dual j)(Dual k)a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#v:distributeDualProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Product",
          "name": "factorDualProduct",
          "package": "semigroupoids",
          "signature": "Product (Dual j) (Dual k) a b -\u003e Dual (Product j k) a b",
          "source": "src/Data-Semigroupoid-Product.html#factorDualProduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Product",
          "module": "Data.Semigroupoid.Product",
          "name": "factorDualProduct",
          "normalized": "Product(Dual a)(Dual b)c d-\u003eDual(Product a b)c d",
          "package": "semigroupoids",
          "partial": "Dual Product",
          "signature": "Product(Dual j)(Dual k)a b-\u003eDual(Product j k)a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Product.html#v:factorDualProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Static",
          "name": "Static",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Static",
          "module": "Data.Semigroupoid.Static",
          "name": "Static",
          "package": "semigroupoids",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Static",
          "name": "Static",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid-Static.html#Static",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Static",
          "module": "Data.Semigroupoid.Static",
          "name": "Static",
          "package": "semigroupoids",
          "partial": "Static",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Static.html#t:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Static",
          "name": "Static",
          "package": "semigroupoids",
          "signature": "Static",
          "source": "src/Data-Semigroupoid-Static.html#Static",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Static",
          "module": "Data.Semigroupoid.Static",
          "name": "Static",
          "package": "semigroupoids",
          "partial": "Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Static.html#v:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid.Static",
          "name": "runStatic",
          "package": "semigroupoids",
          "signature": "f (a -\u003e b)",
          "source": "src/Data-Semigroupoid-Static.html#Static",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid Static",
          "module": "Data.Semigroupoid.Static",
          "name": "runStatic",
          "normalized": "a(b-\u003ec)",
          "package": "semigroupoids",
          "partial": "Static",
          "signature": "f(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid-Static.html#v:runStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroupoid satisfies all of the requirements to be a Category except\n for the existence of identity arrows.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroupoid",
          "name": "Semigroupoid",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid.html",
          "type": "module"
        },
        "index": {
          "description": "semigroupoid satisfies all of the requirements to be Category except for the existence of identity arrows",
          "hierarchy": "Data Semigroupoid",
          "module": "Data.Semigroupoid",
          "name": "Semigroupoid",
          "package": "semigroupoids",
          "partial": "Semigroupoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid",
          "name": "Semi",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid.html#Semi",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroupoid",
          "module": "Data.Semigroupoid",
          "name": "Semi",
          "package": "semigroupoids",
          "partial": "Semi",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#t:Semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e sans \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroupoid",
          "name": "Semigroupoid",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid.html#Semigroupoid",
          "type": "class"
        },
        "index": {
          "description": "Category sans id",
          "hierarchy": "Data Semigroupoid",
          "module": "Data.Semigroupoid",
          "name": "Semigroupoid",
          "package": "semigroupoids",
          "partial": "Semigroupoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#t:Semigroupoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid",
          "name": "WrappedCategory",
          "package": "semigroupoids",
          "source": "src/Data-Semigroupoid.html#WrappedCategory",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroupoid",
          "module": "Data.Semigroupoid",
          "name": "WrappedCategory",
          "package": "semigroupoids",
          "partial": "Wrapped Category",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#t:WrappedCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid",
          "name": "Semi",
          "package": "semigroupoids",
          "signature": "Semi",
          "source": "src/Data-Semigroupoid.html#Semi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid",
          "module": "Data.Semigroupoid",
          "name": "Semi",
          "package": "semigroupoids",
          "partial": "Semi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:Semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid",
          "name": "WrapCategory",
          "package": "semigroupoids",
          "signature": "WrapCategory",
          "source": "src/Data-Semigroupoid.html#WrappedCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid",
          "module": "Data.Semigroupoid",
          "name": "WrapCategory",
          "package": "semigroupoids",
          "partial": "Wrap Category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:WrapCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid",
          "name": "getSemi",
          "package": "semigroupoids",
          "signature": "m",
          "source": "src/Data-Semigroupoid.html#Semi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid",
          "module": "Data.Semigroupoid",
          "name": "getSemi",
          "package": "semigroupoids",
          "partial": "Semi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:getSemi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid",
          "name": "o",
          "package": "semigroupoids",
          "signature": "c j k -\u003e c i j -\u003e c i k",
          "source": "src/Data-Semigroupoid.html#o",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroupoid",
          "module": "Data.Semigroupoid",
          "name": "o",
          "normalized": "a b c-\u003ea d b-\u003ea d c",
          "package": "semigroupoids",
          "signature": "c j k-\u003ec i j-\u003ec i k",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroupoid",
          "name": "unwrapCategory",
          "package": "semigroupoids",
          "signature": "k a b",
          "source": "src/Data-Semigroupoid.html#WrappedCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroupoid",
          "module": "Data.Semigroupoid",
          "name": "unwrapCategory",
          "package": "semigroupoids",
          "partial": "Category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Semigroupoid.html#v:unwrapCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePlaceholders for missing instances of Traversable, until base catches up and adds them\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Traversable.Instances",
          "name": "Instances",
          "package": "semigroupoids",
          "source": "src/Data-Traversable-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Placeholders for missing instances of Traversable until base catches up and adds them",
          "hierarchy": "Data Traversable Instances",
          "module": "Data.Traversable.Instances",
          "name": "Instances",
          "package": "semigroupoids",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroupoids/docs/Data-Traversable-Instances.html#"
      }
    }
  ]
]