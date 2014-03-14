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
        "word": "unification-fd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA continuation-passing variant of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e for short-circuiting\n at failure. This code is based on \u003ca\u003eControl.Monad.MaybeK\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.EitherK",
          "name": "EitherK",
          "package": "unification-fd",
          "source": "src/Control-Monad-EitherK.html",
          "type": "module"
        },
        "index": {
          "description": "continuation-passing variant of Either for short-circuiting at failure This code is based on Control.Monad.MaybeK",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "EitherK",
          "package": "unification-fd",
          "partial": "Either",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA continuation-passing encoding of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e as an error monad;\n also known as \u003ccode\u003eCodensity (Either e)\u003c/code\u003e, if you're familiar with\n that terminology. N.B., this is not the 2-continuation implementation\n based on the Church encoding of \u003ccode\u003eEither\u003c/code\u003e. The latter tends to\n have worse performance than non-continuation based implementations.\n\u003c/p\u003e\u003cp\u003eThis is generally more efficient than using \u003ccode\u003eEither\u003c/code\u003e (or the\n MTL's \u003ccode\u003eError\u003c/code\u003e) for two reasons. First is that it right associates\n all binds, ensuring that bad associativity doesn't artificially\n introduce midpoints in short-circuiting to the nearest handler.\n Second is that it removes the need for intermediate case\n expressions.\n\u003c/p\u003e\u003cp\u003eAnother benefit over MTL's \u003ccode\u003eError\u003c/code\u003e is that it doesn't artificially\n restrict the error type. In fact, there's no reason why \u003ccode\u003ee\u003c/code\u003e must\n denote \"errors\" per se. This could also denote computations\n which short-circuit with the final answer, or similar methods\n of non-local control flow.\n\u003c/p\u003e\u003cp\u003eN.B., the \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instances are left-biased\n in \u003ccode\u003ea\u003c/code\u003e and monoidal in \u003ccode\u003ee\u003c/code\u003e. Thus, they are not commutative.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "EitherK",
          "package": "unification-fd",
          "source": "src/Control-Monad-EitherK.html#EitherK",
          "type": "data"
        },
        "index": {
          "description": "continuation-passing encoding of Either as an error monad also known as Codensity Either if you re familiar with that terminology N.B this is not the continuation implementation based on the Church encoding of Either The latter tends to have worse performance than non-continuation based implementations This is generally more efficient than using Either or the MTL Error for two reasons First is that it right associates all binds ensuring that bad associativity doesn artificially introduce midpoints in short-circuiting to the nearest handler Second is that it removes the need for intermediate case expressions Another benefit over MTL Error is that it doesn artificially restrict the error type In fact there no reason why must denote errors per se This could also denote computations which short-circuit with the final answer or similar methods of non-local control flow N.B the Alternative and MonadPlus instances are left-biased in and monoidal in Thus they are not commutative",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "EitherK",
          "package": "unification-fd",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#t:EitherK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer version of \u003ccode\u003e\u003ca\u003eEitherK\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "EitherKT",
          "package": "unification-fd",
          "source": "src/Control-Monad-EitherK.html#EitherKT",
          "type": "data"
        },
        "index": {
          "description": "monad transformer version of EitherK",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "EitherKT",
          "package": "unification-fd",
          "partial": "Either KT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#t:EitherKT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle errors in the \u003ccode\u003eEitherK\u003c/code\u003e monad. N.B., this type is more\n general than that of \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e, allowing the type of the\n errors to change.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "catchEitherK",
          "package": "unification-fd",
          "signature": "EitherK e a -\u003e (e -\u003e EitherK f a) -\u003e EitherK f a",
          "source": "src/Control-Monad-EitherK.html#catchEitherK",
          "type": "function"
        },
        "index": {
          "description": "Handle errors in the EitherK monad N.B this type is more general than that of catchError allowing the type of the errors to change",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "catchEitherK",
          "normalized": "EitherK a b-\u003e(a-\u003eEitherK c b)-\u003eEitherK c b",
          "package": "unification-fd",
          "partial": "Either",
          "signature": "EitherK e a-\u003e(e-\u003eEitherK f a)-\u003eEitherK f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:catchEitherK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle errors in the \u003ccode\u003eEitherKT\u003c/code\u003e monad. N.B., this type is more\n general than that of \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e, allowing the type of the\n errors to change.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "catchEitherKT",
          "package": "unification-fd",
          "signature": "EitherKT e m a -\u003e (e -\u003e EitherKT f m a) -\u003e EitherKT f m a",
          "source": "src/Control-Monad-EitherK.html#catchEitherKT",
          "type": "function"
        },
        "index": {
          "description": "Handle errors in the EitherKT monad N.B this type is more general than that of catchError allowing the type of the errors to change",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "catchEitherKT",
          "normalized": "EitherKT a b c-\u003e(a-\u003eEitherKT d b c)-\u003eEitherKT d b c",
          "package": "unification-fd",
          "partial": "Either KT",
          "signature": "EitherKT e m a-\u003e(e-\u003eEitherKT f m a)-\u003eEitherKT f m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:catchEitherKT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003eEitherK\u003c/code\u003e, for convenience. N.B.,\n using this function inserts a case match, reducing the range of\n short-circuiting.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "eitherK",
          "package": "unification-fd",
          "signature": "(e -\u003e b) -\u003e (a -\u003e b) -\u003e EitherK e a -\u003e b",
          "source": "src/Control-Monad-EitherK.html#eitherK",
          "type": "function"
        },
        "index": {
          "description": "version of either on EitherK for convenience N.B using this function inserts case match reducing the range of short-circuiting",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "eitherK",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEitherK a c-\u003eb",
          "package": "unification-fd",
          "signature": "(e-\u003eb)-\u003e(a-\u003eb)-\u003eEitherK e a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:eitherK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an \u003ccode\u003eEitherK\u003c/code\u003e into an \u003ccode\u003eEitherKT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "liftEitherK",
          "package": "unification-fd",
          "signature": "EitherK e a -\u003e EitherKT e m a",
          "source": "src/Control-Monad-EitherK.html#liftEitherK",
          "type": "function"
        },
        "index": {
          "description": "Lift an EitherK into an EitherKT",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "liftEitherK",
          "normalized": "EitherK a b-\u003eEitherKT a c b",
          "package": "unification-fd",
          "partial": "Either",
          "signature": "EitherK e a-\u003eEitherKT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:liftEitherK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower an \u003ccode\u003eEitherKT\u003c/code\u003e into an \u003ccode\u003eEitherK\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "lowerEitherK",
          "package": "unification-fd",
          "signature": "EitherKT e m a -\u003e m (EitherK e a)",
          "source": "src/Control-Monad-EitherK.html#lowerEitherK",
          "type": "function"
        },
        "index": {
          "description": "Lower an EitherKT into an EitherK",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "lowerEitherK",
          "normalized": "EitherKT a b c-\u003eb(EitherK a c)",
          "package": "unification-fd",
          "partial": "Either",
          "signature": "EitherKT e m a-\u003em(EitherK e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:lowerEitherK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003eEitherK\u003c/code\u003e and return the concrete \u003ccode\u003eEither\u003c/code\u003e encoding.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "runEitherK",
          "package": "unification-fd",
          "signature": "EitherK e a -\u003e Either e a",
          "source": "src/Control-Monad-EitherK.html#runEitherK",
          "type": "function"
        },
        "index": {
          "description": "Execute an EitherK and return the concrete Either encoding",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "runEitherK",
          "normalized": "EitherK a b-\u003eEither a b",
          "package": "unification-fd",
          "partial": "Either",
          "signature": "EitherK e a-\u003eEither e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:runEitherK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003eEitherKT\u003c/code\u003e and return the concrete \u003ccode\u003eEither\u003c/code\u003e encoding.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "runEitherKT",
          "package": "unification-fd",
          "signature": "EitherKT e m a -\u003e m (Either e a)",
          "source": "src/Control-Monad-EitherK.html#runEitherKT",
          "type": "function"
        },
        "index": {
          "description": "Execute an EitherKT and return the concrete Either encoding",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "runEitherKT",
          "normalized": "EitherKT a b c-\u003eb(Either a c)",
          "package": "unification-fd",
          "partial": "Either KT",
          "signature": "EitherKT e m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:runEitherKT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an error in the \u003ccode\u003eEitherK\u003c/code\u003e monad. This is identical to\n \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "throwEitherK",
          "package": "unification-fd",
          "signature": "e -\u003e EitherK e a",
          "source": "src/Control-Monad-EitherK.html#throwEitherK",
          "type": "function"
        },
        "index": {
          "description": "Throw an error in the EitherK monad This is identical to throwError",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "throwEitherK",
          "normalized": "a-\u003eEitherK a b",
          "package": "unification-fd",
          "partial": "Either",
          "signature": "e-\u003eEitherK e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:throwEitherK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an error in the \u003ccode\u003eEitherKT\u003c/code\u003e monad. This is identical to\n \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "throwEitherKT",
          "package": "unification-fd",
          "signature": "e -\u003e EitherKT e m a",
          "source": "src/Control-Monad-EitherK.html#throwEitherKT",
          "type": "function"
        },
        "index": {
          "description": "Throw an error in the EitherKT monad This is identical to throwError",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "throwEitherKT",
          "normalized": "a-\u003eEitherKT a b c",
          "package": "unification-fd",
          "partial": "Either KT",
          "signature": "e-\u003eEitherKT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:throwEitherKT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an \u003ccode\u003eEither\u003c/code\u003e into an \u003ccode\u003eEitherK\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "toEitherK",
          "package": "unification-fd",
          "signature": "Either e a -\u003e EitherK e a",
          "source": "src/Control-Monad-EitherK.html#toEitherK",
          "type": "function"
        },
        "index": {
          "description": "Lift an Either into an EitherK",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "toEitherK",
          "normalized": "Either a b-\u003eEitherK a b",
          "package": "unification-fd",
          "partial": "Either",
          "signature": "Either e a-\u003eEitherK e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:toEitherK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an \u003ccode\u003eEither\u003c/code\u003e into an \u003ccode\u003eEitherKT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.EitherK",
          "name": "toEitherKT",
          "package": "unification-fd",
          "signature": "Either e a -\u003e EitherKT e m a",
          "source": "src/Control-Monad-EitherK.html#toEitherKT",
          "type": "function"
        },
        "index": {
          "description": "Lift an Either into an EitherKT",
          "hierarchy": "Control Monad EitherK",
          "module": "Control.Monad.EitherK",
          "name": "toEitherKT",
          "normalized": "Either a b-\u003eEitherKT a c b",
          "package": "unification-fd",
          "partial": "Either KT",
          "signature": "Either e a-\u003eEitherKT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-EitherK.html#v:toEitherKT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA continuation-passing variant of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e for short-circuiting\n at failure. This is based largely on code from the Haskell Wiki\n (\u003ca\u003ehttp://www.haskell.org/haskellwiki/Performance/Monads\u003c/a\u003e) which\n was released under a simple permissive license\n (\u003ca\u003ehttp://www.haskell.org/haskellwiki/HaskellWiki:Copyrights\u003c/a\u003e).\n However, various changes and extensions have been made, which\n are subject to the BSD license of this package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "MaybeK",
          "package": "unification-fd",
          "source": "src/Control-Monad-MaybeK.html",
          "type": "module"
        },
        "index": {
          "description": "continuation-passing variant of Maybe for short-circuiting at failure This is based largely on code from the Haskell Wiki http www.haskell.org haskellwiki Performance Monads which was released under simple permissive license http www.haskell.org haskellwiki HaskellWiki Copyrights However various changes and extensions have been made which are subject to the BSD license of this package",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "MaybeK",
          "package": "unification-fd",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA continuation-passing encoding of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e; also known as\n \u003ccode\u003eCodensity Maybe\u003c/code\u003e, if you're familiar with that terminology.\n N.B., this is not the 2-continuation implementation based on the\n Church encoding of \u003ccode\u003eMaybe\u003c/code\u003e. The latter tends to have worse\n performance than non-continuation based implementations.\n\u003c/p\u003e\u003cp\u003eThis is generally more efficient than using \u003ccode\u003eMaybe\u003c/code\u003e for two\n reasons. First is that it right associates all binds, ensuring\n that bad associativity doesn't artificially introduce midpoints\n in short-circuiting to the nearest handler. Second is that it\n removes the need for intermediate case expressions.\n\u003c/p\u003e\u003cp\u003eN.B., the \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instances are left-biased\n in \u003ccode\u003ea\u003c/code\u003e. Thus, they are not commutative.\n\u003c/p\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "MaybeK",
          "package": "unification-fd",
          "source": "src/Control-Monad-MaybeK.html#MaybeK",
          "type": "data"
        },
        "index": {
          "description": "continuation-passing encoding of Maybe also known as Codensity Maybe if you re familiar with that terminology N.B this is not the continuation implementation based on the Church encoding of Maybe The latter tends to have worse performance than non-continuation based implementations This is generally more efficient than using Maybe for two reasons First is that it right associates all binds ensuring that bad associativity doesn artificially introduce midpoints in short-circuiting to the nearest handler Second is that it removes the need for intermediate case expressions N.B the Alternative and MonadPlus instances are left-biased in Thus they are not commutative",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "MaybeK",
          "package": "unification-fd",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#t:MaybeK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer version of \u003ccode\u003e\u003ca\u003eMaybeK\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "MaybeKT",
          "package": "unification-fd",
          "source": "src/Control-Monad-MaybeK.html#MaybeKT",
          "type": "data"
        },
        "index": {
          "description": "monad transformer version of MaybeK",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "MaybeKT",
          "package": "unification-fd",
          "partial": "Maybe KT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#t:MaybeKT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an \u003ccode\u003eMaybeK\u003c/code\u003e into an \u003ccode\u003eMaybeKT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "liftMaybeK",
          "package": "unification-fd",
          "signature": "MaybeK a -\u003e MaybeKT m a",
          "source": "src/Control-Monad-MaybeK.html#liftMaybeK",
          "type": "function"
        },
        "index": {
          "description": "Lift an MaybeK into an MaybeKT",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "liftMaybeK",
          "normalized": "MaybeK a-\u003eMaybeKT b a",
          "package": "unification-fd",
          "partial": "Maybe",
          "signature": "MaybeK a-\u003eMaybeKT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#v:liftMaybeK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower an \u003ccode\u003eMaybeKT\u003c/code\u003e into an \u003ccode\u003eMaybeK\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "lowerMaybeK",
          "package": "unification-fd",
          "signature": "MaybeKT m a -\u003e m (MaybeK a)",
          "source": "src/Control-Monad-MaybeK.html#lowerMaybeK",
          "type": "function"
        },
        "index": {
          "description": "Lower an MaybeKT into an MaybeK",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "lowerMaybeK",
          "normalized": "MaybeKT a b-\u003ea(MaybeK b)",
          "package": "unification-fd",
          "partial": "Maybe",
          "signature": "MaybeKT m a-\u003em(MaybeK a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#v:lowerMaybeK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e for convenience. This is almost identical\n to \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e but allows applying a continuation to \u003ccode\u003eJust\u003c/code\u003e values\n as well as handling \u003ccode\u003eNothing\u003c/code\u003e errors. If you only want to handle\n the errors, use \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "maybeK",
          "package": "unification-fd",
          "signature": "b -\u003e (a -\u003e b) -\u003e MaybeK a -\u003e b",
          "source": "src/Control-Monad-MaybeK.html#maybeK",
          "type": "function"
        },
        "index": {
          "description": "version of maybe for convenience This is almost identical to mplus but allows applying continuation to Just values as well as handling Nothing errors If you only want to handle the errors use mplus instead",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "maybeK",
          "normalized": "a-\u003e(b-\u003ea)-\u003eMaybeK b-\u003ea",
          "package": "unification-fd",
          "signature": "b-\u003e(a-\u003eb)-\u003eMaybeK a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#v:maybeK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the \u003ccode\u003eMaybeK\u003c/code\u003e and return the concrete \u003ccode\u003eMaybe\u003c/code\u003e encoding.\n\u003c/p\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "runMaybeK",
          "package": "unification-fd",
          "signature": "MaybeK a -\u003e Maybe a",
          "source": "src/Control-Monad-MaybeK.html#runMaybeK",
          "type": "function"
        },
        "index": {
          "description": "Execute the MaybeK and return the concrete Maybe encoding",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "runMaybeK",
          "normalized": "MaybeK a-\u003eMaybe a",
          "package": "unification-fd",
          "partial": "Maybe",
          "signature": "MaybeK a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#v:runMaybeK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a \u003ccode\u003eMaybeKT\u003c/code\u003e and return the concrete \u003ccode\u003eMaybe\u003c/code\u003e encoding.\n\u003c/p\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "runMaybeKT",
          "package": "unification-fd",
          "signature": "MaybeKT m a -\u003e m (Maybe a)",
          "source": "src/Control-Monad-MaybeK.html#runMaybeKT",
          "type": "function"
        },
        "index": {
          "description": "Execute MaybeKT and return the concrete Maybe encoding",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "runMaybeKT",
          "normalized": "MaybeKT a b-\u003ea(Maybe b)",
          "package": "unification-fd",
          "partial": "Maybe KT",
          "signature": "MaybeKT m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#v:runMaybeKT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003eMaybe\u003c/code\u003e into \u003ccode\u003eMaybeK\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "toMaybeK",
          "package": "unification-fd",
          "signature": "Maybe a -\u003e MaybeK a",
          "source": "src/Control-Monad-MaybeK.html#toMaybeK",
          "type": "function"
        },
        "index": {
          "description": "Lift Maybe into MaybeK",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "toMaybeK",
          "normalized": "Maybe a-\u003eMaybeK a",
          "package": "unification-fd",
          "partial": "Maybe",
          "signature": "Maybe a-\u003eMaybeK a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#v:toMaybeK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003eMaybe\u003c/code\u003e into an \u003ccode\u003eMaybeKT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MaybeK",
          "name": "toMaybeKT",
          "package": "unification-fd",
          "signature": "Maybe a -\u003e MaybeKT m a",
          "source": "src/Control-Monad-MaybeK.html#toMaybeKT",
          "type": "function"
        },
        "index": {
          "description": "Lift Maybe into an MaybeKT",
          "hierarchy": "Control Monad MaybeK",
          "module": "Control.Monad.MaybeK",
          "name": "toMaybeKT",
          "normalized": "Maybe a-\u003eMaybeKT b a",
          "package": "unification-fd",
          "partial": "Maybe KT",
          "signature": "Maybe a-\u003eMaybeKT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-MaybeK.html#v:toMaybeKT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some extra functions for \u003ca\u003eControl.Monad.State.Lazy\u003c/a\u003e.\n This package really isn't the proper place for these, but we\n need them to be somewhere.\n\u003c/p\u003e\u003cp\u003eTODO: patch transformers/mtl-2 with these functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "UnificationExtras",
          "package": "unification-fd",
          "source": "src/Control-Monad-State-UnificationExtras.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines some extra functions for Control.Monad.State.Lazy This package really isn the proper place for these but we need them to be somewhere TODO patch transformers mtl-2 with these functions",
          "hierarchy": "Control Monad State UnificationExtras",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "UnificationExtras",
          "package": "unification-fd",
          "partial": "Unification Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-State-UnificationExtras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a reader into a state monad. More particularly, this\n allows disabling mutability in a local context within \u003ccode\u003eState\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "liftReader",
          "package": "unification-fd",
          "signature": "Reader e a -\u003e State e a",
          "source": "src/Control-Monad-State-UnificationExtras.html#liftReader",
          "type": "function"
        },
        "index": {
          "description": "Lift reader into state monad More particularly this allows disabling mutability in local context within State",
          "hierarchy": "Control Monad State UnificationExtras",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "liftReader",
          "normalized": "Reader a b-\u003eState a b",
          "package": "unification-fd",
          "partial": "Reader",
          "signature": "Reader e a-\u003eState e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-State-UnificationExtras.html#v:liftReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a reader into a state monad. More particularly, this\n allows disabling mutability in a local context within \u003ccode\u003eStateT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "liftReaderT",
          "package": "unification-fd",
          "signature": "ReaderT e m a -\u003e StateT e m a",
          "source": "src/Control-Monad-State-UnificationExtras.html#liftReaderT",
          "type": "function"
        },
        "index": {
          "description": "Lift reader into state monad More particularly this allows disabling mutability in local context within StateT",
          "hierarchy": "Control Monad State UnificationExtras",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "liftReaderT",
          "normalized": "ReaderT a b c-\u003eStateT a b c",
          "package": "unification-fd",
          "partial": "Reader",
          "signature": "ReaderT e m a-\u003eStateT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-State-UnificationExtras.html#v:liftReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a state action and undo the state changes at the end.\n\u003c/p\u003e",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "localState",
          "package": "unification-fd",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-State-UnificationExtras.html#localState",
          "type": "function"
        },
        "index": {
          "description": "Run state action and undo the state changes at the end",
          "hierarchy": "Control Monad State UnificationExtras",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "localState",
          "normalized": "a b-\u003ea b",
          "package": "unification-fd",
          "partial": "State",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-State-UnificationExtras.html#v:localState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict version of \u003ccode\u003emodify\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "modify'",
          "package": "unification-fd",
          "signature": "(s -\u003e s) -\u003e m ()",
          "source": "src/Control-Monad-State-UnificationExtras.html#modify%27",
          "type": "function"
        },
        "index": {
          "description": "strict version of modify",
          "hierarchy": "Control Monad State UnificationExtras",
          "module": "Control.Monad.State.UnificationExtras",
          "name": "modify'",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "unification-fd",
          "signature": "(s-\u003es)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Monad-State-UnificationExtras.html#v:modify-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a state monad for functional pointers\n represented by integers as keys into an \u003ccode\u003eIntMap\u003c/code\u003e. This technique\n was independently discovered by Dijkstra et al. This module\n extends the approach by using a state monad transformer, which\n can be made into a backtracking state monad by setting the\n underlying monad to some \u003ccode\u003e\u003ca\u003eMonadLogic\u003c/a\u003e\u003c/code\u003e (part of the \u003ccode\u003elogict\u003c/code\u003e\n library, described by Kiselyov et al.).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Atze Dijkstra, Arie Middelkoop, S. Doaitse Swierstra (2008)\n         \u003cem\u003eEfficient Functional Unification and Substitution\u003c/em\u003e,\n         Technical Report UU-CS-2008-027, Utrecht University.\n\u003c/li\u003e\u003cli\u003e Oleg Kiselyov, Chung-chieh Shan, Daniel P. Friedman, and\n         Amr Sabry (2005) \u003cem\u003eBacktracking, Interleaving, and\u003c/em\u003e\n         \u003cem\u003eTerminating Monad Transformers\u003c/em\u003e, ICFP.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Control.Unification.IntVar",
          "name": "IntVar",
          "package": "unification-fd",
          "source": "src/Control-Unification-IntVar.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines state monad for functional pointers represented by integers as keys into an IntMap This technique was independently discovered by Dijkstra et al This module extends the approach by using state monad transformer which can be made into backtracking state monad by setting the underlying monad to some MonadLogic part of the logict library described by Kiselyov et al Atze Dijkstra Arie Middelkoop Doaitse Swierstra Efficient Functional Unification and Substitution Technical Report UU-CS-2008-027 Utrecht University Oleg Kiselyov Chung-chieh Shan Daniel Friedman and Amr Sabry Backtracking Interleaving and Terminating Monad Transformers ICFP",
          "hierarchy": "Control Unification IntVar",
          "module": "Control.Unification.IntVar",
          "name": "IntVar",
          "package": "unification-fd",
          "partial": "Int Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-IntVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinding state for \u003ccode\u003e\u003ca\u003eIntVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification.IntVar",
          "name": "IntBindingState",
          "package": "unification-fd",
          "source": "src/Control-Unification-IntVar.html#IntBindingState",
          "type": "data"
        },
        "index": {
          "description": "Binding state for IntVar",
          "hierarchy": "Control Unification IntVar",
          "module": "Control.Unification.IntVar",
          "name": "IntBindingState",
          "package": "unification-fd",
          "partial": "Int Binding State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-IntVar.html#t:IntBindingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for storing \u003ccode\u003e\u003ca\u003eIntVar\u003c/a\u003e\u003c/code\u003e bindings, implemented as a \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e.\n For a plain state monad, set \u003ccode\u003em = Identity\u003c/code\u003e; for a backtracking\n state monad, set \u003ccode\u003em = Logic\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification.IntVar",
          "name": "IntBindingT",
          "package": "unification-fd",
          "source": "src/Control-Unification-IntVar.html#IntBindingT",
          "type": "data"
        },
        "index": {
          "description": "monad for storing IntVar bindings implemented as StateT For plain state monad set Identity for backtracking state monad set Logic",
          "hierarchy": "Control Unification IntVar",
          "module": "Control.Unification.IntVar",
          "name": "IntBindingT",
          "package": "unification-fd",
          "partial": "Int Binding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-IntVar.html#t:IntBindingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"mutable\" unification variable implemented by an integer.\n This provides an entirely pure alternative to truly mutable\n alternatives (like \u003ccode\u003eSTVar\u003c/code\u003e), which can make backtracking easier.\n\u003c/p\u003e\u003cp\u003eN.B., because this implementation is pure, we can use it for\n both ranked and unranked monads.\n\u003c/p\u003e",
          "module": "Control.Unification.IntVar",
          "name": "IntVar",
          "package": "unification-fd",
          "source": "src/Control-Unification-IntVar.html#IntVar",
          "type": "newtype"
        },
        "index": {
          "description": "mutable unification variable implemented by an integer This provides an entirely pure alternative to truly mutable alternatives like STVar which can make backtracking easier N.B because this implementation is pure we can use it for both ranked and unranked monads",
          "hierarchy": "Control Unification IntVar",
          "module": "Control.Unification.IntVar",
          "name": "IntVar",
          "package": "unification-fd",
          "partial": "Int Var",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-IntVar.html#t:IntVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Unification.IntVar\",\"Control.Unification.Ranked.IntVar\"]",
          "name": "IntVar",
          "package": "unification-fd",
          "signature": "IntVar Int",
          "source": "src/Control-Unification-IntVar.html#IntVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-IntVar.html#v:IntVar\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-IntVar.html#v:IntVar\"]"
        },
        "index": {
          "hierarchy": "Control Unification IntVar",
          "module": "Control.Unification.IntVar",
          "name": "IntVar",
          "package": "unification-fd",
          "partial": "Int Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-IntVar.html#v:IntVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eN.B., you should explicitly apply bindings before calling this\n function, or else the bindings will be lost\n\u003c/p\u003e",
          "module": "Control.Unification.IntVar",
          "name": "evalIntBindingT",
          "package": "unification-fd",
          "signature": "IntBindingT t m a -\u003e m a",
          "source": "src/Control-Unification-IntVar.html#evalIntBindingT",
          "type": "function"
        },
        "index": {
          "description": "N.B you should explicitly apply bindings before calling this function or else the bindings will be lost",
          "hierarchy": "Control Unification IntVar",
          "module": "Control.Unification.IntVar",
          "name": "evalIntBindingT",
          "normalized": "IntBindingT a b c-\u003eb c",
          "package": "unification-fd",
          "partial": "Int Binding",
          "signature": "IntBindingT t m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-IntVar.html#v:evalIntBindingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unification.IntVar",
          "name": "execIntBindingT",
          "package": "unification-fd",
          "signature": "IntBindingT t m a -\u003e m (IntBindingState t)",
          "source": "src/Control-Unification-IntVar.html#execIntBindingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unification IntVar",
          "module": "Control.Unification.IntVar",
          "name": "execIntBindingT",
          "normalized": "IntBindingT a b c-\u003eb(IntBindingState a)",
          "package": "unification-fd",
          "partial": "Int Binding",
          "signature": "IntBindingT t m a-\u003em(IntBindingState t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-IntVar.html#v:execIntBindingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unification.IntVar",
          "name": "runIntBindingT",
          "package": "unification-fd",
          "signature": "IntBindingT t m a -\u003e m (a, IntBindingState t)",
          "source": "src/Control-Unification-IntVar.html#runIntBindingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unification IntVar",
          "module": "Control.Unification.IntVar",
          "name": "runIntBindingT",
          "normalized": "IntBindingT a b c-\u003eb(c,IntBindingState a)",
          "package": "unification-fd",
          "partial": "Int Binding",
          "signature": "IntBindingT t m a-\u003em(a,IntBindingState t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-IntVar.html#v:runIntBindingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA ranked variant of \u003ca\u003eControl.Unification.IntVar\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "IntVar",
          "package": "unification-fd",
          "source": "src/Control-Unification-Ranked-IntVar.html",
          "type": "module"
        },
        "index": {
          "description": "ranked variant of Control.Unification.IntVar",
          "hierarchy": "Control Unification Ranked IntVar",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "IntVar",
          "package": "unification-fd",
          "partial": "Int Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-IntVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRanked binding state for \u003ccode\u003e\u003ca\u003eIntVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "IntRBindingState",
          "package": "unification-fd",
          "source": "src/Control-Unification-Ranked-IntVar.html#IntRBindingState",
          "type": "data"
        },
        "index": {
          "description": "Ranked binding state for IntVar",
          "hierarchy": "Control Unification Ranked IntVar",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "IntRBindingState",
          "package": "unification-fd",
          "partial": "Int RBinding State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-IntVar.html#t:IntRBindingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for storing \u003ccode\u003e\u003ca\u003eIntVar\u003c/a\u003e\u003c/code\u003e bindings, implemented as a \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e.\n For a plain state monad, set \u003ccode\u003em = Identity\u003c/code\u003e; for a backtracking\n state monad, set \u003ccode\u003em = Logic\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "IntRBindingT",
          "package": "unification-fd",
          "source": "src/Control-Unification-Ranked-IntVar.html#IntRBindingT",
          "type": "data"
        },
        "index": {
          "description": "monad for storing IntVar bindings implemented as StateT For plain state monad set Identity for backtracking state monad set Logic",
          "hierarchy": "Control Unification Ranked IntVar",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "IntRBindingT",
          "package": "unification-fd",
          "partial": "Int RBinding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-IntVar.html#t:IntRBindingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"mutable\" unification variable implemented by an integer.\n This provides an entirely pure alternative to truly mutable\n alternatives (like \u003ccode\u003eSTVar\u003c/code\u003e), which can make backtracking easier.\n\u003c/p\u003e\u003cp\u003eN.B., because this implementation is pure, we can use it for\n both ranked and unranked monads.\n\u003c/p\u003e",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "IntVar",
          "package": "unification-fd",
          "source": "src/Control-Unification-IntVar.html#IntVar",
          "type": "newtype"
        },
        "index": {
          "description": "mutable unification variable implemented by an integer This provides an entirely pure alternative to truly mutable alternatives like STVar which can make backtracking easier N.B because this implementation is pure we can use it for both ranked and unranked monads",
          "hierarchy": "Control Unification Ranked IntVar",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "IntVar",
          "package": "unification-fd",
          "partial": "Int Var",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-IntVar.html#t:IntVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eN.B., you should explicitly apply bindings before calling this\n function, or else the bindings will be lost\n\u003c/p\u003e",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "evalIntRBindingT",
          "package": "unification-fd",
          "signature": "IntRBindingT t m a -\u003e m a",
          "source": "src/Control-Unification-Ranked-IntVar.html#evalIntRBindingT",
          "type": "function"
        },
        "index": {
          "description": "N.B you should explicitly apply bindings before calling this function or else the bindings will be lost",
          "hierarchy": "Control Unification Ranked IntVar",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "evalIntRBindingT",
          "normalized": "IntRBindingT a b c-\u003eb c",
          "package": "unification-fd",
          "partial": "Int RBinding",
          "signature": "IntRBindingT t m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-IntVar.html#v:evalIntRBindingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unification.Ranked.IntVar",
          "name": "execIntRBindingT",
          "package": "unification-fd",
          "signature": "IntRBindingT t m a -\u003e m (IntRBindingState t)",
          "source": "src/Control-Unification-Ranked-IntVar.html#execIntRBindingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unification Ranked IntVar",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "execIntRBindingT",
          "normalized": "IntRBindingT a b c-\u003eb(IntRBindingState a)",
          "package": "unification-fd",
          "partial": "Int RBinding",
          "signature": "IntRBindingT t m a-\u003em(IntRBindingState t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-IntVar.html#v:execIntRBindingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unification.Ranked.IntVar",
          "name": "runIntRBindingT",
          "package": "unification-fd",
          "signature": "IntRBindingT t m a -\u003e m (a, IntRBindingState t)",
          "source": "src/Control-Unification-Ranked-IntVar.html#runIntRBindingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unification Ranked IntVar",
          "module": "Control.Unification.Ranked.IntVar",
          "name": "runIntRBindingT",
          "normalized": "IntRBindingT a b c-\u003eb(c,IntRBindingState a)",
          "package": "unification-fd",
          "partial": "Int RBinding",
          "signature": "IntRBindingT t m a-\u003em(a,IntRBindingState t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-IntVar.html#v:runIntRBindingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA ranked variant of \u003ca\u003eControl.Unification.STVar\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Unification.Ranked.STVar",
          "name": "STVar",
          "package": "unification-fd",
          "source": "src/Control-Unification-Ranked-STVar.html",
          "type": "module"
        },
        "index": {
          "description": "ranked variant of Control.Unification.STVar",
          "hierarchy": "Control Unification Ranked STVar",
          "module": "Control.Unification.Ranked.STVar",
          "name": "STVar",
          "package": "unification-fd",
          "partial": "STVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-STVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for handling \u003ccode\u003e\u003ca\u003eSTRVar\u003c/a\u003e\u003c/code\u003e bindings.\n\u003c/p\u003e",
          "module": "Control.Unification.Ranked.STVar",
          "name": "STRBinding",
          "package": "unification-fd",
          "source": "src/Control-Unification-Ranked-STVar.html#STRBinding",
          "type": "data"
        },
        "index": {
          "description": "monad for handling STRVar bindings",
          "hierarchy": "Control Unification Ranked STVar",
          "module": "Control.Unification.Ranked.STVar",
          "name": "STRBinding",
          "package": "unification-fd",
          "partial": "STRBinding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-STVar.html#t:STRBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ranked unification variable implemented by \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003es. In\n addition to the \u003ccode\u003eSTRef\u003c/code\u003e for the term itself, we also track the\n variable's ID (to support visited-sets) and rank (to support\n weighted path compression).\n\u003c/p\u003e",
          "module": "Control.Unification.Ranked.STVar",
          "name": "STRVar",
          "package": "unification-fd",
          "source": "src/Control-Unification-Ranked-STVar.html#STRVar",
          "type": "data"
        },
        "index": {
          "description": "ranked unification variable implemented by STRef In addition to the STRef for the term itself we also track the variable ID to support visited-sets and rank to support weighted path compression",
          "hierarchy": "Control Unification Ranked STVar",
          "module": "Control.Unification.Ranked.STVar",
          "name": "STRVar",
          "package": "unification-fd",
          "partial": "STRVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-STVar.html#t:STRVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e ranked binding monad. N.B., because \u003ccode\u003e\u003ca\u003eSTRVar\u003c/a\u003e\u003c/code\u003e are\n rank-2 quantified, this guarantees that the return value has no\n such references. However, in order to remove the references from\n terms, you'll need to explicitly apply the bindings.\n\u003c/p\u003e",
          "module": "Control.Unification.Ranked.STVar",
          "name": "runSTRBinding",
          "package": "unification-fd",
          "signature": "(forall s.  STRBinding s a) -\u003e a",
          "source": "src/Control-Unification-Ranked-STVar.html#runSTRBinding",
          "type": "function"
        },
        "index": {
          "description": "Run the ST ranked binding monad N.B because STRVar are rank-2 quantified this guarantees that the return value has no such references However in order to remove the references from terms you ll need to explicitly apply the bindings",
          "hierarchy": "Control Unification Ranked STVar",
          "module": "Control.Unification.Ranked.STVar",
          "name": "runSTRBinding",
          "normalized": "(a b STRBinding c d)-\u003ed",
          "package": "unification-fd",
          "partial": "STRBinding",
          "signature": "(forall s. STRBinding s a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked-STVar.html#v:runSTRBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the API of \u003ca\u003eControl.Unification\u003c/a\u003e except\n using \u003ccode\u003e\u003ca\u003eRankedBindingMonad\u003c/a\u003e\u003c/code\u003e where appropriate. This module (and\n the binding implementations for it) are highly experimental and\n subject to change in future versions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Unification.Ranked",
          "name": "Ranked",
          "package": "unification-fd",
          "source": "src/Control-Unification-Ranked.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the API of Control.Unification except using RankedBindingMonad where appropriate This module and the binding implementations for it are highly experimental and subject to change in future versions",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "Ranked",
          "package": "unification-fd",
          "partial": "Ranked",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eequiv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "(=~=)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e UTerm t v-\u003e m (Maybe (IntMap Int))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:-61--126--61-\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:-61--126--61-\"]"
        },
        "index": {
          "description": "equiv",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "(=~=) =~=",
          "normalized": "UTerm a b-\u003eUTerm a b-\u003ec(Maybe(IntMap Int))",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003eUTerm t v-\u003em(Maybe(IntMap Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:-61--126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eequals\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "(===)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e UTerm t v-\u003e m Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:-61--61--61-\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:-61--61--61-\"]"
        },
        "index": {
          "description": "equals",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "(===) ===",
          "normalized": "UTerm a b-\u003eUTerm a b-\u003ec Bool",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003eUTerm t v-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunify\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "(=:=)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e UTerm t v-\u003e e m (UTerm t v)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:-61-:-61-\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:-61-:-61-\"]"
        },
        "index": {
          "description": "unify",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "(=:=) =:=",
          "normalized": "UTerm a b-\u003eUTerm a b-\u003ec d(UTerm a b)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003eUTerm t v-\u003ee m(UTerm t v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:-61-:-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the current bindings from the monad so that any remaining\n variables in the result must, therefore, be free. N.B., this\n expensively clones term structure and should only be performed\n when a pure term is needed, or when \u003ccode\u003e\u003ca\u003eOccursIn\u003c/a\u003e\u003c/code\u003e exceptions must\n be forced. This function \u003cem\u003edoes\u003c/em\u003e preserve sharing, however that\n sharing is no longer observed by the monad.\n\u003c/p\u003e\u003cp\u003eIf any cyclic bindings are detected, then an \u003ccode\u003e\u003ca\u003eOccursIn\u003c/a\u003e\u003c/code\u003e exception\n will be thrown.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "applyBindings",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e e m (UTerm t v)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:applyBindings\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:applyBindings\"]"
        },
        "index": {
          "description": "Apply the current bindings from the monad so that any remaining variables in the result must therefore be free N.B this expensively clones term structure and should only be performed when pure term is needed or when OccursIn exceptions must be forced This function does preserve sharing however that sharing is no longer observed by the monad If any cyclic bindings are detected then an OccursIn exception will be thrown",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "applyBindings",
          "normalized": "UTerm a b-\u003ec d(UTerm a b)",
          "package": "unification-fd",
          "partial": "Bindings",
          "signature": "UTerm t v-\u003ee m(UTerm t v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:applyBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eapplyBindings\u003c/a\u003e\u003c/code\u003e, but works on several terms simultaneously.\n This function preserves sharing across the entire collection of\n terms, whereas applying the bindings to each term separately\n would only preserve sharing within each term.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.7.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "applyBindingsAll",
          "package": "unification-fd",
          "signature": "s (UTerm t v)-\u003e e m (s (UTerm t v))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:applyBindingsAll\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:applyBindingsAll\"]"
        },
        "index": {
          "description": "Same as applyBindings but works on several terms simultaneously This function preserves sharing across the entire collection of terms whereas applying the bindings to each term separately would only preserve sharing within each term Since",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "applyBindingsAll",
          "normalized": "a(UTerm b c)-\u003ed e(a(UTerm b c))",
          "package": "unification-fd",
          "partial": "Bindings All",
          "signature": "s(UTerm t v)-\u003ee m(s(UTerm t v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:applyBindingsAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if two terms are structurally equal. This is essentially\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e except that it does not require applying\n bindings before comparing, so it is more efficient. N.B., this\n function does not consider alpha-variance, and thus variables\n with different names are considered unequal. Cf., \u003ccode\u003e\u003ca\u003eequiv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "equals",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e UTerm t v-\u003e m Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:equals\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:equals\"]"
        },
        "index": {
          "description": "Determine if two terms are structurally equal This is essentially equivalent to except that it does not require applying bindings before comparing so it is more efficient N.B this function does not consider alpha-variance and thus variables with different names are considered unequal Cf equiv",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "equals",
          "normalized": "UTerm a b-\u003eUTerm a b-\u003ec Bool",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003eUTerm t v-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if two terms are structurally equivalent; that is,\n structurally equal modulo renaming of free variables. Returns a\n mapping from variable IDs of the left term to variable IDs of\n the right term, indicating the renaming used.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "equiv",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e UTerm t v-\u003e m (Maybe (IntMap Int))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:equiv\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:equiv\"]"
        },
        "index": {
          "description": "Determine if two terms are structurally equivalent that is structurally equal modulo renaming of free variables Returns mapping from variable IDs of the left term to variable IDs of the right term indicating the renaming used",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "equiv",
          "normalized": "UTerm a b-\u003eUTerm a b-\u003ec(Maybe(IntMap Int))",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003eUTerm t v-\u003em(Maybe(IntMap Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:equiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreshen all variables in a term, both bound and free. This\n ensures that the observability of sharing is maintained, while\n freshening the free variables. N.B., this expensively clones\n term structure and should only be performed when necessary.\n\u003c/p\u003e\u003cp\u003eIf any cyclic bindings are detected, then an \u003ccode\u003e\u003ca\u003eOccursIn\u003c/a\u003e\u003c/code\u003e exception\n will be thrown.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "freshen",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e e m (UTerm t v)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:freshen\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:freshen\"]"
        },
        "index": {
          "description": "Freshen all variables in term both bound and free This ensures that the observability of sharing is maintained while freshening the free variables N.B this expensively clones term structure and should only be performed when necessary If any cyclic bindings are detected then an OccursIn exception will be thrown",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "freshen",
          "normalized": "UTerm a b-\u003ec d(UTerm a b)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003ee m(UTerm t v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:freshen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efreshen\u003c/a\u003e\u003c/code\u003e, but works on several terms simultaneously.\n This is different from freshening each term separately, because\n \u003ccode\u003efreshenAll\u003c/code\u003e preserves the relationship between the terms. For\n instance, the result of\n\u003c/p\u003e\u003cpre\u003e mapM freshen [UVar 1, UVar 1]\n\u003c/pre\u003e\u003cp\u003ewould be \u003ccode\u003e[UVar 2, UVar 3]\u003c/code\u003e or something alpha-equivalent, whereas\n the result of\n\u003c/p\u003e\u003cpre\u003e freshenAll [UVar 1, UVar 1]\n\u003c/pre\u003e\u003cp\u003ewould be \u003ccode\u003e[UVar 2, UVar 2]\u003c/code\u003e or something alpha-equivalent.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.7.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "freshenAll",
          "package": "unification-fd",
          "signature": "s (UTerm t v)-\u003e e m (s (UTerm t v))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:freshenAll\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:freshenAll\"]"
        },
        "index": {
          "description": "Same as freshen but works on several terms simultaneously This is different from freshening each term separately because freshenAll preserves the relationship between the terms For instance the result of mapM freshen UVar UVar would be UVar UVar or something alpha-equivalent whereas the result of freshenAll UVar UVar would be UVar UVar or something alpha-equivalent Since",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "freshenAll",
          "normalized": "a(UTerm b c)-\u003ed e(a(UTerm b c))",
          "package": "unification-fd",
          "partial": "All",
          "signature": "s(UTerm t v)-\u003ee m(s(UTerm t v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:freshenAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWalk a term and determine which variables are still free. N.B.,\n this function does not detect cyclic terms (i.e., throw errors),\n but it will return the correct answer for them in finite time.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "getFreeVars",
          "package": "unification-fd",
          "signature": "UTerm t v -\u003e m [v]",
          "source": "src/Control-Unification.html#getFreeVars",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:getFreeVars\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:getFreeVars\"]"
        },
        "index": {
          "description": "Walk term and determine which variables are still free N.B this function does not detect cyclic terms i.e throw errors but it will return the correct answer for them in finite time",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "getFreeVars",
          "normalized": "UTerm a b-\u003ec[b]",
          "package": "unification-fd",
          "partial": "Free Vars",
          "signature": "UTerm t v-\u003em[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:getFreeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetFreeVars\u003c/a\u003e\u003c/code\u003e, but works on several terms simultaneously.\n This is more efficient than getting the free variables for each\n of the terms separately because we can make use of sharing across\n the whole collection. That is, each time we move to the next\n term, we still remember the bound variables we've already looked\n at (and therefore do not need to traverse, since we've already\n seen whatever free variables there are down there); whereas we\n would forget between each call to \u003ccode\u003egetFreeVars\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.7.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "getFreeVarsAll",
          "package": "unification-fd",
          "signature": "s (UTerm t v) -\u003e m [v]",
          "source": "src/Control-Unification.html#getFreeVarsAll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:getFreeVarsAll\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:getFreeVarsAll\"]"
        },
        "index": {
          "description": "Same as getFreeVars but works on several terms simultaneously This is more efficient than getting the free variables for each of the terms separately because we can make use of sharing across the whole collection That is each time we move to the next term we still remember the bound variables we ve already looked at and therefore do not need to traverse since we ve already seen whatever free variables there are down there whereas we would forget between each call to getFreeVars Since",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "getFreeVarsAll",
          "normalized": "a(UTerm b c)-\u003ed[c]",
          "package": "unification-fd",
          "partial": "Free Vars All",
          "signature": "s(UTerm t v)-\u003em[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:getFreeVarsAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify two terms, or throw an error with an explanation of why\n unification failed. Since bindings are stored in the monad, the\n two input terms and the output term are all equivalent if\n unification succeeds. However, the returned value makes use of\n aggressive opportunistic observable sharing, so it will be more\n efficient to use it in future calculations than either argument.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Ranked\",\"Control.Unification\"]",
          "name": "unify",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e UTerm t v-\u003e e m (UTerm t v)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:unify\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:unify\"]"
        },
        "index": {
          "description": "Unify two terms or throw an error with an explanation of why unification failed Since bindings are stored in the monad the two input terms and the output term are all equivalent if unification succeeds However the returned value makes use of aggressive opportunistic observable sharing so it will be more efficient to use it in future calculations than either argument",
          "hierarchy": "Control Unification Ranked",
          "module": "Control.Unification.Ranked",
          "name": "unify",
          "normalized": "UTerm a b-\u003eUTerm a b-\u003ec d(UTerm a b)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003eUTerm t v-\u003ee m(UTerm t v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Ranked.html#v:unify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an implementation of unification variables\n using the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Unification.STVar",
          "name": "STVar",
          "package": "unification-fd",
          "source": "src/Control-Unification-STVar.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines an implementation of unification variables using the ST monad",
          "hierarchy": "Control Unification STVar",
          "module": "Control.Unification.STVar",
          "name": "STVar",
          "package": "unification-fd",
          "partial": "STVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-STVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for handling \u003ccode\u003e\u003ca\u003eSTVar\u003c/a\u003e\u003c/code\u003e bindings.\n\u003c/p\u003e",
          "module": "Control.Unification.STVar",
          "name": "STBinding",
          "package": "unification-fd",
          "source": "src/Control-Unification-STVar.html#STBinding",
          "type": "data"
        },
        "index": {
          "description": "monad for handling STVar bindings",
          "hierarchy": "Control Unification STVar",
          "module": "Control.Unification.STVar",
          "name": "STBinding",
          "package": "unification-fd",
          "partial": "STBinding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-STVar.html#t:STBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnification variables implemented by \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003es. In addition to\n the \u003ccode\u003eSTRef\u003c/code\u003e for the term itself, we also track the variable's\n ID (to support visited-sets).\n\u003c/p\u003e",
          "module": "Control.Unification.STVar",
          "name": "STVar",
          "package": "unification-fd",
          "source": "src/Control-Unification-STVar.html#STVar",
          "type": "data"
        },
        "index": {
          "description": "Unification variables implemented by STRef In addition to the STRef for the term itself we also track the variable ID to support visited-sets",
          "hierarchy": "Control Unification STVar",
          "module": "Control.Unification.STVar",
          "name": "STVar",
          "package": "unification-fd",
          "partial": "STVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-STVar.html#t:STVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e ranked binding monad. N.B., because \u003ccode\u003e\u003ca\u003eSTVar\u003c/a\u003e\u003c/code\u003e are\n rank-2 quantified, this guarantees that the return value has no\n such references. However, in order to remove the references from\n terms, you'll need to explicitly apply the bindings and ground\n the term.\n\u003c/p\u003e",
          "module": "Control.Unification.STVar",
          "name": "runSTBinding",
          "package": "unification-fd",
          "signature": "(forall s.  STBinding s a) -\u003e a",
          "source": "src/Control-Unification-STVar.html#runSTBinding",
          "type": "function"
        },
        "index": {
          "description": "Run the ST ranked binding monad N.B because STVar are rank-2 quantified this guarantees that the return value has no such references However in order to remove the references from terms you ll need to explicitly apply the bindings and ground the term",
          "hierarchy": "Control Unification STVar",
          "module": "Control.Unification.STVar",
          "name": "runSTBinding",
          "normalized": "(a b STBinding c d)-\u003ed",
          "package": "unification-fd",
          "partial": "STBinding",
          "signature": "(forall s. STBinding s a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-STVar.html#v:runSTBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the classes and primitive types used by\n unification and related functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Unification.Types",
          "name": "Types",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the classes and primitive types used by unification and related functions",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "Types",
          "package": "unification-fd",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic class for generating, reading, and writing to bindings\n stored in a monad. These three functionalities could be split\n apart, but are combined in order to simplify contexts. Also,\n because most functions reading bindings will also perform path\n compression, there's no way to distinguish \"true\" mutation\n from mere path compression.\n\u003c/p\u003e\u003cp\u003eThe superclass constraints are there to simplify contexts, since\n we make the same assumptions everywhere we use \u003ccode\u003eBindingMonad\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "BindingMonad",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#BindingMonad",
          "type": "class"
        },
        "index": {
          "description": "The basic class for generating reading and writing to bindings stored in monad These three functionalities could be split apart but are combined in order to simplify contexts Also because most functions reading bindings will also perform path compression there no way to distinguish true mutation from mere path compression The superclass constraints are there to simplify contexts since we make the same assumptions everywhere we use BindingMonad",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "BindingMonad",
          "package": "unification-fd",
          "partial": "Binding Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#t:BindingMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe target of variables for \u003ccode\u003e\u003ca\u003eRankedBindingMonad\u003c/a\u003e\u003c/code\u003es. In order\n to support weighted path compression, each variable is bound to\n both another term (possibly) and also a \"rank\" which is related\n to the length of the variable chain to the term it's ultimately\n bound to.\n\u003c/p\u003e\u003cp\u003eThe rank can be at most \u003ccode\u003elog V\u003c/code\u003e, where \u003ccode\u003eV\u003c/code\u003e is the total number\n of variables in the unification problem. Thus, A \u003ccode\u003eWord8\u003c/code\u003e is\n sufficient for \u003ccode\u003e2^(2^8)\u003c/code\u003e variables, which is far more than can\n be indexed by \u003ccode\u003e\u003ca\u003egetVarID\u003c/a\u003e\u003c/code\u003e even on 64-bit architectures.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "Rank",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#Rank",
          "type": "data"
        },
        "index": {
          "description": "The target of variables for RankedBindingMonad In order to support weighted path compression each variable is bound to both another term possibly and also rank which is related to the length of the variable chain to the term it ultimately bound to The rank can be at most log where is the total number of variables in the unification problem Thus Word8 is sufficient for variables which is far more than can be indexed by getVarID even on bit architectures",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "Rank",
          "package": "unification-fd",
          "partial": "Rank",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#t:Rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn advanced class for \u003ccode\u003e\u003ca\u003eBindingMonad\u003c/a\u003e\u003c/code\u003es which also support\n weighted path compression. The weightedness adds non-trivial\n implementation complications; so even though weighted path\n compression is asymptotically optimal, the constant factors may\n make it worthwhile to stick with the unweighted path compression\n supported by \u003ccode\u003e\u003ca\u003eBindingMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "RankedBindingMonad",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#RankedBindingMonad",
          "type": "class"
        },
        "index": {
          "description": "An advanced class for BindingMonad which also support weighted path compression The weightedness adds non-trivial implementation complications so even though weighted path compression is asymptotically optimal the constant factors may make it worthwhile to stick with the unweighted path compression supported by BindingMonad",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "RankedBindingMonad",
          "package": "unification-fd",
          "partial": "Ranked Binding Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#t:RankedBindingMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of terms generated by structures \u003ccode\u003et\u003c/code\u003e over variables\n \u003ccode\u003ev\u003c/code\u003e. The structure type should implement \u003ccode\u003e\u003ca\u003eUnifiable\u003c/a\u003e\u003c/code\u003e and the\n variable type should implement \u003ccode\u003e\u003ca\u003eVariable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance doesn't show the constructors, in order to\n improve legibility for large terms.\n\u003c/p\u003e\u003cp\u003eAll the category theoretic instances (\u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e,...) are provided because they are often useful;\n however, beware that since the implementations must be pure,\n they cannot read variables bound in the current context and\n therefore can create incoherent results. Therefore, you should\n apply the current bindings before using any of the functions\n provided by those classes.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "UTerm",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#UTerm",
          "type": "data"
        },
        "index": {
          "description": "The type of terms generated by structures over variables The structure type should implement Unifiable and the variable type should implement Variable The Show instance doesn show the constructors in order to improve legibility for large terms All the category theoretic instances Functor Foldable Traversable are provided because they are often useful however beware that since the implementations must be pure they cannot read variables bound in the current context and therefore can create incoherent results Therefore you should apply the current bindings before using any of the functions provided by those classes",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "UTerm",
          "package": "unification-fd",
          "partial": "UTerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#t:UTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn implementation of syntactically unifiable structure. The\n \u003ccode\u003eTraversable\u003c/code\u003e constraint is there because we also require terms\n to be functors and require the distributivity of \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "Unifiable",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#Unifiable",
          "type": "class"
        },
        "index": {
          "description": "An implementation of syntactically unifiable structure The Traversable constraint is there because we also require terms to be functors and require the distributivity of sequence or mapM",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "Unifiable",
          "package": "unification-fd",
          "partial": "Unifiable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#t:Unifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible failure modes that could be encountered in\n unification and related functions. While many of the functions\n could be given more accurate types if we used ad-hoc combinations\n of these constructors (i.e., because they can only throw one of\n the errors), the extra complexity is not considered worth it.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "UnificationFailure",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#UnificationFailure",
          "type": "data"
        },
        "index": {
          "description": "The possible failure modes that could be encountered in unification and related functions While many of the functions could be given more accurate types if we used ad-hoc combinations of these constructors i.e because they can only throw one of the errors the extra complexity is not considered worth it",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "UnificationFailure",
          "package": "unification-fd",
          "partial": "Unification Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#t:UnificationFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn implementation of unification variables. The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e requirement\n is to determine whether two variables are equal \u003cem\u003eas variables\u003c/em\u003e,\n without considering what they are bound to. We use \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e rather\n than having our own \u003ccode\u003eeqVar\u003c/code\u003e method so that clients can make use\n of library functions which commonly assume \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "Variable",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#Variable",
          "type": "class"
        },
        "index": {
          "description": "An implementation of unification variables The Eq requirement is to determine whether two variables are equal as variables without considering what they are bound to We use Eq rather than having our own eqVar method so that clients can make use of library functions which commonly assume Eq",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "Variable",
          "package": "unification-fd",
          "partial": "Variable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cyclic term was encountered (i.e., the variable\n occurs free in a term it would have to be bound to in\n order to succeed). Infinite terms like this are not\n generally acceptable, so we do not support them. In logic\n programming this should simply be treated as unification\n failure; in type checking this should result in a \"could\n not construct infinite type \u003ccode\u003ea = Foo a\u003c/code\u003e\" error.\n\u003c/p\u003e\u003cp\u003eNote that since, by default, the library uses visited-sets\n instead of the occurs-check these errors will be thrown\n at the point where the cycle is dereferenced/unrolled\n (e.g., when applying bindings), instead of at the time\n when the cycle is created. However, the arguments to\n this constructor should express the same context as if\n we had performed the occurs-check, in order for error\n messages to be intelligable.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Types\",\"Control.Unification\"]",
          "name": "OccursIn",
          "package": "unification-fd",
          "signature": "OccursIn v (UTerm t v)",
          "source": "src/Control-Unification-Types.html#UnificationFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:OccursIn\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:OccursIn\"]"
        },
        "index": {
          "description": "cyclic term was encountered i.e the variable occurs free in term it would have to be bound to in order to succeed Infinite terms like this are not generally acceptable so we do not support them In logic programming this should simply be treated as unification failure in type checking this should result in could not construct infinite type Foo error Note that since by default the library uses visited-sets instead of the occurs-check these errors will be thrown at the point where the cycle is dereferenced unrolled e.g when applying bindings instead of at the time when the cycle is created However the arguments to this constructor should express the same context as if we had performed the occurs-check in order for error messages to be intelligable",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "OccursIn",
          "package": "unification-fd",
          "partial": "Occurs In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:OccursIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unification.Types",
          "name": "Rank",
          "package": "unification-fd",
          "signature": "Rank !Word8 !(Maybe (UTerm t v))",
          "source": "src/Control-Unification-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "Rank",
          "package": "unification-fd",
          "partial": "Rank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:Rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-most level of the terms do not match (according\n to \u003ccode\u003e\u003ca\u003ezipMatch\u003c/a\u003e\u003c/code\u003e). In logic programming this should simply\n be treated as unification failure; in type checking this\n should result in a \"could not match expected type \u003ccode\u003eFoo\u003c/code\u003e\n with inferred type \u003ccode\u003eBar\u003c/code\u003e\" error.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Types\",\"Control.Unification\"]",
          "name": "TermMismatch",
          "package": "unification-fd",
          "signature": "TermMismatch (t (UTerm t v)) (t (UTerm t v))",
          "source": "src/Control-Unification-Types.html#UnificationFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:TermMismatch\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:TermMismatch\"]"
        },
        "index": {
          "description": "The top-most level of the terms do not match according to zipMatch In logic programming this should simply be treated as unification failure in type checking this should result in could not match expected type Foo with inferred type Bar error",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "TermMismatch",
          "package": "unification-fd",
          "partial": "Term Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:TermMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome structure containing subterms.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Types\",\"Control.Unification\"]",
          "name": "UTerm",
          "package": "unification-fd",
          "signature": "UTerm !(t (UTerm t v))",
          "source": "src/Control-Unification-Types.html#UTerm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:UTerm\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:UTerm\"]"
        },
        "index": {
          "description": "Some structure containing subterms",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "UTerm",
          "package": "unification-fd",
          "partial": "UTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:UTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unification variable.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Types\",\"Control.Unification\"]",
          "name": "UVar",
          "package": "unification-fd",
          "signature": "UVar !v",
          "source": "src/Control-Unification-Types.html#UTerm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:UVar\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:UVar\"]"
        },
        "index": {
          "description": "unification variable",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "UVar",
          "package": "unification-fd",
          "partial": "UVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:UVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequired for the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e instance, which in turn is\n required to appease \u003ccode\u003eErrorT\u003c/code\u003e in the MTL. We do not use\n this anywhere.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Types\",\"Control.Unification\"]",
          "name": "UnknownError",
          "package": "unification-fd",
          "signature": "UnknownError String",
          "source": "src/Control-Unification-Types.html#UnificationFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:UnknownError\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:UnknownError\"]"
        },
        "index": {
          "description": "Required for the Error instance which in turn is required to appease ErrorT in the MTL We do not use this anywhere",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "UnknownError",
          "package": "unification-fd",
          "partial": "Unknown Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:UnknownError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind a variable to a term, overriding any previous binding.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "bindVar",
          "package": "unification-fd",
          "signature": "v -\u003e UTerm t v -\u003e m ()",
          "source": "src/Control-Unification-Types.html#bindVar",
          "type": "method"
        },
        "index": {
          "description": "Bind variable to term overriding any previous binding",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "bindVar",
          "normalized": "a-\u003eUTerm b a-\u003ec()",
          "package": "unification-fd",
          "partial": "Var",
          "signature": "v-\u003eUTerm t v-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:bindVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new free variable guaranteed to be fresh in\n \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "freeVar",
          "package": "unification-fd",
          "signature": "m v",
          "source": "src/Control-Unification-Types.html#freeVar",
          "type": "method"
        },
        "index": {
          "description": "Generate new free variable guaranteed to be fresh in",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "freeVar",
          "package": "unification-fd",
          "partial": "Var",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:freeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Extract a pure term from a mutable term, or return\n \u003ccode\u003eNothing\u003c/code\u003e if the mutable term actually contains variables. N.B.,\n this function is pure, so you should manually apply bindings\n before calling it.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Types\",\"Control.Unification\"]",
          "name": "freeze",
          "package": "unification-fd",
          "signature": "UTerm t v -\u003e Maybe (Fix t)",
          "source": "src/Control-Unification-Types.html#freeze",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:freeze\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:freeze\"]"
        },
        "index": {
          "description": "Extract pure term from mutable term or return Nothing if the mutable term actually contains variables N.B this function is pure so you should manually apply bindings before calling it",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "freeze",
          "normalized": "UTerm a b-\u003eMaybe(Fix a)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003eMaybe(Fix t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a unique identifier for this variable, in order to\n support the use of visited-sets instead of occurs-checks.\n This function must satisfy the following coherence law with\n respect to the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ex == y\u003c/code\u003e if and only if \u003ccode\u003egetVarID x == getVarID y\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "getVarID",
          "package": "unification-fd",
          "signature": "v -\u003e Int",
          "source": "src/Control-Unification-Types.html#getVarID",
          "type": "method"
        },
        "index": {
          "description": "Return unique identifier for this variable in order to support the use of visited-sets instead of occurs-checks This function must satisfy the following coherence law with respect to the Eq instance if and only if getVarID getVarID",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "getVarID",
          "normalized": "a-\u003eInt",
          "package": "unification-fd",
          "partial": "Var ID",
          "signature": "v-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:getVarID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind a variable to a term and increment the rank at the\n same time. The default implementation is:\n\u003c/p\u003e\u003cpre\u003e incrementBindVar t v = do { incrementRank v ; bindVar v t }\n\u003c/pre\u003e",
          "module": "Control.Unification.Types",
          "name": "incrementBindVar",
          "package": "unification-fd",
          "signature": "v -\u003e UTerm t v -\u003e m ()",
          "source": "src/Control-Unification-Types.html#incrementBindVar",
          "type": "method"
        },
        "index": {
          "description": "Bind variable to term and increment the rank at the same time The default implementation is incrementBindVar do incrementRank bindVar",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "incrementBindVar",
          "normalized": "a-\u003eUTerm b a-\u003ec()",
          "package": "unification-fd",
          "partial": "Bind Var",
          "signature": "v-\u003eUTerm t v-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:incrementBindVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease the rank of a variable by one.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "incrementRank",
          "package": "unification-fd",
          "signature": "v -\u003e m ()",
          "source": "src/Control-Unification-Types.html#incrementRank",
          "type": "method"
        },
        "index": {
          "description": "Increase the rank of variable by one",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "incrementRank",
          "normalized": "a-\u003eb()",
          "package": "unification-fd",
          "partial": "Rank",
          "signature": "v-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:incrementRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a variable pointing to \u003ccode\u003eUTerm t v\u003c/code\u003e, return its\n rank and the term it's bound to.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "lookupRankVar",
          "package": "unification-fd",
          "signature": "v -\u003e m (Rank t v)",
          "source": "src/Control-Unification-Types.html#lookupRankVar",
          "type": "method"
        },
        "index": {
          "description": "Given variable pointing to UTerm return its rank and the term it bound to",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "lookupRankVar",
          "normalized": "a-\u003eb(Rank c a)",
          "package": "unification-fd",
          "partial": "Rank Var",
          "signature": "v-\u003em(Rank t v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:lookupRankVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a variable pointing to \u003ccode\u003eUTerm t v\u003c/code\u003e, return the\n term it's bound to, or \u003ccode\u003eNothing\u003c/code\u003e if the variable is unbound.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "lookupVar",
          "package": "unification-fd",
          "signature": "v -\u003e m (Maybe (UTerm t v))",
          "source": "src/Control-Unification-Types.html#lookupVar",
          "type": "method"
        },
        "index": {
          "description": "Given variable pointing to UTerm return the term it bound to or Nothing if the variable is unbound",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "lookupVar",
          "normalized": "a-\u003eb(Maybe(UTerm c a))",
          "package": "unification-fd",
          "partial": "Var",
          "signature": "v-\u003em(Maybe(UTerm t v))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:lookupVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new variable (fresh in \u003ccode\u003em\u003c/code\u003e) bound to the given\n term. The default implementation is:\n\u003c/p\u003e\u003cpre\u003e newVar t = do { v \u003c- freeVar ; bindVar v t ; return v }\n\u003c/pre\u003e",
          "module": "Control.Unification.Types",
          "name": "newVar",
          "package": "unification-fd",
          "signature": "UTerm t v -\u003e m v",
          "source": "src/Control-Unification-Types.html#newVar",
          "type": "method"
        },
        "index": {
          "description": "Generate new variable fresh in bound to the given term The default implementation is newVar do freeVar bindVar return",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "newVar",
          "normalized": "UTerm a b-\u003ec b",
          "package": "unification-fd",
          "partial": "Var",
          "signature": "UTerm t v-\u003em v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:newVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Embed a pure term as a mutable term.\n\u003c/p\u003e",
          "module": "[\"Control.Unification.Types\",\"Control.Unification\"]",
          "name": "unfreeze",
          "package": "unification-fd",
          "signature": "Fix t -\u003e UTerm t v",
          "source": "src/Control-Unification-Types.html#unfreeze",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:unfreeze\",\"http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:unfreeze\"]"
        },
        "index": {
          "description": "Embed pure term as mutable term",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "unfreeze",
          "normalized": "Fix a-\u003eUTerm a b",
          "package": "unification-fd",
          "signature": "Fix t-\u003eUTerm t v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:unfreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform one level of equality testing for terms. If the\n term constructors are unequal then return \u003ccode\u003eNothing\u003c/code\u003e; if they\n are equal, then return the one-level spine filled with\n resolved subterms and/or pairs of subterms to be recursively\n checked.\n\u003c/p\u003e",
          "module": "Control.Unification.Types",
          "name": "zipMatch",
          "package": "unification-fd",
          "signature": "t a -\u003e t a -\u003e Maybe (t (Either a (a, a)))",
          "source": "src/Control-Unification-Types.html#zipMatch",
          "type": "method"
        },
        "index": {
          "description": "Perform one level of equality testing for terms If the term constructors are unequal then return Nothing if they are equal then return the one-level spine filled with resolved subterms and or pairs of subterms to be recursively checked",
          "hierarchy": "Control Unification Types",
          "module": "Control.Unification.Types",
          "name": "zipMatch",
          "normalized": "a b-\u003ea b-\u003eMaybe(a(Either b(b,b)))",
          "package": "unification-fd",
          "partial": "Match",
          "signature": "t a-\u003et a-\u003eMaybe(t(Either a(a,a)))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification-Types.html#v:zipMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides first-order structural unification over\n general structure types. It also provides the standard suite of\n functions accompanying unification (applying bindings, getting\n free variables, etc.).\n\u003c/p\u003e\u003cp\u003eThe implementation makes use of numerous optimization techniques.\n First, we use path compression everywhere (for weighted path\n compression see \u003ca\u003eControl.Unification.Ranked\u003c/a\u003e). Second, we replace\n the occurs-check with visited-sets. Third, we use a technique\n for aggressive opportunistic observable sharing; that is, we\n track as much sharing as possible in the bindings (without\n introducing new variables), so that we can compare bound variables\n directly and therefore eliminate redundant unifications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Unification",
          "name": "Unification",
          "package": "unification-fd",
          "source": "src/Control-Unification.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides first-order structural unification over general structure types It also provides the standard suite of functions accompanying unification applying bindings getting free variables etc The implementation makes use of numerous optimization techniques First we use path compression everywhere for weighted path compression see Control.Unification.Ranked Second we replace the occurs-check with visited-sets Third we use technique for aggressive opportunistic observable sharing that is we track as much sharing as possible in the bindings without introducing new variables so that we can compare bound variables directly and therefore eliminate redundant unifications",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "Unification",
          "package": "unification-fd",
          "partial": "Unification",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic class for generating, reading, and writing to bindings\n stored in a monad. These three functionalities could be split\n apart, but are combined in order to simplify contexts. Also,\n because most functions reading bindings will also perform path\n compression, there's no way to distinguish \"true\" mutation\n from mere path compression.\n\u003c/p\u003e\u003cp\u003eThe superclass constraints are there to simplify contexts, since\n we make the same assumptions everywhere we use \u003ccode\u003eBindingMonad\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "BindingMonad",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#BindingMonad",
          "type": "class"
        },
        "index": {
          "description": "The basic class for generating reading and writing to bindings stored in monad These three functionalities could be split apart but are combined in order to simplify contexts Also because most functions reading bindings will also perform path compression there no way to distinguish true mutation from mere path compression The superclass constraints are there to simplify contexts since we make the same assumptions everywhere we use BindingMonad",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "BindingMonad",
          "package": "unification-fd",
          "partial": "Binding Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#t:BindingMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of terms generated by structures \u003ccode\u003et\u003c/code\u003e over variables\n \u003ccode\u003ev\u003c/code\u003e. The structure type should implement \u003ccode\u003e\u003ca\u003eUnifiable\u003c/a\u003e\u003c/code\u003e and the\n variable type should implement \u003ccode\u003e\u003ca\u003eVariable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance doesn't show the constructors, in order to\n improve legibility for large terms.\n\u003c/p\u003e\u003cp\u003eAll the category theoretic instances (\u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e,...) are provided because they are often useful;\n however, beware that since the implementations must be pure,\n they cannot read variables bound in the current context and\n therefore can create incoherent results. Therefore, you should\n apply the current bindings before using any of the functions\n provided by those classes.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "UTerm",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#UTerm",
          "type": "data"
        },
        "index": {
          "description": "The type of terms generated by structures over variables The structure type should implement Unifiable and the variable type should implement Variable The Show instance doesn show the constructors in order to improve legibility for large terms All the category theoretic instances Functor Foldable Traversable are provided because they are often useful however beware that since the implementations must be pure they cannot read variables bound in the current context and therefore can create incoherent results Therefore you should apply the current bindings before using any of the functions provided by those classes",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "UTerm",
          "package": "unification-fd",
          "partial": "UTerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#t:UTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn implementation of syntactically unifiable structure. The\n \u003ccode\u003eTraversable\u003c/code\u003e constraint is there because we also require terms\n to be functors and require the distributivity of \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "Unifiable",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#Unifiable",
          "type": "class"
        },
        "index": {
          "description": "An implementation of syntactically unifiable structure The Traversable constraint is there because we also require terms to be functors and require the distributivity of sequence or mapM",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "Unifiable",
          "package": "unification-fd",
          "partial": "Unifiable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#t:Unifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible failure modes that could be encountered in\n unification and related functions. While many of the functions\n could be given more accurate types if we used ad-hoc combinations\n of these constructors (i.e., because they can only throw one of\n the errors), the extra complexity is not considered worth it.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "UnificationFailure",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#UnificationFailure",
          "type": "data"
        },
        "index": {
          "description": "The possible failure modes that could be encountered in unification and related functions While many of the functions could be given more accurate types if we used ad-hoc combinations of these constructors i.e because they can only throw one of the errors the extra complexity is not considered worth it",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "UnificationFailure",
          "package": "unification-fd",
          "partial": "Unification Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#t:UnificationFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn implementation of unification variables. The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e requirement\n is to determine whether two variables are equal \u003cem\u003eas variables\u003c/em\u003e,\n without considering what they are bound to. We use \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e rather\n than having our own \u003ccode\u003eeqVar\u003c/code\u003e method so that clients can make use\n of library functions which commonly assume \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "Variable",
          "package": "unification-fd",
          "source": "src/Control-Unification-Types.html#Variable",
          "type": "class"
        },
        "index": {
          "description": "An implementation of unification variables The Eq requirement is to determine whether two variables are equal as variables without considering what they are bound to We use Eq rather than having our own eqVar method so that clients can make use of library functions which commonly assume Eq",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "Variable",
          "package": "unification-fd",
          "partial": "Variable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esubsumes\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "(\u003c:=)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e UTerm t v-\u003e e m Bool",
          "type": "function"
        },
        "index": {
          "description": "subsumes",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "(\u003c:=) \u003c:=",
          "normalized": "UTerm a b-\u003eUTerm a b-\u003ec d Bool",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003eUTerm t v-\u003ee m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:-60-:-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind a variable to a term, overriding any previous binding.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "bindVar",
          "package": "unification-fd",
          "signature": "v -\u003e UTerm t v -\u003e m ()",
          "source": "src/Control-Unification-Types.html#bindVar",
          "type": "method"
        },
        "index": {
          "description": "Bind variable to term overriding any previous binding",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "bindVar",
          "normalized": "a-\u003eUTerm b a-\u003ec()",
          "package": "unification-fd",
          "partial": "Var",
          "signature": "v-\u003eUTerm t v-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:bindVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new free variable guaranteed to be fresh in\n \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "freeVar",
          "package": "unification-fd",
          "signature": "m v",
          "source": "src/Control-Unification-Types.html#freeVar",
          "type": "method"
        },
        "index": {
          "description": "Generate new free variable guaranteed to be fresh in",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "freeVar",
          "package": "unification-fd",
          "partial": "Var",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:freeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonicalize a chain of variables so they all point directly\n to the term at the end of the chain (or the free variable, if\n the chain is unbound), and return that end.\n\u003c/p\u003e\u003cp\u003eN.B., this is almost never the function you want. Cf., \u003ccode\u003e\u003ca\u003esemiprune\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "fullprune",
          "package": "unification-fd",
          "signature": "UTerm t v -\u003e m (UTerm t v)",
          "source": "src/Control-Unification.html#fullprune",
          "type": "function"
        },
        "index": {
          "description": "Canonicalize chain of variables so they all point directly to the term at the end of the chain or the free variable if the chain is unbound and return that end N.B this is almost never the function you want Cf semiprune",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "fullprune",
          "normalized": "UTerm a b-\u003ec(UTerm a b)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003em(UTerm t v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:fullprune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a unique identifier for this variable, in order to\n support the use of visited-sets instead of occurs-checks.\n This function must satisfy the following coherence law with\n respect to the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ex == y\u003c/code\u003e if and only if \u003ccode\u003egetVarID x == getVarID y\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "getVarID",
          "package": "unification-fd",
          "signature": "v -\u003e Int",
          "source": "src/Control-Unification-Types.html#getVarID",
          "type": "method"
        },
        "index": {
          "description": "Return unique identifier for this variable in order to support the use of visited-sets instead of occurs-checks This function must satisfy the following coherence law with respect to the Eq instance if and only if getVarID getVarID",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "getVarID",
          "normalized": "a-\u003eInt",
          "package": "unification-fd",
          "partial": "Var ID",
          "signature": "v-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:getVarID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a variable pointing to \u003ccode\u003eUTerm t v\u003c/code\u003e, return the\n term it's bound to, or \u003ccode\u003eNothing\u003c/code\u003e if the variable is unbound.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "lookupVar",
          "package": "unification-fd",
          "signature": "v -\u003e m (Maybe (UTerm t v))",
          "source": "src/Control-Unification-Types.html#lookupVar",
          "type": "method"
        },
        "index": {
          "description": "Given variable pointing to UTerm return the term it bound to or Nothing if the variable is unbound",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "lookupVar",
          "normalized": "a-\u003eb(Maybe(UTerm c a))",
          "package": "unification-fd",
          "partial": "Var",
          "signature": "v-\u003em(Maybe(UTerm t v))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:lookupVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new variable (fresh in \u003ccode\u003em\u003c/code\u003e) bound to the given\n term. The default implementation is:\n\u003c/p\u003e\u003cpre\u003e newVar t = do { v \u003c- freeVar ; bindVar v t ; return v }\n\u003c/pre\u003e",
          "module": "Control.Unification",
          "name": "newVar",
          "package": "unification-fd",
          "signature": "UTerm t v -\u003e m v",
          "source": "src/Control-Unification-Types.html#newVar",
          "type": "method"
        },
        "index": {
          "description": "Generate new variable fresh in bound to the given term The default implementation is newVar do freeVar bindVar return",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "newVar",
          "normalized": "UTerm a b-\u003ec b",
          "package": "unification-fd",
          "partial": "Var",
          "signature": "UTerm t v-\u003em v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:newVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a variable appears free somewhere inside a term.\n Since occurs checks only make sense when we're about to bind the\n variable to the term, we do not bother checking for the possibility\n of the variable occuring bound in the term.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "occursIn",
          "package": "unification-fd",
          "signature": "v -\u003e UTerm t v -\u003e m Bool",
          "source": "src/Control-Unification.html#occursIn",
          "type": "function"
        },
        "index": {
          "description": "Determine if variable appears free somewhere inside term Since occurs checks only make sense when we re about to bind the variable to the term we do not bother checking for the possibility of the variable occuring bound in the term",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "occursIn",
          "normalized": "a-\u003eUTerm b a-\u003ec Bool",
          "package": "unification-fd",
          "partial": "In",
          "signature": "v-\u003eUTerm t v-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:occursIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonicalize a chain of variables so they all point directly\n to the last variable in the chain, regardless of whether it is\n bound or not. This allows detecting many cases where multiple\n variables point to the same term, thereby allowing us to avoid\n re-unifying the term they point to.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "semiprune",
          "package": "unification-fd",
          "signature": "UTerm t v -\u003e m (UTerm t v)",
          "source": "src/Control-Unification.html#semiprune",
          "type": "function"
        },
        "index": {
          "description": "Canonicalize chain of variables so they all point directly to the last variable in the chain regardless of whether it is bound or not This allows detecting many cases where multiple variables point to the same term thereby allowing us to avoid re-unifying the term they point to",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "semiprune",
          "normalized": "UTerm a b-\u003ec(UTerm a b)",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003em(UTerm t v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:semiprune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether the left term subsumes the right term. That\n is, whereas \u003ccode\u003e(tl =:= tr)\u003c/code\u003e will compute the most general substitution\n \u003ccode\u003es\u003c/code\u003e such that \u003ccode\u003e(s tl === s tr)\u003c/code\u003e, \u003ccode\u003e(tl \u003c:= tr)\u003c/code\u003e computes the most\n general substitution \u003ccode\u003es\u003c/code\u003e such that \u003ccode\u003e(s tl === tr)\u003c/code\u003e. This means\n that \u003ccode\u003etl\u003c/code\u003e is less defined than and consistent with \u003ccode\u003etr\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.\u003c/em\u003e, this function updates the monadic bindings just like\n \u003ccode\u003e\u003ca\u003eunify\u003c/a\u003e\u003c/code\u003e does. However, while the use cases for unification often\n want to keep the bindings around, the use cases for subsumption\n usually do not. Thus, you'll probably want to use a binding monad\n which supports backtracking in order to undo the changes.\n Unfortunately, leaving the monadic bindings unaltered and returning\n the necessary substitution directly imposes a performance penalty\n or else requires specifying too much about the implementation\n of variables.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "subsumes",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e UTerm t v-\u003e e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Determine whether the left term subsumes the right term That is whereas tl tr will compute the most general substitution such that tl tr tl tr computes the most general substitution such that tl tr This means that tl is less defined than and consistent with tr N.B this function updates the monadic bindings just like unify does However while the use cases for unification often want to keep the bindings around the use cases for subsumption usually do not Thus you ll probably want to use binding monad which supports backtracking in order to undo the changes Unfortunately leaving the monadic bindings unaltered and returning the necessary substitution directly imposes performance penalty or else requires specifying too much about the implementation of variables",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "subsumes",
          "normalized": "UTerm a b-\u003eUTerm a b-\u003ec d Bool",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003eUTerm t v-\u003ee m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:subsumes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eunify\u003c/a\u003e\u003c/code\u003e which uses \u003ccode\u003e\u003ca\u003eoccursIn\u003c/a\u003e\u003c/code\u003e instead of visited-sets.\n This should only be used when eager throwing of \u003ccode\u003e\u003ca\u003eOccursIn\u003c/a\u003e\u003c/code\u003e errors\n is absolutely essential (or for testing the correctness of\n \u003ccode\u003eunify\u003c/code\u003e). Performing the occurs-check is expensive. Not only is\n it slow, it's asymptotically slow since it can cause the same\n subterm to be traversed multiple times.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "unifyOccurs",
          "package": "unification-fd",
          "signature": "UTerm t v-\u003e UTerm t v-\u003e e m (UTerm t v)",
          "type": "function"
        },
        "index": {
          "description": "variant of unify which uses occursIn instead of visited-sets This should only be used when eager throwing of OccursIn errors is absolutely essential or for testing the correctness of unify Performing the occurs-check is expensive Not only is it slow it asymptotically slow since it can cause the same subterm to be traversed multiple times",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "unifyOccurs",
          "normalized": "UTerm a b-\u003eUTerm a b-\u003ec d(UTerm a b)",
          "package": "unification-fd",
          "partial": "Occurs",
          "signature": "UTerm t v-\u003eUTerm t v-\u003ee m(UTerm t v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:unifyOccurs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform one level of equality testing for terms. If the\n term constructors are unequal then return \u003ccode\u003eNothing\u003c/code\u003e; if they\n are equal, then return the one-level spine filled with\n resolved subterms and/or pairs of subterms to be recursively\n checked.\n\u003c/p\u003e",
          "module": "Control.Unification",
          "name": "zipMatch",
          "package": "unification-fd",
          "signature": "t a -\u003e t a -\u003e Maybe (t (Either a (a, a)))",
          "source": "src/Control-Unification-Types.html#zipMatch",
          "type": "method"
        },
        "index": {
          "description": "Perform one level of equality testing for terms If the term constructors are unequal then return Nothing if they are equal then return the one-level spine filled with resolved subterms and or pairs of subterms to be recursively checked",
          "hierarchy": "Control Unification",
          "module": "Control.Unification",
          "name": "zipMatch",
          "normalized": "a b-\u003ea b-\u003eMaybe(a(Either b(b,b)))",
          "package": "unification-fd",
          "partial": "Match",
          "signature": "t a-\u003et a-\u003eMaybe(t(Either a(a,a)))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Control-Unification.html#v:zipMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a fixed point operator on functor types.\n For Haskell the least and greatest fixed points coincide, so we\n needn't distinguish them. This abstract nonsense is helpful in\n conjunction with other category theoretic tricks like Swierstra's\n functor coproducts (not provided by this package). For more on\n the utility of two-level recursive types, see:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Tim Sheard (2001) \u003cem\u003eGeneric Unification via Two-Level Types\u003c/em\u003e\n         \u003cem\u003eand Paramterized Modules\u003c/em\u003e, Functional Pearl, ICFP.\n\u003c/li\u003e\u003cli\u003e Tim Sheard & Emir Pasalic (2004) \u003cem\u003eTwo-Level Types and\u003c/em\u003e\n         \u003cem\u003eParameterized Modules\u003c/em\u003e. JFP 14(5): 547--587. This is\n         an expanded version of Sheard (2001) with new examples.\n\u003c/li\u003e\u003cli\u003e Wouter Swierstra (2008) \u003cem\u003eData types a la carte\u003c/em\u003e, Functional\n         Pearl. JFP 18: 423--436.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "Fixedpoint",
          "package": "unification-fd",
          "source": "src/Data-Functor-Fixedpoint.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides fixed point operator on functor types For Haskell the least and greatest fixed points coincide so we needn distinguish them This abstract nonsense is helpful in conjunction with other category theoretic tricks like Swierstra functor coproducts not provided by this package For more on the utility of two-level recursive types see Tim Sheard Generic Unification via Two-Level Types and Paramterized Modules Functional Pearl ICFP Tim Sheard Emir Pasalic Two-Level Types and Parameterized Modules JFP This is an expanded version of Sheard with new examples Wouter Swierstra Data types la carte Functional Pearl JFP",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "Fixedpoint",
          "package": "unification-fd",
          "partial": "Fixedpoint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eFix f\u003c/code\u003e is a fix point of the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e. Note that in\n Haskell the least and greatest fixed points coincide, so we don't\n need to distinguish between \u003ccode\u003eMu f\u003c/code\u003e and \u003ccode\u003eNu f\u003c/code\u003e. This type used\n to be called \u003ccode\u003eY\u003c/code\u003e, hence the naming convention for all the \u003ccode\u003eyfoo\u003c/code\u003e\n functions.\n\u003c/p\u003e\u003cp\u003eThis type lets us invoke category theory to get recursive types\n and operations over them without the type checker complaining\n about infinite types. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance doesn't print the\n constructors, for legibility.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "Fix",
          "package": "unification-fd",
          "source": "src/Data-Functor-Fixedpoint.html#Fix",
          "type": "newtype"
        },
        "index": {
          "description": "Fix is fix point of the Functor Note that in Haskell the least and greatest fixed points coincide so we don need to distinguish between Mu and Nu This type used to be called hence the naming convention for all the yfoo functions This type lets us invoke category theory to get recursive types and operations over them without the type checker complaining about infinite types The Show instance doesn print the constructors for legibility",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "Fix",
          "package": "unification-fd",
          "partial": "Fix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#t:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Fixedpoint",
          "name": "Fix",
          "package": "unification-fd",
          "signature": "Fix",
          "source": "src/Data-Functor-Fixedpoint.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "Fix",
          "package": "unification-fd",
          "partial": "Fix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure anamorphism generating the greatest fixed point of a\n functor. This function applies an \u003ccode\u003ef\u003c/code\u003e-coalgebra from the top\n down to expand a seed into a \u003ccode\u003eFix f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "ana",
          "package": "unification-fd",
          "signature": "(a -\u003e f a) -\u003e a -\u003e Fix f",
          "source": "src/Data-Functor-Fixedpoint.html#ana",
          "type": "function"
        },
        "index": {
          "description": "pure anamorphism generating the greatest fixed point of functor This function applies an coalgebra from the top down to expand seed into Fix",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "ana",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eFix b",
          "package": "unification-fd",
          "signature": "(a-\u003ef a)-\u003ea-\u003eFix f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:ana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn anamorphism for monadic \u003ccode\u003ef\u003c/code\u003e-coalgebras. Alas, this isn't\n wholly generic to \u003ccode\u003eFunctor\u003c/code\u003e since it requires distribution of\n \u003ccode\u003ef\u003c/code\u003e over \u003ccode\u003em\u003c/code\u003e (provided by \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eN.B., this orders the side effects from the top down.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "anaM",
          "package": "unification-fd",
          "signature": "(a -\u003e m (f a)) -\u003e a -\u003e m (Fix f)",
          "source": "src/Data-Functor-Fixedpoint.html#anaM",
          "type": "function"
        },
        "index": {
          "description": "An anamorphism for monadic coalgebras Alas this isn wholly generic to Functor since it requires distribution of over provided by sequence or mapM in Traversable N.B this orders the side effects from the top down",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "anaM",
          "normalized": "(a-\u003eb(c a))-\u003ea-\u003eb(Fix c)",
          "package": "unification-fd",
          "signature": "(a-\u003em(f a))-\u003ea-\u003em(Fix f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:anaM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a Church encoding of a fixed point into the data\n representation of the fixed point.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "build",
          "package": "unification-fd",
          "signature": "(forall r.  (f r -\u003e r) -\u003e r) -\u003e Fix f",
          "source": "src/Data-Functor-Fixedpoint.html#build",
          "type": "function"
        },
        "index": {
          "description": "Take Church encoding of fixed point into the data representation of the fixed point",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "build",
          "normalized": "(a b(c d-\u003ed)-\u003ed)-\u003eFix c",
          "package": "unification-fd",
          "signature": "(forall r.(f r-\u003er)-\u003er)-\u003eFix f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure catamorphism over the least fixed point of a functor.\n This function applies the \u003ccode\u003ef\u003c/code\u003e-algebra from the bottom up over\n \u003ccode\u003eFix f\u003c/code\u003e to create some residual value.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "cata",
          "package": "unification-fd",
          "signature": "(f a -\u003e a) -\u003e Fix f -\u003e a",
          "source": "src/Data-Functor-Fixedpoint.html#cata",
          "type": "function"
        },
        "index": {
          "description": "pure catamorphism over the least fixed point of functor This function applies the algebra from the bottom up over Fix to create some residual value",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "cata",
          "normalized": "(a b-\u003eb)-\u003eFix a-\u003eb",
          "package": "unification-fd",
          "signature": "(f a-\u003ea)-\u003eFix f-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:cata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA catamorphism for monadic \u003ccode\u003ef\u003c/code\u003e-algebras. Alas, this isn't wholly\n generic to \u003ccode\u003eFunctor\u003c/code\u003e since it requires distribution of \u003ccode\u003ef\u003c/code\u003e over\n \u003ccode\u003em\u003c/code\u003e (provided by \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eN.B., this orders the side effects from the bottom up.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "cataM",
          "package": "unification-fd",
          "signature": "(f a -\u003e m a) -\u003e Fix f -\u003e m a",
          "source": "src/Data-Functor-Fixedpoint.html#cataM",
          "type": "function"
        },
        "index": {
          "description": "catamorphism for monadic algebras Alas this isn wholly generic to Functor since it requires distribution of over provided by sequence or mapM in Traversable N.B this orders the side effects from the bottom up",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "cataM",
          "normalized": "(a b-\u003ec b)-\u003eFix a-\u003ec b",
          "package": "unification-fd",
          "signature": "(f a-\u003em a)-\u003eFix f-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:cataM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA higher-order map taking a natural transformation \u003ccode\u003e(f -\u003e g)\u003c/code\u003e\n and lifting it to operate on \u003ccode\u003eFix\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "hmap",
          "package": "unification-fd",
          "signature": "(forall a.  f a -\u003e g a) -\u003e Fix f -\u003e Fix g",
          "source": "src/Data-Functor-Fixedpoint.html#hmap",
          "type": "function"
        },
        "index": {
          "description": "higher-order map taking natural transformation and lifting it to operate on Fix",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "hmap",
          "normalized": "(a b c d-\u003ee d)-\u003eFix c-\u003eFix e",
          "package": "unification-fd",
          "signature": "(forall a. f a-\u003eg a)-\u003eFix f-\u003eFix g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:hmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic variant of \u003ccode\u003e\u003ca\u003ehmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "hmapM",
          "package": "unification-fd",
          "signature": "(forall a.  f a -\u003e m (g a)) -\u003e Fix f -\u003e m (Fix g)",
          "source": "src/Data-Functor-Fixedpoint.html#hmapM",
          "type": "function"
        },
        "index": {
          "description": "monadic variant of hmap",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "hmapM",
          "normalized": "(a b c d-\u003ee(f d))-\u003eFix c-\u003ee(Fix f)",
          "package": "unification-fd",
          "signature": "(forall a. f a-\u003em(g a))-\u003eFix f-\u003em(Fix g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:hmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ehylo phi psi == cata phi . ana psi\u003c/pre\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "hylo",
          "package": "unification-fd",
          "signature": "(f b -\u003e b) -\u003e (a -\u003e f a) -\u003e a -\u003e b",
          "source": "src/Data-Functor-Fixedpoint.html#hylo",
          "type": "function"
        },
        "index": {
          "description": "hylo phi psi cata phi ana psi",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "hylo",
          "normalized": "(a b-\u003eb)-\u003e(c-\u003ea c)-\u003ec-\u003eb",
          "package": "unification-fd",
          "signature": "(f b-\u003eb)-\u003e(a-\u003ef a)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:hylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ehyloM phiM psiM == cataM phiM \u003c=\u003c anaM psiM\u003c/pre\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "hyloM",
          "package": "unification-fd",
          "signature": "(f b -\u003e m b) -\u003e (a -\u003e m (f a)) -\u003e a -\u003e m b",
          "source": "src/Data-Functor-Fixedpoint.html#hyloM",
          "type": "function"
        },
        "index": {
          "description": "hyloM phiM psiM cataM phiM anaM psiM",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "hyloM",
          "normalized": "(a b-\u003ec b)-\u003e(d-\u003ec(a d))-\u003ed-\u003ec b",
          "package": "unification-fd",
          "signature": "(f b-\u003em b)-\u003e(a-\u003em(f a))-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:hyloM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Fixedpoint",
          "name": "unFix",
          "package": "unification-fd",
          "signature": "f (Fix f)",
          "source": "src/Data-Functor-Fixedpoint.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "unFix",
          "package": "unification-fd",
          "partial": "Fix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:unFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ecata\u003c/a\u003e\u003c/code\u003e which restricts the return type to being\n a new fixpoint. Though more restrictive, it can be helpful when\n you already have an algebra which expects the outermost \u003ccode\u003eFix\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you don't like either \u003ccode\u003efmap\u003c/code\u003e or \u003ccode\u003ecata\u003c/code\u003e, then maybe this is\n what you were thinking?\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "ycata",
          "package": "unification-fd",
          "signature": "(Fix f -\u003e Fix f) -\u003e Fix f -\u003e Fix f",
          "source": "src/Data-Functor-Fixedpoint.html#ycata",
          "type": "function"
        },
        "index": {
          "description": "variant of cata which restricts the return type to being new fixpoint Though more restrictive it can be helpful when you already have an algebra which expects the outermost Fix If you don like either fmap or cata then maybe this is what you were thinking",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "ycata",
          "normalized": "(Fix a-\u003eFix a)-\u003eFix a-\u003eFix a",
          "package": "unification-fd",
          "signature": "(Fix f-\u003eFix f)-\u003eFix f-\u003eFix f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:ycata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003eycata\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "ycataM",
          "package": "unification-fd",
          "signature": "(Fix f -\u003e m (Fix f)) -\u003e Fix f -\u003e m (Fix f)",
          "source": "src/Data-Functor-Fixedpoint.html#ycataM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of ycata",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "ycataM",
          "normalized": "(Fix a-\u003eb(Fix a))-\u003eFix a-\u003eb(Fix a)",
          "package": "unification-fd",
          "signature": "(Fix f-\u003em(Fix f))-\u003eFix f-\u003em(Fix f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:ycataM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e for endomorphisms on the fixed point. That\n is, this maps the function over the first layer of recursive\n structure.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "ymap",
          "package": "unification-fd",
          "signature": "(Fix f -\u003e Fix f) -\u003e Fix f -\u003e Fix f",
          "source": "src/Data-Functor-Fixedpoint.html#ymap",
          "type": "function"
        },
        "index": {
          "description": "version of fmap for endomorphisms on the fixed point That is this maps the function over the first layer of recursive structure",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "ymap",
          "normalized": "(Fix a-\u003eFix a)-\u003eFix a-\u003eFix a",
          "package": "unification-fd",
          "signature": "(Fix f-\u003eFix f)-\u003eFix f-\u003eFix f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:ymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic variant of \u003ccode\u003e\u003ca\u003eymap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Fixedpoint",
          "name": "ymapM",
          "package": "unification-fd",
          "signature": "(Fix f -\u003e m (Fix f)) -\u003e Fix f -\u003e m (Fix f)",
          "source": "src/Data-Functor-Fixedpoint.html#ymapM",
          "type": "function"
        },
        "index": {
          "description": "monadic variant of ymap",
          "hierarchy": "Data Functor Fixedpoint",
          "module": "Data.Functor.Fixedpoint",
          "name": "ymapM",
          "normalized": "(Fix a-\u003eb(Fix a))-\u003eFix a-\u003eb(Fix a)",
          "package": "unification-fd",
          "signature": "(Fix f-\u003em(Fix f))-\u003eFix f-\u003em(Fix f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unification-fd/docs/Data-Functor-Fixedpoint.html#v:ymapM"
      }
    }
  ]
]