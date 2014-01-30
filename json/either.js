[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a minimalist \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Either.html",
        "fct-type": "module",
        "title": "Either"
      },
      "index": {
        "description": "This module provides minimalist Either monad transformer",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "Either",
        "normalized": "",
        "package": "either",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#t:EitherT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e is a version of \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e that does not\n require a spurious \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e instance for the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n case.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e is a perfectly usable \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e without such a constraint. \u003ccode\u003eErrorT\u003c/code\u003e is\n not the generalization of the current \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad, it is something else.\n\u003c/p\u003e\u003cp\u003eThis is necessary for both theoretical and practical reasons. For instance an\n apomorphism is the generalized anamorphism for this Monad, but it cannot be\n written with \u003ccode\u003eErrorT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn addition to the combinators here, the \u003ccode\u003eerrors\u003c/code\u003e package provides a large \n number of combinators for working with this type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Either.html#EitherT",
        "fct-type": "newtype",
        "title": "EitherT"
      },
      "index": {
        "description": "EitherT is version of ErrorT that does not require spurious Error instance for the Left case Either is perfectly usable Monad without such constraint ErrorT is not the generalization of the current Either monad it is something else This is necessary for both theoretical and practical reasons For instance an apomorphism is the generalized anamorphism for this Monad but it cannot be written with ErrorT In addition to the combinators here the errors package provides large number of combinators for working with this type",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "EitherT",
        "normalized": "",
        "package": "either",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#v:EitherT",
      "description": {
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "EitherT",
        "fct-source": "src/Control-Monad-Trans-Either.html#EitherT",
        "fct-type": "function",
        "title": "EitherT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "EitherT",
        "normalized": "",
        "package": "either",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#v:bimapEitherT",
      "description": {
        "fct-descr": "\u003cp\u003eMap over both failure and success.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "(e -\u003e f) -\u003e (a -\u003e b) -\u003e EitherT e m a -\u003e EitherT f m b",
        "fct-source": "src/Control-Monad-Trans-Either.html#bimapEitherT",
        "fct-type": "function",
        "title": "bimapEitherT"
      },
      "index": {
        "description": "Map over both failure and success",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "bimapEitherT",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEitherT a e c-\u003eEitherT b e d",
        "package": "either",
        "partial": "Either",
        "signature": "(e-\u003ef)-\u003e(a-\u003eb)-\u003eEitherT e m a-\u003eEitherT f m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#v:eitherT",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a pair of actions, one to perform in case of failure, and one to perform\n in case of success, run an \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e and get back a monadic result.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "(a -\u003e m c) -\u003e (b -\u003e m c) -\u003e EitherT a m b -\u003e m c",
        "fct-source": "src/Control-Monad-Trans-Either.html#eitherT",
        "fct-type": "function",
        "title": "eitherT"
      },
      "index": {
        "description": "Given pair of actions one to perform in case of failure and one to perform in case of success run an EitherT and get back monadic result",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "eitherT",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb c)-\u003eEitherT a b d-\u003eb c",
        "package": "either",
        "partial": "",
        "signature": "(a-\u003em c)-\u003e(b-\u003em c)-\u003eEitherT a m b-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#v:hoistEither",
      "description": {
        "fct-descr": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "Either e a -\u003e EitherT e m a",
        "fct-source": "src/Control-Monad-Trans-Either.html#hoistEither",
        "fct-type": "function",
        "title": "hoistEither"
      },
      "index": {
        "description": "Lift an Either into an EitherT",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "hoistEither",
        "normalized": "Either a b-\u003eEitherT a c b",
        "package": "either",
        "partial": "Either",
        "signature": "Either e a-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e. Equivalent to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "e -\u003e EitherT e m a",
        "fct-source": "src/Control-Monad-Trans-Either.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "Analogous to Left Equivalent to throwError",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "left",
        "normalized": "a-\u003eEitherT a b c",
        "package": "either",
        "partial": "",
        "signature": "e-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#v:mapEitherT",
      "description": {
        "fct-descr": "\u003cp\u003eMap the unwrapped computation using the given function.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erunEitherT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapEitherT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunEitherT\u003c/a\u003e\u003c/code\u003e m)\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "(m (Either e a) -\u003e n (Either e' b)) -\u003e EitherT e m a -\u003e EitherT e' n b",
        "fct-source": "src/Control-Monad-Trans-Either.html#mapEitherT",
        "fct-type": "function",
        "title": "mapEitherT"
      },
      "index": {
        "description": "Map the unwrapped computation using the given function runEitherT mapEitherT runEitherT",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "mapEitherT",
        "normalized": "(a(Either b c)-\u003ed(Either e f))-\u003eEitherT b a c-\u003eEitherT e d f",
        "package": "either",
        "partial": "Either",
        "signature": "(m(Either e a)-\u003en(Either e' b))-\u003eEitherT e m a-\u003eEitherT e' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. Equivalent to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "a -\u003e EitherT e m a",
        "fct-source": "src/Control-Monad-Trans-Either.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "Analogous to Right Equivalent to return",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "right",
        "normalized": "a-\u003eEitherT b c a",
        "package": "either",
        "partial": "",
        "signature": "a-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Control-Monad-Trans-Either.html#v:runEitherT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Either",
        "fct-package": "either",
        "fct-signature": "m (Either e a)",
        "fct-source": "src/Control-Monad-Trans-Either.html#EitherT",
        "fct-type": "function",
        "title": "runEitherT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Either",
        "module": "Control.Monad.Trans.Either",
        "name": "runEitherT",
        "normalized": "",
        "package": "either",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for probing and unwrapping values inside of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMost of these combinators are provided for pedagogical purposes and exist\n in more general forms in other libraries. To that end alternative definitions\n are supplied below.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "module",
        "fct-source": "src/Data-Either-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Functions for probing and unwrapping values inside of Either Most of these combinators are provided for pedagogical purposes and exist in more general forms in other libraries To that end alternative definitions are supplied below",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "either",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:fromLeft",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the left value or a default.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efromLeft\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromLeft \"hello\" (Right 42)\n\u003c/code\u003e\u003c/strong\u003e\"hello\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromLeft \"hello\" (Left \"world\")\n\u003c/code\u003e\u003c/strong\u003e\"world\"\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "a -\u003e Either a b -\u003e a",
        "fct-source": "src/Data-Either-Combinators.html#fromLeft",
        "fct-type": "function",
        "title": "fromLeft"
      },
      "index": {
        "description": "Extract the left value or default fromLeft either id fromLeft hello Right hello fromLeft hello Left world world",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "fromLeft",
        "normalized": "a-\u003eEither a b-\u003ea",
        "package": "either",
        "partial": "Left",
        "signature": "a-\u003eEither a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:fromLeft-39-",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the element out of a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and\n throws an error if its argument take the form  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e _\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efromLeft'\u003c/a\u003e\u003c/code\u003e x &#8801; x^?!_Left\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromLeft' (Left 12)\n\u003c/code\u003e\u003c/strong\u003e12\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e a",
        "fct-source": "src/Data-Either-Combinators.html#fromLeft%27",
        "fct-type": "function",
        "title": "fromLeft'"
      },
      "index": {
        "description": "Extracts the element out of Left and throws an error if its argument take the form Right Using Control.Lens fromLeft Left fromLeft Left",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "fromLeft'",
        "normalized": "Either a b-\u003ea",
        "package": "either",
        "partial": "Left'",
        "signature": "Either a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:fromRight",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the right value or a default.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efromRight\u003c/a\u003e\u003c/code\u003e b &#8801; \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e b \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromRight \"hello\" (Right \"world\")\n\u003c/code\u003e\u003c/strong\u003e\"world\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromRight \"hello\" (Left 42)\n\u003c/code\u003e\u003c/strong\u003e\"hello\"\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "b -\u003e Either a b -\u003e b",
        "fct-source": "src/Data-Either-Combinators.html#fromRight",
        "fct-type": "function",
        "title": "fromRight"
      },
      "index": {
        "description": "Extract the right value or default fromRight either id fromRight hello Right world world fromRight hello Left hello",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "fromRight",
        "normalized": "a-\u003eEither b a-\u003ea",
        "package": "either",
        "partial": "Right",
        "signature": "b-\u003eEither a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:fromRight-39-",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the element out of a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e and\n throws an error if its argument take the form  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e _\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efromRight'\u003c/a\u003e\u003c/code\u003e x &#8801; x^?!_Right\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromRight' (Right 12)\n\u003c/code\u003e\u003c/strong\u003e12\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e b",
        "fct-source": "src/Data-Either-Combinators.html#fromRight%27",
        "fct-type": "function",
        "title": "fromRight'"
      },
      "index": {
        "description": "Extracts the element out of Right and throws an error if its argument take the form Left Using Control.Lens fromRight Right fromRight Right",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "fromRight'",
        "normalized": "Either a b-\u003eb",
        "package": "either",
        "partial": "Right'",
        "signature": "Either a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:isLeft",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisLeft\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the form \u003ccode\u003eLeft _\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eisLeft\u003c/a\u003e\u003c/code\u003e &#8801; has _Left\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisLeft (Left 12)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisLeft (Right 12)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Data-Either-Combinators.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "The isLeft function returns True iff its argument is of the form Left Using Control.Lens isLeft has Left isLeft Left True isLeft Right False",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "isLeft",
        "normalized": "Either a b-\u003eBool",
        "package": "either",
        "partial": "Left",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:isRight",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisRight\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the form \u003ccode\u003eRight _\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eisRight\u003c/a\u003e\u003c/code\u003e &#8801; has _Right\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisRight (Left 12)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisRight (Right 12)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Data-Either-Combinators.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "The isRight function returns True iff its argument is of the form Right Using Control.Lens isRight has Right isRight Left False isRight Right True",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "isRight",
        "normalized": "Either a b-\u003eBool",
        "package": "either",
        "partial": "Right",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:leftToMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe get the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e side of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eleftToMaybe\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eleftToMaybe\u003c/a\u003e\u003c/code\u003e &#8801; preview _Left\n \u003ccode\u003e\u003ca\u003eleftToMaybe\u003c/a\u003e\u003c/code\u003e x &#8801; x^?_Left\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eleftToMaybe (Left 12)\n\u003c/code\u003e\u003c/strong\u003eJust 12\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eleftToMaybe (Right 12)\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e Maybe a",
        "fct-source": "src/Data-Either-Combinators.html#leftToMaybe",
        "fct-type": "function",
        "title": "leftToMaybe"
      },
      "index": {
        "description": "Maybe get the Left side of an Either leftToMaybe either Just const Nothing Using Control.Lens leftToMaybe preview Left leftToMaybe Left leftToMaybe Left Just leftToMaybe Right Nothing",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "leftToMaybe",
        "normalized": "Either a b-\u003eMaybe a",
        "package": "either",
        "partial": "To Maybe",
        "signature": "Either a b-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:mapBoth",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapBoth\u003c/a\u003e\u003c/code\u003e function takes two functions and applies the first if iff the value\n takes the form \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e _\u003c/code\u003e and the second if the value takes the form \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e _\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eData.Bifunctor\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emapBoth\u003c/a\u003e\u003c/code\u003e = bimap\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Arrow\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emapBoth\u003c/a\u003e\u003c/code\u003e = (\u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapBoth (*2) (*3) (Left 4)\n\u003c/code\u003e\u003c/strong\u003eLeft 8\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapBoth (*2) (*3) (Right 4)\n\u003c/code\u003e\u003c/strong\u003eRight 12\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e Either a b -\u003e Either c d",
        "fct-source": "src/Data-Either-Combinators.html#mapBoth",
        "fct-type": "function",
        "title": "mapBoth"
      },
      "index": {
        "description": "The mapBoth function takes two functions and applies the first if iff the value takes the form Left and the second if the value takes the form Right Using Data.Bifunctor mapBoth bimap Using Control.Arrow mapBoth mapBoth Left Left mapBoth Right Right",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "mapBoth",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
        "package": "either",
        "partial": "Both",
        "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eEither a b-\u003eEither c d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:mapLeft",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapLeft\u003c/a\u003e\u003c/code\u003e function takes a function and applies it to an Either value\n iff the value takes the form 'Left _'.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eData.Bifunctor\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emapLeft\u003c/a\u003e\u003c/code\u003e = first\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Arrow\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emapLeft\u003c/a\u003e\u003c/code\u003e = (\u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emapLeft\u003c/a\u003e\u003c/code\u003e = over _Left\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapLeft (*2) (Left 4)\n\u003c/code\u003e\u003c/strong\u003eLeft 8\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapLeft (*2) (Right \"hello\")\n\u003c/code\u003e\u003c/strong\u003eRight \"hello\"\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "(a -\u003e c) -\u003e Either a b -\u003e Either c b",
        "fct-source": "src/Data-Either-Combinators.html#mapLeft",
        "fct-type": "function",
        "title": "mapLeft"
      },
      "index": {
        "description": "The mapLeft function takes function and applies it to an Either value iff the value takes the form Left Using Data.Bifunctor mapLeft first Using Control.Arrow mapLeft left Using Control.Lens mapLeft over Left mapLeft Left Left mapLeft Right hello Right hello",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "mapLeft",
        "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
        "package": "either",
        "partial": "Left",
        "signature": "(a-\u003ec)-\u003eEither a b-\u003eEither c b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:mapRight",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapLeft\u003c/a\u003e\u003c/code\u003e function takes a function and applies it to an Either value\n iff the value takes the form 'Left _'.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eData.Bifunctor\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emapRight\u003c/a\u003e\u003c/code\u003e = first\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Arrow\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emapRight\u003c/a\u003e\u003c/code\u003e = (\u003ccode\u003e\u003ca\u003eright\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emapRight\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003eover\u003c/code\u003e \u003ccode\u003e_Right\u003c/code\u003e\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapRight (*2) (Left \"hello\")\n\u003c/code\u003e\u003c/strong\u003eLeft \"hello\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapRight (*2) (Right 4)\n\u003c/code\u003e\u003c/strong\u003eRight 8\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "(b -\u003e c) -\u003e Either a b -\u003e Either a c",
        "fct-source": "src/Data-Either-Combinators.html#mapRight",
        "fct-type": "function",
        "title": "mapRight"
      },
      "index": {
        "description": "The mapLeft function takes function and applies it to an Either value iff the value takes the form Left Using Data.Bifunctor mapRight first Using Control.Arrow mapRight right Using Control.Lens mapRight over Right mapRight Left hello Left hello mapRight Right Right",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "mapRight",
        "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
        "package": "either",
        "partial": "Right",
        "signature": "(b-\u003ec)-\u003eEither a b-\u003eEither a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:rightToMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe get the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e side of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erightToMaybe\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erightToMaybe\u003c/a\u003e\u003c/code\u003e &#8801; preview _Right\n \u003ccode\u003e\u003ca\u003erightToMaybe\u003c/a\u003e\u003c/code\u003e x &#8801; x^?_Right\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erightToMaybe (Left 12)\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erightToMaybe (Right 12)\n\u003c/code\u003e\u003c/strong\u003eJust 12\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e Maybe b",
        "fct-source": "src/Data-Either-Combinators.html#rightToMaybe",
        "fct-type": "function",
        "title": "rightToMaybe"
      },
      "index": {
        "description": "Maybe get the Right side of an Either rightToMaybe either const Nothing Just Using Control.Lens rightToMaybe preview Right rightToMaybe Right rightToMaybe Left Nothing rightToMaybe Right Just",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "rightToMaybe",
        "normalized": "Either a b-\u003eMaybe b",
        "package": "either",
        "partial": "To Maybe",
        "signature": "Either a b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:unlessLeft",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym of \u003ccode\u003e\u003ca\u003ewhenRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e (b -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Either-Combinators.html#unlessLeft",
        "fct-type": "function",
        "title": "unlessLeft"
      },
      "index": {
        "description": "synonym of whenRight",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "unlessLeft",
        "normalized": "Either a b-\u003e(b-\u003ec())-\u003ec()",
        "package": "either",
        "partial": "Left",
        "signature": "Either a b-\u003e(b-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:unlessRight",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym of \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Either-Combinators.html#unlessRight",
        "fct-type": "function",
        "title": "unlessRight"
      },
      "index": {
        "description": "synonym of whenLeft",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "unlessRight",
        "normalized": "Either a b-\u003e(a-\u003ec())-\u003ec()",
        "package": "either",
        "partial": "Right",
        "signature": "Either a b-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:whenLeft",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value and a function which returns a monad.\n The monad is only executed when the given argument takes the form \u003ccode\u003eLeft _\u003c/code\u003e, otherwise\n it does nothing.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e &#8801; forOf_ _Left\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewhenLeft (Left 12) print\n\u003c/code\u003e\u003c/strong\u003e12\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Either-Combinators.html#whenLeft",
        "fct-type": "function",
        "title": "whenLeft"
      },
      "index": {
        "description": "The whenLeft function takes an Either value and function which returns monad The monad is only executed when the given argument takes the form Left otherwise it does nothing Using Control.Lens whenLeft forOf Left whenLeft Left print",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "whenLeft",
        "normalized": "Either a b-\u003e(a-\u003ec())-\u003ec()",
        "package": "either",
        "partial": "Left",
        "signature": "Either a b-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either/docs/Data-Either-Combinators.html#v:whenRight",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value and a function which returns a monad.\n The monad is only executed when the given argument takes the form \u003ccode\u003eRight _\u003c/code\u003e, otherwise\n it does nothing.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eData.Foldable\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ewhenRight\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003eforM_\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003eControl.Lens\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ewhenRight\u003c/a\u003e\u003c/code\u003e &#8801; forOf_ _Right\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewhenRight (Right 12) print\n\u003c/code\u003e\u003c/strong\u003e12\n\u003c/pre\u003e",
        "fct-module": "Data.Either.Combinators",
        "fct-package": "either",
        "fct-signature": "Either a b -\u003e (b -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Either-Combinators.html#whenRight",
        "fct-type": "function",
        "title": "whenRight"
      },
      "index": {
        "description": "The whenLeft function takes an Either value and function which returns monad The monad is only executed when the given argument takes the form Right otherwise it does nothing Using Data.Foldable whenRight forM Using Control.Lens whenRight forOf Right whenRight Right print",
        "hierarchy": "Data Either Combinators",
        "module": "Data.Either.Combinators",
        "name": "whenRight",
        "normalized": "Either a b-\u003e(b-\u003ec())-\u003ec()",
        "package": "either",
        "partial": "Right",
        "signature": "Either a b-\u003e(b-\u003em())-\u003em()"
      }
    }
  }
]